"use client";

import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import { ArrowUpRight, Close, Menu } from "./icons";
import { navigation, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <nav className="page-shell flex h-16 items-center justify-between" aria-label="Primary navigation">
        <Link href="/" className="font-serif text-xl font-semibold tracking-[-0.025em] transition-opacity hover:opacity-65">
          {siteConfig.name}
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link">
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
          <a href={siteConfig.mailto} className="button button-primary">
            Contact Me <ArrowUpRight className="size-4" />
          </a>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            className="icon-button"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation" : "Open navigation"}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <Close className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={cn(
          "page-shell grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 md:hidden",
          isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-1 border-t border-border pt-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="rounded-lg px-3 py-3 text-lg font-medium hover:bg-muted">
                {item.name}
              </Link>
            ))}
            <a href={siteConfig.mailto} className="button button-primary mt-3">
              Contact Me <ArrowUpRight className="size-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
