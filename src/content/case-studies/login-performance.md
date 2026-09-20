---
title: Login performance
order: 3
result: 4.5 s → 1.5 s load; 3.3 MB → 230 KB initial JavaScript; Lighthouse 60 → 90
---
#### Problem
The portal's login page shipped 3.3 MB of JavaScript before a member could type a phone number — the whole app, a Firestore SDK used for one timestamp, and a component library imported whole. On slow 4G that was 26 seconds.

#### Decision
Measure first, then remove: instrument the page, then code-split by route, lazy-load the animation and date-picker chunks, drop the Firestore SDK for one line of arithmetic, self-host the font with a preload, and land tree-shaking in the shared component library so every consumer imports only what it renders.

#### Result
Login load time fell 67% (4.5 s to 1.5 s; 26 s to 6 s on slow 4G). Initial JavaScript fell 93% (3.3 MB to 230 KB). Lighthouse Performance went from 60 to 90. Total shipped JavaScript across the portal fell 54%.
