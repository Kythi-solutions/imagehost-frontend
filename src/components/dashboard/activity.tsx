"use client";
import * as React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
interface ActivityProps {
  title: string;
  timestamp: Date;
  href: string;
  thumbnailUrl?: string;
}
const Activity = ({
  title,
  timestamp = new Date(),
  href = "/",
  thumbnailUrl = "https://images.unsplash.com/photo-1719530910202-9f791d646ee6?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: ActivityProps) => {
  return (
    <>
      <Link href={href}>
        <div className="text-sm items-center flex border-1.5 rounded-lg bg-secondary-background overflow-hidden">
          <Image
            className="h-20 w-20"
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            width={100}
            height={100}
          />
          <div className="w-full flex justify-between items-center px-6">
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-white/60">{`${timestamp.toLocaleDateString()} - ${timestamp.toLocaleTimeString()}`}</p>
            </div>
            <div className="flex items-center gap-2">
              {/*<Icon icon="lucide:trash" className="h-5 w-5" />*/}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};
export default Activity;
