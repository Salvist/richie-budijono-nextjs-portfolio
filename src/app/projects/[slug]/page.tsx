import MDXContent from "@/components/mdx_component";
import {
  DEFAULT_PRODUCT_COVER_IMAGE,
  getProduct,
  getProducts,
} from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export async function generateStaticParams() {
  const projects = await getProducts();
  return projects.map(({ metadata }) => ({ slug: metadata.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProduct(slug);
  if (!project) return {};

  const { title, summary } = project.metadata;
  const coverImage =
    project.metadata.coverImage ?? DEFAULT_PRODUCT_COVER_IMAGE;

  return {
    title,
    description: summary,
    alternates: { canonical: `/projects/${slug}` },
    openGraph: {
      type: "website",
      url: `/projects/${slug}`,
      title,
      description: summary,
      images: [{ url: coverImage, alt: `${title} project preview` }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: summary,
      images: [coverImage],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProduct(slug);
  if (!project) notFound();

  const { metadata, content } = project;
  const coverImage = metadata.coverImage ?? DEFAULT_PRODUCT_COVER_IMAGE;
  const isAnimatedCover = /\.gif(?:$|\?)/i.test(coverImage);
  const actionLinks: { label: string; href: string }[] = [];

  if (
    metadata.productUrl &&
    !metadata.storeLinks.some(({ href }) => href === metadata.productUrl)
  ) {
    actionLinks.push({
      label: `Visit ${metadata.title}`,
      href: metadata.productUrl,
    });
  }

  if (
    metadata.sourceUrl &&
    !actionLinks.some(({ href }) => href === metadata.sourceUrl)
  ) {
    actionLinks.push({
      label: "View source code",
      href: metadata.sourceUrl,
    });
  }

  return (
    <article className="page-shell">
      <Link
        href="/insights#projects"
        className="mx-auto flex w-full max-w-3xl items-center gap-2 text-sm font-bold text-muted-foreground transition-colors hover:text-foreground"
      >
        <span aria-hidden>←</span> Back to project showcase
      </Link>

      <header className="mx-auto mt-10 grid w-full max-w-3xl gap-10">
        <div className="surface relative mx-auto aspect-video w-full max-w-3xl overflow-hidden bg-muted">
          <Image
            src={coverImage}
            alt=""
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="scale-110 object-cover opacity-20 blur-2xl"
            unoptimized={isAnimatedCover}
          />
          <Image
            src={coverImage}
            alt={`${metadata.title} project preview`}
            fill
            priority
            sizes="(min-width: 1024px) 42vw, 100vw"
            className="object-contain p-8 sm:p-12"
            unoptimized={isAnimatedCover}
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10" />
        </div>

        <div>
          <h1 className="font-display text-5xl font-bold leading-[0.96] tracking-[-0.05em] sm:text-7xl">
            {metadata.title}
          </h1>
          <p className="lede mt-7 max-w-2xl">{metadata.summary}</p>

          {metadata.storeLinks.length > 0 && (
            <div
              className="mt-9 flex flex-wrap items-center gap-3"
              aria-label="Download the app"
            >
              {metadata.storeLinks.map((link) => {
                const isAppStore = link.platform === "iOS";

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="transition-opacity hover:opacity-80"
                  >
                    <Image
                      src={
                        isAppStore
                          ? "/images/download_on_app_store.svg"
                          : "/images/get_it_on_google_play.png"
                      }
                      alt={link.label}
                      width={isAppStore ? 120 : 135}
                      height={40}
                      className="h-10 w-auto"
                    />
                  </a>
                );
              })}
            </div>
          )}

          {actionLinks.length > 0 && (
            <div
              className={`flex flex-wrap gap-3 ${
                metadata.storeLinks.length > 0 ? "mt-4" : "mt-9"
              }`}
            >
              {actionLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className={
                    index === 0 ? "button-primary" : "button-secondary"
                  }
                >
                  {link.label} <span aria-hidden>↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      <div className="prose prose-lg mx-auto mt-20 max-w-3xl dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-2xl sm:mt-28">
        <MDXContent source={content} />
      </div>
    </article>
  );
}
