import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle, ArrowUpRight } from 'lucide-react';
import { siteContent, FAQItem } from '../data/content';

export const FAQSection: React.FC = () => {
  const faqs = siteContent.faqs;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      data-theme="light"
      className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FB] text-[#0A1330] border-b border-[#0A1330]/10 relative"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Sticky Heading & Advisory Context (5 cols) */}
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="inline-flex items-center gap-2 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold mb-2">
              <HelpCircle className="w-4 h-4" />
              <span>Clarity & Governance</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#0A1330] leading-[1.08] mb-4">
              Frequently Asked <br />
              <span className="font-accent italic font-normal text-[#FF7A3D]">Questions.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#3B4766] font-sans leading-relaxed mb-6">
              Straightforward answers regarding our property verification protocol, fee transparency, legal title screening, and transaction representation across the Tricity.
            </p>

            <div className="p-6 rounded-2xl bg-white text-[#0A1330] border border-[#0A1330]/10 shadow-sm hidden sm:block">
              <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-bold block mb-1.5">
                Need bespoke guidance?
              </span>
              <p className="text-sm text-[#3B4766] mb-4 leading-relaxed">
                Our senior advisory partners are available for confidential consultations at our Panchkula headquarters.
              </p>
              <a
                href={`${siteContent.contact.whatsappBaseUrl}?text=${encodeURIComponent(
                  'Hi Trust Realtors, I have a specific question regarding real estate advisory in Tricity.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-sans font-bold text-[#FF7A3D] hover:underline uppercase tracking-wider"
              >
                <span>Ask via WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Right Column: Accordion with Smooth Height Animation (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {faqs.map((faq: FAQItem, index: number) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.id || index}
                  className="rounded-2xl border border-[#0A1330]/10 bg-white text-[#0A1330] shadow-sm overflow-hidden transition-all duration-200 hover:border-[#FF7A3D]/40"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full p-6 sm:p-7 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display text-lg sm:text-xl font-bold text-[#0A1330]">
                      {faq.question}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-[#FF7A3D] text-white'
                          : 'bg-[#F0F4FC] text-[#0A1330] border border-[#0A1330]/10'
                      }`}
                    >
                      {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: 'easeInOut' }}
                      >
                        <div className="px-6 sm:px-7 pb-6 sm:pb-7 pt-4 text-base text-[#3B4766] font-sans leading-relaxed border-t border-[#0A1330]/10">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
