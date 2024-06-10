"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import FeatureCard from "./FeatureCard";

export default function Features() {
  const { ref, inView } = useInView({ threshold: 0.5, triggerOnce: true });

  const animate = inView
    ? { opacity: 1, y: 0, transition: { delay: 0.2 } }
    : { opacity: 0, y: 20, transition: { delay: 0.2 } };
  const transition = { duration: 0.1, ease: "easeInOut" };

  return (
    <>
      <section className="flex flex-col gap-24 justify-center items-center mb-24">
        <motion.div
          className="flex flex-col gap-2 px-4"
          ref={ref}
          animate={animate}
          transition={transition}
        >
          <h1 className="text-5xl font-medium text-center text-primary-white max-w-3xl">
            Why Kythi?
          </h1>

          <p className="text-center mt-5 max-w-2xl font-light">
            Kythi has many beneficial features that make it stand out from the
            rest. Here are some of our favorites.
          </p>
        </motion.div>
        <div className="flex gap-8 flex-col sm:flex-row">
          <FeatureCard
            delay={0.35}
            icon="lucide:gauge"
            title="Lightning fast"
            description="Kythi is built on the latest and greatest technology, allowing for blazing fast upload and download speeds."
          />
          <FeatureCard
            delay={0.45}
            icon="lucide:infinity"
            title="Limitless uploads"
            description="Kythi will never limit your uploads. You can upload as many files as you want, whenever you want."
          />
          <FeatureCard
            delay={0.55}
            icon="lucide:scan-face"
            title="Privacy focused"
            description="Kythi's main priority is your privacy. We store the bare minimum, and your data will never be sold to third parties."
          />
        </div>
      </section>
    </>
  );
}
