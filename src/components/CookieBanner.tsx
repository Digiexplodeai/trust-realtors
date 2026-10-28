import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('trust_realtors_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('trust_realtors_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem('trust_realtors_cookie_consent', 'rejected');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 25 }}
          transition={{ duration: 0.35 }}
          className="fixed bottom-6 left-6 z-50 max-w-sm p-6 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/30 shadow-2xl text-white font-sans"
        >
          <div className="flex items-start gap-3 mb-3">
            <ShieldCheck className="w-5 h-5 text-[#FF7A3D] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-xs uppercase tracking-wider font-bold text-white">
                Discretion & Privacy Notice
              </h4>
              <p className="text-sm text-[#C9D3EE] mt-1.5 leading-relaxed">
                We use privacy-respecting cookies to optimize site navigation and analyze traffic. We never sell your personal browsing data.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 pt-2">
            <button
              onClick={handleAccept}
              className="flex-1 py-2.5 px-4 rounded-full bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-white text-xs uppercase tracking-wider font-bold shadow-md transition-colors text-center cursor-pointer"
            >
              Accept
            </button>
            <button
              onClick={handleReject}
              className="py-2.5 px-4 rounded-full border border-[#9DB8FF]/30 text-xs uppercase tracking-wider font-bold text-[#C9D3EE] hover:text-white hover:border-[#9DB8FF]/60 transition-colors cursor-pointer"
            >
              Decline
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
