import { Languages } from 'lucide-react'
import { useI18n, LOCALES, LOCALE_LABEL } from '@/i18n'
import { cn } from '@/lib/utils'

export function LanguageSwitcher({ tone = 'light' }: { tone?: 'light' | 'dark' }) {
  const { locale, setLocale, t } = useI18n()

  return (
    <div
      role="group"
      aria-label={t('a11y.language')}
      className={cn(
        'inline-flex items-center gap-0.5 rounded-full p-1 border',
        tone === 'light' ? 'bg-white/80 border-cream-deep shadow-soft' : 'bg-white/10 border-white/15',
      )}
    >
      <Languages
        aria-hidden
        className={cn('w-4 h-4 mx-1.5 hidden sm:block', tone === 'light' ? 'text-ink-muted' : 'text-cream/70')}
      />
      {LOCALES.map((l) => {
        const active = l === locale
        return (
          <button
            key={l}
            type="button"
            lang={l}
            aria-pressed={active}
            onClick={() => setLocale(l)}
            className={cn(
              'min-h-9 px-3 text-xs font-semibold rounded-full transition-colors',
              active
                ? 'bg-emerald-deep text-cream-soft'
                : tone === 'light'
                  ? 'text-ink-soft hover:bg-cream'
                  : 'text-cream/80 hover:bg-white/10',
            )}
          >
            {LOCALE_LABEL[l]}
          </button>
        )
      })}
    </div>
  )
}
