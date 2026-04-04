

## Add sub helper text to "More About Us" section

The previous plan renamed "Past Reads" to "More About Us" and removed the helper text. Now we'll add back a subtitle paragraph mimicking the "Beyond the Pixels" pattern from the About page.

### Change (1 file: `src/pages/BookClub.tsx`)

On line 153-156, update the section title to "More About Us" and change the `<p>` helper text to match the tone/style of "Beyond the Pixels" subtitle:

```tsx
<h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">More About Us</h2>
<p className="text-base md:text-lg text-muted-foreground font-serif max-w-2xl leading-relaxed">
  What we're reading, discussing, and exploring together beyond the screen.
</p>
```

This mirrors the About page's "Beyond the Pixels" pattern: large serif heading + a single descriptive line in muted text below.

