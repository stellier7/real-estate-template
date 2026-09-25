import type { Metadata } from "next";
import { ContactForm } from "@/components/contact/ContactForm";
import { Section } from "@/components/layout/Section";
import { siteConfig } from "@/content/site/config";
import { buildSiteMetadata } from "@/lib/seo/metadata";

export const metadata: Metadata = buildSiteMetadata({
  title: "Contact",
  description: "Get in touch about properties, viewings, and advisory services.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
        <div>
          <h1 className="font-display text-5xl sm:text-6xl">Contact</h1>
          <p className="prose-editorial mt-6">
            Replace placeholder contact details with your offices and routing logic. The form is a
            client-side stub ready for API integration.
          </p>
          <div className="mt-10 space-y-6 text-sm text-muted">
            <p>
              <span className="block text-xs uppercase tracking-[0.2em]">Email</span>
              <a className="focus-ring text-foreground" href={`mailto:${siteConfig.contactEmail}`}>
                {siteConfig.contactEmail}
              </a>
            </p>
            {siteConfig.offices.map((office) => (
              <p key={office.city}>
                <span className="block text-xs uppercase tracking-[0.2em]">{office.city}</span>
                {office.address}
                <br />
                {office.phone}
              </p>
            ))}
          </div>
        </div>
        <ContactForm />
      </div>
    </Section>
  );
}
