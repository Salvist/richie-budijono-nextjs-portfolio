import type {
  CaseStudyMetadata,
  InsightMetadata,
  ProductMetadata,
} from "@/lib/content";
import { formatDate } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export function CaseStudyCard({
  study,
}: {
  study: CaseStudyMetadata;
}) {
  return (
    <article className="surface group overflow-hidden">
      <Link href={`/work/${study.slug}`} className="block">
        <div className="grid min-h-full md:grid-cols-[0.72fr_1.28fr]">
          <div className="relative flex min-h-60 items-center justify-center overflow-hidden bg-muted p-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.25),transparent_55%)]" />
            <Image
              src={study.coverImage}
              alt={`${study.client} logo`}
              width={180}
              height={180}
              className="relative max-h-32 w-auto max-w-[75%] object-contain transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="flex flex-col p-7 sm:p-10">
            <div className="flex flex-wrap items-center gap-2">
              <span className="tag">{study.client}</span>
              <span className="tag">{study.role}</span>
            </div>
            <h3 className="mt-6 text-2xl font-bold tracking-[-0.03em] sm:text-3xl">
              {study.title}
            </h3>
            <p className="mt-4 leading-7 text-muted-foreground">
              {study.summary}
            </p>
            <div className="mt-7 grid grid-cols-2 gap-3">
              {study.outcomes.slice(0, 4).map((outcome) => (
                <p
                  key={outcome}
                  className="border-l-2 border-primary pl-3 text-sm font-semibold"
                >
                  {outcome}
                </p>
              ))}
            </div>
            <p className="mt-8 text-sm font-bold text-primary">
              Read the case study <span aria-hidden>↗</span>
            </p>
          </div>
        </div>
      </Link>
    </article>
  );
}

export function ProductCard({ product }: { product: ProductMetadata }) {
  return (
    <article className="surface group overflow-hidden">
      <Link href={`/work/${product.slug}`} className="block h-full">
        <div className="relative aspect-[16/10] overflow-hidden bg-muted">
          <Image
            src={product.coverImage}
            alt=""
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-background/90 px-3 py-1 text-xs font-bold capitalize text-foreground backdrop-blur">
            {product.status}
          </span>
        </div>
        <div className="p-6">
          <p className="eyebrow">Lone Dream Studio</p>
          <h3 className="mt-3 text-2xl font-bold tracking-tight">
            {product.title}
          </h3>
          <p className="mt-3 leading-7 text-muted-foreground">
            {product.summary}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {product.technologies.slice(0, 3).map((technology) => (
              <span key={technology} className="tag">
                {technology}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </article>
  );
}

export function InsightCard({ insight }: { insight: InsightMetadata }) {
  return (
    <article className="group border-t border-border py-7 first:border-t-0 first:pt-0">
      <Link
        href={`/insights/${insight.slug}`}
        className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start sm:gap-8"
      >
        <div>
          <div className="flex flex-wrap gap-2">
            {insight.topics.map((topic) => (
              <span key={topic} className="eyebrow">
                {topic}
              </span>
            ))}
          </div>
          <h3 className="mt-3 text-2xl font-bold tracking-tight transition-colors group-hover:text-primary sm:text-3xl">
            {insight.title}
          </h3>
          <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
            {insight.summary}
          </p>
        </div>
        <time
          dateTime={insight.publishedAt}
          className="text-sm text-muted-foreground"
        >
          {formatDate(insight.publishedAt)}
        </time>
      </Link>
    </article>
  );
}
