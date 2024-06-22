import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {ReactNode} from "react";
import { Button } from "../shadcn/button";

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="bg-background-light w-full rounded-sm p-6  ">
    {children}
  </div>;
};

export default Content;
