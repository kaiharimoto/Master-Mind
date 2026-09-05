# The Audience — cycle 9

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*
*Recovered from the subagent's own transcript rather than retyped.*

---

I have examined every artifact in my two categories at full resolution, plus frame-level extraction from the three videos that carry them. Here is the verdict.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 01 Core workflow | 22 | 25 | 20 | Yes |
| 02 Landmarks live | 22 | 25 | 20 | Yes |
| **Total** | **44** | **50** | — | **Yes** |

---

## Blocking findings

None. Both landmark modes are operable and demonstrated live, and the capture→place→refind loop runs end to end in one unbroken take.

## Major findings

**A1 — artifact 09 (canvas/renderer): the before/after composite is no longer a controlled comparison.**
Counting drawn node labels in the left panel: cycle-8 drew 14 (Koji-kin sourcing, Koji-cured egg yolk, Sweet vs savoury paths, Bed depth 4cm max, Rice koji, Amazake, Stir at 24h to cool, Barley miso, Doubanjiang, Shio koji, Amylase plus protease, Koji on pearl barley, Inoculate at 30C, Hyphae bloom on day 2); cycle-9 draws 6. Worse, "Sweet vs savoury paths" sits at (158,412) truncated to "Sweet…" in the *before* panel and at (1206,297) in full in the *after* panel — a 115 px vertical jump plus an un-truncation, in a composite whose whole rhetorical job is "only the link and the editor changed". Cycle-8 held that label pixel-identical at y=442 in both panels. None of the dropped labels belong to invisible nodes: their markers are plainly drawn coral dots at (78,490), (231,592), (511,505), (589,667), (333,923).
*Fix:* solve label placement once against the *before* state and reuse those slots for the *after* panel, adding only the edited node's label; and raise the declutter budget at this framing so the surrounding district names return.

**A2 — artifact 03 (ar): in the hero, the pin chip destroys the label it duplicates, and the pin is not the same node in both panels.**
In the left panel a monospace chip "Kimchi: gochugaru" is drawn at roughly (579–699, 764–790) directly across the canvas label "Kimchi: gochugaru" spanning (547–733, 760–775), hiding the characters "chi: goc" — about 120 px of a 186 px label, 8 of 17 characters. The chip is not in the label-collision arbiter (which reports `noTwoDrawnLabelsOverlap: true`, so the arbiter checks only canvas labels — a claim that is true but does not check what its name implies). Separately, the pushpin affordance names "Kimchi: gochugaru" in panel 1 and "5% target acidity" in panel 2. In a composite headlined "every node position unchanged", an affordance that swaps target between panels reads as unexplained state churn.
*Fix:* feed pin chips into the same collision arbiter as labels (suppress the canvas label when a chip names the same node), and hold the same pinned node across both panels.

**A3 — artifacts 05 and 17 (ui): the app's own honesty chip is unreadable in both hand-tracking artifacts.**
In 05 the seed banner ("first launch · restored from the committed seed map-fermentation.json c07e1945f72c") ends at x≈1500 and overpaints the leading ~100 px of the "N labels hidden · 37 shortened…" chip, leaving the text starting mid-word at "els hidden" — the *number*, the only load-bearing part, is gone. This happens in both panels. In 17 at 6.5 s the same chip is clipped by the right-hand editor panel at x=1636, ending at "85 labels hidden · 37 shorte". These chips are the mechanism by which the build stays honest about how much text it is withholding; they should not be the first thing sacrificed.
*Fix:* in half-width composite panels, stack the seed banner under the hidden-labels chip rather than beside it, and right-inset the chip by the width of any open side panel.

## Minor findings

**A4 — artifact 05 (hands): headline and HUD disagree on the same panel.** The after panel's webcam HUD reads `view 135.5`; the headline over it, and the recorded `distAfter`, read 133.5 — a 2.0-unit (1.5%) mismatch. Cycle-8 matched exactly (129.5 in both). The direction of travel (148.4 → ~134, closer) is unaffected, but a demo that lives on measured claims should not put two different numbers for the same quantity in one frame. *Fix:* read the headline value from the same rendered frame the HUD prints.

**A5 — artifacts 04, 05, 17 (ui): the unlabelled roster announces more than it lists.** In 04 the heading reads "87 thoughts on screen without room for a label"; I counted the bullet glyphs in the roster column (x 1634–1644, saturated pixels grouped by row) and found 49–50 entries, the last at y=1014 with the panel simply running out at y=1080 — no ellipsis, no "+37 more". Same pattern in 05 (103 announced) and 17 (91 announced). *Fix:* either scroll/paginate the roster or end it with an explicit "…and 37 more".

**A6 — artifact 08 (canvas): one held node has no name.** The before panel shows 4 dashed holding markers at (503,663), (440,692), (511,714), (444,722) but only 3 labels. Cycle-8 labelled all four. In a two-panel story about one node leaving holding, the remaining occupants should stay identifiable. *Fix:* labels inside the holding ring should be exempt from the zoom declutter, as they already are in artifact 06.

**A7 — artifact 06 (canvas): the holding cluster is shown in a void, not "in the shared 3D space".** Sampling every second pixel between y=120 and y=1020 for saturated (chroma > 45, max > 70) colour, cycle-9's frame returns 8 such pixels against cycle-8's 51: not a single placed district node is visible. The count, ring and eight held markers are exemplary; the co-location with the map is simply not in this frame (it is in 04 and 19). *Fix:* pull the camera back far enough that one or two district edges remain in frame behind the ring.

**A8 — artifact 17 (hands): a three-second caption blackout.** Between 31 s and 33 s there is no caption at all, between the alt-drag beat and the scroll beat. On a 41 s vocabulary reel that is 7% of the runtime with nothing being asserted. *Fix:* carry a "Mouse equivalents" section header through the gap.

**A9 — artifact 17 (evidence): a claim the take cannot show.** `clusterMovePropagatedToTheOtherSurface: true` is asserted with peer ledger digests (5144cc62a503 → 7720fe60c994), but no second surface appears anywhere in the 41 s take. The claim is true of the model, not of the frames; it belongs with artifacts 11/12. *Fix:* either inset the peer surface for the grab beat, or drop the claim from this artifact.

---

## Compared with the previous cycle

- **03 hero — improved.** Same gyro proof (heading delta 62°, camera yaw delta 1.083 rad = 62.05° — the two agree to 0.05°; anchor travel 271 px), but the label wall is gone: cycle-8 drew every label with visible collisions ("Crème fraiche shortcut" over "Bacon: microbial succession", "Koji-cured egg yolk" over "Lactose to lactic acid"); cycle-9 hides 37/57 and adds the anchor-named-in-both-panels chip. The pin/label collision (A2) is unchanged from cycle-8.
- **04 mind expansion — improved.** Cycle-8 drew all 150 labels with real overlaps; cycle-9 draws 63 with 0 overlapping pairs (tightest gap 1.84 px), audits marker contrast on all 63 (worst 3.10 against a 1.45 floor), and adds the unlabelled roster. Net legibility gain.
- **05 hand tracking — improved, with one regression.** Same 21-landmark skeleton and the same on-frame synthetic-source declaration, but far less clutter and a caption that now matches the app's own vocabulary ("Open palm — Move closer", verified against 17's HUD). Regression: the 135.5/133.5 mismatch (A4), where cycle-8 was self-consistent.
- **06 holding cluster — improved.** Cycle-8 cut the ring off at the top of the frame and let a dozen background labels bleed into it; cycle-9 fits the ring (occupying 0.8 of frame height), labels only the 8 held nodes, and 6 of 8 labels are nearest their own marker with leaders for the other 2. Trade-off noted in A7.
- **08 placement end-state — essentially unchanged.** Both prove holding 4→3 and a frozen camera; I verified the surviving held markers are at identical panel-relative coordinates (offset exactly 960 px) in both, so the ring is not re-tidied. Cycle-9 adds "Keep in view"; it loses one held label (A6).
- **09 connect and edit — regressed.** See A1: 14 → 6 labels drawn, and a 115 px cross-panel label move where cycle-8 was stable. The connect and edit claims themselves are equally proven in both.
- **10 search fly-to — improved.** Node centred at (959,540) against a frame centre of (960,540) — dx=dy=0 as claimed. New: the hit breakdown chip "19 hits · 6 in the text · 13 in the label 'Koji'". Hit nodes measure (255,150,122) against plain nodes at (88,66,134), so hits are far brighter than plain — no uniform luminance. Cycle-8's left third was a wall of labels for dim distant nodes; that is gone.
- **16 touch vocabulary — unchanged.** Same 7 gestures, same claims, same gyro-chip emphasis behaviour (verified in cycle-8 at 24 s and 30 s).
- **17 hand vocabulary — unchanged.** Same 4 poses and the same mouse-equivalent tail. The added propagation claim is not visible in the take (A9).
- **19 capture–place arc — improved.** Same loop, but the refind end-frame now carries "1 hit · 1 in the text" and far fewer competing labels than cycle-8's crowded closing frame.

---

## What is strongest

The core loop is proven, not asserted: in artifact 19 the holding badge goes 8 → 9 → 8 with a toast that names the count, the editor header flips from "NODE · UNPLACED, IN HOLDING" to "NODE" with the label field cleared, and the coordinate readout settles at 21.9, −14.6, 13.7 and is still exactly that after a connect and a search fly-to. Artifact 16 repeats the same arc under touch (holding 4 → 5 at the long-press, back to 4 after the drag), so the loop is one designed workflow across both surfaces rather than two implementations. And the hand lens survives the hardest test an audience applies: across a 41 s take the per-frame HUD reports genuinely varying metrics (tips out 4/fan 1.03/conf 0.96, then 2/1.51/0.97) and honestly drops to "no hand — show a hand to the camera" and "unrecognised — hold a pose" between poses, while the map itself is provably inert when nobody acts — over 1.2 s of idle in artifact 19, zero pixels in a 1600×900 region differ by more than 20 grey levels, and in artifact 17 exactly one.

```json
{
  "critic": "audience",
  "cycle": 9,
  "categories": [
    { "id": "01", "name": "Core workflow", "weight": 25, "minimum": 20, "score": 22,
      "reasoning": "The capture-place-refind loop is coherent and measurably honoured. Artifact 19 runs it unbroken: quick-add lands the node unplaced (badge 8->9, toast 'Captured into holding — 9 waiting', editor header 'NODE · UNPLACED, IN HOLDING'), the drag drops it at 21.9,-14.6,13.7 with the badge back to 8 and the label field cleared, and the closing search centres that node at the exact frame centre with its coordinates unchanged; 1.2s of idle shows zero pixels differing by >20 levels, so nothing drifts. Artifact 08 freezes the camera across panels and the surviving held markers sit at identical panel-relative coordinates, proving the ring is not re-tidied. Artifact 10 lands dx=dy=0 with a hit breakdown naming why each of 19 hits matched, and hit nodes at RGB(255,150,122) against plain nodes at (88,66,134). Deductions: artifact 09 dropped from 14 drawn labels per panel to 6 and lets a label jump 115px between the two panels of a frozen-camera composite; artifact 08 labels only 3 of 4 held markers; artifact 06 shows the cluster in a void (8 saturated district pixels vs 51 last cycle)." },
    { "id": "02", "name": "Landmarks live", "weight": 25, "minimum": 20, "score": 22,
      "reasoning": "Both landmarks are live and exceed their minimums. AR: artifact 03's heading delta of 62 degrees matches the camera yaw delta of 1.083 rad (62.05 degrees) to within 0.05, the anchor travels 271px while positions hold, and 'no camera pass-through' is declared on the frame itself. Artifact 16 shows 7 distinct touch gestures against a minimum of 5, each a different operation with a visible effect: long-press takes holding 4->5, drag returns it to 4, pinch visibly magnifies the scene, drag-empty re-aims, and the gyro chip sweeps 3->26->48->65 degrees while tilt falls 90->69. Hands: artifact 17 shows all 4 poses with per-frame landmarker metrics that genuinely vary and honestly drop to 'no hand' and 'unrecognised' between poses, each pose mapped to a distinct operation, the Koji cluster translating rigidly (~(-94,+54)px, zero member drift) while every other district stays pixel-identical, and all four operations repeated with named mouse equivalents (alt-drag, scroll up, scroll down, left click) while the Hands badge honestly flips to 'off'. Deductions are cosmetic but land on the two most-looked-at stills: the hero's pin chip obscures 8 of 17 characters of the label it duplicates and pins a different node in each panel; the labels-hidden chip is occluded in 05 and clipped in 17; 05's HUD reads 135.5 where its own headline and claim read 133.5." }
  ],
  "findings": [
    { "artifact": "09", "severity": "major", "subsystem": "renderer",
      "observed": "Drawn node labels per panel fell from 14 (cycle 8) to 6, and 'Sweet vs savoury paths' moves from (158,412) truncated in the before panel to (1206,297) in full in the after panel — a 115px jump plus an un-truncation — inside a composite whose claim is that only the link and the editor changed. The dropped labels belong to plainly visible coral markers at (78,490), (231,592), (511,505), (589,667), (333,923).",
      "rootCause": "The label solver is re-run independently on each panel, so the longer edited text ('Koji-cured egg yolk · aged 60d', two lines) re-shuffles the whole slot assignment and evicts neighbours.",
      "correction": "Solve label placement once against the before state, reuse those slots verbatim for the after panel and add only the edited node's label; raise the declutter budget for this framing so the district names return." },
    { "artifact": "03", "severity": "major", "subsystem": "ar",
      "observed": "A monospace pin chip 'Kimchi: gochugaru' at approximately (579-699, 764-790) overpaints the canvas label of the same name spanning (547-733, 760-775), hiding about 120px of a 186px label (8 of 17 characters). Separately the pushpin names 'Kimchi: gochugaru' in panel 1 and '5% target acidity' in panel 2, so the affordance changes target across an orientation-only change.",
      "rootCause": "Pin chips are drawn on a separate layer from the canvas labels and are not fed into the collision arbiter, so 'noTwoDrawnLabelsOverlap: true' is true of the label layer only. The pin appears to be chosen per-panel (nearest the view axis) rather than held.",
      "correction": "Feed pin chips into the same arbiter as labels and suppress a node's canvas label when a chip already names it; pin the same node in both panels of the hero." },
    { "artifact": "05", "severity": "major", "subsystem": "ui",
      "observed": "The seed banner ends at x≈1500 and overpaints the leading ~100px of the 'N labels hidden · 37 shortened…' chip, so it reads 'els hidden · 37 shortened…' with the count destroyed — in both panels. The same chip in artifact 17 is clipped by the editor panel at x=1636, ending mid-word at '37 shorte'.",
      "rootCause": "Both overlays are anchored to the top edge of a full-width canvas; in half-width composite panels and with a side panel open their reserved widths overlap.",
      "correction": "Stack the seed banner beneath the hidden-labels chip in half-width panels, and right-inset the chip by the width of any open side panel." },
    { "artifact": "05", "severity": "minor", "subsystem": "hands",
      "observed": "The after panel's webcam HUD prints 'view 135.5' while the headline over that same panel, and the recorded distAfter, both read 133.5 — a 2.0 unit (1.5%) mismatch. Cycle 8 was self-consistent at 129.5.",
      "rootCause": "The headline is computed from the settled camera distance while the HUD is captured from an earlier animation frame.",
      "correction": "Print the headline value from the same rendered frame the HUD is sampled from." },
    { "artifact": "04", "severity": "minor", "subsystem": "expansion",
      "observed": "The roster heading reads '87 thoughts on screen without room for a label' but only 49-50 bullet glyphs are rendered (counted by scanning the bullet column x=1634-1644 for saturated pixels and grouping adjacent rows), the last at y=1014 with the panel ending at y=1080. No ellipsis or overflow marker. Same pattern in 05 (103 announced) and 17 (91 announced).",
      "rootCause": "The list is clipped by the viewport with no overflow affordance.",
      "correction": "Scroll or paginate the roster, or terminate it with an explicit '…and 37 more'." },
    { "artifact": "08", "severity": "minor", "subsystem": "canvas",
      "observed": "The before panel draws 4 dashed holding markers at (503,663), (440,692), (511,714), (444,722) but only 3 labels; cycle 8 labelled all four.",
      "rootCause": "Zoom-based declutter is applied to nodes inside the holding ring, which artifact 06 exempts.",
      "correction": "Exempt held nodes from the zoom declutter in every lens, as 06 already does." },
    { "artifact": "06", "severity": "minor", "subsystem": "canvas",
      "observed": "Sampling every second pixel from y=120 to y=1020 for saturated colour (max>70, chroma>45) returns 8 pixels, against 51 in cycle 8: no placed district node is visible anywhere in the frame, so the holding cluster is not shown co-located with the map it belongs to.",
      "rootCause": "The camera was pulled in to cameraDistance 17.8 to make the ring fill 0.8 of frame height, which excludes the rest of the map.",
      "correction": "Back off far enough to keep one or two district edges in frame behind the ring while retaining the ring fill." },
    { "artifact": "17", "severity": "minor", "subsystem": "hands",
      "observed": "No caption is present between 31s and 33s — three seconds of a 41s vocabulary reel with nothing asserted, between the alt-drag beat and the scroll beat.",
      "rootCause": "The mouse-tail beats are spaced with no bridging caption.",
      "correction": "Carry a persistent 'Mouse equivalents' section header across the gap." },
    { "artifact": "17", "severity": "minor", "subsystem": "evidence",
      "observed": "clusterMovePropagatedToTheOtherSurface is claimed true with peer ledger digests, but no second surface appears anywhere in the 41s take; the frames cannot corroborate it.",
      "rootCause": "A model-level assertion attached to an artifact whose framing shows one surface only.",
      "correction": "Inset the peer surface during the grab beat, or move the claim to artifacts 11/12 where the twin framing exists." }
  ],
  "comparisons": [
    { "artifact": "03", "verdict": "improved", "why": "Same gyro proof (heading delta 62 degrees equals camera yaw delta 62.05 degrees; anchor travel 271px), but cycle 8's full label set had visible collisions ('Crème fraiche shortcut' over 'Bacon: microbial succession', 'Koji-cured egg yolk' over 'Lactose to lactic acid'); cycle 9 hides 37/57 and adds the anchor-named-in-both-panels chip. The pin/label collision persists unchanged from cycle 8." },
    { "artifact": "04", "verdict": "improved", "why": "Cycle 8 drew all 150 labels with real overlaps; cycle 9 draws 63 with 0 overlapping pairs (tightest gap 1.84px), audits marker contrast on all 63 (worst 3.10 against a 1.45 floor) and adds the unlabelled roster." },
    { "artifact": "05", "verdict": "improved", "why": "Same 21-landmark skeleton and the same on-frame synthetic-source declaration, with far less clutter and a caption verified to match the app's own vocabulary in 17. Offset by the new 135.5 vs 133.5 mismatch, where cycle 8 agreed at 129.5." },
    { "artifact": "06", "verdict": "improved", "why": "Cycle 8 cut the ring at the top edge and let background labels bleed in; cycle 9 fits the whole ring at 0.8 frame height, labels only the 8 held nodes with leaders on the 2 ambiguous ones, and the badge matches the marker count. Cost: no district node remains visible (8 saturated pixels vs 51)." },
    { "artifact": "08", "verdict": "unchanged", "why": "Both prove holding 4->3 under a frozen camera, and the surviving held markers sit at identical panel-relative coordinates (offset exactly 960px) in both cycles, so no re-tidy. Cycle 9 adds 'Keep in view' and loses one held label." },
    { "artifact": "09", "verdict": "regressed", "why": "Drawn labels per panel fell 14 -> 6 and 'Sweet vs savoury paths' now moves 115px and un-truncates between panels, where cycle 8 held it pixel-identical at y=442. The connect and edit claims are equally proven in both." },
    { "artifact": "10", "verdict": "improved", "why": "Still centred at dx=dy=0 against the frame centre, but now carries the hit breakdown '19 hits · 6 in the text · 13 in the label Koji' and drops cycle 8's wall of labels over dim distant nodes on the left third." },
    { "artifact": "16", "verdict": "unchanged", "why": "Identical 7-gesture list and claims; the gyro chip's dim-to-bright emphasis at 28s was already present in cycle 8 (verified at 24s and 30s)." },
    { "artifact": "17", "verdict": "unchanged", "why": "Same 4 poses in the same order with the same 4-item mouse-equivalent tail; the only delta is a propagation claim the take does not show." },
    { "artifact": "19", "verdict": "improved", "why": "Same loop and the same surviving coordinates, but the refind end-frame now carries '1 hit · 1 in the text' and far fewer competing labels than cycle 8's crowded closing frame." }
  ],
  "verdict": "This reads as a working tool, not a staged one. The core loop is demonstrated rather than asserted — quick-add lands unplaced with the badge and toast agreeing, the drag drops the node at coordinates that survive a connect and a search fly-to unchanged, the search lands dead on frame centre, and the map is provably inert when nobody touches it. Both landmarks clear their bars with margin: 7 touch gestures against a minimum of 5, each with a visible effect, on a vantage whose heading and camera yaw agree to a twentieth of a degree; and 4 webcam poses whose per-frame metrics vary and honestly report 'no hand' between beats, each mapped to a distinct operation and each repeated under a named mouse equivalent, with the substitution declared on the frame itself. What holds it back from a top score is not the mechanics but the overlay layer around them: the hero lets a pin chip eat the label it duplicates and pins a different node in each panel, the labels-hidden chip — the build's own honesty affordance — is occluded in 05 and clipped in 17, the unlabelled roster promises 87 and lists 50, and artifact 09 has regressed into a before/after comparison where the labels themselves move. Those are all fixable in the chrome without touching the engine."
}
```