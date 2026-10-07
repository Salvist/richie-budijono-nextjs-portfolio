import { describe, expect, it } from "vitest";
import { getPortfolio, getSelectedPortfolio } from "./portfolio";
import { getCaseStudy, getProducts, getStudioProducts } from "./content";
import sitemap from "../app/sitemap";
import nextConfig from "../../next.config.mjs";

describe("portfolio navigation and content", () => {
  it("mixes personal products and professional work in the approved order without duplicates", async () => {
    const items = await getPortfolio();
    expect(items.slice(0, 4).map((p) => [p.title, p.href])).toEqual([
      ["Daily Manna", "/projects/daily-manna"],
      ["BLAST", "/work/blast-learning-platform"],
      ["TrackU", "/projects/tracku"],
      ["Y Lift", "/work/ylift-commerce-platform"],
    ]);
    expect(new Set(items.map((p) => p.href)).size).toBe(items.length);
    expect(items.filter((p) => p.archived).map((p) => p.title)).toEqual(["Doer", "Expense Archive", "Snap AI", "Snap AI Web App"]);
    const firstArchived = items.findIndex((p) => p.archived);
    expect(items.slice(firstArchived).every((p) => p.archived)).toBe(true);
  });
  it("selects the homepage independently of Studio placement", async () => {
    expect((await getSelectedPortfolio()).map((p) => p.title)).toEqual(["Daily Manna", "BLAST", "TrackU"]);
    expect((await getStudioProducts("featured")).map((p) => p.metadata.title)).toEqual(["TrackU", "Church Notes"]);
  });
  it("resolves real case studies and returns null for unknown slugs", async () => {
    const blast = await getCaseStudy("blast-learning-platform");
    expect(blast?.content).toContain("## My role");
    expect(blast?.metadata.outcomes).toContain("8,000+ students supported");
    expect((await getCaseStudy("ylift-commerce-platform"))?.metadata.year).toBe("Oct 2024–Jan 2026");
    await expect(getCaseStudy("missing-study")).resolves.toBeNull();
  });
  it("allows existing products to omit optional contribution text", async () => {
    const products = await getProducts();
    expect(products.find((p) => p.metadata.slug === "daily-manna")?.metadata.contribution).toBeTruthy();
    expect(products.find((p) => p.metadata.slug === "expense_archive")?.metadata.contribution).toBeUndefined();
  });
  it("indexes canonical portfolio routes and keeps retired routes out of the sitemap", async () => {
    const paths = (await sitemap()).map((entry) => new URL(entry.url).pathname);
    expect(paths).toContain("/projects");
    expect(paths).toContain("/work/blast-learning-platform");
    expect(paths).toContain("/work/ylift-commerce-platform");
    expect(paths).toContain("/studio/privacy-policy");
    expect(paths).not.toContain("/services");
    expect(paths).not.toContain("/start-a-project");
  });
  it("preserves old links with permanent redirects to useful destinations", async () => {
    const redirects = await nextConfig.redirects();
    expect(redirects).toEqual(expect.arrayContaining([
      { source: "/services", destination: "/projects", permanent: true },
      { source: "/start-a-project", destination: "/about#contact", permanent: true },
      { source: "/posts/:slug", destination: "/insights/:slug", permanent: true },
    ]));
  });
}
);

