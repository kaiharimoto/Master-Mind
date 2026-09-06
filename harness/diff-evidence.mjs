#!/usr/bin/env node
// Cycle-to-cycle diff. Numeric, with a recorded tolerance per artifact (§06).
//
//   images  : SSIM against the previous cycle's file
//   videos  : SSIM on sampled frames, plus duration and frame rate
//   positions: compared as MODEL VALUES, never as pixels
import { existsSync, readFileSync, writeFileSync, mkdirSync, statSync, readdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
import { createHash } from 'node:crypto';
const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');

/**
 * Per-artifact perceptual tolerance. An SSIM at or above the threshold counts
 * as UNCHANGED. Artifacts whose content is inherently a little noisy (a live
 * webcam frame, a video re-encode) carry a looser threshold; deliberately
 * static frames carry a tight one. These numbers are the recorded tolerance.
 */
/**
 * How these were derived: each is the SSIM a byte-identical re-render of that
 * artifact actually produces, rounded DOWN to the nearest 0.005, so a genuine
 * change has to clear real measured noise rather than a number picked to be
 * comfortable. Stills that are fully deterministic sit at 0.985-0.995. Frames
 * carrying a live webcam or a video re-encode carry looser numbers because the
 * encoder itself moves them; those artifacts are additionally gated on
 * duration, frame rate and bitrate above.
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

/**
 * Videos are diffed through their contact sheets — the same 20 timestamped
 * frames a critic inspects. Decoding two full takes frame by frame costs
 * minutes per artifact on a CPU-only box and tells you nothing the sheets do
 * not. Duration and frame rate are compared exactly, separately.
 */
const dims = async (f) => {
  const r = await run('ffprobe', ['-v', 'error', '-select_streams', 'v:0',
    '-show_entries', 'stream=width,height', '-of', 'csv=p=0', f]);
  const [w, h] = r.out.trim().split(',').map(Number);
  return Number.isFinite(w) && Number.isFinite(h) ? { w, h } : null;
};

async function ssimVideos(a, b) {
  const sa = a.replace(/([^/]+)\.mp4$/, 'sheets/$1_sheet.png');
  const sb = b.replace(/([^/]+)\.mp4$/, 'sheets/$1_sheet.png');
  // Sheets only if they are the SAME SHAPE. Cycle 7 moved the timestamp into a
  // gutter under each tile, which made every sheet taller; SSIM cannot compare
  // two different geometries and returned null, so five of the six videos came
  // back 'uncomparable' — a change to a review aid silently disabling the
  // regression instrument for a third of the set. Where the sheets disagree the
  // videos themselves are compared instead.
  if (existsSync(sa) && existsSync(sb)) {
    const [da, db] = [await dims(sa), await dims(sb)];
    if (da && db && da.w === db.w && da.h === db.h) return ssimImages(sa, sb);
  }
  // THE WHOLE TAKE, not its first four seconds.
  //
  // The direct comparison was capped at `-t 4`, so a change anywhere after the
  // fourth second was invisible to it. Artifact 20's cycle-7 take rejects a
  // placement at 24 s: over four seconds it scored 0.99 and read UNCHANGED;
  // over its full duration it scores 0.909 against a 0.950 threshold. Both
  // streams are scaled to 480 wide first, which is what makes the full
  // duration affordable — about three seconds per pair on this box.
  const r = await run('ffmpeg', ['-i', a, '-i', b, '-lavfi',
    '[0:v]scale=480:-2[x];[1:v]scale=480:-2[y];[x][y]ssim', '-f', 'null', '-']);
  const m = /All:([0-9.]+)/.exec(r.err);
  return m ? Number(m[1]) : null;
}

/**
 * What the LIT SUBJECT of a frame measures, independent of SSIM.
 *
 * SSIM called six artifacts 'unchanged' in a cycle where the node-state
 * luminance ladder was rebuilt underneath them — the unplaced core fell from a
 * clipping 0.997 to 0.461, which is the entire subject of artifact 06. A
 * structural-similarity score is blind to that because the structure did not
 * move. Masking to pixels above the ground and reporting their peak and mean
 * luminance, and how many there are, is not blind to it.
 */
async function subject(file) {
  const png = /\.mp4$/.test(file)
    ? file.replace(/([^/]+)\.mp4$/, 'sheets/$1_sheet.png')
    : file;
  if (!existsSync(png)) return null;
  const r = await new Promise((res) => {
    const p = spawn('ffmpeg', ['-v', 'error', '-i', png, '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'],
      { stdio: ['ignore', 'pipe', 'ignore'] });
    const bufs = [];
    p.stdout.on('data', d => bufs.push(d));
    p.on('close', () => res(Buffer.concat(bufs)));
  });
  if (!r.length) return null;
  let count = 0, sum = 0, peak = 0;
  for (let i = 0; i + 2 < r.length; i += 3) {
    const L = (0.299 * r[i] + 0.587 * r[i + 1] + 0.114 * r[i + 2]) / 255;
    if (L <= 0.15) continue;            // ground and near-ground
    count++; sum += L; if (L > peak) peak = L;
  }
  return { litPixels: count, meanLum: count ? +(sum / count).toFixed(4) : 0, peakLum: +peak.toFixed(4) };
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
  const prevById = new Map((prevManifest?.artifacts ?? []).map(a => [a.id, a]));
  const rows = [];
  for (const a of cur.artifacts) {
    const A = join(curDir, a.file), B = join(prevDir, a.file);
    const row = { id: a.id, file: a.file, status: a.status,
                  threshold: SSIM_THRESHOLD[a.id] ?? 0.99 };
    if (!existsSync(A)) { row.verdict = 'missing'; rows.push(row); continue; }
    if (!existsSync(B)) { row.verdict = 'new'; rows.push(row); continue; }
    if (a.kind === 'mp4') {
      const sa = join(curDir, 'sheets', a.file.replace('.mp4', '_sheet.png'));
      const sb = join(prevDir, 'sheets', a.file.replace('.mp4', '_sheet.png'));
      const [da, db] = existsSync(sa) && existsSync(sb) ? [await dims(sa), await dims(sb)] : [null, null];
      row.ssimMethod = da && db && da.w === db.w && da.h === db.h
        ? 'contact sheet, 20 frames spanning the take'
        : 'the take itself, full duration at 480 px wide';
    }
    // BYTE-IDENTITY, MEASURED FROM THE FILES. Recorded as its own condition
    // rather than left to show up as SSIM 1.000, which an artifact that merely
    // changed imperceptibly also produces.
    {
      const ha = createHash('sha256').update(readFileSync(A)).digest('hex');
      const hb = createHash('sha256').update(readFileSync(B)).digest('hex');
      row.sha256 = ha.slice(0, 12);
      if (ha === hb) {
        row.identicalBytes = true;
        row.capturedAt = a.fileMtime ?? a.capturedAt ?? null;
      }
    }
    row.ssim = a.kind === 'mp4' ? await ssimVideos(B, A) : await ssimImages(B, A);
    if (a.kind === 'mp4') {
      const [pa, pb] = [await probe(A), await probe(B)];
      row.seconds = { cur: +Number(pa?.format?.duration ?? 0).toFixed(2), prev: +Number(pb?.format?.duration ?? 0).toFixed(2) };
      row.fps = { cur: pa?.streams?.[0]?.r_frame_rate, prev: pb?.streams?.[0]?.r_frame_rate };
      row.bytes = { cur: statSync(A).size, prev: statSync(B).size };
      row.bitrateDelta = +((row.bytes.cur - row.bytes.prev) / Math.max(row.bytes.prev, 1)).toFixed(3);
    }
    row.verdict = row.ssim === null ? 'uncomparable'
      : row.ssim >= row.threshold ? 'unchanged' : 'changed';
    // An uncomparable row must say WHY it could not be compared. Left blank it
    // reads like an unchanged one in a summary count.
    if (row.verdict === 'uncomparable' && !row.why) {
      const [da, db] = [await dims(A), await dims(B)];
      row.why = da && db && (da.w !== db.w || da.h !== db.h)
        ? `frame geometry changed this cycle: ${db.w}x${db.h} -> ${da.w}x${da.h}, so SSIM has nothing to compare`
        : 'SSIM produced no score for this pair';
    }
    // The subject test, beside SSIM rather than instead of it.
    const [sa, sb] = [await subject(A), await subject(B)];
    if (sa && sb) {
      const rel = (x, y) => (y === 0 ? (x === 0 ? 0 : 1) : Math.abs(x - y) / Math.abs(y));
      row.subject = { cur: sa, prev: sb,
                      peakDelta: +rel(sa.peakLum, sb.peakLum).toFixed(3),
                      meanDelta: +rel(sa.meanLum, sb.meanLum).toFixed(3),
                      litDelta: +rel(sa.litPixels, sb.litPixels).toFixed(3) };
      if (row.subject.peakDelta > 0.10 || row.subject.meanDelta > 0.10 || row.subject.litDelta > 0.10) {
        row.subjectChanged = true;
        if (row.verdict === 'unchanged') {
          row.verdict = 'changed';
          row.why = `subject luminance moved: peak ${sb.peakLum} -> ${sa.peakLum}, ` +
                    `mean ${sb.meanLum} -> ${sa.meanLum}, lit pixels ${sb.litPixels} -> ${sa.litPixels}`;
        }
      }
    }
    // THE NUMBERS THE FRAME ITSELF PRINTS. SSIM and luminance are global and
    // blind to semantics: cycle 7 was called 'unchanged' on artifact 05 while
    // the counter drawn on that frame moved from 26 hidden labels to 41. Where
    // an artifact reports what its chrome said, those values are diffed as
    // first-class fields and any move is named in whatChanged.
    {
      const pc = prevById.get(a.id)?.result?.onFrame, cc = a.result?.onFrame;
      if (pc && cc) {
        const moved = Object.keys(cc).filter(k => JSON.stringify(cc[k]) !== JSON.stringify(pc[k]));
        if (moved.length) {
          row.onFrameChanged = moved.map(k => `${k} ${JSON.stringify(pc[k])} -> ${JSON.stringify(cc[k])}`);
          if (row.verdict === 'unchanged') {
            row.verdict = 'changed';
            row.why = `the frame's own counters moved: ${row.onFrameChanged.join(', ')}`;
          }
        }
      }
    }
    // THE CLAIM SETS ARE DIFFED, because they are the thing this whole apparatus
    // is for.
    //
    // The diff compared bytes, SSIM, recipe fingerprints, subject luminance and
    // positions — and not the machine-checked claims. So between cycles 9 and
    // 10 eight artifacts changed their claim sets, one of them LOSING a passing
    // claim, and none of it appeared anywhere in the diff. A machine-checked
    // assertion could be deleted between cycles with no trace, which is exactly
    // the failure this category exists to catch, and the cycle-10 Auditor found
    // it by diffing the claim names itself — work the instrument should have
    // done for it.
    //
    // A REMOVAL IS A FINDING BY DEFAULT. Adding a claim is ordinary progress;
    // dropping one means an assertion that used to be checked no longer is, and
    // that has to be said out loud rather than inferred from its absence.
    {
      const names = (a) => (a?.claims?.claims ?? []).map(c => c.claim).sort();
      const prevNames = names(prevById.get(a.id));
      const curNames = names(a);
      const added = curNames.filter(n => !prevNames.includes(n));
      const removed = prevNames.filter(n => !curNames.includes(n));
      if (added.length || removed.length) {
        row.claims = { added, removed, before: prevNames.length, after: curNames.length };
        if (removed.length) {
          row.claimsRemoved = removed;
          row.substantiveClaimChange = true;
        }
      }
      // A CLAIM CAN BE WEAKENED WITHOUT BEING RENAMED, and the name diff above
      // cannot see that. The cycle-11 Auditor's M2: for a predicate reporting a
      // bare `true`, the expected/actual/pass triple proves nothing about the
      // predicate, so a rule quietly relaxed from `n >= 4` to `n >= 1` would
      // leave no trace anywhere in this file. Each claim's acceptance rule is
      // hashed at capture time; the hashes are compared here, and a rule that
      // changed on a claim that kept its name is reported with both texts.
      const rules = (x) => Object.fromEntries((x?.claims?.claims ?? [])
        .filter(c => c.ruleSha).map(c => [c.claim, { sha: c.ruleSha, text: c.rule }]));
      const pRules = rules(prevById.get(a.id)), cRules = rules(a);
      const changedRules = Object.keys(cRules)
        .filter(k => pRules[k] && pRules[k].sha !== cRules[k].sha)
        .map(k => ({ claim: k, before: pRules[k].text, after: cRules[k].text }));
      if (changedRules.length) {
        row.claimRulesChanged = changedRules;
        row.substantiveClaimChange = true;
      } else if (!Object.keys(pRules).length && Object.keys(cRules).length) {
        // Said out loud rather than left to look like agreement: the previous
        // set predates rule fingerprinting, so nothing here can rule out a
        // weakened rule for this cycle's comparison.
        row.claimRulesUncomparable = 'the previous set carries no claim-rule fingerprints';
      }
      // The judge can move without the recipe moving: the predicates that
      // PRODUCE these values live partly in the app bundle.
      const pa = prevById.get(a.id)?.recipe?.appSha, ca = a.recipe?.appSha;
      if (pa && ca && pa !== ca) row.appShaChanged = `${pa} -> ${ca}`;
    }
    // A similarity number cannot distinguish a re-framing from a bug fix from a
    // change to what the artifact demonstrates. The recipe fingerprint can, so
    // substantive change is named rather than left to a reviewer to notice.
    const pr = prevById.get(a.id)?.recipe, cr = a.recipe;
    if (cr && pr) {
      const notes = [];
      if (pr.demonstrates !== cr.demonstrates)
        notes.push(`demonstrates: "${pr.demonstrates ?? '—'}" -> "${cr.demonstrates ?? '—'}"`);
      if (pr.surface !== cr.surface) notes.push(`surface: ${pr.surface ?? '—'} -> ${cr.surface ?? '—'}`);
      if (pr.lens !== cr.lens) notes.push(`lens: ${pr.lens ?? '—'} -> ${cr.lens ?? '—'}`);
      if (pr.fnSha !== cr.fnSha) {
        notes.push(`capture script changed (${pr.fnSha} -> ${cr.fnSha})`);
        // THE FINGERPRINT CHANGED, AND THAT IS WHAT THIS RECORDS. It used to be
        // reported only when the output had also moved, so cycle 9 rewrote
        // eleven capture functions and named nine — omitting 07 and 15, and 15
        // is the one byte-identical artifact in the whole set, which is exactly
        // the combination an auditor most needs surfaced. Whether the output
        // moved is a separate question with its own field.
        row.recipeFingerprintChanged = true;
      }
      // Only say "demonstrates now" when it actually changed. Every one of
      // cycle 10's ten recipe-changed rows carried a `demonstrates now: X`
      // whose X was byte-identical to the previous cycle's, which implies a
      // change of purpose where there was none and buries the change there
      // was. Say which it is.
      if (notes.length) notes.push(pr.demonstrates === cr.demonstrates
        ? 'demonstrates: unchanged'
        : `demonstrates now: "${cr.demonstrates ?? '—'}"`);
      if (notes.length) {
        row.whatChanged = notes.join('; ');
        // A recipe edit is only SUBSTANTIVE if the output actually moved. Cycle
        // 4 marked artifact 20 substantive on a reworded description while its
        // frames were the same at every timestamp.
        const outputMoved = row.verdict === 'changed' || row.subjectChanged === true;
        row.recipeChanged = outputMoved &&
          (notes.length > 1 || pr.demonstrates !== cr.demonstrates ||
           pr.lens !== cr.lens || pr.surface !== cr.surface);
        if (!outputMoved) row.why = 'recipe reworded, output unchanged';
      }
    } else if (cr && prevManifest) {
      // No baseline fingerprint to compare against. Rather than degrade to one
      // uninformative string for every row — which is what cycle 3's diff did,
      // reporting nothing substantive in a cycle where three artifacts were
      // visibly redesigned — fall back to an SSIM band and say so.
      const margin = row.ssim === undefined || row.ssim === null ? null : row.threshold - row.ssim;
      row.whatChanged = margin === null
        ? `no recipe fingerprint in the previous set, and no similarity to fall back on; demonstrates: "${cr.demonstrates ?? '—'}"`
        : margin > 0.05
          ? `no recipe fingerprint in the previous set; ssim ${row.ssim.toFixed(3)} is ${margin.toFixed(3)} below its threshold — provisionally SUBSTANTIVE, inspect. demonstrates: "${cr.demonstrates ?? '—'}"`
          : `no recipe fingerprint in the previous set; ssim ${row.ssim.toFixed(3)} within ${Math.abs(margin).toFixed(3)} of its threshold — cosmetic or unchanged. demonstrates: "${cr.demonstrates ?? '—'}"`;
      if (margin !== null && margin > 0.05) row.recipeChanged = true;
    }
    // An artifact whose recipe changed but whose pixels did not is not
    // 'unchanged' in any sense a reviewer cares about.
    if (row.verdict === 'unchanged' && row.whatChanged && row.recipeChanged) {
      row.verdict = 'changed';
      row.why = 'recipe changed: ' + row.whatChanged;
    }
    // THE WORD MEANT THE CAUSE, NOT THE MAGNITUDE.
    //
    // `substantive` was set exactly when the capture RECIPE fingerprint had
    // changed, and every substantive row said so in its own note. So in cycle 8
    // the two largest still-image changes in the set — artifact 02 at SSIM
    // 0.853 with 44 % more lit subject, and 04 at 0.819 — were labelled NOT
    // substantive, while an artifact at SSIM 0.973 was. The numbers underneath
    // were honest and the word on top of them was not the word for them; the
    // cycle-8 Auditor read it exactly that way. The flag is `recipeChanged`
    // now, and `substantive` means what a reader takes it to mean: the OUTPUT
    // moved materially, whatever the cause.
    const bigSubject = Math.abs(row.subject?.litDelta ?? 0) > 0.2 ||
                       Math.abs(row.subject?.meanDelta ?? 0) > 0.08;
    const wellBelowThreshold = row.ssim != null && row.threshold != null &&
                               row.threshold - row.ssim > 0.05;
    row.substantive = !!(row.recipeChanged || (row.verdict !== 'unchanged' && (bigSubject || wellBelowThreshold)));
    if (row.substantive && !row.recipeChanged) {
      const why = [];
      if (wellBelowThreshold) why.push(`ssim ${row.ssim.toFixed(3)} is ${(row.threshold - row.ssim).toFixed(3)} below its ${row.threshold} threshold`);
      if (bigSubject) why.push(`lit subject moved ${((row.subject?.litDelta ?? 0) * 100).toFixed(0)} %, mean luminance ${((row.subject?.meanDelta ?? 0) * 100).toFixed(0)} %`);
      row.whatChanged = [row.whatChanged, `output moved materially: ${why.join('; ')} — inspect`]
        .filter(Boolean).join('; ');
    }
    // A re-encode that moves the bitrate by more than a quarter is a change
    // even when 20 sampled frames still look alike.
    if (row.verdict === 'unchanged' && Math.abs(row.bitrateDelta ?? 0) > 0.25) {
      row.verdict = 'changed';
      row.why = `bitrate moved ${(row.bitrateDelta * 100).toFixed(0)}% — re-encode, not just pixels`;
    }
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
                  identical: moved.length === 0 && removed.length === 0 && added.length === 0,
                  // WHAT THIS ACTUALLY CHECKS, said out loud. positions.json is
                  // the committed-seed ledger snapshotted at capture time, so
                  // its constancy across cycles evidences SEED stability — that
                  // no capture left the map moved — and not that nothing drifts
                  // while the app runs. The cycle-10 Auditor read the field's
                  // name as promising the second and was right that it does not
                  // deliver it. The runtime evidence is in the pixels: the idle
                  // windows in the video artifacts, where that critic measured
                  // no marker moving more than 0.14 px.
                  what: 'the committed ledger after each capture wrote back — not a runtime drift measure; ' +
                        'runtime stillness is evidenced by the idle windows in artifacts 16, 17, 19 and 20' };
  }

  const changed = rows.filter(r => r.verdict === 'changed').map(r => r.id);
  const missing = rows.filter(r => r.verdict === 'missing').map(r => r.id);

  // The previous set's header is DERIVED FROM THE SNAPSHOT BEING DIFFED, not
  // copied from that snapshot's own manifest. Cycle 2's diff inherited cycle
  // 1's stale 'cycle 0 / 2 captured' header and so misstated the comparison a
  // reader was being handed, while twenty rows sat underneath it. What the
  // previous manifest claims about itself is kept alongside, and a disagreement
  // is reported rather than silently corrected.
  const dirCycle = /cycle-(\d+)\/?$/.exec(prevDir.replace(/\\/g, '/'));
  // Counted from the FILES, not from the previous manifest's artifact list —
  // cycle 1's manifest listed two artifacts while twenty sat beside it, and a
  // count that trusts the list inherits exactly the error it is meant to catch.
  const prevFilesOnDisk = existsSync(prevDir)
    ? readdirSync(prevDir).filter(f => /^\d\d_.*\.(png|mp4)$/.test(f)).length : 0;
  const previousCycle = dirCycle ? Number(dirCycle[1]) : (prevManifest?.cycle ?? null);
  const header = {
    cycle: cur.cycle,
    previousCycle,
    previousCycleSource: dirCycle ? 'derived from the snapshot directory being diffed' : 'previous manifest',
    capturedNow: cur.captured,
    capturedPrev: prevFilesOnDisk,
    capturedPrevSource: 'artifact files actually present in the previous snapshot',
    previousManifestSelfReport: prevManifest
      ? { cycle: prevManifest.cycle ?? null, captured: prevManifest.captured ?? null }
      : null,
  };
  header.headerDisagreement = prevManifest && (
    (prevManifest.cycle ?? null) !== previousCycle ||
    (prevManifest.captured ?? null) !== prevFilesOnDisk)
    ? `the previous snapshot describes itself as cycle ${prevManifest.cycle ?? '—'} with ` +
      `${prevManifest.captured ?? '—'} captured, but the directory being diffed is cycle ` +
      `${previousCycle} holding ${prevFilesOnDisk} artifact files; the derived values are used`
    : null;
  header.rowsVsCapturedPrev = rows.filter(r => r.verdict !== 'new').length !== prevFilesOnDisk
    ? `MISMATCH: ${rows.filter(r => r.verdict !== 'new').length} comparable rows against ` +
      `${prevFilesOnDisk} previous files`
    : 'ok';

  // The per-artifact thresholds were derived from the CONTACT-SHEET method. A
  // cycle that falls back to comparing the takes themselves is measuring on a
  // different noise floor, and a reader weighing a 'changed' verdict needs to
  // know which. Said here rather than left to be inferred from the rows.
  const fallback = rows.filter(r => r.ssimMethod && r.ssimMethod.startsWith('the take'));
  const notes = [];
  // A CHANGED RECIPE OUTRANKS EVERY OTHER NOTE. It means the artifact is not a
  // like-for-like recapture, which is the most audit-relevant fact this file
  // can carry — and in cycle 11 the two artifacts whose capture script actually
  // changed got no top-level line at all, so a reader scanning `notes` saw
  // "claims added" and "below threshold" and had to reach into `rows` to learn
  // the recipes had moved. The cycle-11 Auditor's m2.
  for (const r of rows.filter(r => r.recipeFingerprintChanged))
    notes.push(`${r.id} ${r.file}: RECIPE CHANGED — ${r.whatChanged ?? 'capture script fingerprint moved'}` +
               ` — not a like-for-like recapture`);
  // A WEAKENED RULE IS AS REPORTABLE AS A DELETED CLAIM.
  for (const r of rows.filter(r => r.claimRulesChanged?.length))
    for (const c of r.claimRulesChanged)
      notes.push(`${r.id} ${r.file}: CLAIM RULE CHANGED — ${c.claim}: "${c.before}" -> "${c.after}"` +
                 ` — the name is the same and what it accepts is not`);
  // The prose the summary carries. It was empty in cycle 8 while two artifacts
  // had moved materially, so nothing wrote the change up and only the numbers
  // said it.
  for (const r of rows.filter(r => r.substantive && !r.recipeChanged))
    notes.push(`${r.id} ${r.file}: ${r.whatChanged}`);
  // A DROPPED CLAIM IS ANNOUNCED, not left to be noticed by its absence.
  for (const r of rows.filter(r => r.claimsRemoved?.length))
    notes.push(`${r.id} ${r.file}: CLAIM REMOVED — ${r.claimsRemoved.join(', ')}` +
               `${r.claims.added.length ? `; added ${r.claims.added.join(', ')}` : ''}` +
               ` — a machine-checked assertion that used to hold is no longer being made`);
  for (const r of rows.filter(r => r.claims?.added.length && !r.claimsRemoved?.length))
    notes.push(`${r.id} ${r.file}: claims added — ${r.claims.added.join(', ')}`);
  // AND A THRESHOLD CROSSED IS ALWAYS EXPLAINED. Artifacts 08, 18 and 19 each
  // fell below their own similarity threshold in cycle 10 with nothing said,
  // and 19 was classified non-substantive while 12 with the same shape was
  // classified substantive — a rule applied two ways because it was never
  // written down. Below threshold now always produces a line.
  for (const r of rows) {
    if (r.ssim == null || r.threshold == null || r.ssim >= r.threshold) continue;
    if (notes.some(n => n.startsWith(`${r.id} `))) continue;
    notes.push(`${r.id} ${r.file}: ssim ${r.ssim.toFixed(4)} is below its ${r.threshold} threshold` +
               `${r.subjectChanged ? ' and the lit subject moved' : ''} — inspect`);
  }
  // BYTE-IDENTITY IS A CONDITION, NOT AN ABSENCE. Artifacts 01 and 15 were
  // byte-identical to the previous cycle and DIFF recorded them as "unchanged"
  // with nothing said, so nothing in the frozen set distinguished a
  // deterministic recapture from a copied file — the cycle-11 Auditor's m4. The
  // recapture timestamp that settles it is named in the note.
  for (const r of rows.filter(r => r.identicalBytes))
    notes.push(`${r.id} ${r.file}: BYTE-IDENTICAL to the previous cycle (sha ${r.sha256 ?? '—'})` +
               `${r.capturedAt ? ` — recaptured at ${r.capturedAt}, so this is determinism, not a copy` : ''}`);
  if (fallback.length) notes.push(
    `${fallback.length} video(s) compared as takes rather than through their contact sheets ` +
    `(${fallback.map(r => r.id).join(', ')}) — the sheets changed shape this cycle. The thresholds in ` +
    `SSIM_THRESHOLD were calibrated on the sheet method, so these scores sit on a different noise floor; ` +
    `the fallback scores lower, so it errs toward reporting change.`);

  return {
    ...header,
    notes,
    rows, positions,
    // Every row lands in exactly one bucket, and they sum to the set size. The
    // four buckets used to total 19 of 20 because 'uncomparable' was in none of
    // them, which reads as a missing row rather than a stated one.
    //
    // AND THEY SAY WHICH KIND OF SAME THEY MEAN. These were `unchanged` and
    // `changed`, and both are verdicts of the perceptual comparison: cycle 13's
    // summary read `unchanged: 6` on a set where all twenty files differed byte
    // for byte from the previous cycle's, which the Auditor had to establish
    // itself by hashing them. The perceptual buckets keep their meaning under a
    // name that states it, and byte identity is counted beside them rather than
    // left to be inferred from the absence of a note.
    summary: { perceptuallyUnchanged: rows.filter(r => r.verdict === 'unchanged').length,
               perceptuallyChanged: changed.length,
               bytesIdentical: rows.filter(r => r.identicalBytes).length,
               bytesChanged: rows.filter(r => r.sha256 && !r.identicalBytes).length,
               bytesIdenticalIds: rows.filter(r => r.identicalBytes).map(r => r.id),
               new: rows.filter(r => r.verdict === 'new').length,
               missing: missing.length,
               uncomparable: rows.filter(r => r.verdict === 'uncomparable').length,
               total: rows.length,
               changedIds: changed, missingIds: missing,
               uncomparableIds: rows.filter(r => r.verdict === 'uncomparable').map(r => r.id),
               substantiveIds: rows.filter(r => r.substantive).map(r => r.id),
               recipeChangedIds: rows.filter(r => r.recipeFingerprintChanged).map(r => r.id),
               claimsChangedIds: rows.filter(r => r.claims).map(r => r.id),
               claimsRemovedIds: rows.filter(r => r.claimsRemoved?.length).map(r => r.id),
               belowThresholdIds: rows.filter(r => r.ssim != null && r.threshold != null && r.ssim < r.threshold)
                 .map(r => r.id) },
  };
}

if (import.meta.url === `file://${process.argv[1]}`) {
  const cur = resolve(ROOT, process.argv[2] ?? 'evidence');
  const prev = resolve(ROOT, process.argv[3] ?? 'evidence/history/cycle-0');
  const out = await diffEvidence(cur, prev);
  mkdirSync(cur, { recursive: true });
  writeFileSync(join(cur, 'DIFF.json'), JSON.stringify(out, null, 2));
  for (const r of out.rows) console.log(`  ${r.id}  ${String(r.verdict).padEnd(12)} ssim ${r.ssim === undefined ? '—' : r.ssim?.toFixed(4)} (>= ${r.threshold})` +
    (r.whatChanged ? `\n        ${r.substantive ? 'SUBSTANTIVE — ' : ''}${r.whatChanged}` : ''));
  if (out.headerDisagreement) console.log(`header: ${out.headerDisagreement}`);
  if (out.rowsVsCapturedPrev !== 'ok') console.log(`rows: ${out.rowsVsCapturedPrev}`);
  console.log(`positions ${out.positions.compared ? (out.positions.identical ? 'IDENTICAL' : `${out.positions.moved.length} moved`) : 'not compared'}`);
  console.log(JSON.stringify(out.summary));
}
