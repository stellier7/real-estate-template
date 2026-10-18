import Link from "next/link";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";

export default function NotFound() {
  return (
    <Section>
      <h1 className="font-display text-5xl sm:text-6xl">Página no encontrada</h1>
      <p className="prose-editorial mt-6 max-w-xl">
        La página solicitada no está disponible. Explore el directorio de
        propiedades o vuelva al inicio.
      </p>
      <div className="mt-8 flex flex-wrap gap-6 text-sm uppercase tracking-[0.18em]">
        <Link href="/" className="focus-ring">
          Inicio
        </Link>
        <Link href="/properties" className="focus-ring">
          {siteConfig.ui.propertiesNav}
        </Link>
      </div>
    </Section>
  );
}
