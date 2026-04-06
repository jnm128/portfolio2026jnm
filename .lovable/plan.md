

## Add Mission Headline to "Who We Are" Section

### File: `src/pages/BookClub.tsx` (lines 144-156)

Keep the existing structure — small uppercase "Who We Are" label on top, then add a bold serif h2 mission statement headline below it, followed by the existing paragraph.

**Replace lines 147-153 with:**

```tsx
<FadeIn>
  <h2 className="text-sm font-medium uppercase tracking-widest text-foreground/60 mb-6">Who We Are</h2>
</FadeIn>
<FadeIn delay={200}>
  <h3 className="text-2xl md:text-4xl font-serif font-medium text-foreground mb-6 leading-tight">
    A space where UX professionals slow down, think deeply, and grow beyond the screen.
  </h3>
</FadeIn>
<FadeIn delay={400}>
  <p className="text-base md:text-lg text-muted-foreground font-serif leading-relaxed">
    I founded Fresh Perspectives as a space for like-minded UX professionals...
  </p>
</FadeIn>
```

Three staggered `FadeIn` layers: label → headline → paragraph, creating a cascading reveal.

