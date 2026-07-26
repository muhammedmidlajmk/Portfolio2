import React, { useState } from 'react';
import { BookOpen, GraduationCap, Code2, Server, Database, ShieldCheck, Terminal, CheckCircle } from 'lucide-react';
import { PERSONAL_INFO, EDUCATION_DATA, SKILL_CATEGORIES } from '../data/portfolioData';

export const About: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="grid md:grid-cols-2 gap-16 lg:gap-24">
        
        {/* Left Column: Story & Background */}
        <div className="space-y-8">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
              // DISCOVERY
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">About Me</h2>
          </div>

          <div className="text-gray-300 space-y-5 text-base sm:text-lg leading-relaxed">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-300">
                {paragraph.includes("ASP.NET") ? (
                  <>
                    I'm <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, specializing in <span className="text-indigo-400 font-semibold">ASP.NET</span>, <span className="text-indigo-400 font-semibold">C#</span>, and <span className="text-indigo-400 font-semibold">Oracle SQL</span>. My journey in tech is driven by the challenge of turning complex logic into seamless user experiences.
                  </>
                ) : paragraph.includes("backend efficiency") ? (
                  <>
                    I focus heavily on <span className="text-white font-medium">backend efficiency</span>—designing database queries for complex SKUs, architecting scalable APIs, and exploring network security through active research in <span className="text-white font-medium">Zero-Day DDoS Detection</span> at the fog layer.
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>

          {/* Education Card */}
          <div className="p-6 bg-white/[0.02] border border-white/10 rounded-2xl backdrop-blur-md shadow-lg relative overflow-hidden group hover:border-indigo-500/40 transition duration-300">
            <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-500/10 rounded-full blur-2xl group-hover:bg-indigo-500/20 transition duration-500" />
            <div className="relative z-10 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-white text-lg flex items-center">
                  <GraduationCap className="w-5 h-5 text-emerald-400 mr-2.5 shrink-0" />
                  Education
                </h4>
                <span className="text-xs font-mono px-2.5 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-md">
                  {EDUCATION_DATA.status}
                </span>
              </div>
              <p className="text-white font-semibold text-base">{EDUCATION_DATA.degree}</p>
              <p className="text-gray-400 text-xs">{EDUCATION_DATA.institution}</p>
              
              <div className="pt-2 border-t border-white/5 space-y-1.5">
                {EDUCATION_DATA.highlights.map((item, idx) => (
                  <div key={idx} className="flex items-center text-xs text-gray-300 gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Technical Stack */}
        <div id="skills" className="space-y-8">
          <div>
            <span className="text-accent text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
              // TECH STACK & COMPETENCIES
            </span>
            <h2 className="text-4xl font-extrabold text-white tracking-tight">Technical Skills</h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap gap-2 pb-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition ${
                activeTab === 'all'
                  ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/20'
                  : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
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
                    : 'bg-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Skill Cards */}
          <div className="space-y-4">
            {SKILL_CATEGORIES
              .filter((cat) => activeTab === 'all' || activeTab === cat.id)
              .map((category) => (
                <div key={category.id} className="p-5 bg-white/[0.02] border border-white/5 rounded-2xl space-y-3">
                  <div className="flex items-center space-x-2 text-indigo-400 font-semibold text-xs uppercase tracking-wider font-mono">
                    {category.id === 'languages' && <Code2 className="w-4 h-4" />}
                    {category.id === 'database' && <Database className="w-4 h-4" />}
                    {category.id === 'frontend' && <Server className="w-4 h-4" />}
                    {category.id === 'security' && <ShieldCheck className="w-4 h-4" />}
                    <span>{category.title}</span>
                  </div>

                  <div className="flex flex-wrap gap-2.5">
                    {category.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className={`skill-tag px-4 py-2 rounded-xl text-xs sm:text-sm font-medium tracking-wide flex items-center gap-2 ${
                          skill.isPrimary 
                            ? 'text-white border-indigo-500/30 bg-indigo-500/10' 
                            : 'text-gray-300'
                        }`}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                        <span>{skill.name}</span>
                        {skill.level && (
                          <span className="text-[10px] text-gray-400 font-mono font-normal opacity-80">
                            ({skill.level})
                          </span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>

          {/* Quick Terminal Snippet Box */}
          <div className="p-4 bg-black/60 rounded-xl border border-white/10 font-mono text-xs space-y-2 text-gray-300">
            <div className="flex items-center space-x-2 text-gray-500 pb-1 border-b border-white/5">
              <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              <span>midlaj@developer-environment:~$</span>
            </div>
            <div className="text-emerald-400">
              $ dotnet build --configuration Release
            </div>
            <div className="text-gray-400 text-[11px]">
              Build succeeded. 0 Warning(s), 0 Error(s). Time Elapsed 00:00:01.42
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
