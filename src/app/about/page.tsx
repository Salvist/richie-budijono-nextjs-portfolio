import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@/components/icons";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = { title: "About", description: "About Richie Budijono and his approach to building thoughtful web and mobile products.", alternates: { canonical: "/about" } };

const capabilities = [
  ["Product development", "Discovery, MVP definition, product scoping, prototyping, and iterative delivery."],
  ["Web & mobile", "Flutter, Next.js, React, responsive interfaces, app-store delivery, and design systems."],
  ["Backend & integrations", "Firebase, Google Cloud, Supabase, authentication, APIs, data workflows, AI, and reporting."],
  ["Delivery & leadership", "Technical direction, frontend leadership, legacy refactoring, cross-functional collaboration, and mentoring."],
];

export default function AboutPage() {
  return (
    <>
      <section className="page-shell pb-20 pt-24"><p className="eyebrow reveal-header">About Me</p><h1 className="page-title reveal-header delay-1 mt-5 max-w-4xl">I like the part where the answer isn’t obvious yet.</h1><p className="body-large reveal-header delay-2 mt-8 max-w-2xl">I learn quickly, communicate clearly, and stay with hard problems long enough to turn them into useful software.</p></section>
      <section className="page-shell pb-24"><div className="relative aspect-[16/7] overflow-hidden rounded-panel bg-secondary"><Image src="/images/richie_landscape.jpg" alt="Richie Budijono overlooking New York City" fill priority sizes="(min-width: 1200px) 1152px, 100vw" className="object-cover object-center" /></div></section>
      <section className="border-y border-border bg-card"><div className="page-shell grid gap-12 py-20 sm:py-28 lg:grid-cols-[.7fr_1.3fr]"><div className="reveal-header"><p className="eyebrow">My approach</p><h2 className="section-title mt-4">Engineering is a means, not the brief.</h2></div><div className="space-y-6 text-lg leading-8 text-muted-foreground"><p>I started in mobile development and learned the rest of the stack by following real product needs: data platforms, AI transcription, automated reports, authentication, commerce, internal workflows, and the infrastructure holding them together.</p><p>That experience shaped how I work today. I begin by understanding the person and problem behind the request. Then I reduce uncertainty, make tradeoffs visible, and build the smallest sound version that can create momentum.</p><p>Outside of work, I’m usually reading, training, playing a game, or testing a tool simply because I’m curious what it can do.</p></div></div></section>
      <section id="experience" className="page-shell scroll-mt-24 py-20 sm:py-28"><div className="grid gap-12 lg:grid-cols-[.7fr_1.3fr]"><div className="reveal-header"><p className="eyebrow">Experience</p><h2 className="section-title mt-4">Currently building at Lone Dream Studio.</h2></div><div><p className="max-w-xl text-lg leading-8 text-muted-foreground">Alongside client work, I build and maintain independently published apps as an ongoing, professional practice—not side projects I set down.</p><Link href="/work-experience" className="button button-secondary mt-8">See full work experience <ArrowRight className="size-4" /></Link></div></div></section>
      <section className="border-y border-border bg-card"><div className="page-shell py-20 sm:py-28"><div className="reveal-header max-w-2xl"><p className="eyebrow">Capabilities</p><h2 className="section-title mt-4">Enough range to follow the product.</h2></div><div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">{capabilities.map(([title, text]) => <article key={title} className="bg-background p-7 sm:p-9"><h3 className="text-xl font-semibold">{title}</h3><p className="mt-4 leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>
      <section className="page-shell py-20 text-center sm:py-28"><p className="eyebrow reveal-header">Elsewhere</p><h2 className="section-title reveal-header delay-1 mx-auto mt-4 max-w-2xl">The fuller professional record lives on LinkedIn. The code experiments live on GitHub.</h2><div className="mt-8 flex flex-wrap justify-center gap-3"><a href={siteConfig.mailto} className="button button-primary">Email me <ArrowUpRight className="size-4" /></a><a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="button button-secondary">LinkedIn <ArrowUpRight className="size-4" /></a><a href={siteConfig.github} target="_blank" rel="noreferrer" className="button button-secondary">GitHub <ArrowUpRight className="size-4" /></a></div></section>
    </>
  );
}
