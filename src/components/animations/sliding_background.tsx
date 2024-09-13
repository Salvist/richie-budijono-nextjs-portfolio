import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function SlidingTile({ className, children }: { className?: string, children: ReactNode }) {
  return (
    <div className={cn("relative group", className)}>
      <div className="relative z-10 px-4 py-2">{children}</div>
      <div className="absolute inset-0 rounded-lg bg-slate-200 dark:bg-slate-700 transition duration-300 ease-in-outtransform scale-x-0 origin-left group-hover:scale-x-100" />
    </div>
  );
}
