import type { LocalizedText } from '@/i18n/types'

// Audio is optional everywhere; paths per locale, e.g. { ar: '/audio/…/intro.ar.mp3' }.
export type LocalizedAudio = Partial<Record<keyof LocalizedText, string>>

// 'established' = agreed upon by the classical Seerah sources.
// 'approximate' = widely accepted but the exact age/date is not certain.
export type Certainty = 'established' | 'approximate'

export type LessonStatus = 'draft' | 'published'

export type Grade = {
  id: string
  title: LocalizedText
  ageRange: string
  status?: LessonStatus
}

export type Module = {
  id: string
  gradeId: string
  title: LocalizedText
  description: LocalizedText
}

// A grouping of ordered lessons within a module.
export type Semester = {
  id: string
  moduleId: string
  gradeId: string
  order: number
  title: LocalizedText
}

// ---------- Sections ----------

export type HeroSection = {
  kind: 'hero'
  id: string
  image: string
  imageAlt: LocalizedText
  title: LocalizedText
  question: LocalizedText
  intro: LocalizedText
  audio?: LocalizedAudio
}

export type Hotspot = {
  id: string
  x: number // % from the LEFT edge of the (square, uncropped) image — never mirrored
  y: number // % from the top
  label: LocalizedText
  description: LocalizedText
  audio?: LocalizedAudio
}

export type ExplorerSection = {
  kind: 'explorer'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image: string
  imageAlt: LocalizedText
  hotspots: Hotspot[]
}

export type SortingItem = {
  id: string
  label: LocalizedText
}

export type SortingSection = {
  kind: 'sorting'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image?: string
  imageAlt?: LocalizedText
  // Items listed in the CORRECT order; the UI shuffles them.
  items: SortingItem[]
  explanation: LocalizedText
}

export type StoryCard = {
  id: string
  image: string
  imageAlt: LocalizedText
  fact: LocalizedText
  certainty?: Certainty
  audio?: LocalizedAudio
}

export type ReflectionOption = {
  id: string
  label: LocalizedText
  isRelevant: boolean
  explanation: LocalizedText
}

export type StorySection = {
  kind: 'story'
  id: string
  title: LocalizedText
  intro: LocalizedText
  cards: StoryCard[]
  reflection: {
    prompt: LocalizedText
    options: ReflectionOption[]
  }
}

export type TimelineStep = {
  id: string
  period: LocalizedText
  label: LocalizedText
  detail: LocalizedText
  certainty?: Certainty
  audio?: LocalizedAudio
}

export type TimelineSection = {
  kind: 'timeline'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image?: string
  imageAlt?: LocalizedText
  steps: TimelineStep[]
}

export type PlacementSlot = {
  id: string
  label: LocalizedText
}

export type PlacementCard = {
  id: string
  label: LocalizedText
  slotId: string
  // Shown when the learner drops the card on a wrong slot.
  hint: LocalizedText
}

export type PlacementSection = {
  kind: 'placement'
  id: string
  title: LocalizedText
  intro: LocalizedText
  slots: PlacementSlot[]
  cards: PlacementCard[]
}

export type ValueChoice = {
  id: string
  label: LocalizedText
  isCorrect: boolean
  feedback: LocalizedText
}

export type ValueLesson = {
  id: string
  value: LocalizedText
  evidence: LocalizedText
}

export type ValueSection = {
  kind: 'value'
  id: string
  title: LocalizedText
  prompt: LocalizedText
  choices: ValueChoice[]
  valuesTitle: LocalizedText
  values: ValueLesson[]
}

// ---------- Quiz ----------

type QuizBase = {
  id: string
  question: LocalizedText
  explanation: LocalizedText
}

export type QuizQuestion =
  | (QuizBase & {
      type: 'mcq'
      options: { id: string; label: LocalizedText }[]
      correctId: string
    })
  | (QuizBase & { type: 'truefalse'; answer: boolean })
  | (QuizBase & { type: 'ordering'; items: SortingItem[] })
  | (QuizBase & {
      type: 'matching'
      pairs: { id: string; left: LocalizedText; right: LocalizedText }[]
    })
  | (QuizBase & {
      type: 'visual'
      options: { id: string; image: string; label: LocalizedText }[]
      correctId: string
    })

export type QuizSection = {
  kind: 'quiz'
  id: string
  title: LocalizedText
  intro: LocalizedText
  questions: QuizQuestion[]
}

// ---------- Memory ----------

export type MemoryCard = {
  id: string
  label: LocalizedText
  category: LocalizedText
}

export type MemoryRound = {
  id: string
  question: LocalizedText
  correctIds: string[]
}

export type MemorySection = {
  kind: 'memory'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image?: string
  cards: MemoryCard[]
  rounds: MemoryRound[]
}

// ---------- Missions (quest map) ----------

export type Mission = {
  id: string
  question: LocalizedText
  // id of the section that answers this question; the card jumps there.
  target: string
  teaser: LocalizedText
}

export type MissionsSection = {
  kind: 'missions'
  id: string
  title: LocalizedText
  intro: LocalizedText
  missions: Mission[]
}

// ---------- Chat story ----------

export type ChatSpeaker = {
  id: string
  name: LocalizedText
  // One glyph inside the round avatar (never a face or figure).
  avatar: string
  // Logical side: 'start' bubbles hug the reading-start edge, 'end' the other.
  side: 'start' | 'end'
  tone: 'emerald' | 'gold' | 'night' | 'clay'
}

export type ChatReplyOption = {
  id: string
  label: LocalizedText
  correct: boolean
  hint: LocalizedText
}

export type ChatStep =
  | { type: 'msg'; id: string; who: string; text: LocalizedText }
  // The learner picks what the speaker says; a correct pick becomes the bubble.
  | { type: 'reply'; id: string; who: string; prompt: LocalizedText; options: ChatReplyOption[] }

export type ChatSection = {
  kind: 'chat'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image?: string
  imageAlt?: LocalizedText
  speakers: ChatSpeaker[]
  steps: ChatStep[]
}

// ---------- Ripple (concentric circles of the call) ----------

export type RippleRing = {
  id: string
  label: LocalizedText
  period: LocalizedText
  summary: LocalizedText
}

export type RippleClue = {
  id: string
  text: LocalizedText
  ringId: string
  hint: LocalizedText
}

export type RippleSection = {
  kind: 'ripple'
  id: string
  title: LocalizedText
  intro: LocalizedText
  // Listed from the CENTRE outwards.
  rings: RippleRing[]
  clues: RippleClue[]
}

// ---------- Swipe judge ----------

export type SwipeSide = { label: LocalizedText; tag: LocalizedText }

export type SwipeCard = {
  id: string
  who: LocalizedText
  deed: LocalizedText
  // Decorative scene shown on top of the card.
  image?: string
  side: 'left' | 'right'
  explanation: LocalizedText
}

export type SwipeSection = {
  kind: 'swipe'
  id: string
  title: LocalizedText
  intro: LocalizedText
  left: SwipeSide
  right: SwipeSide
  cards: SwipeCard[]
}

// ---------- Domino chain (cause and effect) ----------

export type ChainDistractor = { label: LocalizedText; hint: LocalizedText }

export type ChainStep = {
  id: string
  image?: string
  prompt: LocalizedText
  correct: LocalizedText
  distractors: ChainDistractor[]
}

export type ChainSection = {
  kind: 'chain'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image?: string
  imageAlt?: LocalizedText
  start: LocalizedText
  steps: ChainStep[]
  ending: LocalizedText
}

// ---------- Verse builder ----------

export type Verse = {
  id: string
  context: LocalizedText
  ref: LocalizedText
  // Arabic words in correct order.
  words: string[]
  meaning: LocalizedText
}

export type VerseSection = {
  kind: 'verses'
  id: string
  title: LocalizedText
  intro: LocalizedText
  verses: Verse[]
}

// ---------- Blitz (timed true / false streak) ----------

export type BlitzStatement = {
  id: string
  text: LocalizedText
  answer: boolean
  explanation: LocalizedText
}

export type BlitzSection = {
  kind: 'blitz'
  id: string
  title: LocalizedText
  intro: LocalizedText
  secondsPerCard: number
  statements: BlitzStatement[]
}

// ---------- Reading (narrative passage) ----------

export type ReadingParagraph = {
  id: string
  // Optional short heading above this paragraph, for pacing a longer passage.
  heading?: LocalizedText
  text: LocalizedText
  audio?: LocalizedAudio
}

export type ReadingSection = {
  kind: 'reading'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image?: string
  imageAlt?: LocalizedText
  paragraphs: ReadingParagraph[]
}

// ---------- Completion ----------

export type CompletionSection = {
  kind: 'completion'
  id: string
  keyTakeaway: LocalizedText
  learned: LocalizedText[]
}

export type LessonSection =
  | HeroSection
  | ExplorerSection
  | SortingSection
  | StorySection
  | TimelineSection
  | PlacementSection
  | ValueSection
  | QuizSection
  | MemorySection
  | MissionsSection
  | ChatSection
  | RippleSection
  | SwipeSection
  | ChainSection
  | VerseSection
  | BlitzSection
  | ReadingSection
  | CompletionSection

export type SectionKind = LessonSection['kind']

export type Lesson = {
  id: string
  gradeId: string
  moduleId: string
  // Optional for draft/stub lessons; required when content is published.
  semesterId?: string
  order?: number
  status?: LessonStatus
  title: LocalizedText
  description: LocalizedText
  estimatedMinutes: number
  cover: string
  coverAlt: LocalizedText
  sections: LessonSection[]
}
