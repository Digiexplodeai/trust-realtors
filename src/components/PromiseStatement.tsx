import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { siteContent } from '../data/content';

export const PromiseStatement: React.FC = () => {
  const { promise } = siteContent;
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 35%'],
  });

  const words = promise.quote.split(' ');

  return (
    <section
      ref={containerRef}
      data-theme="light"
      id="promise"
      className="relative section-padding bg-[#F5F7FB] text-[#0A1330] overflow-hidden flex items-center justify-center text-center border-b border-black/10"
    >
      {/* Subtle Mist Ambient Shapes */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] bg-[#E4EAF7]/80 blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
        <span className="text-xs uppercase tracking-label text-coral font-sans font-bold block mb-6">
          The Trust Realtors Standard
        </span>

        {/* Word-by-Word Scroll Highlight Paragraph: starting at 0.45 opacity (never invisible) to 1.0 */}
        <p className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.25] tracking-tight mb-8 text-[#0A1330]">
          {words.map((word, i) => {
            const start = i / words.length;
            const end = Math.min(1, start + 1.2 / words.length);

            const WordComponent: React.FC = () => {
              const opacity = useTransform(scrollYProgress, [start, end], [0.45, 1.0]);
              const color = useTransform(
                scrollYProgress,
                [start, end],
                [
                  '#6B7A99',
                  word.toLowerCase().includes('relationships') ||
                  word.toLowerCase().includes('protect') ||
                  word.toLowerCase().includes('generations') ||
                  word.toLowerCase().includes('homes')
                    ? '#FF7A3D'
                    : '#0A1330',
                ]
              );

              return (
                <motion.span
                  style={{ opacity, color }}
                  className="inline-block mr-[0.25em] transition-colors duration-150"
                >
                  {word}
                </motion.span>
              );
            };

            return <WordComponent key={i} />;
          })}
        </p>

        <p className="text-base sm:text-lg text-[#3B4766] font-sans font-medium max-w-2xl mx-auto leading-relaxed">
          {promise.caption}
        </p>
      </div>
    </section>
  );
};
