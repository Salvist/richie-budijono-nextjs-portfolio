import MDXContent from "@/components/mdx_component";
import { DEFAULT_PRODUCT_COVER_IMAGE, getProduct, getProducts } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export async function generateStaticParams() {
  return (await getProducts()).map(({ metadata }) => ({ slug: metadata.slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await getProduct((await params).slug);
  if (!project) return {};
  const { title, summary, slug } = project.metadata;
  const images = [{ url: project.metadata.coverImage ?? DEFAULT_PRODUCT_COVER_IMAGE, alt: title }];
  return {
    title, description: summary, alternates: { canonical: `/projects/${slug}` },
    openGraph: { type: "website", url: `/projects/${slug}`, title, description: summary, images },
    twitter: { card: "summary_large_image", title, description: summary, images },
  };
}
export default async function ProjectPage({ params }: Props) {
  const project = await getProduct((await params).slug);
  if (!project) notFound();
  const { metadata: p, content } = project;
  const coverImage = p.coverImage ?? DEFAULT_PRODUCT_COVER_IMAGE;
  return <article className="page-shell"><div className="reading-column">
    <Link href="/projects" className="text-link text-sm">← All projects</Link>
    <header className="mt-8">
      <p className="text-sm text-muted-foreground">Independent product · {p.platforms.join(" / ")} · {p.status}</p>
      <h1 className="display-title mt-3">{p.title}</h1>
      <p className="lede mt-5">{p.summary}</p>
      {p.contribution && <div className="mt-6 border-l-2 border-border pl-5">
        <h2 className="text-base font-semibold">My contribution</h2>
        <p className="mt-2 leading-7 text-muted-foreground">{p.contribution}</p>
      </div>}
      <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm">
        {p.productUrl && <a className="text-link" href={p.productUrl} target="_blank" rel="noreferrer">Visit {p.title} ↗</a>}
        {p.sourceUrl && <a className="text-link" href={p.sourceUrl} target="_blank" rel="noreferrer">Source code ↗</a>}
        {p.storeLinks.map((link) => <a key={link.href} className="text-link" href={link.href} aria-label={link.label} target="_blank" rel="noreferrer">{link.platform === "iOS" ? "App Store" : "Google Play"} ↗</a>)}
      </div>
    </header>
    {!content.includes("## Screenshots") && <div className="relative mt-8 flex h-56 items-center justify-center overflow-hidden rounded-lg bg-muted">
      <Image src={coverImage} alt={`${p.title} preview`} width={360} height={220} unoptimized={coverImage.endsWith(".gif")} className="h-full w-auto object-contain p-5" />
    </div>}
    <div className="prose prose-lg mt-10 max-w-none dark:prose-invert prose-headings:font-display prose-a:text-primary prose-img:rounded-lg">
      <MDXContent source={content} />
    </div>
  </div></article>;
}

