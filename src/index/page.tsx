"use client";
import { motion } from "framer-motion";
import Features from "@/components/Index/Features";
import Navbar from "@/components/Index/Navbar";
import Footer from "@/components/Index/Footer";
import CTA from "@/components/Index/CTA";
import { Button } from "@/components/shadcn/button";
import Meteors from "@/components/animations/Meteor";
import Shine from "@/components/animations/shine-button";
import TextReveal from "@/components/animations/text-scroll";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="flex flex-col justify-center items-center h-screen px-4 md:px-0 ">
        <motion.div
          className="glow h-[40px] w-full max-w-4xl absolute block"
          initial="hidden"
          animate="visible"
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
                delay: 0.7,
              },
            },
          }}
        />
        <motion.div
          initial="hidden"
          animate="visible"
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
                delay: 0.5,
              },
            },
          }}
          className="flex flex-col justify-center items-center z-10 relative w-full  overflow-hidden max-w-3xl "
        >
          <Meteors number={20} />

          <h1 className="md:text-7xl text-4xl z-10 font-medium text-center max-w-3xl">
            Say hello to the{" "}
            <span className="bg-clip-text bg-gradient-to-l from-primary-blue to-fuchsia-600 text-transparent">
              future
            </span>{" "}
            of file sharing
          </h1>
          <p className="text-center z-10 mt-5 md:max-w-3xl text-sm font-light">
            Kythi makes sharing files to anyone a breeze. With our easy to use
            interface, you can share files to anyone in seconds. No more waiting
            for files to upload, or having to deal with slow download speeds.
          </p>
        </motion.div>

        <motion.div
          className="flex gap-4 mt-8 flex-col sm:flex-row"
          initial="hidden"
          animate="visible"
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
                delay: 0.6,
              },
            },
          }}
        >
          <Shine
            onClick={() => {
              document
                .getElementById("features")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            text="Learn More"
          />
          <Button
            onClick={() => {
              window.location.href = "/register";
            }}
            variant="gradient"
            size="xl"
            className="active:translate-y-[5px]"
          >
            Get Started
          </Button>
        </motion.div>
      </section>

      <section className="max-w-7xl flex flex-col m-auto">
        <div id="features">
          <Features />
        </div>
      </section>
      {/* <div className="relative">
        <TextReveal text="We are focused on providing a seamless experience for our end users, " />
      </div> */}

      <CTA />
      <Footer />
    </>
  );
}
