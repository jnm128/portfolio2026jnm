

## Typography Update: Outfit + Source Sans 3

### Overview
Replace the current font pairing (Fraunces + Plus Jakarta Sans) with a tech-forward, modern combination:
- **Outfit** for headings - A clean, geometric sans-serif with a modern tech aesthetic
- **Source Sans 3** for body text - Adobe's open-source workhorse, highly readable and professional

### Files to Modify

#### 1. index.html (Google Fonts link)
Replace the current font import (line 12) with:
```html
<link href="https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700&family=Source+Sans+3:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap" rel="stylesheet">
```

#### 2. tailwind.config.ts (Font family definitions)
Update the fontFamily configuration (lines 21-24):
```typescript
fontFamily: {
  sans: ['Source Sans 3', 'system-ui', 'sans-serif'],
  serif: ['Outfit', 'system-ui', 'sans-serif'],
},
```

**Note:** Even though Outfit is a sans-serif font, we're keeping it in the `serif` slot because the existing codebase uses `font-serif` for all headings. This maintains consistency without requiring changes to component files.

### Technical Details

**Outfit Font Features:**
- Weights: 400-700 for headings
- Geometric, clean letterforms
- Modern, tech-forward appearance
- Excellent for large display text

**Source Sans 3 Font Features:**
- Weights: 300-700 plus italics
- Adobe's first open-source typeface
- Optimized for UI and long-form reading
- Professional, trustworthy appearance
- Excellent x-height for readability

### What Changes Automatically

All components using the existing font utility classes will automatically update:
- **Headings** (Hero, About, Projects, etc.): Use `font-serif` → now Outfit
- **Body text**: Uses `font-sans` → now Source Sans 3
- **Navigation, buttons, labels**: Default sans-serif → Source Sans 3

### Visual Impact

This pairing creates a more tech-forward, innovative aesthetic compared to the current Fraunces + Plus Jakarta Sans combo - better suited for a UX designer working in healthcare tech innovation.

