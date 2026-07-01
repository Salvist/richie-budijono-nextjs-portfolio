import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MDXContent from "@/components/mdx_component";
import { getPostBySlug, getPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() { return (await getPosts()).map((post) => ({ slug: post.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) return {};
  return { title: post.metadata.title, description: post.metadata.summary, alternates: { canonical: `/writing/${slug}` }, openGraph: { type: "article", title: post.metadata.title, description: post.metadata.summary, url: `/writing/${slug}` } };
}

export default async function WritingDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) notFound();
  const { metadata, content } = post;
  return (
    <article className="page-shell pb-28 pt-24 ">
      <Link href="/writing" className="nav-link">← See other writing</Link>
      <header className="mx-auto mt-12 max-w-3xl text-center"><p className="eyebrow">Field note</p><h1 className="page-title mt-5">{metadata.title}</h1><p className="body-large mt-7">{metadata.summary}</p>{metadata.publishedAt && <p className="mt-6 text-sm text-muted-foreground">{formatDate(metadata.publishedAt)}</p>}</header>
      {metadata.image && <div className="relative my-14 aspect-[16/8] overflow-hidden rounded-panel bg-secondary"><Image src={metadata.image} alt="" fill priority sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover" /></div>}
      <div className="prose prose-lg dark:prose-invert mx-auto mt-14 max-w-3xl"><MDXContent source={content} /></div>
    </article>
  );
}
