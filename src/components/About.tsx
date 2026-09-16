import React, { useState } from 'react';
import { GraduationCap, Code2, Server, Database, Wrench, CheckCircle, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_DETAILS, EDUCATION_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-16 sm:py-20 border-t border-slate-200 dark:border-white/5">
      <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
        
        {/* Left Column: Story, Education & Personal Details */}
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <div>
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest block mb-1.5 font-mono">
              // PROFESSIONAL SUMMARY
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">About Me</h2>
          </div>

          <div className="text-slate-600 dark:text-gray-300 space-y-3.5 text-sm sm:text-base leading-relaxed">
            <p>
              I am an <strong className="text-slate-900 dark:text-white font-semibold">Oracle SQL Developer & Database Engineer</strong> with <span className="text-blue-600 dark:text-blue-400 font-semibold">2+ years of hands-on experience</span> designing, developing, optimizing, and maintaining Oracle-based database systems for enterprise-level retail solutions.
            </p>
            <p>
              Skilled in <strong className="text-slate-900 dark:text-white font-semibold">PL/SQL development</strong>, performance tuning, automated batch jobs, and reporting systems with a proven track record of building automated solutions for data-driven business processes and integrating backend logic with front-end portals and ERP systems.
            </p>
          </div>

          {/* Personal Details Card */}
          <motion.div 
            whileHover={{ y: -2 }}
            transition={{ duration: 0.2 }}
            className="p-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-xl space-y-2.5 shadow-xs"
          >
            <h4 className="font-bold text-slate-900 dark:text-white text-xs sm:text-sm flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
              <span>Personal Details</span>
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <div className="p-2 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Location</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200 text-xs">{PERSONAL_DETAILS.location}</span>
              </div>
              <div className="p-2 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Nationality</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200 text-xs">{PERSONAL_DETAILS.nationality}</span>
              </div>
              <div className="p-2 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Date of Birth</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200 text-xs">{PERSONAL_DETAILS.dob}</span>
              </div>
              <div className="p-2 bg-white dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Contact Phone</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200 font-mono text-xs">{PERSONAL_DETAILS.phone}</span>
              </div>
            </div>
          </motion.div>

          {/* Education Timeline Cards */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white text-base sm:text-lg flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Education Background</span>
              </h3>
            </div>

            {EDUCATION_LIST.map((edu, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                whileHover={{ y: -3 }}
                className="p-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-xl backdrop-blur-md shadow-xs relative overflow-hidden group hover:border-blue-500/40 transition duration-300 space-y-2"
              >
                <div className="flex flex-wrap items-center justify-between gap-1.5">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm">{edu.degree}</h4>
                  <span className="text-[11px] font-mono px-2 py-0.5 bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-500/20 rounded-md font-bold">
                    {edu.grade}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-gray-300 text-xs font-medium">{edu.institution}</p>
                {edu.board && <p className="text-slate-400 dark:text-gray-500 text-[10px] font-mono">{edu.board}</p>}

                <div className="pt-2 border-t border-slate-200 dark:border-white/5 space-y-1">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start text-xs text-slate-600 dark:text-gray-400 gap-1.5">
                      <CheckCircle className="w-3 h-3 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>

        {/* Right Column: Technical Stack & Tools */}
        <motion.div 
          id="skills" 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-6 space-y-6"
        >
          <div>
            <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest block mb-1.5 font-mono">
              // TECHNICAL COMPETENCIES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">Technical Skills</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-1 p-1 bg-slate-100/80 dark:bg-white/[0.03] rounded-xl border border-slate-200/80 dark:border-white/5">
            <button
              onClick={() => setActiveTab('all')}
              className={`relative px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeTab === 'all'
                  ? 'text-white dark:text-white'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeTab === 'all' && (
                <motion.span
                  layoutId="skillFilterTabIndicator"
                  className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">All Skills</span>
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative px-3 py-1 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                  activeTab === cat.id
                    ? 'text-white dark:text-white'
                    : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {activeTab === cat.id && (
                  <motion.span
                    layoutId="skillFilterTabIndicator"
                    className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Skill Groups with AnimatePresence */}
          <div className="space-y-3.5">
            <AnimatePresence mode="sync">
              {SKILL_CATEGORIES
                .filter((cat) => activeTab === 'all' || activeTab === cat.id)
                .map((category) => (
                  <motion.div 
                    key={category.id} 
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="p-4 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-xl space-y-2.5 shadow-xs"
                  >
                    <div className="flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-bold text-xs uppercase tracking-wider font-mono">
                      {category.id === 'database' && <Database className="w-3.5 h-3.5" />}
                      {category.id === 'programming' && <Code2 className="w-3.5 h-3.5" />}
                      {category.id === 'frameworks' && <Server className="w-3.5 h-3.5" />}
                      {category.id === 'tools' && <Wrench className="w-3.5 h-3.5" />}
                      <span>{category.title}</span>
                    </div>

                    <div className="flex flex-wrap gap-1.5">
                      {category.skills.map((skill, idx) => (
                        <motion.span
                          key={idx}
                          whileHover={{ scale: 1.04, y: -1 }}
                          whileTap={{ scale: 0.97 }}
                          className={`skill-tag px-3 py-1.5 rounded-lg text-xs font-medium tracking-wide flex items-center gap-1.5 cursor-default ${
                            skill.isPrimary 
                              ? 'text-slate-900 dark:text-white border-blue-500/40 bg-blue-50 dark:bg-blue-500/10 font-semibold shadow-xs' 
                              : 'text-slate-700 dark:text-gray-300'
                          }`}
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 dark:bg-blue-400" />
                          <span>{skill.name}</span>
                          {skill.level && (
                            <span className="text-[10px] text-slate-500 dark:text-gray-400 font-mono font-normal opacity-80">
                              ({skill.level})
                            </span>
                          )}
                        </motion.span>
                      ))}
                    </div>
                  </motion.div>
                ))}
            </AnimatePresence>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
