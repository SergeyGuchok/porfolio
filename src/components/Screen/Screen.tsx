"use client";

import { HTMLProps, useRef } from "react";
import type { ReactNode } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react";
import { cn } from "src/utils/cn";
import { FloatingBackground } from "src/components/Screen/elements/FloatingBackground";

interface ParallaxSectionProps {
  children: ReactNode;
  footer?: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  hasFloatingBackground?: boolean;
}

export function Screen({
  children,
  footer,
  className,
  hasFloatingBackground,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

  const springConfig = { damping: 25, stiffness: 400 };
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    mouseX.set((clientX - left - width / 2) / 4);
    mouseY.set((clientY - top - height / 2) / 4);
  };

  return (
    <div
      ref={ref}
      onMouseMove={hasFloatingBackground ? handleMouseMove : undefined}
      className={cn(
        "relative w-screen h-screen overflow-hidden 2xl:px-48",
        className,
      )}
    >
      <motion.div
        style={{ y, opacity }}
        className={`z-10 w-full flex justify-between items-center ${!!footer ? "h-[calc(100%-64px)]" : "h-full"}`}
      >
        {hasFloatingBackground
          ? Array.from({ length: 20 }, (_, index) => (
              <FloatingBackground
                springX={springX}
                springY={springY}
                index={index}
                key={index}
              />
            ))
          : null}
        {children}
      </motion.div>
      {footer ? footer : null}
    </div>
  );
}
