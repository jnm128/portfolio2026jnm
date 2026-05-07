## Add looping video to Gordon Center case study hero

Replace the static hero image on the Gordon Center case study page with the newly uploaded `download_3.mp4`, matching the autoplay/loop pattern used for CVS Health and Tappt Health.

### Steps

1. Copy `user-uploads://download_3.mp4` → `src/assets/gordon-center-hero.mp4`.
2. In `src/pages/CaseStudyMindfulWellness.tsx`:
   - Import the video.
   - Swap the hero `<img>` (`/lovable-uploads/34a58283-8b82-48f9-88f4-2c88b069921d.png`) for `<video autoPlay loop muted playsInline preload="auto">` keeping the same `rounded-2xl`, `aspect-[16/9] md:aspect-[21/9]`, `object-cover` styling.
3. Leave the Final Designs section image untouched (lightbox is image-only).
4. Leave the homepage / Work page card thumbnail unchanged.
