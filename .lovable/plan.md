# Fix Double-Load Glitch on Homepage Sections

## Root cause

`src/components/animations/ScrollAnimations.tsx` (mounted in `Index.tsx`) attaches a blanket `IntersectionObserver` to **every `<section id="...">`** on the page. It forces them to start at `opacity-0 translate-y-10` and then plays `animate-fade-in-up`.

Most sections also wrap their inner content in `<FadeIn>` components. When the section enters the viewport, the parent section animates **and** each child `FadeIn` animates simultaneously — producing the visible "double-load / glitch" jump. The effect is most pronounced on mobile because cards/blocks all enter the viewport at once.

Confirmed on the affected sections:
- `<Projects>` — `<section id="projects">` + per-card `FadeIn` (case study cards)
- `<DesignPhilosophy>` — `<section id="philosophy">` + inner `FadeIn`s ("design, tech & intention")

The same issue silently affects every other id'd section (`#about`, `#contact`, `#process`, etc.).

## Fix

**1. Disable the section-level fade-in observer.** It's redundant — every section already manages its own entrance via `FadeIn`. Removing it eliminates the double-animation everywhere in one change.
- In `src/components/animations/ScrollAnimations.tsx`, delete the `section[id]` observer block (and its cleanup). Keep the `[data-package-card]`, `[data-project-card]`, and `[data-section-divider]` observers intact — those target specific opt-in elements and don't conflict.

**2. Stagger the case study cards one-at-a-time.** Currently `Projects.tsx` uses `delay={index * 50}` — 50ms between cards is imperceptible, so they appear as a clump.
- In `src/components/Projects.tsx`, change `delay={index * 50}` → `delay={index * 180}`. With the existing 500ms duration and ease-out curve, each card visibly lands before the next starts.
- Apply the same bump to `src/components/CaseStudyNav.tsx` (`index * 50` → `index * 180`) for consistency on case-study pages.

**3. Stagger the DesignPhilosophy blocks.** If "design, tech & intention" renders three FadeIn blocks without staggered delays, add `delay={index * 180}` (or equivalent per-block delays of 0 / 180 / 360 ms) so they reveal sequentially instead of together.

## Files to edit

- `src/components/animations/ScrollAnimations.tsx` — remove the `section[id]` observer.
- `src/components/Projects.tsx` — bump card stagger to 180ms.
- `src/components/CaseStudyNav.tsx` — bump card stagger to 180ms.
- `src/components/DesignPhilosophy.tsx` — add a 180ms-per-item stagger to the three intent blocks.

## Why this is safe

- `FadeIn` already provides per-component entrance animations across the codebase, so removing the section-level animation only removes the duplicate.
- `[data-project-card]` / `[data-package-card]` observers stay — they're used by other surfaces (Packages, etc.) and don't currently target the homepage Projects grid.
