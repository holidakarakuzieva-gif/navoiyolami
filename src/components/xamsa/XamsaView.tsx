import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { xamsaEpics } from '../../data/xamsaData';
import {
  Award,
  BookOpen,
  Users,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Shuffle,
  ArrowRight,
  Sparkles,
  HeartHandshake
} from 'lucide-react';

export const XamsaView: React.FC = () => {
  const { language, addXp, markEpicCompleted, progress } = useApp();

  const [selectedEpicId, setSelectedEpicId] = useState<string>(xamsaEpics[0].id);

  // Sequence Task State for currently active epic
  const activeEpic = xamsaEpics.find(e => e.id === selectedEpicId) || xamsaEpics[0];

  const [sequenceItems, setSequenceItems] = useState<{ id: string; textUz: string; textRu: string; correctOrder: number }[]>(
    () => [...activeEpic.sequenceTask.items].sort(() => Math.random() - 0.5)
  );
  const [sequenceChecked, setSequenceChecked] = useState<boolean>(false);
  const [sequenceIsCorrect, setSequenceIsCorrect] = useState<boolean>(false);

  // Quiz State
  const [selectedQuizOption, setSelectedQuizOption] = useState<number | null>(null);
  const [quizSubmitted, setQuizSubmitted] = useState<boolean>(false);

  // Change Epic
  const handleSelectEpic = (id: string) => {
    setSelectedEpicId(id);
    const newEpic = xamsaEpics.find(e => e.id === id) || xamsaEpics[0];
    setSequenceItems([...newEpic.sequenceTask.items].sort(() => Math.random() - 0.5));
    setSequenceChecked(false);
    setSequenceIsCorrect(false);
    setSelectedQuizOption(null);
    setQuizSubmitted(false);
  };

  // Reorder Sequence Item Up/Down
  const moveItem = (index: number, direction: 'up' | 'down') => {
    if (sequenceChecked) return;
    const newItems = [...sequenceItems];
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= newItems.length) return;
    const temp = newItems[index];
    newItems[index] = newItems[targetIndex];
    newItems[targetIndex] = temp;
    setSequenceItems(newItems);
  };

  const handleCheckSequence = () => {
    let correct = true;
    for (let i = 0; i < sequenceItems.length; i++) {
      if (sequenceItems[i].correctOrder !== i + 1) {
        correct = false;
        break;
      }
    }
    setSequenceChecked(true);
    setSequenceIsCorrect(correct);
    if (correct) {
      addXp(35);
      markEpicCompleted(activeEpic.id);
    }
  };

  const handleResetSequence = () => {
    setSequenceItems([...activeEpic.sequenceTask.items].sort(() => Math.random() - 0.5));
    setSequenceChecked(false);
    setSequenceIsCorrect(false);
  };

  const handleQuizSubmit = () => {
    if (selectedQuizOption === null) return;
    setQuizSubmitted(true);
    if (selectedQuizOption === activeEpic.quiz.correctIndex) {
      addXp(25);
      markEpicCompleted(activeEpic.id);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER SECTION with illuminated manuscript art */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-stone-200 dark:border-stone-800 pb-8">
        <div className="lg:col-span-8 space-y-4">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
            <span>{language === 'uz' ? 'Mumtoz shoh asar' : 'Шедевр мировой классики'}</span>
            <span>·</span>
            <span>1483–1485</span>
          </div>

          <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
            {language === 'uz' ? '«Xamsa» — Besh doston olami' : '«Хамса» — Вселенная пяти поэм'}
          </h1>

          <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl">
            {language === 'uz'
              ? 'Alisher Navoiy jahon adabiyoti tarixida birinchi bo‘lib turkiy tilda beshta doston — «Xamsa» yaratdi. Har bir doston insoniylik, mehr, adolat va ilm madhiyasi sifatida yangraydi.'
              : 'Алишер Навои впервые в истории создал грандиозный свод «Хамса» на староузбекском языке. Пять поэм — это энциклопедия этики, любви, созидательного подвига и государственной мудрости.'}
          </p>
        </div>

        <div className="lg:col-span-4">
          <div className="rounded-2xl overflow-hidden border border-amber-900/20 dark:border-amber-400/20 shadow-md aspect-4/3 relative group">
            <img
              src="/src/assets/images/xamsa_manuscript_1792856487842.jpg"
              alt="Xamsa qo‘lyozmasi"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-transparent flex items-end p-4">
              <span className="text-xs text-amber-200 font-serif-title">
                {language === 'uz' ? 'Xamsa qo‘lyozmasi sahifasi (Zarhal bezaklar)' : 'Оригинал рукописи Хамсы (Золоченая миниатюра)'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 5 DOSTON SELECTOR CARDS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
        {xamsaEpics.map(epic => {
          const isSelected = epic.id === selectedEpicId;
          const isDone = progress.completedEpics.includes(epic.id);
          return (
            <button
              key={epic.id}
              onClick={() => handleSelectEpic(epic.id)}
              className={`p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-3 ${
                isSelected
                  ? 'bg-emerald-800 text-white border-emerald-800 shadow-md scale-102'
                  : 'bg-white dark:bg-[#151D2A] border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 hover:border-emerald-700/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className={`text-[10px] font-bold font-mono px-2 py-0.5 rounded ${
                  isSelected ? 'bg-emerald-900 text-amber-300' : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400'
                }`}>
                  {epic.order} - {language === 'uz' ? 'doston' : 'поэма'}
                </span>
                {isDone && <CheckCircle2 className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-emerald-600'}`} />}
              </div>

              <div>
                <h4 className="font-display-title text-base font-bold leading-snug">
                  {epic[language === 'uz' ? 'titleUz' : 'titleRu']}
                </h4>
                <span className={`text-[11px] block mt-1 ${isSelected ? 'text-emerald-100' : 'text-stone-500'}`}>
                  {epic.writtenYear}
                </span>
              </div>

              <div className={`text-[11px] pt-2 border-t ${isSelected ? 'border-emerald-700/80 text-emerald-100' : 'border-stone-100 dark:border-stone-800 text-stone-500'}`}>
                {epic[language === 'uz' ? 'symbolUz' : 'symbolRu']}
              </div>
            </button>
          );
        })}
      </div>

      {/* ACTIVE EPIC DETAIL DISPLAY */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Plot, Meaning & Characters */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-5">
            <div className="border-b border-stone-100 dark:border-stone-800 pb-4">
              <div className="flex items-center justify-between text-xs text-stone-500 mb-1">
                <span>{language === 'uz' ? 'Doston nomi ma’nosi:' : 'Значение названия:'}</span>
                <span className="font-mono">{activeEpic.writtenYear}</span>
              </div>
              <h2 className="font-display-title text-2xl sm:text-3xl font-bold text-stone-900 dark:text-stone-100">
                {activeEpic[language === 'uz' ? 'titleUz' : 'titleRu']}
              </h2>
              <p className="text-sm font-semibold text-emerald-800 dark:text-emerald-400 mt-1">
                {activeEpic[language === 'uz' ? 'meaningUz' : 'meaningRu']}
              </p>
            </div>

            {/* Overview / Plot */}
            <div className="space-y-3">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {language === 'uz' ? 'Qisqa mazmuni va g‘oyasi' : 'Краткое содержание и идея'}
              </h4>
              <p className="text-sm sm:text-base text-stone-700 dark:text-stone-300 leading-relaxed font-serif-title text-lg">
                {activeEpic[language === 'uz' ? 'overviewUz' : 'overviewRu']}
              </p>
              <div className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-700/60 text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                <span className="font-bold text-stone-900 dark:text-stone-100 block mb-1">
                  {language === 'uz' ? 'Asosiy axloqiy g‘oya:' : 'Главная нравственная идея:'}
                </span>
                {activeEpic[language === 'uz' ? 'mainIdeaUz' : 'mainIdeaRu']}
              </div>
            </div>

            {/* Characters Grid */}
            <div className="space-y-3 pt-3 border-t border-stone-100 dark:border-stone-800">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-500 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-emerald-700" />
                <span>{language === 'uz' ? 'Asosiy qahramonlar' : 'Главные герои'}</span>
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {activeEpic.characters.map((char, cIdx) => (
                  <div
                    key={cIdx}
                    className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/40 border border-stone-200/70 dark:border-stone-700/60 space-y-1"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-xs sm:text-sm text-stone-900 dark:text-stone-100">
                        {char[language === 'uz' ? 'nameUz' : 'nameRu']}
                      </span>
                      <span className="text-[10px] text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-1.5 py-0.5 rounded">
                        {char[language === 'uz' ? 'roleUz' : 'roleRu']}
                      </span>
                    </div>
                    <p className="text-[11px] text-stone-600 dark:text-stone-300 leading-normal">
                      {char[language === 'uz' ? 'traitsUz' : 'traitsRu']}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Connection with modern life */}
            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-800/40 space-y-1">
              <span className="text-[11px] font-semibold text-emerald-900 dark:text-emerald-300 uppercase tracking-wider flex items-center gap-1.5">
                <HeartHandshake className="w-3.5 h-3.5" />
                <span>{language === 'uz' ? 'Bugungi hayot bilan bog‘la' : 'Связь с современной жизнью'}</span>
              </span>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed">
                {activeEpic[language === 'uz' ? 'modernConnectionUz' : 'modernConnectionRu']}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Sequence Puzzle & Epic Quiz */}
        <div className="lg:col-span-5 space-y-6">
          {/* 1. Sequence Reconstruction Puzzle */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-amber-700 dark:text-amber-400">
                  {language === 'uz' ? 'Interaktiv mashq' : 'Интерактивный пазл'}
                </span>
                <h3 className="font-display-title text-base font-bold text-stone-900 dark:text-stone-100 mt-0.5">
                  {language === 'uz' ? 'Voqealar ketma-ketligini tikla' : 'Восстанови хронологию событий'}
                </h3>
              </div>
              <span className="text-xs font-bold text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
                +35 XP
              </span>
            </div>

            <p className="text-xs text-stone-500">
              {activeEpic.sequenceTask[language === 'uz' ? 'instructionUz' : 'instructionRu']}
            </p>

            <div className="space-y-2">
              {sequenceItems.map((item, index) => (
                <div
                  key={item.id}
                  className="p-3 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 text-xs font-bold flex items-center justify-center shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-xs text-stone-800 dark:text-stone-200 leading-tight">
                      {item[language === 'uz' ? 'textUz' : 'textRu']}
                    </span>
                  </div>

                  {!sequenceChecked && (
                    <div className="flex flex-col gap-1 shrink-0">
                      <button
                        disabled={index === 0}
                        onClick={() => moveItem(index, 'up')}
                        className="px-1.5 py-0.5 text-[10px] bg-stone-200 dark:bg-stone-700 rounded hover:bg-stone-300 disabled:opacity-30 cursor-pointer"
                        title="Yuqoriga"
                      >
                        ▲
                      </button>
                      <button
                        disabled={index === sequenceItems.length - 1}
                        onClick={() => moveItem(index, 'down')}
                        className="px-1.5 py-0.5 text-[10px] bg-stone-200 dark:bg-stone-700 rounded hover:bg-stone-300 disabled:opacity-30 cursor-pointer"
                        title="Pastga"
                      >
                        ▼
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 pt-2">
              {!sequenceChecked ? (
                <button
                  onClick={handleCheckSequence}
                  className="w-full py-2.5 px-4 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white text-xs font-semibold transition-colors cursor-pointer"
                >
                  {language === 'uz' ? 'Ketma-ketlikni tekshirish' : 'Проверить последовательность'}
                </button>
              ) : (
                <div className="w-full space-y-2">
                  <div className={`p-3 rounded-xl text-xs flex items-center gap-2 ${
                    sequenceIsCorrect
                      ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-900 dark:text-emerald-200'
                      : 'bg-rose-100 dark:bg-rose-950 text-rose-900 dark:text-rose-200'
                  }`}>
                    {sequenceIsCorrect ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{language === 'uz' ? 'Mukammal! Barcha voqealar to‘g‘ri joylashtirildi.' : 'Превосходно! Все события расставлены верно.'}</span>
                      </>
                    ) : (
                      <>
                        <XCircle className="w-4 h-4 text-rose-600 shrink-0" />
                        <span>{language === 'uz' ? 'Xatolik bor. Qaytadan urinib ko‘ring.' : 'Есть ошибки. Попробуйте снова.'}</span>
                      </>
                    )}
                  </div>
                  <button
                    onClick={handleResetSequence}
                    className="w-full py-2 px-3 text-xs font-medium text-stone-700 dark:text-stone-300 bg-stone-100 dark:bg-stone-800 rounded-lg hover:bg-stone-200 cursor-pointer"
                  >
                    {language === 'uz' ? 'Qayta urinish' : 'Перемешать и попробовать снова'}
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* 2. Doston Mini-Quiz */}
          <div className="p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                {language === 'uz' ? 'G‘oya testi' : 'Тест на понимание'}
              </span>
              <span className="text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2 py-0.5 rounded">
                +25 XP
              </span>
            </div>

            <p className="text-sm font-semibold text-stone-900 dark:text-stone-100">
              {activeEpic.quiz[language === 'uz' ? 'questionUz' : 'questionRu']}
            </p>

            <div className="space-y-2">
              {activeEpic.quiz[language === 'uz' ? 'optionsUz' : 'optionsRu'].map((opt, oIdx) => {
                const isSelected = selectedQuizOption === oIdx;
                const isCorrect = oIdx === activeEpic.quiz.correctIndex;
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
                        ? 'bg-emerald-100 dark:bg-emerald-900/60 border-emerald-600 font-semibold'
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
                className="w-full py-2.5 px-4 rounded-xl bg-stone-900 dark:bg-emerald-800 hover:bg-stone-800 text-white text-xs font-semibold disabled:opacity-50 transition-colors cursor-pointer"
              >
                {language === 'uz' ? 'Tekshirish' : 'Проверить ответ'}
              </button>
            ) : (
              <div className="p-3 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs text-stone-600 dark:text-stone-300">
                <span className="font-bold block mb-0.5 text-stone-900 dark:text-stone-100">
                  {selectedQuizOption === activeEpic.quiz.correctIndex
                    ? (language === 'uz' ? 'To‘g‘ri!' : 'Верно!')
                    : (language === 'uz' ? 'Noto‘g‘ri.' : 'Неверно.')}
                </span>
                {activeEpic.quiz[language === 'uz' ? 'explanationUz' : 'explanationRu']}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
