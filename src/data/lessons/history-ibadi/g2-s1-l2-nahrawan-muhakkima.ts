import type { Lesson } from '../../types'

// Source: Ibadite History slides (Other ressources/Ibadite_History_S3.pdf), pages 1–8
//   («الدرس الخامس عشر: نهاية الخلافة الراشدة»). Every piece of information on them is in the lesson.
//   Slide 1 — title: نهاية الخلافة الراشدة
//   Slide 7 — أهمّ نقاط الدروس القادمة في الفصل الثاني (section `coming-next`)
// Corrected source error: slide 3 «القلم يقبل» is a typo for «فلم يقبل» (‘Alī did not accept).
// Images: the original Nahrawan illustrations showed people; until figure-free replacements are
// generated, sections reuse figure-free images from ../jamal-siffin (IMG_JS).
//   Slide 2 — الاشكالية: افتراق المسلمين بعد خديعة التحكيم؛ فريقٌ مع علي، فريقٌ رفض التحكيم (المحكّمة) واتجه إلى النهروان، فريقٌ مع معاوية بالشام
//   Slide 3 — شغور منصب الخليفة: مبايعة عبد الله بن وهب الراسبي، تخلّي علي عن الخلافة بعد قبوله التحكيم، الفوضى وتدخّل رجال معاوية، معركة النهروان
//   Slide 4 — فقدان السيطرة ومقتل علي: ضعف جيش علي، توسّع معاوية، مقتل علي يوم 17 رمضان 40هـ، مؤامرة الثلاثة (علي ومعاوية وعمرو) ونجاة اثنين منهم
//   Slide 5 — مبايعة جيش علي للحسن بن علي: تنازل الحسن عن الإمامة لمعاوية حقنًا للدماء، شرط عودتها للمسلمين بعد وفاة معاوية، 01 محرم 41هـ
//   Slide 6 — من الخلافة الراشدة إلى الملك العَضوض: دمشق عاصمةً، توريث الحكم لبني أمية، ملاحقة الحسن وآل البيت والمحكّمة وأهل النهروان، ردود فعل متفاوتة

const IMG_JS = '/images/lessons/jamal-siffin'

export const nahrawanMuhakkima: Lesson = {
  id: 'history-ibadi-g2-s1-l2',
  gradeId: 'history-ibadi-g2',
  moduleId: 'history-ibadi-g2',
  semesterId: 'history-ibadi-g2-s1',
  order: 2,
  status: 'published',
  estimatedMinutes: 35,
  cover: `${IMG_JS}/siffin-hero.png`,
  coverAlt: {
    ar: 'صفّان من الخيام الخالية متقابلان في سهلٍ واسع، ورايات حمراء وخضراء ترفرف تحت سحبٍ كثيفة',
    fr: 'Deux rangées de tentes vides face à face dans une vaste plaine, des étendards rouges et verts flottant sous de lourds nuages',
    en: 'Two rows of empty tents facing each other across a wide plain, red and green banners flying under heavy clouds',
  },
  title: {
    ar: 'معركة النهروان وظهور المحكّمة',
    fr: 'La bataille de Nahrawān et l’apparition des Muḥakkima',
    en: 'The Battle of Nahrawān and the emergence of al-Muḥakkima',
  },
  description: {
    ar: 'بعد خديعة التحكيم، افترق المسلمون ثلاث فرق. تابع كيف اتّجهت المحكّمة إلى النهروان، وكيف فقد عليٌّ السيطرة، ثمّ استُشهد، وكيف انتهت الخلافة الراشدة إلى مُلكٍ وراثيّ.',
    fr: 'Après la ruse de l’arbitrage, les musulmans se divisèrent en trois groupes. Suis comment les Muḥakkima se dirigèrent vers Nahrawān, comment ‘Alī perdit le contrôle puis fut assassiné, et comment le califat bien guidé se mua en un pouvoir héréditaire.',
    en: 'After the ruse of the arbitration, the Muslims split into three groups. Follow how al-Muḥakkima headed to Nahrawān, how ‘Alī lost control and was then killed, and how the rightly-guided caliphate turned into hereditary rule.',
  },

  sections: [
    // 01 — Hook: the lesson's own problem statement (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG_JS}/siffin-hero.png`,
      imageAlt: {
        ar: 'صفّان من الخيام الخالية متقابلان في سهلٍ واسع، ورايات حمراء وخضراء ترفرف تحت سحبٍ كثيفة',
        fr: 'Deux rangées de tentes vides face à face dans une vaste plaine, des étendards rouges et verts flottant sous de lourds nuages',
        en: 'Two rows of empty tents facing each other across a wide plain, red and green banners flying under heavy clouds',
      },
      title: {
        ar: 'نهاية الخلافة الراشدة',
        fr: 'La fin du califat bien guidé',
        en: 'The end of the rightly-guided caliphate',
      },
      question: {
        ar: 'كيف سيجتمع المسلمون بعد هذا بخليفةٍ واحد؟',
        fr: 'Comment les musulmans allaient-ils se rassembler à nouveau autour d’un seul calife ?',
        en: 'How would the Muslims come together again under a single caliph?',
      },
      intro: {
        ar: 'افترق المسلمون على إثر خديعة التحكيم إلى ثلاث فرق: فريقٌ بقي مع عليٍّ رضي الله عنه بالكوفة ينتظر أمره، وفريقٌ رفض التحكيم منذ صفّين واتّجه من حروراء إلى منطقة النهروان وسُمّوا المحكّمة، وفريقٌ بقي مع معاوية في الشام. افتح المهمّات لتكتشف كيف انتهى هذا الافتراق.',
        fr: 'Après la ruse de l’arbitrage, les musulmans se divisèrent en trois groupes : ceux qui restèrent avec ‘Alī à Kūfa, attendant ses ordres ; ceux qui refusèrent l’arbitrage depuis Ṣiffīn et se dirigèrent de Ḥarūrā’ vers Nahrawān — appelés al-Muḥakkima ; et ceux qui restèrent avec Mu‘āwiya au Shām. Ouvre les missions pour découvrir comment cette division prit fin.',
        en: 'After the ruse of the arbitration, the Muslims split into three groups: those who stayed with ‘Alī in Kūfa, awaiting his command; those who had refused the arbitration since Ṣiffīn and headed from Ḥarūrā’ to the Nahrawān area — called al-Muḥakkima; and those who stayed with Mu‘āwiya in Shām. Open the missions to discover how this division ended.',
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
          question: { ar: 'لماذا اتّجهت المحكّمة إلى النهروان؟', fr: 'Pourquoi les Muḥakkima se dirigèrent-ils vers Nahrawān ?', en: 'Why did al-Muḥakkima head to Nahrawān?' },
          target: 'reading-vacant-seat',
          teaser: { ar: 'إمامٌ جديد، وخليفةٌ تخلّى عن منصبه.', fr: 'Un nouvel imam, un calife qui a renoncé à son poste.', en: 'A new imam, and a caliph who stepped away from his post.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف وقعت معركة النهروان؟', fr: 'Comment la bataille de Nahrawān eut-elle lieu ?', en: 'How did the Battle of Nahrawān happen?' },
          target: 'reading-chaos',
          teaser: { ar: 'فوضى، ومحرّضون، ومباغتةٌ عند نهر دجلة.', fr: 'Le chaos, des instigateurs, une attaque surprise au bord du Tigre.', en: 'Chaos, instigators, and a surprise attack by the Tigris.' },
        },
        {
          id: 'm3',
          question: { ar: 'كيف استُشهد عليّ بن أبي طالب؟', fr: 'Comment ‘Alī ibn Abī Ṭālib fut-il assassiné ?', en: 'How was ‘Alī ibn Abī Ṭālib killed?' },
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
        en: 'Read: The Vacant Seat and al-Muḥakkima’s Journey to Nahrawān',
      },
      intro: {
        ar: 'اقرأ هذا المشهد التاريخيّ بتمعّن، لتكتشف كيف تصرّفت المحكّمة بعد خديعة التحكيم.',
        fr: 'Lis attentivement ce récit historique pour découvrir comment réagirent les Muḥakkima après la ruse de l’arbitrage.',
        en: 'Read this historical narrative carefully to discover how al-Muḥakkima responded after the ruse of arbitration.',
      },
      image: `${IMG_JS}/mushaf.png`,
      imageAlt: {
        ar: 'مصحفان مفتوحان مرفوعان على أسنّة الرماح تحت سماءٍ زرقاء',
        fr: 'Deux Corans ouverts levés sur des pointes de lances sous un ciel bleu',
        en: 'Two open Qur’ans raised on spear points under a blue sky',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'افتراق الصفوف بعد صفّين والتحكيم',
            fr: 'La dispersion des rangs après Ṣiffīn et l’arbitrage',
            en: 'The Division of Ranks After Ṣiffīn and Arbitration',
          },
          text: {
            ar: 'بعد واقعة صفّين وخديعة التحكيم التي نزعت عليَّ بن أبي طالب من الخلافة، وجد المسلمون أنفسهم أمام واقعٍ جديدٍ ومؤلم؛ فقد تفرّقت كلمتهم إلى ثلاث فرق: فريقٌ بقي في الكوفة مع عليّ، وفريقٌ انحاز إلى معاوية في بلاد الشام، وفريقٌ ثالث رفض التحكيم منذ صفّين واتّجه من حروراء إلى منطقة النهروان، وهؤلاء هم الذين سُمّوا «المحكّمة»، وكان شعارهم: لا حُكم إلّا لله.',
            fr: 'Après les événements de Ṣiffīn et la ruse de l’arbitrage qui dépouilla ‘Alī ibn Abī Ṭālib du califat, les musulmans se trouvèrent face à une réalité nouvelle et douloureuse. Leurs rangs se divisèrent en trois groupes : une partie resta à Kūfa avec ‘Alī, une autre se rallia à Mu‘āwiya au Shām, et un troisième groupe, qui rejetait l’arbitrage depuis Ṣiffīn, se dirigea de Ḥarūrā’ vers la région de Nahrawān. Ce sont eux qu’on appela les « Muḥakkima » ; leur devise était : « Le jugement n’appartient qu’à Dieu ».',
            en: 'After the events of Ṣiffīn and the ruse of arbitration that stripped ‘Alī ibn Abī Ṭālib of the caliphate, Muslims faced a painful new reality. Their ranks split into three factions: one remained in Kūfa with ‘Alī, another sided with Mu‘āwiya in Shām, and a third, which had rejected the arbitration since Ṣiffīn, headed from Ḥarūrā’ to the Nahrawān area. These were called “al-Muḥakkima”; their motto was: “Judgment belongs to God alone.”',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'بيعة عبد الله بن وهب الراسبيّ',
            fr: 'L’allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī',
            en: 'The Pledge to ‘Abdullāh ibn Wahb ar-Rāsibī',
          },
          text: {
            ar: 'رأى أهل المحكّمة أنّ منصب قيادة المسلمين قد شغر بتخلّي عليّ عن الخلافة وقبوله تحكيم الرجال، فأيقنوا أنّ الأمّة لا تستقيم بغير إمامٍ يقودها بالحقّ والعدل. اجتمع وجهاؤهم، وتشاوروا في أمرهم، ثمّ بايعوا عبد الله بن وهب الراسبيّ ليكون إمامًا عليهم.',
            fr: 'Constatant que la direction suprême des musulmans était devenue vacante depuis que ‘Alī avait renoncé au califat en acceptant l’arbitrage des hommes, les Muḥakkima comprirent que la communauté ne pouvait vivre sans un guide légitime. Leurs notables se réunirent, se concertèrent, puis prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī pour être leur imam.',
            en: 'Observing that the leadership of the Muslims had been left vacant since ‘Alī stepped away from the caliphate by accepting human arbitration, al-Muḥakkima recognized that the community could not endure without a righteous guide. Their notables gathered, consulted together, and pledged allegiance to ‘Abdullāh ibn Wahb ar-Rāsibī to be their imam.',
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
            ar: 'عندما عزم عليّ بن أبي طالب على جمع الجيش من جديد لقتال معاوية، أرسل يدعو المحكّمة لتنضمّ إليه. لكنّ المحكّمة لم تُجبه؛ لأنّه في نظرهم لم يَعُد خليفةً بعد أن تخلّى عنها ورضي بالتحكيم وأوقف القتال في صفّين. ومع ذلك لم يقطعوا حبل الحوار، بل خيّروه أن يدخل في طاعة الإمام الذي بايعوه إن كان حريصًا على وحدة صفّ المسلمين. فلم يقبل عليّ، وبيّن لهم سبب قبوله التحكيم وميله إليه، فبقيت الأمّة منقسمة، وباتت الرياح تنذر بعاصفةٍ قريبة.',
            fr: 'Lorsque ‘Alī ibn Abī Ṭālib décida de rassembler de nouveau une armée pour affronter Mu‘āwiya, il appela les Muḥakkima à le rejoindre. Mais ceux-ci ne répondirent pas à son appel : à leurs yeux, il avait cessé d’être calife après avoir renoncé au califat en acceptant l’arbitrage et en arrêtant le combat à Ṣiffīn. Ils ne fermèrent pourtant pas la porte au dialogue : ils lui proposèrent d’entrer dans l’obéissance à l’imam qu’ils avaient élu, s’il souhaitait préserver l’unité des musulmans. ‘Alī refusa, et leur expliqua pourquoi il avait accepté l’arbitrage et y avait penché ; les musulmans demeurèrent donc divisés, dans un climat lourd de menaces.',
            en: 'When ‘Alī ibn Abī Ṭālib resolved to reassemble an army to fight Mu‘āwiya, he summoned al-Muḥakkima to join him. But al-Muḥakkima did not answer his call; in their eyes, he was no longer caliph, having given it up by accepting the arbitration and halting the fighting at Ṣiffīn. Yet they did not shut the door on dialogue: they invited him to enter into obedience to the imam they had pledged to, if he truly sought the unity of Muslims. ‘Alī refused, and explained to them why he had accepted the arbitration and inclined towards it; so the community remained divided, with storms looming on the horizon.',
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
        en: 'Choose what happened at each link to follow how al-Muḥakkima headed to Nahrawān.',
      },
      image: `${IMG_JS}/refusal.png`,
      imageAlt: {
        ar: 'قاعةُ قصرٍ فخمة فيها عرشٌ أحمر فارغ تحت قبّة',
        fr: 'Une salle de palais somptueuse avec un trône rouge vide sous une coupole',
        en: 'A grand palace hall with an empty red throne beneath a dome',
      },
      start: {
        ar: 'بعد خدعة التحكيم التي نزعت عليًا من الخلافة، اتّجهت المحكّمة إلى منطقة النهروان.',
        fr: 'Après la ruse de l’arbitrage, qui dépouilla ‘Alī du califat, les Muḥakkima se dirigèrent vers la région de Nahrawān.',
        en: 'After the ruse of the arbitration, which stripped ‘Alī of the caliphate, al-Muḥakkima headed to the Nahrawān area.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'مَن بايعته المحكّمة إمامًا عليها؟', fr: 'Qui les Muḥakkima prirent-ils pour imam ?', en: 'Whom did al-Muḥakkima take as their imam?' },
          correct: {
            ar: 'بايعوا عبد الله بن وهب الراسبيّ إمامًا لهم.',
            fr: 'Ils prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī comme imam.',
            en: 'They pledged allegiance to ‘Abdullāh ibn Wahb ar-Rāsibī as their imam.',
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
          prompt: { ar: 'ماذا فعل عليّ وهو يتجهّز لقتال معاوية؟', fr: 'Que fit ‘Alī en se préparant à combattre Mu‘āwiya ?', en: 'What did ‘Alī do while preparing to fight Mu‘āwiya?' },
          correct: {
            ar: 'عاد يجمع الجيش من جديد، لكنّ المحكّمة لم تُجبه.',
            fr: 'Il se mit à rassembler de nouveau une armée, mais les Muḥakkima ne lui répondirent pas.',
            en: 'He set about gathering an army again, but al-Muḥakkima did not answer his call.',
          },
          distractors: [
            {
              label: { ar: 'انضمّت المحكّمة إلى جيشه فورًا', fr: 'Les Muḥakkima rejoignirent aussitôt son armée', en: 'Al-Muḥakkima immediately joined his army' },
              hint: { ar: 'الدرس يذكر أنّهم لم يُجيبوه.', fr: 'La leçon précise qu’ils ne lui répondirent pas.', en: 'The lesson states they did not answer him.' },
            },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'لماذا لم تُجب المحكّمة نداء عليّ؟', fr: 'Pourquoi les Muḥakkima ne répondirent-ils pas à l’appel de ‘Alī ?', en: 'Why did al-Muḥakkima not answer ‘Alī’s call?' },
          correct: {
            ar: 'لأنّه لم يَعُد خليفةً في نظرهم، بعد أن تخلّى عنها ورضي بالتحكيم وأوقف القتال في صفّين.',
            fr: 'Parce qu’il n’était plus calife à leurs yeux, ayant renoncé à ce titre en acceptant l’arbitrage et en arrêtant le combat à Ṣiffīn.',
            en: 'Because he was no longer caliph in their eyes, having given up the title by accepting the arbitration and halting the fighting at Ṣiffīn.',
          },
          distractors: [
            {
              label: { ar: 'لأنّهم كانوا يفضّلون معاوية عليه', fr: 'Parce qu’ils préféraient Mu‘āwiya', en: 'Because they preferred Mu‘āwiya to him' },
              hint: { ar: 'الدرس يربط رفضهم بتخلّيه عن الخلافة برضاه بالتحكيم، لا بتفضيل معاوية.', fr: 'La leçon lie leur refus à sa renonciation au califat en acceptant l’arbitrage, non à une préférence pour Mu‘āwiya.', en: 'The lesson ties their refusal to his giving up the caliphate by accepting arbitration, not to any preference for Mu‘āwiya.' },
            },
          ],
        },
        {
          id: 's4',
          prompt: { ar: 'بماذا خيّرت المحكّمةُ عليًا؟', fr: 'Que proposèrent les Muḥakkima à ‘Alī ?', en: 'What did al-Muḥakkima offer ‘Alī as a choice?' },
          correct: {
            ar: 'خيّروه أن يدخل في طاعة الخليفة المبايَع إن أراد وحدة الصفّ، فلم يقبل، وبيّن لهم سبب قبوله التحكيم وميله إليه.',
            fr: 'Ils lui proposèrent d’entrer dans l’obéissance à l’imam qu’ils avaient élu, s’il voulait l’unité des rangs ; il refusa et leur expliqua pourquoi il avait accepté l’arbitrage et y avait penché.',
            en: 'They gave him the choice to enter into obedience to the imam they had pledged to, if he wanted unity of ranks; he refused and explained to them why he had accepted the arbitration and inclined towards it.',
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
        en: 'Read: The Plots of Instigators and the Tragedy of Nahrawān',
      },
      intro: {
        ar: 'اقرأ كيف أدّت الفتنة وغياب القيادة الموحّدة إلى معركة النهروان الدامية.',
        fr: 'Découvre comment les intrigues et l’absence de direction unique conduisirent à la tragique bataille de Nahrawān.',
        en: 'Discover how turmoil and the absence of unified leadership led to the tragic battle of Nahrawān.',
      },
      image: `${IMG_JS}/tahkim.png`,
      imageAlt: {
        ar: 'سيفٌ وترسٌ وخوذتان ملقاةٌ على كثيبٍ من الرمل',
        fr: 'Une épée, un bouclier et deux casques abandonnés sur une dune',
        en: 'A sword, a shield and two helmets lying on a sand dune',
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
            en: 'The Trap of Mu‘āwiya’s Infiltrated Agents',
          },
          text: {
            ar: 'بينما كان عليّ والمحكّمة يحاولان التوصّل إلى تفاهمٍ يوقف التصعيد، اندسّ رجالٌ موالون لمعاوية داخل جيش عليّ، متنكّرين في ثياب النصح والغيرة على الدين. وأخذ هؤلاء المحرّضون يُشيرون على عليّ أن يسير لحرب المحكّمة، ويلصقون بهم تهمة إثارة الفتنة وأعمال الشغب.',
            fr: 'Tandis que ‘Alī et les Muḥakkima cherchaient encore un terrain d’entente pour apaiser les tensions, des partisans de Mu‘āwiya infiltrés au sein de l’armée de ‘Alī s’activèrent dans l’ombre. Ces agitateurs dissimulés poussèrent ‘Alī à faire la guerre aux Muḥakkima, leur attribuant faussement les actes de violence et de rébellion qui secouaient la région.',
            en: 'While ‘Alī and al-Muḥakkima were still seeking common ground to de-escalate tensions, partisans of Mu‘āwiya infiltrated into ‘Alī’s army went to work in secret. Masquerading as loyal advisers, these conspirators urged ‘Alī to march against al-Muḥakkima, pinning false accusations on them and blaming them for all the unrest and rioting.',
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
            ar: 'لم يزل المحرّضون يُلحّون على عليّ حتى سار بجيشه نحو معسكر المحكّمة في النهروان عند نهر دجلة، فباغتهم بضربةٍ مفاجئة. كانت الكارثة عظيمة؛ حيث قُتل منهم الآلاف. ومن تبقّى منهم أنكر عمل عليّ وابتعد عن الكوفة. ولم ينتفع عليّ من هذه المعركة؛ بل تفرّق جيشه بعد الحادثة، فلم يَسِر إلى الشام لقتال معاوية.',
            fr: 'Les instigateurs insistèrent tant que ‘Alī finit par marcher avec son armée vers le campement des Muḥakkima à Nahrawān, au bord du Tigre, et les surprit par une attaque soudaine. La tragédie fut immense : des milliers d’entre eux furent tués. Les survivants désavouèrent l’acte de ‘Alī et s’éloignèrent de Kūfa. Loin de renforcer ‘Alī, cette bataille dispersa son armée, et il ne marcha plus vers le Shām pour combattre Mu‘āwiya.',
            en: 'The instigators pressed ‘Alī relentlessly until he marched his army toward al-Muḥakkima’s camp at Nahrawān by the Tigris, launching a sudden assault. The tragedy was devastating: thousands of them were killed. Those who survived denounced ‘Alī’s act and moved away from Kūfa. Far from aiding ‘Alī, the battle scattered his army, and he did not march to Shām to fight Mu‘āwiya.',
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
        en: 'Chaos and the Battle of Nahrawān',
      },
      intro: {
        ar: 'كانت تلك أيّام غياب القيادة الواحدة. اضغط على عناصر المشهد لتكتشف ما جرى.',
        fr: 'Ce furent des jours sans direction unique. Touche les éléments de la scène pour découvrir ce qui se passa.',
        en: 'Those were days without a single leadership. Tap the elements of the scene to discover what happened.',
      },
      image: `${IMG_JS}/tahkim.png`,
      imageAlt: {
        ar: 'سيفٌ وترسٌ وخوذتان ملقاةٌ على كثيبٍ من الرمل',
        fr: 'Une épée, un bouclier et deux casques abandonnés sur une dune',
        en: 'A sword, a shield and two helmets lying on a sand dune',
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
            en: 'While ‘Alī and al-Muḥakkima were trying to reach an accord, some of Mu‘āwiya’s men, disguised within ‘Alī’s army, urged him to march against al-Muḥakkima, pinning on them the charge of stirring sedition and unrest.',
          },
        },
        {
          id: 'ambush',
          x: 78,
          y: 55,
          label: { ar: 'المباغتة عند النهروان', fr: 'L’attaque surprise à Nahrawān', en: 'The ambush at Nahrawān' },
          description: {
            ar: 'لم يتوقّف المحرّضون عن دفع عليّ حتى باغت المحكّمة وهم في جهة النهروان على نهر دجلة، فقُتل منهم الآلاف.',
            fr: 'Les instigateurs ne cessèrent de pousser ‘Alī jusqu’à ce qu’il surprît les Muḥakkima du côté de Nahrawān, sur le Tigre, où des milliers d’entre eux furent tués.',
            en: 'The instigators kept pressing ‘Alī until he ambushed al-Muḥakkima at Nahrawān on the Tigris, and thousands of them were killed.',
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
            en: 'The surviving members of al-Muḥakkima denounced ‘Alī’s act and moved away from Kūfa; and ‘Alī did not march against Mu‘āwiya, as his army had scattered after the event.',
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
        en: 'After Nahrawān, things slipped gradually out of ‘Alī’s hands. Move through the stops to follow how the situation unraveled.',
      },
      steps: [
        {
          id: 'small-army',
          period: { ar: 'بعد النهروان', fr: 'Après Nahrawān', en: 'After Nahrawān' },
          label: { ar: 'جيشٌ صغير', fr: 'Une armée réduite', en: 'A small army' },
          detail: {
            ar: 'أصبح جيش عليّ صغيرًا بعد قتل أهل النهروان، فلم يَعُد متمكّنًا ولا قادرًا على إخضاع معاوية.',
            fr: 'Après le massacre des gens de Nahrawān, l’armée de ‘Alī devint réduite, incapable de soumettre Mu‘āwiya.',
            en: 'After the killing of the people of Nahrawān, ‘Alī’s army became small, no longer able to subdue Mu‘āwiya.',
          },
        },
        {
          id: 'muawiya-expands',
          period: { ar: 'في الوقت نفسه', fr: 'Dans le même temps', en: 'At the same time' },
          label: { ar: 'توسّع معاوية', fr: 'L’expansion de Mu‘āwiya', en: 'Mu‘āwiya expands' },
          detail: {
            ar: 'أصبح معاوية يرسل جيوشًا للسيطرة على أقاليم مصر والحجاز واليمن والعراق، فعاثت جيوشه فسادًا.',
            fr: 'Mu‘āwiya se mit à envoyer des armées prendre le contrôle de l’Égypte, du Ḥijāz, du Yémen et de l’Irak, semant le désordre.',
            en: 'Mu‘āwiya began sending armies to take control of Egypt, the Ḥijāz, Yemen, and Iraq, and his forces spread corruption.',
          },
        },
        {
          id: 'ali-pursues',
          period: { ar: 'بينما يُعيد عليّ التجمّع', fr: 'Pendant que ‘Alī tente de se regrouper', en: 'As ‘Alī tries to regroup' },
          label: { ar: 'مطاردةٌ بما تيسّر', fr: 'Une poursuite avec les moyens du bord', en: 'A pursuit with what little remained' },
          detail: {
            ar: 'سعى عليّ وراء جيوش معاوية بما استطاع أن يجمع من الجنود، في محاولةٍ لوقف توسّعها.',
            fr: '‘Alī poursuivit les armées de Mu‘āwiya avec les soldats qu’il put rassembler, tentant d’arrêter leur expansion.',
            en: '‘Alī pursued Mu‘āwiya’s armies with whatever soldiers he could gather, trying to halt their expansion.',
          },
        },
        {
          id: 'assassination',
          period: { ar: '17 رمضان 40هـ', fr: '17 Ramaḍān 40 H', en: '17 Ramaḍān 40 AH' },
          label: { ar: 'طعن عليّ ومقتله', fr: '‘Alī poignardé, puis mort', en: '‘Alī stabbed, then killed' },
          certainty: 'approximate',
          detail: {
            ar: 'طُعن عليّ بن أبي طالب رضي الله عنه عند باب المسجد صبح 17 رمضان 40هـ، ومات متأثّرًا بجراحه.',
            fr: '‘Alī ibn Abī Ṭālib fut poignardé à la porte de la mosquée au matin du 17 Ramaḍān 40 H, et mourut de ses blessures.',
            en: '‘Alī ibn Abī Ṭālib was stabbed at the mosque door on the morning of 17 Ramaḍān 40 AH, and died of his wounds.',
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
        en: 'Read: The Dawn Conspiracy and the Assassination of ‘Alī',
      },
      intro: {
        ar: 'اقرأ ما رُوي عن المؤامرة التي نُفّذت صبح يومٍ من رمضان سنة 40 للهجرة.',
        fr: 'Lis ce qui fut rapporté du complot exécuté un matin de Ramaḍān, en l’an 40 de l’Hégire.',
        en: 'Read what was reported about the plot carried out one morning in Ramaḍān, 40 AH.',
      },
      image: `${IMG_JS}/tahkim.png`,
      imageAlt: {
        ar: 'سيفٌ وترسٌ وخوذتان ملقاةٌ على كثيبٍ من الرمل',
        fr: 'Une épée, un bouclier et deux casques abandonnés sur une dune',
        en: 'A sword, a shield and two helmets lying on a sand dune',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'ضعف الكوفة وتوسّع جيوش معاوية',
            fr: 'L’affaiblissement de Kūfa et l’offensive de Mu‘āwiya',
            en: 'The Weakening of Kūfa and Mu‘āwiya’s Expansion',
          },
          text: {
            ar: 'بعد واقعة النهروان، وجد عليّ بن أبي طالب نفسه بجيشٍ صغيرٍ منهكٍ لم يَعُد يقوى على فرض الاستقرار أو ردع الخصوم. وفي تلك الأثناء، اغتنم معاوية بن أبي سفيان الفرصة، فأرسل الجيوش تلو الجيوش لبسط سيطرته على مصر، والحجاز، واليمن، وأطراف العراق، وأخذت فرقه تبثّ الخوف وتعيث فسادًا في الأقاليم، بينما كان عليّ يحاول بما تبقّى معه من قليل الجند ملاحقتهم ودرء شرورهم.',
            fr: 'Après les événements de Nahrawān, ‘Alī ibn Abī Ṭālib se retrouva à la tête d’une troupe réduite et épuisée, incapable de maintenir l’ordre ou de soumettre ses rivaux. Profitant de cet affaiblissement, Mu‘āwiya envoya des colonnes armées s’emparer de l’Égypte, du Ḥijāz, du Yémen et des confins de l’Irak. Ses troupes semèrent la terreur dans les provinces, tandis que ‘Alī tentait désespérément, avec le peu d’hommes qui lui restait, de freiner leur progression.',
            en: 'Following the tragedy of Nahrawān, ‘Alī ibn Abī Ṭālib was left with a small, exhausted force, unable to impose stability or deter rivals. Mu‘āwiya seized this moment, dispatching army after army to seize control of Egypt, the Ḥijāz, Yemen, and Iraqi borderlands. His forces spread corruption and fear across the regions, while ‘Alī struggled with his few remaining men to pursue them and contain the damage.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'قيل: ثلاثةٌ اتّفقوا على قتل الثلاثة',
            fr: 'On rapporte : trois hommes s’accordèrent pour tuer trois chefs',
            en: 'It was reported: three men agreed to kill three leaders',
          },
          text: {
            ar: 'في خضمّ هذا النزاع الدامي، قيل إنّ ثلاثة رجالٍ اتّفقوا على قتل عليّ بن أبي طالب في الكوفة، ومعاوية بن أبي سفيان في دمشق، وعمرو بن العاص في مصر، في وقتٍ واحد؛ وقيل: بل أرسلهم المحكّمة.',
            fr: 'Au cœur de ces luttes sanglantes, on rapporte que trois hommes s’accordèrent pour tuer en même temps ‘Alī ibn Abī Ṭālib à Kūfa, Mu‘āwiya ibn Abī Sufyān à Damas et ‘Amr ibn al-‘Āṣ en Égypte ; d’autres disent que ce sont les Muḥakkima qui les envoyèrent.',
            en: 'In the midst of these bloody disputes, it is reported that three men agreed to kill, at the same time, ‘Alī ibn Abī Ṭālib in Kūfa, Mu‘āwiya ibn Abī Sufyān in Damascus and ‘Amr ibn al-‘Āṣ in Egypt; others say al-Muḥakkima sent them.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'صبح 17 رمضان 40هـ',
            fr: 'Le matin du 17 Ramaḍān 40 H',
            en: 'The Morning of 17 Ramaḍān 40 AH',
          },
          text: {
            ar: 'وفي صبح 17 رمضان سنة 40هـ طُعن عليّ بن أبي طالب رضي الله عنه عند باب مسجد الكوفة، ومات متأثّرًا بجراحه. وضُرب معاوية في دمشق وهو ذاهبٌ إلى المسجد فأُصيب في أَلْيَتِه لكنّه نجا. وفي الوقت نفسه لم يخرج عمرو بن العاص إلى المسجد في مصر فنجا. وهكذا لم يُقتل من الثلاثة إلّا عليّ، لتتعقّد الأمور أكثر فأكثر.',
            fr: 'Au matin du 17 Ramaḍān 40 H, ‘Alī ibn Abī Ṭālib fut poignardé à la porte de la mosquée de Kūfa et mourut de ses blessures. À Damas, Mu‘āwiya fut frappé alors qu’il se rendait à la mosquée : blessé au postérieur, il survécut. Au même moment, en Égypte, ‘Amr ibn al-‘Āṣ ne sortit pas vers la mosquée et en réchappa. Ainsi, des trois, seul ‘Alī fut tué, et la situation devint plus complexe encore.',
            en: 'On the morning of 17 Ramaḍān 40 AH, ‘Alī ibn Abī Ṭālib was stabbed at the door of the mosque of Kūfa and died of his wounds. In Damascus, Mu‘āwiya was struck on his way to the mosque: wounded in the buttock, he survived. At the same time, in Egypt, ‘Amr ibn al-‘Āṣ did not go out to the mosque and escaped. So of the three only ‘Alī was killed, and matters grew ever more complicated.',
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
      image: `${IMG_JS}/tahkim.png`,
      imageAlt: {
        ar: 'سيفٌ وترسٌ وخوذتان ملقاةٌ على كثيبٍ من الرمل',
        fr: 'Une épée, un bouclier et deux casques abandonnés sur une dune',
        en: 'A sword, a shield and two helmets lying on a sand dune',
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
            ar: 'وفي صبح 17 رمضان 40هـ، طُعن عليّ بن أبي طالب عند باب المسجد.',
            fr: 'Au matin du 17 Ramaḍān 40 H, ‘Alī ibn Abī Ṭālib fut poignardé à la porte de la mosquée.',
            en: 'On the morning of 17 Ramaḍān 40 AH, ‘Alī ibn Abī Ṭālib was stabbed at the mosque door.',
          },
        },
        {
          type: 'msg',
          id: 'muawiya-mua',
          who: 'narrator',
          text: {
            ar: 'بينما ضُرب معاوية في أَلْيَتِه وهو ذاهبٌ إلى المسجد.',
            fr: 'Tandis que Mu‘āwiya fut frappé, blessé au postérieur, alors qu’il se rendait à la mosquée.',
            en: 'Meanwhile Mu‘āwiya was struck, wounded in the buttock, while on his way to the mosque.',
          },
        },
        {
          type: 'msg',
          id: 'amr-absent',
          who: 'narrator',
          text: {
            ar: 'وفي الوقت نفسه، لم يخرج عمرو بن العاص إلى المسجد.',
            fr: 'Au même moment, ‘Amr ibn al-‘Āṣ ne sortit pas vers la mosquée.',
            en: 'At the same time, ‘Amr ibn al-‘Āṣ did not go out to the mosque.',
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
              label: { ar: 'اتّفقوا على قتل عليّ وعمرو ومعاوية في وقتٍ واحد', fr: 'Ils s’accordèrent pour tuer ‘Alī, ‘Amr et Mu‘āwiya en même temps', en: 'They agreed to kill ‘Alī, ‘Amr, and Mu‘āwiya at the same time' },
              hint: { ar: 'هذا ما قِيل في الدرس بالحرف.', fr: 'C’est exactement ce que rapporte la leçon.', en: 'This is exactly what the lesson states.' },
            },
            {
              id: 'wrong',
              correct: false,
              label: { ar: 'اتّفقوا على قتل عليّ وحده دون الآخرَين', fr: 'Ils s’accordèrent pour ne tuer que ‘Alī', en: 'They agreed to kill only ‘Alī, not the others' },
              hint: { ar: 'الدرس يذكر ثلاثة أهداف، لا هدفًا واحدًا.', fr: 'La leçon mentionne trois cibles, non une seule.', en: 'The lesson names three targets, not one.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'other-report',
          who: 'historians',
          text: {
            ar: 'وقيل: بل أرسلهم المحكّمة.',
            fr: 'D’autres disent : ce sont les Muḥakkima qui les envoyèrent.',
            en: 'Others say: it was al-Muḥakkima who sent them.',
          },
        },
        {
          type: 'msg',
          id: 'result',
          who: 'narrator',
          text: {
            ar: 'لكنّ الذي حدث أنّه لم يُقتَل منهم إلّا عليّ!',
            fr: 'Mais ce qui arriva, c’est que seul ‘Alī fut tué parmi eux !',
            en: 'But what actually happened was that only ‘Alī was killed among them!',
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
        en: 'Read: al-Ḥasan’s Treaty and the Shift to Hereditary Monarchy',
      },
      intro: {
        ar: 'اقرأ كيف انتهت الخلافة الراشدة القائمة على الشورى، وكيف تحوّل الحكم إلى مُلكٍ أمويّ وراثيّ.',
        fr: 'Lis comment le califat bien guidé fondé sur la concertation prit fin pour céder la place au pouvoir dynastique omeyyade.',
        en: 'Read how the rightly-guided caliphate based on shūrā came to an end, giving way to hereditary Umayyad dynastic rule.',
      },
      image: `${IMG_JS}/refusal.png`,
      imageAlt: {
        ar: 'قاعةُ قصرٍ فخمة فيها عرشٌ أحمر فارغ تحت قبّة',
        fr: 'Une salle de palais somptueuse avec un trône rouge vide sous une coupole',
        en: 'A grand palace hall with an empty red throne beneath a dome',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'بيعة الحسن وتنازله حقنًا للدماء',
            fr: 'L’allégeance à al-Ḥasan et sa renonciation pour épargner le sang',
            en: 'The Pledge to al-Ḥasan and His Renunciation to Spare Blood',
          },
          text: {
            ar: 'بعد استشهاد عليّ رضي الله عنه، بايع من كان معه ابنَه الحسن بن عليّ رضي الله عنهما ليكون إمامًا عليهم، فاستمرّ في حرب معاوية. ولمّا كان من القتلى الكثير وكلّهم من المسلمين، فضّل الحسن أن يُرسل إلى معاوية بأن يتوقّف سفك الدماء، ويُعطي الإمامة إلى معاوية على شرط أن تعود إلى المسلمين عند وفاة معاوية. فقبل الطرفان بذلك، وتسلّم معاوية الحكم من الحسن في 01 محرّم 41هـ.',
            fr: 'Après le martyre de ‘Alī, ceux qui étaient avec lui prêtèrent allégeance à son fils al-Ḥasan ibn ‘Alī comme imam, et celui-ci poursuivit la guerre contre Mu‘āwiya. Mais comme les morts étaient nombreux, et tous musulmans, al-Ḥasan préféra écrire à Mu‘āwiya pour que cesse l’effusion de sang, et lui céder l’imamat à condition qu’il revienne aux musulmans à la mort de Mu‘āwiya. Les deux parties acceptèrent, et Mu‘āwiya reçut le pouvoir d’al-Ḥasan le 1er Muḥarram 41 H.',
            en: 'After ‘Alī’s martyrdom, those who had been with him pledged allegiance to his son al-Ḥasan ibn ‘Alī as imam, and he continued the war against Mu‘āwiya. But since the dead were many, and all of them Muslims, al-Ḥasan preferred to send word to Mu‘āwiya that the bloodshed should stop, and to hand him the imamate on condition that it return to the Muslims upon Mu‘āwiya’s death. Both sides accepted, and Mu‘āwiya received power from al-Ḥasan on 1 Muḥarram 41 AH.',
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
            ar: 'تحصّل معاوية على الحكم وجعل من دمشق عاصمةً له، وأبقى الحكم لأسرته بني أميّة فسُمّيت الدولة الأمويّة، ثمّ نقض الشرط لاحقًا؛ فتحوّلت الخلافة الراشدة التي كانت تقوم على شورى كبار الصحابة والمسلمين إلى مُلكٍ عَضوضٍ وراثيّ.',
            fr: 'Mu‘āwiya obtint le pouvoir et fit de Damas sa capitale ; il garda le pouvoir pour sa famille, les Banū Umayya — d’où le nom d’État omeyyade —, puis rompit plus tard la condition. Le califat bien guidé, fondé sur la concertation des grands Compagnons et des musulmans, devint ainsi une royauté tyrannique et héréditaire (al-mulk al-‘aḍūḍ).',
            en: 'Mu‘āwiya obtained power and made Damascus his capital; he kept rule within his family, the Banū Umayya — hence the name “Umayyad state” — and later broke the condition. The rightly-guided caliphate, built on the consultation of the senior Companions and the Muslims, thus became a harsh, hereditary kingship (al-mulk al-‘aḍūḍ).',
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
            ar: 'لكنّ دماء المسلمين لم تتوقّف؛ فقد عمد الأمويّون إلى القضاء على الحسن وآل بيت عليّ ومن شايعهم، كما لحقوا بمن كان مع المحكّمة وأهل النهروان ومن هو مع رأيهم. ومع اشتداد الظلم على المحكّمة والشيعة وغيرهم، أخذ بعضهم يردّ على الظلم بالسيف، وأمّا بعضهم الآخر فكظم غيظه ولم يردّ بالسيف كما يُفعل بهم، واشتغل آخرون بالتعلّم والتفقّه في الدين؛ ولكنّ الأمويّين نعتوهم بالنعوت المختلفة ليُشكّكوا الناس في نواياهم.',
            fr: 'Mais le sang des musulmans ne cessa pas de couler : les Omeyyades s’employèrent à éliminer al-Ḥasan, la famille de ‘Alī et leurs partisans, et poursuivirent ceux qui étaient avec les Muḥakkima, les gens de Nahrawān et quiconque partageait leur avis. Face à l’oppression croissante contre les Muḥakkima, les Shī‘a et d’autres, certains répondirent à l’injustice par l’épée ; d’autres continrent leur colère et ne rendirent pas coup pour coup ; d’autres encore se consacrèrent à l’étude et à la compréhension de la religion. Mais les Omeyyades leur donnèrent divers noms pour jeter le doute sur leurs intentions.',
            en: 'But Muslim bloodshed did not stop: the Umayyads set out to eliminate al-Ḥasan, ‘Alī’s household and their partisans, and pursued those who were with al-Muḥakkima, the people of Nahrawān and whoever shared their view. As oppression grew against al-Muḥakkima, the Shī‘a and others, some answered injustice with the sword; others held back their anger and did not answer with the sword as was done to them; and still others devoted themselves to learning and understanding the religion. But the Umayyads gave them various labels to cast doubt on their intentions.',
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
        en: 'The pledge to al-Ḥasan and his renunciation to Mu‘āwiya',
      },
      intro: {
        ar: 'بايع من كان مع عليّ ابنَه الحسن ليكون إمامًا عليهم، فاستمرّ في حرب معاوية. ولمّا كثر القتلى وكلّهم من المسلمين، فضّل الحسن أن يُرسل إلى معاوية بأن يتوقّف سفك الدماء، وتسلّم معاوية الحكم في 01 محرّم 41هـ. اسحب كلّ بطاقةٍ إلى الجهة الصحيحة: أكان هذا ممّا تنازل عنه الحسن، أم ممّا اشترطه؟',
        fr: 'Ceux qui étaient avec ‘Alī prêtèrent allégeance à son fils al-Ḥasan comme imam, et il poursuivit la guerre contre Mu‘āwiya. Comme les morts, tous musulmans, se multipliaient, al-Ḥasan préféra écrire à Mu‘āwiya pour que cesse l’effusion de sang, et Mu‘āwiya reçut le pouvoir le 1er Muḥarram 41 H. Fais glisser chaque carte du bon côté : était-ce ce à quoi al-Ḥasan renonça, ou ce qu’il posa comme condition ?',
        en: 'Those who had been with ‘Alī pledged allegiance to his son al-Ḥasan as imam, and he continued the war against Mu‘āwiya. As the dead, all of them Muslims, grew many, al-Ḥasan preferred to send word to Mu‘āwiya that the bloodshed should stop, and Mu‘āwiya received power on 1 Muḥarram 41 AH. Swipe each card to the right side: was it something al-Ḥasan gave up, or something he set as a condition?',
      },
      left: {
        label: { ar: 'ما تنازل عنه الحسن', fr: 'Ce à quoi al-Ḥasan renonça', en: 'What al-Ḥasan gave up' },
        tag: { ar: 'تنازلٌ', fr: 'Renoncement', en: 'Renunciation' },
      },
      right: {
        label: { ar: 'ما اشترطه الحسن', fr: 'Ce qu’al-Ḥasan posa comme condition', en: 'What al-Ḥasan set as a condition' },
        tag: { ar: 'شرطٌ', fr: 'Condition', en: 'Condition' },
      },
      cards: [
        {
          id: 'give-imamah',
          who: { ar: 'الإمامة', fr: 'L’imamat', en: 'The imamate' },
          deed: {
            ar: 'يُعطي الإمامة إلى معاوية',
            fr: 'Céder l’imamat à Mu‘āwiya',
            en: 'Hand the imamate over to Mu‘āwiya',
          },
          side: 'left',
          explanation: {
            ar: 'صحيح، تنازل الحسن عن الإمامة لمعاوية حقنًا للدماء.',
            fr: 'Exact, al-Ḥasan céda l’imamat à Mu‘āwiya pour épargner le sang.',
            en: 'Correct — al-Ḥasan gave up the imamate to Mu‘āwiya to spare bloodshed.',
          },
        },
        {
          id: 'stop-war',
          who: { ar: 'الحرب', fr: 'La guerre', en: 'The war' },
          deed: {
            ar: 'الاستمرار في حرب معاوية',
            fr: 'Poursuivre la guerre contre Mu‘āwiya',
            en: 'Continuing the war against Mu‘āwiya',
          },
          side: 'left',
          explanation: {
            ar: 'صحيح، كان الحسن قد استمرّ في حرب معاوية، ثمّ تركها حتى يتوقّف سفك الدماء.',
            fr: 'Exact, al-Ḥasan avait poursuivi la guerre contre Mu‘āwiya, puis y renonça pour que cesse l’effusion de sang.',
            en: 'Correct — al-Ḥasan had continued the war against Mu‘āwiya, then gave it up so the bloodshed would stop.',
          },
        },
        {
          id: 'return-condition',
          who: { ar: 'الشرط', fr: 'La condition', en: 'The condition' },
          deed: {
            ar: 'أن تعود الإمامة إلى المسلمين عند وفاة معاوية',
            fr: 'Que l’imamat revienne aux musulmans à la mort de Mu‘āwiya',
            en: 'That the imamate return to the Muslims upon Mu‘āwiya’s death',
          },
          side: 'right',
          explanation: {
            ar: 'نعم، هذا الشرط الذي وضعه الحسن، وقبله الطرفان.',
            fr: 'Oui, c’est la condition posée par al-Ḥasan, acceptée par les deux parties.',
            en: 'Yes, this was the condition al-Ḥasan set, and both sides accepted it.',
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
        en: 'Flip the cards to see what happened after Mu‘āwiya obtained power.',
      },
      cards: [
        {
          id: 'damascus',
          image: `${IMG_JS}/refusal.png`,
          imageAlt: {
            ar: 'قاعةُ قصرٍ فخمة فيها عرشٌ أحمر فارغ تحت قبّة',
            fr: 'Une salle de palais somptueuse avec un trône rouge vide sous une coupole',
            en: 'A grand palace hall with an empty red throne beneath a dome',
          },
          fact: {
            ar: 'تحصّل معاوية على الحكم وجعل دمشق عاصمةً له، وأبقى الحكم لأسرته فسُمّيت الدولة الأمويّة.',
            fr: 'Mu‘āwiya obtint le pouvoir et fit de Damas sa capitale ; il garda le pouvoir pour sa famille, d’où le nom d’État omeyyade.',
            en: 'Mu‘āwiya obtained power and made Damascus his capital; he kept rule within his family, hence the name "Umayyad state."',
          },
        },
        {
          id: 'pursuit',
          image: `${IMG_JS}/departure.png`,
          imageAlt: {
            ar: 'ثلاثة جمالٍ تسير في الصحراء مبتعدةً عن مدينةٍ تلوح في الأفق',
            fr: 'Trois chameaux marchant dans le désert, s’éloignant d’une ville à l’horizon',
            en: 'Three camels walking through the desert, away from a city on the horizon',
          },
          fact: {
            ar: 'لكنّ دماء المسلمين لم تتوقّف؛ فقد عمد الأمويّون إلى القضاء على الحسن وآل بيت عليّ وشيعتهم، ومَن كان مع المحكّمة وأهل النهروان ومَن هو مع رأيهم، لأنّهم لا يقبلون بمعاوية ودولته التي لم تقم على الحقّ وشورى كبار الصحابة والمسلمين.',
            fr: 'Mais le sang des musulmans ne cessa pas de couler : les Omeyyades s’employèrent à éliminer al-Ḥasan, la famille de ‘Alī et leurs partisans, ainsi que les Muḥakkima, les gens de Nahrawān et quiconque partageait leur avis, car ils refusaient Mu‘āwiya et son État, qui ne s’était pas fondé sur le droit et la concertation des grands Compagnons et des musulmans.',
            en: 'But Muslim bloodshed did not stop: the Umayyads set out to eliminate al-Ḥasan, ‘Alī’s household, and their partisans, along with al-Muḥakkima, the people of Nahrawān, and whoever shared their view — because they refused to accept Mu‘āwiya and his state, which had not been built on right and the counsel of the senior Companions and Muslims.',
          },
        },
        {
          id: 'reactions',
          image: `${IMG_JS}/mushaf.png`,
          imageAlt: {
            ar: 'مصحفان مفتوحان مرفوعان على أسنّة الرماح تحت سماءٍ زرقاء',
            fr: 'Deux Corans ouverts levés sur des pointes de lances sous un ciel bleu',
            en: 'Two open Qur’ans raised on spear points under a blue sky',
          },
          fact: {
            ar: 'ومع اشتداد الظُّلم على المحكّمة والشيعة وغيرهم، أخذ بعضهم يردّ على الظلم بالسيف، فكظم آخرون غيظهم ولم يردّوا بالسيف كما يُفعل بهم، واشتغل آخرون بالتعلّم والتفقّه في الدين، ولكنّ الأمويّين نعتوهم بالنعوت المختلفة ليُشكّكوا الناس في نواياهم.',
            fr: 'Face à l’intensification de l’oppression contre les Muḥakkima, les Shī‘a et d’autres, certains répondirent à l’injustice par l’épée, d’autres continrent leur colère sans rendre la pareille, et d’autres encore se consacrèrent à l’étude et à la compréhension de la religion ; mais les Omeyyades leur donnèrent divers noms afin de jeter le doute sur leurs intentions.',
            en: 'As oppression intensified against al-Muḥakkima, the Shī‘a, and others, some began answering injustice with the sword, others suppressed their anger and did not respond in kind, and still others devoted themselves to learning and understanding the religion — but the Umayyads labeled them with various names to cast doubt on their intentions.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'كيف وصف الدرس دولة معاوية، ولماذا رفضها البعض؟ اختر كلّ ما يدعمه النصّ.',
          fr: 'Comment la leçon décrit-elle l’État de Mu‘āwiya, et pourquoi certains le refusèrent-ils ? Choisis tout ce que le texte appuie.',
          en: 'How does the lesson describe Mu‘āwiya’s state, and why did some reject it? Choose everything the text supports.',
        },
        options: [
          {
            id: 'not-shura',
            isRelevant: true,
            label: { ar: 'لم تقم على شورى كبار الصحابة والمسلمين', fr: 'Il ne reposait pas sur la concertation des grands Compagnons et des musulmans', en: 'It was not built on the counsel of senior Companions and Muslims' },
            explanation: {
              ar: 'صحيح، هذا نصّ الدرس في وصف سبب رفض البعض لدولة معاوية.',
              fr: 'Exact, c’est le texte même de la leçon pour expliquer le refus de certains.',
              en: 'Correct — this is exactly what the lesson states as the reason some rejected Mu‘āwiya’s state.',
            },
          },
          {
            id: 'hereditary',
            isRelevant: true,
            label: { ar: 'أصبح الحكم يُورَّث داخل أسرة معاوية', fr: 'Le pouvoir se transmit désormais au sein de la famille de Mu‘āwiya', en: 'Rule now passed down within Mu‘āwiya’s family' },
            explanation: {
              ar: 'صحيح، أبقى معاوية الحكم لأسرته، وهذا ما ميّز الدولة الأمويّة عن الخلافة الراشدة.',
              fr: 'Exact, Mu‘āwiya garda le pouvoir pour sa famille, ce qui distingua l’État omeyyade du califat bien guidé.',
              en: 'Correct — Mu‘āwiya kept rule within his family, which distinguished the Umayyad state from the rightly-guided caliphate.',
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
          text: { ar: 'بايعت المحكّمة عبد الله بن وهب الراسبيّ إمامًا لها.', fr: 'Les Muḥakkima prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī comme imam.', en: 'Al-Muḥakkima pledged allegiance to ‘Abdullāh ibn Wahb ar-Rāsibī as their imam.' },
          answer: true,
          explanation: { ar: 'صحيح، هذا نصّ الدرس.', fr: 'Vrai, c’est le texte même de la leçon.', en: 'True — this is exactly what the lesson states.' },
        },
        {
          id: 'b2',
          text: { ar: 'باغت عليٌّ المحكّمة بنفسه دون أيّ تحريض.', fr: '‘Alī surprit les Muḥakkima de lui-même, sans aucune incitation.', en: '‘Alī ambushed al-Muḥakkima entirely on his own, without any incitement.' },
          answer: false,
          explanation: { ar: 'خطأ، تدخّل رجال معاوية المتخفّون في جيشه وألحّوا عليه حتى سار لحربهم.', fr: 'Faux, des hommes de Mu‘āwiya infiltrés dans son armée insistèrent jusqu’à ce qu’il marche contre eux.', en: 'False — men of Mu‘āwiya disguised within his army pressed him until he marched against them.' },
        },
        {
          id: 'b3',
          text: { ar: 'قُتل عليّ ومعاوية وعمرو بن العاص جميعًا في المؤامرة نفسها.', fr: '‘Alī, Mu‘āwiya et ‘Amr ibn al-‘Āṣ furent tous tués dans le même complot.', en: '‘Alī, Mu‘āwiya, and ‘Amr ibn al-‘Āṣ were all killed in the same plot.' },
          answer: false,
          explanation: { ar: 'خطأ، اتُّفق على قتل الثلاثة لكن لم يُقتَل منهم إلّا عليّ.', fr: 'Faux, l’accord visait les trois, mais seul ‘Alī fut tué.', en: 'False — the plot targeted all three, but only ‘Alī was killed.' },
        },
        {
          id: 'b4',
          text: { ar: 'اشترط الحسن أن تعود الإمامة إلى المسلمين بعد وفاة معاوية.', fr: 'Al-Ḥasan posa comme condition que l’imamat revienne aux musulmans après la mort de Mu‘āwiya.', en: 'Al-Ḥasan set the condition that the imamate return to the Muslims after Mu‘āwiya’s death.' },
          answer: true,
          explanation: { ar: 'صحيح، وقَبِل الطرفان بهذا الشرط.', fr: 'Vrai, et les deux parties acceptèrent cette condition.', en: 'True — and both sides accepted this condition.' },
        },
        {
          id: 'b5',
          text: { ar: 'توقّف الأمويّون عن ملاحقة آل بيت عليّ والمحكّمة بعد تسلّم معاوية الحكم.', fr: 'Les Omeyyades cessèrent de poursuivre la famille de ‘Alī et les Muḥakkima après l’arrivée de Mu‘āwiya au pouvoir.', en: 'The Umayyads stopped pursuing ‘Alī’s household and al-Muḥakkima once Mu‘āwiya took power.' },
          answer: false,
          explanation: { ar: 'خطأ، عمد الأمويّون إلى القضاء على الحسن وآل بيت عليّ وشيعتهم والمحكّمة وأهل النهروان ومن هو على رأيهم.', fr: 'Faux, les Omeyyades s’employèrent à éliminer al-Ḥasan, la famille de ‘Alī, leurs partisans, les Muḥakkima et les gens de Nahrawān.', en: 'False — the Umayyads set out to eliminate al-Ḥasan, ‘Alī’s household, their partisans, al-Muḥakkima, and the people of Nahrawān.' },
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
          question: { ar: 'إلى أين اتّجهت المحكّمة بعد رفضها التحكيم؟', fr: 'Où les Muḥakkima se dirigèrent-ils après avoir refusé l’arbitrage ?', en: 'Where did al-Muḥakkima head after rejecting the arbitration?' },
          options: [
            { id: 'a', label: { ar: 'إلى منطقة النهروان', fr: 'Vers la région de Nahrawān', en: 'To the Nahrawān area' } },
            { id: 'b', label: { ar: 'إلى دمشق', fr: 'Vers Damas', en: 'To Damascus' } },
            { id: 'c', label: { ar: 'إلى مكّة', fr: 'Vers La Mecque', en: 'To Makkah' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'اتّجهت المحكّمة من حروراء إلى منطقة النهروان، حيث بايعوا عبد الله بن وهب الراسبيّ.',
            fr: 'Les Muḥakkima se dirigèrent de Ḥarūrā’ vers la région de Nahrawān, où ils prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī.',
            en: 'Al-Muḥakkima headed from Ḥarūrā’ to the Nahrawān area, where they pledged allegiance to ‘Abdullāh ibn Wahb ar-Rāsibī.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'طُعن عليّ بن أبي طالب عند باب المسجد.', fr: '‘Alī ibn Abī Ṭālib fut poignardé à la porte de la mosquée.', en: '‘Alī ibn Abī Ṭālib was stabbed at the mosque door.' },
          answer: true,
          explanation: {
            ar: 'صحيح، في صبح 17 رمضان 40هـ.',
            fr: 'Vrai, au matin du 17 Ramaḍān 40 H.',
            en: 'True — on the morning of 17 Ramaḍān 40 AH.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ شخصيّة بما جرى لها في المؤامرة', fr: 'Relie chaque personnage à ce qui lui arriva lors du complot', en: 'Match each person to what happened to them in the plot' },
          pairs: [
            { id: 'p1', left: { ar: 'عليّ بن أبي طالب', fr: '‘Alī ibn Abī Ṭālib', en: '‘Alī ibn Abī Ṭālib' }, right: { ar: 'طُعن عند باب المسجد ومات', fr: 'Poignardé à la porte de la mosquée, il mourut', en: 'Stabbed at the mosque door, and died' } },
            { id: 'p2', left: { ar: 'معاوية', fr: 'Mu‘āwiya', en: 'Mu‘āwiya' }, right: { ar: 'ضُرب في أَلْيَتِه ونجا', fr: 'Blessé au postérieur, il survécut', en: 'Wounded in the buttock, and survived' } },
            { id: 'p3', left: { ar: 'عمرو بن العاص', fr: '‘Amr ibn al-‘Āṣ', en: '‘Amr ibn al-‘Āṣ' }, right: { ar: 'لم يخرج إلى المسجد فنجا', fr: 'Ne sortit pas vers la mosquée, et survécut', en: 'Did not go out to the mosque, and survived' } },
          ],
          explanation: {
            ar: 'اتُّفق على قتل الثلاثة في وقتٍ واحد، لكن لم يُقتَل منهم إلّا عليّ.',
            fr: 'L’accord visait les trois en même temps, mais seul ‘Alī fut tué.',
            en: 'The plot targeted all three at the same time, but only ‘Alī was killed.',
          },
        },
        {
          id: 'q4',
          type: 'ordering',
          question: { ar: 'رتّب هذه المحطّات بحسب ورودها في الدرس', fr: 'Ordonne ces étapes selon leur déroulement dans la leçon', en: 'Order these milestones as they occurred in the lesson' },
          items: [
            { id: 'o1', label: { ar: 'مبايعة المحكّمة لعبد الله بن وهب الراسبيّ', fr: 'L’allégeance des Muḥakkima à ‘Abdullāh ibn Wahb ar-Rāsibī', en: 'Al-Muḥakkima’s pledge to ‘Abdullāh ibn Wahb ar-Rāsibī' } },
            { id: 'o2', label: { ar: 'معركة النهروان', fr: 'La bataille de Nahrawān', en: 'The Battle of Nahrawān' } },
            { id: 'o3', label: { ar: 'مقتل عليّ بن أبي طالب', fr: 'L’assassinat de ‘Alī ibn Abī Ṭālib', en: 'The killing of ‘Alī ibn Abī Ṭālib' } },
            { id: 'o4', label: { ar: 'تنازل الحسن عن الإمامة لمعاوية', fr: 'La renonciation d’al-Ḥasan à l’imamat en faveur de Mu‘āwiya', en: 'al-Ḥasan’s renunciation of the imamate to Mu‘āwiya' } },
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
            en: 'Correct — this is exactly what the lesson states: the days without a single leadership were days of chaos, exploited by instigators to push ‘Alī into fighting al-Muḥakkima.',
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
            en: 'The lesson does not say this — even Mu‘āwiya, despite his military expansion, needed al-Ḥasan’s renunciation to settle the matter, not force alone.',
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
            en: 'On the contrary — al-Ḥasan preferred to give up the imamate itself rather than let Muslim blood be shed.',
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
            en: 'Al-Ḥasan preferred to send word to Mu‘āwiya to stop the bloodshed, giving up the imamate to spare it.',
          },
        },
        {
          id: 'unity',
          value: { ar: 'وحدة الصفّ', fr: 'L’unité des rangs', en: 'Unity of ranks' },
          evidence: {
            ar: 'خيّرت المحكّمةُ عليًّا أن يدخل في طاعة الخليفة المبايَع إن أراد وحدة الصفّ.',
            fr: 'Les Muḥakkima proposèrent à ‘Alī d’entrer dans l’obéissance à l’imam élu, s’il voulait l’unité des rangs.',
            en: 'Al-Muḥakkima gave ‘Alī the choice to obey the pledged imam, if he wanted unity of ranks.',
          },
        },
        {
          id: 'patience-under-wrong',
          value: { ar: 'الصبر عند الظلم', fr: 'La patience face à l’injustice', en: 'Patience under injustice' },
          evidence: {
            ar: 'كظم بعضهم غيظهم ولم يردّوا بالسيف كما يُفعل بهم، واشتغلوا بالتعلّم والتفقّه في الدين.',
            fr: 'Certains continrent leur colère sans répondre par l’épée, et se consacrèrent à l’étude de la religion.',
            en: 'Some suppressed their anger and did not respond with the sword, devoting themselves instead to learning the religion.',
          },
        },
      ],
    },

    // 12 — What comes next (slide 7: أهمّ نقاط الدروس القادمة في الفصل الثاني)
    {
      kind: 'reading',
      id: 'coming-next',
      title: {
        ar: 'أهمّ نقاط الدروس القادمة في الفصل الثاني',
        fr: 'Les grands thèmes des prochaines leçons du second semestre',
        en: 'Key points of the coming lessons in the second term',
      },
      intro: {
        ar: 'من خلال الدروس القادمة، سنتطرّق إلى النقاط التالية:',
        fr: 'Dans les prochaines leçons, nous aborderons les points suivants :',
        en: 'In the coming lessons, we will cover the following points:',
      },
      paragraphs: [
        {
          id: 'p1',
          text: {
            ar: 'نشأة المذهب وإمامه الحقيقي؛ حركات الإباضيّة وأئمّته بالمشرق؛ انتشار المذهب؛ محاولات الإباضيّة لإقامة الإمامة بالمغرب؛ الدولة الرستميّة وأئمّتها؛ حالة الإباضيّة بعد انقراض الإمامة؛ نظام العزّابة وسير الحلقة.',
            fr: 'La naissance de l’école et son véritable imam ; les mouvements ibadites et leurs imams en Orient ; la diffusion de l’école ; les tentatives ibadites d’établir l’imamat au Maghreb ; l’État rustamide et ses imams ; la situation des Ibadites après la fin de l’imamat ; le système des ‘Azzāba et le fonctionnement de la ḥalqa.',
            en: 'The birth of the school and its true imam; the Ibadi movements and their imams in the East; the spread of the school; the Ibadi attempts to establish the imamate in the Maghreb; the Rustamid state and its imams; the state of the Ibadis after the imamate ended; the ‘Azzāba system and the workings of the ḥalqa.',
          },
        },
      ],
    },

    // 13 — Summary (ألخّص)
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'بعد خديعة التحكيم افترق المسلمون، واتّجهت المحكّمة إلى النهروان حيث باغتهم عليّ بتحريضٍ من رجال معاوية، ثمّ ضعُف جيشه وتوسّع معاوية حتى استُشهد عليّ، فتنازل الحسن عن الإمامة حقنًا للدماء، وتحوّلت الخلافة الراشدة إلى مُلكٍ أمويّ وراثيّ طارد المحكّمة وآل بيت عليّ.',
        fr: 'Après la ruse de l’arbitrage, les musulmans se divisèrent ; les Muḥakkima se dirigèrent vers Nahrawān où ‘Alī, poussé par les hommes de Mu‘āwiya, les surprit. Son armée s’affaiblit tandis que Mu‘āwiya s’étendait, jusqu’à l’assassinat de ‘Alī. Al-Ḥasan renonça alors à l’imamat pour épargner le sang, et le califat bien guidé se mua en un pouvoir héréditaire omeyyade qui pourchassa les Muḥakkima et la famille de ‘Alī.',
        en: 'After the ruse of the arbitration, the Muslims divided; al-Muḥakkima headed to Nahrawān, where ‘Alī, pushed by Mu‘āwiya’s men, ambushed them. His army weakened as Mu‘āwiya expanded, until ‘Alī was assassinated. Al-Ḥasan then gave up the imamate to spare bloodshed, and the rightly-guided caliphate turned into hereditary Umayyad rule that pursued al-Muḥakkima and ‘Alī’s household.',
      },
      learned: [
        {
          ar: 'بعد خديعة التحكيم، اتّجهت المحكّمة إلى النهروان وبايعت عبد الله بن وهب الراسبيّ إمامًا، إذ لم يَعُد عليّ خليفةً في نظرها.',
          fr: 'Après la ruse de l’arbitrage, les Muḥakkima se dirigèrent vers Nahrawān et prêtèrent allégeance à ‘Abdullāh ibn Wahb ar-Rāsibī, ‘Alī n’étant plus calife à leurs yeux.',
          en: 'After the ruse of the arbitration, al-Muḥakkima headed to Nahrawān and pledged allegiance to ‘Abdullāh ibn Wahb ar-Rāsibī, as ‘Alī was no longer caliph in their eyes.',
        },
        {
          ar: 'دفع رجال معاوية المتخفّون عليًّا إلى مباغتة المحكّمة عند النهروان، فقُتل منهم الآلاف وتفرّق جيش عليّ بعدها.',
          fr: 'Les hommes de Mu‘āwiya, infiltrés, poussèrent ‘Alī à surprendre les Muḥakkima à Nahrawān ; des milliers furent tués, et l’armée de ‘Alī se dispersa ensuite.',
          en: 'Mu‘āwiya’s disguised men pushed ‘Alī into ambushing al-Muḥakkima at Nahrawān; thousands were killed, and ‘Alī’s army then scattered.',
        },
        {
          ar: 'اتُّفق على قتل عليّ ومعاوية وعمرو بن العاص في وقتٍ واحد، لكن لم يُقتَل منهم إلّا عليّ، صباح 17 رمضان 40هـ.',
          fr: 'Un complot visait ‘Alī, Mu‘āwiya et ‘Amr ibn al-‘Āṣ en même temps, mais seul ‘Alī fut tué, au matin du 17 Ramaḍān 40 H.',
          en: 'A plot targeted ‘Alī, Mu‘āwiya, and ‘Amr ibn al-‘Āṣ at the same time, but only ‘Alī was killed, on the morning of 17 Ramaḍān 40 AH.',
        },
        {
          ar: 'تنازل الحسن عن الإمامة لمعاوية حقنًا لدماء المسلمين، على شرط عودتها إليهم بعد وفاة معاوية، فتحوّلت الخلافة الراشدة إلى دولةٍ أمويّة وراثيّة طاردت المحكّمة وآل بيت عليّ.',
          fr: 'Al-Ḥasan renonça à l’imamat en faveur de Mu‘āwiya pour épargner le sang des musulmans, à condition qu’il leur revienne après la mort de Mu‘āwiya ; le califat bien guidé se mua ainsi en un État omeyyade héréditaire qui pourchassa les Muḥakkima et la famille de ‘Alī.',
          en: 'Al-Ḥasan gave up the imamate to Mu‘āwiya to spare Muslim blood, on condition that it return to them after Mu‘āwiya’s death; the rightly-guided caliphate thus turned into a hereditary Umayyad state that pursued al-Muḥakkima and ‘Alī’s household.',
        },
      ],
    },
  ],
}
