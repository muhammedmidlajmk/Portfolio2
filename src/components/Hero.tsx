import React, { useState } from 'react';
import { Linkedin, Github, Mail, ArrowRight, Database, MapPin, Phone, Cpu, Code2, Download, Check } from 'lucide-react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { downloadCvPdf } from '../utils/generateCvPdf';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [downloaded, setDownloaded] = useState(false);

  const handleDirectDownload = () => {
    try {
      downloadCvPdf();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch {
      onOpenResume();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <header id="home" className="relative max-w-6xl mx-auto px-6 pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col md:flex-row items-center justify-between gap-10 overflow-visible">
      {/* Subtle Background Glow Orbs */}
      <div aria-hidden="true" className="absolute top-16 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/15 rounded-full blur-3xl pointer-events-none -z-10 animate-pulse" />
      <div aria-hidden="true" className="absolute bottom-10 right-10 w-80 h-80 bg-sky-500/10 dark:bg-sky-500/12 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Text Info with Staggered Entrance */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full md:w-2/3 space-y-5"
      >
        {/* Social & Contact Bar */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2 opacity-95">
          <motion.a 
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_INFO.socials.linkedin} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-slate-700 dark:text-gray-300 shadow-xs"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-3.5 h-3.5" />
          </motion.a>

          <motion.a 
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={PERSONAL_INFO.socials.github} 
            target="_blank" 
            rel="noreferrer"
            className="p-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-slate-700 dark:text-gray-300 shadow-xs"
            aria-label="GitHub Profile"
          >
            <Github className="w-3.5 h-3.5" />
          </motion.a>

          <motion.a 
            whileHover={{ y: -2, scale: 1.06 }}
            whileTap={{ scale: 0.95 }}
            href={`mailto:${PERSONAL_INFO.email}`} 
            className="p-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-slate-700 dark:text-gray-300 shadow-xs"
            aria-label="Send Direct Email"
          >
            <Mail className="w-3.5 h-3.5" />
          </motion.a>

          <motion.a 
            whileHover={{ y: -2, scale: 1.03 }}
            whileTap={{ scale: 0.96 }}
            href={PERSONAL_INFO.socials.phone}
            className="p-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-blue-500/50 hover:bg-blue-500/10 hover:text-blue-600 dark:hover:text-blue-400 transition-colors text-slate-700 dark:text-gray-300 flex items-center gap-1.5 text-xs font-mono shadow-xs"
            aria-label="Call Direct"
          >
            <Phone className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span className="hidden sm:inline text-xs">{PERSONAL_INFO.phone}</span>
          </motion.a>
          
          <span className="text-xs font-mono text-slate-600 dark:text-gray-400 bg-slate-100 dark:bg-white/5 px-2.5 py-1.5 rounded-xl border border-slate-200 dark:border-white/10 flex items-center gap-1.5 shadow-xs">
            <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
            <span>{PERSONAL_INFO.location}</span>
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-xs font-mono font-semibold">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
            <span>Available for New Roles & Projects</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight">
            Hi, I'm <br className="md:hidden" />
            <span className="bg-gradient-to-r from-slate-900 via-blue-800 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
              {PERSONAL_INFO.displayName}
            </span>
            <span className="text-blue-500 dark:text-blue-400">.</span>
          </h1>
          
          <h2 className="text-lg sm:text-2xl md:text-2xl font-semibold mt-2.5 text-slate-700 dark:text-gray-300 flex flex-wrap items-center gap-2">
            <span>Oracle SQL Developer | Database Engineer |</span>
            <span className="text-blue-600 dark:text-blue-400 italic font-serif">.NET Core MVC Developer</span>
          </h2>
        </motion.div>

        {/* Tagline */}
        <motion.p variants={itemVariants} className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl leading-relaxed">
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* Action Badges / Core Tech Highlights */}
        <motion.div variants={itemVariants} className="flex flex-wrap gap-2 pt-1 text-xs font-mono">
          <motion.span 
            whileHover={{ scale: 1.04, y: -1 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 rounded-lg font-medium shadow-xs cursor-default"
          >
            <Database className="w-3 h-3 text-blue-600 dark:text-blue-400" /> Oracle SQL & PL/SQL
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.04, y: -1 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 rounded-lg font-medium shadow-xs cursor-default"
          >
            <Code2 className="w-3 h-3 text-blue-600 dark:text-blue-400" /> ASP.NET Core MVC / C#
          </motion.span>
          <motion.span 
            whileHover={{ scale: 1.04, y: -1 }}
            className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-800 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 rounded-lg font-medium shadow-xs cursor-default"
          >
            <Cpu className="w-3 h-3 text-blue-600 dark:text-blue-400" /> REST API & Performance Tuning
          </motion.span>
        </motion.div>

        {/* Action Buttons */}
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-2.5 pt-2">
          <motion.a 
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            href="#experience" 
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl font-bold text-white shadow-lg shadow-blue-500/25 flex items-center space-x-2 group text-xs sm:text-sm cursor-pointer"
          >
            <span>View Experience</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          
          <motion.button
            whileHover={{ scale: 1.03, y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleDirectDownload}
            className="px-4 py-2.5 border border-blue-500/40 bg-blue-50/50 dark:bg-blue-500/10 hover:bg-blue-100 dark:hover:bg-blue-500/20 text-blue-700 dark:text-blue-300 transition-colors rounded-xl font-semibold text-xs sm:text-sm flex items-center gap-2 shadow-sm cursor-pointer"
          >
            {downloaded ? (
              <>
                <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Downloaded CV!</span>
              </>
            ) : (
              <>
                <Download className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>Download CV (.pdf)</span>
              </>
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onOpenResume}
            className="px-3 py-2.5 text-xs font-mono font-bold text-slate-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-8 transition-colors cursor-pointer"
          >
            [ View Online CV ]
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Profile Image with Gentle Float & Ambient Blue Aura */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="relative group shrink-0 mt-6 md:mt-0"
      >
        <motion.div 
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.25, 0.4, 0.25],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute inset-0 bg-blue-500 rounded-full blur-3xl pointer-events-none" 
        />
        
        <motion.div 
          animate={{
            y: [0, -6, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-56 h-56 sm:w-64 sm:h-64 rounded-full border-2 border-blue-500/40 p-2 overflow-hidden relative bg-white/90 dark:bg-[#060913]/90 backdrop-blur-sm shadow-2xl transition duration-500 group-hover:border-blue-500/70"
        >
          <img 
            src={PERSONAL_INFO.profileImage} 
            alt={PERSONAL_INFO.name} 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-top rounded-full transition duration-500 transform group-hover:scale-105"
          />
        </motion.div>

        {/* Floating status badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="absolute -bottom-1 -right-1 bg-white/95 dark:bg-[#060913]/95 backdrop-blur-md border border-slate-200 dark:border-blue-500/30 px-3 py-1.5 rounded-full shadow-xl flex items-center space-x-2 text-xs cursor-default"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
          <span className="text-slate-800 dark:text-blue-300 font-semibold font-mono text-[11px]">2+ Yrs Experience</span>
        </motion.div>
      </motion.div>
    </header>
  );
};
