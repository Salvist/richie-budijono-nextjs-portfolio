import MDXContent from "@/components/mdx_component";
import { getLegalDocument } from "@/lib/content";
import { formatDate } from "@/lib/utils";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const policySlug = "privacy-policy";

export async function generateMetadata(): Promise<Metadata> {
  const policy = await getLegalDocument(policySlug);
  if (!policy) return {};

  return {
    title: policy.metadata.title,
    description: policy.metadata.description,
    alternates: { canonical: "/studio/privacy-policy" },
    openGraph: {
      type: "article",
      title: policy.metadata.title,
      description: policy.metadata.description,
      modifiedTime: policy.metadata.effectiveDate,
      url: "/studio/privacy-policy",
    },
  };
}

export default async function PrivacyPolicyPage() {
  const policy = await getLegalDocument(policySlug);
  if (!policy) notFound();

  return (
    <article className="page-shell">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow">Lone Dream Studio</p>
        <h1 className="mt-4 font-display text-4xl font-bold tracking-[-0.04em] sm:text-6xl">
          {policy.metadata.title}
        </h1>
        <p className="mt-5 text-sm text-muted-foreground">
          Effective as of {formatDate(policy.metadata.effectiveDate)}
        </p>
        <div className="prose prose-lg mt-12 max-w-none dark:prose-invert prose-headings:font-display prose-headings:tracking-tight prose-a:text-primary">
          <MDXContent source={policy.content} />
        </div>
      </div>
    </article>
  );
}
