## Goal
Add a tab filter to the Work page (`/work`) that organizes case studies into two categories: **Modernizations** and **0 to 1**. All four current projects start under Modernizations; "0 to 1" appears empty for now.

## Changes

### `src/pages/Work.tsx`
1. Add a `category` field to each project in the `projects` array:
   - CVS Health → `'modernization'`
   - Viveka Health → `'modernization'`
   - Tappt Health → `'modernization'`
   - Mindful Wellness → `'modernization'`
2. Add local state `activeTab` defaulting to `'modernization'`.
3. Render a tab row directly under the hero header (above the project grid) with two minimal text pills: **Modernizations** and **0 to 1**.
   - Style: plain text, `text-sm uppercase tracking-widest`, active = `text-title` with a 1px underline (`border-b border-title pb-1`); inactive = `text-hint hover:opacity-70`.
   - Spacing: horizontal flex gap-8, aligned with the page's `max-w-[1600px]` container, `mt-12`.
4. Filter the rendered project grid by `activeTab`.
5. When the active tab has no projects, show a centered muted message: *"More coming soon…"* (replacing the current bottom "More coming soon..." line for that tab) so the "0 to 1" tab isn't blank.

## Out of scope
- No changes to the homepage `Projects.tsx` grid.
- No routing/query-param sync (tab state is local only).
- No reassignment of categories — user will adjust later.
