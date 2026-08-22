import React, { useState } from 'react';
import { GraduationCap, Code2, Server, Database, Wrench, Terminal, CheckCircle, Award, Calendar, MapPin, Globe, User } from 'lucide-react';
import { PERSONAL_INFO, PERSONAL_DETAILS, EDUCATION_LIST, SKILL_CATEGORIES } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-white/5">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        
        {/* Left Column: Story, Education & Personal Details */}
        <div className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
              // PROFESSIONAL SUMMARY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">About Me</h2>
          </div>

          <div className="text-slate-600 dark:text-gray-300 space-y-4 text-base leading-relaxed">
            <p>
              I am an <strong className="text-slate-900 dark:text-white font-semibold">Oracle SQL Developer & Database Engineer</strong> with <span className="text-indigo-600 dark:text-indigo-400 font-semibold">2+ years of hands-on experience</span> designing, developing, optimizing, and maintaining Oracle-based database systems for enterprise-level retail solutions.
            </p>
            <p>
              Skilled in <strong className="text-slate-900 dark:text-white font-semibold">PL/SQL development</strong>, performance tuning, automated batch jobs, and reporting systems with a proven track record of building automated solutions for data-driven business processes and integrating backend logic with front-end portals and ERP systems.
            </p>
          </div>

          {/* Personal Details Card */}
          <div className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl space-y-3">
            <h4 className="font-bold text-slate-900 dark:text-white text-sm flex items-center gap-2">
              <User className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Personal Details</span>
            </h4>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div className="p-2.5 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Location</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200">{PERSONAL_DETAILS.location}</span>
              </div>
              <div className="p-2.5 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Nationality</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200">{PERSONAL_DETAILS.nationality}</span>
              </div>
              <div className="p-2.5 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Date of Birth</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200">{PERSONAL_DETAILS.dob}</span>
              </div>
              <div className="p-2.5 bg-white dark:bg-white/5 rounded-xl border border-slate-200 dark:border-white/5">
                <span className="text-slate-500 dark:text-gray-400 block text-[10px] uppercase font-mono">Contact Phone</span>
                <span className="font-semibold text-slate-800 dark:text-gray-200 font-mono">{PERSONAL_DETAILS.phone}</span>
              </div>
            </div>
          </div>

          {/* Education Timeline Cards */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-slate-900 dark:text-white text-lg flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                <span>Education Background</span>
              </h3>
            </div>

            {EDUCATION_LIST.map((edu, idx) => (
              <div 
                key={idx}
                className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl backdrop-blur-md shadow-sm relative overflow-hidden group hover:border-indigo-500/40 transition duration-300 space-y-2.5"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">{edu.degree}</h4>
                  <span className="text-xs font-mono px-2.5 py-0.5 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 rounded-md font-bold">
                    {edu.grade}
                  </span>
                </div>
                
                <p className="text-slate-600 dark:text-gray-300 text-xs font-medium">{edu.institution}</p>
                {edu.board && <p className="text-slate-400 dark:text-gray-500 text-[11px] font-mono">{edu.board}</p>}

                <div className="pt-2 border-t border-slate-200 dark:border-white/5 space-y-1">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start text-xs text-slate-600 dark:text-gray-400 gap-2">
                      <CheckCircle className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Right Column: Technical Stack & Tools */}
        <div id="skills" className="lg:col-span-6 space-y-8">
          <div>
            <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
              // TECHNICAL COMPETENCIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Technical Skills</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-1">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                  activeTab === cat.id
                    ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                    : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skill Groups */}
          <div className="space-y-4">
            {SKILL_CATEGORIES
              .filter((cat) => activeTab === 'all' || activeTab === cat.id)
              .map((category) => (
                <div key={category.id} className="p-5 bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-2xl space-y-3 shadow-xs">
                  <div className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold text-xs uppercase tracking-wider font-mono">
                    {category.id === 'database' && <Database className="w-4 h-4" />}
                    {category.id === 'programming' && <Code2 className="w-4 h-4" />}
                    {category.id === 'frameworks' && <Server className="w-4 h-4" />}
                    {category.id === 'tools' && <Wrench className="w-4 h-4" />}
                    <span>{category.title}</span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`skill-tag px-3.5 py-2 rounded-xl text-xs font-medium tracking-wide flex items-center gap-2 ${
                          skill.isPrimary 
                            ? 'text-slate-900 dark:text-white border-indigo-500/40 bg-indigo-50 dark:bg-indigo-500/10 font-semibold' 
                            : 'text-slate-700 dark:text-gray-300'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 dark:bg-indigo-400" />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-slate-500 dark:text-gray-400 font-mono font-normal opacity-80">
                            ({skill.level})
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Terminal Snippet Box */}
          <div className="p-4 bg-slate-900 dark:bg-black/60 rounded-xl border border-slate-800 dark:border-white/10 font-mono text-xs space-y-2 text-slate-200 dark:text-gray-300 shadow-lg">
            <div className="flex items-center space-x-2 text-slate-400 dark:text-gray-500 pb-1 border-b border-slate-800 dark:border-white/5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>midlaj@oracle-db-server:~$</span>
            </div>
            <div className="text-emerald-400">
              SQL&gt; EXECUTE DBMS_STATS.GATHER_TABLE_STATS('RETAIL_ERP', 'TRANSACTION_LOGS');
            </div>
            <div className="text-slate-400 dark:text-gray-400 text-[11px]">
              PL/SQL procedure successfully completed. Execution Plan Optimized.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
