import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";

export function hasWhatsApp(): boolean {
  return !isNeedsInput(siteConfig.whatsapp.e164);
}

export function buildWhatsAppUrl(message?: string): string {
  if (!hasWhatsApp()) {
    return "#";
  }
  const text = isNeedsInput(message ?? "")
    ? siteConfig.whatsapp.defaultMessage
    : (message ?? siteConfig.whatsapp.defaultMessage);
  const safeText = isNeedsInput(text)
    ? "Hola, me interesa obtener información."
    : text;
  const encoded = encodeURIComponent(safeText);
  return `https://wa.me/${siteConfig.whatsapp.e164}?text=${encoded}`;
}

export function buildPropertyWhatsAppUrl(propertyName: string): string {
  return buildWhatsAppUrl(
    `Hola, me gustaría recibir más información sobre ${propertyName}.`,
  );
}
