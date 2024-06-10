import React, { useEffect, useContext, useState } from "react";
import { StepContext } from "./context";
import PlanCard from "@/components/register/planCard";

// import arcadeIcon from "../assets/img/icon-arcade.svg";
// import advancedIcon from "../assets/img/icon-advanced.svg";
import { AnimatePresence, motion } from "framer-motion";
import { Button } from "../shadcn/button";
import Buttons from "../register/buttons";

const Step2 = () => {
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
    { name: "Free", icon: "lucide:circle-plus", price: -1, type: "monthly" },
    { name: "Basic", icon: "lucide:circle-plus", price: 12, type: "monthly" },
    { name: "Pro", icon: "lucide:circle-plus", price: 15, type: "monthly" },
    {
      name: "Basic",
      icon: "lucide:circle-plus",
      price: 120,
      type: "yearly",
    },
    { name: "Pro", icon: "lucide:circle-plus", price: 150, type: "yearly" },
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
              Select your plan
            </h1>
            <p className="text-gray-cool text-sm">
              Select a plan that feels right for you, you can always upgrade
              your plan later.
            </p>
          </motion.div>

          {yearly ? (
            <div className="flex flex-col md:flex-row gap-2">
              {/* {plans.map((plan, i) => plan.type === 'yearly' && <PlanCard key={i} id={i} icon={plan.icon} title={plan.name} priceYr={plan.price} onClick={() => handlePlan(plans[i])} isActive={chosenPlan && chosenPlan.price === plan.price ? true : false} isChosen={form && form.price === plan.price ? true : false} onKeyPress={handleKeyPress} />)} */}
              {plans.map(
                (plan, i) =>
                  plan.type === "yearly" && (
                    <PlanCard
                      key={i}
                      id={i}
                      icon={plan.icon ? plan.icon : plan.icon}
                      title={plan.name}
                      priceYr={plan.price}
                      onClick={() => handlePlan(plans[i])}
                      isActive={
                        chosenPlan && chosenPlan.price === plan.price
                          ? true
                          : false
                      }
                      priceMo={0}
                      onKeyPress={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      isChosen={
                        form && chosenPlan.price === plan.price ? true : false
                      }
                      //   data2 && data2.price === plan.price ? true : false
                      // }
                      // onKeyPress={handleKeyPress}
                    />
                  )
              )}
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-2">
              {plans.map(
                (plan, i) =>
                  plan.type === "monthly" && (
                    <PlanCard
                      key={i}
                      id={i}
                      icon={plan.icon ? plan.icon : plan.icon}
                      title={plan.name}
                      priceMo={plan.price}
                      onClick={() => handlePlan(plans[i])}
                      isActive={
                        chosenPlan && chosenPlan.price === plan.price
                          ? true
                          : false
                      }
                      priceYr={0}
                      onKeyPress={function (): void {
                        throw new Error("Function not implemented.");
                      }}
                      isChosen={
                        form && chosenPlan.price === plan.price ? true : false
                      }
                      // onKeyPress={handleKeyPress}
                    />
                  )
              )}
            </div>
          )}

          <div className="w-full pt-8 pb-4 md:py-10 flex items-center justify-center gap-4">
            <p>Monthly</p>
            <button
              onClick={() => {
                setYearly(!yearly);
                handlePlan(false);
                // handleData3null();
              }}
              className="w-8 aspect-video rounded-full bg-blue-300/80 p-1"
            >
              <span
                className={`block w-3 h-3 rounded-full bg-white duration-150 ${
                  yearly ? "translate-x-full" : ""
                }`}
              ></span>
            </button>
            <p>Yearly</p>
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

export default Step2;
