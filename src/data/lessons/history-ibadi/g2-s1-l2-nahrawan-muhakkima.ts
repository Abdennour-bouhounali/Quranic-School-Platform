import type { Lesson } from '../../types'

// Source: Ibadite History textbook (Other ressources/Ibadite_History_S3.pdf), pages 2–6.
//   Slide 2 — الاشكالية: افتراق المسلمين بعد خديعة التحكيم؛ فريقٌ مع علي، فريقٌ رفض التحكيم (المحكّمة) واتجه إلى النهروان، فريقٌ مع معاوية بالشام
//   Slide 3 — شغور منصب الخليفة: مبايعة عبد الله بن وهب الراسبي، تخلّي علي عن الخلافة بعد قبوله التحكيم، الفوضى وتدخّل رجال معاوية، معركة النهروان
//   Slide 4 — فقدان السيطرة ومقتل علي: ضعف جيش علي، توسّع معاوية، مقتل علي يوم 17 رمضان 40هـ، مؤامرة الثلاثة (علي ومعاوية وعمرو) ونجاة اثنين منهم
//   Slide 5 — مبايعة جيش علي للحسن بن علي: تنازل الحسن عن الإمامة لمعاوية حقنًا للدماء، شرط عودتها للمسلمين بعد وفاة معاوية، 01 محرم 41هـ
//   Slide 6 — من الخلافة الراشدة إلى الملك العَضوض: دمشق عاصمةً، توريث الحكم لبني أمية، ملاحقة الحسن وآل البيت والمحكّمة وأهل النهروان، ردود فعل متفاوتة
// Every fact below is taken from those slides; nothing is added from outside them.

const IMG = '/images/lessons/nahrawan-muhakkima'

export const nahrawanMuhakkima: Lesson = {
  id: 'history-ibadi-g2-s1-l2',
  gradeId: 'history-ibadi-g2',
  moduleId: 'history-ibadi-g2',
  semesterId: 'history-ibadi-g2-s1',
  order: 2,
  status: 'published',
  estimatedMinutes: 35,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'مخيّمٌ عند ضفاف نهر دجلة قرب النهروان، خيامٌ متناثرة تحت سماء عاصفة',
    fr: 'Un campement au bord du Tigre près de Nahrawān, des tentes éparses sous un ciel orageux',
    en: 'A camp on the banks of the Tigris near Nahrawan, scattered tents under a stormy sky',
  },
  title: {
    ar: 'معركة النهروان وظهور المحكّمة',
    fr: 'La bataille de Nahrawān et l’apparition des Muḥakkima',
    en: 'The Battle of Nahrawan and the emergence of al-Muhakkima',
  },
  description: {
    ar: 'بعد خديعة التحكيم، افترق المسلمون ثلاث فرق. تابع كيف اتّجهت المحكّمة إلى النهروان، وكيف فقد عليٌّ السيطرة، ثمّ استُشهد، وكيف انتهت الخلافة الراشدة إلى مُلكٍ وراثيّ.',
    fr: 'Après la ruse de l’arbitrage, les musulmans se divisèrent en trois groupes. Suis comment les Muḥakkima se dirigèrent vers Nahrawān, comment ‘Alī perdit le contrôle puis fut assassiné, et comment le califat bien guidé se mua en un pouvoir héréditaire.',
    en: 'After the ruse of the arbitration, the Muslims split into three groups. Follow how al-Muhakkima headed to Nahrawan, how ‘Ali lost control and was then killed, and how the rightly-guided caliphate turned into hereditary rule.',
  },

  sections: [
    // 01 — Hook: the lesson's own problem statement (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'مخيّمٌ عند ضفاف نهر دجلة قرب النهروان، خيامٌ متناثرة تحت سماء عاصفة',
        fr: 'Un campement au bord du Tigre près de Nahrawān, des tentes éparses sous un ciel orageux',
        en: 'A camp on the banks of the Tigris near Nahrawan, scattered tents under a stormy sky',
      },
      title: {
        ar: 'إشكالية الدرس',
        fr: 'La question du cours',
        en: 'The lesson’s question',
      },
      question: {
        ar: 'كيف سيجتمع المسلمون بعد هذا بخليفةٍ واحد؟',
        fr: 'Comment les musulmans allaient-ils se rassembler à nouveau autour d’un seul calife ?',
        en: 'How would the Muslims come together again under a single caliph?',
      },
      intro: {
        ar: 'افترق المسلمون على إثر خديعة التحكيم إلى ثلاث فرق: فريقٌ بقي مع علي ينتظر أمره، وفريقٌ رفض التحكيم منذ صفّين واتّجه من حروراء إلى منطقة النهروان وسُمّوا المحكّمة، وفريقٌ بقي مع معاوية في الشام. افتح المهمّات لتكتشف كيف انتهى هذا الافتراق.',
        fr: 'Après la ruse de l’arbitrage, les musulmans se divisèrent en trois groupes : ceux qui restèrent avec ‘Alī, attendant ses ordres ; ceux qui refusèrent l’arbitrage depuis Ṣiffīn et se dirigèrent de Ḥarūrā’ vers Nahrawān — appelés al-Muḥakkima ; et ceux qui restèrent avec Mu‘āwiya au Shām. Ouvre les missions pour découvrir comment cette division prit fin.',
        en: 'After the ruse of the arbitration, the Muslims split into three groups: those who stayed with ‘Ali, awaiting his command; those who had refused the arbitration since Siffin and headed from Harura to the Nahrawan area — called al-Muhakkima; and those who stayed with Mu‘awiya in Shām. Open the missions to discover how this division ended.',
      },
    },

    // 02 — Mission map
    {
      kind: 'missions',
      id: 'missions',
      title: {
        ar: 'أربع مهمّات تنتظرك',
        fr: 'Quatre missions t’attendent',
        en: 'Four missions await you',
      },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنطلق إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'لماذا اتّجهت المحكّمة إلى النهروان؟', fr: 'Pourquoi les Muḥakkima se dirigèrent-ils vers Nahrawān ?', en: 'Why did al-Muhakkima head to Nahrawan?' },
          target: 'reading-vacant-seat',
          teaser: { ar: 'إمامٌ جديد، وخليفةٌ تخلّى عن منصبه.', fr: 'Un nouvel imam, un calife qui a renoncé à son poste.', en: 'A new imam, and a caliph who stepped away from his post.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف وقعت معركة النهروان؟', fr: 'Comment la bataille de Nahrawān eut-elle lieu ?', en: 'How did the Battle of Nahrawan happen?' },
          target: 'reading-chaos',
          teaser: { ar: 'فوضى، ومحرّضون، ومباغتةٌ عند نهر دجلة.', fr: 'Le chaos, des instigateurs, une attaque surprise au bord du Tigre.', en: 'Chaos, instigators, and a surprise attack by the Tigris.' },
        },
        {
          id: 'm3',
          question: { ar: 'كيف استُشهد عليّ بن أبي طالب؟', fr: 'Comment ‘Alī ibn Abī Ṭālib fut-il assassiné ?', en: 'How was ‘Ali ibn Abi Talib killed?' },
          target: 'reading-conspiracy',
          teaser: { ar: 'مؤامرةُ ثلاثة، ونجاةُ اثنين.', fr: 'Un complot à trois, deux survivants.', en: 'A plot of three, two survivors.' },
        },
        {
          id: 'm4',
          question: { ar: 'كيف تحوّلت الخلافة إلى مُلكٍ وراثيّ؟', fr: 'Comment le califat devint-il un pouvoir héréditaire ?', en: 'How did the caliphate become hereditary rule?' },
          target: 'reading-kingship',
          teaser: { ar: 'تنازلٌ حقنًا للدماء، ودولةٌ تُورَّث.', fr: 'Une renonciation pour épargner le sang, un État qui se transmet.', en: 'A renunciation to spare bloodshed, a state passed down by inheritance.' },
        },
      ],
    },

    // 03 — Vacant seat & departure to Nahrawan: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-vacant-seat',
      title: {
        ar: 'اقرأ: شغور المنصب وتوجّه المحكّمة إلى النهروان',
        fr: 'Lis : Le siège vacant et le départ des Muḥakkima vers Nahrawān',
        en: 'Read: The Vacant Seat and al-Muhakkima’s Journey to Nahrawan',
      },
      intro: {
        ar: 'اقرأ هذا المشهد التاريخيّ بتمعّن، لتكتشف كيف تصرّفت المحكّمة بعد خديعة التحكيم.',
        fr: 'Lis attentivement ce récit historique pour découvrir comment réagirent les Muḥakkima après la ruse de l’arbitrage.',
        en: 'Read this historical narrative carefully to discover how al-Muhakkima responded after the ruse of arbitration.',
      },
      image: `${IMG}/abdallah-ibn-wahb.png`,
      imageAlt: {
        ar: 'مخيّمٌ متقشّفٌ في الصحراء عند مشارف النهروان، رايةٌ بسيطة مغروزة بين الخيام',
        fr: 'Un campement austère dans le désert aux abords de Nahrawān, un étendard simple planté entre les tentes',
        en: 'An austere desert camp on the outskirts of Nahrawan, a plain banner planted among the tents',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'افتراق الصفوف بعد صفّين والتحكيم',
            fr: 'La dispersion des rangs après Ṣiffīn et l’arbitrage',
            en: 'The Division of Ranks After Siffin and Arbitration',
          },
          text: {
            ar: 'بعد واقعة صفّين وخديعة التحكيم التي نزعت عليَّ بن أبي طالب من الخلافة، وجد المسلمون أنفسهم أمام واقعٍ جديدٍ ومؤلم؛ فقد تفرّقت كلمتهم إلى ثلاث فرق: فريقٌ بقي في الكوفة مع عليّ، وفريقٌ انحاز إلى معاوية في بلاد الشام، وفريقٌ ثالث رفض التحكيم منذ البداية واعتبر التنازل عن كتاب الله خطيئةً لا تجوز، وهؤلاء هم الذين عُرفوا بـ «المحكّمة» لأنّ شعارهم كان: لا حُكم إلّا لله.',
            fr: 'Après les événements de Ṣiffīn et la ruse de l’arbitrage qui dépouilla ‘Alī ibn Abī Ṭālib du califat, les musulmans se trouvèrent face à une réalité nouvelle et douloureuse. Leurs rangs se divisèrent en trois groupes : une partie resta à Kūfa avec ‘Alī, une autre se rallia à Mu‘āwiya au Shām, et un troisième groupe rejeta l’arbitrage dès le premier instant, estimant que céder sur le Livre d’Allah n’était pas permis. Ce sont eux qu’on appela les « Muḥakkima », car leur devise était : « Le jugement n’appartient qu’à Allah ».',
            en: 'After the events of Siffin and the ruse of arbitration that stripped ‘Ali ibn Abi Talib of the caliphate, Muslims faced a painful new reality. Their ranks split into three factions: one remained in Kufa with ‘Ali, another sided with Mu‘awiya in the Levant, and a third rejected arbitration from the outset, believing that compromising on the Book of God was impermissible. These became known as « al-Muhakkima », for their motto was: « Judgment belongs to God alone ».',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'بيعة عبد الله بن وهب الراسبيّ',
            fr: 'L’allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī',
            en: 'The Pledge to Abdullah ibn Wahb al-Rasibi',
          },
          text: {
            ar: 'رأى أهل المحكّمة أنّ منصب قيادة المسلمين قد شغر بتخلّي عليّ عن الخلافة وقبوله تحكيم الرجال، فأيقنوا أنّ الأمّة لا تستقيم بغير إمامٍ يقودها بالحقّ والعدل. اجتمع وجهاؤهم، وتشاوروا في أمرهم، ثمّ بايعوا رجلًا عُرف بالورع والزهد وكثرة العبادة، هو عبد الله بن وهب الراسبيّ، ليكون إمامًا عليهم ويسير بهم على سيرة النبيّ ﷺ والخلفاء الراشدين أبي بكر وعمر.',
            fr: 'Constatant que la direction suprême des musulmans était devenue vacante depuis que ‘Alī avait renoncé au califat en acceptant l’arbitrage des hommes, les Muḥakkima comprirent que la communauté ne pouvait vivre sans un guide légitime. Leurs notables se réunirent, se concertèrent, puis prêtèrent allégeance à un homme réputé pour sa piété, son détachement du monde et ses dévotions assidues : ‘Abdullāh ibn Wahb ar-Rāsibī, pour être leur imam et les conduire selon la voie du Prophète ﷺ et des premiers califes Abū Bakr et ‘Umar.',
            en: 'Observing that the leadership of the Muslims had been left vacant since ‘Ali stepped away from the caliphate by accepting human arbitration, al-Muhakkima recognized that the community could not endure without a righteous guide. Their notables gathered, consulted together, and pledged allegiance to a man renowned for piety, asceticism, and devoted worship: Abdullah ibn Wahb al-Rasibi, to be their imam and govern according to the path of the Prophet ﷺ and the first caliphs Abu Bakr and Umar.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'النداء المرفوض ودعوة وحدة الصفّ',
            fr: 'L’appel sans réponse et l’invitation à l’unité',
            en: 'The Unanswered Call and the Plea for Unity',
          },
          text: {
            ar: 'عندما عزم عليّ بن أبي طالب على جمع الجيش من جديد لقتال معاوية، أرسل يدعو المحكّمة لتنضمّ إليه. لكنّ المحكّمة لم تُجبه؛ لأنّه في نظرهم لم يَعُد الخليفة الشرعيّ بعد أن رضي بالتحكيم وتنازل عن حقّ الأمّة. ومع ذلك لم يقطعوا حبل الحوار، بل خيّروه أن يدخل في طاعة الإمام الذي بايعوه بالشورى إن كان حريصًا على وحدة صفّ المسلمين. استمع عليّ لموقفهم وشرح لهم ما دفعه إلى التحكيم، لكنّ الأمّة بقيت منقسمة، وباتت الرياح تنذر بعاصفةٍ قريبة.',
            fr: 'Lorsque ‘Alī ibn Abī Ṭālib décida de rassembler de nouveau une armée pour affronter Mu‘āwiya, il appela les Muḥakkima à le rejoindre. Mais ceux-ci ne répondirent pas à son appel : à leurs yeux, il avait cessé d’être le calife légitime après avoir accepté l’arbitrage. Ils ne fermèrent pourtant pas la porte au dialogue : ils lui proposèrent de prêter allégeance à l’imam qu’ils avaient élu par concertation s’il souhaitait préserver l’unité des musulmans. ‘Alī écouta leur point de vue et leur expliqua ses raisons, mais les musulmans demeurèrent divisés, dans un climat lourd de menaces.',
            en: 'When ‘Ali ibn Abi Talib resolved to reassemble an army to fight Mu‘awiya, he summoned al-Muhakkima to join him. But al-Muhakkima did not answer his call; in their eyes, he had relinquished his legitimate status as caliph after consenting to arbitration. Yet they did not shut the door on dialogue: they invited him to enter into allegiance to the imam they had chosen through consultation if he truly sought the unity of Muslims. ‘Ali heard their stance and explained his reasoning, but the community remained divided, with storms looming on the horizon.',
          },
        },
      ],
    },

    // 04 — Vacant seat / al-Muhakkima's departure: domino chain (slide 3, part 1)
    {
      kind: 'chain',
      id: 'vacant-seat',
      title: {
        ar: 'شغور منصب الخليفة',
        fr: 'Le siège du califat vacant',
        en: 'The caliph’s seat left vacant',
      },
      intro: {
        ar: 'اختر ما حدث في كلّ حلقة لتتابع كيف اتّجهت المحكّمة إلى النهروان.',
        fr: 'Choisis ce qui se passa à chaque maillon pour suivre comment les Muḥakkima se dirigèrent vers Nahrawān.',
        en: 'Choose what happened at each link to follow how al-Muhakkima headed to Nahrawan.',
      },
      image: `${IMG}/abdallah-ibn-wahb.png`,
      imageAlt: {
        ar: 'مخيّمٌ متقشّفٌ في الصحراء عند مشارف النهروان، رايةٌ بسيطة مغروزة بين الخيام',
        fr: 'Un campement austère dans le désert aux abords de Nahrawān, un étendard simple planté entre les tentes',
        en: 'An austere desert camp on the outskirts of Nahrawan, a plain banner planted among the tents',
      },
      start: {
        ar: 'بعد خدعة التحكيم التي نزعت عليًا من الخلافة، اتّجهت المحكّمة إلى منطقة النهروان.',
        fr: 'Après la ruse de l’arbitrage, qui dépouilla ‘Alī du califat, les Muḥakkima se dirigèrent vers la région de Nahrawān.',
        en: 'After the ruse of the arbitration, which stripped ‘Ali of the caliphate, al-Muhakkima headed to the Nahrawan area.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'مَن بايعته المحكّمة إمامًا عليها؟', fr: 'Qui les Muḥakkima prirent-ils pour imam ?', en: 'Whom did al-Muhakkima take as their imam?' },
          correct: {
            ar: 'بايعوا عبد الله بن وهب الراسبيّ إمامًا لهم.',
            fr: 'Ils prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī comme imam.',
            en: 'They pledged allegiance to Abdullah ibn Wahb al-Rasibi as their imam.',
          },
          distractors: [
            {
              label: { ar: 'تركوا المنصب شاغرًا بلا إمام', fr: 'Ils laissèrent le poste vacant, sans imam', en: 'They left the post vacant, without an imam' },
              hint: { ar: 'الدرس يسمّي إمامًا بعينه بايعوه.', fr: 'La leçon nomme un imam précis auquel ils prêtèrent allégeance.', en: 'The lesson names a specific imam they pledged to.' },
            },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'ماذا فعل عليّ وهو يتجهّز لقتال معاوية؟', fr: 'Que fit ‘Alī en se préparant à combattre Mu‘āwiya ?', en: 'What did ‘Ali do while preparing to fight Mu‘awiya?' },
          correct: {
            ar: 'عاد يجمع الجيش من جديد، لكنّ المحكّمة لم تُجبه.',
            fr: 'Il se mit à rassembler de nouveau une armée, mais les Muḥakkima ne lui répondirent pas.',
            en: 'He set about gathering an army again, but al-Muhakkima did not answer his call.',
          },
          distractors: [
            {
              label: { ar: 'انضمّت المحكّمة إلى جيشه فورًا', fr: 'Les Muḥakkima rejoignirent aussitôt son armée', en: 'Al-Muhakkima immediately joined his army' },
              hint: { ar: 'الدرس يذكر أنّهم لم يُجيبوه.', fr: 'La leçon précise qu’ils ne lui répondirent pas.', en: 'The lesson states they did not answer him.' },
            },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'لماذا لم تُجب المحكّمة نداء عليّ؟', fr: 'Pourquoi les Muḥakkima ne répondirent-ils pas à l’appel de ‘Alī ?', en: 'Why did al-Muhakkima not answer ‘Ali’s call?' },
          correct: {
            ar: 'لأنّه لم يَعُد خليفةً في نظرهم، بعد أن تخلّى عنها ورضي بالتحكيم وأوقف القتال في صفّين.',
            fr: 'Parce qu’il n’était plus calife à leurs yeux, ayant renoncé à ce titre en acceptant l’arbitrage et en arrêtant le combat à Ṣiffīn.',
            en: 'Because he was no longer caliph in their eyes, having given up the title by accepting the arbitration and halting the fighting at Siffin.',
          },
          distractors: [
            {
              label: { ar: 'لأنّهم كانوا يفضّلون معاوية عليه', fr: 'Parce qu’ils préféraient Mu‘āwiya', en: 'Because they preferred Mu‘awiya to him' },
              hint: { ar: 'الدرس يربط رفضهم بتخلّيه عن الخلافة برضاه بالتحكيم، لا بتفضيل معاوية.', fr: 'La leçon lie leur refus à sa renonciation au califat en acceptant l’arbitrage, non à une préférence pour Mu‘āwiya.', en: 'The lesson ties their refusal to his giving up the caliphate by accepting arbitration, not to any preference for Mu‘awiya.' },
            },
          ],
        },
        {
          id: 's4',
          prompt: { ar: 'بماذا خيّرت المحكّمةُ عليًا؟', fr: 'Que proposèrent les Muḥakkima à ‘Alī ?', en: 'What did al-Muhakkima offer ‘Ali as a choice?' },
          correct: {
            ar: 'خيّروه أن يدخل في طاعة الخليفة المبايَع إن أراد وحدة الصفّ، فقَبِل وبيّن لهم سبب قبوله التحكيم.',
            fr: 'Ils lui proposèrent d’entrer dans l’obéissance à l’imam qu’ils avaient élu, s’il voulait l’unité des rangs ; il accepta et leur expliqua pourquoi il avait accepté l’arbitrage.',
            en: 'They gave him the choice to enter into obedience to the imam they had pledged to, if he wanted unity of ranks; he accepted and explained to them why he had accepted the arbitration.',
          },
          distractors: [
            {
              label: { ar: 'طلبوا منه أن يقاتلهم ليثبت صدقه', fr: 'Ils lui demandèrent de les combattre pour prouver sa sincérité', en: 'They asked him to fight them to prove his sincerity' },
              hint: { ar: 'الدرس يذكر خيارًا للطاعة ووحدة الصفّ، لا طلبًا للقتال.', fr: 'La leçon évoque un choix d’obéissance et d’unité, non une demande de combat.', en: 'The lesson describes a choice of obedience and unity, not a demand to fight.' },
            },
          ],
        },
      ],
      ending: {
        ar: 'وهكذا بقي المسلمون بلا قيادةٍ واحدة، في أيّامٍ مهّدت للفوضى.',
        fr: 'Ainsi les musulmans restèrent sans direction unique, des jours qui préparèrent le chaos.',
        en: 'And so the Muslims remained without a single leadership — days that paved the way for chaos.',
      },
    },

    // 05 — Plots of instigators & tragedy at Nahrawan: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-chaos',
      title: {
        ar: 'اقرأ: دَسائس المحرّضين ومأساة النهروان',
        fr: 'Lis : Les intrigues des instigateurs et la tragédie de Nahrawān',
        en: 'Read: The Plots of Instigators and the Tragedy of Nahrawan',
      },
      intro: {
        ar: 'اقرأ كيف أدّت الفتنة وغياب القيادة الموحّدة إلى معركة النهروان الدامية.',
        fr: 'Découvre comment les intrigues et l’absence de direction unique conduisirent à la tragique bataille de Nahrawān.',
        en: 'Discover how turmoil and the absence of unified leadership led to the tragic battle of Nahrawan.',
      },
      image: `${IMG}/nahrawan-ambush.png`,
      imageAlt: {
        ar: 'فرسانٌ يباغتون مخيّمًا عند ضفاف نهر دجلة في ضوء الفجر',
        fr: 'Des cavaliers surprenant un campement au bord du Tigre à l’aube',
        en: 'Horsemen ambushing a camp by the banks of the Tigris at dawn',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'غياب القيادة وانتشار الفوضى',
            fr: 'L’absence de direction et la montée du désordre',
            en: 'Absence of Leadership and the Rise of Disorder',
          },
          text: {
            ar: 'كانت تلك الأيّام من أصعب الفترات التي مرّت بها الأمّة الإسلاميّة؛ إذ عمّت الفوضى أرجاء البلاد في غياب خليفةٍ واحدٍ يجمع الكلمة. واستغلّ أهل الفساد والفتنة هذا الاضطراب ليعيثوا في الأرض شغبًا وسلبًا، وتعدّد المفسدون الذين ركبوا موجة الخلاف ليشعلوا نار العداوة بين أبناء الدين الواحد.',
            fr: 'Ces jours furent parmi les plus sombres de l’histoire musulmane. Le désordre s’étendit partout en l’absence d’un calife unique capable de rassembler la communauté. Les fauteurs de troubles et les opportunistes profitèrent de cette instabilité pour semer le chaos, pillant et attisant les querelles entre frères de foi.',
            en: 'Those days were among the darkest in Muslim history. Disorder spread widely in the absence of a single caliph to unite the community. Troublemakers and opportunists seized upon the instability to stir unrest, loot, and fan the flames of hostility among brethren of faith.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'مكيدة رجال معاوية المتخفّين',
            fr: 'Le piège des agents infiltrés de Mu‘āwiya',
            en: 'The Trap of Mu‘awiya’s Infiltrated Agents',
          },
          text: {
            ar: 'بينما كان عليّ والمحكّمة يحاولان التوصّل إلى تفاهمٍ يوقف التصعيد، اندسّ رجالٌ موالون لمعاوية داخل جيش عليّ، متنكّرين في ثياب النصح والغيرة على الدين. وأخذ هؤلاء المحرّضون يهمسون في أذن عليّ ويدفعونه إلى قتال المحكّمة، وملفّقين بحقّهم التهم والأكاذيب، وزاعمين أنّهم هم الذين يقفون خلف كلّ شغبٍ وفتنة.',
            fr: 'Tandis que ‘Alī et les Muḥakkima cherchaient encore un terrain d’entente pour apaiser les tensions, des partisans de Mu‘āwiya infiltrés au sein de l’armée de ‘Alī s’activèrent dans l’ombre. Ces agitateurs dissimulés poussèrent ‘Alī à faire la guerre aux Muḥakkima, leur attribuant faussement les actes de violence et de rébellion qui secouaient la région.',
            en: 'While ‘Ali and al-Muhakkima were still seeking common ground to de-escalate tensions, partisans of Mu‘awiya infiltrated into ‘Ali’s army went to work in secret. Masquerading as loyal advisers, these conspirators urged ‘Ali to march against al-Muhakkima, pinning false accusations on them and blaming them for all the unrest and rioting.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'المباغتة الدامية على ضفاف دجلة',
            fr: 'L’attaque surprise meurtrière sur les rives du Tigre',
            en: 'The Deadly Ambush on the Banks of the Tigris',
          },
          text: {
            ar: 'لم يزل المحرّضون يُلحّون على عليّ حتى سار بجيشه نحو معسكر المحكّمة في النهروان عند نهر دجلة، فباغتهم بضربةٍ مفاجئة. كانت الكارثة عظيمة؛ حيث سقط الآلاف من المحكّمة شهداء، وكان من بينهم خيرة القرّاء وحفَظة القرآن والعلماء الزاهدون. ومن نجا منهم استنكر هذا الفعل الشديد واعتزل الكوفة. ولم ينتفع عليّ من هذه المعركة؛ بل تفرّق معظم جيشه ووهنت قوّته، فلم يَعُد قادرًا على المسير إلى الشام لمواجهة معاوية.',
            fr: 'Les instigateurs insistèrent tant que ‘Alī finit par marcher avec son armée vers le campement des Muḥakkima à Nahrawān, au bord du Tigre, et les surprit par une offensive foudroyante. La tragédie fut immense : des milliers de Muḥakkima périrent, parmi lesquels les plus pieux récitateurs du Coran et des savants dévoués. Les survivants condamnèrent cet acte cruel et s’éloignèrent de Kūfa. Loin de renforcer ‘Alī, cette bataille dispersa ses troupes et anéantit ses forces, le laissant incapable d’avancer vers le Shām pour contrer Mu‘āwiya.',
            en: 'The instigators pressed ‘Ali relentlessly until he marched his army toward al-Muhakkima’s camp at Nahrawan by the Tigris, launching a sudden assault. The tragedy was devastating: thousands among al-Muhakkima were killed, including prominent Quran memorizers and devoted scholars. Those who survived condemned the assault and withdrew from Kufa. Far from aiding ‘Ali, the battle fractured his army, leaving his forces depleted and incapable of marching north to face Mu‘awiya.',
          },
        },
      ],
    },

    // 06 — Chaos and the ambush at Nahrawan: hotspot explorer (slide 3, part 2)
    {
      kind: 'explorer',
      id: 'chaos',
      title: {
        ar: 'الفوضى ومعركة النهروان',
        fr: 'Le chaos et la bataille de Nahrawān',
        en: 'Chaos and the Battle of Nahrawan',
      },
      intro: {
        ar: 'كانت تلك أيّام غياب القيادة الواحدة. اضغط على عناصر المشهد لتكتشف ما جرى.',
        fr: 'Ce furent des jours sans direction unique. Touche les éléments de la scène pour découvrir ce qui se passa.',
        en: 'Those were days without a single leadership. Tap the elements of the scene to discover what happened.',
      },
      image: `${IMG}/nahrawan-ambush.png`,
      imageAlt: {
        ar: 'فرسانٌ يباغتون مخيّمًا عند ضفاف نهر دجلة في ضوء الفجر',
        fr: 'Des cavaliers surprenant un campement au bord du Tigre à l’aube',
        en: 'Horsemen ambushing a camp by the banks of the Tigris at dawn',
      },
      hotspots: [
        {
          id: 'disorder',
          x: 20,
          y: 30,
          label: { ar: 'عمّت الفوضى', fr: 'Le chaos se répandit', en: 'Disorder spread' },
          description: {
            ar: 'عمّت الفوضى بسبب غياب القيادة الواحدة، وكثر المفسدون الذين وجدوا الفرصة للشغب والسرقة وغيرها.',
            fr: 'Le chaos se répandit en l’absence d’une direction unique, et les fauteurs de trouble se multiplièrent, profitant de l’occasion pour semer le désordre et voler.',
            en: 'Chaos spread in the absence of a single leadership, and corrupters multiplied, seizing the chance to riot and steal.',
          },
        },
        {
          id: 'instigators',
          x: 50,
          y: 45,
          label: { ar: 'المحرّضون', fr: 'Les instigateurs', en: 'The instigators' },
          description: {
            ar: 'بينما كان عليّ والمحكّمة يحاولان الوصول إلى الوفاق، تدخّل بعض رجال معاوية المتخفّين في جيش عليّ ليُشيروا عليه أن يسير لحرب المحكّمة، وألصقوا بهم تهمة إثارة الفتنة وأعمال الشغب.',
            fr: 'Tandis que ‘Alī et les Muḥakkima cherchaient un accord, des hommes de Mu‘āwiya infiltrés dans l’armée de ‘Alī le poussèrent à marcher contre les Muḥakkima, leur imputant la sédition et les troubles.',
            en: 'While ‘Ali and al-Muhakkima were trying to reach an accord, some of Mu‘awiya’s men, disguised within ‘Ali’s army, urged him to march against al-Muhakkima, pinning on them the charge of stirring sedition and unrest.',
          },
        },
        {
          id: 'ambush',
          x: 78,
          y: 55,
          label: { ar: 'المباغتة عند النهروان', fr: 'L’attaque surprise à Nahrawān', en: 'The ambush at Nahrawan' },
          description: {
            ar: 'لم يتوقّف المحرّضون عن دفع عليّ حتى باغت المحكّمة وهم في جهة النهروان على نهر دجلة، فقُتل منهم الآلاف.',
            fr: 'Les instigateurs ne cessèrent de pousser ‘Alī jusqu’à ce qu’il surprît les Muḥakkima du côté de Nahrawān, sur le Tigre, où des milliers d’entre eux furent tués.',
            en: 'The instigators kept pressing ‘Ali until he ambushed al-Muhakkima at Nahrawan on the Tigris, and thousands of them were killed.',
          },
        },
        {
          id: 'aftermath',
          x: 85,
          y: 25,
          label: { ar: 'بعد المعركة', fr: 'Après la bataille', en: 'After the battle' },
          description: {
            ar: 'مَن تبقّى من المحكّمة أنكر عمل عليّ وابتعد عن الكوفة، ولم يسر عليّ لقتال معاوية لتفرّق جيشه بعد الحادثة.',
            fr: 'Les Muḥakkima survivants désavouèrent l’acte de ‘Alī et s’éloignèrent de Kūfa ; et ‘Alī ne marcha plus contre Mu‘āwiya, son armée s’étant dispersée après l’événement.',
            en: 'The surviving members of al-Muhakkima denounced ‘Ali’s act and moved away from Kufa; and ‘Ali did not march against Mu‘awiya, as his army had scattered after the event.',
          },
        },
      ],
    },

    // 05 — Loss of control, step by step: interactive timeline (slide 4, part 1)
    {
      kind: 'timeline',
      id: 'losing-control',
      title: {
        ar: 'فقدان السيطرة',
        fr: 'La perte de contrôle',
        en: 'Losing control',
      },
      intro: {
        ar: 'بعد النهروان، بدأ الأمر يفلت من يد عليّ شيئًا فشيئًا. تنقّل بين المحطّات لتتابع كيف تدهور الوضع.',
        fr: 'Après Nahrawān, la situation échappa peu à peu à ‘Alī. Avance d’une étape à l’autre pour suivre la dégradation.',
        en: 'After Nahrawan, things slipped gradually out of ‘Ali’s hands. Move through the stops to follow how the situation unraveled.',
      },
      steps: [
        {
          id: 'small-army',
          period: { ar: 'بعد النهروان', fr: 'Après Nahrawān', en: 'After Nahrawan' },
          label: { ar: 'جيشٌ صغير', fr: 'Une armée réduite', en: 'A small army' },
          detail: {
            ar: 'أصبح جيش عليّ صغيرًا بعد قتل أهل النهروان، فلم يَعُد متمكّنًا ولا قادرًا على إخضاع معاوية.',
            fr: 'Après le massacre des gens de Nahrawān, l’armée de ‘Alī devint réduite, incapable de soumettre Mu‘āwiya.',
            en: 'After the killing of the people of Nahrawan, ‘Ali’s army became small, no longer able to subdue Mu‘awiya.',
          },
        },
        {
          id: 'muawiya-expands',
          period: { ar: 'في الوقت نفسه', fr: 'Dans le même temps', en: 'At the same time' },
          label: { ar: 'توسّع معاوية', fr: 'L’expansion de Mu‘āwiya', en: 'Mu‘awiya expands' },
          detail: {
            ar: 'أصبح معاوية يرسل جيوشًا للسيطرة على أقاليم مصر والحجاز واليمن والعراق، فعاثت جيوشه فسادًا.',
            fr: 'Mu‘āwiya se mit à envoyer des armées prendre le contrôle de l’Égypte, du Ḥijāz, du Yémen et de l’Irak, semant le désordre.',
            en: 'Mu‘awiya began sending armies to take control of Egypt, the Hijaz, Yemen, and Iraq, and his forces spread corruption.',
          },
        },
        {
          id: 'ali-pursues',
          period: { ar: 'بينما يُعيد عليّ التجمّع', fr: 'Pendant que ‘Alī tente de se regrouper', en: 'As ‘Ali tries to regroup' },
          label: { ar: 'مطاردةٌ بما تيسّر', fr: 'Une poursuite avec les moyens du bord', en: 'A pursuit with what little remained' },
          detail: {
            ar: 'سعى عليّ وراء جيوش معاوية بما استطاع أن يجمع من الجنود، في محاولةٍ لوقف توسّعها.',
            fr: '‘Alī poursuivit les armées de Mu‘āwiya avec les soldats qu’il put rassembler, tentant d’arrêter leur expansion.',
            en: '‘Ali pursued Mu‘awiya’s armies with whatever soldiers he could gather, trying to halt their expansion.',
          },
        },
        {
          id: 'assassination',
          period: { ar: '17 رمضان 40هـ', fr: '17 Ramaḍān 40 H', en: '17 Ramadan 40 AH' },
          label: { ar: 'مقتل عليّ', fr: 'L’assassinat de ‘Alī', en: 'The killing of ‘Ali' },
          certainty: 'established',
          detail: {
            ar: 'طُعن عليّ بن أبي طالب عند باب المسجد صباح ١٧ رمضان ٤٠هـ.',
            fr: '‘Alī ibn Abī Ṭālib fut poignardé à la porte de la mosquée au matin du 17 Ramaḍān 40 H.',
            en: '‘Ali ibn Abi Talib was stabbed at the mosque door on the morning of 17 Ramadan 40 AH.',
          },
        },
      ],
    },

    // 08 — The dawn conspiracy & assassination of Ali: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-conspiracy',
      title: {
        ar: 'اقرأ: مؤامرة الفجر ومقتل عليّ',
        fr: 'Lis : Le complot de l’aube et l’assassinat de ‘Alī',
        en: 'Read: The Dawn Conspiracy and the Assassination of ‘Ali',
      },
      intro: {
        ar: 'اقرأ تفاصيل المؤامرة الثلاثية التي دُبّرت في فجر رمضان سنة 40 للهجرة.',
        fr: 'Lis les détails du complot visant trois dirigeants au matin de Ramaḍān en l’an 40 de l’Hégire.',
        en: 'Read the details of the three-way conspiracy plotted at dawn during Ramadan in 40 AH.',
      },
      image: `${IMG}/mosque-door-dawn.png`,
      imageAlt: {
        ar: 'بابُ مسجدٍ قديم عند الفجر، وظلالٌ تقترب في الممرّ',
        fr: 'La porte d’une vieille mosquée à l’aube, des ombres s’approchant dans l’allée',
        en: 'The door of an old mosque at dawn, shadows approaching in the passage',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'ضعف الكوفة وتوسّع جيوش معاوية',
            fr: 'L’affaiblissement de Kūfa et l’offensive de Mu‘āwiya',
            en: 'The Weakening of Kufa and Mu‘awiya’s Expansion',
          },
          text: {
            ar: 'بعد واقعة النهروان، وجد عليّ بن أبي طالب نفسه بجيشٍ صغيرٍ منهكٍ لم يَعُد يقوى على فرض الاستقرار أو ردع الخصوم. وفي تلك الأثناء، اغتنم معاوية بن أبي سفيان الفرصة، فأرسل الجيوش تلو الجيوش لبسط سيطرته على مصر، والحجاز، واليمن، وأطراف العراق، وأخذت فرقه تبثّ الخوف وتعيث فسادًا في الأقاليم، بينما كان عليّ يحاول بما تبقّى معه من قليل الجند ملاحقتهم ودرء شرورهم.',
            fr: 'Après les événements de Nahrawān, ‘Alī ibn Abī Ṭālib se retrouva à la tête d’une troupe réduite et épuisée, incapable de maintenir l’ordre ou de soumettre ses rivaux. Profitant de cet affaiblissement, Mu‘āwiya envoya des colonnes armées s’emparer de l’Égypte, du Ḥijāz, du Yémen et des confins de l’Irak. Ses troupes semèrent la terreur dans les provinces, tandis que ‘Alī tentait désespérément, avec le peu d’hommes qui lui restait, de freiner leur progression.',
            en: 'Following the tragedy of Nahrawan, ‘Ali ibn Abi Talib was left with a small, exhausted force, unable to impose stability or deter rivals. Mu‘awiya seized this moment, dispatching army after army to seize control of Egypt, the Hijaz, Yemen, and Iraqi borderlands. His forces spread corruption and fear across the regions, while ‘Ali struggled with his few remaining men to pursue them and contain the damage.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'اتّفاق الثلاثة على التخلّص من الرؤوس',
            fr: 'L’entente pour éliminer les trois chefs',
            en: 'The Pact to Eliminate the Three Leaders',
          },
          text: {
            ar: 'في خضمّ هذا النزاع الدامي، رأى بعض الساخطين أنّ استمرار الفتنة سببه رؤوس النزاع، فاتّفق ثلاثة رجالٍ على خطّةٍ اغتياليّةٍ واحدة: أن يقتلوا في يومٍ وتوقيتٍ واحد كلًّا من عليّ بن أبي طالب في الكوفة، ومعاوية بن أبي سفيان في دمشق، وعمرو بن العاص في مصر، ظانّين أنّ موت هؤلاء الثلاثة سيُريح المسلمين من الصراع ويفتح الباب لعهدٍ جديد.',
            fr: 'Au cœur de ces guerres fratricides, des conspirateurs jugèrent que les troubles provenaient des chefs de chaque faction. Trois hommes scellèrent alors un pacte d’assassinat synchronisé : frapper le même jour, au même instant, ‘Alī ibn Abī Ṭālib à Kūfa, Mu‘āwiya ibn Abī Sufyān à Damas, et ‘Amr ibn al-‘Āṣ en Égypte, pensant que la disparition de ces trois figures délivrerait la communauté du chaos.',
            en: 'In the midst of these bloody disputes, certain disgruntled men believed the prolonged strife was driven by the heads of the rival camps. Three individuals formed a synchronized assassination pact: to strike at the exact same day and hour against ‘Ali ibn Abi Talib in Kufa, Mu‘awiya ibn Abi Sufyan in Damascus, and ‘Amr ibn al-‘As in Egypt, believing their elimination would relieve Muslims of conflict and open a new chapter.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'صباح السابع عشر من رمضان',
            fr: 'Le matin du 17 Ramaḍān 40 H',
            en: 'The Morning of 17 Ramadan 40 AH',
          },
          text: {
            ar: 'حلّ فجر يوم الجمعة 17 رمضان سنة 40 للهجرة، وحانت ساعة التنفيذ؛ فماذا كانت النتيجة؟ لم يخرج عمرو بن العاص إلى الصلاة في مصر لمرضٍ أصابه فأفلت من الضربة، وضُرب معاوية في دمشق فأُصيب في إِليَتِه لكنّه نجا وعولج جرحه، أمّا عليّ بن أبي طالب فقد طُعن عند باب مسجد الكوفة غدرًا، واستُشهد متأثّرًا بجراحه. وهكذا لم يُقتل من الثلاثة إلّا عليّ، لتتعقّد الأمور أكثر فأكثر.',
            fr: 'À l’aube du 17 Ramaḍān de l’an 40 de l’Hégire, l’attentat eut lieu : que se passa-t-il ? En Égypte, ‘Amr ibn al-‘Āṣ ne sortit pas à la prière ce matin-là car il était souffrant, échappant ainsi au guet-apens. À Damas, Mu‘āwiya fut touché à la hanche mais survécut et fut soigné. À Kūfa en revanche, ‘Alī ibn Abī Ṭālib fut mortellement poignardé à l’entrée de la mosquée et succomba à ses blessures. De ces trois cibles, seul ‘Alī périt, plongeant le califat dans une crise encore plus inextricable.',
            en: 'At dawn on 17 Ramadan 40 AH, the hour of execution struck. What was the outcome? In Egypt, ‘Amr ibn al-‘As did not come out to lead prayer due to an illness, escaping the strike entirely. In Damascus, Mu‘awiya was struck in the hip, but survived and recovered from his wound. In Kufa, however, ‘Ali ibn Abi Talib was fatally stabbed at the entrance of the mosque and fell a martyr. Thus, among the three, only ‘Ali was killed, plunging the Muslim community into even deeper turmoil.',
          },
        },
      ],
    },

    // 09 — The conspiracy and its outcome: chat replay (slide 4, part 2)
    {
      kind: 'chat',
      id: 'conspiracy',
      title: {
        ar: 'مؤامرة الثلاثة',
        fr: 'Le complot des trois',
        en: 'The conspiracy of three',
      },
      intro: {
        ar: 'تابع ما قيل عن تلك المؤامرة، كأنّك تقرأ رسائل من ذلك الصباح.',
        fr: 'Suis ce qui fut rapporté de ce complot, comme si tu lisais des messages de ce matin-là.',
        en: 'Follow what was said about that conspiracy, as if reading messages from that morning.',
      },
      image: `${IMG}/mosque-door-dawn.png`,
      imageAlt: {
        ar: 'بابُ مسجدٍ قديم عند الفجر، وظلالٌ تقترب في الممرّ',
        fr: 'La porte d’une vieille mosquée à l’aube, des ombres s’approchant dans l’allée',
        en: 'The door of an old mosque at dawn, shadows approaching in the passage',
      },
      speakers: [
        { id: 'narrator', name: { ar: 'الراوي', fr: 'Le narrateur', en: 'The narrator' }, avatar: '✦', side: 'start', tone: 'night' },
        { id: 'historians', name: { ar: 'رواة الخبر', fr: 'Les rapporteurs', en: 'The reporters' }, avatar: '◆', side: 'end', tone: 'clay' },
      ],
      steps: [
        {
          type: 'msg',
          id: 'setup',
          who: 'narrator',
          text: {
            ar: 'وفي صبح ١٧ رمضان ٤٠هـ، طُعن عليّ بن أبي طالب عند باب المسجد.',
            fr: 'Au matin du 17 Ramaḍān 40 H, ‘Alī ibn Abī Ṭālib fut poignardé à la porte de la mosquée.',
            en: 'On the morning of 17 Ramadan 40 AH, ‘Ali ibn Abi Talib was stabbed at the mosque door.',
          },
        },
        {
          type: 'msg',
          id: 'muawiya-mua',
          who: 'narrator',
          text: {
            ar: 'وفي الوقت نفسه، ضُرب معاوية في إليته وهو ذاهبٌ إلى المسجد.',
            fr: 'Au même moment, Mu‘āwiya fut frappé, atteint à la hanche, alors qu’il se rendait à la mosquée.',
            en: 'At the same time, Mu‘awiya was struck, wounded in the hip, while on his way to the mosque.',
          },
        },
        {
          type: 'msg',
          id: 'amr-absent',
          who: 'narrator',
          text: {
            ar: 'ولم يخرج عمرو بن العاص إلى المسجد في ذلك الوقت.',
            fr: 'Quant à ‘Amr ibn al-‘Āṣ, il ne sortit pas vers la mosquée à cette heure-là.',
            en: 'As for ‘Amr ibn al-‘As, he did not go out to the mosque at that time.',
          },
        },
        {
          type: 'reply',
          id: 'the-plan',
          who: 'historians',
          prompt: { ar: 'بِمَ قيل إنّ هؤلاء الثلاثة اتّفقوا؟', fr: 'Quel accord fut-il rapporté entre ces trois hommes ?', en: 'What agreement was reported between these three?' },
          options: [
            {
              id: 'right',
              correct: true,
              label: { ar: 'اتّفقوا على قتل عليّ وعمرو ومعاوية في وقتٍ واحد', fr: 'Ils s’accordèrent pour tuer ‘Alī, ‘Amr et Mu‘āwiya en même temps', en: 'They agreed to kill ‘Ali, ‘Amr, and Mu‘awiya at the same time' },
              hint: { ar: 'هذا ما قِيل في الدرس بالحرف.', fr: 'C’est exactement ce que rapporte la leçon.', en: 'This is exactly what the lesson states.' },
            },
            {
              id: 'wrong',
              correct: false,
              label: { ar: 'اتّفقوا على قتل عليّ وحده دون الآخرَين', fr: 'Ils s’accordèrent pour ne tuer que ‘Alī', en: 'They agreed to kill only ‘Ali, not the others' },
              hint: { ar: 'الدرس يذكر ثلاثة أهداف، لا هدفًا واحدًا.', fr: 'La leçon mentionne trois cibles, non une seule.', en: 'The lesson names three targets, not one.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'result',
          who: 'narrator',
          text: {
            ar: 'لكنّ الذي حدث أنّه لم يُقتَل منهم إلّا عليّ!',
            fr: 'Mais ce qui arriva, c’est que seul ‘Alī fut tué parmi eux !',
            en: 'But what actually happened was that only ‘Ali was killed among them!',
          },
        },
      ],
    },

    // 10 — Hasan's treaty & shift to hereditary monarchy: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-kingship',
      title: {
        ar: 'اقرأ: صلح الحسن وتحوّل الخلافة إلى مُلكٍ وراثيّ',
        fr: 'Lis : Le pacte d’al-Ḥasan et la mutation en monarchie héréditaire',
        en: 'Read: Hasan’s Treaty and the Shift to Hereditary Monarchy',
      },
      intro: {
        ar: 'اقرأ كيف انتهت الخلافة الراشدة القائمة على الشورى، وكيف تحوّل الحكم إلى مُلكٍ أمويّ وراثيّ.',
        fr: 'Lis comment le califat bien guidé fondé sur la concertation prit fin pour céder la place au pouvoir dynastique omeyyade.',
        en: 'Read how the rightly-guided caliphate based on Shura came to an end, giving way to hereditary Umayyad dynastic rule.',
      },
      image: `${IMG}/damascus-capital.png`,
      imageAlt: {
        ar: 'قصرٌ أمويّ في دمشق عند الغروب، أعلامٌ على الأسوار',
        fr: 'Un palais omeyyade à Damas au coucher du soleil, des étendards sur les remparts',
        en: 'An Umayyad palace in Damascus at sunset, banners on the ramparts',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'بيعة الحسن وتنازله حقنًا للدماء',
            fr: 'L’allégeance à al-Ḥasan et sa renonciation pour épargner le sang',
            en: 'The Pledge to Hasan and His Renunciation to Spare Blood',
          },
          text: {
            ar: 'بعد استشهاد عليّ، اجتمع أهل الكوفة وبايعوا ابنه الحسن بن عليّ ليكون إمامًا عليهم. ونظر الحسن إلى واقع المسلمين الممزّق والدماء الغزيرة التي سُفكت في الجمل وصفّين والنهروان، فآثر سلامة الأمّة ووحدتها، وأرسل إلى معاوية يعرض عليه التنازل عن الحكم حقنًا للدماء. لكنّ الحسن لم يتنازل دون شرط؛ بل اشترط أن يعود أمر الإمامة بعد وفاة معاوية إلى المسلمين وشوراهم لا إلى أحدٍ من ولده، وقبل معاوية بهذا الشرط، فتمّ تسليم الحكم في غرّة محرّم سنة 41 للهجرة.',
            fr: 'Après le martyre de ‘Alī, les partisans de Kūfa prêtèrent allégeance à son fils al-Ḥasan comme imam. Face aux divisions sanglantes et aux vies perdues lors des batailles du Chameau, de Ṣiffīn et de Nahrawān, al-Ḥasan choisit d’épargner le sang des musulmans. Il écrivit à Mu‘āwiya pour lui céder le pouvoir, à une condition capitale : qu’à la mort de Mu‘āwiya, le choix du dirigeant revienne à la communauté musulmane par concertation, sans être légué à ses descendants. Mu‘āwiya accepta cette clause, et la passation eut lieu le 1er Muḥarram de l’an 41 de l’Hégire.',
            en: 'Following ‘Ali’s martyrdom, people in Kufa pledged allegiance to his son Hasan as imam. Witnessing the fractured state of the community and the immense bloodshed at the Camel, Siffin, and Nahrawan, Hasan prioritized sparing Muslim lives. He sent word to Mu‘awiya offering to step aside from governance to stop the bleeding. But Hasan set a strict condition: upon Mu‘awiya’s death, the imamate must return to the Muslims through consultation, not be inherited by his sons. Mu‘awiya accepted this term, and power was handed over on 1 Muharram 41 AH.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'نقض العهد وبداية المُلك الوراثيّ',
            fr: 'La rupture de l’engagement et l’avènement du pouvoir héréditaire',
            en: 'Breach of Covenant and the Advent of Hereditary Rule',
          },
          text: {
            ar: 'ما إن استقرّ الحكم لمعاوية حتى اتّخذ من دمشق عاصمةً لدولته، وسرعان ما تنكّر للشرط الذي قطعه للحسن؛ فعمد إلى توريث العهد لابنه يزيد، فتحوّلت الخلافة الراشدة التي كانت تقوم على شورى كبار الصحابة والأمّة إلى مُلكٍ عَضوضٍ وراثيّ. وأسّس بذلك الدولة الأمويّة التي حكمت بالقوّة والوراثة لا باختيار أهل الحلّ والعقد.',
            fr: 'Dès que Mu‘āwiya eut assis son autorité, il établit sa capitale à Damas et oublia rapidement l’engagement pris devant al-Ḥasan. Il désigna son propre fils Yazīd comme successeur, transformant le califat bien guidé — autrefois fondé sur la concertation des éminents Compagnons et de la communauté — en une monarchie autoritaire et héréditaire. C’est ainsi que naquit l’État omeyyade, appuyé sur la domination familiale plutôt que sur la libre élection.',
            en: 'As soon as Mu‘awiya consolidated power, he established Damascus as his capital and cast aside the pledge made to Hasan. He arranged the succession for his son Yazid, transforming the rightly-guided caliphate — which had rested upon consultation among senior Companions and the community — into hereditary dynastic rule. Thus began the Umayyad state, relying on family succession rather than elective legitimacy.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'ملاحقة المعارضين وردود الأفعال',
            fr: 'La traque des opposants et les diverses réactions',
            en: 'Pursuit of Opponents and Varied Responses',
          },
          text: {
            ar: 'لم يكتفِ بنو أميّة بذلك، بل لاحقوا كلّ من عارض حكمهم ولم يرضَ بهذا التحوّل، فاستهدفوا الحسن وآل بيت النبيّ، كما طاردوا المحكّمة وأهل النهروان ومن وافق رأيهم. وتفاوتت ردود أفعال المسلمين أمام هذا الظلم الشديد: فمنهم من حمل السيف وردّ بالقوّة، ومنهم من كظم غيظه وصبر حمايةً لأهله، ومنهم من تفرّغ لنشر العلم وحفظ سنّة النبيّ ﷺ والتفقّه في الدين، ريثما تعود الأمّة إلى رشدها.',
            fr: 'Les Omeyyades ne s’arrêtèrent pas là : ils traquèrent quiconque contestait leur légitimité ou refusait cette dérive dynastique. Ils s’en prirent à al-Ḥasan, à la famille du Prophète et à leurs partisans, ainsi qu’aux Muḥakkima et aux gens de Nahrawān. Face à cette oppression féroce, les réactions varièrent : certains répondirent par les armes, d’autres continrent leur colère et patientèrent pour préserver leurs proches, et d’autres encore consacrèrent leur existence à l’étude du Coran, à l’enseignement religieux et à la transmission de la foi, dans l’espoir d’un retour de la justice.',
            en: 'The Umayyads did not stop there: they relentlessly pursued anyone who opposed their dynastic rule. They targeted Hasan, the Prophet’s household and their partisans, along with al-Muhakkima and the people of Nahrawan who shared their views. In the face of this fierce oppression, reactions varied: some answered oppression with the sword, others suppressed their rage and bore hardship patiently to protect their kin, and still others devoted their lives to religious scholarship, teaching the Quran, and preserving the faith, awaiting the return of justice.',
          },
        },
      ],
    },

    // 11 — Hasan's treaty: swipe judge, cost vs. condition (slide 5)
    {
      kind: 'swipe',
      id: 'from-caliphate-to-kingship',
      title: {
        ar: 'مبايعة الحسن وتنازله لمعاوية',
        fr: 'L’allégeance à al-Ḥasan et sa renonciation en faveur de Mu‘āwiya',
        en: 'The pledge to Hasan and his renunciation to Mu‘awiya',
      },
      intro: {
        ar: 'بايع من كان مع عليّ ابنَه الحسن ليكون إمامًا عليهم. اسحب كلّ بطاقةٍ إلى الجهة الصحيحة: أكان هذا مما تنازل عنه الحسن، أم مما اشترطه؟',
        fr: 'Ceux qui étaient avec ‘Alī prêtèrent allégeance à son fils al-Ḥasan comme imam. Fais glisser chaque carte du bon côté : était-ce ce à quoi al-Ḥasan renonça, ou ce qu’il posa comme condition ?',
        en: 'Those who had been with ‘Ali pledged allegiance to his son Hasan as imam. Swipe each card to the right side: was it something Hasan gave up, or something he set as a condition?',
      },
      left: {
        label: { ar: 'ما تنازل عنه الحسن', fr: 'Ce à quoi al-Ḥasan renonça', en: 'What Hasan gave up' },
        tag: { ar: 'تنازلٌ', fr: 'Renoncement', en: 'Renunciation' },
      },
      right: {
        label: { ar: 'ما اشترطه الحسن', fr: 'Ce qu’al-Ḥasan posa comme condition', en: 'What Hasan set as a condition' },
        tag: { ar: 'شرطٌ', fr: 'Condition', en: 'Condition' },
      },
      cards: [
        {
          id: 'stop-bloodshed',
          who: { ar: 'الدافع', fr: 'Le motif', en: 'The motive' },
          deed: {
            ar: 'لمّا كان من القتلى الكثير من المسلمين، فضّل الحسن أن يُرسل إلى معاوية بأن يتوقّف سفك الدماء',
            fr: 'Vu le grand nombre de musulmans tués, al-Ḥasan préféra demander à Mu‘āwiya l’arrêt de l’effusion de sang',
            en: 'Given the many Muslims killed, Hasan preferred to send word to Mu‘awiya to stop the bloodshed',
          },
          side: 'left',
          explanation: {
            ar: 'بالضبط — هذا الدافع الذي جعل الحسن يُرسل إلى معاوية، حقنًا لدماء المسلمين.',
            fr: 'Exact — c’est ce motif qui poussa al-Ḥasan à écrire à Mu‘āwiya, pour épargner le sang des musulmans.',
            en: 'Exactly — this motive led Hasan to send word to Mu‘awiya, to spare Muslim blood.',
          },
        },
        {
          id: 'give-imamah',
          who: { ar: 'القرار', fr: 'La décision', en: 'The decision' },
          deed: {
            ar: 'يُعطي الإمامة إلى معاوية',
            fr: 'Céder l’imamat à Mu‘āwiya',
            en: 'Hand the imamate over to Mu‘awiya',
          },
          side: 'left',
          explanation: {
            ar: 'صحيح، تنازل الحسن عن الإمامة لمعاوية مباشرةً.',
            fr: 'Exact, al-Ḥasan renonça directement à l’imamat en faveur de Mu‘āwiya.',
            en: 'Correct — Hasan directly gave up the imamate to Mu‘awiya.',
          },
        },
        {
          id: 'return-condition',
          who: { ar: 'الشرط', fr: 'La condition', en: 'The condition' },
          deed: {
            ar: 'على شرط أن تعود الإمامة إلى المسلمين عند وفاة معاوية',
            fr: 'À condition que l’imamat revienne aux musulmans à la mort de Mu‘āwiya',
            en: 'On condition that the imamate return to the Muslims upon Mu‘awiya’s death',
          },
          side: 'right',
          explanation: {
            ar: 'نعم، هذا الشرط الذي وضعه الحسن، وقبله الطرفان.',
            fr: 'Oui, c’est la condition posée par al-Ḥasan, acceptée par les deux parties.',
            en: 'Yes, this was the condition Hasan set, and both sides accepted it.',
          },
        },
        {
          id: 'date',
          who: { ar: 'التاريخ', fr: 'La date', en: 'The date' },
          deed: {
            ar: 'قَبِل الطرفان بذلك وتسلّم معاوية الحكم من الحسن في 01 محرم 41هـ',
            fr: 'Les deux parties acceptèrent, et Mu‘āwiya reçut le pouvoir d’al-Ḥasan le 1 Muḥarram 41 H',
            en: 'Both sides accepted, and Mu‘awiya received power from Hasan on 1 Muharram 41 AH',
          },
          side: 'right',
          explanation: {
            ar: 'صحيح، هذا هو الشرط الزمنيّ-الرسميّ لإتمام التسليم.',
            fr: 'Exact, c’est le cadre formel et daté de la passation du pouvoir.',
            en: 'Correct — this is the formal, dated condition completing the handover.',
          },
        },
      ],
    },

    // 08 — From rightly-guided caliphate to hereditary kingship: story cards + reflection (slide 6)
    {
      kind: 'story',
      id: 'umayyad-kingship',
      title: {
        ar: 'من الخلافة الراشدة إلى المُلك العَضوض',
        fr: 'Du califat bien guidé au pouvoir héréditaire',
        en: 'From the rightly-guided caliphate to hereditary kingship',
      },
      intro: {
        ar: 'اقلب البطاقات لترى ماذا جرى بعد أن تحصّل معاوية على الحكم.',
        fr: 'Retourne les cartes pour voir ce qui se passa après que Mu‘āwiya eut obtenu le pouvoir.',
        en: 'Flip the cards to see what happened after Mu‘awiya obtained power.',
      },
      cards: [
        {
          id: 'damascus',
          image: `${IMG}/damascus-capital.png`,
          imageAlt: {
            ar: 'قصرٌ أمويّ في دمشق عند الغروب، أعلامٌ على الأسوار',
            fr: 'Un palais omeyyade à Damas au coucher du soleil, des étendards sur les remparts',
            en: 'An Umayyad palace in Damascus at sunset, banners on the ramparts',
          },
          fact: {
            ar: 'تحصّل معاوية على الحكم وجعل دمشق عاصمةً له، وأبقى الحكم لأسرته فسُمّيت الدولة الأمويّة.',
            fr: 'Mu‘āwiya obtint le pouvoir et fit de Damas sa capitale ; il garda le pouvoir pour sa famille, d’où le nom d’État omeyyade.',
            en: 'Mu‘awiya obtained power and made Damascus his capital; he kept rule within his family, hence the name "Umayyad state."',
          },
        },
        {
          id: 'pursuit',
          image: `${IMG}/pursuit.png`,
          imageAlt: {
            ar: 'زقاقٌ مظلمٌ في مدينةٍ قديمة، ظلّ حارسٍ عند مفترق الطرق',
            fr: 'Une ruelle sombre dans une vieille ville, l’ombre d’un garde à un carrefour',
            en: 'A dark alley in an old city, a guard’s shadow at a crossroads',
          },
          fact: {
            ar: 'لكنّ دماء المسلمين لم تتوقّف؛ فقد عمد الأمويّون إلى القضاء على الحسن وآل بيت عليّ وشيعتهم، ومَن كان مع المحكّمة وأهل النهروان ومَن هو مع رأيهم، لأنّهم لا يقبلون بمعاوية ودولته التي لم تقم على الحقّ وشورى كبار الصحابة والمسلمين.',
            fr: 'Mais le sang des musulmans ne cessa pas de couler : les Omeyyades s’employèrent à éliminer al-Ḥasan, la famille de ‘Alī et leurs partisans, ainsi que les Muḥakkima, les gens de Nahrawān et quiconque partageait leur avis, car ils refusaient Mu‘āwiya et son État, qui ne s’était pas fondé sur le droit et la concertation des grands Compagnons et des musulmans.',
            en: 'But Muslim bloodshed did not stop: the Umayyads set out to eliminate Hasan, ‘Ali’s household, and their partisans, along with al-Muhakkima, the people of Nahrawan, and whoever shared their view — because they refused to accept Mu‘awiya and his state, which had not been built on right and the counsel of the senior Companions and Muslims.',
          },
        },
        {
          id: 'reactions',
          image: `${IMG}/varied-reactions.png`,
          imageAlt: {
            ar: 'ثلاثة أشخاص في مجلسٍ هادئ: أحدهم يحمل سيفًا بجانبه، وآخر صامتٌ متأمّل، وثالثٌ يقرأ كتابًا',
            fr: 'Trois personnes dans une assemblée calme : l’une avec une épée posée à côté, l’autre silencieuse et pensive, la troisième lisant un livre',
            en: 'Three people in a quiet gathering: one with a sword set beside him, another silent and reflective, a third reading a book',
          },
          fact: {
            ar: 'ومع اشتداد الظُّلم على المحكّمة والشيعة وغيرهم، أخذ بعضهم يردّ على الظلم بالسيف، فكظم آخرون غيظهم ولم يردّوا بالسيف كما يُفعل بهم، واشتغل آخرون بالتعلّم والتفقّه في الدين، ولكنّ الأمويّين نعتوهم بالنعوت المختلفة ليُشكّكوا الناس في نواياهم.',
            fr: 'Face à l’intensification de l’oppression contre les Muḥakkima, les Shī‘a et d’autres, certains répondirent à l’injustice par l’épée, d’autres contenèrent leur colère sans rendre la pareille, et d’autres encore se consacrèrent à l’étude et à la compréhension de la religion ; mais les Omeyyades leur donnèrent divers noms afin de jeter le doute sur leurs intentions.',
            en: 'As oppression intensified against al-Muhakkima, the Shia, and others, some began answering injustice with the sword, others suppressed their anger and did not respond in kind, and still others devoted themselves to learning and understanding the religion — but the Umayyads labeled them with various names to cast doubt on their intentions.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'كيف وصف الدرس دولة معاوية، ولماذا رفضها البعض؟ اختر كلّ ما يدعمه النصّ.',
          fr: 'Comment la leçon décrit-elle l’État de Mu‘āwiya, et pourquoi certains le refusèrent-ils ? Choisis tout ce que le texte appuie.',
          en: 'How does the lesson describe Mu‘awiya’s state, and why did some reject it? Choose everything the text supports.',
        },
        options: [
          {
            id: 'not-shura',
            isRelevant: true,
            label: { ar: 'لم تقم على شورى كبار الصحابة والمسلمين', fr: 'Il ne reposait pas sur la concertation des grands Compagnons et des musulmans', en: 'It was not built on the counsel of senior Companions and Muslims' },
            explanation: {
              ar: 'صحيح، هذا نصّ الدرس في وصف سبب رفض البعض لدولة معاوية.',
              fr: 'Exact, c’est le texte même de la leçon pour expliquer le refus de certains.',
              en: 'Correct — this is exactly what the lesson states as the reason some rejected Mu‘awiya’s state.',
            },
          },
          {
            id: 'hereditary',
            isRelevant: true,
            label: { ar: 'أصبح الحكم يُورَّث داخل أسرة معاوية', fr: 'Le pouvoir se transmit désormais au sein de la famille de Mu‘āwiya', en: 'Rule now passed down within Mu‘awiya’s family' },
            explanation: {
              ar: 'صحيح، أبقى معاوية الحكم لأسرته، وهذا ما ميّز الدولة الأمويّة عن الخلافة الراشدة.',
              fr: 'Exact, Mu‘āwiya garda le pouvoir pour sa famille, ce qui distingua l’État omeyyade du califat bien guidé.',
              en: 'Correct — Mu‘awiya kept rule within his family, which distinguished the Umayyad state from the rightly-guided caliphate.',
            },
          },
          {
            id: 'elected',
            isRelevant: false,
            label: { ar: 'اختاره كبار الصحابة بالشورى كما سبقوه', fr: 'Il fut choisi par les grands Compagnons, par la concertation, comme ses prédécesseurs', en: 'He was chosen by senior Companions through counsel, like his predecessors' },
            explanation: {
              ar: 'عكس هذا تمامًا؛ الدرس ينصّ على أنّ دولته لم تقم على الحقّ والشورى.',
              fr: 'C’est l’inverse ; la leçon affirme que son État ne reposait pas sur le droit et la concertation.',
              en: 'This is the opposite — the lesson states his state was not built on right and counsel.',
            },
          },
        ],
      },
    },

    // 09 — Blitz round: rapid true/false across the whole lesson
    {
      kind: 'blitz',
      id: 'blitz',
      title: {
        ar: 'جولة سريعة',
        fr: 'Manche éclair',
        en: 'Speed round',
      },
      intro: {
        ar: 'عشر ثوانٍ لكلّ عبارة — هل هي صحيحة أم خاطئة؟',
        fr: 'Dix secondes par affirmation — vrai ou faux ?',
        en: 'Ten seconds per statement — true or false?',
      },
      secondsPerCard: 10,
      statements: [
        {
          id: 'b1',
          text: { ar: 'بايعت المحكّمة عبد الله بن وهب الراسبيّ إمامًا لها.', fr: 'Les Muḥakkima prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī comme imam.', en: 'Al-Muhakkima pledged allegiance to Abdullah ibn Wahb al-Rasibi as their imam.' },
          answer: true,
          explanation: { ar: 'صحيح، هذا نصّ الدرس.', fr: 'Vrai, c’est le texte même de la leçon.', en: 'True — this is exactly what the lesson states.' },
        },
        {
          id: 'b2',
          text: { ar: 'باغت عليٌّ المحكّمة بنفسه دون أيّ تحريض.', fr: '‘Alī surprit les Muḥakkima de lui-même, sans aucune incitation.', en: '‘Ali ambushed al-Muhakkima entirely on his own, without any incitement.' },
          answer: false,
          explanation: { ar: 'خطأ، تدخّل رجال معاوية المتخفّون في جيشه وألحّوا عليه حتى سار لحربهم.', fr: 'Faux, des hommes de Mu‘āwiya infiltrés dans son armée insistèrent jusqu’à ce qu’il marche contre eux.', en: 'False — men of Mu‘awiya disguised within his army pressed him until he marched against them.' },
        },
        {
          id: 'b3',
          text: { ar: 'قُتل عليّ ومعاوية وعمرو بن العاص جميعًا في المؤامرة نفسها.', fr: '‘Alī, Mu‘āwiya et ‘Amr ibn al-‘Āṣ furent tous tués dans le même complot.', en: '‘Ali, Mu‘awiya, and ‘Amr ibn al-‘As were all killed in the same plot.' },
          answer: false,
          explanation: { ar: 'خطأ، اتُّفق على قتل الثلاثة لكن لم يُقتَل منهم إلّا عليّ.', fr: 'Faux, l’accord visait les trois, mais seul ‘Alī fut tué.', en: 'False — the plot targeted all three, but only ‘Ali was killed.' },
        },
        {
          id: 'b4',
          text: { ar: 'اشترط الحسن أن تعود الإمامة إلى المسلمين بعد وفاة معاوية.', fr: 'Al-Ḥasan posa comme condition que l’imamat revienne aux musulmans après la mort de Mu‘āwiya.', en: 'Hasan set the condition that the imamate return to the Muslims after Mu‘awiya’s death.' },
          answer: true,
          explanation: { ar: 'صحيح، وقَبِل الطرفان بهذا الشرط.', fr: 'Vrai, et les deux parties acceptèrent cette condition.', en: 'True — and both sides accepted this condition.' },
        },
        {
          id: 'b5',
          text: { ar: 'توقّف الأمويّون عن ملاحقة آل بيت عليّ والمحكّمة بعد تسلّم معاوية الحكم.', fr: 'Les Omeyyades cessèrent de poursuivre la famille de ‘Alī et les Muḥakkima après l’arrivée de Mu‘āwiya au pouvoir.', en: 'The Umayyads stopped pursuing ‘Ali’s household and al-Muhakkima once Mu‘awiya took power.' },
          answer: false,
          explanation: { ar: 'خطأ، عمد الأمويّون إلى القضاء على الحسن وآل بيت عليّ وشيعتهم والمحكّمة وأهل النهروان ومن هو على رأيهم.', fr: 'Faux, les Omeyyades s’employèrent à éliminer al-Ḥasan, la famille de ‘Alī, leurs partisans, les Muḥakkima et les gens de Nahrawān.', en: 'False — the Umayyads set out to eliminate Hasan, ‘Ali’s household, their partisans, al-Muhakkima, and the people of Nahrawan.' },
        },
      ],
    },

    // 10 — Quiz: mixed formats
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'اختبر معلوماتك', fr: 'Teste tes connaissances', en: 'Test your knowledge' },
      intro: {
        ar: 'أربعة أسئلة متنوّعة عن محطّات الدرس.',
        fr: 'Quatre questions variées sur les étapes de la leçon.',
        en: 'Four varied questions on the lesson’s milestones.',
      },
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: { ar: 'إلى أين اتّجهت المحكّمة بعد رفضها التحكيم؟', fr: 'Où les Muḥakkima se dirigèrent-ils après avoir refusé l’arbitrage ?', en: 'Where did al-Muhakkima head after rejecting the arbitration?' },
          options: [
            { id: 'a', label: { ar: 'إلى منطقة النهروان', fr: 'Vers la région de Nahrawān', en: 'To the Nahrawan area' } },
            { id: 'b', label: { ar: 'إلى دمشق', fr: 'Vers Damas', en: 'To Damascus' } },
            { id: 'c', label: { ar: 'إلى مكّة', fr: 'Vers La Mecque', en: 'To Makkah' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'اتّجهت المحكّمة من حروراء إلى منطقة النهروان، حيث بايعوا عبد الله بن وهب الراسبيّ.',
            fr: 'Les Muḥakkima se dirigèrent de Ḥarūrā’ vers la région de Nahrawān, où ils prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī.',
            en: 'Al-Muhakkima headed from Harura to the Nahrawan area, where they pledged allegiance to Abdullah ibn Wahb al-Rasibi.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'طُعن عليّ بن أبي طالب عند باب المسجد.', fr: '‘Alī ibn Abī Ṭālib fut poignardé à la porte de la mosquée.', en: '‘Ali ibn Abi Talib was stabbed at the mosque door.' },
          answer: true,
          explanation: {
            ar: 'صحيح، في صبح ١٧ رمضان ٤٠هـ.',
            fr: 'Vrai, au matin du 17 Ramaḍān 40 H.',
            en: 'True — on the morning of 17 Ramadan 40 AH.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ شخصيّة بما جرى لها في المؤامرة', fr: 'Relie chaque personnage à ce qui lui arriva lors du complot', en: 'Match each person to what happened to them in the plot' },
          pairs: [
            { id: 'p1', left: { ar: 'عليّ بن أبي طالب', fr: '‘Alī ibn Abī Ṭālib', en: '‘Ali ibn Abi Talib' }, right: { ar: 'طُعن عند باب المسجد ومات', fr: 'Poignardé à la porte de la mosquée, il mourut', en: 'Stabbed at the mosque door, and died' } },
            { id: 'p2', left: { ar: 'معاوية', fr: 'Mu‘āwiya', en: 'Mu‘awiya' }, right: { ar: 'ضُرب في إليته ونجا', fr: 'Blessé à la hanche, il survécut', en: 'Wounded in the hip, and survived' } },
            { id: 'p3', left: { ar: 'عمرو بن العاص', fr: '‘Amr ibn al-‘Āṣ', en: '‘Amr ibn al-‘As' }, right: { ar: 'لم يخرج إلى المسجد فنجا', fr: 'Ne sortit pas vers la mosquée, et survécut', en: 'Did not go out to the mosque, and survived' } },
          ],
          explanation: {
            ar: 'اتُّفق على قتل الثلاثة في وقتٍ واحد، لكن لم يُقتَل منهم إلّا عليّ.',
            fr: 'L’accord visait les trois en même temps, mais seul ‘Alī fut tué.',
            en: 'The plot targeted all three at the same time, but only ‘Ali was killed.',
          },
        },
        {
          id: 'q4',
          type: 'ordering',
          question: { ar: 'رتّب هذه المحطّات بحسب ورودها في الدرس', fr: 'Ordonne ces étapes selon leur déroulement dans la leçon', en: 'Order these milestones as they occurred in the lesson' },
          items: [
            { id: 'o1', label: { ar: 'مبايعة المحكّمة لعبد الله بن وهب الراسبيّ', fr: 'L’allégeance des Muḥakkima à ‘Abdullāh ibn Wahb ar-Rāsibī', en: 'Al-Muhakkima’s pledge to Abdullah ibn Wahb al-Rasibi' } },
            { id: 'o2', label: { ar: 'معركة النهروان', fr: 'La bataille de Nahrawān', en: 'The Battle of Nahrawan' } },
            { id: 'o3', label: { ar: 'مقتل عليّ بن أبي طالب', fr: 'L’assassinat de ‘Alī ibn Abī Ṭālib', en: 'The killing of ‘Ali ibn Abi Talib' } },
            { id: 'o4', label: { ar: 'تنازل الحسن عن الإمامة لمعاوية', fr: 'La renonciation d’al-Ḥasan à l’imamat en faveur de Mu‘āwiya', en: 'Hasan’s renunciation of the imamate to Mu‘awiya' } },
          ],
          explanation: {
            ar: 'هذا هو مسار الدرس: مبايعةٌ، فمعركةٌ، فمقتلٌ، فتنازلٌ.',
            fr: 'C’est le parcours de la leçon : allégeance, bataille, assassinat, puis renonciation.',
            en: 'This is the lesson’s path: pledge, then battle, then assassination, then renunciation.',
          },
        },
      ],
    },

    // 11 — The lesson's own moral (أعتبر من الدرس)
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'أعتبر من الدرس', fr: 'La leçon à retenir', en: 'What the lesson teaches' },
      prompt: {
        ar: 'ما الذي يعلّمنا إيّاه ما جرى بعد التحكيم إلى قيام الدولة الأمويّة؟',
        fr: 'Que nous enseigne ce qui se passa, de l’arbitrage jusqu’à l’établissement de l’État omeyyade ?',
        en: 'What do the events from the arbitration to the rise of the Umayyad state teach us?',
      },
      choices: [
        {
          id: 'leadership',
          isCorrect: true,
          label: {
            ar: 'غياب القيادة الواحدة يفتح الباب للفوضى والمحرّضين',
            fr: 'L’absence d’une direction unique ouvre la porte au chaos et aux instigateurs',
            en: 'The absence of a single leadership opens the door to chaos and instigators' },
          feedback: {
            ar: 'صحيح، وهذا نصّ ما ورد في الدرس: كانت أيّام غياب القيادة الواحدة أيّام فوضى، واستغلّها المحرّضون لدفع عليّ لحرب المحكّمة.',
            fr: 'Exact, c’est le texte même de la leçon : l’absence d’une direction unique fut synonyme de chaos, exploité par des instigateurs pour pousser ‘Alī à combattre les Muḥakkima.',
            en: 'Correct — this is exactly what the lesson states: the days without a single leadership were days of chaos, exploited by instigators to push ‘Ali into fighting al-Muhakkima.',
          },
        },
        {
          id: 'force-ends',
          isCorrect: false,
          label: {
            ar: 'القوّة العسكريّة وحدها تضمن بقاء الحكم',
            fr: 'La seule force militaire garantit la pérennité du pouvoir',
            en: 'Military force alone guarantees the survival of rule' },
          feedback: {
            ar: 'لم يقل الدرس هذا؛ فحتى معاوية الذي توسّع عسكريًّا احتاج إلى تنازل الحسن ليستقرّ له الأمر، لا إلى القوّة وحدها.',
            fr: 'Le texte ne dit pas cela : même Mu‘āwiya, malgré son expansion militaire, eut besoin de la renonciation d’al-Ḥasan pour asseoir son pouvoir, non de la seule force.',
            en: 'The lesson does not say this — even Mu‘awiya, despite his military expansion, needed Hasan’s renunciation to settle the matter, not force alone.',
          },
        },
        {
          id: 'blood-cheap',
          isCorrect: false,
          label: {
            ar: 'دماء المسلمين يمكن التهاون فيها لتحقيق المصلحة السياسيّة',
            fr: 'Le sang des musulmans peut être négligé pour un intérêt politique',
            en: 'Muslim blood can be treated lightly for political interest' },
          feedback: {
            ar: 'على العكس، فضّل الحسن التنازل عن الإمامة نفسِها على أن تُسفك دماء المسلمين.',
            fr: 'Au contraire : al-Ḥasan préféra renoncer à l’imamat lui-même plutôt que de voir couler le sang des musulmans.',
            en: 'On the contrary — Hasan preferred to give up the imamate itself rather than let Muslim blood be shed.',
          },
        },
      ],
      valuesTitle: {
        ar: 'قِيَمٌ من الدرس — اقلب البطاقة لترى دليلها',
        fr: 'Des valeurs tirées de la leçon — retourne la carte pour voir sa preuve',
        en: 'Values from the lesson — flip a card to see its evidence',
      },
      values: [
        {
          id: 'blood-sanctity',
          value: { ar: 'حُرمة دماء المسلمين', fr: 'Le caractère sacré du sang musulman', en: 'The sanctity of Muslim blood' },
          evidence: {
            ar: 'فضّل الحسن أن يُرسل إلى معاوية بأن يتوقّف سفك الدماء، وتنازل عن الإمامة حقنًا لها.',
            fr: 'Al-Ḥasan préféra écrire à Mu‘āwiya pour arrêter l’effusion de sang, renonçant à l’imamat pour l’épargner.',
            en: 'Hasan preferred to send word to Mu‘awiya to stop the bloodshed, giving up the imamate to spare it.',
          },
        },
        {
          id: 'unity',
          value: { ar: 'وحدة الصفّ', fr: 'L’unité des rangs', en: 'Unity of ranks' },
          evidence: {
            ar: 'خيّرت المحكّمةُ عليًّا أن يدخل في طاعة الخليفة المبايَع إن أراد وحدة الصفّ.',
            fr: 'Les Muḥakkima proposèrent à ‘Alī d’entrer dans l’obéissance à l’imam élu, s’il voulait l’unité des rangs.',
            en: 'Al-Muhakkima gave ‘Ali the choice to obey the pledged imam, if he wanted unity of ranks.',
          },
        },
        {
          id: 'patience-under-wrong',
          value: { ar: 'الصبر عند الظلم', fr: 'La patience face à l’injustice', en: 'Patience under injustice' },
          evidence: {
            ar: 'كظم بعضهم غيظهم ولم يردّوا بالسيف كما يُفعل بهم، واشتغلوا بالتعلّم والتفقّه في الدين.',
            fr: 'Certains contenèrent leur colère sans répondre par l’épée, et se consacrèrent à l’étude de la religion.',
            en: 'Some suppressed their anger and did not respond with the sword, devoting themselves instead to learning the religion.',
          },
        },
      ],
    },

    // 12 — Summary (ألخّص)
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'بعد خديعة التحكيم افترق المسلمون، واتّجهت المحكّمة إلى النهروان حيث باغتهم عليّ بتحريضٍ من رجال معاوية، ثمّ ضعُف جيشه وتوسّع معاوية حتى استُشهد عليّ، فتنازل الحسن عن الإمامة حقنًا للدماء، وتحوّلت الخلافة الراشدة إلى مُلكٍ أمويّ وراثيّ طارد المحكّمة وآل بيت عليّ.',
        fr: 'Après la ruse de l’arbitrage, les musulmans se divisèrent ; les Muḥakkima se dirigèrent vers Nahrawān où ‘Alī, poussé par les hommes de Mu‘āwiya, les surprit. Son armée s’affaiblit tandis que Mu‘āwiya s’étendait, jusqu’à l’assassinat de ‘Alī. Al-Ḥasan renonça alors à l’imamat pour épargner le sang, et le califat bien guidé se mua en un pouvoir héréditaire omeyyade qui pourchassa les Muḥakkima et la famille de ‘Alī.',
        en: 'After the ruse of the arbitration, the Muslims divided; al-Muhakkima headed to Nahrawan, where ‘Ali, pushed by Mu‘awiya’s men, ambushed them. His army weakened as Mu‘awiya expanded, until ‘Ali was assassinated. Hasan then gave up the imamate to spare bloodshed, and the rightly-guided caliphate turned into hereditary Umayyad rule that pursued al-Muhakkima and ‘Ali’s household.',
      },
      learned: [
        {
          ar: 'بعد خديعة التحكيم، اتّجهت المحكّمة إلى النهروان وبايعت عبد الله بن وهب الراسبيّ إمامًا، إذ لم يَعُد عليّ خليفةً في نظرها.',
          fr: 'Après la ruse de l’arbitrage, les Muḥakkima se dirigèrent vers Nahrawān et prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī, ‘Alī n’étant plus calife à leurs yeux.',
          en: 'After the ruse of the arbitration, al-Muhakkima headed to Nahrawan and pledged allegiance to Abdullah ibn Wahb al-Rasibi, as ‘Ali was no longer caliph in their eyes.',
        },
        {
          ar: 'دفع رجال معاوية المتخفّون عليًّا إلى مباغتة المحكّمة عند النهروان، فقُتل منهم الآلاف وتفرّق جيش عليّ بعدها.',
          fr: 'Les hommes de Mu‘āwiya, infiltrés, poussèrent ‘Alī à surprendre les Muḥakkima à Nahrawān ; des milliers furent tués, et l’armée de ‘Alī se dispersa ensuite.',
          en: 'Mu‘awiya’s disguised men pushed ‘Ali into ambushing al-Muhakkima at Nahrawan; thousands were killed, and ‘Ali’s army then scattered.',
        },
        {
          ar: 'اتُّفق على قتل عليّ ومعاوية وعمرو بن العاص في وقتٍ واحد، لكن لم يُقتَل منهم إلّا عليّ، صباح ١٧ رمضان ٤٠هـ.',
          fr: 'Un complot visait ‘Alī, Mu‘āwiya et ‘Amr ibn al-‘Āṣ en même temps, mais seul ‘Alī fut tué, au matin du 17 Ramaḍān 40 H.',
          en: 'A plot targeted ‘Ali, Mu‘awiya, and ‘Amr ibn al-‘As at the same time, but only ‘Ali was killed, on the morning of 17 Ramadan 40 AH.',
        },
        {
          ar: 'تنازل الحسن عن الإمامة لمعاوية حقنًا لدماء المسلمين، على شرط عودتها إليهم بعد وفاته، فتحوّلت الخلافة الراشدة إلى دولةٍ أمويّة وراثيّة طاردت المحكّمة وآل بيت عليّ.',
          fr: 'Al-Ḥasan renonça à l’imamat en faveur de Mu‘āwiya pour épargner le sang des musulmans, à condition qu’elle leur revienne après sa mort ; le califat bien guidé se mua ainsi en un État omeyyade héréditaire qui pourchassa les Muḥakkima et la famille de ‘Alī.',
          en: 'Hasan gave up the imamate to Mu‘awiya to spare Muslim blood, on condition it would return to them after his death; the rightly-guided caliphate thus turned into a hereditary Umayyad state that pursued al-Muhakkima and ‘Ali’s household.',
        },
      ],
    },
  ],
}
