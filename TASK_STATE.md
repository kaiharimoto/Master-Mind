# TASK_STATE.md — resume note

**Read `brief/MISSION_BRIEF.md`, then `DIRECTION.md`, then this file.**
Open the newest `checkpoints/` entry and continue from **NEXT ACTION**.

---

## Where the run is

| | |
|---|---|
| Phase | review |
| Build-order step | STEP 09 — polish and final evidence (STEPs 01–08 complete) |
| Review cycle | 2 captured and frozen; critics running |
| Rubric score | **85 / 100** at cycle 1 — no category below its minimum, both hard gates met |
| Artifacts captured | **20 of 20, all as defined** |
| Cold start | **passed** — 161 positions verified against the committed fixtures as model values |

## Completed

- **STEP 01** Environment census (`report.md` F-001…F-014). Unity downloaded,
  installed and run: it refuses without a licence (exit 198) — evidence in
  `docs/evidence-notes/unity-probe.md`.
- **STEP 02** Shared model with property-level LWW; two committed deterministic
  seed fixtures (150 nodes / 208 links, and 11 / 6), content-hashed.
- **STEP 03** Canvas editing: quick-add into holding, drag-to-place, move,
  connect, edit text/colour/label, five node states.
- **STEP 04** Sync service; twin composite proven **across a real platform
  boundary** — the Windows side is the built win32-x64 binary running under Wine.
- **STEP 05** AR lens with real `deviceorientation` control and six touch gestures.
- **STEP 06** MediaPipe hand tracking; four poses; 100% pose accuracy on a
  held-out clip; mouse equivalent for every operation.
- **STEP 07** Search fly-to in every lens.
- **STEP 08** Finder harness: prompt export, tolerant parser, three suggestion
  types, accept/reject.
- Both platform targets build (F-013). Cold-start `src/bootstrap.sh` written.
- Capture harness: 20 drivers, 20 recipes, determinism seed, SSIM diff with a
  per-artifact tolerance, position comparison as model values, contact sheets,
  three critic briefs.

## Last successful commands

```
node harness/cycle.mjs 1                     # 20/20 captured as defined
node harness/diff-evidence.mjs evidence evidence/history/cycle-0
    -> 15 unchanged, 5 changed (03,07,11,12,16 — all deliberately edited)
    -> positions IDENTICAL
node harness/test-model.mjs                  # 11/11 invariants pass
node harness/validate-poses.mjs              # 99.0% detection, 100% pose accuracy
node src/build-windows.mjs                   # Master Mind.exe, 188.8 MB
node src/build-android.mjs                   # app-debug.apk, 22.8 MB
```

## Worst problems

1. **Label collision in dense districts.** At whole-brain scale the seeded map's
   dense cores overlap their labels. Mitigated by one-line labels, above/below
   stagger and a 2.45-unit minimum node separation; not eliminated.
2. **Interactive frame rate is ~12 fps** at 1920×1080 (F-002) and 8.5 fps inside
   the Wine-hosted Windows binary (F-007). Video is therefore rendered
   frame-accurate on the app's own clock (F-010).
3. **Artifact 17 was capturing an empty frame** for much of the take because a
   held pose drove an unbounded zoom. Fixed by rate-limiting continuous hand
   operations and clamping distance to a band around the framed view — needs a
   recapture to confirm.

## Known failures

*None outstanding. Every failure found so far has been fixed and recaptured:
fly-to and double-tap running on the wall clock instead of the app clock; a
stationary press being treated as a drag; the long-press timer never cancelling
during an orbit; the packaged Electron path bug; the DevTools sensor override
not delivering orientation (F-014).*

## Cycle 1 result

| Category | Score | Weight | Minimum |
|---|---:|---:|---:|
| 01 Core workflow | 21 | 25 | 20 |
| 02 Landmarks live | 20 | 25 | 20 |
| 03 One model and sacred positions (hard gate) | 18 | 20 | 17 |
| 04 Evidence and report integrity (hard gate) | 13.5 | 15 | 13.5 |
| 05 Quality compliance | 8 | 10 | 8 |
| 06 Finder round-trip | 4.5 | 5 | 4 |
| **Total** | **85** | **100** | |

Regression-free, no position regression. Nineteen findings across the three
critics; every one is recorded in `report.md` with what was done. All are fixed
in cycle 2 except one that was a recapture rather than a code change.

The Art Director ruled the delegated organic-versus-holographic question:
**organic-bioluminescent**, recorded in `DIRECTION.md` D-004 and not reopened.

## NEXT ACTION

Read the three cycle-2 critic reports, record scores and findings in
`report.md`, and open cycle 3 against whichever category is furthest from its
weight. The gap to the 90/100 exit threshold is 5 points, and the cycle-1
findings driving it — label collision at whole-brain zoom, AR shown only as a
still, the missing cross-surface position edit, the missing placement
acceptance — are all addressed in the cycle-2 set.
