import { Resend } from "resend";
import { ContactFormSchema } from "@/lib/schemas";
import { siteConfig } from "@/lib/site";

const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX = 3;
const recentRequests = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (recentRequests.get(ip) ?? []).filter(
    (time) => now - time < RATE_LIMIT_WINDOW_MS
  );
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  recentRequests.set(ip, timestamps);
  return false;
}

export async function POST(request: Request) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";
  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many messages. Please try again in a minute." },
      { status: 429 }
    );
  }

  const body = await request.json().catch(() => null);
  const parsed = ContactFormSchema.safeParse(body);
  if (!parsed.success) {
    return Response.json({ error: "Invalid form data." }, { status: 400 });
  }

  const { name, email, service, budget, message, company } = parsed.data;

  // Honeypot filled in — pretend success so bots don't learn anything.
  if (company) {
    return Response.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("RESEND_API_KEY is not set; contact form cannot send email.");
    return Response.json(
      {
        error: `The contact form isn't available right now. Please email me directly at ${siteConfig.email}.`,
      },
      { status: 503 }
    );
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from: process.env.CONTACT_FROM_EMAIL ?? "Portfolio Contact <onboarding@resend.dev>",
    to: siteConfig.email,
    replyTo: email,
    subject: `New inquiry from ${name} — ${service}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      `Service: ${service}`,
      budget ? `Budget: ${budget}` : null,
      "",
      message,
    ]
      .filter((line) => line !== null)
      .join("\n"),
  });

  if (error) {
    console.error("Resend error:", error);
    return Response.json(
      {
        error: `Something went wrong sending your message. Please email me directly at ${siteConfig.email}.`,
      },
      { status: 502 }
    );
  }

  return Response.json({ ok: true });
}
