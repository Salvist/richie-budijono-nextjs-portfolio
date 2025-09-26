import Image from "next/image";
import Link from "next/link";
import { montserrat, sourceSansPro } from "@/lib/fonts";

// Link icon components
const AppStoreIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const GooglePlayIcon = () => (
  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
  </svg>
);

const LinkIcon = () => (
  <svg
    className="w-5 h-5"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export interface ExperienceLink {
  url: string;
  type: "app-store" | "google-play" | "link";
}

export interface ExperienceData {
  companyName: string;
  roleName: string;
  duration: string;
  logoPath: string;
  logoAlt: string;
  achievements: string[];
  links?: ExperienceLink[];
}

interface ExperienceTileProps {
  experience: ExperienceData;
}

export default function ExperienceTile({ experience }: ExperienceTileProps) {
  const getLinkIcon = (type: ExperienceLink["type"]) => {
    switch (type) {
      case "app-store":
        return <AppStoreIcon />;
      case "google-play":
        return <GooglePlayIcon />;
      case "link":
        return <LinkIcon />;
      default:
        return <LinkIcon />;
    }
  };

  return (
    <div className="p-6 bg-neutral-50 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
      {/* Desktop layout */}
      <div className="hidden sm:flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <ExperienceHeader experience={experience} />

          {/* Links on the right */}
          {experience.links && experience.links.length > 0 && (
            <div className="flex items-center gap-2">
              {experience.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                  title={
                    link.type === "app-store"
                      ? "App Store"
                      : link.type === "google-play"
                      ? "Google Play"
                      : "External Link"
                  }
                >
                  {getLinkIcon(link.type)}
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Duration */}
        <div className="text-md text-gray-900 dark:text-gray-200 leading-none tracking-wide">
          {experience.duration}
        </div>

        {/* Bullet points */}
        <ul
          className={`text-md text-gray-900 dark:text-gray-200 leading-relaxed tracking-wide space-y-2 ${sourceSansPro.className}`}
        >
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-gray-900 dark:text-gray-200 mr-2">●</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile layout */}
      <div className="sm:hidden">
        {/* Header with logo and name */}
        <div className="mb-4">
          <ExperienceHeader experience={experience} />
          <div className="text-sm text-gray-600 dark:text-gray-400 leading-none mt-2">
            {experience.duration}
          </div>
        </div>

        {/* Links below duration on mobile */}
        {experience.links && experience.links.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            {experience.links.map((link, index) => (
              <Link
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-gray-200 dark:bg-gray-600 hover:bg-gray-300 dark:hover:bg-gray-500 rounded-md transition-colors duration-200 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                title={
                  link.type === "app-store"
                    ? "App Store"
                    : link.type === "google-play"
                    ? "Google Play"
                    : "External Link"
                }
              >
                {getLinkIcon(link.type)}
              </Link>
            ))}
          </div>
        )}

        {/* Bullet points */}
        <ul className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed space-y-2">
          {experience.achievements.map((achievement, index) => (
            <li key={index} className="flex items-start">
              <span className="text-blue-600 dark:text-blue-400 mr-2">●</span>
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function ExperienceHeader({ experience }: ExperienceTileProps) {
  const firstLetter = experience.companyName.charAt(0);
  const restOfName = experience.companyName.slice(1);
  return (
    <div className="flex flex-row items-center gap-4">
      <div className="relative w-12 h-12 object-contain">
        <Image
          src={experience.logoPath}
          alt={experience.logoAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <div className={`flex flex-row gap-1 ${montserrat.className}`}>
        <div
          className={`ml-2 text-6xl font-bold text-gray-900 dark:text-white`}
        >
          {firstLetter}
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div
            className={`text-3xl font-bold text-gray-900 dark:text-white leading-none tracking-widest`}
          >
            {restOfName}
          </div>
          <div
            className={`text-md font-medium text-gray-900 dark:text-gray-200 leading-tight tracking-wider ${sourceSansPro.className}`}
          >
            {experience.roleName}
          </div>
        </div>
      </div>
    </div>
  );
}
