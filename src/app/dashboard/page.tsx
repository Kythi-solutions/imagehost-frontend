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
import { TrendingUp } from "lucide-react";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/dropdown-menu";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/card";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/shadcn/chart";

const chartData = [
  { month: "January", uploads: 186, pastes: 80 },
  { month: "January", uploads: 186, pastes: 80 },
  { month: "February", uploads: 305, pastes: 200 },
  { month: "March", uploads: 237, pastes: 120 },
  { month: "April", uploads: 73, pastes: 190 },
  { month: "May", uploads: 209, pastes: 130 },
  { month: "June", uploads: 214, pastes: 140 },
  { month: "July", uploads: 214, pastes: 140 },
  { month: "August", uploads: 214, pastes: 140 },
  { month: "September", uploads: 214, pastes: 140 },
  { month: "November", uploads: 214, pastes: 140 },
  { month: "December", uploads: 214, pastes: 140 },
];

const chartConfig = {
  uploads: {
    label: "Uploads",
    color: "hsl(var(--chart-5))",
  },
  pastes: {
    label: "Pastes",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig;

export default function Dashboard() {
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
                <ChartContainer
                  config={chartConfig}
                  className="h-[300px] w-full"
                >
                  <AreaChart accessibilityLayer data={chartData}>
                    <CartesianGrid vertical={false} />
                    <XAxis
                      dataKey="month"
                      tickLine={false}
                      axisLine={false}
                      tickMargin={8}
                      tickFormatter={(value) => value.slice(0, 3)}
                    />
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent />}
                    />
                    <defs>
                      <linearGradient
                        id="filluploads"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--color-uploads)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-uploads)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                      <linearGradient
                        id="fillpastes"
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="5%"
                          stopColor="var(--color-pastes)"
                          stopOpacity={0.8}
                        />
                        <stop
                          offset="95%"
                          stopColor="var(--color-pastes)"
                          stopOpacity={0.1}
                        />
                      </linearGradient>
                    </defs>
                    <Area
                      dataKey="pastes"
                      type="natural"
                      fill="url(#fillpastes)"
                      fillOpacity={0.4}
                      stroke="var(--color-pastes)"
                      stackId="a"
                    />
                    <Area
                      dataKey="uploads"
                      type="natural"
                      fill="url(#filluploads)"
                      fillOpacity={0.4}
                      stroke="var(--color-uploads)"
                      stackId="a"
                    />
                  </AreaChart>
                </ChartContainer>
              </div>
            </div>
            {/* Config */}
            <div className="card max-w-xl !p-6 relative">
              <div className="mt-8 text-sm absolute right-4 top-0">
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Icon
                      icon="lucide:info"
                      className="mr-3 h-5 w-5 leading-none text-white/60"
                    />
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className=" dark:bg-background-light">
                    <DropdownMenuLabel>
                      {/* Not sure what to put here for now. */}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {/* ss */}
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              <div>
                <h1 className="font-semibold text-lg">Configurations</h1>
                <div className="mt-3 text-sm">
                  <p className="mb-4">
                    1. Select your image capturing software
                  </p>
                  <ImageCapture />
                </div>
                <div className="mt-8 text-sm opacity-50">
                  <p className="mb-4 0">
                    2. Download your softwares configuration file
                  </p>
                  <div className="font-semibold  cursor-not-allowed  flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-accent bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
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
                  <div className="font-semibold cursor-not-allowed flex h-10 w-full items-center justify-between whitespace-nowrap rounded-md border border-accent bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1">
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
              <p className="text-sm text-gray-300">
                View your recent activity on kythi. This includes file uploads,
                logins, and file deletions.
              </p>
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
              <h1 className="font-semibold text-lg">Upload a file</h1>
              <p className="text-sm text-gray-300">
                Upload your files to kythi and be able to swiftly share them
                with ease.
              </p>
              <div className="max-w-xl h-full flex pb-10 pt-4">
                <label className="flex justify-center w-full px-4 transition  border border-gray-400/50 border-dashed rounded-md appearance-none cursor-pointer hover:border-gray-400 focus:outline-none">
                  <span className="flex items-center space-x-2 text-sm max-w-[250px] text-center">
                    <div className="flex flex-col gap-2 items-center">
                      <Icon
                        icon="lucide:image-plus"
                        className="w-8 h-8 text-purple-400/50"
                      />
                      <span className="font-medium text-gray-300">
                        Drop in a file or,
                        <span className="text-purple-400 ">
                          &nbsp;browse local files&nbsp;
                        </span>
                        to upload.
                      </span>
                    </div>
                  </span>

                  <input type="file" name="file_upload" className="hidden" />
                </label>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}
