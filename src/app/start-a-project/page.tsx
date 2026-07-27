import InquiryForm from "@/components/inquiry_form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Start a Project",
  description:
    "Share your product idea, existing-product challenge, or internal tool project with Richie Budijono.",
  alternates: { canonical: "/start-a-project" },
};

export default function StartAProjectPage() {
  return (
    <section className="page-shell">
      <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr] lg:items-start">
        <div className="lg:sticky lg:top-28">
          <p className="eyebrow">Start a project</p>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[0.98] tracking-[-0.05em] sm:text-6xl">
            Give me the real context.
          </h1>
          <p className="lede mt-7">
            Tell me what you are trying to build, where the idea stands, and
            what you need help making possible.
          </p>
          <div className="mt-9 grid gap-5 border-t border-border pt-7">
            {[
              ["01", "I personally review every serious inquiry."],
              ["02", "I will reply with useful questions or next steps."],
              ["03", "If it is a fit, we will arrange a short conversation."],
            ].map(([number, copy]) => (
              <div key={number} className="flex gap-4">
                <span className="font-display text-sm font-bold text-primary">
                  {number}
                </span>
                <p className="font-semibold">{copy}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-sm leading-6 text-muted-foreground">
            Prefer email? Write to{" "}
            <a
              className="font-bold text-foreground underline decoration-primary underline-offset-4"
              href="mailto:richiechandra47@gmail.com"
            >
              richiechandra47@gmail.com
            </a>
            .
          </p>
        </div>
        <InquiryForm />
      </div>
    </section>
  );
}
