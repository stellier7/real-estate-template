"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <p className="prose-editorial">
        Thank you. This template does not send messages yet—wire the form to your CRM or API.
      </p>
    );
  }

  return (
    <form
      className="grid gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <label className="grid gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Name</span>
        <input
          required
          name="name"
          className="focus-ring border-b border-line bg-transparent py-2 outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Email</span>
        <input
          required
          type="email"
          name="email"
          className="focus-ring border-b border-line bg-transparent py-2 outline-none"
        />
      </label>
      <label className="grid gap-2 text-sm">
        <span className="text-xs uppercase tracking-[0.2em] text-muted">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="focus-ring border border-line bg-transparent p-3 outline-none"
        />
      </label>
      <button
        type="submit"
        className="focus-ring w-fit text-sm uppercase tracking-[0.18em] text-accent"
      >
        Send enquiry
      </button>
    </form>
  );
}
