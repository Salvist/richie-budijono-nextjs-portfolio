import Image from "next/image";
import Link from "next/link";
import getProjects from "@/lib/project/getProjects";
import { getPosts } from "@/lib/posts";
import ProjectCard from "@/components/project_card";
import RevealOnScroll from "@/components/reveal_on_scroll";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { services } from "@/lib/services";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";

export default async function Home() {
  const [projects, posts] = await Promise.all([getProjects(), getPosts(2)]);
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="page-shell flex flex-col pt-24">
        <p className="eyebrow fade-up">Web & mobile product engineer — {siteConfig.location}</p>
        <h1 className="display-title mt-6 max-w-5xl fade-up delay-1">
          I turn <span className="text-accent">ambitious ideas</span> into shipped products.
        </h1>
        <div className="mt-10 border-t border-border pt-8">
          <p className="body-large max-w-2xl text-foreground/75 fade-up delay-2">
            I help founders, creators, and small teams shape, build, and launch web and
            mobile apps — from the first rough sketch to a product real people use.
            Apps I&apos;ve built serve 8,000+ students across 40+ schools.
          </p>
          <div className="mt-7 flex flex-wrap gap-3 fade-up delay-3">
            <Link href="/contact" className="button button-primary">
              Work with me <ArrowUpRight className="size-4" />
            </Link>
            <Link href="/projects" className="button button-secondary">
              See my work <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <RevealOnScroll className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="eyebrow">01 — Services</p>
            <h2 className="section-title mt-4">How I can help.</h2>
          </div>
          <Link href="/services" className="nav-link inline-flex items-center gap-2 font-semibold">
            All services <ArrowRight className="size-4" />
          </Link>
        </RevealOnScroll>
        <div className="grid gap-4 md:grid-cols-2">
          {services.map((service, index) => (
            <RevealOnScroll key={service.slug} delay={Math.min(index * 100, 300)}>
              <Link
                href={`/services#${service.slug}`}
                className="group flex h-full min-h-52 flex-col justify-between rounded-card border border-border bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5 sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <span className="font-mono text-sm text-accent">{service.number}</span>
                  <ArrowUpRight className="size-5 text-muted-foreground transition group-hover:text-foreground" />
                </div>
                <div className="mt-10">
                  <h3 className="font-serif text-2xl font-medium tracking-tight sm:text-3xl">
                    {service.title}
                  </h3>
                  <p className="mt-3 max-w-md leading-7 text-muted-foreground">
                    {service.shortDescription}
                  </p>
                </div>
              </Link>
            </RevealOnScroll>
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-card">
        <div className="page-shell py-20 sm:py-28">
          <RevealOnScroll className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="eyebrow">02 — Selected work</p>
              <h2 className="section-title mt-4">Products built to move something forward.</h2>
            </div>
            <Link href="/projects" className="nav-link inline-flex items-center gap-2 font-semibold">
              View all projects <ArrowRight className="size-4" />
            </Link>
          </RevealOnScroll>
          <div className="grid gap-6 md:grid-cols-2">
            {featured.map((project, index) => (
              <ProjectCard key={project.slug} project={project} priority={index < 2} />
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell grid items-center gap-12 py-20 sm:py-28 md:grid-cols-[.65fr_1.35fr]">
        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card bg-secondary">
          <Image
            src="/images/richie_portrait.jpg"
            alt="Richie Budijono"
            fill
            sizes="(min-width: 768px) 35vw, 90vw"
            className="object-cover grayscale-[20%]"
          />
        </div>
        <RevealOnScroll>
          <p className="eyebrow">03 — About</p>
          <h2 className="section-title mt-4">Curious by default. Accountable by choice.</h2>
          <p className="body-large mt-6 max-w-2xl">
            I&apos;m Richie, a New York–based engineer who enjoys the stretch between
            &ldquo;could this work?&rdquo; and &ldquo;people are using it.&rdquo; I&apos;ve
            shipped consumer apps, education platforms, e-commerce experiences, internal
            tools, AI workflows, and the systems behind them.
          </p>
          <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">
            I also build and publish my own apps under {siteConfig.studio} — so I know
            what it takes to ship, not just to code.
          </p>
          <Link href="/about" className="button button-secondary mt-8">
            More about me <ArrowRight className="size-4" />
          </Link>
        </RevealOnScroll>
      </section>

      {posts.length > 0 && (
        <section className="border-t border-border">
          <div className="page-shell py-20 sm:py-28">
            <RevealOnScroll className="mb-10">
              <p className="eyebrow">04 — Writing</p>
              <h2 className="section-title mt-4">Notes from building.</h2>
            </RevealOnScroll>
            <div className="border-t border-border">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/writing/${post.slug}`}
                  className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[1fr_auto] sm:items-center"
                >
                  <div>
                    <h3 className="text-xl font-semibold group-hover:text-accent">{post.title}</h3>
                    <p className="mt-2 text-muted-foreground">{post.summary}</p>
                  </div>
                  <p className="text-sm text-muted-foreground">{formatDate(post.publishedAt || "")}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="page-shell py-20 sm:py-28">
        <div className="rounded-hero bg-foreground px-6 py-16 text-background sm:px-12 sm:py-20">
          <p className="font-mono text-xs font-semibold uppercase tracking-[.2em] text-background/60">
            Have an idea in mind?
          </p>
          <div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">
              Let&apos;s turn the interesting part into something real.
            </h2>
            <Link
              href="/contact"
              className="button shrink-0 bg-background text-foreground hover:-translate-y-0.5 hover:bg-background/90"
            >
              Start a conversation <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
