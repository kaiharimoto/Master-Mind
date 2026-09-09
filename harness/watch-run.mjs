#!/usr/bin/env node
// A RUN THAT SURVIVES THE THING THAT KEEPS KILLING RUNS.
//
// Long captures in this environment have been killed three times with no error
// and a truncated log — twice by a container restart, once by something that
// left no trace at all, each time inside the longest video take and each time
// while nothing was watching. The capture itself is fine; what was missing was
// anything to notice and resume.
//
// This starts a capture DETACHED from the calling shell (its own session, so a
// closing terminal or a reaped process group does not take it with it), watches
// the log and the output directory for progress, and if neither moves for the
// stall window it kills the process tree and restarts — capturing only the
// artifacts that are still missing, so nothing already done is redone.
//
//   node harness/watch-run.mjs --out evidence --cycle 15
//   node harness/watch-run.mjs --only 16,17,18,19,20 --stall-min 15 --tries 4
//
// Every argument it does not recognise is passed through to run-capture.mjs.
import { spawn } from 'node:child_process';
import { existsSync, readdirSync, statSync, appendFileSync, mkdirSync } from 'node:fs';
import { resolve, dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const argv = process.argv.slice(2);
const arg = (name, dflt) => { const i = argv.indexOf(name); return i >= 0 ? argv[i + 1] : dflt; };
const OUT = resolve(ROOT, arg('--out', 'evidence'));
const STALL_MS = Number(arg('--stall-min', '15')) * 60_000;
const TRIES = Number(arg('--tries', '4'));
const LOG = resolve(ROOT, arg('--log', '.capture-watch.log'));
// Everything except this runner's own switches goes through to the capture.
const OWN = new Set(['--stall-min', '--tries', '--log']);
const pass = [];
for (let i = 0; i < argv.length; i++) {
  if (OWN.has(argv[i])) { i++; continue; }
  pass.push(argv[i]);
}

const say = (m) => {
  const line = `[watch ${new Date().toISOString()}] ${m}`;
  console.log(line);
  try { appendFileSync(LOG, line + '\n'); } catch { /* the log is a convenience */ }
};

/** The 20 ids the set is defined as, and which of them are already on disk. */
const IDS = Array.from({ length: 20 }, (_, i) => String(i + 1).padStart(2, '0'));
const present = () => {
  if (!existsSync(OUT)) return new Set();
  const files = readdirSync(OUT);
  return new Set(IDS.filter(id => files.some(f => f.startsWith(`${id}_`) && /\.(png|mp4)$/.test(f))));
};
/** The most recent moment anything in the output directory changed. */
const lastTouch = () => {
  if (!existsSync(OUT)) return 0;
  let t = 0;
  for (const f of readdirSync(OUT)) {
    try { t = Math.max(t, statSync(join(OUT, f)).mtimeMs); } catch { /* raced with a write */ }
  }
  return t;
};

let tries = 0;
const wanted = () => {
  const only = arg('--only', null);
  return only ? only.split(',').map(s => s.trim()).filter(Boolean) : IDS;
};

const runOnce = (ids) => new Promise((done) => {
  const args = [resolve(ROOT, 'harness/run-capture.mjs'), ...pass.filter((a, i, all) =>
    a !== '--only' && all[i - 1] !== '--only')];
  if (ids.length !== IDS.length) args.push('--only', ids.join(','));
  say(`starting capture of ${ids.length} artifact(s): ${ids.join(',')}`);
  // Its own session: a reaped process group or a closing terminal does not take
  // the capture with it. This is the fix for the three silent deaths.
  const child = spawn(process.execPath, args, {
    cwd: ROOT, detached: true, stdio: ['ignore', 'inherit', 'inherit'],
  });
  let finished = false;
  const stall = setInterval(() => {
    const idle = Date.now() - Math.max(lastTouch(), started);
    if (idle < STALL_MS) return;
    say(`no output for ${Math.round(idle / 60000)} min — killing the process tree and restarting`);
    try { process.kill(-child.pid, 'SIGKILL'); } catch { /* already gone */ }
  }, 30_000);
  const started = Date.now();
  child.on('exit', (code, signal) => {
    if (finished) return;
    finished = true;
    clearInterval(stall);
    done({ code, signal });
  });
});

mkdirSync(OUT, { recursive: true });
while (tries < TRIES) {
  const missing = wanted().filter(id => !present().has(id));
  if (!missing.length) { say('every requested artifact is on disk'); break; }
  tries++;
  const { code, signal } = await runOnce(missing);
  if (code === 0 && !signal) { say('capture exited cleanly'); break; }
  say(`capture ended with code ${code}${signal ? ` signal ${signal}` : ''} — attempt ${tries} of ${TRIES}`);
}
const left = wanted().filter(id => !present().has(id));
if (left.length) {
  say(`GIVING UP with ${left.length} artifact(s) missing: ${left.join(',')} — this is a finding, not a retry loop`);
  process.exit(1);
}
say('done');
