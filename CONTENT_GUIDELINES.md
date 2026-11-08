# Content Guidelines

Rules for anyone writing or reviewing lesson content, translations or illustrations.
The quality of a lesson matters more than its length.

## 1. Respect for the Prophet ﷺ and the prophets

- **Never depict the Prophet Muhammad ﷺ visually.** That rules out a face, body, silhouette, shadow, hands, a back view, a figure of light, or any human figure that could be read as him.
- **Never depict the other prophets or the Companions (الصحابة) either**: no face, figure, silhouette or back view of them, and no crowd, army or gathering in a scene where the Prophet ﷺ or Companions were present (the Black Stone, Ḥilf al-Fuḍūl, Ḥirāʾ, the Hijra, Badr, the Camel, Ṣiffīn, ʿAlī's army at Nahrawan, his assassination…). Such scenes are told through landscapes, architecture, objects, animals, light and sky.
- Other people may appear (later rulers, armies and townspeople, e.g. the Rustamid or Fatimid periods), as long as nothing in the picture could be read as the Prophet ﷺ or a Companion.
- Write **محمد ﷺ** with ﷺ after his name and after "the Prophet". Use (عليه السلام / peace be upon him) for other prophets, and (رضي الله عنها / may God be pleased with her) for Companions such as Khadīja.
- Treat the Kaaba respectfully: no playful distortion, and no gamified effects on it.

## 2. Historical reliability

Before adding a fact, ask:

1. Is it reliable (Qur'an, authentic hadith, or agreed upon in the classical Sīra sources)?
2. Does this age group need it?
3. Can it be shown visually?
4. Can the learner interact with it?
5. Does it help them understand the story?

**Source of truth:** the textbook slides in `Other ressources/*.pdf` (and the photos in `ressources/`). **Every piece of information in a lesson's slides must appear in the lesson.** Do not drop slide content because it is debated or weakly reported.

Then:

- **Established** facts are stated plainly.
- **Imprecise or debated** details that are in the slides (ages, some dates) are kept, and marked `certainty: 'approximate'` / phrased with "about / نحو / environ" where the schema allows.
- **Clear errors in the slides are corrected**, not copied: a wrong year (e.g. a birth year of 632 CE instead of about 571 CE), a wrong place, an obvious typo that reverses the meaning, and spelling or grammar mistakes.
- Never invent details to make an activity work. If an activity needs a fact that isn't in the sources, change the activity.

### Choices made in the reference lesson

| Topic | Treatment | Why |
|---|---|---|
| Birth | "the Year of the Elephant", Monday 12 Rabīʿ al-Awwal, about 571 CE | As the slides state, with the slide's Gregorian year (632, the year of his death) corrected |
| Birth wonders (the light, the star, Kisrā's palace) | kept, as in the slides | The slides include them |
| Mother's death, marriage and other ages | as in the slides, approximate badge | Reports differ slightly |
| Shepherding | stated, with his ﷺ statement that every prophet shepherded | Authentic hadith (al-Bukhārī) |

Changes to religious or historical content should be reviewed by a qualified teacher before release.

## 3. Pedagogy

The flow is **See → Explore → Interact → Think → Discover → Practice → Remember**.

- **Short text:** one idea per card, ideally one or two sentences. If it needs a paragraph, split it or turn it into an interaction.
- **Image first:** each illustration has an educational purpose. No decorative stock images.
- **Values come from the story.** Every value card cites where it appears in the lesson (e.g. al-Amīn → trust). Morals are never attached artificially.
- **Vary the interactions.** Don't repeat the same question format several times in a row.
- **Encourage, never shame.** Feedback for a wrong answer is a hint plus an explanation ("Almost! Think again…"). Use no red ✗, no "wrong!", and no losing states. Progress is never blocked.
- **Age 10–13 register:** respectful and warm, not babyish. Avoid cartoon tone and preschool vocabulary.

## 4. Translation

- Arabic is the reference text. French and English carry the same meaning and level. They are not word-for-word translations.
- Transliterate names consistently: Ḥalīma as-Sa‘diyya, ‘Abd al-Muṭṭalib, Abū Ṭālib, Khadīja, Quraysh, Banū Sa‘d, al-Shām / Shām.
- Keep ﷺ in every language.
- Keep strings short enough for phone widths. Check a French string whenever the Arabic one is short.

## 5. Accessibility of content

- Every image has meaningful `imageAlt` in all three languages. Decorative images use an empty alt.
- Don't rely on color alone. Feedback also uses icons and text.
- Numbers inside Arabic text use the `.num` class in UI code so they stay readable.
