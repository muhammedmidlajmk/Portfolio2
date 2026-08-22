import React from 'react';
import { Linkedin, Github, Mail, ArrowRight, Code2, Database, MapPin, Phone, Cpu, ShieldCheck } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <header id="home" className="max-w-6xl mx-auto px-6 pt-36 pb-20 md:pt-44 md:pb-28 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Text Info */}
      <div className="w-full md:w-2/3 space-y-6">
        
        {/* Social & Contact Bar */}
        <div className="flex flex-wrap items-center gap-3 opacity-95">
          <a 
            href={PERSONAL_INFO.socials.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 text-slate-700 dark:text-gray-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a 
            href={PERSONAL_INFO.socials.github} 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 text-slate-700 dark:text-gray-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="p-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 text-slate-700 dark:text-gray-300"
            aria-label="Send Direct Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href={PERSONAL_INFO.socials.phone}
            className="p-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-300 text-slate-700 dark:text-gray-300 flex items-center gap-1.5 text-xs font-mono"
            aria-label="Call Direct"
          >
            <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span className="hidden sm:inline">{PERSONAL_INFO.phone}</span>
          </a>
          
          <span className="text-xs font-mono text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-3 py-2 rounded-xl border border-slate-200 dark:border-white/10 flex items-center gap-1.5">
            <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>{PERSONAL_INFO.location}</span>
          </span>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-600 dark:from-white dark:via-indigo-100 dark:to-indigo-300 bg-clip-text text-transparent">
              {PERSONAL_INFO.displayName}
            </span>
            <span className="text-indigo-600 dark:text-indigo-400">.</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-3 text-slate-700 dark:text-gray-300 flex flex-wrap items-center gap-2">
            <span>Oracle SQL Developer &</span>
            <span className="text-indigo-600 dark:text-indigo-400 italic font-serif">Database Engineer</span>
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action Badges / Core Tech Highlights */}
        <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 rounded-lg font-medium">
            <Database className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> Oracle SQL & PL/SQL
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 rounded-lg font-medium">
            <Cpu className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> ASP.NET Core / C#
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/20 rounded-lg font-medium">
            <ShieldCheck className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" /> Performance & RMAN
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-3">
          <a 
            href="#experience" 
            className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 flex items-center space-x-2 group text-sm"
          >
            <span>View Experience</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#projects" 
            className="px-7 py-3.5 border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all duration-300 rounded-xl font-semibold text-slate-800 dark:text-gray-200 text-sm"
          >
            Explore Projects
          </a>

          <button
            onClick={onOpenResume}
            className="px-4 py-3.5 text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 hover:text-slate-900 dark:hover:text-white underline underline-offset-8 transition-colors"
          >
            [ Download / View CV ]
          </button>
        </div>
      </div>

      {/* Profile Image with Ambient Aura */}
      <div className="relative group shrink-0 mt-8 md:mt-0">
        <div className="absolute inset-0 bg-indigo-600 rounded-full blur-3xl opacity-20 dark:opacity-25 group-hover:opacity-35 transition duration-700" />
        
        <div className="w-64 h-64 sm:w-72 sm:h-72 rounded-full border-2 border-indigo-500/30 p-2 overflow-hidden relative bg-white/90 dark:bg-[#0e121a]/90 backdrop-blur-sm shadow-2xl transition duration-500 group-hover:border-indigo-500/60">
          <img 
            src={PERSONAL_INFO.profileImage} 
            alt={PERSONAL_INFO.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top rounded-full transition duration-500 transform group-hover:scale-105"
          />
        </div>

        {/* Floating status badge */}
        <div className="absolute -bottom-2 -right-2 bg-white dark:bg-[#0d1118] border border-slate-200 dark:border-white/10 px-3.5 py-1.5 rounded-full shadow-xl flex items-center space-x-2 text-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-slate-800 dark:text-gray-300 font-semibold font-mono">2+ Yrs Experience</span>
        </div>
      </div>
    </header>
  );
};
