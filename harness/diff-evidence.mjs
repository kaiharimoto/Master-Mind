#!/usr/bin/env node
// Cycle-to-cycle diff. Numeric, with a recorded tolerance per artifact (§06).
//
//   images  : SSIM against the previous cycle's file
//   videos  : SSIM on sampled frames, plus duration and frame rate
//   positions: compared as MODEL VALUES, never as pixels
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Per-artifact perceptual tolerance. An SSIM at or above the threshold counts
 * as UNCHANGED. Artifacts whose content is inherently a little noisy (a live
 * webcam frame, a video re-encode) carry a looser threshold; deliberately
 * static frames carry a tight one. These numbers are the recorded tolerance.
 */
export const SSIM_THRESHOLD = {
  '01': 0.995, '02': 0.990, '03': 0.990, '04': 0.990, '05': 0.940,
  '06': 0.990, '07': 0.985, '08': 0.985, '09': 0.985, '10': 0.990,
  '11': 0.990, '12': 0.990, '13': 0.995, '14': 0.995, '15': 0.995,
  '16': 0.930, '17': 0.900, '18': 0.940, '19': 0.930, '20': 0.950,
};

const run = (cmd, args) => new Promise((res) => {
  let out = '', err = '';
  const p = spawn(cmd, args, { stdio: ['ignore', 'pipe', 'pipe'] });
  p.stdout.on('data', d => out += d); p.stderr.on('data', d => err += d);
  p.on('close', c => res({ code: c, out, err }));
});

async function ssimImages(a, b) {
  const r = await run('ffmpeg', ['-i', a, '-i', b, '-lavfi',
    '[0:v]scale=1920:-1[x];[1:v]scale=1920:-1[y];[x][y]ssim', '-f', 'null', '-']);
  const m = /All:([0-9.]+)/.exec(r.err);
  return m ? Number(m[1]) : null;
}

async function ssimVideos(a, b) {
  const r = await run('ffmpeg', ['-i', a, '-i', b, '-lavfi', 'ssim', '-f', 'null', '-']);
  const m = /All:([0-9.]+)/.exec(r.err);
  return m ? Number(m[1]) : null;
}

async function probe(f) {
  const r = await run('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height,r_frame_rate', '-show_entries', 'format=duration',
    '-of', 'json', f]);
  try { return JSON.parse(r.out); } catch { return null; }
}

export async function diffEvidence(curDir, prevDir) {
  const cur = JSON.parse(readFileSync(join(curDir, 'MANIFEST.json'), 'utf8'));
  const prevManifest = existsSync(join(prevDir, 'MANIFEST.json'))
    ? JSON.parse(readFileSync(join(prevDir, 'MANIFEST.json'), 'utf8')) : null;
  const rows = [];
  for (const a of cur.artifacts) {
    const A = join(curDir, a.file), B = join(prevDir, a.file);
    const row = { id: a.id, file: a.file, status: a.status,
                  threshold: SSIM_THRESHOLD[a.id] ?? 0.99 };
    if (!existsSync(A)) { row.verdict = 'missing'; rows.push(row); continue; }
    if (!existsSync(B)) { row.verdict = 'new'; rows.push(row); continue; }
    row.ssim = a.kind === 'mp4' ? await ssimVideos(B, A) : await ssimImages(B, A);
    if (a.kind === 'mp4') {
      const [pa, pb] = [await probe(A), await probe(B)];
      row.seconds = { cur: +Number(pa?.format?.duration ?? 0).toFixed(2), prev: +Number(pb?.format?.duration ?? 0).toFixed(2) };
      row.fps = { cur: pa?.streams?.[0]?.r_frame_rate, prev: pb?.streams?.[0]?.r_frame_rate };
    }
    row.verdict = row.ssim === null ? 'uncomparable'
      : row.ssim >= row.threshold ? 'unchanged' : 'changed';
    rows.push(row);
  }

  // Positions compared as model values. This is the position-regression check.
  const pf = join(curDir, 'positions.json'), pp = join(prevDir, 'positions.json');
  let positions = { compared: false };
  if (existsSync(pf) && existsSync(pp)) {
    const c = JSON.parse(readFileSync(pf, 'utf8')), p = JSON.parse(readFileSync(pp, 'utf8'));
    const moved = [], added = [], removed = [];
    for (const map of Object.keys(p)) {
      const cm = c[map] ?? {}, pm = p[map];
      for (const id of Object.keys(pm)) {
        if (!(id in cm)) { removed.push(`${map}/${id}`); continue; }
        if (JSON.stringify(cm[id]) !== JSON.stringify(pm[id]))
          moved.push({ map, id, from: pm[id], to: cm[id] });
      }
      for (const id of Object.keys(cm)) if (!(id in pm)) added.push(`${map}/${id}`);
    }
    positions = { compared: true, moved, added, removed,
                  identical: moved.length === 0 && removed.length === 0 && added.length === 0 };
  }

  const changed = rows.filter(r => r.verdict === 'changed').map(r => r.id);
  const missing = rows.filter(r => r.verdict === 'missing').map(r => r.id);
  return {
    cycle: cur.cycle, previousCycle: prevManifest?.cycle ?? null,
    capturedNow: cur.captured, capturedPrev: prevManifest?.captured ?? null,
    rows, positions,
    summary: { unchanged: rows.filter(r => r.verdict === 'unchanged').length,
               changed: changed.length, new: rows.filter(r => r.verdict === 'new').length,
               missing: missing.length, changedIds: changed, missingIds: missing },
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const cur = resolve(ROOT, process.argv[2] ?? 'evidence');
  const prev = resolve(ROOT, process.argv[3] ?? 'evidence/history/cycle-0');
  const out = await diffEvidence(cur, prev);
  mkdirSync(cur, { recursive: true });
  writeFileSync(join(cur, 'DIFF.json'), JSON.stringify(out, null, 2));
  for (const r of out.rows) console.log(`  ${r.id}  ${String(r.verdict).padEnd(12)} ssim ${r.ssim === undefined ? '—' : r.ssim?.toFixed(4)} (>= ${r.threshold})`);
  console.log(`positions ${out.positions.compared ? (out.positions.identical ? 'IDENTICAL' : `${out.positions.moved.length} moved`) : 'not compared'}`);
  console.log(JSON.stringify(out.summary));
}
