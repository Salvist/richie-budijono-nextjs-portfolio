import { workExperience } from "@/lib/work_experience";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work Experience",
  description:
    "Richie Budijono's professional experience building mobile apps, AI workflows, data platforms, e-commerce products, and internal tools.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="page-shell pb-14 sm:pb-16">
        <p className="eyebrow">Work experience</p>
        <div className="mt-5 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <h1 className="display-title">
            Building products from first prototype to production.
          </h1>
          <p className="lede max-w-xl lg:justify-self-end">
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

              <div className="md:pt-1 md:text-right">
                <p className="font-display text-sm font-bold">
                  {experience.dateLabel}
                </p>
                {experience.location && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {experience.location}
                  </p>
                )}
              </div>

              <article className="surface p-6 sm:p-8">
                <p className="eyebrow">{experience.role}</p>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.03em] sm:text-4xl">
                  {experience.companyUrl ? (
                    <a
                      href={experience.companyUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-baseline gap-2 transition-colors hover:text-primary"
                    >
                      {experience.company}
                      <span
                        aria-hidden="true"
                        className="text-lg text-primary sm:text-xl"
                      >
                        ↗
                      </span>
                    </a>
                  ) : (
                    experience.company
                  )}
                </h3>

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
