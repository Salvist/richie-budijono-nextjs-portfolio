import Link from "next/link";
import { ArrowUpRight } from "./icons";
import { navigation, siteConfig } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="page-shell flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Link href="/" className="text-lg font-semibold tracking-tight">{siteConfig.name}</Link>
          <p className="mt-2 max-w-md text-sm leading-6 text-muted-foreground">
            {siteConfig.tagline}
          </p>
        </div>
        <div className="flex flex-col gap-5 md:items-end">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm">
            {navigation.map((item) => <Link key={item.name} href={item.href} className="nav-link">{item.name}</Link>)}
            <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-1">LinkedIn <ArrowUpRight className="size-3" /></a>
            <a href={siteConfig.github} target="_blank" rel="noreferrer" className="nav-link inline-flex items-center gap-1">GitHub <ArrowUpRight className="size-3" /></a>
          </div>
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} {siteConfig.name}. Built with care in {siteConfig.location}.</p>
        </div>
      </div>
    </footer>
  );
}
