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
        props.active && "bg-accent"
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
    | "admin"
    | "gallery"
    | "pastes"
    | "collections";
}> = (props) => {
  const [checked, setChecked] = React.useState(false);
  const active = props.location == "gallery" || props.location == "pastes" || props.location == "collections";

  return (
    <>
      <Accordion type="single" collapsible className="w-full" defaultValue={active ? "item-1" : "none"}>
        <AccordionItem value="item-1" className="w-full border-0">
          <AccordionTrigger className="m-0 p-0 hover:no-underline ">
            {" "}
            <Button
              variant="ghost"
              className="w-full active:bg-accent gap-1 flex justify-between bg-transparent text-primary-white/80"
              size="sm"
            >
              <div className="flex w-full justify-start">
              <Icon icon="lucide:file" className="w-4 h-4 mr-2" />
              <p className="text-primary-white/80">Files</p>

              </div>
              <Icon icon="akar-icons:chevron-down" className="w-4 h-4 mr-1 text-white/30" />
              
            </Button>
          </AccordionTrigger>
          <AccordionContent className="flex w-full pl-4 flex-col py-2 text-xs gap-2 ">
            <SideLink
              text={"Gallery"}
              icon={
                <Icon icon="lucide:images" className="w-4 h-4 mr-1" />
              }
              active={props.location == "gallery"}
              href={"/dashboard/gallery"}
            />
            <SideLink
              text={"Pastes"}
              icon={
                <Icon icon="lucide:clipboard-list" className="w-4 h-4 mr-1" />
              }
              active={props.location == "pastes"}
              href={"/dashboard/pastes"}
            />
            <SideLink
              text={"Collections"}
              icon={
                <Icon icon="lucide:group" className="w-4 h-4 mr-1" />
              }
              active={props.location == "collections"}
              href={"/dashboard/collections"}
            />
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
};
export default FoldMenu;
