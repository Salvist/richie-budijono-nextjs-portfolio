import ProjectListView from "@/components/project_list_view";
import getProjects from "@/lib/project/getProjects";

export default async function ProjectsPage() {
  const projects = await getProjects();

  return (
    <section className="mt-28">
      <div className="container max-w-3xl">
        <h2 className="title mb-4">Projects</h2>
        <ProjectListView projects={projects} />
      </div>
    </section>
  );
}
