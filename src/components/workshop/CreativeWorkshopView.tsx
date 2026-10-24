import React, { useState, useEffect } from 'react';
import { useApp } from '../../context/AppContext';
import { CreativeEntry } from '../../types';
import {
  Feather,
  Save,
  Copy,
  Printer,
  Trash2,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  FileText,
  Mail,
  Lightbulb
} from 'lucide-react';

export const CreativeWorkshopView: React.FC = () => {
  const { language, addXp, incrementCreativeWorks } = useApp();

  const [activeTopic, setActiveTopic] = useState<'question' | 'aphorism' | 'modern' | 'letter' | 'essay' | 'story'>('letter');
  const [content, setContent] = useState('');
  const [entries, setEntries] = useState<CreativeEntry[]>(() => {
    try {
      const saved = localStorage.getItem('jozibali_creative_entries');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [justSaved, setJustSaved] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('jozibali_creative_entries', JSON.stringify(entries));
    } catch {
      // ignore
    }
  }, [entries]);

  const topics = [
    {
      id: 'letter',
      titleUz: 'Qahramonga maktub',
      titleRu: 'Письмо герою',
      promptUz: 'Farhod, Shirin yoki Majnunga zamonaviy o‘quvchi nomidan samimiy xat yozing (4–6 jumla).',
      promptRu: 'Напишите искреннее письмо от лица современного 8-классника Фархаду, Ширин или Меджнуну (4–6 предложений).',
      icon: Mail,
      starterUz: 'Assalomu alaykum, matonatli Farhod! Men 8-sinf o‘quvchisiman...',
      starterRu: 'Здравствуйте, благородный Фархад! Я ученик 8 класса...'
    },
    {
      id: 'question',
      titleUz: 'Men Navoiyga savol beraman',
      titleRu: 'Вопрос Алишеру Навои',
      promptUz: 'Agar buyuk mutafakkir bilan suhbatlashish imkoni bo‘lsa, undan nimalarni so‘ragan bo‘lar edingiz?',
      promptRu: 'О чем бы вы спросили великого поэта и государственного деятеля, окажись вы с ним наедине?',
      icon: MessageSquare,
      starterUz: 'Muhtaram Alisher Navoiy! Sizdan so‘ramoqchimanki...',
      starterRu: 'Уважаемый Алишер Навои! Я хотел бы узнать у вас...'
    },
    {
      id: 'aphorism',
      titleUz: 'Bir hikmat — bir xulosa',
      titleRu: 'Один афоризм — один вывод',
      promptUz: 'Navoiyning birorta aforizmini tanlab, uning bugungi hayotimizdagi ma’nosini tushuntiring.',
      promptRu: 'Выберите любимый афоризм поэта и раскройте его актуальность для сегодняшней жизни.',
      icon: Lightbulb,
      starterUz: 'Navoiyning «Tilga ixtiyorsiz — elga e’tiborsiz» degan hikmati shuni anglatadiki...',
      starterRu: 'Афоризм Навои о сдержанности речи учит нас тому, что...'
    },
    {
      id: 'modern',
      titleUz: 'Bugungi hayot va Navoiy',
      titleRu: 'Навои и современность',
      promptUz: 'Adolat, do‘stlik va tabiatni asrash g‘oyalari zamonaviy dunyoda qanday qo‘llanilishi kerak?',
      promptRu: 'Как идеи экологической чуткости, честности и милосердия проявляются в XXI веке?',
      icon: Sparkles,
      starterUz: 'Hozirgi axborot asrida do‘stlik va insoniylik eng muhim qadriyatdir, chunki...',
      starterRu: 'В век цифровых технологий искренняя дружба и чуткость важны как никогда, потому что...'
    },
    {
      id: 'essay',
      titleUz: 'Mini-esse (5–8 jumla)',
      titleRu: 'Мини-эссе (5–8 предложений)',
      promptUz: '«Nima uchun o‘zbek tilini o‘rganish jozibali va foydali?» mavzusida ixcham fikr bayon eting.',
      promptRu: 'Поделитесь рассуждением: «В чем притягательность и красота узбекского языка?».',
      icon: FileText,
      starterUz: 'Men uchun o‘zbek tilini o‘rganish juda qiziqarli, chunki bu tilda...',
      starterRu: 'Для меня изучение узбекского языка открывает удивительный мир, ведь...'
    },
    {
      id: 'story',
      titleUz: 'O‘zbekcha hikoya',
      titleRu: 'Составление рассказа',
      promptUz: 'Quyidagi so‘zlardan (ilm, mehr, kitob, orzu, do‘stlik) foydalanib kichik hikoya tuzing.',
      promptRu: 'Составьте небольшой связный рассказ, используя опорные слова: ilm, mehr, kitob, orzu, do‘stlik.',
      icon: Feather,
      starterUz: 'Bir kuni do‘stim bilan kutubxonada...',
      starterRu: 'Однажды мы с другом в библиотеке...'
    }
  ];

  const currentTopic = topics.find(t => t.id === activeTopic) || topics[0];

  const handleUseStarter = () => {
    setContent(language === 'uz' ? currentTopic.starterUz : currentTopic.starterRu);
  };

  const handleSave = () => {
    if (!content.trim()) return;
    const newEntry: CreativeEntry = {
      id: Date.now().toString(),
      topicId: activeTopic,
      titleUz: currentTopic.titleUz,
      titleRu: currentTopic.titleRu,
      content: content.trim(),
      date: new Date().toLocaleDateString(language === 'uz' ? 'uz-UZ' : 'ru-RU'),
      wordsUsed: []
    };

    setEntries(prev => [newEntry, ...prev]);
    incrementCreativeWorks();
    setJustSaved(true);
    setTimeout(() => setJustSaved(false), 3000);
  };

  const handleDelete = (id: string) => {
    setEntries(prev => prev.filter(e => e.id !== id));
  };

  const handleCopy = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER */}
      <div className="space-y-4 border-b border-stone-200 dark:border-stone-800 pb-6">
        <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
          <span>{language === 'uz' ? 'Ijodiy studiya' : 'Творческая студия'}</span>
          <span>·</span>
          <span>{language === 'uz' ? 'Mustaqil yozma nutq' : 'Письменная речь'}</span>
        </div>

        <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
          {language === 'uz' ? 'Ijodiy ustaxona' : 'Творческая мастерская юного литератора'}
        </h1>

        <p className="text-stone-600 dark:text-stone-300 text-sm sm:text-base max-w-2xl leading-relaxed">
          {language === 'uz'
            ? 'O‘z fikrlaringizni o‘zbek tilida ifoda eting: qahramonlarga maktub yozing, hikmatlarni sharhlang va mini-insholaringizni brauzerda saqlang.'
            : 'Практикуйте связную речь: составляйте письма героям, анализируйте афоризмы, сохраняйте творческие работы и распечатывайте эссе.'}
        </p>

        {/* Topic Selector Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 pt-2">
          {topics.map(t => {
            const isSelected = t.id === activeTopic;
            const Icon = t.icon;
            return (
              <button
                key={t.id}
                onClick={() => {
                  setActiveTopic(t.id as any);
                  setContent('');
                }}
                className={`p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between space-y-2 ${
                  isSelected
                    ? 'bg-emerald-800 text-white border-emerald-800 shadow-xs'
                    : 'bg-white dark:bg-[#151D2A] border-stone-200 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-emerald-600'
                }`}
              >
                <Icon className={`w-4 h-4 ${isSelected ? 'text-amber-300' : 'text-emerald-700 dark:text-emerald-400'}`} />
                <span className="text-xs font-bold leading-tight">
                  {t[language === 'uz' ? 'titleUz' : 'titleRu']}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* WRITING WORKSPACE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left 8 cols: Editor */}
        <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-5">
          <div className="border-b border-stone-100 dark:border-stone-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
                {currentTopic[language === 'uz' ? 'titleUz' : 'titleRu']}
              </span>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 mt-1">
                {currentTopic[language === 'uz' ? 'promptUz' : 'promptRu']}
              </p>
            </div>
            <button
              onClick={handleUseStarter}
              className="text-xs text-amber-700 dark:text-amber-400 font-semibold hover:underline self-start sm:self-auto cursor-pointer"
            >
              + {language === 'uz' ? 'Boshlang‘ich jumladan foydalanish' : 'Вставить начало'}
            </button>
          </div>

          <div className="space-y-2">
            <textarea
              rows={8}
              value={content}
              onChange={e => setContent(e.target.value)}
              placeholder={language === 'uz' ? 'Fikrlaringizni o‘zbek tilida yozing...' : 'Напишите ваше рассуждение на узбекском языке...'}
              className="w-full p-4 rounded-xl border border-stone-300 dark:border-stone-700 bg-stone-50 dark:bg-stone-900 text-stone-900 dark:text-stone-100 text-sm leading-relaxed focus:outline-none focus:border-emerald-600 font-sans"
            />
            <div className="flex items-center justify-between text-xs text-stone-400">
              <span>{content.trim().split(/\s+/).filter(Boolean).length} {language === 'uz' ? 'so‘z' : 'слов'}</span>
              <span>{language === 'uz' ? 'Ishingiz brauzer xotirasida xavfsiz saqlanadi' : 'Сохраняется локально в браузере'}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2">
            <button
              onClick={handleSave}
              disabled={!content.trim()}
              className="px-6 py-2.5 rounded-xl bg-emerald-800 hover:bg-emerald-900 disabled:opacity-50 text-white font-semibold text-xs transition-colors cursor-pointer flex items-center gap-2"
            >
              <Save className="w-4 h-4" />
              <span>{language === 'uz' ? 'Ustaxonada saqlash (+60 XP)' : 'Сохранить работу (+60 XP)'}</span>
            </button>

            {justSaved && (
              <span className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                <span>{language === 'uz' ? 'Saqlandi va ball berildi!' : 'Работа сохранена, XP начислены!'}</span>
              </span>
            )}
          </div>
        </div>

        {/* Right 4 cols: Saved Entries Shelf */}
        <div className="lg:col-span-4 p-6 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-stone-500">
              {language === 'uz' ? 'Mening yozgan ishlarim' : 'Мои сохраненные работы'}
            </span>
            <span className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-400">
              {entries.length}
            </span>
          </div>

          {entries.length === 0 ? (
            <p className="text-xs text-stone-400 italic py-6 text-center">
              {language === 'uz' ? 'Hozircha saqlangan ishlar yo‘q. Birinchi ishingizni yozing!' : 'Пока нет сохраненных работ. Напишите вашу первую мысль!'}
            </p>
          ) : (
            <div className="space-y-3 max-h-[480px] overflow-y-auto pr-1">
              {entries.map(item => (
                <div
                  key={item.id}
                  className="p-3.5 rounded-xl bg-stone-50 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-emerald-800 dark:text-emerald-300">
                      {item[language === 'uz' ? 'titleUz' : 'titleRu']}
                    </span>
                    <span className="text-[10px] text-stone-400 tabular-nums">
                      {item.date}
                    </span>
                  </div>

                  <p className="text-stone-700 dark:text-stone-300 line-clamp-3 italic">
                    «{item.content}»
                  </p>

                  <div className="flex items-center justify-between pt-1 border-t border-stone-200/60 dark:border-stone-700">
                    <button
                      onClick={() => handleCopy(item.content, item.id)}
                      className="text-[11px] text-stone-600 dark:text-stone-300 hover:text-emerald-700 flex items-center gap-1 cursor-pointer"
                    >
                      <Copy className="w-3 h-3" />
                      <span>{copiedId === item.id ? (language === 'uz' ? 'Nusxalandi!' : 'Скопировано!') : (language === 'uz' ? 'Nusxa' : 'Копия')}</span>
                    </button>

                    <button
                      onClick={() => handleDelete(item.id)}
                      className="text-[11px] text-rose-600 hover:text-rose-700 flex items-center gap-1 cursor-pointer"
                      title="O‘chirish"
                    >
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
