import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { siteConfig } from "@/content/site/config";

/** Photo markets (Rony) or plain name strings (other prospects). */
type MarketEntry =
  | string
  | {
      name: string;
      image: string;
      alt: string;
    };

type NormalizedMarket = {
  name: string;
  image?: string;
  alt: string;
};

type MarketsStripProps = {
  markets?: MarketEntry[];
  heading?: string;
  eyebrow?: string;
};

function normalizeMarket(market: MarketEntry): NormalizedMarket {
  if (typeof market === "string") {
    return { name: market, alt: market };
  }
  return {
    name: market.name,
    image: market.image,
    alt: market.alt,
  };
}

export function MarketsStrip({
  markets = siteConfig.markets as MarketEntry[],
  heading = siteConfig.homepage.marketsHeading,
  eyebrow = "Cobertura",
}: MarketsStripProps) {
  if (markets.length === 0) return null;

  const items = markets.map(normalizeMarket);
  const withPhotos = items.every((item) => Boolean(item.image));

  return (
    <div>
      <RevealOnScroll variant="up">
        <p className="type-meta-caps text-accent">{eyebrow}</p>
        <h2 className="type-display-section mt-3 text-accent">{heading}</h2>
      </RevealOnScroll>

      {withPhotos ? (
        <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-4">
          {items.map((market, index) => (
            <RevealOnScroll
              key={market.name}
              as="li"
              variant="up"
              delayMs={index * 90}
            >
              <figure className="group relative overflow-hidden rounded-[var(--radius-lg)] border border-accent/30 bg-surface">
                <div className="relative aspect-[16/10] overflow-hidden rounded-[inherit]">
                  <Image
                    src={market.image!}
                    alt={market.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.03] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                  />
                  <div
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[rgba(18,22,20,0.68)] to-transparent"
                    aria-hidden
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-4">
                    <span className="font-display text-lg tracking-tight text-white sm:text-xl">
                      {market.name}
                    </span>
                  </figcaption>
                </div>
              </figure>
            </RevealOnScroll>
          ))}
        </ul>
      ) : (
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((market, index) => (
            <RevealOnScroll
              key={market.name}
              as="li"
              variant="up"
              delayMs={index * 80}
              className="border-t border-line pt-3 text-muted"
            >
              {market.name}
            </RevealOnScroll>
          ))}
        </ul>
      )}
    </div>
  );
}
