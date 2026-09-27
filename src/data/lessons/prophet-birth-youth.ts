import type { Lesson } from '../types'

const IMG = '/images/lessons/prophet-birth-youth'

export const prophetBirthYouth: Lesson = {
  id: 'prophet-birth-youth',
  gradeId: 'history-ibadi-g1',
  moduleId: 'history-ibadi-g1',
  semesterId: 'history-ibadi-g1-s1',
  order: 1,
  status: 'published',
  estimatedMinutes: 20,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'سماء ليلية مرصّعة بالنجوم فوق وادي مكة القديم',
    fr: 'Ciel étoilé au-dessus de l’ancienne vallée de la Mecque',
    en: 'Starry night sky above the ancient valley of Makkah',
  },
  title: {
    ar: 'ميلاد الرسول ﷺ، نشأته وشبابه',
    fr: 'La naissance du Prophète ﷺ, son enfance et sa jeunesse',
    en: 'The Birth of Prophet Muhammad ﷺ, His Childhood and Youth',
  },
  description: {
    ar: 'عُد بالزمن إلى مكة قبل أكثر من 1400 سنة، واكتشف ميلاد النبي محمد ﷺ وطفولته وشبابه.',
    fr: 'Remonte le temps jusqu’à la Mecque, il y a plus de 1400 ans, et découvre la naissance, l’enfance et la jeunesse du Prophète Muhammad ﷺ.',
    en: 'Travel back to Makkah more than 1400 years ago and discover the birth, childhood and youth of Prophet Muhammad ﷺ.',
  },

  sections: [
    // 01 — Hook
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'سماء ليلية مرصّعة بالنجوم فوق وادي مكة القديم',
        fr: 'Ciel étoilé au-dessus de l’ancienne vallée de la Mecque',
        en: 'Starry night sky above the ancient valley of Makkah',
      },
      title: {
        ar: 'ليلة فوق جزيرة العرب',
        fr: 'Une nuit au-dessus de l’Arabie',
        en: 'A night above Arabia',
      },
      question: {
        ar: 'هل تستطيع أن تتخيّل مكة قبل أكثر من 1400 سنة؟',
        fr: 'Peux-tu imaginer la Mecque il y a plus de 1400 ans ?',
        en: 'Can you imagine Makkah more than 1400 years ago?',
      },
      intro: {
        ar: 'وادٍ بين الجبال، وبيتٌ عتيق في وسطه، وقوافل تأتي وتذهب. هنا وُلد محمد ﷺ. هيّا نكتشف قصته.',
        fr: 'Une vallée entre les montagnes, une maison antique en son centre, des caravanes qui vont et viennent. C’est ici qu’est né Muhammad ﷺ. Découvrons son histoire.',
        en: 'A valley between mountains, an ancient House at its centre, caravans coming and going. This is where Muhammad ﷺ was born. Let’s discover his story.',
      },
    },

    // 02 — Discover Makkah
    {
      kind: 'explorer',
      id: 'explore-makkah',
      title: { ar: 'استكشف مكة', fr: 'Explore la Mecque', en: 'Explore Makkah' },
      intro: {
        ar: 'اضغط على النقاط المضيئة لتكتشف مكة كما كانت.',
        fr: 'Touche les points lumineux pour découvrir la Mecque d’autrefois.',
        en: 'Tap the glowing points to discover Makkah as it was.',
      },
      image: `${IMG}/makkah.png`,
      imageAlt: {
        ar: 'رسم توضيحي لوادي مكة القديم: الكعبة في الوسط، بيوت من طين، وجبال حولها',
        fr: 'Illustration de l’ancienne Mecque : la Kaaba au centre, maisons en terre, montagnes autour',
        en: 'Illustration of ancient Makkah: the Kaaba at the centre, mud-brick houses, mountains around',
      },
      hotspots: [
        {
          id: 'kaaba',
          x: 51,
          y: 57,
          label: { ar: 'الكعبة', fr: 'La Kaaba', en: 'The Kaaba' },
          description: {
            ar: 'بيت الله الحرام، رفع قواعده إبراهيم وإسماعيل عليهما السلام. كان قلبَ مكة، يقصده الناس من كل مكان.',
            fr: 'La Maison sacrée de Dieu, dont Ibrāhīm et Ismā‘īl (paix sur eux) élevèrent les fondations. C’était le cœur de la Mecque, visité de partout.',
            en: 'The Sacred House of God, whose foundations were raised by Ibrāhīm and Ismā‘īl (peace be upon them). It was the heart of Makkah, visited from everywhere.',
          },
        },
        {
          id: 'zamzam',
          x: 51,
          y: 76,
          label: { ar: 'بئر زمزم', fr: 'Le puits de Zamzam', en: 'The Zamzam well' },
          description: {
            ar: 'بئر مباركة قرب الكعبة. في وادٍ بلا أنهار، كان ماؤها سببًا لحياة الناس في مكة.',
            fr: 'Un puits béni près de la Kaaba. Dans une vallée sans rivière, son eau permettait aux gens d’y vivre.',
            en: 'A blessed well near the Kaaba. In a valley without rivers, its water made life in Makkah possible.',
          },
        },
        {
          id: 'quraysh',
          x: 73,
          y: 80,
          label: { ar: 'قريش', fr: 'Quraysh', en: 'Quraysh' },
          description: {
            ar: 'أكبر قبائل مكة. كانت تخدم الكعبة وتستقبل زوّارها. ومن قريش وُلد محمد ﷺ، من بني هاشم.',
            fr: 'La grande tribu de la Mecque, au service de la Kaaba et de ses visiteurs. Muhammad ﷺ est né dans Quraysh, du clan des Banū Hāshim.',
            en: 'The leading tribe of Makkah, serving the Kaaba and its visitors. Muhammad ﷺ was born into Quraysh, in the clan of Banū Hāshim.',
          },
        },
        {
          id: 'trade',
          x: 90,
          y: 16,
          label: { ar: 'طرق القوافل', fr: 'Routes des caravanes', en: 'Caravan routes' },
          description: {
            ar: 'كانت قوافل قريش ترحل في الشتاء إلى اليمن وفي الصيف إلى الشام، وقد ذكر القرآن ذلك في سورة قريش.',
            fr: 'Les caravanes de Quraysh allaient l’hiver au Yémen et l’été en Syrie (Shām) — le Coran l’évoque dans la sourate Quraysh.',
            en: 'Quraysh caravans travelled to Yemen in winter and to Syria (Shām) in summer — the Qur’an mentions this in Surah Quraysh.',
          },
        },
        {
          id: 'mountains',
          x: 22,
          y: 22,
          label: { ar: 'الجبال', fr: 'Les montagnes', en: 'The mountains' },
          description: {
            ar: 'تحيط الجبال الصخرية بمكة من كل جانب، فهي وادٍ حارّ قليل الزرع.',
            fr: 'Des montagnes rocheuses entourent la Mecque : une vallée chaude, où peu de choses poussent.',
            en: 'Rocky mountains surround Makkah on every side: a hot valley where little grows.',
          },
        },
      ],
    },

    // 03 — The birth: order the events
    {
      kind: 'sorting',
      id: 'birth-order',
      title: { ar: 'الميلاد', fr: 'La naissance', en: 'The birth' },
      intro: {
        ar: 'وُلد محمد ﷺ في مكة في «عام الفيل». رتّب هذه الأحداث من الأقدم إلى الأحدث.',
        fr: 'Muhammad ﷺ est né à la Mecque durant « l’Année de l’Éléphant ». Range ces événements du plus ancien au plus récent.',
        en: 'Muhammad ﷺ was born in Makkah in “the Year of the Elephant”. Order these events from earliest to latest.',
      },
      image: `${IMG}/birth.png`,
      imageAlt: {
        ar: 'فجر هادئ فوق بيوت مكة مع نجمة ساطعة في السماء',
        fr: 'Aube paisible sur les maisons de la Mecque, une étoile brillante dans le ciel',
        en: 'A calm dawn over the houses of Makkah, a bright star in the sky',
      },
      items: [
        {
          id: 'father',
          label: {
            ar: 'وفاة والده عبد الله',
            fr: 'Décès de son père ‘Abdullāh',
            en: 'His father ‘Abdullāh passes away',
          },
        },
        {
          id: 'birth',
          label: {
            ar: 'ولادته ﷺ في مكة',
            fr: 'Sa naissance à la Mecque',
            en: 'His birth in Makkah',
          },
        },
        {
          id: 'halima',
          label: {
            ar: 'رضاعته عند حليمة السعدية في البادية',
            fr: 'Il est nourri par Ḥalīma as-Sa‘diyya dans le désert',
            en: 'He is nursed by Ḥalīma as-Sa‘diyya in the desert',
          },
        },
        {
          id: 'mother',
          label: {
            ar: 'وفاة والدته آمنة',
            fr: 'Décès de sa mère Āmina',
            en: 'His mother Āmina passes away',
          },
        },
        {
          id: 'uncle',
          label: {
            ar: 'كفالة عمّه أبي طالب',
            fr: 'Son oncle Abū Ṭālib le prend en charge',
            en: 'His uncle Abū Ṭālib takes care of him',
          },
        },
      ],
      explanation: {
        ar: 'تُوفّي والده قبل ولادته، فوُلد يتيمًا. ثم رضع في البادية، وتوفيت أمه وهو في نحو السادسة، فكفله جده عبد المطلب، ثم عمّه أبو طالب.',
        fr: 'Son père mourut avant sa naissance : il naquit orphelin. Puis il fut nourri dans le désert ; sa mère mourut quand il avait environ six ans ; son grand-père puis son oncle Abū Ṭālib s’occupèrent de lui.',
        en: 'His father died before he was born, so he was born an orphan. Then he was nursed in the desert; his mother died when he was about six; his grandfather, then his uncle Abū Ṭālib, cared for him.',
      },
    },

    // 04 — Childhood story cards
    {
      kind: 'story',
      id: 'childhood',
      title: { ar: 'الطفولة', fr: 'L’enfance', en: 'Childhood' },
      intro: {
        ar: 'ثلاث لقطات من طفولته ﷺ. اقلب كل بطاقة لتكتشفها.',
        fr: 'Trois moments de son enfance ﷺ. Retourne chaque carte pour la découvrir.',
        en: 'Three moments from his childhood ﷺ. Flip each card to discover it.',
      },
      cards: [
        {
          id: 'desert',
          image: `${IMG}/childhood-01.png`,
          imageAlt: {
            ar: 'خيام من الشعر في البادية عند الغروب',
            fr: 'Tentes en poil de chèvre dans le désert au coucher du soleil',
            en: 'Goat-hair tents in the desert at sunset',
          },
          fact: {
            ar: 'قضى سنواته الأولى في بادية بني سعد عند مرضعته حليمة السعدية، حيث الهواء النقي واللغة العربية الفصيحة.',
            fr: 'Il passa ses premières années chez les Banū Sa‘d, auprès de sa nourrice Ḥalīma : air pur et arabe le plus éloquent.',
            en: 'He spent his first years among Banū Sa‘d with his wet-nurse Ḥalīma: clean air and the purest Arabic.',
          },
        },
        {
          id: 'care',
          image: `${IMG}/childhood-02.png`,
          imageAlt: {
            ar: 'فناء بيت من الطين في مكة مع مصباح زيت مضاء',
            fr: 'Cour d’une maison en terre à la Mecque, une lampe à huile allumée',
            en: 'Courtyard of a mud-brick house in Makkah with a lit oil lamp',
          },
          fact: {
            ar: 'فقد أمه وهو في نحو السادسة، فرعاه جده عبد المطلب، ثم عمه أبو طالب الذي أحبّه كأحد أبنائه.',
            fr: 'Il perdit sa mère vers six ans ; son grand-père ‘Abd al-Muṭṭalib l’éleva, puis son oncle Abū Ṭālib, qui l’aima comme son propre fils.',
            en: 'He lost his mother at about six; his grandfather ‘Abd al-Muṭṭalib raised him, then his uncle Abū Ṭālib, who loved him like his own son.',
          },
          certainty: 'approximate',
        },
        {
          id: 'shepherd',
          image: `${IMG}/childhood-03.png`,
          imageAlt: {
            ar: 'قطيع أغنام على تلال صخرية قرب مكة',
            fr: 'Un troupeau de moutons sur des collines rocheuses près de la Mecque',
            en: 'A flock of sheep on rocky hills near Makkah',
          },
          fact: {
            ar: 'رعى الغنم لأهل مكة، وأخبر ﷺ أنّ كل الأنبياء رعوا الغنم.',
            fr: 'Il garda les moutons des Mecquois, et il ﷺ a dit que tous les prophètes avaient été bergers.',
            en: 'He tended sheep for the people of Makkah, and he ﷺ said that every prophet had been a shepherd.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'ماذا تعلّمنا من هذه المرحلة؟ اختر كل ما تراه صحيحًا.',
          fr: 'Que nous apprend cette étape ? Choisis tout ce qui te semble juste.',
          en: 'What does this stage teach us? Pick everything you think is right.',
        },
        options: [
          {
            id: 'patience',
            isRelevant: true,
            label: { ar: 'الصبر على فقد الأحبّة', fr: 'La patience face à la perte', en: 'Patience through loss' },
            explanation: {
              ar: 'فقد والديه صغيرًا، ومع ذلك نشأ قويًّا صابرًا.',
              fr: 'Il perdit ses parents très jeune, et grandit pourtant fort et patient.',
              en: 'He lost both parents young, yet grew up strong and patient.',
            },
          },
          {
            id: 'responsibility',
            isRelevant: true,
            label: { ar: 'تحمّل المسؤولية مبكرًا', fr: 'Être responsable tôt', en: 'Taking responsibility early' },
            explanation: {
              ar: 'رعي الغنم يعلّم الانتباه والرفق وحماية الضعيف.',
              fr: 'Garder un troupeau apprend l’attention, la douceur et la protection du plus faible.',
              en: 'Tending a flock teaches attention, gentleness and protecting the weak.',
            },
          },
          {
            id: 'family',
            isRelevant: true,
            label: { ar: 'قيمة العائلة والرعاية', fr: 'La valeur de la famille', en: 'The value of family care' },
            explanation: {
              ar: 'جده ثم عمه احتضناه وأحاطاه بالحب.',
              fr: 'Son grand-père puis son oncle l’ont entouré d’amour.',
              en: 'His grandfather and then his uncle surrounded him with love.',
            },
          },
          {
            id: 'wealth',
            isRelevant: false,
            label: { ar: 'أهمية الثراء', fr: 'L’importance de la richesse', en: 'The importance of wealth' },
            explanation: {
              ar: 'نشأ في حياة بسيطة؛ قيمته كانت في أخلاقه لا في ماله.',
              fr: 'Il a grandi simplement ; sa valeur était dans son caractère, pas dans sa fortune.',
              en: 'He grew up simply; his worth lay in his character, not his wealth.',
            },
          },
        ],
      },
    },

    // 05 — Youth timeline
    {
      kind: 'timeline',
      id: 'youth-timeline',
      title: { ar: 'الشباب', fr: 'La jeunesse', en: 'Youth' },
      intro: {
        ar: 'تنقّل بين المراحل واضغط على كل محطة لتكتشفها.',
        fr: 'Parcours les étapes et touche chaque station pour la découvrir.',
        en: 'Move through the stages and tap each stop to discover it.',
      },
      image: `${IMG}/youth.png`,
      imageAlt: {
        ar: 'قافلة جمال تسير في الصحراء عند الفجر',
        fr: 'Une caravane de chameaux dans le désert à l’aube',
        en: 'A camel caravan crossing the desert at dawn',
      },
      steps: [
        {
          id: 'childhood',
          period: { ar: 'الطفولة', fr: 'Enfance', en: 'Childhood' },
          label: { ar: 'يتيم في رعاية أهله', fr: 'Orphelin entouré des siens', en: 'An orphan cared for by family' },
          detail: {
            ar: 'نشأ في كفالة جده ثم عمه أبي طالب.',
            fr: 'Il grandit sous la protection de son grand-père, puis de son oncle Abū Ṭālib.',
            en: 'He grew up under the care of his grandfather, then his uncle Abū Ṭālib.',
          },
        },
        {
          id: 'shepherd',
          period: { ar: 'النشأة', fr: 'Adolescence', en: 'Growing up' },
          label: { ar: 'راعي الغنم', fr: 'Berger', en: 'Shepherd' },
          detail: {
            ar: 'رعى الغنم لأهل مكة مقابل أجر، فتعلّم العمل والاعتماد على النفس.',
            fr: 'Il garda les moutons des Mecquois contre salaire : il apprit le travail et l’autonomie.',
            en: 'He tended sheep for the people of Makkah for a wage, learning work and self-reliance.',
          },
        },
        {
          id: 'youth',
          period: { ar: 'الشباب', fr: 'Jeunesse', en: 'Youth' },
          label: { ar: 'الصادق الأمين', fr: 'Le véridique, le digne de confiance', en: 'The truthful, the trustworthy' },
          detail: {
            ar: 'عُرف بين قريش بالصدق والأمانة حتى لقّبوه «الأمين».',
            fr: 'Quraysh le connaissait pour sa sincérité et son honnêteté, au point de le surnommer « al-Amīn ».',
            en: 'Quraysh knew him for his truthfulness and honesty, so much that they called him “al-Amīn”.',
          },
        },
        {
          id: 'work',
          period: { ar: 'العمل', fr: 'Travail', en: 'Work' },
          label: { ar: 'التجارة إلى الشام', fr: 'Le commerce vers le Shām', en: 'Trade to Syria' },
          detail: {
            ar: 'خرج بتجارة لخديجة بنت خويلد إلى الشام، فعاد بربح وافر وسمعة طيبة.',
            fr: 'Il conduisit une caravane de Khadīja bint Khuwaylid vers le Shām et revint avec un beau profit et une excellente réputation.',
            en: 'He led a trading caravan for Khadīja bint Khuwaylid to Syria and returned with good profit and an excellent reputation.',
          },
        },
        {
          id: 'marriage',
          period: { ar: 'الزواج', fr: 'Mariage', en: 'Marriage' },
          label: { ar: 'الزواج من خديجة', fr: 'Mariage avec Khadīja', en: 'Marriage to Khadīja' },
          detail: {
            ar: 'أُعجبت خديجة رضي الله عنها بصدقه وأمانته، فتزوّجها وهو في نحو الخامسة والعشرين.',
            fr: 'Admirative de son honnêteté, Khadīja (qu’Allah l’agrée) l’épousa ; il avait environ vingt-cinq ans.',
            en: 'Impressed by his honesty, Khadīja (may God be pleased with her) married him; he was about twenty-five.',
          },
          certainty: 'approximate',
        },
      ],
    },

    // 06 — Timeline placement game
    {
      kind: 'placement',
      id: 'place-events',
      title: { ar: 'ضع الأحداث في مكانها', fr: 'Place les événements', en: 'Place the events' },
      intro: {
        ar: 'اسحب كل بطاقة إلى مرحلتها — أو اضغط على البطاقة ثم على المرحلة.',
        fr: 'Glisse chaque carte vers sa période — ou touche la carte puis la période.',
        en: 'Drag each card to its period — or tap the card, then the period.',
      },
      slots: [
        { id: 'birth-year', label: { ar: 'عام مولده', fr: 'L’année de sa naissance', en: 'The year of his birth' } },
        { id: 'childhood', label: { ar: 'طفولته', fr: 'Son enfance', en: 'His childhood' } },
        { id: 'youth', label: { ar: 'شبابه', fr: 'Sa jeunesse', en: 'His youth' } },
      ],
      cards: [
        {
          id: 'elephant',
          slotId: 'birth-year',
          label: { ar: 'حادثة أصحاب الفيل', fr: 'L’épisode de l’Éléphant', en: 'The event of the Elephant' },
          hint: {
            ar: 'سُمّي عام مولده «عام الفيل» بسبب هذه الحادثة.',
            fr: 'L’année de sa naissance porte le nom de cet épisode : « l’Année de l’Éléphant ».',
            en: 'The year of his birth is named after this event: “the Year of the Elephant”.',
          },
        },
        {
          id: 'banu-saad',
          slotId: 'childhood',
          label: { ar: 'العيش في بادية بني سعد', fr: 'La vie chez les Banū Sa‘d', en: 'Living among Banū Sa‘d' },
          hint: {
            ar: 'كان ذلك في سنواته الأولى، وهو رضيع ثم طفل صغير.',
            fr: 'C’était dans ses toutes premières années, bébé puis petit enfant.',
            en: 'This was in his very first years, as a baby and then a small child.',
          },
        },
        {
          id: 'grandfather',
          slotId: 'childhood',
          label: { ar: 'كفالة جدّه عبد المطلب', fr: 'La garde de son grand-père', en: 'His grandfather’s care' },
          hint: {
            ar: 'كفله جده بعد وفاة أمه، وتوفي الجد وهو في نحو الثامنة.',
            fr: 'Son grand-père l’accueillit après la mort de sa mère et mourut quand il avait environ huit ans.',
            en: 'His grandfather took him in after his mother died, and passed away when he was about eight.',
          },
        },
        {
          id: 'trade',
          slotId: 'youth',
          label: { ar: 'التجارة بمال خديجة', fr: 'Le commerce pour Khadīja', en: 'Trading for Khadīja' },
          hint: {
            ar: 'هذا عمل رجل شاب يُؤتمن على المال، وكان قبل زواجه بقليل.',
            fr: 'C’est le travail d’un jeune homme à qui l’on confie des biens, peu avant son mariage.',
            en: 'This is the work of a young man trusted with goods, shortly before his marriage.',
          },
        },
        {
          id: 'marriage',
          slotId: 'youth',
          label: { ar: 'الزواج من خديجة', fr: 'Le mariage avec Khadīja', en: 'Marriage to Khadīja' },
          hint: {
            ar: 'تزوّج وهو في نحو الخامسة والعشرين.',
            fr: 'Il s’est marié vers vingt-cinq ans.',
            en: 'He married at about twenty-five.',
          },
        },
      ],
    },

    // 07 — What can we learn?
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'ماذا نتعلّم؟', fr: 'Qu’apprenons-nous ?', en: 'What can we learn?' },
      prompt: {
        ar: 'صفة عُرف بها محمد ﷺ قبل البعثة، حتى صارت لقبًا له:',
        fr: 'Une qualité pour laquelle Muhammad ﷺ était connu avant la Révélation, au point de devenir son surnom :',
        en: 'A quality Muhammad ﷺ was known for before the revelation, so much that it became his title:',
      },
      choices: [
        {
          id: 'amin',
          isCorrect: true,
          label: { ar: 'الأمين', fr: 'Al-Amīn — le digne de confiance', en: 'Al-Amīn — the trustworthy' },
          feedback: {
            ar: 'صحيح! كان الناس يودعون عنده أماناتهم لأنهم يثقون به تمامًا.',
            fr: 'Exact ! Les gens lui confiaient leurs biens, car ils avaient totalement confiance en lui.',
            en: 'Correct! People left their valuables with him because they trusted him completely.',
          },
        },
        {
          id: 'rich',
          isCorrect: false,
          label: { ar: 'الغني', fr: 'Le riche', en: 'The wealthy' },
          feedback: {
            ar: 'نشأ يتيمًا يعمل بيديه؛ ابحث عن صفة في الأخلاق.',
            fr: 'Il a grandi orphelin et travaillait de ses mains ; cherche une qualité de caractère.',
            en: 'He grew up an orphan working with his hands; look for a quality of character.',
          },
        },
        {
          id: 'poet',
          isCorrect: false,
          label: { ar: 'الشاعر', fr: 'Le poète', en: 'The poet' },
          feedback: {
            ar: 'لم يكن ﷺ شاعرًا. فكّر فيما كان الناس يأتمنونه عليه.',
            fr: 'Il ﷺ n’était pas poète. Pense à ce que les gens lui confiaient.',
            en: 'He ﷺ was not a poet. Think about what people entrusted him with.',
          },
        },
      ],
      valuesTitle: {
        ar: 'قِيَم من القصة — اقلب البطاقة لترى أين ظهرت',
        fr: 'Des valeurs tirées du récit — retourne la carte pour voir où elles apparaissent',
        en: 'Values from the story — flip a card to see where it appears',
      },
      values: [
        {
          id: 'trust',
          value: { ar: 'الأمانة', fr: 'L’honnêteté', en: 'Trustworthiness' },
          evidence: {
            ar: 'لقّبته قريش «الأمين»، واختارته خديجة لتجارتها.',
            fr: 'Quraysh l’appelait « al-Amīn », et Khadīja lui confia son commerce.',
            en: 'Quraysh called him “al-Amīn”, and Khadīja chose him for her trade.',
          },
        },
        {
          id: 'patience',
          value: { ar: 'الصبر', fr: 'La patience', en: 'Patience' },
          evidence: {
            ar: 'فقد أباه وأمه وجده وهو صغير.',
            fr: 'Il perdit son père, sa mère et son grand-père tout jeune.',
            en: 'He lost his father, mother and grandfather while still young.',
          },
        },
        {
          id: 'responsibility',
          value: { ar: 'المسؤولية', fr: 'La responsabilité', en: 'Responsibility' },
          evidence: {
            ar: 'رعى الغنم وحماها منذ صغره.',
            fr: 'Il garda et protégea les troupeaux dès son jeune âge.',
            en: 'He tended and protected flocks from a young age.',
          },
        },
        {
          id: 'work',
          value: { ar: 'العمل والاجتهاد', fr: 'Le travail', en: 'Hard work' },
          evidence: {
            ar: 'كسب رزقه بيده: راعيًا ثم تاجرًا.',
            fr: 'Il gagna sa vie de ses mains : berger, puis commerçant.',
            en: 'He earned his living with his own hands: shepherd, then merchant.',
          },
        },
      ],
    },

    // 08 — Mini quiz
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'تحدٍّ صغير', fr: 'Mini-défi', en: 'Mini challenge' },
      intro: {
        ar: 'خمسة أسئلة مختلفة. لا تقلق — كل محاولة تعلّمك شيئًا!',
        fr: 'Cinq questions différentes. Pas de stress — chaque essai t’apprend quelque chose !',
        en: 'Five different questions. No stress — every try teaches you something!',
      },
      questions: [
        {
          id: 'q-where',
          type: 'mcq',
          question: { ar: 'أين وُلد محمد ﷺ؟', fr: 'Où est né Muhammad ﷺ ?', en: 'Where was Muhammad ﷺ born?' },
          options: [
            { id: 'madinah', label: { ar: 'المدينة', fr: 'Médine', en: 'Madinah' } },
            { id: 'makkah', label: { ar: 'مكة', fr: 'La Mecque', en: 'Makkah' } },
            { id: 'sham', label: { ar: 'الشام', fr: 'Le Shām', en: 'Syria (Shām)' } },
          ],
          correctId: 'makkah',
          explanation: {
            ar: 'وُلد في مكة، في قبيلة قريش.',
            fr: 'Il est né à la Mecque, dans la tribu de Quraysh.',
            en: 'He was born in Makkah, in the tribe of Quraysh.',
          },
        },
        {
          id: 'q-father',
          type: 'truefalse',
          question: {
            ar: 'عاش والده عبد الله حتى رآه شابًّا.',
            fr: 'Son père ‘Abdullāh a vécu jusqu’à le voir jeune homme.',
            en: 'His father ‘Abdullāh lived to see him as a young man.',
          },
          answer: false,
          explanation: {
            ar: 'تُوفّي والده قبل ولادته، فوُلد يتيمًا.',
            fr: 'Son père est mort avant sa naissance : il est né orphelin.',
            en: 'His father died before he was born, so he was born an orphan.',
          },
        },
        {
          id: 'q-visual',
          type: 'visual',
          question: {
            ar: 'أيّ صورة تمثّل العمل الذي قام به في شبابه لخديجة؟',
            fr: 'Quelle image représente le travail qu’il fit pour Khadīja dans sa jeunesse ?',
            en: 'Which image shows the work he did for Khadīja in his youth?',
          },
          options: [
            { id: 'caravan', image: `${IMG}/caravan.png`, label: { ar: 'قافلة تجارية', fr: 'Une caravane', en: 'A trade caravan' } },
            { id: 'kaaba', image: `${IMG}/kaaba.png`, label: { ar: 'الكعبة', fr: 'La Kaaba', en: 'The Kaaba' } },
            { id: 'tent', image: `${IMG}/childhood-01.png`, label: { ar: 'خيام البادية', fr: 'Tentes du désert', en: 'Desert tents' } },
          ],
          correctId: 'caravan',
          explanation: {
            ar: 'خرج بتجارة خديجة مع القافلة إلى الشام.',
            fr: 'Il mena le commerce de Khadīja avec la caravane vers le Shām.',
            en: 'He took Khadīja’s goods with the caravan to Syria.',
          },
        },
        {
          id: 'q-order',
          type: 'ordering',
          question: {
            ar: 'رتّب محطات حياته من الأقدم إلى الأحدث.',
            fr: 'Range les étapes de sa vie de la plus ancienne à la plus récente.',
            en: 'Order the stages of his life from earliest to latest.',
          },
          items: [
            { id: 'bs', label: { ar: 'في بادية بني سعد', fr: 'Chez les Banū Sa‘d', en: 'Among Banū Sa‘d' } },
            { id: 'sh', label: { ar: 'رعي الغنم', fr: 'Berger', en: 'Shepherd' } },
            { id: 'tr', label: { ar: 'التجارة إلى الشام', fr: 'Commerce vers le Shām', en: 'Trade to Syria' } },
            { id: 'mr', label: { ar: 'الزواج من خديجة', fr: 'Mariage avec Khadīja', en: 'Marriage to Khadīja' } },
          ],
          explanation: {
            ar: 'رضيع في البادية، ثم راعٍ، ثم تاجر، ثم زوج.',
            fr: 'Bébé au désert, puis berger, puis commerçant, puis époux.',
            en: 'A baby in the desert, then a shepherd, then a merchant, then a husband.',
          },
        },
        {
          id: 'q-match',
          type: 'matching',
          question: {
            ar: 'صِل كل شخص بدوره في حياته ﷺ.',
            fr: 'Associe chaque personne à son rôle dans sa vie ﷺ.',
            en: 'Match each person with their role in his life ﷺ.',
          },
          pairs: [
            {
              id: 'halima',
              left: { ar: 'حليمة السعدية', fr: 'Ḥalīma as-Sa‘diyya', en: 'Ḥalīma as-Sa‘diyya' },
              right: { ar: 'مرضعته في البادية', fr: 'Sa nourrice au désert', en: 'His wet-nurse in the desert' },
            },
            {
              id: 'abutalib',
              left: { ar: 'أبو طالب', fr: 'Abū Ṭālib', en: 'Abū Ṭālib' },
              right: { ar: 'عمّه الذي كفله', fr: 'L’oncle qui l’éleva', en: 'The uncle who raised him' },
            },
            {
              id: 'khadija',
              left: { ar: 'خديجة', fr: 'Khadīja', en: 'Khadīja' },
              right: { ar: 'زوجته', fr: 'Son épouse', en: 'His wife' },
            },
          ],
          explanation: {
            ar: 'كل واحد منهم كان له أثر مهم في مرحلة من حياته.',
            fr: 'Chacun a marqué une étape importante de sa vie.',
            en: 'Each of them shaped an important stage of his life.',
          },
        },
      ],
    },

    // 09 — Memory challenge
    {
      kind: 'memory',
      id: 'memory',
      title: { ar: 'ماذا تتذكّر؟', fr: 'De quoi te souviens-tu ?', en: 'What do you remember?' },
      intro: {
        ar: 'احفظ البطاقات وأماكنها، ثم ستنقلب. هل تستطيع أن تجدها؟',
        fr: 'Mémorise les cartes et leur place, puis elles vont se retourner. Sauras-tu les retrouver ?',
        en: 'Memorize the cards and where they are, then they will flip over. Can you find them again?',
      },
      image: `${IMG}/memory-game.png`,
      cards: [
        { id: 'kaaba', label: { ar: 'الكعبة', fr: 'La Kaaba', en: 'The Kaaba' }, category: { ar: 'مكان', fr: 'Lieu', en: 'Place' } },
        { id: 'elephant', label: { ar: 'عام الفيل', fr: 'L’Année de l’Éléphant', en: 'Year of the Elephant' }, category: { ar: 'حدث', fr: 'Événement', en: 'Event' } },
        { id: 'trust', label: { ar: 'الأمانة', fr: 'L’honnêteté', en: 'Trustworthiness' }, category: { ar: 'قيمة', fr: 'Valeur', en: 'Value' } },
        { id: 'youth', label: { ar: 'الشباب', fr: 'La jeunesse', en: 'Youth' }, category: { ar: 'مرحلة', fr: 'Période', en: 'Period' } },
        { id: 'zamzam', label: { ar: 'بئر زمزم', fr: 'Zamzam', en: 'Zamzam' }, category: { ar: 'مكان', fr: 'Lieu', en: 'Place' } },
        { id: 'patience', label: { ar: 'الصبر', fr: 'La patience', en: 'Patience' }, category: { ar: 'قيمة', fr: 'Valeur', en: 'Value' } },
      ],
      rounds: [
        {
          id: 'places',
          question: { ar: 'أين كانت بطاقات الأماكن؟', fr: 'Où étaient les cartes « lieu » ?', en: 'Where were the “place” cards?' },
          correctIds: ['kaaba', 'zamzam'],
        },
        {
          id: 'values',
          question: { ar: 'وأين كانت بطاقات القِيَم؟', fr: 'Et où étaient les cartes « valeur » ?', en: 'And where were the “value” cards?' },
          correctIds: ['trust', 'patience'],
        },
      ],
    },

    // 10 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'قبل أن يكون رسولًا، عاش محمد ﷺ يتيمًا صابرًا، عاملًا بيده، معروفًا بالصدق والأمانة.',
        fr: 'Avant d’être prophète, Muhammad ﷺ fut un orphelin patient, travaillant de ses mains, connu pour sa sincérité et son honnêteté.',
        en: 'Before becoming a prophet, Muhammad ﷺ was a patient orphan who worked with his hands and was known for truthfulness and trustworthiness.',
      },
      learned: [
        {
          ar: 'وُلد في مكة في عام الفيل، من قريش.',
          fr: 'Il est né à la Mecque l’Année de l’Éléphant, dans Quraysh.',
          en: 'He was born in Makkah in the Year of the Elephant, into Quraysh.',
        },
        {
          ar: 'عاش طفولته يتيمًا في رعاية حليمة وجده وعمه.',
          fr: 'Orphelin, il fut élevé par Ḥalīma, son grand-père et son oncle.',
          en: 'As an orphan he was raised by Ḥalīma, his grandfather and his uncle.',
        },
        {
          ar: 'عمل راعيًا ثم تاجرًا، وتزوّج خديجة رضي الله عنها.',
          fr: 'Il fut berger puis commerçant, et épousa Khadīja.',
          en: 'He was a shepherd, then a merchant, and married Khadīja.',
        },
        {
          ar: 'لُقّب بالأمين لصدقه وأمانته.',
          fr: 'On l’appelait al-Amīn pour son honnêteté.',
          en: 'He was called al-Amīn for his honesty.',
        },
      ],
    },
  ],
}
