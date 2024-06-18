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
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1" className="w-full">
          <AccordionTrigger>
            {" "}
            <Button
              className="w-full gap-1 flex justify-start"
              variant="primary"
            >
              <Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />
              <p className="text-primary-white/80">Files</p>
            </Button>
          </AccordionTrigger>
          <AccordionContent className="flex w-full flex-col py-2 text-xs gap-2">
            <SideLink
              text={"Dashboard"}
              icon={
                <Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />
              }
              active={props.location == "dash"}
              href={"/dash"}
            />
            <SideLink
              text={"Dashboard"}
              icon={
                <Icon icon="akar-icons:dashboard" className="w-4 h-4 mr-1" />
              }
              active={props.location == "dash"}
              href={"/dash"}
            />
            <SideLink
              text={"Dashboard"}
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
