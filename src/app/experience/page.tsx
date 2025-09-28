import ExperienceTile, { ExperienceData } from "@/components/experience_tile";

export default function ExperienceDevPage() {
  const yLiftExperience: ExperienceData = {
    companyName: "Y Lift",
    roleName: "Full-stack Developer",
    duration: "Oct 2024 - Present",
    logoPath: "/images/logos/ys_logo.png",
    logoAlt: "Y Lift Logo",
    achievements: [
      "Led the front-end team, building an e-commerce website and 3 internal apps.",
      "Collaborated with the designer closely and made over 40+ pages and 100+ reusable components / widgets.",
      "Migrated and refactored most of the legacy code to be readable and maintainable by other developers",
      "Worked with the backend team to define API contracts, identify missing data points, and ensure data consistency across the frontend.",
    ],
    links: [
      {
        url: "https://ylift.com",
        type: "link",
      },
    ],
  };

  const blastExperience: ExperienceData = {
    companyName: "BLAST",
    roleName: "Full-stack Engineer",
    duration: "November 2021 - Present",
    logoPath: "/images/logos/blast_logo.png",
    logoAlt: "BLAST Logo",
    achievements: [
      "Developed the prototype to a full production mobile app in under 3 months for iOS and another 3 months for Android, and published them to App Store and Google Play Store.",
      "Developed a robust data analytics solution that streamlined performance tracking for 8000+ students, used by 40+ schools, and facilitating actionable insights for educators; the platform's usage led to increased engagement in data discussions throughout the school year.",
      "Integrated Google speech-to-text AI with some custom tweaks to transcribe student's audios which leads to 90% accuracy and reduces manual checking by 70%.",
      "Engineered a comprehensive PDF report generation tool that encapsulates schools, classrooms, and students performance throughout an entire year; which is now utilized by over 15 school administrators.",
      "Integrated an SSO from a third party education platform ClassLink for easier account creation or login, that is also able to match school data.",
    ],
    links: [
      {
        url: "https://apps.apple.com/us/app/blast-bilingual-app/id1598149969",
        type: "app-store",
      },
    ],
  };

  const experiences = [yLiftExperience, blastExperience];

  return (
    <section className="mt-28">
      <div className="container max-w-3xl">
        <h1 className="title">Experience</h1>
        <div className="mt-8 space-y-6">
          {experiences.map((experience, index) => (
            <ExperienceTile key={index} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
