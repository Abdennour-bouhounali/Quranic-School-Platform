import type { Lesson } from '../../types'

// ── Curriculum ───────────────────────────────────────────────────────────────
// Source: authoritative Ibadite History curriculum (Arabic titles preserved).
// Do NOT rename, merge, split, reorder, or invent lessons.
// Content (sections) will be provided lesson by lesson in a later phase.

type LessonDef = { titleAr: string }

const CURRICULUM: Record<string, LessonDef[]> = {
  s1: [
    { titleAr: 'ميلاد الرسول(ص) - نشأته - شبابه' },
    { titleAr: 'بعثة الرسول (ص) وموقف المشركين' },
    { titleAr: 'الهجرة إلى الحبشة والمدينة' },
    { titleAr: 'نشأة الدولة الإسلامية' },
    { titleAr: 'الغزوات: بدر - أحد - الخندق' },
    { titleAr: 'صلح الحديبية ونشر الإسلام' },
  ],
  s2: [
    { titleAr: 'فتح مكة وحجة الوداع' },
    { titleAr: 'وفاة الرسول وخلافته' },
    { titleAr: 'خلافة أبو بكر الصديق' },
    { titleAr: 'خلافة عمر بن الخطاب' },
    { titleAr: 'خلافة عثمان بن عفان' },
    { titleAr: 'خلافة علي بن أبي طالب' },
  ],
  s3: [
    { titleAr: 'وقعة الجمل ومعركة الصفين' },
    { titleAr: 'معركة النهروان وظهور المحكمة' },
    { titleAr: 'أهل الدعوة والاستقامة' },
    { titleAr: 'الإمام جابر بن زيد وعبد الله بن إباض' },
    { titleAr: 'إمامة أبو عبيدة بن أبي كريمة' },
    { titleAr: 'الإمامة في اليمن والحجاز وعمان' },
  ],
  s4: [
    { titleAr: 'دخول الإسلام إلى شمال إفريقيا' },
    { titleAr: 'تطور المغرب ودخول حملة العلم' },
    { titleAr: 'تأسيس إمامة طرابلس' },
    { titleAr: 'نشأة الدولة الرستمية' },
    { titleAr: 'أئمة الدولة الرستمية' },
    { titleAr: 'ولاء المغرب لتاهرت' },
  ],
  s5: [
    { titleAr: 'التطور الاقتصادي في العهد الرستمي' },
    { titleAr: 'سقوط الدولة الرستمية' },
    { titleAr: 'أهل الاستقامة في القرنين 4 و5 هجري' },
    { titleAr: 'ازدهار وارجلان وسدراتة' },
    { titleAr: 'ازدهار نفوسة وجربة' },
    { titleAr: 'من نظام الإمامة إلى نظام الحلقة' },
  ],
  s6: [
    { titleAr: 'نظام حلقة العزابة' },
    { titleAr: 'شخصيات إباضية - المشرق -' },
    { titleAr: 'شخصيات إباضية - المغرب -' },
    { titleAr: 'شخصيات إباضية - واد مزاب -' },
  ],
}

// ── Grade → semester mapping ──────────────────────────────────────────────────
// G1 covers curriculum blocks s1 & s2 (displayed as S1 & S2 in grade 1)
// G2 covers curriculum blocks s3 & s4 (displayed as S1 & S2 in grade 2)
// G3 covers curriculum blocks s5 & s6 (displayed as S1 & S2 in grade 3)

const GRADE_SEMESTER_MAP: Record<string, [string, string]> = {
  'history-ibadi-g1': ['s1', 's2'],
  'history-ibadi-g2': ['s3', 's4'],
  'history-ibadi-g3': ['s5', 's6'],
}

// ── Stub factory ─────────────────────────────────────────────────────────────
// A stub is a structurally valid Lesson with no sections (content phase: later).
// semesterSlot is 's1' or 's2' (the display slot within the grade).
// curriculumBlock is the source block key ('s1'–'s6').

function makeStubLesson(gradeId: string, semesterSlot: string, _curriculumBlock: string, order: number, def: LessonDef): Lesson {
  const gradeShort = gradeId.replace('history-ibadi-', '')
  const id = `history-ibadi-${gradeShort}-${semesterSlot}-l${order}`
  const semesterId = `${gradeId}-${semesterSlot}`

  return {
    id,
    gradeId,
    moduleId: gradeId,
    semesterId,
    order,
    status: 'draft',
    title: {
      ar: def.titleAr,
      fr: def.titleAr,
      en: def.titleAr,
    },
    description: { ar: '', fr: '', en: '' },
    estimatedMinutes: 0,
    cover: '/images/lesson-draft-cover.jpg',
    coverAlt: { ar: 'غلاف الدرس', fr: 'Couverture du cours', en: 'Lesson cover' },
    sections: [],
  }
}

// ── Generate all stubs ────────────────────────────────────────────────────────
// 3 grades × 2 semesters × 6 (or 4) lessons = 34 per grade, 34 total (no duplication)

// prophet-birth-youth owns g1-s1 lesson 1; skip that stub to avoid duplication.
const G1_S1_SKIP = 0

// jamalSiffin owns g2-s1 lesson 1; skip that stub to avoid duplication.
const G2_S1_SKIP = 0

export const historyIbadiLessons: Lesson[] = Object.entries(GRADE_SEMESTER_MAP).flatMap(
  ([gradeId, [slot1, slot2]]) => [
    ...CURRICULUM[slot1]
      .filter(
        (_, i) =>
          !(gradeId === 'history-ibadi-g1' && i === G1_S1_SKIP) &&
          !(gradeId === 'history-ibadi-g2' && i === G2_S1_SKIP),
      )
      .map((def) => makeStubLesson(gradeId, 's1', slot1, CURRICULUM[slot1].indexOf(def) + 1, def)),
    ...CURRICULUM[slot2].map((def, i) => makeStubLesson(gradeId, 's2', slot2, i + 1, def)),
  ],
)
