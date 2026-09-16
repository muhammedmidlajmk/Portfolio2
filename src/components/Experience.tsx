import React from 'react';
import { Briefcase, Building2, Calendar, MapPin, CheckCircle2, Database, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { WORK_EXPERIENCE } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-16 sm:py-20 border-t border-slate-200 dark:border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="mb-10"
      >
        <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest block mb-1.5 font-mono">
          // CAREER HISTORY & IMPACT
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Professional Experience
        </h2>
        <p className="text-slate-600 dark:text-gray-400 mt-1.5 text-sm sm:text-base max-w-2xl leading-relaxed">
          Over 2+ years of hands-on database engineering and software administration in high-throughput enterprise retail environments.
        </p>
      </motion.div>

      <div className="space-y-6">
        {WORK_EXPERIENCE.map((exp, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -3 }}
            className="p-5 sm:p-7 md:p-8 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 relative overflow-hidden group shadow-md transition-all duration-300 hover:border-blue-500/40"
          >
            {/* Ambient Background Gradient */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/15 transition duration-700 pointer-events-none" />

            {/* Header / Role Info */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-3 pb-5 border-b border-slate-200 dark:border-white/5 relative z-10">
              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-1 bg-blue-50 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 rounded-lg text-xs font-mono font-bold flex items-center gap-1.5">
                    <Briefcase className="w-3 h-3" />
                    {exp.role}
                  </span>
                  {exp.isCurrent && (
                    <span className="px-2 py-0.5 bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 rounded-md text-[11px] font-mono font-semibold flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-ping" />
                      Active Role
                    </span>
                  )}
                </div>

                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0" />
                  <span>{exp.company}</span>
                </h3>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-gray-400">
                <span className="flex items-center gap-1.5 bg-white dark:bg-white/5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
                  <Calendar className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span>{exp.period}</span>
                </span>
                <span className="flex items-center gap-1.5 bg-white dark:bg-white/5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-white/10">
                  <MapPin className="w-3 h-3 text-blue-600 dark:text-blue-400" />
                  <span>{exp.location}</span>
                </span>
              </div>
            </div>

            {/* Structured Responsibility Categories */}
            <div className="grid md:grid-cols-3 gap-4 pt-5 relative z-10">
              {exp.responsibilities.map((resp, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ y: -2, borderColor: 'rgba(59, 130, 246, 0.4)' }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 space-y-3 flex flex-col justify-between hover:border-blue-500/30 transition-colors shadow-xs"
                >
                  <div>
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider font-mono pb-2 border-b border-slate-100 dark:border-white/5">
                      {resp.area.includes('PL/SQL') && <Database className="w-3.5 h-3.5" />}
                      {resp.area.includes('Integration') && <Cpu className="w-3.5 h-3.5" />}
                      {resp.area.includes('Reporting') && <Sparkles className="w-3.5 h-3.5" />}
                      <span>{resp.area}</span>
                    </div>

                    <ul className="mt-2.5 space-y-2">
                      {resp.points.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300 leading-relaxed">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 text-[10px] font-mono text-slate-500 dark:text-gray-400 font-medium">
                    {resp.area.includes('PL/SQL') && '#StoredProcedures #Triggers #IntegrityChecks'}
                    {resp.area.includes('Integration') && '#OracleRMAN #AutoPO #JobAutomation'}
                    {resp.area.includes('Reporting') && '#MaterializedViews #ExcelPivot #SQLReports'}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
