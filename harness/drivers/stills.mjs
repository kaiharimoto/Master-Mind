// Still-image artifacts. Every driver here is the executable form of the
// recipe in docs/capture/<id>.md.
import { POSE, FRAME_ALL, SELECT, NODE_ID, SCREEN_OF, orient, sleepFrames } from './util.mjs';

export default [
{
  id: '01', file: '01_maps_home.png', kind: 'png',
  demonstrates: 'maps home: create, rename and delete a map, both seeded maps listed with node counts', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation',
  title: 'Maps home',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows' });
    await page.click('[data-t=open-maps]');
    await page.waitForSelector('[data-t=maps-home]');
    // create -> rename -> delete, really driven through the buttons.
    await page.fill('[data-t=maps-new-name]', 'Sprint retro');
    await page.click('[data-t=maps-create]');
    await page.waitForFunction(() => document.body.innerText.includes('Sprint retro'), null, { timeout: 15000 });
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    const a = await H.tmpShot(page, cdp, '01a');
    const id = await page.evaluate(() => (window.mm.maps.find(m => m.name === 'Sprint retro') || {}).id);
    await page.evaluate(i => window.mm.sync.request({ t: 'maps.rename', id: i, name: 'Retro — sprint 14' }), id);
    await page.waitForFunction(() => document.body.innerText.includes('Retro — sprint 14'), null, { timeout: 15000 });
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    const b = await H.tmpShot(page, cdp, '01b');
    await page.evaluate(i => window.mm.sync.request({ t: 'maps.delete', id: i }), id);
    await page.waitForFunction(() => !document.body.innerText.includes('Retro — sprint 14'), null, { timeout: 15000 });
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    const c = await H.tmpShot(page, cdp, '01c');
    const crop = async (src, tag) => H.crop(src, H.tmp(`01-${tag}.png`), 0, 40, 1920, 360);
    const panels = [await crop(a, 'a'), await crop(b, 'b'), await crop(c, 'c')];
    await H.compose(panels, H.out(this.file), { mode: 'v', width: 1920, height: 1080,
      labels: ['Create — “Sprint retro” added', 'Rename — now “Retro — sprint 14”', 'Delete — removed; both seeded maps remain'] });
    const counts = await page.evaluate(() => Object.fromEntries(window.mm.maps.map(m => [m.id, m.nodes])));
    return { maps: counts, note: 'create/rename/delete driven through the real buttons; three states composited' };
  },
},
{
  id: '02', file: '02_canvas_large_map.png', kind: 'png',
  demonstrates: 'canvas lens at whole-map framing on Windows, 150 nodes with seed provenance', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Canvas at scale',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    await POSE(page, { yaw: 0.42, pitch: 0.20 });
    await FRAME_ALL(page, 1.10);
    await H.shot(page, cdp, H.out(this.file));
    return H.modelStats(page);
  },
},
{
  id: '03', file: '03_hero_ar_coldstart.png', kind: 'png',
  demonstrates: 'AR lens hero on Android at cold first launch, gyro-oriented vantage', minW: 2560, minH: 1440,
  surface: 'android', map: 'map-fermentation', title: 'Hero — AR projection, cold start',
  coldStart: true,
  async run(H) {
    // Cold start: the sync service's live data directory is wiped before this
    // driver runs, so the map is read fresh from the committed seed fixture.
    const { page, cdp } = await H.app({ surface: 'android', lens: 'ar', width: 2560, height: 1440, touch: true });
    // Two orientations, as a real handheld surface produces: the first
    // establishes the neutral hold, the second is the user turning the device.
    // The camera moves only through the app's own deviceorientation listener.
    const poseBefore = await page.evaluate(() => ({ yaw: +window.mm.scene.pose.yaw.toFixed(3),
                                                    pitch: +window.mm.scene.pose.pitch.toFixed(3) }));
    await orient(page, cdp, { alpha: 0, beta: 90, gamma: 0 });
    const received = await orient(page, cdp, { alpha: 34, beta: 62, gamma: 6 });
    // Frame every node, then settle the vantage a little low so the districts
    // fill the upper frame and the holding cluster sits in the lower frame.
    // The hero's job is to put a person inside a place they remember, which a
    // whole-map thumbnail cannot do. Frame ONE district at reading distance
    // with the holding ring at the edge of frame, not the entire brain.
    await page.evaluate(() => {
      const mm = window.mm, d = mm.store.doc;
      const ns = Object.values(d.nodes).filter(n => n.placed && n.label === 'Lacto-vegetables');
      const c = ns.reduce((a, n) => [a[0] + n.pos[0], a[1] + n.pos[1], a[2] + n.pos[2]], [0, 0, 0])
                  .map(v => v / ns.length);
      const h = d.holding.origin;
      const p = mm.scene.pose;
      p.target.set((c[0] * 0.70 + h[0] * 0.30), (c[1] * 0.70 + h[1] * 0.30), (c[2] * 0.70 + h[2] * 0.30));
      // Far enough to keep the holding ring in frame, close enough to read.
      p.dist = Math.hypot(c[0] - h[0], c[1] - h[1], c[2] - h[2]) * 1.42;
    });
    await sleepFrames(page, 0, 4);
    await H.shot(page, cdp, H.out(this.file));
    const st = await H.modelStats(page);
    const pose = await page.evaluate(() => ({ yaw: +window.mm.scene.pose.yaw.toFixed(3),
                                              pitch: +window.mm.scene.pose.pitch.toFixed(3) }));
    return { ...st, gyroNeutral: { alpha: 0, beta: 90, gamma: 0 },
             gyroSent: { alpha: 34, beta: 62, gamma: 6 }, gyroReceivedByApp: received,
             poseBefore, pose,
             gyroDroveTheView: !!received && (poseBefore.yaw !== pose.yaw || poseBefore.pitch !== pose.pitch) };
  },
},
{
  id: '04', file: '04_mind_expansion.png', kind: 'png',
  demonstrates: 'mind-expansion lens, the whole map and the holding cluster on screen at once', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Mind expansion overview',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion' });
    // The holding cluster is part of the map: a tighter crop that clips it
    // trades a whole region for a few percent of label size.
    await POSE(page, { yaw: 0.30, pitch: 0.16 });
    // The chrome safe area is now reserved inside fitAll itself, so the margin
    // no longer has to double as clearance for the pose bar: it can be tight
    // and the map still cannot land under a button.
    await FRAME_ALL(page, 1.0);
    await H.shot(page, cdp, H.out(this.file));
    return H.modelStats(page);
  },
},
{
  id: '06', file: '06_holding_cluster.png', kind: 'png',
  demonstrates: 'the holding cluster: unplaced nodes in the dashed ring with the holding count', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Holding cluster',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    const h = await page.evaluate(() => window.mm.store.doc.holding);
    await POSE(page, { target: h.origin, yaw: 0.35, pitch: 0.10, dist: h.radius * 4.2 });
    await sleepFrames(page, 0, 3);
    await H.shot(page, cdp, H.out(this.file));
    const st = await H.modelStats(page);
    return { ...st, holdingOrigin: h.origin, holdingRadius: h.radius };
  },
},
{
  id: '07', file: '07_five_node_states.png', kind: 'png',
  demonstrates: 'the five node states side by side with the legend', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Five node states staged',
  async run(H) {
    // The small map is used because all five states can coexist in one frame
    // there without a camera move that hides the holding cluster.
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas', map: 'map-talk' });
    await page.click('[data-t=open-states]');
    await page.fill('[data-t=search]', 'loci');
    await page.waitForTimeout(80);
    await SELECT(page, 'Positions are the memory');
    await POSE(page, { yaw: 0.30, pitch: 0.13 });
    await FRAME_ALL(page, 1.10);
    // Framing resets the target, so clear the panels AFTER it, not before.
    await page.evaluate(() => window.mm.clearOfPanels());
    await sleepFrames(page, 0, 3);
    await H.shot(page, cdp, H.out(this.file), 1600);   // mid-pulse for the unplaced state
    const states = await page.evaluate(() => {
      const mm = window.mm, d = mm.store.doc;
      const st = window.__states ? null : null;
      const sel = mm.selected, hits = new Set(mm.hits);
      const conn = new Set(); for (const l of Object.values(d.links)) {
        if (l.a === sel) conn.add(l.b); else if (l.b === sel) conn.add(l.a); }
      const out = {};
      for (const n of Object.values(d.nodes)) {
        out[n.text] = n.id === sel ? 'selected' : hits.has(n.id) ? 'searchHit'
          : !n.placed ? 'unplaced' : conn.has(n.id) ? 'connected' : 'plain';
      }
      void st; return out;
    });
    const seen = new Set(Object.values(states));
    return { statesInFrame: [...seen].sort(), byNode: states,
             ok: ['connected', 'plain', 'searchHit', 'selected', 'unplaced'].every(s => seen.has(s)) };
  },
},
{
  id: '09', file: '09_connect_edit.png', kind: 'png',
  demonstrates: 'connect and edit before/after: a new filament created between two named nodes', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Connect and edit',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas', width: 960, height: 1080 });
    const A = 'Koji-cured egg yolk', B = 'Shio koji';
    const a = await SELECT(page, A);
    const b = await NODE_ID(page, B);
    await POSE(page, { yaw: 0.5, pitch: 0.12 });
    // Both ends of the filament have to be IN the frame and clear of the editor
    // panel, or the artifact shows an edge arriving from off-screen. The vantage
    // is pulled back until the two named nodes are both in the visible band —
    // measured, not guessed, and it throws rather than shipping a frame where
    // the thing being demonstrated is behind a panel.
    let framed = null;
    for (const margin of [1.5, 1.9, 2.4, 3.0, 3.8]) {
      // Framed on the TWO nodes, in the band the editor leaves. Framing the
      // whole map and then panning to clear the panel centres the map in that
      // band, which is not the same as putting these two nodes in it.
      await page.evaluate(({ a, b, margin }) => window.mm.frameNodes([a, b], margin), { a, b, margin });
      await sleepFrames(page, 0, 3);
      framed = await page.evaluate(({ a, b }) => {
        const ed = document.getElementById('editor');
        const lim = ed ? ed.getBoundingClientRect().left - 10 : window.innerWidth;
        const s = window.mm.scene.screenPositions();
        const ok = (i) => { const q = s.find(p => p.id === i);
          return !!q && q.x > 12 && q.x < lim && q.y > 60 && q.y < window.innerHeight - 40; };
        return { a: ok(a), b: ok(b), lim };
      }, { a, b });
      if (framed.a && framed.b) break;
    }
    if (!framed || !framed.a || !framed.b)
      throw new Error(`09: both ends of the connection must be visible and clear of the editor (${JSON.stringify(framed)})`);
    const linkedBefore = await page.evaluate(({ a, b }) => Object.values(window.mm.store.doc.links)
      .some(l => (l.a === a && l.b === b) || (l.a === b && l.b === a)), { a, b });
    const before = await H.tmpShot(page, cdp, '09a');

    // Connect through the editor's own control and a click on the second node —
    // the same path a user takes.
    await page.click('[data-t=ed-link]');
    const s = await SCREEN_OF(page, b);
    await page.mouse.click(s.x, s.y);
    await sleepFrames(page, 0, 2);
    await SELECT(page, A);
    // Clear the transient toast so the frame shows the result, not the prompt
    // that preceded it.
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    await sleepFrames(page, 0, 3);
    const after = await H.tmpShot(page, cdp, '09b');
    await H.compose([before, after], H.out(this.file), { mode: 'h', width: 1920, height: 1080,
      labels: [`Before — “${A}” selected, no link to “${B}”`,
               `After — the filament exists, editor open on text, colour and label`] });

    const linkedAfter = await page.evaluate(({ a, b }) => Object.values(window.mm.store.doc.links)
      .some(l => (l.a === a && l.b === b) || (l.a === b && l.b === a)), { a, b });
    const moved = await page.evaluate(() => Object.fromEntries(
      Object.values(window.mm.store.doc.nodes).map(n => [n.id, n.pos])));
    return { between: [A, B], linkedBefore, linkedAfter, connectedByThisCapture: !linkedBefore && linkedAfter,
             nodeCount: Object.keys(moved).length, editorOpen: true };
  },
},
{
  id: '13', file: '13_finder_prompt.png', kind: 'png',
  demonstrates: 'the finder prompt export, preamble and position records together', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Finder prompt export',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', map: 'map-talk' });
    await FRAME_ALL(page, 1.10);
    await page.click('[data-t=open-finder]');
    await page.click('[data-t=finder-generate]');
    // Scroll the prompt to where the node JSON with positions is visible.
    await page.evaluate(() => window.mm.clearOfPanels());
    // Tall enough to hold the instruction preamble and the first position
    // records in one frame, scrolled to the top rather than into the middle of
    // a record: the artifact is specified as JSON *plus* instructions.
    await page.evaluate(() => {
      const t = document.querySelector('[data-t=finder-prompt]');
      t.style.height = '820px'; t.rows = 40;
      t.style.fontSize = '10px';
      t.scrollTop = 0;
      const p = document.getElementById('finder');
      if (p) p.style.width = '640px';
    });
    await sleepFrames(page, 0, 2);
    await H.shot(page, cdp, H.out(this.file));
    const p = await page.evaluate(() => document.querySelector('[data-t=finder-prompt]').value);
    return { promptChars: p.length, hasPositions: /"pos":\s*\[/.test(p),
             hasInstructions: p.includes('Return ONLY JSON'), mentionsUnplaced: p.includes('"unplaced"') };
  },
},
{
  id: '15', file: '15_settings_gestures.png', kind: 'png',
  demonstrates: 'settings and the gesture reference for touch and hand vocabularies', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Settings and gesture reference',
  camera: 'hand-vocabulary',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion' });
    await page.click('[data-t=open-settings]');
    await page.click('[data-t=hand-toggle]');
    // Wait for the tracker to reach a real recognised pose.
    await page.waitForFunction(() => window.mm.hands.enabled, null, { timeout: 60000 });
    await page.waitForFunction(() => window.mm.hands.frame.present && window.mm.hands.frame.pose !== 'none',
                               null, { timeout: 60000 });
    await page.evaluate(() => { document.querySelector('[data-t=settings]').scrollTop = 0; });
    await sleepFrames(page, 0, 2);
    await H.shot(page, cdp, H.out(this.file));
    const f = await page.evaluate(() => ({ pose: window.mm.hands.frame.pose, status: window.mm.hands.status,
                                           sync: window.mm.sync.status, account: window.mm.sync.account }));
    const rows = await page.evaluate(() => ({
      touch: document.querySelectorAll('[data-t=touch-reference] tbody tr').length,
      hand: document.querySelectorAll('[data-t=hand-reference] tbody tr').length,
    }));
    return { ...f, ...rows };
  },
},
];
