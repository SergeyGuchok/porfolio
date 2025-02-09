import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

type Props = {
  company: string;
  role: string;
  description: string;
  achievements: string[];
  technologies: string[];
  period: string;
  onExpand: () => void;
  isExpanded: boolean;
};

export function Card({
  company,
  isExpanded,
  onExpand,
  role,
  description,
  achievements,
  technologies,
  period,
}: Props) {
  return (
    <motion.div
      className="bg-secondary rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ease-in-out"
      onClick={onExpand}
      layout
    >
      <div className="p-3 sm:p-4 md:p-6">
        <div className="flex flex-row sm:items-center justify-between gap-2">
          <div className="space-y-1">
            <h3 className="font-semibold text-primary text-base sm:text-lg">{role}</h3>
            <p className="text-xs sm:text-sm text-gray-400">
              {company} • {period}
            </p>
          </div>
          <motion.div
            animate={{ rotate: isExpanded ? 180 : 0 }}
            transition={{ duration: 0.2 }}
            className="self-center"
          >
            <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-zinc-400" />
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
          <div className="pt-3 sm:pt-4 space-y-3 sm:space-y-4">
            <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{description}</p>

            <div className="space-y-2">
              <h4 className="text-xs sm:text-sm font-medium text-primary">Key Achievements:</h4>
              <ul className="list-disc list-inside space-y-1.5">
                {achievements.map((achievement, i) => (
                  <li key={i} className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-1.5 sm:px-2 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-primary/10 text-primary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
