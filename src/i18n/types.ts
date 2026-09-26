export type Locale = 'ar' | 'fr' | 'en'

export type Direction = 'rtl' | 'ltr'

export type LocalizedText = Record<Locale, string>

export const LOCALES: Locale[] = ['ar', 'fr', 'en']

export const DIRECTION: Record<Locale, Direction> = {
  ar: 'rtl',
  fr: 'ltr',
  en: 'ltr',
}

// Each language names itself, regardless of the active locale.
export const LOCALE_LABEL: Record<Locale, string> = {
  ar: 'العربية',
  fr: 'Français',
  en: 'English',
}
