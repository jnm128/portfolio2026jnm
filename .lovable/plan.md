

## Update Case Study Title Padding to Match Homepage

The homepage Hero places the title and description directly inside the wide container (`max-w-[1600px] px-8 md:px-16`) with no centering wrapper, and uses `mb-2` on the title and `mb-4` on the description. The case study pages currently wrap title/description in `max-w-4xl mx-auto` (centering them) and use different spacing (`mb-4` on title, `mt-12` before image).

### Changes (all 3 case study files)

1. **Remove `max-w-4xl mx-auto` wrapper** around title/description so they left-align like the homepage
2. **Update title spacing** from `mb-4` to `mb-2` to match homepage
3. **Keep description max-width** using `max-w-2xl` (matching homepage) instead of `max-w-3xl`

### Files
- `src/pages/CaseStudyMindfulWellness.tsx`
- `src/pages/CaseStudyArtisanMarketplace.tsx`
- `src/pages/CaseStudyCreativeStudio.tsx`

