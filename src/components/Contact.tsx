import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Linkedin, Github, MessageSquare, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { ContactFormData } from '../types';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1000);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-28 text-center relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 mb-12 space-y-4">
        <span className="text-accent text-xs font-bold uppercase tracking-widest block font-mono">
          // CONNECT & COLLABORATE
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white italic">
          Let's build <br className="md:hidden" />
          something <span className="text-accent underline decoration-indigo-500/40 underline-offset-8">Great</span>.
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Currently available for full-time software developer roles, internships, or technical projects. Looking for opportunities to contribute and learn.
        </p>

        {/* Email Quick Copy Widget */}
        <div className="pt-2 flex justify-center">
          <div className="inline-flex items-center space-x-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-sm">
            <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span className="text-xs sm:text-sm font-mono text-slate-800 dark:text-gray-200 font-medium">{PERSONAL_INFO.email}</span>
            <button
              onClick={handleCopyEmail}
              className="p-1.5 hover:bg-slate-200 dark:hover:bg-white/10 rounded-lg text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition flex items-center space-x-1"
              title="Copy email to clipboard"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">Copied!</span>
                </>
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-2xl mx-auto bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-6 sm:p-10 rounded-3xl backdrop-blur-xl shadow-xl dark:shadow-2xl text-left">
        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Delivered!</h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm max-w-md mx-auto">
              Thank you for reaching out, {formData.name || 'friend'}. Muhammed Midlaj will review your message and reply back shortly.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="px-6 py-2.5 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl text-xs font-semibold transition mt-4 border border-slate-200 dark:border-white/10"
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1.5 font-semibold">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1.5 font-semibold">YOUR EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. alex@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1.5 font-semibold">SUBJECT</label>
              <input
                type="text"
                placeholder="e.g. Internship Inquiry / Project Request"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1.5 font-semibold">MESSAGE *</label>
              <textarea
                required
                rows={4}
                placeholder="Write your message here..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-accent hover:bg-indigo-600 transition-all duration-300 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center space-x-2 text-sm disabled:opacity-50"
            >
              {loading ? (
                <span>Transmitting Message...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};
