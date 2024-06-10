"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Index/Navbar";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import { Icon } from "@iconify/react/dist/iconify.js";
import SideCard from "@/components/sidebar/sideCard";

const containerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5, // Time between each child's animation start
    },
  },
};

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

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

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

      <motion.div
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
        variants={{
          hidden: {
            opacity: 0,
            y: -100,
          },
          visible: {
            scale: 1,
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.5,
            },
          },
        }}
      >
        <div className="flex h-screen">
          <div className="flex flex-col w-full items-center justify-center p-12">
            <div className="w-full max-w-md">
              <div className="mb-6">
                <h2 className="text-3xl font-bold mb-2">Create an account</h2>
                <div className="dark:text-gray-400">
                  Welcome to Kythi! Please enter your details to get started.
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-2">
                  <div className="grid gap-1">
                    <label
                      className="text-sm dark:text-gray-300 w-fit"
                      htmlFor="username"
                    >
                      Username
                    </label>
                    <Input
                      type="text"
                      id="name"
                      placeholder="Enter your username"
                    />
                  </div>

                  <div className="grid gap-1">
                    <label
                      className="text-sm w-fit dark:text-gray-300"
                      htmlFor="email"
                    >
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                <div className="grid gap-1">
                  <label
                    className="text-sm w-fit dark:text-gray-300"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                  />
                </div>
                <div className="grid gap-1">
                  <label
                    className="text-sm w-fit dark:text-gray-300"
                    htmlFor="beta-code"
                  >
                    Beta Code
                  </label>
                  <Input
                    type="text"
                    id="beta-code"
                    placeholder="Kythi-1234-5678-9101"
                  />
                </div>{" "}
                <Button className="w-full" size={"sm"}>
                  Register
                </Button>
                <div className="flex items-center">
                  <div className="flex-grow h-px bg-border" />
                  <span className="px-4 text-gray-500 text-sm">or</span>
                  <div className="flex-grow h-px bg-border" />
                </div>
                <div className="flex justify-center gap-4">
                  <img
                    src="/icons/discord.svg"
                    alt="discord icon"
                    className="h-5 w-5 anim hover:scale-125"
                  />
                  <img
                    src="/icons/github.svg"
                    alt="github icon"
                    className="h-5 w-5 anim hover:scale-125"
                  />
                </div>
              </div>
              {/* <div className="text-xs text-gray-500 mt-4">
                By clicking continue, you agree to our{" "}
                <a href="#" className="text-primary-blue">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-primary-blue">
                  Privacy Policy
                </a>
                .
              </div> */}
            </div>
          </div>
          <motion.div
            className="flex-col lg:max-w-2xl w-full bg-zinc-900/15 h-full text-white p-12 space-y-6 lg:block hidden"
            initial="hidden"
            animate={isLoaded ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <div className="grid gap-20 mt-32">
              {[
                {
                  icon: "lucide:smile-plus",
                  title: "Easy to use",
                  description:
                    "Kythi makes sharing files to anyone a breeze, with our easy to use interface, you can share files to anyone in seconds.",
                },
                {
                  icon: "lucide:user-plus",
                  title: "Multiple ways to register",
                  description:
                    "Register with your email, or with, discord, github or google.",
                },
                {
                  icon: "lucide:user",
                  title: "Free to use",
                  description:
                    "Kythi has a free plan that is available to everyone.",
                },
                {
                  icon: "lucide:user",
                  title: "Free to use",
                  description:
                    "Kythi has a free plan that is available to everyone.",
                },
              ].map((card, index) => (
                <motion.div key={card.title} variants={cardVariants}>
                  <SideCard
                    number={index + 1}
                    title={card.title}
                    description={card.description}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
}
