import { InsightCard, ProductCard } from "@/components/content_cards";
import { getInsights, getProducts } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore shipped products, technical experiments, and practical field notes about building useful software.",
  alternates: { canonical: "/insights" },
};

export default async function InsightsPage() {
  const [projects, insights] = await Promise.all([
    getProducts(),
    getInsights(),
  ]);

  return (
    <div className="page-shell">
      <section aria-labelledby="insights-heading">
        <p className="eyebrow">Insights</p>
        <div className="mt-5 grid grid-cols-1 gap-8">
          <h1 id="insights-heading" className="display-title">
            Notes from building the real thing.
          </h1>
          <p className="lede max-w-xl">
            A look at the products I have shipped and the practical lessons
            behind building useful software.
          </p>
        </div>
      </section>

      <section
        id="projects"
        className="scroll-mt-28 pt-20 sm:pt-28"
        aria-labelledby="projects-heading"
      >
        <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
          <div>
            <p className="eyebrow">Project showcase</p>
            <h2 id="projects-heading" className="section-title mt-4">
              Products, experiments, and shipped ideas.
            </h2>
          </div>
          <p className="lede max-w-2xl lg:justify-self-end">
            Mobile apps, web products, and technical experiments spanning
            focused consumer tools, AI workflows, and everyday utility.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map(({ metadata }) => (
            <ProductCard key={metadata.slug} product={metadata} />
          ))}
        </div>
      </section>

      <section
        id="field-notes"
        className="scroll-mt-28 pt-20 sm:pt-28"
        aria-labelledby="field-notes-heading"
      >
        <div className="max-w-2xl">
          <p className="eyebrow">Field notes</p>
          <h2 id="field-notes-heading" className="section-title mt-4">
            What shipping teaches.
          </h2>
          <p className="lede mt-6">
            Practical lessons about product engineering, decisions, mistakes,
            and the systems behind dependable software.
          </p>
        </div>

        <div className="surface mt-10 p-7 sm:p-10 lg:p-12">
          {insights.length ? (
            insights.map(({ metadata }) => (
              <InsightCard key={metadata.slug} insight={metadata} />
            ))
          ) : (
            <p className="text-muted-foreground">
              New field notes are in progress.
            </p>
          )}
        </div>
      </section>
    </div>
  );
}
