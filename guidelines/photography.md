# Photography Style

## Overall Direction
Photography should feel modern, authentic, and aspirational. We showcase real people doing meaningful work in tech-forward environments.

## Style Attributes
- **Lighting**: Natural, bright, soft shadows — avoid harsh studio lighting
- **Color grading**: Slightly desaturated, cool-neutral tones — complements our teal/blue palette
- **Composition**: Clean, uncluttered — generous negative space for text overlays
- **Subjects**: Diverse professionals, collaborative settings, modern workspaces
- **Perspective**: Eye-level or slightly elevated — approachable, not dramatic

## Photo Categories

### Team & Culture
- Candid shots of collaboration and whiteboarding
- Individual portraits with neutral backgrounds
- Behind-the-scenes of the work process

### Technology & Product
- Clean screenshots with subtle depth-of-field
- Abstract code/data patterns as texture backgrounds
- Device mockups in real environments

### Workspace & Environment
- Modern office spaces with clean design
- Desktop setups with screens showing real work
- Architecture with geometric patterns

## Usage in Slides

### Full-Bleed Images
- Image must have sufficient contrast for text overlay
- Apply a gradient overlay: `bg-gradient-to-r from-black/70 to-black/30`
- Or use a solid overlay: `bg-black/50`
- Text on images must always be white

### Split Layouts
- Place photo on one side (50% or 40% width)
- Content on the other side with padding
- Photo should bleed to the slide edge

### Background Textures
- Use subtle, desaturated photos as textured backgrounds
- Apply heavy overlay (60–80% opacity) to maintain readability
- Works well with teal or dark backgrounds

## 3D Decorative Shapes
Rendered 3D shapes (from `/images/3d-shapes/`) are used as bold visual accents on title and section slides.

- **Positioning**: Absolutely positioned, full-bleed — overflowing and cropped generously across edges. Push shapes well off the slide boundary (e.g. `-left-[18%] -top-[30%]`) so they feel like they're floating into the frame, not rigidly placed
- **Scale**: Large — sized well beyond the slide bounds. Minimum `w-[35%]`, typically `w-[45%]` or larger
- **Feel**: Shapes should feel organic and floating, not rigidly anchored. Apply slight rotation (`-rotate-12`, `rotate-6`) when a shape looks too stiff or symmetrical. Vary the angle and crop per shape so each feels natural
- **Paired shapes**: When using two shapes (e.g. top-left and top-right corners), they should not mirror each other exactly. Vary size, rotation, and how much they're cropped so the composition feels dynamic, not forced
- **Purpose**: Decorative only — no text should overlap the shape
- **Safe areas**: 3D shapes must never overlap the footer bar. The footer is a protected safe area — keep shapes clear of the bottom ~48px of the slide
- **Available shapes**: `layered-diamonds.png`, `glass-cubes.png`, `glass-panels.png`, `stacked-blocks.png`, `twisted-torus.png`, `spiral-band.png`, and others in `/images/3d-shapes/`
- **Usage**: One or two shapes per slide, on dark backgrounds only

## Headshots & Avatars
Used in TitleSlide team members and TeamSlide.

- **Shape**: Square — no border-radius (`rounded-none`)
- **Size**: 48px (`h-12 w-12`) for TitleSlide team row
- **Fit**: `object-cover` to crop without distortion
- **Fallback**: Initials via `AvatarFallback` when no image is available
- **Source**: `/images/headshots/leadership/` for leadership team photos

## Do's and Don'ts
- **Do** use photos that feel genuine and unstaged
- **Do** ensure sufficient contrast when placing text over images
- **Do** crop photos to fill their container — no borders or padding
- **Don't** use stock photos with obvious "stock" feel (pointing at screens, excessive smiling)
- **Don't** use photos with competing brand colors (bright reds, greens)
- **Don't** stretch or distort photos — use `object-cover` for cropping
- **Don't** use more than one photo per slide (unless a grid layout)

## Image Treatment for Slides
```
Overlay for text readability:
- Light text on image: min 50% black overlay
- Dark theme: gradient from-black/70 via-black/50 to-transparent
- Brand tint: mix teal-900 at 80% opacity for branded feel
```
