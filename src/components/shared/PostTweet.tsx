/* eslint-disable jsx-a11y/alt-text */
"use client";

import {
  CalendarCheck,
  ListTree,
  MapPin,
  Smile,
  Loader2,
  ImageIcon,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import UserDetails from "./UserDetails";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function PostTweet() {
  const [caption, setCaption] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File>();

  const MAX_CAPTION_LENGTH = 500;

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (caption.length === 0) {
      toast("Uh oh! Something's wrong", {
        description: "Caption or image must not be empty",
      });
      return;
    } else if (caption.length > MAX_CAPTION_LENGTH) {
      toast("Too much words", {
        description: "You have exceeded the maximum number of words",
      });
      return;
    }

    setIsPosting(true);

    try {
      console.log(caption, selectedImage);
      setTimeout(() => {
        toast("Success", {
          description: "Tweet posted successfully",
        });
        setIsPosting(false);
        setSelectedImage(undefined);
        setCaption("");
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
    <div className="w-full border-b p-3 flex gap-3">
      <UserDetails
        avatar="https://pbs.twimg.com/profile_images/1770400128437772288/xHvRrUHJ_400x400.jpg"
        // address={`${address}`}
      />
      <form onSubmit={handleSubmit} className="flex flex-col flex-1 gap-3">
        <Textarea
          value={caption}
          disabled={isPosting}
          rows={1}
          autoComplete="false"
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What is happening?"
          className="outline-none focus:outline-none rounded-none border-none w-full text-base px-0 py-0"
        />
        {selectedImage && (
          <div
            className={cn(
              "border rounded-lg w-full h-max bg-secondary/20 overflow-hidden relative",
              {
                "cursor-not-allowed pointer-events-none opacity-50 blur-sm":
                  isPosting,
              }
            )}>
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
              alt={caption}
              width={520}
              height={400}
              priority
              className="w-full h-full object-contain object-center"
            />
          </div>
        )}

        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-2.5 relative">
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
            <EmojiPicker
              className="absolute bottom-0 left-0"
              open={openEmoji}
            />
            <Smile
              className="w-5 h-5 text-primary cursor-pointer"
              onClick={() => setOpenEmoji(!openEmoji)}
            />
            <ListTree className="w-5 h-5 text-primary cursor-not-allowed opacity-50" />
            <MapPin className="w-5 h-5 text-primary cursor-not-allowed opacity-50" />
            <CalendarCheck className="w-5 h-5 text-primary cursor-not-allowed opacity-50" />
          </div>
          <Button
            type="submit"
            className="font-bold text-[15px] rounded-full transition-all"
            disabled={
              !caption.trimStart() ||
              isPosting ||
              caption.length > MAX_CAPTION_LENGTH
            }
            variant={
              caption.length > MAX_CAPTION_LENGTH ? "destructive" : "default"
            }>
            {isPosting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
