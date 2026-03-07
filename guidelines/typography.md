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

## Slide Typography Hierarchy

Every slide type has a defined heading and text size. AI tools must follow this exactly — do not improvise sizes.

### Heading Sizes by Slide Role

| Role | Heading size | Used in |
|------|-------------|---------|
| Hero / deck opener | `size={1}` | TitleSlide, CTASlide, SectionSlide |
| Display stat | `size="display"` | StatSlide, MultiStatSlide (stat numbers) |
| Standalone title (minimal text) | `size={2}` | ImageSlide |
| Slide title (with body content) | `size={3}` | ContentSlide, SplitSlide, ComparisonSlide, AgendaSlide, TeamSlide, LogoGridSlide, ThreeUpSlide, MultiStatSlide (title) |

**Rules:**
- `size={1}` is reserved for hero moments (TitleSlide, CTASlide, SectionSlide) — slides with minimal competing text.
- `size="display"` is only for stat numbers in StatSlide and MultiStatSlide — never for titles or headings.
- `size={2}` is for slides with a title but minimal body text (ImageSlide overlay).
- `size={3}` is the standard slide title whenever body content, lists, or grids are present.
- Never use `size={4}`, `size={5}`, or `size={6}` for slide titles — those are for sub-elements within slides only.

### Text Sizes by Role

| Role | Text size | Used in |
|------|----------|---------|
| Eyebrow | `size={200}` + `font-mono uppercase tracking-widest` | Above headings on any slide |
| Caption / source / contact | `size={300}` | StatSlide context, CTASlide contact, attribution lines |
| Body text / list items | `size={400}` | ContentSlide, SplitSlide, ComparisonSlide items, AgendaSlide items |
| Lead paragraph | `size={500}` | First paragraph on ContentSlide, ImageSlide subtitle |
| Subtitle (under hero heading) | `size={600}` | TitleSlide subtitle, CTASlide subtitle, StatSlide description |
| Quote text | `size={700}` | QuoteSlide (always italic) |

**Rules:**
- Lead paragraphs (`size={500}`) appear once per slide max — subsequent paragraphs drop to `size={400}`.
- Subtitles (`size={600}`) only appear under `size={1}` or `size="display"` headings.
- Quote text (`size={700}`) is only used in QuoteSlide — never for body text or headings.
- Never use `size={100}` on slides — too small at presentation distance. Minimum is `size={200}` for eyebrows.

### Complete Size Map by Slide Type

| Slide Type | Heading | Eyebrow | Primary text | Secondary text | Notes |
|------------|---------|---------|-------------|----------------|-------|
| TitleSlide | `Heading size={1}` | `Text size={200}` mono | `Text size={600}` subtitle | — | Centered, minimal elements |
| ContentSlide | `Heading size={3}` | `Text size={200}` mono | `Text size={500}` lead | `Text size={400}` body/bullets | Max 3–5 text elements |
| SplitSlide | `Heading size={3}` | `Text size={200}` mono | `Text size={400}` body | — | Content side only |
| StatSlide | `Heading size="display"` | `Text size={200}` mono | `Text size={600}` description | `Text size={300}` context | Centered, 3 elements max |
| QuoteSlide | — (no heading) | — | `Text size={700}` italic quote | `Text size={400}` name, `Text size={300}` title | Author name uses `weight="medium"` |
| ImageSlide | `Heading size={2}` | — | `Text size={500}` subtitle | — | Over image, max 2 elements |
| ComparisonSlide | `Heading size={3}` | — | `Text size={400}` items | `Text size={400}` `weight="medium"` labels | Labels use medium weight |
| AgendaSlide | `Heading size={3}` | — | `Text size={500}` items | `Text size={400}` mono numbers | Active item uses `weight="medium"` |
| TeamSlide | `Heading size={3}` | — | `Text size={400}` `weight="medium"` name | `Text size={300}` role | — |
| CTASlide | `Heading size={1}` | — | `Text size={600}` subtitle | `Text size={300}` contact | Centered, hero moment |
| LogoGridSlide | `Heading size={3}` | — | `Text size={400}` subtitle | — | — |
| SectionSlide | `Heading size={1}` | `Text size={200}` mono | `Text size={500}` subtitle | — | Centered, minimal — use as section dividers |
| ThreeUpSlide | `Heading size={3}` | `Text size={200}` mono | `Text size={500}` `weight="medium"` card title | `Text size={400}` card description | 3 cards in a row |
| MultiStatSlide | `Heading size={3}` title | `Text size={200}` mono | `Heading size="display"` stat numbers | `Text size={400}` stat descriptions | 2–3 stats side by side |

### Eyebrow Pattern
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
