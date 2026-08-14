# Muhammad Sharique — Portfolio

Built with Next.js 16 (App Router, Turbopack), React 19, TypeScript, and Tailwind CSS v4 — implemented exactly against the approved Creative Direction, Design Tokens, Component Library, and Wireframes specs.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm run start   # serve the production build
npm run lint    # ESLint
```

## Project structure

```
src/
  app/
    layout.tsx           Root layout — fonts, SEO metadata, JSON-LD, theme script
    page.tsx              Assembles all scenes in order
    globals.css           Design tokens (source of truth), Tailwind v4 @theme
    api/contact/route.ts  Contact form submission endpoint
    icon.tsx               Generated favicon
    opengraph-image.tsx    Generated OG image
    sitemap.ts / robots.ts SEO
  components/
    layout/               Navigation, Footer
    ui/                   Button, Link, ThemeToggle — shared primitives
    scenes/                One file per scene (Identity, FeaturedWork, Timeline,
                            Philosophy, TechStack, Contact) per the wireframe spec
    project-showcase/      ProjectShowcase (Scene 2 unit), CaseStudy (shared-element
                            expand overlay), ArchitectureDiagram (handcrafted SVG)
  data/                    Content — projects.ts, experience.ts, techStack.ts, site.ts
  hooks/                   useReducedMotion, useInView
  lib/                     utils.ts (cn helper)
```

## Before this goes live — replace these placeholders

These are the only things the spec allows to stay as placeholders, and they're all clearly marked in code:

- **Project screenshots** — `public/projects/*.svg` are labeled placeholder diagrams. Replace with real product screenshots (`.png`/`.jpg`/`.webp`) and update the paths in `src/data/projects.ts`.
- **Project copy** — the problem/build/outcome lines and full case-study content in `src/data/projects.ts` are realistic placeholder copy, not your actual projects. Replace with real detail.
- **Experience details** — `src/data/experience.ts` has placeholder dates/summaries for FlyRank AI, TEDx (×2), HexSoftwares, and Apexcify. Replace with your real dates and summaries.
- **Résumé** — `public/resume.pdf` is a stub file. Replace with your actual résumé PDF.
- **Contact delivery** — `src/app/api/contact/route.ts` validates submissions but doesn't send email yet (no credentials to wire against). Add a provider (Resend, Postmark, SMTP) using environment variables — the example is commented in the file.
- **Site URL & socials** — `src/data/site.ts` has your GitHub/LinkedIn/email/site URL. Update these — the current values are placeholders.
- **Education/Certs** — `src/components/layout/Footer.tsx` has placeholder university/certification lines.

## Notes

- Fonts are self-hosted via the `geist` package (not `next/font/google`) — this avoids a runtime fetch to Google Fonts and keeps builds reproducible in network-restricted environments.
- Dark mode is implemented via a `data-theme` attribute + a pre-hydration inline script (no flash of incorrect theme), toggled from the nav.
- The Case Study shared-element expand uses `motion` (the successor to Framer Motion) for the `layoutId`-based transition; everything else uses plain CSS transitions off the design tokens.
- Every animation respects `prefers-reduced-motion` and falls back to an instant, opacity-only state.


THIS IS A DEMO IM CURRENTLY WORKING ON IT
