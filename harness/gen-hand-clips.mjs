#!/usr/bin/env node
// Renders the hand-gesture clips and encodes them as Y4M for Chromium's fake
// capture device. Deterministic: same script, same frames.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { HAND_JS } from './hand-render.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = resolve(ROOT, 'harness/clips');
const W = 640, H = 480, FPS = 30;

// The clip: each pose held, with short blends between them. Timings in seconds.
export const SCRIPT = [
  { pose: 'spread', hold: 3.0 },
  { pose: 'fist',   hold: 3.0 },
  { pose: 'gather', hold: 3.0 },
  { pose: 'two',    hold: 3.0 },
];
const BLEND = 0.65;

async function renderFrames(page, plan, drift) {
  return page.evaluate(async ({ plan, W, H, FPS, BLEND, drift }) => {
    const M = window.__hand;
    const c = document.createElement('canvas'); c.width = W; c.height = H;
    const ctx = c.getContext('2d');
    const out = [];
    let t = 0;
    for (let i = 0; i < plan.length; i++) {
      const cur = M.POSES[plan[i].pose];
      const nxt = M.POSES[plan[(i + 1) % plan.length].pose];
      const holdF = Math.round(plan[i].hold * FPS), blendF = Math.round(BLEND * FPS);
      for (let f = 0; f < holdF + blendF; f++) {
        const p = f < holdF ? cur : M.blend(cur, nxt, (f - holdF + 1) / blendF);
        // A little drift and breathing, so it does not look like a still frame.
        const k = t / FPS;
        M.drawScene(ctx, W, H, p, {
          scale: H * (0.30 + 0.006 * Math.sin(k * 1.1)),
          cx: W * (0.50 + drift * Math.sin(k * 0.55)),
          cy: H * (0.87 + 0.010 * Math.cos(k * 0.8)),
          rot: 5 * Math.sin(k * 0.42),
        });
        out.push(c.toDataURL('image/png').slice(22));
        t++;
      }
    }
    return out;
  }, { plan, W, H, FPS, BLEND, drift });
}

/**
 * Writes the committed input recording as H.264 (small enough to live in git)
 * and the Y4M that Chromium's fake capture device needs. Only the .mp4 is
 * committed; the .y4m is regenerated from it by the capture harness.
 */
async function toClip(frames, outMp4) {
  mkdirSync(dirname(outMp4), { recursive: true });
  const ff = spawn('ffmpeg', ['-y', '-f', 'image2pipe', '-vcodec', 'png', '-r', String(FPS),
    '-i', 'pipe:0', '-c:v', 'libx264', '-preset', 'veryslow', '-crf', '14',
    '-pix_fmt', 'yuv420p', '-r', String(FPS), outMp4], { stdio: ['pipe', 'ignore', 'pipe'] });
  let err = '';
  ff.stderr.on('data', d => err += d);
  const done = new Promise((res, rej) => ff.on('close', c => c === 0 ? res() : rej(new Error(err.slice(-600)))));
  for (const b64 of frames) {
    const buf = Buffer.from(b64, 'base64');
    if (!ff.stdin.write(buf)) await new Promise(r => ff.stdin.once('drain', r));
  }
  ff.stdin.end();
  await done;
}

const browser = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage', '--force-device-scale-factor=1'] });
const page = await browser.newPage({ viewport: { width: W, height: H } });
await page.setContent('<body style="margin:0"></body>');
await page.addScriptTag({ content: `window.__handSrc = ${JSON.stringify(HAND_JS)};` });
await page.evaluate(() => {
  const blobUrl = URL.createObjectURL(new Blob([window.__handSrc], { type: 'text/javascript' }));
  return import(blobUrl).then(m => { window.__hand = m; });
});

mkdirSync(OUT, { recursive: true });
// The full four-pose vocabulary clip.
const full = await renderFrames(page, SCRIPT, 0.045);
await toClip(full, resolve(OUT, 'hand-vocabulary.mp4'));
console.log(`hand-vocabulary.mp4  ${full.length} frames  ${(full.length / FPS).toFixed(1)}s`);
// A short single-pose clip used by artifact 05.
const one = await renderFrames(page, [{ pose: 'spread', hold: 2.4 }], 0.02);
await toClip(one, resolve(OUT, 'hand-spread.mp4'));
console.log(`hand-spread.mp4      ${one.length} frames`);

// A contact sheet so the clip can be eyeballed.
writeFileSync(resolve(OUT, 'frame-sample.png'), Buffer.from(full[45], 'base64'));
await browser.close();
