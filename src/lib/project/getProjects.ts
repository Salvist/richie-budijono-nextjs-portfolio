import path from "path";
import { ProjectMetadata, rootDirectory } from "./project";
import fs from "fs/promises";
import matter from "gray-matter";

export default async function getProjects(
  limit?: number
): Promise<ProjectMetadata[]> {
  const files = await fs.readdir(rootDirectory);
  const projectPromises = files.map(
    async (file) => await getProjectMetadata(file)
  );
  const projects = await Promise.all(projectPromises);
  projects.sort(function (a, b): number {
    const dateA = new Date(a.publishedAt ?? "");
    const dateB = new Date(b.publishedAt ?? "");
    return dateA < dateB ? 1 : -1;
  });

  if (limit) {
    return projects.slice(0, limit);
  }
  return projects;
}

async function getProjectMetadata(fileName: string): Promise<ProjectMetadata> {
  const slug = fileName.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, fileName);
  const fileContent = await fs.readFile(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
