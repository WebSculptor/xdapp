"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Ellipsis } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn, shortenAddress } from "@/lib/utils";
import { side_links } from "@/constants";

import { SwatchBook } from "lucide-react";
import UserDetails from "./UserDetails";
import { RiHomeFill, RiHomeLine } from "react-icons/ri";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function MobileSidebar() {
  const pathname = usePathname();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Avatar className="cursor-pointer">
          <AvatarImage src="/" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
      </SheetTrigger>
      <SheetContent side="left">
        <div className="flex flex-col justify-start py-3 px-2 w-full h-full">
          <div className="flex-1 flex flex-col items-start">
            <Link href="/home" className="w-max mb-4">
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="w-12 h-8 fill-foreground">
                <g>
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
                </g>
              </svg>
            </Link>
            <div className="flex-1 flex flex-col gap-2 w-full">
              <Link href="/home" className="w-full group h-12">
                <div
                  className={cn(
                    "w-max rounded-full transition py-2.5 px-3 h-full flex items-center gap-3",
                    {
                      "group-hover:bg-secondary/80": pathname == "/home",
                      "group-hover:bg-secondary/50": pathname != "/home",
                    }
                  )}>
                  <span
                    className={cn("text-muted-foreground", {
                      "text-foreground": pathname == "/home",
                    })}>
                    {pathname === "/home" ? (
                      <RiHomeFill className="w-6 h-6" />
                    ) : (
                      <RiHomeLine className="w-6 h-6" />
                    )}
                  </span>
                  <p
                    className={cn(
                      "text-lg font-medium text-muted-foreground flex capitalize",
                      {
                        "font-bold text-foreground": pathname == "/home",
                      }
                    )}>
                    Home
                  </p>
                </div>
              </Link>

              {side_links.map((link) => (
                <Link
                  href={link.path}
                  className="w-full group h-12"
                  key={link.name}>
                  <div
                    className={cn(
                      "w-max rounded-full transition py-2.5 px-3 pr-4 h-full flex items-center gap-3",
                      {
                        "group-hover:bg-secondary/80": pathname == link.path,
                        "group-hover:bg-secondary/50": pathname != link.path,
                      }
                    )}>
                    <span
                      className={cn("text-muted-foreground", {
                        "text-foreground": pathname == link.path,
                      })}>
                      {link.path === pathname ? link.activeIcon : link.icon}
                    </span>
                    <p
                      className={cn(
                        "text-lg font-medium text-muted-foreground flex capitalize",
                        {
                          "font-bold text-foreground": pathname == link.path,
                        }
                      )}>
                      {link.name}
                    </p>
                  </div>
                </Link>
              ))}

              <Button className="text-lg font-bold h-[52px] w-full mt-2 rounded-full">
                <p className="text-lg flex">Post</p>
              </Button>
            </div>
          </div>

          <div className="flex items-center gap-3 p-2.5 rounded-full hover:bg-secondary/40 mt-3">
            <UserDetails />
            <div className="flex flex-col flex-1">
              <h1 className="text-sm font-bold">Abdullahi Salihu</h1>
              <p className="text-xs text-muted-foreground">
                {shortenAddress("0xB6B0746f8137Db1E788597CFcD818e2B3bfF6324")}
              </p>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full flex">
              <Ellipsis className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
