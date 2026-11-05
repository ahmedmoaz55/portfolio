import type { ValidatedContactForm } from "@/lib/validations";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function safeHeader(value: string) {
  return value.replace(/[\r\n]/g, " ").trim();
}

export function buildContactEmail(data: ValidatedContactForm) {
  const name = safeHeader(data.name);
  const email = safeHeader(data.email);
  const subject = safeHeader(data.subject || "General inquiry");
  const message = escapeHtml(data.message).replaceAll("\n", "<br />");
  const timestamp = new Intl.DateTimeFormat("en", {
    dateStyle: "long",
    timeStyle: "short",
    timeZone: "UTC",
  }).format(new Date());

  return {
    subject: `New portfolio message from ${name}`,
    text: [
      `New portfolio message from ${name}`,
      "",
      `Email: ${email}`,
      `Subject: ${subject}`,
      `Received: ${timestamp} UTC`,
      "",
      data.message,
    ].join("\n"),
    html: `
      <div style="background:#07080f;padding:32px;font-family:Arial,sans-serif;color:#edeffa">
        <div style="max-width:620px;margin:0 auto;border:1px solid rgba(255,255,255,.12);border-radius:20px;overflow:hidden;background:#0e1020">
          <div style="padding:28px;background:linear-gradient(120deg,#0d9488,#7c3aed,#e11d48)">
            <p style="margin:0 0 8px;font-size:12px;letter-spacing:.16em;text-transform:uppercase;color:#fff">Portfolio contact</p>
            <h1 style="margin:0;font-size:28px;color:#fff">New message from ${escapeHtml(name)}</h1>
          </div>
          <div style="padding:28px">
            <p style="margin:0 0 8px;color:#9aa0bf;font-size:13px">Email</p>
            <p style="margin:0 0 22px;font-size:16px">${escapeHtml(email)}</p>
            <p style="margin:0 0 8px;color:#9aa0bf;font-size:13px">Subject</p>
            <p style="margin:0 0 22px;font-size:16px">${escapeHtml(subject)}</p>
            <p style="margin:0 0 8px;color:#9aa0bf;font-size:13px">Message</p>
            <p style="margin:0;line-height:1.7;font-size:16px">${message}</p>
            <p style="margin:28px 0 0;color:#9aa0bf;font-size:12px">Received ${timestamp} UTC</p>
          </div>
        </div>
      </div>
    `,
    replyTo: email,
  };
}
