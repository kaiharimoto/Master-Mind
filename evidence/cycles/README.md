# Frozen evidence sets, and the ledgers that keep them frozen

`cycle-<n>/` is the exact set of artifacts the three critics of cycle *n* read.
Nothing may change inside it after the cycle is frozen. `cycle-<n>.sha256` is
that set's ledger — one `sha256  relative/path` line per file, sorted — and it
lives **beside** the directory, not inside it, so that replacing the whole
directory does not replace its own attestation along with it.

That distinction is not theoretical. The first version of this guard compared
`cycle-<n>/` against the `MANIFEST.json` *inside* `cycle-<n>/`. When cycle 8's
first run archived the working set over the frozen cycle-7 directory, manifest
and artifacts were overwritten together; the comparison was self-consistent and
reported the set intact. It was not — 15 of cycle 7's files had been replaced by
cycle 8's, and I committed that overwrite (`11597f3`) before noticing. It
surfaced only because the cycle-8 Audience critic reported artifacts 02, 04, 06
and 10 as byte-identical to cycle 7. They were identical because cycle 7's
copies had become cycle 8's. Restored with
`git checkout f1d5805 -- evidence/cycles/cycle-7`. See report.md F-030.

## Provenance of these ledgers

Ledgers for cycles 2–8 were **back-filled** after that incident, not written at
freeze time, so they are only as trustworthy as the directories they were
computed from. Each was therefore checked against the commit that first
introduced it before its ledger was written:

| set | introducing commit | state when the ledger was taken |
|---|---|---|
| cycle-2 | `6da3d3e` | identical to the introducing commit |
| cycle-3 | `d0c9e32` | identical |
| cycle-4 | `b1feb6a` | identical |
| cycle-5 | `6cb76b2` | identical |
| cycle-6 | `68205ed` | identical |
| cycle-7 | `f1d5805` | **restored** from `f1d5805`, then identical |
| cycle-8 | `b24c57c` | identical |

From cycle 9 onward `harness/cycle.mjs` writes the ledger at freeze time and
verifies the previous cycle's ledger before it will diff against that set; a
mismatch exits 2 rather than producing a regression claim about a set that has
changed since it was reviewed.

## One post-freeze correction, recorded

`cycle-8/DIFF.json` was rewritten after the set was frozen. The freeze-time copy
was the comparison against the **corrupted** cycle-7 baseline (13 of 20 changed,
02/04/06/10 wrongly absent); it was a false claim about the set and could not be
left in front of the Auditor, whose whole category rests on that comparison. It
was replaced by the re-run against the restored cycle-7 set (18 of 20 changed, 7
substantive) and `cycle-8.sha256` was regenerated, **before** the Auditor and Art
Director were dispatched. The Audience critic had already read the freeze-time
copy; its comparison section is void for that reason and says so.

No artifact was touched — only the derived diff file. This is the sole
post-freeze edit to any frozen set in the run, and it is the reason the ledger
is regenerated rather than silently reconciled.

## Cycle 12 was frozen twice, and this is the disclosure

The first cycle-12 run captured **15 of 20**. Five artifacts failed, every one
of them on a claim added during cycle 12 itself, and every one of those failures
was a real finding rather than a strict gate — three defects in the app or the
drivers, and two instruments that could not fail for the reason they existed.
They are written up in `report.md`.

That 15/20 set was frozen because `cycle.mjs` freezes whatever the run
produced, which is the correct behaviour: a cycle that failed artifacts must not
be able to quietly become a cycle that did not. It was then **replaced** by a
second run of the same cycle number after the five were fixed, with
`--refreeze`, which prints what it is replacing.

No critic read the first cycle-12 set. The three cycle-12 verdicts in
`evidence/critics/` were all written against the second.

Two guards were added at the same time, because re-running a cycle number is
evidently a thing this build needs to do and both doors into an overwrite were
open:

- `history/cycle-N` is written **once**. Re-running cycle N would otherwise
  archive the current working set over the snapshot of cycle N-1 — the cycle-7
  incident above, by a different route.
- Re-freezing an existing `cycles/cycle-N` requires `--refreeze` and refuses
  otherwise, naming how many artifacts the set it is replacing had captured.

## cycle-14 records itself as cycle 13, and is left that way on purpose

The frozen `cycles/cycle-14/` set is internally mislabelled. `MANIFEST.json`
reads `"cycle": 13`, every artifact reads `"capturedInCycle": 13`, and
`DIFF.json` reads `"cycle": 13, "previousCycle": 13` — a record stating on its
face that it diffed a cycle against itself. The cycle-14 Auditor found it and
scored it a major finding; its verdict is in
`evidence/critics/auditor-cycle-14.md`.

The cause is procedural. `run-capture.mjs` inherits the previous manifest's
cycle number when it is not told one, which is right for a `--only` recapture
inside a cycle and wrong for the first run of a new one. Cycle 14 was captured
by running the capture directly and then frozen with `cycle.mjs 14
--skip-capture`, which named the directory and wrote the ledger but did not
restamp the records inside it.

**The frozen files are not edited to correct it.** A frozen set is what the
critics read, and three verdicts were written against these bytes; rewriting
them now would make the ledger disagree with the review, which is a worse fault
than the one it fixes. The correction lives here, in the critic's verdict, and
in `report.md`.

Three machine checks were added so it cannot recur:

- The cycle number is written to `evidence/CYCLE` by `cycle.mjs` **before** the
  capture runs, and `run-capture.mjs` reads it when no `--cycle` flag is given —
  so a standalone capture during cycle N stamps N.
- `cycle.mjs` refuses to freeze a working set whose `MANIFEST.cycle` does not
  match the cycle it was invoked with, and lists any artifact carried over from
  an earlier cycle.
- `diff-evidence.mjs` records `cycleAdvanced` and a `cycleDisagreement` line
  whenever a set claims a cycle that does not follow the one it is diffed
  against.
