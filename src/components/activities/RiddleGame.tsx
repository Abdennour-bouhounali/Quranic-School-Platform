import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, HelpCircle, Star } from 'lucide-react'
import type { Riddle } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

const MAX_STARS = 3

// "Who am I?" Clues open one at a time, from vague to obvious. Solving with fewer clues
// earns more stars; a wrong pick never blocks, it simply opens the next clue.
export function RiddleGame({ riddles }: { riddles: Riddle[] }) {
  const { t, tx } = useI18n()
  const [index, setIndex] = useState(0)
  const [shown, setShown] = useState(1)
  const [wrong, setWrong] = useState<string[]>([])
  const [solved, setSolved] = useState(false)
  const [total, setTotal] = useState(0)

  const riddle = riddles[index]
  const finished = index >= riddles.length
  const options = useMemo(() => (riddle ? shuffle(riddle.options) : []), [riddle])
  const stars = Math.max(1, MAX_STARS - (shown - 1) - wrong.length)

  const pick = (id: string) => {
    if (id === riddle.correctId) {
      setSolved(true)
      setTotal((n) => n + stars)
    } else {
      setWrong((w) => [...w, id])
      setShown((s) => Math.min(riddle.clues.length, s + 1))
    }
  }

  const next = () => {
    setIndex((i) => i + 1)
    setShown(1)
    setWrong([])
    setSolved(false)
  }

  const replay = () => {
    setIndex(0)
    setShown(1)
    setWrong([])
    setSolved(false)
    setTotal(0)
  }

  if (finished) {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <FeedbackMessage status="correct" title={t('lesson.riddleDone')}>
          <span className="num font-bold">{total} / {riddles.length * MAX_STARS}</span> {t('lesson.stars')}
        </FeedbackMessage>
        <button type="button" onClick={replay} className="btn-secondary">
          {t('lesson.replay')}
        </button>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="flex items-center justify-between text-sm font-semibold text-ink-muted">
        <span className="num">{index + 1} / {riddles.length}</span>
        <span className="flex items-center gap-1" aria-label={`${stars} ${t('lesson.stars')}`}>
          {Array.from({ length: MAX_STARS }, (_, i) => (
            <Star key={i} className={cn('h-5 w-5 transition-colors', i < stars ? 'fill-gold-soft text-gold' : 'text-cream-deep')} aria-hidden />
          ))}
        </span>
      </div>

      <AnimatePresence mode="wait">
        <motion.section
          key={riddle.id}
          initial={{ opacity: 0, rotateY: 60 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
          className="overflow-hidden rounded-3xl bg-emerald-warm text-cream-soft shadow-card"
        >
          {solved && riddle.image && <SmartImage src={riddle.image} alt="" tone="dusk" className="aspect-[16/8] w-full" />}
          <div className="space-y-4 p-6">
            <p className="flex items-center gap-2 text-sm font-semibold tracking-widest text-gold-soft">
              <HelpCircle className="h-5 w-5" aria-hidden /> {t('lesson.riddleWho')}
            </p>
            <ol className="space-y-2">
              {riddle.clues.slice(0, solved ? riddle.clues.length : shown).map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex gap-3 rounded-2xl bg-white/10 px-4 py-3 text-base leading-relaxed md:text-lg"
                >
                  <span className="num flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-gold text-sm font-bold text-ink">{i + 1}</span>
                  {tx(c)}
                </motion.li>
              ))}
            </ol>
            {!solved && shown < riddle.clues.length && (
              <button type="button" onClick={() => setShown((s) => s + 1)} className="btn border border-white/30 bg-white/10 text-cream-soft hover:bg-white/20">
                {t('lesson.riddleMore')} <span className="num opacity-70">({shown}/{riddle.clues.length})</span>
              </button>
            )}
          </div>
        </motion.section>
      </AnimatePresence>

      <ul className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const isRight = solved && o.id === riddle.correctId
          const isWrong = wrong.includes(o.id)
          return (
            <li key={o.id}>
              <button
                type="button"
                disabled={solved || isWrong}
                onClick={() => pick(o.id)}
                className={cn(
                  'min-h-12 w-full rounded-2xl border-2 px-4 py-3 text-start font-semibold transition-colors',
                  isRight ? 'border-emerald-deep bg-emerald-pale text-emerald-deep' : isWrong ? 'border-clay-soft bg-[#FBEDE4] opacity-60' : 'border-cream-deep bg-white hover:border-gold',
                )}
              >
                {tx(o.label)}
              </button>
            </li>
          )
        })}
      </ul>

      {!solved && wrong.length > 0 && (
        <FeedbackMessage key={wrong.length} status="incorrect" title={t('lesson.riddleWrong')} />
      )}
      {solved && (
        <div className="space-y-3">
          <FeedbackMessage status="correct" title={t('lesson.riddleSolved')}>
            {tx(riddle.reveal)}
          </FeedbackMessage>
          <button type="button" onClick={next} className="btn-primary">
            {index === riddles.length - 1 ? t('lesson.seeScore') : t('lesson.riddleNext')}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
          </button>
        </div>
      )}
    </div>
  )
}
