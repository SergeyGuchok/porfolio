"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { motion } from "motion/react";

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const knobX = theme === "dark" ? 40 : 0;

  return (
    <div className="fixed lg:top-24 lg:right-24 z-20 top-8 right-8">
      <button
        onClick={toggleTheme}
        aria-label="Toggle theme"
        className="relative h-10 w-20 rounded-full p-2 bg-primary/20 transition-colors duration-500 hover:bg-zinc-700/30 dark:hover:bg-zinc-300/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
      >
        <motion.div
          className="absolute top-1 left-1 h-8 w-8 rounded-full"
          initial={{ x: knobX }}
          animate={{ x: knobX }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
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
