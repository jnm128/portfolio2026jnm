## Make Design Philosophy section taller with more breathing room

Goal: turn the "Design, Tech & Intention" / Design Philosophy section into a full-viewport, focus-one-thing-at-a-time block with generous spacing between each philosophy item.

### Changes to `src/components/AboutSection.tsx`

- **Section height**: change wrapper from `pt-12 pb-12 md:pt-20 md:pb-20` to `min-h-screen flex items-center py-24 md:py-40`. This makes the dark section fill the viewport so it's the only section in view while reading.
- **Column gap**: bump grid gap from `gap-12 md:gap-16` to `gap-16 md:gap-24` for more separation between the title column and the philosophy list.
- **Item spacing**: change each `<li>` padding from `py-5` to `py-10 md:py-12` so each numeral/title/description block stands alone with clear vertical breathing room between dividers.

### Result

- Dark section occupies ~100vh, vertically centered content.
- Each of the three philosophy items (User-Centered, Purposeful, Iterative) gets roughly 2× the previous vertical space, separated by the existing thin dividers.
- No color/token changes — still dark theme via `data-theme="dark"` and `bg-foreground`.

### Files changed

- `src/components/AboutSection.tsx`
