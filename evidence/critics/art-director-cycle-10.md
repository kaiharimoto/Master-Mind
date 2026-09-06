# The Art Director — cycle 10

*Written here verbatim, as received, before any response was made to it.*
*Categories: 05 Quality compliance (10, min 8) · 06 Finder round-trip (5, min 4).*
*This critic owns the delegated "which looks better" call (§04); its rulings are binding.*

**12 of 15, both categories exactly at their floor.**

**Cycle 10 totals 82.0 / 100 — 21 + 20 + 17 + 12 + 8 + 4 — down from 85.5, with
category 04 below its minimum for the second cycle running.** The cycle is a
regression, and three of the four Audience findings behind it were caused by
cycle 9's own fixes.

*Recovered from the subagent's own transcript rather than retyped.*

---

I've examined every artifact in my two categories at pixel level, plus the cycle-9 counterparts, and measured rather than assumed.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 05 Quality compliance | 8 | 10 | 8 | Yes (at the floor) |
| 06 Finder round-trip | 4 | 5 | 4 | Yes (at the floor) |
| **Total (my two)** | **12** | **15** | **12** | **Yes** |

**05 reasoning.** The rendering core is genuinely excellent and I verified it independently rather than trusting the manifest. Sampling node cores in `07_five_node_states.png` I measured the state ladder at luma709 0.300 / 0.428 / 0.568 / 0.682 / 0.807 for plain / connected / unplaced / search-hit / selected — monotonic, minimum step 0.114, within-rung spread ≤0.002, and it holds across six different hues (plain ochre 96,75,35; plain amber 110,74,7; plain bone 84,76,61 all land at 0.300). Chroma runs orthogonally as age (within the amber district saturation spans p10 0.27 → p90 0.75 while luma stays pinned). Background is (18,14,11), warm, R>G>B, no fog, no grid, no ground plane, no bloom halos, no decorative chrome anywhere. Node text measures 9.2:1 at whole-map and 15.5:1 at reading distance, 10px→24px. And the headline defect of cycle 9 is genuinely gone: cycle-9 `02` drew "Raw…" and "Kefir…" exactly superimposed while claiming `labelOverlappingPairs: 0`; cycle 10's tightest pair is a clean 3.5px gap. What holds the score at the floor is that the cycle-9 charge — pay for what the cap displaces — is answered in **one** lens only, the disposal surface itself is the least legible text in the build, and the new furniture introduced a legibility regression that falsifies a shipped claim.

**06 reasoning.** The harness is complete and honest. `13` carries the whole map JSON with `"pos":[x,y,z]` and `"placed"` for all 11 nodes, holding origin/radius, the unplaced id list, and the rule "Do not move nodes that are already placed. Their positions are deliberate." — at 8.96–13.7:1 contrast. `20` shows a prose-only reply refused with "No JSON found in that reply. Nothing was changed.", then an adversarially messy reply (prose preamble, ```json fence, comments inside the JSON, trailing prose) parsed to 5 staged and 6 dropped with named reasons including "placed positions are not the finder's to change". Suggestions stage one at a time under "nothing is applied until you accept", all three kinds appear, and I confirmed the rejection numerically: along the segment between the rejected pair in `14` the pixel maximum is a flat 43 RGB-sum, identical to background — no trace. The deduction is that the one panel whose entire job is to show the accept landing does not show it visibly.

## Blocking findings

None. No avoid-list item appears anywhere in my artifacts, and nothing in these frames is unusable.

## Major findings

**C1 — artifacts 04, 10 (and 07). The new labels-hidden pill buries the search-breakdown pill; a named claim is true in the model and false in the pixels. Regression.**
In `10_search_flyto_end.png` the pill "7 labels hidden · 1 shortened at this zoom" is drawn on top of and offset down-right from "19 hits · 6 in the text · 13 in the label 'Koji'". Only the characters `19 hit` survive. Same in `04_mind_expansion.png` ("105 labels hidden…" over the identical string). The manifest for `10` asserts `searchMatchReasonShown: true` and `04` reports `onFrame.searchBreakdown` as the full string — both check the DOM, not the frame. In cycle 9's `10` that pill stood alone and was fully readable, so this is a regression caused by cycle 10's own disposal furniture. (`07` has the same class of bug — its top-left pill is clipped by the NODE STATES panel — but that one predates this cycle.)
*Fix:* put the HUD pills in one flow container that stacks rather than overlaps, and give the claim a pixel test — sample the pill's own bounding box and fail if another surface occupies >5% of it.

**C2 — artifact 04. In the expansion lens the disposal does not exist; coverage moved rather than grew.**
`04` hides 105 labels and reports `unlabelledListed: 0` — no rail, because the right rail is taken by the node inspector. `02` hides 109 and lists 47. In cycle 9 the arrangement was the mirror image (`04` listed 50, `02` listed 0). Net across two cycles: exactly one of the two whole-map lenses ever carries the disposal. That is a per-shot addition, not a system behaviour, which is why I judge the disposal only two-thirds paid for.
*Fix:* make the rail a lens-independent surface that coexists with the inspector — stack it below the inspector in the same rail, or collapse it to a count chip that expands over the inspector — so the number of hidden labels is never disclosed without a route to them.

**C3 — artifact 02. The rail is the least legible text in the build, by a factor of three against the labels it replaces.**
The list rows render at modal stem (90,81,74) and peak (110,100,91) on a (25,20,16) ground: **2.3:1 modal, 3.17:1 at the brightest pixel**. Cap height measured off the "L" of "Lactobacillus plantarum" is **8px** (rows y153–160), row pitch 18px. The node labels this rail stands in for measure **9.2:1** in the same frame, and the prompt body in `13` measures **8.96–13.7:1** — so the build demonstrably can render high-contrast small text and chose not to here.
*Fix:* lift the row colour to at least 4.5:1 against (25,20,16) — roughly (150,142,132) — and raise the size to a 10px cap. The header at 6.3:1 is already close; the rows should not be dimmer than the thing they substitute for.

**C4 — artifact 02. The rail is an inventory, not a locator; it names 43% of what it disposes.**
I counted the colour dashes: 47 rows, then "…and 62 more" — 109 total, matching the pill. So 62 of 109 hidden thoughts are unreachable in this frame, in no visible order, with no district grouping, and no in-frame route to them. Each row carries a name and a 3px colour dash but nothing about *where*. For a product whose defining story is "space is the memory… finding and refinding a thought matters more than creating new ones", a list stripped of place is the wrong disposal.
*Fix:* group the rail by district under the district's colour (the data is already there — `04` reports eight districts by name), which converts a flat 109 into eight short scannable groups and restores geography; and make a hovered row raise its node's luminance rung so the list points back into the space.

**C5 — artifact 10. The leader lines that pay for displacement in 02 are absent at reading distance, exactly where displacement is largest.**
`02` draws real leaders — I confirmed a hairline running from the bone node up-right to "Mesophilic…" and a vertical one down to "Whey as a brine…", both brighter than the graph filaments and terminating at the label. `10` draws none: at gamma-boost the region around "Brettanomyces / Lactobacillus plantarum / Biofilm formation" shows six identical 5px purple markers and no connector. Measuring label-centre to marker-centre, the nearest/second-nearest distance ratios are **0.84, 0.67, 0.71** — genuinely ambiguous. The manifest concedes `labelsMoreThan40pxFromTheirNode: 10`, worst 58.2px, while still passing `everyLabelStaysBesideItsNode: true` — that claim measures a distance ratio in em (2.42em, inside my two-line-height cap), not an unambiguous binding, which is a claim checking something other than what its name says.
*Fix:* trigger the leader on **ambiguity**, not on displacement — draw it whenever nearest/second-nearest marker distance exceeds ~0.6 — and rename the claim to `everyLabelUnambiguouslyBound`, with that ratio as the test.

**C6 — artifact 14. The panel that exists to show the accept landing does not show it.**
The "Detail ×0.95 — accepted: joined" caption promises "a filament now runs between Lists flatten meaning and Opening: where did you park?". Sampling 200 points along the segment between the two node centres: **before** gives a flat RGB-sum of 43 (pure background), **accepted** gives median 74, minimum 64 — so the filament is real, but at roughly (26,25,23) against (15,14,14) that is **1.10:1**. I could not see it by eye at ×0.95 and only confirmed it numerically. In a composite whose whole argument is before/after, the difference has to survive a glance.
*Fix:* in the accepted panel render the just-applied link at the brightened "carries a selected state" weight — the app already has that treatment — or hold a brief post-accept highlight on it and crop the detail from that frame.

## Minor findings

**C7 — artifacts 02, 04, 10. Plain filaments sit at the edge of visibility.** Link cores measure (26,21,17) and (29,23,19) against background (18,14,11): **1.06–1.09:1**. The spec asks for links "thin, always visible at every zoom"; 11 luma steps out of 255 reads in a dark room and vanishes in daylight or after video compression. Unchanged from cycle 9, so a standing condition rather than a regression. *Fix:* raise the base filament to ~1.25:1 (about (38,32,27)) — still faint, still subordinate to the node states, but robust.

**C8 — artifacts 14, 20. The rejection log truncates without a route.** "6 entries rejected" names four and ends "+2 more", with no expansion control in frame. The two unnamed drops are the most interesting part of a tolerant parser's evidence. *Fix:* show all six, or make "+2 more" a control and capture it expanded.

**C9 — artifact 01. Stray scrollbar-thumb artifacts and a 1400px dead gutter.** A ~50×3px light bar sits at (1737,46), repeated at y=407 and y=767 — one per composited panel, a horizontal scrollbar thumb caught in the shot. Separately, map name and its row buttons sit ~1400px apart with nothing between. Byte-identical to cycle 9. *Fix:* hide overflow scrollbars in capture; cap the table at ~1100px and left-align.

**C10 — artifact 02. The marker-visibility claim's threshold is set below any usable bar.** `markerContrast.threshold` is **1.45:1** — below the contrast at which I judged the plain filaments marginal (C7). The measured worst was 3.0:1 so nothing actually slipped through, but the guard as written would pass an invisible marker. *Fix:* raise the threshold to 2.5:1. (Also trivial: `unlabelledListed: 48` against 47 rows I counted on the frame.)

## Which looks better

**Ruling on D-004 — the overall reading is organic-bioluminescent. Binding, not reopened.**
The two options were organic-bioluminescent (soft self-luminous cores on a warm charcoal ground) versus restrained-holographic (state carried in outline, edge and structure). The arbiter test is whichever keeps the five states legible and the space still. Legibility decides it on measurement: the state system *is* a luminance ladder — 0.300 → 0.807 across five rungs with a minimum step of 0.114 — and that ladder needs a luminous fill to exist. The geometric half of the signature is already the fragile half: cropping the koji cluster in `04` at 1:1, the four search-hit ticks are marginal at a 5–7px node while the fill luminance still separates cleanly. A holographic reading would put the entire load on exactly the channel that fails first at whole-map density. Stillness confirms it: the only motion in the spec is the unplaced pulse, which moves light and not position, and holographic vocabulary is the one that invites the HUD frames, scanlines and grid floors the avoid-list bans. The build has already made this choice correctly; I am fixing it. The constraint that comes with the ruling: glow may only ever move a node up a luminance rung — no halo, bloom or ambient wash that encodes nothing.

**Second call — the disposal of a hidden label is a district-grouped, located rail, not a flat inventory.** The two defensible treatments were the flat named list shipped in `02` and a grouped, position-linked rail. I rule for grouping. The flat list is defensible in isolation, but it is 109 items long, it names 43% of them, and it discards the one attribute this product treats as sacred — where the thought is. The colour dash on every row proves the district is already known at render time; grouping under it costs nothing and turns an unreadable 109 into eight scannable neighbourhoods that still say *where*. This is the concrete difference between disclosing a cost and paying it.

**Third call — the displacement cap stands at ~2 line-heights, but the trigger for a leader changes from displacement to ambiguity.** Cycle 8's cap is honoured (2.42–2.63em measured across `02`, `04`, `10`) and I am not loosening it. But `10` shows the cap alone is insufficient: a label can sit inside the cap and still be unreadable as a binding when six identical markers are within its radius. Ambiguity, not distance, is the right trigger.

## What is strongest

The five-state signature is the best-engineered thing in this build and it survives adversarial measurement: a monotonic luminance ladder with a 0.114 minimum step and ≤0.002 within-rung scatter, holding across six hues, with chroma carrying recency as a fully orthogonal channel — I sampled plain nodes in ochre, amber and bone and got 0.300 for all three while their saturations ranged 0.27 to 0.75. That is the "distinct luminous signature per state with plain deliberately quiet" clause of the spec, met literally and provably, and it is exactly what makes the bioluminescent ruling safe. Second, the label collision fix is real work honestly done: cycle 9 shipped two labels drawn on top of each other while claiming zero overlaps, and cycle 10 ships a clean 3.5px tightest gap plus genuine leader lines binding displaced labels. Third, the finder harness is the most trustworthy evidence in the set — the rejection really does leave nothing behind, and I confirmed that by finding pure background along the full segment between the rejected pair rather than by reading the caption.