import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function CallToScroll() {
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
    >
      <p className="text-sm text-gray-400">Scroll to explore</p>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </motion.div>
    </motion.div>
  );
}
