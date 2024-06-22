"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import Sidebar from "@/components/dashboard/sideBar";
import Content from "@/components/dashboard/content";
export default function Pastes() {
  return (
    <>
      <div className="flex h-screen p-6 gap-x-4">
        <Sidebar location="pastes" />
        <Content>
          <h1 className="text-xl font-semibold">Pastes</h1>
        </Content>
      </div>
    </>
  );
}
