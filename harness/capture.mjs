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

export const INIT_SCRIPT = INIT;

export async function openBrowser(extraArgs = []) {
  return chromium.launch({ args: [...CHROME_ARGS, ...extraArgs] });
}

export async function openApp(browser, S, {
  surface = 'windows', map = 'map-fermentation', width = 1920, height = 1080,
  account = 'kai@master-mind.local', actor = null, lens = null, touch = false,
  camera = false,
} = {}) {
  const ctx = await browser.newContext({ viewport: { width, height }, deviceScaleFactor: 1,
    hasTouch: touch, isMobile: false, permissions: camera ? ['camera'] : [], bypassCSP: true });
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage();
  const errs = [];
  page.on('pageerror', e => errs.push(e.message));
  page.on('console', m => { if (m.type() === 'error') errs.push('console: ' + m.text().slice(0, 220)); });
  const url = `http://127.0.0.1:${S.httpPort}/index.html?port=${S.wsPort}` +
    `&surface=${surface}&map=${encodeURIComponent(map)}` +
    `&account=${encodeURIComponent(account)}&actor=${encodeURIComponent(actor || surface + '-fixed')}`;
  await page.goto(url);
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
/**
 * `auditEvery`/`auditInto` sample the label arbiter DURING the take.
 *
 * The stills carry a zero-overhang guarantee, and it did not hold in motion: a
 * label ran off the left edge of artifact 18's final frame reading '…eks',
 * because the check only ever ran at still-capture time. A guarantee that is
 * only checked where it is convenient is not a guarantee.
 */
export async function record(page, cdp, { out, seconds, fps = SEED.fps, onFrame = null, startMs = 0,
                                          auditEvery = 0, auditInto = null }) {
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
    if (auditEvery && auditInto && i % auditEvery === 0) {
      auditInto.push(await page.evaluate((f) => {
        const sc = window.mm.scene, d = window.mm.store.doc;
        const r = sc.labelDrawAudit();
        const detail = (id) => {
          if (!id) return null;
          const res = sc.labelRects.get(id);
          const i2 = sc.runMeta.findIndex(m => m.id === id);
          const sp = sc.screenPositions().find(p => p.id === id);
          const dr = i2 >= 0 && sp ? sc.text.drawnRect(i2, sp.x, sp.y, sp.pxPerWorld) : null;
          return { text: d.nodes[id].text,
                   res: res && [Math.round(res.x0), Math.round(res.y0), Math.round(res.x1), Math.round(res.y1)],
                   drawn: dr && [Math.round(dr.x0), Math.round(dr.y0), Math.round(dr.x1), Math.round(dr.y1)] };
        };
        return { f, checked: r.checked, gap: r.worstGapPx, off: r.worstOffFramePx,
                 gapOn: detail(r.worst), offOn: detail(r.worstOffFrame) };
      }, i));
    }
    const buf = await grab(cdp, { format: 'jpeg', quality: 94 });
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await done;
  return out;
}

/** Compose panels with ffmpeg. `mode` is 'h' (side by side) or 'v' (stacked). */
/**
 * Break a caption into lines that FIT the panel, at ' · ' boundaries.
 *
 * A caption that does not fit used to be shrunk until it hit a floor and then
 * simply ran off the edge, taking whatever clause was at the end with it — in
 * artifact 12 that was the verdict on whether both sockets agreed. A caption
 * now takes as many lines as it needs, and the harness asserts that none was
 * dropped.
 */
export function wrapCaption(text, cellW, size = 13, maxLines = 5) {
  const perLine = Math.max(10, Math.floor((cellW - 34) / (size * 0.55)));
  // Break on ' · ' first, then on spaces if a single clause is still too long,
  // so the helper does not depend on the caller having put separators in the
  // right places. A caption is text, not a pre-formatted layout.
  const parts = [];
  for (const seg of String(text).split(' · ')) {
    if (seg.length <= perLine) { parts.push(seg); continue; }
    let acc = '';
    for (const word of seg.split(' ')) {
      const next = acc ? `${acc} ${word}` : word;
      if (next.length <= perLine || !acc) { acc = next; continue; }
      parts.push(acc); acc = word;
    }
    if (acc) parts.push(acc);
  }
  const lines = [];
  let cur = '';
  for (const part of parts) {
    const next = cur ? `${cur} · ${part}` : part;
    if (next.length <= perLine || !cur) { cur = next; continue; }
    lines.push(cur); cur = part;
  }
  if (cur) lines.push(cur);
  return { lines: lines.slice(0, maxLines), dropped: Math.max(0, lines.length - maxLines),
           overlong: lines.filter(l => l.length > perLine).length };
}

export async function compose(inputs, out, { mode = 'h', labels = null, sublabels = null, sublabels2 = null, sublabels3 = null, width = 1920, height = 1080 } = {}) {
  const n = inputs.length;
  const cellW = mode === 'h' ? Math.floor(width / n) : width;
  const cellH = mode === 'h' ? height : Math.floor(height / n);
  const args = ['-y'];
  for (const i of inputs) args.push('-i', i);
  // Labels live in a strip ABOVE each panel so they never cover the interface
  // the panel is meant to show.
  // How many caption lines the tallest panel needs, so the strip is sized to
  // hold every clause rather than the clauses being sized to fit the strip.
  const capLines = [];
  for (let i = 0; i < n; i++) {
    const a = sublabels && sublabels[i] ? wrapCaption(sublabels[i], cellW).lines : [];
    const b = sublabels2 && sublabels2[i] ? wrapCaption(sublabels2[i], cellW).lines : [];
    const c = sublabels3 && sublabels3[i] ? wrapCaption(sublabels3[i], cellW).lines : [];
    capLines.push([...a, ...b, ...c]);
  }
  const maxCap = Math.max(0, ...capLines.map(l => l.length));
  const strip = labels ? 34 + maxCap * 21 + (maxCap ? 6 : 12) : 0;
  const parts = [];
  for (let i = 0; i < n; i++) {
    let f = `[${i}:v]scale=${cellW}:${cellH - strip}:force_original_aspect_ratio=decrease,` +
            `pad=${cellW}:${cellH}:(ow-iw)/2:${strip}:color=0x120E0B`;
    const esc = (t) => String(t).replace(/[\\:']/g, m => '\\' + m);
    if (labels && labels[i]) {
      f += `,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf:` +
           `text='${esc(labels[i])}':x=20:y=10:fontsize=23:fontcolor=0xEFE6D8`;
    }
    // A second line for provenance: which process rendered this panel, over
    // which transport, and the measured values the panel is being asked to
    // prove. It is written from what the running app reported, never typed.
    //
    // The size is solved so the whole line fits the panel it belongs to. A
    // provenance line that runs off the edge is worse than none: it reads as
    // the frame hiding the part that did not fit.
    // Two provenance lines rather than one over-long one. Cycle 4 pushed the
    // 'camera frozen from 11' clause off the edge of artifact 12 by shrinking a
    // single line until it no longer fit — and that clause is what licenses a
    // reader to treat identical pixels between 11 and 12 as identical world
    // positions. A caption that cannot fit is split, never truncated.
    capLines[i].forEach((txt, k) => {
      f += `,drawtext=fontfile=/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf:` +
           `text='${esc(txt)}':x=20:y=${38 + k * 21}:fontsize=13:fontcolor=0xB9AA9B`;
    });
    parts.push(`${f}[v${i}]`);
  }
  const stack = mode === 'h' ? `hstack=inputs=${n}` : `vstack=inputs=${n}`;
  const chain = parts.join(';') + ';' + inputs.map((_, i) => `[v${i}]`).join('') + stack + '[out]';
  // No clause may be silently lost. A caption that cannot be laid out is a
  // failed compose, not a shorter caption.
  for (let i = 0; i < n; i++) {
    for (const src of [sublabels && sublabels[i], sublabels2 && sublabels2[i], sublabels3 && sublabels3[i]]) {
      if (!src) continue;
      const w = wrapCaption(src, cellW);
      if (w.dropped || w.overlong)
        throw new Error(`compose: caption for panel ${i} does not fit ` +
                        `(${w.dropped} line(s) dropped, ${w.overlong} overlong): ${String(src).slice(0, 90)}…`);
    }
  }
  args.push('-filter_complex', chain, '-map', '[out]', '-frames:v', '1', out);
  await new Promise((res, rej) => {
    let err = '';
    const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    p.stderr.on('data', d => err += d);
    p.on('close', c => c === 0 ? res() : rej(new Error(`compose failed: ${err.slice(-800)}`)));
  });
  return out;
}

/**
 * Vertically stack finished panels into one frame.
 *
 * `compose` lays out one ROW; a composite whose panels are full app frames
 * cannot fill a 16:9 canvas from a single row — artifact 14 left its bottom
 * 43 % (rows 616-1079, measured) black while its panels were drawn at half
 * scale. Stacking rows lets that space carry a magnified detail of the same
 * take instead of nothing.
 */
export async function stack(inputs, out) {
  const args = ['-y'];
  for (const i of inputs) args.push('-i', i);
  const chain = inputs.map((_, i) => `[${i}:v]`).join('') + `vstack=inputs=${inputs.length}[out]`;
  args.push('-filter_complex', chain, '-map', '[out]', '-frames:v', '1', out);
  await new Promise((res, rej) => {
    let err = '';
    const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
    p.stderr.on('data', d => err += d);
    p.on('close', c => c === 0 ? res() : rej(new Error(`stack failed: ${err.slice(-600)}`)));
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
