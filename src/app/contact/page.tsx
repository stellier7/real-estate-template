import type { Metadata } from "next";
import { WhatsAppContact } from "@/components/contact/WhatsAppContact";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: siteConfig.ui.contactNav,
  description: siteConfig.ui.whatsappBlurb,
  path: "/contact",
});

export default function ContactPage() {
  const whatsappUrl = buildWhatsAppUrl();

  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h1 className="font-display text-5xl sm:text-6xl">
            {siteConfig.ui.contactHeading}
          </h1>
          <p className="prose-editorial mt-6 max-w-xl">
            {siteConfig.ui.whatsappBlurb}
          </p>
          <div className="mt-10 space-y-6 text-sm text-muted">
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">
                Teléfono
              </span>
              <a
                className="focus-ring text-lg text-foreground"
                href={`tel:+${siteConfig.phone.e164}`}
              >
                {siteConfig.phone.display}
              </a>
            </p>
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
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">
                Correo
              </span>
              {isNeedsInput(siteConfig.contactEmail) ? (
                <span>{siteConfig.ui.pendingLabel}</span>
              ) : (
                <a
                  className="focus-ring text-lg text-foreground"
                  href={`mailto:${siteConfig.contactEmail}`}
                >
                  {siteConfig.contactEmail}
                </a>
              )}
            </p>
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">
                Horario
              </span>
              {isNeedsInput(siteConfig.hours)
                ? siteConfig.ui.pendingLabel
                : siteConfig.hours}
            </p>
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
        </div>
        <WhatsAppContact heading={siteConfig.ui.whatsappCta} />
      </div>
    </Section>
  );
}
