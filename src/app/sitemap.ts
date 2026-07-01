import type { MetadataRoute } from "next";
import getProjects from "@/lib/project/getProjects";
import { getPosts } from "@/lib/posts";
import { siteConfig } from "@/lib/site";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [projects, posts] = await Promise.all([getProjects(), getPosts()]);
  const staticRoutes = [
    { path: "", priority: 1, changeFrequency: "monthly" as const },
    { path: "/work-experience", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/projects", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/writing", priority: 0.7, changeFrequency: "monthly" as const },
  ];
  return [
    ...staticRoutes.map((route) => ({ url: `${siteConfig.url}${route.path}`, lastModified: new Date(), changeFrequency: route.changeFrequency, priority: route.priority })),
    ...projects.map((project) => ({ url: `${siteConfig.url}/projects/${project.slug}`, lastModified: project.publishedAt ? new Date(project.publishedAt) : new Date(), changeFrequency: "yearly" as const, priority: project.featured ? 0.8 : 0.5 })),
    ...posts.map((post) => ({ url: `${siteConfig.url}/writing/${post.slug}`, lastModified: post.publishedAt ? new Date(post.publishedAt) : new Date(), changeFrequency: "yearly" as const, priority: 0.6 })),
  ];
}
