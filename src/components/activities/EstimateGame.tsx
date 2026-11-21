import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Target } from 'lucide-react'
import type { EstimateItem } from '@/data'
import { useI18n } from '@/i18n'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

// Guess a number on a slider, lock it, then see the real figure (and, when given,
// bars comparing quantities). There is no wrong guess: far guesses get "surprising!".
export function EstimateGame({ items }: { items: EstimateItem[] }) {
  const { t, tx } = useI18n()
  const [index, setIndex] = useState(0)
  const [guess, setGuess] = useState<number | null>(null)
  const [locked, setLocked] = useState(false)

  const item = items[index]
  if (!item) {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <FeedbackMessage status="correct" title={t('lesson.estimateDone')} />
        <button type="button" onClick={() => setIndex(0)} className="btn-secondary">
          {t('lesson.replay')}
        </button>
      </div>
    )
  }

  const range = item.max - item.min
  const value = guess ?? Math.round((item.min + range / 2) / (item.step ?? 1)) * (item.step ?? 1)
  const tolerance = item.tolerance ?? range * 0.1
  const gap = Math.abs(value - item.answer)
  const verdict = gap <= tolerance / 3 ? 'estimateExact' : gap <= tolerance ? 'estimateClose' : 'estimateFar'
  const pct = (n: number) => `${((n - item.min) / range) * 100}%`
  const biggest = Math.max(...(item.compare ?? []).map((c) => c.value), 1)

  const next = () => {
    setIndex((i) => i + 1)
    setGuess(null)
    setLocked(false)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <p className="num text-sm font-semibold text-ink-muted">{index + 1} / {items.length}</p>
      <section className="card space-y-6">
        <p className="text-lg font-semibold leading-relaxed md:text-xl">{tx(item.question)}</p>

        <div className="text-center">
          <p className="text-xs font-semibold tracking-widest text-gold">{t('lesson.estimateGuess')}</p>
          <motion.p key={value} initial={{ scale: 0.9 }} animate={{ scale: 1 }} className="mt-1 text-5xl font-bold text-emerald-deep">
            <span className="num">{value}</span>
            {item.unit && <span className="ms-2 text-lg font-semibold text-ink-muted">{tx(item.unit)}</span>}
          </motion.p>
        </div>

        {/* A number line is physical: small values always sit on the left. */}
        <div dir="ltr" className="relative pb-7 pt-2">
          <input
            type="range"
            min={item.min}
            max={item.max}
            step={item.step ?? 1}
            value={value}
            disabled={locked}
            onChange={(e) => setGuess(Number(e.target.value))}
            aria-label={tx(item.question)}
            className="h-3 w-full cursor-pointer appearance-none rounded-full bg-cream-deep accent-emerald-deep disabled:cursor-default"
          />
          {locked && (
            <motion.span
              initial={{ opacity: 0, y: -14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 12 }}
              style={{ left: pct(item.answer) }}
              className="absolute top-0 flex -translate-x-1/2 flex-col items-center"
            >
              <Target className="h-7 w-7 rounded-full bg-white text-gold" aria-hidden />
              <span className="num mt-1 rounded-full bg-gold px-2 py-0.5 text-xs font-bold text-ink">{item.answer}</span>
            </motion.span>
          )}
          <span className="num absolute bottom-0 left-0 text-xs text-ink-muted">{item.min}</span>
          <span className="num absolute bottom-0 right-0 text-xs text-ink-muted">{item.max}</span>
        </div>

        {!locked ? (
          // Locked until the learner has actually moved the slider: the midpoint is not a guess.
          <button type="button" disabled={guess === null} onClick={() => setLocked(true)} className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-50">
            {t('lesson.estimateLock')}
          </button>
        ) : (
          <div className="space-y-4">
            <FeedbackMessage status={verdict === 'estimateFar' ? 'info' : 'correct'} title={`${t(`lesson.${verdict}`)} ${t('lesson.estimateAnswer')}: ${item.answer}`}>
              {tx(item.reveal)}
            </FeedbackMessage>
            {item.compare && (
              <ul className="space-y-3">
                {item.compare.map((c, i) => (
                  <li key={i}>
                    <div className="mb-1 flex justify-between gap-3 text-sm font-semibold">
                      <span>{tx(c.label)}</span>
                      <span className="num text-emerald-deep">{c.value}</span>
                    </div>
                    <div className="h-4 overflow-hidden rounded-full bg-cream">
                      <motion.div
                        className={i % 2 === 0 ? 'h-full rounded-full bg-emerald-leaf' : 'h-full rounded-full bg-gold'}
                        initial={{ width: 0 }}
                        animate={{ width: `${(c.value / biggest) * 100}%` }}
                        transition={{ duration: 0.9, delay: 0.2 + i * 0.25 }}
                      />
                    </div>
                  </li>
                ))}
              </ul>
            )}
            <button type="button" onClick={next} className="btn-primary">
              {t('lesson.nextQuestion')}
              <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
            </button>
          </div>
        )}
      </section>
    </div>
  )
}
