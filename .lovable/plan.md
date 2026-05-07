## Standardize font sizes on 0-to-1 case studies

### Problem
Ember and Error Safe case studies use a different typography scale than the CVS Health modernization case study (the most visually established reference). The user reports the 0-to-1 pages look larger.

### Audit results
| Element | CVS (modernization) | Ember / Error Safe (0-to-1) |
|---------|---------------------|----------------------------|
| Hero h1 | `text-4xl md:text-6xl` | `text-3xl md:text-5xl` |
| Metadata labels | `text-xs` | `text-[10px]` |
| Metadata values | `text-sm md:text-base` | `text-sm` |
| Section headings | `text-2xl md:text-3xl` | `text-2xl md:text-4xl` |
| Body text | `text-base md:text-lg` | `text-base md:text-lg` ✓ |

The section headings (`text-4xl` vs `text-3xl`) are the biggest driver of the "larger" perception. The hero h1 is actually smaller on 0-to-1, so that gets bumped up for consistency.

### Changes

**`src/pages/CaseStudyEmber.tsx`**
1. Hero h1: `text-3xl md:text-5xl` → `text-4xl md:text-6xl`
2. Back button: add `text-sm`
3. Metadata labels: `text-[10px]` → `text-xs`
4. Metadata values: `text-sm` → `text-sm md:text-base`
5. All section h2 headings (≈12 occurrences): `text-2xl md:text-4xl` → `text-2xl md:text-3xl`
6. All sub-section h3 headings (≈8 occurrences): `text-lg md:text-xl` → keep as-is (matches CVS sub-headings)

**`src/pages/CaseStudyErrorSafe.tsx`**
Same 6 changes as Ember, applied to its equivalent headings and metadata blocks.

### Out of scope
No layout, padding, imagery, or content changes. No changes to CreativeStudio, ArtisanMarketplace, MindfulWellness, or Work listing page.