import { NextResponse } from "next/server";
import { buildContactEmail } from "@/emails/contact-email";
import { env } from "@/lib/env";
import { transporter, isEmailConfigured } from "@/lib/email";
import { checkRateLimit } from "@/lib/rate-limit";
import { contactSchema } from "@/lib/validations";

export const runtime = "nodejs";

function getClientIp(request: Request) {
  return (
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    request.headers.get("x-real-ip") ||
    "unknown"
  );
}

function originIsAllowed(request: Request) {
  if (process.env.NODE_ENV !== "production") return true;
  const origin = request.headers.get("origin");
  if (!origin) return false;
  try {
    const requestOrigin = new URL(request.url).origin;
    const configuredOrigin = new URL(env.NEXT_PUBLIC_SITE_URL).origin;
    const submittedOrigin = new URL(origin).origin;
    return (
      submittedOrigin === requestOrigin || submittedOrigin === configuredOrigin
    );
  } catch {
    return false;
  }
}

export async function POST(request: Request) {
  if (!originIsAllowed(request)) {
    return NextResponse.json(
      { ok: false, error: "This request origin is not allowed." },
      { status: 403 },
    );
  }

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (contentLength > 10_240) {
    return NextResponse.json(
      { ok: false, error: "This message is too large." },
      { status: 413 },
    );
  }

  let payload: unknown;
  try {
    const rawBody = await request.text();
    if (new TextEncoder().encode(rawBody).length > 10_240) {
      return NextResponse.json(
        { ok: false, error: "This message is too large." },
        { status: 413 },
      );
    }
    payload = JSON.parse(rawBody) as unknown;
  } catch {
    return NextResponse.json(
      { ok: false, error: "Please send a valid message." },
      { status: 400 },
    );
  }

  const parsed = contactSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Please check the highlighted fields.",
        fieldErrors: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  if (Date.now() - parsed.data.formStartedAt < 3000) {
    return NextResponse.json(
      { ok: false, error: "Please take a moment before sending your message." },
      { status: 400 },
    );
  }

  const rateLimit = await checkRateLimit(getClientIp(request));
  if (!rateLimit.success) {
    return NextResponse.json(
      {
        ok: false,
        error: "Too many messages. Please try again in a few minutes.",
      },
      { status: 429 },
    );
  }

  if (!isEmailConfigured()) {
    console.error("Contact form email delivery is not configured.");
    return NextResponse.json(
      { ok: false, error: "Message delivery is temporarily unavailable." },
      { status: 500 },
    );
  }

  try {
    const email = buildContactEmail(parsed.data);
    await transporter.sendMail({
      from: `"Portfolio Contact" <${env.SMTP_USER}>`,
      to: env.CONTACT_TO_EMAIL,
      replyTo: email.replyTo,
      subject: email.subject,
      text: email.text,
      html: email.html,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact form email delivery failed.", error);
    return NextResponse.json(
      { ok: false, error: "We could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
