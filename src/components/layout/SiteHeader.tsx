import Link from "next/link";
import { siteConfig } from "@/content/site/config";
import { Container } from "./Container";
import { MobileNav } from "./MobileNav";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-background/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6 sm:h-20">
        <Link
          href="/"
          className="focus-ring font-display text-xl tracking-tight sm:text-2xl"
        >
          {siteConfig.name}
        </Link>
        <nav
          className="hidden items-center gap-8 text-sm uppercase tracking-[0.18em] text-muted md:flex"
          aria-label="Primary"
        >
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="focus-ring transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
