# The Auditor — cycle 13

*Written here verbatim, as received, before any response was made to it.*
*Categories: 03 One model and sacred positions (20, min 17) · 04 Evidence and integrity (15, min 13). Both are hard gates.*

**Both gates clear — 18 and 13 — and the cycle is declared NOT regression-free.**
The two regressions it names, artifact 06 (strongly-coloured canvas pixels fell
from 211 to zero) and artifact 09 (teal pixels on the after-panel canvas fell
from 1937 to zero), are real and are its own measurements of the **frozen**
cycle-13 set. I had already fixed both in the working tree at commit `8cd7b6b`,
which lands *after* that freeze — so this is not pre-emption and the frozen set
this critic scored genuinely carried both faults. They will only be provably
gone once a later cycle's frozen set is measured.

Its closing line is the finding I have to act on:

> What it still lacks is a gate that asks whether the shipped frame contains the
> thing its caption is about; 06 and 09 are what that gap costs.

Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have completed my measurements. Here is my verdict.

```json
{
  "critic": "auditor",
  "cycle": 13,
  "categories": [
    {
      "id": "03",
      "name": "One model and sacred positions",
      "weight": 20,
      "minimum": 17,
      "score": 18,
      "reasoning": "I reproduced the position ledger arithmetically rather than trusting it. `sha256` of the sorted compact JSON of `positions.json`'s `map-talk` is 198501d063 — exactly the `pos sha` printed on both panels of artifact 11, in cycle 13 and in cycle 12. Substituting only node s480af97d09 with the recorded destination [6.224564346905375, 2.1243814001730583, -8.559369780986067] yields f9a4912f50, exactly the sha printed on artifact 12; every other one of the eleven coordinates must be byte-identical or that hash could not match, so `onlyTheDraggedNodeMoved` and `everyOtherPositionUnchanged` are proven, not asserted. `positions.json` itself is byte-identical between cycles (6558507f79...). Cross-surface: in artifact 11 the Windows and Android canvases (y 250-1000) are pixel-identical when shifted by exactly 960 px (max channel diff 0); in artifact 12 the two surfaces' node-marker masks differ by 0 px on the talk map and 3 px out of 5562 on the 150-node map, while their drawn label sets visibly differ — two genuine renders agreeing on geometry, not one render pasted twice. Cross-cycle, every marker in 02, 03, 04 and 11 has a counterpart within 0.30 px (11's eleven markers within 0.17 px), corroborated by 02 and 04 carrying byte-identical camera records. Artifact 03's AR claim checks out under my own ruler: the highlighted node sits at panel-local (280.0, 530.0) and (397.0, 308.0), |Δ| = 250.9 px against the frame's printed 252 px and its stated device travel (125, −240) at ×0.928 → 251.5 px — the vantage moved, the node did not. Artifact 05's two panels scale the node cloud ×1.147 wide and ×1.148 tall, uniform to 0.1%: a dolly, not a rearrangement. Artifact 08 holds 8 of 9 markers at 0.00 px while exactly one leaves holding. Nothing drifts when idle: video 18's last 2.25 s move 0-1 pixel of node mask, video 19's last 1.6 s hold all 12 markers at 0.00 px, and during video 17's closed-fist grab 75 of 93 markers stay put to under half a pixel while a subset translates together. The doctrine is enforced where it counts — the exported prompt in artifact 13 carries all 11 positions matching the ledger and the rule 'Do not move nodes that are already placed. Their positions are deliberate', artifact 14's finder rejects a suggested placement because 'placed positions are not the finder's to change', and artifact 15 states that undo returns to the exact starting coordinates and 'nothing here ever tidies a layout'. Two points come off because the one-space story lost ground in the lenses: artifact 06 now shows zero strongly-coloured pixels anywhere on its canvas (cycle 12 had 211, six placed district markers), so the holding cluster no longer demonstrably sits in the shared 3D space at all; and artifact 10 hides seven surrounding markers behind its new left rail, so the found node is centred in less of its actual place than before."
    },
    {
      "id": "04",
      "name": "Evidence and report integrity",
      "weight": 15,
      "minimum": 13,
      "score": 13,
      "reasoning": "The machinery is strong and I verified it rather than reading about it. `sha256sum -c` passes on all 28 files of cycle-12 and all 28 of cycle-13, so the previous frozen set is intact and this diff is against the set its critics actually read. All 20 artifacts exist in both sets and all 20 were genuinely recaptured — every artifact file's hash differs, and MANIFEST records status=captured / capturedInThisRun=true for each with no errors. Every video exceeds its stated minimum (1920x1080, 30 fps; 34/41/13/23/47 s against 30/24/10/15/20 s) and every still meets its size. The contact sheets are provably derived from the videos: extracting all 20 timestamped frames of 19_capture_place_arc.mp4 and correlating each against all 20 tiles put 12 exactly on their own tile and every other on an immediately adjacent one (the take is static across those intervals), never on a distant tile, mean self-tile correlation 0.77. The gate set grew from 141 to 155 claims with fourteen added and none removed, all passing. The earlier cycle-13 run that captured 17/20 (01 driver-error, 05 and 06 claim-not-met) is preserved in MANIFEST.supersededRuns rather than erased. DIFF.json is honestly scoped: it names six recipe changes as 'not a like-for-like recapture', flags all eighteen SSIM drops as 'inspect', records claimsRemovedIds as empty, and explicitly disclaims that its position comparison is of the committed ledger and 'not a runtime drift measure'. Substitutions are declared on the artifacts themselves, which is what let me score them without any prose: artifact 03 prints 'no camera pass-through' and artifact 05 prints 'SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER', with the manifest's own pageErrors carrying 'Created TensorFlow Lite XNNPACK delegate for CPU' as corroboration that a real landmarker ran. Against that: artifact 09's frame does not contain its own headline claim. The caption says the colour was 'changed through the panel' to teal; I measured zero teal pixels anywhere on the after-panel canvas, because the edited node is clipped behind the district rail with only an arc of its selection ring surviving. Cycle 12's version showed 1937 teal pixels and a node core measuring (97, 236, 222). The gates let this through because `colourAfter: \"teal\"` is read from the model, and 09 carries neither `auditDescribesTheShippedFrame` nor `noNodeBuriedByChrome` — gates that 02, 04, 05 and 08 do carry. Artifact 06 was re-framed until it no longer meets its own definition, with nothing in the evidence set recording that as a loss. And artifact 05 prints '×1.11' for a span measured over a set of named thoughts that itself changed from 21 to 24, while the same frame's view distances imply ×1.153 and my measured marker bounding box gives ×1.147 — a number that will not mean to a reader what it measures. Three instances of a caption outrunning its frame is the deduction; everything else here is exemplary. I should record that per my instructions I did not read DIRECTION.md, report.md or any other critic's verdict, so I scored substitution honesty entirely from what the artifacts declare on their own faces, which proved sufficient."
    }
  ],
  "findings": [
    {
      "artifact": "06",
      "severity": "major",
      "subsystem": "canvas",
      "observed": "The holding cluster is drawn alone in an otherwise empty frame. Measuring strongly-coloured pixels (saturation > 45, value > 80) across the canvas region (x 0-1610, y 95-1010) gives 0 in cycle 13 against 211 in cycle 12, which formed six placed teal Equipment-district markers at the top left. The manifest's own on-frame counters fell in step: labelsHidden 6 -> 1, unlabelledListed 6 -> 1. The model is unaffected (result still reports nodes = 150), and the recipe sha changed (c3c27bb00aca3d71 -> 8dd48b690de940ed), so this is a deliberate re-framing.",
      "rootCause": "The `holdingRingFillsFrame` gate pushes the camera in until the dashed ring dominates the frame, and no counter-gate requires any placed node to remain visible. The cycle-13 recipe change that fixed the first run's claim-not-met on 06 satisfied that gate by zooming past everything else.",
      "correction": "Add a frame-derived claim to 06 — e.g. `placedNodesVisibleAroundTheRing >= 3` — and loosen `holdingRingFillsFrame` to a fill fraction (say 45-70% of the shorter frame axis) rather than a maximum. The artifact's definition is 'holding cluster in the shared 3D space'; at least one placed district and one filament crossing into the ring must be in frame for it to prove that."
    },
    {
      "artifact": "09",
      "severity": "major",
      "subsystem": "evidence",
      "observed": "The header states 'colour teal · text \"Koji-cured egg yolk · aged 60d\" — both changed through the panel'. I counted teal pixels (g > 140, b > 120, r < 120) across the after-panel canvas (x 980-1610, y 110-1010): zero. The edited node sits behind the district rail whose right edge falls at x ~1270; only an arc of its amber selection ring survives, sampled at (52, 39, 18). Cycle 12's same artifact had 1937 teal canvas pixels and a node core measuring (97, 236, 222) against (255, 189, 169) before the edit. The node markers that are visible in cycle 13's after panel are unchanged coral, e.g. (195, 82, 56).",
      "rootCause": "09's six claims are all model-derived (`editorWroteToTheModel`, `colourAfter: \"teal\"`, `linkedAfter`) with none derived from the shipped raster, and 09 carries no `noNodeBuriedByChrome` gate. A layout change that moved the unlabelled-thought rail to the left of the panel pushed the subject under it, and nothing in the gate set could notice.",
      "correction": "Give 09 a frame-derived gate: sample the recoloured node's projected screen position after raster and assert its hue matches the colour the editor wrote, plus `noNodeBuriedByChrome` scoped to the artifact's subject node. Then re-frame the capture so the edited node clears the rail. As a general rule, every artifact whose caption names a visual change needs one claim that reads that change back out of the pixels, the way 02 and 04 do with `auditDescribesTheShippedFrame`."
    },
    {
      "artifact": "10",
      "severity": "minor",
      "subsystem": "canvas",
      "observed": "Seven node markers that cycle 12 showed at x 53-124 (the purple Microbiology district surrounding the fly-to target) have no counterpart in cycle 13 — nearest-neighbour distances 390-518 px. Every marker that survives matches within 1 px, so nothing moved; the seven are behind the new left-hand list rail spanning x 0-300. The rail does name those same thoughts in text.",
      "rootCause": "The unlabelled-thought rail was moved from the right side of the frame to the left across 02, 04, 09 and 10, and in 10 it lands on the only part of the canvas that carried surrounding context for the found node.",
      "correction": "Place the rail on whichever side has fewer projected markers behind it, or reserve it a gutter outside the canvas viewport. 10's definition rests on the node being 'centred in its actual place'; the place needs to be visible around it."
    },
    {
      "artifact": "05",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "The after panel prints 'the map now spans 379.2 px, ×1.11' as its proof that the vantage moved and the map did not. The two printed spans are self-consistent (379.2/340.7 = 1.113), but the same frame's view distances (441.7 -> 383.0) imply ×1.153, and my own measurement of the node-cloud bounding box gives ×1.147 wide and ×1.148 tall. The discrepancy tracks the 'thoughts named' count changing from 21 to 24 between panels.",
      "rootCause": "The published span appears to be measured over the set of named thoughts, which is not stable between the two framings, so it is not a like-for-like quantity across the pair even though it is presented as one.",
      "correction": "Measure the span over a fixed node set — the same ids in both panels, or the full projected marker bounding box — and print that. The bounding-box ratio agrees with the view-distance ratio to 0.5%, which is a far stronger statement than the current figure."
    },
    {
      "artifact": "07",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "All five node markers shifted in x by 33.1 to 41.3 px between cycles while y changed by at most 0.16 px — a non-uniform horizontal shift with the vertical held, i.e. a small camera yaw. The world coordinates printed in the node editor are identical in both cycles (s7427082a98 · 0.4, 0.2, -0.7) and positions.json is byte-identical, so no node moved. The capture script sha is unchanged (dd265abdc8c01ca5); only the app sha changed, and 07 carries no `cameraPinned` claim, unlike 02 and 04.",
      "rootCause": "07's camera is derived from app-side state rather than pinned in the recipe, so a change in the bundle re-aims the frame without any recipe change being recorded in DIFF.json's recipeChangedIds.",
      "correction": "Pin 07's camera and add `cameraPinned` to its claim set, as 02 and 04 already have. An unpinned camera makes an artifact useless as a cross-cycle position witness even when nothing has moved."
    },
    {
      "artifact": "02",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "DIFF.json's summary reports 'unchanged: 2' and lists 18 changedIds, while all 20 artifact files have different sha256 values from cycle 12. 'Unchanged' here means SSIM above threshold, not that the file was not recaptured.",
      "rootCause": "One word is carrying two meanings — byte identity and perceptual similarity — in a document whose whole purpose is to tell a reader what was recaptured.",
      "correction": "Rename the summary fields to `perceptuallyUnchanged` / `perceptuallyChanged` and add an explicit `bytesChanged: 20` alongside them, so a reader cannot mistake a stable frame for a skipped capture."
    }
  ],
  "comparisons": [
    { "artifact": "01", "verdict": "improved", "why": "Adds a GROWN OVER column (one sitting / 4 weeks / 36 months) beside node counts and last-opened; create, rename and delete still shown operating across three states. Recaptured after a driver-error in the superseded run, which the manifest records." },
    { "artifact": "02", "verdict": "improved", "why": "Every node marker matches cycle 12 within 0.30 px and the saturated-marker XOR has no blob of 10 px or more; camera record byte-identical. The rail now lists all 87 unlabelled thoughts in two columns instead of 38 plus '…and 43 more', and two gates were added (noNodeBuriedByChrome, everyThoughtOnScreenIsNamed). Names drawn on the canvas itself fell 37 -> 27, which is the cost of the trade." },
    { "artifact": "03", "verdict": "improved", "why": "Positions identical to within 0.28 px in both panels, with the right panel a perfect 84-to-84 match. The measured travel of the highlighted node (250.9 px) agrees with the frame's own published ruler figure (252 px) to 1.1 px. Cycle 12's left panel promised 'listed at right' with no rail present; cycle 13 drops that false promise." },
    { "artifact": "04", "verdict": "improved", "why": "Every cycle-12 marker matched within 0.30 px, camera record byte-identical, and the truncated right rail ('…and 50 more') is replaced by a complete two-column listing of all 82. Two gates added. The rail now occupies the left third of the frame, and names drawn on the canvas fell 47 -> 32." },
    { "artifact": "05", "verdict": "improved", "why": "Cycle 12's after panel showed 'no hand — show a hand to the camera · tips out 0 fan 0.00 conf 0.00', which is the one thing this artifact exists to show. Cycle 13 shows a detected Open palm with landmarks at conf 0.94 and 0.95 in both panels, with the toggle reading 'Hands: on · tracking · Open palm' throughout, and four gates were added including detectorLiveInBothPanels. The published span ratio remains measured over a shifting basis." },
    { "artifact": "06", "verdict": "regressed", "why": "Strongly-coloured canvas pixels fell from 211 (six placed district markers) to zero. The holding cluster no longer appears in the shared 3D space at all — no placed node, no district, no filament anywhere in frame — which is half of what this artifact is defined to show." },
    { "artifact": "07", "verdict": "unchanged", "why": "All five node states still coexist and remain individually distinguishable; the search-hit node's four N/E/S/W ticks are visible under magnification and labels are fuller than cycle 12's truncations. The frame yawed roughly 35 px horizontally from an app-side change with no camera pin, but world coordinates and positions.json are identical, so nothing moved." },
    { "artifact": "08", "verdict": "improved", "why": "Eight of the nine shared markers sit at panel-local positions identical to 0.00 px between before and after, with exactly one marker leaving the holding ring for the placed cloud and the badge falling 4 -> 3. Three chrome gates were added (noTwoChromePanelsOverlap, everyChromeBadgeInsideTheFrame, noNodeBuriedByChrome)." },
    { "artifact": "09", "verdict": "regressed", "why": "The recoloured node is now clipped behind the district rail. Teal pixels on the after-panel canvas fell from 1937 to zero, so the artifact's headline claim — 'colour teal … changed through the panel' — cannot be checked against the frame at all. The node's world coordinates (21.6, 12.6, -7.6) are still printed identically before and after, so the position half of the claim survives." },
    { "artifact": "10", "verdict": "unchanged", "why": "The found node is still centred, search-hit ticks lit, text crisp, and every surviving marker matches cycle 12 within 1 px. Seven markers of surrounding district are now behind the new left rail, which lists those thoughts by name instead." },
    { "artifact": "11", "verdict": "unchanged", "why": "Same pos sha (198501d063), which I reproduced from positions.json myself. All eleven node markers within 0.17 px of cycle 12, with max pixel difference 10/255 from adjacent text antialiasing. The Windows and Android canvases are now pixel-identical under a 960 px shift, and the label picks are fuller than cycle 12's." },
    { "artifact": "12", "verdict": "improved", "why": "Now a two-map composite: the talk-map cross-surface edit plus a 150-node half on the same two sockets, with the 'Lacto-vegetables' cluster move measured on the frame (expected travel 51.5, 50.4 px against measured 51, 50 px, agreement 0.7 px). I measured 0 differing pixels between surfaces on the talk map and 3 of 5562 on the 150-node map, with 24 sampled markers matching at 0.00 px." },
    { "artifact": "13", "verdict": "unchanged", "why": "Same prompt harness. I checked all eleven exported positions against positions.json and every one matches to display rounding, and the prompt still carries the rule 'Do not move nodes that are already placed. Their positions are deliberate.'" },
    { "artifact": "14", "verdict": "unchanged", "why": "Same three-state layout with the same crop-provenance annotations on the detail row (crop size, origin, and scale relative to the panel above), and the same rejection log that turns down a placement because 'placed positions are not the finder's to change'. Only crop parameters and label picks differ." },
    { "artifact": "15", "verdict": "unchanged", "why": "Byte-different but functionally identical: same six touch gestures, four hand poses with mouse equivalents, sync status naming positions among the synced fields, and the undo note that nothing ever tidies a layout. The live status now reads 'Open palm' instead of 'spread', matching the documented pose name." },
    { "artifact": "16", "verdict": "unchanged", "why": "34 s at 1920x1080/30 fps, six labelled touch gestures in sequence (tap, double-tap, long-press, drag a node, drag empty space, pinch/spread) against a minimum of five, each toasted as it fires, in the same 1280x1440 device frame used by artifact 03." },
    { "artifact": "17", "verdict": "unchanged", "why": "41 s at 1920x1080/30 fps with all four poses labelled and mapped to distinct operations, plus an honest 'unrecognised' state at 17.4 s where the detector declines to match. During the closed-fist grab, 75 of 93 markers hold position to under half a pixel while a subset translates together, so the rest of the map does not shift when a cluster is moved." },
    { "artifact": "18", "verdict": "unchanged", "why": "13 s at 1920x1080/30 fps, query typed, view flown, ending legible. The final 2.25 s are dead still — the node mask differs by 0 or 1 pixel between successive sampled frames — which is direct evidence that nothing drifts once the camera lands." },
    { "artifact": "19", "verdict": "unchanged", "why": "23 s at 1920x1080/30 fps, one-action quick-add into holding then a drag to a permanent spot. All 12 markers hold at 0.00 px across the final 1.6 s. Its contact sheet is the one I registered against the video frame by frame, confirming the sheets are genuinely derived from the takes." },
    { "artifact": "20", "verdict": "improved", "why": "Grew from 41 s to 47 s and gained two gates (acceptLandedAt150Nodes, rejectLeftNoTraceAt150Nodes). The take now includes an honest failure path — 'No JSON found in that reply. Nothing was changed' — before the valid paste, then parses to five staged suggestions with six entries rejected, accepts one and rejects one leaving no trace." }
  ],
  "regressionFree": false,
  "positionRegression": false,
  "verdict": "This cycle is NOT regression-free. I name two regressed artifacts, each with the measurement that shows it. Artifact 06 lost the shared 3D space: strongly-coloured canvas pixels fell from 211 in cycle 12 — six placed Equipment-district markers — to exactly zero, so the holding cluster now floats in an empty frame and no longer demonstrates that unplaced thoughts wait inside the same space the placed ones occupy. Artifact 09 lost its subject: teal pixels on the after-panel canvas fell from 1937 to zero because the recoloured node is clipped behind the district rail, leaving the frame unable to support the caption's claim that the colour was changed through the panel; the gate set missed it because 09's claims are read from the model rather than the raster. Neither is a position regression, and I found none anywhere: positions.json is byte-identical across the two cycles, the pos sha printed on artifact 11 reproduces exactly as the sha256 of that ledger, the sha printed on artifact 12 reproduces exactly from that ledger with only the single dragged node substituted — which is arithmetic proof that ten of eleven coordinates were untouched by a cross-surface edit — and every node marker in artifacts 02, 03, 04 and 11 sits within 0.30 px of where it sat last cycle, corroborated by byte-identical camera records for 02 and 04. Cross-surface agreement is pixel-exact (0 differing pixels on the talk map, 3 of 5562 on the 150-node map) while the two panels' label sets visibly differ, so these are two real renders agreeing on geometry. Nothing drifts when left alone: 0-1 pixel of change across video 18's final 2.25 s and 0.00 px across video 19's final 1.6 s. The evidence machinery is the strongest part of this build — both frozen ledgers verify, all 20 artifacts were genuinely recaptured, the gate set grew by 14 with none removed, the superseded 17/20 run is preserved rather than erased, DIFF.json declares its own limits, and both environment substitutions are declared on the artifacts themselves in terms I could check without reading a word of prose. What it still lacks is a gate that asks whether the shipped frame contains the thing its caption is about; 06 and 09 are what that gap costs. I did not read DIRECTION.md, report.md, or any other critic's verdict, per my instructions, and scored the artifacts and instruments alone."
}
```