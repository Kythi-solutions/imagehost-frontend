import React from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";

const PlanCard = ({
  id,
  icon,
  title,
  priceYr,
  priceMo,
  onClick,
  isActive,
  isChosen,
  onKeyPress,
}: {
  id: number;
  icon: string;
  title: string;
  priceYr: string | number;
  priceMo: string | number;
  onClick: () => void;
  isActive: boolean;
  isChosen: boolean;
  onKeyPress: () => void;
}) => {
  return (
    <motion.button
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{ delay: id / 50 }}
      onKeyPress={onKeyPress}
      onClick={onClick}
      className={`w-full relative card overflow-hidden base text-start rounded-lg border-2 py-4 md:py-5 px-4 flex gap-4 md:flex-col md:justify-between cursor-pointer ${
        isChosen && "!border-purple-400/40 anim"
      } ${isActive && "!border-purple-400/40 anim"}`}
    >
      <div className="w-[25px] h-[25px] rounded-full overflow-hidden">
        <Icon icon={icon} className="w-full h-full object-cover" />
      </div>
      <div className="">
        <h2 className="font-semibold">{title}</h2>
        <p className="text-gray-300 text-sm">
          {priceYr ? `$${priceYr}/yr` : ""}
          {priceMo ? `$${priceMo}/mo` : ""}
        </p>
      </div>
    </motion.button>
  );
};

export default PlanCard;
