import type { Lesson } from '../../types'

// Source: Ibadite History textbook (Other ressources/Ibadite_History_S1.pdf), pages 46–67.
//   Curriculum title: «الغزوات: بدر - أحد - الخندق».
//
//   A) «الدرس الخامس: يوم الفرقان» — pages 46–53 (slides 1–8)
//   Slide 2 — إشكالية الدرس: نهب المشركون أرزاق المهاجرين في مكة وأرسلوا إلى المدينة يهدّدونهم، فراح المسلمون يجوبون ضواحي المدينة
//             ويترصّدون قوافل قريش المارّة أو العائدة من الشام نحو مكة معبّأةً بأموال التجارة. كيف ستستقبل قريش هذه الأخبار؟
//   Slide 3 — اعتراض قافلة قريش: قافلة من الشام يقودها أبو سفيان بن حرب، خرج الرسول بنفسه مع أصحابه لاعتراضها واسترجاع الأموال المنهوبة،
//             لمّا اقترب أبو سفيان من مستراح بدر خشي فأرسل من يتجسّس، فأرسل إلى مكة يستغيث قريشًا وسلك طريقًا آخر على ساحل البحر.
//   Slide 4 — خروج قريش لنجدة القافلة: خرج جيش من مكة، نجا أبو سفيان بالقافلة وكتب إلى قريش أن ترجع، لكنّ أبا جهل أصرّ أن يصل إلى مستراح بدر
//             ويُظهر للعرب بأس قريش. استشار الرسول أصحابه فكانوا كلمة واحدة، وصلوا بدرًا قبل قريش وعسكروا عند مدخل بدر في العدوة الدنيا.
//             مشورة الحُباب بن المنذر (الآبار والحوض) وقول الرسول: «قد أشرتَ بالرأي». صورة: منظر للعدوة الدنيا ميدان بدر.
//   Slide 5 — اشتعال المعركة: وجد المشركون الآبار مردومة ولا ماء ولا مستراح وعزموا على الحرب؛ في اليوم التالي وصايا الرسول ثم الاصطفاف،
//             ثلاثمائة رجل مقابل جيش يزيد على ألف، مبارزة ثلاثة لثلاثة، دعاء الرسول وابتهاله، الملائكة، سبعون قتيلًا وسبعون أسيرًا وغنائم كثيرة،
//             سمعت القبائل فذلّت قريش وعزّ النبي والمسلمون.
//   Slide 6 — معركة بدر: معركة فاصلة بين الكفر والإيمان، يوم الفرقان، 17 رمضان من السنة الثانية للهجرة، آيات في الأنفال وآل عمران،
//             أرعبت النتيجة اليهود والمشركين في المدينة فأظهر كثير منهم الإسلام خوفًا وطمعًا وهم ينافقون.
//   Slide 7 — أجيب (أربعة أسئلة). Slide 8 — شكرًا (skipped).
//
//   B) «الدرس السادس: امتحان العصيان» (غزوة أحد) — pages 54–62 (slides 1–9)
//   Slide 2 — إشكالية الدرس: لم يهدأ بال قريش حتى عزمت على الثأر من هزيمة بدر، أعدّت جيشًا كبيرًا وزحفت إلى المدينة فأعدّ المسلمون العدّة.
//   Slide 3 — إخلاء يهود بني قينقاع: في شوّال بعد رمضان بدر أظهروا الشرّ والعداوة، نصحهم الرسول ونهاهم، قولهم «لا يغرّنّك…»، صبر عليهم،
//             فتنة في سوقهم قُتل فيها رجل من المسلمين ورجل من اليهود، حصار خمسة عشر يومًا ثم الإجلاء؛ وحبس المسلمون قافلة لقريش فيها ألف بعير.
//   Slide 4 — الخروج لمواجهة المشركين: بعد عام من بدر، رأيه التحصّن في المدينة، ألحّ الشباب على الخروج فاستجاب، عسكر في أقصى الوادي قرب أحد،
//             سبعمائة رجل، خمسون من أمهر الرماة على ربوة قبالة الجبل لحماية ظهر الجيش وأمرهم بالتزام المكان حتى يأذن لهم.
//   Slide 5 — نهاية غير متوقّعة: تراجع المشركين، خالد بن الوليد يلاحظ الرماة، أغلب الرماة ينزلون لجمع الغنائم، خالد يدور خلف الربوة،
//             عودة الفارّين، تشتّت المسلمين ومحاولة الاحتماء بجبل أحد، جُرح الرسول وأصيب وجهه وسنّه.
//   Slide 6 — يوم ما بعد المعركة: دفن الشهداء السبعين ومنهم حمزة ومصعب بن عمير، المرأة التي قالت «كلّ مصيبةٍ بعدك جلل»، الخروج في اليوم الموالي
//             بمن حضر أحدًا فقط، معبد بن أبي معبد يهوّل على أبي سفيان، رحيل قريش إلى مكة.
//   Slide 7 — أعتبر (أربع عِبر). Slide 8 — أجيب. Slide 9 — شكرًا (skipped).
//
//   C) «الابتلاء المزلزل» (غزوة الخندق / الأحزاب) — pages 63–67 (textbook pages 32–35, scanned)
//   p.32 — أقرأ: مضى أكثر من سنتين على امتحان أحد، اجتمعت القبائل من كل جهات الجزيرة لتدمير المدينة. (1) إجلاء بني النضير: الدية، حجر الرحى،
//          جبريل، خرق صحيفة المدينة، بداية سنة أربع للهجرة، خيبر، سنة ونصف، حوالي عشرة آلاف رجل سمّاهم القرآن بالأحزاب.
//   p.33 — (2) حفر الخندق: مشورة سلمان الفارسي، بين جبل وجبل، 5544 مترًا، كل 40 مسلمًا يحفر 20 مترًا، الحجر على البطن، الصخرة، القصعة،
//          المناجاة والرجز والكتمان. بطاقة «مشروع الخندق» (الموقع، العرض، العمق، أسبوعان، 1500 من 3000). (3) إفشال تحالف المشركين.
//   p.34 — نعيم بن مسعود الأشجعي والحرب خدعة، الريح والغبار. (4) تأديب يهود بني قريظة، السنة الخامسة، ستة شهداء وثلاثة قتلى، سورة الأحزاب.
//          أتعرّف: الدية، الخندق، يناجي، يرتجز.
//   p.35–36 — أتذكّر، أعتبر من قدوتي (أربع عِبر)، أنجز (صحيح/خطأ واختيار من متعدّد).
//
// Every fact below is taken from those slides; nothing is added from outside them.
// Corrected slide typos: «الجبّاب بن المنذر» → الحُباب بن المنذر؛ «معد بن أبي معبد» → معبد بن أبي معبد؛ «يهددنوهم» → يهدّدونهم؛ «سمع المسلمون بالخير» → بالخبر.
// Numbers are phrased with "نحو / environ / about" (300, 1000, 700, 10 000, 5544…).
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): the Prophet ﷺ and the Companions were present at all three battles,
// so scenes are told through landscape, wells, tents, banners, weapons lying on the sand, a trench, mountains and sky.

const IMG = '/images/lessons/ghazawat'

const HERO_ALT = {
  ar: 'وادٍ صحراويّ عند الفجر، رايةٌ خضراء مغروسة في الرمل، وتروسٌ ورماح ملقاة على الأرض، وجبالٌ وواحة نخيل في الأفق',
  fr: 'Une vallée désertique à l’aube, une bannière verte plantée dans le sable, des boucliers et des lances posés au sol, des montagnes et une oasis à l’horizon',
  en: 'A desert valley at dawn, a green banner planted in the sand, shields and spears lying on the ground, mountains and a palm oasis on the horizon',
}

const UHUD_ALT = {
  ar: 'جبلٌ صخريّ أحمر شامخ فوق سهلٍ رمليّ واسع، وخيمةٌ عند طرف الوادي، وشجيرات متناثرة',
  fr: 'Une haute montagne rocheuse rouge dominant une vaste plaine de sable, une tente au bord de la vallée et des arbustes épars',
  en: 'A towering red rocky mountain above a wide sandy plain, a tent at the edge of the valley and scattered shrubs',
}

export const ghazawat: Lesson = {
  id: 'history-ibadi-g1-s1-l5',
  gradeId: 'history-ibadi-g1',
  moduleId: 'history-ibadi-g1',
  semesterId: 'history-ibadi-g1-s1',
  order: 5,
  status: 'published',
  estimatedMinutes: 45,
  cover: `${IMG}/hero.png`,
  coverAlt: HERO_ALT,
  title: {
    ar: 'الغزوات: بدر - أحد - الخندق',
    fr: 'Les expéditions : Badr, Uḥud, le Fossé',
    en: 'The Battles: Badr, Uḥud and the Trench',
  },
  description: {
    ar: 'ثلاثُ مواقف كبرى: بئرٌ تحسم معركة، وربوةٌ تقلب نصرًا، وخندقٌ يوقف عشرة آلاف. استكشف الميادين، ورتّب الأحداث، واختبر نفسك!',
    fr: 'Trois grands moments : un puits qui décide d’une bataille, une butte qui renverse une victoire, un fossé qui arrête dix mille hommes. Explore les champs de bataille, remets les faits en ordre et teste-toi !',
    en: 'Three great moments: a well that decides a battle, a hillock that overturns a victory, a trench that stops ten thousand men. Explore the battlefields, put events in order and test yourself!',
  },

  sections: [
    // 01 — Hero (Badr slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: HERO_ALT,
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'هل يمكن لجيشٍ صغير أن يقف أمام جيشٍ يفوقه ثلاث مرّات؟',
        fr: 'Une petite armée peut-elle tenir face à une armée trois fois plus nombreuse ?',
        en: 'Can a small army stand against one three times its size?',
      },
      intro: {
        ar: 'نهب المشركون أرزاق المهاجرين في مكّة، وأرسلوا إلى المدينة يهدّدونهم. فراح المسلمون يجوبون ضواحي المدينة ويترصّدون قوافل قريش المارّة أو العائدة من الشام نحو مكّة، معبّأةً بأموال التجارة. كيف ستستقبل قريش هذه الأخبار؟',
        fr: 'Les polythéistes avaient pillé les biens des Émigrés à La Mecque et envoyaient des menaces jusqu’à Médine. Les musulmans se mirent alors à parcourir les environs de Médine et à guetter les caravanes de Quraysh qui passaient ou revenaient du Shām vers La Mecque, chargées des richesses du commerce. Comment Quraysh allait-elle recevoir ces nouvelles ?',
        en: 'The polytheists had looted the Emigrants’ belongings in Makkah and sent threats to Madina. So the Muslims began to roam the outskirts of Madina, watching for Quraysh’s caravans passing by or returning from Shām to Makkah, loaded with trade wealth. How would Quraysh take this news?',
      },
    },

    // 02 — Mission map
    {
      kind: 'missions',
      id: 'missions',
      title: { ar: 'أربع مهمّات، ثلاث غزوات', fr: 'Quatre missions, trois batailles', en: 'Four missions, three battles' },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنطلق إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'كيف ستستقبل قريش أخبار ترصّد قوافلها؟', fr: 'Comment Quraysh réagit-elle quand on guette ses caravanes ?', en: 'How does Quraysh react when its caravans are watched?' },
          target: 'reading-qafila',
          teaser: { ar: 'قافلةٌ تهرب… وجيشٌ يخرج.', fr: 'Une caravane s’échappe… une armée sort.', en: 'A caravan slips away… an army marches out.' },
        },
        {
          id: 'm2',
          question: { ar: 'لماذا سُمّي يوم بدرٍ بيوم الفرقان؟', fr: 'Pourquoi le jour de Badr est-il appelé « jour du Furqān » ?', en: 'Why is the day of Badr called the “Day of the Furqān”?' },
          target: 'reading-furqan',
          teaser: { ar: 'يومٌ فرّق بين أمرين.', fr: 'Un jour qui sépara deux choses.', en: 'A day that set two things apart.' },
        },
        {
          id: 'm3',
          question: { ar: 'ماذا وقع في معركة أحد؟ ولماذا انقلبت؟', fr: 'Que s’est-il passé à Uḥud ? Pourquoi tout a basculé ?', en: 'What happened at Uḥud — and why did it turn?' },
          target: 'reading-uhud-battle',
          teaser: { ar: 'خمسون راميًا وربوة.', fr: 'Cinquante archers et une butte.', en: 'Fifty archers and a hillock.' },
        },
        {
          id: 'm4',
          question: { ar: 'كيف سيُبعد المسلمون خطر عشرة آلاف مقاتل؟', fr: 'Comment les musulmans écarteront-ils dix mille combattants ?', en: 'How will the Muslims keep ten thousand fighters away?' },
          target: 'reading-khandaq',
          teaser: { ar: 'فكرةٌ من أرض فارس.', fr: 'Une idée venue de Perse.', en: 'An idea from the land of Persia.' },
        },
      ],
    },

    // 03 — Reading: the caravan (Badr slides 3–4)
    {
      kind: 'reading',
      id: 'reading-qafila',
      title: { ar: 'اقرأ: القافلة التي أشعلت بدرًا', fr: 'Lis : la caravane qui déclencha Badr', en: 'Read: the caravan that sparked Badr' },
      intro: {
        ar: 'أربع لقطاتٍ سريعة، ثمّ تدخل مجلس الشورى بنفسك.',
        fr: 'Quatre scènes rapides, puis tu entres toi-même au conseil.',
        en: 'Four quick scenes, then you step into the council yourself.',
      },
      image: `${IMG}/caravan.png`,
      imageAlt: {
        ar: 'جمالٌ محمّلة بالبضائع باركةٌ على طريقٍ رمليّ بمحاذاة ساحل البحر، وخلفها جبالٌ صحراوية',
        fr: 'Des chameaux chargés de marchandises, agenouillés sur une piste de sable le long du rivage, avec des montagnes désertiques derrière',
        en: 'Camels loaded with goods kneeling on a sandy track along the seashore, with desert mountains behind',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'قافلةٌ من الشام', fr: 'Une caravane du Shām', en: 'A caravan from Shām' },
          text: {
            ar: 'علم الرسول ﷺ بقدوم قافلةٍ من بلاد الشام يقودها أبو سفيان بن حرب، محمّلةٍ بتجارة قريش وأموالها. فخرج ﷺ بنفسه مع أصحابه لاعتراضها، واسترجاع الأموال المنهوبة من المهاجرين في مكّة.',
            fr: 'Le Prophète ﷺ apprit l’arrivée d’une caravane venant du Shām, conduite par Abū Sufyān ibn Ḥarb et chargée du commerce et des biens de Quraysh. Il sortit lui-même ﷺ avec ses Compagnons pour l’intercepter et récupérer les biens pillés aux Émigrés à La Mecque.',
            en: 'The Prophet ﷺ learned that a caravan was coming from Shām, led by Abū Sufyān ibn Ḥarb and loaded with Quraysh’s trade and wealth. He ﷺ went out himself with his Companions to intercept it and recover the wealth looted from the Emigrants in Makkah.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'أبو سفيان يشكّ', fr: 'Abū Sufyān se méfie', en: 'Abū Sufyān grows wary' },
          text: {
            ar: 'لمّا اقترب أبو سفيان من مستراح بدر خشي أن يصله المسلمون، فأرسل من يتجسّس، فإذا المسلمون قد خرجوا يترصّدون القافلة. فأرسل حينها إلى مكّة يستغيث قريشًا، بينما سلك طريقًا آخر على ساحل البحر.',
            fr: 'En approchant de la halte de Badr, Abū Sufyān craignit d’être rejoint par les musulmans. Il envoya un espion : les musulmans étaient bien sortis guetter la caravane. Il fit alors appeler Quraysh au secours à La Mecque, et prit un autre chemin, le long de la mer.',
            en: 'As he neared the resting place of Badr, Abū Sufyān feared the Muslims would reach him. He sent a spy: the Muslims had indeed come out to watch for the caravan. So he sent to Makkah calling Quraysh for help, and took another road along the seacoast.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'جيشٌ يخرج من مكّة', fr: 'Une armée sort de La Mecque', en: 'An army leaves Makkah' },
          text: {
            ar: 'خرج من مكّة جيشٌ من المشركين لإنقاذ القافلة. واستطاع أبو سفيان أن ينجو بها، فكتب إلى قريشٍ أن ترجع.',
            fr: 'Une armée de polythéistes sortit de La Mecque pour sauver la caravane. Abū Sufyān réussit à la mettre à l’abri et écrivit à Quraysh de rentrer.',
            en: 'An army of polytheists marched out of Makkah to rescue the caravan. Abū Sufyān managed to get it to safety and wrote to Quraysh to turn back.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'إصرار أبي جهل', fr: 'L’obstination d’Abū Jahl', en: 'Abū Jahl insists' },
          text: {
            ar: 'لكنّ أبا جهلٍ أصرّ أن يصل بقريشٍ إلى مستراح بدر، ويُظهر للعرب بأس قريش. القافلة نجت… والجيش لم يرجع!',
            fr: 'Mais Abū Jahl s’obstina à mener Quraysh jusqu’à la halte de Badr, pour montrer aux Arabes la force de Quraysh. La caravane était sauvée… et l’armée ne rentra pas !',
            en: 'But Abū Jahl insisted on leading Quraysh all the way to the resting place of Badr, to show the Arabs Quraysh’s might. The caravan was safe… yet the army did not turn back!',
          },
        },
      ],
    },

    // 04 — Chat: the council and al-Ḥubāb's advice (Badr slide 4)
    {
      kind: 'chat',
      id: 'chat-hubab',
      title: { ar: 'مجلس الشورى قبل بدر', fr: 'Le conseil avant Badr', en: 'The council before Badr' },
      intro: {
        ar: 'أنت تختار ما قيل في المجلس. كلّ اختيارٍ صحيح يصير رسالة.',
        fr: 'C’est toi qui choisis ce qui s’est dit au conseil. Chaque bon choix devient un message.',
        en: 'You choose what was said at the council. Each right choice becomes a message.',
      },
      speakers: [
        { id: 'rawi', name: { ar: 'الراوي', fr: 'Le narrateur', en: 'Narrator' }, avatar: '📜', side: 'start', tone: 'night' },
        { id: 'sahaba', name: { ar: 'الصحابة', fr: 'Les Compagnons', en: 'The Companions' }, avatar: '🛡️', side: 'end', tone: 'gold' },
        { id: 'hubab', name: { ar: 'الحُباب بن المنذر', fr: 'Al-Ḥubāb ibn al-Mundhir', en: 'Al-Ḥubāb ibn al-Mundhir' }, avatar: '💧', side: 'end', tone: 'emerald' },
      ],
      steps: [
        {
          type: 'msg',
          id: 's1',
          who: 'rawi',
          text: {
            ar: 'علم الرسول ﷺ بإصرار المشركين على الحرب، فاستشار أصحابه.',
            fr: 'Le Prophète ﷺ apprit que les polythéistes tenaient à la guerre ; il consulta ses Compagnons.',
            en: 'The Prophet ﷺ learned that the polytheists were set on war, so he consulted his Companions.',
          },
        },
        {
          type: 'reply',
          id: 's2',
          who: 'sahaba',
          prompt: { ar: 'كيف كان موقف الصحابة؟', fr: 'Quelle fut la position des Compagnons ?', en: 'Where did the Companions stand?' },
          options: [
            {
              id: 'a',
              label: { ar: 'كلمةٌ واحدة ضدّ الكفّار: ننطلق نحو بدر.', fr: 'Une seule parole face aux mécréants : en route vers Badr.', en: 'One word against the disbelievers: on to Badr.' },
              correct: true,
              hint: { ar: 'كانوا كلمةً واحدة، وانطلقوا نحو بدر.', fr: 'Ils furent unanimes et partirent vers Badr.', en: 'They were of one word, and set off for Badr.' },
            },
            {
              id: 'b',
              label: { ar: 'نرجع، فالقافلة قد نجت.', fr: 'Rentrons, la caravane s’est échappée.', en: 'Let’s go back, the caravan has escaped.' },
              correct: false,
              hint: { ar: 'تذكّر: قريشٌ هي التي أصرّت على الحرب، والصحابة لم يختلفوا.', fr: 'Souviens-toi : c’est Quraysh qui tenait à la guerre, et les Compagnons ne se sont pas divisés.', en: 'Remember: it was Quraysh who insisted on war, and the Companions did not split.' },
            },
            {
              id: 'c',
              label: { ar: 'كلٌّ منّا له رأيٌ مختلف.', fr: 'Chacun de nous a un avis différent.', en: 'Each of us has a different view.' },
              correct: false,
              hint: { ar: 'بل العكس: كانوا كلمةً واحدة. الوحدة أوّل القوّة.', fr: 'Au contraire : ils parlèrent d’une seule voix. L’unité est la première force.', en: 'The opposite: they spoke with one voice. Unity is the first strength.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 's3',
          who: 'rawi',
          text: {
            ar: 'وصل المسلمون إلى بدرٍ قبل وصول جيش قريش، وعسكر النبيّ ﷺ عند مدخل بدرٍ في العُدوة الدنيا، وتجهّزوا.',
            fr: 'Les musulmans arrivèrent à Badr avant l’armée de Quraysh. Le Prophète ﷺ campa à l’entrée de Badr, sur le versant le plus proche (al-‘udwa ad-dunyā), et ils se préparèrent.',
            en: 'The Muslims reached Badr before Quraysh’s army. The Prophet ﷺ camped at the entrance of Badr, on the nearer side (al-‘udwa ad-dunyā), and they made ready.',
          },
        },
        {
          type: 'msg',
          id: 's4',
          who: 'hubab',
          text: {
            ar: 'يا رسول الله، ليس هذا بمنزل!',
            fr: 'Ô Messager de Dieu, ce n’est pas le bon emplacement !',
            en: 'Messenger of God, this is not the place to camp!',
          },
        },
        {
          type: 'reply',
          id: 's5',
          who: 'hubab',
          prompt: { ar: 'ماذا اقترح الحُباب (رضي الله عنه)؟', fr: 'Que proposa al-Ḥubāb (que Dieu l’agrée) ?', en: 'What did al-Ḥubāb (may God be pleased with him) propose?' },
          options: [
            {
              id: 'a',
              label: { ar: 'انهض حتى تجعل القُلُب (الآبار) كلّها من وراء ظهرك.', fr: 'Avance jusqu’à avoir tous les puits derrière toi.', en: 'Move on until all the wells are behind your back.' },
              correct: true,
              hint: { ar: 'القليب هو البئر: أراد أن يكون الماء كلّه خلف المسلمين.', fr: 'Il voulait que toute l’eau soit derrière les musulmans.', en: 'He wanted all the water to be behind the Muslims.' },
            },
            {
              id: 'b',
              label: { ar: 'نبتعد عن الآبار كلّها.', fr: 'Éloignons-nous de tous les puits.', en: 'Let’s move away from all the wells.' },
              correct: false,
              hint: { ar: 'في الصحراء، من يملك الماء يملك القوّة. فكّر أين يجب أن تكون الآبار.', fr: 'Au désert, qui tient l’eau tient la force. Où doivent être les puits ?', en: 'In the desert, whoever holds the water holds the strength. Where should the wells be?' },
            },
            {
              id: 'c',
              label: { ar: 'نترك الآبار لقريشٍ ونكتفي بما معنا.', fr: 'Laissons les puits à Quraysh.', en: 'Let’s leave the wells to Quraysh.' },
              correct: false,
              hint: { ar: 'خطّته عكس ذلك تمامًا: الماء للمسلمين لا لقريش.', fr: 'Son plan est exactement l’inverse : l’eau pour les musulmans, pas pour Quraysh.', en: 'His plan is exactly the reverse: the water for the Muslims, not Quraysh.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 's6',
          who: 'hubab',
          text: {
            ar: 'ثمّ غوِّر كلَّ قليبٍ بها إلّا قليبًا واحدًا، ثمّ احفر عليه حوضًا…',
            fr: 'Puis comble tous les puits sauf un seul, et creuse près de lui un bassin…',
            en: 'Then fill in every well there except one, and dig a basin by it…',
          },
        },
        {
          type: 'reply',
          id: 's7',
          who: 'hubab',
          prompt: { ar: 'ولماذا؟ أكمل كلام الحُباب.', fr: 'Et pourquoi ? Termine la parole d’al-Ḥubāb.', en: 'And why? Finish al-Ḥubāb’s words.' },
          options: [
            {
              id: 'a',
              label: { ar: 'فنقاتل القوم، ونشرب ولا يشربون، حتى يحكم الله بيننا وبينهم.', fr: 'Nous les combattrons : nous boirons et eux non, jusqu’à ce que Dieu juge entre nous.', en: 'We fight them: we drink and they do not, until God judges between us.' },
              correct: true,
              hint: { ar: 'جيشٌ يشرب وجيشٌ عطشان: هذه هي الخطّة.', fr: 'Une armée qui boit, une armée assoiffée : voilà le plan.', en: 'One army drinks, the other goes thirsty: that is the plan.' },
            },
            {
              id: 'b',
              label: { ar: 'حتى نسقي جمال القافلة.', fr: 'Pour abreuver les chameaux de la caravane.', en: 'To water the caravan’s camels.' },
              correct: false,
              hint: { ar: 'القافلة نجت وسلكت طريق الساحل. الحوض للمقاتلين.', fr: 'La caravane a filé par la côte. Le bassin est pour les combattants.', en: 'The caravan escaped along the coast. The basin is for the fighters.' },
            },
            {
              id: 'c',
              label: { ar: 'حتى ترجع قريشٌ دون قتال.', fr: 'Pour que Quraysh reparte sans combat.', en: 'So that Quraysh goes home without a fight.' },
              correct: false,
              hint: { ar: 'قال: «فنقاتل القوم». والماء سلاحٌ في المعركة.', fr: 'Il dit : « Nous les combattrons. » L’eau est une arme dans la bataille.', en: 'He said: “We fight them.” Water is a weapon in battle.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 's8',
          who: 'rawi',
          text: {
            ar: 'فقال رسول الله ﷺ: «قد أشرتَ بالرأي». ففعلوا ذلك.',
            fr: 'Le Messager de Dieu ﷺ dit : « Tu as donné le bon avis. » Et ils firent ainsi.',
            en: 'The Messenger of God ﷺ said: “You have given the right counsel.” And so they did.',
          },
        },
      ],
    },

    // 05 — Reading: the eve of Badr (Badr slides 4–5)
    {
      kind: 'reading',
      id: 'reading-badr-eve',
      title: { ar: 'اقرأ: ليلة بدر', fr: 'Lis : la veille de Badr', en: 'Read: the eve of Badr' },
      intro: {
        ar: 'ماءٌ، ونظامٌ، ودعاء. اقرأ، ثمّ استكشف ميدان بدر.',
        fr: 'De l’eau, de l’ordre et la prière. Lis, puis explore le champ de Badr.',
        en: 'Water, order and prayer. Read, then explore the field of Badr.',
      },
      image: `${IMG}/badr-night.png`,
      imageAlt: {
        ar: 'سهلٌ صحراويّ في ليلةٍ مقمرة: بئرٌ حجرية فيها ماء، وبئرٌ مردومة بالحجارة، وخيامٌ داكنة، ونيرانٌ صغيرة بعيدة في الأفق',
        fr: 'Une plaine désertique sous la lune : un puits de pierre plein d’eau, un puits comblé de pierres, des tentes sombres et de petits feux lointains à l’horizon',
        en: 'A desert plain under the moon: a stone well with water, a well filled in with rocks, dark tents and small distant fires on the horizon',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'البئر الوحيدة', fr: 'Le seul puits', en: 'The one well' },
          text: {
            ar: 'بمشورة الحُباب (رضي الله عنه) أبقى المسلمون قليبًا واحدًا وحفروا عليه حوضًا: يشربون ولا يشرب عدوّهم.',
            fr: 'Sur le conseil d’al-Ḥubāb (que Dieu l’agrée), les musulmans gardèrent un seul puits et creusèrent un bassin : eux boivent, pas l’ennemi.',
            en: 'On al-Ḥubāb’s advice (may God be pleased with him), the Muslims kept a single well and dug a basin by it: they drink, the enemy does not.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'آبارٌ مردومة', fr: 'Des puits comblés', en: 'Filled-in wells' },
          text: {
            ar: 'وصل جيش المشركين بدرًا فوجدوا الآبار قد رُدمت، ولم يجدوا ماءً ولا مستراحًا. ورغم ذلك عزموا على الحرب.',
            fr: 'L’armée des polythéistes arriva à Badr et trouva les puits comblés : ni eau, ni lieu de repos. Malgré cela, ils décidèrent de combattre.',
            en: 'The polytheists’ army reached Badr and found the wells filled in: no water and no resting place. Even so, they resolved to fight.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'ثلاثمائة أمام ألف', fr: 'Trois cents face à mille', en: 'Three hundred against a thousand' },
          text: {
            ar: 'وصل المسلمون قبل قريش، وهم نحو ثلاثمائة رجل، أمام جيش المشركين الذي يزيد عدده على ألف مقاتل: أكثر من ثلاثة أضعاف المسلمين! وفي اليوم التالي استمعوا إلى وصايا الرسول ﷺ ثمّ اصطفّوا.',
            fr: 'Les musulmans arrivèrent avant Quraysh ; ils étaient environ trois cents, face à l’armée des polythéistes, forte de plus de mille combattants : plus de trois fois les musulmans ! Le lendemain, ils écoutèrent les recommandations du Prophète ﷺ puis se mirent en rangs.',
            en: 'The Muslims arrived before Quraysh; they were about three hundred men, facing the polytheists’ army of more than a thousand fighters: over three times the Muslims! The next day they listened to the Prophet’s ﷺ instructions, then lined up.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'دعاءٌ يصعد إلى السماء', fr: 'Une prière monte vers le ciel', en: 'A prayer rises to the sky' },
          text: {
            ar: 'لمّا اشتدّت الحرب كان الرسول ﷺ يدعو ويبتهل، فأنزل الله تعالى الملائكة يقاتلون مع المسلمين ويُرعبون قلوب المشركين.',
            fr: 'Quand le combat devint rude, le Prophète ﷺ invoquait et implorait Dieu. Dieu fit descendre les anges : ils combattaient avec les musulmans et jetaient l’effroi dans le cœur des polythéistes.',
            en: 'When the fighting grew fierce, the Prophet ﷺ prayed and implored. God sent down the angels to fight alongside the Muslims and cast terror into the polytheists’ hearts.',
          },
        },
      ],
    },

    // 06 — Explorer: the field of Badr (Badr slides 4–5)
    {
      kind: 'explorer',
      id: 'explorer-badr',
      title: { ar: 'ليل بدر: استكشف الميدان', fr: 'La nuit de Badr : explore le champ', en: 'Night at Badr: explore the field' },
      intro: {
        ar: 'هذه العُدوة الدنيا، ميدان بدر. اضغط على النقاط المضيئة لتكتشف خمسة أسرار: ماءٌ، ونظامٌ، ودعاء… هكذا استعدّ ثلاثمائةٍ لملاقاة ألف.',
        fr: 'Voici al-‘udwa ad-dunyā, le champ de Badr. Touche les points lumineux pour découvrir cinq secrets : de l’eau, de l’ordre et la prière… ainsi trois cents hommes se préparèrent à en affronter mille.',
        en: 'This is al-‘udwa ad-dunyā, the field of Badr. Tap the glowing points to discover five secrets: water, order and prayer… that is how three hundred prepared to face a thousand.',
      },
      image: `${IMG}/badr-night.png`,
      imageAlt: {
        ar: 'سهلٌ صحراويّ في ليلةٍ مقمرة: بئرٌ حجرية فيها ماء، وبئرٌ مردومة بالحجارة، وخيامٌ داكنة، ونيرانٌ صغيرة بعيدة في الأفق',
        fr: 'Une plaine désertique sous la lune : un puits de pierre plein d’eau, un puits comblé de pierres, des tentes sombres et de petits feux lointains à l’horizon',
        en: 'A desert plain under the moon: a stone well with water, a well filled in with rocks, dark tents and small distant fires on the horizon',
      },
      hotspots: [
        {
          id: 'well',
          x: 23,
          y: 72,
          label: { ar: 'البئر الوحيدة', fr: 'Le seul puits', en: 'The one well' },
          description: {
            ar: 'بمشورة الحُباب (رضي الله عنه) أبقى المسلمون قليبًا واحدًا وحفروا عليه حوضًا: يشربون ولا يشرب عدوّهم.',
            fr: 'Sur le conseil d’al-Ḥubāb (que Dieu l’agrée), les musulmans gardèrent un seul puits et creusèrent un bassin : eux boivent, pas l’ennemi.',
            en: 'On al-Ḥubāb’s advice (may God be pleased with him), the Muslims kept a single well and dug a basin by it: they drink, the enemy does not.',
          },
        },
        {
          id: 'filled',
          x: 73,
          y: 73,
          label: { ar: 'آبارٌ مردومة', fr: 'Des puits comblés', en: 'Filled-in wells' },
          description: {
            ar: 'وصل جيش المشركين بدرًا فوجدوا الآبار قد رُدمت، ولم يجدوا ماءً ولا مستراحًا. ورغم ذلك عزموا على الحرب.',
            fr: 'L’armée des polythéistes arriva à Badr et trouva les puits comblés : ni eau, ni lieu de repos. Malgré cela, ils décidèrent de combattre.',
            en: 'The polytheists’ army reached Badr and found the wells filled in: no water and no resting place. Even so, they resolved to fight.',
          },
        },
        {
          id: 'camp',
          x: 79,
          y: 58,
          label: { ar: 'معسكر المسلمين', fr: 'Le camp des musulmans', en: 'The Muslims’ camp' },
          description: {
            ar: 'وصل المسلمون قبل قريش، وهم نحو ثلاثمائة رجل. وفي اليوم التالي استمعوا إلى وصايا الرسول ﷺ ثمّ اصطفّوا.',
            fr: 'Les musulmans arrivèrent avant Quraysh ; ils étaient environ trois cents. Le lendemain, ils écoutèrent les recommandations du Prophète ﷺ puis se mirent en rangs.',
            en: 'The Muslims arrived before Quraysh; they were about three hundred men. The next day they listened to the Prophet’s ﷺ instructions, then lined up.',
          },
        },
        {
          id: 'quraysh',
          x: 63,
          y: 41,
          label: { ar: 'نيران قريش', fr: 'Les feux de Quraysh', en: 'Quraysh’s fires' },
          description: {
            ar: 'هناك جيش المشركين الذي يزيد عدده على ألف مقاتل: أكثر من ثلاثة أضعاف المسلمين!',
            fr: 'Là-bas, l’armée des polythéistes, forte de plus de mille combattants : plus de trois fois les musulmans !',
            en: 'Over there is the polytheists’ army, more than a thousand fighters: over three times the Muslims!',
          },
        },
        {
          id: 'sky',
          x: 54,
          y: 21,
          label: { ar: 'دعاءٌ يصعد إلى السماء', fr: 'Une prière monte vers le ciel', en: 'A prayer rises to the sky' },
          description: {
            ar: 'لمّا اشتدّت الحرب كان الرسول ﷺ يدعو ويبتهل، فأنزل الله تعالى الملائكة يقاتلون مع المسلمين ويُرعبون قلوب المشركين.',
            fr: 'Quand le combat devint rude, le Prophète ﷺ invoquait et implorait Dieu. Dieu fit descendre les anges : ils combattaient avec les musulmans et jetaient l’effroi dans le cœur des polythéistes.',
            en: 'When the fighting grew fierce, the Prophet ﷺ prayed and implored. God sent down the angels to fight alongside the Muslims and cast terror into the polytheists’ hearts.',
          },
        },
      ],
    },

    // 07 — Reading: the battle of Badr (Badr slide 5)
    {
      kind: 'reading',
      id: 'reading-badr-battle',
      title: { ar: 'اقرأ: اشتعال المعركة', fr: 'Lis : la bataille s’embrase', en: 'Read: the battle breaks out' },
      intro: {
        ar: 'ماذا وقع فعلًا يوم بدر؟ اقرأ، ثمّ احكم على كلّ بطاقة.',
        fr: 'Que s’est-il vraiment passé à Badr ? Lis, puis juge chaque carte.',
        en: 'What truly happened at Badr? Read, then judge each card.',
      },
      image: `${IMG}/hero.png`,
      imageAlt: HERO_ALT,
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'وصايا ثمّ اصطفاف', fr: 'Des consignes, puis les rangs', en: 'Instructions, then the ranks' },
          text: {
            ar: 'استمع المسلمون إلى وصايا الرسول ﷺ، ثمّ اصطفّوا وهم ثلاثمائة رجل، مقابل جيش المشركين الذي يزيد عدده على ألف مقاتل.',
            fr: 'Les musulmans écoutèrent les consignes du Prophète ﷺ, puis s’alignèrent : trois cents hommes face à une armée de plus de mille combattants.',
            en: 'The Muslims listened to the Prophet’s ﷺ instructions, then lined up: three hundred men against an army of more than a thousand fighters.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'مبارزة: ثلاثةٌ لثلاثة', fr: 'Duel : trois contre trois', en: 'A duel: three against three' },
          text: {
            ar: 'خرج ثلاثةٌ من كبار قريشٍ لمبارزة ثلاثةٍ من كبار المسلمين، فقتلوا المشركين الثلاثة، ثمّ بدأ القتال.',
            fr: 'Trois notables de Quraysh sortirent défier trois grands parmi les musulmans, qui tuèrent les trois polythéistes ; puis le combat commença.',
            en: 'Three of Quraysh’s leading men came out to duel three of the leading Muslims, who killed all three; then the battle began.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'الملائكة', fr: 'Les anges', en: 'The angels' },
          text: {
            ar: 'اشتدّت الحرب والرسول ﷺ يدعو ويبتهل، فأنزل الله الملائكة يقاتلون مع المسلمين ويُرعبون قلوب المشركين.',
            fr: 'Au plus fort du combat, le Prophète ﷺ implorait Dieu, qui fit descendre les anges pour combattre avec les musulmans et effrayer les polythéistes.',
            en: 'At the height of battle the Prophet ﷺ was imploring God, who sent down angels to fight with the Muslims and terrify the polytheists.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'النتيجة', fr: 'Le résultat', en: 'The outcome' },
          text: {
            ar: 'تمكّن جيش النبيّ ﷺ من قتل سبعين رجلًا من قريش وأسر سبعين آخرين، وجمع المسلمون غنائم كثيرة. وسمعت القبائل بالخبر، فذلّت قريشٌ وعزّ النبيّ ﷺ والمسلمون.',
            fr: 'L’armée du Prophète ﷺ tua soixante-dix hommes de Quraysh et en captura soixante-dix autres, et les musulmans recueillirent un butin abondant. Les tribus apprirent la nouvelle : Quraysh fut abaissée, le Prophète ﷺ et les musulmans furent honorés.',
            en: 'The Prophet’s ﷺ army killed seventy men of Quraysh and captured seventy others, and the Muslims gathered plentiful spoils. The tribes heard the news: Quraysh was humbled, and the Prophet ﷺ and the Muslims were honoured.',
          },
        },
      ],
    },

    // 08 — Swipe: what really happened on the day of Badr (Badr slide 5)
    {
      kind: 'swipe',
      id: 'swipe-badr',
      title: { ar: 'يوم بدر: وقع أم لم يقع؟', fr: 'Le jour de Badr : vrai ou piège ?', en: 'The day of Badr: did it happen?' },
      intro: {
        ar: 'بعض البطاقات تحمل ما وقع فعلًا يوم بدر، وبعضها يخدعك. اسحب كلّ بطاقة إلى الجهة الصحيحة.',
        fr: 'Certaines cartes portent ce qui s’est vraiment passé à Badr, d’autres te piègent. Glisse chaque carte du bon côté.',
        en: 'Some cards carry what truly happened at Badr, others try to trick you. Swipe each card to the right side.',
      },
      left: {
        label: { ar: 'لم يقع يوم بدر', fr: 'Ne s’est pas passé à Badr', en: 'Did not happen at Badr' },
        tag: { ar: 'لم يقع', fr: 'Piège', en: 'Did not happen' },
      },
      right: {
        label: { ar: 'وقع فعلًا يوم بدر', fr: 'S’est vraiment passé à Badr', en: 'Truly happened at Badr' },
        tag: { ar: 'وقع', fr: 'Vrai', en: 'Happened' },
      },
      cards: [
        {
          id: 'c1',
          who: { ar: 'العدد', fr: 'Les effectifs', en: 'The numbers' },
          deed: { ar: 'نحو 300 أمام أكثر من ألف', fr: 'Environ 300 contre plus de 1000', en: 'About 300 against over 1,000' },
          side: 'right',
          explanation: {
            ar: 'اصطفّ المسلمون وهم ثلاثمائة رجل، مقابل جيش المشركين الذي يزيد عدده على ألف مقاتل.',
            fr: 'Les musulmans, trois cents hommes, s’alignèrent face à une armée de plus de mille combattants.',
            en: 'The Muslims, three hundred men, lined up against an army of more than a thousand fighters.',
          },
        },
        {
          id: 'c2',
          who: { ar: 'قبل القتال', fr: 'Avant le combat', en: 'Before the battle' },
          deed: { ar: 'مبارزة: ثلاثةٌ لثلاثة', fr: 'Duel : trois contre trois', en: 'A duel: three against three' },
          side: 'right',
          explanation: {
            ar: 'خرج ثلاثةٌ من كبار قريشٍ لمبارزة ثلاثةٍ من كبار المسلمين، فقتلوا المشركين الثلاثة، ثمّ بدأ القتال.',
            fr: 'Trois notables de Quraysh sortirent défier trois grands parmi les musulmans, qui tuèrent les trois polythéistes ; puis le combat commença.',
            en: 'Three of Quraysh’s leading men came out to duel three of the leading Muslims, who killed all three; then the battle began.',
          },
        },
        {
          id: 'c3',
          who: { ar: 'الماء', fr: 'L’eau', en: 'The water' },
          deed: { ar: 'رجعت قريشٌ حين لم تجد ماء', fr: 'Quraysh repartit faute d’eau', en: 'Quraysh left for lack of water' },
          side: 'left',
          explanation: {
            ar: 'لم يجدوا ماءً ولا مستراحًا، ورغم ذلك عزموا على الحرب ولم يرجعوا.',
            fr: 'Ils ne trouvèrent ni eau ni repos, mais décidèrent quand même de combattre.',
            en: 'They found no water and no rest, yet they still resolved to fight.',
          },
        },
        {
          id: 'c4',
          who: { ar: 'السماء', fr: 'Le ciel', en: 'The sky' },
          deed: { ar: 'الملائكة تقاتل مع المسلمين', fr: 'Les anges combattent avec les musulmans', en: 'Angels fight beside the Muslims' },
          side: 'right',
          explanation: {
            ar: 'اشتدّت الحرب والرسول ﷺ يدعو ويبتهل، فأنزل الله الملائكة يقاتلون مع المسلمين ويُرعبون قلوب المشركين.',
            fr: 'Au plus fort du combat, le Prophète ﷺ implorait Dieu, qui fit descendre les anges pour combattre avec les musulmans et effrayer les polythéistes.',
            en: 'At the height of battle the Prophet ﷺ was imploring God, who sent down angels to fight with the Muslims and terrify the polytheists.',
          },
        },
        {
          id: 'c5',
          who: { ar: 'الخطّة', fr: 'Le plan', en: 'The plan' },
          deed: { ar: 'حُفر خندقٌ حول بدر', fr: 'Un fossé creusé autour de Badr', en: 'A trench dug around Badr' },
          side: 'left',
          explanation: {
            ar: 'الخندق قصّةٌ أخرى ستكتشفها بعد قليل! في بدرٍ كانت الخطّة خطّة الآبار.',
            fr: 'Le fossé, c’est une autre histoire que tu découvriras bientôt ! À Badr, le plan était celui des puits.',
            en: 'The trench is another story you will discover soon! At Badr the plan was about the wells.',
          },
        },
        {
          id: 'c6',
          who: { ar: 'خسائر قريش', fr: 'Les pertes de Quraysh', en: 'Quraysh’s losses' },
          deed: { ar: '70 قتيلًا و70 أسيرًا من قريش', fr: '70 tués et 70 prisonniers de Quraysh', en: '70 killed, 70 captured from Quraysh' },
          side: 'right',
          explanation: {
            ar: 'تمكّن جيش النبيّ ﷺ من قتل سبعين رجلًا من قريش وأسر سبعين آخرين.',
            fr: 'L’armée du Prophète ﷺ tua soixante-dix hommes de Quraysh et en captura soixante-dix autres.',
            en: 'The Prophet’s ﷺ army killed seventy men of Quraysh and captured seventy others.',
          },
        },
        {
          id: 'c7',
          who: { ar: 'العدد', fr: 'Les effectifs', en: 'The numbers' },
          deed: { ar: 'كان المسلمون أكثر عددًا', fr: 'Les musulmans étaient plus nombreux', en: 'The Muslims were more numerous' },
          side: 'left',
          explanation: {
            ar: 'بل كانوا أقلّ بكثير: نحو ثلاثمائة أمام أكثر من ألف. النصر لم يكن بالعدد.',
            fr: 'Bien moins nombreux, au contraire : environ trois cents contre plus de mille. La victoire ne vint pas du nombre.',
            en: 'Far fewer, in fact: about three hundred against over a thousand. Victory did not come from numbers.',
          },
        },
        {
          id: 'c8',
          who: { ar: 'بعد المعركة', fr: 'Après la bataille', en: 'After the battle' },
          deed: { ar: 'غنائم كثيرة', fr: 'Un butin abondant', en: 'Plentiful spoils' },
          side: 'right',
          explanation: {
            ar: 'جمع المسلمون غنائم كثيرة بعد المعركة.',
            fr: 'Les musulmans recueillirent un butin abondant après la bataille.',
            en: 'The Muslims gathered plentiful spoils after the battle.',
          },
        },
        {
          id: 'c9',
          who: { ar: 'الترتيب', fr: 'L’ordre', en: 'The order' },
          deed: { ar: 'بدأ القتال قبل الوصايا', fr: 'Le combat avant les consignes', en: 'Fighting before the instructions' },
          side: 'left',
          explanation: {
            ar: 'الترتيب: استمع المسلمون إلى وصايا الرسول ﷺ، ثمّ اصطفّوا، ثمّ المبارزة، ثمّ القتال.',
            fr: 'L’ordre : les musulmans écoutèrent les consignes du Prophète ﷺ, se rangèrent, puis vint le duel, puis le combat.',
            en: 'The order: the Muslims listened to the Prophet’s ﷺ instructions, lined up, then came the duel, then the battle.',
          },
        },
        {
          id: 'c10',
          who: { ar: 'القبائل', fr: 'Les tribus', en: 'The tribes' },
          deed: { ar: 'ذلّت قريشٌ بين القبائل', fr: 'Quraysh humiliée devant les tribus', en: 'Quraysh humbled before the tribes' },
          side: 'right',
          explanation: {
            ar: 'سمعت القبائل بالخبر، فذلّت قريشٌ وعزّ النبيّ ﷺ والمسلمون.',
            fr: 'Les tribus apprirent la nouvelle : Quraysh fut abaissée, le Prophète ﷺ et les musulmans furent honorés.',
            en: 'The tribes heard the news: Quraysh was humbled, and the Prophet ﷺ and the Muslims were honoured.',
          },
        },
      ],
    },

    // 09 — Reading: the Day of the Furqān (Badr slide 6)
    {
      kind: 'reading',
      id: 'reading-furqan',
      title: { ar: 'اقرأ: يوم الفرقان', fr: 'Lis : le jour du Furqān', en: 'Read: the Day of the Furqān' },
      intro: {
        ar: 'لماذا سُمّي يوم بدرٍ بيوم الفرقان؟ اقرأ، ثمّ أجب عن أسئلة التاريخ.',
        fr: 'Pourquoi le jour de Badr est-il appelé « jour du Furqān » ? Lis, puis réponds aux questions de date.',
        en: 'Why is the day of Badr called the “Day of the Furqān”? Read, then answer the date questions.',
      },
      image: `${IMG}/hero.png`,
      imageAlt: HERO_ALT,
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'معركةٌ فاصلة', fr: 'Une bataille décisive', en: 'A decisive battle' },
          text: {
            ar: 'كانت بدرٌ معركةً فاصلة بين الكفر والإيمان، أعلى الله فيها كلمة الإيمان على كلمة الكفر، وفرّق بين الحقّ والباطل؛ فسُمّي ذلك اليوم «يوم الفرقان».',
            fr: 'Badr fut la bataille décisive entre la mécréance et la foi : Dieu y éleva la parole de la foi au-dessus de celle de la mécréance et sépara le vrai du faux. Ce jour fut donc appelé « jour du Furqān » (de la distinction).',
            en: 'Badr was the decisive battle between disbelief and faith: in it God raised the word of faith above the word of disbelief and separated truth from falsehood. So that day was named the “Day of the Furqān” (the Criterion).',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'متى؟ وأين ذُكرت؟', fr: 'Quand ? Où en parle-t-on ?', en: 'When? Where is it told?' },
          text: {
            ar: 'وقعت بدرٌ في السابع عشر من رمضان من السنة الثانية للهجرة. وأنزل الله آياتٍ عديدة في سورة الأنفال وفي سورة آل عمران تتحدّث عن أخبار بدرٍ وعِبرها.',
            fr: 'Badr eut lieu le 17 ramadan de l’an 2 de l’Hégire. Dieu révéla de nombreux versets dans les sourates al-Anfāl et Āl ‘Imrān sur les récits et les leçons de Badr.',
            en: 'Badr took place on 17 Ramadan, year 2 of the Hijra. God revealed many verses in Surat al-Anfāl and Surat Āl ‘Imrān about the events and lessons of Badr.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'خوفٌ ونفاق', fr: 'Peur et hypocrisie', en: 'Fear and hypocrisy' },
          text: {
            ar: 'وقد أرعبت هذه النتيجة — التي لم يكن يتمنّاها اليهود ولا المشركون في المدينة — كثيرًا منهم، فأظهروا الإسلام خوفًا وطمعًا فيما عند المسلمين، وهم ينافقون: لا ينوون خيرًا، ويحاولون إفشال عزائم المسلمين والتفريق بينهم.',
            fr: 'Ce résultat, que ni les juifs ni les polythéistes de Médine ne souhaitaient, effraya beaucoup d’entre eux : ils affichèrent l’islam par peur et par convoitise des biens des musulmans. C’étaient des hypocrites : sans bonne intention, ils cherchaient à affaiblir la détermination des musulmans et à les diviser.',
            en: 'This outcome, which neither the Jews nor the polytheists of Madina had wished for, frightened many of them: they made a show of Islam out of fear and out of greed for what the Muslims had. They were hypocrites: meaning no good, and trying to weaken the Muslims’ resolve and divide them.',
          },
        },
      ],
    },

    // 10 — Quiz: the date of the Furqān (Badr slide 6)
    {
      kind: 'quiz',
      id: 'quiz-furqan',
      title: { ar: 'متى كان يوم الفرقان؟', fr: 'Quand fut le jour du Furqān ?', en: 'When was the Day of the Furqān?' },
      intro: {
        ar: 'أربعة أسئلةٍ قصيرة عن يوم بدر. اختر الجواب الصحيح.',
        fr: 'Quatre petites questions sur le jour de Badr. Choisis la bonne réponse.',
        en: 'Four short questions about the day of Badr. Pick the right answer.',
      },
      questions: [
        {
          id: 'f1',
          type: 'mcq',
          question: { ar: 'في أيّ يومٍ من الشهر وقعت بدر؟', fr: 'Quel jour du mois eut lieu Badr ?', en: 'On which day of the month was Badr?' },
          options: [
            { id: 'a', label: { ar: '7', fr: '7', en: '7' } },
            { id: 'b', label: { ar: '17', fr: '17', en: '17' } },
            { id: 'c', label: { ar: '27', fr: '27', en: '27' } },
          ],
          correctId: 'b',
          explanation: { ar: 'السابع عشر من الشهر.', fr: 'Le dix-septième jour du mois.', en: 'The seventeenth of the month.' },
        },
        {
          id: 'f2',
          type: 'mcq',
          question: { ar: 'في أيّ شهر؟', fr: 'En quel mois ?', en: 'In which month?' },
          options: [
            { id: 'a', label: { ar: 'شعبان', fr: 'Sha‘bān', en: 'Sha‘bān' } },
            { id: 'b', label: { ar: 'شوّال', fr: 'Shawwāl', en: 'Shawwāl' } },
            { id: 'c', label: { ar: 'رمضان', fr: 'Ramadan', en: 'Ramadan' } },
          ],
          correctId: 'c',
          explanation: { ar: 'شهر الصيام.', fr: 'Le mois du jeûne.', en: 'The month of fasting.' },
        },
        {
          id: 'f3',
          type: 'mcq',
          question: { ar: 'في أيّ سنةٍ للهجرة؟', fr: 'En quelle année de l’Hégire ?', en: 'In which year of the Hijra?' },
          options: [
            { id: 'a', label: { ar: '1 هـ', fr: 'An 1', en: '1 AH' } },
            { id: 'b', label: { ar: '2 هـ', fr: 'An 2', en: '2 AH' } },
            { id: 'c', label: { ar: '5 هـ', fr: 'An 5', en: '5 AH' } },
          ],
          correctId: 'b',
          explanation: { ar: 'السنة الثانية للهجرة.', fr: 'La deuxième année de l’Hégire.', en: 'The second year of the Hijra.' },
        },
        {
          id: 'f4',
          type: 'mcq',
          question: { ar: 'في أيّ سورتين نزلت آياتٌ عن بدر؟', fr: 'Quelles sourates parlent de Badr ?', en: 'Which two suras speak of Badr?' },
          options: [
            { id: 'a', label: { ar: 'الأنفال وآل عمران', fr: 'al-Anfāl, Āl ‘Imrān', en: 'al-Anfāl, Āl ‘Imrān' } },
            { id: 'b', label: { ar: 'الأحزاب والتوبة', fr: 'al-Aḥzāb, at-Tawba', en: 'al-Aḥzāb, at-Tawba' } },
            { id: 'c', label: { ar: 'الفيل وقريش', fr: 'al-Fīl, Quraysh', en: 'al-Fīl, Quraysh' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'أنزل الله آياتٍ عديدة في سورة الأنفال وفي سورة آل عمران تتحدّث عن أخبار بدرٍ وعِبرها.',
            fr: 'Dieu révéla de nombreux versets dans les sourates al-Anfāl et Āl ‘Imrān sur les récits et les leçons de Badr.',
            en: 'God revealed many verses in Surat al-Anfāl and Surat Āl ‘Imrān about the events and lessons of Badr.',
          },
        },
      ],
    },

    // 11 — Reading: from Badr to Uḥud (Uḥud slides 2–4)
    {
      kind: 'reading',
      id: 'reading-uhud-road',
      title: { ar: 'اقرأ: من بدرٍ إلى أحد', fr: 'Lis : de Badr à Uḥud', en: 'Read: from Badr to Uḥud' },
      intro: {
        ar: 'عامٌ واحد بين بدرٍ وأحد. اقرأ، ثمّ سِر في الطريق محطّةً محطّة.',
        fr: 'Une seule année entre Badr et Uḥud. Lis, puis avance sur la route, étape par étape.',
        en: 'Just one year between Badr and Uḥud. Read, then travel the road stop by stop.',
      },
      image: `${IMG}/uhud.png`,
      imageAlt: UHUD_ALT,
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'قريشٌ تريد الثأر', fr: 'Quraysh veut se venger', en: 'Quraysh wants revenge' },
          text: {
            ar: 'لم يهدأ بال قريشٍ حتى عزمت على الثأر من هزيمة بدر، فراحت تُعدّ لذلك جيشًا كبيرًا، ثمّ زحفوا قاصدين المدينة. فلمّا سمع المسلمون بالخبر أعدّوا العدّة للمواجهة.',
            fr: 'Quraysh ne trouva pas le repos avant de décider de venger Badr. Elle prépara une grande armée, puis marcha sur Médine. À cette nouvelle, les musulmans se préparèrent à l’affrontement.',
            en: 'Quraysh found no rest until it resolved to avenge Badr. It prepared a large army, then marched on Madina. When the Muslims heard the news, they made ready to face it.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'بنو قينقاع', fr: 'Banū Qaynuqā‘', en: 'Banū Qaynuqā‘' },
          text: {
            ar: 'في شهر شوّال، بعد رمضان غزوة بدر، أظهر يهود بني قينقاع في المدينة الشرّ والعداوة للمسلمين. فنصحهم رسول الله ﷺ ونهاهم، وصبر على تجرّئهم. ثمّ أثاروا في سوقهم فتنةً قُتل فيها رجلٌ من المسلمين ورجلٌ من اليهود، فحاصرهم ﷺ حتى استسلموا بعد خمسة عشر يومًا، ثمّ أجلاهم إلى خارج المدينة.',
            fr: 'Au mois de Shawwāl, après le Ramadan de Badr, les juifs de Banū Qaynuqā‘ à Médine montrèrent hostilité et méchanceté envers les musulmans. Le Messager de Dieu ﷺ les conseilla, les mit en garde et supporta patiemment leur audace. Puis ils provoquèrent dans leur marché des troubles où furent tués un musulman et un juif ; il ﷺ les assiégea jusqu’à leur reddition, au bout de quinze jours, puis les fit sortir de Médine.',
            en: 'In the month of Shawwāl, after the Ramadan of Badr, the Jews of Banū Qaynuqā‘ in Madina showed open hostility to the Muslims. The Messenger of God ﷺ advised and warned them, and bore their boldness with patience. Then they stirred up strife in their market in which a Muslim man and a Jewish man were killed; he ﷺ besieged them until they surrendered after fifteen days, and sent them out of Madina.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'ألف بعير', fr: 'Mille chameaux', en: 'A thousand camels' },
          text: {
            ar: 'تمكّن المسلمون من حبس قافلةٍ لقريشٍ فيها ألف بعير كانت متّجهةً إلى الشام، فازداد المشركون غيظًا.',
            fr: 'Les musulmans purent arrêter une caravane de Quraysh de mille chameaux qui se dirigeait vers le Shām ; la colère des polythéistes redoubla.',
            en: 'The Muslims managed to seize a Quraysh caravan of a thousand camels heading for Shām, and the polytheists’ rage grew.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'الشورى: نتحصّن أم نخرج؟', fr: 'Le conseil : se retrancher ou sortir ?', en: 'The council: fortify or go out?' },
          text: {
            ar: 'بعد عامٍ من بدر وصلت أنباء تجهّز قريش، فجمع الرسول ﷺ المسلمين وأمرهم بالاستعداد. وكان رأيه أن يتحصّنوا في المدينة ويحاربوا في الأزقّة والشوارع، فألحّ عليه الشباب أن يخرجوا للقاء المشركين في معركةٍ مكشوفة، فاستجاب ﷺ لرأيهم.',
            fr: 'Un an après Badr, on apprit que Quraysh s’armait. Le Prophète ﷺ réunit les musulmans et leur ordonna de se préparer. Son avis était de se retrancher dans Médine et de combattre dans les ruelles et les rues ; mais les jeunes insistèrent pour sortir affronter les polythéistes à découvert, et il ﷺ accepta leur avis.',
            en: 'A year after Badr, news came that Quraysh was arming. The Prophet ﷺ gathered the Muslims and ordered them to prepare. His view was to fortify inside Madina and fight in the lanes and streets; but the young men pressed him to go out and meet the polytheists in an open battle, and he ﷺ agreed to their view.',
          },
        },
        {
          id: 'p5',
          heading: { ar: 'خمسون راميًا على الربوة', fr: 'Cinquante archers sur la butte', en: 'Fifty archers on the hillock' },
          text: {
            ar: 'عسكر الرسول ﷺ في أقصى الوادي قرب جبل أحد ليراقب تحرّك المشركين، ونظّم المسلمين في سبعمائة رجل، ووضع خمسين رجلًا من أمهر الرماة على ربوةٍ قبالة الجبل لحماية ظهر الجيش، وأمرهم بالتزام المكان حتى ولو انتصر المسلمون، حتى يأذن لهم هو.',
            fr: 'Le Prophète ﷺ campa au fond de la vallée, près du mont Uḥud, pour surveiller les polythéistes. Il rangea les musulmans, sept cents hommes, et plaça cinquante des meilleurs archers sur une butte face à la montagne pour protéger l’arrière de l’armée, avec ordre de ne pas quitter leur poste, même si les musulmans l’emportaient, tant qu’il ne le leur permettrait pas lui-même.',
            en: 'The Prophet ﷺ camped at the far end of the valley near Mount Uḥud to watch the polytheists. He arranged the Muslims, seven hundred men, and placed fifty of the most skilled archers on a hillock facing the mountain to guard the army’s rear, ordering them to hold their position even if the Muslims were winning, until he himself gave them leave.',
          },
        },
      ],
    },
    // 12 — Journey: the road to Uḥud (Uḥud slides 2–4)
    {
      kind: 'journey',
      id: 'journey-uhud',
      title: { ar: 'الطريق إلى أحد', fr: 'La route vers Uḥud', en: 'The road to Uḥud' },
      intro: {
        ar: 'سبع محطّاتٍ بين بدرٍ وأحد. أجب عند كلّ محطّة لتتقدّم.',
        fr: 'Sept étapes entre Badr et Uḥud. Réponds à chaque étape pour avancer.',
        en: 'Seven stops between Badr and Uḥud. Answer at each stop to move on.',
      },
      stops: [
        {
          id: 'makka',
          name: { ar: 'مكّة بعد بدر', fr: 'La Mecque après Badr', en: 'Makkah after Badr' },
          question: { ar: 'على ماذا عزمت قريشٌ بعد هزيمتها؟', fr: 'Que décida Quraysh après sa défaite ?', en: 'What did Quraysh resolve after its defeat?' },
          options: [
            { id: 'a', label: { ar: 'الثأر', fr: 'La vengeance', en: 'Revenge' }, correct: true },
            { id: 'b', label: { ar: 'الصلح', fr: 'La paix', en: 'Peace' }, correct: false, hint: { ar: 'لم يهدأ لها بال… فكّر في من جُرحت كبرياؤه.', fr: 'Elle ne trouva pas le repos… pense à un orgueil blessé.', en: 'It found no rest… think of wounded pride.' } },
            { id: 'c', label: { ar: 'النسيان', fr: 'L’oubli', en: 'Forgetting' }, correct: false, hint: { ar: 'سبعون قتيلًا وسبعون أسيرًا لا يُنسَون بسهولة.', fr: 'Soixante-dix tués et soixante-dix prisonniers ne s’oublient pas.', en: 'Seventy killed and seventy captured are not easily forgotten.' } },
          ],
          reveal: {
            ar: 'لم يهدأ بال قريشٍ حتى عزمت على الثأر من هزيمة بدر، فراحت تُعدّ لذلك جيشًا كبيرًا، ثمّ زحفوا قاصدين المدينة. فلمّا سمع المسلمون بالخبر أعدّوا العدّة للمواجهة.',
            fr: 'Quraysh ne trouva pas le repos avant de décider de venger Badr. Elle prépara une grande armée, puis marcha sur Médine. À cette nouvelle, les musulmans se préparèrent à l’affrontement.',
            en: 'Quraysh found no rest until it resolved to avenge Badr. It prepared a large army, then marched on Madina. When the Muslims heard the news, they made ready to face it.',
          },
        },
        {
          id: 'qaynuqa-1',
          name: { ar: 'المدينة، شهر شوّال', fr: 'Médine, mois de Shawwāl', en: 'Madina, month of Shawwāl' },
          question: {
            ar: 'أظهر يهود بني قينقاع الشرّ والعداوة للمسلمين. كيف عاملهم الرسول ﷺ أوّلًا؟',
            fr: 'Les juifs de Banū Qaynuqā‘ montrèrent leur hostilité. Que fit d’abord le Prophète ﷺ ?',
            en: 'The Jews of Banū Qaynuqā‘ showed open hostility. What did the Prophet ﷺ do first?',
          },
          options: [
            { id: 'a', label: { ar: 'نصحهم ونهاهم وصبر', fr: 'Il les conseilla et patienta', en: 'He advised them and was patient' }, correct: true },
            { id: 'b', label: { ar: 'حاصرهم فورًا', fr: 'Il les assiégea aussitôt', en: 'He besieged them at once' }, correct: false, hint: { ar: 'الحصار جاء لاحقًا. البداية كانت بالكلمة.', fr: 'Le siège vint plus tard. Il commença par la parole.', en: 'The siege came later. He began with words.' } },
            { id: 'c', label: { ar: 'تجاهلهم تمامًا', fr: 'Il les ignora', en: 'He ignored them' }, correct: false, hint: { ar: 'لم يتجاهلهم: كلّمهم ونهاهم عن ذلك.', fr: 'Il ne les ignora pas : il leur parla et le leur défendit.', en: 'He did not ignore them: he spoke to them and forbade it.' } },
          ],
          reveal: {
            ar: 'في شهر شوّال، بعد رمضان غزوة بدر، لم يتحمّل يهود بني قينقاع في المدينة انتصار المسلمين على قريش، فأرادوا الإنقاص من نصرهم. نصحهم رسول الله ﷺ ونهاهم، فقالوا له: «يا محمّد، لا يغرّنّك من نفسك أنّك قاتلتَ نفرًا من قريشٍ كانوا أغمارًا لا يعرفون القتال؛ إنّك لو قاتلتنا لعرفتَ أنّا نحن الناس». فصبر رسول الله ﷺ على تجرّئهم.',
            fr: 'Au mois de Shawwāl, après le Ramadan de Badr, les juifs de Banū Qaynuqā‘ à Médine ne supportèrent pas la victoire des musulmans sur Quraysh et voulurent la rabaisser. Le Messager de Dieu ﷺ les conseilla et les mit en garde. Ils répondirent : « Ô Muḥammad, ne te laisse pas abuser pour avoir combattu quelques hommes de Quraysh sans expérience de la guerre ; si tu nous combattais, tu saurais que c’est nous les vrais hommes. » Le Messager de Dieu ﷺ supporta patiemment leur audace.',
            en: 'In the month of Shawwāl, after the Ramadan of Badr, the Jews of Banū Qaynuqā‘ in Madina could not bear the Muslims’ victory over Quraysh and tried to belittle it. The Messenger of God ﷺ advised and warned them. They answered: “Muḥammad, do not be deceived because you fought a few men of Quraysh who were novices with no knowledge of war; if you fought us, you would know that we are the real men.” The Messenger of God ﷺ bore their boldness with patience.',
          },
        },
        {
          id: 'qaynuqa-2',
          name: { ar: 'سوق بني قينقاع', fr: 'Le marché de Banū Qaynuqā‘', en: 'The market of Banū Qaynuqā‘' },
          question: { ar: 'استمرّوا وأثاروا فتنة، فحاصرهم الرسول ﷺ. بعد كم يومٍ استسلموا؟', fr: 'Ils persistèrent et provoquèrent des troubles ; le Prophète ﷺ les assiégea. Après combien de jours se rendirent-ils ?', en: 'They persisted and stirred up strife, so the Prophet ﷺ besieged them. After how many days did they surrender?' },
          options: [
            { id: 'a', label: { ar: '5 أيّام', fr: '5 jours', en: '5 days' }, correct: false, hint: { ar: 'أطول من ذلك: ثلاثة أضعافه.', fr: 'Plus long : trois fois plus.', en: 'Longer: three times as long.' } },
            { id: 'b', label: { ar: '15 يومًا', fr: '15 jours', en: '15 days' }, correct: true },
            { id: 'c', label: { ar: '50 يومًا', fr: '50 jours', en: '50 days' }, correct: false, hint: { ar: 'أقصر من ذلك بكثير: نحو نصف شهر.', fr: 'Bien plus court : environ un demi-mois.', en: 'Much shorter: about half a month.' } },
          ],
          reveal: {
            ar: 'أثاروا في سوقهم فتنةً قُتل فيها رجلٌ من المسلمين ورجلٌ من اليهود. هنالك قام رسول الله ﷺ فحاصرهم حتى استسلموا بعد خمسة عشر يومًا، ثمّ أجلاهم إلى خارج المدينة.',
            fr: 'Ils provoquèrent dans leur marché des troubles où furent tués un musulman et un juif. Le Messager de Dieu ﷺ les assiégea alors jusqu’à leur reddition, au bout de quinze jours, puis les fit sortir de Médine.',
            en: 'They stirred up strife in their market in which a Muslim man and a Jewish man were killed. The Messenger of God ﷺ then besieged them until they surrendered after fifteen days, and sent them out of Madina.',
          },
        },
        {
          id: 'sham-road',
          name: { ar: 'طريق الشام', fr: 'La route du Shām', en: 'The road to Shām' },
          image: `${IMG}/caravan.png`,
          question: { ar: 'حبس المسلمون قافلةً لقريش متّجهةً إلى الشام. كم بعيرًا كان فيها؟', fr: 'Les musulmans arrêtèrent une caravane de Quraysh en route vers le Shām. Combien de chameaux ?', en: 'The Muslims seized a Quraysh caravan bound for Shām. How many camels?' },
          options: [
            { id: 'a', label: { ar: '100', fr: '100', en: '100' }, correct: false, hint: { ar: 'أكبر بكثير! أضف صفرًا.', fr: 'Bien plus ! Ajoute un zéro.', en: 'Far more! Add a zero.' } },
            { id: 'b', label: { ar: '1000', fr: '1000', en: '1,000' }, correct: true },
            { id: 'c', label: { ar: '10', fr: '10', en: '10' }, correct: false, hint: { ar: 'قافلةٌ لقريشٍ كلّها… رقمٌ بثلاثة أصفار.', fr: 'Une caravane de tout Quraysh… un nombre à trois zéros.', en: 'A caravan for all of Quraysh… a number with three zeros.' } },
          ],
          reveal: {
            ar: 'تمكّن المسلمون من حبس قافلةٍ لقريشٍ فيها ألف بعير كانت متّجهةً إلى الشام، فازداد المشركون غيظًا.',
            fr: 'Les musulmans purent arrêter une caravane de Quraysh de mille chameaux qui se dirigeait vers le Shām ; la colère des polythéistes redoubla.',
            en: 'The Muslims managed to seize a Quraysh caravan of a thousand camels heading for Shām, and the polytheists’ rage grew.',
          },
        },
        {
          id: 'shura',
          name: { ar: 'المدينة: مجلس الشورى', fr: 'Médine : le conseil', en: 'Madina: the council' },
          question: { ar: 'بعد عامٍ من بدر وصلت أنباء تجهّز قريش. ما كان رأي الرسول ﷺ؟', fr: 'Un an après Badr, on apprit que Quraysh s’armait. Quel était l’avis du Prophète ﷺ ?', en: 'A year after Badr, news came that Quraysh was arming. What was the Prophet’s ﷺ view?' },
          options: [
            { id: 'a', label: { ar: 'التحصّن في المدينة', fr: 'Se retrancher dans Médine', en: 'Fortify inside Madina' }, correct: true },
            { id: 'b', label: { ar: 'معركةٌ مكشوفة خارجها', fr: 'Une bataille à découvert', en: 'An open battle outside' }, correct: false, hint: { ar: 'هذا رأي الشباب الذين ألحّوا عليه. رأيه ﷺ كان غير ذلك.', fr: 'C’était l’avis des jeunes qui insistèrent. Le sien ﷺ était autre.', en: 'That was the view of the young men who pressed him. His ﷺ view was different.' } },
            { id: 'c', label: { ar: 'السير إلى مكّة', fr: 'Marcher sur La Mecque', en: 'March on Makkah' }, correct: false, hint: { ar: 'قريشٌ هي التي تتجهّز للهجوم على المدينة.', fr: 'C’est Quraysh qui se prépare à attaquer Médine.', en: 'It is Quraysh preparing to attack Madina.' } },
          ],
          reveal: {
            ar: 'جمع الرسول ﷺ المسلمين وأمرهم بالاستعداد لمواجهة المشركين. وكان رأيه أن يتحصّن المسلمون في المدينة ويحاربوا في الأزقّة والشوارع. فألحّ عليه الشباب أن يخرجوا للقاء المشركين خارج المدينة في معركةٍ مكشوفة، فاستجاب الرسول ﷺ لرأيهم.',
            fr: 'Le Prophète ﷺ réunit les musulmans et leur ordonna de se préparer. Son avis était de se retrancher dans Médine et de combattre dans les ruelles et les rues. Mais les jeunes insistèrent pour sortir affronter les polythéistes à découvert, et le Prophète ﷺ accepta leur avis.',
            en: 'The Prophet ﷺ gathered the Muslims and ordered them to prepare. His view was to fortify inside Madina and fight in the lanes and streets. But the young men pressed him to go out and meet the polytheists in an open battle, and the Prophet ﷺ agreed to their view.',
          },
        },
        {
          id: 'wadi',
          name: { ar: 'أقصى الوادي قرب أحد', fr: 'Le fond de la vallée, près d’Uḥud', en: 'The far end of the valley, by Uḥud' },
          image: `${IMG}/uhud.png`,
          question: { ar: 'لماذا عسكر الرسول ﷺ في أقصى الوادي قرب جبل أحد؟', fr: 'Pourquoi le Prophète ﷺ campa-t-il au fond de la vallée, près du mont Uḥud ?', en: 'Why did the Prophet ﷺ camp at the far end of the valley by Mount Uḥud?' },
          options: [
            { id: 'a', label: { ar: 'ليراقب تحرّك المشركين', fr: 'Pour surveiller les polythéistes', en: 'To watch the polytheists’ moves' }, correct: true },
            { id: 'b', label: { ar: 'ليبتعد عن المعركة', fr: 'Pour éviter la bataille', en: 'To avoid the battle' }, correct: false, hint: { ar: 'خرج ليواجههم، لا ليبتعد. فكّر: ماذا يفيد أن ترى عدوّك؟', fr: 'Il est sorti pour les affronter. À quoi sert de voir son ennemi ?', en: 'He went out to face them. What is the use of seeing your enemy?' } },
            { id: 'c', label: { ar: 'لأنّ فيه سوقًا', fr: 'Parce qu’il y avait un marché', en: 'Because there was a market' }, correct: false, hint: { ar: 'لا سوق هنا: جبلٌ ووادٍ وعدوٌّ يقترب.', fr: 'Pas de marché ici : une montagne, une vallée et un ennemi qui approche.', en: 'No market here: a mountain, a valley and an approaching enemy.' } },
          ],
          reveal: {
            ar: 'خرج الرسول ﷺ بأصحابه وعسكر في أقصى الوادي قرب جبل أحد، ليراقب تحرّك المشركين الذين وصلوا إلى ضواحي المدينة ونصبوا الخيام قبالة جبل أحد.',
            fr: 'Le Prophète ﷺ sortit avec ses Compagnons et campa au fond de la vallée, près du mont Uḥud, pour surveiller les polythéistes, arrivés aux abords de Médine et installés sous leurs tentes face au mont Uḥud.',
            en: 'The Prophet ﷺ went out with his Companions and camped at the far end of the valley near Mount Uḥud, to watch the polytheists, who had reached the outskirts of Madina and pitched their tents facing Mount Uḥud.',
          },
        },
        {
          id: 'rabwa',
          name: { ar: 'الربوة', fr: 'La butte', en: 'The hillock' },
          image: `${IMG}/archers-hill.png`,
          question: { ar: 'صبيحة المواجهة نظّم الرسول ﷺ نحو 700 رجل. كم راميًا وضع على الربوة؟', fr: 'Au matin, le Prophète ﷺ rangea environ 700 hommes. Combien d’archers sur la butte ?', en: 'On the morning of battle the Prophet ﷺ arranged about 700 men. How many archers on the hillock?' },
          options: [
            { id: 'a', label: { ar: '7', fr: '7', en: '7' }, correct: false, hint: { ar: 'أكثر: ظهر الجيش كلّه يحتاج حماية.', fr: 'Davantage : il faut protéger tout l’arrière de l’armée.', en: 'More: the whole rear of the army needs guarding.' } },
            { id: 'b', label: { ar: '50', fr: '50', en: '50' }, correct: true },
            { id: 'c', label: { ar: '300', fr: '300', en: '300' }, correct: false, hint: { ar: 'هذا نحو نصف الجيش! العدد أصغر: نصف المئة.', fr: 'Presque la moitié de l’armée ! Bien moins : la moitié de cent.', en: 'That is nearly half the army! Far fewer: half a hundred.' } },
          ],
          reveal: {
            ar: 'نظّم الرسول ﷺ المسلمين في سبعمائة رجل، ووضع خمسين رجلًا من أمهر الرماة على ربوةٍ قبالة الجبل لحماية ظهر الجيش، وأمرهم بالتزام المكان حتى ولو انتصر المسلمون، حتى يأذن لهم هو.',
            fr: 'Le Prophète ﷺ rangea les musulmans, sept cents hommes, et plaça cinquante des meilleurs archers sur une butte face à la montagne pour protéger l’arrière de l’armée. Il leur ordonna de ne pas quitter leur poste, même si les musulmans l’emportaient, tant qu’il ne le leur permettrait pas lui-même.',
            en: 'The Prophet ﷺ arranged the Muslims, seven hundred men, and placed fifty of the most skilled archers on a hillock facing the mountain to guard the army’s rear. He ordered them to hold their position even if the Muslims were winning, until he himself gave them leave.',
          },
        },
      ],
      arrival: {
        ar: 'وصلتَ إلى ميدان أحد! احفظ جيّدًا أمر الرماة: «الزموا المكان»… فكلّ شيءٍ سيتوقّف عليه.',
        fr: 'Te voilà sur le champ d’Uḥud ! Retiens bien l’ordre donné aux archers : « Ne quittez pas votre poste »… tout en dépendra.',
        en: 'You have reached the field of Uḥud! Remember the archers’ order well: “Hold your position”… everything will hang on it.',
      },
    },

    // 13 — Reading: an unexpected ending (Uḥud slide 5)
    {
      kind: 'reading',
      id: 'reading-uhud-battle',
      title: { ar: 'اقرأ: نهايةٌ غير متوقّعة', fr: 'Lis : une fin inattendue', en: 'Read: an unexpected ending' },
      intro: {
        ar: 'كيف ينقلب نصرٌ في لحظات؟ اقرأ، ثمّ ابنِ سلسلة الأحداث.',
        fr: 'Comment une victoire bascule-t-elle en quelques instants ? Lis, puis construis la chaîne des événements.',
        en: 'How does a victory flip in moments? Read, then build the chain of events.',
      },
      image: `${IMG}/archers-hill.png`,
      imageAlt: {
        ar: 'قمّة ربوةٍ صخرية تطلّ على سهلٍ رمليّ، وعليها أقواسٌ وجعابُ سهامٍ متروكة، وخلفها جبلٌ أحمر كبير',
        fr: 'Le sommet d’une butte rocheuse dominant une plaine de sable, avec des arcs et des carquois laissés là, et une grande montagne rouge derrière',
        en: 'The top of a rocky hillock overlooking a sandy plain, with bows and quivers left behind, and a great red mountain beyond',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'نصرٌ في البداية', fr: 'La victoire au début', en: 'Victory at first' },
          text: {
            ar: 'تقابل الجيشان، فبدأ المسلمون يضربون بسيوفهم المشركين الذين أصابهم الرعب وأخذوا يتراجعون، وانهزم المشركون شرّ هزيمة.',
            fr: 'Les deux armées se firent face. Les musulmans frappèrent de leurs épées les polythéistes qui, saisis d’effroi, reculèrent et subirent une lourde défaite.',
            en: 'The two armies met. The Muslims struck with their swords at the polytheists, who were seized with terror, fell back and were badly routed.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'الرماة ينزلون', fr: 'Les archers descendent', en: 'The archers come down' },
          text: {
            ar: 'لاحظ خالد بن الوليد الرماة على الربوة وفهم خطّتهم. ولمّا رأى أغلب الرماة المشركين يتراجعون، نزلوا إلى الميدان لجمع الغنائم مع باقي الجيش.',
            fr: 'Khālid ibn al-Walīd remarqua les archers sur la butte et comprit leur plan. Voyant les polythéistes reculer, la plupart des archers descendirent sur le terrain ramasser le butin avec le reste de l’armée.',
            en: 'Khālid ibn al-Walīd noticed the archers on the hillock and understood their plan. Seeing the polytheists fall back, most of the archers went down to the field to gather spoils with the rest of the army.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'هجومٌ من الخلف', fr: 'Une attaque par-derrière', en: 'An attack from behind' },
          text: {
            ar: 'انطلق خالد فقتل من بقي من الرماة، ودار خلف الربوة وهاجم المسلمين وهم يظنّون أنّها ساعة النصر. فاهتزّ المسلمون، وعاد المشركون الفارّون فهاجموهم من ظهورهم، فتشتّتوا وحاولوا اللحاق بجبل أحد للاحتماء به.',
            fr: 'Khālid s’élança, tua les archers restés, contourna la butte et attaqua les musulmans, qui croyaient la victoire acquise. Les musulmans furent ébranlés ; les fuyards revinrent les attaquer par-derrière, et ils se dispersèrent en tentant de gagner le mont Uḥud pour s’y abriter.',
            en: 'Khālid charged, killed the archers who remained, circled behind the hillock and attacked the Muslims, who thought it was the hour of victory. The Muslims were shaken; the fleeing polytheists came back and struck them from behind, and they scattered, trying to reach Mount Uḥud to take shelter there.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'جُرح الرسول ﷺ', fr: 'Le Prophète ﷺ blessé', en: 'The Prophet ﷺ wounded' },
          text: {
            ar: 'أُصيب المسلمون، وجُرح الرسول ﷺ وأُصيب وجهه وسنّه بكسرٍ ونزف دمًا.',
            fr: 'Les musulmans furent touchés ; le Prophète ﷺ fut blessé, atteint au visage, une dent brisée, et il saigna.',
            en: 'The Muslims were struck; the Prophet ﷺ was wounded, his face hurt and a tooth broken, and he bled.',
          },
        },
      ],
    },
    // 14 — Chain: why Uḥud turned (Uḥud slide 5)
    {
      kind: 'chain',
      id: 'chain-uhud',
      title: { ar: 'نهايةٌ غير متوقّعة', fr: 'Une fin inattendue', en: 'An unexpected ending' },
      intro: {
        ar: 'كيف ينقلب نصرٌ في لحظات؟ اختر الحلقة الصحيحة في كلّ مرّة.',
        fr: 'Comment une victoire bascule-t-elle en quelques instants ? Choisis à chaque fois le bon maillon.',
        en: 'How does a victory flip in moments? Pick the right link each time.',
      },
      image: `${IMG}/archers-hill.png`,
      imageAlt: {
        ar: 'قمّة ربوةٍ صخرية تطلّ على سهلٍ رمليّ، وعليها أقواسٌ وجعابُ سهامٍ متروكة، وخلفها جبلٌ أحمر كبير',
        fr: 'Le sommet d’une butte rocheuse dominant une plaine de sable, avec des arcs et des carquois laissés là, et une grande montagne rouge derrière',
        en: 'The top of a rocky hillock overlooking a sandy plain, with bows and quivers left behind, and a great red mountain beyond',
      },
      start: {
        ar: 'تقابل الجيشان، فبدأ المسلمون يضربون بسيوفهم المشركين الذين أصابهم الرعب وأخذوا يتراجعون، وانهزم المشركون شرّ هزيمة.',
        fr: 'Les deux armées se firent face. Les musulmans frappèrent de leurs épées les polythéistes qui, saisis d’effroi, reculèrent et subirent une lourde défaite.',
        en: 'The two armies met. The Muslims struck with their swords at the polytheists, who were seized with terror, fell back and were badly routed.',
      },
      steps: [
        {
          id: 'k1',
          prompt: { ar: 'لكنّ عينًا في جيش المشركين كانت تراقب الربوة. من؟', fr: 'Mais un œil, dans l’armée adverse, observait la butte. Qui ?', en: 'But one eye in the enemy army was watching the hillock. Whose?' },
          correct: {
            ar: 'خالد بن الوليد: لاحظ الرماة على الربوة وفهم خطّتهم.',
            fr: 'Khālid ibn al-Walīd : il remarqua les archers sur la butte et comprit leur plan.',
            en: 'Khālid ibn al-Walīd: he noticed the archers on the hillock and understood their plan.',
          },
          distractors: [
            { label: { ar: 'لا أحد: لم ينتبه إليها أحد.', fr: 'Personne : nul n’y prêta attention.', en: 'No one: nobody noticed it.' }, hint: { ar: 'بل كان هناك من يراقب تحرّك الرماة وهم يراقبون المعركة.', fr: 'Si : quelqu’un observait les archers pendant qu’eux observaient la bataille.', en: 'Someone was watching the archers while they watched the battle.' } },
            { label: { ar: 'أبو سفيان: أمر الجيش بالرحيل.', fr: 'Abū Sufyān : il ordonna le départ.', en: 'Abū Sufyān: he ordered a withdrawal.' }, hint: { ar: 'الدرس يذكر قائدًا آخر لاحظ الرماة يومها.', fr: 'La leçon cite un autre chef qui remarqua les archers ce jour-là.', en: 'The lesson names another commander who noticed the archers that day.' } },
          ],
        },
        {
          id: 'k2',
          prompt: { ar: 'والمشركون يتراجعون… ماذا فعل أغلب الرماة؟', fr: 'Les polythéistes reculent… que firent la plupart des archers ?', en: 'The polytheists are falling back… what did most of the archers do?' },
          correct: {
            ar: 'نزلوا إلى الميدان لجمع الغنائم مع باقي الجيش.',
            fr: 'Ils descendirent sur le terrain ramasser le butin avec le reste de l’armée.',
            en: 'They went down to the field to gather spoils with the rest of the army.',
          },
          distractors: [
            { label: { ar: 'لزموا مكانهم جميعًا حتى أُذن لهم.', fr: 'Ils restèrent tous à leur poste.', en: 'They all held their position.' }, hint: { ar: 'هذا ما أُمروا به… لكنّ أغلبهم ظنّوا أنّها ساعة النصر.', fr: 'C’était l’ordre reçu… mais la plupart crurent la victoire acquise.', en: 'That was the order… but most thought the hour of victory had come.' } },
            { label: { ar: 'صعدوا إلى قمّة جبل أحد.', fr: 'Ils montèrent au sommet d’Uḥud.', en: 'They climbed to the top of Uḥud.' }, hint: { ar: 'اتّجهوا إلى الأسفل لا إلى الأعلى: نحو ما تركه المنهزمون.', fr: 'Ils allèrent vers le bas, pas vers le haut : vers ce que les fuyards laissaient.', en: 'They went down, not up: towards what the fleeing army left behind.' } },
          ],
        },
        {
          id: 'k3',
          prompt: { ar: 'الربوة شبه خالية. ماذا فعل خالد؟', fr: 'La butte est presque vide. Que fit Khālid ?', en: 'The hillock is nearly empty. What did Khālid do?' },
          correct: {
            ar: 'انطلق فقتل من بقي من الرماة، ودار خلف الربوة وهاجم المسلمين.',
            fr: 'Il s’élança, tua les archers restés, contourna la butte et attaqua les musulmans.',
            en: 'He charged, killed the archers who remained, circled behind the hillock and attacked the Muslims.',
          },
          distractors: [
            { label: { ar: 'واصل التراجع نحو مكّة.', fr: 'Il continua de reculer vers La Mecque.', en: 'He kept retreating to Makkah.' }, hint: { ar: 'رأى ثغرةً انفتحت في ظهر الجيش… ولم يضيّعها.', fr: 'Il vit une brèche s’ouvrir dans le dos de l’armée… et la saisit.', en: 'He saw a gap open at the army’s back… and seized it.' } },
            { label: { ar: 'هاجم المسلمين من الأمام.', fr: 'Il attaqua de face.', en: 'He attacked from the front.' }, hint: { ar: 'الرماة كانوا يحمون «ظهر» الجيش. فمن أين جاء الهجوم؟', fr: 'Les archers protégeaient l’arrière de l’armée. D’où vint donc l’attaque ?', en: 'The archers were guarding the army’s rear. So where did the attack come from?' } },
          ],
        },
        {
          id: 'k4',
          prompt: { ar: 'كان المسلمون يظنّون أنّها ساعة النصر. ما أثر الهجوم المباغت؟', fr: 'Les musulmans croyaient la victoire acquise. Quel fut l’effet de cette attaque surprise ?', en: 'The Muslims thought it was the hour of victory. What did the surprise attack do?' },
          correct: {
            ar: 'اهتزّ المسلمون، وعاد المشركون الفارّون فهاجموهم من ظهورهم، فتشتّتوا.',
            fr: 'Les musulmans furent ébranlés ; les fuyards revinrent les attaquer par-derrière, et ils se dispersèrent.',
            en: 'The Muslims were shaken; the fleeing polytheists came back and struck them from behind, and they scattered.',
          },
          distractors: [
            { label: { ar: 'لم يتأثّروا وأكملوا جمع الغنائم.', fr: 'Aucun effet : ils continuèrent le butin.', en: 'No effect: they kept gathering spoils.' }, hint: { ar: 'هجومٌ من الخلف وهم غير مستعدّين… لا بدّ أن يهزّ الصفوف.', fr: 'Une attaque par-derrière, sans s’y attendre… cela ébranle forcément les rangs.', en: 'An attack from behind when unprepared… that is bound to shake the ranks.' } },
            { label: { ar: 'فرّ المشركون مرّةً ثانية.', fr: 'Les polythéistes fuirent encore.', en: 'The polytheists fled again.' }, hint: { ar: 'بل العكس: الفارّون عادوا حين رأوا هجوم خالد.', fr: 'Au contraire : les fuyards revinrent en voyant l’attaque de Khālid.', en: 'The opposite: the fleeing men came back when they saw Khālid’s attack.' } },
          ],
        },
        {
          id: 'k5',
          prompt: { ar: 'إلى أين حاول المسلمون اللحاق؟', fr: 'Où les musulmans tentèrent-ils de se replier ?', en: 'Where did the Muslims try to fall back to?' },
          correct: {
            ar: 'إلى جبل أحد للاحتماء به.',
            fr: 'Vers le mont Uḥud, pour s’y abriter.',
            en: 'To Mount Uḥud, to take shelter there.',
          },
          distractors: [
            { label: { ar: 'إلى آبار بدر.', fr: 'Vers les puits de Badr.', en: 'To the wells of Badr.' }, hint: { ar: 'بدرٌ بعيدة! الملجأ كان أمام أعينهم، شامخًا.', fr: 'Badr est loin ! L’abri était sous leurs yeux, immense.', en: 'Badr is far away! The shelter was right before their eyes, towering.' } },
            { label: { ar: 'إلى خيام المشركين.', fr: 'Vers les tentes ennemies.', en: 'To the enemy’s tents.' }, hint: { ar: 'يبحثون عن حمايةٍ لا عن خطرٍ جديد: فكّر في الجبل.', fr: 'Ils cherchent une protection, pas un nouveau danger : pense à la montagne.', en: 'They want protection, not new danger: think of the mountain.' } },
          ],
        },
      ],
      ending: {
        ar: 'أُصيب المسلمون، وجُرح الرسول ﷺ وأُصيب وجهه وسنّه بكسرٍ ونزف دمًا. أمرٌ واحد لم يُلتزم به… فانقلب النصر. عصيان أوامر رسول الله ﷺ يؤدّي إلى الخسارة.',
        fr: 'Les musulmans furent touchés ; le Prophète ﷺ fut blessé, atteint au visage, une dent brisée, et il saigna. Un seul ordre non respecté… et la victoire bascula. Désobéir aux ordres du Messager de Dieu ﷺ mène à la perte.',
        en: 'The Muslims were struck; the Prophet ﷺ was wounded, his face hurt and a tooth broken, and he bled. One order not kept… and the victory flipped. Disobeying the orders of God’s Messenger ﷺ leads to loss.',
      },
    },

    // 15 — Timeline: the day after Uḥud (Uḥud slide 6)
    {
      kind: 'timeline',
      id: 'timeline-after-uhud',
      title: { ar: 'يوم ما بعد المعركة', fr: 'Le lendemain de la bataille', en: 'The day after the battle' },
      intro: {
        ar: 'الهزيمة ليست النهاية. تابع ما فعله المسلمون خطوةً خطوة.',
        fr: 'La défaite n’est pas la fin. Suis pas à pas ce que firent les musulmans.',
        en: 'Defeat is not the end. Follow what the Muslims did, step by step.',
      },
      image: `${IMG}/uhud.png`,
      imageAlt: UHUD_ALT,
      steps: [
        {
          id: 't1',
          period: { ar: 'بعد رحيل المشركين', fr: 'Après le départ des polythéistes', en: 'Once the polytheists had left' },
          label: { ar: 'دفن الشهداء', fr: 'L’enterrement des martyrs', en: 'Burying the martyrs' },
          detail: {
            ar: 'نزل المسلمون إلى ساحة المعركة ليدفنوا شهداءهم السبعين، وكان من بينهم حمزة عمّ الرسول ﷺ، ومصعب بن عمير (رضي الله عنهما).',
            fr: 'Les musulmans descendirent sur le champ de bataille enterrer leurs soixante-dix martyrs, parmi lesquels Ḥamza, l’oncle du Prophète ﷺ, et Muṣ‘ab ibn ‘Umayr (que Dieu les agrée).',
            en: 'The Muslims went down to the battlefield to bury their seventy martyrs, among them Ḥamza, the Prophet’s ﷺ uncle, and Muṣ‘ab ibn ‘Umayr (may God be pleased with them).',
          },
        },
        {
          id: 't2',
          period: { ar: 'عند دخول المدينة', fr: 'À l’entrée dans Médine', en: 'On entering Madina' },
          label: { ar: 'تعزية الأهالي', fr: 'Les condoléances', en: 'Condolences' },
          detail: {
            ar: 'عزّى المسلمون نساء الشهداء، وكانت من بينهنّ امرأةٌ قُتل زوجها وأخوها وأبوها.',
            fr: 'Les musulmans présentèrent leurs condoléances aux femmes des martyrs. Parmi elles, une femme avait perdu son mari, son frère et son père.',
            en: 'The Muslims consoled the women of the martyrs. Among them was a woman whose husband, brother and father had all been killed.',
          },
        },
        {
          id: 't3',
          period: { ar: 'كلمةٌ خالدة', fr: 'Une parole inoubliable', en: 'Unforgettable words' },
          label: { ar: '«كلُّ مصيبةٍ بعدك جَلَل»', fr: '« Tout malheur, après toi, est léger »', en: '“Every loss, after you, is small”' },
          detail: {
            ar: 'لمّا عزّوها سألت عن رسول الله ﷺ، فقالوا لها: إنّه بحمد الله كما تحبّين. فقالت: أرونيه. فأشاروا لها، فلمّا رأته قالت: «كلُّ مصيبةٍ بعدك جَلَل» (أي صغيرة).',
            fr: 'Quand on la consola, elle demanda des nouvelles du Messager de Dieu ﷺ. On lui dit : « Grâce à Dieu, il va comme tu l’espères. » Elle dit : « Montrez-le-moi. » On le lui désigna, et en le voyant elle dit : « Tout malheur, après toi, est léger. »',
            en: 'When they consoled her, she asked about the Messenger of God ﷺ. They said: “Praise God, he is as you would wish.” She said: “Show him to me.” They pointed him out, and when she saw him she said: “Every loss, after you, is small.”',
          },
        },
        {
          id: 't4',
          period: { ar: 'في اليوم الموالي', fr: 'Le jour suivant', en: 'The following day' },
          label: { ar: 'نداء الخروج من جديد', fr: 'Un nouvel appel à sortir', en: 'A new call to march' },
          detail: {
            ar: 'نادى الرسول ﷺ بالخروج لإبعاد الكفّار الذين أجمعوا على العودة إلى المدينة، وطلب الخروج ممّن كان في معركة أحدٍ فقط.',
            fr: 'Le Prophète ﷺ appela à sortir pour repousser les mécréants, qui s’étaient mis d’accord pour revenir vers Médine. Il ne demanda de sortir qu’à ceux qui avaient été à Uḥud.',
            en: 'The Prophet ﷺ called the Muslims out to drive off the disbelievers, who had agreed to return to Madina. He asked only those who had been at Uḥud to go.',
          },
        },
        {
          id: 't5',
          period: { ar: 'رسولٌ إلى أبي سفيان', fr: 'Un envoyé auprès d’Abū Sufyān', en: 'A messenger to Abū Sufyān' },
          label: { ar: 'معبد يهوّل', fr: 'Ma‘bad impressionne', en: 'Ma‘bad alarms him' },
          detail: {
            ar: 'أرسل ﷺ معبد بن أبي معبد — وهو على وشك الإسلام — ينصح أبا سفيان ويهوّل عليه صفوف المسلمين التي خرجت للنيل من المشركين.',
            fr: 'Il ﷺ envoya Ma‘bad ibn Abī Ma‘bad, alors sur le point d’embrasser l’islam, conseiller Abū Sufyān et lui décrire, en les grossissant, les rangs des musulmans sortis à la poursuite des polythéistes.',
            en: 'He ﷺ sent Ma‘bad ibn Abī Ma‘bad, who was on the verge of Islam, to advise Abū Sufyān and make much of the Muslim ranks that had come out after the polytheists.',
          },
        },
        {
          id: 't6',
          period: { ar: 'الخاتمة', fr: 'Le dénouement', en: 'The outcome' },
          label: { ar: 'قريشٌ ترحل', fr: 'Quraysh s’en va', en: 'Quraysh departs' },
          detail: {
            ar: 'ضعفت عزائم قريش وأسرعوا في الرحيل إلى مكّة خوفًا من ضياع فوزهم، وعاد المسلمون إلى المدينة بعد أن أمنوا كيد المشركين.',
            fr: 'La détermination de Quraysh faiblit : ils se hâtèrent de regagner La Mecque de peur de perdre leur succès. Les musulmans rentrèrent à Médine, à l’abri des ruses des polythéistes.',
            en: 'Quraysh’s resolve weakened: they hurried back to Makkah for fear of losing their win. The Muslims returned to Madina, safe from the polytheists’ scheming.',
          },
        },
      ],
    },

    // 16 — Reading: before the Trench (textbook p.32)
    {
      kind: 'reading',
      id: 'reading-ahzab',
      title: { ar: 'اقرأ: الأحزاب تجتمع', fr: 'Lis : les Coalisés se rassemblent', en: 'Read: the Confederates gather' },
      intro: {
        ar: 'أخطر امتحان: «الابتلاء المزلزل». اقرأ كيف بدأ، ثمّ رتّب أحداثه.',
        fr: 'L’épreuve la plus dure : « l’épreuve qui ébranle ». Lis comment elle commença, puis remets ses événements en ordre.',
        en: 'The hardest test of all: “the shaking trial”. Read how it began, then put its events in order.',
      },
      image: `${IMG}/ahzab-camp.png`,
      imageAlt: {
        ar: 'مئات الخيام الداكنة منتشرة في سهلٍ رمليّ عند الغروب بين تلالٍ سوداء، وفي البعيد بلدةٌ طينية مسوّرة',
        fr: 'Des centaines de tentes sombres couvrant une plaine de sable au crépuscule entre des collines noires, et au loin une ville de terre entourée de murs',
        en: 'Hundreds of dark tents spread over a sandy plain at dusk between black hills, with a walled mud-brick town in the distance',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'خبرٌ مخيف', fr: 'Une nouvelle inquiétante', en: 'Alarming news' },
          text: {
            ar: 'مضى أكثر من سنتين على امتحان أحد. وبينما الكلّ منشغلٌ في جهته، إذ بالأخبار تصل إلى الرسول ﷺ بأنّ المشركين قد اجتمعت قبائلهم من كلّ جهات الجزيرة العربية من أجل أن يدمّروا المدينة ويقضوا على الإسلام نهائيًّا.',
            fr: 'Plus de deux ans avaient passé depuis l’épreuve d’Uḥud. Chacun était occupé de son côté quand la nouvelle parvint au Prophète ﷺ : les tribus polythéistes s’étaient rassemblées de toute l’Arabie pour détruire Médine et en finir avec l’islam.',
            en: 'More than two years had passed since the test of Uḥud. Everyone was busy with their own affairs when news reached the Prophet ﷺ: the polytheist tribes had gathered from every part of Arabia to destroy Madina and put an end to Islam.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'حجرُ الرحى', fr: 'La meule de pierre', en: 'The millstone' },
          text: {
            ar: 'كانت البداية حين حضر الرسول ﷺ إلى حيّ بني النضير اليهوديّ لجمع ديّة مقتولَين من خارج المدينة (الدّيّة: المال الذي يُعطى لوليّ المقتول تعويضًا عن فقده وترطيبًا لخاطر أهله). وبينما هو معهم تآمر عليه فريقٌ منهم، فأتى أحدهم من فوق البناء ليُلقي على رأسه حجر الرحى. فجاءه جبريل (عليه السلام) لينبّهه، فانطلق ﷺ مغادرًا المكان بعد أن نقضوا العهد وهمّوا بقتله.',
            fr: 'Tout commença quand le Prophète ﷺ se rendit au quartier juif de Banū an-Naḍīr pour réunir la diya de deux hommes tués hors de Médine (la diya : somme versée au proche du tué pour compenser sa perte et consoler sa famille). Pendant qu’il était chez eux, un groupe complota : l’un d’eux monta sur la bâtisse pour lui jeter une meule sur la tête. Jibrīl (paix sur lui) vint l’avertir, et il ﷺ quitta les lieux : ils avaient rompu le pacte et voulu le tuer.',
            en: 'It began when the Prophet ﷺ went to the Jewish quarter of Banū an-Naḍīr to collect the diya for two men killed outside Madina (diya: money given to the slain person’s next of kin to compensate for the loss and comfort the family). While he was with them, a group plotted against him: one climbed the building to drop a millstone on his head. Jibrīl (peace be upon him) came to warn him, and he ﷺ left at once: they had broken the covenant and meant to kill him.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'الخروج إلى خيبر', fr: 'Le départ pour Khaybar', en: 'Leaving for Khaybar' },
          text: {
            ar: 'أمر الرسول ﷺ يهود الحيّ بأن يخرجوا من المدينة لأنّهم خرقوا صحيفة عهد المدينة، فلم يستجيبوا، فأخرجهم بالقوّة. وكان ذلك بداية سنة أربعٍ للهجرة، واستقرّوا بخيبر.',
            fr: 'Le Prophète ﷺ ordonna aux juifs du quartier de quitter Médine, car ils avaient violé la charte de Médine. Ils refusèrent ; il les fit sortir par la force. C’était au début de l’an 4 de l’Hégire, et ils s’installèrent à Khaybar.',
            en: 'The Prophet ﷺ ordered the Jews of the quarter to leave Madina because they had violated the Charter of Madina. They refused, so he expelled them by force. That was at the start of year 4 of the Hijra, and they settled in Khaybar.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'عشرة آلاف', fr: 'Dix mille', en: 'Ten thousand' },
          text: {
            ar: 'راحوا يدعون القبائل في كلّ الجهات لحرب الرسول ﷺ في المدينة، ويعِدونهم بالنصرة بالأموال والرجال. وبعد سنةٍ ونصف نجحوا في جمع القبائل ضدّ المدينة، واجتمع حوالي عشرة آلاف رجلٍ على مشارف المدينة، سمّاهم القرآن «الأحزاب».',
            fr: 'Ils se mirent à appeler les tribus de partout à faire la guerre au Prophète ﷺ à Médine, leur promettant l’appui de leurs biens et de leurs hommes. Au bout d’un an et demi, ils réussirent à rassembler les tribus : environ dix mille hommes se réunirent aux abords de Médine. Le Coran les nomme « al-Aḥzāb », les Coalisés.',
            en: 'They went around calling tribes from every direction to wage war on the Prophet ﷺ in Madina, promising support in money and men. After a year and a half they succeeded in uniting the tribes: about ten thousand men gathered on the edges of Madina. The Qur’an names them “al-Aḥzāb”, the Confederates.',
          },
        },
      ],
    },

    // 17 — Sorting: from the millstone to ten thousand (textbook p.32)
    {
      kind: 'sorting',
      id: 'sorting-nadir',
      title: { ar: 'كيف اجتمعت الأحزاب؟', fr: 'Comment les Coalisés se sont-ils réunis ?', en: 'How did the Confederates gather?' },
      intro: {
        ar: 'رتّب الأحداث من الأوّل إلى الأخير، بالسحب أو بالأسهم.',
        fr: 'Range les événements du premier au dernier, en glissant ou avec les flèches.',
        en: 'Put the events in order from first to last, by dragging or with the arrows.',
      },
      image: `${IMG}/ahzab-camp.png`,
      imageAlt: {
        ar: 'مئات الخيام الداكنة منتشرة في سهلٍ رمليّ عند الغروب',
        fr: 'Des centaines de tentes sombres sur une plaine de sable au crépuscule',
        en: 'Hundreds of dark tents on a sandy plain at dusk',
      },
      items: [
        { id: 'i1', label: { ar: 'الرسول ﷺ يحضر إلى حيّ بني النضير لجمع ديّة مقتولَين', fr: 'Le Prophète ﷺ se rend chez Banū an-Naḍīr pour réunir la diya de deux tués', en: 'The Prophet ﷺ goes to Banū an-Naḍīr to collect the diya for two slain men' } },
        { id: 'i2', label: { ar: 'أحدهم يصعد البناء ليُلقي على رأسه حجر الرحى', fr: 'L’un d’eux monte sur la bâtisse pour lui jeter une meule', en: 'One of them climbs the building to drop a millstone on him' } },
        { id: 'i3', label: { ar: 'جبريل (عليه السلام) ينبّهه، فيغادر ﷺ المكان', fr: 'Jibrīl (paix sur lui) l’avertit, et il ﷺ quitte les lieux', en: 'Jibrīl (peace be upon him) warns him, and he ﷺ leaves' } },
        { id: 'i4', label: { ar: 'يأمرهم بالخروج لخرقهم صحيفة المدينة، فلا يستجيبون', fr: 'Il leur ordonne de partir pour avoir violé la charte ; ils refusent', en: 'He orders them out for violating the Charter; they refuse' } },
        { id: 'i5', label: { ar: 'يُخرجهم بالقوّة بداية سنة 4 هـ، فيستقرّون بخيبر', fr: 'Il les fait sortir par la force début de l’an 4 ; ils s’installent à Khaybar', en: 'He expels them by force at the start of 4 AH; they settle in Khaybar' } },
        { id: 'i6', label: { ar: 'يدعون القبائل من كلّ الجهات لحرب المدينة', fr: 'Ils appellent les tribus de partout à attaquer Médine', en: 'They call tribes from everywhere to attack Madina' } },
        { id: 'i7', label: { ar: 'بعد سنةٍ ونصف: حوالي عشرة آلاف رجلٍ على مشارف المدينة', fr: 'Un an et demi plus tard : environ dix mille hommes aux abords de Médine', en: 'A year and a half later: about ten thousand men at the edge of Madina' } },
      ],
      explanation: {
        ar: 'من مؤامرة حجر الرحى إلى عشرة آلاف رجلٍ سمّاهم القرآن «الأحزاب»: هكذا بدأ «الابتلاء المزلزل».',
        fr: 'Du complot de la meule aux dix mille hommes que le Coran nomme « al-Aḥzāb » : ainsi commença « l’épreuve qui ébranle ».',
        en: 'From the millstone plot to the ten thousand men the Qur’an names “al-Aḥzāb”: that is how “the shaking trial” began.',
      },
    },

    // 18 — Reading: digging the Trench (textbook p.33)
    {
      kind: 'reading',
      id: 'reading-khandaq',
      title: { ar: 'اقرأ: حفر الخندق', fr: 'Lis : on creuse le Fossé', en: 'Read: digging the Trench' },
      intro: {
        ar: 'كيف سيُبعد المسلمون خطر عشرة آلاف مقاتل؟ اقرأ، ثمّ استكشف أذكى خطّة دفاع.',
        fr: 'Comment les musulmans écarteront-ils dix mille combattants ? Lis, puis explore le plan de défense le plus ingénieux.',
        en: 'How will the Muslims keep ten thousand fighters away? Read, then explore the cleverest defence plan.',
      },
      image: `${IMG}/trench.png`,
      imageAlt: {
        ar: 'خندقٌ عميق محفور في الرمل بين تلّين صخريّين داكنين، وفيه صخرةٌ كبيرة متشقّقة، وعلى حافّته فؤوسٌ وسلال وقصعةُ طعام، وخلفه بيوتٌ بعيدة',
        fr: 'Un fossé profond creusé dans le sable entre deux collines rocheuses sombres, avec un gros rocher fissuré au fond, des pioches, des paniers et un plat de nourriture au bord, et des maisons au loin',
        en: 'A deep trench dug in the sand between two dark rocky hills, a large cracked boulder inside it, pickaxes, baskets and a bowl of food at its edge, and houses in the distance',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'فكرةٌ من أرض فارس', fr: 'Une idée venue de Perse', en: 'An idea from Persia' },
          text: {
            ar: 'لمّا سمع الرسول ﷺ بما عزم عليه المشركون راح يستشير أصحابه في حلٍّ ممكن. فأشار عليه سلمان الفارسيّ (رضي الله عنه): «إنّا كنّا بأرض فارس إذا حوصرنا خندقنا علينا». فكانت أحسن فكرة.',
            fr: 'Quand le Prophète ﷺ apprit le projet des polythéistes, il consulta ses Compagnons. Salmān al-Fārisī (que Dieu l’agrée) dit : « En Perse, quand on nous assiégeait, nous creusions un fossé autour de nous. » Ce fut la meilleure idée.',
            en: 'When the Prophet ﷺ heard what the polytheists intended, he consulted his Companions for a solution. Salmān al-Fārisī (may God be pleased with him) said: “In the land of Persia, when we were besieged, we dug a trench around us.” It was the best idea.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'ما الخندق؟ وأين حُفر؟', fr: 'Qu’est-ce qu’un fossé ? Où fut-il creusé ?', en: 'What is a trench? Where was it dug?' },
          text: {
            ar: 'الخندق حفرةٌ عميقة مستطيلة حول المكان، تُحفر في ميدان القتال تمنع دخول الخطر الكبير. حُفر في الجهة المكشوفة من المدينة: المدخل الشماليّ، ما بين حرّتَي بني حارثة والوبرة. ولم يُحفر في كلّ الجهات لأنّ الجبال تحصّن المدينة، فحُفر ما بين جبلٍ وجبل، وعرضه من 5 أمتار إلى 10 أمتار، وعمقه من 3 أمتار إلى 5 أمتار.',
            fr: 'Un fossé est une tranchée longue et profonde creusée autour d’un lieu, sur le terrain du combat, pour barrer la route à un grand danger. Il fut creusé du côté découvert de Médine : l’entrée nord, entre les deux ḥarra de Banū Ḥāritha et d’al-Wabara. Pas de tous côtés, car les montagnes protègent Médine : d’une hauteur à l’autre. Largeur : de 5 à 10 mètres ; profondeur : de 3 à 5 mètres.',
            en: 'A trench is a long, deep ditch dug around a place on the battlefield to keep a great danger out. It was dug on the exposed side of Madina: the northern entrance, between the two ḥarras of Banū Ḥāritha and al-Wabara. Not on every side, because the mountains fortify Madina: it ran from one height to the other. Width: 5 to 10 metres; depth: 3 to 5 metres.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'قائدٌ يحفر', fr: 'Un chef qui creuse', en: 'A leader who digs' },
          text: {
            ar: 'شرع المسلمون في الحفر، وشارك الرسول ﷺ في الحفر والعمل: مهندس المشروع ومسيّره، وجنديٌّ في العمل. وكان ﷺ يربط الحجر في بطنه من شدّة الجوع، وقد أعطاه الله قوّةً يضرب الحجر بالفأس فيتفتّت، وكان يمسح في القصعة فيكفي الطعام للجميع.',
            fr: 'Les musulmans se mirent à creuser, et le Prophète ﷺ prit part au travail : ingénieur et chef du projet, et simple soldat à l’ouvrage. Il ﷺ attachait une pierre sur son ventre tant la faim était forte ; Dieu lui donna la force de frapper le roc de sa pioche, qui s’effritait ; et il passait la main dans le plat, et la nourriture suffisait à tous.',
            en: 'The Muslims set to digging, and the Prophet ﷺ joined in the work: engineer and manager of the project, and a soldier in the labour. He ﷺ would tie a stone against his stomach from sheer hunger; God gave him the strength to strike the rock with the pickaxe so that it crumbled; and he would pass his hand over the bowl, and the food would be enough for everyone.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'مناجاةٌ ورجزٌ وكتمان', fr: 'Prière, chant et secret', en: 'Prayer, chant and secrecy' },
          text: {
            ar: 'كان ﷺ وأصحابه يناجون ربّهم ويدعونه أن ينصرهم في محنتهم، وكان ﷺ يرتجز والصحابة يجيبون، ويحرص معهم ألّا يصل خبر الخندق إلى المشركين.',
            fr: 'Lui ﷺ et ses Compagnons invoquaient leur Seigneur en confidence, Lui demandant le secours dans l’épreuve ; il ﷺ scandait des vers et les Compagnons répondaient ; et tous veillaient à ce que la nouvelle du fossé n’atteigne pas les polythéistes.',
            en: 'He ﷺ and his Companions called on their Lord in private, asking His help in their trial; he ﷺ chanted verses and the Companions answered; and they took care that news of the trench did not reach the polytheists.',
          },
        },
      ],
    },
    // 19 — Explorer: the Trench project (textbook p.33)
    {
      kind: 'explorer',
      id: 'explorer-khandaq',
      title: { ar: 'مشروع الخندق', fr: 'Le projet du Fossé', en: 'The Trench project' },
      intro: {
        ar: 'اضغط على النقاط المضيئة لتكتشف كيف وُلدت الفكرة وكيف حُفر الخندق.',
        fr: 'Touche les points lumineux pour découvrir comment l’idée est née et comment le fossé fut creusé.',
        en: 'Tap the glowing points to discover how the idea was born and how the trench was dug.',
      },
      image: `${IMG}/trench.png`,
      imageAlt: {
        ar: 'خندقٌ عميق محفور في الرمل بين تلّين صخريّين داكنين، وفيه صخرةٌ كبيرة متشقّقة، وعلى حافّته فؤوسٌ وسلال وقصعةُ طعام، وخلفه بيوتٌ بعيدة',
        fr: 'Un fossé profond creusé dans le sable entre deux collines rocheuses sombres, avec un gros rocher fissuré au fond, des pioches, des paniers et un plat de nourriture au bord, et des maisons au loin',
        en: 'A deep trench dug in the sand between two dark rocky hills, a large cracked boulder inside it, pickaxes, baskets and a bowl of food at its edge, and houses in the distance',
      },
      hotspots: [
        {
          id: 'idea',
          x: 44,
          y: 24,
          label: { ar: 'صاحب الفكرة', fr: 'L’auteur de l’idée', en: 'Whose idea?' },
          description: {
            ar: 'لمّا سمع الرسول ﷺ بما عزم عليه المشركون راح يستشير أصحابه في حلٍّ ممكن. فأشار عليه سلمان الفارسيّ (رضي الله عنه): «إنّا كنّا بأرض فارس إذا حوصرنا خندقنا علينا». فكانت أحسن فكرة.',
            fr: 'Quand le Prophète ﷺ apprit le projet des polythéistes, il consulta ses Compagnons. Salmān al-Fārisī (que Dieu l’agrée) dit : « En Perse, quand on nous assiégeait, nous creusions un fossé autour de nous. » Ce fut la meilleure idée.',
            en: 'When the Prophet ﷺ heard what the polytheists intended, he consulted his Companions for a solution. Salmān al-Fārisī (may God be pleased with him) said: “In the land of Persia, when we were besieged, we dug a trench around us.” It was the best idea.',
          },
        },
        {
          id: 'what',
          x: 50,
          y: 42,
          label: { ar: 'ما الخندق؟', fr: 'Qu’est-ce qu’un fossé ?', en: 'What is a trench?' },
          description: {
            ar: 'الخندق حفرةٌ عميقة مستطيلة حول المكان، تُحفر في ميدان القتال تمنع دخول الخطر الكبير. اقترح سلمان حفره في الجهة المكشوفة من المدينة بما لا يمكّن المشركين من الدخول منها.',
            fr: 'Un fossé est une tranchée longue et profonde creusée autour d’un lieu, sur le terrain du combat, pour barrer la route à un grand danger. Salmān proposa de le creuser du côté découvert de Médine, pour que les polythéistes ne puissent pas y entrer.',
            en: 'A trench is a long, deep ditch dug around a place on the battlefield to keep a great danger out. Salmān proposed digging it on the exposed side of Madina so that the polytheists could not enter from there.',
          },
        },
        {
          id: 'place',
          x: 13,
          y: 30,
          label: { ar: 'بين جبلٍ وجبل', fr: 'Entre deux hauteurs', en: 'Between two heights' },
          description: {
            ar: 'موقع المشروع: المدخل الشماليّ للمدينة، ما بين حرّتَي بني حارثة والوبرة. لم يُحفر الخندق في كلّ الجهات لأنّ الجبال تحصّن المدينة، فحُفر ما بين جبلٍ وجبل.',
            fr: 'Emplacement : l’entrée nord de Médine, entre les deux ḥarra (champs de lave) de Banū Ḥāritha et d’al-Wabara. Le fossé ne fut pas creusé de tous côtés, car les montagnes protègent Médine : on creusa d’une hauteur à l’autre.',
            en: 'Location: the northern entrance of Madina, between the two ḥarras (lava fields) of Banū Ḥāritha and al-Wabara. The trench was not dug on every side, because the mountains fortify Madina: it ran from one height to the other.',
          },
        },
        {
          id: 'size',
          x: 37,
          y: 70,
          label: { ar: 'عرضٌ وعمق', fr: 'Largeur et profondeur', en: 'Width and depth' },
          description: {
            ar: 'عرض الخندق من 5 أمتار إلى 10 أمتار، وعمقه من 3 أمتار إلى 5 أمتار.',
            fr: 'Largeur : de 5 à 10 mètres. Profondeur : de 3 à 5 mètres.',
            en: 'Width: 5 to 10 metres. Depth: 3 to 5 metres.',
          },
        },
        {
          id: 'work',
          x: 17,
          y: 64,
          label: { ar: 'قائدٌ يحفر', fr: 'Un chef qui creuse', en: 'A leader who digs' },
          description: {
            ar: 'شرع المسلمون في الحفر، وكلّ 40 مسلمًا يحفر 20 مترًا. وشارك الرسول ﷺ في الحفر والعمل: مهندس المشروع ومسيّره، وجنديٌّ في العمل.',
            fr: 'Les musulmans se mirent à creuser : chaque groupe de 40 creusait 20 mètres. Le Prophète ﷺ prit part au travail : ingénieur et chef du projet, et simple soldat à l’ouvrage.',
            en: 'The Muslims set to digging: every 40 men dug 20 metres. The Prophet ﷺ joined in the digging and the work: engineer and manager of the project, and a soldier in the labour.',
          },
        },
        {
          id: 'rock',
          x: 49,
          y: 57,
          label: { ar: 'الصخرة والجوع', fr: 'Le rocher et la faim', en: 'The rock and the hunger' },
          description: {
            ar: 'كان ﷺ يربط الحجر في بطنه من شدّة الجوع، وقد أعطاه الله قوّةً يضرب الحجر بالفأس فيتفتّت.',
            fr: 'Il ﷺ attachait une pierre sur son ventre tant la faim était forte ; et Dieu lui donna la force de frapper le roc de sa pioche, qui s’effritait.',
            en: 'He ﷺ would tie a stone against his stomach from sheer hunger; and God gave him the strength to strike the rock with the pickaxe so that it crumbled.',
          },
        },
        {
          id: 'bowl',
          x: 84,
          y: 87,
          label: { ar: 'طعامٌ يكفي الجميع', fr: 'Un plat pour tous', en: 'Food enough for all' },
          description: {
            ar: 'كان ﷺ يمسح في القصعة فيكفي الطعام للجميع.',
            fr: 'Il ﷺ passait la main dans le plat, et la nourriture suffisait à tous.',
            en: 'He ﷺ would pass his hand over the bowl, and the food would be enough for everyone.',
          },
        },
        {
          id: 'voice',
          x: 52,
          y: 8,
          label: { ar: 'مناجاةٌ ورجزٌ وكتمان', fr: 'Prière, chant et secret', en: 'Prayer, chant and secrecy' },
          description: {
            ar: 'كان ﷺ وأصحابه يناجون ربّهم ويدعونه أن ينصرهم في محنتهم (يناجي: يوجّه الكلام إلى الله سرًّا ويُظهر ضعفه وحاجته إليه). وكان ﷺ يرتجز والصحابة يجيبون (يرتجز: يقول كلامًا بنبرة صوتٍ ممتعة وموزونة تبعث على الحماس). ويحرص معهم ألّا يصل خبر الخندق إلى المشركين.',
            fr: 'Lui ﷺ et ses Compagnons invoquaient leur Seigneur en confidence, Lui demandant le secours dans l’épreuve (munājāt : parler à Dieu en secret, en montrant sa faiblesse et son besoin de Lui). Il ﷺ scandait des vers et les Compagnons répondaient (rajaz : paroles rythmées, dites d’une voix entraînante qui donne de l’ardeur). Et tous veillaient à ce que la nouvelle du fossé n’atteigne pas les polythéistes.',
            en: 'He ﷺ and his Companions called on their Lord in private, asking His help in their trial (munājāt: speaking to God in secret, showing one’s weakness and need of Him). He ﷺ chanted verses and the Companions answered (rajaz: rhythmic words in a rousing voice that stirs up zeal). And they took care that news of the trench did not reach the polytheists.',
          },
        },
      ],
    },

    // 20 — Reading: the numbers of the Trench (textbook p.32–33, «مشروع الخندق» card)
    {
      kind: 'reading',
      id: 'reading-khandaq-numbers',
      title: { ar: 'اقرأ: أرقام الخندق', fr: 'Lis : les chiffres du Fossé', en: 'Read: the Trench in numbers' },
      intro: {
        ar: 'أرقامٌ مدهشة! اقرأها جيّدًا، ثمّ اختبر ذاكرتك.',
        fr: 'Des chiffres étonnants ! Lis-les bien, puis teste ta mémoire.',
        en: 'Amazing numbers! Read them carefully, then test your memory.',
      },
      image: `${IMG}/trench.png`,
      imageAlt: {
        ar: 'خندقٌ عميق محفور في الرمل بين تلّين صخريّين',
        fr: 'Un fossé profond creusé dans le sable entre deux collines rocheuses',
        en: 'A deep trench dug in the sand between two rocky hills',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'عشرة آلاف أمام ثلاثة آلاف', fr: 'Dix mille contre trois mille', en: 'Ten thousand against three thousand' },
          text: {
            ar: 'اجتمع من الأحزاب حوالي عشرة آلاف رجل، أمام نحو 3000 من الصحابة: أكثر من ثلاثة أضعاف!',
            fr: 'Les Coalisés réunirent environ dix mille hommes, face à quelque 3000 Compagnons : plus de trois fois plus !',
            en: 'The Confederates gathered about ten thousand men, facing some 3,000 Companions: more than three times as many!',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'طول الخندق', fr: 'La longueur du fossé', en: 'The trench’s length' },
          text: {
            ar: 'بلغ طول الخندق نحو 5544 مترًا: أكثر من خمسة كيلومترات ونصف! وكلّ 40 مسلمًا يحفر 20 مترًا.',
            fr: 'Le fossé mesurait environ 5544 mètres : plus de cinq kilomètres et demi ! Chaque groupe de 40 musulmans creusait 20 mètres.',
            en: 'The trench was about 5,544 metres long: more than five and a half kilometres! Every 40 Muslims dug 20 metres.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'نصف الرجال في أسبوعين', fr: 'La moitié des hommes en deux semaines', en: 'Half the men in two weeks' },
          text: {
            ar: 'أنجز الحفر نحو 1500 صحابيّ من إجماليّ 3000: نصف الرجال يحفرون. وأُنجز الخندق في أسبوعين فقط! ولذلك فوجئت به جيوش الأحزاب.',
            fr: 'Environ 1500 Compagnons sur 3000 au total ont creusé : la moitié des hommes. Et le fossé fut achevé en deux semaines seulement ! Voilà pourquoi les armées coalisées furent prises de court.',
            en: 'About 1,500 Companions out of 3,000 in all did the digging: half the men. And the trench was finished in just two weeks! That is why the Confederate armies were caught by surprise.',
          },
        },
      ],
    },

    // 21 — Memory: the numbers of the Trench
    {
      kind: 'memory',
      id: 'memory-khandaq',
      title: { ar: 'ذاكرة الأرقام', fr: 'La mémoire des chiffres', en: 'Number memory' },
      intro: {
        ar: 'احفظ البطاقات قبل أن تنقلب، ثمّ اعثر على الرقم الذي يجيب عن كلّ سؤال.',
        fr: 'Mémorise les cartes avant qu’elles se retournent, puis retrouve le chiffre qui répond à chaque question.',
        en: 'Memorise the cards before they flip, then find the number that answers each question.',
      },
      cards: [
        { id: 'n1', label: { ar: 'حوالي 10 000', fr: 'Environ 10 000', en: 'About 10,000' }, category: { ar: 'الأحزاب', fr: 'Les Coalisés', en: 'The Confederates' } },
        { id: 'n2', label: { ar: 'نحو 3000', fr: 'Environ 3000', en: 'About 3,000' }, category: { ar: 'الصحابة', fr: 'Les Compagnons', en: 'The Companions' } },
        { id: 'n3', label: { ar: 'نحو 5544 م', fr: 'Environ 5544 m', en: 'About 5,544 m' }, category: { ar: 'طول الخندق', fr: 'Longueur du fossé', en: 'Trench length' } },
        { id: 'n4', label: { ar: 'نحو 1500', fr: 'Environ 1500', en: 'About 1,500' }, category: { ar: 'الحفّارون', fr: 'Ceux qui creusent', en: 'The diggers' } },
        { id: 'n5', label: { ar: 'أسبوعان', fr: 'Deux semaines', en: 'Two weeks' }, category: { ar: 'مدّة الحفر', fr: 'Durée des travaux', en: 'Digging time' } },
        { id: 'n6', label: { ar: '20 مترًا', fr: '20 mètres', en: '20 metres' }, category: { ar: 'حصّة كلّ 40', fr: 'Part de chaque groupe de 40', en: 'Share of every 40' } },
      ],
      rounds: [
        { id: 'r1', question: { ar: 'كم رجلًا اجتمع من الأحزاب على مشارف المدينة؟', fr: 'Combien d’hommes les Coalisés réunirent-ils aux abords de Médine ?', en: 'How many Confederates gathered at the edge of Madina?' }, correctIds: ['n1'] },
        { id: 'r2', question: { ar: 'كم مترًا طول الخندق؟', fr: 'Quelle longueur de fossé, en mètres ?', en: 'How long was the trench, in metres?' }, correctIds: ['n3'] },
        { id: 'r3', question: { ar: 'كم صحابيًّا أنجز الحفر؟', fr: 'Combien de Compagnons ont creusé ?', en: 'How many Companions did the digging?' }, correctIds: ['n4'] },
        { id: 'r4', question: { ar: 'في كم يومٍ أُنجز الخندق؟', fr: 'En combien de jours le fossé fut-il achevé ?', en: 'In how many days was the trench finished?' }, correctIds: ['n5'] },
        { id: 'r5', question: { ar: 'كم كان إجماليّ الصحابة؟', fr: 'Combien de Compagnons y avait-il en tout ?', en: 'How many Companions were there in all?' }, correctIds: ['n2'] },
        { id: 'r6', question: { ar: 'كم مترًا يحفر كلّ 40 مسلمًا؟', fr: 'Combien de mètres creuse chaque groupe de 40 musulmans ?', en: 'How many metres did every 40 Muslims dig?' }, correctIds: ['n6'] },
      ],
    },

    // 22 — Story: the alliance falls apart (textbook p.33–34)
    {
      kind: 'story',
      id: 'story-ahzab',
      title: { ar: 'إفشال تحالف المشركين', fr: 'L’échec de la coalition', en: 'The alliance falls apart' },
      intro: {
        ar: 'ستّ بطاقاتٍ تحكي شهر الحصار. قلّبها واحدةً واحدة.',
        fr: 'Six cartes racontent le mois de siège. Tourne-les une à une.',
        en: 'Six cards tell the month of siege. Flip through them one by one.',
      },
      cards: [
        {
          id: 'k1',
          image: `${IMG}/trench.png`,
          imageAlt: {
            ar: 'خندقٌ عميق محفور في الرمل بين تلّين صخريّين',
            fr: 'Un fossé profond creusé dans le sable entre deux collines rocheuses',
            en: 'A deep trench dug in the sand between two rocky hills',
          },
          fact: {
            ar: 'فوجئت جيوش الأحزاب بالخندق الذي حُفر في وقتٍ وجيز ولم يسمعوا به في حروب العرب، فقرّروا البقاء حتى دخول المدينة وقتل المسلمين. استمرّ المشركون شهرًا في الحصار يحاولون الدخول عبر الخندق، والمسلمون يمنعونهم من الاقتراب ويرمون من يحاول القفز بالنبال.',
            fr: 'Les armées coalisées furent stupéfaites devant ce fossé creusé en si peu de temps, chose inconnue dans les guerres des Arabes. Elles décidèrent de rester jusqu’à entrer dans Médine et tuer les musulmans. Le siège dura un mois : elles tentaient de franchir le fossé, les musulmans les repoussaient et tiraient des flèches sur quiconque essayait de sauter.',
            en: 'The Confederate armies were stunned by the trench, dug in so short a time and unheard of in Arab warfare. They decided to stay until they could enter Madina and kill the Muslims. The siege lasted a month: they kept trying to cross the trench, while the Muslims held them off and shot arrows at anyone who tried to jump it.',
          },
        },
        {
          id: 'k2',
          image: `${IMG}/forts.png`,
          imageAlt: {
            ar: 'حصونٌ عالية من الحجر والطين بأبوابٍ خشبية مغلقة بين النخيل عند الغروب',
            fr: 'De hautes maisons fortes de pierre et de terre, portes de bois closes, parmi les palmiers au crépuscule',
            en: 'Tall fortified houses of stone and mud brick with closed wooden gates among palms at dusk',
          },
          fact: {
            ar: 'لم يتردّد يهود بني قريظة في إعلان انضمامهم إلى الأحزاب، فأصاب المسلمين رعبٌ كبير لانتقال الخطر إلى داخل المدينة خلف المسلمين. فأرسل الرسول ﷺ عددًا من أصحابه لحماية النساء والأطفال من غدر بني قريظة جنوب المدينة. وبينما أخذ عدد المسلمين يتناقص من الجهة الأمامية تشجّع الكفّار لعبور الخندق، لكنّهم فشلوا.',
            fr: 'Les juifs de Banū Qurayẓa n’hésitèrent pas à annoncer qu’ils rejoignaient les Coalisés. Une grande frayeur saisit les musulmans : le danger était passé à l’intérieur de Médine, dans leur dos. Le Prophète ﷺ envoya des Compagnons protéger les femmes et les enfants de la trahison de Banū Qurayẓa, au sud de la ville. Les rangs s’éclaircissant à l’avant, les mécréants s’enhardirent à franchir le fossé, mais ils échouèrent.',
            en: 'The Jews of Banū Qurayẓa did not hesitate to announce that they were joining the Confederates. Great fear struck the Muslims, for the danger had moved inside Madina, behind them. The Prophet ﷺ sent some of his Companions to protect the women and children from Banū Qurayẓa’s treachery in the south of the town. As the Muslim numbers at the front thinned, the disbelievers grew bold enough to try crossing the trench, but they failed.',
          },
        },
        {
          id: 'k3',
          image: `${IMG}/hero.png`,
          imageAlt: HERO_ALT,
          fact: {
            ar: 'فجاء نُعيم بن مسعود الأشجعيّ (رضي الله عنه) فقال: «يا رسول الله، إنّي قد أسلمتُ، وإنّ قومي لم يعلموا بإسلامي، فمُرني بما شئت». فقال ﷺ: «أنت رجلٌ واحد، وماذا عسى أن تفعل؟! ولكن خذِّل عنّا ما استطعت، فإنّ الحرب خدعة».',
            fr: 'Vint alors Nu‘aym ibn Mas‘ūd al-Ashja‘ī (que Dieu l’agrée) : « Ô Messager de Dieu, j’ai embrassé l’islam et mon peuple l’ignore. Ordonne-moi ce que tu veux. » Il ﷺ répondit : « Tu n’es qu’un seul homme, que pourrais-tu faire ?! Mais détourne-les de nous autant que tu le peux, car la guerre est ruse. »',
            en: 'Then Nu‘aym ibn Mas‘ūd al-Ashja‘ī (may God be pleased with him) came and said: “Messenger of God, I have become Muslim and my people do not know it. Command me as you wish.” He ﷺ said: “You are only one man; what could you do?! But turn them away from us as best you can, for war is stratagem.”',
          },
        },
        {
          id: 'k4',
          image: `${IMG}/ahzab-camp.png`,
          imageAlt: {
            ar: 'مئات الخيام الداكنة منتشرة في سهلٍ رمليّ عند الغروب',
            fr: 'Des centaines de tentes sombres sur une plaine de sable au crépuscule',
            en: 'Hundreds of dark tents on a sandy plain at dusk',
          },
          fact: {
            ar: 'راح نُعيم يُعدّ مكيدةً لليهود وقريش. ذهب إلى اليهود ليخبرهم بأنّ الكفّار يقولون إنّهم إن دخلوا سيقتلون جميع من في المدينة ويأخذوا أموالهم، خاصّةً اليهود فهم أصحاب مال. ثمّ ذهب إلى قريشٍ وقال لهم: إنّ اليهود يأتمرون ضدّكم ليتركوكم تدخلون ثمّ يحاصركم المسلمون داخل الخندق. فخافت قريشٌ من الغدر ولم يتقدّموا.',
            fr: 'Nu‘aym prépara une ruse contre les juifs et Quraysh. Il alla dire aux juifs que les mécréants parlaient, une fois entrés, de tuer tous les habitants de Médine et de prendre leurs biens, surtout ceux des juifs, qui étaient riches. Puis il alla dire à Quraysh : « Les juifs complotent contre vous : ils vous laisseront entrer, puis les musulmans vous encercleront à l’intérieur du fossé. » Quraysh craignit la trahison et n’avança pas.',
            en: 'Nu‘aym set about a ruse against the Jews and Quraysh. He went to tell the Jews that the disbelievers were saying that once inside they would kill everyone in Madina and take their wealth, especially the Jews, who were wealthy. Then he went to Quraysh and said: “The Jews are plotting against you: they will let you in, and then the Muslims will trap you inside the trench.” Quraysh feared treachery and did not advance.',
          },
        },
        {
          id: 'k5',
          image: `${IMG}/storm.png`,
          imageAlt: {
            ar: 'ريحٌ قوية وغبارٌ يعصفان بمعسكرٍ من الخيام الداكنة ليلًا',
            fr: 'Un vent violent et la poussière balayant de nuit un campement de tentes sombres',
            en: 'A fierce wind and dust sweeping through a camp of dark tents at night',
          },
          fact: {
            ar: 'ومع مرور شهرٍ نفد طعامهم وماؤهم، وأرسل الله جنده من الريح والغبار فاقتلع خيامهم وشتّتهم، فعادوا خائبين.',
            fr: 'Au bout d’un mois, leurs vivres et leur eau s’épuisèrent. Dieu envoya Ses soldats, le vent et la poussière, qui arrachèrent leurs tentes et les dispersèrent. Ils repartirent déçus.',
            en: 'As a month went by, their food and water ran out. God sent His soldiers of wind and dust, which tore up their tents and scattered them. They went home disappointed.',
          },
        },
        {
          id: 'k6',
          image: `${IMG}/calm.png`,
          imageAlt: {
            ar: 'بلدةٌ طينية هادئة بين النخيل عند شروقٍ صافٍ، وخندقٌ ترابيّ يمتدّ في الرمل',
            fr: 'Une ville de terre paisible parmi les palmiers sous un lever de soleil clair, un fossé de terre s’étirant dans le sable',
            en: 'A quiet mud-brick town among palms under a clear sunrise, with an earthen trench stretching across the sand',
          },
          certainty: 'established',
          fact: {
            ar: 'بعد أن رحلت الأحزاب ذهب الرعب عن المسلمين، ثمّ توجّه بهم الرسول ﷺ إلى حيّ بني قريظة ليؤدّبهم على خيانتهم ونقضهم العهد، فقُتل زعماء النقض وأُسر الباقي، فاستراح المسلمون من شرور يهود المدينة. كما خرج ﷺ لتأديب بعض القبائل بجوار المدينة والتي تقطع سبيل المسلمين، فهدأت الأوضاع. وكان ذلك في السنة الخامسة من الهجرة، وقد استُشهد ستّةٌ من المسلمين وقُتل ثلاثة نفرٍ من الأحزاب، وسجّل الله تعالى في سورة الأحزاب العظات والعبر.',
            fr: 'Les Coalisés partis, la peur quitta les musulmans. Le Prophète ﷺ les mena ensuite au quartier de Banū Qurayẓa pour les punir de leur trahison et de la rupture du pacte : les chefs de la rupture furent tués et les autres faits prisonniers. Les musulmans furent délivrés des méfaits des juifs de Médine. Il ﷺ sortit aussi corriger des tribus voisines qui coupaient la route aux musulmans, et la situation s’apaisa. C’était en l’an 5 de l’Hégire. Six musulmans tombèrent martyrs et trois hommes des Coalisés furent tués. Dieu en a consigné les leçons dans la sourate al-Aḥzāb.',
            en: 'Once the Confederates had gone, fear left the Muslims. The Prophet ﷺ then led them to the quarter of Banū Qurayẓa to punish their treachery and breach of the covenant: the leaders of the breach were killed and the rest taken captive. The Muslims were relieved of the harm of Madina’s Jews. He ﷺ also went out to discipline some tribes near Madina that were cutting the Muslims’ roads, and things grew calm. This was in year 5 of the Hijra. Six Muslims were martyred and three of the Confederates were killed. God recorded its lessons in Surat al-Aḥzāb.',
          },
        },
      ],
      reflection: {
        prompt: { ar: 'ما الذي أفشل تحالف الأحزاب؟ اختر كلّ ما يصحّ.', fr: 'Qu’est-ce qui fit échouer la coalition ? Choisis tout ce qui convient.', en: 'What made the alliance fail? Choose all that apply.' },
        options: [
          {
            id: 'r1',
            label: { ar: 'الخندق', fr: 'Le fossé', en: 'The trench' },
            isRelevant: true,
            explanation: { ar: 'منع الخندق المشركين من التقدّم ودخول المدينة.', fr: 'Le fossé empêcha les polythéistes d’avancer et d’entrer dans Médine.', en: 'The trench stopped the polytheists from advancing into Madina.' },
          },
          {
            id: 'r2',
            label: { ar: 'صبر المسلمين شهرًا', fr: 'Un mois de patience', en: 'A month of patience' },
            isRelevant: true,
            explanation: { ar: 'صبر المسلمون على شدّة الهجوم شهرًا كاملًا.', fr: 'Les musulmans endurèrent la dureté de l’assaut un mois entier.', en: 'The Muslims endured the fierce assault for a whole month.' },
          },
          {
            id: 'r3',
            label: { ar: 'مكيدة نُعيم', fr: 'La ruse de Nu‘aym', en: 'Nu‘aym’s ruse' },
            isRelevant: true,
            explanation: { ar: 'سخّر الله نُعيمًا الأشجعيّ (رضي الله عنه) ليزرع الفرقة بين المشركين، ففترت أهدافهم.', fr: 'Dieu mit Nu‘aym al-Ashja‘ī (que Dieu l’agrée) au service des croyants pour semer la division chez l’ennemi ; leurs ardeurs retombèrent.', en: 'God made Nu‘aym al-Ashja‘ī (may God be pleased with him) the means of sowing division among the enemy, and their aims went slack.' },
          },
          {
            id: 'r4',
            label: { ar: 'الريح والغبار', fr: 'Le vent et la poussière', en: 'The wind and dust' },
            isRelevant: true,
            explanation: { ar: 'أرسل الله جنوده: الرياح التي اقتلعت الخيام وشتّتت الأحزاب.', fr: 'Dieu envoya Ses soldats : les vents qui arrachèrent les tentes et dispersèrent les Coalisés.', en: 'God sent His soldiers: the winds that tore up the tents and scattered the Confederates.' },
          },
          {
            id: 'r5',
            label: { ar: 'كثرة عدد المسلمين', fr: 'Le grand nombre des musulmans', en: 'The Muslims’ great numbers' },
            isRelevant: false,
            explanation: { ar: 'كانوا نحو 3000 أمام حوالي 10 000. لم يكن النصر بالعدد.', fr: 'Ils étaient environ 3000 contre quelque 10 000. La victoire ne vint pas du nombre.', en: 'They were about 3,000 against some 10,000. Victory did not come from numbers.' },
          },
          {
            id: 'r6',
            label: { ar: 'ثقة اليهود وقريش ببعضهم', fr: 'La confiance entre juifs et Quraysh', en: 'Trust between the Jews and Quraysh' },
            isRelevant: false,
            explanation: { ar: 'بل العكس: لم يأمنوا مكر بعضهم، ولذلك لم يتّفقوا على ضرب المسلمين.', fr: 'Au contraire : ils ne se fiaient pas les uns aux autres, et ne purent donc s’entendre pour frapper les musulmans.', en: 'The opposite: they did not trust one another, so they could not agree to strike the Muslims.' },
          },
        ],
      },
    },

    // 23 — Quiz: who am I? + key words (review of the whole lesson)
    {
      kind: 'quiz',
      id: 'quiz-who',
      title: { ar: 'من أنا؟ وما الكلمة؟', fr: 'Qui suis-je ? Quel est le mot ?', en: 'Who am I? What’s the word?' },
      intro: {
        ar: 'اقرأ التلميحات وتعرّف على صاحبها، ثمّ صِل كلّ تلميحٍ بكلمته المفتاحية.',
        fr: 'Lis les indices et trouve de qui il s’agit, puis relie chaque indice à son mot-clé.',
        en: 'Read the clues and find who it is, then match each clue to its key word.',
      },
      questions: [
        {
          id: 'w1',
          type: 'mcq',
          question: {
            ar: 'من أنا؟ رأيٌ واحد منّي غيّر مكان معسكرٍ كامل. قلتُ: «ليس هذا بمنزل». واقترحتُ أن تُغوَّر الآبار إلّا واحدة يُحفر عليها حوض.',
            fr: 'Qui suis-je ? Un seul avis de ma part a déplacé tout un camp. J’ai dit : « Ce n’est pas le bon emplacement. » Et j’ai proposé de combler les puits sauf un, avec un bassin.',
            en: 'Who am I? One piece of advice from me moved a whole camp. I said: “This is not the place to camp.” And I proposed filling in the wells but one, with a basin beside it.',
          },
          options: [
            { id: 'a', label: { ar: 'سلمان الفارسيّ', fr: 'Salmān al-Fārisī', en: 'Salmān al-Fārisī' } },
            { id: 'b', label: { ar: 'الحُباب بن المنذر', fr: 'Al-Ḥubāb ibn al-Mundhir', en: 'Al-Ḥubāb ibn al-Mundhir' } },
            { id: 'c', label: { ar: 'مصعب بن عمير', fr: 'Muṣ‘ab ibn ‘Umayr', en: 'Muṣ‘ab ibn ‘Umayr' } },
            { id: 'd', label: { ar: 'نُعيم بن مسعود', fr: 'Nu‘aym ibn Mas‘ūd', en: 'Nu‘aym ibn Mas‘ūd' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'الحُباب بن المنذر (رضي الله عنه) يوم بدر. قال له الرسول ﷺ: «قد أشرتَ بالرأي».',
            fr: 'Al-Ḥubāb ibn al-Mundhir (que Dieu l’agrée), à Badr. Le Prophète ﷺ lui dit : « Tu as donné le bon avis. »',
            en: 'Al-Ḥubāb ibn al-Mundhir (may God be pleased with him), at Badr. The Prophet ﷺ told him: “You have given the right counsel.”',
          },
        },
        {
          id: 'w2',
          type: 'mcq',
          question: {
            ar: 'من أنا؟ القافلة نجت، لكنّي رفضتُ الرجوع. أردتُ أن أُظهر للعرب بأس قريش، وأصررتُ أن أصل بقريشٍ إلى مستراح بدر.',
            fr: 'Qui suis-je ? La caravane était sauve, mais j’ai refusé de rentrer. Je voulais montrer aux Arabes la force de Quraysh, et j’ai tenu à mener Quraysh jusqu’à la halte de Badr.',
            en: 'Who am I? The caravan was safe, yet I refused to turn back. I wanted to show the Arabs Quraysh’s might, and I insisted on leading Quraysh to the resting place of Badr.',
          },
          options: [
            { id: 'a', label: { ar: 'أبو سفيان', fr: 'Abū Sufyān', en: 'Abū Sufyān' } },
            { id: 'b', label: { ar: 'خالد بن الوليد', fr: 'Khālid ibn al-Walīd', en: 'Khālid ibn al-Walīd' } },
            { id: 'c', label: { ar: 'أبو جهل', fr: 'Abū Jahl', en: 'Abū Jahl' } },
            { id: 'd', label: { ar: 'معبد بن أبي معبد', fr: 'Ma‘bad ibn Abī Ma‘bad', en: 'Ma‘bad ibn Abī Ma‘bad' } },
          ],
          correctId: 'c',
          explanation: {
            ar: 'أبو جهل. كتب أبو سفيان إلى قريشٍ أن ترجع، لكنّ أبا جهلٍ أصرّ على المسير إلى بدر.',
            fr: 'Abū Jahl. Abū Sufyān avait écrit à Quraysh de rentrer, mais Abū Jahl s’obstina à marcher sur Badr.',
            en: 'Abū Jahl. Abū Sufyān had written to Quraysh to turn back, but Abū Jahl insisted on marching to Badr.',
          },
        },
        {
          id: 'w3',
          type: 'mcq',
          question: {
            ar: 'من أنا؟ كنتُ في جيش المشركين وهو يتراجع. لاحظتُ خمسين رجلًا على ربوة وفهمتُ خطّتهم، ودرتُ خلف الربوة يوم أحد.',
            fr: 'Qui suis-je ? J’étais dans l’armée des polythéistes qui reculait. J’ai remarqué cinquante hommes sur une butte et compris leur plan, et j’ai contourné la butte, le jour d’Uḥud.',
            en: 'Who am I? I was in the polytheists’ army as it fell back. I noticed fifty men on a hillock and understood their plan, and I circled behind the hillock on the day of Uḥud.',
          },
          options: [
            { id: 'a', label: { ar: 'خالد بن الوليد', fr: 'Khālid ibn al-Walīd', en: 'Khālid ibn al-Walīd' } },
            { id: 'b', label: { ar: 'أبو جهل', fr: 'Abū Jahl', en: 'Abū Jahl' } },
            { id: 'c', label: { ar: 'أبو سفيان', fr: 'Abū Sufyān', en: 'Abū Sufyān' } },
            { id: 'd', label: { ar: 'الحُباب بن المنذر', fr: 'Al-Ḥubāb ibn al-Mundhir', en: 'Al-Ḥubāb ibn al-Mundhir' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'خالد بن الوليد يوم أحد: استغلّ نزول أغلب الرماة فهاجم المسلمين من الخلف.',
            fr: 'Khālid ibn al-Walīd à Uḥud : il profita de la descente de la plupart des archers pour attaquer les musulmans par-derrière.',
            en: 'Khālid ibn al-Walīd at Uḥud: he used the moment most archers came down to attack the Muslims from behind.',
          },
        },
        {
          id: 'w4',
          type: 'mcq',
          question: {
            ar: 'من أنا؟ كنتُ على وشك الإسلام. أُرسلتُ إلى أبي سفيان ناصحًا، فهوّلتُ عليه صفوف المسلمين، فأسرعت قريشٌ إلى مكّة.',
            fr: 'Qui suis-je ? J’étais sur le point d’embrasser l’islam. On m’envoya conseiller Abū Sufyān ; je lui ai grossi les rangs des musulmans, et Quraysh se hâta vers La Mecque.',
            en: 'Who am I? I was on the verge of Islam. I was sent to advise Abū Sufyān; I made much of the Muslim ranks, and Quraysh hurried off to Makkah.',
          },
          options: [
            { id: 'a', label: { ar: 'نُعيم بن مسعود', fr: 'Nu‘aym ibn Mas‘ūd', en: 'Nu‘aym ibn Mas‘ūd' } },
            { id: 'b', label: { ar: 'معبد بن أبي معبد', fr: 'Ma‘bad ibn Abī Ma‘bad', en: 'Ma‘bad ibn Abī Ma‘bad' } },
            { id: 'c', label: { ar: 'سلمان الفارسيّ', fr: 'Salmān al-Fārisī', en: 'Salmān al-Fārisī' } },
            { id: 'd', label: { ar: 'حمزة', fr: 'Ḥamza', en: 'Ḥamza' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'معبد بن أبي معبد، في اليوم الموالي لأحد: ضعفت عزائم قريش وخافوا ضياع فوزهم.',
            fr: 'Ma‘bad ibn Abī Ma‘bad, le lendemain d’Uḥud : la détermination de Quraysh faiblit, par peur de perdre son succès.',
            en: 'Ma‘bad ibn Abī Ma‘bad, the day after Uḥud: Quraysh’s resolve weakened for fear of losing their win.',
          },
        },
        {
          id: 'w5',
          type: 'mcq',
          question: {
            ar: 'من أنا؟ أسلمتُ وقومي لا يعلمون. قيل لي: «أنت رجلٌ واحد… ولكن خذِّل عنّا ما استطعت»، فزرعتُ الشكّ بين اليهود وقريشٍ أيّام الخندق.',
            fr: 'Qui suis-je ? J’ai embrassé l’islam à l’insu de mon peuple. On m’a dit : « Tu n’es qu’un seul homme… mais détourne-les de nous », et j’ai semé le doute entre les juifs et Quraysh, au temps du Fossé.',
            en: 'Who am I? I became Muslim and my people did not know. I was told: “You are only one man… but turn them away from us”, and I sowed doubt between the Jews and Quraysh in the days of the Trench.',
          },
          options: [
            { id: 'a', label: { ar: 'سلمان الفارسيّ', fr: 'Salmān al-Fārisī', en: 'Salmān al-Fārisī' } },
            { id: 'b', label: { ar: 'معبد بن أبي معبد', fr: 'Ma‘bad ibn Abī Ma‘bad', en: 'Ma‘bad ibn Abī Ma‘bad' } },
            { id: 'c', label: { ar: 'نُعيم بن مسعود', fr: 'Nu‘aym ibn Mas‘ūd', en: 'Nu‘aym ibn Mas‘ūd' } },
            { id: 'd', label: { ar: 'مصعب بن عمير', fr: 'Muṣ‘ab ibn ‘Umayr', en: 'Muṣ‘ab ibn ‘Umayr' } },
          ],
          correctId: 'c',
          explanation: {
            ar: 'نُعيم بن مسعود الأشجعيّ (رضي الله عنه): رجلٌ واحد، و«الحرب خدعة».',
            fr: 'Nu‘aym ibn Mas‘ūd al-Ashja‘ī (que Dieu l’agrée) : un seul homme, et « la guerre est ruse ».',
            en: 'Nu‘aym ibn Mas‘ūd al-Ashja‘ī (may God be pleased with him): one man, and “war is stratagem”.',
          },
        },
        {
          id: 'w6',
          type: 'matching',
          question: { ar: 'صِل كلّ تلميحٍ بكلمته المفتاحية.', fr: 'Relie chaque indice à son mot-clé.', en: 'Match each clue to its key word.' },
          pairs: [
            { id: 'k1', left: { ar: 'اليوم الذي فرّق الله فيه بين الحقّ والباطل: يوم الـ…', fr: 'Le jour où Dieu sépara le vrai du faux : le jour du…', en: 'The day God separated truth from falsehood: the Day of the…' }, right: { ar: 'فرقان', fr: 'Furqān', en: 'Furqān' } },
            { id: 'k2', left: { ar: 'جبلٌ عسكر المسلمون قربه وحاولوا الاحتماء به.', fr: 'La montagne près de laquelle campèrent les musulmans et où ils cherchèrent refuge.', en: 'The mountain the Muslims camped by and tried to shelter at.' }, right: { ar: 'أحد', fr: 'Uḥud', en: 'Uḥud' } },
            { id: 'k3', left: { ar: 'حفرةٌ عميقة مستطيلة حول المكان، تمنع دخول الخطر الكبير.', fr: 'Tranchée longue et profonde autour d’un lieu, qui barre la route au danger (mot arabe).', en: 'A long, deep ditch around a place that keeps great danger out (Arabic word).' }, right: { ar: 'خندق', fr: 'Khandaq', en: 'Khandaq' } },
            { id: 'k4', left: { ar: 'صاحب فكرة الخندق، من أرض فارس.', fr: 'L’auteur de l’idée du fossé, venu de Perse.', en: 'The man behind the trench idea, from Persia.' }, right: { ar: 'سلمان', fr: 'Salmān', en: 'Salmān' } },
            { id: 'k5', left: { ar: 'الاسم الذي سمّى به القرآن القبائل المجتمعة ضدّ المدينة.', fr: 'Le nom que le Coran donne aux tribus réunies contre Médine.', en: 'The name the Qur’an gives the tribes gathered against Madina.' }, right: { ar: 'أحزاب', fr: 'Aḥzāb', en: 'Aḥzāb' } },
          ],
          explanation: {
            ar: 'يوم الفرقان هو يوم بدر: 17 رمضان من السنة الثانية للهجرة. جبل أحد: عنده وُضع خمسون راميًا على ربوةٍ لحماية ظهر الجيش. الخندق: نحو 5544 مترًا حُفرت في أسبوعين شمال المدينة. سلمان الفارسيّ (رضي الله عنه): «إنّا كنّا بأرض فارس إذا حوصرنا خندقنا علينا». الأحزاب: حوالي عشرة آلاف رجل، ولذلك تُسمّى الغزوة أيضًا غزوة الأحزاب.',
            fr: 'Le jour du Furqān, c’est Badr : le 17 ramadan de l’an 2 de l’Hégire. Le mont Uḥud : c’est là que cinquante archers furent placés sur une butte pour protéger l’arrière. Le Khandaq (fossé) : environ 5544 mètres creusés en deux semaines au nord de Médine. Salmān al-Fārisī (que Dieu l’agrée) : « En Perse, quand on nous assiégeait, nous creusions un fossé. » Al-Aḥzāb, les Coalisés : environ dix mille hommes ; la bataille porte aussi ce nom.',
            en: 'The Day of the Furqān is Badr: 17 Ramadan, year 2 of the Hijra. Mount Uḥud: there fifty archers were posted on a hillock to guard the rear. The Khandaq (trench): about 5,544 metres dug in two weeks north of Madina. Salmān al-Fārisī (may God be pleased with him): “In Persia, when besieged, we dug a trench around us.” Al-Aḥzāb, the Confederates: about ten thousand men; the battle is also known by this name.',
          },
        },
      ],
    },

    // 24 — Blitz: speed round on the three battles
    {
      kind: 'blitz',
      id: 'blitz',
      title: { ar: 'جولة الغزوات السريعة', fr: 'Manche éclair des batailles', en: 'Battles speed round' },
      intro: {
        ar: 'اثنتا عشرة ثانية لكلّ عبارة — هل هي صحيحة أم خاطئة؟ يمكن لعبها مع القسم كلّه!',
        fr: 'Douze secondes par affirmation — vrai ou faux ? À jouer aussi avec toute la classe !',
        en: 'Twelve seconds per statement — true or false? Great to play with the whole class!',
      },
      secondsPerCard: 12,
      statements: [
        {
          id: 'g1',
          text: { ar: 'قاد أبو سفيان بن حرب قافلة قريش، ونجا بها من طريقٍ آخر على ساحل البحر.', fr: 'Abū Sufyān ibn Ḥarb conduisait la caravane de Quraysh et s’échappa par un autre chemin, le long de la mer.', en: 'Abū Sufyān ibn Ḥarb led Quraysh’s caravan and escaped by another road along the seacoast.' },
          answer: true,
          explanation: { ar: 'صحيح: أبو سفيان بن حرب؛ سلك طريقًا آخر على ساحل البحر.', fr: 'Vrai : Abū Sufyān ibn Ḥarb ; il prit un autre chemin, le long de la mer.', en: 'True: Abū Sufyān ibn Ḥarb; he took another road along the seacoast.' },
        },
        {
          id: 'g2',
          text: { ar: 'كانت خطّة الحُباب بن المنذر (رضي الله عنه) في بدر أن يبتعد المسلمون عن الآبار كلّها.', fr: 'Le plan d’al-Ḥubāb ibn al-Mundhir (que Dieu l’agrée) à Badr était de s’éloigner de tous les puits.', en: 'Al-Ḥubāb ibn al-Mundhir’s plan (may God be pleased with him) at Badr was to move away from all the wells.' },
          answer: false,
          explanation: { ar: 'خطأ: جعل الآبار خلف المسلمين، وتغويرها إلّا واحدة يُحفر عليها حوض: «نشرب ولا يشربون».', fr: 'Faux : avoir les puits derrière soi, les combler sauf un, avec un bassin : « nous boirons et eux non ».', en: 'False: keep the wells behind the Muslims and fill them in but one, with a basin: “we drink and they do not”.' },
        },
        {
          id: 'g3',
          text: { ar: 'سُمّي يوم بدرٍ بيوم الفرقان لأنّ الله فرّق فيه بين الحقّ والباطل، وكان في 17 رمضان من السنة الثانية للهجرة.', fr: 'Badr est le « jour du Furqān » car Dieu y sépara le vrai du faux ; c’était le 17 ramadan de l’an 2 de l’Hégire.', en: 'Badr is the “Day of the Furqān” because God separated truth from falsehood on it; it was on 17 Ramadan, year 2 of the Hijra.' },
          answer: true,
          explanation: { ar: 'صحيح: فرّق الله فيه بين الحقّ والباطل؛ في 17 رمضان من السنة الثانية للهجرة.', fr: 'Vrai : Dieu y sépara le vrai du faux ; le 17 ramadan de l’an 2 de l’Hégire.', en: 'True: God separated truth from falsehood on it; 17 Ramadan, year 2 of the Hijra.' },
        },
        {
          id: 'g4',
          text: { ar: 'انهزم المسلمون في أحد مع أنّ الرماة لزموا الربوة حتى النهاية.', fr: 'Les musulmans furent défaits à Uḥud alors que les archers restèrent sur la butte jusqu’au bout.', en: 'The Muslims were defeated at Uḥud even though the archers held the hillock to the end.' },
          answer: false,
          explanation: { ar: 'خطأ: نزل أغلب الرماة عن الربوة لجمع الغنائم، فدار خالد بن الوليد خلفها وهاجم المسلمين من ظهورهم.', fr: 'Faux : la plupart des archers quittèrent la butte pour le butin ; Khālid ibn al-Walīd la contourna et attaqua par-derrière.', en: 'False: most archers left the hillock for the spoils; Khālid ibn al-Walīd circled behind it and attacked from the rear.' },
        },
        {
          id: 'g5',
          text: { ar: 'قالت امرأةٌ قُتل زوجها وأخوها وأبوها في أحد: «كلّ مصيبةٍ بعدك جَلَل»، أي صغيرة.', fr: 'Une femme qui perdit son mari, son frère et son père à Uḥud dit : « Tout malheur, après toi, est léger. »', en: 'A woman who lost her husband, brother and father at Uḥud said: “Every loss, after you, is small.”' },
          answer: true,
          explanation: { ar: 'صحيح: لمّا رأت الرسول ﷺ سالمًا هانت عليها كلّ مصيبة.', fr: 'Vrai : voyant le Prophète ﷺ sain et sauf, tout malheur lui parut léger.', en: 'True: seeing the Prophet ﷺ safe, every loss seemed small to her.' },
        },
        {
          id: 'g6',
          text: { ar: 'منع المسلمون المشركين من دخول المدينة بخندقٍ حُفر حولها من كلّ الجهات.', fr: 'Les musulmans empêchèrent les polythéistes d’entrer grâce à un fossé creusé tout autour de Médine.', en: 'The Muslims kept the polytheists out with a trench dug all round Madina.' },
          answer: false,
          explanation: { ar: 'خطأ: حُفر الخندق في الجهة المكشوفة شمال المدينة فقط، بمشورة سلمان الفارسيّ (رضي الله عنه).', fr: 'Faux : le fossé fut creusé du côté découvert, au nord, sur le conseil de Salmān al-Fārisī (que Dieu l’agrée).', en: 'False: the trench was dug only on the exposed northern side, on the advice of Salmān al-Fārisī (may God be pleased with him).' },
        },
        {
          id: 'g7',
          text: { ar: 'فشلت خطّة اليهود والمشركين حين زرع نُعيم بن مسعود (رضي الله عنه) الفرقة بينهم، ثمّ أرسل الله الريح والغبار.', fr: 'Le plan des juifs et des polythéistes échoua quand Nu‘aym ibn Mas‘ūd (que Dieu l’agrée) sema la division entre eux, puis Dieu envoya le vent et la poussière.', en: 'The plan of the Jews and the polytheists failed when Nu‘aym ibn Mas‘ūd (may God be pleased with him) sowed division among them, then God sent the wind and dust.' },
          answer: true,
          explanation: { ar: 'صحيح: زرع نُعيم الفرقة بينهم، ثمّ أرسل الله الريح والغبار فشتّتهم.', fr: 'Vrai : Nu‘aym sema la division, puis Dieu envoya le vent et la poussière qui les dispersèrent.', en: 'True: Nu‘aym sowed division, then God sent the wind and dust that scattered them.' },
        },
        {
          id: 'g8',
          text: { ar: 'أخرج الرسول ﷺ بني النضير من المدينة فاستقرّوا بالشام.', fr: 'Le Prophète ﷺ fit sortir Banū an-Naḍīr de Médine, et ils s’installèrent au Shām.', en: 'The Prophet ﷺ expelled Banū an-Naḍīr from Madina and they settled in Shām.' },
          answer: false,
          explanation: { ar: 'خطأ: أخرجهم بالقوّة لأنّهم خرقوا صحيفة المدينة وهمّوا بقتله، فاستقرّوا بخيبر.', fr: 'Faux : il les fit sortir par la force, car ils avaient violé la charte et voulu le tuer ; ils s’installèrent à Khaybar.', en: 'False: he expelled them by force because they violated the Charter and meant to kill him; they settled in Khaybar.' },
        },
      ],
    },

    // 25 — Quiz (slides «أجيب» + textbook «أنجز»)
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'اختبر نفسك', fr: 'Teste-toi', en: 'Test yourself' },
      intro: {
        ar: 'عشرة أسئلةٍ متنوّعة عن الغزوات الثلاث. خذ وقتك!',
        fr: 'Dix questions variées sur les trois batailles. Prends ton temps !',
        en: 'Ten varied questions on the three battles. Take your time!',
      },
      questions: [
        {
          id: 'z1',
          type: 'mcq',
          question: { ar: 'لماذا عزم المسلمون على ترصّد قافلة قريش؟', fr: 'Pourquoi les musulmans décidèrent-ils de guetter la caravane de Quraysh ?', en: 'Why did the Muslims decide to watch for Quraysh’s caravan?' },
          options: [
            { id: 'a', label: { ar: 'لاسترجاع الأموال المنهوبة من المهاجرين', fr: 'Pour récupérer les biens pillés aux Émigrés', en: 'To recover the wealth looted from the Emigrants' } },
            { id: 'b', label: { ar: 'للتجارة مع أهل الشام', fr: 'Pour commercer avec le Shām', en: 'To trade with the people of Shām' } },
            { id: 'c', label: { ar: 'للسفر إلى مكّة', fr: 'Pour voyager à La Mecque', en: 'To travel to Makkah' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'نهب المشركون أرزاق المهاجرين في مكّة وهدّدوهم، فخرج الرسول ﷺ مع أصحابه لاعتراض القافلة واسترجاع الأموال المنهوبة.',
            fr: 'Les polythéistes avaient pillé les biens des Émigrés à La Mecque et les menaçaient ; le Prophète ﷺ sortit avec ses Compagnons intercepter la caravane et récupérer ces biens.',
            en: 'The polytheists had looted the Emigrants’ belongings in Makkah and threatened them; the Prophet ﷺ went out with his Companions to intercept the caravan and recover that wealth.',
          },
        },
        {
          id: 'z2',
          type: 'mcq',
          question: { ar: 'لماذا أتمّت قريشٌ طريقها إلى بدر ولم تعد إلى مكّة؟', fr: 'Pourquoi Quraysh poursuivit-elle jusqu’à Badr au lieu de rentrer ?', en: 'Why did Quraysh carry on to Badr instead of returning to Makkah?' },
          options: [
            { id: 'a', label: { ar: 'لأنّ القافلة لم تنجُ', fr: 'La caravane n’était pas sauvée', en: 'The caravan was not safe' } },
            { id: 'b', label: { ar: 'لإصرار أبي جهل على إظهار بأس قريش', fr: 'Abū Jahl voulait montrer la force de Quraysh', en: 'Abū Jahl insisted on showing Quraysh’s might' } },
            { id: 'c', label: { ar: 'لأنّ أبا سفيان طلب ذلك', fr: 'Abū Sufyān le demanda', en: 'Abū Sufyān asked for it' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'نجا أبو سفيان بالقافلة وكتب إلى قريشٍ أن ترجع، لكنّ أبا جهلٍ أصرّ أن يصل إلى بدر ويُظهر للعرب بأس قريش.',
            fr: 'Abū Sufyān sauva la caravane et écrivit à Quraysh de rentrer, mais Abū Jahl tint à atteindre Badr pour montrer aux Arabes la force de Quraysh.',
            en: 'Abū Sufyān saved the caravan and wrote to Quraysh to return, but Abū Jahl insisted on reaching Badr to show the Arabs Quraysh’s might.',
          },
        },
        {
          id: 'z3',
          type: 'ordering',
          question: { ar: 'رتّب الأحداث من الأقدم إلى الأحدث.', fr: 'Range les événements du plus ancien au plus récent.', en: 'Put the events in order, earliest first.' },
          items: [
            { id: 'o1', label: { ar: 'غزوة بدر', fr: 'La bataille de Badr', en: 'The battle of Badr' } },
            { id: 'o2', label: { ar: 'إجلاء بني قينقاع', fr: 'L’expulsion de Banū Qaynuqā‘', en: 'The expulsion of Banū Qaynuqā‘' } },
            { id: 'o3', label: { ar: 'غزوة أحد', fr: 'La bataille d’Uḥud', en: 'The battle of Uḥud' } },
            { id: 'o4', label: { ar: 'إجلاء بني النضير', fr: 'L’expulsion de Banū an-Naḍīr', en: 'The expulsion of Banū an-Naḍīr' } },
            { id: 'o5', label: { ar: 'غزوة الخندق', fr: 'La bataille du Fossé', en: 'The battle of the Trench' } },
          ],
          explanation: {
            ar: 'بدر (رمضان، 2 هـ)، ثمّ بنو قينقاع في شوّال بعدها، ثمّ أحد بعد عامٍ من بدر، ثمّ بنو النضير (بداية 4 هـ)، ثمّ الخندق (5 هـ).',
            fr: 'Badr (ramadan, an 2), puis Banū Qaynuqā‘ en shawwāl, puis Uḥud un an après Badr, puis Banū an-Naḍīr (début de l’an 4), puis le Fossé (an 5).',
            en: 'Badr (Ramadan, 2 AH), then Banū Qaynuqā‘ in Shawwāl, then Uḥud a year after Badr, then Banū an-Naḍīr (start of 4 AH), then the Trench (5 AH).',
          },
        },
        {
          id: 'z4',
          type: 'mcq',
          question: { ar: 'ما الخطّة التي اعتمدها المسلمون في أحد؟', fr: 'Quel plan les musulmans adoptèrent-ils à Uḥud ?', en: 'What plan did the Muslims adopt at Uḥud?' },
          options: [
            { id: 'a', label: { ar: 'حفر خندقٍ شمال المدينة', fr: 'Creuser un fossé au nord', en: 'Digging a trench to the north' } },
            { id: 'b', label: { ar: 'تغوير الآبار إلّا واحدة', fr: 'Combler les puits sauf un', en: 'Filling in the wells but one' } },
            { id: 'c', label: { ar: 'خمسون راميًا على ربوةٍ يحمون ظهر الجيش', fr: 'Cinquante archers sur une butte protégeant l’arrière', en: 'Fifty archers on a hillock guarding the rear' } },
          ],
          correctId: 'c',
          explanation: {
            ar: 'نظّم الرسول ﷺ سبعمائة رجل، ووضع خمسين من أمهر الرماة على ربوةٍ لحماية ظهر الجيش وأمرهم بالتزام المكان.',
            fr: 'Le Prophète ﷺ rangea sept cents hommes et plaça cinquante des meilleurs archers sur une butte pour protéger l’arrière, avec ordre de ne pas bouger.',
            en: 'The Prophet ﷺ arranged seven hundred men and placed fifty of the best archers on a hillock to guard the rear, ordering them to hold their position.',
          },
        },
        {
          id: 'z5',
          type: 'truefalse',
          question: { ar: 'كاد يُصاب الرسول ﷺ بالأذى في حيّ بني قريظة.', fr: 'Le Prophète ﷺ faillit être blessé dans le quartier de Banū Qurayẓa.', en: 'The Prophet ﷺ was nearly harmed in the quarter of Banū Qurayẓa.' },
          answer: false,
          explanation: {
            ar: 'كان ذلك في حيّ بني النضير، حين همّ أحدهم بإلقاء حجر الرحى عليه. أمّا بنو قريظة فانضمّوا إلى الأحزاب أيّام الخندق.',
            fr: 'C’était dans le quartier de Banū an-Naḍīr, où l’un d’eux voulut lui jeter une meule. Banū Qurayẓa, eux, rejoignirent les Coalisés au temps du Fossé.',
            en: 'That was in the quarter of Banū an-Naḍīr, where one of them meant to drop a millstone on him. Banū Qurayẓa were the ones who joined the Confederates at the Trench.',
          },
        },
        {
          id: 'z6',
          type: 'truefalse',
          question: { ar: 'دار الخندق المحفور حول المدينة كلّها.', fr: 'Le fossé faisait tout le tour de Médine.', en: 'The trench ran all the way round Madina.' },
          answer: false,
          explanation: {
            ar: 'حُفر في الجهة المكشوفة فقط، شمال المدينة، بين جبلٍ وجبل؛ فالجبال تحصّن بقيّة الجهات.',
            fr: 'Il fut creusé seulement du côté découvert, au nord, d’une hauteur à l’autre ; les montagnes protègent les autres côtés.',
            en: 'It was dug only on the exposed side, to the north, from one height to the other; the mountains protect the other sides.',
          },
        },
        {
          id: 'z7',
          type: 'truefalse',
          question: { ar: 'حوالي 900 من المسلمين قاموا بحفر الخندق.', fr: 'Environ 900 musulmans ont creusé le fossé.', en: 'About 900 Muslims dug the trench.' },
          answer: false,
          explanation: {
            ar: 'أنجز الحفر نحو 1500 صحابيّ من إجماليّ 3000.',
            fr: 'Environ 1500 Compagnons, sur 3000 au total, ont creusé.',
            en: 'About 1,500 Companions, out of 3,000 in all, did the digging.',
          },
        },
        {
          id: 'z8',
          type: 'truefalse',
          question: { ar: 'أخرج الرسول ﷺ بني النضير من المدينة بعد خيانتهم.', fr: 'Le Prophète ﷺ fit sortir Banū an-Naḍīr de Médine après leur trahison.', en: 'The Prophet ﷺ expelled Banū an-Naḍīr from Madina after their treachery.' },
          answer: true,
          explanation: {
            ar: 'خرقوا صحيفة عهد المدينة وهمّوا بقتله، فأمرهم بالخروج فلم يستجيبوا، فأخرجهم بالقوّة واستقرّوا بخيبر.',
            fr: 'Ils violèrent la charte de Médine et voulurent le tuer ; il leur ordonna de partir, ils refusèrent, il les fit sortir par la force et ils s’installèrent à Khaybar.',
            en: 'They violated the Charter of Madina and meant to kill him; he ordered them to leave, they refused, so he expelled them by force and they settled in Khaybar.',
          },
        },
        {
          id: 'z9',
          type: 'mcq',
          question: { ar: 'لم يتّفق اليهود مع المشركين في ضرب المسلمين لأنّهم…', fr: 'Les juifs et les polythéistes ne s’entendirent pas pour frapper les musulmans car…', en: 'The Jews and the polytheists failed to agree on striking the Muslims because…' },
          options: [
            { id: 'a', label: { ar: 'لم يأمنوا مكر بعضهم', fr: 'ils se méfiaient les uns des autres', en: 'they did not trust one another' } },
            { id: 'b', label: { ar: 'صعُب الاتّصال بينهم', fr: 'ils communiquaient difficilement', en: 'contact between them was hard' } },
            { id: 'c', label: { ar: 'أرادوا الصلح مع المسلمين', fr: 'ils voulaient la paix', en: 'they wanted peace' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'بعد مكيدة نُعيم (رضي الله عنه) خاف كلّ فريقٍ من غدر الآخر، فلم تتقدّم قريش.',
            fr: 'Après la ruse de Nu‘aym (que Dieu l’agrée), chaque camp craignit la trahison de l’autre, et Quraysh n’avança pas.',
            en: 'After Nu‘aym’s ruse (may God be pleased with him), each side feared the other’s treachery, and Quraysh did not advance.',
          },
        },
        {
          id: 'z10',
          type: 'matching',
          question: { ar: 'صِل كلّ غزوةٍ بما يميّزها.', fr: 'Relie chaque bataille à ce qui la distingue.', en: 'Match each battle with what marks it out.' },
          pairs: [
            { id: 'p1', left: { ar: 'بدر', fr: 'Badr', en: 'Badr' }, right: { ar: 'يوم الفرقان والملائكة', fr: 'Le jour du Furqān et les anges', en: 'The Day of the Furqān and the angels' } },
            { id: 'p2', left: { ar: 'أحد', fr: 'Uḥud', en: 'Uḥud' }, right: { ar: 'نزول الرماة عن الربوة', fr: 'Les archers quittent la butte', en: 'The archers leave the hillock' } },
            { id: 'p3', left: { ar: 'الخندق', fr: 'Le Fossé', en: 'The Trench' }, right: { ar: 'فكرة سلمان والريح', fr: 'L’idée de Salmān et le vent', en: 'Salmān’s idea and the wind' } },
          ],
          explanation: {
            ar: 'بدر: نصرٌ فرّق بين الحقّ والباطل. أحد: درسٌ في الطاعة. الخندق: خطّةٌ وصبرٌ ثمّ جندٌ من الريح.',
            fr: 'Badr : une victoire qui sépara le vrai du faux. Uḥud : une leçon d’obéissance. Le Fossé : un plan, de la patience, puis les soldats du vent.',
            en: 'Badr: a victory that separated truth from falsehood. Uḥud: a lesson in obedience. The Trench: a plan, patience, then soldiers of wind.',
          },
        },
      ],
    },

    // 26 — Values (Uḥud slide 7 «أعتبر» + textbook «أعتبر من قدوتي»)
    {
      kind: 'value',
      id: 'value',
      title: { ar: 'أعتبر', fr: 'J’en tire des leçons', en: 'Lessons I take' },
      prompt: {
        ar: 'فريقك متقدّمٌ في المباراة، والمدرّب أمرك أن تبقى في الدفاع. الكرة بعيدة والكلّ يهاجم… ماذا تفعل؟',
        fr: 'Ton équipe mène et l’entraîneur t’a dit de rester en défense. Le ballon est loin, tout le monde attaque… que fais-tu ?',
        en: 'Your team is ahead and the coach told you to stay in defence. The ball is far away and everyone is attacking… what do you do?',
      },
      choices: [
        {
          id: 'a',
          label: { ar: 'ألزم مكاني حتى يأذن المدرّب', fr: 'Je garde mon poste jusqu’à l’accord de l’entraîneur', en: 'I hold my position until the coach says otherwise' },
          isCorrect: true,
          feedback: {
            ar: 'أحسنت! هذا درس الرماة يوم أحد: الالتزام بالأمر يحمي الفريق كلّه.',
            fr: 'Bravo ! C’est la leçon des archers d’Uḥud : respecter la consigne protège toute l’équipe.',
            en: 'Well done! That is the archers’ lesson from Uḥud: keeping to the order protects the whole team.',
          },
        },
        {
          id: 'b',
          label: { ar: 'أترك مكاني لأشارك في الهجوم', fr: 'Je quitte mon poste pour attaquer', en: 'I leave my post to join the attack' },
          isCorrect: false,
          feedback: {
            ar: 'فكّر في الربوة: حين نزل أغلب الرماة انفتحت ثغرةٌ في ظهر الجيش. مكانك مهمٌّ حتى لو بدا هادئًا.',
            fr: 'Pense à la butte : quand la plupart des archers sont descendus, une brèche s’est ouverte dans le dos de l’armée. Ton poste compte, même s’il paraît calme.',
            en: 'Think of the hillock: when most archers came down, a gap opened at the army’s back. Your post matters, even when it seems quiet.',
          },
        },
        {
          id: 'c',
          label: { ar: 'أجلس لأستريح فالفوز مضمون', fr: 'Je me repose, la victoire est assurée', en: 'I sit down to rest, the win is certain' },
          isCorrect: false,
          feedback: {
            ar: 'تقريبًا… لكنّ المسلمين يوم أحد ظنّوا أنّها ساعة النصر قبل أوانها. النصر لا يكتمل إلّا بالثبات حتى النهاية.',
            fr: 'Presque… mais à Uḥud, les musulmans crurent trop tôt à la victoire. Elle n’est acquise que si l’on tient jusqu’au bout.',
            en: 'Almost… but at Uḥud the Muslims thought the hour of victory had come too soon. A win is only complete if you hold firm to the end.',
          },
        },
      ],
      valuesTitle: { ar: 'ثماني عِبرٍ من الغزوات', fr: 'Huit leçons tirées des batailles', en: 'Eight lessons from the battles' },
      values: [
        {
          id: 'v1',
          value: { ar: 'طاعة الرسول ﷺ', fr: 'Obéir au Prophète ﷺ', en: 'Obeying the Prophet ﷺ' },
          evidence: {
            ar: 'عصيان أوامر رسول الله ﷺ يؤدّي إلى الخسارة والهلكة، كما وقع حين ترك أغلب الرماة الربوة.',
            fr: 'Désobéir aux ordres du Messager de Dieu ﷺ mène à la perte et à la ruine, comme lorsque la plupart des archers quittèrent la butte.',
            en: 'Disobeying the orders of God’s Messenger ﷺ leads to loss and ruin, as when most of the archers left the hillock.',
          },
        },
        {
          id: 'v2',
          value: { ar: 'الأخذ بالأسباب مع التوكّل', fr: 'Agir et s’en remettre à Dieu', en: 'Taking the means, trusting in God' },
          evidence: {
            ar: 'للنصر أسباب، من أتى بها متّكلًا على الله انتصر: آبار بدر، ورماة أحد، وخندق المدينة.',
            fr: 'La victoire a des causes ; qui les réunit en s’appuyant sur Dieu l’emporte : les puits de Badr, les archers d’Uḥud, le fossé de Médine.',
            en: 'Victory has its causes; whoever takes them while relying on God prevails: the wells of Badr, the archers of Uḥud, the trench of Madina.',
          },
        },
        {
          id: 'v3',
          value: { ar: 'التعلّم من الهزيمة', fr: 'Apprendre de la défaite', en: 'Learning from defeat' },
          evidence: {
            ar: 'لا يجب الاستسلام للهزيمة، فبالتجارب يتعلّم المسلم: خرج المسلمون في اليوم الموالي لأحد حتى رحلت قريش.',
            fr: 'Il ne faut pas céder à la défaite : c’est par l’expérience que le musulman apprend. Dès le lendemain d’Uḥud, les musulmans ressortirent, et Quraysh s’en alla.',
            en: 'One must not give in to defeat: a Muslim learns through experience. The very day after Uḥud the Muslims marched out again, and Quraysh left.',
          },
        },
        {
          id: 'v4',
          value: { ar: 'الحزم مع ناقضي العهود', fr: 'La fermeté face aux parjures', en: 'Firmness with covenant-breakers' },
          evidence: {
            ar: 'التعامل بحزمٍ مع من ينقض العهود ويُخلفها ويتربّص السوء، كما فعل ﷺ مع بني قينقاع.',
            fr: 'Agir avec fermeté envers qui rompt les pactes, manque à sa parole et guette l’occasion de nuire, comme il ﷺ le fit avec Banū Qaynuqā‘.',
            en: 'Dealing firmly with those who break covenants, go back on them and lie in wait to do harm, as he ﷺ did with Banū Qaynuqā‘.',
          },
        },
        {
          id: 'v5',
          value: { ar: 'السرّ والكتمان', fr: 'La discrétion', en: 'Discretion' },
          evidence: {
            ar: 'الاستعانة على قضاء الحوائج بالسرّ والكتمان: حرص المسلمون ألّا يصل خبر الخندق إلى المشركين.',
            fr: 'S’aider du secret pour mener ses affaires à bien : les musulmans veillèrent à ce que la nouvelle du fossé n’atteigne pas les polythéistes.',
            en: 'Seeking help in one’s affairs through secrecy: the Muslims took care that news of the trench did not reach the polytheists.',
          },
        },
        {
          id: 'v6',
          value: { ar: 'التواضع للرأي الأمثل', fr: 'S’incliner devant le meilleur avis', en: 'Humility before the best opinion' },
          evidence: {
            ar: 'التواضع للرأي الأمثل والمناسب للاستفادة من الخبرة: أخذ الرسول ﷺ برأي الحُباب في بدر وبرأي سلمان في الخندق.',
            fr: 'Accueillir humblement l’avis le meilleur pour profiter de l’expérience : le Prophète ﷺ suivit l’avis d’al-Ḥubāb à Badr et celui de Salmān au Fossé.',
            en: 'Humbly accepting the best and fittest opinion to benefit from experience: the Prophet ﷺ took al-Ḥubāb’s advice at Badr and Salmān’s at the Trench.',
          },
        },
        {
          id: 'v7',
          value: { ar: 'الحذر ممّن لا عهد له', fr: 'Se garder de qui n’a pas de parole', en: 'Caution with those who keep no covenant' },
          evidence: {
            ar: 'إبعاد من لا عهد له عن مصالح المسلمين لأنّه خطرٌ كبير، كما ظهر من غدر بني النضير وبني قريظة.',
            fr: 'Écarter des intérêts des musulmans celui qui ne tient pas ses engagements, car c’est un grand danger, comme le montra la trahison de Banū an-Naḍīr et de Banū Qurayẓa.',
            en: 'Keeping those who honour no covenant away from the Muslims’ interests, for they are a great danger, as the treachery of Banū an-Naḍīr and Banū Qurayẓa showed.',
          },
        },
        {
          id: 'v8',
          value: { ar: 'القائد قدوة', fr: 'Le chef donne l’exemple', en: 'The leader sets the example' },
          evidence: {
            ar: 'القائد مسؤولٌ في القيادة، جنديٌّ في العمل: شارك الرسول ﷺ في حفر الخندق وهو يربط الحجر على بطنه من الجوع.',
            fr: 'Le chef est responsable dans le commandement et soldat dans le travail : le Prophète ﷺ creusa le fossé, une pierre attachée sur le ventre contre la faim.',
            en: 'The leader is responsible in command and a soldier in the work: the Prophet ﷺ dug the trench with a stone tied to his stomach against hunger.',
          },
        },
      ],
    },

    // 27 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'للنصر أسباب: مشورةٌ وطاعةٌ وعملٌ وصبر، ثمّ توكّلٌ على الله. بها انتصر المسلمون في بدر، وبتركها انقلبت أحد، وبها صمدوا عند الخندق فخرجوا منه أقوى.',
        fr: 'La victoire a ses causes : consultation, obéissance, travail et patience, puis confiance en Dieu. Avec elles, les musulmans vainquirent à Badr ; sans elles, Uḥud bascula ; avec elles, ils tinrent au Fossé et en sortirent plus forts.',
        en: 'Victory has its causes: consultation, obedience, hard work and patience, then trust in God. With them the Muslims won at Badr; without them Uḥud turned; with them they held at the Trench and came out stronger.',
      },
      learned: [
        {
          ar: 'خرج المسلمون لاسترجاع أموالهم المنهوبة، فأصرّ أبو جهلٍ على الحرب في بدر.',
          fr: 'Les musulmans sortirent récupérer leurs biens pillés ; Abū Jahl tint à la guerre, à Badr.',
          en: 'The Muslims went out to recover their looted wealth; Abū Jahl insisted on war at Badr.',
        },
        {
          ar: 'بدر، يوم الفرقان (17 رمضان، 2 هـ): نحو 300 انتصروا على أكثر من ألف، فذلّت قريشٌ وعزّ المسلمون.',
          fr: 'Badr, jour du Furqān (17 ramadan, an 2) : environ 300 l’emportèrent sur plus de mille ; Quraysh fut abaissée, les musulmans honorés.',
          en: 'Badr, the Day of the Furqān (17 Ramadan, 2 AH): about 300 beat over a thousand; Quraysh was humbled and the Muslims honoured.',
        },
        {
          ar: 'في أحد نزل أغلب الرماة عن الربوة، فانقلب النصر وجُرح الرسول ﷺ.',
          fr: 'À Uḥud, la plupart des archers quittèrent la butte : la victoire bascula et le Prophète ﷺ fut blessé.',
          en: 'At Uḥud most archers left the hillock: the victory flipped and the Prophet ﷺ was wounded.',
        },
        {
          ar: 'لم يستسلم المسلمون: خرجوا في اليوم الموالي فرحلت قريشٌ إلى مكّة.',
          fr: 'Les musulmans ne cédèrent pas : ils ressortirent le lendemain et Quraysh regagna La Mecque.',
          en: 'The Muslims did not give in: they marched out the next day and Quraysh went back to Makkah.',
        },
        {
          ar: 'في السنة الخامسة للهجرة حفر المسلمون خندقًا بمشورة سلمان (رضي الله عنه)، فأوقف حوالي عشرة آلافٍ من الأحزاب.',
          fr: 'En l’an 5 de l’Hégire, les musulmans creusèrent un fossé sur le conseil de Salmān (que Dieu l’agrée) : il arrêta environ dix mille Coalisés.',
          en: 'In year 5 of the Hijra the Muslims dug a trench on Salmān’s advice (may God be pleased with him): it stopped about ten thousand Confederates.',
        },
        {
          ar: 'صبر المسلمون شهرًا، ثمّ فرّقت مكيدةُ نُعيم والريحُ الأحزاب، وعوقبت بنو قريظة على خيانتها، وأصبح المسلمون أقوى.',
          fr: 'Les musulmans patientèrent un mois ; la ruse de Nu‘aym et le vent dispersèrent les Coalisés, Banū Qurayẓa fut punie de sa trahison et les musulmans en sortirent plus forts.',
          en: 'The Muslims held out for a month; Nu‘aym’s ruse and the wind scattered the Confederates, Banū Qurayẓa were punished for their treachery, and the Muslims emerged stronger.',
        },
      ],
    },
  ],
}
