import { useState } from 'react'
import { Reorder, useDragControls } from 'framer-motion'
import { ArrowDown, ArrowUp, GripVertical, RotateCcw } from 'lucide-react'
import type { SortingItem } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = {
  // In the correct order; displayed shuffled.
  items: SortingItem[]
  explanation?: string
  onChecked?: (allCorrect: boolean) => void
}

export function SortingGame({ items, explanation, onChecked }: Props) {
  const { t, tx } = useI18n()
  const [order, setOrder] = useState(() => shuffle(items))
  const [checked, setChecked] = useState(false)

  const correctIndex = (id: string) => items.findIndex((i) => i.id === id)
  const allCorrect = order.every((item, i) => correctIndex(item.id) === i)

  const move = (from: number, to: number) => {
    if (to < 0 || to >= order.length) return
    const next = [...order]
    const [moved] = next.splice(from, 1)
    next.splice(to, 0, moved)
    setOrder(next)
  }

  const check = () => {
    setChecked(true)
    onChecked?.(allCorrect)
  }

  const retry = () => {
    setOrder(shuffle(items))
    setChecked(false)
  }

  return (
    <div className="space-y-4">
      {!checked && <p className="text-sm text-ink-muted">{t('lesson.dragHint')}</p>}

      <Reorder.Group axis="y" values={order} onReorder={checked ? () => {} : setOrder} className="space-y-2.5">
        {order.map((item, i) => (
          <SortableRow
            key={item.id}
            item={item}
            position={i}
            total={order.length}
            label={tx(item.label)}
            locked={checked}
            status={checked ? (correctIndex(item.id) === i ? 'correct' : 'incorrect') : undefined}
            onMove={move}
          />
        ))}
      </Reorder.Group>

      {checked ? (
        <>
          <FeedbackMessage status={allCorrect ? 'correct' : 'incorrect'} title={allCorrect ? t('lesson.orderCorrect') : t('lesson.orderPartial')}>
            {!allCorrect && (
              <ol className="mt-1 list-inside list-decimal space-y-0.5">
                {items.map((it) => (
                  <li key={it.id}>{tx(it.label)}</li>
                ))}
              </ol>
            )}
            {explanation && <p className="mt-2">{explanation}</p>}
          </FeedbackMessage>
          {!allCorrect && (
            <button type="button" onClick={retry} className="btn-secondary">
              <RotateCcw className="h-4 w-4" aria-hidden /> {t('lesson.tryAgain')}
            </button>
          )}
        </>
      ) : (
        <button type="button" onClick={check} className="btn-primary">
          {t('lesson.check')}
        </button>
      )}
    </div>
  )
}

type RowProps = {
  item: SortingItem
  position: number
  total: number
  label: string
  locked: boolean
  status?: 'correct' | 'incorrect'
  onMove: (from: number, to: number) => void
}

function SortableRow({ item, position, total, label, locked, status, onMove }: RowProps) {
  const { t } = useI18n()
  const controls = useDragControls()

  return (
    <Reorder.Item
      value={item}
      dragListener={false}
      dragControls={controls}
      className={cn(
        'flex items-center gap-2 rounded-2xl border bg-white p-2 shadow-soft',
        status === 'correct' && 'border-emerald-soft bg-emerald-pale',
        status === 'incorrect' && 'border-clay-soft bg-[#FBEDE4]',
        !status && 'border-cream-deep',
      )}
    >
      <button
        type="button"
        aria-hidden
        tabIndex={-1}
        disabled={locked}
        onPointerDown={(e) => !locked && controls.start(e)}
        className="flex h-11 w-9 shrink-0 cursor-grab touch-none items-center justify-center rounded-xl text-ink-muted active:cursor-grabbing disabled:cursor-default disabled:opacity-40"
      >
        <GripVertical className="h-5 w-5" />
      </button>
      <span className="num flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-sm font-bold text-emerald-deep">
        {position + 1}
      </span>
      <span className="flex-1 py-2 font-medium leading-snug">{label}</span>
      {!locked && (
        <span className="flex shrink-0 flex-col gap-0.5">
          <button
            type="button"
            onClick={() => onMove(position, position - 1)}
            disabled={position === 0}
            aria-label={`${t('lesson.moveUp')}: ${label}`}
            className="flex h-8 w-10 items-center justify-center rounded-lg hover:bg-cream disabled:opacity-30"
          >
            <ArrowUp className="h-4 w-4" aria-hidden />
          </button>
          <button
            type="button"
            onClick={() => onMove(position, position + 1)}
            disabled={position === total - 1}
            aria-label={`${t('lesson.moveDown')}: ${label}`}
            className="flex h-8 w-10 items-center justify-center rounded-lg hover:bg-cream disabled:opacity-30"
          >
            <ArrowDown className="h-4 w-4" aria-hidden />
          </button>
        </span>
      )}
    </Reorder.Item>
  )
}
