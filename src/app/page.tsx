"use client";

import { Preview } from "src/screens/Preview";
import { TechStack } from "src/screens/TechStack";
import { Experience } from "src/screens/Experience";
import { Feedback } from "src/screens/Feedback/Feedback";

export default function Page() {
  return (
    <>
      <Preview />
      <TechStack />
      <Experience />
      <Feedback />
    </>
  );
}
