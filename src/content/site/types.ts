export const NEEDS_INPUT = "needs input" as const;

export type NeedsInput = typeof NEEDS_INPUT;

export type SiteNavItem = {
  label: string;
  href: string;
};

export type SiteOffice = {
  city: string;
  address: string;
  phone?: string;
  hours?: string;
};

export type SiteSocial = {
  label: string;
  href: string;
};

export type SiteService = {
  title: string;
  body: string;
};

export type SiteTeamMember = {
  name: string;
  role: string;
  bio?: string;
  photo?: string;
};

export type SiteBrandColors = {
  background: string;
  foreground: string;
  muted: string;
  accent: string;
  surface: string;
};

export type SiteImages = {
  /** Folder under /public, e.g. /images/rony-sorto */
  folder: string;
  logo: string;
  logoDark: string;
  hero: string;
  /** Filenames expected in the images folder (documented in README). */
  expectedFiles: string[];
};

export type SiteUiCopy = {
  propertiesNav: string;
  aboutNav: string;
  servicesNav: string;
  contactNav: string;
  viewDirectory: string;
  viewProperty: string;
  featuredHeading: string;
  noProperties: string;
  noPropertiesHint: string;
  marketsHeading: string;
  servicesHeading: string;
  contactHeading: string;
  whatsappCta: string;
  whatsappBlurb: string;
  footerExplore: string;
  footerContact: string;
  footerRights: string;
  pendingLabel: string;
};

export type SiteConfig = {
  /** Stable id used for /public/images/<id>/ */
  prospectId: string;
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: "es";
  tone: string;
  brand: {
    colors: SiteBrandColors;
    /** Set to needs input until the owner supplies a palette. */
    colorsStatus: string;
    logoStatus: string;
  };
  images: SiteImages;
  contactEmail: string;
  whatsapp: {
    display: string;
    e164: string;
    defaultMessage: string;
    bitly?: string;
  };
  phone: {
    display: string;
    e164: string;
  };
  hours: string;
  offices: SiteOffice[];
  socials: SiteSocial[];
  markets: string[];
  about: {
    story: string;
    team: SiteTeamMember[] | NeedsInput;
    credentials: string;
  };
  services: SiteService[] | NeedsInput;
  /** WhatsApp first, then phone, etc. */
  ctaPreference: string;
  homepage: {
    heroHeadline: string;
    heroSupporting: string;
    primaryCtaLabel: string;
    secondaryCtaLabel: string;
  };
  seo: {
    metaTitle: string;
    metaDescription: string;
    privacyText: string;
    defaultOgImage: string;
  };
  nav: SiteNavItem[];
  ui: SiteUiCopy;
};
