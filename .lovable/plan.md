
The user wants the dark section on the homepage (Testimonials + Collab) to switch from the flat `#1C1C1C` dark background to a soft pink gradient inspired by mymind.com (visible in the screenshot: pale pink/peach blending into a warmer rose-pink).

## Investigation

Looking at the current setup:
- `DarkSection.tsx` wraps Testimonials + Collab with `data-theme="dark"` and `backgroundColor: '#1C1C1C'` (toggled via IntersectionObserver from cream).
- `Testimonials.tsx` uses `text-white/60`, `text-[#F8F6F1]`, `bg-white/10`, `border-white/20` — all assume a dark backdrop.
- `Collab.tsx` uses an inner `bg-secondary` cream card with dark text — that already works on any background.
- `Header.tsx` uses `data-theme="dark"` IntersectionObserver to toggle to light text.

## The Gradient

mymind reference: soft pale pink (top-left) → warmer rose/coral pink (bottom-right). Approximate stops:
- `#FCE4EC` / `#FFE0E6` (pale pink)
- `#FFC6D3` (mid)
- `#FFB0BE` / `#F8A4B5` (warmer rose)

Use a diagonal gradient: `linear-gradient(135deg, #FFE4EC 0%, #FFC8D4 50%, #F8A4B5 100%)`.

## Plan

### 1. `src/components/DarkSection.tsx`
- Replace `backgroundColor` toggle with `background` toggle to a gradient.
- Keep `data-theme="dark"` so the header still inverts (the gradient is light but per memory `dark-section-wrapper` keeps testimonials theming intact). **Wait** — the gradient is LIGHT, not dark. The header would invert to light text on light background and become unreadable. Also Testimonials uses white text which won't read on pink.
- Solution: remove `data-theme="dark"` so header stays in default (dark text on light) mode, and update Testimonials text colors to dark variants.

### 2. `src/components/Testimonials.tsx`
- Section label `text-white/60` → `text-foreground/60`
- Arrow buttons `bg-white/10 border-white/20 hover:bg-white/20` → `bg-foreground/5 border-foreground/20 hover:bg-foreground/10`
- Arrow icons `text-white/80` → `text-foreground/80`
- Quote `text-[#F8F6F1]` → `text-foreground`
- Avatar circle `bg-white/10 border-white/20 text-white/80` → `bg-foreground/5 border-foreground/20 text-foreground/80`
- Author `text-white` → `text-foreground`; role `text-white/60` → `text-foreground/60`

### 3. `src/components/Collab.tsx`
- Inner `bg-secondary` card already has dark text — keep as-is. It will sit nicely on the pink gradient.

### Files Modified
- `src/components/DarkSection.tsx`
- `src/components/Testimonials.tsx`
