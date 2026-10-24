import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { navoiyChapters, navoiyTimeline, historicalPlaces } from '../../data/navoiyData';
import {
  Compass,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Award,
  ChevronRight,
  Sparkles,
  Layers
} from 'lucide-react';

export const NavoiyMuseumView: React.FC = () => {
  const { language, addXp, markChapterCompleted, progress } = useApp();

  const [activeTab, setActiveTab] = useState<'life' | 'timeline' | 'geography' | 'language'>('life');
  const [selectedChapterId, setSelectedChapterId] = useState<string>(navoiyChapters[0].id);
  const [selectedTimelineIndex, setSelectedTimelineIndex] = useState<number>(0);
  const [selectedPlaceId, setSelectedPlaceId] = useState<string>(historicalPlaces[0].id);

  // Chapter Quiz State
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Timeline mini-quiz state
  const [timelineQuizAnswer, setTimelineQuizAnswer] = useState<number | null>(null);
  const [timelineQuizSubmitted, setTimelineQuizSubmitted] = useState<boolean>(false);

  const activeChapter = navoiyChapters.find(c => c.id === selectedChapterId) || navoiyChapters[0];
  const activePlace = historicalPlaces.find(p => p.id === selectedPlaceId) || historicalPlaces[0];
  const activeTimeline = navoiyTimeline[selectedTimelineIndex];

  const handleChapterSelect = (id: string) => {
    setSelectedChapterId(id);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
  };

  const handleQuizSubmit = () => {
    if (selectedQuizOption === null) return;
    setQuizSubmitted(true);
    if (selectedQuizOption === activeChapter.quiz.correctIndex) {
      addXp(30);
      markChapterCompleted(activeChapter.id);
    }
  };

  const handleTimelineQuizSubmit = () => {
    if (timelineQuizAnswer === null) return;
    setTimelineQuizSubmitted(true);
    if (timelineQuizAnswer === activeTimeline.correctOptionIndex) {
      addXp(20);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER SECTION */}
      <div className="space-y-4">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
          <span>{language === 'uz' ? 'Raqamli muzey' : 'Цифровой музей'}</span>
          <span>·</span>
          <span>{language === 'uz' ? 'XV asr Temuriylar davri' : 'XV век Эпоха Темуридов'}</span>
        </div>

        <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
          {language === 'uz' ? 'Navoiy olami' : 'Мир Алишера Навои'}
        </h1>

        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-3xl leading-relaxed">
          {language === 'uz'
            ? 'Buyuk o‘zbek shoiri, mutafakkiri va davlat arbobi Alisher Navoiy hayoti, bosib o‘tgan yo‘li, tarixiy shaharlar va ona tilimiz rivojidagi betakror xizmatlari bilan tanishing.'
            : 'Погрузитесь в эпоху Восточного Ренессанса: биография мыслителя, интерактивная хронология, исторические города Шелкового пути и величие тюркского слова.'}
        </p>

        {/* Tab Controls (Segmented control) */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-b border-stone-200 dark:border-stone-800 pb-3">
          <button
            onClick={() => setActiveTab('life')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'life'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>{language === 'uz' ? 'Navoiy hayoti va darslar' : 'Жизнь Навои'}</span>
          </button>

          <button
            onClick={() => setActiveTab('timeline')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'timeline'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>{language === 'uz' ? 'Interaktiv vaqt chizig‘i' : 'Лента времени'}</span>
          </button>

          <button
            onClick={() => setActiveTab('geography')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'geography'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>{language === 'uz' ? 'Tarixiy geografiya' : 'География Шелкового пути'}</span>
          </button>

          <button
            onClick={() => setActiveTab('language')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-colors cursor-pointer flex items-center gap-2 ${
              activeTab === 'language'
                ? 'bg-emerald-800 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>{language === 'uz' ? 'Navoiy va o‘zbek tili' : 'Навои и родной язык'}</span>
          </button>
        </div>
      </div>

      {/* TAB 1: NAVOIY HAYOTI (Chapters + Bilingual text + A/B/C tasks + Quiz) */}
      {activeTab === 'life' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Chapter Selector */}
          <div className="lg:col-span-4 space-y-2">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block px-1">
              {language === 'uz' ? 'Mavzular ro‘yxati' : 'Главы биографии'}
            </span>
            <div className="space-y-1.5">
              {navoiyChapters.map(chapter => {
                const isSelected = chapter.id === selectedChapterId;
                const isCompleted = progress.completedChapters.includes(chapter.id);
                return (
                  <button
                    key={chapter.id}
                    onClick={() => handleChapterSelect(chapter.id)}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer flex items-start gap-3 ${
                      isSelected
                        ? 'bg-emerald-50 dark:bg-emerald-950/40 border-emerald-700/50 dark:border-emerald-500/50 text-emerald-900 dark:text-emerald-200 shadow-xs'
                        : 'bg-white dark:bg-[#151D2A] border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-stone-300'
                    }`}
                  >
                    <span className="font-mono text-xs font-bold text-emerald-700 dark:text-emerald-400 mt-0.5">
                      {chapter.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-1">
                        <h4 className="text-sm font-semibold truncate">
                          {chapter[language === 'uz' ? 'titleUz' : 'titleRu']}
                        </h4>
                        {isCompleted && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-stone-500 dark:text-stone-400 line-clamp-1 mt-0.5">
                        {chapter[language === 'uz' ? 'shortDescUz' : 'shortDescRu']}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Main Reading & Practice Deck */}
          <div className="lg:col-span-8 space-y-8">
            {/* Reading Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
              <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider">
                    {language === 'uz' ? 'Mavzu' : 'Глава'} {activeChapter.number}
                  </span>
                  <h2 className="font-display-title text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                    {activeChapter[language === 'uz' ? 'titleUz' : 'titleRu']}
                  </h2>
                </div>
                <span className="text-xs text-stone-400 bg-stone-100 dark:bg-stone-800 px-2.5 py-1 rounded-md tabular-nums">
                  {activeChapter[language === 'uz' ? 'readingTimeUz' : 'readingTimeRu']}
                </span>
              </div>

              {/* Bilingual Content (Side-by-side or stacked) */}
              <div className="space-y-4 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                <div className="space-y-3">
                  <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    {language === 'uz' ? 'O‘zbekcha matn' : 'Текст на узбекском'}
                  </h4>
                  {activeChapter.contentUz.map((p, idx) => (
                    <p key={idx} className="font-serif-title text-base sm:text-lg leading-relaxed text-stone-900 dark:text-stone-100">
                      {p}
                    </p>
                  ))}
                </div>

                <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-2">
                  <h4 className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
                    {language === 'uz' ? 'Ruscha tarjimasi va izohi' : 'Русский перевод и адаптация'}
                  </h4>
                  {activeChapter.contentRu.map((p, idx) => (
                    <p key={idx} className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              {/* Key Terms */}
              <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3">
                <h4 className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                  {language === 'uz' ? 'Muhim adabiy va tarixiy atamalar' : 'Ключевые термины'}
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {activeChapter.terms.map((t, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/60 dark:border-stone-700/60 space-y-1"
                    >
                      <span className="font-semibold text-xs text-stone-900 dark:text-stone-100 block">
                        {t[language === 'uz' ? 'termUz' : 'termRu']}
                      </span>
                      <p className="text-[11px] text-stone-600 dark:text-stone-300 leading-normal">
                        {t[language === 'uz' ? 'meaningUz' : 'meaningRu']}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Historical Fact Callout */}
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 space-y-1">
                <span className="text-[11px] font-semibold text-amber-800 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{language === 'uz' ? 'Haqiqiy tarixiy fakt' : 'Исторический факт'}</span>
                </span>
                <p className="text-xs sm:text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
                  {activeChapter[language === 'uz' ? 'factUz' : 'factRu']}
                </p>
              </div>

              {/* Ponder Question */}
              <div className="p-4 rounded-xl bg-sky-50/80 dark:bg-sky-950/30 border border-sky-200/60 dark:border-sky-800/40 space-y-1">
                <span className="text-[11px] font-semibold text-sky-800 dark:text-sky-300 uppercase tracking-wider flex items-center gap-1.5">
                  <HelpCircle className="w-3.5 h-3.5" />
                  <span>{language === 'uz' ? 'O‘ylantiruvchi savol' : 'Вопрос для размышления'}</span>
                </span>
                <p className="text-xs sm:text-sm text-sky-900 dark:text-sky-200 leading-relaxed font-medium">
                  {activeChapter[language === 'uz' ? 'ponderQuestionUz' : 'ponderQuestionRu']}
                </p>
              </div>
            </div>

            {/* Differentiated A/B/C Tasks */}
            <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
              <h3 className="font-display-title text-lg font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Layers className="w-4 h-4 text-emerald-700" />
                <span>{language === 'uz' ? 'Differensial topshiriqlar (A, B, C daraja)' : 'Дифференцированные задания (A, B, C)'}</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {activeChapter.tasks.map((task, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 flex flex-col justify-between space-y-2"
                  >
                    <div className="space-y-1.5">
                      <span className="text-[11px] font-bold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                        {task[language === 'uz' ? 'levelNameUz' : 'levelNameRu']}
                      </span>
                      <p className="text-xs text-stone-800 dark:text-stone-200 leading-relaxed">
                        {task[language === 'uz' ? 'taskUz' : 'taskRu']}
                      </p>
                    </div>
                    <div className="text-[11px] text-stone-500 pt-2 border-t border-stone-200/60 dark:border-stone-700">
                      <span className="font-semibold">{language === 'uz' ? 'Ko‘rsatma: ' : 'Подсказка: '}</span>
                      <span>{task[language === 'uz' ? 'hintUz' : 'hintRu']}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mini-Quiz for Chapter Mastery */}
            <div className="p-6 rounded-2xl bg-stone-100/70 dark:bg-stone-900/60 border border-stone-200 dark:border-stone-800 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-display-title text-base font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-700" />
                  <span>{language === 'uz' ? 'Mavzuni mustahkamlovchi mini-test' : 'Мини-тест по главе'}</span>
                </h3>
                <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                  +30 XP
                </span>
              </div>

              <p className="text-sm font-medium text-stone-800 dark:text-stone-200">
                {activeChapter.quiz[language === 'uz' ? 'questionUz' : 'questionRu']}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeChapter.quiz[language === 'uz' ? 'optionsUz' : 'optionsRu'].map((opt, idx) => {
                  const isSelected = selectedQuizOption === idx;
                  const isCorrect = idx === activeChapter.quiz.correctIndex;
                  return (
                    <button
                      key={idx}
                      disabled={quizSubmitted}
                      onClick={() => setSelectedQuizOption(idx)}
                      className={`p-3 rounded-xl text-left text-xs sm:text-sm font-medium transition-all cursor-pointer border ${
                        isSelected
                          ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 font-semibold'
                          : 'border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-50'
                      } ${
                        quizSubmitted && isCorrect
                          ? 'bg-emerald-100 dark:bg-emerald-900/50 border-emerald-600 text-emerald-900 dark:text-emerald-100'
                          : ''
                      } ${
                        quizSubmitted && isSelected && !isCorrect
                          ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200'
                          : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span>{opt}</span>
                        {quizSubmitted && isCorrect && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                        )}
                        {quizSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-rose-600" />
                        )}
                      </div>
                    </button>
                  );
                })}
              </div>

              {!quizSubmitted ? (
                <button
                  disabled={selectedQuizOption === null}
                  onClick={handleQuizSubmit}
                  className="px-5 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {language === 'uz' ? 'Javobni tekshirish' : 'Проверить ответ'}
                </button>
              ) : (
                <div className="p-3.5 rounded-xl bg-stone-200/80 dark:bg-stone-800 text-xs space-y-1">
                  <span className="font-semibold text-stone-900 dark:text-stone-100 block">
                    {selectedQuizOption === activeChapter.quiz.correctIndex
                      ? (language === 'uz' ? 'To‘g‘ri javob! Siz 30 XP oldingiz.' : 'Верно! Вы получили 30 XP.')
                      : (language === 'uz' ? 'Xato javob bo‘ldi.' : 'Ответ не совсем верен.')}
                  </span>
                  <p className="text-stone-600 dark:text-stone-300">
                    {activeChapter.quiz[language === 'uz' ? 'explanationUz' : 'explanationRu']}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 2: INTERAKTIV VAQT CHIZIG‘I (Timeline) */}
      {activeTab === 'timeline' && (
        <div className="space-y-8">
          {/* Timeline Horizontal Year Strip */}
          <div className="p-4 sm:p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block mb-4">
              {language === 'uz' ? 'Muhim tarixiy sanani tanlang (1441–1501)' : 'Выберите ключевую дату (1441–1501)'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2">
              {navoiyTimeline.map((item, idx) => {
                const isActive = idx === selectedTimelineIndex;
                return (
                  <button
                    key={item.year}
                    onClick={() => {
                      setSelectedTimelineIndex(idx);
                      setTimelineQuizAnswer(null);
                      setTimelineQuizSubmitted(false);
                    }}
                    className={`p-3 rounded-xl border text-center transition-all cursor-pointer ${
                      isActive
                        ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                        : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-emerald-700'
                    }`}
                  >
                    <span className="block text-sm sm:text-base font-bold font-mono">
                      {item.year}
                    </span>
                    <span className="text-[10px] truncate block opacity-90">
                      {item[language === 'uz' ? 'locationUz' : 'locationRu']}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Timeline Event Detail View */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 font-mono tracking-wide">
                  {activeTimeline.yearDisplay} · {activeTimeline[language === 'uz' ? 'locationUz' : 'locationRu']}
                </span>
                <h3 className="font-display-title text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                  {activeTimeline[language === 'uz' ? 'titleUz' : 'titleRu']}
                </h3>
              </div>
            </div>

            <p className="text-base text-stone-700 dark:text-stone-300 leading-relaxed max-w-3xl">
              {activeTimeline[language === 'uz' ? 'descUz' : 'descRu']}
            </p>

            <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40">
              <span className="text-xs font-semibold text-amber-900 dark:text-amber-300 block mb-1">
                {language === 'uz' ? 'Tarixiy qayd:' : 'Историческая заметка:'}
              </span>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {activeTimeline[language === 'uz' ? 'factUz' : 'factRu']}
              </p>
            </div>

            {/* Mini Timeline Question */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-stone-500">
                {language === 'uz' ? 'Tezkor savol:' : 'Вопрос по событию:'}
              </span>
              <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                {activeTimeline[language === 'uz' ? 'questionUz' : 'questionRu']}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activeTimeline[language === 'uz' ? 'questionOptionsUz' : 'questionOptionsRu'].map((opt, oIdx) => {
                  const isChosen = timelineQuizAnswer === oIdx;
                  const isRight = oIdx === activeTimeline.correctOptionIndex;
                  return (
                    <button
                      key={oIdx}
                      disabled={timelineQuizSubmitted}
                      onClick={() => setTimelineQuizAnswer(oIdx)}
                      className={`p-2.5 rounded-lg text-xs font-medium text-left border transition-all cursor-pointer ${
                        isChosen
                          ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200'
                          : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                      } ${
                        timelineQuizSubmitted && isRight
                          ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-600 font-semibold'
                          : ''
                      }`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>

              {!timelineQuizSubmitted ? (
                <button
                  disabled={timelineQuizAnswer === null}
                  onClick={handleTimelineQuizSubmit}
                  className="px-4 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {language === 'uz' ? 'Tekshirish' : 'Проверить'}
                </button>
              ) : (
                <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                  {timelineQuizAnswer === activeTimeline.correctOptionIndex
                    ? (language === 'uz' ? 'To‘g‘ri javob! +20 XP qo‘shildi.' : 'Правильно! +20 XP начислено.')
                    : (language === 'uz' ? 'Noto‘g‘ri bo‘ldi.' : 'Неверно.')}
                </p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* TAB 3: NAVOIY GEOGRAFIYASI (Interactive Schematic Silk Road Map) */}
      {activeTab === 'geography' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Visual Interactive Map / Panorama Canvas */}
            <div className="lg:col-span-7 space-y-4">
              <div className="relative rounded-2xl overflow-hidden border border-stone-200 dark:border-stone-800 shadow-md bg-stone-900 aspect-video group">
                <img
                  src="/src/assets/images/herat_historical_city_1792856487004.jpg"
                  alt="Hirot qadimiy shahri"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-85 group-hover:scale-102 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-stone-950/40" />

                {/* Interactive Location Nodes Overlaid */}
                <div className="absolute inset-0 p-6 flex flex-col justify-between">
                  <div className="flex items-center justify-between text-white">
                    <span className="text-xs uppercase tracking-widest font-semibold bg-stone-900/80 px-2.5 py-1 rounded-md backdrop-blur-xs">
                      {language === 'uz' ? 'Buyuk Ipak Yo‘li xaritasi' : 'Карта Шелкового пути'}
                    </span>
                    <span className="text-[11px] text-amber-300">
                      {language === 'uz' ? 'Shaharni tanlang' : 'Выберите город'}
                    </span>
                  </div>

                  {/* Cities Pills inside Map */}
                  <div className="flex flex-wrap gap-2">
                    {historicalPlaces.map(place => {
                      const isSelected = place.id === selectedPlaceId;
                      return (
                        <button
                          key={place.id}
                          onClick={() => setSelectedPlaceId(place.id)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer backdrop-blur-md flex items-center gap-1.5 ${
                            isSelected
                              ? 'bg-amber-400 text-stone-950 shadow-md scale-105'
                              : 'bg-stone-900/80 hover:bg-stone-800/90 text-stone-200 border border-stone-700'
                          }`}
                        >
                          <MapPin className="w-3.5 h-3.5" />
                          <span>{place[language === 'uz' ? 'nameUz' : 'nameRu']}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <p className="text-xs text-stone-500 italic">
                {language === 'uz'
                  ? 'Tasvir: XV asr Hirot shahri, moviy gumbazlar va Temuriylar madaniyati markazi (Badiiy tarixiy rekonstruksiya).'
                  : 'Иллюстрация: Герат XV века — столица эпохи Возрождения Востока (историческая реконструкция).'}
              </p>
            </div>

            {/* Selected City Details Card */}
            <div className="lg:col-span-5 p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
              <div className="border-b border-stone-100 dark:border-stone-800 pb-3">
                <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                  {activePlace[language === 'uz' ? 'roleUz' : 'roleRu']}
                </span>
                <h3 className="font-display-title text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                  {activePlace[language === 'uz' ? 'nameUz' : 'nameRu']}
                </h3>
              </div>

              <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {activePlace[language === 'uz' ? 'descUz' : 'descRu']}
              </p>

              <div className="space-y-2 pt-2 border-t border-stone-100 dark:border-stone-800">
                <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
                  {language === 'uz' ? 'Muhim me’moriy obidalar:' : 'Исторические объекты:'}
                </span>
                <ul className="space-y-1">
                  {activePlace[language === 'uz' ? 'monumentsUz' : 'monumentsRu'].map((monument, mIdx) => (
                    <li key={mIdx} className="text-xs text-stone-700 dark:text-stone-300 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-700 shrink-0" />
                      <span>{monument}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800/60 text-xs text-stone-600 dark:text-stone-300">
                <span className="font-semibold block mb-0.5 text-stone-900 dark:text-stone-100">
                  {language === 'uz' ? 'Tarixiy ahamiyati:' : 'Историческое значение:'}
                </span>
                <span>{activePlace[language === 'uz' ? 'significanceUz' : 'significanceRu']}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* TAB 4: NAVOIY VA O‘ZBEK TILI */}
      {activeTab === 'language' && (
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              {language === 'uz' ? 'Tilimiz faxri' : 'Гордость языка'}
            </span>
            <h2 className="font-display-title text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
              «Muhokamat ul-lug‘atayn» (1499) — O‘zbek adabiy tilining g‘alabasi
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed">
              {language === 'uz'
                ? 'Alisher Navoiy o‘zining butun hayoti va ijodini ona tilimizning go‘zalligi, qudrati va cheksiz imkoniyatlarini dunyoga isbotlashga bag‘ishladi.'
                : 'Алишер Навои совершил настоящий культурный подвиг: он отстоял право узбекского (старотюркского) языка быть языком высокой поэзии, науки и философии.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-stone-100 dark:border-stone-800">
            <div className="p-5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/50 dark:border-emerald-800/40 space-y-2">
              <h4 className="font-display-title text-base font-bold text-emerald-900 dark:text-emerald-200">
                {language === 'uz' ? '1. Sinonimlar va so‘z boyligi' : '1. Богатство синонимов'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {language === 'uz'
                  ? 'Navoiy asarda yig‘lamoq fe’lining 10 xil tuslanishini ko‘rsatadi: ingramoq, o‘kurnab yig‘lamoq, yosh to‘kmoq, fig‘on tortmoq, dod solmoq... Har biri inson qalbining o‘ziga xos holatini tasvirlaydi.'
                  : 'Навои приводит десятки тончайших нюансов глаголов: плакать, рыдать, тихо ронять слезы, стонать, голосить... Каждый оттенок точно передает движение сердца.'}
              </p>
            </div>

            <div className="p-5 rounded-xl bg-amber-50/60 dark:bg-amber-950/30 border border-amber-200/50 dark:border-amber-800/40 space-y-2">
              <h4 className="font-display-title text-base font-bold text-amber-900 dark:text-amber-200">
                {language === 'uz' ? '2. Adabiy mustaqillik' : '2. Литературная независимость'}
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {language === 'uz'
                  ? 'Navoiygacha turkiy shoirlar faqat forsiy tilda yozishga majbur deb o‘ylashardi. Navoiy esa o‘z ijodi bilan turkiy tilning har qanday tildan qolishmasligini amalda ko‘rsatdi.'
                  : 'До Навои многие считали тюркский язык неподходящим для поэзии. Навои доказал обратное, открыв новую эру в мировой тюркологии.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
