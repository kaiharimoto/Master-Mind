# TASK_STATE.md — resume note

**Read `brief/MISSION_BRIEF.md`, then `DIRECTION.md`, then this file.**
Open the newest `checkpoints/` entry and continue from **NEXT ACTION**.

---

## Where the run is

| | |
|---|---|
| Phase | review |
| Build-order step | STEP 09 — polish and final evidence (STEPs 01–08 complete) |
| Review cycle | **8 complete.** All three critics dispatched strictly sequentially, all three verdicts written verbatim, all findings answered |
| Rubric score | **84.5 / 100** at cycle 8 — 21 + 21 + 17 + 13 + 8 + 4.5, **every category at or above its minimum**, both hard gates met. **NOT regression-free**: the Auditor called artifact 02 a regression on label declutter, since fixed |
| Score history | 85 → 86.1 → 88.0 → 86.75 → 85.5 → 88.0 → 82.0 → 84.5 (cycles 1–8) |
| Artifacts captured | **20 of 20, all as defined**, in every frozen cycle |
| Positions | **identical for eight consecutive cycles**, compared as model values |
| Exit condition | total ≥ 90, both hard gates, two consecutive regression-free cycles — or the 15-cycle cap with a final report listing every unmet gate |
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
node harness/cycle.mjs 7                     # 20/20 captured as defined
    -> diff vs frozen cycle-6: 6 unchanged, 13 changed, 1 uncomparable
    -> positions IDENTICAL (seventh consecutive cycle)
node harness/run-capture.mjs --only 06       # recaptured after the reframing
node harness/gen-recipes.mjs                 # 20 recipes regenerated from the drivers
node harness/test-model.mjs                  # 11/11 invariants pass
node harness/validate-poses.mjs              # 99.0% detection, 100% pose accuracy
bash src/bootstrap.sh                        # cold start, 9/9, 161 positions verified
```

## Worst problems

1. **Two faults were found in the regression instrument itself this cycle**
   (F-026, F-027). Every "regression-free" verdict before cycle 7 was made on a
   diff that compared against the working directory rather than the frozen set
   the critics read, and on a video comparison that saw only the first four
   seconds of each take. Both are fixed; the earlier verdicts stand as recorded
   but were made on a weaker instrument, and that is stated in `report.md`.
2. **Label collision in dense districts.** Bright-tier labels are disjoint *by
   construction* and now audited against the drawn glyphs (`labelDrawAudit`,
   worst overhang 0.00 px on artifacts 02, 04 and 10). What remains is that some
   labels are shortened or faded at whole-map framing; the frame declares how
   many.
3. **Interactive frame rate is ~12 fps** at 1920×1080 (F-002) and 8.5 fps inside
   the Wine-hosted Windows binary (F-007). Video is therefore rendered
   frame-accurate on the app's own clock (F-010, D-011).
4. **Depth reads weakly on the bright states.** D-016 bounds distance to each
   state's own rung band, which is what makes the ladder survive depth; the cost
   is that *selected* can only darken 9 % across the whole depth range.

## Known failures

*None outstanding.* Every capture failure is recorded in `report.md` under
**Capture failures**, with what it cost and how it was resolved; six have
occurred, in cycles 5, 6 and 7, and none has ever cost an artifact in a frozen,
reviewed set. No capture has ever had its definition narrowed to make it pass.

## Cycle 6 result — the last scored cycle

| Category | Score | Weight | Minimum |
|---|---:|---:|---:|
| 01 Core workflow | 21.5 | 25 | 20 |
| 02 Landmarks live | 22.5 | 25 | 20 |
| 03 One model and sacred positions (hard gate) | 17.5 | 20 | 17 |
| 04 Evidence and report integrity (hard gate) | 13.5 | 15 | 13 |
| 05 Quality compliance | 8.5 | 10 | 8 |
| 06 Finder round-trip | 4.5 | 5 | 4 |
| **Total** | **88.0** | **100** | |

Regression-free, no position regression, zero declared-claim failures.
**Cycle 6's verdicts were never written to disk and were lost with the
context**; from cycle 7 each critic's report is written to
`evidence/critics/<role>-cycle-N.md` as it is received, before any response is
written to it (§09).

## What cycle 7 changed

Answering cycle 6's findings: shortened labels cut at word boundaries and carry
an ellipsis; artifact 14 gained a magnified detail row and lost its empty 43 %;
artifact 12 shows the 150-node map on both sockets; contact-sheet timestamps
moved into a gutter; D-016 bounds depth inside each state's rung band; the
round-trip rejects a placement; artifact 18 spends its time on the flights and
steps to a second hit; a node's age is inspectable in the editor.

Eight findings came out of the work itself — F-020 through F-027 — including a
false machine-checked claim of the F-018 class (F-021), a pan calibrated by a
constant twice the true scale (F-024), a label arbiter reasoning about a
different layout from the one drawn (F-025), and the two regression-instrument
faults above.

## NEXT ACTION

Read the three cycle-8 critic verdicts as they arrive, **write each one to
`evidence/critics/<role>-cycle-8.md` verbatim before responding to it**, record
scores and findings in `report.md`, and open cycle 9.

Cycle 7 fell to 82.0 with quality compliance at 6 against a minimum of 8 — the
first category below a minimum in the run. Cycle 8 answers both of that cycle's
blocking findings at the mechanism, with the gains measured on the shipped
frames:

- **Every label is drawn.** Artifacts 02, 04 and 06 draw 150 of 150 with zero
  hidden, zero overlaps of any kind, and every drawn label at 3:1 or better
  against the ground. Cycle 6 hid 26 and 17; cycle 7 hid 33 and 30.
- **Filaments are visible.** The two modal filament values are (34,27,22) and
  (46,38,32) against an (18,14,11) ground — 1.49:1 and 1.90:1, against the
  1.06:1 the Art Director measured and the 1.35:1 the ruling asked for.
- The far ring and its leaders implement the Art Director's binding ruling:
  a label pushed into free canvas rather than dropped, and dropped only when
  the canvas is genuinely full.

The exit needs total ≥ 90, every category at or above its minimum, and two
consecutive regression-free cycles — so cycles 8 and 9 both.
