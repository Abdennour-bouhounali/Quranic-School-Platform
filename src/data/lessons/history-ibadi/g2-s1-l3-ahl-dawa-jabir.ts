import type { Lesson } from '../../types'

// Source: Ibadite History textbook (Other ressources/Ibadite_History_S3.pdf), lesson "الإمام جابر بن زيد", pages 9–15.
//   Slide 2 — الإشكالية: تعود تسمية أهل الدعوة والاستقامة إلى سنة 64 هـ، بعد انقسام حلقة الإمام أبي بلال، واقتداء أهل الدعوة والاستقامة بالعالم الجليل جابر بن زيد
//             الذي فرّغ حياته لطلب العلم وأخذ الدين من المنبع الصافي عن الرسول، عندما أخذ الاجتهاد يتزايد والآراء والأقوال تتعدّد. فمن هو إمام أهل الدعوة؟
//   Slide 3 — الإمام جابر إمام أهل الدعوة: حضر حلقة أبي بلال مرداس مبكرًا، أصبح عالمًا رائدًا ومرجعًا بعد وفاة أبي بلال سنة 61 هـ، الحجّاج بن يوسف على العراق يتابع حركاته،
//             فكان الإمام يتستر وأصحابه لا يفصحون عن آرائهم، ولم يسلم من سجن الحجاج ثم نفيه إلى عُمان. بطاقة الإمام: النسب، المولد، التعلّم، المكانة، الأعمال، الآثار، الوفاة سنة 93 هـ.
//   Slide 4 — منابع علم الإمام جابر: «أدركت سبعين بدريًّا فحويت ما عندهم من العلم إلا البحر» (ابن عباس)، عائشة «اسأل يا جابر فلا حياء في الدين»، أبو هريرة وعبد الله بن عمر وعبد الله بن مسعود وأنس بن مالك.
//   Slide 5 — مكانة الإمام جابر العلمية: أقوال ابن عباس وابن عمر وقتادة، سعة علمه واجتهاده وتبحّره في الفقه والسنة، رواية متصلة إلى الرسول، ثقة عدل ضابط.
//   Slide 6 — من آثار الإمام جابر: توزّع علمه بين كبار تلاميذه كأبي عبيدة مسلم بن أبي كريمة، كتاب النكاح وكتاب الصلاة، الربيع بن حبيب في مسنده، ضمام بن السائب، تدوين الفقه مبكّرًا، «ديوان جابر» ألّفه وهو أوّل كتاب أُلّف في الفقه، بقي في حوزة أبي عبيدة ثمّ اختفى أثره.
// Every fact below is taken from those slides; nothing is added from outside them.
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): the scenes are told through study circles, books, light and landscape.

const IMG = '/images/lessons/ahl-dawa-jabir'

export const ahlDawaJabir: Lesson = {
  id: 'history-ibadi-g2-s1-l3',
  gradeId: 'history-ibadi-g2',
  moduleId: 'history-ibadi-g2',
  semesterId: 'history-ibadi-g2-s1',
  order: 3,
  status: 'published',
  estimatedMinutes: 40,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'ساحةُ مسجدٍ قديم بأعمدةٍ حجرية وأقواسٍ عالية، وعلى الأرض مصاحفُ وكتبٌ مفتوحة على حوامل خشبية في ضوء الفجر الذهبي',
    fr: 'La cour d’une mosquée ancienne aux colonnes de pierre et aux hautes arcades, des livres ouverts sur des pupitres en bois dans la lumière dorée de l’aube',
    en: 'The courtyard of an ancient mosque with stone columns and tall arches, open books on wooden stands in the golden light of dawn',
  },
  title: {
    ar: 'أهل الدعوة والاستقامة',
    fr: 'Les gens de l’Appel et de la Rectitude',
    en: 'The People of the Call and Rectitude',
  },
  description: {
    ar: 'من هو إمام أهل الدعوة؟ تتبّع رحلة جابر بن زيد من عُمان إلى البصرة، ومن بحر ابن عبّاس إلى بيت عائشة رضي الله عنها، واكتشف كيف حفظ علم الصحابة للأجيال رغم السجن والنفي.',
    fr: 'Qui est l’imam des gens de l’Appel ? Suis le parcours de Jābir ibn Zayd, d’Oman à Bassora, de « la mer » Ibn ‘Abbās à la maison de ‘Ā’isha, et découvre comment il préserva le savoir des Compagnons malgré la prison et l’exil.',
    en: 'Who is the imam of the People of the Call? Follow Jabir ibn Zayd’s path from Oman to Basra, from the "sea" Ibn ‘Abbas to the house of ‘A’isha, and see how he preserved the Companions’ knowledge despite prison and exile.',
  },

  sections: [
    // 01 — Hero (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'ساحةُ مسجدٍ قديم بأعمدةٍ حجرية وأقواسٍ عالية، وعلى الأرض مصاحفُ وكتبٌ مفتوحة على حوامل خشبية في ضوء الفجر الذهبي',
        fr: 'La cour d’une mosquée ancienne aux colonnes de pierre et aux hautes arcades, des livres ouverts sur des pupitres en bois dans la lumière dorée de l’aube',
        en: 'The courtyard of an ancient mosque with stone columns and tall arches, open books on wooden stands in the golden light of dawn',
      },
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'حين تكثر الآراء وتتعدّد الأقوال، بمن يقتدي الناس؟',
        fr: 'Quand les opinions se multiplient et les avis divergent, qui les gens suivent-ils ?',
        en: 'When opinions multiply and sayings differ, whom do people follow?',
      },
      intro: {
        ar: 'تعود تسمية «أهل الدعوة والاستقامة» إلى سنة 64 هـ، بعد انقسام حلقة الإمام أبي بلال. اقتدى أهل الدعوة بعالمٍ جليلٍ فرّغ حياته لطلب العلم وأخذ الدين من المنبع الصافي عن الرسول ﷺ، حين أخذ الاجتهاد يتزايد والآراء والأقوال تتعدّد. فمن هو إمام أهل الدعوة؟',
        fr: 'Le nom de « gens de l’Appel et de la Rectitude » remonte à l’an 64 de l’Hégire, après la division du cercle de l’imam Abū Bilāl. Ils suivirent un grand savant qui consacra sa vie à la quête du savoir et puisa la religion à la source pure auprès du Messager ﷺ, alors que l’effort d’interprétation s’intensifiait et que les avis se multipliaient. Qui est l’imam des gens de l’Appel ?',
        en: 'The name "People of the Call and Rectitude" goes back to the year 64 AH, after the study circle of Imam Abu Bilal split. They followed a great scholar who devoted his life to seeking knowledge and took the religion from the pure source, the Messenger ﷺ, at a time when independent reasoning was growing and opinions were multiplying. Who is the imam of the People of the Call?',
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
          question: { ar: 'من هو الإمام جابر بن زيد؟', fr: 'Qui est l’imam Jābir ibn Zayd ?', en: 'Who is Imam Jabir ibn Zayd?' },
          target: 'reading-imam',
          teaser: { ar: 'عالمٌ فرّغ حياته للعلم.', fr: 'Un savant qui consacra sa vie au savoir.', en: 'A scholar who gave his life to knowledge.' },
        },
        {
          id: 'm2',
          question: { ar: 'من أين أخذ علمه؟ وماذا قال فيه العلماء؟', fr: 'D’où tira-t-il son savoir ? Que dirent de lui les savants ?', en: 'Where did he get his knowledge? What did scholars say of him?' },
          target: 'reading-sources',
          teaser: { ar: 'من «البحر» إلى بيت أمّ المؤمنين.', fr: 'De « la mer » à la maison de la Mère des croyants.', en: 'From "the sea" to the house of the Mother of the Believers.' },
        },
        {
          id: 'm3',
          question: { ar: 'ماذا ترك من آثار؟', fr: 'Quels écrits laissa-t-il ?', en: 'What works did he leave behind?' },
          target: 'reading-works',
          teaser: { ar: 'كتبٌ وديوانٌ ضاع أثره.', fr: 'Des livres et un recueil dont la trace s’est perdue.', en: 'Books and a collection whose trace was lost.' },
        },
      ],
    },

    // 03 — Reading: who is the imam (slides 2–3)
    {
      kind: 'reading',
      id: 'reading-imam',
      title: { ar: 'اقرأ: إمام أهل الدعوة', fr: 'Lis : l’imam des gens de l’Appel', en: 'Read: the imam of the People of the Call' },
      intro: {
        ar: 'اقرأ تعريف الدرس بالإمام جابر، ثمّ املأ بطاقته في اللعبة التالية.',
        fr: 'Lis la présentation de l’imam Jābir, puis remplis sa carte d’identité dans le jeu suivant.',
        en: 'Read the lesson’s introduction to Imam Jabir, then fill in his identity card in the next game.',
      },
      image: `${IMG}/basra-halaqa.png`,
      imageAlt: {
        ar: 'حلقةُ علمٍ تحت الأعمدة: وسائدُ فارغة مرتّبة في دائرة حول حاملٍ خشبيّ يحمل كتابًا مفتوحًا، وأقلامٌ ودواة',
        fr: 'Un cercle d’étude sous les colonnes : des coussins vides disposés en cercle autour d’un pupitre portant un livre ouvert, des plumes et un encrier',
        en: 'A study circle beneath the columns: empty cushions arranged in a ring around a wooden stand holding an open book, with quills and an inkwell',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'في حلقة أبي بلال', fr: 'Dans le cercle d’Abū Bilāl', en: 'In Abu Bilal’s circle' },
          text: {
            ar: 'حضر جابر بن زيد في وقتٍ مبكّر حلقة الإمام أبي بلال مرداس، التي كان من أهمّ فوائدها الدعوة إلى الله بالحكمة والموعظة الحسنة.',
            fr: 'Jābir ibn Zayd fréquenta très tôt le cercle de l’imam Abū Bilāl Mirdās, dont l’un des principaux bienfaits était l’appel à Dieu par la sagesse et la bonne exhortation.',
            en: 'Jabir ibn Zayd attended, early on, the circle of Imam Abu Bilal Mirdas, one of whose chief benefits was calling to God with wisdom and fair preaching.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'عالمٌ ومرجع', fr: 'Un savant, une référence', en: 'A scholar and a reference' },
          text: {
            ar: 'سرعان ما أصبح عالمًا رائدًا ومرجعًا لها، وظهر دوره في توجيه أهل الدعوة بعد وفاة الإمام أبي بلال في سنة 61 هـ. ويُعتبر الإمام جابر المؤسّس لفقهها وقواعدها.',
            fr: 'Il devint vite un savant éminent et une référence pour ce cercle ; son rôle dans la direction des gens de l’Appel apparut après la mort de l’imam Abū Bilāl en l’an 61 de l’Hégire. L’imam Jābir est considéré comme le fondateur du droit et des principes des gens de l’Appel.',
            en: 'He soon became a leading scholar and its reference, and his role in guiding the People of the Call emerged after Imam Abu Bilal’s death in the year 61 AH. Imam Jabir is regarded as the founder of the jurisprudence and principles of the People of the Call.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'بطاقة الإمام', fr: 'La carte de l’imam', en: 'The imam’s card' },
          text: {
            ar: 'من قبيلة أزد بعُمان، وُلد حوالي سنة 21 هـ في قرية فرق بولاية نزوى. تعلّم في البصرة عند كبار الصحابة، وفي الحجاز عند أمّنا عائشة رضي الله عنها وعبد الله بن عبّاس رضي الله عنهما. وهو إمام مذهب أهل الحقّ والاستقامة، راسخٌ في العلم، وشهد له الصحابة بذلك.',
            fr: 'De la tribu d’Azd en Oman, il naquit vers l’an 21 de l’Hégire dans le village de Farq, wilāya de Nizwā. Il étudia à Bassora auprès de grands Compagnons, et au Hedjaz auprès de ‘Ā’isha (qu’Allah l’agrée) et de ‘Abd Allāh ibn ‘Abbās (qu’Allah les agrée, lui et son père). Il est l’imam de l’école des gens de la Vérité et de la Rectitude, solide en science, et les Compagnons en témoignèrent.',
            en: 'Of the tribe of Azd in Oman, he was born around 21 AH in the village of Farq, in the wilaya of Nizwa. He studied in Basra with senior Companions, and in the Hijaz with ‘A’isha (may God be pleased with her) and ‘Abdullah ibn ‘Abbas (may God be pleased with him and his father). He is the imam of the school of the People of Truth and Rectitude, firmly grounded in knowledge, as the Companions testified.',
          },
        },
        {
          id: 'p6',
          heading: { ar: 'أعماله وآثاره', fr: 'Ses œuvres et son héritage', en: 'His works and legacy' },
          text: {
            ar: 'شكّل حلق العلم ليفقّه الناس في دينهم، وحوى علوم الصحابة (منهم سبعون بدريًّا) وبلّغها لروّاد الحلقات، ورتّب الأحاديث ورسخ في العقيدة والفقه وبلّغها. ويعتمد المذهب على ما بلّغه من علم الصحابة عن الرسول ﷺ، وترك ديوانًا كبيرًا لم يصل إلينا، نُقل منه ما حفظه الأئمّة وتلاميذه.',
            fr: 'Il forma des cercles de savoir pour instruire les gens dans leur religion, recueillit le savoir des Compagnons (dont soixante-dix combattants de Badr) et le transmit à ceux qui fréquentaient ses cercles ; il ordonna les hadiths, s’enracina dans le dogme et le droit et les transmit. L’école repose sur ce qu’il transmit du savoir des Compagnons rapporté du Messager ﷺ, et il laissa un grand Dīwān qui ne nous est pas parvenu ; on en a transmis ce que les imams et ses élèves avaient retenu.',
            en: 'He formed circles of learning to teach people their religion, gathered the knowledge of the Companions (seventy of them veterans of Badr) and passed it on to those who attended his circles; he organized the hadith, grounded himself in creed and jurisprudence and conveyed them. The school rests on what he conveyed of the Companions’ knowledge from the Messenger ﷺ, and he left a large Diwan that did not reach us; what the imams and his students preserved was passed on from it.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'في زمن الحجّاج', fr: 'À l’époque d’al-Ḥajjāj', en: 'In the time of al-Hajjaj' },
          text: {
            ar: 'كان الوالي الأمويّ على العراق، الحجّاج بن يوسف، يتابع حركاته، فكان الإمام يتستّر، وكان أصحابه لا يُفصحون عن آرائهم لئلّا يتعرّضوا للمضايقات من الولاة ويضيع الدين بفقدانه. ونظرًا لمكانة عبد الله بن إباض وسمعته وسمعة قبيلته بني تميم التي يرهبها ولاة العراق، كان هو يتحدّث ويناقش بآراء إمام أهل الدعوة جابر بن زيد.',
            fr: 'Le gouverneur omeyyade d’Irak, al-Ḥajjāj ibn Yūsuf, surveillait ses mouvements ; l’imam se cachait donc, et ses compagnons ne révélaient pas leurs avis pour ne pas subir les vexations des gouverneurs et pour que la religion ne soit pas perdue avec lui. Grâce au rang et au renom de ‘Abd Allāh ibn Ibāḍ et de sa tribu, les Banū Tamīm, que redoutaient les gouverneurs d’Irak, c’est lui qui parlait et débattait selon les avis de l’imam des gens de l’Appel, Jābir ibn Zayd.',
            en: 'The Umayyad governor of Iraq, al-Hajjaj ibn Yusuf, was tracking his movements, so the imam kept himself concealed, and his companions did not disclose their views, so as not to suffer harassment from the governors and so that the religion would not be lost with him. Because of the standing and reputation of ‘Abdullah ibn Ibad and of his tribe, Banu Tamim, whom the governors of Iraq feared, it was he who spoke and debated according to the views of the imam of the People of the Call, Jabir ibn Zayd.',
          },
        },
        {
          id: 'p5',
          heading: { ar: 'السجن والنفي', fr: 'Prison et exil', en: 'Prison and exile' },
          text: {
            ar: 'ورغم تستّره لم يسلم من سجن الحجّاج، ثمّ نفاه إلى عُمان. وتوفّي الإمام جابر سنة 93 هـ.',
            fr: 'Malgré sa discrétion, il n’échappa pas à la prison d’al-Ḥajjāj, qui l’exila ensuite en Oman. L’imam Jābir mourut en l’an 93 de l’Hégire.',
            en: 'Despite his concealment, he did not escape al-Hajjaj’s prison, and was then exiled to Oman. Imam Jabir died in the year 93 AH.',
          },
        },
      ],
    },

    // 04 — Placement: the imam's identity card (slide 3)
    {
      kind: 'placement',
      id: 'identity-card',
      title: { ar: 'بطاقة الإمام جابر', fr: 'La carte d’identité de l’imam Jābir', en: 'Imam Jabir’s identity card' },
      intro: {
        ar: 'اسحب كلّ معلومةٍ إلى الخانة الصحيحة في بطاقة الإمام، أو اضغط المعلومة ثمّ الخانة.',
        fr: 'Glisse chaque information dans la bonne case de la carte, ou touche l’information puis la case.',
        en: 'Drag each fact to the right box on the imam’s card, or tap the fact and then the box.',
      },
      slots: [
        { id: 'nasab', label: { ar: 'نسبه', fr: 'Sa tribu', en: 'His tribe' } },
        { id: 'mawlid', label: { ar: 'مولده', fr: 'Sa naissance', en: 'His birth' } },
        { id: 'taallum', label: { ar: 'تعلّمه', fr: 'Ses études', en: 'His studies' } },
        { id: 'makana', label: { ar: 'مكانته', fr: 'Son rang', en: 'His standing' } },
        { id: 'aamal', label: { ar: 'أعماله', fr: 'Ses œuvres', en: 'His works' } },
        { id: 'athar', label: { ar: 'آثاره', fr: 'Son héritage', en: 'His legacy' } },
        { id: 'wafat', label: { ar: 'وفاته', fr: 'Sa mort', en: 'His death' } },
      ],
      cards: [
        {
          id: 'c-nasab',
          slotId: 'nasab',
          label: { ar: 'من قبيلة أزد بعُمان', fr: 'De la tribu d’Azd, en Oman', en: 'From the tribe of Azd in Oman' },
          hint: { ar: 'هذه معلومةٌ عن أصله وقبيلته.', fr: 'Cette information concerne son origine et sa tribu.', en: 'This fact is about his origin and tribe.' },
        },
        {
          id: 'c-mawlid',
          slotId: 'mawlid',
          label: { ar: 'وُلد حوالي سنة 21 هـ في قرية فرق بولاية نزوى', fr: 'Né vers l’an 21 de l’Hégire dans le village de Farq, wilāya de Nizwā', en: 'Born around 21 AH in the village of Farq, in the wilaya of Nizwa' },
          hint: { ar: 'تذكّر: مكانٌ وتاريخٌ تقريبيّ — أيّ خانةٍ تناسبه؟', fr: 'Un lieu et une date approximative — quelle case lui correspond ?', en: 'A place and an approximate date — which box suits it?' },
        },
        {
          id: 'c-taallum',
          slotId: 'taallum',
          label: { ar: 'في البصرة عند كبار الصحابة، وفي الحجاز عند أمّنا عائشة رضي الله عنها وعبد الله بن عبّاس', fr: 'À Bassora auprès de grands Compagnons, et au Hedjaz auprès de ‘Ā’isha et d’Ibn ‘Abbās', en: 'In Basra with senior Companions, and in the Hijaz with ‘A’isha and ‘Abdullah ibn ‘Abbas' },
          hint: { ar: 'هذه أسماء أساتذته وأماكن دراسته.', fr: 'Ce sont les noms de ses maîtres et les lieux de ses études.', en: 'These are the names of his teachers and places of study.' },
        },
        {
          id: 'c-makana',
          slotId: 'makana',
          label: { ar: 'إمام مذهب أهل الحقّ والاستقامة، راسخٌ في العلم', fr: 'Imam de l’école des gens de la Vérité et de la Rectitude, solide en science', en: 'Imam of the school of the People of Truth and Rectitude, firmly grounded in knowledge' },
          hint: { ar: 'هذا وصفٌ لمقامه بين الناس.', fr: 'C’est une description de son rang parmi les gens.', en: 'This describes his standing among the people.' },
        },
        {
          id: 'c-aamal',
          slotId: 'aamal',
          label: { ar: 'شكّل حلق العلم ليفقّه الناس في دينهم، ورتّب الأحاديث', fr: 'Forma des cercles de savoir pour instruire les gens, et ordonna les hadiths', en: 'Formed circles of learning to teach people, and organized the hadith' },
          hint: { ar: 'هذا شيءٌ قام به في حياته.', fr: 'C’est une chose qu’il accomplit de son vivant.', en: 'This is something he did during his life.' },
        },
        {
          id: 'c-athar',
          slotId: 'athar',
          label: { ar: 'ترك ديوانًا كبيرًا لم يصل إلينا', fr: 'Laissa un grand Dīwān qui ne nous est pas parvenu', en: 'Left a large Diwan that did not reach us' },
          hint: { ar: 'هذا ما بقي بعده.', fr: 'C’est ce qui resta après lui.', en: 'This is what remained after him.' },
        },
        {
          id: 'c-wafat',
          slotId: 'wafat',
          label: { ar: 'سنة 93 هـ', fr: 'L’an 93 de l’Hégire', en: 'The year 93 AH' },
          hint: { ar: 'تاريخٌ يأتي في آخر السيرة.', fr: 'Une date qui vient à la fin de la vie.', en: 'A date that comes at the end of a life.' },
        },
      ],
    },

    // 05 — Reading: the sources of his knowledge (slide 4)
    {
      kind: 'reading',
      id: 'reading-sources',
      title: { ar: 'اقرأ: منابع علم الإمام جابر', fr: 'Lis : les sources du savoir de l’imam Jābir', en: 'Read: the sources of Imam Jabir’s knowledge' },
      intro: { ar: 'من أين أخذ جابر علمه؟ اقرأ، ثمّ سِر في رحلته.', fr: 'D’où Jābir tira-t-il son savoir ? Lis, puis suis son voyage.', en: 'Where did Jabir get his knowledge? Read, then follow his journey.' },
      image: `${IMG}/ocean-of-knowledge.png`,
      imageAlt: { ar: 'محيطٌ أزرق عند الشروق تتحوّل أمواجه إلى كتبٍ مفتوحة طافية، وعلى الأفق شاطئٌ بعيد', fr: 'Un océan bleu au lever du soleil dont les vagues deviennent des livres ouverts flottants, une côte lointaine à l’horizon', en: 'A blue ocean at sunrise whose waves turn into floating open books, a distant shore on the horizon' },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'عن كبار الصحابة والتابعين', fr: 'Auprès des grands Compagnons et Successeurs', en: 'From senior Companions and Successors' },
          text: { ar: 'أخذ الإمام جابر بن زيد العلم عن كثيرٍ من صحابة رسول الله ﷺ والتابعين، وأخذ عنهم علوم الشرع. ويقول عن نفسه: «أدركتُ سبعين بدريًّا فحويتُ ما عندهم من العلم إلّا البحر»، وكان يقصد بالبحر عبد الله بن عبّاس رضي الله عنهما.', fr: 'L’imam Jābir ibn Zayd reçut le savoir de nombreux Compagnons du Messager ﷺ et des Successeurs, et apprit d’eux les sciences de la loi. Il dit de lui-même : « J’ai connu soixante-dix Compagnons de Badr et j’ai recueilli leur savoir, sauf celui de la mer », entendant par « la mer » ‘Abd Allāh ibn ‘Abbās (qu’Allah l’agrée).', en: 'Imam Jabir ibn Zayd took knowledge from many Companions of God’s Messenger ﷺ and from the Successors, and learned the sciences of the law from them. He says of himself: "I met seventy Companions who fought at Badr and gathered all the knowledge they had, except the sea", meaning by "the sea" ‘Abdullah ibn ‘Abbas (may God be pleased with him).' },
        },
        {
          id: 'p2',
          heading: { ar: 'عند أمّ المؤمنين عائشة رضي الله عنها', fr: 'Chez la Mère des croyants ‘Ā’isha', en: 'With the Mother of the Believers ‘A’isha' },
          text: { ar: 'كما أخذ العلم عن السيّدة عائشة أمّ المؤمنين رضي الله عنها، زوجة رسول الله ﷺ، وكان يسألها من وراء حجاب عن كلّ شيءٍ من أمور الدين، حتى ما يخصّ المرأة، فكانت تقول له: «اسأل يا جابر، فلا حياء في الدين».', fr: 'Il reçut aussi le savoir de ‘Ā’isha (qu’Allah l’agrée), Mère des croyants et épouse du Messager ﷺ ; il l’interrogeait derrière un voile sur tout ce qui touche à la religion, même ce qui concerne spécifiquement les femmes, et elle lui disait : « Demande, Jābir, il n’y a pas de pudeur en matière de religion. »', en: 'He also took knowledge from ‘A’isha (may God be pleased with her), the Mother of the Believers and wife of God’s Messenger ﷺ; he asked her from behind a screen about everything in religion, even matters specific to women, and she would tell him: "Ask, Jabir — there is no shyness in religion."' },
        },
        {
          id: 'p3',
          heading: { ar: 'وغيرهم من الصحابة', fr: 'Et d’autres Compagnons', en: 'And other Companions' },
          text: { ar: 'وتتلمذ أيضًا عند الصحابة الكرام أبي هريرة وعبد الله بن عمر وعبد الله بن مسعود وأنس بن مالك خادم رسول الله ﷺ، رضي الله عنهم، فهؤلاء يُعدّون من كبار الصحابة، وهم أقرب الناس إلى رسول الله ﷺ.', fr: 'Il fut aussi l’élève des nobles Compagnons Abū Hurayra, ‘Abd Allāh ibn ‘Umar, ‘Abd Allāh ibn Mas‘ūd et Anas ibn Mālik, serviteur du Messager ﷺ (qu’Allah les agrée) ; ils comptent parmi les plus grands Compagnons et furent les plus proches du Messager ﷺ.', en: 'He also studied with the noble Companions Abu Hurayra, ‘Abdullah ibn ‘Umar, ‘Abdullah ibn Mas‘ud and Anas ibn Malik, the servant of God’s Messenger ﷺ (may God be pleased with them); they count among the senior Companions and were the closest people to God’s Messenger ﷺ.' },
        },
      ],
    },

    // 06 — Journey: where his knowledge came from (slides 3–4)
    {
      kind: 'journey',
      id: 'knowledge-journey',
      title: { ar: 'رحلة العلم', fr: 'Le voyage du savoir', en: 'The journey of knowledge' },
      intro: {
        ar: 'اجتز محطّات حياة جابر بن زيد، ومن أين أخذ علمه، بإجابة سؤال كلّ محطّة.',
        fr: 'Franchis les étapes de la vie de Jābir ibn Zayd et d’où il tira son savoir en répondant à chaque question.',
        en: 'Pass the stops of Jabir ibn Zayd’s life, and where his knowledge came from, by answering each stop’s question.',
      },
      stops: [
        {
          id: 'farq',
          name: { ar: 'فرق', fr: 'Farq', en: 'Farq' },
          image: `${IMG}/oman-exile.png`,
          question: {
            ar: 'في أيّ بلدٍ وُلد الإمام جابر بن زيد؟',
            fr: 'Dans quel pays naquit l’imam Jābir ibn Zayd ?',
            en: 'In which land was Imam Jabir ibn Zayd born?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'عُمان، في قرية فرق بولاية نزوى', fr: 'Oman, dans le village de Farq, wilāya de Nizwā', en: 'Oman, in the village of Farq in the wilaya of Nizwa' } },
            { id: 'b', correct: false, label: { ar: 'العراق، في مدينة البصرة', fr: 'L’Irak, dans la ville de Bassora', en: 'Iraq, in the city of Basra' }, hint: { ar: 'البصرة هي مكان تعلّمه عند كبار الصحابة، لا مولده.', fr: 'Bassora est le lieu de ses études auprès des Compagnons, non de sa naissance.', en: 'Basra is where he studied with senior Companions, not where he was born.' } },
            { id: 'c', correct: false, label: { ar: 'الحجاز، في مكّة', fr: 'Le Hedjaz, à La Mecque', en: 'The Hijaz, in Makkah' }, hint: { ar: 'الحجاز مكان لقائه بعائشة رضي الله عنها وابن عبّاس، لا مولده.', fr: 'Le Hedjaz est où il rencontra ‘Ā’isha et Ibn ‘Abbās, non son lieu de naissance.', en: 'The Hijaz is where he met ‘A’isha and Ibn ‘Abbas, not his birthplace.' } },
          ],
          reveal: {
            ar: 'وُلد حوالي سنة 21 هـ من قبيلة أزد بعُمان، ثمّ انطلق يطلب العلم.',
            fr: 'Il naquit vers l’an 21 de l’Hégire, de la tribu d’Azd en Oman, puis partit en quête de savoir.',
            en: 'He was born around 21 AH of the tribe of Azd in Oman, then set out to seek knowledge.',
          },
        },
        {
          id: 'basra',
          name: { ar: 'البصرة', fr: 'Bassora', en: 'Basra' },
          image: `${IMG}/basra-halaqa.png`,
          question: {
            ar: 'عند من تعلّم الإمام جابر في البصرة؟',
            fr: 'Auprès de qui l’imam Jābir étudia-t-il à Bassora ?',
            en: 'With whom did Imam Jabir study in Basra?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'عند كبار الصحابة', fr: 'Auprès de grands Compagnons', en: 'With senior Companions' } },
            { id: 'b', correct: false, label: { ar: 'عند الحجّاج بن يوسف', fr: 'Auprès d’al-Ḥajjāj ibn Yūsuf', en: 'With al-Hajjaj ibn Yusuf' }, hint: { ar: 'الحجّاج كان الوالي الذي يتابع حركاته ثمّ سجنه.', fr: 'Al-Ḥajjāj était le gouverneur qui le surveillait puis l’emprisonna.', en: 'Al-Hajjaj was the governor who tracked him and then imprisoned him.' } },
            { id: 'c', correct: false, label: { ar: 'لم يتعلّم عند أحد', fr: 'Il n’étudia auprès de personne', en: 'He studied with no one' }, hint: { ar: 'تعلّم عند كبار الصحابة في البصرة وفي الحجاز.', fr: 'Il étudia auprès de grands Compagnons à Bassora et au Hedjaz.', en: 'He studied with senior Companions in Basra and the Hijaz.' } },
          ],
          reveal: {
            ar: 'يقول عن نفسه: «أدركتُ سبعين بدريًّا، فحويتُ ما عندهم من العلم إلّا البحر».',
            fr: 'Il dit de lui-même : « J’ai connu soixante-dix Compagnons de Badr et j’ai recueilli leur savoir, sauf celui de la mer. »',
            en: 'He says of himself: "I met seventy Companions who fought at Badr and gathered all the knowledge they had, except the sea."',
          },
        },
        {
          id: 'bahr',
          name: { ar: 'البحر', fr: 'La mer', en: 'The sea' },
          image: `${IMG}/ocean-of-knowledge.png`,
          question: {
            ar: 'من كان يقصد جابر بقوله «إلّا البحر»؟',
            fr: 'Qui Jābir désignait-il par « sauf la mer » ?',
            en: 'Whom did Jabir mean by "except the sea"?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'عبد الله بن عبّاس', fr: '‘Abd Allāh ibn ‘Abbās', en: '‘Abdullah ibn ‘Abbas' } },
            { id: 'b', correct: false, label: { ar: 'أبو هريرة', fr: 'Abū Hurayra', en: 'Abu Hurayra' }, hint: { ar: 'أبو هريرة من الصحابة الذين تتلمذ عندهم أيضًا، لكنّ «البحر» لقبُ صحابيٍّ آخر.', fr: 'Abū Hurayra est un autre de ses maîtres, mais « la mer » désigne quelqu’un d’autre.', en: 'Abu Hurayra was another of his teachers, but "the sea" refers to someone else.' } },
            { id: 'c', correct: false, label: { ar: 'عبد الله بن مسعود', fr: '‘Abd Allāh ibn Mas‘ūd', en: '‘Abdullah ibn Mas‘ud' }, hint: { ar: 'ابن مسعود من أساتذته أيضًا، لكنّ المقصود غيره.', fr: 'Ibn Mas‘ūd fut aussi l’un de ses maîtres, mais il s’agit d’un autre.', en: 'Ibn Mas‘ud was also one of his teachers, but it is someone else.' } },
          ],
          reveal: {
            ar: 'كان يقصد بالبحر عبد الله بن عبّاس، وأخذ العلم عنه، كما أخذ عن أبي هريرة وعبد الله بن عمر وعبد الله بن مسعود وأنس بن مالك.',
            fr: 'Par « la mer », il désignait ‘Abd Allāh ibn ‘Abbās, dont il reçut le savoir, comme d’Abū Hurayra, ‘Abd Allāh ibn ‘Umar, ‘Abd Allāh ibn Mas‘ūd et Anas ibn Mālik.',
            en: 'By "the sea" he meant ‘Abdullah ibn ‘Abbas, from whom he took knowledge, as he did from Abu Hurayra, ‘Abdullah ibn ‘Umar, ‘Abdullah ibn Mas‘ud and Anas ibn Malik.',
          },
        },
        {
          id: 'aisha',
          name: { ar: 'بيت عائشة رضي الله عنها', fr: 'Chez ‘Ā’isha', en: '‘A’isha’s house' },
          question: {
            ar: 'ماذا كانت أمّ المؤمنين عائشة رضي الله عنها تقول لجابر وهو يسألها من وراء حجاب؟',
            fr: 'Que disait la Mère des croyants ‘Ā’isha (qu’Allah l’agrée) à Jābir lorsqu’il l’interrogeait derrière un voile ?',
            en: 'What did the Mother of the Believers ‘A’isha (may God be pleased with her) say to Jabir as he asked her from behind a screen?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'اسأل يا جابر فلا حياء في الدين', fr: '« Demande, Jābir, il n’y a pas de pudeur en matière de religion »', en: '"Ask, Jabir — there is no shyness in religion"' } },
            { id: 'b', correct: false, label: { ar: 'اكتفِ بما سمعت فلا حاجة للسؤال', fr: '« Contente-toi de ce que tu as entendu, point besoin de demander »', en: '"Be content with what you heard — there is no need to ask"' }, hint: { ar: 'العكس: شجّعته على السؤال في كلّ أمور الدين.', fr: 'Au contraire : elle l’encouragea à poser des questions sur toute chose de la religion.', en: 'The opposite: she encouraged him to ask about everything in the religion.' } },
            { id: 'c', correct: false, label: { ar: 'عُد في العام القادم', fr: '« Reviens l’année prochaine »', en: '"Come back next year"' }, hint: { ar: 'كان يسألها عن كلّ شيء من أمور الدين، حتّى ما تختصّ به المرأة.', fr: 'Il l’interrogeait sur tout ce qui touche à la religion, même ce qui concerne spécifiquement les femmes.', en: 'He asked her about everything in religion, even matters specific to women.' } },
          ],
          reveal: {
            ar: 'كان يسألها من وراء حجابٍ عن كلّ شيءٍ من أمور الدين، حتّى أمورٍ تخصّ المرأة، فتشجّعه على ألّا يستحيي من السؤال.',
            fr: 'Il l’interrogeait derrière un voile sur tout de la religion, même ce qui concerne les femmes, et elle l’encourageait à ne pas avoir honte de demander.',
            en: 'He asked her, from behind a screen, about everything in religion, even matters specific to women, and she urged him not to be shy about asking.',
          },
        },
        {
          id: 'exile',
          name: { ar: 'السجن والنفي', fr: 'Prison et exil', en: 'Prison and exile' },
          image: `${IMG}/hidden-lantern.png`,
          question: {
            ar: 'ما الذي حدث للإمام جابر رغم تستّره؟',
            fr: 'Que lui arriva-t-il malgré sa discrétion ?',
            en: 'What happened to Imam Jabir despite his concealment?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'سُجن عند الحجّاج ثمّ نُفي إلى عُمان', fr: 'Il fut emprisonné par al-Ḥajjāj puis exilé en Oman', en: 'He was imprisoned by al-Hajjaj and then exiled to Oman' } },
            { id: 'b', correct: false, label: { ar: 'نجا ولم يتعرّض لأذى', fr: 'Il échappa à tout mal', en: 'He escaped without harm' }, hint: { ar: 'ورغم تستّره لم يسلم من سجن الحجّاج.', fr: 'Malgré sa discrétion, il n’échappa pas à la prison d’al-Ḥajjāj.', en: 'Despite his concealment, he did not escape al-Hajjaj’s prison.' } },
            { id: 'c', correct: false, label: { ar: 'تولّى منصبًا عند الحجّاج', fr: 'Il reçut une charge auprès d’al-Ḥajjāj', en: 'He took a post under al-Hajjaj' }, hint: { ar: 'كان الحجّاج يتابع حركاته، فسجنه.', fr: 'Al-Ḥajjāj surveillait ses mouvements, et l’emprisonna.', en: 'Al-Hajjaj tracked his movements, and imprisoned him.' } },
          ],
          reveal: {
            ar: 'ثمّ توفّي سنة 93 هـ، وبقي علمه موزّعًا بين كبار تلاميذه.',
            fr: 'Puis il mourut en l’an 93 de l’Hégire ; son savoir resta réparti entre ses grands élèves.',
            en: 'He then died in the year 93 AH; his knowledge stayed shared among his senior students.',
          },
        },
      ],
      arrival: {
        ar: 'من فرق في عُمان إلى البصرة والحجاز، ومن «البحر» إلى بيت عائشة رضي الله عنها، ثمّ السجن والنفي: هذا هو طريق العلم عند جابر بن زيد.',
        fr: 'De Farq en Oman à Bassora et au Hedjaz, de « la mer » à la maison de ‘Ā’isha, puis la prison et l’exil : tel fut le chemin du savoir de Jābir ibn Zayd.',
        en: 'From Farq in Oman to Basra and the Hijaz, from "the sea" to ‘A’isha’s house, then prison and exile: this was Jabir ibn Zayd’s road of knowledge.',
      },
    },

    // 07 — Reading: his scholarly standing (slide 5)
    {
      kind: 'reading',
      id: 'reading-status',
      title: { ar: 'اقرأ: مكانة الإمام جابر العلمية', fr: 'Lis : le rang de savant de l’imam Jābir', en: 'Read: Imam Jabir’s scholarly standing' },
      intro: { ar: 'اقرأ ما قاله كبار العلماء فيه، ثمّ اختبر ما فهمته.', fr: 'Lis ce que de grands savants dirent de lui, puis teste ce que tu as retenu.', en: 'Read what great scholars said of him, then test what you understood.' },
      image: `${IMG}/basra-halaqa.png`,
      imageAlt: { ar: 'حلقةُ علمٍ تحت الأعمدة: وسائدُ فارغة مرتّبة في دائرة حول حاملٍ خشبيّ يحمل كتابًا مفتوحًا', fr: 'Un cercle d’étude sous les colonnes : des coussins vides disposés en cercle autour d’un pupitre portant un livre ouvert', en: 'A study circle beneath the columns: empty cushions arranged in a ring around a wooden stand holding an open book' },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'تلميذ ابن عبّاس', fr: 'L’élève d’Ibn ‘Abbās', en: 'Ibn ‘Abbas’s student' },
          text: { ar: 'كان الإمام جابر من أنجب تلامذة عبد الله بن عبّاس رضي الله عنهما، حتى قال فيه: «لو أنّ أهل البصرة نزلوا عند قول جابر بن زيد لوسعهم علمًا عمّا في كتاب الله». وقال أيضًا: «عجبًا لأهل العراق كيف يحتاجون إلينا وفيهم جابر بن زيد!»', fr: 'L’imam Jābir fut l’un des meilleurs élèves de ‘Abd Allāh ibn ‘Abbās, au point que celui-ci dit de lui : « Si les gens de Bassora s’en tenaient à l’avis de Jābir ibn Zayd, ils auraient assez de savoir sur ce qui est dans le Livre de Dieu. » Il dit aussi : « Quel étonnement que les gens d’Irak aient besoin de nous alors que Jābir ibn Zayd est parmi eux ! »', en: 'Imam Jabir was among the most gifted students of ‘Abdullah ibn ‘Abbas, who said of him: "If the people of Basra followed Jabir ibn Zayd’s word, they would have enough knowledge of what is in the Book of God." He also said: "How strange that the people of Iraq need us when Jabir ibn Zayd is among them!"' },
        },
        {
          id: 'p2',
          heading: { ar: 'شهاداتٌ في حقّه', fr: 'Des témoignages sur lui', en: 'Testimonies about him' },
          text: { ar: 'وأشار ابن عبّاس إلى غزارة علم جابر بقوله: «اسألوا جابر بن زيد، فلو سأله أهل المشرق والمغرب لوسعهم علمه». وعندما كان أهل العراق يسألون ابنَ عبّاس كان يردّ عليهم: «كيف تسألونني وفيكم جابر!». ووصفه الصحابة، ومنهم عبد الله بن عمر رضي الله عنهما، بأنّه من فقهاء البصرة البارزين. وقال فيه قتادة يوم توفّي: «اليوم توفّي أعلم أهل العراق».', fr: 'Ibn ‘Abbās signala l’ampleur du savoir de Jābir en disant : « Interrogez Jābir ibn Zayd ; si les gens de l’Orient et de l’Occident l’interrogeaient, son savoir leur suffirait. » Quand les gens d’Irak interrogeaient Ibn ‘Abbās, il leur répondait : « Comment m’interrogez-vous alors que Jābir est parmi vous ! » Les Compagnons, dont ‘Abd Allāh ibn ‘Umar, le décrivirent comme l’un des juristes éminents de Bassora. Et Qatāda dit de lui le jour de sa mort : « Aujourd’hui est mort le plus savant des gens d’Irak. »', en: 'Ibn ‘Abbas pointed to the breadth of Jabir’s knowledge, saying: "Ask Jabir ibn Zayd — if the people of the East and the West asked him, his knowledge would suffice them." When the people of Iraq asked Ibn ‘Abbas, he would answer: "How can you ask me when Jabir is among you!" The Companions, among them ‘Abdullah ibn ‘Umar, described him as one of the prominent jurists of Basra. And Qatada said of him on the day he died: "Today the most knowledgeable of the people of Iraq has died."' },
        },
        {
          id: 'p3',
          heading: { ar: 'أبرز ما اتّصف به', fr: 'Ce qui le caractérisait le plus', en: 'What marked him most' },
          text: { ar: 'كانت أبرز علامةٍ اتّصف بها سعة علمه واجتهاده وتبحّره في الفقه، ودرايته بالسنّة وروايته لها، ورواياته متّصلةٌ إلى الرسول ﷺ، واحتجّ بأقواله مجموعةٌ من المفسّرين والعلماء واعتبروه ثقةً وأجمعوا على عدالته وضبطه.', fr: 'Ce qui le caractérisait le plus : l’ampleur de son savoir, son effort d’interprétation et sa maîtrise du droit, sa connaissance de la sunna et sa transmission ; ses transmissions remontaient jusqu’au Messager ﷺ, un groupe d’exégètes et de savants s’appuya sur ses avis, le jugea digne de confiance et s’accorda sur sa probité et sa précision.', en: 'His most notable traits were the breadth of his knowledge, his scholarly effort and his depth in jurisprudence, his understanding and transmission of the Sunna; his reports were linked back to the Messenger ﷺ, a group of commentators and scholars cited his words, considered him trustworthy and agreed on his integrity and accuracy.' },
        },
      ],
    },

    // 08 — Domino chain: why he stayed hidden (slide 3)
    {
      kind: 'chain',
      id: 'concealment-chain',
      title: { ar: 'سلسلة التستّر', fr: 'La chaîne de la discrétion', en: 'The chain of concealment' },
      intro: {
        ar: 'اختر الحلقة الصحيحة في كلّ مرّة لتفهم لماذا كان الإمام يتستّر، وما نتج عن ذلك.',
        fr: 'Choisis le bon maillon à chaque fois pour comprendre pourquoi l’imam se cachait, et ce qui en résulta.',
        en: 'Choose the right link each time to understand why the imam stayed concealed, and what followed.',
      },
      image: `${IMG}/hidden-lantern.png`,
      imageAlt: {
        ar: 'غرفةٌ مظلمة صغيرة فيها مصباحٌ واحد على طاولةٍ بين الكتب، وستائرُ ثقيلة على الباب',
        fr: 'Une petite pièce sombre éclairée d’une seule lampe sur une table entre des livres, de lourds rideaux à la porte',
        en: 'A small dark room with a single lantern on a table among books and heavy curtains at the door',
      },
      start: {
        ar: 'والٍ أمويٌّ على العراق: الحجّاج بن يوسف يتابع حركات الإمام جابر.',
        fr: 'Un gouverneur omeyyade d’Irak, al-Ḥajjāj ibn Yūsuf, surveille les mouvements de l’imam Jābir.',
        en: 'An Umayyad governor of Iraq, al-Hajjaj ibn Yusuf, is tracking Imam Jabir’s movements.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'فماذا فعل الإمام؟', fr: 'Que fit donc l’imam ?', en: 'So what did the imam do?' },
          correct: { ar: 'كان يتستّر ولا يُظهر نشاطه', fr: 'Il se faisait discret et ne montrait pas son activité', en: 'He stayed concealed and did not show his activity' },
          distractors: [
            { label: { ar: 'أعلن آراءه في الساحات العامّة', fr: 'Il proclama ses avis sur les places publiques', en: 'He announced his views in the public squares' }, hint: { ar: 'العكس تمامًا، كان يتستّر.', fr: 'Exactement l’inverse, il se cachait.', en: 'Quite the opposite — he stayed hidden.' } },
            { label: { ar: 'ترك البصرة وانقطع عن العلم', fr: 'Il quitta Bassora et abandonna le savoir', en: 'He left Basra and abandoned knowledge' }, hint: { ar: 'لم ينقطع عن العلم، بل تستّر وواصل.', fr: 'Il n’abandonna pas le savoir : il se cacha et continua.', en: 'He did not abandon knowledge — he concealed himself and continued.' } },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'وماذا فعل أصحابه؟', fr: 'Et que firent ses compagnons ?', en: 'And what did his companions do?' },
          correct: { ar: 'لم يُفصحوا عن آرائهم لئلّا يتعرّضوا للمضايقات ويضيع الدين بفقدانه', fr: 'Ils ne révélèrent pas leurs avis pour ne pas subir de vexations ni perdre la religion avec lui', en: 'They did not disclose their views, so as not to suffer harassment and lose the religion with his loss' },
          distractors: [
            { label: { ar: 'جاهروا بآرائهم أمام الولاة', fr: 'Ils exposèrent leurs avis devant les gouverneurs', en: 'They openly declared their views before the governors' }, hint: { ar: 'خافوا المضايقات، فلم يُفصحوا.', fr: 'Ils craignaient les vexations, donc ne révélèrent rien.', en: 'They feared harassment, so they did not disclose them.' } },
            { label: { ar: 'تفرّقوا ولم يعودوا إليه', fr: 'Ils se dispersèrent et ne revinrent plus à lui', en: 'They scattered and never returned to him' }, hint: { ar: 'حافظوا على العلم حتى لا يضيع.', fr: 'Ils préservèrent le savoir pour qu’il ne se perde pas.', en: 'They preserved the knowledge so it would not be lost.' } },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'ومع ذلك، ما الذي حدث للإمام؟', fr: 'Malgré cela, que lui arriva-t-il ?', en: 'Even so, what happened to the imam?' },
          correct: { ar: 'لم يسلم من سجن الحجّاج، ثمّ نُفي إلى عُمان', fr: 'Il n’échappa pas à la prison d’al-Ḥajjāj, puis fut exilé en Oman', en: 'He did not escape al-Hajjaj’s prison, and was then exiled to Oman' },
          distractors: [
            { label: { ar: 'سلم من كلّ أذى', fr: 'Il fut épargné de tout mal', en: 'He was spared all harm' }, hint: { ar: 'رغم تستّره لم يسلم من السجن.', fr: 'Malgré sa discrétion, il n’échappa pas à la prison.', en: 'Despite his concealment, he did not escape prison.' } },
            { label: { ar: 'عُيّن قاضيًا في البصرة', fr: 'Il fut nommé juge à Bassora', en: 'He was appointed judge in Basra' }, hint: { ar: 'لم يرد هذا؛ بل سُجن ثمّ نُفي.', fr: 'Cela n’est pas mentionné ; il fut emprisonné puis exilé.', en: 'This is not mentioned; he was imprisoned, then exiled.' } },
          ],
        },
      ],
      ending: {
        ar: 'رغم السجن والنفي، بقي علمه حيًّا عند تلاميذه، وبقيت الدعوة قائمة.',
        fr: 'Malgré la prison et l’exil, son savoir resta vivant chez ses élèves, et l’Appel continua.',
        en: 'Despite prison and exile, his knowledge stayed alive with his students, and the Call endured.',
      },
    },

    // 09 — Reading: his works (slide 6)
    {
      kind: 'reading',
      id: 'reading-works',
      title: { ar: 'اقرأ: آثار الإمام جابر', fr: 'Lis : l’héritage de l’imam Jābir', en: 'Read: Imam Jabir’s legacy' },
      intro: {
        ar: 'ما الذي تركه جابر بن زيد؟ اقرأ، ثمّ استكشف شجرة علمه.',
        fr: 'Que laissa Jābir ibn Zayd ? Lis, puis explore l’arbre de son savoir.',
        en: 'What did Jabir ibn Zayd leave behind? Read, then explore the tree of his knowledge.',
      },
      image: `${IMG}/diwan-manuscripts.png`,
      imageAlt: {
        ar: 'مكتبٌ خشبيّ تتراكم عليه المخطوطات والكتب المفتوحة والأوراق المطويّة ودواةٌ وقلم وشمعةٌ مضاءة',
        fr: 'Un bureau en bois couvert de manuscrits, de livres ouverts, de rouleaux, d’un encrier, d’une plume et d’une bougie allumée',
        en: 'A wooden desk piled with manuscripts, open books, rolled scrolls, an inkwell, a quill and a lit candle',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'علمٌ توزّع على التلاميذ', fr: 'Un savoir réparti entre les élèves', en: 'Knowledge shared among students' },
          text: {
            ar: 'توزّع علم جابر بن زيد بين كثيرٍ من كبار تلاميذه، الذين انتشر مذهب أهل الدعوة على أيديهم، كالإمام أبي عبيدة مسلم بن أبي كريمة وضمام بن السائب وغيرهما.',
            fr: 'Le savoir de Jābir ibn Zayd se répartit entre nombre de ses grands élèves, par lesquels l’école des gens de l’Appel se diffusa, tels l’imam Abū ‘Ubayda Muslim ibn Abī Karīma, Ḍimām ibn al-Sā’ib et d’autres.',
            en: 'Jabir ibn Zayd’s knowledge was shared among many of his senior students, through whom the school of the People of the Call spread, such as Imam Abu ‘Ubayda Muslim ibn Abi Karima, Dimam ibn al-Sa’ib and others.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'من أوائل من كتب الفقه', fr: 'Parmi les premiers à écrire le droit', en: 'Among the first to write jurisprudence' },
          text: {
            ar: 'وقد تمّ تدوين ذلك الفقه في فترةٍ مبكّرة، وكان جابر نفسه من أقدم الفقهاء الذين استعملوا الكتابة والمراسلة، فكتب بأجوبته إلى تلاميذه وأصحابه. وله كتاب النكاح وكتاب الصلاة، وآراؤه وأقواله منتشرةٌ في كتب المذهب، إضافةً إلى الحديث الذي رواه وجمعه الربيع بن حبيب في مسنده.',
            fr: 'Son savoir fut consigné très tôt, et Jābir fut lui-même parmi les plus anciens juristes à recourir à l’écriture et à la correspondance : il adressa ses réponses à ses élèves et compagnons. Il a un Livre du mariage et un Livre de la prière ; ses avis sont répandus dans les ouvrages de l’école, ainsi que les hadiths qu’il transmit et que al-Rabī‘ ibn Ḥabīb réunit dans son Musnad.',
            en: 'His knowledge was recorded early, and Jabir himself was among the earliest jurists to use writing and correspondence, sending his answers to his students and companions. He has a Book of Marriage and a Book of Prayer, and his views and sayings are spread through the school’s books, along with the hadith he narrated and that al-Rabi‘ ibn Habib gathered in his Musnad.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'ديوان جابر', fr: 'Le Dīwān de Jābir', en: 'The Diwan of Jabir' },
          text: {
            ar: 'تذكر كتب السير أنّ الإمام جابرًا ألّف كتابًا ضخمًا في الحديث والفقه سُمّي «ديوان جابر»، تعرّض فيه لمسائل الأحكام وضمّنه الأحاديث التي رواها عن الصحابة والتابعين، وهو أوّل كتابٍ أُلّف في الفقه.',
            fr: 'Les livres de biographies rapportent que l’imam Jābir composa un volumineux ouvrage de hadith et de droit, appelé « Dīwān de Jābir », où il traita des questions de jurisprudence et réunit les hadiths qu’il avait rapportés des Compagnons et des Successeurs. C’est le premier livre composé en droit.',
            en: 'The biographical sources say Imam Jabir wrote a large book of hadith and jurisprudence called the "Diwan of Jabir", in which he dealt with legal rulings and included the hadith he narrated from the Companions and Successors. It is the first book ever written on jurisprudence.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'تحفةٌ اختفى أثرها', fr: 'Un trésor disparu', en: 'A treasure that vanished' },
          text: {
            ar: 'ولهذا الكتاب قيمةٌ كبرى لما فيه من علمٍ ونفع، لقربه من عصر النبوّة ولأخذه من كبار الصحابة. وبقيت هذه التحفة في حوزة تلميذه أبي عبيدة مسلم بن أبي كريمة، لكنّ أثرها اختفى منذ عهدٍ مبكّر، ونُقل منه ما حفظه الأئمّة وتلاميذه.',
            fr: 'Ce livre a une immense valeur par le savoir et le profit qu’il contient, par sa proximité de l’époque prophétique et parce qu’il fut puisé auprès des grands Compagnons. Ce trésor resta entre les mains de son élève Abū ‘Ubayda Muslim ibn Abī Karīma, mais sa trace disparut très tôt ; on en a transmis ce que les imams et ses élèves avaient retenu.',
            en: 'This book holds great value for the knowledge and benefit it contains, its closeness to the age of prophethood, and because it was taken from the senior Companions. This treasure stayed in the keeping of his student Abu ‘Ubayda Muslim ibn Abi Karima, but its trace vanished early; what the imams and his students had preserved was passed on from it.',
          },
        },
      ],
    },

    // 10 — Explorer: the tree of knowledge (slides 4–6)
    {
      kind: 'explorer',
      id: 'knowledge-tree',
      title: { ar: 'شجرة العلم', fr: 'L’arbre du savoir', en: 'The tree of knowledge' },
      intro: {
        ar: 'اضغط على النقاط المضيئة في الشجرة لتكتشف: أين جذور علم جابر، وجذعه، وأغصانه؟',
        fr: 'Touche les points lumineux de l’arbre pour découvrir où sont les racines, le tronc et les branches du savoir de Jābir.',
        en: 'Tap the glowing points on the tree to discover the roots, trunk and branches of Jabir’s knowledge.',
      },
      image: `${IMG}/knowledge-tree.png`,
      imageAlt: {
        ar: 'شجرةٌ عتيقة أغصانها الذهبية تنتهي بكتبٍ مفتوحة، وتحت جذورها كتابٌ يشعّ ونهرٌ من نور',
        fr: 'Un arbre ancien aux branches dorées terminées par des livres ouverts, un livre rayonnant sous ses racines et un fleuve de lumière',
        en: 'An ancient tree with golden branches ending in open books, a glowing book beneath its roots and a river of light',
      },
      hotspots: [
        {
          id: 'roots',
          x: 50,
          y: 72,
          label: { ar: 'الجذور: علم الصحابة', fr: 'Les racines : le savoir des Compagnons', en: 'The roots: the Companions’ knowledge' },
          description: {
            ar: 'أخذ جابر العلم عن كثيرٍ من صحابة رسول الله ﷺ والتابعين، منهم سبعون بدريًّا، وعن عائشة رضي الله عنها وابن عبّاس وأبي هريرة وابن عمر وابن مسعود وأنس بن مالك.',
            fr: 'Jābir reçut le savoir de nombreux Compagnons du Messager ﷺ et des Successeurs, dont soixante-dix combattants de Badr, ainsi que de ‘Ā’isha, Ibn ‘Abbās, Abū Hurayra, Ibn ‘Umar, Ibn Mas‘ūd et Anas ibn Mālik.',
            en: 'Jabir took knowledge from many Companions of God’s Messenger ﷺ and from the Successors, including seventy who fought at Badr, and from ‘A’isha, Ibn ‘Abbas, Abu Hurayra, Ibn ‘Umar, Ibn Mas‘ud and Anas ibn Malik.',
          },
        },
        {
          id: 'trunk',
          x: 50,
          y: 52,
          label: { ar: 'الجذع: الإمام جابر', fr: 'Le tronc : l’imam Jābir', en: 'The trunk: Imam Jabir' },
          description: {
            ar: 'جمع علوم الصحابة، ورتّب الأحاديث ورسخ في العقيدة والفقه وبلّغها، فصار إمام أهل الدعوة والاستقامة.',
            fr: 'Il rassembla le savoir des Compagnons, ordonna les hadiths et s’enracina dans le dogme et le droit qu’il transmit, devenant l’imam des gens de l’Appel et de la Rectitude.',
            en: 'He gathered the Companions’ knowledge, organized the hadith, grounded himself in creed and jurisprudence and conveyed them, becoming the imam of the People of the Call and Rectitude.',
          },
        },
        {
          id: 'left-branch',
          x: 26,
          y: 28,
          label: { ar: 'الأغصان: التلاميذ', fr: 'Les branches : les élèves', en: 'The branches: the students' },
          description: {
            ar: 'انتشر مذهب أهل الدعوة على أيدي كبار تلاميذه، كأبي عبيدة مسلم بن أبي كريمة وضمام بن السائب، فوصل علمه إلى الأجيال اللاحقة.',
            fr: 'L’école des gens de l’Appel se diffusa par ses grands élèves, tels Abū ‘Ubayda Muslim ibn Abī Karīma et Ḍimām ibn al-Sā’ib, et son savoir parvint aux générations suivantes.',
            en: 'The school of the People of the Call spread through his senior students, such as Abu ‘Ubayda Muslim ibn Abi Karima and Dimam ibn al-Sa’ib, and his knowledge reached later generations.',
          },
        },
        {
          id: 'right-branch',
          x: 74,
          y: 26,
          label: { ar: 'الثمار: الكتب والمسند', fr: 'Les fruits : les livres et le Musnad', en: 'The fruits: books and the Musnad' },
          description: {
            ar: 'كتاب النكاح وكتاب الصلاة، وآراؤه في كتب المذهب، والحديث الذي رواه وجمعه الربيع بن حبيب في مسنده.',
            fr: 'Le Livre du mariage et le Livre de la prière, ses avis dans les ouvrages de l’école, et les hadiths qu’il transmit et que al-Rabī‘ ibn Ḥabīb réunit dans son Musnad.',
            en: 'The Book of Marriage and the Book of Prayer, his views in the school’s books, and the hadith he narrated and al-Rabi‘ ibn Habib gathered in his Musnad.',
          },
        },
        {
          id: 'river',
          x: 40,
          y: 92,
          label: { ar: 'النهر: الديوان الضائع', fr: 'Le fleuve : le recueil perdu', en: 'The river: the lost Diwan' },
          description: {
            ar: 'ألّف ديوانًا كبيرًا في الحديث والفقه، أوّل كتابٍ أُلّف في الفقه، بقي عند تلميذه أبي عبيدة ثمّ لم يصل إلينا، ونُقل منه ما حفظته الأئمّة وتلاميذه، فجرى علمه كالنهر من جيلٍ إلى جيل.',
            fr: 'Il composa un grand Dīwān de hadith et de droit, le premier livre de droit, resté chez son élève Abū ‘Ubayda puis perdu ; on en transmit ce que les imams et ses élèves avaient retenu, et son savoir coula comme un fleuve de génération en génération.',
            en: 'He wrote a large Diwan of hadith and jurisprudence, the first book on jurisprudence, which stayed with his student Abu ‘Ubayda and then was lost; what the imams and his students preserved was passed on from it, so his knowledge flowed like a river from generation to generation.',
          },
        },
      ],
    },

    // 11 — Sorting: key dates (slides 2–3)
    {
      kind: 'sorting',
      id: 'dates-sorting',
      title: { ar: 'رتّب التواريخ', fr: 'Ordonne les dates', en: 'Put the dates in order' },
      intro: {
        ar: 'اسحب الأحداث أو استخدم الأسهم لترتيبها من الأقدم إلى الأحدث.',
        fr: 'Fais glisser les événements ou utilise les flèches pour les ordonner du plus ancien au plus récent.',
        en: 'Drag the events or use the arrows to put them from oldest to newest.',
      },
      image: `${IMG}/knowledge-tree.png`,
      imageAlt: {
        ar: 'شجرةٌ ذهبية الأغصان تنتهي بكتبٍ مفتوحة',
        fr: 'Un arbre aux branches dorées terminées par des livres ouverts',
        en: 'A golden-branched tree ending in open books',
      },
      items: [
        { id: 'i1', label: { ar: 'وُلد الإمام جابر حوالي سنة 21 هـ', fr: 'Naissance de l’imam Jābir vers l’an 21 de l’Hégire', en: 'Imam Jabir was born around 21 AH' } },
        { id: 'i2', label: { ar: 'وفاة الإمام أبي بلال سنة 61 هـ وبروز دور جابر', fr: 'Mort de l’imam Abū Bilāl en 61 H et émergence du rôle de Jābir', en: 'Imam Abu Bilal’s death in 61 AH and the rise of Jabir’s role' } },
        { id: 'i3', label: { ar: 'تسمية أهل الدعوة والاستقامة سنة 64 هـ', fr: 'Le nom de gens de l’Appel et de la Rectitude, en l’an 64 H', en: 'The name People of the Call and Rectitude, in 64 AH' } },
        { id: 'i4', label: { ar: 'وفاة الإمام جابر سنة 93 هـ', fr: 'Mort de l’imam Jābir en l’an 93 H', en: 'Imam Jabir’s death in 93 AH' } },
      ],
      explanation: {
        ar: 'من الميلاد حوالي 21 هـ، إلى وفاة أبي بلال 61 هـ، فتسمية أهل الدعوة 64 هـ، فوفاة جابر 93 هـ.',
        fr: 'De la naissance vers 21 H, à la mort d’Abū Bilāl en 61 H, au nom des gens de l’Appel en 64 H, puis à la mort de Jābir en 93 H.',
        en: 'From his birth around 21 AH, to Abu Bilal’s death in 61 AH, the naming of the People of the Call in 64 AH, and Jabir’s death in 93 AH.',
      },
    },

    // 12 — Blitz
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
          text: { ar: 'ولد الإمام جابر بن زيد في البصرة.', fr: 'L’imam Jābir ibn Zayd naquit à Bassora.', en: 'Imam Jabir ibn Zayd was born in Basra.' },
          answer: false,
          explanation: { ar: 'خطأ، وُلد في قرية فرق بولاية نزوى في عُمان، وتعلّم في البصرة.', fr: 'Faux, il naquit à Farq, wilāya de Nizwā en Oman, et étudia à Bassora.', en: 'False — he was born in Farq, in the wilaya of Nizwa in Oman, and studied in Basra.' },
        },
        {
          id: 'b2',
          text: { ar: 'قال جابر إنّه أدرك سبعين بدريًّا وأخذ علمهم إلّا «البحر».', fr: 'Jābir dit avoir connu soixante-dix combattants de Badr et pris leur savoir, sauf « la mer ».', en: 'Jabir said he met seventy Badr veterans and took their knowledge except "the sea."' },
          answer: true,
          explanation: { ar: 'صحيح، وقصد بالبحر عبد الله بن عبّاس.', fr: 'Vrai, et par « la mer » il désignait ‘Abd Allāh ibn ‘Abbās.', en: 'True — and by "the sea" he meant ‘Abdullah ibn ‘Abbas.' },
        },
        {
          id: 'b3',
          text: { ar: 'كانت عائشة رضي الله عنها تمنعه من السؤال عن أمور الدين.', fr: '‘Ā’isha l’empêchait de poser des questions sur la religion.', en: '‘A’isha prevented him from asking about matters of religion.' },
          answer: false,
          explanation: { ar: 'خطأ، كانت تقول له: اسأل يا جابر فلا حياء في الدين.', fr: 'Faux, elle lui disait : « Demande, Jābir, il n’y a pas de pudeur en religion. »', en: 'False — she told him: "Ask, Jabir — there is no shyness in religion."' },
        },
        {
          id: 'b4',
          text: { ar: 'سلم الإمام جابر من سجن الحجّاج لأنّه تستّر.', fr: 'L’imam Jābir échappa à la prison d’al-Ḥajjāj grâce à sa discrétion.', en: 'Imam Jabir escaped al-Hajjaj’s prison because he stayed concealed.' },
          answer: false,
          explanation: { ar: 'خطأ، رغم تستّره لم يسلم من السجن ثمّ النفي إلى عُمان.', fr: 'Faux, malgré sa discrétion il n’échappa pas à la prison puis à l’exil en Oman.', en: 'False — despite concealment, he was imprisoned and then exiled to Oman.' },
        },
        {
          id: 'b5',
          text: { ar: 'ديوان جابر كتابٌ ضخم لم يصل إلينا أثره.', fr: 'Le Dīwān de Jābir est un ouvrage volumineux dont la trace ne nous est pas parvenue.', en: 'The Diwan of Jabir is a large book whose trace did not reach us.' },
          answer: true,
          explanation: { ar: 'صحيح، ونُقل منه ما حفظه الأئمّة وتلاميذه.', fr: 'Vrai, et l’on en transmit ce que les imams et ses élèves avaient retenu.', en: 'True — and what the imams and his students preserved was passed on from it.' },
        },
        {
          id: 'b6',
          text: { ar: 'جمع الربيع بن حبيب حديث جابر في مسنده.', fr: 'al-Rabī‘ ibn Ḥabīb réunit les hadiths de Jābir dans son Musnad.', en: 'al-Rabi‘ ibn Habib gathered Jabir’s hadith in his Musnad.' },
          answer: true,
          explanation: { ar: 'صحيح، وكذلك له كتاب النكاح وكتاب الصلاة.', fr: 'Vrai, et on lui attribue aussi un Livre du mariage et un Livre de la prière.', en: 'True — he also has a Book of Marriage and a Book of Prayer.' },
        },
      ],
    },

    // 13 — Quiz
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'اختبر معلوماتك', fr: 'Teste tes connaissances', en: 'Test your knowledge' },
      intro: {
        ar: 'أربعة أسئلة متنوّعة عن الإمام جابر ومكانته وآثاره.',
        fr: 'Quatre questions variées sur l’imam Jābir, son rang et son héritage.',
        en: 'Four varied questions on Imam Jabir, his standing and his legacy.',
      },
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: { ar: 'متى تعود تسمية «أهل الدعوة والاستقامة»؟', fr: 'À quelle date remonte le nom de « gens de l’Appel et de la Rectitude » ?', en: 'When does the name "People of the Call and Rectitude" date from?' },
          options: [
            { id: 'a', label: { ar: 'سنة 64 هـ، بعد انقسام حلقة أبي بلال', fr: 'L’an 64 H, après la division du cercle d’Abū Bilāl', en: '64 AH, after Abu Bilal’s circle split' } },
            { id: 'b', label: { ar: 'سنة 93 هـ، عند وفاة جابر', fr: 'L’an 93 H, à la mort de Jābir', en: '93 AH, at Jabir’s death' } },
            { id: 'c', label: { ar: 'سنة 21 هـ، عند ميلاد جابر', fr: 'L’an 21 H, à la naissance de Jābir', en: '21 AH, at Jabir’s birth' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'تعود التسمية إلى سنة 64 هـ، حين اقتدى أهل الدعوة بالعالم الجليل جابر بن زيد.',
            fr: 'Le nom remonte à l’an 64 H, lorsque les gens de l’Appel suivirent le grand savant Jābir ibn Zayd.',
            en: 'The name dates to 64 AH, when the People of the Call followed the great scholar Jabir ibn Zayd.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'اعتمد المذهب على ما بلّغه جابر من علم الصحابة عن الرسول ﷺ.', fr: 'L’école s’appuya sur ce que Jābir transmit du savoir des Compagnons rapporté du Messager ﷺ.', en: 'The school relied on what Jabir conveyed of the Companions’ knowledge from the Messenger ﷺ.' },
          answer: true,
          explanation: {
            ar: 'صحيح، فقد أخذ الدين من المنبع الصافي عن الرسول ﷺ بواسطة الصحابة.',
            fr: 'Vrai : il puisa la religion à la source pure du Messager ﷺ par l’intermédiaire des Compagnons.',
            en: 'True — he took the religion from the pure source, the Messenger ﷺ, through the Companions.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ شخصيّةٍ بما ورد عنها في الدرس', fr: 'Relie chaque personnage à ce que dit la leçon', en: 'Match each person to what the lesson says of them' },
          pairs: [
            { id: 'p1', left: { ar: 'عبد الله بن عبّاس', fr: '‘Abd Allāh ibn ‘Abbās', en: '‘Abdullah ibn ‘Abbas' }, right: { ar: '«لوسعهم علمًا عمّا في كتاب الله»', fr: '« Ils auraient assez de savoir sur le Livre de Dieu »', en: '"They would have enough knowledge of the Book of God"' } },
            { id: 'p2', left: { ar: 'قتادة', fr: 'Qatāda', en: 'Qatada' }, right: { ar: '«اليوم توفّي أعلم أهل العراق»', fr: '« Aujourd’hui est mort le plus savant d’Irak »', en: '"Today the most knowledgeable in Iraq has died"' } },
            { id: 'p3', left: { ar: 'عائشة رضي الله عنها', fr: '‘Ā’isha (qu’Allah l’agrée)', en: '‘A’isha (may God be pleased with her)' }, right: { ar: '«اسأل يا جابر فلا حياء في الدين»', fr: '« Demande, Jābir, il n’y a pas de pudeur en religion »', en: '"Ask, Jabir — no shyness in religion"' } },
            { id: 'p4', left: { ar: 'الربيع بن حبيب', fr: 'al-Rabī‘ ibn Ḥabīb', en: 'al-Rabi‘ ibn Habib' }, right: { ar: 'جمع حديثه في مسنده', fr: 'Réunit ses hadiths dans son Musnad', en: 'Gathered his hadith in his Musnad' } },
          ],
          explanation: {
            ar: 'كلّ شهادةٍ في الدرس تؤكّد جانبًا من مكانة جابر العلمية.',
            fr: 'Chaque témoignage de la leçon confirme un aspect du rang de savant de Jābir.',
            en: 'Each testimony in the lesson confirms an aspect of Jabir’s scholarly standing.',
          },
        },
        {
          id: 'q4',
          type: 'mcq',
          question: { ar: 'ما الذي يميّز «ديوان جابر»؟', fr: 'Qu’est-ce qui distingue le « Dīwān de Jābir » ?', en: 'What makes the "Diwan of Jabir" special?' },
          options: [
            { id: 'a', label: { ar: 'هو أوّل كتابٍ أُلّف في الفقه', fr: 'C’est le premier livre composé en droit', en: 'It is the first book written on jurisprudence' } },
            { id: 'b', label: { ar: 'هو ديوانٌ في الشعر والأدب', fr: 'C’est un recueil de poésie et de lettres', en: 'It is a collection of poetry and literature' } },
            { id: 'c', label: { ar: 'ألّفه الربيع بن حبيب', fr: 'Il fut composé par al-Rabī‘ ibn Ḥabīb', en: 'It was written by al-Rabi‘ ibn Habib' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'ألّفه جابر في الحديث والفقه، وهو أوّل كتابٍ أُلّف في الفقه، وبقي عند تلميذه أبي عبيدة ثمّ اختفى أثره منذ عهدٍ مبكّر.',
            fr: 'Jābir le composa en hadith et en droit ; c’est le premier livre de droit. Il resta chez son élève Abū ‘Ubayda, puis sa trace disparut très tôt.',
            en: 'Jabir wrote it on hadith and jurisprudence; it is the first book on jurisprudence. It stayed with his student Abu ‘Ubayda, then its trace vanished early.',
          },
        },
      ],
    },

    // 14 — Values
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'ماذا نتعلّم من هذا الدرس؟', fr: 'Que retenir de cette leçon ?', en: 'What do we learn from this lesson?' },
      prompt: {
        ar: 'حين كان جابر يسأل عائشة رضي الله عنها من وراء حجاب، ماذا علّمته؟',
        fr: 'Lorsque Jābir interrogeait ‘Ā’isha (qu’Allah l’agrée) derrière un voile, que lui enseigna-t-elle ?',
        en: 'When Jabir asked ‘A’isha (may God be pleased with her) from behind a screen, what did she teach him?',
      },
      choices: [
        {
          id: 'ask',
          isCorrect: true,
          label: { ar: 'ألّا يستحيي من السؤال في أمور الدين', fr: 'À ne pas avoir honte de poser des questions sur la religion', en: 'Not to be shy about asking about religion' },
          feedback: { ar: 'صحيح — قالت له: اسأل يا جابر فلا حياء في الدين.', fr: 'Exact — elle lui dit : « Demande, Jābir, il n’y a pas de pudeur en religion. »', en: 'Correct — she told him: "Ask, Jabir — there is no shyness in religion."' },
        },
        {
          id: 'silent',
          isCorrect: false,
          label: { ar: 'أن يكتفي بما يعرف', fr: 'À se contenter de ce qu’il savait', en: 'To be satisfied with what he knew' },
          feedback: { ar: 'لا — شجّعته على السؤال عن كلّ شيء.', fr: 'Non — elle l’encouragea à tout demander.', en: 'No — she encouraged him to ask about everything.' },
        },
        {
          id: 'later',
          isCorrect: false,
          label: { ar: 'أن يترك الأسئلة للرجال فقط', fr: 'À laisser les questions aux hommes seuls', en: 'To leave questions to men only' },
          feedback: { ar: 'لا — كان يسألها حتى عمّا تختصّ به المرأة.', fr: 'Non — il l’interrogeait même sur ce qui concerne spécifiquement les femmes.', en: 'No — he asked her even about matters specific to women.' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من سيرة جابر — اقلب كلّ بطاقة', fr: 'Des valeurs de la vie de Jābir — retourne chaque carte', en: 'Values from Jabir’s life — flip each card' },
      values: [
        {
          id: 'curiosity',
          value: { ar: 'طلب العلم بلا حياء', fr: 'Chercher le savoir sans gêne', en: 'Seeking knowledge without shyness' },
          evidence: { ar: 'سأل عائشة رضي الله عنها عن كلّ شيءٍ من أمور الدين.', fr: 'Il interrogea ‘Ā’isha sur tout ce qui touche à la religion.', en: 'He asked ‘A’isha about everything in religion.' },
        },
        {
          id: 'wisdom',
          value: { ar: 'الدعوة بالحكمة والموعظة الحسنة', fr: 'Appeler par la sagesse et la bonne exhortation', en: 'Calling with wisdom and fair preaching' },
          evidence: { ar: 'كان هذا من أهمّ فوائد حلقة أبي بلال التي حضرها.', fr: 'Ce fut l’un des principaux bienfaits du cercle d’Abū Bilāl qu’il fréquenta.', en: 'This was one of the chief benefits of Abu Bilal’s circle, which he attended.' },
        },
        {
          id: 'prudence',
          value: { ar: 'الحكمة في حفظ الدين', fr: 'La prudence pour préserver la religion', en: 'Prudence in protecting religion' },
          evidence: { ar: 'تستّر الإمام وأصحابه لئلّا يضيع الدين بفقدانه.', fr: 'L’imam et ses compagnons restèrent discrets pour que la religion ne soit pas perdue avec lui.', en: 'The imam and his companions stayed concealed so the religion would not be lost with him.' },
        },
        {
          id: 'trust',
          value: { ar: 'الأمانة العلمية', fr: 'L’intégrité du savant', en: 'Scholarly honesty' },
          evidence: { ar: 'رواياته متّصلة إلى الرسول ﷺ، وأجمعوا على عدالته وضبطه.', fr: 'Ses transmissions remontent jusqu’au Messager ﷺ, et l’on s’accorda sur sa probité et sa précision.', en: 'His reports were linked back to the Messenger ﷺ, and scholars agreed on his integrity and accuracy.' },
        },
      ],
    },

    // 15 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'الإمام جابر بن زيد هو إمام أهل الدعوة والاستقامة: أخذ علم الصحابة عن الرسول ﷺ، وحفظه لتلاميذه رغم السجن والنفي، وترك علمًا وأثرًا ما يزال مذهب أهل الدعوة يقوم عليه.',
        fr: 'L’imam Jābir ibn Zayd est l’imam des gens de l’Appel et de la Rectitude : il reçut le savoir des Compagnons rapporté du Messager ﷺ, le transmit à ses élèves malgré la prison et l’exil, et laissa un savoir et une trace sur lesquels l’école repose encore.',
        en: 'Imam Jabir ibn Zayd is the imam of the People of the Call and Rectitude: he took the Companions’ knowledge from the Messenger ﷺ, preserved it for his students despite prison and exile, and left knowledge and works on which the school still rests.',
      },
      learned: [
        {
          ar: 'تعود تسمية أهل الدعوة والاستقامة إلى سنة 64 هـ، حين اقتدوا بالعالم الجليل جابر بن زيد.',
          fr: 'Le nom des gens de l’Appel et de la Rectitude remonte à l’an 64 H, quand ils suivirent le grand savant Jābir ibn Zayd.',
          en: 'The name People of the Call and Rectitude dates to 64 AH, when they followed the great scholar Jabir ibn Zayd.',
        },
        {
          ar: 'وُلد جابر بن زيد في عُمان حوالي سنة 21 هـ، وتعلّم في البصرة والحجاز عند كبار الصحابة، ومنهم عائشة رضي الله عنها وابن عبّاس.',
          fr: 'Jābir ibn Zayd naquit en Oman vers 21 H et étudia à Bassora et au Hedjaz auprès de grands Compagnons, dont ‘Ā’isha et Ibn ‘Abbās.',
          en: 'Jabir ibn Zayd was born in Oman around 21 AH and studied in Basra and the Hijaz with senior Companions, including ‘A’isha and Ibn ‘Abbas.',
        },
        {
          ar: 'شهد له كبار العلماء بسعة علمه، وقال قتادة يوم وفاته سنة 93 هـ: اليوم توفّي أعلم أهل العراق.',
          fr: 'De grands savants témoignèrent de l’étendue de son savoir, et Qatāda dit le jour de sa mort en 93 H : « Aujourd’hui est mort le plus savant d’Irak. »',
          en: 'Great scholars testified to the breadth of his knowledge, and Qatada said the day he died in 93 AH: "Today the most knowledgeable of Iraq has died."',
        },
        {
          ar: 'توزّع علمه بين تلاميذه كأبي عبيدة وضمام، وانتشرت آراؤه وأقواله في كتب المذهب، وجمع الربيع حديثه في مسنده، أمّا ديوانه — أوّل كتابٍ أُلّف في الفقه — فقد اختفى أثره منذ عهدٍ مبكّر.',
          fr: 'Son savoir se répartit entre ses élèves comme Abū ‘Ubayda et Ḍimām ; ses avis sont répandus dans les ouvrages de l’école et al-Rabī‘ réunit ses hadiths dans son Musnad, mais la trace de son Dīwān — le premier livre de droit — disparut très tôt.',
          en: 'His knowledge was shared among students like Abu ‘Ubayda and Dimam; his views spread through the school’s books and al-Rabi‘ gathered his hadith in his Musnad, but the trace of his Diwan — the first book on jurisprudence — vanished early.',
        },
      ],
    },
  ],
}
