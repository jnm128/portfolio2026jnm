# Airy Ease-In Reveal for Cards & Rows

Make the staggered reveal feel softer and more "floaty" by lengthening the duration, gentling the easing curve, and increasing the rise distance.

## Changes

**1. `src/components/animations/FadeIn.tsx`** — tune the default motion to feel airy:
- `duration` default `700` → `1100` (slower, breathier)
- Easing `cubic-bezier(0.16, 1, 0.3, 1)` → `cubic-bezier(0.22, 1, 0.36, 1)` (smoother ease-out, less abrupt landing)
- Initial `translateY(20px)` → `translateY(32px)` so each item drifts up further

**2. Per-instance overrides for the staggered surfaces** (so the bumped duration reads as graceful, not slow):
- `src/components/Projects.tsx` — change `duration={500}` → `duration={1100}`; keep `delay={index * 180}`.
- `src/components/CaseStudyNav.tsx` — change `duration={500}` → `duration={1100}`; keep `delay={index * 180}`.
- `src/components/AboutSection.tsx` (Design, Tech & Intention list) — change `duration={500}` → `duration={1100}`; keep `delay={i * 180}`.

## Result

Each card/row floats up with a soft, lingering ease — they appear sequentially (180ms apart) and each takes ~1.1s to settle, giving the page that calm, editorial entrance.
