import fs from "node:fs/promises";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const requiredText = z.string().trim().min(1);

export const caseStudyMetadataSchema = z.object({
  title: requiredText,
  summary: requiredText,
  client: requiredText,
  role: requiredText,
  year: requiredText,
  services: z.array(requiredText).min(1),
  technologies: z.array(requiredText).min(1),
  outcomes: z.array(requiredText).min(1),
  featured: z.boolean(),
  coverImage: requiredText,
  slug: requiredText,
});

const httpsUrl = z
  .string()
  .url()
  .refine((value) => new URL(value).protocol === "https:", {
    message: "Store links must use HTTPS.",
  });

const storeLinkSchema = z.object({
  platform: z.enum(["iOS", "Android"]),
  label: requiredText,
  href: httpsUrl,
});

const showcaseImageSchema = z.object({
  src: requiredText,
  alt: requiredText,
});

export const productMetadataSchema = z
  .object({
    title: requiredText,
    summary: requiredText,
    status: z.enum(["active", "shipped", "experiment", "archived"]),
    platforms: z.array(requiredText).min(1),
    technologies: z.array(requiredText).min(1),
    productUrl: z.string().url().optional(),
    sourceUrl: z.string().url().optional(),
    coverImage: requiredText,
    studioPlacement: z
      .enum(["featured", "earlier", "hidden"])
      .default("hidden"),
    studioOrder: z.number().int().nonnegative().default(999),
    benefit: requiredText.optional(),
    highlights: z.array(requiredText).default([]),
    storeLinks: z.array(storeLinkSchema).default([]),
    showcaseImages: z.array(showcaseImageSchema).default([]),
    accent: z
      .enum(["manna", "tracku", "church", "unsaid", "neutral"])
      .default("neutral"),
    slug: requiredText,
  })
  .superRefine((product, context) => {
    if (product.studioPlacement === "hidden") return;

    if (!product.benefit) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["benefit"],
        message: "Studio products require a benefit.",
      });
    }

    if (product.storeLinks.length === 0) {
      context.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["storeLinks"],
        message: "Studio products require at least one store link.",
      });
    }

    if (product.studioPlacement === "featured") {
      if (product.highlights.length !== 3) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["highlights"],
          message: "Featured Studio products require exactly three highlights.",
        });
      }

      if (product.showcaseImages.length < 2) {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["showcaseImages"],
          message: "Featured Studio products require at least two images.",
        });
      }

      if (product.accent === "neutral") {
        context.addIssue({
          code: z.ZodIssueCode.custom,
          path: ["accent"],
          message: "Featured Studio products require a named accent.",
        });
      }
    }
  });

export const insightMetadataSchema = z.object({
  title: requiredText,
  summary: requiredText,
  publishedAt: requiredText,
  updatedAt: requiredText.optional(),
  topics: z.array(requiredText).min(1),
  coverImage: requiredText,
  slug: requiredText,
});

export type CaseStudyMetadata = z.infer<typeof caseStudyMetadataSchema>;
export type ProductMetadata = z.infer<typeof productMetadataSchema>;
export type InsightMetadata = z.infer<typeof insightMetadataSchema>;

export type ContentEntry<T> = {
  metadata: T;
  content: string;
};

const contentRoot = path.join(process.cwd(), "src", "content");

async function readCollection<TSchema extends z.ZodTypeAny>(
  directory: string,
  schema: TSchema,
): Promise<ContentEntry<z.output<TSchema>>[]> {
  const directoryPath = path.join(contentRoot, directory);
  const files = (await fs.readdir(directoryPath)).filter((file) =>
    file.endsWith(".mdx"),
  );

  return Promise.all(
    files.map(async (file) => {
      const filePath = path.join(directoryPath, file);
      const raw = await fs.readFile(filePath, "utf8");
      const { data, content } = matter(raw);

      try {
        const metadata = schema.parse({
          ...data,
          slug: file.replace(/\.mdx$/, ""),
        });
        return { metadata, content };
      } catch (error) {
        if (error instanceof z.ZodError) {
          throw new Error(
            `Invalid frontmatter in ${filePath}: ${error.issues
              .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
              .join("; ")}`,
          );
        }
        throw error;
      }
    }),
  );
}

export async function getCaseStudies(): Promise<
  ContentEntry<CaseStudyMetadata>[]
> {
  const studies = await readCollection("work", caseStudyMetadataSchema);
  return studies.sort(
    (a, b) => Number(b.metadata.featured) - Number(a.metadata.featured),
  );
}

export async function getProducts(): Promise<ContentEntry<ProductMetadata>[]> {
  const products = await readCollection("projects", productMetadataSchema);
  return products.sort((a, b) => {
    const rank = { active: 0, shipped: 1, experiment: 2, archived: 3 };
    return rank[a.metadata.status] - rank[b.metadata.status];
  });
}

export async function getStudioProducts(
  placement?: "featured" | "earlier",
): Promise<ContentEntry<ProductMetadata>[]> {
  const products = await getProducts();

  return products
    .filter(({ metadata }) =>
      placement
        ? metadata.studioPlacement === placement
        : metadata.studioPlacement !== "hidden",
    )
    .sort((a, b) => a.metadata.studioOrder - b.metadata.studioOrder);
}

export async function getInsights(): Promise<
  ContentEntry<InsightMetadata>[]
> {
  const insights = await readCollection("posts", insightMetadataSchema);
  return insights.sort(
    (a, b) =>
      new Date(b.metadata.publishedAt).getTime() -
      new Date(a.metadata.publishedAt).getTime(),
  );
}

export async function getCaseStudy(
  slug: string,
): Promise<ContentEntry<CaseStudyMetadata> | null> {
  const studies = await getCaseStudies();
  return studies.find((entry) => entry.metadata.slug === slug) ?? null;
}

export async function getProduct(
  slug: string,
): Promise<ContentEntry<ProductMetadata> | null> {
  const products = await getProducts();
  return products.find((entry) => entry.metadata.slug === slug) ?? null;
}

export async function getInsight(
  slug: string,
): Promise<ContentEntry<InsightMetadata> | null> {
  const insights = await getInsights();
  return insights.find((entry) => entry.metadata.slug === slug) ?? null;
}
