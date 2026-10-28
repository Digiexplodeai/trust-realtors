import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';
import { siteContent } from '../data/content';

export const FloatingActions: React.FC = () => {
  const { contact } = siteContent;

  return (
    <>
      {/* Floating WhatsApp Action Button (Desktop & Mobile) */}
      <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3 pointer-events-auto">
        <a
          href={`${contact.whatsappBaseUrl}?text=${encodeURIComponent(contact.whatsappDefaultText)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#FF7A3D] text-white shadow-[0_10px_30px_rgba(255,122,61,0.4)] hover:bg-[#FF7A3D]/90 hover:scale-105 active:scale-95 transition-all duration-300"
          aria-label="Direct WhatsApp Consultation with Trust Realtors"
        >
          {/* Subtle pulse ring */}
          <span className="absolute -inset-1 rounded-full bg-[#FF7A3D]/30 animate-ping pointer-events-none" />

          {/* Desktop Tooltip */}
          <span className="hidden md:group-hover:inline-block absolute right-16 px-4 py-2 rounded-xl bg-[#0A1330] border border-[#9DB8FF]/30 text-white text-xs font-sans whitespace-nowrap shadow-xl font-bold">
            WhatsApp Advisory Concierge
          </span>
          <MessageCircle className="w-6 h-6 text-white stroke-[2.2]" />
        </a>
      </aside>

      {/* Floating Call Now Button (Mobile Only) */}
      <aside aria-label="Mobile quick call" className="fixed bottom-6 left-6 z-40 md:hidden pointer-events-auto">
        <a
          href={`tel:${contact.phoneRaw}`}
          className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#101D45] backdrop-blur-md border border-[#9DB8FF]/30 text-white shadow-xl text-xs font-sans uppercase tracking-wider font-bold hover:border-[#FF7A3D]"
          aria-label="Call Trust Realtors"
        >
          <Phone className="w-4 h-4 text-[#FF7A3D]" />
          <span>Call Now</span>
        </a>
      </aside>
    </>
  );
};
