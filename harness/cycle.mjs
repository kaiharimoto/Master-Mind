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
import { diffEvidence } from './diff-evidence.mjs';
import { build as buildBriefs } from './critic-brief.mjs';
import { sheet } from './contact-sheets.mjs';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const EV = resolve(ROOT, 'evidence');
const cycle = Number(process.argv[2] ?? 1);
const skipCapture = process.argv.includes('--skip-capture');
const prevDir = resolve(EV, `history/cycle-${cycle - 1}`);

const run = (args) => spawnSync('node', args, { cwd: ROOT, stdio: 'inherit' }).status === 0;

// 1. Archive whatever is currently in evidence/ as the previous cycle.
if (!skipCapture && existsSync(join(EV, 'MANIFEST.json'))) {
  mkdirSync(prevDir, { recursive: true });
  for (const f of readdirSync(EV)) {
    if (['history', 'coldstart', 'critic-briefs', 'sheets'].includes(f)) continue;
    cpSync(join(EV, f), join(prevDir, f), { recursive: true });
  }
  if (existsSync(join(EV, 'sheets'))) cpSync(join(EV, 'sheets'), join(prevDir, 'sheets'), { recursive: true });
  console.log(`archived the previous set to evidence/history/cycle-${cycle - 1}`);
}

// 2. Recapture the whole fixed set.
if (!skipCapture) {
  rmSync(resolve(ROOT, '.capture-tmp'), { recursive: true, force: true });
  if (!run([resolve(ROOT, 'harness/run-capture.mjs'), '--cycle', String(cycle)])) {
    console.error('capture run reported a failure — continuing so the cycle is still diffable');
  }
}

// 3. Contact sheets, so video evidence can be inspected rather than trusted.
mkdirSync(join(EV, 'sheets'), { recursive: true });
for (const f of readdirSync(EV)) {
  if (!f.endsWith('.mp4')) continue;
  await sheet(join(EV, f), join(EV, 'sheets', f.replace('.mp4', '_sheet.png')));
}
console.log('contact sheets written');

// 4. Diff against the previous cycle.
const diff = await diffEvidence(EV, prevDir);
writeFileSync(join(EV, 'DIFF.json'), JSON.stringify(diff, null, 2));
console.log(`diff vs cycle-${cycle - 1}: ${JSON.stringify(diff.summary)}`);
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
  if (['history', 'coldstart', 'critic-briefs', 'cycles'].includes(f)) continue;
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
