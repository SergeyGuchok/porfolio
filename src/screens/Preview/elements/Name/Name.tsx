"use client";

import { CSSProperties } from "react";
import { motion } from "motion/react";

const draw = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: (i: number) => {
    const delay = i * 0.3;
    return {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
        opacity: { delay, duration: 0.01 },
      },
    };
  },
};

const shape: CSSProperties = {
  strokeWidth: 12,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  fill: "transparent",
};

export function Name() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <motion.svg
        viewBox="0 0 900 450"
        initial="hidden"
        animate="visible"
        className={`
            w-[280px] sm:w-[400px] md:w-[600px] lg:w-[800px] xl:w-[900px]
            h-auto
            stroke-primary
          `}
      >
        <motion.path
          d="M 170 100 C 170 70, 140 60, 110 60 C 80 60, 50 70, 50 100 C 50 130, 80 140, 110 150 C 140 160, 170 170, 170 200 C 170 230, 140 240, 110 240 C 80 240, 50 230, 50 200"
          variants={draw}
          custom={0}
          style={shape}
        />
        <motion.path
          d="M 200 60 L 200 240 M 200 60 L 280 60 M 200 150 L 270 150 M 200 240 L 280 240"
          variants={draw}
          custom={1}
          style={shape}
        />
        <motion.path
          d="M 310 60 L 310 240 M 310 60 C 360 60, 390 90, 390 120 C 390 150, 360 180, 310 180 L 390 240"
          variants={draw}
          custom={2}
          style={shape}
        />
        <motion.path
          d="M 490 150 L 540 150 L 540 200 C 540 230, 510 240, 480 240 C 450 240, 420 230, 420 200 L 420 100 C 420 70, 450 60, 480 60 C 510 60, 540 70, 540 100"
          variants={draw}
          custom={3}
          style={shape}
        />
        <motion.path
          d="M 570 60 L 570 240 M 570 60 L 650 60 M 570 150 L 640 150 M 570 240 L 650 240"
          variants={draw}
          custom={4}
          style={shape}
        />
        <motion.path
          d="M 680 60 L 730 150 M 780 60 L 730 150 L 730 240"
          variants={draw}
          custom={5}
          style={shape}
        />

        <motion.path
          d="M 120 350 L 170 350 L 170 380 C 170 410, 140 420, 110 420 C 80 420, 50 410, 50 380 L 50 310 C 50 280, 80 270, 110 270 C 140 270, 170 280, 170 310"
          variants={draw}
          custom={6}
          style={shape}
        />
        <motion.path
          d="M 200 270 L 200 380 C 200 410, 230 420, 260 420 C 290 420, 320 410, 320 380 L 320 270"
          variants={draw}
          custom={7}
          style={shape}
        />
        <motion.path
          d="M 460 310 C 460 280, 430 270, 400 270 C 370 270, 340 280, 340 310 L 340 380 C 340 410, 370 420, 400 420 C 430 420, 460 410, 460 380"
          variants={draw}
          custom={8}
          style={shape}
        />
        <motion.path
          d="M 490 270 L 490 420 M 490 345 L 560 345 M 560 270 L 560 420"
          variants={draw}
          custom={9}
          style={shape}
        />
        <motion.path
          d="M 590 310 C 590 280, 620 270, 650 270 C 680 270, 710 280, 710 310 L 710 380 C 710 410, 680 420, 650 420 C 620 420, 590 410, 590 380 L 590 310"
          variants={draw}
          custom={10}
          style={shape}
        />
        <motion.path
          d="M 740 270 L 740 420 M 740 345 L 810 270 M 740 345 L 810 420"
          variants={draw}
          custom={11}
          style={shape}
        />
      </motion.svg>
    </div>
  );
}
