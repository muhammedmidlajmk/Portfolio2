import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, User, Sparkles, Sun, Moon, Briefcase, Code2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'experience', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'About & Skills', href: '#about', id: 'about' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 flex flex-col items-center px-3 sm:px-4 pointer-events-none">
      {/* Vercel-Style Floating Pill Navbar */}
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-auto flex items-center justify-between gap-1 sm:gap-3 px-2.5 sm:px-3.5 py-1.5 rounded-full border border-slate-200/80 dark:border-white/10 bg-white/85 dark:bg-[#060913]/90 backdrop-blur-xl shadow-lg shadow-black/5 dark:shadow-2xl dark:shadow-black/70 max-w-fit mx-auto transition-all"
      >
        {/* Brand / Monogram */}
        <a
          href="#home"
          className="flex items-center gap-1.5 pl-1.5 pr-2 py-1 text-xs font-bold tracking-wide text-slate-900 dark:text-white hover:opacity-85 transition-opacity"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-sm shadow-blue-400 animate-pulse" />
          <span className="font-mono text-[11px] sm:text-xs">
            MIDLAJ<span className="text-blue-500">.MK</span>
          </span>
        </a>

        {/* Subtle Divider */}
        <span className="h-3 w-px bg-slate-200 dark:bg-white/10 hidden md:block" />

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium transition-colors duration-150 ${
                  isActive
                    ? 'text-blue-600 dark:text-blue-400 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="vercelActiveNavPill"
                    className="absolute inset-0 bg-slate-100 dark:bg-blue-500/15 rounded-full border border-slate-200 dark:border-blue-500/30 -z-10"
                    transition={{ type: 'spring', stiffness: 420, damping: 32 }}
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </div>

        {/* Subtle Divider */}
        <span className="h-3 w-px bg-slate-200 dark:bg-white/10" />

        {/* Right Actions: Theme Toggle & CV Action */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-500 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-white/10 transition-colors cursor-pointer"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-3.5 h-3.5 text-amber-400" />
            ) : (
              <Moon className="w-3.5 h-3.5 text-blue-600" />
            )}
          </button>

          {/* Compact CV Button */}
          <button
            onClick={onOpenResume}
            className="flex items-center gap-1 px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-xs shadow-blue-500/25 transition-all cursor-pointer"
          >
            <FileText className="w-3 h-3" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-1.5 text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white rounded-full transition cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-3.5 h-3.5" /> : <Menu className="w-3.5 h-3.5" />}
          </button>
        </div>
      </motion.nav>

      {/* Compact Mobile Menu Card */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="pointer-events-auto mt-2 w-full max-w-xs bg-white/95 dark:bg-[#080d1a]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/10 rounded-2xl p-2.5 shadow-2xl shadow-black/40 md:hidden flex flex-col gap-1"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium transition ${
                    isActive
                      ? 'bg-blue-50 dark:bg-blue-500/15 text-blue-600 dark:text-blue-400 font-semibold border border-blue-200 dark:border-blue-500/30'
                      : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <span>{link.name}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />}
                </a>
              );
            })}

            <div className="pt-2 mt-1 border-t border-slate-100 dark:border-white/10 flex items-center justify-between px-2 text-[11px] text-slate-500 dark:text-slate-400">
              <span>Theme:</span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-1.5 px-2 py-1 rounded-lg bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-slate-200 font-medium"
              >
                {theme === 'dark' ? <Sun className="w-3 h-3 text-amber-400" /> : <Moon className="w-3 h-3 text-blue-600" />}
                <span className="capitalize">{theme}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
