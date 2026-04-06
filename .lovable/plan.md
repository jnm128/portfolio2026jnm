

## Minimalist Refinements

### 1. Contact Page — Remove availability indicator
**File:** `src/pages/Contact.tsx`
- Remove the green pulse dot (`<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />`) from line 27
- Clean up the `inline-flex items-center flex-wrap gap-1` classes on the parent `<p>` since they're no longer needed for alignment

### 2. About Page — Smaller corner radius for media thumbnails
**File:** `src/pages/AboutPage.tsx`
- Current Read cover (line 181): `rounded-2xl` → `rounded-lg`
- Work Playlist cover (line 210): `rounded-2xl` → `rounded-lg`
- Speaking images (lines 141, 157): `rounded-2xl` → `rounded-lg`

These are small thumbnails/media items where `rounded-2xl` feels oversized — `rounded-lg` (8px) keeps them clean and minimal.

### 3. Book Club — Remove shadow from Previous Reads arrows
**File:** `src/pages/BookClub.tsx`
- Lines 172, 178: Remove `shadow-lg` and `backdrop-blur-md` from both arrow buttons
- Simplify to a minimal style: `bg-foreground/5 border border-foreground/10 hover:bg-foreground/10` — no blur, no shadow, just a subtle outline

### Summary
3 files, ~8 line changes total. Makes the UI cleaner and more restrained.

