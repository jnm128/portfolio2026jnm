

## Change Site Font to Outfit

### Changes

**1. Load Outfit font from Google Fonts** (`index.html`)
Replace the current Google Fonts link. Load Outfit weights 300–700 instead of Inter, Inter Tight, Space Grotesk, and Syne.

**2. Update Tailwind font families** (`tailwind.config.ts`)
- `sans` → `['Outfit', 'system-ui', 'sans-serif']`
- `serif` → `['Outfit', 'system-ui', 'sans-serif']` (keep the alias so all `font-serif` references work without changes)
- Remove `syne` and `space-grotesk` families (or point them to Outfit)

**3. Update logo to Outfit 700** (`src/components/Header.tsx` and `src/components/Footer.tsx`)
- Header logo: change from `font-serif font-medium` to `font-sans font-bold` (Outfit 700)
- Footer logo: change from `font-serif font-medium` to `font-sans font-bold`

### Files Modified
- `index.html` — swap Google Fonts link to Outfit
- `tailwind.config.ts` — update font family definitions
- `src/components/Header.tsx` — logo font weight
- `src/components/Footer.tsx` — logo font weight

