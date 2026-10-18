import Image from "next/image";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";
import { PropertyCard } from "@/components/directory/PropertyCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/TextLink";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { propertyRepository } from "@/lib/properties/repository";

export default function HomePage() {
  const featured = propertyRepository
    .getAll()
    .filter((property) => property.featured)
    .slice(0, 3);
  const whatsappEnabled = hasWhatsApp();

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden bg-[linear-gradient(160deg,#d8d6d0_0%,#b7b4ac_55%,#9a978f_100%)]">
        <Image
          src={siteConfig.images.hero}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-background/20" />
        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            {isNeedsInput(siteConfig.homepage.heroHeadline)
              ? siteConfig.name
              : siteConfig.homepage.heroHeadline}
          </h1>
          <p className="prose-editorial mt-6 max-w-2xl text-foreground/80">
            {isNeedsInput(siteConfig.homepage.heroSupporting)
              ? siteConfig.description
              : siteConfig.homepage.heroSupporting}
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            {whatsappEnabled ? (
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm uppercase tracking-[0.18em] text-accent"
              >
                {siteConfig.homepage.primaryCtaLabel}
              </a>
            ) : null}
            <TextLink href="/properties">
              {siteConfig.homepage.secondaryCtaLabel}
            </TextLink>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="font-display text-4xl sm:text-5xl">Nosotros</h2>
          <p className="prose-editorial">
            {isNeedsInput(siteConfig.about.story)
              ? siteConfig.ui.pendingLabel
              : siteConfig.about.story}
          </p>
        </div>
      </Section>

      <Section id="featured">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl">
            {siteConfig.ui.featuredHeading}
          </h2>
          <TextLink href="/properties">{siteConfig.ui.viewDirectory}</TextLink>
        </div>
        {featured.length === 0 ? (
          <div className="border-t border-line pt-8">
            <p className="text-muted">{siteConfig.ui.noProperties}</p>
            <p className="prose-editorial mt-4">{siteConfig.ui.noPropertiesHint}</p>
          </div>
        ) : (
          <div className="grid gap-20">
            {featured.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                priority={index === 0}
              />
            ))}
          </div>
        )}
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">
              {siteConfig.ui.servicesHeading}
            </h2>
            <p className="prose-editorial mt-6">
              {isNeedsInput(siteConfig.description)
                ? siteConfig.ui.pendingLabel
                : siteConfig.description}
            </p>
            <TextLink href="/services" className="mt-8">
              {siteConfig.ui.servicesNav}
            </TextLink>
          </div>
          {Array.isArray(siteConfig.services) ? (
            <ul className="grid gap-4 text-muted sm:grid-cols-2">
              {siteConfig.services.map((item) => (
                <li key={item.title} className="border-t border-line pt-4">
                  <span className="block text-foreground">{item.title}</span>
                  <span className="mt-2 block text-sm">{item.body}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">{siteConfig.ui.pendingLabel}</p>
          )}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="font-display text-4xl sm:text-5xl">
            {siteConfig.ui.marketsHeading}
          </h2>
          {siteConfig.markets.length > 0 ? (
            <ul className="grid gap-3 text-muted sm:grid-cols-2">
              {siteConfig.markets.map((market) => (
                <li key={market} className="border-t border-line pt-3">
                  {market}
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-muted">{siteConfig.ui.pendingLabel}</p>
          )}
        </div>
      </Section>

      <Section className="border-t border-line bg-foreground text-background">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">
                {siteConfig.ui.contactHeading}
              </h2>
              <p className="mt-4 max-w-xl text-background/75">
                {siteConfig.ui.whatsappBlurb}
              </p>
            </div>
            {whatsappEnabled ? (
              <a
                href={buildWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring text-sm uppercase tracking-[0.2em] text-background"
              >
                {siteConfig.ui.whatsappCta}
              </a>
            ) : (
              <p className="text-sm text-background/70">
                {siteConfig.phone.display}
              </p>
            )}
          </div>
        </Container>
      </Section>
    </>
  );
}
