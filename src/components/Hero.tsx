import React from 'react';
import { Linkedin, Github, Mail, ArrowRight, Code2, Database, Shield } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  return (
    <header id="home" className="max-w-6xl mx-auto px-6 pt-36 pb-24 md:pt-44 md:pb-32 flex flex-col md:flex-row items-center justify-between gap-12">
      {/* Text Info */}
      <div className="w-full md:w-2/3 space-y-6">
        
        {/* Social Icons Bar */}
        <div className="flex items-center space-x-5 opacity-90">
          <a 
            href={PERSONAL_INFO.socials.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-accent transition-all duration-300 text-gray-300"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href={PERSONAL_INFO.socials.github} 
            target="_blank" 
            rel="noreferrer"
            className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-accent transition-all duration-300 text-gray-300"
            aria-label="GitHub Profile"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="p-2.5 bg-white/5 border border-white/10 rounded-xl hover:border-indigo-500/50 hover:bg-indigo-500/10 hover:text-accent transition-all duration-300 text-gray-300"
            aria-label="Send Direct Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <span className="h-4 w-px bg-white/20 hidden sm:inline-block" />
          <span className="text-xs font-mono text-gray-400 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 hidden sm:inline-block">
            {PERSONAL_INFO.status}
          </span>
        </div>

        {/* Heading */}
        <div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-400 bg-clip-text text-transparent">
              Midlaj
            </span>
            <span className="text-accent">.</span>
          </h1>
          
          <h2 className="text-2xl sm:text-3xl font-semibold mt-3 text-gray-300 flex flex-wrap items-center gap-2">
            <span>Software Developer &</span>
            <span className="text-accent italic font-serif">BCA Scholar</span>
          </h2>
        </div>

        {/* Tagline */}
        <p className="text-gray-400 text-base sm:text-lg max-w-xl leading-relaxed">
          {PERSONAL_INFO.tagline}
        </p>

        {/* Action Badges / Core Tech Highlights */}
        <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg">
            <Code2 className="w-3.5 h-3.5" /> C# / ASP.NET
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg">
            <Database className="w-3.5 h-3.5" /> Oracle SQL
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 rounded-lg">
            <Shield className="w-3.5 h-3.5" /> DDoS Research
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <a 
            href="#contact" 
            className="px-8 py-4 bg-accent hover:bg-indigo-600 transition-all duration-300 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 flex items-center space-x-2 group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
          
          <a 
            href="#projects" 
            className="px-8 py-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 rounded-xl font-semibold text-gray-200"
          >
            View Work
          </a>

          <button
            onClick={onOpenResume}
            className="px-5 py-4 text-xs font-mono font-bold text-indigo-400 hover:text-white underline underline-offset-8 transition-colors"
          >
            [ Preview CV ]
          </button>
        </div>
      </div>

      {/* Profile Image with Ambient Aura */}
      <div className="relative group shrink-0 mt-8 md:mt-0">
        <div className="absolute inset-0 bg-indigo-600 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition duration-700" />
        
        <div className="w-60 h-60 sm:w-72 sm:h-72 rounded-full border-2 border-indigo-500/30 p-2 overflow-hidden relative bg-[#0e121a]/80 backdrop-blur-sm shadow-2xl">
          <img 
            src={PERSONAL_INFO.profileImage} 
            alt={PERSONAL_INFO.name} 
            className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-700 transform group-hover:scale-105"
          />
        </div>

        {/* Floating status badge */}
        <div className="absolute -bottom-2 -right-2 bg-[#0d1118] border border-white/10 px-3.5 py-1.5 rounded-full shadow-xl flex items-center space-x-2 text-xs">
          <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
          <span className="text-gray-300 font-medium">BCA Scholar</span>
        </div>
      </div>
    </header>
  );
};
