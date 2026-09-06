# The Audience — cycle 14

*Written here verbatim, as received, before any response was made to it.*
*Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

**21 and 21 — both above their minimums, one point below cycle 13's 43.**

**The regression it names is mine and it is exact.** Artifact 08's drop target
was a fixed offset until this cycle; I replaced it with a search that maximises
clearance from every other mark, because the pixel readback of the drop kept
landing on a neighbour. Maximising clearance on a map means the void. The
critic: *"the destination reads as 'just outside the waiting area', not as a
chosen home"* — and it is right that this weakens the verb the artifact exists
to prove. A clearance floor with a pull toward the placed graph is the fix, not
a return to the constant.

Its verdict line is the one to work from:

> Fix the drop destination, make a pose buy label room, and get thirty seconds
> of a real hand on camera, and this reaches the bar it is aiming at.

Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have measured everything I need. Here is my verdict.

```json
{
  "critic": "audience",
  "cycle": 14,
  "categories": [
    {
      "id": "01",
      "name": "Core workflow",
      "weight": 25,
      "minimum": 20,
      "score": 21,
      "reasoning": "The loop reads as one designed workflow, and artifact 19 is the proof: I pulled my own frames and followed a single node identity end to end — typed into the always-present top-bar field at 3.0s, Enter at ~4s gives 'Captured into holding — 9 waiting. Drag it out to place it.' with the badge going 8→9 and the panel opening as NODE · UNPLACED, IN HOLDING (id nmt1gy12r1mte8, at -1.3,-38.3,23.3); the node is dragged live through 13.4,-22.9,17.2 at 11.0s; by 15.5s the badge is back to 8, the 'holding' label has cleared and the node sits in the Vinegar district; at 19.5s a query finds exactly 1 hit and at 22.8s the view lands on the same id at 21.9,-14.6,13.7 with the filament it was just given. Capture, place, connect and refind are one continuous act, not four features. 09 is equally tight: same id n99ff69458f and identical coordinates 21.6,12.6,-7.6 in both panels while text, colour and a new filament to 'Shio koji' all change through the editor — 'position untouched' is measurable, not asserted. 10 and 18 end crisp and centred with a real search affordance ('19 hits · 6 in the text · 13 in the label \"Koji\"'), and this cycle's chrome move (label list off the west of the canvas in 09/10/18/19) means the found node now sits in a visible neighbourhood rather than against a blanked panel — c13's 18 buried Brettanomyces, Bed depth and Shio koji behind the sidebar, c14 shows them. Idle stability holds too: 0.005% of pixels change across 0.3s of idle in both 18 and 19, so nothing drifts without a user act. Two things keep this off full marks. 08, the artifact charged with proving placement, does the weakest available version: the node lands ~90px below the holding ring in empty space with no neighbours (2.0,-14.4,4.4), where cycle-13 dropped it up among the placed nodes — the counter decrements and the label clears so the mechanism is proven, but the story of 'a permanent home' is not. And the loop degrades in the mind-expansion lens: 04 hides 82 of ~150 labels and 05 hides 132, so the refind step there collapses into a sidebar list — which is exactly the flattening their own demo node 'Lists flatten meaning' warns about."
    },
    {
      "id": "02",
      "name": "Landmarks live",
      "weight": 25,
      "minimum": 20,
      "score": 21,
      "reasoning": "Both landmarks are operable and the numbers on the frames survive my own ruler. On 03 I located the highlight rings programmatically: the anchor node sits at in-panel x=280.5,y=529.5 at heading 34° and x=397.0,y=308.0 at heading 96° (the AR buttons pin the two panels exactly 1280px apart), giving a travel of 250.3px against the caption's claimed 252px — under 1% off, and the in-panel offsets reduce to 234.5 and 350.8 against the stated 253→378 device-frame positions at the stated ×0.928. The gyro genuinely moves the vantage while stored positions do not change. 16 delivers six touch gestures, one above the minimum, each a visibly different operation and each with a state change I verified rather than took on trust: double-tap arms 'Pick a node…' at 6s and a new filament exists between 'Slide budget: 12' and 'Method of loci' by 10s; long-press pushes holding 4→5 and opens a fresh UNPLACED node; drag places it; drag-empty re-aims; pinch visibly enlarges node spacing at 25-26s; and the tail runs the gyro live at heading 26°/59°. On the Windows side, 17 shows four poses whose detector readouts are genuinely distinct feature vectors — Open palm (tips 4, fan 1.00, ext 5), Gathered hand (tips 4, fan 0.40, ext 5), Two fingers (tips 2, fan 1.36, ext 3), Closed fist (tips 0, fan 0.33, ext 1) — mapped to four different operations, and every one of them has its mouse equivalent demonstrated on camera (scroll up, scroll down, alt-drag, left click). The fist grab carries 'cluster Koji · 16 nodes moved together · travelled 18.18 · internal arrangement drift 0.000000' on-frame and offers 'Undo: moved 16 thoughts', which is precisely the contract the mission demands. What holds the score down is that neither landmark is ever shown against its real input. The webcam panel is stamped SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER, and the manifest agrees (declaredSynthetic true, captureSource a .y4m clip, XNNPACK delegate in the console) — the detector is real and running, the hand it sees is rendered. That is honestly declared and I do not treat it as staging, but no frame answers the first question a demo audience asks, which is 'can I put my hand up?', and no frame shows a low-confidence or no-hand state to prove the classifier is not just consuming an ideal input. Likewise 03/16 run on a Chromium android device profile with 'no camera pass-through', so what is called AR projection is, on the evidence, a gyro-driven 3D vantage in a phone-shaped frame. Finally, the expansion pose's payoff is thin and the build says so itself: Open palm buys view 441.7→383.0, a ×1.11 span, and the caption concedes 'at this framing the pose buys distance, not legibility' with 133 of ~150 labels still hidden after the gesture."
    }
  ],
  "findings": [
    {
      "artifact": "08",
      "severity": "major",
      "subsystem": "canvas",
      "observed": "The dropped node lands at 2.0,-14.4,4.4, roughly 90px below the dotted holding ring on screen and only a few pixels outside it, in empty canvas with no neighbouring node or filament. Cycle-13's version of the same artifact moved the same node (sec77dd4720) from 2.1,-10.3,3.9 up to 2.0,4.6,2.0, landing it among the placed nodes near 'Method of loci'. The mechanism is still proven — holding 4→3, the 'holding' label clears, the framing is pixel-identical between panels — but the destination reads as 'just outside the waiting area', not as a chosen home.",
      "rootCause": "The scripted drag vector for this artifact was shortened or re-aimed between cycles, probably to keep the node inside the composite's visible region or to avoid overlapping the editor panel, and nobody re-checked that the end position still tells the placement story.",
      "correction": "Re-run 08's drag so the node ends inside the placed graph adjacent to a semantically related node — e.g. drop it beside 'Method of loci' or 'Positions are the memory' as cycle-13 did — and add a caption line naming the two nearest placed neighbours at the drop point so the frame shows placement as a decision about where, not merely as exit from holding."
    },
    {
      "artifact": "05",
      "severity": "major",
      "subsystem": "expansion",
      "observed": "The Open palm pose changes view distance 441.7→383.0, a ×1.11 span change, while the label count moves only 18→19 named out of ~150 thoughts; 132 then 133 thoughts remain 'on screen without room for a label' and are listed in a sidebar. The frame's own caption concedes 'at this framing the pose buys distance, not legibility'. Artifact 04 is the same story at rest: 32 labels drawn, 82 hidden.",
      "rootCause": "Label placement is gated on available pixel room at a fixed ~17.5px type size, so at whole-map framing almost every label is suppressed; the hand poses only change camera distance and therefore cannot buy label room at the rate the density grows.",
      "correction": "Make the poses buy legibility, not just distance: bind Open palm to a level-of-detail step that raises the label budget (e.g. draw district-frontier and highest-degree labels first, shrinking type toward 12px) so the frame after the pose shows materially more named thoughts than before, and put the before/after named-count delta in the caption instead of the current admission that there is none."
    },
    {
      "artifact": "17",
      "severity": "minor",
      "subsystem": "hands",
      "observed": "Every webcam panel across 05 and 17 is stamped 'SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER', and the manifest confirms declaredSynthetic:true against a .y4m file. All four poses are held cleanly at conf 0.90-1.00; no frame in the set shows a missed detection, a below-threshold confidence, an empty frame, or recovery from either.",
      "rootCause": "A headless capture container has no camera, so a pre-rendered clip is fed to a real MediaPipe HandLandmarker. The declaration is exemplary; what is missing is any evidence about behaviour outside the ideal input.",
      "correction": "Add one short take — even 5 seconds off a real webcam on the builder's own machine, outside the harness — showing the same four poses recognised, and separately add two frames inside the harness showing the no-hand and low-confidence states and how the UI reports them ('Hands: on · searching'), so an audience can see the classifier has a failure mode and a recovery rather than only a clean replay."
    },
    {
      "artifact": "03",
      "severity": "minor",
      "subsystem": "ar",
      "observed": "The AR lens footer reads 'ANDROID · AR · chromium 141.0.7390.37 · android device profile · real orientation + touch events · no camera pass-through'. The panels show a 3D map in a 1280x1440 portrait frame reoriented by deviceorientation; there is no camera image and nothing anchored to a real surface. The word 'AR' appears in the top bar as a lens name with no on-frame definition of what it means here.",
      "rootCause": "No physical device or camera is available to the capture environment, so the AR lens is implemented and demonstrated as a gyro-driven vantage. This is declared honestly in the footer but the lens label still borrows the stronger word.",
      "correction": "Keep the substitution declaration but add one line of on-frame definition next to the AR chip — e.g. 'AR = the map held in the room's orientation; camera pass-through off in this capture' — so a peer reading the frame knows exactly which half of AR is being claimed, and pair 03 with a single handheld phone photo through the real camera if any device is reachable."
    },
    {
      "artifact": "07",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "The legend defines search-hit as 'four ticks at north, east, south, west' and connected-to-selection as 'one thin outer ring'. At map scale in 07 the ticks are only a few pixels long on a ~6px dot, while in 18's end frame the connected-to-selection rings on the large nodes render as heavy, high-contrast annuli. Side by side, the connected state shouts and the search state whispers, so on a first glance the wrong nodes read as 'the ones I searched for'.",
      "rootCause": "Ring stroke scales with node radius while the tick marks appear to use a near-fixed length, so their relative salience inverts as node size grows.",
      "correction": "Scale tick length and stroke with node radius the same way the ring does, and give the search-hit state a brightness step above connected-to-selection (the legend already promises 'brightness rises down this list' with search hit above connected) so the ordering holds at every zoom, not just at small node sizes."
    },
    {
      "artifact": "19",
      "severity": "minor",
      "subsystem": "canvas",
      "observed": "Every refind demonstrated anywhere in the set is a text query: 'koji' in 10 and 18, 'Rehearse' at 19.5s in 19, 'loci' in 07. Nothing in the evidence shows a thought being refound by navigating back to a remembered region and recognising it — the route the mission's defining story calls the point of the whole tool ('you remember where a thought was').",
      "rootCause": "Search is the easiest refind to capture deterministically, and the harness claims are built around it; spatial recall is harder to stage as a repeatable frame.",
      "correction": "Add one short take that refinds without typing: start at the whole-map framing, gyro or drag toward a district the viewer has already seen (the coral Koji cluster, say), stop, and select the node — with the district name and the node's coordinates on frame at both ends so the audience sees the position, not the query, did the work."
    }
  ],
  "comparisons": [
    { "artifact": "03", "verdict": "unchanged", "why": "Pixel diff against cycle-13 is 0.55%, entirely in label selection (17 vs 18 named left, 9 vs 7 shortened right). The gyro claim, the two headings, the anchor node and the ×0.928 travel arithmetic are identical, and my own measurement (250.3px) validates both cycles' framing equally." },
    { "artifact": "04", "verdict": "unchanged", "why": "0.08% of pixels differ. Same whole-map framing, same mouse-equivalent button row, same 82-hidden / 32-named label split." },
    { "artifact": "05", "verdict": "unchanged", "why": "The hidden-label sidebar moved from centre-right to far left and the caption tightened from 'the map now spans' to 'the same 150 thoughts now span', which is more rigorous. Against that, named thoughts fell from 21→18 before and 24→19 after, so the legibility the caption already apologises for got slightly worse. Net flat." },
    { "artifact": "06", "verdict": "improved", "why": "Cycle-13 showed the holding ring floating alone in empty space with no map around it, which did not satisfy 'in the shared 3D space'. Cycle-14 frames it with the Vinegar and Equipment districts and their filaments overhead, and the waiting count now reads twice — badge 'holding 8' and a 'holding 1' sidebar group — with the eight dashed rings inside the boundary matching the badge exactly." },
    { "artifact": "07", "verdict": "unchanged", "why": "0.68% pixel difference. All five states still coexist and are individually identifiable under magnification (plain dot, thin-ring connected, dashed unplaced, four-tick search hit on 'Method of loci', heavy-ring selected), with the same legend copy." },
    { "artifact": "08", "verdict": "regressed", "why": "Same mechanism proven (holding 4→3, label cleared, framing identical), but the drop destination moved from inside the placed graph at 2.0,4.6,2.0 in cycle-13 to isolated empty space at 2.0,-14.4,4.4 just below the holding ring in cycle-14, weakening the artifact's whole point." },
    { "artifact": "09", "verdict": "improved", "why": "In cycle-13 the hidden-label sidebar sat over the canvas and cut the selected node's label to 'y yolk' / '· aged 60d' and hid the node itself, so the colour change could not be seen. Cycle-14 moves the list right; the coral→teal core, the full label, the new filament and the newly ringed 'Shio koji' are all visible in both panels." },
    { "artifact": "10", "verdict": "improved", "why": "Same fly-to end-state, but the left-hand sidebar that blanked the west third of the canvas in cycle-13 is gone, so the found node now sits among visible neighbours (Brettanomyces, Biofilm formation) — 'in its actual place' now reads from the frame rather than from the caption." },
    { "artifact": "15", "verdict": "unchanged", "why": "Byte-identical to cycle-13. Still the strongest single reference in the set: six touch gestures and four hand poses each with how, operation and mouse equivalent, plus an undo policy that explicitly states nothing ever tidies a layout." },
    { "artifact": "16", "verdict": "unchanged", "why": "Frames at t=5 differ by 0.01%. Identical 34s take, identical six-gesture card, identical 1920x1080/30fps. Verified independently this cycle that tap, double-tap (filament created between 6s and 10s), long-press (holding 4→5), drag, drag-empty and pinch each produce a distinct visible effect." },
    { "artifact": "17", "verdict": "unchanged", "why": "Same 41s take, same four poses, same four mouse equivalents, same on-frame drift badge; only the grab distance differs (17.60 → 18.18) and the label sidebar moved. Both cycles report internal arrangement drift 0.000000." },
    { "artifact": "18", "verdict": "improved", "why": "The end frame's hidden-label count drops from 18 to 10 and the label list moves off the canvas, so at 12.9s the found node 'Koji-accelerated garum' is surrounded by named neighbours (Mold vs yeast ID, Brettanomyces, Bed depth 4cm max, Shio koji) that cycle-13 hid behind the panel." },
    { "artifact": "19", "verdict": "improved", "why": "The arc is the same and equally convincing in both, but cycle-13's left sidebar covered the west of the map through the whole take; cycle-14 relocates it under the node panel where it occludes empty space, so the capture, the drag and the placed neighbourhood are all legible in one frame." }
  ],
  "verdict": "As the audience, I would leave this demo believing the tool. The core loop is one workflow, not a menu of features, and the one artifact that carries it end to end — 19 — is the best thing in the set: a single node identity followed from a typed thought, into the holding ring, out under the cursor with its coordinates ticking, into a district, into a filament, and back again through search, in one uninterrupted take. 09 and 18 back that up with numbers that hold when I check them myself, and this cycle's systematic move of the hidden-label chrome off the canvas is a genuine, non-cosmetic gain: the found node now sits in a place I can see. Both landmarks are live in the sense that matters — I measured the AR hero's own claim and it is true to under one percent, and the four hand poses come with four genuinely different feature vectors, four different operations and four demonstrated mouse fallbacks, with the cluster grab reporting zero internal drift and offering undo. What stops it short of the standard is honesty running ahead of reach in two places and one regression. The hand vocabulary is proven against a rendered clip and the AR against a device profile with no camera; both are declared plainly on the frame and in the manifest, which is the right thing to do and why I have not marked them down hard — but no artifact answers 'can I try it', and no artifact shows either detector failing and recovering, which is the demo moment that would convert a sceptic. 08 regressed into dropping its node into nowhere, weakening the very verb it exists to prove, and mind expansion still hides 132 of 150 labels while the pose that is supposed to help buys eleven percent of distance and, by its own caption, no legibility at all. Fix the drop destination, make a pose buy label room, and get thirty seconds of a real hand on camera, and this reaches the bar it is aiming at."
}
```