

## Plan: Update Community section image and nav link

### 1. Copy uploaded image to project
Copy `user-uploads://photo-1630852722708-5e5f534700be.jpeg` to `public/lovable-uploads/community-books.jpeg`

### 2. Update Community section image
**`src/components/Community.tsx`** — Replace the image `src` from the current upload to the new books photo.

### 3. Update "Community" nav link to go to `/book-club` page
**`src/components/Header.tsx`**:
- **Desktop nav (lines 230-244)**: Replace the `<button>` with a `<Link to="/book-club">` so it navigates directly to the Fresh Perspectives page.
- **Mobile nav (line 296)**: Replace `<MobileNavLink>` with a `<Link to="/book-club">` with the same styling and `setIsMobileMenuOpen(false)` on click.

