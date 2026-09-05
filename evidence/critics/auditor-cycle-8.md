# The Auditor — cycle 8

*Written here verbatim, as received, before any response was made to it.*
*Categories: 03 One model and sacred positions (20, min 17) · 04 Evidence and report integrity (15, min 13). Both are hard gates.*

*Recovered from the subagent's own transcript rather than retyped, for the same
reason the Audience verdict was: a critic score that exists only in the
builder's context is one context cut away from being whatever the builder says
it was (§09).*

*This is the verdict that declares **cycle 8 not regression-free**. It is
recorded here before the response to it, unedited, including that declaration.*

---

I've completed the audit. Here is my verdict.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|:--:|
| 03 — One model and sacred positions | 17 | 20 | 17 | Yes |
| 04 — Evidence and report integrity | 13 | 15 | 13 | Yes |
| **Total (my two categories)** | **30** | **35** | **30** | **Yes** |

---

## Regression verdict

**Cycle 8 is NOT regression-free.** One watched artifact regressed: **02**, with the same defect present in **04**. No node moved.

**Is the cycle-7 baseline sound? Yes — and I established it five independent ways, not by trusting the ledger.**

1. `sha256sum -c` inside `cycle-7/` against `../cycle-7.sha256`: **29/29 OK**. Same for cycle 8: **28/28 OK**. The ledgers list exactly the files present — no extras, no omissions (`find | sort` vs `awk '{print $2}' | sort` both diff clean).
2. Every cycle-7 artifact matches the `sha256` embedded in cycle-7's own `MANIFEST.json` (**20/20**; cycle 8 likewise 20/20).
3. **The decisive one.** `cycle-7/DIFF.json` is one of the seven files the overwrite never altered in content (mtime 05:29, before the 06:31 restore). It records cycle-7's five video byte-sizes. The restored videos match **all five exactly** — 16: 1,940,376; 17: 6,897,637; 18: 3,231,161; 19: 384,498; 20: 614,905 — while cycle-8's counterparts differ by up to 8× (19 is 3,142,820). A slot still holding cycle-8's file could not do that.
4. `cycle-8/DIFF.json`'s `subject.prev` metrics, computed *from the restored directory*, equal `cycle-7/DIFF.json`'s own `subject.cur` metrics for **all 20 rows**. Two separately-written files agree on the restored content.
5. `cycle-7/sheets/` was never touched (mtime 03:51). Its 19-sheet spans 0→**17.6 s**, matching the restored 18 s video; cycle 8's is 23 s. The sheet-cell/frame mean-abs-diff at 17.6 s is 2.99 against cycle-7's video vs 6.27 against cycle-8's.

**No cycle-7 artifact is still identical to its cycle-8 counterpart.** I hashed all 27 shared paths: 26 differ. The single identical file is `positions.json` — which is exactly what should be identical.

**Did any node move? No.** Beyond the byte-identity of `positions.json` (unchanged across cycles 2–8, regenerated each freeze — distinct mtimes), I proved the pixels *are* that file:

- I projected all 11 `map-talk` coordinates through the frozen camera declared in each cycle's MANIFEST and least-squares-fitted screen scale/offset. **Cycle-7 artifact 11** (camera `dist=31.318`): residuals 0.00–0.13 px. **Cycle-8 artifact 11** (`dist=53.416`): residuals 0.00–0.17 px, mean 0.09. Both cycles fit the **same** focal (1023.0) and principal point (479.0, 580.5). Same coordinates, different camera — that is a re-framing, not a move.
- Artifact **02**: 52 of 53 detected node dots map cycle-7→cycle-8 by scale **0.99989**, offset **(0.13, 0.06)**, mean residual **0.20 px**. The one 3.6 px outlier is a blob-segmentation split — the colored-pixel bounding box at that spot is identical in both (x 760–794, y 403–424).
- Artifact **04**: least-squares refit gives scale **0.99930**, offset (0.67, 0.47), **median residual 0.28 px, p90 0.74 px** over 58/59 dots.
- The on-pixel ledger hashes agree across cycles: `pos sha 198501d063` (map-talk) in artifact 11 in both cycles; `pos sha 2e0c939c6c` (150-node map, both sockets) in artifact 12 in both cycles.

**What regressed:** artifact 02's label declutter. Cycle-7's frame carried a "33 labels hidden at this zoom — move closer to read them" chip and dimmed secondary labels; cycle-8's has no chip and overprints. Measured: label-glyph pixels (luminance > 110, saturation < 25) in the canvas band rose **9,589 → 17,786 (+85.5 %)**; DIFF's own `litDelta` is 0.44, SSIM 0.853. In one 560×120 crop at (900, 250) I read three unreadable pairs: "Yogurt at 43C" × "Umami stacking" → *"Yougurhtiat s43Cing"*; "Kefir grains double" × "Beef…" → *"douBleef…"*; "Mesophilic vs thermophilic" × "Doubanjiang" superimposed. The same 560×120 crop of cycle-7 has zero collisions. Artifact 04 shows the identical regression (**17,269 → 30,810, +78.4 %**, SSIM 0.819; "Blue: P. roqueforti" × "Umami stacking", "Aspergillus oryzae" × "Dechlorinate the water" × "Amylase…" all overprinted). The ink rose 46–98 % across every whole-map artifact (02, 03, 04, 05, 06, 09, 10); 07, a staged 5-node scene, is flat at −0.8 %.

Everything else: 01, 16 unchanged; 03, 06, 10, 11, 12, 13, 14, 15, 17, 18, 19, 20 improved; 05, 07, 08, 09 changed without regressing.

---

## Blocking findings

None. Nothing in this set is fabricated, and no machine-checked claim I tested is false.

## Major findings

**M1 — artifact 02 (also 04) — label declutter regressed; the claims that guard labels do not catch it.**
Measured above: +85.5 % / +78.4 % label-glyph ink, SSIM 0.853 / 0.819, named unreadable label pairs, and the loss of the "N labels hidden at this zoom" chip that cycle 7 showed. The two label claims on these artifacts — `everyLabelInsideTheFrame` and `labelArbiterAgreesWithDraw` — both pass, and both are *true*: the first checks viewport containment, the second checks the culler agrees with the draw call. Neither checks label-on-label overlap, which is the only thing that actually broke. **Fix:** add a claim that fails when two rendered label boxes overlap by more than a few percent, and restore the declutter budget (or the hidden-label chip) at whole-map zoom in 02 and 04.

**M2 — artifact 05 — the composite's own headline asserts an operation the build no longer has, in the direction of a rubric violation.**
The headline reads *"After — Open palm — spread the map · view distance 129.5"*, byte-identical to cycle 7's. But the chip *inside the same frame* reads "Open palm — **Move closer**", and artifact 15's in-app reference now reads "Move closer — the map fills more of the frame; **no thought moves**" (cycle 7 said "Spread the map — pull the whole brain wider"). The MANIFEST carries the stale semantics too: `result.pose: "spread"`, `recipe.demonstrates: "an open-palm spread shown before and after"`, `fnSha` unchanged at `8b9786b8aed24e1a`. So the one place in the cycle-8 set that still claims a layout-deforming "spread the map" operation is the evidence caption, not the app. Neither of 05's claims (`operationTookEffect`, `declaredSynthetic`) touches the caption. **Fix:** recapture 05 with the current vocabulary — retitle to "Open palm — move closer", rename `pose` to the current op id, and update `demonstrates`.

**M3 — artifacts 11, 12 — the twin composite cannot corroborate that it is two renders.**
In artifact 11 the two panels' canvas region is **byte-identical**: I split at x=960 and the max per-channel difference over rows 153–1024 is **0**, across 113 detected glyph/dot blobs with matching centroids, areas and mean RGB. Only the header, toolbar, seed banner and surface badge differ (rows 10–26, 38–51, 82–125, 142–152, 1025–1068). The badges declare Electron 33.4.11 / Chromium 130 under Wine on Win32 versus Chromium 141 on Linux x86_64. Two different Chromium majors on two platforms producing bit-identical rasterisation of antialiased text and geometry over 768,000 pixels is not credible. `positionsIdenticalAcrossSurfaces` and `twoDistinctSockets` are computed in-model and in the transport, so they are almost certainly true — but the pixels prove only two chromes, and the claim names invite the reader to conclude two renders. **Fix:** either state in the frame that both panels share a rasteriser, or add a claim that fingerprints each panel's own render (e.g. per-process WebGL renderer string, or a deliberate per-surface pixel token) so panel independence is checkable from the artifact.

## Minor findings

**m1 — artifacts 01 and 15 carry zero machine-checked claims.** 18 of 20 artifacts have claims (2→12 each); these two have none. 15 is the artifact whose gesture table is the set's source of truth for the hand vocabulary — the very text M2 turns on — and nothing verifies it against the runtime. **Fix:** add a claim on 15 that each listed operation string equals the string the app emits for that pose.

**m2 — DIFF.json's "substantive" means "the capture recipe fingerprint changed", not "the output changed".** All 7 substantive rows carry a `capture script changed (…)` note; no non-substantive row does. The consequence: 02 (SSIM 0.853) and 04 (0.819) — the two largest still-image changes in the cycle — are labelled non-substantive, while 13 (SSIM 0.973) is substantive. The number is honest (`subjectChanged: true` and `litDelta` 0.44/0.38 are both recorded on 02/04), but the word will mislead. `notes[]` is empty, so nothing writes the label regression up in prose. **Fix:** rename to `recipeChanged`, and let `notes[]` name any row with `subjectChanged` and litDelta > 0.2.

**m3 — the "Windows" lens is two different runtimes across the set, unflagged.** Artifacts 02, 04, 06, 09, 10, 13, 14 badge "WINDOWS · CANVAS / chromium 141.0.7390.37 · Linux x86_64"; 11 and 12 badge "electron 33.4.11 · Win32 · wine · the built binary". Both are declared on the frame, so this is honest — but a reader comparing 02 against 11 is comparing two substitutions without being told they differ. **Fix:** one line in the MANIFEST recipe naming which Windows runtime each artifact used.

**m4 — artifact 06: two of the eight held nodes overprint.** I counted the dashed-ring markers at 1.8× and found 8, matching "holding 8" and the 8 leader-lined labels, so `countMatchesMarkers` is true — but two of them sit at roughly (853, 556) and (848, 567), overlapping enough that at 1× they read as one marker. That works against "the waiting count glanceable". **Fix:** enforce a minimum separation for held-node markers inside the ring.

**m5 — the one position-writing hand pose is never shown persisting.** "Closed fist — grab the nearest cluster and move it" writes node positions. Artifact 17 claims `clusterMoved` and `clusterInternalArrangementPreserved`, and my frame sampling supports rigid motion (frames at 1/5/9/13/17/21/25 s map to the t=1 s frame by pure scale+translate, scale 0.93–1.04, mean residual 0.81–0.94 px over ~49/68 dots). But nothing in the set shows the moved cluster's new coordinates committed and arriving on the other surface. **Fix:** extend the twin pair, or 17's claims, to show the fist-drag result in the position ledger on both sockets.

---

## What is strongest

The position evidence is the best-verified thing in this set, and it survives every attack I could make on it: all 11 `map-talk` nodes in artifact 11 project from `positions.json` through each cycle's *declared* camera onto the measured pixels with a maximum residual of 0.17 px, in **both** cycles, at the same fitted focal and principal point despite the camera distance changing 31.32→53.42 — so `positions.json` is demonstrably the render source, not decoration. Artifact 12 then moves exactly one node and proves it in pixels: ten nodes land on identical peak RGB under a single similarity map, while the moved node's reported after-coordinates project to (633.8, 493.6) against a measured ring centre of (634, 494). And the honesty infrastructure holds up under independent recomputation — my own SSIM matched DIFF.json's to within 0.002 on all seven artifacts I recomputed, and cycle-7's untouched DIFF.json independently vouches for the restored baseline's five videos to the byte.

```json
{
  "critic": "auditor",
  "cycle": 8,
  "regressionFree": false,
  "positionRegression": false,
  "categories": [
    { "id": "03", "name": "One model and sacred positions", "weight": 20, "minimum": 17, "score": 17,
      "reasoning": "Sacred positions are proven, not asserted. All 11 map-talk nodes project from positions.json through each cycle's declared frozen camera onto measured pixels with max residual 0.17px in BOTH cycles, at an identical fitted focal (1023.0) and principal point (479.0,580.5) despite dist changing 31.318->53.416 — so the pixels are the model and the re-framing is not a move. Artifact 12 moves exactly one node: under a single similarity 11->12, ten nodes keep byte-identical peak RGB and the moved node's reported after-coords [6.2246,2.1244,-8.5594] project to (633.8,493.6) vs a measured ring centre of (634,494); the teal node is recoloured at the same projected point, confirming onlyTheDraggedNodeMoved. Artifact 11's two panels are byte-identical in the canvas region (max channel diff 0, rows 153-1024). Artifact 13 exports all 11 positions matching positions.json exactly with rules forbidding moving placed nodes; artifact 14's rejection log refuses a placement because 'placed positions are not the finder's to change'; artifact 19 records atDrop/afterConnect/atEnd as bit-identical. Cycle 8 also removed cycle 7's layout-deforming 'Spread the map'/'Gather the map' hand operations (visible in c7 artifacts 04, 15, 17) in favour of camera dollies annotated 'no thought moves'. Deducted for: artifact 05's caption/recipe/result still asserting 'spread the map'; the twin panels' pixel identity being unverifiable as two renders; and artifact 02 — a named regression-watch artifact for this category — losing its label declutter (+85.5% label ink, SSIM 0.853, three unreadable overprinted label pairs in one crop)." },
    { "id": "04", "name": "Evidence and report integrity", "weight": 15, "minimum": 13, "score": 13,
      "reasoning": "All 20 artifacts were genuinely recaptured: every one of the 27 shared files byte-differs from cycle 7 (positions.json alone is identical, correctly), MANIFEST shows capturedInThisRun true for all 20 with no errors and no failing claims, the only pageErrors are benign TFLite XNNPACK INFO lines, and every video meets or exceeds its stated minimum. Integrity is independently reproducible: cycle-7.sha256 verifies 29/29 and cycle-8.sha256 28/28 with ledger contents exactly matching directory contents; every artifact matches the sha256 inside its own MANIFEST (20/20 both cycles); and my own 8x8-block SSIM matched DIFF.json's reported values within 0.002 on all seven artifacts I recomputed (01 .9986/.998367, 02 .8523/.853358, 04 .8200/.818785, 07 .9737/.974194, 11 .9003/.899077, 12 .8205/.819937, 15 .9623/.963155). The cycles README discloses the cycle-7 overwrite, names the commit and the critic that caught it, voids the Audience critic's comparison, and discloses the single post-freeze DIFF.json rewrite. Deducted for: artifact 05's headline, recipe.demonstrates and result.pose all still describing a 'spread' operation that the app in the same frame and the in-app reference in artifact 15 both contradict; artifacts 01 and 15 carrying zero machine-checked claims; and DIFF.json's 'substantive' flag meaning 'capture recipe fingerprint changed' rather than 'output changed materially', which labels the cycle's two largest still-image changes (02 SSIM 0.853, 04 SSIM 0.819) non-substantive with an empty notes[]." }
  ],
  "findings": [
    { "artifact": "02", "severity": "major", "subsystem": "canvas",
      "observed": "Label declutter is materially weaker than cycle 7. Label-glyph pixels (lum>110, sat<25) in the canvas band rose 9,589 -> 17,786 (+85.5%); DIFF's own litDelta is 0.44 and SSIM 0.853. Cycle 7's '33 labels hidden at this zoom — move closer to read them' chip is gone. In one 560x120 crop at (900,250) three label pairs overprint into unreadable text: 'Yogurt at 43C' x 'Umami stacking', 'Kefir grains double' x 'Beef…', 'Mesophilic vs thermophilic' x 'Doubanjiang'. The same crop in cycle 7 has zero collisions. Artifact 04 shows the identical defect (17,269 -> 30,810, +78.4%, SSIM 0.819). Node positions are untouched: 52/53 dots map cycle7->cycle8 by scale 0.99989, offset (0.13,0.06), mean residual 0.20px.",
      "rootCause": "The label budget or collision arbiter was relaxed this cycle to show more labels at whole-map zoom, without a collision constraint; the two label claims check viewport containment and arbiter/draw agreement, neither of which sees overlap.",
      "correction": "Restore a declutter budget (or the hidden-label chip) at whole-map zoom for 02 and 04, and add a machine-checked claim that fails when two rendered label boxes overlap beyond a small threshold." },
    { "artifact": "05", "severity": "major", "subsystem": "evidence",
      "observed": "The composite headline reads 'After — Open palm — spread the map · view distance 129.5', byte-identical to cycle 7's, while the chip inside the same frame reads 'Open palm — Move closer' and artifact 15's in-app reference now reads 'Move closer — the map fills more of the frame; no thought moves' (cycle 7 said 'Spread the map — pull the whole brain wider'). MANIFEST is stale too: result.pose='spread', recipe.demonstrates='an open-palm spread shown before and after', fnSha unchanged at 8b9786b8aed24e1a. Neither of 05's claims (operationTookEffect, declaredSynthetic) inspects the caption. This is the only place left in the cycle-8 set asserting a layout-deforming 'spread the map' operation.",
      "rootCause": "The hand vocabulary was renamed everywhere in the app (15, 17, 04/13/14 HUD) but artifact 05's capture function, title string and result key were not updated with it.",
      "correction": "Recapture 05 against the current vocabulary: retitle to 'Open palm — move closer', rename result.pose to the current operation id, and update recipe.demonstrates." },
    { "artifact": "11", "severity": "major", "subsystem": "sync",
      "observed": "Splitting artifact 11 at x=960, the Windows and Android canvas regions are byte-identical: max per-channel difference 0 over rows 153-1024, with 113 detected blobs matching in centroid, area and mean RGB at exactly 960px offset. Only header, toolbar, seed banner and surface badge differ. The badges declare Electron 33.4.11 / Chromium 130 under Wine on Win32 versus Chromium 141 on Linux x86_64 — two Chromium majors on two platforms cannot rasterise 768,000 pixels of antialiased text and geometry identically. Artifact 12's twin row behaves the same way.",
      "rootCause": "Both panels are most likely composited from one rasteriser even though two live sockets and two runtimes are genuinely involved; positionsIdenticalAcrossSurfaces and twoDistinctSockets are model/transport-level checks that the pixels cannot corroborate.",
      "correction": "Either state on the frame that both panels share a rasteriser, or add a per-panel render fingerprint (WebGL renderer string, or a deliberate per-surface pixel token) so panel independence is checkable from the artifact itself." },
    { "artifact": "15", "severity": "minor", "subsystem": "evidence",
      "observed": "Artifacts 01 and 15 carry zero machine-checked claims, while the other 18 carry 2-12 each. Artifact 15's gesture table is the set's source of truth for the hand and touch vocabulary — the exact text that artifact 05's caption contradicts — and nothing verifies it against the runtime.",
      "rootCause": "Both artifacts are treated as descriptive screenshots rather than assertions.",
      "correction": "Add a claim on 15 asserting that each listed operation string equals the string the app emits for that pose/gesture, and a claim on 01 asserting the listed node counts equal the model's." },
    { "artifact": "02", "severity": "minor", "subsystem": "evidence",
      "observed": "DIFF.json's 'substantive' flag is set exactly when the capture recipe fingerprint changed — all 7 substantive rows carry a 'capture script changed (...)' note and no non-substantive row does. Consequently 02 (SSIM 0.853) and 04 (0.819), the two largest still-image changes of the cycle, are labelled non-substantive while 13 (SSIM 0.973) is substantive. The underlying numbers are honest (subjectChanged:true, litDelta 0.44 and 0.38 are both recorded) but notes[] is empty, so nothing writes the change up in prose.",
      "rootCause": "The flag name describes the cause of a change rather than its magnitude.",
      "correction": "Rename the flag to recipeChanged, and have notes[] automatically name any row with subjectChanged and litDelta above ~0.2." },
    { "artifact": "04", "severity": "minor", "subsystem": "evidence",
      "observed": "The 'Windows' lens is two different runtimes across the set without cross-reference: 02, 04, 06, 09, 10, 13 and 14 badge 'WINDOWS · CANVAS / chromium 141.0.7390.37 · Linux x86_64', while 11 and 12 badge 'electron 33.4.11 · Win32 · wine · the built binary'. Both are declared on-frame, so nothing is hidden.",
      "rootCause": "Only the twin captures drive the packaged binary under Wine; the rest run the same app in headless Chromium.",
      "correction": "Record the Windows runtime per artifact in MANIFEST.recipe so a reader comparing 02 against 11 is told they are different substitutions." },
    { "artifact": "06", "severity": "minor", "subsystem": "canvas",
      "observed": "Eight dashed-ring markers are present, matching 'holding 8' and the eight leader-lined labels, so countMatchesMarkers is true. But two of them sit at roughly (853,556) and (848,567) and overlap enough that at 1x they read as a single marker.",
      "rootCause": "No minimum separation is enforced for held-node markers inside the holding ring.",
      "correction": "Enforce a minimum on-screen separation for unplaced markers inside the ring so the waiting count is countable at a glance." },
    { "artifact": "17", "severity": "minor", "subsystem": "hands",
      "observed": "'Closed fist — Grab the nearest cluster and move it' writes node positions. clusterMoved and clusterInternalArrangementPreserved both pass, and my frame sampling supports rigid motion (frames at 1/5/9/13/17/21/25s map to the t=1s frame by pure scale+translate, scale 0.93-1.04, mean residual 0.81-0.94px over ~49/68 dots). But no artifact shows the moved cluster's new coordinates committed to the ledger or arriving on the other surface.",
      "rootCause": "The hand-tracking lens is captured in isolation from the sync pair.",
      "correction": "Extend the twin composite, or 17's claims, to show a fist-drag's resulting positions in the ledger on both sockets." }
  ],
  "comparisons": [
    { "artifact": "01", "verdict": "unchanged", "why": "SSIM 0.998; the only differing pixels are three identical 108x11 regions at rows 127-138, 487-498, 847-858 — the relative 'last opened' times. Genuinely re-captured." },
    { "artifact": "02", "verdict": "regressed", "why": "Positions untouched (52/53 dots map by scale 0.99989, offset (0.13,0.06), mean residual 0.20px), but label declutter lost: +85.5% label ink, SSIM 0.853, litDelta 0.44, the 'labels hidden at this zoom' chip gone, and three unreadable overprinted label pairs in a single 560x120 crop that is collision-free in cycle 7." },
    { "artifact": "03", "verdict": "improved", "why": "Now two device orientations (heading 34 and 96, headingChanged=62) with an explicit measured statement that 'Sauerkraut by weight' travelled 271px (125,-240) while its stored position did not change; badge still honestly declares 'android device profile · real orientation + touch events · no camera pass-through'. Label ink up 61% but declutter still dims secondary labels here." },
    { "artifact": "04", "verdict": "regressed", "why": "Same label defect as 02 (+78.4% ink, SSIM 0.819, litDelta 0.38; 'Blue: P. roqueforti' x 'Umami stacking' and 'Aspergillus oryzae' x 'Dechlorinate the water' x 'Amylase…' overprinted), with positions unmoved (median residual 0.28px, p90 0.74px over 58/59 dots). Partly offset by the HUD replacing 'Spread'/'Gather' with 'Closer'/'Back'." },
    { "artifact": "05", "verdict": "unchanged", "why": "Substantively the same capture (same recipe fnSha, same distBefore/distAfter 148.41/129.54, fan 1.044->1.012 so values are recomputed not hard-coded). The stale 'spread the map' headline carried over from cycle 7 and is now contradicted by the app's own chip in the same frame." },
    { "artifact": "06", "verdict": "improved", "why": "Reframed on the holding ring's own boundary; claims went 0 -> 4 (holdingRingFillsFrame, everyHeldNodeInFrame, countMatchesMarkers, everyHeldLabelAttributable). I counted 8 markers against 'holding 8' and 8 labels." },
    { "artifact": "07", "verdict": "unchanged", "why": "SSIM 0.974, label ink flat at -0.8%; differences are confined to the ladder panel and two state swatch rows." },
    { "artifact": "08", "verdict": "unchanged", "why": "SSIM 0.955. Panel-to-panel diff shows only the title, holding count 4->3, the editor fields, the dropped node's new spot and its vacated spot in the ring, and the 'Drag — Move node' chip; the rest of the node field is pixel-identical, so cameraFrozenAcrossPanels is genuinely true. Editor coords 2.1,-10.3,3.9 match positions.json's sec77dd4720 [2.056,-10.26,3.869]." },
    { "artifact": "09", "verdict": "unchanged", "why": "SSIM 0.940 with the same five claims; label ink up 59.9% in line with the set-wide declutter change." },
    { "artifact": "10", "verdict": "improved", "why": "Now shows several hits with the flown one centred: the white ring centroid is (961.1,542.0) against a frame centre of (960,540), 2.3px. Editor reads n3e0d08c741 · 16.5,12.5,-9.5 against positions.json's [16.511,12.545,-9.513]. Claims 5 -> 6." },
    { "artifact": "11", "verdict": "improved", "why": "Camera pulled back (dist 31.318 -> 53.416, same yaw/pitch/target) so the whole map sits in frame; identical pos sha 198501d063 on both panels in both cycles, and both cycles' pixels project from the same positions.json with max residual 0.17px." },
    { "artifact": "12", "verdict": "improved", "why": "Claims 11 -> 12, adding onlyTheDraggedNodeMoved and everyNodeUnoccludedByChrome; big-map ledger sha 2e0c939c6c identical to cycle 7's and identical across both sockets. Verified in pixels: exactly one node moved, to exactly its reported coordinates." },
    { "artifact": "13", "verdict": "improved", "why": "Preamble and position records now shown together; I checked all 11 exported pos vectors in the pixels against positions.json and every one matches. The prompt rules explicitly forbid moving placed nodes — 'Their positions are deliberate.'" },
    { "artifact": "14", "verdict": "improved", "why": "Claims 7 -> 8; adds a magnified detail row that states its own crop rectangles and magnifications (x2.09 at (14,442), x1.54 at (450,50), x1.37 at (546,86)). The rejection log names a placement refused because 'placed positions are not the finder's to change'. Panel-to-panel canvas mean abs diff 1.48 at a 640px offset, supporting cameraFrozenAcrossPanels." },
    { "artifact": "15", "verdict": "improved", "why": "The gesture reference was corrected: 'Spread the map — pull the whole brain wider'/'Gather the map' became 'Move closer — the map fills more of the frame; no thought moves'/'Pull back — …; no thought moves', and touch navigation became 'Re-aim the vantage — offset where the device heading points'. Still carries zero machine-checked claims." },
    { "artifact": "16", "verdict": "unchanged", "why": "SSIM 0.960 against a 0.93 threshold; 34s, 1920x1080, 30fps in both cycles. File bytes differ (1,940,376 -> 2,045,463), so it was re-encoded, i.e. genuinely recaptured." },
    { "artifact": "17", "verdict": "improved", "why": "Vocabulary corrected in the on-screen chips: cycle 7 showed 'Open palm — Spread the map' and 'Gathered hand — Gather the map'; cycle 8 shows 'Open palm — Move closer', 'Gathered hand — Pull back', plus 'Closed fist — Grab the nearest cluster and move it' and 'Two fingers — Select or confirm the node the hand is over', with mouse equivalents. Frame-to-frame the map moves by pure scale+translate (0.93-1.04, mean residual under 1px)." },
    { "artifact": "18", "verdict": "improved", "why": "Now steps on to a second hit (steppedToASecondHit added, claims 3 -> 4); 13s, 1920x1080, 30fps unchanged." },
    { "artifact": "19", "verdict": "improved", "why": "Take extended 18s -> 23s to cover the whole loop; claims 3 -> 6 adding connectedAfterPlacing, refoundBySearch and positionSurvivedTheWholeLoop, with atDrop/afterConnect/atEnd recorded as bit-identical [21.90675821839119,-14.641830931020277,13.692161279398377]. The refound node's ring sits at (961,539) against a frame centre of (960,540), matching centredOnRefind {dx:0,dy:0}." },
    { "artifact": "20", "verdict": "unchanged", "why": "SSIM 0.942 against a 0.95 threshold; same 4 claims, 30s/1920x1080/30fps, now showing both rejection kinds." }
  ],
  "verdict": "Cycle 8 is not regression-free, but the regression is narrow and the position work is the best-verified thing in the set. I could not break the sacred-positions story: positions.json is byte-identical across cycles 2-8 and is demonstrably the render source, since all 11 map-talk nodes project through each cycle's declared frozen camera onto measured pixels with max residual 0.17px in both cycles at an identical fitted focal and principal point, despite the camera distance changing from 31.318 to 53.416. Artifact 12 moves exactly one node and proves it: ten nodes keep byte-identical peak RGB under one similarity map while the moved node's reported after-coordinates project to (633.8,493.6) against a measured (634,494). Artifacts 02 and 04 confirm no inter-cycle drift at 0.20px and 0.28px median. The cycle-7 baseline is sound and I established that without trusting the regenerated ledger: cycle-7's untouched DIFF.json records the five cycle-7 video byte-sizes and the restored files match all five exactly while cycle-8's differ by up to 8x, cycle-8's DIFF 'prev' metrics equal cycle-7's own 'cur' metrics on all 20 rows, and the never-overwritten cycle-7 sheets span 17.6s against an 18s restored video where cycle 8's is 23s. All 20 artifacts were recaptured, no claim failed, and DIFF.json's SSIM figures reproduce to within 0.002 under my own implementation. What costs the cycle is artifact 02 — a named regression-watch artifact for category 03 — losing its label declutter: +85.5% label ink and three pairs of labels overprinted into unreadable text where cycle 7 had none, with the same defect in 04, guarded by two label claims that check frame containment and arbiter agreement rather than overlap. Alongside that, artifact 05 is the last place in the set still asserting the removed, position-deforming 'spread the map' operation, in a caption its own frame contradicts."
}
```