import { useState } from 'react'
import { Check } from 'lucide-react'
import type { ReflectionOption } from '@/data'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = {
  prompt: string
  options: ReflectionOption[]
}

// Multi-select "what did we notice?" — each option then explains itself,
// so the learner reasons about *why*, not just right/wrong.
export function ReflectionPicker({ prompt, options }: Props) {
  const { t, tx } = useI18n()
  const [selected, setSelected] = useState<string[]>([])
  const [checked, setChecked] = useState(false)

  const toggle = (id: string) => {
    if (checked) return
    setSelected((s) => (s.includes(id) ? s.filter((x) => x !== id) : [...s, id]))
  }

  const allRight = options.every((o) => o.isRelevant === selected.includes(o.id))

  return (
    <div className="card space-y-4">
      <h3 className="text-lg font-semibold">{prompt}</h3>
      <ul className="grid gap-2 sm:grid-cols-2">
        {options.map((o) => {
          const isOn = selected.includes(o.id)
          return (
            <li key={o.id}>
              <button
                type="button"
                role="checkbox"
                aria-checked={isOn}
                onClick={() => toggle(o.id)}
                className={cn(
                  'flex min-h-12 w-full items-center gap-3 rounded-2xl border px-4 py-2 text-start font-medium transition-colors',
                  isOn ? 'border-emerald-leaf bg-emerald-pale text-emerald-deep' : 'border-cream-deep bg-white hover:bg-cream',
                  checked && o.isRelevant && 'border-emerald-leaf',
                  checked && !o.isRelevant && isOn && 'border-clay-soft bg-[#FBEDE4] text-[#7A3A25]',
                )}
              >
                <span
                  className={cn(
                    'flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2',
                    isOn ? 'border-emerald-leaf bg-emerald-leaf text-white' : 'border-cream-deep',
                  )}
                >
                  {isOn && <Check className="h-4 w-4" aria-hidden />}
                </span>
                {tx(o.label)}
              </button>
              {checked && (isOn || o.isRelevant) && (
                <p className="mt-1.5 px-2 text-sm text-ink-soft">{tx(o.explanation)}</p>
              )}
            </li>
          )
        })}
      </ul>

      {checked ? (
        <FeedbackMessage status={allRight ? 'correct' : 'info'} title={allRight ? t('lesson.correct') : t('lesson.almost')} />
      ) : (
        <button type="button" onClick={() => setChecked(true)} disabled={selected.length === 0} className="btn-primary disabled:opacity-50">
          {t('lesson.check')}
        </button>
      )}
    </div>
  )
}
