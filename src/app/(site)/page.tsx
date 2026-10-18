import { HomeHero } from "@/components/home/HomeHero";
import { PropertyMarquee } from "@/components/home/PropertyMarquee";
import { PropertyCard } from "@/components/directory/PropertyCard";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { getHomeFeaturedSlugs } from "@/lib/properties/featured";
import { selectMarqueeProperties } from "@/lib/properties/marquee";
import { getDisplayPrice } from "@/lib/properties/specs";
import {
  getAllProperties,
  getCatalogStats,
  getPropertyBySlug,
} from "@/lib/properties/service";
import type { Property } from "@/lib/properties/types";

async function getHomeFeaturedProperties(): Promise<Property[]> {
  const slugs = await getHomeFeaturedSlugs();
  const properties = await Promise.all(
    slugs.map((slug) => getPropertyBySlug(slug)),
  );
  return properties.filter(
    (property): property is Property => property !== undefined,
  );
}

export default async function HomePage() {
  const featured = await getHomeFeaturedProperties();
  const featuredSlugs = featured.map((property) => property.slug);
  const allProperties = await getAllProperties();
  const marqueeProperties = selectMarqueeProperties(allProperties, {
    excludeSlugs: featuredSlugs,
  });
  const marqueeItems = marqueeProperties.map((property) => ({
    id: property.id,
    slug: property.slug,
    name: property.name,
    price: getDisplayPrice(property),
    city: property.location.city,
    image: {
      src: property.media.heroImage.src,
      alt: property.media.heroImage.alt || property.name,
    },
  }));
  const stats = await getCatalogStats();
  const heroImage = siteConfig.heroImage;
  const aboutStory = isNeedsInput(siteConfig.about.story)
    ? siteConfig.homepage.pendingLabel
    : siteConfig.about.story;
  const services = Array.isArray(siteConfig.services)
    ? siteConfig.services
    : null;

  return (
    <>
      <HomeHero heroImage={heroImage} stats={stats} />

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <RevealOnScroll>
            <p className="type-meta-caps text-accent">
              {siteConfig.homepage.aboutEyebrow}
            </p>
            <h2 className="type-display-section mt-3 text-accent">
              {siteConfig.homepage.aboutHeading}
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delayMs={100}>
            <p className="prose-editorial">{aboutStory}</p>
          </RevealOnScroll>
        </div>
      </Section>

      <Section
        id="featured"
        className="bg-[color-mix(in_srgb,var(--accent-soft)_55%,transparent)]"
      >
        <RevealOnScroll className="mb-12 flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="type-meta-caps text-accent">
              {siteConfig.homepage.featuredEyebrow}
            </p>
            <h2 className="type-display-section mt-3 text-accent">
              {siteConfig.homepage.featuredHeading}
            </h2>
          </div>
          <Button href="/properties" variant="primary">
            {siteConfig.homepage.catalogCtaLabel}
          </Button>
        </RevealOnScroll>
        {featured.length === 0 ? (
          <p className="prose-editorial">{siteConfig.homepage.emptyCatalog}</p>
        ) : (
          <div className="grid gap-8 lg:gap-10">
            {featured.map((property, index) => (
              <RevealOnScroll key={property.id} delayMs={index * 80}>
                <PropertyCard property={property} priority={index === 0} />
              </RevealOnScroll>
            ))}
          </div>
        )}
      </Section>

      {marqueeItems.length > 0 ? (
        <Section bleed className="overflow-hidden bg-surface/60">
          <Container>
            <RevealOnScroll className="mb-10 flex flex-wrap items-end justify-between gap-6">
              <div>
                <p className="type-meta-caps text-accent">Explorar</p>
                <h2 className="type-display-section mt-3 text-accent">
                  Más en el catálogo
                </h2>
              </div>
              <Button href="/properties" variant="ghost">
                Ver todas
              </Button>
            </RevealOnScroll>
          </Container>
          <RevealOnScroll delayMs={80}>
            <PropertyMarquee items={marqueeItems} />
          </RevealOnScroll>
        </Section>
      ) : null}

      <Section className="bg-surface/80">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <RevealOnScroll>
            <p className="type-meta-caps text-accent">
              {siteConfig.homepage.servicesEyebrow}
            </p>
            <h2 className="type-display-section mt-3 text-accent">
              {siteConfig.homepage.servicesHeading}
            </h2>
            <p className="prose-editorial mt-6">
              {isNeedsInput(siteConfig.description)
                ? siteConfig.homepage.pendingLabel
                : siteConfig.description}
            </p>
            <Button href="/services" variant="primary" className="mt-8">
              Conocer servicios
            </Button>
          </RevealOnScroll>
          <RevealOnScroll delayMs={120}>
            {services ? (
              <ul className="grid gap-4 sm:grid-cols-2">
                {services.map((item, i) => (
                  <li
                    key={item.title}
                    className="service-line type-meta-caps border-t border-accent/35 pt-4 text-accent"
                    style={{ animationDelay: `${i * 60}ms` }}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-muted">{siteConfig.homepage.pendingLabel}</p>
            )}
          </RevealOnScroll>
        </div>
      </Section>

      {siteConfig.markets.length > 0 ? (
        <Section>
          <RevealOnScroll>
            <p className="type-meta-caps text-accent">Cobertura</p>
            <h2 className="type-display-section mt-3 text-accent">
              {siteConfig.homepage.marketsHeading}
            </h2>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {siteConfig.markets.map((market) => (
                <li
                  key={market}
                  className="border-t border-line pt-3 text-muted"
                >
                  {market}
                </li>
              ))}
            </ul>
          </RevealOnScroll>
        </Section>
      ) : null}
    </>
  );
}
