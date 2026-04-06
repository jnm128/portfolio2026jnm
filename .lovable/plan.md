

## Changes to All Three Case Study Pages

### 1. Update hero section container width
Change from `container mx-auto` to `mx-auto max-w-[1600px]` to match the homepage Hero component's wide layout.

### 2. Remove metadata grid
Delete the entire 2x2 grid section (My Role, The Problem, My Team, Timeline) from the hero area.

### 3. Move Final Designs images outside SplitSection
Replace the "Final Designs" SplitSection with a full-width image gallery. Each image will be rendered at full container width with `rounded-2xl overflow-hidden aspect-[16/9]` styling — matching the hero image treatment. Remove the per-image subheadings.

### Files to modify
- `src/pages/CaseStudyMindfulWellness.tsx`
- `src/pages/CaseStudyArtisanMarketplace.tsx`
- `src/pages/CaseStudyCreativeStudio.tsx`

### Technical detail
- Hero section container: `mx-auto max-w-[1600px] px-8 md:px-16` (replacing `container mx-auto px-8 md:px-16`)
- Title/description block keeps `max-w-4xl mx-auto` for readability
- Final Designs section becomes a simple vertical stack of full-width images with `space-y-8`, each wrapped in `ImageLightbox` inside a `rounded-2xl overflow-hidden` container, using `aspect-[16/9] w-full object-cover`

