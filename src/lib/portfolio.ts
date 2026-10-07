import { getCaseStudies, getProducts, DEFAULT_PRODUCT_COVER_IMAGE } from "./content";

export type PortfolioItem = {
  slug: string;
  kind: "product" | "case-study";
  title: string;
  summary: string;
  contribution?: string;
  href: string;
  coverImage: string;
  technologies: string[];
  outcomes: string[];
  archived: boolean;
};
export const selectedPortfolioSlugs = ["daily-manna", "blast-learning-platform", "tracku"] as const;
const portfolioOrder: readonly string[] = [...selectedPortfolioSlugs, "ylift-commerce-platform"];

export async function getPortfolio(): Promise<PortfolioItem[]> {
  const [products, studies] = await Promise.all([getProducts(), getCaseStudies()]);
  const items: PortfolioItem[] = [
    ...products.map(({ metadata: p }) => ({
      slug: p.slug, kind: "product" as const, title: p.title, summary: p.summary,
      contribution: p.contribution, href: `/projects/${p.slug}`,
      coverImage: p.coverImage ?? DEFAULT_PRODUCT_COVER_IMAGE,
      technologies: p.technologies, outcomes: [],
      archived: p.status === "experiment" || p.status === "archived",
    })),
    ...studies.map(({ metadata: s }) => ({
      slug: s.slug, kind: "case-study" as const, title: s.client, summary: s.summary,
      contribution: s.role, href: `/work/${s.slug}`, coverImage: s.coverImage,
      technologies: s.technologies, outcomes: s.outcomes, archived: false,
    })),
  ];
  const rank = (slug: string) => {
    const index = portfolioOrder.indexOf(slug);
    return index < 0 ? portfolioOrder.length : index;
  };
  return items.sort((a, b) => Number(a.archived) - Number(b.archived) ||
    rank(a.slug) - rank(b.slug) || a.title.localeCompare(b.title));
}

export async function getSelectedPortfolio() {
  const items = await getPortfolio();
  return selectedPortfolioSlugs.map((slug) => {
    const item = items.find((entry) => entry.slug === slug);
    if (!item) throw new Error(`Selected portfolio entry not found: ${slug}`);
    return item;
  });
}

