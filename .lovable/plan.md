

## Restructure Book Club page to match updated spec (keeping hero image)

Single file change: `src/pages/BookClub.tsx`

### Section 1 — Hero
- Add eyebrow: "Book Club · UX · Design Thinking" (uppercase tracked, muted)
- Keep H1: "Fresh Perspectives"
- Update subhead to: "A UX book club for designers who think beyond the screen."
- Add stats strip below subhead: `486+ Members · 8+ Books · Est. 2025 · Monthly Sessions` — all same weight, no italics
- **Keep the hero image** (`rounded-2xl`, `aspect-[16/9]`) below the stats

### Section 2 — Founders / About (new, after hero)
- Label: `WHO WE ARE`
- First-person copy about founding Fresh Perspectives with Bhavna
- Two overlapping circular headshots (~80px, `rounded-full`, `border-4 border-[#F8F6F1]`):
  - Joanna (left, z-10) using existing upload `/lovable-uploads/fff4e4ff-...`
  - Bhavna (right, `-ml-6`) placeholder image
- Name labels: "Joanna, Founder" · "Bhavna, Co-host"

### Section 3 — Previous Reads
- Remove "More About Us" heading, subtitle, and metrics row (moved to hero stats)
- Keep only `PREVIOUS READS` label + book carousel with arrows

### Sections 4–6
- How It Works, CTA, FAQ — unchanged

### Technical notes
- Keep `bookClubHero` import
- Remove italic styling from "Monthly" metric
- Stats use `flex flex-wrap gap-x-6` with `·` separators

