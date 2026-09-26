import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import { DIRECTION, LOCALES, type Direction, type Locale, type LocalizedText } from './types'
import { ui, type UiKey } from './strings'
import { readStorage, writeStorage } from '@/lib/utils'

type I18nContextValue = {
  locale: Locale
  dir: Direction
  setLocale: (l: Locale) => void
  // Interface string by key, e.g. t('lesson.next')
  t: (key: UiKey) => string
  // Resolve any localized content value (lesson data)
  tx: (value: LocalizedText) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)
const STORAGE_KEY = 'qs.locale'
const DEFAULT_LOCALE: Locale = 'ar'

function initialLocale(): Locale {
  const stored = readStorage<Locale | null>(STORAGE_KEY, null)
  return stored && LOCALES.includes(stored) ? stored : DEFAULT_LOCALE
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale)
  const dir = DIRECTION[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.documentElement.dir = dir
    document.title = `${ui.app.brand[locale]}`
  }, [locale, dir])

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l)
    writeStorage(STORAGE_KEY, l)
  }, [])

  const value = useMemo<I18nContextValue>(() => {
    const t = (key: UiKey) => {
      const [group, name] = key.split('.') as [keyof typeof ui, string]
      return (ui[group] as Record<string, LocalizedText>)[name][locale]
    }
    const tx = (v: LocalizedText) => v[locale]
    return { locale, dir, setLocale, t, tx }
  }, [locale, dir, setLocale])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within <I18nProvider>')
  return ctx
}

export { LOCALES, LOCALE_LABEL } from './types'
export type { Locale, LocalizedText, Direction } from './types'
export type { UiKey } from './strings'
