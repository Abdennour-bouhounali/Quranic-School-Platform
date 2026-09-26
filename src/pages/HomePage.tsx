import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, BookOpenText, CheckCircle2, Clock, GraduationCap, Layers, Puzzle } from 'lucide-react'
import { getGrades, getLessons, getModules, type Lesson } from '@/data'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { readLessonProgress } from '@/lib/useLessonProgress'
import { LanguageSwitcher } from '@/components/ui/LanguageSwitcher'
import { SmartImage } from '@/components/ui/SmartImage'

type Props = { onOpenLesson: (lessonId: string) => void }

const NON_ACTIVITY_KINDS = ['hero', 'completion']

export function HomePage({ onOpenLesson }: Props) {
  const { t, tx } = useI18n()
  const grade = getGrades()[0]
  const modules = getModules(grade.id)

  return (
    <div className="min-h-full bg-mesh">
      <header className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <div className="flex items-center gap-3">
          <img src="/favicon.svg" alt="" className="h-10 w-10" />
          <div>
            <p className="text-lg font-bold leading-tight">{t('app.brand')}</p>
            <p className="text-xs text-ink-muted">{t('app.tagline')}</p>
          </div>
        </div>
        <LanguageSwitcher />
      </header>

      <main className="mx-auto max-w-6xl space-y-10 px-4 pb-16">
        <section className="relative overflow-hidden rounded-[2rem] bg-night text-cream-soft shadow-card">
          <div className="stars absolute inset-0" aria-hidden />
          <div className="relative grid gap-6 p-7 md:grid-cols-[1.2fr_1fr] md:items-center md:p-12">
            <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <p className="text-sm font-semibold tracking-widest text-gold-soft">{t('home.kicker')}</p>
              <h1 className="mt-3 text-3xl font-semibold leading-tight !text-cream-soft md:text-5xl">{t('home.title')}</h1>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-cream/80 md:text-lg">{t('home.text')}</p>
            </motion.div>
            <div className="hidden justify-center md:flex" aria-hidden>
              <div className="relative h-44 w-44 animate-float rounded-full bg-gradient-to-br from-gold-soft/30 to-emerald-soft/20 motion-reduce:animate-none">
                <div className="absolute inset-6 rounded-full bg-[#F3E6C4] shadow-[0_0_60px_20px_rgba(243,230,196,0.25)]" />
                <div className="absolute inset-6 translate-x-8 rounded-full bg-[#0F1F2E]" />
              </div>
            </div>
          </div>
        </section>

        <section aria-labelledby="grade-heading" className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">
              <GraduationCap className="h-4 w-4" aria-hidden /> {t('home.grade')}
            </span>
            <h2 id="grade-heading" className="text-2xl font-semibold">
              {tx(grade.title)}
            </h2>
            <span className="num text-sm text-ink-muted">
              · {grade.ageRange} {t('home.years')}
            </span>
          </div>

          {modules.map((m) => (
            <div key={m.id} className="rounded-[2rem] border border-cream-deep/70 bg-white/60 p-5 md:p-7">
              <div className="mb-5 flex items-start gap-3">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-warm text-gold-soft">
                  <Layers className="h-6 w-6" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-gold">{t('home.module')}</p>
                  <h3 className="text-xl font-semibold md:text-2xl">{tx(m.title)}</h3>
                  <p className="mt-1 text-ink-soft">{tx(m.description)}</p>
                </div>
              </div>
              <p className="mb-3 text-sm font-semibold text-ink-muted">{t('home.lessons')}</p>
              <div className="grid gap-4 md:grid-cols-2">
                {getLessons(m.id).map((l) => (
                  <LessonCard key={l.id} lesson={l} onOpen={() => onOpenLesson(l.id)} />
                ))}
                <ComingSoonCard />
              </div>
            </div>
          ))}

          <p className="flex items-center gap-2 text-sm text-ink-muted">
            <BookOpenText className="h-4 w-4 shrink-0" aria-hidden /> {t('home.otherModules')}
          </p>
        </section>
      </main>
    </div>
  )
}

function LessonCard({ lesson, onOpen }: { lesson: Lesson; onOpen: () => void }) {
  const { t, tx, dir } = useI18n()
  const progress = readLessonProgress(lesson.id)
  const activityCount = lesson.sections.filter((s) => !NON_ACTIVITY_KINDS.includes(s.kind)).length
  const percent = progress.completed ? 100 : Math.round((progress.currentIndex / (lesson.sections.length - 1)) * 100)
  const cta = progress.completed ? t('home.review') : progress.currentIndex > 0 ? t('home.resume') : t('home.start')
  const Arrow = dir === 'rtl' ? ArrowLeft : ArrowRight

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      className="group overflow-hidden rounded-3xl border border-cream-deep/70 bg-white shadow-card"
    >
      <button type="button" onClick={onOpen} className="block w-full text-start">
        <div className="relative">
          <SmartImage src={lesson.cover} alt={tx(lesson.coverAlt)} tone="night" className="aspect-[16/9] w-full transition-transform duration-500 group-hover:scale-[1.03]" />
          {progress.completed && (
            <span className="absolute end-3 top-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-emerald-deep">
              <CheckCircle2 className="h-4 w-4" aria-hidden /> {t('home.completed')}
            </span>
          )}
        </div>
        <div className="space-y-3 p-5">
          <h4 className="text-xl font-semibold leading-snug">{tx(lesson.title)}</h4>
          <p className="text-sm leading-relaxed text-ink-soft">{tx(lesson.description)}</p>
          <div className="flex flex-wrap gap-3 text-xs font-medium text-ink-muted">
            <span className="inline-flex items-center gap-1">
              <Clock className="h-4 w-4" aria-hidden /> <span className="num">{lesson.estimatedMinutes}</span> {t('home.minutes')}
            </span>
            <span className="inline-flex items-center gap-1">
              <Puzzle className="h-4 w-4" aria-hidden /> <span className="num">{activityCount}</span> {t('home.activities')}
            </span>
          </div>
          {percent > 0 && (
            <div className="h-1.5 overflow-hidden rounded-full bg-cream-deep" aria-hidden>
              <div className="h-full rounded-full bg-emerald-leaf" style={{ width: `${percent}%` }} />
            </div>
          )}
          <span className={cn('btn-primary w-full sm:w-auto')}>
            {cta} <Arrow className="h-4 w-4" aria-hidden />
          </span>
        </div>
      </button>
    </motion.article>
  )
}

function ComingSoonCard() {
  const { t } = useI18n()
  return (
    <div className="flex min-h-48 flex-col items-center justify-center gap-2 rounded-3xl border-2 border-dashed border-cream-deep p-6 text-center text-ink-muted">
      <Clock className="h-6 w-6" aria-hidden />
      <p className="font-semibold">{t('lesson.nextLesson')}</p>
      <p className="text-sm">{t('home.comingSoon')}</p>
    </div>
  )
}
