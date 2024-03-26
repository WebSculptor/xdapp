"use client";

import { cn, shortenAddress } from "@/lib/utils";

import { RiChat1Line } from "react-icons/ri";
import { GoHeart } from "react-icons/go";
import { CgLoadbarSound } from "react-icons/cg";
import { Bookmark, Loader2, Upload } from "lucide-react";
import ReactMarkdown from "react-markdown";
import UserDetails from "./UserDetails";
import Image from "next/image";
import { Button } from "../ui/button";
import { BsThreeDots } from "react-icons/bs";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Tweet({
  name,
  address,
  caption,
  uploadedImg,
  avatar,
  comments,
  likes,
  retweets,
  id,
}: {
  name: string;
  address: string;
  caption: string;
  avatar: string;
  uploadedImg?: string;
  comments?: number;
  likes?: number;
  retweets?: number;
  id: number;
}) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(`/tweet/${id}`);
      }}
      className="border-b w-full cursor-pointer flex p-3 md:backdrop-blur-3xl gap-3 md:hover:bg-secondary/20 transition relative">
      <UserDetails avatar={avatar} />
      <div className="flex-1 flex flex-col gap-1 relative">
        <div className="flex items-center justify-between gap-4">
          <div className="flex flex-col flex-1">
            <h1 className="text-base font-bold leading-5">{name}</h1>
            <p className="text-xs leading-none text-muted-foreground">
              {shortenAddress(`${address}`)}{" "}
              <span className="text-lg leading-none">&middot;</span>{" "}
              <span>1h</span>
            </p>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              onClick={(e) => {
                e.stopPropagation();
              }}>
              <Button variant="ghost" size="icon" className="rounded-full">
                <BsThreeDots className="w-4 h-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {/* <DropdownMenuLabel>Delete</DropdownMenuLabel> */}
              {/* <DropdownMenuSeparator /> */}
              <DropdownMenuItem>Delete</DropdownMenuItem>
              <DropdownMenuItem>Report</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="flex-1">
          <ReactMarkdown
            className="overflow-hidden md:leading-6 whitespace-pre-wrap break-words flex-1 text-sm"
            components={{
              pre: ({ node, ...props }) => (
                <div className="flex flex-col">
                  <div className="flex items-center rounded-t-lg w-full h-8 px-4 bg-zinc-700 gap-x-1">
                    <span className="bg-red-500 w-3 h-3 rounded-full cursor-pointer"></span>
                    <span className="bg-yellow-500 w-3 h-3 rounded-full cursor-pointer"></span>
                    <span className="bg-green-500 w-3 h-3 rounded-full cursor-pointer"></span>
                  </div>

                  <div className="overflow-auto w-full rounded-b-lg bg-secondary whitespace-pre-wrap break-words">
                    <pre
                      {...props}
                      className="text-sm p-4 md:leading-6 markdown w-full break-words"
                    />
                  </div>
                </div>
              ),
              code: ({ node, ...props }) => (
                <code
                  className="bg-secondary border px-1 py-0.5 text-xs markdown break-words rounded-sm"
                  {...props}
                />
              ),
            }}>
            {caption || ""}
          </ReactMarkdown>
        </div>

        {uploadedImg && (
          <div className="border rounded-lg bg-secondary/30 w-full h-max mb-2">
            <Image
              src={uploadedImg}
              alt={`Upladed by ${name}`}
              width={1020}
              height={820}
              className="w-full h-auto object-contain rounded-lg"
            />
          </div>
        )}

        <div className="flex items-center justify-between gap-6">
          <div
            className="flex items-center gap-1 cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <RiChat1Line className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              {comments}
            </p>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <HiOutlineArrowPathRoundedSquare className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              {retweets}
            </p>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <GoHeart className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              {likes}
            </p>
          </div>
          <div
            className="flex items-center gap-1 cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
            }}>
            <CgLoadbarSound className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              450
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 cursor-pointer">
              <Bookmark className="w-4 h-4 text-muted-foreground" />
            </div>
            <div className="flex items-center gap-1 cursor-pointer">
              <Upload className="w-4 h-4 text-muted-foreground" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
