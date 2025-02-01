"use client";
import { Preview } from "src/components/Preview";
import { Header } from "src/components/Header";
import { TechStack } from "src/components/TechStack";
import { Experience } from "src/components/Experience";
import { Feedback } from "src/screens/Feedback/Feedback";

export default function Page() {
  return (
    <>
      <Header />
      <Preview />
      <TechStack />
      <Experience />
      <Feedback />
    </>
  );
}
