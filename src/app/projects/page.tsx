import type { Metadata } from "next";
import Link from "next/link";
import ProjectCard from "@/components/project_card";
import { ArrowUpRight } from "@/components/icons";
import getProjects from "@/lib/project/getProjects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Case studies and products built by Richie Budijono across mobile, web, education, commerce, and AI.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="page-shell pb-16 pt-24 sm:pb-20">
        <p className="eyebrow reveal-header">Projects</p>
        <h1 className="page-title reveal-header delay-1 mt-5 max-w-4xl">
          Work that shipped, and what it changed.
        </h1>
        <p className="body-large reveal-header delay-2 mt-8 max-w-2xl">
          Client platforms and independent products — designed, built, and released to
          app stores and the web.
        </p>
      </section>

      <section className="page-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </section>

      <section className="border-t border-border">
        <div className="page-shell py-20 text-center sm:py-28">
          <p className="eyebrow reveal-header">Your idea could be next</p>
          <h2 className="section-title reveal-header delay-1 mx-auto mt-4 max-w-3xl">
            Have a useful problem that deserves a thoughtful product?
          </h2>
          <Link href="/contact" className="button button-primary reveal-header delay-2 mt-8">
            Tell me about it <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
