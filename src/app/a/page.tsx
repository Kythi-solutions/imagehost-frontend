"use client";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Index/Navbar";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import SideCard from "@/components/sidebar/sideCard";
import Step1 from "@/components/steploader/step1";
import Step2 from "@/components/steploader/step2";
import Step3 from "@/components/steploader/step3";

import { StepContext } from "@/components/steploader/context";
import Buttons from "@/components/register/buttons";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Register() {
  const [isLoaded, setIsLoaded] = useState(false);

  const { currentStep, handleSetCurrentStep, form } = useContext(StepContext);

  const steps = [<Step1 />, <Step2 />, <Step3 />, <Step1 />];

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => {
        window.removeEventListener("load", handleLoad);
      };
    }
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex h-screen">
        <div className="flex flex-col w-full items-center justify-center p-12">
          <div className="max-w-lg w-full">{steps[currentStep - 1]}</div>
        </div>
        <div className="flex-col lg:max-w-2xl w-full bg-zinc-900/15 h-full text-white p-12 space-y-6 lg:block hidden">
          <div className="grid gap-20 mt-32">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <SideCard
                number={1}
                title="A little bit about yourself"
                description="Please provide your username, email address, and password in the form, We will use this information to create your account."
              />
            </motion.div>
            {currentStep >= 2 && (
              <motion.div
                initial="hidden"
                animate={currentStep >= 2 ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <SideCard
                  number={2}
                  title="Multiple ways to register"
                  description="Register with your email, or with, discord, github or google."
                />
              </motion.div>
            )}
            {currentStep >= 3 && (
              <motion.div
                initial="hidden"
                animate={currentStep >= 3 ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <SideCard
                  number={3}
                  title="Free to use"
                  description="Kythi has a free plan that is available to everyone."
                />
              </motion.div>
            )}
            {currentStep >= 4 && (
              <motion.div
                initial="hidden"
                animate={currentStep >= 4 ? "visible" : "hidden"}
                variants={cardVariants}
              >
                <SideCard
                  number={4}
                  title="Free to use"
                  description="Kythi has a free plan that is available to everyone."
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
