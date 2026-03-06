

## Plan: Swap positions in About page hero + Current Read section

### Changes to `src/pages/AboutPage.tsx`

**1. Hero section** (lines 93-140): Swap the two grid columns so text comes first (left) and photo comes second (right). Move the bio text `<div>` before the image `<div>` in the markup.

**2. Current Read section** (lines 244-262): Swap the flex order so text/details come first (left) and the book cover image moves to the right. Move the `<div className="flex-1 min-w-0">` before the image `<div>`.

### Files modified
- `src/pages/AboutPage.tsx`

