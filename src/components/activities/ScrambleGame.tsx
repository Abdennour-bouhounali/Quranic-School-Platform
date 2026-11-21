import { useEffect, useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import type { ScrambleWord } from '@/data'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

// Rebuild a key word of the lesson from its shuffled letters, one tap at a time.
// The word is taken in the learner's language, so the tiles are Arabic or Latin letters.
export function ScrambleGame({ words }: { words: ScrambleWord[] }) {
  const { t, tx, locale } = useI18n()
  const [index, setIndex] = useState(0)
  const [placed, setPlaced] = useState<number[]>([])
  const [miss, setMiss] = useState<{ key: number; tile: number } | null>(null)

  const word = words[index]
  const letters = useMemo(() => (word ? Array.from(tx(word.word).toLocaleUpperCase(locale)) : []), [word, tx, locale])
  const tiles = useMemo(() => shuffle(letters.map((char, id) => ({ char, id }))), [letters])

  // A change of language swaps the letters, so the current word starts over.
  useEffect(() => {
    setPlaced([])
    setMiss(null)
  }, [letters])

  if (!word) {
    return (
      <div className="mx-auto max-w-2xl space-y-4">
        <FeedbackMessage status="correct" title={t('lesson.scrambleAll')} />
        <button type="button" onClick={() => setIndex(0)} className="btn-secondary">
          {t('lesson.replay')}
        </button>
      </div>
    )
  }

  const solved = placed.length === letters.length

  const tap = (tile: { char: string; id: number }) => {
    if (tile.char === letters[placed.length]) {
      setPlaced((p) => [...p, tile.id])
      setMiss(null)
    } else {
      setMiss({ key: Date.now(), tile: tile.id })
    }
  }

  const next = () => {
    setIndex((i) => i + 1)
    setPlaced([])
    setMiss(null)
  }

  return (
    <div className="mx-auto max-w-2xl space-y-5">
      <p className="num text-sm font-semibold text-ink-muted">{index + 1} / {words.length}</p>
      <section className="card space-y-6 text-center">
        <p className="text-lg font-semibold leading-relaxed md:text-xl">{tx(word.clue)}</p>

        {solved ? (
          <motion.p initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ type: 'spring', stiffness: 180, damping: 12 }} className="text-5xl font-bold text-emerald-deep">
            {tx(word.word)}
          </motion.p>
        ) : (
          <>
            <ol className="flex flex-wrap justify-center gap-2" aria-label={t('lesson.scrambleHint')}>
              {letters.map((char, i) => (
                <li
                  key={i}
                  className={cn(
                    'flex h-14 w-12 items-center justify-center rounded-2xl border-2 text-2xl font-bold',
                    i < placed.length ? 'border-emerald-deep bg-emerald-pale text-emerald-deep' : i === placed.length ? 'border-gold bg-white' : 'border-dashed border-cream-deep bg-cream-soft',
                  )}
                >
                  {i < placed.length ? char : ''}
                </li>
              ))}
            </ol>
            <p className="text-sm text-ink-muted">{t('lesson.scrambleHint')}</p>
            <ul className="flex flex-wrap justify-center gap-2">
              {tiles.map((tile) => {
                const used = placed.includes(tile.id)
                return (
                  <li key={tile.id}>
                    <motion.button
                      type="button"
                      disabled={used}
                      onClick={() => tap(tile)}
                      animate={miss?.tile === tile.id ? { x: [0, -6, 6, -4, 4, 0] } : { x: 0 }}
                      transition={{ duration: 0.35 }}
                      whileTap={{ scale: 0.92 }}
                      className={cn(
                        'flex h-14 w-12 items-center justify-center rounded-2xl text-2xl font-bold shadow-soft transition-opacity',
                        used ? 'bg-cream opacity-25' : 'bg-emerald-deep text-cream-soft hover:bg-emerald-leaf',
                      )}
                    >
                      {tile.char}
                    </motion.button>
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </section>

      {miss && !solved && <FeedbackMessage key={miss.key} status="incorrect" title={t('lesson.scrambleNot')} />}
      {solved && (
        <div className="space-y-3">
          <FeedbackMessage status="correct" title={t('lesson.scrambleDone')}>
            {tx(word.reveal)}
          </FeedbackMessage>
          <button type="button" onClick={next} className="btn-primary">
            {t('lesson.scrambleNext')}
            <ArrowRight className="h-5 w-5 rtl:rotate-180" aria-hidden />
          </button>
        </div>
      )}
    </div>
  )
}
