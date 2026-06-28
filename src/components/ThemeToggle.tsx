"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from '@mui/icons-material/LightMode';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={() => {
        setTheme(isDark ? "light" : "dark");
      }}
    >
      {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
