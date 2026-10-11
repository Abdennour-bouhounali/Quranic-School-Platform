import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { RotateCcw, SkipForward } from 'lucide-react'
import type { ChatReplyOption, ChatSpeaker, ChatStep } from '@/data'
import type { LocalizedText } from '@/i18n'
import { useI18n } from '@/i18n'
import { cn, shuffle } from '@/lib/utils'
import { FeedbackMessage } from '@/components/ui/FeedbackMessage'

const TYPING_MS = 1100

type Bubble = { id: string; who: string; text: LocalizedText }

const BUBBLE_TONE: Record<ChatSpeaker['tone'], string> = {
  emerald: 'bg-emerald-pale text-emerald-deep',
  gold: 'bg-gold-soft/30 text-ink',
  night: 'bg-[#1E3A55] text-cream-soft',
  clay: 'bg-[#FBEDE4] text-[#7A3A25]',
}
const AVATAR_TONE: Record<ChatSpeaker['tone'], string> = {
  emerald: 'bg-emerald-deep text-cream-soft',
  gold: 'bg-gold text-white',
  night: 'bg-[#0F1F2E] text-gold-soft',
  clay: 'bg-clay text-white',
}

type Props = { speakers: ChatSpeaker[]; steps: ChatStep[] }

// A messaging-app replay of a dialogue. Messages arrive on their own with a typing
// indicator; at "reply" steps the learner chooses what the speaker said.
export function ChatStory({ speakers, steps }: Props) {
  const { t, tx } = useI18n()
  const [bubbles, setBubbles] = useState<Bubble[]>([])
  const [cursor, setCursor] = useState(0)
  const [typing, setTyping] = useState(false)
  const [hint, setHint] = useState<{ key: number; text: string } | null>(null)
  const [wrongIds, setWrongIds] = useState<string[]>([])
  const endRef = useRef<HTMLDivElement>(null)

  const step = steps[cursor]
  const done = cursor >= steps.length
  const speaker = (id: string) => speakers.find((s) => s.id === id)!

  const replyOptions = useMemo<ChatReplyOption[]>(() => (step?.type === 'reply' ? shuffle(step.options) : []), [step])

  useEffect(() => {
    if (!step || step.type !== 'msg') return
    setTyping(true)
    const timer = window.setTimeout(() => {
      setBubbles((b) => [...b, { id: step.id, who: step.who, text: step.text }])
      setTyping(false)
      setCursor((c) => c + 1)
    }, TYPING_MS)
    return () => window.clearTimeout(timer)
  }, [step])

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'nearest', behavior: 'smooth' })
  }, [bubbles.length, typing, cursor])

  const choose = (opt: ChatReplyOption) => {
    if (step?.type !== 'reply') return
    if (!opt.correct) {
      setWrongIds((w) => [...w, opt.id])
      setHint({ key: Date.now(), text: tx(opt.hint) })
      return
    }
    setBubbles((b) => [...b, { id: step.id, who: step.who, text: opt.label }])
    setHint(null)
    setWrongIds([])
    setCursor((c) => c + 1)
  }

  const skip = () => {
    const out: Bubble[] = []
    let i = cursor
    while (i < steps.length && steps[i].type === 'msg') {
      const s = steps[i]
      if (s.type === 'msg') out.push({ id: s.id, who: s.who, text: s.text })
      i++
    }
    setBubbles((b) => [...b, ...out])
    setTyping(false)
    setCursor(i)
  }

  const replay = () => {
    setBubbles([])
    setCursor(0)
    setHint(null)
    setWrongIds([])
  }

  const typingSpeaker = step?.type === 'msg' ? speaker(step.who) : null

  return (
    <div className="mx-auto max-w-2xl overflow-hidden rounded-3xl border border-cream-deep bg-[#EFE6D3] shadow-card">
      <div className="flex items-center justify-between gap-3 bg-emerald-deep px-4 py-3 text-cream-soft">
        <div className="flex -space-x-2 rtl:space-x-reverse">
          {speakers.map((s) => (
            <span key={s.id} className={cn('flex h-8 w-8 items-center justify-center rounded-full border-2 border-emerald-deep text-sm font-bold', AVATAR_TONE[s.tone])} aria-hidden>
              {s.avatar}
            </span>
          ))}
        </div>
        <p className="min-w-0 flex-1 truncate text-sm font-semibold">{speakers.map((s) => tx(s.name)).join(' · ')}</p>
        {!done && step?.type === 'msg' && (
          <button type="button" onClick={skip} className="btn-ghost !px-3 !py-1.5 text-cream-soft hover:!bg-white/10">
            <SkipForward className="h-4 w-4 rtl:rotate-180" aria-hidden /> {t('lesson.skip')}
          </button>
        )}
      </div>

      <div className="min-h-64 space-y-3 p-4" aria-live="polite">
        {bubbles.map((b) => {
          const s = speaker(b.who)
          return (
            <motion.div
              key={b.id}
              initial={{ opacity: 0, y: 10, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.25 }}
              className={cn('flex items-end gap-2', s.side === 'end' && 'flex-row-reverse')}
            >
              <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold', AVATAR_TONE[s.tone])} aria-hidden>
                {s.avatar}
              </span>
              <div className={cn('max-w-[82%] rounded-2xl px-4 py-2.5 shadow-soft', BUBBLE_TONE[s.tone], s.side === 'start' ? 'rounded-es-sm' : 'rounded-ee-sm')}>
                <p className="mb-0.5 text-xs font-bold opacity-70">{tx(s.name)}</p>
                <p className="leading-relaxed">{tx(b.text)}</p>
              </div>
            </motion.div>
          )
        })}

        {typing && typingSpeaker && (
          <div className={cn('flex items-end gap-2', typingSpeaker.side === 'end' && 'flex-row-reverse')} aria-label={`${tx(typingSpeaker.name)} ${t('lesson.typing')}`}>
            <span className={cn('flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-bold', AVATAR_TONE[typingSpeaker.tone])} aria-hidden>
              {typingSpeaker.avatar}
            </span>
            <div className="flex gap-1.5 rounded-2xl bg-white px-4 py-3 shadow-soft">
              {[0, 1, 2].map((i) => (
                <motion.span key={i} className="h-2 w-2 rounded-full bg-ink-muted" animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }} />
              ))}
            </div>
          </div>
        )}
        <div ref={endRef} />
      </div>

      <AnimatePresence>
        {step?.type === 'reply' && (
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="space-y-3 border-t border-cream-deep bg-cream-soft p-4">
            <p className="text-sm font-semibold text-ink-soft">
              {tx(speaker(step.who).name)} — {tx(step.prompt)}
            </p>
            <ul className="grid gap-2">
              {replyOptions.map((o) => {
                const wrong = wrongIds.includes(o.id)
                return (
                  <li key={o.id}>
                    <button
                      type="button"
                      onClick={() => choose(o)}
                      className={cn(
                        'w-full rounded-2xl border-2 bg-white px-4 py-3 text-start font-medium transition-colors',
                        wrong ? 'border-clay-soft bg-[#FBEDE4] opacity-70' : 'border-cream-deep hover:border-gold',
                      )}
                    >
                      {tx(o.label)}
                    </button>
                  </li>
                )
              })}
            </ul>
            {hint && (
              <FeedbackMessage key={hint.key} status="incorrect" title={t('lesson.almost')}>
                {hint.text}
              </FeedbackMessage>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {done && (
        <div className="border-t border-cream-deep bg-cream-soft p-4">
          <button type="button" onClick={replay} className="btn-secondary">
            <RotateCcw className="h-4 w-4" aria-hidden /> {t('lesson.replay')}
          </button>
        </div>
      )}
    </div>
  )
}
