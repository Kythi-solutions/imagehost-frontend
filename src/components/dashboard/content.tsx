import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ReactNode } from "react";
import { Button } from "../shadcn/button";

const Content = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full flex gap-6 flex-col max-h-screen">{children}</div>
  );
};

export default Content;
