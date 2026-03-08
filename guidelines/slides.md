# Slide Design Guidelines

## Slide Specifications
- **Aspect ratio**: 16:9
- **Resolution**: 1280×720 (standard) or 1920×1080 (high-res)
- **Outer padding**: 64px on all sides
- **Background**: White (`theme="light"`) or Black (`theme="dark"`) — no other background colors

## Slide Types

### Title / Cover Slide
The first slide. Sets the tone for the entire deck. Supports two layout modes:

**Simple layout** (default — no `heroImage` or `teamMembers`):
- Eyebrow + large heading + subtitle, centered vertically
- Use for minimal cover slides

**Rich layout** (when `heroImage` or `teamMembers` are provided):
- Date (mono, uppercase) top-left
- Webstacks logo lockup as eyebrow above the title
- Optional client logo alongside Webstacks logo (with `×` separator)
- Large heading: `size={1}`, left-aligned
- Subtitle below title
- "PREPARED & PRESENTED BY" label + team member grid (3-column, square headshots at 48px)
- Footer bar: Webstacks symbol + URL + copyright
- 3D decorative shape as hero image, full-bleed on the right side (absolutely positioned, cropped across edges)

- Always `theme="dark"` for the opening slide
- Component: `<TitleSlide>`
- Props: `title`, `subtitle?`, `eyebrow?`, `date?`, `clientLogoSrc?`, `heroImage?`, `teamMembers?`, `theme?`

### Content Slide
The workhorse. Text content with optional supporting image.
- Slide title: `<Heading size={3}>`
- Body text: `<Text size={400}>` or `<Text size={500}>`
- Optional image on one side
- 3–5 bullet points maximum
- Component: `<ContentSlide>`

### Split Slide
Two-panel layout for narrative contrast.
- 50/50 or 60/40 split
- One side: content (heading + text + CTA)
- Other side: image, illustration, or colored panel
- Component: `<SplitSlide>`

### Stat / Metric Slide
Highlight a single key number or achievement.
- One large number: `<Heading size="display">`
- Supporting context: `<Text size={600}>`
- Optional source/context line: `<Text size={300}>`
- Component: `<StatSlide>`

### Quote / Testimonial Slide
Feature a customer or team quote.
- Large quote text: `<Text size={700}>` in italics
- Attribution: name, title, company
- Optional headshot/avatar
- Component: `<QuoteSlide>`

### Image Slide
Full-bleed image with text overlay.
- Background image fills the entire slide
- Text overlay with gradient: `from-black/70 to-transparent`
- Heading and optional subtitle
- Component: `<ImageSlide>`

### Comparison Slide
Before/after or side-by-side comparison.
- Two columns with clear labels
- Visual differentiation (color, icons, checkmarks)
- Component: `<ComparisonSlide>`

### Agenda Slide
Table of contents or roadmap.
- Numbered list of topics
- Current topic highlighted
- Component: `<AgendaSlide>`

### Team Slide
Showcase team members.
- Grid of 3–4 people
- Avatar/photo, name, title
- Component: `<TeamSlide>`

### CTA / Closing Slide
Call to action — the last slide.
- Clear next step heading
- Contact information or link
- CTA button
- Component: `<CTASlide>`

### Logo Grid Slide
Client logos or partner showcase.
- Grid of 6–12 logos
- Equal sizing, monochrome preferred
- Component: `<LogoGridSlide>`

### Section Divider Slide
Marks a transition between major sections of a deck.
- Centered heading: `<Heading size={1}>`
- Optional eyebrow and subtitle
- Optional full-bleed background image with overlay
- Component: `<SectionSlide>`

### Three-Up Slide
3-column card grid for features, process steps, or capabilities.
- Optional slide title: `<Heading size={3}>`
- 3 cards, each with heading (`<Text size={500}` weight="medium"`) + description (`<Text size={400}>`)
- Optional icon per card
- Component: `<ThreeUpSlide>`

### Multi-Stat Slide
Display 2–3 key metrics side by side.
- Optional slide title: `<Heading size={3}>`
- Each stat: `<Heading size="display">` number + `<Text size={400}>` description
- Use when you need to show multiple results at once (vs. StatSlide for a single hero number)
- Component: `<MultiStatSlide>`

## Deck Pacing

### Sales Pitch (~13 slides)
1. Title — company + tagline
2. Philosophy — centered statement + bullet row
3. Meet Webstacks — split with stat cards
4. Clients — logo grid (Sanity-powered)
5. Problem stat — single hero number
6. Solution — what we do
7. How it works (split)
8. Feature 1 (content)
9. Feature 2 (content)
10. Social proof (quote)
11. Results (stat)
12. Case study teaser (image)
13. CTA — next steps

### Case Study (~8 slides)
1. Title — client name + outcome
2. Challenge (content)
3. Approach (content with image)
4. Key metric (stat)
5. Solution detail (split)
6. Results (stat or comparison)
7. Quote from client
8. CTA

### Client Presentation (~20 slides)
1. Cover — company + client name
2. Section divider — About Webstacks
3. Capabilities (three-up)
4. Logo grid (clients)
5. Section divider — Our process
6. Discovery phase (three-up)
7. Design phase (three-up)
8. Build phase (split)
9. Section divider — Results
10. Team
11. Testimonial (quote)
12. Client story 1 intro (content)
13. Client story 1 before/after (comparison)
14. Client story 1 results (multi-stat)
15. Client story 2 intro (content)
16. Client story 2 detail (split)
17. Client story 2 results (multi-stat)
18. Client quote
19. Section divider — Next steps
20. CTA

## Visual Variety Rules
- **Alternate backgrounds**: Don't use the same background color for more than 2 consecutive slides
- **Mix layouts**: Alternate between full-width and split layouts
- **Break with stats/quotes**: Use stat or quote slides to punctuate content sections
- **Image every 3–4 slides**: Include visual imagery regularly
- **Max text slides in a row**: 2 — then use a visual break
- **3D decorative shapes**: Use 3D rendered shapes (from `/images/3d-shapes/`) as hero accents on title and section slides. Position them full-bleed on the right side, scaled large and cropped across edges for a bold, modern feel

## Slide Content Density
- **Title slides**: 1–2 text elements
- **Content slides**: Title + 3–5 bullets or 2–3 short paragraphs
- **Stat slides**: 1 number + 1–2 lines of context
- **Quote slides**: 1 quote (under 30 words) + attribution
- **CTA slides**: 1 heading + 1 subtitle + buttons
- **Image slides**: 1 heading + optional subtitle (over image)
- **Comparison slides**: Title + 2 columns of 3–5 items each
- **Logo grid slides**: Title + 6–12 logos

## Typography per Slide Type

See `guidelines/typography.md` for the full reference. Quick summary:

| Slide | Heading | Body text |
|-------|---------|-----------|
| TitleSlide | `size={1}` | subtitle: `size={600}` |
| ContentSlide | `size={3}` | lead: `size={500}`, body: `size={400}` |
| SplitSlide | `size={3}` | body: `size={400}` |
| StatSlide | `size="display"` | description: `size={600}`, context: `size={300}` |
| QuoteSlide | — | quote: `size={700}` italic |
| ImageSlide | `size={2}` | subtitle: `size={500}` |
| ComparisonSlide | `size={3}` | items: `size={400}` |
| AgendaSlide | `size={3}` | items: `size={500}` |
| TeamSlide | `size={3}` | name: `size={400}`, role: `size={300}` |
| CTASlide | `size={1}` | subtitle: `size={600}` |
| LogoGridSlide | `size={3}` | subtitle: `size={400}` |
| SectionSlide | `size={1}` | subtitle: `size={500}` |
| ThreeUpSlide | `size={3}` | card title: `size={500}` medium, card body: `size={400}` |
| MultiStatSlide | `size={3}` title, `size="display"` stats | description: `size={400}` |

## Custom Slide Patterns

When building custom slides with `SlideBase` directly (instead of a pre-built component), follow these patterns exactly.

### Full-Bleed Layout
Custom slides override default padding and manage it themselves:
```tsx
<SlideBase theme="dark" className="!p-0">
  {/* Content with manual px-16 pt-16 */}
  <div className="px-16 pt-16">...</div>
  {/* Footer sits at absolute bottom */}
</SlideBase>
```

### Footer Bar (Required on All Custom Dark Slides)
Every custom dark slide must include this footer bar. Copy it exactly:
```tsx
<div className="absolute bottom-0 left-0 z-10 flex w-full items-center justify-between border-t border-white/10 px-16 py-3">
  <div className="flex items-center gap-2">
    <img src="/logos/symbol-negative.svg" alt="Webstacks" className="h-4 w-auto" />
    <Text as="span" size={100} className="opacity-50">webstacks.com</Text>
  </div>
  <Text as="span" size={100} className="opacity-40">
    &copy; Webstacks LLC Proprietary and Confidential
  </Text>
</div>
```

### Muted Card Surfaces
On dark slides, use `bg-white/[0.04]` for subtle card backgrounds:
```tsx
<div className="rounded-sm bg-white/[0.04] p-8">
  {/* Card content */}
</div>
```
- Use `rounded-sm` (not `rounded-lg`) for cards within slides
- Use `gap-3` between cards, or `gap-px` for edge-to-edge grids (logo grids)

### Opacity Hierarchy on Dark Slides
Use consistent opacity values across all custom dark slides:

| Element | Opacity | Example |
|---------|---------|---------|
| Body text | `opacity-70` | Description paragraphs |
| Eyebrow | `opacity-60` | Category labels above headings |
| Footer URL | `opacity-50` | "webstacks.com" |
| Footer copyright | `opacity-40` | Copyright line |
| Fallback / placeholder text | `opacity-40` | Missing logo text |
| Card labels (mono) | `opacity-50` | Stat labels, metadata |

### 3D Decorative Shapes
Position 3D shapes as large, cropped accents that bleed off the slide edges:
```tsx
<img
  src="/images/3d-shapes/glass-panels.png"
  alt=""
  className="pointer-events-none absolute -right-[15%] -top-[25%] w-[45%] object-contain select-none"
  aria-hidden="true"
/>
```
- Always: `pointer-events-none`, `select-none`, `aria-hidden="true"`, `alt=""`
- Use negative offsets (`-right-[15%]`, `-top-[25%]`) to crop shapes across edges
- Scale to 40–55% of slide width
- Optional slight rotation (`-rotate-6`, `-rotate-12`) for dynamism
- Place behind content with `relative z-10` on the content container

#### Safe Area Rules for 3D Decorative Shapes

**CRITICAL: Text content must never overlap with decorative 3D shapes.** Decorative shapes are visual accents only — they must be placed in "dead zones" where no text or interactive content exists.

**Safe placement zones for 3D shapes:**
- **Right edge, top corner**: `-right-[10%] -top-[20%]` to `-right-[20%] -top-[30%]`
- **Right edge, bottom corner**: `-right-[10%] -bottom-[20%]` to `-right-[20%] -bottom-[30%]`
- **Left edge, top corner** (only if content is right-aligned): `-left-[15%] -top-[25%]`

**Forbidden zones (never place 3D shapes here):**
- **Left side when content is left-aligned** — most slide content starts from the left
- **Center of the slide** — this is where primary content lives
- **Behind any text content** — decorative shapes must not interfere with readability
- **Behind card grids or data displays** — these need full visual clarity

**Content safe area calculation:**
When placing a 3D shape, ensure your content container constrains text away from the shape:
```tsx
{/* 3D shape on right side */}
<img src="/images/3d-shapes/..." className="absolute -right-[15%] -top-[25%] w-[45%] ..." />

{/* Content constrained to left 55-60% of slide */}
<div className="relative z-10 max-w-[60%]">
  <Heading>...</Heading>
  <Text>...</Text>
</div>
```

**Validation checklist before using a 3D shape:**
1. Is the shape positioned with negative offsets that push it off-canvas?
2. Is the shape on the opposite side from where text content lives?
3. Does the content container have a `max-w-[55%]` or `max-w-[60%]` constraint?
4. At no viewport size will text ever overlap with the shape?

**If content needs the full slide width:** Do not use a 3D decorative shape. Use a different visual treatment (cards with `bg-white/[0.04]`, iconography, or leave the slide minimal).

### Logo Grid (Sanity-Powered)
Client logos are fetched from Sanity CMS. The pattern:
- **Query**: Fetch `company` documents by name from `slides/lib/queries.ts`
- **Logo priority**: Use `logoOnDark` (white logo for dark bg). If unavailable, use `logoOnLight` with CSS `brightness-0 invert` to make it white
- **Grid**: 6 columns, `gap-px`, square cards (`aspect-square`), `bg-white/[0.04]`
- **Data fetching**: `useState` + `useEffect` in the deck component (since page is `"use client"`)
- **To add/remove logos**: Edit the name array in `slides/lib/queries.ts`. See the comment block in `queries.ts` for full instructions.

## Logo Guidelines

**By default, all logos should come from Sanity.** When asked to add, switch, change, or display any logo, your first instinct should be to write or modify a Sanity query.

### Core Principle
When working with logos (client logos, partner logos, integration logos, etc.):
1. Write or modify a Sanity query to fetch the logo(s)
2. Query the `company` document type by `name`
3. Use the `logoOnDark` or `logoOnLight` fields from Sanity

### Query Pattern
All logo queries follow this structure:
```ts
// slides/lib/queries.ts
export const myLogosQuery = `
  *[_type == "company" && name in ["Company A", "Company B", "Company C"] && (defined(logoOnDark) || defined(logoOnLight))] | order(name asc) {
    _id, name, logoOnDark, logoOnLight
  }
`;
```

### Creating New Logo Queries
For different use cases, create separate named queries:
- `companiesWithLogosQuery` — default client logo grid
- `partnersLogosQuery` — partner/integration logos
- `caseStudyLogosQuery` — logos for a specific case study
- `[clientName]LogosQuery` — client-specific logo sets

### How to Add/Change a Logo
1. **Identify the company name** exactly as it appears in Sanity (case-sensitive)
2. **Create or modify a query** in `slides/lib/queries.ts` with the company name(s)
3. **Fetch and render** using the standard pattern with `logoOnDark` priority, `logoOnLight` as fallback with invert filter

## Animation & Transitions
For exported or interactive decks:
- Use simple fade transitions between slides
- No slide-level animations (fly-ins, bounces)
- Content can appear sequentially (build slides) but keep it subtle
