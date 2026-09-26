import { useState, type DragEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2 } from 'lucide-react'
import type { PlacementCard, PlacementSlot } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = {
  slots: PlacementSlot[]
  cards: PlacementCard[]
}

type Attempt = { cardId: string; slotId: string; ok: boolean }

// Two input paths, same logic: native drag & drop (mouse) and tap-card-then-tap-slot
// (touch + keyboard). A wrong drop explains why and returns the card — never blocks.
export function PlacementGame({ slots, cards }: Props) {
  const { t, tx } = useI18n()
  const [pool, setPool] = useState(() => shuffle(cards))
  const [placed, setPlaced] = useState<Record<string, PlacementCard[]>>({})
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const [overSlot, setOverSlot] = useState<string | null>(null)
  const [last, setLast] = useState<Attempt | null>(null)

  const place = (cardId: string, slotId: string) => {
    const card = pool.find((c) => c.id === cardId)
    if (!card) return
    const ok = card.slotId === slotId
    setLast({ cardId, slotId, ok })
    setSelectedId(null)
    if (ok) {
      setPool((p) => p.filter((c) => c.id !== cardId))
      setPlaced((p) => ({ ...p, [slotId]: [...(p[slotId] ?? []), card] }))
    }
  }

  const onDrop = (e: DragEvent, slotId: string) => {
    e.preventDefault()
    setOverSlot(null)
    place(e.dataTransfer.getData('text/plain'), slotId)
  }

  const lastCard = last && cards.find((c) => c.id === last.cardId)
  const lastSlot = last && slots.find((s) => s.id === last.slotId)
  const done = pool.length === 0

  return (
    <div className="space-y-6">
      {/* card pool */}
      {!done && (
        <div>
          <p className="mb-2 text-sm font-semibold text-ink-muted">{t('lesson.cardsToPlace')}</p>
          <ul className="flex flex-wrap gap-2.5">
            <AnimatePresence>
              {pool.map((c) => {
                const isSelected = c.id === selectedId
                return (
                  <motion.li key={c.id} layout exit={{ opacity: 0, scale: 0.8 }}>
                    <button
                      type="button"
                      draggable
                      onDragStart={(e) => {
                        e.dataTransfer.setData('text/plain', c.id)
                        setSelectedId(c.id)
                      }}
                      onClick={() => setSelectedId(isSelected ? null : c.id)}
                      aria-pressed={isSelected}
                      className={cn(
                        'min-h-12 cursor-grab rounded-2xl border-2 bg-white px-4 py-2 text-start font-medium shadow-soft transition-all active:cursor-grabbing',
                        isSelected ? '-translate-y-1 border-gold bg-cream-soft shadow-card' : 'border-cream-deep hover:border-sand-deep',
                        last && !last.ok && last.cardId === c.id && 'animate-[shake_0.35s]',
                      )}
                    >
                      {tx(c.label)}
                    </button>
                  </motion.li>
                )
              })}
            </AnimatePresence>
          </ul>
        </div>
      )}

      {/* timeline slots */}
      <ol className="grid gap-3 md:grid-cols-3">
        {slots.map((s, i) => {
          const isOver = overSlot === s.id
          const armed = selectedId !== null
          return (
            <li key={s.id}>
              <button
                type="button"
                onClick={() => selectedId && place(selectedId, s.id)}
                onDragOver={(e) => {
                  e.preventDefault()
                  setOverSlot(s.id)
                }}
                onDragLeave={() => setOverSlot(null)}
                onDrop={(e) => onDrop(e, s.id)}
                aria-disabled={!armed}
                aria-label={armed ? `${t('lesson.dropHere')}: ${tx(s.label)}` : tx(s.label)}
                className={cn(
                  'flex min-h-40 w-full flex-col rounded-3xl border-2 border-dashed p-4 text-start transition-colors',
                  isOver ? 'border-gold bg-gold-soft/15' : armed ? 'border-emerald-soft bg-emerald-pale/50' : 'border-cream-deep bg-white/60',
                  !armed && 'cursor-default',
                )}
              >
                <span className="flex items-center gap-2">
                  <span className="num flex h-7 w-7 items-center justify-center rounded-full bg-emerald-deep text-xs font-bold text-white">{i + 1}</span>
                  <span className="font-semibold">{tx(s.label)}</span>
                </span>
                <span className="mt-3 flex flex-col gap-2">
                  {(placed[s.id] ?? []).map((c) => (
                    <motion.span
                      key={c.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center gap-2 rounded-xl bg-emerald-pale px-3 py-2 text-sm font-medium text-emerald-deep"
                    >
                      <CheckCircle2 className="h-4 w-4 shrink-0" aria-hidden />
                      {tx(c.label)}
                    </motion.span>
                  ))}
                  {armed && <span className="text-xs text-ink-muted">{t('lesson.dropHere')}</span>}
                </span>
              </button>
            </li>
          )
        })}
      </ol>

      {done ? (
        <FeedbackMessage status="correct" title={t('lesson.allPlaced')} />
      ) : (
        last &&
        lastCard &&
        lastSlot && (
          <FeedbackMessage
            key={`${last.cardId}-${last.slotId}`}
            status={last.ok ? 'correct' : 'incorrect'}
            title={last.ok ? t('lesson.correct') : `${t('lesson.notHere')} ${tx(lastSlot.label)}`}
          >
            {!last.ok && tx(lastCard.hint)}
          </FeedbackMessage>
        )
      )}
    </div>
  )
}
