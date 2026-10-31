import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, ShieldCheck, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/content';
import { Logo } from './Logo';

interface FooterProps {
  onNavigate?: (view: 'home' | 'about' | 'services' | 'properties' | 'contact', anchorId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { brand, contact, footer } = siteContent;

  const handleNavClick = (view: 'home' | 'about' | 'services' | 'properties' | 'contact', anchor?: string) => {
    if (onNavigate) {
      onNavigate(view, anchor);
    } else if (anchor) {
      const el = document.getElementById(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer
      data-theme="dark"
      className="bg-[#0A1330] text-white pt-16 sm:pt-20 pb-12 border-t border-[#9DB8FF]/15 relative overflow-hidden"
    >
      {/* Background Deep Ocean ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-[#101D45]/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Top Split: Narrative & Real Google Map Embed */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 pb-12 border-b border-[#9DB8FF]/15">
          {/* Brand & Address Column (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Official Round Badge & Tagline */}
              <div className="mb-6">
                <Logo
                  width={150}
                  height={150}
                  className="w-36 h-36 sm:w-40 sm:h-40 object-contain mb-4 transition-transform duration-300 hover:scale-105"
                />
                <p className="font-accent italic text-xl text-[#FF7A3D] mb-4">
                  "{brand.tagline}"
                </p>
              </div>

              <p className="text-base text-[#C9D3EE] font-sans leading-relaxed max-w-md mb-6">
                {footer.aboutText}
              </p>

              {/* RERA Badge: Strict Rule -> ONLY display if reraNumber is populated */}
              {brand.reraNumber && (
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#101D45] border border-[#9DB8FF]/25 text-xs font-bold text-white mb-6">
                  <ShieldCheck className="w-4 h-4 text-[#FF7A3D]" />
                  <span>RERA Registered: {brand.reraNumber}</span>
                </div>
              )}
            </div>

            {/* Direct Contact info */}
            <div className="space-y-2.5 text-sm font-sans text-[#C9D3EE]">
              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                <span>{brand.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                <a href={`tel:${contact.phoneRaw}`} className="hover:text-white transition-colors font-bold text-white">
                  {brand.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                <span>{brand.hours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links Column (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-xs font-sans uppercase tracking-wider text-[#FF7A3D] font-bold block mb-4">
              Navigation
            </span>
            <ul className="space-y-3.5 text-sm uppercase tracking-wider font-sans text-[#C9D3EE] font-medium">
              <li>
                <button
                  onClick={() => handleNavClick('home', 'hero')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('about')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About Consultancy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('services')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Advisory Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('properties')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Prime Properties
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavClick('contact')}
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Private Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Real Google Maps Embed in Rounded Frame (4 cols) */}
          <div className="lg:col-span-4 flex flex-col">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-sans uppercase tracking-wider text-[#FF7A3D] font-bold">
                Consultancy Location
              </span>
              <a
                href={contact.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[11px] font-sans text-[#C9D3EE] hover:text-[#FF7A3D] flex items-center gap-1 font-semibold transition-colors"
              >
                <span>Get Directions</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#FF7A3D]" />
              </a>
            </div>
            <div className="w-full h-56 rounded-2xl overflow-hidden border border-[#9DB8FF]/25 shadow-xl bg-[#101D45] relative">
              <iframe
                title="Trust Realtors Office Location"
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
            <span className="text-xs text-[#C9D3EE] mt-2 font-sans font-semibold">
              {brand.address}
            </span>
          </div>
        </div>

        {/* Giant Trust Realtors Wordmark Revealing on Scroll */}
        <div className="py-8 overflow-hidden select-none pointer-events-none text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl sm:text-7xl md:text-8xl font-extrabold tracking-tighter text-white/10 uppercase"
          >
            TRUST REALTORS
          </motion.div>
        </div>

        {/* Bottom Bar: Copyright & Compliance */}
        <div className="pt-6 border-t border-[#9DB8FF]/15 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-sans text-[#C9D3EE] font-medium">
          <span>{footer.copyright}</span>
          <span className="text-center sm:text-right">
            Curated Real Estate Advisory for Tricity & Select Indian Markets.
          </span>
        </div>
      </div>
    </footer>
  );
};
