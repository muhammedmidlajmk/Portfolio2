import React, { useState } from 'react';
import { X, Download, Mail, BookOpen, Briefcase, Award, Code, CheckCircle, ExternalLink, MapPin, Phone, Building2, User, Printer, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, PERSONAL_DETAILS, EDUCATION_LIST, SKILL_CATEGORIES, PROJECTS_DATA, WORK_EXPERIENCE } from '../data/portfolioData';
import { downloadCvPdf } from '../utils/generateCvPdf';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [downloading, setDownloading] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloading(true);
    try {
      downloadCvPdf();
      setDownloaded(true);
      setTimeout(() => setDownloaded(false), 3000);
    } catch (err) {
      console.error("PDF generation error:", err);
      window.print();
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.94, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.94, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-blue-500/20 rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
          <div className="flex items-center space-x-2.5">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base tracking-tight">Curriculum Vitae — {PERSONAL_INFO.name}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition shadow-sm shadow-blue-500/20 cursor-pointer disabled:opacity-50"
              title="Download official PDF resume"
            >
              {downloaded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-blue-300" />
                  <span>Downloaded PDF!</span>
                </>
              ) : (
                <>
                  <Download className="w-3.5 h-3.5" />
                  <span>Download CV (.pdf)</span>
                </>
              )}
            </button>
            <button
              onClick={handlePrint}
              className="hidden sm:flex items-center space-x-1 px-3 py-1.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-gray-300 rounded-xl text-xs font-semibold transition border border-slate-200 dark:border-white/10 cursor-pointer"
              title="Open Print Dialog"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 rounded-xl transition cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-6 font-sans">
          
          {/* Resume Top Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex items-center gap-3.5">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name} 
                referrerPolicy="no-referrer"
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl object-cover object-top border-2 border-blue-500/30 shadow-md shrink-0"
              />
              <div>
                <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">{PERSONAL_INFO.name}</h1>
                <p className="text-blue-600 dark:text-blue-400 font-semibold text-xs sm:text-sm mt-0.5">{PERSONAL_INFO.title}</p>
                <p className="text-slate-500 dark:text-gray-400 text-xs mt-0.5">Enterprise Retail Databases • PL/SQL Optimization • .NET Core MVC</p>
              </div>
            </div>
            <div className="text-xs space-y-1 text-slate-700 dark:text-gray-300 bg-slate-50 dark:bg-white/5 p-2.5 rounded-xl border border-slate-200 dark:border-white/5 shrink-0">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{PERSONAL_DETAILS.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <a href={PERSONAL_INFO.socials.phone} className="hover:underline font-mono">{PERSONAL_DETAILS.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline font-mono">{PERSONAL_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2 font-mono">
              <BookOpen className="w-3.5 h-3.5" /> Professional Summary
            </h2>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
              Oracle SQL Developer, Database Engineer, and .NET Core MVC Developer with 2+ years of hands-on experience designing, developing, optimizing, and maintaining Oracle-based database systems for enterprise-level retail solutions. Skilled in PL/SQL development, performance tuning, and reporting, with a track record of building automated solutions for data-driven business processes and integrating backend logic with front-end portals and ERP systems.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2 font-mono">
              <Code className="w-3.5 h-3.5" /> Skills
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-slate-50 dark:bg-white/[0.02] p-3 rounded-xl border border-slate-200 dark:border-white/5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1.5">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1">
                    {cat.skills.map((s, idx) => (
                      <span key={idx} className="text-[10px] sm:text-[11px] px-2 py-0.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded text-slate-700 dark:text-gray-300 font-medium">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2.5 font-mono">
              <Briefcase className="w-3.5 h-3.5" /> Professional Experience
            </h2>
            <div className="space-y-3">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5 space-y-2.5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{exp.company}</h3>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono px-2 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded font-semibold self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <div className="space-y-2.5 pt-1.5">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="space-y-1">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-gray-200">{resp.area}</h4>
                        <ul className="space-y-1">
                          {resp.points.map((p, pIdx) => (
                            <li key={pIdx} className="text-xs text-slate-600 dark:text-gray-300 flex items-start gap-1.5">
                              <span className="text-blue-500 dark:text-blue-400 mt-0.5">•</span>
                              <span>{p}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2.5 font-mono">
              <Building2 className="w-3.5 h-3.5" /> Projects
            </h2>
            <div className="space-y-2.5">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{proj.title}</h3>
                    <div className="flex gap-1">
                      {proj.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 rounded font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mt-1.5">{proj.fullDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2.5 font-mono">
              <Award className="w-3.5 h-3.5" /> Education
            </h2>
            <div className="space-y-2.5">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">{edu.degree}</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">{edu.institution} {edu.board && `— ${edu.board}`}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 block">{edu.grade}</span>
                    <span className="text-[10px] font-mono text-slate-400 dark:text-gray-500">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 flex items-center gap-1.5 mb-2 font-mono">
              <User className="w-3.5 h-3.5" /> Personal Details
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-xs bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
              <div>
                <span className="text-slate-400 dark:text-gray-500 block text-[10px] uppercase font-mono">Date of Birth</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200">{PERSONAL_DETAILS.dob}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-gray-500 block text-[10px] uppercase font-mono">Nationality</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200">{PERSONAL_DETAILS.nationality}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-gray-500 block text-[10px] uppercase font-mono">Location</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200">{PERSONAL_DETAILS.location}</span>
              </div>
              <div>
                <span className="text-slate-400 dark:text-gray-500 block text-[10px] uppercase font-mono">Phone</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200 font-mono">{PERSONAL_DETAILS.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-3.5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex flex-col sm:flex-row justify-between items-center gap-2.5 text-xs text-slate-500 dark:text-gray-400">
          <span>{PERSONAL_INFO.name} — Oracle SQL Developer & Database Engineer</span>
          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="flex-1 sm:flex-initial flex items-center justify-center space-x-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg text-xs font-bold transition shadow-xs cursor-pointer disabled:opacity-50"
            >
              <Download className="w-3.5 h-3.5" />
              <span>{downloaded ? 'Downloaded PDF!' : 'Download PDF'}</span>
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white rounded-lg transition font-medium cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
    )}
  </AnimatePresence>
  );
};
