import React from 'react';
import { motion } from 'framer-motion';
import { Award, Shield, ArrowRight } from 'lucide-react';
import { siteContent, MilestoneItem } from '../data/content';
import { Logo } from './Logo';

interface AboutViewProps {
  onContactClick: () => void;
}

export const AboutView: React.FC<AboutViewProps> = ({ onContactClick }) => {
  const { about } = siteContent;

  return (
    <div data-theme="dark" className="pt-24 pb-24 bg-[#0A1330] min-h-screen text-white">
      {/* Hero Header */}
      <section className="py-16 sm:py-24 bg-[#101D45]/70 border-b border-[#9DB8FF]/15 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#9DB8FF]/25 bg-[#0A1330]/90 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold mb-6 shadow-sm">
            <Award className="w-4 h-4 text-[#FF7A3D]" />
            <span>{about.badge}</span>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold text-white leading-[1.08] mb-6 tracking-tight">
            {about.heading}
          </h1>

          <p className="text-base sm:text-lg text-[#C9D3EE] font-sans max-w-2xl mx-auto leading-relaxed">
            Guided by transparency, governed by discretion. Discover the heritage and commitment behind Trust Realtors.
          </p>
        </div>
      </section>

      {/* Brand Story Narrative */}
      <section className="py-16 sm:py-24 max-w-5xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-16">
          <div className="shrink-0 flex flex-col items-center text-center">
            <Logo
              width={220}
              height={220}
              className="w-48 h-48 sm:w-56 sm:h-56 object-contain transition-transform duration-500 hover:scale-105"
            />
            <span className="text-xs uppercase tracking-widest text-[#FF7A3D] font-bold mt-4 font-sans">
              Seal of Excellence
            </span>
          </div>
          <div className="space-y-6 text-base sm:text-lg font-sans text-[#C9D3EE] leading-relaxed flex-1">
            <p className="first-letter:font-display first-letter:text-6xl first-letter:text-[#FF7A3D] first-letter:mr-3 first-letter:float-left first-letter:leading-none text-white font-medium">
              {about.storyP1}
            </p>
            <p>{about.storyP2}</p>
            <p className="border-l-2 border-[#FF7A3D] pl-6 py-2 text-white italic font-accent text-xl sm:text-2xl">
              {about.storyP3}
            </p>
          </div>
        </div>
      </section>

      {/* Foundational Values (Pearl Light Section) */}
      <section data-theme="light" className="py-16 sm:py-20 lg:py-28 bg-[#F5F7FB] text-[#0A1330] border-y border-[#0A1330]/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center mb-8 sm:mb-12">
            <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
              Our Operating Code
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-[#0A1330] tracking-tight">
              Foundational Values
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {about.values.map((val) => (
              <div
                key={val.title}
                className="p-8 rounded-3xl bg-white text-[#0A1330] border border-[#0A1330]/10 shadow-[0_20px_50px_rgba(10,19,48,0.06)] flex flex-col justify-between hover:border-[#FF7A3D]/40 transition-colors"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#E4EAF7] border border-[#9DB8FF]/40 flex items-center justify-center text-[#0A1330] mb-6">
                    <Shield className="w-6 h-6 text-[#FF7A3D]" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-[#0A1330] mb-3">
                    {val.title}
                  </h3>
                  <p className="text-base text-[#3B4766] leading-relaxed font-sans">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Timeline */}
      <section className="py-16 sm:py-24 bg-[#0A1330] text-white relative border-b border-[#9DB8FF]/15 overflow-hidden">
        <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
              Evolution of Trust
            </span>
            <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              A Decade of Diligence
            </h2>
            <p className="text-base text-[#C9D3EE] font-sans max-w-xl mx-auto mt-3 leading-relaxed">
              Key milestones shaping our position as the benchmark in luxury property advisory across the Tricity.
            </p>
          </div>

          {/* Timeline Spine */}
          <div className="relative border-l-2 border-[#FF7A3D]/40 ml-4 sm:ml-32 space-y-12">
            {about.milestones.map((milestone: MilestoneItem, idx: number) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: 25 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="relative pl-8 sm:pl-12 group"
              >
                {/* Year Pin */}
                <div className="absolute -left-[17px] top-1.5 w-8 h-8 rounded-full bg-[#101D45] border-2 border-[#FF7A3D] flex items-center justify-center shadow-md">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF7A3D]" />
                </div>

                {/* Left Year Badge */}
                <div className="sm:absolute sm:-left-32 sm:top-1 sm:text-right sm:w-20 mb-2 sm:mb-0">
                  <span className="font-display text-xl sm:text-2xl font-extrabold text-[#FF7A3D]">
                    {milestone.year}
                  </span>
                </div>

                {/* Milestone Card */}
                <div className="p-6 sm:p-8 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 shadow-xl hover:border-[#FF7A3D]/50 transition-colors">
                  <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] font-bold block mb-1">
                    Milestone 0{idx + 1}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-base text-[#C9D3EE] font-sans leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisory Leadership */}
      <section className="py-16 sm:py-20 max-w-6xl mx-auto px-5 sm:px-8">
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
            Advisory Council
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Consultancy Leadership
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              role: 'Managing Director & Founder',
              title: 'Senior Partner',
              focus: 'Tricity Land & Prime Residential',
            },
            {
              role: 'Head of Legal Due Diligence',
              title: 'Legal Counsel',
              focus: 'Title Deeds & Revenue Records',
            },
            {
              role: 'Head of Commercial Investments',
              title: 'Principal Advisor',
              focus: 'High-Street Retail & Grade-A Offices',
            },
          ].map((leader, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 shadow-xl flex flex-col justify-between hover:border-[#FF7A3D]/40 transition-colors"
            >
              <div>
                <span className="text-xs font-sans uppercase tracking-wider text-[#FF7A3D] font-bold block mb-2">
                  0{idx + 1} • {leader.title}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-2">
                  {leader.role}
                </h3>
                <p className="text-base text-[#C9D3EE] font-sans">
                  Specialization: {leader.focus}
                </p>
              </div>
              <div className="pt-6 mt-6 border-t border-[#9DB8FF]/15 text-xs text-[#C9D3EE] font-bold uppercase tracking-wider">
                Trust Realtors Advisory Council
              </div>
            </div>
          ))}
        </div>

        {/* Action Banner */}
        <div className="mt-14 p-8 sm:p-12 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/25 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="font-display text-2xl font-bold text-white mb-2">
              Discuss Your Property Requirements
            </h3>
            <p className="text-base text-[#C9D3EE] font-sans">
              Visit our SCO 23 MDC Panchkula office for a confidential briefing.
            </p>
          </div>
          <button
            onClick={onContactClick}
            className="px-8 py-4 rounded-full bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-white font-sans text-xs uppercase tracking-wider font-bold shadow-md flex items-center gap-2 active:scale-95 shrink-0 cursor-pointer"
          >
            <span>Book Consultation</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </section>
    </div>
  );
};
