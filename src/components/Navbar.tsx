import React, { useState, useEffect } from 'react';
import { Menu, X, FileText, Send, Code2, User, Sparkles, Sun, Moon, Briefcase } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'experience', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 150;

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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home', icon: Sparkles },
    { name: 'Experience', href: '#experience', id: 'experience', icon: Briefcase },
    { name: 'About & Skills', href: '#about', id: 'about', icon: User },
    { name: 'Projects', href: '#projects', id: 'projects', icon: FileText },
    { name: 'Contact', href: '#contact', id: 'contact', icon: Send },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#0b0e14]/90 dark:bg-[#0b0e14]/90 light:bg-white/90 backdrop-blur-md border-b border-white/10 dark:border-white/10 light:border-slate-200/80 shadow-lg dark:shadow-black/40 light:shadow-slate-200/50 py-3' 
          : 'bg-transparent py-5 border-b border-white/5 dark:border-white/5 light:border-slate-200/40'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#home" 
          className="group flex items-center space-x-2 text-2xl font-black tracking-tighter text-slate-900 dark:text-white"
        >
          <span className="bg-gradient-to-r from-slate-900 via-indigo-900 to-indigo-600 dark:from-white dark:via-gray-200 dark:to-indigo-200 bg-clip-text text-transparent">
            {PERSONAL_INFO.initials}
          </span>
          <span className="text-indigo-600 dark:text-indigo-400 group-hover:scale-125 transition-transform duration-300 inline-block">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600 dark:text-gray-400">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? 'text-indigo-600 dark:text-white font-semibold' : 'hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-indigo-500 rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </div>

        {/* Theme Switcher, Resume Button & Mobile Toggle */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-xl border transition-all duration-300 flex items-center justify-center bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-gray-200 hover:border-indigo-500/50 hover:text-indigo-600 dark:hover:text-indigo-400 shadow-sm"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-amber-400 rotate-0 transition-transform duration-500 hover:rotate-45" />
            ) : (
              <Moon className="w-4 h-4 text-indigo-600 -rotate-12 transition-transform duration-500 hover:rotate-0" />
            )}
          </button>

          <button
            onClick={onOpenResume}
            className="hidden md:flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-semibold hover:bg-slate-200 dark:hover:bg-white/10 hover:border-indigo-500/40 text-slate-800 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-white transition-all shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
            <span>CV</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white rounded-lg border border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 transition"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white dark:bg-[#0e121a] border-b border-slate-200 dark:border-white/10 px-6 py-6 space-y-4 animate-fadeIn shadow-xl">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center space-x-3 p-2.5 rounded-xl text-sm font-medium transition ${
                    activeSection === link.id
                      ? 'bg-indigo-50 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 font-semibold'
                      : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/5'
                  }`}
                >
                  <Icon className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
                  <span>{link.name}</span>
                </a>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-white/10 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-gray-400 font-medium px-1">
              <span>Theme Preference</span>
              <button
                onClick={toggleTheme}
                className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/10 rounded-lg text-slate-800 dark:text-white font-semibold"
              >
                {theme === 'dark' ? <Sun className="w-3.5 h-3.5 text-amber-400" /> : <Moon className="w-3.5 h-3.5 text-indigo-600" />}
                <span className="capitalize">{theme} Mode</span>
              </button>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center space-x-2 py-3 bg-indigo-600 text-white rounded-xl text-xs font-bold transition shadow-lg shadow-indigo-500/20"
            >
              <FileText className="w-4 h-4" />
              <span>VIEW FULL CV</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
