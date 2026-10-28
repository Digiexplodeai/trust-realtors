import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  MapPin,
  IndianRupee,
  BedDouble,
  Building2,
  Search,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
} from 'lucide-react';
import { siteContent } from '../data/content';

interface HeroProps {
  onExploreClick: () => void;
  onFilterSearch: (filters: { location: string; budget: string; bedrooms: string; type: string }) => void;
  fontsReady?: boolean;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onFilterSearch, fontsReady = true }) => {
  const { hero, searchFilters, contact } = siteContent;
  const sectionRef = useRef<HTMLElement>(null);

  const [location, setLocation] = useState(searchFilters.locations[0]);
  const [budget, setBudget] = useState(searchFilters.budgets[2]); // "3 - 5 Cr"
  const [bedrooms, setBedrooms] = useState(searchFilters.bedrooms[0]); // "Any Beds"
  const [propertyType, setPropertyType] = useState(searchFilters.types[0]); // "Real Luxury Residence"

  // Scroll Zoom-through animation
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Background video scales; headline stays visible and only fades in the last 30%
  const videoScale = useTransform(scrollYProgress, [0, 1], [1, 1.25]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -45]);

  const handleSearchSubmit = () => {
    onFilterSearch({ location, budget, bedrooms, type: propertyType });
  };

  const handleWhatsAppWithFilters = () => {
    const text = `Hi Trust Realtors, I am looking for a ${propertyType} in ${location} (${bedrooms}) within a budget of ${budget}. Could you share curated options and arrange a private consultation?`;
    const url = `${contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      data-theme="dark"
      className="relative min-h-screen flex flex-col justify-between pt-28 sm:pt-36 pb-12 sm:pb-16 overflow-hidden bg-midnight text-white"
    >
      {/* Background Architectural Video & Poster Fallback with Natural Photo Grading */}
      <motion.div
        style={{ scale: videoScale }}
        className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden bg-midnight"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={hero.videoPoster}
          className="w-full h-full object-cover cinematic-photo opacity-50 transform-gpu"
        >
          <source src={hero.videoUrl} type="video/mp4" />
        </video>

        {/* Midnight Blue Mesh & Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/60 to-midnight/80" />
        <div className="absolute inset-0 bg-mesh-dark opacity-35" />
      </motion.div>

      {/* Floating Glass Chip: "Verified listings • Transparent paperwork" */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 w-full flex justify-end">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#101D45]/90 backdrop-blur-md border border-ice/25 text-xs font-sans tracking-wide text-white shadow-glow-ocean"
        >
          <ShieldCheck className="w-4 h-4 text-coral shrink-0" />
          <span className="font-medium">Verified listings • Transparent paperwork</span>
        </motion.div>
      </div>

      {/* Center Cinematic Headline Content */}
      <motion.div
        style={{ opacity: textOpacity, y: textY }}
        className="relative z-20 max-w-6xl mx-auto px-5 sm:px-8 text-center my-auto py-8"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={fontsReady ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 mb-4"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-coral animate-pulse" />
          <span className="text-xs uppercase tracking-label text-coral font-sans font-bold">
            {hero.locationLabel}
          </span>
        </motion.div>

        {/* Giant Display Headline */}
        <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight leading-[1.02] mb-6 text-white select-none">
          <div className="overflow-hidden inline-block py-1">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={fontsReady ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block mr-3"
            >
              Homes that earn
            </motion.span>
          </div>{' '}
          <div className="overflow-hidden inline-block py-1">
            <motion.span
              initial={{ y: '100%', opacity: 0 }}
              animate={fontsReady ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="inline-block"
            >
              your{' '}
              <span className="font-accent italic font-normal text-coral underline decoration-coral/40 decoration-wavy underline-offset-8">
                trust.
              </span>
            </motion.span>
          </div>
        </h1>

        {/* Subtext */}
        <div className="overflow-hidden max-w-3xl mx-auto mb-8">
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={fontsReady ? { y: '0%', opacity: 1 } : { y: '100%', opacity: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-xl text-[#C9D3EE] font-sans leading-relaxed"
          >
            {hero.subtext}
          </motion.p>
        </div>

        {/* Buttons: Coral "Explore Residences" & Glass "Book Consultation" */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={fontsReady ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <button
            onClick={onExploreClick}
            className="px-9 py-4 rounded-full text-xs font-sans uppercase tracking-label font-bold text-white bg-coral hover:bg-coral/90 shadow-glow-coral transition-all duration-300 flex items-center gap-3 group active:scale-95 coral-liquid-btn"
          >
            <span>{hero.ctaPrimary}</span>
            <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href={`${contact.whatsappBaseUrl}?text=${encodeURIComponent(contact.whatsappDefaultText)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-9 py-4 rounded-full text-xs font-sans uppercase tracking-label font-bold text-white bg-[#101D45]/80 backdrop-blur-md border border-ice/30 hover:border-coral hover:text-coral transition-all duration-300 flex items-center gap-2.5 shadow-glow-ocean"
          >
            <MessageSquare className="w-4 h-4 text-coral" />
            <span>{hero.ctaSecondary}</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom Floating Glass "Find Your Home" Bar + Small Vertical Scroll Indicator */}
      <div className="relative z-30 max-w-7xl mx-auto px-5 sm:px-8 w-full mt-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65 }}
          className="p-4 sm:p-5 rounded-3xl bg-[#101D45]/95 backdrop-blur-xl border border-ice/25 shadow-card"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 items-center">
            {/* Location Select */}
            <div className="flex flex-col px-3.5 py-2 rounded-2xl bg-[#0A1330]/90 border border-ice/20 hover:border-coral/60 transition-colors">
              <span className="text-[11px] uppercase font-sans tracking-label text-ice font-bold flex items-center gap-1.5 mb-0.5">
                <MapPin className="w-3.5 h-3.5 text-coral shrink-0" /> Location
              </span>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="bg-[#0A1330] text-sm font-sans font-bold text-white focus:outline-none cursor-pointer border-none"
              >
                {searchFilters.locations.map((loc) => (
                  <option key={loc} value={loc} className="bg-[#101D45] text-white py-1.5">
                    {loc}
                  </option>
                ))}
              </select>
            </div>

            {/* Budget Select */}
            <div className="flex flex-col px-3.5 py-2 rounded-2xl bg-[#0A1330]/90 border border-ice/20 hover:border-coral/60 transition-colors">
              <span className="text-[11px] uppercase font-sans tracking-label text-ice font-bold flex items-center gap-1.5 mb-0.5">
                <IndianRupee className="w-3.5 h-3.5 text-coral shrink-0" /> Budget
              </span>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="bg-[#0A1330] text-sm font-sans font-bold text-white focus:outline-none cursor-pointer border-none"
              >
                {searchFilters.budgets.map((b) => (
                  <option key={b} value={b} className="bg-[#101D45] text-white py-1.5">
                    {b}
                  </option>
                ))}
              </select>
            </div>

            {/* Bedrooms Select */}
            <div className="flex flex-col px-3.5 py-2 rounded-2xl bg-[#0A1330]/90 border border-ice/20 hover:border-coral/60 transition-colors">
              <span className="text-[11px] uppercase font-sans tracking-label text-ice font-bold flex items-center gap-1.5 mb-0.5">
                <BedDouble className="w-3.5 h-3.5 text-coral shrink-0" /> Bedrooms
              </span>
              <select
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
                className="bg-[#0A1330] text-sm font-sans font-bold text-white focus:outline-none cursor-pointer border-none"
              >
                {searchFilters.bedrooms.map((bed) => (
                  <option key={bed} value={bed} className="bg-[#101D45] text-white py-1.5">
                    {bed}
                  </option>
                ))}
              </select>
            </div>

            {/* Type Select */}
            <div className="flex flex-col px-3.5 py-2 rounded-2xl bg-[#0A1330]/90 border border-ice/20 hover:border-coral/60 transition-colors">
              <span className="text-[11px] uppercase font-sans tracking-label text-ice font-bold flex items-center gap-1.5 mb-0.5">
                <Building2 className="w-3.5 h-3.5 text-coral shrink-0" /> Type
              </span>
              <select
                value={propertyType}
                onChange={(e) => setPropertyType(e.target.value)}
                className="bg-[#0A1330] text-sm font-sans font-bold text-white focus:outline-none cursor-pointer border-none"
              >
                {searchFilters.types.map((type) => (
                  <option key={type} value={type} className="bg-[#101D45] text-white py-1.5">
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Search Actions */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleSearchSubmit}
                className="flex-1 py-3.5 px-4 rounded-2xl bg-coral hover:bg-coral/90 text-white font-sans text-xs uppercase tracking-label font-bold flex items-center justify-center gap-2 shadow-glow-coral transition-transform active:scale-95 coral-liquid-btn"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search</span>
              </button>

              <button
                onClick={handleWhatsAppWithFilters}
                title="Send query with prefilled filters to WhatsApp"
                className="p-3.5 rounded-2xl bg-[#0A1330] hover:bg-ocean border border-ice/20 text-coral hover:text-white transition-colors"
                aria-label="WhatsApp with selected filters"
              >
                <MessageSquare className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Small Vertical Scroll Indicator */}
        <div className="flex flex-col items-center justify-center mt-5 text-ice/80 hover:text-ice transition-colors">
          <span className="text-[10px] uppercase tracking-widest font-sans mb-1 font-semibold">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce text-coral" />
        </div>
      </div>
    </section>
  );
};
