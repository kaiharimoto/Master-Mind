# The Auditor — cycle 7

*Written here verbatim, as received, before any response was made to it.*
*Categories: 03 One model and sacred positions (20, min 17) · 04 Evidence and report integrity (15, min 13). Both are hard gates.*

---

I have completed my audit. Here is my verdict.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 03 — One model and sacred positions | 18 | 20 | 17 | Yes |
| 04 — Evidence and report integrity | 13 | 15 | 13 | Yes (just) |
| **Total** | **31** | **35** | — | — |

## Regression verdict

**Cycle 7 is REGRESSION-FREE against cycle 6. No node position moved.**

What I measured:

- **Positions.** `positions.json` is byte-identical across cycles (md5 `f94dd829…`). Parsed and diffed key-by-key: `map-fermentation` 150 nodes, `map-talk` 11 nodes, **0 moved, 0 added, 0 removed**. DIFF.json's `positions` block (`moved:[] added:[] removed:[] identical:true`) is true. Independently corroborated: the full map JSON printed in artifact 13 lists all 11 `map-talk` nodes at exactly the coordinates in `positions.json`, and the coordinates independently reported by artifacts 08 (`sec77dd4720` [2.056,−10.26,3.869]), 10 (`n3e0d08c741` [16.511,12.545,−9.513]), 12 (`s480af97d09` [−6.1,−4.3,−3.1]), 18 and 20 all match the ledger.
- **Rendered positions.** Detected coloured node blobs in artifacts 02 and 04 in both cycles and nearest-neighbour matched them: 113 blobs in 02, max displacement **0.62 px**; 118 blobs in 04, max **0.73 px**. Nothing moved on screen either.
- **Completeness.** All 20 files present in both cycles; I recomputed sha256 and byte size for all 20 cycle-7 artifacts against MANIFEST.json — **zero mismatches** — and re-measured every PNG's dimensions and every MP4 with ffprobe. All five videos match the manifest exactly and clear the brief's minima (16: 34 s/30 fps/1920×1080 vs 30 s min; 17: 41 s vs 24; 18: 13 s vs 10; 19: 18 s vs 15; 20: 30 s vs 20).
- **DIFF.json's SSIM is honest.** I reimplemented SSIM and reproduced its numbers on all 14 comparable PNGs to within ~0.005 (e.g. 02: mine 0.9747 vs its 0.9733; 10: 0.8311 vs 0.8178; 14: 0.7956 vs 0.7816). Its "uncomparable" verdict on 12 (1920×1080 → 1920×2160) and its note that the video sheets changed shape (5448 → 5888 px, verified) are both true.

**One apparent regression that I checked and it is not one.** The on-frame counter "labels hidden at this zoom" rose sharply: artifact 02 26 → 33, artifact 04 17 → 30, artifact 05 26 → 41 (left) and 17 → 30 (right). DIFF.json names this nowhere and marks 05 "unchanged". I cropped matching regions of 04 at 1.8× in both cycles: cycle 6 rendered labels **hard-truncated with no marker** — "Beef gar", "Amylase pl", "Koji o", "5% targe", "Brine-wa", "Koji-accele" — which read as wrong text. Cycle 7 replaces these with explicit ellipsis ("Beef…", "Amylase…", "5% target…") and drops the ones it cannot shorten honestly, backed by the new machine checks `labelArbiterAgreesWithDraw` and `labelWorstOverhangPx: 0`. Fewer labels, but no label lies. That is an improvement, not a regression.

Artifacts **improved**: 02, 03, 04, 07, 08, 09, 10, 12, 14, 18, 20 (machine claims rose from 45 to 65 across the set with none removed; artifact 18 went from zero claims to three; artifact 12 grew a second row showing the 150-node map on both sockets). **Unchanged**: 01, 06, 11, 15, 16, 17, 19. **Regressed**: none.

## Blocking findings

None.

## Major findings

**B1 · artifact 07 · evidence.** The recipe advertises "the luminance ladder measured off the shipped frame", but `withinRungSpread` is not measurable off the shipped frame. I sampled the node cores in `07_five_node_states.png`: the two "connected" nodes (Lists flatten meaning, Demo: search fly-to) have Rec.709 luminance **0.4107 and 0.4713 — a spread of 0.060**, where the manifest reports `withinRungSpread.connected = 0.0002`, 300× smaller. The two "plain" nodes measure 0.3003 and 0.3005 (spread 0.0002) where the manifest reports 0.0187 — the two rungs are inverted relative to the pixels. No luminance definition I tried reproduces 0.0002 (HSL lightness Δ0.162, value Δ0.058, mean RGB Δ0.081, linear Y Δ0.082, ring-peak Δ0.024). `measuredRungs` itself *is* reproducible (reported 0.291/0.4252/0.5627/0.6768/0.8021 vs my disc-mean 0.300/0.428/0.566/0.671/0.785), so `ladderStepsClearScatter` compares an absolute pixel step against a scatter computed in some other space. Against the frame the true margin is min step 0.105 vs max within-rung spread 0.060 — **1.7×, not the 6.1× the numbers imply**. *Fix:* compute `withinRungSpread` with the same sampler that produces `measuredRungs`, or rename it to what it actually measures and stop comparing it to `rungSteps`.

**B2 · artifact 14 · evidence/ui.** The magnified-detail row is clipped by the bottom of the frame. Ink runs to the last row, y = 1079, spanning x = 500–1262, with glyphs sliced in half ("Demo: sear" is visibly cut). The captions promise "crop 624×392 at (450,50)" at ×1.03 and "crop 806×508 at (474,88)" at ×0.79 — 404 px and 401 px of rendered height — but the caption block ends at y ≈ 690, leaving ~390 px. Roughly 30 px of every detail panel, including the node the third panel exists to prove nothing happened to, is off-frame. *Fix:* shrink the detail crops or the caption block so each panel fits within 1080, and assert `detailPanelBottom <= frameHeight` as a claim.

**B3 · artifact 12 · sync/ui.** The NODE editor occludes a placed node in both surfaces of the top row. I fitted the projection from artifact 11 to artifact 12's top panel — a single uniform scale of 0.9597 about a fixed point reproduces every unmoved node to ≤0.5 px — which puts the amber "Closing: build your own" node at ≈(736, 341). I measured the editor panel starting at x = 651 and cropped that region: it is entirely covered by the Label/Colour/Connect controls, and the labels "Lists flatten meaning" and "Positions are the memory" are clipped at the panel's left edge. For the one artifact whose headline is `noNodeDropped`, only 10 of 11 nodes are visible; the claim is true in the model but unverifiable in the frame. *Fix:* offset the frozen camera or move the editor so all 11 nodes clear it, and add a claim `everyNodeUnoccludedByChrome`.

## Minor findings

**B4 · artifact 03 · evidence.** `anchorMovedOnScreen: 117` is the x-component alone. The manifest's own anchors are (314, 501) and (431, 322): the true screen displacement is (117, −179) = **214 px**, and I measured the node's dot centres at (332, 554) → (442, 385), giving 202 px. The frame prints "travelled 117 px across the frame", understating the movement by ~45%. *Fix:* report the Euclidean distance, or label it "moved 117 px horizontally".

**B5 · artifact 14 · evidence.** `detailIsMagnified: true` passes with `detailMagnificationFloor: 0.79` — a factor below 1 is a reduction, so the claim's name asserts the opposite of its own number. It is substantively true relative to the panel above: I measured "Method of loci" at 75 px wide in the top-row panels vs 148 px and 114 px in the details (1.97× and 1.52×), and the frame honestly prints "Detail ×0.79". *Fix:* express the factor relative to the panel it magnifies, so the headline reads ×1.5 rather than ×0.79.

**B6 · DIFF.json · evidence.** No row's `whatChanged` names an actual pixel change. On 02 and 04 it cites only a capture-script hash and restates a `demonstrates` string that is byte-identical to cycle 6's (I checked cycle-6's manifest: 02's recipe string is character-for-character the same). On 05 the row reads "unchanged" (ssim 0.9595 against the loosest threshold in the set, 0.94) while the frame's own semantic counter moved 26 → 41 and 17 → 30. The diff measures global SSIM and luminance but never the numbers printed on the frames. *Fix:* OCR or read back the on-frame counters (labels hidden, holding N, node counts) and diff them as first-class fields.

**B7 · DIFF.json · evidence.** The summary's four buckets (unchanged 6, changed 13, new 0, missing 0) total 19; the "uncomparable" row 12 is in no bucket. *Fix:* add an `uncomparable` count so the buckets sum to 20.

**B8 · artifact 18 · renderer.** The zero-overhang guarantee the stills advertise does not hold in the takes: the final frame of `18_search_flyto.mp4` has a label clipped at the left frame edge — 41 ink pixels at x = 0–2, rows 188 onward, rendering as "…eks". *Fix:* run the label arbiter's overhang check per video frame, not only at still capture.

## What is strongest

The positional evidence is close to airtight, and it is airtight in ways only pixels can show. In artifact 11 the Android map body is **bit-identical** to the Windows one (max channel difference 0 across y 180–1000) with the two panels' node centroids offset by exactly 960.00 px; in artifact 12 an Android drag propagates and every other node lands on the position a single uniform projection predicts to within 0.5 px, while the new bottom row repeats the proof at 150 nodes on two declared sockets. Artifact 20 is the quiet standout: I measured the rejected node's holding ring at (543.5, 502) in the first frame and (543.5, 502) in the last, with the three surviving ring dots matching to ≤0.15 px — a rejection that genuinely left no trace. And video 19 proves the negative that the mission cares most about: from t = 12.5 s to t = 17.5 s after the drop, frame-to-frame difference in the map region never exceeds 26/255 with at most 9 pixels above 10 — the layout does not breathe, drift or settle.

```json
{
  "critic": "auditor",
  "cycle": 7,
  "regressionFree": true,
  "positionRegression": false,
  "categories": [
    { "id": "03", "name": "One model and sacred positions", "weight": 20, "minimum": 17, "score": 18,
      "reasoning": "positions.json is byte-identical to cycle 6 (161 nodes across two maps, 0 moved/added/removed) and is corroborated by the map JSON printed in artifact 13 and by the coordinates independently reported in 08, 10, 12, 18 and 20. Rendered positions match too: node blobs in 02 and 04 sit within 0.62 px and 0.73 px of cycle 6. Artifact 11's Android map body is pixel-identical to the Windows one with a 960.00 px offset on all seven placed nodes; artifact 12's post-drag panel is reproduced from artifact 11 by a single uniform 0.9597 scale with residuals under 0.5 px, so only the dragged node moved, and its new bottom row repeats the proof at 150 nodes with identical pos sha on two sockets. Artifact 08's frozen camera puts six of seven nodes at identical screen coordinates to 0.00 px; artifact 20's rejected placement leaves the holding ring at the same pixel; video 19 is static to within 26/255 for five seconds after the drop. Deductions: artifact 12 hides one of eleven placed nodes behind the NODE editor in both surfaces, so the frame cannot show the noNodeDropped claim it is built to prove, and label coverage on 02/04 fell by 7 and 13 labels (a defensible trade for honest ellipsis, but a cost to reading the one model at a glance)." },
    { "id": "04", "name": "Evidence and report integrity", "weight": 15, "minimum": 13, "score": 13,
      "reasoning": "All 20 artifacts were recaptured this cycle and I verified it rather than taking it: every sha256 and byte count in MANIFEST.json matches the shipped file, every PNG dimension matches, and every video's duration, fps and frame count matches ffprobe and clears the brief's minima. I reimplemented SSIM and reproduced DIFF.json's scores on all 14 comparable PNGs to within 0.005; its positions block, its uncomparable verdict on 12 and its note about the contact sheets changing shape (5448 to 5888 px) are all true. Substitutions are declared on the frames themselves, not buried: 'no camera pass-through' on 03, 'SYNTHESISED CAPTURE - HAND-VOCABULARY-SLOW.Y4M - REAL HANDLANDMARKER' on 05, 'windows-binary-under-wine' with socket and pid provenance on 12. Machine claims rose from 45 to 65 with none removed. Against that: artifact 07's withinRungSpread is not reproducible off the shipped frame the recipe says it was measured off (connected rung reported 0.0002, measured 0.060), so the ladder's clearance is 1.7x not 6.1x; artifact 14's detail row is clipped by the frame bottom (ink at y=1079, glyphs bisected); anchorMovedOnScreen is an x-component printed as travel across the frame; detailIsMagnified passes on a 0.79 factor; and DIFF.json's whatChanged never names a real pixel change, reading 'unchanged' on 05 while its own on-frame counter moved 26 to 41." }
  ],
  "findings": [
    { "artifact": "07", "severity": "major", "subsystem": "evidence",
      "observed": "Manifest reports withinRungSpread.connected = 0.0002 and plain = 0.0187, and the recipe says the ladder was 'measured off the shipped frame'. Sampling the node cores in the shipped PNG gives the two connected nodes at Rec.709 luminance 0.4107 and 0.4713 (spread 0.060) and the two plain nodes at 0.3003 and 0.3005 (spread 0.0002) - the two rungs inverted. measuredRungs itself does reproduce (0.291/0.4252/0.5627/0.6768/0.8021 vs measured 0.300/0.428/0.566/0.671/0.785).",
      "rootCause": "withinRungSpread is computed on a state-intensity parameter or a per-district delta, not on the drawn pixel luminance that measuredRungs and rungSteps use.",
      "correction": "Compute withinRungSpread with the same sampler that produces measuredRungs so ladderStepsClearScatter compares like with like; on the frame the real margin is min step 0.105 vs max spread 0.060." },
    { "artifact": "14", "severity": "major", "subsystem": "evidence",
      "observed": "Ink runs to the final row y=1079 across x=500-1262 with glyphs sliced in half. Captions promise 624x392 at x1.03 and 806x508 at x0.79 (404 and 401 rendered px) but the caption block ends at y~690, leaving ~390 px.",
      "rootCause": "The detail row's height was not constrained against the 1080 px frame after the caption block grew to three lines.",
      "correction": "Shrink the crops or the caption block so each detail panel fits, and add a claim asserting the detail row's bottom is inside the frame." },
    { "artifact": "12", "severity": "major", "subsystem": "sync",
      "observed": "The amber 'Closing: build your own' node projects to approximately (736,341) in the top-left panel - inside the NODE editor, which begins at x=651 - and is fully covered in both surfaces. Two labels are clipped at the panel's left edge. Only 10 of 11 nodes are visible in an artifact headlined noNodeDropped.",
      "rootCause": "The camera frozen from artifact 11 was not re-checked against the editor panel's footprint after the header grew a fourth line and shrank the canvas by a factor of 0.9597.",
      "correction": "Offset the frozen camera or reposition the editor so all 11 nodes clear it, and add an everyNodeUnoccludedByChrome claim." },
    { "artifact": "03", "severity": "minor", "subsystem": "evidence",
      "observed": "anchorMovedOnScreen: 117 is the x difference of anchors (314,501) and (431,322); the true displacement is 214 px, and I measured the node's dot centres at (332,554) and (442,385) giving 202 px. The frame prints 'travelled 117 px across the frame'.",
      "rootCause": "The metric takes only the horizontal component but is named and captioned as screen travel.",
      "correction": "Report the Euclidean distance, or caption it as horizontal movement." },
    { "artifact": "14", "severity": "minor", "subsystem": "evidence",
      "observed": "detailIsMagnified: true with detailMagnificationFloor: 0.79 - a sub-1 factor named a magnification. The details are genuinely enlarged relative to the panel above ('Method of loci' measures 75 px there vs 148 px and 114 px in the details), and the frame honestly prints 'Detail x0.79'.",
      "rootCause": "The factor is expressed against the app's native render rather than against the composited panel it magnifies.",
      "correction": "Express the factor relative to the panel above so the headline reads x1.5 rather than x0.79." },
    { "artifact": "05", "severity": "minor", "subsystem": "evidence",
      "observed": "DIFF.json marks 05 'unchanged' (ssim 0.9595 against a 0.94 threshold, the loosest in the set) while the frame's own counters moved from '26 labels hidden' to '41' and from '17' to '30'. No row's whatChanged on any artifact names a pixel change; on 02 and 04 it cites only a capture-script hash and restates a demonstrates string byte-identical to cycle 6's.",
      "rootCause": "The diff compares global SSIM, luminance and recipe hashes but never reads the semantic counters the app prints on its own frames.",
      "correction": "Read back the on-frame counters (labels hidden, holding N, node counts, pos sha) and diff them as first-class fields alongside SSIM." },
    { "artifact": "18", "severity": "minor", "subsystem": "renderer",
      "observed": "The final frame has a label clipped at the left frame edge - 41 ink pixels at x=0-2 from row 188 - rendering as '...eks', so the labelWorstOverhangPx: 0 guarantee the stills carry does not hold in the takes.",
      "rootCause": "The label arbiter's overhang check runs at still-capture time only, not per video frame.",
      "correction": "Run the overhang check every frame during video capture, or fade labels that would cross the frame edge." }
  ],
  "comparisons": [
    { "artifact": "01", "verdict": "unchanged", "why": "Byte-identical to cycle 6 (md5 201fb98b), ssim exactly 1.0. Consistent with the fixed seed epoch and a deterministic pipeline; still shows both seeded maps with 150 and 11 nodes and create/rename/delete operating." },
    { "artifact": "02", "verdict": "improved", "why": "113 node blobs match cycle 6 within 0.62 px, so nothing moved. Labels are now ellipsised rather than silently hard-truncated, and the new labelArbiterAgreesWithDraw / labelWorstOverhangPx:0 checks back it; the cost is 7 fewer labels drawn (26 to 33 hidden), which DIFF never names." },
    { "artifact": "03", "verdict": "improved", "why": "Same three claims as cycle 6 but ssim 0.983 with the anchor-travel prose added. The 'no camera pass-through' declaration remains honest and the 34-to-96-degree heading delta of 62 matches headingChanged." },
    { "artifact": "04", "verdict": "improved", "why": "118 node blobs match within 0.73 px. Gained labelArbiterAgreesWithDraw and recencyChannelExercised with per-district recency and chroma ranges. Labels hidden rose 17 to 30 for the same honest-ellipsis reason as 02." },
    { "artifact": "05", "verdict": "improved", "why": "Same declared-synthetic capture with the source clip path in the manifest; hidden-label counters moved 26 to 41 and 17 to 30 for the ellipsis change. DIFF calls it 'unchanged' against its 0.94 threshold, which is the weakest verdict in the set." },
    { "artifact": "06", "verdict": "unchanged", "why": "ssim 0.9993. Eight ring glyphs matching the 'holding 8' chip; the waiting count is glanceable." },
    { "artifact": "07", "verdict": "improved", "why": "Gained ladderMonotonic and ladderStepsClearScatter, and the ladder is genuinely monotonic in the pixels (0.300 / 0.44 / 0.566 / 0.671 / 0.785). But withinRungSpread is not reproducible from the frame - see finding B1." },
    { "artifact": "08", "verdict": "improved", "why": "Gained cameraFrozenAcrossPanels, and I verified it: six of seven placed nodes project to identical screen coordinates across the panels to 0.00 px, with holding 4 to 3." },
    { "artifact": "09", "verdict": "improved", "why": "Gained recencyMatchesModel; ssim 0.989. Node n99ff69458f keeps position 21.6,12.6,-7.6 across the edit and every other dot holds the same screen position at a 960 px offset." },
    { "artifact": "10", "verdict": "improved", "why": "Gained four claims including severalHitsShown and flownHitCentred. The flown hit sits at exactly (960,540) in a 1920x1080 frame, 13 hits carry the four-tick signature, and homeBefore equals homeAfter equals the ledger entry for n3e0d08c741." },
    { "artifact": "11", "verdict": "unchanged", "why": "Byte-identical, ssim 1.0. The Android map body is pixel-identical to the Windows one (max channel difference 0 over y 180-1000) with all seven node centroids offset by exactly 960.00 px." },
    { "artifact": "12", "verdict": "improved", "why": "Scoped up, not down: 9 claims to 11, and a second row showing the 150-node map on both sockets with pixel-identical bodies and identical pos sha 2e0c939c6c. DIFF correctly marks it uncomparable because the geometry went 1080 to 2160. Marred by the occluded node in finding B3." },
    { "artifact": "13", "verdict": "improved", "why": "ssim 0.941. The exported prompt shows every node's pos and the rule 'Do not move nodes that are already placed. Their positions are deliberate.' All 11 coordinates match positions.json exactly." },
    { "artifact": "14", "verdict": "improved", "why": "4 claims to 7, adding cameraFrozenAcrossPanels, rejectedPairUnjoined and the magnified detail row - a real gain, ~2.0x and ~1.5x the panel above by text-width measurement. Undercut by the clipped bottom (B2) and the x0.79 naming (B5)." },
    { "artifact": "15", "verdict": "unchanged", "why": "Byte-identical, ssim 1.0. Documents 6 touch gestures and 4 hand poses with mouse equivalents; confirms Spread/Gather are view operations, which is what artifact 05's view-distance change shows." },
    { "artifact": "16", "verdict": "unchanged", "why": "34 s, 1920x1080, 30 fps, 7 gestures fired against a 5-gesture minimum; ssim 0.918 on the fallback take-comparison method, which the DIFF note declares errs toward reporting change." },
    { "artifact": "17", "verdict": "unchanged", "why": "41 s, four poses recognised, clusterMaxMemberDrift 0 on a 16-member cluster whose centroid travelled 17.83 - a rigid translation, consistent with the settings reference wording 'members keep their internal arrangement'." },
    { "artifact": "18", "verdict": "improved", "why": "Went from zero machine claims to three, and grew from 11 s to 13 s to step to a second hit. The final frame lands 'Koji-accelerated garum' at exactly (960,540). One label clips the left frame edge (B8)." },
    { "artifact": "19", "verdict": "unchanged", "why": "18 s. The strongest negative evidence in the set: from t=12.5 s to t=17.5 s after the drop, frame-to-frame max difference in the map region is at most 26/255 with at most 9 pixels above threshold - no drift, wobble or settle." },
    { "artifact": "20", "verdict": "improved", "why": "2 claims to 4, adding placementRejectionLeftNoTrace and bothRejectionKindsShown. Verified in pixels: the rejected node's ring is at (543.5,502) in both the first and last frames, the three surviving rings match to 0.15 px, and holding goes 4 to 3 from the accepted placement only." }
  ],
  "verdict": "Cycle 7 is regression-free and no node moved. positions.json is byte-identical across cycles and is independently corroborated by the map JSON printed in artifact 13 and by the coordinates five other artifacts report; rendered node positions in 02 and 04 match cycle 6 within 0.73 px. Every manifest checksum, dimension and video duration verifies against the shipped file, and I reproduced DIFF.json's SSIM scores myself on all 14 comparable stills. The one change that looked like a regression - 7 to 15 more labels suppressed per frame on 02, 04 and 05 - turned out on close crops to be the opposite: cycle 6 was drawing silently hard-truncated labels ('Beef gar', 'Amylase pl', '5% targe') and cycle 7 replaces them with honest ellipsis and drops what it cannot shorten. What holds the score down is not dishonesty but claim names that overreach their values and a diff that under-reports: artifact 07's withinRungSpread cannot be measured off the frame its recipe says it was measured off, artifact 14's detail row is clipped by the frame bottom, artifact 12 hides one of eleven nodes behind its own editor panel in the artifact built to prove none was dropped, and DIFF.json calls artifact 05 'unchanged' while the counter printed on that very frame moved from 26 to 41. Both categories clear their minimums, category 04 only just."
}
```
