import { motion } from "motion/react";

import type { IconType } from "src/icons";
import { ICON_MAPPER } from "src/screens/TechStack/elements/constants/iconMapper";
import { motionVariants } from "src/screens/TechStack/elements/constants/motionVariants";

type Props = {
  name: string;
  description: string;
  icon: IconType;
};

export function Tech({ name, description, icon }: Props) {
  const Icon = ICON_MAPPER[icon];

  return (
    <motion.div
      variants={motionVariants}
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
      className="lg:rounded-lg bg-background cursor-pointer group p-2 md:p-3 lg:p-4 xl:p-6 rounded-md"
    >
      <div className="flex items-center gap-3 lg:gap-4">
        <Icon className="w-4 h-4 lg:w-8 lg:h-8" />
        <div>
          <h3 className="text-sm lg:text-lg font-semibold mb-1 lg:mb-2">
            {name}
          </h3>
          <p className="text-xs lg:text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}
