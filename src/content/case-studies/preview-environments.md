---
title: Per-PR preview environments
order: 1
result: Usable product link in under 60 seconds per pull request
---
#### Problem
A change was "done" when it merged, but nobody outside engineering could use it until it reached a shared staging environment — often days later. Design waited to review, QA waited to test, product waited to check copy. Every round of feedback restarted the wait.

#### Decision
Give every pull request its own deployed instance, reachable at a stable URL that updates on each commit. Only the changed app is built; unchanged services route to shared staging behind a gateway, so a frontend PR does not need its own backend. Idle instances stop after a few minutes and wake on the next request.

#### Result
Commit-to-usable-link time went from days to under 60 seconds. Reviewers open the PR link instead of asking for a deploy. The system was later written up by engineering leadership as a team-wide practice.
