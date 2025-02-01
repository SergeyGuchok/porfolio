import { motion } from "motion/react";

import type { IconType } from "src/icons";
import {
  Docker,
  Tanstack,
  Next,
  React,
  Mongo,
  TypeScript,
  Supabase,
  Sequelize,
  TailwindCSS,
} from "src/icons";

type Props = {
  name: string;
  description: string;
  icon: IconType;
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ICON_MAPPER = {
  react: React,
  next: Next,
  typescript: TypeScript,
  tailwind: TailwindCSS,
  supabase: Supabase,
  tanstack: Tanstack,
  docker: Docker,
  mongo: Mongo,
  sequelize: Sequelize,
};

export function Tech({ name, description, icon }: Props) {
  const Icon = ICON_MAPPER[icon];

  return (
    <motion.div
      variants={cardVariants}
      drag
      dragSnapToOrigin
      dragTransition={{
        bounceStiffness: 600,
        bounceDamping: 30,
      }}
      dragElastic={0.3}
      whileDrag={{
        scale: 1.05,
      }}
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
      className="p-6 rounded-lg bg-background cursor-pointer group"
    >
      <div className="flex items-center gap-4">
        <Icon className="w-8 h-8" />
        <div>
          <h3 className="font-semibold mb-2">{name}</h3>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
