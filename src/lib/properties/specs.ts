import type { Property, PropertyType } from "./types";

const RESIDENTIAL_TYPES: PropertyType[] = [
  "residential",
  "apartment",
  "villa",
  "house",
  "condominium",
];

const COMMERCIAL_TYPES: PropertyType[] = [
  "commercial",
  "office",
  "retail",
  "hotel",
  "industrial",
];

export function supportsResidentialSpecs(type: PropertyType): boolean {
  return RESIDENTIAL_TYPES.includes(type);
}

export function supportsCommercialSpecs(type: PropertyType): boolean {
  return COMMERCIAL_TYPES.includes(type);
}

export function supportsLandSpecs(type: PropertyType): boolean {
  return type === "land" || type === "lot" || type === "development";
}

export function supportsInvestmentBlock(property: Property): boolean {
  return (
    property.investment !== undefined ||
    property.propertyType === "investment" ||
    property.tags?.includes("investment") === true
  );
}

const TYPE_LABELS: Record<PropertyType, string> = {
  residential: "Residencial",
  apartment: "Apartamento",
  villa: "Villa",
  house: "Casa",
  condominium: "Condominio",
  commercial: "Comercial",
  office: "Oficina",
  retail: "Local",
  hotel: "Hotel",
  development: "Desarrollo",
  land: "Terreno",
  lot: "Lote",
  industrial: "Industrial",
  investment: "Inversión",
};

const STATUS_LABELS: Record<Property["status"], string> = {
  available: "Disponible",
  reserved: "Reservado",
  sold: "Vendido",
  under_development: "En desarrollo",
  coming_soon: "Próximamente",
  off_market: "Fuera de mercado",
};

export function formatPropertyType(type: PropertyType): string {
  return TYPE_LABELS[type];
}

export function formatStatus(status: Property["status"]): string {
  return STATUS_LABELS[status];
}

export function getDisplayPrice(property: Property): string | null {
  if (property.pricing?.display) {
    return property.pricing.display;
  }
  if (property.pricing?.priceOnRequest) {
    return "Precio a consultar";
  }
  if (
    property.pricing?.amount !== undefined &&
    property.pricing.currency
  ) {
    return new Intl.NumberFormat("es-HN", {
      style: "currency",
      currency: property.pricing.currency,
      maximumFractionDigits: 0,
    }).format(property.pricing.amount);
  }
  return null;
}
