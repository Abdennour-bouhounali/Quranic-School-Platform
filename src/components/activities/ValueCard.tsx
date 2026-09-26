import { useState } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import { RefreshCw, Sparkles } from 'lucide-react'
import { useI18n } from '@/i18n'

type Props = { value: string; evidence: string; index: number }

// Flip card: front names a value, back grounds it in a moment from the story.
export function ValueCard({ value, evidence, index }: Props) {
  const { t } = useI18n()
  const [flipped, setFlipped] = useState(false)
  const reduce = useReducedMotion()

  return (
    <motion.button
      type="button"
      onClick={() => setFlipped((f) => !f)}
      aria-pressed={flipped}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.07 }}
      className="relative h-44 w-full [perspective:1000px]"
    >
      <motion.span
        className="relative block h-full w-full [transform-style:preserve-3d]"
        animate={reduce ? undefined : { rotateY: flipped ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <span
          className="absolute inset-0 flex flex-col items-center justify-center gap-3 rounded-3xl bg-emerald-warm p-5 text-cream-soft shadow-card [backface-visibility:hidden]"
          style={reduce && flipped ? { visibility: 'hidden' } : undefined}
        >
          <Sparkles className="h-6 w-6 text-gold-soft" aria-hidden />
          <span className="text-xl font-semibold">{value}</span>
          <span className="text-xs text-cream/70">{t('lesson.tapToFlip')}</span>
        </span>
        <span
          className="absolute inset-0 flex flex-col justify-center gap-2 rounded-3xl border border-cream-deep bg-white p-5 text-start shadow-card [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={reduce ? { transform: 'none', visibility: flipped ? 'visible' : 'hidden' } : undefined}
        >
          <span className="text-sm font-semibold text-gold">{value}</span>
          <span className="leading-relaxed text-ink">{evidence}</span>
          <RefreshCw className="absolute bottom-3 end-3 h-4 w-4 text-ink-muted" aria-hidden />
        </span>
      </motion.span>
    </motion.button>
  )
}
