# Aladdin Web UI Template — Copilot Instructions

These instructions help AI coding agents work effectively in this Next.js (App Router) + Tailwind v4 + shadcn-style UI project.

## Big Picture
- App Router with global layout and fonts: see [app/layout.tsx](app/layout.tsx) and [app/page.tsx](app/page.tsx).
- Theme management via `next-themes`: provider in [components/theme-provider.tsx](components/theme-provider.tsx) toggles `dark` class on the root.
- Tailwind v4 is configured inline in [app/globals.css](app/globals.css) using CSS variables and `@theme` tokens (no traditional `tailwind.config.js`).
- UI components follow shadcn patterns using `class-variance-authority` (CVA), Radix `Slot`, and a `cn()` utility: see [components/ui/button.tsx](components/ui/button.tsx) and [lib/utils.ts](lib/utils.ts).
- Project settings and aliases are defined in [components.json](components.json).

## Developer Workflows
- Dev server: `npm run dev` (Next.js 16) — edits to [app/page.tsx](app/page.tsx) hot-reload.
- Build/Start: `npm run build` → `npm run start`.
- Lint: `npm run lint` (ESLint v9 + `eslint-config-next`).
- Fonts via `next/font` Geist are set in [app/layout.tsx](app/layout.tsx); avoid custom font loaders.

## Styling & Themes
- Use semantic Tailwind tokens defined in [app/globals.css](app/globals.css): examples `bg-background`, `text-foreground`, `border-border`, `outline-ring/50`.
- Dark mode is driven by `next-themes` adding a `dark` class; do not manually toggle classes — rely on `ThemeProvider` props in [app/layout.tsx](app/layout.tsx).
- Color values are CSS variables populated with OKLCH colors under `:root` and `.dark` in [app/globals.css](app/globals.css).
- Tailwind v4 features used: `@import "tailwindcss"`, `@custom-variant dark`, `@layer base` with `@apply`. Keep new utilities inside CSS or component classes, not a separate config.

## UI Component Conventions
- Define variants with CVA and expose `VariantProps`: see `buttonVariants` in [components/ui/button.tsx](components/ui/button.tsx).
- Compose classes with `cn()` from [lib/utils.ts](lib/utils.ts) to merge Tailwind classes safely.
- Support `asChild` via Radix `Slot` when wrapping elements.
- Prefer `data-slot`, `data-variant`, `data-size` attributes for consistent targeting (pattern used in buttons).
- Icon sizing: rely on Tailwind size utilities (e.g., `size-4`) and avoid inline styles.

## shadcn Components Policy
- Source of truth: always use shadcn UI docs at https://ui.shadcn.com/docs for component implementations and APIs.
- Use only shadcn components: before adding, check for an existing implementation in [components/ui](components/ui) and reuse it (respect any local customizations).
- If missing: add the component by copying from shadcn docs and adapt to this project’s conventions (Tailwind v4 tokens, `cn()` merging, Radix `Slot`, CVA variants, `data-*` attributes).
- Dependencies: install required Radix or utility packages when a component needs them; keep imports aligned with aliases in [components.json](components.json).
- Tailwind: replace raw colors with semantic tokens (`bg-background`, `text-foreground`, etc.) so theming works across light/dark.
- Client vs server: mark interactive components with "use client"; prefer server components elsewhere.

## Routing & Structure
- Pages live under `app/`; `layout.tsx` wraps every route with fonts and theme provider.
- Shared UI lives in `components/ui/`; add new primitives here following the `button.tsx` pattern.
- Keep cross-cutting utilities in `lib/`.

## Integration Notes
- `next-themes` provider in [components/theme-provider.tsx](components/theme-provider.tsx) must wrap the app (already done in [app/layout.tsx](app/layout.tsx)). Use `attribute="class"`, `defaultTheme="system"`, `enableSystem`.
- Tailwind v4 PostCSS is set up via [postcss.config.mjs](postcss.config.mjs). Animations come from `tw-animate-css` already imported in [app/globals.css](app/globals.css).

## Examples
- Add a new shadcn component (example — Alert):
  - Check [components/ui](components/ui) for `alert.tsx`; if absent, implement from shadcn docs and conform to local patterns (CVA variants, `cn()`, semantic tokens).
  - Use: `<Alert variant="destructive" size="sm">Delete failed</Alert>`.
- Theming-safe colors: use `bg-background`, `text-foreground` instead of hard-coded hex values.

## Gotchas
- Do not add a standalone Tailwind config; extend tokens in [app/globals.css](app/globals.css).
- Keep fonts via `next/font`; avoid external `<link>` for fonts.
- React 19 + Next 16: prefer server components by default; mark interactive components with `"use client"` as in [components/theme-provider.tsx](components/theme-provider.tsx).

If anything is unclear or missing, point to the specific file/area and I’ll refine these instructions.