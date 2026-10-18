/**
 * Generates Altair-based prospect site configs and image folders.
 * Usage: node scripts/prospect-configs.mjs <prospectId>
 */
import fs from "node:fs";
import path from "node:path";

const NEEDS_INPUT = "needs input";

const neutralColors = `{
      background: "#f0eeea",
      foreground: "#1c1b19",
      muted: "#5e5a54",
      accent: "#3f4f3c",
      accentHover: "#334032",
      accentSoft: "rgba(63, 79, 60, 0.14)",
      surface: "#f7f5f1",
    }`;

const homepageDefaults = `{
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
  }`;

const prospects = {
  "bienes-raices-y-construccion": {
    branch: "prospect/bienes-raices-y-construccion",
    name: "Bienes Raíces y Construcción (BRC)",
    brandShort: "BRC",
    phoneDisplay: "+504 9606-5710",
    phoneE164: "50496065710",
    whatsappDisplay: NEEDS_INPUT,
    whatsappE164: NEEDS_INPUT,
    address:
      "Barrio San Sebastián, esquina opuesta a Infinitum, una cuadra al este de Mall Premier, Comayagua",
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
      heroSupporting: "Asesoría personalizada en Comayagua",
      heroLead:
        "Estudio de mercado, promoción en los mejores canales y acompañamiento directo.",
      heroLocation: "Comayagua, Honduras",
    },
    seoTitle: "Bienes Raíces y Construcción (BRC) · Comayagua",
    seoDescription:
      "Ayudamos a vender casa, terreno o apartamento en Comayagua con estudio de mercado y asesoría personalizada.",
    markets: ["Comayagua"],
  },
  incom: {
    name: "Inmobiliaria Comayagua, INCOM",
    brandShort: "INCOM",
    phoneDisplay: "+504 2772-4525",
    phoneE164: "50427724525",
    address: "Cero Calle Este, Comayagua",
  },
  inar: {
    name: "Inmobiliaria INAR",
    brandShort: "INAR",
    phoneDisplay: "+504 2772-9940",
    phoneE164: "50427729940",
    address: "Blvd. Roberto Romero Larios, frente a Plaza Santa Mónica",
  },
  "canales-real-estate": {
    name: "Canales Real Estate",
    brandShort: "Canales",
    phoneDisplay: "+504 9561-8189",
    phoneE164: "50495618189",
    address: "11a Calle SE, Comayagua",
  },
  "lotes-comayagua": {
    name: "Lotes Comayagua",
    brandShort: "Lotes",
    phoneDisplay: "+504 2772-0766",
    phoneE164: "50427720766",
    address: "5a Calle NO, Comayagua",
  },
  "grupo-los-olivos": {
    name: "Grupo Los Olivos Honduras",
    brandShort: "Los Olivos",
    phoneDisplay: "+504 3213-7021",
    phoneE164: "50432137021",
    address: "Frente a Ferretería SUMAR, Comayagua",
  },
  "hogares-de-amor": {
    name: "Bienes & Raíces Hogares de Amor",
    brandShort: "Hogares de Amor",
    phoneDisplay: "+504 9740-9745",
    phoneE164: "50497409745",
    address: "3a Ave SE, una cuadra al este de Mall Premier, Comayagua",
  },
};

function esc(str) {
  return String(str).replace(/\\/g, "\\\\").replace(/"/g, '\\"');
}

function lit(value) {
  if (value === NEEDS_INPUT) return "NEEDS_INPUT";
  return `"${esc(value)}"`;
}

function buildConfig(id, data) {
  const whatsappE164 = data.whatsappE164 ?? NEEDS_INPUT;
  const whatsappDisplay = data.whatsappDisplay ?? NEEDS_INPUT;
  const aboutStory = data.aboutStory ?? NEEDS_INPUT;
  const markets = JSON.stringify(data.markets ?? []);
  const servicesTs = data.services
    ? `[\n${data.services
        .map(
          (s) =>
            `    {\n      title: "${esc(s.title)}",\n      body: "${esc(s.body)}",\n    }`,
        )
        .join(",\n")}\n  ]`
    : "NEEDS_INPUT";

  const hp = data.homepage ?? {};
  const homepageTs = `{
    heroSupporting: ${lit(hp.heroSupporting ?? NEEDS_INPUT)},
    heroLead: ${lit(hp.heroLead ?? NEEDS_INPUT)},
    heroLocation: ${lit(hp.heroLocation ?? "Comayagua, Honduras")},
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
  }`;

  const whatsappMessage =
    whatsappE164 === NEEDS_INPUT
      ? "NEEDS_INPUT"
      : `"Hola, me interesa obtener información sobre una propiedad. ¿Podrían asesorarme?"`;

  return `import { NEEDS_INPUT } from "./needs-input";

const prospectId = "${id}";
const imageFolder = \`/images/\${prospectId}\`;

/**
 * Prospect content for this branch (Altair template base).
 * On prospect branches, change only this file and /public/images/<prospectId>/.
 */
export const siteConfig = {
  prospectId,
  name: "${esc(data.name)}",
  brandShort: "${esc(data.brandShort)}",
  heroImage: \`\${imageFolder}/hero.svg\`,
  tagline: ${lit(data.tagline ?? NEEDS_INPUT)},
  description: ${lit(data.description ?? NEEDS_INPUT)},
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? \`https://\${process.env.VERCEL_URL}\`
      : "http://localhost:3000"),
  defaultOgImage: \`\${imageFolder}/hero.svg\`,
  logo: \`\${imageFolder}/logo.svg\`,
  logoFull: \`\${imageFolder}/logo.svg\`,
  contactEmail: NEEDS_INPUT,
  phone: "${esc(data.phoneDisplay)}",
  mobile: "${esc(data.phoneDisplay)}",
  whatsapp: {
    display: ${lit(whatsappDisplay)},
    e164: ${lit(whatsappE164)},
    defaultMessage: ${whatsappMessage},
  },
  hours: NEEDS_INPUT,
  offices: [
    {
      city: "Comayagua",
      address: "${esc(data.address)}",
      phone: "${esc(data.phoneDisplay)}",
    },
  ],
  socials: [],
  markets: ${markets},
  about: {
    story: ${lit(aboutStory)},
    team: NEEDS_INPUT,
    credentials: NEEDS_INPUT,
  },
  services: ${servicesTs},
  homepage: ${homepageTs},
  seo: {
    metaTitle: ${lit(data.seoTitle ?? NEEDS_INPUT)},
    metaDescription: ${lit(data.seoDescription ?? NEEDS_INPUT)},
    privacyText: NEEDS_INPUT,
  },
  brand: {
    colorsStatus: NEEDS_INPUT,
    logoStatus: NEEDS_INPUT,
    colors: ${neutralColors},
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

function logoSvg(label) {
  const initials = label
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 3);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="176" height="176" viewBox="0 0 176 176" role="img" aria-label="Logo pendiente">
  <rect width="176" height="176" rx="88" fill="#f0eeea"/>
  <circle cx="88" cy="88" r="78" fill="none" stroke="#3f4f3c" stroke-width="3"/>
  <text x="88" y="98" text-anchor="middle" font-family="Georgia, serif" font-size="36" fill="#1c1b19">${initials}</text>
</svg>
`;
}

function writeImages(id, name) {
  const dir = path.join("public", "images", id);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "hero.svg"), heroSvg);
  fs.writeFileSync(path.join(dir, "logo.svg"), logoSvg(name));
  fs.writeFileSync(path.join(dir, "logo-dark.svg"), logoSvg(name));
  fs.writeFileSync(
    path.join(dir, "README.md"),
    `# Images — ${name}

Replace placeholders with owned assets.

| Filename | Purpose |
|----------|---------|
| \`logo.svg\` / \`logo.png\` | Header mark |
| \`logo-dark.svg\` / \`logo-dark.png\` | Dark sections |
| \`hero.jpg\` | Homepage hero |
| \`gallery-01.jpg\` … \`gallery-04.jpg\` | Optional gallery |
| \`team-01.jpg\` | Team (when provided) |

Update paths in \`src/content/site/config.ts\` if extensions change.
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

const imagesRoot = path.join("public", "images");
for (const entry of fs.readdirSync(imagesRoot)) {
  if (
    entry === id ||
    entry === "properties" ||
    entry === "site" ||
    entry === "properties-backup"
  ) {
    continue;
  }
  const full = path.join(imagesRoot, entry);
  if (fs.statSync(full).isDirectory()) {
    fs.rmSync(full, { recursive: true, force: true });
  }
}

console.log(`Wrote Altair-based config + images for ${id}`);
