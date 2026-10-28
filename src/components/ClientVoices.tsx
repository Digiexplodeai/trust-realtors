import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight, MessageSquare, Star } from 'lucide-react';
import { siteContent } from '../data/content';

export const ClientVoices: React.FC = () => {
  const testimonials = siteContent.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slider gently every 8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      data-theme="dark"
      className="py-16 sm:py-20 lg:py-28 bg-[#0A1330] text-white relative overflow-hidden border-b border-[#9DB8FF]/15"
    >
      {/* Background Soft Glowing Gradient Spheres */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[450px] bg-[#101D45]/60 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[450px] h-[350px] bg-[#FF7A3D]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="flex items-center justify-between mb-8 sm:mb-10">
          <div className="inline-flex items-center gap-2 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold">
            <MessageSquare className="w-4 h-4" />
            <span>Private Client Testimonials</span>
          </div>

          {/* Progress Bar Indicator */}
          <div className="flex items-center gap-3">
            <span className="text-sm font-sans text-[#C9D3EE] font-bold">
              0{currentIndex + 1} / 0{testimonials.length}
            </span>
            <div className="w-24 h-1.5 bg-[#101D45] rounded-full overflow-hidden border border-[#9DB8FF]/25">
              <motion.div
                className="h-full bg-[#FF7A3D]"
                initial={{ width: '0%' }}
                animate={{ width: `${((currentIndex + 1) / testimonials.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Giant Quote Display Card on Surface */}
        <div className="p-8 sm:p-12 lg:p-14 rounded-3xl bg-[#101D45] text-white border border-[#9DB8FF]/20 shadow-[0_25px_60px_rgba(0,0,0,0.35)] relative min-h-[360px] flex flex-col justify-between">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeOut' }}
              className="space-y-6"
            >
              {/* Quote Mark */}
              <div className="w-12 h-12 rounded-2xl bg-[#0A1330] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] shadow-sm">
                <Quote className="w-6 h-6 stroke-[2]" />
              </div>

              {/* Giant Quote Text */}
              <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl text-white font-bold leading-[1.38] tracking-tight">
                "{current.quote}"
              </blockquote>

              {/* Attribution */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#9DB8FF]/15">
                <div>
                  <h4 className="font-display text-xl font-bold text-white mb-0.5">
                    {current.client}
                  </h4>
                  <span className="text-xs uppercase font-sans tracking-wider text-[#C9D3EE] font-bold block">
                    {current.location}
                  </span>
                </div>

                <div className="flex items-center gap-1.5 text-[#FF7A3D]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#FF7A3D]" />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3 pt-6 mt-6 border-t border-[#9DB8FF]/10">
            <button
              onClick={handlePrev}
              className="p-3.5 rounded-full bg-[#0A1330] hover:bg-[#192B60] border border-[#9DB8FF]/25 text-white hover:text-[#FF7A3D] transition-colors active:scale-95 shadow-sm cursor-pointer"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="p-3.5 rounded-full bg-[#0A1330] hover:bg-[#192B60] border border-[#9DB8FF]/25 text-white hover:text-[#FF7A3D] transition-colors active:scale-95 shadow-sm cursor-pointer"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
