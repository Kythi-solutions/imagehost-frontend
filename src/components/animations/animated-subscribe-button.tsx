"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

interface AnimatedSubscribeButtonProps {
    brand: string;
    subscribeStatus: boolean;
    buttonTextColor?: string;
    initialText: React.ReactElement | string;
    changeText: React.ReactElement | string;
    classNames?: String;
}

export const AnimatedSubscribeButton: React.FC<
    AnimatedSubscribeButtonProps
> = ({ brand, subscribeStatus, buttonTextColor, changeText, initialText, classNames }) => {
    const [isSubscribed, setIsSubscribed] = useState<boolean>(subscribeStatus);

    return (
        <AnimatePresence mode="wait">
            {isSubscribed ? (
                <motion.div
                    className={`relative flex items-center justify-center bg-white p-[10px] text-center ${classNames}`}
                    onClick={() => setIsSubscribed(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.span
                        key="action"
                        className="relative block font-semibold"
                        initial={{ y: -50 }}
                        animate={{ y: 0 }}
                        style={{ color: brand }}
                    >
                        {changeText}
                    </motion.span>
                </motion.div>
            ) : (
                <motion.div
                    className={`relative flex ] cursor-pointer items-center justify-center rounded-md border-none p-[10px] text-center ${classNames}`}
                    style={{ backgroundColor: brand, color: buttonTextColor }}
                    onClick={() => setIsSubscribed(true)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.span
                        key="reaction"
                        className="relative block font-semibold"
                        initial={{ x: 0 }}
                        exit={{ x: 50, transition: { duration: 0.1 } }}
                    >
                        {initialText}
                    </motion.span>
                </motion.div>
            )
            }
        </AnimatePresence >
    );
};
