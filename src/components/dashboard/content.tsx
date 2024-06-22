import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import {ReactNode} from "react";
import { Button } from "../shadcn/button";

const Content = ({ children }: { children: ReactNode }) => {
  return <div className="gap-6 flex w-full rounded-sm">
    {children}
  </div>;
};

export default Content;
