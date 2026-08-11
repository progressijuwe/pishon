# Pishon Parts & Machineries Ltd

Marketing and lead-generation site for a Nigerian industrial procurement and
commodity export business. Eleven pages covering three product divisions, a
services catalogue, an export-process walkthrough, a filterable gallery, and two
lead-capture forms that deliver straight to the sales inbox.

**Live:** https://pishon-nine.vercel.app

---

## Table of contents

- [Stack](#stack)
- [Getting started](#getting-started)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Design system](#design-system)
- [Accessibility](#accessibility)
- [Forms and email delivery](#forms-and-email-delivery)
- [SEO](#seo)
- [Deployment](#deployment)

---

## Stack

| Concern    | Choice                                                   |
| ---------- | -------------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Turbopack), React 19             |
| Language   | TypeScript, `strict`                                     |
| Styling    | Tailwind CSS v4 with `@theme inline` design tokens       |
| Components | Radix UI primitives, `class-variance-authority` variants |
| Forms      | React Hook Form + Zod, shared schemas client and server  |
| Data       | TanStack Query                                           |
| Email      | Resend                                                   |
| Hosting    | Vercel                                                   |

Pages are React Server Components by default. Only genuinely interactive
leaves — the nav drawer, the theme toggle, the forms, the journey carousel, the
gallery filter — carry `'use client'`, so most of the site ships no component
JavaScript.

---

## Getting started

Requires Node 20 or newer.

```bash
npm install
cp .env.example .env.local
npm run dev
```

The site runs at http://localhost:3000. Without mail credentials the forms
validate normally and return a "not configured" notice rather than pretending to
send — see [Forms and email delivery](#forms-and-email-delivery).

### Scripts

| Command             | What it does               |
| ------------------- | -------------------------- |
| `npm run dev`       | Dev server with Turbopack  |
| `npm run build`     | Production build           |
| `npm start`         | Serve the production build |
| `npm run lint`      | ESLint                     |
| `npm run typecheck` | `tsc --noEmit`             |
| `npm run format`    | Prettier across the repo   |

---

## Environment variables

| Variable              | Required     | Purpose                                              |
| --------------------- | ------------ | ---------------------------------------------------- |
| `NEXT_PUBLIC_APP_URL` | Production   | Canonical origin for metadata, sitemap, OG images    |
| `NEXT_PUBLIC_API_URL` | Production   | Base URL the client posts forms to                   |
| `ENQUIRY_INBOX`       | For delivery | Address that receives enquiries and quote requests   |
| `RESEND_API_KEY`      | For delivery | Resend API key                                       |
| `ENQUIRY_FROM`        | Optional     | Sender identity; must be a domain verified in Resend |

`src/config/env.ts` validates these with Zod at import time, so a malformed
value fails the build rather than surfacing as `undefined` deep in a request.
Blank strings are treated as unset, so an empty line in `.env` behaves the same
as a missing one.

`NEXT_PUBLIC_*` values are inlined at **build** time. Changing the domain means
redeploying, not just editing an environment variable.

---

## Project structure

```
src/
├─ app/              Routes, layouts, API handlers, sitemap and robots
│  └─ api/           contact and quote endpoints
├─ components/
│  ├─ sections/      Page bands — Hero, MediaSplit, CardGrid, Faq, CtaBand …
│  ├─ ui/            Primitives — Button, Input, Select, Accordion, Modal …
│  ├─ forms/         ContactForm and the five-step QuoteWizard
│  ├─ layout/        Header, NavMenu, Footer, ThemeToggle
│  ├─ shared/        Container, Section, Heading, Text, Reveal, CountUp
│  └─ seo/           JSON-LD structured data
├─ config/           Site identity, navigation, FAQ content, env schema
├─ hooks/            useMediaQuery, useMounted, useScrolled, useDisclosure
├─ lib/              cn(), API error type, SEO metadata builder, mailer
├─ styles/           Design tokens and custom utilities
└─ validators/       Zod schemas shared by forms and API routes
```

**Sections own layout, pages own content.** Every band takes its copy and
imagery as props, so the same `MediaSplit` renders the About story and a product
specification without a variant explosion. Adding a page is composition, not new
components.

---

## Design system

Everything visual resolves to a token in `src/styles/tokens.css`. Components
never hardcode a colour, size or shadow.

Colours are declared twice — once under `:root`, once under `.dark` — then
mapped through `@theme inline`, which makes `bg-primary` emit
`var(--primary)` rather than a resolved colour. One class follows whichever
theme is active, with no `dark:` variant on every utility.

Type is semantic rather than measured: `text-h2` states intent, `text-3xl`
states a number that means nothing six months later. The five headline sizes are
fluid `clamp()` values interpolating between mobile and desktop across a
375–1280px viewport.

### Rules worth knowing before you change anything

**Dark bands re-point the accent, they don't restyle.** `--scrim` is identical
in both themes, so the page accent would sit at 2.9:1 on it. Mark those subtrees
with `on-scrim` alongside `bg-scrim` and `text-secondary`,
`text-muted-foreground` and the focus ring keep working.

**Text over a photograph needs a scrim floor.** `Hero` and the image tiles lay
white type over an image behind a gradient. The gradient never drops below 65%
opacity anywhere text can reach — at 60% a pale photograph puts the description
under 4.5:1.

**A field outline is not a divider.** `--input` is deliberately darker than
`--border`. WCAG asks 3:1 of any control boundary, and a text field's outline is
the only thing saying a field is there.

**Hover is a token, not a colour-mix.** `--secondary-hover` is declared per
theme and re-pointed by `on-scrim`. Hover moves the fill away from the surface
behind it: darker on the light page, lighter on the dark page, always lighter on
the scrim.

**Don't add t-shirt-named `--spacing-*` tokens.** Tailwind's sizing utilities
resolve against both the spacing and container scales, and spacing wins —
defining `--spacing-lg` silently turns `max-w-lg` from 32rem into 2.5rem. The
rhythm scale lives in `sectionVariants` for that reason.

**New `--text-*` tokens must be registered in `cn()`.** `tailwind-merge` treats
an unrecognised `text-*` class as a colour, so `cn('text-body', 'text-muted-foreground')`
would silently drop the size. `src/lib/utils.ts` declares the custom sizes as a
font-size group.

---

## Accessibility

Built to WCAG 2.1 AA and verified by measurement rather than inspection —
contrast computed from composited pixels, including text sitting on photographs
behind gradients.

- Every interactive control meets the 24px minimum target size, including the
  carousel pagination dots, where the visible dot is 8px inside a 24px hit area.
- The five-step quote wizard validates one step at a time and moves focus to the
  new step heading, so keyboard and screen reader users aren't stranded on a
  button that no longer exists.
- The journey carousel autoplays, so it ships a pause control (WCAG 2.2.2) and
  parks itself on hover, on focus, when the tab is hidden, when scrolled out of
  view, and under `prefers-reduced-motion`.
- Gallery captions are permanent rather than hover-only, so they exist for touch
  and keyboard users.
- Forms wire label, description and error through `aria-describedby` and
  `aria-invalid`; the gallery filter announces its result count.
- `prefers-reduced-motion` collapses every animation globally.

---

## Forms and email delivery

Both the contact enquiry and the quote request post to a route handler that
re-validates with the same Zod schema the browser used, then sends through
Resend.

```
POST /api/contact   →  202 accepted · 422 field errors · 502 send failed · 503 not configured
POST /api/quote     →  202 accepted · 422 field errors · 502 send failed · 503 not configured
```

**Delivery failures are reported, never swallowed.** A route that returns 200
while dropping the payload loses a real sales lead with the sender believing it
arrived, so an unconfigured or failing mailer surfaces in the UI with the direct
email address as a fallback and the submitted data left intact.

To enable delivery: create a Resend account, verify your sending domain, then
set `RESEND_API_KEY`, `ENQUIRY_INBOX` and `ENQUIRY_FROM`.

Server-side validation errors come back shaped as `{ errors: { field: [msg] } }`
and are replayed onto the matching inputs, so a rule the client cannot check
still lands in context rather than as an opaque banner.

---

## SEO

- Per-page canonical URLs, Open Graph and Twitter cards, built through one
  `createMetadata()` helper so a new page cannot ship without them
- `Organization` and `WebSite` JSON-LD, claiming only what the site can support
- Generated `sitemap.xml` and `robots.txt`
- Open Graph images generated at build time from the logo

---

## Deployment

Deployed on Vercel from the default branch. Set the environment variables in the
project settings before the first production build — `NEXT_PUBLIC_APP_URL` is
baked into the sitemap, canonicals and share cards at build time.

```bash
npm run build && npm start
```

---

## Licence

© Pishon Parts & Machineries Ltd. All rights reserved.
