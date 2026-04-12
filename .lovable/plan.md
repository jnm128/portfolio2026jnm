

## Make About Page Top Section Fill Viewport Height

The top intro section currently uses fixed padding (`pb-24 md:pb-32`), so the dark "Beyond the Pixels" section peeks into view on larger screens before scrolling.

### Fix

**File**: `src/pages/AboutPage.tsx`, line 41

Change the top section to use `min-h-[calc(100vh-7rem)]` (subtracting the header height ~`pt-28`) so it always fills at least the full viewport. This ensures the dark section is hidden until the user scrolls.

Change:
```tsx
<section className="pt-0 pb-24 md:pb-32 bg-[#F8F6F1]">
```
To:
```tsx
<section className="pt-0 pb-24 md:pb-32 bg-[#F8F6F1] min-h-[calc(100vh-7rem)] flex flex-col justify-center">
```

The inner `max-w-4xl` div and its content remain unchanged. The `flex flex-col justify-center` vertically centers the bio content within the viewport-height section.

### Files Modified
- `src/pages/AboutPage.tsx`

