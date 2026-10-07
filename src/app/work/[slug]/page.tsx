import MDXContent from "@/components/mdx_component";
import { getCaseStudies, getCaseStudy } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  return (await getCaseStudies()).map(({ metadata }) => ({ slug: metadata.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const study = await getCaseStudy((await params).slug);
  if (!study) return {};
  const { title, summary, slug, coverImage } = study.metadata;
  const images = [{ url: coverImage, alt: title }];
  return { title, description: summary, alternates: { canonical: `/work/${slug}` },
    openGraph: { title, description: summary, type: "article", url: `/work/${slug}`, images },
    twitter: { card: "summary_large_image", title, description: summary, images },
  };
}
export default async function CaseStudyPage({ params }: Props) {
  const study = await getCaseStudy((await params).slug);
  if (!study) notFound();
  const { metadata: s, content } = study;
  return <article className="page-shell"><div className="reading-column">
    <Link href="/projects" className="text-link text-sm">← All projects</Link>
    <header className="mt-8">
      <p className="text-sm text-muted-foreground">{s.client} · {s.year}</p>
      <h1 className="display-title mt-3">{s.title}</h1>
      <p className="lede mt-5">{s.summary}</p>
      <p className="mt-5 text-sm"><span className="text-muted-foreground">My role:</span> {s.role}</p>
      <p className="mt-2 text-sm text-muted-foreground">{s.technologies.join(" · ")}</p>
    </header>
    <div className="mt-8 flex flex-col items-start gap-6 rounded-lg bg-muted p-6 sm:flex-row sm:items-center">
      <Image src={s.coverImage} alt={`${s.client} logo`} width={120} height={100} className="h-20 w-28 rounded bg-white object-contain p-3" />
      <ul className="grid gap-2 text-sm">{s.outcomes.map((outcome) => <li key={outcome}>{outcome}</li>)}</ul>
    </div>
    <div className="prose prose-lg mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-a:text-primary">
      <MDXContent source={content} />
    </div>
    <Link href="/work" className="text-link mt-10 inline-block">More experience ↗</Link>
  </div></article>;
}

