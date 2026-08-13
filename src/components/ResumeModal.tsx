import React from 'react';
import { X, Download, Mail, BookOpen, Briefcase, Award, Code, CheckCircle, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES, PROJECTS_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-[#0f141d] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-800 dark:text-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 rounded-full bg-indigo-600 dark:bg-indigo-500 animate-pulse" />
            <h3 className="font-bold text-slate-900 dark:text-white text-lg tracking-tight">Curriculum Vitae — {PERSONAL_INFO.name}</h3>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg text-xs font-semibold transition shadow-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-8 font-sans">
          
          {/* Resume Top Header */}
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">{PERSONAL_INFO.name}</h1>
              <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base mt-1">{PERSONAL_INFO.title}</p>
              <p className="text-slate-500 dark:text-gray-400 text-xs mt-1">Specializing in ASP.NET, Oracle SQL, and Cybersecurity Research</p>
            </div>
            <div className="text-xs space-y-1.5 text-slate-700 dark:text-gray-300 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5">
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </p>
              <p className="flex items-center gap-2">
                <ExternalLink className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>India • Remote Available</span>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-2">
              <BookOpen className="w-4 h-4" /> Professional Profile
            </h2>
            <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
              Dedicated Software Developer with strong foundation in Clean Architecture, relational database design, and RESTful API development. Passionate about high-efficiency backend systems using ASP.NET Core and Oracle SQL, complemented by active academic research in network DDoS detection at the Fog layer.
            </p>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3">
              <Award className="w-4 h-4" /> Education
            </h2>
            <div className="bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5 flex justify-between items-start">
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white text-base">{EDUCATION_DATA.degree}</h3>
                <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">{EDUCATION_DATA.institution}</p>
                <ul className="mt-2 space-y-1 text-xs text-slate-700 dark:text-gray-300 list-disc list-inside">
                  {EDUCATION_DATA.highlights.map((h, idx) => (
                    <li key={idx}>{h}</li>
                  ))}
                </ul>
              </div>
              <span className="text-xs font-mono px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 rounded-md font-semibold">
                {EDUCATION_DATA.period}
              </span>
            </div>
          </div>

          {/* Technical Skills Grid */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3">
              <Code className="w-4 h-4" /> Key Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {SKILL_CATEGORIES.map((cat) => (
                <div key={cat.id} className="bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-2">{cat.title}</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {cat.skills.map((s, idx) => (
                      <span key={idx} className="text-[11px] px-2 py-0.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded text-slate-700 dark:text-gray-300 font-medium">
                        {s.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Key Projects */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3">
              <Briefcase className="w-4 h-4" /> Key Projects & Research
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</h3>
                    <div className="flex gap-1.5">
                      {proj.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mt-2">{proj.fullDescription}</p>
                  {proj.architectureDetails && (
                    <div className="mt-2.5 pt-2 border-t border-slate-200 dark:border-white/5 space-y-1">
                      {proj.architectureDetails.map((item, idx) => (
                        <div key={idx} className="flex items-center text-[11px] text-slate-500 dark:text-gray-400 gap-1.5">
                          <CheckCircle className="w-3 h-3 text-indigo-600 dark:text-indigo-400 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Footer actions */}
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex justify-between items-center text-xs text-slate-500 dark:text-gray-400">
          <span>Muhammed Midlaj MK — Portfolio CV</span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-200 dark:bg-white/10 hover:bg-slate-300 dark:hover:bg-white/20 text-slate-800 dark:text-white rounded-lg transition font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
