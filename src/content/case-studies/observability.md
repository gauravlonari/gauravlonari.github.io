---
title: Observability from zero
order: 4
result: MTTR on frontend incidents from 2 days to under 1 hour
---
#### Problem
Frontend failures surfaced when a customer wrote in. There was no way to tell a real regression from an expected validation error, no per-release view, and nothing that paged anyone.

#### Decision
Instrument the journeys that matter — checkout, dashboard load, login — as 21 named duration vitals, and record expected outcomes (a wrong OTP, a known 4xx) as actions rather than errors, so the error stream only carries surprises. Build one dashboard around it: p95 latency and error rate by endpoint, Core Web Vitals by route, errors per session by release. Wire alerting to the parts that page.

#### Result
Mean time to resolve frontend incidents went from about two days to under an hour. Escalations went from routine to rare, and every release now has a before/after view within minutes of deploy.
