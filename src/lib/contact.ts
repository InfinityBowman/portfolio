import { createServerFn } from "@tanstack/react-start";
import { env } from "cloudflare:workers";

const FROM_NAME = "Portfolio Contact";
const FROM_ADDRESS = "contact@jacobmaynard.dev";
const TO_ADDRESS = "jacobamaynard@proton.me";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface ContactFormPayload {
  name: string;
  email: string;
  message: string;
  honeypot: string;
  projectType?: string;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function buildPlainText(name: string, email: string, message: string, projectType?: string): string {
  const lines = [
    "New inquiry",
    "─────────────────────",
    "",
    `Name:  ${name}`,
    `Email: ${email}`,
  ];
  if (projectType) lines.push(`Project: ${projectType}`);
  lines.push("", "Message:", message, "", "─────────────────────", "Sent from the contact form on jacobmaynard.dev.", "Reply directly to this email to respond.");
  return lines.join("\n");
}

function buildHtml(name: string, email: string, message: string, projectType?: string): string {
  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message);

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"></head>
<body style="margin:0;padding:0;background:#f9fafb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;">
  <div style="max-width:560px;margin:0 auto;padding:32px 16px;">
    <div style="background:#ffffff;border:1px solid #e5e7eb;border-radius:12px;padding:32px;box-shadow:0 1px 3px rgba(0,0,0,0.05);">
      <div style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Portfolio Contact</div>
      <h1 style="margin:0 0 24px 0;font-size:20px;font-weight:600;color:#111827;line-height:1.3;">New message from ${safeName}</h1>
      <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
        <tr>
          <td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px;vertical-align:top;width:60px;">Name</td>
          <td style="padding:6px 0;color:#111827;font-size:14px;">${safeName}</td>
        </tr>
        <tr>
          <td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px;vertical-align:top;">Email</td>
          <td style="padding:6px 0;font-size:14px;"><a href="mailto:${safeEmail}" style="color:#2563eb;text-decoration:none;">${safeEmail}</a></td>
        </tr>${projectType ? `
        <tr>
          <td style="padding:6px 12px 6px 0;color:#6b7280;font-size:13px;vertical-align:top;">Project</td>
          <td style="padding:6px 0;color:#111827;font-size:14px;">${escapeHtml(projectType)}</td>
        </tr>` : ''}
      </table>
      <div style="border-top:1px solid #e5e7eb;padding-top:20px;">
        <div style="color:#6b7280;font-size:13px;margin-bottom:12px;">Message</div>
        <div style="color:#1f2937;font-size:15px;line-height:1.6;white-space:pre-wrap;">${safeMessage}</div>
      </div>
    </div>
    <div style="text-align:center;margin-top:20px;color:#9ca3af;font-size:12px;">
      Sent from the contact form on jacobmaynard.dev. Reply directly to this email.
    </div>
  </div>
</body>
</html>`;
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
    const projectType =
      typeof partial.projectType === "string" ? partial.projectType.trim() : undefined;

    if (name.length === 0 || name.length > 100) {
      throw new Error("Please enter your name.");
    }
    if (email.length === 0 || email.length > 254 || !EMAIL_RE.test(email)) {
      throw new Error("Please enter a valid email address.");
    }
    if (message.length === 0 || message.length > 5000) {
      throw new Error("Please enter a message (up to 5000 characters).");
    }

    return { name, email, message, honeypot, projectType };
  })
  .handler(async ({ data }) => {
    // Honeypot tripped: pretend everything's fine.
    if (data.honeypot.length > 0) {
      return { ok: true as const };
    }

    await env.SEB.send({
      from: { name: FROM_NAME, email: FROM_ADDRESS },
      to: TO_ADDRESS,
      subject: data.projectType
        ? `Inquiry from ${data.name} — ${data.projectType}`
        : `Portfolio contact from ${data.name}`,
      replyTo: data.email,
      text: buildPlainText(data.name, data.email, data.message, data.projectType),
      html: buildHtml(data.name, data.email, data.message, data.projectType),
    });

    return { ok: true as const };
  });
