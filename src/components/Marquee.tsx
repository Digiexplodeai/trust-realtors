import React, { useRef } from 'react';
import { motion, useScroll, useVelocity, useSpring, useTransform, useMotionValue } from 'framer-motion';
import { siteContent } from '../data/content';

export const Marquee: React.FC = () => {
  const { marqueeAreas } = siteContent;
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Calculate velocity factor: reverses direction if scrolling up
  const velocityFactor = useTransform(smoothVelocity, [ -1000, 0, 1000 ], [ -3, 1, 3 ], {
    clamp: false,
  });

  return (
    <div
      ref={containerRef}
      className="py-6 sm:py-7 bg-deepOcean border-y border-ice/15 overflow-hidden select-none whitespace-nowrap relative z-10"
    >
      <div className="flex animate-marquee-infinite">
        {[...Array(4)].map((_, setIdx) => (
          <div key={setIdx} className="flex items-center gap-8 sm:gap-12 px-4 shrink-0">
            {marqueeAreas.map((area, idx) => (
              <React.Fragment key={idx}>
                <span
                  className="font-display text-2xl sm:text-4xl font-extrabold tracking-widest uppercase text-transparent transition-colors hover:text-white cursor-default"
                  style={{
                    WebkitTextStroke: '1px rgba(157, 184, 255, 0.45)',
                  }}
                >
                  {area}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-coral shadow-glow-coral" />
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
