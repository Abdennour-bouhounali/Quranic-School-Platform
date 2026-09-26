import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import type { Hotspot } from '@/data'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { SmartImage, type SceneTone } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = {
  image: string
  imageAlt: string
  hotspots: Hotspot[]
  tone?: SceneTone
}

export function HotspotExplorer({ image, imageAlt, hotspots, tone = 'day' }: Props) {
  const { t, tx } = useI18n()
  const [activeId, setActiveId] = useState<string | null>(null)
  const [seen, setSeen] = useState<string[]>([])
  const active = hotspots.find((h) => h.id === activeId)

  const open = (id: string) => {
    setActiveId(id)
    setSeen((s) => (s.includes(id) ? s : [...s, id]))
  }

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,34rem)_1fr] lg:items-start">
      <div className="relative mx-auto w-full max-w-[34rem] overflow-hidden rounded-3xl shadow-card">
        {/* Uncropped square so hotspot percentages stay aligned with the artwork. */}
        <SmartImage src={image} alt={imageAlt} tone={tone} className="aspect-square w-full" />
        {hotspots.map((h, i) => {
          const isSeen = seen.includes(h.id)
          const isActive = h.id === activeId
          return (
            <button
              key={h.id}
              type="button"
              onClick={() => open(h.id)}
              aria-pressed={isActive}
              aria-label={tx(h.label)}
              // Physical `left`: the artwork does not mirror in RTL, so neither do its hotspots.
              style={{ left: `${h.x}%`, top: `${h.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2"
            >
              <span className="relative flex h-11 w-11 items-center justify-center">
                {!isSeen && (
                  <span className="absolute inset-0 animate-ping rounded-full bg-gold-soft/60 motion-reduce:animate-none" />
                )}
                <span
                  className={cn(
                    'relative flex h-9 w-9 items-center justify-center rounded-full border-2 text-xs font-bold shadow-soft transition-transform',
                    isActive ? 'scale-110 border-white bg-emerald-deep text-white' : 'border-white bg-gold text-white',
                    isSeen && !isActive && 'bg-emerald-leaf',
                  )}
                >
                  {isSeen ? <Check className="h-4 w-4" aria-hidden /> : <span className="num">{i + 1}</span>}
                </span>
              </span>
            </button>
          )
        })}
      </div>

      <div className="space-y-4">
        <p className="text-sm font-semibold text-ink-muted">
          {t('lesson.discovered')}: <span className="num text-emerald-deep">{seen.length} / {hotspots.length}</span>
        </p>

        <AnimatePresence mode="wait">
          {active ? (
            <motion.article
              key={active.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.25 }}
              className="card relative"
            >
              <button
                type="button"
                onClick={() => setActiveId(null)}
                aria-label={t('a11y.close')}
                className="absolute end-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-ink-muted hover:bg-cream"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
              <h3 className="pe-10 text-xl font-semibold">{tx(active.label)}</h3>
              <p className="mt-2 leading-relaxed text-ink-soft">{tx(active.description)}</p>
            </motion.article>
          ) : (
            <motion.ul key="list" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-wrap gap-2">
              {hotspots.map((h) => (
                <li key={h.id}>
                  <button
                    type="button"
                    onClick={() => open(h.id)}
                    className={cn(
                      'min-h-11 rounded-full border px-4 text-sm font-medium transition-colors',
                      seen.includes(h.id)
                        ? 'border-emerald-soft/40 bg-emerald-pale text-emerald-deep'
                        : 'border-cream-deep bg-white hover:bg-cream',
                    )}
                  >
                    {tx(h.label)}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>

        <FeedbackMessage status="correct" show={seen.length === hotspots.length} title={t('lesson.allDiscovered')} />
      </div>
    </div>
  )
}
