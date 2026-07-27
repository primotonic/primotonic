# Primotonic Business Platform — Draft Brief (v1)

Living brief for the Primotonic marketing site + light lead tooling.

---

## Brand

| Item | Decision |
|------|----------|
| Public name | **Primotonic** |
| Social | `@Primotonic` |
| Mark | Orange continuous-line face icon |
| Wordmark | Bold geometric caps + face lockup |
| Note | Brand + domain: **Primotonic** (`primotonic.com`) |

### Design tokens

| Token | Value | Use |
|-------|-------|-----|
| `--color-primary` | `#FF6A00` / `#FF8800` | Face mark, CTAs, blobs |
| `--color-accent` | `#FF443A` | Wordmark accent, emphasis |
| `--color-cream` | `#FBF6EE` | Paper background |
| `--color-charcoal` | `#1A1A1A` | Text |
| `--color-surface` | `#FFFFFF` | Cards / panels |

- **Type:** Bold geometric display for headings; characterful sans for body (not Inter/Roboto/Arial)
- **Layout:** Organic orange blobs, subtle paper texture, staggered service blocks, generous whitespace
- **Motion:** 2–3 intentional motions (hero reveal, section fade/slide, CTA hover)

---

## Positioning

**Promise:** Full-stack web, apps, and ops systems — from idea to support — by a Philippines-based engineering team.

Lead with outcomes (cost cut, visibility, reliability), not generic “we build websites.”

### Services (pillars)

1. **Full-Stack Web Development** — Custom sites and Rails/React/NestJS systems end-to-end
2. **Mobile Application** — User-friendly mobile apps with smooth install and support paths
3. **Technical Support** — Troubleshoot, resolve, and optimize so operations stay smooth
4. **Web Pentesting** — Hands-on web app and API security testing with actionable remediation

### Featured NDA work

- **Loan Collection Dashboard** — Banking / collections ops dashboard. Company name confidential (no NDA badge).
- **Full-Stack Casino Platform** — Government-approved iGaming operator; company name confidential. Managed platform revenue ≈ ₱5M–₱20M (≈ $80K–$325K USD). No NDA badge; brand still unnamed.
- **Interactive Game Client** — Confidential Godot game client (aligned with team game expertise). Title/publisher under NDA.
- **Operations Web Platform** — Confidential full-stack ops web app (MERN/Next.js style). Brand under NDA.
- **Secure API & Backend Platform** — Confidential API hardening engagement. Client details under NDA.
4. **Web Pentesting** — Hands-on web app and API testing with actionable remediations

Differentiators from the team: internal systems that replace SaaS, secure backends, game/web product work, measurable savings.

---

## Team

| Member | Role focus | Portfolio |
|--------|------------|-----------|
| Melquizedek Felix | Rails / full-stack systems / IT solutions | http://milkyfelix.com/ |
| Von Aralar | Secure scalable backends / security | https://aralar.netlify.app/about |
| Rojhon Buenaventura | Web / game (Godot) / technical writing | https://rojhonbuenaventura.com/ |

### Proof points to surface

- $80K–$325K USD platform revenue managed (casino / iGaming; ≈ ₱5M–₱20M)
- $200K+ annual savings delivered (midpoint of managed revenue range)
- 10K+ users supported in production (casino platform)
- 10+ hours saved weekly (event flows)
- 500+ vulnerabilities researched (bug bounty + security research)

---

## Site map

| Route | Purpose |
|-------|---------|
| `/` | Home — brand hero, outcomes, services, work, team, inquiry CTA |
| `/services` | Three pillars + differentiators |
| `/work` | Case studies (seeded from portfolio outcomes) |
| `/team` | Three profiles + portfolio links |
| `/contact` | Contact + multi-step project inquiry |
| `/$` | 404 splat for static hosts |

---

## Homepage wire

1. **Hero** — Primotonic lockup (brand-first), one headline, one sentence, CTAs: Start a project / See our work
2. **Outcomes strip** — Aggregate metrics (single row)
3. **Services** — Staggered three pillars
4. **Selected work** — 2–3 case teasers → `/work`
5. **Team** — Three people → `/team`
6. **Inquiry band** — Path into project inquiry

First viewport: brand + headline + support line + CTA group + dominant visual only. No stats/cards clutter in hero.

---

## Tech stack

- **TanStack Start** (React) + TanStack Router
- **Vite** + **Tailwind CSS**
- **Static prerender** (`prerender.enabled`, `crawlLinks`, `autoStaticPathsDiscovery`)
- **Content:** Typed TS modules in `src/content/` (no CMS)
- **Leads:** Formspree via `VITE_FORMSPREE_ID`
- **Host:** Netlify or Vercel → `dist/client`, clean URLs

### Folder layout

```
src/
  routes/           # /, services, work, team, contact, $
  components/       # layout, hero, services, team-card, inquiry-form
  content/          # services.ts, team.ts, case-studies.ts, site.ts
  styles/           # tokens + global CSS
  lib/              # formspree client, seo helpers
public/             # logo SVGs, og image, favicon
```

---

## Project inquiry flow

**Steps:** (1) Contact → (2) Project details → (3) Review & submit

| Field | Required |
|-------|----------|
| Name | Yes |
| Email | Yes |
| Company | No |
| Service interest | Yes |
| Budget range | Yes |
| Timeline | Yes |
| Problem description | Yes |
| `formType` | Hidden (`contact` \| `inquiry`) |
| Honeypot | Hidden |

---

## Open items

- [ ] Production domain
- [ ] Formspree form ID / account
- [ ] Team photos (or illustrated avatars matching brand)
- [ ] Confirm shared inbox email for leads
- [ ] Hosting choice (Netlify vs Vercel)
- [ ] OG share image final art

---

## Out of scope (v1)

Blog/CMS, auth/client portal, payments, i18n, live chat
