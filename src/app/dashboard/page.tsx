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
import Activity from "@/components/dashboard/activity";
import Image from "next/image";
import { BarChart, Bar, ResponsiveContainer } from "recharts";

export default function Dashboard() {
  const data = [
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
  return (
    <>
      <div className="flex h-screen  p-9 gap-x-6">
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
                  growth={-1.2}
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
                      <Progress value={60} className="mt-3" />
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
                  growth={1.2}
                  icon={
                    <Icon
                      icon="lucide:cloud-upload"
                      className="w-4 h-4 text-white/60"
                    />
                  }
                />
              </div>
              {/* Giraffe */}
              <div className="card w-full max-w-6xl text-7xl justify-center h-80">
                {/* <BarChart width={900} height={500} data={data}>
                  <Bar dataKey="uv" fill="#8884d8" />
                </BarChart> */}
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
          <div className="flex gap-6 h-full overflow-hidden">
            <div className="card max-w-6xl !p-6 flex flex-col !h-full ">
              <h1 className="font-semibold text-lg">Recent Activity</h1>
              <Separator className="mt-3" />
              <div className="space-y-5 flex rounded-lg flex-col  max-h-full overflow-y-scroll scrollbar">
                <Activity
                  title="ShareX File Upload"
                  thumbnailUrl="https://images.unsplash.com/photo-1719530910202-9f791d646ee6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  timestamp={new Date()}
                  href="/"
                />
                <Activity
                  title="Login"
                  thumbnailUrl="https://images.unsplash.com/photo-1719216324207-3b9727413913?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  timestamp={new Date()}
                  href="/"
                />
                <Activity
                  title="File Deleted"
                  thumbnailUrl="https://images.unsplash.com/photo-1719216324034-2910e4347532?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  timestamp={new Date()}
                  href="/"
                />
                <Activity
                  title="File Deleted"
                  thumbnailUrl="https://images.unsplash.com/photo-1719216324034-2910e4347532?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  timestamp={new Date()}
                  href="/"
                />
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
