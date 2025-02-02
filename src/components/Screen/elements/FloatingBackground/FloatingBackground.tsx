import { useState, useEffect } from "react";
import type { MotionValue } from "motion/react";

import { motion, useTransform } from "motion/react";

type Props = {
  index: number;
  springX: MotionValue;
  springY: MotionValue;
};

export function FloatingBackground({ index, springX, springY }: Props) {
  const [randXPos, setRandXPos] = useState<number>();
  const [randYPos, setRandYPos] = useState<number>();
  const xTransform = useTransform(springX, (x) => x * ((index % 3) - 1) * 0.3);
  const yTransform = useTransform(springY, (y) => y * ((index % 3) - 1) * 0.3);

  useEffect(() => {
    setRandYPos(Math.random() * 100);
    setRandXPos(Math.random() * 100);
  }, []);

  if (!randXPos || !randYPos) {
    return null;
  }

  const renderBackground = () => {
    return (
      <>
        <div className="absolute inset-0 z-0" />
        <motion.div
          className="absolute h-24 w-24 border border-gray-400/20 dark:border-gray-300/20"
          style={{
            left: `${randXPos}%`,
            top: `${randYPos}%`,
            transform: "rotate3d(1, 1, 1, 45deg)",
            x: xTransform,
            y: yTransform,
          }}
        />
      </>
    );
  };
  return <div className="absolute inset-0">{renderBackground()}</div>;
}
