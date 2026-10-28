import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteContent } from '../data/content';
import { Logo } from './Logo';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Max 1.6s duration: logo draws in ~900ms, then door split reveal at 1300ms
    const timer = setTimeout(() => {
      setIsDone(true);
      setTimeout(onComplete, 600);
    }, 1300);

    return () => clearTimeout(timer);
  }, [onComplete]);

  const handleSkip = () => {
    setIsDone(true);
    setTimeout(onComplete, 300);
  };

  return (
    <AnimatePresence>
      {!isDone ? (
        <div className="fixed inset-0 z-[1000] overflow-hidden pointer-events-auto">
          {/* Two Doors Splitting Horizontally on Exit */}
          {/* Left Door */}
          <motion.div
            initial={{ x: '0%' }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 left-0 w-1/2 bg-midnight border-r border-ice/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-mesh-dark opacity-40 pointer-events-none" />
            <div className="absolute -top-40 -left-40 w-96 h-96 bg-ocean/50 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Right Door */}
          <motion.div
            initial={{ x: '0%' }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.7, ease: [0.77, 0, 0.175, 1] }}
            className="absolute top-0 bottom-0 right-0 w-1/2 bg-midnight border-l border-ice/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-mesh-dark opacity-40 pointer-events-none" />
            <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-coral/20 rounded-full blur-3xl pointer-events-none" />
          </motion.div>

          {/* Center Brand Draw-in Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            className="relative z-20 h-full w-full flex flex-col items-center justify-center text-center px-6"
          >
            {/* Monogram Brand Mark - fades and scales in at center */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative mb-6 flex items-center justify-center"
            >
              <Logo
                width={88}
                height={80}
                className="w-20 sm:w-24 h-auto object-contain"
              />
            </motion.div>

            {/* Brand Title: Bricolage Grotesque + Instrument Serif */}
            <div className="relative inline-block mb-3">
              <motion.h1
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-display text-4xl sm:text-6xl font-extrabold tracking-tight text-white"
              >
                TRUST <span className="font-accent italic font-normal text-coral">Realtors</span>
              </motion.h1>

              {/* Coral signature stroke drawing */}
              <svg
                className="w-full h-2.5 overflow-visible -mt-1"
                viewBox="0 0 280 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <motion.path
                  d="M2 6C60 2 160 2 278 7"
                  stroke="#FF7A3D"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: 'easeInOut' }}
                />
              </svg>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="text-xs font-sans uppercase tracking-label text-ice font-medium mt-1"
            >
              Every residence has a story
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.7, duration: 0.4 }}
              className="mt-2 text-[11px] font-sans tracking-widest uppercase text-lightText"
            >
              Panchkula • Chandigarh • Mohali
            </motion.div>

            {/* Skip Button */}
            <button
              onClick={handleSkip}
              className="mt-8 px-4 py-1.5 rounded-full border border-ice/20 text-[10px] font-sans uppercase tracking-widest text-lightText hover:text-white hover:border-coral transition-colors"
            >
              Skip Intro
            </button>
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
};
