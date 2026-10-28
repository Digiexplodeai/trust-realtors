import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, EyeOff, Compass, Headphones } from 'lucide-react';
import { siteContent, PillarItem } from '../data/content';

const iconMap = {
  ShieldCheck: ShieldCheck,
  EyeOff: EyeOff,
  Compass: Compass,
  Headphones: Headphones,
};

export const WhyTrustStack: React.FC = () => {
  const pillars = siteContent.pillars;

  return (
    <section
      id="why-trust"
      data-theme="light"
      className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FB] text-[#0A1330] border-b border-[#0A1330]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl mb-8 sm:mb-10">
          <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
            Core Brand Promise
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1330] tracking-tight">
            Why Trust Realtors
          </h2>
          <p className="text-base sm:text-lg text-[#3B4766] mt-3 font-sans leading-relaxed">
            In an industry often marred by speculative hype, we anchor our advisory in verified ground facts, quiet discretion, and lifelong client advocacy.
          </p>
        </div>

        {/* 4 Overlapping Stacked Cards with 24px sticky offset each */}
        <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto relative pb-8">
          {pillars.map((pillar: PillarItem, index: number) => {
            const Icon = iconMap[pillar.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <motion.div
                key={pillar.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ top: `${96 + index * 24}px` }}
                className="sticky p-8 sm:p-12 rounded-3xl bg-white text-[#0A1330] border border-[#0A1330]/10 shadow-[0_20px_50px_rgba(10,19,48,0.08)] flex flex-col md:flex-row md:items-center justify-between gap-8 group hover:border-[#FF7A3D]/50 transition-colors"
              >
                <div className="flex items-start gap-6">
                  {/* Ice Blue Icon Bubble */}
                  <div className="w-16 h-16 rounded-2xl bg-[#E4EAF7] border border-[#9DB8FF]/40 flex items-center justify-center text-[#0A1330] shrink-0 shadow-sm group-hover:bg-[#FF7A3D] group-hover:text-white group-hover:border-[#FF7A3D] transition-colors duration-300">
                    <Icon className="w-8 h-8 stroke-[1.8]" />
                  </div>

                  <div>
                    <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-1.5">
                      {pillar.subtitle}
                    </span>

                    <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#0A1330] mb-3">
                      {pillar.title}
                    </h3>

                    <p className="text-base text-[#3B4766] font-sans leading-relaxed max-w-xl">
                      {pillar.description}
                    </p>
                  </div>
                </div>

                <div className="flex md:flex-col items-center md:items-end justify-between border-t md:border-t-0 md:border-l border-[#0A1330]/10 pt-4 md:pt-0 md:pl-8 text-xs font-sans text-[#3B4766]">
                  <span className="font-display text-4xl text-[#0A1330]/25 font-bold">
                    0{index + 1}
                  </span>
                  <span className="text-xs font-bold text-[#FF7A3D] tracking-wider uppercase mt-1">
                    Pillar Standard
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
