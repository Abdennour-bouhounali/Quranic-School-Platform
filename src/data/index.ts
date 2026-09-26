import { grade, seerahModule } from './grades'
import { prophetBirthYouth } from './lessons/prophet-birth-youth'
import type { Grade, Lesson, Module } from './types'

// The only entry point components use to read content.
// Swap these implementations for API calls when a backend exists.

const lessons: Lesson[] = [prophetBirthYouth]

export function getGrades(): Grade[] {
  return [grade]
}

export function getModules(gradeId: string): Module[] {
  return [seerahModule].filter((m) => m.gradeId === gradeId)
}

export function getLessons(moduleId: string): Lesson[] {
  return lessons.filter((l) => l.moduleId === moduleId)
}

export function getLesson(id: string): Lesson | undefined {
  return lessons.find((l) => l.id === id)
}

export type * from './types'
