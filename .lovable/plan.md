

## Add TLDR Section Above Problem Space on All Case Study Pages

Add a new section between the hero and the "Problem Space" section on each case study page, using the same `SplitSection` layout with "TLDR" as the label.

### Content Structure

Each TLDR section will display metadata in a clean grid:

```
TLDR                Client: [name]
                    Category: [type]
                    Industry: [industry]
                    Responsibilities: [list]
                    My Role: [role]
                    Timeline: [duration]
```

### Implementation

**Files**: `src/pages/CaseStudyMindfulWellness.tsx`, `src/pages/CaseStudyArtisanMarketplace.tsx`, `src/pages/CaseStudyCreativeStudio.tsx`

Insert a new `<section>` block between the hero and problem space sections on each page:

```tsx
<section className="py-12 md:py-20 bg-[#F8F6F1]">
  <div className="container mx-auto px-8 md:px-16">
    <SplitSection label="TLDR">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-6">
        <div>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">Client</p>
          <p className="text-base font-medium">...</p>
        </div>
        <!-- repeat for Category, Industry, Responsibilities, My Role, Timeline -->
      </div>
    </SplitSection>
  </div>
</section>
```

**Per-page placeholder content** (values are placeholders the user can update later):

- **Mindful Wellness**: Client: Mindful Wellness / Category: Product Design / Industry: Health & Wellness / Responsibilities: UX/UI Design, Research / My Role: Lead Designer / Timeline: 8 weeks
- **Artisan Marketplace**: Client: Artisan Collective / Category: E-commerce / Industry: Retail & Crafts / Responsibilities: UX/UI Design, Development / My Role: Lead Designer / Timeline: 12 weeks
- **Creative Studio**: Client: Lumina Creative Studio / Category: Brand Identity / Industry: Creative Services / Responsibilities: Brand Strategy, Web Design / My Role: Lead Designer / Timeline: 6 weeks

### Files Modified
- `src/pages/CaseStudyMindfulWellness.tsx`
- `src/pages/CaseStudyArtisanMarketplace.tsx`
- `src/pages/CaseStudyCreativeStudio.tsx`

