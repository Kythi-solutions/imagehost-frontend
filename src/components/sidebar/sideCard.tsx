"use client";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { StepContext } from "../steploader/context";
import { useContext, useEffect, useState } from "react";

type sideCardProps = {
  number: number;
  title: string;
  description: string;
};

export default function SideCard({
  number,
  title,
  description,
}: sideCardProps) {
  const { currentStep, handleSetCurrentStep } = useContext(StepContext);
  const steps = [0, 1, 2, 3];
  return (
    <>
      <div className="flex flex-col gap-6 items-center justify-center">
  {/*      <div
          onClick={() => handleSetCurrentStep(number)}
          className={`flex items-center gap-4 rounded-md w-full hover:dark:bg-secondaryLighterHover hover:bg-card cursor-pointer p-4 pr-8  duration-300 border-solid border-2 border-secondaryLighterHover ${
            currentStep === number ? "dark:bg-secondaryLighter bg-card" : ""
          }`}
        >*/}
                  <div
          onClick={() => handleSetCurrentStep(number)}
          className={`flex items-center gap-4 rounded-lg w-full hover:dark:bg-secondaryLighterHover hover:bg-card cursor-pointer bg-transparent p-4 pr-8  duration-300  ${
            currentStep === number ? "bg-card dark:bg-secondaryLighter border-solid border-2 border-secondaryLighterHover" : ""
          }`}
        >
          <div className="p-6 flex items-center rounded-lg dark:bg-secondaryAlternative shadow-lg">
            <div
              className={`w-[33px] h-[33px] flex items-center justify-center text-xl font-semibold`}
            >
              {number}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h1 className="text-xl font-semibold max-w-3xl">{title}</h1>
            <p className="text-sm dark:text-zinc-400">{description}</p>
          </div>
        </div>
      </div>
    </>
  );
}
