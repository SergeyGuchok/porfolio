import { Screen } from "src/components/Screen";
import { ScreenHeader } from "src/components/ScreenHeader";
import { motion } from "motion/react";
import { Card } from "src/screens/Experience/elements/Card";
import { useState } from "react";
import { experiences } from "src/screens/Experience/constants/experience";

export function Experience() {
  const [expandedIndex, setExpandedIndex] = useState<number>();

  const handleExpand = (index: number) => {
    setExpandedIndex((prev) => (prev === index ? undefined : index));
  };

  return (
    <Screen>
      <div className="flex-col flex">
        <ScreenHeader
          title="Work Experience"
          subtitle="My professional journey"
        />
        <div className="relative space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative pl-8"
            >
              <motion.div
                initial={{ height: 0 }}
                whileInView={{
                  height: index === experiences.length - 1 ? "100%" : "130%",
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
              absolute left-0 top-6 w-[2px] bg-primary
              ${index === experiences.length - 1 ? "h-0" : ""}
            `}
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
                className={`
              absolute left-[-5px] top-6 w-3 h-3 rounded-full 
              bg-primary
              transition-colors duration-200
            `}
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
