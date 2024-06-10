import React, { useEffect, useContext, useState } from "react";
import { StepContext } from "./context";
import PlanCard from "@/components/register/planCard";

// import arcadeIcon from "../assets/img/icon-arcade.svg";
// import advancedIcon from "../assets/img/icon-advanced.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../shadcn/button";
import Buttons from "../register/buttons";
import { AnimatedSubscribeButton } from "../animations/animated-subscribe-button";
import { Icon } from "@iconify/react/dist/iconify.js";

const Step4 = () => {
  const { handleSetCurrentStep, currentStep, form } = useContext(StepContext);
  const [yearly, setYearly] = useState(false);
  const [chosenPlan, setChosenPlan] = useState(true as any);

  useEffect(() => {
    const handleBackButtonPress = (e: any) => {
      if (e.key === "Backspace" || e.key === "Back") {
        e.preventDefault();
        handleSetCurrentStep(3);
      }
    };

    document.addEventListener("keydown", handleBackButtonPress);

    return () => {
      document.removeEventListener("keydown", handleBackButtonPress);
    };
  }, [handleSetCurrentStep]);

  const plans = [
    { name: "Free", icon: "lucide:circle-plus", price: -1, },
    { name: "Basic", icon: "lucide:circle-plus", price: 12, },

  ];

  const handlePlan = (val: any) => {
    setChosenPlan(val);
  };

  const handleSubmit = () => {
    if (chosenPlan) {
      handleSetCurrentStep(currentStep + 1);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="">
        <div className="  relative z-20">
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ delay: 0.1 }}
            className="text-content mb-4 md:mb-6"
          >
            <h1 className="text-2xl md:text-4xl font-semibold mb-2">
              Authentication
            </h1>
            <p className="text-gray-cool text-sm">
              Select which multi-factor authentication method best suits you.
            </p>
          </motion.div>


          <div className="flex flex-col md:flex-row gap-2">
            <AnimatedSubscribeButton
              classNames={"w-full "}
              brand="#ffbd7a"
              subscribeStatus={false}
              buttonTextColor="#000009"
              initialText={
                <span className="group inline-flex items-center">
                  Email{" "}
                  {/* <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  {/* <CheckIcon className="mr-2 h-4 w-4" /> */}
                  <Icon icon={"lucide:check"} className="mr-2 h-4 w-4" />
                  Subscribed{" "}
                </span>
              }
            />
            <AnimatedSubscribeButton
              classNames={"w-full py-8 md:py-8 px-4"}
              brand="#ffbd7a"
              subscribeStatus={false}
              buttonTextColor="#000009"
              initialText={
                <span className="group inline-flex items-center">
                  Authenticator App{" "}
                  {/* <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" /> */}
                </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  {/* <CheckIcon className="mr-2 h-4 w-4" /> */}
                  <Icon icon={"lucide:check"} className="mr-2 h-4 w-4" />
                  Subscribed{" "}
                </span>
              }
            />
          </div>

        </div>
        <div className="flex-1 flex items-end py-5 md:p-0">
          <div className="w-full flex items-center justify-between">
            {/* <Button
              onClick={() => {
                // handleData2(chosenPlan);
                handleSetCurrentStep(1);
              }}
              className=""
            >
              Go Back
            </Button> */}
            {/* <ButtonPrimary
              name={"Next Step"}
              onClick={handleSubmit}
              inactive={chosenPlan ? false : true}
            /> */}
            <Buttons handleclick={handleSubmit} />
          </div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Step4;
