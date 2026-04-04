

## Mobile-only layout change for About page hero

### What changes
In `src/pages/AboutPage.tsx`, restructure the hero so that **on mobile only**, the order is: Title → Headshot (straight) → Text. On desktop (`md:` and up), keep the current side-by-side 2-column grid with the tilted image.

### How

1. **Reorder with CSS `order`**: Move the image block before the text block in the DOM, then use `md:order-last` on the image so it appears on the right on desktop.

2. **Remove tilt on mobile only**: Change `rotate-2 hover:-rotate-1 transition-transform duration-500 translate-y-4` to `md:rotate-2 md:hover:-rotate-1 md:transition-transform md:duration-500 md:translate-y-4` so the image is straight on mobile but tilted on desktop.

3. **Single-column mobile, 2-col desktop**: The existing `grid md:grid-cols-2` already handles this — it's 1 column on mobile, 2 on desktop. Just need the DOM order change.

### File: `src/pages/AboutPage.tsx`

- Image div (line 81): Move above the bio text div in DOM order, add `order-first md:order-last` 
- Image div: Change rotation classes to desktop-only (`md:rotate-2 md:hover:-rotate-1 md:translate-y-4`)
- Title: Keep inside bio text div but also add a mobile-only duplicate above the image, or simpler — extract title out of the grid as a separate element shown only on mobile, while keeping it in the bio text div with `hidden md:block`

**Simplest approach**: Pull `<h1>About</h1>` above the grid with responsive visibility, reorder image before text in DOM with `md:order-last` on image.

