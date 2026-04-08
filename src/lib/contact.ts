import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

const FROM_NAME = "Portfolio Contact";
const FROM_ADDRESS = "contact@jacobmaynard.dev";
const TO_ADDRESS = "jacob@jacobmaynard.dev";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
  // Hidden honeypot field. Real users leave it empty; bots tend to fill every
  // input. If non-empty we silently succeed without sending anything.
  honeypot: string;
}

export const sendContactEmail = createServerFn({ method: "POST" })
  .inputValidator((data: unknown): ContactFormPayload => {
    if (typeof data !== "object" || data === null) {
      throw new Error("Invalid request");
    }
    const partial = data as Partial<ContactFormPayload>;

    const name = typeof partial.name === "string" ? partial.name.trim() : "";
    const email = typeof partial.email === "string" ? partial.email.trim() : "";
    const message =
      typeof partial.message === "string" ? partial.message.trim() : "";
    const honeypot =
      typeof partial.honeypot === "string" ? partial.honeypot : "";

    if (name.length === 0 || name.length > 100) {
      throw new Error("Please enter your name.");
    }
    if (email.length === 0 || email.length > 254 || !EMAIL_RE.test(email)) {
      throw new Error("Please enter a valid email address.");
    }
    if (message.length === 0 || message.length > 5000) {
      throw new Error("Please enter a message (up to 5000 characters).");
    }

    return { name, email, message, honeypot };
  })
  .handler(async ({ data }) => {
    // Honeypot tripped: pretend everything's fine.
    if (data.honeypot.length > 0) {
      return { ok: true as const };
    }

    await env.SEB.send({
      from: { name: FROM_NAME, email: FROM_ADDRESS },
      to: TO_ADDRESS,
      subject: `Portfolio contact from ${data.name}`,
      replyTo: data.email,
      text: `From: ${data.name} <${data.email}>\n\n${data.message}`,
    });

    return { ok: true as const };
  });
