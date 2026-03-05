

## Plan: Reduce About section top padding

The top padding (`pt-16 md:pt-24`) creates too much white space above the heading. Reducing it will balance the section better.

### Change

**`src/components/AboutSection.tsx`** (line 9)
- Change `pt-16 md:pt-24 pb-24 md:pb-32` → `pt-10 md:pt-16 pb-24 md:pb-32`

This reduces the top gap while keeping the generous bottom padding.

