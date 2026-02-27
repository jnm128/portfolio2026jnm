

## Summary

Add a two-sentence headline/subheading below the "Joanna Minott, UX Designer" title, and remove the frosted overlay card from the hero image.

---

### Changes

**File: `src/components/Hero.tsx`**

1. Add a two-sentence subtitle paragraph below the h1, using the existing bio text ("Product designer by day, community builder by night") plus the second line that was previously removed ("I build software and digital experiences that connect people and spark meaningful change."). Style it as `text-base md:text-lg text-muted-foreground font-serif mb-6 max-w-2xl`.

2. Remove the entire overlay card div (the `absolute bottom-6 left-6` container with profile image and text).

No new files or dependencies needed.

