import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Pair = { id: string; left: LocalizedText; right: LocalizedText }
type Side = 'left' | 'right'

type Props = {
  pairs: Pair[]
  explanation?: string
  onAnswer?: (noMistakes: boolean) => void
}

// Tap one item on either side, then its partner. Each attempt is judged immediately.
export function MatchingGame({ pairs, explanation, onAnswer }: Props) {
  const { t, tx } = useI18n()
  const [rightOrder] = useState(() => shuffle(pairs))
  const [selected, setSelected] = useState<{ side: Side; id: string } | null>(null)
  const [matched, setMatched] = useState<string[]>([])
  const [mistakes, setMistakes] = useState(0)
  const [wrongFlash, setWrongFlash] = useState<string[]>([])

  const done = matched.length === pairs.length

  const choose = (side: Side, id: string) => {
    if (matched.includes(id) || done) return
    if (!selected || selected.side === side) {
      setSelected({ side, id })
      return
    }
    if (selected.id === id) {
      const next = [...matched, id]
      setMatched(next)
      if (next.length === pairs.length) onAnswer?.(mistakes === 0)
    } else {
      setMistakes((m) => m + 1)
      const flash = [`${selected.side}:${selected.id}`, `${side}:${id}`]
      setWrongFlash(flash)
      window.setTimeout(() => setWrongFlash([]), 700)
    }
    setSelected(null)
  }

  const itemClass = (side: Side, id: string) => {
    const isMatched = matched.includes(id)
    const isSelected = selected?.side === side && selected.id === id
    const isWrong = wrongFlash.includes(`${side}:${id}`)
    return cn(
      'flex min-h-14 w-full items-center gap-2 rounded-2xl border-2 px-4 py-2 text-start font-medium transition-colors',
      isMatched && 'border-emerald-leaf bg-emerald-pale text-emerald-deep',
      isSelected && 'border-gold bg-cream-soft shadow-card',
      isWrong && 'border-clay-soft bg-[#FBEDE4]',
      !isMatched && !isSelected && !isWrong && 'border-cream-deep bg-white hover:bg-cream-soft',
    )
  }

  const column = (side: Side, list: Pair[]) => (
    <ul className="space-y-2.5">
      {list.map((p) => (
        <li key={p.id}>
          <motion.button
            type="button"
            onClick={() => choose(side, p.id)}
            disabled={matched.includes(p.id)}
            aria-pressed={selected?.side === side && selected.id === p.id}
            animate={wrongFlash.includes(`${side}:${p.id}`) ? { x: [0, -5, 5, 0] } : undefined}
            className={itemClass(side, p.id)}
          >
            {matched.includes(p.id) && <Link2 className="h-4 w-4 shrink-0" aria-hidden />}
            {tx(side === 'left' ? p.left : p.right)}
          </motion.button>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-muted">{t('lesson.matchHint')}</p>
      <div className="grid grid-cols-2 gap-3 md:gap-6">
        {column('left', pairs)}
        {column('right', rightOrder)}
      </div>
      {wrongFlash.length > 0 && <FeedbackMessage status="incorrect" title={t('lesson.almost')} />}
      {done && (
        <FeedbackMessage status="correct" title={t('lesson.correct')}>
          {explanation}
        </FeedbackMessage>
      )}
    </div>
  )
}
