# v0 Instructions — Webstacks Brand

You are generating slide decks for Webstacks, a web development agency for B2B SaaS companies.

## Component Library

Import slide components from `slides/components`:

```tsx
import {
  TitleSlide,
  ContentSlide,
  SplitSlide,
  StatSlide,
  QuoteSlide,
  ImageSlide,
  ComparisonSlide,
  AgendaSlide,
  TeamSlide,
  CTASlide,
  LogoGridSlide,
  ThreeUpSlide,
  SectionSlide,
  MultiStatSlide,
} from "./slides/components";
```

Import UI primitives from `@webstacks/ui`:

```tsx
import { Heading, Text, Stack, Grid, GridColumn, Box, Button, Badge } from "@webstacks/ui";
```

## Slide Rules

1. **All slides are 16:9** (1280x720). Use `SlideBase` as the wrapper.
2. **Outer padding**: 64px (`p-16`) on all sides — built into `SlideBase`.
3. **Dark theme only**: Always use `theme="dark"` on `SlideBase`. There is no light theme.
4. **Content density**: 3-5 elements per slide maximum. Slides are not documents.

## Dark Slide Patterns

Every slide uses `theme="dark"` (black background, white text). Follow these patterns:

- **Footer bar**: Persistent bar at the bottom with Webstacks symbol, URL, and copyright
- **Opacity hierarchy**: Use `opacity-60` for secondary text, `opacity-70` for descriptions, `opacity-50` for tertiary, `opacity-40` for subtle labels
- **Card surfaces**: Use `bg-white/[0.04]` for cards and elevated content areas
- **Eyebrows**: Mono uppercase with `opacity-60`
- **3D shape accents**: Decorative 3D shapes from `/images/3d-shapes/`, positioned with overflow and slight rotation

## Colors — ALWAYS Use Semantic Tailwind Classes

**CRITICAL: Never use hardcoded color values (HSL, hex, rgb) or primitive token names (teal-500, blue-700, neutral-50) in class names or inline styles.** Always use the semantic Tailwind classes from the design system.

### Semantic class mapping

| Purpose | Tailwind class | What it resolves to |
|---------|---------------|---------------------|
| Slide background | `bg-background` | Black (dark theme) |
| Default text | `text-foreground` | White (dark theme) |
| Subdued text | `text-muted-foreground` | Gray |
| Accent highlights | `text-primary` | Blue (accent only) |
| Borders | `border-border` | Subtle gray |

### Blue is an accent color only

**Blue (`text-primary`, `bg-primary`) is only used as an accent color** — for small highlights, active states, and interactive elements. It is NEVER used as:
- A slide background
- A large area fill
- A heading color
- A section background

Examples of correct blue accent usage:
- Active agenda item number: `className="text-primary"`
- Positive-side tint in comparisons: `className="bg-primary/5 border-primary/20"`
- CTA buttons: `<Button mode="filled" tone="primary">`

### Do's and Don'ts

- **Do**: `className="text-foreground border-border"`
- **Do**: `className="text-primary"` for small accent highlights
- **Do**: `className="bg-primary/5"` for subtle tinted areas
- **Do**: `className="bg-white/[0.04]"` for card surfaces on dark slides
- **Don't**: `className="bg-[hsl(177,94%,13%)]"` — never use arbitrary values
- **Don't**: `className="bg-neutral-50"` — never use primitive color scale names
- **Don't**: `className="text-white"` or `className="text-black"` — use semantic tokens
- **Don't**: `style={{ color: "var(--color-teal-500)" }}` — never inline primitive CSS vars
- **Don't**: use `bg-primary` as a slide or section background — blue is accent only
- **Don't**: use `text-primary` for icons (checkmarks, arrows, etc.) — icons should always be white (`text-foreground`) on slides

## Typography

- **Font**: Saans (sans-serif) for everything; TT Interphases Pro Mono for eyebrows/code
- **Eyebrow pattern**: `<Text as="span" size={200} className="font-mono uppercase tracking-widest">`
- **Headings**: Always use the `<Heading>` component at **regular weight** (no bold/semibold) — it applies proper tracking
- **IMPORTANT — Weight rule**: Never use anything bolder than `weight="medium"`. Headings and headlines are always regular weight. Medium is only for emphasizing individual words or names.

### Heading Sizes — FOLLOW EXACTLY

| Role | Heading size | Which slides |
|------|-------------|--------------|
| Hero / deck opener | `size={1}` | TitleSlide (simple + rich), CTASlide |
| Display stat number | `size="display"` | StatSlide (the big number only) |
| Standalone title (minimal body text) | `size={2}` | ImageSlide |
| Section divider heading | `size={1}` | SectionSlide |
| Slide title (with body content) | `size={3}` | ContentSlide, SplitSlide, ComparisonSlide, AgendaSlide, TeamSlide, LogoGridSlide, ThreeUpSlide, MultiStatSlide |
| Display stat (multi) | `size="display"` | MultiStatSlide (each stat number) |

**Do not improvise heading sizes.** `size={1}` is only for hero moments (opening/closing). `size="display"` is only for stat numbers. `size={3}` is the standard for any slide with body content. Never use `size={4}`-`size={6}` for slide titles.

### Text Sizes — FOLLOW EXACTLY

| Role | Text size | When to use |
|------|----------|-------------|
| Eyebrow | `size={200}` mono uppercase | Above headings |
| Caption / source / contact | `size={300}` | StatSlide context, CTASlide contact, attribution |
| Body text / list items | `size={400}` | Standard body, bullets, list items |
| Lead paragraph | `size={500}` | First paragraph on content slides, ImageSlide subtitle |
| Subtitle (under hero heading) | `size={600}` | TitleSlide subtitle, CTASlide subtitle, StatSlide description |
| Quote text | `size={700}` italic | QuoteSlide only |

**Rules:**
- Only one `size={500}` lead paragraph per slide — subsequent paragraphs use `size={400}`
- `size={600}` subtitles only appear under `size={1}` or `size="display"` headings
- `size={700}` is exclusively for quotes — never body text
- `size={100}` is reserved for micro-text only (dates, team member roles, footer text). Minimum for body content and eyebrows is `size={200}`

## TitleSlide — Rich Layout

TitleSlide supports a rich layout mode when `heroImage` or `teamMembers` props are provided. Without these, it falls back to the simple centered layout (eyebrow + title + subtitle).

**Rich layout props:**
```tsx
<TitleSlide
  date="March 04, 2026"                           // mono, uppercase, top-left
  title="Exploring an Agency Partnership"          // Heading size={1}
  subtitle="Accelerating the evolution of..."      // Text size={500}, muted
  heroImage="/images/3d-shapes/layered-diamonds.png"  // full-bleed right, cropped
  clientLogoSrc="/logos/client.svg"                // optional, next to Webstacks logo
  teamMembers={[
    { name: "Name", role: "Role", avatarSrc: "/images/headshots/..." },
  ]}
  theme="dark"
/>
```

**Layout rules:**
- Left content column (~65%), right side for hero image
- Webstacks logo lockup acts as eyebrow above the title
- Team members in a 3-column grid with square headshots (48px, no border-radius)
- Footer bar at bottom: Webstacks symbol + URL + copyright
- 3D shapes should be full-bleed, overflowing and cropped generously across edges. Apply slight rotation so they feel organic and floating, not rigidly placed. When pairing two shapes, vary size, rotation, and crop so the composition feels dynamic. **Never overlap the footer bar** — the bottom ~48px is a safe area

## Button Style

Buttons are pill-shaped (`rounded-full`). Use the mode x tone system:
- Primary CTA: `<Button mode="filled" tone="primary" size="lg">`
- Secondary: `<Button mode="stroke" tone="secondary" size="lg">`
- On dark slides: `<Button mode="stroke" className="border-primary-foreground text-primary-foreground">`

## Key Guidelines

Read these files for detailed brand rules:
- `guidelines/brand.md` — Voice, logo, personality
- `guidelines/colors.md` — Full color palette and usage rules
- `guidelines/typography.md` — Type scale and font usage
- `guidelines/layout.md` — Grid system and spacing
- `guidelines/slides.md` — Slide types, pacing, and content density
- `guidelines/photography.md` — Image style and overlay rules

## Presentations

Study the existing presentation for composition patterns:
- `slides/presentations/sales-pitch/index.tsx` — Full 19-slide sales pitch deck (uses TitleSlide rich layout)

## Design Tokens

Machine-readable tokens are in `tokens/design-tokens.json` — use this for exact color values, font details, and spacing.

---

## Creating a New Presentation

When the user asks you to create a new presentation, follow this workflow:

### 1. Ask the user first

Before writing any code, ask:

> "Would you like to start from an existing presentation or from scratch? If from scratch, please provide a slide-by-slide outline."

- **From existing**: Duplicate the chosen presentation folder, then modify the content.
- **From scratch**: The user provides an outline (slide titles, key points per slide), and you create from it.

### 2. Create the presentation folder

Create a new folder at `slides/presentations/<kebab-case-name>/index.tsx`.

### 3. Follow the file structure exactly

```tsx
/**
 * <Presentation Name> — <N> slides
 *
 * Deck flow:
 * 1. <Slide title> → 2. <Slide title> → ...
 */
import { Heading, Text } from "@webstacks/ui";
import { SlideBase, TitleSlide } from "../../components";
import type { PresentationMeta } from "../types";

export const metadata: PresentationMeta = {
  id: "<kebab-case-name>",
  label: "<Display Name>",
  count: <number of slides>,
};

/* ── Slide 1: <Title> ─────────────────────────────────── */
export function Slide01_Title() {
  return (
    <TitleSlide
      // ...props
      theme="dark"
    />
  );
}

// ... more slides ...

/* ── Full Deck ────────────────────────────────────────── */
export default function <PascalCaseName>Deck() {
  return (
    <div className="flex flex-col gap-8">
      <Slide01_Title />
      {/* ...all slides */}
    </div>
  );
}
```

### 4. Dark theme checklist

Every slide MUST follow these rules:
- [ ] `SlideBase` uses `theme="dark"`
- [ ] Footer bar present (Webstacks symbol + URL + copyright)
- [ ] Opacity hierarchy: `opacity-60/70/50/40` for text levels
- [ ] Card surfaces use `bg-white/[0.04]`
- [ ] Eyebrows use mono uppercase with `opacity-60`
- [ ] Font weight never exceeds `weight="medium"` (500)

### 5. Register the presentation

Add the new presentation to `slides/presentations/index.ts`:

```ts
import NewDeck, { metadata as newMeta } from "./<kebab-case-name>";

// Add to the presentations array:
export const presentations: PresentationEntry[] = [
  { meta: salesPitchMeta, Component: SalesPitchDeck },
  { meta: newMeta, Component: NewDeck }, // <-- add here
];
```

This makes it automatically appear in the preview app.
