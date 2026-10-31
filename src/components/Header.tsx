import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ArrowUpRight, MessageCircle } from 'lucide-react';
import { siteContent } from '../data/content';
import { Logo } from './Logo';

interface HeaderProps {
  currentView: 'home' | 'about' | 'services' | 'properties' | 'contact';
  onNavigate: (view: 'home' | 'about' | 'services' | 'properties' | 'contact', anchorId?: string) => void;
  scrollProgress: number;
}

export const Header: React.FC<HeaderProps> = ({ currentView, onNavigate, scrollProgress }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isOverLight, setIsOverLight] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 30);

      // Hide on scroll down, show on scroll up
      if (currentScrollY > 150 && currentScrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);

      // Check if header is over light section
      const headerEl = document.querySelector('header');
      const rect = headerEl?.getBoundingClientRect();
      const checkY = rect ? rect.top + rect.height / 2 : 40;
      if (typeof document.elementsFromPoint === 'function') {
        const elements = document.elementsFromPoint(window.innerWidth / 2, checkY);
        const overLight = elements.some((el) => {
          if (el.closest('header')) return false;
          return Boolean(el.closest('[data-theme="light"]'));
        });
        setIsOverLight(overLight);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { label: 'Home', view: 'home' as const, anchor: 'hero' },
    { label: 'About', view: 'about' as const },
    { label: 'Services', view: 'services' as const },
    { label: 'Properties', view: 'properties' as const },
    { label: 'Contact', view: 'contact' as const },
  ];

  const handleNavClick = (view: 'home' | 'about' | 'services' | 'properties' | 'contact', anchor?: string) => {
    setMobileMenuOpen(false);
    onNavigate(view, anchor);
  };

  return (
    <>
      {/* Scroll Progress Bar in Coral Saffron at very top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-midnight/30 pointer-events-none">
        <div
          className="h-full bg-coral transition-all duration-150 ease-out shadow-glow-coral"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Floating Pill Header - Hide on scroll down, show on scroll up */}
      <header
        className={`fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none transition-transform duration-300 ${
          showHeader ? 'translate-y-0' : '-translate-y-28'
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between pointer-events-auto">
          {/* Glass Pill (Adaptive white on light, navy on dark) */}
          <div
            className={`w-full flex items-center justify-between px-5 sm:px-7 py-2.5 sm:py-3 rounded-full transition-all duration-300 ${
              isOverLight
                ? 'bg-white/95 backdrop-blur-md shadow-[0_12px_40px_rgba(10,19,48,0.12)] border border-[#0A1330]/15 text-[#0A1330]'
                : isScrolled
                ? 'bg-[#0A1330]/95 backdrop-blur-md shadow-card border border-[#9DB8FF]/25 text-white'
                : 'bg-[#0A1330]/80 backdrop-blur-sm shadow-glow-ocean border border-[#9DB8FF]/20 text-white'
            }`}
          >
            {/* Brand Logo with Monogram */}
            <button
              onClick={() => handleNavClick('home', 'hero')}
              className="flex items-center gap-3 text-left focus:outline-none group cursor-pointer"
              aria-label="Trust Realtors Home"
            >
              <Logo
                width={46}
                height={42}
                className="h-10 sm:h-11 w-auto object-contain shrink-0 transition-transform duration-300 group-hover:scale-105"
              />

              <div className="flex flex-col">
                <span
                  className={`font-display text-xl sm:text-2xl font-bold tracking-tight transition-colors leading-none ${
                    isOverLight ? 'text-[#0A1330] group-hover:text-coral' : 'text-white group-hover:text-coral'
                  }`}
                >
                  Trust Realtors
                </span>
                <span
                  className={`text-[10px] uppercase tracking-label mt-0.5 hidden sm:block font-semibold ${
                    isOverLight ? 'text-[#3B4766]' : 'text-lightText'
                  }`}
                >
                  Mohali • Tricity
                </span>
              </div>
            </button>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-7 lg:gap-9" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = currentView === item.view;
                return (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item.view, item.anchor)}
                    className="relative py-1 text-xs uppercase tracking-label font-sans font-semibold transition-colors duration-200 cursor-pointer"
                  >
                    <span
                      className={
                        isActive
                          ? 'text-coral font-bold'
                          : isOverLight
                          ? 'text-[#3B4766] hover:text-[#0A1330] transition-colors'
                          : 'text-lightText hover:text-white transition-colors'
                      }
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <motion.span
                        layoutId="activeNavIndicator"
                        className="absolute -bottom-1 left-0 right-0 h-[2px] bg-coral rounded-full shadow-glow-coral"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Actions: Coral "Let's Connect" Button (WhatsApp) & Mobile Menu Trigger */}
            <div className="flex items-center gap-3">
              <a
                href={`${siteContent.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                  siteContent.contact.whatsappDefaultText
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-sans uppercase tracking-label font-bold text-white bg-coral hover:bg-coral/90 shadow-glow-coral transition-all duration-300 active:scale-95 coral-liquid-btn"
              >
                <span>Let's Connect</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[2.5]" />
              </a>

              {/* Mobile Hamburger Toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className={`md:hidden p-2.5 rounded-full border transition-colors focus:outline-none cursor-pointer ${
                  isOverLight
                    ? 'border-[#0A1330]/20 bg-[#F5F7FB] text-[#0A1330] hover:text-coral'
                    : 'border-ice/20 bg-ocean/70 text-white hover:text-coral'
                }`}
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Full-Screen Midnight Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-midnight/98 backdrop-blur-2xl flex flex-col justify-between pt-24 pb-10 px-8 md:hidden text-white overflow-hidden"
          >
            {/* Expanding Coral Ambient Sphere */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 0.25 }}
              exit={{ scale: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-coral blur-3xl pointer-events-none"
            />

            {/* Mobile Header Brand Bar */}
            <div className="relative z-10 flex items-center justify-between pb-6 border-b border-ice/15">
              <div className="flex items-center gap-3">
                <Logo
                  width={46}
                  height={42}
                  className="h-10 w-auto object-contain shrink-0"
                />
                <span className="font-display text-2xl font-bold tracking-tight text-white leading-none">
                  Trust Realtors
                </span>
              </div>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2.5 rounded-full border border-ice/20 bg-ocean/70 text-white hover:text-coral focus:outline-none cursor-pointer"
                aria-label="Close Navigation Menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Staggered Giant Navigation Links */}
            <nav className="flex flex-col gap-6 relative z-10 my-auto">
              {navItems.map((item, idx) => (
                <motion.button
                  key={item.label}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ delay: 0.1 + idx * 0.08, duration: 0.4 }}
                  onClick={() => handleNavClick(item.view, item.anchor)}
                  className="text-left font-display text-4xl sm:text-5xl font-extrabold tracking-tight hover:text-coral transition-colors flex items-center justify-between group cursor-pointer"
                >
                  <span className={currentView === item.view ? 'text-coral' : 'text-white'}>
                    {item.label}
                  </span>
                  <span className="text-xs uppercase font-sans tracking-label text-ice opacity-60 group-hover:text-coral">
                    0{idx + 1}
                  </span>
                </motion.button>
              ))}
            </nav>

            {/* Bottom Mobile Details */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="relative z-10 pt-6 border-t border-ice/15 flex flex-col gap-4 text-xs font-sans text-lightText"
            >
              <div className="flex items-center justify-between">
                <span>Direct WhatsApp:</span>
                <a
                  href={`${siteContent.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                    siteContent.contact.whatsappDefaultText
                  )}`}
                  className="text-coral font-bold flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  {siteContent.brand.phone}
                </a>
              </div>
              <p className="text-[11px] leading-relaxed text-lightText">
                {siteContent.brand.address}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
