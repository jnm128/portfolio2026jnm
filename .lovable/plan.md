
## Update Projects Toggle to Custom Circle-and-Line Style

Apply the same custom toggle design from the Packages section to the Selected Work/Archives toggle in the Projects component.

### Changes

**File: `src/components/Projects.tsx`**

Replace the current rounded pill-style toggle button with:
- A thin horizontal line (`h-[2px] bg-foreground/20`) as the track
- A circular indicator (`w-5 h-5 rounded-full border-2 border-foreground bg-background`) that slides left/right based on the active state
- Smooth transition using `transition-all duration-400 ease-out`
- The circle sits at `left-0` when "recent" is active and slides to `left-[calc(100%-1.25rem)]` when "archives" is active

This matches the toggle already implemented in the Packages section for visual consistency across the site.
