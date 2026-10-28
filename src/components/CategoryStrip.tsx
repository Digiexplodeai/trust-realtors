import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { siteContent, CategoryItem } from '../data/content';

interface CategoryStripProps {
  onCategoryClick?: (categoryName: string) => void;
}

export const CategoryStrip: React.FC<CategoryStripProps> = ({ onCategoryClick }) => {
  const { categories } = siteContent;
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section
      data-theme="dark"
      className="py-16 sm:py-20 lg:py-28 bg-[#0A1330] text-white overflow-hidden relative border-t border-b border-[#9DB8FF]/15"
    >
      {/* Background Soft Mesh Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#101D45]/60 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF7A3D]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-8 sm:mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
            Asset Classes
          </span>
          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
            Curated Category Portfolio
          </h2>
        </div>
        <span className="text-xs font-sans tracking-wide text-[#C9D3EE] font-semibold hidden sm:block">
          ← Drag or swipe horizontally to inspect all 7 tiers →
        </span>
      </div>

      {/* Seven Large Tiles in a Draggable / Swipeable Row */}
      <div
        ref={scrollRef}
        className="flex gap-6 px-5 sm:px-8 overflow-x-auto no-scrollbar snap-x snap-mandatory cursor-grab active:cursor-grabbing pb-4"
      >
        {categories.map((cat: CategoryItem) => (
          <motion.div
            key={cat.id}
            whileHover={{ y: -6 }}
            transition={{ duration: 0.3 }}
            onClick={() => onCategoryClick && onCategoryClick(cat.name)}
            className="group relative min-w-[300px] sm:min-w-[340px] md:min-w-[380px] h-[480px] rounded-3xl overflow-hidden border border-[#9DB8FF]/20 bg-[#101D45] shadow-[0_20px_50px_rgba(0,0,0,0.35)] snap-start flex flex-col justify-between p-7 select-none shrink-0 cursor-pointer"
          >
            {/* Background Photographic Image with Natural Grading */}
            <div className="absolute inset-0 bg-[#0A1330] overflow-hidden">
              <img
                src={cat.image}
                alt={cat.name}
                width={600}
                height={800}
                loading="lazy"
                className="w-full h-full object-cover cinematic-photo group-hover:scale-105 transition-transform duration-700 pointer-events-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A1330] via-[#0A1330]/55 to-[#0A1330]/20 group-hover:opacity-90 transition-opacity" />
            </div>

            {/* Top Row: Number & Arrow */}
            <div className="relative z-10 flex items-center justify-between">
              <span className="w-10 h-10 rounded-full bg-[#0A1330]/80 backdrop-blur-md border border-[#9DB8FF]/25 flex items-center justify-center font-display text-sm font-bold text-[#FF7A3D] shadow-sm">
                {cat.number}
              </span>
              <div className="w-10 h-10 rounded-full bg-[#0A1330]/70 backdrop-blur-md border border-[#9DB8FF]/25 flex items-center justify-center text-white group-hover:bg-[#FF7A3D] group-hover:border-[#FF7A3D] transition-all duration-300">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>

            {/* Bottom Content */}
            <div className="relative z-10">
              <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] font-bold block mb-1">
                Tier {cat.number}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight group-hover:text-[#FF7A3D] transition-colors">
                {cat.name}
              </h3>
              <p className="text-base text-[#C9D3EE] font-sans leading-relaxed line-clamp-3">
                {cat.description || cat.tagline}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
