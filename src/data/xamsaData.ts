import { XamsaEpic } from '../types';

export const xamsaEpics: XamsaEpic[] = [
  {
    id: 'hayrat-ul-abror',
    order: 1,
    titleUz: 'Hayrat ul-abror',
    titleRu: 'Смятение праведных',
    meaningUz: '«Yaxshi va to‘g‘ri so‘z kishilarning hayrati»',
    meaningRu: '«Смятение (удивление) праведников»',
    writtenYear: '1483-yil',
    symbolUz: 'Hikmat va adolat nuri',
    symbolRu: 'Свет мудрости и справедливости',
    overviewUz: '«Xamsa»ning birinchi dostoni bo‘lib, u axloqiy-falsafiy yo‘nalishda yozilgan. Unda 20 ta maqolat va har bir maqolatga ilova qilingan 20 ta ibratli hikoyat mavjud.',
    overviewRu: 'Первая поэма «Хамсы» — философско-дидактический шедевр. Состоит из 20 бесед (макалят) и 20 нравоучительных притч об истине, совести и правителях.',
    mainIdeaUz: 'Inson qadri uning amali, halolligi, saxovati va adolati bilan o‘lchanadi. Adolatsiz shoh davlatni halokatga yetaklaydi.',
    mainIdeaRu: 'Человек славен добрыми делами, щедростью и честным трудом. Справедливость — основа процветания общества.',
    characters: [
      {
        nameUz: 'Adolatli shoh (Anushervon)',
        nameRu: 'Справедливый царь Ануширван',
        roleUz: 'Hukmdor obrazi',
        roleRu: 'Образ государя',
        traitsUz: 'Xalq arzi-holiga quloq soluvchi, donishmand maslahatiga amal qiluvchi.',
        traitsRu: 'Прислушивающийся к голосу народа и советам мудрецов.'
      },
      {
        nameUz: 'Keksa dehqon',
        nameRu: 'Мудрый старец-землепашец',
        roleUz: 'Mehnatkash xalq timsoli',
        roleRu: 'Олицетворение созидательного труда',
        traitsUz: 'Kelajak avlod uchun mevali ko‘chat ekayotgan saxiytabiat inson.',
        traitsRu: 'Сажающий саженцы не для себя, а ради будущих поколений.'
      }
    ],
    modernConnectionUz: 'Bugungi kunda har birimiz kelajak uchun nima qoldiryapmiz? Ko‘chat ekish, tabiatni asrash va halol mehnat qilish Navoiy ta’kidlagan asosiy qadriyatdir.',
    modernConnectionRu: 'Что каждый из нас оставляет потомкам? Экологическая сознательность, честный труд и забота о других — главный посыл поэмы.',
    keyWords: [
      {
        wordUz: 'Abror',
        wordRu: 'Праведники',
        definitionUz: 'Yaxshi, ezgu va pokiza amalli kishilar.',
        definitionRu: 'Люди высокой морали и чистых поступков.'
      },
      {
        wordUz: 'Hayrat',
        wordRu: 'Изумление, восторг',
        definitionUz: 'Dunyo va uning sir-asrorlarini ko‘rib lol qolish tuyg‘usi.',
        definitionRu: 'Философское изумление перед величием мироздания.'
      },
      {
        wordUz: 'Saxovat',
        wordRu: 'Щедрость',
        definitionUz: 'O‘z mulkidan boshqalarga xolis ulashish.',
        definitionRu: 'Искреннее бескорыстие и благотворительность.'
      }
    ],
    sequenceTask: {
      instructionUz: 'Hikoyatdagi voqealarni to‘g‘ri tartibda joylashtiring:',
      instructionRu: 'Расставьте события притчи в правильной хронологической последовательности:',
      items: [
        { id: '1', textUz: 'Hukmdor sahroda ko‘chat ekayotgan keksani ko‘rdi.', textRu: 'Государь встретил в пути старца, сажающего саженцы.', correctOrder: 1 },
        { id: '2', textUz: 'Shoir keksa odamdan mevasini o‘zi ko‘rmaydigan daraxtni nega ekayotganini so‘radi.', textRu: 'Он спросил, зачем сажать деревья, чьих плодов старик уже не увидит.', correctOrder: 2 },
        { id: '3', textUz: 'Qariya: «Bizdan oldingilar ekdi — biz edik, endi biz ekamiz — kelajak yesin», deb javob berdi.', textRu: 'Мудрец ответил: «Предки сажали — мы вкушали; теперь мы сажаем — пусть вкушают потомки».', correctOrder: 3 },
        { id: '4', textUz: 'Hukmdor bu hikmatli javobdan lol qolib, qariyani mukofotladi.', textRu: 'Пораженный глубокой мудростью правитель щедро одарил старца.', correctOrder: 4 }
      ]
    },
    quiz: {
      questionUz: '«Hayrat ul-abror» dostonining asosiy janri nima?',
      questionRu: 'Каков основной жанр поэмы «Смятение праведных»?',
      optionsUz: ['Axloqiy-falsafiy doston', 'Harbiy sarguzasht', 'Ertaknamo fantastika', 'Tarixiy xronika'],
      optionsRu: ['Философско-этическая поэма', 'Военные хроники', 'Фантастическая сказка', 'Сухой исторический документ'],
      correctIndex: 0,
      explanationUz: 'Bu doston inson axloqi, adolat, ilm va haqiqat haqidagi falsafiy asardir.',
      explanationRu: 'Поэма посвящена духовно-нравственному совершенствованию, справедливости и честности.'
    }
  },
  {
    id: 'farhod-va-shirin',
    order: 2,
    titleUz: 'Farhod va Shirin',
    titleRu: 'Фархад и Ширин',
    meaningUz: 'Mehnatsevar qahramon va sadoqatli muhabbat dostoni',
    meaningRu: 'Поэма о созидательном подвиге и верной любви',
    writtenYear: '1484-yil',
    symbolUz: 'Tog‘ni kesuvchi mehnat va metin iroda',
    symbolRu: 'Труд, пробивающий скалы, и несгибаемая воля',
    overviewUz: 'Navoiy bu dostonda Farhodni oddiy sevishgan oshiq emas, balki xalqqa suv chiqarish uchun tog‘ni talqon qilgan buyuk bunyodkor, olim va dovyurak pahlavon sifatida tasvirlagan.',
    overviewRu: 'В отличие от предшественников, Навои сделал Фархада не просто влюбленным юношей, а титаном созидательного труда, инженером и ученым, прорубающим скалы ради воды для народа.',
    mainIdeaUz: 'Mehnat va fidoyilik insonni ulug‘laydi. Xalq manfaati yo‘lida qilingan xizmat shaxsiy lazzatlardan ustundir.',
    mainIdeaRu: 'Бескорыстный труд ради счастья людей и верность в любви возвышают человека над земной суетой.',
    characters: [
      {
        nameUz: 'Farhod',
        nameRu: 'Фархад',
        roleUz: 'Bosh qahramon',
        roleRu: 'Главный герой',
        traitsUz: 'Shahzoda, lekin mehnatdan qo‘rqmaydigan, tosh yo‘nuvchi, qudratli va vafodor.',
        traitsRu: 'Царевич-созидатель, камнерез, глубокий мыслитель и верный рыцарь.'
      },
      {
        nameUz: 'Shirin',
        nameRu: 'Ширин',
        roleUz: 'Arman malikasi',
        roleRu: 'Армянская царевна',
        traitsUz: 'Go‘zal, oqila, vafodor va olijanob qalb egasi.',
        traitsRu: 'Прекрасная, мудрая, преданная и великодушная героиня.'
      },
      {
        nameUz: 'Shopur',
        nameRu: 'Шапур',
        roleUz: 'Farhodning sodiq do‘sti',
        roleRu: 'Верный друг Фархада',
        traitsUz: 'Mohir rassom, sadoqatli hamroh va maslahatchi.',
        traitsRu: 'Талантливый художник, искренний спутник и советчик.'
      },
      {
        nameUz: 'Xusrav',
        nameRu: 'Хосров',
        roleUz: 'Eron shohi',
        roleRu: 'Царь Ирана',
        traitsUz: 'Manman, kibrli, qudratini zulm bilan ko‘rsatuvchi hukmdor.',
        traitsRu: 'Эгоистичный, гордый правитель, привыкший добиваться всего силой.'
      }
    ],
    modernConnectionUz: 'Farhod mehnati — zamonaviy muhandislik va yaratuvchanlik ramzidir. O‘z mehnati bilan qiyinchiliklarni yengish har bir o‘quvchiga namuna bo‘la oladi.',
    modernConnectionRu: 'Подвиг Фархада перекликается с современным инженерным гением и настойчивостью в решении сложнейших глобальных задач.',
    keyWords: [
      {
        wordUz: 'Kulong',
        wordRu: 'Кирка (тесло)',
        definitionUz: 'Tosh va tog‘larni kesishda ishlatiladigan metall asbob.',
        definitionRu: 'Орудие камнереза для пробивания скал.'
      },
      {
        wordUz: 'Fidoyilik',
        wordRu: 'Самоотверженность',
        definitionUz: 'Boshqalar baxti uchun o‘z manfaatidan kechish.',
        definitionRu: 'Готовность трудиться ради блага других без корысти.'
      },
      {
        wordUz: 'Iroda',
        wordRu: 'Сила воли',
        definitionUz: 'Qiyinchiliklarga qaramay maqsadga erishish qat’iyati.',
        definitionRu: 'Упорство и решимость преодолевать любые препятствия.'
      }
    ],
    sequenceTask: {
      instructionUz: 'Farhod jasorati bosqichlarini ketma-ketlikda joylashtiring:',
      instructionRu: 'Восстановите хронологию подвига Фархада:',
      items: [
        { id: '1', textUz: 'Farhod yoshligida turli hunarlarni, xususan tosh yo‘nishni o‘rgandi.', textRu: 'Фархад в юности овладел науками и мастерством камнетеса.', correctOrder: 1 },
        { id: '2', textUz: 'U Shirinning yurtida xalq suvsizlikdan qiynalayotganini ko‘rdi.', textRu: 'Он прибыл в страну Ширин и увидел, как люди страдают от безводья.', correctOrder: 2 },
        { id: '3', textUz: 'Farhod ulkan tosh tog‘ni kulong bilan yorib, qoyadan ariq ochdi.', textRu: 'Взяв кирку, Фархад прорубил гранитную скалу и пустил живительную воду.', correctOrder: 3 },
        { id: '4', textUz: 'Xalq suvga yetishdi, Shirin esa uning mardligi va qalb pokligiga maftun bo‘ldi.', textRu: 'Народ обрел воду, а Ширин восхитилась благородством героя.', correctOrder: 4 }
      ]
    },
    quiz: {
      questionUz: 'Farhod tog‘ni nima uchun talqon qildi?',
      questionRu: 'Ради чего Фархад совершил свой титанический подвиг в горах?',
      optionsUz: ['Xalqqa suv olib kelish uchun', 'Qimmatbaho oltin topish uchun', 'O‘z kuchini maqtash uchun', 'Uxlaydigan g‘or qurish uchun'],
      optionsRu: ['Чтобы провести воду для жаждущих людей', 'Чтобы найти золото', 'Чтобы похвастаться силой', 'Чтобы построить пещеру'],
      correctIndex: 0,
      explanationUz: 'Farhod xalqni suvsizlik azobidan qutqarish uchun tosh tog‘ni yorib ariq o‘tkazgan.',
      explanationRu: 'Фархад пробил скалы, чтобы дать людям воду и оживить засушливую долину.'
    }
  },
  {
    id: 'layli-va-majnun',
    order: 3,
    titleUz: 'Layli va Majnun',
    titleRu: 'Лейли и Меджнун',
    meaningUz: 'Pokiza tuyg‘ular va ma’naviy muhabbat fojiasi',
    meaningRu: 'Трагедия возвышенной, чистой духовной любви',
    writtenYear: '1484-yil',
    symbolUz: 'Sahrodagi samimiyat va erkin ruh',
    symbolRu: 'Свободный дух и чистота сердца среди пустыни',
    overviewUz: 'Sharq adabiyotining eng mashhur sevgi qissasi. Navoiy talqinida Qays (Majnun)ning muhabbati dunyoviy chegaralardan oshib, yuksak ma’naviy poklik va ruhiy erkinlikka aylanadi.',
    overviewRu: 'Величайшая трагическая поэма Востока. В интерпретации Навои любовь Кайса (Меджнуна) перерастает в абсолютную преданность идеалу и неприятие лицемерия.',
    mainIdeaUz: 'Haqiqiy sevgi moddiy manfaat, qabila xurofoti va boylikka bo‘ysunmaydi. Insoniy tuyg‘ular erkin bo‘lishi lozim.',
    mainIdeaRu: 'Истинное чувство не измеряется золотом и социальными предрассудками; чистота сердца побеждает косность.',
    characters: [
      {
        nameUz: 'Qays (Majnun)',
        nameRu: 'Кайс (Меджнун)',
        roleUz: 'Bosh qahramon, shoir',
        roleRu: 'Главный герой, поэт',
        traitsUz: 'Hissiyotga boy, yolg‘onchilikka toqatsiz, sahroda hayvonlar bilan do‘stlashgan pok qalb.',
        traitsRu: 'Искренний, тонко чувствующий мир, презирающий ложь и живущий в гармонии с природой.'
      },
      {
        nameUz: 'Layli',
        nameRu: 'Лейли',
        roleUz: 'Sevukli qiz',
        roleRu: 'Возлюбленная',
        traitsUz: 'Sadoqatli, qat’iyatli, o‘z sevgisiga oxirigacha vafodor qolgan nozik qiz.',
        traitsRu: 'Стойкая, благородная, оставшаяся верной своему идеалу до конца.'
      },
      {
        nameUz: 'Navfal',
        nameRu: 'Науфал',
        roleUz: 'Saxiy sarkarda',
        roleRu: 'Благородный полководец',
        traitsUz: 'Majnunga yordam berishga uringan mard jangchi.',
        traitsRu: 'Смелый воин, пытавшийся помочь воссоединению влюбленных.'
      }
    ],
    modernConnectionUz: 'Inson o‘z tuyg‘ularida, do‘stligida va so‘zida soxta bo‘lmasligi, boshqalar ko‘ngliga ozor yetkazmasligi kerak.',
    modernConnectionRu: 'Урок искренности: умение быть верным своему выбору и сопротивляться несправедливым стереотипам общества.',
    keyWords: [
      {
        wordUz: 'Majnun',
        wordRu: 'Одержимый (любовью)',
        definitionUz: 'Ishq o‘tida butun borlig‘ini unutgan oshiq.',
        definitionRu: 'Человек, беззаветно увлеченный идеалом.'
      },
      {
        wordUz: 'Sadoqat',
        wordRu: 'Преданность',
        definitionUz: 'Va’da va ahdida sobit turish.',
        definitionRu: 'Непоколебимая верность слову и чувству.'
      },
      {
        wordUz: 'Maktab',
        wordRu: 'Школа',
        definitionUz: 'Qays va Layli ilk bor uchrashgan va o‘qigan ziyo maskani.',
        definitionRu: 'Место первой встречи героев поэмы.'
      }
    ],
    sequenceTask: {
      instructionUz: 'Dostondagi voqealarni ketma-ketlikda joylashtiring:',
      instructionRu: 'Расставьте события поэмы в хронологическом порядке:',
      items: [
        { id: '1', textUz: 'Qays va Layli maktabda birga o‘qib, bir-birlariga mehr qo‘ydilar.', textRu: 'Кайс и Лейли учились в одной школе и полюбили друг друга.', correctOrder: 1 },
        { id: '2', textUz: 'Qabila oqsoqollari ularning birga bo‘lishiga qarshilik ko‘rsatdi.', textRu: 'Старейшины родов воспротивились их союзу из-за предрассудков.', correctOrder: 2 },
        { id: '3', textUz: 'Qays sahroga chiqib ketdi va she’rlari bilan butun olamni lol qoldirdi.', textRu: 'Кайс ушел в пустыню, где его стихи слушали птицы и звери.', correctOrder: 3 },
        { id: '4', textUz: 'Ularning pok muhabbati xalq xotirasida mangu afsonaga aylandi.', textRu: 'Их возвышенная любовь навечно осталась в памяти поколений.', correctOrder: 4 }
      ]
    },
    quiz: {
      questionUz: 'Qays va Layli qayerda ilk bor tanishishgan?',
      questionRu: 'Где впервые встретились Кайс и Лейли?',
      optionsUz: ['Bozorda', 'Maktabda tahsil olayotganda', 'Katta ziyofatda', 'Kemada'],
      optionsRu: ['На шумном базаре', 'В школе во время учебы', 'На царском пиру', 'На корабле'],
      correctIndex: 1,
      explanationUz: 'Qays va Layli bolalik chog‘ida maktabda birga ilm o‘rganish jarayonida tanishganlar.',
      explanationRu: 'Герои познакомились в школьные годы, когда вместе постигали грамоту.'
    }
  },
  {
    id: 'sabai-sayyor',
    order: 4,
    titleUz: 'Sab’ai sayyor',
    titleRu: 'Семь планет',
    meaningUz: '«Yetti sayyor (yetti osmon siri)»',
    meaningRu: '«Семь странников (планет)»',
    writtenYear: '1484-yil',
    symbolUz: 'Yetti rang, yetti xil xulq-atvor va nafs tarbiyasi',
    symbolRu: 'Семь цветов, семь характеров и обуздание эго',
    overviewUz: 'Bahrom Go‘r va Dilorom haqidagi sarguzashtli doston. Shoh yetti xil qasrda yetti nafar musofirning g‘aroyib hikoyalarini tinglaydi. Har bir hikoya inson fe’l-atvori va nafsini tarbiyalashga qaratilgan.',
    overviewRu: 'Поэма о царе Бахраме и музыкантше Дилорам. Бахрам строит семь дворцов разного цвета, слушая притчи путешественников, раскрывающие пороки и добродетели.',
    mainIdeaUz: 'Hukmdor faqat kayf-safo bilan mashg‘ul bo‘lmasligi, nafsini jilovlashi va davlat oldidagi mas’uliyatni unutmasligi shart.',
    mainIdeaRu: 'Правитель не должен предаваться праздности и охоте, забывая о благе подданных и законах мудрости.',
    characters: [
      {
        nameUz: 'Bahrom',
        nameRu: 'Бахрам',
        roleUz: 'Hukmdor va ovchi',
        roleRu: 'Царь и охотник',
        traitsUz: 'Jasur, lekin kayf-safoga beriluvchan, xatosini kech anglovchi.',
        traitsRu: 'Отважный, но легкомысленный правитель, проходящий через осознание ошибок.'
      },
      {
        nameUz: 'Dilorom',
        nameRu: 'Дилорам',
        roleUz: 'Cholg‘uchi qiz',
        roleRu: 'Музыкантша',
        traitsUz: 'San’atkor, go‘zal qo‘shiqchi, haqiqatni yuzga aytuvchi jasur qiz.',
        traitsRu: 'Одаренная певица и лютнистка, не побоявшаяся сказать государю правду.'
      }
    ],
    modernConnectionUz: 'Vaqtni behuda ko‘ngilxushlikka sarflamaslik, o‘z his-tuyg‘ularini boshqara bilish bugungi kunda ham muvaffaqiyat garovidir.',
    modernConnectionRu: 'Дисциплина ума, отказ от праздной траты времени и контроль над своими страстями — залог успеха в жизни.',
    keyWords: [
      {
        wordUz: 'Sayyora',
        wordRu: 'Планета',
        definitionUz: 'Falakdagi harakatlanuvchi osmon jismi.',
        definitionRu: 'Небесное тело, движущееся по орбите.'
      },
      {
        wordUz: 'Dilorom',
        wordRu: 'Успокаивающая сердце',
        definitionUz: 'Ko‘ngilga orom beruvchi, xushovoz.',
        definitionRu: 'Та, что дарует покой и радость душе.'
      },
      {
        wordUz: 'Nafs',
        wordRu: 'Эго, низменные страсти',
        definitionUz: 'Insonni faqat huzur-halovatga yetaklovchi istaklar.',
        definitionRu: 'Слепые желания, требующие духовного обуздания.'
      }
    ],
    sequenceTask: {
      instructionUz: 'Dostondagi voqealarni tartiblang:',
      instructionRu: 'Расставьте события поэмы по порядку:',
      items: [
        { id: '1', textUz: 'Bahrom ov paytida o‘z kuchiga haddan ziyod bino qo‘ydi.', textRu: 'Бахрам на охоте возгордился своей меткостью.', correctOrder: 1 },
        { id: '2', textUz: 'Dilorom uning bu kibrini tanqid qilib, haqiqatni aytdi.', textRu: 'Дилорам смело указала царю на его хвастовство.', correctOrder: 2 },
        { id: '3', textUz: 'Bahrom g‘azablanib uni adashtirdi, so‘ngra xatosini anglab qattiq afsuslandi.', textRu: 'В гневе царь прогнал ее, но вскоре горько раскаялся в содеянном.', correctOrder: 3 },
        { id: '4', textUz: 'Shoh yetti qasrda donishmandlar hikoyatlarini tinglab xulqini o‘ngladi.', textRu: 'Царь слушал мудрецов в семи дворцах и научился терпению.', correctOrder: 4 }
      ]
    },
    quiz: {
      questionUz: 'Bahrom Go‘r nima uchun afsuslandi?',
      questionRu: 'В чем горько раскаялся царь Бахрам?',
      optionsUz: ['Ovda kamonini yo‘qotgani uchun', 'Diloromga qilingan nohaqlik va g‘azabi uchun', 'Otini sota olmagani uchun', 'Qasr qura olmagani uchun'],
      optionsRu: ['Потерял лук на охоте', 'Вспылил и несправедливо обидел Дилорам', 'Не смог продать коня', 'Не успел достроить дворец'],
      correctIndex: 1,
      explanationUz: 'Bahrom o‘zining kibri va asossiz g‘azabi sababli Diloromga ozor yetkazganidan pushaymon bo‘ldi.',
      explanationRu: 'Царь осознал, что гнев и гордыня заставили его причинить боль любимому человеку.'
    }
  },
  {
    id: 'saddi-iskandariy',
    order: 5,
    titleUz: 'Saddi Iskandariy',
    titleRu: 'Вал Искандара',
    meaningUz: '«Iskandar (Aleksandr Makedonskiy) devori»',
    meaningRu: '«Стена Искандара (Александра)»',
    writtenYear: '1485-yil',
    symbolUz: 'Ilm-fan qalqoni va adolatli jamiyat',
    symbolRu: 'Щит науки и мудрое государственное устройство',
    overviewUz: '«Xamsa»ning yakunlovchi dostoni. Iskandar dunyo bo‘ylab safar qiladi. U yovuz qavmlarga qarshi ulkan to‘g‘on (devor) qurib, xalqlarni yovuzlikdan himoya qiladi. Asarda Arastu (Aristotel), Suqrot (Sokrat) kabi faylasuflar bilan ilmiy suhbatlar berilgan.',
    overviewRu: 'Финальная поэма «Хамсы». Искандар путешествует по миру, возводя грандиозную стену для защиты мирных народов от разрушителей. Поэма насыщена беседами с Аристотелем и Платоном.',
    mainIdeaUz: 'Jahongirlik faqat qilich bilan emas, aql, adolat va ilm yordamida bo‘lishi lozim. Dunyo hech kimga abadiy qolmaydi.',
    mainIdeaRu: 'Истинное величие правителя — в просвещении, науке и законе. Земная слава бренна, вечны лишь благие деяния.',
    characters: [
      {
        nameUz: 'Iskandar',
        nameRu: 'Искандар',
        roleUz: 'Adolatli jahongir',
        roleRu: 'Мудрый завоеватель',
        traitsUz: 'Olimlarni qadrlaydigan, adolatparvar, xalqlar tinchligini ko‘zlovchi.',
        traitsRu: 'Стремящийся к познанию мира правитель, опирающийся на советы ученых.'
      },
      {
        nameUz: 'Arastu (Aristotel)',
        nameRu: 'Аристотель (Арасту)',
        roleUz: 'Bosh donishmand va ustoz',
        roleRu: 'Главный наставник и мудрец',
        traitsUz: 'Iskandarning barcha savollariga falsafiy javob beruvchi aql mayoqi.',
        traitsRu: 'Великий мыслитель, наставляющий государя на путь добра и справедливости.'
      }
    ],
    modernConnectionUz: 'Bugungi globallashuv davrida tinchlikni saqlash, ilm-fanga tayanish va diplomatiya eng asosiy mezon ekanligini anglatadi.',
    modernConnectionRu: 'Призыв к миру, научному прогрессу и дипломатии вместо войн и разрушений.'
    ,
    keyWords: [
      {
        wordUz: 'Sadd',
        wordRu: 'Вал, защитная стена',
        definitionUz: 'Xalqni dushmandan himoya qiluvchi mustahkam to‘siq.',
        definitionRu: 'Мощное защитное инженерное сооружение.'
      },
      {
        wordUz: 'Hikmat',
        wordRu: 'Мудрость',
        definitionUz: 'Hayotiy haqiqatlarni chuqur bilish va to‘g‘ri qo‘llash.',
        definitionRu: 'Глубокое знание законов мироздания и жизни.'
      },
      {
        wordUz: 'Adolatparvar',
        wordRu: 'Справедливый',
        definitionUz: 'Haqiqatni hamma narsadan ustun qo‘yuvchi shaxs.',
        definitionRu: 'Человек, ставящий закон и правду превыше всего.'
      }
    ],
    sequenceTask: {
      instructionUz: 'Iskandar dostonidagi voqealarni tartiblang:',
      instructionRu: 'Восстановите сюжетную линию поэмы:',
      items: [
        { id: '1', textUz: 'Iskandar dunyoni idora etishda donishmand Arastu maslahatlariga tayandi.', textRu: 'Искандар обратился за мудрыми советами к Аристотелю.', correctOrder: 1 },
        { id: '2', textUz: 'U tinch aholini tajovuzkor qavmlardan qutqarish uchun ulkan devor qurdirdi.', textRu: 'Он воздвиг непреодолимую стену для защиты мирных племен.', correctOrder: 2 },
        { id: '3', textUz: 'Dengiz qa’riga shisha idishda tushib, suv osti olamini o‘rgandi.', textRu: 'В стеклянном колоколе он опустился на дно моря для изучения глубин.', correctOrder: 3 },
        { id: '4', textUz: 'Vafoti oldidan: «Qo‘limni tobutdan chiqarib qo‘ying, dunyodan hech narsa olib ketolmasligimni hamma ko‘rsin», dedi.', textRu: 'Перед смертью он завещал оставить ладони открытыми, дабы все видели бренность золота.', correctOrder: 4 }
      ]
    },
    quiz: {
      questionUz: 'Iskandar vafotidan oldin odamlarga qanday ibrat qoldirdi?',
      questionRu: 'Какой глубокий символический наказ оставил Искандар перед уходом из жизни?',
      optionsUz: ['Hamma xazinasini yoqishni', 'Qo‘llarini tobutdan ochiq chiqarib qo‘yishni (dunyodan boylik olib ketilmasligini)', 'Faqat toshdan saroy qurishni', 'Barcha kitoblarni berkitishni'],
      optionsRu: ['Сжечь все сокровища', 'Оставить ладони открытыми в знак того, что земные богатства нельзя унести с собой', 'Построить дворец', 'Спрятать книги'],
      correctIndex: 1,
      explanationUz: 'Iskandar butun dunyoni zabt etgan bo‘lsa ham, narigi dunyoga odam faqat ezgu amallari bilan ketishini uqtirgan.',
      explanationRu: 'Полководец показал, что даже властелин мира уходит с пустыми руками, и бессмертны лишь добрые дела.'
    }
  }
];
