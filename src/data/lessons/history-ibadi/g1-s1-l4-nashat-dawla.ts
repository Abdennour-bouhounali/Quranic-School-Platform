import type { Lesson } from '../../types'

// Source: Ibadite History textbook (Other ressources/Ibadite_History_S1.pdf), "الدرس الرابع: تطورات في المدينة", pages 35–45 (slides 1–10).
//   Curriculum title: «نشأة الدولة الإسلامية».
//   Slide 2 — إشكالية الدرس: الآية (التوبة 100)، استقبل المسلمون من أهل المدينة إخوانهم المهاجرين بعد أن تركوا ديارهم وأموالهم بحثًا عن مكان يقيمون فيه دينهم في أمان؛
//             كيف كان أول لقاء بين المهاجرين والأنصار؟ ما أول الأعمال التي قام بها الرسول فور وصوله؟ كيف أصبح حال المسلمين بعيدًا عن المشركين؟
//   Slide 3 — بناء المسجد النبوي: وصل يوم 12 ربيع الأول من السنة 14 للبعثة فاستبشر المسلمون، تنافس الأنصار في استضافته فأشار عليهم باختيار مكان المسجد أولًا ثم يبني بيته بجواره،
//             المسجد منارة للمسلمين يجتمعون فيه للصلاة واللقاء والتشاور، وينطلقون منه متحدين في حياتهم وأخلاقهم.
//   Slide 4 — المؤاخاة: تسابق الأنصار إلى استضافة المهاجرين وإمدادهم بكل ما يحتاجونه، آخى الرسول بين كل أنصاري ونزيله من المهاجرين، فلا عداوة ولا إحساس بالضعف، المؤمنون إخوة يتعاونون.
//   Slide 5 — دستور المدينة: مجتمع جديد من المسلمين والمشركين واليهود، أقرّ للجميع دينه وأمواله، يعرف الواحد للآخر حقوقه وحدوده فلا يتعدى بعضهم على بعض، وعاهدوه أن يكونوا عونًا على الأعداء
//             إن هاجموا المدينة، وثّق البنود في وثيقة سُمّيت صحيفة المدينة، فعمّت الطمأنينة والسلام وأخذت حياة المسلمين تزدهر.
//   Slide 6 — أجيب: أول عمل؟ كيف استقبل الأنصار المهاجرين؟ كيف تعامل الرسول مع غير المسلمين؟
//   Slide 7 — تحوّل القبلة: كان يتجه نحو المسجد الأقصى قبلة الأنبياء قبله، أمر الله بتغيير القبلة فذهب المسلمون يبلّغون مساجد المدينة، أدرك أحد المبشّرين جماعة يصلّون فنادى،
//             فحوّلوا قبلتهم أثناء الصلاة وسُمّي المسجد مسجد القبلتين.
//   Slide 8 — بلال يرفع الأذان: اجتهدوا في فرائضهم مع أشغالهم، اشتكوا عدم معرفة وقت الصلاة، رأى عمر بن الخطاب وعبد الله بن زيد في منامهما مناديًا بكلمات الأذان، أخبرا الرسول فسُرّ،
//             اختار بلال بن رباح فرفع أول أذان في المدينة.
//   Slide 9 — اليقظة قائمة: خطر قريش بقي يترصّد، المشركون يتوعّدون بإرسال جيش، فلا يبيتون إلا ساهرين يحرسون المدينة والرسول، يراقبون الأوضاع داخلها وخارجها، وساعدهم دستور المدينة.
//   Slide 10 — أجيب: كيف استجاب المسلمون لتغيير القبلة؟ لماذا كانوا يحرسون المدينة؟ لماذا يُرفع الأذان؟
// Every fact below is taken from those slides; nothing is added from outside them.
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): scenes are told through architecture, objects, landscape and light.

const IMG = '/images/lessons/nashat-dawla'

export const nashatDawla: Lesson = {
  id: 'history-ibadi-g1-s1-l4',
  gradeId: 'history-ibadi-g1',
  moduleId: 'history-ibadi-g1',
  semesterId: 'history-ibadi-g1-s1',
  order: 4,
  status: 'published',
  estimatedMinutes: 40,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'واحةُ نخيلٍ خضراء تتخلّلها بيوتٌ طينية منخفضة عند الشروق، وفي وسطها ساحةٌ مسوّرة بسقفٍ من سعف النخل',
    fr: 'Une oasis verte de palmiers parsemée de maisons basses en terre au lever du soleil, avec en son cœur une cour close couverte de palmes',
    en: 'A green palm oasis dotted with low mud-brick houses at sunrise, with a walled courtyard roofed in palm fronds at its heart',
  },
  title: {
    ar: 'نشأة الدولة الإسلامية',
    fr: 'La naissance de l’État musulman à Médine',
    en: 'The Birth of the Muslim State in Madina',
  },
  description: {
    ar: 'وصل الرسول ﷺ إلى المدينة، فماذا بنى أوّلًا؟ اكتشف المسجد، والمؤاخاة، وصحيفة المدينة، وتحوّل القبلة، وأوّل أذان، وكيف بقيت المدينة يقظة.',
    fr: 'Le Prophète ﷺ arrive à Médine : que bâtit-il en premier ? Découvre la mosquée, la fraternisation, la charte de Médine, le changement de qibla, le premier appel à la prière, et la vigilance de Médine.',
    en: 'The Prophet ﷺ reaches Madina: what did he build first? Discover the mosque, the brotherhood, the Charter of Madina, the change of qibla, the first call to prayer, and how Madina stayed watchful.',
  },

  sections: [
    // 01 — Hero (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'واحةُ نخيلٍ خضراء تتخلّلها بيوتٌ طينية منخفضة عند الشروق، وفي وسطها ساحةٌ مسوّرة بسقفٍ من سعف النخل',
        fr: 'Une oasis verte de palmiers parsemée de maisons basses en terre au lever du soleil, avec en son cœur une cour close couverte de palmes',
        en: 'A green palm oasis dotted with low mud-brick houses at sunrise, with a walled courtyard roofed in palm fronds at its heart',
      },
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'إذا وصلتَ إلى مدينةٍ جديدة لتبدأ فيها حياةً آمنة، فبماذا تبدأ؟',
        fr: 'Si tu arrivais dans une ville nouvelle pour y commencer une vie en sécurité, par quoi commencerais-tu ?',
        en: 'If you arrived in a new town to begin a safe life there, what would you start with?',
      },
      intro: {
        ar: 'استقبل المسلمون من أهل المدينة إخوانهم المهاجرين مع الرسول ﷺ من مكّة، بعد أن تركوا ديارهم وأموالهم بحثًا عن مكانٍ يقيمون فيه دينهم في أمان. فكيف كان أوّل لقاءٍ بينهم؟ وما أوّل الأعمال التي قام بها الرسول ﷺ؟ وكيف أصبح حال المسلمين بعيدًا عن المشركين؟',
        fr: 'Les musulmans de Médine accueillirent leurs frères émigrés venus de La Mecque avec le Prophète ﷺ, qui avaient quitté leurs maisons et leurs biens pour trouver un lieu où pratiquer leur religion en sécurité. Comment fut leur première rencontre ? Quelles furent les premières actions du Prophète ﷺ ? Et que devint la vie des musulmans loin des polythéistes ?',
        en: 'The Muslims of Madina welcomed their brothers who had migrated from Makkah with the Prophet ﷺ, leaving their homes and wealth behind to find a place to practise their religion in safety. How was their first meeting? What were the Prophet’s ﷺ first actions? And what became of the Muslims’ life, far from the polytheists?',
      },
    },

    // 02 — Mission map (slide 2)
    {
      kind: 'missions',
      id: 'missions',
      title: { ar: 'ثلاث مهمّات في هذا الدرس', fr: 'Trois missions dans cette leçon', en: 'Three missions in this lesson' },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنطلق إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'ما أوّل الأعمال التي قام بها الرسول ﷺ فور وصوله إلى المدينة؟', fr: 'Quelle fut la première action du Prophète ﷺ à son arrivée à Médine ?', en: 'What was the Prophet’s ﷺ first action on reaching Madina?' },
          target: 'reading-masjid',
          teaser: { ar: 'مكانٌ قبل البيت.', fr: 'Un lieu avant la maison.', en: 'A place before the house.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف كان أوّل لقاءٍ بين المهاجرين والأنصار؟', fr: 'Comment fut la première rencontre entre les Émigrés et les Ansār ?', en: 'How was the first meeting between the Emigrants and the Ansar?' },
          target: 'reading-muakhat',
          teaser: { ar: 'كلّ أنصاريٍّ وأخوه.', fr: 'Chaque Ansārī et son frère.', en: 'Each Ansari and his brother.' },
        },
        {
          id: 'm3',
          question: { ar: 'كيف أصبح حال المسلمين بعيدًا عن المشركين؟', fr: 'Que devint la vie des musulmans loin des polythéistes ?', en: 'How did the Muslims fare, far from the polytheists?' },
          target: 'reading-vigilance',
          teaser: { ar: 'أمانٌ، لكنّ العيون ساهرة.', fr: 'La sécurité, mais des yeux qui veillent.', en: 'Safety — but watchful eyes.' },
        },
      ],
    },

    // 03 — Reading: arrival in Madina (slides 2–3)
    {
      kind: 'reading',
      id: 'reading-arrival',
      title: { ar: 'اقرأ: الوصول إلى المدينة', fr: 'Lis : l’arrivée à Médine', en: 'Read: arriving in Madina' },
      intro: {
        ar: 'اقرأ كيف استُقبل المهاجرون، ثمّ ابنِ الآية في اللعبة التالية.',
        fr: 'Lis comment les Émigrés furent accueillis, puis reconstitue le verset dans le jeu suivant.',
        en: 'Read how the Emigrants were welcomed, then rebuild the verse in the next game.',
      },
      image: `${IMG}/welcome-house.png`,
      imageAlt: {
        ar: 'داخلُ بيتٍ طينيّ بسيط، ستارةٌ منسوجة مرفوعة عن الباب يدخل منها ضوء الشمس، ووسائدُ وسجّاد، وصينيّةٌ عليها تمرٌ وخبز وإبريق ماء',
        fr: 'L’intérieur d’une simple maison en terre, un rideau tissé relevé sur la porte laissant entrer le soleil, des coussins, des tapis et un plateau avec des dattes, du pain et une cruche d’eau',
        en: 'Inside a simple mud-brick house, a woven curtain drawn back from the door letting in sunlight, cushions, rugs and a tray with dates, bread and a water jug',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'السابقون الأوّلون', fr: 'Les premiers devanciers', en: 'The first forerunners' },
          text: {
            ar: 'قال الله تعالى: ﴿وَالسَّابِقُونَ الْأَوَّلُونَ مِنَ الْمُهَاجِرِينَ وَالْأَنْصَارِ وَالَّذِينَ اتَّبَعُوهُمْ بِإِحْسَانٍ رَضِيَ اللَّهُ عَنْهُمْ وَرَضُوا عَنْهُ وَأَعَدَّ لَهُمْ جَنَّاتٍ تَجْرِي تَحْتَهَا الْأَنْهَارُ خَالِدِينَ فِيهَا أَبَدًا ذَلِكَ الْفَوْزُ الْعَظِيمُ﴾ [التوبة: 100].',
            fr: 'Dieu dit : « Les tout premiers devanciers parmi les Émigrés et les Ansār, et ceux qui les ont suivis dans le bien : Dieu les agrée et ils L’agréent. Il leur a préparé des jardins sous lesquels coulent les rivières, où ils demeureront éternellement. Voilà l’immense succès. » [at-Tawba : 100, traduction du sens]',
            en: 'God says: "The first forerunners among the Emigrants and the Ansar, and those who followed them in goodness — God is pleased with them and they are pleased with Him. He has prepared for them gardens beneath which rivers flow, abiding there forever. That is the supreme triumph." [at-Tawba: 100, translation of the meaning]',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'إخوةٌ يستقبلون إخوة', fr: 'Des frères accueillent des frères', en: 'Brothers welcome brothers' },
          text: {
            ar: 'استقبل المسلمون من أهل المدينة إخوانهم المهاجرين مع الرسول ﷺ من مكّة ليستقرّوا بها، بعد أن تركوا ديارهم وأموالهم بحثًا عن مكانٍ يقيمون فيه دينهم في أمان.',
            fr: 'Les musulmans de Médine accueillirent leurs frères émigrés de La Mecque avec le Prophète ﷺ pour qu’ils s’y installent, eux qui avaient quitté maisons et biens pour trouver un lieu où pratiquer leur religion en sécurité.',
            en: 'The Muslims of Madina welcomed their brothers who had migrated from Makkah with the Prophet ﷺ so they could settle there, after they had left their homes and wealth to find a place to practise their religion in safety.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'يومُ الوصول', fr: 'Le jour de l’arrivée', en: 'The day of arrival' },
          text: {
            ar: 'وصل الرسول ﷺ إلى المدينة يوم الثاني عشر من ربيع الأوّل من السنة الرابعة عشرة للبعثة، فاستبشر المسلمون بقدومه واستقبلوه بسعادةٍ غامرة.',
            fr: 'Le Prophète ﷺ arriva à Médine le 12 rabī‘ al-awwal de la quatorzième année de la mission ; les musulmans se réjouirent de sa venue et l’accueillirent avec une immense joie.',
            en: 'The Prophet ﷺ reached Madina on the 12th of Rabi‘ al-Awwal in the fourteenth year of the mission; the Muslims rejoiced at his coming and welcomed him with overflowing happiness.',
          },
        },
      ],
    },

    // 04 — Verse builder (slide 2)
    {
      kind: 'verses',
      id: 'verse-sabiqun',
      title: { ar: 'المهاجرون والأنصار', fr: 'Les Émigrés et les Ansār', en: 'The Emigrants and the Ansar' },
      intro: {
        ar: 'قرأتَ الآية في النصّ السابق. أعِد الآن بناء بدايتها بالترتيب الصحيح.',
        fr: 'Tu viens de lire le verset dans le texte. Reconstruis maintenant son début dans le bon ordre.',
        en: 'You have just read the verse in the text. Now rebuild its opening in the right order.',
      },
      verses: [
        {
          id: 'tawba-100',
          context: { ar: 'قال الله تعالى:', fr: 'Dieu — qu’Il soit exalté — dit :', en: 'God Almighty says:' },
          ref: { ar: 'سورة التوبة، الآية 100', fr: 'Sourate at-Tawba, verset 100', en: 'Surat at-Tawba, verse 100' },
          words: ['وَالسَّابِقُونَ', 'الْأَوَّلُونَ', 'مِنَ', 'الْمُهَاجِرِينَ', 'وَالْأَنْصَارِ', 'وَالَّذِينَ', 'اتَّبَعُوهُمْ', 'بِإِحْسَانٍ', 'رَضِيَ', 'اللَّهُ', 'عَنْهُمْ', 'وَرَضُوا', 'عَنْهُ'],
          meaning: {
            ar: 'رضي الله عن السابقين من المهاجرين والأنصار ومن تبعهم بإحسان، ورضوا عنه.',
            fr: 'Dieu agrée les premiers Émigrés et Ansār et ceux qui les suivirent dans le bien, et ils L’agréent.',
            en: 'God is pleased with the first Emigrants and Ansar and those who followed them in goodness, and they are pleased with Him.',
          },
        },
      ],
    },

    // 05 — Reading: building the Prophet's mosque (slide 3)
    {
      kind: 'reading',
      id: 'reading-masjid',
      title: { ar: 'اقرأ: بناء المسجد النبويّ', fr: 'Lis : la construction de la mosquée du Prophète', en: 'Read: building the Prophet’s Mosque' },
      intro: {
        ar: 'ما أوّل ما فعله الرسول ﷺ؟ اقرأ، ثمّ استكشف المسجد.',
        fr: 'Quelle fut la première chose que fit le Prophète ﷺ ? Lis, puis explore la mosquée.',
        en: 'What was the first thing the Prophet ﷺ did? Read, then explore the mosque.',
      },
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'واحةُ نخيلٍ خضراء تتخلّلها بيوتٌ طينية منخفضة عند الشروق، وفي وسطها ساحةٌ مسوّرة بسقفٍ من سعف النخل',
        fr: 'Une oasis verte de palmiers parsemée de maisons basses en terre au lever du soleil, avec en son cœur une cour close couverte de palmes',
        en: 'A green palm oasis dotted with low mud-brick houses at sunrise, with a walled courtyard roofed in palm fronds at its heart',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'تنافسُ الأنصار', fr: 'L’émulation des Ansār', en: 'The Ansar compete' },
          text: {
            ar: 'تنافس الأنصار فيمن يستضيف الرسول ﷺ في منزله، لكنّه أشار عليهم باختيار مكان المسجد أوّلًا، ثمّ يبني بيته بجواره.',
            fr: 'Les Ansār rivalisèrent pour recevoir le Prophète ﷺ chez eux, mais il leur indiqua de choisir d’abord l’emplacement de la mosquée ; ensuite, il bâtirait sa maison à côté.',
            en: 'The Ansar competed over who would host the Prophet ﷺ in his home, but he directed them to choose the site of the mosque first; then he would build his house beside it.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'المسجد أوّلًا', fr: 'La mosquée d’abord', en: 'The mosque first' },
          text: {
            ar: 'اهتمّ النبيّ ﷺ أوّل الأمر ببناء المسجد، لأنّه يُعدّ منارةً للمسلمين.',
            fr: 'Le Prophète ﷺ s’occupa en tout premier de bâtir la mosquée, car elle est un phare pour les musulmans.',
            en: 'The Prophet ﷺ cared first of all about building the mosque, because it is a beacon for the Muslims.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'قلبُ المدينة', fr: 'Le cœur de la ville', en: 'The heart of the town' },
          text: {
            ar: 'يجتمع فيه المسلمون للصلاة واللقاء والتشاور، كما ينطلقون منه متّحدين في حياتهم وأخلاقهم.',
            fr: 'Les musulmans s’y réunissent pour la prière, la rencontre et la consultation, et en partent unis dans leur vie et leur conduite.',
            en: 'There the Muslims gather for prayer, meeting and consultation, and from it they go out united in their lives and their manners.',
          },
        },
      ],
    },

    // 06 — Explorer: the mosque (slide 3)
    {
      kind: 'explorer',
      id: 'masjid-explorer',
      title: { ar: 'استكشف المسجد', fr: 'Explore la mosquée', en: 'Explore the mosque' },
      intro: {
        ar: 'اضغط على النقاط المضيئة لتكتشف ماذا كان المسجد للمسلمين.',
        fr: 'Touche les points lumineux pour découvrir ce que la mosquée était pour les musulmans.',
        en: 'Tap the glowing points to discover what the mosque was for the Muslims.',
      },
      image: `${IMG}/masjid.png`,
      imageAlt: {
        ar: 'ساحةٌ بسيطة بجدرانٍ طينية منخفضة، يظلّل جانبًا منها سقفٌ من سعف النخل، وعلى أرضها حُصرٌ منسوجة، وبجوارها بيتٌ طينيّ صغير، والنخيل حولها',
        fr: 'Une cour simple aux murs bas en terre, ombragée d’un côté par un toit de palmes, des nattes tressées au sol, une petite maison en terre attenante et des palmiers autour',
        en: 'A simple courtyard with low mud-brick walls, one side shaded by a palm-frond roof, woven mats on the ground, a small mud-brick house beside it and palms around',
      },
      hotspots: [
        {
          id: 'site',
          x: 10,
          y: 45,
          label: { ar: 'المكان أوّلًا', fr: 'L’emplacement d’abord', en: 'The site first' },
          description: {
            ar: 'تنافس الأنصار في استضافة الرسول ﷺ، فأشار عليهم باختيار مكان المسجد أوّلًا.',
            fr: 'Les Ansār rivalisaient pour recevoir le Prophète ﷺ ; il leur indiqua de choisir d’abord l’emplacement de la mosquée.',
            en: 'The Ansar competed to host the Prophet ﷺ; he directed them to choose the site of the mosque first.',
          },
        },
        {
          id: 'mats',
          x: 35,
          y: 72,
          label: { ar: 'مكان الصلاة', fr: 'Le lieu de la prière', en: 'The place of prayer' },
          description: {
            ar: 'يجتمع المسلمون في المسجد للصلاة.',
            fr: 'Les musulmans se réunissent à la mosquée pour la prière.',
            en: 'The Muslims gather in the mosque for prayer.',
          },
        },
        {
          id: 'shade',
          x: 50,
          y: 35,
          label: { ar: 'اللقاء والتشاور', fr: 'Rencontre et consultation', en: 'Meeting and consultation' },
          description: {
            ar: 'لم يكن المسجد للصلاة فقط، بل كان المسلمون يجتمعون فيه أيضًا للّقاء والتشاور.',
            fr: 'La mosquée n’était pas seulement pour la prière : les musulmans s’y réunissaient aussi pour se rencontrer et se consulter.',
            en: 'The mosque was not only for prayer: the Muslims also gathered there to meet and consult one another.',
          },
        },
        {
          id: 'house',
          x: 70,
          y: 55,
          label: { ar: 'البيت بجوار المسجد', fr: 'La maison à côté de la mosquée', en: 'The house beside the mosque' },
          description: {
            ar: 'بعد اختيار مكان المسجد، يبني الرسول ﷺ بيته بجواره.',
            fr: 'Une fois l’emplacement de la mosquée choisi, le Prophète ﷺ bâtit sa maison à côté.',
            en: 'Once the mosque’s site was chosen, the Prophet ﷺ built his house beside it.',
          },
        },
        {
          id: 'beacon',
          x: 60,
          y: 88,
          label: { ar: 'منارةٌ للمسلمين', fr: 'Un phare pour les musulmans', en: 'A beacon for the Muslims' },
          description: {
            ar: 'المسجد منارةٌ للمسلمين، ينطلقون منه متّحدين في حياتهم وأخلاقهم.',
            fr: 'La mosquée est un phare pour les musulmans : ils en partent unis dans leur vie et leur conduite.',
            en: 'The mosque is a beacon for the Muslims: they go out from it united in their lives and manners.',
          },
        },
      ],
    },

    // 07 — Reading: the brotherhood (slide 4)
    {
      kind: 'reading',
      id: 'reading-muakhat',
      title: { ar: 'اقرأ: المؤاخاة بين المهاجرين والأنصار', fr: 'Lis : la fraternisation des Émigrés et des Ansār', en: 'Read: the brotherhood of Emigrants and Ansar' },
      intro: {
        ar: 'كيف كان أوّل لقاءٍ بين المهاجرين والأنصار؟ اقرأ، ثمّ ابنِ سلسلة المؤاخاة.',
        fr: 'Comment fut la première rencontre entre Émigrés et Ansār ? Lis, puis construis la chaîne de la fraternisation.',
        en: 'How was the first meeting between Emigrants and Ansar? Read, then build the chain of brotherhood.',
      },
      image: `${IMG}/brotherhood.png`,
      imageAlt: {
        ar: 'مصباحان فخّاريّان قديمان متجاوران على لوحٍ خشبيّ، يميل لهب أحدهما ليُشعل الآخر فيضيئان معًا',
        fr: 'Deux anciennes lampes à huile en terre côte à côte sur une planche, la flamme de l’une penchée pour allumer l’autre, brillant ensemble',
        en: 'Two ancient clay oil lamps side by side on a wooden plank, one flame leaning to light the other so both glow together',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'سباقٌ إلى الكرم', fr: 'Une course à la générosité', en: 'A race to generosity' },
          text: {
            ar: 'تسابق الأنصار إلى استضافة المهاجرين في منازلهم، وإمدادهم بكلّ ما يحتاجونه.',
            fr: 'Les Ansār se précipitèrent pour accueillir les Émigrés chez eux et leur fournir tout ce dont ils avaient besoin.',
            en: 'The Ansar raced to host the Emigrants in their homes and to supply them with everything they needed.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'كلُّ أنصاريٍّ وأخوه', fr: 'Chaque Ansārī et son frère', en: 'Each Ansari and his brother' },
          text: {
            ar: 'آخى الرسول ﷺ بين كلّ أنصاريٍّ ونزيله من المهاجرين، فأخذ كلّ رجلٍ من الأنصار رجلًا من المهاجرين واعتبره أخًا له.',
            fr: 'Le Prophète ﷺ fit de chaque Ansārī et de l’Émigré qu’il hébergeait des frères : chaque homme des Ansār prit un homme des Émigrés et le considéra comme son frère.',
            en: 'The Prophet ﷺ made each Ansari and the Emigrant staying with him brothers: each man of the Ansar took a man of the Emigrants and regarded him as his brother.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'إخوةٌ في الدين', fr: 'Des frères en religion', en: 'Brothers in religion' },
          text: {
            ar: 'وهكذا يتّحد المسلمون، فلا تكون بينهم عداوةٌ أو إحساسٌ بالضعف، والمؤمنون إخوةٌ في الدين يتعاونون ويساعد بعضهم بعضًا.',
            fr: 'Ainsi les musulmans s’unissent : plus d’hostilité entre eux ni de sentiment de faiblesse ; les croyants sont des frères en religion qui coopèrent et s’entraident.',
            en: 'So the Muslims become united: no enmity between them and no feeling of weakness; the believers are brothers in religion who cooperate and help one another.',
          },
        },
      ],
    },

    // 08 — Domino chain: the brotherhood (slide 4)
    {
      kind: 'chain',
      id: 'muakhat-chain',
      title: { ar: 'سلسلة المؤاخاة', fr: 'La chaîne de la fraternisation', en: 'The chain of brotherhood' },
      intro: {
        ar: 'اختر الحلقة الصحيحة في كلّ مرّة لترى كيف صار المهاجرون والأنصار إخوة.',
        fr: 'Choisis le bon maillon à chaque fois pour voir comment Émigrés et Ansār devinrent frères.',
        en: 'Choose the right link each time to see how the Emigrants and Ansar became brothers.',
      },
      image: `${IMG}/brotherhood.png`,
      imageAlt: {
        ar: 'مصباحان فخّاريّان متجاوران يُضيئان معًا',
        fr: 'Deux lampes en terre côte à côte qui brillent ensemble',
        en: 'Two clay lamps side by side glowing together',
      },
      start: {
        ar: 'وصل المهاجرون إلى المدينة بعد أن تركوا ديارهم وأموالهم في مكّة.',
        fr: 'Les Émigrés arrivent à Médine après avoir laissé maisons et biens à La Mecque.',
        en: 'The Emigrants reach Madina after leaving their homes and wealth in Makkah.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'فماذا فعل الأنصار؟', fr: 'Que firent alors les Ansār ?', en: 'So what did the Ansar do?' },
          correct: { ar: 'تسابقوا إلى استضافتهم في منازلهم وإمدادهم بكلّ ما يحتاجونه', fr: 'Ils se précipitèrent pour les accueillir chez eux et leur donner tout le nécessaire', en: 'They raced to host them in their homes and supply all they needed' },
          distractors: [
            { label: { ar: 'تركوهم يبحثون عن مأوى وحدهم', fr: 'Ils les laissèrent chercher un abri seuls', en: 'They left them to find shelter alone' }, hint: { ar: 'العكس: تسابق الأنصار إلى استضافتهم.', fr: 'L’inverse : les Ansār rivalisèrent pour les accueillir.', en: 'The opposite: the Ansar raced to host them.' } },
            { label: { ar: 'طلبوا منهم العودة إلى مكّة', fr: 'Ils leur demandèrent de retourner à La Mecque', en: 'They asked them to go back to Makkah' }, hint: { ar: 'استقبلوهم ليستقرّوا في المدينة.', fr: 'Ils les accueillirent pour qu’ils s’installent à Médine.', en: 'They welcomed them so they could settle in Madina.' } },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'وماذا فعل الرسول ﷺ؟', fr: 'Et que fit le Prophète ﷺ ?', en: 'And what did the Prophet ﷺ do?' },
          correct: { ar: 'آخى بين كلّ أنصاريٍّ ونزيله من المهاجرين', fr: 'Il fit frères chaque Ansārī et l’Émigré qu’il hébergeait', en: 'He made each Ansari and the Emigrant staying with him brothers' },
          distractors: [
            { label: { ar: 'جعل المهاجرين يسكنون وحدهم خارج المدينة', fr: 'Il fit loger les Émigrés seuls hors de la ville', en: 'He housed the Emigrants alone outside the town' }, hint: { ar: 'جمع بينهم ولم يفرّقهم.', fr: 'Il les réunit au lieu de les séparer.', en: 'He brought them together rather than apart.' } },
            { label: { ar: 'قسم المدينة نصفين بين الفريقين', fr: 'Il partagea la ville en deux entre les groupes', en: 'He split the town in two between the groups' }, hint: { ar: 'لم يقسمهم، بل جعل كلّ اثنين أخوين.', fr: 'Il ne les divisa pas : il fit de chaque paire des frères.', en: 'He did not divide them — he made each pair brothers.' } },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'فماذا نتج عن ذلك؟', fr: 'Qu’en résulta-t-il ?', en: 'What came of it?' },
          correct: { ar: 'اتّحد المسلمون، فلا عداوة بينهم ولا إحساس بالضعف', fr: 'Les musulmans s’unirent : ni hostilité entre eux, ni sentiment de faiblesse', en: 'The Muslims united: no enmity between them and no feeling of weakness' },
          distractors: [
            { label: { ar: 'تفرّق المسلمون إلى جماعاتٍ متنافسة', fr: 'Les musulmans se divisèrent en groupes rivaux', en: 'The Muslims split into rival groups' }, hint: { ar: 'المؤاخاة جمعتهم ولم تُفرّقهم.', fr: 'La fraternisation les réunit au lieu de les diviser.', en: 'The brotherhood united them rather than dividing them.' } },
            { label: { ar: 'شعر المهاجرون بالغربة والضعف', fr: 'Les Émigrés se sentirent étrangers et faibles', en: 'The Emigrants felt like strangers and weak' }, hint: { ar: 'بفضل المؤاخاة زال الإحساس بالضعف.', fr: 'Grâce à la fraternisation, le sentiment de faiblesse disparut.', en: 'Thanks to the brotherhood, the feeling of weakness vanished.' } },
          ],
        },
      ],
      ending: {
        ar: 'المؤمنون إخوةٌ في الدين، يتعاونون ويساعد بعضهم بعضًا.',
        fr: 'Les croyants sont des frères en religion : ils coopèrent et s’entraident.',
        en: 'The believers are brothers in religion: they cooperate and help one another.',
      },
    },

    // 09 — Reading: the Charter of Madina (slide 5)
    {
      kind: 'reading',
      id: 'reading-sahifa',
      title: { ar: 'اقرأ: الرسول ﷺ يضع دستورًا للمدينة', fr: 'Lis : le Prophète ﷺ donne une charte à Médine', en: 'Read: the Prophet ﷺ gives Madina a charter' },
      intro: {
        ar: 'في المدينة لم يكن المسلمون وحدهم. اقرأ، ثمّ رتّب بنود الصحيفة.',
        fr: 'À Médine, les musulmans n’étaient pas seuls. Lis, puis range les clauses de la charte.',
        en: 'In Madina the Muslims were not alone. Read, then sort the clauses of the charter.',
      },
      image: `${IMG}/sahifa.png`,
      imageAlt: {
        ar: 'صحيفةٌ ملفوفة مربوطة بخيطٍ أحمر على طاولةٍ خشبية منخفضة، بجوارها دواةٌ فخّارية وريشة ومصباحٌ مضاء',
        fr: 'Un rouleau de parchemin noué d’un cordon rouge sur une table basse en bois, près d’un encrier en terre, d’une plume et d’une lampe allumée',
        en: 'A rolled parchment tied with a red cord on a low wooden table, beside a clay inkwell, a quill and a lit lamp',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'مجتمعٌ جديد', fr: 'Une société nouvelle', en: 'A new society' },
          text: {
            ar: 'تشكّل في المدينة المنوّرة مجتمعٌ جديد من المسلمين ومن المشركين ومن اليهود، فأقرّ الرسول ﷺ للجميع دينه وأمواله.',
            fr: 'À Médine se forma une société nouvelle de musulmans, de polythéistes et de juifs ; le Prophète ﷺ reconnut à chacun sa religion et ses biens.',
            en: 'In Madina a new society formed of Muslims, polytheists and Jews; the Prophet ﷺ confirmed for everyone their religion and their property.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'حقوقٌ وحدود', fr: 'Des droits et des limites', en: 'Rights and limits' },
          text: {
            ar: 'وأقرّ الرسول ﷺ أن يعرف الواحد للآخر حقوقه وحدوده، فلا يتعدّى بعضهم على بعض، وعاهدوه أن يكونوا عونًا على الأعداء إن هاجموا المدينة.',
            fr: 'Le Prophète ﷺ établit que chacun connaisse les droits et les limites de l’autre, afin que nul n’agresse autrui ; et ils s’engagèrent à s’entraider contre les ennemis s’ils attaquaient Médine.',
            en: 'The Prophet ﷺ established that each should know the other’s rights and limits, so that none would wrong another; and they pledged to stand together against enemies if they attacked Madina.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'صحيفة المدينة', fr: 'La charte de Médine', en: 'The Charter of Madina' },
          text: {
            ar: 'وثّق الرسول ﷺ هذه البنود في وثيقةٍ لتشهد على اتّفاقهم، وسُمّيت «صحيفة المدينة»، فعمّت الطمأنينة والسلام في المدينة المنوّرة، وأخذت حياة المسلمين تزدهر.',
            fr: 'Le Prophète ﷺ consigna ces clauses dans un document témoignant de leur accord, appelé « la charte de Médine » ; la sérénité et la paix se répandirent à Médine, et la vie des musulmans se mit à prospérer.',
            en: 'The Prophet ﷺ recorded these clauses in a document to bear witness to their agreement, called "the Charter of Madina"; calm and peace spread through Madina, and the Muslims’ life began to flourish.',
          },
        },
      ],
    },

    // 10 — Placement: the charter (slide 5)
    {
      kind: 'placement',
      id: 'sahifa-placement',
      title: { ar: 'رتّب صحيفة المدينة', fr: 'Range la charte de Médine', en: 'Sort the Charter of Madina' },
      intro: {
        ar: 'اسحب كلّ بطاقة إلى الخانة الصحيحة، أو اضغط البطاقة ثمّ الخانة.',
        fr: 'Glisse chaque carte dans la bonne case, ou touche la carte puis la case.',
        en: 'Drag each card to the right box, or tap the card and then the box.',
      },
      slots: [
        { id: 'who', label: { ar: 'من يسكن المدينة؟', fr: 'Qui vit à Médine ?', en: 'Who lives in Madina?' } },
        { id: 'terms', label: { ar: 'بنود الصحيفة', fr: 'Les clauses de la charte', en: 'The charter’s clauses' } },
        { id: 'result', label: { ar: 'ثمرة الصحيفة', fr: 'Le fruit de la charte', en: 'The charter’s fruit' } },
      ],
      cards: [
        {
          id: 'c1',
          slotId: 'who',
          label: { ar: 'المسلمون والمشركون واليهود', fr: 'Musulmans, polythéistes et juifs', en: 'Muslims, polytheists and Jews' },
          hint: { ar: 'هؤلاء هم أهل المجتمع الجديد في المدينة.', fr: 'Ce sont les membres de la nouvelle société de Médine.', en: 'These are the members of Madina’s new society.' },
        },
        {
          id: 'c2',
          slotId: 'terms',
          label: { ar: 'لكلٍّ دينه وأمواله', fr: 'À chacun sa religion et ses biens', en: 'Each keeps his religion and property' },
          hint: { ar: 'هذا ممّا أقرّه الرسول ﷺ للجميع.', fr: 'C’est ce que le Prophète ﷺ reconnut à tous.', en: 'This is something the Prophet ﷺ confirmed for all.' },
        },
        {
          id: 'c3',
          slotId: 'terms',
          label: { ar: 'يعرف الواحد للآخر حقوقه وحدوده', fr: 'Chacun connaît les droits et limites de l’autre', en: 'Each knows the other’s rights and limits' },
          hint: { ar: 'هذا بندٌ يمنع التعدّي.', fr: 'C’est une clause qui empêche l’agression.', en: 'This is a clause that prevents wrongdoing.' },
        },
        {
          id: 'c4',
          slotId: 'terms',
          label: { ar: 'العون على الأعداء إن هاجموا المدينة', fr: 'S’entraider contre les ennemis qui attaqueraient Médine', en: 'Standing together if enemies attack Madina' },
          hint: { ar: 'هذا عهدٌ تعاهدوا عليه في الصحيفة.', fr: 'C’est un engagement pris dans la charte.', en: 'This is a pledge made in the charter.' },
        },
        {
          id: 'c5',
          slotId: 'result',
          label: { ar: 'عمّت الطمأنينة والسلام', fr: 'La sérénité et la paix se répandirent', en: 'Calm and peace spread' },
          hint: { ar: 'هذا ما حدث بعد توثيق البنود.', fr: 'C’est ce qui arriva après la rédaction des clauses.', en: 'This is what happened after the clauses were written down.' },
        },
        {
          id: 'c6',
          slotId: 'result',
          label: { ar: 'أخذت حياة المسلمين تزدهر', fr: 'La vie des musulmans se mit à prospérer', en: 'The Muslims’ life began to flourish' },
          hint: { ar: 'هذه نتيجةٌ وليست بندًا.', fr: 'C’est un résultat, non une clause.', en: 'This is a result, not a clause.' },
        },
      ],
    },

    // 11 — Reading: the qibla and the adhan (slides 7–8)
    {
      kind: 'reading',
      id: 'reading-qibla-adhan',
      title: { ar: 'اقرأ: تحوّل القبلة وأوّل أذان', fr: 'Lis : le changement de qibla et le premier appel', en: 'Read: the change of qibla and the first adhan' },
      intro: {
        ar: 'حدثان غيّرا يوم المسلمين في المدينة. اقرأ، ثمّ رتّب قصّة الأذان.',
        fr: 'Deux événements changèrent le quotidien des musulmans à Médine. Lis, puis remets en ordre l’histoire de l’adhān.',
        en: 'Two events changed the Muslims’ day in Madina. Read, then put the story of the adhan in order.',
      },
      image: `${IMG}/qibla.png`,
      imageAlt: {
        ar: 'ساحةُ صلاةٍ مكشوفة بجدرانٍ طينية وأعمدةٍ خشبية، وصفوفٌ من الحُصر يغمرها ضوءٌ ذهبيّ يدخل من جانبٍ واحد',
        fr: 'Une cour de prière à ciel ouvert, murs de terre et piliers de bois, des rangées de nattes baignées d’une lumière dorée venant d’un seul côté',
        en: 'An open-air prayer courtyard with mud walls and wooden pillars, rows of mats bathed in golden light coming from one side',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'قبلة الأنبياء', fr: 'La qibla des prophètes', en: 'The qibla of the prophets' },
          text: {
            ar: 'كان الرسول ﷺ يتّجه في صلاته نحو المسجد الأقصى، وهي قبلة الأنبياء قبله. ولمّا أنزل الله عزّ وجلّ أمره بتغيير القبلة، ذهب المسلمون يُبلّغون مساجد المدينة.',
            fr: 'Le Prophète ﷺ se tournait, dans sa prière, vers la mosquée al-Aqṣā, qibla des prophètes avant lui. Quand Dieu révéla l’ordre de changer de qibla, des musulmans partirent l’annoncer aux mosquées de Médine.',
            en: 'In his prayer the Prophet ﷺ faced al-Aqsa Mosque, the qibla of the prophets before him. When God revealed His command to change the qibla, Muslims went to tell the mosques of Madina.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'مسجد القبلتين', fr: 'La mosquée des deux qiblas', en: 'The Mosque of the Two Qiblas' },
          text: {
            ar: 'أدرك أحد المبشّرين بالخبر جماعةً في مسجدٍ وهم يصلّون، فنادى بأنّ الله تعالى قد حوّل القبلة إلى جهة الكعبة، فقامت الجماعة بتحويل قبلتهم أثناء الصلاة، وسُمّي ذلك المسجد بمسجد القبلتين.',
            fr: 'L’un des messagers trouva un groupe en prière dans une mosquée et annonça que Dieu avait tourné la qibla vers la Ka‘ba ; le groupe changea de direction en pleine prière, et cette mosquée fut appelée la mosquée des deux qiblas.',
            en: 'One of the messengers reached a group praying in a mosque and called out that God had turned the qibla toward the Kaaba; the group turned their direction during the prayer itself, and that mosque was named the Mosque of the Two Qiblas.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'متى نصلّي؟', fr: 'Quand prier ?', en: 'When do we pray?' },
          text: {
            ar: 'اجتهد المسلمون في المدينة على أداء فرائضهم مع مزاولة أشغالهم لتوفير معيشتهم، فكلّما حان أوان الصلاة استراحوا من أعمالهم متوجّهين نحو الصلاة ولقاء الرسول ﷺ. واشتكى الكثير منهم أنّهم لا يُدركون الصلاة لعدم معرفتهم وقت دخولها.',
            fr: 'À Médine, les musulmans s’efforçaient d’accomplir leurs obligations tout en travaillant pour vivre ; à chaque heure de prière, ils quittaient leurs tâches pour prier et rejoindre le Prophète ﷺ. Mais beaucoup se plaignaient de manquer la prière, faute de savoir quand son heure arrivait.',
            en: 'In Madina the Muslims strove to perform their duties while working for their living; whenever prayer time came, they left their work to pray and meet the Prophet ﷺ. But many complained that they missed the prayer because they did not know when its time had come.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'بلال يرفع الأذان', fr: 'Bilāl lance l’appel', en: 'Bilal raises the adhan' },
          text: {
            ar: 'فرأى كلٌّ من عمر بن الخطّاب وعبد الله بن زيد رضي الله عنهما في منامهما مناديًا يُخبرهما بكلمات الأذان، فراحا يُخبران رسول الله ﷺ فسُرّ بذلك، ثمّ اختار بلال بن رباح رضي الله عنه ليُنادي بها على الناس، فرفع بذلك أوّل أذانٍ في المدينة.',
            fr: '‘Umar ibn al-Khaṭṭāb et ‘Abd Allāh ibn Zayd (qu’Allah les agrée) virent chacun en songe un crieur leur apprenant les paroles de l’adhān ; ils allèrent l’annoncer au Messager ﷺ, qui s’en réjouit, puis il choisit Bilāl ibn Rabāḥ pour les clamer aux gens : ce fut le premier adhān à Médine.',
            en: '‘Umar ibn al-Khattab and ‘Abdullah ibn Zayd (may God be pleased with them) each saw in a dream a caller teaching them the words of the adhan; they went to tell God’s Messenger ﷺ, who was pleased, and then he chose Bilal ibn Rabah to call them out to the people — the first adhan in Madina.',
          },
        },
      ],
    },

    // 12 — Sorting: the story of the first adhan (slide 8)
    {
      kind: 'sorting',
      id: 'adhan-sorting',
      title: { ar: 'قصّة أوّل أذان', fr: 'L’histoire du premier adhān', en: 'The story of the first adhan' },
      intro: {
        ar: 'رتّب الأحداث من الأوّل إلى الأخير، بالسحب أو بالأسهم.',
        fr: 'Range les événements du premier au dernier, en glissant ou avec les flèches.',
        en: 'Put the events in order from first to last, by dragging or with the arrows.',
      },
      image: `${IMG}/adhan-dawn.png`,
      imageAlt: {
        ar: 'أسطحُ بيوتٍ طينية عند الفجر تحت سماءٍ وردية',
        fr: 'Des toits de maisons en terre à l’aube sous un ciel rose',
        en: 'Mud-brick rooftops at dawn under a rose sky',
      },
      items: [
        { id: 'i1', label: { ar: 'المسلمون يعملون لتوفير معيشتهم ويتوجّهون إلى الصلاة كلّما حان وقتها', fr: 'Les musulmans travaillent pour vivre et vont prier à chaque heure de prière', en: 'The Muslims work for their living and go to pray whenever it is time' } },
        { id: 'i2', label: { ar: 'كثيرٌ منهم يشتكون أنّهم لا يعرفون وقت دخول الصلاة', fr: 'Beaucoup se plaignent de ne pas savoir quand commence la prière', en: 'Many complain they do not know when prayer time begins' } },
        { id: 'i3', label: { ar: 'عمر بن الخطّاب وعبد الله بن زيد رضي الله عنهما يريان في المنام مناديًا بكلمات الأذان', fr: '‘Umar ibn al-Khaṭṭāb et ‘Abd Allāh ibn Zayd voient en songe un crieur disant l’adhān', en: '‘Umar ibn al-Khattab and ‘Abdullah ibn Zayd see a caller with the adhan in a dream' } },
        { id: 'i4', label: { ar: 'يُخبران رسول الله ﷺ فيُسرّ بذلك', fr: 'Ils l’annoncent au Messager ﷺ, qui s’en réjouit', en: 'They tell God’s Messenger ﷺ, who is pleased' } },
        { id: 'i5', label: { ar: 'يختار الرسول ﷺ بلال بن رباح ليُنادي على الناس', fr: 'Le Prophète ﷺ choisit Bilāl ibn Rabāḥ pour appeler les gens', en: 'The Prophet ﷺ chooses Bilal ibn Rabah to call the people' } },
        { id: 'i6', label: { ar: 'يرتفع أوّل أذانٍ في المدينة', fr: 'Le premier adhān retentit à Médine', en: 'The first adhan rings out in Madina' } },
      ],
      explanation: {
        ar: 'من حاجةٍ حقيقيّة — معرفة وقت الصلاة — إلى رؤيا، ثمّ موافقة الرسول ﷺ، ثمّ صوت بلال: هكذا صار الأذان يُعلن دخول وقت الصلاة.',
        fr: 'D’un vrai besoin — connaître l’heure de la prière — à un songe, puis l’accord du Prophète ﷺ, puis la voix de Bilāl : ainsi l’adhān vint annoncer l’heure de la prière.',
        en: 'From a real need — knowing prayer time — to a dream, then the Prophet’s ﷺ approval, then Bilal’s voice: this is how the adhan came to announce prayer time.',
      },
    },

    // 13 — Reading: vigilance (slide 9)
    {
      kind: 'reading',
      id: 'reading-vigilance',
      title: { ar: 'اقرأ: اليقظة قائمة في المدينة', fr: 'Lis : la vigilance à Médine', en: 'Read: Madina stays watchful' },
      intro: {
        ar: 'هل انتهى الخطر بعد الهجرة؟ اقرأ، ثمّ زِن الأمور في الميزان.',
        fr: 'Le danger prit-il fin après l’émigration ? Lis, puis pèse les faits sur la balance.',
        en: 'Did the danger end after the migration? Read, then weigh things on the scale.',
      },
      image: `${IMG}/night-watch.png`,
      imageAlt: {
        ar: 'سورٌ طينيّ وبوّابةٌ خشبية في الليل تحت بدرٍ ساطع، ومشاعلُ مشتعلة، ورماحٌ مسنودة إلى السور، ونخيلٌ حولها',
        fr: 'Un rempart de terre et une porte en bois la nuit sous une pleine lune, des torches allumées, des lances appuyées au mur et des palmiers autour',
        en: 'A mud-brick wall and wooden gate at night under a full moon, burning torches, spears leaning on the wall and palms around',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'أمانٌ… وخطرٌ باقٍ', fr: 'La sécurité… et un danger qui demeure', en: 'Safety… and a lingering danger' },
          text: {
            ar: 'رغم انتقال المهاجرين إلى المدينة وتخلّصهم من أذى قريش وشعورهم بالأمان، إلّا أنّ خطر قريش بقي يترصّد المسلمين.',
            fr: 'Bien que les Émigrés se fussent installés à Médine, libérés des persécutions de Quraysh et en sécurité, le danger de Quraysh continuait de guetter les musulmans.',
            en: 'Although the Emigrants had moved to Madina, escaped Quraysh’s harm and felt safe, the danger from Quraysh still lay in wait for the Muslims.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'ليالٍ ساهرة', fr: 'Des nuits de veille', en: 'Sleepless nights' },
          text: {
            ar: 'كان المشركون يتوعّدون المسلمين ويهدّدونهم بإرسال جيشٍ إلى المدينة، فكان المسلمون يُدركون هذه المخاطر، فلا يبيتون إلّا ساهرين يحرسون المدينة ويحرسون رسول الله ﷺ.',
            fr: 'Les polythéistes menaçaient les musulmans d’envoyer une armée contre Médine ; conscients de ces dangers, les musulmans passaient leurs nuits à veiller, gardant la ville et gardant le Messager ﷺ.',
            en: 'The polytheists threatened the Muslims with sending an army against Madina; aware of these dangers, the Muslims spent their nights awake, guarding the town and guarding God’s Messenger ﷺ.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'عيونٌ في الداخل والخارج', fr: 'Des yeux dedans et dehors', en: 'Eyes inside and out' },
          text: {
            ar: 'كان الرسول ﷺ وأصحابه يُراقبون الأوضاع داخل المدينة وخارجها، وساعدهم في ذلك دستور المدينة الذي تعاهدوا عليه، رغم ما يترصّده الأعداء من فرصةٍ للغدر بالمسلمين.',
            fr: 'Le Prophète ﷺ et ses compagnons surveillaient la situation à l’intérieur et à l’extérieur de Médine, aidés en cela par la charte de Médine sur laquelle ils s’étaient engagés, malgré les ennemis qui guettaient une occasion de trahir les musulmans.',
            en: 'The Prophet ﷺ and his companions watched the situation inside and outside Madina, helped in this by the Charter of Madina they had pledged to, even as enemies waited for a chance to betray the Muslims.',
          },
        },
      ],
    },

    // 14 — Balance: threats vs. protection (slide 9)
    {
      kind: 'balance',
      id: 'vigilance-balance',
      title: { ar: 'ميزان اليقظة', fr: 'La balance de la vigilance', en: 'The scale of vigilance' },
      intro: {
        ar: 'ضع كلّ معلومةٍ على كفّتها: ما كان يهدّد المدينة، وما حماها.',
        fr: 'Pose chaque fait sur son plateau : ce qui menaçait Médine, et ce qui la protégeait.',
        en: 'Place each fact on its pan: what threatened Madina, and what protected it.',
      },
      left: { ar: 'ما يهدّد المدينة', fr: 'Ce qui menaçait Médine', en: 'What threatened Madina' },
      right: { ar: 'ما حمى المدينة', fr: 'Ce qui protégeait Médine', en: 'What protected Madina' },
      weights: [
        {
          id: 'w1',
          text: { ar: 'خطر قريش بقي يترصّد المسلمين', fr: 'Le danger de Quraysh guettait toujours les musulmans', en: 'The danger from Quraysh still lay in wait' },
          side: 'left',
          explanation: { ar: 'نعم، رغم الهجرة بقي هذا الخطر.', fr: 'Oui, malgré l’émigration ce danger demeurait.', en: 'Yes — despite the migration, this danger remained.' },
        },
        {
          id: 'w2',
          text: { ar: 'المشركون يهدّدون بإرسال جيشٍ إلى المدينة', fr: 'Les polythéistes menaçaient d’envoyer une armée', en: 'The polytheists threatened to send an army' },
          side: 'left',
          explanation: { ar: 'صحيح، كانوا يتوعّدون المسلمين.', fr: 'Exact, ils menaçaient les musulmans.', en: 'Right — they kept threatening the Muslims.' },
        },
        {
          id: 'w3',
          text: { ar: 'الأعداء يترصّدون فرصةً للغدر بالمسلمين', fr: 'Les ennemis guettaient une occasion de trahir', en: 'Enemies waited for a chance to betray' },
          side: 'left',
          explanation: { ar: 'نعم، هذا تهديدٌ آخر.', fr: 'Oui, c’est une autre menace.', en: 'Yes — another threat.' },
        },
        {
          id: 'w4',
          text: { ar: 'المسلمون يبيتون ساهرين يحرسون المدينة', fr: 'Les musulmans veillaient la nuit pour garder la ville', en: 'The Muslims stayed up at night guarding the town' },
          side: 'right',
          explanation: { ar: 'هذه يقظةٌ تحمي المدينة.', fr: 'C’est une vigilance qui protège la ville.', en: 'This is vigilance that protects the town.' },
        },
        {
          id: 'w5',
          text: { ar: 'يحرسون رسول الله ﷺ', fr: 'Ils gardaient le Messager ﷺ', en: 'They guarded God’s Messenger ﷺ' },
          side: 'right',
          explanation: { ar: 'نعم، كانت الحراسة له وللمدينة.', fr: 'Oui, la garde était pour lui et pour la ville.', en: 'Yes — the guard was for him and for the town.' },
        },
        {
          id: 'w6',
          text: { ar: 'مراقبة الأوضاع داخل المدينة وخارجها', fr: 'Surveiller la situation dedans et dehors', en: 'Watching the situation inside and outside' },
          side: 'right',
          explanation: { ar: 'هكذا كان الرسول ﷺ وأصحابه يحمونها.', fr: 'C’est ainsi que le Prophète ﷺ et ses compagnons la protégeaient.', en: 'This is how the Prophet ﷺ and his companions protected it.' },
        },
        {
          id: 'w7',
          text: { ar: 'دستور المدينة الذي تعاهدوا عليه', fr: 'La charte de Médine sur laquelle ils s’étaient engagés', en: 'The Charter of Madina they had pledged to' },
          side: 'right',
          explanation: { ar: 'نعم، ساعدهم الدستور: فيه العون على الأعداء إن هاجموا المدينة.', fr: 'Oui, la charte les aidait : elle prévoyait l’entraide contre les ennemis.', en: 'Yes — the charter helped: it included standing together against attackers.' },
        },
      ],
    },

    // 15 — Blitz
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
          text: { ar: 'بنى الرسول ﷺ بيته أوّلًا ثمّ المسجد.', fr: 'Le Prophète ﷺ bâtit d’abord sa maison, puis la mosquée.', en: 'The Prophet ﷺ built his house first, then the mosque.' },
          answer: false,
          explanation: { ar: 'خطأ، اختار مكان المسجد أوّلًا ثمّ بنى بيته بجواره.', fr: 'Faux, il choisit d’abord la mosquée, puis bâtit sa maison à côté.', en: 'False — he chose the mosque first, then built his house beside it.' },
        },
        {
          id: 'b2',
          text: { ar: 'آخى الرسول ﷺ بين كلّ أنصاريٍّ ونزيله من المهاجرين.', fr: 'Le Prophète ﷺ fit frères chaque Ansārī et l’Émigré qu’il hébergeait.', en: 'The Prophet ﷺ made each Ansari and the Emigrant he hosted brothers.' },
          answer: true,
          explanation: { ar: 'صحيح، وهذه هي المؤاخاة.', fr: 'Vrai, c’est la fraternisation.', en: 'True — this is the brotherhood.' },
        },
        {
          id: 'b3',
          text: { ar: 'كان في المدينة المسلمون فقط.', fr: 'Il n’y avait que des musulmans à Médine.', en: 'Only Muslims lived in Madina.' },
          answer: false,
          explanation: { ar: 'خطأ، كان فيها المسلمون والمشركون واليهود.', fr: 'Faux, il y avait des musulmans, des polythéistes et des juifs.', en: 'False — Muslims, polytheists and Jews lived there.' },
        },
        {
          id: 'b4',
          text: { ar: 'كانت قبلة الأنبياء قبل الرسول ﷺ المسجد الأقصى.', fr: 'La qibla des prophètes avant le Prophète ﷺ était la mosquée al-Aqṣā.', en: 'The qibla of the prophets before the Prophet ﷺ was al-Aqsa Mosque.' },
          answer: true,
          explanation: { ar: 'صحيح، ثمّ أمر الله بالتحوّل إلى الكعبة.', fr: 'Vrai, puis Dieu ordonna de se tourner vers la Ka‘ba.', en: 'True — then God commanded turning toward the Kaaba.' },
        },
        {
          id: 'b5',
          text: { ar: 'انتظرت الجماعة في مسجد القبلتين حتى انتهت الصلاة ثمّ غيّرت قبلتها.', fr: 'Le groupe de la mosquée des deux qiblas attendit la fin de la prière pour changer de qibla.', en: 'The group in the Mosque of the Two Qiblas waited until the prayer ended to change direction.' },
          answer: false,
          explanation: { ar: 'خطأ، حوّلوا قبلتهم أثناء الصلاة.', fr: 'Faux, ils changèrent de direction pendant la prière.', en: 'False — they turned during the prayer itself.' },
        },
        {
          id: 'b6',
          text: { ar: 'رفع بلال بن رباح رضي الله عنه أوّل أذانٍ في المدينة.', fr: 'Bilāl ibn Rabāḥ lança le premier adhān à Médine.', en: 'Bilal ibn Rabah raised the first adhan in Madina.' },
          answer: true,
          explanation: { ar: 'صحيح، اختاره الرسول ﷺ لذلك.', fr: 'Vrai, le Prophète ﷺ le choisit pour cela.', en: 'True — the Prophet ﷺ chose him for it.' },
        },
      ],
    },

    // 16 — Quiz (slides 6 and 10: «أجيب»)
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'أجيب', fr: 'Je réponds', en: 'I answer' },
      intro: {
        ar: 'أسئلة الدرس نفسها، بأشكالٍ مختلفة.',
        fr: 'Les questions de la leçon elle-même, sous différentes formes.',
        en: 'The lesson’s own questions, in different forms.',
      },
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: { ar: 'ما هو أوّل عملٍ قام به الرسول ﷺ عند دخوله المدينة؟', fr: 'Quelle fut la première action du Prophète ﷺ en entrant à Médine ?', en: 'What was the Prophet’s ﷺ first action on entering Madina?' },
          options: [
            { id: 'a', label: { ar: 'بناء المسجد', fr: 'Bâtir la mosquée', en: 'Building the mosque' } },
            { id: 'b', label: { ar: 'بناء بيته', fr: 'Bâtir sa maison', en: 'Building his house' } },
            { id: 'c', label: { ar: 'إرسال جيشٍ إلى مكّة', fr: 'Envoyer une armée à La Mecque', en: 'Sending an army to Makkah' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'اهتمّ أوّل الأمر ببناء المسجد لأنّه منارةٌ للمسلمين، ثمّ بنى بيته بجواره.',
            fr: 'Il s’occupa d’abord de la mosquée, phare des musulmans, puis bâtit sa maison à côté.',
            en: 'He first saw to the mosque, a beacon for the Muslims, then built his house beside it.',
          },
        },
        {
          id: 'q2',
          type: 'mcq',
          question: { ar: 'كيف تعامل الرسول ﷺ مع غير المسلمين في المدينة؟', fr: 'Comment le Prophète ﷺ traita-t-il les non-musulmans à Médine ?', en: 'How did the Prophet ﷺ deal with non-Muslims in Madina?' },
          options: [
            { id: 'a', label: { ar: 'أقرّ للجميع دينه وأمواله، ووثّق ذلك في صحيفة المدينة', fr: 'Il reconnut à chacun sa religion et ses biens, et le consigna dans la charte', en: 'He confirmed everyone’s religion and property, and recorded it in the Charter' } },
            { id: 'b', label: { ar: 'أخرجهم من المدينة', fr: 'Il les chassa de Médine', en: 'He expelled them from Madina' } },
            { id: 'c', label: { ar: 'لم يتعامل معهم', fr: 'Il n’eut aucun rapport avec eux', en: 'He had no dealings with them' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'أقرّ أن يعرف كلٌّ حقوق الآخر وحدوده، فعمّت الطمأنينة والسلام.',
            fr: 'Il établit que chacun connaisse les droits et limites de l’autre, et la paix se répandit.',
            en: 'He established that each know the other’s rights and limits, and peace spread.',
          },
        },
        {
          id: 'q3',
          type: 'truefalse',
          question: { ar: 'استجاب المسلمون لتغيير القبلة فورًا، حتّى إنّ جماعةً حوّلت قبلتها وهي تصلّي.', fr: 'Les musulmans obéirent aussitôt au changement de qibla : un groupe se tourna même en pleine prière.', en: 'The Muslims responded to the change of qibla at once — one group even turned during prayer.' },
          answer: true,
          explanation: {
            ar: 'صحيح، ولذلك سُمّي مسجدهم مسجد القبلتين.',
            fr: 'Vrai, c’est pourquoi leur mosquée fut appelée la mosquée des deux qiblas.',
            en: 'True — that is why their mosque was named the Mosque of the Two Qiblas.',
          },
        },
        {
          id: 'q4',
          type: 'matching',
          question: { ar: 'صِل كلّ سؤالٍ بجوابه', fr: 'Relie chaque question à sa réponse', en: 'Match each question to its answer' },
          pairs: [
            { id: 'p1', left: { ar: 'كيف استقبل الأنصار المهاجرين؟', fr: 'Comment les Ansār reçurent-ils les Émigrés ?', en: 'How did the Ansar receive the Emigrants?' }, right: { ar: 'تسابقوا إلى استضافتهم وإمدادهم بما يحتاجون', fr: 'Ils rivalisèrent pour les héberger et les pourvoir', en: 'They raced to host and provide for them' } },
            { id: 'p2', left: { ar: 'لماذا كان المسلمون يحرسون المدينة؟', fr: 'Pourquoi les musulmans gardaient-ils Médine ?', en: 'Why did the Muslims guard Madina?' }, right: { ar: 'لأنّ المشركين هدّدوا بإرسال جيشٍ إليها', fr: 'Parce que les polythéistes menaçaient d’envoyer une armée', en: 'Because the polytheists threatened to send an army' } },
            { id: 'p3', left: { ar: 'لماذا يُرفع الأذان في المساجد؟', fr: 'Pourquoi lance-t-on l’adhān dans les mosquées ?', en: 'Why is the adhan raised in the mosques?' }, right: { ar: 'ليعرف الناس دخول وقت الصلاة', fr: 'Pour que les gens sachent que l’heure de la prière est venue', en: 'So people know prayer time has come' } },
          ],
          explanation: {
            ar: 'هذه أسئلة «أجيب» في الدرس، وأجوبتها في النصوص التي قرأتها.',
            fr: 'Ce sont les questions « Je réponds » de la leçon ; leurs réponses sont dans les textes lus.',
            en: 'These are the lesson’s "I answer" questions; their answers are in the texts you read.',
          },
        },
        {
          id: 'q5',
          type: 'ordering',
          question: { ar: 'رتّب هذه الأحداث كما وردت في الدرس', fr: 'Range ces événements dans l’ordre de la leçon', en: 'Put these events in the lesson’s order' },
          items: [
            { id: 'o1', label: { ar: 'وصول الرسول ﷺ إلى المدينة', fr: 'L’arrivée du Prophète ﷺ à Médine', en: 'The Prophet ﷺ reaches Madina' } },
            { id: 'o2', label: { ar: 'اختيار مكان المسجد', fr: 'Le choix de l’emplacement de la mosquée', en: 'Choosing the mosque’s site' } },
            { id: 'o3', label: { ar: 'بناء بيت الرسول ﷺ بجوار المسجد', fr: 'La maison du Prophète ﷺ bâtie à côté', en: 'Building his house beside it' } },
          ],
          explanation: {
            ar: 'وصل الرسول ﷺ، فأشار باختيار مكان المسجد أوّلًا، ثمّ بنى بيته بجواره.',
            fr: 'Le Prophète ﷺ arriva, demanda de choisir d’abord l’emplacement de la mosquée, puis bâtit sa maison à côté.',
            en: 'The Prophet ﷺ arrived, asked that the mosque’s site be chosen first, then built his house beside it.',
          },
        },
      ],
    },

    // 17 — Values
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'ماذا نتعلّم من هذا الدرس؟', fr: 'Que retenir de cette leçon ?', en: 'What do we learn from this lesson?' },
      prompt: {
        ar: 'تنافس الأنصار في استضافة الرسول ﷺ في منازلهم. بماذا أشار عليهم؟',
        fr: 'Les Ansār rivalisaient pour recevoir le Prophète ﷺ chez eux. Que leur indiqua-t-il ?',
        en: 'The Ansar competed to host the Prophet ﷺ in their homes. What did he direct them to do?',
      },
      choices: [
        {
          id: 'masjid',
          isCorrect: true,
          label: { ar: 'اختاروا مكان المسجد أوّلًا', fr: 'Choisissez d’abord l’emplacement de la mosquée', en: 'Choose the mosque’s site first' },
          feedback: { ar: 'صحيح — قدّم ما يجمع المسلمين على مصلحته الخاصّة.', fr: 'Exact — il fit passer ce qui réunit les musulmans avant son intérêt propre.', en: 'Correct — he put what unites the Muslims before his own needs.' },
        },
        {
          id: 'house',
          isCorrect: false,
          label: { ar: 'ابنوا لي بيتًا أوّلًا', fr: 'Bâtissez-moi d’abord une maison', en: 'Build me a house first' },
          feedback: { ar: 'لا، البيت جاء بعد المسجد وبجواره.', fr: 'Non, la maison vint après la mosquée, à côté d’elle.', en: 'No — the house came after the mosque, beside it.' },
        },
        {
          id: 'lot',
          isCorrect: false,
          label: { ar: 'لا أنزل عند أحد', fr: 'Je ne logerai chez personne', en: 'I will stay with no one' },
          feedback: { ar: 'لا، لم يرفضهم، بل وجّههم إلى الأهمّ أوّلًا.', fr: 'Non, il ne les repoussa pas : il les orienta vers l’essentiel d’abord.', en: 'No — he did not turn them away; he pointed them to what mattered most first.' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من المدينة — اقلب كلّ بطاقة', fr: 'Des valeurs de Médine — retourne chaque carte', en: 'Values from Madina — flip each card' },
      values: [
        {
          id: 'brotherhood',
          value: { ar: 'الأخوّة والتعاون', fr: 'La fraternité et l’entraide', en: 'Brotherhood and cooperation' },
          evidence: { ar: 'آخى الرسول ﷺ بين المهاجرين والأنصار، فلا عداوة ولا ضعف.', fr: 'Le Prophète ﷺ fit frères Émigrés et Ansār : ni hostilité ni faiblesse.', en: 'The Prophet ﷺ made Emigrants and Ansar brothers: no enmity, no weakness.' },
        },
        {
          id: 'generosity',
          value: { ar: 'الكرم وحسن الاستقبال', fr: 'La générosité et l’hospitalité', en: 'Generosity and hospitality' },
          evidence: { ar: 'تسابق الأنصار إلى استضافة المهاجرين وإمدادهم بكلّ ما يحتاجونه.', fr: 'Les Ansār rivalisèrent pour héberger les Émigrés et leur donner tout le nécessaire.', en: 'The Ansar raced to host the Emigrants and give them all they needed.' },
        },
        {
          id: 'justice',
          value: { ar: 'العدل والتعايش', fr: 'La justice et la coexistence', en: 'Justice and coexistence' },
          evidence: { ar: 'أقرّ الرسول ﷺ لكلّ ساكني المدينة دينهم وأموالهم في صحيفة المدينة.', fr: 'Le Prophète ﷺ reconnut à tous les habitants de Médine leur religion et leurs biens.', en: 'The Prophet ﷺ confirmed all Madina’s residents’ religion and property in the Charter.' },
        },
        {
          id: 'obedience',
          value: { ar: 'سرعة الاستجابة لأمر الله', fr: 'Répondre vite à l’ordre de Dieu', en: 'Answering God’s command quickly' },
          evidence: { ar: 'حوّلت جماعة مسجد القبلتين قبلتها وهي تصلّي.', fr: 'Le groupe de la mosquée des deux qiblas se tourna en pleine prière.', en: 'The group in the Mosque of the Two Qiblas turned while still praying.' },
        },
        {
          id: 'vigilance',
          value: { ar: 'اليقظة والمسؤولية', fr: 'La vigilance et la responsabilité', en: 'Vigilance and responsibility' },
          evidence: { ar: 'كان المسلمون يبيتون ساهرين يحرسون المدينة والرسول ﷺ.', fr: 'Les musulmans veillaient la nuit pour garder la ville et le Prophète ﷺ.', en: 'The Muslims stayed awake at night guarding the town and the Prophet ﷺ.' },
        },
      ],
    },

    // 18 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'في المدينة بدأ الرسول ﷺ بالمسجد منارةً للمسلمين، ثمّ آخى بين المهاجرين والأنصار، ووضع صحيفة المدينة لكلّ ساكنيها، فعمّ السلام وازدهرت حياة المسلمين، مع بقاء اليقظة في وجه خطر قريش.',
        fr: 'À Médine, le Prophète ﷺ commença par la mosquée, phare des musulmans, puis fit frères Émigrés et Ansār et établit la charte de Médine pour tous ses habitants : la paix se répandit et la vie des musulmans prospéra, tout en restant vigilants face au danger de Quraysh.',
        en: 'In Madina the Prophet ﷺ began with the mosque, a beacon for the Muslims, then made the Emigrants and Ansar brothers and set the Charter of Madina for all its residents: peace spread and the Muslims’ life flourished, while they stayed watchful against Quraysh’s danger.',
      },
      learned: [
        {
          ar: 'وصل الرسول ﷺ إلى المدينة يوم 12 ربيع الأوّل من السنة الرابعة عشرة للبعثة، وبدأ ببناء المسجد ثمّ بنى بيته بجواره.',
          fr: 'Le Prophète ﷺ arriva à Médine le 12 rabī‘ al-awwal de la quatorzième année de la mission ; il commença par la mosquée, puis bâtit sa maison à côté.',
          en: 'The Prophet ﷺ reached Madina on 12 Rabi‘ al-Awwal of the fourteenth year of the mission; he began with the mosque, then built his house beside it.',
        },
        {
          ar: 'آخى الرسول ﷺ بين كلّ أنصاريٍّ ونزيله من المهاجرين، فاتّحد المسلمون.',
          fr: 'Le Prophète ﷺ fit frères chaque Ansārī et son hôte émigré, et les musulmans s’unirent.',
          en: 'The Prophet ﷺ made each Ansari and his Emigrant guest brothers, and the Muslims were united.',
        },
        {
          ar: 'صحيفة المدينة أقرّت لكلّ ساكنيها دينهم وأموالهم وحقوقهم، والعون على من يهاجم المدينة.',
          fr: 'La charte de Médine reconnut à tous ses habitants leur religion, leurs biens et leurs droits, et l’entraide contre tout agresseur.',
          en: 'The Charter of Madina confirmed all its residents’ religion, property and rights, and mutual help against any attacker.',
        },
        {
          ar: 'تحوّلت القبلة من المسجد الأقصى إلى الكعبة، ورفع بلال بن رباح رضي الله عنه أوّل أذانٍ في المدينة.',
          fr: 'La qibla passa de la mosquée al-Aqṣā à la Ka‘ba, et Bilāl ibn Rabāḥ lança le premier adhān à Médine.',
          en: 'The qibla turned from al-Aqsa Mosque to the Kaaba, and Bilal ibn Rabah raised the first adhan in Madina.',
        },
        {
          ar: 'بقي خطر قريش، فكان المسلمون يحرسون المدينة والرسول ﷺ ويراقبون الأوضاع داخلها وخارجها.',
          fr: 'Le danger de Quraysh demeurait : les musulmans gardaient la ville et le Prophète ﷺ et surveillaient la situation dedans et dehors.',
          en: 'Quraysh’s danger remained: the Muslims guarded the town and the Prophet ﷺ and watched the situation inside and out.',
        },
      ],
    },
  ],
}
