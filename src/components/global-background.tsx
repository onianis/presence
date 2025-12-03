"use client";

import { motion } from "framer-motion";

/**
 * GlobalBackground
 *
 * A full-screen, animated gradient layer inspired by Vanta fog.
 * It sits behind all content and is mounted once for the whole app.
 */
export function GlobalBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      style={{
        backgroundColor: "var(--background)",
      }}
    >
      {/* Base large-scale blobs (slower, less movement) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(150% 210% at 0% 0%, rgba(148, 190, 140, 0.05), transparent 40%),
            radial-gradient(210% 180% at 100% 100%, rgba(25, 7, 2, 0.9), transparent 42%),
            radial-gradient(220% 170% at 0% 100%, rgba(53, 15, 6, 0.08), transparent 44%)
          `,
          backgroundBlendMode: "screen",
          backgroundSize: "180% 180%",
          backgroundPosition: "50% 50%",
        }}
        initial={{ scale: 1.3, x: "-4%", y: "-3%", rotate: -4 }}
        animate={{
          scale: [1.3, 1.34, 1.28, 1.32, 1.3],
          x: ["-4%", "2%", "4%", "-2%", "-4%"],
          y: ["-3%", "1%", "4%", "0%", "-3%"],
          rotate: [-4, -1, 1, -2, -4],
        }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* One fine-detail layer (no heavy blend mode) */}
      <motion.div
        className="absolute inset-0 opacity-55"
        style={{
          backgroundImage: `
            radial-gradient(90% 120% at 18% 58%, #e6eb8f, transparent 42%),
            radial-gradient(100% 130% at 67% 38%, rgba(180, 28, 43, 0.32), transparent 60%)
          `,
          backgroundSize: "200% 200%",
          backgroundPosition: "50% 50%",
        }}
        initial={{ scale: 1.35, x: "0%", y: "2%", rotate: -6 }}
        animate={{
          scale: [1.35, 1.38, 1.32, 1.36, 1.35],
          x: ["0%", "2%", "-2%", "3%", "0%"],
          y: ["2%", "-1%", "4%", "0%", "2%"],
          rotate: [-6, -3, 0, -4, -6],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}