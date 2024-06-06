"use client";   

import React from "react";

import { Button } from "./ui/button";
import { usePathname } from "next/navigation";

type ButtonProp = {
  title: string;
  path: string;
};

function ButtonCustom({ title, path }: ButtonProp) {
  const pathname = usePathname();
  const isActive = path === pathname;
  return (
    <Button
      variant="link"
      className={`text-xl font-bold text-gray-400 hover:text-primary ${
        isActive ? "text-primary" : "text-black"
      }`}
    >
      {title}
    </Button>
  );
}

export default ButtonCustom;
