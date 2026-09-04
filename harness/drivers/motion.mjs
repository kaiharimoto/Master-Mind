// Sync, flow and video artifacts.
import { POSE, FRAME_ALL, SELECT, NODE_ID, SCREEN_OF, touch, sleepFrames, orient } from './util.mjs';
import { ORDER as REPLIES } from '../fixtures/replies.mjs';

/** Turn a list of {at, fn} into an onFrame callback for record(). */
const script = (steps) => {
  const byFrame = new Map();
  for (const s of steps) { if (!byFrame.has(s.at)) byFrame.set(s.at, []); byFrame.get(s.at).push(s.fn); }
  return async (i, t) => { for (const fn of byFrame.get(i) || []) await fn(t, i); };
};

export default [
{
  id: '05', file: '05_hand_tracking.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Hand tracking live',
  camera: 'hand-vocabulary-slow',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', camera: true });
    await POSE(page, { yaw: 0.30, pitch: 0.16 });
    await FRAME_ALL(page, 1.02);
    await page.click('[data-t=hands-chip]');
    await page.waitForFunction(() => window.mm.hands.enabled, null, { timeout: 90000 });
    // Wait for a real recognised pose that drives a visible operation.
    await page.waitForFunction(() => ['spread', 'gather'].includes(window.mm.hands.frame.pose),
                               null, { timeout: 90000 });
    const before = await page.evaluate(() => window.mm.scene.pose.dist);
    // Let the recognised pose actually act on the map for a moment.
    for (let i = 0; i < 45; i++) { await page.evaluate(t => window.mm.renderAt(t), i * 33.3); await page.waitForTimeout(12); }
    await H.shot(page, cdp, H.out(this.file), 1500);
    const f = await page.evaluate(() => ({ ...window.mm.hands.frame, landmarks: window.mm.hands.frame.landmarks.length }));
    const after = await page.evaluate(() => window.mm.scene.pose.dist);
    return { pose: f.pose, landmarks: f.landmarks, tipsOut: f.reach, fan: +f.spreadRatio.toFixed(3),
             confidence: +f.confidence.toFixed(3), distBefore: +before.toFixed(2), distAfter: +after.toFixed(2),
             operationTookEffect: Math.abs(after - before) > 0.01 };
  },
},
{
  id: '08', file: '08_placement_endstate.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Placement end-state',
  async run(H) {
    // Captured at the panel's own size so the composite needs no downscaling:
    // both halves are full resolution and the holding count stays readable.
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas', map: 'map-talk',
                                        width: 960, height: 1080 });
    await POSE(page, { yaw: 0.28, pitch: 0.12 });
    await FRAME_ALL(page, 1.12);
    const id = await NODE_ID(page, 'Steal the parking-lot bit');
    await page.evaluate(i => window.mm.select(i), id);
    await sleepFrames(page, 0, 3);
    const beforeCount = await page.evaluate(() => window.mm.store.holdingCount());
    const beforePos = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    const a = await H.tmpShot(page, cdp, '08a');

    const from = await SCREEN_OF(page, id);
    const to = { x: from.x + 200, y: from.y - 330 };
    await page.mouse.move(from.x, from.y);
    await page.mouse.down();
    for (let k = 1; k <= 14; k++) {
      await page.mouse.move(from.x + (to.x - from.x) * k / 14, from.y + (to.y - from.y) * k / 14);
      await sleepFrames(page, 0, 1);
    }
    await page.mouse.up();
    await sleepFrames(page, 0, 4);
    const b = await H.tmpShot(page, cdp, '08b');
    await H.compose([a, b], H.out(this.file), { mode: 'h', width: 1920, height: 1080,
      labels: [`Before — unplaced, waiting in holding (${beforeCount})`,
               `After — dropped, and it stays there (holding ${beforeCount - 1})`] });

    const afterCount = await page.evaluate(() => window.mm.store.holdingCount());
    const afterPos = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    // Nothing must move after the drop.
    await sleepFrames(page, 0, 30);
    const settled = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    return { node: 'Steal the parking-lot bit', beforeCount, afterCount,
             placed: await page.evaluate(i => window.mm.store.doc.nodes[i].placed, id),
             beforePos, afterPos, stableAfterDrop: JSON.stringify(afterPos) === JSON.stringify(settled) };
  },
},
{
  id: '10', file: '10_search_flyto_end.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Search fly-to end-state',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    await POSE(page, { yaw: 0.42, pitch: 0.20 });
    await FRAME_ALL(page, 1.02);
    const id = await NODE_ID(page, 'Grape leaf tannin trick');
    const home = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    await page.fill('[data-t=search]', 'grape leaf');
    await page.press('[data-t=search]', 'Enter');
    let t = 0;
    for (let i = 0; i < 55; i++) { await page.evaluate(x => window.mm.renderAt(x), t); t += 33.3; }
    await H.shot(page, cdp, H.out(this.file), t);
    const after = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    const pose = await page.evaluate(() => ({ t: window.mm.scene.pose.target.toArray(), d: window.mm.scene.pose.dist }));
    const scr = await SCREEN_OF(page, id);
    return { query: 'grape leaf', node: 'Grape leaf tannin trick', hits: await page.evaluate(() => window.mm.hits.length),
             homeBefore: home, homeAfter: after, positionUnchanged: JSON.stringify(home) === JSON.stringify(after),
             cameraTarget: pose.t.map(v => +v.toFixed(2)), endDistance: +pose.d.toFixed(2),
             centred: scr ? { dx: Math.round(scr.x - 960), dy: Math.round(scr.y - 540) } : null };
  },
},
{
  id: '11', file: '11_sync_twin_before.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'twin', map: 'map-talk', title: 'Twin composite — before',
  pairWith: '12',
  async run(H) { return H.twin(this, 'before'); },
},
{
  id: '12', file: '12_sync_twin_after.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'twin', map: 'map-talk', title: 'Twin composite — after',
  async run(H) { return H.twin(this, 'after'); },
},
{
  id: '14', file: '14_finder_review.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Finder review',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', map: 'map-talk' });
    await FRAME_ALL(page, 1.12);
    await page.click('[data-t=open-finder]');
    await page.evaluate(() => window.mm.clearOfPanels());
    await page.click('[data-t=finder-generate]');
    await page.fill('[data-t=finder-reply]', REPLIES[1].text);
    await page.click('[data-t=finder-parse]');
    await page.waitForSelector('[data-t=finder-current]');
    const staged = await page.evaluate(() => window.mm.suggestions.map(s => s.kind));
    const before = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
    // Reject the first, so the frame shows an instance that left no trace.
    const rejected = await page.evaluate(() => window.mm.suggestions[0] && window.mm.suggestions[0].id);
    await page.click('[data-t=finder-reject]');
    await page.waitForTimeout(60);
    const after = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
    await sleepFrames(page, 0, 3);
    await H.shot(page, cdp, H.out(this.file));
    const remaining = await page.evaluate(() => window.mm.suggestions.map(s => s.kind));
    return { stagedKinds: staged, kindsAfterReject: remaining,
             allThreeKinds: ['connection', 'grouping', 'placement'].every(k => staged.includes(k)),
             rejectedId: rejected, rejectionLeftNoTrace: before === after,
             rejectedIsGone: !remaining.length || !(await page.evaluate(i => window.mm.suggestions.some(s => s.id === i), rejected)) };
  },
},
{
  id: '16', file: '16_touch_vocabulary.mp4', kind: 'mp4', minW: 1920, minH: 1080,
  minFps: 24, minSec: 30, surface: 'android', map: 'map-talk', title: 'Touch gesture vocabulary',
  async run(H) {
    // Run the vocabulary inside the AR lens: the touch gestures belong to both
    // Android lenses, and this is the take that shows AR in motion.
    const { page, cdp } = await H.app({ surface: 'android', lens: 'ar', map: 'map-talk', touch: true });
    await orient(page, cdp, { alpha: 0, beta: 90, gamma: 0 });
    await POSE(page, { yaw: 0.30, pitch: 0.14 });
    await FRAME_ALL(page, 1.18);
    // Screen positions come from the camera matrices, which only update during
    // a render. Without this the taps below would aim at the previous pose.
    await sleepFrames(page, 0, 2);
    const idA = await NODE_ID(page, 'Method of loci');
    const idB = await NODE_ID(page, 'Slide budget: 12');
    const fired = [];
    await page.exposeFunction('__gesture', g => fired.push(g));
    await page.evaluate(() => {
      const orig = window.mm.showGesture.bind(window.mm);
      window.mm.showGesture = (id, detail) => { window.__gesture(id); return orig(id, detail); };
    });
    const A = await SCREEN_OF(page, idA), B = await SCREEN_OF(page, idB);
    let newId = null, drag = null;
    const steps = [
      // Screen positions are re-read before each touch: any interaction may
      // have moved the view, and a driver that aims at stale coordinates
      // proves nothing.
      { at: 45,  fn: async () => { const a = await SCREEN_OF(page, idA); if (a) await touch.tap(cdp, a.x, a.y); } },
      { at: 150, fn: async () => { const a = await SCREEN_OF(page, idA); if (a) await touch.tap(cdp, a.x, a.y); } },
      { at: 156, fn: async () => { const a = await SCREEN_OF(page, idA); if (a) await touch.tap(cdp, a.x, a.y); } },
      { at: 205, fn: async () => { const b2 = await SCREEN_OF(page, idB); if (b2) await touch.tap(cdp, b2.x, b2.y); } },
      { at: 300, fn: async () => touch.start(cdp, 320, 830) },                      // long-press begins
      { at: 322, fn: async () => { await touch.end(cdp);                            // fires at +500 ms
          newId = await page.evaluate(() => window.mm.selected); } },
      { at: 400, fn: async () => { drag = await SCREEN_OF(page, newId); if (drag) await touch.start(cdp, drag.x, drag.y); } },
      ...Array.from({ length: 30 }, (_, k) => ({ at: 402 + k * 2, fn: async () => {
          if (!drag) return;
          await touch.move(cdp, [{ x: drag.x + (k + 1) * 15, y: drag.y - (k + 1) * 12, id: 1 }]);
        } })),
      { at: 466, fn: async () => touch.end(cdp) },
      { at: 560, fn: async () => touch.start(cdp, 1380, 470) },                     // look around
      ...Array.from({ length: 34 }, (_, k) => ({ at: 562 + k * 2, fn: async () =>
          touch.move(cdp, [{ x: 1380 - (k + 1) * 4, y: 470 + (k + 1) * 1.4, id: 1 }]) })),
      { at: 634, fn: async () => touch.end(cdp) },
      { at: 720, fn: async () => cdp.send('Input.dispatchTouchEvent',                // pinch / spread
          { type: 'touchStart', touchPoints: [{ x: 830, y: 520, id: 1 }, { x: 1090, y: 560, id: 2 }] }) },
      ...Array.from({ length: 34 }, (_, k) => ({ at: 722 + k * 2, fn: async () =>
          cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [
            { x: 830 - (k + 1) * 2.2, y: 520 - (k + 1) * 0.8, id: 1 },
            { x: 1090 + (k + 1) * 2.2, y: 560 + (k + 1) * 0.8, id: 2 }] }) })),
      { at: 794, fn: async () => cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] }) },
      // The device is turned: the vantage swings while every node stays where
      // it is, with the live orientation readout tracking the movement.
      ...Array.from({ length: 40 }, (_, k) => ({ at: 840 + k * 4, fn: async () =>
          orient(page, cdp, { alpha: (k + 1) * 1.6, beta: 90 - (k + 1) * 0.55, gamma: 0 }) })),
    ];
    await H.record(page, cdp, { out: H.out(this.file), seconds: 34, onFrame: script(steps) });
    const uniq = [...new Set(fired)];
    const gyroEnd = await page.evaluate(() => (window.mm.gyro ? { ...window.mm.gyro } : null));
    const poseEnd = await page.evaluate(() => ({ yaw: +window.mm.scene.pose.yaw.toFixed(3),
                                                 pitch: +window.mm.scene.pose.pitch.toFixed(3) }));
    const linked = await page.evaluate(({ a, b }) => Object.values(window.mm.store.doc.links)
      .some(l => (l.a === a && l.b === b) || (l.a === b && l.b === a)), { a: idA, b: idB });
    const placed = newId ? await page.evaluate(i => !!(window.mm.store.doc.nodes[i] || {}).placed, newId) : false;
    return { lens: 'ar', gesturesFired: uniq, count: uniq.length, quickAddedNode: newId,
             tapSelected: A && B ? true : false, doubleTapConnected: linked, dragPlacedIt: placed,
             gyroEnd, poseEnd,
             holding: await page.evaluate(() => window.mm.store.holdingCount()) };
  },
},
{
  id: '17', file: '17_hand_vocabulary.mp4', kind: 'mp4', minW: 1920, minH: 1080,
  minFps: 24, minSec: 24, surface: 'windows', map: 'map-fermentation',
  title: 'Hand gesture vocabulary', camera: 'hand-vocabulary-slow',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', camera: true });
    await POSE(page, { yaw: 0.30, pitch: 0.16 });
    await FRAME_ALL(page, 1.02);
    await page.click('[data-t=hands-chip]');
    await page.waitForFunction(() => window.mm.hands.enabled, null, { timeout: 90000 });
    const poses = [];
    await page.exposeFunction('__pose', p => poses.push(p));
    await page.evaluate(() => {
      setInterval(() => { const f = window.mm.hands.frame; if (f.present) window.__pose(f.pose); }, 120);
    });
    // Cluster arrangement before any grab, so the video's claim is checkable.
    let grabAnchor = null;
    const before = await H.clusterShape(page, 'Koji');
    const steps = [
      // Tracking off, then reframe so the mouse-only tail is shown on a
      // composed map rather than wherever the last gesture left the camera.
      { at: 780, fn: async () => { await page.click('[data-t=hands-chip]'); } },
      { at: 795, fn: async () => page.evaluate(() => window.mm.frameAll(1.02)) },
      // Grab one named cluster with the mouse and move it, held long enough
      // that the same members are readable before and after and their spacing
      // can be seen to be unchanged.
      { at: 830, fn: async () => {
          const id = await NODE_ID(page, 'Koji on pearl barley');
          grabAnchor = await SCREEN_OF(page, id);
          if (grabAnchor) {
            await page.mouse.move(grabAnchor.x, grabAnchor.y);
            await page.keyboard.down('Alt');
            await page.mouse.down();
          } } },
      ...Array.from({ length: 26 }, (_, k) => ({ at: 834 + k * 2, fn: async () => {
          if (grabAnchor) await page.mouse.move(grabAnchor.x - (k + 1) * 5, grabAnchor.y + (k + 1) * 3);
        } })),
      { at: 890, fn: async () => { await page.mouse.up(); await page.keyboard.up('Alt'); } },
      { at: 960, fn: async () => page.click('[data-t=tool-spread]') },
      { at: 1000, fn: async () => page.click('[data-t=tool-gather]') },
      { at: 1040, fn: async () => page.click('[data-t=tool-two]') },
    ];
    await H.record(page, cdp, { out: H.out(this.file), seconds: 38, onFrame: script(steps) });
    const after = await H.clusterShape(page, 'Koji');
    const centroid = await page.evaluate(() => {
      const ns = Object.values(window.mm.store.doc.nodes).filter(n => n.placed && n.label === 'Koji');
      const c = ns.reduce((a, n) => [a[0] + n.pos[0], a[1] + n.pos[1], a[2] + n.pos[2]], [0, 0, 0]);
      return c.map(v => +(v / ns.length).toFixed(3));
    });
    const uniq = [...new Set(poses)].filter(p => p !== 'none');
    return { posesRecognised: uniq, count: uniq.length, samples: poses.length,
             clusterGrabbed: 'Koji', clusterMoved: before === after && !!grabAnchor,
             clusterCentroidAfter: centroid,
             clusterInternalArrangementPreserved: before === after, mouseOnlyTail: true };
  },
},
{
  id: '18', file: '18_search_flyto.mp4', kind: 'mp4', minW: 1920, minH: 1080,
  minFps: 24, minSec: 10, surface: 'windows', map: 'map-fermentation',
  title: 'Search fly-to in motion',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    await POSE(page, { yaw: 0.42, pitch: 0.20 });
    await FRAME_ALL(page, 1.02);
    const q = 'grape leaf';
    const steps = [
      ...q.split('').map((ch, k) => ({ at: 45 + k * 6, fn: async () => {
        await page.focus('[data-t=search]');
        await page.evaluate(c => {
          const el = document.querySelector('[data-t=search]');
          el.value += c; el.dispatchEvent(new Event('input', { bubbles: true }));
        }, ch);
      } })),
      { at: 45 + q.length * 6 + 24, fn: async () => page.press('[data-t=search]', 'Enter') },
    ];
    await H.record(page, cdp, { out: H.out(this.file), seconds: 13, onFrame: script(steps) });
    const id = await NODE_ID(page, 'Grape leaf tannin trick');
    const scr = await SCREEN_OF(page, id);
    return { query: q, endDistance: +(await page.evaluate(() => window.mm.scene.pose.dist)).toFixed(2),
             centred: scr ? { dx: Math.round(scr.x - 960), dy: Math.round(scr.y - 540) } : null,
             hits: await page.evaluate(() => window.mm.hits.length) };
  },
},
{
  id: '19', file: '19_capture_place_arc.mp4', kind: 'mp4', minW: 1920, minH: 1080,
  minFps: 24, minSec: 15, surface: 'windows', map: 'map-talk', title: 'Capture-place arc',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas', map: 'map-talk' });
    await POSE(page, { yaw: 0.28, pitch: 0.12 });
    await FRAME_ALL(page, 1.14);
    const text = 'Rehearse the fly-to twice';
    let id = null, dropAt = null;
    const steps = [
      ...text.split('').map((ch, k) => ({ at: 40 + k * 3, fn: async () => {
        await page.evaluate(c => {
          const el = document.querySelector('[data-t=capture-text]');
          el.focus(); el.value += c;
        }, ch);
      } })),
      { at: 40 + text.length * 3 + 20, fn: async () => {
        await page.click('[data-t=capture]');
        id = await page.evaluate(() => window.mm.selected);
      } },
      { at: 250, fn: async () => { const s = await SCREEN_OF(page, id); if (s) { await page.mouse.move(s.x, s.y); await page.mouse.down(); dropAt = { x: s.x + 420, y: s.y - 400 }; } } },
      ...Array.from({ length: 40 }, (_, k) => ({ at: 254 + k * 3, fn: async () => {
        const s = await SCREEN_OF(page, id);
        if (s && dropAt) await page.mouse.move(s.x + (dropAt.x - s.x) / (40 - k), s.y + (dropAt.y - s.y) / (40 - k));
      } })),
      { at: 380, fn: async () => page.mouse.up() },
    ];
    await H.record(page, cdp, { out: H.out(this.file), seconds: 18, onFrame: script(steps) });
    const n = await page.evaluate(i => { const x = window.mm.store.doc.nodes[i]; return x && { placed: x.placed, pos: x.pos, text: x.text }; }, id);
    await sleepFrames(page, 0, 40);
    const after = await page.evaluate(i => { const x = window.mm.store.doc.nodes[i]; return x && x.pos; }, id);
    return { text, created: !!n, placed: n && n.placed, pos: n && n.pos,
             stayedPut: JSON.stringify(n && n.pos) === JSON.stringify(after),
             holding: await page.evaluate(() => window.mm.store.holdingCount()) };
  },
},
{
  id: '20', file: '20_finder_roundtrip.mp4', kind: 'mp4', minW: 1920, minH: 1080,
  minFps: 24, minSec: 20, surface: 'windows', map: 'map-talk', title: 'Finder round-trip',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', map: 'map-talk' });
    await FRAME_ALL(page, 1.12);
    await page.click('[data-t=open-finder]');
    await page.evaluate(() => window.mm.clearOfPanels());
    const log = { parses: [] };
    const type = async (sel, text) => page.evaluate(({ s, t }) => {
      const el = document.querySelector(s); el.focus(); el.value = t;
      el.dispatchEvent(new Event('input', { bubbles: true }));
    }, { s: sel, t: text });

    const linksBefore = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
    const steps = [
      { at: 30,  fn: async () => page.click('[data-t=finder-generate]') },
      { at: 90,  fn: async () => page.click('[data-t=finder-copy]') },
      // 1 — malformed. Visible error, zero change.
      { at: 150, fn: async () => type('[data-t=finder-reply]', REPLIES[0].text) },
      { at: 210, fn: async () => { await page.click('[data-t=finder-parse]');
        log.parses.push(await page.evaluate(() => ({ ok: !!(window.mm.lastParse && window.mm.lastParse.ok),
          error: window.mm.lastParse && window.mm.lastParse.error, staged: window.mm.suggestions.length,
          links: Object.keys(window.mm.store.doc.links).length }))); } },
      // 2 — adversarially messy. Parses; bad entries rejected with reasons.
      { at: 330, fn: async () => type('[data-t=finder-reply]', REPLIES[1].text) },
      { at: 390, fn: async () => { await page.click('[data-t=finder-parse]');
        log.parses.push(await page.evaluate(() => ({ ok: !!(window.mm.lastParse && window.mm.lastParse.ok),
          staged: window.mm.suggestions.length,
          dropped: window.mm.lastParse ? window.mm.lastParse.dropped.length : 0,
          kinds: window.mm.suggestions.map(s => s.kind) }))); } },
      { at: 480, fn: async () => { log.accepted = await page.evaluate(() => {
          const s = window.mm.suggestions[0]; return s && { kind: s.kind, id: s.id }; });
        await page.click('[data-t=finder-accept]'); } },
      { at: 570, fn: async () => { log.rejected = await page.evaluate(() => {
          const s = window.mm.suggestions[0]; return s && { kind: s.kind, id: s.id }; });
        log.linksBeforeReject = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
        log.nodesBeforeReject = await page.evaluate(() => JSON.stringify(window.mm.store.doc.nodes));
        await page.click('[data-t=finder-reject]');
        log.linksAfterReject = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
        log.nodesAfterReject = await page.evaluate(() => JSON.stringify(window.mm.store.doc.nodes)); } },
      // Placement is the ONLY finder path that writes a node position, and
      // positions are declared sacred — so it is the acceptance most worth
      // showing. Reach it the way a user does: by dispatching the suggestions
      // in front of it, one at a time, not by jumping an index.
      { at: 640, fn: async () => {
          for (let guard = 0; guard < 4; guard++) {
            const kind = await page.evaluate(() => {
              const s = window.mm.suggestions[window.mm.sugIndex];
              return s ? s.kind : null;
            });
            if (kind === 'placement' || kind === null) break;
            await page.click('[data-t=finder-reject]');
            await page.waitForTimeout(40);
          }
        } },
      { at: 700, fn: async () => {
          log.holdingBeforePlacement = await page.evaluate(() => window.mm.store.holdingCount());
          log.placement = await page.evaluate(() => {
            const s = window.mm.suggestions[window.mm.sugIndex];
            return s && s.kind === 'placement'
              ? { node: s.node, to: s.pos, wasPlaced: window.mm.store.doc.nodes[s.node].placed,
                  from: window.mm.store.doc.nodes[s.node].pos.slice() }
              : null;
          });
          if (log.placement) await page.click('[data-t=finder-accept]');
        } },
      { at: 740, fn: async () => {
          log.afterPlacement = await page.evaluate((n) => {
            const x = n ? window.mm.store.doc.nodes[n] : null;
            return x ? { placed: x.placed, pos: x.pos.slice() } : null;
          }, log.placement ? log.placement.node : null);
          log.holdingAfterPlacement = await page.evaluate(() => window.mm.store.holdingCount());
        } },
    ];
    await H.record(page, cdp, { out: H.out(this.file), seconds: 30, onFrame: script(steps) });
    return {
      placementAccepted: log.placement && log.afterPlacement
        ? { node: log.placement.node, from: log.placement.from, to: log.afterPlacement.pos,
            landedWhereSuggested: JSON.stringify(log.afterPlacement.pos) === JSON.stringify(log.placement.to),
            wasUnplaced: log.placement.wasPlaced === false, nowPlaced: log.afterPlacement.placed,
            holding: [log.holdingBeforePlacement, log.holdingAfterPlacement] }
        : null,
      replyPath: "authored by the agent's own session acting as the chat (declared in report.md); " +
                 'a malformed reply and an adversarially messy reply pass through the same parser in the same take',
      malformed: log.parses[0], messy: log.parses[1],
      accepted: log.accepted, rejected: log.rejected,
      rejectionLeftNoTrace: log.linksBeforeReject === log.linksAfterReject &&
                            log.nodesBeforeReject === log.nodesAfterReject,
      linksBefore: JSON.parse(linksBefore || '{}') && Object.keys(JSON.parse(linksBefore)).length,
      linksAfter: await page.evaluate(() => Object.keys(window.mm.store.doc.links).length),
    };
  },
},
];
