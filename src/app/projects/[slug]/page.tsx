import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx_component";
import { ArrowUpRight } from "@/components/icons";
import getProject from "@/lib/project/getProject";
import getProjects from "@/lib/project/getProjects";
import { siteConfig } from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return (await getProjects()).map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};
  return {
    title: project.metadata.title,
    description: project.metadata.summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: { title: project.metadata.title, description: project.metadata.summary, url: `/projects/${slug}` },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
  if (!project) notFound();
  const { metadata, content } = project;

  return (
    <article>
      <header className="page-shell pb-14 pt-24 sm:pb-20">
        <Link href="/projects" className="nav-link">← Back to projects</Link>
        <p className="eyebrow mt-12">{metadata.client || "Independent product"}</p>
        <h1 className="page-title mt-5 max-w-5xl">{metadata.title}</h1>
        <p className="body-large mt-8 max-w-3xl">{metadata.summary}</p>
        <dl className="mt-12 grid gap-7 border-y border-border py-7 sm:grid-cols-3">
          <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Role</dt><dd className="mt-2 font-medium">{metadata.role || "Engineer"}</dd></div>
          <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Period</dt><dd className="mt-2 font-medium">{metadata.period || metadata.publishedAt}</dd></div>
          <div><dt className="text-xs uppercase tracking-widest text-muted-foreground">Services</dt><dd className="mt-2 font-medium">{metadata.services?.join(", ")}</dd></div>
        </dl>
      </header>

      {(metadata.coverImage || metadata.image) && <div className="page-shell"><div className="relative flex aspect-[16/8] items-center justify-center overflow-hidden rounded-panel bg-secondary"><Image src={metadata.coverImage || metadata.image || ""} alt="" fill priority sizes="(min-width: 1200px) 1152px, 100vw" className={metadata.visualStyle === "brand" ? "object-contain p-20 sm:p-32" : "object-cover"} /></div></div>}

      {metadata.metrics && metadata.metrics.length > 0 && <section aria-label="Project outcomes" className="page-shell py-14"><div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-3">{metadata.metrics.map((metric) => <div key={metric.label} className="bg-card p-7"><p className="text-3xl font-semibold tracking-tight">{metric.value}</p><p className="mt-2 text-sm text-muted-foreground">{metric.label}</p></div>)}</div></section>}

      <div className="page-shell grid gap-12 pb-24 pt-10 lg:grid-cols-[.7fr_1.3fr]">
        <aside><div className="sticky top-28"><p className="eyebrow">Project</p>{metadata.technologies && <div className="mt-6 flex flex-wrap gap-2">{metadata.technologies.map((technology) => <span key={technology} className="rounded-full border border-border px-3 py-1.5 text-xs text-muted-foreground">{technology}</span>)}</div>}{metadata.links?.map((link) => <a key={link.url} href={link.url} target="_blank" rel="noreferrer" className="button button-secondary mt-7">{link.label} <ArrowUpRight className="size-4" /></a>)}</div></aside>
        <div className="prose prose-lg dark:prose-invert"><MDXContent source={content} /></div>
      </div>

      <section className="border-t border-border"><div className="page-shell py-20 text-center sm:py-28"><p className="eyebrow">Start a conversation</p><h2 className="section-title mx-auto mt-4 max-w-3xl">Working through a product idea of your own?</h2><a href={siteConfig.mailto} className="button button-primary mt-8">Contact Me <ArrowUpRight className="size-4" /></a></div></section>
    </article>
  );
}
