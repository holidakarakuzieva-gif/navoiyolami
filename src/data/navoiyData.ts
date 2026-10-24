import { NavoiyChapter, TimelineEvent, HistoricalPlace } from '../types';

export const navoiyChapters: NavoiyChapter[] = [
  {
    id: 'who-was-navoiy',
    number: '01',
    titleUz: 'Alisher Navoiy kim bo‘lgan?',
    titleRu: 'Кем был Алишер Навои?',
    readingTimeUz: '3 daqiqa',
    readingTimeRu: '3 мин',
    shortDescUz: 'O‘zbek adabiy tilining asoschisi, mutafakkir shoir va buyuk davlat arbobi.',
    shortDescRu: 'Основоположник узбекского литературного языка, поэт-мыслитель и государственный деятель.',
    contentUz: [
      'Nizomiddin Mir Alisher Navoiy 1441-yil 9-fevralda Hirot shahrida tavallud topgan. U buyuk shoir, faylasuf, musiqashunos, xattot va Temuriylar davlatining ko‘zga ko‘ringan vaziri bo‘lgan.',
      'Navoiy o‘z asarlarini ikki tilda yozgan: turkiy (o‘zbek) tilida «Navoiy» (kuy taratuvchi, navobaxsh) va fors-tojik tilida «Foniy» (o‘tkinchi, fano bo‘luvchi) taxalluslari bilan ijod qilgan.',
      'U turkiy tilning boyligini, ohangdorligini va badiiy ifoda imkoniyatlarini dunyoga isbotlab, mumtoz adabiyotimizning cho‘qqisiga aylandi.'
    ],
    contentRu: [
      'Низамаддин Мир Алишер Навои родился 9 февраля 1441 года в древнем городе Герате. Он был великим поэтом, философом, знатоком музыки, каллиграфии и видным визирем государства Темуридов.',
      'Навои творил на двух языках: на тюркском (староузбекском) под псевдонимом «Навои» («мелодичный», «певучий») и на фарси под псевдонимом «Фани» («бренный», «смертный»).',
      'Он на века доказал богатство, гибкость и поэтическую выразительность родного тюркского языка, создав непревзойденные шедевры мировой литературы.'
    ],
    terms: [
      {
        termUz: 'Mutafakkir',
        termRu: 'Мыслитель',
        meaningUz: 'Keng va chuqur tafakkur egasi, faylasuf olim.',
        meaningRu: 'Человек с глубоким философским пониманием мира.'
      },
      {
        termUz: 'Taxallus',
        termRu: 'Псевдоним',
        meaningUz: 'Ijodkor o‘z asarlarida qo‘llaydigan adabiy nom.',
        meaningRu: 'Литературное имя, используемое автором в произведениях.'
      },
      {
        termUz: 'Meros',
        termRu: 'Наследие',
        meaningUz: 'Ajdodlardan kelgusi avlodlarga qoladigan ma’naviy boylik.',
        meaningRu: 'Духовное и культурное богатство, переданное потомкам.'
      }
    ],
    factUz: 'Alisher Navoiy yoshligida Farididdin Attorning «Mantiq ut-tayr» («Qushlar tili») asarini yoddan bilgan va butun umr adabiyotga sadoqat bilan yashagan.',
    factRu: 'В юности Алишер Навои наизусть выучил сложнейшую философскую поэму Фаридаддина Аттара «Язык птиц» («Мантик ут-тайр»).',
    ponderQuestionUz: 'Nima uchun Navoiy o‘ziga aynan «kuy, ohang taratuvchi» degan ma’noni anglatuvchi «Navoiy» taxallusini tanlagan deb o‘ylaysiz?',
    ponderQuestionRu: 'Как вы думаете, почему поэт выбрал себе именно псевдоним «Навои», означающий «мелодичный, приносящий напев»?',
    tasks: [
      {
        level: 'A',
        levelNameUz: 'Sodda tushuncha',
        levelNameRu: 'Базовый уровень',
        taskUz: 'Navoiy qachon va qayerda tug‘ilgan? Uning ikkita taxallusini daftaringizga yozing.',
        taskRu: 'Когда и где родился Навои? Запишите в тетрадь два его литературных псевдонима.',
        hintUz: '1441-yil, Hirot. Taxalluslar: Navoiy va Foniy.',
        hintRu: '1441 год, Герат. Псевдонимы: Навои и Фани.'
      },
      {
        level: 'B',
        levelNameUz: 'Matnni tahlil qilish',
        levelNameRu: 'Аналитический уровень',
        taskUz: '«Navoiy» va «Foniy» so‘zlarining ma’nosini rus tilidagi qaysi so‘zlar eng aniq ifodalaydi? Izohlang.',
        taskRu: 'Какими русскими словами точнее всего передать смысл слов «Навои» и «Фани»? Обоснуйте.',
        hintUz: 'Navoiy — musiqiy, navobaxsh; Foniy — dunyo lazzatlariga berilmagan, kamtar inson.',
        hintRu: 'Навои — певучий, мелодичный; Фани — бренный, скромный философ.'
      },
      {
        level: 'C',
        levelNameUz: 'Ijodiy fikrlash',
        levelNameRu: 'Творческий уровень',
        taskUz: 'Agar siz shoir bo‘lganingizda o‘zingizga qanday taxallus tanlar edingiz va nega?',
        taskRu: 'Если бы вы были поэтом или писателем, какой псевдоним выбрали бы себе и почему?',
        hintUz: 'O‘z xarakteringiz yoki orzuingizga mos chiroyli o‘zbekcha so‘z tanlang.',
        hintRu: 'Выберите звучное узбекское слово, отражающее ваш характер или мечту.'
      }
    ],
    quiz: {
      questionUz: 'Alisher Navoiy turkiy tilda qaysi taxallus bilan ijod qilgan?',
      questionRu: 'Под каким псевдонимом Алишер Навои творил на тюркском (староузбекском) языке?',
      optionsUz: ['Foniy', 'Navoiy', 'Bobur', 'Gulxaniy'],
      optionsRu: ['Фани', 'Навои', 'Бабур', 'Гулхани'],
      correctIndex: 1,
      explanationUz: 'Alisher Navoiy turkiy asarlarida «Navoiy» (kuy taratuvchi), forsiy asarlarida esa «Foniy» deb imzo chekkan.',
      explanationRu: 'В тюркских произведениях поэт подписывался «Навои» («певучий»), а в персоязычных — «Фани».'
    }
  },
  {
    id: 'childhood-education',
    number: '02',
    titleUz: 'Bolaligi va ilmga muhabbati',
    titleRu: 'Детство и тяга к знаниям',
    readingTimeUz: '3 daqiqa',
    readingTimeRu: '3 мин',
    shortDescUz: 'Bo‘lajak shoirning kitobxonlik muhiti va Samarqanddagi tahsil yillari.',
    shortDescRu: 'Семья книголюбов, ранний талант и годы обучения в медресе Самарканда.',
    contentUz: [
      'Alisher Navoiy ziyoli xonadonda dunyoga kelgan. Uning otasi G‘iyosiddin Kichkina davlat arbobi, tog‘alari Mir Said Qobuliy va Muhammad Ali G‘aribiylar esa mashhur shoirlar bo‘lgan.',
      'Alisher yoshligidanoq o‘tkir zehnli va nihoyatda kitobsevar bo‘lib ulg‘aydi. U 10–12 yoshlaridayoq mustaqil she’rlar yoza boshlagan.',
      'Keyinchalik u o‘z bilimini chuqurlashtirish uchun o‘sha davrning ilm-fan markazi bo‘lgan Samarqandga borib, mashhur madrasalarda falsafa, mantiq, tilshunoslik va falakiyot ilmlarini o‘rgangan.'
    ],
    contentRu: [
      'Алишер Навои вырос в просвещенной семье. Его отец Гиясаддин Кичкина был государственным чиновником, а дяди Мир Саид Кабули и Мухаммад Али Гариби — известными поэтами.',
      'С ранних лет мальчик удивлял окружающих феноменальной памятью и любовью к чтению. Уже в 10–12 лет он начал сочинять собственные поэтические строки.',
      'Для углубления знаний Навои отправился в научную столицу региона — Самарканд, где в знаменитых медресе изучал философию, логику, языкознание и астрономию.'
    ],
    terms: [
      {
        termUz: 'Madrasa',
        termRu: 'Медресе',
        meaningUz: 'O‘rta asrlarda oliy darajadagi ta’lim beruvchi muassasa.',
        meaningRu: 'Высшее мусульманское учебное заведение эпохи средневековья.'
      },
      {
        termUz: 'Ziyo',
        termRu: 'Свет, просвещение',
        meaningUz: 'Ilm, ma’rifat va aql nuri.',
        meaningRu: 'Свет разума, науки и образованности.'
      },
      {
        termUz: 'Tafakkur',
        termRu: 'Мышление',
        meaningUz: 'Inson aqliy faoliyati, chuqur fikr yuritish qobiliyati.',
        meaningRu: 'Умственная деятельность, способность глубоко размышлять.'
      }
    ],
    factUz: 'Alisher Navoiy Samarqandda yashagan davrida mashhur olim Mavlono Fazlulloh Abullaysiy qo‘lida tahsil olgan va uni o‘zining buyuk ustozi deb bilgan.',
    factRu: 'Во время учебы в Самарканде Навои был любимым учеником великого ученого Мавлано Фазлуллаха Абу-л-Лайси.',
    ponderQuestionUz: 'Ilm olish uchun o‘z shahrini tark etib, boshqa shaharga borish o‘sha davrda qanday qiyinchiliklar bilan bog‘liq bo‘lgan?',
    ponderQuestionRu: 'С какими трудностями сталкивался юноша в XV веке, отправляясь за знаниями в другой город?',
    tasks: [
      {
        level: 'A',
        levelNameUz: 'Sodda tushuncha',
        levelNameRu: 'Базовый уровень',
        taskUz: 'Navoiy qaysi shaharga borib o‘z bilimini oshirgan? Bu shaharning o‘ziga xosligi nimada edi?',
        taskRu: 'В какой город Навои отправился учиться? В чем была особенность этого города?',
        hintUz: 'Samarqand — Temuriylar davlatining ilm va me’morchilik poytaxti.',
        hintRu: 'Самарканд — столица науки и архитектуры эпохи Темуридов.'
      },
      {
        level: 'B',
        levelNameUz: 'Matnni tahlil qilish',
        levelNameRu: 'Аналитический уровень',
        taskUz: 'Oila muhitining inson kamolotiga ta’siri haqida 3 ta jumla tuzing (o‘zbek tilida).',
        taskRu: 'Составьте 3 предложения на узбекском языке о влиянии семьи на становление личности.',
        hintUz: '«Oila — tarbiya o‘chog‘i...», «Kitobxon oilada...» kabi iboralardan foydalaning.',
        hintRu: 'Используйте выражения: «Oila — tarbiya o‘chog‘i...» (Семья — очаг воспитания).'
      },
      {
        level: 'C',
        levelNameUz: 'Ijodiy fikrlash',
        levelNameRu: 'Творческий уровень',
        taskUz: '8-sinf o‘quvchisiga zamonaviy axborot davrida qanday bilimlar eng zarur deb hisoblaysiz?',
        taskRu: 'Какие знания важнее всего для современного 8-классника в эпоху цифровых технологий?',
        hintUz: 'Chet tillari, mantiq, kompyuter savodxonligi va kitob mutolaasi haqida fikr yuriting.',
        hintRu: 'Поразмышляйте об иностранных языках, логике, критическом мышлении и чтении.'
      }
    ],
    quiz: {
      questionUz: 'Alisher Navoiy o‘z bilimini chuqurlashtirish uchun qaysi tarixiy shaharga borgan?',
      questionRu: 'В какой исторический город Навои отправился для углубления своих научных знаний?',
      optionsUz: ['Buxoro', 'Samarqand', 'Toshkent', 'Xiva'],
      optionsRu: ['Бухара', 'Самарканд', 'Ташкент', 'Хива'],
      correctIndex: 1,
      explanationUz: 'Navoiy ilm olish uchun Samarqandga borib, u yerdagi madrasalarda falsafa va tilshunoslikni o‘rgangan.',
      explanationRu: 'Навои отправился в Самарканд, славившийся своими медресе, астрономами и мыслителями.'
    }
  },
  {
    id: 'navoiy-and-boyqaro',
    number: '03',
    titleUz: 'Navoiy va Husayn Boyqaro',
    titleRu: 'Навои и Хусейн Байкара',
    readingTimeUz: '4 daqiqa',
    readingTimeRu: '4 мин',
    shortDescUz: 'Bolalik do‘stligi, davlat ishlari va madaniyatning oltin asri.',
    shortDescRu: 'Дружба с детства, государственная служба и золотой век культуры.',
    contentUz: [
      'Alisher Navoiy va bo‘lajak hukmdor Husayn Boyqaro yoshlik chog‘laridan bir madrasada birga o‘qigan qadrdon do‘stlar bo‘lishgan.',
      '1469-yilda Husayn Boyqaro Hirot taxtiga o‘tirgach, Alisher Navoiyni poytaxtga taklif qildi. Dastlab uni muhrdor, so‘ngra bosh vazir lavozimlariga tayinladi.',
      'Navoiy mansab va boylikka intilmagan. U davlat boshqaruvida adolat mezonini o‘rnatishga, xalq ahvolini yengillashtirishga, shoirlar, olimlar va hunarmandlarni qo‘llab-quvvatlashga intilgan.'
    ],
    contentRu: [
      'Алишер Навои и будущий правитель Хусейн Байкара знали друг друга с детства, обучаясь вместе в одной школе и медресе.',
      'В 1469 году, взойдя на трон Хорасана в Герате, Султан Хусейн Байкара призвал своего верного друга, назначив его сначала хранителем печати (мухрдор), а затем великим визирем.',
      'Навои никогда не искал личного обогащения. Всю власть и влияние он обратил на установление справедливости, снижение податей для народа и расцвет наук и искусств.'
    ],
    terms: [
      {
        termUz: 'Muhrdor',
        termRu: 'Хранитель печати',
        meaningUz: 'Davlatning rasmiy farmonlariga muhr bosuvchi yuqori martabali shaxs.',
        meaningRu: 'Высший чиновник, заверявший государственные указы государя.'
      },
      {
        termUz: 'Adolat',
        termRu: 'Справедливость',
        meaningUz: 'Har bir insonning haqqini tan olish, to‘g‘rilik va tenglik tamoyili.',
        meaningRu: 'Принцип правдивости, равенства и защиты прав каждого человека.'
      },
      {
        termUz: 'Homiy',
        termRu: 'Покровитель (меценат)',
        meaningUz: 'Ilm, san’at va muhtojlarga beg‘araz yordam ko‘rsatuvchi inson.',
        meaningRu: 'Человек, бескорыстно поддерживающий культуру, образование и нуждающихся.'
      }
    ],
    factUz: 'Alisher Navoiy o‘zining shaxsiy mablag‘lari hisobidan Hirot va uning atrofida o‘nlab madrasalar, kasalxonalar, kutubxonalar, ko‘priklar va karvonsaroylar qurdirgan.',
    factRu: 'На собственные средства Навои построил десятки медресе, бесплатных больниц (дар уш-шифа), мостов, караван-сараев и каналов.',
    ponderQuestionUz: 'Hukmdor bilan do‘st bo‘lish va shu bilan birga xalq manfaatini himoya qilish qanday fazilatlarni talab qiladi?',
    ponderQuestionRu: 'Какими личными качествами нужно обладать, чтобы дружить с государем и оставаться искренним защитником простого народа?',
    tasks: [
      {
        level: 'A',
        levelNameUz: 'Sodda tushuncha',
        levelNameRu: 'Базовый уровень',
        taskUz: 'Husayn Boyqaro Navoiyga qanday lavozimlarni taklif qildi?',
        taskRu: 'Какие государственные должности предложил Хусейн Байкара Алишеру Навои?',
        hintUz: 'Muhrdor va bosh vazir lavozimlari.',
        hintRu: 'Должности хранителя печати и визиря.'
      },
      {
        level: 'B',
        levelNameUz: 'Matnni tahlil qilish',
        levelNameRu: 'Аналитический уровень',
        taskUz: 'Navoiyning davlat arbobi sifatidagi asosiy shiori nima edi? Matndan javob toping.',
        taskRu: 'Каков был главный жизненный принцип Навои как государственного деятеля? Найдите ответ в тексте.',
        hintUz: 'Adolat o‘rnatish va xalq manfaatini ko‘zlash.',
        hintRu: 'Служение народу, справедливость и поддержка просвещения.'
      },
      {
        level: 'C',
        levelNameUz: 'Ijodiy fikrlash',
        levelNameRu: 'Творческий уровень',
        taskUz: '«Do‘stlik va mas’uliyat» mavzusida rus tilida o‘qiydigan do‘stingizga 4 jumladan iborat o‘zbekcha xat yozing.',
        taskRu: 'Напишите небольшую записку из 4 предложений на узбекском языке на тему «Дружба и ответственность».',
        hintUz: '«Chin do‘st har doim haqiqatni aytadi...» deb boshlang.',
        hintRu: 'Начните со слов: «Chin do‘st har doim haqiqatni aytadi...» (Истинный друг всегда говорит правду).'
      }
    ],
    quiz: {
      questionUz: 'Navoiy shaxsiy mablag‘lari hisobidan Hirotda nimalar qurdirgan?',
      questionRu: 'Что строил Навои в Герате на собственные средства?',
      optionsUz: ['Faqat o‘ziga qasrlar', 'Madrasalar, shifoxonalar va ko‘priklar', 'Faqat harbiy qal’alar', 'Savdo bozorlari'],
      optionsRu: ['Только дворцы для себя', 'Медресе, больницы и мосты', 'Только военные крепости', 'Торговые рынки'],
      correctIndex: 1,
      explanationUz: 'Navoiy buyuk homiy bo‘lib, xalq uchun shifoxonalar, madrasalar, suv inshootlari va ko‘priklar barpo ettirgan.',
      explanationRu: 'Навои был великим меценатом и построил для народа десятки бесплатных больниц, медресе и мостов.'
    }
  },
  {
    id: 'navoiy-and-uzbek-language',
    number: '04',
    titleUz: 'Navoiy va o‘zbek tili',
    titleRu: 'Навои и узбекский язык',
    readingTimeUz: '4 daqiqa',
    readingTimeRu: '4 мин',
    shortDescUz: '«Muhokamat ul-lug‘atayn» asari va turkiy tilning adabiy g‘alabasi.',
    shortDescRu: 'Труд «Спор двух языков» и исторический триумф тюркского слова.',
    contentUz: [
      'XV asrgacha Yaqin va O‘rta Sharqda she’riyat asosan fors-tojik tilida, ilm-fan esa arab tilida yozilishi an’anaga aylangan edi. Ko‘pchilik turkiy til badiiy ifodaga ojiz deb hisoblardi.',
      'Navoiy bu noto‘g‘ri qarashni butunlay sindirdi. U 1499-yilda yozgan mashhur «Muhokamat ul-lug‘atayn» («Ikki til muhokamasi») risolasida turkiy tilning boyligi, serqirraligi va sinonimlarga nihoyatda mo‘lligini ilmiy jihatdan isbotlab berdi.',
      'Navoiy turkiy tilda yaratgan shoh asarlari bilan o‘zbek adabiy tiliga poydevor qo‘ydi va unga xalqaro yuksak maqom berdi.'
    ],
    contentRu: [
      'До XV века на Ближнем и Среднем Востоке считалось само собой разумеющимся, что высокая поэзия пишется на фарси, а наука — на арабском. Многие ошибочно полагали, что тюркский язык не способен передать тончайшие движения души.',
      'Навои сокрушил этот предрассудок. В своем научном трактате 1499 года «Мухакамат ал-лугатайн» («Спор двух языков») он на сотнях примеров убедительно доказал богатство, гибкость и бесконечную глубину тюркского слова.',
      'Создав на тюркском грандиозную «Хамсу», Навои заложил гранитный фундамент узбекского литературного языка.'
    ],
    terms: [
      {
        termUz: 'Muhokama',
        termRu: 'Обсуждение, диспут',
        meaningUz: 'Fikr almashish, dalillar bilan tahlil qilish jarayoni.',
        meaningRu: 'Процесс аргументированного научного анализа.'
      },
      {
        termUz: 'Lug‘at',
        termRu: 'Словарь, лексика',
        meaningUz: 'Tildagi so‘zlar jamlanmasi yoki ularni jamlagan kitob.',
        meaningRu: 'Совокупность слов языка или книга, их систематизирующая.'
      },
      {
        termUz: 'Sinonim',
        termRu: 'Синоним',
        meaningUz: 'Shakli har xil, ammo ma’nosi bir-biriga yaqin so‘zlar.',
        meaningRu: 'Слова, различные по звучанию, но близкие по значению.'
      }
    ],
    factUz: 'Navoiy «Muhokamat ul-lug‘atayn» asarida yig‘lamoq fe’lining turkiy tildagi 10 ga yaqin nozik ma’no tuslanishini ko‘rsatib, boshqa tillarda bu qadar boy ifoda yo‘qligini ta’kidlaydi.',
    factRu: 'В своем трактате Навои привел около 10 тончайших оттенков глагола «плакать» в тюркском языке, показав непревзойденное богатство родной речи.',
    ponderQuestionUz: 'Bugungi kunda o‘z ona tilini hurmat qilish va boyitish nimalarda namoyon bo‘ladi?',
    ponderQuestionRu: 'В чем сегодня выражается искреннее уважение и забота о чистоте родного языка?',
    tasks: [
      {
        level: 'A',
        levelNameUz: 'Sodda tushuncha',
        levelNameRu: 'Базовый уровень',
        taskUz: '«Muhokamat ul-lug‘atayn» qanday ma’noni anglatadi va u qaysi yili yozilgan?',
        taskRu: 'Что означает название «Мухакамат ал-лугатайн» и в каком году был написан этот труд?',
        hintUz: '1499-yil, «Ikki til muhokamasi» degan ma’noni bildiradi.',
        hintRu: '1499 год, переводится как «Спор (суд) двух языков».'
      },
      {
        level: 'B',
        levelNameUz: 'Matnni tahlil qilish',
        levelNameRu: 'Аналитический уровень',
        taskUz: 'Turkiy tilning boyligi haqida Navoiy qanday dalillar keltirgan?',
        taskRu: 'Какие доказательства богатства тюркского языка привел Навои в своем трактате?',
        hintUz: 'Sinonimlar ko‘pligi, nozik tuyg‘ularni ifodalovchi fe’llar boyligi.',
        hintRu: 'Изобилие синонимов, образность и точность глагольных форм.'
      },
      {
        level: 'C',
        levelNameUz: 'Ijodiy fikrlash',
        levelNameRu: 'Творческий уровень',
        taskUz: 'O‘zbek tilida qaysi so‘zlar sizga eng jozibali va yoqimli eshitiladi? 5 ta so‘z tanlab, ularning ma’nosini tushuntiring.',
        taskRu: 'Какие узбекские слова кажутся вам наиболее красивыми и певучими? Выберите 5 слов и объясните их смысл.',
        hintUz: 'Masalan: mehr, quyosh, saxovat, tabassum, shukrona.',
        hintRu: 'Например: mehr (доброта), saxovat (щедрость), tabassum (улыбка).'
      }
    ],
    quiz: {
      questionUz: 'Alisher Navoiy qaysi asarida turkiy tilning boyligini ilmiy asoslab bergan?',
      questionRu: 'В каком произведении Навои научно доказал богатство и выразительность тюркского языка?',
      optionsUz: ['«Lison ut-tayr»', '«Muhokamat ul-lug‘atayn»', '«Majolis un-nafois»', '«Mahbub ul-qulub»'],
      optionsRu: ['«Лисон ут-тайр»', '«Мухакамат ал-лугатайн»', '«Маджалис ун-нафаис»', '«Махбуб ул-кулуб»'],
      correctIndex: 1,
      explanationUz: '1499-yilda yozilgan «Muhokamat ul-lug‘atayn» asarida Navoiy turkiy tilning cheksiz imkoniyatlarini isbotlagan.',
      explanationRu: 'В трактате «Мухакамат ал-лугатайн» (1499 г.) Навои блестяще доказал величие тюркского языка.'
    }
  },
  {
    id: 'navoiy-legacy-today',
    number: '05',
    titleUz: 'Navoiy merosining bugungi ahamiyati',
    titleRu: 'Значение наследия Навои сегодня',
    readingTimeUz: '3 daqiqa',
    readingTimeRu: '3 мин',
    shortDescUz: 'Zamonaviy inson, axloq, ekologiya va insonparvarlik saboqlari.',
    shortDescRu: 'Уроки гуманизма, экологии, честности и уважения для человека XXI века.',
    contentUz: [
      'Alisher Navoiy asarlari faqat o‘tmish yodgorligi emas, balki bugungi va kelajak avlod uchun ma’naviy mayoqdir.',
      'U o‘z hikmatlarida tabiatni asrash, suvni isrof qilmaslik, ustozni ota kabi e’zozlash, do‘stga sadoqatli bo‘lish va ilmni eng oliy boylik deb bilishni uqtirgan.',
      '«Olam ahlidin kimki bir ko‘ngli buzuqni shod etsa, barcha olamni obod etgandek bo‘lur» degan g‘oya har bir inson uchun yuksak ezgulik dasturidir.'
    ],
    contentRu: [
      'Произведения Навои — это не застывший музейный экспонат, а живой маяк нравственности для каждого человека XXI века.',
      'В своих поэтических строках он учил беречь природу, ценить каждую каплю чистой воды, почитать учителей, хранить верность друзьям и считать знания главным сокровищем.',
      'Его бессмертная мысль: «Тот, кто обрадует опечаленное сердце хотя бы одного человека, словно возродит и украсит весь мир» — актуальна как никогда.'
    ],
    terms: [
      {
        termUz: 'Ezgu',
        termRu: 'Добро, благородство',
        meaningUz: 'Yaxshi, xayrli va fazilatli ish yoki niyat.',
        meaningRu: 'Добродетельное, светлое намерение или поступок.'
      },
      {
        termUz: 'Saxovat',
        termRu: 'Щедрость',
        meaningUz: 'Muhtojlarga beg‘araz yordam qo‘lini cho‘zish fazilati.',
        meaningRu: 'Качество бескорыстной помощи ближним и нуждающимся.'
      },
      {
        termUz: 'Vafodorlik',
        termRu: 'Верность',
        meaningUz: 'Ahdga, do‘stlikka va vatanga sadoqat saqlash.',
        meaningRu: 'Преданность данному слову, дружбе и Родине.'
      }
    ],
    factUz: 'Alisher Navoiy asarlari jahonning 50 dan ortiq tillariga tarjima qilingan. Moskva, Tokio, Boku, Dushanbe, Shanxay va Vashington kabi yirik shaharlarda unga haykallar o‘rnatilgan.',
    factRu: 'Произведения Навои переведены более чем на 50 языков мира. Памятники великому поэту установлены в Москве, Баку, Токио, Шанхае и Вашингтоне.',
    ponderQuestionUz: 'Bugungi kunda boshqalarning ko‘nglini ko‘tarish uchun biz nimalar qila olamiz?',
    ponderQuestionRu: 'Что каждый из нас может сделать прямо сегодня, чтобы поддержать и согреть словом другого человека?',
    tasks: [
      {
        level: 'A',
        levelNameUz: 'Sodda tushuncha',
        levelNameRu: 'Базовый уровень',
        taskUz: 'Dunyoning qaysi shaharlarida Alisher Navoiyga haykal o‘rnatilgan?',
        taskRu: 'В каких мировых столицах и городах установлены памятники Алишеру Навои?',
        hintUz: 'Moskva, Tokio, Boku, Shanxay, Toshkent va boshqa shaharlarda.',
        hintRu: 'В Москве, Токио, Баку, Шанхае, Ташкенте и других городах.'
      },
      {
        level: 'B',
        levelNameUz: 'Matnni tahlil qilish',
        levelNameRu: 'Аналитический уровень',
        taskUz: 'Navoiyning «bir ko‘ngli buzuqni shod etish» haqidagi hikmatini zamonaviy maktab hayoti misolida tushuntiring.',
        taskRu: 'Объясните мысль Навои о поддержке опечаленного человека на примере школьной жизни.',
        hintUz: 'Yangi o‘quvchiga yordam berish, tushkunlikka tushgan sinfdoshni qo‘llab-quvvatlash.',
        hintRu: 'Помощь новому ученику, доброе слово однокласснику, попавшему в затруднение.'
      },
      {
        level: 'C',
        levelNameUz: 'Ijodiy fikrlash',
        levelNameRu: 'Творческий уровень',
        taskUz: '«Agar Navoiy bizning davrimizda yashaganida...» mavzusida qisqa (5-6 jumla) mulohaza yozing.',
        taskRu: 'Напишите короткое эссе (5–6 предложений) на тему «Если бы Навои жил в наше время...».',
        hintUz: 'U qanday kitoblar yozar edi? Ijtimoiy tarmoqlardan qanday foydalanar edi?',
        hintRu: 'О чем бы он писал? Как бы использовал современные технологии для просвещения?'
      }
    ],
    quiz: {
      questionUz: 'Navoiy insonning eng oliy fazilati deb nimani bilgan?',
      questionRu: 'Что Навои считал высшим благородным качеством человека?',
      optionsUz: ['Mansabdor bo‘lishni', 'Saxovat, mehr va ilmga intilishni', 'Ko‘p boylik yig‘ishni', 'Jimgina yashashni'],
      optionsRu: ['Высокий чин', 'Щедрость, доброту и стремление к знаниям', 'Накопление богатств', 'Безразличное молчание'],
      correctIndex: 1,
      explanationUz: 'Navoiy inson qadrini uning boyligi bilan emas, balki qilgan ezgu amallari va ilmi bilan o‘lchagan.',
      explanationRu: 'Поэт подчеркивал, что истинное достоинство человека заключается в доброте, просвещении и служении обществу.'
    }
  }
];

export const navoiyTimeline: TimelineEvent[] = [
  {
    year: 1441,
    yearDisplay: '1441-yil 9-fevral',
    titleUz: 'Hirotda tavallud topishi',
    titleRu: 'Рождение в Герате',
    locationUz: 'Hirot shahri (Xuroson)',
    locationRu: 'Город Герат (Хорасан)',
    descUz: 'Temuriylar saltanatining madaniy poytaxti bo‘lgan Hirotda G‘iyosiddin Kichkina oilasida dunyoga keldi.',
    descRu: 'Родился в семье образованного чиновника Гиясаддина Кичкина в столице Хорасана — Герате.',
    factUz: 'Tug‘ilganida unga Nizomiddin («dinning tartib-intizomi») ismi berilgan, Alisher esa keyinchalik mashhur bo‘lgan.',
    factRu: 'При рождении ему дали имя Низамаддин, а имя Алишер закрепилось позже.',
    questionUz: 'Alisher Navoiy qaysi asrda dunyoga kelgan?',
    questionRu: 'В каком веке родился Алишер Навои?',
    questionOptionsUz: ['XIV asrda', 'XV asrda', 'XVI asrda', 'XII asrda'],
    questionOptionsRu: ['В XIV веке', 'В XV веке', 'В XVI веке', 'В XII веке'],
    correctOptionIndex: 1
  },
  {
    year: 1447,
    yearDisplay: '1447–1453-yillar',
    titleUz: 'Ilk she’riy mashqlar va Farididdin Attor mutolaasi',
    titleRu: 'Первые стихи и изучение Аттара',
    locationUz: 'Mashhad va Hirot',
    locationRu: 'Мешхед и Герат',
    descUz: 'Yosh Alisher fors va turkiy tillarda she’rlar yoza boshladi. «Mantiq ut-tayr» dostonini butunlay yod oldi.',
    descRu: 'Юный Алишер начинает слагать стихи и наизусть заучивает бессмертную суфийскую поэму Аттара.',
    factUz: 'Shoir Lutfiy yosh Alisherning bir baytini eshitib: «Agar imkonim bo‘lsa edi, o‘zimning 10–12 ming baytlik turkiy she’rimni shu birgina baytga alishgan bo‘lardim», deb tan bergan.',
    factRu: 'Знаменитый поэт Лутфи, услышав юношеский бейт Навои, воскликнул, что отдал бы тысячи своих стихов за эти строки.',
    questionUz: 'Mashhur shoir Lutfiy yosh Navoiyning nimasiga yuksak baho bergan?',
    questionRu: 'Чем восхитился старейшина поэтов Лутфи при встрече с юным Навои?',
    questionOptionsUz: ['Chiroyli kiyimiga', 'Bitta yozgan go‘zal baytiga', 'Qilichbozligiga', 'Rasm chizishiga'],
    questionOptionsRu: ['Красивой одеждой', 'Одним изумительным поэтическим двустишием', 'Фехтованием', 'Рисунком'],
    correctOptionIndex: 1
  },
  {
    year: 1464,
    yearDisplay: '1464–1469-yillar',
    titleUz: 'Samarqanddagi tahsil davri',
    titleRu: 'Годы учебы в Самарканде',
    locationUz: 'Samarqand',
    locationRu: 'Самарканд',
    descUz: 'Ulug‘bek madrasasida mashhur mudarrislar qo‘lida fiqh, tafsir, mantiq, falsafa va adabiyot ilmlarini o‘rgandi.',
    descRu: 'Обучение в медресе Улугбека у крупнейших ученых эпохи: углубленное изучение логики, риторики и права.',
    factUz: 'Samarqand o‘sha paytda astronomiya va adabiyot markazi bo‘lib, Navoiy bu yerda buyuk olim Fazlulloh Abullaysiydan ta’lim olgan.',
    factRu: 'В Самарканде Навои сформировался как всесторонне развитый ученый-энциклопедист.',
    questionUz: 'Navoiy Samarqandda qaysi mashhur dargohda tahsil olgan?',
    questionRu: 'В каком знаменитом научном центре учился Навои в Самарканде?',
    questionOptionsUz: ['Madrasada', 'Harbiy qismda', 'Bozorda', 'Dengiz portida'],
    questionOptionsRu: ['В медресе', 'В военной части', 'На базаре', 'В морском порту'],
    correctOptionIndex: 0
  },
  {
    year: 1469,
    yearDisplay: '1469-yil',
    titleUz: 'Husayn Boyqaro taxtga chiqishi va Hirotga qaytish',
    titleRu: 'Восшествие Хусейна Байкары и возвращение в Герат',
    locationUz: 'Hirot',
    locationRu: 'Герат',
    descUz: 'Navoiy do‘sti Husayn Boyqaro chaqirig‘i bilan Hirotga qaytib, davlat ishlariga faol kirishdi.',
    descRu: 'По зову друга детства Султана Хусейна Навои возвращается в Герат и поступает на государственную службу.',
    factUz: 'Husayn Boyqaro unga «Hiloliy» unvonini berib, rasmiy farmonlar muhrini ishonib topshirgan.',
    factRu: 'Султан присвоил поэту высшие почести и доверил государственную печать.',
    questionUz: 'Husayn Boyqaro Navoiyga kim bo‘lgan?',
    questionRu: 'Кем приходился Хусейн Байкара Алишеру Навои?',
    questionOptionsUz: ['Bolalik do‘sti va hukmdor', 'Tog‘asi', 'Ukasi', 'Begona kishi'],
    questionOptionsRu: ['Другом детства и государем', 'Дядей', 'Младшим братом', 'Незнакомцем'],
    correctOptionIndex: 0
  },
  {
    year: 1483,
    yearDisplay: '1483–1485-yillar',
    titleUz: '«Xamsa» — Besh dostonning yaratilishi',
    titleRu: 'Создание бессмертной «Хамсы»',
    locationUz: 'Hirot',
    locationRu: 'Герат',
    descUz: 'Bor-yo‘g‘i ikki yil ichida turkiy tilda birinchi marta beshta buyuk dostonni yozib tugatdi (50 000 dan ziyod misra).',
    descRu: 'Всего за два года Навои впервые в истории тюркоязычной поэзии создал колоссальную «Хамсу» (более 50 000 строк).',
    factUz: 'Husayn Boyqaro Navoiyning dostonlarini o‘qigach, ehtirom belgisi sifatida shoirni o‘zining shaxsiy otiga mindirib, jilovdor bo‘lib Hirot ko‘chalarida yurgan.',
    factRu: 'В знак бескрайнего восхищения правитель посадил Навои на своего боевого коня и лично вел его под уздцы по улицам Герата.',
    questionUz: 'Navoiy «Xamsa»ni necha yilda yozib tugatgan?',
    questionRu: 'За сколько лет Навои завершил написание всех пяти поэм «Хамсы»?',
    questionOptionsUz: ['2 yilda', '20 yilda', '10 yilda', '1 oyda'],
    questionOptionsRu: ['За 2 года', 'За 20 лет', 'За 10 лет', 'За 1 месяц'],
    correctOptionIndex: 0
  },
  {
    year: 1499,
    yearDisplay: '1499-yil',
    titleUz: '«Muhokamat ul-lug‘atayn» asarining yozilishi',
    titleRu: 'Создание трактата «Мухакамат ал-лугатайн»',
    locationUz: 'Hirot',
    locationRu: 'Герат',
    descUz: 'O‘zbek tili va adabiyotining shon-sharafi uchun kurashuvchi muhim ilmiy risola dunyoga keldi.',
    descRu: 'Выходит научный манифест, доказывающий непреходящую красоту и богатство тюркского языка.',
    factUz: 'Bu asar hozirgi kunda ham tilshunoslikning durdonasi hisoblanadi.',
    factRu: 'Этот труд и сегодня изучается во всем мире как памятник компаративистики и социолингвистики.',
    questionUz: 'Bu asarning bosh maqsadi nima edi?',
    questionRu: 'Какова была главная цель этого труда?',
    questionOptionsUz: ['Ona tilining boyligini isbotlash', 'Boshqa tillarni kamsitish', 'Faqat she’r yozish', 'Shahar xaritasini chizish'],
    questionOptionsRu: ['Доказать богатство родного языка', 'Унизить другие языки', 'Просто написать стихи', 'Нарисовать карту города'],
    correctOptionIndex: 0
  },
  {
    year: 1501,
    yearDisplay: '1501-yil 3-yanvar',
    titleUz: 'Buyuk shoirning boqiylikka rixlati',
    titleRu: 'Уход в вечность великого мыслителя',
    locationUz: 'Hirot',
    locationRu: 'Герат',
    descUz: 'Alisher Navoiy 60 yoshida Hirotda vafot etdi. U butun insoniyatga tengsiz adabiy va ma’rifiy xazina qoldirdi.',
    descRu: 'Алишер Навои скончался в Герате в возрасте 60 лет, оставив человечеству неисчерпаемую сокровищницу мысли.',
    factUz: 'Shoir qabri Hirot shahridagi o‘zi barpo ettirgan «Ixlosiya» majmuasida joylashgan.',
    factRu: 'Усыпальница поэта находится в Герате в архитектурном ансамбле «Ихласия», построенном им самим.',
    questionUz: 'Navoiy qaysi shaharda dafn etilgan?',
    questionRu: 'В каком городе находится усыпальница Алишера Навои?',
    questionOptionsUz: ['Hirotda', 'Toshkentda', 'Parijda', 'Rimda'],
    questionOptionsRu: ['В Герате', 'В Ташкенте', 'В Париже', 'В Риме'],
    correctOptionIndex: 0
  }
];

export const historicalPlaces: HistoricalPlace[] = [
  {
    id: 'herat',
    nameUz: 'Hirot',
    nameRu: 'Герат',
    coordinates: { x: 42, y: 55 },
    roleUz: 'Navoiyning vatani va poytaxt shahar',
    roleRu: 'Родина Навои и культурная столица',
    descUz: 'XV asrda Temuriylar davlatining eng yirik ilmiy va madaniy markazi bo‘lgan. Navoiy shu yerda tug‘ilgan, ijod qilgan va ulkan bunyodkorlik ishlarini olib borgan.',
    descRu: 'Крупнейший очаг науки и искусств XV века. Здесь Навои родился, творил, служил визирем и возвел десятки архитектурных комплексов.',
    monumentsUz: ['Ixlosiya madrasasi', 'Shifoxona (Dor ush-shifo)', 'Injil kanali va ko‘prigi'],
    monumentsRu: ['Медресе Ихласия', 'Госпиталь (Дар уш-шифа)', 'Канал Инджил и мост'],
    significanceUz: 'Sharq Renessansining yuragi.',
    significanceRu: 'Сердце Восточного Ренессанса.'
  },
  {
    id: 'samarkand',
    nameUz: 'Samarqand',
    nameRu: 'Самарканд',
    coordinates: { x: 55, y: 35 },
    roleUz: 'Ilm va tahsil maskani',
    roleRu: 'Город образования и юности',
    descUz: 'Amir Temur poytaxti, Mirzo Ulug‘bek akademiyasi joylashgan afsonaviy shahar. Navoiy bu yerda madrasalarda tahsil olib, olimlar davrasida o‘z bilimini kamolga yetkazgan.',
    descRu: 'Столица Амира Темура и академии Улугбека. Здесь Навои провел молодые годы, постигая мудрость в медресе и общаясь с выдающимися учеными.',
    monumentsUz: ['Ulug‘bek madrasasi', 'Bibixonim jome masjidi', 'Shohi Zinda'],
    monumentsRu: ['Медресе Улугбека', 'Мечеть Биби-Ханым', 'Шахи-Зинда'],
    significanceUz: 'Navoiy tafakkurini charxlagan ilmiy maktab.',
    significanceRu: 'Академическая колыбель мыслителя.'
  },
  {
    id: 'mashhad',
    nameUz: 'Mashhad',
    nameRu: 'Мешхед',
    coordinates: { x: 30, y: 48 },
    roleUz: 'Yoshlik yillari va kitobxonlik',
    roleRu: 'Отрочество и книжная культура',
    descUz: 'Navoiy oilasi notinch davrlarda bu yerda yashagan. Alisher Mashhad kutubxonalarida mumtoz qo‘lyozmalarni mutolaa qilgan.',
    descRu: 'В юные годы семья поэта временно жила здесь. Навои днями напролет изучал редчайшие манускрипты в библиотеках Мешхеда.',
    monumentsUz: ['Gavharshod begim masjidi', 'Kutubxonalar majmuasi'],
    monumentsRu: ['Мечеть Гавхаршад', 'Библиотечные фонды'],
    significanceUz: 'Mumtoz she’riyat bilan erta tanishuv maskani.',
    significanceRu: 'Раннее знакомство с классической поэзией.'
  },
  {
    id: 'astrabad',
    nameUz: 'Astrobod',
    nameRu: 'Астрабад',
    coordinates: { x: 22, y: 42 },
    roleUz: 'Hokimlik davri',
    roleRu: 'Период губернаторства',
    descUz: 'Siyosiy fitnalar tufayli Husayn Boyqaro Navoiyni Astrobod viloyatiga hokim etib tayinlagan (1487–1489). Navoiy bu yerda ham xalq farovonligi uchun xizmat qilgan.',
    descRu: 'В 1487–1489 гг. в результате дворцовых интриг Навои был направлен губернатором этой провинции, где также проявил заботу о жителях.',
    monumentsUz: ['Karvonsaroylar', 'Bog‘lar va sug‘orish tarmoqlari'],
    monumentsRu: ['Караван-сараи', 'Сады и оросительные каналы'],
    significanceUz: 'Sabr va vatanparvarlik sinovi.',
    significanceRu: 'Испытание мудрости и стойкости.'
  },
  {
    id: 'marv',
    nameUz: 'Marv',
    nameRu: 'Мерв',
    coordinates: { x: 48, y: 45 },
    roleUz: 'Tarixiy madaniyat chorrahasi',
    roleRu: 'Перекресток культур Шелкового пути',
    descUz: 'Ipak yo‘lidagi qadimiy shahar. Navoiy Marv orqali bir necha bor safar qilgan va mahalliy shoirlar bilan adabiy munozaralar o‘tkazgan.',
    descRu: 'Древнейший оазис Шелкового пути, где Навои неоднократно бывал, встречаясь с учеными и поэтами.',
    monumentsUz: ['Sulton Sanjar maqbarasi', 'Qadimgi kutubxona xarobalari'],
    monumentsRu: ['Мавзолей Султана Санджара', 'Древние библиотеки'],
    significanceUz: 'Sharq adabiy muloqot markazi.',
    significanceRu: 'Центр литературного диалога.'
  }
];
