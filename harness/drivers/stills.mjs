// Still-image artifacts. Every driver here is the executable form of the
// recipe in docs/capture/<id>.md.
import { POSE, FRAME_ALL, SELECT, NODE_ID, SCREEN_OF, orient, sleepFrames, touch } from './util.mjs';

/**
 * Frozen cameras for the two continuous regression instruments.
 *
 * Each was derived once with the fit rule its comment names, then written down.
 * From here a cycle-over-cycle pixel diff of 02 or 04 is itself the proof that
 * no position moved: if any node's projected pixel shifts, either a position
 * changed or the camera did, and the camera cannot.
 */
export const PIN = {
  // 02 has NEVER been re-pinned and will not be. It is the unbroken instrument:
  // a pixel diff of 02 against any earlier cycle is a position check with no
  // camera change to explain away.
  '02': { yaw: 0.42, pitch: 0.20, dist: 120.110861, target: [4.227, -4.996, 0.6945] },
  // 04 is pinned at the same values it has had since cycle 4, and a re-pin was
  // tried and REVERTED in cycle 5.
  //
  // The Audience asked for it to be framed so the node cloud fills the usable
  // width. Measured across sixteen camera angles, the best available fill is
  // 47 % of frame width against this angle's 42 % — about 12 % more on-screen
  // text — and the frame it produces is worse: the map body climbs to the top,
  // the holding cluster falls to the bottom-left corner with a dead band
  // between them, and 47 labels are suppressed against 43. The remaining margin
  // is the map's own aspect — a tall cloud with the holding cluster well below
  // it — against a 16:9 frame, not a framing error. Breaking a position
  // regression instrument for that is a bad trade, so it was not taken.
  '04': { yaw: 0.30, pitch: 0.16, dist: 128.755009, target: [4.227, -4.996, 0.6945] },
};

/**
 * Every label the frame draws must lie inside the rectangle the deconfliction
 * arbiter reserved for it. The bright tier's disjointness — the property that
 * makes a dense district readable — is a claim about those rectangles, and it
 * says nothing at all if the glyphs are somewhere else. Twice now they were:
 * F-015 (rectangle estimated from a line count) and F-025 (a search hit's label
 * is pushed clear of its signature, and the arbiter measured the core).
 */
const labelAudit = async (page) => {
  const a = await page.evaluate(() => {
    const r = window.mm.scene.labelDrawAudit();
    const nodes = window.mm.store.doc.nodes;
    return { ...r, worstText: r.worst ? nodes[r.worst].text : null,
             offText: r.worstOffFrame ? nodes[r.worstOffFrame].text : null,
             pairText: r.worstPair ? r.worstPair.map(id => nodes[id].text) : null,
             tightText: r.tightestPair ? r.tightestPair.map(id => nodes[id].text) : null,
             truncatedText: r.truncatedIds.slice(0, 60).map(id => nodes[id].text) };
  });
  return { labelsAudited: a.checked, labelWorstOverhangPx: a.worstGapPx,
           labelWorstOverhangOn: a.worstText,
           labelWorstOffFramePx: a.worstOffFramePx, labelWorstOffFrameOn: a.offText,
           labelArbiterAgreesWithDraw: a.checked > 0 && a.worstGapPx === 0,
           // The arbiter's box agreeing with the drawn box says nothing about
           // either being ON SCREEN. Two labels shipped in cycle 7 with ink in
           // column 0 of a frame whose own audit reported a worst overhang of
           // 0 px, because nothing compared a box against the viewport.
           everyLabelInsideTheFrame: a.checked > 0 && a.worstOffFramePx === 0,
           // AND NEITHER OF THE TWO ABOVE COMPARES ONE LABEL AGAINST ANOTHER.
           // I read the pair as "no label collides with anything" and wrote
           // that down; artifact 04 shipped 150 labels passing both while
           // overprinting each other badly enough that a critic misread
           // "Bacon: microbial succession" as "Paper: microbial succession".
           // The overlap is measured now, on the drawn boxes, and the claim is
           // stated in the terms it actually checks.
           labelOverlappingPairs: a.overlappingPairs,
           labelWorstPairOverlapPx: a.worstPairOverlapPx,
           labelWorstPairOn: a.pairText,
           labelTightestPairGapPx: a.tightestPairGapPx,
           labelTightestPairOn: a.tightText,
           noTwoDrawnLabelsOverlap: a.checked > 0 && a.overlappingPairs === 0,
           // A shortened name is as unrecoverable to a reader as a hidden one.
           // The frame said "0 labels hidden" while 43 of 150 were cut.
           labelsTruncated: a.truncated,
           labelsTruncatedOn: a.truncatedText,
           labelAnchors: a.anchors };
};

/**
 * The labels AND whether the things they name can be seen.
 *
 * Runs the in-app label audit, then measures each drawn label's own node marker
 * off the captured PNG with a sampler that shares no code with the renderer.
 * The app can only report where a node PROJECTS; whether its marker survived
 * the depth fade into something a reader can distinguish from the ground is a
 * question about pixels, and it goes unasked otherwise. A frame with 14 names
 * and 4 visible dots satisfies every claim this driver made before today.
 *
 * The anchors themselves are dropped from the result — 150 rectangles per
 * artifact is a payload, not evidence. What survives into the manifest is the
 * count that failed and the worst few, by id and contrast.
 */
const labelsAndMarkers = async (H, page, file) => {
  const a = await labelAudit(page);
  const anchors = a.labelAnchors ?? [];
  delete a.labelAnchors;
  const m = await H.sampleDiscs(H.out(file), anchors);
  return { ...a, markerContrast: m,
           labelsWithoutVisibleMarker: m.invisible ?? null,
           everyDrawnLabelHasAVisibleMarker: m.checked > 0 && m.invisible === 0 };
};

/**
 * How much of the recency channel this frame actually exercises.
 *
 * Recency is normalised across the WHOLE map, so a district whose thoughts were
 * all captured in one sitting is uniformly muted — which is the channel
 * working, not failing. Recording the span per hue family lets that be told
 * apart from a channel that has gone flat everywhere.
 */
const recencySpan = async (page) => page.evaluate(() => {
  const d = window.mm.store.doc, N = window.mm.scene.nodes;
  const sat = N.iSat.array, col = N.iColor.array;
  const ids = Object.values(d.nodes).map(n => n.id);
  let lo = Infinity, hi = -Infinity;
  for (const n of Object.values(d.nodes)) { lo = Math.min(lo, n.createdAt); hi = Math.max(hi, n.createdAt); }
  const by = {};
  ids.forEach((id, i) => {
    const n = d.nodes[id];
    const r = col[i * 3], g = col[i * 3 + 1], b = col[i * 3 + 2];
    const lum = 0.299 * r + 0.587 * g + 0.114 * b;
    const chroma = Math.hypot(r - lum, g - lum, b - lum);
    (by[n.color] ??= []).push({ rec: (n.createdAt - lo) / (hi - lo), on: sat[i] * chroma });
  });
  const out = {}; let gLo = 1e9, gHi = -1e9;
  for (const [k, v] of Object.entries(by)) {
    const on = v.map(x => x.on), rec = v.map(x => x.rec);
    out[k] = { n: v.length,
               recency: [+Math.min(...rec).toFixed(2), +Math.max(...rec).toFixed(2)],
               chroma: [+Math.min(...on).toFixed(3), +Math.max(...on).toFixed(3)] };
    gLo = Math.min(gLo, ...on); gHi = Math.max(gHi, ...on);
  }
  return { recencyByDistrict: out,
           recencyChromaSpan: [+gLo.toFixed(3), +gHi.toFixed(3)],
           // The channel must be exercised across the map, whatever any one
           // district's timestamps happen to be.
           recencyChannelExercised: gHi - gLo > 0.25 };
});

export default [
{
  id: '01', file: '01_maps_home.png', kind: 'png',
  requires: { listedCountsMatchTheModel: true, mapsAfterDelete: (n) => n === 2,
              renameWentThroughThePrompt: true },
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
    // On the TABLE, for the same reason the delete wait is: the create button
    // toasts `Created "Sprint retro".`, so a body-text wait was satisfied by the
    // confirmation rather than by the row, and would have passed even if the row
    // never appeared.
    await page.waitForFunction(() => [...document.querySelectorAll('[data-t=maps-home] tbody tr')]
                                     .some(tr => tr.textContent.includes('Sprint retro')),
                               null, { timeout: 15000 });
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    const a = await H.tmpShot(page, cdp, '01a');
    const id = await page.evaluate(() => (window.mm.maps.find(m => m.name === 'Sprint retro') || {}).id);
    // THROUGH THE ROW'S OWN BUTTONS. The caption said all three operations were
    // "driven through the real buttons" and only the create was: rename and
    // delete went straight to the sync request, past the controls a person
    // would use. The buttons exist; the rename one opens a prompt, which is
    // answered here the way a person answers it.
    // The prompt is answered the way a person answers it. Two details mattered
    // and both cost a capture to find: the accept must be AWAITED, and the
    // replacement name is plain ASCII — with an em dash in it the dialog was
    // accepted, `window.prompt` returned nothing usable, and the rename silently
    // did not happen while every step reported success.
    let dialogSeen = null;
    page.on('dialog', async d => { dialogSeen = d.type(); await d.accept('Retro - sprint 14'); });
    await page.click(`[data-t="map-rename-${id}"]`);
    await page.waitForFunction(i => (document.querySelector(`[data-t="map-row-${i}"]`)?.textContent ?? '')
                                     .includes('Retro - sprint 14'), id, { timeout: 15000 });
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    const b = await H.tmpShot(page, cdp, '01b');
    // The maps overlay replaces its whole table on every list change, so for a
    // moment after the rename the row's own Delete button is a node that is
    // about to be thrown away. A click landing in that window does nothing and
    // reports success. Waiting for the row to settle is the capture's part of
    // the fix; the app's part is recorded as a finding rather than papered over.
    await page.waitForSelector(`[data-t="map-delete-${id}"]`);
    await page.waitForTimeout(400);
    await page.click(`[data-t="map-delete-${id}"]`);
    // WAIT ON THE TABLE, NOT ON THE PAGE. The delete button toasts
    // `Deleted "Retro - sprint 14".`, so a wait for the name to disappear from
    // document.body.innerText waits for the confirmation of the very thing it
    // is waiting for and times out — with the delete already done. The capture
    // failed for fifteen seconds on a step that had succeeded immediately.
    await page.waitForFunction(i => !document.querySelector(`[data-t="map-row-${i}"]`),
                               id, { timeout: 15000 });
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    const c = await H.tmpShot(page, cdp, '01c');
    const crop = async (src, tag) => H.crop(src, H.tmp(`01-${tag}.png`), 0, 40, 1920, 360);
    const panels = [await crop(a, 'a'), await crop(b, 'b'), await crop(c, 'c')];
    await H.compose(panels, H.out(this.file), { mode: 'v', width: 1920, height: 1080,
      labels: ['Create — “Sprint retro” added', 'Rename — now “Retro - sprint 14”', 'Delete — removed; both seeded maps remain'] });
    // THE NUMBERS THE TABLE PRINTS, AGAINST THE MODEL'S OWN COUNTS.
    //
    // This artifact carried zero machine-checked claims — the cycle-8 Auditor
    // counted 18 of 20 artifacts with claims and this was one of the two
    // without. Its whole subject is a table of node counts, which is exactly
    // the kind of number that can drift from the thing it describes without
    // anyone noticing.
    const listed = await page.evaluate(() => Object.fromEntries(window.mm.maps.map(m =>
      [m.id, Number(document.querySelector(`[data-t=map-nodes-${m.id}]`)?.textContent.trim())])));
    const counts = await page.evaluate(() => Object.fromEntries(window.mm.maps.map(m => [m.id, m.nodes])));
    const wrong = Object.keys(counts).filter(k => listed[k] !== counts[k]);
    return { maps: counts, listedOnFrame: listed, countMismatches: wrong,
             renameWentThroughThePrompt: dialogSeen === 'prompt',
             listedCountsMatchTheModel: wrong.length === 0 && Object.keys(counts).length > 0,
             mapsAfterDelete: Object.keys(counts).length,
             note: 'create, rename and delete each driven through that row\'s own button; three states composited' };
  },
},
{
  id: '02', file: '02_canvas_large_map.png', kind: 'png',
  requires: { cameraPinned: true, nodes: (n) => n === 150, labelArbiterAgreesWithDraw: true,
              everyLabelInsideTheFrame: true,
              // The cycle-8 Auditor called 02 a regression: +85.5 % label ink,
              // three unreadable overprinted pairs where cycle 7 had none, and
              // the two claims above passed throughout because neither of them
              // looks at one label against another. These two do.
              noTwoDrawnLabelsOverlap: true, everyDrawnLabelHasAVisibleMarker: true },
  demonstrates: 'canvas lens at whole-map framing on Windows, 150 nodes with seed provenance', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Canvas at scale',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    // PINNED CAMERA. This artifact and 04 are the continuous cross-cycle
    // position-regression instruments, and a camera re-derived each run makes
    // them undiffable: cycle 3's fit changed and 0 of 93 node cores landed
    // within 1.5 px of their cycle-2 pixels, so the audit had to borrow the
    // proof from elsewhere. Frozen here, a cycle-over-cycle pixel diff of 02 IS
    // the position proof. Derived once from frameAll(1.10) at this pose.
    await POSE(page, PIN['02']);
    await H.shot(page, cdp, H.out(this.file));
    return { ...await H.modelStats(page), camera: PIN['02'], cameraPinned: true,
             ...(await labelsAndMarkers(H, page, this.file)) };
  },
},
{
  id: '03', file: '03_hero_ar_coldstart.png', kind: 'png',
  demonstrates: 'AR lens hero on Android at cold first launch, one map at two device orientations',
  minW: 2560, minH: 1440,
  surface: 'android', map: 'map-fermentation', title: 'Hero — AR projection, cold start',
  coldStart: true,
  requires: { gyroDroveTheView: true, positionsUnchangedBetweenPanels: true, headingChanged: (d) => d > 25,
              anchorNamedInBothPanels: true },
  async run(H) {
    // Cold start: the sync service's live data directory is wiped before this
    // driver runs, so the map is read fresh from the committed seed fixture.
    //
    // TWO PANELS, ONE MAP, TWO DEVICE ORIENTATIONS. A single AR still can only
    // assert that the vantage is gyro-driven — the Audience's cycle-3 finding
    // was that nothing in the picture showed it. Two panels of the same map at
    // two headings, with a named node traceable between them and the readout
    // moving in step, prove it from the frames. No HUD, no horizon, no grid:
    // the only thing that changes is where the map is seen from.
    const { page, cdp } = await H.app({ surface: 'android', lens: 'ar', width: 1280, height: 1440, touch: true });
    const poseBefore = await page.evaluate(() => ({ yaw: +window.mm.scene.pose.yaw.toFixed(3),
                                                    pitch: +window.mm.scene.pose.pitch.toFixed(3) }));
    // Frame ONE district at reading distance with the holding ring at the edge
    // of frame. The hero's job is to put a person inside a place they remember,
    // which a whole-map thumbnail cannot do.
    await page.evaluate(() => {
      const mm = window.mm, d = mm.store.doc;
      const ns = Object.values(d.nodes).filter(n => n.placed && n.label === 'Lacto-vegetables');
      const c = ns.reduce((a, n) => [a[0] + n.pos[0], a[1] + n.pos[1], a[2] + n.pos[2]], [0, 0, 0])
                  .map(v => v / ns.length);
      const h = d.holding.origin, p = mm.scene.pose;
      p.target.set((c[0] * 0.70 + h[0] * 0.30), (c[1] * 0.70 + h[1] * 0.30), (c[2] * 0.70 + h[2] * 0.30));
      // At 1.42 the hero was two dense text fields at uniform weight with
      // nothing designed to be looked at first, and at 0.92 it was denser
      // still. Framing alone was never going to give it a subject; the
      // reticle's aimed node now takes the top rung of the ladder and its
      // filaments come live, so the frame has one thing to look at first.
      p.dist = Math.hypot(c[0] - h[0], c[1] - h[1], c[2] - h[2]) * 1.18;
    });
    const anchorId = await NODE_ID(page, 'Sauerkraut by weight');
    // THE NODE THE HEADLINE IS ABOUT IS KEPT IN VIEW, through the app's own
    // control. The hero asserts that "Sauerkraut by weight" travelled 271 px
    // while its stored position did not change, and panel 2 drew that node's
    // label as "Sauerkraut by…" with its marker indistinguishable among a
    // hundred and fifty dots — a frame making a claim about a thing it would
    // not name. Keeping it in view rings the node and names it in full in BOTH
    // panels, and the pin survives the device turn, which is the property the
    // artifact is about.
    //
    // Done by tapping the node and pressing the editor's own button, then
    // tapping empty space to close the panel: the same sequence a person
    // performs, not a state written into the app from outside.
    if (anchorId) {
      const at = await SCREEN_OF(page, anchorId);
      if (at) {
        await touch.tap(cdp, at.x, at.y);
        await sleepFrames(page, 0, 2);
        await page.click('[data-t=ed-pin]');
        await page.click('[data-t=ed-close]');
        await sleepFrames(page, 0, 2);
      }
    }
    const pinned = await page.evaluate(() => window.mm.pinned);
    // The framing is re-applied after the pin, because opening the editor pans
    // the view clear of the panel — a real behaviour that would otherwise leave
    // the hero framed somewhere else.
    await page.evaluate(() => {
      const mm = window.mm, d = mm.store.doc;
      const ns = Object.values(d.nodes).filter(n => n.placed && n.label === 'Lacto-vegetables');
      const c = ns.reduce((a, n) => [a[0] + n.pos[0], a[1] + n.pos[1], a[2] + n.pos[2]], [0, 0, 0])
                  .map(v => v / ns.length);
      const h = d.holding.origin, p = mm.scene.pose;
      p.target.set((c[0] * 0.70 + h[0] * 0.30), (c[1] * 0.70 + h[1] * 0.30), (c[2] * 0.70 + h[2] * 0.30));
      p.dist = Math.hypot(c[0] - h[0], c[1] - h[1], c[2] - h[2]) * 1.18;
    });
    const panel = async (o, tag) => {
      // The app's own deviceorientation listener is what moves the camera.
      const received = await orient(page, cdp, o);
      await sleepFrames(page, 0, 4);
      const pose = await page.evaluate(() => ({ yaw: +window.mm.scene.pose.yaw.toFixed(3),
                                                pitch: +window.mm.scene.pose.pitch.toFixed(3) }));
      const gyro = await page.evaluate(() => (window.mm.gyro ? { ...window.mm.gyro } : null));
      const anchor = anchorId ? await SCREEN_OF(page, anchorId) : null;
      const positions = await H.positions(page);
      const file = await H.tmpShot(page, cdp, tag);
      // The pin's own name, read off the chrome, so "named in full in both
      // panels" is a fact about the frame rather than about the intent.
      const pinName = await page.evaluate(() => {
        const e = document.querySelector('[data-t=pin-name]');
        return e && getComputedStyle(e.parentElement).display !== 'none' ? e.textContent.trim() : null;
      });
      return { received, pose, gyro, anchor: anchor ? { x: Math.round(anchor.x), y: Math.round(anchor.y) } : null,
               pinName, positions, file, sent: o };
    };
    // Neutral hold first, so the second panel is a turn from a real rest state.
    await orient(page, cdp, { alpha: 0, beta: 90, gamma: 0 });
    const A = await panel({ alpha: 34, beta: 62, gamma: 6 }, '03a');
    const B = await panel({ alpha: 96, beta: 58, gamma: -4 }, '03b');
    // The readout the app itself shows: alpha is heading, beta tilt, gamma roll.
    const hdg = (g) => (g ? Math.round(g.alpha) : null);
    const cap = (p) => `device heading ${hdg(p.gyro)}° · tilt ${p.gyro ? Math.round(p.gyro.beta) : '—'}° · ` +
                       `“Sauerkraut by weight” at x=${p.anchor ? p.anchor.x : '—'} px · every node position unchanged`;
    // The titles say what the frame PROVES, and the measurement carries the
    // headline. The panels used to be titled as a projection demonstration
    // while the footer said there is no camera pass-through — the claim and the
    // evidence were reading against each other at a glance. What this frame
    // actually establishes is a gyroscopic vantage over a map that does not
    // move, and the anchor node's travel is the falsifiable part of it.
    // THE DISTANCE THE ANCHOR TRAVELLED, not its x component. The caption said
    // 'travelled 117 px' from |dx| alone, where the anchor moved (117, -179) —
    // 214 px. A frame whose whole falsifiable claim is one number must not
    // under-report that number.
    const shift = A.anchor && B.anchor
      ? Math.round(Math.hypot(B.anchor.x - A.anchor.x, B.anchor.y - A.anchor.y)) : null;
    const shiftXY = A.anchor && B.anchor
      ? [Math.round(B.anchor.x - A.anchor.x), Math.round(B.anchor.y - A.anchor.y)] : null;
    await H.compose([A.file, B.file], H.out(this.file), { mode: 'h', width: 2560, height: 1440,
      labels: [`Gyroscopic vantage — device held at heading ${hdg(A.gyro)}°`,
               `Turned to heading ${hdg(B.gyro)}° — every node position unchanged`],
      sublabels: [cap(A), cap(B)],
      sublabels2: [
        'cold first launch from the committed seed · the app’s own deviceorientation listener moves the vantage; nothing writes the camera',
        shift === null ? 'anchor not resolved'
          : `the vantage moved: “Sauerkraut by weight” travelled ${shift} px across the frame ` +
            `(${shiftXY[0]}, ${shiftXY[1]}) while its stored position did not change`,
      ] });

    const st = await H.modelStats(page);
    const same = JSON.stringify(A.positions) === JSON.stringify(B.positions);
    return { ...st,
             panels: [{ sent: A.sent, received: A.received, pose: A.pose, anchor: A.anchor },
                      { sent: B.sent, received: B.received, pose: B.pose, anchor: B.anchor }],
             poseBefore,
             gyroDroveTheView: !!A.received && !!B.received &&
               (A.pose.yaw !== B.pose.yaw || A.pose.pitch !== B.pose.pitch) &&
               (poseBefore.yaw !== A.pose.yaw || poseBefore.pitch !== A.pose.pitch),
             headingChanged: Math.abs((hdg(B.gyro) ?? 0) - (hdg(A.gyro) ?? 0)),
             anchorMovedOnScreen: shift, anchorMovedOnScreenXY: shiftXY,
             positionsUnchangedBetweenPanels: same,
             pinnedNode: pinned, pinNameA: A.pinName, pinNameB: B.pinName,
             // The frame names, in full and in BOTH panels, the node its
             // headline measures. Read off the chrome in each panel, so a
             // truncated or missing name fails the capture rather than
             // appearing only as a critic's observation two cycles later.
             anchorNamedInBothPanels: A.pinName === 'Sauerkraut by weight' &&
                                      B.pinName === 'Sauerkraut by weight' };
  },
},
{
  id: '04', file: '04_mind_expansion.png', kind: 'png',
  requires: { cameraPinned: true, nodes: (n) => n === 150, labelArbiterAgreesWithDraw: true,
              everyLabelInsideTheFrame: true, recencyChannelExercised: true,
              noTwoDrawnLabelsOverlap: true, everyDrawnLabelHasAVisibleMarker: true },
  demonstrates: 'mind-expansion lens, the whole map and the holding cluster on screen at once', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Mind expansion overview',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion' });
    // The holding cluster is part of the map: a tighter crop that clips it
    // trades a whole region for a few percent of label size.
    // PINNED CAMERA, for the same reason as 02. Derived once from
    // frameAll(1.0) at this pose, with the chrome safe area reserved inside
    // fitAll, so the whole map and the holding ring are in frame and clear of
    // the pose bar — and stay exactly there in every future cycle.
    await POSE(page, PIN['04']);
    await H.shot(page, cdp, H.out(this.file));
    return { ...await H.modelStats(page), camera: PIN['04'], cameraPinned: true,
             ...(await labelsAndMarkers(H, page, this.file)), ...(await recencySpan(page)) };
  },
},
{
  id: '06', file: '06_holding_cluster.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { holdingRingFillsFrame: true, everyHeldNodeInFrame: true,
              countMatchesMarkers: true, everyHeldLabelAttributable: true,
              noTwoDrawnLabelsOverlap: true, everyDrawnLabelHasAVisibleMarker: true,
              everyHeldMarkerCountable: true },
  demonstrates: 'the holding cluster framed on its own boundary: every unplaced node inside the dashed ring, and the holding count that names them', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Holding cluster',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    const h = await page.evaluate(() => window.mm.store.doc.holding);
    // SOLVE the distance instead of guessing a multiple of the radius. At a
    // fixed 4.2x the ring sat in the middle of the frame with the bottom half
    // of the composition empty and the frame's loudest text belonging to a
    // district this artifact is not about. The distance is searched so the
    // boundary's own projected height fills the frame, measured through the
    // app's projection rather than assumed from the radius.
    const ringHeightFrac = () => page.evaluate((hh) => {
      const sc = window.mm.scene, el = sc.renderer.domElement;
      const pts = [];
      for (let k = 0; k < 24; k++) {
        const a = (k / 24) * Math.PI * 2;
        for (const p of [[Math.cos(a), 0, Math.sin(a)], [Math.cos(a), Math.sin(a), 0]])
          pts.push([hh.origin[0] + p[0] * hh.radius, hh.origin[1] + p[1] * hh.radius,
                    hh.origin[2] + p[2] * hh.radius]);
      }
      let lo = 1e9, hi = -1e9;
      for (const p of pts) { const q = sc.project(p); if (!q) return null;
                             lo = Math.min(lo, q.y); hi = Math.max(hi, q.y); }
      return (hi - lo) / el.height;
    }, h);
    // THE ANGLE IS SOLVED TOO, for a countable cluster.
    //
    // The cycle-8 Auditor found two of the eight held markers at roughly
    // (853,556) and (848,567) — 11 px apart, overlapping enough to read as one
    // dot at 1×, on the artifact whose point is that the waiting count is
    // glanceable. Their positions are the model's and are not the render's to
    // change: nudging a marker apart on screen would be drawing a thought
    // somewhere it does not live, which is the one thing this whole project
    // refuses to do, and moving them in the seed would void every position
    // regression claim in the run (§09).
    //
    // What a person would do instead is look from a different angle. The nodes
    // are at different points in space, so a vantage exists from which they
    // separate. The yaw is searched for the one that maximises the SMALLEST
    // on-screen gap between any two held markers, and the distance is then
    // solved at that yaw as before. Nothing moves; the camera walks around the
    // ring until every waiting thought is its own dot.
    const heldSeparation = async () => page.evaluate(() => {
      const held = new Set(Object.values(window.mm.store.doc.nodes).filter(n => !n.placed).map(n => n.id));
      const pts = window.mm.scene.screenPositions().filter(q => held.has(q.id));
      let worst = Infinity, pair = null;
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i].x - pts[j].x, pts[i].y - pts[j].y) - (pts[i].r + pts[j].r);
        if (d < worst) { worst = d; pair = [pts[i].id, pts[j].id]; }
      }
      return { worst: Number.isFinite(worst) ? +worst.toFixed(1) : null, pair, n: pts.length };
    });
    const probeDist = h.radius * 3.2;
    let bestYaw = 0.35, bestSep = -Infinity;
    for (let k = 0; k < 24; k++) {
      const y = (k / 24) * Math.PI * 2;
      await POSE(page, { target: h.origin, yaw: y, pitch: 0.10, dist: probeDist });
      await sleepFrames(page, 0, 1);
      const sep = await heldSeparation();
      if (sep.worst !== null && sep.worst > bestSep) { bestSep = sep.worst; bestYaw = y; }
    }
    const TARGET = 0.80;
    let lo = h.radius * 1.2, hi = h.radius * 8;
    for (let i = 0; i < 22; i++) {
      const mid = (lo + hi) / 2;
      await POSE(page, { target: h.origin, yaw: bestYaw, pitch: 0.10, dist: mid });
      await sleepFrames(page, 0, 1);
      const f = await ringHeightFrac();
      if (f === null || f > TARGET) lo = mid; else hi = mid;
    }
    await POSE(page, { target: h.origin, yaw: bestYaw, pitch: 0.10, dist: hi });
    await sleepFrames(page, 0, 3);
    const sep = await heldSeparation();
    await H.shot(page, cdp, H.out(this.file));
    const st = await H.modelStats(page);
    const frac = await ringHeightFrac();
    // ATTRIBUTION, measured on the frame that ships. A holding ring packs its
    // dots close together and the names radiate outward, so a label can finish
    // nearer a neighbour's dot than its own — which makes the cluster unreadable
    // however legible the type is. For each held label: is the nearest node to
    // its box its own?
    const attribution = await page.evaluate(() => {
      const sc = window.mm.scene, d = window.mm.store.doc;
      const scr = sc.screenPositions();
      const rows = [];
      for (const [id, r] of sc.labelRects) {
        if (r.alpha <= 0.02 || d.nodes[id].placed) continue;
        const near = (p) => {
          const x = Math.min(Math.max(p.x, r.x0), r.x1), y = Math.min(Math.max(p.y, r.y0), r.y1);
          return Math.hypot(p.x - x, p.y - y);
        };
        const ds = scr.map(p => ({ id: p.id, d: near(p) })).sort((a, b) => a.d - b.d);
        rows.push({ text: d.nodes[id].text, own: +ds.find(x => x.id === id).d.toFixed(1),
                    nearestIsOwn: ds[0].id === id, hasLeader: window.mm.leaderFor.has(id),
                    margin: +(ds[1].d - ds[0].d).toFixed(1) });
      }
      return rows;
    });
    const held = await page.evaluate(() => {
      const sc = window.mm.scene, d = window.mm.store.doc, el = sc.renderer.domElement;
      const ids = Object.values(d.nodes).filter(n => !n.placed).map(n => n.id);
      const scr = sc.screenPositions().filter(p => ids.includes(p.id));
      const inFrame = scr.filter(p => p.x > 0 && p.y > 0 && p.x < el.width && p.y < el.height);
      const badge = document.querySelector('[data-t=holding-count]');
      return { held: ids.length, onScreen: scr.length, inFrame: inFrame.length,
               badge: badge ? badge.textContent.replace(/\D+/g, '') : null };
    });
    // The held cluster is not the only thing on this frame. The cycle-8
    // Audience critic counted 10 label strings against 5 markers in one crop of
    // it, and nothing in this driver was looking: every claim above is about
    // the eight HELD names, so the other thirty-odd went unmeasured.
    return { ...(await labelsAndMarkers(H, page, this.file)),
             ...st, holdingOrigin: h.origin, holdingRadius: h.radius,
             heldMarkerYaw: +bestYaw.toFixed(3),
             heldMarkerWorstGapPx: sep.worst, heldMarkerClosestPair: sep.pair,
             // Every waiting thought is its own dot: the tightest pair of held
             // markers clears both their radii by at least four pixels.
             everyHeldMarkerCountable: sep.worst !== null && sep.worst >= 4,
             cameraDistance: +hi.toFixed(3), ringHeightFraction: +Number(frac ?? 0).toFixed(3),
             heldNodes: held,
             // The ring is the subject: it has to be the thing the frame is of.
             heldLabelAttribution: attribution,
             heldLabelsNearestOwnNode: attribution.filter(r => r.nearestIsOwn).length,
             heldLabelsWithLeader: attribution.filter(r => r.hasLeader).length,
             // Every held name is attributable: either the thought it names is
             // the nearest one to it, or a line joins the two. A name a reader
             // can pin to the wrong dot is worse than one that is not drawn.
             everyHeldLabelAttributable: attribution.length > 0 &&
               attribution.every(r => r.nearestIsOwn || r.hasLeader),
             holdingRingFillsFrame: (frac ?? 0) >= 0.55,
             everyHeldNodeInFrame: held.inFrame === held.held,
             // The badge counts what the frame shows, not what the driver hopes.
             countMatchesMarkers: held.badge !== null && Number(held.badge) === held.held };
  },
},
{
  id: '07', file: '07_five_node_states.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { ok: true, ladderMonotonic: true, ladderStepsClearScatter: true },
  demonstrates: 'the five node states side by side with the legend, with the luminance ladder measured off the shipped frame', minW: 1920, minH: 1080,
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
    // MEASURE THE LADDER OFF THE FRAME. The rungs are a decision (D-015) and
    // their bounding by depth is another (D-016); until cycle 7 the numbers
    // proving both lived in report.md prose, re-derived by hand whenever a
    // critic asked. They are read here from the pixels this artifact ships,
    // at each node's own core centre, so the claim below travels with the file.
    const centres = await page.evaluate(() => {
      const sc = window.mm.scene, d = window.mm.store.doc;
      return sc.screenPositions().map(p => ({ id: p.id, text: d.nodes[p.id].text,
                                              x: Math.round(p.x), y: Math.round(p.y) }));
    });
    const lum = await H.samplePixels(H.out(this.file), centres);
    const byState = {};
    for (const c of centres) {
      const st = states[c.text];
      if (!st || lum[c.id] == null) continue;
      (byState[st] ??= []).push(lum[c.id]);
    }
    const ORDER = ['plain', 'connected', 'unplaced', 'searchHit', 'selected'];
    const mean = (a) => a.reduce((x, y) => x + y, 0) / a.length;
    const rung = {}, spread = {};
    for (const st of ORDER) if (byState[st]) {
      rung[st] = Number(mean(byState[st]).toFixed(4));
      spread[st] = Number((Math.max(...byState[st]) - Math.min(...byState[st])).toFixed(4));
    }
    const present = ORDER.filter(st => rung[st] != null);
    const steps = present.slice(1).map((st, i) => Number((rung[st] - rung[present[i]]).toFixed(4)));
    return { statesInFrame: [...seen].sort(), byNode: states,
             measuredRungs: rung, withinRungSpread: spread, rungSteps: steps,
             // The ladder must climb, and every step must clear the within-rung
             // scatter by a margin — otherwise two nodes in the same state are
             // as far apart as two nodes in different ones.
             ladderMonotonic: steps.every(v => v > 0),
             minRungStep: steps.length ? Math.min(...steps) : 0,
             maxWithinRungSpread: Math.max(0, ...present.map(st => spread[st])),
             ladderStepsClearScatter: steps.length > 0 &&
               Math.min(...steps) > Math.max(0, ...present.map(st => spread[st])),
             ok: ['connected', 'plain', 'searchHit', 'selected', 'unplaced'].every(s => seen.has(s)) };
  },
},
{
  id: '09', file: '09_connect_edit.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { connectedByThisCapture: true, linkedBefore: false, linkedAfter: true,
              editorWroteToTheModel: true, recencyMatchesModel: true },
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

    const colourBefore = await page.evaluate(i => window.mm.store.doc.nodes[i].color, a);
    const textBefore = await page.evaluate(i => window.mm.store.doc.nodes[i].text, a);

    // Connect through the editor's own control and a click on the second node —
    // the same path a user takes.
    await page.click('[data-t=ed-link]');
    const s = await SCREEN_OF(page, b);
    await page.mouse.click(s.x, s.y);
    await sleepFrames(page, 0, 2);
    await SELECT(page, A);
    // And EDIT, through the same panel. The editor was being shown as a static
    // prop beside the connect proof — offering controls but never seen writing
    // to the model. The colour swatch moves its outline, the node's core changes
    // hue, and the text the canvas renders changes with the field.
    await page.click('[data-t=ed-colour-teal]');
    await page.fill('[data-t=ed-text]', `${A} · aged 60d`);
    await page.evaluate(t => {
      const el = document.querySelector('[data-t=ed-text]');
      el.value = t; el.dispatchEvent(new Event('input', { bubbles: true }));
    }, `${A} · aged 60d`);
    await sleepFrames(page, 0, 2);
    // Clear the transient toast so the frame shows the result, not the prompt
    // that preceded it.
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    await sleepFrames(page, 0, 3);
    const after = await H.tmpShot(page, cdp, '09b');
    const colourAfter = await page.evaluate(i => window.mm.store.doc.nodes[i].color, a);
    const textAfter = await page.evaluate(i => window.mm.store.doc.nodes[i].text, a);
    await H.compose([before, after], H.out(this.file), { mode: 'h', width: 1920, height: 1080,
      labels: [`Before — “${A}” selected, no link to “${B}”`,
               `After — the filament exists, and the editor has written to the node`],
      sublabels: [`colour ${colourBefore} · text “${textBefore}”`,
                  `colour ${colourAfter} · text “${textAfter}” — both changed through the panel, position untouched`] });

    const linkedAfter = await page.evaluate(({ a, b }) => Object.values(window.mm.store.doc.links)
      .some(l => (l.a === a && l.b === b) || (l.a === b && l.b === a)), { a, b });
    const moved = await page.evaluate(() => Object.fromEntries(
      Object.values(window.mm.store.doc.nodes).map(n => [n.id, n.pos])));
    // The recency line, checked against the model rather than against itself.
    // The legend states that chroma names age; until cycle 7 nothing in the app
    // let a reader check that for any particular node, so the one modelled
    // property with a declared visual channel (§06) could only be taken on
    // trust. The panel now states the node's date and its rank, and this
    // recomputes both from the document.
    const recency = await page.evaluate(() => {
      const el = document.querySelector('[data-t=ed-recency]');
      const shown = el ? el.textContent.trim() : '';
      const id = window.mm.selected;
      if (!id) return { shown, ok: false };
      const d = window.mm.store.doc, n = d.nodes[id];
      const all = Object.values(d.nodes);
      const older = all.filter(m => m.createdAt < n.createdAt).length;
      const pct = Math.round(100 * older / (all.length - 1));
      const when = new Date(n.createdAt).toISOString().slice(0, 10);
      return { shown, when, pct, ok: shown.includes(when) && shown.includes(`${pct}%`) };
    });
    return { between: [A, B], linkedBefore, linkedAfter, connectedByThisCapture: !linkedBefore && linkedAfter,
             nodeCount: Object.keys(moved).length, editorOpen: true,
             colourBefore, colourAfter, textBefore, textAfter,
             recencyShown: recency.shown, recencyMatchesModel: recency.ok,
             editorWroteToTheModel: colourBefore !== colourAfter && textBefore !== textAfter };
  },
},
{
  id: '13', file: '13_finder_prompt.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { hasPositions: true, hasInstructions: true, mentionsUnplaced: true,
              noLabelUnderThePanel: true },
  demonstrates: 'the finder prompt export, preamble and position records together', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Finder prompt export',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', map: 'map-talk' });
    await page.click('[data-t=open-finder]');
    await page.click('[data-t=finder-generate]');
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
    // FRAMED AFTER THE PANEL IS ITS FINAL SIZE. The map used to be fitted, then
    // cleared of a 430 px panel, and only then was the panel widened to 640 —
    // so the fit had been solved against a band that no longer existed and
    // 'Opening: where did you park?' was clipped mid-word by the panel edge.
    await sleepFrames(page, 0, 2);
    await FRAME_ALL(page, 1.10);
    await sleepFrames(page, 0, 2);
    await H.shot(page, cdp, H.out(this.file));
    const p = await page.evaluate(() => document.querySelector('[data-t=finder-prompt]').value);
    // No label may be cut by the panel that sits over the map.
    const clipped = await page.evaluate(() => {
      const sc = window.mm.scene, el = sc.renderer.domElement;
      const f = document.getElementById('finder');
      if (!f) return [];
      const dpr = el.width / Math.max(window.innerWidth, 1);
      const r = f.getBoundingClientRect();
      const box = { x0: r.left * dpr, y0: r.top * dpr, x1: r.right * dpr, y1: r.bottom * dpr };
      const out = [];
      for (const [id, q] of sc.labelRects) {
        if (q.alpha <= 0.02) continue;
        if (q.x1 > box.x0 && q.x0 < box.x1 && q.y1 > box.y0 && q.y0 < box.y1)
          out.push(window.mm.store.doc.nodes[id].text);
      }
      return out;
    });
    return { promptChars: p.length, hasPositions: /"pos":\s*\[/.test(p),
             labelsUnderThePanel: clipped, noLabelUnderThePanel: clipped.length === 0,
             hasInstructions: p.includes('Return ONLY JSON'), mentionsUnplaced: p.includes('"unplaced"') };
  },
},
{
  id: '15', file: '15_settings_gestures.png', kind: 'png',
  requires: { referenceMatchesTheRuntime: true },
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
    // THE REFERENCE TABLE IS CHECKED AGAINST THE RUNTIME.
    //
    // This artifact is the set's source of truth for both vocabularies — the
    // text artifact 05's caption contradicted for a whole cycle — and it
    // carried zero machine-checked claims, as the cycle-8 Auditor pointed out.
    // Every operation string the table prints must be the string the app holds
    // for that pose, read from the rendered table and from the app's own
    // vocabulary and compared, not eyeballed.
    const table = await page.evaluate(() => {
      const cells = (sel) => [...document.querySelectorAll(`${sel} tbody tr`)]
        .map(tr => [...tr.querySelectorAll('td,th')].map(td => td.textContent.trim()));
      const inTable = (rowsIn, want) => rowsIn.some(r => r.some(c => c === want));
      const hand = window.mm.handVocab.map(h => ({ id: h.id, name: h.name, operation: h.operation }));
      const touch = window.mm.touchVocab.map(t => ({ id: t.id, name: t.name, operation: t.operation }));
      const hr = cells('[data-t=hand-reference]'), tr2 = cells('[data-t=touch-reference]');
      const missing = [];
      for (const h of hand) { if (!inTable(hr, h.name)) missing.push(`hand name ${h.name}`);
                              if (!inTable(hr, h.operation)) missing.push(`hand operation ${h.operation}`); }
      for (const t of touch) { if (!inTable(tr2, t.name)) missing.push(`touch name ${t.name}`);
                               if (!inTable(tr2, t.operation)) missing.push(`touch operation ${t.operation}`); }
      return { checked: hand.length * 2 + touch.length * 2, missing };
    });
    return { ...f, ...rows,
             vocabularyStringsChecked: table.checked,
             vocabularyMismatches: table.missing,
             referenceMatchesTheRuntime: table.missing.length === 0 && table.checked > 0 };
  },
},
];
