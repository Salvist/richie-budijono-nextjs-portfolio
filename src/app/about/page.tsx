import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Richie Budijono, an independent product consultant and founder of Lone Dream Studio.",
  alternates: { canonical: "/about" },
};

const experience = [
  {
    company: "Y Lift",
    role: "Full-stack Developer",
    time: "2024–Present",
    description:
      "Leading front-end delivery across an e-commerce experience and three internal applications, with a focus on reusable systems and maintainable delivery.",
    image: "/images/logos/ys_logo.png",
  },
  {
    company: "BLAST",
    role: "Full-stack Engineer",
    time: "2021–Present",
    description:
      "Building mobile, analytics, reporting, AI-assisted transcription, and identity workflows for a bilingual education platform.",
    image: "/images/logos/blast_logo.png",
  },
];

const strengths = [
  ["Product judgment", "Turning unclear requests into a focused, useful first release."],
  ["Cross-platform delivery", "Building connected web and mobile experiences with shared product thinking."],
  ["Systems thinking", "Seeing the data, operational, and maintenance work behind the interface."],
  ["Clear collaboration", "Explaining decisions and tradeoffs without hiding behind technical language."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-shell pb-16">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="eyebrow">About me</p>
            <h1 className="display-title mt-5">I like making uncertain ideas concrete.</h1>
            <p className="lede mt-7 max-w-2xl">
              I’m Richie Budijono, an independent product consultant and
              software engineer. I help founders and small teams connect product
              decisions with the realities of building reliable software.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/start-a-project" className="button-primary justify-center">
                Work with me
              </Link>
              <a
                href="mailto:richiechandra47@gmail.com"
                className="button-secondary justify-center"
              >
                Email me
              </a>
            </div>
          </div>
          <div className="relative mx-auto w-full max-w-lg">
            <div className="surface relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/richie_landscape.jpg"
                alt="Richie Budijono at the Edge in New York City"
                fill
                priority
                sizes="(min-width: 1024px) 45vw, 90vw"
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-4 max-w-xs rounded-2xl bg-secondary p-5 text-sm font-bold leading-6 text-secondary-foreground shadow-xl">
              Founder of Lone Dream Studio, where I build and learn through my
              own products.
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-card/75">
        <div className="page-shell grid gap-12 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="eyebrow">How I got here</p>
            <h2 className="section-title mt-4">Learning by shipping.</h2>
          </div>
          <div className="grid gap-6 text-lg leading-8 text-muted-foreground">
            <p>
              My career started with Flutter and a chance to turn an education
              prototype into a real mobile product. Shipping it taught me that
              software is never only the interface: releases, data, reporting,
              identity, and the people operating the system all matter.
            </p>
            <p>
              That work expanded into analytics for thousands of students,
              AI-assisted transcription, and reporting used across schools. In
              commerce, I have led front-end work across customer and internal
              tools while building reusable foundations for a growing team.
            </p>
            <p>
              Lone Dream Studio keeps me close to the founder side of the
              experience. Building my own products means confronting scope,
              launch constraints, platform policy, and the difference between a
              clever feature and something people can actually use.
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell">
        <p className="eyebrow">What I bring</p>
        <div className="mt-8 grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2">
          {strengths.map(([title, description], index) => (
            <article key={title} className="bg-card p-7 sm:p-10">
              <p className="font-display text-sm font-bold text-primary">
                0{index + 1}
              </p>
              <h2 className="mt-6 text-3xl font-bold">{title}</h2>
              <p className="mt-3 max-w-lg leading-7 text-muted-foreground">
                {description}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="scroll-mt-28 border-y border-border bg-foreground text-background"
      >
        <div className="page-shell">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
            Experience
          </p>
          <h2 className="section-title mt-4">Work that reaches people.</h2>
          <div className="mt-12 grid gap-5">
            {experience.map((item) => (
              <article
                key={item.company}
                className="grid gap-6 rounded-[2rem] border border-white/15 p-7 sm:grid-cols-[auto_1fr_auto] sm:items-center sm:p-9"
              >
                <div className="flex size-20 items-center justify-center rounded-2xl bg-white p-3">
                  <Image
                    src={item.image}
                    alt={`${item.company} logo`}
                    width={64}
                    height={64}
                    className="max-h-14 w-auto object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">{item.company}</h3>
                  <p className="mt-1 font-semibold text-secondary">{item.role}</p>
                  <p className="mt-3 max-w-2xl leading-7 text-background/65">
                    {item.description}
                  </p>
                </div>
                <p className="text-sm font-semibold text-background/55">
                  {item.time}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
