"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FeatureCardProps = {
  icon: string;
  title: string;
  description: string;
  delay: number;
};

export default function FeatureCard({
  icon,
  title,
  description,
  delay,
}: FeatureCardProps) {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const animate = inView
    ? { opacity: 1, y: 0, transition: { delay: delay } }
    : { opacity: 0, y: 20, transition: { delay: delay } };
  const transition = { duration: 0.1, ease: "easeInOut" };

  return (
    <motion.div
      className="flex flex-col gap-6 items-center justify-center"
      ref={ref}
      animate={animate}
      transition={transition}
    >
      <div className="flex flex-col items-center rounded-xl p-3">
        <div className="rounded-xl w-fit mb-4 backdrop-blur-sm p-3 bg-gradient-to-b from-[#1e212a] to-[#16171f]">
          <Icon
            icon={icon}
            className="h-5 w-5 text-white dark:text-purple-400"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-xl font-medium text-center  max-w-3xl">
            {title}
          </h1>

          <p className="text-center max-w-xs font-light text-sm ">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
