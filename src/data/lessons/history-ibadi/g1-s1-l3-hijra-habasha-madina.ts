import type { Lesson } from '../../types'

// Source: Ibadite History textbook (Other ressources/Ibadite_History_S1.pdf), "الدرس الثالث: الهجرة إلى الحبشة والمدينة", slides 2–11.
//   Slide 2 — إشكالية الدرس: إلى أين هاجر المسلمون؟ كيف وجدوا أرض الحبشة؟ ما هو عام الحزن؟ كيف كانت الهجرة إلى المدينة ومتى؟
//   Slide 3 — الأمان في الحبشة: الآية (الزمر 10)، رأى الرسول (ص) ما يخفف عن أصحابه فاقترح الهجرة إلى الحبشة فإن بها ملكًا لا يُظلم عنده أحد،
//             خرج في السنة الخامسة للبعثة 15 مسلمًا يتقدمهم جعفر بن أبي طالب وعثمان بن عفان وغيرهم.
//   Slide 4 — قريش تلاحق المسلمين: أرسلت إلى النجاشي، جعفر يبيّن جهالتهم ثم رسولهم الذي يعرفون صدقه وأمانته، يقرأ من سورة مريم، النجاشي يبكي ويقول: ارجعوا لبلدكم فو الله لا أسلّمهم أبدًا.
//   Slide 5 — الأمر بمقاطعة المشركين لبني هاشم: السنة السابعة للبعثة، المقاطعة والحصار في الشِّعب، الصحيفة في جوف الكعبة، الجوع والعطش، انتشار الخبر في القبائل.
//   Slide 6 — موقف ينهي الحصار: السنة العاشرة، هشام بن عمرو وخمسة آخرون، الأرضة أكلت الصحيفة وتركت (باسمك اللهم)، مات أبو طالب ثم خديجة (عام الحزن).
//   Slide 7 — الرسول (ص) في الطائف: العام العاشر، عشرة أيام، الحجارة والضرب والشتم، ملك الجبال، «بل أرجو أن يخرج من أصلابهم من يعبد الله وحده».
//   Slide 8 — رحلة الإسراء والمعراج: المسجد الأقصى، الأنبياء، الصلوات الخمس (من خمسين)، قريش كذّبت وسخرت، أبو بكر صدّقه فسُمّي الصدّيق.
//   Slide 9 — التحضير للهجرة: السنة 11 ستة رجال من يثرب، السنة التالية اثنا عشر رجلًا في العقبة ومعهم مصعب بن عمير، السنة 13 بيعة العقبة الثانية.
//   Slide 10 — الهجرة إلى المدينة: العام الرابع عشر للبعثة، التخطيط والتوكّل، غار ثور ثلاثة أيام، 11 يومًا، التهليل والتكبير.
// Every fact below is taken from those slides; nothing is added from outside them.
// No human figure is ever illustrated (see CONTENT_GUIDELINES.md): scenes are told through landscape, objects and light.

const IMG = '/images/lessons/hijra-habasha-madina'

export const hijraHabashaMadina: Lesson = {
  id: 'history-ibadi-g1-s1-l3',
  gradeId: 'history-ibadi-g1',
  moduleId: 'history-ibadi-g1',
  semesterId: 'history-ibadi-g1-s1',
  order: 3,
  status: 'published',
  estimatedMinutes: 40,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'قافلةٌ من الإبل تستريح في كثبانٍ ذهبية تحت سماءٍ مرصّعة بالنجوم، وفي الأفق البعيد واحةٌ تتلألأ بمصابيحها',
    fr: 'Une caravane de chameaux au repos dans des dunes dorées sous un ciel étoilé, une oasis scintillant de lampes à l’horizon',
    en: 'A caravan of camels resting in golden dunes under a starry sky, an oasis glowing with lamps on the far horizon',
  },
  title: {
    ar: 'الهجرة إلى الحبشة والمدينة',
    fr: 'L’émigration vers l’Abyssinie et Médine',
    en: 'The Migration to Abyssinia and Madina',
  },
  description: {
    ar: 'حين ضاق الأذى بالمسلمين في مكّة، أين وجدوا الأمان؟ تابع ملك الحبشة، وحصار الشِّعب، وعام الحزن، ثم طريق الهجرة إلى المدينة غارًا بعد غار.',
    fr: 'Quand le tort devint trop lourd à La Mecque, où les musulmans trouvèrent-ils la sécurité ? Suis le roi d’Abyssinie, le siège du ravin, l’année de la tristesse, puis la route de l’émigration vers Médine.',
    en: 'When the harm became too heavy in Makkah, where did the Muslims find safety? Follow the king of Abyssinia, the siege of the valley, the Year of Sorrow, then the road of the migration to Madina.',
  },

  sections: [
    // 01 — Hero: the lesson's own guiding question (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'قافلةٌ من الإبل تستريح في كثبانٍ ذهبية تحت سماءٍ مرصّعة بالنجوم، وفي الأفق البعيد واحةٌ تتلألأ بمصابيحها',
        fr: 'Une caravane de chameaux au repos dans des dunes dorées sous un ciel étoilé, une oasis scintillant de lampes à l’horizon',
        en: 'A caravan of camels resting in golden dunes under a starry sky, an oasis glowing with lamps on the far horizon',
      },
      title: { ar: 'إشكالية الدرس', fr: 'La question du cours', en: 'The lesson’s question' },
      question: {
        ar: 'إلى أين يذهب من ضاقت به أرضه، وكيف يجد الأمان؟',
        fr: 'Où va celui dont la terre devient trop étroite, et comment trouve-t-il la sécurité ?',
        en: 'Where does someone go when their own land becomes too narrow, and how do they find safety?',
      },
      intro: {
        ar: 'اشتدّ أذى قريش على المسلمين في مكّة. فأين هاجروا أوّلًا؟ وكيف وجدوا أرض الحبشة؟ وما هو عام الحزن؟ وكيف كانت الهجرة إلى المدينة المنوّرة، ومتى؟',
        fr: 'Le tort de Quraysh pesait de plus en plus sur les musulmans à La Mecque. Où émigrèrent-ils d’abord ? Comment trouvèrent-ils la terre d’Abyssinie ? Qu’est-ce que l’année de la tristesse ? Comment se déroula l’émigration vers Médine, et quand ?',
        en: 'Quraysh’s harm weighed ever more heavily on the Muslims in Makkah. Where did they migrate first? How did they find the land of Abyssinia? What is the Year of Sorrow? How did the migration to Madina happen, and when?',
      },
    },

    // 02 — Mission map (slide 2)
    {
      kind: 'missions',
      id: 'missions',
      title: { ar: 'أربع مهمّات في هذا الدرس', fr: 'Quatre missions dans cette leçon', en: 'Four missions in this lesson' },
      intro: {
        ar: 'اضغط على أيّ سؤال لتنطلق إلى محطّته في الدرس.',
        fr: 'Touche une question pour aller directement à l’étape qui y répond.',
        en: 'Tap any question to jump straight to the step that answers it.',
      },
      missions: [
        {
          id: 'm1',
          question: { ar: 'إلى أين هاجر المسلمون أوّلًا؟', fr: 'Où les musulmans émigrèrent-ils d’abord ?', en: 'Where did the Muslims migrate first?' },
          target: 'reading-habasha',
          teaser: { ar: 'ملكٌ لا يُظلم عنده أحد.', fr: 'Un roi chez qui nul n’est lésé.', en: 'A king with whom no one is wronged.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف وجد المسلمون أرض الحبشة؟', fr: 'Comment les musulmans trouvèrent-ils l’Abyssinie ?', en: 'How did the Muslims find Abyssinia?' },
          target: 'reading-najashi',
          teaser: { ar: 'قريش تلاحقهم، وجعفرٌ يتكلّم.', fr: 'Quraysh les poursuit, Ja‘far prend la parole.', en: 'Quraysh pursues them, and Ja‘far speaks.' },
        },
        {
          id: 'm3',
          question: { ar: 'ما هو عام الحزن؟', fr: 'Qu’est-ce que l’année de la tristesse ?', en: 'What is the Year of Sorrow?' },
          target: 'siege-balance',
          teaser: { ar: 'حصارٌ، وصحيفةٌ، وفقدُ سندَين.', fr: 'Un siège, un pacte, la perte de deux soutiens.', en: 'A siege, a covenant, and the loss of two supporters.' },
        },
        {
          id: 'm4',
          question: { ar: 'كيف كانت الهجرة إلى المدينة؟ ومتى؟', fr: 'Comment se fit l’émigration vers Médine ? Et quand ?', en: 'How did the migration to Madina happen? And when?' },
          target: 'hijra-journey',
          teaser: { ar: 'ليلٌ، وغارٌ، وطريقٌ طويل.', fr: 'Une nuit, une grotte, une longue route.', en: 'A night, a cave, and a long road.' },
        },
      ],
    },

    // 03 — Reading: safety in Abyssinia (slide 3)
    {
      kind: 'reading',
      id: 'reading-habasha',
      title: { ar: 'اقرأ: الأمان في الحبشة', fr: 'Lis : la sécurité en Abyssinie', en: 'Read: safety in Abyssinia' },
      intro: {
        ar: 'اقرأ لماذا اقترح الرسول (ص) الحبشة، ثمّ ابنِ الآية في اللعبة التالية.',
        fr: 'Lis pourquoi le Prophète ﷺ proposa l’Abyssinie, puis reconstitue le verset dans le jeu suivant.',
        en: 'Read why the Prophet ﷺ suggested Abyssinia, then rebuild the verse in the next game.',
      },
      image: `${IMG}/habasha-shore.png`,
      imageAlt: {
        ar: 'مراكب خشبية راسية على شاطئ بحرٍ فيروزيّ عند الفجر، وجبالٌ خضراء في الأفق',
        fr: 'Des barques en bois amarrées sur le rivage d’une mer turquoise à l’aube, des montagnes vertes à l’horizon',
        en: 'Wooden boats moored on a turquoise sea shore at dawn, green mountains on the horizon',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'أذًى يشتدّ', fr: 'Un tort qui s’aggrave', en: 'Harm that grows' },
          text: {
            ar: 'كان المسلمون في مكّة يتعرّضون للأذى يومًا بعد يوم. ورأى الرسول (ص) أن يُخفّف عن أصحابه، فاقترح عليهم الهجرة إلى الحبشة، فإنّ بها ملكًا لا يُظلم عنده أحد.',
            fr: 'À La Mecque, les musulmans subissaient le tort jour après jour. Le Prophète ﷺ voulut alléger le sort de ses compagnons et leur proposa d’émigrer en Abyssinie, car elle avait un roi chez qui nul n’est lésé.',
            en: 'In Makkah the Muslims suffered harm day after day. The Prophet ﷺ wished to ease things for his companions and suggested they migrate to Abyssinia, for it had a king with whom no one is wronged.',
          },
        },
        {
          id: 'p1b',
          heading: { ar: 'آيةٌ تُطمئن', fr: 'Un verset qui rassure', en: 'A verse that reassures' },
          text: {
            ar: 'قال الله تعالى: ﴿قُلْ يَا عِبَادِ الَّذِينَ آمَنُوا اتَّقُوا رَبَّكُمْ لِلَّذِينَ أَحْسَنُوا فِي هَذِهِ الدُّنْيَا حَسَنَةٌ وَأَرْضُ اللَّهِ وَاسِعَةٌ إِنَّمَا يُوَفَّى الصَّابِرُونَ أَجْرَهُمْ بِغَيْرِ حِسَابٍ﴾ [الزمر: 10].',
            fr: 'Dieu dit : « Dis : Ô Mes serviteurs qui avez cru, craignez votre Seigneur. À ceux qui font le bien ici-bas revient un bien ; et la terre de Dieu est vaste. Les patients recevront leur récompense sans compter. » [az-Zumar : 10, traduction du sens]',
            en: 'God says: "Say: O My servants who believe, fear your Lord. For those who do good in this world there is good; and God’s earth is vast. Only the patient will be given their reward without measure." [az-Zumar: 10, translation of the meaning]',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'أوّل الخارجين', fr: 'Les premiers à partir', en: 'The first to leave' },
          text: {
            ar: 'فخرج في السنة الخامسة للبعثة خمسة عشر مسلمًا، يتقدّمهم جعفر بن أبي طالب وعثمان بن عفان وغيرهما رضي الله عنهم. تركوا ديارهم طلبًا للأمان، وأرض الله واسعة.',
            fr: 'Ainsi partirent, la cinquième année de la mission, quinze musulmans, menés par Ja‘far ibn Abī Ṭālib, ‘Uthmān ibn ‘Affān et d’autres (qu’Allah les agrée). Ils quittèrent leurs foyers en quête de sécurité, car la terre de Dieu est vaste.',
            en: 'So in the fifth year of the mission, fifteen Muslims set out, led by Ja‘far ibn Abi Talib, ‘Uthman ibn ‘Affan and others (may God be pleased with them). They left their homes seeking safety, for God’s earth is vast.',
          },
        },
      ],
    },

    // 04 — Verse builder (slide 3)
    {
      kind: 'verses',
      id: 'verse-safety',
      title: { ar: 'وأرض الله واسعة', fr: 'La terre de Dieu est vaste', en: 'God’s earth is vast' },
      intro: {
        ar: 'قرأتَ الآية في النصّ السابق. أعِد الآن بناء آخرها بالترتيب الصحيح.',
        fr: 'Tu viens de lire le verset dans le texte. Reconstruis maintenant sa fin dans le bon ordre.',
        en: 'You have just read the verse in the text. Now rebuild its ending in the right order.',
      },
      verses: [
        {
          id: 'zumar-10',
          context: { ar: 'قال الله تعالى:', fr: 'Dieu — qu’Il soit exalté — dit :', en: 'God Almighty says:' },
          ref: { ar: 'سورة الزمر، الآية 10', fr: 'Sourate az-Zumar, verset 10', en: 'Surat az-Zumar, verse 10' },
          words: ['وَأَرْضُ', 'اللَّهِ', 'وَاسِعَةٌ', 'إِنَّمَا', 'يُوَفَّى', 'الصَّابِرُونَ', 'أَجْرَهُمْ', 'بِغَيْرِ', 'حِسَابٍ'],
          meaning: {
            ar: 'أرض الله واسعة، والصابرون يُعطَون أجرهم بغير حساب.',
            fr: 'La terre de Dieu est vaste, et les patients recevront leur récompense sans compter.',
            en: 'God’s earth is vast, and the patient will receive their reward without measure.',
          },
        },
      ],
    },

    // 05 — Reading: Quraysh, Ja‘far and the Najashi (slide 4)
    {
      kind: 'reading',
      id: 'reading-najashi',
      title: { ar: 'اقرأ: في بلاط النجاشي', fr: 'Lis : à la cour du Négus', en: 'Read: at the Najashi’s court' },
      intro: { ar: 'اقرأ ما جرى بين قريش والنجاشي، ثمّ تابع القراءة.', fr: 'Lis ce qui se passa entre Quraysh et le Négus, puis poursuis la lecture.', en: 'Read what passed between Quraysh and the Najashi, then keep reading.' },
      image: `${IMG}/najashi-court.png`,
      imageAlt: { ar: 'قاعةٌ ملكية واسعة، عرشٌ خشبيّ منقوش تحت أقواسٍ عالية ومصابيح معلّقة وسجّادٌ أحمر', fr: 'Une vaste salle royale, un trône en bois sculpté sous de hautes arcades, des lampes suspendues et un tapis rouge', en: 'A vast royal hall, a carved wooden throne under tall arches, hanging lamps and a red carpet' },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'قريش تلاحق المسلمين', fr: 'Quraysh poursuit les musulmans', en: 'Quraysh pursues the Muslims' },
          text: { ar: 'لمّا علمت قريش بهجرة بعض المسلمين إلى الحبشة أرسلت إلى النجاشي، ملك الحبشة، تطلبهم.', fr: 'Quand Quraysh apprit l’émigration de certains musulmans en Abyssinie, elle envoya un message au Négus, roi d’Abyssinie, pour les réclamer.', en: 'When Quraysh learned that some Muslims had migrated to Abyssinia, it sent word to the Najashi, king of Abyssinia, demanding them back.' },
        },
        {
          id: 'p2',
          heading: { ar: 'جعفر يتكلّم', fr: 'Ja‘far prend la parole', en: 'Ja‘far speaks' },
          text: { ar: 'فلمّا سمع النجاشي طلب المشركين، تقدّم جعفر بن أبي طالب ليُبيّن للملك أنّهم كانوا في جهالةٍ حتى جاءهم رسولٌ منهم يعرفون صدقه وأمانته، فدعاهم لعبادة الله الواحد. ثمّ قرأ عليه جعفر من سورة مريم.', fr: 'Lorsque le Négus entendit la demande des polythéistes, Ja‘far ibn Abī Ṭālib s’avança pour expliquer au roi qu’ils vivaient dans l’ignorance jusqu’à ce que vienne à eux un messager d’entre eux, dont ils connaissaient la sincérité et l’honnêteté, qui les appela à adorer le Dieu unique. Puis Ja‘far lui récita des versets de la sourate Maryam.', en: 'When the Najashi heard the polytheists’ demand, Ja‘far ibn Abi Talib stepped forward to explain to the king that they had lived in ignorance until a messenger from among them, whose truthfulness and honesty they knew, came to them and called them to worship the One God. Then Ja‘far recited to him from Surat Maryam.' },
        },
        {
          id: 'p3',
          heading: { ar: 'النجاشي يردّ', fr: 'Le Négus répond', en: 'The Najashi answers' },
          text: { ar: 'عندما سمع النجاشي لجعفر بكى بكاءً شديدًا، وقال لوفد قريش: «ارجعوا لبلدكم، فو الله لا أُسلّمهم أبدًا».', fr: 'Quand le Négus entendit Ja‘far, il pleura abondamment et dit à la délégation de Quraysh : « Retournez dans votre pays ! Par Dieu, je ne les livrerai jamais ! »', en: 'When the Najashi heard Ja‘far, he wept bitterly and said to Quraysh’s delegation: "Go back to your land! By God, I will never hand them over!"' },
        },
      ],
    },

    // 06 — Reading: the boycott (slide 5)
    {
      kind: 'reading',
      id: 'reading-siege',
      title: { ar: 'اقرأ: حصار الشِّعب', fr: 'Lis : le siège du ravin', en: 'Read: the siege of the valley' },
      intro: {
        ar: 'في السنة السابعة للبعثة اشتدّ الأمر. اقرأ، ثمّ زِن ما حدث في الميزان.',
        fr: 'La septième année de la mission, la situation s’aggrava. Lis, puis pèse les faits sur la balance.',
        en: 'In the seventh year of the mission, things grew harder. Read, then weigh the events on the scale.',
      },
      image: `${IMG}/shib-siege.png`,
      imageAlt: {
        ar: 'وادٍ جبليّ ضيّق جافّ تتناثر فيه خيامٌ قليلة وشجيراتٌ شائكة تحت شمسٍ حارقة',
        fr: 'Un étroit ravin de montagne aride où se dressent quelques tentes et des buissons d’épines sous un soleil brûlant',
        en: 'A narrow dry mountain valley with a few tents and thorny bushes under a scorching sun',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'قريش تريد قتله', fr: 'Quraysh veut le tuer', en: 'Quraysh wants to kill him' },
          text: {
            ar: 'في السنة السابعة للبعثة أرادت قريش قتل الرسول (ص)، لكنّ بني هاشم قاموا بحمايته.',
            fr: 'La septième année de la mission, Quraysh voulut tuer le Prophète ﷺ, mais les Banū Hāshim se levèrent pour le protéger.',
            en: 'In the seventh year of the mission, Quraysh wanted to kill the Prophet ﷺ, but the Banu Hashim rose to protect him.',
          },
        },
        {
          id: 'p2',
          heading: { ar: 'المقاطعة والصحيفة', fr: 'Le boycott et le pacte', en: 'The boycott and the covenant' },
          text: {
            ar: 'فقامت قريش بمقاطعة بني هاشم وحاصروهم في شِعب مكّة، وكتبوا بذلك عهدًا ثمّ علّقوه في جوف الكعبة.',
            fr: 'Alors Quraysh décida de boycotter les Banū Hāshim et les assiégea dans le ravin de La Mecque ; elle écrivit un pacte à ce sujet et le suspendit à l’intérieur de la Ka‘ba.',
            en: 'So Quraysh boycotted the Banu Hashim and besieged them in a valley of Makkah; it wrote a covenant about it and hung it inside the Kaaba.',
          },
        },
        {
          id: 'p3',
          heading: { ar: 'جوعٌ وعطش', fr: 'Faim et soif', en: 'Hunger and thirst' },
          text: {
            ar: 'تضرّر المحاصَرون في الشِّعب بالجوع والعطش، ومات الأطفال وهزل الكبار. وحاول من كان داخل مكّة مساعدتهم رغم التضييق. وفي موسم الحجّ انتشر خبرهم في جميع القبائل العربية، وقالوا إنّ هذه الدعوة حقّ، بما أنّ صاحبها احتمل كلّ هذا.',
            fr: 'Les assiégés souffrirent de la faim et de la soif dans le ravin ; des enfants moururent et les anciens s’affaiblirent. Certains à l’intérieur de La Mecque tentèrent de les aider malgré la pression. Pendant le pèlerinage, leur sort se répandit dans toutes les tribus arabes, qui dirent que cet appel était vrai puisque son porteur endurait tout cela.',
            en: 'The besieged suffered hunger and thirst in the valley; children died and the elders grew weak. Some inside Makkah tried to help them despite the pressure. During the pilgrimage season, news of them spread to all the Arab tribes, who said this call must be true since its bearer endured all of this.',
          },
        },
        {
          id: 'p4',
          heading: { ar: 'نهاية الحصار', fr: 'La fin du siège', en: 'The end of the siege' },
          text: {
            ar: 'وفي السنة العاشرة للبعثة اجتمع هشام بن عمرو وخمسةٌ آخرون أمام الكعبة، وأرادوا أن يُمزّقوا الصحيفة. ولمّا دخل كبار قريش إلى الكعبة وجدوا أنّ الأرضة أكلت الصحيفة وتركت (باسمك اللهم)، فانتهى الحصار.',
            fr: 'La dixième année de la mission, Hishām ibn ‘Amr et cinq autres se réunirent devant la Ka‘ba et voulurent déchirer le pacte. Quand les notables de Quraysh entrèrent dans la Ka‘ba, ils trouvèrent que les termites avaient rongé le pacte, ne laissant que « en Ton nom, ô Dieu » ; le siège prit fin.',
            en: 'In the tenth year of the mission, Hisham ibn ‘Amr and five others gathered before the Kaaba and wanted to tear up the covenant. When Quraysh’s leaders entered the Kaaba they found that termites had eaten the covenant, leaving only "In Your name, O God"; the siege ended.',
          },
        },
      ],
    },

    // 07 — Balance scale: burdens vs relief (slides 5–6)
    {
      kind: 'balance',
      id: 'siege-balance',
      title: { ar: 'ميزان الحصار', fr: 'La balance du siège', en: 'The scale of the siege' },
      intro: {
        ar: 'ضع كلّ معلومةٍ على الكفّة التي تنتمي إليها: ما أثقل على المسلمين، وما فتح لهم باب الفرج.',
        fr: 'Pose chaque fait sur le bon plateau : ce qui pesait sur les musulmans, et ce qui leur ouvrit la porte du soulagement.',
        en: 'Place each fact on the pan where it belongs: what weighed on the Muslims, and what opened the door to relief.',
      },
      left: { ar: 'ما أثقل عليهم', fr: 'Ce qui pesait', en: 'What weighed on them' },
      right: { ar: 'ما فتح باب الفرج', fr: 'Ce qui apporta le soulagement', en: 'What opened relief' },
      weights: [
        {
          id: 'w1',
          text: { ar: 'قاطعت قريش بني هاشم وحاصرتهم في الشِّعب', fr: 'Quraysh boycotta les Banū Hāshim et les assiégea dans le ravin', en: 'Quraysh boycotted the Banu Hashim and besieged them in the valley' },
          side: 'left',
          explanation: { ar: 'هذا أصل الثقل: مقاطعةٌ وحصار.', fr: 'C’est l’origine du poids : boycott et siège.', en: 'This is the root of the burden: boycott and siege.' },
        },
        {
          id: 'w2',
          text: { ar: 'كتبوا عهد المقاطعة وعلّقوه في جوف الكعبة', fr: 'Ils écrivirent le pacte du boycott et le suspendirent dans la Ka‘ba', en: 'They wrote the boycott covenant and hung it inside the Kaaba' },
          side: 'left',
          explanation: { ar: 'نعم، ثقلٌ لأنّ المقاطعة صارت عهدًا مكتوبًا.', fr: 'Oui, un poids : le boycott était devenu un pacte écrit.', en: 'Yes, a burden — the boycott became a written covenant.' },
        },
        {
          id: 'w3',
          text: { ar: 'تضرّر المحاصَرون بالجوع والعطش', fr: 'Les assiégés souffrirent de la faim et de la soif', en: 'The besieged suffered hunger and thirst' },
          side: 'left',
          explanation: { ar: 'صحيح، كان ذلك أشدّ ما تحمّلوه.', fr: 'Exact, ce fut le plus dur à endurer.', en: 'Right — this was the hardest part to bear.' },
        },
        {
          id: 'w4',
          text: { ar: 'ماتت الأطفال وهزل الكبار', fr: 'Des enfants moururent et les anciens s’affaiblirent', en: 'Children died and the elders grew weak' },
          side: 'left',
          explanation: { ar: 'نعم، كان ثمن الحصار قاسيًا.', fr: 'Oui, le prix du siège fut cruel.', en: 'Yes — the price of the siege was cruel.' },
        },
        {
          id: 'w5',
          text: { ar: 'قام بنو هاشم بحماية الرسول (ص)', fr: 'Les Banū Hāshim protégèrent le Prophète ﷺ', en: 'The Banu Hashim protected the Prophet ﷺ' },
          side: 'right',
          explanation: { ar: 'هذه حمايةٌ وسندٌ لا ثِقل.', fr: 'C’est un soutien, non un poids.', en: 'This was support, not a burden.' },
        },
        {
          id: 'w6',
          text: { ar: 'حاول من في داخل مكّة مساعدتهم رغم التضييق', fr: 'Des gens à l’intérieur de La Mecque tentèrent de les aider malgré la pression', en: 'People inside Makkah tried to help them despite the pressure' },
          side: 'right',
          explanation: { ar: 'مساعدةٌ تُخفّف، فهي في كفّة الفرج.', fr: 'Une aide qui soulage : elle va du côté du soulagement.', en: 'Help that eases things — it belongs on the relief side.' },
        },
        {
          id: 'w7',
          text: { ar: 'انتشر خبرهم في القبائل، فقالوا: هذه الدعوة حقّ', fr: 'Leur sort se répandit dans les tribus, qui dirent : cet appel est vrai', en: 'Their story spread among the tribes, who said: this call is true' },
          side: 'right',
          explanation: { ar: 'صبرهم كان شهادةً للدعوة عند القبائل.', fr: 'Leur patience devint un témoignage pour l’appel auprès des tribus.', en: 'Their patience became a testimony for the call among the tribes.' },
        },
        {
          id: 'w8',
          text: { ar: 'اجتمع هشام بن عمرو وخمسة آخرون أمام الكعبة ليمزّقوا الصحيفة', fr: 'Hishām ibn ‘Amr et cinq autres se réunirent devant la Ka‘ba pour déchirer le pacte', en: 'Hisham ibn ‘Amr and five others gathered at the Kaaba to tear up the covenant' },
          side: 'right',
          explanation: { ar: 'بداية نهاية الحصار — في السنة العاشرة للبعثة.', fr: 'Le début de la fin du siège — la dixième année de la mission.', en: 'The beginning of the end of the siege — in the tenth year of the mission.' },
        },
        {
          id: 'w9',
          text: { ar: 'وجدوا أنّ الأرضة أكلت الصحيفة وتركت «باسمك اللهم»', fr: 'Ils trouvèrent que les termites avaient rongé le pacte, ne laissant que « en Ton nom, ô Dieu »', en: 'They found that termites had eaten the covenant, leaving only "In Your name, O God"' },
          side: 'right',
          explanation: { ar: 'وانتهى الحصار بذلك.', fr: 'Et le siège prit fin ainsi.', en: 'And that is how the siege ended.' },
        },
      ],
    },

    // 08 — Story cards: after the siege (slides 6–8)
    {
      kind: 'story',
      id: 'after-siege',
      title: { ar: 'بعد الحصار: ثلاث محطّات', fr: 'Après le siège : trois étapes', en: 'After the siege: three stops' },
      intro: {
        ar: 'اقلب كلّ بطاقة لتعرف ما حدث بعد أن انتهى الحصار.',
        fr: 'Retourne chaque carte pour découvrir ce qui suivit la fin du siège.',
        en: 'Flip each card to find out what came after the siege ended.',
      },
      cards: [
        {
          id: 'sahifa',
          image: `${IMG}/sahifa.png`,
          imageAlt: {
            ar: 'صحيفةٌ قديمة ممزّقة أكلتها الأرضة، معلّقة على جدارٍ حجريّ تحت مصباح',
            fr: 'Un vieux parchemin déchiré, rongé par les termites, accroché à un mur de pierre sous une lampe',
            en: 'An old torn parchment eaten by termites, hanging on a stone wall under a lamp',
          },
          fact: {
            ar: 'بعد انتهاء الحصار مرض أبو طالب عمّ الرسول (ص) ومات، وبعد أيّامٍ توفّيت زوجته خديجة، فسُمّي ذلك العام: عام الحزن.',
            fr: 'Après la fin du siège, Abū Ṭālib, oncle du Prophète ﷺ, tomba malade et mourut ; quelques jours plus tard, son épouse Khadīja mourut aussi. Cette année fut appelée l’année de la tristesse.',
            en: 'After the siege ended, Abu Talib, the Prophet’s ﷺ uncle, fell ill and died; a few days later his wife Khadija passed away too. That year was called the Year of Sorrow.',
          },
        },
        {
          id: 'taif',
          image: `${IMG}/taif.png`,
          imageAlt: {
            ar: 'تلالٌ صخرية في الطائف وبساتينُ خضراء خلف أسوارٍ حجرية، ودربٌ ترابيّ موحش',
            fr: 'Des collines rocheuses à Ṭā’if, des vergers verts derrière des murs de pierre et un chemin poussiéreux désert',
            en: 'Rocky hills of Ta’if, green orchards behind stone walls and a lonely dusty path',
          },
          fact: {
            ar: 'في العام العاشر خرج الرسول (ص) إلى الطائف وبقي فيها عشرة أيّام يدعو أهلها، فقابلوه بالحجارة والضرب والشتم. ولمّا عاد قال له ملك الجبال: إن شئتَ أطبقتُ عليهم الأخشبين. فقال (ص): بل أرجو أن يخرج الله من أصلابهم من يعبد الله وحده.',
            fr: 'La dixième année, le Prophète ﷺ alla à Ṭā’if et y resta dix jours à appeler ses habitants ; ils l’accueillirent à coups de pierres, de coups et d’insultes. À son retour, l’ange des montagnes lui dit : « Si tu veux, je referme sur eux les deux montagnes. » Il répondit ﷺ : « Plutôt, j’espère que Dieu fera naître de leurs reins ceux qui adoreront Dieu seul. »',
            en: 'In the tenth year the Prophet ﷺ went to Ta’if and stayed ten days calling its people; they met him with stones, blows and insults. On his return the angel of the mountains said to him: "If you wish, I will crush them between the two mountains." He ﷺ replied: "Rather, I hope God will bring from their descendants those who worship God alone."',
          },
        },
        {
          id: 'isra',
          image: `${IMG}/isra-night.png`,
          imageAlt: {
            ar: 'مسارٌ من نورٍ ذهبيّ يمتدّ في سماءٍ زرقاء مرصّعة بالنجوم بين مدينةٍ صحراوية ومسجدٍ بعيد ذي قبّة',
            fr: 'Un sentier de lumière dorée traversant un ciel bleu étoilé, entre une ville du désert et un lointain sanctuaire à dôme',
            en: 'A path of golden light across a starry blue sky between a desert city and a distant domed sanctuary',
          },
          fact: {
            ar: 'في رحلة الإسراء انتقل الرسول (ص) إلى المسجد الأقصى فوجد الأنبياء السابقين ينتظرونه فصلّى بهم إمامًا، ثمّ عُرج به إلى السماوات حتى سدرة المنتهى، ففُرضت الصلوات الخمسون ثمّ خُفّفت إلى خمس. وحين أخبر قريشًا كذّبوه وسخروا منه، وصدّقه أبو بكر فسُمّي الصدّيق.',
            fr: 'Lors du voyage nocturne, le Prophète ﷺ fut conduit à la mosquée al-Aqṣā où les prophètes antérieurs l’attendaient, et il pria en imam devant eux ; puis il fut élevé à travers les cieux jusqu’au Lotus de la limite, où cinquante prières furent prescrites puis réduites à cinq. Quraysh le démentit et se moqua de lui, mais Abū Bakr le crut et fut nommé aṣ-Ṣiddīq.',
            en: 'On the Night Journey the Prophet ﷺ was taken to al-Aqsa Mosque, where the earlier prophets awaited him and he led them in prayer; then he was raised through the heavens to the Lote Tree of the Furthest Limit, where fifty prayers were prescribed and then reduced to five. Quraysh denied and mocked him, but Abu Bakr believed him and was named as-Siddiq.',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'ماذا نلاحظ من موقف الرسول (ص) بعد كلّ هذا الألم؟',
          fr: 'Que remarquons-nous dans l’attitude du Prophète ﷺ après toute cette douleur ?',
          en: 'What do we notice about the Prophet’s ﷺ attitude after all this pain?',
        },
        options: [
          {
            id: 'hope',
            isRelevant: true,
            label: { ar: 'كان يرجو الخير حتى لمن آذاه', fr: 'Il espérait le bien même pour ceux qui lui avaient fait du tort', en: 'He hoped for good even for those who harmed him' },
            explanation: { ar: 'نعم — ردّ على ملك الجبال بأنّه يرجو أن يخرج من أصلابهم من يعبد الله وحده.', fr: 'Oui — il répondit à l’ange qu’il espérait voir naître de leurs reins des adorateurs de Dieu seul.', en: 'Yes — he told the angel he hoped for worshippers of God alone to come from their descendants.' },
          },
          {
            id: 'continue',
            isRelevant: true,
            label: { ar: 'استمرّ في الدعوة رغم الفقد والأذى', fr: 'Il poursuivit l’appel malgré les pertes et le tort', en: 'He kept calling despite the loss and the harm' },
            explanation: { ar: 'نعم — بعد عام الحزن ذهب إلى الطائف يدعو أهلها.', fr: 'Oui — après l’année de la tristesse, il alla appeler les gens de Ṭā’if.', en: 'Yes — after the Year of Sorrow he went to Ta’if to call its people.' },
          },
          {
            id: 'revenge',
            isRelevant: false,
            label: { ar: 'قبل أن تُطبق الجبال على أهل الطائف', fr: 'Il accepta que les montagnes se referment sur les gens de Ṭā’if', en: 'He agreed that the mountains be closed upon the people of Ta’if' },
            explanation: { ar: 'لا — لقد رفض هذا العرض تمامًا.', fr: 'Non — il refusa cette offre complètement.', en: 'No — he refused this offer completely.' },
          },
        ],
      },
    },

    // 09 — Timeline: the years of the mission (slides 3–10)
    {
      kind: 'timeline',
      id: 'timeline',
      title: { ar: 'سنوات البعثة: من الحبشة إلى المدينة', fr: 'Les années de la mission : de l’Abyssinie à Médine', en: 'Years of the mission: from Abyssinia to Madina' },
      intro: {
        ar: 'اضغط على كلّ محطّة لتعرف ما حدث في ذلك العام من أعوام البعثة.',
        fr: 'Touche chaque étape pour voir ce qui arriva cette année-là de la mission.',
        en: 'Tap each stop to see what happened in that year of the mission.',
      },
      steps: [
        {
          id: 't5',
          period: { ar: 'السنة 5', fr: 'An 5', en: 'Year 5' },
          label: { ar: 'الهجرة إلى الحبشة', fr: 'L’émigration en Abyssinie', en: 'Migration to Abyssinia' },
          detail: { ar: 'خرج خمسة عشر مسلمًا يتقدّمهم جعفر بن أبي طالب وعثمان بن عفان.', fr: 'Quinze musulmans partirent, menés par Ja‘far ibn Abī Ṭālib et ‘Uthmān ibn ‘Affān.', en: 'Fifteen Muslims set out, led by Ja‘far ibn Abi Talib and ‘Uthman ibn ‘Affan.' },
        },
        {
          id: 't7',
          period: { ar: 'السنة 7', fr: 'An 7', en: 'Year 7' },
          label: { ar: 'مقاطعة بني هاشم', fr: 'Le boycott des Banū Hāshim', en: 'Boycott of the Banu Hashim' },
          detail: { ar: 'حاصرت قريش بني هاشم في الشِّعب وعلّقت الصحيفة في الكعبة.', fr: 'Quraysh assiégea les Banū Hāshim dans le ravin et suspendit le pacte dans la Ka‘ba.', en: 'Quraysh besieged the Banu Hashim in the valley and hung the covenant in the Kaaba.' },
        },
        {
          id: 't10',
          period: { ar: 'السنة 10', fr: 'An 10', en: 'Year 10' },
          label: { ar: 'نهاية الحصار وعام الحزن', fr: 'Fin du siège et année de la tristesse', en: 'End of the siege and the Year of Sorrow' },
          detail: { ar: 'انتهى الحصار، ثمّ توفّي أبو طالب وخديجة، وخرج الرسول (ص) إلى الطائف.', fr: 'Le siège prit fin, puis Abū Ṭālib et Khadīja moururent, et le Prophète ﷺ alla à Ṭā’if.', en: 'The siege ended, then Abu Talib and Khadija died, and the Prophet ﷺ went to Ta’if.' },
        },
        {
          id: 't11',
          period: { ar: 'السنة 11', fr: 'An 11', en: 'Year 11' },
          label: { ar: 'ستّة رجال من يثرب', fr: 'Six hommes de Yathrib', en: 'Six men from Yathrib' },
          detail: { ar: 'في موسم الحجّ أسلم ستّة رجال من يثرب وحملوا رسالة الإسلام إلى المدينة.', fr: 'Pendant le pèlerinage, six hommes de Yathrib acceptèrent l’islam et portèrent son message à Médine.', en: 'During the pilgrimage, six men from Yathrib accepted Islam and carried its message to Madina.' },
        },
        {
          id: 't12',
          period: { ar: 'السنة 12', fr: 'An 12', en: 'Year 12' },
          label: { ar: 'اثنا عشر رجلًا في العقبة', fr: 'Douze hommes à ‘Aqaba', en: 'Twelve men at ‘Aqaba' },
          detail: { ar: 'في الحجّ التالي جاء اثنا عشر رجلًا يبايعونه في العقبة، فأرسل معهم مصعب بن عمير يعلّمهم الدين والقرآن.', fr: 'Au pèlerinage suivant, douze hommes vinrent lui prêter serment à ‘Aqaba ; il envoya avec eux Muṣ‘ab ibn ‘Umayr pour leur enseigner la religion et le Coran.', en: 'At the next pilgrimage, twelve men came to pledge allegiance at ‘Aqaba; he sent Mus‘ab ibn ‘Umayr with them to teach religion and the Qur’an.' },
        },
        {
          id: 't13',
          period: { ar: 'السنة 13', fr: 'An 13', en: 'Year 13' },
          label: { ar: 'بيعة العقبة الثانية', fr: 'Le second serment de ‘Aqaba', en: 'The Second Pledge of ‘Aqaba' },
          detail: { ar: 'دعا سادة المدينة الرسول (ص) إلى المدينة وتعهّدوا بنصرته وبذل الأرواح لإعلاء كلمة الله.', fr: 'Les chefs de Médine invitèrent le Prophète ﷺ et s’engagèrent à le soutenir et à sacrifier leur vie pour élever la parole de Dieu.', en: 'The leaders of Madina invited the Prophet ﷺ and pledged to support him and give their lives to raise the word of God.' },
        },
        {
          id: 't14',
          period: { ar: 'السنة 14', fr: 'An 14', en: 'Year 14' },
          label: { ar: 'الهجرة إلى المدينة', fr: 'L’émigration vers Médine', en: 'Migration to Madina' },
          detail: { ar: 'أذن الله للرسول (ص) والمسلمين بالهجرة من مكّة، فدخل المدينة بالتهليل والتكبير.', fr: 'Dieu permit au Prophète ﷺ et aux musulmans d’émigrer de La Mecque, et il entra à Médine sous les « lā ilāha illā Allāh » et les « Allāhu akbar ».', en: 'God permitted the Prophet ﷺ and the Muslims to migrate from Makkah, and he entered Madina amid cries of tahlil and takbir.' },
        },
      ],
    },

    // 10 — Reading: the night of the migration (slide 10)
    {
      kind: 'reading',
      id: 'reading-hijra',
      title: { ar: 'اقرأ: ليلة الهجرة', fr: 'Lis : la nuit de l’émigration', en: 'Read: the night of the migration' },
      intro: { ar: 'اقرأ كيف خرج الرسول (ص) من مكّة، ثمّ تتبّع الطريق في اللعبة التالية.', fr: 'Lis comment le Prophète ﷺ quitta La Mecque, puis suis la route dans le jeu suivant.', en: 'Read how the Prophet ﷺ left Makkah, then follow the road in the next game.' },
      image: `${IMG}/hijra-road.png`,
      imageAlt: { ar: 'آثارُ أخفافٍ على طريقٍ طويل بين الكثبان الذهبية نحو جبالٍ بعيدة', fr: 'Des traces de pas sur une longue piste entre des dunes dorées vers de lointaines montagnes', en: 'Hoof prints on a long trail between golden dunes toward distant mountains' },
      paragraphs: [
        {
          id: 'p1',
          heading: { ar: 'الإذن بالهجرة', fr: 'La permission d’émigrer', en: 'Permission to migrate' },
          text: { ar: 'أذن الله تعالى للرسول (ص) والمسلمين بالهجرة من مكّة في العام الرابع عشر للبعثة، فعزمت قريش على قتله.', fr: 'Dieu permit au Prophète ﷺ et aux musulmans d’émigrer de La Mecque la quatorzième année de la mission ; Quraysh résolut alors de le tuer.', en: 'God permitted the Prophet ﷺ and the Muslims to migrate from Makkah in the fourteenth year of the mission; Quraysh then resolved to kill him.' },
        },
        {
          id: 'p2',
          heading: { ar: 'تخطيطٌ وتوكّل', fr: 'Planifier et s’en remettre à Dieu', en: 'Planning and trusting God' },
          text: { ar: 'توكّل الرسول (ص) على الله، وخطّط للهجرة بشكلٍ محكم حتى لا يتمكّن المشركون منه في الطريق. فخرج من داره ليلًا واختفى مع أبي بكر الصدّيق في غار ثور ثلاثة أيّام، حتى عجزت قريش عن ملاحقته.', fr: 'Le Prophète ﷺ s’en remit à Dieu et planifia l’émigration avec soin pour que les polythéistes ne puissent l’atteindre en chemin. Il quitta sa maison de nuit et se cacha avec Abū Bakr aṣ-Ṣiddīq dans la grotte de Thawr pendant trois jours, jusqu’à ce que Quraysh soit incapable de le poursuivre.', en: 'The Prophet ﷺ relied on God and planned the migration carefully so the polytheists could not seize him on the way. He left his house at night and hid with Abu Bakr as-Siddiq in the cave of Thawr for three days, until Quraysh could no longer pursue him.' },
        },
        {
          id: 'p3',
          heading: { ar: 'الطريق إلى المدينة', fr: 'La route vers Médine', en: 'The road to Madina' },
          text: { ar: 'ثمّ واصل طريقه أحد عشر يومًا، حتى دخل المدينة واستقبله أهلها بالتهليل والتكبير.', fr: 'Puis il poursuivit sa route onze jours, jusqu’à son entrée à Médine, où ses habitants l’accueillirent par le tahlīl et le takbīr.', en: 'Then he continued for eleven days until he entered Madina, where its people welcomed him with tahlil and takbir.' },
        },
      ],
    },

    // 11 — Journey path: the road to Madina (slides 9–10)
    {
      kind: 'journey',
      id: 'hijra-journey',
      title: { ar: 'درب الهجرة إلى المدينة', fr: 'La route de l’émigration vers Médine', en: 'The road of the migration to Madina' },
      intro: {
        ar: 'اجتز كلّ محطّةٍ بإجابة سؤالها لتتقدّم القافلة نحو المدينة.',
        fr: 'Franchis chaque étape en répondant à sa question pour faire avancer la caravane vers Médine.',
        en: 'Pass each stop by answering its question so the caravan moves on toward Madina.',
      },
      stops: [
        {
          id: 'aqaba',
          name: { ar: 'العقبة', fr: '‘Aqaba', en: '‘Aqaba' },
          image: `${IMG}/aqaba-night.png`,
          question: {
            ar: 'بعد بيعة اثني عشر رجلًا في العقبة، مَن أرسل الرسول (ص) معهم ليعلّمهم الدين والقرآن؟',
            fr: 'Après le serment des douze hommes à ‘Aqaba, qui le Prophète ﷺ envoya-t-il avec eux pour leur enseigner la religion et le Coran ?',
            en: 'After the twelve men pledged at ‘Aqaba, whom did the Prophet ﷺ send with them to teach religion and the Qur’an?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'مصعب بن عمير', fr: 'Muṣ‘ab ibn ‘Umayr', en: 'Mus‘ab ibn ‘Umayr' } },
            { id: 'b', correct: false, label: { ar: 'جعفر بن أبي طالب', fr: 'Ja‘far ibn Abī Ṭālib', en: 'Ja‘far ibn Abi Talib' }, hint: { ar: 'جعفر تقدّم المهاجرين إلى الحبشة، لا إلى المدينة.', fr: 'Ja‘far mena les émigrés vers l’Abyssinie, pas vers Médine.', en: 'Ja‘far led the migrants to Abyssinia, not Madina.' } },
            { id: 'c', correct: false, label: { ar: 'هشام بن عمرو', fr: 'Hishām ibn ‘Amr', en: 'Hisham ibn ‘Amr' }, hint: { ar: 'هشام هو من سعى في تمزيق الصحيفة.', fr: 'Hishām est celui qui voulut déchirer le pacte.', en: 'Hisham is the one who sought to tear up the covenant.' } },
          ],
          reveal: {
            ar: 'بعد سنةٍ كاملة من التوجيه كثر المسلمون في المدينة، ثمّ دعا سادتها الرسول (ص) في العام الثالث عشر وتعهّدوا بنصرته: بيعة العقبة الثانية.',
            fr: 'Après une année entière de cet enseignement, les musulmans devinrent nombreux à Médine ; puis, la treizième année, ses chefs invitèrent le Prophète ﷺ et promirent de le soutenir : le second serment de ‘Aqaba.',
            en: 'After a full year of this teaching the Muslims in Madina grew numerous; then in the thirteenth year its leaders invited the Prophet ﷺ and pledged to support him: the Second Pledge of ‘Aqaba.',
          },
        },
        {
          id: 'night',
          name: { ar: 'ليلة الهجرة', fr: 'La nuit du départ', en: 'The night of departure' },
          question: {
            ar: 'كيف خرج الرسول (ص) من داره؟',
            fr: 'Comment le Prophète ﷺ sortit-il de sa maison ?',
            en: 'How did the Prophet ﷺ leave his house?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'ليلًا، وقد خطّط للهجرة بإحكام وتوكّل على الله', fr: 'De nuit, après avoir soigneusement planifié et placé sa confiance en Dieu', en: 'At night, having planned carefully and put his trust in God' } },
            { id: 'b', correct: false, label: { ar: 'نهارًا أمام أنظار الجميع', fr: 'En plein jour, sous les yeux de tous', en: 'In daylight, in front of everyone' }, hint: { ar: 'خطّط للهجرة بشكلٍ محكم حتى لا يتمكّن المشركون منه في الطريق.', fr: 'Il planifia l’émigration avec soin pour que les polythéistes ne puissent l’atteindre en chemin.', en: 'He planned the migration carefully so the polytheists could not seize him on the way.' } },
            { id: 'c', correct: false, label: { ar: 'مع جيشٍ كبير يحميه', fr: 'Avec une grande armée pour le protéger', en: 'With a great army to protect him' }, hint: { ar: 'خرج مع أبي بكر الصدّيق وحده، واختفيا في غار.', fr: 'Il partit avec Abū Bakr seul, et ils se cachèrent dans une grotte.', en: 'He left with Abu Bakr alone, and they hid in a cave.' } },
          ],
          reveal: {
            ar: 'أذن الله للرسول (ص) في العام الرابع عشر للبعثة، وعزمت قريش على قتله، فتوكّل على الله وخطّط بإحكام.',
            fr: 'Dieu permit au Prophète ﷺ d’émigrer la quatorzième année de la mission ; Quraysh résolut de le tuer, mais il s’en remit à Dieu et planifia avec soin.',
            en: 'God permitted the Prophet ﷺ in the fourteenth year of the mission; Quraysh resolved to kill him, but he relied on God and planned with care.',
          },
        },
        {
          id: 'thawr',
          name: { ar: 'غار ثور', fr: 'La grotte de Thawr', en: 'Thawr cave' },
          image: `${IMG}/thawr-cave.png`,
          question: {
            ar: 'كم يومًا بقي الرسول (ص) وأبو بكر في غار ثور؟',
            fr: 'Combien de jours le Prophète ﷺ et Abū Bakr restèrent-ils dans la grotte de Thawr ?',
            en: 'How many days did the Prophet ﷺ and Abu Bakr stay in the cave of Thawr?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'ثلاثة أيّام', fr: 'Trois jours', en: 'Three days' } },
            { id: 'b', correct: false, label: { ar: 'يومٌ واحد', fr: 'Un seul jour', en: 'One day' }, hint: { ar: 'بقيا أكثر من ذلك حتى عجزت قريش عن ملاحقتهما.', fr: 'Ils restèrent plus longtemps, jusqu’à ce que Quraysh renonce à les poursuivre.', en: 'They stayed longer, until Quraysh gave up pursuing them.' } },
            { id: 'c', correct: false, label: { ar: 'أحد عشر يومًا', fr: 'Onze jours', en: 'Eleven days' }, hint: { ar: 'أحد عشر يومًا هي مدّة المسير بعد الغار، لا الإقامة فيه.', fr: 'Onze jours, c’est la durée de la route après la grotte, non du séjour.', en: 'Eleven days is the length of the road after the cave, not the stay in it.' } },
          ],
          reveal: {
            ar: 'خرج من داره ليلًا واختفى مع أبي بكر الصدّيق في غار ثور ثلاثة أيّام، حتى عجزت قريش عن ملاحقتهما.',
            fr: 'Il quitta sa maison de nuit et se cacha avec Abū Bakr aṣ-Ṣiddīq dans la grotte de Thawr pendant trois jours, jusqu’à ce que Quraysh soit incapable de les poursuivre.',
            en: 'He left his house at night and hid with Abu Bakr as-Siddiq in the cave of Thawr for three days, until Quraysh could no longer pursue them.',
          },
        },
        {
          id: 'road',
          name: { ar: 'الطريق', fr: 'La route', en: 'The road' },
          image: `${IMG}/hijra-road.png`,
          question: {
            ar: 'كم يومًا واصل الرسول (ص) طريقه بعد الغار؟',
            fr: 'Combien de jours le Prophète ﷺ poursuivit-il sa route après la grotte ?',
            en: 'How many days did the Prophet ﷺ travel after the cave?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'أحد عشر يومًا', fr: 'Onze jours', en: 'Eleven days' } },
            { id: 'b', correct: false, label: { ar: 'ثلاثة أيّام', fr: 'Trois jours', en: 'Three days' }, hint: { ar: 'ثلاثة أيّام كانت إقامته في الغار.', fr: 'Trois jours, ce fut son séjour dans la grotte.', en: 'Three days was his stay in the cave.' } },
            { id: 'c', correct: false, label: { ar: 'يومان فقط', fr: 'Seulement deux jours', en: 'Only two days' }, hint: { ar: 'كانت المسافة أطول بكثير — أحد عشر يومًا.', fr: 'La route fut bien plus longue — onze jours.', en: 'The road was much longer — eleven days.' } },
          ],
          reveal: {
            ar: 'ثمّ واصل طريقه أحد عشر يومًا حتى دخل المدينة.',
            fr: 'Puis il poursuivit sa route onze jours jusqu’à son entrée à Médine.',
            en: 'Then he continued for eleven days until he entered Madina.',
          },
        },
        {
          id: 'madina',
          name: { ar: 'المدينة', fr: 'Médine', en: 'Madina' },
          image: `${IMG}/madina-arrival.png`,
          question: {
            ar: 'كيف استقبل أهل المدينة الرسول (ص)؟',
            fr: 'Comment les gens de Médine accueillirent-ils le Prophète ﷺ ?',
            en: 'How did the people of Madina welcome the Prophet ﷺ?',
          },
          options: [
            { id: 'a', correct: true, label: { ar: 'بالتهليل والتكبير', fr: 'Par le tahlīl et le takbīr', en: 'With tahlil and takbir' } },
            { id: 'b', correct: false, label: { ar: 'بالصمت والترقّب', fr: 'Par le silence et la méfiance', en: 'With silence and suspicion' }, hint: { ar: 'استقبله أهلها بالفرح والتهليل.', fr: 'Ses habitants l’accueillirent avec joie et acclamations.', en: 'Its people welcomed him with joy and cheers.' } },
            { id: 'c', correct: false, label: { ar: 'بإغلاق الأبواب', fr: 'En fermant leurs portes', en: 'By closing their doors' }, hint: { ar: 'كانوا قد بايعوه ووعدوا بنصرته في العقبة.', fr: 'Ils lui avaient prêté serment et promis de le soutenir à ‘Aqaba.', en: 'They had pledged to him and promised support at ‘Aqaba.' } },
          ],
          reveal: {
            ar: 'دخل المدينة واستقبله أهلها بالتهليل والتكبير، وبدأت مرحلة جديدة.',
            fr: 'Il entra à Médine et ses habitants l’accueillirent par le tahlīl et le takbīr : une nouvelle étape commençait.',
            en: 'He entered Madina and its people welcomed him with tahlil and takbir: a new stage had begun.',
          },
        },
      ],
      arrival: {
        ar: 'من العقبة إلى المدينة: بيعةٌ، فتخطيطٌ، فغارٌ، فطريقٌ طويل، فاستقبالٌ حارّ. هكذا بدأت الهجرة إلى المدينة في العام الرابع عشر للبعثة.',
        fr: 'D’‘Aqaba à Médine : un serment, une planification, une grotte, une longue route, un accueil chaleureux. Ainsi commença l’émigration vers Médine, la quatorzième année de la mission.',
        en: 'From ‘Aqaba to Madina: a pledge, careful planning, a cave, a long road, a warm welcome. That is how the migration to Madina began, in the fourteenth year of the mission.',
      },
    },

    // 12 — Swipe: Abyssinia or Madina?
    {
      kind: 'swipe',
      id: 'habasha-or-madina',
      title: { ar: 'الحبشة أم المدينة؟', fr: 'Abyssinie ou Médine ?', en: 'Abyssinia or Madina?' },
      intro: {
        ar: 'اسحب كلّ بطاقة إلى الوجهة التي تنتمي إليها: هجرة الحبشة أم هجرة المدينة.',
        fr: 'Fais glisser chaque carte vers sa destination : l’émigration en Abyssinie ou celle vers Médine.',
        en: 'Swipe each card to its destination: the migration to Abyssinia or the migration to Madina.',
      },
      left: { label: { ar: 'الحبشة', fr: 'Abyssinie', en: 'Abyssinia' }, tag: { ar: 'الحبشة', fr: 'Abyssinie', en: 'Abyssinia' } },
      right: { label: { ar: 'المدينة', fr: 'Médine', en: 'Madina' }, tag: { ar: 'المدينة', fr: 'Médine', en: 'Madina' } },
      cards: [
        {
          id: 's1',
          who: { ar: 'ملكٌ لا يُظلم عنده أحد', fr: 'Un roi chez qui nul n’est lésé', en: 'A king with whom no one is wronged' },
          deed: { ar: 'اقترح الرسول (ص) الهجرة إلى بلاده لأجل عدله', fr: 'Le Prophète ﷺ proposa d’émigrer dans son pays à cause de sa justice', en: 'The Prophet ﷺ suggested migrating to his land because of his justice' },
          side: 'left',
          explanation: { ar: 'هذا هو النجاشي ملك الحبشة.', fr: 'C’est le Négus, roi d’Abyssinie.', en: 'This is the Najashi, king of Abyssinia.' },
        },
        {
          id: 's2',
          who: { ar: 'خمسة عشر مسلمًا', fr: 'Quinze musulmans', en: 'Fifteen Muslims' },
          deed: { ar: 'خرجوا في السنة الخامسة للبعثة يتقدّمهم جعفر بن أبي طالب', fr: 'Ils partirent la cinquième année de la mission, menés par Ja‘far ibn Abī Ṭālib', en: 'They set out in the fifth year of the mission, led by Ja‘far ibn Abi Talib' },
          side: 'left',
          explanation: { ar: 'نعم، هؤلاء هم أوّل مهاجري الحبشة.', fr: 'Oui, ce sont les premiers émigrés d’Abyssinie.', en: 'Yes — these were the first migrants to Abyssinia.' },
        },
        {
          id: 's3',
          who: { ar: 'سورة مريم', fr: 'La sourate Maryam', en: 'Surat Maryam' },
          deed: { ar: 'قرأ منها جعفر على الملك فبكى', fr: 'Ja‘far en récita devant le roi, qui pleura', en: 'Ja‘far recited from it to the king, who wept' },
          side: 'left',
          explanation: { ar: 'جرى ذلك في بلاط النجاشي بالحبشة.', fr: 'Cela se passa à la cour du Négus, en Abyssinie.', en: 'This took place at the Najashi’s court in Abyssinia.' },
        },
        {
          id: 's4',
          who: { ar: 'طلب قريش', fr: 'La demande de Quraysh', en: 'Quraysh’s demand' },
          deed: { ar: 'أرسلت تطلب المهاجرين فقال الملك: لا أُسلّمهم أبدًا', fr: 'Elle envoya réclamer les émigrés, mais le roi dit : je ne les livrerai jamais', en: 'It sent to demand the migrants, but the king said: I will never hand them over' },
          side: 'left',
          explanation: { ar: 'هذا حدث مع المهاجرين إلى الحبشة.', fr: 'Cela concerne les émigrés d’Abyssinie.', en: 'This concerns the migrants to Abyssinia.' },
        },
        {
          id: 's5',
          who: { ar: 'مصعب بن عمير', fr: 'Muṣ‘ab ibn ‘Umayr', en: 'Mus‘ab ibn ‘Umayr' },
          deed: { ar: 'أُرسل ليعلّم الناس الدين والقرآن', fr: 'Il fut envoyé pour enseigner la religion et le Coran', en: 'He was sent to teach people religion and the Qur’an' },
          side: 'right',
          explanation: { ar: 'نعم، أُرسل إلى المدينة بعد بيعة العقبة.', fr: 'Oui, il fut envoyé à Médine après le serment de ‘Aqaba.', en: 'Yes — he was sent to Madina after the pledge of ‘Aqaba.' },
        },
        {
          id: 's6',
          who: { ar: 'غار ثور', fr: 'La grotte de Thawr', en: 'The cave of Thawr' },
          deed: { ar: 'اختفى فيه الرسول (ص) مع أبي بكر ثلاثة أيّام', fr: 'Le Prophète ﷺ s’y cacha avec Abū Bakr trois jours', en: 'The Prophet ﷺ hid there with Abu Bakr for three days' },
          side: 'right',
          explanation: { ar: 'كان في طريق الهجرة إلى المدينة.', fr: 'C’était sur la route de l’émigration vers Médine.', en: 'It was on the road to Madina.' },
        },
        {
          id: 's7',
          who: { ar: 'بيعة العقبة الثانية', fr: 'Le second serment de ‘Aqaba', en: 'The Second Pledge of ‘Aqaba' },
          deed: { ar: 'سادة المدينة يتعهّدون بنصرته وبذل الأرواح', fr: 'Les chefs de Médine s’engagent à le soutenir et à donner leur vie', en: 'Madina’s leaders pledge to support him and give their lives' },
          side: 'right',
          explanation: { ar: 'هذه البيعة مهّدت للهجرة إلى المدينة.', fr: 'Ce serment prépara l’émigration vers Médine.', en: 'This pledge paved the way for the migration to Madina.' },
        },
        {
          id: 's8',
          who: { ar: 'التهليل والتكبير', fr: 'Tahlīl et takbīr', en: 'Tahlil and takbir' },
          deed: { ar: 'بهما استقبل أهلها الرسول (ص) عند دخوله', fr: 'Ses habitants l’accueillirent ainsi à son entrée', en: 'With these its people welcomed him as he entered' },
          side: 'right',
          explanation: { ar: 'هكذا استقبلت المدينة نبيّها.', fr: 'Ainsi Médine accueillit son Prophète.', en: 'This is how Madina welcomed its Prophet.' },
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
          text: { ar: 'خرج إلى الحبشة خمسة عشر مسلمًا في السنة الخامسة للبعثة.', fr: 'Quinze musulmans partirent en Abyssinie la cinquième année de la mission.', en: 'Fifteen Muslims left for Abyssinia in the fifth year of the mission.' },
          answer: true,
          explanation: { ar: 'صحيح، هذا نصّ الدرس.', fr: 'Vrai, c’est le texte de la leçon.', en: 'True — this is what the lesson states.' },
        },
        {
          id: 'b2',
          text: { ar: 'سلّم النجاشي المسلمين إلى قريش.', fr: 'Le Négus livra les musulmans à Quraysh.', en: 'The Najashi handed the Muslims over to Quraysh.' },
          answer: false,
          explanation: { ar: 'خطأ، قال: لا أُسلّمهم أبدًا.', fr: 'Faux, il dit : je ne les livrerai jamais.', en: 'False — he said: I will never hand them over.' },
        },
        {
          id: 'b3',
          text: { ar: 'عُلّقت صحيفة المقاطعة في جوف الكعبة.', fr: 'Le pacte du boycott fut suspendu à l’intérieur de la Ka‘ba.', en: 'The boycott covenant was hung inside the Kaaba.' },
          answer: true,
          explanation: { ar: 'صحيح، كتبوا عهدًا ثمّ علّقوه في جوف الكعبة.', fr: 'Vrai, ils écrivirent un pacte puis le suspendirent dans la Ka‘ba.', en: 'True — they wrote a covenant and hung it in the Kaaba.' },
        },
        {
          id: 'b4',
          text: { ar: 'تُوفّيت خديجة قبل أبي طالب في عام الحزن.', fr: 'Khadīja mourut avant Abū Ṭālib durant l’année de la tristesse.', en: 'Khadija died before Abu Talib in the Year of Sorrow.' },
          answer: false,
          explanation: { ar: 'خطأ، مات أبو طالب أوّلًا ثمّ توفّيت خديجة بعد أيّام.', fr: 'Faux, Abū Ṭālib mourut d’abord, puis Khadīja quelques jours plus tard.', en: 'False — Abu Talib died first, then Khadija a few days later.' },
        },
        {
          id: 'b5',
          text: { ar: 'فُرضت الصلوات الخمسون ثمّ خُفّفت إلى خمس في رحلة الإسراء والمعراج.', fr: 'Cinquante prières furent prescrites puis réduites à cinq lors du voyage nocturne et de l’ascension.', en: 'Fifty prayers were prescribed and then reduced to five on the Night Journey and Ascension.' },
          answer: true,
          explanation: { ar: 'صحيح، رحمةً ولطفًا من الله بعباده.', fr: 'Vrai, par miséricorde et bonté de Dieu envers Ses serviteurs.', en: 'True — out of God’s mercy and kindness to His servants.' },
        },
        {
          id: 'b6',
          text: { ar: 'بقي الرسول (ص) وأبو بكر في غار ثور عشرة أيّام.', fr: 'Le Prophète ﷺ et Abū Bakr restèrent dix jours dans la grotte de Thawr.', en: 'The Prophet ﷺ and Abu Bakr stayed ten days in the cave of Thawr.' },
          answer: false,
          explanation: { ar: 'خطأ، بقيا ثلاثة أيّام فقط، ثمّ واصلا الطريق أحد عشر يومًا.', fr: 'Faux, trois jours seulement, puis ils poursuivirent la route onze jours.', en: 'False — only three days, then they traveled eleven more days.' },
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
          question: { ar: 'لماذا اقترح الرسول (ص) الهجرة إلى الحبشة؟', fr: 'Pourquoi le Prophète ﷺ proposa-t-il l’émigration en Abyssinie ?', en: 'Why did the Prophet ﷺ suggest migrating to Abyssinia?' },
          options: [
            { id: 'a', label: { ar: 'لأنّ بها ملكًا لا يُظلم عنده أحد', fr: 'Parce qu’elle avait un roi chez qui nul n’est lésé', en: 'Because it had a king with whom no one is wronged' } },
            { id: 'b', label: { ar: 'لأنّها أقرب بلدٍ إلى مكّة', fr: 'Parce que c’était le pays le plus proche de La Mecque', en: 'Because it was the closest land to Makkah' } },
            { id: 'c', label: { ar: 'لأنّ فيها جيشًا قويًّا', fr: 'Parce qu’elle avait une armée puissante', en: 'Because it had a strong army' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'أراد أن يُخفّف عن أصحابه، فاختار أرضًا حاكمها لا يظلم أحدًا.',
            fr: 'Il voulut alléger le sort de ses compagnons et choisit une terre dont le souverain ne lésait personne.',
            en: 'He wished to ease things for his companions, so he chose a land whose ruler wronged no one.',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'أنهت الأرضة الحصار حين أكلت الصحيفة وتركت «باسمك اللهم».', fr: 'Les termites mirent fin au siège en rongeant le pacte et ne laissant que « en Ton nom, ô Dieu ».', en: 'Termites ended the siege by eating the covenant and leaving only "In Your name, O God."' },
          answer: true,
          explanation: {
            ar: 'صحيح، وجد كبار قريش ذلك حين دخلوا الكعبة، وانتهى الحصار.',
            fr: 'Vrai, les notables de Quraysh le constatèrent en entrant dans la Ka‘ba, et le siège prit fin.',
            en: 'True — Quraysh’s leaders found it when they entered the Kaaba, and the siege ended.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ شخصيّةٍ بدورها', fr: 'Relie chaque personnage à son rôle', en: 'Match each person to their role' },
          pairs: [
            { id: 'p1', left: { ar: 'جعفر بن أبي طالب', fr: 'Ja‘far ibn Abī Ṭālib', en: 'Ja‘far ibn Abi Talib' }, right: { ar: 'تحدّث أمام النجاشي وقرأ من سورة مريم', fr: 'Parla devant le Négus et récita la sourate Maryam', en: 'Spoke before the Najashi and recited Surat Maryam' } },
            { id: 'p2', left: { ar: 'مصعب بن عمير', fr: 'Muṣ‘ab ibn ‘Umayr', en: 'Mus‘ab ibn ‘Umayr' }, right: { ar: 'علّم أهل المدينة الدين والقرآن', fr: 'Enseigna la religion et le Coran aux gens de Médine', en: 'Taught the people of Madina religion and the Qur’an' } },
            { id: 'p3', left: { ar: 'أبو بكر رضي الله عنه', fr: 'Abū Bakr (qu’Allah l’agrée)', en: 'Abu Bakr (may God be pleased with him)' }, right: { ar: 'صاحب الرسول (ص) في غار ثور', fr: 'Compagnon du Prophète ﷺ dans la grotte de Thawr', en: 'The Prophet’s ﷺ companion in the cave of Thawr' } },
          ],
          explanation: {
            ar: 'لكلّ شخصيّةٍ دورٌ في أحداث الهجرتين.',
            fr: 'Chaque personnage a un rôle dans les deux émigrations.',
            en: 'Each person had a role in the events of both migrations.',
          },
        },
        {
          id: 'q4',
          type: 'ordering',
          question: { ar: 'رتّب هذه الأحداث زمنيًّا', fr: 'Ordonne ces événements chronologiquement', en: 'Put these events in order' },
          items: [
            { id: 'o1', label: { ar: 'الهجرة إلى الحبشة', fr: 'L’émigration en Abyssinie', en: 'Migration to Abyssinia' } },
            { id: 'o2', label: { ar: 'حصار الشِّعب وعام الحزن', fr: 'Le siège du ravin et l’année de la tristesse', en: 'The siege of the valley and the Year of Sorrow' } },
            { id: 'o3', label: { ar: 'بيعة العقبة الثانية', fr: 'Le second serment de ‘Aqaba', en: 'The Second Pledge of ‘Aqaba' } },
            { id: 'o4', label: { ar: 'الهجرة إلى المدينة', fr: 'L’émigration vers Médine', en: 'Migration to Madina' } },
          ],
          explanation: {
            ar: 'من الحبشة في السنة 5، إلى الحصار وعام الحزن، ثمّ العقبة الثانية في السنة 13، وأخيرًا الهجرة في السنة 14.',
            fr: 'De l’Abyssinie (an 5) au siège et à l’année de la tristesse, puis ‘Aqaba II (an 13), et enfin l’émigration (an 14).',
            en: 'From Abyssinia in year 5, to the siege and Year of Sorrow, then ‘Aqaba II in year 13, and finally the migration in year 14.',
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
        ar: 'حين عرض عليه ملك الجبال أن يُطبق الأخشبين على أهل الطائف، ماذا قال الرسول (ص)؟',
        fr: 'Quand l’ange des montagnes lui proposa de refermer les deux montagnes sur les gens de Ṭā’if, que dit le Prophète ﷺ ?',
        en: 'When the angel of the mountains offered to crush the people of Ta’if between the two mountains, what did the Prophet ﷺ say?',
      },
      choices: [
        {
          id: 'hope',
          isCorrect: true,
          label: { ar: 'بل أرجو أن يُخرج الله من أصلابهم من يعبد الله وحده', fr: 'Plutôt, j’espère que Dieu fera naître de leurs reins ceux qui adoreront Dieu seul', en: 'Rather, I hope God brings from their descendants those who worship God alone' },
          feedback: { ar: 'صحيح — ردّ الأذى بالأمل والرحمة.', fr: 'Exact — il répondit au tort par l’espoir et la miséricorde.', en: 'Correct — he answered harm with hope and mercy.' },
        },
        {
          id: 'accept',
          isCorrect: false,
          label: { ar: 'نعم، افعل', fr: 'Oui, fais-le', en: 'Yes, do it' },
          feedback: { ar: 'لا، رفض هذا العرض، وفضّل الأمل.', fr: 'Non, il refusa cette offre et préféra l’espoir.', en: 'No — he refused this offer and chose hope.' },
        },
        {
          id: 'silent',
          isCorrect: false,
          label: { ar: 'لم يردّ بشيء وغادر', fr: 'Il ne répondit rien et partit', en: 'He said nothing and left' },
          feedback: { ar: 'لا، ردّ بكلمةٍ خلّدها الدرس: بل أرجو…', fr: 'Non, il répondit par une parole que la leçon a retenue : « Plutôt, j’espère… »', en: 'No — he answered with words the lesson preserves: "Rather, I hope…"' },
        },
      ],
      valuesTitle: { ar: 'قيمٌ من الهجرتين — اقلب كلّ بطاقة', fr: 'Des valeurs des deux émigrations — retourne chaque carte', en: 'Values from both migrations — flip each card' },
      values: [
        {
          id: 'hope',
          value: { ar: 'الأمل والرحمة', fr: 'L’espoir et la miséricorde', en: 'Hope and mercy' },
          evidence: { ar: 'في الطائف رجا الرسول (ص) الخير لمن آذاه.', fr: 'À Ṭā’if, le Prophète ﷺ espéra le bien pour ceux qui l’avaient lésé.', en: 'At Ta’if the Prophet ﷺ hoped for good for those who harmed him.' },
        },
        {
          id: 'planning',
          value: { ar: 'التخطيط مع التوكّل', fr: 'Planifier tout en s’en remettant à Dieu', en: 'Planning with trust in God' },
          evidence: { ar: 'توكّل على الله وخطّط للهجرة بإحكام.', fr: 'Il s’en remit à Dieu et planifia l’émigration avec soin.', en: 'He relied on God and planned the migration with care.' },
        },
        {
          id: 'solidarity',
          value: { ar: 'التضامن والنصرة', fr: 'La solidarité et le soutien', en: 'Solidarity and support' },
          evidence: { ar: 'حمى بنو هاشم الرسول (ص)، وساعد أهل مكّة المحاصَرين سرًّا.', fr: 'Les Banū Hāshim protégèrent le Prophète ﷺ et des gens de La Mecque aidèrent les assiégés.', en: 'The Banu Hashim protected the Prophet ﷺ and some in Makkah helped the besieged.' },
        },
        {
          id: 'truthfulness',
          value: { ar: 'تصديق الحقّ', fr: 'Croire la vérité', en: 'Believing the truth' },
          evidence: { ar: 'صدّق أبو بكر خبر الإسراء حين كذّبته قريش فسُمّي الصدّيق.', fr: 'Abū Bakr crut le récit du voyage nocturne quand Quraysh le démentit, et fut nommé aṣ-Ṣiddīq.', en: 'Abu Bakr believed the Night Journey when Quraysh denied it, and was named as-Siddiq.' },
        },
      ],
    },

    // 16 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'حين ضاقت مكّة بالمسلمين وجدوا الأمان أوّلًا في الحبشة عند ملكٍ عادل، ثمّ صبروا على الحصار وعام الحزن، ثمّ مهّدت بيعتا العقبة للهجرة إلى المدينة، فخطّط الرسول (ص) وتوكّل ودخلها بالتهليل والتكبير.',
        fr: 'Quand La Mecque devint trop étroite, les musulmans trouvèrent d’abord la sécurité en Abyssinie auprès d’un roi juste ; puis ils endurèrent le siège et l’année de la tristesse ; les deux serments de ‘Aqaba préparèrent l’émigration vers Médine, où le Prophète ﷺ planifia, s’en remit à Dieu et entra sous le tahlīl et le takbīr.',
        en: 'When Makkah grew too narrow, the Muslims first found safety in Abyssinia with a just king; then they endured the siege and the Year of Sorrow; the two pledges of ‘Aqaba prepared the migration to Madina, where the Prophet ﷺ planned, relied on God, and entered amid tahlil and takbir.',
      },
      learned: [
        {
          ar: 'هاجر خمسة عشر مسلمًا إلى الحبشة في السنة الخامسة للبعثة، فوجدوا عند النجاشي الأمان ولم يُسلّمهم لقريش.',
          fr: 'Quinze musulmans émigrèrent en Abyssinie la cinquième année de la mission et y trouvèrent la sécurité : le Négus ne les livra pas à Quraysh.',
          en: 'Fifteen Muslims migrated to Abyssinia in the fifth year of the mission and found safety there: the Najashi did not hand them over to Quraysh.',
        },
        {
          ar: 'حاصرت قريش بني هاشم في الشِّعب، وانتهى الحصار بعد أن أكلت الأرضة الصحيفة.',
          fr: 'Quraysh assiégea les Banū Hāshim dans le ravin, et le siège prit fin quand les termites rongèrent le pacte.',
          en: 'Quraysh besieged the Banu Hashim in the valley, and the siege ended when termites ate the covenant.',
        },
        {
          ar: 'سُمّي العام الذي مات فيه أبو طالب ثمّ خديجة عام الحزن.',
          fr: 'L’année où moururent Abū Ṭālib puis Khadīja fut appelée l’année de la tristesse.',
          en: 'The year in which Abu Talib and then Khadija died was called the Year of Sorrow.',
        },
        {
          ar: 'جاء بعد ذلك الطائف، والإسراء والمعراج، وبيعتا العقبة، ثمّ الهجرة إلى المدينة في العام الرابع عشر للبعثة.',
          fr: 'Vinrent ensuite Ṭā’if, le voyage nocturne et l’ascension, les deux serments de ‘Aqaba, puis l’émigration vers Médine la quatorzième année de la mission.',
          en: 'Then came Ta’if, the Night Journey and Ascension, the two pledges of ‘Aqaba, then the migration to Madina in the fourteenth year of the mission.',
        },
      ],
    },
  ],
}
