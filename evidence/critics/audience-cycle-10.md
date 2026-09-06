# The Audience — cycle 10

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

**41 of 50, down from 44, with category 02 at its minimum.** Three of its four
major findings are regressions caused by cycle 9's own fixes. Recorded before
the response, including that.

*Recovered from the subagent's own transcript rather than retyped.*

---

I examined the frames, contact sheets, and video segments directly, cropping and measuring where a claim needed checking.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 01 Core workflow | 21 | 25 | 20 | Yes |
| 02 Landmarks live | 20 | 25 | 20 | Yes (at the line) |
| **Total (my two)** | **41** | **50** | — | — |

## Blocking findings

None. Both landmark lenses are operable on the frames, and the capture→place→refind loop runs end to end.

## Major findings

**A1 — artifact 17 (hands). The closed fist, one of the four required poses, never visibly does what it says; the only cluster move in the take is done by the mouse.**
The caption "Closed fist — Grab the nearest cluster and move it" appears in three separate beats (t≈8–9, 16–17, 22–24), with live detection behind it ("tips out 0 · fan 0.38–0.48 · conf 0.95–0.98"). Nothing on the map changes. I measured the coral ("Koji") district centroid's offset from the azure district centroid, normalised by the azure district's own RMS radius (scale-invariant, so camera zoom cancels): it reads (0.540, −0.782) at frames 780/800/820 and stays inside (0.51–0.56, −0.72 to −0.86) across every frame from n=0 to n=780 — i.e. through all three fist beats. It only moves at n=840 (t=28.0), reaching (0.206, −0.516) by n=900, while the coral district's own spread grows from 0.75 to 1.06 azure-radii. t=28.0 is exactly the frame where the caption reads **"Alt-drag — the Closed fist equivalent — Grab cluster"**. Side-by-side crops of n=780 vs n=900 confirm it: the Koji sub-cluster translates from (x 400–580, y 100–200) to (x 340–470, y 670–760) while violet, amber, azure, teal and lime sit unmoved. So `clusterMoved: true` / `clusterCentroidTravelled: 17.508` are true of the take but are produced by the mouse substitute, not by the pose the artifact is named for. There is also no grab affordance — nothing on screen marks which cluster the fist has hold of.
*Fix:* make the fist beat actually translate the cluster while the fist is held (drive it from the wrist landmark's motion in the clip), and draw a grab affordance — a hull or halo round the grabbed members — so the operation is visible even when the translation is small.

**A2 — artifacts 04, 10, 18, 19 (ui). The search-result readout is occluded by the zoom chip whenever the node editor is open. New in this cycle.**
On 04 the chip "19 hits · 6 in the text · 13 in the label “Koji”" spans x=1145–1418; the "105 labels hidden…" chip starts at x=1168, leaving 23 of 273 px visible — **8% of the readout**. On 10 the same pair leaves 46 of 286 px — **16%**. In 18 the collision starts the moment the editor opens: at t=1 and t=3 the chip reads cleanly ("45 hits · 35 in the text · 10 in the label “Koji”", then "19 hits · 6 in the text · 13 in the label “Koji”"); from t=5 to the end only "19 hit" survives. Cycle 9's artifact 10 and cycle 9's 18 showed the hits chip complete. The one number that tells a demo audience how many thoughts matched is unreadable in every end-state frame.
*Fix:* stack the two status chips vertically, or suppress the labels-hidden chip while a search is active — the hit breakdown is the more informative of the two.

**A3 — artifact 04 (expansion). "The entire 100+ node map on screen at once and legible" is less legible than last cycle.**
150 nodes are on screen, but 105 of their labels are hidden and 16 more shortened, leaving 45 drawn. Cycle 9's frame drew 63 and carried a right-hand sidebar naming 50 of the unlabelled ones — 113 of 150 nodes identifiable by name. Cycle 10 replaced that sidebar with the node editor, so named coverage falls to 45/150. The frame gains the five-states-at-whole-map-density demonstration, but on its own stated claim it went backwards.
*Fix:* keep the unlabelled-thought sidebar alongside the editor (it fits — the editor occupies only the top third of the right rail), or raise the label budget at this zoom.

**A4 — artifact 08 (canvas). In the "after" panel the dropped node has no name on the canvas.**
The headline is "the same node at its permanent dropped spot", but the placed node at (1481, 398) renders as a bare ringed dot; the chip reads "3 labels hidden" and "Steal the parking-lot bit" is one of them. Identity is only recoverable from the editor's Text field. Cycle 9's frame drew that label beside the node. The node also lands 10 px from an existing violet node, which reads as a collision rather than a deliberate spot.
*Fix:* pin the label of the node under edit so the layout solver may never drop it; that single rule fixes this artifact and reinforces every before/after composite.

## Minor findings

**A5 — artifact 17 (hands). "Two fingers — Select or confirm" is not distinguishable by its effect.** Sampling the editor's Text field once per second, the selected node changes at t=9 (fist), 11 (gather), 13–14 (two fingers), 15 (palm), 16 (fist), 18 (gather), 20 (two fingers) — the panel tracks a node under every pose, so the confirm beat cannot be told from the others on the frames. By contrast the palm/gather pair is cleanly proven: view distance falls 135.0→129.0 under palm and rises 126.8→134.6 under gather, read off the HUD.

**A6 — artifact 17 (hands). Stale caption after tracking stops.** At t=26 the caption still reads "Two fingers — Select or confirm the node the hand is over" while the toolbar reads "Hands: off" and the webcam panel has been replaced by the node editor. One sampled second, but it reads as a pose working without a camera.

**A7 — artifact 03 (ar). The holding cluster is clipped out of the left panel of the hero.** Only the dashed ring arc and two partial glyphs survive below y≈1400; ink coverage in the band y=904–1172 of the left panel is 1.04%, against 4.55% at the top. The right panel does show all 8 held markers, but the gyro readout chip sits on top of two of them, and only 3 of the 8 carry a label.

**A8 — artifact 05 (hands). The sidebar heading is a fragment.** The unlabelled-thoughts panel header renders as "for a label" — the first line ("113 thoughts on screen without room…") is clipped above the panel's top edge in both halves of the composite.

## Compared with the previous cycle

- **03 improved.** Cycle 9's left panel had its "Kimchi: gochugaru" label overprinted by its own pin chip and bottom labels running off the frame edge; cycle 10 has no overlapping or clipped labels, and the subtitle now states the 1280×1440 device frame the 271 px travel is measured in. Cost: 51 vs 37 labels hidden.
- **04 regressed.** Drawn labels 63→45; sidebar naming 50 unlabelled nodes removed (0 listed); new chip collision hiding 92% of the hits readout. Gains the five-state-at-density demonstration and a live editor.
- **05 improved.** Cycle 9's headline read "view distance 133.5" while the on-frame HUD read "view 135.5" — a straight contradiction on the hero hand-tracking frame. Cycle 10 reads 129.5 in both, and the zoom delta is larger (18.9 vs 12.9).
- **06 improved.** Leader lines on held labels 2→5, and the ring is now shown in the shared space — ~12 placed teal markers and their district labels are in frame, plus a sidebar naming the 8 placed nodes whose labels are suppressed. Cycle 9's frame was the ring alone in a void.
- **08 regressed.** Cycle 9 drew "Steal the parking-lot bit" beside the dropped node in the after panel; cycle 10 hides it (A4). Every other node's pixels are identical between panels once the 960 px offset is removed, in both cycles.
- **09 improved.** Same clean connect-and-edit, now with a label-placement audit backing it: 5 labels present in both panels, 0 shifted, node id and coordinates (21.6, 12.6, −7.6) identical across the edit.
- **10 regressed.** Cycle 9's hits chip was fully readable; cycle 10's is 84% occluded. Label spacing improved (tightest pair 14.1→33.4 px) and the found node is still dead-centre.
- **16 marginally improved.** Same 7 gestures; cycle 10 adds a "Double-tap — Link armed" beat before "Double-tap — Connect", so the two-step connect is explained rather than assumed.
- **17 unchanged.** Same four poses, same mouse tail, and the fist behaves identically: I ran the same coral/azure measurement on cycle 9 and got 0.564 at t=1 through 0.584 at t=26, then 0.27 at t=30 — the cluster moves only under the alt-drag there too.
- **18 regressed.** The chip collision is new: cycle 9's frames at t=7 and t=12 carried no labels-hidden chip at all and the hits readout was complete.
- **19 unchanged.** Same arc, position identical to four decimals through drop, connect and end.

## What is strongest

The capture-place-connect-refind arc in 19 is the real thing: the quick-add lands with an on-frame receipt ("Captured into holding — 9 waiting. Drag it out to place it.", badge 9), the drag out drops it at (21.9, −14.6, 13.7), and the search at the end flies back to that same coordinate, unchanged — and the last 30 frames of the take are pixel-identical (0 pixels differing above threshold), so nothing breathes, drifts or wobbles when the user stops acting. Second, the honesty of both substitutions is exemplary and legible in the frames themselves: "android device profile · real orientation + touch events · no camera pass-through" and "SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER", with a real detector's failures left in ("no hand · show a hand", "unrecognised · hold a pose"). Third, the fly-to end-states are genuinely crisp — the found node sits at (960, 539) in a 1920×1080 frame, half a pixel off centre, with its label at 15.5:1 contrast and a 22 px glyph band.