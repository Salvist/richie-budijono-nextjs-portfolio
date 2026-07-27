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
    outputs: ["Product scope", "Technical direction", "Prototype", "Delivery plan"],
  },
  {
    number: "02",
    title: "Web and mobile engineering",
    description:
      "Build production-ready product experiences with maintainable architecture, responsive interfaces, and a foundation that can grow.",
    outputs: ["Web applications", "Mobile applications", "Design systems", "API integration"],
  },
  {
    number: "03",
    title: "AI and operational workflows",
    description:
      "Connect models, data, and internal processes in ways that improve the product without making the experience fragile or confusing.",
    outputs: ["AI features", "Internal tools", "Automation", "Data workflows"],
  },
  {
    number: "04",
    title: "Launch and product improvement",
    description:
      "Prepare a product for production, improve an existing codebase, and build the next release around what users and the business actually need.",
    outputs: ["Launch readiness", "Modernization", "Performance", "Iteration"],
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
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="display-title">Product thinking, backed by hands-on engineering.</h1>
          <div className="max-w-xl lg:justify-self-end">
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
        <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border lg:grid-cols-2">
          {capabilities.map((capability) => (
            <article key={capability.number} className="bg-card p-7 sm:p-10">
              <div className="flex items-start justify-between gap-5">
                <h2 className="max-w-md text-3xl font-bold tracking-tight">
                  {capability.title}
                </h2>
                <span className="font-display text-sm font-bold text-primary">
                  {capability.number}
                </span>
              </div>
              <p className="mt-5 max-w-xl leading-7 text-muted-foreground">
                {capability.description}
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {capability.outputs.map((output) => (
                  <span key={output} className="tag">
                    {output}
                  </span>
                ))}
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
