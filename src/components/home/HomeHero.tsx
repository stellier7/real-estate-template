"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ParallaxLayer } from "@/components/motion/ParallaxLayer";
import { ParallaxMedia } from "@/components/motion/ParallaxMedia";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { Container } from "@/components/layout/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { useParallaxOffset } from "@/lib/motion/useParallaxOffset";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";

type HomeHeroProps = {
  heroImage: string;
  stats: { total: number; forSale: number; forRent: number };
};

const HERO_ACCENT_WORDS = new Set(["seguridad", "confianza"]);

function renderHeroHeadline(headline: string) {
  return headline.split(/(\bseguridad\b|\bconfianza\b)/gi).map((part, index) => {
    if (!part) return null;
    if (HERO_ACCENT_WORDS.has(part.toLowerCase())) {
      const label = part.charAt(0).toUpperCase() + part.slice(1).toLowerCase();
      return (
        <span key={`${part}-${index}`} className="text-accent">
          {label}
        </span>
      );
    }
    return <span key={`${part}-${index}`}>{part}</span>;
  });
}

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
        <h1 className="type-display-hero hero-copy-title max-w-xl text-pretty text-foreground">
          {renderHeroHeadline(headline)}
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
  const sectionRef = useRef<HTMLElement | null>(null);
  const { offset: stickerOffset, reduceMotion } = useParallaxOffset(sectionRef, {
    /* Mild lift on scroll — stronger values left a sky gap under the jacket */
    amplitude: -18,
  });

  return (
    <section
      ref={sectionRef}
      className="hero-shell hero-shell-min hero-portrait-shell relative overflow-hidden bg-[#9eb6d4]"
    >
      <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
        <ParallaxLayer
          rootRef={sectionRef}
          amplitude={64}
          scale={1.1}
          className="absolute inset-[-8%]"
        >
          <Image
            src={backgroundImage}
            alt="Catedral de la Inmaculada Concepción, Comayagua"
            width={2400}
            height={1350}
            priority
            sizes="100vw"
            className="hero-cathedral-bg pointer-events-none select-none"
          />
        </ParallaxLayer>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-background/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/55 via-transparent to-transparent" />
      </div>

      <Container className="hero-portrait-grid relative min-h-[inherit]">
        <div
          className="hero-portrait-frame hero-enter-sticker will-change-transform motion-reduce:transform-none"
          style={{
            transform: reduceMotion
              ? undefined
              : `translate3d(0, ${stickerOffset}px, 0)`,
          }}
        >
          <Image
            src={portraitImage}
            alt={siteConfig.name}
            width={745}
            height={970}
            priority
            sizes="(max-width: 1024px) 45vw, 40vw"
            className="hero-portrait-image"
          />
        </div>

        <div className="hero-portrait-copy hero-enter-copy">
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
