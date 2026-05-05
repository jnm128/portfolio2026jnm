## About page — tighten How I Work header + match homepage body color

### Changes in `src/pages/AboutPage.tsx`

1. **How I Work section (left column)**
   - Remove the eyebrow `How I Work`.
   - Replace the `A process, not a formula` headline with `How I Work`.
   - Keep the supporting paragraph as-is.

2. **Skill Set section (left column)**
   - Remove the eyebrow `Skill Set`.
   - Replace the `What I bring to the room` headline with `Skill Set`.
   - Keep the supporting paragraph as-is.

3. **Hero bio paragraphs**
   - Switch the three intro `<p>` tags from `text-muted-foreground` to `text-foreground` so the body color matches the homepage About/BioBlurb (`text-foreground` = #5C4A3D), per the project's two-tier body text rule.

No other files affected.