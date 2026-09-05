# The Audience — cycle 7

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

---

I have completed my measurements. Here is my verdict.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 01 — Core workflow | 21 | 25 | 20 | Yes |
| 02 — Landmarks live | 20 | 25 | 20 | Yes (at minimum) |
| **Total (my two)** | **41** | **50** | **40** | **Yes** |

## Blocking findings

None. Both landmark lenses are operable in the frames, and the capture→place→refind loop is demonstrated end to end in a single take.

## Major findings

**A1 — artifact 03 (and 16): the AR reticle never points at the node it names.**
The amber ring is fixed in screen space — I measured it at panel-relative (640,746) in the left panel and (641,745) in the right, a 1 px difference across a 62° heading change, which is exactly right for an aiming reticle. But its interior is empty background in every frame I sampled: dumping all pixels within a 21×21 box at the ring centre returns only `(18,14,11)` (the canvas ground) in both panels of 03. Meanwhile the readout chip below it names a node **21 px away** (03 left, "Kimchi: gochugaru"), **91 px away** (03 right, "Ferment at 18-22C", whose own label is dimmed and half-hidden behind "Giardiniera"), **127 px** (16 @ 9.2 s, "Slide budget: 12") and **149 px** (16 @ 33.1 s, "Positions are the memory", node at (930,376) vs reticle at (959,522)). The ring's radius is ~12 px, so the named node sits 2–12 reticle-diameters away with no leader line. This is the one affordance that makes the AR lens legible as AR rather than as the desktop canvas with a chip, and it does not carry.
*Fix:* draw a leader line from the ring to the named node, or move the ring to the node's projected position and let it travel; failing that, dim every node except the named one while the readout is up.

**A2 — artifact 04: the artifact whose brief is "on screen at once and legible" is not legible, and got less so.**
The frame declares **"30 labels hidden at this zoom — move closer to read them"** (cycle-6 declared 17 — see the regression section). Of the labels that are drawn, I measured "Cabbage core sugars" at **12 px cap-height**, against **23 px** for the same style in artifacts 06 and 10 — the mind-expansion lens renders type at half the size of the canvas lens. On top of that, the node cloud occupies x 480→1451, i.e. **971 px of the 1920 px frame (50.6 % horizontal fill)** with 469 px of dead black to the right and 480 px to the left.
*Fix:* the cloud is near-square (971×907), so widening the FOV won't help — roll/yaw the vantage so the cloud's long axis runs horizontally, and spend the recovered width on type; or dock the 30 suppressed labels as a readable column in the empty right margin so "the whole map at once" is actually true.

**A3 — artifact 10: two labels are clipped by the viewport edge, contradicting the artifact's own reported measurement.**
MANIFEST records `labelWorstOverhangPx: 0` over `labelsAudited: 40`. Sampling the maximum luminance of column x=0 across each label's rows: "Heterofermentative" reads **126** and "Salt tolerance curve" reads **113** at x=0 (a clean row, "Mold vs yeast ID", reads 15 — background). Both have ink running off the left edge; the "S" of "Salt" is cut roughly in half. The arbiter is auditing a different box than the one being drawn.
*Fix:* make the label arbiter's box the drawn box, and clamp or cull any label whose box crosses the viewport rect.

**A4 — artifact 10: a search hit's label is overdrawn by its own node.**
"Sweet vs savoury paths" runs along y≈542 and its node disc (radius ~19 px) plus its left/right search-hit ticks sit centred on the word "savoury", occluding two glyphs. The label is drawn *through* the node rather than offset from it, unlike every other hit in the frame.
*Fix:* apply the same offset rule the other hits use, or suppress the disc fill under a label run.

## Minor findings

**A5 — artifact 16: two of seven gestures map to the same operation.** "Drag empty space — Look around" (19.6 s, 22.9 s) and "Gyroscope — Device orientation — look around" (29.8 s, 33.1 s) are the same operation with two inputs. The rubric asks each gesture to map to a *different* operation; the vocabulary is 6 distinct operations across 7 gestures. *Fix:* give the drag-empty beat a distinct operation (orbit vs. pan, say) or drop it and let gyro own "look around".

**A6 — artifact 05/17: "Spread the map" is a camera dolly, and the label invites the wrong reading.** I measured the coloured node cloud growing from **695×525 px to 794×581 px (+14.2 % width)** between the before and after panels, against a reported view distance change 148.4 → 129.5 (ratio **1.146**). The measured scaling matches the dolly ratio to within 0.4 %, so no node moved in world space — correct for a mission where positions are sacred, but "Spread the map" reads as if the layout changed. With "Gather the map" as its inverse, two of the four poses are zoom-in and zoom-out. *Fix:* rename to "Move closer / pull back", and consider giving one of the two poses an operation that isn't camera distance.

**A7 — artifact 06: labels are not attributable to their nodes.** No leader lines, and the offsets are large enough to be ambiguous. "Nixtamal plus koji" ends 30 px from the dot at (1105,558) and 32 px from the dot at (1118,605); "Read the succession paper" begins 74 px from the first and 67 px from the second. Two labels, two candidate dots, distances within 10 % of each other. The dashed ring at (1105,558) also sits on the "koji" glyph line (ring bottom y≈566, cap top y≈567). *Fix:* short leader lines for holding-cluster labels, or place each label directly beneath its dot with a fixed offset.

**A8 — artifact 03: the caption under-reports its own measurement.** "Sauerkraut by weight travelled 117 px across the frame" — but 117 is only the x component of the manifest's own anchor pair (314,501) → (431,322), whose magnitude is 214 px. I measured the label bbox centre moving (98, −159) = **187 px**. *Fix:* quote the euclidean travel.

**A9 — artifact 17: one mouse equivalent doesn't name its pose.** The tail chips read "Scroll up — the Open palm equivalent", "Scroll down — the Gathered hand equivalent", "Left click — the Two fingers equivalent" — but the fourth reads only "Alt-drag — Grab cluster", omitting "the Closed fist equivalent". Also, at 38.0 s the "cluster Koji · 16 nodes moved together" chip is drawn on top of the seed-provenance chip, obscuring "…map-fermentation.json". *Fix:* one chip template; offset the cluster chip below the provenance chip.

**A10 — the core loop is never shown at scale.** Artifacts 19, 08 and the readable part of 06 all run on the 11-node talk map or a zoomed corner. The 150-node map appears only in the wide, hard-to-read shots. The loop is proven; its behaviour under crowding is not. *Fix:* re-shoot 19 on map-fermentation.

## What is strongest

Artifact 08 is the best evidence in the set: aligning the two panels, the optimal offset is **exactly 960 px** and the mean luminance difference over the 900×570 canvas region is **0.57/255**, with only 0.39 % of pixels differing by more than 40 — every node but the placed one projects to the identical pixel, which makes "positions are sacred" a measurement rather than a claim. Artifact 19 backs it in motion: from 13.5 s to 17.9 s after the drop, the canvas is frozen to a maximum luminance delta of 29 with 3 pixels above 25 — nothing drifts, wobbles or settles, and artifact 17 is equally still (max 28, 1 pixel) across its 31.2–33.0 s gap. Artifact 09's new filament is real and not a redraw: along the segment from the selected node to "Shio koji", the before panel reads background (15) at 13 of 19 sample points while the after panel reads 80–134 at all 19, with the node id and coordinates (21.6, 12.6, −7.6) unchanged either side.

## Regression check

Nine of the ten artifacts in my categories are unchanged or improved.

**Improved:** **04** — cycle-6 hard-truncated roughly 35 labels mid-word with no ellipsis ("Rye start", "Autol", "Bretta", "Aspergill", "Koji-accele", "Cheese cav", "Brine-wa"); cycle-7 replaces these with proper "…" elisions. **08** — adds the frozen-camera guarantee I verified above, and replaces cycle-6's tautological chip "mouse-drag — the mouse-drag equivalent — Move node" with "Drag — Move node". **09** — adds a recency readout tied to the model. **10** — cycle-6 flew to a *single* hit (`query: "grape leaf", hits: 1`); cycle-7 flies to one of **19** hits with 13 in frame all wearing the search-hit crosshair, and the flown hit is centred to the pixel (tick midpoints x=960, y=540 — exact frame centre).

**Unchanged:** **03** (0.35 % of pixels differ; identical gyro triples, anchors, `headingChanged: 62`), **05** (0.80 %; fan 1.043→1.044, conf 0.958→0.948), **06** (0.01 % — effectively byte-equivalent), **16** (same seven gestures, same 34 s), **17** (same four poses, same 16-node cluster, drift 0), **19** (same text, same final position to 2 dp).

**One thing got WORSE: artifact 04.** Its hidden-label chip went from **"17 labels hidden at this zoom"** in cycle-6 to **"30 labels hidden at this zoom"** in cycle-7 — a 76 % increase in labels suppressed outright, in the one artifact whose brief is "the entire 100+ node map on screen at once and legible". Cycle-7's elision policy is the better policy, but it was paid for by hiding thirteen more labels rather than by making room for them. Artifact 04 is therefore improved on honesty and regressed on coverage; I have counted it as improved overall, but the coverage loss is the single regression in my categories.

---

```json
{
  "critic": "audience",
  "cycle": 7,
  "categories": [
    { "id": "01", "name": "Core workflow", "weight": 25, "minimum": 20, "score": 21,
      "reasoning": "The capture-place-refind loop is coherent and, unusually, measurable. Artifact 19 carries it in one take: the quick-add toast reads 'Captured into holding - 5 waiting. Drag it out to place it.', the chip reads holding 5, the editor header reads 'NODE · UNPLACED, IN HOLDING' with the label auto-set to 'holding' and a live coordinate readout during the drag; after the drop the header becomes 'NODE', the label clears, the chip reads holding 4, and the canvas is pixel-frozen for 4.4s (max luminance delta 29, 3 pixels above 25). Artifact 08 proves positions are sacred by measurement: the two panels align at an offset of exactly 960px with a mean luminance difference of 0.57/255 and only 0.39% of pixels differing by more than 40. Artifact 09's new filament is real - background (15) at 13 of 19 samples before, 80-134 at all 19 after - with node id and coordinates identical. Artifact 10 centres the flown hit to the pixel (tick midpoints x=960, y=540). Against that: 10 clips two labels at the left viewport edge (ink luminance 126 and 113 at column x=0) while reporting labelWorstOverhangPx 0, and overdraws 'Sweet vs savoury paths' with its own node disc; 06 gives no leader lines, leaving two labels each within 10% of the same two candidate dots; and the whole loop is shot on the 11-node map, never at 150-node scale.",
      "score_note": "21/25" },
    { "id": "02", "name": "Landmarks live", "weight": 25, "minimum": 20, "score": 20,
      "reasoning": "Both lenses are operable and honestly declared. Artifact 16 fires six distinct touch gestures plus gyro with on-screen labels, and I verified the operation actually landing: the holding chip reads 4, then 5 immediately after 'Long-press - Quick-add into holding', then 4 again after 'Drag a node - Place / move'. The connect beat produces a filament with no particle burst and no bounce. Artifact 17 shows four recognised poses with per-frame telemetry plus an honest 'unrecognised' state; the two-fingers beat changes the editor from 'Botulism needs low acid' to 'pH 4.6 is the line'; the cluster grab reports 16 nodes moved with drift 0.000000; and all four mouse equivalents appear (Alt-drag, Scroll up, Scroll down, Left click) alongside the persistent Grab/Spread/Gather/Select buttons. Artifact 05's operation is verifiable in pixels: the node cloud grows 695x525 to 794x581 (+14.2% width), matching the reported dolly ratio 148.4/129.5 = 1.146 to within 0.4%. The webcam feed is declared 'SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER' and the AR badge declares 'no camera pass-through' - honest substitutions I have not penalised. What holds the score at the minimum is the AR half. The reticle is fixed in screen space to within 1px across a 62-degree heading change, which is correct, but its interior is pure background (18,14,11) in every frame and the chip beside it names a node 21, 91, 127 and 149 px away with no leader line - so the lens's one AR-specific affordance never points at what it says. Artifact 04, the mind-expansion showcase, declares 30 labels hidden and renders type at 12px cap-height against 23px on the canvas artifacts, in 50.6% of the frame width.",
      "score_note": "20/25" }
  ],
  "findings": [
    { "artifact": "03", "severity": "major", "subsystem": "ar",
      "observed": "The AR reticle is fixed in screen space (panel-relative 640,746 and 641,745 across a 34-to-96-degree heading change) but its interior is empty background in both panels - every pixel in a 21x21 box at the ring centre reads (18,14,11). The readout chip names a node 21px away in the left panel and about 91px away in the right, with no leader line. The same defect recurs in artifact 16 at 127px (9.2s) and 149px (33.1s).",
      "rootCause": "The chip reports the nearest node to the reticle (or to the touch point) rather than the node under it, and nothing draws the association.",
      "correction": "Draw a leader line from the ring to the named node, or snap the ring to the node's projected position; alternatively dim all other nodes while the readout is up." },
    { "artifact": "04", "severity": "major", "subsystem": "expansion",
      "observed": "The frame declares '30 labels hidden at this zoom'. Measured label cap-height is 12px ('Cabbage core sugars') against 23px for the same style in artifacts 06 and 10. The node cloud spans x 480-1451, filling 971 of 1920 px (50.6%) with 469px and 480px of empty black either side.",
      "rootCause": "A near-square point cloud (971x907) fitted to frame height in a 16:9 viewport, with the label budget then trimmed to fit.",
      "correction": "Roll or yaw the vantage so the cloud's long axis runs horizontally and spend the recovered width on type size, or dock the 30 suppressed labels as a readable column in the empty right margin." },
    { "artifact": "10", "severity": "major", "subsystem": "renderer",
      "observed": "MANIFEST reports labelWorstOverhangPx 0 over 40 labels audited, but two labels have ink at column x=0: 'Heterofermentative' reads maximum luminance 126 and 'Salt tolerance curve' reads 113 at x=0, against a background of 15 on a clean row. The 'S' of 'Salt' is cut roughly in half.",
      "rootCause": "The label arbiter measures a different rectangle than the one the renderer draws, or it only audits hits.",
      "correction": "Make the arbiter's box the drawn box and clamp or cull any label whose box crosses the viewport rect." },
    { "artifact": "10", "severity": "major", "subsystem": "renderer",
      "observed": "'Sweet vs savoury paths' is drawn through its own node: the disc (radius ~19px, centred 1218,532) and its left/right search-hit ticks sit on the word 'savoury', occluding about two glyphs. Every other hit in the frame has its label offset clear of the disc.",
      "rootCause": "That label falls back to a centred anchor when the offset placement collides with a neighbour.",
      "correction": "Apply the same offset rule used by the other hits, or suppress the disc fill under a label run." },
    { "artifact": "16", "severity": "minor", "subsystem": "ar",
      "observed": "'Drag empty space - Look around' (19.6s, 22.9s) and 'Gyroscope - Device orientation - look around' (29.8s, 33.1s) label the same operation, so the seven gestures fired cover six distinct operations.",
      "rootCause": "Gyro and empty-space drag are wired to the same camera handler.",
      "correction": "Give the empty-space drag a distinct operation (orbit versus pan), or drop the beat and let gyro own 'look around'." },
    { "artifact": "05", "severity": "minor", "subsystem": "hands",
      "observed": "'Open palm - Spread the map' is a pure camera dolly: the node cloud scales uniformly 695x525 to 794x581 (+14.2% width, +10.7% height) matching the view-distance ratio 148.4/129.5 = 1.146 to within 0.4%. No node moved in world space. With 'Gathered hand - Gather the map' as its inverse, two of the four poses are zoom in and zoom out.",
      "rootCause": "Correct behaviour (positions are sacred) given a label that implies layout change.",
      "correction": "Rename to 'Move closer' / 'Pull back', and consider reassigning one of the two to an operation that is not camera distance." },
    { "artifact": "06", "severity": "minor", "subsystem": "canvas",
      "observed": "Holding-cluster labels carry no leader lines and sit 30-90px from their dots. 'Nixtamal plus koji' ends 30px from the dot at (1105,558) and 32px from the dot at (1118,605); 'Read the succession paper' begins 74px from the first and 67px from the second - two labels whose two nearest candidates differ by under 10%. The ring at (1105,558) also abuts the 'koji' glyph line (ring bottom y~566, cap top y~567).",
      "rootCause": "Label placement optimises for non-overlap without preserving attribution.",
      "correction": "Short leader lines for holding-cluster labels, or a fixed below-dot offset." },
    { "artifact": "03", "severity": "minor", "subsystem": "evidence",
      "observed": "The caption reads 'Sauerkraut by weight travelled 117 px across the frame', but 117 is only the x component of the artifact's own anchor pair (314,501) to (431,322), whose magnitude is 214px. I measured the label bbox centre moving (98, -159) = 187px.",
      "rootCause": "The caption interpolates anchorMovedOnScreen, which stores dx rather than the distance.",
      "correction": "Quote the euclidean travel." },
    { "artifact": "17", "severity": "minor", "subsystem": "hands",
      "observed": "Three tail chips name the pose they substitute for ('Scroll up - the Open palm equivalent', 'Scroll down - the Gathered hand equivalent', 'Left click - the Two fingers equivalent'); the fourth reads only 'Alt-drag - Grab cluster'. Separately, at 38.0s the 'cluster Koji · 16 nodes moved together' chip is drawn over the seed-provenance chip, obscuring 'map-fermentation.json'.",
      "rootCause": "Two chip templates and an unmanaged top-left stacking order.",
      "correction": "One chip template for all four equivalents; offset the cluster chip below the provenance chip." },
    { "artifact": "19", "severity": "minor", "subsystem": "canvas",
      "observed": "The capture-place arc, the placement end-state (08) and the readable part of the holding cluster (06) all run on the 11-node talk map or a zoomed corner. The 150-node map appears only in the wide, small-type shots.",
      "rootCause": "Legibility of the take was prioritised over scale.",
      "correction": "Re-shoot 19 on map-fermentation so the loop is shown under real crowding." }
  ],
  "comparisons": [
    { "artifact": "03", "verdict": "unchanged", "why": "0.35% of pixels differ from cycle-6; identical gyro triples, identical anchors (314,501)/(431,322), headingChanged 62, anchorMovedOnScreen 117. The reticle mis-targeting persists unaddressed." },
    { "artifact": "04", "verdict": "improved", "why": "Cycle-6 hard-truncated roughly 35 labels mid-word with no ellipsis ('Rye start', 'Autol', 'Bretta', 'Aspergill', 'Koji-accele', 'Cheese cav', 'Brine-wa'); cycle-7 uses proper '…' elision and adds label-arbiter and recency-channel claims. Cost, and the one regression in my categories: the hidden-label chip rose from '17 labels hidden at this zoom' to '30'." },
    { "artifact": "05", "verdict": "unchanged", "why": "0.80% of pixels differ; telemetry near-identical (fan 1.043 to 1.044, confidence 0.958 to 0.948, same 148.41/129.54 distances)." },
    { "artifact": "06", "verdict": "unchanged", "why": "0.01% of pixels differ - effectively the same frame; identical holding count, origin and radius." },
    { "artifact": "08", "verdict": "improved", "why": "Adds cameraFrozenAcrossPanels, which I verified independently (optimal alignment offset exactly 960px, mean luminance difference 0.57/255, 0.39% of pixels differing above 40). Also replaces cycle-6's tautological chip 'mouse-drag - the mouse-drag equivalent - Move node' with 'Drag - Move node'." },
    { "artifact": "09", "verdict": "improved", "why": "Adds a recency readout ('Captured 2025-06-12 · newer than 70% of this map · mid chroma') backed by a recencyMatchesModel claim; the connect and edit evidence is otherwise as strong as cycle-6." },
    { "artifact": "10", "verdict": "improved", "why": "Cycle-6 flew to a single hit (query 'grape leaf', hits 1). Cycle-7 flies to one of 19 hits with 13 in frame, all wearing the search-hit crosshair, and the flown hit is centred to the pixel (tick midpoints x=960, y=540). Label cap-height is unchanged at 23px; the left-edge clipping is a new but small cost against a materially better demonstration." },
    { "artifact": "16", "verdict": "unchanged", "why": "Same seven gestures fired, same 34s/30fps, same holding arc 4-5-4. Only the quick-added node id differs." },
    { "artifact": "17", "verdict": "unchanged", "why": "Same four poses, same 16-member Koji cluster, same drift 0.000000, same 41s. Sample count rose 1304 to 1346; the file is 13% smaller." },
    { "artifact": "19", "verdict": "unchanged", "why": "Same captured text, same final position to two decimal places, same holding 4, same 18s." }
  ],
  "verdict": "This build clears both my minimums on measurement rather than assertion. The core loop is one designed workflow, not a pile of features: artifact 19 runs quick-add to holding to drag to permanent in a single unbroken take with the holding chip, editor header, label field and coordinate readout all changing in step, and the canvas then holds still to within 29 luminance levels for 4.4 seconds; artifact 08 shows every unmoved node projecting to the identical pixel under a camera frozen to an exact 960px offset; artifact 09's filament is demonstrably new. Both landmarks are live: six touch gestures on Android drive a measured holding count of 4 to 5 to 4, and four hand poses with an honest 'unrecognised' state, full per-frame telemetry and four mouse equivalents drive real operations whose magnitude I could confirm from the pixels (+14.2% cloud width against a 1.146 dolly ratio). The synthesised webcam feed and the absent camera pass-through are declared on the frames themselves, and the avoid-list is respected throughout - no fog, no grid floor, no lens flare, no particle burst on connect, no ambient drift anywhere I sampled. What keeps this short of its 90 is that the two lenses' showcase stills do not match the quality of the motion evidence: the AR hero's one AR-specific affordance, the reticle, never points at the node it names in any of the four frames I measured, and the mind-expansion showcase hides 30 of its labels while rendering the rest at half the canvas type size in half the frame width. Fix the reticle association and give artifact 04 back its legibility and both categories move up together."
}
```
