import MDXContent from "@/components/mdx_component";
import { getInsight, getInsights } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const insights = await getInsights();
  return insights.map(({ metadata }) => ({ slug: metadata.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) return {};

  return {
    title: insight.metadata.title,
    description: insight.metadata.summary,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      type: "article",
      publishedTime: insight.metadata.publishedAt,
      modifiedTime: insight.metadata.updatedAt,
      images: [insight.metadata.coverImage],
    },
  };
}

export default async function InsightPage({ params }: Props) {
  const { slug } = await params;
  const insight = await getInsight(slug);
  if (!insight) notFound();

  return (
    <article className="page-shell">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/insights"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground"
        >
          <span aria-hidden>←</span> Back to insights
        </Link>
        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            {insight.metadata.topics.map((topic) => (
              <span key={topic} className="tag">
                {topic}
              </span>
            ))}
          </div>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
            {insight.metadata.title}
          </h1>
          <p className="lede mt-6">{insight.metadata.summary}</p>
          <p className="mt-6 text-sm text-muted-foreground">
            Published {formatDate(insight.metadata.publishedAt)}
            {insight.metadata.updatedAt &&
              ` · Updated ${formatDate(insight.metadata.updatedAt)}`}
          </p>
        </div>
        <div className="surface relative mt-10 aspect-[16/8] overflow-hidden bg-muted">
          <Image
            src={insight.metadata.coverImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 896px, 100vw"
            className="object-cover"
          />
        </div>
        <div className="prose prose-lg mx-auto mt-14 max-w-3xl dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary">
          <MDXContent source={insight.content} />
        </div>
      </div>
    </article>
  );
}
