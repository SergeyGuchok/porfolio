import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "motion/react";

import { Button } from "src/components/Button";
import { Screen } from "src/components/Screen";
import {
  buttonsMotionVariants,
  h1MotionVariants,
  h2MotionVariants,
} from "src/screens/Preview/constants/motionVariants";

export function Preview() {
  return (
    <Screen hasReducedHeight>
      <motion.div className="flex justify-center grow items-center flex-col gap-1 xl:gap-3">
        <motion.h1
          {...h1MotionVariants}
          className="text-3xl font-bold text-center 2xl:text-6xl xl:text-5xl"
        >
          Senior Software Engineer
        </motion.h1>
        <motion.h2
          {...h2MotionVariants}
          className="font-normal text-lg leading-loose max-w-[800px] text-center xl:text-2xl"
        >
          I&apos;m a developer with over 7 years of enterprise experience.
        </motion.h2>
        <motion.h3
          {...h2MotionVariants}
          className="font-normal text-lg leading-loose max-w-[600px] text-center xl:text-2xl"
        >
          I like to spend my days building things for customers, and my nights building things for
          myself.
        </motion.h3>
        <motion.div
          {...buttonsMotionVariants}
          className="flex w-full flex-col mt-4 gap-3 md:flex-row md:w-auto"
        >
          <Button size="lg" type="anchor" link="mailto:gck.sergey@gmail.com" data-track="email">
            <Mail className="mr-2 h-4 w-4" />
            Contact me
          </Button>
          <Button
            size="lg"
            variant="outline"
            type="anchor"
            link="https://github.com/SergeyGuchok"
            data-track="github"
          >
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button
            size="lg"
            variant="outline"
            type="anchor"
            link="https://www.linkedin.com/in/sergey-guchok-b7418818b/"
            data-track="linkedin"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            LinkedIn
          </Button>
        </motion.div>
      </motion.div>
    </Screen>
  );
}
