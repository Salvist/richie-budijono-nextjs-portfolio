import { workExperience } from "@/lib/work_experience";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Richie Budijono's professional experience building mobile apps, AI workflows, data platforms, e-commerce products, and internal tools.",
  alternates: { canonical: "/work" },
};

const companyLinkClassName =
  "relative inline-block transition-colors after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:text-primary hover:after:scale-x-100 focus-visible:after:scale-x-100";

export default function ExperiencePage() {
  return (
    <>
      <section className="page-shell pb-14 sm:pb-16">
        <p className="eyebrow">Experience</p>
        <div className="mt-5 max-w-4xl">
          <h1 className="display-title">
            My professional experience.
          </h1>
          <p className="lede mt-7 max-w-2xl">
            My experience spans independent products, AI-assisted creative
            tools, education platforms, e-commerce, and the systems that keep
            them running.
          </p>
        </div>
      </section>

      <section
        className="container max-w-7xl pb-20 sm:pb-28"
        aria-labelledby="experience-heading"
      >
        <h2 id="experience-heading" className="sr-only">
          Professional experience
        </h2>
        <ol className="relative mx-auto max-w-5xl before:absolute before:bottom-2 before:left-[0.4375rem] before:top-2 before:w-px before:bg-border md:before:left-[14.4375rem]">
          {workExperience.map((experience) => (
            <li
              key={`${experience.company}-${experience.startDate}`}
              className="relative grid gap-5 pb-14 pl-10 last:pb-0 md:grid-cols-[12.5rem_1fr] md:gap-16 md:pl-0"
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-2 z-10 size-4 rounded-full border-4 border-background bg-primary ring-1 ring-border md:left-[14rem]"
              />

              <div className="hidden md:block md:pt-1 md:text-right">
                <p className="font-display text-sm font-bold">
                  {experience.dateLabel}
                </p>
              </div>

              <article className="surface p-6 sm:p-8">
                <h3 className="text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                  {experience.companyUrl ? (
                    experience.companyUrl.startsWith("/") ? (
                      <Link
                        href={experience.companyUrl}
                        className={companyLinkClassName}
                      >
                        {experience.company}
                      </Link>
                    ) : (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noreferrer"
                        className={companyLinkClassName}
                      >
                        {experience.company}
                      </a>
                    )
                  ) : (
                    experience.company
                  )}
                </h3>
                <p className="mt-3 font-display text-lg font-bold">
                  {experience.role}
                </p>
                <div className="mt-2 flex flex-wrap items-center gap-x-2 gap-y-1 text-sm">
                  <p className="font-semibold">{experience.dateLabel}</p>
                  {experience.location && (
                    <>
                      <span
                        aria-hidden="true"
                        className="text-muted-foreground"
                      >
                        ·
                      </span>
                      <p className="text-muted-foreground">
                        {experience.location}
                      </p>
                    </>
                  )}
                </div>

                <ul className="mt-7 grid gap-4">
                  {experience.achievements.map((achievement) => (
                    <li
                      key={achievement}
                      className="grid grid-cols-[auto_1fr] gap-3 leading-7 text-muted-foreground"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-[0.65rem] size-1.5 rounded-full bg-secondary"
                      />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {experience.links && experience.links.length > 0 && (
                  <div
                    className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6"
                    aria-label={`${experience.company} product links`}
                  >
                    {experience.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="tag transition-colors hover:border-foreground hover:text-foreground"
                      >
                        {link.label} <span aria-hidden="true">↗</span>
                      </a>
                    ))}
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      </section>
    </>
  );
}
