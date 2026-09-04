#!/usr/bin/env node
// Held-out validation for the hand-pose classifier.
//
// §09 calls it forgery to prove a gesture "only against the exact pre-recorded
// clip rather than the recognized-pose path". The thresholds in
// src/app/input/hands.ts were set from hand GEOMETRY, and this script checks
// them against a clip they were never derived from: a different hand scale,
// a much wider rotation range, a different drift, a different background and
// the poses in a different order.
import { chromium } from 'playwright';
import { spawn } from 'node:child_process';
import { mkdirSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';
import { HAND_JS } from './hand-render.mjs';
const require = createRequire(import.meta.url);
const { serve } = require('./serve.cjs');
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const W = 640, H = 480, FPS = 30, HOLD = 2.6, BLEND = 0.5;

// Deliberately different from harness/gen-hand-clips.mjs in every axis.
const ORDER = ['two', 'gather', 'spread', 'fist'];
const VARIANT = { scale: 0.365, rotAmp: 14, drift: 0.085, bgShift: 1 };

const out = resolve(ROOT, 'harness/clips/validate.y4m');
mkdirSync(dirname(out), { recursive: true });

const rb = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage'] });
const rp = await rb.newPage({ viewport: { width: W, height: H } });
await rp.setContent('<body style="margin:0"></body>');
await rp.addScriptTag({ content: `window.__src=${JSON.stringify(HAND_JS)};` });
await rp.evaluate(() => import(URL.createObjectURL(new Blob([window.__src], { type: 'text/javascript' }))).then(m => { window.H = m; }));
const frames = await rp.evaluate(async ({ ORDER, V, W, H, FPS, HOLD, BLEND }) => {
  const M = window.H;
  const c = document.createElement('canvas'); c.width = W; c.height = H;
  const ctx = c.getContext('2d');
  const outF = []; let t = 0;
  for (let i = 0; i < ORDER.length; i++) {
    const cur = M.POSES[ORDER[i]], nxt = M.POSES[ORDER[(i + 1) % ORDER.length]];
    const hF = Math.round(HOLD * FPS), bF = Math.round(BLEND * FPS);
    for (let f = 0; f < hF + bF; f++) {
      const p = f < hF ? cur : M.blend(cur, nxt, (f - hF + 1) / bF);
      const k = t / FPS;
      M.drawScene(ctx, W, H, p, {
        scale: H * (V.scale + 0.012 * Math.sin(k * 1.7)),
        cx: W * (0.44 + V.drift * Math.sin(k * 0.9)),
        cy: H * (0.90 + 0.02 * Math.cos(k * 1.3)),
        rot: V.rotAmp * Math.sin(k * 0.7),
      });
      outF.push(c.toDataURL('image/png').slice(22)); t++;
    }
  }
  return outF;
}, { ORDER, V: VARIANT, W, H, FPS, HOLD, BLEND });
await rb.close();

await new Promise((res, rej) => {
  const ff = spawn('ffmpeg', ['-y', '-f', 'image2pipe', '-vcodec', 'png', '-r', String(FPS),
    '-i', 'pipe:0', '-pix_fmt', 'yuv420p', '-f', 'yuv4mpegpipe', out], { stdio: ['pipe', 'ignore', 'ignore'] });
  ff.on('close', c => c === 0 ? res() : rej(new Error('ffmpeg failed')));
  (async () => { for (const b of frames) { if (!ff.stdin.write(Buffer.from(b, 'base64'))) await new Promise(r => ff.stdin.once('drain', r)); } ff.stdin.end(); })();
});

const srv = await serve(resolve(ROOT, 'src/dist'), 8737);
const b = await chromium.launch({ args: ['--no-sandbox', '--disable-dev-shm-usage', '--use-gl=angle',
  '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--autoplay-policy=no-user-gesture-required',
  '--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream', `--use-file-for-fake-video-capture=${out}`] });
const ctx = await b.newContext({ permissions: ['camera'], viewport: { width: 640, height: 480 } });
const page = await ctx.newPage();
await page.goto('http://127.0.0.1:8737/probe.html');
await page.waitForFunction(() => !!window.runProbe, null, { timeout: 30000 });
const r = await page.evaluate(s => window.runProbe(s), 16);
await b.close(); srv.close();

const SEGLEN = HOLD + BLEND, CYCLE = SEGLEN * ORDER.length;
const per = {}; for (const k of ORDER) per[k] = { right: 0, total: 0, saw: {} };
for (const f of r.trace) {
  const tt = f.t % CYCLE, i = Math.floor(tt / SEGLEN);
  if (tt - i * SEGLEN >= HOLD) continue;      // ignore blend frames
  const k = ORDER[i];
  per[k].total++; per[k].saw[f.pose] = (per[k].saw[f.pose] || 0) + 1;
  if (f.pose === k) per[k].right++;
}
const rows = ORDER.map(k => ({ pose: k, correct: per[k].right, frames: per[k].total,
  rate: +(per[k].right / Math.max(per[k].total, 1)).toFixed(3), saw: per[k].saw }));
const overall = rows.reduce((a, c) => a + c.correct, 0) / Math.max(rows.reduce((a, c) => a + c.frames, 0), 1);
const report = { clip: 'harness/clips/validate.y4m', variant: VARIANT, order: ORDER,
  detectionRate: r.detectionRate, poseAccuracy: +overall.toFixed(3), rows };
writeFileSync(resolve(ROOT, 'harness/clips/validation.json'), JSON.stringify(report, null, 2));
for (const row of rows) console.log(`  ${row.pose.padEnd(7)} ${row.correct}/${row.frames}  ${(row.rate*100).toFixed(0)}%  ${JSON.stringify(row.saw)}`);
console.log(`detection ${(r.detectionRate*100).toFixed(1)}%   pose accuracy ${(overall*100).toFixed(1)}%   (held-out clip)`);
process.exit(overall >= 0.9 ? 0 : 1);
