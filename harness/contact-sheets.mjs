#!/usr/bin/env node
// Video artifacts are judged from their frames. This lays each video out as a
// timestamped contact sheet so a critic can inspect what the take actually
// shows, rather than take anyone's word for it.
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

const sh = (args) => new Promise((res, rej) => {
  let e = '';
  const p = spawn('ffmpeg', args, { stdio: ['ignore', 'ignore', 'pipe'] });
  p.stderr.on('data', d => e += d);
  p.on('close', c => c === 0 ? res() : rej(new Error(e.slice(-700))));
});

export async function sheet(video, out, { cols = 4, rows = 5 } = {}) {
  const n = cols * rows;
  const dur = await new Promise(res => {
    let o = '';
    const p = spawn('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', video],
      { stdio: ['ignore', 'pipe', 'ignore'] });
    p.stdout.on('data', d => o += d);
    p.on('close', () => res(Number(o.trim()) || 1));
  });
  const step = dur / n;
  // Sample n frames evenly, stamp each with its timestamp, tile them.
  const font = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf';
  await sh(['-y', '-i', video, '-vf',
    `select='not(mod(n\\,${Math.max(1, Math.floor(dur * 30 / n))}))',` +
    `scale=480:270,` +
    `drawtext=fontfile=${font}:text='%{eif\\:t\\:d}s':x=8:y=8:fontsize=22:fontcolor=0xEFE6D8:box=1:boxcolor=0x120E0B@0.85:boxborderw=6,` +
    `tile=${cols}x${rows}:margin=6:padding=4:color=0x120E0B`,
    '-frames:v', '1', '-vsync', '0', out]);
  void step;
  return out;
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const dir = resolve(ROOT, process.argv[2] ?? 'evidence');
  const outDir = join(dir, 'sheets');
  mkdirSync(outDir, { recursive: true });
  for (const f of readdirSync(dir)) {
    if (!f.endsWith('.mp4')) continue;
    const out = join(outDir, f.replace('.mp4', '_sheet.png'));
    await sheet(join(dir, f), out);
    console.log(`  ${f} -> ${out.replace(ROOT + '/', '')}`);
  }
  if (!existsSync(outDir)) console.log('no videos found');
}
