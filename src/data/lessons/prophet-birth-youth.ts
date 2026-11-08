import type { Lesson } from '../types'

// Source: Ibadite History textbook slides ("Other ressources/Ibadite_History_S1.pdf", pp. 1–11),
// "الدرس الأول: ميلاد الرسول ﷺ نشأته وشبابه". Every fact on those slides appears below.
//   Slide 3 — بشارات المولد            Slide 7 — وفاة أمه وجده
//   Slide 4 — ميلاد الرسول ﷺ           Slide 8 — شبابه وزواجه
//   Slide 5 — رضاعته                   Slide 9 — بناء الكعبة وقضية التحكيم
//   Slide 6 — حادثة شق الصدر           Slide 10 — حلف الفضول;  Slide 11 — طباعه ﷺ
// Corrected from the slides: the Gregorian birth year (slide 4 says 632, the year of his
// death) is given as about 571 CE. Added beyond the slides: the Makkah explorer
// (Kaaba, Zamzam, Quraysh, the two caravan journeys of Surat Quraysh) and the hadith
// that every prophet shepherded (al-Bukhārī).

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
            ar: 'كانت قوافل قريش ترحل في الشتاء إلى اليمن وفي الصيف إلى الشام، وقد ذكر القرآن رحلتَي الشتاء والصيف في سورة قريش.',
            fr: 'Les caravanes de Quraysh allaient l’hiver au Yémen et l’été en Syrie (Shām) — le Coran évoque ces deux voyages, d’hiver et d’été, dans la sourate Quraysh.',
            en: 'Quraysh caravans travelled to Yemen in winter and to Syria (Shām) in summer — the Qur’an mentions these winter and summer journeys in Surah Quraysh.',
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

    // 03 — Lineage and Birth
    {
      kind: 'story',
      id: 'lineage-and-birth',
      title: { ar: 'نسبه ومولده', fr: 'Sa lignée et sa naissance', en: 'His lineage and birth' },
      intro: {
        ar: 'اقلب البطاقات لتعرف متى ولد ومن هم والداه.',
        fr: 'Retourne les cartes pour savoir quand il est né et qui sont ses parents.',
        en: 'Flip the cards to know when he was born and who his parents are.',
      },
      cards: [
        {
          id: 'father',
          image: `${IMG}/family-tree.png`,
          imageAlt: { ar: 'شجرة مضيئة ترمز إلى نسبه', fr: 'Un arbre lumineux symbolisant sa lignée', en: 'A glowing tree symbolising his lineage' },
          fact: {
            ar: 'أبوه عبد الله بن عبد المطلب، مات في المدينة قبل أن يولد الرسول ﷺ.',
            fr: 'Son père ‘Abdullāh ibn ‘Abd al-Muṭṭalib mourut à Médine avant la naissance du Prophète ﷺ.',
            en: 'His father ‘Abdullāh ibn ‘Abd al-Muṭṭalib died in Madinah before the Prophet ﷺ was born.',
          },
        },
        {
          id: 'birth-date',
          image: `${IMG}/family-tree.png`,
          imageAlt: { ar: 'شجرة مضيئة ترمز إلى نسبه', fr: 'Un arbre lumineux symbolisant sa lignée', en: 'A glowing tree symbolising his lineage' },
          fact: {
            ar: 'وُلد ﷺ بمكة صبيحة يوم الاثنين 12 ربيع الأول من عام الفيل، الموافق لنحو سنة 571م.',
            fr: 'Il ﷺ est né à la Mecque au matin du lundi 12 Rabī‘ al-Awwal, l’Année de l’Éléphant, vers 571 de l’ère chrétienne.',
            en: 'He ﷺ was born in Makkah on the morning of Monday 12 Rabī‘ al-Awwal, in the Year of the Elephant, around 571 CE.',
          },
          certainty: 'approximate',
        },
        {
          id: 'mother',
          image: `${IMG}/family-tree.png`,
          imageAlt: { ar: 'شجرة مضيئة ترمز إلى نسبه', fr: 'Un arbre lumineux symbolisant sa lignée', en: 'A glowing tree symbolising his lineage' },
          fact: {
            ar: 'أمه آمنة بنت وهب، أفضل امرأة في قريش نسبًا وشرفًا، وأبوها سيّد بني زهرة. وفرح جده عبد المطلب بمولده، فدعا الله وشكر له.',
            fr: 'Sa mère Āmina bint Wahb était la femme la plus noble de Quraysh par sa lignée ; son père était le chef des Banū Zuhra. Son grand-père ‘Abd al-Muṭṭalib se réjouit de sa naissance, invoqua Dieu et Le remercia.',
            en: 'His mother Āmina bint Wahb was the noblest woman of Quraysh in lineage; her father was the chief of Banū Zuhra. His grandfather ‘Abd al-Muṭṭalib rejoiced at his birth, prayed to God and thanked Him.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'بماذا شعر جده عبد المطلب عند ولادته؟',
          fr: 'Qu\'a ressenti son grand-père à sa naissance ?',
          en: 'What did his grandfather feel at his birth?',
        },
        options: [
          {
            id: 'joy',
            isRelevant: true,
            label: { ar: 'فرح به وشكر الله', fr: 'Il s\'est réjoui et a remercié Dieu', en: 'Rejoiced and thanked God' },
            explanation: { ar: 'صحيح، فرح بمولده ودعا الله وشكر له.', fr: 'Exact : il se réjouit de sa naissance, invoqua Dieu et Le remercia.', en: 'Correct: he rejoiced at his birth, prayed to God and thanked Him.' },
          },
          {
            id: 'sadness',
            isRelevant: false,
            label: { ar: 'حزن لأنه يتيم', fr: 'Triste car il était orphelin', en: 'Sad because he was an orphan' },
            explanation: { ar: 'بل فرح به فرحاً شديداً.', fr: 'Au contraire, il fut très joyeux.', en: 'On the contrary, he was very happy.' },
          },
        ],
      },
    },

    // 04 — Birth predictions
    {
      kind: 'story',
      id: 'birth-predictions',
      title: { ar: 'بشارات المولد', fr: 'Signes de la naissance', en: 'Signs of the birth' },
      intro: {
        ar: 'صاحبت ولادة النبي ﷺ علامات عجيبة. اقلب البطاقات لتكتشفها.',
        fr: 'Des signes merveilleux ont accompagné la naissance du Prophète ﷺ. Retourne les cartes.',
        en: 'Wondrous signs accompanied the birth of the Prophet ﷺ. Flip the cards.',
      },
      cards: [
        {
          id: 'elephant',
          image: `${IMG}/year-of-elephant.png`,
          imageAlt: { ar: 'فيل في الصحراء', fr: 'Un éléphant dans le désert', en: 'An elephant in the desert' },
          fact: {
            ar: 'حادثة عام الفيل: حيث حمى الله مكة، وفي هذا العام ولد النبي ﷺ.',
            fr: 'L’Année de l’Éléphant : Dieu protégea la Mecque, et c’est cette année-là que naquit le Prophète ﷺ.',
            en: 'The Year of the Elephant: God protected Makkah, and in that same year the Prophet ﷺ was born.',
          },
        },
        {
          id: 'light',
          image: `${IMG}/mother-light.png`,
          imageAlt: { ar: 'أشعة نور تنزل من السماء على مدينة بعيدة في الصحراء', fr: 'Des rayons de lumière descendant du ciel sur une ville lointaine du désert', en: 'Rays of light falling from the sky onto a distant desert city' },
          fact: {
            ar: 'نورٌ خرج من أمه حين حملت به، أضاءت له قصور الشام.',
            fr: 'Une lumière sortit de sa mère lorsqu’elle le portait, illuminant les palais du Shām.',
            en: 'A light came out of his mother while she was carrying him, illuminating the palaces of al-Shām.',
          },
        },
        {
          id: 'star',
          image: `${IMG}/predictions.png`,
          imageAlt: { ar: 'نجم ساطع فوق بيوت مكة ليلًا', fr: 'Une étoile brillante au-dessus des maisons de la Mecque la nuit', en: 'A bright star above the houses of Makkah at night' },
          fact: {
            ar: 'ظهور نجم أحمد في السماء، وهو علامةٌ عرفها أهل الكتاب.',
            fr: 'L’apparition de l’étoile d’Aḥmad dans le ciel, un signe connu des Gens du Livre.',
            en: 'The appearance of the star of Aḥmad in the sky, a sign known to the People of the Book.',
          },
        },
        {
          id: 'palace',
          image: `${IMG}/palace-of-chosroes.png`,
          imageAlt: { ar: 'إيوان كسرى العظيم وقد تصدّعت جدرانه ليلًا', fr: 'Le grand palais de Chosroès aux murs fissurés, la nuit', en: 'The great Palace of Chosroes with cracked walls at night' },
          fact: {
            ar: 'اهتزاز إيوان كسرى ليلة مولده ﷺ.',
            fr: 'Le palais (īwān) de Chosroès trembla la nuit de sa naissance ﷺ.',
            en: 'The Palace (īwān) of Chosroes shook on the night of his birth ﷺ.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'ماذا نفهم من هذه البشارات؟',
          fr: 'Que comprenons-nous de ces signes ?',
          en: 'What do we understand from these signs?',
        },
        options: [
          {
            id: 'greatness',
            isRelevant: true,
            label: { ar: 'عظمة هذا المولود', fr: 'La grandeur de cet enfant', en: 'The greatness of this child' },
            explanation: {
              ar: 'هيأ الله الكون لاستقبال أعظم الأنبياء.',
              fr: 'Dieu a préparé l’univers pour accueillir le plus grand des prophètes.',
              en: 'God prepared the universe to welcome the greatest of prophets.',
            },
          },
          {
            id: 'magic',
            isRelevant: false,
            label: { ar: 'أنها مجرد صدفة', fr: 'Juste une coïncidence', en: 'Just a coincidence' },
            explanation: {
              ar: 'بل هي آيات من الله.',
              fr: 'Ce sont des signes de Dieu.',
              en: 'They are signs from God.',
            },
          },
        ],
      },
    },

    // 05a — Nursing and the opening of the chest: reading (slides 5–6)
    {
      kind: 'reading',
      id: 'reading-nursing',
      title: { ar: 'اقرأ: رضاعته في البادية', fr: 'Lis : Son allaitement au désert', en: 'Read: His nursing in the desert' },
      intro: {
        ar: 'اقرأ كيف قضى ﷺ سنواته الأولى بين مكة وبادية بني سعد.',
        fr: 'Lis comment il ﷺ passa ses premières années entre la Mecque et le désert des Banū Sa‘d.',
        en: 'Read how he ﷺ spent his first years between Makkah and the desert of Banū Sa‘d.',
      },
      image: `${IMG}/childhood-01.png`,
      imageAlt: {
        ar: 'خيام من الشعر وجمال في البادية تحت الشمس',
        fr: 'Tentes en poil et chameaux dans le désert, sous le soleil',
        en: 'Goat-hair tents and camels in the desert under the sun',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'عادة العرب في الرضاعة', fr: 'Une coutume arabe', en: 'An Arab custom' },
          text: {
            ar: 'كانت عادة العرب أن يلتمسوا المراضع لأولادهم في البادية، ابتعادًا بهم عن الأمراض، ولتقوى أجسامهم.',
            fr: 'Les Arabes avaient coutume de confier leurs enfants à des nourrices du désert, pour les éloigner des maladies et fortifier leur corps.',
            en: 'The Arabs used to entrust their children to wet-nurses in the desert, to keep them away from disease and make their bodies strong.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'آمنة وثويبة ثم حليمة', fr: 'Āmina, Thuwayba, puis Ḥalīma', en: 'Āmina, Thuwayba, then Ḥalīma' },
          text: {
            ar: 'أرضعته أمه آمنة مدّة أسبوع، ثم تولّت إرضاعه ثُويبة جارية عمه أبي لهب. ثم عُرض على مرضعات بني سعد بن بكر، فما قبلته واحدةٌ منهن ليُتمه، خوفًا من قلّة ما يعود عليهن من أهله، إلا حليمة بنت أبي ذؤيب وزوجها، فأرضعته في بادية بني سعد.',
            fr: 'Sa mère Āmina l’allaita une semaine, puis Thuwayba, la servante de son oncle Abū Lahab, prit le relais. On le présenta ensuite aux nourrices des Banū Sa‘d ibn Bakr ; aucune ne voulut de lui, car il était orphelin et elles craignaient d’être peu récompensées par sa famille — sauf Ḥalīma bint Abī Dhu’ayb et son mari, qui l’emmenèrent et l’allaitèrent dans le désert des Banū Sa‘d.',
            en: 'His mother Āmina nursed him for a week, then Thuwayba, the servant of his uncle Abū Lahab, nursed him. He was then offered to the wet-nurses of Banū Sa‘d ibn Bakr; none of them would take him because he was an orphan and they feared his family could reward them little — except Ḥalīma bint Abī Dhu’ayb and her husband, who nursed him in the desert of Banū Sa‘d.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'حادثة شقّ الصدر', fr: 'L’ouverture de la poitrine', en: 'The opening of the chest' },
          text: {
            ar: 'كان ﷺ في الرابعة أو الخامسة من عمره حين وقعت حادثة شقّ الصدر. روى مسلم في صحيحه عن أنس بن مالك رضي الله عنه: «أنّ رسول الله ﷺ أتاه جبريل وهو يلعب مع الغلمان، فأخذه فصرعه، فشقّ عن قلبه، فاستخرج القلب، فاستخرج منه علقة، فقال: هذا حظّ الشيطان منك. ثم غسله في طستٍ من ذهب بماء زمزم، ثم لأمه، ثم أعاده في مكانه. وجاء الغلمان يسعون إلى أمّه — يعني ظئره — فقالوا: إنّ محمدًا قد قُتل، فاستقبلوه وهو منتقع اللون». قال أنس: «وقد كنت أرى أثر ذلك المخيط في صدره». فخشيت حليمة عليه بعد هذه الواقعة، فردّته إلى أمّه.',
            fr: 'Il ﷺ avait quatre ou cinq ans lorsque survint l’ouverture de sa poitrine. Muslim rapporte dans son Ṣaḥīḥ, d’après Anas ibn Mālik (qu’Allah l’agrée) : « Gabriel vint au Messager d’Allah ﷺ alors qu’il jouait avec les autres garçons. Il le prit, l’allongea, lui ouvrit la poitrine, en sortit le cœur et en retira un caillot, disant : “Voici la part de Satan en toi.” Puis il le lava dans un bassin d’or avec l’eau de Zamzam, le referma et le remit à sa place. Les garçons coururent vers sa nourrice en criant : “Muhammad a été tué !” On alla à sa rencontre : il était tout pâle. » Anas ajouta : « Je voyais encore la trace de cette couture sur sa poitrine. » Après cet événement, Ḥalīma eut peur pour lui et le ramena à sa mère.',
            en: 'He ﷺ was four or five years old when the opening of his chest took place. Muslim reports in his Ṣaḥīḥ from Anas ibn Mālik (may God be pleased with him): “Gabriel came to the Messenger of God ﷺ while he was playing with the other boys. He took him, laid him down, opened his chest, took out the heart and removed a clot from it, saying: ‘This is Satan’s share of you.’ Then he washed it in a golden basin with Zamzam water, closed it and put it back in its place. The boys ran to his nurse, saying: ‘Muhammad has been killed!’ They went to meet him and found him pale.” Anas said: “I used to see the mark of that stitching on his chest.” After this event Ḥalīma feared for him and returned him to his mother.',
          },
        },
      ],
    },

    // 05 — Childhood (Combined nursing & death of parents/grandfather)
    {
      kind: 'story',
      id: 'childhood',
      title: { ar: 'طفولته', fr: 'Son enfance', en: 'His childhood' },
      intro: {
        ar: 'نشأ ﷺ في بيئة نقية، لكنه واجه اليتم مبكراً. اقلب البطاقات.',
        fr: 'Il ﷺ grandit dans un environnement pur, mais connut très tôt la douleur d’être orphelin. Retourne les cartes.',
        en: 'He ﷺ grew up in a pure environment, but knew the pain of being an orphan early on. Flip the cards.',
      },
      cards: [
        {
          id: 'desert',
          image: `${IMG}/childhood-01.png`,
          imageAlt: {
            ar: 'خيام من الشعر وجمال في البادية تحت الشمس',
            fr: 'Tentes en poil et chameaux dans le désert, sous le soleil',
            en: 'Goat-hair tents and camels in the desert under the sun',
          },
          fact: {
            ar: 'قضى سنواته الأولى في بادية بني سعد عند مرضعته حليمة السعدية، حيث الهواء النقي واللغة العربية الفصيحة.',
            fr: 'Il passa ses premières années dans le désert des Banū Sa‘d, auprès de sa nourrice Ḥalīma as-Sa‘diyya : air pur et arabe le plus éloquent.',
            en: 'He spent his first years in the desert of Banū Sa‘d with his wet-nurse Ḥalīma as-Sa‘diyya: clean air and the purest Arabic.',
          },
        },
        {
          id: 'chest-splitting',
          image: `${IMG}/chest-splitting.png`,
          imageAlt: {
            ar: 'طست من ذهب في الصحراء',
            fr: 'Un bassin en or dans le désert',
            en: 'A golden basin in the desert',
          },
          fact: {
            ar: 'وهو في الرابعة أو الخامسة من عمره بالبادية، جاءه جبريل عليه السلام فشقّ صدره، وغسل قلبه في طستٍ من ذهب بماء زمزم.',
            fr: 'Vers l’âge de quatre ou cinq ans, au désert, l’ange Gabriel (paix sur lui) vint lui ouvrir la poitrine et laver son cœur dans un bassin d’or avec l’eau de Zamzam.',
            en: 'At about four or five, in the desert, the angel Gabriel (peace be upon him) came, opened his chest and washed his heart in a golden basin with Zamzam water.',
          },
          certainty: 'approximate',
        },
        {
          id: 'mother-death',
          image: `${IMG}/mother-grave.png`,
          imageAlt: { ar: 'طريق ترابي بين جبال الصحراء عند الغروب', fr: 'Un chemin de terre entre les montagnes du désert au coucher du soleil', en: 'A dirt path between desert mountains at sunset' },
          fact: {
            ar: 'ذهبت أمه لزيارة قبر والده بالمدينة (يثرب)، وفي طريق عودتها اشتدّ عليها المرض فتوفّيت، وعمره لا يتجاوز سبع سنين.',
            fr: 'Sa mère alla visiter la tombe de son père à Médine (Yathrib) ; sur le chemin du retour, la maladie s’aggrava et elle mourut. Il n’avait pas plus de sept ans.',
            en: 'His mother went to visit his father’s grave in Madinah (Yathrib); on the way back her illness worsened and she died. He was no more than seven.',
          },
          certainty: 'approximate',
        },
        {
          id: 'grandfather',
          image: `${IMG}/childhood-02.png`,
          imageAlt: { ar: 'فناء بيت طيني هادئ في مكة يضيئه سراج', fr: 'La cour paisible d’une maison en terre à la Mecque, éclairée par une lampe', en: 'The quiet courtyard of a mud-brick house in Makkah, lit by a lamp' },
          fact: {
            ar: 'أصبح يتيم الأب والأم، فكفله جده عبد المطلب وربّاه مع أبنائه حتى توفّي الجد وهو في السنة الثامنة من عمره، ثم تولّى رعايته عمه أبو طالب، فكان به رفيقًا عطوفًا.',
            fr: 'Orphelin de père et de mère, il fut recueilli par son grand-père ‘Abd al-Muṭṭalib, qui l’éleva avec ses fils jusqu’à sa mort, quand l’enfant était dans sa huitième année ; puis son oncle Abū Ṭālib prit soin de lui avec douceur et tendresse.',
            en: 'Orphaned of both parents, he was taken in by his grandfather ‘Abd al-Muṭṭalib, who raised him with his own sons until he died when the boy was in his eighth year; then his uncle Abū Ṭālib cared for him with gentleness and affection.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'من كفله بعد وفاة جده؟',
          fr: 'Qui l’a pris en charge après son grand-père ?',
          en: 'Who cared for him after his grandfather died?',
        },
        options: [
          {
            id: 'abutalib',
            isRelevant: true,
            label: { ar: 'عمه أبو طالب', fr: 'Son oncle Abū Ṭālib', en: 'His uncle Abū Ṭālib' },
            explanation: { ar: 'صحيح، كان به رفيقًا عطوفًا في طفولته، وخير عونٍ له في شبابه.', fr: 'Exact : il fut doux et tendre avec lui dans son enfance, et son meilleur soutien dans sa jeunesse.', en: 'Correct: he was gentle and kind to him in childhood, and his best support in his youth.' },
          },
          {
            id: 'abulahab',
            isRelevant: false,
            label: { ar: 'عمه أبو لهب', fr: 'Son oncle Abū Lahab', en: 'His uncle Abū Lahab' },
            explanation: { ar: 'أبو طالب هو من كفله.', fr: 'C’est Abū Ṭālib qui s’est occupé de lui.', en: 'It was Abū Ṭālib who took care of him.' },
          },
        ],
      },
    },

    // 06 — Childhood events: order them
    {
      kind: 'sorting',
      id: 'birth-order',
      title: { ar: 'أحداث الطفولة', fr: 'Événements de l’enfance', en: 'Childhood events' },
      intro: {
        ar: 'رتّب أحداث نشأته الأولى من الأقدم إلى الأحدث.',
        fr: 'Range les événements de sa petite enfance du plus ancien au plus récent.',
        en: 'Order the events of his early childhood from earliest to latest.',
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
            ar: 'رضاعته عند حليمة السعدية',
            fr: 'Nourri par Ḥalīma as-Sa‘diyya',
            en: 'Nursed by Ḥalīma as-Sa‘diyya',
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
        ar: 'تُوفّي والده قبل ولادته، فوُلد يتيمًا. ثم رضع في البادية، وتوفّيت أمه وعمره لا يتجاوز سبع سنين، فكفله جده عبد المطلب حتى توفّي وهو في الثامنة، ثم عمّه أبو طالب.',
        fr: 'Son père mourut avant sa naissance : il naquit orphelin. Puis il fut allaité au désert ; sa mère mourut alors qu’il n’avait pas plus de sept ans ; son grand-père ‘Abd al-Muṭṭalib le recueillit jusqu’à sa mort, quand il avait huit ans, puis son oncle Abū Ṭālib.',
        en: 'His father died before he was born, so he was born an orphan. Then he was nursed in the desert; his mother died when he was no more than seven; his grandfather ‘Abd al-Muṭṭalib took him in until he died when the boy was eight, then his uncle Abū Ṭālib.',
      },
    },

    // 07 — Youth and work
    {
      kind: 'story',
      id: 'youth-and-work',
      title: { ar: 'شبابه وعمله', fr: 'Sa jeunesse et son travail', en: 'His youth and work' },
      intro: {
        ar: 'اقلب البطاقات لتتعرف على عمله ومواقفه ﷺ في شبابه.',
        fr: 'Retourne les cartes pour découvrir son travail et ses actions ﷺ dans sa jeunesse.',
        en: 'Flip the cards to discover his work and actions ﷺ in his youth.',
      },
      cards: [
        {
          id: 'shepherd',
          image: `${IMG}/childhood-03.png`,
          imageAlt: {
            ar: 'قطيع أغنام على تلال صخرية قرب مكة',
            fr: 'Un troupeau de moutons sur des collines rocheuses près de la Mecque',
            en: 'A flock of sheep on rocky hills near Makkah',
          },
          fact: {
            ar: 'في أول شبابه رعى الغنم لأهل مكة مقابل أجر ليعتمد على نفسه. وأخبر ﷺ أنّ كل الأنبياء رعوا الغنم.',
            fr: 'Au début de sa jeunesse, il garda les moutons des Mecquois contre salaire, pour subvenir lui-même à ses besoins. Il ﷺ a dit que tous les prophètes avaient gardé des moutons.',
            en: 'In his early youth, he tended sheep for the people of Makkah for a wage, to support himself. He ﷺ said that every prophet had tended sheep.',
          },
        },
        {
          id: 'hilf-al-fudul',
          image: `${IMG}/hilf-al-fudul.png`,
          imageAlt: {
            ar: 'مجلس خالٍ في دار قديمة ليلًا: وسائد حول طاولة عليها صحيفة مطويّة، وسُرُج مضيئة',
            fr: 'Une salle vide d’une ancienne maison, la nuit : des coussins autour d’une table où repose un parchemin roulé, des lampes allumées',
            en: 'An empty hall in an old house at night: cushions around a table holding a rolled parchment, glowing lamps',
          },
          fact: {
            ar: 'شارك في «حلف الفضول» مع أشراف من قريش، تعاهدوا فيه على نصرة المظلوم، وظلّ يدافع عنه حتى بعد البعثة.',
            fr: 'Il participa au « pacte des Vertueux » (Ḥilf al-Fuḍūl) avec des notables de Quraysh, qui s’engagèrent à défendre l’opprimé ; il resta attaché à ce pacte même après le début de sa mission.',
            en: 'He took part in the “Pact of the Virtuous” (Ḥilf al-Fuḍūl) with nobles of Quraysh, who pledged to support the oppressed; he kept defending it even after his mission began.',
          },
        },
        {
          id: 'trade',
          image: `${IMG}/youth-trade.png`,
          imageAlt: { ar: 'جمال قافلة تجارية مستريحة في الصحراء عند الفجر، وبجانبها أحمال البضائع', fr: 'Les chameaux d’une caravane au repos dans le désert à l’aube, près de ballots de marchandises', en: 'The camels of a trade caravan resting in the desert at dawn, beside bundles of goods' },
          fact: {
            ar: 'لما سمعت به السيدة خديجة رضي الله عنها طلبت منه أن يخرج بمالها تاجرًا إلى الشام، وكان عمره خمسًا وعشرين سنة، فنمت تجارتها نموًّا ملحوظًا لأمانته وبركته.',
            fr: 'Ayant entendu parler de lui, Khadīja (qu’Allah l’agrée) lui demanda de partir commercer pour elle au Shām ; il avait vingt-cinq ans. Son commerce prospéra nettement grâce à son honnêteté et à sa baraka.',
            en: 'Having heard of him, Khadīja (may God be pleased with her) asked him to take her goods to trade in al-Shām; he was twenty-five. Her trade grew remarkably thanks to his honesty and blessing.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'بماذا كان يلقب في شبابه؟',
          fr: 'Comment était-il surnommé dans sa jeunesse ?',
          en: 'What was his title in his youth?',
        },
        options: [
          {
            id: 'amin',
            isRelevant: true,
            label: { ar: 'الصادق الأمين', fr: 'Aṣ-Ṣādiq al-Amīn (le véridique, le digne de confiance)', en: 'Aṣ-Ṣādiq al-Amīn (the Truthful, the Trustworthy)' },
            explanation: { ar: 'لُقّب بالصادق الأمين لصدقه وحفظه للأمانات.', fr: 'On l’appelait ainsi pour sa sincérité et parce qu’il gardait fidèlement les dépôts.', en: 'He was called this for his truthfulness and for keeping what was entrusted to him.' },
          },
          {
            id: 'king',
            isRelevant: false,
            label: { ar: 'ملك قريش', fr: 'Roi de Quraysh', en: 'King of Quraysh' },
            explanation: { ar: 'لم يكن ملكًا، بل عُرف بالصدق والأمانة.', fr: 'Il n’était pas roi ; il était connu pour sa sincérité et son honnêteté.', en: 'He was not a king; he was known for truthfulness and trustworthiness.' },
          },
        ],
      },
    },

    // 07b — Ḥilf al-Fuḍūl, the rebuilding of the Kaaba and his character: reading (slides 9–11)
    {
      kind: 'reading',
      id: 'reading-manhood',
      title: { ar: 'اقرأ: مواقفه قبل البعثة', fr: 'Lis : Ses actions avant la mission', en: 'Read: His deeds before the mission' },
      intro: {
        ar: 'اقرأ كيف ظهرت عدالته وحكمته وأخلاقه ﷺ قبل أن يُبعث نبيًّا.',
        fr: 'Lis comment sa justice, sa sagesse et son caractère ﷺ apparurent avant même sa mission.',
        en: 'Read how his ﷺ sense of justice, wisdom and character showed even before his mission.',
      },
      image: `${IMG}/kaaba.png`,
      imageAlt: {
        ar: 'الكعبة المشرّفة بين جبال مكة',
        fr: 'La Kaaba entre les montagnes de la Mecque',
        en: 'The Kaaba among the mountains of Makkah',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'حلف الفضول', fr: 'Le pacte des Vertueux (Ḥilf al-Fuḍūl)', en: 'The Pact of the Virtuous (Ḥilf al-Fuḍūl)' },
          text: {
            ar: 'قدم رجلٌ من زَبيد مكةَ ببضاعة، فاشتراها منه العاص بن وائل وظلمه في ثمنها، فاستغاث بأشراف قريش فلم يساعدوه، فطلب العون من أهل مكة، فهاجت الغيرة في رجالٍ من ذوي المروءة والشهامة. فاجتمعوا في دار عبد الله بن جُدعان وتعاهدوا أن يكونوا دائمًا مع المظلوم على الظالم حتى يؤدّى إليه حقّه. ولمّا خرجوا ذهبوا إلى العاص بن وائل فانتزعوا منه البضاعة ودفعوها إلى الزبيدي. وكان الرسول ﷺ من المشاركين في هذا الحلف، ومن المدافعين عنه حتى بعد البعثة.',
            fr: 'Un homme de Zabīd vint à la Mecque avec des marchandises ; al-‘Āṣ ibn Wā’il les lui acheta et le lésa. L’homme appela les notables de Quraysh à l’aide, en vain ; il en appela alors aux gens de la Mecque, et des hommes d’honneur et de courage s’indignèrent. Ils se réunirent dans la maison de ‘Abdullāh ibn Jud‘ān et s’engagèrent à toujours se tenir aux côtés de l’opprimé contre l’oppresseur, jusqu’à ce qu’il recouvre son droit. En sortant, ils allèrent chez al-‘Āṣ ibn Wā’il, lui reprirent les marchandises et les rendirent à l’homme de Zabīd. Le Prophète ﷺ prit part à ce pacte et le défendit même après le début de sa mission.',
            en: 'A man from Zabīd came to Makkah with goods; al-‘Āṣ ibn Wā’il bought them and cheated him. The man called on the nobles of Quraysh for help, but they did not help him; he then appealed to the people of Makkah, and men of honour and chivalry were stirred. They met in the house of ‘Abdullāh ibn Jud‘ān and pledged always to stand with the wronged against the wrongdoer until his right was restored. On leaving, they went to al-‘Āṣ ibn Wā’il, took the goods back from him and handed them to the man from Zabīd. The Prophet ﷺ took part in this pact and defended it even after his mission began.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'بناء الكعبة وقضية التحكيم', fr: 'La reconstruction de la Kaaba et l’arbitrage', en: 'Rebuilding the Kaaba and the arbitration' },
          text: {
            ar: 'عندما بلغ الرسول ﷺ خمسًا وثلاثين سنة من عمره كانت الكعبة قد تصدّعت وأوشكت على الانهيار، فقرّرت قريش إعادة بنائها. ولمّا بلغ البنيان موضع الحجر الأسود اختلفوا فيمن يمتاز بشرف وضعه في مكانه. وبعد خمس ليالٍ من الصراع كادت الحرب أن تنشب بينهم، فاتّفقوا أن يحكّموا أوّل من يدخل عليهم، فدخل الرسول ﷺ أوّلًا فرضوا به. ومن حكمته أنّه أخذ رداءً ووضع الحجر فيه، وأخذ من كلّ قبيلة رجلًا يحمل طرف الرداء، فتقاسموا بذلك شرفه، ثم وضعه بيده في الكعبة.',
            fr: 'Lorsque le Prophète ﷺ eut trente-cinq ans, la Kaaba était fissurée et menaçait de s’effondrer ; Quraysh décida de la reconstruire. Arrivés à l’emplacement de la Pierre Noire, les clans se disputèrent l’honneur de la remettre en place. Après cinq nuits de querelle, la guerre faillit éclater ; ils convinrent alors de prendre pour arbitre le premier qui entrerait. Le Prophète ﷺ entra le premier, et ils l’acceptèrent. Avec sagesse, il posa la pierre sur un manteau et demanda à un homme de chaque tribu d’en tenir un bord : tous partagèrent ainsi l’honneur, puis il la plaça lui-même dans la Kaaba.',
            en: 'When the Prophet ﷺ was thirty-five, the Kaaba was cracked and close to collapse, so Quraysh decided to rebuild it. When the building reached the place of the Black Stone, the clans quarrelled over who had the honour of setting it back. After five nights of dispute war nearly broke out, so they agreed to let the first man to come in judge between them. The Prophet ﷺ came in first, and they accepted him. Wisely, he laid the stone on a cloak and had one man from each tribe hold an edge, so they all shared the honour; then he set it in the Kaaba with his own hands.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'طباعه ﷺ', fr: 'Son caractère ﷺ', en: 'His character ﷺ' },
          text: {
            ar: 'كان الرسول ﷺ لا يسجد للأصنام التي كانت تعبدها قريش، ولا يشرب خمرًا، ولا يفعل شيئًا من أفعال الجاهلية كوأد البنات، إذ كان خلوقًا صادقًا أمينًا. وكان غالبًا ما يخلو بنفسه في غار حراء يتعبّد ويدعو على الطريقة الإبراهيمية.',
            fr: 'Le Prophète ﷺ ne se prosternait pas devant les idoles qu’adorait Quraysh, ne buvait pas de vin et ne commettait aucune des pratiques de l’époque préislamique, comme enterrer vivantes les petites filles : il avait un noble caractère, sincère et digne de confiance. Il s’isolait souvent dans la grotte de Hirā’ pour adorer Dieu et L’invoquer selon la voie d’Ibrāhīm (paix sur lui).',
            en: 'The Prophet ﷺ never bowed to the idols that Quraysh worshipped, never drank wine, and did none of the deeds of the pre-Islamic age, such as burying baby girls alive: he was of noble character, truthful and trustworthy. He often secluded himself in the cave of Hira to worship and pray in the way of Ibrāhīm (peace be upon him).',
          },
        },
      ],
    },

    // 08 — Marriage and Manhood
    {
      kind: 'story',
      id: 'marriage-and-manhood',
      title: { ar: 'زواجه ورجولته', fr: 'Son mariage et son âge adulte', en: 'His marriage and manhood' },
      intro: {
        ar: 'اقلب البطاقات لتتعرف على زواجه ومواقفه قبل النبوة.',
        fr: 'Retourne les cartes pour découvrir son mariage et ses actions avant la prophétie.',
        en: 'Flip the cards to discover his marriage and actions before prophethood.',
      },
      cards: [
        {
          id: 'marriage',
          image: `${IMG}/childhood-02.png`,
          imageAlt: { ar: 'فناء بيت طيني هادئ في مكة يضيئه سراج', fr: 'La cour paisible d’une maison en terre à la Mecque, éclairée par une lampe', en: 'The quiet courtyard of a mud-brick house in Makkah, lit by a lamp' },
          fact: {
            ar: 'بعد عودته من الشام طلبت السيدة خديجة رضي الله عنها الزواج منه، وكان عمره نحو خمس وعشرين سنة وعمرها نحو أربعين، فكانت أول نسائه، ولم يتزوّج عليها حتى ماتت. ومن أولاده منها: القاسم، وزينب، ورقية، وأم كلثوم، وفاطمة، وعبد الله.',
            fr: 'À son retour du Shām, Khadīja (qu’Allah l’agrée) lui proposa le mariage ; il avait environ vingt-cinq ans et elle environ quarante. Elle fut sa première épouse, et il n’en épousa aucune autre de son vivant. Parmi leurs enfants : al-Qāsim, Zaynab, Ruqayya, Umm Kulthūm, Fāṭima et ‘Abdullāh.',
            en: 'After he returned from al-Shām, Khadīja (may God be pleased with her) proposed marriage to him; he was about twenty-five and she about forty. She was his first wife, and he married no one else while she lived. Among their children: al-Qāsim, Zaynab, Ruqayya, Umm Kulthūm, Fāṭima and ‘Abdullāh.',
          },
          certainty: 'approximate',
        },
        {
          id: 'black-stone',
          image: `${IMG}/black-stone.png`,
          imageAlt: {
            ar: 'الحجر الأسود موضوع وسط رداء مخطّط مبسوط أمام جدار الكعبة أثناء إعادة بنائها',
            fr: 'La Pierre Noire posée au milieu d’un manteau rayé étendu devant le mur de la Kaaba en reconstruction',
            en: 'The Black Stone resting in the middle of a striped cloak spread before the Kaaba wall during its rebuilding',
          },
          fact: {
            ar: 'لمّا بلغ ﷺ خمسًا وثلاثين سنة أعادت قريش بناء الكعبة، واختلفوا فيمن يضع الحجر الأسود، فحكّموه، فوضعه في رداء وأخذت كل قبيلة بطرفه، ثم وضعه بيده في مكانه، فوقاهم من حرب.',
            fr: 'Quand il ﷺ eut trente-cinq ans, Quraysh reconstruisit la Kaaba. Les clans se disputèrent l’honneur de replacer la Pierre Noire et le prirent pour arbitre : il posa la pierre sur un manteau, chaque tribu en tint un bord, puis il la remit lui-même en place, leur évitant une guerre.',
            en: 'When he ﷺ was thirty-five, Quraysh rebuilt the Kaaba. The clans quarrelled over who would set the Black Stone back and made him their judge: he placed it on a cloak, each tribe held an edge, then he set it in place with his own hands, sparing them a war.',
          },
          certainty: 'approximate',
        },
        {
          id: 'cave-hira',
          image: `${IMG}/cave-hira.png`,
          imageAlt: {
            ar: 'غار حراء الخالي يطلّ على وادي مكة والكعبة عند الغروب',
            fr: 'La grotte de Hirā’, vide, dominant la vallée de la Mecque et la Kaaba au coucher du soleil',
            en: 'The empty cave of Hira overlooking the valley of Makkah and the Kaaba at sunset',
          },
          fact: {
            ar: 'لم يكن ﷺ يسجد للأصنام ولا يشرب الخمر، وكان كثيرًا ما يخلو بنفسه في غار حراء يتعبّد ويدعو على الطريقة الإبراهيمية، أي دين إبراهيم عليه السلام.',
            fr: 'Il ﷺ ne se prosternait pas devant les idoles et ne buvait pas de vin. Il s’isolait souvent dans la grotte de Hirā’ pour adorer Dieu et L’invoquer selon la voie d’Ibrāhīm (paix sur lui).',
            en: 'He ﷺ never bowed to idols nor drank wine. He often secluded himself in the cave of Hira to worship and pray in the way of Ibrāhīm (peace be upon him).',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'ماذا نتعلم من موقف الحجر الأسود؟',
          fr: 'Qu’apprenons-nous de l’histoire de la Pierre Noire ?',
          en: 'What do we learn from the Black Stone incident?',
        },
        options: [
          {
            id: 'wisdom',
            isRelevant: true,
            label: { ar: 'الحكمة في حل الخلافات', fr: 'La sagesse dans les conflits', en: 'Wisdom in resolving conflicts' },
            explanation: {
              ar: 'جنّب قريشًا حربًا طاحنة بحسن تصرّفه.',
              fr: 'Il a évité une guerre à Quraysh par sa sagesse.',
              en: 'He saved Quraysh from a terrible war with his good judgement.',
            },
          },
          {
            id: 'greed',
            isRelevant: false,
            label: { ar: 'البحث عن السلطة', fr: 'La recherche de pouvoir', en: 'Seeking power' },
            explanation: {
              ar: 'بل كان حريصًا على الإصلاح والسلام.',
              fr: 'Au contraire, il cherchait la paix.',
              en: 'Rather, he was keen on peace.',
            },
          },
        ],
      },
    },

    // 09 — Youth timeline
    {
      kind: 'timeline',
      id: 'youth-timeline',
      title: { ar: 'رحلة شبابه', fr: 'Son parcours', en: 'His journey' },
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
            ar: 'عُرف بين قريش بالصدق والأمانة حتى لقّبوه «الأمين». شارك في حلف الفضول لنصرة المظلوم.',
            fr: 'Quraysh le connaissait pour sa sincérité et son honnêteté, au point de le surnommer « al-Amīn ». Il prit part au pacte des Vertueux (Ḥilf al-Fuḍūl) pour défendre l’opprimé.',
            en: 'Quraysh knew him for his truthfulness and trustworthiness, so much that they called him “al-Amīn”. He took part in the Pact of the Virtuous (Ḥilf al-Fuḍūl) to support the oppressed.',
          },
        },
        {
          id: 'work',
          period: { ar: 'العمل', fr: 'Travail', en: 'Work' },
          label: { ar: 'التجارة إلى الشام', fr: 'Le commerce vers le Shām', en: 'Trade to al-Shām' },
          detail: {
            ar: 'خرج بتجارة لخديجة بنت خويلد رضي الله عنها إلى الشام، فعاد بربح وافر وسمعة طيبة.',
            fr: 'Il conduisit une caravane de Khadīja bint Khuwaylid (qu’Allah l’agrée) vers le Shām et revint avec un beau profit et une excellente réputation.',
            en: 'He led a trading caravan for Khadīja bint Khuwaylid (may God be pleased with her) to al-Shām and returned with good profit and an excellent reputation.',
          },
        },
        {
          id: 'marriage',
          period: { ar: 'الزواج', fr: 'Mariage', en: 'Marriage' },
          label: { ar: 'الزواج من خديجة', fr: 'Mariage avec Khadīja', en: 'Marriage to Khadīja' },
          detail: {
            ar: 'أُعجبت خديجة رضي الله عنها بصدقه وأمانته، فطلبت الزواج منه، فتزوّجها وهو في نحو الخامسة والعشرين.',
            fr: 'Admirative de sa sincérité et de son honnêteté, Khadīja (qu’Allah l’agrée) lui proposa le mariage ; il l’épousa vers l’âge de vingt-cinq ans.',
            en: 'Impressed by his truthfulness and honesty, Khadīja (may God be pleased with her) proposed marriage; he married her at about twenty-five.',
          },
          certainty: 'approximate',
        },
      ],
    },

    // 10 — Timeline placement game
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
          label: { ar: 'التجارة بمال خديجة رضي الله عنها', fr: 'Le commerce pour Khadīja', en: 'Trading for Khadīja' },
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

    // 11 — What can we learn?
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
            ar: 'لقّبته قريش «الأمين»، واختارته خديجة رضي الله عنها لتجارتها.',
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

    // 12 — Mini quiz
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
            { id: 'sham', label: { ar: 'الشام', fr: 'Le Shām', en: 'Al-Shām (Syria)' } },
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
            ar: 'أيّ صورة تمثّل العمل الذي قام به في شبابه لخديجة رضي الله عنها؟',
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
            ar: 'خرج بتجارة خديجة رضي الله عنها مع القافلة إلى الشام.',
            fr: 'Il mena le commerce de Khadīja avec la caravane vers le Shām.',
            en: 'He took Khadīja’s goods with the caravan to al-Shām.',
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
            { id: 'tr', label: { ar: 'التجارة إلى الشام', fr: 'Commerce vers le Shām', en: 'Trade to al-Shām' } },
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
              left: { ar: 'خديجة رضي الله عنها', fr: 'Khadīja', en: 'Khadīja' },
              right: { ar: 'زوجته الأولى', fr: 'Sa première épouse', en: 'His first wife' },
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

    // 13 — Memory challenge
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

    // 14 — Completion
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
          fr: 'Il fut berger puis commerçant, et épousa Khadīja (qu’Allah l’agrée).',
          en: 'He was a shepherd, then a merchant, and married Khadīja (may God be pleased with her).',
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
