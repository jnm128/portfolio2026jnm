

## Case Study Layout Updates

### Changes

**1. Move metadata grid below hero image (3 case study files)**

In `CaseStudyMindfulWellness.tsx`, `CaseStudyArtisanMarketplace.tsx`, and `CaseStudyCreativeStudio.tsx`:
- Remove the metadata grid (My Role, The Problem, My Team, Timeline) from inside the `max-w-4xl` wrapper above the image
- Place it after the hero image `div`, still inside the main container
- Keep the title and description in the `max-w-4xl` wrapper with standard `px-8 md:px-16` padding

Structure becomes:
```text
<section hero>
  <div container px-8 md:px-16>
    Back button
    <div max-w-4xl>
      <h1>Title</h1>
      <p>Description</p>
    </div>
    <div hero image rounded-2xl mt-12>...</div>
    <div metadata grid mt-12>        ← moved below image
      My Role | The Problem
      My Team | Timeline
    </div>
  </div>
</section>
```

**2. Remove star icon from SplitSection labels**

In `src/components/SplitSection.tsx` line 16: remove the `<span className="text-muted-foreground text-sm">✦</span>` element and the `gap-2` from the parent flex container.

### Files to modify
1. `src/components/SplitSection.tsx` — remove ✦ icon
2. `src/pages/CaseStudyMindfulWellness.tsx` — move metadata below image
3. `src/pages/CaseStudyArtisanMarketplace.tsx` — move metadata below image
4. `src/pages/CaseStudyCreativeStudio.tsx` — move metadata below image

