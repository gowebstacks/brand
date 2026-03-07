# Layout & Composition

## Grid System
The design system uses a 12-column grid via the `<Grid>` component.

### Slide Grid
Slides use the grid within a 16:9 frame (1280×720 or 1920×1080):
- **Outer padding**: 64px (p-16) on all sides — keeps content away from edges
- **Grid gap**: `gap="spacious"` (24px) or `gap="extra-spacious"` (32px)
- **Content max-width**: Full slide width minus padding

### Common Column Layouts
| Layout | Grid Setup | Use for |
|--------|-----------|---------|
| Full width | `<Grid columns={1}>` | Title slides, stats, quotes |
| 50/50 split | `<Grid columns={2}>` | Split slides, comparisons |
| 60/40 split | `<GridColumn span={7}>` + `<GridColumn span={5}>` | Content + image |
| 40/60 split | `<GridColumn span={5}>` + `<GridColumn span={7}>` | Image + content |
| 3-column | `<Grid columns={3}>` | Feature grids, team, logos |
| 4-column | `<Grid columns={4}>` | Stats, icon grids |

## Spacing System
The design system uses semantic spacing tokens:

| Token | Value | Tailwind | Use for |
|-------|-------|----------|---------|
| `condensed` | 8px | `gap-2`, `p-2` | Tight groups (icon + label) |
| `normal` | 16px | `gap-4`, `p-4` | Standard element spacing |
| `spacious` | 24px | `gap-6`, `p-6` | Section spacing within slides |
| `extra-spacious` | 32px | `gap-8`, `p-8` | Major sections |

### Slide-Specific Spacing
- **Between slide title and content**: 32–48px (`mb-8` to `mb-12`)
- **Between content blocks**: 24px (`gap-6`)
- **Between text elements**: 8–16px (`gap-2` to `gap-4`)
- **Slide outer padding**: 64px (`p-16`)

## Composition Principles

### Visual Hierarchy
1. **One focal point per slide** — guide the eye to the most important element
2. **Size communicates importance** — make the key message the largest element
3. **Use whitespace generously** — slides are not documents, don't fill every pixel

### Alignment
- Left-align text by default
- Center-align only for single short statements, quotes, or stats
- Never mix alignment on the same slide
- Align elements to the grid — avoid arbitrary positioning

### Balance
- **Symmetrical**: Use for formal, authoritative slides (title, stats)
- **Asymmetrical**: Use for dynamic, engaging slides (content + image splits)
- Weight heavier elements (images, dark blocks) on the left or bottom

## Component Layout Patterns

### Stack-Based Layouts
Use `<Stack>` for vertical or horizontal grouping:
```tsx
// Vertical content group
<Stack direction="vertical" gap="spacious">
  <Heading />
  <Text />
  <Button />
</Stack>

// Horizontal button group
<Stack direction="horizontal" gap="normal" align="center">
  <Button />
  <Button mode="stroke" />
</Stack>
```

### Box for Containers
Use `<Box>` for padded containers:
```tsx
<Box padding="spacious" backgroundColor="subtle" borderRadius="large">
  {/* Card-like content */}
</Box>
```

## Border Radius
- **Default radius**: 0.5rem (8px) — `--radius`
- **Cards and containers**: `rounded-lg` (8px)
- **Buttons**: `rounded-full` (pill shape)
- **Small elements**: `rounded-md` (6px)
- **Slides**: No border radius on the slide frame itself

## Do's and Don'ts
- **Do** maintain consistent outer padding on all slides (64px)
- **Do** use the grid system for all multi-column layouts
- **Do** keep content density low — 3–5 elements per slide maximum
- **Don't** place content in the outer 48px of the slide (safe area)
- **Don't** use arbitrary pixel values — stick to the spacing tokens
- **Don't** center everything — left-alignment is the default
