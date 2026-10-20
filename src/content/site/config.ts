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
  heroLayout: "portrait" as const,
  heroImage: `${imageFolder}/comayagua-aerial.jpg`,
  heroPortrait: `${imageFolder}/hero-sticker-soft.png`,
  heroBackground: `${imageFolder}/comayagua-aerial.jpg`,
  tagline: "Consulte a los expertos",
  description:
    "Venta de terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz. Asesoría directa, local y disponible las 24 horas.",
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  defaultOgImage: `${imageFolder}/comayagua-cathedral.jpg`,
  logo: `${imageFolder}/logo.jpg`,
  logoFull: `${imageFolder}/logo.jpg`,
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
  markets: [
    {
      name: "Comayagua",
      image: `${imageFolder}/markets/comayagua.jpg`,
      alt: "Letras monumentales COMAYAGUA en la plaza",
    },
    {
      name: "Palmerola",
      image: `${imageFolder}/markets/palmerola.jpg`,
      alt: "Señalética del Aeropuerto Internacional Palmerola",
    },
    {
      name: "Lago de Yojoa",
      image: `${imageFolder}/markets/lago-de-yojoa.jpg`,
      alt: "Letras LAGO DE YOJOA frente al lago y las montañas",
    },
    {
      name: "La Paz",
      image: `${imageFolder}/markets/la-paz.jpg`,
      alt: "Plaza y letras LA PAZ en el centro de La Paz",
    },
  ],
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
    heroHeadline: "Construya su futuro con Seguridad y Confianza",
    heroSupporting: "Rony Sorto — Asesor inmobiliario",
    heroLead:
      "Terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz. Atención directa las 24 horas.",
    heroLocation: "Comayagua, Honduras",
    primaryCtaLabel: "Contactar ahora",
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
    colorsStatus: "brand teal provided",
    logoStatus: "logo.jpg provided",
    /** Deep teal brand accent (replaces earlier gold pulled from flyer art). */
    colors: {
      background: "#f6f5f2",
      foreground: "#1c1a24",
      muted: "#5a564f",
      accent: "#215048",
      accentHover: "#1a4039",
      accentSoft: "rgba(33, 80, 72, 0.14)",
      surface: "#ffffff",
    },
  },
  nav: [
    { label: "Propiedades", href: "/properties" },
    { label: "Nosotros", href: "/about" },
    { label: "Servicios", href: "/services" },
    { label: "Contacto", href: "/contact" },
  ],
  homeFeaturedPropertySlugs: [
    "propiedad-11-cuartos-comayagua-rs01",
    "casa-amueblada-atras-wendys-renta-rs02",
    "la-jaguita-propiedad-venta-rs04",
  ],
  sourceWebsite: "",
  ctaPreference: "WhatsApp primero, luego teléfono",
  tone: "directo, práctico y local",
};
