import path from "path";
import { Project } from "./project";
import { rootDirectory } from "./project";
import fs from "fs/promises";
import matter from "gray-matter";

export default async function getProject(slug: string): Promise<Project | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContents = await fs.readFile(filePath, { encoding: "utf-8" });
    const { data, content } = matter(fileContents);
    return { metadata: { ...data, slug }, content };
  } catch (e) {
    return null;
  }
}
