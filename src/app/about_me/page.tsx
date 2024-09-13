import Image from "next/image";

export default function AboutMePage() {
  return (
    <section className="mt-28">
      <div className=" container max-w-3xl">
        <div className="relative w-full h-96">
          <Image
            src="/images/richie_landscape.jpg"
            alt="Richie looking behind on the EDGE NYC around 6AM in the morning"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <h2 className="title my-4">About me</h2>
        <div className="grid grid-cols-1 gap-y-4">
          <p>
            Hello again, if you didn't catch my name in the front page, well, my
            name is Richie.
          </p>
          <p>
            I am a software engineer and currently having a passion in web and
            mobile apps development. I like to create interactive apps,
            animations, anything that catches the eyes of people.
          </p>
          <p>
            I have in-depth skills and experiences in Flutter as I started
            learning the framework as soon as I graduated from a college. After
            almost a year, I landed my first opportunity with a start-up company
            to create a mobile app in an education field--helping kids get a
            better placement in their bilingual English and Spanish. The mobile
            app was released within 3 months to App Store (iOS) and another 3
            months to Google Play Store (Android) which I didn't think that I
            was capable but I did.
          </p>
          <p>
            Then another project comes in, to create a data platform for
            teachers to be able to manage their students' data along with
            analytics and automatc reporting so that the teachers can send a PDF
            report to individual parents. I had to learn about Vertex AI (which
            is now rebranded as Gemini I believe), optimizing speech to text AI,
            creating a custom package, connect with other third-party, and so
            on; but it was all a lot of fun.
          </p>
          <p>
            And from there, I know that I can learn anything at a fast pace and
            build other stuffs like this portfolio website that I made using
            NextJS in less than a week without prior knowledge of the framework.
          </p>
        </div>
      </div>
    </section>
  );
}
