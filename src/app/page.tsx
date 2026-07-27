import {
  CaseStudyCard,
  InsightCard,
  ProductCard,
} from "@/components/content_cards";
import { getCaseStudies, getInsights, getProducts } from "@/lib/content";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Shape the product",
    copy: "Turn a rough idea into a focused product scope, technical direction, and practical first release.",
  },
  {
    number: "02",
    title: "Build the experience",
    copy: "Create dependable web and mobile products with thoughtful interfaces, reusable systems, and clean integrations.",
  },
  {
    number: "03",
    title: "Launch and improve",
    copy: "Ship with confidence, learn from real usage, and strengthen the product without accumulating avoidable complexity.",
  },
];

const process = [
  ["Discover", "Align on the problem, users, constraints, and the outcome worth building toward."],
  ["Scope", "Define the first valuable release, technical approach, milestones, and risks."],
  ["Build", "Work in visible increments with regular demos, decisions, and honest progress."],
  ["Launch", "Prepare production, verify critical journeys, and create a practical improvement plan."],
];

const principles = [
  "Start with the user and the business outcome.",
  "Make complex technical decisions understandable.",
  "Ship useful increments instead of disappearing for months.",
];

const faqs = [
  {
    question: "What kinds of projects are a good fit?",
    answer:
      "Early product ideas, existing web or mobile products that need momentum, internal tools, and integrations that remove manual work are all strong fits.",
  },
  {
    question: "Can you work with an existing team?",
    answer:
      "Yes. I can lead a focused product build or work alongside your designer, engineers, and stakeholders to fill a delivery or technical gap.",
  },
  {
    question: "Do you handle design too?",
    answer:
      "I lead product discovery, prototyping, and production UI implementation. For projects that need deep brand or specialist UX work, I will recommend bringing in the right design partner.",
  },
  {
    question: "What happens after I send a brief?",
    answer:
      "I personally review the context, reply with any useful questions, and suggest a short fit call when the project matches how I can help.",
  },
];

export default async function Home() {
  const [caseStudies, products, insights] = await Promise.all([
    getCaseStudies(),
    getProducts(),
    getInsights(),
  ]);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="page-shell grid items-center gap-14 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <p className="eyebrow">Independent product consultant</p>
            <h1 className="display-title mt-6 max-w-4xl">
              I help founders turn product ideas into{" "}
              <span className="text-primary">working software.</span>
            </h1>
            <p className="lede mt-8 max-w-2xl">
              From early scope to production, I shape and build dependable web
              and mobile products for founders and small teams.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link href="/start-a-project" className="button-primary justify-center">
                Tell me about your project <span aria-hidden>→</span>
              </Link>
              <Link href="/work" className="button-secondary justify-center">
                See selected work
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <span className="relative flex size-3">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-500 opacity-60" />
                <span className="relative inline-flex size-3 rounded-full bg-green-500" />
              </span>
              <p className="text-sm font-semibold">
                Open to select consulting conversations
              </p>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="surface relative overflow-hidden p-7 sm:p-9">
              <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-primary via-primary to-secondary" />
              <div className="flex items-center justify-between border-b border-border pb-5">
                <div>
                  <p className="eyebrow">Product partner</p>
                  <p className="mt-1 font-bold">From ambiguity to launch</p>
                </div>
                <span className="flex size-11 items-center justify-center rounded-full bg-primary text-xl font-bold text-primary-foreground">
                  ↗
                </span>
              </div>
              <div className="mt-7 grid grid-cols-2 gap-4">
                {[
                  ["8,000+", "students supported"],
                  ["40+", "schools reached"],
                  ["100+", "reusable components"],
                  ["70%", "less manual checking"],
                ].map(([value, label], index) => (
                  <div
                    key={label}
                    className={`rounded-3xl p-5 ${
                      index === 1
                        ? "bg-secondary text-secondary-foreground"
                        : index === 2
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted"
                    }`}
                  >
                    <p className="font-display text-3xl font-bold tracking-tight">
                      {value}
                    </p>
                    <p className="mt-1 text-xs font-semibold uppercase tracking-wider opacity-75">
                      {label}
                    </p>
                  </div>
                ))}
              </div>
              <div className="mt-5 rounded-3xl border border-border p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                  Practical range
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Web", "Mobile", "AI", "Internal tools"].map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-7 -right-3 -z-10 size-36 rounded-full bg-secondary/70 blur-2xl" />
            <div className="absolute -left-8 -top-8 -z-10 size-44 rounded-full bg-primary/30 blur-3xl" />
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-foreground py-7 text-background">
        <div className="container flex max-w-7xl flex-wrap items-center justify-between gap-x-10 gap-y-4">
          <p className="text-xs font-bold uppercase tracking-[0.2em] opacity-60">
            Experience that reaches production
          </p>
          {[
            "Mobile launches",
            "Data platforms",
            "AI workflows",
            "Internal systems",
          ].map((item) => (
            <p key={item} className="font-display text-sm font-bold sm:text-base">
              {item}
            </p>
          ))}
        </div>
      </section>

      <section className="page-shell" id="selected-work">
        <div className="grid gap-6 md:grid-cols-[0.7fr_1.3fr] md:items-end">
          <div>
            <p className="eyebrow">Selected work</p>
            <h2 className="section-title mt-4">Proof over promises.</h2>
          </div>
          <p className="lede max-w-2xl md:justify-self-end">
            Product work across education, commerce, mobile, analytics, and
            operations—measured by the systems shipped and the people they help.
          </p>
        </div>
        <div className="mt-12 grid gap-8">
          {caseStudies.slice(0, 2).map(({ metadata }) => (
            <CaseStudyCard key={metadata.slug} study={metadata} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/work" className="button-secondary">
            Explore all work <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      <section className="border-y border-border bg-card/75">
        <div className="page-shell">
          <p className="eyebrow">How I can help</p>
          <div className="mt-5 grid gap-10 lg:grid-cols-[0.75fr_1.25fr]">
            <div>
              <h2 className="section-title">A practical path from idea to production.</h2>
              <p className="lede mt-6">
                I combine product thinking with hands-on engineering, keeping
                the strategy close to the software being built.
              </p>
              <Link href="/services" className="button-primary mt-8">
                Explore services
              </Link>
            </div>
            <div className="grid gap-5">
              {services.map((service) => (
                <article
                  key={service.number}
                  className="surface grid gap-5 p-6 sm:grid-cols-[auto_1fr] sm:p-8"
                >
                  <span className="flex size-12 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {service.number}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <p className="mt-2 leading-7 text-muted-foreground">
                      {service.copy}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.65fr_1.35fr]">
          <div>
            <p className="eyebrow">Working together</p>
            <h2 className="section-title mt-4">Clear decisions. Visible progress.</h2>
            <p className="mt-6 leading-7 text-muted-foreground">
              Every project is different, but the collaboration should never
              feel mysterious.
            </p>
          </div>
          <ol className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2">
            {process.map(([title, description], index) => (
              <li key={title} className="bg-card p-7 sm:p-9">
                <p className="eyebrow">0{index + 1}</p>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-3 leading-7 text-muted-foreground">
                  {description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="page-shell">
          <div className="grid gap-8 md:grid-cols-[1fr_0.9fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Lone Dream Studio
              </p>
              <h2 className="section-title mt-4">The product lab.</h2>
            </div>
            <p className="max-w-xl leading-7 text-background/70 md:justify-self-end">
              A separate home for the apps and experiments I build to explore
              product ideas, learn new systems, and stay close to shipping.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {products.slice(0, 3).map(({ metadata }) => (
              <ProductCard key={metadata.slug} product={metadata} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="eyebrow">Field notes</p>
            <h2 className="section-title mt-4">What shipping teaches.</h2>
            <p className="lede mt-6">
              Practical notes about product engineering, decisions, mistakes,
              and the work behind dependable software.
            </p>
            <Link href="/insights" className="button-secondary mt-8">
              Read all insights
            </Link>
          </div>
          <div className="surface p-7 sm:p-10">
            {insights.slice(0, 3).map(({ metadata }) => (
              <InsightCard key={metadata.slug} insight={metadata} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/75">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div className="relative mx-auto w-full max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-border bg-muted">
              <Image
                src="/images/richie_portrait.jpg"
                alt="Richie Budijono"
                fill
                sizes="(min-width: 1024px) 40vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -right-5 rounded-2xl bg-secondary px-5 py-4 text-sm font-bold text-secondary-foreground shadow-xl">
              Founder of
              <br />
              Lone Dream Studio
            </div>
          </div>
          <div>
            <p className="eyebrow">A hands-on partner</p>
            <h2 className="section-title mt-4">
              Strategy stays close to the code.
            </h2>
            <p className="lede mt-6">
              I’m Richie, a product-minded software engineer who enjoys turning
              uncertain ideas into useful, maintainable products.
            </p>
            <div className="mt-8 grid gap-4">
              {principles.map((principle, index) => (
                <div key={principle} className="flex gap-4 border-t border-border pt-4">
                  <span className="font-display font-bold text-primary">
                    0{index + 1}
                  </span>
                  <p className="font-semibold">{principle}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="button-secondary mt-8">
              More about me
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">Good questions</p>
            <h2 className="section-title mt-4">Before we talk.</h2>
          </div>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="surface group p-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-display text-lg font-bold">
                  {faq.question}
                  <span
                    aria-hidden
                    className="text-2xl text-primary transition-transform group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="mt-4 max-w-2xl leading-7 text-muted-foreground">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="container max-w-7xl pb-20 sm:pb-28">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary p-8 text-primary-foreground sm:p-14 lg:p-20">
          <div className="absolute -right-24 -top-24 size-80 rounded-full border-[48px] border-white/10" />
          <p className="text-xs font-bold uppercase tracking-[0.18em] opacity-75">
            Have a product in mind?
          </p>
          <h2 className="mt-5 max-w-4xl font-display text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
            Let’s turn the idea into a product people can use.
          </h2>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/start-a-project"
              className="inline-flex min-h-12 items-center justify-center rounded-full bg-background px-6 py-3 text-sm font-bold text-foreground"
            >
              Start a project <span className="ml-2" aria-hidden>→</span>
            </Link>
            <a
              href="mailto:richiechandra47@gmail.com"
              className="inline-flex min-h-12 items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-bold"
            >
              Or email me
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
