

## Fix: Contact page left & right panels uneven height

**Problem**: The left dark panel uses `md:h-screen md:sticky md:top-0` making it exactly viewport height and sticky, while the right cream panel has no height constraint and is shorter — resulting in mismatched panel heights.

**Fix** (single file: `src/pages/Contact.tsx`):

1. **Right panel**: Add `md:min-h-screen` so it always fills at least the full viewport height, matching the left panel.
2. **Right panel vertical centering**: Use `flex items-center` (or `flex items-end`) so the contact links sit at a natural position within the full-height panel rather than being pushed to the top.

This keeps the left panel sticky at full viewport height and makes the right panel match it visually.

