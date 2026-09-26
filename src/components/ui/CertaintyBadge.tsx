import { Info } from 'lucide-react'
import type { Certainty } from '@/data'
import { useI18n } from '@/i18n'

// Makes uncertain historical details visible to learners instead of hiding them.
export function CertaintyBadge({ certainty }: { certainty?: Certainty }) {
  const { t } = useI18n()
  if (certainty !== 'approximate') return null
  return (
    <span
      title={t('lesson.approximateHelp')}
      className="inline-flex items-center gap-1 rounded-full bg-sand/60 px-2 py-0.5 text-[11px] font-semibold text-ink-soft"
    >
      <Info className="h-3 w-3" aria-hidden />
      {t('lesson.approximate')}
      <span className="sr-only">: {t('lesson.approximateHelp')}</span>
    </span>
  )
}
