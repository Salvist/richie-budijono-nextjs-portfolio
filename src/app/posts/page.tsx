import Posts from "@/components/posts";
import { getPosts } from "@/lib/posts";

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <section className="mt-28 pb-24">
      <div className="container max-w-3xl">
        <h1 className="title mb-4">Posts</h1>

        <Posts posts={posts} />
      </div>
    </section>
  );
}
