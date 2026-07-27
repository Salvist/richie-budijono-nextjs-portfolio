import { describe, expect, it } from "vitest";
import { getCaseStudies, getInsights, getProducts } from "./content";

describe("validated content collections", () => {
  it("loads professional case studies with required outcomes", async () => {
    const studies = await getCaseStudies();

    expect(studies).toHaveLength(2);
    expect(studies.every(({ metadata }) => metadata.outcomes.length > 0)).toBe(
      true,
    );
  });

  it("loads Lone Dream Studio products with distinct product metadata", async () => {
    const products = await getProducts();

    expect(products.length).toBeGreaterThanOrEqual(5);
    expect(products[0].metadata.status).toBe("active");
    expect(products.every(({ metadata }) => metadata.platforms.length > 0)).toBe(
      true,
    );
  });

  it("sorts insights by most recent publish date", async () => {
    const insights = await getInsights();
    const timestamps = insights.map(({ metadata }) =>
      new Date(metadata.publishedAt).getTime(),
    );

    expect(timestamps).toEqual([...timestamps].sort((a, b) => b - a));
  });
});
