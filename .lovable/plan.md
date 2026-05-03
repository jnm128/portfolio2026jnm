## Add Lenis smooth scrolling (Grainient-style)

Grainient.supply uses **Lenis** — a tiny library that intercepts wheel/touch input and animates `window.scrollY` with eased interpolation. This naturally smooths scroll and caps top-end speed since fast wheel flicks are dampened over ~1.2s instead of jumping instantly.

### 1. Install dependency
- Add `lenis` (the maintained successor to `@studio-freight/lenis`).

### 2. Create `src/components/SmoothScroll.tsx`
- Initialize Lenis on mount with tuned options:
  - `duration: 1.4` — longer easing = slower, more controlled feel
  - `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))` — Grainient's exponential ease-out
  - `wheelMultiplier: 0.8` — slightly dampens wheel input so users can't blast past sections
  - `touchMultiplier: 1.5` — keep mobile feel natural
  - `smoothWheel: true`, `smoothTouch: false` (mobile native scroll stays snappy)
- Drive it via a single `requestAnimationFrame` loop; clean up on unmount.
- Expose the instance on `window.__lenis` so `ScrollToTop` and any anchor links can call `lenis.scrollTo()`.

### 3. Mount it in `src/App.tsx`
- Render `<SmoothScroll />` once at the top of the tree (inside `BrowserRouter`).

### 4. Update `src/components/ScrollToTop.tsx`
- Replace `window.scrollTo(0, 0)` with `window.__lenis?.scrollTo(0, { immediate: true })` so route changes still jump instantly without fighting the smooth loop. Fallback to `window.scrollTo` when Lenis isn't ready.

### 5. CSS guardrails in `src/index.css`
- Add `html.lenis, html.lenis body { height: auto; }` and `.lenis.lenis-smooth { scroll-behavior: auto !important; }` (Lenis adds these classes; the rules prevent conflicts with native smooth scrolling and any `scroll-behavior: smooth` from Tailwind).
- Ensure no `overflow: hidden` on `html`/`body` (verified — none present).

### Compatibility notes
- Existing IntersectionObserver-based animations (`FadeIn`, `ScrollAnimations`, dark-section observer, header theme switcher, case-study progress bar) all read `getBoundingClientRect` / observe natural scroll — they keep working unchanged because Lenis still updates real `scrollY`.
- `CustomCursor` and `ImageLightbox` use fixed positioning — unaffected.
- Reduced motion: gate Lenis init on `!matchMedia('(prefers-reduced-motion: reduce)').matches` so users with the OS setting get native scroll.

### Files
- `package.json` (add `lenis`)
- `src/components/SmoothScroll.tsx` (new)
- `src/App.tsx` (mount provider)
- `src/components/ScrollToTop.tsx` (use lenis.scrollTo)
- `src/index.css` (Lenis class hooks)
