

## Fix: Outfit Font Not Loading

### Problem
Line 12 of `index.html` still loads the old fonts (Inter, Inter Tight, Space Grotesk, Syne). The previous edit to swap this to Outfit was lost or never applied. Tailwind config references Outfit, but the font is never actually loaded from Google Fonts.

### Fix

**File**: `index.html`, line 12

Replace the current Google Fonts link:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Inter+Tight:wght@400;500;600;700&family=Space+Grotesk:wght@800&family=Syne:wght@400;500;600;700&display=swap" rel="stylesheet">
```

With:
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Files Modified
- `index.html` — swap Google Fonts link to load Outfit

