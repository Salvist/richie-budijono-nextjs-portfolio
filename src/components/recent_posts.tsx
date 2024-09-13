import { getPosts } from "@/lib/posts";
import Link from "next/link";
import Posts from "./posts";

export default async function RecentPosts() {
  const posts = await getPosts(4);

  return (
    <section className="mt-12">
      <div>
        <h2 className="title">Recent posts</h2>
        <Posts posts={posts} />
      </div>
    </section>
  );
}
