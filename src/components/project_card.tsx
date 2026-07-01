import Image from "next/image";
import Link from "next/link";
import { ProjectMetadata } from "@/lib/project/project";
import { ArrowUpRight } from "./icons";

export default function ProjectCard({ project, priority = false }: { project: ProjectMetadata; priority?: boolean }) {
  return (
    <article className="group card transition duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_-34px_rgba(0,0,0,.35)]">
      <Link href={`/projects/${project.slug}`} className="flex h-full flex-col p-6 sm:p-8">
        <div className="grid grid-cols-[auto_1fr_auto] items-start gap-4">
          <div className="relative size-16 shrink-0 overflow-hidden rounded-xl bg-secondary sm:size-20">
            {project.coverImage || project.image ? (
              <Image
                src={project.coverImage || project.image || ""}
                alt=""
                fill
                priority={priority}
                sizes="80px"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
            ) : (
              <span className="flex h-full items-center justify-center font-serif text-2xl text-muted-foreground/50">
                {project.title?.charAt(0)}
              </span>
            )}
          </div>
          <div className="pt-1">
            <p className="eyebrow">{project.client || "Independent product"}</p>
            <h3 className="mt-2 text-xl font-semibold tracking-tight sm:text-2xl">{project.title}</h3>
          </div>
          <span className="flex size-9 shrink-0 items-center justify-center text-muted-foreground transition group-hover:text-foreground">
            <ArrowUpRight className="size-5" />
          </span>
        </div>

        <div className="mt-7 flex grow flex-col">
          <p className="leading-7 text-muted-foreground">{project.summary}</p>
          {project.services && <p className="mt-auto pt-8 text-sm text-muted-foreground">{project.services.slice(0, 3).join(" · ")}</p>}
        </div>
      </Link>
    </article>
  );
}
