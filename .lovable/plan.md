
## Typography Update: Fraunces + Plus Jakarta Sans

### Overview
Replace the current font pairing (Cormorant Garamond + Inter) with a more modern healthcare/wellness-focused combination:
- **Fraunces** for headings - A soft, organic serif with variable optical sizing
- **Plus Jakarta Sans** for body text - A clean, friendly geometric sans-serif

### Files to Modify

#### 1. index.html (Google Fonts link)
Replace the current font import with:
```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,500&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

#### 2. tailwind.config.ts (Font family definitions)
Update the fontFamily configuration (lines 21-24):
```typescript
fontFamily: {
  sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
  serif: ['Fraunces', 'Georgia', 'serif'],
},
```

### Technical Details

**Fraunces Font Features:**
- Variable font with optical sizing (opsz) for better rendering at different sizes
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)
- Italic variants included for emphasis
- Soft, approachable character with subtle quirks

**Plus Jakarta Sans Font Features:**
- Weights: 300-700 for flexibility
- Geometric but warm - perfect for healthcare/wellness
- Excellent readability at all sizes
- Clean, modern appearance

### What Changes Automatically

Since the fonts use the existing `font-serif` and `font-sans` utility classes, all components will automatically use the new fonts:

- **Headings** (h1-h6): Already use `font-serif` via base styles in index.css
- **Hero title**: Uses `font-serif` class explicitly
- **Section titles**: Use `font-serif` class (About, Projects, etc.)
- **Body text**: Uses default `font-sans` (inherited from body)
- **Navigation & buttons**: Use sans-serif by default

### No Component Changes Needed

The existing codebase already properly uses `font-serif` for headings and defaults to sans-serif for body text, so swapping the font definitions will cascade throughout the entire site automatically.
