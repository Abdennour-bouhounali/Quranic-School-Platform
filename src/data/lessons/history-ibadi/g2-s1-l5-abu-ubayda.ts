import type { Lesson } from '../../types'

// Source: Ibadite History textbook (Other ressources/Ibadite_History_S3.pdf), "الدرس الثامن عشر: إمامة أبي عبيدة مسلم بن أبي كريمة", pages 23–30 (slides 1–8).
//   Slide 2 — الإشكالية: حرص الأئمّة على تبليغ الأمانة بتعليم الأجيال وتفقيه الناس أمر دينهم وإيصاله إلى الآفاق، خاصّةً مع توسّع الفتوحات، حتى يؤدّي الفتح
//             مهمّته بأن يحلّ في البلاد دعاةٌ يبلغون بنور الإسلام قلوب العباد؛ فاجتهدوا على ألّا يبقى العلم بالدين وأحكام الشرع محصورًا في مجالس الفقهاء
//             بين حواضر العراق والحجاز. ما هي أهمّ وسائل تبليغ أمانة الدين؟
//   Slide 3 — تعلّم الإمام أبي عبيدة: أخذ العلم عن جابر بن زيد وصحار العبدي، وأدرك جملةً من الصحابة أهمّهم عبد الله بن عبّاس وعبد الله بن عمر وأبو سعيد
//             الخدري وأنس بن مالك، فيُعدّ من التابعين. ألقى الحجّاج والي العراق بأهل الفضل والعلم في السجن لأسبابٍ أهمّها إنكارهم لظلم الحكّام والولاة،
//             ومنهم أبو عبيدة الذي لم يخرج إلا بعد موت الحجّاج سنة 95 هـ. اعتمد منهج جابر في العلم والعمل ولازم حلقاته حتى خلفه في رئاسة الحلقة،
//             ويُعدّ الإمام الثاني لمذهب أهل الدعوة، وأبقى الإمامة كتمانًا من جور الأمويين والعبّاسيين بعدهم.
//             بطاقة الإمام: فارسيّ ينتمي إلى بني تميم بالولاء، مولى لعروة بن أدية؛ وُلد حوالي 50 هـ؛ تعلّم في البصرة عند كبار الصحابة والتابعين وأهمّهم
//             ابن عبّاس وجابر بن زيد؛ الإمام الثاني للمذهب بعد جابر؛ أعماله: أنشأ مدرسةً خاصّة بطلّاب العلم إلى جانب حلق العلم، كوّن الدعاة الذين نشروا
//             الدين والعلم، رتّب الأحاديث ورسخ في العقيدة والفقه وبلّغها؛ آثاره: علمٌ غزير وآراء في الفقه والتفسير في مؤلّفات المذهب، رسالة مخطوطة في
//             الزكاة ورسالة إلى أهل المغرب؛ وفاته حوالي 145 هـ.
//   Slide 4 — التدريس في السرداب: اهتمّ بالدعوة وبثّ الروح الإسلامية والاستقامة ومنحها كلّ جهده، وبدأ بتنظيم الدعاة أوّلًا فكوّن جيلًا متعاونًا محبًّا
//             للخير؛ آوى طلبة العلم من كلّ الأقطار ودرّسهم ورعاهم بنفسه مدّة وجودهم في البصرة، وكان يستعدّ لمواسم الحجّ حيث يوجّه الناس ويعلّمهم ويأمر
//             بالمعروف وينهى عن المنكر. ولمّا كانت رقابة الأمويين شديدة اتّخذ مدرسته في سردابٍ خفيّ في البصرة ووضع في مدخله سلاسل، إذا سُمعت صلصلتها
//             علموا أنّ غريبًا يريد الدخول فأوقفوا التدريس واشتغلوا بصنع القفاف، فإذا غادر وأمنوا عيون الظلمة رجعوا من معمل القفاف إلى معمل العقول؛
//             فتخرّج من سردابه النجباء كالربيع بن حبيب وحملة العلم إلى المشرق وإلى المغرب الذين كان لهم الفضل في نشر الفقه والعلم في البلاد البعيدة.
//   Slide 5 — من سرداب إلى معهد عالمي: انتقاء الطلبة من كلّ الجهات ممّن تجتمع فيهم مواصفات الداعية الذي يضحّي من أجل أمانة الدين، رعايةٌ خاصّة وكفالة
//             مأكلهم ومقامهم، ليكون حامل العلم إلى المناطق البعيدة ابن تلك البيئة العالم بأهلها وأحوالها فيفهمه الناس ويقبلون على الإسلام.
//             قسّم طلبته على مراتب لكلٍّ مجلسها: مجلس الشيوخ (كبار المذهب: شؤون أهل الدعوة، ما يعوق إقامة الدين وتبليغه، ما يحتاجه حملة العلم)،
//             حلقة حملة العلم أو الدعاة (طلبة من عدّة أقطار اختيروا لمهامّ التعليم والإرشاد في بلاد الفتوحات)، مجالس العامّة والمبتدئين.
//   Slide 6 — فقهه وعلمه: فقهٌ وعلمٌ غزير، أقواله وفتاويه وآراؤه المفصّلة في كتب تلامذته ومن بعدهم، لم يكتب الكتب لاشتغاله بالتعليم؛ وصلت إلينا رسالة
//             في الزكاة أجاب فيها أهل المغرب ورسائل أخرى جُمعت في كتابين؛ مسند الربيع حفظه الربيع برواية أبي عبيدة. كان حذرًا لا ينقل الحديث إلا عن
//             الثقات، واشتهر قوله: «لا ينبغي أن تأخذ العلم من رجلٍ مبتدع يدعو إلى بدعته، ولا من سفيهٍ يدعو إلى سفهه، ولا ممّن يكذب وإن كان يصدق في
//             فتواه، ولا ممّن لا يفرز مذهبه من مذهب غيره». خطّ الزمن: إمامة جابر 61–93 هـ، إمامة أبي عبيدة 93–145 هـ.
//   Slide 7 — الملخّص: حيّ بين 50–145 هـ، الإمام الثاني لأهل الدعوة والاستقامة؛ أخذ عن بعض الصحابة وجابر وكبار التابعين؛ مكث 40 سنة يتعلّم ثمّ 40 سنة
//             معلّمًا؛ اشتغل بصنع القفاف ليكسب الرزق ويكفل طلبته؛ فتح معهدًا آوى فيه طلبة العلم من كلّ الآفاق حتى يعلّموا الناس دينهم في بلادهم؛
//             له من الكتب «مسائل أبي عبيدة» و«كتاب في الزكاة» و«رسائل أبي عبيدة»؛ أحاديث كثيرة رواها عن جابر هي في مسند الربيع؛ تخرّج من معهده
//             الربيع بن حبيب صاحب المسند، وعبد الله بن يحيى (طالب الحقّ)، وعبد الرحمن بن رستم مؤسّس الدولة الرستمية.
// Every fact below is taken from those slides; nothing is added from outside them. Durations (about 95 years of life, 32 and 52 years of imamate)
// are simple subtractions of the slides' own dates. The slide title's grammar («إمامة أبو عبيدة») is corrected to «إمامة أبي عبيدة».
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): the story is told through the cellar, chains, baskets, books and caravans.

const IMG = '/images/lessons/abu-ubayda'

export const abuUbayda: Lesson = {
  id: 'history-ibadi-g2-s1-l5',
  gradeId: 'history-ibadi-g2',
  moduleId: 'history-ibadi-g2',
  semesterId: 'history-ibadi-g2-s1',
  order: 5,
  status: 'published',
  estimatedMinutes: 40,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'بابٌ خشبيّ مقوّس في جدارٍ من الطين، حوله قفافٌ من سعف النخيل ومصباحٌ مضيء، وخلفه نهرٌ ونخيلٌ وبيوتٌ طينية عند الغروب',
    fr: 'Une porte de bois en arc dans un mur de terre, entourée de paniers en feuilles de palmier et d’une lampe allumée ; derrière, un fleuve, des palmiers et des maisons de terre au couchant',
    en: 'An arched wooden door in a mud-brick wall, with palm-leaf baskets and a glowing lamp around it; behind, a river, palms and mud-brick houses at dusk',
  },
  title: {
    ar: 'إمامة أبي عبيدة مسلم بن أبي كريمة',
    fr: 'L’imamat d’Abū ‘Ubayda Muslim ibn Abī Karīma',
    en: 'The Imamate of Abu ‘Ubayda Muslim ibn Abi Karima',
  },
  description: {
    ar: 'صانعُ قفافٍ في البصرة… يُخفي تحت دكّانه مدرسة! انزل إلى السرداب السرّي، واسمع صلصلة السلاسل، واكتشف كيف خرّج الإمام أبو عبيدة حملة العلم إلى المشرق والمغرب.',
    fr: 'Un vannier de Bassora… qui cache une école sous son atelier ! Descends dans la cave secrète, écoute le cliquetis des chaînes et découvre comment l’imam Abū ‘Ubayda forma les porteurs du savoir vers l’Orient et le Maghreb.',
    en: 'A basket-weaver in Basra… hiding a school under his workshop! Go down into the secret cellar, hear the chains rattle, and discover how Imam Abu ‘Ubayda trained the bearers of knowledge for the East and the Maghreb.',
  },

  sections: [
    // 01 — Hero (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'بابٌ خشبيّ مقوّس في جدارٍ من الطين، حوله قفافٌ من سعف النخيل ومصباحٌ مضيء، وخلفه نهرٌ ونخيلٌ وبيوتٌ طينية عند الغروب',
        fr: 'Une porte de bois en arc dans un mur de terre, entourée de paniers en feuilles de palmier et d’une lampe allumée ; derrière, un fleuve, des palmiers et des maisons de terre au couchant',
        en: 'An arched wooden door in a mud-brick wall, with palm-leaf baskets and a glowing lamp around it; behind, a river, palms and mud-brick houses at dusk',
      },
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'ما هي أهمّ وسائل تبليغ أمانة الدين؟',
        fr: 'Quels sont les meilleurs moyens de transmettre le dépôt de la religion ?',
        en: 'What are the most important ways of passing on the trust of the religion?',
      },
      intro: {
        ar: 'حرص الأئمّة على تبليغ الأمانة بتعليم الأجيال وتفقيه الناس أمر دينهم وإيصاله إلى الآفاق، خاصّةً مع توسّع الفتوحات، حتى يؤدّي الفتح مهمّته بأن يحلّ في البلاد دعاةٌ يبلغون بنور الإسلام قلوب العباد. فاجتهدوا على ألّا يبقى العلم بالدين وأحكام الشرع محصورًا في مجالس الفقهاء بين حواضر العراق والحجاز.',
        fr: 'Les imams tenaient à transmettre le dépôt : instruire les générations, faire comprendre aux gens leur religion et la porter jusqu’aux horizons, surtout quand les conquêtes s’étendirent. Il fallait que chaque pays reçoive des prédicateurs qui fassent entrer la lumière de l’islam dans les cœurs. Ils s’efforcèrent donc que le savoir religieux et les règles de la Loi ne restent pas enfermés dans les cercles des juristes des grandes villes d’Irak et du Hedjaz.',
        en: 'The imams were keen to pass on the trust: teaching the generations, helping people understand their religion, and carrying it to the horizons — especially as the conquests spread — so that every land would receive callers who bring the light of Islam to people’s hearts. So they strove to keep knowledge of the religion and its rulings from staying locked inside the scholars’ circles in the cities of Iraq and the Hijaz.',
      },
    },

    // 02 — Mission map
    {
      kind: 'missions',
      id: 'missions',
      title: { ar: 'أربع مهمّات سرّية', fr: 'Quatre missions secrètes', en: 'Four secret missions' },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنتقل إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'من هو الإمام أبو عبيدة؟', fr: 'Qui est l’imam Abū ‘Ubayda ?', en: 'Who is Imam Abu ‘Ubayda?' },
          target: 'who-am-i',
          teaser: { ar: 'ثلاثة ألغاز… وثلاثة وجوه.', fr: 'Trois énigmes… trois personnages.', en: 'Three riddles… three characters.' },
        },
        {
          id: 'm2',
          question: { ar: 'ماذا يُخفي السرداب؟', fr: 'Que cache la cave ?', en: 'What is the cellar hiding?' },
          target: 'cellar-lantern',
          teaser: { ar: 'خذ المصباح وانزل بهدوء.', fr: 'Prends la lampe et descends sans bruit.', en: 'Take the lamp and go down quietly.' },
        },
        {
          id: 'm3',
          question: { ar: 'كيف صار السرداب معهدًا عالميًّا؟', fr: 'Comment la cave devint-elle un institut mondial ?', en: 'How did a cellar become a worldwide institute?' },
          target: 'reading-institute',
          teaser: { ar: 'طلبةٌ من كلّ الجهات.', fr: 'Des élèves venus de partout.', en: 'Students from every direction.' },
        },
        {
          id: 'm4',
          question: { ar: 'ممّن نأخذ العلم؟', fr: 'De qui prendre le savoir ?', en: 'Whom do we take knowledge from?' },
          target: 'fiqh-vault',
          teaser: { ar: 'الجواب مقفلٌ في خزنة!', fr: 'La réponse est enfermée dans un coffre !', en: 'The answer is locked in a vault!' },
        },
      ],
    },

    // 03 — Riddles: who am I? (slide 3 + card, slide 6 timeline)
    {
      kind: 'riddle',
      id: 'who-am-i',
      title: { ar: 'من أنا؟', fr: 'Qui suis-je ?', en: 'Who am I?' },
      intro: {
        ar: 'تنكشف الأدلّة واحدًا بعد واحد. كلّما عرفت الجواب بأدلّةٍ أقلّ، ربحت نجومًا أكثر!',
        fr: 'Les indices s’ouvrent un à un. Moins tu en utilises pour trouver, plus tu gagnes d’étoiles !',
        en: 'The clues open one by one. The fewer you need, the more stars you win!',
      },
      riddles: [
        {
          id: 'r-abu-ubayda',
          image: `${IMG}/baskets.png`,
          clues: [
            { ar: 'أصلي فارسيّ، وأنتمي إلى قبيلة بني تميم بالولاء.', fr: 'Je suis d’origine perse, rattaché à la tribu des Banū Tamīm par alliance (walā’).', en: 'I am of Persian origin, attached to the tribe of Banu Tamim by clientage (walā’).' },
            { ar: 'أنا مولًى لعروة بن أُدَيّة، ووُلدتُ نحو سنة 50 هـ.', fr: 'Je suis le client (mawlā) de ‘Urwa ibn Udayya, né vers l’an 50 H.', en: 'I am the client (mawlā) of ‘Urwa ibn Udayya, born about 50 AH.' },
            { ar: 'تعلّمتُ في البصرة عند كبار الصحابة والتابعين.', fr: 'J’ai étudié à Bassora auprès de grands Compagnons et Successeurs.', en: 'I studied in Basra with senior Companions and Successors.' },
            { ar: 'أنا الإمام الثاني لأهل الدعوة، بعد الإمام جابر.', fr: 'Je suis le deuxième imam des gens de l’Appel, après l’imam Jābir.', en: 'I am the second imam of the People of the Call, after Imam Jabir.' },
          ],
          options: [
            { id: 'ibn-ibad', label: { ar: 'عبد الله بن إباض', fr: '‘Abd Allāh ibn Ibāḍ', en: '‘Abdullah ibn Ibad' } },
            { id: 'abu-ubayda', label: { ar: 'أبو عبيدة مسلم', fr: 'Abū ‘Ubayda Muslim', en: 'Abu ‘Ubayda Muslim' } },
            { id: 'rabi', label: { ar: 'الربيع بن حبيب', fr: 'al-Rabī‘ ibn Ḥabīb', en: 'al-Rabi‘ ibn Habib' } },
            { id: 'abu-bilal', label: { ar: 'أبو بلال مرداس', fr: 'Abū Bilāl Mirdās', en: 'Abu Bilal Mirdas' } },
          ],
          correctId: 'abu-ubayda',
          reveal: {
            ar: 'إنّه الإمام أبو عبيدة مسلم بن أبي كريمة رحمه الله: فارسيّ الأصل، تميميّ بالولاء، مولًى لعروة بن أُدَيّة. وُلد نحو سنة 50 هـ وتوفّي نحو سنة 145 هـ، وهو الإمام الثاني للمذهب بعد الإمام جابر.',
            fr: 'C’est l’imam Abū ‘Ubayda Muslim ibn Abī Karīma (qu’Allah lui fasse miséricorde) : d’origine perse, rattaché aux Banū Tamīm, client de ‘Urwa ibn Udayya. Né vers 50 H, mort vers 145 H, il est le deuxième imam de l’école après l’imam Jābir.',
            en: 'He is Imam Abu ‘Ubayda Muslim ibn Abi Karima (may God have mercy on him): Persian by origin, a Tamimi by clientage, client of ‘Urwa ibn Udayya. Born about 50 AH and died about 145 AH, he is the school’s second imam after Imam Jabir.',
          },
        },
        {
          id: 'r-jabir',
          clues: [
            { ar: 'لي حلقةُ علمٍ في البصرة، وقد عرفتَني في درسٍ سابق.', fr: 'J’ai un cercle de savoir à Bassora ; tu m’as connu dans une leçon précédente.', en: 'I have a study circle in Basra; you met me in an earlier lesson.' },
            { ar: 'لازم أبو عبيدة حلقاتي، واعتمد منهجي في العلم والعمل، ثمّ خلفني في رئاسة الحلقة.', fr: 'Abū ‘Ubayda ne quittait pas mes cercles ; il adopta ma méthode dans le savoir et l’action, puis me succéda à leur tête.', en: 'Abu ‘Ubayda never left my circles; he adopted my method in knowledge and action, then succeeded me at their head.' },
            { ar: 'أنا إمام أهل الدعوة الأوّل، وكانت إمامتي من سنة 61 هـ إلى سنة 93 هـ.', fr: 'Je suis le premier imam des gens de l’Appel ; mon imamat dura de 61 H à 93 H.', en: 'I am the first imam of the People of the Call; my imamate lasted from 61 AH to 93 AH.' },
          ],
          options: [
            { id: 'suhar', label: { ar: 'صحار العبدي', fr: 'Ṣuḥār al-‘Abdī', en: 'Suhar al-‘Abdi' } },
            { id: 'ibn-abbas', label: { ar: 'عبد الله بن عبّاس', fr: '‘Abd Allāh ibn ‘Abbās', en: '‘Abdullah ibn ‘Abbas' } },
            { id: 'jabir', label: { ar: 'جابر بن زيد', fr: 'Jābir ibn Zayd', en: 'Jabir ibn Zayd' } },
            { id: 'ibn-ibad', label: { ar: 'عبد الله بن إباض', fr: '‘Abd Allāh ibn Ibāḍ', en: '‘Abdullah ibn Ibad' } },
          ],
          correctId: 'jabir',
          reveal: {
            ar: 'إنّه الإمام جابر بن زيد. أخذ عنه أبو عبيدة العلم، واعتمد منهجه في العلم والعمل، ولازم حلقاته حتى خلفه في رئاسة الحلقة سنة 93 هـ.',
            fr: 'C’est l’imam Jābir ibn Zayd. Abū ‘Ubayda reçut de lui le savoir, adopta sa méthode dans le savoir et l’action, et ne quitta pas ses cercles jusqu’à lui succéder à leur tête en 93 H.',
            en: 'He is Imam Jabir ibn Zayd. Abu ‘Ubayda took knowledge from him, adopted his method in knowledge and action, and stayed in his circles until he succeeded him at their head in 93 AH.',
          },
        },
        {
          id: 'r-hajjaj',
          image: `${IMG}/prison-door.png`,
          clues: [
            { ar: 'لستُ عالمًا ولا طالب علم: أنا والٍ أمويّ.', fr: 'Je ne suis ni savant ni étudiant : je suis un gouverneur omeyyade.', en: 'I am neither a scholar nor a student: I am an Umayyad governor.' },
            { ar: 'كنتُ واليًا على العراق، وألقيتُ بأهل الفضل والعلم في السجن.', fr: 'Je gouvernais l’Irak, et j’ai jeté en prison des gens de mérite et de savoir.', en: 'I governed Iraq, and I threw people of virtue and knowledge into prison.' },
            { ar: 'كان أبو عبيدة من سجنائي، ولم يخرج إلا بعد موتي سنة 95 هـ.', fr: 'Abū ‘Ubayda fut l’un de mes prisonniers ; il ne sortit qu’après ma mort, en 95 H.', en: 'Abu ‘Ubayda was one of my prisoners; he only came out after my death in 95 AH.' },
          ],
          options: [
            { id: 'abd-al-malik', label: { ar: 'عبد الملك بن مروان', fr: '‘Abd al-Malik ibn Marwān', en: '‘Abd al-Malik ibn Marwan' } },
            { id: 'hajjaj', label: { ar: 'الحجّاج بن يوسف', fr: 'al-Ḥajjāj ibn Yūsuf', en: 'al-Hajjaj ibn Yusuf' } },
            { id: 'nafi', label: { ar: 'نافع بن الأزرق', fr: 'Nāfi‘ ibn al-Azraq', en: 'Nafi‘ ibn al-Azraq' } },
          ],
          correctId: 'hajjaj',
          reveal: {
            ar: 'إنّه الحجّاج بن يوسف الثقفي، والي العراق. سجن أهل الفضل والعلم لأسبابٍ مختلفة، أهمّها إنكارهم لظلم الحكّام والولاة.',
            fr: 'C’est al-Ḥajjāj ibn Yūsuf al-Thaqafī, gouverneur d’Irak. Il emprisonna des gens de mérite et de savoir pour diverses raisons, la principale étant qu’ils dénonçaient l’injustice des dirigeants et des gouverneurs.',
            en: 'He is al-Hajjaj ibn Yusuf al-Thaqafi, governor of Iraq. He imprisoned people of virtue and knowledge for various reasons, above all because they spoke out against the injustice of rulers and governors.',
          },
        },
      ],
    },

    // 04 — Reading: his learning, prison and succession (slide 3)
    {
      kind: 'reading',
      id: 'reading-youth',
      title: { ar: 'اقرأ: من طالب علمٍ إلى إمام', fr: 'Lis : de l’étudiant à l’imam', en: 'Read: from student to imam' },
      intro: {
        ar: 'أربع بطاقاتٍ قصيرة. انتبه للأرقام: ستحتاجها في لعبة التخمين التالية!',
        fr: 'Quatre courtes cartes. Attention aux nombres : tu en auras besoin dans le jeu d’estimation qui suit !',
        en: 'Four short cards. Watch the numbers — you will need them in the guessing game that follows!',
      },
      image: `${IMG}/prison-door.png`,
      imageAlt: {
        ar: 'بابٌ خشبيّ ثقيل مفتوح في جدارٍ حجريّ، يدخل منه ضوء الصباح، وعلى الأرض حلقةٌ من حديد وسلسلةٌ مكسورة',
        fr: 'Une lourde porte de bois ouverte dans un mur de pierre, la lumière du matin y entre ; au sol, un anneau de fer et une chaîne brisée',
        en: 'A heavy wooden door standing open in a stone wall, morning light pouring in; on the floor, an iron ring and a broken chain',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'أساتذته', fr: 'Ses maîtres', en: 'His teachers' },
          text: {
            ar: 'أخذ الإمام أبو عبيدة العلم عن جابر بن زيد وصحار العبدي. وأدرك جملةً من الصحابة، وأهمّهم عبد الله بن عبّاس وعبد الله بن عمر وأبو سعيد الخدري وأنس بن مالك رضي الله عنهم؛ ولذلك يُعدّ من التابعين أيضًا.',
            fr: 'L’imam Abū ‘Ubayda reçut le savoir de Jābir ibn Zayd et de Ṣuḥār al-‘Abdī. Il connut aussi plusieurs Compagnons, surtout ‘Abd Allāh ibn ‘Abbās, ‘Abd Allāh ibn ‘Umar, Abū Sa‘īd al-Khudrī et Anas ibn Mālik (qu’Allah les agrée) : il compte donc lui aussi parmi les Successeurs (tābi‘ūn).',
            en: 'Imam Abu ‘Ubayda took knowledge from Jabir ibn Zayd and Suhar al-‘Abdi. He also met a number of Companions, above all ‘Abdullah ibn ‘Abbas, ‘Abdullah ibn ‘Umar, Abu Sa‘id al-Khudri and Anas ibn Malik (may God be pleased with them) — so he too is counted among the Successors (tābi‘ūn).',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'في سجن الحجّاج', fr: 'Dans la prison d’al-Ḥajjāj', en: 'In al-Hajjaj’s prison' },
          text: {
            ar: 'ألقى الحجّاج بن يوسف الثقفي، والي العراق، بأهل الفضل والعلم في السجن لأسبابٍ مختلفة، أهمّها إنكارهم لظلم الحكّام والولاة. وكان من بين سجنائه الإمام أبو عبيدة، الذي لم يخرج من السجن إلا بعد موت الحجّاج سنة 95 هـ.',
            fr: 'Al-Ḥajjāj ibn Yūsuf al-Thaqafī, gouverneur d’Irak, jeta en prison des gens de mérite et de savoir pour diverses raisons, surtout parce qu’ils dénonçaient l’injustice des dirigeants. Parmi ses prisonniers : l’imam Abū ‘Ubayda, qui ne sortit de prison qu’après la mort d’al-Ḥajjāj, en 95 H.',
            en: 'Al-Hajjaj ibn Yusuf al-Thaqafi, governor of Iraq, threw people of virtue and knowledge into prison for various reasons, above all because they spoke out against the rulers’ injustice. Among his prisoners was Imam Abu ‘Ubayda, who only left prison after al-Hajjaj died in 95 AH.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'على منهج جابر', fr: 'Sur la voie de Jābir', en: 'On Jabir’s path' },
          text: {
            ar: 'اعتمد الإمام أبو عبيدة منهج الإمام جابر بن زيد في العلم والعمل، ولازم حلقاته حتى خلفه في رئاسة الحلقة. ويُعدّ الإمام الثاني لمذهب أهل الدعوة.',
            fr: 'L’imam Abū ‘Ubayda adopta la méthode de l’imam Jābir ibn Zayd dans le savoir et l’action, et ne quitta pas ses cercles jusqu’à lui succéder à leur tête. Il est le deuxième imam de l’école des gens de l’Appel.',
            en: 'Imam Abu ‘Ubayda adopted Imam Jabir ibn Zayd’s method in knowledge and action, and stayed in his circles until he succeeded him at their head. He is counted as the second imam of the school of the People of the Call.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'إمامةٌ في الكتمان', fr: 'Un imamat dans le secret', en: 'An imamate in secrecy' },
          text: {
            ar: 'وأبقى الإمامة كتمانًا، اتّقاءً لجور الأمويين، ثمّ العبّاسيين من بعدهم.',
            fr: 'Il garda l’imamat dans le secret (kitmān), pour se protéger de l’injustice des Omeyyades, puis des Abbassides après eux.',
            en: 'He kept the imamate in secrecy (kitmān), as a shield from the injustice of the Umayyads, and then of the Abbasids after them.',
          },
        },
      ],
    },

    // 05 — Estimate: the numbers of a long life (slides 3, 6, 7)
    {
      kind: 'estimate',
      id: 'numbers',
      title: { ar: 'خمِّن الرقم!', fr: 'Devine le nombre !', en: 'Guess the number!' },
      intro: {
        ar: 'حرّك المؤشّر إلى الرقم الذي تظنّه صحيحًا، ثمّ اكشف الجواب.',
        fr: 'Glisse le curseur sur le nombre que tu crois juste, puis découvre la réponse.',
        en: 'Slide to the number you think is right, then reveal the answer.',
      },
      items: [
        {
          id: 'e-learn',
          question: { ar: 'كم سنةً مكث أبو عبيدة يتعلّم قبل أن يجلس للتعليم؟', fr: 'Combien d’années Abū ‘Ubayda passa-t-il à apprendre avant d’enseigner ?', en: 'How many years did Abu ‘Ubayda spend learning before he taught?' },
          min: 5,
          max: 60,
          step: 1,
          answer: 40,
          tolerance: 4,
          unit: { ar: 'سنة', fr: 'ans', en: 'years' },
          reveal: {
            ar: 'مكث 40 سنة يتعلّم، ثمّ 40 سنة معلّمًا! عمرٌ كامل بين طلب العلم ونشره.',
            fr: 'Il passa 40 ans à apprendre, puis 40 ans à enseigner ! Toute une vie entre la quête du savoir et sa transmission.',
            en: 'He spent 40 years learning, then 40 years teaching! A whole life between seeking knowledge and spreading it.',
          },
          compare: [
            { label: { ar: 'يتعلّم', fr: 'Apprendre', en: 'Learning' }, value: 40 },
            { label: { ar: 'يعلّم', fr: 'Enseigner', en: 'Teaching' }, value: 40 },
          ],
        },
        {
          id: 'e-prison',
          question: { ar: 'في أيّ سنةٍ هجرية مات الحجّاج فخرج أبو عبيدة من السجن؟', fr: 'En quelle année de l’Hégire al-Ḥajjāj mourut-il, libérant Abū ‘Ubayda de prison ?', en: 'In which Hijri year did al-Hajjaj die, so that Abu ‘Ubayda left prison?' },
          min: 60,
          max: 140,
          step: 1,
          answer: 95,
          tolerance: 5,
          unit: { ar: 'هـ', fr: 'H', en: 'AH' },
          reveal: {
            ar: 'سنة 95 هـ. لم يخرج الإمام من السجن إلا بعد موت الحجّاج.',
            fr: 'En 95 H. L’imam ne sortit de prison qu’après la mort d’al-Ḥajjāj.',
            en: 'In 95 AH. The imam only left prison after al-Hajjaj’s death.',
          },
        },
        {
          id: 'e-life',
          question: { ar: 'وُلد نحو سنة 50 هـ وتوفّي نحو سنة 145 هـ. كم سنةً عاش تقريبًا؟', fr: 'Né vers 50 H, mort vers 145 H : combien d’années vécut-il environ ?', en: 'Born about 50 AH, died about 145 AH: roughly how many years did he live?' },
          min: 40,
          max: 120,
          step: 1,
          answer: 95,
          tolerance: 5,
          unit: { ar: 'سنة', fr: 'ans', en: 'years' },
          reveal: {
            ar: 'نحو 95 سنة (من نحو 50 هـ إلى نحو 145 هـ). والتاريخان تقريبيّان.',
            fr: 'Environ 95 ans (d’environ 50 H à environ 145 H). Les deux dates sont approximatives.',
            en: 'About 95 years (from about 50 AH to about 145 AH). Both dates are approximate.',
          },
        },
        {
          id: 'e-imamate',
          question: { ar: 'خلف جابرًا سنة 93 هـ وبقي إمامًا حتى وفاته نحو سنة 145 هـ. كم سنةً دامت إمامته تقريبًا؟', fr: 'Il succéda à Jābir en 93 H et resta imam jusqu’à sa mort vers 145 H. Combien d’années environ ?', en: 'He succeeded Jabir in 93 AH and remained imam until his death about 145 AH. Roughly how many years?' },
          min: 10,
          max: 90,
          step: 1,
          answer: 52,
          tolerance: 6,
          unit: { ar: 'سنة', fr: 'ans', en: 'years' },
          reveal: {
            ar: 'نحو 52 سنة (93 ← 145 هـ)، أمّا إمامة جابر بن زيد قبله فكانت من 61 هـ إلى 93 هـ، أي 32 سنة.',
            fr: 'Environ 52 ans (93 → 145 H). L’imamat de Jābir ibn Zayd, avant lui, alla de 61 H à 93 H, soit 32 ans.',
            en: 'About 52 years (93 → 145 AH). Jabir ibn Zayd’s imamate before him ran from 61 AH to 93 AH — 32 years.',
          },
          compare: [
            { label: { ar: 'إمامة جابر', fr: 'Imamat de Jābir', en: 'Jabir’s imamate' }, value: 32 },
            { label: { ar: 'إمامة أبي عبيدة', fr: 'Imamat d’Abū ‘Ubayda', en: 'Abu ‘Ubayda’s imamate' }, value: 52 },
          ],
        },
      ],
    },

    // 06 — Lantern: the hidden cellar (slides 4 and 7)
    {
      kind: 'lantern',
      id: 'cellar-lantern',
      title: { ar: 'السرداب السرّي', fr: 'La cave secrète', en: 'The secret cellar' },
      intro: {
        ar: 'أنت الآن تحت الأرض في البصرة، والظلام شديد. حرّك المصباح بهدوء واكشف خمسة أسرارٍ يُخفيها السرداب.',
        fr: 'Te voici sous terre, à Bassora, dans le noir. Déplace doucement la lampe et découvre les cinq secrets que cache la cave.',
        en: 'You are now underground in Basra, and it is very dark. Move the lamp gently and uncover the five secrets the cellar is hiding.',
      },
      image: `${IMG}/cellar.png`,
      imageAlt: {
        ar: 'سردابٌ مقبّب من الآجرّ: بابٌ مقوّس تتدلّى فوقه سلاسل، وكتابٌ مفتوح على حاملٍ خشبيّ فوق حصير، وقفافٌ وسعفٌ في الزاوية، ومصباحٌ من الفخّار قرب الدرج',
        fr: 'Une cave voûtée en briques : une porte en arc sous des chaînes suspendues, un livre ouvert sur un pupitre de bois posé sur une natte, des paniers et des palmes dans un coin, une lampe en terre cuite près de l’escalier',
        en: 'A vaulted brick cellar: an arched door under hanging chains, an open book on a wooden stand over a mat, baskets and palm fronds in a corner, and a clay lamp near the stairs',
      },
      secrets: [
        {
          id: 's-door',
          x: 50,
          y: 47,
          label: { ar: 'بابٌ لا يعرفه أحد', fr: 'Une porte que nul ne connaît', en: 'A door nobody knows' },
          description: {
            ar: 'لمّا كانت رقابة الأمويين شديدة، اتّخذ الإمام أبو عبيدة مدرسته في سردابٍ خفيّ في البصرة.',
            fr: 'Comme la surveillance des Omeyyades était sévère, l’imam Abū ‘Ubayda installa son école dans une cave cachée de Bassora.',
            en: 'Because Umayyad surveillance was severe, Imam Abu ‘Ubayda set up his school in a hidden cellar in Basra.',
          },
        },
        {
          id: 's-chains',
          x: 50,
          y: 13,
          label: { ar: 'جرس الإنذار', fr: 'La sonnette d’alarme', en: 'The alarm bell' },
          description: {
            ar: 'وضع في مدخل السرداب سلاسل: إذا سمع صلصلتها هو وطلّابه، علموا أنّ غريبًا يريد الدخول.',
            fr: 'Il plaça des chaînes à l’entrée de la cave : dès que lui et ses élèves entendaient leur cliquetis, ils savaient qu’un étranger voulait entrer.',
            en: 'He hung chains at the cellar’s entrance: when he and his students heard them rattle, they knew a stranger wanted to come in.',
          },
        },
        {
          id: 's-book',
          x: 52,
          y: 72,
          label: { ar: 'معمل العقول', fr: 'L’atelier des esprits', en: 'The workshop of minds' },
          description: {
            ar: 'هنا آوى الإمام طلبة العلم من كلّ الأقطار، ودرّسهم ورعاهم بنفسه مدّة وجودهم في البصرة.',
            fr: 'Ici, l’imam accueillait les étudiants venus de toutes les contrées ; il les instruisait et veillait sur eux lui-même tout le temps de leur séjour à Bassora.',
            en: 'Here the imam sheltered students of knowledge from every land, teaching them and caring for them himself for as long as they stayed in Basra.',
          },
        },
        {
          id: 's-baskets',
          x: 83,
          y: 69,
          label: { ar: 'معمل القفاف', fr: 'L’atelier des paniers', en: 'The basket workshop' },
          description: {
            ar: 'اشتغل أبو عبيدة مع تعليمه وتعلّمه بصنع القفاف، ليكسب به الرزق ويكفل طلبته. وبها كان الطلبة يشتغلون كلّما دخل غريب.',
            fr: 'Tout en apprenant et en enseignant, Abū ‘Ubayda tressait des paniers pour gagner sa vie et prendre en charge ses élèves. C’est aussi à cela que les élèves s’occupaient dès qu’un étranger entrait.',
            en: 'Alongside learning and teaching, Abu ‘Ubayda wove baskets to earn his living and provide for his students. It is also what the students busied themselves with whenever a stranger came in.',
          },
        },
        {
          id: 's-lamp',
          x: 13,
          y: 73,
          label: { ar: 'نورٌ لا ينطفئ', fr: 'Une lumière qui ne s’éteint pas', en: 'A light that never goes out' },
          description: {
            ar: 'اهتمّ الإمام بالدعوة إلى الله وبثّ الروح الإسلامية والاستقامة بين المسلمين اهتمامًا بالغًا، ومنحها كلّ جهده.',
            fr: 'L’imam se soucia au plus haut point d’appeler à Dieu et de répandre l’esprit de l’islam et la rectitude parmi les musulmans ; il y consacra tous ses efforts.',
            en: 'The imam cared deeply about calling to God and spreading the spirit of Islam and rectitude among Muslims, and gave it all his effort.',
          },
        },
      ],
      ending: {
        ar: 'كشفتَ أسرار السرداب: مدرسةٌ خفيّة، وسلاسلُ تنذر، وقفافٌ تُخفي دروس العلم. والآن… صه! السلاسل تتحرّك!',
        fr: 'Tu as percé les secrets de la cave : une école cachée, des chaînes qui avertissent, des paniers qui dissimulent les leçons. Et maintenant… chut ! Les chaînes bougent !',
        en: 'You have uncovered the cellar’s secrets: a hidden school, chains that warn, and baskets that hide the lessons. And now… hush! The chains are moving!',
      },
    },

    // 07 — Chain: the stranger alarm (slide 4)
    {
      kind: 'chain',
      id: 'alarm-chain',
      title: { ar: 'صلصلة السلاسل!', fr: 'Le cliquetis des chaînes !', en: 'The chains are rattling!' },
      intro: {
        ar: 'عِش اللحظة كما عاشها طلبة السرداب: اختر في كلّ مرّة ما حدث فعلًا.',
        fr: 'Vis ce moment comme les élèves de la cave : choisis à chaque fois ce qui se passa vraiment.',
        en: 'Live the moment as the cellar’s students did: each time, choose what really happened.',
      },
      image: `${IMG}/chains.png`,
      imageAlt: {
        ar: 'سلاسلُ حديدٍ ثقيلة تتدلّى عند مدخلٍ مقوّس فوق درجٍ حجريّ ينزل إلى سردابٍ خافت الضوء',
        fr: 'De lourdes chaînes de fer pendent à une entrée en arc, au-dessus de marches de pierre descendant vers une cave à peine éclairée',
        en: 'Heavy iron chains hanging at an arched entrance above stone steps leading down into a dimly lit cellar',
      },
      start: {
        ar: 'رقابة الأمويين شديدة، والإمام أبو عبيدة يريد أن يعلّم طلبته.',
        fr: 'La surveillance des Omeyyades est sévère, et l’imam Abū ‘Ubayda veut instruire ses élèves.',
        en: 'Umayyad surveillance is severe, and Imam Abu ‘Ubayda wants to teach his students.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'فأين يتّخذ مدرسته؟', fr: 'Où installe-t-il donc son école ?', en: 'So where does he set up his school?' },
          correct: { ar: 'في سردابٍ خفيّ في البصرة', fr: 'Dans une cave cachée de Bassora', en: 'In a hidden cellar in Basra' },
          distractors: [
            {
              label: { ar: 'في ساحة السوق أمام الجميع', fr: 'Sur la place du marché, devant tous', en: 'In the market square, in front of everyone' },
              hint: { ar: 'تذكّر أنّ الرقابة شديدة: المكان يجب أن يكون بعيدًا عن العيون.', fr: 'Souviens-toi : la surveillance est sévère, il faut un lieu à l’abri des regards.', en: 'Remember, surveillance is severe: the place must be out of sight.' },
            },
            {
              label: { ar: 'في قصر الوالي', fr: 'Dans le palais du gouverneur', en: 'In the governor’s palace' },
              hint: { ar: 'الولاة هم من يراقبونه! فكّر في مكانٍ تحت الأرض.', fr: 'Ce sont justement les gouverneurs qui le surveillent ! Pense à un lieu sous terre.', en: 'The governors are the ones watching him! Think of a place underground.' },
            },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'وكيف يعرف أنّ غريبًا يقترب؟', fr: 'Et comment sait-il qu’un étranger approche ?', en: 'And how does he know a stranger is coming?' },
          correct: { ar: 'وضع في المدخل سلاسل تُسمع صلصلتها', fr: 'Il a placé à l’entrée des chaînes dont on entend le cliquetis', en: 'He hung chains at the entrance that can be heard rattling' },
          distractors: [
            {
              label: { ar: 'ترك الباب مفتوحًا ليرى القادم', fr: 'Il laisse la porte ouverte pour voir qui vient', en: 'He leaves the door open to see who comes' },
              hint: { ar: 'بابٌ مفتوح يكشف المدرسة. الإنذار كان صوتًا من حديد.', fr: 'Une porte ouverte trahirait l’école. L’alerte était un bruit de fer.', en: 'An open door would give the school away. The warning was a sound of iron.' },
            },
            {
              label: { ar: 'ينادي عليه أحد الطلبة بصوتٍ عالٍ', fr: 'Un élève l’appelle à voix haute', en: 'A student calls out loudly' },
              hint: { ar: 'الصياح يلفت الأنظار. انظر إلى الصورة: ماذا يتدلّى عند المدخل؟', fr: 'Crier attirerait l’attention. Regarde l’image : qu’est-ce qui pend à l’entrée ?', en: 'Shouting would draw attention. Look at the picture: what hangs at the entrance?' },
            },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'صلصلت السلاسل! ماذا يفعل الإمام وطلّابه؟', fr: 'Les chaînes cliquettent ! Que font l’imam et ses élèves ?', en: 'The chains rattle! What do the imam and his students do?' },
          correct: { ar: 'يوقفون التدريس ويشتغلون بصنع القفاف', fr: 'Ils arrêtent la leçon et se mettent à tresser des paniers', en: 'They stop the lesson and start weaving baskets' },
          distractors: [
            {
              label: { ar: 'يواصلون الدرس بصوتٍ أعلى', fr: 'Ils continuent la leçon plus fort', en: 'They carry on the lesson more loudly' },
              hint: { ar: 'لو سمعهم الغريب لانكشف أمرهم. كان عندهم عملٌ آخر جاهز بين أيديهم.', fr: 'Si l’étranger les entendait, tout serait découvert. Ils avaient un autre travail tout prêt sous la main.', en: 'If the stranger heard them, they would be found out. They had another job ready at hand.' },
            },
            {
              label: { ar: 'يهربون ويتركون السرداب', fr: 'Ils s’enfuient et quittent la cave', en: 'They run away and leave the cellar' },
              hint: { ar: 'لم يهربوا، بل بقوا في مكانهم وغيّروا عملهم.', fr: 'Ils ne fuyaient pas : ils restaient sur place et changeaient d’activité.', en: 'They did not flee: they stayed where they were and changed what they were doing.' },
            },
          ],
        },
        {
          id: 's4',
          prompt: { ar: 'غادر الغريب، وأمنوا عيون الظَّلَمة. ثمّ ماذا؟', fr: 'L’étranger repart, les yeux des oppresseurs sont loin. Et ensuite ?', en: 'The stranger leaves and the oppressors’ eyes are gone. Then what?' },
          correct: { ar: 'يرجعون من معمل القفاف إلى معمل العقول', fr: 'Ils reviennent de l’atelier des paniers à l’atelier des esprits', en: 'They go back from the basket workshop to the workshop of minds' },
          distractors: [
            {
              label: { ar: 'يغلقون المدرسة خوفًا', fr: 'Ils ferment l’école par peur', en: 'They close the school out of fear' },
              hint: { ar: 'لم يتوقّفوا أبدًا: مكث الإمام 40 سنة معلّمًا.', fr: 'Ils ne s’arrêtèrent jamais : l’imam enseigna pendant 40 ans.', en: 'They never stopped: the imam taught for 40 years.' },
            },
            {
              label: { ar: 'يتركون العلم ويكتفون ببيع القفاف', fr: 'Ils laissent le savoir et se contentent de vendre des paniers', en: 'They give up knowledge and just sell baskets' },
              hint: { ar: 'القفاف وسيلةٌ لكسب الرزق، أمّا الهدف فهو العلم.', fr: 'Les paniers servaient à gagner sa vie ; le but, c’était le savoir.', en: 'The baskets were a way to earn a living; the goal was knowledge.' },
            },
          ],
        },
        {
          id: 's5',
          prompt: { ar: 'وما ثمرة هذا الصبر؟', fr: 'Et quel fut le fruit de cette patience ?', en: 'And what was the fruit of this patience?' },
          correct: { ar: 'تخرّج من السرداب نجباءُ حملوا العلم إلى المشرق والمغرب', fr: 'De la cave sortirent de brillants élèves qui portèrent le savoir en Orient et au Maghreb', en: 'From the cellar came brilliant students who carried knowledge to the East and the Maghreb' },
          distractors: [
            {
              label: { ar: 'بقي العلم محبوسًا في السرداب', fr: 'Le savoir resta enfermé dans la cave', en: 'Knowledge stayed locked in the cellar' },
              hint: { ar: 'بالعكس! وصل علم السرداب إلى بلادٍ بعيدة.', fr: 'Au contraire ! Le savoir de la cave atteignit des pays lointains.', en: 'On the contrary! The cellar’s knowledge reached faraway lands.' },
            },
            {
              label: { ar: 'تخرّج منه صانعو قفافٍ فقط', fr: 'Il n’en sortit que des vanniers', en: 'Only basket-weavers came out of it' },
              hint: { ar: 'تخرّج منه علماء، مثل الإمام الربيع بن حبيب.', fr: 'Il en sortit des savants, comme l’imam al-Rabī‘ ibn Ḥabīb.', en: 'Scholars came out of it, such as Imam al-Rabi‘ ibn Habib.' },
            },
          ],
        },
      ],
      ending: {
        ar: 'فتخرّج من سردابه النجباء، من أمثال الإمام الربيع بن حبيب، وحملة العلم إلى المشرق وإلى المغرب، الذين كان لهم الفضل في نشر الفقه والعلم في البلاد البعيدة.',
        fr: 'De sa cave sortirent de brillants élèves, tels l’imam al-Rabī‘ ibn Ḥabīb, et les porteurs du savoir vers l’Orient et le Maghreb, à qui l’on doit la diffusion du droit et du savoir dans les pays lointains.',
        en: 'From his cellar came brilliant students, such as Imam al-Rabi‘ ibn Habib, and the bearers of knowledge to the East and the Maghreb, to whom we owe the spread of jurisprudence and knowledge in faraway lands.',
      },
    },

    // 08 — Reading: from a cellar to a worldwide institute (slides 4 and 5)
    {
      kind: 'reading',
      id: 'reading-institute',
      title: { ar: 'اقرأ: من سردابٍ إلى معهدٍ عالميّ', fr: 'Lis : d’une cave à un institut mondial', en: 'Read: from a cellar to a worldwide institute' },
      intro: {
        ar: 'كيف يصل علمُ سردابٍ صغير إلى بلادٍ بعيدة؟ اقرأ خطّة الإمام، ثمّ التقط الفوانيس الصحيحة.',
        fr: 'Comment le savoir d’une petite cave atteint-il des pays lointains ? Lis le plan de l’imam, puis attrape les bonnes lanternes.',
        en: 'How does the knowledge of a small cellar reach faraway lands? Read the imam’s plan, then catch the right lanterns.',
      },
      image: `${IMG}/caravan.png`,
      imageAlt: {
        ar: 'جمالٌ باركة في الصحراء عند الفجر، وبجانبها رُزمٌ من الكتب على حصير، وآثارُ طريقٍ تمتدّ نحو الأفق البعيد',
        fr: 'Des chameaux agenouillés dans le désert à l’aube, des piles de livres sur une natte à côté d’eux, et des traces de piste filant vers l’horizon',
        en: 'Camels kneeling in the desert at dawn, bundles of books on a mat beside them, and tracks leading toward the far horizon',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'الدعاة أوّلًا', fr: 'D’abord, les prédicateurs', en: 'Callers first' },
          text: {
            ar: 'بدأ الإمام بتنظيم الدعاة إلى الله أوّلًا، فكوّن جيلًا متعاونًا في العمل محبًّا للخير. وكان يستعدّ لمواسم الحجّ، حيث يوجّه الناس ويعلّمهم، ويأمر بالمعروف وينهى عن المنكر.',
            fr: 'L’imam commença par organiser ceux qui appellent à Dieu : il forma une génération solidaire dans l’action et aimant le bien. Il se préparait aussi aux saisons du pèlerinage, où il guidait et instruisait les gens, ordonnait le bien et interdisait le mal.',
            en: 'The imam began by organising the callers to God first, forming a generation that worked together and loved good. He also prepared for the Hajj seasons, where he guided and taught people, enjoining good and forbidding wrong.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'طلبةٌ مختارون', fr: 'Des élèves choisis', en: 'Chosen students' },
          text: {
            ar: 'عمل على انتقاء الطلبة من كلّ الجهات، ممّن تجتمع فيهم مواصفات الداعية الذي يضحّي من أجل أمانة الدين. وخصّهم برعايةٍ خاصّة، وكفل مأكلهم ومقامهم.',
            fr: 'Il s’appliqua à choisir des élèves de toutes les régions, réunissant les qualités du prédicateur prêt à se sacrifier pour le dépôt de la religion. Il leur accorda un soin particulier et prit en charge leur nourriture et leur logement.',
            en: 'He worked to select students from every direction — those with the qualities of a caller who sacrifices for the trust of the religion. He gave them special care, and paid for their food and lodging.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'ابنُ البلد يعلّم أهل بلده', fr: 'L’enfant du pays instruit son pays', en: 'A land’s own son teaches it' },
          text: {
            ar: 'أراد أن يكون حامل العلم إلى المناطق البعيدة هو ابن تلك البيئة، العالم بأهلها وأحوالها؛ فيسهل عليه مخاطبة الناس، فيفهمونه ويقبلون على الإسلام. وهكذا آوى معهده طلبة العلم من كلّ الآفاق، حتى يعلّموا الناس دينهم في بلادهم.',
            fr: 'Il voulait que celui qui porte le savoir vers une région lointaine soit un enfant de ce milieu, connaissant ses habitants et leur situation : il lui serait facile de leur parler, ils le comprendraient et viendraient à l’islam. Son institut accueillit ainsi des étudiants de tous les horizons, pour qu’ils enseignent aux gens leur religion dans leur propre pays.',
            en: 'He wanted the one carrying knowledge to a faraway region to be a son of that place, who knows its people and their conditions — so that he could speak to them easily, and they would understand him and turn to Islam. So his institute sheltered students from every horizon, to teach people their religion in their own lands.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'ثلاثة مجالس', fr: 'Trois assemblées', en: 'Three assemblies' },
          text: {
            ar: 'قسّم الإمام طلبته على مراتب، ولكلّ مرتبةٍ مجلسٌ خاصّ بها. مجلس الشيوخ: لا يحضره إلا كبار المذهب، لينظروا في شؤون أهل الدعوة، وما يعوق إقامة الدين وتبليغه، وما يحتاجه حملة العلم. حلقة حملة العلم (أو الدعاة): يحضرها طلبةٌ من عدّة أقطار، اختيروا لتحمّل مهامّ التعليم والإرشاد في البلاد التي وصلتها الفتوحات. ومجالس العامّة والمبتدئين: للذين يقبلون على التعلّم والتفقّه في الدين.',
            fr: 'L’imam répartit ses élèves en degrés, chacun avec son assemblée. L’assemblée des cheikhs : seuls les grands de l’école y siègent, pour examiner les affaires des gens de l’Appel, ce qui entrave l’établissement et la transmission de la religion, et les besoins des porteurs du savoir. Le cercle des porteurs du savoir (ou prédicateurs) : des élèves de plusieurs contrées, choisis pour enseigner et guider dans les pays atteints par les conquêtes. Et les assemblées du grand public et des débutants, pour ceux qui viennent apprendre et comprendre la religion.',
            en: 'The imam divided his students into ranks, each with its own assembly. The assembly of the elders: only the school’s senior figures attend, to look into the affairs of the People of the Call, what hinders establishing and conveying the religion, and what the bearers of knowledge need. The circle of the bearers of knowledge (or callers): students from several lands, chosen to teach and guide in the countries the conquests had reached. And assemblies for the general public and beginners, for those eager to learn and understand the religion.',
          },
        },
      ],
    },

    // 09 — Catch: what the imam really did (slides 3, 4, 5, 7)
    {
      kind: 'catch',
      id: 'dawa-catch',
      title: { ar: 'فوانيس الحقيقة', fr: 'Les lanternes de vérité', en: 'Lanterns of truth' },
      intro: {
        ar: 'فوانيسُ تطفو في ليل البصرة: بعضها يحمل حقيقةً عن الإمام، وبعضها يحمل خطأً. كن سريعًا ودقيقًا!',
        fr: 'Des lanternes flottent dans la nuit de Bassora : certaines portent une vérité sur l’imam, d’autres une erreur. Sois rapide et précis !',
        en: 'Lanterns float in the Basra night: some carry a truth about the imam, others a mistake. Be quick and careful!',
      },
      goal: {
        ar: 'التقط فقط ما فعله الإمام أبو عبيدة حقًّا',
        fr: 'Attrape seulement ce que l’imam Abū ‘Ubayda a vraiment fait',
        en: 'Catch only what Imam Abu ‘Ubayda really did',
      },
      items: [
        {
          id: 'c1',
          label: { ar: 'نظّم الدعاة أوّلًا', fr: 'Organisa d’abord les prédicateurs', en: 'Organised the callers first' },
          good: true,
          explanation: { ar: 'نعم، بدأ بتنظيم الدعاة، فكوّن جيلًا متعاونًا محبًّا للخير.', fr: 'Oui : il commença par organiser les prédicateurs, formant une génération solidaire et aimant le bien.', en: 'Yes — he began by organising the callers, forming a cooperative generation that loved good.' },
        },
        {
          id: 'c2',
          label: { ar: 'أعلن إمامته جهرًا', fr: 'Proclama son imamat', en: 'Declared his imamate openly' },
          good: false,
          explanation: { ar: 'بل أبقى الإمامة كتمانًا من جور الأمويين ثمّ العبّاسيين.', fr: 'Non : il garda l’imamat secret, face à l’injustice des Omeyyades puis des Abbassides.', en: 'No — he kept the imamate secret from the injustice of the Umayyads, then the Abbasids.' },
        },
        {
          id: 'c3',
          label: { ar: 'كفل مأكل طلبته ومقامهم', fr: 'Nourrit et logea ses élèves', en: 'Fed and housed his students' },
          good: true,
          explanation: { ar: 'نعم، خصّهم برعايةٍ خاصّة وكفل مأكلهم ومقامهم.', fr: 'Oui : il leur accorda un soin particulier et prit en charge leur nourriture et leur logement.', en: 'Yes — he gave them special care and paid for their food and lodging.' },
        },
        {
          id: 'c4',
          label: { ar: 'قبِل طلبة البصرة فقط', fr: 'N’accepta que des Bassoriens', en: 'Took only Basra students' },
          good: false,
          explanation: { ar: 'بل انتقى طلبته من كلّ الجهات وآواهم من كلّ الأقطار.', fr: 'Non : il choisit ses élèves de toutes les régions et les accueillit de toutes les contrées.', en: 'No — he selected students from every direction and sheltered them from every land.' },
        },
        {
          id: 'c5',
          label: { ar: 'صنع القفاف ليكسب رزقه', fr: 'Tressa des paniers pour vivre', en: 'Wove baskets for a living' },
          good: true,
          explanation: { ar: 'نعم، اشتغل بصنع القفاف ليكسب به الرزق ويكفل طلبته.', fr: 'Oui : il tressait des paniers pour gagner sa vie et prendre en charge ses élèves.', en: 'Yes — he wove baskets to earn his living and provide for his students.' },
        },
        {
          id: 'c6',
          label: { ar: 'أخذ أجرةً من طلبته', fr: 'Fit payer ses élèves', en: 'Charged his students fees' },
          good: false,
          explanation: { ar: 'بالعكس: هو الذي كان يكفل طلبته من كسب يده.', fr: 'Au contraire : c’est lui qui prenait en charge ses élèves, du travail de ses mains.', en: 'The opposite: he was the one who provided for his students from the work of his hands.' },
        },
        {
          id: 'c7',
          label: { ar: 'استعدّ لمواسم الحجّ', fr: 'Se prépara aux saisons du Hajj', en: 'Prepared for the Hajj seasons' },
          good: true,
          explanation: { ar: 'نعم، ففيها كان يوجّه الناس ويعلّمهم ويأمر بالمعروف وينهى عن المنكر.', fr: 'Oui : il y guidait et instruisait les gens, ordonnait le bien et interdisait le mal.', en: 'Yes — there he guided and taught people, enjoining good and forbidding wrong.' },
        },
        {
          id: 'c8',
          label: { ar: 'درّس في قصر الوالي', fr: 'Enseigna au palais du gouverneur', en: 'Taught in the governor’s palace' },
          good: false,
          explanation: { ar: 'بل اتّخذ مدرسته في سردابٍ خفيّ، لشدّة رقابة الأمويين.', fr: 'Non : il installa son école dans une cave cachée, tant la surveillance des Omeyyades était sévère.', en: 'No — he set up his school in a hidden cellar, because Umayyad surveillance was so severe.' },
        },
        {
          id: 'c9',
          label: { ar: 'أنشأ مدرسةً لطلّاب العلم', fr: 'Fonda une école pour étudiants', en: 'Founded a school for students' },
          good: true,
          explanation: { ar: 'نعم، أنشأ مدرسةً خاصّة بطلّاب العلم إلى جانب حِلَق العلم، وكوّن الدعاة الذين نشروا الدين والعلم.', fr: 'Oui : il fonda une école réservée aux étudiants, en plus des cercles de savoir, et forma les prédicateurs qui répandirent la religion et le savoir.', en: 'Yes — he founded a school just for students of knowledge alongside the study circles, and trained the callers who spread the religion and knowledge.' },
        },
        {
          id: 'c10',
          label: { ar: 'أرسل دعاةً يجهلون البلاد', fr: 'Envoya des prédicateurs étrangers au pays', en: 'Sent callers who did not know the land' },
          good: false,
          explanation: { ar: 'بل أراد أن يكون حامل العلم ابن تلك البيئة، العالم بأهلها وأحوالها.', fr: 'Non : il voulait que le porteur du savoir soit un enfant du pays, connaissant ses habitants et leur situation.', en: 'No — he wanted the bearer of knowledge to be a son of that land, who knows its people and their conditions.' },
        },
      ],
    },

    // 10 — Placement: the three assemblies (slide 5)
    {
      kind: 'placement',
      id: 'majalis',
      title: { ar: 'لكلّ مرتبةٍ مجلسها', fr: 'À chaque degré son assemblée', en: 'Each rank has its assembly' },
      intro: {
        ar: 'أنت اليوم منظّم المعهد! ضع كلّ بطاقةٍ في المجلس الذي يناسبها: اسحبها، أو اضغط البطاقة ثمّ المجلس.',
        fr: 'Aujourd’hui, c’est toi qui organises l’institut ! Place chaque carte dans la bonne assemblée : glisse-la, ou touche la carte puis l’assemblée.',
        en: 'Today you run the institute! Put each card in the assembly it belongs to: drag it, or tap the card and then the assembly.',
      },
      slots: [
        { id: 'shuyukh', label: { ar: 'مجلس الشيوخ', fr: 'L’assemblée des cheikhs', en: 'The assembly of the elders' } },
        { id: 'hamala', label: { ar: 'حلقة حملة العلم', fr: 'Le cercle des porteurs du savoir', en: 'The circle of the bearers of knowledge' } },
        { id: 'amma', label: { ar: 'مجالس العامّة والمبتدئين', fr: 'Les assemblées du public et des débutants', en: 'Assemblies for the public and beginners' } },
      ],
      cards: [
        {
          id: 'k1',
          slotId: 'shuyukh',
          label: { ar: 'لا يحضره إلا كبار المذهب', fr: 'Seuls les grands de l’école y siègent', en: 'Only the school’s senior figures attend' },
          hint: { ar: 'كبار المذهب هم الشيوخ.', fr: 'Les grands de l’école, ce sont les cheikhs.', en: 'The senior figures are the elders.' },
        },
        {
          id: 'k2',
          slotId: 'hamala',
          label: { ar: 'يحضرها طلبةٌ من عدّة أقطار', fr: 'Des élèves de plusieurs contrées y assistent', en: 'Students from several lands attend' },
          hint: { ar: 'هؤلاء طلبةٌ جاؤوا من بعيد ليحملوا العلم إلى بلادهم.', fr: 'Ce sont des élèves venus de loin pour porter le savoir chez eux.', en: 'These are students who came from afar to carry knowledge home.' },
        },
        {
          id: 'k3',
          slotId: 'shuyukh',
          label: { ar: 'ينظر في شؤون أهل الدعوة وما يعوق تبليغ الدين', fr: 'Examine les affaires des gens de l’Appel et ce qui entrave la transmission', en: 'Looks into the affairs of the People of the Call and what hinders conveying the religion' },
          hint: { ar: 'هذه قراراتٌ كبرى، لا ينظر فيها إلا الكبار.', fr: 'Ce sont de grandes décisions, réservées aux plus grands.', en: 'These are big decisions, left to the most senior.' },
        },
        {
          id: 'k4',
          slotId: 'amma',
          label: { ar: 'للمقبلين على التعلّم والتفقّه في الدين', fr: 'Pour ceux qui viennent apprendre et comprendre la religion', en: 'For those eager to learn and understand the religion' },
          hint: { ar: 'هذا مجلسٌ مفتوح لمن يبدأ طريق العلم.', fr: 'C’est une assemblée ouverte à qui commence le chemin du savoir.', en: 'This assembly is open to those starting on the path of knowledge.' },
        },
        {
          id: 'k5',
          slotId: 'hamala',
          label: { ar: 'اختيروا للتعليم والإرشاد في بلاد الفتوحات', fr: 'Choisis pour enseigner et guider dans les pays conquis', en: 'Chosen to teach and guide in the conquered lands' },
          hint: { ar: 'من يحمل العلم إلى البلاد البعيدة؟ حملة العلم.', fr: 'Qui porte le savoir vers les pays lointains ? Les porteurs du savoir.', en: 'Who carries knowledge to faraway lands? The bearers of knowledge.' },
        },
        {
          id: 'k6',
          slotId: 'shuyukh',
          label: { ar: 'يبحث ما يحتاجه حملة العلم', fr: 'Étudie les besoins des porteurs du savoir', en: 'Considers what the bearers of knowledge need' },
          hint: { ar: 'من يهتمّ بحاجات حملة العلم؟ المجلس الذي يدبّر شؤون الدعوة كلّها.', fr: 'Qui veille aux besoins des porteurs du savoir ? L’assemblée qui dirige toutes les affaires de l’Appel.', en: 'Who looks after the bearers’ needs? The assembly that manages all the affairs of the Call.' },
        },
        {
          id: 'k7',
          slotId: 'hamala',
          label: { ar: 'يُسمّى أهلها أيضًا «الدعاة»', fr: 'Ses membres sont aussi appelés « prédicateurs »', en: 'Its members are also called "the callers"' },
          hint: { ar: 'حلقة حملة العلم هي نفسها حلقة الدعاة.', fr: 'Le cercle des porteurs du savoir est aussi celui des prédicateurs.', en: 'The circle of the bearers of knowledge is also the circle of the callers.' },
        },
      ],
    },

    // 11 — Scramble: key words of the lesson (slides 3, 4, 7)
    {
      kind: 'scramble',
      id: 'key-words',
      title: { ar: 'حروفٌ مبعثرة', fr: 'Lettres mêlées', en: 'Scrambled letters' },
      intro: {
        ar: 'الغريب بعثر الحروف وهو يغادر! أعد ترتيبها لتجد كلمات الدرس.',
        fr: 'En repartant, l’étranger a mélangé les lettres ! Remets-les en ordre pour retrouver les mots de la leçon.',
        en: 'The stranger scattered the letters on his way out! Put them back in order to find the lesson’s words.',
      },
      words: [
        {
          id: 'w-basra',
          clue: { ar: 'المدينة التي تعلّم فيها أبو عبيدة وعلّم', fr: 'La ville où Abū ‘Ubayda apprit et enseigna', en: 'The city where Abu ‘Ubayda learned and taught' },
          word: { ar: 'البصرة', fr: 'Bassora', en: 'Basra' },
          reveal: { ar: 'البصرة: فيها تعلّم عند كبار الصحابة والتابعين، وفيها آوى طلبته ودرّسهم.', fr: 'Bassora : il y étudia auprès de grands Compagnons et Successeurs, y accueillit et instruisit ses élèves.', en: 'Basra: there he studied with senior Companions and Successors, and there he sheltered and taught his students.' },
        },
        {
          id: 'w-cellar',
          clue: { ar: 'مكانٌ تحت الأرض اتّخذه مدرسةً خفيّة', fr: 'Un lieu sous terre devenu école cachée', en: 'An underground place he made a hidden school' },
          word: { ar: 'سرداب', fr: 'cave', en: 'cellar' },
          reveal: { ar: 'السرداب: مدرسةٌ خفيّة في البصرة، لأنّ رقابة الأمويين كانت شديدة.', fr: 'La cave : une école cachée à Bassora, car la surveillance des Omeyyades était sévère.', en: 'The cellar: a hidden school in Basra, because Umayyad surveillance was severe.' },
        },
        {
          id: 'w-baskets',
          clue: { ar: 'كان يصنعها ليكسب رزقه ويكفل طلبته', fr: 'Il les fabriquait pour gagner sa vie et aider ses élèves', en: 'He made them to earn a living and support his students' },
          word: { ar: 'القفاف', fr: 'paniers', en: 'baskets' },
          reveal: { ar: 'القفاف: صنعةُ الإمام، وبها كان الطلبة يشتغلون إذا دخل غريب.', fr: 'Les paniers : le métier de l’imam ; les élèves s’y mettaient dès qu’un étranger entrait.', en: 'Baskets: the imam’s trade, and what the students busied themselves with when a stranger came in.' },
        },
        {
          id: 'w-kitman',
          clue: { ar: 'هكذا أبقى الإمامة، اتّقاءً لجور الحكّام', fr: 'Ainsi garda-t-il l’imamat, face à l’injustice des dirigeants', en: 'How he kept the imamate, away from the rulers’ injustice' },
          word: { ar: 'كتمان', fr: 'secret', en: 'secrecy' },
          reveal: { ar: 'الكتمان: أبقى الإمامة كتمانًا من جور الأمويين والعبّاسيين بعدهم.', fr: 'Le secret (kitmān) : il garda l’imamat caché, face à l’injustice des Omeyyades puis des Abbassides.', en: 'Secrecy (kitmān): he kept the imamate hidden from the injustice of the Umayyads and then the Abbasids.' },
        },
        {
          id: 'w-rustam',
          clue: { ar: 'عبد الرحمن بن …، مؤسّس دولةٍ تحمل اسمه', fr: '‘Abd al-Raḥmān ibn …, fondateur d’un État qui porte son nom', en: '‘Abd al-Rahman ibn …, founder of a state that bears his name' },
          word: { ar: 'رستم', fr: 'Rustam', en: 'Rustam' },
          reveal: { ar: 'عبد الرحمن بن رستم، مؤسّس الدولة الرستمية، تخرّج من معهد أبي عبيدة.', fr: '‘Abd al-Raḥmān ibn Rustam, fondateur de l’État rustamide, sortit de l’institut d’Abū ‘Ubayda.', en: '‘Abd al-Rahman ibn Rustam, founder of the Rustamid state, graduated from Abu ‘Ubayda’s institute.' },
        },
      ],
    },

    // 12 — Reading: his jurisprudence and knowledge (slides 3, 6, 7)
    {
      kind: 'reading',
      id: 'reading-fiqh',
      title: { ar: 'اقرأ: فقه الإمام وعلمه', fr: 'Lis : le droit et le savoir de l’imam', en: 'Read: the imam’s jurisprudence and knowledge' },
      intro: {
        ar: 'عالمٌ كبير… لم يكتب كتبًا بيده! فكيف وصل علمه إلينا؟ اقرأ جيّدًا: فيها مفاتيح الخزنة التالية.',
        fr: 'Un grand savant… qui n’écrivit pas de livres ! Comment son savoir nous est-il parvenu ? Lis bien : tu y trouveras les clés du coffre qui suit.',
        en: 'A great scholar… who wrote no books himself! So how did his knowledge reach us? Read carefully: here are the keys to the vault that follows.',
      },
      image: `${IMG}/letters.png`,
      imageAlt: {
        ar: 'رسائلُ ملفوفة مربوطة بخيطٍ في حقيبةٍ جلدية على حصير، وبجانبها كتبٌ مغلقة ودواةٌ ومصباحٌ صغير',
        fr: 'Des lettres roulées nouées d’une ficelle dans une sacoche de cuir sur une natte, à côté de livres fermés, d’un encrier et d’une petite lampe',
        en: 'Rolled letters tied with cord in a leather satchel on a mat, beside closed books, an inkwell and a small lamp',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'علمٌ في صدور التلاميذ', fr: 'Un savoir gardé par ses élèves', en: 'Knowledge kept by his students' },
          text: {
            ar: 'تميّز الإمام أبو عبيدة بالفقه والعلم الغزير، وله آراء في الفقه والتفسير. لكنّه لم يكتب الكتب لاشتغاله بالتعليم؛ فأقواله وفتاويه وآراؤه المفصّلة موجودةٌ في كتب تلامذته ومن بعدهم، وفي مؤلّفات المذهب.',
            fr: 'L’imam Abū ‘Ubayda se distinguait par son droit et son vaste savoir ; il a des avis en droit et en exégèse. Mais, pris par l’enseignement, il n’écrivit pas de livres : ses paroles, ses fatwas et ses avis détaillés se trouvent dans les livres de ses élèves et de leurs successeurs, et dans les ouvrages de l’école.',
            en: 'Imam Abu ‘Ubayda stood out for his jurisprudence and vast knowledge, with views in law and Qur’an commentary. But he was too busy teaching to write books: his sayings, fatwas and detailed opinions are found in the books of his students and those after them, and in the school’s works.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'رسائل وصلت إلينا', fr: 'Des lettres parvenues jusqu’à nous', en: 'Letters that reached us' },
          text: {
            ar: 'وما عدا ذلك، فقد وصلت إلينا رسالةٌ مكتوبة في الزكاة أجاب فيها أهل المغرب، ورسائل أخرى جُمعت في كتابين. ويُذكر له من الكتب: «مسائل أبي عبيدة» و«كتابٌ في الزكاة» و«رسائل أبي عبيدة». وقد ترك فقهًا كثيرًا نقله عنه تلامذته وطلبته.',
            fr: 'Nous sont toutefois parvenues une lettre écrite sur la zakat, où il répond aux gens du Maghreb, et d’autres lettres réunies en deux livres. On cite à son nom : « Les Questions d’Abū ‘Ubayda », « Un livre sur la zakat » et « Les Lettres d’Abū ‘Ubayda ». Il laissa un droit abondant, transmis par ses disciples et ses élèves.',
            en: 'Apart from that, a written letter on zakat has reached us, in which he answered the people of the Maghreb, along with other letters gathered into two books. The books named as his are "The Questions of Abu ‘Ubayda", "A Book on Zakat" and "The Letters of Abu ‘Ubayda". He left a great deal of jurisprudence, passed on by his disciples and students.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'أمين الحديث', fr: 'Gardien du hadith', en: 'Guardian of hadith' },
          text: {
            ar: 'رتّب الأحاديث، ورسخ في العقيدة والفقه وبلّغهما. وروى أحاديث كثيرة عن الإمام جابر، هي اليوم في مسند الإمام الربيع؛ فالمسند حفظه الربيع برواية أبي عبيدة.',
            fr: 'Il classa les hadiths, maîtrisa le dogme et le droit et les transmit. Il rapporta de l’imam Jābir de nombreux hadiths, aujourd’hui dans le Musnad de l’imam al-Rabī‘ : al-Rabī‘ a conservé ce Musnad d’après la transmission d’Abū ‘Ubayda.',
            en: 'He put the hadiths in order, mastered creed and jurisprudence, and passed them on. He narrated many hadiths from Imam Jabir, found today in Imam al-Rabi‘’s Musnad — al-Rabi‘ preserved the Musnad through Abu ‘Ubayda’s narration.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'حذرٌ في النقل', fr: 'Prudent dans la transmission', en: 'Careful in transmission' },
          text: {
            ar: 'وكان الإمام حذرًا في نقل الحديث، فلا ينقل إلا عن الثقات. وقد اشتهر عنه قولٌ في ذلك… مقفلٌ عليه في الخزنة التالية!',
            fr: 'L’imam était prudent dans la transmission du hadith : il ne rapportait que de gens dignes de confiance. On connaît de lui une parole célèbre à ce sujet… enfermée dans le coffre qui suit !',
            en: 'The imam was careful in transmitting hadith: he narrated only from trustworthy people. A famous saying of his about this… is locked in the vault that follows!',
          },
        },
      ],
    },

    // 13 — Vault: open it to find the famous saying (slide 6)
    {
      kind: 'vault',
      id: 'fiqh-vault',
      title: { ar: 'خزنة الإمام', fr: 'Le coffre de l’imam', en: 'The imam’s vault' },
      intro: {
        ar: 'أربعة أقراص، وأربعة أسئلة. اضبط كلّ قرصٍ على الجواب الصحيح لتنفتح الخزنة وتجد وصيّة الإمام.',
        fr: 'Quatre molettes, quatre questions. Règle chacune sur la bonne réponse pour ouvrir le coffre et trouver la recommandation de l’imam.',
        en: 'Four dials, four questions. Set each dial to the right answer to open the vault and find the imam’s advice.',
      },
      image: `${IMG}/chest.png`,
      imageAlt: {
        ar: 'صندوقٌ خشبيّ قديم مقفل بأحزمةٍ من حديد وقفلٍ نحاسيّ، في غرفةٍ مقبّبة خافتة الضوء بجانبه مصباح',
        fr: 'Un vieux coffre de bois fermé, cerclé de fer et muni d’une serrure de laiton, dans une pièce voûtée faiblement éclairée par une lampe',
        en: 'An old locked wooden chest with iron bands and a brass lock, in a dim vaulted room beside a lamp',
      },
      dials: [
        {
          id: 'd1',
          question: { ar: 'عن أيّ موضوعٍ أجاب أهلَ المغرب في رسالته؟', fr: 'Sur quel sujet répondit-il aux gens du Maghreb dans sa lettre ?', en: 'On what subject did he answer the people of the Maghreb in his letter?' },
          options: [
            { id: 'salat', label: { ar: 'الصلاة', fr: 'La prière', en: 'Prayer' } },
            { id: 'zakat', label: { ar: 'الزكاة', fr: 'La zakat', en: 'Zakat' } },
            { id: 'hajj', label: { ar: 'الحجّ', fr: 'Le Hajj', en: 'Hajj' } },
            { id: 'sawm', label: { ar: 'الصوم', fr: 'Le jeûne', en: 'Fasting' } },
          ],
          correctId: 'zakat',
          hint: { ar: 'عُد إلى بطاقة «رسائل وصلت إلينا»: رسالةٌ مكتوبة في…', fr: 'Reviens à la carte « Des lettres parvenues jusqu’à nous » : une lettre écrite sur…', en: 'Go back to the card "Letters that reached us": a written letter on…' },
        },
        {
          id: 'd2',
          question: { ar: 'في كم كتابٍ جُمعت رسائله الأخرى؟', fr: 'En combien de livres ses autres lettres furent-elles réunies ?', en: 'Into how many books were his other letters gathered?' },
          options: [
            { id: 'n1', label: { ar: '1', fr: '1', en: '1' } },
            { id: 'n2', label: { ar: '2', fr: '2', en: '2' } },
            { id: 'n3', label: { ar: '3', fr: '3', en: '3' } },
            { id: 'n4', label: { ar: '4', fr: '4', en: '4' } },
          ],
          correctId: 'n2',
          hint: { ar: 'عُد إلى بطاقة «رسائل وصلت إلينا»: جُمعت في كتاب… وكتابٍ آخر.', fr: 'Reviens à la carte « Des lettres parvenues jusqu’à nous » : réunies en un livre… et un autre.', en: 'Go back to the card "Letters that reached us": gathered in one book… and another.' },
        },
        {
          id: 'd3',
          question: { ar: 'من حفظ المسند برواية أبي عبيدة؟', fr: 'Qui a conservé le Musnad d’après Abū ‘Ubayda ?', en: 'Who preserved the Musnad through Abu ‘Ubayda’s narration?' },
          options: [
            { id: 'suhar', label: { ar: 'صحار', fr: 'Ṣuḥār', en: 'Suhar' } },
            { id: 'jabir', label: { ar: 'جابر', fr: 'Jābir', en: 'Jabir' } },
            { id: 'rabi', label: { ar: 'الربيع', fr: 'al-Rabī‘', en: 'al-Rabi‘' } },
            { id: 'urwa', label: { ar: 'عروة', fr: '‘Urwa', en: '‘Urwa' } },
          ],
          correctId: 'rabi',
          hint: { ar: 'المسند يحمل اسمه: مسند الإمام… بن حبيب.', fr: 'Le Musnad porte son nom : le Musnad de l’imam… ibn Ḥabīb.', en: 'The Musnad bears his name: the Musnad of Imam… ibn Habib.' },
        },
        {
          id: 'd4',
          question: { ar: 'كان لا ينقل الحديث إلا عن…', fr: 'Il ne rapportait le hadith que de…', en: 'He narrated hadith only from…' },
          options: [
            { id: 'rulers', label: { ar: 'الولاة', fr: 'gouverneurs', en: 'governors' } },
            { id: 'rich', label: { ar: 'الأغنياء', fr: 'gens riches', en: 'the rich' } },
            { id: 'trust', label: { ar: 'الثقات', fr: 'gens sûrs', en: 'the trustworthy' } },
            { id: 'kin', label: { ar: 'الأقارب', fr: 'proches', en: 'relatives' } },
          ],
          correctId: 'trust',
          hint: { ar: 'لا المال ولا المنصب ولا القرابة: المهمّ أن يكون الراوي موثوقًا.', fr: 'Ni l’argent, ni le rang, ni la parenté : l’essentiel est que le transmetteur soit digne de confiance.', en: 'Not wealth, rank or kinship: what matters is that the narrator can be trusted.' },
        },
      ],
      treasure: {
        ar: 'قال الإمام أبو عبيدة: «لا ينبغي أن تأخذ العلم من رجلٍ مبتدعٍ يدعو إلى بدعته، ولا من سفيهٍ يدعو إلى سفهه، ولا ممّن يكذب وإن كان يصدق في فتواه، ولا ممّن لا يفرز مذهبه من مذهب غيره».',
        fr: 'L’imam Abū ‘Ubayda a dit : « Il ne convient pas de prendre le savoir d’un innovateur qui appelle à son innovation, ni d’un insensé qui appelle à sa sottise, ni de quelqu’un qui ment, même s’il dit vrai dans sa fatwa, ni de quelqu’un qui ne distingue pas sa doctrine de celle des autres. »',
        en: 'Imam Abu ‘Ubayda said: "You should not take knowledge from an innovator who calls to his innovation, nor from a fool who calls to his folly, nor from one who lies — even if he is truthful in his fatwa — nor from one who cannot tell his own school from another’s."',
      },
    },

    // 14 — Swipe: whom do we take knowledge from? (slide 6)
    {
      kind: 'swipe',
      id: 'trust-swipe',
      title: { ar: 'آخذ عنه العلم أم لا؟', fr: 'Prendre son savoir, ou non ?', en: 'Take knowledge from them, or not?' },
      intro: {
        ar: 'طبّق وصيّة الإمام التي وجدتها في الخزنة: اسحب كلّ بطاقةٍ إلى الجهة الصحيحة.',
        fr: 'Applique la recommandation trouvée dans le coffre : fais glisser chaque carte du bon côté.',
        en: 'Apply the advice you found in the vault: swipe each card to the correct side.',
      },
      left: {
        label: { ar: 'لا يؤخذ عنه العلم', fr: 'On ne prend pas son savoir', en: 'Do not take knowledge from them' },
        tag: { ar: 'احذر', fr: 'Prudence', en: 'Beware' },
      },
      right: {
        label: { ar: 'يؤخذ عنه العلم', fr: 'On prend son savoir', en: 'Take knowledge from them' },
        tag: { ar: 'ثقة', fr: 'Fiable', en: 'Trustworthy' },
      },
      cards: [
        {
          id: 't1',
          who: { ar: 'مبتدع', fr: 'Un innovateur', en: 'An innovator' },
          deed: { ar: 'يدعو الناس إلى بدعته', fr: 'Il appelle les gens à son innovation', en: 'He calls people to his innovation' },
          side: 'left',
          explanation: { ar: 'قال الإمام: لا تأخذ العلم «من رجلٍ مبتدعٍ يدعو إلى بدعته».', fr: 'L’imam a dit : ne prends pas le savoir « d’un innovateur qui appelle à son innovation ».', en: 'The imam said: do not take knowledge "from an innovator who calls to his innovation".' },
        },
        {
          id: 't2',
          who: { ar: 'راوٍ ثقة', fr: 'Un transmetteur sûr', en: 'A trustworthy narrator' },
          deed: { ar: 'يُطمأنّ إلى صدقه في النقل', fr: 'On est sûr de sa sincérité dans ce qu’il rapporte', en: 'His honesty in what he passes on can be relied upon' },
          image: `${IMG}/letters.png`,
          side: 'right',
          explanation: { ar: 'كان الإمام حذرًا في نقل الحديث، فلا ينقل إلا عن الثقات.', fr: 'L’imam était prudent : il ne rapportait le hadith que de gens dignes de confiance.', en: 'The imam was careful: he narrated hadith only from the trustworthy.' },
        },
        {
          id: 't3',
          who: { ar: 'سفيه', fr: 'Un insensé', en: 'A fool' },
          deed: { ar: 'يدعو الناس إلى سفهه', fr: 'Il appelle les gens à sa sottise', en: 'He calls people to his folly' },
          side: 'left',
          explanation: { ar: 'قال الإمام: «ولا من سفيهٍ يدعو إلى سفهه».', fr: 'L’imam a dit : « ni d’un insensé qui appelle à sa sottise ».', en: 'The imam said: "nor from a fool who calls to his folly".' },
        },
        {
          id: 't4',
          who: { ar: 'رجلٌ يكذب', fr: 'Un homme qui ment', en: 'A man who lies' },
          deed: { ar: 'لكنّه يصدق في فتواه', fr: 'Mais il dit vrai dans sa fatwa', en: 'But he is truthful in his fatwa' },
          side: 'left',
          explanation: { ar: 'انتبه! قال الإمام: «ولا ممّن يكذب وإن كان يصدق في فتواه». من عُرف بالكذب لا يؤخذ عنه العلم.', fr: 'Attention ! L’imam a dit : « ni de quelqu’un qui ment, même s’il dit vrai dans sa fatwa ». On ne prend pas le savoir de qui est connu pour mentir.', en: 'Careful! The imam said: "nor from one who lies, even if he is truthful in his fatwa". Knowledge is not taken from someone known to lie.' },
        },
        {
          id: 't5',
          who: { ar: 'الإمام جابر بن زيد', fr: 'L’imam Jābir ibn Zayd', en: 'Imam Jabir ibn Zayd' },
          deed: { ar: 'شيخ أبي عبيدة الذي لازم حلقاته', fr: 'Le maître d’Abū ‘Ubayda, dont il ne quittait pas les cercles', en: 'Abu ‘Ubayda’s teacher, whose circles he never left' },
          side: 'right',
          explanation: { ar: 'روى أبو عبيدة عن الإمام جابر أحاديث كثيرة، هي في مسند الإمام الربيع.', fr: 'Abū ‘Ubayda rapporta de l’imam Jābir de nombreux hadiths, qui sont dans le Musnad de l’imam al-Rabī‘.', en: 'Abu ‘Ubayda narrated many hadiths from Imam Jabir, found in Imam al-Rabi‘’s Musnad.' },
        },
        {
          id: 't6',
          who: { ar: 'رجلٌ يخلط', fr: 'Un homme qui mélange', en: 'A man who mixes things up' },
          deed: { ar: 'لا يفرز مذهبه من مذهب غيره', fr: 'Il ne distingue pas sa doctrine de celle des autres', en: 'He cannot tell his own school from another’s' },
          side: 'left',
          explanation: { ar: 'قال الإمام: «ولا ممّن لا يفرز مذهبه من مذهب غيره».', fr: 'L’imam a dit : « ni de quelqu’un qui ne distingue pas sa doctrine de celle des autres ».', en: 'The imam said: "nor from one who cannot tell his own school from another’s".' },
        },
      ],
    },

    // 15 — Memory: teachers and graduates (slides 3 and 7)
    {
      kind: 'memory',
      id: 'people-memory',
      title: { ar: 'من علّمه؟ ومن تخرّج عنده؟', fr: 'Qui l’a formé ? Qui a-t-il formé ?', en: 'Who taught him? Whom did he teach?' },
      intro: {
        ar: 'تخرّج من معهد أبي عبيدة طلبةٌ كثيرون، منهم الربيع بن حبيب صاحب المسند، وعبد الله بن يحيى (طالب الحقّ)، وعبد الرحمن بن رستم مؤسّس الدولة الرستمية، رحمهم الله. احفظ كلّ بطاقةٍ وما تدلّ عليه قبل أن تنقلب!',
        fr: 'De l’institut d’Abū ‘Ubayda sortirent de nombreux élèves, dont al-Rabī‘ ibn Ḥabīb, auteur du Musnad, ‘Abd Allāh ibn Yaḥyā (Ṭālib al-Ḥaqq) et ‘Abd al-Raḥmān ibn Rustam, fondateur de l’État rustamide (qu’Allah leur fasse miséricorde). Mémorise chaque carte avant qu’elle ne se retourne !',
        en: 'Many students graduated from Abu ‘Ubayda’s institute, among them al-Rabi‘ ibn Habib, author of the Musnad, ‘Abdullah ibn Yahya (Talib al-Haqq) and ‘Abd al-Rahman ibn Rustam, founder of the Rustamid state (may God have mercy on them). Memorise each card before it flips!',
      },
      image: `${IMG}/caravan.png`,
      cards: [
        { id: 'jabir', label: { ar: 'جابر بن زيد', fr: 'Jābir ibn Zayd', en: 'Jabir ibn Zayd' }, category: { ar: 'أستاذه', fr: 'Son maître', en: 'His teacher' } },
        { id: 'suhar', label: { ar: 'صحار العبدي', fr: 'Ṣuḥār al-‘Abdī', en: 'Suhar al-‘Abdi' }, category: { ar: 'أستاذه', fr: 'Son maître', en: 'His teacher' } },
        { id: 'ibn-abbas', label: { ar: 'عبد الله بن عبّاس', fr: '‘Abd Allāh ibn ‘Abbās', en: '‘Abdullah ibn ‘Abbas' }, category: { ar: 'صحابيٌّ أدركه', fr: 'Compagnon qu’il connut', en: 'A Companion he met' } },
        { id: 'rabi', label: { ar: 'الربيع بن حبيب', fr: 'al-Rabī‘ ibn Ḥabīb', en: 'al-Rabi‘ ibn Habib' }, category: { ar: 'تلميذه: صاحب المسند', fr: 'Son élève : auteur du Musnad', en: 'His student: author of the Musnad' } },
        { id: 'ibn-yahya', label: { ar: 'عبد الله بن يحيى', fr: '‘Abd Allāh ibn Yaḥyā', en: '‘Abdullah ibn Yahya' }, category: { ar: 'تلميذه: طالب الحقّ', fr: 'Son élève : Ṭālib al-Ḥaqq', en: 'His student: Talib al-Haqq' } },
        { id: 'ibn-rustam', label: { ar: 'عبد الرحمن بن رستم', fr: '‘Abd al-Raḥmān ibn Rustam', en: '‘Abd al-Rahman ibn Rustam' }, category: { ar: 'تلميذه: مؤسّس الدولة الرستمية', fr: 'Son élève : fondateur de l’État rustamide', en: 'His student: founder of the Rustamid state' } },
      ],
      rounds: [
        {
          id: 'teachers',
          question: { ar: 'أين كانت بطاقتا الأستاذين اللذين أخذ عنهما العلم؟', fr: 'Où étaient les cartes des deux maîtres dont il reçut le savoir ?', en: 'Where were the cards of the two teachers he took knowledge from?' },
          correctIds: ['jabir', 'suhar'],
        },
        {
          id: 'graduates',
          question: { ar: 'أين كانت بطاقات تلاميذه الثلاثة؟', fr: 'Où étaient les cartes de ses trois élèves ?', en: 'Where were the cards of his three students?' },
          correctIds: ['rabi', 'ibn-yahya', 'ibn-rustam'],
        },
        {
          id: 'state',
          question: { ar: 'أين بطاقة التلميذ الذي أسّس دولة؟', fr: 'Où est la carte de l’élève qui fonda un État ?', en: 'Where is the card of the student who founded a state?' },
          correctIds: ['ibn-rustam'],
        },
      ],
    },

    // 16 — Blitz
    {
      kind: 'blitz',
      id: 'blitz',
      title: { ar: 'جولة سريعة', fr: 'Manche éclair', en: 'Speed round' },
      intro: {
        ar: 'عشر ثوانٍ لكلّ عبارة — صحيحة أم خاطئة؟ حافظ على سلسلة انتصاراتك!',
        fr: 'Dix secondes par affirmation — vrai ou faux ? Garde ta série en vie !',
        en: 'Ten seconds per statement — true or false? Keep your streak alive!',
      },
      secondsPerCard: 10,
      statements: [
        {
          id: 'b1',
          text: { ar: 'أبو عبيدة هو الإمام الأوّل لأهل الدعوة.', fr: 'Abū ‘Ubayda est le premier imam des gens de l’Appel.', en: 'Abu ‘Ubayda is the first imam of the People of the Call.' },
          answer: false,
          explanation: { ar: 'هو الإمام الثاني، بعد الإمام جابر بن زيد.', fr: 'Il est le deuxième imam, après l’imam Jābir ibn Zayd.', en: 'He is the second imam, after Imam Jabir ibn Zayd.' },
        },
        {
          id: 'b2',
          text: { ar: 'خرج من السجن بعد موت الحجّاج سنة 95 هـ.', fr: 'Il sortit de prison après la mort d’al-Ḥajjāj, en 95 H.', en: 'He left prison after al-Hajjaj’s death in 95 AH.' },
          answer: true,
          explanation: { ar: 'نعم، لم يخرج إلا بعد موت الحجّاج سنة 95 هـ.', fr: 'Oui : il ne sortit qu’après la mort d’al-Ḥajjāj, en 95 H.', en: 'Yes — he only came out after al-Hajjaj died in 95 AH.' },
        },
        {
          id: 'b3',
          text: { ar: 'ألّف أبو عبيدة كتبًا كثيرة بيده.', fr: 'Abū ‘Ubayda écrivit lui-même de nombreux livres.', en: 'Abu ‘Ubayda wrote many books himself.' },
          answer: false,
          explanation: { ar: 'لم يكتب الكتب لاشتغاله بالتعليم؛ علمه في كتب تلامذته ومن بعدهم.', fr: 'Pris par l’enseignement, il n’écrivit pas de livres ; son savoir est dans ceux de ses élèves et de leurs successeurs.', en: 'He was too busy teaching to write books; his knowledge is in the books of his students and those after them.' },
        },
        {
          id: 'b4',
          text: { ar: 'مجلس الشيوخ مفتوحٌ للمبتدئين.', fr: 'L’assemblée des cheikhs est ouverte aux débutants.', en: 'The assembly of the elders is open to beginners.' },
          answer: false,
          explanation: { ar: 'لا يحضره إلا كبار المذهب؛ وللمبتدئين مجالسهم الخاصّة.', fr: 'Seuls les grands de l’école y siègent ; les débutants ont leurs propres assemblées.', en: 'Only the school’s senior figures attend; beginners have their own assemblies.' },
        },
        {
          id: 'b5',
          text: { ar: 'مؤسّس الدولة الرستمية من خرّيجي معهده.', fr: 'Le fondateur de l’État rustamide est sorti de son institut.', en: 'The founder of the Rustamid state graduated from his institute.' },
          answer: true,
          explanation: { ar: 'نعم: عبد الرحمن بن رستم تخرّج من معهد أبي عبيدة.', fr: 'Oui : ‘Abd al-Raḥmān ibn Rustam sortit de l’institut d’Abū ‘Ubayda.', en: 'Yes: ‘Abd al-Rahman ibn Rustam graduated from Abu ‘Ubayda’s institute.' },
        },
        {
          id: 'b6',
          text: { ar: 'إذا صلصلت السلاسل رفع الطلبة أصواتهم بالدرس.', fr: 'Quand les chaînes cliquetaient, les élèves récitaient plus fort.', en: 'When the chains rattled, the students recited more loudly.' },
          answer: false,
          explanation: { ar: 'بل أوقفوا التدريس واشتغلوا بصنع القفاف.', fr: 'Non : ils arrêtaient la leçon et tressaient des paniers.', en: 'No — they stopped the lesson and wove baskets.' },
        },
        {
          id: 'b7',
          text: { ar: 'أدرك أبو عبيدة عددًا من الصحابة، فهو من التابعين.', fr: 'Abū ‘Ubayda connut plusieurs Compagnons : il est un Successeur.', en: 'Abu ‘Ubayda met a number of Companions, so he is a Successor.' },
          answer: true,
          explanation: { ar: 'نعم، وأهمّهم ابن عبّاس وابن عمر وأبو سعيد الخدري وأنس بن مالك رضي الله عنهم.', fr: 'Oui, surtout Ibn ‘Abbās, Ibn ‘Umar, Abū Sa‘īd al-Khudrī et Anas ibn Mālik (qu’Allah les agrée).', en: 'Yes — above all Ibn ‘Abbas, Ibn ‘Umar, Abu Sa‘id al-Khudri and Anas ibn Malik (may God be pleased with them).' },
        },
        {
          id: 'b8',
          text: { ar: 'مكث 40 سنة يتعلّم ثمّ 40 سنة معلّمًا.', fr: 'Il passa 40 ans à apprendre, puis 40 ans à enseigner.', en: 'He spent 40 years learning, then 40 years teaching.' },
          answer: true,
          explanation: { ar: 'نعم، واشتغل مع ذلك بصنع القفاف ليكسب رزقه ويكفل طلبته.', fr: 'Oui, tout en tressant des paniers pour gagner sa vie et prendre en charge ses élèves.', en: 'Yes — while also weaving baskets to earn his living and provide for his students.' },
        },
      ],
    },

    // 17 — Values (drawn from slides 4, 6, 7)
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'ماذا نتعلّم من هذا الدرس؟', fr: 'Que retenir de cette leçon ?', en: 'What do we learn from this lesson?' },
      prompt: {
        ar: 'رقابةٌ شديدة تمنع الإمام من التعليم علنًا. فماذا فعل؟',
        fr: 'Une surveillance sévère empêche l’imam d’enseigner au grand jour. Que fit-il ?',
        en: 'Severe surveillance stops the imam from teaching in the open. What did he do?',
      },
      choices: [
        {
          id: 'stop',
          isCorrect: false,
          label: { ar: 'ترك التعليم حتى تزول الرقابة', fr: 'Il cessa d’enseigner en attendant la fin de la surveillance', en: 'He stopped teaching until the surveillance ended' },
          feedback: { ar: 'فكّر ثانيةً: لم يتوقّف، بل مكث 40 سنة معلّمًا.', fr: 'Réfléchis encore : il ne s’arrêta pas, il enseigna pendant 40 ans.', en: 'Think again: he did not stop — he taught for 40 years.' },
        },
        {
          id: 'cellar',
          isCorrect: true,
          label: { ar: 'واصل التعليم بحكمة في سردابٍ خفيّ', fr: 'Il continua d’enseigner avec sagesse, dans une cave cachée', en: 'He kept teaching wisely, in a hidden cellar' },
          feedback: { ar: 'صحيح — لم يترك رسالته، ولم يعرّض طلبته للخطر: سردابٌ وسلاسل وقفاف.', fr: 'Exact — il n’abandonna pas sa mission et n’exposa pas ses élèves : une cave, des chaînes, des paniers.', en: 'Correct — he neither gave up his mission nor put his students in danger: a cellar, chains and baskets.' },
        },
        {
          id: 'open',
          isCorrect: false,
          label: { ar: 'علّم علنًا دون أيّ احتياط', fr: 'Il enseigna au grand jour, sans aucune précaution', en: 'He taught openly with no precautions' },
          feedback: { ar: 'تذكّر السلاسل على المدخل: كان الإمام حذرًا يحمي طلبته.', fr: 'Souviens-toi des chaînes à l’entrée : l’imam était prudent et protégeait ses élèves.', en: 'Remember the chains at the entrance: the imam was careful and protected his students.' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من سيرة أبي عبيدة — اقلب كلّ بطاقة', fr: 'Des valeurs de la vie d’Abū ‘Ubayda — retourne chaque carte', en: 'Values from Abu ‘Ubayda’s life — flip each card' },
      values: [
        {
          id: 'patience',
          value: { ar: 'الصبر على طلب العلم', fr: 'La patience dans la quête du savoir', en: 'Patience in seeking knowledge' },
          evidence: { ar: 'مكث 40 سنة يتعلّم ثمّ 40 سنة معلّمًا.', fr: 'Il passa 40 ans à apprendre, puis 40 ans à enseigner.', en: 'He spent 40 years learning, then 40 years teaching.' },
        },
        {
          id: 'work',
          value: { ar: 'الأكل من عمل اليد', fr: 'Vivre du travail de ses mains', en: 'Living by the work of one’s hands' },
          evidence: { ar: 'صنع القفاف ليكسب به الرزق ويكفل طلبته.', fr: 'Il tressait des paniers pour gagner sa vie et prendre en charge ses élèves.', en: 'He wove baskets to earn his living and provide for his students.' },
        },
        {
          id: 'wisdom',
          value: { ar: 'الحكمة والحذر', fr: 'Sagesse et prudence', en: 'Wisdom and caution' },
          evidence: { ar: 'مدرسةٌ في سردابٍ خفيّ، وسلاسلُ على المدخل تنذر بالغريب.', fr: 'Une école dans une cave cachée, et des chaînes à l’entrée pour avertir de l’étranger.', en: 'A school in a hidden cellar, with chains at the entrance to warn of strangers.' },
        },
        {
          id: 'care',
          value: { ar: 'رعاية طلّاب العلم', fr: 'Prendre soin des étudiants', en: 'Caring for students' },
          evidence: { ar: 'آوى الطلبة من كلّ الأقطار، ورعاهم بنفسه، وكفل مأكلهم ومقامهم.', fr: 'Il accueillit des élèves de toutes les contrées, veilla sur eux lui-même, les nourrit et les logea.', en: 'He sheltered students from every land, cared for them himself, and paid for their food and lodging.' },
        },
        {
          id: 'verify',
          value: { ar: 'التثبّت في أخذ العلم', fr: 'Vérifier d’où vient le savoir', en: 'Checking where knowledge comes from' },
          evidence: { ar: 'كان لا ينقل الحديث إلا عن الثقات.', fr: 'Il ne rapportait le hadith que de gens dignes de confiance.', en: 'He narrated hadith only from the trustworthy.' },
        },
      ],
    },

    // 18 — Wheel: whole-class review
    {
      kind: 'wheel',
      id: 'class-wheel',
      title: { ar: 'عجلة السرداب', fr: 'La roue de la cave', en: 'The cellar wheel' },
      intro: {
        ar: 'لعبةٌ للقسم كلّه: أدر العجلة، وأجب شفويًّا قبل كشف الجواب. من يجمع أكثر النقاط؟',
        fr: 'Un jeu pour toute la classe : fais tourner la roue et réponds à voix haute avant de dévoiler la réponse. Qui marquera le plus de points ?',
        en: 'A game for the whole class: spin the wheel and answer out loud before revealing the answer. Who will score the most?',
      },
      segments: [
        {
          id: 'g-origin',
          label: { ar: 'النسب', fr: 'Origine', en: 'Origin' },
          question: { ar: 'ما أصل أبي عبيدة؟ وإلى أيّ قبيلةٍ ينتمي بالولاء؟', fr: 'Quelle est l’origine d’Abū ‘Ubayda ? À quelle tribu est-il rattaché ?', en: 'What was Abu ‘Ubayda’s origin? Which tribe was he attached to?' },
          answer: { ar: 'فارسيّ الأصل، ينتمي إلى بني تميم بالولاء، وهو مولًى لعروة بن أُدَيّة.', fr: 'D’origine perse, rattaché aux Banū Tamīm ; il est le client de ‘Urwa ibn Udayya.', en: 'Persian by origin, attached to Banu Tamim by clientage; he was the client of ‘Urwa ibn Udayya.' },
        },
        {
          id: 'g-teachers',
          label: { ar: 'الأساتذة', fr: 'Maîtres', en: 'Teachers' },
          question: { ar: 'اذكر اثنين ممّن أخذ عنهم العلم.', fr: 'Cite deux de ceux dont il reçut le savoir.', en: 'Name two of those he took knowledge from.' },
          answer: { ar: 'جابر بن زيد وصحار العبدي، وأدرك من الصحابة ابن عبّاس وابن عمر وأبا سعيد الخدري وأنس بن مالك رضي الله عنهم.', fr: 'Jābir ibn Zayd et Ṣuḥār al-‘Abdī ; il connut aussi Ibn ‘Abbās, Ibn ‘Umar, Abū Sa‘īd al-Khudrī et Anas ibn Mālik (qu’Allah les agrée).', en: 'Jabir ibn Zayd and Suhar al-‘Abdi; he also met the Companions Ibn ‘Abbas, Ibn ‘Umar, Abu Sa‘id al-Khudri and Anas ibn Malik (may God be pleased with them).' },
        },
        {
          id: 'g-prison',
          label: { ar: 'السجن', fr: 'Prison', en: 'Prison' },
          question: { ar: 'من سجنه؟ ومتى خرج؟', fr: 'Qui l’emprisonna ? Quand sortit-il ?', en: 'Who imprisoned him? When did he get out?' },
          answer: { ar: 'سجنه الحجّاج بن يوسف والي العراق، ولم يخرج إلا بعد موته سنة 95 هـ.', fr: 'Al-Ḥajjāj ibn Yūsuf, gouverneur d’Irak ; il ne sortit qu’après sa mort, en 95 H.', en: 'Al-Hajjaj ibn Yusuf, governor of Iraq; he only got out after al-Hajjaj died in 95 AH.' },
        },
        {
          id: 'g-cellar',
          label: { ar: 'السرداب', fr: 'Cave', en: 'Cellar' },
          question: { ar: 'لماذا اتّخذ مدرسته في سرداب؟', fr: 'Pourquoi installa-t-il son école dans une cave ?', en: 'Why did he set up his school in a cellar?' },
          answer: { ar: 'لأنّ رقابة الأمويين كانت شديدة، فأخفى مدرسته في سردابٍ في البصرة.', fr: 'Parce que la surveillance des Omeyyades était sévère : il cacha son école dans une cave de Bassora.', en: 'Because Umayyad surveillance was severe, so he hid his school in a cellar in Basra.' },
        },
        {
          id: 'g-chains',
          label: { ar: 'السلاسل', fr: 'Chaînes', en: 'Chains' },
          question: { ar: 'ما فائدة السلاسل؟ وماذا يفعلون إذا صلصلت؟', fr: 'À quoi servaient les chaînes ? Que faisaient-ils quand elles cliquetaient ?', en: 'What were the chains for? What did they do when they rattled?' },
          answer: { ar: 'تنذر بدخول غريب؛ فيوقفون التدريس ويشتغلون بصنع القفاف، ثمّ يرجعون إلى الدرس إذا غادر.', fr: 'Elles avertissaient de l’arrivée d’un étranger : ils arrêtaient la leçon et tressaient des paniers, puis reprenaient après son départ.', en: 'They warned that a stranger was coming: they stopped the lesson and wove baskets, then went back to it once he left.' },
        },
        {
          id: 'g-assemblies',
          label: { ar: 'المجالس', fr: 'Assemblées', en: 'Assemblies' },
          question: { ar: 'اذكر المجالس الثلاثة في معهد الإمام.', fr: 'Cite les trois assemblées de l’institut de l’imam.', en: 'Name the three assemblies in the imam’s institute.' },
          answer: { ar: 'مجلس الشيوخ، وحلقة حملة العلم (الدعاة)، ومجالس العامّة والمبتدئين.', fr: 'L’assemblée des cheikhs, le cercle des porteurs du savoir (prédicateurs), et les assemblées du public et des débutants.', en: 'The assembly of the elders, the circle of the bearers of knowledge (callers), and the assemblies for the public and beginners.' },
        },
        {
          id: 'g-letter',
          label: { ar: 'الرسالة', fr: 'Lettre', en: 'Letter' },
          question: { ar: 'ما موضوع رسالته إلى أهل المغرب؟ واذكر كتابًا يُنسب إليه.', fr: 'Quel est le sujet de sa lettre aux gens du Maghreb ? Cite un livre à son nom.', en: 'What was his letter to the people of the Maghreb about? Name a book attributed to him.' },
          answer: { ar: 'الزكاة. ومن كتبه: «مسائل أبي عبيدة» و«كتابٌ في الزكاة» و«رسائل أبي عبيدة».', fr: 'La zakat. Ses livres : « Les Questions d’Abū ‘Ubayda », « Un livre sur la zakat », « Les Lettres d’Abū ‘Ubayda ».', en: 'Zakat. His books: "The Questions of Abu ‘Ubayda", "A Book on Zakat" and "The Letters of Abu ‘Ubayda".' },
        },
        {
          id: 'g-students',
          label: { ar: 'التلاميذ', fr: 'Élèves', en: 'Students' },
          question: { ar: 'اذكر ثلاثةً ممّن تخرّجوا من معهده.', fr: 'Cite trois élèves sortis de son institut.', en: 'Name three graduates of his institute.' },
          answer: { ar: 'الربيع بن حبيب صاحب المسند، وعبد الله بن يحيى (طالب الحقّ)، وعبد الرحمن بن رستم مؤسّس الدولة الرستمية.', fr: 'Al-Rabī‘ ibn Ḥabīb, auteur du Musnad ; ‘Abd Allāh ibn Yaḥyā (Ṭālib al-Ḥaqq) ; ‘Abd al-Raḥmān ibn Rustam, fondateur de l’État rustamide.', en: 'Al-Rabi‘ ibn Habib, author of the Musnad; ‘Abdullah ibn Yahya (Talib al-Haqq); and ‘Abd al-Rahman ibn Rustam, founder of the Rustamid state.' },
        },
      ],
    },

    // 19 — Completion (slide 7)
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'أهمّ وسائل تبليغ أمانة الدين: التعليم وتخريج الدعاة. فالإمام أبو عبيدة مسلم بن أبي كريمة، الإمام الثاني لأهل الدعوة والاستقامة، فتح معهدًا في سردابٍ خفيّ بالبصرة آوى فيه طلبة العلم من كلّ الآفاق، حتى يعلّموا الناس دينهم في بلادهم.',
        fr: 'Les meilleurs moyens de transmettre le dépôt de la religion : enseigner et former des prédicateurs. L’imam Abū ‘Ubayda Muslim ibn Abī Karīma, deuxième imam des gens de l’Appel et de la Rectitude, ouvrit dans une cave cachée de Bassora un institut accueillant des étudiants de tous les horizons, pour qu’ils enseignent aux gens leur religion dans leur pays.',
        en: 'The most important ways of passing on the trust of the religion: teaching and training callers. Imam Abu ‘Ubayda Muslim ibn Abi Karima, second imam of the People of the Call and Rectitude, opened an institute in a hidden cellar in Basra that sheltered students from every horizon, so that they could teach people their religion in their own lands.',
      },
      learned: [
        {
          ar: 'أبو عبيدة (نحو 50 – نحو 145 هـ) فارسيّ الأصل، تميميّ بالولاء، مولًى لعروة بن أُدَيّة، وهو الإمام الثاني بعد جابر بن زيد.',
          fr: 'Abū ‘Ubayda (vers 50 – vers 145 H), d’origine perse, rattaché aux Banū Tamīm, client de ‘Urwa ibn Udayya, est le deuxième imam après Jābir ibn Zayd.',
          en: 'Abu ‘Ubayda (about 50 – about 145 AH), Persian by origin, a Tamimi by clientage and client of ‘Urwa ibn Udayya, is the second imam after Jabir ibn Zayd.',
        },
        {
          ar: 'أخذ العلم عن جابر وصحار العبدي وبعض الصحابة رضي الله عنهم، وسجنه الحجّاج فلم يخرج إلا سنة 95 هـ، وأبقى الإمامة كتمانًا.',
          fr: 'Il reçut le savoir de Jābir, de Ṣuḥār al-‘Abdī et de certains Compagnons (qu’Allah les agrée) ; emprisonné par al-Ḥajjāj, il ne sortit qu’en 95 H, et garda l’imamat secret.',
          en: 'He took knowledge from Jabir, Suhar al-‘Abdi and some of the Companions (may God be pleased with them); al-Hajjaj imprisoned him until 95 AH, and he kept the imamate secret.',
        },
        {
          ar: 'مكث 40 سنة يتعلّم ثمّ 40 سنة معلّمًا، وصنع القفاف ليكسب رزقه ويكفل طلبته؛ وكانت سلاسل المدخل تنذرهم بالغريب.',
          fr: 'Il passa 40 ans à apprendre puis 40 ans à enseigner, et tressa des paniers pour vivre et prendre en charge ses élèves ; les chaînes de l’entrée les avertissaient de l’étranger.',
          en: 'He spent 40 years learning then 40 years teaching, and wove baskets to earn a living and support his students; the chains at the entrance warned them of strangers.',
        },
        {
          ar: 'انتقى طلبته من كلّ الجهات ليعلّم كلٌّ أهل بلده، وقسّمهم على ثلاثة مجالس: الشيوخ، وحملة العلم، والعامّة والمبتدئين.',
          fr: 'Il choisit ses élèves de toutes les régions pour que chacun instruise son pays, et les répartit en trois assemblées : les cheikhs, les porteurs du savoir, le public et les débutants.',
          en: 'He chose students from every direction so each could teach his own people, and divided them into three assemblies: the elders, the bearers of knowledge, and the public and beginners.',
        },
        {
          ar: 'لم يكتب الكتب لاشتغاله بالتعليم، ووصلتنا رسالته في الزكاة إلى أهل المغرب، وروايته في مسند الربيع؛ وكان لا ينقل إلا عن الثقات.',
          fr: 'Pris par l’enseignement, il n’écrivit pas de livres ; nous sont parvenues sa lettre sur la zakat aux gens du Maghreb et sa transmission dans le Musnad d’al-Rabī‘ ; il ne rapportait que de gens sûrs.',
          en: 'He was too busy teaching to write books; what reached us includes his letter on zakat to the people of the Maghreb and his narration in al-Rabi‘’s Musnad; he narrated only from the trustworthy.',
        },
        {
          ar: 'تخرّج من معهده الربيع بن حبيب، وعبد الله بن يحيى (طالب الحقّ)، وعبد الرحمن بن رستم مؤسّس الدولة الرستمية، وحملة العلم إلى المشرق والمغرب.',
          fr: 'De son institut sortirent al-Rabī‘ ibn Ḥabīb, ‘Abd Allāh ibn Yaḥyā (Ṭālib al-Ḥaqq), ‘Abd al-Raḥmān ibn Rustam, fondateur de l’État rustamide, et les porteurs du savoir vers l’Orient et le Maghreb.',
          en: 'From his institute came al-Rabi‘ ibn Habib, ‘Abdullah ibn Yahya (Talib al-Haqq), ‘Abd al-Rahman ibn Rustam, founder of the Rustamid state, and the bearers of knowledge to the East and the Maghreb.',
        },
      ],
    },
  ],
}
