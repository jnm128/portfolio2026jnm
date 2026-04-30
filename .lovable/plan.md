## Two changes

### 1. `src/components/AboutSection.tsx` — replace Tool Stack, restyle Skills

**Remove**: Tool Stack list (Figma, FigJam, Framer, etc.).

**Replace with**: A "Design Philosophy" list using the same flat row + bottom-divider styling. Each row shows a title (large serif) and a one-line description (small muted serif). Items:
- **User-Centered** — Every design decision starts with understanding the user — through research, empathy, and testing.
- **Purposeful** — Design should solve problems, not just look beautiful. Each element earns its place.
- **Iterative** — Great design emerges through iteration — embracing feedback and refining until it resonates.
- **Collaborative** — The best work happens together, with transparent communication and shared ownership.

**Skills section**: Drop the rounded chip pills. Render the skill list as a single standalone paragraph, separated by `•`:

> User Research • Information Architecture • Interaction Design • Prototyping • Design Systems • Usability Testing • Accessibility (WCAG) • Workshop Facilitation • Design Strategy

Styling: `text-base md:text-lg font-serif text-foreground` so it reads as quiet editorial text rather than chips.

### 2. `src/components/Collab.tsx` — remove the card wrapper

Currently the "Interested in collaborating? / Get in Touch" block sits inside a `rounded-2xl bg-secondary` card with heavy padding. Since this lives inside the dark `DarkSection`, the card visually breaks the dark band.

**Change**: Remove the card wrapper entirely. Render heading, body, and CTA directly on the dark background, centered, with `py-12 md:py-16` spacing instead of the previous `py-24/py-32` card padding. Update text colors to read on dark:
- Heading → `text-background`
- Body → `text-background/70`
- CTA button inverts: `bg-background text-foreground` (light pill on dark bg)

Layout, copy, and route (`/contact`) all unchanged.

## Files touched

- `src/components/AboutSection.tsx` — edit
- `src/components/Collab.tsx` — edit
