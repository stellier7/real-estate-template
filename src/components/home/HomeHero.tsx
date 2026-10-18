"use client";

import Link from "next/link";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";

type HomeHeroProps = {
  heroImage: string;
  stats: { total: number; forSale: number; forRent: number };
};

export function HomeHero({ heroImage, stats }: HomeHeroProps) {
  const supporting = isNeedsInput(siteConfig.homepage.heroSupporting)
    ? siteConfig.tagline
    : siteConfig.homepage.heroSupporting;
  const lead = isNeedsInput(siteConfig.homepage.heroLead)
    ? siteConfig.description
    : siteConfig.homepage.heroLead;

  return (
    <ParallaxMedia
      src={heroImage}
      alt=""
      priority
      minHeightClass="hero-shell-min"
      imageClassName="hero-bg-image"
    >
      <Container className="hero-panel relative w-full">
        <RevealOnScroll>
          <h1 className="type-display-hero max-w-4xl text-pretty">
            {siteConfig.name}
          </h1>
          <p className="type-meta mt-4 max-w-2xl text-pretty">
            <span className="block font-medium text-foreground sm:inline">
              {supporting}
            </span>
            {!isNeedsInput(siteConfig.homepage.heroLocation) ? (
              <>
                <span aria-hidden="true" className="hidden sm:inline">
                  {" "}
                  ·{" "}
                </span>
                <span className="mt-1 block sm:mt-0 sm:inline">
                  {siteConfig.homepage.heroLocation}
                </span>
              </>
            ) : null}
          </p>
        </RevealOnScroll>
        <RevealOnScroll delayMs={100}>
          <p className="prose-editorial mt-5 max-w-2xl sm:mt-6">
            {isNeedsInput(lead) ? siteConfig.homepage.pendingLabel : lead}
          </p>
        </RevealOnScroll>

        {stats.total > 0 ? (
          <RevealOnScroll delayMs={160} className="hero-stat-band w-full max-w-2xl">
            <p className="sr-only">
              Resumen del catálogo: {stats.total} inmuebles publicados,{" "}
              {stats.forSale} en venta y {stats.forRent} en alquiler.
            </p>
            <dl className="hero-stat-grid sm:max-w-xl" aria-label="Resumen del catálogo">
              <div className="stat-pill hero-stat-pill">
                <dt className="type-stat-label">En catálogo</dt>
                <dd className="type-stat-value mt-1 text-accent">{stats.total}</dd>
              </div>
              <div className="stat-pill hero-stat-pill">
                <dt className="type-stat-label">En venta</dt>
                <dd className="type-stat-value mt-1 text-accent">{stats.forSale}</dd>
              </div>
              <div className="stat-pill hero-stat-pill">
                <dt className="type-stat-label">En alquiler</dt>
                <dd className="type-stat-value mt-1 text-accent">{stats.forRent}</dd>
              </div>
            </dl>
          </RevealOnScroll>
        ) : null}

        <RevealOnScroll delayMs={220} className="hero-actions w-full max-w-none sm:max-w-[36rem]">
          <div className="hero-catalog-actions">
            {hasWhatsApp() ? (
              <Button
                href={buildWhatsAppUrl()}
                variant="primary"
                className="hero-cta-btn w-full min-w-0 justify-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.homepage.primaryCtaLabel}
              </Button>
            ) : null}
            <Button
              href="/properties"
              variant={hasWhatsApp() ? "outline" : "primary"}
              className="hero-cta-btn w-full min-w-0 justify-center"
            >
              {siteConfig.homepage.catalogCtaLabel}
            </Button>
          </div>
          <Link
            href="/contact"
            className="focus-ring type-meta inline-flex min-h-11 max-w-full items-center py-2 text-pretty text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
          >
            Contacto
          </Link>
        </RevealOnScroll>
      </Container>
    </ParallaxMedia>
  );
}
