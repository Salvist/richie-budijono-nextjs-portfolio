import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Product discovery, web and mobile engineering, integrations, and launch support for founders and small teams.",
  alternates: { canonical: "/services" },
};

const capabilities = [
  {
    number: "01",
    title: "Product discovery and scoping",
    description:
      "Clarify the problem, prioritize the first valuable release, identify technical risks, and turn an idea into an actionable build plan.",
  },
  {
    number: "02",
    title: "Web and mobile engineering",
    description:
      "Build production-ready product experiences with maintainable architecture, responsive interfaces, and a foundation that can grow.",
  },
  {
    number: "03",
    title: "AI and operational workflows",
    description:
      "Connect models, data, and internal processes in ways that improve the product without making the experience fragile or confusing.",
  },
  {
    number: "04",
    title: "Launch and product improvement",
    description:
      "Prepare a product for production, improve an existing codebase, and build the next release around what users and the business actually need.",
  },
];

const fits = [
  "You are a founder or small team with a real product problem to solve.",
  "You value clear tradeoffs and direct access to the person building.",
  "You want to ship a focused release and learn from actual use.",
  "You need a hands-on partner who can connect product and engineering.",
];

const notFits = [
  "You only need a quick collection of disconnected screens.",
  "The project depends on vague claims or dark-pattern growth tactics.",
  "You need a large agency team available immediately across every discipline.",
  "There is no decision-maker available to provide context and feedback.",
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-shell pb-16">
        <p className="eyebrow">Services</p>
        <div className="mt-5 grid grid-cols-1 gap-8">
          <h1 className="display-title">Product thinking, backed by hands-on engineering.</h1>
          <div className="max-w-xl">
            <p className="lede">
              I work with founders and small teams from early product questions
              through production—without separating strategy from delivery.
            </p>
            <Link href="/start-a-project" className="button-primary mt-7">
              Start a conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="container max-w-7xl pb-20 sm:pb-28">
        <div className="grid gap-5 sm:gap-6">
          {capabilities.map((capability) => (
            <article
              key={capability.number}
              className="group relative grid grid-cols-[auto_minmax(0,1fr)] gap-5 overflow-hidden rounded-[2rem] border border-border bg-card/95 p-7 shadow-[0_18px_60px_hsl(var(--foreground)/0.06)] transition-colors duration-300 hover:bg-primary/[0.035] sm:p-10 lg:grid-cols-[5rem_minmax(0,1fr)] lg:items-start lg:gap-8 dark:hover:bg-primary/[0.06]"
            >
              <span
                aria-hidden="true"
                className="absolute inset-y-0 left-0 w-1 origin-center scale-y-0 bg-secondary transition-transform duration-300 group-hover:scale-y-100 motion-reduce:transition-none"
              />
              <span className="flex size-12 items-center justify-center rounded-full border border-primary/25 bg-primary/[0.08] font-display text-sm font-bold text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground motion-reduce:transition-none">
                {capability.number}
              </span>
              <div className="min-w-0 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none motion-reduce:transition-none">
                <h2 className="max-w-xl text-2xl font-bold tracking-tight sm:text-3xl">
                  {capability.title}
                </h2>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  {capability.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="page-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Engagement flow
          </p>
          <h2 className="section-title mt-4 max-w-3xl">
            Enough structure to stay aligned. Enough flexibility to solve the
            real problem.
          </h2>
          <ol className="mt-12 grid gap-5 md:grid-cols-4">
            {[
              ["Discover", "Problem, users, context"],
              ["Scope", "Priorities, approach, plan"],
              ["Build", "Visible, testable increments"],
              ["Launch", "Production and next steps"],
            ].map(([title, detail], index) => (
              <li
                key={title}
                className="rounded-[1.5rem] border border-white/15 p-6"
              >
                <p className="text-xs font-bold text-secondary">0{index + 1}</p>
                <h3 className="mt-6 text-2xl font-bold">{title}</h3>
                <p className="mt-2 text-sm text-background/65">{detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="surface p-7 sm:p-10">
            <p className="eyebrow">A strong fit</p>
            <h2 className="mt-4 text-3xl font-bold">We will work well when…</h2>
            <ul className="mt-7 grid gap-5">
              {fits.map((fit) => (
                <li key={fit} className="flex gap-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                    ✓
                  </span>
                  <p className="leading-7">{fit}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="surface p-7 sm:p-10">
            <p className="eyebrow text-secondary">Probably not a fit</p>
            <h2 className="mt-4 text-3xl font-bold">It may not work when…</h2>
            <ul className="mt-7 grid gap-5">
              {notFits.map((fit) => (
                <li key={fit} className="flex gap-4">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-bold">
                    —
                  </span>
                  <p className="leading-7">{fit}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="container max-w-7xl pb-20 sm:pb-28">
        <div className="rounded-[2.5rem] bg-primary p-8 text-primary-foreground sm:p-14">
          <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-70">
            Start with context
          </p>
          <div className="mt-5 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <h2 className="max-w-3xl font-display text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Tell me what you are trying to build—and what is making it hard.
            </h2>
            <Link
              href="/start-a-project"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground"
            >
              Share your project
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
