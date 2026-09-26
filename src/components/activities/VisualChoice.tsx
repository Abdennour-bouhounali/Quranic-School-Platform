import { useState } from 'react'
import { CheckCircle2 } from 'lucide-react'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Option = { id: string; image: string; label: string }

type Props = {
  options: Option[]
  correctId: string
  explanation?: string
  onAnswer?: (correct: boolean) => void
}

export function VisualChoice({ options, correctId, explanation, onAnswer }: Props) {
  const { t } = useI18n()
  const [choice, setChoice] = useState<string | null>(null)

  const pick = (id: string) => {
    if (choice) return
    setChoice(id)
    onAnswer?.(id === correctId)
  }

  return (
    <div className="space-y-4">
      <ul className="grid grid-cols-3 gap-2.5 md:gap-4">
        {options.map((o) => {
          const isAnswer = choice !== null && o.id === correctId
          const isWrongPick = choice === o.id && o.id !== correctId
          return (
            <li key={o.id}>
              <button
                type="button"
                onClick={() => pick(o.id)}
                disabled={choice !== null}
                aria-pressed={choice === o.id}
                className={cn(
                  'group relative block w-full overflow-hidden rounded-2xl border-4 bg-white text-start shadow-soft transition-all',
                  isAnswer ? 'border-emerald-leaf' : isWrongPick ? 'border-clay-soft' : 'border-transparent hover:border-sand',
                  choice !== null && !isAnswer && !isWrongPick && 'opacity-50',
                )}
              >
                <SmartImage src={o.image} alt={o.label} className="aspect-square w-full transition-transform group-hover:scale-105" />
                <span className="block px-2 py-2 text-center text-xs font-semibold md:text-sm">{o.label}</span>
                {isAnswer && (
                  <CheckCircle2 className="absolute end-2 top-2 h-7 w-7 rounded-full bg-white text-emerald-leaf" aria-hidden />
                )}
              </button>
            </li>
          )
        })}
      </ul>
      {choice && (
        <FeedbackMessage status={choice === correctId ? 'correct' : 'incorrect'} title={choice === correctId ? t('lesson.correct') : t('lesson.almost')}>
          {explanation}
        </FeedbackMessage>
      )}
    </div>
  )
}
