# Quranic School — Interactive MVP

An interactive Islamic-education platform for Generation Alpha and Gen Z.
This MVP ships **one complete reference lesson**:

> **ميلاد الرسول ﷺ، نشأته وشبابه** — The Birth of Prophet Muhammad ﷺ, His Childhood and Youth

The lesson follows **See → Explore → Interact → Think → Discover → Practice → Remember**:
it is a sequence of 10 short, image-led, interactive steps, not an article.

No backend, database or accounts. Everything runs from local data.

## Run

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Requires Node 18+.

## What's inside

| # | Step | Interaction |
|---|------|-------------|
| 01 | Hook: a night above Arabia | Full-bleed hero, one question |
| 02 | Explore Makkah | Hotspot map (5 points, discovery counter) |
| 03 | The birth | Chronological sorting (drag or arrow buttons) |
| 04 | Childhood | Tap-to-reveal story cards + multi-select reflection |
| 05 | Youth | Interactive timeline (tap / arrow keys) |
| 06 | Place the events | Drag-and-drop or tap-to-place onto the timeline |
| 07 | What can we learn? | Choice with explained wrong answers + value flip cards |
| 08 | Mini challenge | 5 questions: multiple choice, true/false, image choice, ordering, matching |
| 09 | What do you remember? | Positional memory game, 2 rounds |
| 10 | Completion | Celebration, key takeaway, "what did you learn", replay any activity |

- **Languages:** Arabic (RTL, default), French, English. Switch at any time; direction flips automatically.
- **Progress:** stored in `localStorage` (current step, visited steps, completion). Reloading resumes where you left off.
- **Presentation mode:** the ⛶ button in the lesson header goes fullscreen with larger type for classrooms and projectors. PageDown/PageUp (presenter clickers) or the arrow keys move between steps, and Esc exits.
- **URLs:** hash routes (`#/` and `#/lesson/<id>`), so any static host works.

## Stack

React 18 · TypeScript · Vite · Tailwind CSS · Framer Motion · lucide-react. No UI framework.

## Documentation

- [ARCHITECTURE.md](ARCHITECTURE.md): structure, data model, localization, and how to add a lesson, a language or an activity
- [CONTENT_GUIDELINES.md](CONTENT_GUIDELINES.md): religious, historical and pedagogical rules for content
- [IMAGE_PROMPTS.md](IMAGE_PROMPTS.md): the Flux prompt for every illustration and the generation workflow
