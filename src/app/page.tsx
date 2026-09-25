import Image from "next/image";
import Link from "next/link";
import { PropertyCard } from "@/components/directory/PropertyCard";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/TextLink";
import { siteConfig } from "@/content/site/config";
import { propertyRepository } from "@/lib/properties/repository";

export default function HomePage() {
  const featured = propertyRepository
    .getAll()
    .filter((property) => property.featured)
    .slice(0, 3);

  return (
    <>
      <section className="relative min-h-[88vh] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=2000&q=85&auto=format&fit=crop"
          alt="Modern residence with pool at dusk"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28">
          <p className="text-xs uppercase tracking-[0.24em] text-muted">Portfolio template</p>
          <h1 className="mt-4 max-w-4xl font-display text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">
            Architecture, place, and property—presented with editorial clarity.
          </h1>
          <p className="prose-editorial mt-6 max-w-2xl">
            {siteConfig.description}
          </p>
          <div className="mt-10 flex flex-wrap gap-6">
            <TextLink href="/properties">Explore properties</TextLink>
            <TextLink href="/about">Our approach</TextLink>
          </div>
        </Container>
      </section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="font-display text-4xl sm:text-5xl">Positioning</h2>
          <p className="prose-editorial">
            This template is built for firms that sell through narrative and photography—not
            through cluttered listing interfaces. Each property receives the same immersive
            page system, driven by structured data you can later connect to a CMS.
          </p>
        </div>
      </Section>

      <Section id="featured">
        <div className="mb-12 flex items-end justify-between gap-6">
          <h2 className="font-display text-4xl sm:text-5xl">Featured properties</h2>
          <TextLink href="/properties">View directory</TextLink>
        </div>
        <div className="grid gap-20">
          {featured.map((property, index) => (
            <PropertyCard key={property.id} property={property} priority={index === 0} />
          ))}
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="font-display text-4xl sm:text-5xl">Capabilities</h2>
            <p className="prose-editorial mt-6">
              Residential, commercial, land, hospitality, and investment assets—each with
              conditional detail sections so irrelevant fields never appear on the page.
            </p>
            <TextLink href="/services" className="mt-8">
              Services
            </TextLink>
          </div>
          <ul className="grid gap-4 text-muted sm:grid-cols-2">
            {[
              "Acquisition advisory",
              "Private sales",
              "Development consulting",
              "Investment strategy",
              "Portfolio marketing",
              "International reach",
            ].map((item) => (
              <li key={item} className="border-t border-line pt-4">{item}</li>
            ))}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <h2 className="font-display text-4xl sm:text-5xl">Geographic presence</h2>
          <p className="prose-editorial">
            Sample listings span coastal Europe and international urban markets. Replace this
            copy and data with your own regions when customizing the template.
          </p>
        </div>
      </Section>

      <Section className="border-t border-line bg-foreground text-background">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <h2 className="font-display text-4xl sm:text-5xl">Begin a conversation</h2>
              <p className="mt-4 max-w-xl text-background/75">
                Use the contact flow as a starting point for inquiries, viewings, and off-market
                introductions.
              </p>
            </div>
            <Link
              href="/contact"
              className="focus-ring text-sm uppercase tracking-[0.2em] text-background"
            >
              Contact
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
