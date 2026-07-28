import { describe, expect, it } from "vitest";
import {
  getCaseStudies,
  getInsights,
  getLegalDocument,
  getLegalDocuments,
  getProduct,
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

  it("orders projects by status and then title", async () => {
    const products = await getProducts();

    expect(
      products.map(({ metadata }) => [
        metadata.status,
        metadata.title,
      ]),
    ).toEqual([
      ["active", "Church Notes"],
      ["active", "Daily Manna"],
      ["active", "TrackU"],
      ["active", "Unsaid"],
      ["experiment", "Doer"],
      ["experiment", "Expense Archive"],
      ["experiment", "Snap AI Web App"],
      ["archived", "Snap AI"],
    ]);
  });

  it("loads project detail content by slug", async () => {
    const project = await getProduct("tracku");

    expect(project?.metadata.title).toBe("TrackU");
    expect(project?.content).toContain("everyday financial records");
    await expect(getProduct("missing-project")).resolves.toBeNull();
  });

  it("keeps project detail content structurally consistent", async () => {
    const products = await getProducts();

    expect(
      products.every(
        ({ content }) =>
          content.includes("## Product capabilities") &&
          content.includes("## Tech stack"),
      ),
    ).toBe(true);
  });

  it("uses storeLinks instead of productUrl for app-store destinations", async () => {
    const products = await getProducts();

    expect(
      products.every(({ metadata }) => {
        if (!metadata.productUrl) return true;
        const hostname = new URL(metadata.productUrl).hostname;
        return !["apps.apple.com", "play.google.com"].includes(hostname);
      }),
    ).toBe(true);
  });

  it("orders featured Studio products explicitly", async () => {
    const products = await getStudioProducts("featured");

    expect(products.map(({ metadata }) => metadata.title)).toEqual([
      "TrackU",
      "Church Notes",
    ]);
    expect(
      products.every(
        ({ metadata }) => metadata.storeLinks.length >= 1,
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

  it("allows project metadata without a cover image", () => {
    const result = productMetadataSchema.safeParse({
      title: "Project without artwork",
      summary: "A project that uses the shared fallback artwork.",
      status: "experiment",
      platforms: ["Web"],
      technologies: ["TypeScript"],
      studioPlacement: "hidden",
      slug: "project-without-artwork",
    });

    expect(result.success).toBe(true);
    if (result.success) {
      expect(result.data.coverImage).toBeUndefined();
    }
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
