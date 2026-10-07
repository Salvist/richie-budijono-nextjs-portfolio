import { getInsights } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Writing", description: "Notes by Richie Budijono on building software and learning along the way.",
  alternates: { canonical: "/insights" },
};
export default async function WritingPage() {
  const insights = await getInsights();
  return <div className="page-shell"><div className="reading-column">
    <h1 className="display-title">Writing</h1>
    <p className="lede mt-5">Notes on building software and learning along the way.</p>
    <section id="field-notes" className="mt-10" aria-label="Articles">
      {insights.map(({ metadata }) => <article key={metadata.slug} className="border-t border-border py-7">
        <time className="text-sm text-muted-foreground" dateTime={metadata.publishedAt}>{formatDate(metadata.publishedAt)}</time>
        <h2 className="mt-3 text-2xl font-semibold"><Link href={`/insights/${metadata.slug}`} className="hover:text-primary">{metadata.title}</Link></h2>
        <p className="mt-3 leading-7 text-muted-foreground">{metadata.summary}</p>
      </article>)}
    </section>
    <p id="projects" className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">Looking for my apps and other work? <Link href="/projects" className="text-link">Browse projects</Link>.</p>
  </div></div>;
}

