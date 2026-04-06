

## Make Each Section Distinct on Scroll

### Problem
The "Previous Reads" and "How the Community Works" sections both use the same cream background (`bg-[#F8F6F1]`), so they visually merge. On a 1020×716 viewport, "How the Community Works" peeks above the fold while scrolling through the book carousel.

### Approach
Two changes to create visual separation:

1. **Enlarge book cards** — Increase from `w-[220px] md:w-[260px]` to `w-[260px] md:w-[300px]` so the carousel section takes up more vertical space and pushes the next section further down.

2. **Dark background for "How the Community Works"** — Switch from cream to `bg-[#1C1C1C]` with inverted text colors (matching the existing dark section pattern). This creates the alternating rhythm: cream hero → dark (Who We Are) → cream (Previous Reads) → dark (How It Works) → dark (CTA + FAQ).

### Changes in `src/pages/BookClub.tsx`

**Book cards (line 194):** Change card width classes from `w-[220px] md:w-[260px]` to `w-[260px] md:w-[300px]`.

**"How the Community Works" section (lines 211–242):**
- Section: `bg-[#F8F6F1]` → `bg-[#1C1C1C]`
- Label: `text-foreground/60` → `text-white/60`
- Icon boxes: `bg-foreground` → `bg-white`, icon color: `text-background` → `text-[#1C1C1C]`
- Step titles: `text-foreground` → `text-white`
- Step descriptions: `text-muted-foreground` → `text-white/70`
- Dividers: `border-foreground/10` → `border-white/15`

