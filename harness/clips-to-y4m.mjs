#!/usr/bin/env node
// Chromium's fake capture device reads Y4M. The committed input recordings are
// H.264 (git-sized); this expands them next to the source, on demand.
import { spawn } from 'node:child_process';
import { existsSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

export async function y4m(name) {
  const mp4 = resolve(ROOT, 'harness/clips', `${name}.mp4`);
  const out = resolve(ROOT, 'harness/clips', `${name}.y4m`);
  if (!existsSync(mp4)) throw new Error(`missing input recording: ${mp4}`);
  if (existsSync(out) && statSync(out).mtimeMs >= statSync(mp4).mtimeMs) return out;
  await new Promise((res, rej) => {
    const p = spawn('ffmpeg', ['-y', '-i', mp4, '-pix_fmt', 'yuv420p', '-f', 'yuv4mpegpipe', out],
      { stdio: ['ignore', 'ignore', 'pipe'] });
    let e = ''; p.stderr.on('data', d => e += d);
    p.on('close', c => c === 0 ? res() : rej(new Error(e.slice(-500))));
  });
  return out;
}
if (import.meta.url === `file://${process.argv[1]}`) {
  for (const n of process.argv.slice(2)) console.log(await y4m(n));
}
