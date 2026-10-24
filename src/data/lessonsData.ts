export interface LessonUnit {
  id: string;
  order: number;
  titleUz: string;
  titleRu: string;
  duration: string;
  level: string;
  goalUz: string;
  goalRu: string;
  outcomeUz: string;
  outcomeRu: string;
  recitationSnippetUz: string;
  recitationSnippetRu: string;
  stages: {
    titleUz: string;
    titleRu: string;
    contentUz: string;
    contentRu: string;
  }[];
  vocabulary: {
    wordUz: string;
    wordRu: string;
    usageUz: string;
    usageRu: string;
  }[];
  tasks: {
    level: 'A' | 'B' | 'C';
    nameUz: string;
    nameRu: string;
    instructionUz: string;
    instructionRu: string;
    sampleAnswerUz: string;
    sampleAnswerRu: string;
  }[];
  quiz: {
    questionUz: string;
    questionRu: string;
    optionsUz: string[];
    optionsRu: string[];
    correctIndex: number;
    explanationUz: string;
    explanationRu: string;
  };
}

export const lessonsData: LessonUnit[] = [
  {
    id: 'lesson-1',
    order: 1,
    titleUz: 'Alisher Navoiy — buyuk so‘z san’atkori',
    titleRu: 'Алишер Навои — великий мастер слова',
    duration: '45 daqiqa',
    level: '8-sinf (Rusiyzabon sinflar)',
    goalUz: 'Alisher Navoiy shaxsi va uning o‘zbek adabiyotidagi o‘rni haqida tushuncha berish, yangi leksikani o‘zlashtirish.',
    goalRu: 'Познакомить учащихся с личностью Алишера Навои и его ролью в литературе, освоить базовую культурологическую лексику.',
    outcomeUz: 'O‘quvchilar Navoiy haqida o‘zbek tilida 4-5 jumla tuza oladilar, yangi so‘zlarni nutqda qo‘llaydilar.',
    outcomeRu: 'Учащиеся смогут составить 4–5 связных предложений о поэте на узбекском языке и правильно использовать новые термины.',
    recitationSnippetUz: 'Orazin yopqoch ko‘zumdin sochilur har lahza yosh,\nBo‘ylakim paydo bo‘lur yulduz, nihon bo‘lg‘och quyosh.',
    recitationSnippetRu: 'Лишь лик закроешь — слезы из очей моих польются вновь,\nТак звезды светят в небесах, когда закатится любовь.',
    stages: [
      {
        titleUz: '1. Kirish va faollashtirish (5 daqiqa)',
        titleRu: '1. Вводная разминка (5 минут)',
        contentUz: 'Savol-javob: Siz Alisher Navoiy haqida nimalarni bilasiz? U qachon va qayerda yashagan? Uning qaysi asarlarini eshitgansiz?',
        contentRu: 'Блиц-беседа: Что вам известно об Алишере Навои? В каком веке и где он жил? Названия каких его произведений вы слышали?'
      },
      {
        titleUz: '2. Yangi mavzu bayoni (15 daqiqa)',
        titleRu: '2. Изложение новой темы (15 минут)',
        contentUz: 'Alisher Navoiy 1441-yilda Hirotda tug‘ilgan. U buyuk shoir, davlat arbobi va mutafakkirdir. Navoiy turkiy tilda «Xamsa» — beshta doston yaratgan birinchi shoirdir.',
        contentRu: 'Алишер Навои родился в 1441 году в Герате. Он был великим мыслителем и визирем. Именно Навои впервые создал на тюркском грандиозную «Хамсу» из пяти поэм.'
      },
      {
        titleUz: '3. Amaliy mashg‘ulot va mustahkamlash (20 daqiqa)',
        titleRu: '3. Практическая работа (20 минут)',
        contentUz: 'Lug‘atdagi yangi so‘zlar bilan gaplar tuzish, darajali topshiriqlarni (A, B, C) bajarish va mini-testni yechish.',
        contentRu: 'Составление предложений с новыми словами, дифференцированная работа по уровням (A, B, C) и прохождение проверочного теста.'
      }
    ],
    vocabulary: [
      {
        wordUz: 'Mutafakkir',
        wordRu: 'Мыслитель',
        usageUz: 'Alisher Navoiy — butun dunyoga mashhur mutafakkir.',
        usageRu: 'Алишер Навои — всемирно известный мыслитель.'
      },
      {
        wordUz: 'Shoir',
        wordRu: 'Поэт',
        usageUz: 'U o‘zbek tilida ajoyib g‘azallar yozgan shoirdir.',
        usageRu: 'Он поэт, написавший изумительные газели на узбекском языке.'
      },
      {
        wordUz: 'Asar',
        wordRu: 'Произведение, труд',
        usageUz: 'Navoiyning asarlari ko‘p tillarga tarjima qilingan.',
        usageRu: 'Произведения Навои переведены на многие языки мира.'
      }
    ],
    tasks: [
      {
        level: 'A',
        nameUz: 'A daraja: So‘zlarni moslashtiring',
        nameRu: 'Уровень A: Сопоставление слов',
        instructionUz: 'O‘zbekcha so‘zni uning ruscha tarjimasi bilan moslashtiring va daftarga ko‘chiring.',
        instructionRu: 'Соедините узбекские слова с русскими эквивалентами и запишите в тетрадь.',
        sampleAnswerUz: 'Shoir — поэт, Mutafakkir — мыслитель, Asar — произведение.',
        sampleAnswerRu: 'Shoir — поэт, Mutafakkir — мыслитель, Asar — произведение.'
      },
      {
        level: 'B',
        nameUz: 'B daraja: Gaplarni to‘ldiring',
        nameRu: 'Уровень B: Заполнение пропусков',
        instructionUz: 'Nuqtalar o‘rniga kerakli so‘zni qo‘yib, gaplarni daftaringizga yozing: (Hirotda, 1441-yilda, Xamsa).',
        instructionRu: 'Вставьте пропущенные слова: «Alisher Navoiy ... tug‘ilgan. U ... dostonlar to‘plamini yaratgan».',
        sampleAnswerUz: 'Alisher Navoiy 1441-yilda Hirotda tug‘ilgan. U «Xamsa» dostonlar to‘plamini yaratgan.',
        sampleAnswerRu: 'Алишер Навои родился в 1441 году в Герате. Он создал свод поэм «Хамса».'
      },
      {
        level: 'C',
        nameUz: 'C daraja: O‘z fikringizni bayon eting',
        nameRu: 'Уровень C: Творческое высказывание',
        instructionUz: '«Nima uchun har bir o‘quvchi Navoiyni bilishi kerak?» mavzusida 4-5 jumlali fikr yozing.',
        instructionRu: 'Напишите рассуждение из 4–5 предложений на узбекском языке: «Почему каждому школьнику важно знать Навои?».',
        sampleAnswerUz: 'Navoiy bizning buyuk ajdodimiz. U o‘zbek tilini dunyoga tanitgan. Uning asarlari bizga odob, do‘stlik va ilm o‘rgatadi.',
        sampleAnswerRu: 'Навои — наш великий предок. Он прославил узбекский язык. Его труды учат нас честности, дружбе и науке.'
      }
    ],
    quiz: {
      questionUz: 'Alisher Navoiy nechanchi yilda tug‘ilgan?',
      questionRu: 'В каком году родился Алишер Навои?',
      optionsUz: ['1441-yilda', '1336-yilda', '1483-yilda', '1501-yilda'],
      optionsRu: ['В 1441 году', 'В 1336 году', 'В 1483 году', 'В 1501 году'],
      correctIndex: 0,
      explanationUz: 'Navoiy 1441-yil 9-fevralda tavallud topgan.',
      explanationRu: 'Алишер Навои родился 9 февраля 1441 года.'
    }
  },
  {
    id: 'lesson-2',
    order: 2,
    titleUz: 'Navoiy va o‘zbek tilining boyligi',
    titleRu: 'Богатство узбекского языка через наследие Навои',
    duration: '45 daqiqa',
    level: '8-sinf (Rusiyzabon sinflar)',
    goalUz: 'Turkiy tilning boyligi, so‘z yasalishi va sinonimlar haqida bilim berish.',
    goalRu: 'Показать выразительную силу узбекского языка, многообразие синонимов и точность оттенков значений.',
    outcomeUz: 'O‘quvchilar his-tuyg‘u va holatlarni ifodalovchi yangi fe’l va sifatlarni tushunib, gaplarda to‘g‘ri qo‘llaydilar.',
    outcomeRu: 'Учащиеся освоят синонимические ряды глаголов и прилагательных и смогут точнее выражать мысли на узбекском.',
    recitationSnippetUz: 'Tilga ixtiyorsiz — elga e’tiborsiz.\nSo‘zni ko‘ngilda pishirmaguncha tilga keltirma.',
    recitationSnippetRu: 'Кто не владеет языком — к тому нет уважения в народе.\nНе взвесив слово в сердце — не выпускай его с языка.',
    stages: [
      {
        titleUz: '1. Qiziqarli fakt (5 daqiqa)',
        titleRu: '1. Увлекательный факт (5 минут)',
        contentUz: 'Bilasizmi? Alisher Navoiy o‘z asarlarida 26 mingdan ortiq turli so‘z ishlatgan. Bu o‘sha davrdagi har qanday jahon adibidan ko‘pdir.',
        contentRu: 'Знаете ли вы? Словарный запас Навои в его трудах превысил 26 тысяч неповторяющихся корней, что поражает филологов мира.'
      },
      {
        titleUz: '2. Tushuntirish: Sinonimlar qudrati (15 daqiqa)',
        titleRu: '2. Объяснение: Сила синонимов (15 минут)',
        contentUz: 'O‘zbek tilida «kulmoq» (улыбаться/смеяться) fe’lining jilvalari: jilmaymoq, tabassum qilmoq, qahqaha otmoq, iljaymoq, kulib boqmoq. Navoiy ularning har birini o‘z o‘rnida qo‘llagan.',
        contentRu: 'В узбекском языке для понятия «улыбаться / смеяться» есть оттенки: jilmaymoq (светло улыбнуться), tabassum qilmoq (сдержанно улыбнуться), qahqaha otmoq (хохотать).'
      },
      {
        titleUz: '3. Amaliy topshiriq (20 daqiqa)',
        titleRu: '3. Практикум (20 минут)',
        contentUz: 'Berilgan sinonimlarni vaziyatga qarab tanlash va o‘zaro suhbatda sinab ko‘rish.',
        contentRu: 'Подбор синонимов к предложенным ситуациям и построение коротких диалогов.'
      }
    ],
    vocabulary: [
      {
        wordUz: 'Tabassum',
        wordRu: 'Улыбка',
        usageUz: 'Uning yuzida iliq tabassum paydo bo‘ldi.',
        usageRu: 'На его лице появилась теплая улыбка.'
      },
      {
        wordUz: 'Boylik',
        wordRu: 'Богатство',
        usageUz: 'Tilning boyligi — xalqning faxridir.',
        usageRu: 'Богатство языка — гордость народа.'
      },
      {
        wordUz: 'Sinonim',
        wordRu: 'Синоним',
        usageUz: 'O‘zbek tilida sinonim so‘zlar juda ko‘p.',
        usageRu: 'В узбекском языке очень много слов-синонимов.'
      }
    ],
    tasks: [
      {
        level: 'A',
        nameUz: 'A daraja: Tarjima qiling',
        nameRu: 'Уровень A: Перевод слов',
        instructionUz: 'Quyidagi so‘zlarni rus tiliga tarjima qiling: mehr, do‘stlik, saxovat, tabassum.',
        instructionRu: 'Переведите на русский язык слова: mehr, do‘stlik, saxovat, tabassum.',
        sampleAnswerUz: 'Mehr — доброта, do‘stlik — дружба, saxovat — щедрость, tabassum — улыбка.',
        sampleAnswerRu: 'Mehr — доброта, do‘stlik — дружба, saxovat — щедрость, tabassum — улыбка.'
      },
      {
        level: 'B',
        nameUz: 'B daraja: To‘g‘ri so‘zni tanlang',
        nameRu: 'Уровень B: Выбор контекстного синонима',
        instructionUz: 'Qaysi so‘z mos keladi: «Kichik bola onasiga qarab muloyim ... (tabassum qildi / qahqaha otdi)»?',
        instructionRu: 'Какое слово точнее по смыслу: «Kichik bola onasiga qarab muloyim ... (tabassum qildi / qahqaha otdi)»?',
        sampleAnswerUz: 'To‘g‘ri javob: «tabassum qildi». Muloyim so‘zi tabassum bilan birga ishlatiladi.',
        sampleAnswerRu: 'Верно: «tabassum qildi». Слово «muloyim» (нежно, ласково) сочетается со сдержанной улыбкой.'
      },
      {
        level: 'C',
        nameUz: 'C daraja: Kichik hikoya tuzing',
        nameRu: 'Уровень C: Мини-рассказ',
        instructionUz: '«Do‘stim bilan suhbat» mavzusida yangi o‘rganilgan 3 ta so‘zdan foydalanib 4 jumla yozing.',
        instructionRu: 'Напишите рассказ из 4 предложений на узбекском языке, использовав 3 новых слова из урока.',
        sampleAnswerUz: 'Kecha men do‘stim bilan kutubxonada uchrashdim. U menga samimiy tabassum bilan qaradi. Biz Navoiy g‘azallari haqida suhbatlashdik. Bu dars bizga katta ma’rifat berdi.',
        sampleAnswerRu: 'Вчера я встретился с другом в библиотеке. Он искренне улыбнулся мне. Мы говорили о газелях Навои. Это принесло нам большую пользу.'
      }
    ],
    quiz: {
      questionUz: 'Navoiyning qaysi asari o‘zbek tilining boyligiga bag‘ishlangan?',
      questionRu: 'Какой труд Навои посвящен доказательству богатства узбекского языка?',
      optionsUz: ['«Muhokamat ul-lug‘atayn»', '«Xamsa»', '«Boburnoma»', '«Zafarnoma»'],
      optionsRu: ['«Мухакамат ал-лугатайн»', '«Хамса»', '«Бабур-наме»', '«Зафар-наме»'],
      correctIndex: 0,
      explanationUz: '«Muhokamat ul-lug‘atayn» (1499) asarida ona tilimizning buyukligi isbotlangan.',
      explanationRu: 'В трактате «Спор двух языков» (1499 г.) раскрыто великолепие родного слова.'
    }
  },
  {
    id: 'lesson-3',
    order: 3,
    titleUz: '«Farhod va Shirin» — bunyodkorlik madhi',
    titleRu: '«Фархад и Ширин» — гимн созидательному труду',
    duration: '45 daqiqa',
    level: '8-sinf (Rusiyzabon sinflar)',
    goalUz: '«Farhod va Shirin» dostonining g‘oyasi, Farhod timsoli va mehnatsevarlik fazilatlarini o‘rganish.',
    goalRu: 'Раскрыть идею поэмы «Фархад и Ширин», образ Фархада как героя-созидателя и значение честного труда.',
    outcomeUz: 'O‘quvchilar qahramon xarakterini tasvirlashni o‘rganadilar, qiyosiy jumlalar tuza oladilar.',
    outcomeRu: 'Учащиеся научатся описывать характер героя на узбекском языке и формулировать нравственные выводы.',
    recitationSnippetUz: 'Birovkim qilsa el xizmatin pesha,\nBoshiga yog‘ilur eldan hamisha.',
    recitationSnippetRu: 'Тот, кто сделал служение людям своим делом жизни,\nВсегда будет окружен их искренней благодарностью.',
    stages: [
      {
        titleUz: '1. Matn bilan tanishuv (10 daqiqa)',
        titleRu: '1. Знакомство с фабулой (10 минут)',
        contentUz: 'Farhod — shoh o‘g‘li bo‘lsa-da, qasrda bekor o‘tirishni xohlamaydi. U tosh yo‘nish, me’morlik va ilmlarni qunt bilan o‘rganadi.',
        contentRu: 'Фархад — царский сын, но он отвергает безделье во дворце, с усердием осваивая мастерство камнереза и науки.'
      },
      {
        titleUz: '2. Qahramon tahlili (15 daqiqa)',
        titleRu: '2. Анализ образа героя (15 минут)',
        contentUz: 'Farhod Shirinni sevadi, ammo uning muhabbati xalqqa suv chiqarish, odamlarga ezgulik ulashish orqali namoyon bo‘ladi.',
        contentRu: 'Любовь Фархада выражается в благородном действии: прорубить гору, чтобы напоить засушливые земли Армении.'
      },
      {
        titleUz: '3. Muhokama va mashq (20 daqiqa)',
        titleRu: '3. Обсуждение и закрепление (20 минут)',
        contentUz: 'Farhod va Xusrav o‘rtasidagi farqni aniqlash: kim kuch ishlatadi, kim esa aql va mehnat bilan ish ko‘radi?',
        contentRu: 'Сопоставление Фархада и Хосрова: кто уповает на грубую силу, а кто — на чистоту сердца, ум и труд?'
      }
    ],
    vocabulary: [
      {
        wordUz: 'Mehnatsevar',
        wordRu: 'Трудолюбивый',
        usageUz: 'Farhod nihoyatda mehnatsevar va sabotli yigit edi.',
        usageRu: 'Фархад был чрезвычайно трудолюбивым и терпеливым юношей.'
      },
      {
        wordUz: 'Qahramon',
        wordRu: 'Герой',
        usageUz: 'Dostonning bosh qahramoni — Farhod.',
        usageRu: 'Главный герой поэмы — Фархад.'
      },
      {
        wordUz: 'Sabot',
        wordRu: 'Стойкость, упорство',
        usageUz: 'Sabot va mehnat barcha to‘siqlarni yengadi.',
        usageRu: 'Стойкость и труд побеждают любые преграды.'
      }
    ],
    tasks: [
      {
        level: 'A',
        nameUz: 'A daraja: Qahramon sifatlari',
        nameRu: 'Уровень A: Черты героя',
        instructionUz: 'Farhodga xos sifatlarni tanlang: mehnatsevar, qo‘rqoq, dovyurak, yalqov, vafodor.',
        instructionRu: 'Выберите качества, присущие Фархаду: mehnatsevar (трудолюбивый), dovyurak (смелый), vafodor (верный).',
        sampleAnswerUz: 'Farhodning sifatlari: mehnatsevar, dovyurak, vafodor.',
        sampleAnswerRu: 'Качества Фархада: mehnatsevar, dovyurak, vafodor.'
      },
      {
        level: 'B',
        nameUz: 'B daraja: Nega va nima uchun?',
        nameRu: 'Уровень B: Причинно-следственная связь',
        instructionUz: '«Farhod xalqqa suv olib keldi, chunki ...» jumlasini o‘zbek tilida davom ettiring.',
        instructionRu: 'Продолжите фразу на узбекском: «Farhod xalqqa suv olib keldi, chunki ...» (потому что...).',
        sampleAnswerUz: 'Farhod xalqqa suv olib keldi, chunki u odamlarni suvsizlikdan qutqarishni va Shirinning orzusini amalga oshirishni istadi.',
        sampleAnswerRu: 'Фархад принес людям воду, потому что хотел спасти народ от засухи и исполнить благородную мечту Ширин.'
      },
      {
        level: 'C',
        nameUz: 'C daraja: Taqqoslash',
        nameRu: 'Уровень C: Сравнительная характеристика',
        instructionUz: 'Farhod va Xusravni o‘zbek tilida 4 ta jumla orqali taqqoslang.',
        instructionRu: 'Сравните Фархада и Хосрова в 4 предложениях на узбекском языке.',
        sampleAnswerUz: 'Farhod mehnatkash va kamtar inson. U tog‘ni o‘z mehnati bilan yoradi. Xusrav esa kibrli shoh. U boylik va qurol kuchi bilan maqsadiga erishmoqchi bo‘ladi.',
        sampleAnswerRu: 'Фархад скромен и трудолюбив, он пробивает скалу своим трудом. Хосров заносчив и пытается добиться всего силой и золотом.'
      }
    ],
    quiz: {
      questionUz: 'Farhod xalq uchun qanday qiyin ishni bajardi?',
      questionRu: 'Какую сложнейшую задачу выполнил Фархад ради людей?',
      optionsUz: ['Tog‘ni teshib suv chiqardi', 'Oltin tanga tarqatdi', 'Urush boshladi', 'Uzoqqa qochib ketdi'],
      optionsRu: ['Прорубил скалы и провел воду', 'Раздал золотые монеты', 'Начал войну', 'Сбежал в дальние края'],
      correctIndex: 0,
      explanationUz: 'Farhod tog‘ni yorib suv chiqargan va xalqqa hayot baxsh etgan.',
      explanationRu: 'Фархад совершил созидательный подвиг, прорубив скалы ради питьевой воды.'
    }
  },
  {
    id: 'lesson-4',
    order: 4,
    titleUz: 'Navoiy hikmatlari — hayot saboqlari',
    titleRu: 'Афоризмы Навои как жизненные уроки',
    duration: '45 daqiqa',
    level: '8-sinf (Rusiyzabon sinflar)',
    goalUz: 'Navoiy aforizmlari va hikmatlarini tushunish, ularni hayotiy vaziyatlarga tatbiq eta olish.',
    goalRu: 'Научиться понимать глубинный смысл афоризмов Навои и сопоставлять их с реальными ситуациями.',
    outcomeUz: 'O‘quvchilar kamida 2 ta Navoiy hikmatini yod biladilar va uning ma’nosini tushuntira oladilar.',
    outcomeRu: 'Учащиеся запомнят наизусть 2 афоризма и смогут объяснить их моральный посыл на узбекском языке.',
    recitationSnippetUz: 'Odamiy ersang demagil odamiy,\nOnikim yo‘q xalq g‘amidin g‘ami.',
    recitationSnippetRu: 'Если человеком зовешься — не считай человеком того,\nВ чьем сердце нет боли и сострадания к чужой беде.',
    stages: [
      {
        titleUz: '1. Hikmatni o‘qish va tahlil (10 daqiqa)',
        titleRu: '1. Чтение и осмысление афоризма (10 минут)',
        contentUz: '«Odamiy ersang demagil odamiy, Onikim yo‘q xalq g‘amidin g‘ami». Bu bayt Navoiy insonparvarligining eng yuksak cho‘qqisidir.',
        contentRu: '«Если человеком зовешься — не считай человеком того, кого не заботит благо и горе народа». Это гимн гуманизма Навои.'
      },
      {
        titleUz: '2. Til va so‘z ustida ishlash (15 daqiqa)',
        titleRu: '2. Лексическая работа (15 минут)',
        contentUz: 'Eski o‘zbek tili shakllarini zamonaviy o‘zbek tiliga aylantirish: ersang = bo‘lsang; onikim = uni / uniki; g‘amidin = g‘amidan.',
        contentRu: 'Перевод старинных форм на современный узбекский язык: ersang = bo‘lsang; onikim = uniki/uni; g‘amidin = g‘amidan.'
      },
      {
        titleUz: '3. Amaliyot: Hayotiy vaziyat (20 daqiqa)',
        titleRu: '3. Разбор жизненных кейсов (20 минут)',
        contentUz: 'Qanday hollarda biz boshqalarning g‘amiga befarq bo‘lmasligimiz kerak? Do‘stga yordam, kattalarni hurmat qilish.',
        contentRu: 'В каких жизненных ситуациях проявляется отзывчивость? Помощь другу, уважение к пожилым, поддержка слабых.'
      }
    ],
    vocabulary: [
      {
        wordUz: 'G‘amxo‘rlik',
        wordRu: 'Забота',
        usageUz: 'Boshqalarga g‘amxo‘rlik qilish — eng oliy insoniylikdir.',
        usageRu: 'Забота о других — высшее проявление человечности.'
      },
      {
        wordUz: 'Hikmat',
        wordRu: 'Мудрость',
        usageUz: 'Har bir hikmatda katta hayotiy tajriba yotadi.',
        usageRu: 'В каждом афоризме скрыт огромный жизненный опыт.'
      },
      {
        wordUz: 'Hamdardlik',
        wordRu: 'Сострадание',
        usageUz: 'Inson o‘zgalar dardiga hamdard bo‘lishi lozim.',
        usageRu: 'Человек должен уметь сопереживать чужой боли.'
      }
    ],
    tasks: [
      {
        level: 'A',
        nameUz: 'A daraja: Yod oling',
        nameRu: 'Уровень A: Заучивание наизусть',
        instructionUz: 'Navoiyning «Odamiy ersang...» hikmatini to‘g‘ri talaffuz bilan yod oling.',
        instructionRu: 'Выучите двустишие «Odamiy ersang demagil odamiy...» с правильным ударением.',
        sampleAnswerUz: '«Odamiy ersang demagil odamiy, Onikim yo‘q xalq g‘amidin g‘ami».',
        sampleAnswerRu: '«Odamiy ersang demagil odamiy, Onikim yo‘q xalq g‘amidin g‘ami».'
      },
      {
        level: 'B',
        nameUz: 'B daraja: Zamonaviy tilga aylantiring',
        nameRu: 'Уровень B: Адаптация на современный язык',
        instructionUz: 'Ushbu hikmatni bugungi adabiy o‘zbek tilida qanday ifodalash mumkinligini yozing.',
        instructionRu: 'Перепишите смысл этого афоризма на современном литературном узбекском языке.',
        sampleAnswerUz: 'Agar sen haqiqiy inson bo‘lsang, xalq g‘ami bilan yashamaydigan, boshqalarga befarq kimsani inson deb atama.',
        sampleAnswerRu: 'Если ты настоящий человек, не называй человеком того, кому чужды заботы и чаяния людей.'
      },
      {
        level: 'C',
        nameUz: 'C daraja: Kichik esse',
        nameRu: 'Уровень C: Эссе-размышление',
        instructionUz: '«Befarqlik — illat» mavzusida 5 ta jumladan iborat o‘zbekcha xulosa yozing.',
        instructionRu: 'Напишите небольшое эссе (5 предложений) на тему «Равнодушие — порок» на узбекском языке.',
        sampleAnswerUz: 'Befarq inson faqat o‘zini o‘ylaydi. U do‘stining quvonchiga ham, tashvishiga ham sherik bo‘lmaydi. Navoiy bunday kishilarni qattiq qoralagan. Biz har doim atrofdagilarga mehr ko‘rsatishimiz kerak. Mehr bor joyda baxt va birdamlik bo‘ladi.',
        sampleAnswerRu: 'Равнодушный человек замкнут на себе. Он не разделит ни радости, ни горя товарища. Навои осуждал равнодушие. Мы должны дарить тепло окружающим.'
      }
    ],
    quiz: {
      questionUz: '«Odamiy ersang demagil odamiy...» baytining asosiy mazmuni nima?',
      questionRu: 'В чем ключевой смысл бейта «Odamiy ersang demagil odamiy...»?',
      optionsUz: ['Boshqalarning dardiga sherik bo‘lish, insonparvar bo‘lish', 'Faqat o‘z manfaatini o‘ylash', 'Kiyinish qoidalariga rioya qilish', 'Uydan chiqmaslik'],
      optionsRu: ['Сострадать людям и быть чутким гуманистом', 'Думать только о себе', 'Следовать моде', 'Не выходить из дома'],
      correctIndex: 0,
      explanationUz: 'Navoiy odam bo‘lishning bosh sharti deb el-yurt g‘ami bilan yashashni aytgan.',
      explanationRu: 'Поэт подчеркивал: подлинный человек проверяется сочувствием к другим людям.'
    }
  },
  {
    id: 'lesson-5',
    order: 5,
    titleUz: 'Adabiy muloqot: O‘zbekcha go‘zal nutq tuzish',
    titleRu: 'Культура речи: как красиво выражать мысли на узбекском',
    duration: '45 daqiqa',
    level: '8-sinf (Rusiyzabon sinflar)',
    goalUz: 'Rusiyzabon o‘quvchilarda o‘zbekcha nutq odobi, muloyimlik iboralari va fikrni mantiqiy bog‘lashni shakllantirish.',
    goalRu: 'Развить речевой этикет, вежливые клише и навыки логического построения связной речи на узбекском языке.',
    outcomeUz: 'O‘quvchilar madaniy muloqot iboralarini (marhamat, lutfan, tashakkur, uzr) o‘z o‘rnida ishlata oladilar.',
    outcomeRu: 'Учащиеся освоят формулы речевого этикета и смогут вежливо и грамотно вести диалог со сверстниками и взрослыми.',
    recitationSnippetUz: 'So‘zingga bo‘lsa gar ilm-u hunar zebu ziynat,\nEshitguvchi tinglar seni to abad.',
    recitationSnippetRu: 'Коль украшеньем речи станут науки, мастерство и такт,\nТебя внимать с восторгом будут, и это непреложный факт.',
    stages: [
      {
        titleUz: '1. Nutq odobi haqida suhbat (10 daqiqa)',
        titleRu: '1. Беседа о речевом этикете (10 минут)',
        contentUz: 'Navoiy aytganidek, so‘z insonning ko‘zgusidir. Qanday gapirsangiz, sizni shunday baholaydilar.',
        contentRu: 'Как говорил Навои, слово — это зеркало души. Культура речи показывает образованность и достоинство человека.'
      },
      {
        titleUz: '2. Muloyimlik iboralari (15 daqiqa)',
        titleRu: '2. Формулы вежливости (15 минут)',
        contentUz: 'Assalomu alaykum, Xush kelibsiz, Tashakkur bildiraman, Marhamat qiling, Fikringizga qo‘shilaman, Menimcha...',
        contentRu: 'Освоение клише: Assalomu alaykum (здравствуйте), Tashakkur bildiraman (благодарю), Fikringizga qo‘shilaman (согласен с вами).'
      },
      {
        titleUz: '3. Dialogik amaliyot (20 daqiqa)',
        titleRu: '3. Диалоговый практикум (20 минут)',
        contentUz: 'Juftlikda ishlash: «Kutubxonada kitob tanlash» yoki «Ko‘rgazmada taassurot almashish» mavzularida dialog tuzish.',
        contentRu: 'Работа в парах: разыгрывание диалогов «В библиотеке» или «Впечатления от выставки». Плавное ведение беседы.'
      }
    ],
    vocabulary: [
      {
        wordUz: 'Lutfan',
        wordRu: 'Любезно, пожалуйста',
        usageUz: 'Lutfan bu kitobni menga uzatib yuborsangiz.',
        usageRu: 'Пожалуйста, передайте мне любезно эту книгу.'
      },
      {
        wordUz: 'Tashakkur',
        wordRu: 'Благодарность',
        usageUz: 'Yordamingiz uchun samimiy tashakkur bildiraman.',
        usageRu: 'Искренне благодарю вас за оказанную помощь.'
      },
      {
        wordUz: 'Muloqot',
        wordRu: 'Общение, диалог',
        usageUz: 'Go‘zal muloqot odamlarni bir-biriga yaqinlashtiradi.',
        usageRu: 'Культурное общение сближает людей.'
      }
    ],
    tasks: [
      {
        level: 'A',
        nameUz: 'A daraja: Salomlashish va minnatdorchilik',
        nameRu: 'Уровень A: Приветствие и вежливость',
        instructionUz: 'Ruscha iboralarning o‘zbekcha muloyim muqobilini toping: «Спасибо большое», «Пожалуйста», «Здравствуйте».',
        instructionRu: 'Найдите узбекские вежливые аналоги: «Спасибо большое» (Katta rahmat / Tashakkur), «Пожалуйста» (Marhamat), «Здравствуйте» (Assalomu alaykum).',
        sampleAnswerUz: 'Assalomu alaykum! Katta rahmat! Marhamat!',
        sampleAnswerRu: 'Assalomu alaykum! Katta rahmat! Marhamat!'
      },
      {
        level: 'B',
        nameUz: 'B daraja: Dialog tuzing',
        nameRu: 'Уровень B: Диалог в библиотеке',
        instructionUz: 'Kutubxonachi va o‘quvchi o‘rtasidagi 4 qatorlik dialog tuzing.',
        instructionRu: 'Составьте диалог из 4 реплик между библиотекарем и учеником на узбекском языке.',
        sampleAnswerUz: '— Assalomu alaykum, ustoz! Menga Navoiyning «Xamsa» kitobi kerak edi.\n— Va alaykum assalom! Marhamat, mana bu javonda turibdi.\n— Katta rahmat sizga!\n— Sog‘ bo‘ling, qunt bilan o‘qing!',
        sampleAnswerRu: '— Здравствуйте! Мне нужна книга Навои «Хамса».\n— Здравствуйте! Пожалуйста, она вот на этой полке.\n— Большое спасибо!\n— На здоровье, читай с усердием!'
      },
      {
        level: 'C',
        nameUz: 'C daraja: O‘z fikringizni himoya qiling',
        nameRu: 'Уровень C: Аргументация мнения',
        instructionUz: '«Menga Navoiyning ... asari yoqdi, chunki ...» andazasida 5 ta jumlali fikr bayon qiling.',
        instructionRu: 'Постройте связный ответ по шаблону «Мне понравилось произведение Навои ..., потому что ...».',
        sampleAnswerUz: 'Menga Navoiyning «Farhod va Shirin» dostoni juda yoqdi. Chunki Farhod faqat sevishgan yigit emas, balki xalqqa yordam beruvchi mard qahramondir. U o‘z mehnati bilan tog‘ni talqon qildi va suv chiqardi. Bu asar bizni mehnatsevarlikka o‘rgatadi.',
        sampleAnswerRu: 'Мне очень понравилась поэма «Фархад и Ширин». Ведь Фархад — не просто влюбленный, а настоящий герой-созидатель. Он своим трудом пробил гору и пустил воду. Это произведение учит нас трудолюбию.'
      }
    ],
    quiz: {
      questionUz: 'O‘zbek tilida minnatdorchilik bildirish uchun qaysi so‘z ishlatiladi?',
      questionRu: 'Какое слово используется в узбекском языке для выражения благодарности?',
      optionsUz: ['Tashakkur / Rahmat', 'Salom', 'Xayr', 'Mayli'],
      optionsRu: ['Tashakkur / Rahmat', 'Salom', 'Xayr', 'Mayli'],
      correctIndex: 0,
      explanationUz: '«Tashakkur» va «Rahmat» minnatdorchilik izhor qiluvchi madaniy so‘zlardir.',
      explanationRu: '«Tashakkur» и «Rahmat» выражают искреннюю благодарность.'
    }
  }
];
