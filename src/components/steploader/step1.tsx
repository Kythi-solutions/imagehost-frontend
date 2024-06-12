import React, { useContext, useEffect, useState } from "react";
import { Button } from "../shadcn/button";
import { StepContext } from "./context";
import { motion, AnimatePresence } from "framer-motion";
import Buttons from "../register/buttons";
import { Input } from "../shadcn/input";

const Step1 = (button: any) => {
  const { currentStep, handleSetCurrentStep, handleUpdateFormData, form } =
    useContext(StepContext);

  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [invite, setInvite] = useState("");
  const [inviteError, setInviteError] = useState("");

  useEffect(() => {
    if (form) {
      setUsername(form.username || "");
      setPassword(form.password || "");
      setEmail(form.email || "");
      setInvite(form.invite || "");
    }
  }, [form]);

  useEffect(() => {
    const handleBackButtonPress = (e: any) => {
      if (e.key === "Backspace" || e.key === "Back") {
        e.preventDefault();
        handleSetCurrentStep(2);
      }
    };

    document.addEventListener("keydown", handleBackButtonPress);

    return () => {
      document.removeEventListener("keydown", handleBackButtonPress);
    };
  });

  const validateEmail = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const isEmailValid = emailPattern.test(email);

    if (!isEmailValid) setEmailError("Invalid email");

    return isEmailValid;
  };

  const handleSubmit = () => {
    if (username.length === 0) {
      setUsernameError("Too short (min. 1)");
    }
    if (username.length > 32) {
      setUsernameError("Too long (max. 32)");
    }
    if (password.length < 8) {
      setPasswordError("Too short (min. 8)");
    }
    if (password.length > 256) {
      setPasswordError("Too long (max. 256)");
    }
    if (invite.length !== 32) {
      setInviteError("Invalid invite");
    }
    if (
      validateEmail() &&
      username.length > 0 &&
      username.length < 32 &&
      password.length >= 8 &&
      password.length < 256 &&
      invite.length === 32
    ) {
      let data = { username, password, email, invite, form: "" };
      handleUpdateFormData(data);
      handleSetCurrentStep(currentStep + 1);
    }
  };

  return (
    <AnimatePresence mode="wait">
      <div className="max-w-lg relative z-20">
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ delay: 0.1 }}
          className="text-content mb-4 md:mb-6"
        >
          <h1 className="text-2xl md:text-3xl font-semibold mb-2">
            Create an account
          </h1>
          <p className="text-gray-cool text-sm">
            Welcome to Kythi! Please enter your details to get started.
          </p>
        </motion.div>
        <form className="sm:text-sm space-y-4" autoComplete="off" autoSave="tr">
          <div className="flex gap-2 w-full">
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between">
                <label htmlFor="username" className="block font-medium">
                  Username
                </label>
                {usernameError.length > 0 && (
                  <p className="font-semibold text-red-600">{usernameError}</p>
                )}
              </div>

              <Input
                value={username}
                onChange={(e) => {
                  setUsername(e.target.value);
                  setUsernameError("");
                }}
                type="text"
                id="username"
                placeholder="Enter your username"
                className={` ${
                  usernameError && "border-red-600/30 hover:border-red-600/60"
                }`}
              />
            </motion.div>

            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ delay: 0.2 }}
              className="w-full space-y-2"
            >
              <div className="flex items-center justify-between">
                <label htmlFor="email" className="block font-medium">
                  Email address
                </label>
                {emailError.length > 0 && (
                  <p className="font-semibold text-red-600">{emailError}</p>
                )}
              </div>

              <Input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                type="email"
                id="email"
                placeholder="Enter your email address"
                className={` ${
                  emailError && "border-red-600/30 hover:border-red-600/60"
                }`}
              />
            </motion.div>
          </div>
          {/* password */}
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block font-medium">
                Password
              </label>
              {passwordError.length > 0 && (
                <p className="font-semibold text-red-600">{passwordError}</p>
              )}
            </div>

            <Input
              value={password}
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordError("");
              }}
              id="password"
              placeholder="Enter your password"
              className={` ${
                passwordError && "border-red-600/30 hover:border-red-600/60"
              }`}
            />
          </motion.div>
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ delay: 0.35 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <label htmlFor="invite" className="block font-medium">
                Invite
              </label>
              {inviteError.length > 0 && (
                <p className="font-semibold text-red-600">{inviteError}</p>
              )}
            </div>

            <Input
              value={invite}
              onChange={(e) => {
                setInviteError("");
                setInvite(e.target.value);
              }}
              id="invite"
              placeholder="Kythi-1234-5678-9101"
              className={`${
                inviteError && "border-red-600/30 hover:border-red-600/60"
              }`}
            />
          </motion.div>
        </form>
        <div>
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
            exit={{ y: 100, opacity: 0 }}
          >
            <div className="flex items-center mt-4">
              <div className="flex-grow h-px bg-border" />
              <span className="px-4 text-gray-500 text-sm">or</span>
              <div className="flex-grow h-px bg-border" />
            </div>
            <div className="flex justify-center gap-4 mt-3">
              <img
                src="/icons/discord.svg"
                alt="discord icon"
                className="h-5 w-5 anim hover:scale-125 cursor-pointer"
              />
              <img
                src="/icons/github.svg"
                alt="github icon"
                className="h-5 w-5 anim hover:scale-125 cursor-pointer"
              />
            </div>
            <Buttons handleclick={() => handleSubmit()} />
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default Step1;
