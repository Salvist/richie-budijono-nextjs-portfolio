import Image from "next/image";
// &#39; = single quote '
export default function Intro() {
  return (
    <section className="flex flex-col sm:flex-row items-center gap-4">
      <div className="relative">
        <Image
          className="flex-1 rounded-lg"
          src={"/images/richie_portrait.jpg"}
          alt="Richie Budijono"
          width={160}
          height={160}
          priority
        />
      </div>
      <div className="flex-1">
        <h1 className="title ">Hey there! I&#39;m Richie Budijono,</h1>
        <p className="mt-2">
          A software engineer who loves turning ideas into web / mobile apps. I
          always keep myself up-to-date with the latest technology trend and try
          things out. My daily consists of 👨‍💻, 📚, 🏋️, and a bit of 🎮.
        </p>
      </div>
    </section>
  );
}
