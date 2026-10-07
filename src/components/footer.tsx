import Link from "next/link";
import { EnvelopeClosedIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
export default function Footer() {
  return <footer className="site-shell">
    <div className="flex flex-wrap items-start justify-between gap-x-10 gap-y-6 border-t border-border py-8 text-sm">
      <div className="flex gap-2">
        <a className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-primary" href="mailto:richiechandra47@gmail.com" aria-label="Email">
          <EnvelopeClosedIcon className="size-5" aria-hidden="true" />
        </a>
        <a className="inline-flex size-11 items-center justify-center rounded-full text-muted-foreground hover:bg-muted hover:text-primary" href="https://github.com/Salvist" target="_blank" rel="noreferrer" aria-label="GitHub">
          <GitHubLogoIcon className="size-5" aria-hidden="true" />
        </a>
      </div>
      <div className="flex flex-wrap gap-x-6 gap-y-3 text-muted-foreground">
        <Link className="hover:text-foreground" href="/studio">Lone Dream Studio</Link>
        <Link className="hover:text-foreground" href="/studio/privacy-policy">Privacy</Link>
      </div>
      <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Richie Budijono</p>
    </div>
  </footer>;
}

