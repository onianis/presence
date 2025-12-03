"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);

const NAV_LINKS = [
  { href: "/resume", label: "resume" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/hashes", label: "hashes" },
  { href: "/about", label: "about" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [isLogoHovered, setIsLogoHovered] = useState(false);

  // Hide navbar on homepage
  if (pathname === "/") {
    return null;
  }

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header
        className="
          sticky top-0 z-20 hidden md:block
          bg-(--glass-bg)
          backdrop-blur-md
          supports-backdrop-filter:bg-(--glass-bg)
        "
      >
        <nav className="mx-auto flex h-14 max-w-7xl items-center justify-between px-4 sm:px-6 md:px-0">
          {/* Brand */}
          <Link
            href="/"
            className="flex items-center gap-2 font-display font-light text-2xl p-2 rounded-sm tracking-tight text-accent hover:bg-primary-50 transition-colors duration-200 ease-in-out"
            onMouseEnter={() => setIsLogoHovered(true)}
            onMouseLeave={() => setIsLogoHovered(false)}
          >
            <Image
              src="/icons/logo_color_64.png"
              alt="Presence logo"
              width={32}
              height={32}
              className="rounded-sm translate-y-px"
            />

            {/* Name row (no reserved space between shota and oniani) */}
            <div className="flex items-baseline relative">
              {/* First name + a normal space */}
              <span>shota&nbsp;</span>

              {/* Last name: placed directly after first name in flow.
                  - At rest: pulled left to sit snug after "shota "
                  - On hover: released back to its natural position to make room
              */}
              <motion.span
                className="inline-block"
                initial={false}
                animate={
                  isLogoHovered ? { x: 65 } : { x: 0 } // adjust until "shota oniani" looks tight with a normal space
                }
                transition={{ duration: 0.22, ease: "easeOut" }}
              >
                oniani
              </motion.span>

              {/* Middle word:
                  - Lives *after* the last name in DOM, so it does not push between shota and oniani.
                  - Positioned relatively, overlapping the gap between them.
                  - Rest: tiny, background-colored, basically invisible.
                  - Hover: grows and recolors smoothly.
              */}
              <motion.span
                className="inline-block origin-left text-lg"
                initial={false}
                animate={
                  isLogoHovered
                    ? {
                        opacity: 1,
                        scaleX: 1,
                        scaleY: 1,
                        x: -69, // pull it into the space between first and last name
                        color: "var(--accent-20)",
                      }
                    : {
                        opacity: 0,
                        scaleX: 0.1,
                        scaleY: 0.1,
                        x: -48, // stays in same region but too tiny + background colored to see
                        color: "var(--primary-40)",
                      }
                }
                transition={{ duration: 0.22, ease: "linear" }}
              >
                &nbsp;(sotiris)
              </motion.span>
            </div>
          </Link>

          {/* Desktop nav with hover icon/text swap */}
          <div className="flex items-center gap-2 font-display font-bold tracking-tight">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive = pathname === href;
              const isHovered = hoveredLabel === label;

              const baseClasses =
                "relative rounded-sm cursor-pointer flex items-center transition-colors";

              // Only vertical padding changes; horizontal stays fixed
              const paddingClasses = isHovered ? "px-3 py-2" : "px-3 py-1";

              const colorClasses = isActive
                ? "bg-accent-10 text-primary"
                : "text-accent-10 hover:bg-primary-20";

              const iconSrc = `/icons/nav_${
                isActive ? `${label}_active` : label
              }_ledicon_64.png`;

              return (
                <MotionLink
                  key={href}
                  href={href}
                  className={`${baseClasses} ${paddingClasses} ${colorClasses}`}
                  onMouseEnter={() => setHoveredLabel(label)}
                  onMouseLeave={() =>
                    setHoveredLabel((prev) => (prev === label ? null : prev))
                  }
                  // Slight scale-up on hover to emphasize height change
                  animate={{ scale: 1 }} // no horizontal scaling
                  transition={{ duration: 0.18, ease: "easeOut" }}
                >
                  {/* Text recedes strongly on hover */}
                  <motion.span
                    className="whitespace-nowrap"
                    animate={
                      isHovered
                        ? { opacity: 0.15, scaleY: 0.9, scaleX: 1 }
                        : { opacity: 1, scaleY: 1, scaleX: 1 }
                    }
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    {label}
                  </motion.span>

                  {/* Icon overlays the text and fades in on hover, slightly larger on hover */}
                  <motion.span
                    initial={false}
                    animate={{
                      opacity: isHovered ? 1 : 0,
                      scale: isHovered ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <Image
                      src={iconSrc}
                      alt={`${label} icon`}
                      width={22}
                      height={22}
                    />
                  </motion.span>
                </MotionLink>
              );
            })}
          </div>
        </nav>
      </header>

      {/* Mobile bottom bar (below md) */}
      <div
        className="
          fixed bottom-0 inset-x-0 z-20 md:hidden
          border-t border-(--glass-border)
          bg-(--glass-bg)
          backdrop-blur-md
          supports-backdrop-filter:bg-(--glass-bg)
        "
      >
        <nav className="mx-auto flex h-14 max-w-3xl items-center px-4 sm:px-6 lg:px-8">
          {/* Brand (small) */}
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-display tracking-tight text-accent"
          >
            <Image
              src="/icons/logo_color_64.png"
              alt="Presence logo"
              width={32}
              height={32}
              className="rounded-sm"
            />
            <span className="text-lg">shota oniani</span>
          </Link>

          {/* Expandable touch area to the right of the brand opens the menu */}
          <button
            type="button"
            aria-label="Open navigation menu"
            onClick={() => setIsOpen(true)}
            className="ml-3 flex-1 h-10 inline-flex items-center justify-end rounded-full text-accent-10 hover:bg-primary-20"
          >
            <span className="sr-only">Open navigation menu</span>
            <Image
              src="/icons/nav_up_ledicon_64.png"
              alt="hamburger menu icon"
              width={32}
              height={32}
            />
          </button>
        </nav>
      </div>

      {/* Full-screen mobile menu overlay (bottom sheet style) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              duration: 0.2,
              ease: "easeInOut",
            }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={closeMenu}
          >
            {/* Bottom-aligned sheet */}
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="absolute inset-x-0 bottom-0 bg-primary-40 rounded-t-3xl border-t border-white/10"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="mx-auto max-w-3xl px-4 py-4 sm:px-6 lg:px-8">
                {/* Top row in sheet: brand + close */}
                <div className="flex items-center mb-10 my-3 mt-0 justify-between">
                  <Link
                    href="/"
                    className="flex items-center gap-2 text-lg font-display tracking-tight text-accent"
                  >
                    <Image
                      src="/icons/logo_color_64.png"
                      alt="Presence logo"
                      width={32}
                      height={32}
                      className="rounded-sm"
                    />
                    <span>
                      shota{" "}
                      <span className="text-sm text-accent-20">(sotiris)</span>{" "}
                      oniani
                    </span>
                  </Link>

                  <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={closeMenu}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full text-accent-10 hover:bg-primary-30"
                  >
                    <span className="sr-only">Close menu</span>
                    <Image
                      src="/icons/nav_down_ledicon_64.png"
                      alt="close menu icon"
                      width={36}
                      height={36}
                    />
                  </button>
                </div>

                {/* Nav links list, aligned towards bottom via margin */}
                <div className="mt-6 mb-2">
                  <nav className="space-y-5 text-2xl font-display tracking-tight">
                    {NAV_LINKS.map(({ href, label }) => {
                      const isActive = pathname === href;
                      const iconSrc = `/icons/nav_${
                        isActive ? `${label}_active` : label
                      }_ledicon_64.png`;

                      return (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeMenu}
                          className={
                            "block rounded-sm px-3 py-2 transition-colors w-full " +
                            (isActive
                              ? "bg-accent-10 text-primary"
                              : "text-accent-1 hover:bg-primary-30")
                          }
                        >
                          <span className="inline-flex items-center justify-between gap-3 w-full">
                            <span>{label}</span>
                            <Image
                              src={iconSrc}
                              alt={`${label} icon`}
                              width={32}
                              height={32}
                              className="inline-block"
                            />
                          </span>
                        </Link>
                      );
                    })}
                  </nav>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
