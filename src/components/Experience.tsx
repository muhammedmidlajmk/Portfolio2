import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Database, ShieldAlert, Cpu, Sparkles } from 'lucide-react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-white/5">
      <div className="mb-12">
        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
          // CAREER HISTORY & IMPACT
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-2 text-base max-w-2xl leading-relaxed">
          Over 2+ years of hands-on database engineering and software administration in high-throughput enterprise retail environments.
        </p>
      </div>

      <div className="space-y-8">
        {WORK_EXPERIENCE.map((exp, index) => (
          <div 
            key={index}
            className="p-6 sm:p-8 md:p-10 rounded-3xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 relative overflow-hidden group shadow-lg transition-all duration-300 hover:border-indigo-500/40"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-full blur-3xl group-hover:bg-indigo-500/15 transition duration-700 pointer-events-none" />

            {/* Header / Role Info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/5 relative z-10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-2">
                  <span className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-500/30 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5">
                    <Briefcase className="w-3.5 h-3.5" />
                    {exp.role}
                  </span>
                  {exp.isCurrent && (
                    <span className="px-2.5 py-1 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 rounded-md text-xs font-mono font-semibold flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                      Active Role
                    </span>
                  )}
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400 shrink-0" />
                  <span>{exp.company}</span>
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm font-mono text-slate-600 dark:text-gray-400">
                <span className="flex items-center gap-1.5 bg-white dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
                  <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white dark:bg-white/5 px-3 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Structured Responsibility Categories */}
            <div className="grid md:grid-cols-3 gap-6 pt-6 relative z-10">
              {exp.responsibilities.map((resp, idx) => (
                <div 
                  key={idx}
                  className="p-5 rounded-2xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3.5 flex flex-col justify-between hover:border-indigo-500/30 transition-colors shadow-xs"
                >
                  <div>
                    <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider font-mono pb-2 border-b border-slate-100 dark:border-white/5">
                      {resp.area.includes('PL/SQL') && <Database className="w-4 h-4" />}
                      {resp.area.includes('Integration') && <Cpu className="w-4 h-4" />}
                      {resp.area.includes('Reporting') && <Sparkles className="w-4 h-4" />}
                      <span>{resp.area}</span>
                    </div>

                    <ul className="mt-3 space-y-2.5">
                      {resp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-[11px] font-mono text-slate-500 dark:text-gray-400 font-medium">
                    {resp.area.includes('PL/SQL') && '#StoredProcedures #Triggers #IntegrityChecks'}
                    {resp.area.includes('Integration') && '#OracleRMAN #AutoPO #JobAutomation'}
                    {resp.area.includes('Reporting') && '#MaterializedViews #ExcelPivot #SQLReports'}
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
