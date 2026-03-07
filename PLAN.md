# Portfolio Migration Plan: Preact SPA -> TanStack Start on Cloudflare Workers

## Overview

Migrate `new-portfolio` (Preact + Vite SPA on Netlify) to a TanStack Start app deployed on Cloudflare Workers. The new project lives in `tanstack-portfolio/` side-by-side with the original.

Reference projects for patterns:
- `paleo-waifu/web/` — full-stack TanStack Start + Cloudflare Workers + D1/R2
- `urban-stl-analytics/` — TanStack Start + Cloudflare Workers + static data

---

## Phase 1: Scaffold & Config

**Goal:** Empty TanStack Start app that builds and deploys to Cloudflare Workers.

- [ ] Initialize with `pnpm init`, install core deps:
  - `react`, `react-dom` (v19)
  - `@tanstack/react-router`, `@tanstack/react-start`
  - `@tanstack/router-plugin` (vite plugin for route gen)
  - `@cloudflare/vite-plugin`
  - `vite` (v7), `@vitejs/plugin-react`
  - `tailwindcss`, `@tailwindcss/vite`, `@tailwindcss/typography`
  - `typescript`
- [ ] Create `vite.config.ts` — tanstackStart + cloudflare + tailwindcss plugins
- [ ] Create `wrangler.jsonc` — Workers config with `@tanstack/react-start/server-entry`
- [ ] Create `tsconfig.json` — ES2022 target, bundler resolution, `@/*` path alias
- [ ] Create `src/router.tsx` — `createRouter()` with routeTree import
- [ ] Create `src/routes/__root.tsx` — HTML shell (head, meta, fonts, Plausible analytics)
- [ ] Create `src/styles.css` — copy `global.css` theme (oklch vars, Tailwind directives)
- [ ] Verify: `pnpm dev` serves a blank page, `pnpm build` produces a Worker bundle

---

## Phase 2: Routes & Navigation

**Goal:** File-based routing replaces manual `window.location.pathname` matching.

### Route structure

```
src/routes/
  __root.tsx              # HTML document shell, error boundary, 404
  _layout.tsx             # Shared layout: nav, Lenis smooth scroll, background effects
  _layout/
    index.tsx             # Home page (all sections)
    blog/
      index.tsx           # Blog list
      $slug.tsx           # Blog post detail
    digest/
      index.tsx           # Digest list
      $slug.tsx           # Digest detail
    constellation.tsx     # WebGL constellation page
```

- [ ] Create `_layout.tsx` — wraps `<Outlet />` with:
  - NavMenu + NavMenuToggle
  - BackgroundGrid or BackgroundParticles
  - ScrollProgressIndicator
  - Footer
  - Lenis smooth scroll provider (hook into router navigation for scroll-to-top)
- [ ] Create each route file with `createFileRoute()` + component
- [ ] Replace all `window.history.pushState` calls with TanStack `<Link>` / `useNavigate()`
- [ ] Replace `React.lazy()` code splitting with TanStack Router's `route.lazy()` where needed
- [ ] Remove `App.tsx` and `Main.tsx` routing logic (not copied to new project)

---

## Phase 3: Copy & Adapt Components

**Goal:** All UI components render correctly under React (not Preact).

### Direct copies (no changes expected)
- `components/Hero.tsx`
- `components/Skills.tsx`
- `components/Projects.tsx`
- `components/Experience.tsx`
- `components/Education.tsx`
- `components/About.tsx`
- `components/Contact.tsx`
- `components/Phrases.tsx`
- `components/SectionTitle.tsx`
- `components/Footer.tsx`
- `components/ScrollProgressIndicator.tsx`
- `components/icons/SectionDecorator.tsx`
- `lib/data.ts`
- `lib/socials.tsx`

### Requires adaptation
- `components/nav/NavMenu.tsx` — replace `pushState` navigation with `<Link>` from `@tanstack/react-router`
- `components/nav/NavMenuToggle.tsx` — same navigation update
- `Blog.jsx` — split into `routes/_layout/blog/index.tsx` and `routes/_layout/blog/$slug.tsx`
- `Digest.tsx` — split into `routes/_layout/digest/index.tsx` and `routes/_layout/digest/$slug.tsx`
- `Home.tsx` — becomes `routes/_layout/index.tsx`, remove routing guards
- `ConstellationPage.tsx` — becomes `routes/_layout/constellation.tsx`

### Preact -> React changes
- Remove any `import { h } from 'preact'` (unlikely but check)
- `preact/compat` imports become `react` / `react-dom`
- `@gsap/react` should work with real React (verify)
- `motion/react` should work with real React (already using React API)

---

## Phase 4: Content & Markdown

**Goal:** Blog posts and digests load and render correctly.

- [ ] Copy `src/posts/*.md` and `src/digests/*.md` to new project
- [ ] Install `vite-plugin-markdown` and add to vite config
- [ ] Keep `import.meta.glob` pattern for loading markdown (works in TanStack Start)
- [ ] Copy PrismJS setup for syntax highlighting
- [ ] Verify frontmatter parsing (title, date, summary, published filtering)
- [ ] Test blog list, individual post, digest list, individual digest

---

## Phase 5: Animations & Visual Effects

**Goal:** All animations work identically to original.

- [ ] Install `gsap`, `@gsap/react`, `motion`, `lenis`
- [ ] GSAP ScrollTrigger — verify triggers fire correctly with TanStack Router page transitions
  - May need `ScrollTrigger.refresh()` on route change via `router.subscribe()`
- [ ] Motion/React (Hero, NavMenu) — should work as-is
- [ ] Scramble text animation (Hero) — pure JS, framework-agnostic
- [ ] Phrases typing animation — pure React state, should work
- [ ] View Transitions API — hook into TanStack Router's `viewTransition` option on `<Link>` components instead of manual `startViewTransition`
- [ ] Lenis smooth scroll — initialize in `_layout.tsx`, call `lenis.scrollTo(0)` on route change
- [ ] BackgroundGrid / BackgroundParticles — canvas components, should work as-is
- [ ] ConstellationBackground (WebGL) — verify cleanup on unmount

---

## Phase 6: Static Assets & Public Files

**Goal:** All images, logos, resume, and other assets accessible.

- [ ] Copy `public/` directory as-is (logos, project images, resume PDF)
- [ ] Update `index.html` references if any paths changed (Plausible script moves to `__root.tsx` head)
- [ ] Verify all image paths resolve in components

---

## Phase 7: Deployment

**Goal:** Live on Cloudflare Workers with production domain.

- [ ] Configure `wrangler.jsonc`:
  - Production environment with custom domain (or routes)
  - Compatibility flags: `nodejs_compat`
- [ ] `pnpm build && wrangler deploy` — verify it works
- [ ] Set up GitHub Actions or Cloudflare Pages CI for auto-deploy (optional)
- [ ] DNS: point domain to Cloudflare Worker
- [ ] Remove Netlify config (`netlify.toml` not copied)
- [ ] Verify: all routes, assets, markdown content, animations work in production

---

## Phase 8: Cleanup & Polish

- [ ] Remove unused deps (preact, preact/compat)
- [ ] Run through all pages on mobile + desktop
- [ ] Lighthouse audit (performance, accessibility)
- [ ] Verify Plausible analytics fires
- [ ] Check OG meta tags / social previews

---

## File Mapping Reference

| Original (`new-portfolio`) | New (`tanstack-portfolio`) |
|---|---|
| `index.html` | `src/routes/__root.tsx` (shell) |
| `Main.tsx` | deleted (router handles entry) |
| `App.tsx` | `src/routes/_layout.tsx` (layout) |
| `Home.tsx` | `src/routes/_layout/index.tsx` |
| `Blog.jsx` | `src/routes/_layout/blog/index.tsx` + `$slug.tsx` |
| `Digest.tsx` | `src/routes/_layout/digest/index.tsx` + `$slug.tsx` |
| `ConstellationPage.tsx` | `src/routes/_layout/constellation.tsx` |
| `NotFound.tsx` | `__root.tsx` `notFoundComponent` |
| `vite.config.ts` | `vite.config.ts` (new plugins) |
| `netlify.toml` | `wrangler.jsonc` |
| `components/*` | `src/components/*` (mostly unchanged) |
| `lib/*` | `src/lib/*` (unchanged) |
| `posts/*.md` | `src/posts/*.md` (unchanged) |
| `digests/*.md` | `src/digests/*.md` (unchanged) |
| `public/*` | `public/*` (unchanged) |

---

## Risk Assessment

| Risk | Likelihood | Mitigation |
|---|---|---|
| GSAP ScrollTrigger misfire on route change | Medium | `ScrollTrigger.refresh()` in router subscriber |
| `vite-plugin-markdown` incompatible with TanStack Start | Low | Fallback: use server function to read/parse markdown |
| WebGL context lost on navigation | Low | Already handles cleanup; verify with TanStack Router |
| Preact-specific API usage in components | Low | Codebase uses React-compatible APIs throughout |
| Cloudflare Worker size limits | Low | Portfolio is small; no large server deps |
