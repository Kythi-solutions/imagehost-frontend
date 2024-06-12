"use client";
import { useContext, useEffect, useState } from "react";
import { Button } from "@/components/shadcn/button";

import { StepContext } from "../steploader/context";

export default function Buttons(props: any) {
  const { currentStep, handleSetCurrentStep } = useContext(StepContext);
  const steps = [0, 1, 2, 3];

  const handleShowNextFeature = () => {
    if (currentStep == 4) return;
    handleSetCurrentStep(currentStep + 1);
  };

  const handleShowPreviousFeature = () => {
    if (currentStep == 1) return;
    handleSetCurrentStep(currentStep - 1);
  };

  return (
    <>
      <div className="flex justify-between w-full mt-4">
        {currentStep !== 1 && (
          <Button
            onClick={() => {
              handleShowPreviousFeature();
            }}
            variant="outline"
          >
            Previous
          </Button>
        )}

        {currentStep !== steps.length && (
          <Button
            className="ml-auto"
            onClick={() => {
              props.handleclick();
            }}
          >
            Next Step{" "}
          </Button>
        )}

        {currentStep == steps.length && (
          <Button
            className="ml-auto"
            onClick={() => {
              handleShowNextFeature();
            }}
          >
            Register
          </Button>
        )}
      </div>
    </>
  );
}
