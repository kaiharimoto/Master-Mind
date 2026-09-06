# The Audience — cycle 13

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

**43 of 50 — up one from cycle 12 — and two stills REGRESSED, both because of
cycle-13 changes of mine.** Artifact 09's tighter framing crops the edited node
off the panel, so its header asserts a colour change the frame no longer shows;
artifact 06's re-solved vantage puts the holding cluster against empty black
with no placed node anywhere in shot, so "in the shared 3D space" is a claim its
own pixels do not make. Both were caused by fixes aimed at other findings —
reserving the recovery column's rail changed the framing, and penalising markers
under the top bar changed the yaw. Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have completed my measurements. Here is my verdict.

```json
{
  "critic": "audience",
  "cycle": 13,
  "categories": [
    {
      "id": "01",
      "name": "Core workflow",
      "weight": 25,
      "minimum": 20,
      "score": 21,
      "reasoning": "The loop is proven end-to-end in one unbroken take rather than asserted. In 19_capture_place_arc I read the top bar frame by frame: the thought is typed into the always-present field (0.5s-4.0s), one commit clears it, and 'holding' goes 8 to 9 at 5s with the panel reading NODE · UNPLACED, IN HOLDING; the node is dragged out and 'holding' drops back to 8 at 13s; the placed node's label box sits at pixel (1070,282) at both 13s and 14s while a background cross-correlation over 12s-18s returns a (0,0) camera shift, so it genuinely stays; at 22s a typed 'Rehearse' gives '1 hit' and the fly-to lands on the same stored coordinates 21.9, -14.6, 13.7 that the editor showed at placement, centred and legible, with the scene at rest changing exactly 0 pixels over 1.2s. 08 corroborates placement (holding 4 to 3, coordinates 2.1,-10.3,3.9 to 2.0,4.6,2.0, node clearly outside the dotted boundary), and 10 is the best fly-to end-state yet: target dead centre at (959,540), label glyphs 40px tall at 11.6:1 contrast against a flat (18,14,11) ground with no fog, grid or vignette, and search hits carrying a distinct four-tick mark. 09 survives a pixel diff of its two panels: the only changes are one new filament, the selection ring, the text edit and the sidebar count, with every other node identical, so connect and edit demonstrably do not disturb the layout. Two things hold this back from a higher mark. 09's own header claims 'colour teal ... changed through the panel', but the edited node is cropped off the panel's left edge so only the swatch proves it, where cycle 12 showed the disc go (255,189,169) to (97,237,222) on canvas. And 06 frames the holding cluster against pure black with no placed node anywhere in shot, so 'in the shared 3D space' is a claim the frame does not make; one of its eight labels is exiled to a side list. Across the set the canvas leans hard on that side index (10 labels hidden in 10, 46 in 19, 82 in 04), which is honest but is a list-app affordance carrying weight that the spatial view should carry."
    },
    {
      "id": "02",
      "name": "Landmarks live",
      "weight": 25,
      "minimum": 20,
      "score": 22,
      "reasoning": "Both lenses are operable and both substitutions are stamped on the frames themselves rather than buried. AR: 16_touch_vocabulary runs 34s at 1920x1080/30fps and captions seven distinct operations - Tap (select), Double-tap (connect), Long-press (quick-add), Drag a node (place/move), Drag empty space (re-aim), Pinch/spread (zoom), Gyroscope (look around) - six of them touch, comfortably past the minimum of five, and I verified the effects rather than the captions: 'holding' reads 4 then 5 at 12s then 4 again at 16s across the long-press and drag; a line sampled between 'Method of loci' and 'Slide budget: 12' has median brightness 18 (background) at 5.0s and 56 at 9.5s, so the double-tap really creates a filament; the holding boundary circle roughly doubles across the pinch; the gyro readout moves from heading 3°/tilt 89° to 65°/69° with the framing following. The hero 03 checks out arithmetically: the tracked node's amber ring sits at (281,530) in the left panel and (396,307) in the right, a displacement of 250.6px against the caption's stated 252px, and every panel carries 'no camera pass-through' in the device badge. Hands: 17_hand_vocabulary runs 41s and cycles four poses four times - Open palm (move closer), Closed fist (grab the nearest cluster and move it), Gathered hand (pull back), Two fingers (select) - then demonstrates a mouse equivalent for each in the same take (Scroll up, Alt-drag, Scroll down, Left click), so every operation is reachable both ways on camera. 05 measures cleanly: view distance 441.7 to 383.0 and the node cloud scales about a fixed screen centre by ~1.15 with a ~4.4px mean residual over a ~300px cloud, i.e. the vantage dollies and the layout does not deform. During a fist grab I measured ~20 of ~84 detected nodes translating together while ~63 stay pixel-identical, so the grab is scoped to one cluster and is undoable ('Undo: grabbed 18 thoughts'). The webcam panel is labelled SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER with 21 plotted landmarks and conf 0.94-0.95, which is an honest declaration and I do not dock the lens for it. What I do dock: the hand vocabulary is thin in kind - three of four poses are camera work (closer, back, grab-and-move) and only one touches a thought - and 05's 'before, pose not yet acting' panel already reads Hands: on · tracking · Open palm with the same caption as the after, so the pair does not show a pre-action state, while its stated span ratio ×1.11 disagrees with its own distance readout (441.7/383.0 = ×1.15) and with what I measure."
    }
  ],
  "findings": [
    {
      "artifact": "09",
      "severity": "major",
      "subsystem": "canvas",
      "observed": "The after panel's header asserts 'colour teal ... both changed through the panel', but the edited node 'Koji-cured egg yolk' is cropped off the left edge of the after panel - only its label fragment '· aged 60d' and an amber selection arc at x=1270 are in frame. The only visible proof of the colour edit is the swatch highlight moving from the 2nd (coral) to the 6th (teal) chip; sampling the visible node arc gives (255,186,33) in both panels, i.e. selection amber, not node colour. Cycle 12's version of this same artifact showed the disc itself change from (255,189,169) to (97,237,222).",
      "rootCause": "The framing was pushed in to show the new filament reaching 'Shio koji', and the selected node fell outside the crop; the header text was carried over from the previous framing without rechecking that the frame still supports it.",
      "correction": "Re-frame the after panel so the edited node's disc is fully inside the canvas alongside 'Shio koji' - or, if the tighter crop is wanted for the filament, delete the colour clause from the header and let the swatch stand as the only claim."
    },
    {
      "artifact": "06",
      "severity": "minor",
      "subsystem": "canvas",
      "observed": "The frame contains only the dotted holding boundary and its 8 unplaced nodes; outside the circle every pixel is flat background (18,14,11). No placed node, district or filament appears anywhere in shot, so nothing in the frame shows that holding lives inside the same 3D space as the map. One of the 8 thoughts ('Recalibrate the pH meter') is also pushed out to the right-hand list. Cycle 12's version had a teal placed cluster visible at top-left.",
      "rootCause": "The vantage was pulled in tight on the holding cluster to make the eight dashed nodes read, and the surrounding map fell outside the frustum.",
      "correction": "Back the vantage off or re-aim it so at least one placed district and a filament or two are visible beyond the dotted boundary, and pick a framing where all 8 waiting labels fit on canvas."
    },
    {
      "artifact": "05",
      "severity": "minor",
      "subsystem": "hands",
      "observed": "The left panel is titled 'Before — hand detected, pose not yet acting', but its status chip already reads 'Hands: on · tracking · Open palm', its caption already reads 'Open palm — Move closer', and its webcam readout already shows conf 0.94 - identical in kind to the after panel. Separately, the after panel states the map 'now spans 379.2 px, ×1.11' while its own view-distance readouts go 441.7 to 383.0 (a ratio of 1.153); a nearest-neighbour fit of the node cloud between the two panels gives a scale of about 1.15, not 1.11.",
      "rootCause": "The before frame was grabbed one tick after detection rather than before the pose was accepted, so both panels show the same acting state; and the 'spans' figure is measured on a screen-space bounding box of visible nodes, which is not the same quantity as the camera-distance ratio it sits next to.",
      "correction": "Capture the before panel while the pose classifier is still below threshold (chip reading tracking with pose 'none') so the pair shows a real transition, and quote one consistent ratio - either the distance ratio 441.7/383.0 or a span measured the same way in both panels."
    },
    {
      "artifact": "17",
      "severity": "minor",
      "subsystem": "expansion",
      "observed": "The four poses map to Move closer, Grab the nearest cluster and move it, Pull back, and Select or confirm. Three of the four are camera or bulk-transform operations; only Two fingers acts on an individual thought. Across the 41s take no pose captures, connects, searches or edits anything.",
      "rootCause": "The pose set was chosen around what a coarse landmark classifier can separate reliably (fan/extended-finger counts), and navigation verbs are the easiest to map onto continuous hand distance.",
      "correction": "Bind one of the four to an operation with map consequence rather than camera consequence - e.g. a pinch that drops the hovered thought into holding, or a pose that steps to the next search hit - so the vocabulary shows the hands doing the work the mode is named for."
    },
    {
      "artifact": "04",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "The canvas carries 107 detectable node discs (7-10px across), which supports 'the entire 100+ node map on screen at once', but the chip reads '82 labels hidden · 12 shortened · 32 named by their opening word', so most thoughts are legible only in the left-hand text index. The same pattern recurs at 40/61 hidden in the AR hero 03, 46 in video 19 and 10 in artifact 10.",
      "rootCause": "A conservative label-collision budget: any label that would overlap is dropped entirely rather than degraded, so at wide framings the canvas empties of text and the index absorbs it.",
      "correction": "Give a dropped label a one- or two-word stub anchored to its node instead of nothing, so a wide framing still reads spatially; reserve the index for the residue rather than the majority."
    }
  ],
  "comparisons": [
    { "artifact": "03", "verdict": "improved", "why": "A pixel diff against cycle 12 shows zero change in node discs or filaments - the vantage and every position are identical - and all the change is in labels: truncation now falls on word boundaries ('Weight…', 'Second ferment in fridge') where cycle 12 gave letter stubs ('Wei…', 'Sec…'). The gyro evidence itself (heading 34°/96°, measured 250.6px node displacement vs the stated 252px) is unchanged and still correct." },
    { "artifact": "04", "verdict": "improved", "why": "The hidden-thought index now enumerates all 82 entries grouped by label with counts, where cycle 12 listed about 18 and stopped at '…and 50 more'. Node count on canvas (107 discs) and the Grab/Closer/Back/Select mouse row are unchanged." },
    { "artifact": "05", "verdict": "improved", "why": "Cycle 12's after panel read 'no hand · show a hand to the camera · conf 0.00' while its caption claimed 'Open palm — Move closer · last pose, held' - the frame contradicted the claim. Cycle 13 shows a detected open palm with plotted landmarks and conf 0.95 in both panels, and the dolly it causes is measurable (×1.15 about a fixed centre, ~4.4px residual)." },
    { "artifact": "06", "verdict": "regressed", "why": "Node disc rendering is unchanged (row profiles are near-identical, peak luminance 145 vs 139), but cycle 12 kept placed nodes visible at top-left and captioned all 8 waiting thoughts on canvas; cycle 13 shows the cluster against empty black with one label displaced to the sidebar, losing the 'in the shared 3D space' evidence." },
    { "artifact": "08", "verdict": "improved", "why": "Same demonstration (holding 4 to 3, coordinates changing, node outside the boundary) but cleaner: cycle 12's dropped-node label box collided with the 'labels hidden' chip at the top of the after panel, and cycle 13's drop lands well clear with the label box fully legible." },
    { "artifact": "09", "verdict": "regressed", "why": "The filament creation is still cleanly proven, but the tighter framing pushes the edited node off the panel, so the header's colour claim is no longer visible on canvas; cycle 12 showed the disc go coral (255,189,169) to teal (97,237,222) in plain sight." },
    { "artifact": "10", "verdict": "improved", "why": "Same node, same coordinates, same centring, but the target label is now 40px of text at mean luminance 203 versus 22px at 188 in cycle 12 - measurably closer to 'crisp enough to read' - and more surrounding nodes carry opening-word labels." },
    { "artifact": "16", "verdict": "unchanged", "why": "Same 34s at 1920x1080/30fps, same seven captions at the same timestamps, and frames sampled at 9s, 20s and 33s differ from cycle 12 by only 0.44-0.62% of pixels (label text only). The gesture demonstration and its measurable effects are identical." },
    { "artifact": "17", "verdict": "improved", "why": "The mouse-equivalent tail was already present in cycle 12, but at 20s cycle 12 showed the 'Two fingers — Select or confirm' caption with nothing actually selected; cycle 13 shows the same pose with a node selected, its ring lit and the editor open on 'Strips lie above pH 4', so the pose is seen acting rather than announced." },
    { "artifact": "19", "verdict": "improved", "why": "The arc itself is the same and equally sound, but the thought index moved to a complete two-column left panel (cycle 12 truncated at '…and 28 more' on the right) and the 'Now click the node to connect to' banner no longer overlaps the labels-hidden chip." }
  ],
  "verdict": "As an audience member watching this demo, the thing that would convince me is 19_capture_place_arc: in twenty-three unbroken seconds a thought is typed once, lands unplaced with the holding count ticking 8 to 9, is dragged to a spot it then provably does not leave (identical label-box pixels with a measured zero camera shift), is connected, and is refound by a typed query that flies to the exact stored coordinates 21.9, -14.6, 13.7 shown at placement - and the scene changes literally zero pixels at rest. That is one designed workflow, not a pile of features, and the flat background with no fog, grid, vignette or idle motion keeps to the brief's avoid-list. The landmark lenses are operable and, importantly, honest about what stands in for the world: 'no camera pass-through' is stamped on the AR frames and 'SYNTHESISED CAPTURE ... REAL HANDLANDMARKER' on the webcam panel, and behind those declarations the mechanics measure out - six touch gestures with verified effects, a 250.6px gyro parallax matching a claimed 252px, four hand poses each with a live mouse equivalent, a fist that moves twenty nodes while sixty-three stay pixel-identical. What keeps this from the top of the range is that two still artifacts got weaker in exactly the way that costs credibility with a technical crowd: 09 now asserts a colour change the frame crops out, and 06 shows the holding cluster floating in nothing so its 'shared space' claim is unsupported by its own pixels. Add that most node text now lives in a side list rather than in the space, and that three of the four hand poses are camera moves, and what I have is a build whose core loop is genuinely finished and whose landmarks work honestly, with a handful of frames that promise slightly more than they show."
}
```