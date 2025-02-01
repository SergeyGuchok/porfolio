"use client";

import { useState } from "react";

import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

type Props = {
  company: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
  period: string;
};

export function Card({
  company,
  role,
  description,
  achievements,
  technologies,
  period,
}: Props) {
  const [isExpanded, setIsExpanded] = useState<boolean>();

  const handleExpand = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <>
      <motion.div
        className={`
              bg-secondary rounded-lg overflow-hidden cursor-pointer
              transition-all duration-300 ease-in-out
            `}
        onClick={handleExpand}
        layout
      >
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h3 className="font-semibold text-primary">{role}</h3>
              <p className="text-sm text-gray-400">
                {company} • {period}
              </p>
            </div>
            <motion.div
              animate={{ rotate: isExpanded ? 180 : 0 }}
              transition={{ duration: 0.2 }}
            >
              <ChevronDown className="h-5 w-5 text-zinc-400" />
            </motion.div>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
            className="overflow-hidden"
          >
            <div className="pt-4 space-y-4">
              <p className="text-sm text-zinc-400">{description}</p>

              <div className="space-y-2">
                <h4 className="text-sm font-medium text-primary">
                  Key Achievements:
                </h4>
                <ul className="list-disc list-inside space-y-1">
                  {achievements.map((achievement, i) => (
                    <li key={i} className="text-sm text-zinc-400">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
