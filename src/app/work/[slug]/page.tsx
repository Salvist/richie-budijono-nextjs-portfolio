import MDXContent from "@/components/mdx_component";
import {
  getCaseStudies,
  getCaseStudy,
  getProduct,
  getProducts,
} from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  const [studies, products] = await Promise.all([
    getCaseStudies(),
    getProducts(),
  ]);
  return [...studies, ...products].map(({ metadata }) => ({
    slug: metadata.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const entry = (await getCaseStudy(slug)) ?? (await getProduct(slug));

  if (!entry) return {};

  return {
    title: entry.metadata.title,
    description: entry.metadata.summary,
    alternates: { canonical: `/work/${slug}` },
    openGraph: {
      title: entry.metadata.title,
      description: entry.metadata.summary,
      images: [entry.metadata.coverImage],
    },
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const study = await getCaseStudy(slug);
  const product = study ? null : await getProduct(slug);

  if (!study && !product) notFound();

  const entry = study ?? product!;

  return (
    <article>
      <header className="page-shell pb-12 sm:pb-16">
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-sm font-bold text-muted-foreground hover:text-foreground"
        >
          <span aria-hidden>←</span> Back to work
        </Link>
        <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="eyebrow">
              {study ? `${study.metadata.client} · Case study` : "Lone Dream Studio"}
            </p>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight tracking-[-0.04em] sm:text-6xl">
              {entry.metadata.title}
            </h1>
            <p className="lede mt-6 max-w-2xl">{entry.metadata.summary}</p>
            {study ? (
              <div className="mt-8 flex flex-wrap gap-2">
                {study.metadata.services.map((service) => (
                  <span key={service} className="tag">
                    {service}
                  </span>
                ))}
              </div>
            ) : (
              <div className="mt-8 flex flex-wrap gap-3">
                {product?.metadata.productUrl && (
                  <a
                    className="button-primary"
                    href={product.metadata.productUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Visit product <span aria-hidden>↗</span>
                  </a>
                )}
                {product?.metadata.sourceUrl && (
                  <a
                    className="button-secondary"
                    href={product.metadata.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View source <span aria-hidden>↗</span>
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="surface relative flex aspect-[4/3] items-center justify-center overflow-hidden bg-muted p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.26),transparent_60%)]" />
            <Image
              src={entry.metadata.coverImage}
              alt=""
              fill={!study}
              width={study ? 220 : undefined}
              height={study ? 220 : undefined}
              sizes="(min-width: 1024px) 40vw, 90vw"
              className={
                study
                  ? "relative max-h-44 w-auto max-w-[70%] object-contain"
                  : "object-cover"
              }
            />
          </div>
        </div>
      </header>

      {study && (
        <section className="container max-w-7xl pb-4">
          <div className="grid gap-px overflow-hidden rounded-[2rem] border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {study.metadata.outcomes.map((outcome) => (
              <p
                key={outcome}
                className="bg-card p-6 font-display text-lg font-bold sm:p-7"
              >
                {outcome}
              </p>
            ))}
          </div>
        </section>
      )}

      <section className="container max-w-7xl pb-20 pt-12 sm:pb-28 sm:pt-16">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_0.65fr]">
          <aside>
            <p className="eyebrow">Details</p>
            <dl className="mt-5 grid gap-5 text-sm">
              {study ? (
                <>
                  <div>
                    <dt className="text-muted-foreground">Role</dt>
                    <dd className="mt-1 font-bold">{study.metadata.role}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Timeline</dt>
                    <dd className="mt-1 font-bold">{study.metadata.year}</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Technology</dt>
                    <dd className="mt-2 flex flex-wrap gap-2">
                      {study.metadata.technologies.map((technology) => (
                        <span key={technology} className="tag">
                          {technology}
                        </span>
                      ))}
                    </dd>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <dt className="text-muted-foreground">Status</dt>
                    <dd className="mt-1 font-bold capitalize">
                      {product?.metadata.status}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Platforms</dt>
                    <dd className="mt-1 font-bold">
                      {product?.metadata.platforms.join(", ")}
                    </dd>
                  </div>
                </>
              )}
            </dl>
          </aside>
          <div className="prose prose-lg max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary">
            <MDXContent source={entry.content} />
          </div>
        </div>
      </section>
    </article>
  );
}
