import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AddOnsProps {
  title: string;
  desc: string;
  id: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
}

const AddOns = ({ title, desc, id, onChange, checked }: AddOnsProps) => {
  const checkboxRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (checked) {
      //   checkboxRef.current.checked = true;
    }
  }, [checked]);

  return (
    <motion.button
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 100, opacity: 0 }}
      transition={{ delay: id / 50 }}
      className="w-full inline-block text-start"
    >
      <label htmlFor={`input-checkbox-${id}`}>
        <div
          className={`w-full py-3 md:py-4 px-3 md:px-5 rounded-lg border-2 flex items-center gap-4 cursor-pointer ${
            checked && "border-bordinput"
          }`}
        >
          <div className="relative w-5 h-5">
            <input
              ref={checkboxRef}
              type="checkbox"
              id={`input-checkbox-${id}`}
              value={id}
              onChange={onChange}
              className="hidden peer"
            />
            <span className="block w-full h-full rounded relative border after:hidden peer-checked:bg-bordinput peer-checked:after:block"></span>
          </div>
          <div className="flex-1 flex justify-between items-center text-xs md:text-[14px]">
            <div className="">
              <h1 className="font-bold text-[14px] md:text-[16px]">{title}</h1>
              <p className="text-gray-cool">{desc}</p>
            </div>
          </div>
        </div>
      </label>
    </motion.button>
  );
};

export default AddOns;
