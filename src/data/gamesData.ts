export interface QuizQuestion {
  id: string;
  questionUz: string;
  questionRu: string;
  optionsUz: string[];
  optionsRu: string[];
  correctIndex: number;
  explanationUz: string;
  explanationRu: string;
}

export const navoiyQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    questionUz: 'Alisher Navoiy qaysi yilda va qaysi shaharda tavallud topgan?',
    questionRu: 'В каком году и в каком городе родился Алишер Навои?',
    optionsUz: ['1441-yil Hirotda', '1336-yil Keshda', '1483-yil Samarqandda', '1405-yil Buxoroda'],
    optionsRu: ['В 1441 году в Герате', 'В 1336 году в Кеше', 'В 1483 году в Самарканде', 'В 1405 году в Бухаре'],
    correctIndex: 0,
    explanationUz: 'Navoiy 1441-yil 9-fevralda Hirot shahrida tug‘ilgan.',
    explanationRu: 'Алишер Навои родился 9 февраля 1441 года в Герате.'
  },
  {
    id: 'q2',
    questionUz: 'Navoiyning turkiy tilda yaratgan besh buyuk doston turkumi qanday ataladi?',
    questionRu: 'Как называется свод из пяти великих поэм Навои на тюркском языке?',
    optionsUz: ['«Devoni hikmat»', '«Xamsa»', '«Boburnoma»', '«Qutadg‘u bilig»'],
    optionsRu: ['«Девони хикмат»', '«Хамса»', '«Бабур-наме»', '«Кутадгу билиг»'],
    correctIndex: 1,
    explanationUz: '«Xamsa» arabcha «beshlik» degan ma’noni anglatadi va beshta dostonni o‘z ichiga oladi.',
    explanationRu: '«Хамса» означает «Пятерица» — грандиозный цикл из пяти поэм.'
  },
  {
    id: 'q3',
    questionUz: '«Farhod va Shirin» dostonida Farhod qaysi hunarni chuqur egallagan?',
    questionRu: 'Какое созидательное ремесло в совершенстве освоил царевич Фархад?',
    optionsUz: ['Tosh yo‘nish (toshkesarlik)', 'Savdogarlik', 'Dengizchilik', 'Zargarlik'],
    optionsRu: ['Камнерезное дело', 'Торговлю', 'Мореплавание', 'Ювелирное дело'],
    correctIndex: 0,
    explanationUz: 'Farhod tosh yo‘nish hunarini o‘rganib, tog‘ni talqon qilib suv chiqargan.',
    explanationRu: 'Фархад освоил мастерство камнетеса и прорубил скалу ради питьевой воды.'
  },
  {
    id: 'q4',
    questionUz: 'Navoiy forsiy tildagi asarlariga qanday taxallus qo‘ygan?',
    questionRu: 'Какой литературный псевдоним использовал Навои для сочинений на фарси?',
    optionsUz: ['Navoiy', 'Foniy', 'Furqat', 'Muqimiy'],
    optionsRu: ['Навои', 'Фани', 'Фуркат', 'Мукими'],
    correctIndex: 1,
    explanationUz: 'Fors-tojik tilidagi she’rlarida u «Foniy» (kamtar, fano bo‘luvchi) taxallusini ishlatgan.',
    explanationRu: 'Для персидских газелей и поэм он избрал псевдоним «Фани» («бренный мыслитель»).'
  },
  {
    id: 'q5',
    questionUz: 'O‘zbek tilining boyligini ilmiy jihatdan isbotlagan asar qaysi?',
    questionRu: 'Какой трактат Навои научно обосновал богатство и выразительность узбекского языка?',
    optionsUz: ['«Muhokamat ul-lug‘atayn»', '«Mahbub ul-qulub»', '«Majolis un-nafois»', '«Lison ut-tayr»'],
    optionsRu: ['«Мухакамат ал-лугатайн»', '«Махбуб ул-кулуб»', '«Маджалис ун-нафаис»', '«Лисон ут-тайр»'],
    correctIndex: 0,
    explanationUz: '1499-yilda yozilgan «Muhokamat ul-lug‘atayn» ona tilimizning buyuk himoyasidir.',
    explanationRu: 'В труде «Спор двух языков» (1499 г.) раскрыто великолепие родного слова.'
  },
  {
    id: 'q6',
    questionUz: 'Navoiy bilan yoshlikdan birga o‘qigan va keyinchalik hukmdor bo‘lgan do‘sti kim?',
    questionRu: 'Кто был другом детства Навои по медресе, ставшим правителем Хорасана?',
    optionsUz: ['Husayn Boyqaro', 'Ulug‘bek', 'Zahiriddin Bobur', 'Shohrux Mirzo'],
    optionsRu: ['Хусейн Байкара', 'Улугбек', 'Захириддин Бабур', 'Шахрух Мирзо'],
    correctIndex: 0,
    explanationUz: 'Sulton Husayn Boyqaro Navoiyning maktabdosh do‘sti va homiysi bo‘lgan.',
    explanationRu: 'Султан Хусейн Байкара дружил с Навои с юных лет и приблизил его к государственным делам.'
  },
  {
    id: 'q7',
    questionUz: '«Odamiy ersang demagil odamiy, Onikim yo‘q ...» Ushbu mashhur hikmat qanday tugaydi?',
    questionRu: 'Чем завершается знаменитый афоризм Навои: «Odamiy ersang demagil odamiy, Onikim yo‘q ...»?',
    optionsUz: ['xalq g‘amidin g‘ami', 'cho‘ntagida puli', 'chiroyli uyi', 'baland martabasi'],
    optionsRu: ['xalq g‘amidin g‘ami', 'cho‘ntagida puli', 'chiroyli uyi', 'baland martabasi'],
    correctIndex: 0,
    explanationUz: 'Misraning to‘liq shakli: «Onikim yo‘q xalq g‘amidin g‘ami» — el dardi bilan yashamagan odam emas.',
    explanationRu: '«...кого не заботит боль и судьба народа» — квинтэссенция гуманизма мыслителя.'
  },
  {
    id: 'q8',
    questionUz: '«Xamsa»ning so‘nggi, beshinchi dostoni qanday nomlanadi?',
    questionRu: 'Как называется заключительная, пятая поэма цикла «Хамса»?',
    optionsUz: ['«Saddi Iskandariy»', '«Hayrat ul-abror»', '«Sab’ai sayyor»', '«Farhod va Shirin»'],
    optionsRu: ['«Вал Искандара»', '«Смятение праведных»', '«Семь планет»', '«Фархад и Ширин»'],
    correctIndex: 0,
    explanationUz: 'Beshinchi doston — «Saddi Iskandariy» bo‘lib, 1485-yilda yozilgan.',
    explanationRu: 'Пятая поэма — «Вал Искандара» (1485 г.), повествующая об Александре Македонском.'
  },
  {
    id: 'q9',
    questionUz: 'Navoiy qaysi shaharda o‘z mablag‘lari hisobidan shifoxona, madrasa va ko‘priklar qurdirgan?',
    questionRu: 'В каком городе Навои на собственные средства строил больницы, каналы и медресе?',
    optionsUz: ['Hirotda', 'Rimda', 'Qohirada', 'Parijda'],
    optionsRu: ['В Герате', 'В Риме', 'В Каире', 'В Париже'],
    correctIndex: 0,
    explanationUz: 'Navoiy poytaxt Hirotda «Ixlosiya», «Shifoiya» va boshqa ko‘plab xalq inshootlarini barpo etgan.',
    explanationRu: 'Навои вел грандиозное благотворительное строительство в Герате.'
  },
  {
    id: 'q10',
    questionUz: 'Navoiy asarlarida qo‘llangan so‘z boyligi qanchaga teng?',
    questionRu: 'Каков объем словарного запаса Навои в его литературных трудах?',
    optionsUz: ['26 000 dan ortiq noyob so‘z', '5 000 so‘z', '1 000 so‘z', '50 000 so‘z'],
    optionsRu: ['Более 26 000 уникальных слов', '5 000 слов', '1 000 слов', '50 000 слов'],
    correctIndex: 0,
    explanationUz: 'Olimlarning hisob-kitobiga ko‘ra, Navoiy 26 000 dan ziyod unikal so‘z qo‘llagan.',
    explanationRu: 'Исследования доказали, что лексикон Навои составил свыше 26 000 уникальных слов.'
  }
];

export const wordHunterPairs = [
  { uz: 'Ilm', ru: 'Знание' },
  { uz: 'Do‘stlik', ru: 'Дружба' },
  { uz: 'Adolat', ru: 'Справедливость' },
  { uz: 'Mehr', ru: 'Доброта' },
  { uz: 'Hikmat', ru: 'Мудрость' },
  { uz: 'Ma’rifat', ru: 'Просвещение' },
  { uz: 'Saxovat', ru: 'Щедрость' },
  { uz: 'Sadoqat', ru: 'Верность' },
  { uz: 'Tavozu', ru: 'Скромность' },
  { uz: 'Qanoat', ru: 'Умеренность' }
];

export const aphorismsToUnderstand = [
  {
    id: 'aph-1',
    textUz: 'Tilga ixtiyorsiz — elga e’tiborsiz.',
    textRu: 'Кто не сдержан в языке — к тому нет уважения в народе.',
    meaningUz: 'O‘z so‘zini o‘ylab gapirmaydigan, og‘ziga kelganini aytadigan insonni hech kim hurmat qilmaydi.',
    meaningRu: 'Человек, не следящий за своей речью, быстро теряет авторитет и доверие окружающих.',
    optionsUz: [
      'So‘zlashdan oldin har bir fikrni o‘ylab aytish zarur',
      'Ko‘p gapirgan odam hammaga yoqadi',
      'Faqat baland ovozda gapirish kerak'
    ],
    optionsRu: [
      'Перед тем как сказать слово, нужно хорошо подумать',
      'Тот, кто говорит без умолку, нравится всем',
      'Нужно всегда говорить громким голосом'
    ],
    correctIndex: 0
  },
  {
    id: 'aph-2',
    textUz: 'Bilmaganni so‘rab o‘rgangan olim, orlanib so‘ramagan o‘ziga zolim.',
    textRu: 'Тот, кто спрашивает о неведомом — становится ученым; кто стыдится спросить — сам себе враг.',
    meaningUz: 'Bilmagan narsani uyalmasdan so‘rash insonni bilimli qiladi, so‘rashdan or qilish esa nodonlikka olib keladi.',
    meaningRu: 'Стеснение спросить о непонятном оставляет человека в невежестве, тогда как любознательность ведет к мудрости.',
    optionsUz: [
      'Bilmagan narsani ustoz va do‘stlardan so‘rab o‘rganishdan uyalmaslik kerak',
      'Hech qachon hech kimdan yordam so‘ramaslik kerak',
      'Savol berish faqat kichik bolalarga yarashadi'
    ],
    optionsRu: [
      'Никогда не стыдно спрашивать учителей и товарищей, чтобы узнать истину',
      'Никогда ни у кого не нужно просить разъяснений',
      'Задавать вопросы прилично только маленьким детям'
    ],
    correctIndex: 0
  },
  {
    id: 'aph-3',
    textUz: 'Yaxshi xulq — inson bezagi, shirin so‘z — ko‘ngil malhami.',
    textRu: 'Добронравие — украшение человека, ласковое слово — бальзам для сердца.',
    meaningUz: 'Odamning eng go‘zal qiyofasi uning odobi va shirin muomalasida namoyon bo‘ladi.',
    meaningRu: 'Истинное благородство выражается в добром нраве и мягком, уважительном слове.',
    optionsUz: [
      'Odobli va shirinso‘z bo‘lish boshqalarga quvonch keltiradi',
      'Qimmatbaho kiyim insonning eng katta boyligidir',
      'Kam gapirib doim qovog‘ini solib yurish kerak'
    ],
    optionsRu: [
      'Вежливость и доброе слово дарят радость и душевный покой людям',
      'Дорогая одежда — главное достоинство человека',
      'Нужно всегда быть угрюмым и молчаливым'
    ],
    correctIndex: 0
  }
];

export const unscrambleLines = [
  {
    id: 'unscramble-1',
    hintUz: 'Til odobi haqidagi Navoiy hikmati',
    hintRu: 'Мудрость Навои о культуре речи',
    words: ['So‘zni', 'ko‘ngilda', 'pishirmaguncha', 'tilga', 'keltirma'],
    translationRu: 'Не взвесив слово в сердце — не выпускай его с языка.'
  },
  {
    id: 'unscramble-2',
    hintUz: 'Inson qadri haqidagi buyuk bayt',
    hintRu: 'Великий бейт о достоинстве человека',
    words: ['Odamiy', 'ersang', 'demagil', 'odamiy'],
    translationRu: 'Если человеком зовешься — не считай человеком того...'
  },
  {
    id: 'unscramble-3',
    hintUz: 'Ilm va donishmandlik haqida',
    hintRu: 'Об учености и знании',
    words: ['Ilm', 'o‘rganish', 'inson', 'uchun', 'eng', 'oliy', 'saodatdir'],
    translationRu: 'Обретение знаний — наивысшее благо для человека.'
  }
];

export const guessWhoCharacters = [
  {
    id: 'char-1',
    nameUz: 'Farhod',
    nameRu: 'Фархад',
    cluesUz: [
      '1. U podshohning o‘g‘li bo‘lgan, lekin saroyda bekordan-bekor o‘tirishni yoqtirmagan.',
      '2. U tosh yo‘nish, me’morlik va muhandislik hunarlarini qunt bilan o‘rgangan.',
      '3. U sevgan qizi va xalq manfaati uchun qora tog‘ni kulong bilan yorib ariq qazigan.',
      '4. U Navoiy «Xamsa»sining ikkinchi dostonining bosh qahramonidir.'
    ],
    cluesRu: [
      '1. Он был сыном царя, но ненавидел праздность во дворце.',
      '2. Он с усердием освоил мастерство камнереза, зодчего и инженера.',
      '3. Ради народа и возлюбленной он пробил гранитную скалу киркой, пустив воду.',
      '4. Он главный герой второй поэмы «Хамсы» Навои.'
    ],
    optionsUz: ['Farhod', 'Majnun', 'Bahrom', 'Iskandar'],
    optionsRu: ['Фархад', 'Меджнун', 'Бахрам', 'Искандар']
  },
  {
    id: 'char-2',
    nameUz: 'Husayn Boyqaro',
    nameRu: 'Хусейн Байкара',
    cluesUz: [
      '1. U Temuriylar sulolasining vakili bo‘lib, 1469-yildan Hirot taxtini boshqargan.',
      '2. U Alisher Navoiy bilan bolalikdan bir maktabda tahsil olgan qadrdon do‘st bo‘lgan.',
      '3. U Navoiyni o‘zining muhrdori va bosh vaziri etib tayinlagan.',
      '4. U Navoiyning turkiy til va madaniyatni rivojlantirishdagi barcha xayrli ishlariga homiylik qilgan.'
    ],
    cluesRu: [
      '1. Представитель династии Темуридов, правивший Хорасаном с 1469 года.',
      '2. С детства учился вместе с Алишером Навои в одной школе.',
      '3. Назначил поэта хранителем государственной печати и верховным визирем.',
      '4. Всячески покровительствовал культуре и литературе.'
    ],
    optionsUz: ['Husayn Boyqaro', 'Amir Temur', 'Mirzo Ulug‘bek', 'Zahiriddin Bobur'],
    optionsRu: ['Хусейн Байкара', 'Амир Темур', 'Мирзо Улугбек', 'Захириддин Бабур']
  },
  {
    id: 'char-3',
    nameUz: 'Shirin',
    nameRu: 'Ширин',
    cluesUz: [
      '1. U Armaniston hukmdori Mehinbonuning jiyani bo‘lgan go‘zal malika.',
      '2. U xalqining suvsizlikdan qiynalayotganini ko‘rib chuqur qayg‘urgan.',
      '3. Uning qalbi pok, so‘zida sodiq va mard insonlarni qadrlovchi edi.',
      '4. U Farhodning samimiy va fidokorona sevgisiga vafodor bo‘lib qolgan.'
    ],
    cluesRu: [
      '1. Прекрасная царевна, племянница правительницы Армении Мехинбану.',
      '2. Глубоко переживала за народ, страдающий от безводья.',
      '3. Ее сердце покорило не богатство, а благородный созидательный подвиг.',
      '4. Героиня великой поэмы о верности и чистой любви.'
    ],
    optionsUz: ['Shirin', 'Layli', 'Dilorom', 'Bibixonim'],
    optionsRu: ['Ширин', 'Лейли', 'Дилорам', 'Биби-Ханым']
  }
];

export const duelQuestions = [
  {
    qUz: 'Alisher Navoiy qaysi yili tug‘ilgan?',
    qRu: 'В каком году родился Алишер Навои?',
    options: ['1441', '1483', '1501', '1336'],
    correct: 0
  },
  {
    qUz: '«Xamsa» dostonlari soni nechta?',
    qRu: 'Сколько поэм входит в цикл «Хамса»?',
    options: ['5 ta', '7 ta', '4 ta', '10 ta'],
    correct: 0
  },
  {
    qUz: 'Navoiy qaysi tilda «Foniy» taxallusi bilan yozgan?',
    qRu: 'На каком языке Навои писал под псевдонимом «Фани»?',
    options: ['Fors-tojik tilida', 'Turkiy tilida', 'Arab tilida', 'Lotin tilida'],
    correct: 0
  },
  {
    qUz: 'Tog‘ni teshib suv chiqargan qahramon kim?',
    qRu: 'Какой герой пробил гору и пустил воду?',
    options: ['Farhod', 'Qays', 'Bahrom', 'Iskandar'],
    correct: 0
  },
  {
    qUz: '1499-yilda yozilgan tilshunoslik asari qaysi?',
    qRu: 'Какой лингвистический труд был создан в 1499 году?',
    options: ['«Muhokamat ul-lug‘atayn»', '«Boburnoma»', '«Devon»', '«Xamsa»'],
    correct: 0
  },
  {
    qUz: 'Navoiy qabri qaysi shaharda joylashgan?',
    qRu: 'В каком городе находится усыпальница Навои?',
    options: ['Hirot', 'Samarqand', 'Buxoro', 'Toshkent'],
    correct: 0
  }
];
