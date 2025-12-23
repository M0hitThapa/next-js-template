import { cn } from "@/lib/utils";
import React from "react";

export const SubHeading = ({
  className,
  children,
  as = "p",
}: {
  className?: string;
  children: React.ReactNode;
  as?: "h1" | "h2" | "p";
}) => {
  const Tag = as;
  return (
    <Tag
      className={cn(
        "text-base md:text-lg text-neutral-400 dark:text-neutral-600 max-w-xl ",
        className
      )}
    >
      {children}
    </Tag>
  );
};
