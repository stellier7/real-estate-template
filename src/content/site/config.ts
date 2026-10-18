import { NEEDS_INPUT } from "./needs-input";

const prospectId = "incom";
const imageFolder = `/images/${prospectId}`;

/**
 * Prospect content for this branch (Altair template base).
 * On prospect branches, change only this file and /public/images/<prospectId>/.
 */
export const siteConfig = {
  prospectId,
  name: "Inmobiliaria Comayagua, INCOM",
  brandShort: "INCOM",
  heroImage: `${imageFolder}/hero.svg`,
  tagline: NEEDS_INPUT,
  description: NEEDS_INPUT,
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  defaultOgImage: `${imageFolder}/hero.svg`,
  logo: `${imageFolder}/logo.svg`,
  logoFull: `${imageFolder}/logo.svg`,
  contactEmail: NEEDS_INPUT,
  phone: "+504 2772-4525",
  mobile: "+504 2772-4525",
  whatsapp: {
    display: NEEDS_INPUT,
    e164: NEEDS_INPUT,
    defaultMessage: NEEDS_INPUT,
  },
  hours: NEEDS_INPUT,
  offices: [
    {
      city: "Comayagua",
      address: "Cero Calle Este, Comayagua",
      phone: "+504 2772-4525",
    },
  ],
  socials: [] as { label: string; href: string }[],
  markets: [],
  about: {
    story: NEEDS_INPUT,
    team: NEEDS_INPUT,
    credentials: NEEDS_INPUT,
  },
  services: NEEDS_INPUT,
  homepage: {
    heroSupporting: NEEDS_INPUT,
    heroLead: NEEDS_INPUT,
    heroLocation: "Comayagua, Honduras",
    primaryCtaLabel: "Hablar por WhatsApp",
    catalogCtaLabel: "Ver propiedades",
    aboutEyebrow: "Nosotros",
    aboutHeading: "Quiénes somos",
    featuredEyebrow: "Catálogo",
    featuredHeading: "Inmuebles destacados",
    servicesEyebrow: "Oferta",
    servicesHeading: "Servicios",
    marketsHeading: "Zonas de atención",
    emptyCatalog:
      "Aún no hay propiedades publicadas. Escríbanos por WhatsApp mientras preparamos el catálogo.",
    pendingLabel: "Pendiente de información",
  },
  seo: {
    metaTitle: NEEDS_INPUT,
    metaDescription: NEEDS_INPUT,
    privacyText: NEEDS_INPUT,
  },
  brand: {
    colorsStatus: NEEDS_INPUT,
    logoStatus: NEEDS_INPUT,
    colors: {
      background: "#f0eeea",
      foreground: "#1c1b19",
      muted: "#5e5a54",
      accent: "#3f4f3c",
      accentHover: "#334032",
      accentSoft: "rgba(63, 79, 60, 0.14)",
      surface: "#f7f5f1",
    },
  },
  nav: [
    { label: "Propiedades", href: "/properties" },
    { label: "Nosotros", href: "/about" },
    { label: "Servicios", href: "/services" },
    { label: "Contacto", href: "/contact" },
  ],
  homeFeaturedPropertySlugs: [],
  sourceWebsite: "",
  ctaPreference: "WhatsApp primero, luego teléfono",
  tone: NEEDS_INPUT,
};
