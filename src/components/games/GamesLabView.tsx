import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import {
  navoiyQuizQuestions,
  wordHunterPairs,
  aphorismsToUnderstand,
  unscrambleLines,
  guessWhoCharacters,
  duelQuestions
} from '../../data/gamesData';
import {
  Sparkles,
  Trophy,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Users,
  Search,
  BookOpen,
  Volume2
} from 'lucide-react';

export const GamesLabView: React.FC = () => {
  const { language, addXp, saveGameScore, triggerConfetti } = useApp();

  const [activeGame, setActiveGame] = useState<'quiz' | 'hunter' | 'wisdom' | 'unscramble' | 'guess' | 'duel'>('quiz');

  // --- GAME 1: NAVOIY BILIMDONI (10 QUESTIONS) ---
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [quizSelectedOption, setQuizSelectedOption] = useState<number | null>(null);
  const [quizIsAnswered, setQuizIsAnswered] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);
  const [quizAnswersRecord, setQuizAnswersRecord] = useState<{ isCorrect: boolean; selected: number }[]>([]);

  const handleQuizAnswer = (optionIdx: number) => {
    if (quizIsAnswered) return;
    setQuizSelectedOption(optionIdx);
    setQuizIsAnswered(true);

    const isCorrect = optionIdx === navoiyQuizQuestions[quizIndex].correctIndex;
    if (isCorrect) {
      setQuizScore(prev => prev + 1);
    }
    setQuizAnswersRecord(prev => [...prev, { isCorrect, selected: optionIdx }]);
  };

  const handleQuizNext = () => {
    if (quizIndex < navoiyQuizQuestions.length - 1) {
      setQuizIndex(prev => prev + 1);
      setQuizSelectedOption(null);
      setQuizIsAnswered(false);
    } else {
      setQuizFinished(true);
      const earnedXp = (quizScore + (quizSelectedOption === navoiyQuizQuestions[quizIndex].correctIndex ? 1 : 0)) * 10;
      addXp(earnedXp);
      saveGameScore('navoiy_quiz', quizScore * 10);
      triggerConfetti();
    }
  };

  const handleQuizReset = () => {
    setQuizIndex(0);
    setQuizScore(0);
    setQuizSelectedOption(null);
    setQuizIsAnswered(false);
    setQuizFinished(false);
    setQuizAnswersRecord([]);
  };

  // --- GAME 2: SO‘Z OVCHISI (WORD MATCHING) ---
  const [hunterCards, setHunterCards] = useState<{ id: string; text: string; lang: 'uz' | 'ru'; pairId: string; matched: boolean }[]>([]);
  const [selectedHunterCard, setSelectedHunterCard] = useState<number | null>(null);
  const [matchedPairsCount, setMatchedPairsCount] = useState(0);

  const initWordHunter = () => {
    const selectedPairs = wordHunterPairs.slice(0, 6);
    const deck: { id: string; text: string; lang: 'uz' | 'ru'; pairId: string; matched: boolean }[] = [];
    selectedPairs.forEach((pair, idx) => {
      deck.push({ id: `uz-${idx}`, text: pair.uz, lang: 'uz', pairId: `${idx}`, matched: false });
      deck.push({ id: `ru-${idx}`, text: pair.ru, lang: 'ru', pairId: `${idx}`, matched: false });
    });
    setHunterCards(deck.sort(() => Math.random() - 0.5));
    setSelectedHunterCard(null);
    setMatchedPairsCount(0);
  };

  useEffect(() => {
    initWordHunter();
  }, []);

  const handleHunterCardClick = (index: number) => {
    if (hunterCards[index].matched || selectedHunterCard === index) return;

    if (selectedHunterCard === null) {
      setSelectedHunterCard(index);
    } else {
      const firstCard = hunterCards[selectedHunterCard];
      const secondCard = hunterCards[index];

      if (firstCard.pairId === secondCard.pairId && firstCard.lang !== secondCard.lang) {
        // MATCH!
        const updated = [...hunterCards];
        updated[selectedHunterCard].matched = true;
        updated[index].matched = true;
        setHunterCards(updated);
        setSelectedHunterCard(null);
        setMatchedPairsCount(prev => {
          const nextCount = prev + 1;
          if (nextCount === 6) {
            addXp(50);
            saveGameScore('word_hunter', 60);
            triggerConfetti();
          }
          return nextCount;
        });
      } else {
        // MISMATCH
        setTimeout(() => {
          setSelectedHunterCard(null);
        }, 600);
      }
    }
  };

  // --- GAME 3: HIKMATNI ANGLANG ---
  const [wisdomIndex, setWisdomIndex] = useState(0);
  const [wisdomSelectedOption, setWisdomSelectedOption] = useState<number | null>(null);
  const [wisdomSubmitted, setWisdomSubmitted] = useState(false);

  const activeAphorism = aphorismsToUnderstand[wisdomIndex];

  const handleWisdomSubmit = () => {
    if (wisdomSelectedOption === null) return;
    setWisdomSubmitted(true);
    if (wisdomSelectedOption === activeAphorism.correctIndex) {
      addXp(25);
    }
  };

  const handleWisdomNext = () => {
    setWisdomIndex(prev => (prev + 1) % aphorismsToUnderstand.length);
    setWisdomSelectedOption(null);
    setWisdomSubmitted(false);
  };

  // --- GAME 4: PARCHANI TIKLA (UNSCRAMBLE) ---
  const [unscrambleIndex, setUnscrambleIndex] = useState(0);
  const activeUnscramble = unscrambleLines[unscrambleIndex];
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [constructedWords, setConstructedWords] = useState<string[]>([]);
  const [unscrambleFinished, setUnscrambleFinished] = useState(false);

  const initUnscramble = (idx: number) => {
    const item = unscrambleLines[idx];
    setShuffledWords([...item.words].sort(() => Math.random() - 0.5));
    setConstructedWords([]);
    setUnscrambleFinished(false);
  };

  useEffect(() => {
    initUnscramble(0);
  }, []);

  const handlePickWord = (word: string, index: number) => {
    const newShuffled = [...shuffledWords];
    newShuffled.splice(index, 1);
    const newConstructed = [...constructedWords, word];
    setShuffledWords(newShuffled);
    setConstructedWords(newConstructed);

    if (newConstructed.length === activeUnscramble.words.length) {
      const isCorrect = newConstructed.join(' ') === activeUnscramble.words.join(' ');
      setUnscrambleFinished(true);
      if (isCorrect) {
        addXp(30);
        triggerConfetti();
      }
    }
  };

  const handleResetConstructed = () => {
    initUnscramble(unscrambleIndex);
  };

  // --- GAME 5: KIMLIGINI TOP (GUESS WHO) ---
  const [guessIndex, setGuessIndex] = useState(0);
  const [visibleCluesCount, setVisibleCluesCount] = useState(1);
  const [selectedGuessOption, setSelectedGuessOption] = useState<string | null>(null);
  const [guessChecked, setGuessChecked] = useState(false);

  const activeGuess = guessWhoCharacters[guessIndex];

  const handleGuessSubmit = (option: string) => {
    setSelectedGuessOption(option);
    setGuessChecked(true);
    if (option === (language === 'uz' ? activeGuess.nameUz : activeGuess.nameRu)) {
      addXp(30);
      triggerConfetti();
    }
  };

  const handleNextGuess = () => {
    setGuessIndex(prev => (prev + 1) % guessWhoCharacters.length);
    setVisibleCluesCount(1);
    setSelectedGuessOption(null);
    setGuessChecked(false);
  };

  // --- GAME 6: NAVOIY BILAN DUEL (CLASSROOM 2-PLAYER BATTLE) ---
  const [duelPlayer1, setDuelPlayer1] = useState('O‘quvchi 1');
  const [duelPlayer2, setDuelPlayer2] = useState('O‘quvchi 2');
  const [duelCurrentTurn, setDuelCurrentTurn] = useState<1 | 2>(1);
  const [duelScores, setDuelScores] = useState({ p1: 0, p2: 0 });
  const [duelQuestionIdx, setDuelQuestionIdx] = useState(0);
  const [duelFinished, setDuelFinished] = useState(false);

  const activeDuelQ = duelQuestions[duelQuestionIdx];

  const handleDuelAnswer = (optionIndex: number) => {
    if (duelFinished) return;
    const isCorrect = optionIndex === activeDuelQ.correct;
    if (isCorrect) {
      if (duelCurrentTurn === 1) {
        setDuelScores(prev => ({ ...prev, p1: prev.p1 + 1 }));
      } else {
        setDuelScores(prev => ({ ...prev, p2: prev.p2 + 1 }));
      }
    }

    if (duelQuestionIdx < duelQuestions.length - 1) {
      setDuelQuestionIdx(prev => prev + 1);
      setDuelCurrentTurn(prev => (prev === 1 ? 2 : 1));
    } else {
      setDuelFinished(true);
      addXp(40);
      triggerConfetti();
    }
  };

  const handleDuelReset = () => {
    setDuelScores({ p1: 0, p2: 0 });
    setDuelQuestionIdx(0);
    setDuelCurrentTurn(1);
    setDuelFinished(false);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* HEADER */}
      <div className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
          <span>{language === 'uz' ? 'O‘yinlar laboratoriyasi' : 'Лаборатория игр'}</span>
          <span>·</span>
          <span>{language === 'uz' ? 'Gamifikatsiya va amaliyot' : 'Геймификация и практика'}</span>
        </div>

        <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
          {language === 'uz' ? 'O‘yinlar laboratoriyasi' : 'Лаборатория игр и викторин'}
        </h1>

        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {language === 'uz'
            ? 'Navoiy ijodini o‘yinlar orqali o‘rganing: viktorina, so‘z ovchisi, hikmat tahlili, gap tuzish, kimligini topish va sinfdoshlar dueli.'
            : 'Увлекательное освоение наследия через интерактивные игры: викторины, сопоставление слов, реконструкция строк и школьный дуэль-турнир.'}
        </p>

        {/* Game Selector Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-2">
          {[
            { id: 'quiz', labelUz: 'Navoiy bilimdoni', labelRu: 'Знаток Навои' },
            { id: 'hunter', labelUz: 'So‘z ovchisi', labelRu: 'Охотник за словами' },
            { id: 'wisdom', labelUz: 'Hikmatni anglang', labelRu: 'Постигни мудрость' },
            { id: 'unscramble', labelUz: 'Parchani tikla', labelRu: 'Собери строку' },
            { id: 'guess', labelUz: 'Kimligini top!', labelRu: 'Угадай героя!' },
            { id: 'duel', labelUz: 'Navoiy bilan duel', labelRu: 'Литературная дуэль' }
          ].map(g => (
            <button
              key={g.id}
              onClick={() => setActiveGame(g.id as any)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
                activeGame === g.id
                  ? 'bg-emerald-800 text-white shadow-xs'
                  : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-emerald-700'
              }`}
            >
              {g[language === 'uz' ? 'labelUz' : 'labelRu']}
            </button>
          ))}
        </div>
      </div>

      {/* GAME 1: NAVOIY BILIMDONI */}
      {activeGame === 'quiz' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          {!quizFinished ? (
            <>
              <div className="flex items-center justify-between text-xs text-stone-500 pb-3 border-b border-stone-100 dark:border-stone-800">
                <span className="font-semibold text-emerald-800 dark:text-emerald-400">
                  {language === 'uz' ? 'Savol' : 'Вопрос'} {quizIndex + 1} / {navoiyQuizQuestions.length}
                </span>
                <span className="font-bold tabular-nums">
                  {language === 'uz' ? 'To‘plangan ball:' : 'Баллы:'} {quizScore * 10} XP
                </span>
              </div>

              <h3 className="font-display-title text-lg sm:text-xl font-bold text-stone-900 dark:text-stone-100 leading-snug">
                {navoiyQuizQuestions[quizIndex][language === 'uz' ? 'questionUz' : 'questionRu']}
              </h3>

              <div className="space-y-3">
                {navoiyQuizQuestions[quizIndex][language === 'uz' ? 'optionsUz' : 'optionsRu'].map((opt, idx) => {
                  const isSelected = quizSelectedOption === idx;
                  const isCorrect = idx === navoiyQuizQuestions[quizIndex].correctIndex;
                  return (
                    <button
                      key={idx}
                      disabled={quizIsAnswered}
                      onClick={() => handleQuizAnswer(idx)}
                      className={`w-full p-4 rounded-xl text-left text-sm font-medium border transition-all cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-950/60 font-semibold text-emerald-900 dark:text-emerald-200'
                          : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:border-emerald-600'
                      } ${
                        quizIsAnswered && isCorrect
                          ? 'bg-emerald-100 dark:bg-emerald-900/60 border-emerald-600 text-emerald-900 dark:text-emerald-100'
                          : ''
                      } ${
                        quizIsAnswered && isSelected && !isCorrect
                          ? 'bg-rose-50 dark:bg-rose-950/50 border-rose-500 text-rose-900 dark:text-rose-200'
                          : ''
                      }`}
                    >
                      <span>{opt}</span>
                      {quizIsAnswered && isCorrect && <CheckCircle2 className="w-5 h-5 text-emerald-600" />}
                      {quizIsAnswered && isSelected && !isCorrect && <XCircle className="w-5 h-5 text-rose-600" />}
                    </button>
                  );
                })}
              </div>

              {quizIsAnswered && (
                <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 text-xs text-stone-700 dark:text-stone-300 space-y-2">
                  <span className="font-bold text-stone-900 dark:text-stone-100 block">
                    {quizSelectedOption === navoiyQuizQuestions[quizIndex].correctIndex
                      ? (language === 'uz' ? 'To‘g‘ri javob!' : 'Верно!')
                      : (language === 'uz' ? 'Xato javob.' : 'Неверно.')}
                  </span>
                  <p>{navoiyQuizQuestions[quizIndex][language === 'uz' ? 'explanationUz' : 'explanationRu']}</p>
                  <button
                    onClick={handleQuizNext}
                    className="mt-2 px-5 py-2 rounded-lg bg-emerald-800 hover:bg-emerald-900 text-white font-semibold transition-colors cursor-pointer"
                  >
                    {quizIndex < navoiyQuizQuestions.length - 1
                      ? (language === 'uz' ? 'Keyingi savol' : 'Следующий вопрос')
                      : (language === 'uz' ? 'Natijalarni ko‘rish' : 'Посмотреть итоги')}
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-8 space-y-6">
              <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200 flex items-center justify-center mx-auto">
                <Trophy className="w-8 h-8" />
              </div>
              <div className="space-y-2">
                <h3 className="font-display-title text-2xl font-bold text-stone-900 dark:text-stone-100">
                  {language === 'uz' ? 'Viktorina yakunlandi!' : 'Викторина завершена!'}
                </h3>
                <p className="text-sm text-stone-600 dark:text-stone-300">
                  {language === 'uz'
                    ? `Siz 10 ta savoldan ${quizScore} tasiga to‘g‘ri javob berdingiz va ${quizScore * 10} XP oldingiz!`
                    : `Вы ответили правильно на ${quizScore} из 10 вопросов и получили ${quizScore * 10} XP!`}
                </p>
              </div>

              <div className="flex items-center justify-center gap-3">
                <button
                  onClick={handleQuizReset}
                  className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-sm transition-colors cursor-pointer flex items-center gap-2"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>{language === 'uz' ? 'Qaytadan topshirish' : 'Пройти снова'}</span>
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GAME 2: SO‘Z OVCHISI (WORD HUNTER) */}
      {activeGame === 'hunter' && (
        <div className="max-w-4xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100">
                {language === 'uz' ? '«So‘z ovchisi» — O‘zbekcha va Ruscha juftlikni toping' : '«Охотник за словами» — Найдите парные слова'}
              </h3>
              <p className="text-xs text-stone-500 mt-0.5">
                {language === 'uz'
                  ? 'Kartochkalarni bosib o‘zbekcha so‘zni ruscha tarjimasi bilan moslashtiring.'
                  : 'Кликайте по карточкам и находите соответствия узбекских и русских слов.'}
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-md">
                {matchedPairsCount} / 6 {language === 'uz' ? 'juftlik' : 'пар'}
              </span>
              <button
                onClick={initWordHunter}
                className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
                title={language === 'uz' ? 'Qayta aralashtirish' : 'Перемешать'}
              >
                <RotateCcw className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
            {hunterCards.map((card, idx) => {
              const isSelected = selectedHunterCard === idx;
              return (
                <button
                  key={card.id}
                  disabled={card.matched}
                  onClick={() => handleHunterCardClick(idx)}
                  className={`h-24 p-3 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center font-semibold text-sm ${
                    card.matched
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 border-emerald-500 text-emerald-800 dark:text-emerald-200 opacity-60'
                      : isSelected
                      ? 'bg-amber-100 dark:bg-amber-950/80 border-amber-500 text-amber-900 dark:text-amber-100 scale-105 shadow-md'
                      : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-200 hover:border-emerald-600'
                  }`}
                >
                  <span className="text-[10px] text-stone-400 uppercase font-mono block mb-1">
                    {card.lang.toUpperCase()}
                  </span>
                  <span className="line-clamp-2">{card.text}</span>
                </button>
              );
            })}
          </div>

          {matchedPairsCount === 6 && (
            <div className="p-4 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-900 dark:text-emerald-200 text-center space-y-2">
              <span className="font-bold text-sm block">
                {language === 'uz' ? 'Ajoyib! Barcha 6 ta so‘z juftligi topildi!' : 'Отлично! Все 6 пар слов найдены!'}
              </span>
              <p className="text-xs">+50 XP balingizga qo‘shildi.</p>
              <button
                onClick={initWordHunter}
                className="px-4 py-2 rounded-lg bg-emerald-800 text-white font-semibold text-xs cursor-pointer hover:bg-emerald-900"
              >
                {language === 'uz' ? 'Yangi so‘zlar bilan qayta o‘ynash' : 'Сыграть с новыми словами'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 3: HIKMATNI ANGLANG */}
      {activeGame === 'wisdom' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              {language === 'uz' ? 'Hikmat' : 'Афоризм'} {wisdomIndex + 1} / {aphorismsToUnderstand.length}
            </span>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
              +25 XP
            </span>
          </div>

          <blockquote className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/60 dark:border-amber-800/40 text-center font-serif-title text-xl sm:text-2xl italic text-stone-900 dark:text-stone-100 leading-snug">
            “{activeAphorism[language === 'uz' ? 'textUz' : 'textRu']}”
          </blockquote>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
              {language === 'uz' ? 'Ushbu hikmatning asosiy ma’nosini tanlang:' : 'Выберите верное толкование афоризма:'}
            </span>

            {activeAphorism[language === 'uz' ? 'optionsUz' : 'optionsRu'].map((opt, idx) => {
              const isSelected = wisdomSelectedOption === idx;
              const isCorrect = idx === activeAphorism.correctIndex;
              return (
                <button
                  key={idx}
                  disabled={wisdomSubmitted}
                  onClick={() => setWisdomSelectedOption(idx)}
                  className={`w-full p-3.5 rounded-xl text-left text-xs sm:text-sm border transition-all cursor-pointer ${
                    isSelected
                      ? 'border-emerald-700 bg-emerald-50 dark:bg-emerald-950 font-semibold'
                      : 'border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                  } ${
                    wisdomSubmitted && isCorrect
                      ? 'bg-emerald-100 dark:bg-emerald-900 border-emerald-600 font-semibold'
                      : ''
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {!wisdomSubmitted ? (
            <button
              disabled={wisdomSelectedOption === null}
              onClick={handleWisdomSubmit}
              className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs transition-colors cursor-pointer disabled:opacity-50"
            >
              {language === 'uz' ? 'Tekshirish' : 'Проверить ответ'}
            </button>
          ) : (
            <div className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800 space-y-2 text-xs">
              <span className="font-bold text-stone-900 dark:text-stone-100 block">
                {language === 'uz' ? 'To‘liq falsafiy izoh:' : 'Полное разъяснение:'}
              </span>
              <p className="text-stone-600 dark:text-stone-300">
                {activeAphorism[language === 'uz' ? 'meaningUz' : 'meaningRu']}
              </p>
              <button
                onClick={handleWisdomNext}
                className="mt-2 px-4 py-2 rounded-lg bg-emerald-800 text-white font-semibold cursor-pointer"
              >
                {language === 'uz' ? 'Keyingi hikmat' : 'Следующий афоризм'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 4: PARCHANI TIKLA (UNSCRAMBLE) */}
      {activeGame === 'unscramble' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              {activeUnscramble[language === 'uz' ? 'hintUz' : 'hintRu']}
            </span>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
              +30 XP
            </span>
          </div>

          <p className="text-xs text-stone-500">
            {language === 'uz'
              ? 'Pastdagi so‘zlarni ketma-ket bosib she’riy misrani to‘g‘ri tartibda yig‘ing:'
              : 'Нажимайте по словам в правильном порядке, чтобы собрать поэтическую строку:'}
          </p>

          {/* Constructed Sentence Box */}
          <div className="min-h-16 p-4 rounded-xl bg-stone-50 dark:bg-stone-900 border border-dashed border-stone-300 dark:border-stone-700 flex flex-wrap items-center gap-2">
            {constructedWords.length === 0 ? (
              <span className="text-xs text-stone-400 italic">
                {language === 'uz' ? 'So‘zlar bu yerda hosil bo‘ladi...' : 'Слова появятся здесь...'}
              </span>
            ) : (
              constructedWords.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="px-3 py-1.5 rounded-lg bg-emerald-800 text-white font-medium text-xs sm:text-sm shadow-xs"
                >
                  {word}
                </span>
              ))
            )}
          </div>

          {/* Shuffled pool */}
          <div className="flex flex-wrap gap-2 pt-2">
            {shuffledWords.map((word, sIdx) => (
              <button
                key={sIdx}
                onClick={() => handlePickWord(word, sIdx)}
                className="px-4 py-2 rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 hover:border-emerald-700 text-stone-800 dark:text-stone-200 font-semibold text-xs sm:text-sm cursor-pointer shadow-xs transition-transform active:scale-95"
              >
                {word}
              </button>
            ))}
          </div>

          {unscrambleFinished && (
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs space-y-2">
              <span className="font-bold text-emerald-800 dark:text-emerald-400 block">
                {constructedWords.join(' ') === activeUnscramble.words.join(' ')
                  ? (language === 'uz' ? 'Ajoyib! Jumla to‘liq va to‘g‘ri tuzildi!' : 'Отлично! Строка собрана безупречно!')
                  : (language === 'uz' ? 'Tartibda xatolik bo‘ldi.' : 'Порядок слов не совсем точен.')}
              </span>
              <p className="text-stone-600 dark:text-stone-400 italic">
                Ruscha ma’nosi: {activeUnscramble.translationRu}
              </p>
              <div className="flex gap-2 pt-1">
                <button
                  onClick={handleResetConstructed}
                  className="px-3 py-1.5 rounded-lg bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold cursor-pointer"
                >
                  {language === 'uz' ? 'Qaytadan yig‘ish' : 'Собрать заново'}
                </button>
                <button
                  onClick={() => {
                    const nextIdx = (unscrambleIndex + 1) % unscrambleLines.length;
                    setUnscrambleIndex(nextIdx);
                    initUnscramble(nextIdx);
                  }}
                  className="px-4 py-1.5 rounded-lg bg-emerald-800 text-white font-semibold cursor-pointer"
                >
                  {language === 'uz' ? 'Keyingi parcha' : 'Следующая строка'}
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* GAME 5: KIMLIGINI TOP! */}
      {activeGame === 'guess' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
              {language === 'uz' ? 'Topishmoq' : 'Загадка'} {guessIndex + 1} / {guessWhoCharacters.length}
            </span>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
              +30 XP
            </span>
          </div>

          <h3 className="font-display-title text-lg font-bold text-stone-900 dark:text-stone-100">
            {language === 'uz' ? 'Ishoralarga qarab qahramon yoki shaxsni toping:' : 'По подсказкам определите историческую личность или героя:'}
          </h3>

          <div className="space-y-2.5">
            {activeGuess[language === 'uz' ? 'cluesUz' : 'cluesRu'].slice(0, visibleCluesCount).map((clue, cIdx) => (
              <div
                key={cIdx}
                className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200 dark:border-stone-700 text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed font-medium"
              >
                {clue}
              </div>
            ))}
          </div>

          {visibleCluesCount < 4 && !guessChecked && (
            <button
              onClick={() => setVisibleCluesCount(prev => prev + 1)}
              className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 hover:underline cursor-pointer"
            >
              + {language === 'uz' ? 'Yana bitta ishorani ochish' : 'Открыть еще одну подсказку'}
            </button>
          )}

          <div className="pt-2 space-y-3">
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider block">
              {language === 'uz' ? 'Kim bu?' : 'Кто это?'}
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {activeGuess[language === 'uz' ? 'optionsUz' : 'optionsRu'].map((opt, oIdx) => (
                <button
                  key={oIdx}
                  disabled={guessChecked}
                  onClick={() => handleGuessSubmit(opt)}
                  className="p-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-800 hover:border-emerald-700 text-xs sm:text-sm font-semibold transition-all cursor-pointer"
                >
                  {opt}
                </button>
              ))}
            </div>
          </div>

          {guessChecked && (
            <div className="p-4 rounded-xl bg-stone-100 dark:bg-stone-800 text-xs space-y-2">
              <span className="font-bold text-stone-900 dark:text-stone-100 block">
                {selectedGuessOption === (language === 'uz' ? activeGuess.nameUz : activeGuess.nameRu)
                  ? (language === 'uz' ? 'Topdingiz! Bu ' + activeGuess.nameUz + ' edi.' : 'Правильно! Это ' + activeGuess.nameRu + '.')
                  : (language === 'uz' ? 'Xato. To‘g‘ri javob: ' + activeGuess.nameUz : 'Неверно. Правильный ответ: ' + activeGuess.nameRu)}
              </span>
              <button
                onClick={handleNextGuess}
                className="mt-2 px-4 py-2 rounded-lg bg-emerald-800 text-white font-semibold cursor-pointer"
              >
                {language === 'uz' ? 'Keyingi topishmoq' : 'Следующая загадка'}
              </button>
            </div>
          )}
        </div>
      )}

      {/* GAME 6: NAVOIY BILAN DUEL (HOT-SEAT 2-PLAYER CLASSROOM BATTLE) */}
      {activeGame === 'duel' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-stone-100 dark:border-stone-800 pb-4">
            <div>
              <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                <Users className="w-5 h-5 text-emerald-700" />
                <span>{language === 'uz' ? 'Navoiy bilan duel (2 o‘quvchi musobaqasi)' : 'Литературная дуэль (Батл на двоих)'}</span>
              </h3>
              <p className="text-xs text-stone-500">
                {language === 'uz'
                  ? 'Bitta qurilmada sinfdoshlar bilan navbatma-navbat savollarga javob bering!'
                  : 'Соревнуйтесь на одном устройстве с одноклассником по очереди!'}
              </p>
            </div>
            <button
              onClick={handleDuelReset}
              className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-100 cursor-pointer self-start sm:self-auto"
              title="Qayta boshlash"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>

          {/* Scoreboard */}
          <div className="grid grid-cols-2 gap-4">
            <div className={`p-4 rounded-xl border transition-all ${
              duelCurrentTurn === 1 && !duelFinished
                ? 'bg-emerald-50 dark:bg-emerald-950/60 border-emerald-600 shadow-sm'
                : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700'
            }`}>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={duelPlayer1}
                  onChange={e => setDuelPlayer1(e.target.value)}
                  className="font-bold text-xs sm:text-sm bg-transparent border-b border-transparent hover:border-stone-300 focus:outline-none focus:border-emerald-600"
                />
                {duelCurrentTurn === 1 && !duelFinished && (
                  <span className="text-[10px] uppercase font-bold text-emerald-700 bg-emerald-100 px-1.5 py-0.5 rounded">
                    {language === 'uz' ? 'Navbat' : 'Ход'}
                  </span>
                )}
              </div>
              <span className="text-2xl font-bold font-mono text-stone-900 dark:text-stone-100 block mt-2">
                {duelScores.p1} {language === 'uz' ? 'ball' : 'б.'}
              </span>
            </div>

            <div className={`p-4 rounded-xl border transition-all ${
              duelCurrentTurn === 2 && !duelFinished
                ? 'bg-amber-50 dark:bg-amber-950/60 border-amber-600 shadow-sm'
                : 'bg-stone-50 dark:bg-stone-800 border-stone-200 dark:border-stone-700'
            }`}>
              <div className="flex items-center justify-between">
                <input
                  type="text"
                  value={duelPlayer2}
                  onChange={e => setDuelPlayer2(e.target.value)}
                  className="font-bold text-xs sm:text-sm bg-transparent border-b border-transparent hover:border-stone-300 focus:outline-none focus:border-amber-600"
                />
                {duelCurrentTurn === 2 && !duelFinished && (
                  <span className="text-[10px] uppercase font-bold text-amber-700 bg-amber-100 px-1.5 py-0.5 rounded">
                    {language === 'uz' ? 'Navbat' : 'Ход'}
                  </span>
                )}
              </div>
              <span className="text-2xl font-bold font-mono text-stone-900 dark:text-stone-100 block mt-2">
                {duelScores.p2} {language === 'uz' ? 'ball' : 'б.'}
              </span>
            </div>
          </div>

          {!duelFinished ? (
            <div className="space-y-4 pt-2">
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span>{language === 'uz' ? 'Savol' : 'Вопрос'} {duelQuestionIdx + 1} / {duelQuestions.length}</span>
                <span className="font-semibold text-emerald-800 dark:text-emerald-400">
                  {language === 'uz'
                    ? `Hozir ${duelCurrentTurn === 1 ? duelPlayer1 : duelPlayer2} javob beradi`
                    : `Отвечает: ${duelCurrentTurn === 1 ? duelPlayer1 : duelPlayer2}`}
                </span>
              </div>

              <h4 className="font-display-title text-base sm:text-lg font-bold text-stone-900 dark:text-stone-100">
                {activeDuelQ[language === 'uz' ? 'qUz' : 'qRu']}
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeDuelQ.options.map((opt, oIdx) => (
                  <button
                    key={oIdx}
                    onClick={() => handleDuelAnswer(oIdx)}
                    className="p-3 rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-stone-800 hover:border-emerald-700 text-left text-xs sm:text-sm font-medium transition-all cursor-pointer"
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="text-center py-6 space-y-4">
              <Trophy className="w-12 h-12 text-amber-500 mx-auto" />
              <h4 className="font-display-title text-2xl font-bold text-stone-900 dark:text-stone-100">
                {duelScores.p1 > duelScores.p2
                  ? `${duelPlayer1} ${language === 'uz' ? 'g‘olib bo‘ldi!' : 'победил!'}`
                  : duelScores.p2 > duelScores.p1
                  ? `${duelPlayer2} ${language === 'uz' ? 'g‘olib bo‘ldi!' : 'победил!'}`
                  : (language === 'uz' ? 'Do‘stona durang natija!' : 'Ничья! Победила дружба!')}
              </h4>
              <p className="text-xs text-stone-500">
                {duelPlayer1}: {duelScores.p1} ball · {duelPlayer2}: {duelScores.p2} ball
              </p>
              <button
                onClick={handleDuelReset}
                className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 text-white font-semibold text-xs cursor-pointer"
              >
                {language === 'uz' ? 'Yangi duel boshlash' : 'Новый раунд'}
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
