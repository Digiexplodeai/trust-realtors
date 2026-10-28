import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Send,
  CheckCircle2,
  Calendar,
  Building,
  Video,
} from 'lucide-react';
import { siteContent } from '../data/content';
import { Logo } from './Logo';

export const ContactView: React.FC = () => {
  const { brand, contact } = siteContent;

  const [consultType, setConsultType] = useState('Office Briefing (SCO 23 MDC)');
  const [preferredSlot, setPreferredSlot] = useState('Morning (10 AM - 1 PM)');
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const text = `Hi Trust Realtors, I would like to schedule a private briefing:
Type: ${consultType}
Slot: ${preferredSlot}
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email || 'N/A'}
Requirements: ${formData.message || 'Looking for private consultation.'}`;

    const url = `${contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div data-theme="dark" className="pt-24 pb-24 bg-[#0A1330] min-h-screen text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#101D45]/70 border-b border-[#9DB8FF]/15 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-3">
            Private Engagement
          </span>
          <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
            Contact Trust Realtors
          </h1>
          <p className="text-base sm:text-lg text-[#C9D3EE] font-sans max-w-2xl mx-auto leading-relaxed">
            Headquartered at SCO 23, 1st Floor, MDC Sector 5, Panchkula. Serving Chandigarh, Mohali, New Chandigarh, Zirakpur, and select premium Indian markets.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left: Contact Info & Real Google Map Embed (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="p-8 sm:p-10 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 shadow-xl space-y-6">
              <div className="flex items-center gap-4 pb-4 border-b border-[#9DB8FF]/15">
                <Logo
                  width={72}
                  height={72}
                  className="w-16 h-16 sm:w-18 sm:h-18 object-contain shrink-0"
                />
                <div>
                  <h3 className="font-display text-2xl font-bold text-white leading-tight">
                    Headquarters Details
                  </h3>
                  <span className="text-xs text-[#FF7A3D] font-sans font-bold uppercase tracking-wider">
                    Official Advisory Mark
                  </span>
                </div>
              </div>

              <div className="space-y-5 text-sm font-sans">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1330] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-bold block mb-0.5">
                      Physical Address
                    </span>
                    <p className="text-[#C9D3EE] leading-relaxed text-sm">{brand.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1330] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-bold block mb-0.5">
                      Phone / WhatsApp Concierge
                    </span>
                    <a href={`tel:${contact.phoneRaw}`} className="text-white hover:text-[#FF7A3D] font-bold text-base transition-colors">
                      {brand.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1330] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-bold block mb-0.5">
                      Consultation Hours
                    </span>
                    <p className="text-[#C9D3EE] text-sm">{brand.hours}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-[#0A1330] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-bold block mb-0.5">
                      Confidential Email
                    </span>
                    <a href={`mailto:${brand.email}`} className="text-[#C9D3EE] hover:text-white transition-colors text-sm font-medium">
                      {brand.email}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Real Google Map Embed in Rounded Frame */}
            <div className="h-72 rounded-3xl overflow-hidden border border-[#9DB8FF]/25 shadow-xl bg-[#101D45] relative">
              <iframe
                title="Trust Realtors Location Map"
                src={contact.googleMapsEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale contrast-125 opacity-85 hover:opacity-100 transition-opacity"
              />
            </div>
          </div>

          {/* Right: Interactive Consultation Scheduler Form (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/25 shadow-xl">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-1">
                      Priority Advisory Appointment
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                      Schedule a Private Briefing
                    </h3>
                    <p className="text-base text-[#C9D3EE] font-sans">
                      Select your preferred briefing mode and timing. We respect your schedule and privacy.
                    </p>
                  </div>

                  {/* Consultation Mode Selector */}
                  <div>
                    <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block mb-2.5">
                      Preferred Mode of Briefing
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        { id: 'Office Briefing (SCO 23 MDC)', icon: Building, label: 'In-Office (MDC)' },
                        { id: 'Private Video Conference', icon: Video, label: 'Video Call' },
                        { id: 'On-Site Property Walkthrough', icon: Calendar, label: 'Site Inspection' },
                      ].map((mode) => {
                        const Icon = mode.icon;
                        const isSelected = consultType === mode.id;
                        return (
                          <button
                            key={mode.id}
                            type="button"
                            onClick={() => setConsultType(mode.id)}
                            className={`p-3.5 rounded-2xl text-xs font-sans font-bold flex items-center justify-center gap-2 border transition-all cursor-pointer ${
                              isSelected
                                ? 'bg-[#FF7A3D] text-white border-[#FF7A3D] shadow-md'
                                : 'bg-[#0A1330] text-[#C9D3EE] border-[#9DB8FF]/20 hover:text-white'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                            <span>{mode.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Preferred Time Slot */}
                  <div>
                    <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block mb-2.5">
                      Preferred Time Slot (10 AM - 7 PM)
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        'Morning (10 AM - 1 PM)',
                        'Afternoon (2 PM - 5 PM)',
                        'Evening (5 PM - 7 PM)',
                      ].map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setPreferredSlot(slot)}
                          className={`p-3.5 rounded-2xl text-xs font-sans font-bold text-center border transition-all cursor-pointer ${
                            preferredSlot === slot
                              ? 'bg-[#FF7A3D] text-white border-[#FF7A3D] shadow-md'
                              : 'bg-[#0A1330] text-[#C9D3EE] border-[#9DB8FF]/20 hover:text-white'
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                        className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 text-base font-sans"
                      />
                    </div>

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
                        className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 text-base font-sans"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@domain.com"
                      className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 text-base font-sans"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                      Brief Requirements or Specific Corridors
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify micro-market (e.g. MDC Panchkula, Sector 9 Chandigarh), property type, or budget target..."
                      className="w-full px-4 py-3.5 rounded-xl bg-[rgba(255,255,255,0.06)] border border-[#9DB8FF]/30 text-white placeholder-[#9FB0D9] focus:outline-none focus:border-[#FF7A3D] focus:ring-2 focus:ring-[#FF7A3D]/40 text-base font-sans resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-8 rounded-full text-xs font-sans uppercase tracking-wider font-bold text-white bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 shadow-md flex items-center justify-center gap-2 active:scale-95 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Confirm Consultation Request</span>
                  </button>
                </form>
              ) : (
                <div className="p-8 sm:p-12 rounded-3xl bg-[#0A1330] border border-[#FF7A3D]/40 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-[#FF7A3D]/20 border border-[#FF7A3D] mx-auto flex items-center justify-center text-[#FF7A3D] shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2">
                      Briefing Request Received
                    </h3>
                    <p className="text-base text-[#C9D3EE] font-sans max-w-md mx-auto leading-relaxed">
                      Thank you, {formData.name}. Our senior partner desk will confirm your {consultType} session for the {preferredSlot} slot within 4 hours.
                    </p>
                  </div>
                  <button
                    onClick={handleWhatsApp}
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#FF7A3D] text-white font-sans text-xs uppercase tracking-wider font-bold shadow-md hover:bg-[#FF7A3D]/90 transition-all cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Confirm Directly via WhatsApp</span>
                  </button>
                </div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
};
