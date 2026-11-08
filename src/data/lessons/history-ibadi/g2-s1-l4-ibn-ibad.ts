import type { Lesson } from '../../types'

// Source: Ibadite History textbook (Other ressources/Ibadite_History_S3.pdf), "الدرس السابع عشر: الإمام عبد الله بن إباض", pages 16–21 (slides 1–6).
//   Slide 2 — الإشكالية: التبس الأمر على المسلمين بعد فتنة صفّين، ولم يعد التمييز بين الفرق الإسلامية خاضعًا لمبدأ الحقّ والإنصاف، ومن ضحايا ذلك
//             التعتيم أهل الدعوة والاستقامة، فكان الولاة وعامّة المسلمين يحكمون على أهل الدعوة بما سمعوه عنهم وما قيل فيهم ولو جانب الحقيقة.
//             من سيتولّى إطلاع الناس برأي أهل الدعوة؟
//   Slide 3 — نسبة أهل الدعوة إلى ابن إباض: تكفّل ابن إباض ببيان رأي أهل الدعوة أمام الأمويين لئلّا يلتبس موقفهم، خاصّة من أتباع نافع بن الأزرق؛
//             كان يأمن على نفسه من مكر الحجّاج وغيره بقبيلته بني تميم المستقرّة في العراق، وهي قبيلة مرهوبة؛ فكان يحدّث ويناقش المسائل برأي الإمام جابر.
//             لهذا سمّى الأمويون وعامّة المسلمين أهل الدعوة «أتباع ابن إباض» أو «الإباضية» لظنّهم أنّه فقيههم، والإمام والفقيه المجتهد هو جابر بن زيد.
//             بعد وفاة ابن إباض توقّفت المواقف العلنية، لكنّ ذلك لم يمنع سجن جابر ثمّ نفيه إلى عُمان.
//             بطاقة الإمام: نسبه بنو تميم؛ مولده قبل سنة 23 هـ؛ تعلّم عند كبار الصحابة كعمّار بن ياسر وخزيمة بن ثابت؛ أعماله: الدفاع عن مكّة عند مهاجمة
//             الأمويين لها سنة 63 هـ، محاورة ومراسلة عبد الملك بن مروان، مناقشة مستعملي السيف ضدّ المسلمين من الأزارقة؛ آثاره: نسبة المذهب إليه، رسالة
//             إلى عبد الملك؛ وفاته: لا يزال حيًّا في سنة 86 هـ.
//   Slide 4 — مراسلة عبد الملك بن مروان: أرسل إليه يسأله عن آرائه، فضمّنها نصحًا وبيان آراء أصحابه وموقفهم من انحراف القيادة الأموية عن نهج
//             الخلفاء الراشدين، وكان يصدر في كلّ ذلك عن مشورة جابر بن زيد، فهو تلميذه في العلم وإن كان أكبر منه سنًّا.
//             «… ولا تظلموا الناس شيئًا، وأن يكون كتاب الله حكمًا بيني وبينكم فيما اختلفنا فيه، وأن نتولّى من تولّى الله وأن نبرأ ممّن تبرّأ الله منه».
//   Slide 5 — مواقف أخرى: قيام ابن الزبير بمكّة سنة 63 هـ بعد تولية يزيد ومقتل الحسين، انضمّ إليه أهل الحجاز والعراق ومنهم أصحاب أبي بلال وابن إباض؛
//             حاصر الجيش الأموي مكّة 60 يومًا ورمى الكعبة بالمنجنيق. مناظرات ابن إباض مع نافع بن الأزرق لتعرّضهم للمسلمين واستحلال دمائهم وأموالهم،
//             ومراسلة إليه تنكر آراءه الضالّة، ومناظرة غيرهم ممّن خالفهم.
//   Slide 6 — أعتبر: الحوار والنقاش سبيل لتوضيح الأفكار وإزالة الأوهام؛ حين سكت أهل الحقّ عن الباطل توهّم أهل الباطل أنّهم على حقّ؛
//             الدعوة إلى الله أحسن القول، والاستقامة على الطريق أرفع الفعل.
// Jabir recap facts (imprisonment, exile to Oman) are those already taught in g2-s1-l3. Nothing is added from outside these slides.
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md); the Kaaba is not illustrated in the siege scene.

const IMG = '/images/lessons/ibn-ibad'

export const ibnIbad: Lesson = {
  id: 'history-ibadi-g2-s1-l4',
  gradeId: 'history-ibadi-g2',
  moduleId: 'history-ibadi-g2',
  semesterId: 'history-ibadi-g2-s1',
  order: 4,
  status: 'published',
  estimatedMinutes: 35,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'رسائلُ مطويّة مربوطة بخيطٍ ودواةٌ وقلمٌ على حافّة نافذةٍ مقوّسة، تطلّ على نهرٍ ونخيلٍ وبيوتٍ من الطين عند الغروب',
    fr: 'Des lettres roulées nouées d’une ficelle, un encrier et un calame sur le rebord d’une fenêtre en arc, donnant sur un fleuve, des palmiers et des maisons de terre au couchant',
    en: 'Rolled letters tied with cord, an inkwell and a reed pen on the sill of an arched window overlooking a river, palms and mud-brick houses at dusk',
  },
  title: {
    ar: 'الإمام جابر بن زيد وعبد الله بن إباض',
    fr: 'L’imam Jābir ibn Zayd et ‘Abd Allāh ibn Ibāḍ',
    en: 'Imam Jabir ibn Zayd and ‘Abdullah ibn Ibad',
  },
  description: {
    ar: 'إذا كان جابر بن زيد هو إمام أهل الدعوة، فلماذا سُمّوا «الإباضية»؟ تعرّف على عبد الله بن إباض، لسان أهل الدعوة أمام الأمويين، ورسالته إلى عبد الملك بن مروان، ومواقفه في الدفاع عن الحقّ.',
    fr: 'Si Jābir ibn Zayd est l’imam des gens de l’Appel, pourquoi les a-t-on appelés « Ibāḍites » ? Découvre ‘Abd Allāh ibn Ibāḍ, porte-parole des gens de l’Appel devant les Omeyyades, sa lettre à ‘Abd al-Malik ibn Marwān et ses positions pour défendre la vérité.',
    en: 'If Jabir ibn Zayd was the imam of the People of the Call, why were they called "Ibadis"? Meet ‘Abdullah ibn Ibad, the voice of the People of the Call before the Umayyads, his letter to ‘Abd al-Malik ibn Marwan, and his stands in defence of the truth.',
  },

  sections: [
    // 01 — Hero (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'رسائلُ مطويّة مربوطة بخيطٍ ودواةٌ وقلمٌ على حافّة نافذةٍ مقوّسة، تطلّ على نهرٍ ونخيلٍ وبيوتٍ من الطين عند الغروب',
        fr: 'Des lettres roulées nouées d’une ficelle, un encrier et un calame sur le rebord d’une fenêtre en arc, donnant sur un fleuve, des palmiers et des maisons de terre au couchant',
        en: 'Rolled letters tied with cord, an inkwell and a reed pen on the sill of an arched window overlooking a river, palms and mud-brick houses at dusk',
      },
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'من سيتولّى إطلاع الناس برأي أهل الدعوة؟',
        fr: 'Qui se chargera de faire connaître aux gens l’avis des gens de l’Appel ?',
        en: 'Who will take on the task of making the view of the People of the Call known to people?',
      },
      intro: {
        ar: 'التبس الأمر على المسلمين بعد فتنة صفّين، ولم يعد التمييز بين الفرق خاضعًا لمبدأ الحقّ والإنصاف. ومن ضحايا ذلك التعتيم أهل الدعوة والاستقامة: كان الولاة وعامّة المسلمين يحكمون عليهم بما سمعوه عنهم وما قيل فيهم، ولو جانب الحقيقة.',
        fr: 'Après la discorde de Ṣiffīn, les choses devinrent confuses pour les musulmans, et l’on ne distinguait plus les groupes selon le principe de la vérité et de l’équité. Parmi les victimes de ce brouillage : les gens de l’Appel et de la Rectitude. Gouverneurs et gens du commun les jugeaient sur ce qu’ils avaient entendu et ce qu’on disait d’eux, même si c’était loin de la vérité.',
        en: 'After the strife of Siffin, matters became confused for the Muslims, and groups were no longer told apart by the principle of truth and fairness. Among the victims of this blackout were the People of the Call and Rectitude: governors and ordinary Muslims judged them by what they had heard and what was said of them, even when it strayed from the truth.',
      },
    },

    // 02 — Mission map
    {
      kind: 'missions',
      id: 'missions',
      title: { ar: 'ثلاث مهمّات', fr: 'Trois missions', en: 'Three missions' },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنتقل إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'لماذا سُمّي أهل الدعوة «الإباضية»؟', fr: 'Pourquoi a-t-on appelé les gens de l’Appel « Ibāḍites » ?', en: 'Why were the People of the Call called "Ibadis"?' },
          target: 'reading-nisba',
          teaser: { ar: 'إمامٌ في الظلّ، ولسانٌ في العلن.', fr: 'Un imam dans l’ombre, une voix au grand jour.', en: 'An imam in the shadows, a voice in the open.' },
        },
        {
          id: 'm2',
          question: { ar: 'ماذا كتب ابن إباض إلى عبد الملك بن مروان؟', fr: 'Qu’écrivit Ibn Ibāḍ à ‘Abd al-Malik ibn Marwān ?', en: 'What did Ibn Ibad write to ‘Abd al-Malik ibn Marwan?' },
          target: 'reading-letter',
          teaser: { ar: 'رسالةُ نصحٍ إلى الحاكم.', fr: 'Une lettre de conseil au souverain.', en: 'A letter of counsel to the ruler.' },
        },
        {
          id: 'm3',
          question: { ar: 'ما مواقفه الأخرى؟', fr: 'Quelles furent ses autres positions ?', en: 'What were his other stands?' },
          target: 'reading-stances',
          teaser: { ar: 'من حصار مكّة إلى مناظرة الأزارقة.', fr: 'Du siège de La Mecque au débat avec les Azraqites.', en: 'From the siege of Makkah to debating the Azariqa.' },
        },
      ],
    },

    // 03 — Reading: who is Ibn Ibad (slide 3, card)
    {
      kind: 'reading',
      id: 'reading-who',
      title: { ar: 'اقرأ: من هو عبد الله بن إباض؟', fr: 'Lis : qui est ‘Abd Allāh ibn Ibāḍ ?', en: 'Read: who is ‘Abdullah ibn Ibad?' },
      intro: {
        ar: 'اقرأ بطاقة الإمام جيّدًا، فستحتاج إلى تذكّرها في اللعبة التالية.',
        fr: 'Lis bien la carte de l’imam : tu devras t’en souvenir dans le jeu suivant.',
        en: 'Read the imam’s card carefully — you will need to remember it in the next game.',
      },
      image: `${IMG}/tamim-tents.png`,
      imageAlt: {
        ar: 'مخيّمٌ كبير من خيام الشَّعر السوداء بين النخيل على سهلٍ قرب نهر عند الغروب، وأمامه جمالٌ باركة',
        fr: 'Un grand campement de tentes noires en poil de chèvre parmi les palmiers, au bord d’un fleuve au couchant, des chameaux agenouillés devant',
        en: 'A large camp of black goat-hair tents among palms by a river at sunset, with camels kneeling in front',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'نسبه ومولده', fr: 'Sa tribu et sa naissance', en: 'His tribe and birth' },
          text: {
            ar: 'ينتمي الإمام عبد الله بن إباض إلى قبيلة بني تميم، ووُلد قبل سنة 23 هـ.',
            fr: 'L’imam ‘Abd Allāh ibn Ibāḍ appartient à la tribu des Banū Tamīm ; il naquit avant l’an 23 de l’Hégire.',
            en: 'Imam ‘Abdullah ibn Ibad belonged to the tribe of Banu Tamim, and was born before the year 23 AH.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'تعلّمه', fr: 'Ses études', en: 'His studies' },
          text: {
            ar: 'تعلّم عند كبار الصحابة، كعمّار بن ياسر وخزيمة بن ثابت رضي الله عنهما.',
            fr: 'Il étudia auprès de grands Compagnons, comme ‘Ammār ibn Yāsir et Khuzayma ibn Thābit (qu’Allah les agrée).',
            en: 'He studied with senior Companions, such as ‘Ammar ibn Yasir and Khuzayma ibn Thabit (may God be pleased with them).',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'أهمّ أعماله', fr: 'Ses actions principales', en: 'His main deeds' },
          text: {
            ar: 'شارك في الدفاع عن مكّة عند مهاجمة الأمويين لها سنة 63 هـ، وحاور وراسل الحاكم الأمويّ عبد الملك بن مروان مبيّنًا له موقف أهل الحقّ والاستقامة، وناقش مستعملي السيف ضدّ المسلمين من أتباع الأزارقة.',
            fr: 'Il participa à la défense de La Mecque lorsque les Omeyyades l’attaquèrent en 63 H ; il dialogua et correspondit avec le souverain omeyyade ‘Abd al-Malik ibn Marwān pour lui exposer la position des gens de la Vérité et de la Rectitude ; et il débattit avec ceux qui levaient l’épée contre les musulmans parmi les partisans des Azraqites.',
            en: 'He took part in defending Makkah when the Umayyads attacked it in 63 AH; he held dialogue and correspondence with the Umayyad ruler ‘Abd al-Malik ibn Marwan, explaining the position of the People of Truth and Rectitude; and he debated those among the Azariqa who used the sword against Muslims.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'آثاره ووفاته', fr: 'Son héritage et sa mort', en: 'His legacy and death' },
          text: {
            ar: 'من آثاره نسبة مذهب أهل الحقّ والاستقامة إليه (الإباضية)، ورسالته إلى عبد الملك بن مروان. أمّا وفاته، فالمعروف أنّه كان لا يزال حيًّا في سنة 86 هـ.',
            fr: 'Son héritage : l’école des gens de la Vérité et de la Rectitude porte son nom (l’ibāḍisme), et sa lettre à ‘Abd al-Malik ibn Marwān. Quant à sa mort, on sait qu’il était encore en vie en l’an 86 H.',
            en: 'His legacy: the school of the People of Truth and Rectitude is named after him (the Ibadiyya), and his letter to ‘Abd al-Malik ibn Marwan. As for his death, what is known is that he was still alive in the year 86 AH.',
          },
        },
      ],
    },

    // 04 — Memory: the imam's card (slide 3)
    {
      kind: 'memory',
      id: 'card-memory',
      title: { ar: 'بطاقة ابن إباض', fr: 'La carte d’Ibn Ibāḍ', en: 'Ibn Ibad’s card' },
      intro: {
        ar: 'احفظ كلّ بطاقة وما تدلّ عليه، ثمّ ستنقلب. هل تتذكّر أين كانت؟',
        fr: 'Mémorise chaque carte et ce qu’elle désigne, puis elles se retourneront. Te souviendras-tu de leur place ?',
        en: 'Memorize each card and what it refers to, then they will flip. Can you remember where they were?',
      },
      image: `${IMG}/tamim-tents.png`,
      cards: [
        { id: 'tamim', label: { ar: 'بنو تميم', fr: 'Banū Tamīm', en: 'Banu Tamim' }, category: { ar: 'نسبه', fr: 'Sa tribu', en: 'His tribe' } },
        { id: 'y23', label: { ar: 'قبل 23 هـ', fr: 'Avant 23 H', en: 'Before 23 AH' }, category: { ar: 'مولده', fr: 'Sa naissance', en: 'His birth' } },
        { id: 'ammar', label: { ar: 'عمّار بن ياسر', fr: '‘Ammār ibn Yāsir', en: '‘Ammar ibn Yasir' }, category: { ar: 'من أساتذته', fr: 'L’un de ses maîtres', en: 'One of his teachers' } },
        { id: 'khuzayma', label: { ar: 'خزيمة بن ثابت', fr: 'Khuzayma ibn Thābit', en: 'Khuzayma ibn Thabit' }, category: { ar: 'من أساتذته', fr: 'L’un de ses maîtres', en: 'One of his teachers' } },
        { id: 'y63', label: { ar: '63 هـ', fr: '63 H', en: '63 AH' }, category: { ar: 'الدفاع عن مكّة', fr: 'La défense de La Mecque', en: 'Defending Makkah' } },
        { id: 'y86', label: { ar: '86 هـ', fr: '86 H', en: '86 AH' }, category: { ar: 'لا يزال حيًّا', fr: 'Encore en vie', en: 'Still alive' } },
      ],
      rounds: [
        {
          id: 'teachers',
          question: { ar: 'أين كانت بطاقتا الصحابيّين اللذين تعلّم عندهما؟', fr: 'Où étaient les cartes des deux Compagnons auprès desquels il étudia ?', en: 'Where were the cards of the two Companions he studied with?' },
          correctIds: ['ammar', 'khuzayma'],
        },
        {
          id: 'dates',
          question: { ar: 'أين كانت بطاقتا الدفاع عن مكّة، وآخر ما نعرفه عن حياته؟', fr: 'Où étaient les cartes de la défense de La Mecque et de la dernière date connue de sa vie ?', en: 'Where were the cards for defending Makkah and the last date known of his life?' },
          correctIds: ['y63', 'y86'],
        },
      ],
    },

    // 05 — Reading: why "Ibadiyya" (slide 3)
    {
      kind: 'reading',
      id: 'reading-nisba',
      title: { ar: 'اقرأ: نسبة أهل الدعوة إلى ابن إباض', fr: 'Lis : pourquoi les gens de l’Appel portent le nom d’Ibn Ibāḍ', en: 'Read: why the People of the Call bear Ibn Ibad’s name' },
      intro: {
        ar: 'جابر هو الإمام، فلماذا نُسب المذهب إلى ابن إباض؟ اقرأ، ثمّ وازن بين دوري الرجلين.',
        fr: 'Jābir est l’imam : pourquoi l’école porte-t-elle le nom d’Ibn Ibāḍ ? Lis, puis compare les rôles des deux hommes.',
        en: 'Jabir is the imam — so why is the school named after Ibn Ibad? Read, then weigh the roles of the two men.',
      },
      image: `${IMG}/tamim-tents.png`,
      imageAlt: {
        ar: 'مخيّمٌ كبير لقبيلةٍ قويّة بين النخيل قرب نهر عند الغروب',
        fr: 'Le grand campement d’une tribu puissante parmi les palmiers, près d’un fleuve au couchant',
        en: 'The large camp of a powerful tribe among palms near a river at sunset',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'لسان أهل الدعوة', fr: 'La voix des gens de l’Appel', en: 'The voice of the People of the Call' },
          text: {
            ar: 'تكفّل عبد الله بن إباض ببيان رأي أهل الدعوة والاستقامة أمام الأمويين، لئلّا يلتبس موقفهم عليهم وعلى الناس، خاصّةً مع أتباع نافع بن الأزرق.',
            fr: '‘Abd Allāh ibn Ibāḍ se chargea d’exposer l’avis des gens de l’Appel et de la Rectitude devant les Omeyyades, pour que leur position ne soit confondue ni par eux ni par les gens, surtout avec celle des partisans de Nāfi‘ ibn al-Azraq.',
            en: '‘Abdullah ibn Ibad took on the task of explaining the view of the People of the Call and Rectitude before the Umayyads, so that their position would not be confused — by the Umayyads or by people — especially with that of the followers of Nafi‘ ibn al-Azraq.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'قبيلةٌ تحميه', fr: 'Une tribu qui le protège', en: 'A tribe that protected him' },
          text: {
            ar: 'كان ابن إباض يأمن على نفسه من مكر الحجّاج وغيره بقبيلته بني تميم التي استقرّت في العراق، وهي قبيلةٌ مرهوبة. فكان يحدّث ويناقش المسائل وما اختلف فيه الناس برأي الإمام جابر.',
            fr: 'Ibn Ibāḍ se sentait à l’abri des ruses d’al-Ḥajjāj et d’autres grâce à sa tribu, les Banū Tamīm, établie en Irak et redoutée. Il pouvait donc parler et débattre des questions où les gens divergeaient, selon l’avis de l’imam Jābir.',
            en: 'Ibn Ibad felt safe from the schemes of al-Hajjaj and others thanks to his tribe, Banu Tamim, which had settled in Iraq and was feared. So he spoke and debated the questions on which people differed, according to Imam Jabir’s view.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'اسمٌ ذهب إلى ابن إباض', fr: 'Un nom parti vers Ibn Ibāḍ', en: 'A name that went to Ibn Ibad' },
          text: {
            ar: 'لهذا كان الأمويون وعامّة المسلمين يسمّون أهل الدعوة وأصحاب جابر بن زيد «أتباع ابن إباض» أو «الإباضية»، لظنّهم أنّه فقيههم وصاحب حلقاتهم. والحقيقة أنّ إمامهم وفقيههم المجتهد في الرأي هو جابر بن زيد، ولكنّ النسبة ذهبت إلى ابن إباض لمواقفه العلنية.',
            fr: 'C’est pourquoi les Omeyyades et les gens du commun appelaient les gens de l’Appel et les compagnons de Jābir ibn Zayd « les partisans d’Ibn Ibāḍ » ou « les Ibāḍites », croyant qu’il était leur juriste et le maître de leurs cercles. En réalité, leur imam et leur juriste qui faisait l’effort d’interprétation était Jābir ibn Zayd ; mais le nom alla à Ibn Ibāḍ en raison de ses positions publiques.',
            en: 'This is why the Umayyads and ordinary Muslims called the People of the Call and Jabir ibn Zayd’s companions "the followers of Ibn Ibad" or "the Ibadis", thinking he was their jurist and the head of their circles. In truth, their imam and the jurist who exercised independent judgement was Jabir ibn Zayd — but the name went to Ibn Ibad because of his public stands.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'بعد وفاة ابن إباض', fr: 'Après la mort d’Ibn Ibāḍ', en: 'After Ibn Ibad’s death' },
          text: {
            ar: 'بعد أن تُوفّي ابن إباض توقّفت المواقف العلنية لأهل الدعوة، هروبًا من الأذى الذي ينزل على من لا يأخذ برأي الأمويين. لكنّ ذلك لم يمنع من سجن الإمام جابر، ثمّ نفيه إلى عُمان.',
            fr: 'Après la mort d’Ibn Ibāḍ, les positions publiques des gens de l’Appel cessèrent, pour fuir le mal qui frappait quiconque ne suivait pas l’avis des Omeyyades. Mais cela n’empêcha pas l’emprisonnement de l’imam Jābir, puis son exil en Oman.',
            en: 'After Ibn Ibad died, the public stands of the People of the Call stopped, to escape the harm that fell on anyone who did not follow the Umayyads’ view. But that did not prevent Imam Jabir’s imprisonment, and then his exile to Oman.',
          },
        },
      ],
    },

    // 06 — Balance: Jabir or Ibn Ibad? (slide 3)
    {
      kind: 'balance',
      id: 'roles-balance',
      title: { ar: 'جابر أم ابن إباض؟', fr: 'Jābir ou Ibn Ibāḍ ?', en: 'Jabir or Ibn Ibad?' },
      intro: {
        ar: 'ضع كلّ معلومةٍ على كفّة الرجل الذي تخصّه: الإمام جابر بن زيد، أم عبد الله بن إباض؟',
        fr: 'Pose chaque information sur le plateau de l’homme qu’elle concerne : l’imam Jābir ibn Zayd, ou ‘Abd Allāh ibn Ibāḍ ?',
        en: 'Place each fact on the pan of the man it belongs to: Imam Jabir ibn Zayd, or ‘Abdullah ibn Ibad?',
      },
      left: { ar: 'الإمام جابر بن زيد', fr: 'L’imam Jābir ibn Zayd', en: 'Imam Jabir ibn Zayd' },
      right: { ar: 'عبد الله بن إباض', fr: '‘Abd Allāh ibn Ibāḍ', en: '‘Abdullah ibn Ibad' },
      weights: [
        {
          id: 'w1',
          text: { ar: 'إمام أهل الدعوة وفقيههم المجتهد في الرأي', fr: 'L’imam des gens de l’Appel et leur juriste qui faisait l’effort d’interprétation', en: 'The imam of the People of the Call and their jurist who exercised independent judgement' },
          side: 'left',
          explanation: { ar: 'نعم، الإمام والفقيه المجتهد هو جابر بن زيد.', fr: 'Oui : l’imam et le juriste était Jābir ibn Zayd.', en: 'Yes — the imam and jurist was Jabir ibn Zayd.' },
        },
        {
          id: 'w2',
          text: { ar: 'تحميه قبيلته بنو تميم المرهوبة في العراق', fr: 'Protégé par sa tribu redoutée, les Banū Tamīm d’Irak', en: 'Protected by his feared tribe, Banu Tamim in Iraq' },
          side: 'right',
          explanation: { ar: 'بقبيلته كان ابن إباض يأمن على نفسه من مكر الحجّاج.', fr: 'Grâce à sa tribu, Ibn Ibāḍ était à l’abri des ruses d’al-Ḥajjāj.', en: 'Through his tribe, Ibn Ibad was safe from al-Hajjaj’s schemes.' },
        },
        {
          id: 'w3',
          text: { ar: 'تكفّل ببيان رأي أهل الدعوة أمام الأمويين', fr: 'Se chargea d’exposer l’avis des gens de l’Appel devant les Omeyyades', en: 'Took on explaining the view of the People of the Call before the Umayyads' },
          side: 'right',
          explanation: { ar: 'هذه مواقف ابن إباض العلنية.', fr: 'Ce sont les positions publiques d’Ibn Ibāḍ.', en: 'These were Ibn Ibad’s public stands.' },
        },
        {
          id: 'w4',
          text: { ar: 'سُجن ثمّ نُفي إلى عُمان', fr: 'Fut emprisonné puis exilé en Oman', en: 'Was imprisoned, then exiled to Oman' },
          side: 'left',
          explanation: { ar: 'هذا ما حدث للإمام جابر، رغم توقّف المواقف العلنية.', fr: 'C’est ce qui arriva à l’imam Jābir, malgré l’arrêt des positions publiques.', en: 'This is what happened to Imam Jabir, even after the public stands stopped.' },
        },
        {
          id: 'w5',
          text: { ar: 'نُسب إليه اسم المذهب: الإباضية', fr: 'L’école porte son nom : l’ibāḍisme', en: 'The school’s name comes from him: the Ibadiyya' },
          side: 'right',
          explanation: { ar: 'ذهبت النسبة إلى ابن إباض لمواقفه العلنية.', fr: 'Le nom alla à Ibn Ibāḍ en raison de ses positions publiques.', en: 'The name went to Ibn Ibad because of his public stands.' },
        },
        {
          id: 'w6',
          text: { ar: 'أستاذ ابن إباض في العلم ومستشاره، مع أنّه أصغر منه سنًّا', fr: 'Le maître et le conseiller d’Ibn Ibāḍ, bien que plus jeune que lui', en: 'Ibn Ibad’s teacher and adviser, though younger than him' },
          side: 'left',
          explanation: { ar: 'نعم، فابن إباض تلميذ جابر في العلم ويصدر عن مشورته، وإن كان أكبر منه سنًّا.', fr: 'Oui : Ibn Ibāḍ était l’élève de Jābir en savoir et agissait sur son conseil, bien que plus âgé que lui.', en: 'Yes — Ibn Ibad was Jabir’s student in knowledge and acted on his counsel, though older than him.' },
        },
      ],
    },

    // 07 — Reading: the letter to Abd al-Malik (slide 4)
    {
      kind: 'reading',
      id: 'reading-letter',
      title: { ar: 'اقرأ: مراسلة عبد الملك بن مروان', fr: 'Lis : la correspondance avec ‘Abd al-Malik ibn Marwān', en: 'Read: the correspondence with ‘Abd al-Malik ibn Marwan' },
      intro: {
        ar: 'اقرأ عن الرسالة المشهورة، ثمّ أعد بناءها في المحادثة التالية.',
        fr: 'Lis au sujet de la célèbre lettre, puis reconstitue-la dans la conversation suivante.',
        en: 'Read about the famous letter, then rebuild it in the next conversation.',
      },
      image: `${IMG}/letter-scroll.png`,
      imageAlt: {
        ar: 'رَقٌّ ملفوف مربوطٌ بخيطٍ أحمر على حقيبةٍ جلدية فوق مكتبٍ خشبيّ، ومصباحٌ من الفخّار وقلم',
        fr: 'Un parchemin roulé noué d’un cordon rouge sur une sacoche de cuir posée sur un bureau en bois, une lampe en terre cuite et un calame',
        en: 'A rolled parchment tied with a red cord on a leather satchel on a wooden desk, with a clay lamp and a reed pen',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'سؤالٌ من الحاكم', fr: 'Une question du souverain', en: 'A question from the ruler' },
          text: {
            ar: 'اشتهر عبد الله بن إباض بمراسلاته مع عبد الملك بن مروان الأمويّ، عندما أرسل إليه يسأله عن آرائه، وبيّن من خلالها مواقف أهل الدعوة والاستقامة.',
            fr: '‘Abd Allāh ibn Ibāḍ est célèbre pour sa correspondance avec l’Omeyyade ‘Abd al-Malik ibn Marwān, lorsque celui-ci lui écrivit pour l’interroger sur ses avis ; il y exposa les positions des gens de l’Appel et de la Rectitude.',
            en: '‘Abdullah ibn Ibad is famous for his correspondence with the Umayyad ‘Abd al-Malik ibn Marwan, when the latter wrote to ask him about his views; through it he set out the positions of the People of the Call and Rectitude.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'رسائل نصح', fr: 'Des lettres de conseil', en: 'Letters of counsel' },
          text: {
            ar: 'ضمّن ابن إباض رسائله نصحًا لعبد الملك، وبيّن فيها آراء أصحابه وموقفهم من انحراف القيادة الأموية عن نهج الخلفاء الراشدين.',
            fr: 'Ibn Ibāḍ mit dans ses lettres des conseils à ‘Abd al-Malik, et y exposa les avis de ses compagnons et leur position face à l’écart du pouvoir omeyyade par rapport à la voie des califes bien guidés.',
            en: 'Ibn Ibad filled his letters with counsel for ‘Abd al-Malik, and set out in them his companions’ views and their position on the Umayyad leadership’s departure from the way of the Rightly Guided Caliphs.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'بمشورة الإمام جابر', fr: 'Sur le conseil de l’imam Jābir', en: 'On Imam Jabir’s counsel' },
          text: {
            ar: 'وكان ابن إباض يصدر في كلّ ذلك عن مشورة إمام المذهب جابر بن زيد، فهو تلميذه في العلم وإن كان أكبر منه سنًّا.',
            fr: 'En tout cela, Ibn Ibāḍ agissait sur le conseil de l’imam de l’école, Jābir ibn Zayd : il était son élève en science, bien que plus âgé que lui.',
            en: 'In all this, Ibn Ibad acted on the counsel of the school’s imam, Jabir ibn Zayd: he was his student in knowledge, even though he was older than him.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'من نصّ الرسالة', fr: 'Extrait de la lettre', en: 'From the letter' },
          text: {
            ar: 'وممّا جاء في رسالة ابن إباض: «… ولا تظلموا الناس شيئًا، وأن يكون كتاب الله حكمًا بيني وبينكم فيما اختلفنا فيه، وأن نتولّى من تولّى الله وأن نبرأ ممّن تبرّأ الله منه».',
            fr: 'On lit dans la lettre d’Ibn Ibāḍ : « … Ne faites aucun tort aux gens ; que le Livre de Dieu soit juge entre moi et vous en ce sur quoi nous divergeons ; et que nous soyons alliés de ceux dont Dieu est l’allié, et que nous nous désavouions de ceux que Dieu désavoue. »',
            en: 'Among the words of Ibn Ibad’s letter: "… Do not wrong people in anything; let the Book of God be the judge between me and you in what we differ on; and let us befriend those whom God befriends and disown those whom God disowns."',
          },
        },
      ],
    },

    // 08 — Chat: rebuild the letter (slide 4)
    {
      kind: 'chat',
      id: 'letter-chat',
      title: { ar: 'أعد كتابة الرسالة', fr: 'Reconstitue la lettre', en: 'Rebuild the letter' },
      intro: {
        ar: 'هذه مراسلةٌ بين القصر وابن إباض. اختر ما كتبه ابن إباض في كلّ مرّة.',
        fr: 'Voici un échange entre le palais et Ibn Ibāḍ. Choisis à chaque fois ce qu’écrivit Ibn Ibāḍ.',
        en: 'Here is an exchange between the palace and Ibn Ibad. Each time, choose what Ibn Ibad wrote.',
      },
      image: `${IMG}/letter-scroll.png`,
      imageAlt: {
        ar: 'رَقٌّ ملفوف مربوطٌ بخيطٍ أحمر على حقيبةٍ جلدية',
        fr: 'Un parchemin roulé noué d’un cordon rouge sur une sacoche de cuir',
        en: 'A rolled parchment tied with a red cord on a leather satchel',
      },
      speakers: [
        { id: 'malik', name: { ar: 'رسالة عبد الملك بن مروان', fr: 'Lettre de ‘Abd al-Malik ibn Marwān', en: 'Letter of ‘Abd al-Malik ibn Marwan' }, avatar: '♛', side: 'start', tone: 'clay' },
        { id: 'ibad', name: { ar: 'رسالة عبد الله بن إباض', fr: 'Lettre de ‘Abd Allāh ibn Ibāḍ', en: 'Letter of ‘Abdullah ibn Ibad' }, avatar: '✉', side: 'end', tone: 'emerald' },
      ],
      steps: [
        {
          type: 'msg',
          id: 'ask',
          who: 'malik',
          text: {
            ar: 'سؤالٌ إلى ابن إباض عن آرائه.',
            fr: 'Une question à Ibn Ibāḍ sur ses avis.',
            en: 'A question to Ibn Ibad about his views.',
          },
        },
        {
          type: 'reply',
          id: 'r1',
          who: 'ibad',
          prompt: { ar: 'ماذا نصح ابن إباض الحاكمَ في رسالته؟', fr: 'Quel conseil Ibn Ibāḍ donna-t-il au souverain dans sa lettre ?', en: 'What did Ibn Ibad advise the ruler in his letter?' },
          options: [
            { id: 'a', correct: true, label: { ar: '«… ولا تظلموا الناس شيئًا»', fr: '« … Ne faites aucun tort aux gens »', en: '"… Do not wrong people in anything"' }, hint: { ar: 'هذا ما جاء في رسالة ابن إباض.', fr: 'C’est ce que dit la lettre d’Ibn Ibāḍ.', en: 'This is what Ibn Ibad’s letter says.' } },
            { id: 'b', correct: false, label: { ar: '«أطيعوا الولاة في كلّ ما يأمرون»', fr: '« Obéissez aux gouverneurs en tout ce qu’ils ordonnent »', en: '"Obey the governors in all they command"' }, hint: { ar: 'كانت رسائله نصحًا للحاكم نفسه، لا دعوةً إلى طاعة الولاة.', fr: 'Ses lettres conseillaient le souverain lui-même, pas l’obéissance aux gouverneurs.', en: 'His letters counselled the ruler himself — they did not call for obeying the governors.' } },
            { id: 'c', correct: false, label: { ar: '«لا شأن لي بأمور الحكم»', fr: '« Les affaires du pouvoir ne me regardent pas »', en: '"Matters of rule are none of my business"' }, hint: { ar: 'بل بيّن موقف أصحابه من انحراف القيادة الأموية.', fr: 'Au contraire, il exposa la position de ses compagnons face à l’écart du pouvoir omeyyade.', en: 'On the contrary, he set out his companions’ position on the Umayyad leadership’s deviation.' } },
          ],
        },
        {
          type: 'reply',
          id: 'r2',
          who: 'ibad',
          prompt: { ar: 'ما الحَكَم الذي اقترحه فيما اختلفوا فيه؟', fr: 'Quel juge proposa-t-il pour leurs désaccords ?', en: 'What judge did he propose for their disagreements?' },
          options: [
            { id: 'a', correct: true, label: { ar: '«وأن يكون كتاب الله حكمًا بيني وبينكم فيما اختلفنا فيه»', fr: '« Que le Livre de Dieu soit juge entre moi et vous en ce sur quoi nous divergeons »', en: '"Let the Book of God be the judge between me and you in what we differ on"' }, hint: { ar: 'هذا ما جاء في رسالة ابن إباض.', fr: 'C’est ce que dit la lettre d’Ibn Ibāḍ.', en: 'This is what Ibn Ibad’s letter says.' } },
            { id: 'b', correct: false, label: { ar: '«وأن يكون السيف حكمًا بيننا»', fr: '« Que l’épée soit juge entre nous »', en: '"Let the sword be the judge between us"' }, hint: { ar: 'ابن إباض كان يناقش مستعملي السيف ضدّ المسلمين، فهو يدعو إلى الحوار.', fr: 'Ibn Ibāḍ débattait avec ceux qui levaient l’épée contre les musulmans : il appelait au dialogue.', en: 'Ibn Ibad debated those who used the sword against Muslims — he called for dialogue.' } },
            { id: 'c', correct: false, label: { ar: '«وأن يكون رأي الأكثر حكمًا بيننا»', fr: '« Que l’avis du plus grand nombre soit juge entre nous »', en: '"Let the majority’s opinion be the judge between us"' }, hint: { ar: 'جعل الحكم لمرجعٍ أعلى من آراء الناس.', fr: 'Il confia le jugement à une référence plus haute que les avis des gens.', en: 'He gave judgement to a reference higher than people’s opinions.' } },
          ],
        },
        {
          type: 'reply',
          id: 'r3',
          who: 'ibad',
          prompt: { ar: 'وبماذا ختم هذا المقطع؟', fr: 'Et comment conclut-il ce passage ?', en: 'And how did he close this passage?' },
          options: [
            { id: 'a', correct: true, label: { ar: '«وأن نتولّى من تولّى الله وأن نبرأ ممّن تبرّأ الله منه»', fr: '« Que nous soyons alliés de ceux dont Dieu est l’allié, et que nous désavouions ceux que Dieu désavoue »', en: '"Let us befriend those whom God befriends and disown those whom God disowns"' }, hint: { ar: 'هذا ما جاء في رسالة ابن إباض.', fr: 'C’est ce que dit la lettre d’Ibn Ibāḍ.', en: 'This is what Ibn Ibad’s letter says.' } },
            { id: 'b', correct: false, label: { ar: '«وأن نوالي من والاكم ونعادي من عاداكم»', fr: '« Que nous soyons alliés de vos alliés et ennemis de vos ennemis »', en: '"Let us befriend your friends and oppose your foes"' }, hint: { ar: 'الولاء والبراءة في الرسالة مربوطان بالله، لا بالحاكم.', fr: 'Dans la lettre, l’alliance et le désaveu se rapportent à Dieu, non au souverain.', en: 'In the letter, allegiance and disavowal are tied to God, not to the ruler.' } },
            { id: 'c', correct: false, label: { ar: '«وأن نسكت عمّا نراه»', fr: '« Que nous taisions ce que nous voyons »', en: '"Let us keep silent about what we see"' }, hint: { ar: 'ابن إباض كان صوت أهل الدعوة العلنيّ، لا الساكت.', fr: 'Ibn Ibāḍ était la voix publique des gens de l’Appel, pas un silencieux.', en: 'Ibn Ibad was the public voice of the People of the Call, not a silent one.' } },
          ],
        },
      ],
    },

    // 09 — Reading: other stands (slide 5)
    {
      kind: 'reading',
      id: 'reading-stances',
      title: { ar: 'اقرأ: مواقف أخرى لعبد الله بن إباض', fr: 'Lis : d’autres positions de ‘Abd Allāh ibn Ibāḍ', en: 'Read: other stands of ‘Abdullah ibn Ibad' },
      intro: {
        ar: 'اقرأ عن مواقفه في مكّة ومع الأزارقة، ثمّ صنّفها في اللعبة التالية.',
        fr: 'Lis ses positions à La Mecque et face aux Azraqites, puis classe-les dans le jeu suivant.',
        en: 'Read about his stands in Makkah and with the Azariqa, then sort them in the next game.',
      },
      image: `${IMG}/mecca-valley.png`,
      imageAlt: {
        ar: 'بلدةٌ في وادٍ صحراويّ تحيط بها جبالٌ داكنة عند الغسق، ونيرانٌ صغيرة متّقدة على قمم الجبال من كلّ جانب',
        fr: 'Une ville au creux d’une vallée désertique, entourée de montagnes sombres au crépuscule, avec de petits feux allumés sur les crêtes tout autour',
        en: 'A town in a desert valley ringed by dark mountains at dusk, with small fires burning along the ridges all around',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'مع ابن الزبير في مكّة', fr: 'Avec Ibn al-Zubayr à La Mecque', en: 'With Ibn al-Zubayr in Makkah' },
          text: {
            ar: 'لمّا قام عبد الله بن الزبير سنة 63 هـ ثائرًا في مكّة على الأمويين، بعد تولية يزيد بن معاوية ومقتل الحسين بن عليّ رضي الله عنهما، انضمّ إليه المسلمون من الحجاز وأهل العراق، ومن بينهم أصحاب الإمام أبي بلال، وكان منهم عبد الله بن إباض.',
            fr: 'Lorsque ‘Abd Allāh ibn al-Zubayr se souleva à La Mecque contre les Omeyyades en 63 H, après l’investiture de Yazīd ibn Mu‘āwiya et le meurtre d’al-Ḥusayn ibn ‘Alī (qu’Allah les agrée), des musulmans du Hedjaz et d’Irak le rejoignirent, dont les compagnons de l’imam Abū Bilāl — parmi eux ‘Abd Allāh ibn Ibāḍ.',
            en: 'When ‘Abdullah ibn al-Zubayr rose up in Makkah against the Umayyads in 63 AH, after Yazid ibn Mu‘awiya was installed and al-Husayn ibn ‘Ali (may God be pleased with them) was killed, Muslims from the Hijaz and Iraq joined him, among them the companions of Imam Abu Bilal — including ‘Abdullah ibn Ibad.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'حصار مكّة', fr: 'Le siège de La Mecque', en: 'The siege of Makkah' },
          text: {
            ar: 'وقد حاصر الجيش الأمويّ مكّة 60 يومًا، ورمى الكعبة بالمنجنيق.',
            fr: 'L’armée omeyyade assiégea La Mecque pendant 60 jours et bombarda la Ka‘ba à la catapulte.',
            en: 'The Umayyad army besieged Makkah for 60 days and struck the Kaaba with the catapult.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'في وجه الأزارقة', fr: 'Face aux Azraqites', en: 'Facing the Azariqa' },
          text: {
            ar: 'وكانت لابن إباض مناظراتٌ مع نافع بن الأزرق وجموعه، لتعرّضهم للمسلمين واستحلالهم دماءهم وأموالهم بغير حقّ. وله مراسلةٌ إليه تُنكر عليه آراءه الضالّة، كما ناظر غيرهم ممّن خالفهم.',
            fr: 'Ibn Ibāḍ eut des débats avec Nāfi‘ ibn al-Azraq et ses troupes, parce qu’ils s’en prenaient aux musulmans et jugeaient licites leur sang et leurs biens sans droit. Il lui adressa une lettre réprouvant ses opinions égarées, et débattit aussi avec d’autres qui s’opposaient à eux.',
            en: 'Ibn Ibad held debates with Nafi‘ ibn al-Azraq and his followers, because they attacked Muslims and deemed their blood and property lawful without right. He wrote him a letter condemning his misguided views, and he also debated others who opposed them.',
          },
        },
      ],
    },

    // 10 — Swipe: supported or condemned? (slides 4–5)
    {
      kind: 'swipe',
      id: 'stances-swipe',
      title: { ar: 'أيّدها أم أنكرها؟', fr: 'Soutenu ou réprouvé ?', en: 'Supported or condemned?' },
      intro: {
        ar: 'اسحب كلّ بطاقة إلى الجهة الصحيحة: هل وقف ابن إباض مع هذا الأمر، أم أنكره؟',
        fr: 'Fais glisser chaque carte du bon côté : Ibn Ibāḍ soutint-il cette chose, ou la réprouva-t-il ?',
        en: 'Swipe each card to the right side: did Ibn Ibad support this, or condemn it?',
      },
      left: {
        label: { ar: 'وقف معه ابن إباض', fr: 'Ibn Ibāḍ le soutint', en: 'Ibn Ibad supported it' },
        tag: { ar: 'تأييد', fr: 'Soutien', en: 'Support' },
      },
      right: {
        label: { ar: 'أنكره ابن إباض', fr: 'Ibn Ibāḍ le réprouva', en: 'Ibn Ibad condemned it' },
        tag: { ar: 'إنكار', fr: 'Réprobation', en: 'Condemnation' },
      },
      cards: [
        {
          id: 'mecca-defence',
          who: { ar: 'مكّة، 63 هـ', fr: 'La Mecque, 63 H', en: 'Makkah, 63 AH' },
          deed: { ar: 'الدفاع عن مكّة عند مهاجمة الأمويين لها', fr: 'Défendre La Mecque lorsque les Omeyyades l’attaquèrent', en: 'Defending Makkah when the Umayyads attacked it' },
          image: `${IMG}/mecca-valley.png`,
          side: 'left',
          explanation: { ar: 'كان ابن إباض من أصحاب أبي بلال الذين انضمّوا إلى ابن الزبير في مكّة.', fr: 'Ibn Ibāḍ était parmi les compagnons d’Abū Bilāl qui rejoignirent Ibn al-Zubayr à La Mecque.', en: 'Ibn Ibad was among Abu Bilal’s companions who joined Ibn al-Zubayr in Makkah.' },
        },
        {
          id: 'siege',
          who: { ar: 'الجيش الأمويّ', fr: 'L’armée omeyyade', en: 'The Umayyad army' },
          deed: { ar: 'حصار مكّة 60 يومًا ورمي الكعبة بالمنجنيق', fr: 'Assiéger La Mecque 60 jours et bombarder la Ka‘ba à la catapulte', en: 'Besieging Makkah for 60 days and striking the Kaaba with the catapult' },
          side: 'right',
          explanation: { ar: 'وقف ابن إباض في صفّ المدافعين عن مكّة، لا مع من حاصرها.', fr: 'Ibn Ibāḍ était dans le camp des défenseurs de La Mecque, pas avec ses assiégeants.', en: 'Ibn Ibad stood with Makkah’s defenders, not with those besieging it.' },
        },
        {
          id: 'azariqa',
          who: { ar: 'نافع بن الأزرق وجموعه', fr: 'Nāfi‘ ibn al-Azraq et ses troupes', en: 'Nafi‘ ibn al-Azraq and his followers' },
          deed: { ar: 'التعرّض للمسلمين واستحلال دمائهم وأموالهم بغير حقّ', fr: 'S’en prendre aux musulmans et juger licites leur sang et leurs biens sans droit', en: 'Attacking Muslims and deeming their blood and property lawful without right' },
          side: 'right',
          explanation: { ar: 'ناظرهم ابن إباض، وراسل نافعًا يُنكر عليه آراءه الضالّة.', fr: 'Ibn Ibāḍ débattit avec eux et écrivit à Nāfi‘ pour réprouver ses opinions égarées.', en: 'Ibn Ibad debated them and wrote to Nafi‘ condemning his misguided views.' },
        },
        {
          id: 'deviation',
          who: { ar: 'القيادة الأموية', fr: 'Le pouvoir omeyyade', en: 'The Umayyad leadership' },
          deed: { ar: 'الانحراف عن نهج الخلفاء الراشدين', fr: 'S’écarter de la voie des califes bien guidés', en: 'Departing from the way of the Rightly Guided Caliphs' },
          image: `${IMG}/umayyad-hall.png`,
          side: 'right',
          explanation: { ar: 'بيّن في رسائله إلى عبد الملك موقف أصحابه من هذا الانحراف.', fr: 'Dans ses lettres à ‘Abd al-Malik, il exposa la position de ses compagnons face à cet écart.', en: 'In his letters to ‘Abd al-Malik, he set out his companions’ position on this deviation.' },
        },
        {
          id: 'book-judge',
          who: { ar: 'من رسالته', fr: 'Tiré de sa lettre', en: 'From his letter' },
          deed: { ar: 'أن يكون كتاب الله حكمًا فيما اختلفوا فيه', fr: 'Que le Livre de Dieu soit juge en ce sur quoi ils divergent', en: 'That the Book of God be the judge in what they differ on' },
          image: `${IMG}/letter-scroll.png`,
          side: 'left',
          explanation: { ar: 'هذا ما دعا إليه صراحةً في رسالته إلى عبد الملك.', fr: 'C’est ce qu’il demanda clairement dans sa lettre à ‘Abd al-Malik.', en: 'This is exactly what he called for in his letter to ‘Abd al-Malik.' },
        },
        {
          id: 'injustice',
          who: { ar: 'من رسالته', fr: 'Tiré de sa lettre', en: 'From his letter' },
          deed: { ar: 'ظلم الناس', fr: 'Faire du tort aux gens', en: 'Wronging people' },
          side: 'right',
          explanation: { ar: 'كتب إلى الحاكم: «ولا تظلموا الناس شيئًا».', fr: 'Il écrivit au souverain : « Ne faites aucun tort aux gens. »', en: 'He wrote to the ruler: "Do not wrong people in anything."' },
        },
        {
          id: 'dialogue',
          who: { ar: 'منهجه', fr: 'Sa méthode', en: 'His method' },
          deed: { ar: 'المحاورة والمراسلة لبيان موقف أهل الحقّ والاستقامة', fr: 'Le dialogue et la correspondance pour exposer la position des gens de la Vérité et de la Rectitude', en: 'Dialogue and correspondence to explain the position of the People of Truth and Rectitude' },
          image: `${IMG}/dialogue.png`,
          side: 'left',
          explanation: { ar: 'هذه طريقته: حاور وراسل وناظر.', fr: 'C’était sa manière : dialoguer, écrire, débattre.', en: 'This was his way: dialogue, letters and debate.' },
        },
      ],
    },

    // 11 — Timeline: his path (slides 3–5)
    {
      kind: 'timeline',
      id: 'life-timeline',
      title: { ar: 'مسيرة ابن إباض', fr: 'Le parcours d’Ibn Ibāḍ', en: 'Ibn Ibad’s path' },
      intro: {
        ar: 'تنقّل بين محطّات حياته واقرأ تفاصيل كلّ واحدة.',
        fr: 'Parcours les étapes de sa vie et lis le détail de chacune.',
        en: 'Move through the stages of his life and read the detail of each.',
      },
      image: `${IMG}/straight-path.png`,
      imageAlt: {
        ar: 'طريقٌ حجريّ مستقيم يعبر الكثبان الذهبية نحو شمس الشروق',
        fr: 'Un chemin de pierre droit traversant les dunes dorées vers le soleil levant',
        en: 'A straight stone path crossing golden dunes towards the rising sun',
      },
      steps: [
        {
          id: 't1',
          period: { ar: 'قبل 23 هـ', fr: 'Avant 23 H', en: 'Before 23 AH' },
          label: { ar: 'المولد', fr: 'La naissance', en: 'Birth' },
          detail: { ar: 'وُلد عبد الله بن إباض من قبيلة بني تميم قبل سنة 23 هـ.', fr: '‘Abd Allāh ibn Ibāḍ naquit dans la tribu des Banū Tamīm avant l’an 23 H.', en: '‘Abdullah ibn Ibad was born into the tribe of Banu Tamim before 23 AH.' },
          certainty: 'approximate',
        },
        {
          id: 't2',
          period: { ar: 'زمن الصحابة', fr: 'L’époque des Compagnons', en: 'The age of the Companions' },
          label: { ar: 'طلب العلم', fr: 'La quête du savoir', en: 'Seeking knowledge' },
          detail: { ar: 'تعلّم عند كبار الصحابة كعمّار بن ياسر وخزيمة بن ثابت رضي الله عنهما، ثمّ صار تلميذًا للإمام جابر في العلم وإن كان أكبر منه سنًّا.', fr: 'Il étudia auprès de grands Compagnons comme ‘Ammār ibn Yāsir et Khuzayma ibn Thābit, puis devint l’élève de l’imam Jābir en science, bien que plus âgé que lui.', en: 'He studied with senior Companions such as ‘Ammar ibn Yasir and Khuzayma ibn Thabit, and became Imam Jabir’s student in knowledge, though older than him.' },
        },
        {
          id: 't3',
          period: { ar: '63 هـ', fr: '63 H', en: '63 AH' },
          label: { ar: 'الدفاع عن مكّة', fr: 'La défense de La Mecque', en: 'Defending Makkah' },
          detail: { ar: 'انضمّ مع أصحاب أبي بلال إلى ابن الزبير في مكّة، وحاصرها الجيش الأمويّ 60 يومًا.', fr: 'Avec les compagnons d’Abū Bilāl, il rejoignit Ibn al-Zubayr à La Mecque, que l’armée omeyyade assiégea 60 jours.', en: 'With Abu Bilal’s companions he joined Ibn al-Zubayr in Makkah, which the Umayyad army besieged for 60 days.' },
          certainty: 'approximate',
        },
        {
          id: 't4',
          period: { ar: 'مناظرات', fr: 'Débats', en: 'Debates' },
          label: { ar: 'في وجه الأزارقة', fr: 'Face aux Azraqites', en: 'Facing the Azariqa' },
          detail: { ar: 'ناظر نافع بن الأزرق وجموعه، وراسله يُنكر عليه استحلال دماء المسلمين وأموالهم.', fr: 'Il débattit avec Nāfi‘ ibn al-Azraq et ses troupes et lui écrivit pour réprouver le fait de juger licites le sang et les biens des musulmans.', en: 'He debated Nafi‘ ibn al-Azraq and his followers, and wrote to him condemning their deeming Muslims’ blood and property lawful.' },
        },
        {
          id: 't5',
          period: { ar: 'زمن عبد الملك', fr: 'Sous ‘Abd al-Malik', en: 'Under ‘Abd al-Malik' },
          label: { ar: 'الرسالة إلى الحاكم', fr: 'La lettre au souverain', en: 'The letter to the ruler' },
          detail: { ar: 'راسل عبد الملك بن مروان ناصحًا، مبيّنًا موقف أهل الحقّ والاستقامة، عن مشورة جابر بن زيد.', fr: 'Il écrivit à ‘Abd al-Malik ibn Marwān pour le conseiller et exposer la position des gens de la Vérité et de la Rectitude, sur le conseil de Jābir ibn Zayd.', en: 'He wrote to ‘Abd al-Malik ibn Marwan in counsel, explaining the position of the People of Truth and Rectitude, on Jabir ibn Zayd’s advice.' },
        },
        {
          id: 't6',
          period: { ar: '86 هـ', fr: '86 H', en: '86 AH' },
          label: { ar: 'لا يزال حيًّا', fr: 'Encore en vie', en: 'Still alive' },
          detail: { ar: 'كان لا يزال حيًّا في سنة 86 هـ. وبعد وفاته توقّفت المواقف العلنية لأهل الدعوة.', fr: 'Il était encore en vie en 86 H. Après sa mort, les positions publiques des gens de l’Appel cessèrent.', en: 'He was still alive in 86 AH. After his death, the public stands of the People of the Call stopped.' },
        },
      ],
    },

    // 12 — Reading: reflect (slide 6)
    {
      kind: 'reading',
      id: 'reading-reflect',
      title: { ar: 'أعتبر', fr: 'Je médite', en: 'I reflect' },
      intro: {
        ar: 'ثلاث عِبَرٍ من سيرة ابن إباض. اقرأها جيّدًا قبل الجولة السريعة.',
        fr: 'Trois leçons de la vie d’Ibn Ibāḍ. Lis-les bien avant la manche éclair.',
        en: 'Three lessons from Ibn Ibad’s life. Read them well before the speed round.',
      },
      image: `${IMG}/dialogue.png`,
      imageAlt: {
        ar: 'وسادتان متقابلتان حول طاولةٍ منخفضة عليها كتابان مفتوحان ومصباحٌ مضاء',
        fr: 'Deux coussins face à face autour d’une table basse portant deux livres ouverts et une lampe allumée',
        en: 'Two cushions facing each other around a low table with two open books and a lit lamp',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'حاوِر', fr: 'Dialogue', en: 'Hold dialogue' },
          text: { ar: 'الحوار والنقاش سبيلٌ إلى توضيح الأفكار وإزالة الأوهام.', fr: 'Le dialogue et la discussion sont un chemin pour clarifier les idées et dissiper les illusions.', en: 'Dialogue and discussion are a path to clarifying ideas and removing illusions.' },
        },
        {
          id: 'p2',
          heading: { ar: 'لا تسكت عن الباطل', fr: 'Ne te tais pas face au faux', en: 'Do not stay silent before falsehood' },
          text: { ar: 'حين سكت أهل الحقّ عن الباطل، توهّم أهل الباطل أنّهم على حقّ.', fr: 'Quand les gens de la vérité se taisent face au faux, les gens du faux s’imaginent être dans le vrai.', en: 'When the people of truth stay silent about falsehood, the people of falsehood imagine they are right.' },
        },
        {
          id: 'p3',
          heading: { ar: 'الدعوة والاستقامة', fr: 'L’Appel et la Rectitude', en: 'The Call and Rectitude' },
          text: { ar: 'الدعوة إلى الله أحسن القول، والاستقامة على الطريق أرفع الفعل.', fr: 'Appeler à Dieu est la meilleure des paroles, et la rectitude sur le chemin est le plus noble des actes.', en: 'Calling to God is the best of speech, and rectitude on the path is the highest of deeds.' },
        },
      ],
    },

    // 13 — Blitz
    {
      kind: 'blitz',
      id: 'blitz',
      title: { ar: 'جولة سريعة', fr: 'Manche éclair', en: 'Speed round' },
      intro: {
        ar: 'عشر ثوانٍ لكلّ عبارة — هل هي صحيحة أم خاطئة؟',
        fr: 'Dix secondes par affirmation — vrai ou faux ?',
        en: 'Ten seconds per statement — true or false?',
      },
      secondsPerCard: 10,
      statements: [
        {
          id: 'b1',
          text: { ar: 'عبد الله بن إباض هو الفقيه المجتهد الذي أسّس فقه أهل الدعوة.', fr: '‘Abd Allāh ibn Ibāḍ est le juriste qui fonda le droit des gens de l’Appel.', en: '‘Abdullah ibn Ibad was the jurist who founded the jurisprudence of the People of the Call.' },
          answer: false,
          explanation: { ar: 'خطأ، الإمام والفقيه المجتهد هو جابر بن زيد، وابن إباض تلميذه.', fr: 'Faux : l’imam et juriste était Jābir ibn Zayd, dont Ibn Ibāḍ était l’élève.', en: 'False — the imam and jurist was Jabir ibn Zayd; Ibn Ibad was his student.' },
        },
        {
          id: 'b2',
          text: { ar: 'كانت قبيلة بني تميم تحمي ابن إباض من مكر الحجّاج.', fr: 'La tribu des Banū Tamīm protégeait Ibn Ibāḍ des ruses d’al-Ḥajjāj.', en: 'The tribe of Banu Tamim protected Ibn Ibad from al-Hajjaj’s schemes.' },
          answer: true,
          explanation: { ar: 'صحيح، فهي قبيلةٌ مرهوبة استقرّت في العراق.', fr: 'Vrai : c’était une tribu redoutée établie en Irak.', en: 'True — it was a feared tribe settled in Iraq.' },
        },
        {
          id: 'b3',
          text: { ar: 'كان ابن إباض أصغر سنًّا من جابر بن زيد.', fr: 'Ibn Ibāḍ était plus jeune que Jābir ibn Zayd.', en: 'Ibn Ibad was younger than Jabir ibn Zayd.' },
          answer: false,
          explanation: { ar: 'خطأ، كان تلميذه في العلم وإن كان أكبر منه سنًّا.', fr: 'Faux : il était son élève en science, bien que plus âgé que lui.', en: 'False — he was his student in knowledge, though older than him.' },
        },
        {
          id: 'b4',
          text: { ar: 'حاصر الجيش الأمويّ مكّة 60 يومًا.', fr: 'L’armée omeyyade assiégea La Mecque 60 jours.', en: 'The Umayyad army besieged Makkah for 60 days.' },
          answer: true,
          explanation: { ar: 'صحيح، وكان ذلك بعد قيام ابن الزبير سنة 63 هـ.', fr: 'Vrai, après le soulèvement d’Ibn al-Zubayr en 63 H.', en: 'True — after Ibn al-Zubayr’s rising in 63 AH.' },
        },
        {
          id: 'b5',
          text: { ar: 'أيّد ابن إباض نافع بن الأزرق في استحلال دماء المسلمين.', fr: 'Ibn Ibāḍ approuva Nāfi‘ ibn al-Azraq de juger licite le sang des musulmans.', en: 'Ibn Ibad supported Nafi‘ ibn al-Azraq in deeming Muslims’ blood lawful.' },
          answer: false,
          explanation: { ar: 'خطأ، ناظره وراسله يُنكر عليه آراءه الضالّة.', fr: 'Faux : il débattit avec lui et lui écrivit pour réprouver ses opinions égarées.', en: 'False — he debated him and wrote to him condemning his misguided views.' },
        },
        {
          id: 'b6',
          text: { ar: 'بعد وفاة ابن إباض توقّفت المواقف العلنية لأهل الدعوة.', fr: 'Après la mort d’Ibn Ibāḍ, les positions publiques des gens de l’Appel cessèrent.', en: 'After Ibn Ibad’s death, the public stands of the People of the Call stopped.' },
          answer: true,
          explanation: { ar: 'صحيح، ومع ذلك سُجن الإمام جابر ثمّ نُفي إلى عُمان.', fr: 'Vrai, et pourtant l’imam Jābir fut emprisonné puis exilé en Oman.', en: 'True — and yet Imam Jabir was imprisoned and then exiled to Oman.' },
        },
      ],
    },

    // 14 — Quiz
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'اختبر معلوماتك', fr: 'Teste tes connaissances', en: 'Test your knowledge' },
      intro: {
        ar: 'أربعة أسئلة متنوّعة عن ابن إباض وعلاقته بالإمام جابر.',
        fr: 'Quatre questions variées sur Ibn Ibāḍ et son lien avec l’imam Jābir.',
        en: 'Four varied questions on Ibn Ibad and his link with Imam Jabir.',
      },
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: { ar: 'لماذا سمّى الأمويون أهل الدعوة «الإباضية»؟', fr: 'Pourquoi les Omeyyades appelèrent-ils les gens de l’Appel « Ibāḍites » ?', en: 'Why did the Umayyads call the People of the Call "Ibadis"?' },
          options: [
            { id: 'a', label: { ar: 'لظنّهم أنّ ابن إباض فقيههم، بسبب مواقفه العلنية', fr: 'Parce qu’ils croyaient qu’Ibn Ibāḍ était leur juriste, à cause de ses positions publiques', en: 'Because they thought Ibn Ibad was their jurist, due to his public stands' } },
            { id: 'b', label: { ar: 'لأنّ ابن إباض هو مؤسّس فقه المذهب', fr: 'Parce qu’Ibn Ibāḍ fonda le droit de l’école', en: 'Because Ibn Ibad founded the school’s jurisprudence' } },
            { id: 'c', label: { ar: 'لأنّ جابر بن زيد طلب ذلك', fr: 'Parce que Jābir ibn Zayd le demanda', en: 'Because Jabir ibn Zayd asked for it' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'ذهبت النسبة إلى ابن إباض لمواقفه العلنية، أمّا الإمام والفقيه المجتهد فهو جابر بن زيد.',
            fr: 'Le nom alla à Ibn Ibāḍ pour ses positions publiques ; l’imam et juriste était Jābir ibn Zayd.',
            en: 'The name went to Ibn Ibad for his public stands; the imam and jurist was Jabir ibn Zayd.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'كان ابن إباض يكتب رسائله إلى عبد الملك عن مشورة الإمام جابر.', fr: 'Ibn Ibāḍ écrivait ses lettres à ‘Abd al-Malik sur le conseil de l’imam Jābir.', en: 'Ibn Ibad wrote his letters to ‘Abd al-Malik on Imam Jabir’s counsel.' },
          answer: true,
          explanation: {
            ar: 'صحيح، كان يصدر في كلّ ذلك عن مشورة إمام المذهب جابر بن زيد.',
            fr: 'Vrai : en tout cela il agissait sur le conseil de l’imam de l’école, Jābir ibn Zayd.',
            en: 'True — in all this he acted on the counsel of the school’s imam, Jabir ibn Zayd.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ اسمٍ بما ورد عنه في الدرس', fr: 'Relie chaque nom à ce que dit la leçon', en: 'Match each name to what the lesson says' },
          pairs: [
            { id: 'p1', left: { ar: 'عبد الملك بن مروان', fr: '‘Abd al-Malik ibn Marwān', en: '‘Abd al-Malik ibn Marwan' }, right: { ar: 'أرسل إلى ابن إباض يسأله عن آرائه', fr: 'Écrivit à Ibn Ibāḍ pour l’interroger sur ses avis', en: 'Wrote to Ibn Ibad asking about his views' } },
            { id: 'p2', left: { ar: 'نافع بن الأزرق', fr: 'Nāfi‘ ibn al-Azraq', en: 'Nafi‘ ibn al-Azraq' }, right: { ar: 'استحلّ مع جموعه دماء المسلمين', fr: 'Jugea licite, avec ses troupes, le sang des musulmans', en: 'With his followers, deemed Muslims’ blood lawful' } },
            { id: 'p3', left: { ar: 'عبد الله بن الزبير', fr: '‘Abd Allāh ibn al-Zubayr', en: '‘Abdullah ibn al-Zubayr' }, right: { ar: 'قام في مكّة على الأمويين سنة 63 هـ', fr: 'Se souleva à La Mecque contre les Omeyyades en 63 H', en: 'Rose up in Makkah against the Umayyads in 63 AH' } },
            { id: 'p4', left: { ar: 'عمّار بن ياسر', fr: '‘Ammār ibn Yāsir', en: '‘Ammar ibn Yasir' }, right: { ar: 'صحابيٌّ تعلّم عنده ابن إباض', fr: 'Compagnon auprès de qui étudia Ibn Ibāḍ', en: 'A Companion Ibn Ibad studied with' } },
          ],
          explanation: {
            ar: 'كلّ اسمٍ يرتبط بمحطّةٍ من سيرة ابن إباض.',
            fr: 'Chaque nom se rattache à une étape de la vie d’Ibn Ibāḍ.',
            en: 'Each name ties to a stage of Ibn Ibad’s life.',
          },
        },
        {
          id: 'q4',
          type: 'visual',
          question: { ar: 'أيّ صورةٍ تمثّل أشهر آثار ابن إباض بعد نسبة المذهب إليه؟', fr: 'Quelle image représente l’œuvre la plus célèbre d’Ibn Ibāḍ, après le nom de l’école ?', en: 'Which image represents Ibn Ibad’s most famous work, after the school’s name?' },
          options: [
            { id: 'a', image: `${IMG}/letter-scroll.png`, label: { ar: 'رسالته إلى عبد الملك', fr: 'Sa lettre à ‘Abd al-Malik', en: 'His letter to ‘Abd al-Malik' } },
            { id: 'b', image: `${IMG}/umayyad-hall.png`, label: { ar: 'قصرٌ بناه', fr: 'Un palais qu’il bâtit', en: 'A palace he built' } },
            { id: 'c', image: `${IMG}/tamim-tents.png`, label: { ar: 'مخيّمٌ أسّسه', fr: 'Un campement qu’il fonda', en: 'A camp he founded' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'من آثاره: نسبة المذهب إليه، ورسالته إلى عبد الملك بن مروان.',
            fr: 'Son héritage : le nom de l’école, et sa lettre à ‘Abd al-Malik ibn Marwān.',
            en: 'His legacy: the school’s name, and his letter to ‘Abd al-Malik ibn Marwan.',
          },
        },
      ],
    },

    // 15 — Values (slide 6)
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'ماذا نتعلّم من هذا الدرس؟', fr: 'Que retenir de cette leçon ?', en: 'What do we learn from this lesson?' },
      prompt: {
        ar: 'كان الناس يحكمون على أهل الدعوة بما يُقال عنهم ولو جانب الحقيقة. ماذا فعل ابن إباض؟',
        fr: 'Les gens jugeaient les gens de l’Appel sur ce qu’on disait d’eux, même loin de la vérité. Que fit Ibn Ibāḍ ?',
        en: 'People judged the People of the Call by what was said of them, even when it strayed from the truth. What did Ibn Ibad do?',
      },
      choices: [
        {
          id: 'explain',
          isCorrect: true,
          label: { ar: 'بيّن رأيهم بالحوار والمراسلة', fr: 'Il exposa leur avis par le dialogue et la correspondance', en: 'He explained their view through dialogue and letters' },
          feedback: { ar: 'صحيح — فالحوار سبيلٌ إلى توضيح الأفكار وإزالة الأوهام.', fr: 'Exact — le dialogue est un chemin pour clarifier les idées et dissiper les illusions.', en: 'Correct — dialogue is a path to clarifying ideas and removing illusions.' },
        },
        {
          id: 'silent',
          isCorrect: false,
          label: { ar: 'سكت وترك الناس يقولون ما يشاؤون', fr: 'Il se tut et laissa les gens dire ce qu’ils voulaient', en: 'He kept quiet and let people say what they liked' },
          feedback: { ar: 'تذكّر: حين يسكت أهل الحقّ عن الباطل، يتوهّم أهل الباطل أنّهم على حقّ.', fr: 'Souviens-toi : quand les gens de la vérité se taisent, les gens du faux se croient dans le vrai.', en: 'Remember: when the people of truth stay silent, the people of falsehood think they are right.' },
        },
        {
          id: 'sword',
          isCorrect: false,
          label: { ar: 'رفع السيف على من خالفه', fr: 'Il leva l’épée contre ceux qui le contredisaient', en: 'He raised the sword against those who disagreed' },
          feedback: { ar: 'لا — بل ناظر من استعملوا السيف ضدّ المسلمين وأنكر عليهم.', fr: 'Non — au contraire, il débattit avec ceux qui levaient l’épée contre les musulmans et les réprouva.', en: 'No — he debated those who used the sword against Muslims and condemned them.' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من سيرة ابن إباض — اقلب كلّ بطاقة', fr: 'Des valeurs de la vie d’Ibn Ibāḍ — retourne chaque carte', en: 'Values from Ibn Ibad’s life — flip each card' },
      values: [
        {
          id: 'dialogue',
          value: { ar: 'الحوار', fr: 'Le dialogue', en: 'Dialogue' },
          evidence: { ar: 'حاور عبد الملك وراسله، وناظر الأزارقة.', fr: 'Il dialogua et correspondit avec ‘Abd al-Malik, et débattit avec les Azraqites.', en: 'He held dialogue and letters with ‘Abd al-Malik, and debated the Azariqa.' },
        },
        {
          id: 'courage',
          value: { ar: 'قول الحقّ', fr: 'Dire la vérité', en: 'Speaking the truth' },
          evidence: { ar: 'بيّن للحاكم موقف أصحابه من انحراف القيادة عن نهج الراشدين.', fr: 'Il exposa au souverain la position de ses compagnons face à l’écart du pouvoir par rapport à la voie des califes bien guidés.', en: 'He told the ruler his companions’ position on the leadership’s departure from the way of the Rightly Guided Caliphs.' },
        },
        {
          id: 'humility',
          value: { ar: 'التواضع في طلب العلم', fr: 'L’humilité dans la quête du savoir', en: 'Humility in seeking knowledge' },
          evidence: { ar: 'كان تلميذ جابر في العلم وإن كان أكبر منه سنًّا، ويصدر عن مشورته.', fr: 'Il était l’élève de Jābir bien que plus âgé, et agissait sur son conseil.', en: 'He was Jabir’s student though older, and acted on his counsel.' },
        },
        {
          id: 'justice',
          value: { ar: 'العدل', fr: 'La justice', en: 'Justice' },
          evidence: { ar: 'كتب إلى الحاكم: «ولا تظلموا الناس شيئًا».', fr: 'Il écrivit au souverain : « Ne faites aucun tort aux gens. »', en: 'He wrote to the ruler: "Do not wrong people in anything."' },
        },
      ],
    },

    // 16 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'جابر بن زيد هو إمام أهل الدعوة وفقيههم، وعبد الله بن إباض هو لسانهم العلنيّ: بيّن رأيهم أمام الأمويين بالحوار والمراسلة عن مشورة جابر، فنُسب المذهب إليه فسُمّي «الإباضية».',
        fr: 'Jābir ibn Zayd est l’imam et le juriste des gens de l’Appel ; ‘Abd Allāh ibn Ibāḍ fut leur voix publique : il exposa leur avis devant les Omeyyades par le dialogue et la correspondance, sur le conseil de Jābir, et l’école prit son nom : l’« ibāḍisme ».',
        en: 'Jabir ibn Zayd is the imam and jurist of the People of the Call; ‘Abdullah ibn Ibad was their public voice: he explained their view before the Umayyads through dialogue and letters, on Jabir’s counsel, and so the school took his name — the "Ibadiyya".',
      },
      learned: [
        {
          ar: 'بعد فتنة صفّين حُكم على أهل الدعوة بما قيل فيهم، فتكفّل ابن إباض ببيان رأيهم.',
          fr: 'Après Ṣiffīn, on jugea les gens de l’Appel sur ce qu’on disait d’eux ; Ibn Ibāḍ se chargea d’exposer leur avis.',
          en: 'After Siffin, the People of the Call were judged by what was said of them, so Ibn Ibad took on explaining their view.',
        },
        {
          ar: 'ابن إباض من بني تميم، وُلد قبل 23 هـ، وتعلّم عند عمّار بن ياسر وخزيمة بن ثابت رضي الله عنهما، وكان حيًّا سنة 86 هـ.',
          fr: 'Ibn Ibāḍ, des Banū Tamīm, naquit avant 23 H, étudia auprès de ‘Ammār ibn Yāsir et de Khuzayma ibn Thābit, et vivait encore en 86 H.',
          en: 'Ibn Ibad, of Banu Tamim, was born before 23 AH, studied with ‘Ammar ibn Yasir and Khuzayma ibn Thabit, and was still alive in 86 AH.',
        },
        {
          ar: 'راسل عبد الملك بن مروان ناصحًا: «… ولا تظلموا الناس شيئًا، وأن يكون كتاب الله حكمًا بيني وبينكم فيما اختلفنا فيه».',
          fr: 'Il écrivit à ‘Abd al-Malik ibn Marwān pour le conseiller : « … Ne faites aucun tort aux gens, et que le Livre de Dieu soit juge entre moi et vous en ce sur quoi nous divergeons. »',
          en: 'He wrote to ‘Abd al-Malik ibn Marwan in counsel: "… Do not wrong people in anything, and let the Book of God be the judge between me and you in what we differ on."',
        },
        {
          ar: 'دافع عن مكّة سنة 63 هـ، وناظر نافع بن الأزرق وأنكر عليه استحلال دماء المسلمين.',
          fr: 'Il défendit La Mecque en 63 H et débattit avec Nāfi‘ ibn al-Azraq, réprouvant qu’il juge licite le sang des musulmans.',
          en: 'He defended Makkah in 63 AH and debated Nafi‘ ibn al-Azraq, condemning his deeming Muslims’ blood lawful.',
        },
      ],
    },
  ],
}
