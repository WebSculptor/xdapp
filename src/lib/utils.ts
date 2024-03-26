import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const shortenAddress = (addr: string) => {
  return `${addr?.substring(0, 6)}...${addr?.substring(addr.length - 4)}`;
};
