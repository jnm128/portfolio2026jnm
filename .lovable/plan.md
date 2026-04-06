

## Make Stats Divider Span Full Width on Tablet

### Problem
At 1005px (tablet, below `lg`), the stats divider and grid sit inside the `lg:w-1/2` text column. Since this column has no width constraint below `lg`, it technically spans full width — but `items-start` on the parent flex means content only takes its natural width. The divider line (`border-t`) only stretches as wide as the stats grid content, not the full container.

### Fix — `src/pages/BookClub.tsx`

Move the stats block **outside** the `lg:w-1/2` text column but still inside the outer container, so on tablet (stacked layout) the divider spans the full container width. On desktop, keep it under the text.

**Approach:** Duplicate the stats block with conditional visibility:

1. **Inside the text column** (line 122–139): Add `hidden lg:grid` so it only shows on desktop
2. **After the flex container** (after line 148): Add a new copy with `lg:hidden` so it only shows on tablet/mobile, where it spans the full `max-w-[1600px]` container width

```tsx
{/* Desktop stats — inside text column */}
<div className="hidden lg:grid border-t border-foreground/10 pt-6 mt-2 grid-cols-4 gap-3 md:gap-8">
  ...stats...
</div>

</div> {/* end flex row */}

{/* Tablet/mobile stats — full width */}
<div className="lg:hidden border-t border-foreground/10 pt-6 mt-8 grid grid-cols-4 gap-3 md:gap-8">
  ...stats (same content)...
</div>
```

### File modified
- `src/pages/BookClub.tsx`

