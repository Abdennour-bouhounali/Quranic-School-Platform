import { useMemo, useState } from 'react'
import { AnimatePresence, motion, type PanInfo } from 'framer-motion'
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react'
import type { SwipeCard, SwipeSide } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

const THRESHOLD = 90

type Props = { left: SwipeSide; right: SwipeSide; cards: SwipeCard[] }

// Tinder-style verdicts: swipe each card to the pile it belongs to. A wrong verdict
// is explained and the deck moves on — nothing is ever blocked.
export function SwipeJudge({ left, right, cards }: Props) {
  const { t, tx } = useI18n()
  const [deck, setDeck] = useState(() => shuffle(cards))
  const [index, setIndex] = useState(0)
  const [verdict, setVerdict] = useState<{ card: SwipeCard; ok: boolean } | null>(null)
  const [results, setResults] = useState<Record<string, boolean>>({})
  const [drag, setDrag] = useState(0)

  const card = deck[index]
  const done = index >= deck.length
  const hits = useMemo(() => Object.values(results).filter(Boolean).length, [results])

  const decide = (side: 'left' | 'right') => {
    if (!card || verdict) return
    const ok = card.side === side
    setResults((r) => ({ ...r, [card.id]: ok }))
    setVerdict({ card, ok })
  }

  const onDragEnd = (_: unknown, info: PanInfo) => {
    setDrag(0)
    if (info.offset.x > THRESHOLD) decide('right')
    else if (info.offset.x < -THRESHOLD) decide('left')
  }

  const next = () => {
    setVerdict(null)
    setIndex((i) => i + 1)
  }

  const restart = () => {
    setDeck(shuffle(cards))
    setIndex(0)
    setResults({})
    setVerdict(null)
  }

  const pile = (side: 'left' | 'right') => deck.filter((c) => c.side === side)

  return (
    <div className="mx-auto max-w-xl space-y-5">
      {/* physical left/right on purpose: swiping is a physical gesture */}
      <div dir="ltr" className="grid grid-cols-2 gap-3 text-center text-sm font-semibold">
        <div className={cn('rounded-2xl border-2 px-3 py-2 transition-colors', drag < -30 ? 'border-clay bg-[#FBEDE4]' : 'border-cream-deep bg-white')}>
          <ArrowLeft className="mx-auto h-4 w-4" aria-hidden /> {tx(left.label)}
        </div>
        <div className={cn('rounded-2xl border-2 px-3 py-2 transition-colors', drag > 30 ? 'border-emerald-leaf bg-emerald-pale' : 'border-cream-deep bg-white')}>
          <ArrowRight className="mx-auto h-4 w-4" aria-hidden /> {tx(right.label)}
        </div>
      </div>

      {!done && (
        <>
          <p className="text-center text-sm text-ink-muted">
            {t('lesson.swipeHint')} · <span className="num font-semibold">{deck.length - index}</span> {t('lesson.cardsLeft')}
          </p>
          <div className="relative h-72">
            {/* The draggable shell stays mounted across cards (key never changes), so
                framer-motion's drag gesture never races a key-swap/exit animation.
                Only the content inside is swapped, with its own small fade. */}
            <motion.div
              drag={verdict ? false : 'x'}
              dragSnapToOrigin
              dragElastic={0.7}
              onDrag={(_, info) => setDrag(info.offset.x)}
              onDragEnd={onDragEnd}
              animate={{ x: 0, rotate: drag / 18 }}
              transition={{ duration: 0.2 }}
              style={{ touchAction: 'pan-y' }}
              className={cn(
                'absolute inset-x-2 top-4 flex h-64 cursor-grab flex-col overflow-hidden rounded-3xl border-2 bg-white text-center shadow-card active:cursor-grabbing',
                verdict ? (verdict.ok ? 'border-emerald-leaf' : 'border-clay-soft') : 'border-cream-deep',
              )}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={card.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex h-full flex-col"
                >
                  {card.image && <SmartImage src={card.image} alt="" tone="dusk" className="pointer-events-none h-20 w-full shrink-0" />}
                  <div className="flex min-h-0 flex-1 flex-col justify-center gap-1.5 overflow-y-auto p-5">
                    <p className="shrink-0 text-sm font-bold tracking-wide text-gold">{tx(card.who)}</p>
                    <p className={cn('shrink-0 font-semibold leading-snug', card.image ? 'text-base md:text-lg' : 'text-xl md:text-2xl')}>{tx(card.deed)}</p>
                  </div>
                </motion.div>
              </AnimatePresence>
            </motion.div>
          </div>

          {verdict ? (
            <div className="space-y-3">
              <FeedbackMessage status={verdict.ok ? 'correct' : 'incorrect'} title={verdict.ok ? t('lesson.correct') : t('lesson.almost')}>
                <span className="font-semibold">{tx(verdict.card.side === 'left' ? left.tag : right.tag)}.</span> {tx(verdict.card.explanation)}
              </FeedbackMessage>
              <button type="button" onClick={next} className="btn-primary">
                {t('lesson.nextQuestion')}
              </button>
            </div>
          ) : (
            <div dir="ltr" className="grid grid-cols-2 gap-3">
              <button type="button" onClick={() => decide('left')} className="btn-secondary !py-4">
                <ArrowLeft className="h-4 w-4" aria-hidden /> {tx(left.tag)}
              </button>
              <button type="button" onClick={() => decide('right')} className="btn-primary !py-4">
                {tx(right.tag)} <ArrowRight className="h-4 w-4" aria-hidden />
              </button>
            </div>
          )}
        </>
      )}

      {done && (
        <div className="space-y-4">
          <FeedbackMessage status="correct" title={t('lesson.swipeDone')}>
            <span className="num font-bold">{hits} / {deck.length}</span>
          </FeedbackMessage>
          <div className="grid gap-3 sm:grid-cols-2">
            {([['left', left], ['right', right]] as const).map(([side, def]) => (
              <section key={side} className="card !p-4">
                <h3 className="mb-2 font-semibold">{tx(def.label)}</h3>
                <ul className="space-y-1 text-sm text-ink-soft">
                  {pile(side).map((c) => (
                    <li key={c.id}>• {tx(c.who)}</li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
          <button type="button" onClick={restart} className="btn-secondary">
            <RotateCcw className="h-4 w-4" aria-hidden /> {t('lesson.tryAgain')}
          </button>
        </div>
      )}
    </div>
  )
}
