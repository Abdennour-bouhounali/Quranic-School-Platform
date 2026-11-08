import type { Lesson } from '../../types'

// Source: Ibadite History textbook Grade 3 (Other ressources/Ibadite_History_S5.pdf), "الدرس الثلاثون: أهل الاستقامة بين القرنين 4 و5 هـ", slides 2–9 (pages 23–31).
//   Slide 2 — تغيّر أحوال المغرب: معاناة سكان المغرب الأوسط من العبيديين الذين لم يرغبوا في مشاركة الحكم، فتوسّعوا تدريجيًّا محاربين القبائل،
//             فعمّ الخوف وقلّ الإنتاج؛ قول أبي زكريا فصيل (القرن 4 هـ): «إذا قحطت الأرض تنال الجنة بقبضة من طعام، وإذا قحط الإسلام تنال الجنة بكلمة حق تقال…».
//   Slide 3 — ثورة أبي يزيد: أبو يزيد مخلد بن كيداد النكّاري، انطلق من توزر على حماره سنة 331 هـ، دخل مدن الأوراس وغرب إفريقية وأسقط قبيلة كتامة، حاصر المهدية،
//             كاد يسقط دولتهم لولا جماعة من أصحابه لا خير فيهم انضمّوا للنهب والفساد، فلم يُنكر عليهم، فتخلّت عنه القبائل، انهزم سنة 334 هـ،
//             وتبعه الجيش، وخاصّة من وقف معه من أهل الدعوة المتحصّنين في البوادي والجبال المنيعة.
//   Slide 4 — مقتل الشيخ أبي القاسم الحامي: يزيد بن مخلد سنة 357 هـ من علماء أهل الدعوة بالحامة، فعزم الشيخان أبو خزر يغلا بن زلتاف وأبو نوح سعيد بن زنغيل على مواجهة العبيديين،
//             مواردهم محدودة فأرسلوا يستنفرون، ونصحهم مشايخ آخرون بعدم الثأر والثورة دون القوة اللازمة، لكنهما سارا إلى بغاي دون انتظار العون؛ معركة كبيرة سنة 358 هـ وخسر أهل الدعوة جمعًا كبيرًا من طلبتهم.
//   Slide 5 — الشيخان وإنهاء الصراع: الأمير الشيعي يبحث عنهما، قبض على أبي نوح فاحترمه وقرّبه لهيبته وقوة عقله وفصاحته، اشترط أبو نوح الأمان لأبي خزر فأعطى الأمان في كامل البلاد،
//             سلّم أبو خزر نفسه وقفًا للدماء وبقيا عنده؛ عند قرار الرحيل إلى مصر سنة 361 هـ استخلف الزيريين على المغرب؛ رافق أبو خزر العبيديين ليبقي الأمان لأهل الدعوة؛ وانتقل أبو نوح إلى وارجلان لإحياء الحلقات العلمية ومواجهة البدع.
// Every fact below is taken from those slides; nothing is added from outside them.
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): scenes are told through architecture, objects, animals and landscape.

const IMG = '/images/lessons/ahl-istiqama-4-5'

export const ahlIstiqama45: Lesson = {
  id: 'history-ibadi-g3-s1-l3',
  gradeId: 'history-ibadi-g3',
  moduleId: 'history-ibadi-g3',
  semesterId: 'history-ibadi-g3-s1',
  order: 3,
  status: 'published',
  estimatedMinutes: 40,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'قريةٌ جبلية محصّنة من الطين منحوتة في صخور المغرب عند الغروب، وفي الأسفل درب قوافلَ طويل تحت سماءٍ مشتعلة',
    fr: 'Un village de montagne fortifié en pisé, creusé dans les rochers du Maghreb au coucher du soleil, une longue piste de caravanes en contrebas sous un ciel embrasé',
    en: 'A fortified mud-brick mountain village carved into the rocks of the Maghreb at sunset, a long caravan trail below under a blazing sky',
  },
  title: {
    ar: 'أهل الاستقامة في القرنين 4 و5 هجري',
    fr: 'Les gens de la Rectitude aux IVe et Ve siècles de l’Hégire',
    en: 'The People of Rectitude in the 4th and 5th centuries AH',
  },
  description: {
    ar: 'كيف عاش أهل الاستقامة في ظلّ حكم العبيديين؟ ثورة أبي يزيد، ومقتل أبي القاسم، وقرار الشيخَين أبي خزر وأبي نوح، ثمّ وارجلان وإحياء الحلقات.',
    fr: 'Comment les gens de la Rectitude vécurent-ils sous la domination des Ubaydides ? La révolte d’Abū Yazīd, la mort d’Abū al-Qāsim, la décision des deux cheikhs Abū Khazar et Abū Nūḥ, puis Ouargla et le renouveau des cercles.',
    en: 'How did the People of Rectitude live under Ubaydid rule? Abu Yazid’s revolt, the killing of Abu al-Qasim, the decision of the two sheikhs Abu Khazar and Abu Nuh, then Warjlan and the revival of the study circles.',
  },

  sections: [
    // 01 — Hero
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'قريةٌ جبلية محصّنة من الطين منحوتة في صخور المغرب عند الغروب، وفي الأسفل درب قوافلَ طويل تحت سماءٍ مشتعلة',
        fr: 'Un village de montagne fortifié en pisé, creusé dans les rochers du Maghreb au coucher du soleil, une longue piste de caravanes en contrebas sous un ciel embrasé',
        en: 'A fortified mud-brick mountain village carved into the rocks of the Maghreb at sunset, a long caravan trail below under a blazing sky',
      },
      title: { ar: 'سؤال الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'كيف يحفظ أهل الحقّ علمهم وأمانهم حين يعمّ الخوف وتضيق الأرض؟',
        fr: 'Comment les gens de la vérité préservent-ils leur savoir et leur sécurité quand la peur s’étend et que la terre se resserre ?',
        en: 'How do people of truth protect their knowledge and their safety when fear spreads and the land closes in?',
      },
      intro: {
        ar: 'بعد سقوط الدولة الرستمية، عانى سكّان المغرب الأوسط من حكم العبيديين. فكيف تفاعل أهل الاستقامة مع هذا الواقع؟ وما قصّة ثورة أبي يزيد، ومعركة بغاي، والشيخين اللذين اختارا طريقين مختلفين؟',
        fr: 'Après la chute de l’État rustamide, les habitants du Maghreb central souffrirent de la domination des Ubaydides. Comment les gens de la Rectitude réagirent-ils ? Quelle est l’histoire de la révolte d’Abū Yazīd, de la bataille de Baghāy, et des deux cheikhs qui choisirent des voies différentes ?',
        en: 'After the fall of the Rustamid state, the people of the central Maghreb suffered under Ubaydid rule. How did the People of Rectitude respond? What is the story of Abu Yazid’s revolt, the battle of Baghay, and the two sheikhs who chose different paths?',
      },
    },

    // 02 — Mission map
    {
      kind: 'missions',
      id: 'missions',
      title: { ar: 'ثلاث مهمّات', fr: 'Trois missions', en: 'Three missions' },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنطلق إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'كيف كان حال أهل المغرب تحت العبيديين؟', fr: 'Quelle était la situation des gens du Maghreb sous les Ubaydides ?', en: 'What was life like for the Maghreb’s people under the Ubaydids?' },
          target: 'reading-changes',
          teaser: { ar: 'خوفٌ وفقرٌ وقحطٌ في الدين.', fr: 'Peur, pauvreté et disette de religion.', en: 'Fear, poverty and a famine of religion.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف ثار أبو يزيد، ولماذا انهزم؟', fr: 'Comment Abū Yazīd se révolta-t-il, et pourquoi fut-il vaincu ?', en: 'How did Abu Yazid revolt, and why was he defeated?' },
          target: 'reading-abu-yazid',
          teaser: { ar: 'حمارٌ، وجيشٌ، وحصارٌ للمهدية.', fr: 'Un âne, une armée, le siège de Mahdia.', en: 'A donkey, an army, the siege of Mahdia.' },
        },
        {
          id: 'm3',
          question: { ar: 'ماذا قرّر الشيخان بعد مقتل أبي القاسم؟', fr: 'Que décidèrent les deux cheikhs après la mort d’Abū al-Qāsim ?', en: 'What did the two sheikhs decide after Abu al-Qasim’s killing?' },
          target: 'reading-hami',
          teaser: { ar: 'ثأرٌ أم تريّث؟ ومعركة بغاي.', fr: 'Vengeance ou patience ? La bataille de Baghāy.', en: 'Revenge or patience? The battle of Baghay.' },
        },
      ],
    },

    // 03 — Reading: changes in the Maghreb (slide 2)
    {
      kind: 'reading',
      id: 'reading-changes',
      title: { ar: 'اقرأ: تغيّر أحوال المغرب', fr: 'Lis : le Maghreb change', en: 'Read: the Maghreb changes' },
      intro: {
        ar: 'اقرأ كيف عاش الناس، ثمّ أعِد بناء قول أبي زكريا فصيل في اللعبة.',
        fr: 'Lis comment les gens vivaient, puis reconstitue la parole d’Abū Zakariyyā’ Faṣīl dans le jeu.',
        en: 'Read how people lived, then rebuild Abu Zakariya Fasil’s saying in the game.',
      },
      image: `${IMG}/famine.png`,
      imageAlt: {
        ar: 'أرضٌ زراعية متشقّقة جافّة تحت سماءٍ شاحبة، وفي الأرض وعاءٌ فيه حفنةٌ من الحبّ إلى جانب مخزنٍ خشبيٍّ فارغ',
        fr: 'Des champs fendillés et secs sous un ciel pâle ; au sol un bol contenant une poignée de grains, près d’un grenier en bois vide',
        en: 'Dry cracked farmland under a pale sky; on the ground a bowl holding a handful of grain beside an empty wooden granary',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'حكّامٌ لا يشاركون', fr: 'Des dirigeants qui ne partagent pas', en: 'Rulers who would not share' },
          text: {
            ar: 'عانى سكّان بلاد المغرب، خصوصًا المغرب الأوسط، من العبيديّين. فلم يرغب حكّامهم أن يُشاركوا الحكم، فتوسّعوا تدريجيًّا محاربين القبائل.',
            fr: 'Les habitants du Maghreb, surtout du Maghreb central, souffrirent des Ubaydides. Leurs dirigeants ne voulaient pas partager le pouvoir, et étendirent peu à peu leur contrôle en combattant les tribus.',
            en: 'The people of the Maghreb, especially the central Maghreb, suffered under the Ubaydids. Their rulers did not want to share power, so they gradually expanded their control by fighting the tribes.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'خوفٌ وفقر', fr: 'Peur et pauvreté', en: 'Fear and poverty' },
          text: {
            ar: 'تعسّفوا وأخذوا الأموال وأرزاق الناس، فتذمّرت القبائل وساد الاستياء. فعمّ الخوف وقلّ الإنتاج، حتى بلغ الناس زمانًا وصفه أبو زكريا فصيل في القرن الرابع الهجري.',
            fr: 'Ils se montrèrent arbitraires et saisirent biens et subsistances des gens ; les tribus s’indignèrent et le mécontentement régna. La peur s’étendit et la production baissa, jusqu’à un temps que décrivit Abū Zakariyyā’ Faṣīl, au IVe siècle de l’Hégire.',
            en: 'They were oppressive and seized people’s wealth and livelihoods, so the tribes grew resentful and discontent spread. Fear grew and production fell, until a time that Abu Zakariya Fasil described in the 4th century AH.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'كلمات أبي زكريا فصيل', fr: 'Les mots d’Abū Zakariyyā’ Faṣīl', en: 'Abu Zakariya Fasil’s words' },
          text: {
            ar: '«إذا قحطت الأرض تُنال الجنّة بقبضة من طعام، وإذا قحط الإسلام تُنال الجنّة بكلمة حقّ تُقال، وقحط الإسلام أشدّ من قحط الطعام، وقد اجتمع الاثنان في زماننا هذا.»',
            fr: '« Quand la terre est en disette, on gagne le Paradis par une poignée de nourriture ; quand l’islam est en disette, on gagne le Paradis par une parole de vérité dite. Et la disette de l’islam est plus dure que celle de la nourriture, et les deux se sont réunies à notre époque. »',
            en: '"When the land suffers famine, Paradise is earned with a handful of food; when Islam suffers famine, Paradise is earned by a word of truth spoken. The famine of Islam is harsher than the famine of food, and in our time we have experienced both."',
          },
        },
      ],
    },

    // 04 — Word builder (source: 'saying'): Abu Zakariya Fasil's saying (slide 2) — NOT a Qur'anic verse
    {
      kind: 'verses',
      id: 'fasil-saying',
      source: 'saying',
      title: { ar: 'قحط الأرض وقحط الإسلام', fr: 'Disette de la terre, disette de l’islam', en: 'Famine of the land, famine of Islam' },
      intro: {
        ar: 'قرأتَ كلمات أبي زكريا فصيل في النصّ. أعِد الآن بناء كلّ جملةٍ منها بالترتيب.',
        fr: 'Tu as lu les mots d’Abū Zakariyyā’ Faṣīl dans le texte. Reconstruis maintenant chacune de ses phrases dans l’ordre.',
        en: 'You read Abu Zakariya Fasil’s words in the text. Now rebuild each of his sentences in order.',
      },
      verses: [
        {
          id: 'f1',
          context: { ar: 'يقول أبو زكريا فصيل:', fr: 'Abū Zakariyyā’ Faṣīl dit :', en: 'Abu Zakariya Fasil says:' },
          ref: { ar: 'القرن 4 هـ', fr: 'IVe siècle H', en: '4th century AH' },
          words: ['إِذَا', 'قَحَطَتِ', 'الْأَرْضُ', 'تُنَالُ', 'الْجَنَّةُ', 'بِقَبْضَةٍ', 'مِنْ', 'طَعَامٍ'],
          meaning: {
            ar: 'حين يشحّ الغذاء، يكفي المرء قبضةٌ من طعامٍ يُقدّمها ليبلغ الجنّة.',
            fr: 'Quand la nourriture manque, une poignée de nourriture offerte suffit pour atteindre le Paradis.',
            en: 'When food is scarce, a handful of food given is enough to earn Paradise.',
          },
        },
        {
          id: 'f2',
          context: { ar: 'ويتابع:', fr: 'Et il poursuit :', en: 'And he continues:' },
          ref: { ar: 'القرن 4 هـ', fr: 'IVe siècle H', en: '4th century AH' },
          words: ['وَإِذَا', 'قَحَطَ', 'الْإِسْلَامُ', 'تُنَالُ', 'الْجَنَّةُ', 'بِكَلِمَةِ', 'حَقٍّ', 'تُقَالُ'],
          meaning: {
            ar: 'وحين يضعف الدين في الناس، تُنال الجنّة بكلمة حقّ تُقال.',
            fr: 'Et quand la religion s’affaiblit chez les gens, on gagne le Paradis par une parole de vérité dite.',
            en: 'And when religion weakens among the people, Paradise is earned by a word of truth spoken.',
          },
        },
        {
          id: 'f3',
          context: { ar: 'ثمّ يصف زمانه:', fr: 'Puis il décrit son époque :', en: 'Then he describes his time:' },
          ref: { ar: 'القرن 4 هـ', fr: 'IVe siècle H', en: '4th century AH' },
          words: ['وَقَحْطُ', 'الْإِسْلَامِ', 'أَشَدُّ', 'مِنْ', 'قَحْطِ', 'الطَّعَامِ'],
          meaning: {
            ar: 'يرى أنّ ضعف الدين أشدّ من فقر الغذاء.',
            fr: 'Il estime que la faiblesse de la religion est plus dure que la disette de nourriture.',
            en: 'He holds that the weakness of religion is harsher than the shortage of food.',
          },
        },
        {
          id: 'f4',
          context: { ar: 'ويختم:', fr: 'Et il conclut :', en: 'And he concludes:' },
          ref: { ar: 'القرن 4 هـ', fr: 'IVe siècle H', en: '4th century AH' },
          words: ['وَقَدِ', 'اجْتَمَعَ', 'الِاثْنَانِ', 'فِي', 'زَمَانِنَا', 'هَذَا'],
          meaning: {
            ar: 'أي أنّ قحط الأرض وقحط الإسلام اجتمعا في زمانه.',
            fr: 'C’est-à-dire que la disette de la terre et celle de l’islam se sont réunies à son époque.',
            en: 'That is, the famine of the land and the famine of Islam came together in his time.',
          },
        },
      ],
    },

    // 05 — Reading: Abu Yazid’s revolt (slide 3)
    {
      kind: 'reading',
      id: 'reading-abu-yazid',
      title: { ar: 'اقرأ: ثورة أبي يزيد', fr: 'Lis : la révolte d’Abū Yazīd', en: 'Read: Abu Yazid’s revolt' },
      intro: { ar: 'اقرأ كيف ثار أبو يزيد، ثمّ أعِد بناء الأحداث في اللعبة التالية.', fr: 'Lis comment Abū Yazīd se révolta, puis reconstitue les événements dans le jeu suivant.', en: 'Read how Abu Yazid revolted, then rebuild the events in the next game.' },
      image: `${IMG}/abu-yazid.png`,
      imageAlt: { ar: 'حمارٌ رماديّ واقف في سهلٍ واسع أمام مدينةٍ ساحلية محصّنة بسورٍ ضخم، تحت غيومٍ عاصفة', fr: 'Un âne gris se tient dans une vaste plaine face à une ville côtière fortifiée d’un immense rempart, sous des nuages d’orage', en: 'A grey donkey standing on a vast plain before a coastal city with a huge defensive wall, beneath stormy clouds' },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'الفقر يدفعه', fr: 'La pauvreté le pousse', en: 'Poverty drives him' },
          text: { ar: 'قاد أكبر ثورةٍ ضدّ العبيديين أبو يزيد مخلد بن كيداد النكّاري، بعد أن بلغ الفقر والجوع بالسكّان مبلغًا كبيرًا. انطلق من توزر على حماره سنة 331 هـ، وخرج معه الآلاف.', fr: 'La plus grande révolte contre les Ubaydides fut menée par Abū Yazīd Makhlad ibn Kaydād an-Nukkārī, après que la pauvreté et la faim eurent gravement atteint la population. Il partit de Tozeur sur son âne en 331 H, suivi de milliers de partisans.', en: 'The largest revolt against the Ubaydids was led by Abu Yazid Makhlad ibn Kaydad al-Nukkari, after poverty and hunger had badly afflicted the population. He set out from Tozeur on his donkey in 331 AH, with thousands joining him.' },
        },
        {
          id: 'p2',
          heading: { ar: 'يقترب من المهدية', fr: 'Il approche de Mahdia', en: 'He nears Mahdia' },
          text: { ar: 'دخل مدن الأوراس وغرب إفريقية، وأسقط قبيلة كتامة، وتقدّم نحو المهدية عاصمة العبيديين وحاصرها أيّامًا، حتى كاد يُسقط دولتهم.', fr: 'Il entra dans les villes de l’Aurès et de l’ouest de l’Ifrīqiya, renversa la tribu des Kutāma, avança vers Mahdia, capitale des Ubaydides, et l’assiégea plusieurs jours, faillissant faire tomber leur État.', en: 'He entered the cities of the Aurès and western Ifriqiya, overthrew the Kutama tribe, advanced toward Mahdia, the Ubaydid capital, and besieged it for days, nearly toppling their state.' },
        },
        {
          id: 'p3',
          heading: { ar: 'ما أضعفه', fr: 'Ce qui l’affaiblit', en: 'What weakened him' },
          text: { ar: 'لولا أنّ جماعةً من أصحابه لا خير فيهم انضمّوا إليه طمعًا في النهب وإحداث الفساد في المدن، ولم يُنكر عليهم أبو يزيد، فتخلّت عنه القبائل التي كانت تؤيّده.', fr: 'Mais des gens peu recommandables parmi ses compagnons le rejoignirent par désir de pillage et de désordre dans les villes ; Abū Yazīd ne les réprimanda pas, et les tribus qui le soutenaient l’abandonnèrent.', en: 'But a group of his companions of bad conduct joined him seeking loot and to cause corruption in the cities; Abu Yazid did not reprimand them, and the tribes that supported him abandoned him.' },
        },
        {
          id: 'p4',
          heading: { ar: 'النهاية', fr: 'La fin', en: 'The end' },
          text: { ar: 'انهزم أبو يزيد سنة 334 هـ، وتبعه الجيش، وخاصّةً من وقف معه من أهل الدعوة الذين تحصّنوا في البوادي والجبال المنيعة.', fr: 'Abū Yazīd fut vaincu en 334 H ; l’armée le poursuivit, surtout ceux des gens de l’Appel qui l’avaient soutenu et s’étaient retranchés dans les déserts et les montagnes inaccessibles.', en: 'Abu Yazid was defeated in 334 AH; the army pursued him, and particularly those of the People of the Call who had stood with him and taken refuge in remote deserts and fortified mountains.' },
        },
      ],
    },

    // 06 — Domino chain: Abu Yazid's revolt (slide 3)
    {
      kind: 'chain',
      id: 'abu-yazid-chain',
      title: { ar: 'ثورة أبي يزيد', fr: 'La révolte d’Abū Yazīd', en: 'Abu Yazid’s revolt' },
      intro: {
        ar: 'اختر ما حدث في كلّ حلقةٍ لتفهم لماذا كاد أبو يزيد يُسقط دولة العبيديين، ثمّ لماذا فشل.',
        fr: 'Choisis ce qui se passa à chaque maillon pour comprendre pourquoi Abū Yazīd faillit renverser les Ubaydides, puis pourquoi il échoua.',
        en: 'Choose what happened at each link to understand why Abu Yazid nearly toppled the Ubaydids, and then why he failed.',
      },
      image: `${IMG}/abu-yazid.png`,
      imageAlt: {
        ar: 'حمارٌ رماديّ واقف في سهلٍ واسع أمام مدينةٍ ساحلية محصّنة بسورٍ ضخم، تحت غيومٍ عاصفة',
        fr: 'Un âne gris se tient dans une vaste plaine face à une ville côtière fortifiée d’un immense rempart, sous des nuages d’orage',
        en: 'A grey donkey standing on a vast plain before a coastal city with a huge defensive wall, beneath stormy clouds',
      },
      start: {
        ar: 'بلغ الفقر والجوع بالسكّان مبلغًا كبيرًا في ظلّ العبيديين.',
        fr: 'La pauvreté et la faim avaient gravement atteint la population sous les Ubaydides.',
        en: 'Poverty and hunger had badly afflicted the population under the Ubaydids.',
      },
      steps: [
        {
          id: 'c1',
          prompt: { ar: 'فمن قاد أكبر ثورة ضدّ العبيديين، وكيف انطلق؟', fr: 'Qui mena la plus grande révolte contre les Ubaydides, et comment partit-il ?', en: 'Who led the largest revolt against the Ubaydids, and how did he set out?' },
          correct: { ar: 'أبو يزيد مخلد بن كيداد النكّاري، انطلق من توزر على حماره سنة 331 هـ', fr: 'Abū Yazīd Makhlad ibn Kaydād an-Nukkārī, parti de Tozeur sur son âne en 331 H', en: 'Abu Yazid Makhlad ibn Kaydad al-Nukkari, who set out from Tozeur on his donkey in 331 AH' },
          distractors: [
            { label: { ar: 'أبو نوح سعيد بن زنغيل، من وارجلان', fr: 'Abū Nūḥ Sa‘īd ibn Zanghīl, depuis Ouargla', en: 'Abu Nuh Sa‘id ibn Zanghil, from Warjlan' }, hint: { ar: 'أبو نوح من الشيخين اللذين جاءا بعد ذلك بعقود.', fr: 'Abū Nūḥ est l’un des deux cheikhs qui vinrent des décennies plus tard.', en: 'Abu Nuh is one of the two sheikhs who came decades later.' } },
            { label: { ar: 'أبو القاسم يزيد بن مخلد من الحامة', fr: 'Abū al-Qāsim Yazīd ibn Makhlad d’al-Ḥamma', en: 'Abu al-Qasim Yazid ibn Makhlad of al-Hamma' }, hint: { ar: 'أبو القاسم من علماء الدعوة قُتل سنة 357 هـ.', fr: 'Abū al-Qāsim fut un savant de l’Appel tué en 357 H.', en: 'Abu al-Qasim was a scholar of the Call, killed in 357 AH.' } },
          ],
        },
        {
          id: 'c2',
          prompt: { ar: 'ثمّ تقدّم وكثر أتباعه، فماذا فعل؟', fr: 'Puis il avança, ses partisans se multiplièrent : que fit-il ?', en: 'Then he advanced as followers multiplied. What did he do?' },
          correct: { ar: 'دخل مدن الأوراس وغرب إفريقية وأسقط قبيلة كتامة، وحاصر المهدية عاصمة العبيديين أيّامًا', fr: 'Il entra dans les villes de l’Aurès et de l’ouest de l’Ifrīqiya, renversa la tribu des Kutāma et assiégea Mahdia, capitale des Ubaydides, plusieurs jours', en: 'He entered the cities of the Aurès and western Ifriqiya, overthrew the Kutama tribe, and besieged Mahdia, the Ubaydid capital, for days' },
          distractors: [
            { label: { ar: 'عاد إلى توزر وتوقّف', fr: 'Il retourna à Tozeur et s’arrêta', en: 'He returned to Tozeur and stopped' }, hint: { ar: 'تقدّم حتى حاصر عاصمة العبيديين.', fr: 'Il avança jusqu’à assiéger la capitale des Ubaydides.', en: 'He advanced until he besieged the Ubaydid capital.' } },
            { label: { ar: 'عقد صلحًا مع العبيديين', fr: 'Il conclut la paix avec les Ubaydides', en: 'He made peace with the Ubaydids' }, hint: { ar: 'حاصر المهدية بدل أن يصالحهم.', fr: 'Il assiégea Mahdia au lieu de faire la paix.', en: 'He besieged Mahdia instead of making peace.' } },
          ],
        },
        {
          id: 'c3',
          image: `${IMG}/mahdia-siege.png`,
          prompt: { ar: 'وكاد يُسقط دولتهم، فما الذي أضعفه؟', fr: 'Il faillit renverser leur État ; qu’est-ce qui l’affaiblit ?', en: 'He nearly toppled their state. What weakened him?' },
          correct: { ar: 'انضمّ إليه جماعةٌ سيّئة السيرة طمعًا في النهب والفساد، ولم يُنكر عليهم، فتخلّت عنه القبائل', fr: 'Des gens de mauvaise conduite le rejoignirent par désir de pillage et de désordre ; il ne les réprimanda pas, et les tribus l’abandonnèrent', en: 'People of bad conduct joined him seeking loot and corruption; he did not reprimand them, so the tribes abandoned him' },
          distractors: [
            { label: { ar: 'نفد الماء من جيشه فقط', fr: 'Son armée manqua seulement d’eau', en: 'His army simply ran out of water' }, hint: { ar: 'السبب في الدرس غير ذلك: أتباعٌ لا خير فيهم لم يُنكر عليهم.', fr: 'La leçon donne une autre cause : des partisans peu recommandables qu’il ne réprimanda pas.', en: 'The lesson gives a different cause: followers of bad conduct he did not reprimand.' } },
            { label: { ar: 'خانه أهل الدعوة', fr: 'Les gens de l’Appel le trahirent', en: 'The People of the Call betrayed him' }, hint: { ar: 'العكس: أهل الدعوة هم من وقف معه ولاحقهم الجيش لاحقًا.', fr: 'Au contraire : des gens de l’Appel se tinrent à ses côtés et furent ensuite poursuivis par l’armée.', en: 'On the contrary: some People of the Call stood with him and were later pursued by the army.' } },
          ],
        },
        {
          id: 'c4',
          prompt: { ar: 'وكيف انتهت الثورة؟', fr: 'Et comment la révolte prit-elle fin ?', en: 'And how did the revolt end?' },
          correct: { ar: 'انهزم سنة 334 هـ، وتبعه الجيش، وخاصّةً من وقف معه من أهل الدعوة المتحصّنين في البوادي والجبال المنيعة', fr: 'Il fut vaincu en 334 H ; l’armée le poursuivit, surtout ceux des gens de l’Appel qui l’avaient soutenu et s’étaient retranchés dans les déserts et les montagnes inaccessibles', en: 'He was defeated in 334 AH; the army pursued him, and particularly those of the People of the Call who had stood with him and taken refuge in remote deserts and fortified mountains' },
          distractors: [
            { label: { ar: 'انتصر ودخل المهدية', fr: 'Il triompha et entra à Mahdia', en: 'He won and entered Mahdia' }, hint: { ar: 'حاصرها فقط ولم يدخلها منتصرًا.', fr: 'Il ne fit que l’assiéger sans y entrer en vainqueur.', en: 'He only besieged it and never entered as victor.' } },
            { label: { ar: 'سلّم نفسه وتركهم', fr: 'Il se rendit et les abandonna', en: 'He surrendered and left them' }, hint: { ar: 'تبع الجيشُ أتباعه خاصّةً أهل الدعوة المتحصّنين.', fr: 'L’armée poursuivit ses partisans, surtout les gens de l’Appel retranchés.', en: 'The army pursued his followers, especially the People of the Call who had taken refuge.' } },
          ],
        },
      ],
      ending: {
        ar: 'انهزمت الثورة سنة 334 هـ، لكنّ أهل الدعوة ظلّوا متحصّنين في البوادي والجبال المنيعة.',
        fr: 'La révolte échoua en 334 H, mais les gens de l’Appel restèrent retranchés dans les déserts et les montagnes inaccessibles.',
        en: 'The revolt was defeated in 334 AH, but the People of the Call remained sheltered in remote deserts and fortified mountains.',
      },
    },

    // 07 — Reading: the killing of Abu al-Qasim (slide 4)
    {
      kind: 'reading',
      id: 'reading-hami',
      title: { ar: 'اقرأ: مقتل الشيخ أبي القاسم', fr: 'Lis : la mort du cheikh Abū al-Qāsim', en: 'Read: the killing of Sheikh Abu al-Qasim' },
      intro: {
        ar: 'اقرأ ما حدث في الحامة، ثمّ زِن قرار الشيخين في الميزان.',
        fr: 'Lis ce qui se passa à al-Ḥamma, puis pèse la décision des deux cheikhs sur la balance.',
        en: 'Read what happened in al-Hamma, then weigh the sheikhs’ decision on the scale.',
      },
      image: `${IMG}/hamma-oasis.png`,
      imageAlt: {
        ar: 'واحةُ نخيلٍ مخبوءة بين جبالٍ صحراوية وعيونٍ حارّة في ضوء الغروب الذهبي',
        fr: 'Une oasis de palmiers cachée entre des montagnes désertiques et des sources chaudes dans la lumière dorée du couchant',
        en: 'A palm oasis hidden among desert mountains and hot springs in the golden light of sunset',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'اعتداءٌ على عالم', fr: 'Une agression contre un savant', en: 'An attack on a scholar' },
          text: {
            ar: 'من بين عدوان العبيديين قتلُ الشيخ أبي القاسم يزيد بن مخلد سنة 357 هـ، وهو من أجلّ علماء أهل الدعوة بالحامة.',
            fr: 'Parmi les agressions des Ubaydides, la mort du cheikh Abū al-Qāsim Yazīd ibn Makhlad en 357 H, l’un des plus éminents savants des gens de l’Appel à al-Ḥamma.',
            en: 'Among the Ubaydids’ aggressions was the killing of Sheikh Abu al-Qasim Yazid ibn Makhlad in 357 AH, one of the most esteemed scholars of the Call in al-Hamma.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'قرارٌ ونصيحة', fr: 'Une décision et un conseil', en: 'A decision and advice' },
          text: {
            ar: 'فعزم الشيخان أبو خزر يغلا بن زلتاف وأبو نوح سعيد بن زنغيل — رحمهما الله — على التصدّي للعبيديين وإنهاء ظلمهم. لكنّ مواردهم كانت محدودة، فأرسلوا إلى الجهات يستنفرون. ونصحهم مشايخ آخرون بعدم الثأر والثورة دون القوّة اللازمة، لكنّهما سارا إلى بغاي دون انتظار العون.',
            fr: 'Les deux cheikhs, Abū Khazar Yaghlā ibn Zultāf et Abū Nūḥ Sa‘īd ibn Zanghīl — que Dieu leur fasse miséricorde — décidèrent d’affronter les Ubaydides pour mettre fin à leur oppression. Mais leurs moyens étaient limités ; ils lancèrent donc des appels de soutien dans plusieurs régions. D’autres cheikhs leur conseillèrent de ne pas chercher vengeance ni se révolter sans la force nécessaire, mais ils marchèrent vers Baghāy sans attendre de renforts.',
            en: 'The two sheikhs, Abu Khazar Yaghla ibn Zultaf and Abu Nuh Sa‘id ibn Zanghil — may God have mercy on them — resolved to confront the Ubaydids and end their oppression. But their resources were limited, so they sent calls for support to various regions. Other sheikhs advised against revenge and revolt without the necessary strength, but the two marched to Baghay without waiting for reinforcements.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'معركة بغاي', fr: 'La bataille de Baghāy', en: 'The battle of Baghay' },
          text: {
            ar: 'وقعت معركةٌ كبيرة سنة 358 هـ، وخسر أهل الدعوة فيها جمعًا كبيرًا من طلبتهم.',
            fr: 'Une grande bataille eut lieu en 358 H, et les gens de l’Appel y perdirent un grand nombre de leurs étudiants.',
            en: 'A great battle took place in 358 AH, and the People of the Call lost a large number of their students in it.',
          },
        },
      ],
    },

    // 08 — Balance: march or wait (slide 4)
    {
      kind: 'balance',
      id: 'march-balance',
      title: { ar: 'الخروج أم التريّث؟', fr: 'Marcher ou patienter ?', en: 'March or wait?' },
      intro: {
        ar: 'ضع كلّ معلومةٍ على الكفّة التي تنتمي إليها: ما دفع الشيخين إلى الخروج، وما كان يدعو إلى التريّث.',
        fr: 'Pose chaque fait sur le bon plateau : ce qui poussa les deux cheikhs à marcher, et ce qui appelait à la patience.',
        en: 'Place each fact on its pan: what pushed the two sheikhs to march, and what called for patience.',
      },
      left: { ar: 'ما دفع إلى الخروج', fr: 'Ce qui poussait à marcher', en: 'What pushed them to march' },
      right: { ar: 'ما دعا إلى التريّث', fr: 'Ce qui appelait à patienter', en: 'What called for patience' },
      weights: [
        {
          id: 'w1',
          text: { ar: 'قُتل الشيخ أبو القاسم من علماء الدعوة بالحامة', fr: 'Le cheikh Abū al-Qāsim, savant de l’Appel à al-Ḥamma, fut tué', en: 'Sheikh Abu al-Qasim, a scholar of the Call in al-Hamma, was killed' },
          side: 'left',
          explanation: { ar: 'هذا ما أشعل عزمهما على المواجهة.', fr: 'C’est ce qui enflamma leur résolution d’affronter.', en: 'This is what kindled their resolve to confront.' },
        },
        {
          id: 'w2',
          text: { ar: 'أرادا إنهاء ظلم العبيديين', fr: 'Ils voulaient mettre fin à l’oppression des Ubaydides', en: 'They wanted to end the Ubaydids’ oppression' },
          side: 'left',
          explanation: { ar: 'نعم، هذا هو هدفهما من الخروج.', fr: 'Oui, tel était leur but en marchant.', en: 'Yes — this was their aim in marching.' },
        },
        {
          id: 'w3',
          text: { ar: 'سارا إلى بغاي دون انتظار العون', fr: 'Ils marchèrent vers Baghāy sans attendre de renforts', en: 'They marched to Baghay without waiting for reinforcements' },
          side: 'left',
          explanation: { ar: 'هذا قرارٌ بالخروج الفوريّ.', fr: 'C’est la décision de marcher aussitôt.', en: 'This is the decision to march at once.' },
        },
        {
          id: 'w4',
          text: { ar: 'كانت مواردهم محدودة', fr: 'Leurs moyens étaient limités', en: 'Their resources were limited' },
          side: 'right',
          explanation: { ar: 'مواردٌ قليلة تدعو إلى التريّث.', fr: 'Des moyens faibles appellent à la patience.', en: 'Scarce resources call for patience.' },
        },
        {
          id: 'w5',
          text: { ar: 'نصحهم مشايخ آخرون بعدم الثأر والثورة دون القوّة اللازمة', fr: 'D’autres cheikhs leur conseillèrent de ne pas chercher vengeance ni se révolter sans la force nécessaire', en: 'Other sheikhs advised against revenge and revolt without the necessary strength' },
          side: 'right',
          explanation: { ar: 'نصيحةٌ صريحة بالتريّث.', fr: 'Un conseil clair de patience.', en: 'A clear counsel of patience.' },
        },
        {
          id: 'w6',
          text: { ar: 'خسر أهل الدعوة جمعًا كبيرًا من طلبتهم في معركة 358 هـ', fr: 'Les gens de l’Appel perdirent un grand nombre d’étudiants lors de la bataille de 358 H', en: 'The People of the Call lost many students in the battle of 358 AH' },
          side: 'right',
          explanation: { ar: 'نتيجةٌ تُظهر حكمة التريّث.', fr: 'Une conséquence qui montre la sagesse de la patience.', en: 'A result that shows the wisdom of patience.' },
        },
      ],
    },

    // 09 — Reading: the two sheikhs and the emir (slide 5)
    {
      kind: 'reading',
      id: 'reading-sheikhs',
      title: { ar: 'اقرأ: الشيخان والأمير', fr: 'Lis : les deux cheikhs et l’émir', en: 'Read: the two sheikhs and the emir' },
      intro: { ar: 'اقرأ كيف انتهى الصراع وإلى أين ذهب كلّ شيخ، ثمّ سِر في طريقهما.', fr: 'Lis comment le conflit prit fin et où alla chaque cheikh, puis suis leur chemin.', en: 'Read how the conflict ended and where each sheikh went, then follow their road.' },
      image: `${IMG}/scholars-tent.png`,
      imageAlt: { ar: 'خيمةٌ كبيرة من الداخل تنيرها مصابيح معلّقة، وسجّاداتٌ منسوجة وحواملُ كتبٍ منخفضة', fr: 'L’intérieur d’une grande tente éclairée de lampes suspendues, des tapis tissés et des pupitres bas', en: 'The inside of a large tent lit by hanging lamps, woven carpets and low book stands' },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'الأمير يبحث عنهما', fr: 'L’émir les cherche', en: 'The emir searches for them' },
          text: { ar: 'أرسل الأمير الشيعيّ قوّاته يبحث عن الشيخين أبي نوح وأبي خزر، بعد أن هزّ ما فعلاه سلطانه. فاستطاعوا القبض على أبي نوح، لكنّ الأمير احترمه وقرّبه منه خوفًا من قوّة عقله وفصاحة لسانه، وسعى إلى أبي خزر قائد المقاومة.', fr: 'L’émir chiite envoya ses forces à la recherche des deux cheikhs, Abū Nūḥ et Abū Khazar, après que leurs actes eurent ébranlé son autorité. Ils parvinrent à capturer Abū Nūḥ, mais l’émir le respecta et le rapprocha de lui, craignant la force de son intelligence et son éloquence, et il chercha Abū Khazar, chef de la résistance.', en: 'The Shi‘i emir sent forces to search for the two sheikhs, Abu Nuh and Abu Khazar, after their actions had shaken his authority. They managed to capture Abu Nuh, but the emir respected him and brought him close, fearing his strong intellect and eloquence, and he sought Abu Khazar, the leader of the resistance.' },
        },
        {
          id: 'p2',
          heading: { ar: 'الأمان', fr: 'La sécurité', en: 'Safety' },
          text: { ar: 'فاشترط أبو نوح الأمان لأبي خزر، فأعطى الأمير الأمان في كامل البلاد. فسلّم أبو خزر نفسه وقفًا للدماء، وبقي الشيخان عند الأمير فأحسن إليهما وناظرهما في مجلسه.', fr: 'Abū Nūḥ posa la sécurité d’Abū Khazar comme condition, et l’émir l’accorda dans tout le pays. Abū Khazar se rendit pour épargner le sang, et les deux cheikhs restèrent auprès de l’émir, qui les traita bien et dialogua avec eux dans son assemblée.', en: 'Abu Nuh set safety for Abu Khazar as a condition, and the emir granted it across the entire land. Abu Khazar surrendered to prevent further bloodshed, and both sheikhs remained with the emir, who treated them well and engaged with them in his court.' },
        },
        {
          id: 'p3',
          heading: { ar: 'الرحيل إلى مصر', fr: 'Le départ pour l’Égypte', en: 'The move to Egypt' },
          text: { ar: 'ولمّا قرّر العبيديّون الرحيل إلى مصر سنة 361 هـ، استخلفوا الأسرة الزيريّة على حكم المغرب، وعزموا على أخذ الشيخين معهم. فرافق أبو خزر العبيديّين إلى مصر ليُبقي الأمان لأهل الدعوة، بينما انتقل أبو نوح إلى وارجلان، وشغل باله بإحياء الحلقات العلمية التي أخذت تتناقص ومواجهة البدع المنتشرة.', fr: 'Quand les Ubaydides décidèrent de partir pour l’Égypte en 361 H, ils confièrent le Maghreb à la dynastie zīride et projetèrent d’emmener les deux cheikhs. Abū Khazar accompagna les Ubaydides en Égypte pour garantir la sécurité aux gens de l’Appel, tandis qu’Abū Nūḥ gagna Ouargla, se consacrant au renouveau des cercles d’étude qui s’amenuisaient et à la lutte contre les innovations répandues.', en: 'When the Ubaydids decided to move to Egypt in 361 AH, they entrusted the governance of the Maghreb to the Zirid dynasty and planned to take the two sheikhs with them. Abu Khazar accompanied the Ubaydids to Egypt to ensure the safety of the followers of the Call, while Abu Nuh moved to Warjlan, dedicating himself to reviving the scholarly circles that had begun to dwindle and to confronting the widespread heresies.' },
        },
      ],
    },

    // 10 — Journey: what became of them (slides 4–5)
    {
      kind: 'journey',
      id: 'sheikhs-journey',
      title: { ar: 'درب الشيخين', fr: 'Le chemin des deux cheikhs', en: 'The sheikhs’ road' },
      intro: {
        ar: 'اجتز محطّات الشيخين من بغاي إلى وارجلان بإجابة سؤال كلّ محطّة.',
        fr: 'Franchis les étapes des deux cheikhs, de Baghāy à Ouargla, en répondant à la question de chaque étape.',
        en: 'Pass the sheikhs’ stops, from Baghay to Warjlan, by answering each stop’s question.',
      },
      stops: [
        {
          id: 'baghay',
          name: { ar: 'بغاي', fr: 'Baghāy', en: 'Baghay' },
          question: {
            ar: 'ماذا وقع في بغاي سنة 358 هـ؟',
            fr: 'Que se passa-t-il à Baghāy en 358 H ?',
            en: 'What happened at Baghay in 358 AH?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'معركةٌ كبيرة خسر فيها أهل الدعوة جمعًا كبيرًا من طلبتهم', fr: 'Une grande bataille où les gens de l’Appel perdirent beaucoup d’étudiants', en: 'A great battle in which the People of the Call lost many students' } },
            { id: 'b', correct: false, label: { ar: 'عقد صلحٍ بين الطرفين', fr: 'Un traité de paix entre les deux camps', en: 'A peace treaty between both sides' }, hint: { ar: 'وقعت معركة لا صلح.', fr: 'Il y eut une bataille, non une paix.', en: 'There was a battle, not a peace.' } },
            { id: 'c', correct: false, label: { ar: 'فتح المهدية', fr: 'La conquête de Mahdia', en: 'The conquest of Mahdia' }, hint: { ar: 'حصار المهدية كان في ثورة أبي يزيد، وهي سابقة.', fr: 'Le siège de Mahdia date de la révolte d’Abū Yazīd, antérieure.', en: 'The siege of Mahdia belonged to Abu Yazid’s earlier revolt.' } },
          ],
          reveal: {
            ar: 'سارا إلى بغاي دون انتظار العون، فوقعت المعركة الكبيرة.',
            fr: 'Ils marchèrent vers Baghāy sans attendre de renforts, et la grande bataille eut lieu.',
            en: 'They marched to Baghay without waiting for reinforcements, and the great battle followed.',
          },
        },
        {
          id: 'court',
          name: { ar: 'مجلس الأمير', fr: 'La cour de l’émir', en: 'The emir’s court' },
          image: `${IMG}/scholars-tent.png`,
          question: {
            ar: 'ماذا حدث للشيخين بعد أن أعطاهما الأمير الأمان؟',
            fr: 'Que devinrent les deux cheikhs après que l’émir leur eut accordé la sécurité ?',
            en: 'What happened to the sheikhs after the emir granted them safety?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'بقيا عنده فأحسن إليهما وناظرهما في مجلسه', fr: 'Ils restèrent auprès de lui, qui les traita bien et dialogua avec eux', en: 'They stayed with him, and he treated them well and engaged with them' } },
            { id: 'b', correct: false, label: { ar: 'نُفيا فورًا خارج البلاد', fr: 'Ils furent aussitôt exilés hors du pays', en: 'They were exiled at once from the land' }, hint: { ar: 'بقيا عنده وأُحسن إليهما.', fr: 'Ils restèrent auprès de lui et furent bien traités.', en: 'They stayed with him and were treated well.' } },
            { id: 'c', correct: false, label: { ar: 'عادا إلى القتال', fr: 'Ils reprirent le combat', en: 'They went back to fighting' }, hint: { ar: 'انتهى الصراع بسلّم أبي خزر نفسه حقنًا للدماء.', fr: 'Le conflit prit fin quand Abū Khazar se rendit pour épargner le sang.', en: 'The conflict ended when Abu Khazar surrendered to spare bloodshed.' } },
          ],
          reveal: {
            ar: 'وهكذا انتهى الصراع بينهم وبين الأمير.',
            fr: 'Ainsi prit fin le conflit entre eux et l’émir.',
            en: 'So ended the conflict between them and the emir.',
          },
        },
        {
          id: 'y361',
          name: { ar: '361 هـ', fr: '361 H', en: '361 AH' },
          image: `${IMG}/fatimid-cairo.png`,
          question: {
            ar: 'ماذا قرّر العبيديّون سنة 361 هـ؟ ومن استخلفوا على المغرب؟',
            fr: 'Que décidèrent les Ubaydides en 361 H ? Qui chargèrent-ils du Maghreb ?',
            en: 'What did the Ubaydids decide in 361 AH? Whom did they entrust the Maghreb to?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'الرحيل إلى مصر، واستخلفوا الأسرة الزيريّة على حكم المغرب', fr: 'Partir pour l’Égypte, en confiant le Maghreb à la dynastie zīride', en: 'To move to Egypt, entrusting the Maghreb to the Zirid dynasty' } },
            { id: 'b', correct: false, label: { ar: 'البقاء في المهدية للأبد', fr: 'Rester à Mahdia pour toujours', en: 'To remain in Mahdia forever' }, hint: { ar: 'قرّروا الرحيل إلى مصر.', fr: 'Ils décidèrent de partir pour l’Égypte.', en: 'They decided to move to Egypt.' } },
            { id: 'c', correct: false, label: { ar: 'تسليم الحكم لأهل الدعوة', fr: 'Remettre le pouvoir aux gens de l’Appel', en: 'To hand power to the People of the Call' }, hint: { ar: 'استخلفوا أسرةً زيريّة لتنوب عنهم.', fr: 'Ils chargèrent une dynastie zīride d’agir en leur nom.', en: 'They appointed a Zirid dynasty to act on their behalf.' } },
          ],
          reveal: {
            ar: 'كما عزموا على أخذ الشيخين معهم إلى مصر.',
            fr: 'Ils projetèrent aussi d’emmener les deux cheikhs avec eux en Égypte.',
            en: 'They also planned to take the two sheikhs with them to Egypt.',
          },
        },
        {
          id: 'egypt',
          name: { ar: 'مصر', fr: 'L’Égypte', en: 'Egypt' },
          question: {
            ar: 'لماذا رافق أبو خزر العبيديّين إلى مصر؟',
            fr: 'Pourquoi Abū Khazar accompagna-t-il les Ubaydides en Égypte ?',
            en: 'Why did Abu Khazar accompany the Ubaydids to Egypt?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'ليبقي الأمان لأهل الدعوة', fr: 'Pour garantir la sécurité aux gens de l’Appel', en: 'To ensure the safety of the followers of the Call' } },
            { id: 'b', correct: false, label: { ar: 'ليتاجر هناك', fr: 'Pour y faire du commerce', en: 'To trade there' }, hint: { ar: 'كانت غايته حماية أهل الدعوة.', fr: 'Son but était de protéger les gens de l’Appel.', en: 'His aim was to protect the People of the Call.' } },
            { id: 'c', correct: false, label: { ar: 'لأنّه اعتنق مذهبهم', fr: 'Parce qu’il adopta leur doctrine', en: 'Because he adopted their doctrine' }, hint: { ar: 'لم يرد هذا؛ بل ذهب ليضمن أمان أتباعه.', fr: 'Rien de tel ; il y alla pour garantir la sécurité de ses partisans.', en: 'Nothing of the sort; he went to guarantee his followers’ safety.' } },
          ],
          reveal: {
            ar: 'رافق أبو خزر العبيديّين إلى مصر ليضمن أمان أتباع الدعوة.',
            fr: 'Abū Khazar accompagna les Ubaydides en Égypte pour garantir la sécurité des partisans de l’Appel.',
            en: 'Abu Khazar accompanied the Ubaydids to Egypt to ensure the safety of the followers of the Call.',
          },
        },
        {
          id: 'warjlan',
          name: { ar: 'وارجلان', fr: 'Ouargla', en: 'Warjlan' },
          image: `${IMG}/warjlan-halaqa.png`,
          question: {
            ar: 'وأين اتّجه أبو نوح، وماذا شغل باله؟',
            fr: 'Où alla Abū Nūḥ, et à quoi se consacra-t-il ?',
            en: 'Where did Abu Nuh go, and what occupied him?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'إلى وارجلان، لإحياء الحلقات العلمية ومواجهة البدع المنتشرة', fr: 'À Ouargla, pour raviver les cercles d’étude et affronter les innovations répandues', en: 'To Warjlan, to revive the scholarly circles and confront the widespread heresies' } },
            { id: 'b', correct: false, label: { ar: 'إلى مصر مع أبي خزر', fr: 'En Égypte avec Abū Khazar', en: 'To Egypt with Abu Khazar' }, hint: { ar: 'أبو خزر هو من ذهب إلى مصر.', fr: 'C’est Abū Khazar qui alla en Égypte.', en: 'It was Abu Khazar who went to Egypt.' } },
            { id: 'c', correct: false, label: { ar: 'إلى المهدية ليتولّى الحكم', fr: 'À Mahdia pour prendre le pouvoir', en: 'To Mahdia to take power' }, hint: { ar: 'اتّجه إلى العلم لا إلى الحكم.', fr: 'Il se tourna vers le savoir, non vers le pouvoir.', en: 'He turned to knowledge, not to power.' } },
          ],
          reveal: {
            ar: 'انتقل أبو نوح إلى وارجلان وشغل باله بإحياء الحلقات العلمية التي أخذت تتناقص.',
            fr: 'Abū Nūḥ gagna Ouargla et se consacra au renouveau des cercles d’étude qui s’amenuisaient.',
            en: 'Abu Nuh moved to Warjlan, dedicating himself to reviving the scholarly circles that had begun to dwindle.',
          },
        },
      ],
      arrival: {
        ar: 'من بغاي إلى مجلس الأمير، ومن مصر إلى وارجلان: ذهب أبو خزر ليحمي الأمان، وذهب أبو نوح ليحيي العلم. وهكذا بقيت الاستقامة حيّة.',
        fr: 'De Baghāy à la cour de l’émir, de l’Égypte à Ouargla : Abū Khazar partit protéger la sécurité, Abū Nūḥ partit raviver le savoir. Ainsi la Rectitude resta vivante.',
        en: 'From Baghay to the emir’s court, from Egypt to Warjlan: Abu Khazar went to guard safety, Abu Nuh went to revive knowledge. And so Rectitude stayed alive.',
      },
    },

    // 11 — Memory: names and dates (slides 3–5)
    {
      kind: 'memory',
      id: 'names-memory',
      title: { ar: 'أسماءٌ وتواريخ', fr: 'Noms et dates', en: 'Names and dates' },
      intro: {
        ar: 'احفظ كلّ بطاقة ودورها، ثمّ ستنقلب. هل تتذكّر أين كانت؟',
        fr: 'Mémorise chaque carte et son rôle, puis elles se retourneront. Te souviendras-tu de leur place ?',
        en: 'Memorize each card and its role, then they will flip. Can you remember where they were?',
      },
      image: `${IMG}/scholars-tent.png`,
      cards: [
        { id: 'abu-yazid', label: { ar: 'أبو يزيد مخلد بن كيداد', fr: 'Abū Yazīd Makhlad ibn Kaydād', en: 'Abu Yazid Makhlad ibn Kaydad' }, category: { ar: 'قائد الثورة', fr: 'Chef de la révolte', en: 'Leader of the revolt' } },
        { id: 'abu-qasim', label: { ar: 'أبو القاسم يزيد بن مخلد', fr: 'Abū al-Qāsim Yazīd ibn Makhlad', en: 'Abu al-Qasim Yazid ibn Makhlad' }, category: { ar: 'عالمٌ قُتل في الحامة', fr: 'Savant tué à al-Ḥamma', en: 'Scholar killed in al-Hamma' } },
        { id: 'abu-khazar', label: { ar: 'أبو خزر يغلا بن زلتاف', fr: 'Abū Khazar Yaghlā ibn Zultāf', en: 'Abu Khazar Yaghla ibn Zultaf' }, category: { ar: 'الشيخ الأوّل', fr: 'Le premier cheikh', en: 'The first sheikh' } },
        { id: 'abu-nuh', label: { ar: 'أبو نوح سعيد بن زنغيل', fr: 'Abū Nūḥ Sa‘īd ibn Zanghīl', en: 'Abu Nuh Sa‘id ibn Zanghil' }, category: { ar: 'الشيخ الثاني', fr: 'Le second cheikh', en: 'The second sheikh' } },
        { id: 'y331', label: { ar: '331 هـ', fr: '331 H', en: '331 AH' }, category: { ar: 'انطلاق ثورة أبي يزيد', fr: 'Départ de la révolte d’Abū Yazīd', en: 'Start of Abu Yazid’s revolt' } },
        { id: 'y358', label: { ar: '358 هـ', fr: '358 H', en: '358 AH' }, category: { ar: 'معركة بغاي', fr: 'Bataille de Baghāy', en: 'Battle of Baghay' } },
      ],
      rounds: [
        {
          id: 'sheikhs',
          question: { ar: 'أين كانت بطاقتا الشيخين اللذين واجها العبيديين؟', fr: 'Où étaient les cartes des deux cheikhs qui affrontèrent les Ubaydides ?', en: 'Where were the cards of the two sheikhs who faced the Ubaydids?' },
          correctIds: ['abu-khazar', 'abu-nuh'],
        },
        {
          id: 'dates',
          question: { ar: 'أين كانت بطاقتا التاريخين؟', fr: 'Où étaient les deux cartes de dates ?', en: 'Where were the two date cards?' },
          correctIds: ['y331', 'y358'],
        },
      ],
    },

    // 12 — Timeline
    {
      kind: 'timeline',
      id: 'timeline',
      title: { ar: 'من 331 إلى 361 هـ', fr: 'De 331 à 361 H', en: 'From 331 to 361 AH' },
      intro: {
        ar: 'اضغط على كلّ محطّةٍ لتتتبّع الأحداث التي مرّت في هذه العقود.',
        fr: 'Touche chaque étape pour suivre les événements de ces décennies.',
        en: 'Tap each stop to follow the events of these decades.',
      },
      steps: [
        {
          id: 't331',
          period: { ar: '331 هـ', fr: '331 H', en: '331 AH' },
          label: { ar: 'انطلاق أبي يزيد', fr: 'Départ d’Abū Yazīd', en: 'Abu Yazid sets out' },
          detail: { ar: 'انطلق من توزر على حماره وجمع الآلاف، وتقدّم نحو المهدية عاصمة العبيديين.', fr: 'Il partit de Tozeur sur son âne, rassembla des milliers de partisans et avança vers Mahdia, capitale des Ubaydides.', en: 'He set out from Tozeur on his donkey, gathered thousands, and advanced toward Mahdia, the Ubaydid capital.' },
        },
        {
          id: 't334',
          period: { ar: '334 هـ', fr: '334 H', en: '334 AH' },
          label: { ar: 'هزيمة الثورة', fr: 'Échec de la révolte', en: 'Defeat of the revolt' },
          detail: { ar: 'انهزم أبو يزيد وتبعه الجيش، وخاصّةً من وقف معه من أهل الدعوة المتحصّنين.', fr: 'Abū Yazīd fut vaincu et l’armée le poursuivit, surtout les gens de l’Appel retranchés qui l’avaient soutenu.', en: 'Abu Yazid was defeated and the army pursued him, especially the People of the Call who had stood with him and taken refuge.' },
        },
        {
          id: 't357',
          period: { ar: '357 هـ', fr: '357 H', en: '357 AH' },
          label: { ar: 'مقتل أبي القاسم', fr: 'Mort d’Abū al-Qāsim', en: 'Abu al-Qasim is killed' },
          detail: { ar: 'قُتل الشيخ أبو القاسم يزيد بن مخلد من علماء أهل الدعوة بالحامة.', fr: 'Le cheikh Abū al-Qāsim Yazīd ibn Makhlad, savant des gens de l’Appel à al-Ḥamma, fut tué.', en: 'Sheikh Abu al-Qasim Yazid ibn Makhlad, a scholar of the Call in al-Hamma, was killed.' },
        },
        {
          id: 't358',
          period: { ar: '358 هـ', fr: '358 H', en: '358 AH' },
          label: { ar: 'معركة بغاي', fr: 'Bataille de Baghāy', en: 'Battle of Baghay' },
          detail: { ar: 'خسر أهل الدعوة جمعًا كبيرًا من طلبتهم.', fr: 'Les gens de l’Appel perdirent un grand nombre de leurs étudiants.', en: 'The People of the Call lost a large number of their students.' },
        },
        {
          id: 't361',
          period: { ar: '361 هـ', fr: '361 H', en: '361 AH' },
          label: { ar: 'الرحيل إلى مصر', fr: 'Départ pour l’Égypte', en: 'Departure to Egypt' },
          detail: { ar: 'قرّر العبيديّون الرحيل إلى مصر واستخلفوا الزيريّين على المغرب، فرافق أبو خزر العبيديّين، وانتقل أبو نوح إلى وارجلان.', fr: 'Les Ubaydides décidèrent de partir pour l’Égypte en confiant le Maghreb aux Zīrides ; Abū Khazar les accompagna, et Abū Nūḥ gagna Ouargla.', en: 'The Ubaydids decided to move to Egypt, entrusting the Maghreb to the Zirids; Abu Khazar accompanied the Ubaydids, and Abu Nuh moved to Warjlan.' },
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
          text: { ar: 'انطلق أبو يزيد من توزر على حماره سنة 331 هـ.', fr: 'Abū Yazīd partit de Tozeur sur son âne en 331 H.', en: 'Abu Yazid set out from Tozeur on his donkey in 331 AH.' },
          answer: true,
          explanation: { ar: 'صحيح، وجمع معه الآلاف.', fr: 'Vrai, et il rassembla des milliers de partisans.', en: 'True — and he gathered thousands with him.' },
        },
        {
          id: 'b2',
          text: { ar: 'نجحت ثورة أبي يزيد في إسقاط المهدية.', fr: 'La révolte d’Abū Yazīd réussit à faire tomber Mahdia.', en: 'Abu Yazid’s revolt succeeded in toppling Mahdia.' },
          answer: false,
          explanation: { ar: 'خطأ، حاصرها أيّامًا لكنّه انهزم سنة 334 هـ.', fr: 'Faux, il l’assiégea plusieurs jours mais fut vaincu en 334 H.', en: 'False — he besieged it for days but was defeated in 334 AH.' },
        },
        {
          id: 'b3',
          text: { ar: 'انضمّ إلى أبي يزيد من لا خير فيهم طمعًا في النهب فلم يُنكر عليهم.', fr: 'Des gens peu recommandables rejoignirent Abū Yazīd par désir de pillage, et il ne les réprimanda pas.', en: 'People of bad conduct joined Abu Yazid seeking loot, and he did not reprimand them.' },
          answer: true,
          explanation: { ar: 'صحيح، فتخلّت عنه القبائل.', fr: 'Vrai, et les tribus l’abandonnèrent.', en: 'True — and the tribes abandoned him.' },
        },
        {
          id: 'b4',
          text: { ar: 'اتّفق كلّ المشايخ على أن يسير الشيخان إلى بغاي.', fr: 'Tous les cheikhs s’accordèrent pour que les deux cheikhs marchent vers Baghāy.', en: 'All the sheikhs agreed that the two sheikhs should march to Baghay.' },
          answer: false,
          explanation: { ar: 'خطأ، نصحهم مشايخ آخرون بعدم الثأر دون القوّة اللازمة.', fr: 'Faux, d’autres cheikhs leur conseillèrent de ne pas chercher vengeance sans la force nécessaire.', en: 'False — other sheikhs advised against revenge without the necessary strength.' },
        },
        {
          id: 'b5',
          text: { ar: 'اشترط أبو نوح الأمان لأبي خزر فأعطاه الأمير في كامل البلاد.', fr: 'Abū Nūḥ posa la sécurité d’Abū Khazar comme condition, et l’émir l’accorda dans tout le pays.', en: 'Abu Nuh set safety for Abu Khazar as a condition, and the emir granted it across the land.' },
          answer: true,
          explanation: { ar: 'صحيح، وسلّم أبو خزر نفسه وقفًا للدماء.', fr: 'Vrai, et Abū Khazar se rendit pour épargner le sang.', en: 'True — and Abu Khazar surrendered to spare bloodshed.' },
        },
        {
          id: 'b6',
          text: { ar: 'ذهب أبو نوح إلى مصر وبقي أبو خزر في وارجلان.', fr: 'Abū Nūḥ alla en Égypte et Abū Khazar resta à Ouargla.', en: 'Abu Nuh went to Egypt and Abu Khazar stayed in Warjlan.' },
          answer: false,
          explanation: { ar: 'خطأ، العكس: رافق أبو خزر العبيديّين إلى مصر، وانتقل أبو نوح إلى وارجلان.', fr: 'Faux, c’est l’inverse : Abū Khazar accompagna les Ubaydides en Égypte, Abū Nūḥ gagna Ouargla.', en: 'False — the reverse: Abu Khazar accompanied the Ubaydids to Egypt, and Abu Nuh moved to Warjlan.' },
        },
      ],
    },

    // 14 — Quiz
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
          question: { ar: 'ما السبب الذي أضعف ثورة أبي يزيد؟', fr: 'Qu’est-ce qui affaiblit la révolte d’Abū Yazīd ?', en: 'What weakened Abu Yazid’s revolt?' },
          options: [
            { id: 'a', label: { ar: 'انضمام من لا خير فيهم طمعًا في النهب وعدم إنكاره عليهم', fr: 'L’arrivée de gens peu recommandables attirés par le pillage, sans qu’il les réprimande', en: 'The arrival of people of bad conduct seeking loot, whom he did not reprimand' } },
            { id: 'b', label: { ar: 'قلّة الجنود في بداية الثورة', fr: 'Le petit nombre de soldats au départ', en: 'A small number of soldiers at the start' } },
            { id: 'c', label: { ar: 'سقوط توزر', fr: 'La chute de Tozeur', en: 'The fall of Tozeur' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'تخلّت عنه القبائل التي كانت تؤيّده بسبب هؤلاء، فانهزم سنة 334 هـ.',
            fr: 'Les tribus qui le soutenaient l’abandonnèrent à cause d’eux, et il fut vaincu en 334 H.',
            en: 'The tribes that supported him left him because of them, and he was defeated in 334 AH.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'سلّم أبو خزر نفسه للأمير وقفًا للدماء بعد أن أعطى الأمير الأمان.', fr: 'Abū Khazar se rendit à l’émir pour épargner le sang après que celui-ci eut accordé la sécurité.', en: 'Abu Khazar surrendered to the emir to prevent bloodshed after the emir granted safety.' },
          answer: true,
          explanation: {
            ar: 'صحيح، وبقي الشيخان عنده ثمّ افترق طريقاهما بعد قرار الرحيل إلى مصر.',
            fr: 'Vrai, et les deux cheikhs restèrent auprès de lui avant que leurs routes ne se séparent après la décision de partir pour l’Égypte.',
            en: 'True — both sheikhs stayed with him, then their paths parted after the decision to move to Egypt.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ اسمٍ بدوره', fr: 'Relie chaque nom à son rôle', en: 'Match each name to their role' },
          pairs: [
            { id: 'p1', left: { ar: 'أبو يزيد مخلد بن كيداد', fr: 'Abū Yazīd Makhlad ibn Kaydād', en: 'Abu Yazid Makhlad ibn Kaydad' }, right: { ar: 'قاد أكبر ثورة ضدّ العبيديّين', fr: 'Mena la plus grande révolte contre les Ubaydides', en: 'Led the largest revolt against the Ubaydids' } },
            { id: 'p2', left: { ar: 'أبو القاسم يزيد بن مخلد', fr: 'Abū al-Qāsim Yazīd ibn Makhlad', en: 'Abu al-Qasim Yazid ibn Makhlad' }, right: { ar: 'عالمٌ من الحامة قُتل سنة 357 هـ', fr: 'Savant d’al-Ḥamma tué en 357 H', en: 'A scholar of al-Hamma, killed in 357 AH' } },
            { id: 'p3', left: { ar: 'أبو خزر', fr: 'Abū Khazar', en: 'Abu Khazar' }, right: { ar: 'رافق العبيديّين إلى مصر ليحمي أهل الدعوة', fr: 'Accompagna les Ubaydides en Égypte pour protéger les gens de l’Appel', en: 'Accompanied the Ubaydids to Egypt to protect the People of the Call' } },
            { id: 'p4', left: { ar: 'أبو نوح', fr: 'Abū Nūḥ', en: 'Abu Nuh' }, right: { ar: 'انتقل إلى وارجلان لإحياء الحلقات العلمية', fr: 'Gagna Ouargla pour raviver les cercles d’étude', en: 'Moved to Warjlan to revive the scholarly circles' } },
          ],
          explanation: {
            ar: 'لكلّ اسمٍ دورٌ في قصّة أهل الاستقامة في هذين القرنين.',
            fr: 'Chaque nom a un rôle dans l’histoire des gens de la Rectitude de ces deux siècles.',
            en: 'Each name had a role in the story of the People of Rectitude in these two centuries.',
          },
        },
        {
          id: 'q4',
          type: 'ordering',
          question: { ar: 'رتّب هذه الأحداث زمنيًّا', fr: 'Ordonne ces événements chronologiquement', en: 'Put these events in order' },
          items: [
            { id: 'o1', label: { ar: 'انطلاق ثورة أبي يزيد من توزر', fr: 'Départ de la révolte d’Abū Yazīd depuis Tozeur', en: 'Abu Yazid’s revolt sets out from Tozeur' } },
            { id: 'o2', label: { ar: 'هزيمة أبي يزيد', fr: 'Défaite d’Abū Yazīd', en: 'Abu Yazid’s defeat' } },
            { id: 'o3', label: { ar: 'مقتل الشيخ أبي القاسم ثمّ معركة بغاي', fr: 'Mort du cheikh Abū al-Qāsim puis bataille de Baghāy', en: 'Killing of Sheikh Abu al-Qasim, then the battle of Baghay' } },
            { id: 'o4', label: { ar: 'رحيل العبيديّين إلى مصر', fr: 'Départ des Ubaydides pour l’Égypte', en: 'The Ubaydids’ departure to Egypt' } },
          ],
          explanation: {
            ar: '331 هـ ثمّ 334 هـ ثمّ 357–358 هـ ثمّ 361 هـ.',
            fr: '331 H, puis 334 H, puis 357–358 H, puis 361 H.',
            en: '331 AH, then 334 AH, then 357–358 AH, then 361 AH.',
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
        ar: 'عندما رأى أبو خزر الدماء تُسفك، ماذا قرّر؟',
        fr: 'Quand Abū Khazar vit le sang couler, que décida-t-il ?',
        en: 'When Abu Khazar saw blood being shed, what did he decide?',
      },
      choices: [
        {
          id: 'surrender',
          isCorrect: true,
          label: { ar: 'سلّم نفسه وقفًا للدماء وحماية لأهل الدعوة', fr: 'Il se rendit pour mettre fin aux effusions de sang et protéger les gens de l’Appel', en: 'He surrendered to stop the bloodshed and protect the People of the Call' },
          feedback: { ar: 'صحيح — قدّم حفظ الأرواح والأمان على المواجهة.', fr: 'Exact — il plaça la préservation des vies et de la sécurité avant l’affrontement.', en: 'Correct — he placed protecting lives and safety above confrontation.' },
        },
        {
          id: 'fight',
          isCorrect: false,
          label: { ar: 'تابع القتال حتّى النهاية', fr: 'Il poursuivit le combat jusqu’au bout', en: 'He fought on to the end' },
          feedback: { ar: 'لا — سلّم نفسه بعد أن نال الأمان لأهل الدعوة.', fr: 'Non — il se rendit après avoir obtenu la sécurité pour les gens de l’Appel.', en: 'No — he surrendered after obtaining safety for the People of the Call.' },
        },
        {
          id: 'flee',
          isCorrect: false,
          label: { ar: 'هرب وترك أتباعه', fr: 'Il s’enfuit en abandonnant ses partisans', en: 'He fled and abandoned his followers' },
          feedback: { ar: 'لا — بل رافق العبيديّين ليضمن أمان أتباعه.', fr: 'Non — il accompagna les Ubaydides pour garantir la sécurité de ses partisans.', en: 'No — he accompanied the Ubaydids to ensure his followers’ safety.' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من هذا الدرس — اقلب كلّ بطاقة', fr: 'Des valeurs de cette leçon — retourne chaque carte', en: 'Values from this lesson — flip each card' },
      values: [
        {
          id: 'truth',
          value: { ar: 'كلمة الحقّ', fr: 'La parole de vérité', en: 'The word of truth' },
          evidence: { ar: 'قال أبو زكريا فصيل: في قحط الإسلام تُنال الجنّة بكلمة حقّ تُقال.', fr: 'Abū Zakariyyā’ Faṣīl dit : quand l’islam est en disette, on gagne le Paradis par une parole de vérité.', en: 'Abu Zakariya Fasil said: when Islam is in famine, Paradise is earned by a word of truth spoken.' },
        },
        {
          id: 'discipline',
          value: { ar: 'الإنكار على الفساد', fr: 'Refuser le désordre', en: 'Standing against corruption' },
          evidence: { ar: 'لم يُنكر أبو يزيد على من ينهب فتخلّت عنه القبائل.', fr: 'Abū Yazīd ne réprimanda pas les pillards et les tribus l’abandonnèrent.', en: 'Abu Yazid did not rebuke those who looted, and the tribes abandoned him.' },
        },
        {
          id: 'counsel',
          value: { ar: 'الاستماع إلى النصيحة', fr: 'Écouter le conseil', en: 'Heeding advice' },
          evidence: { ar: 'نصح المشايخ بعدم الثأر دون القوّة، وخسر أهل الدعوة كثيرًا من طلبتهم في بغاي.', fr: 'Les cheikhs conseillèrent de ne pas chercher vengeance sans force, et les gens de l’Appel perdirent beaucoup d’étudiants à Baghāy.', en: 'Sheikhs advised against revenge without strength, and the People of the Call lost many students at Baghay.' },
        },
        {
          id: 'knowledge',
          value: { ar: 'إحياء العلم', fr: 'Raviver le savoir', en: 'Reviving knowledge' },
          evidence: { ar: 'انتقل أبو نوح إلى وارجلان لإحياء الحلقات العلمية.', fr: 'Abū Nūḥ gagna Ouargla pour raviver les cercles d’étude.', en: 'Abu Nuh moved to Warjlan to revive the scholarly circles.' },
        },
      ],
    },

    // 16 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'عاش أهل الاستقامة في القرنين 4 و5 هـ بين ظلم العبيديين وقحط الدين، فلم تنجح ثورة أبي يزيد، وخسروا الكثير في بغاي، لكنّ الشيخين حفظا الأمان والعلم: أبو خزر بحماية الأتباع، وأبو نوح بإحياء الحلقات في وارجلان.',
        fr: 'Aux IVe et Ve siècles H, les gens de la Rectitude vécurent entre l’oppression des Ubaydides et la disette de religion : la révolte d’Abū Yazīd échoua et ils perdirent beaucoup à Baghāy, mais les deux cheikhs préservèrent sécurité et savoir : Abū Khazar en protégeant les partisans, Abū Nūḥ en ravivant les cercles à Ouargla.',
        en: 'In the 4th and 5th centuries AH, the People of Rectitude lived between Ubaydid oppression and a famine of religion: Abu Yazid’s revolt failed and they lost much at Baghay, but the two sheikhs preserved safety and knowledge — Abu Khazar by protecting followers, Abu Nuh by reviving the circles in Warjlan.',
      },
      learned: [
        {
          ar: 'عانى سكّان المغرب الأوسط من العبيديّين، فعمّ الخوف وقلّ الإنتاج.',
          fr: 'Les habitants du Maghreb central souffrirent des Ubaydides ; la peur s’étendit et la production baissa.',
          en: 'The people of the central Maghreb suffered under the Ubaydids; fear spread and production fell.',
        },
        {
          ar: 'انطلقت ثورة أبي يزيد من توزر سنة 331 هـ وحاصرت المهدية، لكنّها انهزمت سنة 334 هـ بعد تخلّي القبائل عنه.',
          fr: 'La révolte d’Abū Yazīd partit de Tozeur en 331 H et assiégea Mahdia, mais fut vaincue en 334 H après l’abandon des tribus.',
          en: 'Abu Yazid’s revolt set out from Tozeur in 331 AH and besieged Mahdia, but was defeated in 334 AH after the tribes abandoned him.',
        },
        {
          ar: 'بعد مقتل أبي القاسم سنة 357 هـ سار الشيخان إلى بغاي، فخسر أهل الدعوة جمعًا كبيرًا من طلبتهم سنة 358 هـ.',
          fr: 'Après la mort d’Abū al-Qāsim en 357 H, les deux cheikhs marchèrent vers Baghāy, et les gens de l’Appel perdirent beaucoup d’étudiants en 358 H.',
          en: 'After Abu al-Qasim’s killing in 357 AH, the two sheikhs marched to Baghay, and the People of the Call lost many students in 358 AH.',
        },
        {
          ar: 'سنة 361 هـ رحل العبيديّون إلى مصر؛ رافقهم أبو خزر ليحمي أهل الدعوة، وانتقل أبو نوح إلى وارجلان لإحياء العلم.',
          fr: 'En 361 H, les Ubaydides partirent pour l’Égypte ; Abū Khazar les accompagna pour protéger les gens de l’Appel, et Abū Nūḥ gagna Ouargla pour raviver le savoir.',
          en: 'In 361 AH the Ubaydids moved to Egypt; Abu Khazar accompanied them to protect the People of the Call, and Abu Nuh moved to Warjlan to revive knowledge.',
        },
      ],
    },
  ],
}
