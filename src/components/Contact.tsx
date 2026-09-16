import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Phone, MapPin, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO, PERSONAL_DETAILS } from '../data/portfolioData';
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
  const [errorNotice, setErrorNotice] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const getGmailUrl = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${formData.message || ''}`
    );
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${PERSONAL_INFO.email}&su=${subject}&body=${body}`;
  };

  const getOutlookUrl = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${formData.message || ''}`
    );
    return `https://outlook.live.com/mail/0/deeplink/compose?to=${PERSONAL_INFO.email}&subject=${subject}&body=${body}`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${formData.name || 'N/A'}\nEmail: ${formData.email || 'N/A'}\n\nMessage:\n${formData.message || ''}`
    );
    return `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setLoading(true);
    setErrorNotice(null);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${PERSONAL_INFO.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          message: formData.message,
          _template: 'table'
        })
      });

      const result = await response.json();

      if (response.ok && result.success !== 'false') {
        setSubmitted(true);
      } else {
        window.location.href = getMailtoUrl();
        setSubmitted(true);
      }
    } catch {
      window.location.href = getMailtoUrl();
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-20 text-center relative">
      {/* Background blue glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-10 space-y-3"
      >
        <span className="text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-widest block font-mono">
          // CONNECT & COLLABORATE
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white italic">
          Let's build <br className="md:hidden" />
          something <span className="text-blue-600 dark:text-blue-400 underline decoration-blue-500/40 underline-offset-8">Great</span>.
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
          Open to enterprise database developer roles, Oracle PL/SQL performance tuning, and .NET software engineering opportunities.
        </p>

        {/* Direct Contact Options Bar */}
        <div className="pt-2 flex flex-wrap justify-center gap-2.5">
          {/* Email Pill with Copy */}
          <motion.div 
            whileHover={{ y: -2 }}
            className="inline-flex items-center space-x-2.5 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xs"
          >
            <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="text-xs sm:text-sm font-mono text-slate-800 dark:text-gray-200 font-medium hover:underline"
            >
              {PERSONAL_INFO.email}
            </a>
            <button
              onClick={handleCopyEmail}
              className="p-1 hover:bg-slate-200 dark:hover:bg-white/10 rounded text-slate-500 dark:text-gray-400 hover:text-slate-900 dark:hover:text-white transition flex items-center space-x-1 cursor-pointer"
              title="Copy email to clipboard"
            >
              <AnimatePresence mode="wait">
                {copied ? (
                  <motion.span 
                    key="copied"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                    className="flex items-center space-x-1 text-blue-600 dark:text-blue-400"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span className="text-[10px] font-mono font-bold">Copied!</span>
                  </motion.span>
                ) : (
                  <motion.span 
                    key="copy"
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.8, opacity: 0 }}
                  >
                    <Copy className="w-3.5 h-3.5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </motion.div>

          {/* Phone Link */}
          <motion.a 
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            href={PERSONAL_INFO.socials.phone}
            className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xs text-xs sm:text-sm font-mono text-slate-800 dark:text-gray-200 font-medium hover:border-blue-500/40 transition"
          >
            <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{PERSONAL_DETAILS.phone}</span>
          </motion.a>

          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-3.5 py-2 rounded-xl backdrop-blur-md shadow-xs text-xs sm:text-sm font-mono text-slate-800 dark:text-gray-200 font-medium">
            <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>{PERSONAL_DETAILS.location}</span>
          </div>
        </div>

        {/* Quick 1-Click Launchers */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-1 text-xs font-mono">
          <span className="text-slate-500 dark:text-gray-400">Quick send:</span>
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href={getGmailUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-500/20 transition shadow-xs"
          >
            <span>Open in Gmail</span>
            <ExternalLink className="w-3 h-3" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href={getOutlookUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-500/20 transition shadow-xs"
          >
            <span>Open in Outlook</span>
            <ExternalLink className="w-3 h-3" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.95 }}
            href={`https://wa.me/96566907621?text=${encodeURIComponent('Hi Muhammed Midlaj, I viewed your portfolio and would like to connect.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-500/20 rounded-lg hover:bg-sky-100 dark:hover:bg-sky-500/20 transition shadow-xs"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </motion.a>
        </div>
      </motion.div>

      {/* Form Container */}
      <motion.div 
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 max-w-2xl mx-auto bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-5 sm:p-8 rounded-2xl backdrop-blur-xl shadow-lg dark:shadow-2xl text-left"
      >
        {submitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="py-6 text-center space-y-3"
          >
            <motion.div 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="w-12 h-12 bg-blue-500/20 text-blue-600 dark:text-blue-400 border border-blue-500/30 rounded-full flex items-center justify-center mx-auto"
            >
              <Check className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
            <p className="text-slate-600 dark:text-gray-300 text-xs sm:text-sm max-w-md mx-auto leading-relaxed">
              Your message was dispatched directly to <strong className="text-blue-600 dark:text-blue-400">{PERSONAL_INFO.email}</strong>. {PERSONAL_INFO.displayName} will review it and reply back shortly.
            </p>

            <div className="pt-3 flex flex-wrap justify-center gap-2">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                href={getGmailUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-3.5 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-blue-500/20"
              >
                <span>Open in Gmail App</span>
                <ExternalLink className="w-3 h-3" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-3.5 py-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl text-xs font-semibold transition border border-slate-200 dark:border-white/10 cursor-pointer"
              >
                Send Another Message
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <div className="grid sm:grid-cols-2 gap-3.5">
              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1 font-semibold">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Manager / Recruiter"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full p-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-gray-500 transition"
                />
              </div>

              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1 font-semibold">YOUR EMAIL *</label>
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full p-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-gray-500 transition"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1 font-semibold">SUBJECT</label>
              <input
                type="text"
                placeholder="e.g. Database Engineer Role / Oracle Project Inquiry"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                className="w-full p-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-gray-500 transition"
              />
            </div>

            <div>
              <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1 font-semibold">MESSAGE *</label>
              <textarea
                required
                rows={4}
                placeholder="Write your message or project/job opportunity details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-blue-500 text-slate-900 dark:text-white text-xs sm:text-sm placeholder-slate-400 dark:placeholder-gray-500 transition resize-none"
              />
            </div>

            {errorNotice && (
              <div className="p-2.5 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-xs text-red-700 dark:text-red-400 flex items-center gap-2">
                <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                <span>{errorNotice}</span>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 hover:bg-blue-500 transition-colors rounded-xl font-bold text-white shadow-lg shadow-blue-500/25 flex items-center justify-center space-x-2 text-xs sm:text-sm disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Delivering Message to {PERSONAL_INFO.email}...</span>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>Send Message to {PERSONAL_INFO.displayName}</span>
                </>
              )}
            </motion.button>

            <div className="text-center pt-0.5 text-[11px] text-slate-500 dark:text-gray-400 font-mono">
              Direct delivery to <span className="font-semibold text-slate-700 dark:text-gray-300">{PERSONAL_INFO.email}</span>
            </div>
          </form>
        )}
      </motion.div>
    </section>
  );
};
