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
