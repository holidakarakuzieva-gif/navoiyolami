import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import {
  Compass,
  BookOpen,
  Award,
  Sparkles,
  ArrowRight,
  Quote,
  Lightbulb,
  CheckCircle2,
  Clock,
  Volume2,
  Share2,
  Printer
} from 'lucide-react';

export const HomeView: React.FC = () => {
  const { language, setCurrentSection, progress, addXp } = useApp();
  const t = translations[language];

  const [dailyTaskCompleted, setDailyTaskCompleted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);

  const dailyWisdom = {
    uz: 'Odamiy ersang demagil odamiy, Onikim yo‘q xalq g‘amidin g‘ami.',
    ru: 'Если человеком зовешься — не считай человеком того, в чьем сердце нет сострадания к людям.',
    sourceUz: '«Xamsa», «Hayrat ul-abror» dostonidan',
    sourceRu: '«Хамса», из поэмы «Смятение праведных»'
  };

  const handleSpeech = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (isPlayingAudio) {
      setIsPlayingAudio(false);
      return;
    }
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'uz' ? 'uz-UZ' : 'ru-RU';
    utterance.rate = 0.9;
    utterance.onend = () => setIsPlayingAudio(false);
    utterance.onerror = () => setIsPlayingAudio(false);
    setIsPlayingAudio(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleCompleteDailyTask = () => {
    if (dailyTaskCompleted) return;
    setDailyTaskCompleted(true);
    addXp(20);
  };

  const interactiveCards = [
    {
      id: 'whoWasNavoiy',
      section: 'navoiy',
      icon: Compass,
      time: t.cards.whoWasNavoiy.time,
      title: t.cards.whoWasNavoiy.title,
      desc: t.cards.whoWasNavoiy.desc,
      categoryUz: 'Tarixiy shaxs',
      categoryRu: 'Историческая личность'
    },
    {
      id: 'wordsWizard',
      section: 'glossary',
      icon: BookOpen,
      time: t.cards.wordsWizard.time,
      title: t.cards.wordsWizard.title,
      desc: t.cards.wordsWizard.desc,
      categoryUz: 'So‘z boyligi',
      categoryRu: 'Словарный запас'
    },
    {
      id: 'xamsaJourney',
      section: 'xamsa',
      icon: Award,
      time: t.cards.xamsaJourney.time,
      title: t.cards.xamsaJourney.title,
      desc: t.cards.xamsaJourney.desc,
      categoryUz: 'Besh doston',
      categoryRu: 'Пять поэм'
    },
    {
      id: 'understandWisdom',
      section: 'games',
      icon: Quote,
      time: t.cards.understandWisdom.time,
      title: t.cards.understandWisdom.title,
      desc: t.cards.understandWisdom.desc,
      categoryUz: 'Falsafa va etika',
      categoryRu: 'Философия и этика'
    },
    {
      id: 'thinkInUzbek',
      section: 'lessons',
      icon: Lightbulb,
      time: t.cards.thinkInUzbek.time,
      title: t.cards.thinkInUzbek.title,
      desc: t.cards.thinkInUzbek.desc,
      categoryUz: 'Nutq madaniyati',
      categoryRu: 'Культура речи'
    },
    {
      id: 'testYourself',
      section: 'games',
      icon: Sparkles,
      time: t.cards.testYourself.time,
      title: t.cards.testYourself.title,
      desc: t.cards.testYourself.desc,
      categoryUz: 'Viktorina',
      categoryRu: 'Викторина'
    }
  ];

  const quickFacts = [
    {
      id: 'fact-1',
      titleUz: '1441-yil',
      titleRu: '1441 год',
      descUz: 'Hirotda buyuk mutafakkir tavallud topgan sana.',
      descRu: 'Дата рождения великого мыслителя в Герате.'
    },
    {
      id: 'fact-2',
      titleUz: '26 000+ so‘z',
      titleRu: '26 000+ слов',
      descUz: 'Navoiy asarlarida qo‘llangan noyob so‘z boyligi.',
      descRu: 'Уникальный словарный фонд в произведениях поэта.'
    },
    {
      id: 'fact-3',
      titleUz: '«Xamsa» (1483–1485)',
      titleRu: '«Хамса» (1483–1485)',
      descUz: 'Turkiy tildagi birinchi besh doston, atigi 2 yilda yozilgan.',
      descRu: 'Первая «Хамса» на тюркском языке, написанная всего за 2 года.'
    },
    {
      id: 'fact-4',
      titleUz: '50+ til',
      titleRu: '50+ языков',
      descUz: 'Alisher Navoiy merosi jahon tillariga tarjima qilingan.',
      descRu: 'На столько языков переведены поэтические творения Навои.'
    }
  ];

  return (
    <div className="space-y-16 py-8 sm:py-12">
      {/* SECTION 1: HERO CONTAINER (Split 2-zone with Navoiy Portrait) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Text Block */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
                <span>{language === 'uz' ? '8-sinf maktab ta’lim portali' : 'Школьный портал для 8 класса'}</span>
                <span>·</span>
                <span>{language === 'uz' ? 'Mumtoz o‘zbek tili' : 'Узбекский язык'}</span>
              </div>

              <h1 className="font-display-title text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-stone-900 dark:text-stone-100 leading-tight">
                {t.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-stone-600 dark:text-stone-300 leading-relaxed max-w-2xl">
                {t.hero.subtitle}
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => setCurrentSection('navoiy')}
                className="px-6 py-3 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-medium text-sm transition-all shadow-sm hover:shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>{t.hero.startBtn}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => setCurrentSection('games')}
                className="px-6 py-3 rounded-xl bg-white dark:bg-stone-800 hover:bg-stone-100 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-100 border border-stone-300 dark:border-stone-700 font-medium text-sm transition-all cursor-pointer flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>{t.hero.testBtn}</span>
              </button>
            </div>

            {/* Student Progress Overview Strip */}
            <div className="p-4 rounded-xl bg-stone-100/80 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-800 space-y-2.5">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-stone-700 dark:text-stone-300">
                  {t.hero.progressLabel}
                </span>
                <span className="tabular-nums font-bold text-emerald-800 dark:text-emerald-400">
                  {progress.xp} XP / 700 XP
                </span>
              </div>
              <div className="w-full bg-stone-200 dark:bg-stone-700 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-emerald-700 dark:bg-emerald-500 h-2 rounded-full transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((progress.xp / 700) * 100))}%` }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-stone-500 dark:text-stone-400">
                <span>
                  {progress.completedLessons.length} {language === 'uz' ? 'dars o‘rganildi' : 'уроков пройдено'}
                </span>
                <span>
                  {progress.unlockedBadges.length} {language === 'uz' ? 'yutuq nishoni ochildi' : 'наград получено'}
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Image Card (Alisher Navoiy Historic Portrait) */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-2xl overflow-hidden border border-amber-900/10 dark:border-amber-500/20 shadow-md bg-stone-100 dark:bg-stone-900 flex-1 min-h-[380px] group">
              <img
                src="/src/assets/images/navoiy_portrait_1792856487096.jpg"
                alt="Alisher Navoiy tarixiy portreti"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
              {/* Subtle scrim overlay for caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/20 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="text-[11px] uppercase tracking-widest text-amber-300/90 font-semibold mb-1">
                  {language === 'uz' ? 'Tarixiy meros' : 'Историческое наследие'}
                </span>
                <h3 className="font-serif-title text-xl font-bold tracking-tight text-white">
                  Nizomiddin Mir Alisher Navoiy (1441–1501)
                </h3>
                <p className="text-xs text-stone-300 mt-1 leading-relaxed">
                  {language === 'uz'
                    ? 'Buyuk o‘zbek shoiri, mutafakkir va davlat arbobi'
                    : 'Великий поэт, мыслитель и основоположник узбекской литературы'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: DAILY WISDOM, DAILY TASK, DISCOVERY ROW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Daily Wisdom Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 flex items-center gap-1.5">
                  <Quote className="w-3.5 h-3.5" />
                  <span>{t.hero.dailyWisdomTitle}</span>
                </span>
                <button
                  onClick={() => handleSpeech(dailyWisdom[language])}
                  className="p-1 rounded-md text-stone-400 hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer"
                  title={language === 'uz' ? 'Ovoz chiqarib o‘qish' : 'Прослушать'}
                >
                  <Volume2 className={`w-4 h-4 ${isPlayingAudio ? 'text-emerald-600 animate-pulse' : ''}`} />
                </button>
              </div>
              <blockquote className="font-serif-title text-base sm:text-lg italic text-stone-800 dark:text-stone-200 leading-snug mb-2">
                “{dailyWisdom[language]}”
              </blockquote>
            </div>
            <span className="text-xs text-stone-500 dark:text-stone-400 border-t border-stone-100 dark:border-stone-800/80 pt-2">
              {dailyWisdom[language === 'uz' ? 'sourceUz' : 'sourceRu']}
            </span>
          </div>

          {/* Daily Challenge Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{t.hero.dailyTaskTitle}</span>
                </span>
                <span className="text-[11px] font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/50 px-2 py-0.5 rounded">
                  +20 XP
                </span>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {language === 'uz'
                  ? 'Bugun lug‘atdan 3 ta yangi o‘zbekcha so‘zni («ilm», «adolat», «mehr») o‘rganing va daftarga yozing.'
                  : 'Сегодня выучите 3 новых узбекских слова из словаря («ilm», «adolat», «mehr») и запишите в тетрадь.'}
              </p>
            </div>
            <div>
              <button
                onClick={handleCompleteDailyTask}
                disabled={dailyTaskCompleted}
                className={`w-full py-2 px-3 text-xs font-semibold rounded-lg flex items-center justify-center gap-2 transition-colors cursor-pointer ${
                  dailyTaskCompleted
                    ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300'
                    : 'bg-stone-900 hover:bg-stone-800 text-white dark:bg-emerald-800 dark:hover:bg-emerald-700'
                }`}
              >
                {dailyTaskCompleted ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>{language === 'uz' ? 'Topshiriq bajarildi!' : 'Задание выполнено!'}</span>
                  </>
                ) : (
                  <span>{language === 'uz' ? 'Bajarildi deb belgilash' : 'Отметить выполнение'}</span>
                )}
              </button>
            </div>
          </div>

          {/* Discovery Card */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center gap-1.5 mb-3 text-xs font-semibold uppercase tracking-wider text-sky-700 dark:text-sky-400">
                <Lightbulb className="w-3.5 h-3.5" />
                <span>{t.hero.discoveryTitle}</span>
              </div>
              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {t.hero.discoveryContent}
              </p>
            </div>
            <div className="text-xs text-sky-800 dark:text-sky-400 font-medium">
              <button
                onClick={() => setCurrentSection('navoiy')}
                className="hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>{language === 'uz' ? 'Tarixiy faktlar bilan tanishish' : 'Узнать больше фактов'}</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: SIX INTERACTIVE TOPIC CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200 dark:border-stone-800 pb-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
              {language === 'uz' ? 'Interaktiv ta’lim yo‘nalishlari' : 'Интерактивные направления обучения'}
            </span>
            <h2 className="font-display-title text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100 mt-1">
              {language === 'uz' ? 'Navoiy saboqlari va mashg‘ulotlar' : 'Уроки и практикумы Навои'}
            </h2>
          </div>
          <p className="text-xs text-stone-500 max-w-xs">
            {language === 'uz'
              ? '8-sinf dasturi asosida metodik ketma-ketlikda tuzilgan'
              : 'Составлено методически для 8 класса русских школ'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {interactiveCards.map(card => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                className="group p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs hover:border-emerald-700/50 dark:hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-stone-500 dark:text-stone-400">
                      {card[language === 'uz' ? 'categoryUz' : 'categoryRu']}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-stone-400 tabular-nums">
                      <Clock className="w-3 h-3" />
                      <span>{card.time}</span>
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-display-title text-lg font-bold text-stone-900 dark:text-stone-100 group-hover:text-emerald-800 dark:group-hover:text-emerald-400 transition-colors">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                    {card.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 dark:border-stone-800/80">
                  <button
                    onClick={() => setCurrentSection(card.section)}
                    className="w-full py-2 px-3 rounded-lg text-xs font-semibold text-emerald-800 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/40 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 transition-colors flex items-center justify-between cursor-pointer"
                  >
                    <span>{t.cards.openBtn}</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* SECTION 4: 60 SONIYADA NAVOIY (Quick Educational Micro-Facts) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-emerald-950 text-white relative overflow-hidden">
          <div className="relative z-10 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold tracking-wider text-amber-300 uppercase">
                  {language === 'uz' ? 'Tezkor bilimlar' : 'Экспресс-знания'}
                </span>
                <h3 className="font-display-title text-2xl font-bold mt-1">
                  {language === 'uz' ? '60 soniyada Alisher Navoiy' : 'Алишер Навои за 60 секунд'}
                </h3>
              </div>
              <button
                onClick={() => setCurrentSection('navoiy')}
                className="px-4 py-2 text-xs font-semibold rounded-lg bg-amber-400 hover:bg-amber-300 text-stone-950 transition-colors cursor-pointer self-start sm:self-auto"
              >
                {language === 'uz' ? 'To‘liq muzeyga o‘tish' : 'В цифровой музей'}
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
              {quickFacts.map(fact => (
                <div
                  key={fact.id}
                  className="p-4 rounded-xl bg-emerald-900/40 border border-emerald-800/60 space-y-1.5"
                >
                  <span className="text-lg font-bold text-amber-300 tabular-nums">
                    {fact[language === 'uz' ? 'titleUz' : 'titleRu']}
                  </span>
                  <p className="text-xs text-stone-300 leading-relaxed">
                    {fact[language === 'uz' ? 'descUz' : 'descRu']}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
