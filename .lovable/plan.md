

## Fix: Equal Spacing Around Divider Line

### Problem
The helper text has `mb-8` (2rem) bottom margin plus `mt-2` on the stats container, creating ~2.25rem above the divider line. Below the line, there's only `pt-6` (1.5rem). The spacing is uneven.

### Fix — `src/pages/BookClub.tsx`

Equalize spacing by changing the description paragraph's `mb-8` to `mb-6` and removing `mt-2` from both stats blocks. This gives 1.5rem above and 1.5rem below the divider line.

**Changes:**
1. **Line 119** — Change `mb-8` to `mb-6` on the `<p>` tag
2. **Line 122** — Change `pt-6 mt-2` to `py-6` on the desktop stats (`hidden lg:grid`)
3. **Line 141** — Change `pt-6 mt-2` to `py-6` on the tablet stats (`lg:hidden`)

### File modified
- `src/pages/BookClub.tsx`

