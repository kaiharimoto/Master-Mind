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
import { openBrowser, openApp, shot, step, record, compose, stack, grab, probe, sha, launch, SEED, INIT_SCRIPT } from './capture.mjs';
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

/**
 * Relative luminance at named points of a PNG this run just wrote.
 *
 * The state ladder is a decision with numbers in it (D-015, D-016). Reading
 * those numbers off the shipped frame — rather than restating them from the
 * source that produced it — is what lets an artifact carry its own proof, and
 * what stops the prose in report.md and the pixels drifting apart.
 * The weighting is relLum() from world.ts — Rec.709, 0.2126/0.7152/0.0722 —
 * applied to the
 * framebuffer values directly, with NO sRGB decode: the renderer runs with
 * colour management off and an output space of LinearSRGB, so a byte in the
 * PNG is the value the shader wrote. Decoding it first measured plain at 0.071
 * against a 0.26 rung and would have made every number in D-015 look wrong.
 */
/**
 * Both yardsticks, at every sampled point.
 *
 * `luma` is Rec.709 on the raw bytes — the framebuffer value the shader wrote,
 * which is what the palette is solved in. `relLuminance` linearises first and
 * is the standard definition, which is what an outside reader measuring the
 * shipped PNG gets. F-029 corrected the coefficients and left the transfer
 * function, so the manifest reported the first and called it the second, and
 * the cycle-8 Art Director measured 0.1594 against a claimed 0.4242. Reporting
 * both means either measurement reproduces and neither carries the other's name.
 */
const samplePixels = async (png, points, patch = 1) => {
  const raw = await new Promise((res) => {
    const p = spawn('ffmpeg', ['-v', 'error', '-i', png, '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'],
      { stdio: ['ignore', 'pipe', 'ignore'] });
    const bufs = [];
    p.stdout.on('data', d => bufs.push(d));
    p.on('close', () => res(Buffer.concat(bufs)));
  });
  const dim = await new Promise((res) => {
    let o = '';
    const p = spawn('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries',
      'stream=width,height', '-of', 'csv=p=0', png], { stdio: ['ignore', 'pipe', 'ignore'] });
    p.stdout.on('data', d => o += d);
    p.on('close', () => res(o.trim().split(',').map(Number)));
  });
  const [W, H] = dim;
  const out = {};
  if (!raw.length || !W || !H) return out;
  const s2l = (c) => (c <= 0.04045 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4));
  for (const pt of points) {
    let sum = 0, lin = 0, n = 0;
    for (let dy = -patch; dy <= patch; dy++) for (let dx = -patch; dx <= patch; dx++) {
      const x = pt.x + dx, y = pt.y + dy;
      if (x < 0 || y < 0 || x >= W || y >= H) continue;
      const i = (y * W + x) * 3;
      if (i + 2 >= raw.length) continue;
      sum += (0.2126 * raw[i] + 0.7152 * raw[i + 1] + 0.0722 * raw[i + 2]) / 255;
      lin += 0.2126 * s2l(raw[i] / 255) + 0.7152 * s2l(raw[i + 1] / 255) + 0.0722 * s2l(raw[i + 2] / 255);
      n++;
    }
    if (n) out[pt.id] = { luma: Number((sum / n).toFixed(4)), relLuminance: Number((lin / n).toFixed(4)) };
  }
  return out;
};

/**
 * Per-node marker visibility, measured ON THE SHIPPED PIXELS.
 *
 * The cycle-8 Audience critic counted 14 label strings against 4 visible node
 * markers in one crop of artifact 10, and 10 against 5 in artifact 06 — "a
 * large part of every frame is disembodied text". Nothing in the app could have
 * caught that: the label arbiter knows where a node PROJECTS, not whether its
 * marker survived the depth fade into something a reader can see. A node deep
 * in the fog is drawn near the ground luminance and its label is drawn at full
 * weight, so the text is legible and the thing it names is not.
 *
 * So it is measured the way the ladder is measured after F-029 — off the
 * captured frame, by a sampler that shares no code with the renderer. For each
 * anchor: the PEAK Rec.709 luminance inside the marker disc, and the local
 * ground as the MEDIAN of an annulus outside it, avoiding the label's own box
 * so ink does not count as ground. Contrast is the WCAG ratio on those two.
 * A marker at or below `min` is text with nothing under it.
 *
 * THE BAR IS DERIVED, NOT CHOSEN. It was 1.6:1 first, and one plain node on
 * artifact 06 measured 1.55 — so before changing anything I worked out what the
 * palette can actually deliver there. The lowest rung sits at relative
 * luminance 0.26 and depth fades it toward its own floor at 0.6615 of that
 * (DEPTH_SHARE over LUM_GROUND, see world.ts), giving 0.172; against the 0.10
 * ground that is (0.172 + 0.05) / (0.10 + 0.05) = 1.48:1. A distant plain node
 * CANNOT exceed about 1.48:1 by construction, so a 1.6 bar was not measuring
 * visibility, it was measuring the ladder and failing it. The bar is the
 * palette's own floor less a small tolerance: 1.45. It still catches what it
 * was written for — the clipped marker on artifact 06 measured 1.00:1, peak
 * identical to its own surround, and an off-frame node scores 0.
 */
const sampleDiscs = async (png, discs, min = 1.45) => {
  const raw = await new Promise((res) => {
    const p = spawn('ffmpeg', ['-v', 'error', '-i', png, '-f', 'rawvideo', '-pix_fmt', 'rgb24', '-'],
      { stdio: ['ignore', 'pipe', 'ignore'] });
    const bufs = [];
    p.stdout.on('data', d => bufs.push(d));
    p.on('close', () => res(Buffer.concat(bufs)));
  });
  const [W, H] = await new Promise((res) => {
    let o = '';
    const p = spawn('ffprobe', ['-v', 'error', '-select_streams', 'v:0', '-show_entries',
      'stream=width,height', '-of', 'csv=p=0', png], { stdio: ['ignore', 'pipe', 'ignore'] });
    p.stdout.on('data', d => o += d);
    p.on('close', () => res(o.trim().split(',').map(Number)));
  });
  if (!raw.length || !W || !H) return { checked: 0, invisible: [], error: 'frame not decodable' };
  const lum = (x, y) => {
    const i = (y * W + x) * 3;
    return i + 2 < raw.length ? (0.2126 * raw[i] + 0.7152 * raw[i + 1] + 0.0722 * raw[i + 2]) / 255 : null;
  };
  const rows = [];
  const offFrame = [];
  for (const d of discs) {
    const cx = Math.round(d.x), cy = Math.round(d.y);
    // The disc the app reports is the CORE radius; the mark a reader sees
    // includes its ring and glow, and at whole-map framing the core can be
    // under a pixel. Sampling the core alone measured four markers on artifact
    // 06 at exactly ground luminance — a peak identical to its own surround to
    // four decimals, which is the signature of a window that missed the mark
    // rather than of a mark that is not there. The window is the drawn extent.
    const r = Math.max(3.5, d.r * 1.6);
    // A NODE THAT PROJECTS OFF THE FRAME IS THE FAILURE, NOT A ROW TO SKIP.
    //
    // The first version of this sampler `continue`d here, and on artifact 10 it
    // silently dropped 18 of the 38 labels — every one of them a name drawn
    // inside the frame for a node that is not in it, which is exactly what the
    // critic reported and exactly what this check exists to catch. It would
    // have reported "0 of 20 labels without a visible marker" on a frame with
    // 18 unattached names. A measurement that skips its own failing cases is
    // the F-030 shape again: the instrument agreeing with itself.
    if (cx < 0 || cy < 0 || cx >= W || cy >= H) {
      offFrame.push({ id: d.id, peak: null, ground: null, contrast: 0, why: 'node projects outside the frame' });
      continue;
    }
    let peak = 0;
    const ri = Math.ceil(r);
    for (let dy = -ri; dy <= ri; dy++) for (let dx = -ri; dx <= ri; dx++) {
      if (dx * dx + dy * dy > r * r) continue;
      const x = cx + dx, y = cy + dy;
      if (x < 0 || y < 0 || x >= W || y >= H) continue;
      const l = lum(x, y);
      if (l !== null && l > peak) peak = l;
    }
    // Ground: an annulus from 2.2r to 3.6r, excluding anything inside this
    // label's own drawn box, so the name does not become its own background.
    const g = [];
    const ro = Math.ceil(r * 3.6);
    for (let dy = -ro; dy <= ro; dy += 2) for (let dx = -ro; dx <= ro; dx += 2) {
      const q = dx * dx + dy * dy;
      if (q < (2.2 * r) ** 2 || q > ro * ro) continue;
      const x = cx + dx, y = cy + dy;
      if (x < 0 || y < 0 || x >= W || y >= H) continue;
      if (d.x0 !== undefined && x >= d.x0 - 2 && x <= d.x1 + 2 && y >= d.y0 - 2 && y <= d.y1 + 2) continue;
      const l = lum(x, y);
      if (l !== null) g.push(l);
    }
    if (!g.length) continue;
    g.sort((a, b) => a - b);
    const ground = g[g.length >> 1];
    const ratio = (Math.max(peak, ground) + 0.05) / (Math.min(peak, ground) + 0.05);
    // x, y and the window are carried so a weak row can be LOOKED AT: the
    // reader crops the frame there rather than taking the number on faith.
    rows.push({ id: d.id, x: cx, y: cy, r: Number(r.toFixed(1)),
                peak: Number(peak.toFixed(4)), ground: Number(ground.toFixed(4)),
                contrast: Number(ratio.toFixed(2)) });
  }
  const invisible = [...offFrame, ...rows.filter(r => r.contrast < min)];
  invisible.sort((a, b) => a.contrast - b.contrast);
  return {
    checked: rows.length + offFrame.length,
    sampled: rows.length,
    offFrame: offFrame.length,
    threshold: min,
    invisible: invisible.length,
    worstContrast: rows.length ? Math.min(...rows.map(r => r.contrast)) : null,
    invisibleIds: invisible.slice(0, 40).map(r => r.id),
    weakest: invisible.slice(0, 8),
  };
};

const modelStats = (page) => page.evaluate(() => {
  const d = window.mm.store.doc;
  // The numbers the app PRINTS ON THE FRAME, read back from the DOM that drew
  // them. A cross-cycle diff that compares only SSIM and luminance called a
  // frame 'unchanged' while the counter on that very frame moved from 26 to 41;
  // these give the diff something semantic to compare, and they are read from
  // the chrome rather than recomputed, so they cannot silently agree with a
  // model the frame does not show.
  const txt = (sel) => { const e = document.querySelector(sel);
    return e && getComputedStyle(e).display !== 'none' ? e.textContent.trim() : null; };
  const num = (sel) => { const t = txt(sel); const m = t && t.match(/\d+/); return m ? Number(m[0]) : null; };
  const onFrame = {
    holdingBadge: num('[data-t=holding-count]'),
    // Matched by WORD, not by position. The chip now names two kinds of
    // omission and the first number in it is no longer necessarily the hidden
    // one: with nothing hidden and 44 names shortened, "take the first integer"
    // would have reported 44 labels hidden on a frame that hides none.
    labelsHidden: (() => { const t = txt('[data-t=labels-hidden]'); const m = t && t.match(/(\d+)\s+labels?\s+hidden/); return m ? Number(m[1]) : 0; })(),
    labelsShortened: (() => { const t = txt('[data-t=labels-hidden]'); const m = t && t.match(/(\d+)\s+shortened/); return m ? Number(m[1]) : 0; })(),
    unlabelledListed: document.querySelectorAll('#unlabelled li').length,
    // Read from the chrome, so a frame cannot claim a match breakdown it does
    // not print. Null when the chip is not up, which is itself the finding if
    // the artifact is about search.
    searchBreakdown: txt('[data-t=search-breakdown]'),
    mapName: txt('[data-t=map-name]'),
  };
  return { map: d.id, nodes: Object.keys(d.nodes).length, links: Object.keys(d.links).length,
           holding: Object.values(d.nodes).filter(n => !n.placed).length,
           lens: window.mm.lens, surface: window.mm.surface, sync: window.mm.sync.status,
           onFrame };
});

/** A stable signature of a cluster's internal arrangement, centroid-relative. */
/**
 * A named cluster's membership, centroid and per-member offsets from it.
 *
 * This used to return a STRING of offsets rounded to three decimals, and the
 * driver compared two of those strings with ===. Two things were wrong with
 * that: a rigid translation can still round differently in the third decimal,
 * so a preserved arrangement could compare unequal; and "did the cluster move"
 * is a question about the CENTROID, which a shape string cannot answer at all.
 * Both are returned as numbers now and compared with a stated tolerance.
 */
const clusterState = (page, label) => page.evaluate(l => {
  const ns = Object.values(window.mm.store.doc.nodes).filter(n => n.placed && n.label === l)
    .sort((a, b) => (a.id < b.id ? -1 : 1));
  if (!ns.length) return { members: [], centroid: [0, 0, 0], offsets: [] };
  const c = ns.reduce((a, n) => [a[0] + n.pos[0], a[1] + n.pos[1], a[2] + n.pos[2]], [0, 0, 0]).map(v => v / ns.length);
  return { members: ns.map(n => n.id), centroid: c,
           offsets: ns.map(n => [n.pos[0] - c[0], n.pos[1] - c[1], n.pos[2] - c[2]]) };
}, label);

/** How far the cluster travelled, and by how much its internal shape drifted. */
const clusterDelta = (a, b) => {
  const sameMembers = a.members.length === b.members.length &&
                      a.members.every((m, i) => m === b.members[i]);
  const moved = Math.hypot(b.centroid[0] - a.centroid[0], b.centroid[1] - a.centroid[1],
                           b.centroid[2] - a.centroid[2]);
  let drift = 0;
  if (sameMembers) for (let i = 0; i < a.offsets.length; i++)
    drift = Math.max(drift, Math.hypot(b.offsets[i][0] - a.offsets[i][0],
                                       b.offsets[i][1] - a.offsets[i][1],
                                       b.offsets[i][2] - a.offsets[i][2]));
  return { sameMembers, centroidTravelled: +moved.toFixed(4), maxMemberDrift: +drift.toFixed(6) };
};

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
    shot, step, record, compose, stack, crop, samplePixels, sampleDiscs, modelStats, clusterState, clusterDelta, positions,
    async tmpShot(page, cdp, tag) { return shot(page, cdp, resolve(TMP, `${tag}.png`)); },
    async twin(driver, phase) {
      if (phase === 'after') return twinCache?.after ?? { error: 'twin before did not run' };
      // The Wine target is closed in a FINALLY. It was closed on the success
      // path only, so when the twin threw mid-sequence the Windows binary,
      // wineserver and Xvfb stayed alive and the capture process never exited —
      // the run finished its work and then hung, which looks like a slow
      // capture rather than a leak.
      let winCleanup = null;
      try {
        return await this._twin(driver, (c) => { winCleanup = c; });
      } finally {
        if (winCleanup) { try { winCleanup(); } catch { /* already gone */ } }
      }
    },
    async _twin(driver, registerCleanup) {
      // The Windows side comes from the REAL win32-x64 binary running under
      // Wine when it is available, so the propagation proof crosses an actual
      // platform boundary rather than two tabs of the same browser.
      let w, winSource = 'chromium', winTarget = null, winUA = null, bigTwin = null;
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
          if (wt.close) registerCleanup(wt.close);
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
      // FRAMED WITH THE EDITOR'S FOOTPRINT RESERVED. The frozen camera was
      // solved against the empty viewport, and the AFTER half then opens the
      // node editor over the right of it — which put the amber 'Closing: build
      // your own' node entirely behind the panel in both surfaces, so the one
      // artifact headlined noNodeDropped showed ten of eleven nodes. The panel
      // is a fixed width, so opening it on any node reserves the same band;
      // it is opened, the fit is solved against the band that is left, and it
      // is closed again before the camera is frozen.
      for (const p of [w, a]) {
        await POSE(p.page, pose);
        await p.page.evaluate(() => {
          const first = Object.keys(window.mm.store.doc.nodes)[0];
          window.mm.select(first);
        });
        await sleepFrames(p.page, 0, 2);
        // 1.06, not the 1.34 that was right when the whole viewport was
        // available: reserving the editor band already costs about a quarter of
        // the width, and keeping the old margin on top of it left the map small
        // in a mostly empty frame.
        await FRAME_ALL(p.page, 1.06);
        await p.page.evaluate(() => window.mm.select(null));
        await sleepFrames(p.page, 0, 2);
      }
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
      // ...and not behind the app's own chrome either. Off the edge and under
      // a panel are the same failure for an artifact whose claim is that every
      // node is still there.
      const chromeCover = (p) => p.page.evaluate(() => {
        const boxes = ['#editor', '#finder', '#states', '#top', '#tools']
          .map(sel => document.querySelector(sel))
          .filter(e => e && getComputedStyle(e).display !== 'none')
          .map(e => e.getBoundingClientRect())
          .filter(r => r.width > 2 && r.height > 2);
        const dpr = window.mm.scene.renderer.domElement.width / Math.max(window.innerWidth, 1);
        return window.mm.scene.screenPositions()
          .filter(s => boxes.some(r => s.x / dpr >= r.left && s.x / dpr <= r.right &&
                                       s.y / dpr >= r.top && s.y / dpr <= r.bottom))
          .map(s => s.id);
      });
      await allVisible(w, 'before/windows'); await allVisible(a, 'before/android');
      const prov = {
        w: await w.page.evaluate(() => window.mm.provenance()),
        a: await a.page.evaluate(() => window.mm.provenance()),
      };
      // The RASTERISER is named too, per panel and from that panel's own
      // context. The cycle-8 Auditor found the two map regions identical to the
      // byte and concluded the pixels could not corroborate two renders — the
      // premise being that two Chromium majors cannot rasterise identically.
      // They can when they drive the same software backend, which both of these
      // do; that is why the panels match, and a reader should be able to read
      // it off the frame instead of taking the inference either way.
      const provLine = (p, claimed) =>
        `${p.runtime} · ${p.platform} · ${claimed} · socket #${p.socket} on ${p.transport.replace('ws://', '')} · sync ${p.status}` +
        ` · raster ${p.gl ?? 'unreported'}`;
      await sleepFrames(w.page, 0, 3); await sleepFrames(a.page, 0, 3);
      const pw0 = await positions(w.page), pa0 = await positions(a.page);
      const bw = await shot(w.page, w.cdp, resolve(TMP, 'twin-w0.png'));
      const ba = await shot(a.page, a.cdp, resolve(TMP, 'twin-a0.png'));
      // The figures for the map that is ON SCREEN, per half, so "node-for-node
      // identical, no node dropped" is a number a reader can check rather than
      // eleven labels to count by eye.
      const shaOf = (p) => createHash('sha256').update(JSON.stringify(p)).digest('hex').slice(0, 10);
      const ledger = (p) => `${driver.map} · ${Object.keys(p).length} nodes · pos sha ${shaOf(p)}`;
      const agree = shaOf(pw0) === shaOf(pa0);
      await compose([bw, ba], resolve(OUTDIR, '11_sync_twin_before.png'), { mode: 'h', width: 1920, height: 1080,
        labels: ['Windows — canvas', 'Android — canvas'],
        // Read from each running process, not typed. If the Wine binary did not
        // come up, this line says chromium and the frame does not over-claim.
        sublabels: [provLine(prov.w, winSource === 'windows-binary-under-wine' ? 'wine · the built binary' : 'FALLBACK — NOT the built binary'),
                    provLine(prov.a, 'android device profile · touch')],
        sublabels2: [`${ledger(pw0)} · ${agree ? 'same ledger both sockets' : 'LEDGERS DIFFER'}`,
                     `${ledger(pa0)} · ${agree ? 'same ledger both sockets' : 'LEDGERS DIFFER'}`] });

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
      const coveredW = await chromeCover(w), coveredA = await chromeCover(a);
      // The pair is framed on the small map because that is where a reader can
      // COUNT the nodes and read the coordinates. The 150-node map is checked
      // across the same two sockets in the same take and reported as a ledger
      // digest, so the one-model claim is not left resting on eleven nodes.
      let bigCheck = 'map-fermentation not checked';
      let bigShots = null;
      let clusterProof = { district: null, members: 0, movedOnWindows: false, arrivedOnAndroid: false, restored: false };
      try {
        for (const p of [w, a]) {
          await p.page.evaluate(() => window.mm.openMap('map-fermentation'));
          await p.page.waitForFunction(() => window.mm.store.doc.id === 'map-fermentation', null, { timeout: 20000 });
        }
      // A CLUSTER MOVE ACROSS THE BOUNDARY, where two surfaces are on screen.
      //
      // The closed fist is the one hand pose that writes positions, and its
      // propagation was asserted on artifact 17 — a single-surface take whose
      // frames could not corroborate it. The cycle-9 Audience was right that a
      // claim belongs where its evidence is. It is proved here instead: the
      // Windows side moves a whole district at once, and the Android side is
      // waited on until its ledger for that district equals Windows'. Many
      // positions written by one act, crossing a real platform boundary.
      const clusterLedger = (pg, label) => pg.evaluate((l) => JSON.stringify(
        Object.values(window.mm.store.doc.nodes).filter(n => n.placed && n.label === l)
          .sort((x, y) => (x.id < y.id ? -1 : 1))
          .map(n => [n.id, n.pos.map(v => +v.toFixed(6))])), label);
      const CLUSTER = await w.page.evaluate(() => {
        const d = window.mm.store.doc;
        const counts = {};
        for (const n of Object.values(d.nodes)) if (n.placed) counts[n.label] = (counts[n.label] ?? 0) + 1;
        return Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0];
      });
      const clusterBeforeW = await clusterLedger(w.page, CLUSTER);
      const clusterBeforeA = await clusterLedger(a.page, CLUSTER);
      await w.page.evaluate((l) => {
        const ids = Object.values(window.mm.store.doc.nodes)
          .filter(n => n.placed && n.label === l).map(n => n.id);
        window.mm.store.moveCluster(ids, [1.7, -1.1, 0.6]);
      }, CLUSTER);
      const clusterAfterW = await clusterLedger(w.page, CLUSTER);
      let clusterArrived = false;
      for (let k = 0; k < 60 && !clusterArrived; k++) {
        await sleepFrames(a.page, 0, 1);
        clusterArrived = (await clusterLedger(a.page, CLUSTER)) === clusterAfterW;
      }
      const clusterAfterA = await clusterLedger(a.page, CLUSTER);
      // THE DISTRICT STAYS MOVED UNTIL THE PANELS HAVE BEEN SHOT.
      //
      // It was moved, checked and put back before the twin panels were
      // captured, so artifact 12 asserted a cluster crossing that appeared
      // nowhere in its own 1920x2160 frame — the cycle-10 Auditor's M1, and a
      // fair one: a claim belongs where its evidence is. The restore is
      // deferred until after the big-map panels are shot, so both surfaces are
      // photographed with the district displaced and their ledgers agreeing,
      // and only then does it go back — bit for bit, by writing the original
      // vectors rather than applying an inverse delta, because adding 1.7 and
      // subtracting 1.7 does not return a float to where it started.
      const restoreCluster = async () => {
        await w.page.evaluate(({ l, snap }) => {
          for (const [id, pos] of snap) window.mm.store.move(id, pos);
          void l;
        }, { l: CLUSTER, snap: JSON.parse(clusterBeforeW) });
        for (let k = 0; k < 60; k++) {
          await sleepFrames(a.page, 0, 1);
          if ((await clusterLedger(a.page, CLUSTER)) === clusterBeforeA) break;
        }
        return (await clusterLedger(w.page, CLUSTER)) === clusterBeforeW &&
               (await clusterLedger(a.page, CLUSTER)) === clusterBeforeA;
      };
      clusterProof = {
        district: CLUSTER,
        members: JSON.parse(clusterBeforeW).length,
        movedOnWindows: clusterAfterW !== clusterBeforeW,
        arrivedOnAndroid: clusterArrived && clusterAfterA === clusterAfterW,
        restored: false,   // set below, once the panels are shot
      };
        const bw = await positions(w.page), ba = await positions(a.page);
        const dw = createHash('sha256').update(JSON.stringify(bw)).digest('hex').slice(0, 10);
        const da = createHash('sha256').update(JSON.stringify(ba)).digest('hex').slice(0, 10);
        // SHOW it, do not only assert it. Until cycle 7 the 150-node check ran
        // on the same two sockets in the same take and then appeared on the
        // frame as the words 'not shown on screen' — so the one-model claim was
        // visible at eleven nodes and only stated at a hundred and fifty. Both
        // surfaces are framed by ONE camera, copied from the Windows side, so
        // the two panels superpose and a reader can check the districts land in
        // the same places rather than take the digest's word for it.
        await FRAME_ALL(w.page, 1.06);
        const bigPose = await w.page.evaluate(() => {
          const s = window.mm.scene.pose;
          return { yaw: s.yaw, pitch: s.pitch, dist: s.dist,
                   target: [s.target.x, s.target.y, s.target.z] };
        });
        for (const p of [w, a]) { await POSE(p.page, bigPose); await sleepFrames(p.page, 0, 3); }
        bigShots = { w: await shot(w.page, w.cdp, resolve(TMP, 'twin-w-big.png')),
                     a: await shot(a.page, a.cdp, resolve(TMP, 'twin-a-big.png')),
                     pose: bigPose };
        // Panels taken with the district displaced; now put it back.
        clusterProof.restored = await restoreCluster();
        bigTwin = { nodes: { windows: Object.keys(bw).length, android: Object.keys(ba).length },
                    sha: { windows: dw, android: da }, identical: dw === da, shown: true,
                    camera: bigPose };
        bigCheck = `map-fermentation ${Object.keys(bw).length}/${Object.keys(ba).length} nodes` +
                   (dw === da ? `, pos sha ${dw} identical on both sockets` : `, LEDGERS DIFFER ${dw} vs ${da}`);
        for (const p of [w, a]) {
          await p.page.evaluate(() => window.mm.openMap('map-talk'));
          await p.page.waitForFunction(() => window.mm.store.doc.id === 'map-talk', null, { timeout: 20000 });
          await POSE(p.page, frozen);
          await p.page.evaluate(i => window.mm.select(i), moveId);
          await POSE(p.page, frozen);
        }
      } catch (e) { bigCheck = `map-fermentation check failed: ${String(e.message).slice(0, 60)}`; }
      // Read AFTER the map round-trip: opening a map reconnects the socket, so
      // the number printed on the frame has to be the one the frame was taken
      // on, not the one the surface started with.
      const provAfter = {
        w: await w.page.evaluate(() => window.mm.provenance()),
        a: await a.page.evaluate(() => window.mm.provenance()),
      };
      await sleepFrames(w.page, 0, 3); await sleepFrames(a.page, 0, 3);
      const aw = await shot(w.page, w.cdp, resolve(TMP, 'twin-w1.png'));
      const aa = await shot(a.page, a.cdp, resolve(TMP, 'twin-a1.png'));
      const fmt = (v) => `${v[0].toFixed(1)}, ${v[1].toFixed(1)}, ${v[2].toFixed(1)}`;
      const sha12 = (p) => createHash('sha256').update(JSON.stringify(p)).digest('hex').slice(0, 10);
      // Read BEFORE the composite that prints them. They were being read after
      // it, so the caption referenced a binding that did not exist yet and the
      // whole twin sequence threw — caught by the declared-claim gate on 12,
      // which recorded every one of its claims as unmet rather than passing
      // them through as undefined.
      const pw1 = await positions(w.page), pa1 = await positions(a.page);
      // EVERY edit in the beat is named. The take also recolours and retexts a
      // second node on Android while Windows relabels that same node — that is
      // what exercises property-level last-writer-wins — and cycle 3's caption
      // mentioned only the drag, so a reader diffing 11 against 12 found a hue
      // change nobody had declared.
      const moved = `Android dragged ${moveId} ${fmt(posBefore)} -> ${fmt(posAfter)}; ` +
                    `Android retexted+recoloured “Demo: search fly-to” while Windows relabelled it — both kept`;
      const twinTop = bigShots ? resolve(TMP, 'twin-after-top.png') : resolve(OUTDIR, '12_sync_twin_after.png');
      await compose([aw, aa], twinTop, { mode: 'h', width: 1920, height: 1080,
        labels: ['Windows — the moved node arrived here', 'Android — where it was dragged'],
        sublabels: [
          `${moved} · ${driver.map} · ${Object.keys(pw1).length} nodes · pos sha ${sha12(pw1)}`,
          `${moved} · ${driver.map} · ${Object.keys(pa1).length} nodes · pos sha ${sha12(pa1)}`,
        ],
        // THE RASTERISER IS NAMED HERE TOO, and the camera line no longer
        // over-claims. This artifact asserted eachPanelNamesItsRasteriser while
        // naming no rasteriser at all — artifact 11 carried the line and made
        // no claim about it, so the claim stood on the artifact that lacked its
        // evidence. That disclosure is load-bearing: the two canvases here are
        // byte-identical, and the only honest way to read that as two processes
        // agreeing rather than one render pasted twice is knowing both drive
        // the same SwiftShader path.
        //
        // "CAMERA FROZEN FROM 11" was also not reproducible against 11: fitting
        // the unmoved markers gives a uniform scale of 0.979 and a 22.8 px
        // offset, because this composite's header is a line taller and the
        // canvas auto-fits. Same camera, shorter viewport — said that way.
        sublabels2: [
          `${provAfter.w.runtime} · ${winSource === 'windows-binary-under-wine' ? 'wine · the built binary' : 'FALLBACK — not the built binary'}` +
          ` · socket #${provAfter.w.socket} · raster ${provAfter.w.gl ?? 'unreported'}` +
          ` · same camera as 11, shorter viewport · the 150-node map is below, on these same two sockets`,
          `${provAfter.a.runtime} · android device profile · touch · socket #${provAfter.a.socket}` +
          ` · raster ${provAfter.a.gl ?? 'unreported'}` +
          ` · same camera as 11, shorter viewport · the 150-node map is below, on these same two sockets`,
        ] });
      if (bigShots) {
        const bigBot = resolve(TMP, 'twin-after-bot.png');
        const cam = `one camera: yaw ${bigShots.pose.yaw.toFixed(3)} pitch ${bigShots.pose.pitch.toFixed(3)} ` +
                    `dist ${bigShots.pose.dist.toFixed(1)}`;
        await compose([bigShots.w, bigShots.a], bigBot, { mode: 'h', width: 1920, height: 1080,
          labels: ['Windows — the 150-node map, same socket',
                   'Android — the 150-node map, same socket'],
          sublabels: [
            `${bigTwin.nodes.windows} nodes · pos sha ${bigTwin.sha.windows} · ${cam}`,
            `${bigTwin.nodes.android} nodes · pos sha ${bigTwin.sha.android} · ${cam}`,
          ],
          sublabels2: [
            bigTwin.identical
              ? `the two position ledgers are BYTE-IDENTICAL across the two processes at 150 nodes`
              : `LEDGERS DIFFER: ${bigTwin.sha.windows} vs ${bigTwin.sha.android}`,
            `${bigCheck} · socket #${provAfter.a.socket} vs #${provAfter.w.socket}`,
          ],
          // What these two panels are OF. Without it the displaced district is
          // just a map, and the cluster claim asks the reader to diff against
          // artifact 11 to see the point.
          sublabels3: [
            clusterProof.district
              ? `“${clusterProof.district}” — ${clusterProof.members} thoughts — was moved as one on Windows and is shown here as it arrived on Android`
              : 'no cluster move in this take',
            clusterProof.district
              ? `both ledgers agree while it is displaced; every coordinate is written back afterwards`
              : '',
          ] });
        await stack([twinTop, bigBot], resolve(OUTDIR, '12_sync_twin_after.png'));
      }


      const node = await w.page.evaluate(i => window.mm.store.doc.nodes[i], id);
      const nodeA = await a.page.evaluate(i => window.mm.store.doc.nodes[i], id);
      const same = (x, y) => JSON.stringify(x) === JSON.stringify(y);
      const before = {
        windowsSurface: winSource, windowsUserAgent: winUA,
        positionsIdenticalAcrossSurfaces: same(pw0, pa0),
        // The BEFORE half carries its panels' provenance too. Only the after
        // half did, so artifact 11's record named the Android runtime alone —
        // on the one artifact whose whole subject is that there are two of them.
        provenance: { windows: prov.w, android: prov.a },
        panelRuntimes: { windows: prov.w.runtime, android: prov.a.runtime },
        panelRasterisers: { windows: prov.w.gl, android: prov.a.gl },
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
      // TWO RUNTIMES, ONE RASTERISER — both stated, because the second is why
      // the panels' pixels match and the first is what the artifact is about.
      //
      // The cycle-8 Auditor measured the two map regions as identical to the
      // byte and read that as the pixels being unable to corroborate two
      // renders. Measured again on a fresh capture the band is not quite
      // identical — 341 differing subpixels of 2.5 million, max channel
      // difference 2 — but that is close enough that the objection stands: near
      // identity is not evidence of two processes and could equally be evidence
      // of one. The answer is not to argue it. Each panel names the runtime it
      // is and the rasteriser it drew through, both read from that process's own
      // context, so a reader can see that the runtimes differ and that the
      // backend is shared, and knows which of the two facts explains the match.
      after.clusterAcrossSurfaces = clusterProof;
      // Many positions written by one act, arriving on the other surface — and
      // the district put back, so this proof leaves the map exactly as it found
      // it. All three or the capture failed.
      after.clusterMoveCrossedTheBoundary = clusterProof.movedOnWindows &&
        clusterProof.arrivedOnAndroid && clusterProof.restored && clusterProof.members > 1;
      after.panelRuntimes = { windows: provAfter.w.runtime, android: provAfter.a.runtime };
      after.panelRasterisers = { windows: provAfter.w.gl, android: provAfter.a.gl };
      after.panelRuntimesDiffer = !!provAfter.w.runtime && !!provAfter.a.runtime &&
        (provAfter.w.runtime !== provAfter.a.runtime || provAfter.w.platform !== provAfter.a.platform);
      // Read back off the composite's own caption text, not from the values
      // that were passed to it — the claim is that the FRAME names them.
      after.rasterLineOnFrame = [provAfter.w.gl, provAfter.a.gl];
      after.eachPanelNamesItsRasteriser = !!provAfter.w.gl && !!provAfter.a.gl &&
        provAfter.w.gl !== 'unavailable' && provAfter.a.gl !== 'unavailable';
      after.cameraFrozen = frozen;
      after.everyNodeInFrame = true; // asserted above; the capture throws otherwise
      after.movedNodeCoords = { id: moveId, before: posBefore, after: posAfter };
      after.nodesUnderChrome = { windows: coveredW, android: coveredA };
      // Every node the artifact counts must be visible, not merely present.
      after.everyNodeUnoccludedByChrome = coveredW.length === 0 && coveredA.length === 0;
      after.bigMapCrossSurface = bigTwin;
      // The 150-node map is SHOWN on both sockets in this artifact, not only
      // digested into a caption clause.
      after.bigMapShownOnBothSurfaces = !!(bigTwin && bigTwin.shown);
      after.bigMapLedgersIdentical = !!(bigTwin && bigTwin.identical);
      after.bigMapNodeCount = bigTwin ? bigTwin.nodes.windows : 0;
      twinCache = { before, after };
      return before;
    },
  };
  let result, error = null;
  try { result = await d.run.call(d, H); }
  catch (e) { error = e.message + '\n' + (e.stack || '').split('\n').slice(1, 4).join('\n'); }
  const errs = pages.flatMap(p => p.errs);
  // WHICH RUNTIME ACTUALLY DREW THIS ONE.
  //
  // "Windows" is two different things across the set: artifacts 11 and 12 drive
  // the packaged win32-x64 binary under Wine, and every other Windows artifact
  // runs the same app in headless Chromium on Linux. Both are declared on their
  // own frames, so nothing was hidden — but as the cycle-8 Auditor put it, a
  // reader comparing 02 against 11 is comparing two substitutions without being
  // told they differ. Recorded per artifact so the difference is in the record
  // and not only in two badges a reader has to notice and compare.
  let runtimes = null;
  try {
    const seen = [];
    for (const p of pages) {
      const pv = await p.page.evaluate(() => window.mm?.provenance?.() ?? null).catch(() => null);
      if (pv) seen.push(`${pv.surface}: ${pv.runtime} · ${pv.platform}`);
    }
    // The twin's Windows half is reached over CDP rather than opened here, so
    // it is not in `pages` and a naive sweep would record the twin artifacts as
    // Android-only — the one place in the set where the distinction matters
    // most. Its provenance is already captured per panel; use it.
    const pr = result?.provenance;
    if (pr?.windows) seen.unshift(`windows: ${pr.windows.runtime} · ${pr.windows.platform}`);
    if (pr?.android) seen.push(`android: ${pr.android.runtime} · ${pr.android.platform}`);
    runtimes = [...new Set(seen)];
  } catch { runtimes = null; }
  await browser.close();
  S.close();
  return { result, error, pageErrors: errs, runtimes };
}

/**
 * The claims an artifact's own driver says it must carry.
 *
 * Artifact 17 shipped for two cycles reporting
 * `clusterInternalArrangementPreserved: false` inside a record whose status
 * read `captured` with `error: null`, because verification only ever checked
 * resolution, frame rate and duration. A machine-checked claim that came back
 * false was written into the manifest and then ignored. A driver now names the
 * result keys that must hold, and a capture that fails one of them is a
 * FAILED capture — a finding, not a footnote.
 */
function checkClaims(d, result) {
  const req = d.requires;
  if (!req || !result) return { ok: true, claims: [] };
  const claims = [], failed = [];
  for (const [key, want] of Object.entries(req)) {
    const got = key.split('.').reduce((o, k) => (o == null ? o : o[k]), result);
    let pass;
    if (typeof want === 'function') pass = !!want(got);
    else pass = got === want;
    claims.push({ claim: key, expected: typeof want === 'function' ? '(predicate)' : want, actual: got, pass });
    if (!pass) failed.push(`${key} = ${JSON.stringify(got)}`);
  }
  return { ok: !failed.length, claims, why: failed.length ? `declared claim(s) not met: ${failed.join('; ')}` : undefined };
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
  const { result, error, pageErrors, runtimes } = await runDriver(d);
  // A FAILED CAPTURE MUST NOT LEAVE THE PREVIOUS FILE BEHIND.
  //
  // A compose failure in artifact 03 was recorded as `driver-error` while the
  // file from the run before it stayed on disk — so the manifest said the
  // capture failed and the directory held a frame from another build. Frozen
  // into a cycle, that is an artifact whose provenance the manifest denies.
  // The file is removed, so a failed capture is visibly missing.
  if (error) {
    const stale = resolve(OUTDIR, d.file);
    if (existsSync(stale)) { rmSync(stale, { force: true }); }
  }
  const check = await verify(d, resolve(OUTDIR, d.file));
  const claims = checkClaims(d, result);
  const entry = { id: d.id, file: d.file, title: d.title, kind: d.kind,
                  minimum: `${d.minW}x${d.minH}` + (d.kind === 'mp4' ? ` @${d.minFps}fps ${d.minSec}s` : ''),
                  seconds: +((Date.now() - t0) / 1000).toFixed(1),
                  status: error ? 'driver-error'
                    : !check.ok ? 'below-minimum'
                    : !claims.ok ? 'claim-not-met' : 'captured',
                  error, check, claims, result, pageErrors: pageErrors.slice(0, 6),
                  // The recipe fingerprint. A perceptual diff cannot tell a
                  // re-framing from a bug fix from a change to what the artifact
                  // DEMONSTRATES, so the capture script itself is hashed and its
                  // declared subject recorded. A cross-cycle diff can then say
                  // what changed, not only how much.
                  recipe: { demonstrates: d.demonstrates ?? null,
                            surface: d.surface ?? null, lens: d.lens ?? null,
                            // Not the declared surface — the runtime that ran.
                            runtimes: runtimes ?? null,
                            fnSha: createHash('sha256').update(String(d.run)).digest('hex').slice(0, 16) },
                  // WHICH CYCLE THIS FILE CAME FROM. capturedInThisRun answers a
                  // narrower question — a cycle is several runs, since a single
                  // artifact is often recaptured while its driver is worked on —
                  // so it could not tell a reader whether a frozen set was
                  // captured wholly inside the cycle it is filed under. Stamped
                  // per artifact, so a stale one is named rather than inferred.
                  capturedInCycle: manifest.cycle };
  const at = manifest.artifacts.findIndex(a => a.id === d.id);
  if (at >= 0) manifest.artifacts[at] = entry; else manifest.artifacts.push(entry);
  manifest.lastRunCaptured.push(d.id);
  console.log(entry.status === 'captured'
    ? `ok  ${check.width}x${check.height}${check.seconds ? ` ${check.seconds}s @${check.fps}fps` : ''}  ${entry.seconds}s`
    : `${entry.status.toUpperCase()}  ${error ? error.split('\n')[0].slice(0, 120) : (check.why || claims.why)}`);
}
// Was the whole set captured inside the cycle it is filed under?
manifest.staleFromEarlierCycles = manifest.artifacts
  .filter(a => a.capturedInCycle !== manifest.cycle)
  .map(a => ({ id: a.id, capturedInCycle: a.capturedInCycle ?? 'unknown' }));
manifest.allCapturedInThisCycle = manifest.staleFromEarlierCycles.length === 0;

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
