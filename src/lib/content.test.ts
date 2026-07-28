import { describe, expect, it } from "vitest";
import {
  getCaseStudies,
  getInsights,
  getLegalDocument,
  getLegalDocuments,
  getProducts,
  getStudioProducts,
  legalDocumentMetadataSchema,
  productMetadataSchema,
} from "./content";

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

    expect(products.length).toBeGreaterThanOrEqual(8);
    expect(products[0].metadata.status).toBe("active");
    expect(products.every(({ metadata }) => metadata.platforms.length > 0)).toBe(
      true,
    );
  });

  it("orders featured Studio products explicitly", async () => {
    const products = await getStudioProducts("featured");

    expect(products.map(({ metadata }) => metadata.title)).toEqual([
      "Daily Manna",
      "TrackU",
      "Church Notes",
    ]);
    expect(
      products.every(
        ({ metadata }) =>
          metadata.highlights.length === 3 &&
          metadata.showcaseImages.length >= 2 &&
          metadata.storeLinks.length >= 1,
      ),
    ).toBe(true);
  });

  it("keeps available earlier releases separate from featured products", async () => {
    const products = await getStudioProducts("earlier");

    expect(products.map(({ metadata }) => metadata.title)).toEqual(["Unsaid"]);
    expect(products[0].metadata.status).toBe("active");
  });

  it("only accepts HTTPS destinations for Studio store links", () => {
    const result = productMetadataSchema.safeParse({
      title: "Test product",
      summary: "A test product.",
      status: "active",
      platforms: ["Android"],
      technologies: ["Flutter"],
      coverImage: "/test.png",
      studioPlacement: "earlier",
      studioOrder: 1,
      benefit: "A useful test benefit.",
      storeLinks: [
        {
          platform: "Android",
          label: "Get it on Google Play",
          href: "http://example.com/store",
        },
      ],
      slug: "test-product",
    });

    expect(result.success).toBe(false);
  });

  it("sorts insights by most recent publish date", async () => {
    const insights = await getInsights();
    const timestamps = insights.map(({ metadata }) =>
      new Date(metadata.publishedAt).getTime(),
    );

    expect(timestamps).toEqual([...timestamps].sort((a, b) => b - a));
  });

  it("loads the shared Lone Dream Studio privacy policy", async () => {
    const documents = await getLegalDocuments();
    const policy = await getLegalDocument("privacy-policy");

    expect(documents).toHaveLength(1);
    expect(policy?.metadata).toEqual({
      title: "Privacy Policy",
      description:
        "Learn how Lone Dream Studio applications collect, use, retain, and protect information.",
      effectiveDate: "2026-07-28",
      slug: "privacy-policy",
    });
    expect(policy?.content).toContain(
      "published by Lone Dream Studio (collectively, the \"Applications\")",
    );
    expect(policy?.content).not.toContain("Daily Manna");
    expect(policy?.content).not.toContain("Accessibility Service");
    expect(policy?.content).not.toContain("Bible");
  });

  it("requires complete legal document metadata", () => {
    const result = legalDocumentMetadataSchema.safeParse({
      title: "Privacy Policy",
      description: "",
      effectiveDate: "2026-07-28",
      slug: "privacy-policy",
    });

    expect(result.success).toBe(false);
  });
});
