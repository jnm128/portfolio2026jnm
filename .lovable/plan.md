

## Plan

Update the Past/archives list in `src/components/Projects.tsx` to a minimal table-style layout with column headers and expanded data fields.

### Data changes
- Update the `archives` array to include new fields: `focusArea`, `industry`, `year`, and `link` (to case study page)
- Fields: Project Name, Company/Org, Focus Area, Industry, Role, Year

### Layout changes
- Add a header row with column labels: Project Name, Company / Org, Focus Area, Industry, Role, Year — styled as small uppercase muted text
- Each row becomes a simple border-bottom row (no card backgrounds, no rounded corners, no padding boxes)
- Project name becomes a `<Link>` to the case study page with hover underline
- Remove `bg-white/60 rounded-2xl p-5 md:p-6` wrapper per row — replace with a simple `py-4 border-b border-foreground/10` divider style
- Keep the flex-based column layout (no actual `<table>` element) for responsive control

### Minimal style
- Header: `text-xs uppercase tracking-wider text-muted-foreground` with bottom border
- Rows: clean text, no background, thin bottom border only
- Name column: `font-medium` with link styling

