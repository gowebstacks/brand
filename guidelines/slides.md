# Slide Design Guidelines

## Slide Specifications
- **Aspect ratio**: 16:9
- **Resolution**: 1280×720 (standard) or 1920×1080 (high-res)
- **Outer padding**: 64px on all sides
- **Background**: White (`theme="light"`) or Black (`theme="dark"`) — no other background colors

## Slide Types

### Title / Cover Slide
The first slide. Sets the tone for the entire deck.
- Company logo (top-left or centered)
- Large heading: `size={1}`
- Subtitle or date
- Always `theme="dark"` for the opening slide
- Component: `<TitleSlide>`

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

### Sales Pitch (~12 slides)
1. Title — company + tagline
2. Problem — the pain point
3. Stat — the scale of the problem
4. Solution — what we do
5. How it works (split)
6. Feature 1 (content)
7. Feature 2 (content)
8. Social proof (quote)
9. Results (stat)
10. Case study teaser (image)
11. Logo grid (clients)
12. CTA — next steps

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

## Animation & Transitions
For exported or interactive decks:
- Use simple fade transitions between slides
- No slide-level animations (fly-ins, bounces)
- Content can appear sequentially (build slides) but keep it subtle
