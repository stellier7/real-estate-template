import Image from "next/image";
import { RevealOnScroll } from "@/components/motion/RevealOnScroll";
import { siteConfig } from "@/content/site/config";

type Market = (typeof siteConfig.markets)[number];

type MarketsStripProps = {
  markets?: Market[];
  heading?: string;
  eyebrow?: string;
};

export function MarketsStrip({
  markets = siteConfig.markets,
  heading = siteConfig.homepage.marketsHeading,
  eyebrow = "Cobertura",
}: MarketsStripProps) {
  if (markets.length === 0) return null;

  return (
    <div>
      <RevealOnScroll variant="up">
        <p className="type-meta-caps text-accent">{eyebrow}</p>
        <h2 className="type-display-section mt-3 text-accent">{heading}</h2>
      </RevealOnScroll>
      <ul className="mt-10 grid grid-cols-2 gap-3 lg:grid-cols-4 lg:gap-5">
        {markets.map((market, index) => (
          <RevealOnScroll
            key={market.name}
            as="li"
            variant="up"
            delayMs={index * 90}
          >
            <figure className="group relative overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden bg-accent/10">
                <Image
                  src={market.image}
                  alt={market.alt}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                />
                <div
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[rgba(18,22,20,0.72)] to-transparent"
                  aria-hidden
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 sm:p-5">
                  <span className="font-display text-lg tracking-tight text-white sm:text-[1.65rem]">
                    {market.name}
                  </span>
                </figcaption>
              </div>
            </figure>
          </RevealOnScroll>
        ))}
      </ul>
    </div>
  );
}
