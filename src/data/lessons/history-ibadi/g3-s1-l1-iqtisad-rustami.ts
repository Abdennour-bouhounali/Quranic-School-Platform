import type { Lesson } from '../../types'

// Source: Other ressources/Ibadite_History_S5.pdf, pages 1–13
//   (Lesson 28 «التَّطَوُّرُ الاقتصاديُّ في العهد الرُّستمي», slides 1–13):
//   slide 2  — الإشكالية: عهد طمأنينة، تنويع المنتوجات، إرسال الفائض إلى البلاد البعيدة لمقايضته.
//   slide 3/4 — عهد من الأمن والاستقرار: خدمة الأرض، الورشات، الحرف، الدكاكين، القوافل، المسالك + خريطة طرق القوافل.
//   slide 5/6 — النشاط الزراعي: متيجة وحوض الشلف، ريف تاهرت، باب المطاحن، نهر خرّار بتنس ووادي مينة، وهران، الواحات.
//   slide 7/8 — تربية الأنعام: الماشية والأبقار، السمن والعسل، الخيول والنحل، رخص الأثمان، الترحال الموسمي.
//   slide 9/10 — المهن والحرف: النسيج، دباغة الجلود، العسل، النجارة، الفخار، ورشات السفن.
//   slide 11/12 — النشاط التجاري: الأسواق، الواردات والصادرات، إسلام مملكة مالي، قول ابن حوقل.
// The vocabulary definitions (الازدهار، المقايضة) and the value statements come from the
// textbook's «أتعرّف» / «أعتبر» boxes. Activity framing (questions, distractors) is editorial.

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
    fr: `Un marché rustamide animé de marchandises et de caravanes sous l'État rustamide`,
    en: 'A bustling Rustamid market filled with goods and caravans under the Rustamid state',
  },
  title: {
    ar: 'التطور الاقتصادي في العهد الرستمي',
    fr: `Le développement économique à l'époque rustamide`,
    en: 'Economic Development in the Rustamid Era',
  },
  description: {
    ar: 'كيف ازدهر المغرب اقتصادياً في ظلّ الدولة الرستمية؟ اكتشف أنشطة الزراعة وتربية الأنعام والحرف والتجارة التي ربطت تاهرت بالأندلس والصحراء.',
    fr: `Comment le Maghreb a-t-il prospéré économiquement sous l'État rustamide ? Découvre l'agriculture, l'élevage, l'artisanat et le commerce qui reliaient Tāhert à l'Andalousie et au Sahara.`,
    en: 'How did the Maghreb flourish economically under the Rustamid state? Discover the agriculture, livestock raising, crafts and trade that linked Tāhert to Andalusia and the Sahara.',
  },

  sections: [
    // 01 — Hero (slide 2 — الإشكالية)
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
        ar: 'المغرب في عهد الرستميين',
        fr: 'Le Maghreb sous les Rustamides',
        en: 'The Maghreb under the Rustamids',
      },
      question: {
        ar: 'كيف كانت الأحوال الاقتصادية في بلاد المغرب؟',
        fr: 'Comment était la situation économique au Maghreb ?',
        en: 'What were the economic conditions in the Maghreb like?',
      },
      intro: {
        ar: 'كان أغلب العهد الرستمي عهد طمأنينة في بلاد المغرب، سمحت للناس بأن يلتفتوا إلى تحسين حياتهم، وتوفير الخيرات، وتنويع المنتوجات، وإرسال ما زاد إلى البلاد البعيدة لمقايضته بما يفتقرون إليه؛ فعمّ المنطقة رخاءٌ تُحسد عليه.',
        fr: `La plus grande partie de l'époque rustamide fut une période de tranquillité au Maghreb. Les gens purent s'occuper d'améliorer leur vie, d'accroître leurs richesses, de diversifier leurs produits et d'envoyer leurs surplus vers des pays lointains pour les échanger contre ce qui leur manquait. Une prospérité enviée se répandit dans toute la région.`,
        en: 'Most of the Rustamid era was a time of tranquility in the Maghreb. People could focus on improving their lives, increasing their wealth, diversifying their products, and sending their surplus to distant lands to barter it for what they lacked. A prosperity that others envied spread across the region.',
      },
    },

    // 02 — Reading: an era of security and stability (slides 3–4)
    {
      kind: 'reading',
      id: 'stability',
      title: {
        ar: 'عهدٌ من الأمن والاستقرار',
        fr: 'Une époque de sécurité et de stabilité',
        en: 'An era of security and stability',
      },
      intro: {
        ar: 'اقرأ كيف مهّد الاستقرار لازدهار الاقتصاد.',
        fr: `Lis comment la stabilité a préparé l'essor de l'économie.`,
        en: 'Read how stability paved the way for economic prosperity.',
      },
      image: `${IMG}/caravan.png`,
      imageAlt: {
        ar: 'قافلة جمال تسير عبر الصحراء',
        fr: 'Une caravane de chameaux traversant le désert',
        en: 'A camel caravan crossing the desert',
      },
      paragraphs: [
        {
          id: 'st-p1',
          heading: { ar: 'الاستقرار يشجّع العمل', fr: 'La stabilité encourage le travail', en: 'Stability encourages work' },
          text: {
            ar: 'ساعد الاستقرار الذي مرّ به المغرب في العهد الرستمي على ازدهار الاقتصاد؛ فقد تشجّع الناس للقيام بخدمة الأرض وتنويع المنتجات، وفتحوا الورشات، وعدّدوا الحرف لتلبية حاجات الريف والبادية.',
            fr: `La stabilité que connut le Maghreb à l'époque rustamide favorisa l'essor de l'économie : les gens furent encouragés à cultiver la terre et à diversifier leurs produits ; ils ouvrirent des ateliers et multiplièrent les métiers pour répondre aux besoins des campagnes et de la steppe.`,
            en: 'The stability the Maghreb enjoyed in the Rustamid era helped the economy prosper: people were encouraged to cultivate the land and diversify their products; they opened workshops and multiplied crafts to meet the needs of the countryside and the steppe.',
          },
        },
        {
          id: 'st-p2',
          heading: { ar: 'القوافل والمسالك', fr: 'Caravanes et routes', en: 'Caravans and routes' },
          text: {
            ar: 'وتوسّعت الدكاكين بالسلع المحمّلة مع القوافل التجارية، كما امتدّت المسالك للربط بين جهات المغرب، وسارت طرقٌ رئيسية وأخرى ثانوية للقوافل عبر الصحراء. فكانت المنطقة في خيرٍ وفير.',
            fr: `Les boutiques s'agrandirent grâce aux marchandises apportées par les caravanes, et les routes s'étendirent pour relier les différentes régions du Maghreb ; des routes caravanières principales et secondaires traversaient le Sahara. La région vivait dans une grande abondance.`,
            en: 'Shops expanded with the goods carried by trade caravans, and routes extended to connect the regions of the Maghreb; main and secondary caravan routes crossed the Sahara. The region lived in great abundance.',
          },
        },
      ],
    },

    // 03 — Story: four economic pillars (slides 5–12)
    {
      kind: 'story',
      id: 'pillars',
      title: {
        ar: 'أعمدة الاقتصاد الرستمي',
        fr: `Les piliers de l'économie rustamide`,
        en: 'The pillars of the Rustamid economy',
      },
      intro: {
        ar: 'اقلب البطاقات لتتعرّف على كلّ نشاط من الأنشطة الاقتصادية التي جعلت المغرب يزدهر.',
        fr: 'Retourne les cartes pour découvrir chaque activité économique qui fit prospérer le Maghreb.',
        en: 'Flip the cards to discover each economic activity that made the Maghreb flourish.',
      },
      cards: [
        {
          id: 'agriculture',
          image: `${IMG}/agriculture.png`,
          imageAlt: {
            ar: 'حقول خضراء واسعة تمتدّ في سهول المغرب الأوسط',
            fr: 'De vastes champs verts dans les plaines du Maghreb central',
            en: 'Wide green fields stretching across the plains of the central Maghreb',
          },
          fact: {
            ar: 'الزراعة: شهد شمال المغرب الأوسط تقدّماً زراعياً كبيراً بين متيجة وحوض الشلف. وكان ريف تاهرت كثير المياه واسع البساتين، تُزرع فيه الحبوب والكتان والسمسم، وبين هذه المنطقة ووهران الفواكه والكتان والسفرجل والتين والزيتون، وكانت واحات النخيل بين درجين وسوف وأريغ وسدراتة كثيرة الغلال.',
            fr: `Agriculture : le nord du Maghreb central connut un grand essor agricole entre la Mitidja et le bassin du Cheliff. La campagne de Tāhert, riche en eau et en vergers, produisait céréales, lin et sésame ; entre cette région et Oran poussaient fruits, lin, coings, figues et olives ; et les oasis de palmiers entre Dargine, le Souf, l'Oued Righ et Sedrata étaient riches en récoltes.`,
            en: 'Agriculture: the north of the central Maghreb saw great agricultural progress between the Mitidja and the Cheliff basin. The countryside of Tāhert, rich in water and orchards, grew grains, flax and sesame; between this area and Oran grew fruits, flax, quince, figs and olives; and the palm oases between Dargine, Souf, Arigh and Sedrata yielded abundant harvests.',
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
            ar: 'تربية الأنعام: شدّ أنظارَ الجغرافيين كثرةُ قطعان الماشية والأبقار حول تاهرت، وكثرة السمن والعسل. اهتمّ الناس بتربية الأنعام والخيول والنحل، حتى رخصت أثمانها لوفرتها، وكان ذلك حال عموم بلاد المغرب.',
            fr: `Élevage : les géographes furent frappés par l'abondance des troupeaux de bétail et de bovins autour de Tāhert, et par l'abondance du beurre clarifié et du miel. Les gens élevaient du bétail, des chevaux et des abeilles, au point que les prix baissèrent tant les produits abondaient — et il en était ainsi dans tout le Maghreb.`,
            en: 'Livestock: geographers were struck by the many herds of livestock and cattle around Tāhert, and by the abundance of clarified butter and honey. People raised livestock, horses and bees, so much that prices fell because of the plenty — and this was the case throughout the Maghreb.',
          },
        },
        {
          id: 'crafts',
          image: `${IMG}/crafts.png`,
          imageAlt: {
            ar: 'ورشة خزف بها عجلة فخار وأواني خشبية وجلود',
            fr: `Un atelier de poterie avec un tour, des ustensiles en bois et des cuirs`,
            en: 'A pottery workshop with a wheel, wooden vessels, and leather goods',
          },
          fact: {
            ar: 'الحرف: اشتغل كثيرٌ من سكّان تاهرت والدولة الرستمية بالنسيج الذي يحوّل الصوف والكتان والحرير إلى أفرشة وملابس، وبدباغة الجلود التي تُصنع منها السروج والأحذية، وباستخلاص العسل والنجارة الخشبية وصناعة الفخّار. وأنشأ البحّارة على السواحل ورشات لصناعة السفن وتصليحها.',
            fr: `Artisanat : beaucoup d'habitants de Tāhert et de l'État rustamide pratiquaient le tissage, qui transformait la laine, le lin et la soie en literie et en vêtements, et le tannage du cuir, dont on faisait selles et chaussures, ainsi que la récolte du miel, la menuiserie et la poterie. Sur les côtes, les marins installèrent des ateliers pour construire et réparer des navires.`,
            en: 'Crafts: many inhabitants of Tāhert and the Rustamid state practised weaving, which turned wool, flax and silk into bedding and clothing, and leather tanning, which produced saddles and shoes, as well as honey extraction, woodworking and pottery. On the coasts, sailors set up workshops to build and repair ships.',
          },
        },
        {
          id: 'trade',
          image: `${IMG}/trade.png`,
          imageAlt: {
            ar: 'قافلة جمال تتحرّك بين التلال محمّلةً بالبضائع',
            fr: 'Une caravane de chameaux chargée de marchandises entre les collines',
            en: 'A camel caravan moving between hills laden with goods',
          },
          fact: {
            ar: 'التجارة: سُوّقت المنتوجات الزراعية والحرفية في كلّ مكان، وتنوّعت الأسواق بين اليومية والأسبوعية. أحضر الرستميون الورق والكتان من الأندلس، والذهب والعطور من الصحراء، وحُملت من بلادهم نواتج الأرض والأنعام.',
            fr: `Commerce : les produits agricoles et artisanaux se vendaient partout, et les marchés étaient quotidiens ou hebdomadaires. Les Rustamides faisaient venir papier et lin d'Andalousie, or et parfums du Sahara, et leurs pays exportaient les produits de la terre et le bétail.`,
            en: 'Trade: agricultural and craft products were sold everywhere, and markets were daily or weekly. The Rustamids brought paper and flax from Andalusia and gold and perfumes from the Sahara, while their lands exported the produce of the earth and livestock.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'أيّ هذه الأنشطة تعتقد أنّه كان الأهمّ لازدهار الدولة الرستمية؟',
          fr: `Laquelle de ces activités penses-tu était la plus importante pour la prospérité de l'État rustamide ?`,
          en: 'Which of these activities do you think was most important for the prosperity of the Rustamid state?',
        },
        options: [
          {
            id: 'agr',
            label: { ar: 'الزراعة', fr: `L'agriculture`, en: 'Agriculture' },
            isRelevant: true,
            explanation: {
              ar: 'الزراعة أساس الغذاء، وكانت متنوّعة جداً من ريف تاهرت إلى وهران والواحات.',
              fr: `L'agriculture est la base de l'alimentation, et elle était très variée, de la campagne de Tāhert jusqu'à Oran et aux oasis.`,
              en: 'Agriculture is the foundation of food, and it was very varied, from the countryside of Tāhert to Oran and the oases.',
            },
          },
          {
            id: 'trade2',
            label: { ar: 'التجارة', fr: 'Le commerce', en: 'Trade' },
            isRelevant: true,
            explanation: {
              ar: 'التجارة ربطت المغرب بالأندلس والصحراء، وكانت سبباً في إسلام مملكة مالي حين أسلم ملكها على يد أحد التجّار.',
              fr: `Le commerce reliait le Maghreb à l'Andalousie et au Sahara, et fut la cause de l'islamisation du royaume du Mali, dont le roi embrassa l'islam grâce à un marchand.`,
              en: 'Trade linked the Maghreb to Andalusia and the Sahara, and led to the Islam of the kingdom of Mali, whose king embraced Islam through a merchant.',
            },
          },
          {
            id: 'crafts2',
            label: { ar: 'الحرف', fr: `L'artisanat`, en: 'Crafts' },
            isRelevant: true,
            explanation: {
              ar: 'الحرف غطّت حاجات المجتمع من الأفرشة والملابس والسروج والأحذية والأواني.',
              fr: `L'artisanat couvrait les besoins de la société : literie, vêtements, selles, chaussures et ustensiles.`,
              en: 'Crafts covered the needs of society: bedding, clothing, saddles, shoes and vessels.',
            },
          },
          {
            id: 'live2',
            label: { ar: 'تربية الأنعام', fr: `L'élevage`, en: 'Livestock raising' },
            isRelevant: true,
            explanation: {
              ar: 'تربية الأنعام وفّرت السمن والعسل والجلود، وكانت الأنعام من أهمّ ما تصدّره البلاد الرستمية.',
              fr: `L'élevage fournissait beurre clarifié, miel et cuir, et le bétail était l'une des principales exportations des pays rustamides.`,
              en: 'Livestock raising provided clarified butter, honey and leather, and livestock was one of the main exports of the Rustamid lands.',
            },
          },
        ],
      },
    },

    // 04 — Timeline: agricultural and economic zones (slides 5–10)
    {
      kind: 'timeline',
      id: 'agriculture-zones',
      title: {
        ar: 'مناطق الإنتاج وخيراتها',
        fr: 'Les régions de production et leurs richesses',
        en: 'Regions of production and their riches',
      },
      intro: {
        ar: 'كانت بلاد المغرب غنيّةً بمناطق متنوّعة. تعرّف على كلّ منطقة وما تُنتجه.',
        fr: `Le Maghreb était riche en régions variées. Découvre chaque région et ce qu'elle produit.`,
        en: 'The Maghreb was rich in varied regions. Discover each region and what it produces.',
      },
      image: `${IMG}/map.png`,
      imageAlt: {
        ar: 'خريطة قديمة تُظهر الأندلس وبلاد المغرب والصحراء وطرق القوافل',
        fr: `Une carte ancienne montrant l'Andalousie, le Maghreb, le Sahara et les routes caravanières`,
        en: 'An old map showing Andalusia, the Maghreb, the Sahara and the caravan routes',
      },
      steps: [
        {
          id: 'tahert-countryside',
          period: { ar: 'متيجة وحوض الشلف وريف تاهرت', fr: 'Mitidja, bassin du Cheliff et campagne de Tāhert', en: 'Mitidja, Cheliff basin and Tāhert countryside' },
          label: { ar: 'الحبوب والكتان والسمسم', fr: 'Céréales, lin et sésame', en: 'Grains, flax and sesame' },
          detail: {
            ar: 'كان ريف تاهرت كثير المياه واسع البساتين، تُزرع فيه الحبوب والكتان والسمسم. وقد سُمّي أحد أبواب المدينة «باب المطاحن»، ونُصبت المطاحن على نهر خرّار في تنس وعلى وادي مينة.',
            fr: `La campagne de Tāhert, riche en eau et en vastes vergers, produisait céréales, lin et sésame. L'une des portes de la ville s'appelait même « la porte des Moulins », et des moulins furent installés sur l'oued Kharrar à Ténès et sur l'oued Mina.`,
            en: 'The countryside of Tāhert, rich in water and wide orchards, grew grains, flax and sesame. One of the city gates was even called "the Mill Gate", and mills were set up on the Kharrar river at Ténès and on the Mina river.',
          },
        },
        {
          id: 'oran',
          period: { ar: 'بين الشلف ووهران', fr: 'Entre le Cheliff et Oran', en: 'Between the Cheliff and Oran' },
          label: { ar: 'الفواكه والكتان والسفرجل والتين والزيتون', fr: 'Fruits, lin, coings, figues et olives', en: 'Fruits, flax, quince, figs and olives' },
          detail: {
            ar: 'امتدّت بين هذه المنطقة ووهران الفواكه والمزروعات المتنوّعة من الكتان والسفرجل والتين والزيتون وغيرها، وكانت سفن الأندلس تتسوّق من مرافئ المغرب الأوسط.',
            fr: `Entre cette région et Oran s'étendaient fruits et cultures variées : lin, coings, figues, olives et autres. Les navires d'Andalousie venaient s'approvisionner dans les ports du Maghreb central.`,
            en: 'Between this area and Oran stretched fruits and varied crops: flax, quince, figs, olives and more. Andalusian ships came to buy goods in the ports of the central Maghreb.',
          },
        },
        {
          id: 'oases',
          period: { ar: 'درجين وسوف وأريغ وسدراتة', fr: 'Dargine, Souf, Oued Righ et Sedrata', en: 'Dargine, Souf, Arigh and Sedrata' },
          label: { ar: 'واحات النخيل', fr: 'Les oasis de palmiers', en: 'Palm oases' },
          detail: {
            ar: 'كانت واحات النخيل بين درجين وسوف وأريغ وسدراتة كثيرة الغلال، وتوسّع عمرانها أكثر في العهد الرستمي، إذ ازدهرت أكثر الواحات على الطريق بين تاهرت ونفوسة.',
            fr: `Les oasis de palmiers entre Dargine, le Souf, l'Oued Righ et Sedrata étaient riches en récoltes, et leur urbanisation s'étendit encore à l'époque rustamide : la plupart des oasis situées sur la route entre Tāhert et le djebel Nafūsa prospérèrent.`,
            en: 'The palm oases between Dargine, Souf, Arigh and Sedrata yielded abundant harvests, and their settlements grew further in the Rustamid era: most of the oases on the road between Tāhert and Nafusa flourished.',
          },
        },
        {
          id: 'badiya',
          period: { ar: 'حول تاهرت والبادية', fr: 'Autour de Tāhert et dans la steppe', en: 'Around Tāhert and the steppe' },
          label: { ar: 'تربية الأنعام', fr: 'Élevage', en: 'Livestock raising' },
          detail: {
            ar: 'كثرت قطعان الماشية والأبقار حول تاهرت، وكان الرعي نشاط بعض القبائل البدوية التي تسير وراء قطعانها شمالاً في الصيف وجنوباً في الشتاء.',
            fr: `Les troupeaux de bétail et de bovins abondaient autour de Tāhert, et l'élevage pastoral était l'activité de certaines tribus nomades qui suivaient leurs troupeaux vers le nord en été et vers le sud en hiver.`,
            en: 'Herds of livestock and cattle abounded around Tāhert, and herding was the activity of some nomadic tribes who followed their herds north in summer and south in winter.',
          },
        },
        {
          id: 'coasts',
          period: { ar: 'السواحل', fr: 'Les côtes', en: 'The coasts' },
          label: { ar: 'ورشات السفن', fr: 'Ateliers navals', en: 'Shipyards' },
          detail: {
            ar: 'أنشأ البحّارة على السواحل الورشات لصناعة السفن وتصليحها، قصد الإبحار نحو الأندلس للتجارة والصيد وغيرهما.',
            fr: `Sur les côtes, les marins installèrent des ateliers pour construire et réparer des navires, afin de naviguer vers l'Andalousie pour le commerce, la pêche et d'autres activités.`,
            en: 'On the coasts, sailors set up workshops to build and repair ships, in order to sail to Andalusia for trade, fishing and other purposes.',
          },
        },
      ],
    },

    // 05 — Swipe: imports vs exports (slides 11–12)
    {
      kind: 'swipe',
      id: 'imports-exports',
      title: {
        ar: 'ما الذي دخل؟ وما الذي خرج؟',
        fr: `Qu'est-ce qui entrait ? Qu'est-ce qui sortait ?`,
        en: 'What came in? What went out?',
      },
      intro: {
        ar: 'اسحب كلّ بطاقة: هل كان هذا ممّا أحضره الرستميون إلى بلادهم، أم ممّا حُمل من بلادهم إلى غيرها؟',
        fr: `Fais glisser chaque carte : est-ce une marchandise que les Rustamides faisaient venir, ou une marchandise qui partait de leurs pays ?`,
        en: 'Swipe each card: was this something the Rustamids brought into their lands, or something carried out of their lands?',
      },
      left: {
        label: { ar: 'واردات', fr: 'Importations', en: 'Imports' },
        tag: { ar: 'يدخل', fr: 'Entre', en: 'In' },
      },
      right: {
        label: { ar: 'صادرات', fr: 'Exportations', en: 'Exports' },
        tag: { ar: 'يخرج', fr: 'Sort', en: 'Out' },
      },
      cards: [
        {
          id: 'paper',
          who: { ar: 'الورق', fr: 'Le papier', en: 'Paper' },
          deed: { ar: 'جاء من الأندلس', fr: `Venait d'Andalousie`, en: 'Came from Andalusia' },
          side: 'left',
          explanation: {
            ar: 'أحضر الرستميون الورق والكتان من الأندلس.',
            fr: `Les Rustamides faisaient venir le papier et le lin d'Andalousie.`,
            en: 'The Rustamids brought paper and flax from Andalusia.',
          },
        },
        {
          id: 'flax-andalus',
          who: { ar: 'الكتّان الأندلسي', fr: `Le lin d'Andalousie`, en: 'Andalusian flax' },
          deed: { ar: 'حُمل من الأندلس', fr: `Apporté d'Andalousie`, en: 'Brought from Andalusia' },
          side: 'left',
          explanation: {
            ar: 'مع أنّ الكتان كان يُزرع في المغرب، فقد أحضر الرستميون الكتان أيضاً من الأندلس.',
            fr: `Même si le lin était cultivé au Maghreb, les Rustamides en faisaient aussi venir d'Andalousie.`,
            en: 'Although flax was grown in the Maghreb, the Rustamids also brought flax from Andalusia.',
          },
        },
        {
          id: 'gold',
          who: { ar: 'الذهب', fr: `L'or`, en: 'Gold' },
          deed: { ar: 'جُلب من الصحراء', fr: 'Rapporté du Sahara', en: 'Brought from the Sahara' },
          side: 'left',
          explanation: {
            ar: 'ظلّ التبادل التجاري نشيطاً مع الصحراء، إذ كان يُجلب منها الذهب والعطور.',
            fr: `Les échanges restaient actifs avec le Sahara, d'où l'on rapportait or et parfums.`,
            en: 'Trade with the Sahara stayed active, as gold and perfumes were brought from it.',
          },
        },
        {
          id: 'perfumes',
          who: { ar: 'العطور', fr: 'Les parfums', en: 'Perfumes' },
          deed: { ar: 'جُلبت من الصحراء', fr: 'Rapportés du Sahara', en: 'Brought from the Sahara' },
          side: 'left',
          explanation: {
            ar: 'العطور، مثل الذهب، كانت تُجلب من الصحراء.',
            fr: `Les parfums, comme l'or, venaient du Sahara.`,
            en: 'Perfumes, like gold, were brought from the Sahara.',
          },
        },
        {
          id: 'land-produce',
          who: { ar: 'نواتج الأرض', fr: 'Les produits de la terre', en: 'The produce of the land' },
          deed: { ar: 'حُملت من البلاد الرستمية', fr: 'Partaient des pays rustamides', en: 'Carried out of the Rustamid lands' },
          side: 'right',
          explanation: {
            ar: 'حُملت من البلاد الرستمية نواتج الأرض والأنعام.',
            fr: 'Les pays rustamides exportaient les produits de la terre et le bétail.',
            en: 'The Rustamid lands exported the produce of the land and livestock.',
          },
        },
        {
          id: 'livestock-export',
          who: { ar: 'الأنعام', fr: 'Le bétail', en: 'Livestock' },
          deed: { ar: 'حُملت من البلاد الرستمية', fr: 'Partait des pays rustamides', en: 'Carried out of the Rustamid lands' },
          side: 'right',
          explanation: {
            ar: 'كثرت الأنعام حتى رخصت أثمانها، فكانت ممّا يُحمل من البلاد الرستمية.',
            fr: `Le bétail était si abondant que les prix baissèrent ; il faisait partie des exportations rustamides.`,
            en: 'Livestock was so plentiful that prices fell; it was among the Rustamid exports.',
          },
        },
      ],
    },

    // 06 — Explorer: trade map hotspots (slides 3–12)
    {
      kind: 'explorer',
      id: 'trade-map',
      title: {
        ar: 'خريطة المغرب الرستمي ومبادلاته',
        fr: 'Carte du Maghreb rustamide et de ses échanges',
        en: 'Map of the Rustamid Maghreb and its trade',
      },
      intro: {
        ar: 'انقر على النقاط لتكتشف خيرات كلّ منطقة والبلاد التي كان الرستميون يتاجرون معها.',
        fr: 'Clique sur les points pour découvrir les richesses de chaque région et les pays avec lesquels les Rustamides commerçaient.',
        en: 'Tap the points to discover the riches of each region and the lands the Rustamids traded with.',
      },
      image: `${IMG}/map.png`,
      imageAlt: {
        ar: 'خريطة قديمة تُظهر الأندلس وبلاد المغرب والصحراء وطرق القوافل',
        fr: `Une carte ancienne montrant l'Andalousie, le Maghreb, le Sahara et les routes caravanières`,
        en: 'An old map showing Andalusia, the Maghreb, the Sahara and the caravan routes',
      },
      hotspots: [
        {
          id: 'tahert',
          x: 50,
          y: 54,
          label: { ar: 'تاهرت', fr: 'Tāhert', en: 'Tāhert' },
          description: {
            ar: 'عاصمة الدولة الرستمية. كان ريفها كثير المياه واسع البساتين، وكثرت حولها قطعان الماشية والأبقار، ومنها تنطلق القوافل.',
            fr: `Capitale de l'État rustamide. Sa campagne était riche en eau et en vergers, les troupeaux abondaient autour d'elle, et les caravanes en partaient.`,
            en: 'Capital of the Rustamid state. Its countryside was rich in water and orchards, herds abounded around it, and caravans set out from it.',
          },
        },
        {
          id: 'shalaf',
          x: 53,
          y: 48,
          label: { ar: 'متيجة وحوض الشلف', fr: 'Mitidja et bassin du Cheliff', en: 'Mitidja and the Cheliff basin' },
          description: {
            ar: 'شهد شمال المغرب الأوسط بين متيجة وحوض الشلف تقدّماً زراعياً كبيراً.',
            fr: 'Le nord du Maghreb central, entre la Mitidja et le bassin du Cheliff, connut un grand essor agricole.',
            en: 'The north of the central Maghreb, between the Mitidja and the Cheliff basin, saw great agricultural progress.',
          },
        },
        {
          id: 'oran',
          x: 44,
          y: 46,
          label: { ar: 'وهران', fr: 'Oran', en: 'Oran' },
          description: {
            ar: 'بين الشلف ووهران الفواكه والكتان والسفرجل والتين والزيتون، وكانت سفن الأندلس تتسوّق من مرافئ المغرب الأوسط.',
            fr: `Entre le Cheliff et Oran : fruits, lin, coings, figues et olives. Les navires d'Andalousie s'approvisionnaient dans les ports du Maghreb central.`,
            en: 'Between the Cheliff and Oran: fruits, flax, quince, figs and olives. Andalusian ships bought goods in the ports of the central Maghreb.',
          },
        },
        {
          id: 'andalus',
          x: 45,
          y: 34,
          label: { ar: 'الأندلس', fr: `L'Andalousie`, en: 'Andalusia' },
          description: {
            ar: 'أحضر الرستميون منها الورق والكتان، وكان البحّارة يُبحرون إليها للتجارة والصيد.',
            fr: `Les Rustamides en faisaient venir papier et lin, et les marins y naviguaient pour le commerce et la pêche.`,
            en: 'The Rustamids brought paper and flax from it, and sailors sailed there for trade and fishing.',
          },
        },
        {
          id: 'oases',
          x: 41,
          y: 64,
          label: { ar: 'واحات النخيل', fr: 'Les oasis de palmiers', en: 'The palm oases' },
          description: {
            ar: 'واحات درجين وسوف وأريغ وسدراتة كثيرة الغلال، وقد ازدهرت أكثر الواحات على الطريق بين تاهرت ونفوسة.',
            fr: `Les oasis de Dargine, du Souf, de l'Oued Righ et de Sedrata étaient riches en récoltes, et la plupart des oasis sur la route entre Tāhert et Nafūsa prospérèrent.`,
            en: 'The oases of Dargine, Souf, Arigh and Sedrata yielded abundant harvests, and most of the oases on the road between Tāhert and Nafusa flourished.',
          },
        },
        {
          id: 'sahara',
          x: 56,
          y: 70,
          label: { ar: 'الصحراء', fr: 'Le Sahara', en: 'The Sahara' },
          description: {
            ar: 'ظلّ التبادل التجاري نشيطاً مع الصحراء، يُجلب منها الذهب والعطور. وكانت هذه التجارة سبباً في إسلام مملكة مالي، إذ أسلم ملكها على يد أحد التجّار.',
            fr: `Les échanges avec le Sahara restaient actifs : on en rapportait or et parfums. Ce commerce fut même la cause de l'islamisation du royaume du Mali, dont le roi embrassa l'islam grâce à un marchand.`,
            en: 'Trade with the Sahara stayed active: gold and perfumes were brought from it. This trade even led to the Islam of the kingdom of Mali, whose king embraced Islam through a merchant.',
          },
        },
      ],
    },

    // 07 — Placement: region → product (slides 5–6, 9–10)
    {
      kind: 'placement',
      id: 'region-products',
      title: {
        ar: 'سجّل ما تشتهر به هذه المناطق',
        fr: 'Note ce qui fait la renommée de ces régions',
        en: 'Record what these regions are famous for',
      },
      intro: {
        ar: 'اسحب بطاقة المنتج وضَعْها في المنطقة الصحيحة.',
        fr: 'Fais glisser la carte du produit vers la bonne région.',
        en: 'Drag the product card to the correct region.',
      },
      slots: [
        { id: 'slot-tahert', label: { ar: 'ريف تاهرت', fr: 'Campagne de Tāhert', en: 'Tāhert countryside' } },
        { id: 'slot-oran', label: { ar: 'بين الشلف ووهران', fr: 'Entre le Cheliff et Oran', en: 'Between the Cheliff and Oran' } },
        { id: 'slot-oases', label: { ar: 'درجين وسوف وأريغ وسدراتة', fr: 'Dargine, Souf, Oued Righ et Sedrata', en: 'Dargine, Souf, Arigh and Sedrata' } },
        { id: 'slot-coasts', label: { ar: 'السواحل', fr: 'Les côtes', en: 'The coasts' } },
      ],
      cards: [
        {
          id: 'card-tahert',
          label: { ar: 'الحبوب والسمسم والمطاحن', fr: 'Céréales, sésame et moulins', en: 'Grains, sesame and mills' },
          slotId: 'slot-tahert',
          hint: {
            ar: 'ريف تاهرت كثير المياه، ويحمل أحد أبواب المدينة اسم «باب المطاحن».',
            fr: `La campagne de Tāhert était riche en eau, et une porte de la ville s'appelait « la porte des Moulins ».`,
            en: 'The Tāhert countryside was rich in water, and one city gate was called "the Mill Gate".',
          },
        },
        {
          id: 'card-oran',
          label: { ar: 'السفرجل والتين والزيتون', fr: 'Coings, figues et olives', en: 'Quince, figs and olives' },
          slotId: 'slot-oran',
          hint: {
            ar: 'هذه الفواكه ذكرها الدرس بين منطقة الشلف ووهران.',
            fr: 'La leçon situe ces fruits entre la région du Cheliff et Oran.',
            en: 'The lesson places these fruits between the Cheliff area and Oran.',
          },
        },
        {
          id: 'card-oases',
          label: { ar: 'النخيل والغلال الكثيرة', fr: 'Palmiers et récoltes abondantes', en: 'Palm trees and abundant harvests' },
          slotId: 'slot-oases',
          hint: {
            ar: 'واحات النخيل كانت بين درجين وسوف وأريغ وسدراتة.',
            fr: `Les oasis de palmiers se trouvaient entre Dargine, le Souf, l'Oued Righ et Sedrata.`,
            en: 'The palm oases lay between Dargine, Souf, Arigh and Sedrata.',
          },
        },
        {
          id: 'card-coasts',
          label: { ar: 'صناعة السفن وتصليحها', fr: 'Construction et réparation de navires', en: 'Building and repairing ships' },
          slotId: 'slot-coasts',
          hint: {
            ar: 'أنشأ البحّارة ورشات السفن على السواحل للإبحار نحو الأندلس.',
            fr: `Les marins installèrent les ateliers navals sur les côtes pour naviguer vers l'Andalousie.`,
            en: 'Sailors set up shipyards on the coasts to sail to Andalusia.',
          },
        },
      ],
    },

    // 08 — Quiz
    {
      kind: 'quiz',
      id: 'vocabulary',
      title: {
        ar: 'أتعرّف — مصطلحات الدرس',
        fr: 'Je retiens — les termes du cours',
        en: 'Vocabulary — lesson terms',
      },
      intro: {
        ar: 'تحقّق من فهمك لمصطلحات الدرس وأحداثه.',
        fr: 'Vérifie ta compréhension des termes et des faits du cours.',
        en: 'Check your understanding of the lesson terms and facts.',
      },
      questions: [
        {
          id: 'q-izdhar',
          type: 'mcq',
          question: {
            ar: 'ما معنى «الازدهار»؟',
            fr: `Que signifie "الازدهار" (al-izdihār) ?`,
            en: 'What does "الازدهار" (al-izdihār) mean?',
          },
          options: [
            { id: 'a', label: { ar: 'مجرّد الوجود والبقاء', fr: 'La simple existence et survie', en: 'Mere existence and survival' } },
            { id: 'b', label: { ar: 'حالة تتجاوز الوجود إلى النموّ والتطوّر', fr: `Un état dépassant l'existence pour atteindre la croissance`, en: 'A state beyond existence, reaching growth and development' } },
            { id: 'c', label: { ar: 'التراجع والانحسار', fr: 'Le recul et la régression', en: 'Decline and regression' } },
            { id: 'd', label: { ar: 'الاستقلال السياسي', fr: `L'indépendance politique`, en: 'Political independence' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'الازدهار: حالة تتجاوز مجرّد الوجود والبقاء إلى حالة النموّ والتطوّر.',
            fr: `Al-izdihār : un état qui dépasse la simple existence pour atteindre la croissance et le développement.`,
            en: 'Al-izdihār: a state that goes beyond mere existence and survival to reach growth and development.',
          },
        },
        {
          id: 'q-muqayada',
          type: 'mcq',
          question: {
            ar: 'ما المقايضة؟',
            fr: `Qu'est-ce que le troc ?`,
            en: 'What is barter?',
          },
          options: [
            { id: 'a', label: { ar: 'شراء البضاعة بالنقود', fr: `Acheter de la marchandise avec de l'argent`, en: 'Buying goods with money' } },
            { id: 'b', label: { ar: 'معاوضة سلعة بسلعة لا تُدانيها في الشبه', fr: 'Échanger une marchandise contre une autre qui ne lui ressemble pas', en: 'Exchanging a good for another that is unlike it' } },
            { id: 'c', label: { ar: 'تصدير البضاعة إلى الخارج', fr: `Exporter des marchandises vers l'étranger`, en: 'Exporting goods abroad' } },
            { id: 'd', label: { ar: 'الاستيراد من بلاد أخرى', fr: `Importer depuis d'autres pays`, en: 'Importing from other countries' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'المقايضة: معاوضة سلعة ومبادلة سلعة بسلعة لا تُدانيها في الشبه. وبها أرسل أهل المغرب فائض منتوجاتهم إلى البلاد البعيدة.',
            fr: `Le troc : échanger une marchandise contre une autre qui ne lui ressemble pas. C'est ainsi que les gens du Maghreb envoyaient leurs surplus vers des pays lointains.`,
            en: 'Barter: exchanging a good for another that is unlike it. This is how the people of the Maghreb sent their surplus to distant lands.',
          },
        },
        {
          id: 'q-agriculture',
          type: 'mcq',
          question: {
            ar: 'كيف كان النشاط الزراعي في المغرب الأوسط؟',
            fr: `Comment était l'activité agricole dans le Maghreb central ?`,
            en: 'What was agricultural activity like in the central Maghreb?',
          },
          options: [
            { id: 'a', label: { ar: 'مقتصراً على الحبوب فقط', fr: 'Limitée aux céréales seulement', en: 'Limited to grains only' } },
            { id: 'b', label: { ar: 'متنوّعاً: حبوب وكتان وسمسم وفواكه ونخيل', fr: 'Variée : céréales, lin, sésame, fruits et palmiers', en: 'Varied: grains, flax, sesame, fruits and palms' } },
            { id: 'c', label: { ar: 'ضعيفاً بسبب قسوة المناخ', fr: 'Faible en raison de la dureté du climat', en: 'Weak due to the harsh climate' } },
            { id: 'd', label: { ar: 'يعتمد على الواردات فقط', fr: 'Dépendant uniquement des importations', en: 'Dependent on imports alone' } },
          ],
          correctId: 'b',
          explanation: {
            ar: 'الحبوب والكتان والسمسم في ريف تاهرت، والفواكه والسفرجل والتين والزيتون بين الشلف ووهران، والنخيل في واحات درجين وسوف وأريغ وسدراتة.',
            fr: `Céréales, lin et sésame dans la campagne de Tāhert ; fruits, coings, figues et olives entre le Cheliff et Oran ; palmiers dans les oasis de Dargine, du Souf, de l'Oued Righ et de Sedrata.`,
            en: 'Grains, flax and sesame in the Tāhert countryside; fruits, quince, figs and olives between the Cheliff and Oran; palms in the oases of Dargine, Souf, Arigh and Sedrata.',
          },
        },
        {
          id: 'q-crafts',
          type: 'mcq',
          question: {
            ar: 'ما الحرف التي اشتغل بها سكّان تاهرت والدولة الرستمية؟',
            fr: `Quels métiers les habitants de Tāhert et de l'État rustamide pratiquaient-ils ?`,
            en: 'What crafts did the people of Tāhert and the Rustamid state practise?',
          },
          options: [
            { id: 'a', label: { ar: 'النسيج ودباغة الجلود والنجارة والفخار وصناعة السفن', fr: 'Le tissage, le tannage, la menuiserie, la poterie et la construction navale', en: 'Weaving, tanning, woodworking, pottery and shipbuilding' } },
            { id: 'b', label: { ar: 'صناعة الأسلحة فقط', fr: `La fabrication d'armes uniquement`, en: 'Weapons manufacture only' } },
            { id: 'c', label: { ar: 'الطباعة والنشر', fr: `L'imprimerie et l'édition`, en: 'Printing and publishing' } },
            { id: 'd', label: { ar: 'الزراعة فقط', fr: `L'agriculture seulement`, en: 'Agriculture only' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'تنوّعت الحرف بين النسيج ودباغة الجلود لصنع السروج والأحذية، واستخلاص العسل والنجارة الخشبية وصناعة الفخار، وورشات السفن على السواحل.',
            fr: 'Les métiers allaient du tissage au tannage du cuir pour les selles et les chaussures, en passant par la récolte du miel, la menuiserie, la poterie et les ateliers navals des côtes.',
            en: 'Crafts ranged from weaving to leather tanning for saddles and shoes, plus honey extraction, woodworking, pottery and the shipyards on the coasts.',
          },
        },
        {
          id: 'q-exports',
          type: 'mcq',
          question: {
            ar: 'ما الذي كان يُحمل من البلاد الرستمية إلى غيرها؟',
            fr: 'Que transportait-on depuis les pays rustamides vers les autres pays ?',
            en: 'What was carried from the Rustamid lands to other lands?',
          },
          options: [
            { id: 'a', label: { ar: 'نواتج الأرض والأنعام', fr: 'Les produits de la terre et le bétail', en: 'The produce of the land and livestock' } },
            { id: 'b', label: { ar: 'الورق والكتان', fr: 'Le papier et le lin', en: 'Paper and flax' } },
            { id: 'c', label: { ar: 'الذهب والعطور', fr: `L'or et les parfums`, en: 'Gold and perfumes' } },
            { id: 'd', label: { ar: 'السفن الأندلسية', fr: 'Les navires andalous', en: 'Andalusian ships' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'حُملت من البلاد الرستمية نواتج الأرض والأنعام، أمّا الورق والكتان فمن الأندلس، والذهب والعطور من الصحراء.',
            fr: `Les pays rustamides exportaient les produits de la terre et le bétail ; le papier et le lin venaient d'Andalousie, l'or et les parfums du Sahara.`,
            en: 'The Rustamid lands exported the produce of the land and livestock; paper and flax came from Andalusia, gold and perfumes from the Sahara.',
          },
        },
        {
          id: 'q-markets',
          type: 'mcq',
          question: {
            ar: 'كيف كانت الأسواق في العهد الرستمي؟',
            fr: `Comment étaient les marchés à l'époque rustamide ?`,
            en: 'What were markets like in the Rustamid era?',
          },
          options: [
            { id: 'a', label: { ar: 'منتشرة ومتنوّعة بين اليومية والأسبوعية، وبعضها متخصّص', fr: 'Répandues et variées, quotidiennes ou hebdomadaires, certaines spécialisées', en: 'Widespread and varied, daily or weekly, some specialised' } },
            { id: 'b', label: { ar: 'سوق واحدة في تاهرت فقط', fr: 'Un seul marché, à Tāhert', en: 'A single market, in Tāhert only' } },
            { id: 'c', label: { ar: 'أسواق سنوية لا غير', fr: 'Des foires annuelles seulement', en: 'Annual fairs only' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'انتشرت الأسواق وتنوّعت بين اليومية والأسبوعية، وتخصّص بعضها في بيع المواشي أو منتجات الصحراء أو المزروعات أو المصنوعات.',
            fr: `Les marchés se multiplièrent, quotidiens ou hebdomadaires, et certains se spécialisèrent dans le bétail, les produits du Sahara, les récoltes ou l'artisanat.`,
            en: 'Markets spread and varied between daily and weekly, and some specialised in livestock, desert products, crops or crafts.',
          },
        },
        {
          id: 'q-mali',
          type: 'truefalse',
          question: {
            ar: 'كانت التجارة سبباً في إسلام مملكة مالي، إذ أسلم ملكها على يد أحد التجّار.',
            fr: `Le commerce fut la cause de l'islamisation du royaume du Mali, dont le roi embrassa l'islam grâce à un marchand.`,
            en: 'Trade led to the Islam of the kingdom of Mali, whose king embraced Islam through a merchant.',
          },
          answer: true,
          explanation: {
            ar: 'نعم، هذا ما يذكره الدرس عن أثر التجارة مع الصحراء.',
            fr: `Oui, c'est ce que rapporte la leçon sur l'effet du commerce avec le Sahara.`,
            en: 'Yes, this is what the lesson reports about the effect of trade with the Sahara.',
          },
        },
        {
          id: 'q-ibn-hawqal',
          type: 'truefalse',
          question: {
            ar: 'قال ابن حوقل عن جمال القوافل: «لا تُدانيها في الكثرة إبلُ العرب».',
            fr: `Ibn Ḥawqal a dit des chameaux des caravanes que les chameaux des Arabes ne les égalaient pas en nombre.`,
            en: 'Ibn Hawqal said of the caravan camels that "the camels of the Arabs do not come close to them in number".',
          },
          answer: true,
          explanation: {
            ar: 'نعم، كان عدد جمال القوافل كبيراً جداً، حتى قال ابن حوقل: لا تُدانيها في الكثرة إبل العرب.',
            fr: `Oui, les chameaux des caravanes étaient si nombreux qu'Ibn Ḥawqal dit que les chameaux des Arabes ne les égalaient pas en nombre.`,
            en: 'Yes, the caravan camels were so numerous that Ibn Hawqal said the camels of the Arabs did not come close to them in number.',
          },
        },
      ],
    },

    // 09 — Value
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
        fr: `Quelles valeurs peut-on tirer du développement économique à l'époque rustamide ?`,
        en: 'What values can we draw from economic development in the Rustamid era?',
      },
      choices: [
        {
          id: 'diversity',
          label: { ar: 'التنوّع قوّة', fr: 'La diversité est une force', en: 'Diversity is a strength' },
          isCorrect: true,
          feedback: {
            ar: 'التنوّع مؤشّر على الثراء والوفرة. الرستميون نجحوا لأنّهم لم يعتمدوا على نشاط واحد.',
            fr: `La diversité est un indicateur de richesse et d'abondance. Les Rustamides ont réussi parce qu'ils ne dépendaient pas d'une seule activité.`,
            en: 'Diversity is an indicator of wealth and abundance. The Rustamids succeeded because they did not depend on a single activity.',
          },
        },
        {
          id: 'stability',
          label: { ar: 'الاستقرار أساس النموّ', fr: 'La stabilité est la base de la croissance', en: 'Stability is the foundation of growth' },
          isCorrect: true,
          feedback: {
            ar: 'الاستقرار قاعدة النموّ والتطوّر. بدونه لا تستطيع الزراعة ولا التجارة أن تزدهر.',
            fr: `La stabilité est la base de la croissance et du développement. Sans elle, ni l'agriculture ni le commerce ne peuvent prospérer.`,
            en: 'Stability is the foundation of growth and development. Without it, neither agriculture nor trade can flourish.',
          },
        },
        {
          id: 'land',
          label: { ar: 'الأرض ثروة', fr: 'La terre est une richesse', en: 'The land is a wealth' },
          isCorrect: true,
          feedback: {
            ar: 'الأرض ثروة تحقّق الأمن الغذائي وتوفّر الأموال.',
            fr: `La terre est une richesse qui assure la sécurité alimentaire et procure des ressources.`,
            en: 'The land is a wealth that achieves food security and provides resources.',
          },
        },
        {
          id: 'quality',
          label: { ar: 'التفوّق في الجودة', fr: `L'excellence dans la qualité`, en: 'Excellence in quality' },
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
          value: { ar: 'التنوّع مؤشّر على الثراء والوفرة', fr: `La diversité est un indicateur de richesse et d'abondance`, en: 'Diversity is an indicator of wealth and abundance' },
          evidence: {
            ar: 'ازدهر المغرب لأنّ اقتصاده تنوّع بين الزراعة وتربية الأنعام والحرف والتجارة.',
            fr: `Le Maghreb prospéra parce que son économie était diversifiée entre agriculture, élevage, artisanat et commerce.`,
            en: 'The Maghreb prospered because its economy was diversified between agriculture, livestock raising, crafts and trade.',
          },
        },
        {
          id: 'v2',
          value: { ar: 'الاستقرار قاعدة النموّ والتطوّر', fr: 'La stabilité est la base de la croissance et du développement', en: 'Stability is the foundation of growth and development' },
          evidence: {
            ar: 'ساعد الاستقرار الذي مرّ به المغرب في العهد الرستمي على ازدهار الاقتصاد، فتشجّع الناس على خدمة الأرض وفتح الورشات.',
            fr: `La stabilité du Maghreb à l'époque rustamide favorisa l'essor de l'économie : les gens furent encouragés à cultiver la terre et à ouvrir des ateliers.`,
            en: 'The stability of the Maghreb in the Rustamid era helped the economy prosper: people were encouraged to cultivate the land and open workshops.',
          },
        },
        {
          id: 'v3',
          value: { ar: 'الأرض ثروة تحقّق الأمن الغذائي وتوفّر الأموال', fr: `La terre assure la sécurité alimentaire et procure des ressources`, en: 'The land achieves food security and provides resources' },
          evidence: {
            ar: 'خيرات ريف تاهرت ووهران والواحات غذّت السكّان، وأُرسل ما زاد منها إلى البلاد البعيدة لمقايضته.',
            fr: `Les richesses de la campagne de Tāhert, de la région d'Oran et des oasis nourrissaient la population, et le surplus partait vers des pays lointains pour être échangé.`,
            en: 'The riches of the Tāhert countryside, the Oran area and the oases fed the population, and the surplus was sent to distant lands to be bartered.',
          },
        },
        {
          id: 'v4',
          value: { ar: 'يظهر تفوّقك فيما تقدّم وجودة ما تُتقن', fr: `Ton excellence se manifeste dans ce que tu offres et la qualité de ce que tu maîtrises`, en: 'Your excellence shows in what you offer and the quality of what you master' },
          evidence: {
            ar: 'أتقن الحرفيون الرستميون النسيج والدباغة والنجارة والفخّار وصناعة السفن، فغطّوا حاجات المجتمع.',
            fr: `Les artisans rustamides maîtrisaient le tissage, le tannage, la menuiserie, la poterie et la construction navale, et couvraient ainsi les besoins de la société.`,
            en: 'Rustamid craftspeople mastered weaving, tanning, woodworking, pottery and shipbuilding, and so covered the needs of society.',
          },
        },
      ],
    },

    // 10 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'شهد المغرب في العهد الرستمي ازدهاراً اقتصادياً متنوّعاً قائماً على الزراعة وتربية الأنعام والحرف والتجارة، وربطته القوافل بالأندلس والصحراء.',
        fr: `Le Maghreb connut sous les Rustamides une prospérité économique variée fondée sur l'agriculture, l'élevage, l'artisanat et le commerce, et les caravanes le reliaient à l'Andalousie et au Sahara.`,
        en: 'Under the Rustamids the Maghreb enjoyed a varied economic prosperity founded on agriculture, livestock raising, crafts and trade, with caravans linking it to Andalusia and the Sahara.',
      },
      learned: [
        {
          ar: 'ساعد الاستقرار على الازدهار: خدمة الأرض، والورشات، والحرف، والقوافل، والمسالك بين جهات المغرب.',
          fr: `La stabilité favorisa la prospérité : culture de la terre, ateliers, métiers, caravanes et routes entre les régions du Maghreb.`,
          en: 'Stability favoured prosperity: farming, workshops, crafts, caravans and routes between the regions of the Maghreb.',
        },
        {
          ar: 'الزراعة: حبوب وكتان وسمسم في ريف تاهرت، وفواكه وسفرجل وتين وزيتون بين الشلف ووهران، ونخيل في واحات درجين وسوف وأريغ وسدراتة.',
          fr: `Agriculture : céréales, lin et sésame autour de Tāhert ; fruits, coings, figues et olives entre le Cheliff et Oran ; palmiers dans les oasis de Dargine, du Souf, de l'Oued Righ et de Sedrata.`,
          en: 'Agriculture: grains, flax and sesame around Tāhert; fruits, quince, figs and olives between the Cheliff and Oran; palms in the oases of Dargine, Souf, Arigh and Sedrata.',
        },
        {
          ar: 'تربية الأنعام: ماشية وأبقار وخيول ونحل، وسمن وعسل بوفرة حتى رخصت الأثمان.',
          fr: `Élevage : bétail, bovins, chevaux et abeilles, beurre clarifié et miel en telle abondance que les prix baissèrent.`,
          en: 'Livestock raising: livestock, cattle, horses and bees, with butter and honey so plentiful that prices fell.',
        },
        {
          ar: 'الحرف: النسيج، ودباغة الجلود، واستخلاص العسل، والنجارة، والفخار، وورشات السفن على السواحل.',
          fr: `Artisanat : tissage, tannage du cuir, récolte du miel, menuiserie, poterie et ateliers navals sur les côtes.`,
          en: 'Crafts: weaving, leather tanning, honey extraction, woodworking, pottery and shipyards on the coasts.',
        },
        {
          ar: 'التجارة: استورد الرستميون الورق والكتان من الأندلس، والذهب والعطور من الصحراء، وصدّروا نواتج الأرض والأنعام.',
          fr: `Commerce : les Rustamides importaient papier et lin d'Andalousie, or et parfums du Sahara, et exportaient les produits de la terre et le bétail.`,
          en: 'Trade: the Rustamids imported paper and flax from Andalusia and gold and perfumes from the Sahara, and exported the produce of the land and livestock.',
        },
      ],
    },
  ],
}
