/**
 * Generates prospect site configs and image folders for each prospect branch.
 * Run from repo root: node scripts/prospect-configs.mjs <prospectId>
 */
import fs from "node:fs";
import path from "node:path";

const NEEDS_INPUT = "needs input";

const prospects = {
  "bienes-raices-y-construccion": {
    branch: "prospect/bienes-raices-y-construccion",
    name: "Bienes Raíces y Construcción (BRC)",
    tagline: NEEDS_INPUT,
    description: NEEDS_INPUT,
    phoneDisplay: "+504 9606-5710",
    phoneE164: "50496065710",
    whatsappDisplay: NEEDS_INPUT,
    whatsappE164: NEEDS_INPUT,
    email: NEEDS_INPUT,
    hours: NEEDS_INPUT,
    address: "Barrio San Sebastián, esquina opuesta a Infinitum, una cuadra al este de Mall Premier, Comayagua",
    socials: [],
    markets: ["Comayagua"],
    aboutStory:
      "Ayudamos a propietarios a vender casa, terreno o apartamento: estudio de mercado para fijar el mejor precio, promoción en los mejores canales y asesoría personalizada.",
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
      },
    ],
    homepage: {
      heroHeadline: "Venda su propiedad con asesoría personalizada",
      heroSupporting:
        "Estudio de mercado, promoción en los mejores canales y acompañamiento directo en Comayagua.",
      primaryCtaLabel: "Hablar por WhatsApp",
      secondaryCtaLabel: "Ver propiedades",
    },
    seoTitle: "Bienes Raíces y Construcción (BRC) · Comayagua",
    seoDescription:
      "Ayudamos a vender casa, terreno o apartamento en Comayagua con estudio de mercado y asesoría personalizada.",
  },
  incom: {
    branch: "prospect/incom",
    name: "Inmobiliaria Comayagua, INCOM",
    phoneDisplay: "+504 2772-4525",
    phoneE164: "50427724525",
    address: "Cero Calle Este, Comayagua",
  },
  inar: {
    branch: "prospect/inar",
    name: "Inmobiliaria INAR",
    phoneDisplay: "+504 2772-9940",
    phoneE164: "50427729940",
    address: "Blvd. Roberto Romero Larios, frente a Plaza Santa Mónica",
  },
  "canales-real-estate": {
    branch: "prospect/canales-real-estate",
    name: "Canales Real Estate",
    phoneDisplay: "+504 9561-8189",
    phoneE164: "50495618189",
    address: "11a Calle SE, Comayagua",
  },
  "lotes-comayagua": {
    branch: "prospect/lotes-comayagua",
    name: "Lotes Comayagua",
    phoneDisplay: "+504 2772-0766",
    phoneE164: "50427720766",
    address: "5a Calle NO, Comayagua",
  },
  "grupo-los-olivos": {
    branch: "prospect/grupo-los-olivos",
    name: "Grupo Los Olivos Honduras",
    phoneDisplay: "+504 3213-7021",
    phoneE164: "50432137021",
    address: "Frente a Ferretería SUMAR, Comayagua",
  },
  "hogares-de-amor": {
    branch: "prospect/hogares-de-amor",
    name: "Bienes & Raíces Hogares de Amor",
    phoneDisplay: "+504 9740-9745",
    phoneE164: "50497409745",
    address: "3a Ave SE, una cuadra al este de Mall Premier, Comayagua",
  },
};

function escape(str) {
  return String(str).replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function buildConfig(id, data) {
  const isPartial = !data.aboutStory;
  const whatsappE164 = data.whatsappE164 ?? NEEDS_INPUT;
  const whatsappDisplay = data.whatsappDisplay ?? NEEDS_INPUT;
  const tagline = data.tagline ?? NEEDS_INPUT;
  const description = data.description ?? NEEDS_INPUT;
  const aboutStory = data.aboutStory ?? NEEDS_INPUT;
  const servicesBlock = data.services
    ? JSON.stringify(data.services, null, 2).replace(/"([^"]+)":/g, "$1:")
    : "NEEDS_INPUT";
  const socialsBlock = data.socials
    ? JSON.stringify(data.socials, null, 2).replace(/"([^"]+)":/g, "$1:")
    : "[]";
  const marketsBlock = JSON.stringify(data.markets ?? []);
  const homepage = data.homepage ?? {
    heroHeadline: NEEDS_INPUT,
    heroSupporting: NEEDS_INPUT,
    primaryCtaLabel: "Hablar por WhatsApp",
    secondaryCtaLabel: "Ver propiedades",
  };
  const seoTitle = data.seoTitle ?? NEEDS_INPUT;
  const seoDescription = data.seoDescription ?? NEEDS_INPUT;
  const hours = data.hours ?? NEEDS_INPUT;
  const email = data.email ?? NEEDS_INPUT;

  // Fix services/socials to use NEEDS_INPUT constant and proper TS
  let servicesTs;
  if (data.services) {
    servicesTs = `[\n${data.services
      .map(
        (s) =>
          `    {\n      title: "${escape(s.title)}",\n      body: "${escape(s.body)}",\n    }`,
      )
      .join(",\n")}\n  ]`;
  } else {
    servicesTs = "NEEDS_INPUT";
  }

  let socialsTs;
  if (data.socials?.length) {
    socialsTs = `[\n${data.socials
      .map(
        (s) =>
          `    {\n      label: "${escape(s.label)}",\n      href: "${escape(s.href)}",\n    }`,
      )
      .join(",\n")}\n  ]`;
  } else {
    socialsTs = "[]";
  }

  const whatsappDefault =
    whatsappE164 === NEEDS_INPUT
      ? NEEDS_INPUT
      : "Hola, me interesa obtener información sobre una propiedad. ¿Podrían asesorarme?";

  return `import type { SiteConfig } from "./types";
import { NEEDS_INPUT } from "./types";
import {
  defaultNav,
  defaultUi,
  imagePaths,
  neutralBrandColors,
} from "./ui-defaults";

const prospectId = "${id}";
const images = imagePaths(prospectId);

/**
 * Prospect content for this branch.
 * Change only this file and /public/images/<prospectId>/ on prospect branches.
 */
export const siteConfig: SiteConfig = {
  prospectId,
  name: "${escape(data.name)}",
  tagline: ${tagline === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(tagline)}"`},
  description: ${
    description === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(description)}"`
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  locale: "es",
  tone: ${isPartial ? "NEEDS_INPUT" : `"profesional y local"`},
  brand: {
    colors: neutralBrandColors,
    colorsStatus: NEEDS_INPUT,
    logoStatus: NEEDS_INPUT,
  },
  images,
  contactEmail: ${email === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(email)}"`},
  phone: {
    display: "${escape(data.phoneDisplay)}",
    e164: "${escape(data.phoneE164)}",
  },
  whatsapp: {
    display: ${
      whatsappDisplay === NEEDS_INPUT
        ? "NEEDS_INPUT"
        : `"${escape(whatsappDisplay)}"`
    },
    e164: ${
      whatsappE164 === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(whatsappE164)}"`
    },
    defaultMessage: ${
      whatsappDefault === NEEDS_INPUT
        ? "NEEDS_INPUT"
        : `"${escape(whatsappDefault)}"`
    },
  },
  hours: ${hours === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(hours)}"`},
  offices: [
    {
      city: "Comayagua",
      address: "${escape(data.address)}",
      phone: "${escape(data.phoneDisplay)}",
      hours: ${hours === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(hours)}"`},
    },
  ],
  socials: ${socialsTs},
  markets: ${marketsBlock},
  about: {
    story: ${
      aboutStory === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(aboutStory)}"`
    },
    team: NEEDS_INPUT,
    credentials: NEEDS_INPUT,
  },
  services: ${servicesTs},
  ctaPreference: "WhatsApp primero, luego teléfono",
  homepage: {
    heroHeadline: ${
      homepage.heroHeadline === NEEDS_INPUT
        ? "NEEDS_INPUT"
        : `"${escape(homepage.heroHeadline)}"`
    },
    heroSupporting: ${
      homepage.heroSupporting === NEEDS_INPUT
        ? "NEEDS_INPUT"
        : `"${escape(homepage.heroSupporting)}"`
    },
    primaryCtaLabel: "${escape(homepage.primaryCtaLabel)}",
    secondaryCtaLabel: "${escape(homepage.secondaryCtaLabel)}",
  },
  seo: {
    metaTitle: ${
      seoTitle === NEEDS_INPUT ? "NEEDS_INPUT" : `"${escape(seoTitle)}"`
    },
    metaDescription: ${
      seoDescription === NEEDS_INPUT
        ? "NEEDS_INPUT"
        : `"${escape(seoDescription)}"`
    },
    privacyText: NEEDS_INPUT,
    defaultOgImage: images.hero,
  },
  nav: defaultNav,
  ui: defaultUi,
};
`;
}

const heroSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1800" height="1200" viewBox="0 0 1800 1200" role="img" aria-label="Marcador de posición">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#d8d6d0"/>
      <stop offset="100%" stop-color="#b7b4ac"/>
    </linearGradient>
  </defs>
  <rect width="1800" height="1200" fill="url(#g)"/>
  <rect x="120" y="820" width="520" height="18" fill="#3f4f3c" opacity="0.35"/>
  <rect x="120" y="860" width="340" height="10" fill="#1c1b19" opacity="0.2"/>
</svg>
`;

function logoSvg(label, dark = false) {
  const bg = dark ? "#1c1b19" : "#f4f3ef";
  const fg = dark ? "#f4f3ef" : "#1c1b19";
  const accent = dark ? "#c5cfc0" : "#3f4f3c";
  const short = label.length > 28 ? `${label.slice(0, 26)}…` : label;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="320" height="80" viewBox="0 0 320 80" role="img" aria-label="Logo pendiente">
  <rect width="320" height="80" fill="${bg}"/>
  <rect x="8" y="8" width="8" height="64" fill="${accent}"/>
  <text x="28" y="48" font-family="Georgia, serif" font-size="18" fill="${fg}">${short.replace(/&/g, "&amp;")}</text>
</svg>
`;
}

function writeImages(id, name) {
  const dir = path.join("public", "images", id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "hero.svg"), heroSvg);
  fs.writeFileSync(path.join(dir, "logo.svg"), logoSvg(name));
  fs.writeFileSync(path.join(dir, "logo-dark.svg"), logoSvg(name, true));
  fs.writeFileSync(
    path.join(dir, "README.md"),
    `# Images — ${name}

Replace the neutral placeholders in this folder with owned assets.

## Required filenames

| Filename | Purpose | Status |
|----------|---------|--------|
| \`logo.svg\` or \`logo.png\` | Primary logo (light backgrounds) | Placeholder — needed |
| \`logo-dark.svg\` or \`logo-dark.png\` | Logo for dark sections | Placeholder — needed |
| \`hero.jpg\` | Homepage full-bleed hero | Using \`hero.svg\` until real photo arrives |
| \`gallery-01.jpg\` | Optional site gallery | Needed |
| \`gallery-02.jpg\` | Optional site gallery | Needed |
| \`gallery-03.jpg\` | Optional site gallery | Needed |
| \`gallery-04.jpg\` | Optional site gallery | Needed |
| \`team-01.jpg\` | Team photo (if team section is used) | Needed when team is provided |

After adding real files, update paths in \`src/content/site/config.ts\` if you change extensions.
`,
  );
}

const id = process.argv[2];
if (!id || !prospects[id]) {
  console.error(
    "Usage: node scripts/prospect-configs.mjs <prospectId>\nIds:",
    Object.keys(prospects).join(", "),
  );
  process.exit(1);
}

const data = prospects[id];
fs.writeFileSync("src/content/site/config.ts", buildConfig(id, data));
writeImages(id, data.name);

// Remove other prospect image folders that shouldn't live on this branch
const imagesRoot = path.join("public", "images");
for (const entry of fs.readdirSync(imagesRoot)) {
  if (entry === id || entry === "properties" || entry === "site") continue;
  const full = path.join(imagesRoot, entry);
  if (fs.statSync(full).isDirectory()) {
    fs.rmSync(full, { recursive: true, force: true });
  }
}

console.log(`Wrote config + images for ${id} (${data.branch})`);
