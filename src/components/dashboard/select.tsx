"use client";
import * as React from "react";

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
            ShareX <span className="text-xs text-gray-300">(Windows)</span>
          </SelectItem>
          <SelectItem value="grapes">
            ShareNix <span className="text-xs text-gray-300">(Linux)</span>
          </SelectItem>
          <SelectItem value="pineapple">
            Magic Cap <span className="text-xs text-gray-300">(MacOS)</span>
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
