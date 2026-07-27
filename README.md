# Primotech

Marketing site + project inquiry for the Primotech engineering team.

## Stack

- TanStack Start (React) + TanStack Router
- Vite + Tailwind CSS v4
- Static prerender (`dist/client`)
- Formspree lead forms (`VITE_FORMSPREE_ID`)

## Develop

```bash
cp .env.example .env
# optional: set VITE_FORMSPREE_ID
npm install
npm run dev
```

Requires Node.js 22+.

## Build

```bash
npm run build
```

Static output: `dist/client` (Netlify publish directory is already set in `netlify.toml`).

## Content

Edit typed modules under `src/content/`:

- `site.ts` — brand, nav, outcomes, inquiry options
- `services.ts` — service pillars
- `team.ts` — team profiles
- `case-studies.ts` — work

See `draft.md` for the living business brief.
