import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="container max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1.2fr_0.8fr]">
          <div>
            <p className="text-lg font-bold">Richie Budijono</p>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              Independent product consultant helping founders shape, build, and
              launch reliable web and mobile products.
            </p>
          </div>
          <div>
            <p className="eyebrow">Explore</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/work">Experience</Link>
              <Link href="/services">Services</Link>
              <Link href="/insights">Insights</Link>
              <Link href="/about">About</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow">Lone Dream Studio</p>
            <div className="mt-4 grid gap-2 text-sm">
              <Link href="/studio/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <div className="mt-4 grid gap-2 text-sm">
              <a
                href="https://github.com/Salvist"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a href="mailto:richiechandra47@gmail.com">Email ↗</a>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Richie Budijono.</p>
          <p>Founder of Lone Dream Studio.</p>
        </div>
      </div>
    </footer>
  );
}
