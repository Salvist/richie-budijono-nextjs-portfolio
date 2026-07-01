import type { Metadata } from "next";
import ProjectCard from "@/components/project_card";
import { ArrowUpRight } from "@/components/icons";
import getProjects from "@/lib/project/getProjects";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Projects",
  description: "Independent products and experiments built by Richie Budijono across mobile, web, education, commerce, and AI.",
  alternates: { canonical: "/projects" },
};

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <>
      <section className="page-shell pb-16 pt-24 sm:pb-20">
        <p className="eyebrow reveal-header">Projects</p>
        <h1 className="page-title reveal-header delay-1 mt-5 max-w-4xl">Independent builds, fully shipped or not.</h1>
        <p className="body-large reveal-header delay-2 mt-8 max-w-2xl">Products I've designed and built on my own—published to app stores, released on the web, or shelved with lessons worth keeping.</p>
      </section>

      <section className="page-shell pb-24">
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index < 2} />
          ))}
        </div>
      </section>

      <section className="page-shell py-20 text-center sm:py-28">
        <p className="eyebrow reveal-header">Your idea could be next</p>
        <h2 className="section-title reveal-header delay-1 mx-auto mt-4 max-w-3xl">Have a useful problem that deserves a thoughtful product?</h2>
        <a href={siteConfig.mailto} className="button button-primary mt-8">Tell me about it <ArrowUpRight className="size-4" /></a>
      </section>
    </>
  );
}
