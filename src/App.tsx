import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import { motion, AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { CategoryStrip } from './components/CategoryStrip';
import { PromiseStatement } from './components/PromiseStatement';
import { TricityMap } from './components/TricityMap';
import { MethodSticky } from './components/MethodSticky';
import { FeaturedPropertiesRail } from './components/FeaturedPropertiesRail';
import { LivingSpacesShowcase } from './components/LivingSpacesShowcase';
import { NumbersSection } from './components/NumbersSection';
import { WhyTrustStack } from './components/WhyTrustStack';
import { ClientVoices } from './components/ClientVoices';
import { FAQSection } from './components/FAQSection';
import { InquirySection } from './components/InquirySection';
import { Footer } from './components/Footer';
import { Marquee } from './components/Marquee';
import { PropertiesView } from './components/PropertiesView';
import { AboutView } from './components/AboutView';
import { ServicesView } from './components/ServicesView';
import { ContactView } from './components/ContactView';
import { FloatingActions } from './components/FloatingActions';
import { CookieBanner } from './components/CookieBanner';

export const App: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'properties' | 'contact'>('home');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [propertiesCityFilter, setPropertiesCityFilter] = useState('');
  const [propertiesCategoryFilter, setPropertiesCategoryFilter] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const lenisRef = useRef<Lenis | null>(null);

  // Wait for fonts to load before starting animations (avoids font flash)
  useEffect(() => {
    if (document.fonts) {
      document.fonts.ready.then(() => {
        setFontsLoaded(true);
      });
    } else {
      setFontsLoaded(true);
    }
  }, []);

  // Initialize Lenis Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const progress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, progress)));
      }
    };

    lenis.on('scroll', handleScroll);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Route & Anchor Navigation with Coral Wipe Page Transition
  const handleNavigate = (
    view: 'home' | 'about' | 'services' | 'properties' | 'contact',
    anchorId?: string
  ) => {
    if (view === currentView && anchorId) {
      const el = document.getElementById(anchorId);
      if (el) {
        if (lenisRef.current) {
          lenisRef.current.scrollTo(el, { offset: -90 });
        } else {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
      return;
    }

    // Trigger Coral Panel Transition Wipe
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentView(view);
      window.scrollTo({ top: 0, behavior: 'instant' });
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }

      if (view === 'home' && anchorId) {
        setTimeout(() => {
          const el = document.getElementById(anchorId);
          if (el) {
            if (lenisRef.current) {
              lenisRef.current.scrollTo(el, { offset: -90 });
            } else {
              el.scrollIntoView({ behavior: 'smooth' });
            }
          }
        }, 300);
      }

      setTimeout(() => {
        setIsTransitioning(false);
      }, 400);
    }, 350);
  };

  const handleHeroFilterSearch = (filters: { location: string; budget: string; bedrooms: string; type: string }) => {
    setPropertiesCityFilter(filters.location);
    setPropertiesCategoryFilter('All');
    handleNavigate('properties');
  };

  const handleAreaSelectFromMap = (areaName: string) => {
    setPropertiesCityFilter(areaName);
    handleNavigate('properties');
  };

  const handleCategorySelect = (categoryName: string) => {
    setPropertiesCategoryFilter(categoryName);
    handleNavigate('properties');
  };

  return (
    <div className="relative min-h-screen bg-midnight text-white font-sans selection:bg-coral selection:text-white">
      {/* Film Grain 3% Opacity Overlay */}
      <div className="film-grain" />

      {/* Intro Preloader (max 1.6s, coral logo draw, 2-door opening split reveal) */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Coral Panel Route Transition Wipe */}
      <AnimatePresence>
        {isTransitioning && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ scaleX: 0 }}
            style={{ transformOrigin: 'right' }}
            transition={{ duration: 0.35, ease: [0.77, 0, 0.175, 1] }}
            className="fixed inset-0 z-[500] bg-coral pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* 1. Header: Floating Glass Pill with 1px ice-blue border & adaptive dark/light color */}
      <Header
        currentView={currentView}
        onNavigate={handleNavigate}
        scrollProgress={scrollProgress}
      />

      {/* Main Pages Content */}
      <main>
        {currentView === 'home' && (
          <>
            {/* 2. Hero: Midnight, Full-viewport Video with zoom-through scroll & Find Your Home bar */}
            <Hero
              fontsReady={fontsLoaded && !loading}
              onExploreClick={() => handleNavigate('home', 'properties-rail')}
              onFilterSearch={handleHeroFilterSearch}
            />

            {/* Area Infinite Marquee Strip */}
            <Marquee />

            {/* 3. Category Strip: 7 large tiles horizontally draggable row */}
            <CategoryStrip onCategoryClick={handleCategorySelect} />

            {/* 4. Promise: Pearl White giant scroll-scrub statement (20% to 100% opacity) */}
            <PromiseStatement />

            {/* 5. Tricity Explorer: Midnight dark illustrated SVG map with glowing coral pins */}
            <TricityMap onSelectAreaProperties={handleAreaSelectFromMap} />

            {/* 6. Our Method: Pearl White sticky scroll with vertical progress line & 3 steps */}
            <MethodSticky onConsultClick={() => handleNavigate('home', 'inquiry')} />

            {/* 7. Featured Properties: Midnight horizontal property rail with 3D tilt & full modal */}
            <FeaturedPropertiesRail
              onViewAllClick={() => handleNavigate('properties')}
              selectedCityFilter={propertiesCityFilter}
            />

            {/* 8. Living Spaces Showcase: Full-bleed 4 vertical panels expanding to ~60% on hover */}
            <LivingSpacesShowcase />

            {/* 9. Numbers: Coral-to-navy gradient block with odometer counters & outlined TRUST */}
            <NumbersSection />

            {/* 10. Why Trust Realtors: Pearl White 4 stacking/flipping cards with ice-blue bubbles */}
            <WhyTrustStack />

            {/* 11. Client Voices: Midnight glowing gradient quote slider with progress bar */}
            <ClientVoices />

            {/* 12. FAQ: Pearl White sticky heading left, smooth accordion right */}
            <FAQSection />

            {/* 13. Inquiry: "Begin Your Legacy" Midnight with coral glow, split layout & glass form */}
            <InquirySection />
          </>
        )}

        {/* Dedicated Properties Listing Page */}
        {currentView === 'properties' && (
          <PropertiesView
            initialCityFilter={propertiesCityFilter}
            initialCategoryFilter={propertiesCategoryFilter}
          />
        )}

        {/* Dedicated About Page */}
        {currentView === 'about' && (
          <AboutView onContactClick={() => handleNavigate('contact')} />
        )}

        {/* Dedicated Services Page */}
        {currentView === 'services' && <ServicesView />}

        {/* Dedicated Contact Page */}
        {currentView === 'contact' && <ContactView />}
      </main>

      {/* 14. Footer: Midnight with giant revealing wordmark, Google Map embed, conditional RERA */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating Action Controls (Coral WhatsApp button + Mobile Call Now) */}
      <FloatingActions />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
};
