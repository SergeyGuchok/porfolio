"use client";

import { Preview } from "src/screens/Preview";
import { TechStack } from "src/screens/TechStack";
import { Experience } from "src/screens/Experience";
import { Feedback } from "src/screens/Feedback/Feedback";
import { AnimatePresence } from "motion/react";

export default function Page() {
  return (
    <AnimatePresence mode="wait">
      <Preview key="preview" />
      <TechStack key="techstack" />
      <Experience key="experience" />
      <Feedback key="feedback" />
    </AnimatePresence>
  );
}
