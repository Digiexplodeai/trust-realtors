import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Send,
  CheckCircle2,
  Phone,
  MessageCircle,
  MapPin,
  Clock,
  Mail,
  Shield,
} from 'lucide-react';
import { siteContent } from '../data/content';
import { Logo } from './Logo';

export const InquirySection: React.FC = () => {
  const { brand, contact, inquiry } = siteContent;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: inquiry.interests[0],
    budget: inquiry.budgets[1], // "1 - 3 Cr"
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleWhatsAppContinue = () => {
    const text = `Hi Trust Realtors, I submitted an inquiry for:
Name: ${formData.name}
Phone: ${formData.phone}
Interest: ${formData.interest}
Budget: ${formData.budget}
Note: ${formData.message || 'Looking for private consultation.'}`;

    const url = `${contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      id="inquiry"
      data-theme="dark"
      className="py-16 sm:py-20 lg:py-28 bg-[#0A1330] text-white relative overflow-hidden border-b border-[#9DB8FF]/15"
    >
      {/* Background Coral Ambient Glow */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#FF7A3D]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#101D45]/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 shadow-[0_25px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Left Column: Direct Outreach, Address & Hours (5 cols) */}
            <div className="lg:col-span-5 p-8 sm:p-12 lg:p-14 bg-[#0A1330]/80 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#9DB8FF]/15">
              <div>
                <div className="flex items-center gap-4 mb-5 pb-5 border-b border-[#9DB8FF]/15">
                  <Logo
                    width={72}
                    height={72}
                    className="w-16 h-16 sm:w-18 sm:h-18 object-contain shrink-0"
                  />
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block">
                      Begin Your Legacy
                    </span>
                    <span className="text-xs text-[#C9D3EE] font-sans font-medium">
                      Official Advisory Mark
                    </span>
                  </div>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3">
                  {inquiry.title}
                </h2>

                <p className="text-base text-[#C9D3EE] font-sans leading-relaxed mb-8">
                  {inquiry.subtitle}
                </p>

                {/* Direct Contact Blocks */}
                <div className="space-y-6 text-sm font-sans">
                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#101D45] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                        Call or WhatsApp Direct
                      </span>
                      <a
                        href={`tel:${contact.phoneRaw}`}
                        className="font-bold text-white hover:text-[#FF7A3D] transition-colors text-base"
                      >
                        {brand.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#101D45] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                        Consultancy Headquarters
                      </span>
                      <p className="text-[#C9D3EE] leading-relaxed text-sm">{brand.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#101D45] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                        Advisory Hours
                      </span>
                      <p className="text-[#C9D3EE] text-sm">{brand.hours}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-xl bg-[#101D45] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                        Confidential Email
                      </span>
                      <a
                        href={`mailto:${brand.email}`}
                        className="text-[#C9D3EE] hover:text-white transition-colors text-sm font-medium"
                      >
                        {brand.email}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 mt-8 border-t border-[#9DB8FF]/15 flex items-center gap-2 text-sm font-sans text-[#C9D3EE]">
                <Shield className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                <span>We respond within one business day.</span>
              </div>
            </div>

            {/* Right Column: Glass Inquiry Form with Coral Focus (7 cols) */}
            <div className="lg:col-span-7 p-8 sm:p-12 lg:p-14 flex flex-col justify-center bg-[#101D45]">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="e.g. Vikramaditya Sharma"
                          className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 transition-all text-base font-sans"
                        />
                      </div>

                      {/* Phone */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 transition-all text-base font-sans"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="vikram@holding.com"
                        className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 transition-all text-base font-sans"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Acquisition Interest */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                          Primary Interest
                        </label>
                        <select
                          value={formData.interest}
                          onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                          style={{ colorScheme: 'dark' }}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#101D45] border border-[#9DB8FF]/30 text-white focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 transition-all text-base font-sans cursor-pointer"
                        >
                          {inquiry.interests.map((int) => (
                            <option key={int} value={int} className="bg-[#101D45] text-white">
                              {int}
                            </option>
                          ))}
                        </select>
                      </div>

                      {/* Budget Range */}
                      <div className="space-y-2">
                        <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                          Budget Range
                        </label>
                        <select
                          value={formData.budget}
                          onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                          style={{ colorScheme: 'dark' }}
                          className="w-full px-4 py-3.5 rounded-xl bg-[#101D45] border border-[#9DB8FF]/30 text-white focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 transition-all text-base font-sans cursor-pointer"
                        >
                          {inquiry.budgets.map((b) => (
                            <option key={b} value={b} className="bg-[#101D45] text-white">
                              {b}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Requirement Notes */}
                    <div className="space-y-2">
                      <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                        Brief Requirements or Specific Corridors
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="e.g. Looking for a 1-Kanal villa plot in MDC Panchkula or 4 BHK penthouse in New Chandigarh with immediate possession..."
                        className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 transition-all text-base font-sans resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 px-8 rounded-full text-sm font-sans uppercase tracking-wider font-bold text-white bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 shadow-[0_10px_30px_rgba(255,122,61,0.35)] transition-all duration-300 flex items-center justify-center gap-2.5 active:scale-95 cursor-pointer"
                    >
                      {loading ? (
                        <span>Submitting...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4 text-white" />
                          <span>Submit Private Inquiry</span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  /* Animated Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 sm:p-12 rounded-3xl bg-[#0A1330] border border-[#FF7A3D]/40 text-center space-y-6"
                  >
                    <div className="w-16 h-16 rounded-full bg-[#FF7A3D]/20 border border-[#FF7A3D] mx-auto flex items-center justify-center text-[#FF7A3D] shadow-[0_0_25px_rgba(255,122,61,0.4)]">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <div>
                      <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                        Inquiry Received. Thank you.
                      </h3>
                      <p className="text-base text-[#C9D3EE] font-sans max-w-md mx-auto leading-relaxed">
                        Our senior real estate advisory team has received your criteria and will reach out personally within 24 hours.
                      </p>
                    </div>

                    {/* Continue on WhatsApp Option */}
                    <button
                      onClick={handleWhatsAppContinue}
                      className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF7A3D] text-white font-sans text-xs uppercase tracking-wider font-bold shadow-[0_10px_25px_rgba(255,122,61,0.35)] hover:bg-[#FF7A3D]/90 transition-all active:scale-95 cursor-pointer"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span>Continue on WhatsApp Now</span>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
