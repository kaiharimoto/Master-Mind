# LOCKED.md — frozen blocks

`brief/MISSION_BRIEF.md` is the mission brief, copied byte-for-byte from the
uploaded source. Its SHA-256 is recorded below. The following blocks of that
file are **frozen** for the duration of the run. They are never edited,
re-scoped, reordered, or reinterpreted; deviation from them happens only as a
recorded finding in `report.md`.

| Block | Lines in MISSION_BRIEF.md | Frozen content |
|---|---|---|
| `00 / RUNTIME` | 11–26 | COMPUTE, PRIMARY TOOL, HARNESS, STARTING ASSETS, BUDGET, WALL CLOCK, AUTONOMY |
| `01 / TASK` | 32–49 | SCALE, JUDGED BY, defining story, avoid-list |
| `02 / PROTOCOL` | 52–95 | working documents, heartbeat block, resume rule |
| `03 / BUILD ORDER` | 99–138 | STEP 01 … STEP 09, in this order |
| `04 / REVIEW LOOP` | 142–163 | 15-cycle floor, the 3 named critics and their scopes, fresh-context rule |
| `05 / RUBRIC` | 166–186 | the 6 categories, their weights and minima, the 90/100 exit threshold |
| `06 / VALIDATION` | 189–212 | cold-start rules and the confirmation checklist |
| `07 / BRIEF` | 216–338 | the 10 required parts, relationships, component families and floors, palette, materials, atmosphere, detail standard, evidence of use |
| `08 / DELIVERABLES` | 342–446 | the 20 artifacts — **names, ordinals, definitions and minimum resolutions** — and the file structure |
| `09 / FAILURE CONDITIONS` | 451–466 | every failure condition |

## What "frozen" means in practice

- The **20 artifact ordinals, filenames, definitions and minimum resolutions**
  in `08 / DELIVERABLES` never change. If an artifact cannot be captured as
  defined in this environment, it is captured through the nearest honest
  substitute and the substitution is written up in `report.md` as a finding.
  The definition itself is not rewritten to match what was achievable.
- The **rubric** in `05` is scored by the three critics of `04`. The builder
  never edits a critic's score. Disagreement is recorded as a rebuttal in
  `report.md` and settled only by re-scoring against the same evidence.
- The **build order** in `03` is worked in order. An artifact that a build step
  has not yet reached is recorded as `not yet buildable` — which is distinct
  from an environment substitution and is not counted against category 04.
- A decision recorded in `DIRECTION.md` is **not reopened**, including the
  one-time organic-versus-holographic ruling.

## Hash of the frozen source

1ac57cfbde95e22cb3b0c59851bd24d1a37918ca800f7d335c9632fd24eb5675  brief/MISSION_BRIEF.md

Recorded at bootstrap, before any implementation existed.
