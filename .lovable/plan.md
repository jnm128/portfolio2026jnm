

## Dark "Who We Are" Section with Breathing Space

### Problem
1. The "Who We Are" section blends into the hero since both share the same cream background — no visual break.
2. The hero uses `pb-16 md:pb-20` which, combined with the section's `py-16 md:py-20`, creates inconsistent spacing compared to the rest of the site.

### Changes in `src/pages/BookClub.tsx`

**1. Fix hero bottom padding** — Reduce to `pb-10 md:pb-16` to match the case study hero pattern and tighten the gap before the next section.

**2. Convert "Who We Are" to a dark section** — Change background to `bg-[#1C1C1C]` and invert all text colors:
- Label: `text-white/60`
- Headline: `text-white`
- Paragraph: `text-white/70`

This creates a cream → dark → cream → dark rhythm down the page, giving it room to breathe.

**3. Keep the staggered FadeIn animations** as-is — the existing `FadeIn` with delays (0, 200, 400ms) will handle the scroll-triggered fade-in naturally since the dark background makes the reveal more dramatic.

### Result
```
Hero (cream)        ← pb-10 md:pb-16
Who We Are (dark)   ← py-16 md:py-20, #1C1C1C bg, white text
Previous Reads (cream)
How It Works (cream)
CTA + FAQ (dark)
```

