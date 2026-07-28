"use client";

import { navItems } from "@/lib/nav_item";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setIsOpen(false);
    }
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav
        className="container flex h-20 max-w-7xl items-center justify-between"
        aria-label="Primary navigation"
      >
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="text-sm font-bold tracking-tight transition-colors hover:text-primary"
        >
          Richie Budijono
        </Link>

        <ul
          id="mobile-navigation"
          className={cn(
            "absolute inset-x-0 top-20 border-b border-border bg-background px-8 py-6 shadow-xl md:static md:flex md:items-center md:gap-1 md:border-0 md:bg-transparent md:p-0 md:shadow-none",
            isOpen ? "block" : "hidden md:flex",
          )}
        >
          {navItems.map(function ({ name, path }) {
            const active = pathname === path || pathname.startsWith(`${path}/`);
            return (
              <li key={path}>
                <Link
                  href={path}
                  onClick={() => setIsOpen(false)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "block rounded-full px-4 py-3 text-sm font-medium transition-colors hover:bg-muted md:py-2",
                    active && "bg-muted text-primary",
                  )}
                >
                  {name}
                </Link>
              </li>
            );
          })}
          <li className="mt-3 md:ml-2 md:mt-0">
            <Link
              href="/start-a-project"
              onClick={() => setIsOpen(false)}
              className="button-primary w-full justify-center md:w-auto"
            >
              Start a project
            </Link>
          </li>
        </ul>

        <div className="flex items-center gap-1">
          <ThemeToggle />
          <button
            type="button"
            className="relative flex size-10 items-center justify-center rounded-full border border-border md:hidden"
            onClick={() => setIsOpen((open) => !open)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
          >
            <span className="sr-only">
              {isOpen ? "Close navigation" : "Open navigation"}
            </span>
            <span
              aria-hidden
              className={cn(
                "absolute h-0.5 w-4 bg-foreground transition-transform",
                isOpen ? "rotate-45" : "-translate-y-1.5",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "absolute h-0.5 w-4 bg-foreground transition-opacity",
                isOpen && "opacity-0",
              )}
            />
            <span
              aria-hidden
              className={cn(
                "absolute h-0.5 w-4 bg-foreground transition-transform",
                isOpen ? "-rotate-45" : "translate-y-1.5",
              )}
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
