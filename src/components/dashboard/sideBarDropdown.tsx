import React from "react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../shadcn/dropdown-menu";

export default function SideBarDropdown() {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="outline-none hover:bg-secondary-background rounded-full p-2">
          <Icon className="h-6 w-6" icon="lucide:ellipsis-vertical" />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 dark:bg-primary-background">
          <DropdownMenuLabel>
            <p>Username</p>
            <p className="font-normal">user@outlook.com</p>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon className="mr-2" icon="lucide:settings" />
            Account Settings
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon className="mr-2" icon="lucide:credit-card" />
            Subscription
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Icon className="mr-2" icon="lucide:headphones" />
            Support
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Icon className="mr-2" icon="lucide:log-out" />
            Logout
          </DropdownMenuItem>
          {/*Dark mode toggle here */}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
