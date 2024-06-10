"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Theme from "@/components/theme-toggle";
import { Button } from "../shadcn/button";

type NavLinkProps = {
  text: string;
  href: string;
  primary?: boolean;
};

function NavLink({ text, href, primary }: NavLinkProps) {
  return (
    // <Link legacyBehavior href={href}>
    //   <a className="transition text-md cursor-pointer text-sm font-medium text-primary-white duration-300 hover:text-gray-300">
    //   </a>
    // </Link>

    <Button variant={"ghost"} size="sm">
      {text}
    </Button>
  );
}

export default function Navbar() {
  return (
    <motion.section
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.1,
          },
        },
      }}
      className="fixed top-0 z-50 flex h-20 w-full items-center p-2 backdrop-blur-sm"
    >
      <div className="w-full items-center mx-auto flex px-12">
        <Link legacyBehavior href="/">
          <a className="hidden h-8 w-8 cursor-pointer sm:flex bg-black dark:p-0 p-2 items-center rounded-full">
            <img src="/logo.svg" alt="logo" className="dark:bg-transparent" />
          </a>
        </Link>
        <div className="flex w-full items-center gap-5 md:justify-end justify-center">
          <div className="flex gap-5">
            <NavLink text="Docs" href="/docs" />
            <NavLink text="Discord" href="https://discord.gg/9srjWQ4sFB" />
          </div>
          <p className="flex text-gray-400">|</p>
          <div className="flex gap-5">
            <NavLink text="Register" href="/register" />
            <NavLink text="Login" primary href="/login" />
          </div>
        </div>
        <Theme />
      </div>
    </motion.section>
  );
}
