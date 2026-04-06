

## Fix Hero Section to Fill Viewport

### Problem
At 770×716 viewport, the hero section doesn't fill the full screen height, so the top of the dark "Who We Are" section peeks above the fold. This breaks the scroll-reveal effect.

### Solution
Make the hero section fill the viewport using `min-h-screen` so it occupies the full first screen. The "Who We Are" dark section will then start entirely below the fold, creating a clean reveal on scroll.

### Changes in `src/pages/BookClub.tsx`

**Line 102** — Add `min-h-screen` and use flexbox to vertically center the hero content:

```tsx
<section className="min-h-screen flex items-center pt-24 md:pt-28 pb-10 md:pb-16 bg-[#F8F6F1]">
```

This ensures the hero fills the viewport on all screen sizes, pushing the dark section fully below the fold. The `flex items-center` vertically centers the two-column layout within the available space.

