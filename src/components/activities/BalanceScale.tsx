import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Scale } from 'lucide-react'
import type { BalanceWeight } from '@/data'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = { left: LocalizedText; right: LocalizedText; weights: BalanceWeight[] }

// Weigh each fact on the right pan. The beam tilts toward the heavier pan as facts land;
// a fact on the wrong pan bounces back with its explanation.
export function BalanceScale({ left, right, weights }: Props) {
  const { t, tx } = useI18n()
  const deck = useMemo(() => shuffle(weights), [weights])
  const [index, setIndex] = useState(0)
  const [placed, setPlaced] = useState<{ left: BalanceWeight[]; right: BalanceWeight[] }>({ left: [], right: [] })
  const [feedback, setFeedback] = useState<{ key: number; ok: boolean; text: string } | null>(null)

  const w = deck[index]
  const done = index >= deck.length
  const tilt = Math.max(-16, Math.min(16, (placed.right.length - placed.left.length) * 5))

  const drop = (side: 'left' | 'right') => {
    if (!w) return
    if (w.side === side) {
      setPlaced((p) => ({ ...p, [side]: [...p[side], w] }))
      setFeedback({ key: Date.now(), ok: true, text: tx(w.explanation) })
      setIndex((i) => i + 1)
    } else {
      setFeedback({ key: Date.now(), ok: false, text: tx(w.explanation) })
    }
  }

  const Pan = ({ side, label }: { side: 'left' | 'right'; label: LocalizedText }) => (
    <div className="flex flex-1 flex-col items-center gap-2">
      <div className="flex min-h-[7rem] w-full flex-col-reverse gap-1.5 rounded-2xl border-2 border-dashed border-sand-deep bg-white/70 p-2">
        {placed[side].map((p) => (
          <motion.span key={p.id} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="rounded-xl bg-emerald-pale px-3 py-1.5 text-start text-xs font-medium leading-snug text-emerald-deep">
            {tx(p.text)}
          </motion.span>
        ))}
      </div>
      <span className="h-1.5 w-4/5 rounded-full bg-gold" aria-hidden />
      <span className="text-center text-sm font-bold text-emerald-warm">{tx(label)}</span>
    </div>
  )

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      {/* physical layout on purpose: the beam tilts the way a real scale does */}
      <div dir="ltr" className="relative">
        <motion.div
          className="relative z-10 mx-auto mb-3 h-2 w-4/5 origin-center rounded-full bg-emerald-deep"
          initial={false}
          animate={{ rotate: tilt }}
          transition={{ type: 'spring', stiffness: 80, damping: 10 }}
          aria-hidden
        >
          <span className="absolute -top-3 start-1/2 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-gold text-ink">
            <Scale className="h-4 w-4" />
          </span>
        </motion.div>
        <div className="flex items-start gap-3">
          <motion.div className="flex-1" initial={false} animate={{ y: -tilt * 1.2 }}>
            <Pan side="left" label={left} />
          </motion.div>
          <motion.div className="flex-1" initial={false} animate={{ y: tilt * 1.2 }}>
            <Pan side="right" label={right} />
          </motion.div>
        </div>
      </div>

      {!done ? (
        <section className="card space-y-3 text-center">
          <p className="text-xs font-semibold tracking-widest text-gold">{t('lesson.balanceWeigh')}</p>
          <p className="text-lg font-semibold leading-relaxed">{tx(w.text)}</p>
          <div className="grid grid-cols-2 gap-3">
            {(['left', 'right'] as const).map((s) => (
              <button key={s} type="button" onClick={() => drop(s)} className={cn('btn-secondary justify-center')}>
                {tx(s === 'left' ? left : right)}
              </button>
            ))}
          </div>
        </section>
      ) : (
        <FeedbackMessage status="correct" title={t('lesson.balanceDone')} />
      )}

      {feedback && (
        <FeedbackMessage key={feedback.key} status={feedback.ok ? 'correct' : 'incorrect'} title={feedback.ok ? t('lesson.balanceOk') : t('lesson.almost')}>
          {feedback.text}
        </FeedbackMessage>
      )}
    </div>
  )
}
