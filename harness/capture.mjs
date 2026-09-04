#!/usr/bin/env node
// The capture harness. One scripted driver per artifact; every artifact is
// captured by running its own recipe (docs/capture/<id>.md).
//
// Video is rendered frame-accurate on a virtual clock (see report.md F-010):
// the app really renders every frame from the live model, stepped at a fixed
// 30 fps timebase, because this container's software rasteriser produces about
// 12 wall-clock fps at 1920x1080. Nothing is interpolated and nothing is cut.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync, rmSync, readdirSync, existsSync, readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';
import { launch } from './launch.cjs.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
export const EVIDENCE = resolve(ROOT, 'evidence');

export const CHROME_ARGS = [
  '--use-gl=angle', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
  '--no-sandbox', '--disable-dev-shm-usage', '--hide-scrollbars',
  '--force-device-scale-factor=1', '--autoplay-policy=no-user-gesture-required',
  '--disable-lcd-text', '--disable-font-subpixel-positioning',
];

/** The harness determinism seed. Pinned clock and pinned PRNG for every capture. */
export const SEED = {
  epoch: Date.UTC(2026, 7, 20, 12, 0, 0),
  rng: 0x4D4D5345,
  fps: 30,
};

const INIT = `(() => {
  const EPOCH = ${SEED.epoch};
  const t0 = performance.now();
  const RealDate = Date;
  Date.now = () => EPOCH + Math.round(performance.now() - t0);
  // Deterministic PRNG so generated node ids are stable across cycles.
  let s = ${SEED.rng} >>> 0;
  Math.random = () => { s ^= s << 13; s >>>= 0; s ^= s >> 17; s ^= s << 5; s >>>= 0; return s / 4294967296; };
  void RealDate;
})();`;

export async function openBrowser(extraArgs = []) {
  return chromium.launch({ args: [...CHROME_ARGS, ...extraArgs] });
}

export async function openApp(browser, S, {
  surface = 'windows', map = 'map-fermentation', width = 1920, height = 1080,
  account = 'kai@master-mind.local', actor = null, lens = null, fresh = true,
} = {}) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1,
    permissions: [], bypassCSP: true });
  if (fresh) await ctx.clearCookies();
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text().slice(0, 200)); });
  const q = `&surface=${surface}&map=${map}&account=${encodeURIComponent(account)}` +
            (actor ? `&actor=${encodeURIComponent(actor)}` : `&actor=${surface}-fixed`);
  await page.goto(S.url(q).replace('index.html?', `index.html?map=${map}&`));
  await page.waitForFunction(() => window.mm && window.mm.ready, null, { timeout: 60000 });
  const cdp = await ctx.newCDPSession(page);
  if (lens) await page.evaluate(l => window.mm.setLens(l), lens);
  // Stop the wall-clock loop; every frame from here is explicitly stepped.
  await page.evaluate(() => window.mm.stop());
  await step(page, 0);
  return { ctx, page, cdp, errs };
}

/** Render exactly one frame at virtual time `ms`. */
export const step = (page, ms) => page.evaluate(t => window.mm.renderAt(t), ms);

/** Raw CDP capture: ~4x faster than the Playwright wrapper and does not wait on fonts. */
export async function grab(cdp, { format = 'png', quality = 92 } = {}) {
  const r = await cdp.send('Page.captureScreenshot', format === 'png' ? { format } : { format, quality });
  return Buffer.from(r.data, 'base64');
}

export async function shot(page, cdp, out, ms = 0) {
  await step(page, ms);
  const buf = await grab(cdp, { format: 'png' });
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, buf);
  return out;
}

/**
 * Record video by stepping the app's own clock at a fixed timebase.
 * `onFrame(i, tMs)` may drive interactions between frames.
 */
export async function record(page, cdp, { out, seconds, fps = SEED.fps, onFrame = null, startMs = 0 }) {
  const total = Math.ceil(seconds * fps);
  mkdirSync(dirname(out), { recursive: true });
  const ff = spawn('ffmpeg', [
    '-y', '-f', 'image2pipe', '-vcodec', 'mjpeg', '-r', String(fps), '-i', 'pipe:0',
    '-c:v', 'libx264', '-preset', 'medium', '-crf', '19', '-pix_fmt', 'yuv420p',
    '-r', String(fps), '-movflags', '+faststart', out,
  ], { stdio: ['pipe', 'ignore', 'pipe'] });
  let ffErr = '';
  ff.stderr.on('data', d => ffErr += d);
  const done = new Promise((res, rej) => {
    ff.on('close', c => c === 0 ? res() : rej(new Error(`ffmpeg exit ${c}: ${ffErr.slice(-800)}`)));
  });
  for (let i = 0; i < total; i++) {
    const t = startMs + (i / fps) * 1000;
    if (onFrame) await onFrame(i, t, total);
    await step(page, t);
    const buf = await grab(cdp, { format: 'jpeg', quality: 94 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await done;
  return out;
}

/** Compose panels with ffmpeg. `mode` is 'h' (side by side) or 'v' (stacked). */
export async function compose(inputs, out, { mode = 'h', labels = null, width = 1920, height = 1080 } = {}) {
  const n = inputs.length;
  const cellW = mode === 'h' ? Math.floor(width / n) : width;
  const cellH = mode === 'h' ? height : Math.floor(height / n);
  const args = ['-y'];
  for (const i of inputs) args.push('-i', i);
  const parts = [];
  for (let i = 0; i < n; i++) {
    let f = `[${i}:v]scale=${cellW}:${cellH}:force_original_aspect_ratio=decrease,` +
            `pad=${cellW}:${cellH}:(ow-iw)/2:(oh-ih)/2:color=0x120E0B`;
    if (labels && labels[i]) {
      const txt = labels[i].replace(/[\\:']/g, m => '\\' + m);
      f += `,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:` +
           `text='${txt}':x=18:y=14:fontsize=24:fontcolor=0xEFE6D8:box=1:boxcolor=0x191410@0.94:boxborderw=10`;
    }
    parts.push(`${f}[v${i}]`);
  }
  const stack = mode === 'h' ? `hstack=inputs=${n}` : `vstack=inputs=${n}`;
  const chain = parts.join(';') + ';' + inputs.map((_, i) => `[v${i}]`).join('') + stack + '[out]';
  args.push('-filter_complex', chain, '-map', '[out]', '-frames:v', '1', out);
  await new Promise((res, rej) => {
    let err = '';
    const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    p.stderr.on('data', d => err += d);
    p.on('close', c => c === 0 ? res() : rej(new Error(`compose failed: ${err.slice(-800)}`)));
  });
  return out;
}

export const sha = (p) => createHash('sha256').update(readFileSync(p)).digest('hex');

export async function probe(file) {
  return new Promise((res) => {
    let out = '';
    const p = spawn('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
      '-show_entries', 'stream=width,height,r_frame_rate,nb_read_frames',
      '-show_entries', 'format=duration', '-count_frames', '-of', 'json', file],
      { stdio: ['ignore', 'pipe', 'ignore'] });
    p.stdout.on('data', d => out += d);
    p.on('close', () => { try { res(JSON.parse(out)); } catch { res(null); } });
  });
}

export { launch, ROOT };
