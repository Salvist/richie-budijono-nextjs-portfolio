import { getInsights } from "@/lib/content";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = (
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ).replace(/\/$/, "");
  const insights = await getInsights();

  const staticRoutes = ["", "/work", "/services", "/insights", "/about", "/start-a-project"];

  return [
    ...staticRoutes.map((route) => ({
      url: `${baseUrl}${route}`,
      changeFrequency: route === "" ? ("monthly" as const) : ("yearly" as const),
      priority: route === "" ? 1 : route === "/start-a-project" ? 0.9 : 0.8,
    })),
    ...insights.map(({ metadata }) => ({
      url: `${baseUrl}/insights/${metadata.slug}`,
      lastModified: new Date(metadata.updatedAt ?? metadata.publishedAt),
      changeFrequency: "monthly" as const,
      priority: 0.65,
    })),
  ];
}
