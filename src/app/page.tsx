import Image from "next/image";
import Link from "next/link";
import getProjects from "@/lib/project/getProjects";
import { getPosts } from "@/lib/posts";
import ProjectCard from "@/components/project_card";
import Testimonial from "@/components/testimonial";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { siteConfig } from "@/lib/site";
import { formatDate } from "@/lib/utils";

const services = [
  { number: "01", title: "Shape the idea", text: "I'll discuss your idea, the people it should serve, and the problem it needs to solve. Together, we'll solidify the concept, prioritize the right features, and define a focused first version worth building." },
  { number: "02", title: "Build the MVP", text: "I’ll turn the plan into a working web or mobile product with a clean, intuitive experience. We’ll focus on practical engineering and the essential features needed to test the idea with real users." },
  { number: "03", title: "Prepare for launch", text: "I’ll help you prepare and release the product on the platforms that fit it—including the App Store, Google Play, and the web. That includes production builds, store assets, metadata, deployment, and the technical setup needed to launch confidently." },
  { number: "04", title: "Improve what exists", text: "If you already have a product, I’ll help identify what is holding it back and create a practical path forward. We can refine the experience, redesign key flows, refactor fragile code, or finish the features needed to get it over the line." },
];

export default async function Home() {
  const [projects, posts] = await Promise.all([getProjects(), getPosts(2)]);
  const featured = projects.filter((project) => project.featured).slice(0, 4);

  return (
    <>
      <section className="page-shell flex flex-col pt-24">
        <h1 className="display-title max-w-5xl fade-up delay-1">I turn <span className="text-accent">messy app ideas</span> into shipped products.</h1>
        <div className="mt-10 border-t border-border pt-8">
          <p className="body-large max-w-2xl text-foreground/75 fade-up delay-2">I help founders, creators, and small teams shape, design, and build web and mobile apps—from the first rough idea to a product real users can use.</p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href={siteConfig.mailto} className="button button-primary">Tell me about your idea <ArrowUpRight className="size-4" /></a>
            <Link href="/projects" className="button button-secondary">Selected projects <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </section>

      <section className="page-shell py-20 sm:py-28">
        <div className="reveal-header mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="eyebrow">Selected projects</p><h2 className="section-title mt-4">Products built to move something forward.</h2></div>
          <Link href="/projects" className="nav-link inline-flex items-center gap-2 font-semibold">View all projects <ArrowRight className="size-4" /></Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">{featured.map((project, index) => <ProjectCard key={project.slug} project={project} priority={index < 2} />)}</div>
      </section>

      <section id="services" className="scroll-mt-20 border-y border-border bg-card">
        <div className="page-shell py-20 sm:py-28">
          <div className="reveal-header grid gap-8 border-b border-border pb-12 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
            <div>
              <p className="eyebrow">How I can help</p>
              <h2 className="section-title mt-4 max-w-3xl">From the rough sketch to the real thing.</h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground lg:justify-self-end">The best work starts before the first line of code. I combine product thinking with hands-on engineering so what we build is useful, maintainable, and ready to grow.</p>
          </div>

          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {services.map((service) => (
              <li key={service.number} className="group flex min-h-64 flex-col justify-between rounded-card border border-border bg-background p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-lg hover:shadow-foreground/5 sm:p-8">
                <span className="flex size-11 items-center justify-center rounded-full border border-border bg-secondary font-mono text-sm text-muted-foreground">{service.number}</span>
                <div className="mt-12">
                  <h3 className="font-serif text-3xl font-medium tracking-tight sm:text-4xl">{service.title}</h3>
                  <p className="mt-4 max-w-md leading-7 text-muted-foreground">{service.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <Testimonial />

      <section className="border-y border-border bg-card">
        <div className="page-shell grid items-center gap-12 py-20 sm:py-28 md:grid-cols-[.65fr_1.35fr]">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-card bg-secondary"><Image src="/images/richie_portrait.jpg" alt="Richie Budijono" fill sizes="(min-width: 768px) 35vw, 90vw" className="object-cover grayscale-[20%]" /></div>
          <div className="reveal-header"><p className="eyebrow">A little about me</p><h2 className="section-title mt-4">Curious by default. Accountable by choice.</h2><p className="body-large mt-6 max-w-2xl">I’m Richie, a New York–based engineer who enjoys the stretch between “could this work?” and “people are using it.” I’ve shipped consumer apps, education platforms, e-commerce experiences, internal tools, AI workflows, and the systems behind them.</p><p className="mt-5 max-w-2xl leading-7 text-muted-foreground">I care about craft, but I care just as much about making sound decisions, explaining tradeoffs clearly, and leaving a product healthier than I found it.</p><Link href="/about" className="button button-secondary mt-8">More about me <ArrowRight className="size-4" /></Link></div>
        </div>
      </section>

      {posts.length > 0 && <section className="page-shell py-20 sm:py-28"><div className="reveal-header mb-10"><p className="eyebrow">Selected writing</p><h2 className="section-title mt-4">Notes from building.</h2></div><div className="border-t border-border">{posts.map((post) => <Link key={post.slug} href={`/writing/${post.slug}`} className="group grid gap-4 border-b border-border py-7 sm:grid-cols-[1fr_auto] sm:items-center"><div><h3 className="text-xl font-semibold group-hover:text-accent">{post.title}</h3><p className="mt-2 text-muted-foreground">{post.summary}</p></div><p className="text-sm text-muted-foreground">{formatDate(post.publishedAt || "")}</p></Link>)}</div></section>}

      <section className="page-shell pb-24 sm:pb-32"><div className="rounded-hero bg-foreground px-6 py-16 text-background sm:px-12 sm:py-20"><p className="text-xs font-semibold uppercase tracking-[.2em] text-background/60">Have an app idea?</p><div className="mt-5 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"><h2 className="max-w-3xl font-serif text-4xl leading-tight tracking-tight sm:text-6xl">Let’s turn the interesting part into something real.</h2><a href={siteConfig.mailto} className="button shrink-0 bg-background text-foreground hover:-translate-y-0.5 hover:bg-background/90">Start a conversation <ArrowUpRight className="size-4" /></a></div></div></section>
    </>
  );
}
