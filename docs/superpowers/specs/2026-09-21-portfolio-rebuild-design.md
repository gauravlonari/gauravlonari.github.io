# Portfolio rebuild — design spec

Date: 2026-09-21 · Repo: `gauravlonari/gauravlonari.github.io` · Branch: `vite-rebuild`
Status: approved in chat; iterate locally, nothing committed or deployed until the author says so.

## Purpose

Replace the 2023 Create React App portfolio with a static site that (a) states the author's
current level and work in ten seconds, (b) hands a reader a case study or the resume PDF, and
(c) is readable by crawlers and LLM screeners without executing JavaScript.

Audience: hiring managers and recruiters for remote Full Stack / Product Engineer roles.
Source of truth for every fact: `~/gl/Resume/resume-src.html` and the GitHub profile README.
Public-safe bar: no revenue figures, no client names, no internal service names.

## Stack

- Astro (static output) + TypeScript. One React island: theme toggle. No client JS otherwise.
- Content: case studies as Markdown in `src/content/case-studies/`; roles, skills, projects as
  typed data in `src/data/*.ts`.
- Styling: plain CSS with custom properties; no Tailwind, no component kit.
- Fonts: Bricolage Grotesque (variable) self-hosted woff2, `font-display: swap`.
- Images: `cwebp` output committed under `src/assets/`; Astro `<Image>` for sizing.
- Deploy: GitHub Actions → GitHub Pages (`build_type: workflow`). Same URL. The `gh-pages`
  branch is retired after first successful workflow deploy.
- Resume: `public/resume.pdf`, copied by `~/gl/Resume/build.sh` on every resume build.

## Information architecture (six viewports, not nineteen)

1. Hero — one sentence, three links (Resume PDF, GitHub, LinkedIn).
2. Case studies — four, each with fixed fields Problem / Decision / Result.
3. Experience — five roles: title, company, dates, one line. Bullets live in the PDF.
4. Skills — six groups as plain comma-separated text (Core, Backend, Cloud, Platform &
   Delivery, Reliability & Security, AI Engineering), mirroring the resume exactly.
5. Projects — psyMing (link to psyming.vercel.app), speaktype PR #142.
6. Contact — mailto, LinkedIn, GitHub, X, YouTube, Instagram. No form.

Removed from the old site: AdSense, meta keywords, typewriter, certifications, positions of
responsibility, Cascode, SSC entry, street addresses, all ten academic projects and their images,
EmailJS contact form, 12 MB of unreferenced portraits.

## Visual design

The one bold element: a fixed left rail styled as a health-insurance **member ID card** — photo,
name, role, "Member since Jul 2023", "Pune, India · remote", a printed member number, a red
"OPEN TO REMOTE" stamp, and the section nav as text links beneath. Everything else is quiet.

Palette (light): paper `#F5F6F2`, ink `#101828`, ink-muted `#3D4A5C`, rule `#D9DCD3`,
policy blue `#1F4FBF` (links, focus, card header band), stamp red `#B9411E` (used once).
Dark (system-following): ground `#101828`, text `#F5F6F2`, muted `#B7C0CE`, rule `#2A3444`,
blue `#7FA3F0`, red unchanged.

Type: Bricolage Grotesque only. Hero 800 / clamp(2.4rem, 5vw, 3.5rem); section titles 600 /
1.5rem; body 400 / 1.0625rem / 1.55; `font-variant-numeric: tabular-nums` on all numbers.
Measure ≤ 68ch. Left-aligned throughout.

Structure encodes information: Problem / Decision / Result labels because the content has those
three parts; no numbered markers, no eyebrows, no all-caps labels, no middle-dot meta strings.

Motion: one page-load fade of the card (300 ms). Nothing else animates. Honour
`prefers-reduced-motion: reduce` by disabling it.

Responsive: below 900px the card collapses to a compact header strip (photo, name, role) and
the nav becomes a top bar with text labels. Below 480px, nav becomes a select-style disclosure.

## Accessibility and quality floor

Semantic landmarks (`header`, `nav`, `main`, `section` with headings, `footer`); heading order
h1 → h2 → h3 only; every link has a name; visible focus ring (2px policy blue); contrast ≥ 4.5:1
on all text including muted; `lang="en"`; skip link. Targets: Lighthouse a11y ≥ 95, best
practices 100, SEO 100, performance ≥ 95 on mobile. Total page weight < 400 KB including fonts
and the card photo.

## Case studies (content)

Each ~150 words, from verified material. Titles:

1. Per-PR preview environments — commit-to-usable-link in under 60 seconds.
2. Idempotent checkout — a race that could wipe a member's benefits, and the guard that stopped it.
3. Login performance — 4.5 s → 1.5 s, 3.3 MB → 230 KB, Lighthouse 60 → 90.
4. Observability from zero — 21 custom RUM vitals, MTTR on frontend incidents 2 days → under 1 hour.

## Out of scope

Blog, analytics, CMS, contact form, i18n, custom domain.

## Iteration protocol

Dev server at `http://localhost:4321`. Author reviews locally; changes iterate on the branch's
working tree. Commit only when the author says so; push and deploy only on explicit go.

## Addendum — 2026-09-21, after local review

Author reviewed two variants and chose **B, the shipping log**: no card or sidebar; compact header;
one-sentence lede; a reverse-chronological rail of dated entries whose before → after number is
the visual, with case-study text folded under entries as native `<details>`. Zero client JavaScript
files; theme toggle is an inline script. Variant A (member card) is kept at `/a` with `noindex`.
Palette for B: paper `#F7F8FA` / ink `#0F172A` / muted `#4B5567` / rule `#DDE1E8` / accent green
`#0E8A5F` (dark: `#0F172A` / `#EEF2F7` / `#A5AFC0` / `#26314A` / `#3DDC97`). Classroom photo unused.
