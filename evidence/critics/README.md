# Critic verdicts, as received

Each critic is a fresh-context subagent given only the mission goal, the frozen
evidence set for the cycle, and the rubric — never the build history (§04).
Their verdicts are written here **verbatim, as they are received, before any
response is written to them**.

Cycle 6's verdicts were returned into the conversation and never written down.
When that context was cut they were gone, and only the scores and findings
carried forward in the progress state survived. §09 makes a critic score altered
by the builder a failure condition; a score that exists only in the builder's
context is one context cut away from being whatever the builder says it was.

One file per critic per cycle: `<role>-cycle-<n>.md`.
