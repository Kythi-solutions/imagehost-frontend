import React, { useEffect, useContext, useState } from "react";
import { motion } from "framer-motion";
import { StepContext } from "./context";
import AddOns from "@/components/register/addOns";
import Buttons from "../register/buttons";

const Step3 = () => {
  const [checked, setChecked] = useState([] as any);

  const addOns = [
    {
      id: 1,
      name: "Private profile",
      desc: "Make your profile private",
    },
    {
      id: 2,
      name: "Enable file wiping",
      desc: "Wipe uploaded files after 30 days",
    },
    {
      id: 3,
      name: "Custom domain",
      desc: "Select your custom domain",
    },
  ];

  const handleAddCheck = (id: any) => {
    let dataChecked = addOns.find((item) => item.id == id);
    setChecked([...checked, dataChecked]);
  };

  const handleRemoveCheck = (id: any) => {
    let dataUnchecked = checked.filter((item: any) => item.id != id);
    setChecked(dataUnchecked);
  };

  const { handleSetCurrentStep, form } = useContext(StepContext);

  //   useEffect(() => {
  //     if (data2) {
  //       if (data2.type === "yearly") {
  //         setYearly(true);
  //       }
  //     }
  //   });

  //   useEffect(() => {
  //     if (data3) {
  //       setChecked(data3);
  //     }
  //   }, [data3]);

  useEffect(() => {
    const handleBackButtonPress = (e: any) => {
      if (e.key === "Backspace" || e.key === "Back") {
        e.preventDefault();
        handleSetCurrentStep(2);
      }
    };

    document.addEventListener("keydown", handleBackButtonPress);

    return () => {
      document.removeEventListener("keydown", handleBackButtonPress);
    };
  }, [handleSetCurrentStep]);

  const handleSubmit = () => {
    // handleData3(checked);
    handleSetCurrentStep(4);
  };

  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -100, opacity: 0 }}
      transition={{ delay: 0.1 }}
      className="flex flex-col"
    >
      <div className="relative z-20">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -100, opacity: 0 }}
          transition={{ delay: 0.15 }}
          className="text-content mb-4 md:mb-6"
        >
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Personalise your experience
          </h1>
          <p className="text-gray-cool text-sm">
            Use the options below to customise your account and make it your
            own.
          </p>
        </motion.div>
        <div className="w-full grid gap-3">
          {addOns.map(
            (item) =>
              item && (
                <AddOns
                  key={item.id}
                  id={item.id}
                  title={item.name}
                  desc={item.desc}
                  checked={
                    checked.find((check: any) => check.id === item.id)
                      ? true
                      : false
                  }
                  onChange={(e) => {
                    e.target.checked
                      ? handleAddCheck(e.target.value)
                      : handleRemoveCheck(e.target.value);
                  }}
                />
              )
          )}
        </div>
      </div>
      <div className="flex-1 flex items-end justify-end py-5 md:p-0">
        <div className="w-full flex items-center justify-between">
          {/* <button
            onClick={() => {
              handleSetCurrentStep(2);
            }}
            className="text-gray-cool font-medium hover:text-blue-marine active:text-slate-950"
          >
            Go Back
          </button> */}
          {/* <ButtonPrimary name={"Next Step"} onClick={handleSubmit} /> */}
          <Buttons handleclick={handleSubmit} />
        </div>
      </div>
    </motion.div>
  );
};

export default Step3;
