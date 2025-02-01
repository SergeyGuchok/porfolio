"use client";

import { Screen } from "src/components/Screen";
import { Name } from "src/screens/Preview/elements/Name";
import { motion } from "motion/react";
import { Button } from "src/components/Button";
import { Github, Linkedin, Mail } from "lucide-react";

const h2MotionProps = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1,
    delay: 0.6,
  },
};

const h1MotionProps = {
  initial: {
    opacity: 0,
    x: -20,
  },
  animate: {
    opacity: 1,
    x: 0,
  },
  transition: {
    duration: 1,
    delay: 0.2,
  },
};

const badgeMotionProps = {
  initial: {
    opacity: 0,
    y: -20,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  transition: {
    duration: 1,
    delay: 0.6,
  },
};

export function Preview() {
  return (
    <Screen>
      <motion.div className="w-full h-full flex justify-center items-start flex-col gap-4">
        <motion.p
          {...badgeMotionProps}
          className="inline border border-primary rounded-xl px-2 py-1 font-normal"
        >
          Available for work
        </motion.p>
        <motion.h1 {...h1MotionProps} className="text-6xl font-bold mb-2">
          Senior Software Engineer
        </motion.h1>
        <motion.h2
          {...h2MotionProps}
          className="font-normal text-2xl leading-loose max-w-[800px]"
        >
          I build exceptional digital experiences that combine elegant design
          with robust functionality.
        </motion.h2>
        <div className="flex gap-6">
          <Button type="anchor" link="mailto:gck.sergey@gmail.com">
            <Mail className="mr-2 h-4 w-4" />
            Contact me
          </Button>
          <Button
            variant="outline"
            type="anchor"
            link="https://github.com/SergeyGuchok"
          >
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button
            variant="outline"
            type="anchor"
            link="https://www.linkedin.com/in/sergey-guchok-b7418818b/"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </div>
      </motion.div>
      <Name />
    </Screen>
  );
}
