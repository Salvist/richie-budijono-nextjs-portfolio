import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
export const metadata: Metadata = {
  title: "About", description: "About Richie Budijono, a software engineer and maker of web and mobile products.",
  alternates: { canonical: "/about" },
};
export default function AboutPage() {
  return <div className="page-shell"><div className="reading-column">
    <h1 className="display-title">About me</h1>
    <p className="lede mt-5">I’m Richie, a software engineer who enjoys turning ideas into useful web and mobile products.</p>
    <div className="relative mt-8 aspect-[16/10] overflow-hidden rounded-lg">
      <Image src="/images/richie_portrait.jpg" alt="Richie Budijono" fill preload sizes="(min-width: 768px) 720px, 100vw" className="object-cover object-[50%_35%]" />
    </div>
    <section className="mt-10 space-y-5 leading-8 text-muted-foreground" aria-labelledby="background-heading">
      <h2 id="background-heading" className="section-title text-foreground">Learning by building</h2>
      <p>My career started with Flutter and a chance to turn an education prototype into a real mobile product. Shipping it taught me that software is more than its interface: releases, data, reporting, identity, and the people operating the system all matter.</p>
      <p>That work expanded into analytics for thousands of students, AI-assisted transcription, and reporting used across schools. In commerce, I have led front-end work across customer and internal tools while building reusable foundations for a growing team.</p>
      <p>I also build and publish my own products through <Link href="/studio" className="text-link">Lone Dream Studio</Link>. Working on my own apps keeps me close to the whole process, from choosing what to build to releasing it and improving the useful parts.</p>
      <Link href="/work" className="text-link inline-block">My experience <span aria-hidden="true">↗</span></Link>
    </section>
    <section className="mt-10 border-t border-border pt-8" aria-labelledby="approach-heading">
      <h2 id="approach-heading" className="section-title">How I approach the work</h2>
      <p className="mt-5 leading-8 text-muted-foreground">I like keeping product decisions close to the code: understanding the people using a system, making technical tradeoffs clear, and shipping useful increments. I care about interfaces that feel considered and systems that remain understandable to the next person working on them.</p>
    </section>
    <section id="contact" className="mt-10 border-t border-border pt-8" aria-labelledby="contact-heading">
      <h2 id="contact-heading" className="section-title">Say hello</h2>
      <p className="mt-4 leading-7 text-muted-foreground">You can reach me by email or find my code on GitHub.</p>
      <div className="mt-5 flex flex-wrap gap-6">
        <a className="text-link break-all" href="mailto:richiechandra47@gmail.com">richiechandra47@gmail.com</a>
        <a className="text-link" href="https://github.com/Salvist" target="_blank" rel="noreferrer">GitHub <span aria-hidden="true">↗</span></a>
      </div>
    </section>
  </div></div>;
}

