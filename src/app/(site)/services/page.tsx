import type { Metadata } from "next";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Servicios",
  description: isNeedsInput(siteConfig.description)
    ? siteConfig.name
    : siteConfig.description,
  path: "/services",
});

export default function ServicesPage() {
  const services = Array.isArray(siteConfig.services) ? siteConfig.services : null;

  return (
    <>
      <Section>
        <RevealOnScroll variant="up">
          <h1 className="font-display text-5xl sm:text-6xl">Servicios</h1>
          <p className="prose-editorial mt-6 max-w-2xl">
            {isNeedsInput(siteConfig.description)
              ? siteConfig.homepage.pendingLabel
              : siteConfig.description}
          </p>
        </RevealOnScroll>
      </Section>
      <Section className="bg-surface">
        {services ? (
          <div className="grid gap-12 lg:grid-cols-2">
            {services.map((service, index) => (
              <RevealOnScroll
                key={service.title}
                as="article"
                variant={index % 2 === 0 ? "left" : "right"}
                delayMs={index * 90}
                className="border-t border-line pt-6"
              >
                <h2 className="font-display text-3xl">{service.title}</h2>
                <p className="prose-editorial mt-4">{service.body}</p>
              </RevealOnScroll>
            ))}
          </div>
        ) : (
          <p className="text-muted">{siteConfig.homepage.pendingLabel}</p>
        )}
        {hasWhatsApp() ? (
          <RevealOnScroll variant="up" delayMs={160}>
            <a
              href={buildWhatsAppUrl()}
              className="focus-ring mt-12 inline-block text-sm uppercase tracking-[0.18em] text-foreground underline decoration-line underline-offset-4 transition-colors hover:decoration-foreground/50"
              target="_blank"
              rel="noopener noreferrer"
            >
              {siteConfig.homepage.primaryCtaLabel} →
            </a>
          </RevealOnScroll>
        ) : null}
      </Section>
    </>
  );
}
