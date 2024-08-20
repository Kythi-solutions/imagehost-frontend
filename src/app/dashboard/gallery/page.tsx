"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import Sidebar from "@/components/dashboard/sideBar";
import Content from "@/components/dashboard/content";
import { Icon } from "@iconify/react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/shadcn/dialog";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/pagination";

const images = [
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/158b1f89-668a-4d20-970f-51f632d2487a.png",
  },
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/81937e5c-64b3-45e2-8241-74dbe352c8d9.png",
  },
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/b827eba2-db1a-4fc8-bcd1-0f9ec101aca0.png",
  },
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/158b1f89-668a-4d20-970f-51f632d2487a.png",
  },
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/158b1f89-668a-4d20-970f-51f632d2487a.png",
  },
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/158b1f89-668a-4d20-970f-51f632d2487a.png",
  },
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/1e566c6c-2c2a-475f-8873-9fd4b173ffb4.png",
  },
  {
    name: "pc89yP5GC.png",
    size: "69.69mb",
    url: "https://cdn.nest.rip/uploads/158b1f89-668a-4d20-970f-51f632d2487a.png",
  },
];

export default function Gallery() {
  return (
    <>
      <div className="flex h-screen p-9 gap-x-6">
        <Sidebar location="gallery" />
        <Content>
          <div className="gap-2 flex flex-col w-fit justify-center">
            <h1 className="text-xl font-semibold">My Gallery</h1>
            <p className="text-sm">
              Here you can view, share, manage and download your images.
            </p>
            <Input className="mt-2 " placeholder="Search for a file" />
          </div>
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 gap-5 w-full">
            {images.map((image, index) => (
              <motion.div
                key={index}
                className="card h-72 max-w-sm w-full !p-3 relative"
                initial="rest"
                whileHover="hover"
                animate="rest"
              >
                <div className="relative h-full w-full">
                  <div className="absolute inset-0 flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <h1 className="font-semibold text-sm">{image.name}</h1>
                      <p className="text-xs font-bold text-white/60">
                        {image.size}
                      </p>
                    </div>
                    <motion.div className="relative rounded-lg">
                      <img
                        className="h-56 w-full object-cover rounded-lg"
                        src={image.url}
                        alt=""
                      />
                      <motion.div
                        className="absolute inset-0 bg-black/50 rounded-lg"
                        variants={{
                          rest: { opacity: 0 },
                          hover: { opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-x-0 bottom-0 p-4"
                        variants={{
                          rest: { y: 20, opacity: 0 },
                          hover: { y: 0, opacity: 1 },
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex justify-between items-end">
                          <div>
                            <p className="text-sm font-semibold text-white">
                              {image.name}
                            </p>
                            <p className="text-xs font-semibold text-white/60">
                              12/12/2023 - 5:03
                            </p>
                          </div>
                          <div className="flex gap-2">
                            <Dialog>
                              <DialogTrigger asChild>
                                <Button size="sm" variant="opaque">
                                  Share
                                </Button>
                              </DialogTrigger>
                              <DialogContent className="sm:max-w-[425px]">
                                <DialogHeader>
                                  <DialogTitle>Share a file</DialogTitle>
                                  <DialogDescription>
                                    Copy either the raw link or the embedded
                                    link to quickly share your file with others.
                                  </DialogDescription>
                                </DialogHeader>
                                <div className="flex gap-2 items-center">
                                  <Input
                                    className="!h-8"
                                    disabled
                                    placeholder="https://nest.rip/f/85gse"
                                  />
                                  <Button size="icon" variant="outline">
                                    <Icon
                                      className="h-3.5 w-3.5"
                                      icon={"lucide:copy-plus"}
                                    />
                                  </Button>
                                </div>
                                <div className="flex gap-2 items-center">
                                  <Input
                                    className="!h-8"
                                    disabled
                                    placeholder="https://cdn.nest.rip/uploads/3f428dbe-0343-404a-8ab5-9c1dbd79419a.png"
                                  />
                                  <Button size="icon" variant="outline">
                                    <Icon
                                      className="h-3.5 w-3.5"
                                      icon={"lucide:copy-plus"}
                                    />
                                  </Button>
                                </div>
                                <DialogFooter>
                                  <Button type="submit" size="sm">
                                    Save changes
                                  </Button>
                                </DialogFooter>
                              </DialogContent>
                            </Dialog>
                            <Button size="icon" variant="opaque">
                              <Icon
                                className="h-4 w-4"
                                icon="lucide:settings-2"
                              />
                            </Button>
                            <Button size="icon" variant="destructive">
                              <Icon className="h-4 w-4" icon="mdi:trash" />
                            </Button>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <Pagination className="mt-auto">
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#" isActive>
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </Content>
      </div>
    </>
  );
}
