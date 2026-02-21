

## Summary

Replace the current font pairing (Outfit + Source Sans 3) with **Inter Tight** (headings) and **Inter** (body text), updating the Google Fonts link and Tailwind config.

---

### What Changes

- **Headings** (`font-serif` class): Outfit --> Inter Tight
- **Body text** (`font-sans` class): Source Sans 3 --> Inter

No component files need changes since they already use `font-serif` and `font-sans` classes throughout.

---

### Technical Details

| File | Change |
|---|---|
| `index.html` line 12 | Update Google Fonts URL to load `Inter` and `Inter+Tight` with appropriate weights |
| `tailwind.config.ts` lines 22-23 | Change `sans` to `['Inter', 'system-ui', 'sans-serif']` and `serif` to `['Inter Tight', 'system-ui', 'sans-serif']` |

