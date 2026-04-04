

## Make case study heroes match Book Club hero style

The Book Club hero uses a **contained, rounded image** with surrounding padding on a cream background, while all three case study heroes use **full-bleed images** with no padding or rounding.

### Current (case studies)
- `section` is full-width with no padding around it, no border radius
- Background image via `PopIn` with `absolute inset-0 -z-10`
- No cream background wrapper

### Target (Book Club style)
- Cream background (`bg-[#F8F6F1]`) on outer section
- Top padding for header clearance (`pt-20 md:pt-24`)
- Horizontal padding (`px-4 md:px-8`)
- Inner container with `rounded-3xl overflow-hidden`
- Image positioned with `absolute inset-0` inside the rounded container
- `isolate` on container for proper stacking

### Files to change (3)
1. **`src/pages/CaseStudyMindfulWellness.tsx`** — Restructure hero section
2. **`src/pages/CaseStudyCreativeStudio.tsx`** — Same restructure
3. **`src/pages/CaseStudyArtisanMarketplace.tsx`** — Same restructure

For each file, replace the hero `<section>` with:
```tsx
<section className="pt-20 md:pt-24 px-4 md:px-8 bg-[#F8F6F1]">
  <div className="relative isolate min-h-[70vh] flex items-center overflow-hidden rounded-3xl">
    <div className="absolute inset-0 z-0">
      <img src="..." alt="..." className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40" />
    </div>
    <div className="relative z-10 container mx-auto px-8 md:px-16 py-20 md:py-32">
      {/* existing back link + title content, unchanged */}
    </div>
  </div>
</section>
```

Each case study keeps its own image, title, subtitle, and "Back to Projects" link. Only the wrapper structure changes.

