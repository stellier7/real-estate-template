import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Nosotros",
  description: isNeedsInput(siteConfig.description)
    ? siteConfig.name
    : siteConfig.description,
  path: "/about",
});

export default function AboutPage() {
  const story = isNeedsInput(siteConfig.about.story)
    ? siteConfig.homepage.pendingLabel
    : siteConfig.about.story;

  return (
    <>
      <Section>
        <p className="type-meta-caps text-accent">Nosotros</p>
        <h1 className="mt-3 max-w-4xl font-display text-5xl text-accent sm:text-6xl">
          {siteConfig.name}
        </h1>
        <div className="prose-editorial mt-8 max-w-2xl space-y-6">
          <p>{story}</p>
        </div>
        {siteConfig.offices[0] ? (
          <p className="type-meta mt-10 max-w-2xl">
            Oficina: {siteConfig.offices[0].address}
          </p>
        ) : null}
      </Section>

      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="type-meta-caps text-accent">Credenciales</p>
            <p className="prose-editorial mt-4">
              {isNeedsInput(siteConfig.about.credentials)
                ? siteConfig.homepage.pendingLabel
                : siteConfig.about.credentials}
            </p>
          </div>
          <div>
            <p className="type-meta-caps text-accent">Equipo</p>
            <p className="prose-editorial mt-4">
              {siteConfig.homepage.pendingLabel}
            </p>
          </div>
        </div>
      </Section>

      {siteConfig.markets.length > 0 ? (
        <Section>
          <p className="type-meta-caps text-accent">Cobertura</p>
          <h2 className="mt-3 font-display text-3xl text-accent sm:text-4xl">
            {siteConfig.homepage.marketsHeading}
          </h2>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {siteConfig.markets.map((market) => (
              <li key={market} className="border-t border-line pt-3 text-muted">
                {market}
              </li>
            ))}
          </ul>
        </Section>
      ) : null}
    </>
  );
}
