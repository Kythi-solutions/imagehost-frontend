import React, { useEffect, useContext, useState } from "react";
import { StepContext } from "./context";
import PlanCard from "@/components/register/planCard";

// import arcadeIcon from "../assets/img/icon-arcade.svg";
// import advancedIcon from "../assets/img/icon-advanced.svg";
import { AnimatePresence, motion } from "framer-motion";
import Buttons from "../register/buttons";
import { AnimatedSubscribeButton } from "../animations/animated-subscribe-button";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../shadcn/dialog";
import { Button } from "../shadcn/button";
import { Input } from "../shadcn/input";

const Step4 = () => {
  const { handleSetCurrentStep, currentStep, form } = useContext(StepContext);
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
            {/* <AnimatedSubscribeButton
              classNames={"w-full "}
              brand="#ffbd7a"
              subscribeStatus={false}
              buttonTextColor="#000009"
              initialText={
                <span className="group inline-flex items-center">Email </span>
              }
              changeText={
                <span className="group inline-flex items-center">
                  <Icon icon={"lucide:check"} className="mr-2 h-4 w-4" />
                  Subscribed{" "}
                </span>
              }
            /> */}

            <Dialog>
              <DialogTrigger asChild>
                <div className="p-4 hover:card duration-300 fadeGlow overflow-hidden relative w-full !rounded-lg !border-2 flex flex-col gap-3 items-center text-center cursor-pointer">
                  <Icon className="w-8 h-8" icon={"lucide:mails"} />
                  <p className="font-semibold text-lg">Email</p>
                  <p className="text-sm">
                    Get a code sent to your email, to authenticate on login,
                    This is the easiest method.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Email Verification</DialogTitle>
                  <DialogDescription>
                    An email has been sent to your registered email address,
                    with a code to verify your account.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex gap-2 items-center">
                  <Input disabled placeholder="user@user.com" />
                  <Button size="icon">
                    <Icon className="h-4 w-4" icon={"lucide:square-pen"} />
                  </Button>
                </div>
                <Input placeholder="Authentication code" />

                <DialogFooter>
                  <Button type="submit">Save changes</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog>
              <DialogTrigger asChild>
                <div className="p-4 hover:card duration-300 fadeGlow overflow-hidden relative w-full !rounded-lg !border-2 flex flex-col gap-3 items-center text-center cursor-pointer">
                  <Icon className="w-8 h-8" icon={"lucide:fingerprint"} />
                  <p className="font-semibold text-lg">Authenticator App</p>
                  <p className="text-sm">
                    Use an authenticator app to generate a code for you. This is
                    the most secure method.
                  </p>
                </div>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Authenticator App</DialogTitle>
                  <DialogDescription>
                    To authenticate using an authenticator app, scan the QR code
                    below.
                  </DialogDescription>
                </DialogHeader>
                <div className="flex mx-auto bg-secondary/30 p-4 rounded-lg">
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=HelloWorld"
                    alt="QR Code"
                    className="h-44 w-44 rounded"
                  />
                </div>
                <div className="space-y-2 mt-3">
                  <label
                    htmlFor="authAppCode"
                    className="w-fit font-semibold text-sm"
                  >
                    Authentication code
                  </label>
                  <Input id="authAppCode" placeholder="Authentication code" />
                </div>

                <DialogFooter>
                  <Button type="submit">Continue</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
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
