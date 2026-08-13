import React from 'react';
import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Database, ShieldCheck } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-white dark:bg-[#0f141d] border border-slate-200 dark:border-white/10 rounded-2xl shadow-2xl overflow-hidden text-slate-800 dark:text-gray-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02]">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 bg-indigo-50 dark:bg-indigo-500/20 border border-indigo-200 dark:border-indigo-500/30 rounded-xl text-indigo-600 dark:text-indigo-400">
              {project.category === 'security' ? <ShieldCheck className="w-5 h-5" /> :
               project.category === 'database' ? <Database className="w-5 h-5" /> :
               project.category === 'backend' ? <Cpu className="w-5 h-5" /> :
               <Layers className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="font-bold text-slate-900 dark:text-white text-lg leading-snug">{project.title}</h3>
              <p className="text-xs text-indigo-600 dark:text-indigo-400 font-mono capitalize font-semibold">{project.category} Project</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-900 dark:text-gray-400 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag, idx) => (
              <span key={idx} className="px-3 py-1 bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-300 rounded-lg text-xs font-mono font-semibold">
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-gray-400 mb-2">Overview</h4>
            <p className="text-sm text-slate-700 dark:text-gray-300 leading-relaxed bg-slate-50 dark:bg-white/[0.02] p-4 rounded-xl border border-slate-200 dark:border-white/5">
              {project.fullDescription}
            </p>
          </div>

          {/* Architecture & Highlights */}
          {project.architectureDetails && project.architectureDetails.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-3 flex items-center gap-2">
                <Layers className="w-4 h-4" /> Technical & Architectural Highlights
              </h4>
              <div className="space-y-2.5">
                {project.architectureDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 dark:text-gray-300 bg-slate-50 dark:bg-white/5 p-3 rounded-lg border border-slate-200 dark:border-white/5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer with actions */}
        <div className="p-4 sm:px-6 border-t border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.02] flex flex-wrap justify-between items-center gap-3">
          <div className="flex space-x-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 border border-slate-200 dark:border-white/10 rounded-xl text-xs font-medium text-slate-800 dark:text-white transition"
              >
                <Github className="w-4 h-4" />
                <span>Source Repository</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center space-x-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-xl text-xs font-semibold text-white transition shadow-lg shadow-indigo-500/20"
              >
                <ExternalLink className="w-4 h-4" />
                <span>Explore Project</span>
              </a>
            )}
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
