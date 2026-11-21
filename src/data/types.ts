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
  // 'quran' (default): Qur'anic verses. 'saying': a human saying (scholar, Companion…);
  // the UI then never calls the text a verse (آية).
  source?: 'quran' | 'saying'
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

// ---------- Journey (answer each stop to move the traveller along a route) ----------

export type JourneyStop = {
  id: string
  name: LocalizedText
  image?: string
  question: LocalizedText
  options: { id: string; label: LocalizedText; correct: boolean; hint?: LocalizedText }[]
  // Shown once the stop is answered correctly.
  reveal: LocalizedText
}

export type JourneySection = {
  kind: 'journey'
  id: string
  title: LocalizedText
  intro: LocalizedText
  stops: JourneyStop[]
  arrival: LocalizedText
}

// ---------- Balance scale (weigh facts on two pans) ----------

export type BalanceWeight = {
  id: string
  text: LocalizedText
  side: 'left' | 'right'
  explanation: LocalizedText
}

export type BalanceSection = {
  kind: 'balance'
  id: string
  title: LocalizedText
  intro: LocalizedText
  left: LocalizedText
  right: LocalizedText
  weights: BalanceWeight[]
}

// ---------- Riddle ("Who am I?": clues open one by one) ----------

export type Riddle = {
  id: string
  // From the vaguest clue to the most obvious one. Fewer clues used = more stars.
  clues: LocalizedText[]
  options: { id: string; label: LocalizedText }[]
  correctId: string
  // Shown once solved.
  reveal: LocalizedText
  image?: string
}

export type RiddleSection = {
  kind: 'riddle'
  id: string
  title: LocalizedText
  intro: LocalizedText
  riddles: Riddle[]
}

// ---------- Estimate (guess a number on a slider, then compare) ----------

export type EstimateItem = {
  id: string
  question: LocalizedText
  min: number
  max: number
  step?: number
  answer: number
  // How far from the answer still counts as "spot on" (default: 10% of the range).
  tolerance?: number
  unit?: LocalizedText
  reveal: LocalizedText
  // Optional bars drawn after the reveal, to compare quantities (e.g. two armies).
  compare?: { label: LocalizedText; value: number }[]
}

export type EstimateSection = {
  kind: 'estimate'
  id: string
  title: LocalizedText
  intro: LocalizedText
  items: EstimateItem[]
}

// ---------- Catch (floating lanterns: tap the ones that fit the goal) ----------

export type CatchItem = {
  id: string
  label: LocalizedText
  good: boolean
  // For a good item: why it fits. For a bad one: why it does not.
  explanation: LocalizedText
}

export type CatchSection = {
  kind: 'catch'
  id: string
  title: LocalizedText
  intro: LocalizedText
  // What to catch, e.g. "Catch only the causes of the victory".
  goal: LocalizedText
  items: CatchItem[]
}

// ---------- Wheel (spin for a question; made for the whole class) ----------

export type WheelSegment = {
  id: string
  // One or two words written on the wheel.
  label: LocalizedText
  question: LocalizedText
  answer: LocalizedText
}

export type WheelSection = {
  kind: 'wheel'
  id: string
  title: LocalizedText
  intro: LocalizedText
  segments: WheelSegment[]
}

// ---------- Vault (a combination lock: each dial answers one question) ----------

export type VaultDial = {
  id: string
  question: LocalizedText
  // Short values that fit on a dial (a number, a year, one or two words).
  options: { id: string; label: LocalizedText }[]
  correctId: string
  hint: LocalizedText
}

export type VaultSection = {
  kind: 'vault'
  id: string
  title: LocalizedText
  intro: LocalizedText
  image?: string
  imageAlt?: LocalizedText
  dials: VaultDial[]
  // What the learner finds inside once the lock opens.
  treasure: LocalizedText
}

// ---------- Scramble (rebuild a key word from shuffled letters) ----------

export type ScrambleWord = {
  id: string
  clue: LocalizedText
  // A single word per language, no spaces and no diacritics.
  word: LocalizedText
  reveal: LocalizedText
}

export type ScrambleSection = {
  kind: 'scramble'
  id: string
  title: LocalizedText
  intro: LocalizedText
  words: ScrambleWord[]
}

// ---------- Lantern (a dark scene: move the light to find hidden facts) ----------

export type LanternSection = {
  kind: 'lantern'
  id: string
  title: LocalizedText
  intro: LocalizedText
  // Square, uncropped image; secrets use the same % coordinates as explorer hotspots.
  image: string
  imageAlt: LocalizedText
  secrets: Hotspot[]
  ending: LocalizedText
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
  | JourneySection
  | BalanceSection
  | RiddleSection
  | EstimateSection
  | CatchSection
  | WheelSection
  | VaultSection
  | ScrambleSection
  | LanternSection
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
