# The Auditor — cycle 9

*Written here verbatim, as received, before any response was made to it.*
*Categories: 03 One model and sacred positions (20, min 17) · 04 Evidence and report integrity (15, min 13). Both are hard gates.*

**This verdict fails a hard gate: category 04 scores 12 against a minimum of
13, on two blocking findings.** It is recorded here before the response to it,
unedited, including that failure.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have completed the audit. Here is my verdict.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 03 — One model and sacred positions | 17 | 20 | 17 | Yes (at the line) |
| 04 — Evidence and report integrity | 12 | 15 | 13 | **No** |
| **Total (my two categories)** | **29** | **35** | — | **Gate 04 fails** |

## Regression verdict

**Cycle 9 is NOT regression-free against cycle 8.** No node moved; the regressions are in what the frames draw over the nodes and in what the manifest asserts about frames that cannot support it.

**Position regression: NO.** Established four independent ways, not one:
- `positions.json` is byte-identical to cycle 8 (and to cycles 2–7): 161 nodes across `map-fermentation` (150) and `map-talk` (11), diffed after JSON normalisation — zero differences. `DIFF.json`'s `positions: {moved:[], added:[], removed:[], identical:true}` is correct.
- Because a static file proves only that a file didn't change, I re-derived positions from pixels. On artifact **02**, the node-marker mask (saturation ≥ 45, max channel ≥ 90) over y 100–1010 gives IoU **0.9683** between cycles (3364 intersect / 3474 union; 21 px only-in-c8, 89 px only-in-c9). Every discrepancy clusters on markers whose occlusion changed (label leader-lines removed in c9, labels added in c9) — no marker translated. Artifact **04**: IoU **0.9519**, same explanation.
- On artifact **11**, the six node markers of `map-talk` map from cycle 8 to cycle 9 under a single uniform scale **0.9792** plus translation with **RMS residual 0.076 px** — a camera/viewport change, not a layout change. Constellation span 275 px.
- On artifact **08**, marker centroids are numerically identical between cycles (e.g. (454.67, 366.00), (348.91, 429.91), (601.47, 529.43) in both), before and after the drop.

**Baseline soundness — established, and I did not take the README's word for it:**
- `cycle-8.sha256` verifies **28/28 OK** against the on-disk directory; `cycle-9.sha256` verifies **28/28 OK**. File counts match ledger line counts (28 files, 28 lines) in both, so nothing is hiding outside the ledger.
- Independent second attestation: `cycle-8/MANIFEST.json`'s per-artifact `check.sha256` matches all 20 cycle-8 artifact files, and `cycle-9/MANIFEST.json`'s matches all 20 cycle-9 files. The README's disclosed post-freeze edit touched only `cycle-8/DIFF.json`, a derived file with no artifact hash — consistent with what I measure.
- The disclosed overwrite incident is not latent: **no** cycle-7 file is byte-identical to its cycle-8 counterpart (all 20 differ), and `cycle-7.sha256` verifies with 0 failures. Had cycle-7 still been cycle-8's copies, they would be identical.
- I re-computed SSIM myself (11×11 box-window, grayscale) for all 15 PNGs. My values track `DIFF.json`'s within 0.0003–0.056, same ordering, and land on the same side of every stated threshold (e.g. 02: mine 0.8553 / DIFF 0.8735; 05: 0.4781 / 0.5343; 15: 1.0000 / 1.0000). DIFF's arithmetic is honest.
- Suspicious identity check: exactly two files are byte-identical to cycle 8 — `positions.json` (expected, and desirable) and `15_settings_gestures.png`. Artifact 15 is disclosed as `ssim 1 / unchanged` in DIFF and `capturedInThisRun: true` in the manifest. A static settings screen under a frozen seed clock (`seed.epoch 1787227200000`) can legitimately re-render to the same bytes, so I do not call it staged — but see B3, because DIFF simultaneously tells you its recipe did **not** change, and its recipe fingerprint did.

**Artifacts that regressed, and how I measured each:**

| Artifact | Verdict | Measurement |
|---|---|---|
| 04 | **regressed** (also improved elsewhere) | Two node markers newly buried under label glyphs. In an 18×18 box at (676, 475): marker pixels **45 → 7**, text-like pixels **5 → 40**. At (929, 706): marker pixels **10 → 0**, text pixels **0 → 42**. Crops confirm "pH 4.6…" and "Muslin…" sit on top of the discs; cycle 8 drew both clear. |
| 02 | **regressed** (integrity) | A new claim `noTwoDrawnLabelsOverlap: true` is asserted on a frame containing two labels superimposed at x 1043–1087, y 200–209 (see B1). The pixel collision existed in cycle 8 too; the false certification of it is new. |
| 17 | **regressed** (integrity) | New claim `clusterMovePropagatedToTheOtherSurface: true` and a newly-added `android` runtime, on a take in which the other surface never appears (see B2). |
| 12 | **regressed** (integrity + legibility) | New claim `eachPanelNamesItsRasteriser: true` on a composite that names no rasteriser (M4); and the new label-suppression chip is overdrawn by the seed chip, so the frame reads "…els hidden · 36 shortened" — the count is destroyed (m3). |
| 11 | **mildly regressed** | "Positions are the memory" is now truncated to "Positions are…"; the frame's own chip says "1 shortened at this zoom". Cycle 8 drew the full string. Disclosed, but information was lost from the artifact whose job is the twin comparison. |

Improved: 01, 03, 05, 06, 07, 09, 10, 13, 14, 19, 20 (and 02/04 in label-collision terms — cycle 8's 02 and 04 drew every label into an unreadable pile, and cycle 8's 10 drew labels for nodes with no visible marker at all; cycle 9's arbiter fixes all three and states its suppression counts on-frame). Unchanged: 15, 16, 08 (pixel-equivalent), 18 (re-shot, same content, second-hit step added).

## Blocking findings

**B1 — artifact 02 — `noTwoDrawnLabelsOverlap: true` is false against its own frame.**
At x 1043–1087, y 200–209 two truncated labels are drawn on top of each other with roughly a (−3, +4) offset — "Raw…" over "Katz…" — producing an illegible glyph pile with two ellipses at two baselines. I confirmed it three ways: visual crop at 10× nearest-neighbour; a contrast-normalised crop showing two distinct baselines; and a row-density profile over y 196–219 showing a single 10-px band carrying two strings' worth of strokes (peak 24 lit columns/row against a median label density of ~9). The claim is new in cycle 9 (cycle 8's artifact 02 carried only `cameraPinned`, `nodes`, `labelArbiterAgreesWithDraw`, `everyLabelInsideTheFrame`), and `labelArbiterAgreesWithDraw: true` is asserted alongside it. A machine claim that certifies the absence of the exact defect visible in the frame it certifies is the most serious thing on this evidence set. **Fix:** make the overlap test operate on the rasterised glyph boxes of every drawn label (including truncated ones and the ellipsis), not on the arbiter's pre-draw candidate boxes; then either hide one of "Raw…"/"Katz…" or nudge it, and let the "84 labels hidden" chip absorb the change.

**B2 — artifact 17 — `clusterMovePropagatedToTheOtherSurface: true` cannot be corroborated by the take.**
I sampled the 41 s / 1230-frame video at 1 s intervals and, separately, tiled the bottom-left surface badge at every 120th frame (t = 0, 4, 8 … 40). Every sample reads `WINDOWS · MIND EXPANSION · chromium 141.0.7390.37 · Linux x86_64`. No Android panel, no second socket, no cross-surface strip appears anywhere in the video. Cycle 9 also added `android: chromium …` to this artifact's `recipe.runtimes`, which tells a reader a second surface was in shot. The claim and the runtime attribution are both new this cycle. This is a claim asserted on an artifact whose frames cannot bear it. **Fix:** either compose the Android socket into the take (a strip like artifact 12's, showing the same cluster arriving), or move the claim and the android runtime off artifact 17 and onto 12, where two sockets are actually shown.

## Major findings

**M1 — artifact 04 — `everyDrawnLabelHasAVisibleMarker` and `everyLabelStaysBesideItsNode` both pass while two markers are erased by label text.**
Measured above (B-table): 84% and 100% of two markers' pixels are replaced by glyph pixels. Both claims are new in cycle 9 and both are presumably scoped to a label versus *its own* node, so they are true as implemented and misleading as named: a label may sit dead-centre on a *neighbour's* node and still pass. On a lens whose brief is "the entire 100+ node map on screen at once and legible", a node vanishing under another node's caption is precisely what these claims read as excluding. **Fix:** rename to what they test (`labelNearItsOwnMarker`), and add a real one — `noDrawnLabelCoversAnyMarker` — that fails when a glyph box overlaps any marker disc by more than a small fraction.

**M2 — artifact 04 — the frame states 87 and then shows 49.**
The right-hand panel is headed "87 thoughts on screen without room for a label"; I counted the bullet glyphs in the x 1630–1650 column and found **49** (spacing 17.8 px, first at y 157, last at y 1012). `DIFF.json` records the app's own figure as `unlabelledListed 0 → 50`. The list is not clipped — I cropped y 940–1080 and there is empty background below the last entry — so it stops deliberately, with no "+38 more" marker. 37–38 of the 87 thoughts are neither labelled on the map nor named in the list, and nothing on the frame says so. **Fix:** either paginate/compress to list all 87, or print "showing 50 of 87" under the heading.

**M3 — `DIFF.json` — `recipeChanged` / `summary.recipeChangedIds` reports something other than its name.**
Comparing `recipe.fnSha` across manifests, **eleven** artifacts changed capture recipe: 01, 02, 03, 04, 05, 06, **07**, 10, 14, **15**, 17. `summary.recipeChangedIds` lists nine, omitting 07 and 15, and both of those rows carry `"recipeChanged": false`. The rows do disclose the fingerprint change in `whatChanged` and add `"why": "recipe reworded, output unchanged"`, which is what saves this from being blocking — but the flag and the summary array say the recipe did not change when it did. This matters mechanically: `recipeChanged` is what decides which SSIM drops get flagged in `notes` as unexplained ("output moved materially … inspect"). It also means the one byte-identical artifact on the whole set, 15, is presented as having an unchanged recipe when its capture function was rewritten — the single combination an auditor most needs surfaced. And "recipe reworded" is a judgement the harness cannot make: its only evidence is that the output didn't move, which is circular. **Fix:** rename the field `recipeMaterial` (or split into `recipeFingerprintChanged` + `outputMoved`) and make `recipeChangedIds` list every fnSha change.

**M4 — artifact 12 — `eachPanelNamesItsRasteriser: true`, but no panel on artifact 12 names a rasteriser.**
I read all four panel headers at 2× magnification. They name engines and sockets ("electron 33.4.11 · wine · the built binary · socket #5", "chromium 141.0.7390.37 · android device profile · touch · socket #6") and, below, "150 nodes · pos sha 2e0c939c6c · one camera: yaw 0.340 pitch 0.160 dist 122.8". No raster line anywhere. Artifact **11** does carry it — "raster ANGLE (Google, Vulkan 1.3.0 (SwiftShader Device (Subzero) (0x0000C0DE)), SwiftShader driver)" — on both panels, and it names the *same* rasteriser on both. That disclosure is load-bearing: I measured artifact 12's two canvases as **byte-identical** (0 of 300,000 pixels differ in the map-talk region, 0 of 468,000 in the 150-node region, at an offset of exactly 960), and the only honest way to read byte-identity as "two processes agreeing" rather than "one render pasted twice" is knowing both processes rasterise through the same SwiftShader path. Claiming the disclosure on the artifact that lacks it, while the artifact that has it does not claim it, inverts the evidence. **Fix:** print the raster line in artifact 12's headers (both halves), and keep the claim there.

**M5 — artifact 14 — `detailRowInsideFrame: true` while the detail row runs off the bottom of the frame.**
The bottom detail crops are cut by the 1080-px edge: the label "Demo:" is sliced mid-line and the dashed holding ring in the rightmost detail is truncated (212 non-background pixels survive in rows y 1075–1079). Separately the first detail heading is clipped mid-word by its neighbour column: "Detail ×1.04 of the app's pixels — t". **Fix:** size the detail row to the remaining frame height (or reduce to three details), and let headings wrap.

## Minor findings

**m1 — artifact 12 — "CAMERA FROZEN FROM 11" is not reproducible against artifact 11.** Fitting the five unmoved `map-talk` markers from 11 to 12's top-left panel gives a uniform scale **0.9794** and translation **(9.8, 22.8)** with RMS residual **0.109 px**. The residual is the good news — it proves rigorously that only the dragged node moved. But a reader told the camera is frozen will try to overlay the two frames and find everything off by up to 14 px and 2.1%, almost certainly because 12's header is a line taller and the canvas auto-fits. **Fix:** say "same camera, shorter viewport" or pad 12's canvas to 11's height so the two actually register.

**m2 — artifact 03 — the on-frame travel figure does not measure out in the frame it labels.** The caption says the anchor "travelled 271 px across the frame (125, −240)" and the panels report x = 253 and x = 378. I located the gold anchor rings by colour-blob centroid and confirmed both by 8× crop: left (273.4, 515.2), right panel-relative (392.0, 289.5). Measured travel **(118.6, −225.7) = 255 px**, about 6% below the printed figure and consistent with a ~0.95 downscale between the app capture and the composited panel that the caption does not mention. **Fix:** convert to composite pixels before printing, or say "in the device's own frame".

**m3 — artifacts 12 and 05 — the label-suppression chip is destroyed by chrome overlap.** In 12's 150-node panels the seed chip is drawn over it, yielding "…els hidden · 36 shortened at this zoom"; in 05 the same, "…ls hidden · 30 shortened" / "…ls hidden · 37 shortened". Artifact 02 shows the intact string ("84 labels hidden · 36 shortened at this zoom"). The hidden-label count is the honest disclosure doing real work everywhere else on this set, and in the narrower panels it is the one number you cannot read. Note `everyNodeUnoccludedByChrome: true` passes here — true, and narrower than it sounds. **Fix:** stack the two chips or right-align the suppression chip below the seed chip when the panel is under ~1000 px.

**m4 — artifact 14 — `detailIsMagnified` passes on a detail headed "×0.68".** Three details are headed ×1.04, ×0.93, ×0.93 and one ×0.68 — all reductions or near-parity relative to the app's pixels; only the small print ("×1.37 of the panel above") makes them magnifications. **Fix:** lead with the ratio the claim actually tests.

## What is strongest

The positional core is proved to a standard I could not fault: artifact 12's Windows and Android canvases differ in **zero** of 768,000 compared pixels across both halves at an exact 960-px offset, and the five nodes that were not dragged map from artifact 11 to artifact 12 under a pure similarity transform with a **0.109 px** RMS residual — so "only the dragged node moved" is not an assertion, it is measurable. Artifact 13's exported prompt JSON carries all eleven `map-talk` positions matching `positions.json` digit for digit (`s480af97d09 [-6.1,-4.3,-3.1]`, the same node artifact 12 then drags), artifact 17 prints "16 nodes moved together · internal arrangement drift 0.000000" on the frame, and artifact 20 shows the finder refusing a placement because "placed positions are not the finder's to change" — the sacred-positions rule is enforced in the export, the gesture and the AI loop, not just asserted. And artifact 07's luminance ladder checks out independently: measuring relative luminance off the shipped pixels gives plain 0.074–0.084 < connected 0.160–0.182 < unplaced 0.284 < search-hit 0.427 < selected 0.631 — monotonic with clear separation, exactly as `ladderMonotonicInRelLuminance` claims.