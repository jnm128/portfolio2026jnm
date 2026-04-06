

## Combine Helper Text & Move Availability Indicator

### Changes in `src/pages/Contact.tsx`

1. **Merge the two subtitle paragraphs** (lines 25-30) into a single `<p>` tag, combining "Interested in my expertise..." and "I typically respond within 24 hours..." into one sentence/block.

2. **Move the green pulse indicator** to the end of the combined string instead of the beginning. Place it inline after the text using `inline-flex` alignment.

Result:
```tsx
<p className="text-base md:text-lg text-white/60 font-serif mb-12 inline-flex items-center flex-wrap gap-1">
  Interested in my expertise in UX or product? I typically respond within 24 hours
  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse inline-block" />
</p>
```

3. **Remove the separate Availability section** at the bottom (lines 85-95) since the indicator is now integrated into the subtitle area.

### File
- `src/pages/Contact.tsx`

