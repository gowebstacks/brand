# Slide System

## Overview
This directory contains reusable React slide components and presentation decks built with `@webstacks/ui`. These serve as reference patterns for AI tools (especially v0) to generate on-brand presentation slides.

## Components (`components/`)

All slide components use the 16:9 aspect ratio (1280x720) and import primitives from `@webstacks/ui`.

| Component | Purpose |
|-----------|---------|
| `SlideBase` | Base wrapper — enforces aspect ratio, padding, and dark theme |
| `TitleSlide` | Title/cover slide with heading, subtitle, and eyebrow |
| `ContentSlide` | Text content with optional image — the most common slide type |
| `SplitSlide` | Two-panel layout (50/50 or 60/40 split) |
| `StatSlide` | Big number / metric highlight |
| `QuoteSlide` | Customer testimonial or quote |
| `ImageSlide` | Full-bleed image with text overlay |
| `ComparisonSlide` | Before/after or side-by-side comparison |
| `AgendaSlide` | Table of contents with optional active highlight |
| `TeamSlide` | Team member grid with photos |
| `CTASlide` | Call to action / closing slide |
| `LogoGridSlide` | Client/partner logo grid |
| `ThreeUpSlide` | Three-column content layout |
| `SectionSlide` | Section divider with large heading |
| `MultiStatSlide` | Multiple stat highlights |

## Presentations (`presentations/`)

Each presentation lives in its own folder under `presentations/` and exports a default deck component plus a `metadata` object.

| Presentation | Description |
|--------------|-------------|
| `sales-pitch/index.tsx` | Full 19-slide sales pitch deck |

### Folder convention

```
presentations/
  types.ts              # PresentationMeta type
  index.ts              # Barrel — exports all presentations
  sales-pitch/
    index.tsx           # Deck component + metadata export
  <new-presentation>/
    index.tsx           # Same pattern
```

### Adding a new presentation

1. Create `presentations/<kebab-case-name>/index.tsx`
2. Export `metadata: PresentationMeta` (id, label, count) and a default deck component
3. Register in `presentations/index.ts` (add import + array entry)

The presentation will automatically appear in the preview app.

## Usage with v0

When v0 is connected to this repo, it can:
1. Import slide components from `slides/components`
2. Compose them into full decks following the patterns in `slides/presentations`
3. Reference `guidelines/*.md` for brand rules
4. Use `tokens/design-tokens.json` for exact color and typography values
5. Follow `.v0/instructions.md` for the complete creation workflow
