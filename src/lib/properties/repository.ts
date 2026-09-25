import { properties } from "@/content/properties/properties";
import type { Property, PropertyFilter } from "./types";

export interface PropertyRepository {
  getAll(): Property[];
  getBySlug(slug: string): Property | undefined;
  filter(filters: PropertyFilter): Property[];
}

function matchesFilter(property: Property, filters: PropertyFilter): boolean {
  if (filters.type && property.propertyType !== filters.type) {
    return false;
  }
  if (filters.status && property.status !== filters.status) {
    return false;
  }
  if (filters.query) {
    const q = filters.query.toLowerCase();
    const haystack = [
      property.name,
      property.title,
      property.shortDescription,
      property.location.label,
      property.location.city,
      property.location.region,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();
    if (!haystack.includes(q)) {
      return false;
    }
  }
  return true;
}

export const propertyRepository: PropertyRepository = {
  getAll(): Property[] {
    return [...properties].sort(
      (a, b) =>
        new Date(b.publishedAt ?? 0).getTime() -
        new Date(a.publishedAt ?? 0).getTime(),
    );
  },

  getBySlug(slug: string): Property | undefined {
    return properties.find((p) => p.slug === slug);
  },

  filter(filters: PropertyFilter): Property[] {
    return propertyRepository.getAll().filter((p) => matchesFilter(p, filters));
  },
};
