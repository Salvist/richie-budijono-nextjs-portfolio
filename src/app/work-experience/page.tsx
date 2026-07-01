import type { Metadata } from "next";
import ExperienceTimeline from "@/components/experience_timeline";
import { ArrowUpRight } from "@/components/icons";
import { experiences } from "@/lib/experience";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Work experience",
  description: "Richie Budijono's professional work experience across companies and independently published products.",
  alternates: { canonical: "/work-experience" },
};

export default function WorkExperiencePage() {
  return (
    <>
      <section className="page-shell pb-16 pt-24 sm:pb-20">
        <p className="eyebrow reveal-header">Work experience</p>
        <h1 className="page-title reveal-header delay-1 mt-5 max-w-4xl">Where the work happened, and what it took.</h1>
        <p className="body-large reveal-header delay-2 mt-8 max-w-2xl">Companies I've worked with and the professional, ongoing products I build and maintain independently.</p>
      </section>

      <section className="page-shell pb-24">
        <ExperienceTimeline experiences={experiences} />
      </section>

      <section className="border-t border-border">
        <div className="page-shell py-20 text-center sm:py-28">
          <p className="eyebrow">Curious about the details</p>
          <h2 className="section-title mx-auto mt-4 max-w-3xl">Want the fuller professional record?</h2>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={siteConfig.mailto} className="button button-primary">Contact Me <ArrowUpRight className="size-4" /></a>
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="button button-secondary">LinkedIn <ArrowUpRight className="size-4" /></a>
          </div>
        </div>
      </section>
    </>
  );
}
