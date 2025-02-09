import { useState } from "react";
import { motion } from "motion/react";

import { Screen } from "src/components/Screen";
import { ScreenHeader } from "src/components/ScreenHeader";
import { useMediaQuery } from "src/hooks/useMediaQuery";
import { experiences } from "src/screens/Experience/constants/experience";
import { Card } from "src/screens/Experience/elements/Card";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number>();

  const handleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? undefined : index));
  };

  const isSmallScreen = useMediaQuery("(max-width: 640px)");

  const experiencesToRender = isSmallScreen ? experiences.slice(0, 3) : experiences;

  return (
    <Screen>
      <div className="flex flex-col w-full">
        <ScreenHeader title="Work Experience" subtitle="My professional journey" />
        <div className="relative space-y-4 sm:space-y-6">
          {experiencesToRender.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative sm:pl-8 pl-4"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{
                  height: index === experiences.length - 1 ? "100%" : "130%",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`absolute left-0 top-6 w-[2px] bg-primary ${index === experiences.length - 1 ? "h-0" : ""}`}
              />

              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                  delay: index * 0.1,
                }}
                className="absolute left-[-4px] sm:left-[-5px] top-6 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary transition-colors duration-200"
              />

              <Card
                isExpanded={expandedIndex === index}
                onExpand={() => handleExpand(index)}
                company={exp.company}
                role={exp.role}
                description={exp.description}
                achievements={exp.achievements}
                technologies={exp.technologies}
                period={exp.period}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </Screen>
  );
}
