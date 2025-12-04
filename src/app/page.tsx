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

  const heroRef = useRef<HTMLDivElement | null>(null);
  const verbRef = useRef<HTMLDivElement | null>(null);
  const [heroOffset, setHeroOffset] = useState(0);

  const [showScrollHint, setShowScrollHint] = useState(false);

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
    }, 1500); // time between word changes

    return () => clearInterval(interval);
  }, [verbs.length]);

  useEffect(() => {
    const MOBILE_NAVBAR_HEIGHT = 56; // h-14 -> 14 * 4px
    const MD_BREAKPOINT = 768; // Tailwind md

    function recomputeOffset() {
      if (typeof window === "undefined") return;

      // Only apply on mobile; let md+ be controlled purely by CSS
      if (window.innerWidth >= MD_BREAKPOINT) {
        setHeroOffset(0);
        return;
      }

      if (!heroRef.current || !verbRef.current) {
        setHeroOffset(0);
        return;
      }

      const viewportHeight = window.innerHeight;
      const usableHeight = viewportHeight - MOBILE_NAVBAR_HEIGHT;

      const heroRect = heroRef.current.getBoundingClientRect();
      const verbRect = verbRef.current.getBoundingClientRect();

      // Center of verb relative to hero container
      const verbCenter = verbRect.top - heroRect.top + verbRect.height / 2;

      const desiredCenter = usableHeight / 2;

      const offset = Math.max(0, desiredCenter - verbCenter);
      setHeroOffset(offset);
    }

    // Initial compute
    recomputeOffset();

    // Recompute on resize / orientation change
    window.addEventListener("resize", recomputeOffset);
    window.addEventListener("orientationchange", recomputeOffset);

    return () => {
      window.removeEventListener("resize", recomputeOffset);
      window.removeEventListener("orientationchange", recomputeOffset);
    };
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
          min-h-[calc(100vh-3.5rem)]   /* 3.5rem = mobile bottom bar (h-14) */
          flex flex-col
          justify-start
          md:p-10
          pt-10
        "
      >
        <div className="hidden md:flex flex-row flex-wrap w-full justify-around h-full px-5 mx-5 mb-10 gap-y-5 md:gap-y-0 md:px-0 md:mx-0">
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/resume"
          >
            resume
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/projects"
          >
            projects
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/blog"
          >
            blog
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/hashes"
          >
            hashes
          </Link>
          <Link
            className="font-display font-light text-3xl md:text-[2.75rem] text-accent-20 md:text-accent-30 hover:md:text-accent transition-all duration-200 ease-in-out border-t-2 hover:px-2 hover:pt-4"
            href="/about"
          >
            about
          </Link>
        </div>

        <div className="relative w-full">
          <div
            className="marquee-container top-0"
            style={{ top: "-3.5rem" }} // tweak this offset as needed
          >
            <div
              className="marquee-track marquee-text"
              style={{
                animation:
                  "marquee-left var(--marquee-duration, 30s) linear infinite",
              }}
            >
              {[
                "ai security engineer",
                "compsci @ uni tübingen",
                "cybersecurity",
                "offensive security",
                "civic engagement",
                "open source contributor",
              ]
                .join(" // ")
                .concat(" // ")}
              {[
                "ai security engineer",
                "compsci @ uni tübingen",
                "cybersecurity",
                "offensive security",
                "civic engagement",
                "open source contributor",
              ]
                .join(" // ")
                .concat(" // ")}
            </div>
          </div>

          {/* BOTTOM MARQUEE */}
          {/* <div
            className="marquee-container bottom-0"
            style={{ bottom: "-15rem" }} // tweak this offset as needed
          >
            <div
              className="marquee-track marquee-text"
              style={{
                animation:
                  "marquee-right var(--marquee-duration, 30s) linear infinite",
              }}
            >
              {[
                "type-safe fanatic",
                "framer tinkerer",
                "css enjoyer",
                "keyboard nerd",
                "language learner",
              ]
                .join(" // ")
                .concat(" // ")}
              {[
                "type-safe fanatic",
                "framer tinkerer",
                "css enjoyer",
                "keyboard nerd",
                "language learner",
              ]
                .join(" // ")
                .concat(" // ")}
            </div>
          </div> */}

          <motion.div
            ref={heroRef}
            style={{ marginTop: heroOffset }}
            className="grid *:font-display w-full px-3"
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
        </div>

        {showScrollHint && (
          <motion.div
            className="fixed inset-x-0 bottom-[3.5rem] flex justify-end pr-3 md:hidden z-20"
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
              className="flex flex-col items-end gap-1"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 1.6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <span className="text-xs tracking-tight text-accent-20 font-display text-right">
                tap here for <br /> <b>answers</b>
              </span>
              <div className="flex flex-row items-center gap-0 opacity-80">
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
