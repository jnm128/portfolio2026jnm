

## Summary

Move the BioBlurb (circular profile photo + two text lines) from above the hero into the hero image itself, as a semi-transparent overlay card anchored to the bottom-left corner.

---

### What You'll See

- The circular profile image and the two lines ("Product designer by day..." and "I build software...") appear as a frosted-glass card sitting on top of the hero slideshow, pinned to the bottom-left
- The card uses a semi-transparent white background with backdrop blur so it's readable over any slide
- The standalone BioBlurb section above the hero is removed, making the hero the first visual element after the header

---

### Technical Details

**File: `src/components/Hero.tsx`**
- Add the BioBlurb content (profile image + two text lines) as an absolutely positioned overlay inside the hero's relative container
- Style: `absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-white/20 backdrop-blur-md rounded-2xl p-4 md:p-5 max-w-md`
- Include the circular profile image (`w-12 h-12`) and text lines with `text-white` styling so they're legible over the image
- Increase top padding on the hero section from `py-6 md:py-8` to `pt-20 md:pt-24` to account for header clearance (previously handled by BioBlurb)

**File: `src/pages/Index.tsx`**
- Remove `<BioBlurb />` from the page layout
- Remove its import

**File: `src/components/BioBlurb.tsx`**
- No changes (kept for potential reuse)

No new dependencies required.

