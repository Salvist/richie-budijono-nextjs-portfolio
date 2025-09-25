import Image from "next/image";

export default function ExperiencePage() {
  return (
    <section className="mt-28">
      <div className="container max-w-3xl">
        <h1 className="title">Experience</h1>
        <p className="mb-8">
          My journey in software development, from learning Flutter to building
          production-ready applications.
        </p>

        <div className="space-y-8">
          {/* Education */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h2 className="text-2xl font-bold mb-2">Education</h2>
            <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
              <h3 className="text-lg font-semibold">College Graduate</h3>
              <p className="text-slate-600 dark:text-slate-400">
                Started learning Flutter immediately after graduation, focusing
                on mobile app development.
              </p>
            </div>
          </div>

          {/* Startup Experience */}
          <div className="border-l-4 border-green-500 pl-6">
            <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">
                Software Engineer - Startup Company
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                <span className="font-medium">Project 1:</span> Educational
                Mobile App
              </p>
              <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
                <li>
                  Developed a mobile app for bilingual education (English and
                  Spanish)
                </li>
                <li>Helped kids get better placement in bilingual programs</li>
                <li>Released to App Store (iOS) within 3 months</li>
                <li>
                  Released to Google Play Store (Android) within 6 months total
                </li>
                <li>Built using Flutter framework</li>
              </ul>
            </div>

            <div className="bg-slate-50 dark:bg-slate-800 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">
                Software Engineer - Data Platform Project
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-3">
                <span className="font-medium">Project 2:</span> Teacher Data
                Management Platform
              </p>
              <ul className="list-disc ml-6 space-y-2 text-slate-700 dark:text-slate-300">
                <li>Created a comprehensive data platform for teachers</li>
                <li>Implemented student data management system</li>
                <li>Built analytics and automated reporting features</li>
                <li>Integrated PDF report generation for individual parents</li>
                <li>
                  Worked with Vertex AI (now Gemini) for speech-to-text
                  optimization
                </li>
                <li>Developed custom packages and third-party integrations</li>
              </ul>
            </div>
          </div>

          {/* Key Achievements */}
          <div className="border-l-4 border-purple-500 pl-6">
            <h2 className="text-2xl font-bold mb-4">Key Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Rapid Learning</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Built this portfolio website using NextJS in less than a week
                  without prior knowledge of the framework.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Full-Stack Development</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Experience with both frontend and backend technologies,
                  including AI integration and cloud platforms.
                </p>
              </div>
            </div>
          </div>

          {/* Technical Skills */}
          <div className="border-l-4 border-orange-500 pl-6">
            <h2 className="text-2xl font-bold mb-4">Technical Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Mobile Development</h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Flutter</li>
                  <li>• iOS & Android</li>
                  <li>• App Store Publishing</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Web Development</h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Next.js</li>
                  <li>• React</li>
                  <li>• TypeScript</li>
                </ul>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">AI & Cloud</h3>
                <ul className="text-slate-600 dark:text-slate-400 space-y-1">
                  <li>• Vertex AI/Gemini</li>
                  <li>• Google Cloud Platform</li>
                  <li>• Speech-to-Text</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Personal Projects */}
          <div className="border-l-4 border-teal-500 pl-6">
            <h2 className="text-2xl font-bold mb-4">
              Notable Personal Projects
            </h2>
            <div className="space-y-4">
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Church Notes</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  An innovative note-taking app that automatically adds Bible
                  verses to notes, available on Google Play Store.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Expense Archive</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  A full-stack mobile app for expense tracking with offline
                  capabilities and comprehensive analytics.
                </p>
              </div>
              <div className="bg-slate-50 dark:bg-slate-800 p-4 rounded-lg">
                <h3 className="font-semibold mb-2">Snap AI</h3>
                <p className="text-slate-600 dark:text-slate-400">
                  AI-powered applications for content filtering and web-based
                  solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Current Focus</h2>
          <p className="text-slate-700 dark:text-slate-300">
            I continue to stay up-to-date with the latest technology trends and
            enjoy building interactive applications that catch people's
            attention. My passion lies in creating meaningful software solutions
            that make a difference in people's lives.
          </p>
        </div>
      </div>
    </section>
  );
}
