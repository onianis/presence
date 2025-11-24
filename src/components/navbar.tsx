"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/resume", label: "Resume" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/hashes", label: "Hashes" },
  { href: "/about", label: "About" },
];

export function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  return (
    <header className="sticky top-0 z-20 border-b border-white/10 bg-primary-40">
      <nav className="mx-auto flex h-14 max-w-3xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-sm font-display tracking-tight text-accent">
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
                    ? "bg-accent-10 text-primary"
                    : "text-accent-10 hover:bg-primary-20")
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
