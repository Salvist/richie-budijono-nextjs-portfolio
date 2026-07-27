import {
  CaseStudyCard,
  ProductCard,
} from "@/components/content_cards";
import { getCaseStudies, getProducts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Selected product engineering work and independent products by Richie Budijono.",
  alternates: { canonical: "/work" },
};

export default async function WorkPage() {
  const [caseStudies, products] = await Promise.all([
    getCaseStudies(),
    getProducts(),
  ]);

  return (
    <>
      <section className="page-shell pb-14 sm:pb-16">
        <p className="eyebrow">Selected work</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="display-title">Products that made it past the mockup.</h1>
          <p className="lede max-w-xl lg:justify-self-end">
            Professional work measured by adoption, delivery, and operational
            impact—plus independent products from Lone Dream Studio.
          </p>
        </div>
      </section>

      <section className="container max-w-7xl pb-20 sm:pb-28">
        <div className="grid gap-8">
          {caseStudies.map(({ metadata }) => (
            <CaseStudyCard key={metadata.slug} study={metadata} />
          ))}
        </div>
      </section>

      <section className="border-y border-border bg-foreground text-background">
        <div className="page-shell">
          <div className="grid gap-7 md:grid-cols-[1fr_0.8fr] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-secondary">
                Lone Dream Studio
              </p>
              <h2 className="section-title mt-4">Products and experiments.</h2>
            </div>
            <p className="leading-7 text-background/70 md:justify-self-end">
              The product lab is where I test ideas, explore new technology, and
              experience the full journey from concept to release.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {products.map(({ metadata }) => (
              <ProductCard key={metadata.slug} product={metadata} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
