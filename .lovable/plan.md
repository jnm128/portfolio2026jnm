## Plan: Case Study Layout Updates

Two changes across all case study pages (Mindful Wellness, Artisan Marketplace, Creative Studio, CVS Health).

### 1. Replace `CaseStudyNav` (prev/next) with "More Case Studies"

Rework `src/components/CaseStudyNav.tsx` into a section that shows **two case study cards** (the next two studies in the rotation, excluding the current one), styled to match the homepage `Projects.tsx` card pattern.

Layout:
```text
┌─────────────────────────────────────────────┐
│  CHECK OUT MORE CASE STUDIES                │
│                                             │
│  ┌──────────────┐    ┌──────────────┐      │
│  │  [image]     │    │  [image]     │      │
│  │  Brand · Yr  │    │  Brand · Yr  │      │
│  └──────────────┘    └──────────────┘      │
│  short description    short description     │
└─────────────────────────────────────────────┘
```

Details:
- Section header: small uppercase eyebrow `CHECK OUT MORE CASE STUDIES` (text-xs, tracking-widest, text-muted-foreground), with optional larger serif title `More case studies` below.
- Two cards in a `grid-cols-1 md:grid-cols-2 gap-8` container, max-w-[1600px], px-5 md:px-16, py-16 md:py-24.
- Each card: `aspect-[16/10]` rounded-2xl image with the brand pill (brand · year) overlaid bottom-left, plus a one-line description below the image (mirrors `Projects.tsx` styling).
- Hover: `group-hover:scale-[1.02]` on image, `opacity-70` on text — matches existing standards.
- Selection logic: from the existing `caseStudies` array, take the two studies immediately following the current slug (wrapping around). Centralize the data (extend each entry with `image`, `description`, `year`) inside `CaseStudyNav.tsx`.
- Keep the `variant: 'light' | 'dark'` prop so CVS (dark variant) still renders correctly — dark variant uses `bg-foreground` section, white text, and `data-theme="dark"`.

No changes needed to the four pages that import `CaseStudyNav` — same component name and props.

### 2. Move TLDR above the hero helper text + add Team field

In each case study page hero section, restructure so the order is:

```text
Back button
[TLDR metadata grid]   ← moved up
Title (h1)
Helper/subtitle paragraph
Hero image
```

Specifically:
- Remove the standalone TLDR section currently sitting below the hero.
- Move the metadata grid into the hero `<section>`, placed **above** the title.
- Reduce its visual weight inside the hero: drop the `SplitSection` "TLDR" label wrapper here; render as a compact horizontal/grid metadata strip with the same uppercase labels.
- Update the field set to: **Client, Industry, Category, My Role, Team, Timeline** (replaces "Responsibilities" with "Team"; reorders).
- Grid: `grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-6 gap-y-4`, with a thin top + bottom border divider for editorial feel.
- Each item: tiny uppercase label (text-[10px] tracking-widest text-muted-foreground) + `text-sm font-medium` value.

Sample Team values (placeholder, easy to edit later):
- Mindful Wellness: "1 PM, 2 Engineers"
- Artisan Marketplace: "1 PM, 3 Engineers"
- Creative Studio: "1 Strategist, 1 Developer"

### Files to modify

- `src/components/CaseStudyNav.tsx` — rewrite to "More case studies" two-card layout; add image/description/year to data.
- `src/pages/CaseStudyMindfulWellness.tsx` — restructure hero, delete TLDR section, add Team.
- `src/pages/CaseStudyArtisanMarketplace.tsx` — same.
- `src/pages/CaseStudyCreativeStudio.tsx` — same.
- `src/pages/CaseStudyCVS.tsx` — verify the new `CaseStudyNav` works with `variant="dark"`; CVS has no TLDR section so no hero change needed there (unless you'd like one added — let me know).

### Open question

CVS Health currently has no TLDR. Should I add the same metadata strip to its hero as well, or leave it as the NDA-style placeholder it is today? Default: leave CVS as-is.
