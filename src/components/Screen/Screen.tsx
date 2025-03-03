"use client";

import type { ReactNode } from "react";
import { HTMLProps, useRef } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "motion/react";

import { FloatingBackground } from "src/components/Screen/elements/FloatingBackground";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { cn } from "src/utils/cn";

interface ParallaxSectionProps {
  children: ReactNode;
  footer?: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
  hasFloatingBackground?: boolean;
  hasReducedHeight?: boolean;
}

export function Screen({
  children,
  footer,
  className,
  hasFloatingBackground,
  hasReducedHeight,
}: ParallaxSectionProps) {
  const isSmallScreen = useMediaQuery("(max-width: 640px)");
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

  console.log(y, opacity);

  return (
    <section
      ref={ref}
      onMouseMove={hasFloatingBackground ? handleMouseMove : undefined}
      className={cn(
        "relative w-screen h-[100dvh] overflow-hidden 2xl:px-20 xl:px-12 lg:px-[28px] md:px-[20px] sm:px-[16px] px-[12px] py-4",
        className,
        hasReducedHeight && "h-[calc(100dvh-100px)]"
      )}
    >
      <motion.div
        style={isSmallScreen ? {} : { y, opacity }}
        className={cn(
          "z-10 w-full flex justify-between items-center h-full",
          !!footer && "h-[calc(100vh-64px)]"
        )}
      >
        {hasFloatingBackground
          ? Array.from({ length: 20 }, (_, index) => (
              <FloatingBackground springX={springX} springY={springY} index={index} key={index} />
            ))
          : null}
        {children}
      </motion.div>
      {!!footer ? footer : null}
    </section>
  );
}
