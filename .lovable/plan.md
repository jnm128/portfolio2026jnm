

## Fix About Page On-Load Animation Consistency

### Problem
The About page profile image has an extra `animate-fade-in` CSS class (line 55 of `AboutPage.tsx`) that adds a redundant 0.5s fade+slide animation on top of the `FadeIn` component wrapper. No other page does this -- it creates a double-animation effect unique to the About page.

### Fix

**File**: `src/pages/AboutPage.tsx`, line 55

Remove `animate-fade-in` from the image's className so it inherits only the parent `FadeIn` component animation (matching all other pages).

Change:
```tsx
className="w-full h-full object-cover animate-fade-in"
```
To:
```tsx
className="w-full h-full object-cover"
```

### Files Modified
- `src/pages/AboutPage.tsx`

