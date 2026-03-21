import { lazy, Suspense } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RecruiterBriefSection from './components/RecruiterBriefSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import { about, contact, hero, labs, navItems, projects, recruiterBriefs, skills } from './data/portfolioData';
import { useTheme } from './hooks/useTheme';
import { useRevealObserver } from './hooks/useRevealObserver';
import ProjectsSectionBase from './components/ProjectsSection';
import LabsSectionBase from './components/LabsSection';

const ProjectsSection = lazy(() => import('./components/ProjectsSection'));
const LabsSection = lazy(() => import('./components/LabsSection'));

function App() {
  const { theme, toggleTheme } = useTheme();
  const isTestEnvironment = process.env.NODE_ENV === 'test';
  const ProjectsComponent = isTestEnvironment ? ProjectsSectionBase : ProjectsSection;
  const LabsComponent = isTestEnvironment ? LabsSectionBase : LabsSection;

  useRevealObserver();

  return (
    <div className="app-shell">
      <ScrollProgress />
      <Navbar navItems={navItems} themeControl={<ThemeToggle theme={theme} onToggle={toggleTheme} />} />
      <main className="container">
        <HeroSection hero={hero} />
        <RecruiterBriefSection briefs={recruiterBriefs} candidateName={hero.name} />
        <AboutSection about={about} />
        <SkillsSection skills={skills} />
        {isTestEnvironment ? (
          <>
            <ProjectsComponent projects={projects} />
            <LabsComponent labs={labs} />
          </>
        ) : (
          <Suspense fallback={<section className="panel section">Loading projects...</section>}>
            <ProjectsComponent projects={projects} />
            <LabsComponent labs={labs} />
          </Suspense>
        )}
        <ContactSection contact={contact} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
