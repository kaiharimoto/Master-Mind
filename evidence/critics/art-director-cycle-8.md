# The Art Director — cycle 8

*Written here verbatim, as received, before any response was made to it.*
*Categories: 05 Quality compliance (10, min 8) · 06 Finder round-trip (5, min 4).*
*This critic owns the delegated "which looks better" call (§04); its rulings
below are binding on the builder, including the one that reverses a change the
builder made this cycle.*

*Recovered from the subagent's own transcript rather than retyped.*

---

I've examined every artifact in my two categories at pixel level. Verdict below.

## Scores

| Category | Score | Weight | Minimum | Met? |
|---|---:|---:|---:|---|
| 05 · Quality compliance | 8.0 | 10 | 8 | Yes (at the floor) |
| 06 · Finder round-trip | 4.5 | 5 | 4 | Yes |
| **Total (my two)** | **12.5** | **15** | — | — |

**Category 05 — 8/10.** Four of the five sub-clauses are exemplary and I verified each off the pixels rather than the manifest. Ground is *exactly* `(18,14,11)` at all six probe points in 02, 04, 07, 10 and 13 — no vignette, gradient, fog, grid or ground plane anywhere. The state ladder is real and independently reproducible: sampling each core centre in 07 I get, in true linearised Rec.709 relative luminance, plain 0.0739/0.0764/0.0823 · connected 0.1594/0.1817 · unplaced 0.2804–0.2844 · search hit 0.4234 · selected 0.6306 — monotonic with **disjoint bands**, and in CIE L\* the steps are 14.8 / 11.7 / 11.1 / 12.4, a genuinely even perceptual ladder. All five ring geometries are distinct at 4× (bare / thin ring / dashed / four ticks / heavy ring). Filaments step from `(32,26,22)` at rest to `(141,123,107)` on the selection's incident links — an 18:1 luminance ratio landing on exactly the right edges. Recency-as-chroma measures out: within-hue HLS saturation ratios of 1.29 (azure), 1.31 (violet), 1.49 (coral), 2.06 (magenta), 2.28 (teal), matching `mix(0.45,1.00,recency)` given each district's declared recency span, and the coral frontier is visibly the map's most saturated region. Nothing moves: a frame-diff of artifact 20 between 13.6 s and 14.2 s changes 489 pixels, **all** inside the four holding-node cores (the sanctioned light pulse), and zero elsewhere in the 1450×1080 map region; `positions.json` is byte-identical to cycle 7. What costs it is the sub-clause my rubric names first — *text crisp from whole-brain zoom to reading distance* — which went **backwards** in two of its three artifacts (below).

**Category 06 — 4.5/5.** The strongest work in my remit. Artifact 13's prompt carries every node's `"pos":[x,y,z]` and `"placed"` flag, all 11 nodes of the Talk map, the three suggestion shapes, and the rule *"Do not move nodes that are already placed. Their positions are deliberate."* — at 13.5:1 contrast in crisp mono. Artifact 20 proves tolerant parse honestly: a prose-only reply yields "No JSON found in that reply. Nothing was changed."; an adversarial reply (prose + ```json fence + `//` comments) parses to 5 staged suggestions with **6 entries rejected and a per-entry reason** ("placed positions are not the finder's to change", "a node cannot link to itself", "already linked", "unknown node"). Staging is one-at-a-time and counted down on screen (1 of 5 → 1 of 4 → 1 of 3 → 1 of 2 → 1 of 1, "nothing is applied until you accept"). I verified acceptance and rejection from pixels, not claims: 14's detail-2 vs detail-3 are the same crop differing by exactly one new filament between the two named nodes; 20's final frame shows holding 4→3, "Timebox to 18 minutes" out of the ring wearing a bare plain core, and "Steal the parking-lot bit" still inside the ring with its dashed ring intact after its placement was rejected.

## Blocking findings

None. Nothing in artifacts 01, 02, 04, 07, 10, 13, 14 or 20 breaches the avoid-list, and no claim I checked was contradicted in a way that makes the build unshowable.

## Major findings

**C1 · Artifacts 02, 04 (also 10, 13) · renderer/labels — labels are drawn where there is no node to name.**
In 02, label ink extends **277 px left of the leftmost node** (node bbox starts x=591; label ink starts x=314). In cycle 7 the same overhang was **46 px** — one label width. I swept the 310 × 850 px region x∈[280,590], y∈[150,1000] of 02 for any pixel with saturation > 30: it contains **exactly one node blob**, against roughly ten fully-spelled labels ("Acetobacter aceti", "Anaerobic vs aerobic", "Lactobacillus plantarum", "Starter hibernation", "Bacterial succession", "Kahm yeast is harmless", "Aspergillus oryzae", "Phage collapse in dairy", "Second ferment in fridge", "Jangajji soy pickles"). "Acetobacter aceti" ends at x=420; the nearest node of any hue is ≥171 px away, with no leader reaching it. Counting label runs that sit entirely more than 40 px clear of every node: **02 → 18 (cycle 7: 1); 04 → 10 (cycle 7: 0)**. In 10, the left third holds ~17 labels against 6 visible nodes. *Root cause:* the placer optimises "inside the frame" (`everyLabelInsideTheFrame: true`, `labelWorstOffFramePx: 0`) and "not hidden" (`labelsHidden: 0`) above adjacency, so an off-viewport or crowded node's label is dragged to open ground. D-012's promise — *"every anchor is adjacent to the node it names… no label detaches from its subject"* — is contradicted by the shipped frames. *Fix:* make adjacency a hard constraint, not a soft score. Cap displacement at ~2 line-heights from the node (D-012's own stated anchor set), and where the winning anchor still exceeds that, drop the label rather than relocate it. A label that names nothing is worth less than no label.

**C2 · Artifacts 02, 04 · renderer/labels — colliding labels are additively blended, so the illegible spot is the brightest thing on screen.**
At least six mutually destroyed pairs in 02 — "Yogurt at 43C" × "Cheese…ing" (renders as `Ycguhrtast4CBCing`), "Kefir grains double" × "Beef…", "Mesophilic vs thermophilic" × "Doubanjiang", "When in doubt, toss it" × "Bed…", "Dechlorinate the water" × "Miso at 12% salt", "Barley miso, 18 months" × "Dehydrator as incubator" — and at least five in 04, including a three-way mash of "Ruhlman on ratios" × "Crème fraiche shortcut" × "Paper: microbial succession". Measured: a clean label in 02 peaks at 151–165 in the max channel; the "Mesophilic × Doubanjiang" overlap peaks at **204**. The collision is ~30 % brighter than either label, so the eye is drawn to precisely the unreadable region. Cycle 7 produced **zero** such mashes — it faded buried labels instead (audited 117 of 150 labels; cycle 8 audits 150 and hides 0). *Fix:* give the deconflictor a hard veto on any candidate anchor whose box intersects an already-placed higher-priority box, and composite text with source-over, never additively, so a residual overlap darkens rather than flares.

**C3 · Artifacts 14, 20 · finder — the accepted *grouping* is the one suggestion type whose effect is never shown.**
The manifest records `groupingAccepted: labelsBefore ["arc","ground"] → labelsAfter ["Framing","Framing"], applied: true`, but no frame in 14 or 20 shows a node's label before and after. The connection is proven pixel-for-pixel (one new filament) and the placement is proven three ways (node leaves the holding ring, dashed ring drops to bare core, badge 4→3, toast names the coordinates). The grouping is proven only by assertion, which is the category's weakest link since the rubric wording is "three suggestion types… applied only on explicit acceptance". *Fix:* in 14, add one more detail crop — the node editor's Label field on one of the two grouped nodes, before and after — or show the two nodes' labels rendered in-world across the accept. It is one crop away from complete.

## Minor findings

**C4 · Artifact 02 · text is at its weakest in exactly the framing the detail standard names first.** Label ink in 02 peaks at `(151,144,134)`–`(165,157,147)` on `(18,14,11)` = **5.98:1** at ~8 px cap height / 11 px total ink. The same labels read `(187,179,168)` = 9.3:1 in 04 and `(225,215,201)` = 13.5:1 in 10. It clears WCAG AA for small text, but 6:1 at 8 px with 150 labels competing is the floor of the set, and 02 is the frame a demo audience will look at longest. *Fix:* raise the whole-brain label to the declared `#EFE6D8` (as 10 already does) and lift the size clamp floor from ~12 px to ~13–14 px; the crowding that argues against it is C1/C2's problem to solve, not the type's.

**C5 · Artifact 07 · the "relative luminance" yardstick still is not the standard one.** D-015's cycle-8 correction says the ladder is now solved in the space a reader measures in, and reports the two *connected* cores at 0.4242 and 0.4249 (spread 0.0002). Measuring with the standard definition — linearise sRGB, then weight 0.2126/0.7152/0.0722 — I get **0.1594 and 0.1817, a spread of 0.0223**, because the sampler applies Rec.709 coefficients to gamma-encoded values. The coefficients were fixed; the linearisation was not. The ladder itself survives this handsomely (the 0.0223 within-rung spread is still only 29 % of the smallest inter-rung gap of 0.077), so this is a record problem, not a rendering one — but the stated purpose of the correction was reproducibility by an outsider, and it is not yet reproducible. *Fix:* linearise before weighting, or rename the metric "Rec.709-weighted sRGB luma" and stop calling it relative luminance.

**C6 · Artifact 14 · the detail row's headline overstates its own magnification.** The captions read "Detail ×2.09 / ×1.54 / ×1.54 / ×1.37", while the manifest's own `detailMagnificationsOfAppPixels` is `[1.04, 0.77, 0.77, 0.68]` — three of the four "details" are shown *below* 1:1 of the app's pixels. The sub-caption ("crop 624×496 at (450,50) of the 1280×1080 frame") lets a careful reader derive this, and cycle 7 stated "×0.79" plainly. *Fix:* headline the app-pixel ratio and keep the panel ratio as the secondary line.

**C7 · Artifact 20 · a stale error toast survives into the next attempt.** At 11.3 s the red "No JSON found in that reply. Nothing was changed." banner is still up — both as a toast and inline — while the *next* reply is being typed into the textarea. *Fix:* clear the parse result on any edit to the reply field.

**C8 · Artifacts 02, 04, 07, 13, 20 · the holding-cluster boundary ring is the one piece of world chrome.** A ~400 px dashed circle drawn in the space, carrying a signal already carried twice over: every unplaced node has its own dashed ring, and the toolbar shows "holding 8". It reads as meaningful rather than decorative so I do not score it as an avoid-list breach, but it is the closest thing on any frame to "chrome that encodes no new state". *Fix:* if it stays, earn it — make it the drop-boundary during a drag and hide it otherwise.

## Which looks better

**1 · The reading: organic-bioluminescent.** *(Options: organic-bioluminescent vs restrained-holographic.)* Ratified from the cycle-8 frames and closed. The arbiter test is whichever keeps the five node states legible and the space still, and the organic reading passes both halves with room to spare. The ground samples at exactly `(18,14,11)` at every point I probed in five different artifacts — no gradient, no vignette, no plane — so **the only luminance in the world belongs to nodes, filaments and type**. That empty ground is the entire budget the state ladder spends: a five-rung climb from L\* 33 to L\* 84 with even 11–15 L\* steps, and a filament step from `(32,26,22)` to `(141,123,107)`. A restrained-holographic reading has to introduce translucent planes, cyan edge geometry or chrome to read as itself, and every one of those is an extra luminance and an extra ring-like contour competing on the only channel this design has left. Fixed; not reopened.

**2 · Label deconfliction: cycle 7's discipline, not cycle 8's.** *(Options: draw all 150 labels at full brightness with long-range displacement and occasional leaders, vs stay adjacent, truncate when tight, and fade to zero what is buried.)* I rule for staying adjacent. The arithmetic is against cycle 8: it bought roughly 30 additional drawn labels at a cost of **18 orphaned label runs in 02 (was 1), 10 in 04 (was 0), and ≥11 mutual overprints across the two frames (was 0)**. A suppressed label costs one label and adds nothing to the frame; an overprint costs two labels *and* adds a bright artifact at the worst possible place; an orphaned label costs one label and adds a false object — text that looks like it names something and does not. Keep cycle 8's wider anchor search, which demonstrably helped the sparse frames (07's "Cut the history section?" is now clear of its node, and 10 gained the editor panel), but cap displacement at ~2 line-heights, hard-reject any candidate that overlaps a higher-priority box at all, and fade the loser to zero rather than blending it.

**3 · Artifact 14's detail row: cycle 8's four-up layout, cycle 7's honest headline.** *(Options: headline the ratio to the miniature panel — "×1.54" — vs headline the ratio to the app's own pixels — "×0.79".)* Keep the bigger four-panel row; it is what finally made the "6 entries rejected" log readable, and that log is the best single piece of evidence in the finder. But headline the app-pixel ratio. The row exists so a reader can inspect what the miniature cannot show; telling them "×1.54" when they are looking at 0.77 of the source pixels tells them the opposite of the truth about what they can trust in it, even though the crop caption underneath lets them work it out.

## What is strongest

The five-state ladder is the best thing in the build and it now survives an outside measurement: every rung monotonic and every band disjoint in true relative luminance, ~11–15 L\* apart, each rung additionally carrying its own ring geometry, so the family reads at a glance in 07 and still reads in the 150-node holding cluster of 02 where each unplaced core sits inside an unmistakable dashed ring. Second, the finder's rejection log — "placement of *Positions are the memory*: that node is already placed — placed positions are not the finder's to change" — is the mission's central promise enforced at the parse boundary and shown on screen, not asserted in prose. Third, the stillness is real and checkable: a frame-diff across a quiet 0.6 s of artifact 20 changes 489 pixels, all of them inside the four unplaced cores, and `positions.json` is byte-identical to the previous cycle.

---

```json
{
  "critic": "art-director",
  "cycle": 8,
  "reading": "organic-bioluminescent",
  "readingReasoning": "Ratified from the cycle-8 frames and closed. The arbiter test is whichever keeps the five node states legible and the space still. Sampled at six widely separated points in each of artifacts 02, 04, 07, 10 and 13, the ground is exactly (18,14,11) = #120E0B with no gradient, vignette, fog plane or grid, so the only luminance in the world belongs to nodes, filaments and type. That empty ground is the whole budget the state ladder spends: measured off artifact 07 in linearised Rec.709 relative luminance the rungs are plain 0.0739-0.0823, connected 0.1594-0.1817, unplaced 0.2804-0.2844, search hit 0.4234, selected 0.6306 - monotonic with disjoint bands, and in CIE L* the steps are 14.8/11.7/11.1/12.4, an even perceptual climb from L*33 to L*84. Filaments step from (32,26,22) at rest to (141,123,107) on exactly the selection's incident links, an 18:1 luminance ratio. A restrained-holographic reading would have to introduce translucent planes, cyan edge geometry or chrome to read as itself, and each is an extra luminance and an extra ring-like contour competing on the only channel this design has left. Fixed for the rest of the run.",
  "categories": [
    {
      "id": "05",
      "name": "Quality compliance",
      "weight": 10,
      "minimum": 8,
      "score": 8,
      "reasoning": "Four of five sub-clauses are exemplary and independently verified from pixels rather than from the manifest. Palette: ground is exactly #120E0B at every probe point in 02, 04, 07, 10 and 13 - flat, no vignette, gradient, fog, grid or ground plane, so nothing on the avoid-list appears. Five states (07): all five ring geometries distinct at 4x zoom, and the luminance ladder measures monotonic with disjoint bands in true linearised Rec.709 - 0.0739-0.0823 / 0.1594-0.1817 / 0.2804-0.2844 / 0.4234 / 0.6306, i.e. L* steps of 14.8/11.7/11.1/12.4. Materials: filaments step 18:1 in luminance between rest (32,26,22) and state-carrying (141,123,107), landing on exactly the selection's incident links; UI surfaces are matte, flat and opaque with no glass or chrome. Atmosphere: a frame-diff of artifact 20 across 13.6s-14.2s changes 489 pixels, all inside the four holding-node cores (the sanctioned light pulse) and none elsewhere in the map; positions.json is byte-identical to cycle 7. Evidence of use (02, 04): eight hue districts of visibly varying density, long cross-district filaments, a partly full 8-node holding cluster, and a recency-as-chroma channel that measures out (within-hue saturation ratios 1.29-2.28, matching mix(0.45,1.00,recency) for each district's declared recency span, with the coral frontier the most saturated region). What holds the score at the floor is the sub-clause the rubric names first - text crisp from whole-brain zoom to reading distance - which regressed in two of its three artifacts: 18 label runs in 02 and 10 in 04 now sit entirely clear of every node (cycle 7: 1 and 0), label ink overhangs the node field by 277px where cycle 7 overhung by 46px, and at least eleven label pairs mutually overprint into illegibility where cycle 7 had none. Reading-distance text (10, 13) is excellent at 13.5:1 and shows no LOD blur."
    },
    {
      "id": "06",
      "name": "Finder round-trip",
      "weight": 5,
      "minimum": 4,
      "score": 4.5,
      "reasoning": "The strongest work in my remit, and almost every clause is proven from pixels. Artifact 13's prompt is genuinely paste-ready: preamble, the three suggestion shapes, explicit rules including 'Do not move nodes that are already placed. Their positions are deliberate.', and MAP JSON carrying all 11 nodes with \"pos\":[x,y,z] and \"placed\" flags plus the links array and an explicit \"unplaced\" list - all at 13.5:1 contrast in crisp mono, with Copy and Parse-reply controls. Artifact 20 proves tolerant parse in one take: a prose-only reply gives 'No JSON found in that reply. Nothing was changed.' and an adversarial reply (prose wrapper, ```json fence, // comments) parses to 5 staged suggestions with 6 entries rejected and a per-entry reason log that enforces the sacred-positions rule at the parse boundary. Staging is one-at-a-time with a visible countdown (1 of 5 -> 1 of 4 -> 1 of 3 -> 1 of 2 -> 1 of 1) and 'nothing is applied until you accept'. Acceptance and rejection are verified, not asserted: 14's detail-2 and detail-3 are the identical crop differing by exactly one new filament between the two named nodes; 14's detail-4 shows no filament between the rejected pair; 20's final frame shows holding 4->3, the accepted node out of the ring wearing a bare plain core, a toast naming its coordinates, and the rejected node still inside the ring with its dashed ring. Deductions: the accepted grouping is the one kind whose effect appears on no frame (asserted only in the manifest); the detail row's '×1.54/×1.37' headlines are ratios to the miniature panel while the manifest's own figure for app pixels is 0.77/0.77/0.68; and a stale parse-error toast is still on screen while the next reply is typed."
    }
  ],
  "findings": [
    {
      "artifact": "02",
      "severity": "major",
      "subsystem": "renderer",
      "observed": "Labels are drawn in regions containing no node. Label ink extends 277px left of the leftmost node (node bbox begins x=591, label ink begins x=314); in cycle 7 the same overhang was 46px. Sweeping x[280,590] y[150,1000] - a 310x850px region - for pixels with saturation>30 finds exactly one node blob, against roughly ten fully-spelled labels. 'Acetobacter aceti' ends at x=420 with the nearest node of any hue at least 171px away and no leader reaching it. Counting label runs sitting entirely more than 40px clear of every node: 18 in cycle 8 versus 1 in cycle 7. The same pattern appears in 04 (10 runs versus 0), in 10 (~17 labels against 6 visible nodes in the left third) and in 13 (a 120px leader dragging 'Ask about the demo laptop' to the frame's bottom edge while its neighbour is truncated to 'Cut the history...').",
      "rootCause": "The label placer optimises 'inside the frame' (everyLabelInsideTheFrame: true, labelWorstOffFramePx: 0) and 'nothing hidden' (labelsHidden: 0) above adjacency to the node. When a node is off-viewport or its neighbourhood is crowded, the winning anchor is open ground far away, and the audit that reports 150 labels drawn never checks how far each moved. This contradicts D-012's own statement that every anchor is adjacent to the node it names and that no leader lines are needed.",
      "correction": "Make adjacency a hard constraint rather than a soft score: cap displacement at roughly two line-heights from the node - D-012's own declared anchor set - and where the best candidate still exceeds that, suppress the label instead of relocating it. Add labelWorstDisplacementPx to the per-artifact audit alongside the overhang figures, and fail the capture if it exceeds the cap. A label that names nothing identifiable is worth less than no label."
    },
    {
      "artifact": "02",
      "severity": "major",
      "subsystem": "renderer",
      "observed": "Colliding labels overprint and blend additively, so the illegible region is brighter than either label. In 02: 'Yogurt at 43C' x 'Cheese...ing' renders as the unreadable string 'Ycguhrtast4CBCing'; 'Kefir grains double' x 'Beef...'; 'Mesophilic vs thermophilic' x 'Doubanjiang'; 'When in doubt, toss it' x 'Bed...'; 'Dechlorinate the water' x 'Miso at 12% salt'; 'Barley miso, 18 months' x 'Dehydrator as incubator'. In 04: a three-way mash of 'Ruhlman on ratios' x 'Creme fraiche shortcut' x 'Paper: microbial succession', plus 'Blue: P. roqueforti' x 'Umami stacking', 'Peach pit garum?' x 'Whey as a brine starter', 'Lactose to...' x 'Koji-cured egg yolk', and 'the water' x 'Amylase...'. Measured: a clean label in 02 peaks at 151-165 in the max channel; the Mesophilic/Doubanjiang overlap peaks at 204 - about 30% brighter. Cycle 7 produced zero such collisions (it audited 117 of 150 labels and faded the buried ones).",
      "rootCause": "The deconflictor scores each anchor by the fraction a higher-priority label has already claimed and takes the clearest, but nothing vetoes a placement that is merely least-bad, and the suppression path that cycle 7 used (fade a buried label to nothing) was traded away for drawing all 150. Text is composited additively, so two overlapping glyph runs sum rather than occlude.",
      "correction": "Give the placer a hard veto: reject outright any candidate anchor whose text box intersects an already-placed higher-priority box, and if no candidate survives, fade that label to zero as cycle 7 did. Composite text source-over rather than additively so that any residual overlap darkens instead of flaring. Report labelsOverlapping in the audit and fail the capture when it is non-zero."
    },
    {
      "artifact": "14",
      "severity": "major",
      "subsystem": "finder",
      "observed": "Of the three suggestion kinds, the grouping is the only one whose applied effect appears on no frame. The manifest records groupingAccepted with labelsBefore ['arc','ground'] -> labelsAfter ['Framing','Framing'] and applied: true, but neither 14's four detail crops nor any frame of 20 shows a node's label before and after the accept. By contrast the connection is proven pixel-for-pixel (detail-2 and detail-3 are the identical crop differing by exactly one new filament between the two named nodes) and the placement is proven three ways in 20's end frame (node out of the holding ring, dashed ring replaced by a bare plain core, badge 4->3, toast naming the coordinates).",
      "rootCause": "A grouping rewrites the node.label field, which the canvas does not render - only the node editor's Label input shows it - so the capture recipe had no on-frame surface to point at and fell back to recording the change in the manifest.",
      "correction": "Add a fifth detail crop to 14 showing the node editor's Label field on one of the two grouped nodes before and after the accept, or open the editor on a grouped node in 20 immediately after the grouping lands. One crop closes the gap."
    },
    {
      "artifact": "02",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "Label type is at its weakest in the whole-brain framing the detail standard names first. Label ink in 02 peaks at (151,144,134) to (165,157,147) against the (18,14,11) ground - a WCAG contrast of 5.98:1 - at about 8px cap height and 11px total ink. The same labels measure (187,179,168) = 9.3:1 in 04 and (225,215,201) = 13.5:1 in 10, which is the declared #EFE6D8.",
      "rootCause": "The screen-size clamp bottoms out around 12px em at this camera distance, so glyph strokes are thinner than one pixel and antialiasing never reaches the declared text colour; 150 competing labels also push the placer toward its smallest sizes.",
      "correction": "Lift the size clamp floor from 12px to 13-14px and let the whole-brain label reach the full declared #EFE6D8 as artifact 10 already does. The crowding that argues against a larger floor is C1/C2's problem to fix, not the type's."
    },
    {
      "artifact": "07",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "The 'relative luminance' the ladder is reported in is still not the standard definition. D-015's cycle-8 amendment states the palette is now solved in the space a reader measures in and reports the two connected cores at 0.4242 and 0.4249, a spread of 0.0002. Sampling the same two core centres in the shipped 07 with the standard definition - linearise sRGB, then weight 0.2126/0.7152/0.0722 - gives 0.1594 and 0.1817, a spread of 0.0223. The manifest's figures reproduce only if the Rec.709 coefficients are applied to gamma-encoded channel values.",
      "rootCause": "F-029 replaced the Rec.601 coefficients with Rec.709 but did not add the sRGB-to-linear transfer step, so the metric is Rec.709-weighted luma of encoded values rather than relative luminance.",
      "correction": "Either linearise before weighting in relLum, the shader's desaturation mix and the harness sampler, or rename the metric 'Rec.709-weighted sRGB luma' throughout DIRECTION.md and the report. Note that the ladder survives the stricter measure comfortably - the 0.0223 within-rung spread is 29% of the smallest inter-rung gap of 0.077 and the bands stay disjoint - so only the number needs correcting, not the palette."
    },
    {
      "artifact": "14",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "The detail row's headlines read 'Detail x2.09 / x1.54 / x1.54 / x1.37' while the manifest's own detailMagnificationsOfAppPixels is [1.04, 0.77, 0.77, 0.68] - three of the four details are shown below 1:1 of the app's own pixels. The sub-caption ('crop 624x496 at (450, 50) of the 1280x1080 frame') lets a careful reader derive this; cycle 7 headlined the app-pixel ratio directly, stating 'Detail x0.79'.",
      "rootCause": "The magnification quoted in the headline is measured against the miniature panel above it rather than against the source app frame, and the panel is itself a large downscale.",
      "correction": "Headline the app-pixel ratio and keep the panel ratio as the secondary line. The four-up layout itself is a clear improvement and should stay - it is what finally made the rejection log readable."
    },
    {
      "artifact": "20",
      "severity": "minor",
      "subsystem": "finder",
      "observed": "At 11.3s the red 'No JSON found in that reply. Nothing was changed.' banner is still displayed both inline in the panel and as a toast over the map, while the next (well-formed) reply is being typed into the textarea below it.",
      "rootCause": "The parse result is cleared on the next parse rather than on any edit to the reply field.",
      "correction": "Clear both the inline result and the toast on the reply textarea's input event, so the error never outlives the reply that caused it."
    },
    {
      "artifact": "02",
      "severity": "minor",
      "subsystem": "renderer",
      "observed": "A dashed circle roughly 400px across is drawn in world space around the holding cluster in 02, 04, 07, 13 and 20. It carries a signal already carried twice: every unplaced node has its own dashed ring at 1.70x its core, and the toolbar shows 'holding 8'.",
      "rootCause": "The holding region is modelled with an origin and radius (visible in the exported JSON as holding:{origin,radius}) and the renderer draws that radius directly.",
      "correction": "It reads as meaningful rather than decorative so it is not scored as an avoid-list breach, but it is the single element on any frame closest to 'chrome that encodes no new state'. If it stays, make it earn its light - show it as the live drop boundary during a placement drag and hide it otherwise."
    }
  ],
  "comparisons": [
    {
      "artifact": "01",
      "verdict": "unchanged",
      "why": "2001 pixels differ from cycle 7, confined to x166-275 in the map-name column - no change of substance. Create, rename and delete are still shown as three composited states with live node counts (11 and 150) and last-opened times, on matte borderless surfaces."
    },
    {
      "artifact": "02",
      "verdict": "regressed",
      "why": "Node positions and colour are untouched (positions.json byte-identical; the node-pixel mask differs by 493 of 2.07M px, 0.02%), so the entire change is the label treatment - and it went backwards. Label runs sitting entirely clear of every node rose from 1 to 18; label ink now overhangs the node field by 277px against 46px; and at least six label pairs mutually overprint into illegibility where cycle 7 had none, with the additive blend making each collision about 30% brighter than a clean label."
    },
    {
      "artifact": "04",
      "verdict": "regressed",
      "why": "Same root cause as 02. Orphaned label runs rose from 0 to 10, and at least five collisions appear including a three-way mash of 'Ruhlman on ratios', 'Creme fraiche shortcut' and 'Paper: microbial succession'. The recency channel is if anything better exercised (recencyChromaSpan widened to 0.045-0.521 from 0.045-0.457, and the coral frontier reads as the map's most saturated region), but the frame's stated job - the whole 150-node map on screen and legible - is less well served than it was."
    },
    {
      "artifact": "07",
      "verdict": "improved",
      "why": "The F-029 correction is real and I reproduced it: the two connected cores measured 0.4107 and 0.4713 under cycle 7's yardstick (a 0.060 spread with the plain and connected rungs effectively inverted) and now measure 0.4278 and 0.4276. Within-rung spread across all five rungs is at most 0.002 against a minimum step of 0.1141. The sparser label placement also helped here - 'Cut the history section?' no longer sits on top of its node - because 11 nodes give the deconflictor room that 150 do not."
    },
    {
      "artifact": "10",
      "verdict": "improved",
      "why": "The fly-to end-state is materially better evidenced: the node editor is now open on the flown node showing its text, label, colour swatches and the provenance line 'Captured 2025-01-11 - newer than 54% of this map - mid chroma', where cycle 7 showed no panel at all. The flown node is centred to the pixel (dx=0, dy=0) with 13 further search hits around it wearing the four-tick signature, text at 13.5:1 and 19px ink with no LOD blur. Caveat: the left third now carries about 17 labels against 6 visible nodes, the same detachment as C1."
    },
    {
      "artifact": "13",
      "verdict": "unchanged",
      "why": "The prompt panel is identical in substance (2698 chars both cycles) and remains the strongest single artifact in my remit - full map JSON with every position and placed flag, the three suggestion shapes, and the explicit 'Do not move nodes that are already placed' rule, at 13.5:1 contrast. The only change is in the map pane, where 'Cut the history section?' is now truncated to 'Cut the history...' and 'Ask about the demo laptop' has been pushed 140px below its node with a leader line running to the frame's bottom edge - a small regression inside an otherwise unchanged artifact."
    },
    {
      "artifact": "14",
      "verdict": "improved",
      "why": "The detail row went from three crops at x1.03/x1.03/x0.79 to four at x2.09/x1.54/x1.54/x1.37, and the x2.09 panel crop finally makes the rejection log legible - six entries with per-entry reasons including 'placed positions are not the finder's to change'. I verified the accept and reject from pixels: detail-2 and detail-3 are the identical crop differing by exactly one new filament between the two named nodes, and detail-4 shows no filament between the rejected pair. Offset by C6: the new headlines quote magnification against the miniature rather than against the app's pixels."
    },
    {
      "artifact": "20",
      "verdict": "improved",
      "why": "1920x1080 at 30fps for 30s, over the 24fps/20s minimum. The take now carries both a malformed reply and an adversarially messy one through the same parser, all three kinds accepted, and both rejection kinds - a rejected connection and a rejected placement whose node stays at [2.056,-10.26,3.869] with holding unchanged at 4. The end frame independently confirms the accepted placement (badge 4->3, node out of the ring wearing a bare plain core) and the accepted connection (a new filament, links 6->7). A frame-diff across a quiet 0.6s window changes 489 pixels, all inside the four unplaced cores - the sanctioned pulse and nothing else."
    }
  ],
  "verdict": "This build honours the quality specification almost everywhere I could measure it, and it does so in ways an outsider can reproduce: a flat #120E0B ground at every probe point in five artifacts, a five-rung state ladder that stays monotonic with disjoint bands even under the strictest definition of relative luminance (L* steps of 14.8/11.7/11.1/12.4), five genuinely distinct ring geometries, an 18:1 filament step landing on exactly the right edges, a recency-as-chroma channel whose measured within-hue saturation ratios match the declared formula district by district, and a world that provably does not move - 489 changed pixels across a quiet 0.6s, all of them inside the four holding cores. The finder is the best-evidenced subsystem in my remit: a paste-ready prompt carrying every position and placed flag with the sacred-positions rule stated in the prompt itself, a tolerant parser that refuses a prose reply safely and survives an adversarial one, a rejection log that enforces 'placed positions are not the finder's to change' at the parse boundary, staged suggestions counted down one at a time, and acceptance and rejection both provable from the pixels rather than the manifest. What holds category 05 at its floor is that the one sub-clause my rubric names first - text crisp from whole-brain zoom to reading distance - moved backwards this cycle in two of its three artifacts. Trading cycle 7's truncate-and-fade discipline for drawing all 150 labels bought about thirty more labels at the cost of eighteen orphaned label runs in 02, ten in 04, and at least eleven mutual overprints that the additive text blend makes the brightest thing in their neighbourhood. That trade should be reversed with the wider anchor search kept for sparse frames; fix it, add the one missing crop that shows an accepted grouping landing, and both categories move well clear of their minimums."
}
```