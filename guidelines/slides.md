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
- Large heading: `size={1}` or `size="display"`
- Subtitle or date
- Background: Teal-500 with white text, or white with dark text
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
Highlight a key number or achievement.
- One large number: `<Heading size="display">`
- Supporting context: `<Text size={500}>`
- Optional trend indicator or comparison
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

## Animation & Transitions
For exported or interactive decks:
- Use simple fade transitions between slides
- No slide-level animations (fly-ins, bounces)
- Content can appear sequentially (build slides) but keep it subtle
