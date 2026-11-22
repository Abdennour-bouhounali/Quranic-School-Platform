import type { Lesson } from '../../types'

// Source: Ibadite History textbook Grade 3 (Other ressources/Ibadite_History_S5.pdf), "الدرس الثاني والثلاثون: ازدهار نفوسة وجربة"
// (Lesson Thirty-Two: The Prosperity of Djerba and Nafusa), slides 1–10 (pages 44–53; slides 4, 6, 8, 10 are the English versions).
//   Slide 2 — الإشكالية: كان جبل نفوسة سندًا قويًّا بالرجال والعلماء لإمامة أبي الخطّاب والدولة الرستمية بعده، وكانت تتأثّر بحالها،
//             كما كان الحال في جزيرة جربة وبلاد الجريد. كيف سار أهل الدعوة في تلك النواحي بعد الرستميين؟
//             (خريطة: جبل نفوسة من نالوت وكاباو وجادو ويفرن إلى غريان، وجبل دمّر، ومطماطة، وجربة)
//   Slide 3 — موقع جبل نفوسة: سلسلة جبال في المنطقة الشمالية الغربية لليبيا؛ نفوسة قبيلة أمازيغية اعتنقت الإسلام مبكّرًا واعتمدت منهج أهل الاستقامة
//             طريقًا لتعلّم الشريعة والاجتهاد في المسائل وأخذت بآرائه، فأصبح أهلها من أوائل أهل الدعوة، ومدرسةً لعلمائها ومشايخها في بلاد المغرب،
//             وسندًا قويًّا للإمامة الرستمية في تاهرت. أضرّت واقعة مانو سنة 283 هـ بالجبل وأنهكت أهله فلم يقدروا على حماية الدولة الرستمية حين سقطت،
//             لكنّهم شاركوا الإمام أبا خزر يغلا بن زلتاف وأبا نوح سعيد سنة 358 هـ في الانتفاضة ضدّ العبيديين، ولم يُكتب لها النصر،
//             فدخل أهل الدعوة مرحلة الكتمان واشتغلوا بإصلاح مجتمعهم وتربية الأجيال. (صورة: جبل نفوسة - قصر كاباو)
//   Slide 5 — علماء ينعشون الجبل: من محن موقعة مانو هلاك الآلاف من نفوسة وفيهم أزيد من أربعمائة عالم وفقيه حتّى فُقد من يدرّس أصول الدين للأجيال؛
//             الشيخان اللذان أطال الله في أعمارهما، أبو القاسم سدرات البغطوري وعبد الله بن الخير رحمهما الله، حافظا الدين والمذهب في الجبل
//             بحلقتيهما العلميتين اللتين استمرّتا طويلًا، حتّى انتعش العلم وظهر مشايخ كبار كسليمان بن ماطوس (ق 3 هـ) أستاذ الشيخ أبي مسور يسجا (ق 3 هـ)
//             محيي العلم في جربة، وأبي زكرياء بن الخير الجناوني صاحب كتاب الوضع؛ الحلقات مهتمّة بالتعليم والذكر والمواعظ،
//             والنساء يجلسن من خلف حجاب للاستماع إلى الدروس أو الصلاة. (خريطة: أهمّ مدن وقرى جبل نفوسة)
//   Slide 7 — الجريد وجزيرة جربة: جربة جزيرة جنوب شرق تونس على ولاء للرستميين منذ عهد الإمام الثاني عبد الوهّاب سنة 171 هـ؛ الجريد المنطقة الجنوبية من تونس
//             تصل بين وادي سوف في المغرب الأوسط وجبل نفوسة في طرابلس الغرب عبر جبل دمّر ومطماطة. لمّا انهزم أهل الدعوة أمام العبيديين احتموا بجزيرة جربة،
//             والتجأ الملاحَقون إلى الجبال حيث الأمن والمنعة والاستقرار؛ فترة صعبة قلّ فيها اتّصال المناطق؛ سكّان المناطق غير المنيعة في الجريد وغيرها
//             تحمّلوا ضغطًا كبيرًا من الزيريين (خرّبوا درجين في قسطيلية سنة 440 هـ) ومن القبائل البدوية المهاجرة، فساءت أحوالهم وشغلهم قلّة الأمن
//             عن أيّ شيء آخر واتّبعوا بعد ذلك سيرة الغالب على أرضهم؛ بينما اعتنت قرى جربة وأريافها بحلقات التعليم ورعاية الطلبة الوافدين
//             حتّى سُمّيت بجزيرة المساجد. (صورتان: من قمم جبل دمّر - جنوب تونس؛ جزيرة المساجد منذ القرن 3 هـ - جربة)
//   Slide 9 — جربة منارة العلم بالمغرب: لأبي مسور يسجا بن يوجين فضلٌ في ازدهار العلم بجربة وانتظام أحوالها؛ تفرّغ للتعليم في الجزيرة منذ عاد من جبل نفوسة،
//             فأنشأ المدارس وجمع الكتب النفيسة وبنى المساجد، وتخرّج على يده علماء كبار أمثال ابنه أبي زكرياء فصيل وعبد الله بن مانوج اللمائي رحمهم الله،
//             حتّى أصبحت الجزيرة قبلةً للطلبة؛ مرّ منها الشيخ محمد بن بكر صاحب نظام الحلقة متعلّمًا عند الشيخ فصيل؛
//             وتمّ فيها تأليف إحدى الموسوعات الفقهية: «ديوان العزّابة». (خريطة جزيرة جربة: حومة السوق، ميدون، أجيم، قلالة، صدغيان، جامع أبي مسور…)
// Every fact below is taken from those slides; nothing is added from outside them. Abū Nūḥ's full name (Sa‘īd ibn Zanghīl) follows lesson 3 of this grade.
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): scenes are told through mountains, granaries, lamps, books, low white domes and boats.

const IMG = '/images/lessons/nafusa-jerba'

export const nafusaJerba: Lesson = {
  id: 'history-ibadi-g3-s1-l5',
  gradeId: 'history-ibadi-g3',
  moduleId: 'history-ibadi-g3',
  semesterId: 'history-ibadi-g3-s1',
  order: 5,
  status: 'published',
  estimatedMinutes: 40,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'قريةٌ حجرية بين أشجار الزيتون على سفح جبلٍ صخريّ، وفي الأفق بحرٌ هادئ تتوسّطه جزيرةٌ صغيرة ذات قبابٍ بيضاء',
    fr: 'Un village de pierre parmi les oliviers au flanc d’une montagne rocheuse ; à l’horizon, une mer calme et une petite île aux coupoles claires',
    en: 'A stone village among olive trees on a rocky mountainside; on the horizon, a calm sea and a small island with pale domes',
  },
  title: {
    ar: 'ازدهار نفوسة وجربة',
    fr: 'La prospérité de Nafūsa et de Djerba',
    en: 'The prosperity of Nafusa and Djerba',
  },
  description: {
    ar: 'جبلٌ وجزيرة حفظا العلم بعد سقوط الدولة الرستمية. اقرأ والعب لتعرف كيف صارت جربة «جزيرة المساجد».',
    fr: 'Une montagne et une île gardèrent le savoir après la chute de l’État rustamide. Lis et joue pour savoir comment Djerba devint « l’île des mosquées ».',
    en: 'A mountain and an island kept knowledge alive after the Rustamid state fell. Read and play to learn how Djerba became "the Island of Mosques".',
  },

  sections: [
    // 01 — Hero (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'قريةٌ حجرية بين أشجار الزيتون على سفح جبلٍ صخريّ، وفي الأفق بحرٌ هادئ تتوسّطه جزيرةٌ صغيرة ذات قبابٍ بيضاء',
        fr: 'Un village de pierre parmi les oliviers au flanc d’une montagne rocheuse ; à l’horizon, une mer calme et une petite île aux coupoles claires',
        en: 'A stone village among olive trees on a rocky mountainside; on the horizon, a calm sea and a small island with pale domes',
      },
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'كيف سار أهل الدعوة في نفوسة وجربة والجريد بعد الرستميين؟',
        fr: 'Comment vécurent les gens de l’Appel à Nafūsa, à Djerba et au Djérid après les Rustamides ?',
        en: 'How did the People of the Call carry on in Nafusa, Djerba and the Jarid after the Rustamids?',
      },
      intro: {
        ar: 'كان جبل نفوسة سندًا قويًّا بالرجال والعلماء لإمامة أبي الخطّاب وللدولة الرستمية بعده، وكان يتأثّر بحالها، كما كان الحال في جزيرة جربة وبلاد الجريد.',
        fr: 'Le djebel Nafūsa fut, par ses hommes et ses savants, un solide appui pour l’imamat d’Abū al-Khaṭṭāb puis pour l’État rustamide, et il partageait son sort — tout comme l’île de Djerba et le pays du Djérid.',
        en: 'The Nafusa Mountain was a strong support, with its men and scholars, for the imamate of Abu al-Khattab and for the Rustamid state after him, and it shared that state’s fortunes — as did the island of Djerba and the land of the Jarid.',
      },
    },

    // 02 — Mission map
    {
      kind: 'missions',
      id: 'missions',
      title: { ar: 'أربع مهمّات', fr: 'Quatre missions', en: 'Four missions' },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنتقل إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'ماذا أصاب جبل نفوسة؟', fr: 'Qu’arriva-t-il au djebel Nafūsa ?', en: 'What happened to the Nafusa Mountain?' },
          target: 'reading-nafusa',
          teaser: { ar: 'واقعةٌ، فانتفاضة، فكتمان.', fr: 'Une bataille, un soulèvement, le secret.', en: 'A battle, an uprising, then secrecy.' },
        },
        {
          id: 'm2',
          question: { ar: 'من أعاد العلم إلى الجبل؟', fr: 'Qui ramena le savoir dans la montagne ?', en: 'Who brought knowledge back to the mountain?' },
          target: 'reading-halqa',
          teaser: { ar: 'شيخان وحلقتان.', fr: 'Deux cheikhs, deux cercles.', en: 'Two sheikhs, two circles.' },
        },
        {
          id: 'm3',
          question: { ar: 'أين الأمان: الجزيرة أم الجريد؟', fr: 'Où est la sécurité : l’île ou le Djérid ?', en: 'Where was it safe: the island or the Jarid?' },
          target: 'reading-djerba',
          teaser: { ar: 'ضع كلّ حالٍ على كفّته.', fr: 'Pose chaque situation sur son plateau.', en: 'Put each situation on its pan.' },
        },
        {
          id: 'm4',
          question: { ar: 'كيف صارت جربة منارةً للعلم؟', fr: 'Comment Djerba devint-elle un phare du savoir ?', en: 'How did Djerba become a beacon of knowledge?' },
          target: 'reading-miswar',
          teaser: { ar: 'مدارس، وكتب، ومساجد.', fr: 'Des écoles, des livres, des mosquées.', en: 'Schools, books and mosques.' },
        },
      ],
    },

    // 03 — Reading: who are the people of Nafusa? (slide 3)
    {
      kind: 'reading',
      id: 'reading-nafusa',
      title: { ar: 'اقرأ في دقيقة: أهل الجبل', fr: 'Lis en une minute : les gens de la montagne', en: 'A one-minute read: the mountain’s people' },
      intro: {
        ar: 'ستّ بطاقاتٍ قصيرة، ثمّ تبدأ سلسلة الأحداث!',
        fr: 'Six courtes cartes, puis la chaîne des événements commence !',
        en: 'Six short cards, then the chain of events begins!',
      },
      image: `${IMG}/qasr.png`,
      imageAlt: {
        ar: 'قصرٌ جبليّ قديم لخزن المؤن: غرفٌ مقوّسة صغيرة متراكبة في طوابق حول ساحة، تبرز من جدرانها الطينية أعوادٌ خشبية',
        fr: 'Un ancien grenier fortifié de montagne : de petites cellules voûtées empilées en étages autour d’une cour, des poutres de bois dépassant des murs de terre',
        en: 'An old fortified mountain granary: small arched cells stacked in tiers around a courtyard, wooden beams jutting from the earthen walls',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'جبلٌ وقبيلة', fr: 'Une montagne et une tribu', en: 'A mountain and a tribe' },
          text: {
            ar: 'جبل نفوسة سلسلة جبالٍ تقع في المنطقة الشمالية الغربية لليبيا، ومن معالمه قصر كاباو. ونفوسة قبيلةٌ أمازيغية اعتنقت الإسلام مبكّرًا.',
            fr: 'Le djebel Nafūsa est une chaîne de montagnes du nord-ouest de la Libye ; on y trouve le qaṣr (grenier fortifié) de Kābāw. Nafūsa est une tribu amazighe qui embrassa l’islam très tôt.',
            en: 'The Nafusa Mountain is a mountain range in the north-west of Libya; one of its landmarks is the qasr (fortified granary) of Kabaw. Nafusa is an Amazigh tribe that embraced Islam early.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'منهج أهل الاستقامة', fr: 'La voie des gens de la Rectitude', en: 'The way of the People of Rectitude' },
          text: {
            ar: 'اعتمدت نفوسة منهج أهل الاستقامة طريقًا لتعلّم الشريعة والاجتهاد في المسائل، وأخذت بآرائه.',
            fr: 'Nafūsa adopta la voie des gens de la Rectitude pour apprendre la Loi et pratiquer l’effort de réflexion (ijtihād) sur les questions, et elle en suivit les avis.',
            en: 'Nafusa adopted the way of the People of Rectitude as its path for learning the Shari‘a and reasoning on questions (ijtihad), and it followed its views.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'مدرسةٌ وسند', fr: 'Une école et un appui', en: 'A school and a support' },
          text: {
            ar: 'فأصبح أهل نفوسة من أوائل أهل الدعوة، ومدرسةً لعلمائها ومشايخها في بلاد المغرب، وسندًا قويًّا للإمامة الرستمية في تاهرت.',
            fr: 'Les gens de Nafūsa devinrent ainsi parmi les premiers gens de l’Appel, une école pour ses savants et ses cheikhs au Maghreb, et un solide appui de l’imamat rustamide de Tāhert.',
            en: 'So the people of Nafusa became among the first People of the Call, a school for its scholars and sheikhs in the Maghreb, and a strong support for the Rustamid imamate in Tahert.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'على الخريطة', fr: 'Sur la carte', en: 'On the map' },
          text: {
            ar: 'من مدن جبل نفوسة وقراه على الخريطة: نالوت وكاباو وجادو ويفرن وغريان.',
            fr: 'Parmi les villes et villages du djebel Nafūsa sur la carte : Nālūt, Kābāw, Jādū, Yafran et Gharyān.',
            en: 'Among the towns and villages of the Nafusa Mountain on the map: Nalut, Kabaw, Jadu, Yefren and Gharyan.',
          },
        },
        {
          id: 'p5',
          heading: { ar: 'واقعة مانو', fr: 'La bataille de Mānū', en: 'The battle of Manu' },
          text: {
            ar: 'سنة 283 هـ وقعت واقعة مانو، فأضرّت بالجبل وأنهكت أهله، فلم يقدروا على حماية الدولة الرستمية حين سقطت.',
            fr: 'En 283 H eut lieu la bataille de Mānū : elle nuisit à la montagne et épuisa ses habitants, qui ne purent défendre l’État rustamide quand il tomba.',
            en: 'In 283 AH the battle of Manu took place: it harmed the mountain and exhausted its people, so they could not protect the Rustamid state when it fell.',
          },
        },
        {
          id: 'p6',
          heading: { ar: 'انتفاضةٌ ثمّ كتمان', fr: 'Un soulèvement, puis le secret', en: 'An uprising, then secrecy' },
          text: {
            ar: 'لكنّهم شاركوا الإمام أبا خزر يغلا بن زلتاف وأبا نوح سعيد سنة 358 هـ في الانتفاضة ضدّ العبيديين، ولم يُكتب لها النصر، فدخل أهل الدعوة مرحلة الكتمان، واشتغلوا بإصلاح مجتمعهم وتربية الأجيال.',
            fr: 'Pourtant, en 358 H, ils se joignirent à l’imam Abū Khazar Yaghlā ibn Zultāf et à Abū Nūḥ Sa‘īd dans le soulèvement contre les Ubaydides ; il ne fut pas couronné de victoire, et les gens de l’Appel entrèrent dans la phase du secret, se consacrant à réformer leur société et à éduquer les générations.',
            en: 'Yet in 358 AH they joined Imam Abu Khazar Yaghla ibn Zultaf and Abu Nuh Sa‘id in the uprising against the Ubaydids; it was not granted victory, and the People of the Call entered the stage of secrecy, turning to reforming their society and raising the generations.',
          },
        },
      ],
    },

    // 04 — Domino chain: from Manu to the stage of secrecy (slide 3)
    {
      kind: 'chain',
      id: 'manu-chain',
      title: { ar: 'من مانو إلى الكتمان', fr: 'De Mānū au secret', en: 'From Manu to secrecy' },
      intro: {
        ar: 'أسقِط الأحجار واحدًا بعد الآخر: اختر ما حدث بعد كلّ حدث.',
        fr: 'Fais tomber les dominos un à un : choisis ce qui suivit chaque événement.',
        en: 'Topple the dominoes one by one: choose what followed each event.',
      },
      image: `${IMG}/kitman.png`,
      imageAlt: {
        ar: 'بابٌ خشبيّ قديم مغلق في جدارٍ حجريّ سميك عند الغسق، ينساب من تحته ضوءٌ دافئ، وبجانبه شجرة زيتون',
        fr: 'Une vieille porte de bois close dans un épais mur de pierre au crépuscule, une lumière chaude filtrant à son pied, un olivier à côté',
        en: 'An old closed wooden door in a thick stone wall at dusk, warm light spilling from beneath it, an olive tree beside it',
      },
      start: {
        ar: 'سنة 283 هـ وقعت واقعة مانو.',
        fr: 'En 283 H eut lieu la bataille de Mānū.',
        en: 'In 283 AH the battle of Manu took place.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'ماذا فعلت الواقعة بجبل نفوسة؟', fr: 'Que fit cette bataille au djebel Nafūsa ?', en: 'What did the battle do to the Nafusa Mountain?' },
          correct: { ar: 'أضرّت بالجبل وأنهكت أهله', fr: 'Elle nuisit à la montagne et épuisa ses habitants', en: 'It harmed the mountain and exhausted its people' },
          distractors: [
            { label: { ar: 'زادت الجبل قوّةً ورجالًا', fr: 'Elle rendit la montagne plus forte', en: 'It made the mountain stronger' }, hint: { ar: 'بل هلك فيها الآلاف من نفوسة.', fr: 'Au contraire : des milliers de gens de Nafūsa y périrent.', en: 'On the contrary: thousands of Nafusa’s people perished in it.' } },
            { label: { ar: 'لم تغيّر شيئًا', fr: 'Elle ne changea rien', en: 'It changed nothing' }, hint: { ar: 'كانت محنةً كبيرة أنهكت أهل الجبل.', fr: 'Ce fut une grande épreuve qui épuisa la montagne.', en: 'It was a great trial that wore the mountain out.' } },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'فلمّا سقطت الدولة الرستمية…', fr: 'Alors, quand l’État rustamide tomba…', en: 'So when the Rustamid state fell…' },
          correct: { ar: 'لم يقدر أهل نفوسة على حمايتها', fr: 'Les gens de Nafūsa ne purent la défendre', en: 'The people of Nafusa could not protect it' },
          distractors: [
            { label: { ar: 'أنقذوها وأعادوا الإمامة', fr: 'Ils la sauvèrent et rétablirent l’imamat', en: 'They saved it and restored the imamate' }, hint: { ar: 'كانوا منهَكين بعد مانو.', fr: 'Ils étaient épuisés depuis Mānū.', en: 'They were exhausted after Manu.' } },
            { label: { ar: 'انتقلوا جميعًا إلى تاهرت', fr: 'Ils partirent tous pour Tāhert', en: 'They all moved to Tahert' }, hint: { ar: 'بقوا في جبلهم، لكنّهم عجزوا عن حمايتها.', fr: 'Ils restèrent dans leur montagne, sans pouvoir la défendre.', en: 'They stayed in their mountain but could not protect it.' } },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'لكنّهم سنة 358 هـ…', fr: 'Pourtant, en 358 H…', en: 'Yet in 358 AH…' },
          correct: { ar: 'شاركوا في الانتفاضة ضدّ العبيديين', fr: 'Ils prirent part au soulèvement contre les Ubaydides', en: 'They joined the uprising against the Ubaydids' },
          distractors: [
            { label: { ar: 'حاربوا الزيريين في درجين', fr: 'Ils combattirent les Zirides à Darjīn', en: 'They fought the Zirids at Darjin' }, hint: { ar: 'درجين خرّبها الزيريون لاحقًا، سنة 440 هـ.', fr: 'Darjīn fut détruite par les Zirides plus tard, en 440 H.', en: 'Darjin was destroyed by the Zirids later, in 440 AH.' } },
            { label: { ar: 'هاجروا إلى بلاد السودان', fr: 'Ils émigrèrent au Soudan', en: 'They migrated to the Sudan' }, hint: { ar: 'شاركوا مع الإمام أبي خزر يغلا بن زلتاف وأبي نوح سعيد.', fr: 'Ils se joignirent à l’imam Abū Khazar Yaghlā ibn Zultāf et à Abū Nūḥ Sa‘īd.', en: 'They joined Imam Abu Khazar Yaghla ibn Zultaf and Abu Nuh Sa‘id.' } },
          ],
        },
        {
          id: 's4',
          prompt: { ar: 'وكيف انتهت الانتفاضة؟', fr: 'Comment finit le soulèvement ?', en: 'How did the uprising end?' },
          correct: { ar: 'لم يُكتب لها النصر', fr: 'Il ne fut pas couronné de victoire', en: 'It was not granted victory' },
          distractors: [
            { label: { ar: 'انتصرت وقامت دولةٌ جديدة', fr: 'Il triompha et un nouvel État naquit', en: 'It won and a new state arose' }, hint: { ar: 'الدرس يقول: لم يُكتب لها النصر.', fr: 'La leçon dit : la victoire ne lui fut pas donnée.', en: 'The lesson says victory was not granted to it.' } },
            { label: { ar: 'لم تقع أصلًا', fr: 'Il n’eut jamais lieu', en: 'It never happened' }, hint: { ar: 'وقعت سنة 358 هـ، مع أبي خزر وأبي نوح.', fr: 'Il eut lieu en 358 H, avec Abū Khazar et Abū Nūḥ.', en: 'It took place in 358 AH, with Abu Khazar and Abu Nuh.' } },
          ],
        },
        {
          id: 's5',
          prompt: { ar: 'فماذا فعل أهل الدعوة بعدها؟', fr: 'Que firent alors les gens de l’Appel ?', en: 'What did the People of the Call do next?' },
          correct: { ar: 'دخلوا مرحلة الكتمان، وأصلحوا مجتمعهم وربّوا الأجيال', fr: 'Ils entrèrent dans la phase du secret, réformèrent leur société et éduquèrent les générations', en: 'They entered the stage of secrecy, reformed their society and raised the generations' },
          distractors: [
            { label: { ar: 'تركوا العلم واليأسُ يملؤهم', fr: 'Ils abandonnèrent le savoir, découragés', en: 'They gave up learning in despair' }, hint: { ar: 'بل اشتغلوا بالإصلاح والتربية.', fr: 'Au contraire : ils se consacrèrent à la réforme et à l’éducation.', en: 'Rather, they turned to reform and education.' } },
            { label: { ar: 'أعلنوا إمامةً جديدة فورًا', fr: 'Ils proclamèrent aussitôt un nouvel imamat', en: 'They at once proclaimed a new imamate' }, hint: { ar: 'الدرس يذكر الكتمان وإصلاح المجتمع، لا إمامةً جديدة.', fr: 'La leçon parle de secret et de réforme de la société, non d’un nouvel imamat.', en: 'The lesson speaks of secrecy and reforming society, not of a new imamate.' } },
          ],
        },
      ],
      ending: {
        ar: 'أنهكت مانو الجبل، وسقطت الدولة، ولم تنتصر الانتفاضة… فاختار أهل الدعوة طريقًا هادئًا: الكتمان، وإصلاح المجتمع، وتربية الأجيال.',
        fr: 'Mānū épuisa la montagne, l’État tomba, le soulèvement échoua… Les gens de l’Appel choisirent alors une voie discrète : le secret, la réforme de la société et l’éducation des générations.',
        en: 'Manu wore out the mountain, the state fell, the uprising did not win… so the People of the Call chose a quiet path: secrecy, reforming society and raising the generations.',
      },
    },

    // 05 — Reading: scholars revive the mountain (slides 5–6)
    {
      kind: 'reading',
      id: 'reading-halqa',
      title: { ar: 'اقرأ: علماء ينعشون الجبل', fr: 'Lis : des savants raniment la montagne', en: 'Read: scholars revive the mountain' },
      intro: {
        ar: 'اقرأ كيف عاد العلم إلى الجبل بعد مانو، ثمّ ادخل الحلقة في اللعبة التالية.',
        fr: 'Lis comment le savoir revint dans la montagne après Mānū, puis entre dans le cercle au jeu suivant.',
        en: 'Read how knowledge came back to the mountain after Manu, then step into the circle in the next game.',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'محنةٌ كبيرة', fr: 'Une grande épreuve', en: 'A great trial' },
          text: {
            ar: 'من محن موقعة مانو هلاك الآلاف من نفوسة، وفيهم أزيد من أربعمائة عالمٍ وفقيه، حتّى فُقد من يدرّس أصول الدين للأجيال.',
            fr: 'Parmi les épreuves de Mānū : la mort de milliers de gens de Nafūsa, dont plus de quatre cents savants et juristes, au point qu’il ne resta plus personne pour enseigner les fondements de la religion aux générations.',
            en: 'Among the trials of Manu: thousands of Nafusa’s people perished, more than four hundred scholars and jurists among them, until no one was left to teach the foundations of the religion to the generations.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'شيخان وحلقتان', fr: 'Deux cheikhs, deux cercles', en: 'Two sheikhs, two circles' },
          text: {
            ar: 'الشيخان اللذان أطال الله في أعمارهما، أبو القاسم سدرات البغطوري وعبد الله بن الخير رحمهما الله، حفظا الدين والمذهب في الجبل بحلقتيهما العلميتين اللتين استمرّتا طويلًا.',
            fr: 'Les deux cheikhs à qui Dieu accorda une longue vie, Abū al-Qāsim Sadrāt al-Baghṭūrī et ‘Abd Allāh ibn al-Khayr — que Dieu leur fasse miséricorde —, préservèrent la religion et l’école dans la montagne grâce à leurs deux cercles d’étude, qui durèrent longtemps.',
            en: 'The two sheikhs whom God granted long lives, Abu al-Qasim Sadrat al-Baghturi and ‘Abd Allah ibn al-Khayr — may God have mercy on them — preserved the religion and the school in the mountain through their two study circles, which lasted a long time.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'مشايخ كبار', fr: 'De grands cheikhs', en: 'Great sheikhs' },
          text: {
            ar: 'فانتعش العلم وظهر مشايخ كبار، كسليمان بن ماطوس (القرن 3 هـ) أستاذ الشيخ أبي مسور يسجا محيي العلم في جربة، وأبي زكرياء بن الخير الجناوني صاحب «كتاب الوضع».',
            fr: 'Le savoir refleurit et de grands cheikhs apparurent, comme Sulaymān ibn Māṭūs (IIIᵉ siècle H), maître du cheikh Abū Miswar Yasjā qui fit revivre le savoir à Djerba, et Abū Zakariyyā’ ibn al-Khayr al-Jannāwunī, auteur du « Kitāb al-Waḍ‘ ».',
            en: 'Knowledge revived and great sheikhs emerged, such as Sulayman ibn Matus (3rd century AH), teacher of Sheikh Abu Miswar Yasja, reviver of knowledge in Djerba, and Abu Zakariya ibn al-Khayr al-Jannawuni, author of "Kitab al-Wad‘".',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'في الحلقة', fr: 'Dans le cercle', en: 'In the circle' },
          text: {
            ar: 'كانت الحلقات مهتمّةً بالتعليم والذكر والمواعظ، وكانت النساء يجلسن من خلف حجابٍ للاستماع إلى الدروس أو للصلاة.',
            fr: 'Les cercles se consacraient à l’enseignement, au rappel de Dieu (dhikr) et aux exhortations ; les femmes s’asseyaient derrière un rideau pour écouter les leçons ou pour prier.',
            en: 'The circles were devoted to teaching, remembrance of God (dhikr) and exhortation; women would sit behind a curtain to listen to the lessons or to pray.',
          },
        },
        {
          id: 'p5',
          heading: { ar: 'هكذا يُحفظ العلم', fr: 'Ainsi se garde le savoir', en: 'How knowledge is kept' },
          text: {
            ar: 'حلقتان صبورتان أعادتا النور إلى الجبل كلّه: هكذا يُحفظ العلم حين يقلّ العلماء.',
            fr: 'Deux cercles patients rendirent la lumière à toute la montagne : ainsi se garde le savoir quand les savants se font rares.',
            en: 'Two patient circles brought light back to the whole mountain: this is how knowledge is kept when scholars are few.',
          },
        },
      ],
    },

    // 06 — Explorer: the study circle that revived the mountain (slide 5)
    {
      kind: 'explorer',
      id: 'halqa-lantern',
      title: { ar: 'مصباحٌ في حلقة الجبل', fr: 'Une lampe dans le cercle de la montagne', en: 'A lamp in the mountain’s circle' },
      intro: {
        ar: 'بعد مانو كاد العلم ينطفئ في الجبل. اضغط على النقاط المضيئة في الغرفة واكتشف خمسة أسرار: من أعاد إشعاله؟',
        fr: 'Après Mānū, le savoir faillit s’éteindre dans la montagne. Touche les points lumineux de la salle et découvre cinq secrets : qui le ralluma ?',
        en: 'After Manu, knowledge nearly went out in the mountain. Tap the glowing points in the room and find five secrets: who lit it again?',
      },
      image: `${IMG}/halqa-lantern.png`,
      imageAlt: {
        ar: 'غرفةٌ حجرية مقبّبة في الليل: حصيرٌ مستدير يتوسّطه كتابٌ مفتوح على حاملٍ خشبيّ ومصباحٌ زيتيّ، وكوّةٌ فيها كتبٌ ومسبحة، وستارٌ منسوج معلّق، وقوسٌ في الجدار الخلفيّ',
        fr: 'Une salle voûtée de pierre, la nuit : une natte ronde avec un livre ouvert sur un pupitre de bois et une lampe à huile, une niche avec des livres et un chapelet, un rideau tissé suspendu, une arche dans le mur du fond',
        en: 'A stone-vaulted room at night: a round mat with an open book on a wooden stand and an oil lamp, a niche with books and prayer beads, a hanging woven curtain, an arch in the back wall',
      },
      hotspots: [
        {
          id: 'two-sheikhs',
          x: 43,
          y: 66,
          label: { ar: 'شعلةٌ لم تنطفئ', fr: 'Une flamme restée allumée', en: 'A flame that stayed lit' },
          description: {
            ar: 'الشيخان اللذان أطال الله في أعمارهما، أبو القاسم سدرات البغطوري وعبد الله بن الخير رحمهما الله، حفظا الدين والمذهب في الجبل بحلقتيهما العلميتين اللتين استمرّتا طويلًا.',
            fr: 'Les deux cheikhs à qui Dieu accorda une longue vie, Abū al-Qāsim Sadrāt al-Baghṭūrī et ‘Abd Allāh ibn al-Khayr — que Dieu leur fasse miséricorde —, préservèrent la religion et l’école dans la montagne grâce à leurs deux cercles d’étude, qui durèrent longtemps.',
            en: 'The two sheikhs whom God granted long lives, Abu al-Qasim Sadrat al-Baghturi and ‘Abd Allah ibn al-Khayr — may God have mercy on them — preserved the religion and the school in the mountain through their two study circles, which lasted a long time.',
          },
        },
        {
          id: 'circle-life',
          x: 8,
          y: 46,
          label: { ar: 'ماذا في الحلقة؟', fr: 'Que fait-on dans le cercle ?', en: 'What happens in the circle?' },
          description: {
            ar: 'كانت الحلقات مهتمّةً بالتعليم والذكر والمواعظ.',
            fr: 'Les cercles se consacraient à l’enseignement, au rappel de Dieu (dhikr) et aux exhortations.',
            en: 'The circles were devoted to teaching, remembrance of God (dhikr) and exhortation.',
          },
        },
        {
          id: 'women',
          x: 83,
          y: 50,
          label: { ar: 'من وراء الستار', fr: 'Derrière le rideau', en: 'Behind the curtain' },
          description: {
            ar: 'كانت النساء يجلسن من خلف حجابٍ للاستماع إلى الدروس أو للصلاة.',
            fr: 'Les femmes s’asseyaient derrière un rideau pour écouter les leçons ou pour prier.',
            en: 'Women would sit behind a curtain to listen to the lessons or to pray.',
          },
        },
        {
          id: 'book-wad',
          x: 51,
          y: 74,
          label: { ar: 'كتابٌ من الجبل', fr: 'Un livre de la montagne', en: 'A book from the mountain' },
          description: {
            ar: 'انتعش العلم في الجبل وظهر مشايخ كبار، منهم أبو زكرياء بن الخير الجناوني صاحب «كتاب الوضع»، رحمه الله.',
            fr: 'Le savoir refleurit dans la montagne et de grands cheikhs apparurent, dont Abū Zakariyyā’ ibn al-Khayr al-Jannāwunī, auteur du « Kitāb al-Waḍ‘ » — que Dieu lui fasse miséricorde.',
            en: 'Knowledge revived in the mountain and great sheikhs emerged, among them Abu Zakariya ibn al-Khayr al-Jannawuni, author of "Kitab al-Wad‘" — may God have mercy on him.',
          },
        },
        {
          id: 'door-to-jerba',
          x: 51,
          y: 47,
          label: { ar: 'بابٌ نحو جربة', fr: 'Une porte vers Djerba', en: 'A door toward Djerba' },
          description: {
            ar: 'ومن مشايخ الجبل سليمان بن ماطوس (القرن 3 هـ)، أستاذ الشيخ أبي مسور يسجا الذي سيُحيي العلم في جربة.',
            fr: 'Parmi les cheikhs de la montagne : Sulaymān ibn Māṭūs (IIIᵉ siècle H), maître du cheikh Abū Miswar Yasjā, qui fera revivre le savoir à Djerba.',
            en: 'Among the mountain’s sheikhs was Sulayman ibn Matus (3rd century AH), teacher of Sheikh Abu Miswar Yasja, who would revive knowledge in Djerba.',
          },
        },
      ],
    },

    // 07 — Quiz: the numbers of the trial (slides 3, 5)
    {
      kind: 'quiz',
      id: 'manu-numbers',
      title: { ar: 'ما الرقم؟', fr: 'Quel est le nombre ?', en: 'What is the number?' },
      intro: {
        ar: 'سؤالان عن أرقام المحنة: اختر الرقم الصحيح.',
        fr: 'Deux questions sur les chiffres de l’épreuve : choisis le bon nombre.',
        en: 'Two questions on the numbers of the trial: pick the right one.',
      },
      questions: [
        {
          id: 'n1',
          type: 'mcq',
          question: {
            ar: 'هلك في موقعة مانو الآلاف من نفوسة. كم كان بينهم من عالمٍ وفقيه؟',
            fr: 'Des milliers de gens de Nafūsa périrent à Mānū. Combien de savants et de juristes parmi eux ?',
            en: 'Thousands of Nafusa’s people perished at Manu. How many scholars and jurists were among them?',
          },
          options: [
            { id: 'a', label: { ar: 'نحو مائة', fr: 'Environ cent', en: 'About one hundred' } },
            { id: 'b', label: { ar: 'أزيد من أربعمائة', fr: 'Plus de quatre cents', en: 'More than four hundred' } },
            { id: 'c', label: { ar: 'نحو ألف', fr: 'Environ mille', en: 'About a thousand' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'أزيد من أربعمائة عالمٍ وفقيه! حتّى فُقد من يدرّس أصول الدين للأجيال. كانت هذه من أشدّ محن موقعة مانو.',
            fr: 'Plus de quatre cents savants et juristes ! Au point qu’il ne resta plus personne pour enseigner les fondements de la religion aux générations. Ce fut l’une des plus dures épreuves de Mānū.',
            en: 'More than four hundred scholars and jurists! So many that no one was left to teach the foundations of the religion to the generations. This was among the hardest trials of Manu.',
          },
        },
        {
          id: 'n2',
          type: 'mcq',
          question: {
            ar: 'كم سنةً مرّت بين واقعة مانو (283 هـ) والانتفاضة ضدّ العبيديين (358 هـ)؟',
            fr: 'Combien d’années séparent la bataille de Mānū (283 H) du soulèvement contre les Ubaydides (358 H) ?',
            en: 'How many years passed between the battle of Manu (283 AH) and the uprising against the Ubaydids (358 AH)?',
          },
          options: [
            { id: 'a', label: { ar: '25 سنة', fr: '25 ans', en: '25 years' } },
            { id: 'b', label: { ar: '75 سنة', fr: '75 ans', en: '75 years' } },
            { id: 'c', label: { ar: '150 سنة', fr: '150 ans', en: '150 years' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'خمسٌ وسبعون سنة (358 − 283)! ومع أنّ مانو أنهكتهم، عاد أهل نفوسة فشاركوا في الانتفاضة مع أبي خزر وأبي نوح.',
            fr: 'Soixante-quinze ans (358 − 283) ! Bien que Mānū les eût épuisés, les gens de Nafūsa revinrent prendre part au soulèvement avec Abū Khazar et Abū Nūḥ.',
            en: 'Seventy-five years (358 − 283)! Though Manu had worn them out, the people of Nafusa came back to join the uprising with Abu Khazar and Abu Nuh.',
          },
        },
      ],
    },

    // 08 — Reading: the Jarid and the island of Djerba (slide 7)
    {
      kind: 'reading',
      id: 'reading-djerba',
      title: { ar: 'اقرأ في دقيقة: إلى الجزيرة!', fr: 'Lis en une minute : cap sur l’île !', en: 'A one-minute read: to the island!' },
      intro: {
        ar: 'أربع بطاقات، ثمّ الميزان في انتظارك.',
        fr: 'Quatre cartes, puis la balance t’attend.',
        en: 'Four cards, then the scales await you.',
      },
      image: `${IMG}/djerba-mosque.png`,
      imageAlt: {
        ar: 'مسجدٌ صغير أبيض منخفض بقبّةٍ ملساء ورواقٍ ذي قوسين، بين النخيل على رملٍ ذهبيّ والبحر الأزرق خلفه',
        fr: 'Une petite mosquée blanche et basse à coupole lisse, avec un porche à deux arches, parmi les palmiers sur le sable doré, la mer bleue derrière',
        en: 'A small low white mosque with a smooth dome and a two-arched porch, among palms on golden sand with the blue sea behind',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'جزيرةٌ وفيّة', fr: 'Une île fidèle', en: 'A loyal island' },
          text: {
            ar: 'جربة جزيرةٌ تقع جنوب شرق تونس، كانت على ولاءٍ للرستميين منذ عهد الإمام الثاني عبد الوهّاب، نحو سنة 171 هـ.',
            fr: 'Djerba est une île du sud-est de la Tunisie, fidèle aux Rustamides depuis le temps du deuxième imam, ‘Abd al-Wahhāb, vers l’an 171 H.',
            en: 'Djerba is an island in the south-east of Tunisia, loyal to the Rustamids from the time of the second imam, ‘Abd al-Wahhab, about 171 AH.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'الجريد: حلقة الوصل', fr: 'Le Djérid : le trait d’union', en: 'The Jarid: the link' },
          text: {
            ar: 'والجريد هي المنطقة الجنوبية من تونس، تصل بين وادي سوف في المغرب الأوسط وجبل نفوسة في طرابلس الغرب، عبر جبل دمّر ومطماطة.',
            fr: 'Le Djérid est la région sud de la Tunisie ; il relie l’Oued Souf, au Maghreb central, au djebel Nafūsa, en Tripolitaine, par le djebel Demmer et Matmata.',
            en: 'The Jarid is the southern region of Tunisia, linking Wadi Souf in the central Maghreb to the Nafusa Mountain in Tripolitania, by way of Jabal Demmer and Matmata.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'ملجأٌ بعد الهزيمة', fr: 'Un refuge après la défaite', en: 'A refuge after defeat' },
          text: {
            ar: 'لمّا انهزم أهل الدعوة أمام العبيديين احتموا بجزيرة جربة، كما التجأ الملاحَقون إلى الجبال، حيث الأمن والمنعة والاستقرار.',
            fr: 'Vaincus par les Ubaydides, les gens de l’Appel se réfugièrent sur l’île de Djerba, tandis que ceux qu’on poursuivait gagnèrent les montagnes, où régnaient sécurité, protection et stabilité.',
            en: 'When the Ubaydids defeated them, the People of the Call took shelter on the island of Djerba, while those being pursued fled to the mountains, where there was safety, protection and stability.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'فترةٌ صعبة', fr: 'Une période difficile', en: 'A hard time' },
          text: {
            ar: 'وكانت هذه الفترة صعبة، إذ قلّ فيها اتّصال المناطق بعضها ببعض. فكيف كان حال كلّ منطقة؟ الميزان يجيبك!',
            fr: 'Ce fut une période difficile, car les régions communiquaient de moins en moins entre elles. Quel fut le sort de chacune ? La balance te répond !',
            en: 'It was a hard time, for the regions had less and less contact with one another. How did each region fare? The scales will tell you!',
          },
        },
      ],
    },

    // 09 — Balance: protected places vs exposed places (slide 7)
    {
      kind: 'balance',
      id: 'safe-or-exposed',
      title: { ar: 'ميزان الأمان', fr: 'La balance de la sécurité', en: 'The scales of safety' },
      intro: {
        ar: 'ضع كلّ بطاقةٍ على كفّتها: هل تصف الجزيرة والجبال المنيعة، أم الجريد والمناطق غير المنيعة؟',
        fr: 'Pose chaque carte sur son plateau : décrit-elle l’île et les montagnes protégées, ou le Djérid et les régions exposées ?',
        en: 'Place each card on its pan: does it describe the protected island and mountains, or the Jarid and the exposed regions?',
      },
      left: { ar: 'جربة والجبال المنيعة', fr: 'Djerba et les montagnes protégées', en: 'Djerba and the protected mountains' },
      right: { ar: 'الجريد والمناطق غير المنيعة', fr: 'Le Djérid et les régions exposées', en: 'The Jarid and the exposed regions' },
      weights: [
        {
          id: 'w1',
          text: { ar: 'أمنٌ ومنعةٌ واستقرار', fr: 'Sécurité, protection et stabilité', en: 'Safety, protection and stability' },
          side: 'left',
          explanation: { ar: 'لذلك التجأ إليها الملاحَقون.', fr: 'C’est pourquoi ceux qu’on poursuivait s’y réfugièrent.', en: 'That is why those being pursued fled there.' },
        },
        {
          id: 'w2',
          text: { ar: 'ضغطٌ كبير من الزيريين', fr: 'Une forte pression des Zirides', en: 'Heavy pressure from the Zirids' },
          side: 'right',
          explanation: { ar: 'تحمّله من سكن المناطق غير المنيعة في الجريد وغيرها.', fr: 'Ceux qui vivaient dans les zones peu protégées du Djérid et d’ailleurs la subirent.', en: 'It fell on those living in the unprotected areas of the Jarid and elsewhere.' },
        },
        {
          id: 'w3',
          text: { ar: 'قرًى تعتني بحلقات التعليم', fr: 'Des villages qui veillent aux cercles d’étude', en: 'Villages that look after study circles' },
          side: 'left',
          explanation: { ar: 'اعتنت قرى جربة وأريافها بحلقات التعليم.', fr: 'Les villages et les campagnes de Djerba veillèrent aux cercles d’enseignement.', en: 'The villages and countryside of Djerba looked after the teaching circles.' },
        },
        {
          id: 'w4',
          text: { ar: 'تخريب درجين في قسطيلية سنة 440 هـ', fr: 'La destruction de Darjīn, en Qasṭīliya, en 440 H', en: 'The destruction of Darjin in Qastiliya, 440 AH' },
          side: 'right',
          explanation: { ar: 'خرّبها الزيريون وهم يضغطون على المناطق غير المنيعة.', fr: 'Les Zirides la détruisirent en faisant pression sur les régions peu protégées.', en: 'The Zirids destroyed it as they pressed on the unprotected regions.' },
        },
        {
          id: 'w5',
          text: { ar: 'رعاية الطلبة الوافدين', fr: 'L’accueil des étudiants venus d’ailleurs', en: 'Caring for students who came from afar' },
          side: 'left',
          explanation: { ar: 'رعت جربة الطلبة الوافدين إليها.', fr: 'Djerba prit soin des étudiants qui venaient à elle.', en: 'Djerba cared for the students who came to it.' },
        },
        {
          id: 'w6',
          text: { ar: 'ضغطُ القبائل البدوية المهاجرة', fr: 'La pression des tribus bédouines migrantes', en: 'Pressure from migrating Bedouin tribes' },
          side: 'right',
          explanation: { ar: 'زاد هذا الضغط حال المناطق غير المنيعة سوءًا.', fr: 'Cette pression aggrava le sort des régions exposées.', en: 'This pressure made life in the exposed regions even worse.' },
        },
        {
          id: 'w7',
          text: { ar: 'قلّةُ الأمن شغلتهم عن كلّ شيء', fr: 'L’insécurité les détourna de tout le reste', en: 'Lack of security kept them from everything else' },
          side: 'right',
          explanation: { ar: 'ساءت أحوالهم، ثمّ اتّبعوا بعد ذلك سيرة الغالب على أرضهم.', fr: 'Leur situation se dégrada, puis ils suivirent la voie de celui qui dominait leur terre.', en: 'Their conditions worsened, and they later followed the way of whoever prevailed in their land.' },
        },
        {
          id: 'w8',
          text: { ar: 'سُمّيت «جزيرة المساجد»', fr: 'Surnommée « l’île des mosquées »', en: 'Named "the Island of Mosques"' },
          side: 'left',
          explanation: { ar: 'هكذا سُمّيت جربة لكثرة عنايتها بالعلم وأهله.', fr: 'Ainsi fut nommée Djerba, tant elle prit soin du savoir et des siens.', en: 'So Djerba was named, for the care it gave to learning and its people.' },
        },
      ],
    },

    // 10 — Placement: mountain, island or Jarid? (slides 2, 3, 7)
    {
      kind: 'placement',
      id: 'three-places',
      title: { ar: 'جبلٌ أم جزيرة أم جريد؟', fr: 'Montagne, île ou Djérid ?', en: 'Mountain, island or Jarid?' },
      intro: {
        ar: 'اسحب كلّ قرينةٍ إلى المكان الذي تصفه، أو اضغط القرينة ثمّ المكان.',
        fr: 'Glisse chaque indice vers le lieu qu’il décrit, ou touche l’indice puis le lieu.',
        en: 'Drag each clue to the place it describes, or tap the clue and then the place.',
      },
      slots: [
        { id: 'nafusa', label: { ar: 'جبل نفوسة', fr: 'Le djebel Nafūsa', en: 'The Nafusa Mountain' } },
        { id: 'jerba', label: { ar: 'جزيرة جربة', fr: 'L’île de Djerba', en: 'The island of Djerba' } },
        { id: 'jarid', label: { ar: 'بلاد الجريد', fr: 'Le Djérid', en: 'The Jarid' } },
      ],
      cards: [
        {
          id: 'n1',
          slotId: 'nafusa',
          label: { ar: 'أهلي من أوائل أهل الدعوة.', fr: 'Mes habitants comptent parmi les premiers gens de l’Appel.', en: 'My people were among the first People of the Call.' },
          hint: { ar: 'فكّر في القبيلة الأمازيغية التي اعتمدت منهج أهل الاستقامة.', fr: 'Pense à la tribu amazighe qui adopta la voie des gens de la Rectitude.', en: 'Think of the Amazigh tribe that adopted the way of the People of Rectitude.' },
        },
        {
          id: 'n2',
          slotId: 'nafusa',
          label: { ar: 'كنتُ سندًا قويًّا للإمامة الرستمية في تاهرت.', fr: 'J’étais un solide appui de l’imamat rustamide de Tāhert.', en: 'I was a strong support for the Rustamid imamate in Tahert.' },
          hint: { ar: 'كان هذا السند جبلًا بالرجال والعلماء.', fr: 'Cet appui était une montagne riche en hommes et en savants.', en: 'This support was a mountain, with its men and scholars.' },
        },
        {
          id: 'n3',
          slotId: 'nafusa',
          label: { ar: 'أحمل اسم قبيلةٍ أمازيغية اعتنقت الإسلام مبكّرًا.', fr: 'Je porte le nom d’une tribu amazighe convertie très tôt à l’islam.', en: 'I bear the name of an Amazigh tribe that embraced Islam early.' },
          hint: { ar: 'القبيلة والجبل يحملان الاسم نفسه.', fr: 'La tribu et la montagne portent le même nom.', en: 'The tribe and the mountain share the same name.' },
        },
        {
          id: 'n4',
          slotId: 'nafusa',
          label: { ar: 'أنا سلسلة جبالٍ في شمال غرب ليبيا.', fr: 'Je suis une chaîne de montagnes au nord-ouest de la Libye.', en: 'I am a mountain range in north-western Libya.' },
          hint: { ar: 'سلسلة جبالٍ في ليبيا، لا في تونس.', fr: 'Une chaîne de montagnes en Libye, pas en Tunisie.', en: 'A mountain range in Libya, not in Tunisia.' },
        },
        {
          id: 'j1',
          slotId: 'jerba',
          label: { ar: 'احتمى بي أهل الدعوة لمّا انهزموا أمام العبيديين.', fr: 'Les gens de l’Appel se réfugièrent chez moi après leur défaite face aux Ubaydides.', en: 'The People of the Call took shelter in me when the Ubaydids defeated them.' },
          hint: { ar: 'مكانٌ يحميه البحر.', fr: 'Un lieu protégé par la mer.', en: 'A place protected by the sea.' },
        },
        {
          id: 'j2',
          slotId: 'jerba',
          label: { ar: 'كنتُ على ولاءٍ للرستميين منذ عهد الإمام الثاني عبد الوهّاب.', fr: 'J’étais fidèle aux Rustamides depuis le temps du deuxième imam, ‘Abd al-Wahhāb.', en: 'I was loyal to the Rustamids from the time of the second imam, ‘Abd al-Wahhab.' },
          hint: { ar: 'هذا الولاء، منذ نحو سنة 171 هـ، كان لجزيرة.', fr: 'Cette fidélité, depuis vers 171 H, était celle d’une île.', en: 'This loyalty, from about 171 AH, was an island’s.' },
        },
        {
          id: 'j3',
          slotId: 'jerba',
          label: { ar: 'لقبي: «جزيرة المساجد».', fr: 'Mon surnom : « l’île des mosquées ».', en: 'My nickname: "the Island of Mosques".' },
          hint: { ar: 'اللقب نفسه يقول: جزيرة.', fr: 'Le surnom lui-même le dit : une île.', en: 'The nickname itself says it: an island.' },
        },
        {
          id: 'j4',
          slotId: 'jerba',
          label: { ar: 'يحيط بي البحر، جنوب شرق تونس.', fr: 'La mer m’entoure, au sud-est de la Tunisie.', en: 'The sea surrounds me, in the south-east of Tunisia.' },
          hint: { ar: 'ما يحيط به البحر جزيرة.', fr: 'Ce que la mer entoure est une île.', en: 'What the sea surrounds is an island.' },
        },
        {
          id: 'r1',
          slotId: 'jarid',
          label: { ar: 'لستُ منيعةً مثل الجبل ولا مثل الجزيرة.', fr: 'Je ne suis pas protégée comme la montagne ni comme l’île.', en: 'I am not as protected as the mountain or the island.' },
          hint: { ar: 'ليس الجبل ولا الجزيرة… فما المكان الثالث؟', fr: 'Ni la montagne ni l’île… quel est le troisième lieu ?', en: 'Neither the mountain nor the island… so which is the third place?' },
        },
        {
          id: 'r2',
          slotId: 'jarid',
          label: { ar: 'أصل بين وادي سوف وجبل نفوسة.', fr: 'Je relie l’Oued Souf au djebel Nafūsa.', en: 'I link Wadi Souf to the Nafusa Mountain.' },
          hint: { ar: 'منطقةٌ في جنوب تونس تصل بين المكانين.', fr: 'Une région du sud de la Tunisie qui relie les deux lieux.', en: 'A region in southern Tunisia that links the two places.' },
        },
        {
          id: 'r3',
          slotId: 'jarid',
          label: { ar: 'يمرّ الطريق منّي عبر جبل دمّر ومطماطة.', fr: 'De chez moi, la route passe par le djebel Demmer et Matmata.', en: 'From me the road runs through Jabal Demmer and Matmata.' },
          hint: { ar: 'جبل دمّر ومطماطة في جنوب تونس، على طريق الجريد.', fr: 'Le djebel Demmer et Matmata sont au sud de la Tunisie, sur la route du Djérid.', en: 'Jabal Demmer and Matmata are in southern Tunisia, on the Jarid’s road.' },
        },
        {
          id: 'r4',
          slotId: 'jarid',
          label: { ar: 'أنا المنطقة الجنوبية من تونس.', fr: 'Je suis la région sud de la Tunisie.', en: 'I am the southern region of Tunisia.' },
          hint: { ar: 'جنوب تونس، لا جنوبها الشرقيّ حيث الجزيرة.', fr: 'Le sud de la Tunisie, pas le sud-est où se trouve l’île.', en: 'The south of Tunisia, not the south-east where the island lies.' },
        },
      ],
    },

    // 11 — Reading: Djerba, beacon of knowledge in the Maghreb (slides 9–10)
    {
      kind: 'reading',
      id: 'reading-miswar',
      title: { ar: 'اقرأ: جربة منارة العلم بالمغرب', fr: 'Lis : Djerba, phare du savoir au Maghreb', en: 'Read: Djerba, beacon of knowledge in the Maghreb' },
      intro: {
        ar: 'اقرأ ما فعله أبو مسور في جزيرته، ثمّ فرّق بين أعماله وأعمال غيره في اللعبة التالية.',
        fr: 'Lis ce que fit Abū Miswar sur son île, puis distingue ses œuvres de celles des autres au jeu suivant.',
        en: 'Read what Abu Miswar did on his island, then tell his works from others’ in the next game.',
      },
      image: `${IMG}/books-chest.png`,
      imageAlt: {
        ar: 'صندوقٌ خشبيّ قديم عليه كتبٌ مجلّدة مكدّسة وكتابٌ مفتوح، وبجانبه مصباحٌ زيتيّ من الفخّار مضاء فوق حصيرٍ مستدير',
        fr: 'Un vieux coffre de bois chargé de livres reliés empilés et d’un livre ouvert, près d’une lampe à huile en terre cuite allumée sur une natte ronde',
        en: 'An old wooden chest piled with bound books and an open book, beside a lit clay oil lamp on a round mat',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'عائدٌ من الجبل', fr: 'De retour de la montagne', en: 'Back from the mountain' },
          text: {
            ar: 'كان لأبي مسور يسجا بن يوجين، رحمه الله، فضلٌ في ازدهار العلم بجربة وانتظام أحوالها؛ فقد تفرّغ للتعليم في الجزيرة منذ عاد من جبل نفوسة.',
            fr: 'Abū Miswar Yasjā ibn Yūjīn — que Dieu lui fasse miséricorde — eut un grand mérite dans l’essor du savoir à Djerba et le bon ordre de ses affaires : il se consacra à l’enseignement sur l’île dès son retour du djebel Nafūsa.',
            en: 'Abu Miswar Yasja ibn Yujin — may God have mercy on him — played a great part in the flourishing of knowledge in Djerba and the good order of its affairs: he devoted himself to teaching on the island from the moment he returned from the Nafusa Mountain.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'مدارس وكتب ومساجد', fr: 'Écoles, livres et mosquées', en: 'Schools, books and mosques' },
          text: {
            ar: 'فأنشأ المدارس، وجمع الكتب النفيسة، وبنى المساجد.',
            fr: 'Il fonda des écoles, réunit des livres précieux et bâtit des mosquées.',
            en: 'He founded schools, collected precious books and built mosques.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'قبلة الطلبة', fr: 'La destination des étudiants', en: 'Where students headed' },
          text: {
            ar: 'وتخرّج على يده علماء كبار، أمثال ابنه أبي زكرياء فصيل وعبد الله بن مانوج اللمائي رحمهم الله، حتّى أصبحت الجزيرة قبلةً للطلبة.',
            fr: 'Il forma de grands savants, tels son fils Abū Zakariyyā’ Faṣīl et ‘Abd Allāh ibn Mānūj al-Lamā’ī — que Dieu leur fasse miséricorde —, si bien que l’île devint la destination des étudiants.',
            en: 'He trained great scholars, such as his son Abu Zakariya Fasil and ‘Abd Allah ibn Manuj al-Lama’i — may God have mercy on them — until the island became the destination of students.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'محمد بن بكر و«ديوان العزّابة»', fr: 'Muḥammad ibn Bakr et le « Dīwān al-‘Azzāba »', en: 'Muhammad ibn Bakr and "Diwan al-‘Azzaba"' },
          text: {
            ar: 'ومرّ منها الشيخ محمد بن بكر، صاحب نظام الحلقة، متعلّمًا عند الشيخ فصيل. وفي جربة تمّ تأليف إحدى الموسوعات الفقهية: «ديوان العزّابة».',
            fr: 'Le cheikh Muḥammad ibn Bakr, fondateur du système de la Ḥalqa, y passa pour étudier auprès du cheikh Faṣīl. Et c’est à Djerba que fut composée l’une des encyclopédies du droit : le « Dīwān al-‘Azzāba ».',
            en: 'Sheikh Muhammad ibn Bakr, founder of the Halqa system, passed through it as a student of Sheikh Fasil. And it was in Djerba that one of the encyclopedias of jurisprudence was composed: "Diwan al-‘Azzaba".',
          },
        },
      ],
    },

    // 12 — Swipe: what Abu Miswar did in Djerba (slides 5, 9)
    {
      kind: 'swipe',
      id: 'abu-miswar-works',
      title: { ar: 'أعمال أبي مسور', fr: 'Les œuvres d’Abū Miswar', en: 'Abu Miswar’s works' },
      intro: {
        ar: 'اسحب كلّ بطاقة: هل هي ممّا فعله أبو مسور في جربة، أم لا؟',
        fr: 'Fais glisser chaque carte : est-ce une chose qu’Abū Miswar fit à Djerba, ou non ?',
        en: 'Swipe each card: is it something Abu Miswar did in Djerba, or not?',
      },
      left: {
        label: { ar: 'من أعمال أبي مسور', fr: 'Une œuvre d’Abū Miswar', en: 'One of Abu Miswar’s works' },
        tag: { ar: 'أبو مسور', fr: 'Abū Miswar', en: 'Abu Miswar' },
      },
      right: {
        label: { ar: 'ليس من أعماله', fr: 'Pas une de ses œuvres', en: 'Not one of his works' },
        tag: { ar: 'غيره', fr: 'Un autre', en: 'Someone else' },
      },
      cards: [
        {
          id: 'c1',
          who: { ar: 'المدارس', fr: 'Les écoles', en: 'Schools' },
          deed: { ar: 'أنشأ المدارس', fr: 'Il fonda des écoles', en: 'Founded schools' },
          side: 'left',
          explanation: { ar: 'نعم، أنشأ المدارس في الجزيرة.', fr: 'Oui, il fonda des écoles sur l’île.', en: 'Yes, he founded schools on the island.' },
        },
        {
          id: 'c2',
          who: { ar: 'كتاب الوضع', fr: 'Kitāb al-Waḍ‘', en: 'Kitab al-Wad‘' },
          deed: { ar: 'ألّف «كتاب الوضع»', fr: 'Il écrivit le « Kitāb al-Waḍ‘ »', en: 'Wrote "Kitab al-Wad‘"' },
          side: 'right',
          explanation: { ar: 'صاحبه أبو زكرياء بن الخير الجناوني، من مشايخ الجبل.', fr: 'Son auteur est Abū Zakariyyā’ ibn al-Khayr al-Jannāwunī, un cheikh de la montagne.', en: 'Its author is Abu Zakariya ibn al-Khayr al-Jannawuni, a sheikh of the mountain.' },
        },
        {
          id: 'c3',
          who: { ar: 'الكتب النفيسة', fr: 'Les livres précieux', en: 'Precious books' },
          deed: { ar: 'جمع الكتب النفيسة', fr: 'Il réunit des livres précieux', en: 'Collected precious books' },
          side: 'left',
          explanation: { ar: 'نعم، جمع الكتب النفيسة.', fr: 'Oui, il rassembla des livres précieux.', en: 'Yes, he gathered precious books.' },
        },
        {
          id: 'c4',
          who: { ar: 'نظام الحلقة', fr: 'Le système de la Ḥalqa', en: 'The Halqa system' },
          deed: { ar: 'وضع نظام الحلقة', fr: 'Il fonda le système de la Ḥalqa', en: 'Founded the Halqa system' },
          side: 'right',
          explanation: { ar: 'صاحب نظام الحلقة هو الشيخ محمد بن بكر، وقد مرّ من جربة متعلّمًا.', fr: 'Le fondateur du système de la Ḥalqa est le cheikh Muḥammad ibn Bakr, passé par Djerba comme étudiant.', en: 'The founder of the Halqa system is Sheikh Muhammad ibn Bakr, who passed through Djerba as a student.' },
        },
        {
          id: 'c5',
          who: { ar: 'المساجد', fr: 'Les mosquées', en: 'Mosques' },
          deed: { ar: 'بنى المساجد', fr: 'Il bâtit des mosquées', en: 'Built mosques' },
          side: 'left',
          explanation: { ar: 'نعم، بنى المساجد في الجزيرة.', fr: 'Oui, il bâtit des mosquées sur l’île.', en: 'Yes, he built mosques on the island.' },
        },
        {
          id: 'c6',
          who: { ar: 'انتفاضة 358 هـ', fr: 'Le soulèvement de 358 H', en: 'The 358 AH uprising' },
          deed: { ar: 'شارك في انتفاضة 358 هـ', fr: 'Il prit part au soulèvement de 358 H', en: 'Joined the 358 AH uprising' },
          side: 'right',
          explanation: { ar: 'الدرس يذكر فيها أهل نفوسة مع الإمام أبي خزر يغلا بن زلتاف وأبي نوح سعيد.', fr: 'La leçon y cite les gens de Nafūsa avec l’imam Abū Khazar Yaghlā ibn Zultāf et Abū Nūḥ Sa‘īd.', en: 'The lesson names the people of Nafusa there, with Imam Abu Khazar Yaghla ibn Zultaf and Abu Nuh Sa‘id.' },
        },
        {
          id: 'c7',
          who: { ar: 'التعليم', fr: 'L’enseignement', en: 'Teaching' },
          deed: { ar: 'تفرّغ للتعليم', fr: 'Il se consacra à l’enseignement', en: 'Devoted himself to teaching' },
          side: 'left',
          explanation: { ar: 'نعم، تفرّغ للتعليم في الجزيرة منذ عاد من جبل نفوسة.', fr: 'Oui, il s’y consacra sur l’île dès son retour du djebel Nafūsa.', en: 'Yes, he did so on the island from the moment he returned from the Nafusa Mountain.' },
        },
        {
          id: 'c8',
          who: { ar: 'درجين', fr: 'Darjīn', en: 'Darjin' },
          deed: { ar: 'خرّب درجين', fr: 'Il détruisit Darjīn', en: 'Destroyed Darjin' },
          side: 'right',
          explanation: { ar: 'خرّبها الزيريون سنة 440 هـ. أمّا أبو مسور فكان يبني!', fr: 'Ce sont les Zirides qui la détruisirent en 440 H. Abū Miswar, lui, bâtissait !', en: 'The Zirids destroyed it in 440 AH. Abu Miswar was a builder!' },
        },
        {
          id: 'c9',
          who: { ar: 'العلماء', fr: 'Les savants', en: 'Scholars' },
          deed: { ar: 'خرّج علماء كبارًا', fr: 'Il forma de grands savants', en: 'Trained great scholars' },
          side: 'left',
          explanation: { ar: 'نعم، أمثال ابنه أبي زكرياء فصيل وعبد الله بن مانوج اللمائي، رحمهم الله.', fr: 'Oui, tels son fils Abū Zakariyyā’ Faṣīl et ‘Abd Allāh ibn Mānūj al-Lamā’ī — que Dieu leur fasse miséricorde.', en: 'Yes, such as his son Abu Zakariya Fasil and ‘Abd Allah ibn Manuj al-Lama’i — may God have mercy on them.' },
        },
        {
          id: 'c10',
          who: { ar: 'الشيخ فصيل', fr: 'Le cheikh Faṣīl', en: 'Sheikh Fasil' },
          deed: { ar: 'تعلّم عند الشيخ فصيل', fr: 'Il étudia auprès du cheikh Faṣīl', en: 'Studied under Sheikh Fasil' },
          side: 'right',
          explanation: { ar: 'فصيل ابنه وتلميذه! أمّا أستاذ أبي مسور فهو سليمان بن ماطوس.', fr: 'Faṣīl est son fils et son élève ! Le maître d’Abū Miswar fut Sulaymān ibn Māṭūs.', en: 'Fasil was his son and pupil! Abu Miswar’s own teacher was Sulayman ibn Matus.' },
        },
      ],
    },

    // 13 — Explorer: the Island of Mosques (slides 7, 9)
    {
      kind: 'explorer',
      id: 'djerba-explorer',
      title: { ar: 'حلّق فوق جزيرة المساجد', fr: 'Survole l’île des mosquées', en: 'Fly over the Island of Mosques' },
      intro: {
        ar: 'اضغط على النقاط المضيئة لتكتشف أسرار الجزيرة.',
        fr: 'Touche les points lumineux pour découvrir les secrets de l’île.',
        en: 'Tap the glowing points to uncover the island’s secrets.',
      },
      image: `${IMG}/island-map.png`,
      imageAlt: {
        ar: 'منظرٌ علويّ لجزيرةٍ رملية صغيرة وسط بحرٍ أخضر: مبانٍ بيضاء ذات قبابٍ منخفضة، وبيوتٌ ونخيل، وثلاثة قوارب خشبية قرب الشاطئ',
        fr: 'Vue d’en haut d’une petite île de sable dans une mer verte : des bâtiments blancs à coupoles basses, des maisons et des palmiers, trois barques de bois près du rivage',
        en: 'Top-down view of a small sandy island in a green sea: white buildings with low domes, houses and palms, three wooden boats near the shore',
      },
      hotspots: [
        {
          id: 'sea',
          x: 14,
          y: 62,
          label: { ar: 'بحرٌ يحمي', fr: 'Une mer qui protège', en: 'A sea that protects' },
          description: {
            ar: 'لمّا انهزم أهل الدعوة أمام العبيديين احتموا بجزيرة جربة.',
            fr: 'Vaincus par les Ubaydides, les gens de l’Appel se réfugièrent sur l’île de Djerba.',
            en: 'When the Ubaydids defeated them, the People of the Call took shelter on the island of Djerba.',
          },
        },
        {
          id: 'mosques',
          x: 80,
          y: 39,
          label: { ar: 'جزيرة المساجد', fr: 'L’île des mosquées', en: 'The Island of Mosques' },
          description: {
            ar: 'عُرفت جربة بجزيرة المساجد منذ القرن الثالث الهجريّ. ومن مساجدها على الخريطة جامع أبي مسور.',
            fr: 'Djerba est connue comme l’île des mosquées depuis le IIIᵉ siècle de l’Hégire. Parmi elles, sur la carte : la mosquée d’Abū Miswar.',
            en: 'Djerba has been known as the Island of Mosques since the 3rd century AH. Among them, on the map: the mosque of Abu Miswar.',
          },
        },
        {
          id: 'schools',
          x: 50,
          y: 31,
          label: { ar: 'المدارس والحلقات', fr: 'Écoles et cercles', en: 'Schools and circles' },
          description: {
            ar: 'أنشأ أبو مسور يسجا بن يوجين المدارس في الجزيرة وتفرّغ فيها للتعليم.',
            fr: 'Abū Miswar Yasjā ibn Yūjīn fonda des écoles sur l’île et s’y consacra à l’enseignement.',
            en: 'Abu Miswar Yasja ibn Yujin founded schools on the island and devoted himself to teaching there.',
          },
        },
        {
          id: 'villages',
          x: 68,
          y: 50,
          label: { ar: 'القرى والأرياف', fr: 'Villages et campagnes', en: 'Villages and countryside' },
          description: {
            ar: 'اعتنت قرى الجزيرة وأريافها بحلقات التعليم. من قراها على الخريطة: حومة السوق وميدون وأجيم وقلالة وصدغيان.',
            fr: 'Les villages et les campagnes de l’île veillèrent aux cercles d’étude. Parmi eux, sur la carte : Houmt Souk, Midoun, Ajim, Guellala et Sedghiane.',
            en: 'The island’s villages and countryside looked after the study circles. Among them, on the map: Houmt Souk, Midoun, Ajim, Guellala and Sedghiane.',
          },
        },
        {
          id: 'boats',
          x: 44,
          y: 75,
          label: { ar: 'الطلبة الوافدون', fr: 'Les étudiants qui arrivent', en: 'Students arriving' },
          description: {
            ar: 'رعت جربة الطلبة الوافدين إليها، حتّى أصبحت الجزيرة قبلةً للطلبة.',
            fr: 'Djerba prit soin des étudiants venus à elle, si bien que l’île devint la destination des étudiants.',
            en: 'Djerba cared for the students who came to it, until the island became the destination of students.',
          },
        },
        {
          id: 'diwan',
          x: 32,
          y: 38,
          label: { ar: 'موسوعةٌ من الجزيرة', fr: 'Une encyclopédie née sur l’île', en: 'An encyclopedia from the island' },
          description: {
            ar: 'في جربة تمّ تأليف إحدى الموسوعات الفقهية: «ديوان العزّابة».',
            fr: 'C’est à Djerba que fut composée l’une des encyclopédies du droit : le « Dīwān al-‘Azzāba ».',
            en: 'It was in Djerba that one of the encyclopedias of jurisprudence was composed: "Diwan al-‘Azzaba".',
          },
        },
      ],
    },

    // 14 — Chat: the island every student headed for (slide 9)
    {
      kind: 'chat',
      id: 'island-chat',
      title: { ar: 'محادثة: قبلة الطلبة', fr: 'Discussion : la destination des étudiants', en: 'Chat: where every student headed' },
      intro: {
        ar: 'تلميذٌ يسأل معلّمه عن جربة. ساعده على اختيار الردّ الصحيح.',
        fr: 'Un élève interroge son maître sur Djerba. Aide-le à choisir la bonne réplique.',
        en: 'A pupil asks his teacher about Djerba. Help him pick the right line.',
      },
      image: `${IMG}/harbor-boats.png`,
      imageAlt: {
        ar: 'قوارب خشبية صغيرة راسية في ماءٍ فيروزيّ هادئ قرب رصيفٍ حجريّ عليه صندوقان خشبيّان وأمتعة',
        fr: 'De petites barques de bois à l’ancre dans une eau turquoise et calme, près d’un quai de pierre où attendent deux coffres de bois et des bagages',
        en: 'Small wooden boats at anchor in calm turquoise water beside a stone quay with two wooden chests and bundles',
      },
      speakers: [
        { id: 'teacher', name: { ar: 'المعلّم', fr: 'Le maître', en: 'The teacher' }, avatar: '📖', side: 'start', tone: 'emerald' },
        { id: 'pupil', name: { ar: 'التلميذ', fr: 'L’élève', en: 'The pupil' }, avatar: '✏️', side: 'end', tone: 'gold' },
      ],
      steps: [
        {
          type: 'msg',
          id: 'c1',
          who: 'pupil',
          text: {
            ar: 'يا معلّمي، لماذا كان الطلبة يركبون البحر إلى جربة؟',
            fr: 'Maître, pourquoi les étudiants prenaient-ils la mer pour Djerba ?',
            en: 'Teacher, why did students cross the sea to Djerba?',
          },
        },
        {
          type: 'msg',
          id: 'c2',
          who: 'teacher',
          text: {
            ar: 'القصّة تبدأ برجلٍ تعلّم في جبل نفوسة ثمّ عاد إلى جزيرته: أبو مسور يسجا بن يوجين.',
            fr: 'L’histoire commence avec un homme qui étudia au djebel Nafūsa puis revint sur son île : Abū Miswar Yasjā ibn Yūjīn.',
            en: 'The story begins with a man who studied in the Nafusa Mountain and then returned to his island: Abu Miswar Yasja ibn Yujin.',
          },
        },
        {
          type: 'reply',
          id: 'c3',
          who: 'pupil',
          prompt: { ar: 'ماذا يقول التلميذ؟', fr: 'Que dit l’élève ?', en: 'What does the pupil say?' },
          options: [
            {
              id: 'a',
              correct: true,
              label: { ar: 'وحين عاد تفرّغ للتعليم!', fr: 'Et à son retour, il se consacra à l’enseignement !', en: 'And once back, he devoted himself to teaching!' },
              hint: { ar: 'أحسنت! فكان له فضلٌ في ازدهار العلم بجربة.', fr: 'Bravo ! Il eut ainsi un grand mérite dans l’essor du savoir à Djerba.', en: 'Well done! So he had a great part in the flourishing of knowledge in Djerba.' },
            },
            {
              id: 'b',
              correct: false,
              label: { ar: 'وحين عاد اشتغل بالتجارة فقط.', fr: 'Et à son retour, il ne fit que du commerce.', en: 'And once back, he only traded.' },
              hint: { ar: 'تذكّر: مدارس، وكتب، ومساجد.', fr: 'Souviens-toi : écoles, livres, mosquées.', en: 'Remember: schools, books, mosques.' },
            },
            {
              id: 'c',
              correct: false,
              label: { ar: 'وحين عاد اعتزل الناس.', fr: 'Et à son retour, il s’isola des gens.', en: 'And once back, he withdrew from people.' },
              hint: { ar: 'بل علّم الناس وخرّج علماء كبارًا.', fr: 'Au contraire : il enseigna et forma de grands savants.', en: 'Rather, he taught people and trained great scholars.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'c4',
          who: 'teacher',
          text: {
            ar: 'نعم. وتخرّج على يده علماء كبار، أمثال ابنه أبي زكرياء فصيل، وعبد الله بن مانوج اللمائي، رحمهم الله.',
            fr: 'Oui. Il forma de grands savants, tels son fils Abū Zakariyyā’ Faṣīl et ‘Abd Allāh ibn Mānūj al-Lamā’ī — que Dieu leur fasse miséricorde.',
            en: 'Yes. He trained great scholars, such as his son Abu Zakariya Fasil and ‘Abd Allah ibn Manuj al-Lama’i — may God have mercy on them.',
          },
        },
        {
          type: 'reply',
          id: 'c5',
          who: 'pupil',
          prompt: { ar: 'فماذا أصبحت الجزيرة؟', fr: 'Que devint alors l’île ?', en: 'So what did the island become?' },
          options: [
            {
              id: 'a',
              correct: true,
              label: { ar: 'أصبحت قبلةً للطلبة!', fr: 'Elle devint la destination des étudiants !', en: 'It became the destination of students!' },
              hint: { ar: 'صحيح! صارت وجهة طلبة العلم.', fr: 'Exact ! Elle devint le but des étudiants en quête de savoir.', en: 'Right! It became where seekers of knowledge headed.' },
            },
            {
              id: 'b',
              correct: false,
              label: { ar: 'أصبحت عاصمةً للدولة.', fr: 'Elle devint la capitale de l’État.', en: 'It became the state’s capital.' },
              hint: { ar: 'نحن في زمن الكتمان، بعد سقوط الدولة.', fr: 'Nous sommes au temps du secret, après la chute de l’État.', en: 'This is the time of secrecy, after the state had fallen.' },
            },
            {
              id: 'c',
              correct: false,
              label: { ar: 'أصبحت سوقًا للذهب.', fr: 'Elle devint un marché de l’or.', en: 'It became a gold market.' },
              hint: { ar: 'كنزها العلم: مدارس وكتب وحلقات.', fr: 'Son trésor, c’est le savoir : écoles, livres et cercles.', en: 'Its treasure was knowledge: schools, books and circles.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'c6',
          who: 'teacher',
          text: {
            ar: 'وممّن مرّ منها متعلّمًا: الشيخ محمد بن بكر، صاحب نظام الحلقة.',
            fr: 'Parmi ceux qui y passèrent pour étudier : le cheikh Muḥammad ibn Bakr, fondateur du système de la Ḥalqa.',
            en: 'Among those who passed through it as students was Sheikh Muhammad ibn Bakr, founder of the Halqa system.',
          },
        },
        {
          type: 'reply',
          id: 'c7',
          who: 'pupil',
          prompt: { ar: 'عند من تعلّم فيها؟', fr: 'Auprès de qui y étudia-t-il ?', en: 'Under whom did he study there?' },
          options: [
            {
              id: 'a',
              correct: true,
              label: { ar: 'عند الشيخ فصيل، ابن أبي مسور!', fr: 'Auprès du cheikh Faṣīl, fils d’Abū Miswar !', en: 'Under Sheikh Fasil, Abu Miswar’s son!' },
              hint: { ar: 'ممتاز! علمٌ ينتقل من الأب إلى الابن ثمّ إلى التلميذ.', fr: 'Excellent ! Un savoir qui passe du père au fils, puis à l’élève.', en: 'Excellent! Knowledge passing from father to son, then to the student.' },
            },
            {
              id: 'b',
              correct: false,
              label: { ar: 'عند سليمان بن ماطوس.', fr: 'Auprès de Sulaymān ibn Māṭūs.', en: 'Under Sulayman ibn Matus.' },
              hint: { ar: 'ذاك أستاذ أبي مسور في الجبل.', fr: 'Lui, c’est le maître d’Abū Miswar, dans la montagne.', en: 'He was Abu Miswar’s teacher, in the mountain.' },
            },
            {
              id: 'c',
              correct: false,
              label: { ar: 'عند الإمام أبي خزر.', fr: 'Auprès de l’imam Abū Khazar.', en: 'Under Imam Abu Khazar.' },
              hint: { ar: 'اسم أبي خزر مرتبطٌ بانتفاضة 358 هـ. فكّر في ابن أبي مسور.', fr: 'Le nom d’Abū Khazar est lié au soulèvement de 358 H. Pense au fils d’Abū Miswar.', en: 'Abu Khazar’s name belongs to the 358 AH uprising. Think of Abu Miswar’s son.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'c8',
          who: 'teacher',
          text: {
            ar: 'وفي الجزيرة أيضًا تمّ تأليف إحدى الموسوعات الفقهية.',
            fr: 'Et c’est aussi sur l’île que fut composée l’une des encyclopédies du droit.',
            en: 'And it was also on the island that one of the encyclopedias of jurisprudence was composed.',
          },
        },
        {
          type: 'reply',
          id: 'c9',
          who: 'pupil',
          prompt: { ar: 'ما اسمها؟', fr: 'Quel est son nom ?', en: 'What is it called?' },
          options: [
            {
              id: 'a',
              correct: true,
              label: { ar: '«ديوان العزّابة»!', fr: 'Le « Dīwān al-‘Azzāba » !', en: '"Diwan al-‘Azzaba"!' },
              hint: { ar: 'رائع! لهذا كانت جربة منارة العلم بالمغرب.', fr: 'Magnifique ! Voilà pourquoi Djerba fut le phare du savoir au Maghreb.', en: 'Wonderful! That is why Djerba was the beacon of knowledge in the Maghreb.' },
            },
            {
              id: 'b',
              correct: false,
              label: { ar: '«كتاب الوضع».', fr: 'Le « Kitāb al-Waḍ‘ ».', en: '"Kitab al-Wad‘".' },
              hint: { ar: 'ذاك كتاب الجناوني في جبل نفوسة.', fr: 'C’est le livre d’al-Jannāwunī, au djebel Nafūsa.', en: 'That is al-Jannawuni’s book, in the Nafusa Mountain.' },
            },
            {
              id: 'c',
              correct: false,
              label: { ar: '«نظام الحلقة».', fr: 'Le « système de la Ḥalqa ».', en: '"The Halqa system".' },
              hint: { ar: 'ذاك نظامٌ وضعه محمد بن بكر، لا موسوعة.', fr: 'C’est un système fondé par Muḥammad ibn Bakr, pas une encyclopédie.', en: 'That is a system founded by Muhammad ibn Bakr, not an encyclopedia.' },
            },
          ],
        },
      ],
    },

    // 15 — Placement: scholars of the mountain and of the island (slides 5, 9)
    {
      kind: 'placement',
      id: 'scholars-places',
      title: { ar: 'عالِمُ جبلٍ أم عالِمُ جزيرة؟', fr: 'Savant de la montagne ou de l’île ?', en: 'Scholar of the mountain or of the island?' },
      intro: {
        ar: 'اسحب كلّ عالمٍ إلى المكان الذي علّم فيه، أو اضغط الاسم ثمّ المكان.',
        fr: 'Glisse chaque savant vers le lieu où il enseigna, ou touche le nom puis le lieu.',
        en: 'Drag each scholar to the place where he taught, or tap the name and then the place.',
      },
      slots: [
        { id: 'mountain', label: { ar: 'جبل نفوسة', fr: 'Djebel Nafūsa', en: 'Nafusa Mountain' } },
        { id: 'island', label: { ar: 'جزيرة جربة', fr: 'Île de Djerba', en: 'Island of Djerba' } },
      ],
      cards: [
        {
          id: 'k-sadrat',
          slotId: 'mountain',
          label: { ar: 'أبو القاسم سدرات البغطوري', fr: 'Abū al-Qāsim Sadrāt al-Baghṭūrī', en: 'Abu al-Qasim Sadrat al-Baghturi' },
          hint: { ar: 'أحد الشيخين اللذين حفظا العلم بعد مانو.', fr: 'L’un des deux cheikhs qui gardèrent le savoir après Mānū.', en: 'One of the two sheikhs who kept knowledge alive after Manu.' },
        },
        {
          id: 'k-fasil',
          slotId: 'island',
          label: { ar: 'أبو زكرياء فصيل', fr: 'Abū Zakariyyā’ Faṣīl', en: 'Abu Zakariya Fasil' },
          hint: { ar: 'هو ابن أبي مسور، وعنده تعلّم محمد بن بكر.', fr: 'C’est le fils d’Abū Miswar ; Muḥammad ibn Bakr étudia auprès de lui.', en: 'He is Abu Miswar’s son; Muhammad ibn Bakr studied under him.' },
        },
        {
          id: 'k-ibn-khayr',
          slotId: 'mountain',
          label: { ar: 'عبد الله بن الخير', fr: '‘Abd Allāh ibn al-Khayr', en: '‘Abd Allah ibn al-Khayr' },
          hint: { ar: 'صاحب إحدى الحلقتين اللتين استمرّتا طويلًا.', fr: 'Il tint l’un des deux cercles qui durèrent longtemps.', en: 'He held one of the two long-lasting circles.' },
        },
        {
          id: 'k-abu-miswar',
          slotId: 'island',
          label: { ar: 'أبو مسور يسجا بن يوجين', fr: 'Abū Miswar Yasjā ibn Yūjīn', en: 'Abu Miswar Yasja ibn Yujin' },
          hint: { ar: 'تعلّم في الجبل، لكنّه محيي العلم في مكانٍ يحيط به البحر.', fr: 'Il étudia dans la montagne, mais fit revivre le savoir dans un lieu entouré par la mer.', en: 'He studied in the mountain, but revived knowledge in a place surrounded by the sea.' },
        },
        {
          id: 'k-matus',
          slotId: 'mountain',
          label: { ar: 'سليمان بن ماطوس', fr: 'Sulaymān ibn Māṭūs', en: 'Sulayman ibn Matus' },
          hint: { ar: 'هو أستاذ أبي مسور قبل عودته إلى جزيرته.', fr: 'C’est le maître d’Abū Miswar, avant son retour sur son île.', en: 'He was Abu Miswar’s teacher before he returned to his island.' },
        },
        {
          id: 'k-manuj',
          slotId: 'island',
          label: { ar: 'عبد الله بن مانوج اللمائي', fr: '‘Abd Allāh ibn Mānūj al-Lamā’ī', en: '‘Abd Allah ibn Manuj al-Lama’i' },
          hint: { ar: 'تخرّج على يد أبي مسور.', fr: 'Il fut formé par Abū Miswar.', en: 'He was trained by Abu Miswar.' },
        },
        {
          id: 'k-jannawuni',
          slotId: 'mountain',
          label: { ar: 'أبو زكرياء بن الخير الجناوني', fr: 'Abū Zakariyyā’ ibn al-Khayr al-Jannāwunī', en: 'Abu Zakariya ibn al-Khayr al-Jannawuni' },
          hint: { ar: 'صاحب «كتاب الوضع»، من المشايخ الذين ظهروا لمّا انتعش العلم في الجبل.', fr: 'Auteur du « Kitāb al-Waḍ‘ », l’un des cheikhs apparus quand le savoir refleurit dans la montagne.', en: 'Author of "Kitab al-Wad‘", one of the sheikhs who emerged when knowledge revived in the mountain.' },
        },
      ],
    },

    // 16 — Timeline (slides 3, 5, 7)
    {
      kind: 'timeline',
      id: 'timeline',
      title: { ar: 'خمسة تواريخ في سطر', fr: 'Cinq dates sur une ligne', en: 'Five dates on one line' },
      intro: {
        ar: 'احفظ هذه السنوات جيّدًا: ستحتاجها بعد الجولة السريعة في الاختبار!',
        fr: 'Retiens bien ces années : il te les faudra au quiz, après la manche éclair !',
        en: 'Remember these years well: you will need them in the quiz, after the speed round!',
      },
      steps: [
        {
          id: 't1',
          period: { ar: 'نحو 171 هـ', fr: 'Vers 171 H', en: 'About 171 AH' },
          label: { ar: 'ولاء جربة للرستميين', fr: 'Djerba fidèle aux Rustamides', en: 'Djerba loyal to the Rustamids' },
          detail: {
            ar: 'كانت جربة على ولاءٍ للرستميين منذ عهد الإمام الثاني عبد الوهّاب.',
            fr: 'Djerba était fidèle aux Rustamides depuis le temps du deuxième imam, ‘Abd al-Wahhāb.',
            en: 'Djerba was loyal to the Rustamids from the time of the second imam, ‘Abd al-Wahhab.',
          },
          certainty: 'approximate',
        },
        {
          id: 't2',
          period: { ar: '283 هـ', fr: '283 H', en: '283 AH' },
          label: { ar: 'واقعة مانو', fr: 'La bataille de Mānū', en: 'The battle of Manu' },
          detail: {
            ar: 'هلك الآلاف من نفوسة، وفيهم أزيد من أربعمائة عالمٍ وفقيه، فأُنهك الجبل.',
            fr: 'Des milliers de gens de Nafūsa périrent, dont plus de quatre cents savants et juristes : la montagne en sortit épuisée.',
            en: 'Thousands of Nafusa’s people perished, among them more than four hundred scholars and jurists, leaving the mountain exhausted.',
          },
        },
        {
          id: 't3',
          period: { ar: 'القرن 3 هـ', fr: 'IIIᵉ siècle H', en: '3rd century AH' },
          label: { ar: 'العلم ينتعش', fr: 'Le savoir refleurit', en: 'Knowledge revives' },
          detail: {
            ar: 'بحلقتَي الشيخين انتعش العلم في الجبل، وظهر سليمان بن ماطوس وتلميذه أبو مسور يسجا محيي العلم في جربة.',
            fr: 'Grâce aux cercles des deux cheikhs, le savoir refleurit dans la montagne ; apparurent Sulaymān ibn Māṭūs et son élève Abū Miswar Yasjā, qui fit revivre le savoir à Djerba.',
            en: 'Through the two sheikhs’ circles, knowledge revived in the mountain; Sulayman ibn Matus emerged, and his student Abu Miswar Yasja, reviver of knowledge in Djerba.',
          },
          certainty: 'approximate',
        },
        {
          id: 't4',
          period: { ar: '358 هـ', fr: '358 H', en: '358 AH' },
          label: { ar: 'الانتفاضة ثمّ الكتمان', fr: 'Le soulèvement, puis le secret', en: 'The uprising, then secrecy' },
          detail: {
            ar: 'شارك أهل نفوسة الإمام أبا خزر وأبا نوح في الانتفاضة ضدّ العبيديين، ولم يُكتب لها النصر، فدخل أهل الدعوة مرحلة الكتمان.',
            fr: 'Les gens de Nafūsa se joignirent à l’imam Abū Khazar et à Abū Nūḥ dans le soulèvement contre les Ubaydides ; il échoua, et les gens de l’Appel entrèrent dans la phase du secret.',
            en: 'The people of Nafusa joined Imam Abu Khazar and Abu Nuh in the uprising against the Ubaydids; it did not win, and the People of the Call entered the stage of secrecy.',
          },
        },
        {
          id: 't5',
          period: { ar: '440 هـ', fr: '440 H', en: '440 AH' },
          label: { ar: 'تخريب درجين', fr: 'La destruction de Darjīn', en: 'The destruction of Darjin' },
          detail: {
            ar: 'خرّب الزيريون درجين في قسطيلية، وتحمّلت المناطق غير المنيعة في الجريد وغيرها ضغطًا كبيرًا.',
            fr: 'Les Zirides détruisirent Darjīn, en Qasṭīliya ; les régions peu protégées du Djérid et d’ailleurs subirent une forte pression.',
            en: 'The Zirids destroyed Darjin in Qastiliya, and the unprotected regions of the Jarid and elsewhere came under heavy pressure.',
          },
        },
      ],
    },

    // 17 — Blitz: speed review (all slides)
    {
      kind: 'blitz',
      id: 'blitz',
      title: { ar: 'جولة سريعة', fr: 'Manche éclair', en: 'Speed round' },
      intro: {
        ar: 'اثنتا عشرة ثانية لكلّ عبارة — هل هي صحيحة أم خاطئة؟',
        fr: 'Douze secondes par affirmation — vrai ou faux ?',
        en: 'Twelve seconds per statement — true or false?',
      },
      secondsPerCard: 12,
      statements: [
        {
          id: 'b1',
          text: { ar: 'جبل نفوسة سلسلة جبالٍ في شمال غرب ليبيا، ونفوسة قبيلةٌ أمازيغية اعتنقت الإسلام مبكّرًا.', fr: 'Le djebel Nafūsa est une chaîne de montagnes au nord-ouest de la Libye, et Nafūsa une tribu amazighe convertie très tôt à l’islam.', en: 'The Nafusa Mountain is a range in north-western Libya, and Nafusa is an Amazigh tribe that embraced Islam early.' },
          answer: true,
          explanation: { ar: 'صحيح.', fr: 'Vrai.', en: 'True.' },
        },
        {
          id: 'b2',
          text: { ar: 'لم يفقد الجبل في موقعة مانو (283 هـ) إلّا عالمًا واحدًا.', fr: 'À Mānū (283 H), la montagne ne perdit qu’un seul savant.', en: 'At Manu (283 AH) the mountain lost only one scholar.' },
          answer: false,
          explanation: { ar: 'خطأ: هلك الآلاف، وفيهم أزيد من أربعمائة عالمٍ وفقيه، حتّى فُقد من يدرّس أصول الدين.', fr: 'Faux : des milliers périrent, dont plus de quatre cents savants et juristes ; plus personne pour enseigner les fondements de la religion.', en: 'False — thousands perished, including more than four hundred scholars and jurists, until no one was left to teach the foundations of the religion.' },
        },
        {
          id: 'b3',
          text: { ar: 'حفظ أبو القاسم سدرات البغطوري وعبد الله بن الخير الدين والمذهب في الجبل بحلقتيهما العلميتين.', fr: 'Abū al-Qāsim Sadrāt al-Baghṭūrī et ‘Abd Allāh ibn al-Khayr préservèrent la religion et l’école dans la montagne par leurs deux cercles d’étude.', en: 'Abu al-Qasim Sadrat al-Baghturi and ‘Abd Allah ibn al-Khayr preserved the religion and the school in the mountain through their two study circles.' },
          answer: true,
          explanation: { ar: 'صحيح، بحلقتيهما اللتين استمرّتا طويلًا.', fr: 'Vrai, par leurs deux cercles qui durèrent longtemps.', en: 'True — through their two long-lasting circles.' },
        },
        {
          id: 'b4',
          text: { ar: 'شارك أهل نفوسة في انتفاضة 358 هـ ضدّ الزيريين.', fr: 'En 358 H, les gens de Nafūsa se soulevèrent contre les Zirides.', en: 'In 358 AH the people of Nafusa rose against the Zirids.' },
          answer: false,
          explanation: { ar: 'خطأ: شاركوا مع الإمام أبي خزر يغلا بن زلتاف وأبي نوح سعيد، ضدّ العبيديين.', fr: 'Faux : ils se soulevèrent avec l’imam Abū Khazar Yaghlā ibn Zultāf et Abū Nūḥ Sa‘īd, contre les Ubaydides.', en: 'False — they rose with Imam Abu Khazar Yaghla ibn Zultaf and Abu Nuh Sa‘id, against the Ubaydids.' },
        },
        {
          id: 'b5',
          text: { ar: 'في مرحلة الكتمان اشتغل أهل الدعوة بإصلاح مجتمعهم وتربية الأجيال.', fr: 'Dans la phase du secret, les gens de l’Appel se consacrèrent à réformer leur société et à éduquer les générations.', en: 'In the stage of secrecy the People of the Call turned to reforming their society and raising the generations.' },
          answer: true,
          explanation: { ar: 'صحيح.', fr: 'Vrai.', en: 'True.' },
        },
        {
          id: 'b6',
          text: { ar: 'تحمّل سكّان المناطق غير المنيعة ضغطًا كبيرًا من الزيريين ومن القبائل البدوية المهاجرة.', fr: 'Les habitants des régions exposées subirent une forte pression des Zirides et des tribus bédouines migrantes.', en: 'People in the exposed regions suffered heavy pressure from the Zirids and from migrating Bedouin tribes.' },
          answer: true,
          explanation: { ar: 'صحيح، وقد خرّب الزيريون درجين في قسطيلية سنة 440 هـ.', fr: 'Vrai, et les Zirides détruisirent Darjīn, en Qasṭīliya, en 440 H.', en: 'True — and the Zirids destroyed Darjin in Qastiliya in 440 AH.' },
        },
        {
          id: 'b7',
          text: { ar: 'اشتغل أبو مسور في جربة بالتجارة فقط.', fr: 'À Djerba, Abū Miswar ne fit que du commerce.', en: 'In Djerba, Abu Miswar only traded.' },
          answer: false,
          explanation: { ar: 'خطأ: أنشأ المدارس، وجمع الكتب النفيسة، وبنى المساجد، وتخرّج على يده علماء كبار.', fr: 'Faux : il fonda des écoles, réunit des livres précieux, bâtit des mosquées et forma de grands savants.', en: 'False — he founded schools, collected precious books, built mosques and trained great scholars.' },
        },
        {
          id: 'b8',
          text: { ar: 'أُلّفت في جربة إحدى الموسوعات الفقهية: «ديوان العزّابة».', fr: 'L’une des encyclopédies du droit, le « Dīwān al-‘Azzāba », fut composée à Djerba.', en: 'One of the encyclopedias of jurisprudence, "Diwan al-‘Azzaba", was composed in Djerba.' },
          answer: true,
          explanation: { ar: 'صحيح. وسُمّيت جربة «جزيرة المساجد» لأنّ قراها وأريافها اعتنت بحلقات التعليم ورعاية الطلبة الوافدين.', fr: 'Vrai. Et Djerba fut surnommée « l’île des mosquées » parce que ses villages et campagnes veillèrent aux cercles d’étude et à l’accueil des étudiants.', en: 'True. And Djerba was named "the Island of Mosques" because its villages and countryside looked after the study circles and cared for arriving students.' },
        },
      ],
    },

    // 18 — Quiz (slides 3, 5, 7, 9)
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'اختبر معلوماتك', fr: 'Teste tes connaissances', en: 'Test your knowledge' },
      intro: {
        ar: 'خمسة أسئلة: أربعة عن التواريخ واللقب، وسؤالٌ عن الكلمات المفتاحية.',
        fr: 'Cinq questions : quatre sur les dates et le surnom, une sur les mots-clés.',
        en: 'Five questions: four on the dates and the nickname, one on the key words.',
      },
      questions: [
        {
          id: 'd1',
          type: 'mcq',
          question: { ar: 'في أيّ سنةٍ وقعت واقعة مانو؟', fr: 'En quelle année eut lieu la bataille de Mānū ?', en: 'In which year did the battle of Manu take place?' },
          options: [
            { id: '171', label: { ar: '171 هـ', fr: '171 H', en: '171 AH' } },
            { id: '283', label: { ar: '283 هـ', fr: '283 H', en: '283 AH' } },
            { id: '358', label: { ar: '358 هـ', fr: '358 H', en: '358 AH' } },
            { id: '440', label: { ar: '440 هـ', fr: '440 H', en: '440 AH' } },
          ],
          correctId: '283',
          explanation: { ar: 'وقعت واقعة مانو سنة 283 هـ، وهي أقدم محنةٍ أصابت الجبل في هذا الدرس، في القرن الثالث الهجريّ.', fr: 'La bataille de Mānū eut lieu en 283 H : c’est la plus ancienne épreuve de la montagne dans cette leçon, au IIIᵉ siècle de l’Hégire.', en: 'The battle of Manu took place in 283 AH: the mountain’s earliest trial in this lesson, in the 3rd century AH.' },
        },
        {
          id: 'd2',
          type: 'mcq',
          question: { ar: 'في أيّ سنةٍ كانت الانتفاضة ضدّ العبيديين؟', fr: 'En quelle année eut lieu le soulèvement contre les Ubaydides ?', en: 'In which year was the uprising against the Ubaydids?' },
          options: [
            { id: '171', label: { ar: '171 هـ', fr: '171 H', en: '171 AH' } },
            { id: '283', label: { ar: '283 هـ', fr: '283 H', en: '283 AH' } },
            { id: '358', label: { ar: '358 هـ', fr: '358 H', en: '358 AH' } },
            { id: '440', label: { ar: '440 هـ', fr: '440 H', en: '440 AH' } },
          ],
          correctId: '358',
          explanation: { ar: 'كانت الانتفاضة سنة 358 هـ، بعد مانو بخمسٍ وسبعين سنة.', fr: 'Le soulèvement eut lieu en 358 H, soixante-quinze ans après Mānū.', en: 'The uprising was in 358 AH, seventy-five years after Manu.' },
        },
        {
          id: 'd3',
          type: 'mcq',
          question: { ar: 'في أيّ سنةٍ خرّب الزيريون درجين؟', fr: 'En quelle année les Zirides détruisirent-ils Darjīn ?', en: 'In which year did the Zirids destroy Darjin?' },
          options: [
            { id: '171', label: { ar: '171 هـ', fr: '171 H', en: '171 AH' } },
            { id: '283', label: { ar: '283 هـ', fr: '283 H', en: '283 AH' } },
            { id: '358', label: { ar: '358 هـ', fr: '358 H', en: '358 AH' } },
            { id: '440', label: { ar: '440 هـ', fr: '440 H', en: '440 AH' } },
          ],
          correctId: '440',
          explanation: { ar: 'خرّب الزيريون درجين في قسطيلية سنة 440 هـ، وهو آخر تاريخٍ على الخطّ الزمنيّ.', fr: 'Les Zirides détruisirent Darjīn, en Qasṭīliya, en 440 H : c’est la dernière date de la frise.', en: 'The Zirids destroyed Darjin in Qastiliya in 440 AH: the last date on the timeline.' },
        },
        {
          id: 'd4',
          type: 'mcq',
          question: { ar: 'سُمّيت جربة: جزيرة…', fr: 'Djerba fut surnommée : l’île des…', en: 'Djerba was named: the Island of…' },
          options: [
            { id: 'palms', label: { ar: 'النخيل', fr: 'palmiers', en: 'Palms' } },
            { id: 'mosques', label: { ar: 'المساجد', fr: 'mosquées', en: 'Mosques' } },
            { id: 'caravans', label: { ar: 'القوافل', fr: 'caravanes', en: 'Caravans' } },
          ],
          correctId: 'mosques',
          explanation: { ar: '«جزيرة المساجد»: بنى فيها أبو مسور المساجد، واعتنت قراها وأريافها بحلقات التعليم.', fr: '« L’île des mosquées » : Abū Miswar y bâtit des mosquées, et ses villages et campagnes veillèrent aux cercles d’étude.', en: '"The Island of Mosques": Abu Miswar built mosques there, and its villages and countryside looked after the study circles.' },
        },
        {
          id: 'q5',
          type: 'matching',
          question: { ar: 'صِل كلّ تعريفٍ بكلمته المفتاحية', fr: 'Relie chaque définition à son mot-clé', en: 'Match each definition to its key word' },
          pairs: [
            { id: 'w-nafusa', left: { ar: 'قبيلةٌ أمازيغية وسلسلة جبالٍ في ليبيا.', fr: 'Une tribu amazighe et une chaîne de montagnes en Libye.', en: 'An Amazigh tribe and a mountain range in Libya.' }, right: { ar: 'نفوسة', fr: 'Nafūsa', en: 'Nafusa' } },
            { id: 'w-kitman', left: { ar: 'المرحلة التي دخلها أهل الدعوة بعد انتفاضة 358 هـ.', fr: 'La phase où entrèrent les gens de l’Appel après le soulèvement de 358 H : la phase du…', en: 'The stage the People of the Call entered after the 358 AH uprising: the stage of…' }, right: { ar: 'الكتمان', fr: 'le secret (kitmān)', en: 'secrecy (kitman)' } },
            { id: 'w-halqa', left: { ar: 'مجلسٌ للتعليم والذكر والمواعظ.', fr: 'Une assemblée d’enseignement, de rappel et d’exhortation.', en: 'A gathering for teaching, remembrance and exhortation.' }, right: { ar: 'الحلقة', fr: 'le cercle (ḥalqa)', en: 'the circle (halqa)' } },
            { id: 'w-jarid', left: { ar: 'المنطقة الجنوبية من تونس، بين وادي سوف وجبل نفوسة.', fr: 'La région sud de la Tunisie, entre l’Oued Souf et le djebel Nafūsa.', en: 'The southern region of Tunisia, between Wadi Souf and the Nafusa Mountain.' }, right: { ar: 'الجريد', fr: 'le Djérid', en: 'the Jarid' } },
            { id: 'w-jerba', left: { ar: 'جزيرة المساجد.', fr: 'L’île des mosquées.', en: 'The Island of Mosques.' }, right: { ar: 'جربة', fr: 'Djerba', en: 'Djerba' } },
          ],
          explanation: {
            ar: 'نفوسة: من أوائل أهل الدعوة وسندٌ قويّ للإمامة الرستمية. في مرحلة الكتمان أصلحوا مجتمعهم وربّوا الأجيال. بحلقتين علميتين حُفظ الدين في الجبل. الجريد منطقةٌ غير منيعة تحمّلت ضغط الزيريين والقبائل البدوية المهاجرة. وجربة منارة العلم بالمغرب وقبلة الطلبة.',
            fr: 'Nafūsa : parmi les premiers gens de l’Appel, solide appui de l’imamat rustamide. Dans la phase du secret (kitmān), ils réformèrent leur société et éduquèrent les générations. Par deux cercles d’étude (ḥalqa), la religion fut gardée dans la montagne. Le Djérid, région peu protégée, subit la pression des Zirides et des tribus bédouines migrantes. Et Djerba fut le phare du savoir au Maghreb et la destination des étudiants.',
            en: 'Nafusa: among the first People of the Call, a strong support for the Rustamid imamate. In the stage of secrecy (kitman) they reformed their society and raised the generations. Through two study circles (halqa) the religion was kept in the mountain. The Jarid, an unprotected region, bore the pressure of the Zirids and migrating Bedouin tribes. And Djerba was the beacon of knowledge in the Maghreb and the destination of students.',
          },
        },
      ],
    },

    // 19 — Values
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'ماذا نتعلّم من هذا الدرس؟', fr: 'Que retenir de cette leçon ?', en: 'What do we learn from this lesson?' },
      prompt: {
        ar: 'حين غابت الدولة وقلّ العلماء، ماذا اختار أهل الدعوة؟',
        fr: 'Quand l’État disparut et que les savants se firent rares, que choisirent les gens de l’Appel ?',
        en: 'When the state was gone and scholars were few, what did the People of the Call choose?',
      },
      choices: [
        {
          id: 'reform',
          isCorrect: true,
          label: { ar: 'دخلوا مرحلة الكتمان، وأصلحوا مجتمعهم وربّوا الأجيال', fr: 'Ils entrèrent dans la phase du secret, réformèrent leur société et éduquèrent les générations', en: 'They entered the stage of secrecy, reformed their society and raised the generations' },
          feedback: {
            ar: 'صحيح — حين غابت الدولة لم يغب العلم: حفظت الحلقات الدين في الجبل والجزيرة.',
            fr: 'Exact — quand l’État disparut, le savoir, lui, ne disparut pas : les cercles gardèrent la religion dans la montagne et sur l’île.',
            en: 'Correct — when the state was gone, knowledge was not: the circles kept the religion alive in the mountain and on the island.',
          },
        },
        {
          id: 'despair',
          isCorrect: false,
          label: { ar: 'تركوا العلم واليأسُ يملؤهم', fr: 'Ils abandonnèrent le savoir, découragés', en: 'They gave up learning in despair' },
          feedback: { ar: 'لا — بل اشتغلوا بالإصلاح والتربية.', fr: 'Non — au contraire, ils se consacrèrent à la réforme et à l’éducation.', en: 'No — rather, they turned to reform and education.' },
        },
        {
          id: 'imamate',
          isCorrect: false,
          label: { ar: 'أعلنوا إمامةً جديدة فورًا', fr: 'Ils proclamèrent aussitôt un nouvel imamat', en: 'They at once proclaimed a new imamate' },
          feedback: { ar: 'لا — الدرس يذكر الكتمان وإصلاح المجتمع، لا إمامةً جديدة.', fr: 'Non — la leçon parle de secret et de réforme de la société, non d’un nouvel imamat.', en: 'No — the lesson speaks of secrecy and reforming society, not of a new imamate.' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من هذا الدرس — اقلب كلّ بطاقة', fr: 'Des valeurs de cette leçon — retourne chaque carte', en: 'Values from this lesson — flip each card' },
      values: [
        {
          id: 'keep-knowledge',
          value: { ar: 'حفظ العلم', fr: 'Garder le savoir', en: 'Keeping knowledge alive' },
          evidence: { ar: 'بعد أن فُقد أزيد من أربعمائة عالم في مانو، حفظ الشيخان سدرات البغطوري وعبد الله بن الخير الدين بحلقتيهما.', fr: 'Après la perte de plus de quatre cents savants à Mānū, les cheikhs Sadrāt al-Baghṭūrī et ‘Abd Allāh ibn al-Khayr gardèrent la religion par leurs deux cercles.', en: 'After more than four hundred scholars were lost at Manu, Sheikhs Sadrat al-Baghturi and ‘Abd Allah ibn al-Khayr kept the religion alive through their circles.' },
        },
        {
          id: 'patience',
          value: { ar: 'الصبر والإصلاح بعد المحنة', fr: 'Patience et réforme après l’épreuve', en: 'Patience and reform after hardship' },
          evidence: { ar: 'بعد مانو وانتفاضةٍ لم تنتصر، اشتغل أهل الدعوة بإصلاح مجتمعهم وتربية الأجيال.', fr: 'Après Mānū et un soulèvement sans victoire, les gens de l’Appel se consacrèrent à réformer leur société et à éduquer les générations.', en: 'After Manu and an uprising that did not win, the People of the Call turned to reforming their society and raising the generations.' },
        },
        {
          id: 'pass-it-on',
          value: { ar: 'نقل العلم جيلًا بعد جيل', fr: 'Transmettre le savoir de génération en génération', en: 'Passing knowledge from one generation to the next' },
          evidence: { ar: 'تعلّم أبو مسور على سليمان بن ماطوس، وعلّم ابنه فصيلًا، وعند فصيل تعلّم محمد بن بكر.', fr: 'Abū Miswar étudia auprès de Sulaymān ibn Māṭūs, enseigna à son fils Faṣīl, et Muḥammad ibn Bakr étudia auprès de Faṣīl.', en: 'Abu Miswar studied under Sulayman ibn Matus, taught his son Fasil, and Muhammad ibn Bakr studied under Fasil.' },
        },
        {
          id: 'students',
          value: { ar: 'إكرام طالب العلم', fr: 'Honorer celui qui cherche le savoir', en: 'Honouring the seeker of knowledge' },
          evidence: { ar: 'رعت قرى جربة وأريافها الطلبة الوافدين، حتّى صارت الجزيرة قبلةً للطلبة.', fr: 'Les villages et campagnes de Djerba prirent soin des étudiants venus d’ailleurs, et l’île devint leur destination.', en: 'Djerba’s villages and countryside cared for arriving students, until the island became the destination of students.' },
        },
      ],
    },

    // 20 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'بعد الرستميين، وبعد محنة مانو وانتفاضةٍ لم تنتصر، دخل أهل الدعوة مرحلة الكتمان واشتغلوا بإصلاح مجتمعهم وتربية الأجيال. فحفظت الحلقات العلم في جبل نفوسة، وصارت جربة «جزيرة المساجد» ومنارة العلم بالمغرب.',
        fr: 'Après les Rustamides, après l’épreuve de Mānū et un soulèvement sans victoire, les gens de l’Appel entrèrent dans la phase du secret et se consacrèrent à réformer leur société et à éduquer les générations. Les cercles gardèrent le savoir au djebel Nafūsa, et Djerba devint « l’île des mosquées », phare du savoir au Maghreb.',
        en: 'After the Rustamids, after the trial of Manu and an uprising that did not win, the People of the Call entered the stage of secrecy and turned to reforming their society and raising the generations. The circles kept knowledge alive in the Nafusa Mountain, and Djerba became "the Island of Mosques", the beacon of knowledge in the Maghreb.',
      },
      learned: [
        {
          ar: 'نفوسة قبيلةٌ أمازيغية في جبال شمال غرب ليبيا، من أوائل أهل الدعوة، وسندٌ قويّ للإمامة الرستمية.',
          fr: 'Nafūsa est une tribu amazighe des montagnes du nord-ouest de la Libye, parmi les premiers gens de l’Appel et solide appui de l’imamat rustamide.',
          en: 'Nafusa is an Amazigh tribe in the mountains of north-western Libya, among the first People of the Call and a strong support for the Rustamid imamate.',
        },
        {
          ar: 'أنهكت واقعة مانو (283 هـ) الجبل، وفُقد فيها أزيد من أربعمائة عالمٍ وفقيه.',
          fr: 'La bataille de Mānū (283 H) épuisa la montagne, qui y perdit plus de quatre cents savants et juristes.',
          en: 'The battle of Manu (283 AH) wore out the mountain, which lost more than four hundred scholars and jurists.',
        },
        {
          ar: 'بعد انتفاضة 358 هـ ضدّ العبيديين دخل أهل الدعوة مرحلة الكتمان.',
          fr: 'Après le soulèvement de 358 H contre les Ubaydides, les gens de l’Appel entrèrent dans la phase du secret.',
          en: 'After the 358 AH uprising against the Ubaydids, the People of the Call entered the stage of secrecy.',
        },
        {
          ar: 'حفظ الشيخان أبو القاسم سدرات البغطوري وعبد الله بن الخير العلم في الجبل بحلقتيهما.',
          fr: 'Les cheikhs Abū al-Qāsim Sadrāt al-Baghṭūrī et ‘Abd Allāh ibn al-Khayr gardèrent le savoir dans la montagne par leurs deux cercles.',
          en: 'Sheikhs Abu al-Qasim Sadrat al-Baghturi and ‘Abd Allah ibn al-Khayr kept knowledge alive in the mountain through their two circles.',
        },
        {
          ar: 'الجزيرة والجبال كانت منيعة، أمّا الجريد فتحمّل ضغط الزيريين والقبائل البدوية المهاجرة.',
          fr: 'L’île et les montagnes étaient protégées, tandis que le Djérid subit la pression des Zirides et des tribus bédouines migrantes.',
          en: 'The island and the mountains were protected, while the Jarid bore the pressure of the Zirids and migrating Bedouin tribes.',
        },
        {
          ar: 'أنشأ أبو مسور المدارس وجمع الكتب وبنى المساجد، فصارت جربة قبلةً للطلبة، وفيها أُلّف «ديوان العزّابة».',
          fr: 'Abū Miswar fonda des écoles, réunit des livres et bâtit des mosquées : Djerba devint la destination des étudiants, et le « Dīwān al-‘Azzāba » y fut composé.',
          en: 'Abu Miswar founded schools, collected books and built mosques: Djerba became the destination of students, and "Diwan al-‘Azzaba" was composed there.',
        },
      ],
    },
  ],
}
