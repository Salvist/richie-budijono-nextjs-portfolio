export default function Skills() {
  return (
    <section className="mt-12">
      <h2 className="title">Skills</h2>
      <p>
        Skills that I am confident with, and it will just keep expanding from
        now on 😎.
      </p>

      <div className="mt-4">
        <p className="text-lg font-bold">Programming Languages</p>
        <ul className="list-disc ml-8">
          <li>Dart</li>
          <li>JavaScript / TypeScript</li>
          <li>GraphQL</li>
          <li>SQL</li>
          <li>Java / Kotlin</li>
          <li>C++</li>
          <li>Swift</li>
          <li>Python</li>
        </ul>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 mt-4 gap-y-4">
        <div>
          <p className="text-lg font-bold">Front-end</p>
          <ul className="list-disc ml-8">
            <li>Flutter</li>
            <li>Next.js (React)</li>
            <li>HTML</li>
            <li>Jetpack Compose</li>
            <li>Bubble.io</li>
          </ul>
        </div>
        <div>
          <p className="text-lg font-bold">Back-end</p>
          <ul className="list-disc ml-8">
            <li>Firebase</li>
            <li>Google Cloud Platform</li>
            <li>Realm (MongoDB)</li>
            <li>AWS Amplify</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
