

## Remove Sticky Behavior from "Design, Tech & Intention" Title

**File**: `src/components/AboutSection.tsx`, line 13

Remove `md:sticky md:top-32 self-start` from the left column wrapper so the title and helper text scroll naturally with the page.

Change:
```tsx
<div className="md:sticky md:top-32 self-start">
```
To:
```tsx
<div>
```

### Files Modified
- `src/components/AboutSection.tsx`

