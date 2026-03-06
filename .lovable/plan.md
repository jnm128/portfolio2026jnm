

## Plan: Apply pastel card colors consistently across sections

### Overview
Apply the three pastel colors from the Book Club feature cards (`#D4E4ED` light blue, `#E8C87A` warm amber, `#D8C8E8` soft lavender) to the Testimonials cards, Writing cards on About page, and the Community card. Ensure consistent `font-serif` typography across all.

### Changes

**1. `src/components/Testimonials.tsx` — Testimonial cards (line 100)**
- Replace uniform `bg-[#F8F6F1]` on the 3 cards with rotating pastel colors: card 0 gets `#D4E4ED`, card 1 gets `#E8C87A`, card 2 gets `#D8C8E8`
- Add the color as a property to `cardTestimonials` array or use index-based mapping
- Ensure quote text uses `font-serif` for consistency

**2. `src/pages/AboutPage.tsx` — Writing cards (line 164-186)**
- Replace uniform `bg-white` on the 3 LinkedIn post cards with the same rotating pastels: `#D4E4ED`, `#E8C87A`, `#D8C8E8`
- Remove the `border border-border/60` since the colored backgrounds provide enough visual separation
- Ensure heading/body text uses `font-serif` consistently

**3. `src/components/Community.tsx` — Community card (line 16)**
- Update the single card background from `bg-[#F8F6F1]` to one of the pastels (e.g., `#D4E4ED` light blue) for visual cohesion
- Ensure heading uses `font-serif` (already does)

### Files modified
- `src/components/Testimonials.tsx`
- `src/pages/AboutPage.tsx`
- `src/components/Community.tsx`

