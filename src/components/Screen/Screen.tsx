"use client";

import { HTMLProps } from "react";
import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import { cn } from "src/utils/cn";

type Props = {
  children: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
};

export function Screen({ children, className }: Props) {
  return (
    <AnimatePresence mode="wait">
      <div
        className={cn(
          "w-screen h-screen overflow-x-hidden 2xl:px-48",
          className,
        )}
      >
        <div className="w-full h-full flex justify-between items-center">
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
}
