import type { Lesson } from '../../types'

// Source: Ibadite History textbook Grade 3.
//   pages ~34–38 — «التطور الاقتصادي في العهد الرستمي»
//   Covers: agriculture, livestock, crafts, trade routes, exports/imports.
// Every fact below is taken from those pages; nothing is added from outside them.

const IMG = '/images/lessons/iqtisad-rustami'

export const iqtisadRustami: Lesson = {
  id: 'history-ibadi-g3-s1-l1',
  gradeId: 'history-ibadi-g3',
  moduleId: 'history-ibadi-g3',
  semesterId: 'history-ibadi-g3-s1',
  order: 1,
  status: 'published',
  estimatedMinutes: 30,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'سوقٌ رستميةٌ تعجّ بالبضائع والقوافل في ظلّ الدولة الرستمية',
    fr: 'Un marché rustamide animé de marchandises et de caravanes sous l'État rustamide',
    en: 'A bustling Rustamid market filled with goods and caravans under the Rustamid state',
  },
  title: {
    ar: 'التطور الاقتصادي في العهد الرستمي',
    fr: 'Le développement économique à l'époque rustamide',
    en: 'Economic Development in the Rustamid Era',
  },
  description: {
    ar: 'كيف ازدهر المغرب الإسلامي اقتصادياً في ظلّ الدولة الرستمية؟ اكتشف أنشطة الزراعة والرعي والحرف والتجارة التي جعلت تاهرت مركزاً للتبادل بين إفريقيا والأندلس والصحراء.',
    fr: 'Comment le Maghreb islamique a-t-il prospéré économiquement sous l'État rustamide ? Découvre les activités agricoles, pastorales, artisanales et commerciales qui firent de Tāhert un carrefour entre l'Afrique, l'Andalousie et le Sahara.',
    en: 'How did the Islamic Maghreb flourish economically under the Rustamid state? Discover the agricultural, pastoral, craft and trade activities that made Tāhert a crossroads between Africa, Andalusia and the Sahara.',
  },

  sections: [
    // 01 — Hero: hook on Rustamid prosperity
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'سوق رستمية حيّة تمتلئ بالقوافل والبضائع',
        fr: 'Un marché rustamide vivant, rempli de caravanes et de marchandises',
        en: 'A lively Rustamid market filled with caravans and goods',
      },
      title: {
        ar: 'المغرب الإسلامي في عهد الرستميين',
        fr: 'Le Maghreb islamique sous les Rustamides',
        en: 'The Islamic Maghreb under the Rustamids',
      },
      question: {
        ar: 'ما الذي جعل المغرب الأوسط يزدهر اقتصادياً في العهد الرستمي؟',
        fr: 'Qu'est-ce qui a permis au Maghreb central de prospérer économiquement à l'époque rustamide ?',
        en: 'What made the central Maghreb thrive economically in the Rustamid era?',
      },
      intro: {
        ar: 'شهد المغرب الإسلامي في العهد الرستمي ازدهاراً اقتصادياً كبيراً ونمواً ملحوظاً، استند إلى أربعة أنشطة رئيسية: الزراعة، والرعي، والحرف، والتجارة. وكانت تاهرت عاصمة الدولة الرستمية مركزاً لهذا النشاط المتنوع.',
        fr: 'Le Maghreb islamique connut sous les Rustamides une grande prospérité économique et une croissance notable, fondée sur quatre activités principales : l'agriculture, l'élevage, l'artisanat et le commerce. Tāhert, capitale de l'État rustamide, était au cœur de cette activité diversifiée.',
        en: 'The Islamic Maghreb witnessed, under the Rustamids, great economic prosperity and notable growth, founded on four main activities: agriculture, livestock, crafts and trade. Tāhert, capital of the Rustamid state, was at the heart of this diverse activity.',
      },
    },

    // 02 — Story: the four economic pillars
    {
      kind: 'story',
      id: 'pillars',
      title: {
        ar: 'أعمدة الاقتصاد الرستمي',
        fr: 'Les piliers de l'économie rustamide',
        en: 'The pillars of the Rustamid economy',
      },
      intro: {
        ar: 'اقلب البطاقات لتتعرّف على كلّ نشاط من الأنشطة الاقتصادية التي جعلت المغرب الأوسط يزدهر.',
        fr: 'Retourne les cartes pour découvrir chaque activité économique qui fit prospérer le Maghreb central.',
        en: 'Flip the cards to discover each economic activity that made the central Maghreb flourish.',
      },
      cards: [
        {
          id: 'agriculture',
          image: `${IMG}/agriculture.png`,
          imageAlt: {
            ar: 'حقول خضراء واسعة تمتدّ في سهول المغرب الأوسط',
            fr: 'De vastes champs verts s'étendant dans les plaines du Maghreb central',
            en: 'Wide green fields stretching across the plains of the central Maghreb',
          },
          fact: {
            ar: 'الزراعة: كانت المزروعات متنوّعة — الحبوب والكتان والخضر والفواكه في المتيجة والشلف ووهران، وكانت واحات وهران تُنتج التمور.',
            fr: 'Agriculture : les cultures étaient variées — céréales, lin, légumes et fruits dans la Mitidja, le Cheliff et Oran, et les oasis d'Oran produisaient des dattes.',
            en: 'Agriculture: crops were diverse — grains, flax, vegetables and fruits in Mitidja, Cheliff and Oran, and the oases of Oran produced dates.',
          },
        },
        {
          id: 'livestock',
          image: `${IMG}/livestock.png`,
          imageAlt: {
            ar: 'قطعان من الإبل والخيل والبقر والغنم في السهول',
            fr: 'Des troupeaux de chameaux, chevaux, bovins et moutons dans les plaines',
            en: 'Herds of camels, horses, cattle and sheep on the plains',
          },
          fact: {
            ar: 'الرعي: كان المغرب يفيض بالخيل والإبل وقطعان البقر والغنم، وكان السمن والعسل متوفّرَين بكثرة.',
            fr: 'Élevage : le Maghreb regorgeait de chevaux, chameaux, troupeaux de bovins et de moutons, et le beurre clarifié et le miel abondaient.',
            en: 'Livestock: the Maghreb abounded in horses, camels, cattle herds and sheep, and clarified butter and honey were plentiful.',
          },
        },
        {
          id: 'crafts',
          image: `${IMG}/crafts.png`,
          imageAlt: {
            ar: 'خزّاف يشكّل الفخار على عجلته، وبجانبه أواني خشبية وجلود',
            fr: 'Un potier façonnant la céramique sur son tour, avec des ustensiles en bois et des cuirs',
            en: 'A potter shaping ceramics on the wheel, with wooden vessels and leather goods beside',
          },
          fact: {
            ar: 'الحرف: اشتغل الناس بالنسيج وصناعة الجلود، وصُنعت الأواني الخشبية والفخارية، وكانت صناعة السفن قائمةً على السواجل.',
            fr: 'Artisanat : les gens pratiquaient le tissage et le travail du cuir, fabriquaient des ustensiles en bois et en poterie, et la construction navale était active sur les côtes.',
            en: 'Crafts: people practiced weaving and leatherwork, made wooden and ceramic vessels, and shipbuilding was active along the coast.',
          },
        },
        {
          id: 'trade',
          image: `${IMG}/trade.png`,
          imageAlt: {
            ar: 'قافلة جمال تتحرّك بين التلال محمّلةً بالبضائع',
            fr: 'Une caravane de chameaux se déplaçant entre les collines chargée de marchandises',
            en: 'A camel caravan moving between hills laden with goods',
          },
          fact: {
            ar: 'التجارة: انتعشت الأسواق الداخلية بمختلف المنتجات، واشتُهرت المبادلات بين إفريقيا والأندلس والصحراء. صدّر الرستميون المنتجات الفلاحية والصناعية، واستوردوا الورق والذهب والعطور.',
            fr: 'Commerce : les marchés intérieurs prospéraient avec divers produits, et les échanges entre l'Afrique, l'Andalousie et le Sahara étaient célèbres. Les Rustamides exportaient des produits agricoles et industriels, et importaient papier, or et parfums.',
            en: 'Trade: internal markets thrived with diverse products, and exchanges between Africa, Andalusia and the Sahara were renowned. The Rustamids exported agricultural and industrial products, and imported paper, gold and perfumes.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'أيّ هذه الأنشطة تعتقد أنّه كان الأهمّ لازدهار الدولة الرستمية؟',
          fr: 'Laquelle de ces activités penses-tu était la plus importante pour la prospérité de l'État rustamide ?',
          en: 'Which of these activities do you think was most important for the prosperity of the Rustamid state?',
        },
        options: [
          {
            id: 'agr',
            label: { ar: 'الزراعة', fr: 'L'agriculture', en: 'Agriculture' },
            isRelevant: true,
            explanation: {
              ar: 'الزراعة أساس الغذاء والاكتفاء الذاتي، وكانت متنوّعة جداً في المغرب الأوسط.',
              fr: 'L'agriculture est la base de l'alimentation et de l'autosuffisance, et elle était très diversifiée dans le Maghreb central.',
              en: 'Agriculture is the foundation of food and self-sufficiency, and it was very diverse in the central Maghreb.',
            },
          },
          {
            id: 'trade2',
            label: { ar: 'التجارة', fr: 'Le commerce', en: 'Trade' },
            isRelevant: true,
            explanation: {
              ar: 'التجارة ربطت المغرب بالعالم الخارجي وأدخلت الثروات وسبّبت دخول ملوك في الإسلام.',
              fr: 'Le commerce reliait le Maghreb au monde extérieur, apportait des richesses et provoquait la conversion de rois à l'Islam.',
              en: 'Trade connected the Maghreb to the wider world, brought in wealth, and led kings to enter Islam.',
            },
          },
          {
            id: 'crafts2',
            label: { ar: 'الحرف', fr: 'L'artisanat', en: 'Crafts' },
            isRelevant: true,
            explanation: {
              ar: 'الحرف أمّنت احتياجات السكان اليومية وأمدّت التجارة بالمنتجات الصناعية.',
              fr: 'L'artisanat pourvoyait aux besoins quotidiens des habitants et alimentait le commerce en produits manufacturés.',
              en: 'Crafts met the daily needs of the population and supplied trade with manufactured goods.',
            },
          },
          {
            id: 'live2',
            label: { ar: 'الرعي', fr: 'L'élevage', en: 'Livestock' },
            isRelevant: true,
            explanation: {
              ar: 'الرعي وفّر الغذاء والمواد الخام للحرف، وكانت قوافل الجمال أداة التجارة الكبرى.',
              fr: 'L'élevage fournissait nourriture et matières premières pour l'artisanat, et les caravanes de chameaux étaient le principal vecteur du commerce.',
              en: 'Livestock provided food and raw materials for crafts, and camel caravans were the main vehicle of trade.',
            },
          },
        ],
      },
    },

    // 03 — Timeline: the agricultural sectors and what they produce
    {
      kind: 'timeline',
      id: 'agriculture-zones',
      title: {
        ar: 'مناطق الزراعة وإنتاجها',
        fr: 'Les zones agricoles et leurs productions',
        en: 'Agricultural zones and their produce',
      },
      intro: {
        ar: 'كان المغرب الأوسط غنيّاً بمناطق زراعية متنوّعة. تعرّف على كلّ منطقة وما تُنتجه.',
        fr: 'Le Maghreb central était riche en zones agricoles diversifiées. Découvre chaque région et ce qu'elle produit.',
        en: 'The central Maghreb was rich in diverse agricultural zones. Discover each region and what it produces.',
      },
      image: `${IMG}/map.png`,
      imageAlt: {
        ar: 'خريطة طرق التجارة الرستمية بين المغرب والأندلس والصحراء',
        fr: 'Carte des routes commerciales rustamides entre le Maghreb, l'Andalousie et le Sahara',
        en: 'Map of Rustamid trade routes between the Maghreb, Andalusia and the Sahara',
      },
      steps: [
        {
          id: 'mitidja',
          period: { ar: 'المتيجة والشلف', fr: 'Mitidja et Cheliff', en: 'Mitidja and Cheliff' },
          label: { ar: 'السهول الساحلية الخصبة', fr: 'Les plaines côtières fertiles', en: 'Fertile coastal plains' },
          detail: {
            ar: 'كانت السهول الساحلية خصبة تُنتج الحبوب والكتان والخضر والفواكه.',
            fr: 'Les plaines côtières étaient fertiles, produisant céréales, lin, légumes et fruits.',
            en: 'The coastal plains were fertile, producing grains, flax, vegetables and fruits.',
          },
        },
        {
          id: 'oran',
          period: { ar: 'وهران', fr: 'Oran', en: 'Oran' },
          label: { ar: 'واحات التمر', fr: 'Les oasis de dattes', en: 'Date palm oases' },
          detail: {
            ar: 'كانت واحات وهران مصدراً رئيسياً للتمور.',
            fr: 'Les oasis d'Oran étaient une source principale de dattes.',
            en: 'The oases of Oran were a main source of dates.',
          },
        },
        {
          id: 'badiya',
          period: { ar: 'البادية', fr: 'La steppe', en: 'The steppe' },
          label: { ar: 'رعي الماشية', fr: 'Élevage de bétail', en: 'Livestock grazing' },
          detail: {
            ar: 'تربّت في البادية قطعان الإبل والخيل والبقر والغنم، ووُفّر السمن والعسل بكثرة.',
            fr: 'Les steppes accueillaient des troupeaux de chameaux, chevaux, bovins et moutons, et le beurre clarifié et le miel étaient abondants.',
            en: 'The steppes hosted herds of camels, horses, cattle and sheep, and clarified butter and honey were abundant.',
          },
        },
        {
          id: 'sawajil',
          period: { ar: 'السواجل', fr: 'Les côtes', en: 'The coasts' },
          label: { ar: 'صناعة السفن', fr: 'Construction navale', en: 'Shipbuilding' },
          detail: {
            ar: 'كانت صناعة السفن قائمةً على السواجل (السواحل)، وتموّنت من أخشاب الغابات القريبة.',
            fr: 'La construction navale était active sur les côtes, approvisionnée en bois des forêts proches.',
            en: 'Shipbuilding was active along the coast, supplied with timber from nearby forests.',
          },
        },
      ],
    },

    // 04 — Sorting: the trade route steps
    {
      kind: 'sorting',
      id: 'trade-routes',
      title: {
        ar: 'مسار التبادل التجاري الرستمي',
        fr: 'Le circuit des échanges commerciaux rustamides',
        en: 'The circuit of Rustamid commercial exchanges',
      },
      intro: {
        ar: 'رتّب الخطوات لتعيد بناء مسار التجارة الرستمية من الإنتاج إلى التبادل.',
        fr: 'Remets les étapes dans l'ordre pour reconstituer le circuit commercial rustamide, de la production à l'échange.',
        en: 'Put the steps in order to reconstruct the Rustamid trade circuit, from production to exchange.',
      },
      image: `${IMG}/caravan.png`,
      imageAlt: {
        ar: 'قافلة جمال تسير عبر الصحراء',
        fr: 'Une caravane de chameaux traversant le désert',
        en: 'A camel caravan crossing the desert',
      },
      items: [
        {
          id: 'step1',
          label: {
            ar: 'إنتاج المزروعات والحرف في المغرب الأوسط',
            fr: 'Production de cultures et d'artisanat dans le Maghreb central',
            en: 'Production of crops and crafts in the central Maghreb',
          },
        },
        {
          id: 'step2',
          label: {
            ar: 'عرض المنتجات في الأسواق اليومية والأسبوعية',
            fr: 'Présentation des produits dans les marchés quotidiens et hebdomadaires',
            en: 'Display of products in daily and weekly markets',
          },
        },
        {
          id: 'step3',
          label: {
            ar: 'تنظيم قوافل الجمال لنقل البضائع',
            fr: 'Organisation de caravanes de chameaux pour transporter les marchandises',
            en: 'Organisation of camel caravans to transport goods',
          },
        },
        {
          id: 'step4',
          label: {
            ar: 'التبادل مع الأندلس والصحراء وإفريقيا',
            fr: 'Échange avec l'Andalousie, le Sahara et l'Afrique',
            en: 'Exchange with Andalusia, the Sahara and Africa',
          },
        },
        {
          id: 'step5',
          label: {
            ar: 'استيراد الورق من الأندلس والذهب والعطور من الصحراء',
            fr: 'Importation de papier d'Andalousie et d'or et de parfums du Sahara',
            en: 'Importation of paper from Andalusia, and gold and perfumes from the Sahara',
          },
        },
      ],
      explanation: {
        ar: 'هذا هو المسار الكامل: الإنتاج المحلّي → الأسواق → القوافل → التبادل الخارجي → الاستيراد. التجارة الرستمية ربطت المغرب بالعالم الإسلامي من الأندلس إلى قلب إفريقيا.',
        fr: 'Voici le circuit complet : production locale → marchés → caravanes → échange extérieur → importations. Le commerce rustamide relia le Maghreb au monde islamique, de l'Andalousie au cœur de l'Afrique.',
        en: 'This is the full circuit: local production → markets → caravans → external exchange → imports. Rustamid trade connected the Maghreb to the Islamic world, from Andalusia to the heart of Africa.',
      },
    },

    // 05 — Explorer: trade hotspots (map from page 1)
    {
      kind: 'explorer',
      id: 'trade-map',
      title: {
        ar: 'خريطة طرق التجارة الرستمية',
        fr: 'Carte des routes commerciales rustamides',
        en: 'Map of Rustamid trade routes',
      },
      intro: {
        ar: 'انقر على النقاط لتكتشف المناطق التي كان الرستميون يتاجرون معها.',
        fr: 'Clique sur les points pour découvrir les régions avec lesquelles les Rustamides commerçaient.',
        en: 'Tap the points to discover the regions with which the Rustamids traded.',
      },
      image: `${IMG}/map.png`,
      imageAlt: {
        ar: 'خريطة طرق التجارة الرستمية',
        fr: 'Carte des routes commerciales rustamides',
        en: 'Map of Rustamid trade routes',
      },
      hotspots: [
        {
          id: 'tahert',
          x: 42,
          y: 35,
          label: { ar: 'تاهرت', fr: 'Tāhert', en: 'Tāhert' },
          description: {
            ar: 'عاصمة الدولة الرستمية ومركز التجارة. منها تنطلق القوافل في كل الاتجاهات.',
            fr: 'Capitale de l'État rustamide et centre du commerce. Les caravanes en partent dans toutes les directions.',
            en: 'Capital of the Rustamid state and centre of trade. Caravans set out from it in all directions.',
          },
        },
        {
          id: 'andalus',
          x: 18,
          y: 22,
          label: { ar: 'الأندلس', fr: 'L'Andalousie', en: 'Andalusia' },
          description: {
            ar: 'أحضر الرستميون منها الورق والكتان. كانت الأندلس مصدراً مهمّاً للمواد الخام.',
            fr: 'Les Rustamides en importaient du papier et du lin. L'Andalousie était une source importante de matières premières.',
            en: 'The Rustamids imported paper and flax from it. Andalusia was an important source of raw materials.',
          },
        },
        {
          id: 'sahara',
          x: 55,
          y: 65,
          label: { ar: 'الصحراء', fr: 'Le Sahara', en: 'The Sahara' },
          description: {
            ar: 'كان التبادل التجاري مع الصحراء مستمرّاً؛ يُجلب منها الذهب والعطور.',
            fr: 'Les échanges commerciaux avec le Sahara étaient continus ; on en rapportait de l'or et des parfums.',
            en: 'Trade with the Sahara was continuous; gold and perfumes were brought from it.',
          },
        },
        {
          id: 'jarid',
          x: 65,
          y: 42,
          label: { ar: 'بلاد الجريد', fr: 'Pays du Djérid', en: 'Bilād al-Jarīd' },
          description: {
            ar: 'تشتهر بلاد الجريد بالتمور. وكانت من المناطق التي يتاجر معها الرستميون.',
            fr: 'Le pays du Djérid est célèbre pour ses dattes. C'était l'une des régions avec lesquelles les Rustamides commerçaient.',
            en: 'Bilād al-Jarīd is famous for its dates and was one of the regions with which the Rustamids traded.',
          },
        },
        {
          id: 'shalaf',
          x: 35,
          y: 28,
          label: { ar: 'حوض الشلف', fr: 'Bassin du Cheliff', en: 'Cheliff basin' },
          description: {
            ar: 'من أخصب مناطق المغرب الأوسط. ينتج الحبوب والفواكه والخضر بوفرة.',
            fr: 'L'une des régions les plus fertiles du Maghreb central. Elle produit céréales, fruits et légumes en abondance.',
            en: 'One of the most fertile regions of the central Maghreb. It produces grains, fruits and vegetables in abundance.',
          },
        },
      ],
    },

    // 06 — Placement: match region to its famous product (activity 2 from page 5)
    {
      kind: 'placement',
      id: 'region-products',
      title: {
        ar: 'سجّل ما تشتهر به هذه المناطق',
        fr: 'Note ce dont ces régions sont célèbres',
        en: 'Record what these regions are famous for',
      },
      intro: {
        ar: 'اسحب بطاقة المنتج ووضعها في المنطقة الصحيحة.',
        fr: 'Fais glisser la carte du produit vers la bonne région.',
        en: 'Drag the product card to the correct region.',
      },
      slots: [
        { id: 'slot-tahert', label: { ar: 'تاهرت', fr: 'Tāhert', en: 'Tāhert' } },
        { id: 'slot-jarid', label: { ar: 'بلاد الجريد', fr: 'Pays du Djérid', en: 'Bilād al-Jarīd' } },
        { id: 'slot-shalaf', label: { ar: 'حوض الشلف', fr: 'Bassin du Cheliff', en: 'Cheliff basin' } },
      ],
      cards: [
        {
          id: 'card-tahert',
          label: { ar: 'مركز التجارة والقوافل', fr: 'Centre du commerce et des caravanes', en: 'Centre of trade and caravans' },
          slotId: 'slot-tahert',
          hint: {
            ar: 'تاهرت كانت عاصمة الدولة الرستمية ومركز تجارتها.',
            fr: 'Tāhert était la capitale de l'État rustamide et le centre de son commerce.',
            en: 'Tāhert was the capital of the Rustamid state and the centre of its trade.',
          },
        },
        {
          id: 'card-jarid',
          label: { ar: 'التمور والمحاصيل الجافّة', fr: 'Les dattes et les récoltes sèches', en: 'Dates and dry crops' },
          slotId: 'slot-jarid',
          hint: {
            ar: 'بلاد الجريد تقع في إقليم توزر ومعروفة بتمورها.',
            fr: 'Le pays du Djérid se situe dans la région de Tozeur et est connu pour ses dattes.',
            en: 'Bilād al-Jarīd lies in the Tozeur region and is known for its dates.',
          },
        },
        {
          id: 'card-shalaf',
          label: { ar: 'الحبوب والخضر والفواكه', fr: 'Les céréales, légumes et fruits', en: 'Grains, vegetables and fruits' },
          slotId: 'slot-shalaf',
          hint: {
            ar: 'حوض الشلف من أخصب سهول المغرب الأوسط.',
            fr: 'Le bassin du Cheliff est l'une des plaines les plus fertiles du Maghreb central.',
            en: 'The Cheliff basin is one of the most fertile plains of the central Maghreb.',
          },
        },
      ],
    },

    // 07 — Quiz: vocabulary (أتعرّف) and comprehension (أجيب)
    {
      kind: 'quiz',
      id: 'vocabulary',
      title: {
        ar: 'أتعرّف — مصطلحات الدرس',
        fr: 'Je retiens — les termes du cours',
        en: 'Vocabulary — lesson terms',
      },
      intro: {
        ar: 'تحقّق من فهمك لمصطلحات الدرس.',
        fr: 'Vérifie ta compréhension des termes du cours.',
        en: 'Check your understanding of the lesson terms.',
      },
      questions: [
        {
          id: 'q-izdhar',
          type: 'mcq',
          question: {
            ar: 'ما معنى «الازدهار»؟',
            fr: 'Que signifie « الازدهار » (al-izdihār) ?',
            en: 'What does "الازدهار" (al-izdihār) mean?',
          },
          options: [
            { id: 'a', label: { ar: 'مجرّد الوجود والبقاء', fr: 'La simple existence et survie', en: 'Mere existence and survival' } },
            { id: 'b', label: { ar: 'حالة تتجاوز الوجود إلى النموّ والتطوّر', fr: 'Un état dépassant l'existence pour atteindre la croissance et le développement', en: 'A state beyond existence, reaching growth and development' } },
            { id: 'c', label: { ar: 'التراجع والانحسار', fr: 'Le recul et la régression', en: 'Decline and regression' } },
            { id: 'd', label: { ar: 'الاستقلال السياسي', fr: 'L'indépendance politique', en: 'Political independence' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'الازدهار: حالة تتجاوز مجرّد الوجود والبقاء إلى حالة النموّ والتطوّر.',
            fr: 'Al-izdihār : un état qui dépasse la simple existence et survie pour atteindre la croissance et le développement.',
            en: 'Al-izdihār: a state that goes beyond mere existence and survival to reach growth and development.',
          },
        },
        {
          id: 'q-muqayada',
          type: 'mcq',
          question: {
            ar: 'ما المقايضة؟',
            fr: 'Qu'est-ce que la troc (المقايضة) ?',
            en: 'What is barter (المقايضة)?',
          },
          options: [
            { id: 'a', label: { ar: 'شراء البضاعة بالنقود', fr: 'Acheter de la marchandise avec de l'argent', en: 'Buying goods with money' } },
            { id: 'b', label: { ar: 'معاوضة سلعة بسلعة لا تُدانيها في الشبه', fr: 'Échanger une marchandise contre une autre qui ne lui ressemble pas', en: 'Exchanging a good for another that is unlike it' } },
            { id: 'c', label: { ar: 'تصدير البضاعة إلى الخارج', fr: 'Exporter des marchandises vers l'étranger', en: 'Exporting goods abroad' } },
            { id: 'd', label: { ar: 'الاستيراد من بلاد أخرى', fr: 'Importer depuis d'autres pays', en: 'Importing from other countries' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'المقايضة: معاوضة سلعة ومبادلة سلعة بسلعة لا تُدانيها في الشبه.',
            fr: 'La troc : compenser une marchandise et échanger une marchandise contre une autre qui ne lui ressemble pas.',
            en: 'Barter: compensating a good and exchanging a good for another that is unlike it.',
          },
        },
        {
          id: 'q-agriculture',
          type: 'mcq',
          question: {
            ar: 'كيف كان النشاط الزراعي في المغرب الأوسط؟',
            fr: 'Comment était l'activité agricole dans le Maghreb central ?',
            en: 'What was agricultural activity like in the central Maghreb?',
          },
          options: [
            { id: 'a', label: { ar: 'مقتصراً على الحبوب فقط', fr: 'Limitée aux céréales seulement', en: 'Limited to grains only' } },
            { id: 'b', label: { ar: 'متنوّعاً: حبوب وكتان وخضر وفواكه وتمور', fr: 'Diversifiée : céréales, lin, légumes, fruits et dattes', en: 'Diverse: grains, flax, vegetables, fruits and dates' } },
            { id: 'c', label: { ar: 'ضعيفاً بسبب قسوة المناخ', fr: 'Faible en raison de la dureté du climat', en: 'Weak due to the harsh climate' } },
            { id: 'd', label: { ar: 'يعتمد على الواردات فقط', fr: 'Dépendant uniquement des importations', en: 'Dependent on imports alone' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'كانت المزروعات متنوّعة — الحبوب والكتان والخضر والفواكه في السهول، والتمور في واحات وهران.',
            fr: 'Les cultures étaient diversifiées : céréales, lin, légumes et fruits dans les plaines, et dattes dans les oasis d'Oran.',
            en: 'Crops were diverse: grains, flax, vegetables and fruits on the plains, and dates in the Oran oases.',
          },
        },
        {
          id: 'q-crafts',
          type: 'mcq',
          question: {
            ar: 'ما الحرف التي اشتغل بها سكّان المدن الرستمية؟',
            fr: 'Quels métiers les habitants des villes rustamides pratiquaient-ils ?',
            en: 'What crafts did the inhabitants of Rustamid cities practice?',
          },
          options: [
            { id: 'a', label: { ar: 'النسيج وصناعة الجلود والفخار وصناعة السفن', fr: 'Le tissage, la maroquinerie, la poterie et la construction navale', en: 'Weaving, leatherwork, pottery and shipbuilding' } },
            { id: 'b', label: { ar: 'صناعة الأسلحة فقط', fr: 'La fabrication d'armes uniquement', en: 'Weapons manufacture only' } },
            { id: 'c', label: { ar: 'الطباعة والنشر', fr: 'L'imprimerie et l'édition', en: 'Printing and publishing' } },
            { id: 'd', label: { ar: 'الزراعة فقط', fr: 'L'agriculture seulement', en: 'Agriculture only' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'اشتغل الناس بالنسيج وصناعة الجلود، وصُنعت الأواني الخشبية والفخارية، وكانت صناعة السفن قائمةً على السواجل.',
            fr: 'Les gens pratiquaient le tissage et la maroquinerie, fabriquaient des ustensiles en bois et en poterie, et la construction navale était active sur les côtes.',
            en: 'People practiced weaving and leatherwork, made wooden and ceramic vessels, and shipbuilding was active along the coasts.',
          },
        },
        {
          id: 'q-trade-partners',
          type: 'mcq',
          question: {
            ar: 'ما البلاد التي كان الرستميون يتاجرون معها خارج المغرب؟',
            fr: 'Avec quels pays les Rustamides commerçaient-ils hors du Maghreb ?',
            en: 'With which countries outside the Maghreb did the Rustamids trade?',
          },
          options: [
            { id: 'a', label: { ar: 'الأندلس والصحراء وإفريقيا', fr: 'L'Andalousie, le Sahara et l'Afrique', en: 'Andalusia, the Sahara and Africa' } },
            { id: 'b', label: { ar: 'الهند والصين فقط', fr: 'L'Inde et la Chine seulement', en: 'India and China only' } },
            { id: 'c', label: { ar: 'أوروبا الشمالية', fr: 'L'Europe du Nord', en: 'Northern Europe' } },
            { id: 'd', label: { ar: 'بلاد فارس فقط', fr: 'La Perse seulement', en: 'Persia only' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'اشتُهرت المبادلات بين إفريقيا والأندلس والصحراء. من الأندلس: الورق والكتان. من الصحراء: الذهب والعطور.',
            fr: 'Les échanges entre l'Afrique, l'Andalousie et le Sahara étaient célèbres. D'Andalousie : papier et lin. Du Sahara : or et parfums.',
            en: 'Exchanges between Africa, Andalusia and the Sahara were renowned. From Andalusia: paper and flax. From the Sahara: gold and perfumes.',
          },
        },
        {
          id: 'q-ibn-hawqal',
          type: 'truefalse',
          question: {
            ar: 'قال ابن حوقل إنّ قوافل الجمال الرستمية لا تُدانيها إبل العرب في الكثرة.',
            fr: 'Ibn Ḥawqal a dit que les caravanes de chameaux rustamides sont inégalées en nombre par les chameaux arabes.',
            en: 'Ibn Ḥawqal said that the Rustamid camel caravans are unmatched in number by the camels of the Arabs.',
          },
          answer: true,
          explanation: {
            ar: 'نعم، ذكر ابن حوقل أنّ عدد جمال القوافل الرستمية كان كبيراً جداً لا تُدانيها إبل العرب.',
            fr: 'Oui, Ibn Ḥawqal a mentionné que le nombre de chameaux des caravanes rustamides était si grand qu'ils n'avaient pas d'égal chez les Arabes.',
            en: 'Yes, Ibn Ḥawqal mentioned that the number of camels in Rustamid caravans was so great that they had no equal among the Arabs.',
          },
        },
      ],
    },

    // 08 — Value: lessons from the lesson (أعتبر من الدرس)
    {
      kind: 'value',
      id: 'values',
      title: {
        ar: 'أعتبر من الدرس',
        fr: 'Je tire les leçons du cours',
        en: 'Lessons from the lesson',
      },
      prompt: {
        ar: 'ما القيم التي يمكن أن نستخلصها من التطوّر الاقتصادي في العهد الرستمي؟',
        fr: 'Quelles valeurs peut-on tirer du développement économique à l'époque rustamide ?',
        en: 'What values can we draw from economic development in the Rustamid era?',
      },
      choices: [
        {
          id: 'diversity',
          label: { ar: 'التنوّع قوّة', fr: 'La diversité est une force', en: 'Diversity is a strength' },
          isCorrect: true,
          feedback: {
            ar: 'التنوّع مؤشّر على الثراء والوفرة. الرستميون نجحوا لأنّهم لم يعتمدوا على نشاط واحد.',
            fr: 'La diversité est un indicateur de richesse et d'abondance. Les Rustamides ont réussi parce qu'ils ne dépendaient pas d'une seule activité.',
            en: 'Diversity is an indicator of wealth and abundance. The Rustamids succeeded because they did not depend on a single activity.',
          },
        },
        {
          id: 'stability',
          label: { ar: 'الاستقرار أساس النموّ', fr: 'La stabilité est la base de la croissance', en: 'Stability is the foundation of growth' },
          isCorrect: true,
          feedback: {
            ar: 'الاستقرار قاعدة النموّ والتطوّر. بدونه لا تستطيع الزراعة ولا التجارة أن تزدهر.',
            fr: 'La stabilité est la base de la croissance et du développement. Sans elle, ni l'agriculture ni le commerce ne peuvent prospérer.',
            en: 'Stability is the foundation of growth and development. Without it, neither agriculture nor trade can flourish.',
          },
        },
        {
          id: 'land',
          label: { ar: 'الأرض ثروة', fr: 'La terre est une richesse', en: 'The land is a wealth' },
          isCorrect: true,
          feedback: {
            ar: 'الأرض ثروة تحقّق الأمن الغذائي وتوفّر الأموال.',
            fr: 'La terre est une richesse qui assure la sécurité alimentaire et procure des ressources.',
            en: 'The land is a wealth that achieves food security and provides resources.',
          },
        },
        {
          id: 'quality',
          label: { ar: 'التفوّق في الجودة', fr: 'L'excellence dans la qualité', en: 'Excellence in quality' },
          isCorrect: true,
          feedback: {
            ar: 'يظهر تفوّقك فيما تقدّم، وجودة ما تُقدّم من قوّة ما تُتقن.',
            fr: 'Ton excellence se manifeste dans ce que tu offres, et la qualité de ce que tu fournis vient de la maîtrise de ton art.',
            en: 'Your excellence shows in what you offer, and the quality of what you provide comes from mastering your craft.',
          },
        },
      ],
      valuesTitle: {
        ar: 'القيم المستخلصة',
        fr: 'Les valeurs tirées',
        en: 'Values derived',
      },
      values: [
        {
          id: 'v1',
          value: { ar: 'التنوّع مؤشّر على الثراء والوفرة', fr: 'La diversité est un indicateur de richesse et d'abondance', en: 'Diversity is an indicator of wealth and abundance' },
          evidence: {
            ar: 'ازدهر المغرب الأوسط لأنّ اقتصاده تنوّع بين الزراعة والرعي والحرف والتجارة.',
            fr: 'Le Maghreb central prospéra parce que son économie était diversifiée entre agriculture, élevage, artisanat et commerce.',
            en: 'The central Maghreb prospered because its economy was diversified between agriculture, livestock, crafts and trade.',
          },
        },
        {
          id: 'v2',
          value: { ar: 'الاستقرار قاعدة النموّ والتطوّر', fr: 'La stabilité est la base de la croissance et du développement', en: 'Stability is the foundation of growth and development' },
          evidence: {
            ar: 'في ظلّ الاستقرار السياسي للدولة الرستمية، نما الاقتصاد واتسعت التجارة.',
            fr: 'Sous la stabilité politique de l'État rustamide, l'économie crût et le commerce s'étendit.',
            en: 'Under the political stability of the Rustamid state, the economy grew and trade expanded.',
          },
        },
        {
          id: 'v3',
          value: { ar: 'الأرض ثروة تحقّق الأمن الغذائي وتوفّر الأموال', fr: 'La terre est une richesse qui assure la sécurité alimentaire et procure des ressources', en: 'The land is a wealth that achieves food security and provides resources' },
          evidence: {
            ar: 'السهول الخصبة في المتيجة والشلف ووهران غذّت السكّان وأمّنت فائضاً للتصدير.',
            fr: 'Les plaines fertiles de la Mitidja, du Cheliff et d'Oran nourrissaient la population et assuraient un surplus pour l'exportation.',
            en: 'The fertile plains of Mitidja, Cheliff and Oran fed the population and ensured a surplus for export.',
          },
        },
        {
          id: 'v4',
          value: { ar: 'يظهر تفوّقك فيما تقدّم وجودة ما تُتقن', fr: 'Ton excellence se manifeste dans ce que tu offres et la qualité de ce que tu maîtrises', en: 'Your excellence shows in what you offer and the quality of what you master' },
          evidence: {
            ar: 'اشتُهر الحرفيون الرستميون بجودة منتجاتهم من النسيج والفخار والجلود حتى طلبت عليها الأسواق الخارجية.',
            fr: 'Les artisans rustamides étaient réputés pour la qualité de leurs tissus, poteries et cuirs, au point que les marchés extérieurs les réclamaient.',
            en: 'Rustamid craftspeople were famous for the quality of their textiles, pottery and leather, so much that external markets sought them out.',
          },
        },
      ],
    },

    // 09 — Completion: summary
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'شهد المغرب الإسلامي في العهد الرستمي ازدهاراً اقتصادياً متنوّعاً قائماً على الزراعة والرعي والحرف والتجارة، وربطته قوافل الجمال بإفريقيا والأندلس والصحراء.',
        fr: 'Le Maghreb islamique connut sous les Rustamides une prospérité économique diversifiée fondée sur l'agriculture, l'élevage, l'artisanat et le commerce, que les caravanes de chameaux reliaient à l'Afrique, à l'Andalousie et au Sahara.',
        en: 'The Islamic Maghreb witnessed under the Rustamids a diverse economic prosperity founded on agriculture, livestock, crafts and trade, linked by camel caravans to Africa, Andalusia and the Sahara.',
      },
      learned: [
        {
          ar: 'الزراعة في المغرب الأوسط كانت متنوّعة: حبوب وكتان وخضر وفواكه وتمور.',
          fr: 'L'agriculture dans le Maghreb central était diversifiée : céréales, lin, légumes, fruits et dattes.',
          en: 'Agriculture in the central Maghreb was diverse: grains, flax, vegetables, fruits and dates.',
        },
        {
          ar: 'الرعي وفّر الخيل والإبل والأنعام، والسمن والعسل بوفرة.',
          fr: 'L'élevage fournissait chevaux, chameaux et bétail, ainsi que beurre clarifié et miel en abondance.',
          en: 'Livestock provided horses, camels and cattle, and clarified butter and honey in abundance.',
        },
        {
          ar: 'الحرف شملت النسيج والجلود والفخار وصناعة السفن.',
          fr: 'L'artisanat comprenait le tissage, la maroquinerie, la poterie et la construction navale.',
          en: 'Crafts included weaving, leatherwork, pottery and shipbuilding.',
        },
        {
          ar: 'التجارة ربطت المغرب بالأندلس والصحراء وإفريقيا، وكانت قوافل الجمال وسيلتها الكبرى.',
          fr: 'Le commerce reliait le Maghreb à l'Andalousie, au Sahara et à l'Afrique, et les caravanes de chameaux en étaient le principal moyen.',
          en: 'Trade linked the Maghreb to Andalusia, the Sahara and Africa, with camel caravans as the main means.',
        },
        {
          ar: 'صدّر الرستميون المنتجات الفلاحية والصناعية، واستوردوا الورق والذهب والعطور.',
          fr: 'Les Rustamides exportaient des produits agricoles et industriels, et importaient papier, or et parfums.',
          en: 'The Rustamids exported agricultural and industrial products, and imported paper, gold and perfumes.',
        },
      ],
    },
  ],
}
