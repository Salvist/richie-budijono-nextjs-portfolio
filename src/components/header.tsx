"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import { navItems } from "@/lib/nav_item";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";
import { Button } from "./ui/button";

function HeaderNavigation({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const menuButton = useRef<HTMLButtonElement>(null);

  return (
    <header
      className="pointer-events-auto rounded-2xl border border-border/80 bg-card text-card-foreground shadow-lg shadow-black/5 dark:shadow-black/20"
      onKeyDown={(event) => {
        if (event.key === "Escape" && isOpen) {
          setIsOpen(false);
          menuButton.current?.focus();
        }
      }}
    >
      <nav aria-label="Primary navigation" className="p-3">
        <div className="flex min-w-0 items-center justify-between gap-2 md:gap-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="flex min-w-0 items-center gap-2.5 rounded-lg font-medium transition-colors hover:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-card"
          >
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-foreground text-xs font-bold tracking-wide text-background"
            >
              RB
            </span>
            <span className="text-sm leading-snug">Richie Budijono</span>
          </Link>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map(({ name, path }) => {
              const isActive = pathname === path || pathname.startsWith(`${path}/`);
              return (
                <li key={path}>
                  <Link
                    href={path}
                    aria-current={isActive ? "page" : undefined}
                    className={cn(
                      "block whitespace-nowrap rounded-full px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                      isActive
                        ? "bg-foreground font-medium text-background"
                        : "text-muted-foreground hover:bg-accent hover:text-foreground"
                    )}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex shrink-0 items-center gap-1">
            <ThemeToggle />
            <Button
              ref={menuButton}
              size="icon"
              variant="ghost"
              className="md:hidden"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls={menuId}
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </Button>
          </div>
        </div>

        <ul
          id={menuId}
          className={cn(
            "mt-3 space-y-1 border-t border-border pt-3 md:hidden",
            !isOpen && "hidden"
          )}
        >
          {navItems.map(({ name, path }) => {
            const isActive = pathname === path || pathname.startsWith(`${path}/`);
            return (
              <li key={path}>
                <Link
                  href={path}
                  onClick={() => setIsOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "block rounded-md px-4 py-2 text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                    isActive
                      ? "bg-foreground font-medium text-background"
                      : "text-muted-foreground hover:bg-accent hover:text-foreground"
                  )}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default function Header() {
  const pathname = usePathname();
  const container = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>();

  useEffect(() => {
    const element = container.current;
    if (!element) return;

    // Measure the capped outer box, including padding and the expanded menu.
    const observer = new ResizeObserver(() => {
      setHeight(Math.ceil(element.getBoundingClientRect().height));
    });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <div
        ref={container}
        className="pointer-events-none fixed inset-x-0 top-0 z-50 max-h-[calc(100dvh-1rem)] overflow-y-auto overscroll-contain pb-4 pt-3"
      >
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <HeaderNavigation key={pathname} pathname={pathname} />
        </div>
      </div>
      <div
        aria-hidden="true"
        className="h-[94px] shrink-0"
        style={height === undefined ? undefined : { height }}
      />
    </>
  );
}
