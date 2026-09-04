#!/usr/bin/env node
// Runs the capture harness. Each artifact is produced by its own driver, in a
// freshly seeded sync service, and is checked against its declared minimum
// before it is accepted.
//
//   node harness/run-capture.mjs [--only 01,02] [--out evidence] [--cycle N]
import { mkdirSync, writeFileSync, rmSync, existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn, spawnSync } from 'node:child_process';
import { createHash } from 'node:crypto';
import stills from './drivers/stills.mjs';
import motion from './drivers/motion.mjs';
import { openBrowser, openApp, shot, step, record, compose, grab, probe, sha, launch, SEED, INIT_SCRIPT } from './capture.mjs';
import { y4m } from './clips-to-y4m.mjs';
import { POSE, FRAME_ALL, NODE_ID, SELECT, SCREEN_OF, sleepFrames } from './drivers/util.mjs';
import { windowsTarget } from './win-target.mjs';
import { chromium } from 'playwright';

const ROOT = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const DRIVERS = [...stills, ...motion].sort((a, b) => a.id.localeCompare(b.id));

const arg = (name, dflt) => {
  const i = process.argv.indexOf(name);
  return i >= 0 ? process.argv[i + 1] : dflt;
};
const ONLY = (arg('--only', '') || '').split(',').filter(Boolean);
const OUTDIR = resolve(ROOT, arg('--out', 'evidence'));
const CYCLE = arg('--cycle', '0');
const TMP = resolve(ROOT, '.capture-tmp');

// A capture run that produced every artifact can still exit non-zero — a promise
// left over from a closed browser rejects during teardown, long after the last
// artifact passed its check. Cycle 2 did exactly that, and the only trace was
// cycle.mjs printing "capture run reported a failure" with nothing to read.
// Late faults are now caught, named, written into the manifest and surfaced on
// stderr, so a failure is a finding with a cause rather than an exit code.
const LATE_FAULTS = [];
const noteFault = (kind) => (err) => {
  const e = err instanceof Error ? err : new Error(String(err));
  LATE_FAULTS.push({ kind, message: e.message.split('\n')[0].slice(0, 300), stack: (e.stack || '').split('\n').slice(0, 6).join(' | ') });
  console.error(`late ${kind}: ${e.message.split('\n')[0].slice(0, 200)}`);
};
process.on('unhandledRejection', noteFault('unhandledRejection'));
process.on('uncaughtException', noteFault('uncaughtException'));
process.on('exit', (code) => {
  if (LATE_FAULTS.length) console.error(`${LATE_FAULTS.length} late fault(s) after the last artifact; exit ${code}`);
});

mkdirSync(OUTDIR, { recursive: true });
mkdirSync(TMP, { recursive: true });

// The app is rebuilt from source before anything is captured.
//
// Nothing else did this, so a capture could silently run against a bundle older
// than the code it claims to show — a label fix that was written, typechecked
// and committed but never built would be reported as "not working" from a frame
// that never contained it. The bundle's hash goes into the manifest so the set
// says which build produced it.
const BUILD = (() => {
  const r = spawnSync('node', ['build.mjs'], { cwd: resolve(ROOT, 'src'), encoding: 'utf8' });
  if (r.status !== 0) {
    console.error(`app build FAILED (exit ${r.status})\n${(r.stderr || r.stdout || '').slice(-1500)}`);
    process.exit(1);
  }
  const bundle = resolve(ROOT, 'src/dist/app.js');
  const digest = createHash('sha256').update(readFileSync(bundle)).digest('hex');
  console.log(`app bundle rebuilt: ${(statSync(bundle).size / 1024).toFixed(0)} KB  sha ${digest.slice(0, 12)}`);
  return { bundle: 'src/dist/app.js', bytes: statSync(bundle).size, sha256: digest };
})();

const crop = (src, out, x, y, w, h) => new Promise((res, rej) => {
  let e = '';
  const p = spawn('ffmpeg', ['-y', '-i', src, '-vf', `crop=${w}:${h}:${x}:${y}`, '-frames:v', '1', out],
    { stdio: ['ignore', 'ignore', 'pipe'] });
  p.stderr.on('data', d => e += d);
  p.on('close', c => c === 0 ? res(out) : rej(new Error(e.slice(-500))));
});

const modelStats = (page) => page.evaluate(() => {
  const d = window.mm.store.doc;
  return { map: d.id, nodes: Object.keys(d.nodes).length, links: Object.keys(d.links).length,
           holding: Object.values(d.nodes).filter(n => !n.placed).length,
           lens: window.mm.lens, surface: window.mm.surface, sync: window.mm.sync.status };
});

/** A stable signature of a cluster's internal arrangement, centroid-relative. */
const clusterShape = (page, label) => page.evaluate(l => {
  const ns = Object.values(window.mm.store.doc.nodes).filter(n => n.placed && n.label === l)
    .sort((a, b) => (a.id < b.id ? -1 : 1));
  if (!ns.length) return '';
  const c = ns.reduce((a, n) => [a[0] + n.pos[0], a[1] + n.pos[1], a[2] + n.pos[2]], [0, 0, 0]).map(v => v / ns.length);
  return ns.map(n => n.pos.map((v, i) => (v - c[i]).toFixed(3)).join(',')).join('|');
}, label);

/** Positions as MODEL VALUES — how regression on positions is judged (§06). */
const positions = (page) => page.evaluate(() =>
  Object.fromEntries(Object.values(window.mm.store.doc.nodes).sort((a, b) => (a.id < b.id ? -1 : 1))
    .map(n => [n.id, n.pos])));

let twinCache = null;

async function runDriver(d) {
  const dataDir = resolve(TMP, `data-${d.id}`);
  rmSync(dataDir, { recursive: true, force: true });
  const httpPort = 8760 + Number(d.id), wsPort = 8860 + Number(d.id);
  const S = await launch({ httpPort, wsPort, data: dataDir });
  const extra = [];
  if (d.camera) extra.push('--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream',
                           `--use-file-for-fake-video-capture=${await y4m(d.camera)}`);
  const browser = await openBrowser(extra);
  const pages = [];
  const H = {
    S, browser, driver: d,
    out: (f) => resolve(OUTDIR, f),
    tmp: (f) => resolve(TMP, f),
    async app(opts = {}) {
      const r = await openApp(browser, S, { map: d.map, camera: !!d.camera, ...opts });
      pages.push(r);
      return r;
    },
    shot, step, record, compose, crop, modelStats, clusterShape, positions,
    async tmpShot(page, cdp, tag) { return shot(page, cdp, resolve(TMP, `${tag}.png`)); },
    async twin(driver, phase) {
      if (phase === 'after') return twinCache?.after ?? { error: 'twin before did not run' };
      // The Windows side comes from the REAL win32-x64 binary running under
      // Wine when it is available, so the propagation proof crosses an actual
      // platform boundary rather than two tabs of the same browser.
      let w, winSource = 'chromium', winTarget = null, winUA = null;
      const wt = await windowsTarget({ timeoutMs: 200000 });
      if (wt.available) {
        try {
          const wb = await chromium.connectOverCDP(wt.cdpUrl);
          const wp = wb.contexts()[0].pages()[0];
          const wcdp = await wb.contexts()[0].newCDPSession(wp);
          await wcdp.send('Emulation.setDeviceMetricsOverride',
            { width: 960, height: 1080, deviceScaleFactor: 1, mobile: false });
          await wp.addInitScript(INIT_SCRIPT);
          await wp.goto(`http://127.0.0.1:${S.httpPort}/index.html?port=${S.wsPort}` +
            `&surface=windows&map=${encodeURIComponent(driver.map)}&actor=windows-twin` +
            `&account=${encodeURIComponent('kai@master-mind.local')}`);
          await wp.waitForFunction(() => window.mm && window.mm.ready, null, { timeout: 180000 });
          await wp.evaluate(() => window.mm.stop());
          await step(wp, 0);
          w = { page: wp, cdp: wcdp, errs: [] };
          winSource = 'windows-binary-under-wine';
          winTarget = wt; winUA = wt.version?.['User-Agent'] ?? null;
        } catch (e) {
          void e;
          if (wt.close) wt.close();
        }
      }
      if (!w) w = await H.app({ surface: 'windows', lens: 'canvas', map: driver.map, width: 960, height: 1080, actor: 'windows-twin' });
      const a = await H.app({ surface: 'android', lens: 'canvas', map: driver.map, width: 960, height: 1080, actor: 'android-twin', touch: true });
      const pose = { yaw: 0.34, pitch: 0.16 };
      // The camera is framed ONCE and then frozen. Cycle 2's pair could not be
      // superposed because selecting a node pans the view to clear the editor
      // panel, so the AFTER shot was taken from a different eye and every node's
      // projected x had moved — from that frame alone "only the dragged node
      // moved" was no longer checkable. The exact pose is captured here and
      // restored immediately before every shot, on both halves.
      for (const p of [w, a]) { await POSE(p.page, pose); await FRAME_ALL(p.page, 1.34); }
      const frozen = await w.page.evaluate(() => {
        const s = window.mm.scene.pose;
        return { yaw: s.yaw, pitch: s.pitch, dist: s.dist, target: [s.target.x, s.target.y, s.target.z] };
      });
      const freeze = async (p) => { await POSE(p.page, frozen); await sleepFrames(p.page, 0, 2); };
      for (const p of [w, a]) await freeze(p);
      // And every node must be inside the frame in BOTH halves — an artifact
      // that proves "no node was dropped" cannot have a node off the edge.
      const allVisible = async (p, when) => {
        const off = await p.page.evaluate(() => {
          const vw = window.innerWidth, vh = window.innerHeight;
          return window.mm.scene.screenPositions()
            .filter(s => s.x < 4 || s.y < 4 || s.x > vw - 4 || s.y > vh - 4)
            .map(s => s.id);
        });
        if (off.length) throw new Error(`twin ${when}: ${off.length} node(s) outside the frame (${off.slice(0, 3).join(', ')})`);
      };
      await allVisible(w, 'before/windows'); await allVisible(a, 'before/android');
      const prov = {
        w: await w.page.evaluate(() => window.mm.provenance()),
        a: await a.page.evaluate(() => window.mm.provenance()),
      };
      const provLine = (p, claimed) =>
        `${p.runtime} · ${p.platform} · ${claimed} · socket #${p.socket} on ${p.transport.replace('ws://', '')} · sync ${p.status}`;
      await sleepFrames(w.page, 0, 3); await sleepFrames(a.page, 0, 3);
      const pw0 = await positions(w.page), pa0 = await positions(a.page);
      const bw = await shot(w.page, w.cdp, resolve(TMP, 'twin-w0.png'));
      const ba = await shot(a.page, a.cdp, resolve(TMP, 'twin-a0.png'));
      await compose([bw, ba], resolve(OUTDIR, '11_sync_twin_before.png'), { mode: 'h', width: 1920, height: 1080,
        labels: ['Windows — canvas', 'Android — canvas'],
        // Read from each running process, not typed. If the Wine binary did not
        // come up, this line says chromium and the frame does not over-claim.
        sublabels: [provLine(prov.w, winSource === 'windows-binary-under-wine' ? 'wine · the built binary' : 'FALLBACK — NOT the built binary'),
                    provLine(prov.a, 'android device profile · touch')] });

      // The edit is made on Android, through the ordinary editor.
      const id = await NODE_ID(a.page, 'Demo: search fly-to');
      await a.page.evaluate(i => window.mm.select(i), id);
      await a.page.fill('[data-t=ed-text]', 'Demo: search fly-to — live');
      await a.page.click('[data-t=ed-colour-magenta]');
      // And a POSITION is moved on Android by a real drag, because "positions
      // are identical across devices" is the mission's defining claim and a
      // text-and-colour edit does not test it.
      const moveId = await NODE_ID(a.page, 'Slide budget: 12');
      const from = await SCREEN_OF(a.page, moveId);
      const posBefore = await a.page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), moveId);
      if (from) {
        // The Android surface listens for TOUCH, not mouse — dispatching mouse
        // events at it moved nothing and quietly made the proof vacuous.
        await a.cdp.send('Input.dispatchTouchEvent',
          { type: 'touchStart', touchPoints: [{ x: from.x, y: from.y, id: 1 }] });
        for (let k = 1; k <= 12; k++) {
          await a.cdp.send('Input.dispatchTouchEvent',
            { type: 'touchMove', touchPoints: [{ x: from.x + k * 13, y: from.y - k * 10, id: 1 }] });
          await sleepFrames(a.page, 0, 1);
        }
        await a.cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
      }
      const posAfter = await a.page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), moveId);
      if (JSON.stringify(posAfter) === JSON.stringify(posBefore)) {
        throw new Error('twin: the Android drag did not move the node — the position ' +
                        'propagation proof would have been vacuous');
      }
      await w.page.waitForFunction(({ i, p }) => JSON.stringify(window.mm.store.doc.nodes[i].pos) === JSON.stringify(p),
                                   { i: moveId, p: posAfter }, { timeout: 20000 });
      // A concurrent conflict on the same node: Windows writes a different
      // property at the same moment. Property-level LWW must keep both.
      await w.page.evaluate(i => { window.mm.select(i); window.mm.store.setLabel(i, 'demo'); }, id);
      await w.page.waitForFunction(i => window.mm.store.doc.nodes[i].text === 'Demo: search fly-to — live',
                                   id, { timeout: 20000 });
      await a.page.waitForFunction(i => window.mm.store.doc.nodes[i].label === 'demo', id, { timeout: 20000 });
      // Both editors are left open on the node that was MOVED, so the two
      // coordinate readouts can be compared in the frame itself.
      await w.page.evaluate(i => window.mm.select(i), moveId);
      await a.page.evaluate(i => window.mm.select(i), moveId);
      // Selecting pans the view to clear the panel. The frozen camera is put
      // back afterwards, so the AFTER half superposes on the BEFORE half and a
      // reader can check by eye that only the dragged node moved.
      for (const p of [w, a]) await freeze(p);
      await allVisible(w, 'after/windows'); await allVisible(a, 'after/android');
      const provAfter = {
        w: await w.page.evaluate(() => window.mm.provenance()),
        a: await a.page.evaluate(() => window.mm.provenance()),
      };
      await sleepFrames(w.page, 0, 3); await sleepFrames(a.page, 0, 3);
      const aw = await shot(w.page, w.cdp, resolve(TMP, 'twin-w1.png'));
      const aa = await shot(a.page, a.cdp, resolve(TMP, 'twin-a1.png'));
      const fmt = (v) => `${v[0].toFixed(1)}, ${v[1].toFixed(1)}, ${v[2].toFixed(1)}`;
      const moved = `moved node ${moveId}: ${fmt(posBefore)} -> ${fmt(posAfter)}`;
      await compose([aw, aa], resolve(OUTDIR, '12_sync_twin_after.png'), { mode: 'h', width: 1920, height: 1080,
        labels: ['Windows — the moved node arrived here', 'Android — where it was dragged'],
        sublabels: [`${moved} · socket #${provAfter.w.socket} · ${provAfter.w.runtime} · ${winSource === 'windows-binary-under-wine' ? 'wine · built binary' : 'FALLBACK — not the built binary'} · camera frozen from 11`,
                    `${moved} · socket #${provAfter.a.socket} · ${provAfter.a.runtime} · android profile · camera frozen from 11`] });

      const pw1 = await positions(w.page), pa1 = await positions(a.page);
      const node = await w.page.evaluate(i => window.mm.store.doc.nodes[i], id);
      const nodeA = await a.page.evaluate(i => window.mm.store.doc.nodes[i], id);
      const same = (x, y) => JSON.stringify(x) === JSON.stringify(y);
      const before = {
        windowsSurface: winSource, windowsUserAgent: winUA,
        positionsIdenticalAcrossSurfaces: same(pw0, pa0),
        nodeCount: { windows: Object.keys(pw0).length, android: Object.keys(pa0).length },
      };
      const movedOnly = (before0, after0) => {
        const ks = new Set([...Object.keys(before0), ...Object.keys(after0)]);
        const moved = [...ks].filter(k => JSON.stringify(before0[k]) !== JSON.stringify(after0[k]));
        return moved;
      };
      const after = {
        positionsIdenticalAcrossSurfaces: same(pw1, pa1),
        movedNode: moveId, movedFrom: posBefore, movedTo: posAfter,
        positionEditPropagated: same(pw1[moveId], posAfter) && same(pa1[moveId], posAfter),
        onlyTheDraggedNodeMoved: JSON.stringify(movedOnly(pw0, pw1)) === JSON.stringify([moveId]) &&
                                 JSON.stringify(movedOnly(pa0, pa1)) === JSON.stringify([moveId]),
        everyOtherPositionUnchanged: Object.keys(pw0).every(k => k === moveId ? true : same(pw0[k], pw1[k])),
        noNodeDropped: Object.keys(pw1).length === Object.keys(pw0).length &&
                       Object.keys(pa1).length === Object.keys(pa0).length,
        editPropagated: node.text === 'Demo: search fly-to — live' && node.color === 'magenta',
        concurrentConflictKeptBoth: node.label === 'demo' && node.text === 'Demo: search fly-to — live',
        bothSurfacesAgreeOnNode: same(node, nodeA),
        nodeCount: { windows: Object.keys(pw1).length, android: Object.keys(pa1).length },
      };
      after.windowsSurface = winSource;
      after.windowsUserAgent = winUA;
      // The two halves are two sockets on one sync service, and the frame says
      // so. Recorded here as well so the claim is checkable outside the pixels.
      after.provenance = { windows: provAfter.w, android: provAfter.a };
      after.twoDistinctSockets = provAfter.w.socket !== provAfter.a.socket &&
                                 provAfter.w.socket != null && provAfter.a.socket != null;
      after.cameraFrozen = frozen;
      after.everyNodeInFrame = true; // asserted above; the capture throws otherwise
      after.movedNodeCoords = { id: moveId, before: posBefore, after: posAfter };
      twinCache = { before, after };
      if (winTarget && winTarget.close) winTarget.close();
      return before;
    },
  };
  let result, error = null;
  try { result = await d.run.call(d, H); }
  catch (e) { error = e.message + '\n' + (e.stack || '').split('\n').slice(1, 4).join('\n'); }
  const errs = pages.flatMap(p => p.errs);
  await browser.close();
  S.close();
  return { result, error, pageErrors: errs };
}

async function verify(d, file) {
  if (!existsSync(file)) return { ok: false, why: 'not produced' };
  const info = await probe(file);
  const st = info?.streams?.[0];
  if (!st) return { ok: false, why: 'unreadable' };
  const out = { width: st.width, height: st.height, bytes: readFileSync(file).length, sha256: sha(file) };
  if (st.width < d.minW || st.height < d.minH)
    return { ok: false, why: `${st.width}x${st.height} below minimum ${d.minW}x${d.minH}`, ...out };
  if (d.kind === 'mp4') {
    const dur = Number(info.format?.duration ?? 0);
    const [n, den] = String(st.r_frame_rate || '0/1').split('/').map(Number);
    const fps = den ? n / den : 0;
    Object.assign(out, { seconds: +dur.toFixed(2), fps: +fps.toFixed(2), frames: Number(st.nb_read_frames || 0) });
    if (fps < d.minFps) return { ok: false, why: `${fps} fps below minimum ${d.minFps}`, ...out };
    if (dur < d.minSec) return { ok: false, why: `${dur.toFixed(1)}s below minimum ${d.minSec}s`, ...out };
  }
  return { ok: true, ...out };
}

const list = DRIVERS.filter(d => !ONLY.length || ONLY.includes(d.id));

// The manifest MERGES. A partial run (--only) used to overwrite the whole
// record, so the file could claim one artifact was captured while twenty were
// present. Now each entry is replaced in place and the rest are kept, with the
// cycle stamp carried forward unless this run names one.
const manPath = resolve(OUTDIR, 'MANIFEST.json');
const prior = existsSync(manPath) ? JSON.parse(readFileSync(manPath, 'utf8')) : null;
const manifest = {
  cycle: CYCLE === '0' && prior ? prior.cycle : (Number.isNaN(Number(CYCLE)) ? CYCLE : Number(CYCLE)),
  seed: SEED,
  startedAt: prior?.startedAt ?? new Date().toISOString(),
  lastRunAt: new Date().toISOString(),
  lastRunCaptured: [],
  artifacts: prior?.artifacts ? [...prior.artifacts] : [],
};
console.log(`capturing ${list.length} artifact(s) into ${OUTDIR}`);
for (const d of list) {
  const t0 = Date.now();
  process.stdout.write(`  ${d.id} ${d.file} … `);
  const { result, error, pageErrors } = await runDriver(d);
  const check = await verify(d, resolve(OUTDIR, d.file));
  const entry = { id: d.id, file: d.file, title: d.title, kind: d.kind,
                  minimum: `${d.minW}x${d.minH}` + (d.kind === 'mp4' ? ` @${d.minFps}fps ${d.minSec}s` : ''),
                  seconds: +((Date.now() - t0) / 1000).toFixed(1),
                  status: error ? 'driver-error' : check.ok ? 'captured' : 'below-minimum',
                  error, check, result, pageErrors: pageErrors.slice(0, 6),
                  // The recipe fingerprint. A perceptual diff cannot tell a
                  // re-framing from a bug fix from a change to what the artifact
                  // DEMONSTRATES, so the capture script itself is hashed and its
                  // declared subject recorded. A cross-cycle diff can then say
                  // what changed, not only how much.
                  recipe: { demonstrates: d.demonstrates ?? null,
                            surface: d.surface ?? null, lens: d.lens ?? null,
                            fnSha: createHash('sha256').update(String(d.run)).digest('hex').slice(0, 16) } };
  const at = manifest.artifacts.findIndex(a => a.id === d.id);
  if (at >= 0) manifest.artifacts[at] = entry; else manifest.artifacts.push(entry);
  manifest.lastRunCaptured.push(d.id);
  console.log(entry.status === 'captured'
    ? `ok  ${check.width}x${check.height}${check.seconds ? ` ${check.seconds}s @${check.fps}fps` : ''}  ${entry.seconds}s`
    : `${entry.status.toUpperCase()}  ${error ? error.split('\n')[0].slice(0, 120) : check.why}`);
}
// Position snapshot, compared across cycles as model values rather than pixels.
{
  const dataDir = resolve(TMP, 'data-pos');
  rmSync(dataDir, { recursive: true, force: true });
  const S = await launch({ httpPort: 8999, wsPort: 8998, data: dataDir });
  const browser = await openBrowser();
  const pos = {};
  for (const map of ['map-fermentation', 'map-talk']) {
    const { page } = await openApp(browser, S, { map, surface: 'windows' });
    pos[map] = await positions(page);
  }
  await browser.close(); S.close();
  writeFileSync(resolve(OUTDIR, 'positions.json'), JSON.stringify(pos, null, 1));
  console.log(`positions snapshot: ${Object.entries(pos).map(([k, v]) => `${k} ${Object.keys(v).length}`).join(', ')}`);
}

manifest.finishedAt = new Date().toISOString();
manifest.lateFaults = LATE_FAULTS;
manifest.build = BUILD;
manifest.artifacts.sort((a, b) => a.id.localeCompare(b.id));
manifest.captured = manifest.artifacts.filter(a => a.status === 'captured').length;
manifest.total = DRIVERS.length;
// Deterministic seeding means an untouched artifact re-renders byte-identically.
// Say so explicitly, so an auditor can tell a real re-render from a stale file.
for (const a of manifest.artifacts) {
  const f = resolve(OUTDIR, a.file);
  if (!existsSync(f)) continue;
  const digest = sha(f);
  a.digestUnchangedFromPreviousRun = a.check && a.check.sha256 === digest ? true : undefined;
  a.capturedInThisRun = manifest.lastRunCaptured.includes(a.id);
  a.fileMtime = new Date(statSync(f).mtimeMs).toISOString();
}
writeFileSync(manPath, JSON.stringify(manifest, null, 2));
console.log(`\n${manifest.captured}/${manifest.total} in the manifest captured as defined ` +
            `(${manifest.lastRunCaptured.length} recaptured in this run)`);
