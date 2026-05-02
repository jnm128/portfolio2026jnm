## Refactor testimonial pills around CTA

Update `src/components/Collab.tsx` only.

### Layout
- Replace the absolute-positioned pill overlay with **two flex rows** that flank the CTA, so they never overlap the headline:
  - Row above headline: 3 pills (`flex flex-wrap justify-center gap-3 mb-10 md:mb-14`)
  - Headline + subhead + button (centered)
  - Row below button: 2 pills (`flex flex-wrap justify-center gap-3 mt-10 md:mt-14`)
- `flex-wrap` makes pills stack naturally on narrow viewports; `justify-center` keeps the composition centered.

### Pill style (transparent, Outfit, static)
- `rounded-full border border-background/30 bg-transparent`
- `px-4 py-2 text-xs sm:text-sm text-background/80`
- `font-sans` (Outfit), no italic — matching case-study card typography
- `max-w-[260px] sm:max-w-[280px]` so each pill caps at a reasonable width
- Author appended in `text-background/50`
- **No hover animation, no drift, no shadow** — fully static, outline-only so it reads as a quote tag, not a button

### Files
- `src/components/Collab.tsx` only. Drift keyframes in `tailwind.config.ts` remain (harmless, no longer referenced).
