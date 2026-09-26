import { motion } from 'framer-motion'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'

type Props = {
  steps: { id: string; label: string }[]
  currentIndex: number
  visited: string[]
  onSelect: (index: number) => void
}

// Segmented progress: one segment per section. Visited segments are clickable.
export function LessonProgress({ steps, currentIndex, visited, onSelect }: Props) {
  const { t } = useI18n()
  return (
    <nav aria-label={t('a11y.lessonSteps')} className="w-full">
      <ol className="flex items-center gap-1">
        {steps.map((s, i) => {
          const isCurrent = i === currentIndex
          const isVisited = visited.includes(s.id) || i < currentIndex
          return (
            <li key={s.id} className="flex-1">
              <button
                type="button"
                disabled={!isVisited && !isCurrent}
                onClick={() => onSelect(i)}
                aria-current={isCurrent ? 'step' : undefined}
                aria-label={`${t('lesson.step')} ${i + 1}: ${s.label}`}
                title={s.label}
                className="group relative block h-6 w-full disabled:cursor-default"
              >
                <span className="absolute inset-x-0 top-1/2 h-1.5 -translate-y-1/2 overflow-hidden rounded-full bg-cream-deep">
                  <motion.span
                    className={cn('block h-full rounded-full', isCurrent ? 'bg-gold' : 'bg-emerald-leaf')}
                    initial={false}
                    animate={{ width: isVisited || isCurrent ? '100%' : '0%' }}
                    transition={{ duration: 0.4 }}
                  />
                </span>
              </button>
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
