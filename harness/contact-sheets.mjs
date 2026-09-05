#!/usr/bin/env node
// Video artifacts are judged from their frames. This lays each video out as a
// timestamped contact sheet so a critic can inspect what the take actually
// shows, rather than take anyone's word for it.
import { readdirSync, mkdirSync, existsSync, rmSync } from 'node:fs';
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

/**
 * A contact sheet a reviewer can actually read.
 *
 * At 4x5 each tile was 486 px wide — a quarter of the frame — and the top-bar
 * holding badge was unreadable in every tile, so a count change had to be
 * inferred from the cluster rather than read from the counter that states it.
 * 2x10 at double tile width keeps the same twenty samples and makes the chrome
 * legible.
 */
export async function sheet(video, out, { cols = 2, rows = 10 } = {}) {
  const n = cols * rows;
  const dur = await new Promise(res => {
    let o = '';
    const p = spawn('ffprobe', ['-v', 'error', '-show_entries', 'format=duration', '-of', 'csv=p=0', video],
      { stdio: ['ignore', 'pipe', 'ignore'] });
    p.stdout.on('data', d => o += d);
    p.on('close', () => res(Number(o.trim()) || 1));
  });
  // Grab each frame with an INPUT seek — decoding the whole file to sample 20
  // frames costs minutes on a CPU-only box, seeking costs seconds.
  const font = '/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf';
  const tmp = out + '.frames';
  mkdirSync(tmp, { recursive: true });
  const times = Array.from({ length: n }, (_, i) => (i + 0.5) * (dur / n));
  await Promise.all(times.map((t, i) => sh(['-y', '-ss', t.toFixed(3), '-i', video,
    '-frames:v', '1', '-vf',
    `scale=960:540,drawtext=fontfile=${font}:text='${t.toFixed(1)}s':x=14:y=14:` +
    `fontsize=34:fontcolor=0xEFE6D8:box=1:boxcolor=0x120E0B@0.85:boxborderw=9`,
    join(tmp, `f${String(i).padStart(3, '0')}.png`)])));
  await sh(['-y', '-framerate', '1', '-i', join(tmp, 'f%03d.png'),
    '-vf', `tile=${cols}x${rows}:margin=6:padding=4:color=0x120E0B`,
    '-frames:v', '1', out]);
  rmSync(tmp, { recursive: true, force: true });
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
