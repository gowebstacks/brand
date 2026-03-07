# Color Palette

## Core Brand Colors

### Teal — Primary Brand Color
The signature Webstacks color. Use for brand moments, backgrounds, and identity elements.

| Token | HSL | Usage |
|-------|-----|-------|
| `teal-50` | `hsl(175, 15%, 83%)` | Subtle backgrounds |
| `teal-100` | `hsl(177, 14%, 71%)` | Borders, dividers |
| `teal-200` | `hsl(178, 14%, 56%)` | Secondary text on dark |
| `teal-300` | `hsl(177, 14%, 42%)` | — |
| `teal-400` | `hsl(177, 37%, 27%)` | Hover states |
| `teal-500` | `hsl(177, 94%, 13%)` | **Primary brand color** |
| `teal-600` | `hsl(178, 93%, 11%)` | Pressed states |
| `teal-700` | `hsl(177, 95%, 9%)` | Deep backgrounds |
| `teal-800` | `hsl(178, 94%, 6%)` | — |
| `teal-900` | `hsl(177, 91%, 4%)` | Near-black teal |

**Usage rules:**
- Use teal-500 as the hero brand color for large background areas
- Use teal-700–900 for deep, rich dark backgrounds
- Pair with white text on teal-500 and darker
- Do NOT use teal for interactive UI elements (use blue instead)

### Blue — UI Primary
The primary interactive color. Use for buttons, links, CTAs, and UI accents.

| Token | HSL | Usage |
|-------|-----|-------|
| `blue-50` | `hsl(207, 100%, 95%)` | Light backgrounds |
| `blue-100` | `hsl(207, 100%, 87%)` | Borders |
| `blue-200` | `hsl(207, 100%, 78%)` | — |
| `blue-300` | `hsl(207, 100%, 68%)` | — |
| `blue-400` | `hsl(207, 100%, 59%)` | — |
| `blue-500` | `hsl(207, 100%, 50%)` | Charts, accents |
| `blue-600` | `hsl(212, 100%, 50%)` | Logo icon, chart primary |
| `blue-700` | `hsl(217, 89%, 46%)` | **Primary CTA / buttons** |
| `blue-800` | `hsl(219, 79%, 47%)` | — |
| `blue-900` | `hsl(222, 74%, 41%)` | Hover state |

**Usage rules:**
- Blue-700 is the default button and CTA color (`--primary`)
- Blue-600 is the logo icon color
- Use blue for all interactive elements
- Do NOT use blue as a large background color (use teal instead)

### Violet — Tertiary Brand Color
A deep violet for accent moments and premium feels.

| Token | HSL | Usage |
|-------|-----|-------|
| `violet-500` | `hsl(263, 94%, 19%)` | **Primary violet** |
| `violet-600` | `hsl(263, 93%, 16%)` | — |
| `violet-700` | `hsl(263, 94%, 13%)` | Deep backgrounds |

**Usage rules:**
- Use sparingly — for premium or differentiating moments
- Works well as an alternate dark background to teal
- Pair with white text

## Accent Palette
Use accents for data visualization, tags, illustrations, and visual variety.

| Color | Token (500) | HSL |
|-------|-------------|-----|
| Cyan | `cyan-500` | `hsl(181, 100%, 49%)` |
| Mint | `mint-500` | `hsl(163, 100%, 45%)` |
| Magenta | `magenta-500` | `hsl(321, 100%, 35%)` |
| Orange | `orange-500` | `hsl(17, 100%, 59%)` |
| Yellow | `yellow-500` | `hsl(51, 100%, 50%)` |
| Green | `green-500` | `hsl(91, 85%, 62%)` |
| Purple | `purple-500` | `hsl(277, 83%, 67%)` |
| Pink | `pink-500` | `hsl(21, 100%, 86%)` |

**Usage rules:**
- Use accents in charts: blue-600, teal-500, mint-500, purple-500, orange-500
- Never use accent colors for body text or backgrounds in slides
- Limit to 2–3 accents per slide for visual clarity

## Neutrals

| Token | HSL | Usage |
|-------|-----|-------|
| `white` | `hsl(0, 0%, 100%)` | Backgrounds, text on dark |
| `neutral-50` | `hsl(0, 0%, 93%)` | Light surfaces |
| `neutral-100` | `hsl(0, 0%, 90%)` | Elevated surfaces |
| `neutral-200` | `hsl(0, 0%, 63%)` | Borders |
| `neutral-500` | `hsl(0, 0%, 49%)` | Muted text |
| `neutral-700` | `hsl(0, 0%, 18%)` | Body text |
| `neutral-900` | `hsl(0, 0%, 10%)` | Dark surfaces |
| `neutral-950` | `hsl(0, 0%, 6%)` | Near-black |
| `black` | `hsl(0, 0%, 0%)` | Headings, text |

## Slide Backgrounds

Slide backgrounds are always **white** (light theme) or **black** (dark theme). Use `SlideBase` with `theme="light"` or `theme="dark"`. The semantic tokens handle everything automatically.

| Theme | Background | Heading | Body text | Accent |
|-------|-----------|---------|-----------|--------|
| Light | `bg-background` (white) | `text-foreground` (black) | `text-foreground` / `text-muted-foreground` | `text-primary` (blue) |
| Dark | `bg-background` (black) | `text-foreground` (white) | `text-foreground` / `text-muted-foreground` | `text-primary` (blue) |

**Teal and violet are never used as slide backgrounds.** They are brand identity colors for use in logos, illustrations, and marketing materials — not in slide decks.

## Blue Is an Accent Color Only

Blue (`text-primary`, `bg-primary`) is **only used as an accent** — for small highlights, active states, and interactive elements.

Correct blue usage:
- Active state highlights: `text-primary`
- Subtle tinted areas: `bg-primary/5`
- CTA buttons: `<Button mode="filled" tone="primary">`

**Never use blue for:**
- Slide or section backgrounds
- Large area fills
- Heading text color
- Body text color

## Using Colors in Code — Semantic Classes Only

**Always use semantic Tailwind classes.** Never use hardcoded color values or primitive token names in class names.

| Instead of... | Use... |
|---------------|--------|
| `bg-neutral-50` | `bg-muted` |
| `bg-white` | `bg-background` |
| `text-black` | `text-foreground` |
| `text-white` | `text-background` or `text-primary-foreground` |
| `bg-[hsl(...)]` | Never — use semantic tokens |
| `text-neutral-500` | `text-muted-foreground` |
| `border-neutral-200` | `border-border` |

## Do's and Don'ts
- **Do** use high-contrast text/background combinations
- **Do** use the chart color sequence for data: blue, teal, mint, purple, orange
- **Do** always use semantic Tailwind classes (`text-foreground`, `bg-muted`, `border-border`)
- **Do** use blue only as a small accent, never as a background
- **Don't** hardcode HSL, hex, or rgb values in class names or inline styles
- **Don't** use primitive token names (`neutral-50`, `teal-500`) in Tailwind classes
- **Don't** use teal or violet as slide backgrounds
- **Don't** use more than 3 colors per slide (excluding neutrals)
- **Don't** use accent colors at full saturation for large areas
