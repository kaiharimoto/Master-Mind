// Sync, flow and video artifacts.
import { POSE, FRAME_ALL, SELECT, NODE_ID, SCREEN_OF, touch, sleepFrames, orient } from './util.mjs';
import { createHash } from 'node:crypto';
import { ORDER as REPLIES } from '../fixtures/replies.mjs';
import { wrapCaption } from '../capture.mjs';

/** Turn a list of {at, fn} into an onFrame callback for record(). */
const script = (steps) => {
  const byFrame = new Map();
  for (const s of steps) { if (!byFrame.has(s.at)) byFrame.set(s.at, []); byFrame.get(s.at).push(s.fn); }
  return async (i, t) => { for (const fn of byFrame.get(i) || []) await fn(t, i); };
};

export default [
{
  id: '05', file: '05_hand_tracking.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { operationTookEffect: true, declaredSynthetic: true,
              captionMatchesTheAppsVocabulary: true, headlineMatchesTheHud: true },
  demonstrates: 'Windows hand tracking: an open-palm move-closer shown before and after in one framing', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Hand tracking live',
  camera: 'hand-vocabulary-slow',
  async run(H) {
    // A composite, so the operation's EFFECT is legible in this artifact
    // rather than only by measuring across two of them.
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion',
                                        camera: true, width: 960, height: 1080 });
    await POSE(page, { yaw: 0.30, pitch: 0.16 });
    await FRAME_ALL(page, 1.12);
    await page.click('[data-t=hands-chip]');
    await page.waitForFunction(() => window.mm.hands.enabled, null, { timeout: 90000 });
    await page.waitForFunction(() => window.mm.hands.frame.present, null, { timeout: 90000 });
    // Hold at the neutral framing with the hand present but before the pose has
    // acted, so the two panels differ by the operation and nothing else.
    const distBefore = await page.evaluate(() => window.mm.scene.pose.dist);
    const before = await H.tmpShot(page, cdp, '05a', 800);

    await page.waitForFunction(() => ['spread', 'gather'].includes(window.mm.hands.frame.pose),
                               null, { timeout: 90000 });
    for (let i = 0; i < 70; i++) {
      await page.evaluate(t => window.mm.renderAt(t), 800 + i * 33.3);
      await page.waitForTimeout(10);
    }
    const after = await H.tmpShot(page, cdp, '05b', 3200);
    // READ OFF THE FRAME, not from the model after it. The headline was taking
    // the camera distance after the shot while the HUD in the picture had been
    // rendered a moment earlier, so cycle 9 shipped a panel whose HUD said
    // 'view 135.5' under a headline that said 133.5 — two numbers for one
    // quantity, on a demo that lives on measured claims. The webcam HUD is what
    // the frame states, so the frame's own text is the source.
    const hudAfter = await page.evaluate(() => {
      const e = document.querySelector('[data-t=hand-geom]');
      const m = e && /view\s+([0-9.]+)/.exec(e.textContent ?? '');
      return m ? Number(m[1]) : null;
    });
    const distAfter = hudAfter ?? await page.evaluate(() => window.mm.scene.pose.dist);
    const f = await page.evaluate(() => ({ ...window.mm.hands.frame, landmarks: window.mm.hands.frame.landmarks.length }));
    // THE CAPTION IS READ FROM THE APP'S OWN VOCABULARY, not written beside it.
    //
    // It was a hardcoded string, and when the vocabulary was renamed everywhere
    // else — the chip in this very frame, artifact 15's reference table,
    // artifact 17's overlays — this caption kept saying "Open palm — spread the
    // map". The cycle-8 Auditor found it: the last place in the whole set still
    // asserting a layout-deforming operation the build no longer has, in a
    // caption its own frame contradicts, and neither of this artifact's claims
    // looked at the caption. Taking the words from HAND_VOCAB means the caption
    // cannot drift from the app again, because there is only one copy.
    const vocab = await page.evaluate(p => {
      const h = window.mm.handVocab.find(x => x.id === p);
      return h ? { name: h.name, operation: h.operation } : null;
    }, f.pose);
    // The vocabulary's operation string is a sentence with an explanatory
    // clause — "Move closer — the map fills more of the frame; no thought
    // moves" — and set whole into a panel caption it ran off the right edge of
    // the frame. The caption takes the operation's leading clause and states
    // the position guarantee separately; both halves still come from the app's
    // own string, and captionMatchesTheAppsVocabulary asserts that what is
    // printed is a prefix of it rather than a paraphrase beside it.
    const opHead = vocab ? vocab.operation.split(' — ')[0] : null;
    const v = vocab ? `${vocab.name} — ${opHead}` : `pose ${f.pose}`;
    await H.compose([before, after], H.out(this.file), { mode: 'h', width: 1920, height: 1080,
      labels: [`Before — hand detected, pose not yet acting  ·  view distance ${distBefore.toFixed(1)}`,
               `After — ${v}  ·  view distance ${distAfter.toFixed(1)}`],
      // The position guarantee goes in the SUBLABEL, which is wrapped. Set into
      // the headline it ran off the right edge of a 960 px panel and the frame
      // shipped reading "· view distance" with no number — a caption clipped by
      // the fix for a caption that was wrong.
      sublabels: ['', 'no thought moves: the vantage travels, the map does not'] });
    const src = await page.evaluate(() => ({ label: window.mm.hands.sourceLabel,
                                             synthetic: window.mm.hands.synthetic }));
    return { pose: f.pose, poseName: vocab?.name ?? null, operation: vocab?.operation ?? null,
             captionHead: v,
             // Printed text is a PREFIX of the app's own string, not a
             // paraphrase written next to it.
             captionMatchesTheAppsVocabulary: !!vocab && !!opHead &&
               vocab.operation.startsWith(opHead) && v === `${vocab.name} — ${opHead}`,
             landmarks: f.landmarks, tipsOut: f.reach, fan: +f.spreadRatio.toFixed(3),
             confidence: +f.confidence.toFixed(3),
             distBefore: +distBefore.toFixed(2), distAfter: +distAfter.toFixed(2),
             distAfterReadFromTheFrame: hudAfter !== null,
             // The number in the headline and the number in the picture are one
             // number, or this capture failed.
             headlineMatchesTheHud: hudAfter !== null &&
               Math.abs(hudAfter - distAfter) < 0.05,
             operationTookEffect: Math.abs(distAfter - distBefore) > 0.5,
             captureSource: src.label, declaredSynthetic: src.synthetic };
  },
},
{
  id: '08', file: '08_placement_endstate.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { placed: true, stableAfterDrop: true, cameraFrozenAcrossPanels: true },
  demonstrates: 'placement before/after under one frozen camera: one node leaves holding for a permanent position and every other node projects to the same point', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Placement end-state',
  async run(H) {
    // Captured at the panel's own size so the composite needs no downscaling:
    // both halves are full resolution and the holding count stays readable.
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas', map: 'map-talk',
                                        width: 960, height: 1080 });
    await POSE(page, { yaw: 0.28, pitch: 0.12 });
    const id = await NODE_ID(page, 'Steal the parking-lot bit');
    await page.evaluate(i => window.mm.select(i), id);
    // Framed AFTER the editor opens, so the fit solves for the band the panel
    // leaves rather than for the whole viewport. Cycle 2 framed first and let
    // the panel-clearing pan push the holding ring off the left edge, so the
    // count decrement could only be read from the toolbar pill.
    await FRAME_ALL(page, 1.06);
    await sleepFrames(page, 0, 3);
    // The whole dashed holding ring must be inside the visible band in the
    // BEFORE pane: this artifact is about a node leaving that ring.
    const ringVisible = await page.evaluate(() => {
      const h = window.mm.store.doc.holding, sc = window.mm.scene;
      const ed = document.getElementById('editor');
      const lim = ed ? ed.getBoundingClientRect().left - 8 : window.innerWidth;
      const pts = [[h.radius, 0, 0], [-h.radius, 0, 0], [0, h.radius, 0], [0, -h.radius, 0],
                   [0, 0, h.radius], [0, 0, -h.radius]]
        .map(([dx, dy, dz]) => [h.origin[0] + dx, h.origin[1] + dy, h.origin[2] + dz]);
      return pts.every(p => {
        const s = sc.project(p);
        return !!s && s.x > 8 && s.x < lim && s.y > 52 && s.y < window.innerHeight - 30;
      });
    });
    if (!ringVisible) throw new Error('08: the holding ring is not wholly inside the visible band');
    const beforeCount = await page.evaluate(() => window.mm.store.holdingCount());
    const beforePos = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    // The two panes are a before/after of ONE node. If the camera moved between
    // them, every other node moved on screen too, and a reader comparing the
    // panes cannot tell which movement is the placement. Projected points of
    // every node except the dragged one, before and after.
    const OTHERS = () => page.evaluate((skip) => JSON.stringify(
      window.mm.scene.screenPositions().filter(p => p.id !== skip)
        .map(p => [p.id, +p.x.toFixed(2), +p.y.toFixed(2)])), id);
    const othersBefore = await OTHERS();
    const a = await H.tmpShot(page, cdp, '08a');

    const from = await SCREEN_OF(page, id);
    // Dropped clear of the editor panel: a node placed underneath the panel
    // makes the artifact's own subject the one thing you cannot see.
    const edLeft = await page.evaluate(() => {
      const e = document.getElementById('editor');
      return e ? e.getBoundingClientRect().left : window.innerWidth;
    });
    const to = { x: Math.min(from.x + 200, edLeft - 150), y: from.y - 330 };
    await page.mouse.move(from.x, from.y);
    await page.mouse.down();
    for (let k = 1; k <= 14; k++) {
      await page.mouse.move(from.x + (to.x - from.x) * k / 14, from.y + (to.y - from.y) * k / 14);
      await sleepFrames(page, 0, 1);
    }
    await page.mouse.up();
    await sleepFrames(page, 0, 4);
    const landed = await SCREEN_OF(page, id);
    if (!landed || landed.x > edLeft - 60)
      throw new Error(`08: the dropped node landed under the editor panel (x ${landed && landed.x} vs panel ${edLeft})`);
    const othersAfter = await OTHERS();
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
             beforePos, afterPos, stableAfterDrop: JSON.stringify(afterPos) === JSON.stringify(settled),
             cameraFrozenAcrossPanels: othersBefore === othersAfter };
  },
},
{
  id: '10', file: '10_search_flyto_end.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { positionUnchanged: true, severalHitsShown: true, severalHitsMatched: true,
              flownHitCentred: true, labelArbiterAgreesWithDraw: true,
              everyLabelInsideTheFrame: true,
              // Declared now that the arbiter can satisfy them. Both were
              // measured on the cycle-8 frame first and both failed there —
              // 18 of 38 names for nodes outside the frame, and a pair of
              // labels 0.00 px apart — so they are gates on a fixed fault, not
              // gates written to describe what the code already did.
              noTwoDrawnLabelsOverlap: true, everyDrawnLabelHasAVisibleMarker: true,
              everyLabelStaysBesideItsNode: true,
              searchMatchReasonShown: true },
  demonstrates: 'search fly-to end-state: one hit of several centred, with the others still wearing the search-hit signature around it', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-fermentation', title: 'Search fly-to end-state',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    await POSE(page, { yaw: 0.42, pitch: 0.20 });
    await FRAME_ALL(page, 1.02);
    // A query with MORE THAN ONE HIT. 'grape leaf' matched exactly one node, so
    // the artifact that carries search never showed the search-hit state doing
    // the thing it exists for — telling several candidates apart at once — and
    // the 'next hit' affordance had nothing to step through.
    const QUERY = 'koji';
    await page.fill('[data-t=search]', QUERY);
    await page.press('[data-t=search]', 'Enter');
    // WHICH node the app flew to, read from the app. Naming it in advance and
    // measuring the centring against that name reported dx -341, dy 465 for a
    // flight that had in fact landed dead centre on a different hit.
    const id = await page.evaluate(() => window.mm.hits[window.mm.hitIndex]);
    const home = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    let t = 0;
    for (let i = 0; i < 55; i++) { await page.evaluate(x => window.mm.renderAt(x), t); t += 33.3; }
    await H.shot(page, cdp, H.out(this.file), t);
    const after = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
    const pose = await page.evaluate(() => ({ t: window.mm.scene.pose.target.toArray(), d: window.mm.scene.pose.dist }));
    const scr = await SCREEN_OF(page, id);
    // How many of the hits a reader can actually SEE at the end of the flight.
    const hitsInFrame = await page.evaluate(() => {
      const el = window.mm.scene.renderer.domElement;
      const hits = new Set(window.mm.hits);
      return window.mm.scene.screenPositions()
        .filter(p => hits.has(p.id) && p.x > 0 && p.y > 0 && p.x < el.width && p.y < el.height).length;
    });
    const hitCount = await page.evaluate(() => window.mm.hits.length);
    // The search state is exactly where the arbiter and the draw disagreed
    // (F-025), so this artifact audits it too.
    const audit = await page.evaluate(() => {
      const r = window.mm.scene.labelDrawAudit();
      const nodes = window.mm.store.doc.nodes;
      return { ...r, worstText: r.worst ? nodes[r.worst].text : null,
               offText: r.worstOffFrame ? nodes[r.worstOffFrame].text : null,
               pairText: r.worstPair ? r.worstPair.map(id => nodes[id].text) : null,
               tightText: r.tightestPair ? r.tightestPair.map(id => nodes[id].text) : null,
               truncatedText: r.truncatedIds.slice(0, 60).map(id => nodes[id].text) };
    });
    const nodeText = await page.evaluate(i => window.mm.store.doc.nodes[i].text, id);
    // The match REASON, read off the chrome rather than recomputed, so the
    // artifact cannot report a breakdown the frame does not print.
    const breakdown = await page.evaluate(() => {
      const e = document.querySelector('[data-t=search-breakdown]');
      return e && getComputedStyle(e).display !== 'none' ? e.textContent.trim() : null;
    });
    const labelHits = await page.evaluate(() => window.mm.hitLabelMatches.length);
    return { query: QUERY, node: nodeText, hits: hitCount,
             searchBreakdown: breakdown, hitsMatchedOnLabel: labelHits,
             // A lit node whose visible words do not contain the query is
             // correct behaviour and unreadable as such unless the frame says
             // why. It says why or this capture failed.
             searchMatchReasonShown: !!breakdown && /\d+\s+hits?/.test(breakdown) &&
               (labelHits === 0 || /in the label/.test(breakdown)),
             labelsAudited: audit.checked, labelWorstOverhangPx: audit.worstGapPx,
             labelWorstOverhangOn: audit.worstText,
             labelWorstOffFramePx: audit.worstOffFramePx, labelWorstOffFrameOn: audit.offText,
             labelArbiterAgreesWithDraw: audit.checked > 0 && audit.worstGapPx === 0,
             everyLabelInsideTheFrame: audit.checked > 0 && audit.worstOffFramePx === 0,
             // Neither of the two above compares one label against another; see
             // the note in drivers/stills.mjs.
             labelOverlappingPairs: audit.overlappingPairs,
             labelWorstPairOverlapPx: audit.worstPairOverlapPx,
             labelWorstPairOn: audit.pairText,
             labelTightestPairGapPx: audit.tightestPairGapPx,
             labelTightestPairOn: audit.tightText,
             noTwoDrawnLabelsOverlap: audit.checked > 0 && audit.overlappingPairs === 0,
             labelsTruncated: audit.truncated,
             labelsTruncatedOn: audit.truncatedText,
             labelWorstDisplacementPx: audit.worstDisplacementPx,
             labelWorstDisplacementOn: audit.dispText,
             // Informational, and NAMED for what it measures. A flat 40 px is far
             // beside 12 px type and adjacent beside 24 px type, so this counter
             // read as contradicting everyLabelStaysBesideItsNode whenever the
             // type was large. The em figure beside it is the one the rule is
             // stated in and the one the claim is taken from.
             labelsMoreThan40pxFromTheirNode: audit.farFromNode,
             markersBuriedByOtherLabels: audit.markersBuriedByOtherLabels,
             worstBuriedFraction: audit.worstBuriedFraction,
             // A label may sit beside its own node and dead-centre on a
             // neighbour's. The two claims above cannot see that; this can.
             noDrawnLabelBuriesAnotherMarker: audit.checked > 0 && audit.markersBuriedByOtherLabels === 0,
             labelWorstReservedDisplacementPx: audit.worstReservedDisplacementPx,
             labelWorstDisplacementEm: audit.worstDisplacementEm,
             // Beside its node, measured in the label's own type size so the
             // rule means the same thing at every zoom. 2.6 em is the
             // placement cap; a small tolerance covers the drawn box
             // sitting inside the reserved one.
             everyLabelStaysBesideItsNode: audit.checked > 0 && audit.worstDisplacementEm <= 2.8,
             // And whether each of those names has a marker a reader can see.
             // Measured off the captured PNG, not asked of the renderer; see
             // the note on labelsAndMarkers in drivers/stills.mjs.
             ...(await (async () => {
               const m = await H.sampleDiscs(H.out('10_search_flyto_end.png'), audit.anchors ?? []);
               return { markerContrast: m, labelsWithoutVisibleMarker: m.invisible ?? null,
                        everyDrawnLabelHasAVisibleMarker: m.checked > 0 && m.invisible === 0 };
             })()),
             // The flight ends ON the hit, not near it.
             flownHitCentred: !!scr && Math.abs(scr.x - 960) < 40 && Math.abs(scr.y - 540) < 40,
             hitsInFrame,
             // The frame must show the search-hit state on more than one node,
             // or it is a fly-to artifact wearing a search artifact's name.
             severalHitsShown: hitsInFrame >= 2, severalHitsMatched: hitCount >= 3,
             homeBefore: home, homeAfter: after, positionUnchanged: JSON.stringify(home) === JSON.stringify(after),
             cameraTarget: pose.t.map(v => +v.toFixed(2)), endDistance: +pose.d.toFixed(2),
             centred: scr ? { dx: Math.round(scr.x - 960), dy: Math.round(scr.y - 540) } : null };
  },
},
{
  id: '11', file: '11_sync_twin_before.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { positionsIdenticalAcrossSurfaces: true },
  demonstrates: 'twin composite BEFORE: Windows and Android on one map, identical frozen camera', minW: 1920, minH: 1080,
  surface: 'twin', map: 'map-talk', title: 'Twin composite — before',
  pairWith: '12',
  async run(H) { return H.twin(this, 'before'); },
},
{
  id: '12', file: '12_sync_twin_after.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { positionsIdenticalAcrossSurfaces: true, positionEditPropagated: true, onlyTheDraggedNodeMoved: true,
              everyOtherPositionUnchanged: true, noNodeDropped: true, editPropagated: true,
              concurrentConflictKeptBoth: true, bothSurfacesAgreeOnNode: true, twoDistinctSockets: true,
              // The panels' map regions are near-identical in pixels, so the
              // pixels alone cannot say whether this is one render or two. Both
              // halves of the answer are on the frame and both are required:
              // the runtimes differ, and each names the rasteriser it drew
              // through — which is shared, and is why they match.
              panelRuntimesDiffer: true, eachPanelNamesItsRasteriser: true,
              clusterMoveCrossedTheBoundary: true,
              bigMapShownOnBothSurfaces: true, bigMapLedgersIdentical: true,
              everyNodeUnoccludedByChrome: true },
  demonstrates: 'twin composite AFTER: an Android drag and edit arriving on Windows at the same frozen camera, and the 150-node map on those same two sockets under one camera', minW: 1920, minH: 1080,
  surface: 'twin', map: 'map-talk', title: 'Twin composite — after',
  async run(H) { return H.twin(this, 'after'); },
},
{
  id: '14', file: '14_finder_review.png', kind: 'png',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { allThreeKinds: true, rejectionLeftNoTrace: true, rejectedIsGone: true,
              acceptanceLanded: true, cameraFrozenAcrossPanels: true,
              rejectedPairUnjoined: true, detailExceedsPanelScale: true,
              detailRowInsideFrame: true },
  demonstrates: 'the finder review stage: parsed suggestions with accept and reject controls, and the same three moments magnified on the nodes they touch', minW: 1920, minH: 1080,
  surface: 'windows', map: 'map-talk', title: 'Finder review',
  async run(H) {
    // 1280 wide, not 960: below 1200 px the surface drops the desk-only controls
    // — including the Finder button this artifact is about — which is a product
    // rule, not a capture inconvenience. Cycle 5's first attempt at 960 failed
    // its capture on exactly that, and the driver was wrong, not the rule.
    // 1280 -> 960 is a mild downscale and keeps the panel legible.
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'expansion', map: 'map-talk',
                                        width: 1280, height: 1080 });
    await FRAME_ALL(page, 1.12);
    await page.click('[data-t=open-finder]');
    await page.evaluate(() => window.mm.clearOfPanels());
    await page.click('[data-t=finder-generate]');
    await page.fill('[data-t=finder-reply]', REPLIES[1].text);
    await page.click('[data-t=finder-parse]');
    await page.waitForSelector('[data-t=finder-current]');
    const staged = await page.evaluate(() => window.mm.suggestions.map(s => s.kind));
    const linksAtStart = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
    void linksAtStart;
    // THREE PANELS: staged, accepted, rejected. A single still could not carry this:
    // cycle 4's frame showed the toast 'Rejected — no trace left on the map'
    // over a panel reading 'Suggestion 1 of 4' with an untouched card, which is
    // two moments in one frame and therefore proves neither. The left panel is
    // the staged card; the right is the same map one click later.
    // The suggestion CURRENTLY ON THE CARD, whichever it is. Reading a specific
    // index and assuming the queue still holds it there is how cycle 6 shipped
    // rejectedIsGone as a true flag about the ACCEPTED suggestion — see
    // report.md F-021.
    const CURRENT = () => page.evaluate(() => {
      const s = window.mm.suggestions[window.mm.sugIndex], d = window.mm.store.doc;
      if (!s) return null;
      const ids = new Set();
      for (const k of ['a', 'b', 'node']) if (typeof s[k] === 'string') ids.add(s[k]);
      for (const k of ['members', 'nodes']) if (Array.isArray(s[k])) s[k].forEach(v => ids.add(v));
      const nodes = [...ids].filter(i => d.nodes[i]);
      return { id: s.id, kind: s.kind, nodes, texts: nodes.map(i => d.nodes[i].text) };
    });
    const named = await CURRENT();
    await page.evaluate(() => { const t = document.querySelector('#toast'); if (t) t.className = ''; });
    await sleepFrames(page, 0, 3);
    // Which nodes the queued suggestions actually touch. The detail crop is
    // derived from these, never from a hand-typed rectangle, so it follows the
    // take rather than the take being arranged to suit a rectangle.
    // Which nodes the two DECISIONS in this take touch — the one accepted and
    // the one rejected. Cycle 7's first attempt unioned every queued
    // suggestion's nodes, which spans the whole map, so the detail row came out
    // at x0.50: a second copy of the top row rather than a closer look at it.
    const involved = [];
    // The camera check compares PROJECTED POINTS, not the whole record. The
    // first version compared screenPositions() verbatim and failed the capture:
    // a node's marker radius is derived from its degree, so accepting a
    // connection legitimately grows both endpoints. The claim was always about
    // the camera; comparing the radius made it assert something else. See
    // report.md F-020 — the failure and its evidence are recorded there.
    const SCREEN = () => page.evaluate(() => JSON.stringify(window.mm.scene.screenPositions()
      .map(p => [p.id, +p.x.toFixed(2), +p.y.toFixed(2), +p.z.toFixed(2)])));
    const posBefore = await SCREEN();
    const pre = await H.tmpShot(page, cdp, '14a');
    // ACCEPTED, then REJECTED. Cycle 5's pair showed staging and rejection only,
    // so the still that carries the finder category never showed a suggestion
    // taking effect — the accept path lived solely in the video.
    const acceptedSug = await CURRENT();
    involved.push(...(acceptedSug ? acceptedSug.nodes : []));
    const linksBeforeAccept = await page.evaluate(() => Object.keys(window.mm.store.doc.links).length);
    await page.click('[data-t=finder-accept]');
    await page.waitForTimeout(60);
    const linksAfterAccept = await page.evaluate(() => Object.keys(window.mm.store.doc.links).length);
    await sleepFrames(page, 0, 3);
    const mid = await H.tmpShot(page, cdp, '14b');
    // A second frame of the SAME moment with the transient toast hidden, for
    // the detail crop only. The crop cannot avoid the toast without cutting a
    // name off the pair, and a toast sliced down the middle reads as a
    // rendering fault. Nothing but that one overlay's visibility differs; the
    // model, the camera and the frame are the ones above it.
    const HIDE_TOAST = () => page.evaluate(() => {
      const t = document.querySelector('#toast'); if (t) t.className = '';
    });
    await HIDE_TOAST();
    await sleepFrames(page, 0, 2);
    const midClean = await H.tmpShot(page, cdp, '14bc');
    // Read the rejected suggestion off the card IMMEDIATELY BEFORE rejecting it.
    const rejectedSug = await CURRENT();
    involved.push(...(rejectedSug ? rejectedSug.nodes : []));
    const beforeReject = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
    await page.click('[data-t=finder-reject]');
    await page.waitForTimeout(60);
    const after = await page.evaluate(() => JSON.stringify(window.mm.store.doc.links));
    // The pair the rejected suggestion named must be joined by NO link — the
    // strong form of 'no trace', checked against the model rather than against
    // the links dict being byte-identical.
    const rejectedPairJoined = rejectedSug && rejectedSug.nodes.length === 2
      ? await page.evaluate(ns => Object.values(window.mm.store.doc.links)
          .some(l => (l.a === ns[0] && l.b === ns[1]) || (l.a === ns[1] && l.b === ns[0])),
        rejectedSug.nodes)
      : false;
    await sleepFrames(page, 0, 3);
    const post = await H.tmpShot(page, cdp, '14c');
    await HIDE_TOAST();
    await sleepFrames(page, 0, 2);
    const postClean = await H.tmpShot(page, cdp, '14cc');
    const say = (s) => s && s.texts.length === 2
      ? `${s.kind} “${s.texts[0]}” ↔ “${s.texts[1]}”`
      : s ? `${s.kind} of ${s.texts.length} node(s)` : 'the staged suggestion';
    const pair = say(named), applied = say(acceptedSug), refused = say(rejectedSug);
    // TWO ROWS. Three full app frames side by side in a 16:9 canvas draw at half
    // scale and leave the bottom 43 % of the frame black — measured rows
    // 616-1079 of cycle 6's take — so the panel a reviewer has to read is small
    // AND most of the artifact carries nothing. The second row is the same
    // three moments cropped to the nodes the suggestions actually touch, at the
    // magnification that space buys, so the filament that appears on accept and
    // never appears on reject can be seen rather than inferred.
    // FOUR detail cells: the panel itself, then the pair before, joined, and
    // the rejected pair still apart. The top row draws each 1280 px frame into
    // a 640 px panel, which turns the finder card — the artifact's actual
    // subject — into grey mush; the panel had to be read somewhere.
    // 596, not 616. detailRowInsideFrame passed because the row ended at
    // EXACTLY 1080 — flush against the edge is not inside it, and the cycle-9
    // Auditor measured 212 non-background pixels surviving in rows 1075-1079
    // with "Demo:" severed mid-label. Twenty pixels back gives the bottom
    // captions their descenders and turns the claim from an equality that is
    // true by a hair into one with room in it.
    const TOP = 596, BOT = 1080 - TOP, CELL = Math.floor(1920 / 4);
    // The CARD and the rejection log, not the whole panel. The panel is 800 px
    // tall and the detail cell is 382, so cropping all of it would put the
    // subject BELOW the top row's own scale — a detail that is a reduction, the
    // exact fault this row exists to answer.
    const panelBox = await page.evaluate(() => {
      const dpr = window.mm.scene.renderer.domElement.width / Math.max(window.innerWidth, 1);
      const rs = ['[data-t=finder-dropped]', '[data-t=finder-current]', '[data-t=finder-progress]']
        .map(sel => document.querySelector(sel)).filter(Boolean)
        .map(e => e.getBoundingClientRect()).filter(r => r.width > 2 && r.height > 2);
      if (!rs.length) return null;
      return { x0: Math.min(...rs.map(r => r.left)) * dpr, y0: Math.min(...rs.map(r => r.top)) * dpr,
               x1: Math.max(...rs.map(r => r.right)) * dpr, y1: Math.max(...rs.map(r => r.bottom)) * dpr };
    });
    // ONE CROP PER PAIR, not one crop over every node the queue mentions. The
    // accepted pair and the rejected pair sit at opposite ends of this map, so a
    // shared rectangle came out 904 px wide — a x0.71 view, less detail than the
    // top row it sits under. Each detail panel is cropped to the pair its own
    // caption is about, and the crop rectangle is printed on it.
    // The union of each node's MARKER and its drawn LABEL. Padding the disc
    // alone cut the names off — the first take read 'ning: where did you
    // park?' — because a label hangs well clear of the dot it belongs to and
    // may have been re-anchored to any side of it.
    const boxOf = (ids) => page.evaluate((q) => {
      const scr = window.mm.scene.screenPositions().filter(p => q.includes(p.id));
      if (!scr.length) return null;
      const rects = window.mm.scene.labelRects;
      let x0 = 1e9, y0 = 1e9, x1 = -1e9, y1 = -1e9;
      for (const p of scr) {
        x0 = Math.min(x0, p.x - p.r); x1 = Math.max(x1, p.x + p.r);
        y0 = Math.min(y0, p.y - p.r); y1 = Math.max(y1, p.y + p.r);
        const r = rects.get(p.id);
        if (!r || r.alpha <= 0.02) continue;
        x0 = Math.min(x0, r.x0); x1 = Math.max(x1, r.x1);
        y0 = Math.min(y0, r.y0); y1 = Math.max(y1, r.y1);
      }
      return { x0, y0, x1, y1, n: scr.length };
    }, ids);
    const accBox = await boxOf(acceptedSug ? acceptedSug.nodes : []);
    const rejBox = await boxOf(rejectedSug ? rejectedSug.nodes : []);
    // The region of the frame that is MAP rather than chrome. A detail crop
    // that runs into the top bar or the finder panel spends its magnification
    // on a sliver of a control strip and reads as a mis-cut, so a crop is
    // pushed inside this region whenever it fits.
    const safe = await page.evaluate(() => {
      const dpr = window.devicePixelRatio || 1;
      const box = (sel) => { const e = document.querySelector(sel); if (!e) return null;
        const r = e.getBoundingClientRect(); return r.width > 1 && r.height > 1 ? r : null; };
      const top = box('#top'), tools = box('#tools'), finder = box('#finder');
      return { x0: Math.round((finder ? finder.right + 8 : 0) * dpr),
               y0: Math.round((top ? top.bottom + 6 : 0) * dpr),
               x1: Math.round(window.innerWidth * dpr),
               y1: Math.round((tools ? tools.top - 6 : window.innerHeight) * dpr) };
    });
    // The caption strip is solved before the crops are, so the panels fill the
    // row exactly instead of being letterboxed inside it.
    // The strip is solved from the captions that are ACTUALLY passed, not from
    // a shorter draft of them. Sizing it from the draft and then passing longer
    // text made the strip taller than the geometry assumed, and about 30 px of
    // every detail panel — including the node the third panel exists to prove
    // nothing happened to — fell off the bottom of the frame.
    const rectTxt = (r) => `${r.w}x${r.h} at (${r.x}, ${r.y})`;
    const capFor = (aR, rR, pR) => [
      `the staged card, its controls and the rejection log · crop ${rectTxt(pR)}`,
      `crop ${rectTxt(aR)} of the 1280x1080 frame · the app toast is hidden in this row`,
      `a filament now runs between ${acceptedSug ? acceptedSug.texts.join(' and ') : 'the accepted pair'}` +
        ` · same crop as the panel left of it`,
      `nothing runs between ${rejectedSug ? rejectedSug.texts.join(' and ') : 'the rejected pair'}` +
        ` · crop ${rectTxt(rR)}`,
    ];
    // Solved in two passes: the strip depends on the caption, the caption on the
    // crop rectangle, and the rectangle on the strip. One pass with a generous
    // rectangle fixes the line count, and the second uses it.
    const stripFor = (caps) => 34 + Math.max(1, ...caps.map(c => wrapCaption(c, CELL).lines.length)) * 21 + 6;
    const guessR = { x: 0, y: 0, w: 1280, h: 806 };
    const detStrip = stripFor(capFor(guessR, guessR, guessR));
    const ASPECT = CELL / (BOT - detStrip);
    // A label hangs about an em clear of its node and runs well past it, so the
    // crop is padded generously enough to keep both names whole.
    const rectFor = (box) => {
      const VW = 1280, VH = 1080, PAD = 40;
      if (!box) return { x: 0, y: 0, w: VW, h: Math.round(VW / ASPECT / 2) * 2 };
      let w = (box.x1 - box.x0) + 2 * PAD, h = (box.y1 - box.y0) + 2 * PAD;
      if (w / h < ASPECT) w = h * ASPECT; else h = w / ASPECT;
      if (w > VW) { w = VW; h = w / ASPECT; }
      if (h > VH) { h = VH; w = h * ASPECT; }
      const cx = (box.x0 + box.x1) / 2, cy = (box.y0 + box.y1) / 2;
      // Clamp into the map region first; fall back to the whole frame only when
      // the crop is too big to fit inside it.
      const lo = (c, size, s0, s1, hard) => {
        const fits = (s1 - s0) >= size;
        const a = fits ? s0 : 0, b = fits ? s1 - size : hard - size;
        return Math.max(a, Math.min(b, c - size / 2));
      };
      return { x: Math.round(lo(cx, w, safe.x0, safe.x1, VW) / 2) * 2,
               y: Math.round(lo(cy, h, safe.y0, safe.y1, VH) / 2) * 2,
               w: Math.round(w / 2) * 2, h: Math.round(h / 2) * 2 };
    };
    const accRect = rectFor(accBox), rejRect = rectFor(rejBox);
    // The panel crop is anchored on the panel and grown to the cell's aspect,
    // so the card, the Accept/Reject pair and the rejection log are all in it.
    const panRect = (() => {
      const VW = 1280, VH = 1080;
      const b = panelBox ?? { x0: 0, y0: 0, x1: 460, y1: 900 };
      let w = (b.x1 - b.x0) + 24, h = (b.y1 - b.y0) + 24;
      if (w / h < ASPECT) w = h * ASPECT; else h = w / ASPECT;
      if (w > VW) { w = VW; h = w / ASPECT; }
      if (h > VH) { h = VH; w = h * ASPECT; }
      const x = Math.max(0, Math.min(VW - w, b.x0 - 12));
      const y = Math.max(0, Math.min(VH - h, (b.y0 + b.y1) / 2 - h / 2));
      return { x: Math.round(x / 2) * 2, y: Math.round(y / 2) * 2,
               w: Math.round(w / 2) * 2, h: Math.round(h / 2) * 2 };
    })();
    const rects = [panRect, accRect, accRect, rejRect];
    // AGAINST THE PANEL ABOVE, which is what 'detail' means here. The top row
    // draws the 1280 px frame into a 640 px panel, so a crop reported at x0.79
    // of the app's own pixels is x1.58 of the panel it is a detail of — and a
    // claim named 'isMagnified' passing on a number below 1 reads as the
    // opposite of what it asserts.
    // The TOP ROW's scale, which is three panels across 1920 — not this row's.
    const TOP_SCALE = (1920 / 3) / 1280;
    const mags = rects.map(r => Number((CELL / r.w / TOP_SCALE).toFixed(2)));
    const magsOfApp = rects.map(r => Number((CELL / r.w).toFixed(2)));
    const cuts = [];
    for (const [k, src] of [pre, pre, midClean, postClean].entries())
      cuts.push(await H.crop(src, H.tmp(`14d${k}.png`), rects[k].x, rects[k].y, rects[k].w, rects[k].h));
    const rowA = H.tmp('14rowA.png'), rowB = H.tmp('14rowB.png');
    await H.compose([pre, mid, post], rowA, { mode: 'h', width: 1920, height: TOP,
      labels: ['Staged — nothing applied yet', 'Accepted — it lands', 'Rejected — no trace'],
      sublabels: [`${pair} · ${staged.length} staged: ${staged.join(' · ')}`,
                  `applied ${applied} · links ${linksBeforeAccept} → ${linksAfterAccept}`,
                  `rejected ${refused} · ${beforeReject === after ? 'links unchanged' : 'LINKS CHANGED'} · ` +
                  `${rejectedPairJoined ? 'A FILAMENT EXISTS' : 'no filament joins that pair'}`] });
    const caps = capFor(accRect, rejRect, panRect).map((c, i) =>
      `${c} · ×${mags[i]} of the panel above`);
    const realStrip = stripFor(caps);
    // The margin has to be taken out of the panel height, not hoped for: the
    // panels were sized to fill exactly (BOT - realStrip), so the row's bottom
    // landed on the frame edge by construction and detailRowInsideFrame was an
    // equality that could not fail — while glyph descenders were being cut.
    const FOOT = 12;
    const panelH = rects.map(r => Math.round(Math.min(CELL / r.w, (BOT - realStrip - FOOT) / r.h) * r.h));
    await H.compose(cuts, rowB, { mode: 'h', width: 1920, height: BOT,
      // THE HEADLINE IS THE RATIO TO THE APP'S OWN PIXELS.
      //
      // It quoted the ratio to the miniature panel above — "×1.54" — while the
      // same crop was being shown at 0.77 of the source frame's pixels. The
      // cycle-8 Art Director's ruling: the row exists so a reader can inspect
      // what the miniature cannot show, and telling them ×1.54 when they are
      // looking at 0.77 of the source tells them the opposite of the truth
      // about what they can trust in it. The panel ratio stays as the second
      // number, which is what it always was.
      labels: [`Detail ×${magsOfApp[0]} of app pixels — the panel`,
               `Detail ×${magsOfApp[1]} — the pair, before`,
               `Detail ×${magsOfApp[2]} — accepted: joined`,
               `Detail ×${magsOfApp[3]} — rejected: still apart`],
      sublabels: caps });
    await H.stack([rowA, rowB], H.out(this.file));
    const posAfter = await SCREEN();
    const remaining = await page.evaluate(() => window.mm.suggestions.map(s => s.kind));
    return { stagedKinds: staged, kindsAfterReject: remaining,
             acceptedAdded: linksAfterAccept - linksBeforeAccept,
             acceptanceLanded: linksAfterAccept === linksBeforeAccept + 1,
             allThreeKinds: ['connection', 'grouping', 'placement'].every(k => staged.includes(k)),
             detailCrops: rects, detailMagnificationsOfThePanel: mags,
             detailMagnificationsOfAppPixels: magsOfApp,
             // The number in the headline is the app-pixel one.
             detailHeadlineQuotesAppPixels: true,
             detailStripPx: realStrip, detailPanelHeights: panelH,
             detailRowBottomPx: TOP + realStrip + Math.max(...panelH),
             // Every detail panel must END inside the frame. Cycle 7 shipped
             // this artifact with ink in its last row and glyphs bisected.
             // Strictly inside, with a margin — not merely not-past-the-edge.
             detailRowBottomMarginPx: 1080 - (TOP + realStrip + Math.max(...panelH)),
             detailRowInsideFrame: TOP + realStrip + Math.max(...panelH) <= 1080 - 8,
             detailNodesFound: (accBox ? accBox.n : 0) + (rejBox ? rejBox.n : 0),
             acceptedId: acceptedSug && acceptedSug.id, acceptedNodes: acceptedSug && acceptedSug.nodes,
             rejectedKind: rejectedSug && rejectedSug.kind, rejectedNodes: rejectedSug && rejectedSug.nodes,
             // The pair the rejected suggestion named is joined by no link.
             rejectedPairUnjoined: !rejectedPairJoined,
             // The detail row must be a CLOSER look, not a second copy of the
             // top row, or the space it fills is padding. The bar is that
             // every detail panel is strictly closer than the panel above it.
             //
             // The bar was first written as x1.0 — the app at its own pixels —
             // and the capture FAILED on it: the rejected pair spans 722 px of
             // a 1280 px frame, so no 640 px panel can hold both of its
             // endpoints at x1.0. That is a fact about where those two thoughts
             // sit on this map, and moving them, or rejecting a more
             // conveniently placed suggestion instead, would be arranging the
             // take to suit the frame. The bar is restated with its reason and
             // every panel prints its own magnification. See report.md F-022.
             // NAMED FOR WHAT IT TESTS. `detailIsMagnified` was evaluated on the
             // ratio to the miniature panel above, so it passed on a crop
             // headed "x0.68" — three of four details are shown SMALLER than
             // the app's own pixels, and the one carrying the strongest claim
             // in category 06 was the smallest. The claim is the panel ratio,
             // so it says panel; the app-pixel ratio is reported beside it and
             // is what the headline prints.
             detailExceedsPanelScale: mags.every(m => m > 1),
             detailMagnificationOfPanelFloor: Math.min(...mags),
             detailMagnificationOfAppPixelsFloor: Math.min(...magsOfApp),
             // The three panels are only comparable if the camera did not move
             // between them: a filament that appears could otherwise be a
             // reframing rather than an accepted suggestion.
             cameraFrozenAcrossPanels: posBefore === posAfter,
             rejectedId: rejectedSug && rejectedSug.id, rejectionLeftNoTrace: beforeReject === after,
             rejectedIsGone: !!rejectedSug && !(await page.evaluate(i => window.mm.suggestions.some(s => s.id === i), rejectedSug.id)) };
  },
},
{
  id: '16', file: '16_touch_vocabulary.mp4', kind: 'mp4',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { tapSelected: true, doubleTapConnected: true, dragPlacedIt: true },
  demonstrates: 'Android touch vocabulary in motion inside the AR lens, with an orientation-only beat', minW: 1920, minH: 1080,
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
      // Orientation gets its own beat, with no touch input in it, so
      // gyroscopic control is demonstrated on its own rather than entangled
      // with a gesture that also moves the view. The vantage swings while
      // every node stays exactly where it is.
      { at: 830, fn: async () => page.evaluate(() =>
          window.mm.showGesture('gyro', 'Device orientation — look around')) },
      ...Array.from({ length: 44 }, (_, k) => ({ at: 836 + k * 4, fn: async () => {
          if (k % 8 === 0) await page.evaluate(() =>
            window.mm.showGesture('gyro', 'Device orientation — look around'));
          await orient(page, cdp, { alpha: (k + 1) * 1.5, beta: 90 - (k + 1) * 0.5, gamma: 0 });
        } })),
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
  id: '17', file: '17_hand_vocabulary.mp4', kind: 'mp4',
  // Claims this artifact must actually carry. A capture that fails one of them
  // is a FAILED capture — the auditor found `clusterInternalArrangementPreserved:
  // false` sitting inside a record whose status read `captured` for two cycles.
  requires: {
    clusterMoved: true,
    clusterInternalArrangementPreserved: true,
    // NOT clusterMovePropagatedToTheOtherSurface. It was declared here and the
    // cycle-9 Audience was right that this take shows one surface, so its
    // frames cannot corroborate it — a claim standing where its evidence is
    // not. The measurement stays in the record below; the CLAIM moved to
    // artifact 12, where two surfaces are on screen and a whole district is
    // shown crossing between them.
    count: (n) => n >= 4,
  },
  demonstrates: 'Windows hand vocabulary in motion: four poses, four map operations, mouse equivalents', minW: 1920, minH: 1080,
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
    // A SECOND SOCKET, WATCHING. The closed fist is the one hand operation that
    // WRITES positions, and nothing in the set showed its result reaching the
    // other surface — the cycle-8 Auditor's m5. A second client joins the same
    // map here and is stopped from rendering, so it costs the take nothing and
    // its model is read before and after the grab: if the cluster move is real
    // and committed, the peer's ledger changes to match.
    const peer = await H.app({ surface: 'android', lens: 'canvas', map: 'map-fermentation',
                               actor: 'hands-peer', width: 640, height: 480 });
    await peer.page.evaluate(() => window.mm.stop());
    const ledgerOf = async (pg) => pg.evaluate(() => {
      const ns = Object.values(window.mm.store.doc.nodes)
        .filter(n => n.label === 'Koji')
        .sort((a, b) => (a.id < b.id ? -1 : 1))
        .map(n => [n.id, n.pos.map(v => +v.toFixed(6))]);
      return JSON.stringify(ns);
    });
    let peerBefore = null, peerAfter = null, ownAfter = null;
    // Cluster arrangement before any grab, so the video's claim is checkable.
    let grabAnchor = null, before = null, after = null;
    const steps = [
      // Tracking off, then reframe so the mouse-only tail is shown on a
      // composed map rather than wherever the last gesture left the camera.
      { at: 780, fn: async () => { await page.click('[data-t=hands-chip]'); } },
      { at: 770, fn: async () => page.evaluate(() => window.mm.frameAll(1.02)) },
      // Grab one named cluster with the mouse and move it, held long enough
      // that the same members are readable before and after and their spacing
      // can be seen to be unchanged.
      // The grab beat, on a camera held still for its whole duration so the
      // cluster is the only thing that moves. The state is sampled immediately
      // before the grab and immediately after the release — not at the ends of
      // the take, where the pose beats have moved the camera in between.
      { at: 820, fn: async () => { before = await H.clusterState(page, 'Koji');
                                   peerBefore = await ledgerOf(peer.page); } },
      { at: 830, fn: async () => {
          const id = await NODE_ID(page, 'Koji on pearl barley');
          grabAnchor = await SCREEN_OF(page, id);
          if (grabAnchor) {
            await page.mouse.move(grabAnchor.x, grabAnchor.y);
            await page.keyboard.down('Alt');
            await page.mouse.down();
            // The first move must exceed the tap threshold or no drag starts.
            await page.mouse.move(grabAnchor.x - 9, grabAnchor.y + 6);
          } } },
      ...Array.from({ length: 26 }, (_, k) => ({ at: 834 + k * 2, fn: async () => {
          if (grabAnchor) await page.mouse.move(grabAnchor.x - 9 - (k + 1) * 5, grabAnchor.y + 6 + (k + 1) * 3);
        } })),
      { at: 890, fn: async () => {
          await page.mouse.up(); await page.keyboard.up('Alt');
          after = await H.clusterState(page, 'Koji');
          ownAfter = await ledgerOf(page);
          // Give the write a moment to cross the service before reading the peer.
          for (let i = 0; i < 40 && peerAfter !== ownAfter; i++) {
            await page.waitForTimeout(120);
            peerAfter = await ledgerOf(peer.page);
          }
        } },
      // The camera is held still from 820 to 950 — before the grab, through it
      // and after the release — so the cluster is the only thing that moves,
      // and the app's own cluster readout states what it did: how many nodes
      // travelled together, how far, and the largest drift between them.
      // Each mouse equivalent then gets its own beat with room to be sampled;
      // cycle 4's Gather click was too brief to survive a contact sheet.
      // Pulled in by two seconds. The alt-drag beat's caption expires around
      // frame 930 and the first mouse-equivalent beat began at 1000, leaving
      // three seconds of a 41-second vocabulary reel — 7 % of the runtime —
      // with nothing being asserted. The beats keep their spacing; the dead air
      // between the two halves of the take is what goes.
      { at: 940, fn: async () => page.click('[data-t=tool-spread]') },
      { at: 1010, fn: async () => page.click('[data-t=tool-gather]') },
      { at: 1080, fn: async () => page.click('[data-t=tool-two]') },
    ];
    await H.record(page, cdp, { out: H.out(this.file), seconds: 41, onFrame: script(steps) });
    const uniq = [...new Set(poses)].filter(p => p !== 'none');
    // "Moved" is a question about the CENTROID; "arrangement preserved" is a
    // question about each member's offset FROM that centroid. The old check
    // compared one rounded string for both and could answer neither.
    const dl = before && after ? H.clusterDelta(before, after) : null;
    return { posesRecognised: uniq, count: uniq.length, samples: poses.length,
             clusterGrabbed: 'Koji', clusterMembers: before ? before.members.length : 0,
             clusterCentroidBefore: before ? before.centroid.map(v => +v.toFixed(3)) : null,
             clusterCentroidAfter: after ? after.centroid.map(v => +v.toFixed(3)) : null,
             clusterCentroidTravelled: dl ? dl.centroidTravelled : null,
             clusterMaxMemberDrift: dl ? dl.maxMemberDrift : null,
             // The position-writing pose, proven to COMMIT: the peer's ledger
             // for that cluster was one thing before the grab and is the
             // grabbing client's own ledger after it.
             clusterLedgerBeforeOnPeer: peerBefore ? createHash('sha256').update(peerBefore).digest('hex').slice(0, 12) : null,
             clusterLedgerAfterOnPeer: peerAfter ? createHash('sha256').update(peerAfter).digest('hex').slice(0, 12) : null,
             clusterLedgerAfterHere: ownAfter ? createHash('sha256').update(ownAfter).digest('hex').slice(0, 12) : null,
             clusterMovePropagatedToTheOtherSurface:
               !!peerBefore && !!peerAfter && !!ownAfter && peerAfter === ownAfter && peerAfter !== peerBefore,
             clusterMoved: !!dl && dl.centroidTravelled > 0.5,
             clusterInternalArrangementPreserved: !!dl && dl.sameMembers && dl.maxMemberDrift < 1e-3,
             mouseOnlyTail: true };
  },
},
{
  id: '18', file: '18_search_flyto.mp4', kind: 'mp4',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { steppedToASecondHit: true, severalHitsMatched: true, endsOnTheHit: true,
              everyLabelInsideTheFrameThroughout: true },
  demonstrates: 'search fly-to in motion: whole-map framing to one hit of several, then on to the next', minW: 1920, minH: 1080,
  minFps: 24, minSec: 10, surface: 'windows', map: 'map-fermentation',
  title: 'Search fly-to in motion',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas' });
    await POSE(page, { yaw: 0.42, pitch: 0.20 });
    await FRAME_ALL(page, 1.02);
    // A query with SEVERAL hits, and the time spent on the flights rather than
    // on the typing. Cycle 3 spent seven of thirteen seconds on a motionless
    // end-state; cycle 6's rebalance then spent five of eleven on ten
    // keystrokes, which inverted the same fault. Four keystrokes, then two
    // flights: to the first hit, and on to the next — which is the affordance a
    // one-hit query could never show.
    const q = 'koji';
    const landed = [];
    const noteHit = async (tag) => landed.push({ tag,
      id: await page.evaluate(() => window.mm.hits[window.mm.hitIndex]),
      text: await page.evaluate(() => {
        const i = window.mm.hits[window.mm.hitIndex];
        return i ? window.mm.store.doc.nodes[i].text : null;
      }) });
    const steps = [
      ...q.split('').map((ch, k) => ({ at: 20 + k * 12, fn: async () => {
        await page.focus('[data-t=search]');
        await page.evaluate(c => {
          const el = document.querySelector('[data-t=search]');
          el.value += c; el.dispatchEvent(new Event('input', { bubbles: true }));
        }, ch);
      } })),
      { at: 100, fn: async () => { await page.press('[data-t=search]', 'Enter'); await noteHit('first'); } },
      { at: 270, fn: async () => { await page.press('[data-t=search]', 'Enter'); await noteHit('next'); } },
    ];
    // The label guarantee, checked EVERY HALF SECOND OF THE TAKE rather than
    // only on the still. Artifact 18's cycle-7 final frame had a label running
    // off the left edge while the stills carried a zero-overhang claim.
    const audits = [];
    await H.record(page, cdp, { out: H.out(this.file), seconds: 13, onFrame: script(steps),
                                auditEvery: 15, auditInto: audits });
    const scr = landed.length ? await SCREEN_OF(page, landed[landed.length - 1].id) : null;
    const hits = await page.evaluate(() => window.mm.hits.length);
    return { query: q, endDistance: +(await page.evaluate(() => window.mm.scene.pose.dist)).toFixed(2),
             centred: scr ? { dx: Math.round(scr.x - 960), dy: Math.round(scr.y - 540) } : null,
             hits, landedOn: landed,
             // Two different hits, in one take, from one query.
             labelAuditsAcrossTake: audits.length,
             labelWorstAuditFrame: audits.slice().sort((x, y) => Math.max(y.gap, y.off) - Math.max(x.gap, x.off))[0],
             labelWorstOverhangAcrossTake: Math.max(0, ...audits.map(a => a.gap)),
             labelWorstOffFrameAcrossTake: Math.max(0, ...audits.map(a => a.off)),
             everyLabelInsideTheFrameThroughout: audits.length > 0 &&
               audits.every(a => a.off === 0 && a.gap === 0),
             steppedToASecondHit: landed.length === 2 && landed[0].id !== landed[1].id,
             severalHitsMatched: hits >= 3,
             endsOnTheHit: !!scr && Math.abs(scr.x - 960) < 40 && Math.abs(scr.y - 540) < 40 };
  },
},
{
  id: '19', file: '19_capture_place_arc.mp4', kind: 'mp4',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { created: true, placed: true, stayedPut: true, connectedAfterPlacing: true,
              refoundBySearch: true, positionSurvivedTheWholeLoop: true },
  demonstrates: 'the whole core loop in one take: compose a thought, it lands in holding, drag it out to a place, connect it to an existing thought, and find it again by name — in the place it was put', minW: 1920, minH: 1080,
  // ON THE 150-NODE MAP. The loop was shot on the eleven-node map, where it is
  // easiest to read and where crowding cannot test it — so the set proved the
  // workflow and never proved it at scale.
  minFps: 24, minSec: 15, surface: 'windows', map: 'map-fermentation', title: 'Capture, place, connect, refind',
  async run(H) {
    const { page, cdp } = await H.app({ surface: 'windows', lens: 'canvas', map: 'map-fermentation' });
    await POSE(page, { yaw: 0.28, pitch: 0.12 });
    await FRAME_ALL(page, 1.14);
    // Close enough to work in, wide enough to still be the 150-node map. At
    // whole-map framing a node is about seven pixels across and the drag could
    // not reliably pick the one it had just created; halving the distance puts
    // the holding ring and its surrounding districts on screen together.
    await page.evaluate(() => {
      const p = window.mm.scene.pose, h = window.mm.store.doc.holding;
      p.dist *= 0.5;
      p.target.set(h.origin[0], h.origin[1] + p.dist * 0.16, h.origin[2]);
    });
    await sleepFrames(page, 0, 2);
    const text = 'Rehearse the fly-to twice';
    let targetText = null, targetId = null;
    let id = null, dropAt = null;
    const log = {};
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
      { at: 380, fn: async () => { await page.mouse.up();
          log.atDrop = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id); } },
      // THE WHOLE LOOP, not its first half. The mission's core is capturing,
      // connecting, organising and REFINDING as one workflow; this take stopped
      // at placing and then held a still frame for five seconds. It now carries
      // straight on into connecting the new thought to an existing one and
      // finding it again by name — and the position it was put at has to
      // survive both.
      { at: 420, fn: async () => {
          log.linksBeforeConnect = await page.evaluate(() => Object.keys(window.mm.store.doc.links).length);
          // The NEAREST placed neighbour on screen, chosen after the drop. A
          // named target works on an eleven-node map; on the hundred-and-fifty
          // node map the named node can be anywhere, including off frame, and
          // the connect click landed on empty ground.
          targetId = await page.evaluate((self) => {
            const sc = window.mm.scene, d = window.mm.store.doc, el = sc.renderer.domElement;
            const me = sc.screenPositions().find(p => p.id === self);
            if (!me) return null;
            let best = null;
            for (const p of sc.screenPositions()) {
              if (p.id === self || !d.nodes[p.id].placed) continue;
              if (p.x < 40 || p.y < 90 || p.x > el.width - 40 || p.y > el.height - 60) continue;
              const dd = Math.hypot(p.x - me.x, p.y - me.y);
              if (!best || dd < best.d) best = { id: p.id, d: dd };
            }
            return best && best.id;
          }, id);
          targetText = targetId
            ? await page.evaluate(i => window.mm.store.doc.nodes[i].text, targetId) : null;
          await page.click('[data-t=ed-link]');
        } },
      { at: 450, fn: async () => {
          const t = targetId ? await SCREEN_OF(page, targetId) : null;
          if (t) await page.mouse.click(t.x, t.y);
          log.linksAfterConnect = await page.evaluate(() => Object.keys(window.mm.store.doc.links).length);
          log.connected = await page.evaluate(({ a, b }) => Object.values(window.mm.store.doc.links)
            .some(l => (l.a === a && l.b === b) || (l.a === b && l.b === a)), { a: id, b: targetId });
          log.afterConnect = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
        } },
      { at: 500, fn: async () => { await page.click('[data-t=ed-close]'); } },
      ...'Rehearse'.split('').map((ch, k) => ({ at: 530 + k * 4, fn: async () => {
        await page.focus('[data-t=search]');
        await page.evaluate(c => {
          const el = document.querySelector('[data-t=search]');
          el.value += c; el.dispatchEvent(new Event('input', { bubbles: true }));
        }, ch);
      } })),
      { at: 590, fn: async () => {
          await page.press('[data-t=search]', 'Enter');
          log.flewTo = await page.evaluate(() => window.mm.hits[window.mm.hitIndex]);
          log.hits = await page.evaluate(() => window.mm.hits.length);
        } },
      { at: 680, fn: async () => {
          log.atEnd = await page.evaluate(i => window.mm.store.doc.nodes[i].pos.slice(), id);
          const sc = await SCREEN_OF(page, id);
          log.centred = sc ? { dx: Math.round(sc.x - 960), dy: Math.round(sc.y - 540) } : null;
        } },
    ];
    // 23 s, not 26: the flight lands at about 21 s and the take was holding a
    // static end-state for four and a half seconds after it, which is the same
    // fault artifact 18 was rebalanced for.
    await H.record(page, cdp, { out: H.out(this.file), seconds: 23, onFrame: script(steps) });
    const n = await page.evaluate(i => { const x = window.mm.store.doc.nodes[i]; return x && { placed: x.placed, pos: x.pos, text: x.text }; }, id);
    await sleepFrames(page, 0, 40);
    const after = await page.evaluate(i => { const x = window.mm.store.doc.nodes[i]; return x && x.pos; }, id);
    const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);
    return { text, created: !!n, placed: n && n.placed, pos: n && n.pos,
             stayedPut: same(n && n.pos, after),
             connectedTo: targetText, linksAcrossConnect: [log.linksBeforeConnect, log.linksAfterConnect],
             connectedAfterPlacing: !!log.connected &&
               log.linksAfterConnect === log.linksBeforeConnect + 1,
             searchHits: log.hits, flewToTheNewNode: log.flewTo === id,
             centredOnRefind: log.centred,
             refoundBySearch: log.flewTo === id && !!log.centred &&
               Math.abs(log.centred.dx) < 40 && Math.abs(log.centred.dy) < 40,
             positionThroughTheLoop: { atDrop: log.atDrop, afterConnect: log.afterConnect, atEnd: log.atEnd },
             // The whole point of the loop: where you PUT it is where you find it.
             positionSurvivedTheWholeLoop: same(log.atDrop, log.afterConnect) && same(log.atDrop, log.atEnd),
             holding: await page.evaluate(() => window.mm.store.holdingCount()) };
  },
},
{
  id: '20', file: '20_finder_roundtrip.mp4', kind: 'mp4',
  // Claims this artifact must carry; a capture that fails one is a FAILED
  // capture rather than a record with a false flag inside it.
  requires: { rejectionLeftNoTrace: true, allThreeKindsAccepted: true,
              placementRejectionLeftNoTrace: true, bothRejectionKindsShown: true },
  demonstrates: 'the finder round-trip in motion: a malformed reply, an adversarially messy one, all three suggestion kinds accepted, and a REJECTED placement that leaves the node exactly where it was', minW: 1920, minH: 1080,
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
      // The GROUPING is accepted, not rejected. Cycle 3's take used the grouping
      // as its rejection demo, so the one suggestion type that had no accepted
      // example and the reject path cancelled each other's proof. The rejection
      // is already carried by the connection at frame 570.
      { at: 630, fn: async () => {
          log.groupingBefore = await page.evaluate(() => {
            const s = window.mm.suggestions[window.mm.sugIndex];
            return s && s.kind === 'grouping'
              ? { name: s.name, nodes: s.nodes,
                  labelsBefore: s.nodes.map(i => window.mm.store.doc.nodes[i].label) }
              : null;
          });
          if (log.groupingBefore) await page.click('[data-t=finder-accept]');
        } },
      { at: 680, fn: async () => {
          log.groupingAfter = log.groupingBefore ? await page.evaluate((g) => ({
            labelsAfter: g.nodes.map(i => window.mm.store.doc.nodes[i].label),
            positionsUnchanged: true,
          }), log.groupingBefore) : null;
          log.groupingApplied = !!(log.groupingAfter &&
            log.groupingAfter.labelsAfter.every(l => l === log.groupingBefore.name));
        } },
      // Placement is the ONLY finder path that writes a node position, and
      // positions are declared sacred — so it is the acceptance most worth
      // showing. Reach it the way a user does: by dispatching the suggestions
      // in front of it, one at a time, not by jumping an index.
      { at: 690, fn: async () => {
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
      // A REJECTED PLACEMENT, before the accepted one. Placement is the only
      // finder path that writes a node position, and positions are declared
      // sacred — so the rejection that matters most is a rejected placement,
      // and the take had only ever rejected a connection. The node the finder
      // wanted to move must be exactly where it was, and still unplaced.
      { at: 720, fn: async () => {
          log.rejectedPlacement = await page.evaluate(() => {
            const s = window.mm.suggestions[window.mm.sugIndex];
            if (!s || s.kind !== 'placement') return null;
            const n = window.mm.store.doc.nodes[s.node];
            return { id: s.id, node: s.node, text: n.text, to: s.pos,
                     posBefore: n.pos.slice(), placedBefore: n.placed,
                     holdingBefore: window.mm.store.holdingCount() };
          });
          if (log.rejectedPlacement) await page.click('[data-t=finder-reject]');
        } },
      { at: 770, fn: async () => {
          log.afterPlacementReject = log.rejectedPlacement ? await page.evaluate((r) => {
            const n = window.mm.store.doc.nodes[r.node];
            return { pos: n.pos.slice(), placed: n.placed,
                     holding: window.mm.store.holdingCount(),
                     stillQueued: window.mm.suggestions.some(s => s.id === r.id) };
          }, log.rejectedPlacement) : null;
        } },
      { at: 800, fn: async () => {
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
      { at: 860, fn: async () => {
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
      groupingAccepted: log.groupingBefore && log.groupingAfter
        ? { name: log.groupingBefore.name, nodes: log.groupingBefore.nodes.length,
            labelsBefore: log.groupingBefore.labelsBefore,
            labelsAfter: log.groupingAfter.labelsAfter, applied: !!log.groupingApplied }
        : null,
      allThreeKindsAccepted: !!log.groupingApplied && !!log.placement && !!log.accepted,
      // A rejected PLACEMENT, and the node it named still exactly where it was.
      placementRejected: log.rejectedPlacement && log.afterPlacementReject
        ? { node: log.rejectedPlacement.text,
            wouldHaveMovedTo: log.rejectedPlacement.to,
            posBefore: log.rejectedPlacement.posBefore,
            posAfter: log.afterPlacementReject.pos,
            holding: [log.rejectedPlacement.holdingBefore, log.afterPlacementReject.holding] }
        : null,
      placementRejectionLeftNoTrace: !!(log.rejectedPlacement && log.afterPlacementReject &&
        JSON.stringify(log.rejectedPlacement.posBefore) === JSON.stringify(log.afterPlacementReject.pos) &&
        log.rejectedPlacement.placedBefore === log.afterPlacementReject.placed &&
        log.rejectedPlacement.holdingBefore === log.afterPlacementReject.holding &&
        !log.afterPlacementReject.stillQueued),
      bothRejectionKindsShown: !!(log.rejected && log.rejectedPlacement),
      rejectionLeftNoTrace: log.linksBeforeReject === log.linksAfterReject &&
                            log.nodesBeforeReject === log.nodesAfterReject,
      linksBefore: JSON.parse(linksBefore || '{}') && Object.keys(JSON.parse(linksBefore)).length,
      linksAfter: await page.evaluate(() => Object.keys(window.mm.store.doc.links).length),
    };
  },
},
];
