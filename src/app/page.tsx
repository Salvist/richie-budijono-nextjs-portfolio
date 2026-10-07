import { SelectedProject } from "@/components/portfolio";
import { getSelectedPortfolio } from "@/lib/portfolio";
import { getInsights } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default async function Home() {
  const [projects, insights] = await Promise.all([getSelectedPortfolio(), getInsights()]);
  return <div className="site-shell">
    <section className="py-14 text-center sm:py-20" aria-labelledby="intro-heading">
      <h1 id="intro-heading" className="display-title">Richie Budijono</h1>
      <p className="mx-auto mt-5 max-w-[640px] text-lg leading-8 text-muted-foreground">
        I’m a software engineer building web and mobile apps.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Link href="/projects" className="inline-flex min-h-11 items-center justify-center rounded-full bg-primary px-6 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">View projects</Link>
        <a href="mailto:richiechandra47@gmail.com" className="inline-flex min-h-11 items-center justify-center rounded-full border border-primary px-6 py-2 text-sm font-medium text-primary hover:bg-primary/10">Say hello</a>
      </div>
    </section>
    <section className="border-t border-border pt-7" aria-labelledby="selected-heading">
      <div className="flex items-center justify-between gap-4">
        <h2 id="selected-heading" className="section-title">Selected work</h2>
        <span className="text-xs text-muted-foreground" aria-hidden="true">01 — 03</span>
      </div>
      {projects.map((item, index) => <SelectedProject key={item.slug} item={item} index={index} />)}
      <Link href="/projects" className="text-link mt-5 inline-block">All projects <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="mt-12 border-t border-border py-9 sm:mt-16" aria-labelledby="about-heading">
      <h2 id="about-heading" className="section-title">A little about me</h2>
      <div className="mt-6 max-w-[720px]">
        <p className="leading-8 text-muted-foreground">I enjoy making ideas tangible—through useful apps, thoughtful interfaces, and steady iteration. My work spans education, commerce, and the products I build through Lone Dream Studio.</p>
        <div className="mt-6 flex flex-wrap gap-7">
          <Link href="/about" className="text-link">More about me <span aria-hidden="true">↗</span></Link>
          <Link href="/work" className="text-link">Experience <span aria-hidden="true">↗</span></Link>
        </div>
      </div>
    </section>
    <section className="grid gap-6 border-t border-border py-9 md:grid-cols-[0.7fr_1.5fr_auto] md:items-start md:gap-9" aria-labelledby="writing-heading">
      <h2 id="writing-heading" className="section-title">Latest writing</h2>
      <div className="grid gap-5">{insights.slice(0, 1).map(({ metadata }) => <article key={metadata.slug}>
        <h3 className="font-body text-base font-semibold"><Link href={`/insights/${metadata.slug}`} className="hover:text-primary">{metadata.title}</Link></h3>
        <time dateTime={metadata.publishedAt} className="mt-2 block text-sm text-muted-foreground">{formatDate(metadata.publishedAt)}</time>
      </article>)}</div>
      <Link href="/insights" className="text-link text-sm">All writing <span aria-hidden="true">↗</span></Link>
    </section>
  </div>;
}

