#!/usr/bin/env node
// One review cycle: archive the previous set, recapture all 20 by running each
// artifact's own recipe, lay the videos out as frames, diff against the
// previous cycle, and write the three critic briefs.
//
//   node harness/cycle.mjs <cycleNumber> [--skip-capture]
import { cpSync, mkdirSync, existsSync, readdirSync, rmSync, writeFileSync, readFileSync } from 'node:fs';
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
// because the copy was structurally impossible, not because anything was
// guarding it. Nothing was lost that time. The guard exists so that the next
// time is not a matter of luck: every artifact in the set being diffed against
// must still hash to what its own manifest recorded, or the cycle stops.
const verifyFrozen = (dir) => {
  const mf = join(dir, 'MANIFEST.json');
  if (!existsSync(mf)) return null;
  const m = JSON.parse(readFileSync(mf, 'utf8'));
  const bad = [];
  for (const a of m.artifacts ?? []) {
    const f = join(dir, a.file);
    if (!a.check?.sha256) continue;
    if (!existsSync(f)) { bad.push(`${a.id} missing`); continue; }
    const h = createHash('sha256').update(readFileSync(f)).digest('hex');
    if (h !== a.check.sha256) bad.push(`${a.id} ${a.file} sha ${h.slice(0, 12)} != ${a.check.sha256.slice(0, 12)}`);
  }
  return bad;
};
{
  const bad = verifyFrozen(prevDir);
  if (bad === null) console.log(`no frozen cycle-${cycle - 1} set to verify`);
  else if (bad.length) {
    console.error(`FROZEN SET ALTERED — evidence/cycles/cycle-${cycle - 1} no longer matches its own manifest:`);
    for (const b of bad) console.error('  ' + b);
    console.error('Refusing to diff against a set that has changed since it was reviewed.');
    process.exit(2);
  } else console.log(`frozen cycle-${cycle - 1} set verified: every artifact matches its recorded hash`);
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
console.log(`froze the cycle-${cycle} set at evidence/cycles/cycle-${cycle}`);

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
