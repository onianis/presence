"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

const VERB_COLORS = [
  // bright greens / teals
  "#00ffa3",
  "#1de9b6",
  "#00f5d4",
  "#00e676",
  "#00ffbf",

  // forest greens / emeralds
  "#00c853",
  "#00a152",
  "#008f4c",
  "#007d3a",
  "#006c3b",

  // blues / cyans
  "#00b0ff",
  "#40c4ff",
  "#00e5ff",
  "#18ffff",
  "#00a8ff",

  // indigos / violets
  "#5c6bc0",
  "#7c4dff",
  "#536dfe",
  "#651fff",
  "#7f5af0",

  // bright reds / hot pinks
  "#ff1744",
  "#ff5252",
  "#ff4081",
  "#ff3366",
  "#ff007f",

  // magentas / purples
  "#e040fb",
  "#ff00ff",
  "#f72585",
  "#d500f9",
  "#c51162",

  // blacks / grays
  "#f5f5f5",
  "#e0e0e0",
  "#bdbdbd",
  "#9e9e9e",
  "#616161",
  "#212121",
];

const NAV_LINKS = [
  { href: "/resume", label: "resume" },
  { href: "/projects", label: "projects" },
  { href: "/blog", label: "blog" },
  { href: "/hashes", label: "hashes" },
  { href: "/about", label: "about" },
];

export default function Home() {
  const verbs = [
    "creating",
    "learning",
    "hacking",
    "securing",
    "designing",
    "improving",
    "building",
    "developing",
    "breaking",
    "defying",
  ];

  const [index, setIndex] = useState(0);
  const [verbColor, setVerbColor] = useState<string>(VERB_COLORS[0]);

  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);

  const heroRef = useRef<HTMLDivElement | null>(null);
  const verbRef = useRef<HTMLDivElement | null>(null);

  const [showScrollHint, setShowScrollHint] = useState(false);

  // Fix for mobile hero: Use ref for direct DOM manipulation to avoid re-renders
  useEffect(() => {
    const updateHeight = () => {
      if (heroRef.current) {
        const UPWARD_BIAS = 80;
        heroRef.current.style.height = `${window.innerHeight - 96 - UPWARD_BIAS}px`;
      }
    };

    // Initial set
    updateHeight();

    // Add resize listener for robustness
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const nextIndex = (prev + 1) % verbs.length;

        // pick a random color each time we advance
        const randomColor =
          VERB_COLORS[Math.floor(Math.random() * VERB_COLORS.length)];
        setVerbColor(randomColor);

        return nextIndex;
      });
    }, 2000); // time between word changes

    return () => clearInterval(interval);
  }, [verbs.length]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 1000); // 1 second after page load

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowScrollHint(true);
    }, 1000); // 1 second after page load

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center">
      <main
        className="
        w-full
        min-h-[calc(100vh-3.5rem)]   /* mobile: viewport minus bottom nav */
        md:min-h-screen              /* desktop: full viewport height */
        flex flex-col
        justify-start                /* mobile: heroOffset controls centering */
        md:justify-between           /* desktop: nav at top, hero centered in remaining space */
        md:py-8                      /* safe top/bottom padding for desktop */
        pt-10                        /* mobile top padding */
        polka-bg
      "
      >
        <motion.nav
          className="hidden md:flex flex-row flex-wrap w-full justify-around h-full px-5 mx-5 mb-10 gap-y-5 md:gap-y-0 md:px-0 md:mx-0"
          variants={{
            hidden: { opacity: 0, y: -8 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.25,
                ease: "easeOut",
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          {NAV_LINKS.map(({ href, label }) => {
            const isHovered = hoveredLabel === label;

            return (
              <motion.div
                key={href}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
              >
                <Link
                  className="relative inline-block font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
                  href={href}
                  onMouseEnter={() => setHoveredLabel(label)}
                  onMouseLeave={() => setHoveredLabel(null)}
                >
                  <motion.span
                    className="block"
                    animate={
                      isHovered
                        ? { opacity: 0.15, scaleY: 0.9, scaleX: 1 }
                        : { opacity: 1, scaleY: 1, scaleX: 1 }
                    }
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    {label}
                  </motion.span>

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
                      src={`/icons/nav_${label}_ledicon_64.png`}
                      alt={`${label} icon`}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </motion.span>
                </Link>
              </motion.div>
            );
          })}
        </motion.nav>

        <div
          className="
          relative
          w-full
          md:flex
          md:flex-col
          md:items-center
          md:justify-center
          md:flex-1          /* take remaining height between nav and footer */
        "
        >
          <div className="marquee-container -top-14 md:top-auto">
            <motion.div
              className="marquee-track marquee-text"
              style={{
                animation:
                  "marquee-left var(--marquee-duration, 30s) linear infinite",
              }}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 1.75 }}
            >
              {[
                "ai security engineer",
                "compsci @ uni tübingen",
                "soc analyst",
                "offensive security engineer",
                "top 0.15% worldwide thm",
                "assistant lecturer",
                "civic engagement",
                "open source contributor",
                "flex finalist",
                "project management tutor",
              ]
                .join(" // ")
                .concat(" // ")}
              {[
                "ai security engineer",
                "compsci @ uni tübingen",
                "soc analyst",
                "offensive security engineer",
                "top 0.15% worldwide thm",
                "assistant lecturer",
                "civic engagement",
                "open source contributor",
                "flex finalist",
                "project management tutor",
              ]
                .join(" // ")
                .concat(" // ")}
            </motion.div>
          </div>

         <motion.div
            ref={heroRef}
            className="grid *:font-display w-full px-3 md:hidden"
            style={{
              height: "calc(100svh - 6rem)", // Static fallback
              alignContent: "center", // Vertically centers the group
              justifyItems: "start", // Left-aligns the text
            }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0.15,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            {/* 1. "what is" */}
            <motion.div
              variants={{
                hidden: { y: 24, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.35, ease: "easeOut" },
                },
              }}
              className="text-5xl text-accent-30"
            >
              what is
            </motion.div>

            {/* 2. name */}
            <motion.div
              variants={{
                hidden: { y: 24, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.38, ease: "easeOut" },
                },
              }}
              className="text-7xl tracking-tightest text-accent-10"
            >
              shota oniani
            </motion.div>

            {/* 3. animated verb ticker */}
            <motion.div
              ref={verbRef}
              variants={{
                hidden: { y: 24, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.4, ease: "easeOut" },
                },
              }}
            >
              <div className="overflow-hidden">
                <AnimatePresence initial={false} mode="wait">
                  <motion.div
                    key={verbs[index]}
                    initial={{ y: "100%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-100%", opacity: 0 }}
                    transition={{
                      duration: 0.2,
                      ease: "easeInOut",
                    }}
                    className="
                    text-7xl
                    tracking-tighter
                    font-bold
                    leading-none
                    py-5
                    pr-2
                    flex
                    items-center
                    bg-linear-to-t
                    from-(--verb-color)
                    to-accent-soft
                    bg-clip-text
                    text-transparent
                  "
                    style={
                      {
                        "--verb-color": verbColor,
                      } as React.CSSProperties
                    }
                  >
                    {verbs[index]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </motion.div>

            {/* 4. "today?" */}
            <motion.div
              variants={{
                hidden: { y: 24, opacity: 0 },
                visible: {
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.35, ease: "easeOut" },
                },
              }}
              className="text-5xl text-accent-30"
            >
              today?
            </motion.div>
          </motion.div>

          {/* Desktop hero (md+) */}
          <div className="hidden md:flex items-center justify-center md:-translate-y-8">
            <motion.div
              className="flex flex-col items-stretch *:font-display px-10"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 0.25, // start slightly after nav
                  },
                },
              }}
              initial="hidden"
              animate="visible"
              transition={{ duration: 0.2, ease: "easeInOut" }}
            >
              {/* Top text */}
              <motion.div
                layout
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                className="self-start text-5xl lg:text-7xl text-accent-30"
              >
                what is
              </motion.div>

              {/* Center line: name + animated verb */}
              <motion.div
                layout
                variants={{
                  hidden: { y: 40, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.5, ease: "easeOut" },
                  },
                }}
                className="flex flex-row items-baseline gap-4 mx-auto"
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <motion.div
                  layout
                  className="text-[5rem] lg:text-9xl tracking-tightest text-accent-10 md:pr-2 lg:pr-3"
                >
                  shota oniani
                </motion.div>

                <motion.div
                  layout
                  className="overflow-hidden inline-flex relative"
                >
                  <AnimatePresence initial={false} mode="popLayout">
                    <motion.div
                      key={verbs[index]}
                      initial={{ y: "100%", opacity: 0 }}
                      animate={{ y: "0%", opacity: 1 }}
                      exit={{ y: "-100%", opacity: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                      }}
                      className="
                        text-[5rem]  
                        lg:text-9xl
                        tracking-tighter
                        font-bold
                        leading-none
                        py-2
                        flex
                        items-center
                        bg-linear-to-t
                        from-(--verb-color)
                        to-accent-soft
                        bg-clip-text
                        text-transparent
                        pr-1
                        md:pl-2
                        lg:pl-3
                        whitespace-nowrap
                      "
                      style={
                        {
                          "--verb-color": verbColor,
                        } as React.CSSProperties
                      }
                    >
                      {verbs[index]}
                    </motion.div>
                  </AnimatePresence>
                </motion.div>
              </motion.div>

              {/* Bottom text */}
              <motion.div
                layout
                variants={{
                  hidden: { y: 30, opacity: 0 },
                  visible: {
                    y: 0,
                    opacity: 1,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                className="self-end text-5xl lg:text-7xl text-accent-30"
              >
                today?
              </motion.div>
            </motion.div>
          </div>
        </div>

        {showScrollHint && (
          <motion.div
            className="fixed inset-x-0 bottom-15 flex justify-end pr-3 md:hidden z-20"
            variants={{
              hidden: { opacity: 0, y: 8 },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.4,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              className="relative flex flex-col items-end gap-1"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {/* Backdrop blur layer */}
              <div className="absolute inset-0 -m-3 mb-0 backdrop-blur-xl bg-primary-50/20 rounded-2xl -z-10" />

              {/* Existing content */}
              <span className="text-xs tracking-tight text-accent-20 font-display text-right relative z-10">
                tap here for <br /> <b>answers</b>
              </span>
              <div className="flex flex-row items-center gap-0 opacity-80 relative z-10">
                <Image
                  src="/icons/nav_down_ledicon_64.png"
                  alt="Scroll down"
                  width={32}
                  height={32}
                  className="h-6 w-6"
                />
                <Image
                  src="/icons/nav_down_ledicon_64.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-9 w-9"
                />
                <Image
                  src="/icons/nav_down_ledicon_64.png"
                  alt=""
                  width={32}
                  height={32}
                  className="h-6 w-6"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </main>
    </div>
  );
}
