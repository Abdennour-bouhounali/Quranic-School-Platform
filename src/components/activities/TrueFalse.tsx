import { useState } from 'react'
import { Check, X } from 'lucide-react'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = {
  answer: boolean
  explanation?: string
  onAnswer?: (correct: boolean) => void
}

export function TrueFalse({ answer, explanation, onAnswer }: Props) {
  const { t } = useI18n()
  const [choice, setChoice] = useState<boolean | null>(null)

  const pick = (v: boolean) => {
    if (choice !== null) return
    setChoice(v)
    onAnswer?.(v === answer)
  }

  const options = [
    { v: true, label: t('lesson.true'), Icon: Check },
    { v: false, label: t('lesson.false'), Icon: X },
  ]

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 gap-3">
        {options.map(({ v, label, Icon }) => {
          const chosen = choice === v
          const isAnswer = choice !== null && v === answer
          return (
            <button
              key={String(v)}
              type="button"
              onClick={() => pick(v)}
              disabled={choice !== null}
              aria-pressed={chosen}
              className={cn(
                'flex min-h-24 flex-col items-center justify-center gap-2 rounded-3xl border-2 text-lg font-semibold transition-colors',
                isAnswer
                  ? 'border-emerald-leaf bg-emerald-pale text-emerald-deep'
                  : chosen
                    ? 'border-clay-soft bg-[#FBEDE4] text-[#7A3A25]'
                    : 'border-cream-deep bg-white hover:bg-cream-soft',
                choice !== null && !isAnswer && !chosen && 'opacity-60',
              )}
            >
              <Icon className="h-7 w-7" aria-hidden />
              {label}
            </button>
          )
        })}
      </div>
      {choice !== null && (
        <FeedbackMessage status={choice === answer ? 'correct' : 'incorrect'} title={choice === answer ? t('lesson.correct') : t('lesson.almost')}>
          {explanation}
        </FeedbackMessage>
      )}
    </div>
  )
}
