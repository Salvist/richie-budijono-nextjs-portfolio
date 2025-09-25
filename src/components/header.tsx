"use client";

import { navItems } from "@/lib/nav_item";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SlidingTile from "./animations/sliding_background";

import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { Button } from "./ui/button";

import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false); // To control menu state

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-4 ">
      <nav className="container flex max-w-3xl items-center justify-between">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <SlidingTile>Richie Budijono</SlidingTile>
        </Link>
        <div className="md:hidden flex justify-center">
          <ThemeToggle />
          <Button size="sm" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <CloseIcon /> : <MenuIcon />}
          </Button>
        </div>

        <ul
          className={`${
            isOpen ? "block bg-background" : "hidden"
          }  md:gap-6 text-sm font-light absolute top-16 left-0 px-8 w-full  md:flex md:items-center md:bg-transparent md:p-0 md:w-auto md:static`}
        >
          {navItems.map(function ({ name, path }) {
            return (
              <li key={path} className="mb-2 md:mb-0">
                <Link href={path} onClick={() => setIsOpen(false)}>
                  <SlidingTile>{name}</SlidingTile>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
