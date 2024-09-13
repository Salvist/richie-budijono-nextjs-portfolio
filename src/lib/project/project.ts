export const rootDirectory = "./src/content/projects";

export interface Project {
  metadata: ProjectMetadata;
  content: string;
}

export interface ProjectMetadata {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
}