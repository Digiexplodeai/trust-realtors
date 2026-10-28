import React from 'react';
import { motion } from 'framer-motion';
import { Check, ArrowRight, ShieldCheck } from 'lucide-react';
import { siteContent } from '../data/content';

interface MethodStickyProps {
  onConsultClick: () => void;
}

export const MethodSticky: React.FC<MethodStickyProps> = ({ onConsultClick }) => {
  const steps = siteContent.method;

  const stepImages = [
    'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80',
    'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1400&q=80',
  ];

  return (
    <section
      id="method"
      data-theme="light"
      className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FB] text-[#0A1330] border-b border-[#0A1330]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky Title & Vertical Progress Line (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold mb-2">
              <ShieldCheck className="w-4 h-4" />
              <span>Advisory Protocol</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1330] leading-[1.08] mb-4">
              Crafted with <br />
              <span className="font-accent italic font-normal text-[#FF7A3D]">precision.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#3B4766] font-sans leading-relaxed mb-6">
              Real estate in the Tricity demands meticulous diligence. Our disciplined three-stage protocol guarantees exhaustive legal vetting, quiet representation, and enduring capital appreciation.
            </p>

            {/* Vertical Progress Line & Steps list */}
            <div className="relative pl-6 border-l-2 border-[#FF7A3D]/40 space-y-6 mb-8 hidden sm:block">
              {steps.map((s) => (
                <div key={s.number} className="relative group">
                  {/* Glowing Coral Pin on Line */}
                  <span className="absolute -left-[31px] top-1 w-3.5 h-3.5 rounded-full bg-[#F5F7FB] border-2 border-[#FF7A3D]" />
                  <span className="text-xs uppercase tracking-wider font-bold text-[#FF7A3D] block mb-0.5">
                    Stage {s.number}
                  </span>
                  <span className="font-display text-base font-bold text-[#0A1330] block">
                    {s.title}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={onConsultClick}
              className="px-8 py-4 rounded-full text-xs font-sans uppercase tracking-wider font-bold text-white bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 shadow-md transition-all duration-300 inline-flex items-center gap-2.5 active:scale-95 cursor-pointer"
            >
              <span>Schedule Consultation</span>
              <ArrowRight className="w-4 h-4 text-white" />
            </button>
          </div>

          {/* Right Column: 3 Large Scrolling Steps with Natural Grade Images (7 cols) */}
          <div className="lg:col-span-7 space-y-8 sm:space-y-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="p-8 sm:p-12 rounded-3xl bg-white text-[#0A1330] border border-[#0A1330]/10 shadow-[0_20px_50px_rgba(10,19,48,0.06)] flex flex-col justify-between overflow-hidden relative group"
              >
                {/* Photographic Image on Top */}
                <div className="relative h-64 sm:h-80 w-full rounded-2xl overflow-hidden mb-8 border border-[#0A1330]/10 bg-[#0A1330]">
                  <img
                    src={stepImages[index]}
                    alt={step.title}
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-full object-cover cinematic-photo group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1330]/60 via-transparent to-transparent" />
                  <div className="absolute top-4 left-4 w-12 h-12 rounded-full bg-[#0A1330]/90 backdrop-blur-md border border-[#9DB8FF]/30 flex items-center justify-center font-display text-base text-[#FF7A3D] font-bold shadow-sm">
                    {step.number}
                  </div>
                </div>

                <div>
                  <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-1">
                    {step.subtitle}
                  </span>

                  <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1330] mb-3">
                    {step.title}
                  </h3>

                  <p className="text-base text-[#3B4766] font-sans leading-relaxed mb-6">
                    {step.description}
                  </p>

                  <div className="pt-6 border-t border-[#0A1330]/10 space-y-2.5">
                    {step.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-[#0A1330] font-sans font-medium">
                        <Check className="w-4 h-4 text-[#FF7A3D] shrink-0 mt-1" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
