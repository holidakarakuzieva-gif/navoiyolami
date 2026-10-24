import React from 'react';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { BookOpen, Compass, Award, Heart, GraduationCap, Code } from 'lucide-react';

export const Footer: React.FC = () => {
  const { language, setCurrentSection } = useApp();
  const t = translations[language];

  return (
    <footer className="bg-stone-100 dark:bg-[#0B0F15] border-t border-stone-200 dark:border-stone-800 text-stone-600 dark:text-stone-400 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Col 1: Platform identity & Author Badge */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-800 text-amber-300 flex items-center justify-center font-serif text-sm font-bold">
                ن
              </div>
              <span className="font-display-title font-bold text-stone-900 dark:text-stone-100 tracking-tight text-lg">
                {t.siteTitle}
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-lg text-stone-600 dark:text-stone-300">
              {t.footer.aboutPlatform}
            </p>
            <p className="text-xs text-stone-500 leading-normal">
              {t.footer.methodologyNote}
            </p>

            {/* Prominent Author & Developer Credit Card */}
            <div className="p-3.5 rounded-xl bg-white dark:bg-[#151D2A] border border-emerald-800/20 dark:border-emerald-600/30 shadow-xs space-y-1.5 max-w-lg">
              <div className="flex items-center gap-2 text-xs font-semibold text-emerald-800 dark:text-emerald-400">
                <GraduationCap className="w-4 h-4 text-emerald-700 dark:text-emerald-400 shrink-0" />
                <span>{language === 'uz' ? 'Muallif va ishlab chiquvchi' : 'Автор и разработчик'}</span>
              </div>
              <p className="text-xs text-stone-800 dark:text-stone-200 leading-relaxed font-medium">
                {t.footer.authorCredit}
              </p>
            </div>
          </div>

          {/* Col 2: Education Links */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-900 dark:text-stone-100">
              {language === 'uz' ? 'O‘quv bo‘limlari' : 'Учебные разделы'}
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <button
                  onClick={() => setCurrentSection('navoiy')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.navoiy}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentSection('xamsa')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.xamsa}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentSection('lessons')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.lessons}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentSection('glossary')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.glossary}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Interactive & Teacher */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold tracking-wider uppercase text-stone-900 dark:text-stone-100">
              {language === 'uz' ? 'Interaktiv vositalar' : 'Интерактив и педагогам'}
            </h4>
            <ul className="space-y-1.5 text-sm">
              <li>
                <button
                  onClick={() => setCurrentSection('games')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.games}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentSection('workshop')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.workshop}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentSection('map')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 transition-colors cursor-pointer text-left"
                >
                  {t.nav.map}
                </button>
              </li>
              <li>
                <button
                  onClick={() => setCurrentSection('teacher')}
                  className="hover:text-emerald-700 dark:hover:text-emerald-400 font-semibold transition-colors cursor-pointer text-left text-emerald-800 dark:text-emerald-400"
                >
                  {t.nav.teacher} (Dars ishlanmasi)
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar with specific user attribution note */}
        <div className="pt-6 border-t border-stone-200/60 dark:border-stone-800 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex flex-col sm:flex-row items-center gap-2 text-stone-600 dark:text-stone-400 text-center sm:text-left">
            <span>{t.footer.copyright}</span>
            <span className="hidden sm:inline">·</span>
            <span className="font-medium text-stone-800 dark:text-stone-200">
              {t.footer.authorCredit}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-stone-500 shrink-0">
            <span>{language === 'uz' ? 'Navoiy merosi bilan faxrlanamiz' : 'С гордостью за литературное наследие'}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
