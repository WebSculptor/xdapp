"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { shortenAddress } from "@/lib/utils";
import { Copy, CornerDownLeft, Inbox, Loader2, Mailbox } from "lucide-react";
import { ReactNode, useEffect, useState } from "react";
import { dummy_tweets } from "@/constants";
import Tweet from "@/components/shared/Tweet";

export default function Profile() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 2000);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="flex-1">
      <div className="border-b h-14 backdrop-blur-3xl bg-background/50 flex items-center sticky top-0 z-10 px-3 py-2 gap-2">
        <Button size="icon" variant="ghost" onClick={() => router.back()}>
          <CornerDownLeft className="w-4 h-4" />
        </Button>
        <h1 className="text-sm font-semibold">
          {shortenAddress("0xC0E11e7674B3267175569e1c42b85bB5554aFEB4")}
        </h1>
      </div>
      <div className="aspect-[3] bg-secondary"></div>

      <div className="-mt-14 sm:-mt-16">
        <div className="flex items-end justify-between px-3">
          <div className="w-28 sm:w-[133.5px] h-28 sm:h-[133.5px] rounded-full border-background border-[4px] bg-secondary"></div>

          <div className="flex items-center gap-2 mb-2 sm:mb-5">
            <Button variant="outline" className="rounded-full">
              Edit profile
            </Button>
            <Button className="rounded-full font-bold">Follow</Button>
          </div>
        </div>

        <div className="flex flex-col px-4 mt-2 pb-4 border-b">
          <h1 className="text-xl font-bold">Abdullahi Salihu</h1>
          <p className="text-sm text-muted-foreground mt-1 flex items-center">
            <Copy className="w-3 h-3 mr-1.5" />
            0xC0E11e7674B3267175569e1c42b85bB5554aFEB4
          </p>
          <p className="text-sm sm:text-base my-1 sm:my-3 flex items-center sm:leading-5">
            Join me to learn how solopreneurs are making real money - I share
            Profitable Business Ideas daily
          </p>
          <div className="flex items-center gap-4">
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-foreground font-bold">30</span>
              Following
            </p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-foreground font-bold">30</span>
              Followers
            </p>
            <p className="text-sm text-muted-foreground mt-1 flex items-center gap-1">
              <span className="text-foreground font-bold">230</span>
              Posts
            </p>
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
    </div>
  );
}
