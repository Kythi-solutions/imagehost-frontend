import React from "react";
import Link from "next/link";
import { Button } from "@/components/shadcn/button";

const Custom404 = () => {
  return (
    <div className="h-screen space-y-4 flex flex-col justify-center items-center">
      <h1 className="text-3xl font-bold">404 - Page Not Found</h1>
      <p>The page you are looking for doesn't exist</p>
      <Link href="/">
        <Button variant={"secondary"}>Home</Button>
      </Link>
    </div>
  );
};

export default Custom404;
