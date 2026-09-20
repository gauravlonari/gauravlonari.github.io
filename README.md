# gauravlonari.github.io

Personal site: a shipping log of production changes, with the number each one moved.

- Astro (static output), TypeScript, plain CSS. Zero client JavaScript files; the theme toggle is an inline script.
- Content: `src/data/*.ts` (profile, log entries, roles, skills, projects, links) and `src/content/case-studies/*.md`.
- `public/resume.pdf` is copied in by the resume build (`~/gl/Resume/build.sh`).
- Deploys to GitHub Pages from `main` via `.github/workflows/deploy.yml`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # dist/
npm run check    # astro check
```

Design notes: `docs/superpowers/specs/`, plan: `docs/superpowers/plans/`.
