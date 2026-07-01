import type { Metadata } from "next";
import Link from "next/link";
import { getPosts } from "@/lib/posts";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = { title: "Writing", description: "Practical notes from Richie Budijono about building and shipping software products.", alternates: { canonical: "/writing" } };

export default async function WritingPage() {
  const posts = await getPosts();
  return (
    <section className="page-shell pb-28 pt-24">
      <p className="eyebrow reveal-header">Writing</p>
      <h1 className="page-title reveal-header delay-1 mt-5 max-w-4xl">Notes from building, learning, and occasionally getting it wrong first.</h1>
      <p className="body-large reveal-header delay-2 mt-8 max-w-2xl">Technical lessons and product observations from work in mobile, web, cloud, and AI.</p>
      <div className="mt-16 border-t border-border">
        {posts.map((post) => <Link key={post.slug} href={`/writing/${post.slug}`} className="group grid gap-4 border-b border-border py-8 sm:grid-cols-[1fr_auto] sm:items-center"><div><h2 className="text-2xl font-semibold tracking-tight group-hover:text-accent">{post.title}</h2><p className="mt-3 max-w-2xl leading-7 text-muted-foreground">{post.summary}</p></div><p className="text-sm text-muted-foreground">{formatDate(post.publishedAt || "")}</p></Link>)}
      </div>
    </section>
  );
}
