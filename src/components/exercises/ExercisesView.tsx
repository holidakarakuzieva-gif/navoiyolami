import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  CheckCircle2,
  XCircle,
  HelpCircle,
  RotateCcw,
  Sparkles,
  BookOpen,
  ArrowRight
} from 'lucide-react';

interface FillBlankExercise {
  id: string;
  sentencePreUz: string;
  sentencePostUz: string;
  sentenceRu: string;
  options: string[];
  correctAnswer: string;
  explanationUz: string;
  explanationRu: string;
}

interface TrueFalseExercise {
  id: string;
  statementUz: string;
  statementRu: string;
  isTrue: boolean;
  explanationUz: string;
  explanationRu: string;
}

interface CatchErrorExercise {
  id: string;
  wrongSentenceUz: string;
  wrongSentenceRu: string;
  errorPartUz: string;
  correctWordUz: string;
  explanationUz: string;
  explanationRu: string;
}

export const ExercisesView: React.FC = () => {
  const { language, addXp, triggerConfetti } = useApp();

  const [activeExerciseType, setActiveExerciseType] = useState<'blanks' | 'truefalse' | 'errors'>('blanks');

  // Exercise 1: Fill Blanks
  const blanksData: FillBlankExercise[] = [
    {
      id: 'b1',
      sentencePreUz: 'Alisher Navoiy turkiy tilda birinchi bo‘lib',
      sentencePostUz: 'dostonlar to‘plamini yaratgan.',
      sentenceRu: 'Алишер Навои первым создал свод поэм «Хамса» на тюркском языке.',
      options: ['«Xamsa»', '«Boburnoma»', '«Zafarnoma»', '«Tarix»'],
      correctAnswer: '«Xamsa»',
      explanationUz: 'Turkiy tildagi birinchi beshlik — «Xamsa»dir.',
      explanationRu: 'Первая тюркоязычная «Хамса» написана Навои.'
    },
    {
      id: 'b2',
      sentencePreUz: 'Farhod xalqqa suv chiqarish uchun tosh tog‘ni',
      sentencePostUz: 'bilan yorgan.',
      sentenceRu: 'Фархад пробил каменную скалу киркой (кулонг), чтобы добыть воду.',
      options: ['kulong', 'qalam', 'oyna', 'kitob'],
      correctAnswer: 'kulong',
      explanationUz: 'Kulong — tosh kesishda ishlatiladigan metall asbob.',
      explanationRu: 'Кулонг — тяжелая кирка камнереза.'
    },
    {
      id: 'b3',
      sentencePreUz: 'Navoiy «Muhokamat ul-lug‘atayn» asarini',
      sentencePostUz: '-yilda yozib tugatgan.',
      sentenceRu: 'Трактат «Спор двух языков» был завершен в 1499 году.',
      options: ['1499', '1441', '1501', '1483'],
      correctAnswer: '1499',
      explanationUz: '«Muhokamat ul-lug‘atayn» 1499-yilda yozilgan buyuk lisoniy asardir.',
      explanationRu: 'Труд датирован 1499 годом.'
    }
  ];

  const [blankSelections, setBlankSelections] = useState<Record<string, string>>({});
  const [blankSubmitted, setBlankSubmitted] = useState(false);

  const handleBlankSelect = (id: string, opt: string) => {
    if (blankSubmitted) return;
    setBlankSelections(prev => ({ ...prev, [id]: opt }));
  };

  const handleCheckBlanks = () => {
    setBlankSubmitted(true);
    let correctCount = 0;
    blanksData.forEach(item => {
      if (blankSelections[item.id] === item.correctAnswer) {
        correctCount++;
      }
    });
    if (correctCount === blanksData.length) {
      addXp(40);
      triggerConfetti();
    }
  };

  // Exercise 2: True / False
  const tfData: TrueFalseExercise[] = [
    {
      id: 'tf1',
      statementUz: 'Alisher Navoiy va Husayn Boyqaro bolalikdan birga tahsil olgan do‘stlar bo‘lgan.',
      statementRu: 'Алишер Навои и Хусейн Байкара учились вместе с детских лет.',
      isTrue: true,
      explanationUz: 'Bu haqiqat: ular bolalikdan bir maktabda tahsil olgan qadrdon do‘st bo‘lishgan.',
      explanationRu: 'Верно: они дружили со школьной скамьи.'
    },
    {
      id: 'tf2',
      statementUz: 'Navoiy «Xamsa»ni 20 yil davomida yozgan.',
      statementRu: 'Навои писал «Хамсу» в течение 20 лет.',
      isTrue: false,
      explanationUz: 'Noto‘g‘ri: Navoiy «Xamsa»ni nihoyatda qisqa muddatda — atigi 2 yilda (1483–1485) yozib tugatgan.',
      explanationRu: 'Неверно: поэт создал этот гигантский труд рекордными темпами — всего за 2 года.'
    },
    {
      id: 'tf3',
      statementUz: 'Fors-tojik tilidagi asarlarida Navoiy «Foniy» taxallusi bilan imzo chekkan.',
      statementRu: 'В стихах на фарси Навои подписывался псевдонимом «Фани».',
      isTrue: true,
      explanationUz: 'To‘g‘ri: «Foniy» so‘zi kamtar, fano bo‘luvchi ma’nosini bildiradi.',
      explanationRu: 'Верно: «Фани» означает бренный, смертный философ.'
    }
  ];

  const [tfAnswers, setTfAnswers] = useState<Record<string, boolean | null>>({});
  const [tfSubmitted, setTfSubmitted] = useState(false);

  const handleTfSelect = (id: string, val: boolean) => {
    if (tfSubmitted) return;
    setTfAnswers(prev => ({ ...prev, [id]: val }));
  };

  const handleCheckTf = () => {
    setTfSubmitted(true);
    let allRight = true;
    tfData.forEach(item => {
      if (tfAnswers[item.id] !== item.isTrue) allRight = false;
    });
    if (allRight) {
      addXp(35);
      triggerConfetti();
    }
  };

  // Exercise 3: Catch the Error (Xatoni tut!)
  const errorData: CatchErrorExercise[] = [
    {
      id: 'err1',
      wrongSentenceUz: 'Navoiy 1441-yilda Samarqandda tavallud topgan.',
      wrongSentenceRu: 'Навои родился в 1441 году в Самарканде (ошибка в городе).',
      errorPartUz: 'Samarqandda',
      correctWordUz: 'Hirotda',
      explanationUz: 'Navoiy Samarqandda o‘qigan, lekin Hirotda tug‘ilgan.',
      explanationRu: 'Навои родился в Герате, а в Самарканде учился.'
    },
    {
      id: 'err2',
      wrongSentenceUz: 'Farhod xalqqa oltin tarqatish uchun tog‘ni talqon qilgan.',
      wrongSentenceRu: 'Фархад пробил гору, чтобы раздать золото (ошибка в цели).',
      errorPartUz: 'oltin tarqatish',
      correctWordUz: 'suv olib kelish (suv chiqarish)',
      explanationUz: 'Farhod xalqni suvsizlikdan qutqarish uchun tog‘ni teshgan.',
      explanationRu: 'Фархад совершил подвиг ради питьевой воды, а не золота.'
    }
  ];

  const [errorInputValues, setErrorInputValues] = useState<Record<string, string>>({});
  const [errorSubmitted, setErrorSubmitted] = useState<Record<string, boolean>>({});

  const handleCheckError = (id: string, correct: string) => {
    const val = (errorInputValues[id] || '').trim().toLowerCase();
    const isClose = correct.toLowerCase().includes(val) && val.length > 2;
    setErrorSubmitted(prev => ({ ...prev, [id]: true }));
    if (isClose) {
      addXp(25);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* HEADER */}
      <div className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
          <span>{language === 'uz' ? 'Amaliy laboratoriya' : 'Практикум'}</span>
          <span>·</span>
          <span>{language === 'uz' ? 'Grammatika va adabiy tahlil' : 'Грамматика и анализ'}</span>
        </div>

        <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
          {language === 'uz' ? 'Mashqlar va testlar' : 'Интерактивные упражнения'}
        </h1>

        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {language === 'uz'
            ? 'O‘zbek tili grammatikasi, so‘z qo‘llash madaniyati va adabiy faktlarni interaktiv mashqlar orqali mustahkamlang.'
            : 'Упражнения на понимание контекста, грамматическую зоркость («Поймай ошибку») и истинность суждений.'}
        </p>

        {/* Exercise Tabs */}
        <div className="flex flex-wrap gap-2 pt-2">
          <button
            onClick={() => setActiveExerciseType('blanks')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeExerciseType === 'blanks'
                ? 'bg-emerald-800 text-white'
                : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            {language === 'uz' ? '1. Bo‘sh joylarni to‘ldirish' : '1. Вставка пропущенных слов'}
          </button>

          <button
            onClick={() => setActiveExerciseType('truefalse')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeExerciseType === 'truefalse'
                ? 'bg-emerald-800 text-white'
                : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            {language === 'uz' ? '2. To‘g‘ri yoki noto‘g‘ri' : '2. Правда или ложь'}
          </button>

          <button
            onClick={() => setActiveExerciseType('errors')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-colors cursor-pointer ${
              activeExerciseType === 'errors'
                ? 'bg-emerald-800 text-white'
                : 'bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300'
            }`}
          >
            {language === 'uz' ? '3. Xatoni tut!' : '3. Поймай ошибку!'}
          </button>
        </div>
      </div>

      {/* EXERCISE 1: FILL IN THE BLANKS */}
      {activeExerciseType === 'blanks' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <h3 className="font-display-title text-lg font-bold text-stone-900 dark:text-stone-100">
              {language === 'uz' ? 'Bo‘sh joyga mos keluvchi so‘zni tanlang:' : 'Выберите подходящее по смыслу слово:'}
            </h3>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
              +40 XP
            </span>
          </div>

          <div className="space-y-6">
            {blanksData.map((item, idx) => {
              const selected = blankSelections[item.id];
              const isCorrect = selected === item.correctAnswer;
              return (
                <div key={item.id} className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                  <div className="text-sm sm:text-base font-medium text-stone-900 dark:text-stone-100 leading-relaxed">
                    <span>{item.sentencePreUz} </span>
                    <span className="px-2.5 py-0.5 rounded border border-dashed border-emerald-600 bg-white dark:bg-stone-900 font-bold text-emerald-800 dark:text-emerald-300">
                      {selected || '...'}
                    </span>
                    <span> {item.sentencePostUz}</span>
                  </div>

                  <p className="text-xs text-stone-500 italic">
                    {item.sentenceRu}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.options.map((opt, oIdx) => (
                      <button
                        key={oIdx}
                        disabled={blankSubmitted}
                        onClick={() => handleBlankSelect(item.id, opt)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all cursor-pointer ${
                          selected === opt
                            ? 'bg-emerald-800 text-white border-emerald-800 font-semibold'
                            : 'bg-white dark:bg-stone-700 border-stone-300 dark:border-stone-600 text-stone-800 dark:text-stone-200'
                        }`}
                      >
                        {opt}
                      </button>
                    ))}
                  </div>

                  {blankSubmitted && (
                    <div className="pt-2 text-xs flex items-center gap-1.5 font-medium">
                      {isCorrect ? (
                        <span className="text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>{language === 'uz' ? 'To‘g‘ri!' : 'Верно!'}</span>
                        </span>
                      ) : (
                        <span className="text-rose-600 dark:text-rose-400 flex items-center gap-1">
                          <XCircle className="w-4 h-4" />
                          <span>{language === 'uz' ? `To‘g‘ri javob: ${item.correctAnswer}` : `Правильный ответ: ${item.correctAnswer}`}</span>
                        </span>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2 flex gap-3">
            {!blankSubmitted ? (
              <button
                onClick={handleCheckBlanks}
                disabled={Object.keys(blankSelections).length < blanksData.length}
                className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-semibold text-xs cursor-pointer"
              >
                {language === 'uz' ? 'Javoblarni tekshirish' : 'Проверить ответы'}
              </button>
            ) : (
              <button
                onClick={() => {
                  setBlankSelections({});
                  setBlankSubmitted(false);
                }}
                className="px-5 py-2 rounded-xl bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-xs cursor-pointer flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>{language === 'uz' ? 'Qayta urinish' : 'Сбросить'}</span>
              </button>
            )}
          </div>
        </div>
      )}

      {/* EXERCISE 2: TRUE / FALSE */}
      {activeExerciseType === 'truefalse' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <h3 className="font-display-title text-lg font-bold text-stone-900 dark:text-stone-100">
              {language === 'uz' ? 'Fikr to‘g‘ri yoki noto‘g‘ri ekanligini aniqlang:' : 'Определите: истинно или ложно утверждение:'}
            </h3>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
              +35 XP
            </span>
          </div>

          <div className="space-y-4">
            {tfData.map((item, idx) => {
              const selected = tfAnswers[item.id];
              const isCorrect = selected === item.isTrue;
              return (
                <div key={item.id} className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-2.5">
                  <p className="text-sm sm:text-base font-semibold text-stone-900 dark:text-stone-100">
                    {item[language === 'uz' ? 'statementUz' : 'statementRu']}
                  </p>

                  <div className="flex gap-2">
                    <button
                      disabled={tfSubmitted}
                      onClick={() => handleTfSelect(item.id, true)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selected === true
                          ? 'bg-emerald-800 text-white border-emerald-800'
                          : 'bg-white dark:bg-stone-700 border-stone-300 dark:border-stone-600'
                      }`}
                    >
                      {language === 'uz' ? '✓ To‘g‘ri' : '✓ Правда'}
                    </button>
                    <button
                      disabled={tfSubmitted}
                      onClick={() => handleTfSelect(item.id, false)}
                      className={`px-4 py-1.5 rounded-lg text-xs font-semibold border transition-all cursor-pointer ${
                        selected === false
                          ? 'bg-rose-800 text-white border-rose-800'
                          : 'bg-white dark:bg-stone-700 border-stone-300 dark:border-stone-600'
                      }`}
                    >
                      {language === 'uz' ? '✗ Noto‘g‘ri' : '✗ Ложь'}
                    </button>
                  </div>

                  {tfSubmitted && (
                    <div className="pt-2 text-xs text-stone-600 dark:text-stone-300">
                      <span className="font-bold block">
                        {isCorrect
                          ? (language === 'uz' ? 'To‘g‘ri javob berdingiz!' : 'Верно!')
                          : (language === 'uz' ? 'Xato tanlov.' : 'Неверно.')}
                      </span>
                      <p>{item[language === 'uz' ? 'explanationUz' : 'explanationRu']}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-2">
            {!tfSubmitted ? (
              <button
                onClick={handleCheckTf}
                disabled={Object.keys(tfAnswers).length < tfData.length}
                className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-semibold text-xs cursor-pointer"
              >
                {language === 'uz' ? 'Tekshirish' : 'Проверить'}
              </button>
            ) : (
              <button
                onClick={() => {
                  setTfAnswers({});
                  setTfSubmitted(false);
                }}
                className="px-5 py-2 rounded-xl bg-stone-200 dark:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-xs cursor-pointer"
              >
                {language === 'uz' ? 'Qaytadan urinish' : 'Сбросить'}
              </button>
            )}
          </div>
        </div>
      )}

      {/* EXERCISE 3: CATCH THE ERROR */}
      {activeExerciseType === 'errors' && (
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <div>
              <h3 className="font-display-title text-lg font-bold text-stone-900 dark:text-stone-100">
                {language === 'uz' ? '«Xatoni tut!» — Tarixiy yoki ma’naviy xatoni toping va tuzating' : '«Поймай ошибку!» — Исправьте ошибку в предложении'}
              </h3>
              <p className="text-xs text-stone-500">
                {language === 'uz' ? 'Xato so‘z o‘rniga to‘g‘ri so‘zni yozing:' : 'Введите правильное слово вместо ошибочного:'}
              </p>
            </div>
            <span className="text-xs font-bold text-amber-700 bg-amber-50 dark:bg-amber-950 px-2 py-0.5 rounded">
              +25 XP
            </span>
          </div>

          <div className="space-y-6">
            {errorData.map((item, idx) => (
              <div key={item.id} className="p-4 rounded-xl bg-stone-50 dark:bg-stone-800/60 border border-stone-200 dark:border-stone-700 space-y-3">
                <div className="text-sm font-semibold text-stone-900 dark:text-stone-100">
                  <span>{item.wrongSentenceUz}</span>
                </div>
                <p className="text-xs text-stone-500 italic">
                  {item.wrongSentenceRu}
                </p>

                <div className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="text"
                    placeholder={language === 'uz' ? 'To‘g‘ri so‘zni yozing...' : 'Введите правильное слово...'}
                    value={errorInputValues[item.id] || ''}
                    onChange={e => setErrorInputValues({ ...errorInputValues, [item.id]: e.target.value })}
                    className="flex-1 px-3 py-2 text-xs rounded-lg border border-stone-300 dark:border-stone-600 bg-white dark:bg-stone-700 focus:outline-none focus:border-emerald-600"
                  />
                  <button
                    onClick={() => handleCheckError(item.id, item.correctWordUz)}
                    className="px-4 py-2 bg-emerald-800 text-white rounded-lg text-xs font-semibold cursor-pointer hover:bg-emerald-900"
                  >
                    {language === 'uz' ? 'Tuzatish' : 'Исправить'}
                  </button>
                </div>

                {errorSubmitted[item.id] && (
                  <div className="pt-2 text-xs text-stone-600 dark:text-stone-300 space-y-1">
                    <span className="font-bold text-emerald-800 dark:text-emerald-400 block">
                      {language === 'uz' ? `To‘g‘ri so‘z: ${item.correctWordUz}` : `Правильное слово: ${item.correctWordUz}`}
                    </span>
                    <p>{item[language === 'uz' ? 'explanationUz' : 'explanationRu']}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
