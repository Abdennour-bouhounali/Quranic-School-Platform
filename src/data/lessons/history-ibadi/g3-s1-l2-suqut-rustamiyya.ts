import type { Lesson } from '../../types'

// Source: Other ressources/Ibadite_History_S5.pdf, pages 14–20 (Lesson 29 «سقوط الدولة الرستمية», slides 1–7):
//   slide 2  — الإشكالية: اختباء أئمة الإباضية (the slide's «فاطمة» is read as the Fatimids/Ubaydids), سقوط الدولة
//              بعد حوالي 136 سنة، لم يكلّف العبيديين جهدًا كبيرًا + map «الدولة الرستمية في عهدها الأخير»
//              (Mānū near Qābis; «في إيكجان نشأت وترعرعت الدعوة الشيعية العبيدية»).
//   slide 3/4 — واقعة مانو (283هـ): القوة العسكرية مستمدّة من نفوسة، قُتل الكثير ومنهم 400 عالم، الجيش الأغلبي
//              خرج لقتال «ابن طولون» في مصر (in 283 AH Egypt was ruled by Ibn Ṭūlūn's descendants, so we say
//              "the Tulunids"), نفوسة لم تُطِع ولاتها، قبائل تاهرت لم تكن على وفاق.
//   slide 5/6 — مقتل الإمام أبي حاتم يوسف: الفساد في عهده، العمّ يعقوب بن أفلح (4 سنوات)، الأخ اليقظان،
//              قتله أبناء اليقظان بن أبي اليقظان، تولّي اليقظان الحكم سنة 294هـ، عامان في خوف وقلق.
//   slide 7  — العبيديون في تاهرت: دوسر وأبو عبد الله الشيعي، الدخول دون مقاومة، قتل العائلة الرستمية إلا من فرّ،
//              إحراق «مكتبة المعصومة»، النهب، الفرار إلى وارجلان والتخفّي فيها، أهل الاستقامة «كاتمةً أمرها»،
//              مواصلة الجيش العبيدي إسقاط دول المغرب وأئمتها.
// Narrative wording, activity prompts and distractors are editorial; facts come from the slides above.

const IMG = '/images/lessons/suqut-rustamiyya'

export const suqutRustamiyya: Lesson = {
  id: 'history-ibadi-g3-s1-l2',
  gradeId: 'history-ibadi-g3',
  moduleId: 'history-ibadi-g3',
  semesterId: 'history-ibadi-g3-s1',
  order: 2,
  status: 'published',
  estimatedMinutes: 35,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'تاهرت تحترق عند الغسق، جيشٌ يقترب من أسوار المدينة وسحبُ دخانٍ تتصاعد فوق المدينة',
    fr: 'Tāhert en flammes au crépuscule, une armée approchant des remparts, des volutes de fumée au-dessus de la ville',
    en: 'Tāhert burning at dusk, an army approaching the city walls, smoke rising above the city',
  },
  title: {
    ar: 'سقوط الدولة الرستمية',
    fr: 'La chute de l’État rustamide',
    en: 'The Fall of the Rustamid State',
  },
  description: {
    ar: 'بعد نحو 136 سنة من النضال والاستقرار، سقطت تاهرت. اكتشف كيف مهّدت هزيمة نفوسة والصراع العائلي على السلطة الطريق أمام العبيديين ليدخلوا العاصمة الرستمية دون مقاومة.',
    fr: 'Après environ 136 années de lutte et de stabilité, Tāhert tomba. Découvre comment la défaite de Nafūsa et la lutte familiale pour le pouvoir ouvrirent la voie aux Ubaydides pour entrer dans la capitale rustamide sans résistance.',
    en: 'After about 136 years of struggle and stability, Tāhert fell. Discover how the defeat of Nafusa and the family struggle for power opened the way for the Ubaydids to enter the Rustamid capital without resistance.',
  },

  sections: [
    // 01 — Hero: the lesson's own problem statement (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'تاهرت تحترق عند الغسق، جيشٌ يقترب من أسوار المدينة وسحبُ دخانٍ تتصاعد فوق المدينة',
        fr: 'Tāhert en flammes au crépuscule, une armée approchant des remparts, des volutes de fumée au-dessus de la ville',
        en: 'Tāhert burning at dusk, an army approaching the city walls, smoke rising above the city',
      },
      title: {
        ar: 'إشكالية الدرس',
        fr: 'La question du cours',
        en: 'The lesson’s question',
      },
      question: {
        ar: 'كيف سقطت دولةٌ صمدت نحو 136 سنة دون أن يكلّف ذلك العبيديين جهدًا كبيرًا؟',
        fr: 'Comment un État qui tint bon pendant environ 136 ans put-il tomber sans grand effort de la part des Ubaydides ?',
        en: 'How did a state that stood for about 136 years fall without costing the Ubaydids much effort?',
      },
      intro: {
        ar: 'اختبأ أئمة الإباضية فرارًا من الفاطميين (العبيديين)، وسقطت الدولة الرستمية بعد حوالي 136 سنة من النضال والاستقرار في المغرب، ولم يكلّف العبيديون جهدًا كبيرًا للدخول إلى تاهرت فاتحين. فما العوامل التي مهّدت لهذا السقوط؟',
        fr: 'Les imams ibadites se cachèrent pour fuir les Fatimides (Ubaydides), et l’État rustamide tomba après environ 136 années de lutte et de stabilité au Maghreb ; les Ubaydides n’eurent pas besoin d’un grand effort pour entrer à Tāhert en conquérants. Quels facteurs préparèrent cette chute ?',
        en: 'The Ibadi imams went into hiding, fleeing the Fatimids (Ubaydids), and the Rustamid state fell after about 136 years of struggle and stability in the Maghreb; the Ubaydids did not need much effort to enter Tāhert as conquerors. What factors paved the way for this fall?',
      },
    },

    // 02 — Mission map
    {
      kind: 'missions',
      id: 'missions',
      title: {
        ar: 'ثلاث محطّات نحو السقوط',
        fr: 'Trois étapes vers la chute',
        en: 'Three stops on the road to collapse',
      },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنطلق إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'كيف أضعفت واقعة مانو الدولة الرستمية؟', fr: 'Comment la bataille de Mānū affaiblit-elle l’État rustamide ?', en: 'How did the Battle of Mano weaken the Rustamid state?' },
          target: 'reading-battle-of-mano',
          teaser: { ar: 'جيشٌ عابر، قبائل تعترضه، ودرعٌ عسكريّ ينهار.', fr: 'Une armée de passage, des tribus qui l’interceptent, un bouclier militaire qui s’effondre.', en: 'A passing army, tribes that intercept it, a military shield collapsing.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف قُتل الإمام أبو حاتم على يد أسرته؟', fr: 'Comment l’imam Abū Ḥātim fut-il tué par sa propre famille ?', en: 'How was Imam Abu Hatim killed by his own family?' },
          target: 'reading-family-feud',
          teaser: { ar: 'عمٌّ منافس، وأخٌ معادٍ، وأبناءٌ يطعنون.', fr: 'Un oncle rival, un frère hostile, des neveux qui frappent.', en: 'A rival uncle, a hostile brother, nephews who strike.' },
        },
        {
          id: 'm3',
          question: { ar: 'كيف دخل العبيديون تاهرت دون مقاومة؟', fr: 'Comment les Ubaydides entrèrent-ils à Tāhert sans résistance ?', en: 'How did the Ubaydids enter Tāhert without resistance?' },
          target: 'reading-fall-of-tahert',
          teaser: { ar: 'ابنةٌ تطلب الثأر، وداعيةٌ يجمع الجيوش.', fr: 'Une fille qui demande vengeance, un prédicateur qui rassemble des armées.', en: 'A daughter seeking vengeance, a preacher gathering armies.' },
        },
      ],
    },

    // 03 — Battle of Mano: narrative reading passage (slides 3–4)
    {
      kind: 'reading',
      id: 'reading-battle-of-mano',
      title: {
        ar: 'اقرأ: واقعة مانو',
        fr: 'Lis : la bataille de Mānū',
        en: 'Read: the Battle of Mano',
      },
      intro: {
        ar: 'اقرأ القصّة كاملةً، ثمّ أعِد بناء أحداثها في اللعبة التي تليها.',
        fr: 'Lis l’histoire en entier, puis reconstitue ses événements dans le jeu qui suit.',
        en: 'Read the full story, then rebuild its events in the game that follows.',
      },
      image: `${IMG}/battle-of-mano.png`,
      imageAlt: {
        ar: 'فرسانٌ مسلّحون بالرماح يندفعون على منحدرٍ جبليّ تحت غبارٍ كثيف',
        fr: 'Des cavaliers armés de lances dévalant une pente montagneuse sous une poussière épaisse',
        en: 'Horsemen armed with spears charging down a mountain slope under thick dust',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'جيشٌ في طريقه إلى مصر',
            fr: 'Une armée en route vers l’Égypte',
            en: 'An army on its way to Egypt',
          },
          text: {
            ar: 'في سنة 283هـ، خرج الجيش الأغلبيّ من إفريقية قاصدًا مصر، يريد الاشتباك مع الطولونيين (أبناء ابن طولون) هناك. وكان طريقه يمرّ عبر أراضي نفوسة وقبائل أخرى، قرب موضعٍ يُدعى مانو بجوار قابس.',
            fr: 'En l’an 283 de l’Hégire, l’armée aghlabide partit d’Ifrīqiya en direction de l’Égypte, pour y affronter les Toulounides (les descendants d’Ibn Ṭūlūn). Sa route traversait les terres de Nafūsa et d’autres tribus, près d’un lieu appelé Mānū, à côté de Qābis.',
            en: 'In the year 283 AH, the Aghlabid army set out from Ifriqiya heading for Egypt, to fight the Tulunids (the descendants of Ibn Tulun) there. Its route crossed the lands of Nafusa and other tribes, near a place called Mano, close to Gabès.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'قرارٌ لم يُطِع النصيحة',
            fr: 'Une décision qui ignora le conseil',
            en: 'A decision that ignored the advice',
          },
          text: {
            ar: 'رأى بعض قبائل نفوسة جيشًا أجنبيًّا يعبر قريبًا من أراضيهم، فاجتمعت كلمتهم على اعتراضه، حتى لا يمرّ عبر ديارهم. وكان حكّام نفوسة قد نصحوهم بألّا يتعرّضوا لهذا الجيش الكبير، فالمعركة معه خطرٌ لا يُستهان به. لكنّ نفوسة لم تُطِع هذه النصيحة. اجتمعت قوّةٌ منها ومن قبائل أخرى، وخرجت لتقف في وجه الجيش الأغلبيّ، واثقةً من قدرتها على منعه من المرور.',
            fr: 'Certaines tribus de Nafūsa virent une armée étrangère traverser non loin de leurs terres, et s’accordèrent à l’intercepter, pour qu’elle ne passe pas par leurs contrées. Or les dirigeants de Nafūsa leur avaient conseillé de ne pas s’en prendre à cette grande armée, car l’affronter était un danger qu’il ne fallait pas sous-estimer. Mais Nafūsa n’obéit pas à ce conseil. Une force réunissant des hommes de Nafūsa et d’autres tribus se leva pour barrer la route à l’armée aghlabide, confiante en sa capacité à l’empêcher de passer.',
            en: 'Some of the Nafusa tribes saw a foreign army crossing near their lands, and agreed together to intercept it, so that it would not pass through their territory. Yet the rulers of Nafusa had advised them not to confront this large army, for fighting it was a danger not to be underestimated. But Nafusa did not heed this advice. A force gathering men from Nafusa and other tribes rose up to block the Aghlabid army’s path, confident in its ability to stop it from passing.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'المعركة والخسارة',
            fr: 'La bataille et la défaite',
            en: 'The battle and the defeat',
          },
          text: {
            ar: 'اصطدم الجيشان، ونشبت معركةٌ كبيرة. لم تكن النتيجة في صالح نفوسة؛ فقد خسرت المعركة خسارةً فادحة، وقُتل منها عددٌ كبير، من بينهم أربعمائة عالِمٍ من علمائها. كانت هذه الخسارة أثقل من أن تُقاس بعدد القتلى وحده، لأنّ نفوسة لم تكن مجرّد قبيلةٍ من قبائل المغرب، بل كانت العمود الذي تستند إليه الدولة الرستمية في دفاعها عن نفسها.',
            fr: 'Les deux armées s’affrontèrent, et une grande bataille éclata. L’issue ne fut pas favorable à Nafūsa : elle subit une lourde défaite, et un grand nombre des siens furent tués, dont quatre cents de ses savants. Cette perte pesait plus lourd que le seul nombre des morts, car Nafūsa n’était pas une simple tribu parmi celles du Maghreb, mais le pilier sur lequel s’appuyait l’État rustamide pour assurer sa propre défense.',
            en: 'The two armies clashed, and a great battle broke out. The outcome did not favor Nafusa: it suffered a heavy defeat, and a large number of its people were killed, including four hundred of its scholars. This loss weighed more heavily than the death toll alone, because Nafusa was not merely one tribe among those of the Maghreb, but the pillar on which the Rustamid state leaned for its own defense.',
          },
        },
        {
          id: 'p4',
          heading: {
            ar: 'دولةٌ بلا درعها',
            fr: 'Un État privé de son bouclier',
            en: 'A state without its shield',
          },
          text: {
            ar: 'كانت قوّة الدولة الرستمية العسكرية والدفاعية مستمدّةً أساسًا من نفوسة. فحين ضعفت نفوسة، ضعفت معها قدرة الدولة على حماية نفسها. وزاد الأمر سوءًا أنّ قبائل تاهرت نفسها لم تكن على وفاق، وكان اجتماعها على كلمةٍ واحدة أمرًا صعبًا. هكذا فقدت الدولة الرستمية درعها الأقوى.',
            fr: 'La force militaire et défensive de l’État rustamide était tirée essentiellement de Nafūsa. Aussi, quand Nafūsa s’affaiblit, la capacité de l’État à se protéger s’affaiblit avec elle. Pire encore, les tribus de Tāhert elles-mêmes n’étaient pas en accord, et leur réunion autour d’une seule parole était chose difficile. Ainsi, l’État rustamide perdit son bouclier le plus solide.',
            en: 'The Rustamid state’s military and defensive strength was drawn mainly from Nafusa. So when Nafusa was weakened, the state’s ability to protect itself was weakened with it. Matters grew worse still, as the tribes of Tāhert themselves were not in agreement, and uniting them around one word was difficult. And so the Rustamid state lost its strongest shield.',
          },
        },
      ],
    },

    // 04 — Battle of Mano: domino chain, testing the reading (slides 3–4)
    {
      kind: 'chain',
      id: 'battle-of-mano-chain',
      title: {
        ar: 'واقعة مانو (283هـ)',
        fr: 'La bataille de Mānū (283 H)',
        en: 'The Battle of Mano (283 AH)',
      },
      intro: {
        ar: 'اختر ما حدث في كلّ حلقة لتتابع كيف أضعفت هذه المعركة الدولة الرستمية.',
        fr: 'Choisis ce qui se passa à chaque maillon pour suivre comment cette bataille affaiblit l’État rustamide.',
        en: 'Choose what happened at each link to follow how this battle weakened the Rustamid state.',
      },
      image: `${IMG}/battle-of-mano.png`,
      imageAlt: {
        ar: 'فرسانٌ مسلّحون بالرماح يندفعون على منحدرٍ جبليّ تحت غبارٍ كثيف',
        fr: 'Des cavaliers armés de lances dévalant une pente montagneuse sous une poussière épaisse',
        en: 'Horsemen armed with spears charging down a mountain slope under thick dust',
      },
      start: {
        ar: 'في سنة 283هـ، خرج الجيش الأغلبيّ ليقاتل الطولونيين في مصر.',
        fr: 'En l’an 283 H, l’armée aghlabide partit combattre les Toulounides en Égypte.',
        en: 'In the year 283 AH, the Aghlabid army set out to fight the Tulunids in Egypt.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'ماذا فعلت نفوسة وقبائل أخرى حين عَلِمت بمرور الجيش الأغلبي؟', fr: 'Que firent Nafūsa et d’autres tribus en apprenant le passage de l’armée aghlabide ?', en: 'What did Nafusa and other tribes do upon learning of the Aghlabid army’s passage?' },
          correct: {
            ar: 'اعترضته قوّةٌ مجتمعة من نفوسة وقبائل أخرى لتمنعه من المرور عبر أراضيها.',
            fr: 'Une force conjointe de Nafūsa et d’autres tribus l’intercepta pour l’empêcher de traverser leurs terres.',
            en: 'A combined force from Nafusa and other tribes intercepted it to prevent it from passing through their lands.',
          },
          distractors: [
            {
              label: { ar: 'فتحت له الطريق وزوّدته بالمؤن', fr: 'Elles lui ouvrirent la route et le ravitaillèrent', en: 'They opened the road for it and supplied it' },
              hint: { ar: 'الدرس يذكر اعتراضًا لمنع المرور، لا مساعدة.', fr: 'La leçon évoque une interception pour empêcher le passage, non une aide.', en: 'The lesson describes an interception to prevent passage, not help.' },
            },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'هل أطاعت نفوسة نصيحة حكّامها قبل المعركة؟', fr: 'Nafūsa suivit-elle le conseil de ses dirigeants avant la bataille ?', en: 'Did Nafusa follow its rulers’ advice before the battle?' },
          correct: {
            ar: 'لا، لم يُطيعوا نصيحة حكّامهم بعدم التعرّض للجيش الأغلبي.',
            fr: 'Non, ils n’obéirent pas au conseil de leurs dirigeants de ne pas s’opposer à l’armée aghlabide.',
            en: 'No, they did not obey the advice of their rulers not to confront the Aghlabid army.',
          },
          distractors: [
            {
              label: { ar: 'نعم، فقد أمرهم حكّامهم بالقتال', fr: 'Oui, leurs dirigeants leur avaient ordonné de combattre', en: 'Yes, their rulers had ordered them to fight' },
              hint: { ar: 'الدرس يذكر أنّهم عصوا النصيحة ولم يُطيعوها.', fr: 'La leçon précise qu’ils désobéirent au conseil reçu.', en: 'The lesson states they disobeyed the advice given to them.' },
            },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'ماذا حدث في المعركة التي وقعت بينهما؟', fr: 'Que se passa-t-il dans la bataille qui s’ensuivit ?', en: 'What happened in the battle that followed?' },
          correct: {
            ar: 'فوقعت معركةٌ كبيرة خسرتها نفوسة، وقُتل منهم الكثير، ومنهم 400 عالِم.',
            fr: 'Une grande bataille eut lieu, que Nafūsa perdit ; beaucoup des leurs furent tués, dont 400 savants.',
            en: 'A major battle took place, which Nafusa lost; many of them were killed, including 400 scholars.',
          },
          distractors: [
            {
              label: { ar: 'انتصرت نفوسة وطردت الجيش الأغلبي', fr: 'Nafūsa triompha et repoussa l’armée aghlabide', en: 'Nafusa triumphed and drove off the Aghlabid army' },
              hint: { ar: 'الدرس يذكر خسارةً لنفوسة، لا انتصارًا.', fr: 'La leçon mentionne une défaite de Nafūsa, non une victoire.', en: 'The lesson states a defeat for Nafusa, not a victory.' },
            },
          ],
        },
        {
          id: 's4',
          prompt: { ar: 'لماذا كانت هذه الهزيمة خطيرة بالذات على الدولة الرستمية؟', fr: 'Pourquoi cette défaite fut-elle particulièrement grave pour l’État rustamide ?', en: 'Why was this defeat especially dangerous for the Rustamid state?' },
          correct: {
            ar: 'لأنّ قوّة الدولة الرستمية العسكرية والدفاعية كانت مستمدّةً من نفوسة.',
            fr: 'Parce que la force militaire et défensive de l’État rustamide était tirée de Nafūsa.',
            en: 'Because the Rustamid state’s military and defensive strength was derived from Nafusa.',
          },
          distractors: [
            {
              label: { ar: 'لأنّها أفقدت الدولة موانئها التجارية', fr: 'Parce qu’elle fit perdre à l’État ses ports commerciaux', en: 'Because it cost the state its trading ports' },
              hint: { ar: 'الدرس يربط خطورة الهزيمة بالقوّة العسكرية المستمدّة من نفوسة، لا بالتجارة.', fr: 'La leçon lie la gravité de la défaite à la force militaire tirée de Nafūsa, non au commerce.', en: 'The lesson ties the defeat’s danger to military strength drawn from Nafusa, not trade.' },
            },
          ],
        },
      ],
      ending: {
        ar: 'وزاد الطين بِلّة أنّ قبائل تاهرت لم تكن على وفاق، وقد صَعُب اجتماعها — فبقيت الدولة الرستمية بلا درعها الأقوى.',
        fr: 'Pire encore, les tribus de Tāhert n’étaient pas en accord, et leur union était difficile — l’État rustamide resta ainsi sans son bouclier le plus solide.',
        en: 'To make matters worse, the tribes of Tāhert were not in agreement, and uniting them was difficult — the Rustamid state was left without its strongest shield.',
      },
    },

    // 04 — Family feud: narrative reading passage (slides 5–6)
    {
      kind: 'reading',
      id: 'reading-family-feud',
      title: {
        ar: 'اقرأ: الصراع على السلطة',
        fr: 'Lis : la lutte pour le pouvoir',
        en: 'Read: the power struggle',
      },
      intro: {
        ar: 'اقرأ هذه القصّة، ثمّ تدرّب على تذكّر شخصياتها في الأنشطة التالية.',
        fr: 'Lis cette histoire, puis entraîne-toi à mémoriser ses personnages dans les activités suivantes.',
        en: 'Read this story, then practise recalling its characters in the activities that follow.',
      },
      image: `${IMG}/family-feud.png`,
      imageAlt: {
        ar: 'فناءُ قصرٍ في وضح النهار تقف فيه شخوصٌ ملثّمة متباعدة، توحي بصراعٍ خفيّ',
        fr: 'La cour d’un palais en plein jour, où se tiennent à distance des silhouettes encapuchonnées, évoquant un conflit caché',
        en: 'A palace courtyard in daylight where hooded figures stand apart, suggesting a hidden conflict',
      },
      paragraphs: [
        {
          id: 'ff-p1',
          heading: {
            ar: 'الإمام الذي أصلح ما استطاع',
            fr: 'L’imam qui réforma autant qu’il put',
            en: 'The imam who reformed as much as he could',
          },
          text: {
            ar: 'تولّى أبو حاتم يوسف الإمامة، فاستطاع أن يقضي على كثيرٍ من الفساد الذي أصاب البلاد والدولة في عهده. وكان ذلك نجاحًا ملحوظًا. إلّا أنّه لم يُنْهِ فساد بعض أفراد أسرته وأطماعهم.',
            fr: 'Abū Ḥātim Yūsuf prit l’imamat et parvint à éliminer une grande partie de la corruption qui avait frappé le pays et l’État sous son règne. Ce fut une réussite notable. Mais il ne mit pas fin à la corruption ni aux ambitions de certains membres de sa propre famille.',
            en: 'Abu Hatim Yusuf took the imamate and managed to eliminate much of the corruption that had struck the country and the state during his reign. This was a notable success. Yet he did not put an end to the corruption and ambitions of some members of his own family.',
          },
        },
        {
          id: 'ff-p2',
          heading: {
            ar: 'عمٌّ ينافس، وحكمٌ مزدوج',
            fr: 'Un oncle rival et un pouvoir partagé',
            en: 'A rival uncle and divided rule',
          },
          text: {
            ar: 'نافس يعقوبُ بن أفلح، عمُّ الإمام، ابنَ أخيه على السلطة، وانتهى الأمر بأن حَكَم إلى جانبه أربع سنوات.',
            fr: 'Ya‘qūb ibn Aflaḥ, l’oncle de l’imam, rivalisa avec son neveu pour le pouvoir, et l’affaire aboutit à ce qu’il gouverne à ses côtés pendant quatre ans.',
            en: 'Ya‘qub ibn Aflah, the imam’s uncle, competed with his nephew for power, and the matter ended with him ruling alongside him for four years.',
          },
        },
        {
          id: 'ff-p3',
          heading: {
            ar: 'أخٌ يُعادي',
            fr: 'Un frère qui se retourne',
            en: 'A brother who turns against him',
          },
          text: {
            ar: 'ولم يَكَد هذا النزاع مع عمّه ينتهي، حتى عاداه أخوه اليقظان من جهةٍ أخرى. فانتقل الخلاف من العمّ إلى الأخ، واتّسع داخل الأسرة الحاكمة نفسها.',
            fr: 'À peine ce conflit avec son oncle avait-il pris fin que son frère al-Yaqẓān devint son ennemi d’un autre côté. La discorde passa ainsi de l’oncle au frère et s’étendit au sein même de la famille régnante.',
            en: 'This conflict with his uncle had barely ended when his brother Al-Yaqzan turned against him from another direction. The discord thus passed from the uncle to the brother and spread within the ruling family itself.',
          },
        },
        {
          id: 'ff-p4',
          heading: {
            ar: 'النهاية المأساوية',
            fr: 'La fin tragique',
            en: 'The tragic end',
          },
          text: {
            ar: 'في سنة 294هـ، قرّر أبناء اليقظان بن أبي اليقظان أن يضعوا حدًّا لهذا كلّه بطريقتهم. قتلوا عمّهم الإمام أبا حاتم. وتولّى اليقظان الحكم بعده. لكنّ الناس لم يُعطوه ثقتهم، وقاطعوه، ورأوا في حكمه غصبًا وانتزاعًا للسلطة بغير حقّ. مضى عامان من الحكم في خوفٍ وقلق. وكانت الدولة الرستمية قد خسرت درعها العسكريّ قبل سنواتٍ مع واقعة مانو، وها هي تفقد الآن تماسكها الداخليّ. كان الباب قد انفتح، ولم يبقَ إلّا من يدخل منه.',
            fr: 'En l’an 294 H, les fils d’al-Yaqẓān ibn Abī al-Yaqẓān décidèrent de mettre fin à tout cela à leur manière. Ils tuèrent leur oncle, l’imam Abū Ḥātim. Al-Yaqẓān prit ensuite le pouvoir. Mais les gens ne lui accordèrent pas leur confiance, le boycottèrent, et virent dans son règne une usurpation et une prise de pouvoir illégitime. Deux années de règne s’écoulèrent dans la peur et l’angoisse. L’État rustamide avait déjà perdu son bouclier militaire quelques années plus tôt avec la bataille de Mānū ; il perdait désormais sa cohésion interne. La porte était grande ouverte — il ne manquait plus que celui qui la franchirait.',
            en: 'In the year 294 AH, the sons of al-Yaqzan ibn Abi al-Yaqzan decided to put an end to all of this their own way. They killed their uncle, Imam Abu Hatim. Al-Yaqzan then took power. But the people did not give him their trust, boycotted him, and saw his rule as a seizure and an illegitimate grab for power. Two years of fearful, anxious rule passed. The Rustamid state had already lost its military shield years earlier at the Battle of Mano; it was now losing its internal cohesion. The door had swung open — all that remained was for someone to walk through it.',
          },
        },
      ],
    },

    // 05 — Family feud: memory game (slides 5–6)
    {
      kind: 'memory',
      id: 'family-feud-memory',
      title: {
        ar: 'شجرة الصراع على السلطة',
        fr: 'L’arbre du conflit pour le pouvoir',
        en: 'The tree of the power struggle',
      },
      intro: {
        ar: 'احفظ كلّ اسمٍ ودوره في هذا الصراع العائلي، ثم ستنقلب البطاقات. هل تستطيع أن تتذكّرها؟',
        fr: 'Mémorise chaque nom et son rôle dans ce conflit familial, puis les cartes se retourneront. Sauras-tu t’en souvenir ?',
        en: 'Memorize each name and its role in this family conflict, then the cards will flip. Can you remember them?',
      },
      image: `${IMG}/family-feud.png`,
      cards: [
        { id: 'abu-hatim', label: { ar: 'أبو حاتم يوسف', fr: 'Abū Ḥātim Yūsuf', en: 'Abu Hatim Yusuf' }, category: { ar: 'الإمام المقتول', fr: 'L’imam assassiné', en: 'The slain imam' } },
        { id: 'yaqub', label: { ar: 'يعقوب بن أفلح', fr: 'Ya‘qūb ibn Aflaḥ', en: 'Ya‘qub ibn Aflah' }, category: { ar: 'العمّ المنافس', fr: 'L’oncle rival', en: 'The rival uncle' } },
        { id: 'yaqzan', label: { ar: 'اليقظان', fr: 'Al-Yaqẓān', en: 'Al-Yaqzan' }, category: { ar: 'الأخ المعادي', fr: 'Le frère hostile', en: 'The hostile brother' } },
        { id: 'sons-yaqtan', label: { ar: 'أبناء اليقظان بن أبي اليقظان', fr: 'Les fils d’al-Yaqẓān ibn Abī al-Yaqẓān', en: 'The sons of al-Yaqzan ibn Abi al-Yaqzan' }, category: { ar: 'القتلة', fr: 'Les meurtriers', en: 'The killers' } },
        { id: 'four-years', label: { ar: 'أربع سنوات', fr: 'Quatre ans', en: 'Four years' }, category: { ar: 'مدّة', fr: 'Durée', en: 'Duration' } },
        { id: 'two-years', label: { ar: 'عامان', fr: 'Deux ans', en: 'Two years' }, category: { ar: 'مدّة', fr: 'Durée', en: 'Duration' } },
      ],
      rounds: [
        {
          id: 'roles',
          question: { ar: 'أين كانت بطاقتا "العمّ المنافس" و"الأخ المعادي"؟', fr: 'Où étaient les cartes « l’oncle rival » et « le frère hostile » ?', en: 'Where were the “rival uncle” and “hostile brother” cards?' },
          correctIds: ['yaqub', 'yaqzan'],
        },
        {
          id: 'durations',
          question: { ar: 'أين كانت بطاقتا المدّتين الزمنيّتين؟', fr: 'Où étaient les deux cartes de durée ?', en: 'Where were the two duration cards?' },
          correctIds: ['four-years', 'two-years'],
        },
      ],
    },

    // 05 — The assassination: dramatized chat replay (slides 5–6)
    {
      kind: 'chat',
      id: 'assassination',
      title: {
        ar: 'مقتل الإمام أبي حاتم',
        fr: 'L’assassinat de l’imam Abū Ḥātim',
        en: 'The assassination of Imam Abu Hatim',
      },
      intro: {
        ar: 'تابع كيف تدهورت الأمور داخل أسرة أبي حاتم، كأنّك تقرأ رسائل من ذلك الزمن.',
        fr: 'Suis comment la situation se dégrada au sein de la famille d’Abū Ḥātim, comme si tu lisais des messages de cette époque.',
        en: 'Follow how things deteriorated within Abu Hatim’s family, as if reading messages from that time.',
      },
      image: `${IMG}/assassination-scene.png`,
      imageAlt: {
        ar: 'رجلٌ في ممرٍّ مظلم يُمسك خنجرًا، وشخصان يتحدّثان في آخر الممرّ',
        fr: 'Un homme tenant un poignard dans un couloir sombre, tandis que deux personnes discutent au bout du couloir',
        en: 'A man holding a dagger in a dark corridor, while two people talk at the far end',
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
            ar: 'استطاع أبو حاتم يوسف أن يقضي على كثيرٍ من الفساد الذي أصاب البلاد في عهده.',
            fr: 'Abū Ḥātim Yūsuf parvint à éliminer une grande partie de la corruption qui frappait le pays sous son règne.',
            en: 'Abu Hatim Yusuf was able to eliminate much of the corruption that had afflicted the country during his rule.',
          },
        },
        {
          type: 'msg',
          id: 'but',
          who: 'narrator',
          text: {
            ar: 'إلّا أنّه لم يُنْه فساد بعض أفراد أسرته وأطماعهم.',
            fr: 'Mais il ne mit pas fin à la corruption et aux ambitions de certains membres de sa propre famille.',
            en: 'However, he failed to put an end to the corruption and ambitions of some members of his own family.',
          },
        },
        {
          type: 'reply',
          id: 'uncle-rivalry',
          who: 'historians',
          prompt: { ar: 'مَن نافس أبا حاتم على السلطة، وإلى متى؟', fr: 'Qui rivalisa avec Abū Ḥātim pour le pouvoir, et pendant combien de temps ?', en: 'Who competed with Abu Hatim for power, and for how long?' },
          options: [
            {
              id: 'right',
              correct: true,
              label: { ar: 'عمّه يعقوب بن أفلح، وحَكَم إلى جانبه أربع سنوات', fr: 'Son oncle Ya‘qūb ibn Aflaḥ, qui régna à ses côtés durant quatre ans', en: 'His uncle Ya‘qub ibn Aflah, who ruled alongside him for four years' },
              hint: { ar: 'هذا ما يذكره الدرس بالضبط.', fr: 'C’est exactement ce que rapporte la leçon.', en: 'This is exactly what the lesson states.' },
            },
            {
              id: 'wrong',
              correct: false,
              label: { ar: 'والي الأغالبة، لمدّة عشرين سنة', fr: 'Le gouverneur aghlabide, pendant vingt ans', en: 'The Aghlabid governor, for twenty years' },
              hint: { ar: 'الدرس يسمّي قريبًا من الأسرة، لا واليًا خارجيًّا.', fr: 'La leçon nomme un proche de la famille, non un gouverneur étranger.', en: 'The lesson names a family relative, not an outside governor.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'brother-turn',
          who: 'narrator',
          text: {
            ar: 'ولم يكَد هذا النزاع ينتهي حتى عاداه أخوه اليقظان من جهةٍ أخرى.',
            fr: 'À peine ce conflit s’apaisa-t-il que son propre frère, al-Yaqẓān, se retourna contre lui d’un autre côté.',
            en: 'This conflict had barely ended when his own brother, Al-Yaqzan, turned against him from another front.',
          },
        },
        {
          type: 'reply',
          id: 'the-killing',
          who: 'historians',
          prompt: { ar: 'كيف انتهى هذا الصراع العائلي؟', fr: 'Comment ce conflit familial se termina-t-il ?', en: 'How did this family conflict end?' },
          options: [
            {
              id: 'right',
              correct: true,
              label: { ar: 'قتل أبناء اليقظان بن أبي اليقظان عمّهم الإمام أبا حاتم سنة 294هـ', fr: 'Les fils d’al-Yaqẓān ibn Abī al-Yaqẓān tuèrent leur oncle, l’imam Abū Ḥātim, en 294 H', en: 'The sons of al-Yaqzan ibn Abi al-Yaqzan killed their uncle, Imam Abu Hatim, in 294 AH' },
              hint: { ar: 'الدرس ينصّ على أنّ القتلة هم أبناء اليقظان، وأنّ الضحيّة عمّهم.', fr: 'La leçon précise que les meurtriers sont les fils d’al-Yaqẓān, et la victime leur oncle.', en: 'The lesson states the killers were al-Yaqzan’s sons, and the victim was their uncle.' },
            },
            {
              id: 'wrong',
              correct: false,
              label: { ar: 'تصالح الإخوة وتقاسموا الحكم سلميًّا', fr: 'Les frères se réconcilièrent et partagèrent le pouvoir pacifiquement', en: 'The brothers reconciled and shared power peacefully' },
              hint: { ar: 'الدرس يذكر مقتلًا، لا مصالحة.', fr: 'La leçon mentionne un assassinat, non une réconciliation.', en: 'The lesson describes a killing, not a reconciliation.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'aftermath',
          who: 'narrator',
          text: {
            ar: 'وتولّى اليقظان الحكم، فقاطعه الناس واعتبروا حكمه غصبًا، ولم ينصروه ولم يثقوا إليه، وقضى عامين في خوفٍ وقلق.',
            fr: 'Al-Yaqẓān prit alors le pouvoir ; les gens le boycottèrent, considérant son règne comme une usurpation, refusèrent de le soutenir et ne lui firent pas confiance — il passa deux années dans la peur et l’angoisse.',
            en: 'Al-Yaqzan then took power; the people boycotted him, viewed his rule as a usurpation, refused to support him and did not trust him — he spent two years in fear and anxiety.',
          },
        },
      ],
    },

    // 07 — Fall of Tāhert: narrative reading passage (slide 7)
    {
      kind: 'reading',
      id: 'reading-fall-of-tahert',
      title: {
        ar: 'اقرأ: سقوط تاهرت',
        fr: 'Lis : la chute de Tāhert',
        en: 'Read: the fall of Tāhert',
      },
      intro: {
        ar: 'اقرأ كيف انتهت الدولة الرستمية، ثمّ استكشف المشهد بنفسك في النشاط التالي.',
        fr: 'Lis comment l’État rustamide prit fin, puis explore la scène par toi-même dans l’activité suivante.',
        en: 'Read how the Rustamid state came to its end, then explore the scene yourself in the next activity.',
      },
      image: `${IMG}/fall-of-tahert.png`,
      imageAlt: {
        ar: 'جيشٌ يدخل أبواب مدينةٍ محصّنة عند الفجر بلا قتال، ودخانٌ يتصاعد من مبنًى في الخلفية',
        fr: 'Une armée franchissant les portes d’une ville fortifiée à l’aube sans combat, de la fumée s’élevant d’un bâtiment en arrière-plan',
        en: 'An army entering the gates of a fortified city at dawn without a fight, smoke rising from a building in the background',
      },
      paragraphs: [
        {
          id: 'ft-p1',
          heading: {
            ar: 'ابنةٌ تطلب الثأر',
            fr: 'Une fille qui réclame vengeance',
            en: 'A daughter seeking vengeance',
          },
          text: {
            ar: 'لم تقبل دَوسَر، ابنة الإمام المقتول أبي حاتم، أن يمرّ مقتل أبيها دون ثأر. فطلبت من أبي عبد الله الشيعي، وألحّت عليه، أن يأتي بجيشه إلى تاهرت ويثأر لأبيها.',
            fr: 'Dawsar, fille de l’imam assassiné Abū Ḥātim, refusa que la mort de son père reste sans vengeance. Elle demanda à Abū ‘Abd Allāh al-Shī‘ī, avec insistance, de venir avec son armée à Tāhert pour venger son père.',
            en: 'Dawsar, daughter of the slain Imam Abu Hatim, refused to let her father’s killing go unavenged. She asked Abu Abdullah al-Shi‘i, pressing him insistently, to bring his army to Tāhert and avenge her father.',
          },
        },
        {
          id: 'ft-p2',
          heading: {
            ar: 'داعيةٌ يجمع الجيوش',
            fr: 'Un prédicateur qui rassemble des armées',
            en: 'A preacher gathering armies',
          },
          text: {
            ar: 'كان أبو عبد الله الشيعي قد خرج يدعو الناس إلى بيعة إمامه عبيد الله، وهي الدعوة الشيعية العبيدية التي نشأت وترعرعت في إيكجان. وقد جمع حوله عدّة قبائل تبحث عن الرئاسة، فوجد في طلب دَوسَر فرصةً لدخول تاهرت.',
            fr: 'Abū ‘Abd Allāh al-Shī‘ī était parti appeler les gens à prêter allégeance à son imam ‘Ubayd Allāh : c’était la prédication chiite ubaydide, née et développée à Ikjān. Il avait rassemblé autour de lui plusieurs tribus en quête de pouvoir, et vit dans la demande de Dawsar une occasion d’entrer à Tāhert.',
            en: 'Abu Abdullah al-Shi‘i had set out calling people to pledge allegiance to his imam Ubaydallah: this was the Ubaydid Shi‘i mission, which was born and grew up in Ikjan. He had gathered around him several tribes seeking power, and saw in Dawsar’s request an opportunity to enter Tāhert.',
          },
        },
        {
          id: 'ft-p3',
          heading: {
            ar: 'دخولٌ بلا مقاومة',
            fr: 'Une entrée sans résistance',
            en: 'An entry without resistance',
          },
          text: {
            ar: 'استغلّ أبو عبد الله الشيعي وجيشه فرصةَ الصراع وتشتّت قبائل المنطقة، ودخلوا المدينة دون مقاومة. لم يكن هذا نصرًا عسكريًّا بقدر ما كان استغلالًا لضعفٍ داخليّ.',
            fr: 'Abū ‘Abd Allāh al-Shī‘ī et son armée profitèrent du conflit et de la dispersion des tribus de la région, et entrèrent dans la ville sans résistance. Ce fut moins une victoire militaire que l’exploitation d’une faiblesse intérieure.',
            en: 'Abu Abdullah al-Shi‘i and his army exploited the conflict and the scattering of the region’s tribes, and entered the city without resistance. This was less a military victory than the exploitation of an inner weakness.',
          },
        },
        {
          id: 'ft-p4',
          heading: {
            ar: 'السقوط والنهاية',
            fr: 'La chute et la fin',
            en: 'The fall and the end',
          },
          text: {
            ar: 'بعد دخول تاهرت، قُتلت العائلة الرستمية إلّا مَن فرّ منهم، وأُحرقت مكتبة المعصومة، وسُرقت المدينة ونُهبت، فسقطت بذلك الدولة الرستمية بعد نحو 136 سنة من قيامها. فرّ مَن فرّ من عائلة الرستميين إلى وارجلان وتخفّوا فيها، وبقيت قبائل أهل الاستقامة في المغرب الأوسط وإفريقية متمسّكةً بعلمائها وفقهائها، كاتمةً أمرها، بينما واصل الجيش العبيدي سعيه لإسقاط دول المغرب وأئمّتها.',
            fr: 'Après l’entrée dans Tāhert, la famille rustamide fut massacrée, sauf ceux qui s’enfuirent ; la bibliothèque al-Ma‘ṣūma fut incendiée, et la ville fut volée et pillée. L’État rustamide tomba ainsi, après environ 136 années d’existence. Ceux de la famille rustamide qui purent fuir se réfugièrent à Wārjlān et s’y cachèrent. Les tribus des gens de l’intégrité restèrent au Maghreb central et en Ifrīqiya, attachées à leurs savants et à leurs juristes, et gardèrent leur cause secrète, tandis que l’armée ubaydide poursuivait son effort pour renverser les États du Maghreb et leurs imams.',
            en: 'After entering Tāhert, the Rustamid family was killed except for those who fled; the al-Ma‘suma library was burned, and the city was robbed and plundered. And so the Rustamid state fell, after about 136 years of existence. Those of the Rustamid family who could flee went to Ouargla and hid there. The tribes of the people of integrity remained in the central Maghreb and Ifriqiya, holding fast to their scholars and jurists and keeping their cause hidden, while the Ubaydid army continued its effort to topple the states of the Maghreb and their imams.',
          },
        },
      ],
    },

    // 08 — Fall of Tāhert: hotspot explorer (slide 7)
    {
      kind: 'explorer',
      id: 'fall-of-tahert-explorer',
      title: {
        ar: 'العبيديون في تاهرت',
        fr: 'Les Ubaydides à Tāhert',
        en: 'The Ubaydids in Tāhert',
      },
      intro: {
        ar: 'اضغط على عناصر المشهد لتكتشف كيف سقطت عاصمة الدولة الرستمية.',
        fr: 'Touche les éléments de la scène pour découvrir comment la capitale de l’État rustamide tomba.',
        en: 'Tap the elements of the scene to discover how the Rustamid capital fell.',
      },
      image: `${IMG}/fall-of-tahert.png`,
      imageAlt: {
        ar: 'جيشٌ يدخل أبواب مدينةٍ محصّنة عند الفجر بلا قتال، ودخانٌ يتصاعد من مبنًى في الخلفية',
        fr: 'Une armée franchissant les portes d’une ville fortifiée à l’aube sans combat, de la fumée s’élevant d’un bâtiment en arrière-plan',
        en: 'An army entering the gates of a fortified city at dawn without a fight, smoke rising from a building in the background',
      },
      hotspots: [
        {
          id: 'dawsar',
          x: 12,
          y: 30,
          label: { ar: 'طلب دَوسَر', fr: 'La demande de Dawsar', en: 'Dawsar’s request' },
          description: {
            ar: 'طلبت دَوسَر ابنة الإمام المقتول من أبي عبد الله الشيعي أن يأتي بجيشه إلى تاهرت ويثأر لأبيها، وألحّت عليه في ذلك.',
            fr: 'Dawsar, fille de l’imam assassiné, demanda à Abū ‘Abd Allāh al-Shī‘ī de venir avec son armée à Tāhert pour venger son père, et insista auprès de lui.',
            en: 'Dawsar, daughter of the slain imam, asked Abu Abdullah al-Shi‘i to bring his army to Tāhert and avenge her father, and pressed him insistently.',
          },
        },
        {
          id: 'preacher',
          x: 52,
          y: 78,
          label: { ar: 'أبو عبد الله الشيعي', fr: 'Abū ‘Abd Allāh al-Shī‘ī', en: 'Abu Abdullah al-Shi‘i' },
          description: {
            ar: 'خرج يدعو الناس إلى بيعة إمامه عبيد الله، وهي الدعوة الشيعية العبيدية التي نشأت وترعرعت في إيكجان، وقد جمع حوله عدّة قبائل كانت تبحث عن الرئاسة.',
            fr: 'Il partit appeler les gens à prêter allégeance à son imam ‘Ubayd Allāh — la prédication chiite ubaydide, née et développée à Ikjān — et rassembla autour de lui plusieurs tribus en quête de pouvoir.',
            en: 'He set out calling people to pledge allegiance to his imam Ubaydallah — the Ubaydid Shi‘i mission, born and grown in Ikjan — and gathered around him several tribes seeking power.',
          },
        },
        {
          id: 'exploited-split',
          x: 48,
          y: 50,
          label: { ar: 'استغلال الفرصة', fr: 'L’occasion saisie', en: 'The opportunity seized' },
          description: {
            ar: 'فاستغلّ هو وجيشه فرصةَ الصراع وتشتّت قبائل المنطقة، ودخلوا المدينة دون مقاومة.',
            fr: 'Lui et son armée profitèrent du conflit et de la dispersion des tribus de la région, et entrèrent dans la ville sans résistance.',
            en: 'He and his army exploited the conflict and the scattering of the region’s tribes, and entered the city without resistance.',
          },
        },
        {
          id: 'library',
          x: 61,
          y: 24,
          label: { ar: 'إحراق مكتبة المعصومة', fr: 'L’incendie de la bibliothèque al-Ma‘ṣūma', en: 'The burning of the al-Ma‘suma library' },
          description: {
            ar: 'قُتلت العائلة الرستمية إلّا مَن فرّ منهم، وأُحرقت مكتبة المعصومة، وسُرقت المدينة ونُهبت، وسقطت بذلك الدولة الرستمية.',
            fr: 'La famille rustamide fut tuée, sauf ceux qui s’enfuirent ; la bibliothèque al-Ma‘ṣūma fut incendiée, la ville volée et pillée — c’est ainsi que l’État rustamide tomba.',
            en: 'The Rustamid family was killed except for those who fled; the al-Ma‘suma library was burned, and the city robbed and plundered — and so the Rustamid state fell.',
          },
        },
        {
          id: 'scattering',
          x: 88,
          y: 80,
          label: { ar: 'بعد السقوط', fr: 'Après la chute', en: 'After the fall' },
          description: {
            ar: 'فرّ مَن فرّ من عائلة الرستميين إلى وارجلان وتخفّوا فيها، وبقيت قبائل أهل الاستقامة في المغرب الأوسط وإفريقية متمسّكةً بعلمائها وفقهائها، كاتمةً أمرها، بينما واصل الجيش العبيدي سعيَه لإسقاط دُوَل المغرب وأئمّتها.',
            fr: 'Ceux de la famille rustamide qui purent s’enfuir se réfugièrent à Wārjlān et s’y cachèrent ; les tribus des gens de l’intégrité restèrent au Maghreb central et en Ifrīqiya, attachées à leurs savants et juristes, en gardant leur cause secrète, pendant que l’armée ubaydide poursuivait son effort pour renverser les États du Maghreb et leurs imams.',
            en: 'Those of the Rustamid family who managed to flee went to Ouargla and hid there; the tribes of the people of integrity remained in the central Maghreb and Ifriqiya, holding fast to their scholars and jurists and keeping their cause hidden, while the Ubaydid army continued its effort to topple the states of the Maghreb and their imams.',
          },
        },
      ],
    },

    // 07 — Swipe: fled vs. stayed and held fast
    {
      kind: 'swipe',
      id: 'fled-or-stayed',
      title: {
        ar: 'بعد السقوط: مَن فرّ ومَن بقي؟',
        fr: 'Après la chute : qui fuit, qui resta ?',
        en: 'After the fall: who fled, who stayed?',
      },
      intro: {
        ar: 'اسحب كلّ بطاقة إلى الجهة الصحيحة: هل فرّ أصحابها واختبؤوا، أم بقوا في أرضهم متمسّكين بعلمائهم؟',
        fr: 'Fais glisser chaque carte du bon côté : ces personnes ont-elles fui et se sont-elles cachées, ou sont-elles restées sur leurs terres, attachées à leurs savants ?',
        en: 'Swipe each card to the correct side: did these people flee and hide, or did they stay on their land, holding fast to their scholars?',
      },
      left: {
        label: { ar: 'فرّ واختبأ', fr: 'Fuit et se cacha', en: 'Fled and hid' },
        tag: { ar: 'فرار', fr: 'Fuite', en: 'Flight' },
      },
      right: {
        label: { ar: 'بقي متمسّكًا بعلمائه', fr: 'Resta, attaché à ses savants', en: 'Stayed, holding fast to its scholars' },
        tag: { ar: 'ثبات', fr: 'Fermeté', en: 'Steadfastness' },
      },
      cards: [
        {
          id: 'rustamid-survivors',
          who: { ar: 'الناجون من العائلة الرستمية', fr: 'Les survivants de la famille rustamide', en: 'The surviving Rustamid family' },
          deed: {
            ar: 'نجوا من القتل حين دخل العبيديون تاهرت',
            fr: 'Échappèrent au massacre quand les Ubaydides entrèrent à Tāhert',
            en: 'Escaped the killing when the Ubaydids entered Tāhert',
          },
          side: 'left',
          explanation: {
            ar: 'فرّ مَن فرّ من عائلة الرستميين إلى وارجلان وتخفّوا فيها.',
            fr: 'Ceux de la famille rustamide qui purent fuir se réfugièrent à Wārjlān et s’y cachèrent.',
            en: 'Those of the Rustamid family who could flee went to Ouargla and hid there.',
          },
        },
        {
          id: 'ibadi-imams',
          who: { ar: 'أئمّة الإباضية', fr: 'Les imams ibadites', en: 'The Ibadi imams' },
          deed: {
            ar: 'طاردهم الفاطميون (العبيديون)',
            fr: 'Étaient poursuivis par les Fatimides (Ubaydides)',
            en: 'Were pursued by the Fatimids (Ubaydids)',
          },
          side: 'left',
          explanation: {
            ar: 'اختبأ أئمّة الإباضية فرارًا من الفاطميين (العبيديين).',
            fr: 'Les imams ibadites se cachèrent pour fuir les Fatimides (Ubaydides).',
            en: 'The Ibadi imams went into hiding, fleeing the Fatimids (Ubaydids).',
          },
        },
        {
          id: 'istiqama-maghreb',
          who: { ar: 'قبائل أهل الاستقامة في المغرب الأوسط', fr: 'Les tribus des gens de l’intégrité au Maghreb central', en: 'The tribes of the people of integrity in the central Maghreb' },
          deed: {
            ar: 'عاشت سقوط الدولة الرستمية في أرضها',
            fr: 'Vécurent la chute de l’État rustamide sur leurs propres terres',
            en: 'Lived through the fall of the Rustamid state on their own land',
          },
          side: 'right',
          explanation: {
            ar: 'بقيت في المغرب الأوسط متمسّكةً بعلمائها وفقهائها، كاتمةً أمرها.',
            fr: 'Elles restèrent au Maghreb central, attachées à leurs savants et juristes, en gardant leur cause secrète.',
            en: 'They stayed in the central Maghreb, holding fast to their scholars and jurists and keeping their cause hidden.',
          },
        },
        {
          id: 'istiqama-ifriqiya',
          who: { ar: 'قبائل أهل الاستقامة في إفريقية', fr: 'Les tribus des gens de l’intégrité en Ifrīqiya', en: 'The tribes of the people of integrity in Ifriqiya' },
          deed: {
            ar: 'بلغها خبر سقوط تاهرت',
            fr: 'Apprirent la chute de Tāhert',
            en: 'Heard of the fall of Tāhert',
          },
          side: 'right',
          explanation: {
            ar: 'بقيت هي أيضًا في إفريقية متمسّكةً بعلمائها وفقهائها، كاتمةً أمرها.',
            fr: 'Elles aussi restèrent en Ifrīqiya, attachées à leurs savants et juristes, en gardant leur cause secrète.',
            en: 'They too stayed in Ifriqiya, holding fast to their scholars and jurists and keeping their cause hidden.',
          },
        },
      ],
    },

    // 08 — Blitz round
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
          text: { ar: 'سقطت الدولة الرستمية بعد حوالي 136 سنة من قيامها.', fr: 'L’État rustamide tomba après environ 136 années d’existence.', en: 'The Rustamid state fell after about 136 years of existence.' },
          answer: true,
          explanation: { ar: 'صحيح، هذا نصّ الدرس.', fr: 'Vrai, c’est le texte même de la leçon.', en: 'True — this is exactly what the lesson states.' },
        },
        {
          id: 'b2',
          text: { ar: 'انتصرت نفوسة على الجيش الأغلبي في واقعة مانو.', fr: 'Nafūsa triompha de l’armée aghlabide à la bataille de Mānū.', en: 'Nafusa triumphed over the Aghlabid army at the Battle of Mano.' },
          answer: false,
          explanation: { ar: 'خطأ، خسرت نفوسة المعركة وقُتل منها الكثير، منهم 400 عالِم.', fr: 'Faux, Nafūsa perdit la bataille et beaucoup des siens furent tués, dont 400 savants.', en: 'False — Nafusa lost the battle and many of them were killed, including 400 scholars.' },
        },
        {
          id: 'b3',
          text: { ar: 'قوّة الدولة الرستمية العسكرية كانت مستمدّةً من نفوسة.', fr: 'La force militaire de l’État rustamide était tirée de Nafūsa.', en: 'The Rustamid state’s military strength was derived from Nafusa.' },
          answer: true,
          explanation: { ar: 'صحيح، ولهذا أضعفتها هزيمة واقعة مانو بشدّة.', fr: 'Vrai, c’est pourquoi la défaite de Mānū l’affaiblit fortement.', en: 'True — which is why the defeat at Mano weakened it severely.' },
        },
        {
          id: 'b4',
          text: { ar: 'قتل أبناء اليقظان عمّهم الإمام أبا حاتم سنة 294هـ.', fr: 'Les fils d’al-Yaqẓān tuèrent leur oncle, l’imam Abū Ḥātim, en 294 H.', en: 'Al-Yaqzan’s sons killed their uncle, Imam Abu Hatim, in 294 AH.' },
          answer: true,
          explanation: { ar: 'صحيح، وتولّى اليقظان الحكم بعده لكنّ الناس قاطعوه.', fr: 'Vrai, et al-Yaqẓān prit le pouvoir après lui, mais les gens le boycottèrent.', en: 'True — Al-Yaqzan then took power, but the people boycotted him.' },
        },
        {
          id: 'b5',
          text: { ar: 'دخل العبيديون تاهرت بعد حصارٍ طويل وقتالٍ عنيف.', fr: 'Les Ubaydides entrèrent à Tāhert après un long siège et des combats violents.', en: 'The Ubaydids entered Tāhert after a long siege and fierce fighting.' },
          answer: false,
          explanation: { ar: 'خطأ، دخلوا المدينة دون مقاومة، لأنّهم استغلّوا الصراع وتشتّت قبائل المنطقة.', fr: 'Faux, ils entrèrent dans la ville sans résistance, profitant du conflit et de la dispersion des tribus de la région.', en: 'False — they entered the city without resistance, exploiting the conflict and the region’s scattered tribes.' },
        },
        {
          id: 'b6',
          text: { ar: 'طلبت دَوسَر من أبي عبد الله الشيعي أن يثأر لأبيها.', fr: 'Dawsar demanda à Abū ‘Abd Allāh al-Shī‘ī de venger son père.', en: 'Dawsar asked Abu Abdullah al-Shi‘i to avenge her father.' },
          answer: true,
          explanation: { ar: 'صحيح، ابنة الإمام المقتول ألحّت عليه أن يأتي بجيشه إلى تاهرت.', fr: 'Vrai, la fille de l’imam assassiné insista pour qu’il vienne avec son armée à Tāhert.', en: 'True — the daughter of the slain imam pressed him to bring his army to Tāhert.' },
        },
      ],
    },

    // 09 — Quiz: mixed formats
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
          question: { ar: 'ما سبب اعتراض نفوسة للجيش الأغلبي سنة 283هـ؟', fr: 'Pourquoi Nafūsa intercepta-t-elle l’armée aghlabide en 283 H ?', en: 'Why did Nafusa intercept the Aghlabid army in 283 AH?' },
          options: [
            { id: 'a', label: { ar: 'لمنعه من المرور عبر أراضيها وهو في طريقه لقتال الطولونيين', fr: 'Pour empêcher l’armée de traverser ses terres alors qu’elle se rendait en Égypte combattre les Toulounides', en: 'To prevent it from passing through their lands on its way to fight the Tulunids' } },
            { id: 'b', label: { ar: 'لأنّها أرادت الانضمام إليه', fr: 'Parce qu’elle voulait s’y joindre', en: 'Because they wanted to join it' } },
            { id: 'c', label: { ar: 'لأنّ معاوية طلب منها ذلك', fr: 'Parce que Mu‘āwiya le lui avait demandé', en: 'Because Mu‘awiya had asked them to' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'خرج الجيش الأغلبي لقتال الطولونيين في مصر، فاعترضته قوّةٌ من نفوسة وقبائل أخرى لمنعه من المرور عبر أراضيها.',
            fr: 'L’armée aghlabide partit combattre les Toulounides en Égypte ; une force de Nafūsa et d’autres tribus l’intercepta pour l’empêcher de traverser leurs terres.',
            en: 'The Aghlabid army set out to fight the Tulunids in Egypt; a force from Nafusa and other tribes intercepted it to prevent it from passing through their lands.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'لم تُطِع نفوسة نصيحة حكّامها بعدم التعرّض للجيش الأغلبي.', fr: 'Nafūsa n’obéit pas au conseil de ses dirigeants de ne pas s’opposer à l’armée aghlabide.', en: 'Nafusa did not obey its rulers’ advice not to confront the Aghlabid army.' },
          answer: true,
          explanation: {
            ar: 'صحيح، وزاد الأمر سوءًا أنّ قبائل تاهرت لم تكن على وفاق وصَعُب اجتماعها.',
            fr: 'Vrai, et la situation s’aggrava car les tribus de Tāhert n’étaient pas en accord et leur union était difficile.',
            en: 'True — and matters worsened because the tribes of Tāhert were not in agreement and uniting them was difficult.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ شخصيّة بدورها في سقوط الدولة الرستمية', fr: 'Relie chaque personnage à son rôle dans la chute de l’État rustamide', en: 'Match each person to their role in the fall of the Rustamid state' },
          pairs: [
            { id: 'p1', left: { ar: 'أبو حاتم يوسف', fr: 'Abū Ḥātim Yūsuf', en: 'Abu Hatim Yusuf' }, right: { ar: 'الإمام الذي قتله أبناء أخيه', fr: 'L’imam tué par les fils de son frère', en: 'The imam killed by his brother’s sons' } },
            { id: 'p2', left: { ar: 'اليقظان', fr: 'Al-Yaqẓān', en: 'Al-Yaqzan' }, right: { ar: 'عاداه وتولّى الحكم بعده لكن الناس قاطعوه', fr: 'Son adversaire, qui prit le pouvoir après lui mais fut boycotté', en: 'His rival, who took power after him but was boycotted by the people' } },
            { id: 'p3', left: { ar: 'دَوسَر', fr: 'Dawsar', en: 'Dawsar' }, right: { ar: 'ابنة الإمام المقتول التي طلبت الثأر', fr: 'La fille de l’imam assassiné qui demanda vengeance', en: 'The slain imam’s daughter who sought vengeance' } },
            { id: 'p4', left: { ar: 'أبو عبد الله الشيعي', fr: 'Abū ‘Abd Allāh al-Shī‘ī', en: 'Abu Abdullah al-Shi‘i' }, right: { ar: 'الداعية الذي قاد الجيش العبيدي إلى تاهرت', fr: 'Le prédicateur qui mena l’armée ubaydide à Tāhert', en: 'The preacher who led the Ubaydid army to Tāhert' } },
          ],
          explanation: {
            ar: 'كلّ هذه الشخصيّات ساهمت، كلٌّ بطريقته، في سلسلة الأحداث التي أدّت إلى سقوط تاهرت.',
            fr: 'Chacun de ces personnages contribua, à sa manière, à la chaîne d’événements qui mena à la chute de Tāhert.',
            en: 'Each of these figures contributed, in their own way, to the chain of events that led to the fall of Tāhert.',
          },
        },
        {
          id: 'q4',
          type: 'ordering',
          question: { ar: 'رتّب هذه المحطّات بحسب ورودها في الدرس', fr: 'Ordonne ces étapes selon leur déroulement dans la leçon', en: 'Order these milestones as they occurred in the lesson' },
          items: [
            { id: 'o1', label: { ar: 'هزيمة نفوسة في واقعة مانو', fr: 'La défaite de Nafūsa à la bataille de Mānū', en: 'Nafusa’s defeat at the Battle of Mano' } },
            { id: 'o2', label: { ar: 'مقتل الإمام أبي حاتم على يد أبناء أخيه', fr: 'L’assassinat de l’imam Abū Ḥātim par les fils de son frère', en: 'The killing of Imam Abu Hatim by his brother’s sons' } },
            { id: 'o3', label: { ar: 'طلب دَوسَر الثأر من أبي عبد الله الشيعي', fr: 'La demande de vengeance de Dawsar à Abū ‘Abd Allāh al-Shī‘ī', en: 'Dawsar’s request for vengeance to Abu Abdullah al-Shi‘i' } },
            { id: 'o4', label: { ar: 'دخول العبيديين تاهرت وسقوط الدولة الرستمية', fr: 'L’entrée des Ubaydides à Tāhert et la chute de l’État rustamide', en: 'The Ubaydids’ entry into Tāhert and the fall of the Rustamid state' } },
          ],
          explanation: {
            ar: 'هذا هو مسار الدرس: ضعفٌ عسكريّ، فصراعٌ عائليّ، فنداء استنجاد، فسقوطٌ نهائيّ.',
            fr: 'C’est le parcours de la leçon : affaiblissement militaire, conflit familial, appel à l’aide, puis chute finale.',
            en: 'This is the lesson’s path: military weakening, then family conflict, then a call for help, then final collapse.',
          },
        },
      ],
    },

    // 10 — Values (أعتبر من الدرس)
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'أعتبر من الدرس', fr: 'La leçon à retenir', en: 'What the lesson teaches' },
      prompt: {
        ar: 'ما الذي يعلّمنا إيّاه سقوط الدولة الرستمية؟',
        fr: 'Que nous enseigne la chute de l’État rustamide ?',
        en: 'What does the fall of the Rustamid state teach us?',
      },
      choices: [
        {
          id: 'unity',
          isCorrect: true,
          label: { ar: 'تفرّق الصفوف يفتح الباب أمام الأعداء', fr: 'La désunion ouvre la porte aux ennemis', en: 'Disunity opens the door to enemies' },
          feedback: {
            ar: 'صحيح؛ استغلّ أبو عبد الله الشيعي بالضبط فرصة الصراع وتشتّت قبائل المنطقة ليدخل تاهرت دون مقاومة.',
            fr: 'Exact ; Abū ‘Abd Allāh al-Shī‘ī profita précisément du conflit et de la dispersion des tribus pour entrer à Tāhert sans résistance.',
            en: 'Correct — Abu Abdullah al-Shi‘i exploited exactly the conflict and the scattering of the tribes to enter Tāhert without resistance.',
          },
        },
        {
          id: 'advice',
          isCorrect: true,
          label: { ar: 'رفض النصيحة الحكيمة قد يكلّف ثمنًا باهظًا', fr: 'Refuser un conseil avisé peut coûter très cher', en: 'Rejecting wise advice can come at a steep cost' },
          feedback: {
            ar: 'صحيح؛ لم تُطِع نفوسة نصيحة حكّامها، فخسرت المعركة وأضعفت الدولة بأكملها.',
            fr: 'Exact ; Nafūsa n’obéit pas au conseil de ses dirigeants, perdit la bataille, et affaiblit tout l’État.',
            en: 'Correct — Nafusa did not heed its rulers’ advice, lost the battle, and weakened the entire state.',
          },
        },
        {
          id: 'family-power',
          isCorrect: true,
          label: { ar: 'طمع الأقارب في السلطة قد يُسقط حتى أعدل الحكّام', fr: 'La convoitise du pouvoir au sein de la famille peut faire tomber même le plus juste des gouvernants', en: 'Relatives’ greed for power can bring down even the fairest ruler' },
          feedback: {
            ar: 'صحيح؛ قضى أبو حاتم على فساد البلاد لكنّه لم يستطع إنهاء أطماع أفراد أسرته، فقُتل على أيديهم.',
            fr: 'Exact ; Abū Ḥātim élimina la corruption du pays mais ne put mettre fin aux ambitions de sa propre famille, qui finit par le tuer.',
            en: 'Correct — Abu Hatim ended the country’s corruption but could not stop his own family’s ambitions, who ultimately killed him.',
          },
        },
        {
          id: 'force-legit',
          isCorrect: false,
          label: { ar: 'مَن يستولي على الحكم بالقوّة ينال ثقة الناس تلقائيًّا', fr: 'Celui qui s’empare du pouvoir par la force gagne automatiquement la confiance du peuple', en: 'Whoever seizes power by force automatically gains the people’s trust' },
          feedback: {
            ar: 'عكس هذا تمامًا؛ تولّى اليقظان الحكم بعد مقتل أبي حاتم، لكنّ الناس قاطعوه واعتبروا حكمه غصبًا ولم يثقوا إليه.',
            fr: 'C’est l’inverse ; al-Yaqẓān prit le pouvoir après le meurtre d’Abū Ḥātim, mais les gens le boycottèrent, considérant son règne comme une usurpation, et ne lui firent pas confiance.',
            en: 'The opposite is true — Al-Yaqzan took power after Abu Hatim’s murder, but the people boycotted him, viewed his rule as a usurpation, and did not trust him.',
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
          id: 'v1',
          value: { ar: 'وحدة الصفّ حصنٌ للدولة', fr: 'L’unité des rangs est un rempart pour l’État', en: 'Unity of ranks is a fortress for the state' },
          evidence: {
            ar: 'قبائل تاهرت لم تكن على وفاق وصَعُب اجتماعها، وهذا ما استغلّه أبو عبد الله الشيعي للدخول دون مقاومة.',
            fr: 'Les tribus de Tāhert n’étaient pas en accord et leur union était difficile — c’est précisément ce qu’exploita Abū ‘Abd Allāh al-Shī‘ī pour entrer sans résistance.',
            en: 'The tribes of Tāhert were not in agreement and uniting them was difficult — exactly what Abu Abdullah al-Shi‘i exploited to enter without resistance.',
          },
        },
        {
          id: 'v2',
          value: { ar: 'طاعة النصيحة الحكيمة تحفظ القوّة', fr: 'Obéir à un conseil avisé préserve la force', en: 'Heeding wise advice preserves strength' },
          evidence: {
            ar: 'لم تُطِع نفوسة نصيحة حكّامها بعدم التعرّض للجيش الأغلبي، فخسرت المعركة وأضعفت الدولة كلّها.',
            fr: 'Nafūsa n’obéit pas au conseil de ses dirigeants de ne pas s’opposer à l’armée aghlabide, perdit la bataille et affaiblit tout l’État.',
            en: 'Nafusa did not heed its rulers’ advice not to confront the Aghlabid army, lost the battle, and weakened the entire state.',
          },
        },
        {
          id: 'v3',
          value: { ar: 'العدل في الحكم لا يكفي وحده دون صلاح المقرّبين', fr: 'La justice du gouvernant seule ne suffit pas sans l’intégrité de ses proches', en: 'A ruler’s justice alone is not enough without the integrity of those close to him' },
          evidence: {
            ar: 'قضى أبو حاتم على فساد البلاد، لكنّه لم يُنْه فساد وأطماع بعض أفراد أسرته، فانتهى الأمر بمقتله على أيديهم.',
            fr: 'Abū Ḥātim élimina la corruption du pays, mais ne mit pas fin à la corruption et aux ambitions de certains membres de sa famille, qui finirent par le tuer.',
            en: 'Abu Hatim eliminated the country’s corruption, but did not end the corruption and ambitions of some family members, who ultimately killed him.',
          },
        },
      ],
    },

    // 11 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'سقطت الدولة الرستمية بعد نحو 136 سنة: أضعفتها هزيمة نفوسة في واقعة مانو، ثمّ مزّقها صراعٌ عائليّ انتهى بمقتل الإمام أبي حاتم، فاستغلّ العبيديون هذا التشتّت ودخلوا تاهرت دون مقاومة، فيما بقيت قبائل أهل الاستقامة متمسّكةً بعلمائها، كاتمةً أمرها.',
        fr: 'L’État rustamide tomba après environ 136 années : affaibli par la défaite de Nafūsa à Mānū, puis déchiré par un conflit familial qui s’acheva par l’assassinat de l’imam Abū Ḥātim, il laissa les Ubaydides profiter de cette division pour entrer à Tāhert sans résistance, tandis que les tribus des gens de l’intégrité restaient attachées à leurs savants, en gardant leur cause secrète.',
        en: 'The Rustamid state fell after about 136 years: weakened by Nafusa’s defeat at Mano, then torn apart by a family conflict that ended with the killing of Imam Abu Hatim, it let the Ubaydids exploit this division and enter Tāhert without resistance, while the tribes of the people of integrity remained attached to their scholars, keeping their cause hidden.',
      },
      learned: [
        {
          ar: 'خسرت نفوسة واقعة مانو (283هـ) أمام الجيش الأغلبي، وقُتل منها الكثير، منهم 400 عالِم، فضعفت الدولة الرستمية التي كانت قوّتها العسكرية مستمدّةً منها.',
          fr: 'Nafūsa perdit la bataille de Mānū (283 H) face à l’armée aghlabide, et beaucoup des siens furent tués, dont 400 savants, ce qui affaiblit l’État rustamide dont la force militaire en dépendait.',
          en: 'Nafusa lost the Battle of Mano (283 AH) against the Aghlabid army, and many of them were killed, including 400 scholars, weakening the Rustamid state whose military strength depended on them.',
        },
        {
          ar: 'نافس عمّ الإمام أبي حاتم وأخوه على السلطة، وانتهى الأمر بقتله على يد أبناء أخيه سنة 294هـ، وتولّى اليقظان الحكم لكنّ الناس قاطعوه.',
          fr: 'L’oncle puis le frère de l’imam Abū Ḥātim le concurrencèrent pour le pouvoir, et l’affaire s’acheva par son assassinat par les fils de son frère en 294 H ; al-Yaqẓān prit le pouvoir mais fut boycotté par le peuple.',
          en: 'Imam Abu Hatim’s uncle and then his brother competed with him for power, and the matter ended with his killing by his brother’s sons in 294 AH; Al-Yaqzan took power but was boycotted by the people.',
        },
        {
          ar: 'طلبت دَوسَر ابنة الإمام المقتول من أبي عبد الله الشيعي أن يثأر لأبيها، فجمع عدّة قبائل واستغلّ تشتّت المنطقة ليدخل تاهرت.',
          fr: 'Dawsar, fille de l’imam assassiné, demanda à Abū ‘Abd Allāh al-Shī‘ī de le venger ; il rassembla plusieurs tribus et profita de la division de la région pour entrer à Tāhert.',
          en: 'Dawsar, the slain imam’s daughter, asked Abu Abdullah al-Shi‘i to avenge her father; he gathered several tribes and exploited the region’s division to enter Tāhert.',
        },
        {
          ar: 'دخل العبيديون تاهرت دون مقاومة، وقتلوا العائلة الرستمية إلّا مَن فرّ منهم، وأحرقوا مكتبة المعصومة، وسرقوا المدينة ونهبوها، فسقطت الدولة الرستمية.',
          fr: 'Les Ubaydides entrèrent à Tāhert sans résistance, tuèrent la famille rustamide sauf ceux qui fuirent, incendièrent la bibliothèque al-Ma‘ṣūma, volèrent et pillèrent la ville — l’État rustamide tomba ainsi.',
          en: 'The Ubaydids entered Tāhert without resistance, killed the Rustamid family except for those who fled, burned the al-Ma‘suma library, and robbed and plundered the city — and so the Rustamid state fell.',
        },
        {
          ar: 'فرّ الناجون من آل الرستميين إلى وارجلان وتخفّوا فيها، وبقيت قبائل أهل الاستقامة في المغرب الأوسط وإفريقية متمسّكةً بعلمائها وفقهائها، كاتمةً أمرها، بينما واصل العبيديون سعيهم لإسقاط دُوَل المغرب وأئمّتها.',
          fr: 'Les survivants des Rustamides fuirent à Wārjlān et s’y cachèrent ; les tribus des gens de l’intégrité restèrent au Maghreb central et en Ifrīqiya, attachées à leurs savants et juristes, en gardant leur cause secrète, tandis que les Ubaydides poursuivaient leur effort pour renverser les États du Maghreb et leurs imams.',
          en: 'The Rustamid survivors fled to Ouargla and hid there; the tribes of the people of integrity remained in the central Maghreb and Ifriqiya, attached to their scholars and jurists and keeping their cause hidden, while the Ubaydids continued their effort to topple the states of the Maghreb and their imams.',
        },
      ],
    },
  ],
}
