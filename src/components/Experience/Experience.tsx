"use client";

import { Screen } from "src/components/Screen";
import { ScreenHeader } from "src/components/ScreenHeader";
import { motion } from "motion/react";
import { Card } from "src/components/Experience/elements/Card";

const experiences = [
  {
    company: "Tech Innovators",
    role: "Senior Full Stack Developer",
    period: "2022 - Present",
    description:
      "Led development of a cloud-based SaaS platform, improving system performance by 40%. Mentored junior developers and implemented modern development practices.",
    technologies: ["Next.js", "TypeScript", "AWS", "PostgreSQL"],
    achievements: [
      "Reduced deployment time by 60% through CI/CD optimization",
      "Implemented real-time features serving 100k+ concurrent users",
      "Led a team of 5 developers across 3 major product releases",
    ],
  },
  {
    company: "Digital Solutions Inc",
    role: "Full Stack Developer",
    period: "2020 - 2022",
    description:
      "Developed and maintained multiple client projects. Implemented responsive designs and optimized application performance.",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    achievements: [
      "Reduced page load time by 45% through optimization",
      "Implemented automated testing, achieving 90% coverage",
      "Developed reusable component library used across projects",
    ],
  },
  {
    company: "StartUp Labs",
    role: "Frontend Developer",
    period: "2019 - 2020",
    description:
      "Built interactive user interfaces and implemented responsive designs. Collaborated with designers to ensure pixel-perfect implementations.",
    technologies: ["React", "TypeScript", "SCSS", "Redux"],
    achievements: [
      "Created responsive layouts used by 50k+ daily users",
      "Reduced bundle size by 35% through code splitting",
      "Implemented A/B testing framework for UI components",
    ],
  },
  {
    company: "WebTech Solutions",
    role: "Junior Developer",
    period: "2018 - 2019",
    description:
      "Developed and maintained web applications, focusing on frontend implementation and bug fixes. Collaborated in an agile team environment.",
    technologies: ["JavaScript", "Vue.js", "CSS3", "Git"],
    achievements: [
      "Contributed to 20+ successful feature deployments",
      "Improved site accessibility to WCAG 2.1 standards",
      "Developed internal documentation system",
    ],
  },
  {
    company: "CodeCraft Academy",
    role: "Development Intern",
    period: "2018",
    description:
      "Assisted in developing educational platforms and learning materials. Gained hands-on experience with modern web technologies.",
    technologies: ["HTML5", "CSS3", "JavaScript", "PHP"],
    achievements: [
      "Built interactive learning modules used by 1000+ students",
      "Contributed to the development of 5 course projects",
      "Received 'Outstanding Intern' recognition",
    ],
  },
];

export function Experience() {
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
              viewport={{ once: true, margin: "-100px" }}
              className="relative pl-8"
            >
              {/* Timeline line segment */}
              <motion.div
                initial={{ height: 0 }}
                whileInView={{
                  height: index === experiences.length - 1 ? "100%" : "130%",
                }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`
              absolute left-0 top-6 w-[2px] bg-primary
              ${index === experiences.length - 1 ? "h-0" : ""}
            `}
              />

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
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
