import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/button";
import SideBarDropdown from "./sideBarDropdown";
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
        props.active && "bg-background-lighter"
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
    | "admin";
  subSection?: "gallery" | "pastes" | "collections";
}> = (props) => {
  const [checked, setChecked] = React.useState(false);

  return (
    <div className="flex-col w-64 rounded-md backdrop-blur-sm shadow-lg dark:bg-background-light desktop:flex ">
      <div className="w-full p-2 pt-5 pl-5 pb-5 flex gap-2 bg-background-lighter items-center rounded-t-lg">
        {/* <img className="h-5" src="/logo.svg" alt="logo" /> */}
        <h1
          className="font-semibold cursor-pointer"
          onClick={() => {
            window.location.href = "/";
          }}
        >
          Kythi
        </h1>
      </div>

      <div className="flex w-full flex-col px-4 py-2 text-xs gap-2">
        <div className="flex gap-2 items-center pb-2 pl-2 mt-4">
          <p className="text-xs text-gray-300">General</p>

          <div className=" border-b border-b-gray-700 w-full" />
        </div>
        <SideLink
          text={"Dashboard"}
          icon={<Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />}
          active={props.location == "dash"}
          href={"/dash"}
        />
        <FoldMenu/>

        {/* <Menu>
          <Menu.Button>
            <div
              className={`cursor-pointer flex justify-between items-center anim select-none rounded-md px-3 py-2 group ${props.location === "files" ? "bg-[#181C25]" : ""
                }`}
            >
              <div className="flex gap-2 items-center">
                <Icon icon="akar-icons:folder" className="w-4 h-4 pt-[1px]" />
                <p className="text-primary-white/80 ">Files</p>
              </div>
              <Icon icon="akar-icons:chevron-down" className="w-4 h-4" />
            </div>
          </Menu.Button>
          <Menu.Items
            as={motion.div}
            className="flex pl-5 w-full"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex w-full">
              <div className="border-l border-secondary/20 pl-2" />
              <div className="grid w-full pr-3 gap-1">
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/dash/files/gallery">
                      <div
                        className={`hover:bg-[#181C25] cursor-pointer flex gap-2 items-center anim select-none rounded-md px-3 py-2 group ${props.subSection === "gallery" ? "bg-[#181C25]" : ""
                          }`}
                      >
                        <Icon
                          icon="akar-icons:image"
                          className="w-[0.9rem] mt-[1.3px] h-[0.9rem]"
                        />
                        <p className="text-primary-white/80">Gallery</p>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/dash/files/pastes">
                      <div
                        className={`cursor-pointer hover:bg-[#181C25] flex gap-2 items-center anim select-none rounded-md px-3 py-2 group ${props.subSection === "pastes" ? "bg-[#181C25]" : ""
                          }`}
                      >
                        <Icon icon="akar-icons:clipboard" className="w-4 h-4" />
                        <p className="text-primary-white/80">Pastes</p>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
                <Menu.Item>
                  {({ active }) => (
                    <Link href="/dash/files/collections">
                      <div
                        className={`cursor-pointer flex gap-2 hover:bg-[#181C25] items-center anim select-none rounded-md px-3 py-2 group ${props.subSection === "collections"
                          ? "bg-[#181C25]"
                          : ""
                          }`}
                      >
                        <Icon
                          icon="akar-icons:folder-add"
                          className="w-4 h-4"
                        />
                        <p className="text-primary-white/80">Collections</p>
                      </div>
                    </Link>
                  )}
                </Menu.Item>
              </div>
            </div>
          </Menu.Items>
        </Menu> */}

        <div className="flex gap-2 items-center pb-2 pl-2 mt-4">
          <p className="text-xs text-gray-300">Preferences</p>

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
          href={"/dash/settings"}
        />
        <SideLink
          text={"Domains"}
          icon={<Icon icon="akar-icons:globe" className="w-4 h-4 mr-1" />}
          active={props.location == "domains"}
          href={"/dash/domains"}
        />

        <div className="flex gap-2 items-center pb-2 pl-2 mt-4">
          <p className="text-xs text-gray-300">More</p>

          <div className=" border-b border-b-gray-700 w-full" />
        </div>
        <SideLink
          text={"Referrals"}
          icon={<Icon icon="akar-icons:gift" className="w-4 h-4 mr-1" />}
          active={props.location == "referrals"}
          href={"/dash/referrals"}
        />
        <SideLink
          text={"Support"}
          icon={
            <Icon icon="akar-icons:chat-question" className="w-4 h-4 mr-1" />
          }
          active={props.location == "support"}
          href={"/dash/support"}
        />
        <SideLink
          text={"Admin Panel"}
          icon={
            <Icon icon="akar-icons:double-sword" className="w-4 h-4 mr-1" />
          }
          active={props.location == "admin"}
          href={"/dash/admin"}
        />
      </div>
      <div className="absolute w-full bottom-0">
        <img
          alt="Backdrop"
          src="https://images.unsplash.com/photo-1548567117-02328f050eaa?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="absolute max-w-xs z-10 h-24 w-full rounded-b-lg opacity-20  md:max-w-md z-0"
        />

        <div className="ml-4 justify-between pr-3 flex items-center h-24">
          <div className="flex items-center justify-center gap-3">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="Profile Picture"
              className="h-9 w-9 rounded-full object-cover"
            />
            <div className="max-w-[120px]">
              <p className="truncate text-primary">Brooky</p>
              <p className="truncate text-xs text-primary">@bbrooklyn</p>
            </div>
          </div>
          <div className="z-50">
            <SideBarDropdown />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
