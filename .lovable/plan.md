## Floating testimonial pills around the CTA

Add small "bee-like" pills containing short testimonial snippets that hover and gently drift around the "Got a problem worth designing through?" CTA in `src/components/Collab.tsx`.

### Content (short blurbs pulled from existing testimonials)
- "Invaluable liaison between technical and non-technical teams." — Rynita J.
- "Simplifies complex systems with clarity." — Rynita J.
- "Kind, empathetic, and relentless problem-solver." — Jacob R.
- "A complete vision for streamlining." — Rynita J.
- "Consistent, reliable, perseverant." — Jacob R.

### Layout
- Wrap the CTA block in a `relative` container.
- Absolutely position 5 pills around the headline at varied offsets (top-left, top-right, mid-left, mid-right, bottom-center-ish), using `%`-based positioning so they scale with the container.
- Each pill: `rounded-full`, `bg-background/10` with `backdrop-blur-sm`, thin `border border-background/20`, `text-background/80`, small `text-xs`, `px-4 py-2`, `font-serif italic`. Includes the blurb + author initial.
- Hidden on mobile (`hidden md:block`) to avoid clutter; CTA stays clean on small screens.

### Animation ("bee-like" drift)
- Add 3 new keyframes to `tailwind.config.ts` under `keyframes` + `animation`:
  - `drift-1`: gentle figure-8 using translate X/Y over ~7s
  - `drift-2`: opposite-direction loop over ~9s
  - `drift-3`: slow vertical bob + slight sway over ~6s
- Each keyframe uses small offsets (±10px to ±20px) and `rotate(±3deg)` for liveliness.
- Apply `animate-drift-1/2/3` cycled across the 5 pills with staggered `animation-delay` inline styles (0s, 0.8s, 1.6s, 2.4s, 3.2s) so they don't move in sync.
- All use `ease-in-out` and `infinite` for continuous hovering.
- Add `hover:scale-110 hover:bg-background/20 transition-transform` so individual pills react to cursor.

### Technical details
- Files modified:
  - `src/components/Collab.tsx` — add absolutely positioned pill array inside the centered CTA wrapper.
  - `tailwind.config.ts` — register `drift-1`, `drift-2`, `drift-3` keyframes/animations.
- No new dependencies; pure CSS animations for performance.
- Pills use semantic tokens (`bg-background/X`, `text-background/X`) consistent with the dark Collab section.
- `pointer-events-auto` on pills so hover works; container remains `pointer-events-none` between them so CTA button stays clickable.
