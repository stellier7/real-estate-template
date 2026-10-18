import type { Property } from "@/lib/properties/types";
import { propertyRepository } from "@/lib/properties/repository";
import { getRelatedProperties } from "@/lib/properties/related";
import {
  formatPropertyType,
  formatStatus,
  getDisplayPrice,
  supportsCommercialSpecs,
  supportsInvestmentBlock,
  supportsLandSpecs,
  supportsResidentialSpecs,
} from "@/lib/properties/specs";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { TextLink } from "@/components/ui/TextLink";
import { buildPropertyWhatsAppUrl } from "@/lib/contact/whatsapp";
import { PropertyCard } from "@/components/directory/PropertyCard";
import { PropertyGallery } from "./PropertyGallery";
import { PropertyHero } from "./PropertyHero";

type PropertyPageComposerProps = {
  property: Property;
};

export function PropertyPageComposer({ property }: PropertyPageComposerProps) {
  const price = getDisplayPrice(property);
  const gallery = property.media.gallery ?? [];
  const allImages = [property.media.heroImage, ...gallery];
  const related = getRelatedProperties(
    property,
    propertyRepository.getAll(),
    3,
  );

  const residentialRows =
    property.residential && supportsResidentialSpecs(property.propertyType)
      ? [
          ["Área total", property.residential.totalArea, "m²"],
          ["Área de lote", property.residential.lotSize, "m²"],
          ["Dormitorios", property.residential.bedrooms],
          ["Baños", property.residential.bathrooms],
          ["Estacionamientos", property.residential.parking],
          ["Año de construcción", property.residential.yearBuilt],
        ]
      : [];

  const commercialRows =
    property.commercial && supportsCommercialSpecs(property.propertyType)
      ? [
          ["Uso", property.commercial.useClass],
          ["Niveles", property.commercial.floors],
          ["Unidades", property.commercial.units],
        ]
      : [];

  const landRows =
    property.land && supportsLandSpecs(property.propertyType)
      ? [
          ["Zonificación", property.land.zoning],
          ["Área edificable", property.land.buildableArea, "m²"],
        ]
      : [];

  return (
    <>
      <PropertyHero property={property} />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <div className="reveal">
            <p className="text-xs uppercase tracking-[0.2em] text-muted">
              {formatPropertyType(property.propertyType)} · {formatStatus(property.status)}
            </p>
            <h1 className="mt-3 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              {property.title ?? property.name}
            </h1>
            <p className="mt-4 text-lg text-muted">{property.location.label}</p>
            {property.location.address ? (
              <p className="mt-2 text-sm text-muted">{property.location.address}</p>
            ) : null}
          </div>
          <div className="reveal border-t border-line pt-6 lg:border-t-0 lg:pt-0">
            {price ? (
              <p className="text-sm uppercase tracking-[0.18em]">{price}</p>
            ) : null}
            {property.shortDescription ? (
              <p className="prose-editorial mt-6">{property.shortDescription}</p>
            ) : null}
            <a
              href={buildPropertyWhatsAppUrl(property.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-8 inline-flex text-sm uppercase tracking-[0.18em] text-accent"
            >
              {property.contact?.ctaLabel ?? "Consultar por WhatsApp"}
            </a>
          </div>
        </div>
      </Section>

      {gallery.length > 0 ? (
        <Section bleed>
          <Container>
            <PropertyGallery images={allImages} />
          </Container>
        </Section>
      ) : null}

      {property.description ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">La propiedad</h2>
          <p className="prose-editorial mt-6 whitespace-pre-line">{property.description}</p>
        </Section>
      ) : null}

      {residentialRows.length + commercialRows.length + landRows.length > 0 ? (
        <Section className="bg-surface">
          <h2 className="font-display text-3xl sm:text-4xl">Especificaciones</h2>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[...residentialRows, ...commercialRows, ...landRows]
              .filter((row) => row[1] !== undefined && row[1] !== null)
              .map(([label, value, unit]) => (
                <div key={String(label)} className="border-t border-line pt-4">
                  <dt className="text-xs uppercase tracking-[0.2em] text-muted">{label}</dt>
                  <dd className="mt-2 font-display text-2xl">
                    {value}
                    {unit ? ` ${unit}` : ""}
                  </dd>
                </div>
              ))}
          </dl>
        </Section>
      ) : null}

      {property.features && property.features.length > 0 ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">Características</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {property.features.map((feature) => (
              <li key={feature} className="text-muted">{feature}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {property.amenities && property.amenities.length > 0 ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">Amenidades</h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {property.amenities.map((item) => (
              <li key={item} className="text-muted">{item}</li>
            ))}
          </ul>
        </Section>
      ) : null}

      {property.media.video ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">Video</h2>
          <a
            href={property.media.video.url}
            className="focus-ring mt-4 inline-block text-accent"
            target="_blank"
            rel="noreferrer"
          >
            Ver video de la propiedad
          </a>
        </Section>
      ) : null}

      {property.media.virtualTour ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">Recorrido virtual</h2>
          <a
            href={property.media.virtualTour.url}
            className="focus-ring mt-4 inline-block text-accent"
            target="_blank"
            rel="noreferrer"
          >
            {property.media.virtualTour.label ?? "Abrir recorrido virtual"}
          </a>
        </Section>
      ) : null}

      {supportsInvestmentBlock(property) && property.investment ? (
        <Section className="bg-surface">
          <h2 className="font-display text-3xl sm:text-4xl">Inversión</h2>
          <dl className="mt-6 grid gap-6 sm:grid-cols-2">
            {property.investment.yield ? (
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">Rendimiento</dt>
                <dd className="mt-2 font-display text-2xl">{property.investment.yield}</dd>
              </div>
            ) : null}
            {property.investment.tenancy ? (
              <div>
                <dt className="text-xs uppercase tracking-[0.2em] text-muted">Arrendamiento</dt>
                <dd className="mt-2 text-muted">{property.investment.tenancy}</dd>
              </div>
            ) : null}
          </dl>
          {property.investment.highlights ? (
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {property.investment.highlights.map((item) => (
                <li key={item} className="text-muted">{item}</li>
              ))}
            </ul>
          ) : null}
        </Section>
      ) : null}

      {(property.floorPlans?.length ?? 0) > 0 || (property.documents?.length ?? 0) > 0 ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">Documentos</h2>
          <ul className="mt-6 space-y-3">
            {[...(property.floorPlans ?? []), ...(property.documents ?? [])].map((doc) => (
              <li key={doc.url}>
                <a href={doc.url} className="focus-ring text-accent">
                  {doc.title}
                </a>
              </li>
            ))}
          </ul>
        </Section>
      ) : null}

      {property.location.coordinates ? (
        <Section>
          <h2 className="font-display text-3xl sm:text-4xl">Ubicación</h2>
          <p className="mt-4 text-muted">{property.location.label}</p>
          <a
            className="focus-ring mt-4 inline-block text-sm uppercase tracking-[0.18em] text-accent"
            href={`https://www.openstreetmap.org/?mlat=${property.location.coordinates.lat}&mlon=${property.location.coordinates.lng}#map=14/${property.location.coordinates.lat}/${property.location.coordinates.lng}`}
            target="_blank"
            rel="noreferrer"
          >
            Ver en el mapa
          </a>
        </Section>
      ) : null}

      {related.length > 0 ? (
        <Section>
          <div className="mb-10 flex items-end justify-between gap-6">
            <h2 className="font-display text-3xl sm:text-4xl">Propiedades relacionadas</h2>
            <TextLink href="/properties">Ver todas</TextLink>
          </div>
          <div className="grid gap-16">
            {related.map((item) => (
              <PropertyCard key={item.id} property={item} />
            ))}
          </div>
        </Section>
      ) : null}

      <Section className="border-t border-line">
        <div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-3xl sm:text-4xl">Consultar esta propiedad</h2>
            <p className="prose-editorial mt-4">
              Cuéntenos qué busca y le compartimos disponibilidad, visitas y material de apoyo.
            </p>
          </div>
          <a
            href={buildPropertyWhatsAppUrl(property.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring text-sm uppercase tracking-[0.18em] text-accent"
          >
            WhatsApp
          </a>
        </div>
      </Section>
    </>
  );
}
