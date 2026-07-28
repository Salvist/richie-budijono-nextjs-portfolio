export interface WorkExperienceLink {
  label: string;
  href: string;
}

export interface WorkExperience {
  company: string;
  companyUrl?: string;
  role: string;
  location?: string;
  startDate: string;
  endDate?: string;
  dateLabel: string;
  achievements: readonly string[];
  links?: readonly WorkExperienceLink[];
}

export const workExperience: readonly WorkExperience[] = [
  {
    company: "Lone Dream Studio",
    role: "Founder",
    location: "New York, NY",
    startDate: "2026-01",
    dateLabel: "Jan 2026 - Present",
    achievements: [
      "Built and launched Daily Manna, a Bible reading companion with in-depth progress tracking and an app blocker. The app has reached 1,000+ downloads.",
      "Developed and released TrackU, a personalized finance app with receipt and statement scanning.",
    ],
    links: [
      {
        label: "Daily Manna",
        href: "https://mannahabit.com/",
      },
      {
        label: "iOS",
        href:
          "https://apps.apple.com/us/app/daily-manna-bible-habit/id6762305492",
      },
      {
        label: "Android",
        href:
          "https://play.google.com/store/apps/details?id=com.lonedreamstudio.daily_manna",
      },
      {
        label: "Instagram",
        href: "https://www.instagram.com/dailymanna.bible",
      },
    ],
  },
  {
    company: "Lava Studios",
    role: "Software Developer (Contract)",
    location: "Remote",
    startDate: "2025-03",
    dateLabel: "Mar 2025 - Present",
    achievements: [
      "Built Character Studio, an end-to-end AI pipeline that transforms user prompts into fully animated videos by generating characters, multi-scene storyboards, AI-animated clips, and a stitched final video.",
      "Built and maintained database infrastructure, including schema design, automated backups, and security best practices.",
      "Implemented SMS-based two-factor authentication (2FA) to improve platform security and user trust.",
    ],
  },
  {
    company: "LangInnov / BLAST",
    companyUrl: "https://langinnov.com",
    role: "Full-Stack Engineer",
    location: "New York, NY",
    startDate: "2021-11",
    dateLabel: "Nov 2021 - Present",
    achievements: [
      "Developed a prototype into a production mobile app in under three months for iOS and another three months for Android, then published both releases to the App Store and Google Play Store.",
      "Developed a data analytics solution that streamlined performance tracking for 8,000+ students across 40+ schools and helped educators turn data into actionable insights.",
      "Integrated and customized Google Speech-to-Text for student audio, reaching 90% transcription accuracy and reducing manual checking by 70%.",
      "Integrated ClassLink SSO to simplify account creation and login while matching school data.",
    ],
  },
  {
    company: "Y Lift",
    companyUrl: "https://ylift.com",
    role: "Full-stack Developer",
    location: "New York, NY",
    startDate: "2024-10",
    endDate: "2026-01",
    dateLabel: "Oct 2024 - Jan 2026",
    achievements: [
      "Led front-end development for a production e-commerce platform and three internal tools in close collaboration with design and back-end teams.",
      "Built and maintained a scalable component system with 100+ reusable components across 40+ pages, improving development velocity and UI consistency.",
      "Refactored legacy codebases to improve readability, maintainability, and onboarding for other engineers.",
      "Partnered with back-end engineers to define API contracts and maintain data consistency across the front end.",
    ],
  },
  {
    company: "5 Gen Solutions",
    role: "Web Developer Intern",
    startDate: "2021-08",
    endDate: "2021-11",
    dateLabel: "Aug 2021 - Nov 2021",
    achievements: [
      "Developed a web platform using Bubble.io.",
      "Designed filtering and search interfaces for a catalog of devices.",
      "Helped test a payment system using PayPal.",
    ],
  },
  {
    company: "mthree",
    role: "Salesforce Developer Apprenticeship",
    startDate: "2021-08",
    endDate: "2021-09",
    dateLabel: "Aug 2021 - Sep 2021",
    achievements: [
      "Completed six weeks of intensive Salesforce and customer relationship management (CRM) training.",
      "Learned to develop solutions on the Salesforce platform.",
      "Built a credit card system with another team member using Salesforce.",
    ],
  },
];
