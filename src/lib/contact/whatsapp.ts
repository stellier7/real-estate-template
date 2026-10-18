import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";

export function hasWhatsApp(): boolean {
  return !isNeedsInput(siteConfig.whatsapp.e164);
}

export function buildWhatsAppUrl(message?: string): string {
  if (!hasWhatsApp()) {
    return "#";
  }
  const text = message ?? siteConfig.whatsapp.defaultMessage;
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${siteConfig.whatsapp.e164}?text=${encoded}`;
}

export function buildPropertyWhatsAppUrl(propertyName: string): string {
  return buildWhatsAppUrl(
    `Hola, me interesa obtener más información sobre ${propertyName}.`,
  );
}
