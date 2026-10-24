import React from 'react';
import { AppProvider, useApp } from './context/AppContext';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomeView } from './components/home/HomeView';
import { NavoiyMuseumView } from './components/navoiy/NavoiyMuseumView';
import { XamsaView } from './components/xamsa/XamsaView';
import { LessonsView } from './components/lessons/LessonsView';
import { GamesLabView } from './components/games/GamesLabView';
import { ExercisesView } from './components/exercises/ExercisesView';
import { GlossaryView } from './components/glossary/GlossaryView';
import { CreativeWorkshopView } from './components/workshop/CreativeWorkshopView';
import { KnowledgeMapView } from './components/progress/KnowledgeMapView';
import { TeacherDeskView } from './components/teacher/TeacherDeskView';

const MainContent: React.FC = () => {
  const { currentSection } = useApp();

  return (
    <main className="flex-1 min-h-[calc(100vh-4rem)]">
      {currentSection === 'home' && <HomeView />}
      {currentSection === 'navoiy' && <NavoiyMuseumView />}
      {currentSection === 'xamsa' && <XamsaView />}
      {currentSection === 'lessons' && <LessonsView />}
      {currentSection === 'games' && <GamesLabView />}
      {currentSection === 'exercises' && <ExercisesView />}
      {currentSection === 'glossary' && <GlossaryView />}
      {currentSection === 'workshop' && <CreativeWorkshopView />}
      {currentSection === 'map' && <KnowledgeMapView />}
      {currentSection === 'teacher' && <TeacherDeskView />}
    </main>
  );
};

export default function App() {
  return (
    <AppProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF8F5] dark:bg-[#0F141C] text-stone-900 dark:text-stone-100 transition-colors duration-250">
        <Navbar />
        <MainContent />
        <Footer />
      </div>
    </AppProvider>
  );
}
