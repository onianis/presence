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
      {/* Base large-scale blobs (slow, rich, darker) */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(150% 210% at 0% 0%, rgba(148, 190, 140, 0), transparent 40%),
            radial-gradient(210% 180% at 100% 100%, rgba(25, 7, 2, 1), transparent 42%),
            radial-gradient(220% 170% at 0% 100%, rgba(53, 15, 6, 0.1), transparent 44%),
            radial-gradient(180% 180% at 100% 0%, rgba(25, 7, 2, 0.906), transparent 46%),
            radial-gradient(260% 260% at 50% 50%, rgba(38, 39, 28, 0), transparent 60%)
          `,
          backgroundBlendMode: "screen",
          backgroundSize: "260% 260%",
          backgroundPosition: "50% 50%",
        }}
        // Oversize & slightly rotated container, then animate transforms only
        initial={{ scale: 1.45, x: "-6%", y: "-4%", rotate: -6 }}
        animate={{
          scale: [1.45, 1.50, 1.42, 1.48, 1.45],
          x: ["-6%", "4%", "7%", "-3%", "-6%"],
          y: ["-4%", "2%", "7%", "0%", "-4%"],
          rotate: [-6, -2, 2, -1, -6],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Mid-scale layer with varied shapes & rotation */}
      <motion.div
        className="absolute inset-0 mix-blend-screen opacity-80"
        style={{
          backgroundImage: `
            radial-gradient(120% 90% at 12% 28%, rgba(148, 190, 140, 0.1), transparent 34%),
            radial-gradient(85% 150% at 72% 12%, rgba(148, 190, 140, 0.26), transparent 36%),
            radial-gradient(130% 115% at 96% 78%, rgba(180, 28, 43, 0.26), transparent 32%),
            radial-gradient(130% 110% at 10% 90%, rgba(99, 11, 12, 0.2), transparent 34%),
            linear-gradient(135deg, rgba(72, 73, 48, 0.50), transparent 65%)
          `,
          backgroundSize: "290% 290%",
          backgroundPosition: "50% 50%",
        }}
        initial={{ scale: 1.55, x: "5%", y: "-7%", rotate: 8 }}
        animate={{
          scale: [1.55, 1.62, 1.50, 1.60, 1.55],
          x: ["5%", "-3%", "4%", "-5%", "5%"],
          y: ["-7%", "-1%", "5%", "-2%", "-7%"],
          rotate: [8, 4, -3, 5, 8],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Fine-detail layer for lively, richer edges */}
      {/* Fine-detail layer for lively, richer edges */}
      <motion.div
        className="absolute inset-0 mix-blend-soft-light opacity-70"
        style={{
          backgroundImage: `
            radial-gradient(90% 120% at 18% 58%, #e6eb8f, transparent 40%),
            radial-gradient(100% 130% at 67% 38%, rgba(180, 28, 43, 0.38), transparent 60%),
            radial-gradient(95% 120% at 47% 92%, rgba(72, 73, 48, 0.38), transparent 40%),
            radial-gradient(110% 140% at 82% 15%, rgba(99, 11, 12, 0.42), transparent 26%),
            linear-gradient(215deg, rgba(38, 39, 28, 0.52), transparent 70%)
          `,
          backgroundSize: "330% 330%",
          backgroundPosition: "50% 50%",
        }}
        initial={{ scale: 1.65, x: "-4%", y: "4%", rotate: -10 }}
        animate={{
          scale: [1.65, 1.72, 1.60, 1.70, 1.65],
          x: ["-4%", "3%", "-2%", "5%", "-4%"],
          y: ["4%", "-1%", "7%", "1%", "4%"],
          rotate: [-10, -6, -1, -8, -10],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}