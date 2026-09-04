// Still-image artifacts. Every driver here is the executable form of the
// recipe in docs/capture/<id>.md.
import { POSE, FRAME_ALL, SELECT, NODE_ID, SCREEN_OF, orient, sleepFrames } from './util.mjs';

export default [
{
  id: '01', file: '01_maps_home.png', kind: 'png', minW: 1920, minH: 1080,
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
  id: '02', file: '02_canvas_large_map.png', kind: 'png', minW: 1920, minH: 1080,
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
  id: '03', file: '03_hero_ar_coldstart.png', kind: 'png', minW: 2560, minH: 1440,
  surface: 'android', map: 'map-fermentation', title: 'Hero — AR projection, cold start',
  coldStart: true,
  async run(H) {
    // Cold start: the sync service's live data directory is wiped before this
    // driver runs, so the map is read fresh from the committed seed fixture.
    const { page, cdp } = await H.app({ surface: 'android', lens: 'ar', width: 2560, height: 1440, touch: true });
    await orient(page, cdp, { alpha: 38, beta: 74, gamma: 4 });
    await FRAME_ALL(page, 1.06);
    // Drop the vantage so the districts fill the upper frame and the holding
    // cluster sits in the lower frame, as the artifact requires.
    await page.evaluate(() => {
      const p = window.mm.scene.pose;
      const h = window.mm.store.doc.holding;
      p.target.y = (p.target.y + h.origin[1]) / 2 - 1;
      p.dist *= 0.86;
    });
    await sleepFrames(page, 0, 4);
    await H.shot(page, cdp, H.out(this.file));
    const st = await H.modelStats(page);
    return { ...st, gyro: { alpha: 38, beta: 74, gamma: 4 } };
  },
},
{
  id: '04', file: '04_mind_expansion.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Mind expansion overview',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion' });
    await POSE(page, { yaw: 0.30, pitch: 0.16 });
    await FRAME_ALL(page, 1.12);
    await H.shot(page, cdp, H.out(this.file));
    return H.modelStats(page);
  },
},
{
  id: '06', file: '06_holding_cluster.png', kind: 'png', minW: 1920, minH: 1080,
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
  id: '07', file: '07_five_node_states.png', kind: 'png', minW: 1920, minH: 1080,
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
  id: '09', file: '09_connect_edit.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Connect and edit',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    const A = 'Koji-cured egg yolk', B = 'Shio koji';
    const a = await SELECT(page, A);
    const b = await NODE_ID(page, B);
    // Connect through the editor's own control, then click the second node —
    // the same path a user takes.
    await page.click('[data-t=ed-link]');
    await POSE(page, { yaw: 0.5, pitch: 0.12 });
    await page.evaluate(({ a, b }) => {
      const d = window.mm.store.doc;
      const na = d.nodes[a], nb = d.nodes[b];
      const p = window.mm.scene.pose;
      p.target.set((na.pos[0] + nb.pos[0]) / 2, (na.pos[1] + nb.pos[1]) / 2, (na.pos[2] + nb.pos[2]) / 2);
      p.dist = 22;
    }, { a, b });
    await sleepFrames(page, 0, 2);
    const s = await SCREEN_OF(page, b);
    await page.mouse.click(s.x, s.y);
    await sleepFrames(page, 0, 2);
    await SELECT(page, A);
    await sleepFrames(page, 0, 2);
    await H.shot(page, cdp, H.out(this.file));
    const linked = await page.evaluate(({ a, b }) => Object.values(window.mm.store.doc.links)
      .some(l => (l.a === a && l.b === b) || (l.a === b && l.b === a)), { a, b });
    return { connected: linked, between: [A, B], editorOpen: true };
  },
},
{
  id: '13', file: '13_finder_prompt.png', kind: 'png', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Finder prompt export',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', map: 'map-talk' });
    await FRAME_ALL(page, 1.10);
    await page.click('[data-t=open-finder]');
    await page.click('[data-t=finder-generate]');
    // Scroll the prompt to where the node JSON with positions is visible.
    await page.evaluate(() => {
      const t = document.querySelector('[data-t=finder-prompt]');
      t.style.height = '540px'; t.rows = 26;
      t.scrollTop = Math.max(0, t.value.indexOf('MAP JSON') - 40);
    });
    await sleepFrames(page, 0, 2);
    await H.shot(page, cdp, H.out(this.file));
    const p = await page.evaluate(() => document.querySelector('[data-t=finder-prompt]').value);
    return { promptChars: p.length, hasPositions: /"pos":\s*\[/.test(p),
             hasInstructions: p.includes('Return ONLY JSON'), mentionsUnplaced: p.includes('"unplaced"') };
  },
},
{
  id: '15', file: '15_settings_gestures.png', kind: 'png', minW: 1920, minH: 1080,
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
