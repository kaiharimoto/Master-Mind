# The Audience — cycle 11

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

**43 of 50, up from 41.** It confirms by measurement that the closed-fist defect
is genuinely fixed — and lands the finding that matters most in this run:

> *"The ledger would still pass green if the fist regressed to cycle-10
> behaviour — the exact failure mode this cycle was meant to close."*

The behaviour was fixed and the instrument was not.

*Recovered from the subagent's own transcript rather than retyped.*

---

I examined the artifacts directly (pixels, not prose): contact sheets, full-resolution extracted frames, colour-segmented cluster centroids, and normalized cross-correlation template tracking. Here is the verdict.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 01 — Core workflow | 22 | 25 | 20 | Yes |
| 02 — Landmarks live | 21 | 25 | 20 | Yes |
| **Total (my two categories)** | **43** | **50** | — | **Yes** |

---

## The fist, specifically — measured

**The cycle-10 defect is genuinely fixed, and the frames now show what has hold of what.**

What I measured on `17_hand_vocabulary.mp4`:

1. **A grab overlay now exists.** During each Closed-fist beat the app draws an amber dashed rectangle around a cluster with a pill reading `holding 20 thoughts · Lacto-vegetables`, while the top bar reads `Hands: on · tracking · Closed fist` and the webcam HUD reads `Closed fist … conf 0.94` over 21 drawn landmarks. Thresholding that amber (r>190, 130<g<200, b<110) over the canvas region only, it exceeds 4,000 px at t≈1.5–2.5, 7.5–8.5, 14.0–14.5, 21.0–21.5 — the four fist beats. **The same detector run over all 82 half-second samples of cycle 10's `17` never once exceeds 1,500 px.** The overlay is new.

2. **The grabbed cluster moves during the fist beats.** Normalized cross-correlation of a 230×200 px patch on the grabbed cluster, referenced at t=13.4 and matched forward, against two background patches:

| t | grabbed cluster | blue cluster (bg) | purple cluster (bg) |
|---|---|---|---|
| 13.6 | (+19, +22) | (+5, +1) | (−4, −2) |
| 14.0 | (+63, +62) | (+5, +1) | (−4, −2) |
| 14.4 | (+91, +90) | (+5, +1) | (−4, −2) |
| 14.8 | (+129, +77) | (+5, +1) | (−4, −2) |

~150 px of travel against a background stable to ≤5 px — a 30× ratio. Tracking the amber box's own bbox confirms the same for the other beats: beat 2 cx 805→928 / cy 606→678; beat 3 cx 906→986; beat 4 pill cx 902→1038; beat 1 cy 568→636. **All four beats move something.**

3. **Rigidity holds.** Across beat 3 the box measures w=253, 252, 249, 243 and h=182, 182, 182, 182 while translating ~80 px — consistent with `clusterMaxMemberDrift: 0`.

4. **But the manifest's ledger is still measuring the mouse.** See finding A1.

---

## Blocking findings

None.

## Major findings

**A1 — artifact 17 (hands / evidence).** The manifest's cluster-move ledger records the *Alt-drag mouse* move, not any fist beat. I segmented the orange Koji cluster by hue (0–28°, sat>0.35, max>100) across 82 half-second frames: its on-screen centroid sits at x = 1176 ± 12 px for the whole hand section (t=0 → 27.5), then moves 1163 → 1142 → 1118 → 1098 px between t=28.0 and t=29.5 — exactly under the caption `Alt-drag — the Closed fist equivalent — Grab cluster` — and is static thereafter. The frame at t=29 confirms it: "Rice koji / Koji-kin sourcing / Shio koji / Barley miso" have descended, leaving "Umami stacking / Anchovy vs mackerel" behind. So `clusterGrabbed: "Koji"`, `clusterMembers: 16`, `clusterCentroidTravelled: 17.2866` all describe the mouse path. The fist beats grab a *different* cluster (Lacto-vegetables, 20 thoughts), which only the pixels attest. **The ledger would still pass green if the fist regressed to cycle-10 behaviour** — the exact failure mode this cycle was meant to close. *Fix:* emit a per-pose record — cluster id, member count, centroid before/after, and the frame timestamps of the pose window — and assert `clusterMovedByPose` separately from `clusterMovedByMouse`.

**A2 — artifact 05 (expansion / ui).** "Move closer" makes *fewer* labels readable. Before panel: `113 labels hidden · 18 shortened`. After the open-palm move-closer: `118 labels hidden · 15 shortened` — five fewer labels drawn, on a frame whose own chip says "move closer to read them". The zoom itself is real but modest: inter-cluster centroid distances grow orange–purple 335.4→369.7 px, orange–pink 231.0→254.8 px, purple–pink 139.5→154.2 px (ratios 1.102 / 1.103 / 1.105) against a declared view-distance ratio of 148.4/129.5 = 1.146. *Fix:* re-run label admission after the camera settles so a nearer vantage never yields fewer labels; a 10% dolly should visibly buy legibility, or the pose isn't worth the gesture.

**A3 — artifact 17 (hands).** The caption outruns the detector. At t=15.0 the on-canvas caption reads `Closed fist — Grab the nearest cluster and move it` while the HUD in the *same frame* reads `no hand · show a hand to the camera · tips out 0 fan 0.00 extended 0 conf 0.00`. Same disagreement at t=9 (`unrecognised · hold a pose` under a "Two fingers" caption) and t=23. That is 3 of 41 one-second samples — 7% of the take — where the caption asserts a pose nothing is detecting. *Fix:* fade the caption to a "held / last pose" treatment whenever live confidence is 0, so the caption can never be the only thing making the claim.

## Minor findings

**A4 — artifact 17.** `clusterMovePropagatedToTheOtherSurface: true` is asserted on an artifact whose 41 seconds contain no second surface. The recipe lists an android runtime; no android panel appears in any frame. Nothing in this take can corroborate it. *Fix:* move that assertion to a twin-composite artifact, or split-screen the peer for the grab.

**A5 — artifact 17.** No on-canvas targeting cue. "Grab the *nearest* cluster" gives the viewer no pre-grab indication of what will be seized — the target is revealed only once the amber box lands. *Fix:* a faint candidate outline on the nearest cluster whenever the hand is tracked.

**A6 — artifact 17.** The four grabs accumulate. Comparing the same crop at t=0.5 / 13.4 / 16.0 / 19.0 / 24.5 / 27.0, the lacto-vegetables cluster migrates steadily right while the blue Acetobacter cluster holds within ≤10 px; by t=24.5 the two districts overlap and their labels collide ("Dechlorinate…", "Sanitise, do…" now sit inside the blue district). Explicit user acts, so not drift — but the demo ends with a messier map than it started. *Fix:* end the take with the grabbed cluster returned, or grab a peripheral cluster.

**A7 — artifact 16.** The Android touch vocabulary is captured at 1920×1080 landscape with a desktop-width side editor, while the AR hero (03) uses a 1280×1440 portrait device frame. Same lens, two device shapes. *Fix:* letterbox 16 into the same portrait device frame 03 uses.

**A8 — artifact 09.** The label layer re-flows on an edit. `Sweet vs savoury paths` is in the hidden list in Before (`3 labels hidden`) and drawn on canvas in After (`2 labels hidden`), purely because the edited node's own label grew to two lines. Node positions are untouched (21.6, 12.6, −7.6 in both panels, verified in the editor readout), so "positions are sacred" holds — but the *label* layer does not, and labels are what a reader navigates by. *Fix:* pin already-drawn labels through an edit.

**A9 — artifact 03.** Unchanged from cycle 10 to within 0.03% of pixels. Also, the declared anchor travel of 271 px does not quite reproduce: I locate the amber anchor ring at panel-local (280, 529) and (402, 306), a displacement of 254 px — a 6% gap, small but the number is stated to the pixel on the frame.

---

## Compared with the previous cycle

| Artifact | Verdict | Why (measured) |
|---|---|---|
| **17** hand vocabulary | **improved, decisively** | The only substantively changed artifact: 2.8–6.5% of pixels differ at nine sampled timestamps, the largest change in the set. The amber grab overlay is new (0 frames above threshold in cycle 10, 4 beats above it in cycle 11), and the grabbed cluster now translates 70–150 px against ≤5 px of background motion during the fist beats themselves. |
| **04** mind expansion | **improved** | In cycle 10 the search-reason chip was occluded by the "105 labels hidden…" chip — only `19 hit…` was readable. In cycle 11 the two chips are stacked and `19 hits · 6 in the text · 13 in the label "Koji"` reads in full. Canvas otherwise identical (1.04% pixel diff, confined to x[1162,1632] y[49,119] and the right panel). |
| **10** search fly-to end | **improved** | Same chip fix, same localisation (0.75% diff, regions x[1184,1632] y[49,119] plus the label panel). Flown node still lands at (960, 540) — dead centre. |
| **03** AR cold start | **unchanged** | 0.03% of pixels differ. Heading 34°→96°, Δ62, anchor named in both panels — all as before. |
| **05** hand tracking | **unchanged** | 2.67% differ, but every diff region is the right-hand label list (x[659,836] and x[1619,1796], y≈173–726) or a different webcam frame. Same 148.4 → 129.5 before/after. |
| **06** holding cluster | **unchanged** | 0.37% differ, entirely in the right panel (x[1630,1826] y[145,316]). Still 8 dashed markers matching `holding 8`. |
| **08** placement end-state | **unchanged** | 0.85% differ, in the panels. Same 4→3 decrement, same camera freeze (map anchor offset exactly 959 px = the panel pitch). |
| **09** connect and edit | **unchanged** | 0.35% differ. Filament still absent-then-present, position 21.6/12.6/−7.6 in both. |
| **16** touch vocabulary | **unchanged** | Frame diffs ≤0.19% at seven sampled timestamps. |
| **18** search fly-to | **unchanged** | 0.68–1.84% differ, tracking the chip fix only. |
| **19** capture-place arc | **unchanged** | 0.72–1.88% differ, same. |

The honest summary of the cycle: one artifact was really rebuilt, two got a legibility fix, and eight were re-captured essentially as-is.

## What is strongest

The fist fix is thorough rather than cosmetic — the app now names what it has hold of (`holding 20 thoughts · Lacto-vegetables`) on the canvas, at the same instant the top bar and the landmark HUD both name the pose, and the named cluster actually travels while every other district holds still to within five pixels. Second, the capture-place loop is corroborated by the app's own counter rather than by captions: `19` runs holding 8 → 9 at the quick-add and 9 → 8 at the drop, `16` runs 4 → 5 → 4 on long-press then drag, and `19` closes by typing "Rehearse", getting `1 hit · 1 in the text`, and landing the node dead-centre at (960, 540) with a filament to the node it was just connected to. Third, legibility is genuinely good where it matters: node labels measure 16.3:1 contrast against the canvas, the pose caption 9.6:1, the grab pill 9.0:1.

---

```json
{
  "critic": "audience",
  "cycle": 11,
  "categories": [
    { "id": "01", "name": "Core workflow", "weight": 25, "minimum": 20, "score": 22,
      "reasoning": "The capture-place-refind loop is coherent and, unusually, self-corroborating: 19 shows the holding chip going 8 to 9 on the one-action quick-add and 9 to 8 when the node is dragged out, then ends with the query 'Rehearse' returning '1 hit in the text' and the node centred at (960,540) with its filament and full-chroma recency; 16 repeats the same arc on the touch lens (holding 4 to 5 on long-press, 5 to 4 on drag). 06 shows exactly 8 dashed holding markers matching the 'holding 8' chip. 08 freezes the camera across panels (map anchor offset exactly 959 px, the panel pitch) while holding drops 4 to 3 and the editor header changes from 'NODE - UNPLACED, IN HOLDING' to 'NODE'. 09 creates a filament that is provably absent before and present after, edits text and colour through the panel, and leaves position 21.6/12.6/-7.6 untouched. 10 and 18 fly to the node in its real place and end crisp (16.3:1 label contrast). Deductions: 05 shows the app's own 'move closer to read them' promise inverted (113 hidden becoming 118 hidden after a measured 1.10x dolly); 09's label layer re-flows on an edit ('Sweet vs savoury paths' hidden before, drawn after); 08's dropped-node pill overlaps a neighbouring label; and apart from an occlusion fix on the search-reason chip, every core-workflow artifact is within ~1% of its cycle-10 pixels.",
      "score_note": "22/25" },
    { "id": "02", "name": "Landmarks live", "weight": 25, "minimum": 20, "score": 21,
      "reasoning": "Both landmarks are operable and, this cycle, provable. 16 carries seven distinct touch operations against a minimum of five - Tap/select, Double-tap/connect, Long-press/quick-add (holding 4 to 5), Drag node/place (5 to 4), Drag empty space/re-aim (25 px measured content pan), Pinch-spread/zoom (measured scale change plus '1 label hidden at this zoom' appearing), and Gyroscope/look-around (heading 3 to 59 degrees, tilt 89 to 71) - and 03 shows the gyro moving the vantage 34 to 96 degrees with the anchor named in both panels and positions unchanged. 17 carries exactly four hand poses, each on a different operation, each with a mouse equivalent shown (Alt-drag, Scroll up, Scroll down, Left click) plus on-canvas Grab/Closer/Back/Select; the view-distance readout tracks the poses (135.2 down to 126.7 on palms, back to 139.1 on gathers). The cycle-10 fist defect is genuinely fixed: an amber dashed box naming 'holding 20 thoughts - Lacto-vegetables' appears in all four fist beats (never once in cycle 10), and template tracking shows the boxed cluster translating 70-150 px while background clusters hold within 5 px. Substitutions (synthesised webcam capture with real HandLandmarker; android device profile with no camera pass-through) are declared on the frames themselves. Deductions: the manifest's cluster-move ledger still measures the Alt-drag mouse path rather than any fist beat, so the automated evidence would pass even if the fist regressed; the caption asserts a pose while the detector reads conf 0.00 in 3 of 41 sampled seconds; the peer-propagation claim is asserted on a take containing no peer surface; there is no pre-grab targeting cue; and 03, the AR hero, is unchanged from cycle 10 to within 0.03% of pixels.",
      "score_note": "21/25" }
  ],
  "findings": [
    { "artifact": "17", "severity": "major", "subsystem": "hands",
      "observed": "The manifest's cluster-move ledger (clusterGrabbed 'Koji', clusterMembers 16, clusterCentroidTravelled 17.2866) describes the mouse Alt-drag, not the fist. Hue-segmented tracking of the Koji cluster across 82 half-second frames puts its centroid at x = 1176 +/- 12 px for the entire hand section (t=0 to 27.5), then 1163 -> 1142 -> 1118 -> 1098 px between t=28.0 and t=29.5, exactly under the 'Alt-drag - the Closed fist equivalent' caption, static thereafter. The fist beats grab a different cluster (Lacto-vegetables, 20 thoughts); only the pixels attest to that.",
      "rootCause": "The claim ledger measures one global before/after over the whole take rather than per pose window, so a fist that did nothing and a mouse drag that did everything are indistinguishable to it.",
      "correction": "Emit a per-pose record - cluster id, member count, centroid before and after, and the frame timestamps bounding the pose window - and assert clusterMovedByPose separately from clusterMovedByMouse, so the fist beat has to carry its own evidence." },
    { "artifact": "05", "severity": "major", "subsystem": "expansion",
      "observed": "Moving closer makes fewer labels readable. Before: '113 labels hidden - 18 shortened'. After the open-palm move-closer: '118 labels hidden - 15 shortened' - five fewer labels drawn, on a frame whose chip reads 'move closer to read them'. Measured content scale between panels is 1.102-1.105x (inter-cluster centroid distances 335.4->369.7, 231.0->254.8, 139.5->154.2 px) against a declared view-distance ratio of 148.4/129.5 = 1.146.",
      "rootCause": "Label admission is evaluated against a screen-space budget that a small dolly perturbs unfavourably, and is not re-run after the camera settles.",
      "correction": "Re-run label admission once the camera settles and clamp it so a nearer vantage never yields fewer drawn labels; consider a larger dolly per palm so the operation reads as more than a 10% nudge." },
    { "artifact": "17", "severity": "major", "subsystem": "hands",
      "observed": "The caption outruns the detector. At t=15.0 the canvas caption reads 'Closed fist - Grab the nearest cluster and move it' while the HUD in the same frame reads 'no hand - show a hand to the camera - tips out 0 fan 0.00 extended 0 conf 0.00'. Same disagreement at t=9 ('unrecognised - hold a pose') and t=23. Three of 41 one-second samples, 7% of the take.",
      "rootCause": "The caption latches the last committed pose with no decay, while the HUD reports the instantaneous detection.",
      "correction": "Dim the caption or mark it 'held' whenever live confidence is 0, so the caption can never be the only thing making the claim - which is precisely the failure mode this cycle set out to close." },
    { "artifact": "17", "severity": "minor", "subsystem": "sync",
      "observed": "'clusterMovePropagatedToTheOtherSurface: true' is asserted for an artifact whose 41 seconds contain no second surface. The recipe lists an android runtime; no android panel appears in any frame of the take.",
      "rootCause": "A headless peer check is being reported against a single-surface capture.",
      "correction": "Move the propagation assertion to a twin-composite artifact, or split-screen the peer during the grab so the frames can corroborate it." },
    { "artifact": "17", "severity": "minor", "subsystem": "hands",
      "observed": "No on-canvas targeting cue. 'Grab the nearest cluster' gives the viewer no indication of what will be seized until the amber box has already landed.",
      "rootCause": "The hand has no projected cursor or hover state on the canvas.",
      "correction": "Outline the nearest-cluster candidate faintly whenever a hand is tracked, so the grab is predicted rather than only reported." },
    { "artifact": "17", "severity": "minor", "subsystem": "expansion",
      "observed": "The four grabs accumulate. Comparing the same crop at t=0.5 / 13.4 / 16.0 / 19.0 / 24.5 / 27.0, the lacto-vegetables cluster migrates steadily right while the blue Acetobacter cluster holds within 10 px; by t=24.5 the districts overlap and labels collide ('Dechlorinate...', 'Sanitise, do...' sit inside the blue district).",
      "rootCause": "Each fist beat grabs whatever is now nearest and drags it in the same direction, with no return.",
      "correction": "Grab a peripheral cluster, or return it at the end of the take, so the demo does not close on a map messier than it opened." },
    { "artifact": "16", "severity": "minor", "subsystem": "ar",
      "observed": "The Android touch vocabulary is captured at 1920x1080 landscape with a desktop-width side editor, while the AR hero (03) uses a 1280x1440 portrait device frame. The same lens is shown in two different device shapes.",
      "rootCause": "The artifact spec fixes 1920x1080 and the capture fills it rather than letterboxing a device frame.",
      "correction": "Letterbox the take into the same 1280x1440 portrait device frame 03 already uses, centred on a 1920x1080 canvas." },
    { "artifact": "09", "severity": "minor", "subsystem": "canvas",
      "observed": "The label layer re-flows on an edit: 'Sweet vs savoury paths' is in the hidden list in the Before panel ('3 labels hidden') and drawn on canvas in the After panel ('2 labels hidden'), solely because the edited node's own label grew to two lines. Node positions are untouched (21.6, 12.6, -7.6 in both panels).",
      "rootCause": "Label admission re-solves globally after any text change.",
      "correction": "Pin labels that were already drawn through an edit, admitting new ones only into space the edit vacated - space is the memory at the label layer too." },
    { "artifact": "03", "severity": "minor", "subsystem": "ar",
      "observed": "Unchanged from cycle 10 to within 0.03% of pixels; the AR half of the landmark pair made no measurable progress this cycle. Separately, the stated anchor travel of 271 px does not quite reproduce: the amber anchor ring centres at panel-local (280, 529) and (402, 306), a displacement of 254 px, a 6% gap on a number printed to the pixel.",
      "rootCause": "The artifact was re-captured from an unchanged code path; the printed travel is likely computed in model space or from a different ring reference than the drawn one.",
      "correction": "Either advance the AR lens this cycle or state plainly that it is carried forward; and derive the printed travel from the same ring centre the frame draws." }
  ],
  "comparisons": [
    { "artifact": "17", "verdict": "improved", "why": "The only substantively rebuilt artifact: 2.8-6.5% of pixels differ at nine sampled timestamps, the largest change in the set. The amber grab overlay is new - 0 frames above a 1500 px amber threshold across all 82 half-second samples of cycle 10, versus four distinct beats above 4000 px in cycle 11 - and template tracking shows the grabbed cluster translating 70-150 px against backgrounds stable to 5 px during the fist beats themselves." },
    { "artifact": "04", "verdict": "improved", "why": "In cycle 10 the search-reason chip was occluded by the '105 labels hidden' chip and only '19 hit...' was readable; in cycle 11 the two are stacked and '19 hits - 6 in the text - 13 in the label \"Koji\"' reads in full. Canvas otherwise identical (1.04% pixel diff, confined to x[1162,1632] y[49,119] and the right panel)." },
    { "artifact": "10", "verdict": "improved", "why": "Same occlusion fix, same localisation (0.75% diff at x[1184,1632] y[49,119] plus the label panel). The flown node still lands at (960, 540), dead centre." },
    { "artifact": "03", "verdict": "unchanged", "why": "0.03% of pixels differ. Heading 34 to 96 degrees, delta 62, anchor named in both panels, positions unchanged - all identical to cycle 10." },
    { "artifact": "05", "verdict": "unchanged", "why": "2.67% differ, but every diff region is the right-hand label list (x[659,836] and x[1619,1796], y 173-726) or a different webcam frame. The same 148.4 to 129.5 before/after, the same declared substitution." },
    { "artifact": "06", "verdict": "unchanged", "why": "0.37% differ, entirely in the right panel at x[1630,1826] y[145,316]. Still exactly 8 dashed holding markers matching the 'holding 8' chip." },
    { "artifact": "08", "verdict": "unchanged", "why": "0.85% differ, in the panels only. Same 4 to 3 decrement, same camera freeze - the map anchor sits at exactly the 959 px panel pitch in both halves." },
    { "artifact": "09", "verdict": "unchanged", "why": "0.35% differ. Filament still absent-then-present, position 21.6/12.6/-7.6 in both panels." },
    { "artifact": "16", "verdict": "unchanged", "why": "Frame differences of 0.00-0.19% at seven sampled timestamps across the take." },
    { "artifact": "18", "verdict": "unchanged", "why": "0.68-1.84% differ, tracking the search-chip fix only; the fly-to, the second-hit step and the crisp ending are the same take." },
    { "artifact": "19", "verdict": "unchanged", "why": "0.72-1.88% differ, same chip fix; the holding 8-9-8 arc and the centred search landing are identical." }
  ],
  "verdict": "Cycle 11 fixed the thing that mattered and left almost everything else alone. The closed fist now demonstrably grabs and moves a cluster: an amber dashed box names 'holding 20 thoughts - Lacto-vegetables' while the top bar and landmark HUD both name the pose, and template tracking shows that cluster translating 70-150 px in each of four fist beats while every other district holds within 5 px - against a cycle-10 take where the grab overlay never appears at all. That is a real fix, not a caption. Both landmarks now clear their bars with margin: seven distinct touch operations in 16 against a five-gesture minimum, four hand poses each on a different operation with a mouse equivalent for every one in 17, and a gyro that moves the vantage 62 degrees in 03. The core loop is the strongest thing here and it is self-corroborating - the holding counter, not a caption, is what tells you the quick-add landed and the drop took. What holds the score back from full marks is that the evidence ledger has not caught up with the fix: the manifest's cluster-move numbers still measure the Alt-drag mouse path, so the same green tick would have appeared had the fist regressed; the caption still outruns the detector in 7% of sampled seconds; and outside artifact 17, this cycle is a re-capture - the AR hero is unchanged to within 0.03% of its pixels and eight of eleven artifacts I examined moved by under 2%. Score the build on what the frames show and it is a confident demo; score the harness on whether it would catch the same lie twice and it is not there yet."
}
```