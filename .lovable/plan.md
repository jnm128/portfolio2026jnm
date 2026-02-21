

## Summary of Changes

Three components updated to restyle the community section, update testimonials title, and add subtle card backgrounds.

### 1. Community Section — Restructure to match case study layout
- Change from the current 2-column grid to match the Projects section's alternating image/text layout
- Image on one side (3/5 width), text on the other (2/5 width) with title, description, and "Learn More" link
- Wrap in a subtle card background (`bg-white/60 rounded-2xl p-6 md:p-8`)

### 2. Testimonials — Update title text and size
- Replace "What's it like working with Joanna?" with **"Bringing people and ideas together at scale"**
- Increase font size from `text-[14px]` to `text-2xl md:text-3xl` with serif font
- Remove uppercase styling to match the new larger treatment

### 3. Projects (Case Studies) — Add dim card backgrounds
- Wrap each project item in a subtle card container (`bg-white/60 rounded-2xl p-6 md:p-8`)

### 4. Community — Add dim card background
- Same subtle card treatment as case studies (`bg-white/60 rounded-2xl p-6 md:p-8`)

---

### Technical Details

| File | Change |
|---|---|
| `Testimonials.tsx` line 38 | Change title text and increase font size to `text-2xl md:text-3xl font-serif`, remove uppercase |
| `Projects.tsx` lines 38-60 | Wrap each project's inner content in a `bg-white/60 rounded-2xl p-6 md:p-8` container |
| `Community.tsx` lines 14-34 | Restructure to match case study layout (image left/right + text), wrap in dim card bg |

