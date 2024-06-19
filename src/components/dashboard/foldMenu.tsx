import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../shadcn/accordion";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { Button } from "../shadcn/button";

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
      variant="primary"
      className={`w-full gap-1 flex justify-start ${
        props.active && "bg-background-lighter"
      }`}
    >
      {props.icon}
      <p className="text-primary-white/80">{props.text}</p>
    </Button>
  </Link>
);

const FoldMenu: React.FC<{
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
    <>
      <Accordion type="single" collapsible className="w-full border-b-0">
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger className="m-0 p-0 border-b-0">
            {" "}
            <Button
            variant="ghost"

              className="w-full gap-1 flex justify-start bg-transparent text-primary-white/80"
              size="sm"

            >
              <Icon icon="akar-icons:chevron-down" className="w-4 h-4 mr-1" />
              <p className="text-primary-white/80">Files</p>
            </Button>
          </AccordionTrigger>
          <AccordionContent className="flex w-full pl-4 flex-col py-2 text-xs gap-2">
            <SideLink
              text={"Gallery"}
              icon={
                <Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />
              }
              active={props.location == "dash"}
              href={"/dash"}
            />
            <SideLink
              text={"Pastes"}
              icon={
                <Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />
              }
              active={props.location == "dash"}
              href={"/dash"}
            />
            <SideLink
              text={"Collections"}
              icon={
                <Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />
              }
              active={props.location == "dash"}
              href={"/dash"}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default FoldMenu;
