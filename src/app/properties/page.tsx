import type { Metadata } from "next";
import { PropertyCard } from "@/components/directory/PropertyCard";
import { DirectoryFilters } from "@/components/directory/DirectoryFilters";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { propertyRepository } from "@/lib/properties/repository";
import type { PropertyStatus, PropertyType } from "@/lib/properties/types";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: siteConfig.ui.propertiesNav,
  description: siteConfig.description,
  path: "/properties",
});

type PropertiesPageProps = {
  searchParams: Promise<{
    type?: string;
    status?: string;
    q?: string;
  }>;
};

export default async function PropertiesPage({
  searchParams,
}: PropertiesPageProps) {
  const params = await searchParams;
  const type = params.type as PropertyType | undefined;
  const status = params.status as PropertyStatus | undefined;
  const query = params.q;

  const all = propertyRepository.getAll();
  const results = propertyRepository.filter({
    type: type || undefined,
    status: status || undefined,
    query: query || undefined,
  });

  return (
    <>
      <Section className="pb-0">
        <h1 className="font-display text-5xl sm:text-6xl">
          {siteConfig.ui.propertiesNav}
        </h1>
        <p className="prose-editorial mt-6 max-w-2xl">
          {all.length === 0
            ? siteConfig.ui.noPropertiesHint
            : siteConfig.description}
        </p>
        {all.length > 0 ? (
          <DirectoryFilters
            currentType={params.type}
            currentStatus={params.status}
            currentQuery={params.q}
          />
        ) : null}
      </Section>

      <Section className="pt-10">
        {results.length === 0 ? (
          <p className="text-muted">
            {all.length === 0
              ? siteConfig.ui.noProperties
              : "Ninguna propiedad coincide con los filtros."}
          </p>
        ) : (
          <div className="grid gap-20">
            {results.map((property, index) => (
              <PropertyCard
                key={property.id}
                property={property}
                priority={index < 2}
              />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
