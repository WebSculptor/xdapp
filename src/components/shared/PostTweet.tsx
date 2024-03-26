/* eslint-disable jsx-a11y/alt-text */
"use client";

import {
  CalendarCheck,
  ListTree,
  MapPin,
  Smile,
  Loader2,
  ImageIcon,
} from "lucide-react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { SetStateAction, useState } from "react";
import { toast } from "sonner";
import UserDetails from "./UserDetails";
import EmojiPicker from "emoji-picker-react";
import Image from "next/image";

export default function PostTweet() {
  const [caption, setCaption] = useState("");
  const [isPosting, setIsPosting] = useState(false);
  const [openEmoji, setOpenEmoji] = useState(false);
  const [selectedImage, setSelectedImage] = useState();

  const handleSelectImage = (e: any) => {
    setSelectedImage(e.target.files[0]);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (caption.length === 0) {
      toast("Uh oh! Something's wrong", {
        description: "Caption or image must not be empty",
      });
      return;
    } else if (caption.length > 50) {
      toast("Too much words", {
        description: "You have exceeded the maximum number of words",
      });
      return;
    }

    setIsPosting(true);

    try {
      console.log(caption, selectedImage);
    } catch (error) {
      toast("Something went wrong", {
        description: "Could not create post, please try again!",
        action: {
          label: "Try again",
          onClick: () => handleSubmit,
        },
      });
    } finally {
      setIsPosting(false);
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
          onChange={(e) => setCaption(e.target.value)}
          placeholder="What is happening?"
          className="outline-none focus:outline-none rounded-none border-none w-full text-lg px-0"
        />
        {selectedImage && (
          <div className="border rounded-lg w-min h-min bg-secondary/20 overflow-hidden">
            <Image
              src={URL.createObjectURL(selectedImage!)}
              alt={caption}
              width={520}
              height={400}
              className="w-full h-full"
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
              onChange={handleSelectImage}
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
            className="font-bold text-[15px] rounded-full"
            disabled={!caption.trimStart() || isPosting}>
            {isPosting ? <Loader2 className="w-5 h-5 animate-spin" /> : "Post"}
          </Button>
        </div>
      </form>
    </div>
  );
}
