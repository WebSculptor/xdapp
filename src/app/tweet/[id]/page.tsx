"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  ImageIcon,
  Inbox,
  Loader2,
  Mailbox,
  Upload,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import ReactMarkdown from "react-markdown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { BsThreeDots } from "react-icons/bs";
import { shortenAddress } from "@/lib/utils";
import { RiChat1Line } from "react-icons/ri";
import { HiOutlineArrowPathRoundedSquare } from "react-icons/hi2";
import { GoHeart } from "react-icons/go";
import { CgLoadbarSound } from "react-icons/cg";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { dummy_tweets } from "@/constants";
import Tweet from "@/components/shared/Tweet";

export default function TweetDetails() {
  const router = useRouter();
  const [reply, setReply] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const MAX_CAPTION_LENGTH = 200;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (reply.length === 0) {
      toast("Uh oh! Something's wrong", {
        description: "Caption or image must not be empty",
      });
      return;
    } else if (reply.length > MAX_CAPTION_LENGTH) {
      toast("Too much words", {
        description: "You have exceeded the maximum number of words",
      });
      return;
    }

    setIsPosting(true);

    try {
      console.log(reply, selectedImage);
      setTimeout(() => {
        toast("Success", {
          description: "Tweet posted successfully",
        });
        setIsPosting(false);
        setSelectedImage(undefined);
        setReply("");
      }, 5000);
    } catch (error) {
      toast("Something went wrong", {
        description: "Could not create post, please try again!",
        action: {
          label: "Try again",
          onClick: () => handleSubmit,
        },
      });
    }
  };

  return (
    <div className="flex-1">
      <div className="h-14 backdrop-blur-3xl bg-background/50 flex items-center sticky top-0 z-10 px-4 gap-2">
        <Button size="icon" variant="outline" onClick={() => router.back()}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <h1 className="text-base md:text-lg font-semibold">Post</h1>
      </div>

      <div className="flex flex-col px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="" />
              <AvatarFallback>VC</AvatarFallback>
            </Avatar>

            <div className="flex flex-col flex-1">
              <h1 className="text-base font-bold leading-5">
                Abdullahi Salihu
              </h1>
              <p className="text-xs leading-none text-muted-foreground">
                {shortenAddress("0x0000000000000000000000000000000")}{" "}
                <span className="text-lg leading-none">&middot;</span>{" "}
                <span>1h</span>
              </p>
            </div>
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
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
            className="overflow-hidden md:leading-6 whitespace-pre-wrap break-words flex-1 text-base"
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
                      className="text-base p-4 md:leading-6 markdown w-full break-words"
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
            Calling all smart contract and Solidity tooling and `@gakonst`
            `@paradigm` `@HardhatHQ` `@trufflesuite` `@etherscan` `@TenderlyApp`
            `@coinbase` `@AlchemyPlatform` : Can you please provide additional
            support for EIP-2535 Diamonds? It has been used by over 100 projects
            including some major ones like `@zksync` and `@TrustWallet` and
            `@DiamondSwapTeam` and is the preferred choice for many new smart
            contract platforms like `@NiftyKitApp` , `@TheGemPad` ,
            `@KanaloaNetwork` etc. https://github.com/mudgen/awesome-diamonds
          </ReactMarkdown>
        </div>

        <div className="my-4 flex items-center gap-1 text-xs">
          <p className="text-muted-foreground">4:43 PM</p>
          <span>&middot;</span>
          <p className="text-muted-foreground">Mar 26, 2024</p>
          <span>&middot;</span>
          <p className="text-muted-foreground">
            <span className="text-foreground font-semibold">1,409</span> Views
          </p>
        </div>

        <div className="py-3 px-2 flex items-center justify-between border-y">
          <div className="flex items-center gap-1 cursor-pointer group">
            <RiChat1Line className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              0
            </p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            <HiOutlineArrowPathRoundedSquare className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              0
            </p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            <GoHeart className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              0
            </p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer group">
            <CgLoadbarSound className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition" />
            <p className="text-sm text-muted-foreground group-hover:text-foreground transition">
              450
            </p>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <Upload className="w-4 h-4 text-muted-foreground" />
          </div>
        </div>
      </div>

      <div className="border-b px-4 py-2 flex items-start gap-3">
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>
        <div className="flex flex-col gap-2 w-full">
          <form
            onSubmit={handleSubmit}
            className="flex items-center flex-1 gap-2 bg-secondary/70 rounded-full pr-1.5 pl-4">
            <Input
              value={reply}
              disabled={isPosting}
              autoComplete="false"
              onChange={(e) => setReply(e.target.value)}
              placeholder="Post a reply"
              className="outline-none focus:outline-none rounded-none border-none flex-1 text-base px-0 h-10"
            />
            <div className="flex items-center gap-2 relative">
              <input
                className="hidden"
                hidden
                type="file"
                id="imageSelect"
                accept="image/*"
                onChange={(e: any) => setSelectedImage(e.target.files[0])}
              />
              <label htmlFor="imageSelect">
                <ImageIcon className="w-5 h-5 text-primary cursor-pointer" />
              </label>
            </div>
            <Button
              type="submit"
              size="sm"
              className="font-bold rounded-full transition-all"
              disabled={
                !reply.trimStart() ||
                isPosting ||
                reply.length > MAX_CAPTION_LENGTH
              }
              variant={
                reply.length > MAX_CAPTION_LENGTH ? "destructive" : "default"
              }>
              {isPosting ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                "Reply"
              )}
            </Button>
          </form>

          {selectedImage && (
            <div className="border rounded-lg w-64 h-max ml-auto bg-secondary/40 overflow-hidden relative">
              <Button
                variant="secondary"
                className="absolute top-2 right-2 z-10 rounded-full"
                size="icon"
                onClick={() => {
                  if (selectedImage) {
                    setSelectedImage(undefined);
                  }
                }}>
                <X className="w-4 h-4" />
              </Button>
              <Image
                src={URL.createObjectURL(selectedImage!)}
                alt="Something"
                width={254}
                height={150}
                priority
                className="w-full h-full object-contain object-center"
              />
            </div>
          )}
        </div>
      </div>

      {isLoading ? (
        <div className="w-full flex justify-center my-6">
          <Loader2 className="text-primary animate-spin" />
        </div>
      ) : dummy_tweets.length === 0 ? (
        <div className="w-full flex justify-center flex-col items-center my-6">
          <Inbox className="w-10 h-10 opacity-70 text-muted-foreground" />
          <p className="text-muted-foreground text-sm font-medium">
            There are no post yet, be the first to post!
          </p>
        </div>
      ) : (
        <>
          {dummy_tweets.map((tweet, _key) => (
            <Tweet key={_key} {...tweet} id={_key} />
          ))}
          <div className="w-full flex justify-center flex-col items-center py-6">
            <Mailbox className="w-10 h-10 opacity-70 text-muted-foreground" />
            <p className="text-muted-foreground text-sm font-medium">
              You have reached the end of the post
            </p>
          </div>
        </>
      )}
    </div>
  );
}
