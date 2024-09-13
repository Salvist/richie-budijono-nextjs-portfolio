import { PostMetadata } from "@/lib/posts";
import { formatDate } from "@/lib/utils";
import Link from "next/link";
import SlidingTile from "./animations/sliding_background";

export default function Posts({ posts }: { posts: PostMetadata[] }) {
  if(posts.length == 0) {
    return (
      <div className="m-4">
        <p>No posts at the moment. stay tuned!</p>
      </div>
    )
  }

  return (
    <ul className="flex flex-col gap-8">
      {posts.map((post) => (
        <li key={post.slug}>
          <Link href={`/posts/${post.slug}`}>
            <SlidingTile>
              <div className="flex flex-col justify-between sm:flex-row">
                <div>
                  <p className="text-lg font-semibold">{post.title}</p>
                  <p className="mt-1 line-clamp-2 text-sm font-light text-muted-foreground">
                    {post.summary}
                  </p>
                </div>
                {post.publishedAt && (
                  <p className="mt-1 text-sm font-light">
                    {formatDate(post.publishedAt)}
                  </p>
                )}
              </div>
            </SlidingTile>
          </Link>
        </li>
      ))}
    </ul>
  );
}
