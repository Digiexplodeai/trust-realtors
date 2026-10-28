import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { siteContent, MapArea } from '../data/content';

interface TricityMapProps {
  onSelectAreaProperties: (areaName: string) => void;
}

export const TricityMap: React.FC<TricityMapProps> = ({ onSelectAreaProperties }) => {
  const { mapExplorer } = siteContent;
  const [activeAreaId, setActiveAreaId] = useState<string>(mapExplorer.areas[0].id);

  const activeArea = mapExplorer.areas.find((a) => a.id === activeAreaId) || mapExplorer.areas[0];

  return (
    <section
      id="tricity-map"
      data-theme="dark"
      className="py-16 sm:py-20 lg:py-28 bg-[#0A1330] text-white relative overflow-hidden border-b border-[#9DB8FF]/15"
    >
      {/* Background Soft Mesh Gradients */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#101D45]/60 blur-3xl rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF7A3D]/10 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header - Single Heading Instance */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-4">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold mb-2">
              <Compass className="w-4 h-4" />
              <span>Micro-Market Cartography</span>
            </div>
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              {mapExplorer.title}
            </h2>
            <p className="text-base sm:text-lg text-[#C9D3EE] mt-3 font-sans leading-relaxed">
              {mapExplorer.subtitle}
            </p>
          </div>

          <span className="text-xs font-sans tracking-wide text-[#C9D3EE] font-semibold">
            Tap any region pin or select from the corridor list
          </span>
        </div>

        {/* 2-Column Layout: Dark Illustrated SVG Map (Left) + Dossier & Corridors (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left: Illustrated Dark SVG Map (7 cols) */}
          <div className="lg:col-span-7 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#9DB8FF]/15 text-xs font-sans text-[#C9D3EE]">
              <span className="flex items-center gap-1.5 font-bold text-white">
                <Sparkles className="w-4 h-4 text-[#FF7A3D]" /> Tricity Regional Corridors
              </span>
              <span className="text-[#C9D3EE] font-semibold">30.7086° N, 76.8488° E</span>
            </div>

            {/* Stylized Illustrated Dark Vector Map */}
            <div className="relative w-full aspect-[4/3] rounded-2xl bg-[#0A1330] border border-[#9DB8FF]/15 overflow-hidden">
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Shivalik Mountain Contours in the North */}
                <path
                  d="M50 2 C60 12, 75 9, 85 4 M80 2 C88 10, 95 14, 100 10 M70 6 C78 16, 88 14, 100 20"
                  stroke="#9DB8FF"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  fill="none"
                  opacity="0.45"
                />
                <text x="82" y="10" fontSize="2.5" fontFamily="sans-serif" fill="#9DB8FF" opacity="0.8" letterSpacing="0.1em" fontWeight="bold">
                  SHIVALIK FOOTHILLS
                </text>

                {/* Regional Landscape Zones with Cool Tones */}
                <path
                  d="M25 15 C35 12, 45 18, 48 28 C42 34, 30 32, 25 15 Z"
                  fill="#101D45"
                  stroke="#9DB8FF"
                  strokeWidth="0.6"
                  strokeDasharray="1 1"
                  opacity="0.9"
                />

                <path
                  d="M40 32 C55 30, 58 42, 54 48 C45 52, 38 45, 40 32 Z"
                  fill="#192B60"
                  stroke="#9DB8FF"
                  strokeWidth="0.6"
                  opacity="0.9"
                />

                <path
                  d="M58 40 C75 38, 82 52, 75 62 C65 62, 58 50, 58 40 Z"
                  fill="#FF7A3D"
                  fillOpacity="0.15"
                  stroke="#FF7A3D"
                  strokeWidth="0.8"
                />

                <path
                  d="M22 45 C35 45, 42 58, 38 68 C25 68, 18 55, 22 45 Z"
                  fill="#101D45"
                  stroke="#9DB8FF"
                  strokeWidth="0.6"
                  opacity="0.85"
                />

                <path
                  d="M50 62 C68 62, 72 75, 62 82 C48 80, 48 70, 50 62 Z"
                  fill="#192B60"
                  stroke="#9DB8FF"
                  strokeWidth="0.6"
                  opacity="0.8"
                />

                <path
                  d="M78 14 C86 12, 92 18, 88 26 C82 28, 76 22, 78 14 Z"
                  fill="#101D45"
                  stroke="#9DB8FF"
                  strokeWidth="0.6"
                  opacity="0.8"
                />

                {/* Connecting Lines Drawing Between Pins */}
                <motion.path
                  d="M32 55 Q48 40 68 48"
                  stroke="#FF7A3D"
                  strokeWidth="0.9"
                  strokeDasharray="2 2"
                  fill="none"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
                />
                <motion.path
                  d="M48 40 L38 22 M68 48 L82 20 M68 48 L60 70 M32 55 L60 70"
                  stroke="#9DB8FF"
                  strokeWidth="0.6"
                  strokeDasharray="1.5 1.5"
                  fill="none"
                  opacity="0.6"
                />

                {/* Pulsing Coral Pins with Radar Rings */}
                {mapExplorer.areas.map((area: MapArea) => {
                  const isSelected = area.id === activeAreaId;
                  const posX = area.coordinates?.x ?? area.x;
                  const posY = area.coordinates?.y ?? area.y;

                  return (
                    <g
                      key={area.id}
                      onClick={() => setActiveAreaId(area.id)}
                      className="cursor-pointer group"
                    >
                      {/* Radar Ping Ring */}
                      <circle
                        cx={posX}
                        cy={posY}
                        r={isSelected ? 6 : 4}
                        fill="none"
                        stroke="#FF7A3D"
                        strokeWidth="0.5"
                        className="animate-ping"
                        style={{ transformOrigin: `${posX}px ${posY}px` }}
                      />
                      {/* Outer Ring */}
                      <circle
                        cx={posX}
                        cy={posY}
                        r={isSelected ? 4.5 : 3}
                        fill={isSelected ? '#FF7A3D' : '#101D45'}
                        stroke="#FF7A3D"
                        strokeWidth="1"
                        className="transition-all duration-300"
                      />
                      {/* Center Core */}
                      <circle
                        cx={posX}
                        cy={posY}
                        r={1.4}
                        fill="#FFFFFF"
                      />
                      {/* Label Text */}
                      <text
                        x={posX}
                        y={posY - 4}
                        fontSize="3.2"
                        fontFamily="sans-serif"
                        fontWeight="bold"
                        textAnchor="middle"
                        fill={isSelected ? '#FF7A3D' : '#FFFFFF'}
                        className="pointer-events-none drop-shadow"
                      >
                        {area.name}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          {/* Right: Glass Card Dossier & Area Synchronized List (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {/* Active Area Glass Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeArea.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
                className="p-7 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/25 shadow-[0_20px_50px_rgba(0,0,0,0.3)] text-white"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs uppercase font-sans tracking-wider text-[#FF7A3D] font-bold flex items-center gap-1.5">
                    <MapPin className="w-4 h-4" /> Selected Micro-Market
                  </span>
                  <span className="text-xs font-sans text-[#C9D3EE] font-semibold">
                    {activeArea.badge}
                  </span>
                </div>

                <h3 className="font-display text-3xl font-extrabold text-white mb-2">
                  {activeArea.name}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#FF7A3D] mb-4 font-sans font-bold">
                  {activeArea.whyBuyHere}
                </p>

                <p className="text-base text-[#C9D3EE] font-sans leading-relaxed mb-6">
                  {activeArea.description}
                </p>

                <div className="mb-6">
                  <span className="text-xs uppercase tracking-wider text-[#C9D3EE] block mb-2 font-bold">
                    Dominant Property Types
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {activeArea.typicalProperties.map((typ, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 rounded-full bg-[#0A1330] border border-[#9DB8FF]/25 text-xs font-sans text-white font-medium"
                      >
                        {typ}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => onSelectAreaProperties(activeArea.name)}
                  className="w-full py-4 px-6 rounded-2xl bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-white font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-[0_10px_25px_rgba(255,122,61,0.35)] transition-transform active:scale-95 cursor-pointer"
                >
                  <span>View Properties Here</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </AnimatePresence>

            {/* Area Synchronized List */}
            <div className="grid grid-cols-2 gap-2.5">
              {mapExplorer.areas.map((area: MapArea) => {
                const isSelected = area.id === activeAreaId;
                return (
                  <button
                    key={area.id}
                    onClick={() => setActiveAreaId(area.id)}
                    className={`p-3.5 rounded-2xl border text-left transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-[#FF7A3D] text-white border-[#FF7A3D] shadow-md'
                        : 'bg-[#101D45]/70 border-[#9DB8FF]/20 text-[#C9D3EE] hover:text-white hover:border-[#9DB8FF]/40'
                    }`}
                  >
                    <span className="font-display text-sm font-bold block leading-tight">
                      {area.name}
                    </span>
                    <span className="text-xs font-sans text-[#C9D3EE] mt-0.5 block font-medium">
                      {area.badge}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
