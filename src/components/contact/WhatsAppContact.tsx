import { siteConfig } from "@/content/site/config";
import { buildWhatsAppUrl, hasWhatsApp } from "@/lib/contact/whatsapp";

type WhatsAppContactProps = {
  heading?: string;
  message?: string;
};

export function WhatsAppContact({ heading, message }: WhatsAppContactProps) {
  if (!hasWhatsApp()) {
    return (
      <div className="border-t border-line pt-8">
        {heading ? (
          <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
        ) : null}
        <p className="prose-editorial mt-4">{siteConfig.ui.pendingLabel}</p>
        <p className="mt-6 text-sm text-muted">
          Tel. {siteConfig.phone.display}
        </p>
      </div>
    );
  }

  const url = buildWhatsAppUrl(message);

  return (
    <div className="border-t border-line pt-8">
      {heading ? (
        <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
      ) : null}
      <p className="prose-editorial mt-4">{siteConfig.ui.whatsappBlurb}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="focus-ring mt-8 inline-flex items-center gap-3 text-sm uppercase tracking-[0.18em] text-accent"
      >
        {siteConfig.ui.whatsappCta}
        <span className="text-muted normal-case tracking-normal">
          {siteConfig.whatsapp.display}
        </span>
      </a>
    </div>
  );
}
