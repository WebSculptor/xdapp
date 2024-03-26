"use client";

import { shortenAddress } from "@/lib/utils";
import { Button } from "../ui/button";
// import { useWeb3ModalTheme } from "@web3modal/ethers/react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Link from "next/link";
import { site_config } from "@/constants";
import {
  useWeb3ModalAccount,
  useWeb3ModalTheme,
} from "@web3modal/ethers/react";
import { MoveRight } from "lucide-react";
import { BsTwitterX } from "react-icons/bs";

export default function Recommended() {
  const { setThemeVariables } = useWeb3ModalTheme();
  const { isConnected } = useWeb3ModalAccount();

  setThemeVariables({
    "--w3m-accent": "#1D9BF0",
    "--w3m-font-size-master": "9px",
  });

  return (
    <div className="flex-1 flex-col px-6 hidden lg:flex sticky top-0 z-10 h-full w-96">
      <div className="h-14 bg-background flex items-center py-1.5">
        <Link
          target="_blank"
          href="https://twitter.com/web_sculptor?ref_src=twsrc%5Etfw"
          className="text-sm flex items-center"
          data-show-count="false">
          <BsTwitterX className="w-3 h-3 mr-2" />
          Follow Author on Twitter
        </Link>
      </div>
      <div className="py-3 flex flex-col gap-6">
        <div className="w-full rounded-2xl p-4 bg-secondary dark:bg-secondary/50 space-y-3">
          <p className="text-sm">{site_config.desc}</p>

          <w3m-button />
        </div>
        <div className="w-full rounded-2xl py-3 px-4 bg-secondary dark:bg-secondary/50">
          <h1 className="text-base font-semibold">Who to follow</h1>

          <div className="flex flex-col gap-3 my-3">
            {Array.from({ length: 4 }).map((_, _key) => (
              <div className="flex items-center gap-3" key={_key}>
                <Avatar className="border">
                  <AvatarImage src="https://github.com/vercel.png" />
                  <AvatarFallback>VC</AvatarFallback>
                </Avatar>
                <div className="hidden lg:flex flex-col flex-1">
                  <h1 className="text-sm font-bold">0xWebSculptor</h1>
                  <p className="text-xs text-muted-foreground">
                    {shortenAddress(
                      "0xB6B0746f8137Db1E788597CFcD818e2B3bfF6324"
                    )}
                  </p>
                </div>
                <Button
                  size="sm"
                  className="rounded-full hidden lg:flex py-1 h-7">
                  Follow
                </Button>
              </div>
            ))}
          </div>

          <Link
            href="/explore"
            className="text-primary text-xs hover:underline w-max">
            See more
          </Link>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1 px-3">
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          Terms of Service
        </p>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          Privacy Policy
        </p>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          Cookie Policy
        </p>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          Accessibility
        </p>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          Ads info
        </p>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          More
        </p>
        <p className="text-sm text-muted-foreground hover:underline cursor-pointer">
          © 2024 X Corp.
        </p>
      </div>
    </div>
  );
}
