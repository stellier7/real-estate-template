import type { Metadata } from "next";
import { PropertyCard } from "@/components/directory/PropertyCard";
import { DirectoryFilters } from "@/components/directory/DirectoryFilters";
import { Section } from "@/components/layout/Section";
import { propertyRepository } from "@/lib/properties/repository";
import type { PropertyStatus, PropertyType } from "@/lib/properties/types";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Properties",
  description: "Browse the property directory—residential, commercial, land, and investment assets.",
  path: "/properties",
});

type PropertiesPageProps = {
  searchParams: Promise<{
    type?: string;
    status?: string;
    q?: string;
  }>;
};

export default async function PropertiesPage({ searchParams }: PropertiesPageProps) {
  const params = await searchParams;
  const type = params.type as PropertyType | undefined;
  const status = params.status as PropertyStatus | undefined;
  const query = params.q;

  const results = propertyRepository.filter({
    type: type || undefined,
    status: status || undefined,
    query: query || undefined,
  });

  return (
    <>
      <Section className="pb-0">
        <h1 className="font-display text-5xl sm:text-6xl">Properties</h1>
        <p className="prose-editorial mt-6 max-w-2xl">
          A curated directory powered by the same structured data as each property page. Add a
          record, assign a slug, and it appears here automatically.
        </p>
        <DirectoryFilters
          currentType={params.type}
          currentStatus={params.status}
          currentQuery={params.q}
        />
      </Section>

      <Section className="pt-10">
        {results.length === 0 ? (
          <p className="text-muted">No properties match your filters.</p>
        ) : (
          <div className="grid gap-20">
            {results.map((property, index) => (
              <PropertyCard key={property.id} property={property} priority={index < 2} />
            ))}
          </div>
        )}
      </Section>
    </>
  );
}
