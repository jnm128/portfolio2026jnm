## Restyle floating testimonial pills

Update `src/components/Collab.tsx`:

### Layout
- Reorganize 5 pills: **3 on top**, **2 on bottom**.
  - Top: `top-[4%] left-[4%]`, `top-[2%] left-1/2 -translate-x-1/2`, `top-[4%] right-[4%]`
  - Bottom: `bottom-[4%] left-[10%]`, `bottom-[4%] right-[10%]`

### Style (light theme on dark CTA)
- Pill: `bg-background` (cream), `text-foreground`, `border-background`, `font-serif italic text-xs`.
- Author: `text-muted-foreground`.
- Subtle `shadow-sm` → `hover:shadow-md`.

### Motion
- Remove constant `animate-drift-*` and stagger delays — pills are **static by default**.
- On hover, apply the existing drift keyframes via `hover:animate-drift-1/2/3` (cycled across pills) so they playfully wiggle only when the cursor lands on them.
- Keep `hidden md:block` (no pills on mobile).

### Files
- `src/components/Collab.tsx` only. No tailwind config changes (drift keyframes already exist).
