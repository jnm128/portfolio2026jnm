

## Update Book Club Hero Image and Title Font

### Changes

**1. Replace hero image**
- Copy `user-uploads://Untitled_design_40.png` to `src/assets/book-club-hero-3.png`
- Update the import in `src/pages/BookClub.tsx` from `book-club-hero-2.jpg` to `book-club-hero-3.png`

**2. Add Syne font**
- Add Syne to the Google Fonts link in `index.html`
- Add a `syne` font family entry in `tailwind.config.ts` under `fontFamily`

**3. Apply Syne to "Fresh Perspectives" title**
- Change the `<h1>` on line 116 of `BookClub.tsx` from `font-serif` to `font-syne` (a new utility class for the Syne font)

### Files modified
- `index.html` — add Syne font import
- `tailwind.config.ts` — add `syne` font family
- `src/pages/BookClub.tsx` — update hero image import and title font class

