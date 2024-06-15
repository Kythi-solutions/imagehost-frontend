import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/button";
import SideBarDropdown from "./sideBarDropdown";
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
      className={`w-full gap-1 flex justify-start ${props.active && "bg-[#181C25]"
        }`}
    >
      {props.icon}
      <p className="text-primary-white/80">{props.text}</p>
    </Button>
  </Link>
)

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
    <div className="flex-col w-64 rounded-lg backdrop-blur-sm dark:bg-zinc-900/15 desktop:flex ">
      <div className="w-full p-2 pt-5 pl-5 pb-5 flex gap-2 bg-[#16171f]/50 border-b-primary-blue/10 border-b items-center rounded-t-lg">
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
          <p className="text-xs text-secondary/90">General</p>

          <div className="border-b border-secondary/50 w-full" />
        </div>

        <SideLink text={"Dashboard"} icon={<Icon icon="akar-icons:dashboard" className="w-4 h-4" />} active={props.location == "dash"} href={"/dash"} />

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
          <p className="text-xs text-secondary/90">Preferences</p>

          <div className="border-b border-secondary/50 w-full" />
        </div>

        <SideLink text={"Settings"} icon={<Icon icon="akar-icons:settings-horizontal" className="w-4 h-4 mr-1" />} active={props.location == "settings"} href={"/dash/settings"} />
        <SideLink text={"Domains"} icon={<Icon icon="akar-icons:globe" className="w-4 h-4 mr-1" />} active={props.location == "domains"} href={"/dash/domains"} />

        <div className="flex gap-2 items-center pb-2 pl-2 mt-4">
          <p className="text-xs text-secondary/90">More</p>

          <div className="border-b border-secondary/50 w-full" />
        </div>
        <SideLink text={"Referrals"} icon={<Icon icon="akar-icons:gift" className="w-4 h-4 mr-1" />} active={props.location == "referrals"} href={"/dash/referrals"} />
        <SideLink text={"Support"} icon={<Icon icon="akar-icons:chat-question" className="w-4 h-4 mr-1" />} active={props.location == "support"} href={"/dash/support"} />
        <SideLink text={"Admin Panel"} icon={<Icon icon="akar-icons:double-sword" className="w-4 h-4 mr-1" />} active={props.location == "admin"} href={"/dash/admin"} />
      </div>
      <div className="absolute w-full bottom-0">
        {/* <img
          alt="Backdrop"
          src="/backdrop.png"
          className="absolute max-w-xs z-10 h-24 w-full rounded-b-lg opacity-10  md:max-w-md"
        /> */}
        {/* <div className="bg-red-200 absolute h-24 w-full rounded-b-lg opacity-10 md:max-w-md" /> */}

        <div className="ml-4 z-50 justify-between pr-3 flex items-center h-24">
          <div className="flex items-center justify-center gap-3">
            {/* <img
              src="/defaultpfp.png"
              alt="Profile Picture"
              className="h-9 w-9 rounded-full object-cover"
            /> */}
            <div className="max-w-[120px]">
              <p className="truncate text-primary-white">psycho</p>
              <p className="truncate text-xs text-secondary">
                @psychokythipscyhosigher
              </p>
            </div>
          </div>
          <div>
            <SideBarDropdown />
            {/* <Dropdown
              button={
                <>
                  <Icon
                    icon="akar-icons:more-vertical"
                    className="w-[20px] h-[20px] cursor-pointer z-40"
                  />
                </>
              }
              content={
                <>
                  <div className="p-3 border-b border-b-primary-blue/10">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm font-semibold">NahSahh</p>
                        <p className="text-xs text-primary-white/80">
                          nahsahh@outlook.com
                        </p>
                      </div>

                      <div className="px-3 select-none text-xs flex items-center h-6 rounded-xl bg-gradient-to-r from-primary-blue to-[#5D00FF] font-medium">
                        Pro
                      </div>
                    </div>
                  </div>
                  <div className="p-2 grid gap-1 text-sm border-b border-b-primary-blue/10">
                    <Link href="/dash/account">
                      <div className="cursor-pointer flex gap-2 items-center anim select-none hover:bg-[#181C25] rounded-md px-3 h-7 group">
                        <Icon icon="akar-icons:person" className="w-4 h-4" />
                        <p className="text-primary-white/80 text-xs">
                          Account Settings
                        </p>
                      </div>
                    </Link>
                    <div className="flex  items-center justify-between select-none px-3 h-7">
                      <div className="flex gap-2 items-center anim">
                        <Icon icon="akar-icons:moon" className="w-4 h-4" />
                        <p className="text-primary-white/80 text-xs">
                          Dark Mode
                        </p>
                      </div>

                      <Switch
                        checked={checked}
                        onChange={() => {
                          setChecked(!checked);
                        }}
                      />
                    </div>
                  </div>
                  <div className="p-5 cursor-pointer flex gap-2 items-center anim select-none hover:bg-[#181C25] rounded-md px-3 h-7 group">
                    <Icon icon="akar-icons:door" className="mt-[2px] w-4 h-4" />
                    <p className="text-primary-white/80 text-xs">Logout</p>
                  </div>
                </>
              }
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;