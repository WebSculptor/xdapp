"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import PostTweet from "./PostTweet";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";

export default function PopupPostTweet({ float }: { float?: boolean }) {
  const { isConnected } = useWeb3ModalAccount();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {float ? (
          <Button size="icon" className="w-14 h-14 rounded-full">
            <Plus className="w-6 h-6" />
          </Button>
        ) : (
          <Button className="text-lg font-bold h-[52px] w-full md:w-[calc(100%-5%)] mt-2 rounded-full">
            <Plus className="w-6 h-6 flex md:hidden" />

            <p className="text-lg hidden md:flex">Post</p>
          </Button>
        )}
      </DialogTrigger>
      <DialogContent className="top-[20%] rounded-lg pb-0 border-b-0 overflow-hidden">
        <PostTweet />
      </DialogContent>
    </Dialog>
  );
}
