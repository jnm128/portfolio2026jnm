

## Plan: Add padding to carousel container so hover scale isn't clipped

**Problem**: The scroll container's `overflow-x-auto` clips the book cards when they scale up on hover, cutting off the rounded corners.

**Fix**: Add vertical padding to the scroll container and compensate with negative margin, so the scaled cards have room to grow without being clipped by overflow.

**File**: `src/pages/BookClub.tsx` — line 177

**Change**:
- On the scroll container div, add `py-4 -my-4` alongside the existing classes. This gives vertical breathing room for the scale effect while keeping visual alignment unchanged.
- The `overflow-x-auto` only clips horizontally; the vertical padding ensures the top/bottom of scaled cards aren't cut off by any parent clipping.

Single line change.

