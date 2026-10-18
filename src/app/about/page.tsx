import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: siteConfig.ui.aboutNav,
  description: siteConfig.description,
  path: "/about",
});

export default function AboutPage() {
  const story = isNeedsInput(siteConfig.about.story)
    ? siteConfig.ui.pendingLabel
    : siteConfig.about.story;
  const credentials = siteConfig.about.credentials;
  const team = siteConfig.about.team;

  return (
    <>
      <Section>
        <h1 className="max-w-4xl font-display text-5xl sm:text-6xl">
          {siteConfig.name}
        </h1>
        <p className="prose-editorial mt-8 max-w-2xl">{story}</p>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Credenciales</h2>
            <p className="prose-editorial mt-6">
              {isNeedsInput(credentials)
                ? siteConfig.ui.pendingLabel
                : credentials}
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Equipo</h2>
            {Array.isArray(team) ? (
              <ul className="mt-6 space-y-6">
                {team.map((member) => (
                  <li key={member.name}>
                    <p className="font-display text-2xl">{member.name}</p>
                    <p className="text-sm uppercase tracking-[0.16em] text-muted">
                      {member.role}
                    </p>
                    {member.bio ? (
                      <p className="prose-editorial mt-3">{member.bio}</p>
                    ) : null}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="prose-editorial mt-6">
                {siteConfig.ui.pendingLabel}
              </p>
            )}
          </div>
        </div>
      </Section>
      {siteConfig.markets.length > 0 ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">
            {siteConfig.ui.marketsHeading}
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
