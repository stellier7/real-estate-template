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
        <p className="prose-editorial mt-4">
          {siteConfig.homepage.pendingLabel}
        </p>
        {!isPhoneMissing() ? (
          <p className="type-meta mt-6">Tel. {siteConfig.phone}</p>
        ) : null}
      </div>
    );
  }

  const url = buildWhatsAppUrl(message);

  return (
    <div className="border-t border-line pt-8">
      {heading ? (
        <h2 className="font-display text-2xl sm:text-3xl">{heading}</h2>
      ) : null}
      <p className="prose-editorial mt-4">
        Escríbanos por WhatsApp para visitas, disponibilidad y asesoría
        personalizada.
      </p>
      <p className="type-meta mt-6">
        Use el botón flotante de WhatsApp o{" "}
        <a
          href={url}
          className="focus-ring font-medium text-accent underline decoration-accent/40 underline-offset-4 transition-colors hover:decoration-accent"
          target="_blank"
          rel="noopener noreferrer"
        >
          abrir chat · {siteConfig.whatsapp.display}
        </a>
        .
      </p>
    </div>
  );
}

function isPhoneMissing() {
  return (
    !siteConfig.phone ||
    siteConfig.phone === "needs input"
  );
}
