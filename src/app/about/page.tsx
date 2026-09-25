import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "About",
  description: "The philosophy behind this premium real-estate portfolio template.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Section>
        <h1 className="max-w-4xl font-display text-5xl sm:text-6xl">
          A studio approach to property presentation
        </h1>
        <p className="prose-editorial mt-8 max-w-2xl">
          Studio Estate is a demonstration brand for this template. Replace this narrative with
          your firm&apos;s story, principals, and proof points while keeping the editorial layout
          system intact.
        </p>
      </Section>
      <Section className="bg-surface">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">What we believe</h2>
            <p className="prose-editorial mt-6">
              Property is experienced through light, material, and context. The website should
              amplify those qualities—not compete with them through decorative UI.
            </p>
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">How we work</h2>
            <p className="prose-editorial mt-6">
              Structured content feeds a single property-page architecture. Marketing pages compose
              reusable sections. Performance and accessibility are treated as part of the luxury
              experience.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
