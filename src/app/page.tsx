import Intro from "@/components/intro";
import RecentPosts from "@/components/recent_posts";
import RecentProjects from "@/components/recent_projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <section className="mt-28">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <Skills />
      </div>
    </section>
  );
}
