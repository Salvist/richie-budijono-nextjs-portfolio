import getProject from "@/lib/project/getProject";
import Link from "next/link";
import { notFound } from "next/navigation";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import Image from "next/image";
import MDXContent from "@/components/mdx_component";
import { formatDate } from "@/lib/utils";
import getProjects from "@/lib/project/getProjects";

export async function generateStaticParams() {
  const projects = await getProjects();
  const slugs = projects.map((project) => ({ slug: project.slug }));
  return slugs;
}

export default async function ProjectPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;
  const project = await getProject(slug);
  if (!project) {
    notFound();
  }

  const { metadata, content } = project;
  const { title, image, author, publishedAt } = metadata;

  return (
    <section className="mt-40">
      <div className="container max-w-3xl">
        <Link href="/projects" className="flex items-center">
          <NavigateBeforeIcon />
          <span className="pl-2">Back to posts</span>
        </Link>
        {image && (
          <div className="relative mt-4 mb-4 h-96 w-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title || ""}
              className="object-cover"
              fill
            />
          </div>
        )}

        <header>
          <h1 className="title">{title}</h1>
          <p className="mt-2 text-xs text-muted-foreground">
            {author} / {formatDate(publishedAt ?? "")}
          </p>
        </header>
        <main className="prose dark:prose-invert mt-16">
          <MDXContent source={content} />
        </main>
      </div>
    </section>
  );
}
