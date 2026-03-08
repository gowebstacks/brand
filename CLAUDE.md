# Claude Code Instructions — Webstacks Brand

## Project Overview

This is the Webstacks brand system repo containing slide presentations, design tokens, and UI components. Presentations live in `slides/presentations/` and are previewed via the Next.js app in `apps/preview/`.

## Presentation File Structure

Each presentation uses **one file per slide**:

```
slides/presentations/<name>/
  config.ts        # metadata, slides array, shared types
  index.tsx        # re-exports config + default deck component
  slides/
    title.tsx      # one exported component per file
    ...
```

- Slide files export a single named component (e.g. `export function SlideTitle()`)
- `config.ts` imports each slide and assembles the `slides: SlideEntry[]` array
- `index.tsx` re-exports from config and provides the default deck component
- Cross-deck reuse: import from another presentation's `slides/` folder

## Slide Spacing Rules — CRITICAL

All custom slides must follow these exact spacing values. **Never improvise spacing.**

| Element | Class | Value |
|---------|-------|-------|
| Outer horizontal padding | `px-16` | 64px |
| Outer top padding | `pt-16` | 64px |
| Footer clearance (flex-col wrapper) | `pb-24` | 96px |
| Header group → content | `mt-8` | 32px |
| Between cards/items in grids | `gap-3` | 12px |
| Eyebrow → heading | `mt-4` | 16px |
| Card internal padding | `p-6` or `px-6 py-4` | 24px |

### Standard custom slide pattern

```tsx
<SlideBase theme="dark" className="!p-0">
  <div className="relative z-10 flex h-full flex-col px-16 pt-16">
    <Text as="span" size={200} className="font-mono uppercase tracking-widest opacity-60">
      Eyebrow
    </Text>
    <Heading as="h2" size={3} className="mt-4">
      Slide Title
    </Heading>
    <div className="mt-8 grid grid-cols-2 gap-3">
      {items.map((item) => (
        <div key={item} className="bg-white/[0.04] px-6 py-4">
          <Text size={400} className="opacity-70">{item}</Text>
        </div>
      ))}
    </div>
  </div>
  <SlideFooter />
</SlideBase>
```

### Forbidden spacing patterns

- `gap-4`, `gap-5`, `gap-6` between cards/list items — always use `gap-3`
- `gap-10`, `gap-12` as wrapper flex gaps — use `mt-8` for header→content
- Mixed gaps like `gap-x-8 gap-y-3` — use uniform `gap-3`
- `py-5` on row items — use `py-4`
- `flex-1` on content grids or lists — causes rows to stretch and creates huge vertical gaps between items. Content containers should sit at their natural height, top-aligned. Only use `flex-1` for horizontal columns sharing width or layout wrappers that intentionally push an element to the bottom with `mt-auto`.

## Visual Rules

- **No rounded corners** on cards, containers, or surface elements. No `rounded-lg`, `rounded-md`, `rounded-sm`, `rounded-xl`. Sharp corners always.
- **No bold/semibold fonts** unless explicitly requested. Use regular weight.
- **Dark theme only** for slides. Always `theme="dark"` on SlideBase.
- **Card surfaces**: `bg-white/[0.04]`
- **Opacity hierarchy**: `opacity-60` eyebrows, `opacity-70` body text, `opacity-50` tertiary, `opacity-40` subtle
- **Never dim decorative images**: 3D shapes, photography, and decorative `<img>` elements must render at full opacity. Do not apply `opacity-*` classes to them — the images themselves are already designed for dark backgrounds.
- **Never fade or gradient-overlay images**: No gradient overlays (`bg-gradient-to-*`), no opacity overlays on top of photos or 3D shapes. Images should always use a hard crop via `object-cover` and `overflow-hidden` — never a soft blend into the background.
- **Footer safe area applies to all visuals**: Photos, 3D shapes, and any visual element must never overlap the footer bar (~48px). For split layouts with photos, use `pb-12` on the outer wrapper so the image stops above the footer.

## Typography

- Headings: always regular weight, never bold/semibold
- Slide titles with body content: `<Heading size={3}>`
- Hero/opener titles: `<Heading size={1}>`
- Body text: `<Text size={400}>`
- Lead paragraph: `<Text size={500}>` (one per slide)
- Eyebrow: `<Text size={200}>` with `font-mono uppercase tracking-widest`

## Logos

Always fetch logos from Sanity using `sanityClient`, `urlFor`, and GROQ queries. The `company` documents have `logoOnDark` and `logoOnLight` image fields. Use `logoOnDark` for dark backgrounds; fall back to `logoOnLight` with CSS `brightness-0 invert`. Never create static SVG logo files.

## Reference

- Style guide: `guidelines/` folder (brand.md, colors.md, typography.md, layout.md, slides.md)
- v0 instructions: `.v0/instructions.md`
- Design tokens: `tokens/design-tokens.json`
- Existing presentations: `slides/presentations/sales-pitch/` (reference implementation)
