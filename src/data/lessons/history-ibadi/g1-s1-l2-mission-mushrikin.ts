import type { Lesson } from '../../types'

// Source: Ibadite History textbook, "الدرس الأول: بعثة الرسول (ص) وموقف المشركين من البعثة".
//   Slide 2 — إشكالية الدرس
//   Slide 3 — نزول الوحي على محمد (ص)
//   Slide 4 — عودة محمد (ص) من غار حراء
//   Slide 5 — الأمر بالدعوة إلى الله
//   Slide 6 — دار الأرقم بن أبي الأرقم
//   Slide 7 — رسول الله يدعو عشيرته
//   Slide 8 — الرسول (ص) يجهر بالدعوة
//   Slide 9 — إيذاء المشركين لرسول الله (ص)
//   Slide 10 — قريش تغري الرسول (ص)
// Every fact below is taken from those slides; nothing is added from outside them.

const IMG = '/images/lessons/mission-mushrikin'

export const missionMushrikin: Lesson = {
  id: 'history-ibadi-g1-s1-l2',
  gradeId: 'history-ibadi-g1',
  moduleId: 'history-ibadi-g1',
  semesterId: 'history-ibadi-g1-s1',
  order: 2,
  status: 'published',
  estimatedMinutes: 30,
  cover: `${IMG}/hero.png`,
  coverAlt: {
    ar: 'جبلٌ وعرٌ في صحراء مكة ليلًا، وحزمةُ نورٍ ذهبيّ تنبعث من فوهة غارٍ صغيرة وسط السماء المرصّعة بالنجوم',
    fr: 'Une montagne escarpée dans le désert de La Mecque la nuit, un faisceau de lumière dorée jaillissant de l’entrée d’une petite grotte sous un ciel étoilé',
    en: 'A rugged mountain in the Makkan desert at night, a beam of golden light rising from a small cave mouth under a star-filled sky',
  },
  title: {
    ar: 'بعثة الرسول (ص) وموقف المشركين',
    fr: 'La mission du Prophète ﷺ et la position des polythéistes',
    en: 'The Prophet’s ﷺ mission and the polytheists’ response',
  },
  description: {
    ar: 'كيف نزل الوحي على محمد (ص) في غار حراء؟ وكيف أمره الله بالدعوة؟ تابع رحلة الدعوة من السرّ إلى الجهر، واكتشف كيف واجهتها قريش.',
    fr: 'Comment la révélation descendit-elle sur Muhammad ﷺ dans la grotte de Hirā’ ? Comment Dieu lui ordonna-t-il d’appeler à Lui ? Suis le chemin de l’appel, du secret à la proclamation publique, et découvre comment Quraysh y répondit.',
    en: 'How did revelation come down to Muhammad ﷺ in the cave of Hira? How did God command him to call people to Him? Follow the call from secrecy to open proclamation, and discover how Quraysh responded.',
  },

  sections: [
    // 01 — Hook: the lesson's own guiding questions (slide 2)
    {
      kind: 'hero',
      id: 'hero',
      image: `${IMG}/hero.png`,
      imageAlt: {
        ar: 'جبلٌ وعرٌ في صحراء مكة ليلًا، وحزمةُ نورٍ ذهبيّ تنبعث من فوهة غارٍ صغيرة وسط السماء المرصّعة بالنجوم',
        fr: 'Une montagne escarpée dans le désert de La Mecque la nuit, un faisceau de lumière dorée depuis une petite grotte sous un ciel étoilé',
        en: 'A rugged mountain in the Makkan desert at night, a beam of golden light from a small cave mouth under a star-filled sky',
      },
      title: {
        ar: 'إشكالية الدرس',
        fr: 'La question du cours',
        en: 'The lesson’s question',
      },
      question: {
        ar: 'كيف كان نزول الوحي على محمد (ص)؟',
        fr: 'Comment la révélation est-elle descendue sur Muhammad ﷺ ?',
        en: 'How did revelation come down to Muhammad ﷺ?',
      },
      intro: {
        ar: 'كيف أمر الله تعالى رسوله (ص) بالدعوة؟ كيف كان موقف قريش عندما جهر الرسول (ص) بالدعوة؟ وبماذا أغرت قريشُ الرسولَ (ص) ليتخلّى عن الإسلام؟ افتح أربع مهمّات لتكتشف الأجوبة.',
        fr: 'Comment Dieu ordonna-t-Il à Son messager d’appeler les gens ? Quelle fut l’attitude de Quraysh quand le Prophète proclama ouvertement son appel ? Et par quoi Quraysh tenta-t-elle de le séduire pour qu’il abandonne l’islam ? Ouvre quatre missions pour découvrir les réponses.',
        en: 'How did God command His messenger to call people to Him? How did Quraysh react when the Prophet proclaimed his call openly? And what did Quraysh offer the Prophet to make him abandon Islam? Open four missions to find out.',
      },
    },

    // 02 — Mission map: four questions, each a doorway into the lesson
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
          question: { ar: 'كيف كان نزول الوحي على محمد (ص)؟', fr: 'Comment la révélation descendit-elle sur Muhammad ﷺ ?', en: 'How did revelation come down to Muhammad ﷺ?' },
          target: 'reading-revelation',
          teaser: { ar: 'غارُ حراء، وليلةٌ غيّرت التاريخ.', fr: 'La grotte de Hirā’, une nuit qui changea l’histoire.', en: 'The cave of Hira, a night that changed history.' },
        },
        {
          id: 'm2',
          question: { ar: 'كيف أمر الله رسوله (ص) بالدعوة؟', fr: 'Comment Dieu ordonna-t-Il à Son messager d’appeler ?', en: 'How did God command His messenger to call people?' },
          target: 'reading-order-to-call',
          teaser: { ar: 'من السرّ في دار الأرقم إلى الجهر على الصفا.', fr: 'Du secret dans la maison d’al-Arqam à la proclamation sur aṣ-Ṣafā.', en: 'From secrecy in the house of al-Arqam to proclaiming on al-Safa.' },
        },
        {
          id: 'm3',
          question: { ar: 'كيف كان موقف قريش عندما جهر الرسول بالدعوة؟', fr: 'Quelle fut l’attitude de Quraysh face à l’appel public ?', en: 'How did Quraysh react to the open call?' },
          target: 'reading-persecution',
          teaser: { ar: 'سخريةٌ، وأذىً، وشوكٌ على الطريق.', fr: 'Moqueries, persécution et épines sur le chemin.', en: 'Mockery, harm, and thorns on the path.' },
        },
        {
          id: 'm4',
          question: { ar: 'بماذا أغرت قريشٌ الرسولَ ليتخلّى عن الإسلام؟', fr: 'Par quoi Quraysh tenta-t-elle de le séduire ?', en: 'What did Quraysh offer to make him give up Islam?' },
          target: 'reading-temptation',
          teaser: { ar: 'مالٌ ورئاسةٌ… وردٌّ واحد.', fr: 'Richesse et pouvoir… et une seule réponse.', en: 'Wealth and leadership… and a single answer.' },
        },
      ],
    },

    // 03 — Revelation in the cave: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-revelation',
      title: {
        ar: 'اقرأ: ليلة الغار ونور النبوّة',
        fr: 'Lis : La nuit de la grotte et la lumière de la prophétie',
        en: 'Read: The Night in the Cave and the Light of Prophethood',
      },
      intro: {
        ar: 'اقرأ قصة بداية نزول القرآن على نبيّنا محمد ﷺ في غار حراء.',
        fr: 'Lis le récit des débuts de la révélation sur notre Prophète Muhammad ﷺ dans la grotte de Hirā’.',
        en: 'Read the story of the first revelation to our Prophet Muhammad ﷺ in the cave of Hira.',
      },
      image: `${IMG}/hira-cave.png`,
      imageAlt: {
        ar: 'غارُ حراء في أعلى الجبل، ينبعث منه نورٌ هادئ تحت سماء الليل',
        fr: 'La grotte de Hirā’ au sommet de la montagne, d’où jaillit une douce lumière sous la nuit étoilée',
        en: 'The cave of Hira atop the mountain, a gentle light glowing from within under the night sky',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'الخلوة في غار حراء',
            fr: 'La retraite dans la grotte de Hirā’',
            en: 'Seclusion in the Cave of Hira',
          },
          text: {
            ar: 'كان محمدٌ ﷺ يحبّ الخلوة والتفكّر في خلق السماوات والأرض، فكان يصعد إلى غار حراء في جبل النور بمكّة، تاركًا وراءه عبادة الأصنام التي كان عليها قومه. وفي الثاني عشر من شهر رمضان المبارك، عام 610م، وكان عمره أربعين سنة، حدث أعظم أمرٍ في تاريخ الإنسانية.',
            fr: 'Muhammad ﷺ aimait la retraite spirituelle et méditait sur la création des cieux et de la terre. Il montait ainsi dans la grotte de Hirā’, sur le mont an-Nūr à La Mecque, s’éloignant du culte des idoles de son peuple. Le douze du mois béni de Ramadan, en l’an 610 de l’ère chrétienne, alors qu’il avait quarante ans, eut lieu l’événement le plus marquant de l’histoire.',
            en: 'Muhammad ﷺ loved quiet contemplation, pondering the creation of the heavens and the earth. He would climb to the cave of Hira on Mount al-Nur in Makkah, distancing himself from the idol worship of his people. On the twelfth of the blessed month of Ramadan, in 610 CE, when he was forty years old, the greatest event in human history unfolded.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'جبريل عليه السلام والأمر بالقراءة',
            fr: 'Gabriel (paix sur lui) et l’ordre de lire',
            en: 'Gabriel (Peace Be Upon Him) and the Command to Read',
          },
          text: {
            ar: 'بينما كان النبيّ ﷺ جالسًا في الغار، نزل عليه مَلَكٌ عظيمٌ ذو لباسٍ أبيض، وهو جبريل عليه السلام. ضمّه جبريل إلى صدره وقال له: «اقرأ!»، فقال محمد ﷺ فزعًا: «ما أنا بقارئ». كرّرها جبريل ثلاث مرّات، ثمّ تلا عليه أوّل كلماتٍ من كتاب الله: ﴿اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ ۝ خَلَقَ الْإِنسَانَ مِنْ عَلَقٍ ۝ اقْرَأْ وَرَبُّكَ الْأَكْرَمُ ۝ الَّذِي عَلَّمَ بِالْقَلَمِ﴾.',
            fr: 'Tandis que le Prophète ﷺ était assis dans la grotte, un ange majestueux vêtu de blanc descendit vers lui : c’était l’ange Gabriel (paix sur lui). Gabriel le serra contre lui et lui dit : « Lis ! » Muhammad ﷺ répondit, saisi d’émotion : « Je ne sais pas lire ». Gabriel répéta cette demande trois fois, puis lui récita les premiers versets du Livre d’Allah : « Lis au nom de ton Seigneur qui a créé, qui a créé l’homme d’une adhérence. Lis ! Et ton Seigneur est le Très Noble, qui a enseigné par la plume ».',
            en: 'While the Prophet ﷺ sat in the cave, a majestic angel in white garments descended upon him: the angel Gabriel (peace be upon him). Gabriel embraced him closely and said: "Read!" Muhammad ﷺ answered, filled with awe: "I cannot read." Gabriel repeated this three times, then recited to him the first verses of the Book of God: "Read in the name of your Lord who created, created humanity from a clinging clot. Read! And your Lord is the Most Generous, who taught by the pen."',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'طمأنينة خديجة وبشارة ورقة',
            fr: 'Le réconfort de Khadīja et l’annonce de Waraqa',
            en: 'Khadija’s Reassurance and Waraqa’s Glad Tidings',
          },
          text: {
            ar: 'عاد النبيّ ﷺ إلى بيته وهو يرتجف من هيبة الموقف، وقال لزوجته: «زمّلوني زمّلوني!»، فطمأنته خديجة رضي الله عنها بحكمتها وذكّرته بأخلاقه النبيلة: «كلّا والله، لا يُخزيك الله أبدًا، إنّك لتصل الرحم وتُعين الضعيف وتُكرم الضيف». ثمّ انطلقت به إلى ابن عمّها ورقة بن نوفل، الذي كان عالمًا بالكتب القديمة، فبشّره بأنّ الذي نزل عليه هو الناموس الأكبر (جبريل) وأنّه نبيّ هذه الأمّة.',
            fr: 'Le Prophète ﷺ rentra chez lui en tremblant devant la solennité de l’événement, disant à son épouse : « Enveloppez-moi, enveloppez-moi ! » Khadīja (qu’Allah l’agrée), avec sa grande sagesse, le rassura et lui rappela ses vertus généreuses : « Non, par Allah ! Allah ne te délaissera jamais : tu préserves les liens du sang, tu soutiens les faibles et tu honores tes hôtes ». Puis elle le conduisit auprès de son cousin Waraqa ibn Nawfal, savant des écritures anciennes, qui lui annonça que celui qui lui était apparu était l’Archange Gabriel et qu’il était le prophète attendu de cette nation.',
            en: 'The Prophet ﷺ returned home trembling at the solemnity of what had occurred, calling to his wife: "Cover me! Cover me!" Khadija (may God be pleased with her), with great wisdom, calmed him and recalled his noble virtues: "No, by God! God will never forsake you: you uphold family bonds, bear the burdens of the weary, and honor your guests." She then took him to her cousin Waraqa ibn Nawfal, a scholar of the ancient scriptures, who brought glad tidings: the one who visited him was the Great Angel Gabriel, and Muhammad was indeed the chosen prophet of this nation.',
          },
        },
      ],
    },

    // 04 — Revelation night as a build-the-verse experience (slide 3)
    {
      kind: 'verses',
      id: 'revelation',
      title: {
        ar: 'نزول الوحي على محمد (ص)',
        fr: 'La révélation descend sur Muhammad ﷺ',
        en: 'Revelation comes down to Muhammad ﷺ',
      },
      intro: {
        ar: 'في الثاني عشر من رمضان، عام 610م، وكان عمر محمد (ص) أربعين سنة، وبينما هو في خلوته بغار حراء، جاءه مَلَكٌ طويلٌ ذو لباسٍ أبيض، فجذبه إليه وقال له: اقرأ. فردّ محمد (ص) فزِعًا: ما أنا بقارئ. وكرّر هذا ثلاث مرّات، حتى قرأ عليه أوّل آياتٍ من القرآن. اضغط الكلمات بالترتيب لتبني الآيات كما نزلت.',
        fr: 'Le douze de Ramadan, en l’an 610, alors que Muhammad ﷺ avait quarante ans et se retirait dans la grotte de Hirā’, un ange de haute stature vêtu de blanc vint à lui, le saisit et lui dit : « Lis ! » Muhammad ﷺ répondit, effrayé : « Je ne sais pas lire. » Cela se répéta trois fois, jusqu’à ce que l’ange lui récite les premiers versets du Coran. Touche les mots dans l’ordre pour reconstituer les versets tels qu’ils descendirent.',
        en: 'On the twelfth of Ramadan, in the year 610 CE, when Muhammad ﷺ was forty years old and secluded in the cave of Hira, a tall angel in white clothing came to him, held him close and said: "Read!" Muhammad ﷺ answered, frightened: "I cannot read." This happened three times, until the angel recited to him the first verses of the Qur’an. Tap the words in order to rebuild the verses as they came down.',
      },
      verses: [
        {
          id: 'iqra',
          context: {
            ar: 'أوّل ما نزل من القرآن الكريم على رسول الله (ص) في غار حراء:',
            fr: 'Les tout premiers versets du Coran révélés au Messager ﷺ dans la grotte de Hirā’ :',
            en: 'The very first verses of the Qur’an revealed to the Messenger ﷺ in the cave of Hira:',
          },
          ref: { ar: 'سورة العلق', fr: 'Sourate al-‘Alaq', en: 'Surat al-‘Alaq' },
          words: ['اقْرَأْ', 'بِاسْمِ', 'رَبِّكَ', 'الَّذِي', 'خَلَقَ'],
          meaning: {
            ar: 'أمرٌ من الله لرسوله (ص) أن يقرأ باسمه تعالى، وهو خالق كلّ شيء.',
            fr: 'Un ordre de Dieu à Son messager de lire en Son nom, Lui qui est le Créateur de toute chose.',
            en: 'A command from God to His messenger to read in His name — He who is the Creator of everything.',
          },
        },
        {
          id: 'iqra2',
          context: {
            ar: 'ثمّ تابع جبريل عليه السلام الآيات:',
            fr: 'Puis Gabriel (sur lui la paix) poursuivit les versets :',
            en: 'Then Gabriel (peace be upon him) continued the verses:',
          },
          ref: { ar: 'سورة العلق', fr: 'Sourate al-‘Alaq', en: 'Surat al-‘Alaq' },
          words: ['اقْرَأْ', 'وَرَبُّكَ', 'الْأَكْرَمُ', 'الَّذِي', 'عَلَّمَ', 'بِالْقَلَمِ'],
          meaning: {
            ar: 'تذكيرٌ بكرم الله تعالى الذي علّم الإنسان الكتابة بالقلم.',
            fr: 'Un rappel de la générosité de Dieu, qui enseigna à l’homme l’écriture par la plume.',
            en: 'A reminder of God’s generosity — He taught humankind to write by the pen.',
          },
        },
      ],
    },

    // 04 — Return from Hira: story cards (slide 4)
    {
      kind: 'story',
      id: 'return-from-hira',
      title: {
        ar: 'عودة محمد (ص) من غار حراء',
        fr: 'Le retour de Muhammad ﷺ de la grotte de Hirā’',
        en: 'Muhammad’s ﷺ return from the cave of Hira',
      },
      intro: {
        ar: 'خرج الرسول (ص) من الغار فرأى رجلًا يصعد إلى السماء يقول: "يا محمد، أنت رسول الله وأنا جبريل". اقلب البطاقات لتتابع ما جرى بعدها.',
        fr: 'Le Prophète ﷺ sortit de la grotte et vit une forme s’élever vers le ciel en disant : « Ô Muhammad, tu es le messager de Dieu, et je suis Gabriel. » Retourne les cartes pour suivre la suite.',
        en: 'The Prophet ﷺ left the cave and saw a figure rising into the sky, saying: "O Muhammad, you are the messenger of God, and I am Gabriel." Flip the cards to follow what happened next.',
      },
      cards: [
        {
          id: 'khadija',
          image: `${IMG}/khadija-home.png`,
          imageAlt: {
            ar: 'داخل بيتٍ عربيّ قديم، فراشٌ وسراجٌ دافئ',
            fr: 'Intérieur d’une ancienne maison arabe, une literie et une lampe chaleureuse',
            en: 'Inside an ancient Arabian home, bedding and a warm lamp',
          },
          fact: {
            ar: 'انطلق الرسول (ص) مسرعًا إلى بيته يريد زوجته خديجة لتخفّف عنه الرعب. فلمّا قصّ عليها ما وقع قال: "خشيت على نفسي!" فردّت خديجة رضي الله عنها الحكيمة: "كلّا والله! ما يخزيك أبدًا… إنّك لتصل الرحم، وتحمل الكَلّ، وتكسب المعدوم، وتُكرم الضيف".',
            fr: 'Le Prophète ﷺ se hâta vers sa demeure, cherchant Khadīja pour apaiser sa frayeur. Après lui avoir raconté ce qui s’était passé, il dit : « Je crains pour moi-même ! » Khadīja (qu’Allah l’agrée), avec sagesse, répondit : « Non, par Allah ! Il ne t’arrivera jamais rien de honteux… tu maintiens les liens de parenté, tu portes le fardeau des faibles, tu donnes à qui n’a rien, et tu honores l’hôte. »',
            en: 'The Prophet ﷺ hurried home, seeking his wife Khadija to calm his fear. After he told her what had happened, he said: "I fear for myself!" Khadija (may God be pleased with her), with wisdom, replied: "No, by God! He will never disgrace you… you maintain family ties, carry the burden of the weak, give to those who have nothing, and honor guests."',
          },
        },
        {
          id: 'waraqa',
          image: `${IMG}/waraqa-scrolls.png`,
          imageAlt: {
            ar: 'لفافاتٌ من الرقّ القديم بجانب مصباحٍ من الفخّار',
            fr: 'Rouleaux de parchemin ancien près d’une lampe en terre cuite',
            en: 'Ancient parchment scrolls beside a clay lamp',
          },
          fact: {
            ar: 'ذهبت خديجة بنت خويلد بالرسول (ص) إلى ابن عمّها ورقة بن نوفل النصرانيّ، فقصّت عليه القصّة، فردّ ورقة مبشِّرًا: "هذا الذي أتاك جبريل، اثبُت يا محمد… اثبُت على الحقّ، فأنت نبيّ هذه الأمّة".',
            fr: 'Khadīja bint Khuwaylid emmena le Prophète ﷺ chez son cousin Waraqa ibn Nawfal, chrétien, et lui raconta l’histoire. Waraqa répondit, annonçant une bonne nouvelle : « C’est bien Gabriel qui est venu à toi. Tiens bon, ô Muhammad… tiens bon sur la vérité, car tu es le prophète de cette communauté. »',
            en: 'Khadija bint Khuwaylid took the Prophet ﷺ to her cousin Waraqa ibn Nawfal, a Christian, and told him the story. Waraqa answered with glad tidings: "This is the one who came to you — Gabriel. Stand firm, O Muhammad… stand firm upon the truth, for you are the prophet of this nation."',
          },
        },
      ],
      reflection: {
        prompt: {
          ar: 'ماذا قدّمت خديجة رضي الله عنها للرسول (ص) في تلك اللحظة؟ اختر كلّ ما يدعمه النصّ.',
          fr: 'Qu’offrit Khadīja au Prophète ﷺ en cet instant ? Choisis tout ce que le texte appuie.',
          en: 'What did Khadija offer the Prophet ﷺ in that moment? Choose everything the text supports.',
        },
        options: [
          {
            id: 'comfort',
            isRelevant: true,
            label: { ar: 'طمأنةً مبنيّة على أخلاقه', fr: 'Un réconfort fondé sur ses qualités morales', en: 'Reassurance grounded in his character' },
            explanation: {
              ar: 'صحيح، ذكّرته بصلة الرحم وإكرام الضيف وحمل الكلّ — أخلاقٌ تمنع الخزي.',
              fr: 'Exact : elle lui rappela les liens de parenté, l’hospitalité et le soutien des faibles — des qualités qui empêchent la honte.',
              en: 'Correct — she reminded him of family ties, hospitality, and supporting the weak: qualities that prevent disgrace.',
            },
          },
          {
            id: 'confirmation',
            isRelevant: true,
            label: { ar: 'توجيهه إلى من يفهم الأمر', fr: 'L’orienter vers quelqu’un qui comprenait', en: 'Guiding him to someone who understood' },
            explanation: {
              ar: 'صحيح، أخذته إلى ورقة بن نوفل الذي عرف الوحي من كتب سابقة.',
              fr: 'Exact : elle l’emmena chez Waraqa ibn Nawfal, qui connaissait la révélation grâce aux écritures antérieures.',
              en: 'Correct — she took him to Waraqa ibn Nawfal, who recognized revelation from earlier scriptures.',
            },
          },
          {
            id: 'money',
            isRelevant: false,
            label: { ar: 'مالًا لينفقه على نفسه', fr: 'De l’argent à dépenser pour lui-même', en: 'Money to spend on himself' },
            explanation: {
              ar: 'لم يرد هذا في النصّ؛ ما قدّمته خديجة كان طمأنةً ووجهةً، لا مالًا.',
              fr: 'Le texte n’en parle pas ; ce qu’offrit Khadīja fut réconfort et orientation, non de l’argent.',
              en: 'The text does not mention this; what Khadija gave was comfort and direction, not money.',
            },
          },
        ],
      },
    },

    // 06 — The command to call people & dar al-Arqam: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-order-to-call',
      title: {
        ar: 'اقرأ: من دار الأرقم إلى جبل الصفا',
        fr: 'Lis : De la maison d’al-Arqam au mont aṣ-Ṣafā',
        en: 'Read: From the House of al-Arqam to Mount al-Safa',
      },
      intro: {
        ar: 'اقرأ كيف بدأ نبيّنا ﷺ دعوته إلى الله سرًّا، ثمّ صدع بها جهرًا أمام قريش.',
        fr: 'Lis comment notre Prophète ﷺ commença son appel à Dieu en secret, puis le proclama ouvertement devant Quraysh.',
        en: 'Read how our Prophet ﷺ began calling to God in secret, then proclaimed it openly before all of Quraysh.',
      },
      image: `${IMG}/dar-arqam.png`,
      imageAlt: {
        ar: 'بيتٌ متواضعٌ من الحجر والطين في زقاقٍ ظليل بمكة عند الغسق',
        fr: 'Une modeste maison de pierre et de terre dans une ruelle ombragée de La Mecque au crépuscule',
        en: 'A modest stone and mud-brick house in a shaded Makkan alley at dusk',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'الأمر بالإنذار وبداية الدعوة سرًّا',
            fr: 'L’ordre d’avertir et le début de l’appel secret',
            en: 'The Command to Warn and the Start of Secret Dawah',
          },
          text: {
            ar: 'بعد أربعين يومًا، نزل جبريل عليه السلام مرّةً أخرى، وتنزّلت الآيات الكريمة: ﴿يَا أَيُّهَا الْمُدَّثِّرُ ۝ قُمْ فَأَنذِرْ ۝ وَرَبَّكَ فَكَبِّرْ﴾، فأمر الله نبيّه بالقيام بمهمّة الدعوة. بدأ الرسول ﷺ يدعو الناس سرًّا خوفًا من بطش قريش، فكان يعرض الإسلام على أهل الخير والصدق. وكان أوّل من أسلم: زوجه خديجة، وابن عمّه عليّ بن أبي طالب، وصاحبه أبو بكر الصدّيق، وخادمه زيد بن حارثة رضي الله عنهم.',
            fr: 'Quarante jours plus tard, Gabriel (paix sur lui) apparut de nouveau, apportant les versets : « Ô toi qui te couvres d’un manteau ! Lève-toi et avertis ! Et ton Seigneur, célèbre Sa grandeur ! » Allah ordonna ainsi à Son Prophète d’accomplir la mission de l’appel. Le Messager ﷺ commença par prêcher secrètement pour préserver les croyants de l’hostilité de Quraysh, s’adressant à ceux dont le cœur aimait la vérité. Les premiers à embrasser l’islam furent son épouse Khadīja, son cousin ‘Alī ibn Abī Ṭālib, son fidèle compagnon Abū Bakr et son serviteur Zayd ibn Ḥāritha (qu’Allah les agrée tous).',
            en: 'Forty days later, Gabriel (peace be upon him) appeared again, bringing the divine words: "O you wrapped in a cloak! Arise and warn! And your Lord, magnify!" God thereby commanded His Prophet to embark on the mission of calling people. The Messenger ﷺ began calling in secret to protect the early believers from Quraysh’s wrath, reaching out to those known for truthfulness. The first to embrace Islam were his wife Khadija, his cousin Ali ibn Abi Talib, his close friend Abu Bakr, and his servant Zayd ibn Haritha (may God be pleased with them all).',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'دار الأرقم: مدرسة الإيمان والأخلاق',
            fr: 'La maison d’al-Arqam : l’école de la foi et des vertus',
            en: 'The House of al-Arqam: School of Faith and Character',
          },
          text: {
            ar: 'استمرّت الدعوة السرّية ثلاث سنوات. واتّخذ المسلمون الأوائل من دار الأرقم بن أبي الأرقم في شِعاب مكّة مقرًّا سرّيًّا يجتمعون فيه. كان النبيّ ﷺ يلتقي بهم هناك، فيتلو عليهم آيات القرآن، ويثبّت قلوبهم على التوحيد، ويعلّمهم مكارم الأخلاق وطهارة النفوس والصبر على الشدائد، حتى تكوّن جيلٌ طاهرٌ يحمل راية الحقّ.',
            fr: 'Cet appel secret dura trois années. Les premiers musulmans choisirent la maison d’al-Arqam ibn Abī al-Arqam, dissimulée dans les collines de La Mecque, comme lieu de rencontre discret. Le Prophète ﷺ s’y réunissait avec eux, leur récitant les versets du Coran, affermissant leur foi dans le Dieu Unique, et leur enseignant la noblesse de caractère, la pureté de l’âme et la patience dans l’épreuve, formant une communauté dévouée à la vérité.',
            en: 'This secret phase continued for three years. The early Muslims chose the home of al-Arqam ibn Abi al-Arqam, nestled discreetly in the Makkan hills, as a sanctuary for gatherings. The Prophet ﷺ met with them there, reciting verses of the Qur’an, anchoring their hearts in monotheism, and teaching them noble character, purity of soul, and steadfast patience, nurturing a devoted generation of believers.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'دعوة العشيرة والجهر على جبل الصفا',
            fr: 'L’appel à la famille et la proclamation publique sur aṣ-Ṣafā',
            en: 'Calling the Clan and the Proclamation on Mount al-Safa',
          },
          text: {
            ar: 'أمر الله رسوله ﷺ بأن يوسّع دعوته فقال: ﴿وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ﴾، فصنع طعامًا ودعا بني عبد المطلب، فنصره عمّه أبو طالب، بينما عاداه أبو لهب. ثمّ نزل الأمر الإلهيّ بالجهر: ﴿فَاصْدَعْ بِمَا تُؤْمَرُ وَأَعْرِضْ عَنِ الْمُشْرِكِينَ﴾. صعد النبيّ ﷺ جبل الصفا ونادى قريشًا وسألهم: «أرأيتم لو أخبرتكم أنّ خيلًا بالوادي تريد أن تُغير عليكم، أكنتم مصدّقي؟»، قالوا: «نعم، ما جرّبنا عليك كذبًا قطّ!»، فقال: «فإنّي نذيرٌ لكم بين يدَي عذابٍ شديد»، فغضب أبو لهب وصاح: «تبًّا لك! ألهذا جمعتنا؟!».',
            fr: 'Allah ordonna ensuite à Son Prophète d’élargir son appel : « Et avertis ta parenté la plus proche ». Il prépara un repas et invita les Banū ‘Abd al-Muṭṭalib : son oncle Abū Ṭālib lui promit son soutien, tandis qu’Abū Lahab le repoussa durement. Puis vint l’ordre solennel de proclamer publiquement le message : « Proclame donc ce qui t’est commandé et détourne-toi des polythéistes ». Le Prophète ﷺ monta sur le mont aṣ-Ṣafā et interpella les clans de Quraysh : « Si je vous disais que des cavaliers s’apprêtent à fondre sur vous dans la vallée, me croiriez-vous ? » Ils répondirent : « Oui, nous ne t’avons jamais connu menteur ! » Il déclara alors : « Je suis pour vous un avertisseur face à un châtiment redoutable ». Abū Lahab s’écria alors avec colère : « Péris donc ! Est-ce pour cela que tu nous as rassemblés ?! »',
            en: 'God then instructed His Prophet to expand his call: "And warn your nearest kin." He prepared a meal and invited the Banu Abd al-Muttalib: his uncle Abu Talib offered him protection, while Abu Lahab rejected him fiercely. Soon after came the command for public proclamation: "Proclaim what you are commanded and turn away from the polytheists." The Prophet ﷺ ascended Mount al-Safa and called out to the clans of Quraysh: "If I told you that horsemen were in the valley ready to attack, would you believe me?" They answered: "Yes, we have never found you to lie!" He then said: "I am a warner to you of a severe punishment." Hearing this, Abu Lahab cried out in anger: "May you perish! Is this why you gathered us?!"',
          },
        },
      ],
    },

    // 07 — The command to call people, and dar al-Arqam: domino chain (slides 5-6)
    {
      kind: 'chain',
      id: 'order-to-call',
      title: {
        ar: 'الأمر بالدعوة إلى الله',
        fr: 'L’ordre d’appeler à Dieu',
        en: 'The command to call people to God',
      },
      intro: {
        ar: 'بعد أربعين يومًا، نزل جبريل عليه السلام على صورته الحقيقيّة. اختر ما حدث في كلّ حلقة لتكتمل السلسلة.',
        fr: 'Quarante jours plus tard, Gabriel (sur lui la paix) descendit sous sa forme véritable. Choisis ce qui se passa à chaque maillon pour compléter la chaîne.',
        en: 'Forty days later, Gabriel (peace be upon him) came down in his true form. Choose what happened at each link to complete the chain.',
      },
      image: `${IMG}/dar-arqam.png`,
      imageAlt: {
        ar: 'بيتٌ متواضعٌ من الحجر والطين في زقاقٍ ظليل بمكة عند الغسق',
        fr: 'Une modeste maison de pierre et de terre dans une ruelle ombragée de La Mecque au crépuscule',
        en: 'A modest stone and mud-brick house in a shaded Makkan alley at dusk',
      },
      start: {
        ar: 'دخل الرسول (ص) على خديجة وهو في غاية الرعب، فطلب منها أن تغطّيه.',
        fr: 'Le Prophète ﷺ entra chez Khadīja, saisi d’une grande frayeur, et lui demanda de le couvrir.',
        en: 'The Prophet ﷺ came in to Khadija in great fear, and asked her to cover him.',
      },
      steps: [
        {
          id: 's1',
          prompt: { ar: 'ماذا نزل عليه وهو مُتغطٍّ؟', fr: 'Que lui fut-il révélé alors qu’il était couvert ?', en: 'What was revealed to him while covered?' },
          correct: {
            ar: 'نزلت الآيات: "يا أيّها المدّثّر، قم فأنذر، وربّك فكبّر"، يأمره الله فيها بالقيام والإنذار.',
            fr: '«ô toi qui te couvres d’un manteau ! Lève-toi et avertis ! Et de ton Seigneur, célèbre la grandeur !» : Dieu lui ordonne de se lever et d’avertir.',
            en: '"O you wrapped in a cloak, arise and warn, and your Lord magnify": God commands him to rise and give warning.',
          },
          distractors: [
            {
              label: { ar: 'نزل عليه أمرٌ بالصبر على السفر فقط', fr: 'Un ordre de patienter pour un voyage seulement', en: 'A command simply to be patient for a journey' },
              hint: { ar: 'النصّ يذكر أمرًا أعظم: القيام بالإنذار نفسه.', fr: 'Le texte évoque un ordre plus grand : se lever pour avertir.', en: 'The text names a greater command: to rise and warn.' },
            },
          ],
        },
        {
          id: 's2',
          prompt: { ar: 'كيف بدأ الرسول (ص) دعوته بعدها؟', fr: 'Comment débuta son appel ensuite ?', en: 'How did his call begin after that?' },
          correct: {
            ar: 'شرع يدعو سرًّا كما أمره الله، خوفًا من سادة قريش، فكان يدعو من يعرف فيه حبّ الخير ونصرة الحقّ.',
            fr: 'Il se mit à appeler secrètement, comme Dieu le lui avait ordonné, craignant les seigneurs de Quraysh ; il appelait ceux en qui il connaissait l’amour du bien et le soutien de la vérité.',
            en: 'He began calling in secret, as God commanded, fearing the chiefs of Quraysh; he called those he knew to love good and support truth.',
          },
          distractors: [
            {
              label: { ar: 'جمع كلّ قبائل مكّة في ميدانٍ واحد فورًا', fr: 'Il rassembla aussitôt toutes les tribus sur une place', en: 'He gathered all Makkah’s tribes in one square at once' },
              hint: { ar: 'في هذه المرحلة كانت الدعوة سرًّا، لا جمعًا علنيًّا.', fr: 'À ce stade, l’appel était secret, non une assemblée publique.', en: 'At this stage the call was secret, not a public gathering.' },
            },
          ],
        },
        {
          id: 's3',
          prompt: { ar: 'من كان أوّل من استجاب له؟', fr: 'Qui furent les premiers à répondre ?', en: 'Who were the first to respond?' },
          correct: {
            ar: 'استجاب له زوجته خديجة رضي الله عنها، وابن عمّه عليّ بن أبي طالب، وصديقه أبو بكر، وخادمه زيد.',
            fr: 'Lui répondirent son épouse Khadīja, son cousin ‘Alī ibn Abī Ṭālib, son ami Abū Bakr, et son serviteur Zayd.',
            en: 'His wife Khadija responded, along with his cousin Ali ibn Abi Talib, his friend Abu Bakr, and his servant Zayd.',
          },
          distractors: [
            {
              label: { ar: 'عمّه أبو طالب وحده', fr: 'Son oncle Abū Ṭālib seul', en: 'His uncle Abu Talib alone' },
              hint: { ar: 'الدرس يسمّي أربعةً مختلفين — زوجته وابن عمّه وصديقه وخادمه.', fr: 'La leçon nomme quatre personnes différentes : son épouse, son cousin, son ami et son serviteur.', en: 'The lesson names four different people: his wife, his cousin, his friend, and his servant.' },
            },
          ],
        },
        {
          id: 's4',
          prompt: { ar: 'أين أصبح المسلمون الجدد يجتمعون؟', fr: 'Où les nouveaux musulmans se mirent-ils à se réunir ?', en: 'Where did the new Muslims gather?' },
          correct: {
            ar: 'أصبحت دار الأرقم بن أبي الأرقم في شعاب مكّة مقصدًا لمن يريد إعلان إسلامه؛ كان الرسول (ص) يعلّمهم ويقوّي إيمانهم ويرغّبهم بتزكية النفوس ومكارم الأخلاق.',
            fr: 'La maison d’al-Arqam ibn Abī al-Arqam, dans les ravins de La Mecque, devint le lieu de ceux qui voulaient déclarer leur islam ; le Prophète ﷺ les enseignait, affermissait leur foi et les encourageait à la purification de l’âme et aux nobles mœurs.',
            en: 'The house of al-Arqam ibn Abi al-Arqam, in a Makkan ravine, became the gathering place for those who wished to declare their Islam; the Prophet ﷺ taught them, strengthened their faith, and encouraged purity of soul and noble character.',
          },
          distractors: [
            {
              label: { ar: 'في ساحة الكعبة علنًا كلّ يوم', fr: 'Sur la place de la Ka‘ba, ouvertement, chaque jour', en: 'Openly at the Kaaba courtyard every day' },
              hint: { ar: 'الدعوة كانت سرّيّة بعد؛ الدرس يسمّي مكانًا محدّدًا في شِعاب مكّة.', fr: 'L’appel était encore secret ; la leçon nomme un lieu précis dans les ravins de La Mecque.', en: 'The call was still secret; the lesson names one specific place in a Makkan ravine.' },
            },
          ],
        },
      ],
      ending: {
        ar: 'وهكذا بدأ الإسلام ينتشر في وسط ظلام مكّة، واستجاب له الأصفياء.',
        fr: 'Ainsi l’islam commença à se répandre au cœur des ténèbres de La Mecque, et les cœurs purs y répondirent.',
        en: 'Thus Islam began to spread amid the darkness of Makkah, and the pure-hearted responded to it.',
      },
    },

    // 06 — Calling the clan: placement game ordering the events (slide 7)
    {
      kind: 'placement',
      id: 'calling-the-clan',
      title: {
        ar: 'رسول الله يدعو عشيرته',
        fr: 'Le Messager appelle son clan',
        en: 'The Messenger calls his clan',
      },
      intro: {
        ar: 'بعد ثلاث سنوات من الدعوة السرّية الفرديّة، أنزل الله: "وأنذر عشيرتك الأقربين". ضع كلّ بطاقةٍ في خانتها الصحيحة لتتابع ما جرى.',
        fr: 'Après trois ans d’appel secret et individuel, Dieu révéla : « Avertis ta parenté la plus proche. » Place chaque carte dans la bonne case pour suivre les événements.',
        en: 'After three years of secret, individual calling, God revealed: "And warn your nearest kindred." Place each card in its correct slot to follow what happened.',
      },
      slots: [
        { id: 'invite', label: { ar: 'الدعوة إلى الطعام', fr: 'L’invitation au repas', en: 'The invitation to the meal' } },
        { id: 'abu-talib', label: { ar: 'موقف أبي طالب', fr: 'L’attitude d’Abū Ṭālib', en: 'Abu Talib’s response' } },
        { id: 'abu-lahab', label: { ar: 'موقف أبي لهب', fr: 'L’attitude d’Abū Lahab', en: 'Abu Lahab’s response' } },
      ],
      cards: [
        {
          id: 'meal',
          label: { ar: 'أعدّ الرسول (ص) طعامًا ولبنًا، وعرض عليهم الإجابة إلى دين الله وترك عبادة الأصنام، وحثّهم على حسن الخلق', fr: 'Le Prophète ﷺ prépara nourriture et lait, les invita à répondre à la religion de Dieu et à délaisser les idoles, et les exhorta aux bonnes mœurs', en: 'The Prophet ﷺ prepared food and milk, invited them to accept God’s religion and leave idol worship, and urged good character' },
          slotId: 'invite',
          hint: { ar: 'هذا ما جرى في مجلس الدعوة نفسه، قبل أن يردّ أحدٌ عليه.', fr: 'Ceci se passa lors de l’assemblée elle-même, avant toute réponse.', en: 'This happened at the gathering itself, before anyone responded.' },
        },
        {
          id: 'talib-support',
          label: { ar: 'أيّده بالنصرة والعناية، لكنّه لم يُسلم', fr: 'Il le soutint et prit soin de lui, mais sans se convertir', en: 'He supported and protected him, but did not accept Islam' },
          slotId: 'abu-talib',
          hint: { ar: 'هذا ردّ عمّه الذي رباه، وهو غير ردّ أبي لهب.', fr: 'C’est la réponse de l’oncle qui l’éleva — différente de celle d’Abū Lahab.', en: 'This is the response of the uncle who raised him — different from Abu Lahab’s.' },
        },
        {
          id: 'lahab-harm',
          label: { ar: 'آذى ابن أخيه محمدًا (ص) إيذاءً شديدًا', fr: 'Il fit gravement du tort à son neveu Muhammad ﷺ', en: 'He harmed his nephew Muhammad ﷺ severely' },
          slotId: 'abu-lahab',
          hint: { ar: 'هذا ردّ العمّ الآخر، الذي عارض الدعوة بشدّة.', fr: 'C’est la réponse de l’autre oncle, qui s’opposa violemment à l’appel.', en: 'This is the other uncle’s response — he opposed the call fiercely.' },
        },
      ],
    },

    // 07 — Open proclamation: hotspot explorer on al-Safa gathering (slide 8)
    {
      kind: 'explorer',
      id: 'open-proclamation',
      title: {
        ar: 'الرسول (ص) يجهر بالدعوة',
        fr: 'Le Prophète ﷺ proclame ouvertement son appel',
        en: 'The Prophet ﷺ proclaims the call openly',
      },
      intro: {
        ar: 'بعد بضعة أيام، جاء أمر الله أن يجهر بالدعوة للناس جميعًا: "فاصدَعْ بما تؤمَر وأعرِض عن المشركين". اضغط على عناصر المشهد لتكتشف ما جرى.',
        fr: 'Quelques jours plus tard, l’ordre vint de proclamer l’appel à tous : « Expose donc clairement ce qui t’est commandé et détourne-toi des associateurs. » Touche les éléments de la scène pour découvrir ce qui s’est passé.',
        en: 'A few days later, the command came to proclaim the call openly to everyone: "So proclaim what you are commanded and turn away from the polytheists." Tap the elements of the scene to discover what happened.',
      },
      image: `${IMG}/valley-horses.png`,
      imageAlt: {
        ar: 'خيلٌ تعدو مثيرةً الغبار في وادٍ صحراويّ واسع عند الغروب',
        fr: 'Des chevaux galopant en soulevant la poussière dans une large vallée désertique au coucher du soleil',
        en: 'Horses galloping and raising dust in a wide desert valley at sunset',
      },
      hotspots: [
        {
          id: 'gathering',
          x: 22,
          y: 55,
          label: { ar: 'اجتماع قريش', fr: 'L’assemblée de Quraysh', en: 'The gathering of Quraysh' },
          description: {
            ar: 'طلب الرسول (ص) أن تجتمع قريش لأمرٍ يهمّهم، فقال لهم: "أرأيتم لو أخبرتكم أنّ خيلًا بهذا الوادي تريد أن تُغير عليكم، أكنتم مُصدّقي؟" فقالوا: "نعم، ما جرّبنا عليك كذبًا قطّ!"',
            fr: 'Le Prophète ﷺ demanda à Quraysh de se réunir pour une affaire importante, et leur dit : « Si je vous disais que des cavaliers dans cette vallée s’apprêtent à vous attaquer, me croiriez-vous ? » Ils répondirent : « Oui, nous ne t’avons jamais connu menteur ! »',
            en: 'The Prophet ﷺ asked Quraysh to gather for an important matter, and said to them: "If I told you that horsemen were in this valley preparing to raid you, would you believe me?" They said: "Yes — we have never known you to lie!"',
          },
        },
        {
          id: 'warning',
          x: 50,
          y: 40,
          label: { ar: 'النذير', fr: 'L’avertissement', en: 'The warning' },
          description: {
            ar: 'فقال صلى الله عليه وسلم: "فإنّي نذيرٌ لكم بين يدَي عذابٍ شديد".',
            fr: 'Il dit alors ﷺ : « Je suis pour vous un avertisseur avant un châtiment sévère. »',
            en: 'He said ﷺ: "I am a warner to you before a severe punishment."',
          },
        },
        {
          id: 'abu-lahab-reaction',
          x: 82,
          y: 50,
          label: { ar: 'ردّة فعل أبي لهب', fr: 'La réaction d’Abū Lahab', en: 'Abu Lahab’s reaction' },
          description: {
            ar: 'توجّه إليه عمّه أبو لهب يصرخ في وجهه: "تبًّا لك! ألهذا جمعتنا؟!" ثمّ تفرّقت جموعهم.',
            fr: 'Son oncle Abū Lahab se tourna vers lui en criant : « Malheur à toi ! Est-ce pour cela que tu nous as réunis ? » Puis l’assemblée se dispersa.',
            en: 'His uncle Abu Lahab turned on him, shouting: "May you perish! Is this why you gathered us?" Then the gathering dispersed.',
          },
        },
      ],
    },

    // 10 — Polytheist persecution: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-persecution',
      title: {
        ar: 'اقرأ: أذى المشركين وثبات النبيّ ﷺ',
        fr: 'Lis : La persécution des polythéistes et la constance du Prophète ﷺ',
        en: 'Read: Polytheist Persecution and the Prophet’s ﷺ Steadfastness',
      },
      intro: {
        ar: 'اقرأ كيف واجه مشركو قريش الدعوة بالأذى والافتراء، وكيف صبر النبيّ ﷺ وصحابته.',
        fr: 'Découvre comment Quraysh s’opposa à l’appel par l’injustice et les outrages, et comment le Prophète ﷺ et ses compagnons tinrent bon.',
        en: 'Discover how Quraysh met the call with malice and slander, and how the Prophet ﷺ and his companions stood firm.',
      },
      image: `${IMG}/thorns-path.png`,
      imageAlt: {
        ar: 'زقاقٌ رمليٌّ في مكّة ليلًا، وشوكٌ مبعثرٌ أمام باب خشبيّ',
        fr: 'Une ruelle sablonneuse de La Mecque la nuit, des épines éparpillées devant une porte en bois',
        en: 'A sandy Makkan alley at night, thorns scattered in front of a wooden door',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'حملات التكذيب والافتراء',
            fr: 'Les calomnies et fausses accusations',
            en: 'Slander and False Accusations',
          },
          text: {
            ar: 'عندما جهر النبيّ ﷺ بكلمة التوحيد ودعا إلى ترك الأصنام، ثارت ثائرة قريش؛ فقد خشيت على مكانتها ورئاستها بين العرب. ولمّا عجزوا عن مواجهة حجّة القرآن الكريم، لجأوا إلى الافتراء والتهم الباطلة، فنعتوا النبيّ الصادق الأمين بالسحر والكهانة والشعر والجنون، محاولين تشويه صورته وإبعاد الناس عن سماع كلام الله.',
            fr: 'Lorsque le Prophète ﷺ proclama ouvertement le message de l’Unicité divine et appela à délaisser les idoles de pierre, les notables de Quraysh s’emportèrent, craignant pour leur autorité et leurs privilèges parmi les tribus. Incapables de contester la grandeur du Coran, ils eurent recours aux mensonges et aux calomnies, qualifiant le Prophète intègre de sorcier, de devin, de poète ou d’insensé, dans le but d’empêcher les gens d’écouter la parole divine.',
            en: 'When the Prophet ﷺ publicly proclaimed the message of divine Oneness and called for the abandonment of stone idols, Quraysh’s leaders grew furious, fearing the loss of their prestige and authority among the Arabs. Unable to counter the eloquence of the Qur’an, they turned to falsehood and mockery, labeling the trustworthy Prophet as a sorcerer, soothsayer, poet, or madman, attempting to deter people from listening to the Word of God.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'الاعتداء في ساحة الكعبة ودفاع أبي بكر',
            fr: 'L’agression près de la Ka‘ba et le courage d’Abū Bakr',
            en: 'Assault at the Kaaba and Abu Bakr’s Defense',
          },
          text: {
            ar: 'لم يكتفِ كفار قريش بالاستهزاء والكلمات، بل تعدّوا ذلك إلى الإيذاء الجسديّ الشديد؛ ففي يومٍ من الأيام، وبينما كان النبيّ ﷺ يطوف بالبيت الحرام، تكاثر عليه المشركون وأمسك أحدهم بثوبه لخنقه، فأسرع رفيقه أبو بكر الصدّيق رضي الله عنه ليدافع عنه بكلّ شجاعة، وصرخ في وجوههم بكلمات الإيمان: «أتقتلون رجلًا أن يقول ربي الله وقد جاءكم بالبيّنات من ربّكم؟!»، فتركوا النبيّ وانهالوا بالضرب على أبي بكر.',
            fr: 'Les polythéistes ne se contentèrent pas de paroles blessantes : ils passèrent à la violence physique. Un jour, alors que le Prophète ﷺ accomplissait le ṭawāf autour de la Maison Sacrée, des assaillants l’encerclèrent et l’un d’eux tenta de l’étrangler avec son vêtement. Son fidèle ami Abū Bakr aṣ-Ṣiddīq accourut avec bravoure pour le protéger et s’écria avec ferveur : « Allez-vous tuer un homme simplement parce qu’il dit : mon Seigneur est Allah, alors qu’il est venu à vous avec des preuves claires de votre Seigneur ?! » Ils relâchèrent alors le Prophète pour s’acharner violemment sur Abū Bakr.',
            en: 'The polytheists did not stop at cruel words: they escalated to physical violence. One day, while the Prophet ﷺ was circumambulating the Sacred Sanctuary, attackers surrounded him and one seized his cloak in an attempt to strangle him. His loyal friend Abu Bakr al-Siddiq rushed forward courageously to protect him, crying out: "Will you slay a man merely because he proclaims: My Lord is God, when he has come to you with clear signs from your Lord?!" The assailants turned away from the Prophet to beat Abu Bakr relentlessly instead.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'شوك أبي لهب وامرأته وثبات الرسول ﷺ',
            fr: 'Les épines d’Abū Lahab, de son épouse, et la constance du Prophète ﷺ',
            en: 'The Thorns of Abu Lahab, His Wife, and the Prophet’s ﷺ Fortitude',
          },
          text: {
            ar: 'وكان عمّ النبيّ أبو لهب من أشدّ الناس عداوةً له، يتبعه في المجامع ليُكذّبه وينفّر الناس منه. كما شاركت زوجته أمّ جميل في هذا الظلم، فكانت تجمع الشوك والحطب وتضعه في طريق النبيّ ﷺ وأمام بابه ليلًا لتدمي قدميه الشريفتين. لكنّ رسول الله ﷺ قابل هذا الأذى كلّه بالصبر الجميل، وما زاده الكيد إلّا ثباتًا على دعوة الحقّ ورحمةً بالعالمين.',
            fr: 'Son propre oncle Abū Lahab comptait parmi ses ennemis les plus acharnés, le poursuivant sur les places pour contredire son message et éloigner les pèlerins. Son épouse Umm Jamīl participait activement à cette cruauté : elle ramassait des épines pour les déposer la nuit sur le sentier et devant la porte du Prophète ﷺ afin de le blesser. Malgré toute cette méchanceté, le Messager ﷺ demeura d’une patience admirable, et ces épreuves ne firent que renforcer son dévouement à guider l’humanité avec bienveillance.',
            en: 'His own uncle Abu Lahab stood among his most bitter adversaries, following him across public gatherings to deny his words and steer people away. His wife Umm Jamil actively joined in this malice: she would gather thorns and place them at night along the Prophet’s ﷺ path and at his doorstep to wound his feet. Yet the Messenger of God ﷺ met every hardship with noble patience, and their schemes only fortified his resolve to bring mercy and guidance to the world.',
          },
        },
      ],
    },

    // 11 — Persecution as a chat replay (slide 9)
    {
      kind: 'chat',
      id: 'persecution-chat',
      title: {
        ar: 'إيذاء المشركين لرسول الله (ص)',
        fr: 'La persécution du Messager par les polythéistes',
        en: 'The polytheists’ persecution of the Messenger ﷺ',
      },
      intro: {
        ar: 'تابع ما جرى في مكّة بعد الجهر بالدعوة، كأنّك تقرأ رسائل من ذلك الزمن.',
        fr: 'Suis ce qui se passa à La Mecque après la proclamation de l’appel, comme si tu lisais des messages venus de cette époque.',
        en: 'Follow what happened in Makkah after the call went public, as if reading messages from that time.',
      },
      image: `${IMG}/thorns-path.png`,
      imageAlt: {
        ar: 'زقاقٌ رمليٌّ في مكّة ليلًا، وشوكٌ مبعثرٌ أمام باب خشبيّ',
        fr: 'Une ruelle sablonneuse de La Mecque la nuit, des épines éparpillées devant une porte en bois',
        en: 'A sandy Makkan alley at night, thorns scattered in front of a wooden door',
      },
      speakers: [
        { id: 'narrator', name: { ar: 'الراوي', fr: 'Le narrateur', en: 'The narrator' }, avatar: '✦', side: 'start', tone: 'night' },
        { id: 'mushrikun', name: { ar: 'مشركو قريش', fr: 'Les polythéistes de Quraysh', en: 'The polytheists of Quraysh' }, avatar: '✗', side: 'end', tone: 'clay' },
        { id: 'abubakr', name: { ar: 'أبو بكر رضي الله عنه', fr: 'Abū Bakr (qu’Allah l’agrée)', en: 'Abu Bakr (may God be pleased with him)' }, avatar: '☾', side: 'start', tone: 'emerald' },
      ],
      steps: [
        {
          type: 'reply',
          id: 'accuse',
          who: 'mushrikun',
          prompt: { ar: 'بأيّ تُهمٍ اتّهم المشركون الرسول (ص)؟ اختر ما ذكره الدرس.', fr: 'De quels griefs les polythéistes accusaient-ils le Prophète ﷺ ? Choisis ce que dit la leçon.', en: 'What accusations did the polytheists level at the Prophet ﷺ? Choose what the lesson states.' },
          options: [
            {
              id: 'right',
              correct: true,
              label: { ar: 'اتّهموه بالسحر والجنون والسفه والشعر', fr: '« Tu es un sorcier, un fou, un insensé, un poète »', en: '"You are a sorcerer, a madman, a fool, a poet"' },
              hint: { ar: 'راجع الآية التي استشهد بها الدرس: "ويقولون أئنّا لتاركو آلهتنا لشاعرٍ مجنون".', fr: 'Relis le verset cité par la leçon : « et ils disent : Allons-nous abandonner nos divinités pour un poète fou ? »', en: 'Recall the verse the lesson quotes: "and they say: are we to leave our gods for a mad poet?"' },
            },
            {
              id: 'wrong',
              correct: false,
              label: { ar: 'اتّهموه بسرقة أموالهم', fr: '« Tu as volé nos biens »', en: '"You stole our wealth"' },
              hint: { ar: 'لم يذكر الدرس هذه التهمة؛ عُد إلى الآية المذكورة في البطاقة.', fr: 'La leçon ne mentionne pas ce grief ; relis le verset cité.', en: 'The lesson does not mention this accusation; revisit the verse quoted.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'uncle-worst',
          who: 'narrator',
          text: {
            ar: 'كان عمّ الرسول (ص) أبو لهب أشدّ المشركين إيذاءً له، فقد كان يستهزئ به ويمنع الناس من الاستماع إليه.',
            fr: 'L’oncle du Prophète ﷺ, Abū Lahab, était le plus acharné à lui nuire : il le raillait et empêchait les gens de l’écouter.',
            en: 'The Prophet’s ﷺ uncle Abu Lahab was the harshest of the polytheists in harming him: he mocked him and stopped people from listening to him.',
          },
        },
        {
          type: 'msg',
          id: 'kaaba-attack',
          who: 'narrator',
          text: {
            ar: 'في يومٍ أحاط المشركون بمحمد (ص) وهو يطوف بالكعبة، ثمّ أمسك أحدهم بثوب الرسول (ص) يريد أن يخنقه.',
            fr: 'Un jour, les polythéistes encerclèrent Muhammad ﷺ alors qu’il accomplissait le ṭawāf autour de la Ka‘ba, et l’un d’eux saisit son vêtement, voulant l’étrangler.',
            en: 'One day the polytheists surrounded Muhammad ﷺ while he circled the Kaaba, and one of them seized his garment, meaning to strangle him.',
          },
        },
        {
          type: 'reply',
          id: 'abubakr-defends',
          who: 'abubakr',
          prompt: { ar: 'ماذا قال أبو بكر رضي الله عنه وهو يردّ عنه؟', fr: 'Que dit Abū Bakr pour le défendre ?', en: 'What did Abu Bakr say in his defense?' },
          options: [
            {
              id: 'right',
              correct: true,
              label: { ar: 'أتقتلون رجلًا يقول: ربّي الله؟', fr: '« Allez-vous tuer un homme qui dit : mon Seigneur est Allah ? »', en: '"Will you kill a man who says: my Lord is God?"' },
              hint: { ar: 'هذا نصّ ما ورد في الدرس بالحرف.', fr: 'Ce sont les mots exacts rapportés par la leçon.', en: 'This is the lesson’s exact wording.' },
            },
            {
              id: 'wrong',
              correct: false,
              label: { ar: 'دعوه وشأنه، فهو لا يستحقّ الدفاع', fr: '« Laissez-le, il ne mérite pas qu’on le défende »', en: '"Leave him be — he doesn’t deserve defending"' },
              hint: { ar: 'عكس هذا تمامًا: أبو بكر دافع عنه بقوّة.', fr: 'C’est le contraire : Abū Bakr le défendit avec force.', en: 'This is the opposite — Abu Bakr defended him forcefully.' },
            },
          ],
        },
        {
          type: 'msg',
          id: 'thorns',
          who: 'narrator',
          text: {
            ar: 'وكانت تقوم بإيذائه امرأة أبي لهب، فقد كانت تحمل الشوك وتضعه في طريق النبيّ (ص) وعلى بابه ليلًا.',
            fr: 'La femme d’Abū Lahab s’y employait aussi : elle apportait des épines et les plaçait sur le chemin du Prophète ﷺ et devant sa porte, la nuit.',
            en: 'Abu Lahab’s wife took part too: she carried thorns and scattered them on the Prophet’s ﷺ path and at his door by night.',
          },
        },
      ],
    },

    // 12 — Offers of worldly temptation: narrative reading passage
    {
      kind: 'reading',
      id: 'reading-temptation',
      title: {
        ar: 'اقرأ: عروض الإغراء وثبات الرسالة',
        fr: 'Lis : Les offres de séduction et la fidélité au message',
        en: 'Read: Offers of Worldly Temptation and Fidelity to the Message',
      },
      intro: {
        ar: 'اقرأ كيف حاولت قريش إغراء النبيّ ﷺ بالمال والرئاسة ليترك دعوته، وكيف كان ردّه الحاسم.',
        fr: 'Lis comment Quraysh tenta de séduire le Prophète ﷺ par l’or et le pouvoir pour qu’il renonce à sa mission, et quelle fut sa réponse inébranlable.',
        en: 'Read how Quraysh attempted to bribe the Prophet ﷺ with wealth and leadership to abandon his mission, and his resolute response.',
      },
      image: `${IMG}/hajj-tribes.png`,
      imageAlt: {
        ar: 'وفودٌ وقوافل من قبائل العرب تجتمع في موسم الحجّ بمكّة عند المغيب',
        fr: 'Caravanes et délégations des tribus arabes rassemblées à La Mecque au coucher du soleil pendant la saison du pèlerinage',
        en: 'Caravans and delegations of Arab tribes gathered in Makkah at sunset during the pilgrimage season',
      },
      paragraphs: [
        {
          id: 'p1',
          heading: {
            ar: 'دعوة القبائل في موسم الحجّ',
            fr: 'L’appel aux tribus pendant le pèlerinage',
            en: 'Calling the Tribes During the Pilgrimage Season',
          },
          text: {
            ar: 'لم يثنِ التعذيب والأذى رسولَ الله ﷺ عن رسالته، بل اغتنم كلّ فرصةٍ لتبليغ دين الله. وكان موسم الحجّ من أهمّ هذه الفرص؛ حيث تتوافد قبائل العرب من كلّ صوبٍ إلى مكّة. فكان النبيّ ﷺ يمرّ على خيامهم ومضاربهم، يعرض عليهم الإسلام، ويتلو عليهم القرآن، ويدعوهم إلى عبادة الله وحده ونبذ الأوثان.',
            fr: 'Ni la persécution ni les outrages ne purent détourner le Messager d’Allah ﷺ de son noble devoir ; il saisissait au contraire chaque opportunité pour transmettre la foi. La saison du pèlerinage représentait l’un des moments les plus précieux, car les tribus arabes affluaient de toutes parts vers La Mecque. Le Prophète ﷺ se rendait alors auprès de leurs campements, leur présentant l’islam, leur récitant le Coran et les invitant à adorer le Créateur unique en délaissant les idoles.',
            en: 'Neither persecution nor cruelty could sway the Messenger of God ﷺ from his duty; instead, he seized every occasion to deliver the divine message. The pilgrimage season was one of the most vital opportunities, as Arab tribes converged upon Makkah from every corner of the peninsula. The Prophet ﷺ visited their encampments, presenting Islam to them, reciting the Qur’an, and calling them to worship the One True God and cast aside idols.',
          },
        },
        {
          id: 'p2',
          heading: {
            ar: 'مخاوف قريش على تجارتها ومكانتها',
            fr: 'Les craintes de Quraysh pour son commerce et son prestige',
            en: 'Quraysh’s Fears for Commerce and Status',
          },
          text: {
            ar: 'أصابت قريشًا حيرةٌ وقلقٌ شديدان؛ فقد خشوا أن تقتنع القبائل الوافدة بدعوة التوحيد وتترك عبادة الأصنام التي تحيط بالكعبة. وكان خوفهم الأكبر على تجارتهم النشطة وأموالهم التي تزدهر في موسم الحجّ؛ فلو تركت القبائل أصنامها لفسد موسم التجارة وخسرت مكّة مكانتها الدينية والاقتصادية بين العرب.',
            fr: 'Une vive inquiétude s’empara des dirigeants de Quraysh : ils craignaient que les tribus de passage ne soient convaincues par le message de l’Unicité et n’abandonnent les idoles entourant la Ka‘ba. Leur inquiétude suprême concernait leurs affaires lucratives et leur commerce prospère lié au pèlerinage : si les tribus délaissaient leurs dieux de pierre, les foires commerciales péricliteraient et La Mecque perdrait sa primauté religieuse et économique.',
            en: 'Deep anxiety gripped the chiefs of Quraysh: they feared that visiting tribes would be persuaded by monotheism and forsake the idols encircling the Kaaba. Their greatest worry was for their bustling commerce and lucrative markets that thrived during the pilgrimage: should the tribes abandon their deities, trade fairs would wither, and Makkah would lose its central religious and economic dominance.',
          },
        },
        {
          id: 'p3',
          heading: {
            ar: 'المساومة بالمال والمُلك والردّ النبويّ',
            fr: 'La tentative d’achat par la richesse et le trône',
            en: 'The Offer of Wealth and Throne, and the Prophetic Resolve',
          },
          text: {
            ar: 'لجأت قريش إلى حيلةٍ جديدة هي الإغراء والمساومة؛ فأرسلوا وفودهم إلى النبيّ ﷺ يعرضون عليه أن يجمعوا له من أموالهم حتى يكون أغناهم، أو يجعلوه ملِكًا وسيّدًا عليهم لا يقطعون أمرًا دونه، في مقابل شرطٍ واحد: أن يتخلّى عن هذا الدين ويترك عيب آلهتهم. فكان ردّ النبيّ ﷺ الرفض القاطع لكلّ متاع الدنيا؛ مؤكّدًا أنّ رسالة الله ودينه الحقّ أسمى من كلّ كنوز الأرض وتيجان الملك.',
            fr: 'Quraysh imagina alors une nouvelle ruse : la tentation matérielle et le marchandage. Leurs émissaires vinrent trouver le Prophète ﷺ pour lui proposer de lui constituer une fortune immense pour qu’il devienne le plus riche d’entre eux, ou de le couronner roi et chef suprême de La Mecque sans qu’aucune décision ne se prenne sans son accord, à une seule condition : renoncer à son appel et cesser de dénoncer leurs idoles. Le Prophète ﷺ opposa un refus catégorique et absolu à toutes ces offres éphémères, proclamant que la vérité divine était infiniment plus précieuse que toutes les richesses et couronnes du monde.',
            en: 'Quraysh turned to a new strategy: material temptation and compromise. Their emissaries approached the Prophet ﷺ offering to pool their fortunes until he became the wealthiest man among them, or to crown him king and supreme leader of Makkah so that no decision would be made without his approval — all on one condition: that he abandon his mission and cease renouncing their idols. The Prophet ﷺ responded with decisive refusal of all worldly bait, affirming that the truth of God’s guidance was far greater than all the riches and crowns of the earth.',
          },
        },
      ],
    },

    // 13 — Quraysh tempting the Prophet: swipe judge (slide 10)
    {
      kind: 'swipe',
      id: 'temptation',
      title: {
        ar: 'قريش تغري الرسول (ص)',
        fr: 'Quraysh tente de séduire le Messager ﷺ',
        en: 'Quraysh tries to tempt the Messenger ﷺ',
      },
      intro: {
        ar: 'استمرّ الرسول (ص) في الدعوة بجدّ وعزمٍ دون أن يلتفت إلى أذى المشركين، واستغلّ موسم الحجّ لدعوة القبائل العربية الوافدة إلى مكّة. اسحب كلّ بطاقة إلى الجهة الصحيحة: أكان هذا مما خافته قريش، أم مما عرضته عليه؟',
        fr: 'Le Prophète ﷺ poursuivit son appel avec détermination, sans se soucier du tort des polythéistes, et profita du pèlerinage pour appeler les tribus arabes venues à La Mecque. Fais glisser chaque carte du bon côté : était-ce une crainte de Quraysh, ou une offre qu’elle lui fit ?',
        en: 'The Prophet ﷺ continued his call with determination, undeterred by the harm of the polytheists, and used the pilgrimage season to call the Arab tribes coming to Makkah. Swipe each card to the right side: was it something Quraysh feared, or something it offered him?',
      },
      left: {
        label: { ar: 'ما خافته قريش', fr: 'Ce que Quraysh craignait', en: 'What Quraysh feared' },
        tag: { ar: 'خوفٌ', fr: 'Crainte', en: 'Fear' },
      },
      right: {
        label: { ar: 'ما عرضته قريش', fr: 'Ce que Quraysh offrit', en: 'What Quraysh offered' },
        tag: { ar: 'عرضٌ', fr: 'Offre', en: 'Offer' },
      },
      cards: [
        {
          id: 'tribes-enter-islam',
          who: { ar: 'موسم الحجّ', fr: 'La saison du pèlerinage', en: 'The pilgrimage season' },
          deed: {
            ar: 'خافت قريش أن تدخل القبائل الوافدة في الإسلام وتترك أصنامها',
            fr: 'Quraysh craignait que les tribus venues n’embrassent l’islam et n’abandonnent leurs idoles',
            en: 'Quraysh feared that the visiting tribes would enter Islam and abandon their idols',
          },
          side: 'left',
          explanation: {
            ar: 'بالضبط — استغلّ الرسول (ص) موسم الحجّ لدعوة القبائل، وهذا ما أخافهم.',
            fr: 'Exact — le Prophète ﷺ profitait du pèlerinage pour appeler les tribus, ce qui les effrayait.',
            en: 'Exactly — the Prophet ﷺ used the pilgrimage season to call the tribes, and this frightened them.',
          },
        },
        {
          id: 'trade-ruin',
          who: { ar: 'تجارة مكّة', fr: 'Le commerce de La Mecque', en: 'Makkah’s trade' },
          deed: {
            ar: 'خافت قريش أن تتخلّى القبائل عن مكّة وتفسد تجارتها النشطة في موسم الحجّ',
            fr: 'Quraysh craignait que les tribus n’abandonnent La Mecque, ruinant son commerce florissant pendant le pèlerinage',
            en: 'Quraysh feared the tribes would abandon Makkah, ruining its trade that thrived during the pilgrimage season',
          },
          side: 'left',
          explanation: {
            ar: 'صحيح، كانت تجارة قريش مرتبطةً بزيارة القبائل لأصنامها في موسم الحجّ.',
            fr: 'Exact, le commerce de Quraysh dépendait de la visite des tribus à leurs idoles pendant le pèlerinage.',
            en: 'Correct — Quraysh’s trade depended on the tribes visiting their idols during the pilgrimage.',
          },
        },
        {
          id: 'wealth-offer',
          image: `${IMG}/offer.png`,
          who: { ar: 'العرض الأوّل', fr: 'La première offre', en: 'The first offer' },
          deed: {
            ar: 'أرسلوا إلى الرسول (ص) يعرضون عليه الأموال مقابل أن يترك دين الله',
            fr: 'Ils envoyèrent au Prophète ﷺ pour lui proposer des richesses en échange de l’abandon de la religion de Dieu',
            en: 'They sent to the Prophet ﷺ offering him wealth in exchange for leaving God’s religion',
          },
          side: 'right',
          explanation: {
            ar: 'نعم، عرضوا عليه المال؛ وكان ردّه الرفض.',
            fr: 'Oui, ils lui offrirent de l’argent ; sa réponse fut le refus.',
            en: 'Yes, they offered him money; his response was refusal.',
          },
        },
        {
          id: 'leadership-offer',
          image: `${IMG}/offer.png`,
          who: { ar: 'العرض الثاني', fr: 'La seconde offre', en: 'The second offer' },
          deed: {
            ar: 'عرضوا عليه رئاسة قريش مقابل أن يترك دين الله، فرفض',
            fr: 'Ils lui offrirent la direction de Quraysh en échange de l’abandon de la religion de Dieu ; il refusa',
            en: 'They offered him leadership of Quraysh in exchange for leaving God’s religion; he refused',
          },
          side: 'right',
          explanation: {
            ar: 'صحيح، عرضوا عليه الرئاسة أيضًا، وكان الجواب نفسه: الرفض.',
            fr: 'Exact, ils lui offrirent aussi la direction, et la réponse fut la même : le refus.',
            en: 'Correct — they also offered leadership, and the answer was the same: refusal.',
          },
        },
      ],
    },

    // 10 — Blitz round: rapid true/false across the whole lesson
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
          text: { ar: 'نزل الوحي على محمد (ص) في غار حراء وعمره أربعون سنة.', fr: 'La révélation descendit sur Muhammad ﷺ dans la grotte de Hirā’ alors qu’il avait quarante ans.', en: 'Revelation came down to Muhammad ﷺ in the cave of Hira when he was forty years old.' },
          answer: true,
          explanation: { ar: 'صحيح، هذا نصّ الدرس.', fr: 'Vrai, c’est le texte même de la leçon.', en: 'True — this is exactly what the lesson states.' },
        },
        {
          id: 'b2',
          text: { ar: 'أوّل من آمن به كان أبو لهب.', fr: 'Le premier à croire en lui fut Abū Lahab.', en: 'The first to believe in him was Abu Lahab.' },
          answer: false,
          explanation: { ar: 'خطأ، أبو لهب كان أشدّ المشركين إيذاءً له؛ أوّل من استجاب كانت خديجة وعليّ وأبو بكر وزيد.', fr: 'Faux, Abū Lahab fut le plus acharné à lui nuire ; les premiers à répondre furent Khadīja, ‘Alī, Abū Bakr et Zayd.', en: 'False — Abu Lahab was the harshest in harming him; the first to respond were Khadija, Ali, Abu Bakr and Zayd.' },
        },
        {
          id: 'b3',
          text: { ar: 'كانت دار الأرقم بن أبي الأرقم مكانًا لدعوةٍ سرّية.', fr: 'La maison d’al-Arqam ibn Abī al-Arqam fut un lieu d’appel secret.', en: 'The house of al-Arqam ibn Abi al-Arqam was a place of secret calling.' },
          answer: true,
          explanation: { ar: 'صحيح، أصبحت مقصدًا لمن يريد إعلان إسلامه في مرحلة السرّ.', fr: 'Vrai, elle devint le lieu de ceux qui voulaient déclarer leur islam durant la phase secrète.', en: 'True — it became the gathering place for those declaring their Islam during the secret phase.' },
        },
        {
          id: 'b4',
          text: { ar: 'أيّد أبو طالب دعوة ابن أخيه وأسلم معه.', fr: 'Abū Ṭālib soutint l’appel de son neveu et se convertit avec lui.', en: 'Abu Talib supported his nephew’s call and converted with him.' },
          answer: false,
          explanation: { ar: 'خطأ، أيّده بالنصرة والعناية لكنّه لم يُسلم.', fr: 'Faux, il le soutint et prit soin de lui, mais sans se convertir.', en: 'False — he supported and protected him, but did not accept Islam.' },
        },
        {
          id: 'b5',
          text: { ar: 'قبلت قريش عرض الرسول (ص) بترك أصنامها دون مقاومة.', fr: 'Quraysh accepta sans résistance de délaisser ses idoles.', en: 'Quraysh accepted without resistance to abandon its idols.' },
          answer: false,
          explanation: { ar: 'خطأ، حاولت قريش إغراءه بالمال والرئاسة ليتخلّى هو عن دعوته، فرفض.', fr: 'Faux, Quraysh tenta de le séduire par l’argent et le pouvoir pour qu’il abandonne son appel ; il refusa.', en: 'False — Quraysh tried to tempt him with wealth and leadership to abandon his call; he refused.' },
        },
      ],
    },

    // 11 — Quiz: mixed formats
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
          question: { ar: 'مَن حمل إلى الرسول (ص) أوّل الوحي؟', fr: 'Qui apporta au Prophète ﷺ la première révélation ?', en: 'Who brought the first revelation to the Prophet ﷺ?' },
          options: [
            { id: 'a', label: { ar: 'جبريل عليه السلام', fr: 'Gabriel (sur lui la paix)', en: 'Gabriel (peace be upon him)' } },
            { id: 'b', label: { ar: 'ورقة بن نوفل', fr: 'Waraqa ibn Nawfal', en: 'Waraqa ibn Nawfal' } },
            { id: 'c', label: { ar: 'أبو طالب', fr: 'Abū Ṭālib', en: 'Abu Talib' } },
          ],
          correctId: 'a',
          explanation: {
            ar: 'جبريل عليه السلام هو من جاء إلى الرسول (ص) في غار حراء وقال له: اقرأ.',
            fr: 'C’est Gabriel (sur lui la paix) qui vint au Prophète ﷺ dans la grotte de Hirā’ et lui dit : « Lis ! »',
            en: 'It was Gabriel (peace be upon him) who came to the Prophet ﷺ in the cave of Hira and said: "Read!"',
          },
        },
        {
          id: 'q2',
          type: 'truefalse',
          question: { ar: 'استغلّ الرسول (ص) موسم الحجّ لدعوة القبائل الوافدة إلى مكّة.', fr: 'Le Prophète ﷺ profita du pèlerinage pour appeler les tribus venues à La Mecque.', en: 'The Prophet ﷺ used the pilgrimage season to call the tribes visiting Makkah.' },
          answer: true,
          explanation: {
            ar: 'صحيح، وهذا بالذات ما أخاف قريشًا على تجارتها وأصنامها.',
            fr: 'Vrai, et c’est précisément ce qui effraya Quraysh pour son commerce et ses idoles.',
            en: 'True — and this is exactly what frightened Quraysh for its trade and its idols.',
          },
        },
        {
          id: 'q3',
          type: 'matching',
          question: { ar: 'صِل كلّ شخصيّة بموقفها', fr: 'Relie chaque personnage à son attitude', en: 'Match each person to their stance' },
          pairs: [
            { id: 'p1', left: { ar: 'خديجة رضي الله عنها', fr: 'Khadīja (qu’Allah l’agrée)', en: 'Khadija (may God be pleased with her)' }, right: { ar: 'طمأنت الرسول (ص) وأخذته إلى ورقة', fr: 'Rassura le Prophète ﷺ et l’emmena voir Waraqa', en: 'Reassured the Prophet ﷺ and took him to Waraqa' } },
            { id: 'p2', left: { ar: 'أبو بكر رضي الله عنه', fr: 'Abū Bakr (qu’Allah l’agrée)', en: 'Abu Bakr (may God be pleased with him)' }, right: { ar: 'دافع عنه عند الكعبة', fr: 'Le défendit près de la Ka‘ba', en: 'Defended him at the Kaaba' } },
            { id: 'p3', left: { ar: 'أبو لهب', fr: 'Abū Lahab', en: 'Abu Lahab' }, right: { ar: 'كان أشدّ المشركين إيذاءً له', fr: 'Fut le plus acharné à lui nuire', en: 'Was the harshest in harming him' } },
          ],
          explanation: {
            ar: 'كلّ شخصيّةٍ في الدرس لها موقفٌ واضح من الدعوة — سندًا أو أذًى.',
            fr: 'Chaque personnage de la leçon a une position claire face à l’appel — soutien ou persécution.',
            en: 'Each person in the lesson has a clear stance toward the call — either support or harm.',
          },
        },
        {
          id: 'q4',
          type: 'ordering',
          question: { ar: 'رتّب هذه المحطّات بحسب ورودها في الدرس', fr: 'Ordonne ces étapes selon leur déroulement dans la leçon', en: 'Order these milestones as they occurred in the lesson' },
          items: [
            { id: 'o1', label: { ar: 'نزول الوحي في غار حراء', fr: 'La révélation dans la grotte de Hirā’', en: 'Revelation in the cave of Hira' } },
            { id: 'o2', label: { ar: 'الدعوة السرّية في دار الأرقم', fr: 'L’appel secret dans la maison d’al-Arqam', en: 'Secret calling in the house of al-Arqam' } },
            { id: 'o3', label: { ar: 'دعوة العشيرة الأقربين', fr: 'L’appel à la parenté la plus proche', en: 'Calling the nearest kindred' } },
            { id: 'o4', label: { ar: 'الجهر بالدعوة على رؤوس الأشهاد', fr: 'La proclamation publique de l’appel', en: 'The open, public proclamation of the call' } },
          ],
          explanation: {
            ar: 'هذا هو مسار الدعوة في الدرس: وحيٌ، فسرٌّ، فعشيرةٌ، فجهرٌ.',
            fr: 'C’est le parcours de l’appel dans la leçon : révélation, secret, parenté, puis proclamation.',
            en: 'This is the call’s path in the lesson: revelation, secrecy, kindred, then open proclamation.',
          },
        },
      ],
    },

    // 12 — Values drawn from the lesson
    {
      kind: 'value',
      id: 'values',
      title: {
        ar: 'ماذا نتعلّم من هذا الدرس؟',
        fr: 'Que retenir de cette leçon ?',
        en: 'What do we learn from this lesson?',
      },
      prompt: {
        ar: 'حين عُرض على الرسول (ص) المال والرئاسة مقابل ترك دعوته، ماذا فعل؟',
        fr: 'Quand on offrit au Prophète ﷺ richesse et pouvoir en échange de l’abandon de son appel, que fit-il ?',
        en: 'When the Prophet ﷺ was offered wealth and leadership to abandon his call, what did he do?',
      },
      choices: [
        {
          id: 'refused',
          isCorrect: true,
          label: { ar: 'رفض العرضين', fr: 'Il refusa les deux offres', en: 'He refused both offers' },
          feedback: {
            ar: 'صحيح، رفض المال والرئاسة معًا؛ فالحقّ عنده لا يُشترى.',
            fr: 'Exact, il refusa à la fois l’argent et le pouvoir : la vérité, pour lui, ne s’achète pas.',
            en: 'Correct — he refused both wealth and leadership; truth, for him, was not for sale.',
          },
        },
        {
          id: 'accepted-money',
          isCorrect: false,
          label: { ar: 'قبل المال وواصل الدعوة سرًّا', fr: 'Il accepta l’argent et poursuivit son appel en secret', en: 'He accepted the money and continued calling in secret' },
          feedback: {
            ar: 'لا، الدرس يذكر رفضه التامّ للعرضين، لا قبول أحدهما.',
            fr: 'Non, la leçon mentionne son refus total des deux offres, non l’acceptation de l’une d’elles.',
            en: 'No — the lesson states his complete refusal of both offers, not acceptance of either.',
          },
        },
        {
          id: 'negotiated',
          isCorrect: false,
          label: { ar: 'فاوضهم على شروطٍ أخرى', fr: 'Il négocia d’autres conditions', en: 'He negotiated other terms' },
          feedback: {
            ar: 'لا، لم يرد في الدرس أيّ تفاوض؛ جوابه كان رفضًا مباشرًا.',
            fr: 'Non, la leçon ne mentionne aucune négociation ; sa réponse fut un refus direct.',
            en: 'No — the lesson mentions no negotiation; his answer was a direct refusal.',
          },
        },
      ],
      valuesTitle: {
        ar: 'قيمٌ من سيرة الدعوة — اقلب كلّ بطاقة',
        fr: 'Des valeurs tirées de l’appel — retourne chaque carte',
        en: 'Values from the story of the call — flip each card',
      },
      values: [
        {
          id: 'steadfastness',
          value: { ar: 'الثبات على الحقّ', fr: 'La fermeté sur la vérité', en: 'Steadfastness upon truth' },
          evidence: {
            ar: 'رفض الرسول (ص) المال والرئاسة ليبقى على دعوته.',
            fr: 'Le Prophète ﷺ refusa argent et pouvoir pour rester fidèle à son appel.',
            en: 'The Prophet ﷺ refused wealth and leadership to remain true to his call.',
          },
        },
        {
          id: 'trustworthiness',
          value: { ar: 'الصدق والأمانة', fr: 'La sincérité et l’honnêteté', en: 'Honesty and trustworthiness' },
          evidence: {
            ar: 'صدّقت قريش نفسها أنّه لم يكذب عليهم قطّ، حتى في أشدّ لحظات المواجهة.',
            fr: 'Quraysh elle-même reconnut qu’il ne leur avait jamais menti, même aux moments de confrontation les plus durs.',
            en: 'Quraysh itself admitted he had never lied to them, even at the harshest moment of confrontation.',
          },
        },
        {
          id: 'patience',
          value: { ar: 'الصبر على الأذى', fr: 'La patience face au tort', en: 'Patience amid harm' },
          evidence: {
            ar: 'تحمّل السخرية والشوك والإيذاء ولم يتراجع عن الدعوة.',
            fr: 'Il supporta moqueries, épines et persécution sans jamais renoncer à son appel.',
            en: 'He endured mockery, thorns, and harm without ever abandoning his call.',
          },
        },
        {
          id: 'loyalty',
          value: { ar: 'الوفاء ونصرة المظلوم', fr: 'La loyauté et le soutien à l’opprimé', en: 'Loyalty and standing by the wronged' },
          evidence: {
            ar: 'وقف أبو بكر رضي الله عنه يدافع عنه عند الكعبة رغم الخطر.',
            fr: 'Abū Bakr se dressa pour le défendre près de la Ka‘ba malgré le danger.',
            en: 'Abu Bakr stood to defend him at the Kaaba despite the danger.',
          },
        },
      ],
    },

    // 13 — Completion
    {
      kind: 'completion',
      id: 'completion',
      keyTakeaway: {
        ar: 'بدأت بعثة الرسول (ص) بالوحي في غار حراء، ثمّ تدرّجت الدعوة من السرّ إلى الجهر، فوجهت مقاومةً شديدةً من قريش — أذًى وإغراءً — لكنّ الرسول (ص) ثبت على الحقّ ورفض كلّ عرض.',
        fr: 'La mission du Prophète ﷺ commença par la révélation dans la grotte de Hirā’, puis l’appel progressa du secret à la proclamation publique, se heurtant à une forte résistance de Quraysh — persécution et séduction — mais le Prophète ﷺ demeura ferme sur la vérité et refusa toute offre.',
        en: 'The Prophet’s ﷺ mission began with revelation in the cave of Hira, then the call progressed from secrecy to open proclamation, facing strong resistance from Quraysh — harm and temptation alike — yet the Prophet ﷺ stood firm upon truth and refused every offer.',
      },
      learned: [
        {
          ar: 'نزل الوحي على محمد (ص) في غار حراء وعمره أربعون سنة، بالآيات الأولى من سورة العلق.',
          fr: 'La révélation descendit sur Muhammad ﷺ dans la grotte de Hirā’ à quarante ans, avec les premiers versets de la sourate al-‘Alaq.',
          en: 'Revelation came down to Muhammad ﷺ in the cave of Hira at age forty, with the first verses of Surat al-‘Alaq.',
        },
        {
          ar: 'دعم خديجة وورقة بن نوفل كان سندًا أساسيًّا في أوّل لحظات الوحي.',
          fr: 'Le soutien de Khadīja et de Waraqa ibn Nawfal fut essentiel dans les premiers instants de la révélation.',
          en: 'The support of Khadija and Waraqa ibn Nawfal was essential in the earliest moments of revelation.',
        },
        {
          ar: 'بدأت الدعوة سرًّا في دار الأرقم، ثمّ امتدّت إلى العشيرة الأقربين، ثمّ جُهر بها للناس كافّة.',
          fr: 'L’appel commença en secret dans la maison d’al-Arqam, s’étendit à la parenté la plus proche, puis fut proclamé à tous.',
          en: 'The call began secretly in the house of al-Arqam, extended to the nearest kindred, then was proclaimed to everyone.',
        },
        {
          ar: 'واجهت قريشٌ الدعوة بالتهم والأذى الجسديّ، ثمّ حاولت إغراء الرسول (ص) بالمال والرئاسة — فرفض الاثنين معًا.',
          fr: 'Quraysh répondit à l’appel par les accusations et le tort physique, puis tenta de séduire le Prophète ﷺ avec argent et pouvoir — il refusa les deux.',
          en: 'Quraysh met the call with accusations and physical harm, then tried to tempt the Prophet ﷺ with wealth and leadership — he refused both.',
        },
      ],
    },
  ],
}
