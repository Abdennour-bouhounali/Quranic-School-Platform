import { useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, ChevronUp, Lock, LockOpen } from 'lucide-react'
import type { VaultDial } from '@/data'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { SmartImage } from '@/components/ui/SmartImage'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

type Props = { dials: VaultDial[]; treasure: LocalizedText; image?: string; imageAlt?: string }

// A combination lock. Each dial answers one question; "open" checks them all at once.
// Right dials click into place, the others glow with a hint, and the learner turns again.
export function VaultGame({ dials, treasure, image, imageAlt }: Props) {
  const { t, tx } = useI18n()
  // Shuffle each dial once, and make sure it does not start on its answer.
  const wheels = useMemo(
    () =>
      dials.map((d) => {
        const options = shuffle(d.options)
        if (options.length > 1 && options[0].id === d.correctId) options.push(options.shift()!)
        return options
      }),
    [dials],
  )
  const [positions, setPositions] = useState<number[]>(() => dials.map(() => 0))
  const [fixed, setFixed] = useState<string[]>([])
  const [stuck, setStuck] = useState<string[]>([])
  const [attempt, setAttempt] = useState(0)

  const open = fixed.length === dials.length

  const turn = (i: number, step: number) => {
    setPositions((p) => p.map((v, j) => (j === i ? (v + step + wheels[i].length) % wheels[i].length : v)))
    setStuck((s) => s.filter((id) => id !== dials[i].id))
  }

  const tryOpen = () => {
    const right = dials.filter((d, i) => wheels[i][positions[i]].id === d.correctId).map((d) => d.id)
    setFixed(right)
    setStuck(dials.filter((d) => !right.includes(d.id)).map((d) => d.id))
    setAttempt((a) => a + 1)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <div className="relative overflow-hidden rounded-3xl bg-night-makkah shadow-card">
        {image && (
          <SmartImage
            src={image}
            alt={imageAlt ?? ''}
            tone="night"
            className={cn('aspect-[16/8] w-full transition-all duration-1000', open ? 'scale-100 blur-0' : 'scale-110 opacity-50 blur-md')}
          />
        )}
        <div className={cn('flex items-center justify-center', image ? 'absolute inset-0' : 'py-8')}>
          <motion.span
            key={open ? 'open' : `shut-${attempt}`}
            initial={open ? { scale: 0.6, rotate: -20 } : { x: 0 }}
            animate={open ? { scale: 1, rotate: 0 } : { x: attempt ? [0, -8, 8, -5, 5, 0] : 0 }}
            transition={{ duration: 0.5 }}
            className={cn('flex h-20 w-20 items-center justify-center rounded-full border-4 shadow-xl', open ? 'border-gold-soft bg-gold text-ink' : 'border-white/40 bg-[#13283A] text-gold-soft')}
          >
            {open ? <LockOpen className="h-9 w-9" aria-hidden /> : <Lock className="h-9 w-9" aria-hidden />}
          </motion.span>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div initial={{ opacity: 0, y: 16, scale: 0.96 }} animate={{ opacity: 1, y: 0, scale: 1 }} className="rounded-3xl border-2 border-gold bg-cream-soft p-6 text-center shadow-card">
            <p className="text-sm font-semibold tracking-widest text-gold">{t('lesson.vaultOpen')}</p>
            <p className="mt-2 text-lg font-semibold leading-relaxed md:text-xl">{tx(treasure)}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <ol className="space-y-3">
        {dials.map((d, i) => {
          const isFixed = fixed.includes(d.id)
          const isStuck = stuck.includes(d.id)
          const value = wheels[i][positions[i]]
          return (
            <li key={d.id} className={cn('card flex items-center gap-4 !p-4 transition-colors', isFixed && 'border-emerald-soft bg-emerald-pale', isStuck && 'border-clay-soft')}>
              <div className="min-w-0 flex-1 space-y-1">
                <p className="text-xs font-semibold tracking-widest text-gold">
                  {t('lesson.vaultDial')} <span className="num">{i + 1}</span>
                </p>
                <p className="font-semibold leading-snug">{tx(d.question)}</p>
                {isStuck && <p className="text-sm leading-snug text-[#7A3A25]">{tx(d.hint)}</p>}
              </div>
              <div className="flex w-28 shrink-0 flex-col items-center gap-1 rounded-2xl bg-[#13283A] p-1.5 text-cream-soft sm:w-32">
                <button type="button" disabled={isFixed} onClick={() => turn(i, -1)} aria-label={t('lesson.moveUp')} className="flex h-9 w-full items-center justify-center rounded-xl hover:bg-white/10 disabled:opacity-20">
                  <ChevronUp className="h-5 w-5" aria-hidden />
                </button>
                <motion.span
                  key={value.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  aria-live="polite"
                  className={cn('flex min-h-11 w-full items-center justify-center rounded-xl px-1 text-center text-base font-bold leading-tight', isFixed ? 'bg-emerald-leaf' : 'bg-gold text-ink')}
                >
                  {tx(value.label)}
                </motion.span>
                <button type="button" disabled={isFixed} onClick={() => turn(i, 1)} aria-label={t('lesson.moveDown')} className="flex h-9 w-full items-center justify-center rounded-xl hover:bg-white/10 disabled:opacity-20">
                  <ChevronDown className="h-5 w-5" aria-hidden />
                </button>
              </div>
            </li>
          )
        })}
      </ol>

      {!open && (
        <>
          <button type="button" onClick={tryOpen} className="btn bg-gold px-7 py-4 text-base text-ink hover:bg-gold-soft">
            <Lock className="h-5 w-5" aria-hidden /> {t('lesson.vaultTry')}
          </button>
          {attempt > 0 && <FeedbackMessage key={attempt} status="incorrect" title={t('lesson.vaultStuck')} />}
        </>
      )}
    </div>
  )
}
