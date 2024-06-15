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
import Sidebar from "@/components/dashboard/sideBar";

export default function Dashboard() {
  return (
    <>

      <div className="flex h-screen p-8">
        <Sidebar location="dash" />
       </div>

    </>
  );
}
