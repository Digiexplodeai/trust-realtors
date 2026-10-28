import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPin,
  ArrowUpRight,
  Filter,
  X,
  BedDouble,
  Maximize2,
  Check,
  MessageCircle,
  Calendar,
  Sparkles,
} from 'lucide-react';
import { siteContent, PropertyListing } from '../data/content';

interface PropertiesViewProps {
  initialCityFilter?: string;
  initialCategoryFilter?: string;
}

export const PropertiesView: React.FC<PropertiesViewProps> = ({
  initialCityFilter = '',
  initialCategoryFilter = 'All',
}) => {
  const [selectedCity, setSelectedCity] = useState(initialCityFilter);
  const [selectedCategory, setSelectedCategory] = useState(initialCategoryFilter);
  const [selectedBedrooms, setSelectedBedrooms] = useState('Any');
  const [selectedProperty, setSelectedProperty] = useState<PropertyListing | null>(null);
  const [activeModalImage, setActiveModalImage] = useState<string>('');

  const cities = ['All', 'Panchkula', 'Chandigarh', 'Mohali', 'New Chandigarh', 'Zirakpur', 'Kasauli'];
  const categories = ['All', 'Residences', 'Villas', 'Plots & Flats', 'Commercial', 'Retreats'];

  const filteredProperties = siteContent.properties.filter((prop) => {
    const matchesCity = !selectedCity || selectedCity === 'All' || prop.city.toLowerCase() === selectedCity.toLowerCase();
    const matchesCategory = selectedCategory === 'All' || prop.category === selectedCategory;
    const matchesBeds =
      selectedBedrooms === 'Any' ||
      (selectedBedrooms === '4+ BHK' && (prop.beds?.includes('4') || prop.beds?.includes('5'))) ||
      (prop.beds && prop.beds.includes(selectedBedrooms.replace(' BHK', '')));

    return matchesCity && matchesCategory && matchesBeds;
  });

  const handleOpenModal = (prop: PropertyListing) => {
    setSelectedProperty(prop);
    setActiveModalImage(prop.image);
  };

  const handleWhatsApp = (property: PropertyListing) => {
    const text = `Hi Trust Realtors, I would like to inquire regarding "${property.title}" in ${property.location} (${property.price}). Could you share the brochure and arrange a showing?`;
    const url = `${siteContent.contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleScheduleVisit = (property: PropertyListing) => {
    const text = `Hi Trust Realtors, I would like to schedule a private walkthrough visit for "${property.title}" in ${property.location}. Please let me know available slots.`;
    const url = `${siteContent.contact.whatsappBaseUrl}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div data-theme="dark" className="pt-24 pb-24 bg-[#0A1330] min-h-screen text-white">
      {/* Header */}
      <section className="py-16 sm:py-24 bg-[#101D45]/70 border-b border-[#9DB8FF]/15 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 relative z-10">
          <div className="max-w-2xl">
            <span className="text-xs uppercase tracking-wider text-[#FF7A3D] font-sans font-bold block mb-2">
              Curated Portfolio
            </span>
            <h1 className="font-display text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4">
              Prime Properties & Estates
            </h1>
            <p className="text-base text-[#C9D3EE] font-sans leading-relaxed">
              Discreetly curated residential plots, architectural villas, and commercial assets across the Tricity and Himalayan foothills.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content: Sticky Sidebar + Filterable Grid */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Sticky Sidebar Filter (3 cols) */}
          <aside className="lg:col-span-3 lg:sticky lg:top-28 p-6 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#9DB8FF]/15">
              <span className="font-display text-lg font-bold text-white flex items-center gap-2">
                <Filter className="w-4 h-4 text-[#FF7A3D]" /> Filters
              </span>
              <button
                onClick={() => {
                  setSelectedCity('All');
                  setSelectedCategory('All');
                  setSelectedBedrooms('Any');
                }}
                className="text-xs text-[#FF7A3D] hover:underline font-sans font-bold uppercase tracking-wider cursor-pointer"
              >
                Reset All
              </button>
            </div>

            {/* City Filter */}
            <div>
              <label className="text-xs font-sans uppercase tracking-wider text-[#FF7A3D] font-bold block mb-2.5">
                Micro-Market / City
              </label>
              <div className="flex flex-wrap gap-1.5">
                {cities.map((c) => (
                  <button
                    key={c}
                    onClick={() => setSelectedCity(c)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${
                      (selectedCity === c || (c === 'All' && !selectedCity))
                        ? 'bg-[#FF7A3D] text-white font-bold shadow-md'
                        : 'bg-[#0A1330] text-[#C9D3EE] hover:text-white border border-[#9DB8FF]/20'
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>

            {/* Category Filter */}
            <div>
              <label className="text-xs font-sans uppercase tracking-wider text-[#FF7A3D] font-bold block mb-2.5">
                Property Category
              </label>
              <div className="space-y-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`w-full text-left px-3.5 py-2 rounded-xl text-xs font-sans font-medium transition-all cursor-pointer ${
                      selectedCategory === cat
                        ? 'bg-[#FF7A3D] text-white font-bold shadow-md'
                        : 'bg-[#0A1330] text-[#C9D3EE] hover:text-white border border-[#9DB8FF]/20'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Bedrooms Filter */}
            <div>
              <label className="text-xs font-sans uppercase tracking-wider text-[#FF7A3D] font-bold block mb-2.5">
                Bedrooms
              </label>
              <div className="grid grid-cols-2 gap-1.5">
                {['Any', '3 BHK', '4 BHK', '4+ BHK'].map((b) => (
                  <button
                    key={b}
                    onClick={() => setSelectedBedrooms(b)}
                    className={`px-3 py-2 rounded-xl text-xs font-sans text-center transition-all cursor-pointer ${
                      selectedBedrooms === b
                        ? 'bg-[#FF7A3D] text-white font-bold shadow-md'
                        : 'bg-[#0A1330] text-[#C9D3EE] border border-[#9DB8FF]/20 hover:text-white'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* Properties Grid (9 cols) */}
          <main className="lg:col-span-9">
            <div className="flex items-center justify-between mb-6 text-sm text-[#C9D3EE] font-medium">
              <span>Showing {filteredProperties.length} Curated Listings</span>
              <span>All properties verified with title diligence</span>
            </div>

            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredProperties.map((property) => (
                  <motion.div
                    key={property.id}
                    layout
                    whileHover={{ y: -6 }}
                    onClick={() => handleOpenModal(property)}
                    className="group rounded-3xl overflow-hidden bg-[#101D45] border border-[#9DB8FF]/20 shadow-xl cursor-pointer flex flex-col justify-between select-none hover:border-[#FF7A3D]/50 transition-colors"
                  >
                    {/* Image */}
                    <div className="relative h-64 w-full overflow-hidden bg-[#0A1330]">
                      <img
                        src={property.image}
                        alt={property.title}
                        width={600}
                        height={400}
                        loading="lazy"
                        className="w-full h-full object-cover cinematic-photo group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0A1330] via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1 rounded-full bg-[#0A1330]/90 backdrop-blur-md border border-[#9DB8FF]/25 text-xs uppercase font-bold text-[#FF7A3D]">
                          {property.category}
                        </span>
                      </div>
                      <div className="absolute bottom-3 right-4 font-display font-extrabold text-lg text-[#FF7A3D] drop-shadow">
                        {property.price}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-1.5 text-xs text-[#C9D3EE] mb-1 font-semibold">
                        <MapPin className="w-3.5 h-3.5 text-[#FF7A3D]" />
                        <span>{property.location}</span>
                      </div>
                      <h3 className="font-display text-2xl font-bold text-white mb-2 group-hover:text-[#FF7A3D] transition-colors">
                        {property.title}
                      </h3>
                      <p className="text-base text-[#C9D3EE] font-sans line-clamp-2 mb-4 leading-relaxed">
                        {property.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-[#9DB8FF]/15 text-sm text-[#C9D3EE]">
                        <div className="flex items-center gap-3">
                          <span className="font-medium">{property.area}</span>
                          {property.beds && <span className="font-medium">• {property.beds}</span>}
                        </div>
                        <div className="flex items-center gap-1 text-[#FF7A3D] font-bold group-hover:translate-x-1 transition-transform">
                          <span>Dossier</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="p-16 rounded-3xl bg-[#101D45] border border-[#9DB8FF]/20 text-center space-y-4">
                <Sparkles className="w-8 h-8 text-[#FF7A3D] mx-auto" />
                <h3 className="font-display text-2xl font-bold text-white">
                  No Properties Match Your Filter Criteria
                </h3>
                <p className="text-base text-[#C9D3EE] max-w-md mx-auto font-sans leading-relaxed">
                  We frequently manage off-market and private pocket listings. Connect with our advisors directly for discrete matching.
                </p>
                <button
                  onClick={() => {
                    setSelectedCity('All');
                    setSelectedCategory('All');
                    setSelectedBedrooms('Any');
                  }}
                  className="px-6 py-3 rounded-full bg-[#FF7A3D] text-white font-sans text-xs uppercase tracking-wider font-bold shadow-md cursor-pointer"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-10 overflow-hidden">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProperty(null)}
              className="absolute inset-0 bg-[#0A1330]/90 backdrop-blur-xl"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 25 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 25 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto no-scrollbar rounded-3xl bg-[#101D45] border border-[#9DB8FF]/25 shadow-2xl text-white flex flex-col md:flex-row overflow-hidden"
            >
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#0A1330]/80 border border-[#9DB8FF]/25 text-white hover:text-[#FF7A3D] transition-colors cursor-pointer"
                aria-label="Close Property Dossier"
              >
                <X className="w-5 h-5" />
              </button>

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

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-[#9DB8FF]/15">
                  <button
                    onClick={() => handleWhatsApp(selectedProperty)}
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
    </div>
  );
};
