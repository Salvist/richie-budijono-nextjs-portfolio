"use client";
import { navItems } from "@/lib/nav_item";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  return <header className="site-shell">
    <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-background focus:p-4">Skip to content</a>
    <nav className="flex flex-wrap items-center justify-between gap-x-6 gap-y-3 border-b border-border py-5 sm:py-6" aria-label="Primary navigation">
      <Link href="/" className="text-base font-semibold tracking-tight hover:text-primary">Richie Budijono</Link>
      <div className="flex items-center sm:order-last"><ThemeToggle /></div>
      <ul className="order-last flex w-full flex-wrap gap-x-6 gap-y-3 text-sm sm:order-none sm:ml-auto sm:w-auto">
        {navItems.map(({ name, path }) => {
          const active = pathname === path || pathname.startsWith(`${path}/`);
          return <li key={path}><Link href={path} aria-current={active ? "page" : undefined}
            className={`nav-link ${active ? "text-primary" : "text-muted-foreground"}`}>{name}</Link></li>;
        })}
      </ul>
    </nav>
  </header>;
}

