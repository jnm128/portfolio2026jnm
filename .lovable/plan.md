

## CVS Case Study Page Updates

Three changes to align the CVS case study with the other case studies and the homepage card content.

### 1. Match hero structure to other case studies (`src/pages/CaseStudyCVS.tsx`)

Replace the current hero with the same pattern used in Artisan Marketplace etc.:
- Same `pt-20 md:pt-24 pb-10 md:pb-16` padding
- Same back button styling
- **Title**: Pull from the first project card — "Shipping colleague facing design experience with CVS Health"
- **Helper text**: Use the card description — "Led end-to-end product design for an internal tools platform, reducing user errors by 40% and increasing task completion rates across key workflows."
- Replace the free-floating NDA content with a styled "hero image frame" — a `rounded-2xl` container (same dimensions as other hero images, `aspect-[4/3] md:aspect-[16/10]`) with a dark/muted background containing the shield icon, "Oops!" heading, NDA explanation text, and "Let's Chat" CTA centered inside it

### 2. Make project sections dark themed (`src/pages/CaseStudyCVS.tsx`)

Wrap both "Specialty Central" and "Benefits Verification" sections in dark backgrounds:
- Change section background to `bg-[#1C1C1C]`
- Add `data-theme="dark"` attribute for header theme detection
- Invert text colors: headings to `text-white`, descriptions to `text-white/70`, labels to `text-white/50`
- Change stat cards from `bg-background` to `bg-white/10` with white text
- Change SplitSection label text to light variants

### 3. Use `<main className="relative">` to match other case studies

Change from `min-h-screen bg-[#F8F6F1]` to `relative` on the `<main>` tag.

### Files Modified
- `src/pages/CaseStudyCVS.tsx`

