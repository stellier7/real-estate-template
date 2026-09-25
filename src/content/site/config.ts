export const siteConfig = {
  name: "Studio Estate",
  tagline: "Premium real estate portfolio",
  description:
    "A production-ready template for luxury real-estate firms—editorial property storytelling, scalable listings, and immersive galleries.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  defaultOgImage:
    "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80",
  contactEmail: "hello@studio-estate.example",
  whatsapp: {
    display: "+504 9678-4674",
    e164: "50496784674",
    defaultMessage:
      "Hello, I would like information about your properties.",
  },
  offices: [
    {
      city: "Honduras",
      address: "Contact via WhatsApp for appointments",
      phone: "+504 9678-4674",
    },
  ],
  nav: [
    { label: "Properties", href: "/properties" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
} as const;
