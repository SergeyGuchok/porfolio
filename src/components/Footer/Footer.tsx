import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-zinc-500 flex items-center justify-center absolute bottom-8 left-1/2 -translate-x-1/2 z-200"
    >
      @ 2025 Sergey Guchok
    </motion.footer>
  );
}
