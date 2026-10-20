import type { Metadata } from "next";
import { WhatsAppContact } from "@/components/contact/WhatsAppContact";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Contacto",
  description: `Contacto de ${siteConfig.name}`,
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <RevealOnScroll variant="left">
          <h1 className="font-display text-5xl sm:text-6xl">Contacto</h1>
          <p className="prose-editorial mt-6 max-w-xl">
            {hasWhatsApp()
              ? "Escríbanos por WhatsApp o llámenos para consultar sobre terrenos y casas."
              : "Llámenos o visite nuestra oficina para más información."}
          </p>
          <div className="mt-10 space-y-6 text-sm text-muted">
            {hasWhatsApp() ? (
              <p>
                <span className="block text-xs uppercase tracking-[0.2em]">
                  WhatsApp
                </span>
                <a
                  className="focus-ring text-lg text-foreground"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {siteConfig.whatsapp.display}
                </a>
              </p>
            ) : null}
            {!isNeedsInput(siteConfig.phone) ? (
              <p>
                <span className="block text-xs uppercase tracking-[0.2em]">
                  Teléfono
                </span>
                <a
                  className="focus-ring text-lg text-foreground"
                  href={`tel:${siteConfig.phone}`}
                >
                  {siteConfig.phone}
                </a>
              </p>
            ) : null}
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">
                Email
              </span>
              {isNeedsInput(siteConfig.contactEmail) ? (
                <span className="text-lg text-foreground">
                  {siteConfig.homepage.pendingLabel}
                </span>
              ) : (
                <a
                  className="focus-ring text-lg text-foreground"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
              )}
            </p>
            {!isNeedsInput(siteConfig.hours) ? (
              <p>
                <span className="block text-xs uppercase tracking-[0.2em]">
                  Horario
                </span>
                <span className="text-lg text-foreground">{siteConfig.hours}</span>
              </p>
            ) : null}
            {siteConfig.offices.map((office) => (
              <p key={`${office.city}-${office.address}`}>
                <span className="block text-xs uppercase tracking-[0.2em]">
                  {office.city}
                </span>
                {office.address}
              </p>
            ))}
            {siteConfig.socials.length > 0 ? (
              <div>
                <span className="block text-xs uppercase tracking-[0.2em]">
                  Redes
                </span>
                <ul className="mt-3 space-y-2">
                  {siteConfig.socials.map((social) => (
                    <li key={social.href}>
                      <a
                        className="focus-ring hover:text-accent"
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </div>
        </RevealOnScroll>
        <RevealOnScroll variant="right" delayMs={120}>
          <WhatsAppContact heading={siteConfig.homepage.primaryCtaLabel} />
        </RevealOnScroll>
      </div>
    </Section>
  );
}
