# The Art Director — cycle 9

*Written here verbatim, as received, before any response was made to it.*
*Categories: 05 Quality compliance (10, min 8) · 06 Finder round-trip (5, min 4).*
*This critic owns the delegated "which looks better" call (§04); its rulings are
binding on the builder.*

*Recovered from the subagent's own transcript rather than retyped.*

---

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|:--:|
| 05 · Quality compliance | 8.0 | 10 | 8 | Yes (at the floor) |
| 06 · Finder round-trip | 4.5 | 5 | 4 | Yes |
| **Total** | **12.5** | **15** | — | Yes |

---

## Blocking findings

None. Nothing in the frozen set is fabricated, broken, or on the avoid-list.

## Major findings

**C1 · artifact 02 · `noTwoDrawnLabelsOverlap: true` is false in the pixels.**
Two label collisions survive in the canvas frame while the manifest reports `labelOverlappingPairs: 0`, `labelWorstPairOverlapPx: 0`, `labelTightestPairGapPx: 1.54`.
- At x 1046–1085, y 200–209 two truncated labels are drawn on the *identical* text line, fully superimposed. Row projection of luminance shows one glyph band, rows 200–209, with double ink density; the result is unreadable mush. Both strings are in the frame's own `labelsTruncatedOn` list ("Katz: Wild Fermentation", "Raw milk caution"), so both were drawn and both were in the 66 audited.
- At x 1240–1310, y 286–302, "Umami…" descends into rows 294–295 while "…as a brine starter" ascends into the same rows over columns 1249–1253; the "st" of *starter* is struck through.
Artifacts 04 and 10 are clean at the same test (I ran a merged-glyph-run detector over all three; only 02 produced a genuine collision), so this is one placement path, not the whole engine. **Fix:** run the collision test against the *rendered* glyph boxes after truncation and after the displacement solve, not against the reserved slots; the identical-slot case (two labels assigned one anchor) is not being tested at all. Until that audit is repaired, every other label claim in the set is unverified.

**C2 · artifacts 02, 04 · the cap ruling was honoured, but 56–58% of labels now simply vanish, and only one lens offers recovery.**
02: 84 of 150 labels hidden, 36 more truncated — 30 of 150 (20%) survive intact. 04: 87 hidden, 34 truncated. The displacement cap itself is implemented exactly as I ruled (`labelWorstDisplacementEm: 2.6` in both frames, `labelsFarFromTheirNode: 0` in 02), and the on-frame notice ("84 labels hidden · 36 shortened at this zoom — move closer to read them") is honest. But 04 lists the missing thoughts in a side panel and 02 (`unlabelledListed: 0`) offers nothing at all. Same map, same loss, recovery in one lens only. **Fix:** give the canvas lens the same recovery panel, or a hover/marquee readout on the unlabelled markers.

**C3 · artifacts 02, 04 · truncation stubs are below the information floor and produce collisions of meaning.**
Of the 36 truncations in 02, ~16 retain six characters or fewer — "Log…", "Salt…", "Cold…", "Wild…", "The…", "Rice…", "Beef…", "Blue:…", "Trust…", "Sweet…", "Grape…", "Koji…", "Filter…", "Rennet…", "Solera…", "Muslin…". "Rice…" (Rice vinegar base, azure district) and "Rice koji: polish…" (coral district) are both drawn in the same frame; the stub is indistinguishable from a prefix of its neighbour. A four-character stub costs the same ink and the same collision budget as a full label and returns almost nothing. **Fix:** set a minimum useful length (~10 characters or two words); below it, hide the label and list it, rather than printing a stub.

**C4 · artifact 05 (and the panel introduced in 04) · the unlabelled-thoughts list is drawn over the live map with no opaque backing.**
In 05, list rows "Biofilm formation / Glass weights / Kahm yeast is harmless / Mold vs yeast ID / Cabbage core sugars" sit directly on top of azure district nodes and their filaments; the list's own colour bullets are the same size and shape as the map's node dots, so the two channels are confusable. This also breaks "any UI surfaces matte and minimal" — the panel currently behaves as a transparent overlay. In 04 the same panel escapes the problem only because the map does not reach that column. **Fix:** give the panel an opaque matte ground and reserve its column from the map projection.

**C5 · artifact 04 · the recovery list silently truncates and clips.**
Header reads "87 thoughts on screen without room for a label"; `unlabelledListed: 50`. The 50th row ("Fuzzy mold means discard") is cut mid-descender at y = 1080 with no scroll indicator, no fade, and no "…and 37 more". A reader cannot tell that 37 thoughts are unreachable. **Fix:** bound the list to the frame and terminate it with an explicit remainder count.

## Minor findings

**C6 · artifact 10 · the search-hit signature reserves 11× the node's own area, and that alone displaces every hit's label.**
Profile through the "Amazake" hit at (723, 761): core radius 20 px (saturated to ±20, background at ±22), gap to ±34, tick from ±35 to ±68. Outer radius 68 px, 3.4× the core. Every hit label is consequently pushed ~65 px from centre — `labelWorstDisplacementPx: 57.5`, `labelsFarFromTheirNode: 9` of 13 — in a frame that is more than 80% empty space. The labels read as floating free of their markers not because of competition but because the decoration is oversized. **Fix:** shorten the ticks to ~14 px and pull them to radius 26–40; the crosshair silhouette survives and the label can sit adjacent.

**C7 · artifact 10 · `everyLabelStaysBesideItsNode: true` passes while the same result block reports `labelsFarFromTheirNode: 9`.**
The passing claim is evaluated on the em-normalised cap (2.39 em ≤ 2.6) while the frame's own px counter says nine labels are far. Two thresholds, opposite verdicts, one claim name. The em measure is the correct one (it is what I ruled), so the px counter is the stale half — but a result that contradicts its own claim in the same object is a hygiene failure. **Fix:** delete or re-derive the px counter from the em cap.

**C8 · artifact 14 · the "detail" row is not, in three of four cases, a detail.**
`detailMagnificationsOfAppPixels: [1.04, 0.93, 0.93, 0.68]` — three crops are shown *smaller* than the app's own pixels, and the crop carrying the single most important claim in category 06 ("rejected: still apart") is the smallest at 0.68×. The claim `detailIsMagnified: true` passes on `detailMagnificationFloor: 1.37`, which is magnification *of the shrunken panel above*, not of the app. The headline text is honest about it ("Detail ×0.68"), and the evidence is still legible — I confirmed from the ×2.5 crop that no filament joins "Slide budget: 12" to "Closing: build your own" while both nodes' other links are visible — so this is presentation, not deception. **Fix:** either crop tighter so every detail exceeds 1.0× of app pixels, or rename the claim `detailExceedsPanelScale`.

**C9 · artifact 14 · headline clipped mid-word; detail row flush-clipped at the frame edge.**
"Detail ×1.04 of the app's pixels — t" ends mid-letter at the column boundary. Crops 2 and 3 are cut at y = 1080 with "Demo:" severed mid-label; `detailRowInsideFrame: true` passes because `detailRowBottomPx == 1080` exactly. Cycle 8's headlines ("Detail ×2.09 — the panel") fitted; the cycle-9 rewrite to app-pixel wording is the more honest text but overflows its column. **Fix:** shorten to "Detail ×1.04 of app pixels" and raise the detail row 24 px.

**C10 · artifact 07 · a stray panel is drawn behind the NODE STATES legend, showing only ~10 px of unreadable glyph tops at x 14–142, y 47–62.** Pixel-diff against cycle 8 confirms it is new this cycle; that region was clean before. On the one frame whose entire job is at-a-glance clarity, this is the wrong first impression. **Fix:** close or z-order the underlying panel before capture.

**C11 · artifact 03 (hero) · the inspect chip is printed over the map label it duplicates.** At (520–860, 740–800) an opaque chip reading "Kimchi: gochugaru" bisects the map label "Kimchi: gochugaru", leaving "Kim…aru" visible. Same defect class as C1, on the hero. **Fix:** offset the chip below the node's label band, or suppress the map label while its chip is shown.

**C12 · artifacts 02, 04 · at whole-brain zoom the text is simultaneously the smallest and the lowest-contrast.**
Measured on "Ruhlman on ratios" (02): glyph band 8 rows, x-height 6 px; peak stroke contrast 7.0:1, **median stroke contrast 4.9:1** against a background of relative luminance 0.0047. At reading distance (10, "Koji-kin sourcing"): 23-row glyph band, median stroke contrast 15.4:1. The material is "high-contrast, scale-proof" at the near end only; the far end sits barely above the 4.5:1 small-text floor. **Fix:** raise the far-zoom label alpha so median stroke contrast holds ≥ 7:1 at every zoom — the label budget is already halved by hiding, so the survivors can afford to be brighter.

**C13 · artifact 07 legend vs artifacts 02/04 · "the frontier of a map reads as its most saturated region" does not hold across districts.**
Measured HSV saturation of node cores: bone district (recency 0.47–1.00, i.e. recent) = 0.18; azure (recency 0.41–0.71) = 0.64. Saturation is dominated by hue family, so the stated cross-map reading fails. It *does* hold within a district — in coral I measured the frontier sub-cluster at x 1300–1380 at sat 0.99 (RGB ≈ 163,37,1) against the settled body at 0.83–0.91 (RGB ≈ 133–146,44–47,12–23), a spatially coherent step. The claim `recencyChannelExercised: true` checks only that the chroma span is wide (0.045–0.521), not that recency is legible. **Fix:** reword the legend to "within a district" — the mechanism is sound, the promise is over-stated.

**C14 · category 05 evidence gap · three of the five states are never shown at whole-brain density.**
07 proves all five, but on the 11-node Talk map at reading distance. 02 and 04 — the only 100+ node frames — contain plain and unplaced only. "Legible at a glance from a whole-brain overview with 100+ nodes on screen" is therefore untested for connected, selected and search-hit, and C6 gives reason to doubt the search-hit tick at 4 px node radius. **Fix:** capture one 150-node frame with a selection and an active query.

---

## Which looks better

**Ruling on D-004: organic-bioluminescent. Binding, not to be reopened.**

The two options were the organic-bioluminescent reading (soft self-luminous cores with a falloff halo, warm near-black ground, state carried by luminance) and the restrained-holographic reading (hard-edged outline chrome, flat fills, state carried by geometry). The arbiter test is which keeps the five states legible *and* the space still.

The organic reading wins both halves, measurably. States: I sampled the node cores in 07 independently of the manifest and got a monotonic five-rung relative-luminance ladder — plain 0.074–0.079, connected 0.155/0.177, unplaced 0.272–0.275, search-hit 0.411, selected 0.614 — with a minimum step of 0.092 and a within-rung spread of ≤0.022 *across different hues* (violet 0.155 vs teal 0.177 both read "connected"). Luminance is normalised per state and colour is left free to carry district. A holographic reading would have to spend outline weight on state, which is the one channel that dies first at 4 px node radius, and it would put HUD-like frames back on the avoid-list. Stillness: across 28.5 s of artifact 20, placed-node centroids are identical to under 0.3 px (e.g. (377.0, 1037.1) at t = 1.0, 17.0 and 29.5), plain and connected cores hold relative luminance to four decimal places, and the only motion is the unplaced pulse swinging 0.226 → 0.309 on a ~4 s period — light moving, never position, exactly as the spec permits, and never close enough to another rung to be misread. The ground is RGB (18, 14, 11): warm, near-black, R > G > B, a place rather than blue-purple cyberpunk.

The build is already a disciplined hybrid — organic bodies with geometric state signatures (dashed ring, four ticks, heavy ring). Keep that. The one thing to hold back is the size of those signatures, not their existence (C6).

**Second call: what my cycle-8 cap-and-drop ruling actually cost, and whether I stand by it.**
The two options in front of me now are cycle 8's *relocate-and-keep-all* (150/150 labels drawn, long leaders, many mutual collisions) and cycle 9's *cap-at-2-line-heights-and-drop* (66/150 drawn, 2 collisions left, everything adjacent). **Cycle 9 is right and I stand by the ruling.** Cycle 8's 04 is a wall of overlapping type — "Creme fraiche shortcut" over "Paper: microbial succession", "Blue: P. roqueforti" over "Umami stacking", "Aspergillus oryzae"/"Dechlorinate the water"/"Amylase…" all in one knot — and its 10 flings "Rye starts fastest", "Bulk to 50% rise" and "Kahm yeast is harmless" across the left third of the frame while their nodes are 4 px dots at x ≈ 50–130. It printed 150 labels of which perhaps 100 were readable and perhaps 60 were correctly attributable. Cycle 9 prints 66 of which 30 are complete and all 66 are adjacent to their marker. Fewer, truer beats more, wrong — the defining story is refinding a thought in a place, and a label you cannot attribute to a node is worse than no label.

But the ruling was only half-paid for. What it bought is real; what it cost is being absorbed by three under-designed mitigations — the sub-word stubs (C3), the recovery panel that exists on one lens, overlays the map on another, and silently truncates on a third (C2, C4, C5), and a residual pair of collisions that the audit claims do not exist (C1). The cap is not the problem; the disposal of what the cap displaced is.

---

## What is strongest

The state system is the best thing in this build and it survives independent measurement: five signatures that separate by both geometry and a monotonic luminance ladder whose rungs hold to ±0.02 across eight different hues, so state reads without ever consuming the colour channel that carries district. The finder round-trip is genuinely complete and safe in the pixels rather than in prose — a paste-ready prompt carrying all eleven node ids with `pos` and `placed` plus the rule "Do not move nodes that are already placed. Their positions are deliberate."; a prose-only reply refused with "No JSON found in that reply. Nothing was changed."; a fenced-JSON-with-chatter reply parsed to five staged suggestions with six entries rejected *and the reasons named*; and the holding badge holding at 4 through the rejected placement and dropping to 3 only on the accepted one. And the stillness discipline is exemplary: over 28.5 seconds of video not one placed node moves as much as a third of a pixel, while the only thing that breathes is the one state the spec says may.