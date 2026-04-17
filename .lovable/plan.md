

## Updates: Collab Container + Remove Community

### 1. `src/components/Collab.tsx`
Wrap heading, paragraph, and CTA in a light cream container (`bg-[#F8F6F1] rounded-2xl px-8 py-16 md:py-20`) centered within the dark section.
- Change text colors back to dark: `text-foreground` for heading, `text-muted-foreground` for paragraph
- Change CTA to dark button: `bg-foreground text-background hover:opacity-90`
- Constrain container width with `max-w-4xl mx-auto`
- Keep the outer section padding so dark `#1C1C1C` shows around the container

### 2. `src/components/DarkSection.tsx`
Remove the `<Community />` import and usage so the homepage dark section only renders Testimonials → Collab.

### Files Modified
- `src/components/Collab.tsx`
- `src/components/DarkSection.tsx`

