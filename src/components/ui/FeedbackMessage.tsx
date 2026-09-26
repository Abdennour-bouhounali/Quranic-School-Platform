import { AnimatePresence, motion } from 'framer-motion'
import { CheckCircle2, Lightbulb, Sparkles } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export type FeedbackStatus = 'correct' | 'incorrect' | 'info'

const STYLES: Record<FeedbackStatus, { box: string; Icon: typeof CheckCircle2 }> = {
  correct: { box: 'bg-emerald-pale text-emerald-deep border-emerald-soft/40', Icon: CheckCircle2 },
  incorrect: { box: 'bg-[#FBEDE4] text-[#7A3A25] border-clay-soft/50', Icon: Lightbulb },
  info: { box: 'bg-cream text-ink-soft border-cream-deep', Icon: Sparkles },
}

// Encouraging, never shaming: wrong answers use a lightbulb ("think again"), not an ✗.
export function FeedbackMessage({
  status,
  title,
  children,
  show = true,
}: {
  status: FeedbackStatus
  title?: string
  children?: ReactNode
  show?: boolean
}) {
  const { box, Icon } = STYLES[status]
  return (
    <AnimatePresence initial={false}>
      {show && (
        <motion.div
          role="status"
          aria-live="polite"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 4 }}
          transition={{ duration: 0.25 }}
          className={cn('flex gap-3 rounded-2xl border p-4 text-sm leading-relaxed', box)}
        >
          <Icon className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />
          <div>
            {title && <p className="font-semibold">{title}</p>}
            {children && <div className={cn(title && 'mt-0.5 opacity-90')}>{children}</div>}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
