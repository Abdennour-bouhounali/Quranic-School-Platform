import type { Grade, Module } from './types'

export const grade: Grade = {
  id: 'g1',
  ageRange: '10–13',
  title: {
    ar: 'المستوى الأول',
    fr: 'Niveau 1',
    en: 'Level 1',
  },
}

export const seerahModule: Module = {
  id: 'seerah',
  gradeId: 'g1',
  title: {
    ar: 'السيرة النبوية',
    fr: 'La biographie du Prophète ﷺ',
    en: 'The Prophetic Biography ﷺ',
  },
  description: {
    ar: 'رحلة في قصة النبي ﷺ من مكة قبل البعثة إلى بدايات الرسالة.',
    fr: 'Un voyage dans l’histoire du Prophète ﷺ, de la Mecque avant la Révélation aux débuts du message.',
    en: 'A journey through the story of the Prophet ﷺ, from Makkah before the revelation to the early message.',
  },
}
