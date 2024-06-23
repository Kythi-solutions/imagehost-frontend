"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import Sidebar from "@/components/dashboard/sideBar";
import Content from "@/components/dashboard/content";
import Select from "@/components/dashboard/select";
import { Separator } from "@/components/shadcn/separator";

export default function Dashboard() {
  return (
    <>
      <div className="flex h-screen p-9 gap-x-6">
        <Sidebar location="dash" />
        <Content>
          <div className="flex gap-6">
            {/* Graph and Statistics */}
            <div className="space-y-6 max-w-6xl w-full">
              {/* Statistic (top) */}
              <div className="flex w-full max-w-6xl gap-x-6">
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
              <div className="card w-full max-w-6xl grid items-center text-7xl justify-center h-80">
                Jiraffe
              </div>
            </div>
            <div className="card max-w-xl !p-6">
              <h1 className="font-semibold text-lg">Configurations</h1>
              <div className="mt-8 text-sm">
                <p className="mb-3">1. Select your image capturing software</p>
                <Select />
              </div>
              <div className="mt-8 text-sm">
                <p className="mb-3 text-gray-300">
                  2. Download your software's configuration file
                </p>
                <div className="font-semibold  cursor-pointer flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-accent bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                  <p className="text-gray-400">Download File</p>
                  <p className="text-xs text-gray-500">.sxcu</p>
                </div>
              </div>
              <div className="mt-8 text-sm">
                <p className="mb-3 text-gray-300">
                  3. Watch our video on how to correctly setup your
                  configuration
                </p>
                <div className="font-semibold  cursor-pointer flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-accent bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                  <p className="text-gray-400">Watch Tutorial</p>
                  <div className="text-xs text-gray-500">leve</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 h-full">
            <div className="card max-w-6xl !h-full !p-6">
              <h1 className="font-semibold text-lg">Recent Activity</h1>
              <Separator className="mt-3" />
              <div className="space-y-5 mt-6">
                <div className="text-sm items-center flex gap-2 border-1.5 rounded-lg p-2 bg-background-lighter">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn.nest.rip/uploads/7d679589-32c6-4006-b5e4-9d38b9d7b05a.png"
                    alt=""
                  />
                  <div>
                    <p className=" font-semibold">File uploaded</p>
                    <p className="text-xs">8 feb 2023, 01:00 am</p>
                  </div>
                </div>
                <div className="text-sm items-center flex gap-2 border-1.5 rounded-lg p-2 bg-background-lighter">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn.nest.rip/uploads/7d679589-32c6-4006-b5e4-9d38b9d7b05a.png"
                    alt=""
                  />
                  <div>
                    <p className="text-sm font-semibold">File uploaded</p>
                    <p className="text-xs">8 feb 2023, 01:00 am</p>
                  </div>
                </div>
                <div className="text-sm items-center flex gap-2 border-1.5 rounded-lg p-2 bg-background-lighter">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://cdn.nest.rip/uploads/7d679589-32c6-4006-b5e4-9d38b9d7b05a.png"
                    alt=""
                  />
                  <div>
                    <p className=" font-semibold">File uploaded</p>
                    <p className="text-xs">8 feb 2023, 01:00 am</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="card max-w-xl !h-full !p-6">
              <h1 className="font-semibold text-lg">
                Upload your files to kythi
              </h1>
              <div className="flex justify-center cursor-pointer h-full rounded-md border-2 border-dashed group hover:border-primary-blue hover:bg-primary-blue/10 anim">
                e
              </div>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}
