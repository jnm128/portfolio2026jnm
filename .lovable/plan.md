

## Align case study typography with Book Club page

### Problem
Case study pages use inconsistent font sizing compared to the Book Club page's established typographic system.

### Key differences

| Element | Case Studies (current) | Book Club (target) |
|---|---|---|
| Hero h1 | `text-4xl md:text-6xl lg:text-7xl tracking-tight` | `text-3xl md:text-5xl` |
| Hero subtitle | `text-xl md:text-2xl` | `text-base md:text-lg font-serif leading-relaxed` |
| Section h2 | `text-3xl md:text-4xl` | `text-3xl md:text-5xl` |
| Body text | `text-lg` (no serif) | `text-base md:text-lg font-serif leading-relaxed` |
| Subheadings | `text-xl` | `text-lg md:text-xl` |

### Changes (3 files, same updates)

Files: `CaseStudyMindfulWellness.tsx`, `CaseStudyCreativeStudio.tsx`, `CaseStudyArtisanMarketplace.tsx`

1. **Hero h1** — change to `text-3xl md:text-5xl font-serif font-medium text-white leading-tight mb-6`
2. **Hero subtitle** — change to `text-base md:text-lg text-white/85 font-serif leading-relaxed`
3. **All section h2s** (Challenge, Approach, Final Designs, Results) — change to `text-3xl md:text-5xl font-serif font-medium`
4. **Body paragraphs** — change to `text-base md:text-lg text-gray-600 font-serif leading-relaxed`
5. **Approach subheadings** — change to `text-lg md:text-xl font-medium`
6. **Blockquote** — keep `text-xl md:text-2xl font-serif` (matches editorial quote style)

