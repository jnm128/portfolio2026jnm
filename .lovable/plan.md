

## Update Book Detail Modal

In `src/pages/BookClub.tsx`, remove two elements from the book detail dialog:

1. **Remove "Get the Book" button** — delete the `<a>` tag at the bottom of the modal that links externally with "Get the Book" text
2. **Remove "Jo's Rating" section** — delete the rating label and star icons block

The title will already be an underlined external link (from the previous plan), so the separate button is redundant.

### File
- `src/pages/BookClub.tsx`

