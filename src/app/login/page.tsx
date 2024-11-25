"use client";
import Navbar from "@/components/Index/Navbar";


import React, { useContext, useEffect, useState } from "react";
import { Input} from "@/components/shadcn/input";
import { motion, AnimatePresence } from "framer-motion";

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

  const { currentStep, handleSetCurrentStep, form } = useContext(StepContext);

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
          <div className="max-w-lg w-full">
          <AnimatePresence mode="wait">
      <div className="max-w-lg relative z-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="text-content mb-4 md:mb-6"
        >
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Login to your account
          </h1>
          <p className="text-gray-cool text-sm">
            Welcome back to Kythi! Please enter your details to get login.
          </p>
        </motion.div>
        <form className="sm:text-sm space-y-4" autoComplete="off" autoSave="tr">
          <div className="flex gap-2 w-full">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between">
                <label htmlFor="username" className="block font-medium">
                  Username
                </label>
              </div>

              <Input
                type="text"
                id="username"
                placeholder="Enter your username"
 
              />
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block font-medium">
                  Email address
                </label>
              </div>

              <Input

                type="email"
                id="email"
                placeholder="Enter your email address"

              />
            </motion.div>
          </div>
          {/* password */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
            </div>

            <Input
              type="password"

              id="password"
              placeholder="Enter your password"

            />
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.35 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <label htmlFor="invite" className="block font-medium">
                Invite
              </label>

            </div>

            <Input
              id="invite"
              placeholder="Kythi-1234-5678-9101"

            />
          </motion.div>
        </form>
        <div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <div className="flex items-center mt-4">
              <div className="flex-grow h-px bg-border" />
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-border" />
            </div>
            <div className="flex justify-center gap-4 mt-3">
              <img
                src="/icons/discord.svg"
                alt="discord icon"
                className="h-5 w-5 anim hover:scale-125 cursor-pointer"
              />
              <img
                src="/icons/github.svg"
                alt="github icon"
                className="h-5 w-5 anim hover:scale-125 cursor-pointer"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
          </div>
        </div>

      </div>
    </>
  );
}
