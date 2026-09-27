import type { Lesson } from '../../types'

// Source: Ibadite History textbook.
//   pages 66–67 — «خلافة علي بن أبي طالب (1)»: وقعة يوم الجمل
//   pages 70–73 — «خلافة علي بن أبي طالب (2)»: صفّين والتحكيم
// Every fact below is taken from those pages; nothing is added from outside them.

const IMG = '/images/lessons/jamal-siffin'

export const jamalSiffin: Lesson = {
  id: 'history-ibadi-g2-s1-l1',
  gradeId: 'history-ibadi-g2',
  moduleId: 'history-ibadi-g2',
  semesterId: 'history-ibadi-g2-s1',
  order: 1,
  status: 'published',
  estimatedMinutes: 35,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'جيشان متقابلان في سهل عند الحدود بين الشام والعراق',
    fr: 'Deux armées face à face dans une plaine, à la frontière entre le Shām et l’Irak',
    en: 'Two armies facing each other on a plain at the Shām–Iraq border',
  },
  title: {
    ar: 'وقعة الجمل ومعركة صفّين',
    fr: 'La bataille du Chameau et la bataille de Ṣiffīn',
    en: 'The Battle of the Camel and the Battle of Ṣiffīn',
  },
  description: {
    ar: 'كيف دخل المسلمون في أوّل اقتتالٍ بينهم؟ اكتشف وقعة يوم الجمل، ثم معركة صفّين وخدعة رفع المصاحف والتحكيم في دومة الجندل.',
    fr: 'Comment les musulmans en sont-ils venus à se combattre pour la première fois ? Découvre le jour du Chameau, puis Ṣiffīn, la ruse des Corans levés et l’arbitrage de Dūmat al-Jandal.',
    en: 'How did Muslims come to fight one another for the first time? Discover the day of the Camel, then Ṣiffīn, the ruse of the raised Qur’ans, and the arbitration at Dūmat al-Jandal.',
  },

  sections: [
    // 01 — Hook: a new caliph inherits an unsettled state
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'قافلةٌ تسير في طريق صحراوي بين الجبال',
        fr: 'Une caravane sur une route désertique entre les montagnes',
        en: 'A caravan on a desert road between mountains',
      },
      title: {
        ar: 'حين اختلف المسلمون لأوّل مرّة',
        fr: 'Quand les musulmans se divisèrent pour la première fois',
        en: 'When the Muslims first divided',
      },
      question: {
        ar: 'كيف وصل المسلمون إلى أوّل معركةٍ بينهم؟',
        fr: 'Comment les musulmans en sont-ils arrivés à leur première bataille entre eux ?',
        en: 'How did the Muslims arrive at their first battle against one another?',
      },
      intro: {
        ar: 'بادر الخليفة عليٌّ إلى تغيير الولاة الذين كانوا في خلافة عثمان، ممّن لا يصلُح للولاية ولا تستقرّ الأوضاع بوجوده، فانطلق الولاة الجدد من المدينة إلى الأمصار الإسلامية: كالبصرة والشام والكوفة واليمن ليتولّوا مناصبهم. لكنّ الطريق إلى الاستقرار لم يكن سهلًا.',
        fr: 'Le calife ‘Alī entreprit de remplacer les gouverneurs de l’époque de ‘Uthmān qui n’étaient pas aptes à gouverner et dont la présence empêchait la stabilité. Les nouveaux gouverneurs partirent de Médine vers les grandes villes — Baṣra, le Shām, Kūfa, le Yémen — pour prendre leurs fonctions. Mais le chemin vers la stabilité ne fut pas simple.',
        en: 'The caliph ‘Alī set about replacing the governors from ‘Uthmān’s time who were unfit to govern and in whose presence conditions could not settle. The new governors set out from Madinah to the great cities — Baṣra, Shām, Kūfa, Yemen — to take up their posts. But the road to stability was not easy.',
      },
    },

    // 02 — The division in the unity of the Muslims (p.66)
    {
      kind: 'story',
      id: 'the-division',
      title: {
        ar: 'انقسامٌ في وحدة المسلمين',
        fr: 'Une division dans l’unité des musulmans',
        en: 'A division in the unity of the Muslims',
      },
      intro: {
        ar: 'بعد بيعة عليٍّ طالبه بعضُ الصحابة بالقصاص لعثمان. اقلب البطاقات لتعرف ما جرى.',
        fr: 'Après l’allégeance à ‘Alī, certains Compagnons réclamèrent le qiṣāṣ pour ‘Uthmān. Retourne les cartes pour découvrir la suite.',
        en: 'After the pledge to ‘Alī, some Companions demanded qiṣāṣ for ‘Uthmān. Flip the cards to learn what happened.',
      },
      cards: [
        {
          id: 'demand',
          image: `${IMG}/demand.png`,
          imageAlt: {
            ar: 'مجلسٌ في المدينة يجتمع فيه الصحابة',
            fr: 'Une assemblée de Compagnons à Médine',
            en: 'A gathering of Companions in Madinah',
          },
          fact: {
            ar: 'انطلق إلى عليٍّ بعد بيعته بعضُ الصحابة ومنهم طلحةُ بن عبيد الله والزبيرُ بن العوّام، وطالبوه بالقصاص لعثمان من الذين قتلوه، ليقيم الحدود ويُرهب المفسدين ويُبعدهم عن المدينة.',
            fr: 'Après lui avoir prêté allégeance, des Compagnons — dont Ṭalḥa ibn ‘Ubaydillāh et az-Zubayr ibn al-‘Awwām — vinrent réclamer le qiṣāṣ pour ‘Uthmān contre ses meurtriers, afin qu’il applique les peines légales et éloigne les fauteurs de trouble de Médine.',
            en: 'After pledging to him, some Companions — among them Ṭalḥa ibn ‘Ubaydillāh and az-Zubayr ibn al-‘Awwām — came demanding qiṣāṣ for ‘Uthmān from those who killed him, so that he might apply the legal penalties and drive the corrupters from Madinah.',
          },
        },
        {
          id: 'answer',
          image: `${IMG}/answer.png`,
          imageAlt: {
            ar: 'الخليفة يردّ على سائليه',
            fr: 'Le calife répond à ceux qui l’interrogent',
            en: 'The caliph answering those who ask him',
          },
          fact: {
            ar: 'فأجابهم بأنّ القصاص غيرُ ممكنٍ قبل أن تستقرّ الأوضاع ويعود الأمن والهدوء إلى الولايات.',
            fr: 'Il leur répondit que le qiṣāṣ n’était pas possible avant que les conditions ne se stabilisent et que la sécurité ne revienne dans les provinces.',
            en: 'He answered them that qiṣāṣ was not possible before conditions settled and security and calm returned to the provinces.',
          },
        },
        {
          id: 'departure',
          image: `${IMG}/departure.png`,
          imageAlt: {
            ar: 'قافلةٌ تغادر المدينة في اتّجاه العراق',
            fr: 'Une caravane quittant Médine en direction de l’Irak',
            en: 'A caravan leaving Madinah towards Iraq',
          },
          fact: {
            ar: 'لكنّ طلحة والزبير استعجلا القصاص وتفريق الجموع؛ ولمّا لم يُجب الخليفة طلبَهم خرجوا من المدينة إلى العراق، ولحقت بهم من مكّة عائشةُ أمّ المؤمنين وذهب معهم الآلاف.',
            fr: 'Mais Ṭalḥa et az-Zubayr voulurent hâter le qiṣāṣ ; le calife n’ayant pas accédé à leur demande, ils quittèrent Médine vers l’Irak. ‘Ā’isha, mère des croyants, les rejoignit depuis La Mecque, et des milliers partirent avec eux.',
            en: 'But Ṭalḥa and az-Zubayr pressed for haste in the qiṣāṣ; when the caliph did not grant their request they left Madinah for Iraq. ‘Ā’isha, mother of the believers, joined them from Makkah, and thousands went with them.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'لماذا رفض عليٌّ تنفيذ القصاص في ذلك الوقت؟ اختر كلّ ما يدعمه النصّ.',
          fr: 'Pourquoi ‘Alī refusa-t-il d’appliquer le qiṣāṣ à ce moment-là ? Choisis tout ce que le texte appuie.',
          en: 'Why did ‘Alī decline to carry out the qiṣāṣ at that time? Choose everything the text supports.',
        },
        options: [
          {
            id: 'stability',
            isRelevant: true,
            label: {
              ar: 'لأنّ الأوضاع لم تستقرّ بعد',
              fr: 'Parce que la situation n’était pas encore stabilisée',
              en: 'Because conditions had not yet settled',
            },
            explanation: {
              ar: 'نصّ الدرس: «غير ممكنٍ قبل أن تستقرّ الأوضاع».',
              fr: 'Le texte : « impossible avant que les conditions ne se stabilisent ».',
              en: 'The text: “not possible before conditions settle.”',
            },
          },
          {
            id: 'security',
            isRelevant: true,
            label: {
              ar: 'لأنّ الأمن لم يعُد إلى الولايات',
              fr: 'Parce que la sécurité n’était pas revenue dans les provinces',
              en: 'Because security had not returned to the provinces',
            },
            explanation: {
              ar: 'أضاف الدرس: «ويعود الأمن والهدوء إلى الولايات».',
              fr: 'Le texte ajoute : « et que la sécurité et le calme reviennent dans les provinces ».',
              en: 'The text adds: “and security and calm return to the provinces.”',
            },
          },
          {
            id: 'disagree',
            isRelevant: false,
            label: {
              ar: 'لأنّه لم يرَ القصاص حقًّا',
              fr: 'Parce qu’il ne reconnaissait pas le qiṣāṣ comme un droit',
              en: 'Because he did not regard qiṣāṣ as a right',
            },
            explanation: {
              ar: 'لم يقل الدرس ذلك؛ إنّما علّق التنفيذ على استقرار الأوضاع لا على إنكار الحقّ.',
              fr: 'Le texte ne dit pas cela : il lie l’application à la stabilité, non au refus du droit.',
              en: 'The text does not say this; it ties execution to stability, not to denying the right.',
            },
          },
          {
            id: 'fear',
            isRelevant: false,
            label: {
              ar: 'لأنّه كان خائفًا من طلحة والزبير',
              fr: 'Parce qu’il craignait Ṭalḥa et az-Zubayr',
              en: 'Because he feared Ṭalḥa and az-Zubayr',
            },
            explanation: {
              ar: 'لم يرد هذا في الدرس إطلاقًا.',
              fr: 'Cela ne figure nulle part dans la leçon.',
              en: 'This does not appear in the lesson at all.',
            },
          },
        ],
      },
    },

    // 03 — Camel fact file (p.67 box)
    {
      kind: 'timeline',
      id: 'jamal-file',
      title: {
        ar: 'بطاقة وقعة يوم الجمل',
        fr: 'Fiche du jour du Chameau',
        en: 'The day of the Camel — fact file',
      },
      intro: {
        ar: 'اضغط على كلّ محطة لتقرأ بطاقة المواجهة الأولى: الجمل.',
        fr: 'Touche chaque étape pour lire la fiche du premier affrontement : le Chameau.',
        en: 'Tap each stop to read the file of the first confrontation: the Camel.',
      },
      image: `${IMG}/jamal.png`,
      imageAlt: {
        ar: 'جملٌ عليه هودجٌ وسط ميدانٍ بعد توقّف القتال',
        fr: 'Un chameau portant un palanquin au milieu du champ après l’arrêt des combats',
        en: 'A camel bearing a howdah in the field after the fighting stopped',
      },
      steps: [
        {
          id: 'date',
          period: { ar: 'التاريخ', fr: 'Date', en: 'Date' },
          label: {
            ar: '15 جمادى الآخر 36 هـ',
            fr: '15 Jumādā al-Ākhir 36 H',
            en: '15 Jumādā al-Ākhir 36 AH',
          },
          detail: {
            ar: 'وبايع أهلُ العراق عليًّا في ذلك اليوم.',
            fr: 'Les gens d’Irak prêtèrent allégeance à ‘Alī ce jour-là.',
            en: 'The people of Iraq pledged allegiance to ‘Alī on that day.',
          },
        },
        {
          id: 'place',
          period: { ar: 'المكان', fr: 'Lieu', en: 'Place' },
          label: {
            ar: 'الخُرَيبة، قرب مدينة الكوفة بالعراق',
            fr: 'Al-Khuraybah, près de Kūfa en Irak',
            en: 'Al-Khuraybah, near the city of Kūfa in Iraq',
          },
          detail: {
            ar: 'واتّخذ عليٌّ الكوفةَ عاصمةً له بعد ذلك.',
            fr: '‘Alī fit ensuite de Kūfa sa capitale.',
            en: '‘Alī afterwards took Kūfa as his capital.',
          },
        },
        {
          id: 'parties',
          period: { ar: 'أطراف الصراع', fr: 'Les camps', en: 'The parties' },
          label: {
            ar: 'الإمام عليّ // طلحة بن عبيد الله والزبير بن العوّام',
            fr: 'L’imam ‘Alī // Ṭalḥa ibn ‘Ubaydillāh et az-Zubayr ibn al-‘Awwām',
            en: 'Imam ‘Alī // Ṭalḥa ibn ‘Ubaydillāh and az-Zubayr ibn al-‘Awwām',
          },
          detail: {
            ar: 'وحضرت الوقعةَ عائشةُ أمّ المؤمنين على ظهر الجمل، ومنه سُمّي اليوم.',
            fr: '‘Ā’isha assista à la bataille sur le dos du chameau, d’où le nom de ce jour.',
            en: '‘Ā’isha was present at the battle on the back of the camel, from which the day takes its name.',
          },
        },
        {
          id: 'cause',
          period: { ar: 'السبب', fr: 'La cause', en: 'The cause' },
          label: {
            ar: 'رفض إمامة عليٍّ إلّا بعد القصاص لعثمان',
            fr: 'Le refus de l’imamat de ‘Alī tant que le qiṣāṣ n’est pas appliqué',
            en: 'Refusing ‘Alī’s imamate until qiṣāṣ for ‘Uthmān was carried out',
          },
          detail: {
            ar: 'وإدراك المنشقّين قبل أن يصلوا الشام.',
            fr: 'Et rattraper les dissidents avant qu’ils n’atteignent le Shām.',
            en: 'And to overtake the dissenters before they reached Shām.',
          },
        },
        {
          id: 'numbers',
          period: { ar: 'عدد المشاركين', fr: 'Effectifs', en: 'Numbers' },
          label: {
            ar: '12000 / 9000 حسب الروايات',
            fr: '12000 / 9000 selon les récits',
            en: '12,000 / 9,000 according to the narrations',
          },
          detail: {
            ar: 'تختلف الأرقام حسب الروايات.',
            fr: 'Les chiffres varient selon les récits.',
            en: 'The numbers differ according to the narrations.',
          },
          certainty: 'approximate',
        },
      ],
    },

    // 04 — The peace that was sabotaged (p.67 body)
    {
      kind: 'sorting',
      id: 'jamal-sequence',
      title: {
        ar: 'كيف اشتعلت المعركة؟',
        fr: 'Comment la bataille s’est-elle déclenchée ?',
        en: 'How did the battle ignite?',
      },
      intro: {
        ar: 'رتّب ما جرى من الأوّل إلى الأخير كما ذكره الدرس.',
        fr: 'Range les événements du premier au dernier, tels que le texte les rapporte.',
        en: 'Order the events from first to last, as the lesson reports them.',
      },
      image: `${IMG}/reconciliation.png`,
      imageAlt: {
        ar: 'مجلس تفاوضٍ في العراء بين فريقين',
        fr: 'Une négociation en plein air entre deux camps',
        en: 'An open-air negotiation between two camps',
      },
      items: [
        {
          id: 'three',
          label: {
            ar: 'انقسم المسلمون على ثلاث جهات: عليٌّ بالحجاز، وطلحة والزبير بالعراق، ومعاوية بالشام',
            fr: 'Les musulmans se répartirent en trois camps : ‘Alī au Ḥijāz, Ṭalḥa et az-Zubayr en Irak, Mu‘āwiya au Shām',
            en: 'The Muslims divided into three sides: ‘Alī in the Ḥijāz, Ṭalḥa and az-Zubayr in Iraq, Mu‘āwiya in Shām',
          },
        },
        {
          id: 'talks',
          label: {
            ar: 'لحِق عليٌّ بطلحة والزبير وحاورهم فاتّفقوا على الصُّلح',
            fr: '‘Alī rejoignit Ṭalḥa et az-Zubayr, dialogua avec eux et ils convinrent de la réconciliation',
            en: '‘Alī reached Ṭalḥa and az-Zubayr, spoke with them, and they agreed on reconciliation',
          },
        },
        {
          id: 'sabotage',
          label: {
            ar: 'لكنّ الراغبين في الفتنة أشعلوا العداوة بين الفئتين',
            fr: 'Mais ceux qui voulaient la discorde rallumèrent l’hostilité entre les deux groupes',
            en: 'But those who wanted strife rekindled hostility between the two groups',
          },
        },
        {
          id: 'battle',
          label: {
            ar: 'وقع القتال الذي يُسمّى بيوم الجمل',
            fr: 'Eut lieu le combat appelé « le jour du Chameau »',
            en: 'The fighting called “the day of the Camel” took place',
          },
        },
        {
          id: 'camel',
          label: {
            ar: 'إنزال الجمل الذي تركبه أمّ المؤمنين، وتوقّف القتال',
            fr: 'On fit descendre le chameau que montait la mère des croyants, et les combats cessèrent',
            en: 'The camel the mother of the believers rode was brought down, and the fighting stopped',
          },
        },
      ],
      explanation: {
        ar: 'كان الصُّلح قد تمّ فعلًا بين عليٍّ وطلحة والزبير، لكنّ المفتنين عملوا على إيقاد الفتنة فأشعلوا العداوة بين الفئتين. وانتهت الواقعة بمقتل آلاف المسلمين ومنهم طلحة والزبير.',
        fr: 'La réconciliation avait bel et bien été conclue entre ‘Alī, Ṭalḥa et az-Zubayr, mais les fauteurs de trouble œuvrèrent à attiser la discorde et rallumèrent l’hostilité. La bataille s’acheva par la mort de milliers de musulmans, dont Ṭalḥa et az-Zubayr.',
        en: 'Reconciliation had in fact been reached between ‘Alī, Ṭalḥa and az-Zubayr, but the instigators worked to kindle the strife and reignited hostility. The event ended with thousands of Muslims killed, among them Ṭalḥa and az-Zubayr.',
      },
    },

    // 05 — Results of the Camel (p.67 box, نتائج المعركة)
    {
      kind: 'value',
      id: 'jamal-results',
      title: {
        ar: 'نتائج وقعة الجمل',
        fr: 'Les résultats du jour du Chameau',
        en: 'Results of the day of the Camel',
      },
      prompt: {
        ar: 'بماذا وصف الدرسُ وقعةَ الجمل؟',
        fr: 'Comment la leçon qualifie-t-elle le jour du Chameau ?',
        en: 'How does the lesson describe the day of the Camel?',
      },
      choices: [
        {
          id: 'first',
          isCorrect: true,
          label: {
            ar: 'أوّل معركة في ما بين المسلمين',
            fr: 'La première bataille entre musulmans',
            en: 'The first battle among the Muslims',
          },
          feedback: {
            ar: 'صحيح، وهذا نصّ ما ورد في بطاقة الدرس.',
            fr: 'Exact — c’est le texte même de la fiche de la leçon.',
            en: 'Correct — this is the lesson’s own wording in the fact file.',
          },
        },
        {
          id: 'vs-enemy',
          isCorrect: false,
          label: {
            ar: 'معركة ضدّ عدوٍّ خارجي',
            fr: 'Une bataille contre un ennemi extérieur',
            en: 'A battle against an external enemy',
          },
          feedback: {
            ar: 'لا، فقد ذكر الدرس أنّ القتلى «كلّهم مسلمون».',
            fr: 'Non : le texte précise que les morts étaient « tous musulmans ».',
            en: 'No — the lesson states that the slain were “all of them Muslims.”',
          },
        },
        {
          id: 'small',
          isCorrect: false,
          label: {
            ar: 'مناوشةٌ صغيرةٌ بلا نتائج',
            fr: 'Une petite escarmouche sans conséquence',
            en: 'A small skirmish without consequences',
          },
          feedback: {
            ar: 'لا، فقد سقط فيها آلافُ القتلى وتغيّرت بها أحوال العراق.',
            fr: 'Non : des milliers y périrent et la situation de l’Irak en fut changée.',
            en: 'No — thousands were killed in it and the situation of Iraq was changed by it.',
          },
        },
      ],
      valuesTitle: {
        ar: 'ما ترتّب على الوقعة — اقلب البطاقة لترى التفصيل',
        fr: 'Ce qui en a découlé — retourne la carte pour le détail',
        en: 'What followed from it — flip a card for the detail',
      },
      values: [
        {
          id: 'dead',
          value: { ar: 'آلاف القتلى كلّهم مسلمون', fr: 'Des milliers de morts, tous musulmans', en: 'Thousands slain, all of them Muslims' },
          evidence: {
            ar: 'ومنهم طلحةُ والزبير رضي الله عنهما.',
            fr: 'Parmi eux Ṭalḥa et az-Zubayr.',
            en: 'Among them Ṭalḥa and az-Zubayr.',
          },
        },
        {
          id: 'iraq',
          value: { ar: 'عودة العراق إلى إمرة الإمام عليّ', fr: 'Le retour de l’Irak sous l’autorité de l’imam ‘Alī', en: 'Iraq returns to Imam ‘Alī’s authority' },
          evidence: {
            ar: 'وبايع أهلُ العراق عليًّا، واتّخذ الكوفةَ عاصمةً له.',
            fr: 'Les gens d’Irak lui prêtèrent allégeance et il fit de Kūfa sa capitale.',
            en: 'The people of Iraq pledged allegiance to him, and he took Kūfa as his capital.',
          },
        },
        {
          id: 'first-ever',
          value: { ar: 'أوّل معركة في ما بين المسلمين', fr: 'La première bataille entre musulmans', en: 'The first battle among Muslims' },
          evidence: {
            ar: 'فُتح بها بابُ الاقتتال الداخلي بين أهل القبلة.',
            fr: 'Elle ouvrit la porte des combats internes entre gens de la qibla.',
            en: 'It opened the door of internal fighting among the people of the qibla.',
          },
        },
        {
          id: 'fitna',
          value: { ar: 'خطر المفتنين', fr: 'Le danger des fauteurs de trouble', en: 'The danger of the instigators' },
          evidence: {
            ar: '«عمل المفتنون على إيقاد الفتنة»، فأفسدوا صُلحًا كان قد تمّ.',
            fr: '« Les fauteurs de trouble œuvrèrent à attiser la discorde », ruinant une réconciliation déjà conclue.',
            en: '“The instigators worked to kindle the strife,” ruining a reconciliation already reached.',
          },
        },
      ],
    },

    // 06 — Vocabulary from the Camel pages (p.67 أتعرّف)
    {
      kind: 'quiz',
      id: 'jamal-vocabulary',
      title: { ar: 'أتعرّف — كلمات الجمل', fr: 'Vocabulaire — le Chameau', en: 'Vocabulary — the Camel' },
      intro: {
        ar: 'كلماتٌ وردت في صفحة وقعة الجمل.',
        fr: 'Des mots figurant dans la page du jour du Chameau.',
        en: 'Words from the page on the day of the Camel.',
      },
      questions: [
        {
          id: 'jv-match',
          type: 'matching',
          question: {
            ar: 'صِل كلّ كلمة بمعناها.',
            fr: 'Associe chaque mot à son sens.',
            en: 'Match each word with its meaning.',
          },
          pairs: [
            {
              id: 'takhi',
              left: { ar: 'التآخي', fr: 'At-tā’khī', en: 'At-tā’khī' },
              right: {
                ar: 'التفاهم والمحبّة، المودّة والصداقة',
                fr: 'L’entente et l’affection, l’amitié',
                en: 'Mutual understanding and affection, friendship',
              },
            },
            {
              id: 'takhalluf',
              left: { ar: 'تخلَّفَ', fr: 'Takhallafa', en: 'Takhallafa' },
              right: { ar: 'تأخَّرَ أو غابَ', fr: 'Être en retard ou absent', en: 'To lag behind or be absent' },
            },
            {
              id: 'qisas',
              left: { ar: 'القصاص', fr: 'Al-qiṣāṣ', en: 'Al-qiṣāṣ' },
              right: {
                ar: 'أن يُفعل بالفاعل مثلُ ما فعل: النفس بالنفس، والجرح بالجرح',
                fr: 'Faire subir à l’auteur ce qu’il a fait : vie pour vie, blessure pour blessure',
                en: 'That the doer receive the like of what he did: life for life, wound for wound',
              },
            },
            {
              id: 'hiyad',
              left: { ar: 'الحياد الإيجابي', fr: 'La neutralité positive', en: 'Positive neutrality' },
              right: {
                ar: 'عدم الميل إلى أيّ طرف، والسعي إلى الإصلاح',
                fr: 'Ne pencher vers aucun camp et œuvrer à la réconciliation',
                en: 'Not inclining to either side, and striving for reconciliation',
              },
            },
          ],
          explanation: {
            ar: 'هذه الكلمات وردت في صفحة «أتعرّف» بعد وقعة الجمل.',
            fr: 'Ces mots figurent dans la rubrique « أتعرّف » après le jour du Chameau.',
            en: 'These words appear in the “أتعرّف” panel after the day of the Camel.',
          },
        },
      ],
    },

    // 07 — Bridge: the problem that remained (p.70)
    {
      kind: 'hero',
      id: 'siffin-hero',
      image: `${IMG}/siffin-hero.png`,
      imageAlt: {
        ar: 'جيشان متقابلان في سهل عند الحدود بين الشام والعراق',
        fr: 'Deux armées face à face dans une plaine',
        en: 'Two armies facing each other on a plain',
      },
      title: {
        ar: 'بقيت الشام',
        fr: 'Restait le Shām',
        en: 'Shām remained',
      },
      question: {
        ar: 'كيف سيعامل الخليفةُ واليَ الشام؟',
        fr: 'Comment le calife va-t-il traiter le gouverneur du Shām ?',
        en: 'How will the caliph deal with the governor of Shām?',
      },
      intro: {
        ar: 'ظلّت منطقة الشام لم تدخل في طاعة الخليفة عليّ، وعليها معاوية الذي أخذ يطالب بدم عثمان وهو مستعدٌّ للقتال من أجله. وقد شهد عليٌّ مقتلَ آلاف المسلمين في العراق بسبب الفُرقة، كما رأى توقُّف حركة الفتح وانتشار الدعاة، واشتغال الناس بالفتنة.',
        fr: 'La région du Shām n’était pas entrée dans l’obéissance au calife ‘Alī ; elle était gouvernée par Mu‘āwiya, qui réclamait le sang de ‘Uthmān et se disait prêt à combattre pour cela. ‘Alī avait vu des milliers de musulmans périr en Irak à cause de la division, la conquête s’arrêter, et les gens s’occuper de la discorde.',
        en: 'The region of Shām had not entered the obedience of the caliph ‘Alī; over it was Mu‘āwiya, who demanded ‘Uthmān’s blood and was ready to fight for it. ‘Alī had witnessed thousands of Muslims killed in Iraq through division, the movement of conquest halted, and people consumed by strife.',
      },
    },

    // 02 — Why did it come to this? (questions from أستكشف)
    {
      kind: 'story',
      id: 'the-standoff',
      title: {
        ar: 'قبل المواجهة',
        fr: 'Avant l’affrontement',
        en: 'Before the confrontation',
      },
      intro: {
        ar: 'أرسل عليٌّ أحدَ مساعديه إلى معاوية يدعوه إلى الدخول فيما دخل فيه المسلمون. اقلب البطاقات لتعرف ما حدث.',
        fr: '‘Alī envoya l’un de ses adjoints à Mu‘āwiya pour l’inviter à rejoindre ce qu’avaient rejoint les musulmans. Retourne les cartes pour découvrir la suite.',
        en: '‘Alī sent one of his aides to Mu‘āwiya, inviting him to enter into what the Muslims had entered. Flip the cards to find out what happened.',
      },
      cards: [
        {
          id: 'invitation',
          image: `${IMG}/envoy.png`,
          imageAlt: {
            ar: 'رسولٌ يحمل رسالةً على طريق الشام',
            fr: 'Un messager portant une lettre sur la route du Shām',
            en: 'A messenger carrying a letter on the road to Shām',
          },
          fact: {
            ar: 'أرسل عليٌّ كرّم الله وجهه أحدَ مساعديه إلى معاوية بن أبي سفيان بالشام يدعوه إلى الدخول فيما دخل فيه المسلمون.',
            fr: '‘Alī envoya l’un de ses adjoints à Mu‘āwiya ibn Abī Sufyān, au Shām, pour l’inviter à rejoindre ce qu’avaient rejoint les musulmans.',
            en: '‘Alī sent one of his aides to Mu‘āwiya ibn Abī Sufyān in Shām, inviting him to enter into what the Muslims had entered.',
          },
        },
        {
          id: 'refusal',
          image: `${IMG}/refusal.png`,
          imageAlt: {
            ar: 'مجلس الوالي في الشام',
            fr: 'Le conseil du gouverneur au Shām',
            en: 'The governor’s council in Shām',
          },
          fact: {
            ar: 'لكنّ معاوية رفض مبايعته وطاعته، وطالبه بقَتَلة الخليفة، ثم أن يختار المسلمون لأنفسهم إمامًا.',
            fr: 'Mais Mu‘āwiya refusa de lui prêter allégeance et de lui obéir ; il réclama les meurtriers du calife, puis que les musulmans choisissent eux-mêmes leur imam.',
            en: 'But Mu‘āwiya refused allegiance and obedience to him, demanded the killers of the caliph, and then that the Muslims choose an imam for themselves.',
          },
        },
        {
          id: 'march',
          image: `${IMG}/march.png`,
          imageAlt: {
            ar: 'جيش يسير من العراق نحو الشام',
            fr: 'Une armée marchant d’Irak vers le Shām',
            en: 'An army marching from Iraq towards Shām',
          },
          fact: {
            ar: 'اعتبر عليٌّ معاويةَ خارجًا عن اجتماع المسلمين، فسار بجيشه من العراق إلى معاوية.',
            fr: '‘Alī considéra Mu‘āwiya comme sorti de l’unité des musulmans, et marcha avec son armée d’Irak vers lui.',
            en: '‘Alī considered Mu‘āwiya to have left the unity of the Muslims, and marched with his army from Iraq towards him.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'لماذا تواصل الصراع وعدم طاعة الإمام؟ اختر كلّ ما يدعمه النصّ.',
          fr: 'Pourquoi le conflit s’est-il poursuivi ? Choisis tout ce que le texte appuie.',
          en: 'Why did the conflict continue? Choose everything the text supports.',
        },
        options: [
          {
            id: 'bayah',
            isRelevant: true,
            label: {
              ar: 'رفض معاوية المبايعة والطاعة',
              fr: 'Mu‘āwiya refusa l’allégeance et l’obéissance',
              en: 'Mu‘āwiya refused allegiance and obedience',
            },
            explanation: {
              ar: 'نصّ الدرس: «لكنّ معاوية رفض مبايعته وطاعته».',
              fr: 'Le texte : « Mais Mu‘āwiya refusa de lui prêter allégeance et de lui obéir ».',
              en: 'The text states: “But Mu‘āwiya refused allegiance and obedience to him.”',
            },
          },
          {
            id: 'blood',
            isRelevant: true,
            label: {
              ar: 'المطالبة بدم عثمان',
              fr: 'La revendication du sang de ‘Uthmān',
              en: 'The demand for ‘Uthmān’s blood',
            },
            explanation: {
              ar: 'كان معاوية «يطالب بدم عثمان وهو مستعدٌّ للقتال من أجله».',
              fr: 'Mu‘āwiya « réclamait le sang de ‘Uthmān et était prêt à combattre pour cela ».',
              en: 'Mu‘āwiya “demanded ‘Uthmān’s blood and was ready to fight for it.”',
            },
          },
          {
            id: 'imam',
            isRelevant: true,
            label: {
              ar: 'المطالبة بأن يختار المسلمون إمامًا جديدًا',
              fr: 'Exiger que les musulmans choisissent un nouvel imam',
              en: 'Demanding that Muslims choose a new imam',
            },
            explanation: {
              ar: 'طالب معاوية «ثم أن يختار المسلمون لأنفسهم إمامًا».',
              fr: 'Mu‘āwiya exigea « que les musulmans choisissent eux-mêmes leur imam ».',
              en: 'Mu‘āwiya demanded “that the Muslims choose an imam for themselves.”',
            },
          },
          {
            id: 'land',
            isRelevant: false,
            label: {
              ar: 'الخلاف على أرضٍ جديدة للفتح',
              fr: 'Un désaccord sur une nouvelle terre à conquérir',
              en: 'A dispute over new land to conquer',
            },
            explanation: {
              ar: 'لم يذكر الدرس ذلك؛ بل ذكر أنّ حركة الفتح توقّفت بسبب الفتنة.',
              fr: 'Le texte ne le dit pas : il indique au contraire que la conquête s’était arrêtée à cause de la discorde.',
              en: 'The text does not say this; rather, it says conquest had halted because of the strife.',
            },
          },
        ],
      },
    },

    // 03 — Siffin fact file (from the page-71 box)
    {
      kind: 'timeline',
      id: 'siffin-file',
      title: {
        ar: 'بطاقة معركة صفّين',
        fr: 'Fiche de la bataille de Ṣiffīn',
        en: 'Ṣiffīn fact file',
      },
      intro: {
        ar: 'اضغط على كلّ محطة لتقرأ بطاقة المواجهة الثانية: صفّين.',
        fr: 'Touche chaque étape pour lire la fiche du deuxième affrontement : Ṣiffīn.',
        en: 'Tap each stop to read the file of the second confrontation: Ṣiffīn.',
      },
      image: `${IMG}/siffin.png`,
      imageAlt: {
        ar: 'مبارزة بين فارسين أمام صفّين من الجند',
        fr: 'Un duel devant des rangées de soldats',
        en: 'A duel before ranks of soldiers',
      },
      steps: [
        {
          id: 'date',
          period: { ar: 'التاريخ', fr: 'Date', en: 'Date' },
          label: {
            ar: 'من محرّم 37 هـ إلى 15 صفر 37 هـ',
            fr: 'De Muḥarram 37 H au 15 Ṣafar 37 H',
            en: 'From Muḥarram 37 AH to 15 Ṣafar 37 AH',
          },
          detail: {
            ar: 'استمرّت المواجهة قرابة شهرين.',
            fr: 'L’affrontement dura près de deux mois.',
            en: 'The confrontation lasted nearly two months.',
          },
        },
        {
          id: 'place',
          period: { ar: 'المكان', fr: 'Lieu', en: 'Place' },
          label: {
            ar: 'صفّين، على الحدود بين الشام والعراق',
            fr: 'Ṣiffīn, à la frontière entre le Shām et l’Irak',
            en: 'Ṣiffīn, on the border between Shām and Iraq',
          },
          detail: {
            ar: 'التقى جيشُ عليٍّ بجيش الشام في مكان يُسمّى صفّين.',
            fr: 'L’armée de ‘Alī rencontra celle du Shām en un lieu nommé Ṣiffīn.',
            en: '‘Alī’s army met the army of Shām at a place called Ṣiffīn.',
          },
        },
        {
          id: 'parties',
          period: { ar: 'أطراف الصراع', fr: 'Les camps', en: 'The parties' },
          label: {
            ar: 'الإمام عليّ // معاوية وعمرو بن العاص',
            fr: 'L’imam ‘Alī // Mu‘āwiya et ‘Amr ibn al-‘Āṣ',
            en: 'Imam ‘Alī // Mu‘āwiya and ‘Amr ibn al-‘Āṣ',
          },
          detail: {
            ar: 'كان عمرو بن العاص إلى جانب معاوية، وله دورٌ حاسم في نهاية المعركة.',
            fr: '‘Amr ibn al-‘Āṣ était aux côtés de Mu‘āwiya et joua un rôle décisif à la fin.',
            en: '‘Amr ibn al-‘Āṣ was at Mu‘āwiya’s side and played a decisive role at the end.',
          },
        },
        {
          id: 'cause',
          period: { ar: 'السبب', fr: 'La cause', en: 'The cause' },
          label: {
            ar: 'رفض إمامة عليّ والمطالبة بدم عثمان',
            fr: 'Le refus de l’imamat de ‘Alī et la revendication du sang de ‘Uthmān',
            en: 'Rejection of ‘Alī’s imamate and the demand for ‘Uthmān’s blood',
          },
          detail: {
            ar: 'وكان هدف عليٍّ إعادةَ معاوية وجيش الشام إلى صفّ المسلمين.',
            fr: 'Le but de ‘Alī était de ramener Mu‘āwiya et l’armée du Shām dans le rang des musulmans.',
            en: '‘Alī’s aim was to return Mu‘āwiya and the army of Shām to the ranks of the Muslims.',
          },
        },
        {
          id: 'numbers',
          period: { ar: 'عدد المشاركين', fr: 'Effectifs', en: 'Numbers' },
          label: {
            ar: 'أكثر من 12000 // أكثر من 6000',
            fr: 'Plus de 12000 // plus de 6000',
            en: 'More than 12,000 // more than 6,000',
          },
          detail: {
            ar: 'تختلف الأرقام حسب الروايات.',
            fr: 'Les chiffres varient selon les récits.',
            en: 'The numbers differ according to the narrations.',
          },
          certainty: 'approximate',
        },
      ],
    },

    // 04 — The turning point: order the sequence
    {
      kind: 'sorting',
      id: 'siffin-sequence',
      title: {
        ar: 'تطوّر المواجهة',
        fr: 'Le déroulement de l’affrontement',
        en: 'How the confrontation unfolded',
      },
      intro: {
        ar: 'رتّب مراحل المعركة من الأوّل إلى الأخير كما ذكرها الدرس.',
        fr: 'Range les étapes de la bataille, de la première à la dernière, telles que le texte les donne.',
        en: 'Order the stages of the battle from first to last, as the lesson gives them.',
      },
      image: `${IMG}/mushaf.png`,
      imageAlt: {
        ar: 'مصاحف مرفوعة على أسنّة الرماح',
        fr: 'Des Corans levés sur la pointe des lances',
        en: 'Qur’ans raised on spear points',
      },
      items: [
        {
          id: 'letters',
          label: {
            ar: 'مراسلات بين عليّ ومعاوية',
            fr: 'Échanges de lettres entre ‘Alī et Mu‘āwiya',
            en: 'Letters exchanged between ‘Alī and Mu‘āwiya',
          },
        },
        {
          id: 'skirmish',
          label: {
            ar: 'مشادّات بين المجموعات',
            fr: 'Escarmouches entre les groupes',
            en: 'Skirmishes between the groups',
          },
        },
        {
          id: 'battle',
          label: {
            ar: 'نشوب معركة شاملة والغلبة تميل إلى الإمام عليّ',
            fr: 'Bataille générale, l’avantage penchant vers l’imam ‘Alī',
            en: 'Full battle breaks out, the advantage leaning to Imam ‘Alī',
          },
        },
        {
          id: 'mushaf',
          label: {
            ar: 'حمل جيش معاوية المصاحفَ على أسنّة الرماح',
            fr: 'L’armée de Mu‘āwiya lève les Corans sur les lances',
            en: 'Mu‘āwiya’s army raises the Qur’ans on spear points',
          },
        },
        {
          id: 'stop',
          label: {
            ar: 'توقّف القتال واللجوء إلى التحكيم، وهي خدعة',
            fr: 'Arrêt des combats et recours à l’arbitrage — une ruse',
            en: 'Fighting stops and arbitration is adopted — a ruse',
          },
        },
      ],
      explanation: {
        ar: 'أوشك جيشُ عليٍّ على الانتصار، فأشار عمرو بن العاص على معاوية والجيش برفع المصاحف على الرماح قائلين: «بيننا وبينكم كتاب الله». ووصف الدرس هذا بأنّه خدعة، نتيجتها: تجنُّب معاوية الخسارة.',
        fr: 'L’armée de ‘Alī était près de vaincre ; ‘Amr ibn al-‘Āṣ conseilla alors de lever les Corans sur les lances en disant : « Entre nous et vous, le Livre de Dieu ». Le texte qualifie cela de ruse, dont le résultat fut d’éviter la défaite à Mu‘āwiya.',
        en: '‘Alī’s army was near victory, so ‘Amr ibn al-‘Āṣ advised raising the Qur’ans on the spears, saying: “Between us and you is the Book of God.” The lesson calls this a ruse, whose result was that Mu‘āwiya avoided defeat.',
      },
    },

    // 05 — The army splits in two
    {
      kind: 'placement',
      id: 'the-split',
      title: {
        ar: 'انقسام جيش عليّ',
        fr: 'La division de l’armée de ‘Alī',
        en: 'The splitting of ‘Alī’s army',
      },
      intro: {
        ar: 'انقسم جيشُ عليٍّ إلى رأيين. ضع كلّ بطاقة عند الفريق الذي تنتمي إليه.',
        fr: 'L’armée de ‘Alī se divisa en deux avis. Place chaque carte dans le camp qui lui correspond.',
        en: '‘Alī’s army split into two views. Place each card with the group it belongs to.',
      },
      slots: [
        {
          id: 'accepted',
          label: {
            ar: 'فريقٌ قَبِلَ توقيف القتال',
            fr: 'Le groupe qui accepta l’arrêt des combats',
            en: 'The group that accepted stopping the fighting',
          },
        },
        {
          id: 'refused',
          label: {
            ar: 'فريقٌ رفض هذا الطلب',
            fr: 'Le groupe qui refusa cette demande',
            en: 'The group that refused this request',
          },
        },
      ],
      cards: [
        {
          id: 'ali-with-them',
          slotId: 'accepted',
          label: {
            ar: 'ومنهم عليٌّ نفسه، مال إلى وقف القتال',
            fr: '‘Alī lui-même, qui pencha pour l’arrêt des combats',
            en: '‘Alī himself, who inclined to stopping the fighting',
          },
          hint: {
            ar: 'مال عليٌّ إلى وقف القتال لأنّها دماءُ المسلمين.',
            fr: '‘Alī pencha pour l’arrêt des combats car c’était le sang des musulmans.',
            en: '‘Alī inclined to stop the fighting because it was the blood of Muslims.',
          },
        },
        {
          id: 'peace',
          slotId: 'accepted',
          label: {
            ar: 'ميلًا إلى السِّلم',
            fr: 'Par inclination à la paix',
            en: 'Out of inclination to peace',
          },
          hint: {
            ar: 'وصف الدرس هذا الفريق بأنّه «قَبِلَ وقف القتال ميلًا إلى السِّلم».',
            fr: 'Le texte décrit ce groupe comme ayant « accepté l’arrêt des combats par inclination à la paix ».',
            en: 'The lesson describes this group as having “accepted stopping the fighting out of inclination to peace.”',
          },
        },
        {
          id: 'trick',
          slotId: 'refused',
          label: {
            ar: 'اعتبروا ذلك خدعة',
            fr: 'Ils considérèrent cela comme une ruse',
            en: 'They considered it a ruse',
          },
          hint: {
            ar: 'رفض هذا الفريق الطلبَ «معتبرين ذلك خدعة».',
            fr: 'Ce groupe refusa la demande « considérant cela comme une ruse ».',
            en: 'This group refused the request, “considering it a ruse.”',
          },
        },
        {
          id: 'hukm',
          slotId: 'refused',
          label: {
            ar: 'وأنّه لا حُكم إلّا لله',
            fr: 'Et qu’il n’y a de jugement qu’à Dieu',
            en: 'And that there is no judgement except God’s',
          },
          hint: {
            ar: 'هذا شعار الفريق الرافض للتحكيم.',
            fr: 'C’est le mot d’ordre du groupe qui refusa l’arbitrage.',
            en: 'This was the slogan of the group that refused arbitration.',
          },
        },
        {
          id: 'harura',
          slotId: 'refused',
          label: {
            ar: 'انسحبوا إلى حروراء وسُمّوا المحكِّمة',
            fr: 'Ils se retirèrent à Ḥarūrā’ et furent appelés al-Muḥakkima',
            en: 'They withdrew to Ḥarūrā’ and were called al-Muḥakkima',
          },
          hint: {
            ar: 'حروراء منطقةٌ لا تبعد كثيرًا عن الكوفة بالعراق.',
            fr: 'Ḥarūrā’ est une localité peu éloignée de Kūfa, en Irak.',
            en: 'Ḥarūrā’ is a place not far from Kūfa in Iraq.',
          },
        },
      ],
    },

    // 06 — The arbitration at Dūmat al-Jandal
    {
      kind: 'explorer',
      id: 'tahkim',
      title: {
        ar: 'التحكيم في دومة الجندل',
        fr: 'L’arbitrage à Dūmat al-Jandal',
        en: 'The arbitration at Dūmat al-Jandal',
      },
      intro: {
        ar: 'في شهر رمضان 37 هـ اجتمع الحكَمان. اضغط على النقاط لتكتشف ما جرى.',
        fr: 'En Ramaḍān 37 H, les deux arbitres se réunirent. Touche les points pour découvrir ce qui s’est passé.',
        en: 'In Ramaḍān 37 AH the two arbiters met. Tap the points to discover what happened.',
      },
      image: `${IMG}/tahkim.png`,
      imageAlt: {
        ar: 'درعٌ ورمحٌ وسيفٌ موضوعة على الأرض بعد توقّف القتال',
        fr: 'Un bouclier, une lance et une épée posés au sol après l’arrêt des combats',
        en: 'A shield, spear and sword laid on the ground after the fighting stopped',
      },
      hotspots: [
        {
          id: 'place',
          x: 50,
          y: 30,
          label: { ar: 'المكان والزمان', fr: 'Lieu et date', en: 'Place and date' },
          description: {
            ar: 'رمضان 37 هـ، في دومة الجندل شمال السعودية.',
            fr: 'Ramaḍān 37 H, à Dūmat al-Jandal, au nord de l’Arabie saoudite.',
            en: 'Ramaḍān 37 AH, at Dūmat al-Jandal in northern Saudi Arabia.',
          },
        },
        {
          id: 'arbiters',
          x: 26,
          y: 62,
          label: { ar: 'الحكَمان', fr: 'Les deux arbitres', en: 'The two arbiters' },
          description: {
            ar: 'أبو موسى الأشعري ممثّلًا عن عليّ، وعمرو بن العاص ممثّلًا عن معاوية.',
            fr: 'Abū Mūsā al-Ash‘arī représentant ‘Alī, et ‘Amr ibn al-‘Āṣ représentant Mu‘āwiya.',
            en: 'Abū Mūsā al-Ash‘arī representing ‘Alī, and ‘Amr ibn al-‘Āṣ representing Mu‘āwiya.',
          },
        },
        {
          id: 'purpose',
          x: 74,
          y: 58,
          label: { ar: 'السبب', fr: 'L’objet', en: 'The purpose' },
          description: {
            ar: 'الفصل فيمن تحقّ له الخلافة.',
            fr: 'Trancher sur celui à qui revient le califat.',
            en: 'To decide who was entitled to the caliphate.',
          },
        },
        {
          id: 'talks',
          x: 40,
          y: 82,
          label: { ar: 'المشاورات', fr: 'Les consultations', en: 'The consultations' },
          description: {
            ar: 'أربعة أشهر من المشاورات، اتّفق الطرفان فيها على عزل عليٍّ ومعاوية معًا.',
            fr: 'Quatre mois de consultations : les deux parties convinrent de destituer ‘Alī et Mu‘āwiya.',
            en: 'Four months of consultations, in which both sides agreed to depose both ‘Alī and Mu‘āwiya.',
          },
        },
        {
          id: 'announcement',
          x: 66,
          y: 86,
          label: { ar: 'إعلان الاتّفاق', fr: 'L’annonce', en: 'The announcement' },
          description: {
            ar: 'أعلن أبو موسى الأشعري عزلَ عليٍّ ومعاوية، ثم أعلن عمرٌو عزلَ عليٍّ وإثباتَ معاوية.',
            fr: 'Abū Mūsā annonça la destitution de ‘Alī et de Mu‘āwiya ; puis ‘Amr annonça la destitution de ‘Alī et le maintien de Mu‘āwiya.',
            en: 'Abū Mūsā announced the deposing of both ‘Alī and Mu‘āwiya; then ‘Amr announced the deposing of ‘Alī and the confirming of Mu‘āwiya.',
          },
        },
      ],
    },

    // 07 — Vocabulary (أتعرّف)
    {
      kind: 'quiz',
      id: 'vocabulary',
      title: { ar: 'أتعرّف على الكلمات', fr: 'Le vocabulaire', en: 'Key vocabulary' },
      intro: {
        ar: 'كلماتٌ مهمّة وردت في الدرس.',
        fr: 'Des mots importants rencontrés dans la leçon.',
        en: 'Important words from the lesson.',
      },
      questions: [
        {
          id: 'v-match',
          type: 'matching',
          question: {
            ar: 'صِل كلّ كلمة بمعناها.',
            fr: 'Associe chaque mot à son sens.',
            en: 'Match each word with its meaning.',
          },
          pairs: [
            {
              id: 'rab',
              left: { ar: 'رأَبَ الصدع', fr: 'Ra’aba aṣ-ṣad‘', en: 'Ra’aba aṣ-ṣad‘' },
              right: { ar: 'أصلح شقوق البناء', fr: 'Réparer les fissures d’un édifice', en: 'To repair the cracks in a building' },
            },
            {
              id: 'bagha',
              left: { ar: 'بغى', fr: 'Baghā', en: 'Baghā' },
              right: { ar: 'اعتدى وتجاوز حدوده', fr: 'Agresser et dépasser ses limites', en: 'To transgress and overstep one’s bounds' },
            },
            {
              id: 'harura',
              left: { ar: 'حروراء', fr: 'Ḥarūrā’', en: 'Ḥarūrā’' },
              right: {
                ar: 'منطقة لا تبعد كثيرًا عن الكوفة بالعراق',
                fr: 'Une localité proche de Kūfa, en Irak',
                en: 'A place not far from Kūfa in Iraq',
              },
            },
            {
              id: 'khala',
              left: { ar: 'خلَعَ', fr: 'Khala‘a', en: 'Khala‘a' },
              right: { ar: 'نزَعَ ونحّى', fr: 'Ôter et écarter', en: 'To remove and set aside' },
            },
            {
              id: 'manhaj',
              left: { ar: 'المنهج', fr: 'Al-manhaj', en: 'Al-manhaj' },
              right: { ar: 'الطريق الصحيحة الواضحة', fr: 'La voie droite et claire', en: 'The clear, correct path' },
            },
          ],
          explanation: {
            ar: 'هذه الكلمات وردت في صفحة «أتعرّف» في الدرس.',
            fr: 'Ces mots figurent dans la rubrique « أتعرّف » de la leçon.',
            en: 'These words appear in the lesson’s “أتعرّف” vocabulary panel.',
          },
        },
      ],
    },

    // 08 — Understanding check (أجيب)
    {
      kind: 'quiz',
      id: 'quiz',
      title: { ar: 'أجيب', fr: 'Je réponds', en: 'I answer' },
      intro: {
        ar: 'أسئلةٌ تتحقّق من فهمك للدرس.',
        fr: 'Des questions pour vérifier ta compréhension.',
        en: 'Questions to check your understanding.',
      },
      questions: [
        {
          id: 'q-who',
          type: 'mcq',
          question: {
            ar: 'من بقي على غير طاعة عليٍّ بعد يوم الجمل؟',
            fr: 'Qui resta hors de l’obéissance à ‘Alī après le jour du Chameau ?',
            en: 'Who remained outside ‘Alī’s obedience after the day of the Camel?',
          },
          options: [
            { id: 'muawiya', label: { ar: 'معاوية ومنطقة الشام', fr: 'Mu‘āwiya et le Shām', en: 'Mu‘āwiya and the region of Shām' } },
            { id: 'iraq', label: { ar: 'أهل العراق', fr: 'Les gens d’Irak', en: 'The people of Iraq' } },
            { id: 'egypt', label: { ar: 'أهل مصر', fr: 'Les gens d’Égypte', en: 'The people of Egypt' } },
          ],
          correctId: 'muawiya',
          explanation: {
            ar: '«ظلّت منطقة الشام لم تدخل في طاعته، وعليها معاوية».',
            fr: '« La région du Shām n’entra pas dans son obéissance ; elle était gouvernée par Mu‘āwiya ».',
            en: '“The region of Shām did not enter his obedience; over it was Mu‘āwiya.”',
          },
        },
        {
          id: 'q-stop',
          type: 'truefalse',
          question: {
            ar: 'وافق جيشُ عليٍّ كلُّه على توقيف القتال.',
            fr: 'Toute l’armée de ‘Alī accepta l’arrêt des combats.',
            en: 'All of ‘Alī’s army agreed to stop the fighting.',
          },
          answer: false,
          explanation: {
            ar: 'انقسم الجيش إلى رأيين: فريقٌ قَبِلَ توقيف القتال، وفريقٌ آخر رفض معتبرًا ذلك خدعة.',
            fr: 'L’armée se divisa : un groupe accepta l’arrêt, un autre refusa, y voyant une ruse.',
            en: 'The army split in two: one group accepted the halt, another refused, seeing it as a ruse.',
          },
        },
        {
          id: 'q-end',
          type: 'mcq',
          question: {
            ar: 'لماذا انتهت معركة صفّين دون نصرٍ لعليّ؟',
            fr: 'Pourquoi Ṣiffīn s’acheva-t-elle sans victoire pour ‘Alī ?',
            en: 'Why did Ṣiffīn end without victory for ‘Alī?',
          },
          options: [
            {
              id: 'mushaf',
              label: {
                ar: 'لأنّ جيش معاوية رفع المصاحف فتوقّف القتال',
                fr: 'Parce que l’armée de Mu‘āwiya leva les Corans et les combats cessèrent',
                en: 'Because Mu‘āwiya’s army raised the Qur’ans and the fighting stopped',
              },
            },
            {
              id: 'defeat',
              label: { ar: 'لأنّ جيشه انهزم', fr: 'Parce que son armée fut vaincue', en: 'Because his army was defeated' },
            },
            {
              id: 'retreat',
              label: { ar: 'لأنّه انسحب إلى الكوفة', fr: 'Parce qu’il se retira à Kūfa', en: 'Because he withdrew to Kūfa' },
            },
          ],
          correctId: 'mushaf',
          explanation: {
            ar: 'أوشك جيشُ عليٍّ على الانتصار، فرُفعت المصاحف على الرماح، فتوقّف القتال ولُجئ إلى التحكيم.',
            fr: 'L’armée de ‘Alī était près de vaincre ; les Corans furent levés, les combats cessèrent et l’on recourut à l’arbitrage.',
            en: '‘Alī’s army was near victory; the Qur’ans were raised, the fighting stopped, and arbitration was adopted.',
          },
        },
        {
          id: 'q-result',
          type: 'ordering',
          question: {
            ar: 'رتّب ما جرى في التحكيم.',
            fr: 'Range les étapes de l’arbitrage.',
            en: 'Order what happened in the arbitration.',
          },
          items: [
            {
              id: 'meet',
              label: { ar: 'اجتماع الحكَمين في دومة الجندل', fr: 'Les arbitres se réunissent à Dūmat al-Jandal', en: 'The arbiters meet at Dūmat al-Jandal' },
            },
            {
              id: 'agree',
              label: { ar: 'الاتّفاق على عزل عليٍّ ومعاوية', fr: 'L’accord pour destituer ‘Alī et Mu‘āwiya', en: 'Agreement to depose ‘Alī and Mu‘āwiya' },
            },
            {
              id: 'abumusa',
              label: { ar: 'أبو موسى يعلن عزلهما معًا', fr: 'Abū Mūsā annonce leur destitution à tous deux', en: 'Abū Mūsā announces both are deposed' },
            },
            {
              id: 'amr',
              label: { ar: 'عمرٌو يعلن عزل عليٍّ وإثبات معاوية', fr: '‘Amr annonce la destitution de ‘Alī et le maintien de Mu‘āwiya', en: '‘Amr announces ‘Alī deposed and Mu‘āwiya confirmed' },
            },
          ],
          explanation: {
            ar: 'طلب عمرٌو من أبي موسى أن يبدأ الحديث، فتقدّم أبو موسى وخلعهما معًا، ثم قام عمرٌو فأثبت صاحبه. ونتيجة التحكيم: العودة إلى السيف.',
            fr: '‘Amr demanda à Abū Mūsā de parler en premier ; celui-ci les destitua tous deux, puis ‘Amr maintint son homme. Résultat : le retour à l’épée.',
            en: '‘Amr asked Abū Mūsā to speak first; he deposed them both, then ‘Amr confirmed his own man. The result of the arbitration: a return to the sword.',
          },
        },
      ],
    },

    // 09 — The lesson's own moral (أعتبر من الدرس)
    {
      kind: 'value',
      id: 'values',
      title: { ar: 'أعتبر من الدرس', fr: 'La leçon à retenir', en: 'What the lesson teaches' },
      prompt: {
        ar: 'ما الذي يعلّمنا إيّاه ما جرى في صفّين والتحكيم؟',
        fr: 'Que nous enseignent Ṣiffīn et l’arbitrage ?',
        en: 'What do Ṣiffīn and the arbitration teach us?',
      },
      choices: [
        {
          id: 'trickery',
          isCorrect: true,
          label: {
            ar: 'الحيلة والمراوغة لا تحلّ المشاكل بل تزيدها تعقيدًا',
            fr: 'La ruse et les faux-fuyants ne règlent pas les problèmes : ils les compliquent',
            en: 'Trickery and evasion do not solve problems but make them more complicated',
          },
          feedback: {
            ar: 'صحيح، وهذا نصّ ما ورد في الدرس. فقد توقّف القتال بخدعة، ثم عاد الأمر إلى السيف وتفرّق المسلمون.',
            fr: 'Exact — c’est le texte même de la leçon. Les combats cessèrent par une ruse, puis on revint à l’épée et les musulmans se divisèrent.',
            en: 'Correct — this is the lesson’s own wording. The fighting stopped by a ruse, then the matter returned to the sword and the Muslims divided.',
          },
        },
        {
          id: 'strength',
          isCorrect: false,
          label: {
            ar: 'الأقوى عسكريًّا هو صاحب الحقّ',
            fr: 'Le plus fort militairement a raison',
            en: 'The militarily strongest is the one in the right',
          },
          feedback: {
            ar: 'لم يقل الدرس هذا. بل كانت الغلبة تميل إلى عليٍّ ومع ذلك لم تُحسم الأمور بالقوّة.',
            fr: 'Le texte ne dit pas cela : l’avantage penchait vers ‘Alī, et pourtant rien ne fut réglé par la force.',
            en: 'The lesson does not say this. The advantage leaned to ‘Alī, yet the matter was not settled by force.',
          },
        },
        {
          id: 'avoid',
          isCorrect: false,
          label: {
            ar: 'الابتعاد عن الناس أفضل من الإصلاح بينهم',
            fr: 'S’éloigner des gens vaut mieux que les réconcilier',
            en: 'Withdrawing from people is better than reconciling them',
          },
          feedback: {
            ar: 'على العكس، أمر الله بالإصلاح بين المؤمنين كما في آية سورة الحجرات.',
            fr: 'Au contraire : Dieu ordonne la réconciliation entre croyants (sourate al-Ḥujurāt).',
            en: 'On the contrary, God commands reconciliation between believers (Sūrat al-Ḥujurāt).',
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
          id: 'islah',
          value: { ar: 'الإصلاح بين المؤمنين', fr: 'La réconciliation entre croyants', en: 'Reconciliation between believers' },
          evidence: {
            ar: '﴿وَإِن طَائِفَتَانِ مِنَ الْمُؤْمِنِينَ اقْتَتَلُوا فَأَصْلِحُوا بَيْنَهُمَا﴾ [الحجرات: 9].',
            fr: '« Si deux groupes de croyants se combattent, réconciliez-les » [al-Ḥujurāt : 9].',
            en: '“If two parties of the believers fight, make peace between them” [al-Ḥujurāt: 9].',
          },
        },
        {
          id: 'brotherhood',
          value: { ar: 'الأخوّة', fr: 'La fraternité', en: 'Brotherhood' },
          evidence: {
            ar: '﴿إِنَّمَا الْمُؤْمِنُونَ إِخْوَةٌ فَأَصْلِحُوا بَيْنَ أَخَوَيْكُمْ﴾ [الحجرات: 10].',
            fr: '« Les croyants ne sont que des frères : réconciliez vos frères » [al-Ḥujurāt : 10].',
            en: '“The believers are but brothers, so make peace between your brothers” [al-Ḥujurāt: 10].',
          },
        },
        {
          id: 'gods-command',
          value: { ar: 'تقديم أمر الله على رأي البشر', fr: 'L’ordre de Dieu avant l’avis des hommes', en: 'God’s command above human opinion' },
          evidence: {
            ar: 'أمرُ الله تعالى وعدلُه أكبرُ من رأي البشر ﴿وَمَا كَانَ لِمُؤْمِنٍ وَلَا مُؤْمِنَةٍ إِذَا قَضَى اللَّهُ وَرَسُولُهُ أَمْرًا أَن يَكُونَ لَهُمُ الْخِيَرَةُ مِنْ أَمْرِهِمْ﴾ [الأحزاب: 36].',
            fr: 'L’ordre et la justice de Dieu dépassent l’avis humain [al-Aḥzāb : 36].',
            en: 'God’s command and justice are greater than human opinion [al-Aḥzāb: 36].',
          },
        },
        {
          id: 'blood',
          value: { ar: 'حُرمة دماء المسلمين', fr: 'Le caractère sacré du sang musulman', en: 'The sanctity of Muslim blood' },
          evidence: {
            ar: 'مال عليٌّ إلى وقف القتال «لأنّها دماء المسلمين».',
            fr: '‘Alī pencha pour l’arrêt des combats « car c’était le sang des musulmans ».',
            en: '‘Alī inclined to stop the fighting “because it was the blood of Muslims.”',
          },
        },
      ],
    },

    // 10 — Summary (ألخّص)
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'دخل المسلمون في اقتتالٍ ثانٍ بصفّين بين الخليفة عليٍّ ومعاوية سنة 37 هـ، لكنّ المواجهة توقّفت بخدعة الاحتكام إلى كتاب الله، فانقسم المسلمون وعاد الأمر إلى السيف.',
        fr: 'Les musulmans connurent un second combat à Ṣiffīn, entre le calife ‘Alī et Mu‘āwiya, en 37 H ; mais l’affrontement s’arrêta par la ruse du recours au Livre de Dieu, les musulmans se divisèrent et l’on revint à l’épée.',
        en: 'The Muslims entered a second fight at Ṣiffīn, between the caliph ‘Alī and Mu‘āwiya, in 37 AH; but the confrontation was halted by the ruse of appealing to the Book of God, the Muslims divided, and the matter returned to the sword.',
      },
      learned: [
        {
          ar: 'كان معاوية بن أبي سفيان أكبرَ معارضٍ لخلافة عليّ بن أبي طالب، ممّا أبقى الشام على غير طاعة عليّ.',
          fr: 'Mu‘āwiya ibn Abī Sufyān fut le principal opposant au califat de ‘Alī, ce qui maintint le Shām hors de son obéissance.',
          en: 'Mu‘āwiya ibn Abī Sufyān was the greatest opponent of ‘Alī’s caliphate, which kept Shām outside ‘Alī’s obedience.',
        },
        {
          ar: 'انقسم أتباع عليٍّ إلى قسمين: قسمٌ قَبِلَ وقف القتال ميلًا إلى السِّلم ومنهم عليّ، وقسمٌ لم يرضَ وقف القتال لتفطّنه إلى الخدعة.',
          fr: 'Les partisans de ‘Alī se divisèrent : ceux qui acceptèrent l’arrêt des combats par amour de la paix — dont ‘Alī — et ceux qui le refusèrent, ayant perçu la ruse.',
          en: '‘Alī’s followers split in two: those who accepted the halt out of inclination to peace — ‘Alī among them — and those who refused it, having perceived the ruse.',
        },
        {
          ar: 'خرجت خدعة التحكيم بنتيجتين: عزل عليٍّ عن إمامة المسلمين، وتنصيب معاوية خليفةً في نظر عمرو بن العاص.',
          fr: 'La ruse de l’arbitrage eut deux résultats : la destitution de ‘Alī et l’installation de Mu‘āwiya comme calife selon ‘Amr ibn al-‘Āṣ.',
          en: 'The ruse of the arbitration produced two results: ‘Alī deposed from the imamate, and Mu‘āwiya installed as caliph in ‘Amr ibn al-‘Āṣ’s reckoning.',
        },
        {
          ar: 'من رفض التحكيم اتّجه صوب حروراء بالعراق وسُمّوا الحروريّة أو المحكِّمة.',
          fr: 'Ceux qui refusèrent l’arbitrage se dirigèrent vers Ḥarūrā’, en Irak, et furent appelés al-Ḥarūriyya ou al-Muḥakkima.',
          en: 'Those who refused the arbitration went towards Ḥarūrā’ in Iraq and were called al-Ḥarūriyya or al-Muḥakkima.',
        },
      ],
    },
  ],
}
