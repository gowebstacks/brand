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
} from "./slides/components";
```

Import UI primitives from `@webstacks/ui`:

```tsx
import { Heading, Text, Stack, Grid, GridColumn, Box, Button, Badge } from "@webstacks/ui";
```

## Slide Rules

1. **All slides are 16:9** (1280×720). Use `SlideBase` as the wrapper.
2. **Outer padding**: 64px (`p-16`) on all sides — built into `SlideBase`.
3. **Themes**: Use the `theme` prop: `"light"` (white bg, dark text) or `"dark"` (black bg, light text). There are no other background options — backgrounds are always white or black.
4. **Alternate themes**: Alternate between light and dark slides for visual variety. Never use the same theme for more than 2 consecutive slides.
5. **Content density**: 3–5 elements per slide maximum. Slides are not documents.

## Colors — ALWAYS Use Semantic Tailwind Classes

**CRITICAL: Never use hardcoded color values (HSL, hex, rgb) or primitive token names (teal-500, blue-700, neutral-50) in class names or inline styles.** Always use the semantic Tailwind classes from the design system.

### Semantic class mapping

| Purpose | Tailwind class | What it resolves to |
|---------|---------------|---------------------|
| Slide background | `bg-background` | White (light) / Black (dark) |
| Subtle surface | `bg-muted` | Subtle gray |
| Elevated surface | `bg-accent` | Slightly lighter gray |
| Default text | `text-foreground` | Black (light) / White (dark) |
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

- **Do**: `className="bg-muted text-foreground border-border"`
- **Do**: `className="text-primary"` for small accent highlights
- **Do**: `className="bg-primary/5"` for subtle tinted areas
- **Don't**: `className="bg-[hsl(177,94%,13%)]"` — never use arbitrary values
- **Don't**: `className="bg-neutral-50"` — never use primitive color scale names
- **Don't**: `className="text-white"` or `className="text-black"` — use semantic tokens
- **Don't**: `style={{ color: "var(--color-teal-500)" }}` — never inline primitive CSS vars
- **Don't**: use `bg-primary` as a slide or section background — blue is accent only

## Typography

- **Font**: Saans (sans-serif) for everything; TT Interphases Pro Mono for eyebrows/code
- **Eyebrow pattern**: `<Text as="span" size={200} className="font-mono uppercase tracking-widest">`
- **Headings**: Always use the `<Heading>` component at **regular weight** (no bold/semibold) — it applies proper tracking
- **Body**: Use `<Text size={400}>` or `<Text size={500}>`
- **IMPORTANT — Weight rule**: Never use anything bolder than `weight="medium"`. Headings and headlines are always regular weight. Medium is only for emphasizing individual words.

## Button Style

Buttons are pill-shaped (`rounded-full`). Use the mode×tone system:
- Primary CTA: `<Button mode="filled" tone="primary" size="lg">`
- Secondary: `<Button mode="stroke" tone="secondary" size="lg">`
- On dark slides: `<Button mode="stroke" className="border-primary-foreground text-primary-foreground">`

## Deck Pacing

Follow these patterns:

**Sales Pitch (~12 slides):**
Title → Problem → Stat → Solution → How It Works → Feature × 2 → Quote → Results → Case Study → Logos → CTA

**Case Study (~8 slides):**
Title → Challenge → Approach → Key Metric → Solution Detail → Results → Quote → CTA

## Key Guidelines

Read these files for detailed brand rules:
- `guidelines/brand.md` — Voice, logo, personality
- `guidelines/colors.md` — Full color palette and usage rules
- `guidelines/typography.md` — Type scale and font usage
- `guidelines/layout.md` — Grid system and spacing
- `guidelines/slides.md` — Slide types, pacing, and content density
- `guidelines/photography.md` — Image style and overlay rules

## Example Decks

Study these for composition patterns:
- `slides/examples/sales-pitch.tsx` — Full 12-slide sales deck
- `slides/examples/case-study.tsx` — Full 8-slide case study

## Design Tokens

Machine-readable tokens are in `tokens/design-tokens.json` — use this for exact color values, font details, and spacing.
