## Editorial "MINO" footer

Restructure `src/components/Footer.tsx` so the wordmark **MINO** dominates the footer as a large, expanded display element — used as a visual signoff, not just a small logo.

### Layout (top → bottom)

1. **Meta row** — short tagline on the left, nav links on the right (md+: aligned to baseline; mobile: stacked).
   - Left: small uppercase eyebrow "Joanna Minott" + one-line serif tagline ("UX designer crafting calm, intuitive experiences — and building space for designers to think deeply.")
   - Right: `Work`, `About`, `Community`, `Get in Touch`

2. **Oversized wordmark** — full-width centered **MINO** as the editorial centerpiece.
   - `font-sans font-bold` (Outfit 700, matches existing logo)
   - Fluid sizing: `clamp(5rem, 28vw, 26rem)` — fills the container width on all breakpoints
   - Letter-spacing `0.04em` for an "expanded" editorial feel
   - `leading-none` so it sits tight as a slab
   - Acts as a click-target back to top (preserves existing scroll-to-top behavior)
   - `overflow-hidden` on the footer to clip any subpixel overflow on narrow screens

3. **Bottom row** — thin top border (`border-background/10`), splits copyright (left) and "made with 🍃 matcha" signature (right).

### Other details

- Keep dark theme: `bg-foreground text-background`.
- Vertical padding becomes `pt-16 md:pt-24 pb-8 md:pb-12` to give the big wordmark breathing room above and a tighter strip below.
- Drops the small `MINO.` button at the top — the giant wordmark replaces it as the brand mark and the back-to-top trigger.
- Container, max-width (`max-w-[1600px]`), and global mobile padding (`px-5 md:px-16`) preserved.
- "made with matcha" signature preserved per memory.

### Files touched

- `src/components/Footer.tsx` — rewrite layout
