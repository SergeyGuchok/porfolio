import { Screen } from "src/components/Screen";
import { Name } from "src/screens/Preview/elements/Name";
import { motion, useScroll, useSpring } from "motion/react";
import { Button } from "src/components/Button";
import { Github, Linkedin, Mail } from "lucide-react";
import { CallToScroll } from "src/screens/Preview/elements/CallToScroll";
import {
  h1MotionVariants,
  h2MotionVariants,
  badgeMotionVariants,
  buttonsMotionVariants,
} from "src/screens/Preview/constants/motionVariants";
import { useEffect, useRef, useState } from "react";

export function Preview() {
  const [isShown, setIsShown] = useState(true);

  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Screen footer={!hasScrolled ? <CallToScroll /> : false}>
      <motion.div className="flex justify-center items-start flex-col gap-2 lg:gap-4">
        <motion.p
          {...badgeMotionVariants}
          className="inline border border-primary rounded-xl px-2 py-1 font-normal"
        >
          Available for work
        </motion.p>
        <motion.h1
          {...h1MotionVariants}
          className="text-3xl font-bold mb-0 2xl:text-6xl lg:mb-2 xl:text-5xl lg:text-4xl"
        >
          Senior Software Engineer
        </motion.h1>
        <motion.h2
          {...h2MotionVariants}
          className="font-normal text-lg leading-loose max-w-[800px] xl:text-2xl lg:text-xl lg:leading-loose"
        >
          I build exceptional digital experiences that combine elegant design
          with robust functionality.
        </motion.h2>
        <motion.div
          {...buttonsMotionVariants}
          className="flex w-full flex-col gap-3 md:gap-6 md:flex-row md:w-auto"
        >
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
        </motion.div>
      </motion.div>
      <Name />
    </Screen>
  );
}
