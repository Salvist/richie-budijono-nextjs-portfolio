import { getStudioProducts, type ProductMetadata } from "@/lib/content";
import type { Metadata } from "next";
import Image from "next/image";
import styles from "./studio.module.css";

export const metadata: Metadata = {
  title: "Lone Dream Studio",
  description:
    "Lone Dream Studio designs, builds, and publishes focused apps for reading, reflection, and everyday life.",
  alternates: { canonical: "/studio" },
  openGraph: {
    type: "website",
    url: "/studio",
    title: "Lone Dream Studio — Ideas into products",
    description:
      "An independent app studio building focused products for reading, reflection, and everyday life.",
    images: [
      {
        url: "/images/studio/lone-dream-studio-og.png",
        width: 1536,
        height: 1024,
        alt: "Lone Dream Studio — Ideas into products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Lone Dream Studio — Ideas into products",
    description:
      "An independent app studio building focused products for reading, reflection, and everyday life.",
    images: ["/images/studio/lone-dream-studio-og.png"],
  },
};

const principles = [
  {
    number: "01",
    title: "Notice",
    copy: "Start with a real friction point—something worth making clearer, calmer, or easier.",
  },
  {
    number: "02",
    title: "Build",
    copy: "Shape the smallest focused product that can solve the problem well.",
  },
  {
    number: "03",
    title: "Release",
    copy: "Put it in people’s hands, learn from real use, and keep improving the useful parts.",
  },
] as const;

const storeBadges = {
  iOS: {
    src: "/images/download_on_app_store.svg",
    width: 120,
    height: 40,
  },
  Android: {
    src: "/images/get_it_on_google_play.png",
    width: 270,
    height: 80,
  },
} as const;

function StoreButton({
  link,
}: {
  link: ProductMetadata["storeLinks"][number];
}) {
  const badge = storeBadges[link.platform];

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noreferrer"
      className={styles.storeButton}
      aria-label={`${link.label} (opens in a new tab)`}
    >
      <Image
        src={badge.src}
        alt=""
        width={badge.width}
        height={badge.height}
        className={styles.storeBadge}
        unoptimized
      />
    </a>
  );
}

function ProductVisual({ product }: { product: ProductMetadata }) {
  return (
    <div className={styles.productVisual}>
      <div className={styles.visualGlow} aria-hidden="true" />
      <div className={styles.visualOrbit} aria-hidden="true" />
      <div className={styles.screenStack}>
        {product.showcaseImages.slice(0, 3).map((image, index) => (
          <div
            key={image.src}
            className={styles.screen}
            data-position={index}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              sizes="(min-width: 1024px) 23vw, (min-width: 640px) 32vw, 56vw"
              className={styles.screenImage}
            />
          </div>
        ))}
      </div>
      <div className={styles.floatingIcon}>
        <Image
          src={product.coverImage}
          alt={`${product.title} app icon`}
          width={112}
          height={112}
          loading="eager"
          className={styles.appIconImage}
        />
      </div>
    </div>
  );
}

function ProductShowcase({
  product,
  index,
}: {
  product: ProductMetadata;
  index: number;
}) {
  const websiteUrl =
    product.productUrl &&
    !["apps.apple.com", "play.google.com"].includes(
      new URL(product.productUrl).hostname,
    )
      ? product.productUrl
      : undefined;

  return (
    <article
      className={`${styles.showcase} ${index % 2 === 1 ? styles.reverse : ""}`}
      data-accent={product.accent}
    >
      <ProductVisual product={product} />

      <div className={styles.productCopy}>
        <div className={styles.productMeta}>
          <span>0{index + 1}</span>
          <span className={styles.metaLine} aria-hidden="true" />
          <span>Available now</span>
        </div>

        <div className={styles.productIdentity}>
          <Image
            src={product.coverImage}
            alt=""
            width={72}
            height={72}
            className={styles.productIcon}
          />
          <div>
            <h2>{product.title}</h2>
          </div>
        </div>

        <p className={styles.benefit}>{product.benefit}</p>
        <p className={styles.summary}>{product.summary}</p>

        <ol className={styles.highlights}>
          {product.highlights.map((highlight, highlightIndex) => (
            <li key={highlight}>
              <span aria-hidden="true">0{highlightIndex + 1}</span>
              <p>{highlight}</p>
            </li>
          ))}
        </ol>

        <div className={styles.productLinks}>
          {websiteUrl && (
            <a
              href={websiteUrl}
              target="_blank"
              rel="noreferrer"
              className={styles.websiteLink}
              aria-label={`Visit ${product.title} website (opens in a new tab)`}
            >
              {new URL(websiteUrl).hostname.replace(/^www\./, "")}
              <span aria-hidden="true">↗</span>
            </a>
          )}

          <div className={styles.storeLinks}>
            {product.storeLinks.map((link) => (
              <StoreButton key={link.href} link={link} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function StudioPage() {
  const [featuredProducts, earlierProducts] = await Promise.all([
    getStudioProducts("featured"),
    getStudioProducts("earlier"),
  ]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "#lone-dream-studio",
        name: "Lone Dream Studio",
        description:
          "An independent app studio that designs, builds, and publishes focused consumer software.",
        founder: {
          "@type": "Person",
          name: "Richie Budijono",
        },
      },
      ...[...featuredProducts, ...earlierProducts].map(({ metadata }) => ({
        "@type": "SoftwareApplication",
        name: metadata.title,
        description: metadata.summary,
        operatingSystem: metadata.platforms.join(", "),
        url: metadata.storeLinks[0]?.href,
        author: { "@id": "#lone-dream-studio" },
      })),
    ],
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero} aria-labelledby="studio-heading">
        <div className={styles.stars} aria-hidden="true" />
        <div className={styles.heroGlow} aria-hidden="true" />
        <div className={styles.heroOrbit} aria-hidden="true" />

        <div className={`container max-w-7xl ${styles.heroInner}`}>
          <div
            className={styles.brandLockup}
            aria-label="Lone Dream Studio"
          >
            <p className={styles.brandName} aria-hidden="true">
              <span>Lone</span>
              <span>Dream</span>
            </p>
            <p className={styles.brandStudio} aria-hidden="true">
              Studio
            </p>
          </div>

          <p className={styles.eyebrow}>Independent app studio</p>
          <h1 id="studio-heading" className={styles.heroTitle}>
            Ideas into
            <span> products.</span>
          </h1>
          <p className={styles.heroCopy}>
            Lone Dream Studio designs, builds, and publishes focused apps for
            the moments that shape everyday life—from reading and reflection to
            understanding your money.
          </p>

          <div className={styles.heroFoot}>
            <p>New York · Est. 2026</p>
            <span aria-hidden="true" />
            <p>Four public releases</p>
          </div>
        </div>
      </section>

      <section className={styles.manifesto} aria-labelledby="manifesto-heading">
        <div className={`container max-w-7xl ${styles.manifestoInner}`}>
          <div className={styles.manifestoIntro}>
            <p className={styles.sectionLabel}>How the studio works</p>
            <h2 id="manifesto-heading">
              A small studio built around the discipline of shipping.
            </h2>
            <p>
              The work begins with curiosity, but it becomes meaningful when a
              focused idea reaches real people.
            </p>
          </div>

          <ol className={styles.principles}>
            {principles.map((principle) => (
              <li key={principle.number}>
                <span>{principle.number}</span>
                <h3>{principle.title}</h3>
                <p>{principle.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        id="products"
        className={styles.products}
        aria-labelledby="products-heading"
      >
        <div className={`container max-w-7xl ${styles.productsHeader}`}>
          <p className={styles.sectionLabel}>Published by the studio</p>
          <h2 id="products-heading">Products made to be used.</h2>
        </div>

        <div className={`container max-w-7xl ${styles.showcaseList}`}>
          {featuredProducts.map(({ metadata }, index) => (
            <ProductShowcase
              key={metadata.slug}
              product={metadata}
              index={index}
            />
          ))}
        </div>
      </section>

      {earlierProducts.length > 0 && (
        <section
          className={styles.earlier}
          aria-labelledby="earlier-heading"
        >
          <div className={`container max-w-7xl ${styles.earlierInner}`}>
            <div>
              <p className={styles.sectionLabel}>Earlier release</p>
              <h2 id="earlier-heading">Still out in the world.</h2>
            </div>

            <div className={styles.earlierList}>
              {earlierProducts.map(({ metadata }) => (
                <article
                  key={metadata.slug}
                  className={styles.earlierCard}
                  data-accent={metadata.accent}
                >
                  <Image
                    src={metadata.coverImage}
                    alt={`${metadata.title} app icon`}
                    width={96}
                    height={96}
                    className={styles.earlierIcon}
                  />
                  <div className={styles.earlierCopy}>
                    <div className={styles.availableBadge}>
                      <span aria-hidden="true" />
                      Available
                    </div>
                    <h3>{metadata.title}</h3>
                    <p>{metadata.benefit}</p>
                  </div>
                  <div className={styles.earlierLinks}>
                    {metadata.storeLinks.map((link) => (
                      <StoreButton key={link.href} link={link} />
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
