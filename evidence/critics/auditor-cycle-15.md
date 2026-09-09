# The Auditor — cycle 15

*Written here verbatim, as received, before any response was made to it.*
*Categories: 03 One model and sacred positions (20, min 17) · 04 Evidence and integrity (15, min 13). Both are hard gates.*

**Both gates clear — 18 and 13 — and the cycle is declared NOT regression-free.**

**Its major finding is true and I have reproduced it.** `MANIFEST.json`'s
`check` block for artifacts 03, 04 and 05 attests byte counts and digests that
do not match the files in the frozen set, with `check.ok` true on all three:

| | manifest | shipped |
|---|---|---|
| 03 | 843703 · `318a180ab6d5…` | 835986 · `6cab90b804b9…` |
| 04 | 444048 · `e4f6513b438b…` | 444033 · `905bfa89e425…` |
| 05 | 617999 · `c83eadfd6f05…` | 617865 · `5f6e74aebeb9…` |

It ran the same test over every frozen set and found cycles 2–14 clean; this is
new in cycle 15. All three have `capturedInThisRun: false` and
`digestUnchangedFromPreviousRun: null` — the same bookkeeping gap showing through
a second field, exactly as it says.

**The cause is mine and it is the interruptions.** A killed run leaves files on
disk that no manifest describes, and `git checkout -- evidence/` after the
container restart replaced files out-of-band; a later `--only` run then carries
the *previous* manifest's `check` for every artifact it did not itself capture,
so the record and the bytes drift apart with nothing looking. The set's other
records — `cycle-15.sha256` and `DIFF.json` — hash the shipped files, which is
why they disagree with the manifest and why this critic could catch it.

**The frozen set is NOT re-frozen to fix it.** Two critics have now read these
bytes, and replacing them would make the ledger disagree with the review — a
worse fault than the one it repairs. The fix goes into the harness so it cannot
recur, the defect is recorded here and in `report.md`, and it is listed as an
unmet gate in the final report.

Its other verdict is the one this whole run has been for, and it is stated
without hedging: **"There is NO position regression"** — 227 markers on 02 and
04 reproducing cycle 14 to a maximum of 0.365 px under identical cameras, the
twin pair position-identical across surfaces on 51 markers of the 150-node map,
08's six placed-graph markers bit-identical across its panels, and every marker
in videos 19 and 17 holding at exactly 0.00 px through every span between
explicit acts.

Recorded before the response, unedited.

*Recovered from the subagent's own transcript rather than retyped.*

---

I have completed my verification. Here is my return value.

```json
{
  "critic": "auditor",
  "cycle": 15,
  "regressionFree": false,
  "positionRegression": false,
  "categories": [
    {
      "id": "03",
      "name": "One model and sacred positions",
      "weight": 20,
      "minimum": 17,
      "score": 18,
      "reasoning": "I reproduced the position claims rather than reading them. Artifact 11: the two panels are pixel-identical below the chrome — differences above threshold occur only in the side-list text block (y 254-319, x 655-884); the five detectable colour markers coincide at (658.00,296.92), (629.89,448.11), (510.19,462.28), (503.44,532.93), (588.42,573.89) in both halves, to two decimal places. Artifact 12: best panel offset is exactly 960 px, and all 51 markers in the 150-node lower twin match their opposite number within 0.5 px, with pos sha 4ad560a8a2 printed on both panels; the upper twin behaves the same and only the dragged node s480af97d09 changes. Across cycles, artifacts 02 and 04 hold the identical camera recorded in cycle 14 (02: yaw 0.42 / pitch 0.2 / dist 120.110861, same target; 04: yaw 0.3 / pitch 0.16 / dist 128.755009) and 227 of their markers match cycle 14 to a maximum of 0.365 px — the handful that moved are the 27-px list bullets at x=1501/1714 and x=231/18, which track the list content (unlabelled 87→80, 82→77), not the map. Artifact 08's six placed-graph markers are bit-identical across its two panels ((351.02,239.42), (455.71,176.40), (503.06,296.26), (515.00,215.50), (600.07,337.19), (637.91,203.35)) and the holding ring keeps its spots minus the one removed. Artifact 03's own arithmetic verifies: I measured the anchor ring at (279.5,529.5) and (396.5,307.5) in panel coordinates, giving 250.9 px of travel on the image and 270.4 px in the device frame against the 252 / 271 printed on the frame. Sampling videos 19 and 17 at 2 fps, the marker sets are bit-stable — maximum nearest-neighbour shift exactly 0.00 px — across every span between explicit acts, including nine consecutive idle frames at the head of 19 and its last three frames after the search settles. Nothing auto-tidies, drifts or wobbles. Two points held it back from full marks: artifact 11's framing changed between cycles by a uniform scale of 1.0838 (affine residual ≤0.88 px, rotation ~0.001 rad), and cycle 14 recorded no camera for 11 at all, so the new cameraPinned claim cannot be checked across cycles from the record; and the set's own position ledger (positions.json) is a byte-identical dump of the committed seed in all fourteen frozen cycles, which proves the seed unchanged, not that the app preserved anything — the marker-level cross-cycle comparison that would prove it exists nowhere in the set and had to be computed here."
    },
    {
      "id": "04",
      "name": "Evidence and report integrity",
      "weight": 15,
      "minimum": 13,
      "score": 13,
      "reasoning": "The recapture discipline itself is sound and the disclosure is genuinely good. cycle-15.sha256 verifies clean against all 29 files with no unlisted extras, cycle-14.sha256 likewise, and the frozen cycle-15/ set is byte-identical to the working evidence/ root. All 20 artifacts carry status captured, capturedInCycle 15, and file mtimes strictly after cycle 14's freeze at 2026-09-06T14:19:08Z (PNGs 17:04-17:05 Sep 6, videos 04:42-04:58 Sep 7, artifacts 11/12 06:30 Sep 9), so none was carried over; staleFromEarlierCycles is empty. The two byte-identical artifacts (01, 15) are declared as such in DIFF.json and were re-rendered inside the cycle window — a deterministic re-render disclosed, not a copy passed off. I diffed all 166 cycle-14 claims against all 174 cycle-15 claims by name, rule text and ruleSha: 8 added, 0 removed, 0 rules changed, 0 failing — DIFF.json's claimsRemovedIds [] is true. Its SSIM figures are real: my independent 8x8-block SSIM reproduces them within 0.005 on seven artifacts. The videos exceed every stated minimum and the contact sheets are genuine 20-tile derivatives of these takes. The cycle-14 mislabelling is fixed and named openly in DIFF.json's headerDisagreement rather than buried, and the environment substitutions are printed on the artifacts themselves — wine and the built binary on the Windows panel, android device profile on the other, ANGLE/SwiftShader named on both, and 'no camera pass-through' on the AR hero. Against that: MANIFEST.json's check block for artifacts 03, 04 and 05 records digests and byte counts that do not match the shipped files, with check.ok true on all three, and those three digests exist nowhere on disk. cycle-15.sha256 and DIFF.json both hash the shipped files, so three of the set's own records disagree with each other. Running the same test over every frozen set, cycles 2-14 have zero such mismatches; cycle 15 is the first. That is the exact failure mode this category exists to catch, on the hero and on a designated regression-watch artifact, so the score sits at the gate rather than above it."
    }
  ],
  "findings": [
    {
      "artifact": "04",
      "severity": "major",
      "subsystem": "evidence",
      "observed": "MANIFEST.json's check block for three artifacts describes files that are not in the set. 03: manifest bytes 843703 / sha 318a180ab6d57ca5... vs shipped 835986 / 6cab90b804b9693c...; 04: 444048 / e4f6513b438b7215... vs 444033 / 905bfa89e425cc68...; 05: 617999 / c83eadfd6f05f372... vs 617865 / 5f6e74aebeb981d0.... All three carry check.ok true. Grepping the whole tree, the three manifest digests appear only inside MANIFEST.json itself — the renders they attest were never shipped and no longer exist. cycle-15.sha256 and DIFF.json both hash the shipped files, so the set's three records disagree. Recomputing manifest-vs-file digests for every frozen set: cycles 2 through 14 have zero mismatches; cycle 15 has three. These are also precisely the three artifacts whose digestUnchangedFromPreviousRun is null rather than a boolean.",
      "rootCause": "The check block is written when the capture function returns, but 03, 04 and 05 were re-rendered by a later pass in the same run (a re-composite or re-encode: the byte deltas are -7717, -15 and -134) and the manifest entry was not refreshed. The null digestUnchangedFromPreviousRun on exactly those three is the same bookkeeping gap showing through a second field.",
      "correction": "Hash the artifact file from disk as the last step before the manifest is written, not when the capture function returns, and make cycle.mjs refuse to freeze a set in which any artifact's check.sha256 does not equal the sha256 of the file it names — the same guard cycle-15.sha256 already applies from outside the directory, applied from inside it. Then re-run the capture for 03, 04 and 05 so their claims and measured values are tied to the bytes that ship."
    },
    {
      "artifact": "04",
      "severity": "major",
      "subsystem": "evidence",
      "observed": "Because of the digest divergence above, every claim and every measured value recorded for the hero (03), for mind expansion (04) and for hand tracking (05) was computed against a picture that is not the one in the frozen set. 04 is one of the four artifacts category 03 names for continuous regression watch, so its position claims — cameraPinned, nodes === 150, allFiveStatesAtWholeMapDensity — are, as recorded, claims about a render nobody reviewed.",
      "rootCause": "Same as above: claims and check are written from the in-memory capture result, and the shipped file was produced by a later step.",
      "correction": "Until the hashing order is fixed, treat 03/04/05's recorded claims as unverified and re-run those three captures. I independently verified the shipped 04 (126 of 132 markers within 0.365 px of cycle 14 under an identical camera) and the shipped 03 (anchor travel 250.9 px measured against 252 px printed), so the pictures are in fact sound — but the set does not establish that, and a reader without a pixel harness cannot."
    },
    {
      "artifact": "04",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "build.treeDirtyAtCapture is true in cycle 15 where it was false in cycle 14, and the recorded build (gitHead 36f5675dc845, 2026-09-07T04:41:10Z) postdates the capture of 15 of the 20 artifacts, whose file mtimes are 2026-09-06T17:04-17:05. Yet all 20 artifacts record recipe.appSha 22b293298fb8cc2f — the final bundle. The manifest asserts one provenance for a set captured across at least three sittings on a working tree that was not clean.",
      "rootCause": "recipe.appSha is stamped from the current build when the manifest is serialised rather than recorded from the bundle in force at each artifact's capture, so a --only recapture rewrites the provenance of artifacts it did not touch.",
      "correction": "Record appSha, gitHead and treeDirtyAtCapture per artifact at the moment that artifact is captured, and have cycle.mjs list any artifact in the set whose recorded build differs from the freeze-time build so a mixed-build cycle is visible rather than flattened."
    },
    {
      "artifact": "04",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "04's on-frame naming accounting does not close. The result records nodesOnScreen 150, namesDrawn 72, namesListed 77 and thoughtsLeftUnnamed 0; 72 + 77 = 149. The left list in the shipped frame sums to exactly 77 (13+12+11+9+9+6+6+5+3+2+1), confirming namesListed, so one of the 150 thoughts is neither drawn nor listed while everyThoughtOnScreenIsNamed reads true. Cycle 14 has the same gap (67 + 82 = 149), so this is not a cycle-15 regression. All 150 seed nodes have non-empty text, so no node is unnamed in the model.",
      "rootCause": "The selected node's name most likely reaches the frame through a third channel — the NODE editor's Text field — and is counted by the arbiter without being added to either drawn or listed, so the predicate passes on a total the two published counters do not reach.",
      "correction": "Make everyThoughtOnScreenIsNamed assert namesDrawn + namesListed + namesInEditor === nodesOnScreen and publish the third term on the frame, so the claim is checkable from the picture instead of asserted beside it."
    },
    {
      "artifact": "11",
      "severity": "minor",
      "subsystem": "sync",
      "observed": "Artifact 11's framing changed between cycles by a uniform scale of 1.0838 with essentially zero rotation or shear (affine residuals 0.03-0.88 px on six markers), and the map-talk markers consequently sit 5.7-16.8 px from where they sat in cycle 14. Cycle 15 newly records cameraFrozen {yaw 0.34, pitch 0.16, dist 53.416374, target [-0.15,-3.35,1.75]}; cycle 14's record for 11 contains no camera block at all, so the change cannot be checked against the previous set. The model is provably untouched — both cycles print pos sha 198501d063 on both panels — so this is a framing change, not a node move.",
      "rootCause": "The twin capture fits the camera to the viewport rather than pinning it to recorded coordinates, so a change to the viewport (cycle 15 adds a 'listed at right' side panel to both twin panels) re-fits the camera and rescales the map.",
      "correction": "Pin the twin's camera to the literal yaw/pitch/dist/target now recorded in cameraFrozen rather than re-fitting it, and print those four numbers on the panels the way 12 prints 'yaw 0.340 pitch 0.160 dist 312.3' — then cameraPinned becomes readable from the frame and comparable across cycles instead of being a self-asserted boolean."
    },
    {
      "artifact": "04",
      "severity": "minor",
      "subsystem": "evidence",
      "observed": "positions.json is byte-identical (sha 6558507f7990...) in all fourteen frozen cycles and equals the committed seeds exactly — I checked all 161 nodes against seeds/map-fermentation.json and seeds/map-talk.json, whose own sha256s match seeds/MANIFEST.json, with zero coordinate mismatches. DIFF.positions therefore reports identical: true every cycle by construction. DIFF.json says so honestly — 'the committed ledger after each capture wrote back — not a runtime drift measure' — and points instead at the idle windows in 16, 17, 19 and 20.",
      "rootCause": "The ledger is written back from the seed after each capture rather than read out of the running app at the end of the take, so it cannot detect an app that moved a node and then restored it, nor one that never loaded the position it drew.",
      "correction": "Add a cross-cycle marker-level position diff to diff-evidence.mjs — detect node markers in 02, 04, 11 and 12, match them against the previous cycle's under the recorded camera, and publish max and median displacement. It took about twenty lines here and it would have turned the strongest evidence in category 03 from something a critic must recompute into something the set states."
    }
  ],
  "comparisons": [
    { "artifact": "01", "verdict": "unchanged", "why": "Byte-identical to cycle 14 (sha 2374c44a2e20e376...), my SSIM 1.0. Declared in DIFF.json's bytesIdenticalIds; mtime 2026-09-06T17:04:15Z places the re-render inside cycle 15, so this is determinism, not a carry-over." },
    { "artifact": "02", "verdict": "improved", "why": "Two claims added (everyFilamentClearsTheGround, everyReducedLabelClearsTheContrastFloor), none removed; namesDrawn 63→70 and unlabelled 87→80. Camera identical to cycle 14 and 101 of 108 markers match to ≤0.127 px — the seven that moved are the 27-px list bullets at x=1501/1714 tracking the shortened list." },
    { "artifact": "03", "verdict": "regressed", "why": "The picture itself is at least as good (labelsHidden 61→53, namesDrawn up) and its printed arithmetic verifies — I measured 250.9 px of anchor travel against the 252 px it claims. But the manifest attests bytes 843703 / sha 318a180ab6d5..., while the shipped file is 835986 / 6cab90b804b9..., and the attested render exists nowhere. As evidence the hero no longer has a record that describes it." },
    { "artifact": "04", "verdict": "regressed", "why": "Same record fault: manifest 444048 / e4f6513b438b... against a shipped 444033 / 905bfa89e425.... The shipped pixels are sound — identical camera to cycle 14 and 126 of 132 markers within 0.365 px, with labels improved (hidden 82→77, drawn 67→72) — but on a designated regression-watch artifact the recorded claims belong to a different render." },
    { "artifact": "05", "verdict": "regressed", "why": "Same record fault: manifest 617999 / c83eadfd6f05... against a shipped 617865 / 5f6e74aebeb9.... Eleven claims recorded, all passing, none of them tied to the file in the set." },
    { "artifact": "06", "verdict": "improved", "why": "Recipe changed (fnSha 7b57d2816b8426b0 → 2b05b8c869fbf385), 15 claims all passing, none removed. 18 of 19 markers are bit-identical to cycle 14; the one that moved is a list bullet at x=1641." },
    { "artifact": "07", "verdict": "unchanged", "why": "SSIM 0.9894, claim set identical at 8, all 23 markers match cycle 14 within 0.126 px." },
    { "artifact": "08", "verdict": "improved", "why": "The largest substantive change in the set (SSIM 0.788), recipe changed and claim droppedAmongThePlacedGraph added. The dropped node now lands among the placed graph — the frame states 34.3 px clear of the nearest mark — and I verified the six placed-graph markers are at bit-identical coordinates in both panels, so cameraFrozenAcrossPanels holds in the pixels and only the dropped node moves." },
    { "artifact": "09", "verdict": "improved", "why": "Claim everyOtherLabelHeldItsPlace added, none removed; SSIM 0.990." },
    { "artifact": "10", "verdict": "unchanged", "why": "SSIM 0.976; 75 of 76 markers match to ≤0.199 px, the one exception being a list bullet at x=1641." },
    { "artifact": "11", "verdict": "improved", "why": "Claim cameraPinned added and a camera record (dist 53.416374) now exists where cycle 14 had none. Positions are pixel-identical across the twin — the node field diffs only in the side-list text. Marked improved despite the 1.084x reframing, which moves markers 5.7-16.8 px between cycles while pos sha 198501d063 is unchanged; see the minor finding." },
    { "artifact": "12", "verdict": "improved", "why": "Claim cameraPinned added, 18 claims all passing. All 51 markers in the 150-node lower twin match across surfaces within 0.5 px at a panel offset of exactly 960, and the 135 markers that persist from cycle 14 match to ≤0.239 px. Only the dragged node's drop point differs between runs, which is the explicit act the artifact exists to show." },
    { "artifact": "13", "verdict": "unchanged", "why": "SSIM 0.9948, four claims unchanged and passing." },
    { "artifact": "14", "verdict": "unchanged", "why": "SSIM 0.9954, ten claims unchanged and passing." },
    { "artifact": "15", "verdict": "unchanged", "why": "Byte-identical to cycle 14 (sha 28d7595c6d35259d...), declared in DIFF.json; mtime 2026-09-06T17:05:54Z places the re-render inside cycle 15." },
    { "artifact": "16", "verdict": "unchanged", "why": "SSIM 0.995; 1920x1080 h264 at 30 fps for 34 s against a 1920x1080 / 24 fps / 30 s minimum; five claims unchanged and passing." },
    { "artifact": "17", "verdict": "unchanged", "why": "Output moved materially (SSIM 0.779) but the eight claims, the specs (1920x1080, 30 fps, 41 s against a 24 s minimum) and the contact sheet's 20-tile span are all identical, and I could verify the stillness it rests on — sampled at 2 fps, several runs of consecutive frames show a maximum marker shift of exactly 0.00 px. I have no measurement that makes it better or worse than cycle 14." },
    { "artifact": "18", "verdict": "unchanged", "why": "SSIM 0.956; four claims unchanged and passing; 13 s at 1920x1080 / 30 fps against a 10 s minimum." },
    { "artifact": "19", "verdict": "unchanged", "why": "SSIM 0.914, six claims unchanged and passing. Sampling at 2 fps, marker positions are bit-stable (0.00 px) through nine consecutive idle frames at the head and through the final three frames after the search settles — the strongest single piece of anti-drift evidence in the set." },
    { "artifact": "20", "verdict": "improved", "why": "Two claims added (holdingBadgeFellOnCamera, placementLandedInThePixels) taking it from 9 to 11, none removed; recipe changed (fnSha 9387e777a5795c22 → 94057b86c7fab52c) and the take lengthened 47 s → 49 s." }
  ],
  "verdict": "Cycle 15 is NOT regression-free relative to cycle 14, and the regression is in the record rather than the build. MANIFEST.json's check block for artifacts 03, 04 and 05 attests digests and byte counts that do not match the files shipped in the frozen set (03: 843703/318a180ab6d5 vs 835986/6cab90b804b9; 04: 444048/e4f6513b438b vs 444033/905bfa89e425; 05: 617999/c83eadfd6f05 vs 617865/5f6e74aebeb9), with check.ok true on all three and the attested renders present nowhere on disk; cycle-15.sha256 and DIFF.json hash the shipped files, so three of the set's own records contradict each other. I ran that test over all fourteen frozen sets: cycles 2-14 have zero such mismatches, so this is new in cycle 15, and it lands on the hero and on one of the four artifacts category 03 names for continuous regression watch. Secondarily, build.treeDirtyAtCapture went false→true while every artifact still records the single final appSha, 15 of them captured eleven hours before that build existed. There is NO position regression: under identical recorded cameras, 02 and 04 reproduce cycle 14's node markers to a maximum of 0.365 px across 227 matches; the twin pair 11/12 is position-identical across surfaces to sub-pixel on 51 markers of the 150-node map and pixel-identical in 11's node field; 08's six placed-graph markers are bit-identical across its before/after panels; 03's printed 271 px / 252 px anchor travel measures 270.4 / 250.9; and sampled at 2 fps, videos 19 and 17 hold every marker at exactly 0.00 px of movement through every span between explicit acts. Nothing auto-tidies, nothing drifts, no node is dropped, and no claim was removed or weakened anywhere — 8 were added and 0 removed across 174. The honesty of this set is genuinely high: the substitutions are printed on the artifacts rather than confessed in prose, DIFF.json names its own weaknesses (including that positions.json is a seed write-back and not a drift measure) and names cycle 14's mislabelling instead of hiding it, and its SSIM numbers reproduce independently to within 0.005. That is why category 04 scores at its minimum rather than below it. But a hard gate on record integrity cannot absorb a first-ever three-artifact divergence between a manifest and the pictures it certifies, and cycle 16 should not be scored until those three are recaptured and cycle.mjs refuses to freeze a set whose manifest disagrees with its own files."
}
```