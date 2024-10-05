"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export default function GithubLogo({ href }: { href: string }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const githubDirectory = "/images/logos/github";
  const githubLogo = isDark
    ? `${githubDirectory}/github-mark-white.png`
    : `${githubDirectory}/github-mark.png`;

  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Image src={githubLogo} alt="Doer" width={40} height={40} />
    </Link>
  );
}
