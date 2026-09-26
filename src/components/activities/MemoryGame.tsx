import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Eye, RotateCcw } from 'lucide-react'
import type { MemoryCard, MemoryRound } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

const STUDY_SECONDS = 8

type Phase = 'intro' | 'study' | 'recall' | 'reveal' | 'done'

type Props = { cards: MemoryCard[]; rounds: MemoryRound[] }

// Study the grid, cards flip face-down, then find the cards matching each round's question.
export function MemoryGame({ cards, rounds }: Props) {
  const { t, tx } = useI18n()
  const [layout, setLayout] = useState(() => shuffle(cards))
  const [phase, setPhase] = useState<Phase>('intro')
  const [roundIndex, setRoundIndex] = useState(0)
  const [picked, setPicked] = useState<string[]>([])
  const [secondsLeft, setSecondsLeft] = useState(STUDY_SECONDS)

  const round = rounds[roundIndex]

  useEffect(() => {
    if (phase !== 'study') return
    if (secondsLeft <= 0) {
      setPhase('recall')
      return
    }
    const timer = window.setTimeout(() => setSecondsLeft((s) => s - 1), 1000)
    return () => window.clearTimeout(timer)
  }, [phase, secondsLeft])

  const study = () => {
    setSecondsLeft(STUDY_SECONDS)
    setPicked([])
    setPhase('study')
  }

  const toggle = (id: string) => {
    if (phase !== 'recall') return
    setPicked((p) => (p.includes(id) ? p.filter((x) => x !== id) : p.length < round.correctIds.length ? [...p, id] : p))
  }

  const nextRound = () => {
    if (roundIndex + 1 >= rounds.length) setPhase('done')
    else {
      setRoundIndex((r) => r + 1)
      study()
    }
  }

  const restart = () => {
    setLayout(shuffle(cards))
    setRoundIndex(0)
    study()
  }

  const correctCount = picked.filter((id) => round?.correctIds.includes(id)).length
  const faceUp = phase === 'study' || phase === 'reveal' || phase === 'done' || phase === 'intro'

  return (
    <div className="space-y-5">
      <div className="flex min-h-12 flex-wrap items-center justify-between gap-3">
        {phase === 'intro' && (
          <button type="button" onClick={study} className="btn-primary">
            <Brain className="h-4 w-4" aria-hidden /> {t('lesson.memoryStart')}
          </button>
        )}
        {phase === 'study' && (
          <>
            <p className="font-medium text-ink-soft" aria-live="polite">
              {t('lesson.memoryStudy')} <span className="num font-bold text-emerald-deep">{secondsLeft}</span> {t('lesson.seconds')}
            </p>
            <button type="button" onClick={() => setPhase('recall')} className="btn-secondary">
              <Eye className="h-4 w-4" aria-hidden /> {t('lesson.ready')}
            </button>
          </>
        )}
        {(phase === 'recall' || phase === 'reveal') && (
          <p className="text-lg font-semibold">
            <span className="chip me-2">
              {t('lesson.round')} <span className="num">{roundIndex + 1}/{rounds.length}</span>
            </span>
            {tx(round.question)}
          </p>
        )}
      </div>

      <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {layout.map((c) => {
          const isPicked = picked.includes(c.id)
          const isTarget = phase === 'reveal' && round.correctIds.includes(c.id)
          return (
            <li key={c.id}>
              <motion.button
                type="button"
                onClick={() => toggle(c.id)}
                disabled={phase !== 'recall'}
                aria-pressed={phase === 'recall' ? isPicked : undefined}
                aria-label={faceUp ? `${tx(c.label)} — ${tx(c.category)}` : t('a11y.hiddenCard')}
                animate={{ rotateY: faceUp ? 0 : 180 }}
                transition={{ duration: 0.4 }}
                className={cn(
                  'relative flex h-28 w-full flex-col items-center justify-center gap-1 rounded-2xl border-2 p-3 text-center shadow-soft md:h-32',
                  faceUp ? 'border-cream-deep bg-white' : 'border-emerald-deep bg-emerald-warm',
                  isPicked && phase === 'recall' && 'border-gold ring-4 ring-gold-soft/40',
                  isTarget && 'border-emerald-leaf bg-emerald-pale',
                  phase === 'reveal' && isPicked && !isTarget && 'border-clay-soft bg-[#FBEDE4]',
                )}
              >
                <span className={cn('flex flex-col items-center gap-1', !faceUp && 'invisible')} style={{ transform: faceUp ? undefined : 'rotateY(180deg)' }}>
                  <span className="text-xs font-semibold uppercase tracking-wide text-gold">{tx(c.category)}</span>
                  <span className="text-base font-semibold md:text-lg">{tx(c.label)}</span>
                </span>
                {!faceUp && <span className="absolute text-2xl text-gold-soft" aria-hidden>✦</span>}
              </motion.button>
            </li>
          )
        })}
      </ul>

      {phase === 'recall' && (
        <button type="button" onClick={() => setPhase('reveal')} disabled={picked.length === 0} className="btn-primary disabled:opacity-50">
          {t('lesson.check')}
        </button>
      )}

      {phase === 'reveal' && (
        <div className="space-y-3">
          <FeedbackMessage status={correctCount === round.correctIds.length ? 'correct' : 'incorrect'} title={correctCount === round.correctIds.length ? t('lesson.correct') : t('lesson.almost')}>
            <span className="num">{correctCount} / {round.correctIds.length}</span>
          </FeedbackMessage>
          <button type="button" onClick={nextRound} className="btn-primary">
            {roundIndex + 1 < rounds.length ? t('lesson.nextRound') : t('lesson.memoryFinish')}
          </button>
        </div>
      )}

      {phase === 'done' && (
        <div className="space-y-3">
          <FeedbackMessage status="correct" title={t('lesson.memoryDone')} />
          <button type="button" onClick={restart} className="btn-secondary">
            <RotateCcw className="h-4 w-4" aria-hidden /> {t('lesson.tryAgain')}
          </button>
        </div>
      )}
    </div>
  )
}
