import type { Metadata } from "next";
import Link from "next/link";
import RevealOnScroll from "@/components/reveal_on_scroll";
import { ArrowUpRight, Check } from "@/components/icons";
import { processSteps, services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Web app development, mobile app development, MVP builds, and AI integrations — how Richie Budijono can help you ship your product.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <section className="page-shell pb-16 pt-24 sm:pb-20">
        <p className="eyebrow reveal-header">Services</p>
        <h1 className="page-title reveal-header delay-1 mt-5 max-w-4xl">
          From the rough sketch to the real thing.
        </h1>
        <p className="body-large reveal-header delay-2 mt-8 max-w-2xl">
          The best work starts before the first line of code. I combine product thinking
          with hands-on engineering so what we build is useful, maintainable, and ready
          to grow.
        </p>
      </section>

      <section className="page-shell pb-20">
        <div className="flex flex-col gap-6">
          {services.map((service, index) => (
            <RevealOnScroll key={service.slug} delay={Math.min(index * 100, 300)}>
              <article
                id={service.slug}
                className="card scroll-mt-24 grid gap-8 p-6 sm:p-10 lg:grid-cols-[1.2fr_.8fr]"
              >
                <div>
                  <span className="font-mono text-sm text-accent">{service.number}</span>
                  <h2 className="mt-4 font-serif text-3xl font-medium tracking-tight sm:text-4xl">
                    {service.title}
                  </h2>
                  <p className="mt-5 max-w-xl text-lg leading-8 text-muted-foreground">
                    {service.description}
                  </p>
                  <p className="mt-6 border-l-2 border-accent pl-4 text-sm leading-7 text-muted-foreground">
                    {service.proof}
                  </p>
                </div>
                <div className="lg:border-l lg:border-border lg:pl-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    What&apos;s included
                  </p>
                  <ul className="mt-4 space-y-3">
                    {service.includes.map((item) => (
                      <li key={item} className="flex gap-3 leading-7 text-muted-foreground">
                        <Check className="mt-1.5 size-4 shrink-0 text-accent" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="page-shell py-20 sm:py-28">
          <RevealOnScroll className="max-w-2xl">
            <p className="eyebrow">How we work together</p>
            <h2 className="section-title mt-4">A simple process, on purpose.</h2>
          </RevealOnScroll>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step) => (
              <li key={step.number} className="bg-background p-7">
                <span className="font-mono text-sm text-accent">{step.number}</span>
                <h3 className="mt-4 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-shell py-20 text-center sm:py-28">
        <p className="eyebrow reveal-header">Sound like a fit?</p>
        <h2 className="section-title reveal-header delay-1 mx-auto mt-4 max-w-3xl">
          Tell me what you&apos;re trying to build.
        </h2>
        <p className="reveal-header delay-2 mx-auto mt-6 max-w-xl text-lg leading-8 text-muted-foreground">
          A short message is enough to start. I&apos;ll reply with honest thoughts on
          scope, approach, and whether I&apos;m the right person for it.
        </p>
        <Link href="/contact" className="button button-primary reveal-header delay-3 mt-8">
          Get in touch <ArrowUpRight className="size-4" />
        </Link>
      </section>
    </>
  );
}
