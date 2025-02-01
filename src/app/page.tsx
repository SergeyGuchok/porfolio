"use client";
import { Preview } from "src/components/Preview";
import { Header } from "src/components/Header";
import { TechStack } from "src/components/TechStack";
import { Experience } from "src/components/Experience";

export default function Page() {
  return (
    <>
      <Header />
      <Preview />
      <TechStack />
      <Experience />
    </>
  );
}
