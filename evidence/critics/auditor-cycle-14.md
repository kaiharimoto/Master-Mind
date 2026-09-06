# The Auditor — cycle 14

*Written here verbatim, as received, before any response was made to it.*
*Categories: 03 One model and sacred positions (20, min 17) · 04 Evidence and integrity (15, min 13). Both are hard gates.*

**Both gates clear — 18 and 13 — and the cycle is declared NOT regression-free.**

**Its first finding is true and I have confirmed it independently.** The frozen
cycle-14 set identifies itself as cycle 13: `MANIFEST.cycle` is 13, every
artifact's `capturedInCycle` is 13, and `DIFF.json` reads `cycle: 13`,
`previousCycle: 13` — a record asserting on its face that it diffed a cycle
against itself. The cause is mine and it is procedural: I ran `run-capture.mjs`
directly, which does not know the cycle number, and then froze with
`cycle.mjs 14 --skip-capture`, which named the directory and wrote the ledger
but did not restamp the records inside it.

**Its second is also right.** I replaced artifact 09's passing
`everyOtherLabelHeldItsPlace` with a broader claim rather than adding the
broader one beside it. The strict measurement is still true and still in the
payload — the critic checked — but a machine-checked assertion that held is no
longer being made, and on the one property this mission calls sacred that is
the worst place to spend the licence. Its prescription is exact: assert both.

**One thing this verdict measures that no instrument here does**: it fitted a
perspective camera to artifact 11's drawn markers and reproduced the committed
seed coordinates at **0.22 px RMS** in cycle 14 and 0.25 px in cycle 13 — which
is how it could clear the twin pair's cross-cycle pixel shift as a reframe
rather than a move. That the harness left it no other way to check is the
finding behind its request to pin 11 and 12's camera as 07's now is.

**Disclosure.** The cycle-14 Audience's major finding on artifact 08 — the drop
landing in empty canvas — was fixed at `0a9ef02`, which lands **after** this
freeze. This Auditor scored the frozen set, which still carries the old drop,
and its "08 improved" comparison is about the pixel claim, not about that fix.

Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have completed my verification. Here are my findings.

```json
{
  "critic": "auditor",
  "cycle": 14,
  "regressionFree": false,
  "positionRegression": false,
  "categories": [
    {
      "id": "03",
      "name": "One model and sacred positions",
      "weight": 20,
      "minimum": 17,
      "score": 18,
      "reasoning": "I reproduced this rather than trusted it, and the core holds to an unusually high standard. evidence/positions.json is byte-identical (sha 6558507f799032a6, 8979 bytes) across all thirteen snapshots from cycle-2 to cycle-14, and it matches the committed seed fixtures exactly for all 161 nodes across both maps — 0 coordinate mismatches at three decimal places, no id added, no id removed, unplaced nodes included. The shipped pictures honour that ledger: fitting a single perspective camera to artifact 11's six colour-identified markers reproduces the seed coordinates at 0.22 px RMS (max residual 0.37 px) in cycle 14 and 0.25 px RMS in cycle 13, and the same fit predicts the undetected bone node and the four holding markers onto their drawn positions within 1–3 px. Cross-surface identity is real, not asserted: in artifact 11 the entire canvas band y=230..1000 of the Windows panel is bit-identical to the Android panel offset by exactly 960 px (max channel difference 0), and in artifact 12 all 7 placed markers sit at dx=0.00, dy=0.00 between panels while all 33 markers of the 150-node map match within 2 px (15 exactly 0) and the two panels' marker x-extent agrees to 0.1 px (363.7–614.7 vs 363.8–614.7) even though the label rail sits on opposite sides. Nothing moved between cycles: on artifacts 02, 07 and 10 every cycle-13 marker has a cycle-14 counterpart within 1 px (median nearest-neighbour 0.00–0.08 px), and artifact 04's single 5.0 px outlier is two cycle-13 markers 9.9 px apart merging into one blob at their exact midpoint, not a move. Motion is camera-only where it is claimed to be: artifact 05's pose zoom is a uniform 1.155 scale mapping 79% of markers within 3 px, video 17's first and last frames are related by a single 0.933 scale plus translation (76% within 2 px), artifact 03's anchor travels 251.8 px measured against the 252 px the frame claims, and videos 16/18/19/20 contain many half-second windows with literally zero canvas pixels changed by more than 12 levels — including the final 1.5 s of 19 after the drop, which is the drift test. I withhold two points for three things. Artifact 12's twin pair no longer reads as one model as cleanly as it did: cycle 13 drew all four holding labels on both surfaces, cycle 14's Android panel hides 'Cut the history section?' into a rail while Windows still draws it. The cameras in 11 and 12 are not frozen across cycles (11's distance moved 56.5 to 62.0), so a straight pixel regression on the twin pair is impossible and I had to fit a camera to rule out a move — the regression harness for the most position-critical artifacts is weaker than it needs to be. And artifact 09's label-invariance gate was loosened this cycle (see finding 09)."
    },
    {
      "id": "04",
      "name": "Evidence and report integrity",
      "weight": 15,
      "minimum": 13,
      "score": 13,
      "reasoning": "The practice here is genuinely strong and mostly survives adversarial checking. All 28 files in cycle-14 verify against evidence/cycles/cycle-14.sha256 (sha256sum -c returns OK on every line, same for cycle-13). All 20 artifacts carry fresh capture mtimes inside one monotone run window 14:00:24 to 14:19:08, cleanly separated from cycle-13's 11:40:35 to 11:59:03, and 18 of 20 differ in bytes. Every video meets or exceeds its stated minimum — all 1920x1080 at 30 fps, durations 34/41/13/23/47 s against minima 30/24/10/15/20 s. Environment substitutions are declared on the frame rather than buried in prose: artifact 03 prints 'android device profile · real orientation + touch events · no camera pass-through', artifact 05 prints 'SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER' and carries a declaredSynthetic claim naming the y4m path, and 11 and 12 print 'electron 33.4.11 · Win32 · wine · the built binary' alongside 'chromium 141.0.7390.37 · android device profile' and both rasterisers. That is the honest-substitute standard met, and I do not penalise it. DIFF.json reports against its own interest: it names the removed claim on 09 as 'a machine-checked assertion that used to hold is no longer being made', labels eight recipe changes 'not a like-for-like recapture', and flags 12's SSIM drop as 'inspect' without excusing it. A manifest claim I could measure independently — 03's 252 px anchor travel — is true of the shipped picture at 251.8 px. Against all that: the cycle-14 evidence set is mislabelled as cycle 13 in both machine-readable records, uniquely in a history where cycles 9 through 13 all increment correctly (finding 'evidence'); and this is the first cycle in the set to remove a passing machine-checked claim (claimsRemovedIds went from [] to ['09']). Two further thinness issues keep it off a higher mark: 90-odd claims have the literal constant 'true' as their acceptance rule, so the ledger cannot be audited from the manifest alone — honestly disclosed in claimFingerprintScope, but it forced me to verify the load-bearing claims against pixels by hand — and eight of twenty artifacts changed capture recipe this cycle, which is a large fraction of the set whose cycle-over-cycle comparison is not apples-to-apples."
    }
  ],
  "findings": [
    {
      "artifact": "evidence",
      "severity": "major",
      "subsystem": "evidence",
      "observed": "The entire cycle-14 evidence set identifies itself as cycle 13. evidence/cycles/cycle-14/MANIFEST.json has \"cycle\": 13, and all 20 artifact entries carry \"capturedInCycle\": 13. evidence/cycles/cycle-14/DIFF.json has \"cycle\": 13 and \"previousCycle\": 13 — it asserts on its face that it diffed cycle 13 against cycle 13, while its own rows correctly report 18 changed digests against the cycle-13 snapshot. The live evidence/MANIFEST.json and evidence/DIFF.json carry the same wrong values. This is unique to this cycle: cycle-9 through cycle-13 manifests read 9, 10, 11, 12, 13 and their DIFFs read (9,8), (10,9), (11,10), (12,11), (13,12) respectively.",
      "rootCause": "The cycle counter was not incremented before the capture run, so the snapshot directory name (assigned at archive time) advanced to cycle-14 while every field written into the records kept the previous cycle's number. DIFF's previousCycle is derived from the directory being diffed, which is correct, but its own cycle field is copied from the stale manifest, producing the self-contradictory previousCycle == cycle.",
      "correction": "Increment the cycle counter at the start of the capture run, not at archive time, and write it into MANIFEST.cycle, every artifact's capturedInCycle, and DIFF.cycle. Add a guard in the differ that fails the run when DIFF.cycle <= DIFF.previousCycle, or when MANIFEST.cycle does not match the snapshot directory name — this class of defect would then be impossible to ship again."
    },
    {
      "artifact": "09",
      "severity": "major",
      "subsystem": "evidence",
      "observed": "A passing machine-checked claim was removed and replaced with a weaker one. Cycle 13's ledger for 09 asserts everyOtherLabelHeldItsPlace (pass=true). Cycle 14's ledger drops it and asserts everyOtherLabelHeldItsPlaceOrYieldedToAnActedName instead — a gate with a self-declared escape hatch for labels that 'yielded to an acted name'. This is the only claim removal anywhere in the cycle set: claimsRemovedIds moved from [] in cycle 13 to [\"09\"] in cycle 14. The mitigation is real and I confirmed it: the strict measurement still evaluates to true in cycle 14's result payload (\"everyOtherLabelHeldItsPlace\": true), labelsThatShifted is 0 and labelsShiftedWithoutACollision is 0, so nothing was concealed — the gate was loosened while it was still passing. DIFF.json flags the removal by name and calls it out honestly.",
      "rootCause": "The capture script for 09 was rewritten this cycle (fnSha 307df49d193c5df3 -> 6e328e9bc52a8290) to add three pixel-level claims, and the author pre-emptively broadened the label-invariance gate to survive a rename act rather than keeping the strict assertion alongside the broader one. Since positions and labels are the mission's sacred property, loosening that particular gate is exactly the assertion you least want to give up.",
      "correction": "Restore everyOtherLabelHeldItsPlace to the scored claim list and keep everyOtherLabelHeldItsPlaceOrYieldedToAnActedName as an additional, broader claim rather than a replacement. If a rename genuinely can move a label, assert both: the strict form over the set of untouched nodes, and the broad form over all nodes. Add a rule to the differ that treats any claim removal where the underlying measured value is still true as a hard failure, not a note."
    },
    {
      "artifact": "12",
      "severity": "minor",
      "subsystem": "sync",
      "observed": "The twin pair reads less like one model than it did last cycle. In cycle 13 both panels of the top map drew all four holding labels ('Timebox to 18 minutes', 'Ask about the demo laptop', 'Cut the history section?', 'Steal the parking-lot bit'); the Android banner read '2 shortened · 3 named by their opening word'. In cycle 14 the Android panel hides 'Cut the history section?' into a new left rail ('1 thought on screen without room for a label · holding 1'), banner '1 label hidden · 2 shortened · 2 named by their opening word', while the Windows panel still draws it. SSIM against cycle 13 is 0.910 against a 0.99 threshold. Node positions are untouched — I measured all 7 placed markers at dx=0.00 dy=0.00 between panels and all 33 markers of the 150-node map within 2 px — and the rail overlays without shifting the camera, so this is a legibility divergence, not a position one.",
      "rootCause": "The label-and-rail solver was extended this cycle to spill unfittable labels into a side rail, and it runs per surface against each surface's own available canvas width. The Android panel's rail is on the left and consumes width the Windows panel does not lose, so the two surfaces resolve different label sets from identical state. Artifact 11's header discloses this honestly ('label selection is solved per surface, so which names fit can differ'), but the frame whose whole job is to look node-for-node identical is the worst place to spend that licence.",
      "correction": "For the twin composite specifically, solve label selection once against the narrower of the two panels' canvases and render that same selection on both sides, so the pair differs only in the chrome that must differ. Add a claim to 12 asserting that the set of drawn node labels is identical across the two panels."
    },
    {
      "artifact": "11",
      "severity": "minor",
      "subsystem": "sync",
      "observed": "The camera is not held constant across cycles on the artifact that carries the position guarantee. Fitting a perspective camera to the drawn markers gives distance 56.46 / pitch 0.0949 in cycle 13 and distance 62.02 / pitch 0.1011 in cycle 14 — an unforced reframe that moved every marker 5 to 13 px and dropped SSIM to 0.942 against a 0.99 threshold. The consequence is that a cross-cycle pixel diff on 11 cannot distinguish a reframe from a node move: I could only clear it by fitting a camera to each cycle independently and showing both reproduce the same committed seed coordinates (0.25 and 0.22 px RMS). A second, smaller effect: cycle 14 truncates more labels at this framing (banner '2 shortened · 2 named by their opening word' versus cycle 13's '1 shortened · 1 named'), so 'Opening: where did you park?', 'Lists flatten meaning' and 'Demo: search fly-to' now read as 'Opening: where…', 'Lists…' and 'Demo:…'.",
      "rootCause": "The twin capture derives its camera from a fit-to-content pass rather than from a pinned constant, so any change to node marker size or label metrics between builds nudges the framing. Artifact 07 gained a cameraPinned claim this cycle; 11 and 12 did not.",
      "correction": "Pin the twin composite camera to a literal constant (yaw, pitch, distance) written into the capture script and printed on the frame, and add a cameraPinned claim to 11 and 12 as was done for 07. A frozen camera makes the cross-cycle SSIM on these two artifacts a real regression detector instead of noise."
    },
    {
      "artifact": "evidence",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "The claim ledger cannot be audited from the manifest alone. The acceptance rule for the large majority of claims is the literal string \"true\" (ruleSha b5bea41b6c62) — 'the measured boolean was true' — so ruleSha carries no information about what was actually measured. Only four rules in the whole set are real predicates (for example headingChanged's '(d) => d > 25' and mapsAfterDelete's '(n) => n === 2'). The measuring code is covered only by recipe.fnSha, and fnSha changed on eight of twenty artifacts this cycle (05, 06, 07, 08, 09, 10, 14, 17), which the differ correctly labels 'not a like-for-like recapture'. Related: artifact 15 carries exactly one claim, referenceMatchesTheRuntime, for a five-part specification (hand-tracking toggle with live status, account sign-in, sync status, complete touch reference, complete hand reference) — the picture does show all five, but the ledger asserts almost none of it.",
      "rootCause": "Claims were designed as booleans computed inside the capture script and then trivially asserted, so the fingerprinting scheme has nothing to hash but the tautology. The manifest is upfront about this in claimFingerprintScope rather than hiding it, which is why this is minor rather than major.",
      "correction": "Express each claim as a predicate over a named measured value rather than a precomputed boolean — assert 'labelsThatShifted === 0' and 'markersAtDisplacedPositions === members', not 'someBoolean === true' — so ruleSha actually fingerprints the assertion and a weakened threshold shows up as a changed ruleSha. Split artifact 15's single claim into one claim per required element of its specification."
    },
    {
      "artifact": "01",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "Artifacts 01 and 15 are byte-identical to cycle 13 (sha 2374c44a2e20 and 28d7595c6d35). DIFF.json flags each by name with its recapture timestamp and states 'so this is determinism, not a copy'. I could not falsify that: their mtimes (14:00:27 and 14:01:40) sit in correct sequence inside the single monotone run window, and both screens are plausibly unaffected by the app bundle change (appSha afee2ffa14e2e205 -> 10c188b09545c35e). But determinism remains an assertion I cannot independently prove from the bytes, and these are the only two artifacts in the set where 'was it recaptured' rests on the harness's own word.",
      "rootCause": "The capture pipeline is deterministic for static screens under a fixed seed, and the manifest records a capture timestamp but no independent per-run witness inside the rendered pixels.",
      "correction": "Render a per-run witness into a low-salience corner of every artifact — the run's gitHead short sha and appSha are already on some frames; put them on all of them. Byte-identity would then be impossible across a rebuild, and 'recaptured, not copied' becomes verifiable from the artifact itself rather than from the manifest."
    }
  ],
  "comparisons": [
    { "artifact": "01", "verdict": "unchanged", "why": "Byte-identical to cycle 13 (sha 2374c44a2e20), recaptured at 14:00:27 inside the run window; DIFF discloses this explicitly by name and timestamp." },
    { "artifact": "02", "verdict": "improved", "why": "Node positions identical to cycle 13 (median nearest-neighbour 0.08 px, 100% of markers within 1 px, max 0.4 px) while marker detection at a fixed threshold rose 78 -> 90, i.e. more nodes read at a glance; the unlabelled-thought rail is now present with 87 listed." },
    { "artifact": "03", "verdict": "unchanged", "why": "SSIM 0.9876; the two gyro headings still show every node position unchanged, and I independently measured the anchor travel at 251.8 px against the 252 px the frame claims. Marginal legibility loss: labelsShortened 7 -> 9." },
    { "artifact": "04", "verdict": "unchanged", "why": "Positions identical across cycles — 98% of markers within 1 px, and the single 5.0 px outlier is two cycle-13 markers 9.9 px apart merging into one blob at their exact midpoint. Detected markers rose 88 -> 98 at a fixed threshold." },
    { "artifact": "05", "verdict": "improved", "why": "Two pixel-level claims added (spanChangeVisibleInThePixels, spanMeasuredOverAFixedNodeSet) with none removed, and I verified the pose zoom is camera-only: a single uniform 1.155 scale maps 79% of before-markers within 3 px and 92% within 6 px of after-markers. Substitution declared on-frame as SYNTHESISED CAPTURE with the y4m path." },
    { "artifact": "06", "verdict": "improved", "why": "The placed map is now drawn beyond the holding boundary — saturated canvas markers went 0 -> 9 at a fixed threshold, litPixels 39517 -> 57076 — and two claims were added (placedMapDrawnInThePixels, placedMapVisibleBeyondTheBoundary). The waiting count reads 'holding 8' with 8 markers drawn in the ring." },
    { "artifact": "07", "verdict": "improved", "why": "All 17 markers identical to cycle 13 (median nearest-neighbour 0.00 px, max 0.1 px) and a cameraPinned claim was added — exactly the pinning that 11 and 12 still lack." },
    { "artifact": "08", "verdict": "improved", "why": "Claim theDropIsVisibleInThePixels added; existing placed/stableAfterDrop/cameraFrozenAcrossPanels claims retained." },
    { "artifact": "09", "verdict": "regressed", "why": "The only claim removal in the entire cycle set: everyOtherLabelHeldItsPlace (passing in cycle 13) replaced by everyOtherLabelHeldItsPlaceOrYieldedToAnActedName. The strict value is still true in the result payload and three pixel claims were added, so nothing was concealed — but a machine-checked assertion that held is no longer being made." },
    { "artifact": "10", "verdict": "improved", "why": "All 34 cycle-13 markers reproduce at median 0.00 px, max 0.0 px, and railTookTheEmptierSide was added." },
    { "artifact": "11", "verdict": "unchanged", "why": "Positions verified against the committed seed in both cycles (0.25 px RMS in 13, 0.22 px in 14) and the canvas band is bit-identical between the Windows and Android panels. SSIM fell to 0.942 solely because the camera was reframed (distance 56.5 -> 62.0), and two labels now truncate where one did." },
    { "artifact": "12", "verdict": "regressed", "why": "Positions are untouched and cross-surface identity is exact (7/7 markers at dx=dy=0.00; 33/33 within 2 px; identical x-extent to 0.1 px), but the Android panel now hides a holding label the Windows panel still draws, where cycle 13 drew all four on both. SSIM 0.910 against a 0.99 threshold." },
    { "artifact": "13", "verdict": "unchanged", "why": "Same four claims, all passing; the exported prompt still carries node positions, instructions and the unplaced set." },
    { "artifact": "14", "verdict": "improved", "why": "rejectionLeftNoTraceInThePixels added to the existing nine claims, moving the rejection guarantee from the model into the pixels." },
    { "artifact": "15", "verdict": "unchanged", "why": "Byte-identical to cycle 13; the frame still carries the toggle with live status, sign-in, sync status and the complete touch and hand references. Ledger coverage remains one claim for a five-part specification." },
    { "artifact": "16", "verdict": "unchanged", "why": "1920x1080 at 30 fps for 34 s, identical spec to cycle 13; five gesture claims retained; 18 of 67 half-second intervals show zero canvas pixels changed, so nothing drifts between acts." },
    { "artifact": "17", "verdict": "unchanged", "why": "Recipe changed (fnSha d38003b65a7d9754 -> acd89030378b14e5) so this is not a like-for-like recapture, and SSIM on the contact sheet is 0.793. Claims are unchanged at 8/8, and I verified mapReturnedToItsStartingLayout: first and last frames are related by a single uniform 0.933 scale plus translation (76% of markers within 2 px), i.e. the vantage moved and the layout did not." },
    { "artifact": "18", "verdict": "unchanged", "why": "1920x1080 at 30 fps for 13 s; four claims retained; 12 of 25 half-second intervals perfectly still." },
    { "artifact": "19", "verdict": "unchanged", "why": "SSIM 0.881 against a 0.93 threshold but litPixels differ by 0.1% and no claim changed. The position guarantee is visible in the pixels: the final 1.5 s after the drop has zero canvas pixels changed by more than 12 levels, so the placed node stays exactly where it was put." },
    { "artifact": "20", "verdict": "unchanged", "why": "1920x1080 at 30 fps for 47 s; nine claims retained including the 150-node round-trip; 28 of 93 half-second intervals perfectly still." }
  ],
  "verdict": "Cycle 14 is NOT regression-free, but the regressions are in the record-keeping, not in the build, and the position invariant is intact by every measurement I could make. I found three regressions relative to cycle 13. First, the whole cycle-14 evidence set mislabels itself as cycle 13: MANIFEST.json reads \"cycle\": 13, all twenty artifacts read \"capturedInCycle\": 13, and DIFF.json reads \"cycle\": 13 with \"previousCycle\": 13, asserting it diffed cycle 13 against itself — unique in a history where cycles 9 through 13 all increment correctly. Second, artifact 09 dropped a passing machine-checked claim, everyOtherLabelHeldItsPlace, replacing it with a weaker gate carrying an escape hatch; the strict measurement is still true in the payload and the differ names the removal honestly, but it is the only claim removal anywhere in the set. Third, artifact 12's Android panel now hides a holding label its Windows twin still draws, where cycle 13 drew all four on both surfaces. Against that, the position guarantee survives everything I threw at it: positions.json is byte-identical across thirteen consecutive snapshots and matches the committed seeds exactly for all 161 nodes; a single perspective camera reproduces artifact 11's markers from those seed coordinates at 0.22 px RMS in cycle 14 and 0.25 px in cycle 13, so the visible cross-cycle shift there is a camera reframe and nothing more; artifact 11's canvas band is bit-identical between the Windows and Android panels and artifact 12's markers agree at dx=dy=0.00 on the small map and within 2 px on the 150-node map even with the rail on opposite sides; markers on 02, 04, 07 and 10 reproduce cycle 13 at a median of 0.00 to 0.08 px; and the videos contain dozens of half-second windows with literally zero canvas pixels changed, including the final stretch of 19 after the drop. No placed node moved without an explicit act, in any surface, in any lens, in either cycle. Evidence practice is otherwise well above the norm: every file in both snapshots verifies against its sha256 ledger, all twenty artifacts carry fresh mtimes inside one monotone run window, every video exceeds its stated minimum, environment substitutions are printed on the frames themselves rather than only in prose — 'no camera pass-through', 'SYNTHESISED CAPTURE · HAND-VOCABULARY-SLOW.Y4M · REAL HANDLANDMARKER', 'wine · the built binary' — and DIFF.json reports against its own interest, naming the claim it removed and the recipes it changed. What keeps both categories off a higher mark is that the claim ledger is largely tautological, with the acceptance rule for most claims being the constant true, so its rigour lives in capture code that changed on eight of twenty artifacts this cycle; I had to verify the load-bearing claims against pixels myself, and where I did — 03's 252 px anchor travel, 12's unoccluded nodes, 06's placed map beyond the boundary, 17's return to its starting layout — the claims were true of the shipped picture and not merely of the model."
}
```