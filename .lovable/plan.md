

## Summary

Add left-aligned "Recent Work" and "Archives" tabs above the projects section. The "Recent Work" tab shows the existing case study cards. The "Archives" tab shows a clean list/table of past projects with columns: Project Name, Company, Role, and Team.

---

### What You'll See

- Two tab labels ("Recent Work" and "Archives") left-aligned above the project cards
- Clicking "Recent Work" shows the current case study cards (no change)
- Clicking "Archives" shows a minimal list view with project details in rows
- The active tab will be visually distinguished (e.g. bolder text or underline)

---

### Technical Details

**File: `src/components/Projects.tsx`**

1. Import `useState` from React
2. Add a tab state (`"recent"` | `"archives"`)
3. Add an archives data array with fields: `name`, `company`, `role`, `team`
4. Render two left-aligned tab buttons above the content area, styled minimally (text buttons with an active underline)
5. Conditionally render:
   - **Recent Work tab**: existing case study cards (unchanged)
   - **Archives tab**: a list of rows, each in a `bg-white/60 rounded-2xl` card showing project name, company, role, and team in a horizontal layout

No new files or dependencies needed -- simple `useState` toggle with inline tab styling (no Radix Tabs needed for this minimal design).

