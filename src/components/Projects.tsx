import React, { useState } from 'react';
import { Package, ShieldAlert, Database, ExternalLink, Github, ChevronRight, Layers, Sparkles, Cpu } from 'lucide-react';
import { PROJECTS_DATA } from '../data/portfolioData';
import { Project } from '../types';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

export const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredProjects = PROJECTS_DATA.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  const getProjectIcon = (iconName: string) => {
    switch (iconName) {
      case 'Package':
        return <Package className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-7 h-7 text-purple-600 dark:text-purple-400" />;
      case 'Database':
        return <Database className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />;
      default:
        return <Layers className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />;
    }
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-slate-200 dark:border-white/5">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest block mb-2 font-mono">
            // ENTERPRISE SOLUTIONS & PROJECTS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">Key Projects</h2>
          <p className="text-slate-600 dark:text-gray-400 mt-2 text-base max-w-xl">
            Real-world database systems, automated algorithms, and full-stack integrations developed for retail operations and enterprise ERPs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-2">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'database', label: 'PL/SQL & Oracle' },
            { id: 'fullstack', label: 'ASP.NET & Full-Stack' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition ${
                activeFilter === tab.id
                  ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="project-card p-7 rounded-3xl transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
          >
            {/* Top Row: Icon & Action Links */}
            <div>
              <div className="flex justify-between items-start mb-5">
                <div className="p-3.5 bg-indigo-50 dark:bg-indigo-500/15 border border-indigo-200 dark:border-indigo-500/25 rounded-2xl group-hover:scale-110 transition duration-300">
                  {getProjectIcon(project.icon)}
                </div>

                <div className="flex items-center space-x-2">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition"
                      aria-label="View Github Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-500/10 rounded-lg transition"
                      aria-label="View Project"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

              {/* Title & Short Description */}
              <h3 className="text-xl font-bold mb-2.5 text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-300 transition">
                {project.title}
              </h3>
              
              <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mb-5 leading-relaxed">
                {project.shortDescription}
              </p>
            </div>

            {/* Bottom Row: Tags & Detail Inspector Button */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/5 space-y-3.5">
              <div className="flex flex-wrap gap-1.5 text-[11px] font-bold font-mono">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span key={idx} className="bg-indigo-50 dark:bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 px-2 py-0.5 rounded-md border border-indigo-200 dark:border-indigo-500/15">
                    {tag}
                  </span>
                ))}
              </div>

              <button
                onClick={() => onSelectProject(project)}
                className="w-full py-2.5 px-3.5 bg-slate-100 dark:bg-white/5 hover:bg-indigo-50 dark:hover:bg-indigo-600/20 hover:border-indigo-300 dark:hover:border-indigo-500/40 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-semibold text-slate-700 dark:text-gray-300 hover:text-indigo-700 dark:hover:text-white transition flex items-center justify-between group/btn"
              >
                <span className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
                  <span>Inspect Architecture</span>
                </span>
                <ChevronRight className="w-4 h-4 text-indigo-600 dark:text-indigo-400 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};
