

## Changes to Book Club Page

**File:** `src/pages/BookClub.tsx`

### 1. Remove founder/co-host text
Delete lines 155-160 (the `FadeIn` block containing "Joanna, Founder" and "Bhavna, Co-host" spans).

### 2. Convert "How the Community Works" to horizontal scroll layout
Replace the current stacked vertical layout (lines 218-254) with a horizontal scrollable row matching the book carousel pattern — cards side-by-side in a `flex gap-6 overflow-x-auto` container, each card as a fixed-width flex-shrink-0 item (~260px).

### 3. Fix section spacing — add more whitespace between all sections
Standardize all sections to `py-16 md:py-20` for generous breathing room:

| Section | Current padding | New padding |
|---------|----------------|-------------|
| Hero | `pt-24 md:pt-28 pb-6` | `pt-24 md:pt-28 pb-16 md:pb-20` |
| Who We Are | `pt-6 pb-12 md:pb-16` | `py-16 md:py-20` |
| Previous Reads | `pt-12 md:pt-16 pb-0` | `pt-16 md:pt-20 pb-4` |
| How Community Works | `pt-6 pb-12 md:pb-16` | `py-16 md:py-20` |
| CTA | `py-16 md:py-24` | keep as-is |
| FAQ | `py-12 md:py-16` | `py-16 md:py-20` |

