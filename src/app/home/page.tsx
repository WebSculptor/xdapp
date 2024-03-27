"use client";

import PopupPostTweet from "@/components/shared/PopupPostTweet";
import PostTweet from "@/components/shared/PostTweet";
import Tweet from "@/components/shared/Tweet";
import TweetHeader from "@/components/shared/TweetHeader";
import { dummy_tweets } from "@/constants";

import { Inbox, Loader2, Mailbox } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <TweetHeader />
      <div className="hidden sm:flex">
        <PostTweet />
      </div>
      <div className="flex sm:hidden fixed bottom-4 right-4 z-40 rounded-full">
        <PopupPostTweet float />
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
