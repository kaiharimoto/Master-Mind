#!/usr/bin/env node
// Runs the capture harness. Each artifact is produced by its own driver, in a
// freshly seeded sync service, and is checked against its declared minimum
// before it is accepted.
//
//   node harness/run-capture.mjs [--only 01,02] [--out evidence] [--cycle N]
import { mkdirSync, writeFileSync, rmSync, existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawn } from 'node:child_process';
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

mkdirSync(OUTDIR, { recursive: true });
mkdirSync(TMP, { recursive: true });

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
      for (const p of [w, a]) { await POSE(p.page, pose); await FRAME_ALL(p.page, 1.18); }
      await sleepFrames(w.page, 0, 3); await sleepFrames(a.page, 0, 3);
      const pw0 = await positions(w.page), pa0 = await positions(a.page);
      const bw = await shot(w.page, w.cdp, resolve(TMP, 'twin-w0.png'));
      const ba = await shot(a.page, a.cdp, resolve(TMP, 'twin-a0.png'));
      await compose([bw, ba], resolve(OUTDIR, '11_sync_twin_before.png'), { mode: 'h', width: 1920, height: 1080,
        labels: ['Windows — canvas', 'Android — canvas'] });

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
        await a.page.mouse.move(from.x, from.y);
        await a.page.mouse.down();
        for (let k = 1; k <= 10; k++) {
          await a.page.mouse.move(from.x + k * 14, from.y - k * 11);
          await sleepFrames(a.page, 0, 1);
        }
        await a.page.mouse.up();
      }
      const posAfter = await a.page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), moveId);
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
      await sleepFrames(w.page, 0, 3); await sleepFrames(a.page, 0, 3);
      const aw = await shot(w.page, w.cdp, resolve(TMP, 'twin-w1.png'));
      const aa = await shot(a.page, a.cdp, resolve(TMP, 'twin-a1.png'));
      await compose([aw, aa], resolve(OUTDIR, '12_sync_twin_after.png'), { mode: 'h', width: 1920, height: 1080,
        labels: ['Windows — the moved node arrived here', 'Android — where it was dragged'] });

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
                  error, check, result, pageErrors: pageErrors.slice(0, 6) };
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
