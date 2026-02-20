
## Changes Overview

Four targeted changes across four files:

### 1. `src/components/BioBlurb.tsx` — Remove face icon, update text
- Remove the `<div>` containing the circular profile image entirely
- Replace first `<p>` with: **"Joanna Minott, Product designer"**
- Replace second `<p>` with: **"I build software and digital experiences that feel more human."**
- Keep left-aligned layout, same font styling

### 2. `src/components/Hero.tsx` — Remove overlay text
- Remove the `<div>` at the bottom of the slideshow that contains the `<h1>` headline ("Health focused Product building grounded in clarity and emotion.")
- Remove the dark gradient overlay (`bg-gradient-to-t from-black/70...`) since it was there primarily to make that text readable — the slide indicators can remain without it, or the gradient can be lightened to just keep the indicators visible
- Keep the slide indicator dots

### 3. `src/components/Community.tsx` — No changes needed (already matches footer styling)

### 4. Create `src/components/Collab.tsx` — New "Interested in collaborating" section
- Large, bold call-to-action section placed between Community and Footer
- Same dark background as Community + Footer (`bg-surface-6 text-surface-1`) to create a continuous dark band at the bottom of the page
- Content: a large serif headline like **"Interested in collaborating?"** with a sub-line and a CTA button linking to `/contact`
- Generous padding (`py-24 md:py-32`) to make it feel like a "large section"

### 5. `src/pages/Index.tsx` — Add Collab section
- Import and render `<Collab />` between `<Community />` and `<Footer />`

### File Summary
| File | Change |
|---|---|
| `src/components/BioBlurb.tsx` | Remove image, update both text lines |
| `src/components/Hero.tsx` | Remove overlay headline + gradient |
| `src/components/Collab.tsx` | Create new collaboration CTA section |
| `src/pages/Index.tsx` | Add `<Collab />` between Community and Footer |
