"use client";
import * as React from "react";
import { Icon } from "@iconify/react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

export default function SelectMenu() {
  return (
    <Select>
      <SelectTrigger className="w-full p-4 ">
        <SelectValue placeholder="None Selected" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="ShareX">
            <Icon icon="simple-icons:sharex" className="mr-2 inline text-xs" />
           ShareX <span className="text-xs text-gray-300 ">(Windows)</span>

          </SelectItem>
          <SelectItem value="ShareNix">
            ShareNix <span className="text-xs text-gray-300">(Linux)</span>
          </SelectItem>
          <SelectItem value="MagicCap">
            Magic Cap <span className="text-xs text-gray-300">(MacOS)</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
