"use client";
import React from "react";
import { cn } from "@/lib/utils";

export const Button = ({
  className,
  target,
  text,
  href,
  icon
}: {
  className?: string;
  target?: string;
  text: string;
  href?: string;
  icon?: React.ReactNode;
}) => {
  return (
    <a href={href} target={target} className={cn(
    "px-12 py-4 border cursor-pointer border-black bg-transparent text-white dark:border-white relative group transition duration-200",
     className
    )}>
      <div className="absolute -bottom-2 -right-2 bg-black h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
      <span className="relative">
        {text}
      </span>
    </a>
  );
};
