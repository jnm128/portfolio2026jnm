

## Plan: Add consistent bottom padding to Testimonials and Community sections

Both sections currently use tight padding that doesn't match the rest of the page.

### Current vs Proposed

| Section | Current | Proposed |
|---------|---------|----------|
| **Testimonials** | `pt-12 pb-6 md:pt-20 md:pb-10` | `pt-12 pb-12 md:pt-20 md:pb-20` |
| **Community** | `pt-6 pb-12 md:pt-10 md:pb-20` | `pt-12 pb-12 md:pt-20 md:pb-20` |

This gives both sections symmetric `py-12 md:py-20` padding, matching the standard section spacing noted in the design system.

### Files

- **`src/components/Testimonials.tsx`** — update padding classes
- **`src/components/Community.tsx`** — update padding classes

