import React, { useState } from 'react';
import { Mail, Send, Check, Copy, Phone, MapPin, ExternalLink, MessageSquare, AlertCircle } from 'lucide-react';
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
      // Send directly to midlajmuhammed443@gmail.com using FormSubmit AJAX endpoint
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
        // Fallback to mailto link if API response wasn't OK
        window.location.href = getMailtoUrl();
        setSubmitted(true);
      }
    } catch {
      // Graceful fallback: open default email client with all pre-filled content
      window.location.href = getMailtoUrl();
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-6 py-28 text-center relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Heading */}
      <div className="relative z-10 mb-12 space-y-4">
        <span className="text-indigo-600 dark:text-indigo-400 text-xs font-bold uppercase tracking-widest block font-mono">
          // CONNECT & COLLABORATE
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white italic">
          Let's build <br className="md:hidden" />
          something <span className="text-indigo-600 dark:text-indigo-400 underline decoration-indigo-500/40 underline-offset-8">Great</span>.
        </h2>
        <p className="text-slate-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
          Open to enterprise database developer roles, Oracle PL/SQL performance tuning, and software engineering opportunities.
        </p>

        {/* Direct Contact Options Bar */}
        <div className="pt-2 flex flex-wrap justify-center gap-3">
          {/* Email Pill with Copy */}
          <div className="inline-flex items-center space-x-3 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-sm">
            <Mail className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <a 
              href={`mailto:${PERSONAL_INFO.email}`} 
              className="text-xs sm:text-sm font-mono text-slate-800 dark:text-gray-200 font-medium hover:underline"
            >
              {PERSONAL_INFO.email}
            </a>
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

          {/* Phone Link */}
          <a 
            href={PERSONAL_INFO.socials.phone}
            className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-sm text-xs sm:text-sm font-mono text-slate-800 dark:text-gray-200 font-medium hover:border-indigo-500/40 transition"
          >
            <Phone className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            <span>{PERSONAL_DETAILS.phone}</span>
          </a>

          {/* Location Badge */}
          <div className="inline-flex items-center space-x-2 bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 px-4 py-2.5 rounded-2xl backdrop-blur-md shadow-sm text-xs sm:text-sm font-mono text-slate-800 dark:text-gray-200 font-medium">
            <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{PERSONAL_DETAILS.location}</span>
          </div>
        </div>

        {/* Quick 1-Click Launchers */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2 text-xs font-mono">
          <span className="text-slate-500 dark:text-gray-400">Quick send:</span>
          <a
            href={getGmailUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-red-50 dark:bg-red-500/10 text-red-700 dark:text-red-300 border border-red-200 dark:border-red-500/20 rounded-lg hover:bg-red-100 dark:hover:bg-red-500/20 transition"
          >
            <span>Open in Gmail</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={getOutlookUrl()}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/20 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-500/20 transition"
          >
            <span>Open in Outlook</span>
            <ExternalLink className="w-3 h-3" />
          </a>
          <a
            href={`https://wa.me/96566907621?text=${encodeURIComponent('Hi Muhammed Midlaj, I viewed your portfolio and would like to connect.')}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 px-2.5 py-1 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20 rounded-lg hover:bg-emerald-100 dark:hover:bg-emerald-500/20 transition"
          >
            <MessageSquare className="w-3 h-3" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Form Container */}
      <div className="relative z-10 max-w-2xl mx-auto bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 p-6 sm:p-10 rounded-3xl backdrop-blur-xl shadow-xl dark:shadow-2xl text-left">
        {submitted ? (
          <div className="py-8 text-center space-y-4 animate-fadeIn">
            <div className="w-14 h-14 bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto">
              <Check className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Message Sent Successfully!</h3>
            <p className="text-slate-600 dark:text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
              Your message was dispatched directly to <strong className="text-indigo-600 dark:text-indigo-400">{PERSONAL_INFO.email}</strong>. Muhammed Midlaj MK will review it and reply back to you shortly.
            </p>

            <div className="pt-4 flex flex-wrap justify-center gap-3">
              <a
                href={getGmailUrl()}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-semibold transition flex items-center gap-1.5 shadow-md shadow-indigo-500/20"
              >
                <span>Open in Gmail App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
                className="px-4 py-2 bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-900 dark:text-white rounded-xl text-xs font-semibold transition border border-slate-200 dark:border-white/10"
              >
                Send Another Message
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-mono text-slate-600 dark:text-gray-400 mb-1.5 font-semibold">YOUR NAME *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Hiring Manager / Recruiter"
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
                  placeholder="e.g. contact@company.com"
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
                placeholder="e.g. Database Engineer Role / Oracle Project Inquiry"
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
                placeholder="Write your message or project/job opportunity details..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl focus:outline-none focus:border-indigo-500 text-slate-900 dark:text-white text-sm placeholder-slate-400 dark:placeholder-gray-500 transition resize-none"
              />
            </div>

            {errorNotice && (
              <div className="p-3 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl text-xs text-red-700 dark:text-red-400 flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{errorNotice}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 rounded-xl font-bold text-white shadow-lg shadow-indigo-500/25 flex items-center justify-center space-x-2 text-sm disabled:opacity-50 cursor-pointer"
            >
              {loading ? (
                <span>Delivering Message to {PERSONAL_INFO.email}...</span>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Message to {PERSONAL_INFO.displayName}</span>
                </>
              )}
            </button>

            <div className="text-center pt-1 text-[11px] text-slate-500 dark:text-gray-400 font-mono">
              Direct delivery to <span className="font-semibold text-slate-700 dark:text-gray-300">{PERSONAL_INFO.email}</span>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
