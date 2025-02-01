import { HTMLProps } from "react";
import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";
import { cn } from "src/utils/cn";

type Props = {
  children: ReactNode;
  footer?: ReactNode;
  className?: HTMLProps<HTMLElement>["className"];
};

export function Screen({ children, className, footer }: Props) {
  return (
    <AnimatePresence mode="wait">
      <div
        className={cn(
          "w-screen h-screen overflow-x-hidden 2xl:px-48",
          className,
        )}
      >
        <div
          className={`w-full flex justify-between items-center ${!!footer ? "h-[calc(100%-64px)]" : "h-full"}`}
        >
          {children}
        </div>
        {footer ? footer : null}
      </div>
    </AnimatePresence>
  );
}
