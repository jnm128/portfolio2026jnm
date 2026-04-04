

## Add divider lines under section subtitles and reduce hero-to-Who We Are spacing

**File:** `src/pages/BookClub.tsx`

### 1. Add divider lines under each section subtitle

Following the About page pattern where a `border-t` line appears directly under subtitle labels, add a divider line under each uppercase section heading:

- **Who We Are** (line 148): Add `border-b border-foreground/10 pb-4` to the h2, or wrap subtitle + divider so a line appears between the title and the body text
- **Previous Reads** (line 181): Same treatment under the "Previous Reads" heading
- **How the Community Works** (line 227): Same treatment
- **Frequently Asked Questions** (line 300): Same treatment

The implementation will change each `mb-6` on the h2 to include a bottom border and appropriate spacing, e.g.: `<h2 className="... pb-4 mb-6 border-b border-foreground/10">`

### 2. Reduce spacing between hero image and Who We Are section

- Change hero section bottom padding from `pb-16 md:pb-24` (line 102) to `pb-8 md:pb-12` to tighten the gap between the hero image and the Who We Are section below it.

