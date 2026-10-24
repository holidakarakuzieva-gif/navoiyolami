import React, { useState, useMemo } from 'react';
import { useApp } from '../../context/AppContext';
import { glossaryTerms } from '../../data/glossaryData';
import { GlossaryTerm } from '../../types';
import {
  Search,
  Star,
  CheckCircle2,
  Volume2,
  BookOpen,
  Filter,
  Sparkles,
  Layers,
  RotateCw
} from 'lucide-react';

export const GlossaryView: React.FC = () => {
  const { language, progress, toggleStarWord, markWordLearned } = useApp();

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [onlyFavorites, setOnlyFavorites] = useState(false);
  const [onlyLearned, setOnlyLearned] = useState(false);
  const [flashcardMode, setFlashcardMode] = useState(false);
  const [flashcardIndex, setFlashcardIndex] = useState(0);
  const [flashcardFlipped, setFlashcardFlipped] = useState(false);
  const [speakingWordId, setSpeakingWordId] = useState<string | null>(null);

  const categories = [
    { id: 'all', nameUz: 'Barchasi', nameRu: 'Все категории' },
    { id: 'adabiyot', nameUz: 'Adabiyot va ilm', nameRu: 'Литература и наука' },
    { id: 'axloq', nameUz: 'Axloqiy qadriyatlar', nameRu: 'Нравственность' },
    { id: 'davlat', nameUz: 'Davlat va jamiyat', nameRu: 'Государство' },
    { id: 'hayot', nameUz: 'Inson fazilatlari', nameRu: 'Личность' }
  ];

  const filteredTerms = useMemo(() => {
    return glossaryTerms.filter(term => {
      const matchesSearch =
        term.wordUz.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.wordRu.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definitionUz.toLowerCase().includes(searchQuery.toLowerCase()) ||
        term.definitionRu.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory = selectedCategory === 'all' || term.category === selectedCategory;
      const matchesFav = !onlyFavorites || progress.starredWords.includes(term.id);
      const matchesLearned = !onlyLearned || progress.learnedWords.includes(term.id);

      return matchesSearch && matchesCategory && matchesFav && matchesLearned;
    });
  }, [searchQuery, selectedCategory, onlyFavorites, onlyLearned, progress.starredWords, progress.learnedWords]);

  const handleSpeak = (word: string, id: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'uz-UZ';
    utterance.rate = 0.85;
    utterance.onend = () => setSpeakingWordId(null);
    utterance.onerror = () => setSpeakingWordId(null);
    setSpeakingWordId(id);
    window.speechSynthesis.speak(utterance);
  };

  const currentFlashcard = filteredTerms[flashcardIndex] || filteredTerms[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* HEADER & METRICS */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
            <span>{language === 'uz' ? 'Lug‘at xazinasi' : 'Сокровищница слов'}</span>
            <span>·</span>
            <span>{glossaryTerms.length} {language === 'uz' ? 'mumtoz va zamonaviy so‘zlar' : 'терминов'}</span>
          </div>

          <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
            {language === 'uz' ? 'Lug‘at xazinasi' : 'Словарь Навои и узбекского языка'}
          </h1>

          <p className="text-stone-600 dark:text-stone-300 text-sm max-w-xl">
            {language === 'uz'
              ? 'Navoiy asarlari va zamonaviy o‘zbek tilidagi qimmatbaho so‘zlarning ruscha tarjimasi, talaffuzi va misollari.'
              : 'Толково-переводной словарь: аутентичные примеры из бейтов, аудио-произношение и тренировочные флеш-карты.'}
          </p>
        </div>

        {/* Counter Stats & Flashcard Mode Toggle */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="px-3.5 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-xs text-stone-700 dark:text-stone-300 flex items-center gap-2">
            <span>{language === 'uz' ? 'O‘rganildi:' : 'Выучено:'}</span>
            <span className="font-bold text-emerald-700 dark:text-emerald-400 tabular-nums">
              {progress.learnedWords.length} / {glossaryTerms.length}
            </span>
          </div>

          <button
            onClick={() => {
              setFlashcardMode(prev => !prev);
              setFlashcardFlipped(false);
              setFlashcardIndex(0);
            }}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-2 ${
              flashcardMode
                ? 'bg-amber-700 text-white shadow-xs'
                : 'bg-emerald-800 text-white hover:bg-emerald-900'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>{flashcardMode ? (language === 'uz' ? 'Ro‘yxatga qaytish' : 'Вернуться к списку') : (language === 'uz' ? 'Flesh-karta mashqi' : 'Режим флеш-карт')}</span>
          </button>
        </div>
      </div>

      {/* FLASHCARD MODE */}
      {flashcardMode && filteredTerms.length > 0 && (
        <div className="max-w-xl mx-auto py-4 space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>{language === 'uz' ? 'Karta' : 'Карточка'} {flashcardIndex + 1} / {filteredTerms.length}</span>
            <span className="font-medium text-emerald-800 dark:text-emerald-400">
              {language === 'uz' ? 'Karta ustiga bosib aylantiring' : 'Кликните по карточке для переворота'}
            </span>
          </div>

          <div
            onClick={() => setFlashcardFlipped(prev => !prev)}
            className="w-full min-h-[280px] p-8 rounded-3xl bg-white dark:bg-[#151D2A] border-2 border-emerald-800/40 dark:border-emerald-500/40 shadow-lg cursor-pointer flex flex-col justify-between items-center text-center transition-transform hover:scale-102"
          >
            <span className="text-[10px] uppercase font-bold text-stone-400 tracking-wider">
              {flashcardFlipped
                ? (language === 'uz' ? 'RUSCHA MA’NOSI VA IZOHI' : 'ПЕРЕВОД И ЗНАЧЕНИЕ')
                : (language === 'uz' ? 'O‘ZBEKCHA SO‘Z' : 'СЛОВО НА УЗБЕКСКОМ')}
            </span>

            {!flashcardFlipped ? (
              <div className="space-y-3 my-auto">
                <h3 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
                  {currentFlashcard.wordUz}
                </h3>
                <span className="text-xs text-stone-400 font-mono block">
                  {currentFlashcard.phoneticUz}
                </span>
                <span className="text-xs text-emerald-800 dark:text-emerald-400 font-semibold bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-md">
                  {currentFlashcard[language === 'uz' ? 'categoryUz' : 'categoryRu']}
                </span>
              </div>
            ) : (
              <div className="space-y-3 my-auto">
                <h4 className="font-display-title text-2xl font-bold text-emerald-800 dark:text-emerald-400">
                  {currentFlashcard.wordRu}
                </h4>
                <p className="text-sm text-stone-700 dark:text-stone-300 max-w-sm">
                  {currentFlashcard[language === 'uz' ? 'definitionUz' : 'definitionRu']}
                </p>
                <div className="text-xs text-stone-500 italic pt-2 border-t border-stone-100 dark:border-stone-800">
                  «{currentFlashcard[language === 'uz' ? 'exampleUz' : 'exampleRu']}»
                </div>
              </div>
            )}

            <div className="text-xs text-stone-400 flex items-center gap-1">
              <RotateCw className="w-3.5 h-3.5" />
              <span>{language === 'uz' ? 'Aylantirish uchun bosing' : 'Нажмите, чтобы перевернуть'}</span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-4">
            <button
              disabled={flashcardIndex === 0}
              onClick={() => {
                setFlashcardIndex(prev => prev - 1);
                setFlashcardFlipped(false);
              }}
              className="px-5 py-2.5 rounded-xl border border-stone-300 dark:border-stone-700 bg-white dark:bg-stone-800 text-xs font-semibold disabled:opacity-40 cursor-pointer"
            >
              ← {language === 'uz' ? 'Oldingisi' : 'Предыдущая'}
            </button>

            <button
              onClick={() => markWordLearned(currentFlashcard.id)}
              className="px-4 py-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-semibold cursor-pointer hover:bg-emerald-200"
            >
              ✓ {language === 'uz' ? 'O‘rgandim (+15 XP)' : 'Выучил (+15 XP)'}
            </button>

            <button
              disabled={flashcardIndex === filteredTerms.length - 1}
              onClick={() => {
                setFlashcardIndex(prev => prev + 1);
                setFlashcardFlipped(false);
              }}
              className="px-5 py-2.5 rounded-xl bg-emerald-800 text-white text-xs font-semibold disabled:opacity-40 cursor-pointer hover:bg-emerald-900"
            >
              {language === 'uz' ? 'Keyingisi' : 'Следующая'} →
            </button>
          </div>
        </div>
      )}

      {/* STANDARD LIST / GRID MODE */}
      {!flashcardMode && (
        <div className="space-y-6">
          {/* Search & Filter Toolbar */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            {/* Search Input */}
            <div className="md:col-span-5 relative">
              <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder={language === 'uz' ? 'So‘z, ma’no yoki manba bo‘yicha qidiruv...' : 'Поиск по слову, значению...'}
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm rounded-xl border border-stone-200 dark:border-stone-700 bg-white dark:bg-[#151D2A] text-stone-800 dark:text-stone-200 focus:outline-none focus:border-emerald-600"
              />
            </div>

            {/* Category Select */}
            <div className="md:col-span-4 flex items-center gap-1.5 overflow-x-auto pb-1">
              {categories.map(c => (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-medium whitespace-nowrap cursor-pointer transition-colors ${
                    selectedCategory === c.id
                      ? 'bg-emerald-800 text-white font-semibold'
                      : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-50'
                  }`}
                >
                  {c[language === 'uz' ? 'nameUz' : 'nameRu']}
                </button>
              ))}
            </div>

            {/* Toggles (Favorites / Learned) */}
            <div className="md:col-span-3 flex items-center justify-end gap-2">
              <button
                onClick={() => setOnlyFavorites(prev => !prev)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                  onlyFavorites
                    ? 'bg-amber-50 dark:bg-amber-950 border-amber-400 text-amber-800 dark:text-amber-300'
                    : 'bg-white dark:bg-[#151D2A] border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300'
                }`}
              >
                <Star className={`w-3.5 h-3.5 ${onlyFavorites ? 'fill-amber-500 text-amber-500' : ''}`} />
                <span>{language === 'uz' ? 'Saralangan' : 'Избранное'}</span>
              </button>

              <button
                onClick={() => setOnlyLearned(prev => !prev)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold border transition-colors cursor-pointer flex items-center gap-1.5 ${
                  onlyLearned
                    ? 'bg-emerald-50 dark:bg-emerald-950 border-emerald-500 text-emerald-800 dark:text-emerald-300'
                    : 'bg-white dark:bg-[#151D2A] border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-300'
                }`}
              >
                <CheckCircle2 className={`w-3.5 h-3.5 ${onlyLearned ? 'text-emerald-600' : ''}`} />
                <span>{language === 'uz' ? 'O‘rgandim' : 'Выучено'}</span>
              </button>
            </div>
          </div>

          {/* Terms Grid */}
          {filteredTerms.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-[#151D2A] rounded-2xl border border-stone-200 dark:border-stone-800 text-stone-500 text-sm">
              {language === 'uz' ? 'Mos keluvchi so‘zlar topilmadi.' : 'Подходящих слов не найдено.'}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {filteredTerms.map(term => {
                const isFav = progress.starredWords.includes(term.id);
                const isLearned = progress.learnedWords.includes(term.id);
                return (
                  <div
                    key={term.id}
                    className="p-5 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs hover:border-emerald-600/50 transition-all flex flex-col justify-between space-y-3"
                  >
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-semibold text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded">
                          {term[language === 'uz' ? 'categoryUz' : 'categoryRu']}
                        </span>

                        <div className="flex items-center gap-1">
                          <button
                            onClick={() => handleSpeak(term.wordUz, term.id)}
                            className="p-1 text-stone-400 hover:text-emerald-700 cursor-pointer"
                            title={language === 'uz' ? 'Talaffuzini tinglash' : 'Слушать'}
                          >
                            <Volume2 className={`w-4 h-4 ${speakingWordId === term.id ? 'text-emerald-600 animate-pulse' : ''}`} />
                          </button>
                          <button
                            onClick={() => toggleStarWord(term.id)}
                            className="p-1 text-stone-400 hover:text-amber-500 cursor-pointer"
                            title={language === 'uz' ? 'Saralanganlarga qo‘shish' : 'В избранное'}
                          >
                            <Star className={`w-4 h-4 ${isFav ? 'fill-amber-500 text-amber-500' : ''}`} />
                          </button>
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100">
                          {term.wordUz}
                        </h3>
                        <span className="text-xs text-stone-500 italic block mt-0.5">
                          {term.wordRu}
                        </span>
                      </div>

                      <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed">
                        {term[language === 'uz' ? 'definitionUz' : 'definitionRu']}
                      </p>

                      <div className="p-2.5 rounded-lg bg-stone-50 dark:bg-stone-800/60 text-xs text-stone-600 dark:text-stone-400 italic">
                        «{term[language === 'uz' ? 'exampleUz' : 'exampleRu']}»
                      </div>
                    </div>

                    <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs">
                      <span className="text-[11px] text-stone-400">
                        {term[language === 'uz' ? 'sourceUz' : 'sourceRu']}
                      </span>

                      <button
                        onClick={() => markWordLearned(term.id)}
                        className={`px-2.5 py-1 rounded-md text-xs font-medium cursor-pointer transition-colors ${
                          isLearned
                            ? 'bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-semibold'
                            : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-emerald-50'
                        }`}
                      >
                        {isLearned ? '✓ ' + (language === 'uz' ? 'O‘rgandim' : 'Выучено') : '+ ' + (language === 'uz' ? 'O‘rgandim' : 'Выучить')}
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}
    </div>
  );
};
