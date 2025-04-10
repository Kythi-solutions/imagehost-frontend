"use client";
import { useContext, useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Index/Navbar";
import SideCard from "@/components/sidebar/sideCard";
import Step1 from "@/components/steploader/step1";
import Step2 from "@/components/steploader/step2";
import Step3 from "@/components/steploader/step3";
import Step4 from "@/components/steploader/step4";

import { StepContext } from "@/components/steploader/context";

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

  // api.req("/@me", bearer);
  // registered == true
  // if not:
  //  ask to create acc
  // if yes:
  //  redirect to dashboard

  const { currentStep, handleSetCurrentStep, form } = useContext(StepContext);

  const steps = [
    <Step1 key={0} />,
    <Step2 key={1} />,
    <Step3 key={2} />,
    <Step4 key={3} />,
  ];

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
      <div className="flex h-screen ">
        <div className="flex flex-col w-full items-center justify-center p-12">
          <div className="max-w-lg w-full">{steps[currentStep - 1]}</div>
        </div>
        <div className="flex-col lg:max-w-2xl w-full bg-[#f2f3f5] dark:bg-background-primary h-full dark:text-white p-12 space-y-6 lg:block hidden">
          <div className="grid gap-20 mt-32">
            <motion.div
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={cardVariants}
            >
              <SideCard
                number={1}
                title="A little bit about yourself"
                description="Please provide some information, we will use this to create your account."
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
                  title="Pick a plan"
                  description="Select a plan that feels right for you, you can always switch your plan later."
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
                  title="Personalize"
                  description="Add some personal touches to your account to truly customise your file sharing experience."
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
                  title="Authentication"
                  description="We have two methods of multi-factor authentication, choose one that suits you best to secure your account."
                />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
