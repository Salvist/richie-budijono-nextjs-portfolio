import Image from "next/image";
import { Fragment } from "react";
import { ArrowUpRight } from "./icons";
import RevealOnScroll from "./reveal_on_scroll";
import { ExperienceEntry, formatExperienceLength, formatExperienceRange } from "@/lib/experience";
import { cn } from "@/lib/utils";

export default function ExperienceTimeline({ experiences }: { experiences: ExperienceEntry[] }) {
  const gridVars = { "--timeline-rows": experiences.length } as React.CSSProperties;

  return (
    <div className="grid sm:ml-8 sm:grid-cols-[10rem_2rem_1fr] lg:ml-16" style={gridVars}>
      {experiences.length > 1 && (
        <div
          aria-hidden
          className="hidden w-px bg-border sm:block sm:justify-self-center sm:[grid-column:2] sm:[grid-row:1/var(--timeline-rows)]"
        />
      )}

      {experiences.map((experience, index) => {
        const range = formatExperienceRange(experience.startDate, experience.endDate);
        const length = formatExperienceLength(experience.startDate, experience.endDate);
        const isCurrent = !experience.endDate;
        const rowVar = { "--timeline-row": index + 1 } as React.CSSProperties;
        const delay = Math.min(index * 100, 400);

        return (
          <Fragment key={experience.company}>
            <RevealOnScroll
              delay={delay}
              style={rowVar}
              className="flex items-center gap-2 py-10 sm:flex sm:flex-col sm:items-end sm:text-right sm:[grid-column:1] sm:[grid-row:var(--timeline-row)]"
            >
              <p className="text-sm font-medium text-muted-foreground sm:whitespace-nowrap">{range}</p>
              <p className="mt-1 text-xs text-muted-foreground/70">{length}</p>
              {isCurrent && (
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent sm:mt-2">
                  <span className="size-1.5 rounded-full bg-accent" />
                  Current
                </span>
              )}
            </RevealOnScroll>

            <RevealOnScroll
              delay={delay}
              style={rowVar}
              className="hidden border-border py-10 sm:flex sm:justify-center sm:[grid-column:2] sm:[grid-row:var(--timeline-row)]"
            >
              <span className="relative z-10 mt-1 size-3 shrink-0 rounded-full border-2 border-accent bg-background" />
            </RevealOnScroll>

            <RevealOnScroll
              delay={delay}
              style={rowVar}
              className="py-9 sm:[grid-column:3] sm:[grid-row:var(--timeline-row)]"
            >
              <div className="flex flex-wrap items-center gap-4">
                {experience.logo && (
                  <div className="relative size-11 shrink-0 overflow-hidden rounded-xl border border-border bg-secondary">
                    <Image src={experience.logo} alt={experience.logoAlt ?? experience.company} fill sizes="44px" className="object-cover" />
                  </div>
                )}
                <div>
                  <h3 className="text-xl font-semibold tracking-tight">{experience.company}</h3>
                  <p className="text-sm text-muted-foreground">{experience.role}</p>
                </div>
              </div>

              <p className="mt-5 max-w-2xl leading-7 text-muted-foreground">{experience.summary}</p>

              <ul className="mt-5 space-y-2.5">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className={cn("flex gap-3 leading-7 text-muted-foreground")}>
                    <span className="mt-3 size-1 shrink-0 rounded-full bg-muted-foreground/60" />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              {experience.links && experience.links.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {experience.links.map((link) => (
                    <a key={`${link.label}-${link.url}`} href={link.url} target="_blank" rel="noreferrer" className="button button-secondary">
                      {link.label} <ArrowUpRight className="size-4" />
                    </a>
                  ))}
                </div>
              )}
            </RevealOnScroll>
          </Fragment>
        );
      })}
    </div>
  );
}
