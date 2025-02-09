import { motion } from "motion/react";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="text-zinc-500 flex items-center justify-center"
    >
      @ 2025 gcksergey.
    </motion.footer>
  );
}
