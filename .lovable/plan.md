

## Summary of Changes

Five targeted updates across the homepage, Book Club page, and About page.

---

### 1. Remove Recent/Past Toggle Switch (Projects.tsx)

Remove the toggle switch UI (lines 57-75) and the `activeTab` state (line 14), the `archives` array (lines 16-22), and the archives view (lines 110-137). Always show the `projects` cards directly. Remove the `useState` import if no longer needed, and the `ExternalLink` import.

### 2. Remove Nightlife Ecosystem Case Study Card (Projects.tsx)

Remove the third project from the `projects` array (lines 37-42): "Building the next night life ecosystem".

### 3. Fresh Perspectives Title Font (BookClub.tsx)

Line 118: Change `font-space-grotesk font-extrabold` to `font-serif font-medium` to match the rest of the site's heading style.

### 4. Book Modal Close Button — Match Resume Panel X (dialog.tsx)

The dialog close button (lines 45-49) already uses the two-crossing-spans pattern. Add a hover state matching the resume panel: `hover:bg-black/5 transition-colors` on the close button wrapper, and add `rounded-full p-2` for consistent sizing. Currently it has no hover background — the resume panel uses `hover:bg-black/5`.

Update line 45:
```
<DialogPrimitive.Close className="absolute right-4 top-4 rounded-full p-2 hover:bg-black/5 transition-colors focus:outline-none disabled:pointer-events-none">
```

### 5. FAQ Hover State on Book Club Page (BookClub.tsx)

Add a hover state to each FAQ button row (line 351) similar to the Contact page's interactive rows. Add `hover:opacity-70 transition-opacity` to the FAQ button, making the entire row respond on hover.

### 6. Remove ExternalLink Icon from "Connect on LinkedIn" CTA (AboutPage.tsx)

Line 85: Remove `<ExternalLink className="w-4 h-4" />` from the LinkedIn button, and remove the `ExternalLink` import if unused elsewhere.

---

### Files Modified
- `src/components/Projects.tsx`
- `src/pages/BookClub.tsx`
- `src/components/ui/dialog.tsx`
- `src/pages/AboutPage.tsx`

