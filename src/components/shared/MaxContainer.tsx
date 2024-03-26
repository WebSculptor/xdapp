import { cn } from "@/lib/utils";
import React from "react";

interface MaxContainerProps {
  children: React.ReactNode;
  className?: string;
}

export default function MaxContainer({
  children,
  className,
}: MaxContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full container px-0 max-w-[1253px]", className)}>
      {children}
    </div>
  );
}
