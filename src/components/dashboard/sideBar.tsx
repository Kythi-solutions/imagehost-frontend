import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/button";
import SideBarDropdown from "./sideBarDropdown";
import Image from "next/image";
import Logo from "./test-k2.png";
import FoldMenu from "./foldMenu";

const SideLink: React.FC<{
  text: string;
  icon: React.ReactNode;
  href: string;
  active: boolean;
}> = (props) => (
  <Link href={props.href}>
    <Button
      size="sm"
      //@ts-ignore
      variant={props.active ? "primary" : "ghost"}
      className={`w-full gap-1 flex justify-start ${
        props.active && "bg-accent"
      }`}
    >
      {props.icon}
      <p className="text-primary-white/80">{props.text}</p>
    </Button>
  </Link>
);

const Sidebar: React.FC<{
  location?:
    | "dash"
    | "settings"
    | "files"
    | "domains"
    | "referrals"
    | "support"
    | "admin"
    | "gallery"
    | "pastes"
    | "collections";
}> = (props) => {
  return (
    <div className="flex-col w-72 rounded-sm  backdrop-blur-sm dark:bg-primary-background flex border-1.5 overflow-hidden">
      <div className="w-full p-2 pt-5 pb-5 flex gap-2 bg-secondary-background justify-center items-center rounded-t-md border-b-1.5">
        {/*<Image className="h-6" src={Logo} width={80} alt="logo" />*/}
        <span className="text-2xl font-semibold">KYTHI</span>
      </div>
      <div className="flex w-full flex-col px-4 py-2 text-xs gap-2 overflow-y-scroll scrollbar relative mt-2">
        <div className="flex gap-2 items-center pb-2 pl-2 mt-4">
          <p className="text-xs text-gray-300 font-semibold">General</p>
          <div className=" border-b border-b-gray-700 w-full" />
        </div>
        <SideLink
          text={"Dashboard"}
          icon={<Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />}
          active={props.location == "dash"}
          href={"/dashboard"}
        />
        <FoldMenu location={props.location} />

        <div className="flex gap-2 items-center pb-2 pl-2 mt-4">
          <p className="text-xs text-gray-300 font-semibold">Preferences</p>

          <div className="border-b border-b-gray-700 w-full" />
        </div>

        <SideLink
          text={"Settings"}
          icon={
            <Icon
              icon="akar-icons:settings-horizontal"
              className="w-4 h-4 mr-1"
            />
          }
          active={props.location == "settings"}
          href={"/dashboard/settings"}
        />
        <SideLink
          text={"Domains"}
          icon={<Icon icon="akar-icons:globe" className="w-4 h-4 mr-1" />}
          active={props.location == "domains"}
          href={"/dashboard/domains"}
        />

        <div className="flex gap-2 items-center pb-2 pl-2 mt-4">
          <p className="text-xs text-gray-300 font-semibold">More</p>

          <div className=" border-b border-b-gray-700 w-full" />
        </div>
        <SideLink
          text={"Referrals"}
          icon={<Icon icon="akar-icons:gift" className="w-4 h-4 mr-1" />}
          active={props.location == "referrals"}
          href={"/dashboard/referrals"}
        />
        <SideLink
          text={"Support"}
          icon={
            <Icon icon="akar-icons:chat-question" className="w-4 h-4 mr-1" />
          }
          active={props.location == "support"}
          href={"/dashboard/support"}
        />
        <SideLink
          text={"Admin Panel"}
          icon={
            <Icon icon="akar-icons:double-sword" className="w-4 h-4 mr-1" />
          }
          active={props.location == "admin"}
          href={"/dashboard/admin"}
        />
      </div>
      <div className="mt-auto w-full flex justify-center border-t-2 border-secondary-background relative sidebarGlow">
        <div className="w-full h-24 z-20 p-3 bg-primary-background sidebarGlow">
          <div className="w-full h-full justify-between flex items-center  ">
            <div className="flex items-center justify-center gap-3 rounded-sm p-3 relative overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1646900614911-378fd0c1d86d?q=80&w=2160&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile Picture"
                className="h-9 w-9 rounded-full object-cover"
                height={100}
                width={100}
              />
              <div className="max-w-[120px] ">
                <p className="truncate text-primary text-sm ">Display Name</p>
                <p className="truncate text-xs text-primary">@username</p>
              </div>
            </div>
            <div className="z-50">
              <SideBarDropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
