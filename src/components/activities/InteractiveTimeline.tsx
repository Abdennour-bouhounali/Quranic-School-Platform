import { useRef, useState, type KeyboardEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { TimelineStep } from '@/data'
import { useI18n } from '@/i18n'
import { cn } from '@/lib/utils'
import { CertaintyBadge } from '@/components/ui/CertaintyBadge'

type Props = { steps: TimelineStep[] }

// Vertical on phones, horizontal from md up. Arrow keys move between stops
// (respecting reading direction).
export function InteractiveTimeline({ steps }: Props) {
  const { t, tx, dir } = useI18n()
  const [activeIndex, setActiveIndex] = useState(0)
  const [seen, setSeen] = useState<number[]>([0])
  const buttons = useRef<(HTMLButtonElement | null)[]>([])
  const active = steps[activeIndex]

  const select = (i: number) => {
    setActiveIndex(i)
    setSeen((s) => (s.includes(i) ? s : [...s, i]))
  }

  const onKeyDown = (e: KeyboardEvent) => {
    const forward = dir === 'rtl' ? 'ArrowLeft' : 'ArrowRight'
    const backward = dir === 'rtl' ? 'ArrowRight' : 'ArrowLeft'
    let next = activeIndex
    if (e.key === forward || e.key === 'ArrowDown') next = Math.min(activeIndex + 1, steps.length - 1)
    else if (e.key === backward || e.key === 'ArrowUp') next = Math.max(activeIndex - 1, 0)
    else return
    e.preventDefault()
    select(next)
    buttons.current[next]?.focus()
  }

  const fill = steps.length > 1 ? (activeIndex / (steps.length - 1)) * 100 : 100

  return (
    <div className="space-y-6">
      <div className="relative" role="tablist" aria-orientation="horizontal" onKeyDown={onKeyDown}>
        {/* track: vertical (mobile) */}
        <div className="absolute bottom-6 start-[1.35rem] top-6 w-1 rounded-full bg-cream-deep md:hidden">
          <motion.div className="w-full rounded-full bg-emerald-leaf" animate={{ height: `${fill}%` }} transition={{ duration: 0.4 }} />
        </div>
        {/* track: horizontal (md+) */}
        <div className="absolute inset-x-[10%] top-[1.35rem] hidden h-1 rounded-full bg-cream-deep md:block">
          <motion.div className="h-full rounded-full bg-emerald-leaf" animate={{ width: `${fill}%` }} transition={{ duration: 0.4 }} />
        </div>

        <ol className="relative flex flex-col gap-3 md:flex-row md:gap-0">
          {steps.map((s, i) => {
            const isActive = i === activeIndex
            const isSeen = seen.includes(i)
            return (
              <li key={s.id} className="md:flex-1">
                <button
                  ref={(el) => (buttons.current[i] = el)}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => select(i)}
                  className="flex w-full items-center gap-3 rounded-2xl p-1 text-start md:flex-col md:text-center"
                >
                  <span
                    className={cn(
                      'num flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-4 text-sm font-bold transition-all',
                      isActive
                        ? 'scale-110 border-gold-soft bg-emerald-deep text-white shadow-glow'
                        : isSeen
                          ? 'border-cream-soft bg-emerald-leaf text-white'
                          : 'border-cream-soft bg-white text-ink-muted shadow-soft',
                    )}
                  >
                    {i + 1}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wide text-gold">{tx(s.period)}</span>
                    <span className={cn('block text-sm font-semibold', isActive ? 'text-ink' : 'text-ink-soft')}>{tx(s.label)}</span>
                  </span>
                </button>
              </li>
            )
          })}
        </ol>
      </div>

      <AnimatePresence mode="wait">
        <motion.article
          key={active.id}
          role="tabpanel"
          initial={{ opacity: 0, x: dir === 'rtl' ? -20 : 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="card border-s-4 border-s-gold"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="chip">{tx(active.period)}</span>
            <CertaintyBadge certainty={active.certainty} />
          </div>
          <h3 className="mt-3 text-xl font-semibold">{tx(active.label)}</h3>
          <p className="mt-2 text-base leading-relaxed text-ink-soft md:text-lg">{tx(active.detail)}</p>
          <p className="mt-4 text-xs text-ink-muted">
            <span className="num">{seen.length}/{steps.length}</span> {t('lesson.stepsExplored')}
          </p>
        </motion.article>
      </AnimatePresence>
    </div>
  )
}
