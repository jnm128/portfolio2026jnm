

## Add Headline Under "Selected Work"

**File**: `src/components/Projects.tsx`, around line 37

After the "Selected Work" label, add a large headline about helping teams ship products people love.

**Change**: Insert a `FadeIn`-wrapped heading between the "Selected Work" paragraph (line 37) and the project cards:

```tsx
<FadeIn>
  <h2 className="text-3xl md:text-5xl font-sans font-medium text-foreground leading-tight mb-4">
    Helping teams ship & build products people love
  </h2>
</FadeIn>
```

### Files Modified
- `src/components/Projects.tsx`

