

## Make "Design, Tech & Intention" Section Match About Page Layout

### What changes
The AboutSection component currently uses `max-w-[1600px]` like the rest of the homepage. You want its content constrained to the narrower About page width (`max-w-4xl`) so the text and lists feel more editorial, similar to the /about page.

### File: `src/components/AboutSection.tsx`
- **Container**: Change `max-w-[1600px]` → `max-w-4xl` on the inner `div`, keeping `mx-auto px-8 md:px-16`
- **Vertical padding**: Keep existing `pt-10 md:pt-16 pb-24 md:pb-32` (already matches About page bottom padding)

This is a single-line class change on line 10.

