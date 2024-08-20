"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/shadcn/button";
import { Input } from "@/components/shadcn/input";
import Sidebar from "@/components/dashboard/sideBar";
import Content from "@/components/dashboard/content";
import { Card } from "@/components/shadcn/card";
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
          <div className="grid grid-cols-4 gap-5 w-full">
            {images.map((image, index) => (
              <div
                key={index}
                className="card h-72 max-w-sm w-full !p-3 relative"
              >
                <div className="flex items-center justify-between">
                  <h1 className="font-semibold text-sm">{image.name}</h1>
                  <p className="text-xs font-bold text-white/60">
                    {image.size}
                  </p>
                </div>
                <div className="relative h-56">
                  <motion.div className="relative mt-4 h-full w-full rounded-lg overflow-hidden">
                    <img
                      className="h-full w-full object-cover"
                      src={image.url}
                      alt=""
                    />
                    <motion.div
                      className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 opacity-0"
                      initial={{ opacity: 0, y: 50 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className="flex justify-between">
                        <div>
                          <p className="text-sm font-semibold text-white">
                            {image.name}
                          </p>
                          <p className="text-xs font-semibold text-white/60">
                            12/12/2023 - 5:03
                          </p>
                        </div>
                        {/* later */}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </div>
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
          </Pagination>{" "}
        </Content>
      </div>
    </>
  );
}
