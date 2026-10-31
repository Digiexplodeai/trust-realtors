/**
 * TRUST REALTORS - CENTRAL CONTENT STORE
 * ============================================================================
 * ALL editable text, listings, testimonials, stats, images, map pins, and contact details
 * are housed in this single file so the owner/team can easily update anytime.
 * Look for "[OWNER EDITABLE]" comments throughout this file.
 * ============================================================================
 */

import { siteConfig } from '../config/siteConfig';

export interface PropertyListing {
  id: string;
  title: string;
  subtitle: string;
  location: string;
  city: string;
  category: 'Residences' | 'Villas' | 'Plots & Flats' | 'Commercial' | 'Retreats';
  type: string;
  price: string;
  beds?: string;
  baths?: string;
  area: string;
  size?: string;
  bedrooms?: string | number;
  bathrooms?: string | number;
  image: string;
  gallery: string[];
  features: string[];
  description: string;
  status: 'Available' | 'Exclusive' | 'Under Offer';
  isFeatured?: boolean;
  isPlaceholder?: boolean;
}

export interface CategoryItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description?: string;
  image: string;
}

export type CategoryTile = CategoryItem;

export interface MapArea {
  id: string;
  name: string;
  x: number; // percentage coordinate on SVG map
  y: number;
  badge: string;
  description: string;
  whyBuyHere: string;
  typicalProperties: string[];
  coordinates?: { x: number; y: number };
  propertiesCount?: string;
  tagline?: string;
  typicalTypes?: string[];
  highlights?: string[];
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  isPlaceholder?: boolean;
}

export interface LivingSpaceItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface MethodStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  image: string;
}

export interface PillarItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  client: string;
  role: string;
  location: string;
  propertyPurchased: string;
  isPlaceholder?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
  id?: string;
}

export type FAQItem = FaqItem;

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  deliverables: string[];
  icon: string;
}

export interface MilestoneItem {
  year: string;
  title: string;
  description: string;
}

export interface TeamMember {
  name: string;
  designation: string;
  bio: string;
  image: string;
  experience: string;
}

export const siteContent = {
  // BRAND BASICS
  brand: {
    name: "Trust Realtors",
    shortName: "TR",
    tagline: "Every residence has a story",
    logo: {
      monogram: "/brand/logo-transparent.png?v=3",
      badge: "/brand/logo-transparent.png?v=3",
      favicon: "/brand/favicon.png?v=3",
      appleTouchIcon: "/brand/apple-touch-icon.png?v=3",
      ogImage: "/brand/og-image.png?v=3",
    },
    positioning: "Curated luxury residences, villas, plots, commercial spaces and investment properties across the Tricity and India, handled with discretion, transparency and long-term value.",
    yearEstablished: "2016",
    address: siteConfig.addressShort,
    phone: siteConfig.phone,
    email: siteConfig.email,
    hours: siteConfig.hours,
    // [OWNER EDITABLE] Empty by default. RERA badge will ONLY render if a real license number is entered here.
    reraNumber: "", 
  },

  // CONTACT & OFFICE DETAILS [OWNER EDITABLE]
  contact: {
    address: siteConfig.addressShort,
    addressFull: siteConfig.addressFull,
    phone: siteConfig.phone,
    phoneDisplay: siteConfig.phoneDisplay,
    phoneTel: siteConfig.phoneTel,
    phoneRaw: siteConfig.phoneRaw,
    email: siteConfig.email,
    officeHours: siteConfig.officeHours,
    officeDays: siteConfig.officeDays,
    appointmentNote: siteConfig.appointmentNote,
    whatsappBaseUrl: siteConfig.whatsappBaseUrl,
    whatsappDefaultText: siteConfig.whatsappDefaultText,
    // Real Google Maps embed URL for DSS 91, Citi Centre, F-Block, GMADA Aerocity, Mohali 140603
    googleMapsEmbedUrl: siteConfig.googleMapsEmbedUrl,
    googleMapsDirectionsUrl: siteConfig.googleMapsDirectionsUrl,
    socials: {
      instagram: "https://instagram.com/trustrealtors",
      linkedin: "https://linkedin.com/company/trust-realtors",
      facebook: "https://facebook.com/trustrealtors",
    }
  },

  // FOOTER CONTENT
  footer: {
    aboutText: "Curated luxury residences, villas, plots, commercial spaces and investment properties across the Tricity and India, handled with discretion, transparency and long-term value.",
    copyright: "© 2026 Trust Realtors. All rights reserved."
  },

  // HERO SECTION
  hero: {
    locationLabel: "Panchkula • Chandigarh • Mohali • New Chandigarh",
    headlineStart: "Homes that earn your",
    headlineEmphasis: "trust.",
    subtext: "Exceptional homes, private estates and investment opportunities across India's most sought-after real estate markets, curated with discretion, insight and intent.",
    ctaPrimary: "Explore Residences",
    ctaSecondary: "Book Consultation",
    trustBadge: "Verified listings • Transparent paperwork",
    // Looping architectural video placeholder with crisp photo poster fallback
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-modern-apartment-with-living-room-interior-41589-large.mp4",
    posterUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
    videoPoster: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
  },

  // CATEGORY STRIP (Seven Large Draggable Tiles - Architecture only, no people)
  categories: [
    {
      id: "real-luxury",
      number: "01",
      name: "Real Luxury Residence",
      tagline: "High-specification generational homes",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "commercial",
      number: "02",
      name: "Commercial",
      tagline: "Grade-A SCOs & high-street retail",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "villas",
      number: "03",
      name: "Villas",
      tagline: "Independent estates with private grounds",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "plots-flats",
      number: "04",
      name: "Residential Plots & Flats",
      tagline: "Clear-title GMADA & HSVP land parcels",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "retreats",
      number: "05",
      name: "Luxury Retreats",
      tagline: "Hillside mountain chalets in Kasauli",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "urban-residences",
      number: "06",
      name: "Urban Residences",
      tagline: "Penthouses and luxury high-rise floors",
      image: "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1200&q=85",
    },
    {
      id: "private-luxury",
      number: "07",
      name: "Private Luxury Residences",
      tagline: "Discreet off-market trophy estates",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85",
    },
  ] as CategoryTile[],

  // SEARCH BAR FILTERS
  searchFilters: {
    locations: [
      "Panchkula",
      "Chandigarh",
      "Mohali",
      "New Chandigarh",
      "Zirakpur",
      "Kasauli",
      "Gurugram",
      "Goa"
    ],
    budgets: [
      "Under 1 Cr",
      "1 - 3 Cr",
      "3 - 5 Cr",
      "5 - 10 Cr",
      "10 Cr+"
    ],
    bedrooms: [
      "Any Beds",
      "2 BHK",
      "3 BHK",
      "4 BHK",
      "5+ BHK"
    ],
    types: [
      "Real Luxury Residence",
      "Commercial",
      "Villas",
      "Residential Plots & Flats",
      "Luxury Retreats",
      "Urban Residences",
      "Private Luxury Residences"
    ]
  },

  // MARQUEE LOCATIONS (for velocity-linked marquee)
  marqueeAreas: [
    "Panchkula MDC Sector 5",
    "Chandigarh Sector 9",
    "Mohali IT City",
    "New Chandigarh Eco City",
    "Kasauli Hills",
    "Zirakpur VIP Road",
    "Chandigarh Sector 4",
    "Mohali Airport Road",
    "Panchkula Sector 2",
    "Medicity New Chandigarh",
    "Pinjore Shivalik Enclave"
  ],

  // TRICITY MAP EXPLORER (Interactive SVG Illustrated Map)
  mapExplorer: {
    title: "The Tricity & Beyond",
    subtitle: "Explore our core micro-markets with verified ground insights, infrastructure roadmaps, and neighborhood characteristics.",
    areas: [
      {
        id: "panchkula",
        name: "Panchkula",
        x: 68,
        y: 48,
        badge: "Our Home Base",
        description: "Known for spacious sector planning, direct Shivalik foothills views, and peaceful high-end residential living in MDC and Sectors 2, 4, 6.",
        whyBuyHere: "Generous open greens, unhurried lifestyle, proximity to Chandigarh Golf Club & IT Park.",
        typicalProperties: ["MDC Luxury Floors", "Independent Bungalows", "Sectored Land Parcels"]
      },
      {
        id: "chandigarh",
        name: "Chandigarh",
        x: 48,
        y: 40,
        badge: "Heritage Capital",
        description: "The timeless garden city. Strictly regulated Corbusian architectural heritage, wide boulevards, and generational prestige in northern sectors.",
        whyBuyHere: "Limited land supply creating enduring capital appreciation and incomparable civic pride.",
        typicalProperties: ["1-2 Kanal Heritage Villas", "North Sector Bungalows", "Prime Leased SCOs"]
      },
      {
        id: "mohali",
        name: "Mohali",
        x: 32,
        y: 55,
        badge: "Commercial & IT Engine",
        description: "Fastest growing corporate powerhouse of Punjab with international airport connectivity, IT hubs, and modern gated sky residences along Airport Road.",
        whyBuyHere: "High rental yields, burgeoning tech employment, and state-of-the-art sports facilities.",
        typicalProperties: ["High-Rise Sky Villas", "Airport Road Commercial SCOs", "Aerocity Plotted Land"]
      },
      {
        id: "new-chandigarh",
        name: "New Chandigarh",
        x: 38,
        y: 22,
        badge: "Eco-City & Medicity",
        description: "Planned greenfield township with underground infrastructure, expansive botanical gardens, Medicity institutional hub, and luxury low-density living.",
        whyBuyHere: "Future-ready master plan with master-planned boulevards and high capital compounding.",
        typicalProperties: ["Eco City Residential Plots", "Gated Mountain-view Villas", "Commercial Plazas"]
      },
      {
        id: "zirakpur",
        name: "Zirakpur",
        x: 60,
        y: 70,
        badge: "High-Street Growth Hub",
        description: "Dynamic commercial thoroughfare connecting Chandigarh, Delhi, and Himachal. Epicenter of retail corridors, PR7 ring road development, and vibrant commerce.",
        whyBuyHere: "High-yield commercial spaces, bustling retail footfall, and strategic highway convergence.",
        typicalProperties: ["Pre-Leased Commercial Showrooms", "High-Street Retail", "Family Apartments"]
      },
      {
        id: "kasauli",
        name: "Kasauli",
        x: 82,
        y: 20,
        badge: "Hill Retreats",
        description: "Nestled in pine forests at 6,200 feet altitude, just 65 minutes smooth highway drive from Panchkula. Pure air, quiet serenity, and panoramic valley views.",
        whyBuyHere: "Idyllic weekend escape and high-demand vacation rental asset with steady passive yield.",
        typicalProperties: ["Cedarwood Mountain Chalets", "Hillside Stone Estates", "Valley Cottages"]
      }
    ] as MapArea[]
  },

  // PROMISE STATEMENT (Scroll-Linked Text Scrub)
  promise: {
    quote: "We don't just sell properties. We find homes, protect investments and build relationships that last generations.",
    caption: "Discreet advisory grounded in verified land records, transparent terms, and genuine client advocacy."
  },

  // SERVICES / OUR METHOD (Sticky-Scroll Storytelling)
  method: [
    {
      number: "01",
      title: "Property Search & Advisory",
      subtitle: "Curated, Unbiased Shortlists",
      description: "We filter hundreds of market listings down to an exclusive dossier tailored to your lifestyle, spatial standards, and investment horizon. Every property is personally walked and pre-verified.",
      deliverables: [
        "Confidential client profiling and private property tours",
        "40-point legal title, encumbrance and zoning check",
        "Comparative market price valuation and objective advice",
        "Strategic price negotiation representing your interest solely"
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "02",
      title: "Plot, Flat & Home Acquisition",
      subtitle: "Clear Demarcation & Title Assurance",
      description: "Navigating HSVP, GMADA, PUDA, and master-planned township acquisitions across Panchkula, Chandigarh, and New Chandigarh with zero procedural blind spots.",
      deliverables: [
        "Direct liaison with urban development statutory bodies",
        "Demarcation, road width, FAR and setback validation",
        "Watertight sale agreements drafted by real estate legal counsel",
        "Seamless possession certificate transfer and municipal mutation"
      ],
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85",
    },
    {
      number: "03",
      title: "Investment & Resale",
      subtitle: "Capital Preservation & Compounding",
      description: "Discreet portfolio advisory for HNIs, NRIs, and institutional families. Pinpointing high-yield commercial assets, leased SCOs, and prime residential plots with proven liquidity.",
      deliverables: [
        "In-depth rental yield analysis and exit capital modeling",
        "Pre-leased commercial asset screening (6.5%+ ROI)",
        "Discreet private resale marketing without public exposure",
        "Tax-efficient reinvestment guidance (Capital Gains / Sec 54)"
      ],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=85",
    }
  ] as MethodStep[],

  // FEATURED PROPERTIES [OWNER EDITABLE: Replace with verified live listings]
  properties: [
    {
      id: "residence-sector-5-pkl",
      title: "Sector 5 Panchkula Residence",
      subtitle: "Architectural Masterpiece near Golf Course",
      location: "Sector 5 MDC, Panchkula",
      city: "Panchkula",
      category: "Residences",
      type: "Real Luxury Residence",
      price: "Price on Request",
      beds: "5 BHK",
      baths: "6 Baths",
      area: "500 Sq. Yards (6,800 sq ft)",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85",
        "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=85",
        "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2400&q=85"
      ],
      features: [
        "Corner position facing open greenery with uninterrupted Shivalik views",
        "VRV air conditioning, private Otis elevator & double glazed acoustic windows",
        "Double-height central living foyer with imported Italian marble",
        "Landscaped terrace deck with barbecue pavilion & staff quarters"
      ],
      description: "An extraordinary modern residence in Panchkula's premier MDC Sector 5. Designed with sunlit courtyards, natural sandstone walls, soaring 16-foot ceilings, and hand-finished teak millwork throughout.",
      status: "Exclusive",
      isFeatured: true
    },
    {
      id: "new-chd-signature-plot",
      title: "New Chandigarh Premium Plot",
      subtitle: "Prime Residential Land Parcel",
      location: "Eco City-1, New Chandigarh",
      city: "New Chandigarh",
      category: "Plots & Flats",
      type: "Residential Plots & Flats",
      price: "Price on Request",
      area: "350 Sq. Yards (East Facing)",
      image: "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=2400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1524813686514-a57563d77d66?auto=format&fit=crop&w=2400&q=85",
        "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2400&q=85"
      ],
      features: [
        "100% clear GMADA allotment with all statutory development dues paid",
        "60 ft wide boulevard frontage with rear municipal green buffer",
        "Adjacent to the Shivalik botanical park and upcoming Medicity hub",
        "Immediate registry and construction permission available"
      ],
      description: "A rare opportunity to acquire a pristine, East-facing residential land parcel in New Chandigarh's finest sector. Ideal for building a custom generational villa with generous open lawns and mountain backdrops.",
      status: "Available",
      isFeatured: true
    },
    {
      id: "mohali-sky-villa",
      title: "Mohali Sky Residence",
      subtitle: "Exclusive Dual-Level Penthouse",
      location: "Airport Road / Sector 82, Mohali",
      city: "Mohali",
      category: "Residences",
      type: "Urban Residences",
      price: "Price on Request",
      beds: "4 BHK + Maid",
      baths: "5 Baths",
      area: "4,600 Sq. Ft. Super Area",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2400&q=85",
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85"
      ],
      features: [
        "Private rooftop plunge pool on 24th floor wrap-around terrace deck",
        "Direct elevator access leading into private residential foyer",
        "Panoramic 270-degree vista of Tricity skyline and mountain ranges",
        "Smart home automation with automated shading and Lutron lighting"
      ],
      description: "Elevated living at its zenith. This dual-level sky residence offers expansive floor-to-ceiling glass, palatial living rooms, private dining decks, and 5-star concierge privileges on Mohali's prime growth corridor.",
      status: "Available",
      isFeatured: false
    },
    {
      id: "zirakpur-commercial-asset",
      title: "Zirakpur Commercial Space",
      subtitle: "Grade-A Retail & Office Building",
      location: "PR7 Airport Ring Road, Zirakpur",
      city: "Zirakpur",
      category: "Commercial",
      type: "Commercial",
      price: "Price on Request",
      area: "125 Sq. Yards (B+G+3 Floors)",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2400&q=85",
        "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
      ],
      features: [
        "Prominent 100 ft wide main road frontage with surface visitor parking",
        "Pre-leased potential to institutional retail brands with 6.5%+ projected yield",
        "Independent basement with dedicated freight elevator access",
        "100% clear commercial title approved under GMADA master plan"
      ],
      description: "Strategically located commercial asset offering unmatched highway visibility. Perfectly suited for family offices, flagship retail ventures, or investors seeking resilient inflation-hedged rental yield.",
      status: "Exclusive",
      isFeatured: false
    },
    {
      id: "kasauli-pine-chalet",
      title: "Kasauli Luxury Retreat",
      subtitle: "Bespoke Hillside Stone Estate",
      location: "Lower Mall Enclave, Kasauli",
      city: "Kasauli",
      category: "Retreats",
      type: "Luxury Retreats",
      price: "Price on Request",
      beds: "4 BHK",
      baths: "4 Baths",
      area: "3,800 Sq. Ft. on 1.2 Bigha Freehold",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2400&q=85",
        "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2400&q=85"
      ],
      features: [
        "Unimpeded sunset vistas over pine valleys and Shimla foothills",
        "Hand-chiseled Himalayan stone masonry and seasoned cedarwood rafters",
        "Heated hardwood floors in all suites and wood-burning central hearth",
        "Only 65 minutes smooth highway drive from Panchkula"
      ],
      description: "A private mountain sanctuary perched at 6,200 feet above sea level. Crafted with local stone, expansive glass windows, and wrap-around viewing decks that invite natural pine fragrance into every room.",
      status: "Available",
      isFeatured: true
    },
    {
      id: "chd-sector-9-heritage-villa",
      title: "Chandigarh Sector 9 Villa",
      subtitle: "Rare Generational Estate in Chandigarh",
      location: "Sector 9-A, Chandigarh",
      city: "Chandigarh",
      category: "Villas",
      type: "Villas",
      price: "Price on Request",
      beds: "6 BHK",
      baths: "7 Baths",
      area: "2 Kanals (1,000 Sq. Yards)",
      image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=85",
      gallery: [
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=2400&q=85",
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
      ],
      features: [
        "Prime Sector 9 address with desirable south-facing orientation",
        "Private courtyard pool framed by mature frangipani and teak trees",
        "Security guardhouse, 4-car covered portico and staff accommodations",
        "Pristine single-owner freehold title with unblemished lineage"
      ],
      description: "One of Chandigarh's most distinguished residential opportunities. Imbued with timeless modernist proportions, generous setbacks, and sprawling verandahs that embody the quintessential Chandigarh lifestyle.",
      status: "Under Offer",
      isFeatured: true
    }
  ] as PropertyListing[],

  // LIVING SPACES SHOWCASE (Full-Bleed 4-panel Accordion - Architecture only, no people)
  livingSpaces: [
    {
      id: "living",
      number: "01",
      title: "Living Spaces",
      tagline: "Where Horizon Meets Home",
      description: "Double-height living spaces, natural stone, expansive glazing. Designed for generous natural illumination and seamless flow into private courtyards.",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2400&q=85",
      highlights: ["16-18 ft Ceilings", "Frameless Thermal Glazing", "Imported Italian Marble", "Courtyard Views"]
    },
    {
      id: "culinary",
      number: "02",
      title: "Culinary Architecture",
      tagline: "The Art of Gathering",
      description: "Statement islands, premium appliances, service-ready layouts. Thoughtfully zoned for both effortless family mornings and discrete evening catering.",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=2400&q=85",
      highlights: ["Monolithic Quartz Island", "Integrated Appliances", "Secondary Wet Kitchen", "Walk-In Butler's Pantry"]
    },
    {
      id: "quarters",
      number: "03",
      title: "Private Quarters",
      tagline: "Rest, Reimagined",
      description: "Quiet master suites, layered textures, considered lighting. Acoustic buffer zones, walk-in couture dressing suites, and sunrise garden terraces.",
      image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=2400&q=85",
      highlights: ["Acoustic Soundproofing", "Couture Dressing Rooms", "Private Terraces", "Solid Oak Flooring"]
    },
    {
      id: "water",
      number: "04",
      title: "Bath Retreats",
      tagline: "Stone and Water",
      description: "Natural stone, spa-inspired finishes, rainfall showers. Hand-honed travertine, freestanding soaking tubs framed by green bamboo lightwells.",
      image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=2400&q=85",
      highlights: ["Honed Travertine Slabs", "Freestanding Soaking Tub", "Rainfall Shower Chutes", "Concealed Warm Lighting"]
    }
  ] as LivingSpaceItem[],

  // NUMBERS - Coral to Navy Gradient Block [OWNER EDITABLE]
  stats: [
    {
      id: "exp",
      value: 12,
      suffix: "+",
      label: "Years of Trust",
      description: "Continuous real estate advisory across Panchkula and prime regional markets."
    },
    {
      id: "properties",
      value: 450,
      suffix: "+",
      label: "Properties Transacted",
      description: "Curated residential estates, plots, luxury floors and commercial assets."
    },
    {
      id: "families",
      value: 380,
      suffix: "+",
      label: "Families Served",
      description: "Discerning families, founders, and NRIs who entrust us with their legacy."
    },
    {
      id: "cities",
      value: 8,
      suffix: "",
      label: "Cities Covered",
      description: "Panchkula, Chandigarh, Mohali, New Chd, Zirakpur, Kasauli, Gurugram, Goa."
    }
  ] as StatItem[],

  // WHY TRUST REALTORS - Overlapping Stacked Cards
  pillars: [
    {
      id: "transparency",
      title: "Absolute Transparency",
      subtitle: "Uncompromised Integrity",
      description: "Every property title, municipal approval, and advisory fee is documented upfront. No hidden terms, no double-dealing, and complete clarity at every step.",
      icon: "ShieldCheck"
    },
    {
      id: "discretion",
      title: "Discretion as Standard",
      subtitle: "Confidential Representation",
      description: "We safeguard client identity with strict non-disclosure practices. High-net-worth acquisitions and private sales are executed without unsolicited public syndication.",
      icon: "EyeOff"
    },
    {
      id: "local-insight",
      title: "Hyper-Local Tricity Insight",
      subtitle: "Grounded in Sector Reality",
      description: "From micro-market movements in Panchkula MDC to GMADA expansion phases in New Chandigarh and IT corridors in Mohali, our 12+ years on the ground give you a decisive edge.",
      icon: "Compass"
    },
    {
      id: "partnership",
      title: "Partnership Beyond Handover",
      subtitle: "Enduring Custodianship",
      description: "Our advisory does not conclude at registration. We assist with property mutation, utility transfers, architect introductions, property management, and strategic liquidation.",
      icon: "Headphones"
    }
  ] as PillarItem[],

  // CLIENT VOICES [OWNER EDITABLE: Placeholder testimonials - replace with real reviews]
  testimonials: [
    {
      id: "test-1",
      quote: "They understood that buying a home is not simply a transaction. Every property felt carefully selected for how we actually wanted to live.",
      client: "Vikram & Sunaina Mehra",
      role: "Industrialist & Tech Founder",
      location: "Panchkula, MDC Sector 5",
      propertyPurchased: "500 Sq. Yd. Luxury Residence"
    },
    {
      id: "test-2",
      quote: "The process was discreet, transparent and remarkably well managed.",
      client: "Dr. Arvind S. Gill",
      role: "Senior Consultant Surgeon",
      location: "Chandigarh, Sector 9",
      propertyPurchased: "Residential Villa Acquisition"
    },
    {
      id: "test-3",
      quote: "We wanted a residence with character, privacy and strong long-term value.",
      client: "Harpreet Singh Randhawa",
      role: "NRI Entrepreneur",
      location: "New Chandigarh / London",
      propertyPurchased: "Eco City Generational Land Parcel"
    }
  ] as TestimonialItem[],

  // FAQ ACCORDION (5 Mandatory Questions)
  faqs: [
    {
      question: "How does a private consultation with Trust Realtors work?",
      answer: `We begin with a confidential discovery discussion (in person at our ${siteConfig.officeHeading} office or via call) to understand your lifestyle requirements, spatial preferences, timeline, and budget parameters. We then curate an exclusive, pre-vetted dossier of matching properties and arrange discreet private viewings at your convenience.`,
      category: "Advisory"
    },
    {
      question: "How are properties vetted and verified before being presented to clients?",
      answer: "Our legal and research team conducts a rigorous 40-point verification on every listing. This includes tracing the ownership chain of title for at least 30 years, verifying zoning and town-planning approvals (HSVP, GMADA, PUDA), checking mortgage records at local sub-registrar offices, and physically validating plot boundaries and road access.",
      category: "Due Diligence"
    },
    {
      question: "Do you assist with home loans, bank legalities, and registry paperwork?",
      answer: "Yes, end-to-end. We coordinate with premier private and nationalized banking institutions for competitive home loans, coordinate property valuations, draft watertight sale agreements with legal counsel, and oversee final deed registration, stamp duty calculation, and municipal mutation.",
      category: "Legal & Finance"
    },
    {
      question: "Which geographic areas and cities do you primarily cover?",
      answer: `Our headquarters is located at ${siteConfig.addressShort}. We have comprehensive active coverage across the entire Tricity — Mohali, Chandigarh, Panchkula, New Chandigarh, and Zirakpur. We also handle select luxury retreats in Kasauli, Himachal, and bespoke acquisitions in Gurugram and North Goa.`,
      category: "Coverage"
    },
    {
      question: "What are your professional brokerage terms and advisory charges?",
      answer: "We uphold 100% transparent standard advisory terms following ethical real estate industry standards, documented in writing prior to any transaction. We do not engage in double-dealing or hidden markups. Every rupee earned is matched with dedicated due diligence, legal protection, and relentless negotiation in your sole interest.",
      category: "Pricing"
    }
  ] as FaqItem[],

  // SERVICES VIEW DATA
  services: [
    {
      id: "luxury-residences",
      title: "Luxury Residential Buying",
      tagline: "Finding your signature address",
      description: "Representing buyers in acquiring high-specification residences, independent bungalows, floors, and penthouses across prime sectors of Panchkula and Chandigarh.",
      deliverables: [
        "Curated portfolio of off-market and vetted residences",
        "Private and confidential owner-level negotiations",
        "Comprehensive structural and finishing assessment",
        "Complete stamp duty and deed registration oversight"
      ],
      icon: "Home"
    },
    {
      id: "property-selling",
      title: "Discreet Property Resale & Marketing",
      tagline: "Maximized valuation without public exposure",
      description: "For owners of distinguished properties who demand discreet representation. We present your asset directly to qualified family offices and high-net-worth buyers.",
      deliverables: [
        "Architectural photography and editorial presentation",
        "Direct outreach to pre-qualified private investor network",
        "Strict buyer vetting to protect homeowner privacy",
        "Optimal pricing realization grounded in real transaction data"
      ],
      icon: "Key"
    },
    {
      id: "plots-land",
      title: "Residential Plots & Land Acquisition",
      tagline: "The canvas for your architectural legacy",
      description: "Navigating HSVP, GMADA, and approved private township plotted developments. We ensure pristine legal title and ideal plot orientation for custom construction.",
      deliverables: [
        "Comprehensive demarcation and survey verification",
        "Vastu-compliant and park-facing parcel shortlists",
        "Building bylaws and maximum permissible FAR calculation",
        "Seamless mutation and possession certificate transfer"
      ],
      icon: "Compass"
    },
    {
      id: "commercial-advisory",
      title: "Commercial & High-Street Retail",
      tagline: "Institutional-grade commercial real estate",
      description: "Advisory on Grade-A SCOs, office suites, high-street retail spaces, and mixed-use commercial developments across Zirakpur, Mohali Airport Road, and Panchkula.",
      deliverables: [
        "Catchment area demographic and footfall evaluation",
        "Tenant lease structuring and minimum guarantee modeling",
        "Anchor tenant placement advisory",
        "Long-term capital exit roadmap"
      ],
      icon: "Building2"
    },
    {
      id: "investment-portfolio",
      title: "Strategic Real Estate Portfolio Advisory",
      tagline: "Prudent wealth preservation and capital growth",
      description: "Customized asset allocation strategies for business owners and NRIs seeking resilient rental yields and multi-year capital compounding in North India.",
      deliverables: [
        "Micro-market supply and infrastructure growth analysis",
        "Capital gains reinvestment advisory (Section 54/54EC)",
        "Pre-leased commercial asset screening with 6-8% yields",
        "Portfolio rebalancing and exit strategy execution"
      ],
      icon: "TrendingUp"
    },
    {
      id: "legal-documentation",
      title: "Legal Due Diligence & Conveyancing",
      tagline: "Uncompromising legal safeguarding",
      description: "Our dedicated legal associates review title deeds, mutation records, non-encumbrance certificates, and town planning approvals to ensure 100% risk-free transactions.",
      deliverables: [
        "30-year chain of title and revenue record vetting",
        "Allotment letter, conveyance deed, and transfer permit checks",
        "Bespoke tripartite agreements and sale deed drafting",
        "Sub-registrar office accompaniment and biometric registry"
      ],
      icon: "FileCheck2"
    }
  ] as ServiceItem[],

  // ABOUT PAGE DATA
  about: {
    badge: "The Trust Realtors Ethos",
    heading: "A real estate consultancy built on integrity, discretion, and quiet excellence.",
    storyP1: "Founded in the heart of Panchkula, Trust Realtors was established with a singular conviction: luxury real estate in the Tricity deserved a higher standard of representation. Too often, property transactions were clouded by aggressive salesmanship, opacity, and short-term thinking.",
    storyP2: "We set out to create a refined sanctuary for buyers and sellers of exceptional residences. We do not chase volume; we curate quality. Every plot, penthouse, villa, and commercial parcel we represent undergoes meticulous due diligence before we present it to our clients.",
    storyP3: "Our team operates not as transactional brokers, but as trusted advisors and lifelong custodians of your family's real estate legacy. Discretion is our hallmark, and transparency is our promise.",
    
    values: [
      {
        title: "Discretion Above All",
        desc: "We operate in the private sphere. Your identity, portfolio decisions, and financial details remain strictly confidential."
      },
      {
        title: "Unvarnished Truth",
        desc: "We will openly tell you if a property is overpriced, legally ambiguous, or unsuited for your lifestyle, even if it means no sale."
      },
      {
        title: "Deep Generational Roots",
        desc: "Rooted in Panchkula with family ties across Chandigarh and Mohali, our neighborhood knowledge spans decades."
      },
      {
        title: "Architectural Appreciation",
        desc: "We understand construction quality, spatial proportion, natural light, and finishes — evaluating homes like connoisseurs."
      }
    ],

    milestones: [
      {
        year: "2016",
        title: "Foundation in Panchkula",
        description: "Started private advisory out of Sector 5 MDC, focusing on bespoke residential plots and luxury floors."
      },
      {
        year: "2018",
        title: "Expansion to Greater Tricity",
        description: "Extended footprint to North Chandigarh heritage bungalows and newly developing Mohali sectors."
      },
      {
        year: "2021",
        title: "New Chandigarh & Regional Estates",
        description: "Pioneered early curated land advisory in Eco City and hillside vacation retreats in Kasauli."
      },
      {
        year: "2024",
        title: "Commercial & NRI Family Office Desk",
        description: "Formed a specialized division for pre-leased commercial assets and overseas Indian client representation."
      },
      {
        year: "Today",
        title: "Tricity's Benchmark in Luxury",
        description: "Over 450+ successful luxury property acquisitions backed by an unblemished reputation for trust."
      }
    ] as MilestoneItem[],

    // Team Placeholders [OWNER EDITABLE] - Architectural portraits / studio placeholder
    team: [
      {
        name: "Lead Advisory Principal",
        designation: "Managing Director & Founder",
        bio: "With over 15 years immersed in Tricity urban development and prime land acquisitions, leading with unwavering ethics and strategic foresight.",
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=1200&q=80",
        experience: "15+ Years Experience"
      },
      {
        name: "Senior Residential Partner",
        designation: "Head of Private Client Acquisitions",
        bio: "Specializing in Sector 5 MDC, Sector 9 Chandigarh, and bespoke gated estates, guiding discerning families home.",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
        experience: "11+ Years Experience"
      },
      {
        name: "Legal & Due Diligence Counsel",
        designation: "Head of Conveyancing & Title Assurance",
        bio: "Ensures every title deed, HSVP/GMADA clearance, and contract is vetted with surgical precision.",
        image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1200&q=80",
        experience: "14+ Years Practice"
      }
    ] as TeamMember[]
  },

  // INQUIRY FORM DATA
  inquiry: {
    title: "Begin Your Legacy",
    subtitle: "Tell us about your requirement, budget and timeline. Our team reviews every inquiry personally.",
    promise: "We respond within one business day.",
    interests: [
      "Buy Residence",
      "Buy Plot / Flat",
      "Commercial",
      "Villa",
      "Investment",
      "Sell Property"
    ],
    budgets: [
      "Under 1 Cr",
      "1 - 3 Cr",
      "3 - 5 Cr",
      "5 - 10 Cr",
      "10 Cr+"
    ]
  }
};
