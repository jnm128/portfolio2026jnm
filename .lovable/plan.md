

## Add Community Image to Book Club Hero

Replace the current hero image (`bookClubHero`) with the community image from the homepage (`/lovable-uploads/community-books.jpeg`).

### Change

**`src/pages/BookClub.tsx`** (line 191):
- Change `src={bookClubHero}` to `src="/lovable-uploads/community-books.jpeg"`
- Update the alt text to `"Fresh Perspectives Book Club"`
- Optionally remove the unused `bookClubHero` import (line 6) if no longer used elsewhere

### Files Modified
- `src/pages/BookClub.tsx`

