import { AnimatePresence, motion } from 'framer-motion'
import { Hand } from 'lucide-react'
import type { StoryCard as StoryCardData } from '@/data'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { CertaintyBadge } from '@/components/ui/CertaintyBadge'

type Props = {
  card: StoryCardData
  index: number
  revealed: boolean
  onReveal: () => void
}

// Image-first card: the illustration invites curiosity, a tap reveals the short fact.
export function StoryCard({ card, index, revealed, onReveal }: Props) {
  const { t, tx } = useI18n()

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="overflow-hidden rounded-3xl border border-cream-deep/60 bg-white shadow-card"
    >
      <button
        type="button"
        onClick={onReveal}
        aria-expanded={revealed}
        className="group relative block w-full text-start"
      >
        <SmartImage src={card.image} alt={tx(card.imageAlt)} tone="dusk" className="aspect-[4/3] w-full" />
        <span className="num absolute start-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-sm font-bold text-emerald-deep shadow-soft">
          {index + 1}
        </span>
        {!revealed && (
          <span className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full bg-ink/70 py-2.5 text-sm font-medium text-white backdrop-blur-sm transition group-hover:bg-ink/80">
            <Hand className="h-4 w-4" aria-hidden /> {t('lesson.tapToFlip')}
          </span>
        )}
      </button>
      <AnimatePresence initial={false}>
        {revealed && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className={cn('space-y-2 p-5')}>
              <CertaintyBadge certainty={card.certainty} />
              <p className="text-base leading-relaxed text-ink md:text-lg">{tx(card.fact)}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.article>
  )
}
