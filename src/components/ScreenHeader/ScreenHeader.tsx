import { motion } from "motion/react";
import { motionVariants } from "src/components/ScreenHeader/constants/motionVariants";

type Props = {
  title: string;
  subtitle?: string;
};

export function ScreenHeader({ title, subtitle }: Props) {
  return (
    <motion.div
      whileInView="visible"
      initial="hidden"
      variants={motionVariants}
      viewport={{ once: true }}
      className="mb-12"
    >
      <h3 className="text-3xl font-bold">{title}</h3>
      {subtitle ? <p className="text-gray-400 mt-2">{subtitle}</p> : null}
    </motion.div>
  );
}
