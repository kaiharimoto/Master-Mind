# The Art Director — cycle 13

*Written here verbatim, as received, before any response was made to it.*
*Categories: 05 Quality compliance (10, min 8) · 06 Finder round-trip (5, min 4).*

**8 and 4.5 — both above their minimums, and the highest this critic has scored
category 06 in the run.**

**On the reading.** This Art Director rules `restrained-holographic`. The
cycle-1 Art Director ruled `organic-bioluminescent` and that ruling is recorded
as **D-004, SETTLED**. §09 names "a DIRECTION.md decision reopened after it is
recorded" as a failure condition, so D-004 is not reopened and the build does
not change on the strength of this line. The verdict is recorded here unedited,
including the ruling, because a critic's words are not the builder's to adjust.

Two things are worth stating plainly rather than glossing. First, this critic
had no access to D-004 — its brief withholds DIRECTION.md by design, which is
what makes it a fresh-context reading and also what makes it able to contradict
one. Second, the two rulings do not disagree about anything the pixels do: it
rules from measured flat emissive discs with zero bloom and adds its own rider
that the ruling "grants no licence toward cyan, HUD frames or blue-purple
cyberpunk, because the quality section's warm near-black palette (measured bg
18,14,11 with R>G>B in every lens) remains binding". The cycle-1 ruling reached
`organic-bioluminescent` from the same warm near-black ground and the same
absence of planes and chrome. Both describe the frame that shipped; they put a
different name on it. Nothing in the build follows from the name, so nothing in
the build moves.

**What does follow** is three measurements this critic took that no instrument
in the harness takes, and all three are about the detail standard at whole-map
zoom: 87 of 150 labels hidden with only ~23 nodes carrying untruncated text on
the canvas; filaments at **1.12:1** against the ground at whole-brain against
2.67:1 close in; and state marks shrinking to 2-3 px there, leaving luminance —
which the chroma-encodes-age rule makes non-comparable between districts — to
carry the state distinction alone.

Its two artifact findings on 06 and 09 are the same two the Auditor raised, and
the same honest note applies: they measure the **frozen** cycle-13 set, and my
fixes for both land after that freeze, at `8cd7b6b`.

Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have completed my measurements. Here is my verdict.

```json
{
  "critic": "art-director",
  "cycle": 13,
  "reading": "restrained-holographic",
  "readingReasoning": "I ruled from the pixels, not from intent. Measured radial profiles through nodes in 10_search_flyto_end.png and 07_five_node_states.png show flat emissive discs (176→163 over 23px) falling to exact background (14.3) within ~2px, with zero halo, zero bloom and zero volumetric spill; rings, dashed rings and the four search ticks are separate crisp strokes. That is already a geometric, diagrammatic vocabulary, not an organic one. The arbiter test the brief gives me is which reading keeps the five states legible and the space still, and the measurements decide it: the five-state ladder in 07 is monotonic with wide gaps in relative luminance (plain 0.042 / connected 0.152 / unplaced 0.247 / search-hit 0.367 / selected 0.571 against a 0.0047 ground), and that separation only survives because there is no bloom. In 04_mind_expansion.png the Koji district packs 9px cores on 14–20px centres; a bioluminescent halo of even 6px would fuse neighbours and collapse straight into the avoid-list's 'uniform luminance' failure. On stillness, a frame diff across 1.5s of idle canvas in 20_finder_roundtrip.mp4 gives a maximum delta of 13/255 confined to the unplaced nodes' pulse and zero positional change anywhere — the restrained posture is already delivered and measurable. I therefore fix the reading as restrained-holographic, with the explicit rider that this is a ruling about geometry and discipline only: it grants no licence toward cyan, HUD frames or blue-purple cyberpunk, because the quality section's warm near-black palette (measured bg 18,14,11 with R>G>B in every lens) remains binding and is independently honoured.",
  "categories": [
    {
      "id": "05",
      "name": "Quality compliance",
      "weight": 10,
      "minimum": 8,
      "score": 8,
      "reasoning": "Four of the five sub-clauses pass on my own measurements. Avoid-list: nothing found — no grid floor, fog, ground plane, HUD frame or lens flare in any of the twenty artifacts; a 1.5s idle diff of 20_finder_roundtrip.mp4 shows max delta 13/255 confined to the holding cluster (the permitted slow pulse of light) and zero placed-node movement; accepting a suggestion produced a filament and a toast with no burst or bounce. Palette and materials: background measures (18,14,11) — warm near-black, R>G>B, identical across canvas, mind expansion and AR; nodes are self-luminous with no shading, no shadow, no bloom; the only saturated elements are node cores; UI surfaces are matte with no glass or reflection. Five states (07): the ladder is measurably monotonic with clear scatter — 0.042 / 0.152 / 0.247 / 0.367 / 0.571 relative luminance against a 0.0047 ground — and each state also carries a distinct geometric mark, and the same vocabulary recurs unchanged in 03, 04, 06, 09, 10 and 14. Lived-in (01, 02): I measured a genuine age gradient rather than a claimed one — 90th-percentile chroma runs 41 (settled Lacto-vegetables) to 176 (frontier Garum) across districts, with visibly varying density, long cross-district filaments, a partly-full holding cluster, and 01 now carrying a GROWN OVER column reading 36 months / 4 weeks / one sitting. The deduction sits on the detail standard. What text is shown is excellent — 5.9:1 to 12.4:1 glyph contrast, 11px ink height at whole-brain, no LOD blur, no pop-in — but in 02 the frame's own strip says 87 of 150 labels are hidden and 13 more shortened, so only about 23 nodes carry untruncated text on the canvas at whole-brain zoom; the complete right-hand index is a well-designed and honestly-disclosed answer, but it satisfies 'node text legible from a whole-brain overview' with a list rather than with the space. Second, filaments measure 1.12:1 against the ground at whole-brain (peak 27 vs bg 14.3) against 2.67:1 at close zoom, which falls short of 'thin, always visible at every zoom'. Third, at overview zoom the state marks render 2–3px so the read falls entirely on luminance, and luminance is not comparable across districts — a recently-touched plain Koji node measures 0.10 where a settled Microbiology node measures 0.042. Strong and disciplined, but two named clauses of the detail standard are only partly met, so it clears the minimum without margin."
    },
    {
      "id": "06",
      "name": "Finder round-trip",
      "weight": 5,
      "minimum": 4,
      "score": 4.5,
      "reasoning": "This is the strongest thing in the set and I verified it against the pixels rather than the captions. Export (13): the prompt is paste-ready, carries the full map JSON with a pos triple and a placed flag on every node plus the links and unplaced arrays, and I checked three ids against positions.json — s0915039278 [-2.6,6.4,-2.2] and s1020961add [5.8,-1.6,1.4] match exactly, s13669df17f rounds 0.869/-8.496/0.944 to two places. The rules block explicitly states 'Do not move nodes that are already placed. Their positions are deliberate.' Tolerant parse (20): at 3.5s the clipboard is proved by pasting it back; at 7–10.5s a prose-only reply produces 'No JSON found in that reply. Nothing was changed.' with the map untouched; the accepted reply carries prose preamble, a ```json fence, JSON comments and trailing chatter and still parses; and 6–7 malformed entries are rejected with specific reasons — self-link, already-linked, unknown node, non-finite position, under-sized grouping, and 'that node is already placed — placed positions are not the finder's to change'. Staging (14, 20): 'Suggestion 1 of N · nothing is applied until you accept', one card at a time, the footer naming the kinds still queued, and all three kinds actually accepted — a connection at 17.6s, a grouping at 21.5s ('labels were arc, ground'), and a placement at 26.8s which decrements the holding badge 4→3. Safety on rejection is the part I proved hardest: on the 150-node map a frame diff across the reject at 43.1s vs 45.5s gives literally zero changed pixels above threshold 4 across the entire non-holding canvas, while the accept at 39–43.2s adds exactly one ~90px filament segment between the Microbiology and pH districts. Artifact 14's ×0.95 before/after crops confirm the pair joins with every other node pixel-identical, and the ×0.69 crop confirms the rejected pair stays apart. One defect keeps this off full marks: between t≈34.0 and t≈35.5 the panel shows a freshly generated 'Fermentation notebook' prompt sitting above a rejection log that still lists Talk-map nodes that do not exist in that map. It can never cause a wrong write — no card is staged in that window — but it is stale cross-map state in the one panel whose entire premise is that its record is trustworthy."
    }
  ],
  "findings": [
    {
      "artifact": "02",
      "severity": "major",
      "subsystem": "renderer",
      "observed": "The frame's own strip reads '87 labels hidden · 13 shortened · 27 named by their opening word at this framing'. Of 150 nodes, only about 23 carry untruncated text on the canvas at whole-brain zoom; the remaining text lives in a right-hand index panel. 04_mind_expansion.png repeats this with 82 hidden. Both indexes are internally consistent (district counts sum to 87 and 82 respectively), so the disclosure is honest, but the space itself is not carrying the text.",
      "rootCause": "Label placement appears to be a strict non-overlap solver at a single type size with a hard drop when no collision-free slot exists, and layouts are correctly never auto-tidied, so at 150 nodes the solver runs out of room and offloads wholesale to a list.",
      "correction": "Give the solver more to work with before it drops a label: a second, smaller type size for lower-priority nodes, short leader lines to push labels off crowded centres, and a priority order (district anchors, recency, degree) so the nodes that carry the map's geography always keep on-canvas text. Target on-canvas coverage well above 40% at whole-brain so the index becomes a supplement rather than the primary text channel."
    },
    {
      "artifact": "02",
      "severity": "major",
      "subsystem": "renderer",
      "observed": "Link filaments peak at luminance 27 against a 14.3 background at whole-brain zoom — a measured contrast ratio of 1.12:1. The same filaments measure 2.67:1 at the close zoom of 07_five_node_states.png. A luminance histogram over the canvas confirms the bulk of link pixels sit between 15 and 30.",
      "rootCause": "Link alpha and width almost certainly scale with world-space distance, so at whole-brain framing a 1px anti-aliased line ends up only partly covering its pixels and lands a few levels above the ground.",
      "correction": "Floor link rendering in screen space: clamp effective alpha and stroke width so a filament never falls below roughly 1.6:1 against the near-black at any zoom, and let the brightening for selected and search-hit states ride on top of that floor rather than the raw distance falloff."
    },
    {
      "artifact": "07",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "The state marks that the legend makes load-bearing render very small at overview zoom. In 04_mind_expansion.png a search-hit node's core is 8–9px with ticks about 2px wide and 3px long at 2.6:1 against the ground, so at 1x the state is read almost entirely from brightness. Brightness is not comparable across districts: a recently-touched plain Koji node measures 0.10 relative luminance where a settled Microbiology node measures 0.042 and a connected-state node in 07 measures 0.152 — so a bright plain node can outshine a quiet lit one in another district. The legend admits this in its own footnote.",
      "rootCause": "The tick and ring geometry appears to scale with node radius, which itself scales with zoom, so at overview the shape channel shrinks below the point where it can carry the distinction and the luminance channel is left alone with a job the chroma-encodes-age rule already complicates.",
      "correction": "Scale-lock the state marks in screen pixels — a minimum 4–5px tick length and 1.5px stroke regardless of node radius — so shape stays the primary state channel at every zoom and luminance becomes the confirming one rather than the only one."
    },
    {
      "artifact": "20",
      "severity": "minor",
      "subsystem": "finder",
      "observed": "Frames at t=34.1, 34.5, 35.0 and 35.5 show the prompt textarea already reading 'You are helping organise a 3-D idea map called \"Fermentation notebook\"' while the panel below still displays '6 entries rejected' naming 'Positions are the memory', 'Method of loci' and 'Demo: search fly-to' — nodes that exist only in the Talk map. The reply textarea likewise still holds the previous map's reply. It clears once a new reply is typed and parsed. Cycle 12 shows the identical behaviour at the same point, so this is carried over, not new.",
      "rootCause": "The parse-result state (rejection log, staged queue, reply buffer) is scoped to the finder panel rather than to the active map, so regenerating the prompt for a new map does not invalidate it.",
      "correction": "Clear the reply buffer, the rejection log and any staged queue whenever the active map changes or a new prompt is generated, so the panel can never display a verdict about a map it is no longer pointed at."
    },
    {
      "artifact": "09",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "The right-hand caption states 'colour teal · text \"Koji-cured egg yolk · aged 60d\" — both changed through the panel, position untouched'. The edited node is cropped outside the left edge of the frame in both halves — only its label box edge is visible — and every node actually rendered in either half is coral or red. The colour half of the claim is not shown anywhere in the frame.",
      "rootCause": "The composite was framed on the connection target ('Shio koji') rather than on the node being edited, so the subject of the colour claim fell outside the crop.",
      "correction": "Reframe both halves so the edited node sits inside the crop with its new colour visible, or add a small inset at app pixel scale showing the node before and after the swatch change."
    },
    {
      "artifact": "06",
      "severity": "minor",
      "subsystem": "canvas",
      "observed": "The cycle-13 frame contains the holding cluster and nothing else — eight dashed unplaced nodes inside a large dotted boundary circle on empty ground, with no placed node anywhere in view. The cycle-12 version kept the Equipment district (Digital scale, Cambro for volume, Label tape, Cheap pH meters drift) in the upper frame.",
      "rootCause": "The recentre that won complete labels for all eight unplaced nodes also zoomed past every neighbouring placed node.",
      "correction": "Pull the vantage back enough to keep at least one adjacent district's nodes and a cross-link in frame, so the holding cluster reads as a region of the shared space rather than an isolated diagram on black."
    },
    {
      "artifact": "14",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "In the ×1-app-px detail row, audit chips are clipped mid-word at the crop boundaries — two chips read '1 nam' at roughly (927,711) and (1407,711). The same clipping appears in the cycle-12 version.",
      "rootCause": "The detail crops are taken at fixed pixel rectangles that happen to bisect the on-frame audit chip.",
      "correction": "Snap detail-row crop boundaries to element edges, or suppress the audit chips inside detail crops since the full-scale panels above already carry them."
    }
  ],
  "comparisons": [
    { "artifact": "01", "verdict": "improved", "why": "A GROWN OVER column has been added reading '36 months' / '4 weeks' / 'one sitting' beside the 150 / 11 / 0 node counts — a real age signal that makes the seeded maps read as grown rather than generated. Otherwise the create/rename/delete triptych is identical, including the same faint 50x2px stray bar at the top right of each panel." },
    { "artifact": "02", "verdict": "improved", "why": "The right-hand index is now complete in two columns across all ten districts plus holding, where cycle 12 elided it with '…and 43 more' after four districts. Shortened labels are now whole opening words ('Stiff levain…', 'Leuconostoc…', 'Sauerkraut…') instead of cycle 12's cryptic three-letter stubs ('Ste…', 'Coi…', 'Who…', 'Ana…'). Hidden count rose 81→87, but every hidden item is now findable. Filament contrast and node palette measure identically in both cycles." },
    { "artifact": "04", "verdict": "improved", "why": "The index moved from a cramped right column truncated at '…and 50 more' into a full-height left panel listing all 82 hidden thoughts with per-district counts, and the label stubs became opening words. The trade-off is that the panel now claims about 440px of canvas width, so the map draws smaller — but it still fits entirely on screen, which is the artifact's own requirement." },
    { "artifact": "06", "verdict": "regressed", "why": "Cycle 12 framed the holding cluster with the Equipment district visible above it, so it read as a region of the shared 3D space; cycle 13 recentres onto the cluster alone against empty ground. Labels for all eight unplaced nodes are now complete (1 hidden vs 6), so this is a trade, but the artifact's own premise — 'in the shared 3D space' — is weaker in the new frame." },
    { "artifact": "07", "verdict": "improved", "why": "Node text is markedly more legible: 'Lists flatten meaning' and 'Opening: where did you park?' now render in full where cycle 12 truncated them to 'Lists flatten…' and 'Opening: where…', and the selected node's label is now a properly sized outlined box rather than a small chip. The five-state signatures and the measured luminance ladder are unchanged between cycles." },
    { "artifact": "10", "verdict": "improved", "why": "The selected node's label is now a large legible box, and the hidden-label index is grouped by district with full entries ('Salt tolerance curve', 'Koji-cured egg yolk') where cycle 12 gave a shorter ungrouped list. The cost is that the new left panel is opaque over canvas that cycle 12 showed (the Brettanomyces and Biofilm formation nodes), and the hidden count rose 7→10 because the panel consumes canvas." },
    { "artifact": "13", "verdict": "unchanged", "why": "The exported prompt is byte-for-byte equivalent in content — same instructions, same three-kind schema, same rules block including 'Do not move nodes that are already placed', same MAP JSON with all eleven nodes and their positions. Only the canvas framing behind the panel shifts by a few pixels." },
    { "artifact": "14", "verdict": "improved", "why": "The detail-row crops now show full node text ('Positions are the memory', 'Closing: build your own') where cycle 12 truncated them to 'Positions are the…' and 'Closing: build your…', and the rejected crop was retuned from ×0.63/764x640 to ×0.69/698x586 for a tighter read on the unjoined pair. The three-panel structure, the rejection log and the accept/reject proofs are otherwise the same." },
    { "artifact": "20", "verdict": "improved", "why": "The take extends 41s→47s to carry a complete accept-and-reject through on the 150-node map rather than only staging there, and I could measure the result: the accept adds exactly one filament segment and the reject changes zero pixels across the entire non-holding canvas. The prose-only 'No JSON found' safety case and the clipboard proof are present in both cycles at the same timestamps, and the ~1.5s stale cross-map rejection log is present in both." }
  ],
  "verdict": "This build is disciplined where discipline is measurable, and I could verify almost every quality claim myself rather than take it on caption. The palette is a single warm near-black (18,14,11) held identically across canvas, mind expansion and AR; nodes are flat emissive discs with zero bloom and no shading; the five-state ladder is monotonic with wide, measured gaps and a distinct geometric mark per state that recurs unchanged in every lens; the avoid-list is genuinely clean, with the only motion in an idle canvas being a ≤13/255 pulse on unplaced nodes and no positional drift anywhere; and the lived-in claim survives measurement, with district chroma running 41 to 176 at the 90th percentile alongside visibly varying density and a partly-full holding cluster. The finder round-trip is the best-evidenced subsystem in the set: positions verified against positions.json, a prose-only reply safely refused, a fenced-and-commented reply parsed with six specific rejections, all three kinds staged one at a time and all three accepted with real state consequences, and a rejection on the 150-node map that I confirmed changed literally zero canvas pixels. What holds it back is the detail standard's own promise that inspection survives at every distance. At whole-brain zoom 87 of 150 labels are hidden and only about 23 nodes carry untruncated text on the canvas, so the text requirement is met by an index rather than by the space; filaments fall to a measured 1.12:1 against the ground at the same zoom; and the state marks shrink to 2–3px there, leaving brightness alone to carry a distinction that the chroma-encodes-age rule makes non-comparable between districts. Those are the three things standing between this and a frame that needs no footnote. Cycle 13 is a real advance on cycle 12 — the truncation stubs became opening words, the elided indexes became complete, the finder loop now closes on the big map — and the honesty of the on-frame audit strips is a genuine asset, but honesty about a gap is not the same as closing it."
}
```