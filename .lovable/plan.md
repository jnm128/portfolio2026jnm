

## Redesign Recent Work Section with Alternating Layout

### Overview
Rebuild the Recent Work section to match the reference image, with each project card alternating the position of image and text (odd cards: image left/text right, even cards: text left/image right).

### Layout Per Card

Each card is a horizontal row split roughly 60/40:
- **Image side (~3/5)**: Large rounded project image
- **Text side (~2/5)**: Vertically centered block with:
  - Project title (bold heading)
  - Short description paragraph (2-3 sentences)
  - "View case study ->" CTA link in accent color

### Alternating Pattern
- **Card 1 (index 0)**: Image left, text right
- **Card 2 (index 1)**: Text left, image right
- **Card 3 (index 2)**: Image left, text right
- Controlled via `index % 2 === 0` to flip `md:flex-row` vs `md:flex-row-reverse`

On mobile, all cards stack as image on top, text below (consistent `flex-col`).

### What Gets Removed
- Collapsible TLDR sections
- Pill tags
- `Collapsible`, `CollapsibleContent`, `CollapsibleTrigger`, `ChevronDown` imports

### What Gets Added
- `description` field on each project object (short paragraph about the work)
- "View case study ->" CTA link per card
- Alternating flex direction based on index

### File Modified
**`src/components/Projects.tsx`** - single file change:

1. Remove unused imports (Collapsible components, ChevronDown)
2. Add `description` string to each project in the data array
3. Rebuild card markup:
   - Outer flex uses `index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'`
   - Image container: `md:w-3/5`, rounded-xl overflow-hidden
   - Text container: `md:w-2/5`, flex column with vertical centering (`justify-center`)
   - Title, description paragraph, and CTA link
4. Remove tags and TLDR rendering entirely

### Visual Result
```text
Card 1:  [  IMAGE  ] [ Title + Desc + CTA ]
Card 2:  [ Title + Desc + CTA ] [  IMAGE  ]
Card 3:  [  IMAGE  ] [ Title + Desc + CTA ]
```

