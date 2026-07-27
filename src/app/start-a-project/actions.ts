"use server";

import { inquirySchema, type InquiryInput } from "@/lib/schemas";
import { Resend } from "resend";

export type InquiryState = {
  status: "idle" | "success" | "error";
  message: string;
  errors?: Partial<Record<keyof InquiryInput, string[]>>;
  values?: Partial<InquiryInput>;
};

const completedSubmissions = new Map<string, number>();
const submissionTtl = 10 * 60 * 1000;

function cleanCompletedSubmissions(now: number) {
  for (const [id, completedAt] of completedSubmissions.entries()) {
    if (now - completedAt > submissionTtl) completedSubmissions.delete(id);
  }
}

function label(value: string) {
  return value
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export async function submitInquiry(
  _previousState: InquiryState,
  formData: FormData,
): Promise<InquiryState> {
  const rawValues = Object.fromEntries(formData);
  const parsed = inquirySchema.safeParse(rawValues);

  if (!parsed.success) {
    return {
      status: "error",
      message: "Please review the highlighted fields.",
      errors: parsed.error.flatten().fieldErrors,
      values: rawValues as Partial<InquiryInput>,
    };
  }

  const inquiry = parsed.data;

  // Bots that fill the hidden field receive a neutral response.
  if (inquiry.website) {
    return {
      status: "success",
      message: "Thanks—your project brief has been received.",
    };
  }

  const now = Date.now();
  cleanCompletedSubmissions(now);
  if (completedSubmissions.has(inquiry.submissionId)) {
    return {
      status: "success",
      message: "Your project brief was already received.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;
  const recipient =
    process.env.CONTACT_EMAIL ?? "richiechandra47@gmail.com";

  if (!apiKey || !from) {
    return {
      status: "error",
      message:
        "Automatic delivery is not configured yet. Please email me directly and I’ll get back to you.",
      values: inquiry,
    };
  }

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from,
      to: recipient,
      replyTo: inquiry.email,
      subject: `New project brief from ${inquiry.name.replace(/[\r\n]/g, " ")}`,
      text: [
        `Name: ${inquiry.name}`,
        `Email: ${inquiry.email}`,
        `Company: ${inquiry.company || "Not provided"}`,
        `Project type: ${label(inquiry.projectType)}`,
        `Platform: ${label(inquiry.platform)}`,
        `Stage: ${label(inquiry.stage)}`,
        `Budget: ${label(inquiry.budget)}`,
        `Desired start: ${label(inquiry.timeline)}`,
        "",
        "Project summary:",
        inquiry.summary,
      ].join("\n"),
    });

    if (result.error) {
      return {
        status: "error",
        message:
          "I couldn’t deliver the brief just now. Your answers are still here, or you can email me directly.",
        values: inquiry,
      };
    }
  } catch {
    return {
      status: "error",
      message:
        "I couldn’t deliver the brief just now. Your answers are still here, or you can email me directly.",
      values: inquiry,
    };
  }

  completedSubmissions.set(inquiry.submissionId, now);

  return {
    status: "success",
    message:
      "Thanks—I’ll personally review your brief and reply with useful next steps.",
  };
}
