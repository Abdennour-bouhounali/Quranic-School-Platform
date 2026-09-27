import type { Grade, Module, Semester } from './types'

// ── Ibadite History grades ───────────────────────────────────────────────────

export const historyIbadiGrade1: Grade = {
  id: 'history-ibadi-g1',
  ageRange: '',
  title: {
    ar: 'المستوى الأول',
    fr: 'Niveau 1',
    en: 'Grade 1',
  },
}

export const historyIbadiGrade2: Grade = {
  id: 'history-ibadi-g2',
  ageRange: '',
  title: {
    ar: 'المستوى الثاني — التاريخ الإباضي',
    fr: 'Niveau 2 — Histoire Ibadite',
    en: 'Grade 2 — Ibadite History',
  },
}

export const historyIbadiGrade3: Grade = {
  id: 'history-ibadi-g3',
  ageRange: '',
  status: 'draft',
  title: {
    ar: 'المستوى الثالث — التاريخ الإباضي',
    fr: 'Niveau 3 — Histoire Ibadite',
    en: 'Grade 3 — Ibadite History',
  },
}

// ── Ibadite History modules ───────────────────────────────────────────────────

function makeHistoryIbadiModule(gradeId: string): Module {
  return {
    id: gradeId,
    gradeId,
    title: {
      ar: 'التاريخ الإباضي',
      fr: "Histoire de l'Ibadisme",
      en: 'History of Ibadism',
    },
    description: {
      ar: 'رحلة عبر تاريخ الإسلام من البعثة النبوية إلى نشأة المذهب الإباضي وتطوره في المشرق والمغرب.',
      fr: "Un voyage à travers l'histoire de l'Islam, des débuts de la révélation à l'émergence et au développement de l'Ibadisme en Orient et en Occident.",
      en: 'A journey through Islamic history, from the prophetic mission to the rise and spread of Ibadism in the East and West.',
    },
  }
}

export const historyIbadiModule1 = makeHistoryIbadiModule('history-ibadi-g1')
export const historyIbadiModule2 = makeHistoryIbadiModule('history-ibadi-g2')
export const historyIbadiModule3 = makeHistoryIbadiModule('history-ibadi-g3')

// ── Ibadite History semesters ────────────────────────────────────────────────
// Each grade has 2 semesters (S1, S2).
// The underlying curriculum blocks are distributed: G1→blocks 1&2, G2→blocks 3&4, G3→blocks 5&6.
// The semester display names are always S1 and S2 within each grade.

const S1_TITLE = { ar: 'الفصل الأول', fr: 'Semestre 1', en: 'S1' }
const S2_TITLE = { ar: 'الفصل الثاني', fr: 'Semestre 2', en: 'S2' }

export const historyIbadiSemesters: Semester[] = [
  { id: 'history-ibadi-g1-s1', moduleId: 'history-ibadi-g1', gradeId: 'history-ibadi-g1', order: 1, title: S1_TITLE },
  { id: 'history-ibadi-g1-s2', moduleId: 'history-ibadi-g1', gradeId: 'history-ibadi-g1', order: 2, title: S2_TITLE },
  { id: 'history-ibadi-g2-s1', moduleId: 'history-ibadi-g2', gradeId: 'history-ibadi-g2', order: 1, title: S1_TITLE },
  { id: 'history-ibadi-g2-s2', moduleId: 'history-ibadi-g2', gradeId: 'history-ibadi-g2', order: 2, title: S2_TITLE },
  { id: 'history-ibadi-g3-s1', moduleId: 'history-ibadi-g3', gradeId: 'history-ibadi-g3', order: 1, title: S1_TITLE },
  { id: 'history-ibadi-g3-s2', moduleId: 'history-ibadi-g3', gradeId: 'history-ibadi-g3', order: 2, title: S2_TITLE },
]
