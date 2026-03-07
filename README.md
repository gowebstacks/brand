# @webstacks/brand

A machine-readable brand knowledge hub for AI-powered design tools. This repo contains brand guidelines, slide components, and reference decks that enable AI tools (primarily [v0](https://v0.dev)) to generate on-brand presentations and assets for Webstacks.

## What's Inside

```
brand/
├── guidelines/          # Brand documentation (colors, typography, layout, etc.)
├── slides/
│   ├── components/      # Reusable React slide components
│   └── examples/        # Complete reference decks
├── tokens/              # Machine-readable design tokens (JSON)
└── .v0/                 # v0-specific instructions
```

### Guidelines
Markdown files documenting the Webstacks brand system — colors, typography, photography style, layout rules, and slide-specific guidelines. These are the primary files AI tools read for context.

### Slide Components
React components built with [`@webstacks/ui`](https://github.com/gowebstacks/ui) that define standard slide layouts. All slides use 16:9 aspect ratio (1280×720) and the Webstacks design system.

Available components: `TitleSlide`, `ContentSlide`, `SplitSlide`, `StatSlide`, `QuoteSlide`, `ImageSlide`, `ComparisonSlide`, `AgendaSlide`, `TeamSlide`, `CTASlide`, `LogoGridSlide`.

### Example Decks
Two complete reference decks that demonstrate how components compose into real presentations:
- **Sales Pitch** (12 slides) — problem → solution → proof → CTA flow
- **Case Study** (8 slides) — challenge → approach → results → CTA flow

### Design Tokens
A JSON extraction of the key design tokens from `@webstacks/ui` (colors, fonts, spacing, button styles) for direct AI consumption.

## Connecting to v0

1. **Add this repo** to your v0 project context. v0 will automatically read the `.v0/instructions.md` file.

2. **Generate a deck** by prompting v0:
   ```
   Create a 10-slide sales pitch deck for [company/product].
   Use the Webstacks brand slide components.
   ```

3. **v0 will**:
   - Import components from `slides/components`
   - Follow the brand guidelines in `guidelines/`
   - Reference the example decks for pacing and composition
   - Use the correct colors, fonts, and spacing from the design system

## Brand Quick Reference

| Element | Value |
|---------|-------|
| Primary color | Teal — `hsl(177, 94%, 13%)` |
| CTA color | Blue — `hsl(217, 89%, 46%)` |
| Tertiary color | Violet — `hsl(263, 94%, 19%)` |
| Font (primary) | Saans (300–700) |
| Font (mono) | TT Interphases Pro Mono |
| Buttons | Pill-shaped, mode×tone system |
| Slide size | 1280×720 (16:9) |
| Border radius | 0.5rem base |

## Development

```bash
# Install dependencies
npm install

# Type-check slide components
npm run typecheck
```

## Dependencies

- [`@webstacks/ui`](https://github.com/gowebstacks/ui) — Component library and design tokens
- React 18+
- Tailwind CSS 3.4+
- TypeScript 5.3+
