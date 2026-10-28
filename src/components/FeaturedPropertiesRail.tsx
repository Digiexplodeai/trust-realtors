import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowUpRight,
  X,
  Sparkles,
  Check,
  MessageCircle,
  Calendar,
  BedDouble,
  Maximize2,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { siteContent, PropertyListing } from '../data/content';

interface FeaturedPropertiesRailProps {
  onViewAllClick?: () => void;
  selectedCityFilter?: string;
}

export const FeaturedPropertiesRail: React.FC<FeaturedPropertiesRailProps> = ({
  onViewAllClick,
  selectedCityFilter,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');
  const trackRef = useRef<HTMLDivElement>(null);

  const categories = ['All', 'Residences', 'Villas', 'Plots & Flats', 'Commercial', 'Retreats'] as const;

  const filteredProperties = siteContent.properties.filter((prop) => {
    const matchesCategory = activeCategory === 'All' || prop.category === activeCategory;
    const matchesCity = !selectedCityFilter || prop.city.toLowerCase() === selectedCityFilter.toLowerCase();
    return matchesCategory && matchesCity;
  });

  const scrollLeft = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: -420, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (trackRef.current) {
      trackRef.current.scrollBy({ left: 420, behavior: 'smooth' });
    }
  };

  const handleOpenModal = (prop: PropertyListing) => {
    setSelectedProperty(prop);
    setActiveModalImage(prop.image);
  };

  const handleWhatsAppEnquiry = (property: PropertyListing) => {
    const text = `Hi Trust Realtors, I am interested in acquiring details for "${property.title}" located at ${property.location} (${property.price}). Could you please share the brochure and arrange a private showing?`;
    const url = `${siteContent.contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScheduleVisit = (property: PropertyListing) => {
    const text = `Hi Trust Realtors, I would like to schedule a private walkthrough visit for "${property.title}" in ${property.location}. Please let me know available slots.`;
    const url = `${siteContent.contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <section
        id="properties-rail"
        data-theme="dark"
        className="py-16 sm:py-20 lg:py-28 bg-[#0A1330] text-white border-b border-[#9DB8FF]/15 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          {/* Header & Filter Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 text-[#FF7A3D] text-xs uppercase tracking-wider font-sans font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Featured Residences</span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                Selected Prime Acquisitions
              </h2>
            </div>

            {/* Filter Pills & Scroll Arrows */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider font-sans font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                      activeCategory === cat
                        ? 'bg-[#FF7A3D] text-white shadow-md'
                        : 'bg-[#101D45] text-[#C9D3EE] hover:text-white border border-[#9DB8FF]/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {onViewAllClick && (
                <button
                  onClick={onViewAllClick}
                  className="px-4 py-2 rounded-full text-xs uppercase tracking-wider font-bold text-[#FF7A3D] border border-[#FF7A3D] hover:bg-[#FF7A3D] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer ml-auto sm:ml-2"
                >
                  <span>All Listings</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              )}

              {/* Navigation Arrows */}
              <div className="hidden sm:flex items-center gap-2 ml-2">
                <button
                  onClick={scrollLeft}
                  className="p-2.5 rounded-full bg-[#101D45] border border-[#9DB8FF]/20 text-white hover:text-[#FF7A3D] transition-colors cursor-pointer"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2.5 rounded-full bg-[#101D45] border border-[#9DB8FF]/20 text-white hover:text-[#FF7A3D] transition-colors cursor-pointer"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Horizontal Track with Card Items */}
          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-6 pt-2 scroll-smooth"
          >
            {filteredProperties.map((property) => (
              <div
                key={property.id}
                onClick={() => handleOpenModal(property)}
                className="group relative min-w-[320px] sm:min-w-[380px] md:min-w-[420px] h-[500px] rounded-3xl overflow-hidden bg-[#101D45] border border-[#9DB8FF]/20 shadow-[0_20px_50px_rgba(0,0,0,0.35)] cursor-pointer flex flex-col justify-between p-6 select-none snap-start shrink-0 hover:border-[#FF7A3D]/50 transition-all duration-300"
              >
                {/* Photographic Image with natural grade */}
                <div className="absolute inset-0 overflow-hidden bg-[#0A1330]">
                  <img
                    src={property.image}
                    alt={property.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover cinematic-photo group-hover:scale-105 transition-transform duration-700 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1330] via-[#0A1330]/60 to-[#0A1330]/20" />
                </div>

                {/* Top Header Tag & Arrow */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="px-3.5 py-1.5 rounded-full bg-[#0A1330]/90 backdrop-blur-md border border-[#9DB8FF]/25 text-xs uppercase tracking-wider font-bold text-[#FF7A3D]">
                    {property.category}
                  </span>

                  <div className="w-10 h-10 rounded-full bg-[#0A1330]/80 backdrop-blur-md border border-[#9DB8FF]/25 flex items-center justify-center text-white group-hover:bg-[#FF7A3D] group-hover:border-[#FF7A3D] transition-colors shadow-sm">
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                </div>

                {/* Bottom Information */}
                <div className="relative z-10">
                  <div className="flex items-center gap-1.5 text-xs text-[#C9D3EE] mb-2 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-[#FF7A3D]" />
                    <span>{property.location}</span>
                  </div>

                  <h3 className="font-display text-2xl font-extrabold text-white mb-2 leading-snug group-hover:text-[#FF7A3D] transition-colors">
                    {property.title}
                  </h3>

                  <p className="text-base text-[#C9D3EE] font-sans line-clamp-2 mb-4 leading-relaxed">
                    {property.description}
                  </p>

                  <div className="flex items-center justify-between pt-3 border-t border-[#9DB8FF]/20">
                    <div className="flex items-center gap-3 text-sm text-[#C9D3EE] font-sans">
                      <span className="flex items-center gap-1 font-medium">
                        <Maximize2 className="w-3.5 h-3.5 text-[#FF7A3D]" />
                        {property.area}
                      </span>
                      {property.beds && (
                        <span className="flex items-center gap-1 font-medium">
                          <BedDouble className="w-3.5 h-3.5 text-[#FF7A3D]" />
                          {property.beds}
                        </span>
                      )}
                    </div>

                    <span className="text-sm uppercase font-sans tracking-wider font-extrabold text-[#FF7A3D]">
                      {property.price}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-xs font-sans text-[#C9D3EE] mt-4 font-semibold">
            <span>← Swipe or scroll horizontally to explore collection →</span>
            <span>Click any card to inspect dossier</span>
          </div>
        </div>
      </section>

      {/* Full-Screen Dossier Modal with Split Layout */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden">
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="absolute inset-0 bg-[#0A1330]/90 backdrop-blur-xl"
            />

            {/* Split Modal Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 25 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-3xl bg-[#101D45] border border-[#9DB8FF]/25 shadow-2xl text-white flex flex-col md:flex-row overflow-hidden"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0A1330]/80 border border-[#9DB8FF]/25 text-white hover:text-[#FF7A3D] transition-colors cursor-pointer"
                aria-label="Close Property Dossier"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Left Column: Image Gallery Viewport */}
              <div className="md:w-1/2 flex flex-col p-6 sm:p-8 bg-[#0A1330]/60 border-b md:border-b-0 md:border-r border-[#9DB8FF]/15">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-4 border border-[#9DB8FF]/25 bg-[#0A1330]">
                  <img
                    src={activeModalImage || selectedProperty.image}
                    alt={selectedProperty.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    className="w-full h-full object-cover cinematic-photo"
                  />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#0A1330]/90 text-xs uppercase font-bold text-[#FF7A3D] border border-[#9DB8FF]/25">
                    {selectedProperty.category}
                  </div>
                </div>

                {/* Gallery Thumbnails */}
                <div className="grid grid-cols-3 gap-2">
                  {selectedProperty.gallery.map((thumbUrl, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveModalImage(thumbUrl)}
                      className={`relative aspect-[4/3] rounded-xl overflow-hidden border transition-all cursor-pointer bg-[#0A1330] ${
                        activeModalImage === thumbUrl
                          ? 'border-[#FF7A3D] ring-2 ring-[#FF7A3D]/40'
                          : 'border-[#9DB8FF]/20 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <img
                        src={thumbUrl}
                        alt="Property thumbnail"
                        width={240}
                        height={180}
                        loading="lazy"
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Detailed Specs & Private Advisory CTAs */}
              <div className="md:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1.5 text-xs text-[#C9D3EE] mb-2 font-semibold">
                    <MapPin className="w-4 h-4 text-[#FF7A3D]" />
                    <span>{selectedProperty.location}</span>
                  </div>

                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-white mb-2 leading-tight">
                    {selectedProperty.title}
                  </h3>

                  <div className="text-2xl font-display font-extrabold text-[#FF7A3D] mb-4">
                    {selectedProperty.price}
                  </div>

                  <p className="text-base text-[#C9D3EE] font-sans leading-relaxed mb-6">
                    {selectedProperty.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-2xl bg-[#0A1330]/70 border border-[#9DB8FF]/15">
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                        Dimensions
                      </span>
                      <span className="text-sm font-bold text-white">{selectedProperty.area}</span>
                    </div>
                    {selectedProperty.beds && (
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                          Bedrooms
                        </span>
                        <span className="text-sm font-bold text-white">
                          {selectedProperty.beds}
                        </span>
                      </div>
                    )}
                    {selectedProperty.baths && (
                      <div>
                        <span className="text-xs uppercase tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                          Bathrooms
                        </span>
                        <span className="text-sm font-bold text-white">
                          {selectedProperty.baths}
                        </span>
                      </div>
                    )}
                    <div>
                      <span className="text-xs uppercase tracking-wider text-[#FF7A3D] block font-bold mb-0.5">
                        Verification
                      </span>
                      <span className="text-sm font-bold text-white flex items-center gap-1">
                        <Check className="w-4 h-4 text-[#FF7A3D]" /> Title Clean
                      </span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2.5 mb-8">
                    <span className="text-xs uppercase tracking-wider text-[#C9D3EE] block font-bold">
                      Key Distinctions
                    </span>
                    {selectedProperty.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-sm text-[#C9D3EE]">
                        <Check className="w-4 h-4 text-[#FF7A3D] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#9DB8FF]/15">
                  <button
                    onClick={() => handleWhatsAppEnquiry(selectedProperty)}
                    className="flex-1 py-4 px-5 rounded-2xl bg-[#FF7A3D] hover:bg-[#FF7A3D]/90 text-white font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 shadow-md transition-transform active:scale-95 cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Enquire on WhatsApp</span>
                  </button>

                  <button
                    onClick={() => handleScheduleVisit(selectedProperty)}
                    className="flex-1 py-4 px-5 rounded-2xl bg-[#0A1330] hover:bg-[#101D45] border border-[#9DB8FF]/25 text-white font-sans text-xs uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
                  >
                    <Calendar className="w-4 h-4 text-[#FF7A3D]" />
                    <span>Schedule a Visit</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
