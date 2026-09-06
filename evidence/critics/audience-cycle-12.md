# The Audience — cycle 12

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

**42 of 50 — down one from cycle 11's 43, on two artifacts that REGRESSED, and
both regressions were caused by cycle-12 changes of mine.** Artifact 05, the one
still whose job is to show hand tracking live, shows a hand in the webcam frame
while the recogniser reports `conf 0.00` and the caption admits it is running on
a held pose — a direct consequence of holding the pose for its full duration and
then shooting at the end of it. Artifact 08's payload label is clipped by the
framing notice, which the new placement rule does not treat as a collision
because a selection chip is not in its blocker set. Recorded before the
response, unedited, including that.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have measured everything I need. Here is my verdict.

```json
{
  "critic": "audience",
  "cycle": 12,
  "categories": [
    {
      "id": "01",
      "name": "Core workflow",
      "weight": 25,
      "minimum": 20,
      "score": 21,
      "reasoning": "The capture-place-refind loop holds up under measurement, and the strongest evidence in the whole set is in 19: quick-add fires the toast 'Captured into holding — 9 waiting. Drag it out to place it.' with the chip stepping 8→9 and the panel reading 'NODE · UNPLACED, IN HOLDING' / label 'holding'; after the drag the chip steps back to 8, the label field empties, and the stored coordinates read 21.9, -14.6, 13.7 at t=13.0 and t=14.0 and again identically at t=20.0, 21.0, 22.0 and 22.9 — after a different node was selected, a filament was drawn and a search was typed. The node stays exactly where it was dropped, and I read that off the app's own readout across the take rather than taking it on trust. 06 backs it: I counted 8 dashed unplaced nodes inside the dotted boundary against the 'holding 8' chip. 08 shows holding 4→3 with the panel header dropping 'UNPLACED, IN HOLDING' and coordinates moving 2.1,-10.3,3.9 → 2.0,-0.7,2.7. In 09 I sampled the pixel path between the two nodes: background (15) before, a continuous bright run (80–133) after, so the filament is real, while the coordinates stay 21.6, 12.6, -7.6 through a colour and text edit. 10/18 land the found node at (959,539), within a pixel of frame centre, with the search-hit state genuinely lit — relative luminance 0.61 for the found node, 0.44 for hits, 0.04–0.05 for plain, a ~10x separation, so nothing here is uniform-luminance mush — and label contrast of 15.5:1. Two frames 0.3s apart in a quiet interval differ by zero pixels above threshold, so nothing drifts on its own, and brightness through the connect frames is flat to within 0.02%, so there is no burst. Against that: the after panel of 08, the single frame the placement story rests on, has the '1 label hidden…' notice drawn over the payload — its left edge sits at x=1444 where the chip should run to x≈1453, clipping the final 't' of 'Steal the parking-lot bit', the chip's right border and the top of the selection ring. In 10 the found node's own label shrank from 194x23 px last cycle to 98x18 px, making it the smallest text on a canvas of 24px labels. And the label policy now spends its budget on first-letter stubs — 'Bed…', 'Amy…', 'Fil…', 'Shi…', 'Bio…' — which carry no thought and add noise; the same total is unreadable as last cycle, just redistributed."
    },
    {
      "id": "02",
      "name": "Landmarks live",
      "weight": 25,
      "minimum": 20,
      "score": 21,
      "reasoning": "Both lenses are operable and both overshoot their minimums. 16 delivers six touch gestures, each labelled and each doing something visibly different: Tap/select, Double-tap/'Link armed'→'Connect' (I watched the filament appear), Long-press/quick-add (holding 4→5 with the capture toast), Drag a node/place, Drag empty space/re-aim, Pinch-spread/zoom, plus Gyroscope/look-around — and the map now sits inside a true 1280x1440 portrait device frame matching 03, with the vocabulary printed beside it. Best of all, the placed node's coordinates read 5.6, -2.7, -0.9 unchanged through the re-aim, the pinch-zoom and the gyro sweep: camera moves provably never touch positions. 03's gyro claim is falsifiable and it survives falsification — I measured the selected node's displacement between the 34° and 96° panels at 256 px against the caption's predicted 251.5 px (271 device px x 0.928), and back-solving the device frame gives x=249.5 and x=377.4 against the stated 253 and 378. 17 shows all four poses each on a different operation and, unusually, demonstrates all four mouse equivalents on screen (Alt-drag, Scroll up, Scroll down, Left click) alongside persistent Grab/Closer/Back/Select buttons and an undo readout; the new dashed target box reading 'a fist takes 12 thoughts · Safety and pH' tells you what the fist will take before it takes it. I checked the cluster-arrangement claim by tracking five district blob centroids across a fist move: all five translate by (75.4, -16.4) within ±4 px, and the region diff is exactly zero in the left third and right edge of the canvas — a rigid, local move. Every substitution is declared on the frames themselves ('chromium … android device profile · real orientation + touch events · no camera pass-through'; 'SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER'), which is honest and specific enough to judge. What holds this down is 05, the one still that is supposed to prove hands live: its after panel shows a hand plainly in the webcam frame while the recogniser reports 'no hand · show a hand to the camera · tips out 0 fan 0.00 extended 0 conf 0.00', the pose chip degraded to 'last pose, held' and the toolbar chip stripped of the pose name — where last cycle both panels carried a detected Open palm at conf 0.95/0.96. The operation it demonstrates is also thin: distance 174.9→126.9 buys only a x1.08 change in map span, which the caption honestly admits, and I cannot check the span numbers at all because the map is clipped by the right edge of both panels. 17 drops to 'unrecognised · hold a pose' at ~11.5s and ~31.5s. And 04's 'entire map legible' is generous: cap heights measure ~10 px against a disclosed 68 hidden + 9 shortened + 47 first-letter stubs, leaving about twenty thoughts actually readable."
    }
  ],
  "findings": [
    {
      "artifact": "05",
      "severity": "major",
      "subsystem": "hands",
      "observed": "The AFTER panel — the one that has to show a pose acting — has a hand clearly present in the synthesised webcam frame while the overlay reads 'no hand / show a hand to the camera / tips out 0 fan 0.00 extended 0 conf 0.00'. The pose chip below the map reads 'Open palm — Move closer · last pose, held' and the toolbar chip has dropped to 'Hands: on · tracking' with no pose name. Cycle 11's equivalent frame showed a detected Open palm at conf 0.96 with landmarks drawn. So the composite never once shows detection and effect in the same panel.",
      "rootCause": "The frame chosen for the AFTER capture falls in a gap between detections in hand-vocabulary-slow.y4m, and the app's 'last pose, held' fallback keeps driving the operation while the recogniser has already given up. The capture is timed on the map's state, not on the detector's confidence.",
      "correction": "Gate the AFTER capture on the detector: hold the shutter until conf > 0.9 with a named pose AND the view distance has settled at its new value, then grab. If the synthesised clip genuinely has no frame where both are true, extend the held-pose segment in the source clip until it does. The one still titled 'Hand tracking live' must show a live detection."
    },
    {
      "artifact": "08",
      "severity": "major",
      "subsystem": "ui",
      "observed": "In the AFTER half, the '1 label hidden · 3 named by their first letters at this framing · listed at right' notice panel is drawn on top of the canvas. Its left edge is at x=1444 while the dropped node's label chip runs to x≈1453 (I measured the same chip at 151 px wide in the BEFORE half). The result clips the final 't' of 'Steal the parking-lot bit', the chip's right border, and the top arc of the orange selection ring. The payload of the placement end-state is partly covered by chrome.",
      "rootCause": "The framing notice is a fixed-position HUD element painted after the canvas layer with no collision test against selected-node label chips, and the composite's chosen drop position happens to sit under it.",
      "correction": "Either give the notice a lower z-index than selected-node chips, or make the chip placer aware of HUD rectangles and flip the chip below-left of the node when it would collide. For this artifact specifically, re-shoot with the drop a few hundred pixels lower so nothing overlaps — the frame's whole job is to be read."
    },
    {
      "artifact": "10",
      "severity": "minor",
      "subsystem": "canvas",
      "observed": "The found node's own label is now a bordered chip whose glyph block measures 98x18 px, against 194x23 px for the same label in cycle 11 and ~24 px type for every ordinary label around it ('Sweet vs savoury paths', 'Barley miso, 18 months'). The thing the search flew to is labelled in the smallest type on screen. The same shrink applies at the end of 18.",
      "rootCause": "The selected/search-hit label was moved from the normal canvas label renderer into the compact chip renderer, which uses a fixed small size regardless of zoom.",
      "correction": "Let the chip inherit the canvas label size at the current zoom — keep the orange border as the state marker but set the text at the same ~24 px as its neighbours. The fly-to's promise is 'ends crisp enough to read', and the found node should be the most readable thing in frame, not the least."
    },
    {
      "artifact": "04",
      "severity": "minor",
      "subsystem": "expansion",
      "observed": "The disclosure reads '68 labels hidden · 9 shortened · 47 named by their first letters at this framing'. Measured cap heights are ~10 px ('Ruhlman on ratios' spans 10 px, 'Open crumb myth' 14 px including descender), and roughly 47 labels are three-character stubs — 'Ste…', 'Coi…', 'Who…', 'Bul…', 'Ana…', 'Fuz…', 'Sol…', 'Bal…'. Around twenty of a hundred-plus thoughts are actually readable. Across 03, 04, 10 and 18 the total of not-fully-readable labels is essentially identical to cycle 11 — the stubs replaced hidden labels rather than reducing them.",
      "rootCause": "The label budget was changed to prefer showing a truncated stub over showing nothing, on the assumption that a partial name beats no name. At three characters it does not; it adds ink without adding a thought.",
      "correction": "Set a minimum useful truncation — if the available width cannot fit at least one whole word plus an ellipsis, drop the label to the right-hand list instead of drawing a stub. That trades ~47 stubs for a cleaner map with the same information recoverable at the side."
    },
    {
      "artifact": "19",
      "severity": "minor",
      "subsystem": "canvas",
      "observed": "Between t≈10.0 and t≈12.5, while a node is being dragged out of holding, the dotted holding boundary expands from a left edge at x=537 to x=172 (radius ~308 px to ~673 px), at which size it encircles most of the placed map including several districts, then snaps back to x=537 by t=13.0. I confirmed this is an animation, not a camera move: the holding-cluster region is pixel-identical between t=10.0 and t=12.0 (max diff 24, zero pixels over threshold).",
      "rootCause": "A 'you are leaving holding' affordance implemented as a scaling ring rather than as a state change on the boundary itself.",
      "correction": "Replace the expansion with a static change of state on the existing boundary — brighten the dotted stroke, or dash it differently, while a drag out of holding is active. It conveys the same thing without 2.5 seconds of moving chrome sweeping across placed districts."
    },
    {
      "artifact": "16",
      "severity": "minor",
      "subsystem": "canvas",
      "observed": "During the Double-tap connect (t≈7.5–9.5) the text 'Slide budget: 12' appears twice at once: as the orange selection chip attached under the node at (386,571), and as a grey leader-line callout at (519,551) whose stem runs back to the same node. At a glance the frame reads as two separate nodes carrying the same thought.",
      "rootCause": "The selected-node chip and the leader-line callout are produced by independent label paths and neither suppresses the other when both resolve to the same node.",
      "correction": "When a node is selected, suppress its leader-line callout and let the selection chip carry the text — one label per node, always."
    },
    {
      "artifact": "05",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "The caption asserts 'the map spans 1097.8 px of frame' before and '1187.5 px, x1.08' after, but the coloured node field is clipped by the right edge of the canvas region in both panels (rightmost node pixels at x=639 and x=1599, flush against the list panel), so a viewer cannot put a ruler on the image and check it — unlike artifact 03, where the same style of claim is fully checkable and does check out. Separately, the 'Nothing to undo' chip is painted over 'dist 126.9' in the after panel's hand readout.",
      "rootCause": "The span figure comes from the app's projection maths rather than from anything measurable in the delivered crop, and the toolbar chip and the webcam status block share screen space without a collision test.",
      "correction": "Frame both panels so the full map extent is inside the canvas region, or drop two tick marks at the measured span endpoints so the ruler claim is checkable the way 03's is. And move the undo chip clear of the webcam panel."
    },
    {
      "artifact": "17",
      "severity": "minor",
      "subsystem": "hands",
      "observed": "The pose panel falls to 'unrecognised · hold a pose' at roughly t=11.5 and t=31.5, and the pose chip reads '… · last pose, held' at several further points (t≈7.5, 10.5, 33.5–35.5). Separately, artifact 15's live status chip reads 'status: tracking · spread' while the reference table beneath it and the video both name that pose 'Open palm'.",
      "rootCause": "The recogniser loses the hand across pose transitions in the synthesised clip and the UI falls back to holding the previous pose; and the live status chip is rendering a raw internal pose key rather than the display name from the vocabulary table.",
      "correction": "Widen the pose-transition hysteresis or slow the source clip further through transitions so the vocabulary reel never shows an unrecognised frame; and map the status chip through the same display-name table the reference uses so a demo never shows two names for one pose."
    }
  ],
  "comparisons": [
    { "artifact": "03", "verdict": "improved", "why": "The caption gained a checkable ruler — '×0.928, so a ruler on this image gives 252 px' — and I measured 256 px, with the back-solved device coordinates landing on 249.5 and 377.4 against the stated 253 and 378. Hidden labels fell from 51 to 38 (left panel) and 74 to 54 (right), and the holding boundary changed from heavy rotated dashes to fine dots. Offsetting that, the same total remains unreadable (61 either way on the left panel), with 21 labels now reduced to first letters where 10 were merely shortened." },
    { "artifact": "04", "verdict": "unchanged", "why": "Total not-fully-readable labels is 124 against 121 last cycle — 105 hidden + 16 shortened became 68 hidden + 9 shortened + 47 first-letter stubs, so the map trades cleanliness for stub density at the same information level. The one real addition is the 'Nothing to undo' state chip beside the Grab/Closer/Back/Select buttons." },
    { "artifact": "05", "verdict": "regressed", "why": "Cycle 11 showed a detected 'Open palm' with landmarks and conf 0.95 in the BEFORE and conf 0.96 in the AFTER, with the toolbar chip naming the pose in both. Cycle 12's AFTER reports 'no hand', conf 0.00, tips out 0, with the chip degraded to 'last pose, held' — so the artifact that is supposed to show hands live no longer shows a live detection at the moment of effect. The captions did gain measured, self-critical numbers ('the pose buys distance, not legibility'), which is honest but does not replace the missing detection." },
    { "artifact": "06", "verdict": "improved", "why": "Two more labels render ('Vac…', 'Gla…'), so hidden drops from 8 to 6, and the holding boundary uses measurably half the ink of cycle 11's (0.93% vs 1.87% coverage in a clean band at the same 1.52:1 contrast) — the same meaning carried with less chrome. Eight dashed unplaced nodes still count out against the 'holding 8' chip." },
    { "artifact": "08", "verdict": "regressed", "why": "The story is the same and the coordinate change now reads 2.1,-10.3,3.9 → 2.0,-0.7,2.7 with the label field cleared, but the AFTER frame's chosen drop position puts the node's label chip under the framing-notice panel, which clips the final 't' and the chip border and covers the top of the selection ring. Cycle 11's AFTER, whatever else was wrong with it, showed its label complete." },
    { "artifact": "09", "verdict": "improved", "why": "Cycle 11 drew the edited label as a two-line 24px title that collided with 'Sweet vs savoury paths'; cycle 12 uses a single-line chip and the collision is gone, and the selected node now carries an explicit orange ring in both panels where cycle 11 had only a white double ring. I verified the new filament by sampling the pixel path — background (15) before, a continuous run at 80–133 after — and the coordinates 21.6, 12.6, -7.6 are identical across the edit." },
    { "artifact": "10", "verdict": "regressed", "why": "The found node gained a useful orange selection ring, but its label shrank from 194x23 px to 98x18 px, and three labels that cycle 11 rendered in full ('Biofilm formation', 'Shio koji', 'Bed depth 4cm max') are now stubs. On the rubric's own wording — 'ends crisp enough to read' — the frame reads less crisply than it did." },
    { "artifact": "16", "verdict": "improved", "why": "Same six gestures and same timing, but the map now sits inside a real 1280x1440 portrait device frame matching artifact 03 rather than filling a 1920x1080 landscape canvas, and a legend beside it names every gesture with its operation. The holding boundary's chunky rotated-square dashes are gone. Label size drops slightly as a result (13 px vs 16 px for 'Method of loci'), which is a fair trade for correct device geometry." },
    { "artifact": "17", "verdict": "improved", "why": "Same four poses and same four mouse equivalents, plus two real additions: a dashed target rectangle with 'a fist takes 12 thoughts · Safety and pH' so you see what the fist will take before it takes it, and a live undo readout ('Undo: grabbed 20 thoughts' / 'Nothing to undo') that cycle 11 lacked entirely. I confirmed the grab is a rigid local translation — five district centroids all move by (75.4, -16.4) ±4 px with zero change in the left third of the canvas." },
    { "artifact": "18", "verdict": "unchanged", "why": "Same flight, same landing on centre, and hidden labels drop 13→10, but five labels are now first-letter stubs where cycle 11 showed three of them in full, and the found node's label shrank the same way it did in artifact 10. The gains and losses cancel." },
    { "artifact": "19", "verdict": "improved", "why": "The decisive addition is the coordinate readout holding at 21.9, -14.6, 13.7 across t=13.0 through t=22.9 while other operations happen — proof, not assertion, that a dropped node stays. Hidden labels fall from 61 to 47, and the drag ring's large rotated squares are replaced by fine dots. The 2.5-second ring expansion itself remains and is the take's one piece of gratuitous motion." }
  ],
  "verdict": "This is a build whose claims survive being checked, which is rarer than it sounds and is the main reason both categories clear their minimums. I put a ruler on the hero's gyroscope claim and got 256 px against a predicted 251.5; I back-solved its device coordinates and got 249.5 and 377.4 against a stated 253 and 378. I read the placed node's coordinates off four separate frames of 19 spanning a connect and a search and they never moved; I read them off nine frames of 16 spanning a re-aim, a pinch-zoom and a full gyro sweep and they never moved. I tracked five district centroids through a closed-fist grab and they translated rigidly while the left third of the canvas stayed pixel-identical. Two frames 0.3s apart in a quiet interval differ by nothing. The avoid-list is genuinely respected: no burst on connect (brightness flat through the connect frames), no fog or grid, no ground plane, and a state hierarchy with real luminance separation (0.61 found, 0.44 hit, 0.05 plain) rather than uniform glow — and the holding boundary's chrome was measurably halved this cycle. Both landmarks overshoot their minimums, at six touch gestures and four poses with four demonstrated mouse equivalents, and every environment substitution is declared on the frame itself rather than buried in prose, which is the standard I judged them by since I worked only from the artifacts. What keeps this short of the 90 mark is that the two stills carrying the most weight are the two that let it down. 05 is supposed to prove hand tracking live and instead shows a hand in frame with the recogniser reporting conf 0.00 and the pose chip admitting it is running on a held pose — a straight regression from last cycle, where both panels showed a confident detection. And 08, the placement end-state, has its payload label clipped by a HUD notice painted over it. Beneath those, a policy change has spread three-character stubs across every lens without reducing what is actually unreadable, and the found node's label — the one thing a fly-to exists to deliver — is now the smallest text on the canvas. Fix the timing on 05, move the notice off the chip in 08, give the found node its full-size label back, and drop stubs that cannot fit a whole word, and this set would be very hard to argue with."
}
```