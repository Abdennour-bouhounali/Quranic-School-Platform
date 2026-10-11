import { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { Link2 } from 'lucide-react'
import type { ChainStep } from '@/data'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = { start: LocalizedText; steps: ChainStep[]; ending: LocalizedText }
type Tile = { text: LocalizedText; image?: string }

type Option = { id: string; label: LocalizedText; correct: boolean; hint?: LocalizedText }

// Cause and effect as dominoes: pick the missing link at each step, and when the chain
// is complete every domino topples in order.
export function DominoChain({ start, steps, ending }: Props) {
  const { t, tx } = useI18n()
  const [current, setCurrent] = useState(0)
  const [wrongIds, setWrongIds] = useState<string[]>([])
  const [hint, setHint] = useState<{ key: number; text: string } | null>(null)

  const step = steps[current]
  const done = current >= steps.length

  const options = useMemo<Option[]>(
    () =>
      step
        ? shuffle<Option>([
            { id: `${step.id}-ok`, label: step.correct, correct: true },
            ...step.distractors.map((d, i) => ({ id: `${step.id}-d${i}`, label: d.label, correct: false, hint: d.hint })),
          ])
        : [],
    [step],
  )

  const pick = (o: Option) => {
    if (o.correct) {
      setCurrent((c) => c + 1)
      setWrongIds([])
      setHint(null)
    } else {
      setWrongIds((w) => [...w, o.id])
      setHint({ key: Date.now(), text: o.hint ? tx(o.hint) : '' })
    }
  }

  const tiles: Tile[] = [{ text: start }, ...steps.slice(0, current).map((s) => ({ text: s.correct, image: s.image })), ...(done ? [{ text: ending }] : [])]

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <ol className="space-y-2">
        {tiles.map(({ text, image }, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0, rotate: done ? (i % 2 ? 2.5 : -2.5) : 0, x: done ? (i % 2 ? 10 : -10) : 0 }}
            transition={{ duration: 0.35, delay: done ? i * 0.18 : 0 }}
            className={cn(
              'flex items-start gap-3 rounded-2xl border-2 px-4 py-3 shadow-soft',
              i === 0 ? 'border-gold bg-gold-soft/20' : done && i === tiles.length - 1 ? 'border-emerald-deep bg-emerald-pale font-semibold' : 'border-emerald-soft/50 bg-white',
            )}
          >
            <span className="num mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-emerald-deep text-xs font-bold text-white">{i + 1}</span>
            <span className="flex-1 leading-relaxed">{tx(text)}</span>
            {image && <SmartImage src={image} alt="" tone="dusk" className="h-14 w-14 shrink-0 rounded-xl" />}
          </motion.li>
        ))}
        {!done && (
          <li className="flex items-center gap-3 rounded-2xl border-2 border-dashed border-sand-deep bg-white/60 px-4 py-3 text-ink-muted">
            <Link2 className="h-5 w-5 shrink-0" aria-hidden />
            <span className="num font-bold">{tiles.length + 1}</span> ?
          </li>
        )}
      </ol>

      {!done && (
        <section className="space-y-3">
          <p className="font-semibold">
            {t('lesson.chainNext')} <span className="text-gold">{tx(step.prompt)}</span>
          </p>
          <ul className="grid gap-2">
            {options.map((o) => (
              <li key={o.id}>
                <button
                  type="button"
                  onClick={() => pick(o)}
                  className={cn(
                    'w-full rounded-2xl border-2 bg-white px-4 py-3 text-start font-medium transition-colors',
                    wrongIds.includes(o.id) ? 'border-clay-soft bg-[#FBEDE4] opacity-70' : 'border-cream-deep hover:border-gold',
                  )}
                >
                  {tx(o.label)}
                </button>
              </li>
            ))}
          </ul>
          {hint && (
            <FeedbackMessage key={hint.key} status="incorrect" title={t('lesson.almost')}>
              {hint.text}
            </FeedbackMessage>
          )}
        </section>
      )}

      {done && <FeedbackMessage status="correct" title={t('lesson.chainDone')} />}
    </div>
  )
}
