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
        <div
          onClick={() => handleSetCurrentStep(number)}
          className={`flex items-center gap-4 rounded-md w-full hover:dark:bg-zinc-800/30 hover:bg-card cursor-pointer p-2 duration-300 ${
            currentStep === number ? "dark:bg-zinc-800/30 bg-card" : ""
          }`}
        >
          <div className="p-6 flex items-center rounded-lg dark:bg-zinc-800/10 shadow-2xl">
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
