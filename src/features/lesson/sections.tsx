import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Lock, RotateCcw, Sparkles } from 'lucide-react'
import type {
  CompletionSection,
  ExplorerSection,
  HeroSection,
  LessonSection,
  MemorySection,
  PlacementSection,
  QuizSection,
  SortingSection,
  StorySection,
  TimelineSection,
  ValueSection,
} from '@/data'
import { useI18n } from '@/i18n'
import { useState } from 'react'
import { SectionHeader } from '@/components/ui/SectionHeader'
import { SmartImage } from '@/components/ui/SmartImage'
import { HotspotExplorer } from '@/components/activities/HotspotExplorer'
import { SortingGame } from '@/components/activities/SortingGame'
import { StoryCard } from '@/components/activities/StoryCard'
import { ReflectionPicker } from '@/components/activities/ReflectionPicker'
import { InteractiveTimeline } from '@/components/activities/InteractiveTimeline'
import { PlacementGame } from '@/components/activities/PlacementGame'
import { MultipleChoice } from '@/components/activities/MultipleChoice'
import { ValueCard } from '@/components/activities/ValueCard'
import { QuizRunner } from '@/components/activities/QuizRunner'
import { MemoryGame } from '@/components/activities/MemoryGame'
import { cn } from '@/lib/utils'

export type SectionNav = {
  index: number
  next: () => void
  goTo: (index: number) => void
  restart: () => void
  sections: LessonSection[]
}

type Props<S> = { section: S; nav: SectionNav }

// Adding a section type = add it to the LessonSection union + one case here.
export function SectionRenderer({ section, nav }: { section: LessonSection; nav: SectionNav }) {
  switch (section.kind) {
    case 'hero':
      return <Hero section={section} nav={nav} />
    case 'explorer':
      return <Explorer section={section} nav={nav} />
    case 'sorting':
      return <Sorting section={section} nav={nav} />
    case 'story':
      return <Story section={section} nav={nav} />
    case 'timeline':
      return <Timeline section={section} nav={nav} />
    case 'placement':
      return <Placement section={section} nav={nav} />
    case 'value':
      return <Values section={section} nav={nav} />
    case 'quiz':
      return <Quiz section={section} nav={nav} />
    case 'memory':
      return <Memory section={section} nav={nav} />
    case 'completion':
      return <Completion section={section} nav={nav} />
  }
}

function Hero({ section, nav }: Props<HeroSection>) {
  const { t, tx, dir } = useI18n()
  return (
    <div className="relative -mx-4 -mt-6 overflow-hidden sm:mx-0 sm:mt-0 sm:rounded-[2rem]">
      <SmartImage src={section.image} alt={tx(section.imageAlt)} tone="night" eager className="absolute inset-0 h-full w-full" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050B14] via-[#050B14]/60 to-transparent" />
      <div className="relative flex min-h-[78vh] flex-col justify-end gap-5 p-6 pb-10 text-cream-soft sm:min-h-[70vh] md:p-12">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="text-sm font-semibold tracking-widest text-gold-soft">
          {tx(section.title)}
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="max-w-3xl text-3xl font-semibold leading-tight !text-cream-soft md:text-5xl"
        >
          {tx(section.question)}
        </motion.h2>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7 }} className="max-w-2xl text-base leading-relaxed text-cream/85 md:text-lg">
          {tx(section.intro)}
        </motion.p>
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.9 }}>
          <button type="button" onClick={nav.next} className="btn bg-gold px-7 py-4 text-base text-ink hover:bg-gold-soft">
            {t('lesson.begin')}
            <ArrowRight className={cn('h-5 w-5', dir === 'rtl' && 'rotate-180')} aria-hidden />
          </button>
        </motion.div>
      </div>
    </div>
  )
}

function Explorer({ section, nav }: Props<ExplorerSection>) {
  const { tx } = useI18n()
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} intro={tx(section.intro)} />
      <HotspotExplorer image={section.image} imageAlt={tx(section.imageAlt)} hotspots={section.hotspots} />
    </>
  )
}

function Sorting({ section, nav }: Props<SortingSection>) {
  const { tx } = useI18n()
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} intro={tx(section.intro)} />
      <div className="grid gap-6 lg:grid-cols-[1fr_1.2fr] lg:items-start">
        {section.image && section.imageAlt && (
          <SmartImage src={section.image} alt={tx(section.imageAlt)} tone="dusk" className="aspect-[4/3] w-full rounded-3xl shadow-card lg:aspect-square" />
        )}
        <SortingGame items={section.items} explanation={tx(section.explanation)} />
      </div>
    </>
  )
}

function Story({ section, nav }: Props<StorySection>) {
  const { tx } = useI18n()
  const [revealed, setRevealed] = useState<string[]>([])
  const allRevealed = revealed.length === section.cards.length
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} intro={tx(section.intro)} />
      <div className="grid gap-4 md:grid-cols-3">
        {section.cards.map((c, i) => (
          <StoryCard
            key={c.id}
            card={c}
            index={i}
            revealed={revealed.includes(c.id)}
            onReveal={() => setRevealed((r) => (r.includes(c.id) ? r : [...r, c.id]))}
          />
        ))}
      </div>
      {allRevealed && (
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-6">
          <ReflectionPicker prompt={tx(section.reflection.prompt)} options={section.reflection.options} />
        </motion.div>
      )}
    </>
  )
}

function Timeline({ section, nav }: Props<TimelineSection>) {
  const { tx } = useI18n()
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} intro={tx(section.intro)} />
      {section.image && section.imageAlt && (
        <SmartImage src={section.image} alt={tx(section.imageAlt)} tone="dusk" className="mb-6 aspect-[16/9] w-full rounded-3xl shadow-card md:aspect-[3/1] lg:aspect-[7/2]" />
      )}
      <InteractiveTimeline steps={section.steps} />
    </>
  )
}

function Placement({ section, nav }: Props<PlacementSection>) {
  const { tx } = useI18n()
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} intro={tx(section.intro)} />
      <PlacementGame slots={section.slots} cards={section.cards} />
    </>
  )
}

function Values({ section, nav }: Props<ValueSection>) {
  const { tx } = useI18n()
  const [solved, setSolved] = useState(false)
  const correct = section.choices.find((c) => c.isCorrect)!
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} />
      <div className="card space-y-4">
        <p className="text-lg font-semibold md:text-xl">{tx(section.prompt)}</p>
        <MultipleChoice
          allowRetry
          correctId={correct.id}
          options={section.choices.map((c) => ({ id: c.id, label: tx(c.label), feedback: tx(c.feedback) }))}
          onSolved={() => setSolved(true)}
        />
      </div>
      {solved && (
        <motion.section initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="mt-8">
          <h3 className="mb-4 text-lg font-semibold">{tx(section.valuesTitle)}</h3>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {section.values.map((v, i) => (
              <ValueCard key={v.id} index={i} value={tx(v.value)} evidence={tx(v.evidence)} />
            ))}
          </div>
        </motion.section>
      )}
    </>
  )
}

function Quiz({ section, nav }: Props<QuizSection>) {
  const { tx } = useI18n()
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} intro={tx(section.intro)} />
      <QuizRunner questions={section.questions} />
    </>
  )
}

function Memory({ section, nav }: Props<MemorySection>) {
  const { tx } = useI18n()
  return (
    <>
      <SectionHeader index={nav.index} title={tx(section.title)} intro={tx(section.intro)} />
      <div className="grid gap-6 lg:grid-cols-[1fr_2fr] lg:items-start">
        {section.image && (
          <SmartImage src={section.image} alt="" tone="day" className="hidden aspect-square w-full rounded-3xl shadow-card lg:block" />
        )}
        <MemoryGame cards={section.cards} rounds={section.rounds} />
      </div>
    </>
  )
}

function Completion({ section, nav }: Props<CompletionSection>) {
  const { t, tx } = useI18n()
  const activities = nav.sections
    .map((s, i) => ({ s, i }))
    .filter(({ s }) => s.kind !== 'hero' && s.kind !== 'completion')

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.94 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative overflow-hidden rounded-[2rem] bg-emerald-warm p-8 text-center text-cream-soft shadow-card md:p-12"
      >
        <Celebration />
        <Sparkles className="relative mx-auto h-12 w-12 text-gold-soft" aria-hidden />
        <h2 className="relative mt-4 text-3xl font-semibold !text-cream-soft md:text-4xl">{t('lesson.completionTitle')}</h2>
        <div className="relative mx-auto mt-6 h-2 max-w-xs overflow-hidden rounded-full bg-white/15" aria-hidden>
          <motion.div className="h-full bg-gold-soft" initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1.2, delay: 0.3 }} />
        </div>
        <p className="relative mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-cream/90">
          <span className="mb-1 block text-sm font-semibold tracking-widest text-gold-soft">{t('lesson.keyTakeaway')}</span>
          {tx(section.keyTakeaway)}
        </p>
      </motion.div>

      <section className="card">
        <h3 className="flex items-center gap-2 text-xl font-semibold">
          <BookOpen className="h-5 w-5 text-gold" aria-hidden /> {t('lesson.learned')}
        </h3>
        <ul className="mt-4 space-y-3">
          {section.learned.map((l, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="flex gap-3 text-ink-soft"
            >
              <span className="num mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-pale text-xs font-bold text-emerald-deep">
                {i + 1}
              </span>
              {tx(l)}
            </motion.li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-3 text-lg font-semibold">{t('lesson.replayActivity')}</h3>
        <ul className="flex flex-wrap gap-2">
          {activities.map(({ s, i }) => (
            <li key={s.id}>
              <button type="button" onClick={() => nav.goTo(i)} className="btn-secondary">
                <span className="num text-gold">{String(i).padStart(2, '0')}</span>
                {'title' in s ? tx(s.title) : s.id}
              </button>
            </li>
          ))}
        </ul>
      </section>

      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={nav.restart} className="btn-secondary">
          <RotateCcw className="h-4 w-4" aria-hidden /> {t('lesson.restart')}
        </button>
        <button type="button" disabled className="btn-primary cursor-not-allowed opacity-60">
          <Lock className="h-4 w-4" aria-hidden /> {t('lesson.nextLesson')} · {t('home.comingSoon')}
        </button>
      </div>
    </div>
  )
}

const CONFETTI_COUNT = 18

function Celebration() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden>
      {Array.from({ length: CONFETTI_COUNT }, (_, i) => (
        <motion.span
          key={i}
          className="absolute top-0 h-2 w-2 rounded-sm"
          style={{ left: `${(i * 97) % 100}%`, background: i % 3 === 0 ? '#D8B26A' : i % 3 === 1 ? '#F5EEE1' : '#5B8F78' }}
          initial={{ y: -20, opacity: 0, rotate: 0 }}
          animate={{ y: 420, opacity: [0, 1, 1, 0], rotate: 360 }}
          transition={{ duration: 2.4, delay: (i % 6) * 0.15, ease: 'easeIn' }}
        />
      ))}
    </div>
  )
}
