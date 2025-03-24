"use client";
import * as React from "react";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";

interface ActivityProps {
  title: string;
  timestamp?: Date;
  href?: string;
  thumbnailUrl?: string;
  thumbnailIcon?: string;
  theme?: "alert" | "danger" | "success";
}

const Activity = ({
  title,
  timestamp = new Date(),
  thumbnailIcon,
  href = "/",
  thumbnailUrl,
  theme,
}: ActivityProps) => {
  const themeClasses = {
    container: {
      danger: "bg-red-500/10 dark:bg-red-600/10",
      alert: "bg-amber-500/10 dark:bg-amber-600/10",
      success: "bg-emerald-500/10 dark:bg-emerald-600/10",
    },
    icon: {
      danger: "text-red-500 dark:text-red-400",
      alert: "text-amber-500 dark:text-amber-400",
      success: "text-emerald-500 dark:text-emerald-400",
    },
  };

  return (
    <Link href={href}>
      <div className="text-sm items-center flex border-1.5 rounded-lg bg-background-secondary overflow-hidden">
        {thumbnailUrl ? (
          <Image
            className="h-20 w-20 object-cover"
            src={thumbnailUrl}
            alt={`Thumbnail for ${title}`}
            width={80}
            height={80}
          />
        ) : thumbnailIcon ? (
          <div
            className={`h-20 w-20 flex items-center justify-center ${
              theme ? themeClasses.container[theme] : "bg-gray-900/20"
            }`}
          >
            <Icon
              icon={thumbnailIcon}
              className={`h-7 w-7 ${
                theme ? themeClasses.icon[theme] : "text-white/50"
              }`}
            />
          </div>
        ) : null}

        <div className="w-full flex justify-between items-center px-6">
          <div>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs text-white/60">
              {timestamp.toLocaleDateString()} -{" "}
              {timestamp.toLocaleTimeString()}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {/*<Icon icon="lucide:trash" className="h-5 w-5" />*/}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Activity;
