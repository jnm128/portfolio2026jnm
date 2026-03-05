

## Plan: Footer signature, Testimonials heading update, and subtitle removal

### 1. Add "made with matcha" signature to Footer
**`src/components/Footer.tsx`** — Below the copyright line, add a "made with 🍵 matcha" line using the `Coffee` (or `Leaf`) icon from lucide-react as a matcha icon stand-in, styled subtly in `text-white/40`.

### 2. Update Testimonials heading style to match Community
**`src/components/Testimonials.tsx`** (line 36):
- Change the `<h2>` from `text-3xl md:text-5xl font-serif` to `text-xs uppercase tracking-widest text-white/60` — matching the Community section's label style.

### 3. Remove subtitle from Testimonials
**`src/components/Testimonials.tsx`** (lines 37-39):
- Remove the `<p>` with "Bringing people and ideas together at scale" and the `mb-3` on the heading.

### Files
- `src/components/Footer.tsx`
- `src/components/Testimonials.tsx`

