import React from 'react';
import { X, Download, Mail, BookOpen, Briefcase, Award, Code, CheckCircle, ExternalLink, MapPin, Phone, Building2, User } from 'lucide-react';
import { PERSONAL_INFO, PERSONAL_DETAILS, EDUCATION_LIST, SKILL_CATEGORIES, PROJECTS_DATA, WORK_EXPERIENCE } from '../data/portfolioData';

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
          <div className="border-b border-slate-200 dark:border-white/10 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
            <div className="flex items-center gap-4">
              <img 
                src={PERSONAL_INFO.profileImage} 
                alt={PERSONAL_INFO.name} 
                referrerPolicy="no-referrer"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover object-top border-2 border-indigo-500/30 shadow-md shrink-0"
              />
              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight uppercase">{PERSONAL_INFO.name}</h1>
                <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-sm sm:text-base mt-0.5">{PERSONAL_INFO.title}</p>
                <p className="text-slate-500 dark:text-gray-400 text-xs mt-0.5">Enterprise Retail Databases • PL/SQL Optimization • ERP Integration</p>
              </div>
            </div>
            <div className="text-xs space-y-1.5 text-slate-700 dark:text-gray-300 bg-slate-50 dark:bg-white/5 p-3 rounded-xl border border-slate-200 dark:border-white/5 shrink-0">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <span>{PERSONAL_DETAILS.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <a href={PERSONAL_INFO.socials.phone} className="hover:underline">{PERSONAL_DETAILS.phone}</a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:underline">{PERSONAL_INFO.email}</a>
              </p>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-2 font-mono">
              <BookOpen className="w-4 h-4" /> Professional Summary
            </h2>
            <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
              Oracle SQL Developer and Database Engineer with 2+ years of hands-on experience designing, developing, optimizing, and maintaining Oracle-based database systems for enterprise-level retail solutions. Skilled in PL/SQL development, performance tuning, and reporting, with a track record of building automated solutions for data-driven business processes and integrating backend logic with front-end portals and ERP systems.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3 font-mono">
              <Code className="w-4 h-4" /> Skills
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

          {/* Professional Experience */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3 font-mono">
              <Briefcase className="w-4 h-4" /> Professional Experience
            </h2>
            <div className="space-y-4">
              {WORK_EXPERIENCE.map((exp, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-white/[0.02] p-5 rounded-xl border border-slate-200 dark:border-white/5 space-y-3">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                    <div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-base">{exp.company}</h3>
                      <p className="text-xs text-indigo-600 dark:text-indigo-400 font-semibold">{exp.role}</p>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded font-semibold self-start sm:self-auto">
                      {exp.period}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2">
                    {exp.responsibilities.map((resp, rIdx) => (
                      <div key={rIdx} className="space-y-1.5">
                        <h4 className="text-xs font-bold text-slate-800 dark:text-gray-200">{resp.area}</h4>
                        <ul className="space-y-1">
                          {resp.points.map((p, pIdx) => (
                            <li key={pIdx} className="text-xs text-slate-600 dark:text-gray-300 flex items-start gap-2">
                              <span className="text-indigo-500 dark:text-indigo-400 mt-0.5">•</span>
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
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3 font-mono">
              <Building2 className="w-4 h-4" /> Projects
            </h2>
            <div className="space-y-3">
              {PROJECTS_DATA.map((proj) => (
                <div key={proj.id} className="bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm">{proj.title}</h3>
                    <div className="flex gap-1.5">
                      {proj.tags.slice(0, 3).map((t, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-1.5 py-0.5 bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 rounded font-semibold">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-gray-300 mt-2">{proj.fullDescription}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3 font-mono">
              <Award className="w-4 h-4" /> Education
            </h2>
            <div className="space-y-3">
              {EDUCATION_LIST.map((edu, idx) => (
                <div key={idx} className="bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5 flex justify-between items-start">
                  <div>
                    <h3 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{edu.degree}</h3>
                    <p className="text-xs text-slate-500 dark:text-gray-400 mt-0.5">{edu.institution} {edu.board && `— ${edu.board}`}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs font-mono font-bold text-indigo-600 dark:text-indigo-400 block">{edu.grade}</span>
                    <span className="text-[11px] font-mono text-slate-400 dark:text-gray-500">{edu.period}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Details */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 flex items-center gap-2 mb-3 font-mono">
              <User className="w-4 h-4" /> Personal Details
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
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
        <div className="p-4 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex justify-between items-center text-xs text-slate-500 dark:text-gray-400">
          <span>{PERSONAL_INFO.name} — Oracle SQL Developer & Database Engineer</span>
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
