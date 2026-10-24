export type Language = 'uz' | 'ru';
export type ThemeMode = 'light' | 'dark';

export interface TimelineEvent {
  year: number;
  yearDisplay: string;
  titleUz: string;
  titleRu: string;
  locationUz: string;
  locationRu: string;
  descUz: string;
  descRu: string;
  factUz: string;
  factRu: string;
  questionUz: string;
  questionRu: string;
  questionOptionsUz: string[];
  questionOptionsRu: string[];
  correctOptionIndex: number;
}

export interface NavoiyChapter {
  id: string;
  number: string;
  titleUz: string;
  titleRu: string;
  readingTimeUz: string;
  readingTimeRu: string;
  shortDescUz: string;
  shortDescRu: string;
  contentUz: string[];
  contentRu: string[];
  terms: {
    termUz: string;
    termRu: string;
    meaningUz: string;
    meaningRu: string;
  }[];
  factUz: string;
  factRu: string;
  ponderQuestionUz: string;
  ponderQuestionRu: string;
  tasks: {
    level: 'A' | 'B' | 'C';
    levelNameUz: string;
    levelNameRu: string;
    taskUz: string;
    taskRu: string;
    hintUz: string;
    hintRu: string;
  }[];
  quiz: {
    questionUz: string;
    questionRu: string;
    optionsUz: string[];
    optionsRu: string[];
    correctIndex: number;
    explanationUz: string;
    explanationRu: string;
  };
}

export interface HistoricalPlace {
  id: string;
  nameUz: string;
  nameRu: string;
  coordinates: { x: number; y: number }; // percentage on stylized Silk Road map
  roleUz: string;
  roleRu: string;
  descUz: string;
  descRu: string;
  monumentsUz: string[];
  monumentsRu: string[];
  significanceUz: string;
  significanceRu: string;
}

export interface XamsaEpic {
  id: string;
  order: number;
  titleUz: string;
  titleRu: string;
  meaningUz: string;
  meaningRu: string;
  writtenYear: string;
  symbolUz: string;
  symbolRu: string;
  overviewUz: string;
  overviewRu: string;
  mainIdeaUz: string;
  mainIdeaRu: string;
  characters: {
    nameUz: string;
    nameRu: string;
    roleUz: string;
    roleRu: string;
    traitsUz: string;
    traitsRu: string;
  }[];
  modernConnectionUz: string;
  modernConnectionRu: string;
  keyWords: {
    wordUz: string;
    wordRu: string;
    definitionUz: string;
    definitionRu: string;
  }[];
  sequenceTask: {
    instructionUz: string;
    instructionRu: string;
    items: { id: string; textUz: string; textRu: string; correctOrder: number }[];
  };
  quiz: {
    questionUz: string;
    questionRu: string;
    optionsUz: string[];
    optionsRu: string[];
    correctIndex: number;
    explanationUz: string;
    explanationRu: string;
  };
}

export interface GlossaryTerm {
  id: string;
  wordUz: string;
  wordRu: string;
  category: 'adabiyot' | 'axloq' | 'davlat' | 'tasavvuf' | 'hayot';
  categoryUz: string;
  categoryRu: string;
  definitionUz: string;
  definitionRu: string;
  exampleUz: string;
  exampleRu: string;
  sourceUz: string;
  sourceRu: string;
  phoneticUz: string;
}

export interface CreativeEntry {
  id: string;
  topicId: string;
  titleUz: string;
  titleRu: string;
  content: string;
  date: string;
  wordsUsed: string[];
}

export interface UserProgress {
  xp: number;
  completedLessons: string[];
  completedQuizzes: string[];
  completedChapters: string[];
  completedEpics: string[];
  learnedWords: string[];
  starredWords: string[];
  unlockedBadges: string[];
  creativeWorksCount: number;
  gameScores: Record<string, number>;
}

export interface BadgeItem {
  id: string;
  titleUz: string;
  titleRu: string;
  descUz: string;
  descRu: string;
  iconName: string;
  requiredXp: number;
}
