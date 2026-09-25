import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site/config";
import { propertyRepository } from "@/lib/properties/repository";
import { absoluteUrl } from "@/lib/seo/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/properties", "/about", "/services", "/contact"].map(
    (path) => ({
      url: absoluteUrl(path || "/"),
      lastModified: new Date(),
    }),
  );

  const propertyRoutes = propertyRepository.getAll().map((property) => ({
    url: absoluteUrl(`/properties/${property.slug}`),
    lastModified: property.publishedAt
      ? new Date(property.publishedAt)
      : new Date(),
  }));

  return [...staticRoutes, ...propertyRoutes];
}
