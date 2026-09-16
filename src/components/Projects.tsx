import React, { useState } from 'react';
import { Package, ShieldAlert, Database, ExternalLink, Github, ChevronRight, Layers, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
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
        return <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-blue-500 dark:text-blue-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      default:
        return <Layers className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-16 sm:py-20 border-t border-slate-200 dark:border-white/5">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-5"
      >
        <div>
          <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest block mb-1.5 font-mono">
            // ENTERPRISE SOLUTIONS & PROJECTS
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">Key Projects</h2>
          <p className="text-slate-600 dark:text-gray-400 mt-1.5 text-sm sm:text-base max-w-xl">
            Real-world database systems, automated algorithms, and full-stack integrations developed for retail operations and enterprise ERPs.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-1 p-1 bg-slate-100/80 dark:bg-white/[0.03] rounded-xl border border-slate-200/80 dark:border-white/5">
          {[
            { id: 'all', label: 'All Projects' },
            { id: 'database', label: 'PL/SQL & Oracle' },
            { id: 'fullstack', label: 'ASP.NET & Full-Stack' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id)}
              className={`relative px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-colors cursor-pointer ${
                activeFilter === tab.id
                  ? 'text-white dark:text-white'
                  : 'text-slate-600 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {activeFilter === tab.id && (
                <motion.span
                  layoutId="projectsActiveTabIndicator"
                  className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm"
                  transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              key={project.id}
              initial={{ opacity: 0, scale: 0.94, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 15 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              whileHover={{ y: -4 }}
              className="project-card p-5 sm:p-6 rounded-2xl transition-shadow duration-300 group flex flex-col justify-between relative overflow-hidden bg-slate-50/80 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 shadow-md hover:shadow-xl hover:border-blue-500/40"
            >
              {/* Top Row: Icon & Action Links */}
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="p-3 bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-500/25 rounded-xl group-hover:scale-105 transition duration-300">
                    {getProjectIcon(project.icon)}
                  </div>

                  <div className="flex items-center space-x-1">
                    {project.githubUrl && (
                      <motion.a
                        whileHover={{ scale: 1.12, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-white/10 rounded-lg transition"
                        aria-label="View Github Repository"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                    )}
                    {project.liveUrl && (
                      <motion.a
                        whileHover={{ scale: 1.12, y: -1 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-500/10 rounded-lg transition"
                        aria-label="View Project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    )}
                  </div>
                </div>

                {/* Title & Short Description */}
                <h3 className="text-lg font-bold mb-2 text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>
              </div>

              {/* Bottom Row: Tags & Detail Inspector Button */}
              <div className="pt-3.5 border-t border-slate-200 dark:border-white/5 space-y-3">
                <div className="flex flex-wrap gap-1.5 text-[10px] font-bold font-mono">
                  {project.tags.slice(0, 3).map((tag, idx) => (
                    <span key={idx} className="bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded-md border border-blue-200 dark:border-blue-500/15">
                      {tag}
                    </span>
                  ))}
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => onSelectProject(project)}
                  className="w-full py-2 px-3 bg-slate-100 dark:bg-white/5 hover:bg-blue-50 dark:hover:bg-blue-600/20 hover:border-blue-300 dark:hover:border-blue-500/40 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-semibold text-slate-700 dark:text-gray-300 hover:text-blue-700 dark:hover:text-white transition-colors flex items-center justify-between group/btn cursor-pointer"
                >
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                    <span>Inspect Architecture</span>
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
