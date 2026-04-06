

## Testimonials: Remove Arrows Only + Book Club Frosted Arrows

### 1. Testimonials — remove only the arrow buttons
In `src/components/Testimonials.tsx`:
- Keep the "More from collaborators" heading row (line 87)
- Remove just the two arrow buttons and their wrapping `div` (lines 88-93)
- Remove unused state (`currentIndex`, `animKey`) and nav logic (`prev`, `next`, `maxIndex`, `visibleCards`)
- Remove `ChevronLeft`/`ChevronRight` imports
- Render all `cardTestimonials` directly in the grid instead of `visibleCards`

### 2. Book Club — frosted glass carousel arrows
In `src/pages/BookClub.tsx`:
- Update arrow button classes to: `backdrop-blur-md bg-white/30 border border-white/40 shadow-lg hover:bg-white/50`
- Keeps buttons visible and accessible with a frosted nav-like feel

### Files
- `src/components/Testimonials.tsx`
- `src/pages/BookClub.tsx`

