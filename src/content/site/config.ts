import { NEEDS_INPUT } from "./needs-input";

const prospectId = "bienes-raices-y-construccion";
const imageFolder = `/images/${prospectId}`;

/**
 * Prospect content for this branch (Altair template base).
 * On prospect branches, change only this file and /public/images/<prospectId>/.
 */
export const siteConfig = {
  prospectId,
  name: "Bienes Raíces y Construcción (BRC)",
  brandShort: "BRC",
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
  phone: "+504 9606-5710",
  mobile: "+504 9606-5710",
  whatsapp: {
    display: NEEDS_INPUT,
    e164: NEEDS_INPUT,
    defaultMessage: NEEDS_INPUT,
  },
  hours: NEEDS_INPUT,
  offices: [
    {
      city: "Comayagua",
      address: "Barrio San Sebastián, esquina opuesta a Infinitum, una cuadra al este de Mall Premier, Comayagua",
      phone: "+504 9606-5710",
    },
  ],
  socials: [],
  markets: ["Comayagua"],
  about: {
    story: "Ayudamos a propietarios a vender casa, terreno o apartamento: estudio de mercado para fijar el mejor precio, promoción en los mejores canales y asesoría personalizada.",
    team: NEEDS_INPUT,
    credentials: NEEDS_INPUT,
  },
  services: [
    {
      title: "Venta de casa, terreno o apartamento",
      body: "Acompañamiento para dueños que quieren vender con un precio bien fundamentado.",
    },
    {
      title: "Estudio de mercado",
      body: "Análisis para fijar el mejor precio según el mercado local.",
    },
    {
      title: "Promoción y asesoría",
      body: "Difusión en los mejores canales y asesoría personalizada durante el proceso.",
    }
  ],
  homepage: {
    heroSupporting: "Asesoría personalizada en Comayagua",
    heroLead: "Estudio de mercado, promoción en los mejores canales y acompañamiento directo.",
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
    metaTitle: "Bienes Raíces y Construcción (BRC) · Comayagua",
    metaDescription: "Ayudamos a vender casa, terreno o apartamento en Comayagua con estudio de mercado y asesoría personalizada.",
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
