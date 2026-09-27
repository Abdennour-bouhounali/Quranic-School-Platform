import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Home, Maximize2, Minimize2 } from 'lucide-react'
import type { Lesson } from '@/data'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { useLessonProgress } from '@/lib/useLessonProgress'
import { usePresentationMode } from '@/lib/usePresentationMode'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { LessonProgress } from '@/components/ui/LessonProgress'
import { SectionRenderer, type SectionNav } from '@/features/lesson/sections'

type Props = { lesson: Lesson; onExit: () => void }

const HINT_MS = 3500

export function LessonPage({ lesson, onExit }: Props) {
  const { t, tx, dir } = useI18n()
  const sectionIds = useMemo(() => lesson.sections.map((s) => s.id), [lesson])
  const { progress, goTo, reset } = useLessonProgress(lesson.id, sectionIds)
  // Bumped on restart so every activity remounts with fresh state.
  const [runId, setRunId] = useState(0)
  const presentation = usePresentationMode()
  const [showHint, setShowHint] = useState(false)

  const index = progress.currentIndex
  const section = lesson.sections[index]
  const isFirst = index === 0
  const isLast = index === lesson.sections.length - 1

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [index])

  const nav: SectionNav = {
    index,
    next: () => goTo(index + 1),
    goTo,
    restart: () => {
      reset()
      setRunId((r) => r + 1)
    },
    sections: lesson.sections,
  }

  // Presentation keys: PageUp/PageDown (what presenter clickers send) always work;
  // arrow keys only when focus is outside the activity, so timelines/sorting keep their arrows.
  useEffect(() => {
    if (!presentation.active) return
    const onKey = (e: KeyboardEvent) => {
      const inActivity = e.target instanceof Element && e.target.closest('main') !== null
      const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
      const backward = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
      if (e.key === 'PageDown' || (e.key === forward && !inActivity)) {
        e.preventDefault()
        goTo(index + 1)
      } else if (e.key === 'PageUp' || (e.key === backward && !inActivity)) {
        e.preventDefault()
        goTo(index - 1)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [presentation.active, dir, index, goTo])

  useEffect(() => {
    if (!presentation.active) return
    setShowHint(true)
    const timer = window.setTimeout(() => setShowHint(false), HINT_MS)
    return () => window.clearTimeout(timer)
  }, [presentation.active])

  const exitLesson = () => {
    presentation.exit()
    onExit()
  }

  const steps = lesson.sections.map((s) => ({ id: s.id, label: 'title' in s ? tx(s.title) : s.id }))
  const Back = dir === 'rtl' ? ArrowRight : ArrowLeft
  const Forward = dir === 'rtl' ? ArrowLeft : ArrowRight
  const PresentIcon = presentation.active ? Minimize2 : Maximize2
  const presentLabel = presentation.active ? t('lesson.exitPresent') : t('lesson.present')

  return (
    <div className="min-h-full bg-mesh">
      <header className="sticky top-0 z-30 border-b border-cream-deep/60 bg-cream-soft/85 backdrop-blur-md">
        <div className={cn('mx-auto flex max-w-6xl items-center gap-3 px-2', presentation.active ? 'py-1.5' : 'py-2.5')}>
          <button type="button" onClick={exitLesson} className="btn-ghost h-11 w-11 shrink-0 !p-0" aria-label={t('lesson.home')}>
            <Home className="h-5 w-5" aria-hidden />
          </button>
          <div className="min-w-0 flex-1">
            {!presentation.active && <p className="truncate text-sm font-semibold">{tx(lesson.title)}</p>}
            <LessonProgress steps={steps} currentIndex={index} visited={progress.visited} onSelect={goTo} />
          </div>
          {!presentation.active && (
            <div className="hidden sm:block">
              <LanguageSwitcher />
            </div>
          )}
          <button
            type="button"
            onClick={presentation.toggle}
            aria-pressed={presentation.active}
            aria-label={presentLabel}
            title={presentLabel}
            className={cn('btn h-11 shrink-0 !px-3', presentation.active ? 'bg-emerald-deep text-cream-soft' : 'btn-secondary')}
          >
            <PresentIcon className="h-5 w-5" aria-hidden />
            <span className="hidden lg:inline">{presentLabel}</span>
          </button>
        </div>
        {!presentation.active && (
          <div className="flex justify-center pb-2 sm:hidden">
            <LanguageSwitcher />
          </div>
        )}
      </header>

      <AnimatePresence>
        {showHint && (
          <motion.p
            role="status"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed inset-x-0 top-20 z-40 mx-auto w-fit max-w-[90vw] rounded-full bg-ink/85 px-5 py-2.5 text-center text-sm text-cream-soft shadow-card"
          >
            {t('lesson.presentHint')}
          </motion.p>
        )}
      </AnimatePresence>

      <main className="mx-auto max-w-6xl px-2 py-6 pb-24 md:py-10 md:pb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${runId}-${section.id}`}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            <SectionRenderer section={section} nav={nav} />
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="fixed bottom-0 inset-x-0 z-20 border-t border-cream-deep/60 bg-cream-soft/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-2 py-3" style={{ paddingBottom: 'max(0.75rem, env(safe-area-inset-bottom))' }}>
          <button type="button" onClick={() => goTo(index - 1)} disabled={isFirst} className="btn-secondary disabled:opacity-40">
            <Back className="h-4 w-4" aria-hidden /> {t('lesson.previous')}
          </button>
          <span className="num text-sm font-medium text-ink-muted" aria-label={t('a11y.progress')}>
            {index + 1} / {lesson.sections.length}
          </span>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={isLast}
            className={cn('btn-primary disabled:opacity-40', isLast && 'invisible')}
          >
            {t('lesson.next')} <Forward className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </footer>
    </div>
  )
}
