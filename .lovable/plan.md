

## Revert "How the Community Works" to vertical list & fix spacing

**File:** `src/pages/BookClub.tsx`

### 1. Convert "How the Community Works" back to a vertical stacked list
Replace the horizontal scroll container (lines 213-227) with a vertical layout — a `space-y-6` or `grid` with the three cards stacked vertically, each full-width. Remove `flex-shrink-0`, `w-[220px]`, `overflow-x-auto`, `snap-x`, etc.

### 2. Make Previous Reads and How Community Works fully separate sections with equal spacing
Currently Previous Reads has `pt-16 md:pt-20 pb-4` — the small `pb-4` makes it feel merged with the next section. Change it to `py-16 md:py-20` to match the consistent spacing used by Who We Are and other sections. How Community Works already has `py-16 md:py-20`, so no change needed there. This gives equal whitespace between all sections.

