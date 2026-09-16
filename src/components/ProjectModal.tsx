import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database, ShieldCheck } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div 
            initial={{ scale: 0.93, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.93, opacity: 0, y: 15 }}
            transition={{ type: 'spring', damping: 25, stiffness: 350 }}
            className="relative w-full max-w-2xl bg-white dark:bg-[#080d1a] border border-slate-200 dark:border-blue-500/20 rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden text-slate-800 dark:text-gray-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
              <div className="flex items-center space-x-2.5">
                <div className="p-2 bg-blue-50 dark:bg-blue-500/20 border border-blue-200 dark:border-blue-500/30 rounded-xl text-blue-600 dark:text-blue-400">
                  {project.category === 'security' ? <ShieldCheck className="w-4 h-4" /> :
                   project.category === 'database' ? <Database className="w-4 h-4" /> :
                   project.category === 'backend' ? <Cpu className="w-4 h-4" /> :
                   <Layers className="w-4 h-4" />}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base leading-snug">{project.title}</h3>
                  <p className="text-xs text-blue-600 dark:text-blue-400 font-mono capitalize font-semibold">{project.category} Project</p>
                </div>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition cursor-pointer"
                aria-label="Close Modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Content */}
            <div className="p-5 sm:p-6 space-y-4 max-h-[72vh] overflow-y-auto">
              {/* Tags */}
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="px-2.5 py-0.5 bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-300 rounded-lg text-xs font-mono font-semibold">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-1.5 font-mono">Overview</h4>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-gray-300 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-3.5 rounded-xl border border-slate-200 dark:border-white/5">
                  {project.fullDescription}
                </p>
              </div>

              {/* Architecture & Highlights */}
              {project.architectureDetails && project.architectureDetails.length > 0 && (
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2 flex items-center gap-1.5 font-mono">
                    <Layers className="w-3.5 h-3.5" /> Technical & Architectural Highlights
                  </h4>
                  <div className="space-y-2">
                    {project.architectureDetails.map((detail, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-gray-300 bg-slate-50 dark:bg-white/5 p-2.5 rounded-xl border border-slate-200 dark:border-white/5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Footer with actions */}
            <div className="p-3.5 sm:px-5 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex flex-wrap justify-between items-center gap-2.5">
              <div className="flex space-x-2">
                {project.githubUrl && (
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 px-3 py-1.5 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-medium text-slate-800 dark:text-white transition"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Repository</span>
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center space-x-1.5 px-3.5 py-1.5 bg-blue-600 hover:bg-blue-500 rounded-xl text-xs font-semibold text-white transition shadow-sm shadow-blue-500/20"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Explore Project</span>
                  </motion.a>
                )}
              </div>
              <button
                onClick={onClose}
                className="px-3 py-1 text-xs text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition cursor-pointer"
              >
                Close Window
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
