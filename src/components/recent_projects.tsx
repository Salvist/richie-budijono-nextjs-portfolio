import getProjects from "@/lib/project/getProjects";
import ProjectListView from "./project_list_view";

export default async function RecentProjects() {
  const projects = await getProjects(4);
  return (
    <section className="mt-12">
      <h2 className="title">Recent projects</h2>
      <ProjectListView projects={projects} />
    </section>
  );
}
