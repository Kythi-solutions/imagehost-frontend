import { Icon } from "@iconify/react";
import { Button } from "../shadcn/button";
import { Skeleton } from "../shadcn/skeleton";
import { Badge } from "../shadcn/badge"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../shadcn/select";

interface StatisticCardProps {
  title: string;
  value: React.ReactNode;
  icon: React.ReactNode;
  increase?: boolean;
  timeline?: boolean;
}

const StatisticCard = ({
  title,
  value,
  icon,
  increase = undefined, // Default value for increase
  timeline = true, // Default value for timeline
}: StatisticCardProps) => {
  let glow;
  switch (increase) {
    case true:
      glow = "increase";
      break;
    case false:
      glow = "decrease";
      break;
    default:
      glow = "base";
      break;
  }
  return (
    <div
      className={`card w-full relative flex flex-col justify-between ${glow}`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2 leading-none">
          <div className="p-1 rounded-full bg-white/10">{icon}</div>
          <div className="font-semibold text-white/90 text-md">
            {title}
          </div>
        </div>
        <div>
          {timeline == true ? (
            <Select>
              <SelectTrigger className="border-none p-0 m-0 h-full">
                <SelectValue
                  className="!text-white/40 select-value"
                  placeholder="Week"
                />
                <Icon icon="akar-icons:chevron-down" className="ml-4 w-3 h-3" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Week">Week</SelectItem>
                <SelectItem value="Month">Month</SelectItem>
                <SelectItem value="Year">Year</SelectItem>
              </SelectContent>
            </Select>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="flex items-center h-full pt-2">
        
        <div className="text-xl font-bold w-full flex items-center gap-x-4">{value}<Badge>+12%</Badge></div>
        {/* Glow bottom right */}
      </div>
      
      {/*<div className=" w-10 h-10 transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>*/}
    </div>
  );
};

export default StatisticCard;
