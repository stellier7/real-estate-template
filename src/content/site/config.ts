import { NEEDS_INPUT } from "./needs-input";

const prospectId = "rony-sorto";
const imageFolder = `/images/${prospectId}`;

/**
 * Prospect content for this branch (Altair template base).
 * On prospect branches, change only this file and /public/images/<prospectId>/.
 */
export const siteConfig = {
  prospectId,
  name: "Rony Sorto – Bienes Raíces Comayagua",
  /** Short label in the header mark */
  brandShort: "Rony Sorto",
  heroImage: `${imageFolder}/hero.svg`,
  tagline: "Consulte a los expertos",
  description:
    "Venta de terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz. Asesoría directa, local y disponible las 24 horas.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  defaultOgImage: `${imageFolder}/hero.svg`,
  logo: `${imageFolder}/logo.svg`,
  logoFull: `${imageFolder}/logo.svg`,
  contactEmail: NEEDS_INPUT,
  phone: "9606-6416",
  mobile: "9606-6416",
  whatsapp: {
    display: "9606-6416",
    e164: "50496066416",
    defaultMessage:
      "Hola, me interesa obtener información sobre una propiedad. ¿Podrían asesorarme?",
    bitly: "https://bit.ly/BienesRaicesWhatsApp",
  },
  hours: "24 horas",
  offices: [
    {
      city: "Comayagua",
      address: "Colonia El INVA, una cuadra arriba del Hotel Morales",
      phone: "9606-6416",
    },
  ],
  socials: [
    { label: "Facebook", href: "https://www.facebook.com/RonySortoBR" },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ronysortobrcomayagua",
    },
    {
      label: "TikTok",
      href: "https://www.tiktok.com/@ronysortobrcomayagua",
    },
    {
      label: "TikTok Noticias",
      href: "https://www.tiktok.com/@ronysortonoticias",
    },
    { label: "X", href: "https://x.com/RonySortoBR" },
  ],
  markets: ["Comayagua", "Palmerola", "Lago de Yojoa", "La Paz"],
  about: {
    story:
      "Rony Sorto – Bienes Raíces Comayagua brinda asesoría directa a compradores y vendedores en Comayagua y zonas aledañas. Trabajamos con un enfoque práctico y local: terrenos (manzanas para uso agrícola, ganadero u hotelero) y casas en sectores como Quinta Valladolid, Barrio La Sabana y La Jaguita. Atención por llamada o WhatsApp las 24 horas.",
    team: NEEDS_INPUT,
    credentials: NEEDS_INPUT,
  },
  services: [
    {
      title: "Venta de terrenos",
      body: "Manzanas para agricultura, ganadería o proyectos hoteleros en Comayagua y alrededores.",
    },
    {
      title: "Venta de casas",
      body: "Propiedades en Quinta Valladolid, Barrio La Sabana, La Jaguita y sectores cercanos.",
    },
    {
      title: "Asesoría local",
      body: "Orientación clara sobre el mercado en Comayagua, Palmerola, Lago de Yojoa y La Paz.",
    },
  ],
  homepage: {
    heroSupporting: "Consulte a los expertos — disponible las 24 horas",
    heroLead:
      "Terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz.",
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
    metaTitle: "Rony Sorto – Bienes Raíces Comayagua",
    metaDescription:
      "Terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz. Consulte a los expertos por WhatsApp las 24 horas.",
    privacyText: NEEDS_INPUT,
  },
  brand: {
    colorsStatus: NEEDS_INPUT,
    logoStatus: NEEDS_INPUT,
    /** Neutral palette until the owner supplies brand colors. */
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
  homeFeaturedPropertySlugs: [] as string[],
  sourceWebsite: "",
  ctaPreference: "WhatsApp primero, luego teléfono",
  tone: "directo, práctico y local",
};
