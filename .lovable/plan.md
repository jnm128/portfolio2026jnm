

## Summary of Changes

Multiple text and alignment updates across 5 files:

### 1. BioBlurb — Update text + reduce line spacing
- Change first line from "Joanna Minott, Product designer" to **"Product designer by day, community builder by night"**
- Reduce gap between the two lines (change `gap-1` to `gap-0`)

### 2. IntroBlurb — Add "Trusted by" text above marquee
- Add a centered label: **"Trusted by teams building the next frontier."** above the logo marquee
- Center-aligned, matching the small uppercase style used elsewhere

### 3. Projects — Left-align "Recent Work" title
- Change `text-center` to `text-left` on the "Recent Work" heading

### 4. Testimonials — Left-align section title
- Change `text-center` to `text-left` on the "What's it like working with Joanna?" heading

### 5. Community — Remove "Building community" label
- Remove the `<h2>` element containing "Building community"

### 6. Collab — Center-align content
- Center the headline, subtext, and button (change from `max-w-2xl` left-aligned to centered with `text-center items-center`)

---

### Technical Details

| File | Line(s) | Change |
|---|---|---|
| `BioBlurb.tsx` | 18, 20 | `gap-1` to `gap-0`; update text to "Product designer by day, community builder by night" |
| `IntroBlurb.tsx` | 22-23 | Add centered "Trusted by teams building the next frontier." text above marquee |
| `Projects.tsx` | 35 | `text-center` to `text-left` |
| `Testimonials.tsx` | 38 | `text-center` to `text-left` |
| `Community.tsx` | 14-18 | Remove the "Building community" heading block |
| `Collab.tsx` | 15-16 | Add `items-center text-center`, remove `max-w-2xl` constraint |

