

## New CVS Health Case Study Page

Create a new case study page for CVS Health with an NDA-friendly approach: a playful "oops" hero section explaining the NDA, followed by two work description sections.

### Structure

**1. New file: `src/pages/CaseStudyCVS.tsx`**

- **Hero**: Back button, title "CVS Health", NDA message styled playfully (like a friendly 404) -- "Oops! This one's under wraps" with explanation text about the NDA and a CTA to chat (link to `/contact`)
- **Section 1 -- "Specialty Central"**: `SplitSection` with label like "Project One" describing design work improving Specialty Central -- include a problem framing heading, description paragraph, and a results-style grid with placeholder metrics
- **Section 2 -- "Benefits Verification"**: `SplitSection` with label like "Project Two" describing design work supporting benefits verification -- same structure as above
- `CaseStudyNav` and `Footer` at bottom

**2. Update `src/App.tsx`**: Add route `/case-study/cvs-health`

**3. Update `src/components/CaseStudyNav.tsx`**: Add CVS Health to the `caseStudies` array

### Design Notes
- Follows existing case study page patterns (cream bg, same container/padding, SplitSection layout)
- Hero section uses a lock or shield icon instead of an image, with the NDA message styled warmly
- No screenshots/images (NDA), text-only sections
- Contact CTA button links to `/contact`

### Files Modified
- `src/pages/CaseStudyCVS.tsx` (new)
- `src/App.tsx`
- `src/components/CaseStudyNav.tsx`

