import fs from "fs";
import matter from "gray-matter";
import path from "path";

export interface Post {
  metadata: PostMetadata;
  content: string;
}

export type PostMetadata = {
  title?: string;
  summary?: string;
  image?: string;
  author?: string;
  publishedAt?: string;
  slug: string;
}

const rootDirectory = path.join(process.cwd(), "src", "content", "posts");

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(rootDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(filePath, { encoding: "utf-8" });
    const { data, content } = matter(fileContents);
    return { metadata: { ...data, slug }, content };
  } catch (e) {
    return null;
  }
}

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
  const files = await fs.readdirSync(rootDirectory);
  const posts = files
    .map((file) => getPostMetadata(file))
    .sort((a, b) => {
      if (new Date(a.publishedAt ?? "") < new Date(b.publishedAt ?? "")) {
        return 1;
      } else {
        return -1;
      }
    });

  if(posts[0].slug === '.keep') return [];
  if (limit) {
    return posts.slice(0, limit);
  }
  return posts;
}

export  function getPostMetadata(filepath: string): PostMetadata {
  const slug = filepath.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, filepath);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });
  const { data } = matter(fileContent);
  return { ...data, slug };
}
