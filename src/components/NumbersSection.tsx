import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { siteContent, StatItem } from '../data/content';

const CounterItem: React.FC<{ stat: StatItem; index: number }> = ({ stat, index }) => {
  const [currentVal, setCurrentVal] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.value;
    const duration = 1600;
    const stepTime = 25;
    const totalSteps = duration / stepTime;
    const increment = end / totalSteps;

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrentVal(end);
        clearInterval(timer);
      } else {
        setCurrentVal(Math.floor(start));
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.7, delay: index * 0.15 }}
      className="p-8 sm:p-10 rounded-3xl bg-[#101D45] text-white border border-[#9DB8FF]/20 relative group hover:border-[#FF7A3D]/50 transition-colors shadow-xl"
    >
      <div className="flex items-baseline gap-1 mb-3">
        <span className="font-display text-5xl sm:text-6xl lg:text-7xl text-white font-extrabold leading-none tracking-tight">
          {isInView ? currentVal : stat.value}
        </span>
        <span className="font-display text-3xl sm:text-4xl text-[#FF7A3D] font-bold">
          {stat.suffix}
        </span>
      </div>

      <div className="flex items-center justify-between mb-2">
        <h3 className="font-sans text-xs uppercase tracking-wider text-[#FF7A3D] font-bold">
          {stat.label}
        </h3>
      </div>

      <p className="font-sans text-base text-[#C9D3EE] leading-relaxed">
        {stat.description}
      </p>
    </motion.div>
  );
};

export const NumbersSection: React.FC = () => {
  const stats = siteContent.stats;

  return (
    <section
      data-theme="dark"
      className="py-16 sm:py-20 lg:py-28 bg-[#0A1330] text-white relative overflow-hidden border-b border-[#9DB8FF]/15"
    >
      {/* Giant Outlined Watermark "TRUST" behind */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none text-[26vw] font-display leading-none text-transparent font-extrabold tracking-widest whitespace-nowrap z-0 opacity-10"
        style={{
          WebkitTextStroke: '2px rgba(157, 184, 255, 0.35)',
        }}
      >
        TRUST
      </div>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-2xl mb-8 sm:mb-10 text-center sm:text-left">
          <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
            Audited Metrics
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
            Our Track Record in Numbers
          </h2>
          <p className="text-base sm:text-lg text-[#C9D3EE] mt-3 font-sans leading-relaxed">
            Over a decade of quiet advisory, verified transactions, and safeguarding capital for discerning North Indian families.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <CounterItem key={stat.id} stat={stat} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
