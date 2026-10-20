import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/content/site/config";
import { isNeedsInput } from "@/content/site/needs-input";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";
import { Container } from "./Container";

const phoneHref = (display: string) => `tel:${display.replace(/\s/g, "")}`;

export function SiteFooter() {
  const year = new Date().getFullYear();
  const whatsappUrl = buildWhatsAppUrl();
  const office = siteConfig.offices[0];

  return (
    <footer className="border-t border-line bg-surface" aria-label="Pie de página">
      <Container className="flex flex-col gap-8 py-14 sm:gap-10">
        <div className="flex max-w-2xl flex-col gap-5">
          <div>
            <p className="type-meta-caps text-accent">Contacto</p>
            <h2 className="type-display-section mt-3 text-accent">
              ¿Listo para ver una propiedad?
            </h2>
            <p className="prose-editorial mt-4">
              Escríbanos por WhatsApp o llámenos. Atención directa en Comayagua
              y zonas aledañas.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            {hasWhatsApp() ? (
              <Button
                href={whatsappUrl}
                variant="primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {siteConfig.homepage.primaryCtaLabel}
              </Button>
            ) : null}
            {!isNeedsInput(siteConfig.phone) ? (
              <Button href={phoneHref(siteConfig.phone)} variant="outline">
                Cel. {siteConfig.phone}
              </Button>
            ) : null}
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-line pt-8 text-sm text-muted sm:flex-row sm:flex-wrap sm:items-start sm:justify-between sm:gap-x-8 sm:gap-y-3">
          <div className="space-y-1">
            {hasWhatsApp() ? (
              <p>
                <a
                  className="focus-ring font-medium text-accent transition-colors hover:text-accent-hover"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp · {siteConfig.whatsapp.display}
                </a>
              </p>
            ) : null}
            {!isNeedsInput(siteConfig.phone) ? (
              <p>
                <a
                  className="focus-ring text-foreground transition-colors hover:text-accent"
                  href={phoneHref(siteConfig.phone)}
                >
                  Tel. {siteConfig.phone}
                </a>
              </p>
            ) : null}
            {office ? (
              <p className="leading-relaxed">
                <span className="font-medium text-foreground">{office.city}</span>
                {" — "}
                {office.address}
              </p>
            ) : null}
          </div>

          <nav aria-label="Pie de página" className="flex flex-wrap gap-x-5 gap-y-2">
            {siteConfig.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="focus-ring min-h-11 py-1 transition-colors hover:text-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </Container>

      <Container className="border-t border-line py-6">
        <div className="grid gap-2 text-center sm:grid-cols-3 sm:items-center sm:gap-4">
          <p className="type-meta sm:text-left">
            © {year} {siteConfig.brandShort}
          </p>
          <p className="type-meta sm:text-center">
            Diseñado por{" "}
            <a
              href="https://www.iagodigital.com/"
              className="focus-ring font-medium text-accent underline decoration-accent/35 underline-offset-4 transition-colors hover:decoration-accent"
              target="_blank"
              rel="noopener noreferrer"
            >
              iAGO Digital
            </a>
            .
          </p>
          <p className="type-meta sm:text-right">
            Todos los derechos reservados
          </p>
        </div>
      </Container>
    </footer>
  );
}
