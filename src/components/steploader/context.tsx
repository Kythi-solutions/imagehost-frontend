"use client";
import { createContext, useState } from "react";

interface Form {
  username: string;
  password: string;
  email: string;
  invite: string;
  plan: string;
}

interface StepContext {
  currentStep: number;
  form: Form;
  handleSetCurrentStep: Function;
  handleUpdateFormData: Function;
}

export const StepContext = createContext({
  currentStep: 0,
  form: {
    username: "",
    email: "",
    password: "",
    invite: "",
    plan: "",
  },
} as StepContext);

const GlobalProvider = ({ children }: any) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
    invite: "",
    plan: "",
  });

  const handleSetCurrentStep = (Step: number) => {
    setCurrentStep(Step);
  };

  const handleUpdateFormData = (formData: Form) => {
    setForm({
      ...formData,
    });
  };

  const contextValue = {
    currentStep,
    form,
    handleUpdateFormData,
    handleSetCurrentStep,
  };

  return (
    <StepContext.Provider value={contextValue}>{children}</StepContext.Provider>
  );
};

export default GlobalProvider;
