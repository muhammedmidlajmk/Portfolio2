import React from 'react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/5 text-slate-500 dark:text-gray-500 text-sm relative bg-slate-100 dark:bg-[#090c12] transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Side Info */}
        <div className="flex items-center space-x-3 text-xs sm:text-sm">
          <span className="font-bold text-slate-900 dark:text-white tracking-tighter text-lg">
            {PERSONAL_INFO.initials}<span className="text-accent">.</span>
          </span>
          <span className="text-slate-300 dark:text-gray-600">|</span>
          <p className="text-slate-600 dark:text-gray-400">© {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React & Tailwind CSS.</p>
        </div>

        {/* Center Socials */}
        <div className="flex items-center space-x-4">
          <a
            href={PERSONAL_INFO.socials.github}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 rounded-lg transition"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href={PERSONAL_INFO.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="p-2 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 rounded-lg transition"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="p-2 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/5 rounded-lg transition"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>

        {/* Right Side Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="flex items-center space-x-2 px-3 py-1.5 bg-white dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-lg text-xs font-mono text-slate-700 dark:text-gray-300 hover:text-slate-900 dark:hover:text-white transition shadow-xs"
          aria-label="Scroll back to top"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
        </button>

      </div>
    </footer>
  );
};
