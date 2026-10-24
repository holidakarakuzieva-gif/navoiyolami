import React, { createContext, useContext, useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Language, ThemeMode, UserProgress, BadgeItem } from '../types';

export const allBadges: BadgeItem[] = [
  {
    id: 'first-step',
    titleUz: 'Ilk qadam',
    titleRu: 'Первый шаг',
    descUz: 'Platforma bilan tanishib, dastlabki 50 ball to‘plandi.',
    descRu: 'Знакомство с платформой и первые 50 баллов XP.',
    iconName: 'Footprints',
    requiredXp: 50
  },
  {
    id: 'word-master',
    titleUz: 'So‘z ustasi',
    titleRu: 'Мастер слов',
    descUz: 'Lug‘atdan kamida 5 ta mumtoz so‘z o‘rganildi.',
    descRu: 'Освоено не менее 5 классических терминов в словаре.',
    iconName: 'BookOpen',
    requiredXp: 120
  },
  {
    id: 'wisdom-seeker',
    titleUz: 'Hikmat izlovchi',
    titleRu: 'Искатель мудрости',
    descUz: 'Navoiy aforizmlari va falsafiy g‘oyalari tahlil qilindi.',
    descRu: 'Глубокий разбор афоризмов и этических правил Навои.',
    iconName: 'Compass',
    requiredXp: 200
  },
  {
    id: 'xamsa-explorer',
    titleUz: 'Xamsa tadqiqotchisi',
    titleRu: 'Исследователь Хамсы',
    descUz: 'Besh doston qahramonlari va voqealari to‘liq o‘rganildi.',
    descRu: 'Изучены все пять эпических поэм великой «Хамсы».',
    iconName: 'Scroll',
    requiredXp: 300
  },
  {
    id: 'literary-detective',
    titleUz: 'Adabiy detektiv',
    titleRu: 'Литературный детектив',
    descUz: 'O‘yinlar laboratoriyasida barcha jumboq va mashqlar yechildi.',
    descRu: 'Успешно разгаданы загадки и викторины в лаборатории игр.',
    iconName: 'Search',
    requiredXp: 400
  },
  {
    id: 'creative-spirit',
    titleUz: 'Ijodkor o‘quvchi',
    titleRu: 'Юный творец',
    descUz: 'Ustaxonada mustaqil insho yoki qahramonga maktub yozildi.',
    descRu: 'Написано самостоятельное эссе или творческое письмо герою.',
    iconName: 'Feather',
    requiredXp: 500
  },
  {
    id: 'navoiy-scholar',
    titleUz: 'Navoiy bilimdoni',
    titleRu: 'Знаток Навои',
    descUz: 'Eng oliy daraja: 700+ ball to‘plandi va barcha sinovlar topshirildi.',
    descRu: 'Высшая награда: более 700 баллов и триумф во всех испытаниях.',
    iconName: 'Crown',
    requiredXp: 700
  }
];

const initialProgress: UserProgress = {
  xp: 40, // start with 40 XP as welcoming gift
  completedLessons: [],
  completedQuizzes: [],
  completedChapters: [],
  completedEpics: [],
  learnedWords: [],
  starredWords: [],
  unlockedBadges: ['first-step'],
  creativeWorksCount: 0,
  gameScores: {}
};

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  theme: ThemeMode;
  toggleTheme: () => void;
  currentSection: string;
  setCurrentSection: (section: string) => void;
  progress: UserProgress;
  addXp: (amount: number, reason?: string) => void;
  markLessonCompleted: (lessonId: string) => void;
  markQuizCompleted: (quizId: string) => void;
  markChapterCompleted: (chapterId: string) => void;
  markEpicCompleted: (epicId: string) => void;
  toggleStarWord: (wordId: string) => void;
  markWordLearned: (wordId: string) => void;
  saveGameScore: (gameId: string, score: number) => void;
  incrementCreativeWorks: () => void;
  triggerConfetti: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('jozibali_lang');
    return (saved === 'ru' || saved === 'uz') ? saved : 'uz';
  });

  const [theme, setThemeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('jozibali_theme');
    return (saved === 'dark' || saved === 'light') ? saved : 'light';
  });

  const [currentSection, setCurrentSection] = useState<string>('home');

  const [progress, setProgress] = useState<UserProgress>(() => {
    try {
      const saved = localStorage.getItem('jozibali_progress');
      if (saved) {
        return JSON.parse(saved);
      }
    } catch {
      // fallback
    }
    return initialProgress;
  });

  useEffect(() => {
    localStorage.setItem('jozibali_lang', language);
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    localStorage.setItem('jozibali_theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  useEffect(() => {
    try {
      localStorage.setItem('jozibali_progress', JSON.stringify(progress));
    } catch {
      // ignore
    }
  }, [progress]);

  const toggleTheme = () => {
    setThemeState(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const checkBadgeUnlocks = (currentXp: number, currentProgress: UserProgress) => {
    const newlyUnlocked: string[] = [];
    allBadges.forEach(b => {
      if (currentXp >= b.requiredXp && !currentProgress.unlockedBadges.includes(b.id)) {
        newlyUnlocked.push(b.id);
      }
    });
    if (newlyUnlocked.length > 0) {
      triggerConfetti();
      return [...currentProgress.unlockedBadges, ...newlyUnlocked];
    }
    return currentProgress.unlockedBadges;
  };

  const addXp = (amount: number) => {
    setProgress(prev => {
      const newXp = prev.xp + amount;
      const updatedBadges = checkBadgeUnlocks(newXp, prev);
      return {
        ...prev,
        xp: newXp,
        unlockedBadges: updatedBadges
      };
    });
  };

  const markLessonCompleted = (lessonId: string) => {
    setProgress(prev => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      const newCompleted = [...prev.completedLessons, lessonId];
      const newXp = prev.xp + 50;
      triggerConfetti();
      return {
        ...prev,
        completedLessons: newCompleted,
        xp: newXp,
        unlockedBadges: checkBadgeUnlocks(newXp, prev)
      };
    });
  };

  const markQuizCompleted = (quizId: string) => {
    setProgress(prev => {
      if (prev.completedQuizzes.includes(quizId)) return prev;
      const newXp = prev.xp + 30;
      return {
        ...prev,
        completedQuizzes: [...prev.completedQuizzes, quizId],
        xp: newXp,
        unlockedBadges: checkBadgeUnlocks(newXp, prev)
      };
    });
  };

  const markChapterCompleted = (chapterId: string) => {
    setProgress(prev => {
      if (prev.completedChapters.includes(chapterId)) return prev;
      const newXp = prev.xp + 25;
      return {
        ...prev,
        completedChapters: [...prev.completedChapters, chapterId],
        xp: newXp,
        unlockedBadges: checkBadgeUnlocks(newXp, prev)
      };
    });
  };

  const markEpicCompleted = (epicId: string) => {
    setProgress(prev => {
      if (prev.completedEpics.includes(epicId)) return prev;
      const newXp = prev.xp + 40;
      triggerConfetti();
      return {
        ...prev,
        completedEpics: [...prev.completedEpics, epicId],
        xp: newXp,
        unlockedBadges: checkBadgeUnlocks(newXp, prev)
      };
    });
  };

  const toggleStarWord = (wordId: string) => {
    setProgress(prev => {
      const isStarred = prev.starredWords.includes(wordId);
      const starredWords = isStarred
        ? prev.starredWords.filter(id => id !== wordId)
        : [...prev.starredWords, wordId];
      return { ...prev, starredWords };
    });
  };

  const markWordLearned = (wordId: string) => {
    setProgress(prev => {
      if (prev.learnedWords.includes(wordId)) return prev;
      const learnedWords = [...prev.learnedWords, wordId];
      const newXp = prev.xp + 15;
      return {
        ...prev,
        learnedWords,
        xp: newXp,
        unlockedBadges: checkBadgeUnlocks(newXp, prev)
      };
    });
  };

  const saveGameScore = (gameId: string, score: number) => {
    setProgress(prev => {
      const prevScore = prev.gameScores[gameId] || 0;
      if (score > prevScore) {
        const gainedXp = (score - prevScore) * 5;
        const newXp = prev.xp + gainedXp;
        return {
          ...prev,
          gameScores: { ...prev.gameScores, [gameId]: score },
          xp: newXp,
          unlockedBadges: checkBadgeUnlocks(newXp, prev)
        };
      }
      return prev;
    });
  };

  const incrementCreativeWorks = () => {
    setProgress(prev => {
      const creativeWorksCount = prev.creativeWorksCount + 1;
      const newXp = prev.xp + 60;
      triggerConfetti();
      return {
        ...prev,
        creativeWorksCount,
        xp: newXp,
        unlockedBadges: checkBadgeUnlocks(newXp, prev)
      };
    });
  };

  return (
    <AppContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        toggleTheme,
        currentSection,
        setCurrentSection,
        progress,
        addXp,
        markLessonCompleted,
        markQuizCompleted,
        markChapterCompleted,
        markEpicCompleted,
        toggleStarWord,
        markWordLearned,
        saveGameScore,
        incrementCreativeWorks,
        triggerConfetti
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
