"use client";
import { type AnimationProps, motion } from "framer-motion";

const animationProps = {
  initial: { "--x": "100%", scale: 0.8 },
  animate: { "--x": "-100%", scale: 1 },
  whileTap: { scale: 0.95 },
  transition: {
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 1,
    type: "spring",
    stiffness: 20,
    damping: 15,
    mass: 2,
    scale: {
      type: "spring",
      stiffness: 200,
      damping: 5,
      mass: 0.5,
    },
  },
} as AnimationProps;

interface ShinyButtonProps {
  text?: string;
  onClick?: () => void;
}

const ShinyButton: React.FC<ShinyButtonProps> = ({
  text = "shiny-button",
  onClick,
}) => {
  return (
    <motion.button
      {...animationProps}
      onClick={onClick}
      className="rounded-md h-12 px-8 backdrop-blur-xl text-sm transition-[box-shadow] duration-300 ease-in-out hover:shadow dark:hover:shadow-[0_0_20px_hsl(var(--primary)/10%)]"
    >
      {text}
      <span
        style={{
          mask: "linear-gradient(rgb(0,0,0), rgb(0,0,0)) content-box,linear-gradient(rgb(0,0,0), rgb(0,0,0))",
          maskComposite: "exclude",
        }}
        className="absolute inset-0 z-10 block rounded-[inherit] bg-[linear-gradient(-75deg,hsl(var(--primary)/10%)_calc(var(--x)+20%),hsl(var(--primary-blue))_calc(var(--x)+25%),hsl(var(--primary)/10%)_calc(var(--x)+100%))] p-px"
      />
    </motion.button>
  );
};

export default ShinyButton;
