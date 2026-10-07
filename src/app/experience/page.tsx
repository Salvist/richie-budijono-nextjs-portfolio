import ExperienceTile, { ExperienceData } from "@/components/experience_tile";

export default function ExperienceDevPage() {
  const loneDreamExperience: ExperienceData = {
    companyName: "Lone Dream Studio",
    roleName: "Founder",
    duration: "Jan 2026 - Present",
    location: "New York, NY",
    initials: "LDS",
    achievements: [
      "Built and launched Daily Manna, a Bible reading companion with in-depth progress tracking and an app blocker. The app has reached 1,000+ downloads.",
      "Developed and released TrackU, a personalized finance app with receipt and statement scanning.",
    ],
    links: [
      {
        url: "https://www.richiebudijono.com/studio",
        type: "link",
        label: "Lone Dream Studio",
      },
      {
        url: "https://mannahabit.com/",
        type: "link",
        label: "Daily Manna",
      },
      {
        url: "https://apps.apple.com/us/app/daily-manna-bible-habit/id6762305492",
        type: "app-store",
        label: "Daily Manna on the App Store",
      },
      {
        url: "https://play.google.com/store/apps/details?id=com.lonedreamstudio.daily_manna",
        type: "google-play",
        label: "Daily Manna on Google Play",
      },
      {
        url: "https://www.instagram.com/dailymanna.bible",
        type: "link",
        label: "Daily Manna on Instagram",
      },
    ],
  };

  const lavaExperience: ExperienceData = {
    companyName: "Lava Studios",
    roleName: "Software Developer (Contract)",
    duration: "Mar 2025 - Present",
    location: "Remote",
    initials: "LS",
    achievements: [
      "Built Character Studio, an end-to-end AI pipeline that transforms user prompts into fully animated videos by generating characters, multi-scene storyboards, AI-animated clips, and a stitched final video.",
      "Built and maintained database infrastructure, including schema design, automated backups, and security best practices.",
      "Implemented SMS-based two-factor authentication (2FA) to improve platform security and user trust.",
    ],
  };

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

  const fiveGenExperience: ExperienceData = {
    companyName: "5 Gen Solutions",
    roleName: "Web Developer Intern",
    duration: "Aug 2021 - Nov 2021",
    initials: "5G",
    achievements: [
      "Developed a web platform using Bubble.io.",
      "Designed filtering and search interfaces for a catalog of devices.",
      "Helped test a payment system using PayPal.",
    ],
  };

  const mthreeExperience: ExperienceData = {
    companyName: "mthree",
    roleName: "Salesforce Developer Apprenticeship",
    duration: "Aug 2021 - Sep 2021",
    initials: "m3",
    achievements: [
      "Completed six weeks of intensive Salesforce and customer relationship management (CRM) training.",
      "Learned to develop solutions on the Salesforce platform.",
      "Built a credit card system with another team member using Salesforce.",
    ],
  };

  const experiences = [
    loneDreamExperience,
    lavaExperience,
    yLiftExperience,
    blastExperience,
    fiveGenExperience,
    mthreeExperience,
  ];

  return (
    <section className="mt-28">
      <div className="container max-w-3xl">
        <h1 className="title">Experience</h1>
        <div className="mt-8 space-y-6">
          {experiences.map((experience) => (
            <ExperienceTile key={experience.companyName} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
}
