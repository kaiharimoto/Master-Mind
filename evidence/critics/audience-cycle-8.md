# The Audience — cycle 8

*Written here verbatim, as received. Categories: 01 Core workflow (25, min 20) · 02 Landmarks live (25, min 20).*

**Recovery note — this verdict was nearly lost, for the second time.** It was
returned into the builder's conversation and not written down before that
context was cut, which is the exact failure `README.md` in this directory was
written about after cycle 6. It was recovered verbatim from the subagent's own
transcript (`subagents/agent-a07c1df28f6429408.jsonl`, final assistant message,
22 337 characters) rather than reconstructed from memory — a reconstruction
would be a builder-altered critic score under §09. Nothing below is edited.
Everything after the `---` rule at the end is the builder's, not the critic's.

---

I've examined every artifact in my two categories at full resolution, cropped and measured. Verdict below.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 01 Core workflow | 21 | 25 | 20 | Yes |
| 02 Landmarks live | 21 | 25 | 20 | Yes |
| **Total (my two)** | **42** | **50** | **40** | **Yes** |

## Blocking findings

None. Both landmark lenses are operable and demonstrated live, and the capture→place→refind loop is proven end to end. Nothing in my categories is unreachable or staged.

## Major findings

**A1 — artifact 04 — "the entire 100+ node map on screen at once *and legible*" is only half true.**
The whole map is on screen, but I counted **43 of the 150 node labels truncated to an ellipsis** ("Cheese…", "Koji…", "The…", "Rennet…", "Bulk…", "Mold vs…", "Salt…", "Log…", "Carrot…", "Brine…", "Grape…", "Airlock…", "Immersion…", "Vinegar…", "Rice…", "Kombucha…", "Amylase…", "Oxygen…", "Anchovy…", "Coffee cherry cascara…", "Black garlic: 60C for 40…" …). Worse, labels overprint each other into illegibility. Cropping `crop=700:180:900:60` (2100×540 upscale) shows "Ruhlman on ratios" struck through by "Crème fraîche shortcut", "Bacon: microbial succession" reading as "Paper: microbial succession" where the two collide, and "Blue: P. roqueforti" + "Umami stacking" mutually destroyed. Cropping `crop=700:200:900:380` shows "Dechlorinate the water" and "Amylase…" printed on top of one another, and "Miso at 12% salt"/"Shio koji" colliding. MANIFEST claims `labelWorstOverhangPx: 0`, `everyLabelInsideTheFrame: true`, `labelArbiterAgreesWithDraw: true` — all of which measure *frame containment only*. None of them measures label-vs-label collision, so the passing claims do not support the caption's word "legible".
*Fix:* add a label-vs-label overlap term to the same arbiter that already enforces frame containment, and when the solver cannot place a full label, hide it and list it in the "N thoughts on screen without room for a label" panel that artifact 05 already has — rather than drawing a truncated stub that collides.

**A2 — artifact 03 (HERO) — the headline proof cannot be checked from the pixels.**
The caption asserts: *"Sauerkraut by weight" travelled 271 px across the frame (125, −240) while its stored position did not change.* In panel 1 that label is drawn emphasised in bright white with a leader (crop `420:200:110:360`), but **in panel 2 the very node the proof names is truncated to "Sauerkraut by…"** (crop `420:200:1500:170`) and carries no distinguishing marker at all. Measuring the two label anchors I get a displacement of ≈(160, −184), magnitude ≈244 px — the right direction, but I am measuring a decluttered label, not the node, because the node itself is one indistinguishable dot in a 150-dot cloud. The hero therefore *states* its numbers instead of *showing* them.
*Fix:* draw the tracked anchor node with a persistent, identical marker in both panels (a ring plus a full, non-truncated label), and draw the 271 px travel as a ghost-position dot and a vector between the two panels so the audience can read the claim off the frame.

**A3 — artifacts 06 and 10 — labels float free of their nodes, which is fatal for a tool whose story is "space is the memory".**
In artifact 06, cropping `crop=900:250:900:40` I count **10 label strings against 5 visible node markers**. In artifact 10, cropping `crop=650:420:0:130` I count **14 label strings against 4 visible node markers** — "Rye starts fastest", "Autolyse 40 min", "Bulk to 50% rise", "Brettanomyces", "Mold vs yeast ID", "Kahm yeast is harmless" and "Aspergillus oryzae" all sit in open black with nothing to attach to. The frames read as a fog of disembodied text. This directly weakens "search flies to the node *in its actual place*": the place is not legible because the text is not bound to a point.
*Fix:* never draw a label for a node whose marker is not itself drawn in-frame; clamp the label to the frame edge only if its node is also visible, otherwise drop it into the "hidden at this zoom" list.

**A4 — artifact 10 — the search-hit state lights nodes whose visible text does not contain the query, with nothing on screen explaining why.**
Query is `koji`; the app reports 19 hits, 13 in frame. Cropping `crop=560:340:340:600` at 3× shows the search-hit tick signature on four nodes, and the leader from "Barley miso, 18 months" runs down into the largest lit node (the leader passes visibly through the "o" of "miso"). "Barley miso, 18 months", "Amylase plus protease" and "Amazake" contain no "koji". The most likely explanation is that search also matches the node's **Label** field (artifacts 09 and 10 both show `Label: Koji` in the editor) — which is good behaviour, but the frame never says so. A demo audience reads this as a broken search.
*Fix:* on a hit, show which field matched — e.g. tint the label chip on hit nodes, or put "19 hits · 6 in text, 13 in label 'Koji'" beside the search box.

## Minor findings

**A5 — artifact 03, panel 1 — the declared "holding cluster in frame" is not in frame.**
Cropping `crop=1000:340:600:1100` and brightening, the dashed holding ring is cut by the bottom edge and only **two partial held-node markers survive, at y≈1438 of a 1440-tall image**. The eight holding labels are visible but their markers are gone. Panel 2 does show the markers.
*Fix:* pitch panel 1's vantage up ~4° so the ring closes inside the frame, as panel 2's does.

**A6 — artifact 06 — leader lines are too faint to do their job.**
MANIFEST records that 4 of the 8 held labels have a non-own nearest node and rely on a leader ("Recalibrate the pH meter" has `margin: 4.4` px). Cropping `crop=420:220:330:490` and boosting brightness +0.25/contrast 2.2, the leader from "Recalibrate the pH meter" to its node is a barely-visible hairline stub, while the wrong node sits directly beneath the label at full brightness. At demo contrast the attribution reverses.
*Fix:* raise leader-line luminance (and lengthen the stub to touch the label's baseline) whenever `margin` is under ~25 px.

**A7 — artifacts 05 and 17 — the substituted webcam frame is an illustrated hand, not a photograph.**
The substitution is declared cleanly and prominently — "SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER" — and per the brief I do not penalise the lens for it. But the panel shows a flat cartoon hand, so the 21 landmarks look drawn-on rather than detected. Confidence figures (`conf 0.95`, `fan 1.01`, `tips out 4`) are on-frame and vary per pose, which helps.
*Fix:* if a real capture is impossible, use a photographic frame in the Y4M so the landmark overlay visibly sits on real skin and shadow; the honesty label can stay exactly as it is.

## What is strongest

Artifact 19 is the best piece of evidence in the set: the node editor prints the node's own id and coordinates on screen, and I read `nmt1gy13y1mte8 · 21.9, -14.6, 13.7` **identically at t=13.2s (just after the drop), t=20.1s and t=22.4s (after connecting and after being refound by search)** — the position survives the whole loop and the app says so in its own UI, not in a caption. Artifacts 08 and 09 back this with pixel-level rigour: differencing the two panels of 08 (`crop=960:620` at x=0 and x=960) leaves only the moved node, its label, one reflowed neighbour label and the editor text — every other node and filament is bit-identical, so the frozen camera and untouched neighbours are proven, not asserted; the same difference on 09 leaves only the new filament, the recoloured node and the edited fields. And artifact 17 is a genuinely complete landmark demo: four poses each mapped to a different operation, then a mouse-only tail that names all four equivalents on screen (Alt-drag / Scroll up / Scroll down / Left click at 27.7s, 33.8s, 35.9s, 40.0s) with the overlay "cluster Koji · 16 nodes moved together · travelled 17.51 · internal arrangement drift 0.000000". Artifact 16 similarly clears its bar with room to spare — seven captioned gestures spanning selection, connection, capture, placement and two kinds of navigation, with the gyro HUD stepping 3° → 23° → 42° → 60° across the orientation beat. The fly-to lands exactly: measuring "Koji-accelerated garum" in the t=12.0s frame of artifact 18, its centre is at (960, 539) in a 1920×1080 frame — 1 px from centre.

## Regression check

**Nothing in either of my categories got worse.**

- **03, 04, 06, 10 — unchanged, byte-identical to cycle-7** (1391176 / 510932 / 225361 / 349819 bytes respectively; DIFF.json SSIM 1.0000). Worth flagging that this means A1's label collisions in 04 and A3's floating labels in 06/10 have now shipped **unfixed for two consecutive cycles**, but that is stasis, not regression.
- **05 — improved.** Cycle-7 hid 41/30 labels with no way to see what was hidden; cycle-8 hides 17/13 *and* lists every unlabelled thought by name in a side panel. The pose vocabulary was also renamed from "Spread the map"/"Gather the map" to "Move closer"/"Pull back", which stops implying the map itself moves — a direct win against the avoid-list.
- **17 — improved.** Same complete mouse-equivalent tail and drift-0 overlay as cycle-7, but with the clearer camera-not-map naming and far less greyed-out ghost-label clutter.
- **19 — improved substantially.** Cycle-7 ran the arc on the 11-node `map-talk` seed and stopped at placement (its sheet ends at 17.6s with the node dropped). Cycle-8 runs it on the 150-node fermentation map and extends the arc through connect and search-refind with the coordinate readout proving the position held.
- **08, 09 — unchanged in substance, marginally improved.** Cycle-8's 09 is framed wider (≈20 named nodes of context versus ≈8) and cross-references the gesture vocabulary in its tooltip.
- **16, 18 — unchanged.** Same gestures, same durations, same end-states; cycle-8's 18 end frame carries more surrounding labels, and I confirmed the search-hit ring signature at close zoom is identical in both cycles (compared full-res crops of both videos at t=12.0s), so no regression there.

```json
{
  "critic": "audience",
  "cycle": 8,
  "categories": [
    { "id": "01", "name": "Core workflow", "weight": 25, "minimum": 20, "score": 21,
      "reasoning": "The loop is proven, not asserted. Artifact 19 shows the app's own editor printing 'nmt1gy13y1mte8 · 21.9, -14.6, 13.7' identically at 13.2s, 20.1s and 22.4s — across drop, connect and search-refind — so the position genuinely survives the arc; the holding badge steps 8→9 on quick-add and 9→8 on placement in the same take. Differencing the two panels of 08 leaves only the moved node, its label, one reflowed neighbour label and the editor text, proving the frozen camera and untouched neighbours; the same test on 09 leaves only the new filament and the edited fields. The fly-to lands 1 px from frame centre (measured 960,539 in the t=12.0s frame of 18). What holds this back from higher is that the canvas cannot attribute text to place: in a 650x420 crop of 10 there are 14 labels against 4 visible node markers, and in a 900x250 crop of 06 there are 10 labels against 5 markers, so a large part of every frame is disembodied text. Compounding it, several lit search hits carry visible text with no 'koji' in it (the leader from 'Barley miso, 18 months' runs into the largest lit node) with nothing on screen explaining the label match. For a tool whose story is that space is the memory, refinding is the weakest-shown link even though the machinery underneath is clearly right." },
    { "id": "02", "name": "Landmarks live", "weight": 25, "minimum": 20, "score": 21,
      "reasoning": "Both landmarks are operable and demonstrated well past their minimums. Artifact 16 shows seven captioned touch gestures — Tap/Select, Double-tap/Connect, Long-press/Quick-add (holding 4→5), Drag node/Place (5→4), Drag empty/Re-aim, Pinch/Zoom, Gyroscope/Look around — with the gyro HUD stepping 3°→23°→42°→60° across the orientation beat; each is a distinct operation. Artifact 17 shows four recognised poses each on a different map-scale operation, then a mouse-only tail naming all four equivalents on screen (Alt-drag, Scroll up, Scroll down, Left click) with the overlay 'travelled 17.51 · internal arrangement drift 0.000000'; artifact 15 documents the whole vocabulary in one table. Artifact 05's substitution is declared unambiguously on the frame ('SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER') and the operation visibly takes effect — held-cluster marker spacing grows from ~25.5 px to ~30.5 px between panels, matching the reported 148.4→129.5 view distance — so it is scored on honesty and function, and passes both. The deductions are the hero and the big screen: 03's headline claim names 'Sauerkraut by weight', whose label is truncated to 'Sauerkraut by…' in panel 2 and whose marker is undistinguished, so the audience cannot check the 271 px travel; panel 1 clips the holding cluster's markers to the bottom two pixels of the frame; and 04 delivers the whole map at once but with 43 of 150 labels ellipsis-truncated and several pairs overprinted into illegibility." }
  ],
  "findings": [
    { "artifact": "04", "severity": "major", "subsystem": "expansion",
      "observed": "43 of 150 node labels are truncated to an ellipsis, and label pairs overprint into illegibility: 'Ruhlman on ratios' struck through by 'Crème fraîche shortcut'; 'Bacon: microbial succession' reading as 'Paper: microbial succession' where they cross; 'Blue: P. roqueforti' destroyed by 'Umami stacking'; 'Dechlorinate the water' merged with 'Amylase…'; 'Miso at 12% salt' colliding with 'Shio koji'. Measured on crops 700x180+900+60 and 700x200+900+380.",
      "rootCause": "The label arbiter enforces frame containment (labelWorstOverhangPx 0, everyLabelInsideTheFrame true) but has no label-vs-label collision term, so it truncates to fit width and lets neighbours overlap.",
      "correction": "Add a pairwise overlap constraint to the same arbiter, and when a full label cannot be placed, hide it and list it in the 'N thoughts on screen without room for a label' side panel that artifact 05 already implements, instead of drawing a colliding stub." },
    { "artifact": "03", "severity": "major", "subsystem": "ar",
      "observed": "The hero caption claims 'Sauerkraut by weight travelled 271 px (125, -240) while its stored position did not change', but panel 2 truncates that node's label to 'Sauerkraut by…' and gives its marker no distinguishing treatment among 150 dots. Measuring the two label anchors gives ~(160, -184), magnitude ~244 px — right direction, but it is the decluttered label, not the node.",
      "rootCause": "The proof lives in the caption and the manifest rather than in the render; only panel 1 emphasises the anchor label, and nothing marks the anchor node itself in either panel.",
      "correction": "Give the tracked anchor an identical persistent ring and a full, never-truncated label in BOTH panels, and draw its cycle-start ghost position plus a vector so the 271 px travel is legible off the frame." },
    { "artifact": "10", "severity": "major", "subsystem": "renderer",
      "observed": "Labels are drawn for nodes whose markers are not visible. In crop 650x420+0+130 there are 14 label strings and only 4 node markers; 'Rye starts fastest', 'Autolyse 40 min', 'Bulk to 50% rise', 'Brettanomyces', 'Mold vs yeast ID', 'Kahm yeast is harmless' and 'Aspergillus oryzae' sit in open black with no anchor. Artifact 06 shows the same at 10 labels to 5 markers in crop 900x250+900+40.",
      "rootCause": "The label solver clamps labels of off-frame or undrawn nodes into the viewport to satisfy the everyLabelInsideTheFrame invariant, decoupling text from position.",
      "correction": "Gate label drawing on the node's own marker being drawn in-frame; otherwise suppress the label and count it into the hidden-at-this-zoom list." },
    { "artifact": "10", "severity": "major", "subsystem": "canvas",
      "observed": "Query 'koji' lights the search-hit signature on nodes whose visible text contains no 'koji' — the leader from 'Barley miso, 18 months' runs into the largest ticked node (visible passing through the 'o' of 'miso' in crop 560x340+340+600), and 'Amylase plus protease' and 'Amazake' are likewise ticked. Nothing on screen says why.",
      "rootCause": "Search almost certainly matches the node Label field as well as Text (both 09 and 10 show Label 'Koji'), which is correct behaviour, but the match reason is never surfaced.",
      "correction": "Show the matched field on each hit — tint the label chip on label-matches, and put a breakdown beside the search box, e.g. '19 hits · 6 in text, 13 in label \"Koji\"'." },
    { "artifact": "03", "severity": "minor", "subsystem": "ar",
      "observed": "Panel 1's declared 'holding cluster in frame' is not: the dashed ring is cut by the bottom edge and only two partial held-node markers survive at y≈1438 of a 1440-tall image (crop 1000x340+600+1100, brightened). Only the eight holding labels remain visible.",
      "rootCause": "The panel-1 gyro vantage (heading 34°, tilt 62°) puts the holding origin below the near clip of the frame.",
      "correction": "Raise panel 1's pitch by a few degrees so the holding ring closes inside the frame as it does in panel 2." },
    { "artifact": "06", "severity": "minor", "subsystem": "renderer",
      "observed": "Four of the eight held labels rely on a leader because their nearest node is not their own ('Recalibrate the pH meter' has margin 4.4 px). At +0.25 brightness / 2.2 contrast on crop 420x220+330+490 that leader is a barely-visible hairline stub while the wrong node sits at full brightness directly under the label.",
      "rootCause": "Leader lines use a fixed low alpha regardless of how ambiguous the attribution is.",
      "correction": "Scale leader luminance and stub length inversely with the attribution margin — near-zero margin should get a clearly visible line touching the label baseline." },
    { "artifact": "05", "severity": "minor", "subsystem": "hands",
      "observed": "The substituted webcam frame shows a flat illustrated hand rather than a photograph, so the 21 landmarks read as drawn-on rather than detected — though the substitution is declared prominently ('SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER') and per-pose confidence figures vary on screen (conf 0.95, fan 1.01, tips out 4).",
      "rootCause": "The synthetic Y4M clip renders a vector illustration rather than photographic frames.",
      "correction": "Keep the honesty label exactly as is, but render the Y4M from photographic hand frames so the landmark overlay visibly sits on real skin and shadow." }
  ],
  "comparisons": [
    { "artifact": "03", "verdict": "unchanged", "why": "Byte-identical to cycle-7 (1391176 bytes, SSIM 1.0000). The hero's unverifiable anchor claim and clipped panel-1 holding cluster carry over unfixed." },
    { "artifact": "04", "verdict": "unchanged", "why": "Byte-identical to cycle-7 (510932 bytes, SSIM 1.0000). The label truncation and overprinting are now two cycles old." },
    { "artifact": "05", "verdict": "improved", "why": "Hidden labels dropped from 41/30 to 17/13 and the frame now lists every unlabelled thought by name; poses renamed from 'Spread the map'/'Gather the map' to 'Move closer'/'Pull back', which stops implying the map itself moves." },
    { "artifact": "06", "verdict": "unchanged", "why": "Byte-identical to cycle-7 (225361 bytes, SSIM 1.0000)." },
    { "artifact": "08", "verdict": "improved", "why": "Same before/after structure but more filament context around the map skeleton; the panel difference still isolates only the moved node, its label, one reflowed label and the editor text." },
    { "artifact": "09", "verdict": "improved", "why": "Framed wider than cycle-7's near-empty close-up — about 20 named nodes of context instead of about 8 — and the connect tooltip now names the touch-gesture equivalent." },
    { "artifact": "10", "verdict": "unchanged", "why": "Byte-identical to cycle-7 (349819 bytes, SSIM 1.0000)." },
    { "artifact": "16", "verdict": "unchanged", "why": "Same seven gestures, same 34s/30fps, same gyro beat stepping 3°/23°/42°/60°; only incidental hover-tooltip differences." },
    { "artifact": "17", "verdict": "improved", "why": "Same four poses, mouse-equivalent tail and drift-0.000000 overlay, but with the clearer camera-not-map operation naming and far less greyed-out ghost-label clutter than cycle-7's 33/39-hidden frames." },
    { "artifact": "18", "verdict": "unchanged", "why": "Same query, same two hits, same end framing; comparing full-res t=12.0s frames from both cycles the flown node's ring signature is identical, and cycle-8 simply draws more surrounding labels." },
    { "artifact": "19", "verdict": "improved", "why": "Cycle-7 ran the arc on the 11-node map-talk seed and stopped at placement; cycle-8 runs it on the 150-node map and extends through connect and search-refind, with the on-screen coordinate readout 21.9,-14.6,13.7 proving the position held across the whole loop." }
  ],
  "verdict": "This set demonstrates both landmark lenses live and proves the core loop with unusual rigour — artifact 19's on-screen node id and coordinates holding at 21.9,-14.6,13.7 across drop, connect and refind, artifacts 08 and 09 differencing to nothing but the intended change, artifact 17's four poses each with a named mouse equivalent and a drift-0.000000 cluster move, artifact 16's seven distinct captioned gestures with a live gyro HUD. Where it falls short is presentation of place: across 04, 06 and 10 the label layer is the weakest subsystem — 43 of 150 labels truncated and several overprinted into nonsense in the expansion view, and large regions where labels float with no node marker or leader to attach to, which undercuts exactly the 'you remember where a thought was' claim the product is built on. The AR hero compounds this by asserting its 271 px gyro-travel proof in prose while truncating and un-marking the node that proof depends on. Neither problem is disqualifying, and both are fixable in the arbiter that already exists; both categories clear their minimums, and nothing in my categories regressed against cycle 7."
}
```
---

## Builder's note, added after the fact — the comparison section is void

This critic's `comparisons` block reports artifacts **03, 04, 06 and 10 as
"byte-identical to cycle-7", SSIM 1.0000**. That observation is what uncovered
F-030: they were identical because the frozen cycle-7 directory had been
**overwritten with cycle 8's own working copies** by a bad archive step, and the
builder had committed the overwrite. The critic was reading cycle 8's files
under both names.

Consequently:

- **Every regression judgement in the `comparisons` block is withdrawn**,
  including the closing sentence "nothing in my categories regressed against
  cycle 7". It was made against a baseline that was not cycle 7. The critic
  reported honestly on what it was given; the builder gave it the wrong set.
- **Every finding about the cycle-8 files themselves stands** — A1's 43
  truncated labels, the overprinting crops, the label-without-marker counts in
  06 and 10, the unexplained `koji` label-field matches, the clipped holding
  ring in 03. Those were measured on artifacts that were what they claimed to
  be.
- **The scores stand as recorded: 21 + 21 = 42 / 50.** A score is not the
  builder's to adjust (§09), and the corrupted baseline can only have made the
  regression view *more* favourable, never less.
- The frozen cycle-7 set has been restored from `f1d5805` and is now byte-identical
  to it, an external ledger (`evidence/cycles/cycle-7.sha256`) attests to it, and
  the cycle-8 diff re-run against the restored set reports **18 of 20 changed,
  7 substantive** — with 02, 04, 06 and 10 back in the changed list.

See report.md F-030 and `evidence/cycles/README.md`.
