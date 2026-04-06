

## Standardize Border Radius to `rounded-2xl` Across Remaining Pages

The homepage components were already standardized. These are the remaining files with inconsistent radii outside of UI primitives and the Hero (which intentionally keeps `rounded-3xl`).

### Files to Update

1. **`src/pages/Work.tsx`** (line 63)
   - Project image container: `rounded-xl` → `rounded-2xl`

2. **`src/pages/AboutPage.tsx`** (5 changes)
   - Line 52: Profile image `rounded-3xl` → `rounded-2xl`
   - Lines 141, 157: Speaking images `rounded-xl` → `rounded-2xl`
   - Line 181: Current read book cover `rounded-lg` → `rounded-2xl`
   - Line 210: Song cover `rounded-lg` → `rounded-2xl`

3. **`src/pages/BookClub.tsx`** (4 changes)
   - Lines 194, 196: Book card & inner image `rounded-xl` → `rounded-2xl`
   - Line 225: Step icon container `rounded-xl` → `rounded-2xl`
   - Line 321: Selected book cover in dialog `rounded-xl` → `rounded-2xl`

4. **`src/components/Gap.tsx`** (line 107)
   - Newsletter box `rounded-lg` → `rounded-2xl`

### Unchanged
- **Hero.tsx**: keeps `rounded-3xl` (animates to 0 on scroll)
- **UI primitives** (`src/components/ui/*`): untouched
- **Case study pages**: already consistent

