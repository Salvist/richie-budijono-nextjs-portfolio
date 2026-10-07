import { getCaseStudies, getInsights, getProducts } from "@/lib/content";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.richiebudijono.com").replace(/\/$/, "");
  const [insights, projects, studies] = await Promise.all([getInsights(), getProducts(), getCaseStudies()]);
  return [
    ...["", "/projects", "/work", "/studio", "/insights", "/about", "/studio/privacy-policy"].map((route) => ({
      url: `${baseUrl}${route}`, changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.8,
    })),
    ...insights.map(({ metadata: m }) => ({
      url: `${baseUrl}/insights/${m.slug}`, lastModified: new Date(m.updatedAt ?? m.publishedAt),
      changeFrequency: "monthly" as const, priority: 0.65,
    })),
    ...projects.map(({ metadata: m }) => ({ url: `${baseUrl}/projects/${m.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
    ...studies.map(({ metadata: m }) => ({ url: `${baseUrl}/work/${m.slug}`, changeFrequency: "yearly" as const, priority: 0.7 })),
  ];
}

