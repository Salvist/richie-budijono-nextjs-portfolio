import { ProjectMetadata } from "@/lib/project/project";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import SlidingTile from "./animations/sliding_background";

export default function ProjectListView({
  projects,
}: {
  projects: ProjectMetadata[];
}) {
  return (
    <ul>
      {projects.map(function (project) {
        return (
          <li key={project.slug}>
            <Link href={`/projects/${project.slug}`}>
              <SlidingTile>
                <div className="flex flex-col justify-between gap-y-1 sm:flex-row">
                  <div>
                    <p className="text-lg font-semibold">{project.title}</p>
                    <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                      {project.summary}
                    </p>
                  </div>
                  {project.publishedAt && (
                    <p className="mt-1 text-sm font-light">
                      {formatDate(project.publishedAt)}
                    </p>
                  )}
                </div>
              </SlidingTile>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
