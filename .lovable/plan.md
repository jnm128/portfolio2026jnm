

## Plan: Match About page margins with homepage

The About page constrains its content inside `max-w-5xl mx-auto` (~64rem/1024px), while the homepage sections use the full `container mx-auto px-6 md:px-10 max-w-[1600px]` width. This creates noticeably narrower content on the About page.

### Changes to `src/pages/AboutPage.tsx`

1. **Hero/Intro section** (line 93): Remove the `max-w-5xl mx-auto` wrapper from the grid so the two-column bio layout spans the full container width, matching the homepage Projects section layout.

2. **Dark section** (line 154): Remove the `max-w-5xl mx-auto` wrapper from the Writing/Playlist/Current Read content so it also spans the full container width.

### Files modified
- `src/pages/AboutPage.tsx`

