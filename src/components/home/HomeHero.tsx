"use client";

import Image from "next/image";
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

function HeroCopy({
  stats,
  align = "start",
}: {
  stats: HomeHeroProps["stats"];
  align?: "start" | "center";
}) {
  const supporting = isNeedsInput(siteConfig.homepage.heroSupporting)
    ? siteConfig.tagline
    : siteConfig.homepage.heroSupporting;
  const lead = isNeedsInput(siteConfig.homepage.heroLead)
    ? siteConfig.description
    : siteConfig.homepage.heroLead;
  const headline =
    "heroHeadline" in siteConfig.homepage &&
    typeof siteConfig.homepage.heroHeadline === "string" &&
    !isNeedsInput(siteConfig.homepage.heroHeadline)
      ? siteConfig.homepage.heroHeadline
      : siteConfig.name;
  const alignClass =
    align === "center" ? "items-center text-center" : "items-start text-left";

  return (
    <div className={`flex w-full max-w-xl flex-col ${alignClass}`}>
      <RevealOnScroll>
        <h1 className="type-display-hero hero-copy-title max-w-xl text-pretty text-accent">
          {headline}
        </h1>
        <p className="type-meta hero-copy-meta mt-4 max-w-lg text-pretty text-foreground/90">
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

      {align === "start" ? (
        <RevealOnScroll delayMs={80}>
          <p className="prose-editorial mt-5 max-w-lg sm:mt-6">
            {isNeedsInput(lead) ? siteConfig.homepage.pendingLabel : lead}
          </p>
        </RevealOnScroll>
      ) : null}

      {stats.total > 0 ? (
        <RevealOnScroll delayMs={140} className="hero-stat-band w-full">
          <p className="sr-only">
            Resumen del catálogo: {stats.total} inmuebles publicados,{" "}
            {stats.forSale} en venta y {stats.forRent} en alquiler.
          </p>
          <dl className="hero-stat-grid" aria-label="Resumen del catálogo">
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

      <RevealOnScroll delayMs={200} className="hero-actions w-full">
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
        <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="type-meta font-medium text-foreground">
            {siteConfig.brandShort} — Asesor inmobiliario
          </p>
          {!isNeedsInput(siteConfig.phone) ? (
            <a
              href={`tel:${siteConfig.phone}`}
              className="focus-ring text-sm font-semibold tracking-wide text-foreground"
            >
              Cel. {siteConfig.phone}
            </a>
          ) : null}
          {hasWhatsApp() ? (
            <a
              href={buildWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring type-meta text-accent underline decoration-accent/35 underline-offset-4"
            >
              WhatsApp
            </a>
          ) : (
            <Link
              href="/contact"
              className="focus-ring type-meta text-accent underline decoration-accent/35 underline-offset-4"
            >
              Contacto
            </Link>
          )}
        </div>
      </RevealOnScroll>
    </div>
  );
}

function PortraitHero({
  backgroundImage,
  portraitImage,
  stats,
}: {
  backgroundImage: string;
  portraitImage: string;
  stats: HomeHeroProps["stats"];
}) {
  return (
    <section className="hero-shell hero-shell-min relative overflow-hidden bg-[#9eb6d4]">
      <div className="absolute inset-0 overflow-hidden">
        {/* Height-fit, right-aligned: full cathedral top-to-bottom, facade kept right */}
        <Image
          src={backgroundImage}
          alt="Catedral de la Inmaculada Concepción, Comayagua"
          width={2400}
          height={1350}
          priority
          sizes="100vw"
          className="pointer-events-none absolute inset-y-0 right-0 h-full w-auto max-w-none select-none"
        />
        {/* Soft wash only — cathedral stays visible behind copy */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/25 via-transparent to-background/15" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
      </div>

      <Container className="relative grid min-h-[inherit] grid-cols-1 items-end gap-0 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-stretch lg:gap-6">
        <div className="hero-portrait-frame relative mx-auto w-full max-w-md self-end lg:mx-0 lg:max-w-none">
          <Image
            src={portraitImage}
            alt={siteConfig.name}
            width={484}
            height={1052}
            priority
            sizes="(max-width: 1024px) 80vw, 42vw"
            className="hero-portrait-image relative z-10 mx-auto h-auto w-full max-h-[58vh] object-contain object-bottom drop-shadow-[0_28px_50px_rgba(28,26,36,0.4)] sm:max-h-[64vh] lg:absolute lg:inset-x-0 lg:bottom-0 lg:h-full lg:max-h-none lg:object-cover lg:object-[center_12%]"
          />
        </div>

        <div className="relative z-10 flex items-end pb-10 pt-4 sm:pb-14 lg:items-center lg:py-24">
          <div className="hero-copy-panel w-full max-w-xl rounded-[var(--radius-lg)] border border-white/35 bg-background/25 p-5 shadow-[0_18px_40px_-24px_rgba(28,26,36,0.45)] backdrop-blur-[2px] sm:p-7">
            <HeroCopy stats={stats} align="start" />
          </div>
        </div>
      </Container>
    </section>
  );
}

export function HomeHero({ heroImage, stats }: HomeHeroProps) {
  const layout =
    "heroLayout" in siteConfig ? siteConfig.heroLayout : "media";
  const portrait =
    "heroPortrait" in siteConfig && typeof siteConfig.heroPortrait === "string"
      ? siteConfig.heroPortrait
      : null;
  const background =
    "heroBackground" in siteConfig &&
    typeof siteConfig.heroBackground === "string"
      ? siteConfig.heroBackground
      : heroImage;

  if (layout === "portrait" && portrait) {
    return (
      <PortraitHero
        backgroundImage={background}
        portraitImage={portrait}
        stats={stats}
      />
    );
  }

  return (
    <ParallaxMedia
      src={heroImage}
      alt=""
      priority
      minHeightClass="hero-shell-min"
      imageClassName="hero-bg-image"
    >
      <Container className="hero-panel relative w-full">
        <HeroCopy stats={stats} />
      </Container>
    </ParallaxMedia>
  );
}
