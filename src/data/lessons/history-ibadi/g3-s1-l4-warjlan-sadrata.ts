import type { Lesson } from '../../types'

// Source: Ibadite History textbook Grade 3 (Other ressources/Ibadite_History_S5.pdf), "الدرس الواحد والثلاثون: ازدهار وارجلان وسدراتة"
// (Lesson Thirty-One: The Prosperity of Ouarjlan and Sidrata), slides 1–10 (pages 33–42; slides 4, 6, 8, 10 are the English versions).
//   Slide 2 — الإشكالية: من المناطق التي تطوّرت في العهد الرستمي بالمغرب الأوسط وارجلان وسدراتة، أصبحتا مأمنًا انتقل إليه من تبقّى من الأسرة الرستمية
//             بعد الخروج من تاهرت، وبزغ نجمهما لمّا ساءت أحوال الشمال فقصدهما أهل المغرب. بماذا تميّزت المنطقة آنذاك؟ (خريطة: وارجلان، آثار سدراتة)
//   Slide 3 — مراكز تجارية كبيرة: شهرة بلغت الآفاق، من أهمّ المراكز التجارية ومحطّة القوافل القادمة من البحر وشمال المغرب الأوسط المتّجهة نحو بلاد السودان الغربي،
//             ازدادت الهجرات إليهما فاتّسعتا، كثرت المساكن وحُفرت آبار المياه، نشاط زراعي ملحوظ، الآبار كثيرة خاصّة في سدراتة،
//             السواقي تمتدّ منها إلى وارجلان على امتداد اثني عشر كيلومترًا، ومنها إلى المزارع والبساتين على جوانب المدينة. (صورة: مصلّى الشيخ أبو سهل - وارجلان)
//   Slide 5 — النشاط العلمي في وارجلان: كما انتقل العلم إلى تاهرت أيّام ازدهارها توجّه نحو وارجلان ووادي سوف لأنّهما على الطريق المتّصل من نفوسة إلى عاصمة الدولة،
//             ممرّ عامر يعبره الفقهاء والعامّة؛ سقوط الدولة الرستمية وجور الحكّام في بلاد التلّ دفع علماء أهل الدعوة وفقهاءها للتوجّه إليها فازدهر العلم فيها.
//             من علماء وارجلان: أبو صالح جنّون، أبو الربيع سليمان بن زرقون، أبو زكرياء يحيى صاحب سير الأئمّة، الشيخ أبو عمّار عبد الكافي صاحب سير الحلقة،
//             أبو العبّاس صاحب القسمة، أبو يعقوب الوارجلاني صاحب الدليل والبرهان. (صورة: محراب من آثار سدراتة)
//   Slide 7 — تبليغ الدين وجلب المنافع: ساهمت التجارة في اعتناق أهالي السودان للإسلام، حمل التجّار الألوان والخيرات ورسالة الإسلام، كانوا متخلّقين بأخلاقه
//             فتركوا الأثر الطيّب، رافق القوافل عددٌ من الفقهاء والدعاة سفراء الإسلام، أسلم الأفراد كما أسلمت الممالك على يد أهل الاستقامة مثل مملكة مالي. (صورة: سوق وارجلان)
//   Slide 9 — خراب سدراتة: التجارة جلبت جيوشًا لا لحمايتهما ولا لإعانتهما على الدعوة بل للقضاء عليهما وعلى حضارتهما والاستيلاء على طرق التجارة ومصادر الذهب؛
//             هجوم يحيى بن إسحاق الميورقي الذي اجتذبه بريق سدراتة بعمرانها وزخارفها واستعراض أموالها، فخُرّبت ونُهبت أموالها سنة 626 هـ (1228 م)،
//             وبقيت وارجلان على بساطتها محصّنة بالعلماء دون تخريب. (صورة: سدراتة مدينة تحت الرمال)
// Every fact below is taken from those slides; nothing is added from outside them.
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): scenes are told through oases, wells, caravans of camels, goods, books and ruins.

const IMG = '/images/lessons/warjlan-sadrata'

export const warjlanSadrata: Lesson = {
  id: 'history-ibadi-g3-s1-l4',
  gradeId: 'history-ibadi-g3',
  moduleId: 'history-ibadi-g3',
  semesterId: 'history-ibadi-g3-s1',
  order: 4,
  status: 'published',
  estimatedMinutes: 40,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'مدينتان من الطين بين النخيل في الصحراء عند الغروب، وجِمالٌ مُحمّلة تستريح قرب بئرٍ حجرية',
    fr: 'Deux villes de terre parmi les palmiers du désert au coucher du soleil, des chameaux chargés se reposant près d’un puits de pierre',
    en: 'Two mud-brick towns among desert palms at sunset, loaded camels resting beside a stone well',
  },
  title: {
    ar: 'ازدهار وارجلان وسدراتة',
    fr: 'La prospérité de Ouargla et de Sedrata',
    en: 'The prosperity of Warjlan and Sedrata',
  },
  description: {
    ar: 'كيف صارت مدينتان في قلب الصحراء مأمنًا ومحطّةً للقوافل ومنارةً للعلم؟ ولماذا خُرّبت سدراتة وبقيت وارجلان؟',
    fr: 'Comment deux villes au cœur du désert devinrent-elles un refuge, une étape des caravanes et un phare du savoir ? Et pourquoi Sedrata fut-elle détruite alors que Ouargla resta debout ?',
    en: 'How did two towns in the heart of the desert become a safe haven, a caravan station and a beacon of knowledge? And why was Sedrata destroyed while Warjlan survived?',
  },

  sections: [
    // 01 — Hero (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'مدينتان من الطين بين النخيل في الصحراء عند الغروب، وجِمالٌ مُحمّلة تستريح قرب بئرٍ حجرية',
        fr: 'Deux villes de terre parmi les palmiers du désert au coucher du soleil, des chameaux chargés se reposant près d’un puits de pierre',
        en: 'Two mud-brick towns among desert palms at sunset, loaded camels resting beside a stone well',
      },
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'بماذا تميّزت منطقة وارجلان وسدراتة آنذاك؟',
        fr: 'Qu’est-ce qui distinguait alors la région de Ouargla et de Sedrata ?',
        en: 'What made the region of Warjlan and Sedrata stand out at that time?',
      },
      intro: {
        ar: 'من بين المناطق التي تطوّرت في العهد الرستمي بالمغرب الأوسط: وارجلان وسدراتة. أصبحتا مأمنًا انتقل إليه من تبقّى من الأسرة الرستمية بعد الخروج من تاهرت، وبزغ نجمهما لمّا ساءت أحوال الشمال فقصدهما أهل المغرب.',
        fr: 'Parmi les régions qui se développèrent à l’époque rustamide au Maghreb central : Ouargla et Sedrata. Elles devinrent le refuge où s’installèrent les derniers membres de la famille rustamide après leur départ de Tāhert, et leur étoile se leva quand la situation du Nord se dégrada et que les gens du Maghreb s’y rendirent.',
        en: 'Among the regions that developed in the Rustamid era in the central Maghreb were Warjlan and Sedrata. They became a safe haven where the remaining members of the Rustamid family moved after leaving Tahert, and their star rose when conditions in the north worsened and people of the Maghreb headed there.',
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
          question: { ar: 'لماذا ازدهرت المدينتان؟', fr: 'Pourquoi les deux villes prospérèrent-elles ?', en: 'Why did the two towns flourish?' },
          target: 'reading-trade',
          teaser: { ar: 'قوافل، وآبار، وسواقٍ.', fr: 'Caravanes, puits et canaux.', en: 'Caravans, wells and canals.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف صارت وارجلان منارةً للعلم والدعوة؟', fr: 'Comment Ouargla devint-elle un phare du savoir et de l’Appel ?', en: 'How did Warjlan become a beacon of knowledge and the Call?' },
          target: 'reading-knowledge',
          teaser: { ar: 'علماء، وكتب، وقوافل إلى السودان.', fr: 'Des savants, des livres, des caravanes vers le Soudan.', en: 'Scholars, books and caravans to the Sudan.' },
        },
        {
          id: 'm3',
          question: { ar: 'لماذا خُرّبت سدراتة وبقيت وارجلان؟', fr: 'Pourquoi Sedrata fut-elle détruite et Ouargla épargnée ?', en: 'Why was Sedrata destroyed while Warjlan was spared?' },
          target: 'reading-destruction',
          teaser: { ar: 'بريقٌ جذب الطامعين.', fr: 'Un éclat qui attira les convoitises.', en: 'A splendour that drew the greedy.' },
        },
      ],
    },

    // 03 — Reading: a haven and a trade crossroads (slides 2–4)
    {
      kind: 'reading',
      id: 'reading-trade',
      title: { ar: 'اقرأ: مراكز تجارية كبيرة', fr: 'Lis : de grands centres de commerce', en: 'Read: great trade centres' },
      intro: {
        ar: 'اقرأ كيف كبرت المدينتان، ثمّ ركّب سلسلة الازدهار في اللعبة التالية.',
        fr: 'Lis comment les deux villes grandirent, puis assemble la chaîne de la prospérité dans le jeu suivant.',
        en: 'Read how the two towns grew, then build the chain of prosperity in the next game.',
      },
      image: `${IMG}/caravan-station.png`,
      imageAlt: {
        ar: 'محطّة قوافل في الصحراء عند الفجر: جِمالٌ باركة حول بئرٍ حجرية لها بكرة خشبية، وقِرَبٌ وأخراجٌ على الرمل، ونخيلٌ وسور مدينةٍ من الطين في الخلفية',
        fr: 'Une halte de caravanes dans le désert à l’aube : des chameaux agenouillés autour d’un puits de pierre à poulie en bois, des outres et des sacoches sur le sable, des palmiers et un rempart de terre au loin',
        en: 'A desert caravan stop at dawn: camels kneeling around a stone well with a wooden pulley, water skins and saddlebags on the sand, palms and a mud-brick town wall behind',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'مأمنٌ في الجنوب', fr: 'Un refuge au Sud', en: 'A haven in the south' },
          text: {
            ar: 'تطوّرت وارجلان وسدراتة في العهد الرستمي، وصارتا مأمنًا انتقل إليه من تبقّى من الأسرة الرستمية بعد الخروج من تاهرت. ولمّا ساءت أحوال الشمال، قصدهما أهل المغرب.',
            fr: 'Ouargla et Sedrata se développèrent à l’époque rustamide et devinrent le refuge des derniers membres de la famille rustamide après leur départ de Tāhert. Quand la situation du Nord se dégrada, les gens du Maghreb s’y rendirent.',
            en: 'Warjlan and Sedrata developed in the Rustamid era and became the refuge of the remaining Rustamid family after they left Tahert. When conditions in the north worsened, people of the Maghreb headed there.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'محطّة القوافل', fr: 'L’étape des caravanes', en: 'The caravan station' },
          text: {
            ar: 'تمتّعت المدينتان بشهرةٍ كبيرة بلغت الآفاق، إذ كانتا من أهمّ المراكز التجارية، ومحطّةً للقوافل القادمة من البحر وشمال المغرب الأوسط، المتّجهة نحو بلاد السودان الغربي.',
            fr: 'Les deux villes jouirent d’une grande renommée qui atteignit les horizons : elles comptaient parmi les plus importants centres de commerce et servaient d’étape aux caravanes venant de la mer et du nord du Maghreb central, en route vers les pays du Soudan occidental.',
            en: 'The two towns enjoyed great fame that reached far horizons: they were among the most important trade centres and a station for caravans coming from the sea and the north of the central Maghreb, heading toward the lands of the western Sudan.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'هجرةٌ واتّساع', fr: 'Migration et expansion', en: 'Migration and growth' },
          text: {
            ar: 'ونظرًا لوقوعهما على الطريق التجاري، ازدادت الهجرات إليهما، ممّا أدّى إلى اتّساعهما: فكثرت المساكن وحُفرت آبار المياه.',
            fr: 'Situées sur la route commerciale, elles virent les migrations vers elles augmenter, ce qui les fit s’étendre : les habitations se multiplièrent et l’on creusa des puits.',
            en: 'Because they lay on the trade route, migration to them increased, which made them expand: houses multiplied and water wells were dug.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'آبارٌ وسواقٍ وبساتين', fr: 'Puits, canaux et vergers', en: 'Wells, canals and orchards' },
          text: {
            ar: 'وشهدت المدينتان نشاطًا زراعيًّا ملحوظًا؛ فالآبار المحفورة كثيرة، خاصّةً في سدراتة، وكانت السواقي تمتدّ منها إلى وارجلان على امتداد اثني عشر كيلومترًا، ومنها إلى المزارع والبساتين الممتدّة على جوانب المدينة.',
            fr: 'Les deux villes connurent une activité agricole notable : les puits creusés étaient nombreux, surtout à Sedrata, et des canaux d’irrigation s’étendaient de là jusqu’à Ouargla sur douze kilomètres, puis vers les fermes et les vergers qui bordaient la ville.',
            en: 'The two towns saw notable farming activity: many wells were dug, especially in Sedrata, and irrigation canals ran from there to Warjlan over twelve kilometres, and from there to the farms and orchards along the edges of the town.',
          },
        },
      ],
    },

    // 04 — Domino chain: how trade made the towns grow (slides 3–4)
    {
      kind: 'chain',
      id: 'growth-chain',
      title: { ar: 'سلسلة الازدهار', fr: 'La chaîne de la prospérité', en: 'The chain of prosperity' },
      intro: {
        ar: 'اختر الحلقة الصحيحة في كلّ مرّة لتعرف كيف قاد موقع المدينتين إلى ازدهارهما.',
        fr: 'Choisis le bon maillon à chaque fois pour voir comment la position des deux villes mena à leur prospérité.',
        en: 'Choose the right link each time to see how the towns’ location led to their prosperity.',
      },
      image: `${IMG}/irrigation.png`,
      imageAlt: {
        ar: 'ساقيةٌ حجرية مستقيمة يجري فيها ماءٌ صافٍ بين صفوف النخيل والبساتين الخضراء نحو بيوتٍ من الطين',
        fr: 'Un canal de pierre rectiligne où coule une eau claire entre des rangées de palmiers et de jardins verts, vers des maisons de terre',
        en: 'A straight stone canal of clear water running between rows of palms and green gardens toward mud-brick houses',
      },
      start: {
        ar: 'تقع وارجلان وسدراتة على الطريق التجاري بين البحر وشمال المغرب الأوسط وبلاد السودان الغربي.',
        fr: 'Ouargla et Sedrata se trouvent sur la route commerciale entre la mer, le nord du Maghreb central et le Soudan occidental.',
        en: 'Warjlan and Sedrata lie on the trade route between the sea, the north of the central Maghreb and the western Sudan.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'فماذا صارتا بالنسبة إلى القوافل؟', fr: 'Que devinrent-elles donc pour les caravanes ?', en: 'So what did they become for the caravans?' },
          correct: { ar: 'محطّةً للقوافل ومن أهمّ المراكز التجارية', fr: 'Une étape des caravanes et l’un des plus importants centres de commerce', en: 'A caravan station and among the most important trade centres' },
          distractors: [
            { label: { ar: 'مكانًا تتجنّبه القوافل', fr: 'Un lieu que les caravanes évitaient', en: 'A place caravans avoided' }, hint: { ar: 'العكس: كانت القوافل تمرّ بهما في طريقها نحو السودان.', fr: 'Au contraire : les caravanes y passaient en route vers le Soudan.', en: 'The opposite: caravans passed through them on the way to the Sudan.' } },
            { label: { ar: 'عاصمةً للدولة الرستمية', fr: 'La capitale de l’État rustamide', en: 'The capital of the Rustamid state' }, hint: { ar: 'عاصمة الرستميين كانت تاهرت.', fr: 'La capitale des Rustamides était Tāhert.', en: 'The Rustamid capital was Tahert.' } },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'وماذا نتج عن وقوعهما على الطريق التجاري؟', fr: 'Qu’entraîna leur position sur la route commerciale ?', en: 'What came of their place on the trade route?' },
          correct: { ar: 'ازدادت الهجرات إليهما فاتّسعتا', fr: 'Les migrations vers elles augmentèrent et elles s’étendirent', en: 'Migration to them increased and they expanded' },
          distractors: [
            { label: { ar: 'هجرهما سكّانهما', fr: 'Leurs habitants les abandonnèrent', en: 'Their people abandoned them' }, hint: { ar: 'بل ازداد عدد القادمين إليهما.', fr: 'Au contraire, les arrivants se multiplièrent.', en: 'Rather, more and more people arrived.' } },
            { label: { ar: 'أُغلقت أبوابهما أمام الغرباء', fr: 'Elles fermèrent leurs portes aux étrangers', en: 'They shut their gates to strangers' }, hint: { ar: 'الدرس يذكر ازدياد الهجرات إليهما.', fr: 'La leçon parle d’une hausse des migrations vers elles.', en: 'The lesson speaks of growing migration to them.' } },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'وكيف ظهر هذا الاتّساع؟', fr: 'Comment cette expansion se voyait-elle ?', en: 'How did this growth show?' },
          correct: { ar: 'كثرت المساكن وحُفرت آبار المياه', fr: 'Les habitations se multiplièrent et l’on creusa des puits', en: 'Houses multiplied and water wells were dug' },
          distractors: [
            { label: { ar: 'بُنيت أسوارٌ عسكرية ضخمة فقط', fr: 'On bâtit seulement d’immenses remparts militaires', en: 'Only huge military walls were built' }, hint: { ar: 'الدرس يذكر المساكن والآبار.', fr: 'La leçon cite les maisons et les puits.', en: 'The lesson mentions houses and wells.' } },
            { label: { ar: 'تحوّلت الأرض إلى مراعٍ للإبل', fr: 'La terre devint un pâturage à chameaux', en: 'The land turned into camel pasture' }, hint: { ar: 'فكّر فيما يحتاجه السكّان الجدد: بيوتٌ وماء.', fr: 'Pense à ce dont les nouveaux habitants avaient besoin : maisons et eau.', en: 'Think of what new residents needed: homes and water.' } },
          ],
        },
        {
          id: 's4',
          prompt: { ar: 'ثمّ ما الذي حملته السواقي؟', fr: 'Et que firent les canaux ?', en: 'And what did the canals do?' },
          correct: { ar: 'امتدّت من سدراتة إلى وارجلان اثني عشر كيلومترًا، ثمّ إلى المزارع والبساتين', fr: 'Ils allaient de Sedrata à Ouargla sur douze kilomètres, puis vers les fermes et les vergers', en: 'They ran from Sedrata to Warjlan over twelve kilometres, then on to the farms and orchards' },
          distractors: [
            { label: { ar: 'امتدّت من وارجلان إلى البحر', fr: 'Ils allaient de Ouargla jusqu’à la mer', en: 'They ran from Warjlan to the sea' }, hint: { ar: 'السواقي محلّية: بين المدينتين ونحو البساتين.', fr: 'Les canaux étaient locaux : entre les deux villes et vers les vergers.', en: 'The canals were local: between the two towns and to the orchards.' } },
            { label: { ar: 'نقلت البضائع على القوارب', fr: 'Ils transportaient les marchandises en bateau', en: 'They carried goods by boat' }, hint: { ar: 'كانت السواقي للنشاط الزراعيّ.', fr: 'Les canaux servaient à l’agriculture.', en: 'The canals served farming.' } },
          ],
        },
      ],
      ending: {
        ar: 'موقعٌ على طريق القوافل، فهجرةٌ واتّساع، فآبارٌ وسواقٍ وبساتين: هكذا ازدهرت وارجلان وسدراتة.',
        fr: 'Une position sur la route des caravanes, puis migration et expansion, puis puits, canaux et vergers : ainsi prospérèrent Ouargla et Sedrata.',
        en: 'A place on the caravan route, then migration and growth, then wells, canals and orchards: this is how Warjlan and Sedrata flourished.',
      },
    },

    // 05 — Explorer: the oasis town (slide 3)
    {
      kind: 'explorer',
      id: 'oasis-explorer',
      title: { ar: 'استكشف الواحة', fr: 'Explore l’oasis', en: 'Explore the oasis' },
      intro: {
        ar: 'اضغط على النقاط المضيئة لتكتشف ما جعل المدينة تزدهر.',
        fr: 'Touche les points lumineux pour découvrir ce qui fit prospérer la ville.',
        en: 'Tap the glowing points to discover what made the town flourish.',
      },
      image: `${IMG}/oasis-map.png`,
      imageAlt: {
        ar: 'منظرٌ علويّ لواحةٍ صحراوية: بيوتٌ من الطين في الوسط، وبئرٌ حجرية، وسواقٍ زرقاء، وبساتين نخيل، وجِمالٌ على درب القوافل',
        fr: 'Vue d’en haut d’une oasis saharienne : des maisons de terre au centre, un puits de pierre, des canaux bleus, des palmeraies et des chameaux sur la piste des caravanes',
        en: 'Top-down view of a Saharan oasis: mud-brick houses in the centre, a stone well, blue canals, palm orchards and camels on the caravan trail',
      },
      hotspots: [
        {
          id: 'caravans',
          x: 80,
          y: 22,
          label: { ar: 'درب القوافل', fr: 'La piste des caravanes', en: 'The caravan trail' },
          description: {
            ar: 'كانت المدينتان محطّةً للقوافل القادمة من البحر وشمال المغرب الأوسط، المتّجهة نحو بلاد السودان الغربي.',
            fr: 'Les deux villes étaient l’étape des caravanes venant de la mer et du nord du Maghreb central, en route vers le Soudan occidental.',
            en: 'The two towns were a station for caravans coming from the sea and the north of the central Maghreb, heading for the western Sudan.',
          },
        },
        {
          id: 'houses',
          x: 50,
          y: 45,
          label: { ar: 'المساكن', fr: 'Les habitations', en: 'The houses' },
          description: {
            ar: 'ازدادت الهجرات إلى المدينتين فاتّسعتا، وكثرت فيهما المساكن.',
            fr: 'Les migrations augmentèrent, les deux villes s’étendirent et les habitations s’y multiplièrent.',
            en: 'Migration increased, the two towns expanded and houses multiplied.',
          },
        },
        {
          id: 'well',
          x: 41,
          y: 57,
          label: { ar: 'آبار المياه', fr: 'Les puits', en: 'The wells' },
          description: {
            ar: 'حُفرت آبار المياه بكثرة، خاصّةً في سدراتة.',
            fr: 'On creusa de nombreux puits, surtout à Sedrata.',
            en: 'Many water wells were dug, especially in Sedrata.',
          },
        },
        {
          id: 'canals',
          x: 21,
          y: 60,
          label: { ar: 'السواقي', fr: 'Les canaux', en: 'The canals' },
          description: {
            ar: 'كانت السواقي تمتدّ من سدراتة إلى وارجلان على امتداد اثني عشر كيلومترًا.',
            fr: 'Les canaux s’étendaient de Sedrata à Ouargla sur douze kilomètres.',
            en: 'The canals ran from Sedrata to Warjlan over twelve kilometres.',
          },
        },
        {
          id: 'orchards',
          x: 88,
          y: 70,
          label: { ar: 'المزارع والبساتين', fr: 'Fermes et vergers', en: 'Farms and orchards' },
          description: {
            ar: 'ومن السواقي يصل الماء إلى المزارع والبساتين الممتدّة على جوانب المدينة، فشهدت المنطقة نشاطًا زراعيًّا ملحوظًا.',
            fr: 'Des canaux, l’eau gagnait les fermes et les vergers qui bordaient la ville : la région connut une activité agricole notable.',
            en: 'From the canals, water reached the farms and orchards along the town’s edges: the region saw notable farming activity.',
          },
        },
      ],
    },

    // 06 — Reading: knowledge in Warjlan (slides 5–6)
    {
      kind: 'reading',
      id: 'reading-knowledge',
      title: { ar: 'اقرأ: النشاط العلمي في وارجلان', fr: 'Lis : l’activité savante à Ouargla', en: 'Read: scholarly life in Warjlan' },
      intro: {
        ar: 'اقرأ لماذا توجّه العلم نحو وارجلان ومن هم علماؤها، ثمّ العب اللعبتين التاليتين.',
        fr: 'Lis pourquoi le savoir se tourna vers Ouargla et qui furent ses savants, puis joue aux deux jeux suivants.',
        en: 'Read why knowledge turned toward Warjlan and who its scholars were, then play the next two games.',
      },
      image: `${IMG}/scholars-books.png`,
      imageAlt: {
        ar: 'كتبٌ مجلّدة مكدّسة ولفائف مربوطة على حصيرٍ من سعف النخيل، بجانب دواةٍ وأقلام قصب ومصباحٍ نحاسيّ مضاء',
        fr: 'Une pile de livres reliés et des rouleaux noués sur une natte de palmier, près d’un encrier, de calames et d’une lampe de cuivre allumée',
        en: 'A stack of bound books and tied scrolls on a palm-leaf mat, beside an inkwell, reed pens and a lit brass lamp',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'على الطريق من نفوسة', fr: 'Sur la route de Nafūsa', en: 'On the road from Nafusa' },
          text: {
            ar: 'مثلما كان العلم ينتقل إلى تاهرت أيّام ازدهارها، توجّه العلم والفقه أيضًا نحو وارجلان ووادي سوف، لأنّهما على الطريق المتّصل من نفوسة إلى عاصمة الدولة، وكان ممرًّا عامرًا يعبره الفقهاء والعامّة.',
            fr: 'Comme le savoir affluait vers Tāhert au temps de sa splendeur, le savoir et le droit se tournèrent aussi vers Ouargla et l’Oued Souf, situés sur la route reliant Nafūsa à la capitale de l’État : un passage animé, emprunté par les juristes comme par le peuple.',
            en: 'Just as knowledge flowed to Tahert in its golden age, knowledge and jurisprudence also turned toward Warjlan and Wadi Souf, because they lay on the road linking Nafusa to the state’s capital — a busy passage used by jurists and ordinary people alike.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'العلماء يتوجّهون إليها', fr: 'Les savants s’y rendent', en: 'Scholars head there' },
          text: {
            ar: 'كما أنّ سقوط الدولة الرستمية وجور الحكّام في بلاد التلّ دفع علماء أهل الدعوة وفقهاءها للتوجّه إليها، فازدهر العلم فيها.',
            fr: 'De plus, la chute de l’État rustamide et l’injustice des dirigeants dans le Tell poussèrent les savants et les juristes des gens de l’Appel à s’y rendre, et le savoir y fleurit.',
            en: 'Moreover, the fall of the Rustamid state and the tyranny of rulers in the Tell pushed the scholars and jurists of the People of the Call to move there, and knowledge flourished in it.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'من علماء وارجلان', fr: 'Des savants de Ouargla', en: 'Scholars of Warjlan' },
          text: {
            ar: 'فمن علماء وارجلان: أبو صالح جنّون، وأبو الربيع سليمان بن زرقون، وأبو زكرياء يحيى صاحب كتاب «سير الأئمّة»، والشيخ أبو عمّار عبد الكافي صاحب «سير الحلقة»، وأبو العبّاس صاحب «القسمة»، والعالم أبو يعقوب الوارجلاني صاحب «الدليل والبرهان».',
            fr: 'Parmi les savants de Ouargla : Abū Ṣāliḥ Jannūn, Abū ar-Rabī‘ Sulaymān ibn Zarqūn, Abū Zakariyyā’ Yaḥyā, auteur de « Siyar al-A’imma », le cheikh Abū ‘Ammār ‘Abd al-Kāfī, auteur de « Siyar al-Ḥalqa », Abū al-‘Abbās, auteur d’« al-Qisma », et le savant Abū Ya‘qūb al-Wārjlānī, auteur d’« ad-Dalīl wa-l-Burhān ».',
            en: 'Among the scholars of Warjlan: Abu Salih Jannun, Abu al-Rabi‘ Sulayman ibn Zarqun, Abu Zakariya Yahya, author of "Siyar al-A’imma", Sheikh Abu ‘Ammar ‘Abd al-Kafi, author of "Siyar al-Halqa", Abu al-‘Abbas, author of "al-Qisma", and the scholar Abu Ya‘qub al-Warjlani, author of "al-Dalil wa-l-Burhan".',
          },
        },
      ],
    },

    // 07 — Placement: each scholar and his book (slide 5)
    {
      kind: 'placement',
      id: 'scholars-books-game',
      title: { ar: 'لكلّ عالمٍ كتابه', fr: 'À chaque savant son livre', en: 'Each scholar and his book' },
      intro: {
        ar: 'اسحب اسم كلّ عالمٍ إلى الكتاب الذي ألّفه، أو اضغط الاسم ثمّ الكتاب.',
        fr: 'Glisse le nom de chaque savant sur le livre qu’il écrivit, ou touche le nom puis le livre.',
        en: 'Drag each scholar’s name onto the book he wrote, or tap the name and then the book.',
      },
      slots: [
        { id: 'siyar-aimma', label: { ar: 'سير الأئمّة', fr: 'Siyar al-A’imma', en: 'Siyar al-A’imma' } },
        { id: 'siyar-halqa', label: { ar: 'سير الحلقة', fr: 'Siyar al-Ḥalqa', en: 'Siyar al-Halqa' } },
        { id: 'qisma', label: { ar: 'القسمة', fr: 'al-Qisma', en: 'al-Qisma' } },
        { id: 'dalil', label: { ar: 'الدليل والبرهان', fr: 'ad-Dalīl wa-l-Burhān', en: 'al-Dalil wa-l-Burhan' } },
      ],
      cards: [
        {
          id: 'c-abu-zakariya',
          slotId: 'siyar-aimma',
          label: { ar: 'أبو زكرياء يحيى', fr: 'Abū Zakariyyā’ Yaḥyā', en: 'Abu Zakariya Yahya' },
          hint: { ar: 'كتابه عن سِيَر الأئمّة.', fr: 'Son livre porte sur les biographies des imams.', en: 'His book is about the lives of the imams.' },
        },
        {
          id: 'c-abu-ammar',
          slotId: 'siyar-halqa',
          label: { ar: 'الشيخ أبو عمّار عبد الكافي', fr: 'Le cheikh Abū ‘Ammār ‘Abd al-Kāfī', en: 'Sheikh Abu ‘Ammar ‘Abd al-Kafi' },
          hint: { ar: 'كتابه سِيَرٌ أيضًا، لكن عن الحلقة.', fr: 'Son livre est aussi un recueil de biographies, mais sur la Ḥalqa.', en: 'His book is also "Siyar", but about the Halqa.' },
        },
        {
          id: 'c-abu-abbas',
          slotId: 'qisma',
          label: { ar: 'أبو العبّاس', fr: 'Abū al-‘Abbās', en: 'Abu al-‘Abbas' },
          hint: { ar: 'كتابه بعنوان من كلمةٍ واحدة.', fr: 'Son livre porte un titre d’un seul mot.', en: 'His book has a one-word title.' },
        },
        {
          id: 'c-abu-yaqub',
          slotId: 'dalil',
          label: { ar: 'أبو يعقوب الوارجلاني', fr: 'Abū Ya‘qūb al-Wārjlānī', en: 'Abu Ya‘qub al-Warjlani' },
          hint: { ar: 'كتابه يجمع بين كلمتين: الدليل و…', fr: 'Son titre réunit deux mots : ad-Dalīl et…', en: 'His title joins two words: al-Dalil and…' },
        },
      ],
    },

    // 08 — Balance: what drew the scholars to Warjlan (slides 2, 5)
    {
      kind: 'balance',
      id: 'why-warjlan-balance',
      title: { ar: 'لماذا وارجلان؟', fr: 'Pourquoi Ouargla ?', en: 'Why Warjlan?' },
      intro: {
        ar: 'ضع كلّ سببٍ على كفّته: ما الذي جذب الناس والعلماء إلى وارجلان، وما الذي دفعهم إلى مغادرة الشمال؟',
        fr: 'Pose chaque raison sur son plateau : ce qui attira les gens et les savants vers Ouargla, et ce qui les poussa à quitter le Nord.',
        en: 'Place each reason on its pan: what drew people and scholars to Warjlan, and what pushed them to leave the north.',
      },
      left: { ar: 'ما جذبهم إلى وارجلان', fr: 'Ce qui les attira vers Ouargla', en: 'What drew them to Warjlan' },
      right: { ar: 'ما دفعهم من الشمال', fr: 'Ce qui les poussa hors du Nord', en: 'What pushed them from the north' },
      weights: [
        {
          id: 'w1',
          text: { ar: 'تقع على الطريق المتّصل من نفوسة إلى عاصمة الدولة', fr: 'Elle se trouve sur la route reliant Nafūsa à la capitale', en: 'It lies on the road linking Nafusa to the capital' },
          side: 'left',
          explanation: { ar: 'موقعها على ممرٍّ عامر جعل العلم يتوجّه إليها.', fr: 'Sa position sur un passage animé y attira le savoir.', en: 'Its place on a busy passage drew knowledge to it.' },
        },
        {
          id: 'w2',
          text: { ar: 'ممرٌّ عامر يعبره الفقهاء والعامّة', fr: 'Un passage animé, emprunté par les juristes et le peuple', en: 'A busy passage used by jurists and ordinary people' },
          side: 'left',
          explanation: { ar: 'كثرة العابرين جعلتها ملتقًى للعلم.', fr: 'L’affluence en fit un carrefour du savoir.', en: 'Its many travellers made it a meeting point for knowledge.' },
        },
        {
          id: 'w3',
          text: { ar: 'مأمنٌ ومحطّةٌ تجارية شهيرة', fr: 'Un refuge et une étape commerciale célèbre', en: 'A safe haven and a famous trade station' },
          side: 'left',
          explanation: { ar: 'صارت مأمنًا لمن تبقّى من الرستميين ومحطّةً للقوافل.', fr: 'Elle devint le refuge des derniers Rustamides et une étape des caravanes.', en: 'It became a haven for the remaining Rustamids and a caravan station.' },
        },
        {
          id: 'w4',
          text: { ar: 'سقوط الدولة الرستمية', fr: 'La chute de l’État rustamide', en: 'The fall of the Rustamid state' },
          side: 'right',
          explanation: { ar: 'بعد السقوط خرج من تبقّى من الأسرة الرستمية من تاهرت.', fr: 'Après la chute, les derniers Rustamides quittèrent Tāhert.', en: 'After the fall, the remaining Rustamids left Tahert.' },
        },
        {
          id: 'w5',
          text: { ar: 'جور الحكّام في بلاد التلّ', fr: 'L’injustice des dirigeants du Tell', en: 'The tyranny of rulers in the Tell' },
          side: 'right',
          explanation: { ar: 'هذا الظلم دفع العلماء والفقهاء إلى التوجّه جنوبًا.', fr: 'Cette injustice poussa savants et juristes vers le Sud.', en: 'This injustice pushed scholars and jurists south.' },
        },
        {
          id: 'w6',
          text: { ar: 'ساءت أحوال الشمال', fr: 'La situation du Nord se dégrada', en: 'Conditions in the north worsened' },
          side: 'right',
          explanation: { ar: 'فقصد أهل المغرب وارجلان وسدراتة.', fr: 'Alors les gens du Maghreb se rendirent à Ouargla et Sedrata.', en: 'So people of the Maghreb headed to Warjlan and Sedrata.' },
        },
      ],
    },

    // 09 — Reading: spreading the religion (slides 7–8)
    {
      kind: 'reading',
      id: 'reading-dawa',
      title: { ar: 'اقرأ: تبليغ الدين وجلب المنافع', fr: 'Lis : transmettre la religion, apporter des bienfaits', en: 'Read: spreading the faith and bringing benefits' },
      intro: {
        ar: 'اقرأ كيف حملت القوافل الإسلام، ثمّ رافق قافلةً نحو بلاد السودان.',
        fr: 'Lis comment les caravanes portèrent l’islam, puis accompagne une caravane vers le Soudan.',
        en: 'Read how the caravans carried Islam, then travel with a caravan toward the Sudan.',
      },
      image: `${IMG}/market-goods.png`,
      imageAlt: {
        ar: 'لفائفُ أقمشةٍ مصبوغة بألوانٍ زاهية، وسلالُ تمرٍ وتوابل، وأوانٍ نحاسية على حصيرٍ منسوج تحت مظلّة من سعف النخيل',
        fr: 'Des rouleaux d’étoffes aux couleurs vives, des corbeilles de dattes et d’épices, des pots de cuivre sur une natte tissée sous un auvent de palmes',
        en: 'Rolls of brightly dyed cloth, baskets of dates and spices, and copper pots on a woven mat under a palm-leaf awning',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'تجارةٌ تحمل رسالة', fr: 'Un commerce porteur d’un message', en: 'Trade that carried a message' },
          text: {
            ar: 'ساهمت التجارة في اعتناق أهالي السودان للدين الإسلاميّ. فقد حمل التجّار الألوان والخيرات إلى تلك البلاد، كما حملوا معهم رسالة الإسلام.',
            fr: 'Le commerce contribua à la conversion des habitants du Soudan à l’islam. Les marchands apportèrent des couleurs et des biens à ces pays, et ils portèrent aussi avec eux le message de l’islam.',
            en: 'Trade helped the people of the Sudan embrace Islam. The merchants brought colours and goods to those lands, and they also carried the message of Islam with them.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'أخلاقٌ تترك الأثر', fr: 'Un caractère qui marque', en: 'Character that left its mark' },
          text: {
            ar: 'كان التجّار متخلّقين بأخلاق الإسلام، ممّا ترك في الأهالي الأثر الطيّب. وكثيرًا ما كان يرافق القوافلَ التجارية عددٌ من الفقهاء والدعاة، الذين كانوا أيضًا سفراء الإسلام.',
            fr: 'Les marchands avaient le caractère de l’islam, ce qui laissa une bonne impression chez les habitants. Souvent, des juristes et des prédicateurs accompagnaient les caravanes : ils étaient aussi les ambassadeurs de l’islam.',
            en: 'The merchants bore the character of Islam, which left a good impression on the people. Often a number of jurists and preachers travelled with the trade caravans; they too were ambassadors of Islam.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'أفرادٌ وممالك', fr: 'Des individus et des royaumes', en: 'Individuals and kingdoms' },
          text: {
            ar: 'فأسلم الأفراد، كما أسلمت الممالك على يد أهل الاستقامة، مثل مملكة مالي.',
            fr: 'Ainsi des individus se convertirent, et des royaumes aussi, grâce aux gens de la Rectitude, comme le royaume du Mali.',
            en: 'So individuals embraced Islam, and so did whole kingdoms, through the People of Rectitude — such as the Kingdom of Mali.',
          },
        },
      ],
    },

    // 10 — Journey: the caravan to the Sudan (slides 3, 7)
    {
      kind: 'journey',
      id: 'caravan-journey',
      title: { ar: 'مع القافلة', fr: 'Avec la caravane', en: 'With the caravan' },
      intro: {
        ar: 'رافق القافلة من الشمال إلى بلاد السودان، وأجب عن سؤال كلّ محطّة لتتقدّم.',
        fr: 'Accompagne la caravane du Nord jusqu’au Soudan, et réponds à la question de chaque étape pour avancer.',
        en: 'Travel with the caravan from the north to the lands of the Sudan, answering each stop’s question to move on.',
      },
      stops: [
        {
          id: 'north',
          name: { ar: 'البحر والشمال', fr: 'La mer et le Nord', en: 'The sea and the north' },
          question: {
            ar: 'من أين كانت تأتي القوافل التي تمرّ بوارجلان وسدراتة؟',
            fr: 'D’où venaient les caravanes qui passaient par Ouargla et Sedrata ?',
            en: 'Where did the caravans passing through Warjlan and Sedrata come from?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'من البحر وشمال المغرب الأوسط', fr: 'De la mer et du nord du Maghreb central', en: 'From the sea and the north of the central Maghreb' } },
            { id: 'b', correct: false, label: { ar: 'من بلاد السودان فقط', fr: 'Du Soudan seulement', en: 'From the Sudan only' }, hint: { ar: 'السودان هو وجهة القوافل لا منطلقها.', fr: 'Le Soudan était la destination, non le point de départ.', en: 'The Sudan was the caravans’ destination, not their start.' } },
            { id: 'c', correct: false, label: { ar: 'من الحجاز', fr: 'Du Hedjaz', en: 'From the Hijaz' }, hint: { ar: 'الدرس يذكر البحر وشمال المغرب الأوسط.', fr: 'La leçon cite la mer et le nord du Maghreb central.', en: 'The lesson names the sea and the north of the central Maghreb.' } },
          ],
          reveal: {
            ar: 'كانت القوافل تنطلق من البحر وشمال المغرب الأوسط متّجهةً نحو الجنوب.',
            fr: 'Les caravanes partaient de la mer et du nord du Maghreb central, en direction du Sud.',
            en: 'The caravans set out from the sea and the north of the central Maghreb, heading south.',
          },
        },
        {
          id: 'station',
          name: { ar: 'وارجلان وسدراتة', fr: 'Ouargla et Sedrata', en: 'Warjlan and Sedrata' },
          image: `${IMG}/caravan-station.png`,
          question: {
            ar: 'ما دور وارجلان وسدراتة في هذه الرحلة؟',
            fr: 'Quel rôle jouaient Ouargla et Sedrata dans ce voyage ?',
            en: 'What role did Warjlan and Sedrata play on this journey?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'محطّةٌ للقوافل ومن أهمّ المراكز التجارية', fr: 'Une étape des caravanes et un grand centre de commerce', en: 'A caravan station and a leading trade centre' } },
            { id: 'b', correct: false, label: { ar: 'نهاية الطريق', fr: 'La fin de la route', en: 'The end of the road' }, hint: { ar: 'القوافل كانت تواصل نحو بلاد السودان الغربي.', fr: 'Les caravanes continuaient vers le Soudan occidental.', en: 'The caravans went on toward the western Sudan.' } },
            { id: 'c', correct: false, label: { ar: 'حصنٌ عسكريّ يمنع العبور', fr: 'Un fort militaire qui bloquait le passage', en: 'A military fort that blocked the way' }, hint: { ar: 'كانت مكانًا تتوقّف فيه القوافل لا تُمنع.', fr: 'C’était un lieu où les caravanes faisaient halte, non où on les arrêtait.', en: 'It was where caravans stopped to rest, not where they were blocked.' } },
          ],
          reveal: {
            ar: 'لهذا بلغت شهرة المدينتين الآفاق.',
            fr: 'C’est pourquoi la renommée des deux villes atteignit les horizons.',
            en: 'This is why the two towns’ fame reached far horizons.',
          },
        },
        {
          id: 'desert',
          name: { ar: 'في الطريق', fr: 'En chemin', en: 'On the road' },
          image: `${IMG}/sudan-caravan.png`,
          question: {
            ar: 'من كان يرافق القوافل التجارية كثيرًا؟',
            fr: 'Qui accompagnait souvent les caravanes de commerce ?',
            en: 'Who often travelled with the trade caravans?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'عددٌ من الفقهاء والدعاة', fr: 'Des juristes et des prédicateurs', en: 'A number of jurists and preachers' } },
            { id: 'b', correct: false, label: { ar: 'جيوشٌ لحماية الذهب', fr: 'Des armées pour protéger l’or', en: 'Armies guarding the gold' }, hint: { ar: 'الدرس يذكر الفقهاء والدعاة سفراء الإسلام.', fr: 'La leçon cite les juristes et prédicateurs, ambassadeurs de l’islam.', en: 'The lesson names jurists and preachers, ambassadors of Islam.' } },
            { id: 'c', correct: false, label: { ar: 'لا أحد غير التجّار', fr: 'Personne d’autre que les marchands', en: 'No one but the merchants' }, hint: { ar: 'كان معهم من يحمل العلم والدعوة.', fr: 'Des porteurs du savoir et de l’Appel étaient avec eux.', en: 'People carrying knowledge and the Call went with them.' } },
          ],
          reveal: {
            ar: 'كان هؤلاء الفقهاء والدعاة سفراءَ الإسلام.',
            fr: 'Ces juristes et prédicateurs étaient les ambassadeurs de l’islam.',
            en: 'These jurists and preachers were ambassadors of Islam.',
          },
        },
        {
          id: 'sudan',
          name: { ar: 'بلاد السودان', fr: 'Le Soudan', en: 'The Sudan' },
          image: `${IMG}/market-goods.png`,
          question: {
            ar: 'ماذا حمل التجّار إلى بلاد السودان؟',
            fr: 'Qu’apportèrent les marchands au Soudan ?',
            en: 'What did the merchants bring to the lands of the Sudan?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'الألوان والخيرات، ورسالة الإسلام', fr: 'Des couleurs et des biens, et le message de l’islam', en: 'Colours and goods, and the message of Islam' } },
            { id: 'b', correct: false, label: { ar: 'البضائع فقط', fr: 'Seulement des marchandises', en: 'Only goods' }, hint: { ar: 'حملوا مع البضائع شيئًا أعظم.', fr: 'Avec les marchandises, ils portaient quelque chose de plus grand.', en: 'Along with goods, they carried something greater.' } },
            { id: 'c', correct: false, label: { ar: 'السلاح لفتح البلاد', fr: 'Des armes pour conquérir le pays', en: 'Weapons to conquer the land' }, hint: { ar: 'انتشر الإسلام هناك بالتجارة والأخلاق.', fr: 'L’islam s’y répandit par le commerce et le bon caractère.', en: 'Islam spread there through trade and good character.' } },
          ],
          reveal: {
            ar: 'وكانوا متخلّقين بأخلاق الإسلام، فتركوا في الأهالي الأثر الطيّب.',
            fr: 'Ils avaient le caractère de l’islam et laissèrent une bonne impression chez les habitants.',
            en: 'They bore the character of Islam and left a good impression on the people.',
          },
        },
        {
          id: 'mali',
          name: { ar: 'مملكة مالي', fr: 'Le royaume du Mali', en: 'The Kingdom of Mali' },
          question: {
            ar: 'من أسلم على يد أهل الاستقامة في تلك البلاد؟',
            fr: 'Qui se convertit grâce aux gens de la Rectitude dans ces pays ?',
            en: 'Who embraced Islam through the People of Rectitude in those lands?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'الأفراد والممالك، مثل مملكة مالي', fr: 'Des individus et des royaumes, comme le Mali', en: 'Individuals and kingdoms, such as Mali' } },
            { id: 'b', correct: false, label: { ar: 'الأفراد فقط', fr: 'Seulement des individus', en: 'Only individuals' }, hint: { ar: 'بل أسلمت ممالك كاملة أيضًا.', fr: 'Des royaumes entiers se convertirent aussi.', en: 'Whole kingdoms embraced Islam too.' } },
            { id: 'c', correct: false, label: { ar: 'لم يُسلم أحد', fr: 'Personne', en: 'No one' }, hint: { ar: 'ساهمت التجارة في اعتناق أهالي السودان للإسلام.', fr: 'Le commerce contribua à la conversion des habitants du Soudan.', en: 'Trade helped the people of the Sudan embrace Islam.' } },
          ],
          reveal: {
            ar: 'أسلم الأفراد كما أسلمت الممالك على يد أهل الاستقامة، مثل مملكة مالي.',
            fr: 'Des individus et des royaumes se convertirent grâce aux gens de la Rectitude, comme le royaume du Mali.',
            en: 'Individuals and kingdoms alike embraced Islam through the People of Rectitude, such as the Kingdom of Mali.',
          },
        },
      ],
      arrival: {
        ar: 'من البحر إلى وارجلان وسدراتة، ثمّ عبر الصحراء إلى بلاد السودان: حملت القوافل الخيرات، وحمل أهل الاستقامة الإسلام.',
        fr: 'De la mer à Ouargla et Sedrata, puis à travers le désert jusqu’au Soudan : les caravanes portaient des biens, et les gens de la Rectitude portaient l’islam.',
        en: 'From the sea to Warjlan and Sedrata, then across the desert to the Sudan: the caravans carried goods, and the People of Rectitude carried Islam.',
      },
    },

    // 11 — Reading: the destruction of Sedrata (slides 9–10)
    {
      kind: 'reading',
      id: 'reading-destruction',
      title: { ar: 'اقرأ: خراب سدراتة', fr: 'Lis : la destruction de Sedrata', en: 'Read: the destruction of Sedrata' },
      intro: {
        ar: 'اقرأ ما حلّ بسدراتة، ثمّ فرّق بين المدينتين في اللعبة التالية.',
        fr: 'Lis ce qui arriva à Sedrata, puis distingue les deux villes dans le jeu suivant.',
        en: 'Read what happened to Sedrata, then tell the two towns apart in the next game.',
      },
      image: `${IMG}/sedrata-ruins.png`,
      imageAlt: {
        ar: 'قوسٌ وجدرانٌ مهدّمة من الطين تبرز من كثبان رملية ذهبية تحت سماءٍ باهتة',
        fr: 'Une arche et des murs de terre en ruine émergeant de dunes dorées sous un ciel pâle',
        en: 'A ruined mud-brick arch and walls emerging from golden dunes under a pale sky',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'تجارةٌ تجلب الجيوش', fr: 'Un commerce qui attire les armées', en: 'Trade that drew armies' },
          text: {
            ar: 'هذه التجارة التي أتت بالأرباح الكثيرة على وارجلان وسدراتة، جلبت جيوشًا لا لتحميها أو لتُعينها على الدعوة إلى الإسلام، بل لتقضي عليها وعلى حضارتها، ولتستولي على طرق التجارة وعلى مصادر الذهب.',
            fr: 'Ce commerce, qui apporta de grands profits à Ouargla et Sedrata, attira aussi des armées — non pour les protéger ni pour les aider à appeler à l’islam, mais pour les anéantir, elles et leur civilisation, et s’emparer des routes commerciales et des sources de l’or.',
            en: 'This trade, which brought great profits to Warjlan and Sedrata, also drew armies — not to protect them or help them call people to Islam, but to destroy them and their civilisation, and to seize the trade routes and the sources of gold.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'بريقٌ يجذب الطامعين', fr: 'Un éclat qui attire les convoitises', en: 'A splendour that drew the greedy' },
          text: {
            ar: 'فقد تعرّضت المنطقة لهجوم يحيى بن إسحاق الميورقي، حين اجتذبه بريق سدراتة: بعمرانها وزخارفها واستعراض أموالها، فخُرّبت ونُهبت أموالها سنة 626 هـ (1228 م).',
            fr: 'La région fut attaquée par Yaḥyā ibn Isḥāq al-Mayūrqī, attiré par l’éclat de Sedrata — ses constructions, ses ornements et l’étalage de ses richesses. Elle fut détruite et ses biens pillés en 626 H (1228 apr. J.-C.).',
            en: 'The region was attacked by Yahya ibn Ishaq al-Mayurqi, who was drawn by Sedrata’s splendour — its buildings, its ornaments and the display of its wealth. It was destroyed and its wealth plundered in 626 AH (1228 CE).',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'وارجلان تبقى', fr: 'Ouargla demeure', en: 'Warjlan endures' },
          text: {
            ar: 'وبقيت وارجلان على بساطتها، محصّنةً بالعلماء، دون تخريب.',
            fr: 'Ouargla, elle, resta dans sa simplicité, protégée par ses savants, et ne fut pas détruite.',
            en: 'Warjlan, meanwhile, remained in its simplicity, protected by its scholars, and was spared destruction.',
          },
        },
      ],
    },

    // 12 — Swipe: Sedrata or Warjlan? (slides 3, 5, 9)
    {
      kind: 'swipe',
      id: 'two-cities',
      title: { ar: 'سدراتة أم وارجلان؟', fr: 'Sedrata ou Ouargla ?', en: 'Sedrata or Warjlan?' },
      intro: {
        ar: 'اسحب كلّ بطاقة إلى المدينة التي تصفها.',
        fr: 'Fais glisser chaque carte vers la ville qu’elle décrit.',
        en: 'Swipe each card toward the town it describes.',
      },
      left: {
        label: { ar: 'سدراتة', fr: 'Sedrata', en: 'Sedrata' },
        tag: { ar: 'سدراتة', fr: 'Sedrata', en: 'Sedrata' },
      },
      right: {
        label: { ar: 'وارجلان', fr: 'Ouargla', en: 'Warjlan' },
        tag: { ar: 'وارجلان', fr: 'Ouargla', en: 'Warjlan' },
      },
      cards: [
        {
          id: 'wells',
          who: { ar: 'آبارٌ كثيرة', fr: 'De nombreux puits', en: 'Many wells' },
          deed: { ar: 'كثرت فيها الآبار المحفورة، ومنها تمتدّ السواقي اثني عشر كيلومترًا', fr: 'Les puits y étaient très nombreux, et de là partaient des canaux sur douze kilomètres', en: 'Wells were especially many here, and canals ran from here for twelve kilometres' },
          image: `${IMG}/irrigation.png`,
          side: 'left',
          explanation: { ar: 'الآبار كثيرة خاصّةً في سدراتة، والسواقي تمتدّ منها إلى وارجلان.', fr: 'Les puits étaient nombreux surtout à Sedrata, et les canaux allaient de là à Ouargla.', en: 'Wells were many especially in Sedrata, and canals ran from there to Warjlan.' },
        },
        {
          id: 'scholars',
          who: { ar: 'مدينة العلماء', fr: 'La ville des savants', en: 'The town of scholars' },
          deed: { ar: 'من علمائها أبو يعقوب صاحب «الدليل والبرهان»', fr: 'Parmi ses savants, Abū Ya‘qūb, auteur d’« ad-Dalīl wa-l-Burhān »', en: 'Among its scholars was Abu Ya‘qub, author of "al-Dalil wa-l-Burhan"' },
          image: `${IMG}/scholars-books.png`,
          side: 'right',
          explanation: { ar: 'هو أبو يعقوب الوارجلاني، من علماء وارجلان.', fr: 'C’est Abū Ya‘qūb al-Wārjlānī, l’un des savants de Ouargla.', en: 'This is Abu Ya‘qub al-Warjlani, one of the scholars of Warjlan.' },
        },
        {
          id: 'splendour',
          who: { ar: 'عمرانٌ وزخارف', fr: 'Constructions et ornements', en: 'Buildings and ornaments' },
          deed: { ar: 'اجتذب بريقُها وعمرانها واستعراض أموالها أنظار الطامعين', fr: 'Son éclat, ses constructions et l’étalage de ses richesses attirèrent les convoitises', en: 'Its splendour, buildings and display of wealth caught the eye of the greedy' },
          side: 'left',
          explanation: { ar: 'هذا البريق هو ما اجتذب يحيى بن إسحاق الميورقي إلى سدراتة.', fr: 'C’est cet éclat qui attira Yaḥyā ibn Isḥāq al-Mayūrqī vers Sedrata.', en: 'This splendour is what drew Yahya ibn Ishaq al-Mayurqi to Sedrata.' },
        },
        {
          id: 'ruined',
          who: { ar: 'سنة 626 هـ', fr: 'L’an 626 H', en: 'The year 626 AH' },
          deed: { ar: 'خُرّبت ونُهبت أموالها', fr: 'Elle fut détruite et ses biens pillés', en: 'It was destroyed and its wealth plundered' },
          image: `${IMG}/sedrata-ruins.png`,
          side: 'left',
          explanation: { ar: 'خُرّبت سدراتة ونُهبت سنة 626 هـ (1228 م).', fr: 'Sedrata fut détruite et pillée en 626 H (1228).', en: 'Sedrata was destroyed and plundered in 626 AH (1228 CE).' },
        },
        {
          id: 'simple',
          who: { ar: 'البساطة', fr: 'La simplicité', en: 'Simplicity' },
          deed: { ar: 'بقيت على بساطتها، محصّنةً بالعلماء، دون تخريب', fr: 'Elle resta simple, protégée par ses savants, sans être détruite', en: 'It stayed simple, protected by its scholars, and was not destroyed' },
          image: `${IMG}/ouargla-simple.png`,
          side: 'right',
          explanation: { ar: 'بقيت وارجلان على بساطتها محصّنةً بالعلماء.', fr: 'Ouargla resta dans sa simplicité, protégée par ses savants.', en: 'Warjlan remained in its simplicity, protected by its scholars.' },
        },
        {
          id: 'route',
          who: { ar: 'طريق نفوسة', fr: 'La route de Nafūsa', en: 'The Nafusa road' },
          deed: { ar: 'توجّه إليها العلم مع وادي سوف لأنّها على الطريق من نفوسة إلى العاصمة', fr: 'Le savoir s’y tourna, avec l’Oued Souf, car elle était sur la route de Nafūsa à la capitale', en: 'Knowledge turned to it, with Wadi Souf, because it lay on the road from Nafusa to the capital' },
          side: 'right',
          explanation: { ar: 'هذا ما ذكره الدرس عن النشاط العلمي في وارجلان.', fr: 'C’est ce que la leçon dit de l’activité savante à Ouargla.', en: 'This is what the lesson says about scholarly life in Warjlan.' },
        },
      ],
    },

    // 13 — Blitz
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
          text: { ar: 'انتقل من تبقّى من الأسرة الرستمية إلى وارجلان وسدراتة بعد الخروج من تاهرت.', fr: 'Les derniers Rustamides s’installèrent à Ouargla et Sedrata après avoir quitté Tāhert.', en: 'The remaining Rustamids moved to Warjlan and Sedrata after leaving Tahert.' },
          answer: true,
          explanation: { ar: 'صحيح، صارت المنطقة مأمنًا لهم.', fr: 'Vrai, la région devint leur refuge.', en: 'True — the region became their safe haven.' },
        },
        {
          id: 'b2',
          text: { ar: 'كانت القوافل المارّة بوارجلان متّجهةً نحو الحجاز.', fr: 'Les caravanes passant par Ouargla allaient vers le Hedjaz.', en: 'The caravans passing through Warjlan were heading for the Hijaz.' },
          answer: false,
          explanation: { ar: 'خطأ، كانت متّجهةً نحو بلاد السودان الغربي.', fr: 'Faux, elles allaient vers le Soudan occidental.', en: 'False — they were heading for the western Sudan.' },
        },
        {
          id: 'b3',
          text: { ar: 'امتدّت السواقي من سدراتة إلى وارجلان على اثني عشر كيلومترًا.', fr: 'Les canaux allaient de Sedrata à Ouargla sur douze kilomètres.', en: 'Canals ran from Sedrata to Warjlan over twelve kilometres.' },
          answer: true,
          explanation: { ar: 'صحيح، ومنها إلى المزارع والبساتين.', fr: 'Vrai, puis de là vers les fermes et les vergers.', en: 'True — and from there to the farms and orchards.' },
        },
        {
          id: 'b4',
          text: { ar: 'أبو العبّاس هو صاحب كتاب «سير الأئمّة».', fr: 'Abū al-‘Abbās est l’auteur de « Siyar al-A’imma ».', en: 'Abu al-‘Abbas is the author of "Siyar al-A’imma".' },
          answer: false,
          explanation: { ar: 'خطأ، أبو العبّاس صاحب «القسمة»، و«سير الأئمّة» لأبي زكرياء يحيى.', fr: 'Faux, Abū al-‘Abbās a écrit « al-Qisma » ; « Siyar al-A’imma » est d’Abū Zakariyyā’ Yaḥyā.', en: 'False — Abu al-‘Abbas wrote "al-Qisma"; "Siyar al-A’imma" is by Abu Zakariya Yahya.' },
        },
        {
          id: 'b5',
          text: { ar: 'أسلمت مملكة مالي على يد أهل الاستقامة.', fr: 'Le royaume du Mali se convertit grâce aux gens de la Rectitude.', en: 'The Kingdom of Mali embraced Islam through the People of Rectitude.' },
          answer: true,
          explanation: { ar: 'صحيح، أسلم الأفراد كما أسلمت الممالك.', fr: 'Vrai, des individus comme des royaumes se convertirent.', en: 'True — individuals and kingdoms alike embraced Islam.' },
        },
        {
          id: 'b6',
          text: { ar: 'جاءت الجيوش إلى سدراتة لتحميها وتعينها على الدعوة.', fr: 'Les armées vinrent à Sedrata pour la protéger et l’aider dans l’Appel.', en: 'Armies came to Sedrata to protect it and help it spread the Call.' },
          answer: false,
          explanation: { ar: 'خطأ، جاءت لتقضي عليها وتستولي على طرق التجارة ومصادر الذهب.', fr: 'Faux, elles vinrent pour l’anéantir et s’emparer des routes et de l’or.', en: 'False — they came to destroy it and seize the trade routes and the gold.' },
        },
      ],
    },

    // 14 — Quiz
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'اختبر معلوماتك', fr: 'Teste tes connaissances', en: 'Test your knowledge' },
      intro: {
        ar: 'خمسة أسئلة متنوّعة عن الدرس.',
        fr: 'Cinq questions variées sur la leçon.',
        en: 'Five varied questions on the lesson.',
      },
      questions: [
        {
          id: 'q1',
          type: 'mcq',
          question: { ar: 'لماذا توجّه العلم نحو وارجلان ووادي سوف؟', fr: 'Pourquoi le savoir se tourna-t-il vers Ouargla et l’Oued Souf ?', en: 'Why did knowledge turn toward Warjlan and Wadi Souf?' },
          options: [
            { id: 'a', label: { ar: 'لأنّهما على الطريق المتّصل من نفوسة إلى عاصمة الدولة', fr: 'Parce qu’elles étaient sur la route reliant Nafūsa à la capitale', en: 'Because they lay on the road linking Nafusa to the capital' } },
            { id: 'b', label: { ar: 'لأنّهما على شاطئ البحر', fr: 'Parce qu’elles étaient au bord de la mer', en: 'Because they were on the seashore' } },
            { id: 'c', label: { ar: 'لأنّهما بعيدتان عن كلّ الطرق', fr: 'Parce qu’elles étaient loin de toute route', en: 'Because they were far from every road' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'كان ممرًّا عامرًا يعبره الفقهاء والعامّة، ثمّ دفع سقوط الرستميين وجور حكّام التلّ العلماء إليها.',
            fr: 'C’était un passage animé de juristes et de gens du peuple ; puis la chute des Rustamides et l’injustice du Tell y poussèrent les savants.',
            en: 'It was a busy passage for jurists and ordinary people; then the Rustamid fall and the tyranny in the Tell pushed scholars there.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'بقيت وارجلان على بساطتها محصّنةً بالعلماء فلم تُخرَّب.', fr: 'Ouargla resta simple, protégée par ses savants, et ne fut pas détruite.', en: 'Warjlan stayed simple, protected by its scholars, and was not destroyed.' },
          answer: true,
          explanation: {
            ar: 'صحيح، بينما خُرّبت سدراتة سنة 626 هـ.',
            fr: 'Vrai, alors que Sedrata fut détruite en 626 H.',
            en: 'True — while Sedrata was destroyed in 626 AH.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ عالمٍ بكتابه', fr: 'Relie chaque savant à son livre', en: 'Match each scholar to his book' },
          pairs: [
            { id: 'p1', left: { ar: 'أبو زكرياء يحيى', fr: 'Abū Zakariyyā’ Yaḥyā', en: 'Abu Zakariya Yahya' }, right: { ar: 'سير الأئمّة', fr: 'Siyar al-A’imma', en: 'Siyar al-A’imma' } },
            { id: 'p2', left: { ar: 'أبو عمّار عبد الكافي', fr: 'Abū ‘Ammār ‘Abd al-Kāfī', en: 'Abu ‘Ammar ‘Abd al-Kafi' }, right: { ar: 'سير الحلقة', fr: 'Siyar al-Ḥalqa', en: 'Siyar al-Halqa' } },
            { id: 'p3', left: { ar: 'أبو العبّاس', fr: 'Abū al-‘Abbās', en: 'Abu al-‘Abbas' }, right: { ar: 'القسمة', fr: 'al-Qisma', en: 'al-Qisma' } },
            { id: 'p4', left: { ar: 'أبو يعقوب الوارجلاني', fr: 'Abū Ya‘qūb al-Wārjlānī', en: 'Abu Ya‘qub al-Warjlani' }, right: { ar: 'الدليل والبرهان', fr: 'ad-Dalīl wa-l-Burhān', en: 'al-Dalil wa-l-Burhan' } },
          ],
          explanation: {
            ar: 'هؤلاء من علماء وارجلان الذين ازدهر بهم العلم فيها.',
            fr: 'Ce sont des savants de Ouargla grâce auxquels le savoir y fleurit.',
            en: 'These are scholars of Warjlan through whom knowledge flourished there.',
          },
        },
        {
          id: 'q4',
          type: 'visual',
          question: { ar: 'أيّ صورةٍ تمثّل ما حلّ بسدراتة سنة 626 هـ؟', fr: 'Quelle image représente ce qui arriva à Sedrata en 626 H ?', en: 'Which image shows what happened to Sedrata in 626 AH?' },
          options: [
            { id: 'ruins', image: `${IMG}/sedrata-ruins.png`, label: { ar: 'أطلالٌ تحت الرمال', fr: 'Des ruines sous le sable', en: 'Ruins under the sand' } },
            { id: 'canal', image: `${IMG}/irrigation.png`, label: { ar: 'ساقيةٌ بين البساتين', fr: 'Un canal entre les vergers', en: 'A canal among orchards' } },
            { id: 'town', image: `${IMG}/ouargla-simple.png`, label: { ar: 'مدينةٌ بسيطة آمنة', fr: 'Une ville simple et sûre', en: 'A simple, safe town' } },
          ],
          correctId: 'ruins',
          explanation: {
            ar: 'خُرّبت سدراتة ونُهبت أموالها، واليوم تُعرف بأنّها مدينةٌ تحت الرمال.',
            fr: 'Sedrata fut détruite et pillée ; on la connaît aujourd’hui comme une ville sous le sable.',
            en: 'Sedrata was destroyed and plundered; today it is known as a town under the sand.',
          },
        },
        {
          id: 'q5',
          type: 'ordering',
          question: { ar: 'رتّب مراحل قصّة المدينتين', fr: 'Ordonne les étapes de l’histoire des deux villes', en: 'Put the stages of the two towns’ story in order' },
          items: [
            { id: 'o1', label: { ar: 'تطوّرتا في العهد الرستمي', fr: 'Elles se développent à l’époque rustamide', en: 'They develop in the Rustamid era' } },
            { id: 'o2', label: { ar: 'صارتا مأمنًا لمن تبقّى من الأسرة الرستمية بعد تاهرت', fr: 'Elles deviennent le refuge des derniers Rustamides après Tāhert', en: 'They become a haven for the remaining Rustamids after Tahert' } },
            { id: 'o3', label: { ar: 'توجّه إليهما العلماء بعد سقوط الدولة الرستمية', fr: 'Les savants s’y rendent après la chute de l’État rustamide', en: 'Scholars move there after the Rustamid state falls' } },
            { id: 'o4', label: { ar: 'خراب سدراتة سنة 626 هـ', fr: 'Destruction de Sedrata en 626 H', en: 'Sedrata is destroyed in 626 AH' } },
          ],
          explanation: {
            ar: 'تطوّرٌ في العهد الرستمي، ثمّ مأمنٌ بعد تاهرت، ثمّ ازدهار العلم، ثمّ خراب سدراتة سنة 626 هـ.',
            fr: 'Essor sous les Rustamides, refuge après Tāhert, floraison du savoir, puis destruction de Sedrata en 626 H.',
            en: 'Growth under the Rustamids, a haven after Tahert, a flowering of knowledge, then Sedrata’s destruction in 626 AH.',
          },
        },
      ],
    },

    // 15 — Values
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'ماذا نتعلّم من هذا الدرس؟', fr: 'Que retenir de cette leçon ?', en: 'What do we learn from this lesson?' },
      prompt: {
        ar: 'ما الذي ترك الأثر الطيّب في أهالي السودان حتّى أسلموا؟',
        fr: 'Qu’est-ce qui laissa une bonne impression chez les habitants du Soudan, au point qu’ils se convertirent ?',
        en: 'What left such a good impression on the people of the Sudan that they embraced Islam?',
      },
      choices: [
        {
          id: 'character',
          isCorrect: true,
          label: { ar: 'أخلاق التجّار المتخلّقين بأخلاق الإسلام', fr: 'Le caractère des marchands, fidèle à l’islam', en: 'The merchants’ character, true to Islam' },
          feedback: { ar: 'صحيح — كانت أخلاقهم دعوةً قبل كلامهم، ومعهم فقهاء ودعاة سفراء للإسلام.', fr: 'Exact — leur caractère était un appel avant leurs paroles, et des juristes et prédicateurs les accompagnaient.', en: 'Correct — their character was a call before their words, with jurists and preachers travelling alongside.' },
        },
        {
          id: 'force',
          isCorrect: false,
          label: { ar: 'قوّة الجيوش', fr: 'La force des armées', en: 'The strength of armies' },
          feedback: { ar: 'لا — الجيوش في الدرس جاءت لتخرّب لا لتدعو.', fr: 'Non — dans la leçon, les armées vinrent détruire, non appeler.', en: 'No — in the lesson, armies came to destroy, not to call.' },
        },
        {
          id: 'wealth',
          isCorrect: false,
          label: { ar: 'استعراض الأموال والزخارف', fr: 'L’étalage des richesses et des ornements', en: 'Displaying wealth and ornaments' },
          feedback: { ar: 'لا — استعراض الأموال هو ما جذب الطامعين إلى سدراتة.', fr: 'Non — c’est l’étalage des richesses qui attira les convoitises sur Sedrata.', en: 'No — displaying wealth is what drew the greedy to Sedrata.' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من هذا الدرس — اقلب كلّ بطاقة', fr: 'Des valeurs de cette leçon — retourne chaque carte', en: 'Values from this lesson — flip each card' },
      values: [
        {
          id: 'good-character',
          value: { ar: 'الدعوة بالأخلاق', fr: 'Appeler par le bon caractère', en: 'Calling through character' },
          evidence: { ar: 'تخلّق التجّار بأخلاق الإسلام فتركوا الأثر الطيّب، فأسلم الأفراد والممالك مثل مالي.', fr: 'Les marchands avaient le caractère de l’islam et laissèrent une bonne impression : individus et royaumes, comme le Mali, se convertirent.', en: 'The merchants bore the character of Islam and left a good impression; individuals and kingdoms such as Mali embraced Islam.' },
        },
        {
          id: 'simplicity',
          value: { ar: 'البساطة', fr: 'La simplicité', en: 'Simplicity' },
          evidence: { ar: 'جذب استعراضُ الأموال الطامعين إلى سدراتة، وبقيت وارجلان على بساطتها دون تخريب.', fr: 'L’étalage des richesses attira les convoitises sur Sedrata, tandis que Ouargla, restée simple, fut épargnée.', en: 'Displaying wealth drew the greedy to Sedrata, while Warjlan stayed simple and was spared.' },
        },
        {
          id: 'scholars',
          value: { ar: 'العلماء حصنٌ للأمّة', fr: 'Les savants, rempart de la communauté', en: 'Scholars protect the community' },
          evidence: { ar: 'بقيت وارجلان محصّنةً بالعلماء.', fr: 'Ouargla resta protégée par ses savants.', en: 'Warjlan remained protected by its scholars.' },
        },
        {
          id: 'effort',
          value: { ar: 'العمل والإعمار', fr: 'Le travail et la mise en valeur', en: 'Work and building' },
          evidence: { ar: 'حُفرت الآبار وامتدّت السواقي اثني عشر كيلومترًا إلى المزارع والبساتين.', fr: 'On creusa des puits et des canaux s’étendirent sur douze kilomètres vers les fermes et les vergers.', en: 'Wells were dug and canals stretched twelve kilometres to the farms and orchards.' },
        },
      ],
    },

    // 16 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'تميّزت وارجلان وسدراتة بموقعهما على طريق القوافل، فصارتا مأمنًا ومركزًا تجاريًّا وزراعيًّا ومنارةً للعلم، وحمل أهل الاستقامة منهما الإسلام إلى بلاد السودان. لكنّ بريق سدراتة جذب الطامعين فخُرّبت سنة 626 هـ، وبقيت وارجلان على بساطتها محصّنةً بالعلماء.',
        fr: 'Ouargla et Sedrata se distinguaient par leur position sur la route des caravanes : elles devinrent un refuge, un centre de commerce et d’agriculture et un phare du savoir, et les gens de la Rectitude portèrent de là l’islam au Soudan. Mais l’éclat de Sedrata attira les convoitises et elle fut détruite en 626 H, tandis que Ouargla resta simple, protégée par ses savants.',
        en: 'Warjlan and Sedrata stood out for their place on the caravan route: they became a haven, a centre of trade and farming and a beacon of knowledge, and from there the People of Rectitude carried Islam to the Sudan. But Sedrata’s splendour drew the greedy and it was destroyed in 626 AH, while Warjlan stayed simple, protected by its scholars.',
      },
      learned: [
        {
          ar: 'صارت وارجلان وسدراتة مأمنًا لمن تبقّى من الأسرة الرستمية، وقصدهما أهل المغرب لمّا ساءت أحوال الشمال.',
          fr: 'Ouargla et Sedrata devinrent le refuge des derniers Rustamides, et les gens du Maghreb s’y rendirent quand le Nord se dégrada.',
          en: 'Warjlan and Sedrata became a haven for the remaining Rustamids, and people of the Maghreb went there when the north worsened.',
        },
        {
          ar: 'كانتا محطّةً للقوافل نحو بلاد السودان الغربي، فكثرت المساكن والآبار، وامتدّت السواقي اثني عشر كيلومترًا.',
          fr: 'Elles étaient l’étape des caravanes vers le Soudan occidental : maisons et puits se multiplièrent, et les canaux s’étendirent sur douze kilomètres.',
          en: 'They were a caravan station toward the western Sudan: houses and wells multiplied, and canals stretched twelve kilometres.',
        },
        {
          ar: 'ازدهر العلم في وارجلان بعلماء مثل أبي زكرياء يحيى وأبي عمّار عبد الكافي وأبي يعقوب الوارجلاني.',
          fr: 'Le savoir fleurit à Ouargla avec des savants comme Abū Zakariyyā’ Yaḥyā, Abū ‘Ammār ‘Abd al-Kāfī et Abū Ya‘qūb al-Wārjlānī.',
          en: 'Knowledge flourished in Warjlan with scholars such as Abu Zakariya Yahya, Abu ‘Ammar ‘Abd al-Kafi and Abu Ya‘qub al-Warjlani.',
        },
        {
          ar: 'حمل التجّار والدعاة الإسلام بأخلاقهم إلى بلاد السودان، فأسلمت ممالك مثل مالي.',
          fr: 'Marchands et prédicateurs portèrent l’islam au Soudan par leur caractère, et des royaumes comme le Mali se convertirent.',
          en: 'Merchants and preachers carried Islam to the Sudan through their character, and kingdoms such as Mali embraced it.',
        },
        {
          ar: 'خرّب يحيى بن إسحاق الميورقي سدراتة سنة 626 هـ، وبقيت وارجلان محصّنةً بالعلماء.',
          fr: 'Yaḥyā ibn Isḥāq al-Mayūrqī détruisit Sedrata en 626 H, et Ouargla resta protégée par ses savants.',
          en: 'Yahya ibn Ishaq al-Mayurqi destroyed Sedrata in 626 AH, and Warjlan remained protected by its scholars.',
        },
      ],
    },
  ],
}
