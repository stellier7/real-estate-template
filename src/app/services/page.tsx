import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { buildWhatsAppUrl } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

const services = [
  {
    title: "Private sales",
    body: "Discreet marketing for exceptional homes, estates, and coastal residences.",
  },
  {
    title: "Commercial advisory",
    body: "Positioning for office, retail, hospitality, and mixed-use assets.",
  },
  {
    title: "Land & development",
    body: "Narrative and data presentation for parcels, master plans, and approvals.",
  },
  {
    title: "Investment",
    body: "Clear reporting for yields, tenancy, and portfolio-level opportunities.",
  },
];

export const metadata: Metadata = buildSiteMetadata({
  title: "Services",
  description: "Advisory, sales, and marketing capabilities for premium real-estate assets.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Section>
        <h1 className="font-display text-5xl sm:text-6xl">Services</h1>
        <p className="prose-editorial mt-6 max-w-2xl">
          Customize this page with your practice areas. The layout is intentionally restrained so
          photography and property stories remain the focus.
        </p>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-12 lg:grid-cols-2">
          {services.map((service) => (
            <article key={service.title} className="border-t border-line pt-6">
              <h2 className="font-display text-3xl">{service.title}</h2>
              <p className="prose-editorial mt-4">{service.body}</p>
            </article>
          ))}
        </div>
        <a
          href={buildWhatsAppUrl("Hello, I would like to discuss a mandate.")}
          target="_blank"
          rel="noopener noreferrer"
          className="focus-ring mt-12 inline-flex text-sm uppercase tracking-[0.18em] text-accent"
        >
          Discuss on WhatsApp
        </a>
      </Section>
    </>
  );
}
