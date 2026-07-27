import { permanentRedirect } from "next/navigation";

export default async function LegacyPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  permanentRedirect(`/insights/${slug}`);
}
