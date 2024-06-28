"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import Sidebar from "@/components/dashboard/sideBar";
import Content from "@/components/dashboard/content";
import { Separator } from "@/components/shadcn/separator";
import { Icon } from "@iconify/react";
import ImageCapture from "@/components/dashboard/select";
import StatisticCard from "@/components/dashboard/statisticCard";
import { Progress } from "@/components/shadcn/progress";
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
              <div className="flex w-full  max-w-6xl gap-x-6">
                <StatisticCard
                  title="Uploads"
                  value="1,200"
                  increase={false}
                  
                  icon={
                    <Icon
                      icon="lucide:cloud-upload"
                      className="w-4 h-4 text-white/60"
                    />
                  }
                />
                <StatisticCard
                  title="Storage"
                  value={
                    <div className="w-full h-full flex  flex-col px-1">
                      <Progress value={60} className="mt-3"/>
                      <p className="text-xs mt-4">
                        1,200/<span className="text-white/50">5000</span>
                      </p>
                    </div>
                  }
                  timeline={false}
                  icon={
                    <Icon
                      icon="lucide:database"
                      className="w-4 h-4 text-white/60"
                    />
                  }
                />

                <StatisticCard
                  title="Uploads"
                  value="1,200"
                  increase={true}
                  icon={
                    <Icon
                      icon="lucide:cloud-upload"
                      className="w-4 h-4 text-white/60"
                    />
                  }
                />
              </div>
              {/* Giraffe */}
              <div className="card w-full max-w-6xl grid items-center text-7xl justify-center h-80">
                Jiraffe
              </div>
            </div>
            <div className="card max-w-xl !p-6 relative">
              <div className="mt-8 text-sm absolute right-4 top-0">
                <Icon
                  icon="lucide:info"
                  className="mr-3 h-5 w-5 leading-none text-white/60"
                />
              </div>
              <div>
                <h1 className="font-semibold text-lg">Configurations</h1>
                <div className="mt-8 text-sm">
                  <p className="mb-4">
                    1. Select your image capturing software
                  </p>
                  <ImageCapture />
                </div>
                <div className="mt-8 text-sm opacity-50">
                  <p className="mb-4 0">
                    2. Download your softwares configuration file
                  </p>
                  <div className="font-semibold  cursor-pointer flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-accent bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                    <p className=" flex items-center">
                      {" "}
                      <Icon
                        icon="lucide:download"
                        className="mr-3 h-4 w-4 leading-none"
                      />
                      Download File
                    </p>
                    <p className="text-xs 0">.sxcu</p>
                  </div>
                </div>
                <div className="mt-8 text-sm opacity-50">
                  <p className="mb-4  ">
                    3. Watch our video on how to correctly setup your
                    configuration
                  </p>
                  <div className="font-semibold  cursor-pointer flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-accent bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
                    <p className="flex items-center">
                      <Icon
                        icon="lucide:youtube"
                        className="mr-3 h-4 w-4 leading-none"
                      />
                      Watch Tutorial
                    </p>
                    <div className="text-xs ">
                      <Icon
                        icon="lucide:external-link"
                        className="mr-3 h-4 w-4 leading-none"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex gap-6 h-full">
            <div className="card max-w-6xl !h-full !p-6">
              <h1 className="font-semibold text-lg">Recent Activity</h1>
              <Separator className="mt-3" />
              <div className="space-y-5 mt-6">
                <div className="text-sm items-center flex justify-between rounded-lg ">
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 flex items-center justify-center bg-green-700/40 rounded-full">
                      <Icon className="text-sm" icon={"lucide:image"} />
                    </div>
                    <div>
                      <p className=" font-semibold">File uploaded</p>
                      <p className="text-xs">8 feb 2023, 01:00 am</p>
                    </div>
                  </div>

                  <Icon className="text-sm" icon={"lucide:info"} />
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
