

## Change "How the Community Works" to match "Previous Reads" label style

### Change (1 file: `src/pages/BookClub.tsx`)

**Line 207**: Replace the large serif heading with the small uppercase label style used by "Previous Reads":

```tsx
// From:
<h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">How the Community Works</h2>

// To:
<h2 className="text-sm font-medium uppercase tracking-widest text-foreground/60 mb-6">How the Community Works</h2>
```

This makes both sub-labels ("Previous Reads" and "How the Community Works") visually consistent.

