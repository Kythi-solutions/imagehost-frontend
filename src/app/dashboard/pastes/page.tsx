"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import Sidebar from "@/components/dashboard/sideBar";
import Content from "@/components/dashboard/content";
import { Input } from "@/components/shadcn/input";
import Combobox from "@/components/shadcn/combobox";
export default function Pastes() {
  return (
    <>
      <div className="flex h-screen p-9 gap-x-6">
        <Sidebar location="pastes" />
        <Content>
          <div className="flex flex-col gap-1">
            <h1 className="text-xl font-semibold">Pastes</h1>
            <p className="text-sm">
              Share your code snippets, logs, and other text-based content
              effortlessly.
            </p>
            <div className="card max-w-xl min-h-96 !p-0 relative mt-3 flex flex-col">
              <div className="p-4 bg-secondary-background border-b-2 w-full">
                <h1 className="font-semibold">New paste</h1>
              </div>
              <div className="max-w-xl h-full flex flex-col p-4 gap-2">
                <div className="flex justify-between gap-2">
                  <Input placeholder="Title" />

                  <Combobox />
                </div>
                <textarea
                  name=""
                  id=""
                  className="flex h-full bg-primary-background anim  border-white/10 hover:bg-accent hover:text-accent-foreground w-full rounded-md border-2 px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground ring-0 outline-none disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse,
                saepe minima. Aliquam, iusto quod? Vel quia laudantium
                asperiores quas recusandae. Quidem, blanditiis adipisci
                architecto voluptatum hic delectus eaque voluptatem in."
                />
              </div>
              <div className="p-4 flex border-t-2 w-full justify-end">
                <Button size="sm">Create Paste</Button>
              </div>
            </div>
          </div>
        </Content>
      </div>
    </>
  );
}
