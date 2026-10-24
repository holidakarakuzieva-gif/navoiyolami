import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { translations } from '../../data/translations';
import { Moon, Sun, Menu, X, Sparkles, GraduationCap } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { language, setLanguage, theme, toggleTheme, currentSection, setCurrentSection, progress } = useApp();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[language];

  const primaryNavItems = [
    { id: 'home', label: t.nav.home },
    { id: 'navoiy', label: t.nav.navoiy },
    { id: 'xamsa', label: t.nav.xamsa },
    { id: 'lessons', label: t.nav.lessons },
    { id: 'games', label: t.nav.games },
    { id: 'glossary', label: t.nav.glossary },
  ];

  const secondaryNavItems = [
    { id: 'exercises', label: t.nav.exercises },
    { id: 'workshop', label: t.nav.workshop },
    { id: 'map', label: t.nav.map },
    { id: 'teacher', label: t.nav.teacher, special: true }
  ];

  const allNavItems = [...primaryNavItems, ...secondaryNavItems];

  const handleNavClick = (id: string) => {
    setCurrentSection(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#FAF8F5]/90 dark:bg-[#0F141C]/90 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
          {/* Zone 1: Single Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer shrink-0"
            aria-label="Jozibali O‘zbek Tili Bosh Sahifa"
          >
            <div className="w-8 h-8 rounded-lg bg-emerald-800 text-amber-300 flex items-center justify-center font-serif text-lg font-bold shadow-xs">
              ن
            </div>
            <div className="flex flex-col">
              <span className="font-display-title text-base sm:text-lg font-bold tracking-tight text-stone-900 dark:text-stone-100 whitespace-nowrap group-hover:text-emerald-700 dark:group-hover:text-emerald-400 transition-colors">
                {t.siteTitle}
              </span>
            </div>
          </button>

          {/* Zone 2: Primary Nav Links (Single line, text with subtle hover) */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-stone-600 dark:text-stone-300">
            {primaryNavItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`whitespace-nowrap transition-colors py-1 cursor-pointer ${
                  currentSection === item.id
                    ? 'text-emerald-800 dark:text-emerald-400 font-semibold border-b-2 border-emerald-800 dark:border-emerald-400'
                    : 'hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Quick dropdown / more popover button */}
            <div className="relative group/more">
              <button
                className={`flex items-center gap-1 py-1 cursor-pointer whitespace-nowrap transition-colors ${
                  secondaryNavItems.some(item => item.id === currentSection)
                    ? 'text-emerald-800 dark:text-emerald-400 font-semibold border-b-2 border-emerald-800 dark:border-emerald-400'
                    : 'hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                <span>{language === 'uz' ? 'Yana' : 'Ещё'}</span>
                <span className="text-xs">▾</span>
              </button>
              <div className="absolute right-0 top-full pt-2 hidden group-hover/more:block">
                <div className="w-48 bg-white dark:bg-[#182232] rounded-xl shadow-lg border border-stone-200 dark:border-stone-800 py-1.5 px-1">
                  {secondaryNavItems.map(item => (
                    <button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`w-full text-left px-3 py-2 text-xs font-medium rounded-lg transition-colors cursor-pointer flex items-center justify-between ${
                        currentSection === item.id
                          ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300'
                          : 'text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                      }`}
                    >
                      <span>{item.label}</span>
                      {item.special && (
                        <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200">
                          {language === 'uz' ? 'Dars' : 'План'}
                        </span>
                      )}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          {/* Zone 3: Primary Utility Action & Controls */}
          <div className="flex items-center gap-3 shrink-0">
            {/* XP Points Indicator */}
            <button
              onClick={() => handleNavClick('map')}
              title={language === 'uz' ? 'Bilimlar xaritasi va yutuqlar' : 'Карта знаний и достижения'}
              className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-xs font-semibold rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-800/60 cursor-pointer hover:bg-amber-100 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
              <span className="tabular-nums font-bold">{progress.xp}</span>
              <span className="text-[10px] uppercase tracking-wider text-amber-700/80 dark:text-amber-400">XP</span>
            </button>

            {/* Language Switcher */}
            <div className="flex items-center rounded-lg border border-stone-200 dark:border-stone-700 bg-stone-100/80 dark:bg-stone-800/80 p-0.5 text-xs font-medium">
              <button
                onClick={() => setLanguage('uz')}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  language === 'uz'
                    ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-300 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
                title="O‘zbek tili (Lotin)"
              >
                UZ
              </button>
              <button
                onClick={() => setLanguage('ru')}
                className={`px-2 py-1 rounded-md transition-colors cursor-pointer ${
                  language === 'ru'
                    ? 'bg-white dark:bg-stone-700 text-emerald-800 dark:text-emerald-300 shadow-xs font-semibold'
                    : 'text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white'
                }`}
                title="Русский язык"
              >
                RU
              </button>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="p-1.5 rounded-lg text-stone-600 dark:text-stone-300 hover:text-stone-900 dark:hover:text-white hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
            >
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>

            {/* Teacher Direct Shortcut */}
            <button
              onClick={() => handleNavClick('teacher')}
              className="hidden md:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-emerald-800 hover:bg-emerald-900 dark:bg-emerald-700 dark:hover:bg-emerald-600 rounded-lg transition-colors cursor-pointer whitespace-nowrap shadow-xs"
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>{t.nav.teacher}</span>
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              aria-label="Open navigation menu"
              className="lg:hidden p-1.5 rounded-lg text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-stone-200 dark:border-stone-800 bg-[#FAF8F5] dark:bg-[#0F141C] px-4 pt-3 pb-6 shadow-xl">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-stone-200 dark:border-stone-800">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-800 dark:text-amber-300">
                <Sparkles className="w-4 h-4 text-amber-600" />
                <span>{progress.xp} XP</span>
              </div>
              <span className="text-xs text-stone-500">
                {language === 'uz' ? '8-sinf o‘quv portali' : 'Учебный портал 8 класса'}
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {allNavItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors cursor-pointer ${
                    currentSection === item.id
                      ? 'bg-emerald-800 text-white font-semibold'
                      : 'text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-800'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>
    </>
  );
};
