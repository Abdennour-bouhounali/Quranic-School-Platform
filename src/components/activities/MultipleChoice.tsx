import { useState } from 'react'
import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

export type ChoiceOption = { id: string; label: string; feedback?: string }

type Props = {
  options: ChoiceOption[]
  correctId: string
  // true: wrong picks are explained and the learner keeps trying.
  // false: one attempt, then the correct answer is revealed (quiz mode).
  allowRetry?: boolean
  explanation?: string
  onAnswer?: (firstTryCorrect: boolean) => void
  onSolved?: () => void
}

export function MultipleChoice({ options, correctId, allowRetry = false, explanation, onAnswer, onSolved }: Props) {
  const { t } = useI18n()
  const [tried, setTried] = useState<string[]>([])
  const last = tried[tried.length - 1]
  const solved = tried.includes(correctId)
  const locked = solved || (!allowRetry && tried.length > 0)

  const pick = (id: string) => {
    if (locked || tried.includes(id)) return
    if (tried.length === 0) onAnswer?.(id === correctId)
    if (id === correctId) onSolved?.()
    setTried((x) => [...x, id])
  }

  const lastOption = options.find((o) => o.id === last)
  const status = last === correctId ? 'correct' : 'incorrect'

  return (
    <div className="space-y-4">
      <ul className="grid gap-2.5 sm:grid-cols-2">
        {options.map((o, i) => {
          const isCorrect = o.id === correctId
          const wasTried = tried.includes(o.id)
          const reveal = locked && isCorrect
          return (
            <li key={o.id}>
              <motion.button
                type="button"
                onClick={() => pick(o.id)}
                disabled={locked || wasTried}
                whileTap={{ scale: 0.98 }}
                animate={wasTried && isCorrect ? { scale: [1, 1.04, 1] } : undefined}
                className={cn(
                  'flex min-h-14 w-full items-center gap-3 rounded-2xl border-2 px-4 py-3 text-start font-medium transition-colors',
                  reveal || (wasTried && isCorrect)
                    ? 'border-emerald-leaf bg-emerald-pale text-emerald-deep'
                    : wasTried
                      ? 'border-clay-soft bg-[#FBEDE4] text-[#7A3A25]'
                      : 'border-cream-deep bg-white hover:border-sand-deep hover:bg-cream-soft',
                  locked && !isCorrect && !wasTried && 'opacity-60',
                )}
              >
                <span className="num flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cream text-sm font-bold text-ink-soft">
                  {String.fromCharCode(65 + i)}
                </span>
                {o.label}
              </motion.button>
            </li>
          )
        })}
      </ul>

      {last && (
        <FeedbackMessage key={last} status={status} title={status === 'correct' ? t('lesson.correct') : t('lesson.almost')}>
          {lastOption?.feedback ?? (locked ? explanation : undefined)}
        </FeedbackMessage>
      )}
    </div>
  )
}
