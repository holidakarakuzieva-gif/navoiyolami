export interface TeacherLessonPlan {
  id: string;
  themeUz: string;
  themeRu: string;
  grade: string;
  classType: string;
  objectivesUz: string[];
  objectivesRu: string[];
  equipmentUz: string[];
  equipmentRu: string[];
  timing: {
    stageUz: string;
    stageRu: string;
    minutes: number;
    activityUz: string;
    activityRu: string;
    teacherRoleUz: string;
    teacherRoleRu: string;
  }[];
  groupWorkUz: {
    groupName: string;
    task: string;
  }[];
  groupWorkRu: {
    groupName: string;
    task: string;
  }[];
  differentialTasks: {
    level: string;
    taskUz: string;
    taskRu: string;
  }[];
  assessmentRubric: {
    criterionUz: string;
    criterionRu: string;
    maxScore: number;
    descriptorsUz: string;
    descriptorsRu: string;
  }[];
  homeworkOptionsUz: string[];
  homeworkOptionsRu: string[];
}

export const teacherLessonPlan: TeacherLessonPlan = {
  id: 'standard-navoiy-45min',
  themeUz: 'Alisher Navoiy hayoti, ijodi va «Xamsa» dostoni — mumtoz adabiyot jozibasi',
  themeRu: 'Жизнь, творчество Алишера Навои и свод «Хамса» — притягательность классической литературы',
  grade: '8-sinf (Rusiyzabon sinflar uchun o‘zbek tili)',
  classType: 'Interaktiv aralash dars (Blended learning)',
  objectivesUz: [
    'Ta’limiy: Alisher Navoiyning tarjimai holi, asarlari va ona tili rivojidagi xizmatlari haqida tizimli bilim berish.',
    'Tarbiyaviy: O‘quvchilarda milliy va umuminsoniy qadriyatlar, insonparvarlik, adolat, mehnatsevarlik va sadoqat tuyg‘ularini tarbiyalash.',
    'Rivojlantiruvchi: O‘zbek tilida og‘zaki va yozma fikrlash, lug‘at boyligi, tezkor tahlil va guruhda ishlash ko‘nikmalarini rivojlantirish.'
  ],
  objectivesRu: [
    'Образовательная: сформировать системные знания о биографии Навои, «Хамсе» и его роли в становлении узбекского языка.',
    'Воспитательная: привить идеалы гуманизма, честного созидательного труда, уважения к старшим и верности дружбе.',
    'Развивающая: развить навыки устной связной речи на узбекском языке, обогатить культурологический лексикон.'
  ],
  equipmentUz: [
    'Elektron ta’lim platformasi «Jozibali o‘zbek tili»',
    'Interaktiv doska yoki proyektor',
    'A4 formatdagi tarqatma ish varaqlari (Print Lab)',
    'Lug‘at kartochkalari va test topshiriqlari'
  ],
  equipmentRu: [
    'Платформа «Притягательный узбекский язык»',
    'Интерактивная панель или проектор',
    'Раздаточные рабочие листы из Print Lab',
    'Словарные карточки и проверочные тесты'
  ],
  timing: [
    {
      stageUz: '1. Tashkiliy qism va faollashtirish',
      stageRu: '1. Организационный момент и разминка',
      minutes: 5,
      activityUz: 'Salomlashish, davomatni aniqlash. «So‘z zanjiri» o‘yini: o‘quvchilar navbat bilan Navoiy ijodiga oid bittadan so‘z aytadilar.',
      activityRu: 'Приветствие. Речевая разминка «Цепочка слов»: учащиеся называют по одному слову, связанному с Навои (ilm, shoir, Xamsa...).',
      teacherRoleUz: 'Dars maqsadini e’lon qilish va o‘quvchilarni faol muloqotga jalb etish.',
      teacherRoleRu: 'Озвучивание темы и вовлечение каждого ученика в диалог.'
    },
    {
      stageUz: '2. Yangi mavzu bayoni va vizual tanishuv',
      stageRu: '2. Изложение нового материала и визуализация',
      minutes: 10,
      activityUz: 'Platformadagi «Navoiy olami» va Hirot panoramasini ko‘rsatish. Navoiyning tarjimai holi, Hirot madaniy muhiti va «Xamsa»ning 5 dostoni haqida qisqa interaktiv ma’ruza.',
      activityRu: 'Демонстрация интерактивной панорамы Герата и портрета Навои. Краткий живой рассказ о пяти поэмах «Хамсы» и защите родного языка.',
      teacherRoleUz: 'Murakkab mumtoz tushunchalarni 8-sinf rusiyzabon o‘quvchisi tilida sodda va ravon izohlash.',
      teacherRoleRu: 'Адаптированное объяснение староузбекских понятий на доступном языке.'
    },
    {
      stageUz: '3. Guruhli interaktiv faoliyat',
      stageRu: '3. Групповая интерактивная деятельность',
      minutes: 15,
      activityUz: 'Sinf 3 ta guruhga bo‘linadi: 1-guruh «Farhod va Shirin», 2-guruh «Layli va Majnun», 3-guruh «Saddi Iskandariy». Har bir guruh berilgan matn va topshiriqlarni tahlil qiladi.',
      activityRu: 'Класс делится на 3 группы по поэмам «Хамсы». Каждая группа заполняет кластер, находит ключевые слова и готовит мини-презентацию.',
      teacherRoleUz: 'Guruhlar faoliyatini muvofiqlashtirish, o‘zbekcha so‘z qo‘llashga yo‘naltirish.',
      teacherRoleRu: 'Фасилитация групп, поддержка верного произношения и лексики.'
    },
    {
      stageUz: '4. Mustahkamlash va mini-test',
      stageRu: '4. Закрепление и экспресс-контроль',
      minutes: 10,
      activityUz: 'Platformaning «Navoiy bilimdoni» mini-testini yechish yoki tarqatma kartochkalardagi savollarga javob berish. Natijalarni darhol tahlil qilish.',
      activityRu: 'Прохождение 5 вопросов экспресс-теста на платформе или по распечатанным бланкам. Разбор допущенных ошибок.',
      teacherRoleUz: 'To‘g‘ri javoblarni asoslash va rag‘batlantirish.',
      teacherRoleRu: 'Положительное подкрепление и комментарии к ответам.'
    },
    {
      stageUz: '5. Refleksiya, baholash va uyga vazifa',
      stageRu: '5. Рефлексия, оценивание и домашнее задание',
      minutes: 5,
      activityUz: '«3-2-1» refleksiya usuli: o‘quvchilar bugun bilib olgan 3 ta ma’lumot, yoqqan 2 ta so‘z va o‘ylantirgan 1 ta savolni aytadilar.',
      activityRu: 'Методика «3-2-1»: 3 новых факта, 2 красивых узбекских слова и 1 вопрос, который остался на размышление.',
      teacherRoleUz: 'Ballarni e’lon qilish, uy vazifasini differensial tanlash imkonini berish.',
      teacherRoleRu: 'Оглашение оценок, выдача дифференцированного ДЗ.'
    }
  ],
  groupWorkUz: [
    {
      groupName: '1-guruh: «Bunyodkorlar» (Farhod va Shirin)',
      task: 'Farhodning insoniy fazilatlari haqida klaster tuzing. Mehnat va do‘stlik haqida 3 ta jumla yozing.'
    },
    {
      groupName: '2-guruh: «Sadoqat ahli» (Layli va Majnun)',
      task: 'Dostondagi pokiza tuyg‘ular va tabiat bilan uyg‘unlik haqidagi baytlarni tahlil qiling.'
    },
    {
      groupName: '3-guruh: «Donishmandlar» (Saddi Iskandariy)',
      task: 'Adolatli hukmdor va ilm-fanning jamiyatdagi o‘rni haqida qisqa xulosa tayyorlang.'
    }
  ],
  groupWorkRu: [
    {
      groupName: 'Группа 1: «Созидатели» (Фархад и Ширин)',
      task: 'Составить смысловой кластер о качествах Фархада. Написать 3 предложения о созидательном труде.'
    },
    {
      groupName: 'Группа 2: «Преданность» (Лейли и Меджнун)',
      task: 'Проанализировать образ верности и гармонии человека с окружающим миром.'
    },
    {
      groupName: 'Группа 3: «Мудрецы» (Вал Искандара)',
      task: 'Подготовить краткий тезис о роли науки, справедливости и мира в жизни государства.'
    }
  ],
  differentialTasks: [
    {
      level: 'A daraja (Boshlang‘ich / Базовый)',
      taskUz: 'Lug‘atdagi 5 ta yangi so‘zni (ilm, adolat, mehr, sadoqat, saxovat) yod oling va ular bilan 3 ta sodda gap tuzing.',
      taskRu: 'Выучите 5 новых терминов и составьте с ними 3 простых предложения на узбекском языке.'
    },
    {
      level: 'B daraja (Tahliliy / Аналитический)',
      taskUz: 'Navoiyning «Odamiy ersang demagil odamiy...» baytini zamonaviy tilda tushuntirib, 4-5 jumlali xulosa yozing.',
      taskRu: 'Объясните смысл бейта о человечности и напишите вывод из 4–5 предложений на узбекском.'
    },
    {
      level: 'C daraja (Ijodiy / Творческий)',
      taskUz: '«Agar Alisher Navoiy bizning maktabimizga mehmon bo‘lib kelsa...» mavzusida erkin ijodiy esse yozing.',
      taskRu: 'Напишите небольшое творческое эссе: «Если бы Алишер Навои пришел к нам в гости на урок...».'
    }
  ],
  assessmentRubric: [
    {
      criterionUz: 'Bilish va tushunish (Tarixiy faktlar va atamalar)',
      criterionRu: 'Знание и понимание (Исторические факты и лексика)',
      maxScore: 25,
      descriptorsUz: 'Navoiy hayoti, yillari, asarlari nomlarini aniq biladi va atamalarni to‘g‘ri tushunadi.',
      descriptorsRu: 'Владеет датами, названиями поэм и точно определяет значения терминов.'
    },
    {
      criterionUz: 'Og‘zaki nutq va muloqot madaniyati',
      criterionRu: 'Культура устной речи и диалога',
      maxScore: 25,
      descriptorsUz: 'O‘zbekcha talaffuz me’yorlariga amal qiladi, savollarga to‘liq jumlalar bilan javob beradi.',
      descriptorsRu: 'Соблюдает нормы узбекского ударения, строит связные реплики без перехода на русский язык.'
    },
    {
      criterionUz: 'Matnni tahlil qilish va qiyoslash',
      criterionRu: 'Анализ текста и сопоставление',
      maxScore: 25,
      descriptorsUz: 'Doston qahramonlari xatti-harakatiga to‘g‘ri baho bera oladi, sabab va oqibatni tushunadi.',
      descriptorsRu: 'Умеет выявлять причинно-следственные связи в сюжетах и давать нравственную оценку.'
    },
    {
      criterionUz: 'Mustaqil va ijodiy fikrlash',
      criterionRu: 'Самостоятельное и творческое мышление',
      maxScore: 25,
      descriptorsUz: 'Hikmatlarni bugungi hayot bilan bog‘lay oladi, o‘z shaxsiy munosabatini ifodalaydi.',
      descriptorsRu: 'Связывает идеи XV века с реалиями современного мира и аргументирует личную позицию.'
    }
  ],
  homeworkOptionsUz: [
    'Variant 1: «Lug‘at xazinasi»dan 5 ta so‘zni «O‘rgandim» bo‘limiga kiritib, gaplar yozish.',
    'Variant 2: «Ijodiy ustaxona» bo‘limida «Farhodga maktub» yozish va matnni saqlash.',
    'Variant 3: Platformadagi «So‘z ovchisi» o‘yinini yakunlab, rekord natijani daftarga qayd etish.'
  ],
  homeworkOptionsRu: [
    'Вариант 1: Добавить 5 слов в раздел «Выучено» в словаре и составить с ними предложения.',
    'Вариант 2: Написать в разделе «Мастерская» письмо герою Фархаду и сохранить текст.',
    'Вариант 3: Завершить уровень в игре «Охотник за словами» и зафиксировать результат.'
  ]
};
