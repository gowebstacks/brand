# Typography

## Font Families

### Saans — Primary Typeface
Used for headings, body text, UI elements, and captions. A clean geometric sans-serif.

- **CSS variable**: `--font-body`, `--font-heading`
- **Available weights**: Light (300), Regular (400), Medium (500), SemiBold (600), Bold (700)
- **Fallback stack**: `ui-sans-serif, system-ui, sans-serif`

### TT Interphases Pro Mono — Monospace
Used for eyebrows, code, labels, and technical content.

- **CSS variable**: `--font-code`, `--font-eyebrow`
- **Available weights**: Regular (400), Bold (700)
- **Fallback stack**: `ui-monospace, SFMono-Regular, monospace`

## Type Scale

### Heading Sizes (via `<Heading>` component)

| Size | Base | Large screen | Use for |
|------|------|-------------|---------|
| `display` | 5rem / 80px | 7rem / 112px | Hero slides, cover titles |
| `1` | 3rem / 48px | 4rem / 64px | Major section titles |
| `2` | 2.25rem / 36px | 3rem / 48px | Standard slide titles |
| `3` | 1.875rem / 30px | 2.25rem / 36px | Sub-section titles |
| `4` | 1.5rem / 24px | 1.875rem / 30px | Card headings |
| `5` | 1.25rem / 20px | 1.5rem / 24px | Small headings |
| `6` | 1.125rem / 18px | 1.25rem / 20px | Minor headings |

All heading sizes include negative letter-spacing for tighter, more polished appearance.

### Body Text Sizes (via `<Text>` component)

| Size | Rendered | Use for |
|------|----------|---------|
| `100` | 0.75rem / 12px | Fine print, footnotes |
| `200` | 0.875rem / 14px | Captions, metadata |
| `300` | 1rem / 16px | Secondary body text |
| `400` | 1rem / 16px | **Default body text** |
| `500` | 1.125rem / 18px | Lead paragraphs |
| `600` | 1.25rem / 20px | Large body / subtitles |
| `700` | 1.5rem / 24px | Pull quotes, statements |

## Slide Typography Rules

### Title Slides
- Heading: `size={1}` or `size="display"` (regular weight — no bold)
- Subtitle: `<Text size={600}>`, regular weight
- Eyebrow: `<Text>` with `font-mono uppercase tracking-widest text-sm`

### Content Slides
- Slide title: `<Heading size={3}>` or `<Heading size={2}>` (regular weight)
- Body text: `<Text size={400}>` or `<Text size={500}>`
- Bullet points: `<Text size={400}>` with `leading-relaxed`

### Stat Slides
- Big number: `<Heading size="display">` (regular weight)
- Label: `<Text size={500}>`

### Eyebrow Labels
Use the mono font for eyebrow text above headings:
```tsx
<Text as="span" size={200} className="font-mono uppercase tracking-widest text-muted-foreground">
  Category Label
</Text>
```

## Weight Usage

**Important: Never use anything bolder than Medium (500).** Headings, headlines, and all titles use Regular (400) weight. Medium is reserved only for inline emphasis on individual words or short labels.

| Weight | Token | When to use |
|--------|-------|-------------|
| Light (300) | `weight="light"` | Display headings, decorative |
| Regular (400) | (default) | **All headings, headlines, body text** |
| Medium (500) | `weight="medium"` | Inline word emphasis, labels only |

Weights above Medium (SemiBold, Bold, etc.) are **never used** in Webstacks brand materials.

## Do's and Don'ts
- **Do** use Heading component for all headings (maintains tracking/leading)
- **Do** leave headings at default (regular) weight — size creates hierarchy, not weight
- **Do** use eyebrow pattern (mono, uppercase, tracking-widest) for category labels
- **Do** keep body text at 400 or 500 for readability on slides
- **Don't** use bold or semibold weights — ever
- **Don't** use medium weight on full sentences — only for individual words
- **Don't** set body text below size 300 on slides (too small at presentation distance)
- **Don't** manually set letter-spacing — the Heading component handles this
