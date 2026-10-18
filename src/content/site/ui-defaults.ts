import type { SiteBrandColors, SiteNavItem, SiteUiCopy } from "./types";

export const neutralBrandColors: SiteBrandColors = {
  background: "#f4f3ef",
  foreground: "#1c1b19",
  muted: "#5e5a54",
  accent: "#3f4f3c",
  surface: "#ffffff",
};

export const defaultNav: SiteNavItem[] = [
  { label: "Propiedades", href: "/properties" },
  { label: "Nosotros", href: "/about" },
  { label: "Servicios", href: "/services" },
  { label: "Contacto", href: "/contact" },
];

export const defaultUi: SiteUiCopy = {
  propertiesNav: "Propiedades",
  aboutNav: "Nosotros",
  servicesNav: "Servicios",
  contactNav: "Contacto",
  viewDirectory: "Ver directorio",
  viewProperty: "Ver propiedad",
  featuredHeading: "Propiedades destacadas",
  noProperties: "Aún no hay propiedades publicadas.",
  noPropertiesHint:
    "Las fichas se agregarán aquí cuando estén listas. Mientras tanto, escríbanos por WhatsApp.",
  marketsHeading: "Zonas de atención",
  servicesHeading: "Servicios",
  contactHeading: "Hablemos",
  whatsappCta: "Hablar por WhatsApp",
  whatsappBlurb:
    "Escríbanos por WhatsApp para consultas sobre terrenos, casas o asesoría.",
  footerExplore: "Explorar",
  footerContact: "Contacto",
  footerRights: "Todos los derechos reservados.",
  pendingLabel: "Pendiente de información",
};

export const expectedImageFiles = [
  "logo.svg",
  "logo-dark.svg",
  "hero.jpg",
  "gallery-01.jpg",
  "gallery-02.jpg",
  "gallery-03.jpg",
  "gallery-04.jpg",
  "team-01.jpg",
] as const;

export function imagePaths(prospectId: string) {
  const folder = `/images/${prospectId}`;
  return {
    folder,
    logo: `${folder}/logo.svg`,
    logoDark: `${folder}/logo-dark.svg`,
    hero: `${folder}/hero.svg`,
    expectedFiles: [...expectedImageFiles],
  };
}
