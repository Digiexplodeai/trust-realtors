import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, ArrowUpRight, X, Sparkles, Check, MessageCircle, Calendar, BedDouble, Bath, Maximize2 } from 'lucide-react';
import { siteContent, PropertyListing } from '../data/content';

interface PropertiesBentoProps {
  onViewAllClick?: () => void;
  selectedCityFilter?: string;
}

export const PropertiesBento: React.FC<PropertiesBentoProps> = ({ onViewAllClick, selectedCityFilter }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');

  const categories = ['All', 'Residences', 'Villas', 'Plots & Flats', 'Commercial', 'Retreats'] as const;

  const filteredProperties = siteContent.properties.filter((prop) => {
    const matchesCategory = activeCategory === 'All' || prop.category === activeCategory;
    const matchesCity = !selectedCityFilter || prop.city.toLowerCase() === selectedCityFilter.toLowerCase();
    return matchesCategory && matchesCity;
  });

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

  // Bento span classes for 6 items in an asymmetric grid
  const getBentoSpan = (index: number) => {
    switch (index) {
      case 0:
        return 'lg:col-span-8 lg:row-span-2 h-[480px] sm:h-[540px]'; // Large Hero Bento Tile
      case 1:
        return 'lg:col-span-4 lg:row-span-1 h-[280px] sm:h-[300px]'; // Tall Side
      case 2:
        return 'lg:col-span-4 lg:row-span-1 h-[280px] sm:h-[300px]'; // Square Side
      case 3:
        return 'lg:col-span-4 lg:row-span-1 h-[320px] sm:h-[340px]'; // Third
      case 4:
        return 'lg:col-span-4 lg:row-span-1 h-[320px] sm:h-[340px]'; // Third
      case 5:
        return 'lg:col-span-4 lg:row-span-1 h-[320px] sm:h-[340px]'; // Third
      default:
        return 'lg:col-span-4 h-[320px]';
    }
  };

  return (
    <section id="properties" className="py-24 sm:py-32 bg-paper border-b border-ink/8 relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        {/* Header & Filter Pills */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 text-terracotta text-xs uppercase tracking-editorial font-sans font-bold mb-3">
              <Sparkles className="w-4 h-4" />
              <span>Curated Portfolio</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl text-ink font-normal tracking-tight">
              Selected Residences
            </h2>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs uppercase tracking-wide font-sans font-semibold transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-pine text-paper shadow-sm'
                    : 'bg-cream text-ink-secondary hover:text-ink border border-ink/8'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Asymmetric Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProperties.map((property, idx) => {
              const bentoClasses = getBentoSpan(idx);
              return (
                <motion.div
                  key={property.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={() => handleOpenModal(property)}
                  data-cursor-view="true"
                  className={`group relative cursor-pointer rounded-4xl overflow-hidden bg-cream border border-ink/10 hover:border-terracotta/40 transition-all duration-500 shadow-soft hover:shadow-soft-lg flex flex-col justify-end p-6 sm:p-8 ${bentoClasses}`}
                >
                  {/* Background Image */}
                  <img
                    src={property.image}
                    alt={property.title}
                    className="absolute inset-0 w-full h-full object-cover editorial-image group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Soft Gradient Overlay for text contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-10 pointer-events-none">
                    <span className="px-3.5 py-1.5 rounded-full text-[10px] uppercase tracking-wide font-sans font-bold bg-cream/90 backdrop-blur-md text-ink border border-ink/10 shadow-sm">
                      {property.type}
                    </span>

                    <div className="w-10 h-10 rounded-full bg-cream/90 backdrop-blur-md text-ink flex items-center justify-center group-hover:bg-terracotta group-hover:text-paper group-hover:rotate-45 transition-all duration-300 shadow-sm">
                      <ArrowUpRight className="w-4 h-4 stroke-[2.2]" />
                    </div>
                  </div>

                  {/* Bottom Info on Image */}
                  <div className="relative z-10 text-paper">
                    <div className="flex items-center gap-1.5 text-xs text-sand font-sans mb-1.5">
                      <MapPin className="w-3.5 h-3.5 text-terracotta" />
                      <span>{property.location}</span>
                    </div>

                    <h3 className="font-serif text-2xl sm:text-3xl text-paper font-normal leading-snug mb-3 group-hover:text-sand transition-colors">
                      {property.title}
                    </h3>

                    <div className="flex items-center justify-between pt-3 border-t border-paper/20 text-xs font-sans text-paper/85">
                      <span className="text-[11px] font-medium tracking-wide">
                        {property.beds ? `${property.beds} • ` : ''}
                        {property.area}
                      </span>
                      <span className="font-serif text-base text-sand font-semibold">
                        {property.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* View All Properties Trigger */}
        {onViewAllClick && (
          <div className="mt-14 text-center">
            <button
              onClick={onViewAllClick}
              className="px-8 py-3.5 rounded-full text-xs uppercase tracking-wide font-bold bg-cream border border-ink/15 hover:border-terracotta hover:text-terracotta transition-colors shadow-soft-sm inline-flex items-center gap-2"
            >
              <span>Explore All Listings & Filters</span>
              <ArrowUpRight className="w-4 h-4 text-terracotta" />
            </button>
          </div>
        )}
      </div>

      {/* Full-Screen Split-View Property Detail Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="absolute inset-0 bg-ink/75 backdrop-blur-md"
            />

            {/* Modal Dialog */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-4xl bg-paper border border-ink/10 shadow-soft-lg p-6 sm:p-10 text-ink z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-6 right-6 w-11 h-11 rounded-full bg-cream border border-ink/10 flex items-center justify-center text-ink hover:text-terracotta hover:border-terracotta transition-colors z-20 shadow-sm"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">
                {/* Left Side: Photo Gallery Slider (7 cols) */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="relative h-80 sm:h-[420px] rounded-3xl overflow-hidden border border-ink/10">
                    <img
                      src={activeModalImage || selectedProperty.image}
                      alt={selectedProperty.title}
                      className="w-full h-full object-cover editorial-image"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wide font-sans font-bold bg-cream/90 backdrop-blur-md text-ink border border-ink/10">
                        {selectedProperty.type} • {selectedProperty.city}
                      </span>
                    </div>
                  </div>

                  {/* Thumbnails */}
                  {selectedProperty.gallery && selectedProperty.gallery.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-1 no-scrollbar">
                      {selectedProperty.gallery.map((img, i) => (
                        <button
                          key={i}
                          onClick={() => setActiveModalImage(img)}
                          className={`w-24 h-16 rounded-2xl overflow-hidden border-2 transition-all shrink-0 ${
                            activeModalImage === img ? 'border-terracotta scale-105' : 'border-transparent opacity-70 hover:opacity-100'
                          }`}
                        >
                          <img src={img} alt="" className="w-full h-full object-cover" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Right Side: Details & Actions (5 cols) */}
                <div className="lg:col-span-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-1.5 text-xs text-terracotta font-sans font-semibold mb-1">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{selectedProperty.location}</span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-ink font-normal leading-tight mb-2">
                      {selectedProperty.title}
                    </h3>

                    <p className="text-xs text-ink-muted font-sans mb-4">
                      {selectedProperty.subtitle}
                    </p>

                    <div className="text-2xl font-serif text-terracotta font-medium mb-6">
                      {selectedProperty.price}
                    </div>

                    {/* Quick Specs Chips */}
                    <div className="grid grid-cols-2 gap-2.5 mb-6">
                      {selectedProperty.beds && (
                        <div className="p-3 rounded-2xl bg-cream border border-ink/8 flex items-center gap-2">
                          <BedDouble className="w-4 h-4 text-terracotta" />
                          <span className="text-xs font-sans text-ink font-semibold">{selectedProperty.beds}</span>
                        </div>
                      )}
                      {selectedProperty.baths && (
                        <div className="p-3 rounded-2xl bg-cream border border-ink/8 flex items-center gap-2">
                          <Bath className="w-4 h-4 text-terracotta" />
                          <span className="text-xs font-sans text-ink font-semibold">{selectedProperty.baths}</span>
                        </div>
                      )}
                      <div className="p-3 rounded-2xl bg-cream border border-ink/8 flex items-center gap-2">
                        <Maximize2 className="w-4 h-4 text-terracotta" />
                        <span className="text-xs font-sans text-ink font-semibold">{selectedProperty.area}</span>
                      </div>
                      <div className="p-3 rounded-2xl bg-cream border border-ink/8 flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-terracotta" />
                        <span className="text-xs font-sans text-ink font-semibold">{selectedProperty.status}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-ink-secondary font-sans leading-relaxed mb-6">
                      {selectedProperty.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-8">
                      {selectedProperty.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-ink font-sans">
                          <Check className="w-3.5 h-3.5 text-terracotta shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Dual Action Buttons */}
                  <div className="space-y-3 pt-4 border-t border-ink/8">
                    <button
                      onClick={() => handleWhatsAppEnquiry(selectedProperty)}
                      className="w-full py-3.5 rounded-full bg-terracotta hover:bg-terracotta-dark text-paper text-xs uppercase tracking-wide font-semibold shadow-soft flex items-center justify-center gap-2 animate-sweep"
                    >
                      <MessageCircle className="w-4 h-4 text-paper" />
                      <span>Enquire on WhatsApp</span>
                    </button>

                    <button
                      onClick={() => handleScheduleVisit(selectedProperty)}
                      className="w-full py-3 rounded-full bg-cream border border-ink/15 hover:border-terracotta hover:text-terracotta text-ink text-xs uppercase tracking-wide font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4 text-terracotta" />
                      <span>Schedule Private Showing</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
