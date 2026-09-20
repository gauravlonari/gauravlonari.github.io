---
title: Idempotent checkout
order: 2
result: Replay-safe checkout; no member loses benefits to a race
---
#### Problem
Enrolment checkout wrote a member's chosen benefits asynchronously while a separate confirmation step marked the member enrolled. Under the wrong timing — a retry, a double submit, a slow write — an empty checkout could land after a full one, wipe the benefits, and still mark the member enrolled. In health insurance that is someone's coverage.

#### Decision
Model checkout as explicit states with guarded transitions. A confirmation cannot advance from a state that has no persisted selection; a write that would replace a non-empty selection with an empty one is rejected; and every step is idempotent, so a replayed request produces the same end state as the first.

#### Result
The failure mode became impossible rather than unlikely. Support escalations for "enrolled but no benefits" stopped, and the same guards now protect every new purchase flow added to the portal.
