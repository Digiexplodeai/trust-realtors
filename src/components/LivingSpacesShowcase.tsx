import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { siteContent, LivingSpaceItem } from '../data/content';

export const LivingSpacesShowcase: React.FC = () => {
  const items = siteContent.livingSpaces;
  const [activeId, setActiveId] = useState<string>(items[0].id);

  return (
    <section
      id="living-spaces"
      data-theme="dark"
      className="py-16 sm:py-20 lg:py-28 bg-[#0A1330] text-white relative overflow-hidden border-b border-[#9DB8FF]/15"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#101D45]/50 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10 mb-8 sm:mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold mb-2">
              <Sparkles className="w-4 h-4" />
              <span>Architectural Spatial Study</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              Living Spaces Showcase
            </h2>
            <p className="text-base sm:text-lg text-[#C9D3EE] mt-3 font-sans leading-relaxed">
              We evaluate every residence through the lens of architectural intent, material honesty, natural light, and the daily rituals of living.
            </p>
          </div>

          <span className="text-xs font-sans tracking-wide text-[#C9D3EE] font-semibold">
            Hover any panel to expand spatial study (~60% focus)
          </span>
        </div>
      </div>

      {/* Full-Bleed Desktop Vertical Expanding Panels (4 Panels) */}
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="hidden lg:flex gap-4 h-[580px] w-full max-w-7xl mx-auto">
          {items.map((item: LivingSpaceItem) => {
            const isActive = activeId === item.id;
            return (
              <motion.div
                key={item.id}
                layout
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setActiveId(item.id)}
                className={`relative cursor-pointer rounded-3xl overflow-hidden border border-[#9DB8FF]/20 transition-all duration-700 shadow-xl flex flex-col justify-end p-8 ${
                  isActive ? 'flex-[4] bg-[#101D45]' : 'flex-[1] bg-[#0A1330] hover:flex-[1.2]'
                }`}
              >
                {/* Background Photographic Image (architecture & interiors only, no people) */}
                <div className="absolute inset-0 bg-[#0A1330] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className={`w-full h-full object-cover cinematic-photo transition-transform duration-1000 ${
                      isActive ? 'scale-105' : 'scale-100'
                    }`}
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-700 ${
                      isActive
                        ? 'bg-gradient-to-t from-[#0A1330] via-[#0A1330]/50 to-transparent'
                        : 'bg-gradient-to-t from-[#0A1330] via-[#0A1330]/75 to-[#0A1330]/40 opacity-90'
                    }`}
                  />
                </div>

                {/* Top Number Pill */}
                <div className="absolute top-6 left-6 z-10 flex items-center justify-between w-[calc(100%-3rem)]">
                  <span className="w-10 h-10 rounded-full bg-[#0A1330]/80 backdrop-blur-md border border-[#9DB8FF]/25 flex items-center justify-center font-display text-sm font-bold text-[#FF7A3D] shadow-sm">
                    {item.number}
                  </span>

                  {!isActive && (
                    <span className="font-display font-bold text-lg text-white/90 rotate-90 origin-right translate-x-3 translate-y-12 whitespace-nowrap">
                      {item.title}
                    </span>
                  )}
                </div>

                {/* Expanded Details */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.45 }}
                      className="relative z-10 text-white max-w-xl"
                    >
                      <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-1">
                        {item.tagline}
                      </span>

                      <h3 className="font-display text-3xl sm:text-4xl font-extrabold text-white mb-3">
                        {item.title}
                      </h3>

                      <p className="text-base text-[#C9D3EE] font-sans leading-relaxed mb-6">
                        {item.description}
                      </p>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-[#9DB8FF]/25">
                        {item.highlights.map((h, hIdx) => (
                          <span
                            key={hIdx}
                            className="text-xs font-sans px-3.5 py-1.5 rounded-full bg-[#0A1330]/80 backdrop-blur-md border border-[#9DB8FF]/25 text-[#C9D3EE] font-bold"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile Stacked Full-Width Swipe Cards */}
        <div className="lg:hidden flex gap-5 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6">
          {items.map((item: LivingSpaceItem) => (
            <div
              key={item.id}
              className="min-w-[90%] sm:min-w-[75%] snap-center rounded-3xl overflow-hidden border border-[#9DB8FF]/20 bg-[#101D45] shadow-xl flex flex-col justify-end p-6 relative h-[480px] shrink-0"
            >
              <div className="absolute inset-0 bg-[#0A1330] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  width={600}
                  height={800}
                  loading="lazy"
                  className="w-full h-full object-cover cinematic-photo"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A1330] via-[#0A1330]/65 to-transparent" />
              </div>

              <div className="absolute top-4 left-4 z-10">
                <span className="w-9 h-9 rounded-full bg-[#0A1330]/80 backdrop-blur-md border border-[#9DB8FF]/25 flex items-center justify-center font-display text-sm font-bold text-[#FF7A3D]">
                  {item.number}
                </span>
              </div>

              <div className="relative z-10 text-white">
                <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-1">
                  {item.tagline}
                </span>

                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-base text-[#C9D3EE] font-sans leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-3 border-t border-[#9DB8FF]/20">
                  {item.highlights.map((h, hIdx) => (
                    <span
                      key={hIdx}
                      className="text-xs font-sans px-3 py-1 rounded-full bg-[#0A1330]/90 border border-[#9DB8FF]/25 text-[#C9D3EE] font-semibold"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
