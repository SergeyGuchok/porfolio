import { Screen } from "src/components/Screen";
import { motion } from "motion/react";

import { TECH_STACK_PRIMARY } from "src/screens/TechStack/constants/techStack";
import { motionVariants } from "src/screens/TechStack/constants/motionVariants";
import { ScreenHeader } from "src/components/ScreenHeader";
import { Tech } from "src/screens/TechStack/elements/Tech";

import type { IconType } from "src/icons";

export function TechStack() {
  return (
    <Screen className="bg-secondary">
      <div className="flex flex-col w-full">
        <ScreenHeader
          title="Tech Stack"
          subtitle="I've worked with plenty of technologies. Now I mostly work with this:"
        />
        <motion.div
          variants={motionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 w-full"
        >
          {TECH_STACK_PRIMARY.map((tech) => (
            <Tech
              key={tech.name}
              name={tech.name}
              description={tech.description}
              icon={tech.icon as IconType}
            />
          ))}
        </motion.div>
      </div>
    </Screen>
  );
}
