"use client";

import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "motion/react";

export function Header() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <div className={`fixed right-24 top-24`}>
      <button
        onClick={toggleTheme}
        className={`
        relative h-10 w-20 rounded-full p-2
        bg-zinc-700/20 dark:bg-zinc-300/20
        transition-colors duration-500
        hover:bg-zinc-700/30 dark:hover:bg-zinc-300/30
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary
      `}
        aria-label="Toggle theme"
      >
        <motion.div
          className="absolute top-1 left-1 h-8 w-8 rounded-full"
          initial={{
            x: theme === "dark" ? 40 : 0,
          }}
          animate={{
            x: theme === "dark" ? 40 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          <div className="flex h-full w-full items-center justify-center rounded-full bg-background shadow-sm dark:bg-zinc-950">
            {theme === "dark" ? (
              <Moon className="h-5 w-5 text-primary" key="moon" />
            ) : (
              <Sun className="h-5 w-5 text-primary" key="sun" />
            )}
          </div>
        </motion.div>
      </button>
    </div>
  );
}
