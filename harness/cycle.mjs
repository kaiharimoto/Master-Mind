#!/usr/bin/env node
// One review cycle: archive the previous set, recapture all 20 by running each
// artifact's own recipe, lay the videos out as frames, diff against the
// previous cycle, and write the three critic briefs.
//
//   node harness/cycle.mjs <cycleNumber> [--skip-capture]
import { cpSync, mkdirSync, existsSync, readdirSync, rmSync, writeFileSync, readFileSync, statSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import { diffEvidence } from './diff-evidence.mjs';
import { build as buildBriefs } from './critic-brief.mjs';
import { sheet } from './contact-sheets.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const EV = resolve(ROOT, 'evidence');
const cycle = Number(process.argv[2] ?? 1);
const skipCapture = process.argv.includes('--skip-capture');
// THE PREVIOUS CYCLE IS THE FROZEN SET THE CRITICS READ, not whatever was in
// evidence/ when this cycle started.
//
// history/cycle-N is a snapshot of the WORKING directory taken at the start of
// cycle N+1, so every artifact recaptured between the two cycles was already
// in it — and the cross-cycle diff, which is the regression instrument the
// Auditor's verdict rests on, silently skipped exactly the artifacts that had
// changed. Cycle 7 reported 5 of 20 changed when the true figure against the
// frozen cycle-6 set was 20. See report.md F-026.
const frozenPrev = resolve(EV, `cycles/cycle-${cycle - 1}`);
const historyPrev = resolve(EV, `history/cycle-${cycle - 1}`);
const prevDir = existsSync(join(frozenPrev, 'MANIFEST.json')) ? frozenPrev : historyPrev;

let lastRun = null;
const run = (args) => {
  const r = spawnSync('node', args, { cwd: ROOT, stdio: 'inherit' });
  lastRun = { status: r.status, signal: r.signal };
  return r.status === 0;
};

// 1. Archive whatever is currently in evidence/ — the working set, which is
//    NOT the previous cycle and is no longer used as one (F-026). It goes to
//    history/ so a run can be reconstructed; the diff reads the frozen set.
//    Archiving into prevDir was fine while prevDir WAS history/; once prevDir
//    became the frozen directory it meant copying evidence/cycles/ into a
//    subdirectory of itself, which is where cycle 8's first run stopped.
if (!skipCapture && existsSync(join(EV, 'MANIFEST.json'))) {
  mkdirSync(historyPrev, { recursive: true });
  for (const f of readdirSync(EV)) {
    if (['history', 'coldstart', 'critic-briefs', 'sheets', 'cycles', 'critics'].includes(f)) continue;
    cpSync(join(EV, f), join(historyPrev, f), { recursive: true });
  }
  if (existsSync(join(EV, 'sheets'))) cpSync(join(EV, 'sheets'), join(historyPrev, 'sheets'), { recursive: true });
  console.log(`archived the working set to evidence/history/cycle-${cycle - 1}`);
}

// 2. Recapture the whole fixed set.
if (!skipCapture) {
  rmSync(resolve(ROOT, '.capture-tmp'), { recursive: true, force: true });
  if (!run([resolve(ROOT, 'harness/run-capture.mjs'), '--cycle', String(cycle)])) {
    console.error(`capture run reported a failure (exit ${lastRun.status}${lastRun.signal ? `, signal ${lastRun.signal}` : ''}) ` +
                  '— continuing so the cycle is still diffable; see MANIFEST.lateFaults');
  }
}

// 3. Contact sheets, so video evidence can be inspected rather than trusted.
mkdirSync(join(EV, 'sheets'), { recursive: true });
for (const f of readdirSync(EV)) {
  if (!f.endsWith('.mp4')) continue;
  await sheet(join(EV, f), join(EV, 'sheets', f.replace('.mp4', '_sheet.png')));
}
console.log('contact sheets written');

// 3b. A FROZEN SET IS IMMUTABLE, and that is checked rather than assumed.
//
// Cycle 8's first run archived the working set into the frozen cycle-7
// directory — the set three critics had already reviewed — and stopped only
// because the copy eventually became structurally impossible, not because
// anything was guarding it. It got far enough first: 15 of cycle 7's frozen
// files were overwritten with cycle 8's working copies, and I committed that
// overwrite before noticing. The corruption surfaced two steps later, when the
// cycle-8 Audience critic reported four artifacts as byte-identical to cycle 7
// — they were identical because cycle 7's copies had been replaced by cycle
// 8's. Restored with `git checkout f1d5805 -- evidence/cycles/cycle-7`.
// The guard exists so the next time is caught by a check rather than by a
// critic: every file in the set being diffed against must still hash to what
// the ledger recorded, or the cycle stops.
// THE LEDGER LIVES OUTSIDE THE SET IT DESCRIBES.
//
// The first version of this guard compared the frozen directory against the
// MANIFEST.json *inside that directory* — so when the whole directory was
// overwritten, manifest and artifacts were replaced together, the comparison
// was self-consistent, and it reported the set intact. It was not: cycle 7's
// frozen set had been replaced by the working set, and the check I trusted
// could not have told me. A ledger written beside the directory rather than in
// it is comparable to something the overwrite does not carry with it.
const ledgerPath = (n) => resolve(EV, `cycles/cycle-${n}.sha256`);

const writeLedger = (dir, n) => {
  const lines = [];
  const walk = (d, rel) => {
    for (const f of readdirSync(d).sort()) {
      const p = join(d, f), r = rel ? `${rel}/${f}` : f;
      if (statSync(p).isDirectory()) walk(p, r);
      else lines.push(`${createHash('sha256').update(readFileSync(p)).digest('hex')}  ${r}`);
    }
  };
  walk(dir, '');
  writeFileSync(ledgerPath(n), lines.join('\n') + '\n');
  return lines.length;
};

const want_n = (n) => readFileSync(ledgerPath(n), 'utf8').trim().split('\n').filter(Boolean).length;

const verifyFrozen = (dir, n) => {
  const lp = ledgerPath(n);
  if (!existsSync(lp)) return null;
  const want = new Map(readFileSync(lp, 'utf8').trim().split('\n')
    .filter(Boolean).map(l => { const i = l.indexOf('  '); return [l.slice(i + 2), l.slice(0, i)]; }));
  const bad = [];
  for (const [rel, sha] of want) {
    const f = join(dir, rel);
    if (!existsSync(f)) { bad.push(`${rel} MISSING`); continue; }
    const h = createHash('sha256').update(readFileSync(f)).digest('hex');
    if (h !== sha) bad.push(`${rel} ${h.slice(0, 12)} != ${sha.slice(0, 12)}`);
  }
  return bad;
};
{
  const bad = prevDir === frozenPrev ? verifyFrozen(prevDir, cycle - 1) : null;
  if (bad === null) console.log(`no ledger for cycle-${cycle - 1}; cannot verify the set being diffed against`);
  else if (bad.length) {
    console.error(`FROZEN SET ALTERED — evidence/cycles/cycle-${cycle - 1} no longer matches its ledger:`);
    for (const b of bad) console.error('  ' + b);
    console.error('Refusing to diff against a set that has changed since it was reviewed.');
    process.exit(2);
  } else console.log(`frozen cycle-${cycle - 1} set verified against its external ledger: all ${want_n(cycle - 1)} files match`);
}

// 4. Diff against the previous cycle.
const diff = await diffEvidence(EV, prevDir);
writeFileSync(join(EV, 'DIFF.json'), JSON.stringify(diff, null, 2));
console.log(`diff vs cycle-${cycle - 1} (${prevDir === frozenPrev ? 'frozen set' : 'working snapshot — no frozen set found'}): ${JSON.stringify(diff.summary)}`);
console.log(`positions: ${diff.positions.compared ? (diff.positions.identical ? 'IDENTICAL' : `${diff.positions.moved.length} MOVED`) : 'no previous set'}`);

// 5. Freeze the set the critics read.
//
// In cycle 1 the critics read the live evidence/ directory while fixes were
// being recaptured into it, and one of them opened a half-written file. A
// cycle's set is now snapshotted to an immutable directory first, and the
// briefs point THERE — so the builder can keep working without moving the
// ground under a review.
const frozen = resolve(EV, `cycles/cycle-${cycle}`);
rmSync(frozen, { recursive: true, force: true });
mkdirSync(frozen, { recursive: true });
for (const f of readdirSync(EV)) {
  if (['history', 'coldstart', 'critic-briefs', 'cycles', 'critics'].includes(f)) continue;
  cpSync(join(EV, f), join(frozen, f), { recursive: true });
}
const ledgerCount = writeLedger(frozen, cycle);
console.log(`froze the cycle-${cycle} set at evidence/cycles/cycle-${cycle} · ledger of ${ledgerCount} files at cycles/cycle-${cycle}.sha256`);

// 6. Critic briefs, pointed at the frozen set.
const briefs = buildBriefs(cycle, frozen, prevDir);
console.log('critic briefs:');
for (const b of briefs) console.log('  ' + b.replace(ROOT + '/', ''));

// A compact, evidence-only summary of what was captured — for the builder, not
// for the critics.
const man = JSON.parse(readFileSync(join(EV, 'MANIFEST.json'), 'utf8'));
const bad = man.artifacts.filter(a => a.status !== 'captured');
console.log(`\ncycle ${cycle}: ${man.captured}/${man.total} captured as defined`);
if (bad.length) for (const b of bad) console.log(`  ${b.status}  ${b.id} ${b.file}  ${b.error ? b.error.split('\n')[0].slice(0, 140) : b.check?.why}`);
