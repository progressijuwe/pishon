# Design system

Everything visual resolves to a token in `src/styles/tokens.css`. Components
never hardcode a colour, size, or shadow.

The values come from **Industrial Authority**, the design system attached to the
`Pishon Parts Design System` project in Google Stitch. Stitch is the source of
truth for the palette, type scale and rhythm; `tokens.css` is the translation of
it into this repo's contract — Stitch's hex carried over as-is, its names mapped
onto shadcn's semantic slots. If a value changes upstream, change it there
first, then copy it here — don't patch a component.

Brand shorthand: **Primary Navy** carries structural weight, **Primary Blue** is
interactive-only, **Accent Gold** is a sparing signature for high-value
indicators. Type is Manrope throughout, on a strict 8px rhythm.

## How theming works

Colours are declared twice as plain custom properties — once under `:root`, once
under `.dark` — then mapped into Tailwind's namespace with `@theme inline`:

```css
:root {
    --primary: #0f2747;
}
.dark {
    --primary: #b2c7f0;
}

@theme inline {
    --color-primary: var(--primary);
}
```

`inline` is the important part. It makes `bg-primary` emit
`background-color: var(--primary)` rather than a resolved colour, so one class
follows whichever theme is active. Without it you'd need a `dark:` variant on
every colour utility.

`next-themes` toggles the `.dark` class on `<html>`, matched by the
`@custom-variant dark` rule in `globals.css`. The two must agree — changing the
provider's `attribute` without changing that rule silently breaks dark mode.

Theme is applied by a blocking inline script before first paint, which is why
there's no flash. That script is also why `<html>` carries
`suppressHydrationWarning`.

## Adding a colour

Add it to **both** blocks in `tokens.css`, then map it:

```css
:root {
    --brand: #3da5f5;
    --brand-foreground: #0f2747;
}
.dark {
    --brand: #98cbff;
    --brand-foreground: #011b3b;
}

@theme inline {
    --color-brand: var(--brand);
    --color-brand-foreground: var(--brand-foreground);
}
```

You now have `bg-brand`, `text-brand`, `border-brand`, and so on. Every colour
ships with a `-foreground` pair — that's what guarantees readable text on it.

Colours are stored as hex, matching what Stitch publishes — copy a value across
without converting it. Opacity utilities (`bg-primary/20`) still work; Tailwind
resolves them through `color-mix()`. Just note that hex isn't perceptually
uniform, so `/20` of two different colours won't necessarily read as the same
visual weight — check a swatch rather than assuming.

Accent Gold is `bg-gold` / `text-gold`, deliberately **not** mapped onto
shadcn's `accent` slot: `accent` drives menu and list hover states, and gold is
a sparing signature for certifications, stat highlights and quality badges — not
a hover colour. `accent` stays a neutral tint.

## Typography

The scale is semantic, not measurement-based. `text-h2` states intent;
`text-3xl` states a number that means nothing six months later.

| Token          | Size            | Use                   |
| -------------- | --------------- | --------------------- |
| `text-display` | 4.5rem (72px)   | Hero headline         |
| `text-h1`      | 3.5rem (56px)   | Page title            |
| `text-h2`      | 2.75rem (44px)  | Section heading       |
| `text-h3`      | 2.25rem (36px)  | Subsection            |
| `text-h4`      | 1.5rem (24px)   | Card title            |
| `text-body`    | 1.125rem (18px) | Running prose         |
| `text-small`   | 1rem (16px)     | Secondary detail      |
| `text-caption` | 0.875rem (14px) | Labels, metadata      |
| `text-label`   | 1rem (16px)     | Button and chip label |

Body runs at 18px/1.7 deliberately — the system calls this "controlled density",
so dense procurement data stays scannable. Constrain prose to `max-w-prose`
(45rem ≈ 720px); past that, line length starts costing you readers.

Each carries its own line-height, letter-spacing and weight, so `text-h2` alone
is the whole treatment.

Reach for `Heading` and `Text` rather than the raw utilities — they keep the
semantic element separate from the visual size:

```tsx
<Heading as="h2" size="h4">
    Looks small, still an h2
</Heading>
```

## Spacing, radius, shadows

Page rhythm is a `Section` variant — `<Section spacing="2xl">` — not a spacing
token. Everything else uses Tailwind's numeric scale (`p-4`, `gap-6`), on the
system's strict 8px rhythm.

`spacing="2xl"` is the signature 120px section padding and `spacing="hero"` the
160px band; both reflow to 64px on mobile. `surface="alt"` gives the Section Alt
tonal break for separating long-form content areas.

> **Don't add t-shirt-named `--spacing-*` tokens.** The sizing utilities
> (`max-w-*`, `w-*`, `min-w-*`, `basis-*`) resolve against both the spacing
> scale and the container scale, and spacing wins. Defining `--spacing-lg`
> silently turns `max-w-lg` from 32rem into 2.5rem — a mysteriously narrow
> column rather than a visible error. The rhythm scale lives in
> `sectionVariants` for exactly this reason.

Radius derives from one knob. Change `--radius` and the whole app restyles:

```css
:root {
    --radius: 1rem;
} /* rounded-sm … rounded-4xl all follow */
```

At 1rem that lands on the system's 16px containers (`rounded-lg` for cards,
feature blocks, images) and ~12px form controls (`rounded-md`). Buttons, filter
chips and status badges are **pills** — use `rounded-full`, which sits outside
this scale. Avoid sharp corners entirely.

Shadows (`shadow-sm` … `shadow-xl`) are ambient and tinted with Primary Navy
rather than neutral black, so elevation reads as tonal layering on the light
canvas instead of a grey haze. Cards lift to `shadow-md` on hover.

## Motion

`--ease-out-quart` and `--ease-spring` are available as `ease-*` utilities.
Enter/exit animations for Radix components come from `tw-animate-css`
(`animate-in`, `fade-in-0`, `zoom-in-95`) and `shadcn/tailwind.css`
(`animate-accordion-down`).

`base.css` honours `prefers-reduced-motion` globally, collapsing every animation
and transition to effectively zero. Don't defeat it with `!important`.

## Verifying changes

`/` renders every token and component on one page. Change a token, load it, and
toggle the theme in the header — if anything hardcodes a colour, it shows up
there immediately.
