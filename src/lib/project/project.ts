export const rootDirectory = "./src/content/projects";

export interface Project {
  metadata: ProjectMetadata;
  content: string;
}

export interface ProjectMetadata {
  title?: string;
  summary?: string;
  image?: string;
  coverImage?: string;
  author?: string;
  publishedAt?: string;
  featured?: boolean;
  client?: string;
  role?: string;
  period?: string;
  services?: string[];
  technologies?: string[];
  metrics?: Array<{ value: string; label: string }>;
  visualStyle?: "image" | "brand" | "editorial";
  links?: Array<{ label: string; url: string }>;
  slug: string;
}
