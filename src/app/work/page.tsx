import { workExperience } from "@/lib/work_experience";
import type { Metadata } from "next";
import Link from "next/link";
export const metadata: Metadata = {
  title: "Experience", description: "Richie Budijono's experience building mobile apps, AI workflows, education platforms, and commerce products.",
  alternates: { canonical: "/work" },
};
const caseStudies: Record<string, string> = {
  "LangInnov / BLAST": "/work/blast-learning-platform", "Y Lift": "/work/ylift-commerce-platform",
};
export default function ExperiencePage() {
  return <div className="page-shell"><div className="reading-column">
    <h1 className="display-title">Experience</h1>
    <p className="lede mt-5">Building products independently and alongside teams.</p>
    <ol className="mt-10">{workExperience.map((e) => <li key={e.company} className="border-t border-border py-8">
      <div className="flex flex-wrap items-baseline justify-between gap-3">
        <h2 className="text-2xl font-semibold">{e.companyUrl ? <Link className="hover:text-primary" href={e.companyUrl}>{e.company}</Link> : e.company}</h2>
        <p className="text-sm text-muted-foreground">{e.dateLabel}</p>
      </div>
      <p className="mt-2 font-medium">{e.role}</p>
      {e.location && <p className="mt-1 text-sm text-muted-foreground">{e.location}</p>}
      <ul className="mt-5 list-disc space-y-3 pl-5 leading-7 text-muted-foreground">{e.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
      {caseStudies[e.company] && <Link href={caseStudies[e.company]} className="text-link mt-5 inline-block">Read the case study <span aria-hidden="true">↗</span></Link>}
      {e.links && <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-sm">{e.links.map((l) => <a className="text-link" key={l.href} href={l.href} target="_blank" rel="noreferrer">{l.label} <span aria-hidden="true">↗</span></a>)}</div>}
    </li>)}</ol>
  </div></div>;
}

