import Image from "next/image";
import Link from "next/link";
import type { PortfolioItem } from "@/lib/portfolio";

const thumbnails: Record<string, { image: string; tone: string }> = {
  "daily-manna": {
    image: "/images/studio/daily-manna/icon.png", tone: "bg-[#fff0b9]",
  },
  tracku: {
    image: "/images/studio/tracku/icon.png", tone: "bg-[#e9f1e8]",
  },
  "blast-learning-platform": {
    image: "/images/logos/blast_logo.png", tone: "bg-[#fae8e5]",
  },
};

function ProjectThumbnail({ item }: { item: PortfolioItem }) {
  const visual = thumbnails[item.slug];
  const image = visual?.image ?? item.coverImage;
  return <div className={`relative aspect-[4/3] overflow-hidden rounded-md ${visual?.tone ?? "bg-muted"}`}>
    <Image src={image} alt="" fill sizes="(min-width: 640px) 192px, 96px"
      unoptimized={image.endsWith(".gif")} className="object-contain p-3 sm:p-6" />
  </div>;
}

export function SelectedProject({ item, index }: { item: PortfolioItem; index: number }) {
  return <article className="grid grid-cols-[96px_minmax(0,1fr)] items-start gap-4 border-b border-border py-6 sm:grid-cols-[192px_minmax(0,1fr)] sm:gap-6">
    <Link href={item.href} aria-label={`View ${item.title}`} className="block rounded-md"><ProjectThumbnail item={item} /></Link>
    <div className="min-w-0 break-words">
      <h3 className="text-2xl font-semibold tracking-tight"><Link href={item.href} className="hover:text-primary">{item.title}</Link></h3>
      <p className="mt-3 leading-7 text-muted-foreground">{item.summary}</p>
      {item.contribution && <p className="mt-3 leading-7 text-muted-foreground">{item.contribution}</p>}
      <p className="mt-3 text-xs tracking-[0.1em] text-muted-foreground">{String(index + 1).padStart(2, "0")} / {item.kind === "product" ? "INDEPENDENT PRODUCT" : "PROFESSIONAL WORK"}</p>
      <Link href={item.href} className="text-link mt-5 inline-block">{item.kind === "product" ? "Explore project" : "Explore case study"} <span aria-hidden="true">↗</span></Link>
    </div>
  </article>;
}

export function PortfolioRow({ item }: { item: PortfolioItem }) {
  return <article className="grid grid-cols-[80px_1fr] gap-5 border-b border-border py-7 sm:grid-cols-[144px_1fr] sm:gap-8">
    <Link href={item.href} tabIndex={-1} aria-hidden="true" className="flex aspect-[4/3] items-center justify-center self-start overflow-hidden rounded-md bg-muted">
      <Image src={item.coverImage} alt="" width={144} height={108} unoptimized={item.coverImage.endsWith(".gif")} className="h-full w-full object-contain p-2" />
    </Link>
    <div>
      <p className="mb-1 text-sm text-muted-foreground">{item.kind === "product" ? "Independent product" : "Professional work"}</p>
      <h2 className="text-xl font-semibold"><Link className="hover:text-primary" href={item.href}>{item.title}</Link></h2>
      <p className="mt-2 leading-7 text-muted-foreground">{item.summary}</p>
      <Link className="text-link mt-3 inline-block text-sm" href={item.href}>View project <span aria-hidden="true">↗</span></Link>
    </div>
  </article>;
}

