import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: siteConfig.ui.servicesNav,
  description: siteConfig.description,
  path: "/services",
});

export default function ServicesPage() {
  const services = siteConfig.services;

  return (
    <>
      <Section>
        <h1 className="font-display text-5xl sm:text-6xl">
          {siteConfig.ui.servicesHeading}
        </h1>
        <p className="prose-editorial mt-6 max-w-2xl">
          {siteConfig.description}
        </p>
      </Section>
      <Section className="bg-surface">
        {Array.isArray(services) ? (
          <div className="grid gap-12 lg:grid-cols-2">
            {services.map((service) => (
              <article key={service.title} className="border-t border-line pt-6">
                <h2 className="font-display text-3xl">{service.title}</h2>
                <p className="prose-editorial mt-4">{service.body}</p>
              </article>
            ))}
          </div>
        ) : (
          <p className="text-muted">{siteConfig.ui.pendingLabel}</p>
        )}
        {hasWhatsApp() ? (
          <a
            href={buildWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-12 inline-flex text-sm uppercase tracking-[0.18em] text-accent"
          >
            {siteConfig.ui.whatsappCta}
          </a>
        ) : null}
      </Section>
    </>
  );
}
