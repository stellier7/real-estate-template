import type { Property } from "@/lib/properties/types";

const img = (id: string, alt: string): Property["media"]["heroImage"] => ({
  src: `https://images.unsplash.com/${id}?w=1800&q=85&auto=format&fit=crop`,
  alt,
  width: 1800,
  height: 1200,
});

export const properties: Property[] = [
  {
    id: "p1",
    slug: "ocean-villa-marbella",
    name: "Ocean Villa Marbella",
    title: "A cliffside residence shaped by light and horizon",
    shortDescription:
      "An expansive coastal villa with layered terraces, a private pool, and uninterrupted sea views.",
    description:
      "Set above the shoreline, this villa reads as a sequence of open rooms that dissolve into the landscape. Limestone floors, deep overhangs, and a restrained material palette keep attention on the water. The main level flows from a double-height salon to a shaded dining terrace, while the upper floor holds a primary suite with a panoramic study.",
    propertyType: "villa",
    status: "available",
    featured: true,
    tags: ["coastal", "luxury"],
    location: {
      label: "Marbella, Costa del Sol",
      country: "Spain",
      region: "Andalusia",
      city: "Marbella",
      address: "Carretera de los Faros",
      coordinates: { lat: 36.509, lng: -4.886 },
    },
    pricing: { amount: 8900000, currency: "EUR" },
    media: {
      heroImage: img(
        "photo-1613490493576-7fde63acd811",
        "Modern villa terrace overlooking the Mediterranean",
      ),
      gallery: [
        img("photo-1600607687939-ce8a6c25118c", "Open-plan living room with sea view"),
        img("photo-1600566753190-17fedebaa088", "Minimal kitchen with stone island"),
        img("photo-1600585154340-be6161a56a0c", "Pool terrace at dusk"),
      ],
      virtualTour: {
        url: "https://example.com/virtual-tour/ocean-villa",
        label: "Virtual walkthrough",
      },
    },
    residential: {
      totalArea: 620,
      lotSize: 2100,
      bedrooms: 5,
      bathrooms: 6,
      parking: 3,
      yearBuilt: 2019,
    },
    features: [
      "Infinity pool",
      "Guest pavilion",
      "Wine cellar",
      "Smart home integration",
    ],
    amenities: ["Concierge-ready layout", "Landscaped gardens", "Outdoor kitchen"],
    floorPlans: [
      { title: "Ground level", url: "/documents/sample-floorplan.pdf", type: "pdf" },
    ],
    seo: {
      title: "Ocean Villa Marbella",
      description:
        "Cliffside luxury villa in Marbella with terraces, pool, and panoramic Mediterranean views.",
    },
    publishedAt: "2025-11-01",
  },
  {
    id: "p2",
    slug: "metropolitan-residence",
    name: "Metropolitan Residence",
    shortDescription:
      "A calm, light-filled apartment above the city with private terrace and gallery-style living room.",
    description:
      "This upper-floor residence pairs editorial proportions with everyday comfort. Oak flooring runs through the main living space, while floor-to-ceiling glazing frames a disciplined skyline view.",
    propertyType: "apartment",
    status: "available",
    featured: true,
    location: {
      label: "Lisbon, Portugal",
      country: "Portugal",
      city: "Lisbon",
      coordinates: { lat: 38.722, lng: -9.139 },
    },
    pricing: { amount: 2450000, currency: "EUR" },
    media: {
      heroImage: img(
        "photo-1502672260266-1c1ef2d93688",
        "Bright apartment interior with city views",
      ),
      gallery: [
        img("photo-1560448204-e02f11c45748", "Living area with terrace access"),
      ],
    },
    residential: {
      totalArea: 210,
      bedrooms: 3,
      bathrooms: 3,
      parking: 2,
      yearBuilt: 2021,
    },
    features: ["Private terrace", "Chef's kitchen", "Dedicated office"],
    seo: { description: "Luxury apartment in Lisbon with terrace and skyline views." },
    publishedAt: "2025-10-12",
  },
  {
    id: "p3",
    slug: "central-commercial-building",
    name: "Central Commercial Building",
    shortDescription:
      "Corner commercial asset with retail at grade and flexible upper floors in a revitalized district.",
    description:
      "A contemporary commercial building positioned at a high-visibility intersection. The ground floor is configured for flagship retail, with upper levels suitable for showroom, office, or gallery use.",
    propertyType: "commercial",
    status: "available",
    location: {
      label: "Milan, Italy",
      country: "Italy",
      city: "Milan",
      coordinates: { lat: 45.464, lng: 9.19 },
    },
    pricing: { priceOnRequest: true, display: "Price on request" },
    media: {
      heroImage: img(
        "photo-1486406146928-c627a92ad1ab",
        "Modern commercial building facade",
      ),
    },
    commercial: { useClass: "Mixed commercial", floors: 6, units: 4 },
    features: ["Corner position", "Dual street frontage", "Freight elevator"],
    seo: { description: "Prime commercial building in Milan with retail and upper-floor flexibility." },
    publishedAt: "2025-09-20",
  },
  {
    id: "p4",
    slug: "coastal-development-parcel",
    name: "Coastal Development Parcel",
    shortDescription:
      "A rare hillside parcel with approved master plan footprint and sweeping coastal sightlines.",
    description:
      "This land offering is suited for a low-density residential development sensitive to topography and view corridors. Engineering studies and conceptual massing are available for qualified buyers.",
    propertyType: "land",
    status: "under_development",
    location: {
      label: "Algarve, Portugal",
      country: "Portugal",
      region: "Algarve",
      coordinates: { lat: 37.019, lng: -7.93 },
    },
    pricing: { display: "From €4.2M" },
    media: {
      heroImage: img(
        "photo-1500382017468-9049fed747ef",
        "Coastal hillside land at golden hour",
      ),
    },
    land: { zoning: "Residential low density", buildableArea: 12000 },
    documents: [
      { title: "Planning summary", url: "/documents/sample-planning.pdf", type: "pdf" },
    ],
    seo: { description: "Coastal land parcel in the Algarve with development potential." },
    publishedAt: "2025-08-05",
  },
  {
    id: "p5",
    slug: "garden-estate-house",
    name: "Garden Estate House",
    shortDescription:
      "A renovated country house wrapped by structured gardens and a tree-lined approach.",
    propertyType: "house",
    status: "reserved",
    location: {
      label: "Tuscany, Italy",
      country: "Italy",
      region: "Tuscany",
      city: "Lucca",
    },
    pricing: { amount: 3200000, currency: "EUR" },
    media: {
      heroImage: img(
        "photo-1600585154526-990dced4db0d",
        "Country estate house with garden",
      ),
    },
    residential: {
      totalArea: 480,
      lotSize: 8000,
      bedrooms: 4,
      bathrooms: 4,
      yearBuilt: 1890,
    },
    features: ["Restored stone facades", "Guest cottage", "Olive grove"],
    seo: { description: "Historic Tuscan estate house with gardens near Lucca." },
    publishedAt: "2025-07-18",
  },
  {
    id: "p6",
    slug: "skyline-office-suite",
    name: "Skyline Office Suite",
    shortDescription:
      "Full-floor office suite with reception, boardroom, and flexible team zones.",
    propertyType: "office",
    status: "available",
    location: { label: "Zurich, Switzerland", country: "Switzerland", city: "Zurich" },
    pricing: { amount: 6800000, currency: "CHF" },
    media: {
      heroImage: img(
        "photo-1497366216548-37526070297c",
        "Contemporary office interior with city view",
      ),
    },
    commercial: { floors: 1, units: 1, useClass: "Grade A office" },
    features: ["Raised access floor", "Executive boardroom", "Building concierge"],
    seo: { description: "Full-floor office suite in Zurich with skyline views." },
    publishedAt: "2025-06-30",
  },
  {
    id: "p7",
    slug: "logistics-park-unit",
    name: "Logistics Park Unit",
    shortDescription:
      "High-clearance industrial unit with dock access and expandable yard.",
    propertyType: "industrial",
    status: "available",
    location: { label: "Rotterdam, Netherlands", country: "Netherlands", city: "Rotterdam" },
    pricing: { display: "Lease / sale — enquire" },
    media: {
      heroImage: img(
        "photo-1586528116311-ad8dd3c8310d",
        "Industrial warehouse interior",
      ),
    },
    commercial: { useClass: "Logistics", floors: 1 },
    features: ["Cross-dock layout", "24/7 access", "ESG-ready systems"],
    seo: { description: "Industrial logistics unit near Rotterdam port corridor." },
    publishedAt: "2025-05-22",
  },
  {
    id: "p8",
    slug: "boutique-hotel-opportunity",
    name: "Boutique Hotel Opportunity",
    shortDescription:
      "A character building positioned for a design-led boutique hospitality concept.",
    propertyType: "hotel",
    status: "coming_soon",
    location: { label: "Copenhagen, Denmark", country: "Denmark", city: "Copenhagen" },
    pricing: { priceOnRequest: true, display: "Coming soon" },
    media: {
      heroImage: img(
        "photo-1566073771259-6a8506099945",
        "Boutique hotel lobby with natural materials",
      ),
    },
    commercial: { floors: 5, units: 42 },
    investment: {
      yield: "Projected 6.2% stabilised",
      tenancy: "Hospitality operator LOI stage",
      highlights: ["Harbor proximity", "Heritage facade", "Roof terrace rights"],
    },
    seo: { description: "Boutique hotel investment opportunity in Copenhagen." },
    publishedAt: "2025-04-10",
  },
  {
    id: "p9",
    slug: "waterfront-condominium",
    name: "Waterfront Condominium",
    shortDescription:
      "Corner residence in a waterfront tower with marina views and private lift lobby.",
    propertyType: "condominium",
    status: "sold",
    location: { label: "Monaco", country: "Monaco", city: "Monaco" },
    pricing: { display: "Sold" },
    media: {
      heroImage: img(
        "photo-1600047509807-ba8f99d2cdde",
        "Luxury condominium living room",
      ),
    },
    residential: {
      totalArea: 185,
      bedrooms: 2,
      bathrooms: 2,
      parking: 1,
      yearBuilt: 2017,
    },
    seo: { description: "Waterfront condominium residence in Monaco.", noIndex: false },
    publishedAt: "2024-12-01",
  },
  {
    id: "p10",
    slug: "mixed-use-investment",
    name: "Mixed-Use Investment",
    shortDescription:
      "Stabilised mixed-use asset combining street-level retail with residential income.",
    propertyType: "investment",
    status: "available",
    featured: true,
    tags: ["investment"],
    location: { label: "Barcelona, Spain", country: "Spain", city: "Barcelona" },
    pricing: { amount: 12500000, currency: "EUR" },
    media: {
      heroImage: img(
        "photo-1545324418-cc1a3fa10c00",
        "Urban mixed-use building at street level",
      ),
    },
    investment: {
      yield: "4.8% net",
      tenancy: "Multi-tenant",
      highlights: ["Retail anchor", "12 residential units", "Recent capex cycle"],
    },
    commercial: { floors: 8, units: 13 },
    seo: { description: "Mixed-use investment asset in central Barcelona." },
    publishedAt: "2025-03-01",
  },
];
