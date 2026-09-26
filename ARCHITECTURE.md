# Architecture

The goal is a small codebase that scales to many grades, modules and lessons without a rewrite.
Content is data, and interactions are reusable components. A lesson page only composes them.

## Project structure

```text
src/
  main.tsx                    # mounts <I18nProvider><App/>
  App.tsx                     # hash routing: Home ↔ Lesson; global MotionConfig (reduced motion)
  i18n/
    types.ts                  # Locale, LocalizedText, direction per locale
    strings.ts                # interface strings (buttons, feedback, labels) in ar/fr/en
    index.tsx                 # I18nProvider, useI18n(): { locale, dir, setLocale, t, tx }
  data/
    types.ts                  # the content schema (Lesson, sections, quiz, …)
    grades.ts                 # grade + module definitions
    lessons/
      prophet-birth-youth.ts  # the reference lesson (all three languages side by side)
    index.ts                  # getGrades / getModules / getLessons / getLesson (the ONLY data entry point)
  components/
    ui/                       # generic primitives: SmartImage, FeedbackMessage, LessonProgress,
                              # SectionHeader, LanguageSwitcher, CertaintyBadge
    activities/               # reusable interaction engine (see below)
  features/lesson/
    sections.tsx              # maps each section `kind` → activity components
  pages/
    HomePage.tsx              # identity, grade, module, lesson cards
    LessonPage.tsx            # step-by-step lesson shell: progress, navigation, presentation mode
  lib/
    useHashRoute.ts           # tiny router (#/, #/lesson/<id>)
    useLessonProgress.ts      # localStorage progress per lesson
    usePresentationMode.ts    # fullscreen + large-type classroom mode
    utils.ts                  # cn, shuffle, safe localStorage helpers
  styles/index.css            # Tailwind layers, component classes (.card, .btn-*), presentation scale
public/images/lessons/<lesson-id>/   # illustrations (Flux-generated PNG)
```

## Layers and their rules

1. **Data** (`src/data`) is plain, serializable objects. No JSX, no functions. That is what lets an API replace it later.
2. **Activities** (`src/components/activities`) are generic. They receive already-resolved props (strings, ids, image paths) or schema pieces, and never import a specific lesson. None of them contain lesson-specific logic.
3. **Sections** (`src/features/lesson/sections.tsx`) are the glue. One small component per section `kind` localizes the data and places activities in a layout.
4. **Pages** own navigation and persistence only.

## Lesson data model

```ts
Lesson {
  id, gradeId, moduleId,
  title, description, coverAlt: LocalizedText
  estimatedMinutes, cover
  sections: LessonSection[]
}

LessonSection =                  // discriminated by `kind`
  | HeroSection       'hero'        hook screen
  | ExplorerSection   'explorer'    image + hotspots
  | SortingSection    'sorting'     put items in order (items stored in correct order)
  | StorySection      'story'       image cards + reflection multi-select
  | TimelineSection   'timeline'    clickable stages
  | PlacementSection  'placement'   drop cards onto timeline slots
  | ValueSection      'value'       choice with per-option feedback + value flip cards
  | QuizSection       'quiz'        questions: mcq | truefalse | ordering | matching | visual
  | MemorySection     'memory'      study → flip → recall rounds
  | CompletionSection 'completion'  takeaway + "what you learned"
```

Design choices:

- **Correct answers live in the data** (`correctId`, `answer`, sorting items in correct order, `slotId`). Components shuffle for display.
- **Every wrong answer can be explained** (`feedback`, `hint`, `explanation`). The UI never just says "wrong".
- **`certainty?: 'approximate'`** on timeline steps and story cards renders an "approximate age" badge. Uncertain details stay visible as uncertain instead of being presented as fact.
- **`audio?: LocalizedAudio`** exists on the hero, hotspots, story cards and timeline steps. No audio player is built yet. When recordings exist, add the files and a small player component. The data shape is already there.

### Replacing local data with an API

Components read content only through `src/data/index.ts`. To move to a backend, make those functions fetch (e.g. return promises, wrap them with a loader or React Query) and keep the returned shapes identical to `data/types.ts`. Progress follows the same pattern: `useLessonProgress` exposes `{ progress, goTo, reset }`, and only its storage calls need to change.

## Localization

- `LocalizedText = Record<'ar' | 'fr' | 'en', string>`. Content keeps all translations **side by side** in one lesson file. This is deliberate: translators and reviewers see the Arabic reference next to each translation, and a missing translation is a TypeScript error instead of a silent blank.
- Interface strings live in `i18n/strings.ts`. `t('lesson.next')` is type-checked: an unknown key does not compile.
- Content is resolved with `tx(value)`.
- `I18nProvider` sets `<html lang dir>`. Arabic is RTL, French and English are LTR. The choice persists in localStorage (`qs.locale`), and Arabic is the default.
- **Direction-neutral styling:** use logical utilities (`ms-/me-`, `ps-/pe-`, `start-/end-`, `text-start`, `border-s`) and never `left/right` for layout. Directional icons (arrows) are swapped based on `dir`. The one intentional exception is hotspot coordinates: the artwork does not mirror, so hotspots use physical `left`.
- Numbers and years use the `.num` class (isolated LTR) so digits never get re-ordered inside Arabic sentences.

### Adding a language

1. Add the code to `Locale`, `LOCALES`, `DIRECTION` and `LOCALE_LABEL` in `i18n/types.ts`.
2. Run `npx tsc -b`. Every `LocalizedText` missing the new key becomes a compile error, which gives you an exact translation checklist in `strings.ts` and the lesson files.
3. For a new RTL language (e.g. Urdu), set its direction to `rtl` and add its font to `index.html` and `styles/index.css`.

## Reusable interaction components

| Component | Purpose | Input |
|---|---|---|
| `HotspotExplorer` | Clickable points on an illustration, discovery counter | image, hotspots |
| `SortingGame` | Reorder by drag (handle) or ↑/↓ buttons; check; explained answer | items in correct order |
| `StoryCard` | Image-first card; tap reveals the fact | card |
| `ReflectionPicker` | Multi-select "what did we notice?" with per-option reasoning | options with `isRelevant` |
| `InteractiveTimeline` | Stops with detail panel; arrow keys follow reading direction | steps |
| `PlacementGame` | Drag and drop, or tap card then tap slot; wrong drops explain and return | slots, cards |
| `MultipleChoice` | Single attempt (quiz) or `allowRetry` with per-option feedback | options, correctId |
| `TrueFalse`, `VisualChoice`, `MatchingGame` | Quiz interactions | question data |
| `QuizRunner` | One question at a time, first-try score, retry | questions |
| `MemoryGame` | Study (8s or "I'm ready"), cards flip, recall rounds | cards, rounds |
| `ValueCard` | Flip card: value on the front, story evidence on the back | value, evidence |

Shared UI: `FeedbackMessage` (correct / incorrect / info, all encouraging), `LessonProgress`, `SmartImage`, `CertaintyBadge`, `SectionHeader`.

Interaction principles every activity follows:

- It works with a mouse, touch and a keyboard. Drag always has a tap or button alternative.
- Touch targets are at least ~44px.
- Wrong answers never block progress. The footer "Next" button is always available.
- `MotionConfig reducedMotion="user"` plus a CSS media query honor the OS reduced-motion setting.

## Adding a new lesson

1. Create `src/data/lessons/<lesson-id>.ts` exporting a `Lesson` (copy the reference lesson's structure).
2. Register it in the `lessons` array in `src/data/index.ts`.
3. Put its illustrations in `public/images/lessons/<lesson-id>/` and add their prompts to `IMAGE_PROMPTS.md`.

It then appears on the home page with progress, routing and presentation mode. No component changes are needed.

## Adding a new activity type

1. Build the component in `components/activities/`. Keep it generic and take props, not lesson imports.
2. Add a section type to the `LessonSection` union in `data/types.ts` (for a quiz-only interaction, add a `QuizQuestion` variant instead).
3. Add one `case` in `SectionRenderer` (`features/lesson/sections.tsx`), or in `QuestionBody` inside `QuizRunner`. TypeScript's exhaustive `switch` points you to every place that needs it.
4. Add any new interface strings to `i18n/strings.ts` in all languages.

## Presentation mode

The ⛶ button in the lesson header is for classrooms and projectors:

- Requests browser fullscreen. Where that is unsupported (iPhone Safari), only the layout changes.
- Adds `html.presenting`, which raises the root font size (19px, or 22px from 1600px wide). Because the UI is rem-based, type, spacing and touch targets all scale together.
- Slims the header: the lesson title and language switcher are hidden while progress stays.
- Keyboard: **PageDown / PageUp** (what presenter clickers send) always change the step. **Arrow keys** change the step only when focus is outside the activity, so timeline and sorting arrows still work. Arrow direction follows RTL/LTR. **Esc** exits fullscreen and presentation mode.

## Design system

Defined in `tailwind.config.js` and `styles/index.css`:

- **Palette:** deep emerald (`emerald-deep/leaf/soft/pale`), warm cream (`cream`), sand, subtle gold, clay for gentle "try again" states, dark neutral ink. Green is an accent, not the background.
- **Type:** IBM Plex Sans Arabic for Arabic; Inter for Latin UI text; Fraunces for Latin headings.
- **Shapes:** rounded 2xl/3xl cards, soft shadows, generous spacing. `.card`, `.btn-primary`, `.btn-secondary`, `.btn-ghost`, `.chip`.
- **Motion:** used for section transitions, reveals, correct answers, progress and completion only.
