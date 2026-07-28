import { describe, expect, it } from "vitest";
import { workExperience } from "./work_experience";

describe("resume-based work experience", () => {
  it("keeps all roles in resume order", () => {
    expect(workExperience.map(({ company }) => company)).toEqual([
      "Lone Dream Studio",
      "Lava Studios",
      "LangInnov / BLAST",
      "Y Lift",
      "5 Gen Solutions",
      "mthree",
    ]);
  });

  it("preserves the resume date ranges", () => {
    expect(
      workExperience.map(({ startDate, endDate, dateLabel }) => ({
        startDate,
        endDate,
        dateLabel,
      })),
    ).toEqual([
      {
        startDate: "2026-01",
        endDate: undefined,
        dateLabel: "Jan 2026 - Present",
      },
      {
        startDate: "2025-03",
        endDate: undefined,
        dateLabel: "Mar 2025 - Present",
      },
      {
        startDate: "2021-11",
        endDate: undefined,
        dateLabel: "Nov 2021 - Present",
      },
      {
        startDate: "2024-10",
        endDate: "2026-01",
        dateLabel: "Oct 2024 - Jan 2026",
      },
      {
        startDate: "2021-08",
        endDate: "2021-11",
        dateLabel: "Aug 2021 - Nov 2021",
      },
      {
        startDate: "2021-08",
        endDate: "2021-09",
        dateLabel: "Aug 2021 - Sep 2021",
      },
    ]);
  });

  it("includes achievements for every role", () => {
    expect(
      workExperience.every(
        ({ achievements }) =>
          achievements.length > 0 &&
          achievements.every((achievement) => achievement.trim().length > 0),
      ),
    ).toBe(true);
  });

  it("only exposes the verified Daily Manna links", () => {
    const links = workExperience.flatMap(({ links = [] }) => links);

    expect(links.map(({ label }) => label)).toEqual([
      "Daily Manna",
      "iOS",
      "Android",
      "Instagram",
    ]);
    expect(links.every(({ href }) => new URL(href).protocol === "https:")).toBe(
      true,
    );
    expect(links.some(({ href }) => href.includes("tracku"))).toBe(false);
  });

  it("includes the requested company links", () => {
    expect(
      workExperience
        .filter(({ companyUrl }) => companyUrl)
        .map(({ company, companyUrl }) => ({ company, companyUrl })),
    ).toEqual([
      {
        company: "Lone Dream Studio",
        companyUrl: "/studio",
      },
      {
        company: "LangInnov / BLAST",
        companyUrl: "https://langinnov.com",
      },
      {
        company: "Y Lift",
        companyUrl: "https://ylift.com",
      },
    ]);
  });
});
