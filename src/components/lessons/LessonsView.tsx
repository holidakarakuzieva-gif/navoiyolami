import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { lessonsData, LessonUnit } from '../../data/lessonsData';
import {
  BookOpen,
  Volume2,
  CheckCircle2,
  Award,
  Clock,
  HelpCircle,
  FileText,
  ChevronRight,
  Sparkles
} from 'lucide-react';

export const LessonsView: React.FC = () => {
  const { language, markLessonCompleted, addXp, progress } = useApp();

  const [selectedLessonId, setSelectedLessonId] = useState<string>(lessonsData[0].id);
  const [activeTaskTab, setActiveTaskTab] = useState<'A' | 'B' | 'C'>('A');
  const [showSampleAnswer, setShowSampleAnswer] = useState<boolean>(false);
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);
  const [isSpeaking, setIsSpeaking] = useState<boolean>(false);

  const activeLesson: LessonUnit = lessonsData.find(l => l.id === selectedLessonId) || lessonsData[0];
  const isLessonFinished = progress.completedLessons.includes(activeLesson.id);

  const handleLessonSelect = (id: string) => {
    setSelectedLessonId(id);
    setActiveTaskTab('A');
    setShowSampleAnswer(false);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
  };

  const handlePlayRecitation = () => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (isSpeaking) {
      setIsSpeaking(false);
      return;
    }
    const textToSpeak = language === 'uz' ? activeLesson.recitationSnippetUz : activeLesson.recitationSnippetRu;
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.lang = language === 'uz' ? 'uz-UZ' : 'ru-RU';
    utterance.rate = 0.85;
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);
    setIsSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  const handleQuizSubmit = () => {
    if (selectedQuizOption === null) return;
    setQuizSubmitted(true);
    if (selectedQuizOption === activeLesson.quiz.correctIndex) {
      addXp(30);
      markLessonCompleted(activeLesson.id);
    }
  };

  const currentTask = activeLesson.tasks.find(t => t.level === activeTaskTab) || activeLesson.tasks[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER */}
      <div className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
          <span>{language === 'uz' ? '8-sinf o‘quv dasturi' : 'Учебная программа 8 класса'}</span>
          <span>·</span>
          <span>{language === 'uz' ? 'Metodik interaktiv darslar' : 'Интерактивные уроки'}</span>
        </div>

        <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
          {language === 'uz' ? 'Interaktiv darslar' : 'Интерактивные уроки'}
        </h1>

        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {language === 'uz'
            ? 'Rusiyzabon o‘quvchilar uchun soddalashtirilgan, bosqichma-bosqich metodika: qisqa audio mutolaa, yangi lug‘at va A/B/C darajali topshiriqlar.'
            : 'Пошаговые методические уроки: аудирование, культурологический словарь, разбор грамматических конструкций и уровневые задания.'}
        </p>
      </div>

      {/* LESSON PICKER TABS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {lessonsData.map(lesson => {
          const isSelected = lesson.id === selectedLessonId;
          const isDone = progress.completedLessons.includes(lesson.id);
          return (
            <button
              key={lesson.id}
              onClick={() => handleLessonSelect(lesson.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                isSelected
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-md'
                  : 'bg-white dark:bg-[#151D2A] border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-emerald-700/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded ${
                  isSelected ? 'bg-emerald-900 text-amber-300' : 'bg-stone-100 dark:bg-stone-800 text-stone-500'
                }`}>
                  {lesson.order} - {language === 'uz' ? 'dars' : 'урок'}
                </span>
                {isDone && <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-emerald-600'}`} />}
              </div>

              <h4 className="font-display-title text-xs sm:text-sm font-bold leading-snug line-clamp-2">
                {lesson[language === 'uz' ? 'titleUz' : 'titleRu']}
              </h4>

              <div className={`flex items-center gap-1 text-[11px] pt-1 ${isSelected ? 'text-emerald-100' : 'text-stone-400'}`}>
                <Clock className="w-3 h-3" />
                <span>{lesson.duration}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIVE LESSON WORKBENCH */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 cols: Lesson stages & Audio reading */}
        <div className="lg:col-span-8 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
              <div>
                <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                  {language === 'uz' ? 'Dars' : 'Урок'} {activeLesson.order} · {activeLesson.level}
                </span>
                <h2 className="font-display-title text-2xl font-bold text-stone-900 dark:text-stone-100 mt-1">
                  {activeLesson[language === 'uz' ? 'titleUz' : 'titleRu']}
                </h2>
              </div>
              <span className="text-xs bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 px-3 py-1 rounded-md self-start sm:self-auto">
                {activeLesson.duration}
              </span>
            </div>

            {/* Educational Objectives */}
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/70 dark:border-stone-700/60 space-y-1.5 text-xs">
              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  {language === 'uz' ? 'Dars maqsadi: ' : 'Цель урока: '}
                </span>
                <span className="text-stone-700 dark:text-stone-300">
                  {activeLesson[language === 'uz' ? 'goalUz' : 'goalRu']}
                </span>
              </div>
              <div>
                <span className="font-bold text-stone-900 dark:text-stone-100">
                  {language === 'uz' ? 'Kutilayotgan natija: ' : 'Ожидаемый результат: '}
                </span>
                <span className="text-stone-700 dark:text-stone-300">
                  {activeLesson[language === 'uz' ? 'outcomeUz' : 'outcomeRu']}
                </span>
              </div>
            </div>

            {/* Audio Recitation Snippet */}
            <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>{language === 'uz' ? 'Badiiy qiroat va talaffuz' : 'Художественное чтение'}</span>
                </span>
                <button
                  onClick={handlePlayRecitation}
                  className="px-3 py-1 text-xs font-semibold rounded-lg bg-amber-200/80 dark:bg-amber-900 text-amber-900 dark:text-amber-100 hover:bg-amber-300 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Volume2 className={`w-3.5 h-3.5 ${isSpeaking ? 'animate-bounce' : ''}`} />
                  <span>{isSpeaking ? (language === 'uz' ? 'To‘xtatish' : 'Стоп') : (language === 'uz' ? 'Eshitish' : 'Слушать')}</span>
                </button>
              </div>

              <blockquote className="font-serif-title text-base sm:text-lg italic text-stone-900 dark:text-stone-100 whitespace-pre-line leading-relaxed">
                {activeLesson[language === 'uz' ? 'recitationSnippetUz' : 'recitationSnippetRu']}
              </blockquote>
            </div>

            {/* 3 Lesson Stages */}
            <div className="space-y-4 pt-2">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {language === 'uz' ? 'Dars bosqichlari' : 'Этапы урока'}
              </h3>
              <div className="space-y-3">
                {activeLesson.stages.map((stg, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200 dark:border-stone-700/60 space-y-1.5"
                  >
                    <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 block">
                      {stg[language === 'uz' ? 'titleUz' : 'titleRu']}
                    </span>
                    <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                      {stg[language === 'uz' ? 'contentUz' : 'contentRu']}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Differentiated Practice (A, B, C Tabs) */}
            <div className="pt-4 border-t border-stone-100 dark:border-stone-800 space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <h3 className="font-display-title text-base font-bold text-stone-900 dark:text-stone-100">
                  {language === 'uz' ? 'Amaliy mustaqil topshiriq' : 'Практическое уровневое задание'}
                </h3>
                <div className="flex items-center gap-1 bg-stone-100 dark:bg-stone-800 p-0.5 rounded-lg text-xs">
                  {(['A', 'B', 'C'] as const).map(lvl => (
                    <button
                      key={lvl}
                      onClick={() => {
                        setActiveTaskTab(lvl);
                        setShowSampleAnswer(false);
                      }}
                      className={`px-3 py-1 rounded-md font-semibold transition-colors cursor-pointer ${
                        activeTaskTab === lvl
                          ? 'bg-emerald-800 text-white shadow-xs'
                          : 'text-stone-600 dark:text-stone-400 hover:text-stone-900'
                      }`}
                    >
                      {lvl} {language === 'uz' ? 'daraja' : 'уровень'}
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200 dark:border-stone-700 space-y-3">
                <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 block">
                  {currentTask[language === 'uz' ? 'nameUz' : 'nameRu']}
                </span>
                <p className="text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
                  {currentTask[language === 'uz' ? 'instructionUz' : 'instructionRu']}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => setShowSampleAnswer(prev => !prev)}
                    className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>{showSampleAnswer ? (language === 'uz' ? 'Namunani yashirish' : 'Скрыть образец') : (language === 'uz' ? 'To‘g‘ri namunani ko‘rish' : 'Показать эталонный ответ')}</span>
                  </button>

                  {showSampleAnswer && (
                    <div className="mt-3 p-3.5 rounded-xl bg-white dark:bg-stone-900 border border-emerald-300 dark:border-emerald-800 text-xs text-stone-700 dark:text-stone-300 space-y-1">
                      <span className="font-bold text-emerald-900 dark:text-emerald-300 block">
                        {language === 'uz' ? 'Namunaviy javob:' : 'Образец выполнения:'}
                      </span>
                      <p className="italic">
                        {currentTask[language === 'uz' ? 'sampleAnswerUz' : 'sampleAnswerRu']}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right 4 cols: Vocabulary Bank & Lesson Quiz */}
        <div className="lg:col-span-4 space-y-6">
          {/* Vocabulary Box */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800 dark:text-emerald-400 block">
              {language === 'uz' ? 'Dars lug‘ati' : 'Словарь урока'}
            </span>
            <div className="space-y-3">
              {activeLesson.vocabulary.map((v, vIdx) => (
                <div
                  key={vIdx}
                  className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                      {v.wordUz}
                    </span>
                    <span className="text-xs text-stone-500 italic">
                      {v.wordRu}
                    </span>
                  </div>
                  <p className="text-[11px] text-stone-600 dark:text-stone-300">
                    {language === 'uz' ? v.usageUz : v.usageRu}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Lesson Checkpoint Quiz */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {language === 'uz' ? 'Darsni yakunlash testi' : 'Проверочный тест'}
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                +30 XP
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-stone-900 dark:text-stone-100">
              {activeLesson.quiz[language === 'uz' ? 'questionUz' : 'questionRu']}
            </p>

            <div className="space-y-2">
              {activeLesson.quiz[language === 'uz' ? 'optionsUz' : 'optionsRu'].map((opt, oIdx) => {
                const isSelected = selectedQuizOption === oIdx;
                const isCorrect = oIdx === activeLesson.quiz.correctIndex;
                return (
                  <button
                    key={oIdx}
                    disabled={quizSubmitted}
                    onClick={() => setSelectedQuizOption(oIdx)}
                    className={`w-full p-2.5 rounded-xl text-left text-xs font-medium border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200'
                        : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                    } ${
                      quizSubmitted && isCorrect
                        ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-600 font-semibold'
                        : ''
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {!quizSubmitted ? (
              <button
                disabled={selectedQuizOption === null}
                onClick={handleQuizSubmit}
                className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold disabled:opacity-50 transition-colors cursor-pointer"
              >
                {language === 'uz' ? 'Darsni tasdiqlash' : 'Завершить урок и получить XP'}
              </button>
            ) : (
              <div className="p-3.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs text-stone-700 dark:text-stone-300 space-y-1">
                <span className="font-bold block text-stone-900 dark:text-stone-100">
                  {selectedQuizOption === activeLesson.quiz.correctIndex
                    ? (language === 'uz' ? 'Dars muvaffaqiyatli yakunlandi!' : 'Урок успешно завершен!')
                    : (language === 'uz' ? 'Xatolik bo‘ldi.' : 'Неверно.')}
                </span>
                <p>{activeLesson.quiz[language === 'uz' ? 'explanationUz' : 'explanationRu']}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
