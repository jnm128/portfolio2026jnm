

## Swap sections and enlarge hero image

**File:** `src/pages/BookClub.tsx`

### 1. Swap "Who We Are" and "Previous Reads" back to original order
- Move **Section 3 (Who We Are, lines 191-230ish)** back above **Section 2 (Previous Reads, lines 144-189)**
- Who We Are becomes Section 2, Previous Reads becomes Section 3

### 2. Increase hero image size
- Change the hero image aspect ratio from `aspect-[16/9]` to `aspect-[16/10]` and increase the container height feel
- Alternatively, remove the fixed aspect ratio and use a taller explicit height: `h-[50vh] md:h-[70vh]` on the image container (line 133)

This keeps everything else (colors, padding, typography) unchanged.

