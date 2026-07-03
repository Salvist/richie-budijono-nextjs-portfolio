import type { Metadata } from "next";
import ContactForm from "@/components/contact_form";
import { ArrowUpRight } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Richie Budijono about your web app, mobile app, MVP, or AI project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="page-shell pb-24 pt-24 sm:pb-28">
      <div className="grid gap-14 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow reveal-header">Contact</p>
          <h1 className="page-title reveal-header delay-1 mt-5">
            Let&apos;s talk about your idea.
          </h1>
          <p className="body-large reveal-header delay-2 mt-8 max-w-xl">
            Tell me what you&apos;re trying to build — even if it&apos;s rough. I read
            every message and usually reply within a day or two with honest thoughts on
            scope, approach, and fit.
          </p>

          <div className="reveal-header delay-3 mt-10 space-y-4 border-t border-border pt-8">
            <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Prefer another way?
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="nav-link inline-flex items-center gap-2 text-base"
              >
                {siteConfig.email} <ArrowUpRight className="size-4" />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noreferrer"
                className="nav-link inline-flex items-center gap-2 text-base"
              >
                LinkedIn <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="card relative p-6 sm:p-10">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
