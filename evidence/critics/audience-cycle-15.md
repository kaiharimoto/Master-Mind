# The Audience — cycle 15

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

**21 and 21 — both above their minimums, level with cycle 14.**

**It is right that this was a polish cycle, and it says so with the evidence.**
It checked `recipe.fnSha` and found nine of the eleven artifacts in its
categories produced by capture code byte-identical to cycle 14 — only 06 and 08
have new capture code — so the deltas it could see are label-packing counts.
That is an accurate reading of where cycle 15's work went: into the label
arbiter and into the two majors the Art Director raised, not into the loop or
either landmark.

**Its one major is the one I cannot close inside this environment**, and it says
so precisely:

> Do not change the honesty — it is the best thing about this lens. Do add one
> non-idealised input before the demo.

The webcam substitution is declared on every frame and in the manifest, and this
critic verified the detector re-solves per frame rather than replaying a label —
fan 0.43/0.39/0.38/0.35 and confidence 0.98/0.96/0.95/0.92 across four
consecutive frames of one held fist. What is missing is a real hand, and there
is no camera on this machine. Recorded as an unmet gate in the final report
rather than worked around.

It confirmed artifact 08's fix independently: *"Landing a placed node inside the
map rather than beside it is a materially better proof of a permanent spot."*

Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have everything I need. Here is my review.

```json
{
  "critic": "audience",
  "cycle": 15,
  "categories": [
    {
      "id": "01",
      "name": "Core workflow",
      "weight": 25,
      "minimum": 20,
      "score": 21,
      "reasoning": "All four sub-claims are met with evidence I could check myself, and — more important — they are tied together rather than stacked. Artifact 19 runs the whole loop in one 23s take on one map: type into the always-present field, toast 'Captured into holding — 9 waiting. Drag it out to place it.', badge 8→9, node inside the dashed ring with the editor reading NODE · UNPLACED, IN HOLDING; drag out, badge 9→8 and the 'holding' label clears; then 'Pick a node…' produces a filament; then the search field carries 'Rehearse' and the view ends on the node in its dropped place with '1 hit · 1 in the text'. Artifact 16 replays the same loop with touch on the AR lens (long-press quick-add 4→5, drag out 5→4 with the header flipping UNPLACED→NODE, double-tap connect), so the loop reads as one design, not a per-platform reinvention. 08 freezes the camera and drops the node among the placed graph — 34.3px from 'Slide budget: 12', 118px from 'Opening…', both named on frame — which is a better proof of a permanent spot than cycle-14's drop into open space. In 09 I read the stored coordinates myself: 21.6, 12.6, -7.6 before and after, and the node sits at the identical screen position while text, colour and label all change through the panel. 10 and 18 end crisp and centred with a real hit breakdown ('19 hits · 6 in the text · 13 in the label \"Koji\"'), so refinding is a first-class verb. I also checked the avoid-list directly: frames 0.5s apart with no user act are pixel-identical on both lenses (max channel delta 8 on canvas, 15 in expansion), so nothing drifts. What holds this back from excellent is the whole-map cost: in 04, 77 of 150 thoughts have no label beside them and are named only in a text sidebar with no spatial correspondence (94 of them at 3.0s in artifact 17), so at exactly the density the tool claims to serve, 'you remember where a thought was' is carried by a list rather than by the map. That sidebar also takes 23% of the frame and jumps sides mid-take in 19 (left at 6.5s, bottom-right at 14.5s, right at 22.0s). And nothing in this loop actually moved this cycle: the capture code for 09, 10, 18 and 19 is byte-identical to cycle-14 (same fnSha), so the deltas are label-packing counts, not workflow."
    },
    {
      "id": "02",
      "name": "Landmarks live",
      "weight": 25,
      "minimum": 20,
      "score": 21,
      "reasoning": "Both landmarks are operable, and the two claims I could most easily catch a cheat on both survived my own measurement. On AR: the hero's arithmetic checks out — I found the highlighted anchor ring in both panels (centres 279.5,529.5 and 1676.5,307.5 with a panel offset of exactly 1280 measured off the header bars) and got 251.0 px of on-image travel against the caption's stated 252 px, a 0.4% match, while the two panels keep every other node's relative arrangement. The touch vocabulary exceeds the bar: six gestures plus a gyro beat, and I watched each produce a visibly different result inside one take — holding 4→5→4, a new filament between 'Method of loci' and 'Slide budget: 12', the vantage re-aimed, the view zoomed, heading 0°→41° with tilt 90°→77°. The in-app table (15) names all six with a SPANS column and the four poses with their mouse equivalents. On hands: the detector is genuinely running per-frame, not a hardcoded label — across consecutive frames 360-363 of a held fist, fan reads 0.43/0.39/0.38/0.35, confidence 0.98/0.96/0.95/0.92, extended 0/0/0/1, and the 21-point skeleton tracks the moving hand. All four mouse equivalents are shown hands-off (Alt-drag, Scroll up, Scroll down, Left click), and the fist-grab moves a 16-node cluster with 'internal arrangement drift 0.000000' printed on frame, reaches a peer, and is put back at the end ('12 thoughts returned to where they were · Nothing to undo'). Against that: the webcam input is a rendered CG hand on an even grey ground, honestly stamped SYNTHESISED CAPTURE · REAL HANDLANDMARKER on every frame — I do not penalise the missing camera, but nothing here shows the classifier surviving a real hand in a demo room, and that is the one thing a live audience will want. The pose vocabulary is also thinner than it counts: open palm and gathered hand are the two directions of one zoom control, so four poses buy three kinds of operation against Android's six spanning capture, connection, placement, selection and navigation. The flagship still (05) is the weakest beat — I measured the node-cloud radial spread myself at 79.6→90.0 px, a ×1.13 change, so 'Move closer' reads as a nudge, however honest the caption ('the pose buys distance, not legibility') is. And a label plus selection ring sit clipped at the invisible device-panel edge for roughly 26.0s-33.5s of the 34s touch take. Capture code for 03, 04, 05, 16 and 17 is unchanged from cycle-14, so no landmark capability moved this cycle."
    }
  ],
  "findings": [
    {
      "artifact": "17",
      "severity": "major",
      "subsystem": "hands",
      "observed": "Every frame of the hand vocabulary and of 05 is driven by a pre-rendered CG hand — a skin-toned 3D model on an even grey backdrop — fed as a fake webcam from harness/clips/hand-vocabulary-slow.y4m. This is declared honestly on the frame itself ('SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER') and in the manifest (declaredSynthetic: true). I verified the detector is genuinely per-frame and not a scripted state: over consecutive frames 360-363 of a held fist the readout moves 0.43/0.39/0.38/0.35 fan, 0.98/0.96/0.95/0.92 confidence, extended 0/0/0/1, with the 21-landmark skeleton tracking. So the code is real; the input is not.",
      "rootCause": "Headless Linux capture environment with no camera. The substitution is the only way to exercise the lens here, and the build declares it rather than hiding it.",
      "correction": "Do not change the honesty — it is the best thing about this lens. Do add one non-idealised input before the demo: re-run the same 17 recipe against at least one clip of a real human hand (varied lighting, a cluttered background, some motion blur) and print the same tips-out / fan / extended / confidence telemetry, so a viewer can see the classifier hold under conditions a demo room will actually produce. If that clip is also synthetic-free but recorded, say so with the same on-frame stamp. Failing that, add a visible confidence floor and a 'pose lost' state to the HUD so the audience sees what the lens does when detection fails, rather than only what it does when it succeeds."
    },
    {
      "artifact": "16",
      "severity": "minor",
      "subsystem": "ui",
      "observed": "From roughly 26.0s to 33.5s of the 34s take, the 'New thought' node label and its selection ring are hard-clipped at x≈1000, the invisible right edge of the emulated 1280x1440 device panel. At 31.4s the label box degenerates to a single letter 'N' in a three-sided orange box; at 26.0s and 32.0s the box is drawn open on the right and the selection ring is cut to a left arc. Because the background is a uniform (18,13,10) across the whole 1920x1080 frame with no bezel or divider, nothing tells the viewer where the phone ends — so during the pinch and gyro beats, the climax of the vocabulary take, this reads as a rendering bug. Identical behaviour is present in the cycle-14 take, so it is a standing defect rather than a regression.",
      "rootCause": "The device viewport clips node labels at its boundary, but the composite draws the device panel and the vocabulary column on one undifferentiated ground, so the clip has no visible cause. The label arbiter that enforces everyLabelInsideTheFrame on the still artifacts does not appear to run inside the AR video.",
      "correction": "Two fixes, either of which lands it: (a) draw a faint 1px device edge or a subtle ground shift for the phone panel so the clip reads as a screen boundary rather than a broken label; and (b) apply the same label-flip rule the stills use — when a label would overrun the viewport, place it on the node's other side — so a selected node's name is never truncated to one character in the take that is supposed to sell the gesture set."
    },
    {
      "artifact": "05",
      "severity": "minor",
      "subsystem": "expansion",
      "observed": "The one still that has to sell hand control shows 'Open palm — Move closer' producing a very small change. I measured it independently rather than trusting the caption: taking all saturated node pixels in each panel's canvas region, the radial standard deviation of the node cloud goes 79.61 px (before) to 90.03 px (after), a ratio of 1.13 — consistent with the frame's own ×1.11 and its honest note that '25 thoughts named at the same 17.5 px type: at this framing the pose buys distance, not legibility'.",
      "rootCause": "The before/after pair is captured over a single short pose hold (25 frames) rather than over a sustained gesture, so the camera dolly only integrates a fraction of its range.",
      "correction": "Hold the pose long enough for the vantage to travel a distance the eye reads without a ruler — target a span ratio of at least 1.5-1.8 — and pick a before framing far enough out that the after framing crosses a legibility threshold, so the caption can say the pose bought both distance and names instead of conceding it bought only distance."
    },
    {
      "artifact": "04",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "At whole-map framing, 77 of the 150 thoughts have no label beside them and are named only in a text list down the left edge ('77 thoughts on screen without room for a label'), which consumes about 23% of the frame width. The same pattern runs through the expansion lens in 17 (94 unlabelled at 3.0s, 92 at 30.0s, 97 at 21.0s). The accounting is scrupulous and every thought is named somewhere, but the list is grouped by district with no spatial correspondence to where the node sits.",
      "rootCause": "Label placement is solved by a collision arbiter that hides rather than degrades: below a density threshold a name is dropped from the canvas entirely and pushed to the recovery rail.",
      "correction": "Give the rail a spatial handshake so it still serves the space-is-memory thesis: hovering or selecting a rail entry should tick or halo its node on the canvas, and the rail should order entries by their screen position within each district rather than arbitrarily. Alternatively, add an intermediate degradation between 'full label' and 'no label' — a two-or-three character district-coloured stub beside the node — so half the map is not anonymous dots at the framing the landmark lens is built for."
    },
    {
      "artifact": "17",
      "severity": "minor",
      "subsystem": "hands",
      "observed": "The four poses map to four captions but only three kinds of operation: Closed fist grabs and moves a cluster, Two fingers selects or confirms, and Open palm and Gathered hand are the two directions of a single zoom/dolly control ('Move closer' / 'Pull back'). By contrast the Android set in the same build spans capture, connection, placement, selection and two kinds of navigation across six gestures, and the settings table (15) makes the asymmetry plain by labelling both hand-zoom rows with camera-only operations.",
      "rootCause": "The hand vocabulary was scoped to camera control plus one manipulation, so nothing in the hand set touches the verbs the mission cares most about — capture, connect, place.",
      "correction": "Add one pose that acts on the map rather than the camera and that the detector can already separate — a pinch of thumb and index would read cleanly against the existing four (tips-out and fan already separate them) — and bind it to connect or to placing a held thought out of the holding cluster. That would make the Windows landmark exercise the core loop rather than only the vantage, and give the mouse-equivalent table a fifth row."
    },
    {
      "artifact": "19",
      "severity": "minor",
      "subsystem": "ui",
      "observed": "Within the single continuous take that carries the whole core loop, the unlabelled-thoughts panel changes position three times: down the left edge at 6.5s, into the bottom-right at 14.5s, and down the right edge at 22.0s. The node editor also moves between the right rail and a floating position across the other artifacts (right rail in 19 and 10, floating mid-frame in 08 and 16).",
      "rootCause": "The rail picks whichever side is emptier for the current camera, recomputed per frame, so a camera move during the take relocates it.",
      "correction": "Pin the rail's side for the duration of a continuous interaction and only re-evaluate on an explicit lens or map change, or cross-fade it over ~300ms when it must move. A viewer following a node from capture to refind should not have the chrome reflow underneath them three times in twenty seconds."
    },
    {
      "artifact": "16",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "Nine of the eleven artifacts in these two categories were produced by capture code byte-identical to cycle-14 (recipe.fnSha unchanged for 03, 04, 05, 09, 10, 16, 17, 18 and 19). Only 06 and 08 have new capture code. The observable deltas elsewhere are label-packing counts — 03 panel A draws 24 names instead of 17 and hides 32 instead of 44, 05 draws 21/25 instead of 18/19, 10 hides 7 instead of 8 — plus run-to-run variation in 17's grab count (20→16) and travel (10.5→19.4).",
      "rootCause": "This cycle's work went into the label arbiter in the app bundle, not into the loop or either landmark.",
      "correction": "State plainly in the next cycle's evidence which recipes were re-run unchanged, so a reviewer is not asked to re-derive it from fnSha. And if the target is a 90, spend the next cycle's capture budget where the evidence is thinnest for an audience: a non-idealised hand input, a stronger 'move closer' beat, and one hand pose that touches the core loop."
    }
  ],
  "comparisons": [
    {
      "artifact": "03",
      "verdict": "improved",
      "why": "Same capture recipe and the same verified geometry — I measured 251.0 px of anchor travel on the image against the caption's 252 in both cycles — but cycle-15 resolves more names: panel A now draws 24 by their opening word and hides 32, against 17 drawn and 44 hidden in cycle-14; panel B hides 53 against 61. The holding-arc label that collided with the gyro chip at the bottom of cycle-14's panel A is gone."
    },
    {
      "artifact": "04",
      "verdict": "improved",
      "why": "Marginal: 72 names drawn on canvas against 67, and 77 pushed to the rail against 82. A filament-contrast audit is new this cycle and passes (51 links checked, worst 1.41, none below floor). The framing, camera and structure are otherwise identical, and the 77-name rail remains the dominant compromise."
    },
    {
      "artifact": "05",
      "verdict": "improved",
      "why": "Marginal and cosmetic: 21 names drawn before and 25 after, against 18 and 19 in cycle-14. The measurement that matters is unchanged — view distance 441.7→383.0, span ×1.11, which I independently confirmed at ×1.13 — and the synthetic-capture declaration and detector telemetry are identical."
    },
    {
      "artifact": "06",
      "verdict": "unchanged",
      "why": "Visually near-identical: the same dashed boundary, the same eight dashed unplaced markers in the same positions, the same 'holding 8' badge and the same 14-name rail. New capture code resolves one or two more labels in full at top-left ('Vacuum bags for lacto', 'Immersion…' rather than truncations). No change to what the artifact proves."
    },
    {
      "artifact": "08",
      "verdict": "improved",
      "why": "The substance changed for the better. Cycle-14 dropped the node into open space with 105.6 px of clearance; cycle-15 drops it among the placed graph (droppedAmongThePlacedGraph, clearance 34.3 px) and names the two nearest thoughts and their distances on the frame — 'Slide budget: 12' at 34 px and 'Opening: where did you park?' at 118 px. Landing a placed node inside the map rather than beside it is a materially better proof of a permanent spot."
    },
    {
      "artifact": "09",
      "verdict": "unchanged",
      "why": "Identical capture recipe and identical result: the same before/after pair, the same new filament to 'Shio koji', the same colour and text edit, and the same stored coordinates 21.6, 12.6, -7.6 on both sides, which I verified along with the identical on-screen position. The only delta is one fewer label box drawn in the before panel."
    },
    {
      "artifact": "10",
      "verdict": "improved",
      "why": "Marginal: 7 thoughts pushed to the rail against 8, and three labels that cycle-14 truncated — including 'Bed depth 4cm max' and 'Stir at 24h to cool' right beside the search target — now read in full. Same camera, same target node, same '19 hits · 6 in the text · 13 in the label \"Koji\"' breakdown."
    },
    {
      "artifact": "16",
      "verdict": "unchanged",
      "why": "Byte-identical capture recipe and the same 34s structure: the same seven interactions with the same claims passing, differing only in the id of the quick-added node. I confirmed the device-edge label clipping at ~32s is present in cycle-14 too (there reading '…lew thought' with the selection ring cut to an arc), so it is a standing defect, not a regression."
    },
    {
      "artifact": "17",
      "verdict": "unchanged",
      "why": "Same recipe, same 41s, same four poses, same synthetic-capture declaration and the same complete set of four mouse equivalents. Differences are run-to-run only: 16 pose grabs against 20, max travel 19.43 against 10.50, 2142 detector samples against 2086, undo depth at tail start 24 against 22. Nothing new is demonstrated."
    },
    {
      "artifact": "18",
      "verdict": "unchanged",
      "why": "Identical capture recipe and take; the only manifest delta is 76 labels audited against 66 in the worst audit frame. The fly still ends centred and crisp on 'Koji-accelerated garum' with the same hit breakdown."
    },
    {
      "artifact": "19",
      "verdict": "unchanged",
      "why": "Same recipe and the same arc on the same node — I compared the 22.0s end frames and both show 'Rehearse the fly-to twice' at stored coordinates 21.9, -14.6, 13.7, connected to the same neighbour, with the search field carrying 'Rehearse' and '1 hit · 1 in the text'. Cycle-15 lists 15 unlabelled thoughts against 18 and reads 'Vinegar from failed wine' in full where cycle-14 truncated it."
    }
  ],
  "verdict": "As the audience, I would watch this demo and believe it. The loop is one designed workflow, not a feature list: artifact 19 carries capture, holding, placement, connection and refinding through a single unbroken take on one map, and artifact 16 replays the same five verbs with touch inside the AR lens, so the two platforms plainly share a design rather than each having invented one. The things I tried hardest to catch out held up under my own measurement — the hero's anchor travel came to 251.0 px against its caption's 252, artifact 09's node keeps its coordinates to the decimal through a text and colour edit, the hand detector visibly re-solves every frame rather than replaying a label, all four hand poses have mouse equivalents demonstrated hands-off, and frames half a second apart with no user act are pixel-identical on both lenses, so nothing drifts. The build's honesty is its strongest asset: 'no camera pass-through', 'SYNTHESISED CAPTURE · REAL HANDLANDMARKER', 'the pose buys distance, not legibility', and 'nothing here ever tidies a layout' are all stamped where a viewer must see them. What keeps this short of the 90 it is aiming at is what those honest stamps concede. The Windows landmark has never met a real hand — the CG input is declared, so I do not mark it unreachable, but a peer will ask, and 'here is the same detector on real footage' is the single highest-value frame this evidence set does not contain. The pose set is thinner than it counts, four poses buying three kinds of operation, none of which touches capture or connect. The flagship 'Move closer' still moves the map by 13%. And at the whole-map density both landmark lenses are built for, half the thoughts are anonymous dots named in a sidebar that knows nothing about where they are, which quietly undercuts the defining story on the very frames meant to prove it. Finally, this is a polish cycle: nine of the eleven artifacts I reviewed came from unchanged capture code, and the deltas are label counts. Both categories clear their minimums comfortably and neither reaches excellent — 21 and 21."
}
```