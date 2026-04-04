

## Fix Book Club page: stats weight, section order, colors, and padding

**File:** `src/pages/BookClub.tsx`

### 1. Stats font weight
- Change stat numbers from `font-semibold` to `font-medium` (lines 114, 118, 122, 126)

### 2. Reorder sections: Previous Reads before Who We Are
- Move **Section 3 (Previous Reads)** to come right after the Hero (Section 1)
- Move **Section 2 (Who We Are)** to come after Previous Reads

New order: Hero → Previous Reads → Who We Are → How Community Works → CTA → FAQ

### 3. Revert section colors — all cream except CTA (dark)
- **Previous Reads**: `bg-[#F8F6F1]`, label `text-foreground/60`, carousel arrows use `bg-foreground/10 border-foreground/20` with dark icon colors
- **Who We Are**: stays `bg-[#F8F6F1]` (no change)
- **How Community Works**: `bg-[#F8F6F1]`, icon boxes `bg-foreground` with white icons, headings `text-foreground`, body `text-muted-foreground`, borders `border-foreground/10`
- **CTA**: `bg-[#1C1C1C]`, heading `text-white`, subtext `text-white/70`, button `bg-white text-[#1C1C1C]`
- **FAQ**: `bg-[#F8F6F1]`, question text `text-foreground`, answer text `text-muted-foreground`, chevron `text-foreground/60`, borders `border-foreground/10`

### 4. Tighten padding between sections
- Previous Reads (now section 2): `py-12 md:py-16`
- Who We Are (now section 3): `py-12 md:py-16`
- How Community Works: `py-12 md:py-16`
- CTA: `py-16 md:py-24` (keep larger for impact)
- FAQ: `py-12 md:py-16`

### Result flow
```
Hero (cream) → Previous Reads (cream) → Who We Are (cream) → How Community Works (cream) → CTA (dark) → FAQ (cream) → Footer
```

