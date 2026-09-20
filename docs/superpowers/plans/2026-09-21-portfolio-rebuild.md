# Portfolio Rebuild Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task inline. Steps use checkbox (`- [ ]`) syntax for tracking. **Author's rule overrides the default commit cadence: no `git commit` and no `git push` until the author has reviewed the site locally and said so.** Each task ends with a local verification instead.

**Goal:** Replace the 2023 CRA portfolio with a static Astro site whose content mirrors the current resume, renders without JavaScript, and scores ≥95 on Lighthouse mobile.

**Architecture:** Astro static build; typed data files for roles/skills/projects; Markdown content collection for four case studies; one CSS file of custom properties; a single React island for the theme toggle. GitHub Actions deploys to Pages.

**Tech Stack:** Astro 7, TypeScript strict, @astrojs/react 6, React 19, @fontsource-variable/bricolage-grotesque, plain CSS. Node 24.

**Spec:** `docs/superpowers/specs/2026-09-21-portfolio-rebuild-design.md`

## Global Constraints

- Every fact comes from `~/gl/Resume/resume-src.html` or the GitHub README. No revenue figures, client names, or internal service names on any page.
- Palette exactly: paper `#F5F6F2`, ink `#101828`, ink-muted `#3D4A5C`, rule `#D9DCD3`, blue `#1F4FBF`, red `#B9411E`; dark: ground `#101828`, text `#F5F6F2`, muted `#B7C0CE`, rule `#2A3444`, blue `#7FA3F0`.
- One typeface: Bricolage Grotesque variable. `font-variant-numeric: tabular-nums` on numbers.
- No all-caps labels, no numbered section markers, no eyebrow labels, no middle-dot meta strings, no icon-only links.
- Heading order h1 → h2 → h3. Landmarks: header, nav, main, footer. Skip link. Visible 2px focus ring.
- Only motion: one 300 ms fade of the member card on load, disabled under `prefers-reduced-motion`.
- Total transfer < 400 KB on the home page. Lighthouse mobile: performance ≥ 95, a11y ≥ 95, best practices 100, SEO 100.
- Working tree only. No commits, no pushes, no Pages settings changes until explicit go.

---

### Task 1: Clear the CRA project and scaffold Astro

**Files:**
- Delete (staged, uncommitted): `src/`, `public/`, `package-lock.json`, `.github/` if present
- Create: `package.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`, `.nvmrc`
- Create: `public/resume.pdf` (copied), `src/assets/portrait-320.webp`, `src/assets/portrait-640.webp`, `src/assets/classroom-960.webp`, `src/assets/classroom-1600.webp`

**Interfaces:**
- Produces: an installable Astro project; `npm run dev` serves `http://localhost:4321`.

- [ ] **Step 1: Remove the old app from the working tree (staged deletions, no commit)**

```bash
cd ~/repos/gauravlonari.github.io
git rm -rq src public package-lock.json
rm -rf node_modules build
```

- [ ] **Step 2: Write `package.json`**

```json
{
  "name": "gauravlonari.github.io",
  "private": true,
  "type": "module",
  "engines": { "node": ">=22" },
  "scripts": {
    "dev": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "check": "astro check"
  },
  "dependencies": {
    "@astrojs/react": "^6.0.6",
    "@fontsource-variable/bricolage-grotesque": "^5.3.0",
    "astro": "^7.3.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0"
  },
  "devDependencies": {
    "@astrojs/check": "^0.9.4",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "typescript": "^5.6.0"
  }
}
```

- [ ] **Step 3: Write `astro.config.mjs`, `tsconfig.json`, `.nvmrc`, `.gitignore`**

```js
// astro.config.mjs
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
export default defineConfig({
  site: 'https://gauravlonari.github.io',
  output: 'static',
  integrations: [react()],
  build: { inlineStylesheets: 'always' },
});
```

```json
// tsconfig.json
{ "extends": "astro/tsconfigs/strict", "include": [".astro/types.d.ts", "**/*"], "exclude": ["dist"],
  "compilerOptions": { "jsx": "react-jsx", "jsxImportSource": "react" } }
```

`.nvmrc`: `24`  ·  `.gitignore`: `node_modules/`, `dist/`, `.astro/`, `.DS_Store`

- [ ] **Step 4: Copy assets**

```bash
S=/private/tmp/claude-501/-Users-gauravlonari-gl-Resume/82758717-c2a5-4081-96a5-fb2dade989b6/scratchpad
mkdir -p src/assets public
cp $S/webp/*.webp src/assets/
cp "$HOME/gl/Resume/Gaurav Lonari - Full Stack Product Engineer.pdf" public/resume.pdf
```

- [ ] **Step 5: Install and verify**

```bash
npm install
npx astro --version
```
Expected: `astro  v7.x`. `ls src/assets` shows four `.webp`; `public/resume.pdf` ≈ 164 KB.

---

### Task 2: Data files (single source of truth for facts)

**Files:**
- Create: `src/data/profile.ts`, `src/data/roles.ts`, `src/data/skills.ts`, `src/data/projects.ts`, `src/data/links.ts`

**Interfaces:**
- Produces: `profile: Profile`, `roles: Role[]`, `skillGroups: SkillGroup[]`, `projects: Project[]`, `links: Link[]` — consumed by every component in Tasks 4–6.

- [ ] **Step 1: `src/data/profile.ts`**

```ts
export const profile = {
  name: 'Gaurav Lonari',
  title: 'Full Stack Product Engineer',
  company: 'Loop Health',
  level: 'SDE-2',
  location: 'Pune, India',
  remote: true,
  memberSince: 'Jul 2023',
  memberNumber: 'GL-2023-0724', // decorative; matches join month
  hero: "I build the enrolment system behind 1M+ people's health cover, and the tooling that lets a team ship it in under a minute.",
  email: 'gauravlonariofficial@gmail.com',
} as const;
export type Profile = typeof profile;
```

- [ ] **Step 2: `src/data/roles.ts`** (dates and one-liners verbatim from the resume)

```ts
export type Role = { title: string; company: string; location: string; start: string; end: string; line: string };
export const roles: Role[] = [
  { title: 'Software Development Engineer II', company: 'Loop Health', location: 'Pune, India (Remote)', start: 'Jul 2025', end: 'Present',
    line: 'Own the corporate benefits enrolment portal end to end: React 18 frontend, 3 Node.js services on Cloud Run behind an API Gateway, the CI/CD and the observability.' },
  { title: 'Software Engineer', company: 'Loop Health', location: 'Pune, India', start: 'Jul 2024', end: 'Jul 2025',
    line: 'Shipped the employee benefits selection portal that became the enrolment platform; virtualised a 20,000-row operations view from 2 GB to 40 MB of heap.' },
  { title: 'Software Engineer Intern', company: 'Loop Health', location: 'Pune, India', start: 'Jul 2023', end: 'Jun 2024',
    line: 'Built 10+ components in the shared React library; revamped the HR dashboard to 100% rollout; ported it from JavaScript to TypeScript.' },
  { title: 'Full Stack Engineer, Contract', company: 'Caliber', location: 'Missouri, USA (Remote)', start: 'Apr 2023', end: 'Jun 2023',
    line: 'Challenge lifecycle, Firebase Auth SSO and Google Fit integration on React, Material UI and Spring Boot, delivered async across a 10.5-hour offset.' },
  { title: 'Full Stack Developer Intern', company: 'The Innovative Solutions', location: 'Pune, India', start: 'Oct 2022', end: 'Apr 2023',
    line: 'Two government-funded platforms: role-based access, document verification workflow, PayU payments, MongoDB and Express APIs.' },
];
```

- [ ] **Step 3: `src/data/skills.ts`** (six groups, exact resume text)

```ts
export type SkillGroup = { name: string; items: string[] };
export const skillGroups: SkillGroup[] = [
  { name: 'Core', items: ['TypeScript','JavaScript','React 18','Redux Toolkit','React Query','TanStack Table','React Native','Node.js','Java','SQL'] },
  { name: 'Backend', items: ['Node.js microservices','Express.js','Spring Boot','REST APIs','GraphQL','system design','authentication','Single Sign-On (SSO)','OAuth 2.0','JSON Web Tokens (JWT)','Identity Provider (IdP) integration','PostgreSQL','MongoDB'] },
  { name: 'Cloud', items: ['Google Cloud Platform (GCP)','Cloud Run','API Gateway','Cloud Load Balancing','load balancing','Firebase','Docker'] },
  { name: 'Platform and delivery', items: ['GitHub Actions','CI/CD','pull-request preview environments','Workload Identity Federation (WIF)','Vite','build optimization','web performance','feature flags','Flagsmith','Agile/Scrum'] },
  { name: 'Reliability and security', items: ['Datadog RUM','Datadog dashboards','custom vitals','on-call alerting','Sentry','Core Web Vitals','unit testing','integration testing','Jest','Vitest','Playwright','Content Security Policy (CSP)','SOC 2','penetration testing','VAPT remediation'] },
  { name: 'AI engineering', items: ['prompt engineering','Model Context Protocol (MCP)','LLM coding agents','agent-rule and repository-context authoring','Claude Code','GitHub Copilot','Cursor'] },
];
```

- [ ] **Step 4: `src/data/projects.ts` and `src/data/links.ts`**

```ts
// projects.ts
export type Project = { name: string; url: string; summary: string; stack: string };
export const projects: Project[] = [
  { name: 'psyMing', url: 'https://psyming.vercel.app',
    summary: 'An offline-first PWA for habits, reminders and milestones, with web push driven by a cron scheduler. Built because every habit app I tried needed a network connection to tell me to drink water.',
    stack: 'React, Redux Toolkit, MUI, localforage; Express and Mongoose on Vercel Functions' },
  { name: 'speaktype', url: 'https://github.com/karansinghgit/speaktype/pull/142',
    summary: 'Fixed the control pill and menu-bar panel so they render over full-screen apps, in a 100% offline open-source voice-dictation app.',
    stack: 'Swift, macOS' },
];
// links.ts
export type Link = { label: string; href: string };
export const links: Link[] = [
  { label: 'Resume (PDF)', href: '/resume.pdf' },
  { label: 'GitHub', href: 'https://github.com/gauravlonari' },
  { label: 'LinkedIn', href: 'https://linkedin.com/in/gauravlonari' },
  { label: 'X', href: 'https://twitter.com/lonarigaurav' },
  { label: 'YouTube', href: 'https://www.youtube.com/@psyming' },
  { label: 'Instagram', href: 'https://instagram.com/lonari_gaurav_95' },
];
```

- [ ] **Step 5: Verify types**

```bash
npx tsc --noEmit -p tsconfig.json
```
Expected: no errors.

---

### Task 3: Case-study content collection

**Files:**
- Create: `src/content.config.ts`, `src/content/case-studies/{preview-environments,idempotent-checkout,login-performance,observability}.md`

**Interfaces:**
- Produces: collection `caseStudies` with frontmatter `{ title, order, result }` and body Markdown containing exactly three `## Problem`, `## Decision`, `## Result` sections. Consumed by `CaseStudies.astro` (Task 5).

- [ ] **Step 1: `src/content.config.ts`**

```ts
import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
const caseStudies = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/case-studies' }),
  schema: z.object({ title: z.string(), order: z.number(), result: z.string() }),
});
export const collections = { caseStudies };
```

- [ ] **Step 2: Write the four files.** Frontmatter and bodies below are the content; ~150 words each, verified facts only.

`preview-environments.md`
```md
---
title: Per-PR preview environments
order: 1
result: Usable product link in under 60 seconds per pull request
---
## Problem
A change was "done" when it merged, but nobody outside engineering could use it until it reached a shared staging environment — often days later. Design waited to review, QA waited to test, product waited to check copy. Every round of feedback restarted the wait.

## Decision
Give every pull request its own deployed instance, reachable at a stable URL that updates on each commit. Only the changed app is built; unchanged services route to shared staging behind a gateway, so a frontend PR does not need its own backend. Idle instances stop after a few minutes and wake on the next request.

## Result
Commit-to-usable-link time went from days to under 60 seconds. Reviewers open the PR link instead of asking for a deploy. The system was later written up by engineering leadership as a team-wide practice.
```

`idempotent-checkout.md`
```md
---
title: Idempotent checkout
order: 2
result: Replay-safe checkout; no member loses benefits to a race
---
## Problem
Enrolment checkout wrote a member's chosen benefits asynchronously while a separate confirmation step marked the member enrolled. Under the wrong timing — a retry, a double submit, a slow write — an empty checkout could land after a full one, wipe the benefits, and still mark the member enrolled. In health insurance that is someone's coverage.

## Decision
Model checkout as explicit states with guarded transitions. A confirmation cannot advance from a state that has no persisted selection; a write that would replace a non-empty selection with an empty one is rejected; and every step is idempotent, so a replayed request produces the same end state as the first.

## Result
The failure mode became impossible rather than unlikely. Support escalations for "enrolled but no benefits" stopped, and the same guards now protect every new purchase flow added to the portal.
```

`login-performance.md`
```md
---
title: Login performance
order: 3
result: 4.5 s → 1.5 s load; 3.3 MB → 230 KB initial JavaScript; Lighthouse 60 → 90
---
## Problem
The portal's login page shipped 3.3 MB of JavaScript before a member could type a phone number — the whole app, a Firestore SDK used for one timestamp, and a component library imported whole. On slow 4G that was 26 seconds.

## Decision
Measure first, then remove: instrument the page, then code-split by route, lazy-load the animation and date-picker chunks, drop the Firestore SDK for one line of arithmetic, self-host the font with a preload, and land tree-shaking in the shared component library so every consumer imports only what it renders.

## Result
Login load time fell 67% (4.5 s to 1.5 s; 26 s to 6 s on slow 4G). Initial JavaScript fell 93% (3.3 MB to 230 KB). Lighthouse Performance went from 60 to 90. Total shipped JavaScript across the portal fell 54%.
```

`observability.md`
```md
---
title: Observability from zero
order: 4
result: MTTR on frontend incidents from 2 days to under 1 hour
---
## Problem
Frontend failures surfaced when a customer wrote in. There was no way to tell a real regression from an expected validation error, no per-release view, and nothing that paged anyone.

## Decision
Instrument the journeys that matter — checkout, dashboard load, login — as 21 named duration vitals, and record expected outcomes (a wrong OTP, a known 4xx) as actions rather than errors, so the error stream only carries surprises. Build one dashboard around it: p95 latency and error rate by endpoint, Core Web Vitals by route, errors per session by release. Wire alerting to the parts that page.

## Result
Mean time to resolve frontend incidents went from about two days to under an hour. Escalations went from routine to rare, and every release now has a before/after view within minutes of deploy.
```

- [ ] **Step 3: Verify the collection loads**

```bash
npx astro sync && npx tsc --noEmit
```
Expected: `.astro/types.d.ts` generated; no type errors.

---

### Task 4: Global styles, layout, member card, theme island

**Files:**
- Create: `src/styles/global.css`, `src/layouts/Base.astro`, `src/components/MemberCard.astro`, `src/components/ThemeToggle.tsx`

**Interfaces:**
- Produces: `Base.astro` with `<slot />` inside `<main id="main">`; `MemberCard.astro` renders `<aside>` with `<nav aria-label="Sections">`; `ThemeToggle` sets `data-theme` on `<html>` and persists to `localStorage('theme')`.

- [ ] **Step 1: `src/styles/global.css`** — tokens, reset, type scale, layout grid, card, focus, motion

```css
@import '@fontsource-variable/bricolage-grotesque';
:root { --paper:#F5F6F2; --ink:#101828; --ink-muted:#3D4A5C; --rule:#D9DCD3; --blue:#1F4FBF; --red:#B9411E; --card:#FFFFFF; }
@media (prefers-color-scheme: dark) { :root:not([data-theme="light"]) { --paper:#101828; --ink:#F5F6F2; --ink-muted:#B7C0CE; --rule:#2A3444; --blue:#7FA3F0; --card:#16213A; } }
:root[data-theme="dark"] { --paper:#101828; --ink:#F5F6F2; --ink-muted:#B7C0CE; --rule:#2A3444; --blue:#7FA3F0; --card:#16213A; }
* { box-sizing:border-box; margin:0; }
html { color-scheme: light dark; }
body { background:var(--paper); color:var(--ink); font-family:'Bricolage Grotesque Variable', system-ui, sans-serif; font-size:1.0625rem; line-height:1.55; font-variant-numeric: tabular-nums; -webkit-font-smoothing:antialiased; }
a { color:var(--blue); text-decoration-thickness:1px; text-underline-offset:.15em; }
a:focus-visible, button:focus-visible { outline:2px solid var(--blue); outline-offset:3px; border-radius:2px; }
.skip { position:absolute; left:-999px; top:8px; background:var(--card); padding:.5rem .75rem; z-index:10; }
.skip:focus { left:8px; }
.shell { display:grid; grid-template-columns: 300px minmax(0, 68ch); gap: clamp(2rem, 6vw, 6rem); max-width: 1180px; padding: clamp(1.5rem, 4vw, 4rem); margin: 0 auto; }
main section { padding: 3.5rem 0 1rem; border-top: 1px solid var(--rule); }
main section:first-child { border-top: 0; padding-top: 0; }
h1 { font-weight:800; font-size: clamp(2rem, 4.6vw, 3.25rem); line-height:1.08; letter-spacing:-.015em; max-width: 22ch; }
h2 { font-weight:600; font-size:1.5rem; line-height:1.25; margin-bottom:1.25rem; }
h3 { font-weight:600; font-size:1.125rem; margin-bottom:.35rem; }
p { max-width:68ch; }
.muted { color:var(--ink-muted); }
.links { display:flex; flex-wrap:wrap; gap:.5rem 1.5rem; margin-top:1.5rem; }
/* member card */
.card { position:sticky; top:clamp(1.5rem,4vw,4rem); align-self:start; background:var(--card); border:1px solid var(--rule); border-radius:12px; overflow:hidden; box-shadow:0 1px 0 var(--rule); }
.card-band { background:var(--blue); color:#fff; padding:.6rem 1rem; font-weight:600; font-size:.875rem; display:flex; justify-content:space-between; }
.card-body { padding:1rem; display:grid; gap:.75rem; }
.card img { width:96px; height:96px; border-radius:8px; object-fit:cover; }
.card dl { display:grid; grid-template-columns:auto 1fr; gap:.2rem .75rem; font-size:.9rem; }
.card dt { color:var(--ink-muted); } .card dd { font-weight:600; }
.stamp { display:inline-block; border:2px solid var(--red); color:var(--red); padding:.15rem .5rem; border-radius:4px; font-weight:800; font-size:.8rem; transform:rotate(-3deg); justify-self:start; }
.card nav ul { list-style:none; padding:0; display:grid; gap:.35rem; border-top:1px solid var(--rule); padding-top:.75rem; }
.card nav a { color:var(--ink); text-decoration:none; } .card nav a:hover { color:var(--blue); text-decoration:underline; }
@keyframes print { from { opacity:0 } to { opacity:1 } }
.card { animation: print 300ms ease-out both; }
@media (prefers-reduced-motion: reduce) { .card { animation:none; } }
/* case studies */
.case { display:grid; gap:1.25rem; padding:1.5rem 0; border-top:1px solid var(--rule); }
.case:first-of-type { border-top:0; }
.case-fields { display:grid; grid-template-columns: 7.5rem 1fr; gap:.5rem 1.25rem; }
.case-fields dt { color:var(--ink-muted); } .case-fields dd p { margin:0; }
.result { font-weight:600; }
/* roles */
.role { display:grid; grid-template-columns: 1fr auto; gap:.25rem 1rem; padding:1rem 0; border-top:1px solid var(--rule); }
.role:first-of-type { border-top:0; } .role .dates { color:var(--ink-muted); white-space:nowrap; } .role p { grid-column:1/-1; }
/* skills */
.skills dt { font-weight:600; margin-top:.9rem; } .skills dd { color:var(--ink-muted); }
/* responsive */
@media (max-width: 900px) {
  .shell { grid-template-columns: 1fr; }
  .card { position:static; }
  .card nav ul { display:flex; flex-wrap:wrap; gap:.5rem 1.25rem; }
  .role { grid-template-columns:1fr; } .role .dates { white-space:normal; }
  .case-fields { grid-template-columns: 1fr; }
}
```

- [ ] **Step 2: `src/components/ThemeToggle.tsx`**

```tsx
import { useEffect, useState } from 'react';
type Mode = 'light' | 'dark' | 'system';
export default function ThemeToggle() {
  const [mode, setMode] = useState<Mode>('system');
  useEffect(() => { const s = localStorage.getItem('theme') as Mode | null; if (s) apply(s); }, []);
  function apply(m: Mode) {
    setMode(m);
    if (m === 'system') { document.documentElement.removeAttribute('data-theme'); localStorage.removeItem('theme'); }
    else { document.documentElement.setAttribute('data-theme', m); localStorage.setItem('theme', m); }
  }
  const next: Mode = mode === 'system' ? 'dark' : mode === 'dark' ? 'light' : 'system';
  return (
    <button type="button" onClick={() => apply(next)} aria-label={`Theme: ${mode}. Switch to ${next}.`}
      style={{ background:'transparent', border:0, color:'inherit', font:'inherit', cursor:'pointer', textDecoration:'underline' }}>
      Theme: {mode}
    </button>
  );
}
```

- [ ] **Step 3: `src/components/MemberCard.astro`**

```astro
---
import { Image } from 'astro:assets';
import portrait from '../assets/portrait-640.webp';
import { profile } from '../data/profile';
import ThemeToggle from './ThemeToggle';
const sections = [['#case-studies','Case studies'],['#experience','Experience'],['#skills','Skills'],['#projects','Projects'],['#contact','Contact']];
---
<aside class="card" aria-label="Member card">
  <div class="card-band"><span>Loop Health</span><span>Member card</span></div>
  <div class="card-body">
    <Image src={portrait} alt={`Portrait of ${profile.name}`} width={96} height={96} densities={[1,2]} loading="eager" />
    <div>
      <strong>{profile.name}</strong><br />
      <span class="muted">{profile.level}, {profile.title}</span>
    </div>
    <dl>
      <dt>Member since</dt><dd>{profile.memberSince}</dd>
      <dt>Member no.</dt><dd>{profile.memberNumber}</dd>
      <dt>Location</dt><dd>{profile.location}</dd>
    </dl>
    {profile.remote && <span class="stamp">Open to remote</span>}
    <nav aria-label="Sections"><ul>{sections.map(([href,label]) => <li><a href={href}>{label}</a></li>)}</ul></nav>
    <ThemeToggle client:idle />
  </div>
</aside>
```

- [ ] **Step 4: `src/layouts/Base.astro`**

```astro
---
import '../styles/global.css';
import MemberCard from '../components/MemberCard.astro';
import { profile } from '../data/profile';
const description = `${profile.title} at ${profile.company}. React, TypeScript and Node.js on Google Cloud for a health-insurance enrolment platform covering 1M+ members.`;
---
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{profile.name} — {profile.title}</title>
  <meta name="description" content={description} />
  <meta property="og:title" content={`${profile.name} — ${profile.title}`} />
  <meta property="og:description" content={description} />
  <meta property="og:type" content="profile" />
  <meta property="og:url" content="https://gauravlonari.github.io/" />
  <link rel="canonical" href="https://gauravlonari.github.io/" />
  <script is:inline>try{const t=localStorage.getItem('theme');if(t)document.documentElement.setAttribute('data-theme',t)}catch{}</script>
</head>
<body>
  <a class="skip" href="#main">Skip to content</a>
  <div class="shell">
    <MemberCard />
    <main id="main"><slot /></main>
  </div>
</body>
</html>
```

- [ ] **Step 5: Verify** — `npm run dev`, open `http://localhost:4321` (Task 5 adds the page); at this point confirm `astro check` passes.

---

### Task 5: Sections and the index page

**Files:**
- Create: `src/components/Hero.astro`, `src/components/CaseStudies.astro`, `src/components/Experience.astro`, `src/components/Skills.astro`, `src/components/Projects.astro`, `src/components/Contact.astro`, `src/pages/index.astro`

- [ ] **Step 1: `Hero.astro`**

```astro
---
import { profile } from '../data/profile';
import { links } from '../data/links';
const primary = links.filter(l => ['Resume (PDF)','GitHub','LinkedIn'].includes(l.label));
---
<section aria-labelledby="hero-h">
  <h1 id="hero-h">{profile.hero}</h1>
  <p class="muted" style="margin-top:1rem">{profile.level} at {profile.company}. Intern to SDE-2 in 24 months.</p>
  <div class="links">{primary.map(l => <a href={l.href}>{l.label}</a>)}</div>
</section>
```

- [ ] **Step 2: `CaseStudies.astro`** — renders Problem/Decision/Result from each entry's headings

```astro
---
import { getCollection, render } from 'astro:content';
const entries = (await getCollection('caseStudies')).sort((a,b) => a.data.order - b.data.order);
const rendered = await Promise.all(entries.map(async e => ({ e, ...(await render(e)) })));
---
<section id="case-studies" aria-labelledby="cs-h">
  <h2 id="cs-h">Case studies</h2>
  {rendered.map(({ e, Content }) => (
    <article class="case">
      <h3>{e.data.title}</h3>
      <p class="result">{e.data.result}</p>
      <div class="case-body"><Content /></div>
    </article>
  ))}
</section>
<style is:global>
  .case-body h2 { font-size:.95rem; font-weight:600; color:var(--ink-muted); margin:1rem 0 .25rem; }
  .case-body h2:first-child { margin-top:0; }
</style>
```

- [ ] **Step 3: `Experience.astro`**

```astro
---
import { roles } from '../data/roles';
---
<section id="experience" aria-labelledby="exp-h">
  <h2 id="exp-h">Experience</h2>
  {roles.map(r => (
    <article class="role">
      <h3>{r.title}, {r.company}</h3>
      <span class="dates">{r.start} – {r.end}</span>
      <p class="muted">{r.location}. {r.line}</p>
    </article>
  ))}
  <p style="margin-top:1rem"><a href="/resume.pdf">Full detail in the resume (PDF)</a></p>
</section>
```

- [ ] **Step 4: `Skills.astro`, `Projects.astro`, `Contact.astro`**

```astro
---
// Skills.astro
import { skillGroups } from '../data/skills';
---
<section id="skills" aria-labelledby="sk-h">
  <h2 id="sk-h">Skills</h2>
  <dl class="skills">{skillGroups.map(g => (<><dt>{g.name}</dt><dd>{g.items.join(', ')}</dd></>))}</dl>
</section>
```

```astro
---
// Projects.astro
import { projects } from '../data/projects';
---
<section id="projects" aria-labelledby="pr-h">
  <h2 id="pr-h">Projects and open source</h2>
  {projects.map(p => (
    <article class="role">
      <h3><a href={p.url}>{p.name}</a></h3>
      <span class="dates muted">{p.stack}</span>
      <p>{p.summary}</p>
    </article>
  ))}
</section>
```

```astro
---
// Contact.astro
import { profile } from '../data/profile';
import { links } from '../data/links';
---
<section id="contact" aria-labelledby="ct-h">
  <h2 id="ct-h">Contact</h2>
  <p>Email <a href={`mailto:${profile.email}`}>{profile.email}</a>. Open to remote roles in IST with US-overlap.</p>
  <div class="links">{links.filter(l => l.label !== 'Resume (PDF)').map(l => <a href={l.href}>{l.label}</a>)}</div>
</section>
<footer class="muted" style="margin-top:3rem; font-size:.9rem">Built with Astro. Source on <a href="https://github.com/gauravlonari/gauravlonari.github.io">GitHub</a>.</footer>
```

- [ ] **Step 5: `src/pages/index.astro`**

```astro
---
import Base from '../layouts/Base.astro';
import Hero from '../components/Hero.astro';
import CaseStudies from '../components/CaseStudies.astro';
import Experience from '../components/Experience.astro';
import Skills from '../components/Skills.astro';
import Projects from '../components/Projects.astro';
import Contact from '../components/Contact.astro';
---
<Base><Hero /><CaseStudies /><Experience /><Skills /><Projects /><Contact /></Base>
```

- [ ] **Step 6: Verify locally**

```bash
npm run dev &  # http://localhost:4321
npx astro check
```
Expected: page renders all six sections; `astro check` 0 errors. Screenshot desktop (1280) and mobile (390) for author review.

---

### Task 6: Build verification (no deploy)

**Files:** none new.

- [ ] **Step 1: Production build and static-text check**

```bash
npm run build
python3 - <<'PY'
import re,html
h=open('dist/index.html').read()
t=re.sub(r'<[^>]+>',' ',re.sub(r'<script.*?</script>|<style.*?</style>','',h,flags=re.S)); t=re.sub(r'\s+',' ',html.unescape(t))
for k in ['Case studies','Idempotent checkout','Software Development Engineer II','Bricolage']: print('OK ' if k in t or k in h else 'MISS', k)
print('client scripts:', len(re.findall(r'<script[^>]+src=',h)))
PY
du -sh dist; find dist -name '*.js' -exec du -ch {} + | tail -1
```
Expected: all OK; ≤ 2 client scripts (theme island + Astro runtime); JS total < 60 KB.

- [ ] **Step 2: Lighthouse on `npm run preview` (localhost:4321), mobile**
Expected: performance ≥ 95, a11y ≥ 95, best practices 100, SEO 100. Fix any failing audit before presenting.

- [ ] **Step 3: Present to author.** Stop. Iterate on feedback. No commit.

---

### Task 7 (only after author's explicit go): Commit, deploy workflow, Pages switch

**Files:**
- Create: `.github/workflows/deploy.yml`
- Modify: `~/gl/Resume/build.sh` (append PDF copy line)

- [ ] **Step 1: `.github/workflows/deploy.yml`**

```yaml
name: Deploy to GitHub Pages
on: { push: { branches: [main] }, workflow_dispatch: {} }
permissions: { contents: read, pages: write, id-token: write }
concurrency: { group: pages, cancel-in-progress: true }
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: withastro/action@v3
        with: { node-version: 24 }
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: { name: github-pages, url: ${{ steps.deployment.outputs.page_url }} }
    steps:
      - id: deployment
        uses: actions/deploy-pages@v4
```

- [ ] **Step 2: Resume hook** — append to `~/gl/Resume/build.sh` before the final echo:

```bash
P=/Users/gauravlonari/repos/gauravlonari.github.io/public
[ -d "$P" ] && cp "$NAME.pdf" "$P/resume.pdf" && echo "copied to portfolio: public/resume.pdf"
```

- [ ] **Step 3: Commit on `vite-rebuild`, merge to `main`, switch Pages to workflow builds, push, verify live**

```bash
git add -A && git commit -m "Rebuild portfolio on Astro: member-card layout, four case studies, resume-synced content"
git checkout main && git merge --ff-only vite-rebuild
gh api -X PUT repos/gauravlonari/gauravlonari.github.io/pages -f build_type=workflow
git push origin main
gh run watch
curl -s https://gauravlonari.github.io/ | grep -c 'Case studies'
```
Expected: run succeeds; live page contains "Case studies"; `gh-pages` branch can then be deleted.

---

## Self-review

- Spec coverage: stack ✔ (T1), IA six sections ✔ (T5), removed items ✔ (T1 deletes CRA; nothing re-added), member card ✔ (T4), palette/type/motion ✔ (T4 CSS), responsive ✔ (T4 media queries), a11y floor ✔ (T4 skip link/landmarks/focus; T6 Lighthouse gate), case studies ✔ (T3), resume sync ✔ (T7), deploy ✔ (T7), iteration protocol ✔ (T6 step 3, T7 gated).
- Placeholders: none. `memberNumber` is labelled decorative in code.
- Type consistency: `profile`, `roles`, `skillGroups`, `projects`, `links`, collection `caseStudies` used with the same names in T4–T5.
