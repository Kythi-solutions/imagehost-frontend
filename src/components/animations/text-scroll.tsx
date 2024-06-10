"use client";

import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import { FC, ReactNode, useEffect, useRef, useState } from "react";
import { MacbookScroll } from "./mac-scroll";

interface TextRevealByWordProps {
  text: string;
  className?: string;
}

export const TextRevealByWord: FC<TextRevealByWordProps> = ({
  text,
  className,
}) => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const words = text.split(" ");

  // Calculate the end point of the last word's range
  const lastWordEnd = 1;

  // Define the opacity transform for "sample text"
  const sampleTextOpacity = useTransform(
    scrollYProgress,
    [lastWordEnd - 0.1, lastWordEnd],
    [0, 1]
  );

  // Define the y transform for "sample text" for fade-up effect
  const sampleTextY = useTransform(
    scrollYProgress,
    [lastWordEnd - 0.1, lastWordEnd],
    [50, 0]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.2, // Adjust threshold as needed to delay activation
      }
    );

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, [targetRef]);

  return (
    <>
      <motion.div
        ref={targetRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        className={cn("relative z-0 h-[200vh]", className)}
      >
        <div
          className={
            "sticky top-0 mx-auto flex h-[50%] max-w-4xl items-center bg-transparent px-[1rem] py-[5rem]"
          }
        >
          <div>
            <p className="text-2xl font-bold text-black dark:text-white md:text-3xl lg:text-3xl mb-8 text-center">
              Not convinced?
            </p>
            <p
              className={
                "flex flex-wrap text-center md:text-left text-2xl font-bold text-black/20 dark:text-white/20 md:text-3xl lg:text-3xl justify-center mx-auto"
              }
            >
              {words.map((word, i) => {
                const start = i / words.length;
                const end = start + 1 / words.length;
                return (
                  <Word key={i} progress={scrollYProgress} range={[start, end]}>
                    {word}
                  </Word>
                );
              })}
            </p>
          </div>
        </div>
      </motion.div>
      <motion.div
        style={{ opacity: sampleTextOpacity, y: sampleTextY }}
        className="-mt-[480px] text-black dark:text-white overflow-hidden w-full"
      >
        <div>
          <MacbookScroll src="/dashboard.png" showGradient={true} />
        </div>
      </motion.div>
    </>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word: FC<WordProps> = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0, 1]);
  return (
    <span className="relative mx-1 lg:mx-1 flex justify-center text-center">
      <span className={"absolute opacity-30 flex"}>{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={"text-black dark:text-white/70"}
      >
        {children}
      </motion.span>
    </span>
  );
};

export default TextRevealByWord;
