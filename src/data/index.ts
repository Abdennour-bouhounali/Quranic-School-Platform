import {
  historyIbadiGrade1,
  historyIbadiGrade2,
  historyIbadiGrade3,
  historyIbadiModule1,
  historyIbadiModule2,
  historyIbadiModule3,
  historyIbadiSemesters,
} from './grades'
import { prophetBirthYouth } from './lessons/prophet-birth-youth'
import { missionMushrikin } from './lessons/history-ibadi/g1-s1-l2-mission-mushrikin'
import { jamalSiffin } from './lessons/history-ibadi/g2-s1-l1-jamal-siffin'
import { nahrawanMuhakkima } from './lessons/history-ibadi/g2-s1-l2-nahrawan-muhakkima'
import { iqtisadRustami } from './lessons/history-ibadi/g3-s1-l1-iqtisad-rustami'
import { suqutRustamiyya } from './lessons/history-ibadi/g3-s1-l2-suqut-rustamiyya'
import { historyIbadiLessons } from './lessons/history-ibadi'
import type { Grade, Lesson, Module, Semester } from './types'

// The only entry point components use to read content.
// Swap these implementations for API calls when a backend exists.

const lessons: Lesson[] = [
  prophetBirthYouth,
  missionMushrikin,
  jamalSiffin,
  nahrawanMuhakkima,
  iqtisadRustami,
  suqutRustamiyya,
  ...historyIbadiLessons,
]

const ALL_GRADES: Grade[] = [
  historyIbadiGrade1,
  historyIbadiGrade2,
  historyIbadiGrade3,
]

const ALL_MODULES: Module[] = [
  historyIbadiModule1,
  historyIbadiModule2,
  historyIbadiModule3,
]

export function getGrades(): Grade[] {
  return ALL_GRADES
}

export function getModules(gradeId: string): Module[] {
  return ALL_MODULES.filter((m) => m.gradeId === gradeId)
}

export function getSemesters(moduleId: string): Semester[] {
  return historyIbadiSemesters.filter((s) => s.moduleId === moduleId)
}

export function getLessons(moduleId: string): Lesson[] {
  return lessons.filter((l) => l.moduleId === moduleId)
}

export function getLessonsBySemester(semesterId: string): Lesson[] {
  return lessons.filter((l) => l.semesterId === semesterId).sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
}

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id)
}

export type * from './types'
