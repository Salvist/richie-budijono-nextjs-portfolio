"use client";

import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import SlidingTile from "./animations/sliding_background";
import { navItems } from "@/lib/nav_item";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

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

import { useState } from "react";
import { Button } from "./ui/button";

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false); // To control menu state

//   return (
//     <header className="fixed inset-x-0 top-0 z-50 bg-background/75 py-4">
//       <nav className="container flex max-w-3xl items-center justify-between">
//         <Link href="/">
//           <SlidingTile>Richie Budijono</SlidingTile>
//         </Link>

//         {/* Hamburger icon for mobile */}
//         <Button size="sm" variant="ghost" onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? <MenuIcon /> : <CloseIcon />}
//         </Button>

//         {/* Menu items, hidden on small screens */}
//         <ul
//           className={`${
//             isOpen ? "block" : "hidden"
//           } md:flex md:items-center lg:gap-6 text-sm font-light absolute md:static top-16 left-0 w-full md:w-auto bg-background lg:bg-transparent p-4 lg:p-0`}
//         >
//           {navItems.map(function ({ name, path }) {
//             return (
//               <li key={path} className="mb-4 lg:mb-0">
//                 <Link href={path}>
//                   <SlidingTile>{name}</SlidingTile>
//                 </Link>
//               </li>
//             );
//           })}
//         </ul>

//         {/* Theme Toggle stays visible in all screen sizes */}
//         <div className="hidden md:block">
//           <ThemeToggle />
//         </div>
//       </nav>

//       {/* Show ThemeToggle below the menu on mobile */}
//       {isOpen && (
//         <div className="block md:hidden mt-4">
//           <ThemeToggle />
//         </div>
//       )}
//     </header>
//   );
// }
