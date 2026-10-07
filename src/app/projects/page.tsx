import type { Metadata } from "next";
import { getPortfolio } from "@/lib/portfolio";
import { PortfolioRow } from "@/components/portfolio";
export const metadata: Metadata = {
  title: "Projects", description: "Apps, professional work, and experiments by Richie Budijono.",
  alternates: { canonical: "/projects" },
};
export default async function ProjectsPage() {
  const portfolio = await getPortfolio();
  return <div className="page-shell">
    <header className="mb-10 max-w-[720px]">
      <h1 className="display-title">Projects</h1>
      <p className="lede mt-5">Independent products, work with teams, and ideas explored through code.</p>
    </header>
    <section aria-label="Products and professional work">
      {portfolio.filter((item) => !item.archived).map((item) => <PortfolioRow item={item} key={item.slug} />)}
    </section>
    <section className="mt-14" aria-labelledby="archive-heading">
      <h2 id="archive-heading" className="section-title">Experiments & archive</h2>
      <p className="mt-3 text-muted-foreground">Earlier projects and explorations. Some are no longer maintained.</p>
      {portfolio.filter((item) => item.archived).map((item) => <PortfolioRow item={item} key={item.slug} />)}
    </section>
  </div>;
}

