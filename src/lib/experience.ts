export interface ExperienceLink {
  label: string;
  url: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  startDate: string; // "YYYY-MM"
  endDate?: string; // "YYYY-MM"; omitted means ongoing/"Present"
  logo?: string;
  logoAlt?: string;
  summary: string;
  achievements: string[];
  links?: ExperienceLink[];
}

function parseYearMonth(yearMonth: string): Date {
  const [year, month] = yearMonth.split("-").map(Number);
  return new Date(year, month - 1, 1);
}

export function formatExperienceRange(startDate: string, endDate?: string): string {
  const formatter = new Intl.DateTimeFormat("en-US", { month: "long", year: "numeric" });
  const start = formatter.format(parseYearMonth(startDate));
  const end = endDate ? formatter.format(parseYearMonth(endDate)) : "Present";
  return `${start} — ${end}`;
}

export function formatExperienceLength(startDate: string, endDate?: string): string {
  const start = parseYearMonth(startDate);
  const end = endDate ? parseYearMonth(endDate) : new Date();
  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth()) + 1;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  const parts: string[] = [];
  if (years > 0) parts.push(`${years} year${years === 1 ? "" : "s"}`);
  if (months > 0 || years === 0) parts.push(`${months} month${months === 1 ? "" : "s"}`);
  return parts.join(", ");
}

export const experiences: ExperienceEntry[] = [
  {
    company: "Lone Dream Studio",
    role: "Founder",
    startDate: "2026-01",
    summary:
      "Building and launching independent mobile products—Daily Manna, a Bible reading companion with progress tracking and app blocking, and TrackU, a personalized finance app with receipt and statement scanning.",
    achievements: [
      "Built and launched Daily Manna, a Bible reading companion with heavy progress tracking and app blocker. Currently have 1k+ downloads across website, iOS, Android, and Instagram.",
      "Developed and released TrackU, a personalized finance app with receipt and statement scanning.",
    ],
    links: [
      { label: "Daily Manna on Google Play", url: "https://play.google.com/store/apps/details?id=com.lonedreamstudio.daily_manna" },
      { label: "TrackU on Google Play", url: "https://play.google.com/store/apps/details?id=com.lonedreamstudio.tracku" },
    ],
  },
  {
    company: "Lava Studios",
    role: "Software Developer (Contract)",
    startDate: "2025-03",
    summary:
      "Contract engineering for an AI systems consultancy—building end-to-end generative video pipelines and the platform infrastructure behind them.",
    achievements: [
      "Built Character Studio, an end-to-end AI pipeline that transforms user prompts into fully animated videos by generating characters, multi-scene storyboards, AI-animated clips, and stitching them into a final video.",
      "Built and maintained database infrastructure, including schema design, automated backups, and security best practices.",
      "Implemented SMS-based two-factor authentication (2FA) to improve platform security and user trust.",
    ],
    links: [{ label: "Visit Lava Studios", url: "https://lavastudios.ai/" }],
  },
  {
    company: "Y Lift",
    role: "Full-stack Developer and Front-end Lead",
    startDate: "2024-10",
    endDate: "2026-01",
    logo: "/images/logos/ys_logo.png",
    logoAlt: "Y Lift Logo",
    summary:
      "Led frontend delivery for an e-commerce platform and three internal applications for a growing automotive business.",
    achievements: [
      "Led the front-end team, building an e-commerce website and 3 internal apps.",
      "Collaborated closely with design across 40+ pages and built a library of 100+ reusable components and widgets.",
      "Migrated and refactored most of the legacy code to be readable and maintainable by other developers.",
      "Worked with the backend team to define API contracts, identify missing data points, and ensure data consistency across the frontend.",
    ],
    links: [{ label: "Visit Y Lift", url: "https://ylift.app" }],
  },
  {
    company: "BLAST",
    role: "Full-stack Engineer",
    startDate: "2021-11",
    logo: "/images/logos/blast_logo.png",
    logoAlt: "BLAST Logo",
    summary:
      "Shipped a bilingual education platform's mobile app and grew it into a data, reporting, and AI-enabled system used by thousands of students.",
    achievements: [
      "Developed the prototype into a full production mobile app in under 3 months for iOS and another 3 months for Android, publishing to the App Store and Google Play.",
      "Built a data analytics solution that streamlined performance tracking for 8,000+ students across 40+ schools.",
      "Integrated Google Speech-to-Text with custom tweaks to transcribe student audio, reaching 90% accuracy and reducing manual checking by 70%.",
      "Engineered a PDF report generation tool covering schools, classrooms, and students, used by 15+ school administrators.",
      "Integrated ClassLink SSO for easier account creation and login, matching third-party identity data to the platform's school model.",
    ],
    links: [{ label: "View on the App Store", url: "https://apps.apple.com/us/app/blast-bilingual-app/id1598149969" }],
  },
  {
    company: "5 Gen Solutions",
    role: "Web Developer Intern",
    startDate: "2021-08",
    endDate: "2021-11",
    summary: "Built and tested web platform features for a device catalog and its purchasing flow.",
    achievements: [
      "Developed a web platform using Bubble.io.",
      "Designed a filter and search UI for a catalog of devices.",
      "Helped test a payment system using PayPal.",
    ],
  },
  {
    company: "mthree",
    role: "Salesforce Developer Apprenticeship",
    startDate: "2021-08",
    endDate: "2021-09",
    summary: "Intensive Salesforce training program covering CRM fundamentals and platform development.",
    achievements: [
      "Participated in an intense 6 weeks of Salesforce training and CRM.",
      "Learned how to use the Salesforce platform.",
      "Built a credit card system with another member using Salesforce.",
    ],
  },
  {
    company: "Queens College / CUNY",
    role: "B.Sc. in Computer Science",
    startDate: "2017-01",
    endDate: "2021-05",
    summary: "Studied computer science fundamentals, from first programming languages to machine learning research.",
    achievements: [
      "Encountered C++ as the first programming language, followed by Java and JavaScript.",
      "Made a diary app in a Software Engineering class using Android Studio and Java.",
      "Learned about Computer Vision and did research on Pneumonia Detection using Machine Learning.",
      "Attended 3 hackathons and collaborated with other team members.",
    ],
  },
];
