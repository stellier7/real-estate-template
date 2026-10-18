import type { SiteConfig } from "./types";
import { NEEDS_INPUT } from "./types";
import {
  defaultNav,
  defaultUi,
  imagePaths,
  neutralBrandColors,
} from "./ui-defaults";

const prospectId = "rony-sorto";
const images = imagePaths(prospectId);

/**
 * Prospect content for this branch.
 * Change only this file and /public/images/<prospectId>/ on prospect branches.
 */
export const siteConfig: SiteConfig = {
  prospectId,
  name: "Rony Sorto – Bienes Raíces Comayagua",
  tagline: "Consulte a los expertos",
  description:
    "Venta de terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz. Asesoría directa, local y disponible las 24 horas.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es",
  tone: "directo, práctico y local",
  brand: {
    colors: neutralBrandColors,
    colorsStatus: NEEDS_INPUT,
    logoStatus: NEEDS_INPUT,
  },
  images,
  contactEmail: NEEDS_INPUT,
  phone: {
    display: "9606-6416",
    e164: "50496066416",
  },
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
      hours: "24 horas",
    },
  ],
  socials: [
    {
      label: "Facebook",
      href: "https://www.facebook.com/RonySortoBR",
    },
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
    {
      label: "X",
      href: "https://x.com/RonySortoBR",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/results?search_query=Rony+Sorto+Bienes+Ra%C3%ADces+Comayagua",
    },
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
  ctaPreference: "WhatsApp primero, luego teléfono",
  homepage: {
    heroHeadline: "Bienes raíces en Comayagua con asesoría directa",
    heroSupporting:
      "Terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz. Consulte a los expertos — disponible las 24 horas.",
    primaryCtaLabel: "Hablar por WhatsApp",
    secondaryCtaLabel: "Ver propiedades",
  },
  seo: {
    metaTitle: "Rony Sorto – Bienes Raíces Comayagua",
    metaDescription:
      "Terrenos y casas en Comayagua, Palmerola, Lago de Yojoa y La Paz. Consulte a los expertos por WhatsApp las 24 horas.",
    privacyText: NEEDS_INPUT,
    defaultOgImage: images.hero,
  },
  nav: defaultNav,
  ui: {
    ...defaultUi,
    whatsappBlurb:
      "Escríbanos por WhatsApp para consultas sobre terrenos, casas o asesoría. Respondemos las 24 horas.",
  },
};
