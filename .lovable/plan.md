## Fix choppy mobile scrolling & animations

**1. `src/components/SmoothScroll.tsx`** — Disable Lenis on touch devices so iOS/Android use native momentum scrolling (Lenis `syncTouch` is the main cause of the choppiness).
- Detect `window.matchMedia('(pointer: coarse)').matches`
- If touch: skip Lenis entirely (native scroll)
- If desktop: keep current Lenis config

**2. `src/components/Hero.tsx`** — Skip the per-scroll padding/border-radius animation on mobile to eliminate layout thrash on every scroll frame.
- In the scroll handler, early-return when `window.innerWidth < 768`
- Reset inline styles once on mount for mobile so the hero renders at its final state

**3. `src/index.css`** — Add GPU hint to the hero image wrapper and ensure `-webkit-overflow-scrolling: touch` momentum is preserved when Lenis isn't attached.

No other components are touched. No visual change on desktop.
