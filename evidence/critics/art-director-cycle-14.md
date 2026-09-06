# The Art Director — cycle 14

*Written here verbatim, as received, before any response was made to it.*
*Categories: 05 Quality compliance (10, min 8) · 06 Finder round-trip (5, min 4).*

**8.5 and 4.5 — the highest this critic has scored category 05 in the run.**

**On the reading.** This Art Director rules `restrained-holographic`, as the
cycle-13 one did and from the same measurements: hard-edged discs falling to the
exact ground within 1-2 px, pure background *between* the concentric rings of
the selected state, and a median nearest-neighbour spacing of 11.6 px in the
dense districts where any halo large enough to encode a state would fuse
neighbours. **D-004 records `organic-bioluminescent`, SETTLED, and §09 makes
reopening a recorded decision a failure condition — so D-004 stands and nothing
in the build moves on this line.** Two independent fresh-context critics have
now put the other name on the same pixels, both without access to DIRECTION.md,
and both describing exactly what shipped: a warm near-black ground, no bloom, no
spill, geometry carrying the states. That is worth recording as a fact about
this run and not as an argument for reopening anything.

**Its two majors are specific, closeable, and both are about a thing the build
promises and does not yet do.**

> the detail standard is not met at whole-brain zoom: 87 of 127 nodes in 02
> carry no on-canvas label and not one placed node shows complete text

> the finder never shows a placement land — the type that writes a position, the
> type the 'positions are sacred' story makes most consequential, is proven to
> be refused correctly and proven to be stageable, but the accept branch is left
> on the cutting-room floor

The second is the one I would have wanted a critic to find. Artifact 20 rejects
a placement correctly and stages another, and the take ends with five
suggestions queued — so the one suggestion kind that writes a coordinate is
never seen landing, on the artifact that carries the round-trip category.

**Disclosure.** Artifact 08's Audience fix landed at `0a9ef02` and artifact 09's
restored strict claim at `914a995`, both **after** this freeze. This critic
scored the frozen set, which carries neither.

Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have completed my measurements. Here is my verdict.

```json
{
  "critic": "art-director",
  "cycle": 14,
  "reading": "restrained-holographic",
  "readingReasoning": "Ruled from the frames, not from intent. I took radial luminance profiles through nodes in five different lenses (10 at 1322,675; 07 selected/search-hit/plain; 09 selected teal; 06 unplaced) and every one is a hard-edged disc that falls from full value to the exact background rgb(18,14,11) within 1-2 px, with pure background *between* the concentric rings of the selected state (07 selected: r0-6 = 252..220, r12-20 = 18, r22 = 254, r24+ = 18). There is no bloom, no halo, no glow spill anywhere in the build. The state vocabulary is geometric — thin rings, four N/E/S/W ticks, dashed rings, a dotted holding boundary — not luminous bleed. That is restrained-holographic execution already, and the measurements say it is the right call under the arbiter test. On legibility: the five states form a clean monotone luminance ladder (plain Y=0.055-0.077, connected 0.152-0.178, unplaced 0.217-0.280, search-hit 0.366, selected 0.558) that survives only because nothing washes into anything else; in artifact 02 the detected node blobs have nearest-neighbour spacing of p25 11.6 px / median 17.9 px against node radii of ~4 px, so any bioluminescent halo large enough to encode a state would fuse neighbours across the dense districts. On the space staying still: 1,272,158 of 1,335,900 canvas pixels in 02 are exactly rgb(18,14,11), and the 5th-percentile row and column values are identical top/middle/bottom and left/middle/right — zero gradient, zero fog, zero vignette. The only motion of light I could measure is the unplaced pulse (17-20 grey levels over 4 s) with placed nodes varying 0-2 levels. Bioluminescence, by definition, puts spill and breathing light where this spec wants dark. The one thing the organic reading was there to protect — warmth, a place rather than a void — is already secured by the warm near-black ground (R>G>B) and needs no glow. Restrained-holographic, fixed.",
  "categories": [
    {
      "id": "05",
      "name": "Quality compliance",
      "weight": 10,
      "minimum": 8,
      "score": 8.5,
      "reasoning": "Almost every quality claim I could measure, I measured, and it held. Palette: the canvas ground is a flat warm near-black rgb(18,14,11) with no gradient in any direction and no grid, fog or ground plane; nodes are the only saturated elements inside the map region, spanning eight-plus hue districts whose mean saturation runs 0.29 (settled lacto-violet) to 0.82 (frontier koji-orange), so chroma really does encode age. Links read as neutral warm filaments and genuinely brighten with state: in 07 a link touching the selection or a search hit measures median 100-125, while a plain-to-plain link measures median 34 — a 3.4x separation, exactly as specified. The five states are individually distinguishable and form a monotone luminance ladder (0.06 / 0.16 / 0.24 / 0.37 / 0.56), verifying the on-frame legend's own claim, with plain deliberately the quietest; the same ring/tick/dash vocabulary recurs unchanged in 07, 04, 10, 09, 06 and 03, so the states are consistent across lenses. Materials hold: no cast shadows, no lighting rig, panels matte at rgb(25,20,16), no glass or chrome. Atmosphere holds under measurement: node centroids drift a maximum of 0.27 px across 24 s of video 20, the pulse is confined to the unplaced state (17-20 levels) with placed nodes at 0-2, and accepting a connection changes total map-region energy by 0.04% — no burst, no bounce. Text is crisp at both extremes: glyph edges transition 13 to 231 within 1-2 px at whole-brain and at reading distance, contrast 6.3:1 to 15.5:1, cap heights 14 px at overview rising to 24 px after fly-to, with no LOD blur. The 150-node map reads lived-in: 159 node blobs, nearest-neighbour quartile ratio 2.0 (range 3.7-48.7 px), long cross-district filaments, a partly-full holding cluster, and a GROWN OVER column in 01 separating 36 months from 4 weeks. What holds it back from a 9 is the one criterion this category names explicitly. At whole-brain zoom the build does not deliver node text on the canvas: 02's own strip declares 87 of 127 on-screen nodes carry no label at all, and all 40 that do are either shortened (13) or cut to their opening word (27) — zero placed nodes show complete text; 04 is 82 / 12 / 32. The answer given is a side list occupying 22-23% of the frame, which is honest and well-set but tells you what is on the map without telling you where, which is the one thing this mission's defining story says matters most. Add three smaller frictions — the amber accent doing five jobs at once including one it shares with a user district colour, a UI tab pill that is the most saturated object in artifact 07, and depth-faded filaments bottoming out around 1.02:1 against the ground — and this is very strong work with one named criterion only partly met."
    },
    {
      "id": "06",
      "name": "Finder round-trip",
      "weight": 5,
      "minimum": 4,
      "score": 4.5,
      "reasoning": "I transcribed the exported JSON straight off artifact 13's frame and parsed it: it is valid JSON, 11 nodes each carrying pos [x,y,z] and a placed flag, 6 links whose endpoints all resolve, 4 unplaced whose set is exactly the placed:false set, plus the holding origin and radius — a genuinely paste-ready export that carries every position, with a rule block that names all three suggestion kinds and states 'Do not move nodes that are already placed. Their positions are deliberate.' Copy confirms with 'Prompt copied.' at 3.5 s. Tolerance is proven twice on two different maps: one reply with a prose preamble, a ```json fence, a // comment and unquoted keys, another with a prose preamble and single-quoted values, both parsed. Safety is proven three ways: a prose-only reply yields 'No JSON found in that reply. Nothing was changed.'; the rejection log itemises 6 entries on the small map and 7 on the large one with per-entry reasons including already-placed, self-link, already-linked, unknown id, grouping under two known nodes and non-finite position; and staging is strictly one at a time with a live counter (1 of 5, 1 of 4, 1 of 3, 1 of 1) and the residual queue named beneath. All three card types appear: CONNECTION, GROUPING ('Group 2 nodes as Framing') and PLACEMENT ('Place Timebox to 18 minutes at -5.4, -3.6, -2.2'). I verified the two hardest claims myself rather than trusting the captions. Accept: differencing video 20 at 14.0 s and 16.0 s, a new filament appears between exactly the two named nodes and nowhere else, and both node centroids are unmoved. Reject: the pixel band on the path between the rejected pair is constant (max 183, mean 39.49) at 1.2, 14, 17, 19, 20, 24.7 and 26.5 s — nothing was ever drawn there, and the only map-region pixels that change during the reject windows are the unplaced pulse. The gap that keeps this off full marks is that a placement is never shown landing. One placement is rejected at ~23.5 s, the next is still staged at 26.5 s when the take cuts to the fermentation map, and the second half ends at 47 s with five suggestions still queued — so the one suggestion type that writes a position, the type this mission's story makes most consequential, is proven to be refused correctly and proven to be stageable but never proven to complete, and the holding count never decrements from the finder. The grouping's application rests on a toast alone, since labels are not drawn on canvas at that framing."
    }
  ],
  "findings": [
    {
      "artifact": "02",
      "severity": "major",
      "subsystem": "renderer",
      "observed": "At whole-brain zoom, node text is not on the canvas. 02's own strip declares 87 labels hidden, 13 shortened, 27 named by opening word out of 127 nodes on screen — so of the 40 labels drawn, none shows its node's complete text, and 68% of nodes are unlabelled. 04 is the same shape (82 hidden / 12 shortened / 32 opening-word). The full text is instead moved to a side list that occupies 1490-1910 px of the 1920-wide frame in 02 and 10-440 px in 04, i.e. 22-23% of the frame. The list is grouped by district with counts, matte at rgb(25,20,16), 14.2-14.7:1 contrast — well made, but it carries no spatial information at all.",
      "rootCause": "Label placement appears to be a collision-avoidance pass that hides any label it cannot place without overlap, with overflow diverted to a panel. There is no intermediate tier between 'full label' and 'nothing', and no mechanism that ties a panel row back to its position in the space.",
      "correction": "Add a third tier between drawn and hidden so that at whole-brain zoom every node still carries something spatial — a two-or-three character stem, or the district glyph — placed at the node rather than in a list. Failing that, make the panel spatial: hovering or focusing a row should flash the node's position in the map (a brief ring, not a camera move), so the panel answers 'where' as well as 'what'. That single change would convert the panel from a document element into part of the place, and would let the frame honestly claim the detail standard instead of declaring an exception to it."
    },
    {
      "artifact": "20",
      "severity": "major",
      "subsystem": "finder",
      "observed": "Across the full 47 s take, no placement suggestion is ever applied. At 25.5 s a PLACEMENT card reads 'Place \"Timebox to 18 minutes\" at -5.4, -3.6, -2.2 · next to the slide budget', Suggestion 1 of 1; at 26.5 s it is still staged, the holding badge still reads 4, and the take then cuts to the fermentation map. An earlier placement was rejected at ~23.5 s. The fermentation half ends at 45.8 s with 'Suggestion 1 of 5' and 'Staged, one at a time: connection · connection · connection · grouping · placement' still pending. Connection application I verified myself (new filament between the two named nodes at 16.0 s, node centroids unmoved to 0.27 px); grouping application is asserted only by a toast, 'Applied: Group 2 nodes as \"Framing\" — labels were \"arc\", \"ground\"', with no on-canvas corroboration because labels are not rendered at that framing.",
      "rootCause": "The take's edit budget was spent on breadth — two maps, two messy replies, two rejection logs — rather than on closing one type end-to-end. The placement path is clearly implemented, since the validator rejects malformed and already-placed placements with specific reasons, but the accept branch was never filmed.",
      "correction": "Re-cut or re-shoot video 20 so one placement is accepted on camera: the staged card, the Accept press, the named unplaced node leaving the dotted holding boundary, arriving at the stated coordinate, the holding badge stepping 4 to 3, and — the point of the whole exercise — every already-placed node still at its original pixel. That single beat is the strongest possible proof of the mission's 'positions are sacred' claim and it is the one beat currently missing. While re-cutting, give the grouping accept an on-canvas consequence too (show the affected nodes' labels, or flash the two grouped nodes) so its toast is corroborated rather than trusted."
    },
    {
      "artifact": "07",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "The amber accent at hue 38-39 degrees does at least five different jobs in one frame: the selected-node ring (rgb 112,78,19 at r=22), the active lens tab pill (rgb 201,139,25, saturation 0.77), the holding badge border, the search-field focus border, the selected node's label chip border, and the Accept button in 14/20. It is simultaneously the first swatch in the user's node colour picker (rgb 255,176,32, saturation 1.00), and in artifact 02 an entire district — the sourdough cluster around x 560-900, y 240-360 — is rendered in that same amber. No frame in the set shows an amber node selected, so the collision is untested.",
      "rootCause": "A single accent token was reused for 'system-active' and 'user-selected' and also exposed as a user-choosable node colour, without reserving it from the palette or shifting the selection ring off the node's own hue.",
      "correction": "Either remove amber from the user colour palette and keep it strictly as the selection/active token, or make the selection ring hue-independent of the accent — a neutral bone-white heavy ring would sit at a measured 2-3x luminance above every district colour and would never collide with any of the eight. Then stage one frame with an amber-district node selected to prove the state still reads."
    },
    {
      "artifact": "07",
      "severity": "minor",
      "subsystem": "ui",
      "observed": "The most saturated, brightest non-node object in the frame is a UI element. The active 'Canvas' tab pill measures rgb(201,139,25), saturation 0.77, relative luminance Y=0.30 — brighter and more saturated than four of the five node states (plain 0.06, connected 0.16, unplaced 0.24, search hit 0.37). Counting pixels above value 90 with saturation above 0.45: 2,377 in the top bar and 3,856 in the right panel, against 1,494 across the entire 960x1010 canvas region.",
      "rootCause": "The lens switcher uses a filled accent pill for its active state, which is the loudest available treatment, while the map deliberately uses the quietest.",
      "correction": "Drop the active tab to an outline or an underline in the same amber rather than a filled pill, or halve its value to around rgb(120,84,16). The spec reserves saturation for nodes; chrome should mark state without out-shouting the thing the frame is about."
    },
    {
      "artifact": "02",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "The far end of the depth fade takes link filaments below visibility. Sampling link crossings across rows y=300/420/520/640 of the canvas, the faintest measure rgb(21,17,14) against the ground rgb(18,14,11) — a contrast ratio of 1.02:1. The bulk of neutral non-background pixels sit in the 25-50 value band (about 1.09-1.3:1), with only 3,458 of 62,753 above value 150. Near-field links read clearly as filaments; the deepest ones do not read at all.",
      "rootCause": "Link alpha is driven by the same distance-fade curve as everything else, with no floor, so the tail of the curve lands under the perceptual threshold against a near-black ground.",
      "correction": "Clamp link alpha to a floor of roughly value 32-35 against this ground (about 1.15:1) so the deepest filaments stay just perceptible. The spec asks for both 'fades toward the dark' and 'always visible at every zoom'; a floor satisfies both, where an unclamped curve satisfies only the first."
    },
    {
      "artifact": "13",
      "severity": "minor",
      "subsystem": "finder",
      "observed": "The 'carries the map JSON including every position' claim is shown only for the 11-node map. Artifact 13 is 'Talk — spatial memory', where the textarea happens to fit the whole export and I could read and parse it. In video 20's fermentation half (29-47 s) the same prompt textarea shows only the instruction header — the 150-node JSON is scrolled out of view and never displayed, so for the map that actually matters the claim is asserted rather than evidenced.",
      "rootCause": "The prompt textarea is a fixed-height control that fits a small map's export and clips a large one; no frame was captured scrolled to the MAP JSON section on the large map.",
      "correction": "Capture one frame of the fermentation prompt scrolled to the MAP JSON block, or add a character/node count line under the textarea ('map JSON: 150 nodes, N links, every position included, 41,208 characters') so the frame carries a checkable number rather than a promise."
    }
  ],
  "comparisons": [
    {
      "artifact": "01",
      "verdict": "unchanged",
      "why": "Byte-identical to cycle-13 (same md5). Same two seeded maps at 150 and 11 nodes, same GROWN OVER column, same create/rename/delete triptych."
    },
    {
      "artifact": "02",
      "verdict": "unchanged",
      "why": "Only 5,366 of 2,073,600 pixels differ (0.26%), all of them small patches inside node clusters. positions.json is byte-identical between cycles and my crop comparison at 6x confirms node positions are pixel-identical; the change is a marginal node brightness lift (mean saturated-pixel value 98.5 to 104.7, +6%) with mean saturation flat at 0.68. The label strip is unchanged at 87 hidden / 13 shortened / 27 opening-word, so this cycle's headline weakness in this artifact was not addressed."
    },
    {
      "artifact": "04",
      "verdict": "unchanged",
      "why": "4,015 pixels differ (0.19%), the same marginal node brightness retune in the same clusters. Label counts unchanged at 82 hidden / 12 shortened / 32 opening-word."
    },
    {
      "artifact": "07",
      "verdict": "improved",
      "why": "Cycle-13 stacked three labels into the same 90 px band — 'Method…' at y213, 'Lists flatten meaning' at y256 and 'Opening: where did you park?' at y299 — with the middle two crossing the link web around the selected node. Cycle-14 separates them ('Lists flatten meaning' lifted to y134 clear of everything, 'Opening: where did…' moved left to y218, 'Closing: build your own' to y250), so the search-hit node and its ticks now read against clean ground. The cost is one extra truncation, honestly reported: the strip now reads '1 shortened · 1 named by their opening word' where cycle-13 read '1 named by their opening word'. Net legibility gain."
    },
    {
      "artifact": "10",
      "verdict": "improved",
      "why": "The largest real change in my set (435,549 pixels differ). In cycle-13 the hidden-labels panel sat at the left edge, blacking out roughly the left sixth of the canvas from x0 to x300 and completely hiding the Brettanomyces / Biofilm district. In cycle-14 it has moved to the right, tucked under the node inspector, and shrunk from 10 entries to 8 — so that district and its plain violet nodes are now visible in the space. The found node remains dead-centre at (960,540) with its search-hit ticks and selected ring intact, and label cap height stays 23-24 px at reading distance."
    },
    {
      "artifact": "13",
      "verdict": "unchanged",
      "why": "449 pixels differ across four ~20 px patches, all node brightness in the map at right. The prompt text, the instruction block, the rules and the full MAP JSON are identical — I parsed the cycle-14 export and it is valid, 11 nodes with positions, 6 links, 4 unplaced, internally consistent."
    },
    {
      "artifact": "14",
      "verdict": "improved",
      "why": "Marginal but real: the 'Cut the history section?' label has been moved about 20 px right in all three panels so it no longer crosses the dotted holding boundary, and it has gained a leader line to its node. Everything substantive is identical — same 5-staged queue, same 6-entry rejection log, same links 6 to 7 on accept, same no-trace crop on reject."
    },
    {
      "artifact": "20",
      "verdict": "unchanged",
      "why": "Same take: 1920x1080, 30 fps, 47.000 s, 1410 frames in both cycles. Sampled at 8.2 s, 20.0 s and 45.8 s, only 567 / 377 / 5,352 pixels differ. The same beats, the same two maps, and the same gap — no placement accepted on camera."
    }
  ],
  "verdict": "This is a disciplined, unusually honest build and most of what it claims survives independent measurement. I checked the palette, the state ladder, the link state-brightening, the pulse, the drift and the round-trip's accept and reject paths with my own numbers rather than trusting the captions, and each held: a flat warm near-black ground with no fog or grid anywhere, a monotone five-state luminance ladder from 0.06 to 0.56, links 3.4x brighter when they carry a selected or search-hit state, a pulse confined to the unplaced state while placed nodes vary 0-2 grey levels, node centroids drifting 0.27 px across 24 seconds, and a connection that lands as exactly one new filament with 0.04% change in total map energy and no node moved. I found zero avoid-list violations. The reading question is settled by the same evidence: every node in every lens is a hard-edged disc with zero glow spill, and at 11.6 px median nearest-neighbour spacing in the dense districts a bioluminescent halo would fuse neighbours and destroy the very ladder that makes the states legible — restrained-holographic, warm rather than cyberpunk, and fixed from here. Two things keep this short of full marks. First, the detail standard is not met at whole-brain zoom: 87 of 127 nodes in 02 carry no on-canvas label and not one placed node shows complete text, with the overflow moved to a side panel that says what is on the map but never where, which cuts against the mission's own defining story. Second, the finder never shows a placement land — the type that writes a position, the type the 'positions are sacred' story makes most consequential, is proven to be refused correctly and proven to be stageable, but the accept branch is left on the cutting-room floor with five suggestions still queued when the take ends. Both are single, specific, closeable gaps in work that is otherwise measurably excellent, and neither is a matter of taste."
}
```