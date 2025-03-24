import { Icon } from "@iconify/react";
import { Button } from "../shadcn/button";
import { Skeleton } from "../shadcn/skeleton";
import { Badge } from "../shadcn/badge";

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
  timeline?: boolean;
  growth?: number;
}

const StatisticCard = ({
  title,
  value,
  icon,
  timeline = true, // Default value for timeline
  growth = 0, // Default value for growth
}: StatisticCardProps) => {
  let glow;
  if (growth > 0) {
    glow = "increase";
  } else if (growth < 0) {
    glow = "decrease";
  } else {
    glow = "base";
  }
  return (
    <div
      className={`card w-full relative flex flex-col justify-between ${glow}`}
    >
      <div className="flex justify-between">
        <div className="flex items-center gap-x-2 leading-none">
          <div className="p-1 rounded-full bg-white/10">{icon}</div>
          <div className="font-semibold text-white/90 text-md">{title}</div>
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
        <div className="text-xl font-bold w-full flex items-center gap-x-4">
          {value}
          {growth != 0 ? (
            <Badge className={growth > 0 ? "badge_increase" : "badge_decrease"}>
              {growth > 0 ? "+" : ""}
              {growth}%
            </Badge>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default StatisticCard;
