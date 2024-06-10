"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

type FeatureCardProps = {
  number: number;
  title: string;
  description: string;
};

export default function FeatureCard({
  number,
  title,
  description,
}: FeatureCardProps) {
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center">
        {/* <div className="flex flex-col items-center rounded-xl p-3">
        <div className="rounded-xl w-fit mb-4 backdrop-blur-sm p-3 bg-gradient-to-b from-[#1e212a] to-[#16171f]">
          <Icon
            icon={icon}
            className="h-5 w-5 text-white dark:text-primary-blue"
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
      </div> */}

        <div className="flex items-center gap-4 rounded-md w-full">
          <div className="p-6 flex items-center rounded-lg bg-zinc-800/10 shadow-2xl">
            <div
              className={`w-[33px] h-[33px] flex items-center justify-center text-sm font-semibold`}
            >
              {number}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold max-w-3xl">{title}</h1>
            <p className="text-sm">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
