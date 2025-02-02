"use client";

import { AnimatePresence } from "motion/react";

import { Experience } from "src/screens/Experience";
import { Feedback } from "src/screens/Feedback/Feedback";
import { Preview } from "src/screens/Preview";
import { TechStack } from "src/screens/TechStack";

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
