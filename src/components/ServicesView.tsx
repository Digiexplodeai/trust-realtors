import React from 'react';
import { motion } from 'framer-motion';
import {
  Search,
  TrendingUp,
  FileText,
  Building,
  Key,
  ShieldCheck,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  FileCheck2,
} from 'lucide-react';
import { siteContent, ServiceItem } from '../data/content';

const iconMap = {
  Search: Search,
  TrendingUp: TrendingUp,
  FileText: FileText,
  Building: Building,
  Key: Key,
  ShieldCheck: ShieldCheck,
  FileCheck2: FileCheck2,
};

export const ServicesView: React.FC = () => {
  const { services, contact } = siteContent;

  const handleConsultService = (serviceTitle: string) => {
    const text = `Hi Trust Realtors, I would like to consult with your team regarding your "${serviceTitle}" advisory services.`;
    const url = `${contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div data-theme="dark" className="pt-24 pb-24 bg-[#0A1330] min-h-screen text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#101D45]/70 border-b border-[#9DB8FF]/15 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9DB8FF]/25 bg-[#0A1330]/90 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold mb-6 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#FF7A3D]" />
            <span>Advisory Practice</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight">
            Comprehensive Real Estate Advisory
          </h1>

          <p className="text-base sm:text-lg text-[#C9D3EE] font-sans max-w-2xl mx-auto leading-relaxed">
            From strategic plot acquisition to commercial portfolio structuring, our services safeguard value at every milestone.
          </p>
        </div>
      </section>

      {/* Services Grid (6 Core Practices) */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv: ServiceItem, index: number) => {
            const Icon = iconMap[srv.icon as keyof typeof iconMap] || ShieldCheck;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 shadow-xl flex flex-col justify-between hover:border-[#FF7A3D]/50 transition-all group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#0A1330] border border-[#9DB8FF]/25 flex items-center justify-center text-[#FF7A3D] mb-6 group-hover:bg-[#FF7A3D] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-7 h-7 stroke-[1.8]" />
                  </div>

                  <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] font-bold block mb-1">
                    Service 0{index + 1}
                  </span>

                  <h3 className="font-display text-2xl font-bold text-white mb-3 group-hover:text-[#FF7A3D] transition-colors">
                    {srv.title}
                  </h3>

                  <p className="text-base text-[#C9D3EE] font-sans leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  <div className="space-y-2 pt-4 border-t border-[#9DB8FF]/15 mb-8">
                    {srv.deliverables.map((d, dIdx) => (
                      <div key={dIdx} className="text-sm text-[#C9D3EE] flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-[#FF7A3D] shrink-0" />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => handleConsultService(srv.title)}
                  className="w-full py-3.5 px-4 rounded-2xl bg-[#0A1330] hover:bg-[#FF7A3D] text-white font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 border border-[#9DB8FF]/25 hover:border-[#FF7A3D] transition-all active:scale-95 cursor-pointer"
                >
                  <span>Inquire For This Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Representation Pathways (Dual Perspective: Buyers vs Sellers) */}
      <section data-theme="light" className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FB] text-[#0A1330] border-y border-[#0A1330]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
              Advisory Protocols
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A1330] tracking-tight">
              Representation Standards
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Buyer Mandate */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white text-[#0A1330] border border-[#0A1330]/10 shadow-[0_20px_50px_rgba(10,19,48,0.06)] space-y-6">
              <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-bold block">
                For Buyers & Capital Allocators
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A1330]">
                Acquisition Fiduciary Mandate
              </h3>
              <p className="text-base text-[#3B4766] leading-relaxed font-sans">
                We represent your interests with complete independence. Rather than peddling developer inventory, we screen the entire open and off-market landscape to identify assets that match your architectural, zoning, and capital objectives.
              </p>
              <div className="space-y-3 pt-4 border-t border-[#0A1330]/10 text-sm font-sans text-[#0A1330] font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                  <span>30-year revenue records & encumbrance certificate screening</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                  <span>Discreet off-market price discovery & structured counter-offers</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                  <span>Statutory urban authority liaison & registry representation</span>
                </div>
              </div>
            </div>

            {/* Seller Mandate */}
            <div className="p-8 sm:p-12 rounded-3xl bg-white text-[#0A1330] border border-[#0A1330]/10 shadow-[0_20px_50px_rgba(10,19,48,0.06)] space-y-6">
              <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-bold block">
                For Landowners & Asset Sellers
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-[#0A1330]">
                Discreet Liquidation Mandate
              </h3>
              <p className="text-base text-[#3B4766] leading-relaxed font-sans">
                Selling a trophy residence or high-value commercial parcel requires discretion to protect value and family privacy. We present your asset exclusively to vetted, verified buyers capable of clean closing.
              </p>
              <div className="space-y-3 pt-4 border-t border-[#0A1330]/10 text-sm font-sans text-[#0A1330] font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                  <span>Confidential NDA-bound buyer qualification prior to site inspection</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                  <span>No public distress listing or unauthorized broker circulation</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                  <span>Capital gains taxation alignment with your certified chartered accountant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
