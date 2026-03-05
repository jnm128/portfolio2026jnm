

## Plan

Add an external link icon next to each project name in the Past/archives table rows.

**`src/components/Projects.tsx`**:
- Import `ExternalLink` from `lucide-react`
- Add `<ExternalLink size={14} />` inside the `<Link>` element next to the project name, using `inline-flex items-center gap-1.5` for alignment

