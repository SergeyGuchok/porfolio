"use client";
import { Preview } from "src/screens/Preview";
import { Header } from "src/components/Header";
import { TechStack } from "src/screens/TechStack";
import { Experience } from "src/screens/Experience";
import { Feedback } from "src/screens/Feedback/Feedback";
import { ScrollProgress } from "src/components/ScrollProgress";

export default function Page() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <Preview />
      <TechStack />
      <Experience />
      <Feedback />
    </>
  );
}
