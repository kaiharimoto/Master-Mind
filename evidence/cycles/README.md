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
