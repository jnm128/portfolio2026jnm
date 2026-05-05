## Skill Set heading: rotating word like homepage "Intention"

### Changes in `src/pages/AboutPage.tsx`

1. **Imports**: add `useEffect` to the React import.
2. **Add rotating words array** at the top of the file:
   ```ts
   const meetingWords = ['Meeting', 'Teams', 'Google Meet', 'Zoom'];
   ```
3. **In `AboutPage` component**, add state + interval (mirrors `AboutSection.tsx`):
   ```tsx
   const [meetingIndex, setMeetingIndex] = useState(0);
   useEffect(() => {
     const id = setInterval(() => setMeetingIndex(i => (i + 1) % meetingWords.length), 2200);
     return () => clearInterval(id);
   }, []);
   ```
4. **Replace the Skill Set heading** (line 163) with:
   ```tsx
   <h2 className="text-3xl md:text-5xl font-serif text-title mb-6">
     What I bring to the{' '}
     <span key={meetingWords[meetingIndex]} className="inline-block animate-fade-in italic">
       {meetingWords[meetingIndex]}
     </span>
     {' '}Room
   </h2>
   ```
   The italic rotating word cycles through Meeting → Teams → Google Meet → Zoom → back to Meeting every 2.2s, matching the homepage "Intention" treatment.