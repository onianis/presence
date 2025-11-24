"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/hashes", label: "Hashes" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/80">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-display tracking-tight">
          Presence
        </Link>

        <div className="flex items-center gap-2 text-sm font-mono">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  "rounded-full px-3 py-1 transition-colors " +
                  (isActive
                    ? "bg-black text-white dark:bg-zinc-50 dark:text-black"
                    : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900")
                }
              >
                {label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
