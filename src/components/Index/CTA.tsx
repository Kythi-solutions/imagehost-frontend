"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../shadcn/button";

export default function CTA() {
  const { ref, inView } = useInView({
    threshold: 0.4,
    triggerOnce: true,
  });

  return (
    <>
      <motion.div
        className="flex flex-col gap-4 items-center justify-center mt-32"
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/logo.svg"
          alt="logo"
          className="w-12 h-12 dark:bg-transparent bg-black dark:p-0 p-2 rounded-full"
        />

        <span className="text-3xl font-medium text-center">
          Ready to get started with Kythi?
        </span>

        <p className="text-center font-light text-sm ">
          Create a free account today and start sharing files within minutes.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 mt-4 flex-col sm:flex-row"
        >
          <Button
            size="xl"
            variant="outline"
            className="active:translate-y-[5px]"
          >
            View demo
          </Button>
          <Button
            onClick={() => (window.location.href = "/register")}
            size="xl"
            variant="default"
            className="active:translate-y-[5px]"
          >
            Get started
          </Button>
        </motion.div>
      </motion.div>
    </>
  );
}
