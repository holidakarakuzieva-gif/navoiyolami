import React, { useState } from 'react';
import { useApp, allBadges } from '../../context/AppContext';
import {
  Trophy,
  Award,
  Sparkles,
  CheckCircle2,
  Lock,
  Printer,
  Compass,
  BookOpen,
  Scroll,
  Search,
  Feather,
  Crown,
  Footprints
} from 'lucide-react';

export const KnowledgeMapView: React.FC = () => {
  const { language, progress } = useApp();
  const [studentName, setStudentName] = useState('8-sinf o‘quvchisi');

  const getBadgeIcon = (iconName: string) => {
    switch (iconName) {
      case 'Footprints': return Footprints;
      case 'BookOpen': return BookOpen;
      case 'Compass': return Compass;
      case 'Scroll': return Scroll;
      case 'Search': return Search;
      case 'Feather': return Feather;
      case 'Crown': return Crown;
      default: return Award;
    }
  };

  const stages = [
    {
      id: 1,
      titleUz: '1-bosqich: Navoiy bilan tanishuv',
      titleRu: 'Этап 1: Знакомство с Навои',
      descUz: 'Muzeydagi ilk ma’ruzalar va tarjimai hol bilan tanishish.',
      descRu: 'Изучение биографии и культурного контекста XV века.',
      reqXp: 50,
      badgeId: 'first-step'
    },
    {
      id: 2,
      titleUz: '2-bosqich: So‘zlar xazinasi',
      titleRu: 'Этап 2: Сокровищница слов',
      descUz: 'Lug‘atdagi mumtoz so‘zlarni va «So‘z ovchisi» o‘yinini o‘rganish.',
      descRu: 'Освоение новых терминов и победа в игре «Охотник за словами».',
      reqXp: 120,
      badgeId: 'word-master'
    },
    {
      id: 3,
      titleUz: '3-bosqich: «Xamsa» sirlarini ochish',
      titleRu: 'Этап 3: Тайны «Хамсы»',
      descUz: 'Besh doston voqealarini xronologik tartibga solish.',
      descRu: 'Сюжетные линии пяти поэм и подвиг Фархада.',
      reqXp: 200,
      badgeId: 'wisdom-seeker'
    },
    {
      id: 4,
      titleUz: '4-bosqich: Hikmatlar olami',
      titleRu: 'Этап 4: Мир афоризмов',
      descUz: 'Navoiy falsafiy aforizmlarini tahlil qilish va ma’nosini anglash.',
      descRu: 'Глубокий анализ этических формул и правил вежливости.',
      reqXp: 300,
      badgeId: 'xamsa-explorer'
    },
    {
      id: 5,
      titleUz: '5-bosqich: Adabiy detektiv',
      titleRu: 'Этап 5: Литературный детектив',
      descUz: 'O‘yinlar laboratoriyasida barcha jumbog‘larni yechish.',
      descRu: 'Решение исторических загадок и прохождение тестов.',
      reqXp: 400,
      badgeId: 'literary-detective'
    },
    {
      id: 6,
      titleUz: '6-bosqich: Ijodkor o‘quvchi',
      titleRu: 'Этап 6: Юный творец',
      descUz: 'Ustaxonada qahramonga maktub yoki mini-insho yozish.',
      descRu: 'Самостоятельное написание эссе или письма литературному герою.',
      reqXp: 500,
      badgeId: 'creative-spirit'
    },
    {
      id: 7,
      titleUz: '7-bosqich: Navoiy bilimdoni',
      titleRu: 'Этап 7: Знаток Навои (Высшая ступень)',
      descUz: 'Barcha bosqichlarni muvaffaqiyatli yakunlab 700+ ball to‘plash.',
      descRu: 'Триумфальное завершение пути и сертификат почетного знатока.',
      reqXp: 700,
      badgeId: 'navoiy-scholar'
    }
  ];

  const handlePrintCertificate = () => {
    window.print();
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
      {/* HEADER */}
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-stone-200 dark:border-stone-800 pb-6 no-print">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-semibold tracking-wider text-emerald-800 dark:text-emerald-400 uppercase">
            <span>{language === 'uz' ? 'Gamifikatsiya va yo‘l xaritasi' : 'Дорожная карта знаний'}</span>
            <span>·</span>
            <span>{progress.xp} XP</span>
          </div>

          <h1 className="font-display-title text-3xl sm:text-4xl font-bold text-stone-900 dark:text-stone-100">
            {language === 'uz' ? 'Bilimlar xaritasi va yutuqlarim' : 'Карта знаний и достижения'}
          </h1>

          <p className="text-stone-600 dark:text-stone-300 text-sm max-w-xl">
            {language === 'uz'
              ? '7 bosqichli ta’limiy sayohat: har bir qadam yangi bilim, nishon va ballar olib keladi.'
              : 'Семиступенчатый путь познания: осваивайте уроки, открывайте бейджи и получите Литературный паспорт.'}
          </p>
        </div>

        <button
          onClick={handlePrintCertificate}
          className="px-4 py-2 rounded-xl bg-stone-900 dark:bg-emerald-800 text-white text-xs font-semibold hover:bg-stone-800 transition-colors cursor-pointer flex items-center gap-2 self-start sm:self-auto"
        >
          <Printer className="w-4 h-4" />
          <span>{language === 'uz' ? 'Adabiy pasportni chop etish' : 'Печать паспорта'}</span>
        </button>
      </div>

      {/* 7-STAGE PROGRESS ROAD */}
      <div className="space-y-4 no-print">
        <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100">
          {language === 'uz' ? 'Navoiy olamida 7 bosqichli sayohat' : '7 этапов путешествия в мир Навои'}
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stages.map(stg => {
            const isUnlocked = progress.xp >= stg.reqXp;
            const isBadgeEarned = progress.unlockedBadges.includes(stg.badgeId);
            return (
              <div
                key={stg.id}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between space-y-3 ${
                  isUnlocked
                    ? 'bg-white dark:bg-[#151D2A] border-emerald-600/60 shadow-xs'
                    : 'bg-stone-50 dark:bg-stone-900 border-stone-200 dark:border-stone-800 opacity-70'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-400">
                      {stg.reqXp} XP
                    </span>
                    {isUnlocked ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Lock className="w-4 h-4 text-stone-400" />
                    )}
                  </div>

                  <h4 className="font-display-title text-sm font-bold text-stone-900 dark:text-stone-100 leading-snug">
                    {stg[language === 'uz' ? 'titleUz' : 'titleRu']}
                  </h4>

                  <p className="text-xs text-stone-600 dark:text-stone-400 leading-relaxed">
                    {stg[language === 'uz' ? 'descUz' : 'descRu']}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px]">
                  <span className={isUnlocked ? 'text-emerald-700 font-semibold' : 'text-stone-400'}>
                    {isUnlocked ? (language === 'uz' ? 'Ochilgan' : 'Открыто') : (language === 'uz' ? 'Qulflangan' : 'Заблокировано')}
                  </span>
                  {isBadgeEarned && (
                    <span className="text-amber-600 dark:text-amber-400 font-bold">
                      ★ {language === 'uz' ? 'Nishon qo‘lda' : 'Бейдж'}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* BADGES GALLERY */}
      <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-[#151D2A] border border-stone-200 dark:border-stone-800 shadow-xs space-y-6 no-print">
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
          <div>
            <h3 className="font-display-title text-xl font-bold text-stone-900 dark:text-stone-100">
              {language === 'uz' ? 'Yutuqlarim va faxriy nishonlar' : 'Коллекция наград и бейджей'}
            </h3>
            <p className="text-xs text-stone-500">
              {language === 'uz' ? 'Har bir nishon o‘quvchining tirishqoqligi va bilimini bildiradi' : 'Каждый бейдж отражает реальные учебные достижения'}
            </p>
          </div>
          <span className="text-xs font-bold font-mono text-emerald-800 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-3 py-1 rounded-lg">
            {progress.unlockedBadges.length} / {allBadges.length} {language === 'uz' ? 'ochildi' : 'получено'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allBadges.map(badge => {
            const isUnlocked = progress.unlockedBadges.includes(badge.id);
            const Icon = getBadgeIcon(badge.iconName);
            return (
              <div
                key={badge.id}
                className={`p-4 rounded-xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-amber-50/50 dark:bg-amber-950/20 border-amber-300 dark:border-amber-800/60'
                    : 'bg-stone-50 dark:bg-stone-800/40 border-stone-200 dark:border-stone-700 opacity-50 grayscale'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isUnlocked ? 'bg-amber-500 text-stone-950' : 'bg-stone-300 dark:bg-stone-700 text-stone-500'
                }`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-0.5 min-w-0">
                  <h4 className="text-xs sm:text-sm font-bold text-stone-900 dark:text-stone-100 truncate">
                    {badge[language === 'uz' ? 'titleUz' : 'titleRu']}
                  </h4>
                  <p className="text-[11px] text-stone-600 dark:text-stone-400 line-clamp-2">
                    {badge[language === 'uz' ? 'descUz' : 'descRu']}
                  </p>
                  <span className="text-[10px] font-mono text-stone-400 block pt-1">
                    {badge.requiredXp} XP
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* PRINTABLE LITERARY PASSPORT CERTIFICATE */}
      <div className="p-8 sm:p-12 rounded-3xl bg-white text-stone-900 border-2 border-amber-800/30 shadow-md space-y-6 print-page">
        <div className="text-center space-y-2 border-b-2 border-amber-800/20 pb-6">
          <span className="font-display-title text-xs tracking-widest uppercase text-amber-900 font-bold">
            O‘ZBEKISTON RESPUBLIKASI MAKTAB TA’LIMI · 8-SINF
          </span>
          <h2 className="font-serif-title text-3xl sm:text-4xl font-bold tracking-tight text-emerald-950">
            MENING ADABIY PASPORTIM
          </h2>
          <p className="font-serif-title text-sm italic text-stone-600">
            «Jozibali o‘zbek tili» — Alisher Navoiy merosini o‘rganish bo‘yicha shaxsiy yutuqlar guvohnomasi
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-2">
          <div className="space-y-1">
            <span className="text-xs uppercase text-stone-500 font-semibold block">
              {language === 'uz' ? 'O‘quvchi ismi:' : 'Имя учащегося:'}
            </span>
            <input
              type="text"
              value={studentName}
              onChange={e => setStudentName(e.target.value)}
              className="text-lg font-bold font-serif-title text-stone-900 border-b border-stone-300 w-full focus:outline-none focus:border-emerald-800 bg-transparent"
            />
          </div>

          <div className="space-y-1">
            <span className="text-xs uppercase text-stone-500 font-semibold block">
              {language === 'uz' ? 'To‘plangan umumiy ball (XP):' : 'Набранные баллы (XP):'}
            </span>
            <span className="text-2xl font-bold font-mono text-emerald-900">
              {progress.xp} XP
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-amber-50/50 border border-amber-200 text-center">
          <div>
            <span className="text-xs text-stone-500 block">{language === 'uz' ? 'O‘rganilgan darslar:' : 'Пройдено уроков:'}</span>
            <span className="text-xl font-bold font-mono text-stone-900">{progress.completedLessons.length}</span>
          </div>
          <div>
            <span className="text-xs text-stone-500 block">{language === 'uz' ? 'O‘zlashtirilgan so‘zlar:' : 'Выучено слов:'}</span>
            <span className="text-xl font-bold font-mono text-stone-900">{progress.learnedWords.length}</span>
          </div>
          <div>
            <span className="text-xs text-stone-500 block">{language === 'uz' ? 'Ochilgan nishonlar:' : 'Бейджей получено:'}</span>
            <span className="text-xl font-bold font-mono text-stone-900">{progress.unlockedBadges.length} / 7</span>
          </div>
        </div>

        <div className="text-center pt-4 border-t border-amber-800/20">
          <p className="font-serif-title text-base italic text-emerald-900">
            «Odamiy ersang demagil odamiy, Onikim yo‘q xalq g‘amidin g‘ami»
          </p>
          <span className="text-xs text-stone-500 mt-1 block">
            Nizomiddin Mir Alisher Navoiy
          </span>
        </div>
      </div>
    </div>
  );
};
