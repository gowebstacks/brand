# Slide System

## Overview
This directory contains reusable React slide components and example decks built with `@webstacks/ui`. These serve as reference patterns for AI tools (especially v0) to generate on-brand presentation slides.

## Components (`components/`)

All slide components use the 16:9 aspect ratio (1280×720) and import primitives from `@webstacks/ui`.

| Component | Purpose |
|-----------|---------|
| `SlideBase` | Base wrapper — enforces aspect ratio, padding, and background themes |
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

## Background Themes

All components accept a `bg` prop with these options:
- `"white"` — White background, dark text (default for most)
- `"light"` — neutral-50 background, dark text
- `"teal"` — Brand teal (teal-500), white text
- `"teal-dark"` — Deep teal (teal-700), white text
- `"violet"` — Brand violet (violet-500), white text
- `"dark"` — Dark gray (neutral-900), white text
- `"black"` — Pure black, white text

## Examples (`examples/`)

| Example | Description |
|---------|-------------|
| `sales-pitch.tsx` | Full sales pitch deck (~12 slides) |
| `case-study.tsx` | Case study deck (~8 slides) |

## Usage with v0

When v0 is connected to this repo, it can:
1. Import slide components from `slides/components`
2. Compose them into full decks following the patterns in `slides/examples`
3. Reference `guidelines/*.md` for brand rules
4. Use `tokens/design-tokens.json` for exact color and typography values
