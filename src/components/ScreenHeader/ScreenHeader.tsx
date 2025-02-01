"use client";

import { motion } from "motion/react";

type Props = {
  title: string;
  subtitle?: string;
};

const headerVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 0.5,
  },
};

export function ScreenHeader({ title, subtitle }: Props) {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      variants={headerVariants}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      {subtitle ? <p className="text-gray-400 mt-2">{subtitle}</p> : null}
    </motion.div>
  );
}
