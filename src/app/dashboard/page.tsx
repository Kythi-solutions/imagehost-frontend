"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import Sidebar from "@/components/dashboard/sideBar";
import Content from "@/components/dashboard/content";
import Select from "@/components/dashboard/select";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen p-6 gap-x-6">
        <Sidebar location="dash" />
        <Content>
          {/* Graph and Statistics */}
<div className="space-y-4 w-full max-w-2xl">
          {/* Statistic (top) */}
          <div className="flex max-w-2xl w-full gap-x-4">
            <div className="card">
              <img
                className="h-12 w-12 rounded-full"
                src="https://cdn.nest.rip/uploads/7d679589-32c6-4006-b5e4-9d38b9d7b05a.png"
                alt=""
              />
              <div>
                <p className="font-semibold mt-2">Uploads</p>
                <p className="text-sm">1234</p>
              </div>
            </div>
            <div className="card">
              <img
                className="h-12 w-12 rounded-full"
                src="https://cdn.nest.rip/uploads/7d679589-32c6-4006-b5e4-9d38b9d7b05a.png"
                alt=""
              />
              <div>
                <p className="font-semibold mt-2">Uploads</p>
                <p className="text-sm">1234</p>
              </div>
            </div>
            
            <div className="card">
              <img
                className="h-12 w-12 rounded-full"
                src="https://cdn.nest.rip/uploads/7d679589-32c6-4006-b5e4-9d38b9d7b05a.png"
                alt=""
              />
              <div>
                <p className="font-semibold mt-2">Uploads</p>
                <p className="text-sm">1234</p>
              </div>
            </div>
          </div>
{/* Giraffe */}
<div className="card w-full grid items-center justify-center max-w-2xl h-64">
Jiraffe
</div>
</div>
<div className="card h-fit max-w-lg !p-7">
<h1 className="font-semibold text-lg">Configurations</h1>
<div className="mt-4 text-sm">
  <p className="mb-2">1. Select your image capturing software</p>
  <Select/>
</div>
</div>
        </Content>
      </div>
    </>
  );
}
