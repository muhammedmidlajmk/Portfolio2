import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Experience } from './components/Experience';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ResumeModal } from './components/ResumeModal';
import { ProjectModal } from './components/ProjectModal';
import { ScrollProgressBar } from './components/ScrollProgressBar';
import { BackToTop } from './components/BackToTop';
import { ConstellationBackground } from './components/ConstellationBackground';
import { Project } from './types';
import { ThemeProvider } from './context/ThemeContext';
import { AnimationProvider } from './context/AnimationContext';

function PortfolioApp() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#050811] text-slate-900 dark:text-white flex flex-col font-sans relative overflow-x-hidden transition-colors duration-300">
      {/* Interactive Constellation Mesh Background (Black & Blue) */}
      <ConstellationBackground />

      {/* Dynamic Scroll Progress Bar */}
      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar onOpenResume={() => setResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10">
        <Hero onOpenResume={() => setResumeOpen(true)} />
        <Experience />
        <About />
        <Projects onSelectProject={(project) => setSelectedProject(project)} />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Animated Back-To-Top Trigger */}
      <BackToTop />

      {/* Modals */}
      <ResumeModal 
        isOpen={resumeOpen} 
        onClose={() => setResumeOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AnimationProvider>
        <PortfolioApp />
      </AnimationProvider>
    </ThemeProvider>
  );
}
