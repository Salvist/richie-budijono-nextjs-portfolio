import { InsightCard } from "@/components/content_cards";
import { getInsights } from "@/lib/content";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical field notes about product engineering, technical decisions, and lessons from shipping software.",
  alternates: { canonical: "/insights" },
};

export default async function InsightsPage() {
  const insights = await getInsights();

  return (
    <section className="page-shell">
      <p className="eyebrow">Insights</p>
      <div className="mt-5 grid grid-cols-1 gap-8">
        <h1 className="display-title">Notes from building the real thing.</h1>
        <p className="lede max-w-xl">
          Practical lessons about product engineering, decisions, mistakes, and
          the systems behind useful software.
        </p>
      </div>
      <div className="surface mt-14 p-7 sm:p-10 lg:p-12">
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
  );
}
