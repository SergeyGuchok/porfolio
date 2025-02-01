"use client";

import { motion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  // Add spring physics for smooth animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      {/* Fixed progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-2 bg-primary origin-[0%] z-50"
        style={{ scaleX }}
      />

      {/* Transparent spacer to prevent content jump */}
      <div className="h-1" aria-hidden="true" />
    </>
  );
}
