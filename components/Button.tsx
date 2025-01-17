"use client";

import React from "react";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import Link from "next/link";

type ButtonProp = {
  title: string;
  path?: string;
  variant: "link" | "default" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
  size?: "default" | "sm" | "lg" | "icon" | null | undefined;
  sx?: string;
};

function ButtonCustom({ title, path, variant, size, sx }: ButtonProp) {
  const pathname = usePathname();
  const isActive = path === pathname;
  const variantClasses = variant === "default" ? "hover:text-white" : "";
  const activeClasses = isActive ? "text-primary" : "text-black";
  const customClasses = sx ? sx : "";

  return (
    <Button
      variant={variant}
      size={size ? size : "default"}
      className={`hover:text-primary ${variantClasses} ${activeClasses} ${customClasses}`}
    >
      <Link href={path ? path : ""}>{title}</Link>
    </Button>
  );
}

export default ButtonCustom;
